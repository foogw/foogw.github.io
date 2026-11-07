"use strict";

/* My Characters' titles (below its list, characters.js): every title of the character picked and its account. A
   title's own page is on the front page (title.js). */

/* ---------- my titles ---------- */
// every title, for the character picked and its account: the ones worked out from its ticks (or from
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
const TITLE_GUIDE = { 9: "guides?gom", 24: "skills?c=1c&cap=1", 26: "skills?c=2c&cap=1", 28: "skills?c=3c&cap=1", 32: "skills?cap=1",
  13: "missions?c=1&ty=story&d=1", 14: "missions?c=2&ty=story&d=1", 19: "missions?c=3&ty=story&d=1",
  35: "missions?c=1&ty=story&d=2", 36: "missions?c=2&ty=story&d=2", 37: "missions?c=3&ty=story&d=2", 31: "missions?c=1,2,3&ty=story&d=2", 42: "dungeons?d=a",
  25: "areas?c=1&v=n", 27: "areas?c=2&v=n", 29: "areas?c=3&v=n", 33: "areas?v=n" };

// the calculator below the titles: what the account's Treasure Hunter, Lucky and Wisdom ranks give, for a level 20
// character, in the wiki's terms: the lockpick retention bonus, added to a chest's base rate (10%, half the level, + 3% a
// Treasure Hunter rank + 2% a Lucky rank), and the chance of retaining the item when salvaging an upgrade (50% + 3% a
// Treasure Hunter and Wisdom rank, at most 92%); and Master of the North's points from the character's ticks, from which
// the Eye of the North map explored is worked out (1 point a percent): 5 an EotN mission in NM and 10 in HM, 10 a
// dungeon in NM and 20 in HM, 15 an area vanquished
function motnTicked(c) {
  const modes = (part, id, nm, hm) => ((c[part]?.[id] || 0) & 1 ? nm : 0) + ((c[part]?.[id] || 0) & 2 ? hm : 0);
  const got = new Set(c.vanquished || []);
  return storyIn(4).reduce((n, id) => n + modes("missions", id, 5, 10), 0)
    + USER_ALL.dungeons.filter(id => AREAS[id]?.campaign === 4).reduce((n, id) => n + modes("dungeons", id, 10, 20), 0)
    + 15 * vanquishIn(4).filter(id => got.has(id)).length;
}
// the map explored, once worked out, is kept on the character (eotnMap): when its ticks change, the points shown are its
// ticks' plus the map's
const motnMap = c => c.eotnMap ?? null;
function motnOut(map) {
  if (map === null) return `your EotN map is at <b>…</b>`;
  return map < 0 ? `that's <b>${-map}</b> fewer than your ticks award: check them.` : `your EotN map is at <b>${map}%</b>.`;
}
function calcHTML(c, o) {
  const r = id => titleKept(TITLES[id], c, o), th = r(45), lucky = r(15), wis = r(46);
  const pick = Math.min(100, 10 + 3 * th + 2 * lucky), keep = Math.min(92, 50 + 3 * (th + wis));
  return `<section class="t-panel calc" style="--c:var(--accent)">
    <h5>Account</h5>
    <ul>
      <li>With Treasure Hunter rank ${th} and Lucky rank ${lucky}, your lockpick retention is <b title="On top of the chest's own rate">+${pick}%</b>.</li>
      <li>With Treasure Hunter rank ${th} and Wisdom rank ${wis}, your item retention when salvaging an upgrade is <b>${keep}%</b>.</li>
    </ul>
    <h5>${esc(c.name)}</h5>
    <ul>
      <li>Your EotN ticks give <b>${motnTicked(c)}</b> Master of the North points. With <input type="number" class="calc-in" id="motn-points" min="0" style="width:6em" value="${motnMap(c) === null ? "" : motnTicked(c) + motnMap(c)}"> points,
        <span id="motn-out">${motnOut(motnMap(c))}</span></li>
    </ul>
  </section>`;
}
// typing the points: only the answer is drawn again
document.addEventListener("input", e => {
  if (e.target.id !== "motn-points") return;
  const c = User.char(), v = e.target.value, map = v === "" || isNaN(+v) ? null : Math.round(+v) - motnTicked(c);
  if (!lockedOut()) User.setEotnMap(map === null || map < 0 ? undefined : map);
  $("motn-out").innerHTML = motnOut(map);
});
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
    const href = VIEWS.title.hasPage(t.id) ? HREF.title(t.id) : TITLE_GUIDE[t.id];
    const name = href ? `<a href="${esc(href)}">${esc(nameOf(t))}</a>` : esc(nameOf(t));
    return `<tr><td class="my-name">${name}</td><td class="my-rank">${status}</td><td class="my-how dim">${how}</td><td class="my-in">${input}</td></tr>`;
  }).join("")}</tbody></table>` : "");
  const of = (scope, pvp) => list.filter(t => t.scope === scope && !!t.pvp === pvp);
  const acct = o.accounts.find(a => a.id === c.account);
  return `${foldHTML("my-fold", `${esc(c.name)} (${esc(accountName(acct))})`, `<section class="t-panel my" style="--c:var(--accent)">
    <p>Skill Hunter, Protector, Guardian, Vanquisher, the Legendary titles and Kind of a Big Deal are worked out from your
      ticks and the other titles; tick the others when maxed (or set their rank).</p>
    ${section("Character titles", of("character", false))}${section("Character titles, PvP", of("character", true))}
    ${section("Account titles", of("account", false))}${section("Account titles, PvP", of("account", true))}
  </section>`)}
  ${foldHTML("calc-fold", "Calculator", calcHTML(c, o))}`;
}
// the character's titles and the calculator, each folded under its heading as Accounts and characters is (kept folded:
// the ids of the folded ones)
const TITLE_FOLDS = "chars.titlefolds";
const titleFolds = () => { try { return JSON.parse(localStorage.getItem(TITLE_FOLDS)) || []; } catch { return []; } };
const foldHTML = (id, head, body) => `<details class="ch-fold" id="${id}"${titleFolds().includes(id) ? "" : " open"}>
  <summary><h2 class="r-h">${head}</h2></summary>${body}</details>`;
document.addEventListener("toggle", e => {
  if (e.target.id !== "my-fold" && e.target.id !== "calc-fold") return;
  const fs = titleFolds().filter(x => x !== e.target.id);
  try { localStorage.setItem(TITLE_FOLDS, JSON.stringify(e.target.open ? fs : [...fs, e.target.id])); } catch { /* storage blocked */ }
}, true);
const lockedOut = () => User.broken() && (alert("Your saved progress can't be read, so it can't be changed here: see the Backup page."), true);
// a rank up or down
document.addEventListener("click", e => {
  const b = e.target.closest("button[data-step]");
  if (!b || lockedOut()) return;
  const t = TITLES[b.dataset.title], o = User.data(), r = titleRankOf(t, User.char(o), o) + +b.dataset.step;
  User.setTitle(t.id, t.scope, Math.max(0, Math.min(titleMax(t), r)));
  refresh();
});
// ticking a title maxed (or not)
document.addEventListener("change", e => {
  const box = e.target.closest("input[data-title]");
  if (!box) return;
  const t = TITLES[box.dataset.title];
  if (lockedOut()) { box.checked = !box.checked; return; }
  User.setTitle(t.id, t.scope, box.checked ? titleMax(t) : 0);
  refresh();
});

const draw = () => { $("title").innerHTML = mineHTML(); };
// after a change here: the list above too (characters.js), which draws these again
const refresh = () => (typeof render === "function" ? render() : draw());
draw();
// back on the page after the progress changed elsewhere: it draws again
addEventListener("userchange", draw);
