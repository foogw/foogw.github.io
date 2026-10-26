"use strict";

const MISSIONS = window.GW_MISSIONS;
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const BY_NAME = new Map(MISSIONS.map(m => [m.name, m]));
const HERO = new Map((window.GW_HEROES || []).map(h => [h.name, h]));
const OUTPOST = new Map((window.GW_LOCATIONS || []).filter(p => p.mission).map(p => [p.mission, p]));

const CAMP_FILTERS = ["Prophecies", "Factions", "Nightfall", "Eye of the North"];
const CAMP_COLOR = { Prophecies: "--p-paragon", Factions: "--p-ritualist", Nightfall: "--p-elementalist", "Eye of the North": "--p-monk" };
const TYPE_ORDER = ["Mission", "Challenge", "Competitive", "Elite mission", "PvP"];
// a faint tint per region, so neighbouring regions (Istan, Kourna, Vabbi…) are easy to tell apart
const REGION_TINT = ["#e0563f", "#d8b25a", "#6fb4e6", "#7cbf8a", "#a874d8", "#d466a4", "#47c1bf", "#e3a33a"];
const REGIONS = [...new Set(MISSIONS.filter(m => m.region).sort((a, b) => (a.story_order ?? 999) - (b.story_order ?? 999)).map(m => m.region))];
const regionTint = r => (r ? REGION_TINT[REGIONS.indexOf(r) % REGION_TINT.length] : "transparent");

const els = {
  name: $("f-name"), who: $("f-who"), camp: $("f-camp"), type: $("f-type"), region: $("f-region"),
  party: $("f-party"), elite: $("f-elite"), pvp: $("f-pvp"),
  list: $("list"), head: $("head"), count: $("count"), empty: $("empty"),
};
const state = { camps: new Set(), sort: "default", desc: false, mission: null, listHash: "" };

/* ---------- precompute ---------- */
for (const m of MISSIONS) {
  m._name = fold(m.name + " " + m.name_de);
  m._elites = m.bosses.filter(b => b.elite_skill_id != null && SKILL.get(b.elite_skill_id)?.elite)
    .map(b => ({ boss: b, skill: SKILL.get(b.elite_skill_id) }));
  m._who = fold([
    ...m.bosses.map(b => b.name + " " + (SKILL.get(b.elite_skill_id)?.name || "")),
    ...m.foes.map(f => f.name + " " + (f.group || "")), ...m.allies.map(a => a.name),
  ].join(" | "));
  m._party = parseInt(m.party_size, 10) || 0;
}

/* ---------- filters UI ---------- */
function options(select, values) {
  select.innerHTML += values.map(v => `<option>${esc(v)}</option>`).join("");
}

function buildFilterUI() {
  els.camp.innerHTML = CAMP_FILTERS.map(c =>
    `<button class="prof-chip" data-camp="${c}" aria-pressed="false" style="--c:var(${CAMP_COLOR[c]})">${c}</button>`).join("");
  els.camp.addEventListener("click", e => {
    const b = e.target.closest(".prof-chip");
    if (!b) return;
    const c = b.dataset.camp;
    if (e.metaKey || e.ctrlKey || e.shiftKey) state.camps.has(c) ? state.camps.delete(c) : state.camps.add(c);
    else if (state.camps.size === 1 && state.camps.has(c)) state.camps.clear();
    else { state.camps.clear(); state.camps.add(c); }
    syncChips();
    update();
  });

  options(els.type, TYPE_ORDER.filter(t => MISSIONS.some(m => m.type === t)));
  options(els.region, [...new Set(MISSIONS.map(m => m.region).filter(Boolean))].sort());
  options(els.party, [...new Set(MISSIONS.map(m => m.party_size).filter(Boolean))]
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10)));
  els.elite.innerHTML += PROFS.filter(([p]) => p !== "None").map(([p]) => `<option value="${p}">${p} elites</option>`).join("");

  for (const el of [els.name, els.who]) el.addEventListener("input", update);
  for (const el of [els.type, els.region, els.party, els.elite, els.pvp]) el.addEventListener("change", update);
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
      else if (document.activeElement === els.who && els.who.value) { els.who.value = ""; update(); }
    }
  });
}

function syncChips() {
  for (const b of els.camp.children) b.setAttribute("aria-pressed", state.camps.has(b.dataset.camp));
}

function resetFilters() {
  els.name.value = els.who.value = "";
  for (const el of [els.type, els.region, els.party, els.elite]) el.value = "";
  els.pvp.checked = false;
  state.camps.clear();
  syncChips();
}

/* ---------- filtering & sorting ---------- */
function currentFilters() {
  return {
    name: terms(els.name), who: terms(els.who), type: els.type.value, region: els.region.value,
    party: els.party.value, elite: els.elite.value, pvp: els.pvp.checked,
  };
}

function matches(m, f) {
  if (m.kind === "PvP" && !f.pvp && f.type !== "PvP") return false;
  if (f.name.length && !f.name.every(t => m._name.includes(t))) return false;
  if (f.who.length && !f.who.every(t => m._who.includes(t))) return false;
  if (state.camps.size && !state.camps.has(m.campaign)) return false;
  if (f.type && m.type !== f.type) return false;
  if (f.region && m.region !== f.region) return false;
  if (f.party && m.party_size !== f.party) return false;
  if (f.elite && !m._elites.some(e => e.skill.profession === f.elite)) return false;
  return true;
}

const campIdx = m => m.kind === "PvP" ? 99 : CAMPAIGNS.indexOf(m.campaign);
const storyIdx = m => m.story_order ?? 100 + TYPE_ORDER.indexOf(m.type);
const SORTS = {
  story: (a, b) => campIdx(a) - campIdx(b) || storyIdx(a) - storyIdx(b) || cmpStr(a.name, b.name),
  name: (a, b) => cmpStr(a.name, b.name),
  campaign: (a, b) => campIdx(a) - campIdx(b) || storyIdx(a) - storyIdx(b) || cmpStr(a.name, b.name),
  region: (a, b) => cmpStr(a.region, b.region) || SORTS.story(a, b),
  type: (a, b) => TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type) || SORTS.story(a, b),
  party: (a, b) => a._party - b._party || SORTS.story(a, b),
};

function sorted(list, f) {
  let cmp = SORTS[state.sort];
  if (!cmp) {
    const first = f.name[0];
    cmp = first
      ? (a, b) => (!fold(a.name).startsWith(first)) - (!fold(b.name).startsWith(first)) || SORTS.story(a, b)
      : SORTS.story;
  }
  const out = list.slice().sort(cmp);
  return state.desc ? out.reverse() : out;
}

/* ---------- rendering ---------- */
const skillLink = (s, label) =>
  `<a class="skill-link${s.elite ? " elite" : ""}" href="skills.html#skill=${s.id}" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${esc(label || s.name)}</a>`;
const missionLink = name => (BY_NAME.has(name) ? `<a href="${esc(missionHref(name))}">${esc(name)}</a>` : esc(name));

function eliteChips(m, f) {
  const shown = f.elite ? m._elites.filter(e => e.skill.profession === f.elite) : m._elites;
  const seen = new Set();
  return shown.filter(e => !seen.has(e.skill.id) && seen.add(e.skill.id))
    .map(e => `<a class="echip" href="skills.html#skill=${e.skill.id}" style="--pc:${profVar(e.skill.profession)}" title="${esc(e.boss.name)}">${skillIcon(e.skill.id, "sk-ic sm")}${highlight(e.skill.name, f.who)}</a>`)
    .join("");
}

const heroTag = m => {
  const h = HERO.get(m.hero);
  return h ? `<a class="m-hero" href="${esc(heroHref(h.name))}" title="Required hero"><img src="img/prof/${esc(h.profession)}.png" alt=""> ${esc(h.name)}</a>` : "";
};

function rowHTML(m, f) {
  const camp = m.kind === "PvP" ? "PvP" : CAMP_SHORT[m.campaign] || "";
  return `<div class="row mrow" data-name="${esc(m.name)}" style="--pc:var(${CAMP_COLOR[m.campaign] || "--p-none"});--rt:${regionTint(m.region)}">
    <div class="num dim">${m.story_label ?? ""}</div>
    <div class="name"><a class="mname" href="${esc(missionHref(m.name))}">${highlight(m.name, f.name)}</a>${heroTag(m)}</div>
    <div class="dim">${camp}</div>
    <div class="cell dim col-region">${esc(m.region || "")}</div>
    <div class="cell dim col-type">${m.type === "Mission" ? "" : esc(m.type)}</div>
    <div class="num col-party">${esc(m.party_size || "")}</div>
    <div class="echips">${eliteChips(m, f)}</div>
  </div>`;
}

// what Expert and Master ask for: the requirement column, or else the first extra column that changes with the tier
function goalHTML(r) {
  const tiers = Object.fromEntries(r.rows.filter(x => x.mode === "Normal").map(x => [x.tier, x]));
  if (!tiers.Master || !tiers.Expert) return "";
  let label = r.requirement, value = x => x.req;
  if (!label) {
    const i = r.extra.findIndex((_, k) => new Set(Object.values(tiers).map(x => x.extra[k])).size > 1 && !/points$/i.test(r.extra[k]));
    if (i < 0) return "";
    label = r.extra[i]; value = x => x.extra[i];
  }
  const goal = label === "Time"
    ? `Finish faster for better rewards: Master ${value(tiers.Master)}, Expert ${value(tiers.Expert)}.`
    : `The reward tier depends on ${label.toLowerCase()}: Master at ${value(tiers.Master)}, Expert at ${value(tiers.Expert)}, Standard otherwise.`;
  return `<p class="rgoal">${esc(goal.replace("< ", "under ").replace("> ", "over "))}</p>`;
}

// Eye of the North missions: reputation the first time and on repeats, and the same experience every time
function reputationHTML(r) {
  return `<p class="rgoal">${r.xp.toLocaleString("en")} XP for each completion.</p><table class="rewards">
    <tr><th></th><th class="num">${esc(r.reputation)}, first time</th><th class="num">Repeat</th></tr>
    ${r.rows.map(x => `<tr><td>${esc(x.mode)} mode</td><td class="num">${x.first.toLocaleString("en")}</td><td class="num">${x.repeat.toLocaleString("en")}</td></tr>`).join("")}</table>`;
}

function rewardsHTML(r) {
  if (!r) return '<p class="dim">No fixed rewards (score-based or none).</p>';
  if (r.reputation) return reputationHTML(r);
  const modes = ["Normal", "Hard"];
  const goal = goalHTML(r);
  const head = `<tr><th></th>${r.requirement ? `<th>${esc(r.requirement)}</th>` : ""}<th class="num">XP</th><th class="num">Gold</th><th class="num">Skill pts</th>${r.extra.map(x => `<th class="num">${esc(x)}</th>`).join("")}</tr>`;
  return goal + modes.map(mode => {
    const rows = r.rows.filter(x => x.mode === mode);
    if (!rows.length) return "";
    return `<div class="rmode">${mode} mode</div><table class="rewards">${head}${rows.map(x =>
      `<tr><td>${esc(x.tier)}</td>${r.requirement ? `<td>${esc(x.req)}</td>` : ""}<td class="num">${x.xp.toLocaleString("en")}</td><td class="num">${x.gold || "—"}</td><td class="num">${x.skill_points}</td>${x.extra.map(v => `<td class="num">${v}</td>`).join("")}</tr>`
    ).join("")}</table>`;
  }).join("");
}

function npcRow(n, f, extra = "") {
  return `<tr style="--pc:${profVar(n.profession)}"><td class="pdot" title="${esc(PROF_BY_SHORT[n.profession] || "")}">${esc(n.profession)}</td><td class="num dim">${esc(n.level)}</td><td>${highlight(n.name, f.who)}</td>${extra}</tr>`;
}

function groupedNpcs(list, f) {
  if (!list.length) return '<p class="dim">—</p>';
  let html = "", group;
  for (const n of list) {
    if (n.group !== group) {
      group = n.group;
      if (group) html += `<tr><td colspan="3" class="grp">${esc(group)}</td></tr>`;
    }
    html += npcRow(n, f);
  }
  return `<table class="npcs">${html}</table>`;
}

const bossLink = b => `<a href="${esc(bossHref(b.name))}">${esc(b.name)}</a>`;

/* ---------- one mission's page ---------- */
function missionPageHTML(m) {
  const f = { who: [] };
  const camp = m.kind === "PvP" ? "PvP" : m.campaign;
  const sub = [m.story_label && `Mission ${m.story_label}`, camp, m.region, m.type !== "Mission" && m.type].filter(Boolean).map(esc).join(" · ");
  const stats = [["Party", m.party_size], m.map_id && ["Map ID", m.map_id]].filter(x => x && x[1]);
  const before = MISSIONS.filter(x => x.leads_to === m.name);
  const outpost = OUTPOST.get(m.name);
  const hero = (m.hero || "").split(" and ").map(n => HERO.get(n)).filter(Boolean);
  // story missions are steps of their campaign's storyline, named by the German title (Eye of the North's as quests)
  const flowStep = m.story_order && (m.campaign === "Eye of the North" ? "q:" : "m:") + m.name_de;
  const builds = (window.GW_BUILDS?.teams || []).filter(t => t.mission === m.name);
  const story = [
    before.length && ["After", before.map(x => missionLink(x.name)).join(", ")],
    m.leads_to && ["Leads to", missionLink(m.leads_to)],
    outpost && ["Outpost", `<a href="locations.html#${new URLSearchParams({ place: outpost.name })}">${esc(outpost.name)}</a>`],
    hero.length && ["Required hero", hero.map(h => `<a href="${esc(heroHref(h.name))}"><img class="ip" src="img/prof/${esc(h.profession)}.png" alt=""> ${esc(h.name)}</a>`).join(" and ")],
  ].filter(Boolean);
  const bosses = m.bosses.length ? `<table class="npcs">${m.bosses.map(b => {
    const s = SKILL.get(b.elite_skill_id);
    return `<tr style="--pc:${profVar(b.profession)}"><td class="pdot" title="${esc(PROF_BY_SHORT[b.profession] || "")}">${esc(b.profession)}</td><td class="num dim">${esc(b.level)}</td><td>${bossLink(b)}</td><td>${s ? skillLink(s) : ""}</td></tr>`;
  }).join("")}</table>` : '<p class="dim">—</p>';
  return `<p class="back"><a href="#${state.listHash}">← All missions</a></p>
    <div class="sp-head" style="--pc:var(${CAMP_COLOR[m.campaign] || "--p-none"})">
      <div class="sp-title"><h2>${esc(m.name)}</h2><div class="sp-sub">${sub}</div></div>
      <div class="lstats">${stats.map(([k, v]) => `<span class="lstat"><small>${k}</small><b>${esc(v)}</b></span>`).join("")}</div>
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>Rewards</h4>${rewardsHTML(m.rewards)}</section>
        <section class="lbox"><h4>Bosses</h4>${bosses}</section>
        <section class="lbox"><h4>Foes</h4>${groupedNpcs(m.foes, f)}</section>
      </div>
      <div class="lside">
        ${story.length ? `<section class="lbox"><h4>Story</h4><ul class="lrows">${story.map(([k, v]) => `<li><span class="dim">${k}</span><span>${v}</span></li>`).join("")}</ul></section>` : ""}
        ${builds.length ? `<section class="lbox"><h4>Team builds</h4><ul class="lrows">${builds.map(t =>
          `<li><a href="builds.html#${new URLSearchParams({ team: t.id })}">${esc(t.name)}</a><span class="dim">${t.builds.length} heroes</span></li>`).join("")}</ul></section>` : ""}
        <section class="lbox"><h4>Allies</h4>${groupedNpcs(m.allies, f)}</section>
      </div>
    </div>
    <p class="llinks">${flowStep ? `<a href="quests.html#${new URLSearchParams({ c: m.campaign, q: flowStep })}">In the storyline →</a>` : ""}<a href="${esc(m.wiki_de)}" target="_blank" rel="noopener">guildwiki.de</a></p>`;
}

// the list, or one mission's page when the address names one
function render() {
  const m = state.mission && BY_NAME.get(state.mission);
  $("browse").hidden = !!m;
  $("mission").hidden = !m;
  if (m) {
    $("mission").innerHTML = missionPageHTML(m);
    document.title = `${m.name} · GW Missions`;
    window.scrollTo(0, 0);
  } else {
    document.title = "GW Missions";
    update();
    window.dispatchEvent(new Event("resize"));  // the sticky bars measure the filters, hidden until now
  }
}

function update() {
  const f = currentFilters();
  const visible = sorted(MISSIONS.filter(m => matches(m, f)), f);
  const total = MISSIONS.filter(m => f.pvp || m.kind !== "PvP").length;
  els.count.textContent = `${visible.length} / ${total}`;
  els.empty.hidden = visible.length > 0;
  els.list.innerHTML = visible.map(m => rowHTML(m, f)).join("");
  for (const b of els.head.querySelectorAll("button[data-sort]")) {
    b.classList.toggle("sorted", b.dataset.sort === state.sort);
    b.classList.toggle("desc", b.dataset.sort === state.sort && state.desc);
  }
  writeHash(f);
}

// a click anywhere on a row opens the mission, except on the row's own links
els.list.addEventListener("click", e => {
  const row = e.target.closest(".row");
  if (row && !e.target.closest("a")) location.hash = new URLSearchParams({ mission: row.dataset.name });
});

/* ---------- URL state ---------- */
function writeHash(f) {
  const p = new URLSearchParams();
  if (els.name.value) p.set("q", els.name.value);
  if (els.who.value) p.set("w", els.who.value);
  if (state.camps.size) p.set("c", [...state.camps].join(","));
  if (f.type) p.set("ty", f.type);
  if (f.region) p.set("r", f.region);
  if (f.party) p.set("n", f.party);
  if (f.elite) p.set("e", f.elite);
  if (f.pvp) p.set("pvp", "1");
  if (state.sort !== "default") p.set("sort", (state.desc ? "-" : "") + state.sort);
  const h = p.toString();
  state.listHash = h;  // where "All missions" returns to from a mission's page
  history.replaceState(null, "", h ? "#" + h : location.pathname);
}

function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  els.name.value = p.get("q") || "";
  els.who.value = p.get("w") || "";
  state.camps = new Set((p.get("c") || "").split(",").filter(Boolean));
  syncChips();
  els.type.value = p.get("ty") || "";
  els.region.value = p.get("r") || "";
  els.party.value = p.get("n") || "";
  els.elite.value = p.get("e") || "";
  els.pvp.checked = p.get("pvp") === "1";
  const sort = p.get("sort") || "default";
  state.desc = sort.startsWith("-");
  state.sort = sort.replace(/^-/, "");
  state.mission = p.get("mission") || p.get("open") || null;  // "open" is how older links named a mission
}

buildFilterUI();
readHash();
render();
stickHeadBelowFilters();
window.addEventListener("hashchange", () => { readHash(); render(); });
