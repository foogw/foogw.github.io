"use strict";

const GUIDES = window.GW_GUIDES;
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const SKILL_BY_NAME = new Map(window.GW_SKILLS.map(s => [s.name, s]));
const PLACES = new Set(window.GW_LOCATIONS.map(p => p.name));
const PLACE_TYPE = new Map(window.GW_LOCATIONS.map(p => [p.name, p.type]));
const MISSION_NAMES = new Set(window.GW_MISSIONS.map(m => m.name));
const QUESTS = window.GW_QUESTS?.quests || [];
const QUEST_BY_NAME = new Map(QUESTS.map(q => [q.name, q]));
const PROF_NAMES = ["None", "Warrior", "Ranger", "Monk", "Necromancer", "Mesmer", "Elementalist", "Assassin", "Ritualist", "Paragon", "Dervish"];
const MODE_HINT = { Fight: "Fight: attacks what you target and what attacks the party",
  Guard: "Guard: fights only to defend the party", Avoid: "Avoid: stays out of combat" };

// every block of a guide, including those inside boxes
const allBlocks = blocks => blocks.flatMap(x => [x, ...(x.box ? allBlocks(x.box.blocks) : [])]);
for (const g of GUIDES) for (const s of g.sections) for (const x of allBlocks(s.blocks)) for (const b of x.builds || []) {
  if (b.code) {
    try { b._bar = TemplateCode.decode(b.code); } catch { b._bar = null; }
  }
  b._skills = b._bar ? b._bar.skills : b.skills.map(n => (n ? SKILL_BY_NAME.get(n)?.id ?? 0 : null));
  b._profs = b._bar ? b._bar.professions.map(p => PROF_NAMES[p]).filter(p => p !== "None") : b.profs || [];
}

/* ---------- text ---------- */
// the name arrives escaped, so a shout's quotes come as &quot;
const skillLink = (name, icon = true) => {
  const s = SKILL_BY_NAME.get(name.replace(/&quot;/g, '"'));
  return s ? `<a class="skill-link${s.elite ? " elite" : ""}" href="skills#skill=${s.id}" style="--pc:${profVar(s.profession)}">${icon ? skillIcon(s.id, "sk-ic sm") : ""}${esc(s.name)}</a>` : name;
};
const placeLink = name => {
  const place = [name, `${name} (explorable)`].find(n => PLACES.has(n));
  return place ? `<a href="locations#${new URLSearchParams({ place })}">${esc(name)}</a>` : esc(name);
};
const text = t => esc(t)
  .replace(/\{skill:([^}]+)\}/g, (_, n) => skillLink(n))
  .replace(/\{skillname:([^}]+)\}/g, (_, n) => skillLink(n, false))
  .replace(/\{place:([^}]+)\}/g, (_, n) => placeLink(n))
  .replace(/\{mission:([^}]+)\}/g, (_, n) => (MISSION_NAMES.has(n) ? `<a href="${esc(missionHref(n))}">${esc(n)}</a>` : esc(n)))
  .replace(/\{page:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}">${t}</a>`)
  .replace(/\{ext:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`)
  .replace(/\{quest:([^}]+)\}/g, (_, n) => `<a href="${esc(questHref(n))}">${esc(n)}</a>`)
  .replace(/\{hero:([^}]+)\}/g, (_, n) => `<a href="${esc(heroHref(n))}">${esc(n)}</a>`);

/* ---------- builds ---------- */
const profIcons = b => `<span class="bd-pi">${b._profs.map(p => `<img class="bd-prof" src="img/prof/${p}.png" alt="" title="${p}">`).join("")}</span>`;
const modeHTML = b => (b.role === "You" ? '<span class="bd-mode you">You</span>'
  : b.mode ? `<span class="bd-mode ${b.mode.toLowerCase()}" title="${esc(MODE_HINT[b.mode])}">${esc(b.mode)}</span>` : "");

// one build per row: who, the bar, then its attributes, a note and the code
function buildHTML(b) {
  const attrs = byRank(b._bar?.attributes || [], b.runes).map(a => {
    const name = ATTRIBUTES[a.id] || "", runes = b.runes?.[name];
    return `<span>${esc(name)} ${a.rank}${runes ? `+${esc(runes)}` : ""}</span>`;
  }).join("") + (b.insignia ? `<span class="bd-ins">${esc(b.insignia)}</span>` : "") + (b.gear || []).map(g => `<span>${esc(g)}</span>`).join("");
  return `<div class="gd-build" style="--pc:${profVar(b._profs[0])}">
    <div class="gd-who">${profIcons(b)}<b>${esc(b.name)}</b>${modeHTML(b)}</div>
    <div class="bd-obar">${b._skills.map(id => {
      const s = SKILL.get(id);
      return s ? `<a href="skills#skill=${id}" title="${esc(s.name)}" class="${s.elite ? "elite" : ""}" style="--pc:${profVar(s.profession)}"><img src="img/skills/${id}.jpg" alt="${esc(s.name)}" loading="lazy"></a>`
        : `<i class="bd-noskill" title="${id === null ? "Free slot" : "Empty slot"}">${id === null ? "" : "?"}</i>`;
    }).join("")}</div>
    <div class="gd-info">
      ${attrs ? `<div class="bd-attrs">${attrs}</div>` : ""}
      ${b.note ? `<p class="bd-note">${text(b.note)}</p>` : ""}
      ${b.code ? `<div class="bd-actions"><a href="${esc(builderHref(b))}">Builder →</a><button class="link" data-copy="${esc(b.code)}">Copy code</button></div>` : ""}
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

const CHIP = { take: ["+", "Take"], go: ["›", "Progress"], done: ["✓", "Turn in"] };
const questChip = (name, kind) => `<a class="gd-qchip ${kind}" href="${esc(questHref(name))}" title="${CHIP[kind][1]}">${CHIP[kind][0]} ${esc(name)}</a>`;
// turned in, taken, moved on; a quest taken and finished in the same step shows both, taken first
function chipsHTML(st) {
  const take = st.take || [], done = st.done || [];
  const chips = [...done.filter(q => !take.includes(q)).map(q => questChip(q, "done")), ...take.map(q => questChip(q, "take")),
    ...(st.go || []).map(q => questChip(q, "go")), ...done.filter(q => take.includes(q)).map(q => questChip(q, "done"))];
  return chips.length ? `<div class="gd-qchips">${chips.join("")}</div>` : "";
}
// an outpost by its plain name, linked to its "(pre-Searing)" page when there is one
const outpostLink = name => placeLink(PLACES.has(`${name} (pre-Searing)`) ? `${name} (pre-Searing)` : name).replace(/ \(pre-Searing\)</, "<");
// a leg's header; a leg with no steps of its own runs into the next one's ("Map to X and step to Y")
// stepping into an outpost, out of one into an area, or across from one area into the next
const isOutpost = name => [name, `${name} (pre-Searing)`].some(n => PLACE_TYPE.get(n) === "outpost");
const legPlace = leg => leg.start || leg.map || leg.step;
const UNDERGROUND = new Set(["The Catacombs"]);  // you go down into these, not out to them
const legVerb = (leg, prev) => (leg.start ? "Start in" : leg.map ? "Map to" : UNDERGROUND.has(leg.step) ? "Go down into" : isOutpost(leg.step) ? "Step into"
  : prev && isOutpost(legPlace(prev)) ? "Step out to" : "Cross into");
const legHead = (leg, prev) => `<span class="dim">${legVerb(leg, prev)}</span> ${outpostLink(legPlace(leg))}`;
function routeHTML(g, route) {
  const done = ticked(g.id);
  return `<div class="gd-route">${route.map((leg, i) => {
    if (!leg.steps.length && route[i + 1]) return "";
    const prev = route[i - 1] && !route[i - 1].steps.length ? `${legHead(route[i - 1], route[i - 2])} <span class="dim">and ${legVerb(leg, route[i - 1]).toLowerCase()}</span> ${outpostLink(legPlace(leg))}` : legHead(leg, route[i - 1]);
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
  const seen = new Set();
  const qs = QUESTS.filter(q => q.region === x.region && !seen.has(q.name) && seen.add(q.name));
  const first = q => at.get(q.name).take ?? at.get(q.name).done;
  const why = q => x.skip[q.name] || x.rest;
  const repeats = q => q.repeatable || (x.daily && q.name.startsWith(x.daily));
  const rewards = q => [q.xp && `${q.xp.toLocaleString("en")} XP`, q.gold && `${q.gold} gold`].filter(Boolean).map(esc)
    .concat(q.skills.map(id => SKILL.get(id)).filter(Boolean).map(s => skillLink(s.name, false)), q.rewards.map(esc)).join(", ");
  const link = q => `<a href="${esc(questHref(q.name))}">${esc(q.name)}</a>`;
  const steps = s => `${s.take ?? ""}${s.take && s.done && s.done !== s.take ? " → " : ""}${s.done && s.done !== s.take ? s.done : ""}` || s.done;
  const inRoute = qs.filter(q => at.has(q.name)).sort((a, b) => first(a) - first(b) || cmpStr(a.name, b.name));
  const out = qs.filter(q => !at.has(q.name) && !repeats(q)).sort((a, b) => cmpStr(why(a), why(b)) || cmpStr(a.name, b.name));
  return `<h3>In the route (${inRoute.length})</h3>
    <div class="gd-table"><table><thead><tr><th>Quest</th><th>Giver</th><th>Rewards</th><th>Steps</th></tr></thead><tbody>${inRoute.map(q =>
      `<tr><td>${link(q)}</td><td>${esc(q.giver || "")}</td><td>${rewards(q)}</td><td>${steps(at.get(q.name))}</td></tr>`).join("")}</tbody></table></div>
    <h3>Left out (${out.length})</h3>
    <div class="gd-table"><table><thead><tr><th>Quest</th><th class="gd-why">Why</th><th>Giver</th><th>Rewards</th></tr></thead><tbody>${out.map(q =>
      `<tr class="gd-skip"><td>${link(q)}</td><td class="gd-why">${esc(why(q))}</td><td>${esc(q.giver || "")}</td><td>${rewards(q)}</td></tr>`).join("")}</tbody></table></div>`;
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
  if (x.table) return `<div class="gd-table"><table><thead><tr>${x.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${x.table.rows.map(r => `<tr>${r.map(c => `<td>${text(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    ${(x.table.notes || []).length ? `<ul class="gd-notes">${x.table.notes.map(n => `<li>${text(n)}</li>`).join("")}</ul>` : ""}`;
  if (x.route) return routeHTML(g, routeOf(g).route);
  if (x.routeTotal) {
    const r = routeOf(g), qs = [...r.at.keys()].filter(n => r.at.get(n).done).map(n => QUEST_BY_NAME.get(n)).filter(Boolean);
    const sum = k => qs.reduce((s, q) => s + (q[k] || 0), 0).toLocaleString("en");
    const loads = r.route.length;  // the start, and every map travel and portal, loads a zone
    return `<p class="gd-total">In all: <b>${sum("xp")} XP</b> from ${qs.length} quests, in <b>${loads} zone loads</b>.</p>`;
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
  const xp = names.reduce((sum, n) => sum + (QUEST_BY_NAME.get(n)?.xp || 0), 0);
  return [["Quests", String(names.length)], ["XP", xp.toLocaleString("en")], ["Steps", String(r.steps)]];
}

const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
function guidePageHTML(g) {
  const titled = g.sections.filter(s => s.title);
  return `<p class="back"><a href="#">← All guides</a></p>
    <div class="sp-head" style="--pc:var(--accent)">
      <div class="sp-title"><h2>${esc(g.name)}</h2><div class="sp-sub">${[g.mission && text(`{mission:${g.mission}}`), g.source && `By ${esc(g.source.author)}`, g.sub && esc(g.sub)].filter(Boolean).join(" · ")}</div></div>
      <div class="lstats">${statsOf(g).map(([k, v]) => `<span class="lstat"><small>${esc(k)}</small><b>${esc(v)}</b></span>`).join("")}</div>
    </div>
    <nav class="gd-toc">${titled.map(s => `<a href="#" data-to="gd-${slug(s.title)}">${esc(s.title)}</a>`).join("")}</nav>
    <article class="gd">${g.sections.map(s => `<section${s.title ? ` id="gd-${slug(s.title)}"` : ""}${s.flow ? ` class="flow"` : ""}>
      ${s.title ? `<h2>${esc(s.title)}</h2>` : ""}${s.blocks.map(x => blockHTML(x, g)).join("")}</section>`).join("")}
    </article>
    ${g.source ? `<p class="gd-src">${g.source.full ? "Also on" : "See the full guide and more at"} <a href="${esc(g.source.href)}" target="_blank" rel="noopener">the Guild Wars Wiki</a> (<a href="${esc(g.source.archive)}" target="_blank" rel="noopener">archived copy</a>).</p>` : ""}`;
}

/* ---------- the list ---------- */
function indexHTML() {
  return `<div class="bd-index">${GUIDES.map(g => `<a class="bd-entry" href="#${new URLSearchParams({ guide: g.id })}">
    <h3>${esc(g.name)}</h3><p>${esc(g.summary)}</p>
    <div class="bd-tags">${(g.tags || []).map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
  </a>`).join("")}</div>`;
}

// the list, or one guide when the address names one
function render() {
  const h = new URLSearchParams(location.hash.slice(1));
  const g = GUIDES.find(x => x.id === h.get("guide"));
  $("index").hidden = !!g;
  $("guide").hidden = !g;
  document.querySelector(".page-title").hidden = !!g;
  if (g) {
    $("guide").innerHTML = guidePageHTML(g);
    document.title = `${g.name} · GW Guides`;
  } else {
    $("index").innerHTML = indexHTML();
    document.title = "GW Guides";
  }
}

// a ticked step is remembered in this browser only
document.addEventListener("change", e => {
  const box = e.target.closest("[data-step]");
  if (!box) return;
  const id = new URLSearchParams(location.hash.slice(1)).get("guide");
  const done = ticked(id);
  box.checked ? done.add(+box.dataset.step) : done.delete(+box.dataset.step);
  box.closest(".gd-step").classList.toggle("ticked", box.checked);
  try { localStorage.setItem(STORE(id), JSON.stringify([...done])); } catch {}
});

document.addEventListener("click", e => {
  const to = e.target.closest("[data-to]");
  if (to) {
    e.preventDefault();
    $(to.dataset.to)?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const b = e.target.closest("[data-copy]");
  if (!b) return;
  navigator.clipboard?.writeText(b.dataset.copy).then(() => {
    b.textContent = "Copied";
    setTimeout(() => { b.textContent = "Copy code"; }, 1500);
  });
});
render();
// a new guide starts at the top; a reload keeps the browser's scroll position
window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
