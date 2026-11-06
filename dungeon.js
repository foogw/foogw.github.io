"use strict";
/* A dungeon's page, on the front page: ./?dungeon=<map id>. The whole trip as a list: the walk from the nearest outpost
   to the entrance, then each level with its map and the way through it (from where you arrive to the way down, or the
   boss), what's on the way, its quests and its Zaishen Bounty (data/depths.js). */

VIEWS.dungeon = (() => {
  const DEPTHS = data("GW_DEPTHS");
  const WAY = "#4fd1ff", UNITS = 96;  // game units per map pixel
  const units = px => `${Math.round(px * UNITS).toLocaleString()}`;
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
  function bounty(id) {
    const b = bountyAt(id);
    return b ? `Zaishen Bounty on ${bossLink(entryName(b.entry))}: <b>${inDays(b.days)}</b>, then every ${b.every} days.` : "";
  }


  // a row of the list: its map on the left, what it is on the right
  const row = (n, title, body, map) => `<li class="dgrow"><div class="dgmap">${map}</div><div class="dgtext"><h3><span class="dgn">${n}</span>${title}</h3>${body}</div></li>`;

  function levelRow(d, v, i) {
    const a = arrive(v, i), g = goal(v);
    const from = !a ? "" : a[0] === "portal" ? `From ${LINK.area(a[3])}` : v.name || !i ? "From the start" : `From ${esc(levelName(d, i - 1))}`;
    const to = !g ? "" : g[0] === "down" ? `down to ${esc(levelName(d, i + 1))}` : g[0] === "goal" ? `to ${esc(g[3])}` : `to the boss, ${bossLink(g[3])}`;
    const ways = v.marks.filter(m => m[0] === "portal" || m[0] === "down");
    const steps = stops(v).map(m => m[3]), sights = v.marks.filter(m => ["npc", "spot", "wall"].includes(m[0])).map(m => m[3]);
    const others = ways.filter(m => m[0] === "portal" && m !== a).map(m => LINK.area(m[3]));
    return row(i + 1, esc(levelName(d, i)), `
      <p class="dgroute">${from && to ? `${from} → ${to}` : '<span class="dim">Where you arrive and where it leads aren\'t marked yet.</span>'}</p>
      <p class="dgway" data-way="${i}"></p>
      ${steps.length ? `<p><small class="dim">Steps</small></p><ol class="dgsteps">${steps.map(t => `<li>${esc(t)}</li>`).join("")}<li>${g?.[0] === "down" ? `Down to ${esc(levelName(d, i + 1))}` : g?.[0] === "goal" ? esc(g[3]) : g ? `Kill ${esc(g[3])}` : ""}</li></ol>` : ""}
      ${sights.length ? `<p><small class="dim">Also here</small><br>${sights.map(esc).join(" · ")}</p>` : ""}
      ${others.length ? `<p><small class="dim">Also a way out</small><br>${others.join(" · ")}</p>` : ""}`,
      levelMap(d, i));
  }
  // a level's map: its ground, its ways out, the steps on it by their number in the list (and more spots: [{x, y, name}])
  function levelMap(d, i, { height = 340, more = [] } = {}) {
    const v = d.levels[i], ways = v.marks.filter(m => m[0] === "portal" || m[0] === "down");
    const level = { name: levelName(d, i), walk: (v.walk ?? DEPTHS.cells[v.cell]), area: v.area,
      portals: ways.map(m => ({ at: [m[1], m[2]], name: m[0] === "down" ? levelName(d, i + 1) : AREAS[m[3]]?.name || "" })) };
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
    return (v.area && await route([[...v.area, v.area[0], v.area[1]]])) || await route([]);
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
    ].filter(Boolean);
    const there = ins.map(e => row("", `Getting there: ${LINK.area(e.area)}`, `
      <p class="dgroute">${e.outposts.length ? `From ${listText(e.outposts.map(o => LINK.area(o)))} to the entrance` : "The entrance"}</p>
      <p class="dgway" data-in="${e.area}"></p>`, mapHTML([e.area], { height: 340, town: e.outposts, spots: [{ x: e.at[0], y: e.at[1], name: "Entrance" }] }))).join("");
    return `
      <p class="back"><a href="dungeons">← All dungeons</a></p>
      <div class="lhead exp">
        <div><h2>${esc(l.name)}${doneTicks("dungeons", d.id, undefined, "Done in")}</h2><div class="lsub"><span class="ltype t${l.type} dgn">Dungeon</span> <span>${esc(regionOf(l)?.name)}</span></div></div>
        <div class="lstats"><span class="lstat"><small>Levels</small><b>${d.levels.length || l.levels || "?"}</b></span>${l.party ? `<span class="lstat"><small>Party</small><b>${l.party}</b></span>` : ""}<span class="lstat dgtotal" hidden><small>Walk</small><b></b></span></div>
      </div>
      ${notes.length ? `<ul class="lnotes">${notes.map(n => `<li>${n}</li>`).join("")}</ul>` : ""}
      <div class="llinks">${wikiLink(l.wiki)}</div>
      <ol class="dglist">${there}${d.levels.map((v, i) => levelRow(d, v, i)).join("")}</ol>
      ${d.levels.length ? "" : '<p class="dim">Its levels aren\'t mapped yet.</p>'}`;
  }

  // a map window's view, once the page has set it up
  const viewOf = async fig => { for (let k = 0; k < 200 && !fig.mapView; k++) await new Promise(r => setTimeout(r, 25)); return fig.mapView; };
  const GROUND = new Map();
  const loadGround = walk => GROUND.get(walk) || GROUND.set(walk, fetch(`game/walk/${walk}.json`).then(r => r.json()).catch(() => null)).get(walk);
  // draw a way on a row's map and say how long it is; its length, or 0
  async function show(p, pts, what) {
    const view = await viewOf(p.closest(".dgrow").querySelector(".gmap"));
    if (pts && view) { view.ways = [{ lines: walkLines(pts), color: WAY }]; view.draw(); }
    p.innerHTML = pts ? `<span class="dgleg" style="--c:${WAY}">${what}: about ${units(walkLength(pts))} game units</span>` : '<span class="dim">No way found.</span>';
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
      total += await show(p, best, "The walk");
    }
    // each level's way through
    for (const [i, v] of d.levels.entries()) {
      const p = el.querySelector(`[data-way="${i}"]`);
      if (!p || !arrive(v, i) || !goal(v)) continue;
      const pts = await levelWay(v, i);
      if (!live()) return;
      total += await show(p, pts, "The way through");
    }
    const t = el.querySelector(".dgtotal");
    if (t && total && !d.levels.some(v => v.name))  // (branches, as Slavers' Exile's, have no one total)
      { t.hidden = false; t.querySelector("b").textContent = `${units(total)}`; t.title = "Game units, from the outpost to the end"; }
  }
  // any dungeon has a page; its levels where data/depths.js has them
  const dungeonOf = id => (isDungeon(AREAS[id]) ? { id: +id, levels: DEPTHS?.dungeons?.[id]?.levels || [] } : null);
  // (levelMap and levelWay for other pages: a guide shows a dungeon's levels)
  return { find: dungeonOf, title: d => AREAS[d.id].name, html, after, levelMap, levelWay };
})();
