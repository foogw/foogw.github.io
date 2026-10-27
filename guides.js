"use strict";

const GUIDES = window.GW_GUIDES;
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const SKILL_BY_NAME = new Map(window.GW_SKILLS.map(s => [s.name, s]));
const PLACES = new Set(window.GW_LOCATIONS.map(p => p.name));
const MISSION_NAMES = new Set(window.GW_MISSIONS.map(m => m.name));
const PROF_NAMES = ["None", "Warrior", "Ranger", "Monk", "Necromancer", "Mesmer", "Elementalist", "Assassin", "Ritualist", "Paragon", "Dervish"];
const MODE_HINT = { Fight: "Fight: attacks what you target and what attacks the party",
  Guard: "Guard: fights only to defend the party", Avoid: "Avoid: stays out of combat" };

for (const g of GUIDES) for (const s of g.sections) for (const x of s.blocks) for (const b of x.builds || []) {
  if (b.code) {
    try { b._bar = TemplateCode.decode(b.code); } catch { b._bar = null; }
  }
  b._skills = b._bar ? b._bar.skills : b.skills.map(n => (n ? SKILL_BY_NAME.get(n)?.id ?? 0 : null));
  b._profs = b._bar ? b._bar.professions.map(p => PROF_NAMES[p]).filter(p => p !== "None") : b.profs || [];
}

/* ---------- text ---------- */
const skillLink = name => {
  const s = SKILL_BY_NAME.get(name);
  return s ? `<a class="skill-link${s.elite ? " elite" : ""}" href="skills.html#skill=${s.id}" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${esc(name)}</a>` : esc(name);
};
const placeLink = name => {
  const place = [name, `${name} (explorable)`].find(n => PLACES.has(n));
  return place ? `<a href="locations.html#${new URLSearchParams({ place })}">${esc(name)}</a>` : esc(name);
};
const text = t => esc(t)
  .replace(/\{skill:([^}]+)\}/g, (_, n) => skillLink(n))
  .replace(/\{place:([^}]+)\}/g, (_, n) => placeLink(n))
  .replace(/\{mission:([^}]+)\}/g, (_, n) => (MISSION_NAMES.has(n) ? `<a href="${esc(missionHref(n))}">${esc(n)}</a>` : esc(n)))
  .replace(/\{page:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}">${t}</a>`)
  .replace(/\{ext:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`);

/* ---------- builds ---------- */
const profIcons = b => `<span class="bd-pi">${b._profs.map(p => `<img class="bd-prof" src="img/prof/${p}.png" alt="" title="${p}">`).join("")}</span>`;
const modeHTML = b => (b.role === "You" ? '<span class="bd-mode you">You</span>'
  : b.mode ? `<span class="bd-mode ${b.mode.toLowerCase()}" title="${esc(MODE_HINT[b.mode])}">${esc(b.mode)}</span>` : "");

// one build per row: who, the bar, then its attributes, a note and the code
function buildHTML(b) {
  const attrs = (b._bar?.attributes || []).map(a => `<span>${esc(ATTRIBUTES[a.id] || "")} ${a.rank}</span>`).join("");
  return `<div class="gd-build" style="--pc:${profVar(b._profs[0])}">
    <div class="gd-who">${profIcons(b)}<b>${esc(b.name)}</b>${modeHTML(b)}</div>
    <div class="bd-obar">${b._skills.map(id => {
      const s = SKILL.get(id);
      return s ? `<a href="skills.html#skill=${id}" title="${esc(s.name)}" class="${s.elite ? "elite" : ""}" style="--pc:${profVar(s.profession)}"><img src="img/skills/${id}.jpg" alt="${esc(s.name)}" loading="lazy"></a>`
        : `<i class="bd-noskill" title="${id === null ? "Free slot" : "Empty slot"}">${id === null ? "" : "?"}</i>`;
    }).join("")}</div>
    <div class="gd-info">
      ${attrs ? `<div class="bd-attrs">${attrs}</div>` : ""}
      ${b.note ? `<p class="bd-note">${text(b.note)}</p>` : ""}
      ${b.code ? `<div class="bd-actions"><a href="builder.html#${new URLSearchParams({ code: b.code })}">Builder →</a><button class="link" data-copy="${esc(b.code)}">Copy code</button></div>` : ""}
    </div>
  </div>`;
}

/* ---------- one guide ---------- */
function blockHTML(x) {
  if (x.h) return `<h3>${esc(x.h)}</h3>`;
  if (x.p) return `<p>${text(x.p)}</p>`;
  if (x.ul) return `<ul>${x.ul.map(t => `<li>${text(t)}</li>`).join("")}</ul>`;
  if (x.ol) return `<ol>${x.ol.map(t => `<li>${text(t)}</li>`).join("")}</ol>`;
  if (x.img) return `<figure class="gd-fig${x.img.side ? " side" : ""}"><a href="${esc(x.img.src)}" target="_blank"><img src="${esc(x.img.src)}" alt="" loading="lazy"></a>
    <figcaption>${text(x.img.caption)}</figcaption></figure>`;
  if (x.builds) return `<div class="gd-builds">${x.builds.map(buildHTML).join("")}</div>`;
  if (x.table) return `<div class="gd-table"><table><thead><tr>${x.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${x.table.rows.map(r => `<tr>${r.map(c => `<td>${text(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    ${(x.table.notes || []).length ? `<ul class="gd-notes">${x.table.notes.map(n => `<li>${text(n)}</li>`).join("")}</ul>` : ""}`;
  if (x.qa) return `<dl class="gd-qa">${x.qa.map(([q, a]) => `<dt>${text(q)}</dt><dd>${text(a)}</dd>`).join("")}</dl>`;
  return "";
}

const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
function guidePageHTML(g) {
  const titled = g.sections.filter(s => s.title);
  return `<p class="back"><a href="#">← All guides</a></p>
    <div class="sp-head" style="--pc:var(--accent)">
      <div class="sp-title"><h2>${esc(g.name)}</h2><div class="sp-sub">${g.mission ? `${text(`{mission:${g.mission}}`)} · ` : ""}By ${esc(g.source.author)}</div></div>
      <div class="lstats">${g.stats.map(([k, v]) => `<span class="lstat"><small>${esc(k)}</small><b>${esc(v)}</b></span>`).join("")}</div>
    </div>
    <nav class="gd-toc">${titled.map(s => `<a href="#" data-to="gd-${slug(s.title)}">${esc(s.title)}</a>`).join("")}</nav>
    <article class="gd">${g.sections.map(s => `<section${s.title ? ` id="gd-${slug(s.title)}"` : ""}>
      ${s.title ? `<h2>${esc(s.title)}</h2>` : ""}${s.blocks.map(blockHTML).join("")}</section>`).join("")}
    </article>
    <p class="gd-src">See the full guide and more at <a href="${esc(g.source.href)}" target="_blank" rel="noopener">the Guild Wars Wiki</a> (<a href="${esc(g.source.archive)}" target="_blank" rel="noopener">archived copy</a>).</p>`;
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
