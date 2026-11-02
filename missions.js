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
const crName = x => CREATURES[x.creature]?.name || "";

for (const m of ALL) {
  m._name = fold(`${m.name} ${aliasText("locations", m.id)} ${aliasText("locations", m.outpost)}`);
  m._who = fold([...(m.bosses || []).map(b => `${crName(b)} ${(CREATURES[b.creature]?.elites || []).map(e => SKILLS[e]?.name).join(" ")}`),
    ...(m.foes || []).map(f => `${crName(f)} ${CREATURES[f.creature]?.group || ""}`), ...(m.allies || []).map(crName)].join(" | "));
}

const els = { name: $("f-name"), who: $("f-who"), camp: $("f-camp"), type: $("f-type"), region: $("f-region"), party: $("f-party"),
  elite: $("f-elite"), pvp: $("f-pvp"), list: $("list"), head: $("head"), count: $("count"), empty: $("empty") };
const state = { camps: new Set(), sort: "", desc: false, listHash: "" };

/* ---------- filters ---------- */
els.camp.innerHTML = [1, 2, 3, 4].map(c => `<button class="prof-chip" data-v="${c}" aria-pressed="false" style="--c:var(${CAMP_COLOR[c]})">${CAMPAIGNS[c]}</button>`).join("");
chipToggle(els.camp, state.camps, update);
els.type.innerHTML += KIND_ORDER.filter(k => ALL.some(m => m.kind === k)).map(k => `<option value="${k}">${KINDS[k]}</option>`).join("");
els.region.innerHTML += REGION_IDS.filter(r => r != null).map(r => [r, REGIONS[r].name]).sort((a, b) => cmpStr(a[1], b[1]))
  .map(([r, n]) => `<option value="${r}">${esc(n)}</option>`).join("");
els.party.innerHTML += [...new Set(ALL.map(party).filter(Boolean))].sort((a, b) => a - b).map(n => `<option>${n}</option>`).join("");
els.elite.innerHTML += PROFS.slice(1).map((p, i) => `<option value="${i + 1}">${p} elites</option>`).join("");
for (const el of [els.name, els.who]) el.addEventListener("input", update);
for (const el of [els.type, els.region, els.party, els.elite, els.pvp]) el.addEventListener("change", update);
$("reset").addEventListener("click", () => {
  els.name.value = els.who.value = els.type.value = els.region.value = els.party.value = els.elite.value = "";
  els.pvp.checked = false; state.camps.clear(); syncChips(els.camp, state.camps); update(); els.name.focus();
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
  && (!f.party || party(m) === +f.party) && (!f.elite || elites(m).some(([, s]) => s.profession === +f.elite));
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
  return elites(m).filter(([, s]) => (!f.elite || s.profession === +f.elite) && !seen.has(s.id) && seen.add(s.id)).map(([c, s]) => {
    return `<a class="echip" href="${HREF.skill(s.id)}" style="--pc:${profVar(s.profession)}" title="${esc(c.name)}">${skillIcon(s.id, "sk-ic sm")}${highlight(s.name, f.who)}</a>`;
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
  </div>`;
}
function update() {
  const f = { name: terms(els.name), who: terms(els.who), type: els.type.value, region: els.region.value, party: els.party.value, elite: els.elite.value, pvp: els.pvp.checked };
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
    ["e", f.elite], ["pvp", f.pvp ? "1" : ""], ["sort", state.sort && (state.desc ? "-" : "") + state.sort]]) if (v) p.set(k, v);
  state.listHash = p.toString();  // where "All missions" returns to from a mission's page
  history.replaceState(null, "", state.listHash ? "#" + state.listHash : location.pathname);
}
// a click anywhere on a row opens the mission, except on the row's own links
els.list.addEventListener("click", e => {
  const row = e.target.closest(".row");
  if (row && !e.target.closest("a")) location.hash = new URLSearchParams({ mission: row.dataset.id });
});

/* ---------- one mission's page ---------- */
const num = n => (n ? n.toLocaleString("en") : "—");
function rewardsHTML(r) {
  if (!r) return '<p class="dim">No fixed rewards (score-based or none).</p>';
  if (r.points) return `<p class="rgoal">${num(r.xp)} XP for each completion.</p><table class="rewards">
    <tr><th></th><th class="num">${esc(r.points)}, first time</th><th class="num">Repeat</th></tr>
    ${["normal", "hard"].filter(k => r[k]).map(k => `<tr><td>${k === "normal" ? "Normal" : "Hard"} mode</td><td class="num">${num(r[k].first)}</td><td class="num">${num(r[k].repeat)}</td></tr>`).join("")}</table>`;
  const tiers = [...new Set(["normal", "hard"].flatMap(k => Object.keys(r[k] || {})))];
  const head = `<tr><th>${tiers.includes("bonus") ? "For" : "Tier"}</th>${r.by ? `<th>${esc(r.by[0].toUpperCase() + r.by.slice(1))}</th>` : ""}<th class="num">XP</th><th class="num">Gold</th><th class="num">Skill pts</th>${(r.extra || []).map(x => `<th class="num">${esc(x)}</th>`).join("")}</tr>`;
  return ["normal", "hard"].filter(k => r[k]).map(k => `<div class="rmode">${k === "normal" ? "Normal" : "Hard"} mode</div><table class="rewards">${head}${
    Object.entries(r[k]).map(([t, [xp, gold, sp, ...extra]]) => `<tr><td>${esc(t[0].toUpperCase() + t.slice(1))}</td>${r.by ? `<td>${esc(r.tiers?.[t] || "")}</td>` : ""}<td class="num">${num(xp)}</td><td class="num">${num(gold)}</td><td class="num">${sp}</td>${extra.map(v => `<td class="num">${v}</td>`).join("")}</tr>`).join("")}</table>`).join("");
}
// foes and allies, by group: [profession, level, name]
function creaturesHTML(list, boss = false) {
  if (!list?.length) return '<p class="dim">—</p>';
  let html = "", group;
  for (const x of list) {
    const c = CREATURES[x.creature] || {};
    if (!boss && c.group !== group) { group = c.group; if (group) html += `<tr><td colspan="3" class="grp">${esc(group)}</td></tr>`; }
    const level = x.level ? `${x.level[0]}${x.level[1] ? ` (${x.level[1]})` : ""}` : "";
    html += `<tr style="--pc:${profVar(c.profession)}"><td class="pdot" title="${PROFS[c.profession] || ""}">${c.profession ? PROF_ABBR[c.profession] : ""}</td><td class="num dim">${level}</td>
      <td>${boss ? LINK.boss(x.creature) : esc(c.name)}</td>${boss ? `<td>${(c.elites || []).filter(e => SKILLS[e]).map(e => LINK.skill(e)).join(" ")}</td>` : ""}</tr>`;
  }
  return `<table class="npcs">${html}</table>`;
}
// when the Zaishen Mission is next about this mission, or how long the current one still runs
const fmtZDay = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" });
function zaishenNote(m) {
  const r = ROTATIONS["zaishen-mission"];
  if (!r?.entries.some(e => e.mission === m.id)) return "";
  const now = Date.now(), k = Rotation.period(r, now);
  let i = 0;
  while (Rotation.entry(r, k + i).mission !== m.id) i++;
  return i ? `The next <a href="rotations">Zaishen Mission</a> here is on ${fmtZDay.format(Rotation.startsAt(r, k + i))}, in ${i} day${i > 1 ? "s" : ""}.`
    : `This is today's <a href="rotations">Zaishen Mission</a>, for another ${timeLeft(Rotation.endsAt(r, now) - now)}.`;
}
function missionPageHTML(m) {
  const sub = [m.label && `Mission ${m.label}`, m.kind === "pvp" ? "PvP" : CAMPAIGNS[camp(m)], REGIONS[regionId(m)]?.name, m.kind !== "story" && KINDS[m.kind]].filter(Boolean).map(esc).join(" · ");
  const before = ALL.filter(x => (x.leads_to || []).includes(m.outpost ?? m.id));
  const heroes = (m.hero || []).map(i => HEROES[i]).filter(Boolean);
  const teams = (BUILDDATA?.teams || []).filter(t => t.mission === m.id);
  const bonus = (m.objectives || []).find(o => o[2]);
  const story = [
    before.length && ["After", before.map(x => LINK.mission(x.id)).join(", ")],
    m.leads_to?.length && ["Leads to", m.leads_to.map(whereLink).join(", ")],
    m.outpost && m.outpost !== m.id && ["Outpost", LINK.place(m.outpost)],
    heroes.length && ["Required hero", heroes.map(heroChip).join(" and ")],
  ].filter(Boolean);
  const notes = [zaishenNote(m)].filter(Boolean);
  const steps = QUESTDATA?.storylines?.find(s => (s.nodes || []).some(n => n.mission === m.id) || (s.parts || []).some(p => p.steps.some(n => n.mission === m.id)));
  return `<p class="back"><a href="#${state.listHash}">← All missions</a></p>
    <div class="sp-head" style="--pc:var(${CAMP_COLOR[camp(m)]})">
      <div class="sp-title"><h2>${esc(m.name)}</h2><div class="sp-sub">${sub}</div></div>
      ${party(m) ? `<div class="lstats"><span class="lstat"><small>Party</small><b>${party(m)}</b></span></div>` : ""}
    </div>
    ${notes.length ? `<ul class="lnotes">${notes.map(n => `<li>${n}</li>`).join("")}</ul>` : ""}
    <div class="lgrid">
      <div class="lside">
        ${m.objectives?.length ? `<section class="lbox"><h4>Objectives</h4><ul class="qp-obj">${m.objectives.map(([d, o, b]) =>
          `<li style="--d:${d}"${b ? ' class="bonus"' : ""}>${b ? "<b>Bonus:</b> " : ""}${esc(o)}</li>`).join("")}</ul></section>` : ""}
        <section class="lbox"><h4>Rewards</h4>${bonus ? `<p class="rgoal"><b>Bonus:</b> ${esc(bonus[1])}</p>` : ""}${rewardsHTML(m.rewards)}</section>
        <section class="lbox"><h4>Bosses</h4>${creaturesHTML(m.bosses, true)}</section>
        <section class="lbox"><h4>Foes</h4>${creaturesHTML(m.foes)}</section>
      </div>
      <div class="lside">
        ${m.kind !== "pvp" ? mapHTML([m.id]) : ""}
        ${story.length ? `<section class="lbox"><h4>Story</h4><ul class="lrows">${story.map(([k, v]) => `<li><span class="dim">${k}</span><span>${v}</span></li>`).join("")}</ul></section>` : ""}
        ${teams.length ? `<section class="lbox"><h4>Team builds</h4><ul class="lrows">${teams.map(t =>
          `<li><a href="builds${hash({ team: t.id })}">${esc(t.name)}</a><span class="dim">${t.builds.length} heroes</span></li>`).join("")}</ul></section>` : ""}
        <section class="lbox"><h4>Allies</h4>${creaturesHTML(m.allies)}</section>
      </div>
    </div>
    <p class="llinks">${steps ? `<a href="quests${hash({ c: steps.campaign, m: m.id })}">In the storyline →</a>` : ""}${m.wiki_en ? `<a href="${esc(m.wiki_en)}" target="_blank" rel="noopener">Guild Wars Wiki (archived)</a>` : ""}${m.wiki ? `<a href="${esc(m.wiki)}" target="_blank" rel="noopener">guildwiki.de</a>` : ""}</p>`;
}

// the list, or one mission's page when the address names one
function render() {
  const p = new URLSearchParams(location.hash.slice(1));
  els.name.value = p.get("q") || ""; els.who.value = p.get("w") || "";
  state.camps.clear(); for (const v of (p.get("c") || "").split(",").filter(Boolean)) state.camps.add(v);
  syncChips(els.camp, state.camps);
  els.type.value = p.get("ty") || ""; els.region.value = p.get("r") || ""; els.party.value = p.get("n") || ""; els.elite.value = p.get("e") || "";
  els.pvp.checked = p.get("pvp") === "1";
  state.sort = (p.get("sort") || "").replace(/^-/, ""); state.desc = (p.get("sort") || "").startsWith("-");
  const m = MISSIONS[p.get("mission")];
  $("browse").hidden = !!m;
  $("mission").hidden = !m;
  if (m) {
    $("mission").innerHTML = missionPageHTML(m);
    initMaps($("mission"));
    document.title = `${m.name} · GW Missions`;
    window.scrollTo(0, 0);
  } else {
    document.title = "GW Missions";
    update();
    window.dispatchEvent(new Event("resize"));  // the sticky bars measure the filters, hidden until now
  }
}
render();
stickHeadBelowFilters();
window.addEventListener("hashchange", render);
