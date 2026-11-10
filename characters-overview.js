"use strict";
/* The Characters overview page: every character, a row each, by account in the saved order (or by a column, its header
   clicked: again, the other way): who it is, its birthday as far as it's known, the titles it has maxed,
   its experience and hours played as last typed in, its aim (playing, a wannabe GWAMM, retired). More columns to come. */
{
  const DAY = 864e5;
  const fmtDay = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  const fmtMonth = new Intl.DateTimeFormat(undefined, { month: "short", year: "numeric", timeZone: "UTC" });
  // its birthday, as far as the range it was made in tells (UTC): the day, the month, the year, or not known; sorted by
  // the range's middle all the same (no range at all: last)
  const bday = c => {
    if (!c.bornBetween) return ["?", NaN];
    const [lo, hi] = c.bornBetween.map(Date.parse), a = new Date(lo), b = new Date(hi), mid = (lo + hi) / 2;
    const y = a.getUTCFullYear() === b.getUTCFullYear(), m = y && a.getUTCMonth() === b.getUTCMonth();
    return [Math.floor(lo / DAY) === Math.floor(hi / DAY) ? fmtDay.format(lo) : m ? fmtMonth.format(lo) : y ? String(a.getUTCFullYear()) : "?", mid];
  };
  // its modes' badges, each in its own place (pre-Searing, Melandru, Dhuum), so they line up down the column
  const lit = c => `<span class="ov-modes">${Object.keys(USER_MODES).map(m => (c.modes || []).includes(m)
    ? `<img class="ch-mode" src="img/modes/${m}.png" alt="${esc(USER_MODES[m])}" title="${esc(USER_MODES[m])}">` : '<span class="ch-mode"></span>').join("")}</span>`;
  const COLS = [["acct", "Account"], ["name", "Character"], ["made", "Made in", "The campaign it was made in: set by its profession or pre-Searing, else picked on its Edit tab"],
    ["modes", "Modes", "The game modes it's bound to: pre-Searing, Melandru's Accord, Dhuum's Covenant"],
    ["bday", "Birthday", "The day it was made (UTC), or the month or year, as far as its age tells"],
    ["titles", "Titles maxed", "The titles it has maxed, that Kind of a Big Deal counts (coloured by its rank)", "num"],
    ["xp", "Experience", "As last typed in on its Edit tab (hover: when)", "num"], ["played", "Hours played", "As last typed in on its Edit tab (hover: when)", "num"],
    ["playedOutside", "Hours outside", "Hours played outside, as last typed in on its Edit tab (hover: when)", "num"],
    ["outsidePct", "Outside %", "Of the hours played, the share played outside", "num"],
    ["aim", "Aim", "What it's played for, picked on its Edit tab. Wannabe GWAMM: the Zaishen dailies and the pages of what it still needs list it. Retired: no longer played, left out of the Today page's suggestions"]];
  // the share of its hours played outside, once both are typed in
  const outsidePct = c => (c.played && c.playedOutside ? 100 * c.playedOutside[0] / c.played[0] : NaN);
  // a reading typed in on the Edit tab: its amount as there (amountSaid: 12.5m, 12,345), when in the tip
  const fmtAt = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric" });
  const reading = (c, k) => !c[k] ? '<span class="dim" title="Not typed in yet: on its Edit tab">?</span>'
    : `<span title="${fmtAt.format(Date.parse(c[k][1]))}">${amountSaid(c[k][0])}</span>`;
  let sortBy = "acct", sortDir = 1, prev = [];
  function render() {
    if (User.stored() == null || User.broken()) { $("ov").innerHTML = `<p class="dim pg-empty">No characters yet: add them on the <a href="characters">Characters</a> tab.</p>`; return; }
    const o = User.data(), acctOf = c => o.accounts.find(a => a.id === c.account) || { id: c.account };
    const rows = o.chars.map((c, i) => {
      const [bd, bdKey] = bday(c), made = madeIn(c), maxed = titlesMaxed(c, o), kbd = titleRankOf(TITLES[10], c, o);
      const html = `<tr><td class="dim">${esc(accountName(acctOf(c)))}</td>
        <td><a class="n" href="characters" data-go="${c.id}"><img src="${profImg(c.profession || 0)}" alt="">${esc(c.name)}</a></td>
        <td>${made ? esc(CAMPAIGNS[made]) : '<span class="dim" title="Not set: pick it on its Edit tab">?</span>'}</td><td>${lit(c)}</td>
        <td${bd === "?" ? ' class="dim" title="Not known closely enough yet: add what /age says on its Edit tab"' : ""}>${bd}</td>
        <td class="num"><span class="u-gwamm" data-rank="${kbd}" style="font-weight: 600" title="Kind of a Big Deal rank ${kbd}">${maxed}</span></td>
        <td class="num">${reading(c, "xp")}</td><td class="num">${reading(c, "played")}</td><td class="num">${reading(c, "playedOutside")}</td>
        <td class="num">${Number.isNaN(outsidePct(c)) ? '<span class="dim" title="Needs both hours typed in on its Edit tab">?</span>' : `${Math.round(outsidePct(c))}%`}</td><td>${USER_AIMS[c.aim || ""]}</td></tr>`;
      return { id: c.id, i, html, key: { acct: [o.accounts.indexOf(acctOf(c)), i], name: c.name.toLowerCase(), made: made || 9, modes: -(c.modes || []).length,
        bday: bdKey, titles: maxed, aim: { gwamm: 0, retired: 2 }[c.aim] ?? 1,
        // (not typed in: last, either way)
        ...Object.fromEntries(USER_READINGS.map(k => [k, c[k] ? c[k][0] : NaN])), outsidePct: outsidePct(c) } };
    });
    // (ties left in the order they were in)
    const was = x => { const j = prev.indexOf(x.id); return j < 0 ? x.i : j; };
    const cmp = (a, b) => Array.isArray(a) ? a[0] - b[0] || a[1] - b[1] : a < b ? -1 : a > b ? 1 : 0;
    const none = x => Number.isNaN(x.key[sortBy]);
    rows.sort((a, b) => none(a) - none(b) || cmp(a.key[sortBy], b.key[sortBy]) * sortDir || was(a) - was(b));
    prev = rows.map(x => x.id);
    const head = COLS.map(([k, t, tip, cls]) => `<th class="${cls || ""}"${tip ? ` title="${tip}"` : ""}><button type="button" data-sort="${k}">${t}<span class="sort-ar"${sortBy === k ? "" : " hidden"}>${sortDir > 0 || sortBy !== k ? "▴" : "▾"}</span></button></th>`).join("");
    $("ov").innerHTML = `<div class="ov-wrap"><table class="ov"><thead><tr>${head}</tr></thead><tbody>${rows.map(x => x.html).join("")}</tbody></table></div>`;
  }
  // a header clicked: sorted by it (again: the other way); the counts most first
  document.addEventListener("click", e => {
    const h = e.target.closest("[data-sort]");
    if (!h) return;
    const k = h.dataset.sort;
    sortDir = sortBy === k ? -sortDir : ["titles", "outsidePct", ...USER_READINGS].includes(k) ? -1 : 1;
    sortBy = k;
    render();
  });
  render();
  addEventListener("userchange", render);
}
