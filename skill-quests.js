"use strict";

const TABS = [1, 2, 3, 4, 0];
const SKILL_QUESTS = Object.values(QUESTS).filter(q => q.skills?.length && q.type !== "primary");
for (const q of SKILL_QUESTS) {
  q._skills = q.skills.map(id => SKILLS[id]).filter(Boolean);
  q._profs = [...new Set(q._skills.map(s => s.profession))].filter(p => p);
  q._camp = questCampaign(q);
  q._region = questRegion(q);
  q._k = fold([q.name, ...questGivers(q).map(n => n.name), ...questPlaces(q).map(l => l.name), q._region?.name, ...q._skills.map(s => s.name)].join(" "));
}

function rowHTML(q, ts) {
  const skills = q._skills.map(s => `<a class="sq-skill${s.elite ? " elite" : ""}" href="${HREF.skill(s.id)}" style="--pc:${profVar(s.profession)}" title="${PROFS[s.profession]} · ${esc(ATTRIBUTES[s.attribute] || "")}">
      <img src="img/skills/${s.id}.jpg" alt="" loading="lazy" onerror="this.remove()">${highlight(s.name, ts)}</a>`).join("");
  const giver = questGivers(q)[0];
  return `<div class="sq-row">
    <div class="sq-q">
      <div class="sq-name"><span class="sq-profs">${q._profs.map(p => profIcon(p)).join("")}</span><a href="${HREF.quest(q.id)}">${highlight(q.name, ts)}</a></div>
      <div class="dim">${[giver && esc(giver.name), giver?.location && LINK.place(giver.location)].filter(Boolean).join(" — ")}${q.requires?.length ? ` · after ${q.requires.map(i => LINK.quest(i)).join(", ")}` : ""}</div>
    </div>
    <div class="sq-skills">${skills}</div>
  </div>`;
}

// one profession at a time: quests with a skill for it, or with "Only", quests whose skills are all for it
const state = { prof: null };
const profMatch = q => !state.prof || ($("only").checked ? q._profs.length === 1 && q._profs[0] === state.prof : q._profs.includes(state.prof));

function render() {
  const ts = terms($("find"));
  const list = SKILL_QUESTS.filter(q => profMatch(q) && ts.every(t => q._k.includes(t)));
  for (const b of $("profs").children) b.setAttribute("aria-pressed", +b.dataset.v === state.prof);
  $("count").textContent = `${list.length} quests`;
  const groups = new Map();
  for (const q of list) {
    const k = `${q._camp}|${q._region?.id ?? ""}`;
    (groups.get(k) || groups.set(k, []).get(k)).push(q);
  }
  let html = "", camp = null;
  for (const k of [...groups.keys()].sort((a, b) => {
    const [ca, ra] = a.split("|"), [cb, rb] = b.split("|");
    return TABS.indexOf(+ca) - TABS.indexOf(+cb) || cmpStr(REGIONS[ra]?.name, REGIONS[rb]?.name);
  })) {
    const [c, r] = k.split("|");
    if (c !== camp) { html += `<h2 class="sq-camp">${CAMPAIGNS[c]}</h2>`; camp = c; }
    html += `<h3 class="sq-region">${esc(REGIONS[r]?.name || "—")}</h3>` + groups.get(k).sort((a, b) => cmpStr(a.name, b.name)).map(q => rowHTML(q, ts)).join("");
  }
  $("list").innerHTML = html || '<p class="dim">No skill quests match.</p>';
  const h = new URLSearchParams();
  if ($("find").value) h.set("q", $("find").value);
  if (state.prof) h.set("p", state.prof);
  if (state.prof && $("only").checked) h.set("only", "1");
  history.replaceState(null, "", h.size ? "#" + h : location.pathname);
}

// Paragons and Dervishes get no skills from these quests, only from Nightfall's story quests
$("profs").innerHTML = [1, 2, 3, 4, 5, 6, 7, 8].map(p => `<button class="prof-chip" data-v="${p}" aria-pressed="false" style="--c:${profVar(p)}">${PROFS[p]}</button>`).join("");
$("profs").addEventListener("click", e => {
  const b = e.target.closest("[data-v]");
  if (!b) return;
  state.prof = state.prof === +b.dataset.v ? null : +b.dataset.v;
  render();
});
const start = new URLSearchParams(location.hash.slice(1));
$("find").value = start.get("q") || "";
state.prof = +start.get("p") || null;
$("only").checked = start.get("only") === "1";
$("find").addEventListener("input", render);
$("only").addEventListener("change", render);
render();
