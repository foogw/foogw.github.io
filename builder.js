"use strict";

const ALL = window.GW_SKILLS;
const SKILL = new Map(ALL.map(s => [s.id, s]));
const PICKABLE = ALL.filter(s => !s.pvp_only && s.name !== "No Skill");

const PROF_IDS = ["None", "Warrior", "Ranger", "Monk", "Necromancer", "Mesmer", "Elementalist",
  "Assassin", "Ritualist", "Paragon", "Dervish"];
const ATTRIBUTES = {
  0: "Fast Casting", 1: "Illusion Magic", 2: "Domination Magic", 3: "Inspiration Magic",
  4: "Blood Magic", 5: "Death Magic", 6: "Soul Reaping", 7: "Curses",
  8: "Air Magic", 9: "Earth Magic", 10: "Fire Magic", 11: "Water Magic", 12: "Energy Storage",
  13: "Healing Prayers", 14: "Smiting Prayers", 15: "Protection Prayers", 16: "Divine Favor",
  17: "Strength", 18: "Axe Mastery", 19: "Hammer Mastery", 20: "Swordsmanship", 21: "Tactics",
  22: "Beast Mastery", 23: "Expertise", 24: "Wilderness Survival", 25: "Marksmanship",
  29: "Dagger Mastery", 30: "Deadly Arts", 31: "Shadow Arts", 32: "Communing",
  33: "Restoration Magic", 34: "Channeling Magic", 35: "Critical Strikes", 36: "Spawning Power",
  37: "Spear Mastery", 38: "Command", 39: "Motivation", 40: "Leadership",
  41: "Scythe Mastery", 42: "Wind Prayers", 43: "Earth Prayers", 44: "Mysticism",
};
const ATTR_ID = Object.fromEntries(Object.entries(ATTRIBUTES).map(([id, n]) => [n, +id]));
// Profession -> [primary-only attribute, other attributes]
const PROF_ATTRS = {
  1: [17, 18, 19, 20, 21], 2: [23, 22, 24, 25], 3: [16, 13, 14, 15], 4: [6, 4, 5, 7], 5: [0, 1, 2, 3],
  6: [12, 8, 9, 10, 11], 7: [35, 29, 30, 31], 8: [36, 32, 33, 34], 9: [40, 37, 38, 39], 10: [44, 41, 42, 43],
};
const POINT_COST = [0, 1, 3, 6, 10, 15, 21, 28, 37, 48, 61, 77, 97]; // cumulative, ranks 0..12
const MAX_POINTS = 200;
const MAX_BONUS = 10; // runes, headgear, consumables and skills on top of the spent ranks
const STORE_KEY = "gw-builder-v1";
const SAVED_KEY = "gw-builder-saved-v1";

const state = { primary: 3, secondary: 0, ranks: {}, bonus: {}, bar: Array(8).fill(0), pool: [], selected: null, notice: "" };

const els = {
  code: $("code"), msg: $("code-msg"), primary: $("primary"), secondary: $("secondary"),
  points: $("points"), attrs: $("attrs"), bar: $("bar"), warnings: $("warnings"), detail: $("detail"),
  search: $("search"), onlyProfs: $("only-profs"), results: $("results"), pool: $("pool"),
  saveName: $("save-name"), saved: $("saved"),
};

/* ---------- storage (per-viewer convenience only) ---------- */
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function store(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode / blocked */ }
}

/* ---------- build <-> template code ---------- */
function availableAttrs() {
  const p = PROF_ATTRS[state.primary] || [];
  const s = (PROF_ATTRS[state.secondary] || []).slice(1); // primary-only attribute excluded
  return state.secondary === state.primary ? p : [...p, ...s];
}

function currentCode() {
  const attrs = availableAttrs().filter(id => state.ranks[id] > 0).map(id => ({ id, rank: state.ranks[id] }));
  return TemplateCode.encode({ professions: [state.primary, state.secondary], attributes: attrs, skills: state.bar });
}

function applyCode(code) {
  const t = TemplateCode.decode(code);
  if (!PROF_IDS[t.professions[0]] || !PROF_IDS[t.professions[1]]) throw new Error("Unknown profession in template code");
  state.primary = t.professions[0];
  state.secondary = t.professions[1];
  state.ranks = Object.fromEntries(t.attributes.map(a => [a.id, Math.min(a.rank, 12)]));
  state.bar = t.skills.map(id => (SKILL.has(id) ? id : 0));
  state.selected = state.bar.find(Boolean) || null;
}

function pointsUsed() {
  return availableAttrs().reduce((sum, id) => sum + POINT_COST[state.ranks[id] || 0], 0);
}

/* ---------- skill text at the current rank ---------- */
function rankFor(s) {
  const id = ATTR_ID[s.attribute];
  return id === undefined ? null : (state.ranks[id] || 0) + (state.bonus[id] || 0);
}

function describe(s) {
  const rank = rankFor(s);
  const text = esc(s.description).replace(/&lt;\/?gray&gt;/g, "");
  if (rank === null) return text;
  return text.replace(/(-?\d+)\.\.\.(-?\d+)/g, (m, a, b) => {
    const v = Math.round(+a + ((+b - +a) * rank) / 15);
    return `<b class="rv" title="${m} (rank 0–15)">${v}</b>`;
  });
}

/* ---------- rendering ---------- */
const icon = (s, cls = "") => s
  ? `<span class="sk-icon ${cls}${s.elite ? " elite" : ""}" style="--pc:${profVar(s.profession)}" data-tip="${s.id}" aria-label="${esc(s.name)}"><img src="img/skills/${s.id}.jpg" alt="" loading="lazy" onerror="this.remove()"><span class="sk-fallback">${esc(s.name)}</span></span>`
  : `<span class="sk-icon empty"></span>`;

function renderProfs() {
  const opts = (none) => PROF_IDS.map((p, i) => i === 0 && !none ? "" : `<option value="${i}">${i === 0 ? "None" : p}</option>`).join("");
  els.primary.innerHTML = opts(false);
  els.secondary.innerHTML = opts(true);
  els.primary.value = state.primary || 1;
  els.secondary.value = state.secondary;
}

/* Laid out like the in-game attribute window: one row per attribute, primary profession first.
   Rank is what the template code stores; bonus (runes, headgear, consumables…) only changes the
   skill numbers shown here. The rows are rebuilt only when the attribute list changes, so a held
   button keeps working while the numbers update in place. */
let attrsKey = "";
function renderAttrs() {
  const ids = availableAttrs();
  const used = pointsUsed();
  const left = MAX_POINTS - used;
  els.points.innerHTML = `<b class="${left < 0 ? "over" : ""}">${used}</b> / ${MAX_POINTS} attribute points · `
    + `<b class="${left < 0 ? "over" : ""}">${left < 0 ? `${-left} over` : `${left} left`}</b>`;
  const key = ids.join(",");
  if (key !== attrsKey) {
    attrsKey = key;
    const own = PROF_ATTRS[state.primary] || [];
    const row = id => {
      const name = esc(ATTRIBUTES[id]);
      return `<div class="b-attr${id === own[0] ? " primary" : ""}" data-row="${id}">
        <span class="an">${name}</span>
        <span class="b-step"><button type="button" data-attr="${id}" data-d="-1" aria-label="Lower ${name}">−</button><span class="ar"></span><button type="button" data-attr="${id}" data-d="1" aria-label="Raise ${name}">+</button></span>
        <span class="b-step bonus"><button type="button" data-attr="${id}" data-bonus="1" data-d="-1" aria-label="Lower ${name} bonus">−</button><span class="ab"></span><button type="button" data-attr="${id}" data-bonus="1" data-d="1" aria-label="Raise ${name} bonus">+</button></span>
        <span class="at"></span>
      </div>`;
    };
    const group = (title, list) => list.length ? `<div class="b-agroup">${esc(title)}</div>${list.map(row).join("")}` : "";
    const second = ids.filter(id => !own.includes(id));
    els.attrs.innerHTML = `<div class="b-ahead"><span>Attribute</span><span>Rank</span><span>Bonus</span><span>Total</span></div>`
      + group(PROF_IDS[state.primary], ids.filter(id => own.includes(id)))
      + group(PROF_IDS[state.secondary], second);
  }
  for (const id of ids) {
    const r = state.ranks[id] || 0, b = state.bonus[id] || 0;
    const el = els.attrs.querySelector(`[data-row="${id}"]`);
    el.querySelector(".ar").textContent = r;
    el.querySelector(".ab").textContent = b ? `+${b}` : "—";
    el.querySelector(".ab").classList.toggle("none", !b);
    el.querySelector(".at").textContent = r + b;
    el.classList.toggle("set", r + b > 0);
  }
}

function renderBar() {
  els.bar.innerHTML = state.bar.map((id, i) => {
    const s = SKILL.get(id);
    return `<div class="b-slot${state.selected === id && id ? " sel" : ""}" data-slot="${i}" draggable="${!!id}" tabindex="0">
      ${icon(s)}<span class="b-num">${i + 1}</span></div>`;
  }).join("");
  const skills = state.bar.map(id => SKILL.get(id)).filter(Boolean);
  const warn = [];
  const elites = skills.filter(s => s.elite);
  if (state.notice) warn.push(state.notice);
  if (elites.length > 1) warn.push(`More than one elite: ${elites.map(s => s.name).join(", ")}`);
  const pve = skills.filter(s => s.pve_only);
  if (pve.length > 3) warn.push(`More than three PvE-only skills: ${pve.map(s => s.name).join(", ")}`);
  const allowed = new Set(["None", PROF_IDS[state.primary], PROF_IDS[state.secondary]]);
  const off = skills.filter(s => !allowed.has(s.profession));
  if (off.length) warn.push(`Not usable with ${PROF_IDS[state.primary]}/${PROF_IDS[state.secondary]}: ${off.map(s => s.name).join(", ")}`);
  if (pointsUsed() > MAX_POINTS) warn.push(`Attributes use more than ${MAX_POINTS} points`);
  els.warnings.innerHTML = warn.map(w => `<div>${esc(w)}</div>`).join("");
}

/* Selecting only moves the highlight: rebuilding the bar here would swallow double-clicks and key presses. */
function select(id) {
  state.selected = id;
  for (const slot of els.bar.children) slot.classList.toggle("sel", !!id && state.bar[+slot.dataset.slot] === id);
  renderDetail();
}

// name, profession, attribute at the current rank, costs and description: the detail panel and hover card
function skillCard(s) {
  const rank = rankFor(s);
  const costs = [s.energy && `${s.energy} energy`, s.adrenaline && `${s.adrenaline} adrenaline`,
    s.sacrifice && `${s.sacrifice}% sacrifice`, s.upkeep && `${s.upkeep} upkeep`,
    s.activation && `${s.activation}s activation`, s.recharge && `${s.recharge}s recharge`].filter(Boolean);
  return `<div class="b-dhead">${icon(s, "big")}<div>
      <div class="b-dname${s.elite ? " elite" : ""}">${esc(s.name)}</div>
      <div class="dim">${esc(s.profession === "None" ? "Common" : s.profession)} · ${esc(s.attribute)}${rank !== null ? ` <b>${rank}</b>` : ""} · ${esc(s.type || "")}${s.pve_only ? " · PvE only" : ""}</div>
      <div class="dim">${esc(costs.join(" · "))}</div></div></div>
    <p>${describe(s)}</p>`;
}

function renderDetail() {
  const s = SKILL.get(state.selected);
  if (!s) { els.detail.innerHTML = '<p class="dim">Select a skill on the bar or in the list to see its description at your attribute ranks.</p>'; return; }
  els.detail.innerHTML = skillCard(s) + `<a href="skills.html#open=${s.id}">Open in skills list →</a>`;
}

function fuzzyScore(name, tokens) {
  const hay = fold(name);
  const words = hay.split(/[^a-z0-9]+/);
  let score = 0;
  for (const t of tokens) {
    const i = hay.indexOf(t);
    if (i < 0) return -1;
    score += (words.some(w => w.startsWith(t)) ? 100 : 10) - i;
  }
  return score - name.length;
}

function renderResults() {
  const tokens = terms(els.search);
  const allowed = new Set(["None", PROF_IDS[state.primary], PROF_IDS[state.secondary]]);
  let list = PICKABLE.filter(s => !els.onlyProfs.checked || allowed.has(s.profession));
  if (tokens.length) {
    list = list.map(s => [s, fuzzyScore(s.name, tokens)]).filter(x => x[1] >= 0)
      .sort((a, b) => b[1] - a[1]).map(x => x[0]);
  } else {
    list = list.sort((a, b) => PROF_ORDER[a.profession] - PROF_ORDER[b.profession]
      || cmpStr(a.attribute, b.attribute) || cmpStr(a.name, b.name));
  }
  // icons only, as in the game's skill window; without a search they are grouped by attribute
  const shown = list.slice(0, 600);
  const cell = (s, first) => `<div class="b-res${first ? " first" : ""}${state.bar.includes(s.id) ? " on" : ""}" data-id="${s.id}" draggable="true">${icon(s, "md")}</div>`;
  let html = "";
  if (tokens.length) html = `<div class="b-grid">${shown.map((s, i) => cell(s, i === 0)).join("")}</div>`;
  else {
    let key;
    for (const s of shown) {
      const k = `${s.profession}|${s.attribute}`;
      if (k !== key) {
        html += `${key ? "</div>" : ""}<div class="b-agrp" style="--pc:${profVar(s.profession)}">${esc(s.attribute === "No attribute" && s.profession !== "None" ? `${s.profession} · no attribute` : s.attribute)}</div><div class="b-grid">`;
        key = k;
      }
      html += cell(s, false);
    }
    if (key) html += "</div>";
  }
  els.results.innerHTML = html
    + (list.length > shown.length ? `<div class="dim b-more">${list.length - shown.length} more — refine the search</div>` : "")
    || '<div class="dim b-more">No skills match.</div>';
}

function renderPool() {
  $("clear-pool").hidden = !state.pool.length;
  els.pool.innerHTML = state.pool.map(id => `<div class="b-pitem" data-id="${id}" draggable="true">${icon(SKILL.get(id), "sm")}<button type="button" class="x" data-unpool="${id}" title="Remove">×</button></div>`).join("")
    || '<span class="dim">Empty</span>';
}

function renderSaved() {
  const saved = load(SAVED_KEY, []);
  els.saved.innerHTML = saved.map((b, i) => {
    let skills = [];
    try { skills = TemplateCode.decode(b.code).skills; } catch { /* keep the row, show no icons */ }
    return `<div class="b-srow" data-code="${esc(b.code)}">
      <span class="b-sname">${esc(b.name)}</span>
      <span class="b-smini">${skills.map(id => icon(SKILL.get(id), "xs")).join("")}</span>
      <button type="button" class="x" data-del="${i}" title="Delete">×</button></div>`;
  }).join("") || '<span class="dim">None yet</span>';
}

// the bonus is not part of a template code, so links carry it separately: #code=…&bonus=13:3,15:1
function hashFor(code) {
  const bonus = Object.entries(state.bonus).filter(([, v]) => v > 0).map(([id, v]) => `${id}:${v}`).join(",");
  return new URLSearchParams(bonus ? { code, bonus } : { code }).toString().replace(/%3A/g, ":").replace(/%2C/g, ",");
}
const parseBonus = text => Object.fromEntries(String(text || "").split(",").map(x => x.split(":").map(Number))
  .filter(([id, v]) => ATTRIBUTES[id] && v > 0).map(([id, v]) => [id, Math.min(v, MAX_BONUS)]));

function render({ code = true } = {}) {
  renderAttrs();
  renderBar();
  renderDetail();
  renderResults();
  renderPool();
  const c = currentCode();
  if (code) els.code.value = c;
  history.replaceState(null, "", "#" + hashFor(c));
  store(STORE_KEY, { code: c, pool: state.pool, bonus: state.bonus });
}

/* ---------- actions ---------- */
/* The game allows one elite and three PvE-only skills on a bar. A new skill pushes out the other
   elite, or the rightmost other PvE-only skill; those go to the shortlist. */
function makeRoom(id) {
  const s = SKILL.get(id);
  const out = (test, keep) => {
    const slots = state.bar.map((x, i) => i).filter(i => state.bar[i] && state.bar[i] !== id && test(SKILL.get(state.bar[i])));
    if (slots.length < keep) return [];
    const i = slots[slots.length - 1], gone = state.bar[i];
    addToPool(gone);
    state.bar[i] = 0;
    return [SKILL.get(gone).name];
  };
  const removed = [...(s.elite ? out(x => x?.elite, 1) : []), ...(s.pve_only ? out(x => x?.pve_only, 3) : [])];
  state.notice = removed.length ? `Moved to the shortlist: ${removed.join(", ")}` : "";
}

function addToBar(id, slot) {
  if (!id) return;
  state.notice = "";
  const at = state.bar.indexOf(id);
  if (slot === undefined) {
    if (at >= 0) { state.selected = id; return render(); }
    // added without a target slot: take the place of the skill it would push out, else the first free slot
    const s = SKILL.get(id), slots = test => state.bar.map((x, i) => i).filter(i => test(SKILL.get(state.bar[i])));
    const elite = s.elite ? slots(x => x?.elite) : [], pve = s.pve_only ? slots(x => x?.pve_only) : [];
    slot = elite.length ? elite[0] : pve.length >= 3 ? pve[pve.length - 1] : state.bar.indexOf(0);
    if (slot < 0) { addToPool(id); state.selected = id; return render(); }
  }
  const displaced = state.bar[slot];
  if (at >= 0) state.bar[at] = displaced; // swap if it was already on the bar
  else if (displaced) addToPool(displaced);
  state.bar[slot] = id;
  if (at < 0) makeRoom(id);
  state.selected = id;
  render();
}

function removeFromBar(slot, { keep = true } = {}) {
  const id = state.bar[slot];
  if (!id) return;
  if (keep) addToPool(id);
  state.bar[slot] = 0;
  state.notice = "";
  render();
}

/* Skills the current professions can't use leave the bar; they stay in the shortlist. */
function dropOffProfessionSkills() {
  const allowed = new Set(["None", PROF_IDS[state.primary], PROF_IDS[state.secondary]]);
  state.bar = state.bar.map(id => {
    const s = SKILL.get(id);
    if (!s || allowed.has(s.profession)) return id;
    addToPool(id);
    return 0;
  });
  if (!state.bar.includes(state.selected)) state.selected = state.bar.find(Boolean) || null;
}

function addToPool(id) {
  if (id && !state.pool.includes(id)) state.pool.push(id);
}

/* ---------- events ---------- */
els.code.addEventListener("input", () => {
  const v = els.code.value.trim();
  if (!v) { els.msg.textContent = ""; return; }
  try {
    applyCode(v);
    els.msg.textContent = "";
    renderProfs();
    render({ code: false });
  } catch (e) {
    els.msg.textContent = e.message;
  }
});

function copy(text, button) {
  const done = () => { const t = button.textContent; button.textContent = "Copied"; setTimeout(() => (button.textContent = t), 1200); };
  navigator.clipboard?.writeText(text).then(done, () => { els.code.select(); document.execCommand("copy"); done(); });
}
$("copy-code").addEventListener("click", e => copy(currentCode(), e.target));
$("copy-link").addEventListener("click", e => copy(location.href.split("#")[0] + "#" + hashFor(currentCode()), e.target));
$("clear").addEventListener("click", () => {
  state.bar = Array(8).fill(0);
  state.ranks = {};
  state.bonus = {};
  state.selected = null;
  state.notice = "";
  els.msg.textContent = "";
  render();
});

for (const sel of [els.primary, els.secondary]) {
  sel.addEventListener("change", () => {
    state.primary = +els.primary.value;
    state.secondary = +els.secondary.value;
    dropOffProfessionSkills();
    render();
  });
}

/* − / + step once on press and keep stepping while held; shift-click goes all the way. */
function step(b, all) {
  const id = +b.dataset.attr, d = +b.dataset.d;
  const table = b.dataset.bonus ? state.bonus : state.ranks;
  const max = b.dataset.bonus ? MAX_BONUS : 12;
  const now = table[id] || 0;
  let next = Math.max(0, Math.min(max, now + d));
  if (all) next = d < 0 ? 0 : max;
  // raising a rank stops where the points run out, unless the build is already over
  if (!b.dataset.bonus && d > 0) {
    const spare = MAX_POINTS - pointsUsed() + POINT_COST[now];
    while (next > now && POINT_COST[next] > spare) next--;
  }
  if (next === now) return false;
  table[id] = next;
  render();
  return true;
}
let hold = null;
const stopHold = () => { clearTimeout(hold); clearInterval(hold); hold = null; };
els.attrs.addEventListener("pointerdown", e => {
  const b = e.target.closest("button[data-attr]");
  if (!b || e.button !== 0) return;
  e.preventDefault();
  stopHold();
  if (!step(b, e.shiftKey) || e.shiftKey) return;
  hold = setTimeout(() => { hold = setInterval(() => { if (!step(b)) stopHold(); }, 90); }, 380);
});
for (const ev of ["pointerup", "pointercancel", "pointerleave", "blur"]) (ev === "blur" ? window : els.attrs).addEventListener(ev, stopHold);
els.attrs.addEventListener("click", e => {
  const b = e.target.closest("button[data-attr]");
  if (b && e.detail === 0) step(b, e.shiftKey); // keyboard: Enter / Space
});

els.search.addEventListener("input", renderResults);
els.search.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const first = els.results.querySelector(".b-res");
    if (first) { addToBar(+first.dataset.id); els.search.select(); }
  } else if (e.key === "Escape") { els.search.value = ""; renderResults(); }
});
els.onlyProfs.addEventListener("change", renderResults);

els.results.addEventListener("click", e => {
  const row = e.target.closest(".b-res");
  if (row) select(+row.dataset.id);
});
// right-click adds to the bar, as in the game, and takes it off again, so a misclick undoes in place
for (const zone of [els.results, els.pool]) {
  zone.addEventListener("contextmenu", e => {
    const item = e.target.closest(".b-res, .b-pitem");
    if (!item) return;
    e.preventDefault();
    hideTip();
    const id = +item.dataset.id, at = state.bar.indexOf(id);
    if (at >= 0) removeFromBar(at, { keep: false }); // undo: don't add it to the shortlist
    else addToBar(id);
  });
}
els.results.addEventListener("dblclick", e => {
  const row = e.target.closest(".b-res");
  if (row) addToBar(+row.dataset.id);
});

els.bar.addEventListener("click", e => {
  const slot = e.target.closest(".b-slot");
  if (!slot) return;
  const id = state.bar[+slot.dataset.slot];
  if (id) { select(id); slot.focus(); }
});
els.bar.addEventListener("contextmenu", e => {
  const slot = e.target.closest(".b-slot");
  if (!slot || !state.bar[+slot.dataset.slot]) return;
  e.preventDefault();
  removeFromBar(+slot.dataset.slot);
});
document.addEventListener("keydown", e => {
  if (e.key !== "Delete" && e.key !== "Backspace") return;
  if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
  const focused = document.activeElement.closest?.(".b-slot");
  const slot = focused ? +focused.dataset.slot : state.bar.indexOf(state.selected);
  if (slot < 0 || !state.bar[slot]) return;
  e.preventDefault();
  removeFromBar(slot);
  els.bar.children[slot]?.focus();
});

$("clear-pool").addEventListener("click", () => { state.pool = []; render(); });
els.pool.addEventListener("click", e => {
  const x = e.target.closest("[data-unpool]");
  if (x) { state.pool = state.pool.filter(id => id !== +x.dataset.unpool); return render(); }
  const item = e.target.closest(".b-pitem");
  if (item) select(+item.dataset.id);
});
els.pool.addEventListener("dblclick", e => {
  const item = e.target.closest(".b-pitem");
  if (item) addToBar(+item.dataset.id);
});

/* hover card for any skill icon */
const tip = document.createElement("div");
tip.className = "b-tip";
tip.hidden = true;
document.body.append(tip);
function hideTip() { tip.hidden = true; }
document.addEventListener("mouseover", e => {
  const el = e.target.closest("[data-tip]");
  if (!el || el.closest(".b-tip, .b-detail")) return hideTip();
  const s = SKILL.get(+el.dataset.tip);
  if (!s) return hideTip();
  tip.innerHTML = skillCard(s);
  tip.hidden = false;
  const r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
  const x = r.right + 10 + w < innerWidth ? r.right + 10 : Math.max(8, r.left - 10 - w);
  const y = Math.min(Math.max(8, r.top), innerHeight - h - 8);
  tip.style.left = x + "px";
  tip.style.top = y + "px";
});
document.addEventListener("dragstart", hideTip);
document.addEventListener("scroll", hideTip, true);

/* drag and drop: results / shortlist / bar slots */
let drag = null;
document.addEventListener("dragstart", e => {
  const slot = e.target.closest(".b-slot");
  const item = e.target.closest(".b-res, .b-pitem");
  if (slot) drag = { from: "bar", slot: +slot.dataset.slot, id: state.bar[+slot.dataset.slot] };
  else if (item) drag = { from: "list", id: +item.dataset.id };
  else return;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", String(drag.id));
});
document.addEventListener("dragend", () => { drag = null; document.querySelectorAll(".over").forEach(n => n.classList.remove("over")); });
for (const zone of [els.bar, els.pool]) {
  zone.addEventListener("dragover", e => {
    if (!drag) return;
    e.preventDefault();
    document.querySelectorAll(".over").forEach(n => n.classList.remove("over"));
    (e.target.closest(".b-slot") || zone).classList.add("over");
  });
}
// bar and shortlist drops stop here: they re-render, and the off-the-bar handler below would then see a detached target
els.bar.addEventListener("drop", e => {
  e.preventDefault();
  e.stopPropagation();
  const slot = e.target.closest(".b-slot");
  if (!drag || !slot) return;
  const to = +slot.dataset.slot;
  if (drag.from === "bar") {
    [state.bar[to], state.bar[drag.slot]] = [state.bar[drag.slot], state.bar[to]];
    render();
  } else addToBar(drag.id, to);
});
// a bar skill dropped anywhere off the bar leaves it, as in the game
document.addEventListener("dragover", e => { if (drag?.from === "bar" && !e.target.closest("#bar")) e.preventDefault(); });
document.addEventListener("drop", e => {
  if (drag?.from !== "bar" || e.target.closest("#bar, #pool")) return;
  e.preventDefault();
  removeFromBar(drag.slot);
});
els.pool.addEventListener("drop", e => {
  e.preventDefault();
  e.stopPropagation();
  if (!drag) return;
  if (drag.from === "bar") removeFromBar(drag.slot);
  else { addToPool(drag.id); render(); }
});

/* saved builds */
$("save").addEventListener("click", () => {
  const name = els.saveName.value.trim() || `${PROF_IDS[state.primary]}/${PROF_IDS[state.secondary]}`;
  const saved = load(SAVED_KEY, []);
  saved.unshift({ name, code: currentCode() });
  store(SAVED_KEY, saved);
  els.saveName.value = "";
  renderSaved();
});
els.saved.addEventListener("click", e => {
  const del = e.target.closest("[data-del]");
  if (del) {
    const saved = load(SAVED_KEY, []);
    saved.splice(+del.dataset.del, 1);
    store(SAVED_KEY, saved);
    return renderSaved();
  }
  const row = e.target.closest(".b-srow");
  if (row) { applyCode(row.dataset.code); renderProfs(); render(); }
});

/* ---------- start ---------- */
(function init() {
  const fromHash = new URLSearchParams(location.hash.slice(1)).get("code");
  const saved = load(STORE_KEY, {});
  state.pool = Array.isArray(saved.pool) ? saved.pool.filter(id => SKILL.has(id)) : [];
  const hashBonus = new URLSearchParams(location.hash.slice(1)).get("bonus");
  state.bonus = fromHash ? parseBonus(hashBonus) : parseBonus(Object.entries(saved.bonus || {}).map(([k, v]) => `${k}:${v}`).join(","));
  const add = +new URLSearchParams(location.hash.slice(1)).get("add");
  try { if (fromHash || saved.code) applyCode(fromHash || saved.code); } catch { /* keep defaults */ }
  if (SKILL.has(add)) { renderProfs(); addToBar(add); }
  renderProfs();
  renderSaved();
  render();
})();
