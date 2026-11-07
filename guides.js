"use strict";

// the list (data/guides.js); a guide's own content comes from its file when it's opened (loadGuide)
const GUIDES = data("GW_GUIDES").guides;
const MODE_HINT = { Fight: "Fight: attacks what you target and what attacks the party",
  Guard: "Guard: fights only to defend the party", Avoid: "Avoid: stays out of combat" };

// every block of a guide, including those inside boxes
const allBlocks = blocks => blocks.flatMap(x => [x, ...(x.box ? allBlocks(x.box.blocks) : [])]);
// a build given by id is the Builds page's, with its insignia and weapons; repeats of one bar show once, counted
const fromSite = id => {
  const b = BUILDS.get(id);
  return { name: b.name, code: b.code, mode: b.mode, runes: b.runes, insignia: b.gear?.insignias, gear: b.gear?.weapons };
};
function prepareBuilds(g) {
  for (const s of g.sections) for (const x of allBlocks(s.blocks)) if (x.builds) {
  const seen = new Map();
  x.builds = x.builds.map(b => (typeof b === "string" ? fromSite(b) : b)).filter(b => {
    const first = b.code && seen.get(b.code);
    if (first) first.count = (first.count || 1) + 1; else if (b.code) seen.set(b.code, b);
    return !first;
  });
  for (const b of x.builds) {
    // one bar for many professions (codes: a code each, its primary the one it's for): shown once, copied for any
    if (b.codes) { b.code = b.codes[0]; b._codes = b.codes.map(c => { try { return [TemplateCode.decode(c).professions[0], c]; } catch { return null; } }).filter(Boolean); }
    if (b.code) try { b._bar = TemplateCode.decode(b.code); } catch { b._bar = null; }
    b._skills = b._bar ? b._bar.skills : b.skills;
    b._profs = b._codes ? b._bar.professions.slice(1).filter(Boolean) : b._bar ? b._bar.professions.filter(Boolean) : (b.profs || []).map(p => PROFS.indexOf(p));
  }
  }
}
// a guide with its content, from data/guides/<id>.json (once)
const LOADED = new Map();
function loadGuide(g) {
  if (!LOADED.has(g.id)) LOADED.set(g.id, fetch(`data/guides/${g.id}.json`).then(r => r.json()).then(c => {
    Object.assign(g, c);
    prepareBuilds(g);
    return g;
  }));
  return LOADED.get(g.id);
}

/* ---------- builds ---------- */
const profIcons = b => `<span class="bd-pi">${b._profs.map(p => `<img class="bd-prof" src="${profImg(p)}" alt="" title="${PROFS[p]}">`).join("")}</span>`;
const modeHTML = b => (b.role === "You" ? '<span class="bd-mode you">You</span>'
  : b.mode ? `<span class="bd-mode ${b.mode.toLowerCase()}" title="${esc(MODE_HINT[b.mode])}">${esc(b.mode)}</span>` : "");

// one build per row: who, the bar, then its attributes, a note and the code
function buildHTML(b) {
  const attrs = byRank(b._bar?.attributes || [], b.runes).map(a => {
    const name = ATTRIBUTES[a.id] || "", runes = b.runes?.[a.id];
    return `<span>${esc(name)} ${a.rank}${runes ? `+${esc(runes)}` : ""}</span>`;
  }).join("") + (b.insignia ? `<span class="bd-ins">${esc(b.insignia)}</span>` : "") + (b.gear || []).map(g => `<span>${esc(g)}</span>`).join("");
  return `<div class="gd-build" style="--pc:${profVar(b._profs[0])}">
    <div class="gd-who">${profIcons(b)}<b>${esc(b.name)}</b>${b.count ? `<span class="bd-count">×${b.count}</span>` : ""}${modeHTML(b)}</div>
    <div class="bd-obar">${b._skills.map(id => {
      const s = SKILLS[id];
      return s ? `<a href="${HREF.skill(id)}" title="${esc(s.name)}" class="${s.elite ? "elite" : ""}" style="--pc:${profVar(s.profession)}"><img src="img/skills/${id}.jpg" alt="${esc(s.name)}" loading="lazy"></a>`
        : `<i class="bd-noskill" title="${!id ? "Free slot" : "Empty slot"}">${!id ? "" : "?"}</i>`;  // (a code's empty slot is 0)
    }).join("")}</div>
    <div class="gd-info">
      ${attrs ? `<div class="bd-attrs">${attrs}</div>` : ""}
      ${b.note ? `<p class="bd-note">${text(b.note)}</p>` : ""}
      ${b._codes ? `<div class="bd-actions bd-copies">Copy for${b._codes.map(([p, c]) => `<button class="bd-copyp" data-copy="${esc(c)}" title="Copy the ${PROFS[p]}'s code"><img class="bd-prof" src="${profImg(p)}" alt="${PROFS[p]}"></button>`).join("")}</div>`
        : b.code ? `<div class="bd-actions"><a href="${esc(builderHref(b))}">Builder →</a><button class="link" data-copy="${esc(b.code)}">Copy code</button></div>` : ""}
    </div>
  </div>`;
}

/* ---------- a route of numbered steps, and the quests it covers ---------- */
// each step numbered across the legs, and where every quest is taken and turned in
function routeOf(g) {
  const route = g.sections.flatMap(s => s.blocks).find(x => x.route)?.route;
  if (!route) return null;
  const at = new Map();  // quest -> { take, done } step numbers
  let n = 0;
  for (const leg of route) for (const st of leg.steps) {
    st._n = ++n;
    for (const q of st.take || []) (at.get(q) || at.set(q, {}).get(q)).take ??= n;
    for (const q of st.done || []) (at.get(q) || at.set(q, {}).get(q)).done = n;
  }
  return { route, at, steps: n };
}

const STORE = id => `gw-guide-${id}`;
function ticked(id) {
  try { return new Set(JSON.parse(localStorage.getItem(STORE(id)) || "[]")); } catch { return new Set(); }
}

// the faction cap calculator: a checkbox per one-time raise and a rank stepper for the title
const num = n => n.toLocaleString("en-US");
const capKey = id => `gw-cap-${id}`;
function capSaved(id) {
  try { return JSON.parse(localStorage.getItem(capKey(id)) || "{}"); } catch { return {}; }
}
const CHEVRON = d => `<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const rankRaise = (r, rank) => (rank ? r.first + (rank - 1) * r.each : 0);
function capCalcHTML(c, g) {
  const saved = capSaved(g.id), on = new Set(saved.rows || []);
  // the control sits in its own column, so every checkbox lines up with the rank's number
  const rows = c.rows.map((r, i) => (r.rank
    ? `<tr><td class="gd-ctl"><span class="gd-rank" data-max="${r.max}"><button type="button" data-cap-step="-1" aria-label="Lower rank">${CHEVRON("M3 6l5 5 5-5")}</button><b data-cap-rank>${saved.rank || 0}</b><button type="button" data-cap-step="1" aria-label="Higher rank">${CHEVRON("M3 10l5-5 5 5")}</button></span></td>
        <td>${text(r.rank)} rank <span class="dim">(${num(r.first / 1000)}k for the first, ${num(r.each / 1000)}k for each after)</span></td><td data-cap-rankval></td></tr>`
    : `<tr><td class="gd-ctl"><input type="checkbox" id="cap-${i}" data-cap-row="${i}"${on.has(i) ? " checked" : ""}></td>
        <td><label for="cap-${i}">${text(r[0])}</label></td><td>${num(r[1])}</td></tr>`)).join("");
  return `<div class="gd-table gd-cap" data-cap="${esc(JSON.stringify(c))}"><table>
    <thead><tr><th></th><th>Raise the cap by</th><th>Faction</th></tr></thead>
    <tbody><tr><td class="gd-ctl"></td><td>Everyone starts with</td><td>${num(c.base)}</td></tr>${rows}</tbody>
    <tfoot><tr><td class="gd-ctl"></td><td>Your cap <span class="dim" data-cap-time></span></td><td data-cap-total></td></tr></tfoot></table></div>`;
}
function capUpdate(el) {
  const c = JSON.parse(el.dataset.cap);
  const rank = +(el.querySelector("[data-cap-rank]")?.textContent || 0), rr = c.rows.find(r => r.rank);
  const rows = [...el.querySelectorAll("[data-cap-row]")].filter(b => b.checked).map(b => +b.dataset.capRow);
  const cap = c.base + rows.reduce((t, i) => t + c.rows[i][1], 0) + (rr ? rankRaise(rr, rank) : 0);
  const mins = Math.round(cap / c.rate * 60);
  if (rr) el.querySelector("[data-cap-rankval]").textContent = num(rankRaise(rr, rank));
  el.querySelector("[data-cap-total]").textContent = num(cap);
  el.querySelector("[data-cap-time]").textContent =
    `– will max in ${Math.floor(mins / 60)}:${String(mins % 60).padStart(2, "0")}`;
  return { rows, rank };
}

const CHIP = { take: ["+", "Take"], go: ["›", "Progress"], done: ["✓", "Turn in"] };
const questChip = (id, kind) => `<a class="gd-qchip ${kind}" href="${HREF.quest(id)}" title="${CHIP[kind][1]}">${CHIP[kind][0]} ${esc(QUESTS[id]?.name)}</a>`;
// turned in, taken, moved on; a quest taken and finished in the same step shows both, taken first
function chipsHTML(st) {
  const take = st.take || [], done = st.done || [];
  const chips = [...done.filter(q => !take.includes(q)).map(q => questChip(q, "done")), ...take.map(q => questChip(q, "take")),
    ...(st.go || []).map(q => questChip(q, "go")), ...done.filter(q => take.includes(q)).map(q => questChip(q, "done"))];
  return chips.length ? `<div class="gd-qchips">${chips.join("")}</div>` : "";
}
// a leg's header; a leg with no steps of its own runs into the next one's ("Map to X and step to Y"):
// stepping into an outpost, out of one into an area, or across from one area into the next
const legArea = leg => leg.start ?? leg.map ?? leg.step ?? leg.area;
const legName = leg => (typeof legArea(leg) === "number" ? LINK.area(legArea(leg)) : esc(legArea(leg)));  // an area may be a named part of a zone
const outpostAt = id => isOutpost(AREAS[id]);
const UNDERGROUND = new Set([145]);  // you go down into these (the Catacombs), not out to them
const legVerb = (leg, prev) => (leg.start ? "Start in" : leg.map ? "Map to" : leg.area ? "Head to" : UNDERGROUND.has(leg.step) ? "Go down into" : outpostAt(leg.step) ? "Step into"
  : prev && outpostAt(legArea(prev)) ? "Step out to" : "Cross into");
const legHead = (leg, prev) => `<span class="dim">${legVerb(leg, prev)}</span> ${legName(leg)}`;
function routeHTML(g, route) {
  const done = ticked(g.id);
  return `<div class="gd-route">${route.map((leg, i) => {
    if (!leg.steps.length && route[i + 1]) return "";
    const prev = route[i - 1] && !route[i - 1].steps.length ? `${legHead(route[i - 1], route[i - 2])} <span class="dim">and ${legVerb(leg, route[i - 1]).toLowerCase()}</span> ${legName(leg)}` : legHead(leg, route[i - 1]);
    return `<section class="gd-leg"><h3>${prev}</h3><ol>${leg.steps.map(st =>
    `<li class="gd-step${done.has(st._n) ? " ticked" : ""}">
      <label class="gd-tick"><input type="checkbox" data-step="${st._n}"${done.has(st._n) ? " checked" : ""}><span>${st._n}</span></label>
      <div><p>${text(st.t)}</p>${chipsHTML(st)}</div>
    </li>`).join("")}</ol></section>`;
  }).join("")}</div>`;
}

// the quests the route covers, by the step that first takes them, then the ones it leaves out, by why;
// repeatable ones and the dailies are left out of both
function questIndexHTML(g, x) {
  const at = routeOf(g)?.at || new Map();
  const qs = [...new Set(x.areas.flatMap(questsAt))];
  const first = q => at.get(q.id).take ?? at.get(q.id).done;
  const why = q => x.skip[q.id] || x.rest;
  const repeats = q => q.repeatable || (x.daily && q.name.startsWith(x.daily));
  const rewards = q => [q.xp && `${q.xp.toLocaleString("en")} XP`, q.gold && `${q.gold} gold`].filter(Boolean).map(esc)
    .concat((q.skills || []).filter(id => SKILLS[id]).map(id => LINK.skill(id, false)), (q.rewards || []).map(esc)).join(", ");
  const giver = q => esc(questGivers(q)[0]?.name || "");
  const steps = s => `${s.take ?? ""}${s.take && s.done && s.done !== s.take ? " → " : ""}${s.done && s.done !== s.take ? s.done : ""}` || s.done;
  const inRoute = qs.filter(q => at.has(q.id)).sort((a, b) => first(a) - first(b) || cmpStr(a.name, b.name));
  const out = qs.filter(q => !at.has(q.id) && !repeats(q)).sort((a, b) => cmpStr(why(a), why(b)) || cmpStr(a.name, b.name));
  return `<h3>In the route (${inRoute.length})</h3>
    <div class="gd-table"><table><thead><tr><th>Quest</th><th>Giver</th><th>Rewards</th><th>Steps</th></tr></thead><tbody>${inRoute.map(q =>
      `<tr><td>${LINK.quest(q.id)}</td><td>${giver(q)}</td><td>${rewards(q)}</td><td>${steps(at.get(q.id))}</td></tr>`).join("")}</tbody></table></div>
    ${out.length ? `<h3>Left out (${out.length})</h3>
    <div class="gd-table"><table><thead><tr><th>Quest</th><th class="gd-why">Why</th><th>Giver</th><th>Rewards</th></tr></thead><tbody>${out.map(q =>
      `<tr class="gd-skip"><td>${LINK.quest(q.id)}</td><td class="gd-why">${esc(why(q))}</td><td>${giver(q)}</td><td>${rewards(q)}</td></tr>`).join("")}</tbody></table></div>` : ""}`;
}

/* ---------- one guide ---------- */
function blockHTML(x, g) {
  if (x.h) return `<h3>${esc(x.h)}</h3>`;
  if (x.p) return `<p>${text(x.p)}</p>`;
  if (x.box) return `<aside class="gd-box"><h3>${esc(x.box.title)}</h3>${x.box.blocks.map(y => blockHTML(y, g)).join("")}</aside>`;
  if (x.note) return `<p class="gd-aside">${text(x.note)}</p>`;
  if (x.ul) return `<ul>${x.ul.map(t => `<li>${text(t)}</li>`).join("")}</ul>`;
  if (x.ol) return `<ol>${x.ol.map(t => `<li>${text(t)}</li>`).join("")}</ol>`;
  if (x.imgs) return `<figure class="gd-fig"><div class="gd-row">${x.imgs.srcs.map(src => `<a href="${esc(src)}" target="_blank"><img src="${esc(src)}" alt="" loading="lazy"></a>`).join("")}</div>
    <figcaption>${text(x.imgs.caption)}</figcaption></figure>`;
  if (x.img) return `<figure class="gd-fig${x.img.side ? " side" : ""}"><a href="${esc(x.img.src)}" target="_blank"><img src="${esc(x.img.src)}" alt="" loading="lazy"></a>
    <figcaption>${text(x.img.caption)}</figcaption></figure>`;
  if (x.builds) return `<div class="gd-builds">${x.builds.map(buildHTML).join("")}</div>`;
  if (x.capCalc) return capCalcHTML(x.capCalc, g);
  // a dungeon's level (data/depths.js): {level: [dungeon map id, its index], to: [x, y]}: the way through it as the
  // dungeon's page has it, or from where you arrive to that point
  if (x.level) {
    const [id, i] = x.level, d = VIEWS.dungeon?.find(id);
    if (!d?.levels[i]) return "";
    return `<div class="gd-map" data-level-way="${esc(JSON.stringify({ id, i, to: x.to }))}">${VIEWS.dungeon.levelMap(d, i, { height: x.height || 340 })}</div>`;
  }
  if (x.maps) return `<div class="gd-maps">${x.maps.map(y => blockHTML(y, g)).join("")}</div>`;
  if (x.areas) return `<div class="gd-map${x.side ? " side" : ""}"${x.spots ? ` data-way="${esc(JSON.stringify({ ids: x.areas, spots: x.spots.map(p => p.at), from: x.from }))}"` : ""}>${mapHTML(x.areas,
    { height: x.height || MAP_MAX_H, crop: x.crop, spots: x.spots?.map(p => ({ x: p.at[0], y: p.at[1], name: p.name })) })}</div>`;
  if (x.table) return `<div class="gd-table"><table><thead><tr>${x.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${x.table.rows.map(r => `<tr>${r.map(c => `<td>${text(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    ${(x.table.notes || []).length ? `<ul class="gd-notes">${x.table.notes.map(n => `<li>${text(n)}</li>`).join("")}</ul>` : ""}`;
  if (x.route) return routeHTML(g, routeOf(g).route);
  if (x.routeTotal) {
    const r = routeOf(g), qs = [...r.at.keys()].filter(n => r.at.get(n).done).map(n => QUESTS[n]).filter(Boolean);
    const sum = k => qs.reduce((s, q) => s + (q[k] || 0), 0).toLocaleString("en");
    const loads = r.route.filter(leg => !leg.area).length;  // the start, and every map travel and portal, loads a zone; an area is a part of one
    return `<p class="gd-total">In all: <b>${sum("xp")} XP</b> from ${qs.length} quests${x.routeTotal.plus ? `, plus ${text(x.routeTotal.plus)}` : ""}${loads > 1 ? `, in <b>${loads} zone loads</b>` : ""}.</p>`;
  }
  if (x.questIndex) return questIndexHTML(g, x.questIndex);
  if (x.qa) return `<dl class="gd-qa">${x.qa.map(([q, a]) => `<dt>${text(q)}</dt><dd>${text(a)}</dd>`).join("")}</dl>`;
  return "";
}

// a route's stats come from its steps: how many quests it finishes, their XP, and the steps
function statsOf(g) {
  const r = routeOf(g);
  if (!r) return g.stats || [];
  const names = [...r.at.keys()].filter(n => r.at.get(n).done);
  const xp = names.reduce((sum, n) => sum + (QUESTS[n]?.xp || 0), 0);
  return [["Quests", String(names.length)], ["XP", xp.toLocaleString("en")], ["Steps", String(r.steps)]];
}

const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
function guidePageHTML(g) {
  const titled = g.sections.filter(s => s.title);
  return `<p class="back"><a href="?">← All guides</a></p>
    <div class="sp-head" style="--pc:var(--accent)">
      <div class="sp-title"><h2>${esc(g.name)}</h2><div class="sp-sub">${[g.mission && LINK.mission(g.mission), g.source && `By ${esc(g.source.author)}`, g.sub && esc(g.sub)].filter(Boolean).join(" · ")}</div></div>
      <div class="lstats">${statsOf(g).map(([k, v]) => `<span class="lstat"><small>${esc(k)}</small><b>${esc(v)}</b></span>`).join("")}</div>
    </div>
    <nav class="gd-toc">${titled.map(s => `<a href="#" data-to="gd-${slug(s.title)}">${esc(s.title)}</a>`).join("")}</nav>
    <article class="gd">${g.sections.map(s => `<section${s.title ? ` id="gd-${slug(s.title)}"` : ""}${s.flow ? ` class="flow"` : ""}>
      ${s.title ? `<h2>${esc(s.title)}</h2>` : ""}${s.blocks.map(x => blockHTML(x, g)).join("")}</section>`).join("")}
    </article>
    ${g.source && g.source.more !== false ? `<p class="gd-src">${g.source.full ? "Also on" : "See the full guide and more at"} <a href="${esc(g.source.href)}" target="_blank" rel="noopener">the Guild Wars Wiki</a> (<a href="${esc(g.source.archive)}" target="_blank" rel="noopener">archived copy</a>).</p>` : ""}`;
}

/* ---------- the list ---------- */
// the list, under the group titles in their order
const GROUPS = [["afk", "AFK guides"], ["solo", "Solo guides"], ["quests", "Quest guides"]];
const guideEntryHTML = g => `<a class="bd-entry" href="guides?${esc(g.id)}">
    <h3>${esc(g.name)}</h3><p>${esc(g.summary)}</p>
    <div class="bd-tags">${(g.tags || []).map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
  </a>`;
function indexHTML() {
  return GROUPS.map(([key, title]) => {
    const gs = GUIDES.filter(g => g.group === key);
    return gs.length ? `<h2 class="bd-section">${title}</h2><div class="bd-index">${gs.map(guideEntryHTML).join("")}</div>` : "";
  }).join("");
}

// the guides' ids before they were short names, as older links (guides#guide=gom-afk-xp) and this browser's saved
// ticks have them
const OLD_IDS = {"gom-afk-xp": "gom", "pre-searing-quests": "pre", "wayfarers-reverie": "reverie", "fow-quests": "fow", "uw-quests": "uw", "chaos-axe-farm": "drakes", "fow-spider-cave": "spidercave", "zos-afk-luxon": "zos"};
for (const [old, id] of Object.entries(OLD_IDS)) for (const key of [STORE, capKey]) try {
  if (localStorage.getItem(key(old)) != null && localStorage.getItem(key(id)) == null) localStorage.setItem(key(id), localStorage.getItem(key(old)));
} catch {}
// the guide the address names: guides?gom
const guideId = () => [...args().keys()][0];

// the list, or one guide when the address names one
async function render() {
  const old = OLD_IDS[args().get("guide")];
  if (old) { go("?" + old, true); return; }
  const want = GUIDES.find(x => x.id === guideId());
  const g = want && await loadGuide(want);
  if (g && g.id !== guideId()) return;  // another guide asked for meanwhile
  $("index").hidden = !!g;
  $("guide").hidden = !g;
  document.querySelector(".page-title").hidden = !!g;
  if (g) {
    $("guide").innerHTML = guidePageHTML(g);
    document.querySelectorAll(".gd-cap").forEach(capUpdate);
    initMaps($("guide")).then(() => drawWays(g));
    document.title = `${g.name} · GW Guides`;
  } else {
    $("index").innerHTML = indexHTML();
    document.title = "GW Guides";
  }
}

// a map with spots: the way on foot from its first area (the outpost), or from each outpost it names (from), through
// the areas it shows, to the first spot, then on to each next one
// the ways from different starts on one map, each in its own colour
const WAYS = ["#4fd1ff", "#ff9f43", "#c56cf0", "#7bed9f"];
async function drawWays(g) {
  for (const box of $("guide").querySelectorAll(".gd-map[data-level-way]")) {
    const { id, i, to } = JSON.parse(box.dataset.levelWay), view = box.querySelector(".gmap")?.mapView;
    const pts = view && await VIEWS.dungeon.levelWay(VIEWS.dungeon.find(id).levels[i], i, { to });
    if (g.id !== guideId()) return;
    if (pts) { view.ways = [{ lines: walkLines(pts), color: WAYS[0] }]; view.draw(); }
  }
  for (const box of $("guide").querySelectorAll(".gd-map[data-way]")) {
    const { ids, spots, from = ids[0] } = JSON.parse(box.dataset.way), view = box.querySelector(".gmap")?.mapView, froms = [from].flat(), all = [...new Set([...froms, ...ids])];
    if (!view || all.length < 2) continue;
    // (the ground of the areas on this map only: a start on another map is reached through its portal here)
    const grid = await walkGrid(all.filter(i => walkable(i) && AREAS[i]?.set === view.set));
    // (a start the game counts as an explorable area, but walked out of as an outpost: from its portals into the areas shown)
    const portalsOut = f => (AREAS[f]?.exits || []).filter(e => e.at && all.includes(e.to)).map(e => walkRoute(grid, { at: e.at, area: e.to }, spots[0])).filter(Boolean)
      .sort((a, b) => walkLength(a) - walkLength(b))[0];
    // each start's way in its own colour; the way on from spot to spot is one trip, in the first's
    const legs = [...froms.map((f, i) => [walkWay(grid, f, all, spots[0]) || portalsOut(f), i]), ...spots.slice(1).map((at, i) => [walkRoute(grid, spots[i], at), 0])];
    if (g.id !== guideId()) return;  // another guide meanwhile
    view.ways = legs.filter(([pts]) => pts).map(([pts, i]) => ({ lines: walkLines(pts), color: WAYS[i % WAYS.length] }));
    view.draw();
  }
}

// the calculator's choices are remembered in this browser only
function capChanged(el) {
  const id = guideId();
  const state = capUpdate(el);
  try { localStorage.setItem(capKey(id), JSON.stringify(state)); } catch {}
}
document.addEventListener("input", e => {
  const el = e.target.closest(".gd-cap");
  if (el) capChanged(el);
});

// a ticked step is remembered in this browser only
document.addEventListener("change", e => {
  const box = e.target.closest("[data-step]");
  if (!box) return;
  const id = guideId();
  const done = ticked(id);
  box.checked ? done.add(+box.dataset.step) : done.delete(+box.dataset.step);
  box.closest(".gd-step").classList.toggle("ticked", box.checked);
  try { localStorage.setItem(STORE(id), JSON.stringify([...done])); } catch {}
});

document.addEventListener("click", e => {
  const step = e.target.closest("[data-cap-step]");
  if (step) {
    const box = step.parentElement, n = box.querySelector("[data-cap-rank]");
    n.textContent = Math.min(+box.dataset.max, Math.max(0, +n.textContent + +step.dataset.capStep));
    capChanged(step.closest(".gd-cap"));
    return;
  }
  const to = e.target.closest("[data-to]");
  if (to) {
    e.preventDefault();
    $(to.dataset.to)?.scrollIntoView({ behavior: "smooth" });
  }
});
// a new guide starts at the top; a reload keeps the browser's scroll position
onRoute(() => render().then(() => window.scrollTo(0, 0)));
render();
