"use strict";

const ALL = Object.values(TITLES), CHESTS = data("GW_TITLES").chests;
const LOOT = "loot", MINE = "mine";
const TABS = [...ALL.filter(t => t.group === "skills").map(t => String(t.id)), LOOT, MINE];
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

/* ---------- my titles ---------- */
// every title, for the character picked on the User page and its account: the ones worked out from its ticks (or from
// other titles) shown as they stand, the others ticked when maxed (kept as the max rank: a title not reached isn't kept)
const nameOf = t => t.own_name || t.name;
// the order: the max titles' title first, then the other character titles, then account titles (PvE, then PvP)
const MY_ORDER = [10, 7, 34, 43, 9, 17, 20, 38, 39, 40, 41, 42, 1, 2, 18, 30, 25, 27, 29, 33, 24, 26, 28, 32, 13, 35, 14, 36, 19, 37, 31, 21,
  45, 46, 15, 16, 5, 6, 44, 0, 3, 4, 22, 23, 47];
// a title with no ranks page links to the guide that earns it, or the list of what it still needs: the elites not yet
// captured (Skill Hunter), the areas not yet vanquished (Vanquisher), the story missions not yet done in NM (Protector)
// or HM (Guardian), the dungeons not yet done in NM or HM (Master of the North: its points for the dungeons' quests)
// the titles set rank by rank (▼ rank ▲), not just ticked maxed
const STEPPED = new Set([45, 46, 15, 16, 5, 6, 44, 17, 20, 38, 39, 40, 41]);
const TITLE_GUIDE = { 9: "guides?gom", 24: "skills?c=1&cap=1", 26: "skills?c=2&cap=1", 28: "skills?c=3&cap=1", 32: "skills?cap=1",
  13: "missions?c=1&ty=story&d=1", 14: "missions?c=2&ty=story&d=1", 19: "missions?c=3&ty=story&d=1",
  35: "missions?c=1&ty=story&d=2", 36: "missions?c=2&ty=story&d=2", 37: "missions?c=3&ty=story&d=2", 31: "missions?c=1,2,3&ty=story&d=2", 42: "dungeons?d=a",
  25: "areas?c=1&v=n", 27: "areas?c=2&v=n", 29: "areas?c=3&v=n", 33: "areas?v=n" };

function mineHTML() {
  const o = User.data(), c = User.char(o), list = MY_ORDER.map(id => TITLES[id]).filter(Boolean);
  const section = (label, ts) => (ts.length ? `<h3 class="my-h">${label}</h3><table class="my-titles"><tbody>${ts.map(t => {
    const r = titleRankOf(t, c, o), max = titleMax(t), d = DERIVED_TITLES.get(t.id)?.(c, o), big = t.id === 10;
    const status = r >= max ? `<b class="my-max">Max</b>` : r ? `Rank ${r} of ${max}` : `<span class="dim">—</span>`;
    const how = d ? `${d[0]} / ${d[1]} ${d[2]}` : big ? `${titlesMaxed(c, o)} titles maxed (5 a rank)` : "";
    const input = d || big ? `<span class="dim">worked out</span>`
      : STEPPED.has(t.id) ? `<span class="my-step"><button type="button" data-step="-1" data-title="${t.id}" aria-label="Rank down"${r ? "" : " disabled"}>▼</button>`
        + `<span class="my-num">${r}</span><button type="button" data-step="1" data-title="${t.id}" aria-label="Rank up"${r < max ? "" : " disabled"}>▲</button></span>`
      : `<label class="my-tick"><input type="checkbox" data-title="${t.id}"${r >= max ? " checked" : ""}> Maxed</label>`;
    const href = t.ranks ? HREF.title(t.id) : TITLE_GUIDE[t.id];
    const name = href ? `<a href="${esc(href)}">${esc(nameOf(t))}</a>` : esc(nameOf(t));
    return `<tr><td class="my-name">${name}</td><td class="my-rank">${status}</td><td class="my-how dim">${how}</td><td class="my-in">${input}</td></tr>`;
  }).join("")}</tbody></table>` : "");
  const of = (scope, pvp) => list.filter(t => t.scope === scope && !!t.pvp === pvp);
  return `<section class="t-panel my" style="--c:var(--accent)">
    <p>Titles of <b>${esc(c.name)}</b> and its account, <b>${esc(accountName(User.account(o)))}</b>. Pick the character on the <a href="user">User page</a>. Skill Hunter, Protector,
      Guardian, Vanquisher, the Legendary titles and Kind of a Big Deal are worked out from your ticks and the other titles; tick the others when maxed (or set their rank).</p>
    ${section("Character titles", of("character", false))}${section("Character titles, PvP", of("character", true))}
    ${section("Account titles", of("account", false))}${section("Account titles, PvP", of("account", true))}
  </section>`;
}
const lockedOut = () => User.broken() && (alert("Your saved progress can't be read, so it can't be changed here: see the User page."), true);
// a rank up or down
document.addEventListener("click", e => {
  const b = e.target.closest("button[data-step]");
  if (!b || lockedOut()) return;
  const t = TITLES[b.dataset.title], o = User.data(), r = titleRankOf(t, User.char(o), o) + +b.dataset.step;
  User.setTitle(t.id, t.scope, Math.max(0, Math.min(titleMax(t), r)));
  $("title").innerHTML = mineHTML();
});
// ticking a title maxed (or not)
document.addEventListener("change", e => {
  const box = e.target.closest("input[data-title]");
  if (!box) return;
  const t = TITLES[box.dataset.title];
  if (lockedOut()) { box.checked = !box.checked; return; }
  User.setTitle(t.id, t.scope, box.checked ? titleMax(t) : 0);
  $("title").innerHTML = mineHTML();
});

/* ---------- tabs ---------- */
function show(name) {
  if (!TABS.includes(name)) name = TABS[0];
  for (const b of $("tabs").children) b.setAttribute("aria-current", b.dataset.tab === name ? "page" : "false");
  $("title").innerHTML = name === LOOT ? lootHTML() : name === MINE ? mineHTML() : VIEWS.title.panel(TITLES[name]);
  if (name === LOOT) {
    for (const id of ["c-th", "c-lucky", "c-wis", "c-chest"]) $(id).addEventListener("change", updateCalc);
    updateCalc();
  }
  history.replaceState(null, "", query({ t: name }));
}

$("tabs").innerHTML = TABS.map(n => `<a href="${query({ t: n })}" data-tab="${n}">${esc(n === LOOT ? "Salvage & lockpicks" : n === MINE ? "My titles" : TITLES[n].name)}</a>`).join("");
$("tabs").addEventListener("click", e => {
  const a = e.target.closest("[data-tab]");
  if (a) { e.preventDefault(); show(a.dataset.tab); }
});
onRoute(() => show(args().get("t")));
show(args().get("t"));
// back on the tab after the progress changed elsewhere: My titles draws again
addEventListener("userchange", () => { if (args().get("t") === MINE) $("title").innerHTML = mineHTML(); });
