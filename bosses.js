"use strict";

const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const MISSIONS = window.GW_MISSIONS;
const PLACES = new Map(window.GW_LOCATIONS.map(p => [p.name, p]));
const MISSION_NAMES = new Set(MISSIONS.map(m => m.name));

/* ---------- every boss, gathered from capture sources, places and missions ----------
   { name, profession, campaigns, levels, elites: skill ids, where: place or mission names, missions: [{ m, level }] } */
const BOSS = new Map();
// the wiki tells a boss from a foe of the same name with "(boss)"
const bossOf = raw => { const name = raw.replace(/ \(boss\)$/i, ""); return BOSS.get(name) || BOSS.set(name, {
  name, profession: null, campaigns: new Set(), levels: new Set(), elites: new Set(), where: new Set(), missions: [],
}).get(name); };
// capture lists name a continent where they mean its campaign
const CONTINENT = { Tyria: "Prophecies", Cantha: "Factions", Elona: "Nightfall" };
const MISSION = new Map(MISSIONS.map(m => [m.name, m]));

for (const s of window.GW_SKILLS) {
  for (const a of s.acquisition) {
    if (a.m !== "Signet of Capture" || !a.w || / \(explorable area\)$/.test(a.w)) continue;
    const b = bossOf(a.w);
    b.elites.add(s.id);
    const where = a.l && (MISSION_NAMES.has(a.l) ? a.l : placeName(a.l));
    const camp = (MISSION.get(where) || PLACES.get(where))?.campaign || CONTINENT[a.c] || a.c;
    if (camp) b.campaigns.add(camp);
    if (where) b.where.add(where);
  }
}
for (const p of window.GW_LOCATIONS) {
  for (const [name, id] of p.bosses || []) {
    if (!name) continue;  // a boss with no English name
    const b = bossOf(name);
    if (id != null && SKILL.get(id)?.elite) b.elites.add(id);
    if (p.campaign) b.campaigns.add(p.campaign);
    b.where.add(p.name);
  }
}
for (const m of MISSIONS) {
  for (const x of m.bosses) {
    const b = bossOf(x.name);
    b.profession ||= PROF_BY_SHORT[x.profession] || null;
    if (x.level) b.levels.add(x.level);
    if (x.elite_skill_id != null && SKILL.get(x.elite_skill_id)?.elite) b.elites.add(x.elite_skill_id);
    if (m.campaign) b.campaigns.add(m.campaign);
    if (!b.missions.some(y => y.m === m)) b.missions.push({ m, level: x.level });
    b.where.add(m.name);
  }
}
const BOSSES = [...BOSS.values()];
for (const b of BOSSES) {
  // without a mission to say, a boss is taken to be of its elite's profession
  b.profession ||= [...b.elites].map(id => SKILL.get(id)?.profession).find(p => p && p !== "None") || null;
  b._elites = [...b.elites].map(id => SKILL.get(id)).filter(Boolean).sort((x, y) => cmpStr(x.name, y.name));
  b._where = [...b.where].sort(cmpStr);
  b.campaigns = new Set([...b.campaigns].sort((x, y) => CAMPAIGNS.indexOf(x) - CAMPAIGNS.indexOf(y)));
  b._k = fold([b.name, ...b._elites.map(s => s.name), ...b._where].join(" | "));
}

/* ---------- list ---------- */
const els = { name: $("f-name"), prof: $("f-prof"), camp: $("f-camp"), elite: $("f-elite"),
  list: $("list"), count: $("count"), empty: $("empty") };
const state = { profs: new Set(), boss: null, listHash: "" };

els.prof.innerHTML = PROFS.filter(([p]) => p !== "None").map(([p]) =>
  `<button class="prof-chip" data-prof="${p}" aria-pressed="false" style="--c:${profVar(p)}">${p}</button>`).join("");
els.camp.innerHTML += CAMPAIGNS.filter(c => BOSSES.some(b => b.campaigns.has(c))).map(c => `<option>${esc(c)}</option>`).join("");
els.prof.addEventListener("click", e => {
  const b = e.target.closest(".prof-chip");
  if (!b) return;
  const p = b.dataset.prof;
  if (e.metaKey || e.ctrlKey || e.shiftKey) state.profs.has(p) ? state.profs.delete(p) : state.profs.add(p);
  else if (state.profs.size === 1 && state.profs.has(p)) state.profs.clear();
  else { state.profs.clear(); state.profs.add(p); }
  update();
});
els.name.addEventListener("input", update);
for (const el of [els.camp, els.elite]) el.addEventListener("change", update);
$("reset").addEventListener("click", () => {
  els.name.value = els.camp.value = ""; els.elite.checked = false; state.profs.clear(); update(); els.name.focus();
});
document.addEventListener("keydown", e => {
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); els.name.focus(); els.name.select(); }
  else if (e.key === "Escape" && document.activeElement === els.name && els.name.value) { els.name.value = ""; update(); }
});

function rowHTML(b, ts) {
  return `<a class="row brow" href="#${new URLSearchParams({ boss: b.name })}" style="--pc:${profVar(b.profession)}">
    <div class="name">${highlight(b.name, ts)}</div>
    <div class="prof col-prof">${esc(b.profession || "")}</div>
    <div class="echips">${b._elites.map(s => `<span class="echip" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${highlight(s.name, ts)}</span>`).join("")}</div>
    <div class="cell dim col-where" title="${esc(b._where.join(", "))}">${highlight(b._where.join(", "), ts)}</div>
    <div class="dim col-camp">${[...b.campaigns].map(c => CAMP_SHORT[c] || c).join(", ")}</div>
  </a>`;
}

function update() {
  const ts = terms(els.name);
  const list = BOSSES.filter(b => ts.every(t => b._k.includes(t))
    && (!state.profs.size || state.profs.has(b.profession))
    && (!els.camp.value || b.campaigns.has(els.camp.value))
    && (!els.elite.checked || b._elites.length))
    .sort((a, b) => (ts[0] ? (!fold(a.name).startsWith(ts[0])) - (!fold(b.name).startsWith(ts[0])) : 0)
      || (PROF_ORDER[a.profession] ?? 99) - (PROF_ORDER[b.profession] ?? 99) || cmpStr(a.name, b.name));
  for (const c of els.prof.children) c.setAttribute("aria-pressed", state.profs.has(c.dataset.prof));
  els.count.textContent = `${list.length} / ${BOSSES.length}`;
  els.empty.hidden = list.length > 0;
  els.list.innerHTML = list.map(b => rowHTML(b, ts)).join("");
  const p = new URLSearchParams();
  if (els.name.value) p.set("q", els.name.value);
  if (state.profs.size) p.set("p", [...state.profs].join(","));
  if (els.camp.value) p.set("c", els.camp.value);
  if (els.elite.checked) p.set("e", "1");
  state.listHash = p.toString();  // where "All bosses" returns to from a boss's page
  history.replaceState(null, "", state.listHash ? "#" + state.listHash : location.pathname);
}

/* ---------- one boss's page ---------- */
const whereLink = name => (MISSION_NAMES.has(name) ? `<a href="${esc(missionHref(name))}">${esc(name)}</a>`
  : PLACES.has(name) ? `<a href="locations.html#${new URLSearchParams({ place: name })}">${esc(name)}</a>` : esc(name));
const whereKind = name => (MISSION_NAMES.has(name) ? "Mission" : PLACES.get(name)?.type || "");

function bossPageHTML(b) {
  const sub = [b.profession, [...b.campaigns].join(", ")].filter(Boolean).map(esc).join(" · ");
  const levels = [...b.levels];
  return `<p class="back"><a href="#${state.listHash}">← All bosses</a></p>
    <div class="sp-head" style="--pc:${profVar(b.profession)}">
      ${b.profession ? `<img class="sp-icon hp-icon" src="img/prof/${esc(b.profession)}.png" alt="">` : ""}
      <div class="sp-title"><h2>${esc(b.name)}</h2><div class="sp-sub">${sub}</div></div>
      ${levels.length ? `<div class="lstats"><span class="lstat"><small>Level</small><b>${esc(levels.join(", "))}</b></span></div>` : ""}
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>Elite to capture</h4>${b._elites.length ? b._elites.map(s => `<div class="bp-skill">
          <a class="skill-link elite" href="skills.html#skill=${s.id}" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic")}${esc(s.name)}</a>
          <span class="dim">${esc(s.profession)} · ${esc(s.attribute)}</span>
          <p class="bp-desc">${richText(s.concise || s.description)}</p></div>`).join("") : '<p class="dim">None.</p>'}</section>
      </div>
      <div class="lside">
        <section class="lbox"><h4>Where</h4><ul class="lrows">${b._where.map(w =>
          `<li>${whereLink(w)}<span class="dim">${esc(whereKind(w))}</span></li>`).join("")}</ul></section>
      </div>
    </div>`;
}

// the list, or one boss's page when the address names one
function render() {
  const h = new URLSearchParams(location.hash.slice(1));
  const b = BOSS.get((h.get("boss") || "").replace(/ \(boss\)$/i, ""));
  $("browse").hidden = !!b;
  $("boss").hidden = !b;
  if (b) {
    $("boss").innerHTML = bossPageHTML(b);
    document.title = `${b.name} · GW Bosses`;
    window.scrollTo(0, 0);
  } else {
    els.name.value = h.get("q") || "";
    state.profs = new Set((h.get("p") || "").split(",").filter(Boolean));
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
