"use strict";

const ALL = Object.values(HEROES);
// the diagram's groups and boxes go by campaign names
const campNames = h => h.campaigns.map(c => CAMPAIGNS[c]);

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
const groupKey = h => campNames(h).join("+");
const groupTitle = key => (key.includes("+") ? key.split("+").join(" + ") : `${key} only`);

const profName = h => (h.profession ? PROFS[h.profession] : "Any");
const chip = h => `<a class="hchip" href="${HREF.hero(h.id)}" style="--pc:${profVar(h.profession)}" title="${profName(h)}">
  <img src="img/prof/${profName(h)}.png" alt="">${esc(h.name)}</a>`;

// either/or heroes ("Margrid or Master of Whispers") stay together
function units(list) {
  const done = new Set(), out = [];
  for (const h of list) {
    if (done.has(h.id)) continue;
    const alt = list.filter(x => (h.alternative_to || []).includes(x.id));
    [h, ...alt].forEach(x => done.add(x.id));
    out.push(alt.length ? `<span class="halt">${[h, ...alt].map(chip).join('<i>or</i>')}</span>` : chip(h));
  }
  return out.join("");
}

function renderVenn() {
  const boxes = BOXES.map(b => `<div class="vbox lbl-${b.label}" style="grid-area:${b.area};--c:var(${CAMP_COLOR[CAMPAIGNS.indexOf(b.camp)]})"><span>${esc(b.camp)}</span></div>`);
  const groups = GROUPS.map(g => {
    const list = ALL.filter(h => groupKey(h) === g.key);
    if (!list.length) return "";
    return `<div class="vgroup${g.cls ? ` ${g.cls}` : ""}" style="grid-area:${g.area}">
      <h4>${esc(groupTitle(g.key))}</h4><div class="vchips">${units(list)}</div></div>`;
  });
  $("venn").innerHTML = boxes.join("") + groups.join("");
}

/* ---------- list ---------- */

function recruitHTML(h) {
  // link each recruiting step: the quest's or mission's page
  let t = esc(h.recruit);
  for (const st of h.recruit_steps || []) {
    const name = st.quest ? QUESTS[st.quest]?.name : locName(st.mission);
    if (name) t = t.replace(esc(name), st.quest ? LINK.quest(st.quest) : whereLink(st.mission));
  }
  return t;
}

const SHORT = { Prophecies: "Proph", Factions: "Factions", Nightfall: "NF", "Eye of the North": "EotN" };
const campsHTML = h => (h.campaigns.length === 3 && !h.campaigns.includes(4) ? "All 3"
  : h.campaigns.map(c => `<span style="color:var(${CAMP_COLOR[c]})">${SHORT[CAMPAIGNS[c]]}</span>`).join(" + "));

// the builds suggested for each hero (the "heroes" of each build on the Builds page)
const SUGGESTED = new Map();
for (const b of BUILDS.values()) {
  for (const id of b.heroes || []) (SUGGESTED.get(id) || SUGGESTED.set(id, []).get(id)).push(b);
}
// the whole bar opens in the builder; the code can also be copied straight away
function barIcons(code) {
  let skills = [];
  try { skills = TemplateCode.decode(code).skills; } catch { /* an unreadable code shows no icons */ }
  return skills.map(id => (id ? `<img src="img/skills/${id}.jpg" alt="" loading="lazy">` : '<i class="hb-none">?</i>')).join("");
}
const COPY_ICON = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
const suggestedHTML = h => (SUGGESTED.get(h.id) || []).map(b =>
  `<div class="hbuild">
    <a class="hb-bar" href="${esc(builderHref(b))}" title="Open ${esc(b.name)} in the builder">${barIcons(b.code)}</a>
    <button class="hb-copy" data-copy="${esc(b.code)}" title="Copy the template code" aria-label="Copy the template code">${COPY_ICON}</button>
  </div>`).join("");

function renderList() {
  const order = ["Eye of the North", "Prophecies+Eye of the North", "Prophecies", "Prophecies+Nightfall", "Nightfall",
    "Factions+Nightfall", "Factions", "Prophecies+Factions+Nightfall"];
  const rows = [...ALL].sort((a, b) => order.indexOf(groupKey(a)) - order.indexOf(groupKey(b)));
  let html = `<div class="hrow hhead"><span>Campaigns</span><span>Hero</span><span>Suggested build</span><span>How to recruit</span></div>`, group;
  for (const h of rows) {
    const first = groupKey(h) !== group;
    group = groupKey(h);
    html += `<div class="hrow${first ? " first" : ""}" style="--pc:${profVar(h.profession)}">
      <div class="hcamp" title="${esc(groupTitle(group))}">${campsHTML(h)}</div>
      <div class="hname"><img src="img/prof/${profName(h)}.png" alt="" title="${h.profession ? profName(h) : "Any profession"}"><a href="${HREF.hero(h.id)}"><b>${esc(h.name)}</b></a></div>
      <div class="hbuilds">${suggestedHTML(h)}</div>
      <div>${recruitHTML(h)}</div>
    </div>`;
  }
  $("list").innerHTML = html;
}

/* ---------- one hero's page ---------- */
function heroPageHTML(h) {
  const alts = (h.alternative_to || []).map(i => HEROES[i]).filter(Boolean);
  const missions = Object.values(MISSIONS).filter(m => (m.hero || []).includes(h.id));
  const builds = SUGGESTED.get(h.id) || [];
  const single = new Set(BUILDDATA?.singles || []);
  return `<p class="back"><a href="#">← All heroes</a></p>
    <div class="sp-head" style="--pc:${profVar(h.profession)}">
      <img class="sp-icon hp-icon" src="img/prof/${profName(h)}.png" alt="">
      <div class="sp-title"><h2>${esc(h.name)}</h2><div class="sp-sub">${h.profession ? profName(h) : "Any profession"} · needs ${esc(listText(campNames(h)))}</div></div>
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>How to recruit</h4><p class="hp-recruit">${recruitHTML(h)}</p>
          ${alts.length ? `<p class="dim">You get either ${esc(h.name)} or ${alts.map(a => LINK.hero(a.id)).join(" or ")}, not both.</p>` : ""}</section>
        ${builds.length ? `<section class="lbox"><h4>Suggested builds</h4>${builds.map(b => `<div class="hp-build">
          <div class="hp-bname">${single.has(b.id) ? `<a href="builds${hash({ build: b.id })}">${esc(b.name)}</a>` : esc(b.name)}</div>
          <div class="hbuild"><a class="hb-bar" href="${esc(builderHref(b))}" title="Open ${esc(b.name)} in the builder">${barIcons(b.code)}</a>
          <button class="hb-copy" data-copy="${esc(b.code)}" title="Copy the template code" aria-label="Copy the template code">${COPY_ICON}</button></div></div>`).join("")}</section>` : ""}
      </div>
      <div class="lside">
        ${missions.length ? `<section class="lbox"><h4>Required in</h4><ul class="lrows">${missions.map(m =>
          `<li>${LINK.mission(m.id)}<span class="dim">${CAMPAIGNS[missionCampaign(m)] || ""}</span></li>`).join("")}</ul></section>` : ""}
      </div>
    </div>`;
}

// the list, or one hero's page when the address names one ("h" is how older links named a hero)
function render() {
  const p = new URLSearchParams(location.hash.slice(1));
  const h = HEROES[p.get("hero")];
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

