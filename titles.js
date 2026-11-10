"use strict";

/* My Characters' titles (beside its list, characters.js): every title of the character picked and its account. A
   title's own page is on the front page (title.js). */

/* ---------- my titles ---------- */
// every title, for the character picked and its account: the ones worked out from its ticks (or from
// other titles) shown as they stand, the others ticked when maxed (kept as the max rank: a title not reached isn't kept)
const nameOf = t => t.own_name || t.name;
// the order: the max titles' title first, then the other character titles, then account titles (PvE, then PvP)
const MY_ORDER = [10, 7, 34, 43, 9, 17, 20, 38, 39, 40, 41, 42, 1, 2, 18, 30, 25, 27, 29, 33, 24, 26, 28, 32, 13, 35, 14, 36, 19, 37, 31, 21,
  45, 46, 15, 16, 5, 6, 44, 0, 3, 4, 22, 23, 47];
// a title links to its page (Luxon to Kurzick / Luxon's), where it has one
// the titles set rank by rank (▼ rank ▲), not just ticked maxed
const STEPPED = new Set([45, 46, 15, 16, 5, 6, 44, 17, 20, 38, 39, 40, 41]);
// a count worked out from the ticks links to the list of what it still needs: the elites not yet captured (Skill
// Hunter), the story missions not yet done in NM (Protector) or HM (Guardian), the areas not yet vanquished (Vanquisher)
const LEFT_LIST = { 24: "skills?c=1c&cap=1", 26: "skills?c=2c&cap=1", 28: "skills?c=3c&cap=1",
  13: "missions?c=1&ty=story&d=1", 14: "missions?c=2&ty=story&d=1", 19: "missions?c=3&ty=story&d=1",
  35: "missions?c=1&ty=story&d=2", 36: "missions?c=2&ty=story&d=2", 37: "missions?c=3&ty=story&d=2",
  25: "areas?c=1&v=n", 27: "areas?c=2&v=n", 29: "areas?c=3&v=n",
  // the Legendary ones: the three campaigns' lists together (Guardian's: missing in NM or HM)
  32: "skills?cap=1", 31: "missions?c=1,2,3&ty=story&d=a", 33: "areas?c=1,2,3&v=n" };
// a title's guide, said in its row
const GUIDE_ROW = { 9: ["gom", "GoM AFK guide"], 6: ["zos", "Luxon AFK guide"] };

// what the account's Treasure Hunter, Lucky and Wisdom ranks give, for a level 20 character, in the wiki's terms, said in
// their rows: the lockpick retention bonus, added to a chest's base rate (10%, half the level, + 3% a Treasure Hunter rank
// + 2% a Lucky rank), and the chance of retaining the item when salvaging an upgrade (50% + 3% a Treasure Hunter and
// Wisdom rank, at most 92%)
function luckHow(id, c, o) {
  const r = x => titleKept(TITLES[x], c, o), th = r(45), lucky = r(15), wis = r(46);
  const pick = `lockpicks kept +${Math.min(100, 10 + 3 * th + 2 * lucky)}%`, keep = `upgrades kept ${Math.min(92, 50 + 3 * (th + wis))}% when salvaging`;
  return id === 45 ? `${pick}, ${keep}` : id === 15 ? pick : id === 46 ? keep : "";
}
// Master of the North's row: its points from the ticks, and the points the game shows typed in, from which the Eye of
// the North map explored is worked out (mytitles.js) and its rank
const MOTN_MAP_MAX = 104;
const motnHow = c => {
  const map = c.eotnMap ?? null, t = motnTicked(c);
  if (map === null) return `${t}/${motnTickMax()} ticks + EotN map 0%: check the game's points`;
  if (map < 0) return `that's ${-map} fewer than your ticks give (${t}): check them`;
  // the map gives at most 104 (100%, and up to 4 more past it): more is missions, dungeons or vanquishes not ticked
  return map > MOTN_MAP_MAX ? `${t}/${motnTickMax()} ticks: ${map - MOTN_MAP_MAX} points more than the map gives, tick your dungeons/missions/vanqs`
    : `${t}/${motnTickMax()} ticks + EotN map ${map}%`;
};
// the game's Master of the North points typed in (or cleared): the map explored is kept, and the titles drawn again
document.addEventListener("change", e => {
  if (e.target.id !== "motn-points") return;
  const c = User.char(), v = e.target.value, map = v === "" || isNaN(+v) ? null : Math.round(+v) - motnTicked(c);
  if (lockedOut()) { e.target.value = motnTicked(c) + Math.max(0, c.eotnMap ?? 0); return; }
  // (kept at most 1034, every Master of the North point there is, as the progress check wants)
  User.setEotnMap(map === null || map < 0 ? undefined : Math.min(map, 1034));
  refresh();
  if (map !== null && map < 0) $("motn-how").textContent = motnHow({ ...User.char(), eotnMap: map });
});
function mineHTML() {
  const o = User.data(), c = User.char(o), pre = (c.modes || []).includes("presearing");
  const list = MY_ORDER.map(id => TITLES[id]).filter(t => t && (!pre || t.scope === "account" || PRE_TITLES.has(t.id)));
  const section = (label, ts) => (ts.length ? `<h3 class="my-h">${label}</h3><table class="my-titles"><tbody>${ts.map(t => {
    const r = titleRankOf(t, c, o), max = titleMax(t), d = DERIVED_TITLES.get(t.id)?.(c, o), big = t.id === 10;
    // Legendary Defender of Ascalon, for a character made in Factions or Nightfall: not to be had (N/A, no tick)
    const na = t.id === 21 && typeof madeIn === "function" && madeIn(c) > 1;
    const status = na ? `<span class="dim" tabindex="0" data-tip="Only a character made in Prophecies can be a Legendary Defender of Ascalon">N/A</span>` : r >= max ? `<b class="my-max">Max</b>` : r ? `Rank ${r} of ${max}` : `<span class="dim">—</span>`;
    // (more than needed, as a campaign's Skill Hunter counting the Core elites, said as x / x)
    const count = d && `${d[0]} / ${Math.max(d[0], d[1])} ${d[2]}`;
    const how = d ? (LEFT_LIST[t.id] ? `<a href="${LEFT_LIST[t.id]}">${count}</a>` : count) : big ? `${titlesMaxed(c, o)} titles maxed` : t.id === 42 ? motnHow(c) : GUIDE_ROW[t.id] && !pre ? `<a href="guides?${GUIDE_ROW[t.id][0]}">${GUIDE_ROW[t.id][1]}</a>` : luckHow(t.id, c, o);
    const input = t.id === 42 ? `<input type="number" class="calc-in my-pts" id="motn-points" min="0" placeholder="Points" aria-label="Master of the North points the game shows" value="${motnTicked(c) + Math.max(0, c.eotnMap ?? 0)}">`
      : d || big || na ? ""
      : STEPPED.has(t.id) ? `<span class="my-step"><button type="button" data-step="-1" data-title="${t.id}" aria-label="Rank down"${r ? "" : " disabled"}>▼</button>`
        + `<span class="my-num">${r}</span><button type="button" data-step="1" data-title="${t.id}" aria-label="Rank up"${r < max ? "" : " disabled"}>▲</button></span>`
      : `<label class="my-tick"><input type="checkbox" data-title="${t.id}"${r >= max ? " checked" : ""}> Maxed</label>`;
    // Luxon shares Kurzick / Luxon's ranks, and its page
    const page = t.id === 6 ? 5 : t.id, href = VIEWS.title.hasPage(page) ? HREF.title(page) : "";
    const name = href ? `<a href="${esc(href)}">${esc(nameOf(t))}</a>` : esc(nameOf(t));
    return `<tr><td class="my-name">${name}</td><td class="my-rank">${status}</td><td class="my-how dim"${t.id === 42 ? ' id="motn-how"' : ""}>${how}</td><td class="my-in">${input}</td></tr>`;
  }).join("")}</tbody></table>` : "");
  const of = (scope, pvp) => list.filter(t => t.scope === scope && !!t.pvp === pvp);
  const acct = o.accounts.find(a => a.id === c.account);
  // the progress boxes (characters.js) first: not for a pre-Searing character
  return `${typeof statsHTML === "function" && !pre ? statsHTML(c) : ""}<section class="t-panel my" style="--c:var(--accent)">
    ${section("Character titles", of("character", false))}${section("Character titles, PvP", of("character", true))}
    ${section(`Account titles: ${esc(accountName(acct))}, shared by its characters`, of("account", false))}${section("Account titles, PvP", of("account", true))}
  </section>`;
}
const lockedOut = () => User.broken() && (askBroken(), true);
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
