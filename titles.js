"use strict";

const ALL = Object.values(TITLES), CHESTS = data("GW_TITLES").chests;
const LOOT = "loot";
const TABS = [...ALL.filter(t => t.group === "skills").map(t => String(t.id)), LOOT];
const byName = name => ALL.find(t => t.name === name);

const num = n => Number(n).toLocaleString("en");
// the parts of a title's panel the loot tab shows too
const { metaHTML, rangeHTML, tableHTML } = VIEWS.title;

/* ---------- salvage and lockpicks ---------- */
const rankSelect = (id, name) => `<label>${esc(name)} <select id="${id}">${
  Array.from({ length: byName(name).ranks.length + 1 }, (_, r) => `<option value="${r}">${r ? `Rank ${r}` : "None"}</option>`).join("")}</select></label>`;

function lootHTML() {
  const loot = ALL.filter(t => t.group === "loot");
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
  $("title").innerHTML = name === LOOT ? lootHTML() : VIEWS.title.panel(TITLES[name]);
  if (name === LOOT) {
    for (const id of ["c-th", "c-lucky", "c-wis", "c-chest"]) $(id).addEventListener("change", updateCalc);
    updateCalc();
  }
  history.replaceState(null, "", query({ t: name }));
}

$("tabs").innerHTML = TABS.map(n => `<a href="${query({ t: n })}" data-tab="${n}">${esc(n === LOOT ? "Salvage & lockpicks" : TITLES[n].name)}</a>`).join("");
$("tabs").addEventListener("click", e => {
  const a = e.target.closest("[data-tab]");
  if (a) { e.preventDefault(); show(a.dataset.tab); }
});
onRoute(() => show(args().get("t")));
show(args().get("t"));
