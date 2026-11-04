"use strict";

const ALL = Object.values(MISSIONS);
const KINDS = { story: "Mission", challenge: "Challenge", competitive: "Competitive", elite: "Elite mission", pvp: "PvP" };
const KIND_ORDER = Object.keys(KINDS);
// a faint tint per region, so neighbouring regions (Istan, Kourna, Vabbi…) are easy to tell apart
const REGION_TINT = ["#e0563f", "#d8b25a", "#6fb4e6", "#7cbf8a", "#a874d8", "#d466a4", "#47c1bf", "#e3a33a"];
const place = m => LOCATIONS[m.id];
const outpost = m => LOCATIONS[m.outpost];
const party = m => outpost(m)?.party || place(m)?.party || 0;
const regionId = m => (outpost(m) || place(m))?.region;
const REGION_IDS = [...new Set(ALL.filter(m => m.kind !== "pvp").sort((a, b) => (a.order ?? 999) - (b.order ?? 999)).map(regionId))];
const regionTint = r => (r != null ? REGION_TINT[REGION_IDS.indexOf(r) % REGION_TINT.length] : "transparent");
const camp = m => missionCampaign(m) ?? 0;
// the elites to capture in a mission: [boss, skill]
const elites = m => (m.bosses || []).map(b => CREATURES[b.creature]).filter(Boolean).flatMap(c => (c.elites || []).filter(e => SKILLS[e]?.elite).map(e => [c, SKILLS[e]]));
// the missions done in normal and hard mode are kept (User): not PvP ones, nor the competitive ones
const tracked = m => ["story", "challenge", "elite"].includes(m.kind);
const crName = x => CREATURES[x.creature]?.name || "";

for (const m of ALL) {
  m._name = fold(`${m.name} ${aliasText("locations", m.id)} ${aliasText("locations", m.outpost)}`);
  m._who = fold([...(m.bosses || []).map(b => `${crName(b)} ${(CREATURES[b.creature]?.elites || []).map(e => SKILLS[e]?.name).join(" ")}`),
    ...(m.foes || []).map(f => `${crName(f)} ${CREATURES[f.creature]?.group || ""}`), ...(m.allies || []).map(crName)].join(" | "));
}

const els = { name: $("f-name"), who: $("f-who"), camp: $("f-camp"), type: $("f-type"), region: $("f-region"), party: $("f-party"),
  elite: $("f-elite"), cap: $("f-cap"), done: $("f-done"), pvp: $("f-pvp"), list: $("list"), head: $("head"), count: $("count"), empty: $("empty") };
const state = { camps: new Set(), sort: "", desc: false };

/* ---------- filters ---------- */
els.camp.innerHTML = [1, 2, 3, 4].map(c => `<button class="prof-chip" data-v="${c}" aria-pressed="false" style="--c:var(${CAMP_COLOR[c]})">${CAMPAIGNS[c]}</button>`).join("");
chipToggle(els.camp, state.camps, update);
els.type.innerHTML += KIND_ORDER.filter(k => ALL.some(m => m.kind === k)).map(k => `<option value="${k}">${KINDS[k]}</option>`).join("");
els.region.innerHTML += REGION_IDS.filter(r => r != null).map(r => [r, REGIONS[r].name]).sort((a, b) => cmpStr(a[1], b[1]))
  .map(([r, n]) => `<option value="${r}">${esc(n)}</option>`).join("");
els.party.innerHTML += [...new Set(ALL.map(party).filter(Boolean))].sort((a, b) => a - b).map(n => `<option>${n}</option>`).join("");
els.elite.innerHTML += PROFS.slice(1).map((p, i) => `<option value="${i + 1}">${p} elites</option>`).join("");
for (const el of [els.name, els.who]) el.addEventListener("input", update);
for (const el of [els.type, els.region, els.party, els.elite, els.cap, els.done, els.pvp]) el.addEventListener("change", update);
$("reset").addEventListener("click", () => {
  els.name.value = els.who.value = els.type.value = els.region.value = els.party.value = els.elite.value = els.done.value = "";
  els.pvp.checked = els.cap.checked = false; state.camps.clear(); syncChips(els.camp, state.camps); update(); els.name.focus();
});
els.head.addEventListener("click", e => {
  const b = e.target.closest("button[data-sort]");
  if (!b) return;
  if (state.sort === b.dataset.sort) state.desc = !state.desc; else { state.sort = b.dataset.sort; state.desc = false; }
  update();
});
searchKeys(els.name, update);
searchKeys(els.who, update);

const matches = (m, f) => (m.kind !== "pvp" || f.pvp || f.type === "pvp") && f.name.every(t => m._name.includes(t)) && f.who.every(t => m._who.includes(t))
  && (!state.camps.size || state.camps.has(String(camp(m)))) && (!f.type || m.kind === f.type) && (!f.region || regionId(m) === +f.region)
  && (!f.party || party(m) === +f.party) && (!f.elite || elites(m).some(([, s]) => s.profession === +f.elite))
  && (!f.done || tracked(m) && missing(f.prog[m.id], f.done)) && (!f.cap || elites(m).some(([, s]) => !f.got.has(s.id) && (!f.elite || s.profession === +f.elite)));
const campIdx = m => (m.kind === "pvp" ? 99 : camp(m));
const storyIdx = m => m.order ?? 100 + KIND_ORDER.indexOf(m.kind);
const story = (a, b) => campIdx(a) - campIdx(b) || storyIdx(a) - storyIdx(b) || cmpStr(a.name, b.name);
const SORTS = {
  story, campaign: story, name: (a, b) => cmpStr(a.name, b.name),
  region: (a, b) => cmpStr(REGIONS[regionId(a)]?.name, REGIONS[regionId(b)]?.name) || story(a, b),
  type: (a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind) || story(a, b),
  party: (a, b) => party(a) - party(b) || story(a, b),
};

/* ---------- the list ---------- */
const heroTag = m => (m.hero || []).map(i => HEROES[i]).filter(Boolean).map(h =>
  `<a class="m-hero" href="${HREF.hero(h.id)}" title="Required hero"><img src="${profImg(h.profession)}" alt=""> ${esc(h.name)}</a>`).join("");
function eliteChips(m, f) {
  const seen = new Set();
  return elites(m).filter(([, s]) => (!f.elite || s.profession === +f.elite) && (!f.cap || !f.got.has(s.id)) && !seen.has(s.id) && seen.add(s.id)).map(([c, s]) => {
    return `<a class="echip${f.got.has(s.id) ? " got" : ""}" href="${HREF.skill(s.id)}" style="--pc:${profVar(s.profession)}" title="${esc(c.name)}">${skillIcon(s.id, "sk-ic sm")}${highlight(s.name, f.who)}</a>`;
  }).join("");
}
function rowHTML(m, f) {
  const r = regionId(m);
  return `<div class="row mrow" data-id="${m.id}" style="--pc:var(${CAMP_COLOR[camp(m)]});--rt:${regionTint(r)}">
    <div class="num dim">${m.label ?? ""}</div>
    <div class="name"><a class="mname" href="${HREF.mission(m.id)}">${highlight(m.name, f.name)}</a>${heroTag(m)}</div>
    <div class="dim">${m.kind === "pvp" ? "PvP" : CAMP_SHORT[camp(m)]}</div>
    <div class="cell dim col-region">${esc(REGIONS[r]?.name || "")}</div>
    <div class="cell dim col-type">${m.kind === "story" ? "" : KINDS[m.kind]}</div>
    <div class="num col-party">${party(m) || ""}</div>
    <div class="echips">${eliteChips(m, f)}</div>
    <div class="col-tick">${tracked(m) ? doneTicks("missions", m.id, f.prog[m.id] || 0) : ""}</div>
  </div>`;
}
function update() {
  const f = { name: terms(els.name), who: terms(els.who), type: els.type.value, region: els.region.value, party: els.party.value, elite: els.elite.value, pvp: els.pvp.checked,
    cap: els.cap.checked, done: els.done.value, got: new Set(User.char().elites), prog: User.char().missions };
  const first = f.name[0];
  const cmp = SORTS[state.sort] || (first ? (a, b) => (!fold(a.name).startsWith(first)) - (!fold(b.name).startsWith(first)) || story(a, b) : story);
  const visible = ALL.filter(m => matches(m, f)).sort(cmp);
  if (state.desc) visible.reverse();
  els.count.textContent = `${visible.length} / ${ALL.filter(m => f.pvp || m.kind !== "pvp").length}`;
  els.empty.hidden = visible.length > 0;
  els.list.innerHTML = visible.map(m => rowHTML(m, f)).join("");
  for (const b of els.head.querySelectorAll("button[data-sort]")) {
    b.classList.toggle("sorted", b.dataset.sort === state.sort);
    b.classList.toggle("desc", b.dataset.sort === state.sort && state.desc);
  }
  const p = new URLSearchParams();
  for (const [k, v] of [["q", els.name.value], ["w", els.who.value], ["c", [...state.camps].join(",")], ["ty", f.type], ["r", f.region], ["n", f.party],
    ["e", f.elite], ["cap", f.cap ? "1" : ""], ["d", f.done], ["pvp", f.pvp ? "1" : ""], ["sort", state.sort && (state.desc ? "-" : "") + state.sort]]) if (v) p.set(k, v);
  history.replaceState(null, "", p.size ? "?" + p : location.pathname);
}
// a click anywhere on a row opens the mission, except on the row's own links
els.list.addEventListener("click", e => {
  const row = e.target.closest(".row");
  if (row && !e.target.closest("a")) location.href = HREF.mission(row.dataset.id);
});

// the list, as the address says
function render() {
  const p = args();
  els.name.value = p.get("q") || ""; els.who.value = p.get("w") || "";
  state.camps.clear(); for (const v of (p.get("c") || "").split(",").filter(Boolean)) state.camps.add(v);
  syncChips(els.camp, state.camps);
  els.type.value = p.get("ty") || ""; els.region.value = p.get("r") || ""; els.party.value = p.get("n") || ""; els.elite.value = p.get("e") || "";
  els.cap.checked = p.get("cap") === "1"; els.done.value = p.get("d") || "";
  els.pvp.checked = p.get("pvp") === "1";
  state.sort = (p.get("sort") || "").replace(/^-/, ""); state.desc = (p.get("sort") || "").startsWith("-");
  update();
}
render();
stickHeadBelowFilters();
onRoute(render);
addEventListener("userchange", render);
