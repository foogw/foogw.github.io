"use strict";

const SKILLS = window.GW_SKILLS;
const BY_ID = new Map(SKILLS.map(s => [s.id, s]));
const PVE_OF = new Map(SKILLS.filter(s => s.pvp_version_id).map(s => [s.pvp_version_id, s.id]));

const MISSION_NAMES = new Set((window.GW_MISSIONS || []).map(m => m.name));
const TYPE_GROUPS = [["~Attack", "All attacks", /Attack/], ["~Spell", "All spells", /Spell|Hex|Enchantment/], ["~Ritual", "All rituals", /Ritual/]];
const METHOD_ORDER = ["Signet of Capture", "Skill trainer", "Hero skill trainer", "Quest", "Profession Changer"];

const els = {
  name: $("f-name"), text: $("f-text"), prof: $("f-prof"), attr: $("f-attr"), type: $("f-type"),
  camp: $("f-camp"), elite: $("f-elite"), src: $("f-src"), pvp: $("f-pvp"),
  list: $("list"), head: $("head"), count: $("count"), empty: $("empty"),
};

const state = { profs: new Set(), sort: "default", desc: false, open: null };

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
    update();
  });

  const types = [...new Set(SKILLS.map(s => s.type).filter(Boolean))].sort();
  els.type.innerHTML += TYPE_GROUPS.map(([v, l, _]) => `<option value="${v}">${l}</option>`).join("")
    + `<option disabled>──────────</option>`
    + types.map(t => `<option>${esc(t)}</option>`).join("");
  els.camp.innerHTML += CAMPAIGNS.map(c => `<option>${c}</option>`).join("");
  fillAttributes();

  for (const el of [els.name, els.text]) el.addEventListener("input", update);
  for (const el of [els.attr, els.type, els.camp, els.elite, els.src, els.pvp]) el.addEventListener("change", update);
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
      else if (state.open) { toggleOpen(state.open); }
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

function resetFilters() {
  els.name.value = els.text.value = "";
  for (const el of [els.attr, els.type, els.camp, els.src]) el.value = "";
  els.elite.checked = false;
  els.pvp.checked = false;
  state.profs.clear();
  syncProfChips();
  fillAttributes();
}

/* ---------- filtering & sorting ---------- */

function matches(s, f) {
  if (!f.pvp && s.pvp_only) return false;
  if (f.name.length && !f.name.every(t => s._name.includes(t))) return false;
  if (f.text.length && !f.text.every(t => s._text.includes(t))) return false;
  if (state.profs.size && !state.profs.has(s.profession)) return false;
  if (f.attr && s.attribute !== f.attr) return false;
  if (f.type) {
    if (f.type.startsWith("~")) { if (!TYPE_GROUPS.find(g => g[0] === f.type)[2].test(s.type || "")) return false; }
    else if (s.type !== f.type) return false;
  }
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
  return `<div class="row${s.elite ? " elite" : ""}${state.open === s.id ? " open" : ""}" data-id="${s.id}" style="--pc:${profVar(s.profession)}">
    <div class="name" title="${esc(s.name)}">${highlight(s.name, f.name)}${tags}</div>
    <div class="prof col-prof">${s.profession === "None" ? "Common" : esc(s.profession)}</div>
    <div class="cell dim col-attr">${esc(s.attribute)}</div>
    <div class="cell dim col-type">${esc(s.type || "")}</div>
    <div class="costs">${costHTML(s)}</div>
    <div class="num col-act">${secs(s.activation)}</div>
    <div class="num col-rech">${s.recharge || ""}</div>
    <div class="dim col-camp">${CAMP_SHORT[s.campaign] || ""}</div>
    <div class="desc">${f.text.length ? highlightRich(s.concise, f.text) : richText(s.concise)}</div>
  </div>${state.open === s.id ? detailHTML(s) : ""}`;
}

function highlightRich(s, t) {
  const plain = s.replace(/<\/?gray>/g, "");
  return highlight(plain, t);
}

function skillChip(id, label) {
  const s = BY_ID.get(id);
  return s ? `<button class="chip" data-goto="${id}" style="border-left:3px solid ${profVar(s.profession)}">${esc(label || s.name)}</button>` : "";
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
    const place = where && MISSION_NAMES.has(where)
      ? `<a href="missions.html#open=${encodeURIComponent(where)}">${esc(where)}</a>` : esc(where);
    const line = `${esc(who)}${where ? ` <span class="m">— ${place}</span>` : ""}`;
    if (!byCamp.get(c).includes(line)) byCamp.get(c).push(line);
  }
  const rank = m => { const i = METHOD_ORDER.indexOf(m); return i < 0 ? 99 : i; };
  return [...groups.entries()].sort((a, b) => rank(a[0]) - rank(b[0])).map(([m, byCamp]) =>
    `<div class="acq-group"><div>${esc(m)}</div>` + [...byCamp.entries()].map(([c, lines]) =>
      (c ? `<div class="camp">${esc(c)}</div>` : "") + `<ul class="acq">${lines.map(l => `<li>${l}</li>`).join("")}</ul>`
    ).join("") + "</div>").join("");
}

function detailHTML(s) {
  const facts = [
    ["Profession", s.profession === "None" ? "Common" : s.profession],
    ["Attribute", s.attribute], ["Type", s.type + (s.touch ? " (touch)" : "")],
    ["Campaign", s.campaign],
    s.activation ? ["Activation", secs(s.activation) + "s"] : null,
    s.aftercast && s.aftercast !== 0.75 ? ["Aftercast", secs(s.aftercast) + "s"] : null,
    s.recharge ? ["Recharge", s.recharge + "s"] : null,
    ["ID", s.id],
  ].filter(Boolean);
  const versions = [
    s.pvp_version_id ? skillChip(s.pvp_version_id, "PvP version") : "",
    PVE_OF.has(s.id) ? skillChip(PVE_OF.get(s.id), "PvE version") : "",
  ].join("");
  const related = s.related_ids.map(id => skillChip(id)).join("");
  return `<div class="detail" style="--pc:${profVar(s.profession)}">
    <div>
      <h4>Description</h4>
      <p class="full">${richText(s.description)}</p>
      <div class="facts">${facts.map(([k, v]) => `<span>${k} <b>${esc(v)}</b></span>`).join("")}</div>
      ${versions ? `<h4>Versions</h4><div class="chips">${versions}</div>` : ""}
      ${related ? `<h4>Related skills</h4><div class="chips">${related}</div>` : ""}
      <p style="margin-top:10px;font-size:12px"><a href="builder.html#add=${s.id}">Add to builder</a></p>
    </div>
    <div>
      <h4>How to get it</h4>
      ${acquisitionHTML(s)}
    </div>
  </div>`;
}

function currentFilters() {
  return {
    name: terms(els.name), text: terms(els.text), attr: els.attr.value, type: els.type.value,
    camp: els.camp.value, elite: els.elite.checked ? "elite" : "", src: els.src.value, pvp: els.pvp.checked,
  };
}

let lastVisible = [];
function update() {
  const f = currentFilters();
  const visible = sorted(SKILLS.filter(s => matches(s, f)), f);
  lastVisible = visible;
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

function toggleOpen(id) {
  state.open = state.open === id ? null : id;
  update();
}

els.list.addEventListener("click", e => {
  const go = e.target.closest("[data-goto]");
  if (go) { e.stopPropagation(); gotoSkill(+go.dataset.goto); return; }
  if (e.target.closest(".detail")) return;
  const row = e.target.closest(".row");
  if (row) toggleOpen(+row.dataset.id);
});

function gotoSkill(id) {
  const s = BY_ID.get(id);
  if (!s) return;
  if (!lastVisible.includes(s)) { resetFilters(); els.name.value = s.name.replace(/"/g, ""); if (s.pvp_only) els.pvp.checked = true; }
  state.open = id;
  update();
  const row = els.list.querySelector(`.row[data-id="${id}"]`);
  if (row) row.scrollIntoView({ block: "center" });
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
  if (state.open) p.set("open", state.open);
  const h = p.toString();
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
  els.type.value = p.get("ty") || "";
  els.camp.value = p.get("c") || "";
  els.elite.checked = p.get("e") === "elite";
  els.src.value = p.get("s") || "";
  els.pvp.checked = p.get("pvp") === "1";
  const sort = p.get("sort") || "default";
  state.desc = sort.startsWith("-");
  state.sort = sort.replace(/^-/, "");
  state.open = +p.get("open") || null;
}

buildFilterUI();
readHash();
update();
stickHeadBelowFilters();
if (state.open) els.list.querySelector(".row.open")?.scrollIntoView({ block: "center" });
