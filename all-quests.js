"use strict";

const { quests: QUESTS } = window.GW_QUESTS;
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const CAMP_FILTERS = ["Prophecies", "Factions", "Nightfall", "Eye of the North", "Core"];
const CAMP_COLOR = { Prophecies: "--p-paragon", Factions: "--p-ritualist", Nightfall: "--p-elementalist", "Eye of the North": "--p-monk" };
const TYPE_ORDER = ["Primary", "Secondary", "Attribute", "Instance", "Event"];
// secondary quests the storylines go through
const STORY = new Set(window.GW_QUESTS.flows.flatMap(f => [...f.nodes, ...(f.parts || []).flatMap(p => p.steps)].map(n => n.id)));
const COUNT = new Map();
for (const q of QUESTS) COUNT.set(q.name, (COUNT.get(q.name) || 0) + 1);

for (const q of QUESTS) {
  q._camp = q.campaign || "Core";
  q._skills = q.skills.map(id => SKILL.get(id)).filter(Boolean);
  q._k = fold([q.name, q.giver, q.where, q.region, ...q._skills.map(s => s.name), ...q.rewards, ...q.missions, aliasText(q.name, q.where)].join(" | "));
  q._href = questHref(q.name, COUNT.get(q.name) > 1 ? q.campaign : null);
}

const els = { name: $("f-name"), camp: $("f-camp"), type: $("f-type"), region: $("f-region"), skill: $("f-skill"),
  rep: $("f-rep"), mis: $("f-mis"), list: $("list"), count: $("count"), empty: $("empty") };
const state = { camps: new Set() };

els.camp.innerHTML = CAMP_FILTERS.map(c =>
  `<button class="prof-chip" data-camp="${c}" aria-pressed="false" style="--c:var(${CAMP_COLOR[c] || "--p-none"})">${c}</button>`).join("");
els.type.innerHTML += TYPE_ORDER.filter(t => QUESTS.some(q => q.type === t)).map(t => `<option>${t}</option>`).join("");
els.region.innerHTML += [...new Set(QUESTS.map(q => q.region).filter(Boolean))].sort(cmpStr).map(r => `<option>${esc(r)}</option>`).join("");

els.camp.addEventListener("click", e => {
  const b = e.target.closest(".prof-chip");
  if (!b) return;
  const c = b.dataset.camp;
  if (e.metaKey || e.ctrlKey || e.shiftKey) state.camps.has(c) ? state.camps.delete(c) : state.camps.add(c);
  else if (state.camps.size === 1 && state.camps.has(c)) state.camps.clear();
  else { state.camps.clear(); state.camps.add(c); }
  update();
});
els.name.addEventListener("input", update);
for (const el of [els.type, els.region, els.skill, els.rep, els.mis]) el.addEventListener("change", update);
$("reset").addEventListener("click", () => {
  els.name.value = els.type.value = els.region.value = ""; els.skill.checked = els.rep.checked = els.mis.checked = false;
  state.camps.clear(); update(); els.name.focus();
});
document.addEventListener("keydown", e => {
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); els.name.focus(); els.name.select(); }
  else if (e.key === "Escape" && document.activeElement === els.name && els.name.value) { els.name.value = ""; update(); }
});

function rowHTML(q, ts) {
  const money = [q.xp && `${q.xp.toLocaleString("en")} XP`, q.gold && `${q.gold.toLocaleString("en")} g`].filter(Boolean).join(" · ");
  const skills = q._skills.map(s => `<span class="echip" style="--pc:${profVar(s.profession)}" title="${esc(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${highlight(s.name, ts)}</span>`).join("");
  return `<a class="row aqrow" href="${esc(q._href)}" style="--pc:var(${CAMP_COLOR[q.campaign] || "--p-none"})">
    <div class="name">${highlight(q.name, ts)}${q.type === "Secondary" && STORY.has("q:" + q.name_de) ? '<span class="tag" title="A secondary quest the campaign\'s storyline goes through">Story</span>' : ""}${q.repeatable ? '<span class="tag">Repeatable</span>' : ""}${q.missions.length ? `<span class="tag" title="Leads to ${esc(q.missions.join(", "))}">→ Mission</span>` : ""}</div>
    <div class="dim col-type">${esc(q.type)}</div>
    <div class="dim">${esc(CAMP_SHORT[q._camp] || q._camp)}</div>
    <div class="cell dim col-region">${esc(q.region || "")}</div>
    <div class="cell dim col-giver">${highlight(q.giver || "", ts)}</div>
    <div class="aq-rew">${skills}${money ? `<span class="dim">${money}</span>` : ""}</div>
  </a>`;
}

const typeIdx = q => { const i = TYPE_ORDER.indexOf(q.type); return i < 0 ? 99 : i; };
function update() {
  const ts = terms(els.name);
  const list = QUESTS.filter(q => ts.every(t => q._k.includes(t))
    && (!state.camps.size || state.camps.has(q._camp))
    && (!els.type.value || q.type === els.type.value)
    && (!els.region.value || q.region === els.region.value)
    && (!els.skill.checked || q._skills.length)
    && (!els.rep.checked || q.repeatable)
    && (!els.mis.checked || q.missions.length))
    .sort((a, b) => (ts[0] ? (!fold(a.name).startsWith(ts[0])) - (!fold(b.name).startsWith(ts[0])) : 0)
      || CAMP_FILTERS.indexOf(a._camp) - CAMP_FILTERS.indexOf(b._camp) || cmpStr(a.region, b.region)
      || typeIdx(a) - typeIdx(b) || cmpStr(a.name, b.name));
  for (const c of els.camp.children) c.setAttribute("aria-pressed", state.camps.has(c.dataset.camp));
  els.count.textContent = `${list.length} / ${QUESTS.length}`;
  els.empty.hidden = list.length > 0;
  els.list.innerHTML = list.map(q => rowHTML(q, ts)).join("");
  const p = new URLSearchParams();
  if (els.name.value) p.set("q", els.name.value);
  if (state.camps.size) p.set("c", [...state.camps].join(","));
  if (els.type.value) p.set("ty", els.type.value);
  if (els.region.value) p.set("r", els.region.value);
  if (els.skill.checked) p.set("sk", "1");
  if (els.rep.checked) p.set("rep", "1");
  if (els.mis.checked) p.set("mis", "1");
  history.replaceState(null, "", p.size ? "#" + p : location.pathname);
}

function readHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  els.name.value = h.get("q") || "";
  state.camps = new Set((h.get("c") || "").split(",").filter(Boolean));
  els.type.value = h.get("ty") || "";
  els.region.value = h.get("r") || "";
  els.skill.checked = h.get("sk") === "1";
  els.rep.checked = h.get("rep") === "1";
  els.mis.checked = h.get("mis") === "1";
  update();
}

readHash();
stickHeadBelowFilters();
window.addEventListener("hashchange", readHash);
