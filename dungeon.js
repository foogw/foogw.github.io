"use strict";
/* A dungeon's page, on the front page: ./?dungeon=<map id>. The whole trip as a list: the walk from the nearest outpost
   to the entrance, then each level with its map and the way through it (from where you arrive to the way down, or the
   boss), what's on the way, its quests and its Zaishen Bounty (data/depths.js). */

VIEWS.dungeon = (() => {
  const DEPTHS = data("GW_DEPTHS");
  const WAY = "#4fd1ff";
  // a level's name: its own (a branch, like Slavers' Exile's four), else its number
  const levelName = (d, i) => d.levels[i]?.name || `Level ${i + 1}`;
  const mark = (v, ...kinds) => v.marks.find(m => kinds.includes(m[0]));
  // where you arrive: from the level above, or (level 1) by its portal in from outside
  const arrive = (v, i) => mark(v, "start") || (i === 0 ? mark(v, "portal") : null);
  // where the level's way goes: down to the next, else its boss, else what's at its end
  const goal = v => mark(v, "down") || mark(v, "boss") || mark(v, "goal");
  // what has to be done on the way, in order: keys picked up, the locks they open, other tasks
  const STOP = ["key", "lock", "do"];
  const stops = v => v.marks.filter(m => STOP.includes(m[0]));
  const bossLink = name => { const id = Object.keys(CREATURES).find(k => CREATURES[k].name === name); return id ? LINK.boss(id) : esc(name); };

  // the outside areas a dungeon is entered from, each with the portal into it there and the outposts next to it
  function entrances(l) {
    const areas = [...new Set((l.exits || []).map(e => e.to))].filter(i => AREAS[i] && !isOutpost(AREAS[i]) && AREAS[i].type !== 18);
    return areas.map(area => {
      // the portal on the area's own map: its exit to the dungeon, else the dungeon's where both are on one map
      const a = AREAS[area], at = (a.exits || []).find(x => x.to === l.id && x.at)?.at
        || (l.set === a.set ? (l.exits || []).find(x => x.to === area && x.at)?.at : null);
      return { area, at, outposts: Object.values(AREAS).filter(o => isOutpost(o) && (o.exits || []).some(x => x.to === area)).map(o => o.id) };
    }).filter(e => e.at);
  }

  // the Zaishen Bounty on the dungeon's boss: the next day it's up (or today)
  const fmtBountyDay = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short" });
  function bounty(id) {
    const b = bountyAt(id);
    return b ? `Zaishen Bounty on ${bossLink(entryName(b.entry))}: <b>${inDays(b.days)}</b>${b.days ? ` (${fmtBountyDay.format(Date.now() + b.days * 864e5)})` : ""}, then every ${b.every} days.` : "";
  }


  // a row of the list: its map on the left, what it is on the right
  const row = (n, title, body, map) => `<li class="dgrow"><div class="dgmap">${map}</div><div class="dgtext"><h3><span class="dgn">${n}</span>${title}</h3>${body}</div></li>`;

  function levelRow(d, v, i) {
    const a = arrive(v, i), g = goal(v);
    const from = !a ? "" : a[0] === "portal" ? `From ${LINK.area(a[3])}` : v.name || !i ? "From the start" : `From ${esc(levelName(d, i - 1))}`;
    // (a level with several stairs down, each to a level of its own: Slavers' Exile's entrance)
    const downs = v.marks.filter(m => m[0] === "down");
    const to = !g ? "" : downs.length > 1 ? `down one of its ${downs.length} stairs` : g[0] === "down" ? `down to ${esc(levelName(d, i + 1))}` : g[0] === "goal" ? `to ${esc(g[3])}` : `to the boss, ${bossLink(g[3])}`;
    const ways = v.marks.filter(m => m[0] === "portal" || m[0] === "down");
    const steps = stops(v).map(m => m[3]), sights = v.marks.filter(m => ["npc", "spot", "wall"].includes(m[0])).map(m => m[3]);
    const bosses = levelBosses(d, v);
    const others = ways.filter(m => m[0] === "portal" && m !== a).map(m => LINK.area(m[3]));
    return row(i + 1, esc(levelName(d, i)), `
      <p class="dgroute">${from && to ? `${from} → ${to}` : '<span class="dim">Where you arrive and where it leads aren\'t marked yet.</span>'}</p>
      <p class="dgway" data-way="${i}"></p>
      ${steps.length ? `<p><small class="dim">Steps</small></p><ol class="dgsteps">${steps.map(t => `<li>${esc(t)}</li>`).join("")}<li>${g?.[0] === "down" ? `Down to ${esc(levelName(d, i + 1))}` : g?.[0] === "goal" ? esc(g[3]) : g ? `Kill ${esc(g[3])}` : ""}</li></ol>` : ""}
      ${bosses.length ? `<p><small class="dim">Bosses on this level</small><br>${bosses.map(id => LINK.boss(id)).join(" · ")}</p>` : ""}
      ${sights.length ? `<p><small class="dim">Also here</small><br>${sights.map(esc).join(" · ")}</p>` : ""}
      ${others.length ? `<p><small class="dim">Also a way out</small><br>${others.join(" · ")}</p>` : ""}`,
      levelMap(d, i));
  }
  // the bosses whose spots (data/bosses.js) lie on the level: on its cell and inside its outline (or on its own walk file)
  function levelBosses(d, v) {
    const spots = data("GW_BOSS_SPOTS")?.spots || {}, ring = v.area && (Array.isArray(v.area[0]) ? v.area[0] : v.area);
    const inside = (x, y) => { if (!ring) return v.walk != null; let ins = false; for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2)
      if ((ring[i + 1] > y) !== (ring[j + 1] > y) && x < ((ring[j] - ring[i]) * (y - ring[i + 1])) / (ring[j + 1] - ring[i + 1]) + ring[i]) ins = !ins; return ins; };
    return Object.entries(spots).filter(([id, ss]) => CREATURES[id] && ss.some(s => (s[0] === d.id || s[0] === v.map) && inside(s[1], s[2]))).map(([id]) => +id)
      .sort((a, b) => cmpStr(CREATURES[a].name, CREATURES[b].name));
  }
  // a level's map: its ground, its ways out, the steps on it by their number in the list (and more spots: [{x, y, name}])
  function levelMap(d, i, { height = 340, more = [] } = {}) {
    const v = d.levels[i], ways = v.marks.filter(m => m[0] === "portal" || m[0] === "down");
    const level = { name: levelName(d, i), map: v.map, walk: (v.walk ?? DEPTHS.cells[v.cell]), area: v.area,
      portals: ways.map(m => ({ at: [m[1], m[2]], name: m[0] === "down" ? (m[3] ? levelName(d, d.levels.findIndex(x => x.map === m[3])) : v.marks.filter(x => x[0] === "down").length > 1 ? "Stairs down" : levelName(d, i + 1)) : AREAS[m[3]]?.name || "" })) };
    const spots = v.marks.filter(m => !ways.includes(m)).map(m => ({ x: m[1], y: m[2],
      name: m[0] === "start" ? "Arrive" : STOP.includes(m[0]) ? `${stops(v).indexOf(m) + 1}. ${m[3]}` : m[3] }));
    return mapHTML([], { level, spots: [...spots, ...more], height });
  }
  // a level's way: from where you arrive, through each stop, to its goal (or to: [x, y], from: [x, y] instead), as one
  // line on its ground walled in along the level's area (where the area cuts the way off, all the cell's); or null
  async function levelWay(v, i, { from = null, to = null } = {}) {
    const a = from || arrive(v, i)?.slice(1, 3), g = to || goal(v)?.slice(1, 3);
    if (!a || !g) return null;
    const ground = await loadGround((v.walk ?? DEPTHS.cells[v.cell]));
    if (!ground) return null;
    const legs = [a, ...(to ? [] : stops(v).map(m => [m[1], m[2]])), g];
    const route = async walls => {
      const grid = await walkGrid([v.map], { [v.map]: { rings: ground.rings, walls } }), all = [];
      for (let k = 1; k < legs.length; k++) {
        const leg = walkRoute(grid, legs[k - 1], legs[k]);
        if (!leg) return null;
        all.push(...(k > 1 ? leg.slice(1) : leg));
      }
      return all;
    };
    return (v.area && await route(areaRings(v.area).map(r => [...r, r[0], r[1]]))) || await route([]);
  }

  function html(d) {
    const l = AREAS[d.id], ins = entrances(l);
    const outposts = [...new Set((l.exits || []).map(e => e.to))].filter(i => isOutpost(AREAS[i]));  // its portal is in the outpost
    const quests = [...new Set([d.id, ...d.levels.map(v => v.map)])].flatMap(questsAt);
    const notes = [
      bounty(d.id),
      ...quests.map(q => {
        const gs = questGivers(q), k = d.levels.findIndex(v => v.map === gs[0]?.area && v.map !== d.id);
        return `Quest: ${LINK.quest(q.id)}${gs.length ? `, from ${esc([...new Set(gs.map(n => n.name))].join(", "))}${k > 0 ? ` on ${esc(levelName(d, k))}` : ""}` : ""}.`;
      }),
      ...outposts.map(o => `Entered straight from ${LINK.area(o)}.`),
      d.levels.length ? `The paths drawn on the levels are worked out on the map's ground and are unchecked: one may go through a wall or a closed passage.` : "",
    ].filter(Boolean);
    const there = ins.map(e => row("", `Getting there: ${LINK.area(e.area)}`, `
      <p class="dgroute">${e.outposts.length ? `From ${listText(e.outposts.map(o => LINK.area(o)))} to the entrance` : "The entrance"}</p>
      <p class="dgway" data-in="${e.area}"></p>`, mapHTML([e.area], { height: 340, town: e.outposts, spots: [{ x: e.at[0], y: e.at[1], name: "Entrance" }] }))).join("");
    return `
      <p class="back"><a href="dungeons">← All dungeons</a></p>
      <div class="lhead exp">
        <div><h2>${esc(l.name)}${isTickedDungeon(d.id) ? doneTicks("dungeons", d.id, undefined, "Done in") : ""}</h2><div class="lsub"><span class="ltype t${l.type} dgn">Dungeon</span> <span>${esc(regionOf(l)?.name)}</span></div>${isTickedDungeon(d.id) ? wannabeNeeds("dungeon", d.id) : ""}</div>
        <div class="lstats"><span class="lstat"><small>Levels</small><b>${d.levels.length || l.levels || "?"}</b></span>${l.party ? `<span class="lstat"><small>Party</small><b>${l.party}</b></span>` : ""}<span class="lstat dgtotal" hidden><small>Walk, all levels</small><b></b></span></div>
      </div>
      ${notes.length ? `<ul class="lnotes">${notes.map(noteLi).join("")}</ul>` : ""}
      <div class="llinks">${wikiLink(l.wiki)}</div>
      <ol class="dglist">${there}${d.levels.map((v, i) => levelRow(d, v, i)).join("")}</ol>
      ${d.levels.length ? "" : '<p class="dim">Its levels aren\'t mapped yet.</p>'}`;
  }

  // a map window's view, once the page has set it up
  const viewOf = async fig => { for (let k = 0; k < 200 && !fig.mapView; k++) await new Promise(r => setTimeout(r, 25)); return fig.mapView; };
  const GROUND = new Map();
  const loadGround = walk => GROUND.get(walk) || GROUND.set(walk, fetch(`game/walk/${walk}.json`).then(r => r.json()).catch(() => null)).get(walk);
  // draw a way on a row's map and say how long it is; its length, or 0
  // (a level's way is worked out on its whole cell's ground, which knows nothing of the level's own walls and doors)
  async function show(p, pts, what, note = "") {
    const view = await viewOf(p.closest(".dgrow").querySelector(".gmap"));
    if (pts && view) { view.ways = [...view.ways, { lines: walkLines(pts), color: WAY }]; view.draw(); }
    p.innerHTML = pts ? `<span class="dgleg" style="--c:${WAY}">${what}: ${walkText(walkLength(pts))}</span>${note}` : '<span class="dim">No way found.</span>';
    return pts ? walkLength(pts) : 0;
  }

  async function after(el, d) {
    const at = `dungeon=${d.id}`, live = () => el.dataset.at === at;
    let total = 0;
    // the walk from the nearest outpost to the entrance
    for (const e of entrances(AREAS[d.id])) {
      const p = el.querySelector(`[data-in="${e.area}"]`);
      if (!p || !e.outposts.length) continue;
      const grid = await walkGrid([e.area]);
      const best = e.outposts.map(o => walkWay(grid, o, [e.area, o], e.at)).filter(Boolean).sort((a, b) => walkLength(a) - walkLength(b))[0];
      if (!live()) return;
      total += await show(p, best, "Distance");
    }
    // each level's way through
    for (const [i, v] of d.levels.entries()) {
      const p = el.querySelector(`[data-way="${i}"]`);
      if (!p || !arrive(v, i) || !goal(v)) continue;
      const downs = v.marks.filter(m => m[0] === "down");
      if (downs.length > 1) {  // a way to each stairs down, said together (no one total then)
        const all = [];
        for (const m of downs) all.push(await levelWay(v, i, { to: [m[1], m[2]] }));
        if (!live()) return;
        const view = await viewOf(p.closest(".dgrow").querySelector(".gmap"));
        // each in a colour of its own, its stairs named on the map by it
        const COLORS = [WAY, "#ffb347", "#c58bff", "#7ee08a", "#ff6b8b"], col = k => COLORS[k % COLORS.length];
        if (view) { view.ways = all.map((pts, k) => pts && { lines: walkLines(pts), color: col(k) }).filter(Boolean); view.draw(); }
        p.innerHTML = `<small class="dim">Distance down each stairs</small><br>${all.map((pts, k) => `<span class="dgleg" style="--c:${col(k)}">${downs[k][3] ? `To ${esc(levelName(d, d.levels.findIndex(x => x.map === downs[k][3])))}: ` : ""}${pts ? walkText(walkLength(pts)) : "no way found"}</span>`).join("<br>")}`;
        continue;
      }
      const pts = await levelWay(v, i);
      if (!live()) return;
      total += await show(p, pts, "Distance");
    }
    const t = el.querySelector(".dgtotal");
    if (t && total && !d.levels.some(v => v.name))  // (branches, as Slavers' Exile's, have no one total)
      { t.hidden = false; t.querySelector("b").textContent = walkText(total); t.title = "From the outpost to the end, every level's path added up"; }
  }
  // any dungeon has a page; its levels where data/depths.js has them
  const dungeonOf = id => (isDungeon(AREAS[id]) ? { id: +id, levels: DEPTHS?.dungeons?.[id]?.levels || [] } : null);
  // (levelMap and levelWay for other pages: a guide shows a dungeon's levels)
  return { find: dungeonOf, title: d => AREAS[d.id].name, html, after, levelMap, levelWay };
})();
