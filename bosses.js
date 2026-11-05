"use strict";

const ALL = [...bossTable().values()];

const els = { name: $("f-name"), prof: $("f-prof"), camp: $("f-camp"), elite: $("f-elite"), cap: $("f-cap"), list: $("list"), count: $("count"), empty: $("empty") };
const state = { profs: new Set() };
els.prof.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(p => `<button class="prof-chip" data-v="${p}" aria-pressed="false" style="--c:${profVar(p)}">${PROFS[p]}</button>`).join("");
chipToggle(els.prof, state.profs, update);
els.camp.innerHTML += [0, 1, 2, 3, 4].filter(c => ALL.some(b => b.camps.has(c))).map(c => `<option value="${c}">${CAMPAIGNS[c]}</option>`).join("");
els.name.addEventListener("input", update);
for (const el of [els.camp, els.elite, els.cap]) el.addEventListener("change", update);
$("reset").addEventListener("click", () => {
  els.name.value = els.camp.value = ""; els.elite.checked = els.cap.checked = false; state.profs.clear(); syncChips(els.prof, state.profs); update(); els.name.focus();
});
searchKeys(els.name, update);

const rowHTML = (b, ts, got) => `<a class="row brow" href="${HREF.boss(b.id)}" style="--pc:${profVar(b.prof)}">
    <div class="name">${highlight(b.name, ts)}</div>
    <div class="prof col-prof">${b.prof ? PROFS[b.prof] : ""}</div>
    <div class="echips">${b._elites.map(s => `<span class="echip${got.has(s.id) ? " got" : ""}" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${highlight(s.name, ts)}</span>`).join("")}</div>
    <div class="cell dim col-where" title="${esc(b._where.map(areaName).join(", "))}">${highlight(b._where.map(areaName).join(", "), ts)}</div>
    <div class="dim col-camp">${[...b.camps].sort().map(c => CAMP_SHORT[c]).join(", ")}</div>
  </a>`;

function update() {
  const ts = terms(els.name), got = new Set(User.char().elites);
  const list = ALL.filter(b => ts.every(t => b._k.includes(t)) && (!state.profs.size || state.profs.has(String(b.prof)))
    && (els.camp.value === "" || b.camps.has(+els.camp.value)) && (!els.elite.checked || b._elites.length) && (!els.cap.checked || b._elites.some(s => !got.has(s.id))))
    .sort((a, b) => (ts[0] ? (!fold(a.name).startsWith(ts[0])) - (!fold(b.name).startsWith(ts[0])) : 0) || (a.prof || 99) - (b.prof || 99) || cmpStr(a.name, b.name));
  els.count.textContent = `${list.length} / ${ALL.length}`;
  els.empty.hidden = list.length > 0;
  els.list.innerHTML = list.map(b => rowHTML(b, ts, got)).join("");
  const p = new URLSearchParams();
  for (const [k, v] of [["q", els.name.value], ["p", [...state.profs].join(",")], ["c", els.camp.value], ["e", els.elite.checked ? "1" : ""], ["cap", els.cap.checked ? "1" : ""]]) if (v) p.set(k, v);
  history.replaceState(null, "", p.size ? "?" + p : location.pathname);
}

// the list, as the address says
function render() {
  const h = args();
  els.name.value = h.get("q") || "";
  state.profs.clear(); for (const v of (h.get("p") || "").split(",").filter(Boolean)) state.profs.add(v);
  syncChips(els.prof, state.profs);
  els.camp.value = h.get("c") || "";
  els.elite.checked = h.get("e") === "1";
  els.cap.checked = h.get("cap") === "1";
  update();
}
render();
stickHeadBelowFilters();
onRoute(render);
addEventListener("userchange", render);
