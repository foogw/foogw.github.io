"use strict";

const SETS = window.GW_ARMOR;
const CAMP_FILTERS = ["Core", "Prophecies", "Factions", "Nightfall", "Eye of the North"];
const CAMP_COLOR = { Core: "--p-none", Prophecies: "--p-paragon", Factions: "--p-ritualist", Nightfall: "--p-elementalist", "Eye of the North": "--p-monk" };
const SLOTS = [["head", "Head"], ["chest", "Chest"], ["hands", "Hands"], ["legs", "Legs"], ["feet", "Feet"]];
const PRESTIGE = 1000; // gold per piece above which armor counts as prestige
// short names for the list; materials not named here show in full
const SHORT = {
  "Bolt of Cloth": "Cloth", "Tanned Hide Square": "Tanned Hide", "Iron Ingot": "Iron", "Steel Ingot": "Steel",
  "Leather Square": "Leather", "Bolt of Silk": "Silk", "Vial of Ink": "Ink", "Pile of Glittering Dust": "Dust",
  "Elonian Leather Square": "Elonian Leather", "Bolt of Linen": "Linen", "Fur Square": "Fur", "Bolt of Damask": "Damask",
  "Amber Chunk": "Amber", "Jadeite Shard": "Jadeite", "Chitin Fragment": "Chitin", "Roll of Parchment": "Parchment",
  "Deldrimor Steel Ingot": "Deldrimor Steel", "Glob of Ectoplasm": "Ecto", "Obsidian Shard": "Obsidian",
  "Roll of Vellum": "Vellum", "Granite Slab": "Granite", "Wood Plank": "Wood", "Plant Fiber": "Plant Fiber",
};
const COMMON = new Set(["Bolt of Cloth", "Bone", "Chitin Fragment", "Feather", "Granite Slab", "Iron Ingot",
  "Pile of Glittering Dust", "Plant Fiber", "Scale", "Tanned Hide Square", "Wood Plank"]);
const short = m => SHORT[m] || m;

const els = {
  name: $("f-name"), prof: $("f-prof"), camp: $("f-camp"), pieces: $("f-pieces"), top: $("f-top"),
  prestige: $("f-prestige"), mats: $("f-mats"), usage: $("usage"),
  list: $("list"), head: $("head"), count: $("count"), empty: $("empty"),
};
// mats: material -> "in" (must use) or "out" (must not use)
const state = { profs: new Set(), camps: new Set(), mats: new Map(), sort: "default", desc: false, open: null };

/* ---------- precompute: one row per set and tier ---------- */
const keyOf = s => `${s.profession}|${s.name}|${s.campaigns.join("+")}`;
const ROWS = [];
for (const s of SETS) {
  s._key = keyOf(s);
  s._text = fold([s.name, ...s.tiers.flatMap(t => t.at.flat())].join(" | "));
  for (const t of s.tiers) {
    t._pieces = Object.keys(t.pieces).length;
    t._mats = new Set(t.total.map(m => m.material));
    ROWS.push({ set: s, tier: t });
  }
}
const MATERIALS = [...new Set(ROWS.flatMap(r => [...r.tier._mats]))]
  .sort((a, b) => (!COMMON.has(a)) - (!COMMON.has(b)) || cmpStr(short(a), short(b)));

/* ---------- filters UI ---------- */
function chipGroup(el, values, attr, color, set) {
  el.innerHTML = values.map(v =>
    `<button class="prof-chip" data-${attr}="${esc(v)}" aria-pressed="false" style="--c:${color(v)}">${esc(v)}</button>`).join("");
  el.addEventListener("click", e => {
    const b = e.target.closest(".prof-chip");
    if (!b) return;
    const v = b.dataset[attr];
    if (e.metaKey || e.ctrlKey || e.shiftKey) set.has(v) ? set.delete(v) : set.add(v);
    else if (set.size === 1 && set.has(v)) set.clear();
    else { set.clear(); set.add(v); }
    update();
  });
}

function buildFilterUI() {
  chipGroup(els.prof, PROFS.map(([p]) => p).filter(p => SETS.some(s => s.profession === p)), "prof", profVar, state.profs);
  chipGroup(els.camp, CAMP_FILTERS, "camp", c => `var(${CAMP_COLOR[c]})`, state.camps);

  els.mats.addEventListener("click", e => {
    const b = e.target.closest(".mat");
    if (!b) return;
    const m = b.dataset.mat, now = state.mats.get(m);
    if (!now) state.mats.set(m, "in");
    else if (now === "in") state.mats.set(m, "out");
    else state.mats.delete(m);
    update();
  });
  els.mats.addEventListener("contextmenu", e => {
    const b = e.target.closest(".mat");
    if (!b) return;
    e.preventDefault();
    state.mats.get(b.dataset.mat) === "out" ? state.mats.delete(b.dataset.mat) : state.mats.set(b.dataset.mat, "out");
    update();
  });

  els.name.addEventListener("input", update);
  for (const el of [els.pieces, els.top, els.prestige]) el.addEventListener("change", update);
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
      else if (state.open) toggleOpen(state.open);
    }
  });
}

function syncChips() {
  for (const b of els.prof.children) b.setAttribute("aria-pressed", state.profs.has(b.dataset.prof));
  for (const b of els.camp.children) b.setAttribute("aria-pressed", state.camps.has(b.dataset.camp));
}

function resetFilters() {
  els.name.value = "";
  els.pieces.value = "";
  els.top.checked = true;
  els.prestige.checked = false;
  state.profs.clear(); state.camps.clear(); state.mats.clear();
}

/* ---------- filtering ---------- */
function baseMatch(r, q) {
  const { set: s, tier: t } = r;
  if (state.profs.size && !state.profs.has(s.profession)) return false;
  if (state.camps.size && !s.campaigns.some(c => state.camps.has(c))) return false;
  if (q.length && !q.every(w => s._text.includes(w))) return false;
  const pieces = els.pieces.value;
  if (pieces && !PIECES[pieces](s, t)) return false;
  // a set's head-only version only shows when asked for, or with every version
  if (!pieces && els.top.checked && s.kind !== "headgear" && t._pieces === 1) return false;
  if (els.top.checked && t.armor < MAX_ARMOR[s.profession]) return false;
  if (els.prestige.checked && t.price_per_piece > PRESTIGE) return false;
  return true;
}

const PIECES = {
  5: (s, t) => s.kind === "set" && t._pieces === 5,
  4: (s, t) => s.kind === "set" && t._pieces === 4,
  head: (s, t) => t._pieces === 1,
  pieces: s => s.kind === "pieces",
};

const matMatch = r => [...state.mats].every(([m, how]) => r.tier._mats.has(m) === (how === "in"));

// each profession's max armor rating
const MAX_ARMOR = {};
for (const s of SETS) for (const t of s.tiers) MAX_ARMOR[s.profession] = Math.max(MAX_ARMOR[s.profession] || 0, t.armor);

// one max-armor version of each set: the whole set over a lone piece, then cheapest
const better = (a, b) => (a._pieces > 1) - (b._pieces > 1) || a.armor - b.armor || b.price - a.price;
function bestOnly(rows) {
  const best = new Map();
  for (const r of rows) {
    const b = best.get(r.set._key);
    if (!b || better(r.tier, b.tier) > 0) best.set(r.set._key, r);
  }
  return [...best.values()];
}

const KINDS = ["set", "pieces", "headgear"];
const campIdx = s => Math.min(...s.campaigns.map(c => CAMP_FILTERS.indexOf(c)));
const SORTS = {
  default: (a, b) => PROF_ORDER[a.set.profession] - PROF_ORDER[b.set.profession] || campIdx(a.set) - campIdx(b.set)
    || KINDS.indexOf(a.set.kind) - KINDS.indexOf(b.set.kind) || cmpStr(a.set.name, b.set.name) || a.tier.armor - b.tier.armor || a.tier.price - b.tier.price,
  name: (a, b) => cmpStr(a.set.name, b.set.name) || SORTS.default(a, b),
  profession: (a, b) => SORTS.default(a, b),
  campaign: (a, b) => campIdx(a.set) - campIdx(b.set) || SORTS.default(a, b),
  armor: (a, b) => a.tier.armor - b.tier.armor || SORTS.default(a, b),
  pieces: (a, b) => a.tier._pieces - b.tier._pieces || SORTS.default(a, b),
  price: (a, b) => a.tier.price - b.tier.price || SORTS.default(a, b),
};

/* ---------- rendering ---------- */
const gold = n => (n >= 1000 && n % 1000 === 0 ? `${n / 1000}k` : n >= 1000 ? `${(n / 1000).toLocaleString("en", { maximumFractionDigits: 3 })}k` : `${n}g`);
const matList = (list, hl) => list.map(m =>
  `<span class="mq${state.mats.get(m.material) === "in" ? " hit" : ""}" title="${esc(m.material)}">${m.count.toLocaleString("en")} ${esc(hl ? short(m.material) : m.material)}</span>`).join("");
const KIND_TAG = { headgear: '<span class="tag">headgear</span>', pieces: '<span class="tag" title="Pieces to mix with other armor, not a set">stand-alone</span>' };
const piecesLabel = n => (n === 1 ? "Head" : n);

function rowHTML(r, q) {
  const { set: s, tier: t } = r;
  const id = `${s._key}|${s.tiers.indexOf(t)}`;
  const open = state.open === id;
  return `<div class="row arow${open ? " open" : ""}" data-id="${esc(id)}" style="--pc:${profVar(s.profession)}">
    <div class="name">${highlight(s.name, q)}${KIND_TAG[s.kind] || ""}</div>
    <div class="prof col-prof">${esc(s.profession)}</div>
    <div class="dim col-camp">${s.campaigns.map(c => CAMP_SHORT[c] || c).join(", ")}</div>
    <div class="num">${t.armor}</div>
    <div class="num dim col-pieces">${piecesLabel(t._pieces)}</div>
    <div class="num" title="${t.price.toLocaleString("en")} gold for the set, ${t.price_per_piece.toLocaleString("en")} a piece">${gold(t.price)}</div>
    <div class="mqs">${matList(t.total, true)}</div>
  </div>${open ? detailHTML(r, q) : ""}`;
}

function piecesTable(t) {
  const mats = t.total.map(m => m.material);
  const head = `<tr><th></th>${mats.map(m => `<th class="num">${esc(short(m))}</th>`).join("")}</tr>`;
  const line = (label, need, cls = "") => `<tr class="${cls}"><td>${label}</td>${mats.map(m => {
    const n = need.find(x => x.material === m)?.count;
    return `<td class="num">${n ? n.toLocaleString("en") : "—"}</td>`;
  }).join("")}</tr>`;
  return `<table class="rewards">${head}${SLOTS.filter(([k]) => t.pieces[k]).map(([k, label]) => line(label, t.pieces[k])).join("")}${t._pieces > 1 ? line("Set", t.total, "tot") : ""}</table>`;
}

function detailHTML(r, q) {
  const { set: s, tier: t } = r;
  const where = t.at.map(([place, crafter]) => `<li>${highlight(place, q)} <span class="dim">— ${highlight(crafter, q)}</span></li>`).join("");
  const others = s.tiers.length > 1 ? `<h4>All versions</h4><table class="rewards"><tr><th class="num">Armor</th><th class="num">Pieces</th><th class="num">Gold</th><th>Where</th><th>Materials</th></tr>${
    s.tiers.map((x, i) => `<tr class="${x === t ? "cur" : ""}"><td class="num"><button class="link" data-tier="${esc(`${s._key}|${i}`)}">${x.armor}</button></td><td class="num">${piecesLabel(x._pieces)}</td><td class="num">${gold(x.price)}</td><td>${x.at.map(a => esc(a[0])).join(", ")}</td><td class="mqs">${matList(x.total, true)}</td></tr>`).join("")
  }</table>` : "";
  return `<div class="detail" style="--pc:${profVar(s.profession)}">
    <div>
      <div class="facts" style="margin-top:12px">
        <span>Armor <b>${t.armor}</b></span><span>Per piece <b>${t.price_per_piece.toLocaleString("en")} gold</b></span>
        <span>${s.kind === "pieces" ? "All pieces" : t._pieces > 1 ? "Set" : "Headgear"} <b>${t.price.toLocaleString("en")} gold</b></span>
        <span>Campaign <b>${esc(s.campaigns.join(", "))}</b></span>
      </div>
      <h4>Materials</h4>
      ${piecesTable(t)}
      ${others}
    </div>
    <div>
      <h4>Crafted at</h4>
      <ul class="acq">${where}</ul>
      <p style="margin-top:10px;font-size:12px" class="dim"><a href="${esc(s.wiki_de)}" target="_blank" rel="noopener">guildwiki.de</a></p>
    </div>
  </div>`;
}

function matsHTML(base) {
  // share of the sets in view (before the material filter) that use each material
  const sets = new Map();
  for (const r of base) {
    const used = sets.get(r.set._key) || new Set();
    r.tier._mats.forEach(m => used.add(m));
    sets.set(r.set._key, used);
  }
  const n = sets.size;
  const share = m => (n ? [...sets.values()].filter(u => u.has(m)).length / n : 0);
  const chip = m => {
    const p = share(m), how = state.mats.get(m) || "";
    return `<button class="mat ${how}${p ? "" : " unused"}" data-mat="${esc(m)}" title="${esc(m)}: used by ${Math.round(p * 100)}% of the armor shown${how ? "" : ". Click to require it, twice to exclude it"}">${esc(short(m))}<span>${p ? Math.max(1, Math.round(p * 100)) + "%" : "—"}</span></button>`;
  };
  const common = MATERIALS.filter(m => COMMON.has(m)), rare = MATERIALS.filter(m => !COMMON.has(m));
  els.mats.innerHTML = `<div class="frow"><span class="mlabel">Common</span>${common.map(chip).join("")}</div>
    <div class="frow"><span class="mlabel">Rare</span>${rare.map(chip).join("")}</div>`;
  return { n, share };
}

function usageHTML(n, share) {
  const wanted = [...state.mats].filter(([, how]) => how === "in").map(([m]) => m);
  if (!wanted.length) { els.usage.innerHTML = ""; return; }
  const who = state.profs.size ? [...state.profs].join(" / ") + " " : "";
  els.usage.innerHTML = wanted.map(m => {
    const used = Math.round(share(m) * n);
    return used
      ? `<b>${esc(m)}</b> is used by ${used} of the ${n} ${who}armors shown (${Math.round(share(m) * 100)}%).`
      : `<b>${esc(m)}</b> is not used by any ${who}armor shown.`;
  }).join(" ");
}

let lastVisible = [];
function update() {
  syncChips();
  const q = terms(els.name);
  let base = ROWS.filter(r => baseMatch(r, q));
  if (els.top.checked) base = bestOnly(base);
  const { n, share } = matsHTML(base);
  usageHTML(n, share);
  let visible = base.filter(matMatch).sort(SORTS[state.sort] || SORTS.default);
  if (state.desc) visible.reverse();
  lastVisible = visible;
  els.count.textContent = `${visible.length} / ${base.length}`;
  els.empty.hidden = visible.length > 0;
  els.list.innerHTML = visible.map(r => rowHTML(r, q)).join("");
  for (const b of els.head.querySelectorAll("button[data-sort]")) {
    b.classList.toggle("sorted", b.dataset.sort === state.sort);
    b.classList.toggle("desc", b.dataset.sort === state.sort && state.desc);
  }
  $("head").style.top = headerHeight() + $("filters").offsetHeight + "px";
  writeHash();
}

function toggleOpen(id) {
  state.open = state.open === id ? null : id;
  update();
}

els.list.addEventListener("click", e => {
  const tier = e.target.closest("[data-tier]");
  if (tier) { openTier(tier.dataset.tier); return; }
  if (e.target.closest(".detail") || e.target.closest("a")) return;
  const row = e.target.closest(".row");
  if (row) toggleOpen(row.dataset.id);
});

// show one version of a set from the "All versions" table, even when the filters hid it
function openTier(id) {
  if (!lastVisible.some(r => `${r.set._key}|${r.set.tiers.indexOf(r.tier)}` === id)) {
    els.top.checked = false;
    els.pieces.value = "";
    els.prestige.checked = false;
    state.mats.clear();
  }
  state.open = id;
  update();
  els.list.querySelector(`.row[data-id="${CSS.escape(id)}"]`)?.scrollIntoView({ block: "center" });
}

/* ---------- URL state ---------- */
function writeHash() {
  const p = new URLSearchParams();
  if (els.name.value) p.set("q", els.name.value);
  if (state.profs.size) p.set("p", [...state.profs].join(","));
  if (state.camps.size) p.set("c", [...state.camps].join(","));
  if (els.pieces.value) p.set("n", els.pieces.value);
  if (!els.top.checked) p.set("all", "1");
  if (els.prestige.checked) p.set("np", "1");
  const mats = how => [...state.mats].filter(([, h]) => h === how).map(([m]) => m).join(",");
  if (mats("in")) p.set("m", mats("in"));
  if (mats("out")) p.set("x", mats("out"));
  if (state.sort !== "default") p.set("sort", (state.desc ? "-" : "") + state.sort);
  if (state.open) p.set("open", state.open);
  const h = p.toString();
  history.replaceState(null, "", h ? "#" + h : location.pathname);
}

function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  const list = k => (p.get(k) || "").split(",").filter(Boolean);
  els.name.value = p.get("q") || "";
  state.profs.clear(); list("p").forEach(v => state.profs.add(v));  // the chip handlers hold these sets
  state.camps.clear(); list("c").forEach(v => state.camps.add(v));
  els.pieces.value = p.get("n") || "";
  els.top.checked = p.get("all") !== "1";
  els.prestige.checked = p.get("np") === "1";
  state.mats = new Map([...list("m").map(m => [m, "in"]), ...list("x").map(m => [m, "out"])]);
  const sort = p.get("sort") || "default";
  state.desc = sort.startsWith("-");
  state.sort = sort.replace(/^-/, "");
  state.open = p.get("open") || null;
}

buildFilterUI();
readHash();
update();
window.addEventListener("resize", () => { $("head").style.top = headerHeight() + $("filters").offsetHeight + "px"; });
if (state.open) els.list.querySelector(".row.open")?.scrollIntoView({ block: "center" });
