"use strict";

// the places with a page: every location but the mission areas (the Missions page has those); each opens on the
// front page (place.js)
const PLACES = Object.values(LOCATIONS).filter(l => l.type !== 14 && l.type !== 17);
const els = { name: $("f-name"), pvp: $("f-pvp"), index: $("index"), empty: $("empty"), count: $("count") };
const TABS = [1, 2, 3, 4, 0];  // campaigns, Core last
const state = { camp: 1 };
// regions in the order each story visits them
const REGION_ORDER = [7, 2, 101, 0, 1, 5, 3, 6, 11, 8, 9, 10, 15, 12, 13, 14, 16, 100, 19, 20, 17, 18, 21, 4];
const regionIdx = r => REGION_ORDER.indexOf(r) + 1 || 99;
const shown = l => els.pvp.checked || !isPvP(l);
for (const l of PLACES) l._k = fold([l.name, regionOf(l)?.name, TYPE_LABEL[l.type], aliasText("locations", l.id), aliasText("regions", l.region)].join(" "));
const kind = l => (isOutpost(l) ? "out" : "exp");

/* ---------- index ---------- */
// a search looks through every campaign, the current one first; within a region, places come in story order
function renderIndex(ts) {
  const all = PLACES.filter(l => shown(l) && (ts.length || campaignOf(l) === state.camp));
  const hits = all.filter(l => ts.every(w => l._k.includes(w)));
  els.count.textContent = `${hits.length} / ${all.length}`;
  els.empty.hidden = hits.length > 0;
  const camps = [state.camp, ...TABS.filter(c => c !== state.camp)];
  const groups = [...new Set(hits.map(l => l.region))].sort((a, b) =>
    camps.indexOf(REGIONS[a]?.campaign) - camps.indexOf(REGIONS[b]?.campaign) || regionIdx(a) - regionIdx(b));
  const chips = ls => (ls.length ? `<div class="lchips">${ls.map(l => `<a class="lchip ${kind(l)}" href="${HREF.place(l.id)}" title="${esc(TYPE_LABEL[l.type])}${l.party ? ` · party ${l.party}` : ""}">${highlight(l.name, ts)}</a>`).join("")}</div>` : "");
  els.index.innerHTML = groups.map(r => {
    const ls = hits.filter(l => l.region === r).sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || cmpStr(a.name, b.name));
    const c = REGIONS[r]?.campaign;
    return `<section class="lregion"><h3>${esc(REGIONS[r]?.name)}${c !== state.camp ? ` <span class="lcamp">· ${CAMPAIGNS[c]}</span>` : ""}</h3>${chips(ls.filter(isOutpost))}${chips(ls.filter(l => !isOutpost(l)))}</section>`;
  }).join("");
}

/* ---------- state ---------- */
function update() {
  for (const b of $("camps").children) b.setAttribute("aria-pressed", +b.dataset.v === state.camp);
  renderIndex(terms(els.name));
}
function readArgs() {
  const h = args();
  if (TABS.includes(+h.get("c")) && h.has("c")) state.camp = +h.get("c");
  update();
}

$("camps").innerHTML = TABS.map(c => `<button class="prof-chip" data-v="${c}">${CAMPAIGNS[c]}</button>`).join("");
$("camps").addEventListener("click", e => {
  const b = e.target.closest("[data-v]");
  if (b) go(query({ c: b.dataset.v }));
});
els.name.addEventListener("input", update);
els.name.addEventListener("keydown", e => {
  const first = e.key === "Enter" && els.index.querySelector(".lchip");
  if (first) location.href = first.href;
});
searchKeys(els.name, update);
els.pvp.addEventListener("change", update);
onRoute(readArgs);
readArgs();
