"use strict";
/* Nicholas the Traveler's spot one week, on its map, with the way to him from the outposts nearby (the entry's at and
   from in calendar.js): nickHTML() gives the area for it, nickMap(el, i) draws entry i of his rotation there. The ways
   are worked out in the browser (walkroute.js); his area, the outposts and the areas the ways cross are lit. */
const NICK = ROTATIONS["nicholas-traveler"];
const NICK_COLORS = ["#4fd1ff", "#ffb347", "#c58bff", "#ff6b8b", "#7ee08a"];
const NICK_UNITS = 96;  // game units per map pixel

const nickHTML = () => '<div class="nmap"></div><div class="nways"></div>';

// the areas within three portals of his, on his map
function nickAround(loc) {
  const set = WALK_SET.get(loc);
  let edge = [loc]; const seen = new Set(edge);
  for (let d = 0; d < 3; d++) edge = edge.flatMap(i => (AREAS[i]?.exits || []).map(x => x.to)).filter(i => !seen.has(i) && seen.add(i));
  return [...seen].filter(i => WALK_SET.get(i) === set);
}

// the ways to him from entry e's outposts: {ids (the areas walked over), here (its outposts on his map), ways: [{id,
// color, pts}], lit (his area, the outposts and the areas the ways cross)}; makeGrid builds the grid from the areas
async function nickWays(e, makeGrid = walkGrid) {
  // the ways go over the areas' ground, not the outposts' (a way leaves an outpost by its portal)
  // (a from off his map, as from his area's own map: a way starts at his area's portal to it)
  const from = e.from || [], here = from.filter(id => WALK_SET.get(id) === WALK_SET.get(e.area));
  const ids = [...new Set([e.area, ...nickAround(e.area).filter(walkable), ...here])];
  const grid = await makeGrid(ids.filter(id => id === e.area || walkable(id)));
  // from an area next to his (an explorable): its portal into his area; else an outpost's (walkFrom)
  const portals = id => (walkable(id) && WALK_SET.get(id) === WALK_SET.get(e.area) ? AREAS[e.area]?.exits || [] : []).filter(x => x.to === id && x.at).map(x => ({ at: x.at, area: e.area }));
  const shortest = ss => ss.map(s => walkRoute(grid, s, e.at)).filter(Boolean).sort((a, b) => walkLength(a) - walkLength(b))[0] || null;
  const ways = from.map((id, n) => ({ id, color: NICK_COLORS[n % NICK_COLORS.length],
    pts: portals(id).length ? shortest(portals(id)) : walkWay(grid, id, [...ids, id], e.at) }));
  // light his area, the outposts and the areas the ways cross
  const walks = await Promise.all(ids.map(loadWalk)), cv = document.createElement("canvas").getContext("2d");
  const lit = new Set([e.area, ...here]);
  for (const w of ways) if (w.pts) for (const l of walkLines(w.pts)) for (let k = 1; k < l.length; k++)
    for (let t = 0; t < 1; t += 0.1) {
      const x = l[k - 1][0] + t * (l[k][0] - l[k - 1][0]), y = l[k - 1][1] + t * (l[k][1] - l[k - 1][1]);
      ids.forEach((id, n) => { if (!lit.has(id) && walks[n] && cv.isPointInPath(walkPath([walks[n]]), x, y)) lit.add(id); });
    }
  return { ids, here, ways, lit };
}
// the ways as a legend: each outpost's color and length
const nickLegend = ways => ways.map(w => `<span style="--c:${w.color}">${esc(AREAS[w.id].name)}: ${w.pts
  ? `about ${Math.round(walkLength(w.pts) * NICK_UNITS).toLocaleString()} game units` : "no way found"}</span>`).join("")
  || '<span class="dim">No outpost to walk to him from yet.</span>';

async function nickMap(el, i) {
  const e = NICK.entries[i];
  el.dataset.nick = i;
  if (!e?.at) { el.innerHTML = '<p class="dim">His spot that week isn\'t known yet.</p>'; return; }
  if (!el.querySelector(".nmap")) el.innerHTML = nickHTML();
  const { here, ways, lit } = await nickWays(e);
  if (+el.dataset.nick !== i) return;  // another week asked for meanwhile
  const box = el.querySelector(".nmap");
  box.innerHTML = mapHTML([...lit], { height: 520, town: here, spots: [{ x: e.at[0], y: e.at[1], name: "Nicholas the Traveler" }],
    note: 'This is mostly generated. Found a mistake? <a href="contact">Please tell me</a>' });
  await initMaps(box);
  const view = box.querySelector(".gmap")?.mapView;
  if (!view) return;
  view.ways = ways.filter(w => w.pts).map(w => ({ lines: walkLines(w.pts), color: w.color }));
  view.draw();
  el.querySelector(".nways").innerHTML = nickLegend(ways);
}
