"use strict";

const { quests: QUESTS } = window.GW_QUESTS;
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const ORDER = ["Prophecies", "Factions", "Nightfall", "Eye of the North", "Core"];

const SKILL_QUESTS = QUESTS.filter(q => q.skills.length && q.type !== "Primary");
for (const q of SKILL_QUESTS) {
  q._skills = q.skills.map(id => SKILL.get(id)).filter(Boolean);
  q._profs = [...new Set(q._skills.map(s => s.profession))].filter(p => p !== "None");
  q._k = fold([q.name, q.giver, q.where, q.region, ...q._skills.map(s => s.name)].join(" "));
}

const profIcon = p => `<img class="qp" src="img/prof/${p}.png" alt="${p}" title="${p}">`;

function rowHTML(q, ts) {
  const skills = q._skills.map(s => `<a class="sq-skill${s.elite ? " elite" : ""}" href="skills.html#skill=${s.id}" style="--pc:${profVar(s.profession)}" title="${esc(s.profession)} · ${esc(s.attribute)}">
      <img src="img/skills/${s.id}.jpg" alt="" loading="lazy" onerror="this.remove()">${highlight(s.name, ts)}</a>`).join("");
  return `<div class="sq-row">
    <div class="sq-q">
      <div class="sq-name"><span class="sq-profs">${q._profs.map(profIcon).join("")}</span>${highlight(q.name, ts)}</div>
      <div class="dim">${esc([q.giver, q.where].filter(Boolean).join(" — "))}${q.requires.length ? ` · after ${q.requires.map(esc).join(", ")}` : ""}</div>
    </div>
    <div class="sq-skills">${skills}</div>
  </div>`;
}

// one profession at a time: quests with a skill for it, or with "Only", quests whose skills are all for it
const state = { prof: null };
const profMatch = q => !state.prof
  || ($("only").checked ? q._profs.length === 1 && q._profs[0] === state.prof : q._profs.includes(state.prof));

function render() {
  const ts = terms($("find"));
  const list = SKILL_QUESTS.filter(q => profMatch(q) && ts.every(t => q._k.includes(t)));
  for (const b of $("profs").children) b.setAttribute("aria-pressed", b.dataset.prof === state.prof);
  $("count").textContent = `${list.length} quests`;
  const groups = new Map();
  for (const q of list) {
    const key = `${q.campaign || "Core"}|${q.region || ""}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(q);
  }
  const keys = [...groups.keys()].sort((a, b) => {
    const [ca, ra] = a.split("|"), [cb, rb] = b.split("|");
    return ORDER.indexOf(ca) - ORDER.indexOf(cb) || cmpStr(ra, rb);
  });
  let html = "", camp = null;
  for (const key of keys) {
    const [c, region] = key.split("|");
    if (c !== camp) { html += `<h2 class="sq-camp">${esc(c)}</h2>`; camp = c; }
    html += `<h3 class="sq-region">${esc(region || "—")}</h3>`
      + groups.get(key).sort((a, b) => cmpStr(a.name, b.name)).map(q => rowHTML(q, ts)).join("");
  }
  $("list").innerHTML = html || '<p class="dim">No skill quests match.</p>';
  const h = new URLSearchParams();
  if ($("find").value) h.set("q", $("find").value);
  if (state.prof) h.set("p", state.prof);
  if (state.prof && $("only").checked) h.set("only", "1");
  history.replaceState(null, "", h.size ? "#" + h : location.pathname);
}

// Paragons and Dervishes get no skills from these quests, only from Nightfall's story quests
const NO_QUESTS = ["None", "Paragon", "Dervish"];
$("profs").innerHTML = PROFS.filter(([p]) => !NO_QUESTS.includes(p)).map(([p]) =>
  `<button class="prof-chip" data-prof="${p}" aria-pressed="false" style="--c:${profVar(p)}">${p}</button>`).join("");
$("profs").addEventListener("click", e => {
  const b = e.target.closest(".prof-chip");
  if (!b) return;
  state.prof = state.prof === b.dataset.prof ? null : b.dataset.prof;
  render();
});
const start = new URLSearchParams(location.hash.slice(1));
$("find").value = start.get("q") || "";
state.prof = PROFS.some(([p]) => p === start.get("p") && !NO_QUESTS.includes(p)) ? start.get("p") : null;
$("only").checked = start.get("only") === "1";
$("find").addEventListener("input", render);
$("only").addEventListener("change", render);
render();
