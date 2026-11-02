"use strict";

const ALL = Object.values(QUESTS);
const TABS = [1, 2, 3, 4, 0];
const TYPE_ORDER = ["primary", "secondary", "attribute", "instance", "event"];
const cap = s => s[0].toUpperCase() + s.slice(1);
// secondary quests the storylines go through
const STORY = new Set((QUESTDATA.storylines || []).flatMap(s => [...(s.nodes || []), ...(s.parts || []).flatMap(p => p.steps)]).map(n => n.quest).filter(Boolean));
for (const q of ALL) {
  q._camp = questCampaign(q);
  q._region = questRegion(q);
  q._giver = [...new Set(questGivers(q).map(n => n.name))].join(", ");
  q._k = fold([q.name, EVENTS[q.event]?.name, q._giver, ...questPlaces(q).map(l => l.name), q._region?.name,
    ...(q.skills || []).map(id => SKILLS[id]?.name), ...(q.rewards || []), ...(q.missions || []).map(locName)].join(" | "));
}

const els = { name: $("f-name"), camp: $("f-camp"), type: $("f-type"), region: $("f-region"), skill: $("f-skill"),
  rep: $("f-rep"), mis: $("f-mis"), list: $("list"), count: $("count"), empty: $("empty") };
const camps = new Set();
els.camp.innerHTML = TABS.map(c => `<button class="prof-chip" data-v="${c}" aria-pressed="false" style="--c:var(${CAMP_COLOR[c]})">${CAMPAIGNS[c]}</button>`).join("");
chipToggle(els.camp, camps, update);
els.type.innerHTML += TYPE_ORDER.filter(t => ALL.some(q => q.type === t)).map(t => `<option value="${t}">${cap(t)}</option>`).join("");
els.region.innerHTML += [...new Set(ALL.map(q => q._region).filter(Boolean))].sort((a, b) => cmpStr(a.name, b.name))
  .map(r => `<option value="${r.id}">${esc(r.name)}</option>`).join("");
els.name.addEventListener("input", update);
for (const el of [els.type, els.region, els.skill, els.rep, els.mis]) el.addEventListener("change", update);
$("reset").addEventListener("click", () => {
  els.name.value = els.type.value = els.region.value = ""; els.skill.checked = els.rep.checked = els.mis.checked = false;
  camps.clear(); syncChips(els.camp, camps); update(); els.name.focus();
});
searchKeys(els.name, update);

function rowHTML(q, ts) {
  const money = [q.xp && `${q.xp.toLocaleString("en")} XP`, q.gold && `${q.gold.toLocaleString("en")} g`].filter(Boolean).join(" · ");
  const skills = (q.skills || []).filter(id => SKILLS[id]).map(id => { const s = SKILLS[id];
    return `<span class="echip" style="--pc:${profVar(s.profession)}" title="${PROFS[s.profession]}">${skillIcon(id, "sk-ic sm")}${highlight(s.name, ts)}</span>`; }).join("");
  return `<a class="row aqrow" href="${HREF.quest(q.id)}" style="--pc:var(${CAMP_COLOR[q._camp]})">
    <div class="name">${highlight(q.name, ts)}${q.type === "secondary" && STORY.has(q.id) ? '<span class="tag" title="A secondary quest the campaign\'s storyline goes through">Story</span>' : ""}${q.event ? `<span class="tag">${esc(EVENTS[q.event]?.name)}</span>` : ""}${q.repeatable ? '<span class="tag">Repeatable</span>' : ""}${q.missions?.length ? '<span class="tag">→ Mission</span>' : ""}</div>
    <div class="dim col-type">${cap(q.type)}</div>
    <div class="dim">${CAMP_SHORT[q._camp]}</div>
    <div class="cell dim col-region">${esc(q._region?.name || "")}</div>
    <div class="cell dim col-giver">${highlight(q._giver, ts)}</div>
    <div class="aq-rew">${skills}${money ? `<span class="dim">${money}</span>` : ""}</div>
  </a>`;
}

const typeIdx = q => { const i = TYPE_ORDER.indexOf(q.type); return i < 0 ? 99 : i; };
function update() {
  const ts = terms(els.name);
  const list = ALL.filter(q => ts.every(t => q._k.includes(t)) && (!camps.size || camps.has(String(q._camp)))
    && (!els.type.value || q.type === els.type.value) && (!els.region.value || q._region?.id === +els.region.value)
    && (!els.skill.checked || q.skills?.length) && (!els.rep.checked || q.repeatable) && (!els.mis.checked || q.missions?.length))
    .sort((a, b) => (ts[0] ? (!fold(a.name).startsWith(ts[0])) - (!fold(b.name).startsWith(ts[0])) : 0)
      || TABS.indexOf(a._camp) - TABS.indexOf(b._camp) || cmpStr(a._region?.name, b._region?.name) || typeIdx(a) - typeIdx(b) || cmpStr(a.name, b.name));
  els.count.textContent = `${list.length} / ${ALL.length}`;
  els.empty.hidden = list.length > 0;
  els.list.innerHTML = list.map(q => rowHTML(q, ts)).join("");
  const p = new URLSearchParams();
  for (const [k, v] of [["q", els.name.value], ["c", [...camps].join(",")], ["ty", els.type.value], ["r", els.region.value],
    ["sk", els.skill.checked ? "1" : ""], ["rep", els.rep.checked ? "1" : ""], ["mis", els.mis.checked ? "1" : ""]]) if (v) p.set(k, v);
  history.replaceState(null, "", p.size ? "#" + p : location.pathname);
}
function readHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  els.name.value = h.get("q") || "";
  camps.clear(); for (const v of (h.get("c") || "").split(",").filter(Boolean)) camps.add(v);
  syncChips(els.camp, camps);
  els.type.value = h.get("ty") || ""; els.region.value = h.get("r") || "";
  els.skill.checked = h.get("sk") === "1"; els.rep.checked = h.get("rep") === "1"; els.mis.checked = h.get("mis") === "1";
  update();
}
readHash();
stickHeadBelowFilters();
window.addEventListener("hashchange", readHash);
