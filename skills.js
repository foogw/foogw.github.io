"use strict";

const SKILLS = window.GW_SKILLS;
const BY_ID = new Map(SKILLS.map(s => [s.id, s]));
const PVE_OF = new Map(SKILLS.filter(s => s.pvp_version_id).map(s => [s.pvp_version_id, s.id]));

const MISSION_NAMES = new Set((window.GW_MISSIONS || []).map(m => m.name));
const PLACE_NAMES = new Set((window.GW_LOCATIONS || []).filter(p => p.exits).map(p => p.name));
// how Locations names a place: no "(outpost)" or "(Post-Searing)", and an explorable twin is "X (explorable)"
const placeName = where => where.replace(/ \((?:outpost|Post-Searing)\)$/, "").replace(/ \(explorable area\)$/, " (explorable)");
// the teams and single builds whose bars use each skill: {team, build, n}, n being how many heroes in the team
// run that build; a single build is its own one-build "team" linking to its page
const USED_IN = new Map();
const singleTeams = (window.GW_BUILDS?.singles || []).map(id => ({ id, single: true, builds: [id] }));
for (const t of [...(window.GW_BUILDS?.teams || []), ...singleTeams]) {
  const byId = new Map(window.GW_BUILDS.builds.map(b => [b.id, b]));
  const counts = new Map();
  for (const id of t.builds) counts.set(id, (counts.get(id) || 0) + 1);
  for (const [id, n] of counts) {
    const b = byId.get(id);
    let skills = [];
    try { skills = TemplateCode.decode(b.code).skills; } catch { /* an unreadable code lists nothing */ }
    for (const sid of new Set(skills)) if (sid) (USED_IN.get(sid) || USED_IN.set(sid, []).get(sid)).push({ team: t, build: b, n });
  }
}

// the Titles page tab for each title-rank attribute
const TITLE_TAB = { "Sunspear rank": "Sunspear", "Lightbringer rank": "Lightbringer", "Asura rank": "Asura",
  "Deldrimor rank": "Deldrimor", "Ebon Vanguard rank": "Ebon Vanguard", "Norn rank": "Norn",
  "Kurzick rank": "Kurzick / Luxon", "Luxon rank": "Kurzick / Luxon" };
const METHOD_ORDER = ["Signet of Capture", "Skill trainer", "Hero skill trainer", "Quest", "Profession Changer"];

const els = {
  name: $("f-name"), text: $("f-text"), prof: $("f-prof"), attr: $("f-attr"), type: $("f-type"),
  camp: $("f-camp"), elite: $("f-elite"), src: $("f-src"), pvp: $("f-pvp"),
  list: $("list"), head: $("head"), count: $("count"), empty: $("empty"),
};

const state = { profs: new Set(), sort: "default", desc: false, skill: null, listHash: "" };

/* ---------- helpers ---------- */
const FRACTIONS = { 0.25: "¼", 0.5: "½", 0.75: "¾", 1.5: "1½" };
const secs = v => (v ? FRACTIONS[v] ?? String(v) : "");
const isTitle = s => typeof s.attribute === "string" && s.attribute.endsWith("rank");

function richText(s) {
  return esc(s).replace(/&lt;gray&gt;(.*?)&lt;\/gray&gt;/g, '<span class="gray">$1</span>');
}

function costHTML(s) {
  const parts = [];
  if (s.energy) parts.push(`<span class="c-e" title="Energy">${s.energy}</span>`);
  if (s.adrenaline) parts.push(`<span class="c-a" title="Adrenaline (strikes)">${s.adrenaline}</span>`);
  if (s.sacrifice) parts.push(`<span class="c-s" title="Health sacrifice">${s.sacrifice}%</span>`);
  if (s.upkeep) parts.push(`<span class="c-u" title="Upkeep">${s.upkeep}</span>`);
  if (s.overcast) parts.push(`<span class="c-o" title="Overcast / exhaustion">${s.overcast}</span>`);
  return parts.join("");
}
const costValue = s => s.energy || s.adrenaline * 2 || s.sacrifice / 2 || 0;

/* ---------- precompute ---------- */
for (const s of SKILLS) {
  s._name = fold(s.name);
  s._text = fold(s.description + " " + s.concise);
  s._sources = new Set(s.acquisition.map(a => a.m));
  s._title = isTitle(s);
}

/* ---------- filters UI ---------- */
function buildFilterUI() {
  els.prof.innerHTML = PROFS.map(([p, short]) =>
    `<button class="prof-chip" data-prof="${p}" aria-pressed="false" style="--c:${profVar(p)}" title="${p}">${short === "Common" ? "Common" : p}</button>`
  ).join("");
  els.prof.addEventListener("click", e => {
    const b = e.target.closest(".prof-chip");
    if (!b) return;
    const p = b.dataset.prof;
    if (e.metaKey || e.ctrlKey || e.shiftKey) state.profs.has(p) ? state.profs.delete(p) : state.profs.add(p);
    else if (state.profs.size === 1 && state.profs.has(p)) state.profs.clear();
    else { state.profs.clear(); state.profs.add(p); }
    syncProfChips();
    fillAttributes();
    fillTypes();
    update();
  });

  els.camp.innerHTML += CAMPAIGNS.map(c => `<option>${c}</option>`).join("");
  fillAttributes();
  fillTypes();

  for (const el of [els.name, els.text]) el.addEventListener("input", update);
  for (const el of [els.attr, els.type, els.camp, els.elite, els.src, els.pvp]) el.addEventListener("change", update);
  els.attr.addEventListener("change", () => { fillTypes(); update(); });
  $("reset").addEventListener("click", () => { resetFilters(); update(); els.name.focus(); });

  els.head.addEventListener("click", e => {
    const b = e.target.closest("button[data-sort]");
    if (!b) return;
    const k = b.dataset.sort;
    if (state.sort === k) state.desc = !state.desc; else { state.sort = k; state.desc = false; }
    update();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault(); els.name.focus(); els.name.select();
    } else if (e.key === "Escape") {
      if (document.activeElement === els.name && els.name.value) { els.name.value = ""; update(); }
      else if (document.activeElement === els.text && els.text.value) { els.text.value = ""; update(); }
    }
  });
}

function syncProfChips() {
  for (const b of els.prof.children) b.setAttribute("aria-pressed", state.profs.has(b.dataset.prof));
}

function fillAttributes() {
  const cur = els.attr.value;
  const pool = SKILLS.filter(s => !state.profs.size || state.profs.has(s.profession));
  const byProf = new Map();
  for (const s of pool) {
    if (typeof s.attribute !== "string") continue;
    const group = s._title ? "PvE title tracks" : s.profession === "None" ? "Common" : s.profession;
    if (!byProf.has(group)) byProf.set(group, new Set());
    byProf.get(group).add(s.attribute);
  }
  const order = g => g === "PvE title tracks" ? 99 : PROF_ORDER[g === "Common" ? "None" : g] ?? 50;
  els.attr.innerHTML = `<option value="">Any attribute</option>` + [...byProf.entries()]
    .sort((a, b) => order(a[0]) - order(b[0]))
    .map(([g, set]) => `<optgroup label="${esc(g)}">` + [...set].sort((a, b) =>
      (a === "No attribute") - (b === "No attribute") || a.localeCompare(b)).map(a =>
      `<option${a === cur ? " selected" : ""}>${esc(a)}</option>`).join("") + "</optgroup>").join("");
  if (els.attr.value !== cur) els.attr.value = "";
}

/* Only the skill types the chosen professions (and attribute) actually have. */
function fillTypes() {
  const cur = els.type.value;
  const pool = SKILLS.filter(s => (!state.profs.size || state.profs.has(s.profession)) && (!els.attr.value || s.attribute === els.attr.value));
  els.type.innerHTML = typeOptionsHTML(pool);
  els.type.value = cur;
  if (els.type.value !== cur) els.type.value = "";
}

function resetFilters() {
  els.name.value = els.text.value = "";
  for (const el of [els.attr, els.type, els.camp, els.src]) el.value = "";
  els.elite.checked = false;
  els.pvp.checked = false;
  state.profs.clear();
  syncProfChips();
  fillAttributes();
  fillTypes();
}

/* ---------- filtering & sorting ---------- */

function matches(s, f) {
  if (!f.pvp && s.pvp_only) return false;
  if (f.name.length && !f.name.every(t => s._name.includes(t))) return false;
  if (f.text.length && !f.text.every(t => s._text.includes(t))) return false;
  if (state.profs.size && !state.profs.has(s.profession)) return false;
  if (f.attr && s.attribute !== f.attr) return false;
  if (!typeMatches(s, f.type)) return false;
  if (f.camp && s.campaign !== f.camp) return false;
  if (f.elite === "elite" && !s.elite) return false;
  if (f.src === "title" ? !s._title : f.src && !s._sources.has(f.src)) return false;
  return true;
}

const SORTS = {
  name: (a, b) => cmpStr(a.name, b.name),
  profession: (a, b) => PROF_ORDER[a.profession] - PROF_ORDER[b.profession] || cmpStr(a.attribute, b.attribute) || cmpStr(a.name, b.name),
  attribute: (a, b) => cmpStr(a.attribute, b.attribute) || cmpStr(a.name, b.name),
  type: (a, b) => cmpStr(a.type, b.type) || cmpStr(a.name, b.name),
  cost: (a, b) => costValue(a) - costValue(b) || cmpStr(a.name, b.name),
  activation: (a, b) => a.activation - b.activation || cmpStr(a.name, b.name),
  recharge: (a, b) => a.recharge - b.recharge || cmpStr(a.name, b.name),
  campaign: (a, b) => CAMPAIGNS.indexOf(a.campaign) - CAMPAIGNS.indexOf(b.campaign) || cmpStr(a.name, b.name),
};

function sorted(list, f) {
  let cmp = SORTS[state.sort];
  if (!cmp) {
    // default: with a name query, names that start with the query come first
    const first = f.name[0];
    cmp = first
      ? (a, b) => (!fold(a.name).startsWith(first)) - (!fold(b.name).startsWith(first)) || SORTS.profession(a, b)
      : SORTS.profession;
  }
  const out = list.slice().sort(cmp);
  return state.desc ? out.reverse() : out;
}

/* ---------- rendering ---------- */
function rowHTML(s, f) {
  const tags = [
    s.pvp_only ? '<span class="tag">PvP</span>' : "",
    s.touch ? '<span class="tag">Touch</span>' : "",
  ].join("");
  return `<a class="row${s.elite ? " elite" : ""}" href="#${new URLSearchParams({ skill: s.id })}" style="--pc:${profVar(s.profession)}">
    <div class="name" title="${esc(s.name)}">${skillIcon(s.id)}<span class="nm">${highlight(s.name, f.name)}</span>${tags}</div>
    <div class="prof col-prof">${s.profession === "None" ? "Common" : esc(s.profession)}</div>
    <div class="cell dim col-attr">${esc(s.attribute)}</div>
    <div class="cell dim col-type">${esc(s.type || "")}</div>
    <div class="costs">${costHTML(s)}</div>
    <div class="num col-act">${secs(s.activation)}</div>
    <div class="num col-rech">${s.recharge || ""}</div>
    <div class="dim col-camp">${CAMP_SHORT[s.campaign] || ""}</div>
    <div class="desc">${f.text.length ? highlightRich(s.concise, f.text) : richText(s.concise)}</div>
  </a>`;
}

function highlightRich(s, t) {
  const plain = s.replace(/<\/?gray>/g, "");
  return highlight(plain, t);
}

function acquisitionHTML(s) {
  if (!s.acquisition.length) return '<p class="dim">No acquisition data.</p>';
  const groups = new Map();
  for (const a of s.acquisition) {
    const m = a.m || "Other";
    if (!groups.has(m)) groups.set(m, new Map());
    const byCamp = groups.get(m);
    const c = a.c || "";
    if (!byCamp.has(c)) byCamp.set(c, []);
    const who = a.w;
    const where = a.l;
    const place = !where ? "" : MISSION_NAMES.has(where)
      ? `<a href="missions.html#open=${encodeURIComponent(where)}">${esc(where)}</a>`
      : PLACE_NAMES.has(placeName(where)) ? `<a href="locations.html#${new URLSearchParams({ place: placeName(where) })}">${esc(where)}</a>` : esc(where);
    const name = m === "Quest" ? `<a href="skill-quests.html#${new URLSearchParams({ q: who })}">${esc(who)}</a>` : esc(who);
    const line = `${name}${where ? ` <span class="m">— ${place}</span>` : ""}`;
    if (!byCamp.get(c).includes(line)) byCamp.get(c).push(line);
  }
  const rank = m => { const i = METHOD_ORDER.indexOf(m); return i < 0 ? 99 : i; };
  return [...groups.entries()].sort((a, b) => rank(a[0]) - rank(b[0])).map(([m, byCamp]) =>
    `<div class="acq-group"><div>${esc(m)}</div>` + [...byCamp.entries()].map(([c, lines]) =>
      (c ? `<div class="camp">${esc(c)}</div>` : "") + `<ul class="acq">${lines.map(l => `<li>${l}</li>`).join("")}</ul>`
    ).join("") + "</div>").join("");
}

function currentFilters() {
  return {
    name: terms(els.name), text: terms(els.text), attr: els.attr.value, type: els.type.value,
    camp: els.camp.value, elite: els.elite.checked ? "elite" : "", src: els.src.value, pvp: els.pvp.checked,
  };
}

function update() {
  const f = currentFilters();
  const visible = sorted(SKILLS.filter(s => matches(s, f)), f);
  const total = SKILLS.filter(s => f.pvp || !s.pvp_only).length;
  els.count.textContent = `${visible.length} / ${total}`;
  els.empty.hidden = visible.length > 0;
  els.list.innerHTML = visible.map(s => rowHTML(s, f)).join("");
  for (const b of els.head.querySelectorAll("button[data-sort]")) {
    b.classList.toggle("sorted", b.dataset.sort === state.sort);
    b.classList.toggle("desc", b.dataset.sort === state.sort && state.desc);
  }
  writeHash(f);
}

/* ---------- one skill's page ---------- */
const STATS = s => [
  s.energy && ["Energy", s.energy, "c-e"], s.adrenaline && ["Adrenaline", s.adrenaline, "c-a"],
  s.sacrifice && ["Sacrifice", `${s.sacrifice}%`, "c-s"], s.upkeep && ["Upkeep", s.upkeep, "c-u"],
  s.overcast && ["Overcast", s.overcast, "c-o"], s.activation && ["Activation", `${secs(s.activation)}s`],
  s.recharge && ["Recharge", `${s.recharge}s`],
].filter(Boolean);

function skillPageHTML(s) {
  const link = (id, label) => {
    const o = BY_ID.get(id);
    return o ? `<a class="chip" href="#${new URLSearchParams({ skill: id })}" style="border-left:3px solid ${profVar(o.profession)}">${esc(label || o.name)}</a>` : "";
  };
  const versions = [s.pvp_version_id ? link(s.pvp_version_id, "PvP version") : "", PVE_OF.has(s.id) ? link(PVE_OF.get(s.id), "PvE version") : ""].join("");
  const related = s.related_ids.map(id => link(id)).join("");
  const sub = [s.profession === "None" ? "Common" : s.profession, s.attribute, s.type + (s.touch ? " (touch)" : ""), s.campaign]
    .filter(Boolean).map(esc).join(" · ");
  const tags = [s.elite && "Elite", s.pvp_only && "PvP only", s._title && "PvE only"].filter(Boolean)
    .map(t => `<span class="tag">${t}</span>`).join("");
  return `<p class="back"><a href="#${state.listHash}">← All skills</a></p>
    <div class="sp-head${s.elite ? " elite" : ""}" style="--pc:${profVar(s.profession)}">
      <img class="sp-icon" src="img/skills/${s.id}.jpg" alt="" onerror="this.remove()">
      <div class="sp-title"><h2>${esc(s.name)}${tags}</h2><div class="sp-sub">${sub}</div></div>
      <div class="lstats">${STATS(s).map(([k, v, c]) => `<span class="lstat"><small>${k}</small><b class="${c || ""}">${esc(v)}</b></span>`).join("")}</div>
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>Description</h4><p class="sp-desc">${richText(s.description)}</p>
          ${s.concise && s.concise !== s.description ? `<p class="dim sp-concise">${richText(s.concise)}</p>` : ""}</section>
        ${TITLE_TAB[s.attribute] ? `<section class="lbox"><h4>Title</h4><p>Gets stronger with your <a href="titles.html#${new URLSearchParams({ t: TITLE_TAB[s.attribute] })}">${esc(s.attribute.replace(/ rank$/, ""))} title</a> rank.</p></section>` : ""}
        ${USED_IN.has(s.id) ? `<section class="lbox"><h4>Used in builds</h4><ul class="lrows">${USED_IN.get(s.id).map(u =>
          u.team.single ? `<li><a href="builds.html#${new URLSearchParams({ build: u.build.id })}">${esc(u.build.name)}</a><span class="dim">hero build</span></li>`
            : `<li><a href="builds.html#${new URLSearchParams({ team: u.team.id })}">${esc(u.team.name)}</a><span class="dim">${esc(u.build.name)}${u.n > 1 ? ` ×${u.n}` : ""}</span></li>`).join("")}</ul></section>` : ""}
        ${versions || related ? `<section class="lbox">${versions ? `<h4>Versions</h4><div class="chips">${versions}</div>` : ""}${related ? `<h4>Related skills</h4><div class="chips">${related}</div>` : ""}</section>` : ""}
      </div>
      <div class="lside"><section class="lbox"><h4>How to get it</h4>${acquisitionHTML(s)}</section></div>
    </div>
    <p class="llinks"><a href="builder.html#add=${s.id}">Add to builder →</a><span class="dim">Skill ID ${s.id}</span></p>`;
}

// the list, or one skill's page when the address names one
function render() {
  const s = state.skill && BY_ID.get(state.skill);
  $("browse").hidden = !!s;
  $("skill").hidden = !s;
  if (s) {
    $("skill").innerHTML = skillPageHTML(s);
    document.title = `${s.name} · GW Skills`;
    window.scrollTo(0, 0);
  } else {
    document.title = "GW Skills";
    update();
    window.dispatchEvent(new Event("resize"));  // the sticky bars measure the filters, hidden until now
  }
}

/* ---------- URL state ---------- */
function writeHash(f) {
  const p = new URLSearchParams();
  if (els.name.value) p.set("q", els.name.value);
  if (els.text.value) p.set("t", els.text.value);
  if (state.profs.size) p.set("p", [...state.profs].join(","));
  if (f.attr) p.set("a", f.attr);
  if (f.type) p.set("ty", f.type);
  if (f.camp) p.set("c", f.camp);
  if (f.elite) p.set("e", f.elite);
  if (f.src) p.set("s", f.src);
  if (f.pvp) p.set("pvp", "1");
  if (state.sort !== "default") p.set("sort", (state.desc ? "-" : "") + state.sort);
  const h = p.toString();
  state.listHash = h;  // where "All skills" returns to from a skill's page
  history.replaceState(null, "", h ? "#" + h : location.pathname);
}

function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  els.name.value = p.get("q") || "";
  els.text.value = p.get("t") || "";
  state.profs = new Set((p.get("p") || "").split(",").filter(Boolean));
  syncProfChips();
  fillAttributes();
  els.attr.value = p.get("a") || "";
  fillTypes();
  els.type.value = p.get("ty") || "";
  els.camp.value = p.get("c") || "";
  els.elite.checked = p.get("e") === "elite";
  els.src.value = p.get("s") || "";
  els.pvp.checked = p.get("pvp") === "1";
  const sort = p.get("sort") || "default";
  state.desc = sort.startsWith("-");
  state.sort = sort.replace(/^-/, "");
  state.skill = +p.get("skill") || +p.get("open") || null;  // "open" is how older links named a skill
}

buildFilterUI();
readHash();
render();
stickHeadBelowFilters();
window.addEventListener("hashchange", () => { readHash(); render(); });
