"use strict";
/* A boss's page, on the front page: ./?boss=<creature id>. Its elite to capture and where it is. */

// ours: where bosses stand (data/bosses.js), by creature id: [area, x, y] each
const BOSS_SPOTS = data("GW_BOSS_SPOTS")?.spots || {};
// ours: the bosses there only during a quest, by creature id: quest ids (or names)
const BOSS_ONLY = data("GW_BOSS_SPOTS")?.only || {};
// ours: the bosses at all their spots at once (several of them), by creature id
const BOSS_TOGETHER = new Set(data("GW_BOSS_SPOTS")?.together || []);
const spotsText = (id, n) => (BOSS_TOGETHER.has(+id) ? `${n} of them, one at each place, all there at once` : `${n} places it may be at, one at a time`);
const onlyDuring = b => (BOSS_ONLY[b.id] || []).map(q => (typeof q === "number" ? LINK.quest(q) : esc(q)));
// a boss's spots by area, each a map of its own: [[[area, x, y], ...], ...]
// (an area's version a quest makes, "(War in Kryta)", a map of its own: the boss is there only then)
// (a dungeon's levels, each a map of its own)
const spotSets = b => Object.values((BOSS_SPOTS[b.id] || []).reduce((o, s) => { const l = depthsLevel(s[0], s[1], s[2]); return ((o[s[0] + "|" + (s[3] || "") + "|" + (l ? l.map ?? l.key : "")] ||= []).push(s), o); }, {}));
const spotTitle = ss => { const l = depthsLevel(ss[0][0], ss[0][1], ss[0][2]); return areaName(ss[0][0]) + (ss[0][3] ? ` (${ss[0][3]})` : "") + (l?.n ? `, level ${l.n}` : ""); };
// the outposts to walk from: those within two portals of the area, on its map
function spotOutposts(area) {
  const set = WALK_SET.get(area);
  let edge = [area]; const seen = new Set(edge);
  for (let d = 0; d < 2; d++) edge = edge.flatMap(i => (AREAS[i]?.exits || []).map(x => x.to)).filter(i => !seen.has(i) && seen.add(i));
  return { around: [...seen].filter(i => WALK_SET.get(i) === set), outposts: [...seen].filter(i => isOutpost(AREAS[i]) && WALK_SET.get(i) === set) };
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
async function bossMap(el, b, ss) {
  const area = ss[0][0], box = el.querySelector(".nmap"), many = ss.length > 1;
  const spots = ss.map((s, k) => ({ x: s[1], y: s[2], name: many ? String(k + 1) : b.name }));
  const cell = depthsLevel(area, ss[0][1], ss[0][2]);
  const note = [ss[0][3] && `Only in ${esc(spotTitle(ss))}, the version of the area the quest makes`, !ss[0][3] && onlyDuring(b).length && `Only during the quest ${listText(onlyDuring(b))}`, many && spotsText(b.id, ss.length),
    cell && !cell.n && !DEPTHS?.dungeons?.[area] && "On another of its levels"].filter(Boolean).join(" · ");
  // (a mission played on another area's ground (data/missionmaps.js): its window there; another level of an area on
  // the Depths of Tyria: that level's cell. Their spots only)
  const level = missionMapHTML(area, areaName(area), { height: 560, spots, note });
  if (level) { box.innerHTML = level; return initMaps(box); }
  if (cell) { box.innerHTML = mapHTML([], { height: 560, spots, note, level: { name: spotTitle(ss), map: cell.map, walk: cell.walk, area: cell.area } }); return initMaps(box); }
  // (no elite to capture, or a mission's ground (played, not walked to): its spots only)
  if (!b._elites.length || isOutpost(AREAS[area])) { box.innerHTML = mapHTML([area], { height: 560, spots, note }); return initMaps(box); }
  const { around, outposts } = spotOutposts(area);
  const ids = [...new Set([area, ...around.filter(walkable)])];
  const grid = await walkGrid(ids.filter(id => id === area || walkable(id)));
  // (outposts on another map, as for an area with a map of its own: from its portal to them on its map)
  const off = [...new Set((AREAS[area].exits || []).filter(x => x.at && isOutpost(AREAS[x.to]) && WALK_SET.get(x.to) !== WALK_SET.get(area)).map(x => x.to))];
  const offWay = (id, to) => (AREAS[area].exits || []).filter(x => x.to === id && x.at).map(x => walkRoute(grid, { at: x.at, area }, to)).filter(Boolean).sort((p, q) => walkLength(p) - walkLength(q))[0] || null;
  const from = [...outposts.filter(id => id !== area).map(id => ({ id, ways: ss.map(s => walkWay(grid, id, [...ids, id], [s[1], s[2]])) })),
    ...off.map(id => ({ id, ways: ss.map(s => offWay(id, [s[1], s[2]])) }))];
  const len = w => (w.pts ? walkLength(w.pts) : Infinity);
  let ways, legend;
  if (!many) {
    const ok = from.map(f => ({ id: f.id, pts: f.ways[0] })).filter(w => w.pts).sort((x, y) => len(x) - len(y));
    ways = ok.filter(w => len(w) <= 1.5 * len(ok[0])).slice(0, 4).map((w, n) => ({ ...w, color: NICK_COLORS[n % NICK_COLORS.length] }));
    legend = ways.length ? nickLegend(ways) : "";
  } else {
    // (each spot from its nearest outpost, in the spot's own colour)
    ways = ss.map((s, k) => from.map(f => ({ id: f.id, pts: f.ways[k] })).filter(w => w.pts).sort((x, y) => len(x) - len(y))[0])
      .map((w, k) => w && { ...w, k, color: NICK_COLORS[k % NICK_COLORS.length] }).filter(Boolean);
    legend = ways.map(w => `<span style="--c:${w.color}">${w.k + 1}: from ${esc(AREAS[w.id].name)}, ${walkText(len(w))}</span>`).join("");
  }
  if (!ways.length) legend = `<span class="dim">${from.length ? "No way found from the outposts near it." : "No outpost near it to walk from."}</span>`;
  // light its area, the outposts walked from and the areas the ways cross
  const walks = await Promise.all(ids.map(loadWalk)), cv = document.createElement("canvas").getContext("2d");
  const here = [...new Set(ways.map(w => w.id))].filter(id => WALK_SET.get(id) === WALK_SET.get(area)), lit = new Set([area, ...here]);
  for (const w of ways) for (const l of walkLines(w.pts)) for (let k = 1; k < l.length; k++)
    for (let t = 0; t < 1; t += 0.1) {
      const x = l[k - 1][0] + t * (l[k][0] - l[k - 1][0]), y = l[k - 1][1] + t * (l[k][1] - l[k - 1][1]);
      ids.forEach((id, n) => { if (!lit.has(id) && walks[n] && cv.isPointInPath(walkPath([walks[n]]), x, y)) lit.add(id); });
    }
  box.innerHTML = mapHTML([...lit], { height: 560, town: here, spots, note });
  await initMaps(box);
  const view = box.querySelector(".gmap")?.mapView;
  if (view) { view.ways = ways.map(w => ({ lines: walkLines(w.pts), color: w.color })); view.draw(); }
  el.querySelector(".nways").innerHTML = legend;
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
          return `<li>${whereLink(i)}<span class="dim">${vs.length ? `${esc(listText(vs))}${only ? " only" : ""} · ` : ""}${MISSIONS[i] ? "Mission" : isDungeon(AREAS[i]) ? dungeonWhere(b, i) : esc(TYPE_LABEL[AREAS[i]?.type] || "")}${n > 1 ? ` · ${n} spots` : ""}</span></li>`; }).join("")}</ul>${onlyDuring(b).length ? `<p class="dim">Only there during the quest ${listText(onlyDuring(b))}.</p>` : ""}</section>
      </div>
      <div class="bmaps">${BOSS_SPOTS[b.id] ? spotSets(b).map((ss, k) => `<section class="lbox bmap" data-k="${k}"><h4>${esc(spotTitle(ss))}</h4><div class="nmap"></div><div class="nways"></div></section>`).join("")
        : bossMaps(b) || mapHTML(b._where.filter(i => AREAS[i]))}</div>
      </div>`;
  }
  // the maps, once on the page: each drawn with its spots and the ways to them
  function after(el, b) { el.querySelectorAll(".bmap").forEach(m => bossMap(m, b, spotSets(b)[+m.dataset.k])); }
  return { find: id => bossTable().get(+id), title: b => b.name, html, after };
})();
