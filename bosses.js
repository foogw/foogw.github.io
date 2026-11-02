"use strict";

/* Every boss: a creature a mission or a place names as a boss, or one an elite is captured from, with where it is. */
const BOSS = new Map();
const bossOf = id => BOSS.get(id) || BOSS.set(id, Object.assign(CREATURES[id], { where: new Set(), levels: new Set(), elites: new Set(CREATURES[id].elites || []) })).get(id);
for (const s of Object.values(SKILLS)) for (const a of s.acquisition || []) if (a.capture && CREATURES[a.capture]) {
  const b = bossOf(a.capture);
  if (s.elite) b.elites.add(s.id);
  if (a.location != null) b.where.add(a.location);
}
for (const l of Object.values(LOCATIONS)) for (const id of l.bosses || []) if (CREATURES[id]) bossOf(id).where.add(l.id);
for (const m of Object.values(MISSIONS)) for (const x of m.bosses || []) if (CREATURES[x.creature]) {
  const b = bossOf(x.creature);
  b.where.add(m.id);
  if (x.level) b.levels.add(x.level[1] ? `${x.level[0]} (${x.level[1]})` : String(x.level[0]));
}
const ALL = [...BOSS.values()];
for (const b of ALL) {
  // without a profession of its own, a boss is taken to be of its elite's
  b.prof = b.profession || [...b.elites].map(id => SKILLS[id]?.profession).find(Boolean) || 0;
  b._elites = [...b.elites].map(id => SKILLS[id]).filter(s => s?.elite).sort((x, y) => cmpStr(x.name, y.name));
  b._where = [...b.where].filter(i => LOCATIONS[i] || MISSIONS[i]).sort((x, y) => cmpStr(locName(x), locName(y)));
  b.camps = new Set(b._where.map(i => campaignOf(LOCATIONS[i]) ?? missionCampaign(MISSIONS[i])).filter(c => c != null));
  b._k = fold([b.name, ...b._elites.map(s => s.name), ...b._where.map(locName)].join(" | "));
}

const els = { name: $("f-name"), prof: $("f-prof"), camp: $("f-camp"), elite: $("f-elite"), list: $("list"), count: $("count"), empty: $("empty") };
const state = { profs: new Set(), listHash: "" };
els.prof.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(p => `<button class="prof-chip" data-v="${p}" aria-pressed="false" style="--c:${profVar(p)}">${PROFS[p]}</button>`).join("");
chipToggle(els.prof, state.profs, update);
els.camp.innerHTML += [0, 1, 2, 3, 4].filter(c => ALL.some(b => b.camps.has(c))).map(c => `<option value="${c}">${CAMPAIGNS[c]}</option>`).join("");
els.name.addEventListener("input", update);
for (const el of [els.camp, els.elite]) el.addEventListener("change", update);
$("reset").addEventListener("click", () => {
  els.name.value = els.camp.value = ""; els.elite.checked = false; state.profs.clear(); syncChips(els.prof, state.profs); update(); els.name.focus();
});
searchKeys(els.name, update);

const rowHTML = (b, ts) => `<a class="row brow" href="${HREF.boss(b.id)}" style="--pc:${profVar(b.prof)}">
    <div class="name">${highlight(b.name, ts)}</div>
    <div class="prof col-prof">${b.prof ? PROFS[b.prof] : ""}</div>
    <div class="echips">${b._elites.map(s => `<span class="echip" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${highlight(s.name, ts)}</span>`).join("")}</div>
    <div class="cell dim col-where" title="${esc(b._where.map(locName).join(", "))}">${highlight(b._where.map(locName).join(", "), ts)}</div>
    <div class="dim col-camp">${[...b.camps].sort().map(c => CAMP_SHORT[c]).join(", ")}</div>
  </a>`;

function update() {
  const ts = terms(els.name);
  const list = ALL.filter(b => ts.every(t => b._k.includes(t)) && (!state.profs.size || state.profs.has(String(b.prof)))
    && (els.camp.value === "" || b.camps.has(+els.camp.value)) && (!els.elite.checked || b._elites.length))
    .sort((a, b) => (ts[0] ? (!fold(a.name).startsWith(ts[0])) - (!fold(b.name).startsWith(ts[0])) : 0) || (a.prof || 99) - (b.prof || 99) || cmpStr(a.name, b.name));
  els.count.textContent = `${list.length} / ${ALL.length}`;
  els.empty.hidden = list.length > 0;
  els.list.innerHTML = list.map(b => rowHTML(b, ts)).join("");
  const p = new URLSearchParams();
  for (const [k, v] of [["q", els.name.value], ["p", [...state.profs].join(",")], ["c", els.camp.value], ["e", els.elite.checked ? "1" : ""]]) if (v) p.set(k, v);
  state.listHash = p.toString();  // where "All bosses" returns to from a boss's page
  history.replaceState(null, "", state.listHash ? "#" + state.listHash : location.pathname);
}

/* ---------- one boss's page ---------- */
function bossPageHTML(b) {
  const sub = [b.prof && PROFS[b.prof], [...b.camps].sort().map(c => CAMPAIGNS[c]).join(", ")].filter(Boolean).map(esc).join(" · ");
  return `<p class="back"><a href="#${state.listHash}">← All bosses</a></p>
    <div class="sp-head" style="--pc:${profVar(b.prof)}">
      ${b.prof ? `<img class="sp-icon hp-icon" src="img/prof/${PROFS[b.prof]}.png" alt="">` : ""}
      <div class="sp-title"><h2>${esc(b.name)}</h2><div class="sp-sub">${sub}</div></div>
      ${b.levels.size ? `<div class="lstats"><span class="lstat"><small>Level</small><b>${esc([...b.levels].join(", "))}</b></span></div>` : ""}
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>Elite to capture</h4>${b._elites.length ? b._elites.map(s => `<div class="bp-skill">
          ${LINK.skill(s.id).replace("sk-ic sm", "sk-ic")}<span class="dim">${PROFS[s.profession]} · ${esc(ATTRIBUTES[s.attribute] || "")}</span>
          <p class="bp-desc">${richText(s.concise || s.description)}</p></div>`).join("") : '<p class="dim">None.</p>'}</section>
      </div>
      <div class="lside">
        <section class="lbox"><h4>Where</h4><ul class="lrows">${b._where.map(i =>
          `<li>${whereLink(i)}<span class="dim">${MISSIONS[i] ? "Mission" : esc(TYPE_LABEL[LOCATIONS[i]?.type] || "")}</span></li>`).join("")}</ul></section>
        ${mapHTML(b._where.filter(i => LOCATIONS[i]))}
      </div>
    </div>`;
}

// the list, or one boss's page when the address names one
function render() {
  const h = new URLSearchParams(location.hash.slice(1));
  const b = BOSS.get(+h.get("boss"));
  $("browse").hidden = !!b;
  $("boss").hidden = !b;
  if (b) {
    $("boss").innerHTML = bossPageHTML(b);
    initMaps($("boss"));
    document.title = `${b.name} · GW Bosses`;
    window.scrollTo(0, 0);
  } else {
    els.name.value = h.get("q") || "";
    state.profs.clear(); for (const v of (h.get("p") || "").split(",").filter(Boolean)) state.profs.add(v);
    syncChips(els.prof, state.profs);
    els.camp.value = h.get("c") || "";
    els.elite.checked = h.get("e") === "1";
    document.title = "GW Bosses";
    update();
    window.dispatchEvent(new Event("resize"));  // the sticky bars measure the filters, hidden until now
  }
}
render();
stickHeadBelowFilters();
window.addEventListener("hashchange", render);
