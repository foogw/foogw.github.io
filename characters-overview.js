"use strict";
/* The Characters overview page: every character, a row each, by account in the saved order (or by a column, its header
   clicked: again, the other way): who it is, its birthday as far as it's known, the titles it has maxed and heroes it
   has recruited. More columns to come. */
{
  const DAY = 864e5;
  const fmtDay = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  const fmtMonth = new Intl.DateTimeFormat(undefined, { month: "short", year: "numeric", timeZone: "UTC" });
  // its birthday, as far as the range it was made in tells (UTC): the day, the month, the year, or not known
  const bday = c => {
    if (!c.bornBetween) return ["?", Infinity];
    const [lo, hi] = c.bornBetween.map(Date.parse), a = new Date(lo), b = new Date(hi), mid = (lo + hi) / 2;
    const y = a.getUTCFullYear() === b.getUTCFullYear(), m = y && a.getUTCMonth() === b.getUTCMonth();
    return [Math.floor(lo / DAY) === Math.floor(hi / DAY) ? fmtDay.format(lo) : m ? fmtMonth.format(lo) : y ? String(a.getUTCFullYear()) : "?", y ? mid : Infinity];
  };
  // its modes' badges, each in its own place (pre-Searing, Melandru, Dhuum), so they line up down the column
  const lit = c => `<span class="ov-modes">${Object.keys(USER_MODES).map(m => (c.modes || []).includes(m)
    ? `<img class="ch-mode" src="img/modes/${m}.png" alt="${esc(USER_MODES[m])}" title="${esc(USER_MODES[m])}">` : '<span class="ch-mode"></span>').join("")}</span>`;
  const COLS = [["acct", "Account"], ["name", "Character"], ["made", "Made in"], ["modes", "Modes"], ["bday", "Birthday", "The day it was made (UTC), or the month or year, as far as its age tells"],
    ["titles", "Titles maxed", "", "num"], ["heroes", "Heroes", "Heroes recruited, of the ones it can", "num"], ["retired", "Retired"]];
  let sortBy = "acct", sortDir = 1, prev = [];
  function render() {
    if (User.stored() == null || User.broken()) { $("ov").innerHTML = `<p class="dim">No characters yet: see <a href="characters">My Characters</a>.</p>`; return; }
    const o = User.data(), acctOf = c => o.accounts.find(a => a.id === c.account) || { id: c.account };
    const rows = o.chars.map((c, i) => {
      const [bd, bdKey] = bday(c), made = madeIn(c), open = canRecruit(c), got = new Set(c.heroes || []), heroes = open.filter(h => got.has(h.id)).length, maxed = titlesMaxed(c, o);
      const html = `<tr class="${c.hidden ? "hid" : ""}"><td class="dim">${esc(accountName(acctOf(c)))}</td>
        <td><a class="n" href="characters" data-go="${c.id}"><img src="${profImg(c.profession || 0)}" alt="">${esc(c.name)}</a></td>
        <td>${made ? esc(CAMPAIGNS[made]) : '<span class="dim">?</span>'}</td><td>${lit(c)}</td><td${bd === "?" ? ' class="dim"' : ""}>${bd}</td>
        <td class="num"><span class="u-gwamm" data-rank="${titleRankOf(TITLES[10], c, o)}" style="font-weight: 600">${maxed}</span></td><td class="num">${heroes} <span class="dim">/ ${open.length}</span></td><td>${c.retired ? "Retired" : ""}</td></tr>`;
      return { id: c.id, i, html, key: { acct: [o.accounts.indexOf(acctOf(c)), i], name: c.name.toLowerCase(), made: made || 9, modes: -(c.modes || []).length,
        bday: bdKey, titles: maxed, heroes, retired: c.retired ? 0 : 1 } };
    });
    // (ties left in the order they were in)
    const was = x => { const j = prev.indexOf(x.id); return j < 0 ? x.i : j; };
    const cmp = (a, b) => Array.isArray(a) ? a[0] - b[0] || a[1] - b[1] : a < b ? -1 : a > b ? 1 : 0;
    rows.sort((a, b) => cmp(a.key[sortBy], b.key[sortBy]) * sortDir || was(a) - was(b));
    prev = rows.map(x => x.id);
    const head = COLS.map(([k, t, tip, cls]) => `<th class="${cls || ""}"${tip ? ` title="${tip}"` : ""}><button type="button" data-sort="${k}">${t}${sortBy === k ? (sortDir > 0 ? " ▴" : " ▾") : ""}</button></th>`).join("");
    $("ov").innerHTML = `<table class="ov"><thead><tr>${head}</tr></thead><tbody>${rows.map(x => x.html).join("")}</tbody></table>`;
  }
  // a header clicked: sorted by it (again: the other way); the counts most first
  document.addEventListener("click", e => {
    const h = e.target.closest("[data-sort]");
    if (!h) return;
    const k = h.dataset.sort;
    sortDir = sortBy === k ? -sortDir : ["titles", "heroes"].includes(k) ? -1 : 1;
    sortBy = k;
    render();
  });
  render();
  addEventListener("userchange", render);
}
