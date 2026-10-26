"use strict";

const { titles: TITLES, chests: CHESTS } = window.GW_TITLES;
const SKILLS = window.GW_SKILLS;
const LOOT = "Salvage & lockpicks";
const TABS = [...TITLES.filter(t => t.group === "skills").map(t => t.name), LOOT];
const SHORT = {};
const CAMP_COLOR = { Prophecies: "--p-paragon", Factions: "--p-ritualist", Nightfall: "--p-elementalist", "Eye of the North": "--p-monk", Core: "--accent" };
const byName = name => TITLES.find(t => t.name === name);

const num = n => Number(n).toLocaleString("en");
// a bonus reads "+7" or "+5%"; damage absorbed is a plain number
const value = (v, [label, unit]) => (v == null ? "—" : `${label === "Damage absorbed" ? "" : "+"}${num(v)}${unit}`);

const metaHTML = t => `<span>${esc(t.campaign)}</span><span>${t.scope === "account" ? "account-wide" : "per character"}</span><span>${t.ranks.length} ranks, ${num(t.ranks.at(-1).points)} points to max</span>`;

// "R1 title effect · R3 Asura consumables crafter · …"
const unlocksHTML = t => {
  const items = t.ranks.flatMap(r => r.unlocks.map(u => `<span><b>R${r.rank}</b> ${esc(u)}</span>`));
  return items.length ? `<div class="t-unlocks">${items.join("")}</div>` : "";
};

// the effect columns at rank 1 and at max, e.g. "Max energy +7 → +15"
const rangeHTML = t => t.columns.map((c, i) =>
  `<span>${esc(c[0])} <b>${value(t.ranks[0].values[i], c)} → ${value(t.ranks.at(-1).values[i], c)}</b></span>`).join("");

function tableHTML(t) {
  const head = ["Rank", "Points", ...t.columns.map(c => c[0]), "Unlocks"];
  const rows = t.ranks.map(r => `<tr><td class="num">${r.rank}</td><td class="num">${num(r.points)}</td>${
    r.values.map((v, i) => `<td class="num">${value(v, t.columns[i])}</td>`).join("")}<td>${esc(r.unlocks.join(", "))}</td></tr>`).join("");
  return `<details class="t-table"><summary>Rank table</summary><div class="t-scroll"><table class="t-ranks"><thead><tr>${
    head.map((h, i) => `<th${i < head.length - 1 ? ' class="num"' : ""}>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div></details>`;
}

function skillsHTML(t) {
  const list = SKILLS.filter(s => s.attribute === t.skills).sort((a, b) => cmpStr(a.profession, b.profession) || cmpStr(a.name, b.name));
  return list.length ? `<h4>Skills <span class="dim">${list.length}</span></h4><div class="t-skills">${list.map(s =>
    `<a class="skill-link${s.elite ? " elite" : ""}" href="skills.html#skill=${s.id}" style="--pc:${profVar(s.profession)}" title="${esc(s.profession)}">${skillIcon(s.id, "sk-ic")}<span>${esc(s.name)}</span></a>`).join("")}</div>` : "";
}

function titleHTML(t) {
  return `<section class="t-panel" style="--c:var(${CAMP_COLOR[t.campaign]})">
    <div class="t-meta">${metaHTML(t)}</div>
    <p><span class="dim">Earned by</span> ${esc(t.earn)}</p>
    ${t.effect ? `<p><span class="dim">When displayed</span> ${esc(t.effect)}${t.giver ? ` <span class="dim">From ${esc(t.giver[0])} in ${esc(t.giver[1])}.</span>` : ""}</p>` : ""}
    ${t.columns.length ? `<div class="t-range">${rangeHTML(t)}</div>` : ""}
    ${t.note ? `<p class="dim">${esc(t.note)}</p>` : ""}
    ${unlocksHTML(t)}
    ${skillsHTML(t)}
    ${tableHTML(t)}
    <p class="t-src"><a href="${esc(t.wiki_de)}" target="_blank" rel="noopener">guildwiki.de</a></p>
  </section>`;
}

/* ---------- salvage and lockpicks ---------- */
const rankSelect = (id, name) => `<label>${esc(name)} <select id="${id}">${
  Array.from({ length: byName(name).ranks.length + 1 }, (_, r) => `<option value="${r}">${r ? `Rank ${r}` : "None"}</option>`).join("")}</select></label>`;

function lootHTML() {
  const loot = TITLES.filter(t => t.group === "loot");
  return `<section class="t-panel" style="--c:var(--accent)">
    <div class="t-inputs">
      ${rankSelect("c-th", "Treasure Hunter")}${rankSelect("c-lucky", "Lucky")}${rankSelect("c-wis", "Wisdom")}
      <label>Chest <select id="c-chest"><option value="0">Locked chest, Hard mode</option>${
        CHESTS.map(([key, bonus]) => `<option value="${bonus}">Normal mode, key costs ${num(key)} gold</option>`).join("")}</select></label>
    </div>
    <div class="t-out" id="c-out"></div>
    <p class="dim t-formula">For a level 20 character. Keeping a lockpick: 10% + 3% per Treasure Hunter rank + 2% per Lucky rank, plus the chest's bonus in Normal mode.
      Keeping the item when salvaging a rune or upgrade: 50% + 3% per Treasure Hunter and Wisdom rank, at most 92%.</p>
    ${loot.map(t => `<div class="t-loot"><h4>${esc(t.name)}</h4>
      <div class="t-meta">${metaHTML(t)}</div>
      <p><span class="dim">Earned by</span> ${esc(t.earn)}</p>
      <div class="t-range">${rangeHTML(t)}</div>
      ${tableHTML(t)}</div>`).join("")}
  </section>`;
}

function updateCalc() {
  const th = +$("c-th").value, lucky = +$("c-lucky").value, wis = +$("c-wis").value, chest = +$("c-chest").value;
  const pick = Math.min(100, 20 / 2 + 3 * th + 2 * lucky + chest);
  const keep = Math.min(92, 50 + 3 * (th + wis));
  $("c-out").innerHTML = `<div><b>${num(pick)}%</b><span>chance to keep a lockpick</span></div>
    <div><b>${keep}%</b><span>chance to keep the item when salvaging an upgrade</span></div>`;
}

/* ---------- tabs ---------- */
function show(name) {
  if (!TABS.includes(name)) name = TABS[0];
  for (const b of $("tabs").children) b.setAttribute("aria-current", b.dataset.tab === name ? "page" : "false");
  $("title").innerHTML = name === LOOT ? lootHTML() : titleHTML(byName(name));
  if (name === LOOT) {
    for (const id of ["c-th", "c-lucky", "c-wis", "c-chest"]) $(id).addEventListener("change", updateCalc);
    updateCalc();
  }
  history.replaceState(null, "", "#" + new URLSearchParams({ t: name }));
}

$("tabs").innerHTML = TABS.map(n => `<a href="#${new URLSearchParams({ t: n })}" data-tab="${esc(n)}">${esc(SHORT[n] || n)}</a>`).join("");
$("tabs").addEventListener("click", e => {
  const a = e.target.closest("[data-tab]");
  if (a) { e.preventDefault(); show(a.dataset.tab); }
});
window.addEventListener("hashchange", () => show(new URLSearchParams(location.hash.slice(1)).get("t")));
show(new URLSearchParams(location.hash.slice(1)).get("t"));
