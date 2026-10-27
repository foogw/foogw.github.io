"use strict";

const { teams: TEAMS, builds: BUILDS, singles: SINGLES = [], players: PLAYERS = [] } = window.GW_BUILDS;
const BUILD = new Map(BUILDS.map(b => [b.id, b]));
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const MISSIONS = new Set((window.GW_MISSIONS || []).map(m => m.name));
const PROF_NAMES = ["None", "Warrior", "Ranger", "Monk", "Necromancer", "Mesmer", "Elementalist", "Assassin", "Ritualist", "Paragon", "Dervish"];
const MODE_HINT = { Fight: "Fight: attacks what you target and what attacks the party",
  Guard: "Guard: fights only to defend the party", Avoid: "Avoid: stays out of combat" };

for (const b of BUILDS) {
  try { b._bar = TemplateCode.decode(b.code); } catch { b._bar = null; }
  b._profs = b._bar ? b._bar.professions.map(p => PROF_NAMES[p]) : [];
}

// always two icon slots wide, so build names line up whether or not a build has a secondary profession
const profIcons = b => `<span class="bd-pi">${b._profs.filter(p => p !== "None").map(p => `<img class="bd-prof" src="img/prof/${p}.png" alt="" title="${p}">`).join("")}</span>`;
const profText = b => b._profs.map(p => (p === "None" ? "Any" : p)).join(" / ");

// the player's tag, or a hero's behaviour when the build sets one
const modeHTML = b => (b.role === "You" ? '<span class="bd-mode you">You</span>'
  : b.mode ? `<span class="bd-mode ${b.mode.toLowerCase()}" title="${esc(MODE_HINT[b.mode])}">${esc(b.mode)}</span>` : "");

function barHTML(b) {
  if (!b._bar) return '<p class="dim">This template code could not be read.</p>';
  return `<div class="bd-bar">${b._bar.skills.map(id => {
    const s = SKILL.get(id);
    return s ? `<a class="bd-skill${s.elite ? " elite" : ""}" href="skills.html#skill=${id}" title="${esc(s.name)}" style="--pc:${profVar(s.profession)}">
      <img src="img/skills/${id}.jpg" alt="" loading="lazy" onerror="this.remove()"><span>${esc(s.name)}</span></a>` : `<span class="bd-skill bd-none"><i class="bd-noskill">?</i><span>Empty</span></span>`;
  }).join("")}</div>`;
}

// a team's builds in party order, identical bars once with how many there are
function grouped(t) {
  const groups = new Map();
  for (const b of t.builds.map(id => BUILD.get(id)).filter(Boolean)) {
    const g = groups.get(b.code);
    if (g) g.n++; else groups.set(b.code, { b, n: 1 });
  }
  return [...groups.values()];
}
const countHTML = n => (n > 1 ? `<span class="bd-count" title="${n} heroes run this bar">×${n}</span>` : "");

function buildHTML({ b, n }, i) {
  const g = b.gear || {};
  const gear = [["Runes", g.runes], ["Insignias", g.insignias], ["Weapons", (g.weapons || []).join("; ")]]
    .filter(([, v]) => v).map(([k, v]) => `<li><span class="dim">${k}</span> ${esc(v)}</li>`).join("");
  return `<section class="bd-card" id="card-${i + 1}" style="--pc:${profVar(b._profs[0])}">
    <header>
      ${i == null ? "" : `<span class="bd-num">${i + 1}</span>`}${profIcons(b)}
      <div class="bd-title"><h3>${esc(b.name)}${countHTML(n)}</h3><span class="dim">${esc(profText(b))}</span></div>
      ${modeHTML(b)}
    </header>
    <p class="bd-sum">${esc(b.summary)}</p>
    ${barHTML(b)}
    <div class="bd-attrs">${(b._bar?.attributes || []).map(a => `<span>${esc(ATTRIBUTES[a.id] || "")} ${a.rank}</span>`).join("")}</div>
    ${gear ? `<ul class="bd-gear">${gear}</ul>` : ""}
    ${b.notes ? `<p class="bd-note dim">${esc(b.notes)}</p>` : ""}
    <div class="bd-actions">
      <a href="builder.html#${new URLSearchParams({ code: b.code })}">Open in builder →</a>
      <button class="link" data-copy="${esc(b.code)}">Copy code</button>
      <code>${esc(b.code)}</code>
    </div>
  </section>`;
}

// every member's bar, one row each, linking to its build's card (identical bars share a card)
function overviewHTML(builds, groups) {
  const card = b => groups.findIndex(g => g.b.code === b.code) + 1;
  return `<section class="bd-overview">${builds.map((b, i) => `<div class="bd-orow" style="--pc:${profVar(b._profs[0])}">
    <span class="bd-num">${i + 1}</span>
    <a class="bd-oname" href="#card-${card(b)}" data-card="card-${card(b)}">${profIcons(b)}<span>${esc(b.name)}</span></a>
    ${modeHTML(b) || "<span></span>"}
    <div class="bd-obar">${(b._bar?.skills || []).map(id => {
      const s = SKILL.get(id);
      return s ? `<a href="skills.html#skill=${id}" title="${esc(s.name)}" class="${s.elite ? "elite" : ""}"><img src="img/skills/${id}.jpg" alt="${esc(s.name)}" loading="lazy"></a>` : '<i class="bd-noskill" title="Empty slot">?</i>';
    }).join("")}</div>
    <a class="bd-obuilder" href="builder.html#${new URLSearchParams({ code: b.code })}" title="Open in builder">Builder →</a>
  </div>`).join("")}</section>`;
}

function placeLink(t) {
  const parts = [];
  if (t.place) parts.push(`<a href="locations.html#${new URLSearchParams({ place: t.place })}">${esc(t.place)}</a>`);
  if (t.mission && MISSIONS.has(t.mission)) parts.push(`<a href="${esc(missionHref(t.mission))}">mission details</a>`);
  return parts.join(" · ");
}

function teamHTML(t) {
  const builds = t.builds.map(id => BUILD.get(id)).filter(Boolean);
  const groups = grouped(t);
  return `<p class="back"><a href="#">← All builds</a></p>
    <div class="bd-head">
      <h2>${esc(t.name)}</h2>
      <p>${esc(t.summary)}</p>
      <div class="bd-facts">
        ${t.place ? `<span><span class="dim">Where</span> ${placeLink(t)}</span>` : ""}
        ${t.mode ? `<span><span class="dim">Mode</span> ${esc(t.mode)}</span>` : ""}
        <span><span class="dim">Party</span> ${builds.length}</span>
      </div>
      ${t.yields ? `<p class="bd-yield"><span class="dim">Yields</span> ${esc(t.yields)}</p>` : ""}
      <div class="bd-tags">${(t.tags || []).map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
    </div>
    ${overviewHTML(builds, groups)}
    <div class="bd-grid">${groups.map(buildHTML).join("")}</div>
    ${t.usage ? `<section class="lbox bd-usage"><h4>How to run it</h4><ol>${t.usage.map(u => `<li>${esc(u)}</li>`).join("")}</ol></section>` : ""}
    ${t.source ? `<p class="dim bd-src">${esc(t.source.note || "From")} <a href="${esc(t.source.url)}" target="_blank" rel="noopener">${esc(t.source.name)}</a>, CC BY-NC-SA 2.5; shortened and reworded.</p>` : ""}`;
}

// a bar as a row of small icons, empty slots as "?"
const miniBar = b => (b._bar?.skills || []).map(id => (SKILL.has(id)
  ? `<img src="img/skills/${id}.jpg" alt="" loading="lazy" title="${esc(SKILL.get(id).name)}"${SKILL.get(id).elite ? ' class="elite"' : ""}>`
  : '<i class="bd-noskill" title="Empty slot">?</i>')).join("");

// player and hero builds, each list narrowed to one profession (their primary) on its own
const listProf = { players: null, singles: null };
function singlesHTML(key, title, ids) {
  const all = ids.map(id => BUILD.get(id)).filter(Boolean);
  if (!all.length) return "";
  const profs = PROFS.map(([p]) => p).filter(p => all.some(b => b._profs[0] === p));
  const chips = `<div class="profs bd-sprofs">${profs.map(p => `<button class="prof-chip" data-list="${key}" data-sprof="${p}" aria-pressed="${p === listProf[key]}" style="--c:${profVar(p)}">${p}</button>`).join("")}</div>`;
  const rank = b => PROF_ORDER[b._profs[0]] ?? 99;
  const shown = all.filter(b => !listProf[key] || b._profs[0] === listProf[key])
    .sort((x, y) => rank(x) - rank(y) || cmpStr(x.name, y.name));
  return `<h2 class="bd-section">${title}</h2>${chips}<div class="bd-singles">${shown.map(b =>
    `<a class="bd-single" href="#${new URLSearchParams({ build: b.id })}" style="--pc:${profVar(b._profs[0])}">
      <span class="bd-sname">${profIcons(b)}<b>${esc(b.name)}</b></span>
      ${modeHTML(b) || "<span></span>"}
      <span class="bd-ebar">${miniBar(b)}</span>
    </a>`).join("")}</div>`;
}

function singleHTML(b) {
  return `<p class="back"><a href="#">← All builds</a></p>
    <div class="bd-one">${buildHTML({ b, n: 1 }, null)}</div>
    ${b.source ? `<p class="dim bd-src">From <a href="${esc(b.source.url)}" target="_blank" rel="noopener">${esc(b.source.name)}</a>, CC BY-NC-SA 2.5; shortened and reworded.</p>` : ""}`;
}

function indexHTML() {
  return `<h2 class="bd-section">Team builds</h2><div class="bd-index">${TEAMS.map(t => {
    return `<a class="bd-entry" href="#${new URLSearchParams({ team: t.id })}">
      <h3>${esc(t.name)}</h3><p>${esc(t.summary)}</p>
      <div class="bd-ebars">${t.builds.map(id => BUILD.get(id)).filter(Boolean).map(b => `<div class="bd-ebar" title="${esc(b.name)}"><span class="bd-eprofs">${profIcons(b)}</span>${miniBar(b)}</div>`).join("")}</div>
      <div class="bd-tags">${(t.tags || []).map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
    </a>`;
  }).join("")}</div>${singlesHTML("players", "Player builds", PLAYERS)}${singlesHTML("singles", "Hero builds", SINGLES)}`;
}

// the list, a team, or one build, as the address says
function render() {
  const h = new URLSearchParams(location.hash.slice(1));
  const t = TEAMS.find(x => x.id === h.get("team"));
  const b = !t && [...SINGLES, ...PLAYERS].includes(h.get("build")) ? BUILD.get(h.get("build")) : null;
  $("index").hidden = !!(t || b);
  $("team").hidden = !(t || b);
  if (t || b) {
    $("team").innerHTML = t ? teamHTML(t) : singleHTML(b);
    document.title = `${(t || b).name} · GW Builds`;
    window.scrollTo(0, 0);
  } else {
    $("index").innerHTML = indexHTML();
    document.title = "GW Builds";
  }
}

document.addEventListener("click", e => {
  const chip = e.target.closest("[data-sprof]");
  if (chip) {
    const key = chip.dataset.list;
    listProf[key] = listProf[key] === chip.dataset.sprof ? null : chip.dataset.sprof;
    $("index").innerHTML = indexHTML();
    return;
  }
  // the address names the team, so a jump to a card scrolls instead of changing it
  const card = e.target.closest("[data-card]");
  if (card) { e.preventDefault(); $(card.dataset.card)?.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
  const b = e.target.closest("[data-copy]");
  if (!b) return;
  navigator.clipboard?.writeText(b.dataset.copy).then(() => {
    b.textContent = "Copied";
    setTimeout(() => { b.textContent = "Copy code"; }, 1500);
  });
});
window.addEventListener("hashchange", render);
render();
