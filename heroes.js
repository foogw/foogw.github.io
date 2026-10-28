"use strict";

const HEROES = window.GW_HEROES;
const CAMP_COLOR = { Prophecies: "--p-paragon", Factions: "--p-ritualist", Nightfall: "--p-elementalist", "Eye of the North": "--p-monk" };

/* ---------- diagram ----------
   A 6 × 3 grid. Each campaign is a box over some cells; a hero group sits in the cells that lie
   inside exactly its campaigns:

     col  1      2        3        4         5        6
     r1   EotN   P+EotN   P        (P+F)     F        F
     r2   EotN   P+EotN   P+NF     P+F+NF    F+NF     F
     r3   EotN   EotN     NF       NF        NF       —

   No hero needs just Prophecies and Factions, so that cell stays empty. */
const BOXES = [
  { camp: "Eye of the North", area: "1 / 1 / 4 / 3", label: "tl" },
  { camp: "Prophecies", area: "1 / 2 / 3 / 5", label: "tc" },
  { camp: "Factions", area: "1 / 4 / 3 / 7", label: "tr" },
  { camp: "Nightfall", area: "2 / 3 / 4 / 6", label: "br" },
];
const GROUPS = [
  { key: "Eye of the North", area: "1 / 1 / 4 / 2" },
  { key: "Prophecies+Eye of the North", area: "1 / 2 / 3 / 3" },
  { key: "Prophecies", area: "1 / 3 / 2 / 4", cls: "below-label" },
  { key: "Prophecies+Nightfall", area: "2 / 3 / 3 / 4" },
  { key: "Prophecies+Factions+Nightfall", area: "2 / 4 / 3 / 5" },
  { key: "Factions+Nightfall", area: "2 / 5 / 3 / 6" },
  { key: "Factions", area: "1 / 5 / 2 / 7", cls: "below-label trim-right" },
  { key: "Nightfall", area: "3 / 3 / 4 / 6" },
];
const groupKey = h => h.campaigns.join("+");
const groupTitle = key => (key.includes("+") ? key.split("+").join(" + ") : `${key} only`);

const profColor = p => (p === "Any" ? "var(--p-none)" : profVar(p));
const chip = h => `<a class="hchip" href="${esc(heroHref(h.name))}" style="--pc:${profColor(h.profession)}" title="${esc(h.profession)}">
  <img src="img/prof/${esc(h.profession)}.png" alt="">${esc(h.name)}</a>`;

// either/or heroes ("Margrid or Master of Whispers") stay together
function units(list) {
  const done = new Set(), out = [];
  for (const h of list) {
    if (done.has(h.name)) continue;
    const alt = list.filter(x => h.alternative_to.includes(x.name));
    [h, ...alt].forEach(x => done.add(x.name));
    out.push(alt.length ? `<span class="halt">${[h, ...alt].map(chip).join('<i>or</i>')}</span>` : chip(h));
  }
  return out.join("");
}

function renderVenn() {
  const boxes = BOXES.map(b => `<div class="vbox lbl-${b.label}" style="grid-area:${b.area};--c:var(${CAMP_COLOR[b.camp]})"><span>${esc(b.camp)}</span></div>`);
  const groups = GROUPS.map(g => {
    const list = HEROES.filter(h => groupKey(h) === g.key);
    if (!list.length) return "";
    return `<div class="vgroup${g.cls ? ` ${g.cls}` : ""}" style="grid-area:${g.area}">
      <h4>${esc(groupTitle(g.key))}</h4><div class="vchips">${units(list)}</div></div>`;
  });
  $("venn").innerHTML = boxes.join("") + groups.join("");
}

/* ---------- list ---------- */

function recruitHTML(h) {
  // link each recruiting step the story flow shows
  let text = esc(h.recruit);
  for (const [step, [camp, id]] of Object.entries(h.links)) {
    const href = `quests.html#${new URLSearchParams({ c: camp, q: id })}`;
    text = text.replace(esc(step), `<a href="${esc(href)}">${esc(step)}</a>`);
  }
  return text;
}

const SHORT = { Prophecies: "Proph", Factions: "Factions", Nightfall: "NF", "Eye of the North": "EotN" };
const campsHTML = h => (h.campaigns.length === 3 && !h.campaigns.includes("Eye of the North") ? "All 3"
  : h.campaigns.map(c => `<span style="color:var(${CAMP_COLOR[c]})">${SHORT[c]}</span>`).join(" + "));

// the builds suggested for each hero (the "heroes" of each build on the Builds page)
const SUGGESTED = new Map();
for (const b of window.GW_BUILDS?.builds || []) {
  for (const name of b.heroes || []) (SUGGESTED.get(name) || SUGGESTED.set(name, []).get(name)).push(b);
}
// the whole bar opens in the builder; the code can also be copied straight away
function barIcons(code) {
  let skills = [];
  try { skills = TemplateCode.decode(code).skills; } catch { /* an unreadable code shows no icons */ }
  return skills.map(id => (id ? `<img src="img/skills/${id}.jpg" alt="" loading="lazy">` : '<i class="hb-none">?</i>')).join("");
}
const COPY_ICON = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
const DONE_ICON = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const suggestedHTML = h => (SUGGESTED.get(h.name) || []).map(b =>
  `<div class="hbuild">
    <a class="hb-bar" href="${esc(builderHref(b))}" title="Open ${esc(b.name)} in the builder">${barIcons(b.code)}</a>
    <button class="hb-copy" data-copy="${esc(b.code)}" title="Copy the template code" aria-label="Copy the template code">${COPY_ICON}</button>
  </div>`).join("");

function renderList() {
  const order = ["Eye of the North", "Prophecies+Eye of the North", "Prophecies", "Prophecies+Nightfall", "Nightfall",
    "Factions+Nightfall", "Factions", "Prophecies+Factions+Nightfall"];
  const rows = [...HEROES].sort((a, b) => order.indexOf(groupKey(a)) - order.indexOf(groupKey(b)));
  let html = `<div class="hrow hhead"><span>Campaigns</span><span>Hero</span><span>Suggested build</span><span>How to recruit</span></div>`, group;
  for (const h of rows) {
    const first = groupKey(h) !== group;
    group = groupKey(h);
    html += `<div class="hrow${first ? " first" : ""}" style="--pc:${profColor(h.profession)}">
      <div class="hcamp" title="${esc(groupTitle(group))}">${campsHTML(h)}</div>
      <div class="hname"><img src="img/prof/${esc(h.profession)}.png" alt="" title="${esc(h.profession === "Any" ? "Any profession" : h.profession)}"><a href="${esc(heroHref(h.name))}"><b>${esc(h.name)}</b></a></div>
      <div class="hbuilds">${suggestedHTML(h)}</div>
      <div>${recruitHTML(h)}</div>
    </div>`;
  }
  $("list").innerHTML = html;
}

/* ---------- one hero's page ---------- */
const HERO = new Map(HEROES.map(h => [h.name, h]));
const MISSIONS = window.GW_MISSIONS || [];
const needsHTML = h => h.campaigns.join(", ").replace(/, ([^,]+)$/, " and $1");

function heroPageHTML(h) {
  const alts = h.alternative_to.map(n => HERO.get(n)).filter(Boolean);
  const missions = MISSIONS.filter(m => (m.hero || "").split(" and ").includes(h.name));
  const builds = SUGGESTED.get(h.name) || [];
  const single = new Set(window.GW_BUILDS?.singles || []);
  return `<p class="back"><a href="#">← All heroes</a></p>
    <div class="sp-head" style="--pc:${profColor(h.profession)}">
      <img class="sp-icon hp-icon" src="img/prof/${esc(h.profession)}.png" alt="">
      <div class="sp-title"><h2>${esc(h.name)}</h2><div class="sp-sub">${esc(h.profession === "Any" ? "Any profession" : h.profession)} · needs ${esc(needsHTML(h))}</div></div>
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>How to recruit</h4><p class="hp-recruit">${recruitHTML(h)}</p>
          ${alts.length ? `<p class="dim">You get either ${esc(h.name)} or ${alts.map(a => `<a href="${esc(heroHref(a.name))}">${esc(a.name)}</a>`).join(" or ")}, not both.</p>` : ""}</section>
        ${builds.length ? `<section class="lbox"><h4>Suggested builds</h4>${builds.map(b => `<div class="hp-build">
          <div class="hp-bname">${single.has(b.id) ? `<a href="builds.html#${new URLSearchParams({ build: b.id })}">${esc(b.name)}</a>` : esc(b.name)}</div>
          <div class="hbuild"><a class="hb-bar" href="${esc(builderHref(b))}" title="Open ${esc(b.name)} in the builder">${barIcons(b.code)}</a>
          <button class="hb-copy" data-copy="${esc(b.code)}" title="Copy the template code" aria-label="Copy the template code">${COPY_ICON}</button></div></div>`).join("")}</section>` : ""}
      </div>
      <div class="lside">
        ${missions.length ? `<section class="lbox"><h4>Required in</h4><ul class="lrows">${missions.map(m =>
          `<li><a href="${esc(missionHref(m.name))}">${esc(m.name)}</a><span class="dim">${esc(m.campaign || "")}</span></li>`).join("")}</ul></section>` : ""}
      </div>
    </div>`;
}

// the list, or one hero's page when the address names one ("h" is how older links named a hero)
function render() {
  const p = new URLSearchParams(location.hash.slice(1));
  const h = HERO.get(p.get("hero") || p.get("h"));
  $("browse").hidden = !!h;
  $("hero").hidden = !h;
  if (h) {
    $("hero").innerHTML = heroPageHTML(h);
    document.title = `${h.name} · GW Heroes`;
    window.scrollTo(0, 0);
  } else document.title = "GW Heroes";
}

renderVenn();
renderList();
render();
window.addEventListener("hashchange", render);

document.addEventListener("click", e => {
  const b = e.target.closest("[data-copy]");
  if (!b) return;
  navigator.clipboard?.writeText(b.dataset.copy).then(() => {
    b.innerHTML = DONE_ICON;
    setTimeout(() => { b.innerHTML = COPY_ICON; }, 1500);
  });
});
