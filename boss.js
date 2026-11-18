"use strict";
/* A boss's page, on the front page: ./?boss=<creature id>. Its elite to capture and where it is. */

// ours: where bosses stand (data/bosses.js), by creature id: [area, x, y] each
const BOSS_SPOTS = data("GW_BOSS_SPOTS")?.spots || {};
// ours: the bosses there only during a quest, by creature id: quest ids (or names)
const BOSS_ONLY = data("GW_BOSS_SPOTS")?.only || {};
// ours: the bosses at all their spots at once (several of them), by creature id
const BOSS_TOGETHER = new Set(data("GW_BOSS_SPOTS")?.together || []);
// ours: the bosses walking a loop, by creature id: which way round (cw, ccw, random, unknown); their spots are its points in order
const BOSS_PATROLS = data("GW_BOSS_SPOTS")?.patrols || {};
const LOOP_COLORS = { cw: "#ffe066", ccw: "#ffe066", random: "#ffe066", unknown: "#ffe066" };  // (the loop itself; the ways to it take the usual colours)
// explorables with no foes, walked from like an outpost: the Command Post
const START_AREAS = new Set([436]);
const isStart = id => isOutpost(AREAS[id]) || START_AREAS.has(id);
const LOOP_WAYS = { cw: "clockwise", ccw: "anticlockwise", random: "either way round", unknown: "way round unknown" };
const spotsText = (id, n, patrol = false) => (BOSS_PATROLS[id] ? `walks a loop through these, ${LOOP_WAYS[BOSS_PATROLS[id]] || BOSS_PATROLS[id]}` : BOSS_TOGETHER.has(+id) ? `${n} of them, one at each place, all there at once` : patrol ? `patrols between these ${n} spots: one place` : `${n} places it may be at, one at a time`);
// spots all within a range and a half of each other are one place: the boss patrols between them (as rank.py's rule)
const RANGE_PX = COMPASS_UNITS / WALK_UNITS;
const spotSpread = ss => Math.max(0, ...ss.flatMap(a => ss.map(b => Math.hypot(a[1] - b[1], a[2] - b[2])))) / RANGE_PX;
// chevrons along a loop every few legs, pointing the way it's walked (sized by the loop's extent)
function loopArrows(pts) {
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]), size = Math.max(5, (Math.max(...xs) - Math.min(...xs) + Math.max(...ys) - Math.min(...ys)) / 40);
  const lines = [], every = Math.max(1, Math.round(pts.length / 5));
  for (let i = 0; i < pts.length; i += every) {
    const a = pts[i], b = pts[(i + 1) % pts.length], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1, ux = dx / l, uy = dy / l;
    const tip = [(a[0] + b[0]) / 2 + ux * size / 2, (a[1] + b[1]) / 2 + uy * size / 2];
    lines.push([[tip[0] - ux * size - uy * size * 0.6, tip[1] - uy * size + ux * size * 0.6], tip, [tip[0] - ux * size + uy * size * 0.6, tip[1] - uy * size - ux * size * 0.6]]);
  }
  return lines;
}
// the quests a boss is there only during: for all its spots (a list), or for its spots in one area ({area: quests}),
// asked for an area, or for any of them when not
const onlyQuests = (b, area) => { const o = BOSS_ONLY[b.id]; return !o ? [] : Array.isArray(o) ? o : area != null ? o[area] || [] : [...new Set(Object.values(o).flat())]; };
const onlyDuring = (b, area) => onlyQuests(b, area).map(q => (typeof q === "number" ? LINK.quest(q) : esc(q)));
// a boss's spots by area, each a map of its own: [[[area, x, y], ...], ...]
// (an area's version a quest makes, "(War in Kryta)", a map of its own: the boss is there only then)
// (a dungeon's levels, each a map of its own)
const spotSets = b => Object.values((BOSS_SPOTS[b.id] || []).reduce((o, s) => { const l = depthsLevel(s[0], s[1], s[2]); return ((o[s[0] + "|" + (s[3] || "") + "|" + (l ? l.map ?? l.key : "")] ||= []).push(s), o); }, {}));
// the terms it is there under, for a heading: only during a quest (data/bosses.js only), or the wiki's condition on a
// capture worth it all the same (data/captures.js when)
const spotWhen = (b, ss) => { const q = ss[0][3] ? [] : onlyDuring(b, ss[0][0]); return q.length ? ` <span class="dim">· only during ${listText(q)}</span>` : whenText(b.id, ss[0][0]) ? ` <span class="dim">· ${whenText(b.id, ss[0][0])}</span>` : ""; };
const spotTitle = ss => { const l = depthsLevel(ss[0][0], ss[0][1], ss[0][2]); return areaName(ss[0][0]) + (ss[0][3] ? ` (${ss[0][3]})` : "") + (l?.n ? `, level ${l.n}` : ""); };
// the outposts to walk from: those within two portals of the area, on its map
function spotOutposts(area) {
  const set = WALK_SET.get(area);
  let edge = [area]; const seen = new Set(edge);
  // (a step counts only where the other side leads back: a mission outpost gives onto its mission, not onto the
  // explorable played on the same ground, which lists the outpost only as its way out)
  for (let d = 0; d < 2; d++) edge = edge.flatMap(i => (AREAS[i]?.exits || []).map(x => x.to).filter(j => (AREAS[j]?.exits || []).some(x => x.to === i))).filter(i => !seen.has(i) && seen.add(i));
  return { around: [...seen].filter(i => WALK_SET.get(i) === set), outposts: [...seen].filter(i => isStart(i) && WALK_SET.get(i) === set) };
}
// a spot on the Depths of Tyria (data/depths.js: 3 x 3 cells of 512 pixels, 64 apart) away from its area's own ground:
// a dungeon's level holding it (its number, its cell's walk file and outline), or for another area, the cell, or null
const DEPTHS = data("GW_DEPTHS");
const cellOf = (x, y) => `${["top", "middle", "bottom"][Math.floor(y / 576)]} ${["left", "middle", "right"][Math.floor(x / 576)]}`;
function inRing(r, x, y) {
  let ins = false;
  for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2)
    if ((r[i + 1] > y) !== (r[j + 1] > y) && x < ((r[j] - r[i]) * (y - r[i + 1])) / (r[j + 1] - r[i + 1]) + r[i]) ins = !ins;
  return ins;
}
function depthsLevel(area, x, y) {
  const cell = cellOf(x, y), walk = DEPTHS?.cells?.[cell], d = DEPTHS?.dungeons?.[area];
  if (walk == null) return null;
  if (d) {
    const lvs = d.levels.map((l, k) => ({ ...l, n: k + 1 })).filter(l => l.cell === cell);
    const lv = lvs.find(l => l.area && inRing(Array.isArray(l.area[0]) ? l.area[0] : l.area, x, y)) || lvs[0];
    if (lv) return { walk, area: lv.area, n: lv.n, key: cell, map: lv.map };
    // (a dungeon with no levels marked yet, Secret Lair of the Snowmen: the cell its spot is on)
    if (d.levels.length) return null;
  }
  if (!d && WALK_SET.get(area) !== 109 || walk === area) return null;
  const c = Math.floor(x / 576) * 576, r = Math.floor(y / 576) * 576;
  return { walk, area: [c, r, c + 512, r, c + 512, r + 512, c, r + 512], n: null, key: cell, map: area };
}
// where in a dungeon: on the levels its spots are on, else at its end (the boss a bounty sends you to)
function dungeonWhere(b, i) {
  const ns = [...new Set((BOSS_SPOTS[b.id] || []).filter(s => s[0] === i).map(s => depthsLevel(i, s[1], s[2])?.n).filter(Boolean))].sort();
  return ns.length ? `Dungeon, level ${listText(ns.map(String))}` : "Dungeon: at its end";
}
// one area's map of a boss's spots. With an elite to capture, the ways to it: to one spot, from every outpost near
// enough (up to half again the shortest walk); to several, each from the outpost nearest to it
// opts.from: the one outpost (or start area) to walk from, as on an elite's page (its pick); else the ones near
async function bossMap(el, b, ss, live = () => true, opts = {}) {
  const area = ss[0][0], box = el.querySelector(".nmap"), many = ss.length > 1, loop = BOSS_PATROLS[b.id];
  const patrol = many && !loop && !BOSS_TOGETHER.has(+b.id) && spotSpread(ss) < 1.5;  // (one place: a way to the nearest spot)
  // (a loop's points are the line: only a few of them marked; numbered only where the order means something, a direction)
  const every = loop ? Math.max(1, Math.ceil(ss.length / 6)) : 1, numbered = many && !patrol && !["random", "unknown"].includes(loop);
  const spots = ss.filter((s, k) => k % every === 0).map(s => ({ x: s[1], y: s[2], name: numbered ? String(ss.indexOf(s) + 1) : ss.indexOf(s) ? "" : b.name }));
  const cell = depthsLevel(area, ss[0][1], ss[0][2]);
  // (the terms it is there under: under the map, and the first line of the ways' legend)
  const when = (ss[0][3] ? [] : onlyDuring(b, area)).length ? `Only during the quest ${listText(onlyDuring(b, area))}` : whenText(b.id, area) ? whenText(b.id, area)[0].toUpperCase() + whenText(b.id, area).slice(1) : "";
  const setWays = html => { el.querySelector(".nways").innerHTML = (when ? `<span class="dim">${when}</span>` : "") + html; };
  const note = [ss[0][3] && `Only in ${esc(spotTitle(ss))}, the version of the area the quest makes`, when, many && spotsText(b.id, ss.length, patrol),
    cell && !cell.n && !DEPTHS?.dungeons?.[area] && "On another of its levels"].filter(Boolean).join(" · ");
  // (a mission played on another area's ground (data/missionmaps.js): its window there; another level of an area on
  // the Depths of Tyria: that level's cell. Their spots only)
  // a mission whose start is marked (data/missionmaps.js starts): the walk from it to the spots, to the nearest first and
  // on from there to the next nearest, the spots numbered in that order
  const start = MISSIONS[area] && data("GW_MISSION_MAPS")?.starts?.[area];
  // (a mission with no start marked yet (data/missionmaps.js starts): its spots only, and said so)
  const noStart = () => setWays(MISSIONS[area] && b._elites.length && !start ? '<span class="dim">Played up to in the mission; where it starts isn\'t marked on our map yet, so no way is drawn.</span>' : "");
  if (start && b._elites.length) {
    const grid = await walkGrid([data("GW_MISSION_MAPS")?.missions?.[area]?.walk ?? area]);  // (its ground, or the area's it is played on)
    if (!live()) return;
    const legs = [];
    if (grid) {
      let rem = ss.map((s, k) => k), from = { at: start, area }; const order = [];
      while (rem.length) {
        let best = null;
        for (const k of rem) { const p = walkRoute(grid, from, [ss[k][1], ss[k][2]]); if (p && (!best || walkLength(p) < best.l)) best = { k, p, l: walkLength(p) }; }
        if (!best) break;
        order.push(best.k); legs.push(best.p); rem = rem.filter(k => k !== best.k); from = { at: [ss[best.k][1], ss[best.k][2]], area };
      }
      ss = [...order.map(k => ss[k]), ...rem.map(k => ss[k])];
    }
    const walked = ss.map((s, k) => ({ x: s[1], y: s[2], name: many ? String(k + 1) : b.name }));
    box.innerHTML = missionMapHTML(area, areaName(area), { height: 560, spots: walked, note }) || mapHTML([area], { height: 560, spots: walked, note });
    await initMaps(box);
    const view = box.querySelector(".gmap")?.mapView;
    if (view) { view.ways = legs.map((p, n) => ({ lines: walkLines(p), color: NICK_COLORS[n % NICK_COLORS.length] })); view.draw(); }
    setWays(legs.length
      ? legs.map((p, n) => `<span style="--c:${NICK_COLORS[n % NICK_COLORS.length]}">${many ? `${n + 1}: ${n ? `on from ${n}` : "from the start"}` : "From the start"}, ${walkText(walkLength(p))}</span>`).join("")
        + (legs.length > 1 ? `<span class="dim">All of them, one after another: ${walkText(legs.reduce((a, p) => a + walkLength(p), 0))}</span>` : "")
      : '<span class="dim">No way found from its start on its ground.</span>');
    return;
  }
  const level = missionMapHTML(area, areaName(area), { height: 560, spots, note });
  if (level) { box.innerHTML = level; await initMaps(box); return noStart(); }
  if (cell) {
    // a dungeon level: the way from where you arrive on it to each spot (dungeon.js's levelWay, on the level's ground)
    box.innerHTML = mapHTML([], { height: 560, spots, note, level: { name: spotTitle(ss), map: cell.map, walk: cell.walk, area: cell.area } });
    await initMaps(box);
    const d = DEPTHS?.dungeons?.[area], i = cell.n ? cell.n - 1 : -1, v = d?.levels?.[i];
    if (!v || !VIEWS.dungeon?.levelWay) return noStart();
    const ways = (await Promise.all(ss.map(s => VIEWS.dungeon.levelWay(v, i, { to: [s[1], s[2]] })))).map((pts, k) => pts && { k, pts, color: NICK_COLORS[k % NICK_COLORS.length] }).filter(Boolean);
    if (!live()) return;
    const view = box.querySelector(".gmap")?.mapView;
    if (view && ways.length) { view.ways = ways.map(w => ({ lines: walkLines(w.pts), color: w.color })); view.draw(); }
    setWays(ways.length
      ? ways.map(w => `<span style="--c:${w.color}">${many ? `${w.k + 1}: ` : ""}From where you arrive on the level, ${walkText(walkLength(w.pts))}</span>`).join("") + '<span class="dim">Worked out on the map\'s ground, unchecked: it may go through a wall or a closed passage.</span>'
      : '<span class="dim">No way found on the level\'s ground.</span>');
    return;
  }
  // (no elite to capture, or a mission's ground (played, not walked to): its spots only)
  if (!b._elites.length || isOutpost(AREAS[area]) || MISSIONS[area]) { box.innerHTML = mapHTML([area], { height: 560, spots, note }); await initMaps(box); return noStart(); }
  const near = spotOutposts(area), outposts = opts.from ? near.outposts.filter(id => id === opts.from) : near.outposts, around = near.around;
  const ids = [...new Set([area, ...around.filter(walkable)])];
  const grid = await walkGrid(ids.filter(id => id === area || walkable(id)));
  if (!live() || !grid) { if (live()) { box.innerHTML = mapHTML([area], { height: 560, spots, note }); await initMaps(box); setWays(""); } return; }
  // (outposts on another map, as for an area with a map of its own: from its portal to them on its map)
  // (outposts on another map, as for an area with a map of its own: from its portal to them on its map, placed by the
  // game's data (the exit's at) or ours (data/routing.js portals, as The Undercity's))
  const off = [...new Set((AREAS[area].exits || []).filter(x => (x.at || ROUTING?.portals?.[area]?.[x.to]) && isOutpost(AREAS[x.to]) && WALK_SET.get(x.to) !== WALK_SET.get(area) && (!opts.from || x.to === opts.from)).map(x => x.to))];
  // (the outpost's own exits' at are on its map, not this one: only portals placed on this area's map start a way)
  const offWay = (id, to) => [...(AREAS[area].exits || []).filter(x => x.to === id && x.at).map(x => x.at), ROUTING?.portals?.[area]?.[id]].filter(Boolean)
    .map(at => walkRoute(grid, { at, area }, to)).filter(Boolean).sort((p, q) => walkLength(p) - walkLength(q))[0] || null;
  // (a loop or a patrol: only the few spots nearest the start, as the crow flies, are routed to; the nearest by the walk wins)
  const nearest = (starts, k = 3) => (!(loop || patrol) || !starts.length ? ss : [...ss].sort((a, c) => Math.min(...starts.map(p => Math.hypot(p[0] - a[1], p[1] - a[2]))) - Math.min(...starts.map(p => Math.hypot(p[0] - c[1], p[1] - c[2])))).slice(0, k));
  const from = [...outposts.filter(id => id !== area).map(id => ({ id, ways: nearest(walkFrom(grid, id, [...ids, id]).map(s => s.at || s)).map(s => walkWay(grid, id, [...ids, id], [s[1], s[2]])) })),
    ...off.map(id => ({ id, ways: nearest([...(AREAS[area].exits || []).filter(x => x.to === id && x.at).map(x => x.at), ROUTING?.portals?.[area]?.[id]].filter(Boolean)).map(s => offWay(id, [s[1], s[2]])) }))];
  const len = w => (w.pts ? walkLength(w.pts) : Infinity);
  let ways, legend;
  if (loop || patrol) {
    // (a loop or a patrol: from each start to the nearest spot of it; a loop itself drawn too, with arrows where its way round is known)
    const ok = from.map(f => ({ id: f.id, pts: f.ways.filter(Boolean).sort((p, q) => walkLength(p) - walkLength(q))[0] })).filter(w => w.pts).sort((x, y) => len(x) - len(y));
    ways = ok.filter(w => len(w) <= 1.5 * len(ok[0])).slice(0, 4).map((w, n) => ({ ...w, color: NICK_COLORS[n % NICK_COLORS.length] }));
    legend = (ways.length ? ways.map(w => `<span style="--c:${w.color}">${esc(AREAS[w.id].name)}: ${walkText(len(w))} to ${loop ? "the loop" : "where it patrols"}</span>`).join("") : "") + (loop ? `<span style="--c:${LOOP_COLORS[loop]}">its loop, ${LOOP_WAYS[loop] || esc(loop)}</span>` : "");
  } else if (!many) {
    const ok = from.map(f => ({ id: f.id, pts: f.ways[0] })).filter(w => w.pts).sort((x, y) => len(x) - len(y));
    ways = ok.filter(w => len(w) <= 1.5 * len(ok[0])).slice(0, 4).map((w, n) => ({ ...w, color: NICK_COLORS[n % NICK_COLORS.length] }));
    legend = ways.length ? nickLegend(ways) : "";
  } else {
    // (each spot from its nearest outpost, in the spot's own colour)
    ways = ss.map((s, k) => from.map(f => ({ id: f.id, pts: f.ways[k] })).filter(w => w.pts).sort((x, y) => len(x) - len(y))[0])
      .map((w, k) => w && { ...w, k, color: NICK_COLORS[k % NICK_COLORS.length] }).filter(Boolean);
    legend = ways.map(w => `<span style="--c:${w.color}">${w.k + 1}: from ${esc(AREAS[w.id].name)}, ${walkText(len(w))}</span>`).join("");
  }
  if (!ways.length && !loop && !patrol) legend = `<span class="dim">${from.length ? "No way found from the outposts near it." : "No outpost near it to walk from."}</span>`;
  // light its area, the outposts walked from and the areas the ways cross
  const walks = await Promise.all(ids.map(loadWalk)), cv = document.createElement("canvas").getContext("2d");
  if (!live()) return;
  const here = [...new Set(ways.map(w => w.id))].filter(id => WALK_SET.get(id) === WALK_SET.get(area)), lit = new Set([area, ...here]);
  for (const w of ways) for (const l of walkLines(w.pts)) for (let k = 1; k < l.length; k++)
    for (let t = 0; t < 1; t += 0.1) {
      const x = l[k - 1][0] + t * (l[k][0] - l[k - 1][0]), y = l[k - 1][1] + t * (l[k][1] - l[k - 1][1]);
      ids.forEach((id, n) => { if (!lit.has(id) && walks[n] && cv.isPointInPath(walkPath([walks[n]]), x, y)) lit.add(id); });
    }
  // (the window: the ways, the spots and the starts, at least a third of the area's size about them, not all its ground nor
  // the areas crossed: the map's seams, at the edges of the Eye of the North's areas, stay out. The area when no way)
  const whole = walks[ids.indexOf(area)] ? ringsBox([walks[ids.indexOf(area)]]) : null;
  let crop = null;
  const grow = ([x, y]) => { crop = crop ? [Math.min(crop[0], x), Math.min(crop[1], y), Math.max(crop[2], x), Math.max(crop[3], y)] : [x, y, x, y]; };
  for (const w of ways) for (const l of walkLines(w.pts)) l.forEach(grow);
  for (const s of ss) grow([s[1], s[2]]);
  for (const id of here) if (AREAS[id].at) grow(AREAS[id].at);
  if (crop && whole) for (const [i, j] of [[0, 2], [1, 3]]) {
    const least = (whole[j] - whole[i]) / 3, lack = least - (crop[j] - crop[i]);
    if (lack > 0) { crop[i] -= lack / 2; crop[j] += lack / 2; }
    // (slid back within the area's ground where it hangs out of it, when it fits)
    if (crop[i] < whole[i]) { const d = Math.min(whole[i] - crop[i], Math.max(0, whole[j] - crop[j])); crop[i] += d; crop[j] += d; }
    if (crop[j] > whole[j]) { const d = Math.min(crop[j] - whole[j], Math.max(0, crop[i] - whole[i])); crop[i] -= d; crop[j] -= d; }
  }
  if (!crop) crop = whole;
  box.innerHTML = mapHTML([...lit], { height: 560, town: here, spots, note, crop });
  await initMaps(box);
  const view = box.querySelector(".gmap")?.mapView;
  const loopPts = ss.map(s => [s[1], s[2]]);
  if (view) { view.ways = [...(loop ? [{ lines: [[...loopPts, loopPts[0]]], color: LOOP_COLORS[loop] }] : []), ...(["cw", "ccw"].includes(loop) ? [{ lines: loopArrows(loopPts), color: "#fff" }] : []), ...ways.map(w => ({ lines: walkLines(w.pts), color: w.color }))]; view.draw(); }
  setWays(legend);
}
// an elite's picked capture (data/captures.js): the boss's spots in that area, walked from its one start
const CAPTURES = data("GW_CAPTURES")?.captures || {}, CAPTURE_WHEN = data("GW_CAPTURES")?.when || {};
const whenText = (id, area) => { const w = CAPTURE_WHEN[id]; if (!w || (w.area && area != null && +w.area !== +area)) return "";
  const q = ids => listText(ids.map(id => LINK.quest(id)));
  return [w.only && `only during ${q(w.only)}`, w.not && `not during ${q(w.not)}`, w.before && `before completing ${q(w.before)}`, w.during && `during ${q(w.during)}`, w.after && `after completing ${q(w.after)}`].filter(Boolean).join(", or ");
};
function captureMap(el, c, live) {
  const b = bossTable().get(c.boss), ss = (BOSS_SPOTS[c.boss] || []).filter(s => s[0] === c.area && !s[3]);
  if (!b || !ss.length) { el.querySelector(".nmap").innerHTML = '<span class="dim">No spot in our data.</span>'; return; }
  return bossMap(el, b, ss, live, { from: c.from });
}

VIEWS.boss = (() => {
  // a boss at the end of a dungeon level (its boss mark, data/depths.js): that level's map, marked, in place of the
  // dungeon's whole area
  const bossMaps = b => b._where.flatMap(id => { const d = VIEWS.dungeon?.find(id);
    return (d?.levels || []).map((v, i) => v.marks.some(m => m[0] === "boss" && m[3] === b.name) ? VIEWS.dungeon.levelMap(d, i) : "").filter(Boolean); }).join("");
  function html(b) {
    const sub = [b.prof && PROFS[b.prof], [...b.camps].sort().map(c => CAMPAIGNS[c]).join(", ")].filter(Boolean).map(esc).join(" · ");
    return `<p class="back"><a href="bosses">← All bosses</a></p>
      <div class="sp-head" style="--pc:${profVar(b.prof)}">
        ${b.prof ? `<img class="sp-icon hp-icon" src="img/prof/${PROFS[b.prof]}.png" alt="">` : ""}
        <div class="sp-title"><h2>${esc(b.name)}</h2><div class="sp-sub">${sub}</div></div>
        ${b.levels.size ? `<div class="lstats"><span class="lstat"><small>Level</small><b>${esc([...b.levels].join(", "))}</b></span></div>` : ""}
      </div>
      <div class="lgrid${b._elites.length ? "" : " solo"}">
        ${b._elites.length ? `<section class="lbox"><h4>Elite to capture</h4>${b._elites.map(s => `<div class="bp-skill">
          ${LINK.skill(s.id).replace("sk-ic sm", "sk-ic")}${eliteTick(s.id, undefined, "Captured")}<span class="dim">${PROFS[s.profession]} · ${esc(ATTRIBUTES[s.attribute] || "")}</span>
          <p class="bp-desc">${richText(s.concise || s.description)}</p>${wannabeNeeds("elite", s.id)}</div>`).join("")}</section>` : ""}
        <section class="lbox"><h4>Where</h4><ul class="lrows">${b._where.map(i => { const n = (BOSS_SPOTS[b.id] || []).filter(s => s[0] === i).length;
          // (the version of the area a quest makes, "War in Kryta": named here too, as on its map)
          const vs = [...new Set((BOSS_SPOTS[b.id] || []).filter(s => s[0] === i && s[3]).map(s => s[3]))];
          const only = vs.length && (BOSS_SPOTS[b.id] || []).every(s => s[0] !== i || s[3]);
          const when = (only ? [] : onlyDuring(b, i)).length ? ` · only during ${listText(onlyDuring(b, i))}` : whenText(b.id, i) ? ` · ${whenText(b.id, i)}` : "";
          return `<li>${whereLink(i)}<span class="dim">${vs.length ? `${esc(listText(vs))}${only ? " only" : ""} · ` : ""}${MISSIONS[i] ? "Mission" : isDungeon(AREAS[i]) ? dungeonWhere(b, i) : esc(TYPE_LABEL[AREAS[i]?.type] || "")}${n > 1 ? ` · ${n} spots` : ""}${when}</span></li>`; }).join("")}</ul></section>
      </div>
      <div class="bmaps">${BOSS_SPOTS[b.id] ? spotSets(b).map((ss, k) => `<section class="lbox bmap" data-k="${k}"><h4>${esc(spotTitle(ss))}${spotWhen(b, ss)}</h4><div class="nmap"></div><div class="nways"></div></section>`).join("")
        : bossMaps(b) || mapHTML(b._where.filter(i => AREAS[i]))}</div>
      </div>`;
  }
  // the maps, once on the page: each drawn with its spots and the ways to them
  function after(el, b) { const live = () => el.dataset.at === `boss=${b.id}`; el.querySelectorAll(".bmap").forEach(m => bossMap(m, b, spotSets(b)[+m.dataset.k], live)); }
  return { find: id => bossTable().get(+id), title: b => b.name, html, after };
})();
