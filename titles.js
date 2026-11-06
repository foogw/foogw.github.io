"use strict";

/* The Titles page: My titles, every title of the character picked on the User page and its account. A title's own
   page is on the front page (title.js). */

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
const TITLE_GUIDE = { 9: "guides?gom", 24: "skills?c=1c&cap=1", 26: "skills?c=2c&cap=1", 28: "skills?c=3c&cap=1", 32: "skills?cap=1",
  13: "missions?c=1&ty=story&d=1", 14: "missions?c=2&ty=story&d=1", 19: "missions?c=3&ty=story&d=1",
  35: "missions?c=1&ty=story&d=2", 36: "missions?c=2&ty=story&d=2", 37: "missions?c=3&ty=story&d=2", 31: "missions?c=1,2,3&ty=story&d=2", 42: "dungeons?d=a",
  25: "areas?c=1&v=n", 27: "areas?c=2&v=n", 29: "areas?c=3&v=n", 33: "areas?v=n" };

// what the account's Treasure Hunter, Lucky and Wisdom ranks give, for a level 20 character, in the wiki's terms: the
// lockpick retention bonus, added to a chest's base rate (10%, half the level, + 3% a Treasure Hunter rank + 2% a Lucky
// rank), and the chance of retaining the item when salvaging an upgrade (50% + 3% a Treasure Hunter and Wisdom rank, at
// most 92%)
function retentionHTML(c, o) {
  const r = id => titleKept(TITLES[id], c, o), th = r(45), lucky = r(15), wis = r(46);
  const pick = Math.min(100, 10 + 3 * th + 2 * lucky), keep = Math.min(92, 50 + 3 * (th + wis));
  return `<p class="my-retention">This character has <b title="On top of the chest's own rate">+${pick}%</b> lockpick retention
    and <b>${keep}%</b> item retention when salvaging upgrades.</p>`;
}
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
    <div class="my-pick">
      <label>Account <select id="my-account">${o.accounts.filter(a => o.chars.some(x => x.account === a.id)).map(a =>
        `<option value="${a.id}"${a.id === c.account ? " selected" : ""}>${esc(accountName(a))}</option>`).join("")}</select></label>
      <label>Character <select id="my-char">${o.chars.filter(x => x.account === c.account).map(x =>
        `<option value="${x.id}"${x === c ? " selected" : ""}>${esc(x.name)}</option>`).join("")}</select></label>
      <a href="user" class="dim">Accounts and characters</a>
    </div>
    <p>Skill Hunter, Protector, Guardian, Vanquisher, the Legendary titles and Kind of a Big Deal are worked out from your
      ticks and the other titles; tick the others when maxed (or set their rank).</p>
    ${section("Character titles", of("character", false))}${section("Character titles, PvP", of("character", true))}
    ${section("Account titles", of("account", false))}${section("Account titles, PvP", of("account", true))}
  </section>
  ${retentionHTML(c, o)}`;
}
const lockedOut = () => User.broken() && (alert("Your saved progress can't be read, so it can't be changed here: see the User page."), true);
// a rank up or down
document.addEventListener("click", e => {
  const b = e.target.closest("button[data-step]");
  if (!b || lockedOut()) return;
  const t = TITLES[b.dataset.title], o = User.data(), r = titleRankOf(t, User.char(o), o) + +b.dataset.step;
  User.setTitle(t.id, t.scope, Math.max(0, Math.min(titleMax(t), r)));
  draw();
});
// another account (its first character) or character picked: the one the whole site shows
document.addEventListener("change", e => {
  if (e.target.id !== "my-account" && e.target.id !== "my-char") return;
  const o = User.data();
  User.pick(e.target.id === "my-char" ? +e.target.value : o.chars.find(x => x.account === +e.target.value).id);
  draw();
});
// ticking a title maxed (or not)
document.addEventListener("change", e => {
  const box = e.target.closest("input[data-title]");
  if (!box) return;
  const t = TITLES[box.dataset.title];
  if (lockedOut()) { box.checked = !box.checked; return; }
  User.setTitle(t.id, t.scope, box.checked ? titleMax(t) : 0);
  draw();
});

// an old address of a title's tab (titles?t=5) goes to that title's page
const old = args().get("t");
if (old && TITLES[old]?.ranks) location.replace(HREF.title(old));
const draw = () => { $("title").innerHTML = mineHTML(); };
draw();
// back on the page after the progress changed elsewhere: it draws again
addEventListener("userchange", draw);
