"use strict";

const HEROES = window.GW_HEROES;
const CAMP_COLOR = { Prophecies: "--p-paragon", Factions: "--p-ritualist", Nightfall: "--p-elementalist", "Eye of the North": "--p-monk" };

/* ---------- diagram ----------
   A 6 × 3 grid. Each campaign is a box over some cells; a hero group sits in the cells that lie
   inside exactly its campaigns:

     col  1      2        3        4      5        6
     r1   EotN   P+EotN   P        any    F        F
     r2   EotN   P+EotN   P+NF     NF     F+NF     F
     r3   EotN   EotN     NF       NF     NF

   M.O.X. needs any one of Prophecies, Factions or Nightfall, so it sits between those three boxes. */
const BOXES = [
  { camp: "Eye of the North", area: "1 / 1 / 4 / 3", label: "tl" },
  { camp: "Prophecies", area: "1 / 2 / 3 / 4", label: "tr" },
  { camp: "Factions", area: "1 / 5 / 3 / 7", label: "tr" },
  { camp: "Nightfall", area: "2 / 3 / 4 / 6", label: "br" },
];
const GROUPS = [
  { key: "Eye of the North", area: "1 / 1 / 4 / 2" },
  { key: "Prophecies+Eye of the North", area: "1 / 2 / 3 / 3" },
  { key: "Prophecies", area: "1 / 3 / 2 / 4" },
  { key: "Prophecies+Nightfall", area: "2 / 3 / 3 / 4" },
  { key: "any", area: "1 / 4 / 2 / 5" },
  { key: "Factions+Nightfall", area: "2 / 5 / 3 / 6" },
  { key: "Factions", area: "1 / 6 / 3 / 7" },
  { key: "Nightfall", area: "3 / 3 / 4 / 6" },
];
const groupKey = h => (h.any_campaign ? "any" : h.campaigns.join("+"));
const groupTitle = key => (key === "any" ? "Any one of Prophecies, Factions or Nightfall"
  : key.includes("+") ? key.split("+").join(" + ") : `${key} only`);

const profColor = p => (p === "Any" ? "var(--p-none)" : profVar(p));
const chip = h => `<button class="hchip${state.sel === h.name ? " sel" : ""}" data-hero="${esc(h.name)}" style="--pc:${profColor(h.profession)}" title="${esc(h.profession)}">
  <img src="img/prof/${esc(h.profession)}.png" alt="">${esc(h.name)}</button>`;

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
    return `<div class="vgroup${g.key === "any" ? " any" : ""}" style="grid-area:${g.area}">
      <h4>${esc(groupTitle(g.key))}</h4><div class="vchips">${units(list)}</div></div>`;
  });
  $("venn").innerHTML = boxes.join("") + groups.join("");
}

/* ---------- list ---------- */
const state = { sel: null };

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
const campsHTML = h => (h.any_campaign ? "Any"
  : h.campaigns.map(c => `<span style="color:var(${CAMP_COLOR[c]})">${SHORT[c]}</span>`).join(" + "));

function renderList() {
  const order = ["Eye of the North", "Prophecies+Eye of the North", "Prophecies", "Prophecies+Nightfall", "Nightfall",
    "Factions+Nightfall", "Factions", "any"];
  const rows = [...HEROES].sort((a, b) => order.indexOf(groupKey(a)) - order.indexOf(groupKey(b)));
  let html = "", group;
  for (const h of rows) {
    const first = groupKey(h) !== group;
    group = groupKey(h);
    html += `<div class="hrow${first ? " first" : ""}${state.sel === h.name ? " sel" : ""}" id="h-${esc(h.name)}" style="--pc:${profColor(h.profession)}">
      <div class="hcamp" title="${esc(groupTitle(group))}">${campsHTML(h)}</div>
      <div class="hname"><img src="img/prof/${esc(h.profession)}.png" alt=""><b>${esc(h.name)}</b>
        <span class="dim">${esc(h.profession === "Any" ? "Any profession" : h.profession)}</span></div>
      <div class="dim">${esc(h.region || "")}</div>
      <div>${recruitHTML(h)}</div>
    </div>`;
  }
  $("list").innerHTML = html;
}

function select(name, scroll) {
  state.sel = name;
  for (const el of document.querySelectorAll(".hchip, .hrow")) {
    el.classList.toggle("sel", el.dataset.hero === name || el.id === `h-${name}`);
  }
  history.replaceState(null, "", name ? "#" + new URLSearchParams({ h: name }) : location.pathname);
  if (scroll) document.getElementById(`h-${name}`)?.scrollIntoView({ block: "center", behavior: "smooth" });
}

$("venn").addEventListener("click", e => {
  const b = e.target.closest("[data-hero]");
  if (b) select(b.dataset.hero, true);
});

renderVenn();
renderList();
const start = new URLSearchParams(location.hash.slice(1)).get("h");
if (start && HEROES.some(h => h.name === start)) select(start, true);
