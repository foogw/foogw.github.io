"use strict";

// every area in the game, each with a page on the front page (area.js)
const ALL_AREAS = Object.values(AREAS);
const els = { name: $("f-name"), vq: $("f-vq"), index: $("index"), empty: $("empty"), count: $("count") };
const TABS = [1, 2, 3, 4, 0, 5, 6];  // campaigns: the four, Core, the Bonus Mission Pack, and the game's unknown one
// the campaign tab picked: a campaign's number, or "all"; or several campaigns from a link (c=1,2,3: the three
// campaigns' areas, from My Characters), their tabs all pressed
const inCamps = c => (Array.isArray(state.camp) ? state.camp.includes(c) : c === state.camp);
const inCamp = l => state.camp === "all" || inCamps(campaignOf(l));
// the type filters (ours), each one or more of the game's area types (the Type column still shows the area's own):
// [key, label, types], in this order; a single type's key is its number
const one = t => [String(t), TYPE_LABEL[t], [t]];
const GROUPS = [
  ["outposts", "Outpost", [13, 10, 5, 19, 6]],  // cities, outposts, mission outposts, marketplaces, cooperative missions
  one(2),
  ["missionareas", "Mission area", [14, 17]],  // where a mission is played, away from its outpost
  one(9), one(8),
  ["pvp", "PvP", [1, 0, 3, 7, 11, 12, 15, 16]],  // every PvP type
  // last, the types whose areas are all shown only with Show all
  one(4), one(18), one(21), one(20),
];
const KINDS = [["all", "All", () => true],
  ...GROUPS.filter(([, , ts]) => ALL_AREAS.some(l => ts.includes(l.type))).map(([k, label, ts]) => [k, label, l => ts.includes(l.type)])];
const state = { camp: "all", kind: "all", sort: "", desc: false, all: false, vq: "" };
// the areas shown only with Show all (our list, data/areas.js): cities' festival copies, guild halls, cinematics
const HIDDEN = new Set(Object.values(data("GW_AREA_LISTS")?.hidden || {}).flat());
const listed = l => state.all || !HIDDEN.has(l.id);
// regions in the order each story visits them
const REGION_ORDER = [7, 2, 101, 0, 1, 5, 3, 6, 11, 8, 9, 10, 15, 12, 13, 14, 16, 100, 19, 20, 17, 18, 21, 4, 25, 24, 22, 23, 26, 27, 28];
const regionIdx = r => REGION_ORDER.indexOf(r) + 1 || 99;
// the vanquish filter: "v" the areas that can be vanquished, "n" those not yet vanquished by the character picked on My Characters
let vanqSet = new Set();
// (a pre-Searing character: "n" as "v", and not offered)
const vqOk = l => !state.vq || (l.foes && (state.vq === "v" || prePicked() || !vanqSet.has(l.id)));
const shown = l => listed(l) && KINDS.find(k => k[0] === state.kind)[2](l) && vqOk(l);
for (const l of ALL_AREAS) l._k = fold([l.name, regionOf(l)?.name, TYPE_LABEL[l.type], aliasText("areas", l.id), aliasText("regions", l.region)].join(" "));

/* ---------- index ---------- */
// the columns, every one always shown: [key, label, sort value, cell]
const storyKey = l => {
  const camps = state.camp === "all" ? TABS : [...[state.camp].flat(), ...TABS.filter(c => !inCamps(c))];
  return [(camps.indexOf(campaignOf(l)) + 1 || 99), regionIdx(l.region), l.order ?? 999];
};
const COLS = [
  ["name", "Name", l => fold(l.name), (l, ts) => `<a href="${HREF.area(l.id)}">${highlight(l.name, ts)}</a>`],
  ["type", "Type", l => TYPE_LABEL[l.type] || "", l => `<span class="dim">${esc(TYPE_LABEL[l.type] || "")}</span>`],
  ["region", "Region", null, l => `${esc(regionOf(l)?.name || "")}${campaignOf(l) != null && campaignOf(l) !== state.camp ? ` <span class="dim">· ${campaignName(campaignOf(l))}</span>` : ""}`],
  ["party", "Party", l => partyOf(l) ?? Infinity, l => partyOf(l) ?? ""],
  ["vq", "Vanquished", null, l => (l.foes ? vanqTick(l.id, vanqSet.has(l.id)) : "")],
];
const NUM = new Set(["party"]);
// a mission area's party is its outpost's (the game gives the area none: you arrive as a party)
const partyOf = l => l.party ?? AREAS[MISSIONS[l.id]?.outpost]?.party;
// a search looks through every campaign, the current one first; by default areas come in story order, region by region
function renderIndex(ts) {
  vanqSet = new Set(User.char().vanquished);
  els.vq.querySelector('option[value="n"]').disabled = prePicked();
  const all = ALL_AREAS.filter(l => shown(l) && (ts.length || inCamp(l)));
  const hits = all.filter(l => ts.every(w => l._k.includes(w)));
  els.count.textContent = `${hits.length} / ${all.length}`;
  els.empty.hidden = hits.length > 0;
  const story = (a, b) => { const x = storyKey(a), y = storyKey(b); return x[0] - y[0] || x[1] - y[1] || x[2] - y[2] || cmpStr(a.name, b.name); };
  const key = COLS.find(c => c[0] === state.sort)?.[2];
  const cmp = key ? (a, b) => { const x = key(a), y = key(b); return (typeof x === "number" ? x - y : x.localeCompare(y)) || story(a, b); } : story;
  const rows = hits.sort(cmp);
  if (state.desc) rows.reverse();
  // the Vanquished column's title: Check all and Uncheck all, for the areas shown
  els.index.innerHTML = !rows.length ? "" : `<table class="dgtable loctable"><thead><tr>${COLS.map(([k, label]) => k === "vq"
    ? `<th class="c-vq bulk" tabindex="0" title="For the character picked on My Characters">${label}${bulkMenu("#index tbody")}</th>`
    : `<th class="c-${k}${NUM.has(k) ? " num" : ""}"><button type="button" data-sort="${k}" class="${k === (state.sort || "region") ? `sorted${state.desc ? " desc" : ""}` : ""}">${label}</button></th>`).join("")}</tr></thead>
    <tbody>${rows.map(l => `<tr class="${areaGroup(l)}">${COLS.map(([k, , , cell]) => `<td class="c-${k}${NUM.has(k) ? " num" : ""}">${cell(l, ts)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}
const sortArg = () => (state.desc ? "-" : "") + (state.sort || (state.desc ? "region" : ""));
// a column's head sorts by it (again: the other way); Region is the story order
els.index.addEventListener("click", e => {
  const b = e.target.closest("button[data-sort]");
  if (!b) return;
  const k = b.dataset.sort === "region" ? "" : b.dataset.sort;
  const desc = (state.sort || "region") === b.dataset.sort ? !state.desc : false;
  address(state.camp, state.kind, (desc ? "-" : "") + (k || (desc ? "region" : "")));
});

/* ---------- state ---------- */
function update() {
  // a campaign with no area left to show (the game's unknown one, without Show all) is left out
  for (const b of $("camps").children) {
    b.setAttribute("aria-pressed", b.dataset.v === "all" ? state.camp === "all" : state.camp !== "all" && inCamps(+b.dataset.v));
    b.hidden = b.dataset.v !== "all" && !ALL_AREAS.some(l => listed(l) && campaignOf(l) === +b.dataset.v);
  }
  // a type the campaign has none of is greyed out; one no campaign has (all its areas need Show all) is left out
  $("f-all").checked = state.all;
  for (const b of $("kinds").children) {
    const is = KINDS.find(k => k[0] === b.dataset.k)[2], here = ALL_AREAS.filter(l => listed(l) && is(l));
    b.setAttribute("aria-pressed", b.dataset.k === state.kind);
    b.hidden = !here.length;
    b.disabled = !here.some(inCamp);
  }
  renderIndex(terms(els.name));
}
function readArgs() {
  const h = args();
  const cs = (h.get("c") || "").split(",").filter(Boolean).map(Number).filter(c => TABS.includes(c));
  state.camp = cs.length > 1 ? cs : cs.length ? cs[0] : "all";
  state.kind = KINDS.some(k => k[0] === h.get("k")) ? h.get("k") : "all";
  state.all = h.get("all") === "1";
  state.vq = ["v", "n"].includes(h.get("v")) ? h.get("v") : "";
  els.vq.value = state.vq;
  // a campaign or a type with no area left to show (without Show all) falls back to the first, or to All
  if (!ALL_AREAS.some(l => listed(l) && inCamp(l))) state.camp = "all";
  const is = KINDS.find(k => k[0] === state.kind)[2];
  if (!ALL_AREAS.some(l => listed(l) && is(l))) state.kind = "all";
  const so = h.get("sort") || "";
  state.desc = so.startsWith("-"); state.sort = so.replace(/^-/, "").replace(/^region$/, "");
  update();
}

$("camps").innerHTML = `<button class="prof-chip" data-v="all">All</button>` + TABS.map(c => `<button class="prof-chip" data-v="${c}">${campaignName(c)}</button>`).join("");
$("kinds").innerHTML = KINDS.map(([k, label]) => `<button class="prof-chip" data-k="${k}">${label}</button>`).join("");
// the campaign and the kind, in the address (each kept when the other changes)
const address = (c, k, sort = "", all = state.all, vq = state.vq) => go(query(Object.fromEntries([["c", c === "all" ? "" : [c].flat().join(",")], ["k", k === "all" ? "" : k], ["v", vq], ["sort", sort], ["all", all ? "1" : ""]].filter(x => x[1]))));
els.vq.addEventListener("change", () => address(state.camp, state.kind, sortArg(), state.all, els.vq.value));
// a tick (here or in another tab) takes an area out of "not yet vanquished"
addEventListener("userchange", () => renderIndex(terms(els.name)));
$("f-all").addEventListener("change", e => address(state.camp, state.kind, sortArg(), e.target.checked));
$("camps").addEventListener("click", e => {
  const b = e.target.closest("[data-v]");
  if (b) address(b.dataset.v, state.kind, sortArg());
});
$("kinds").addEventListener("click", e => {
  const b = e.target.closest("[data-k]");
  if (b) address(state.camp, b.dataset.k, sortArg());
});
els.name.addEventListener("input", update);
els.name.addEventListener("keydown", e => {
  const first = e.key === "Enter" && els.index.querySelector("tbody a");
  if (first) location.href = first.href;
});
searchKeys(els.name, update);
onRoute(readArgs);
readArgs();
