"use strict";
/* The Characters Birthdays page (characters-birthdays; birthdays leads here): every character with a range it was made in ("bornBetween", narrowed here or on My Characters'
   Edit tab), its next birthday as far as that tells, and when a check of /age narrows it. */
// every character with a range it was made in ("bornBetween", narrowed on My Characters' Edit tab), oldest first (by the
// range's middle; the others left out). What /age can say for it now (ageReadings, common.js): a button each, held to
// set it (ageAddHTML, common.js); the range then narrowed to the piece that reading leaves. The table is built when the characters or the
// order change; its times, counts and readings are refreshed in place every second, so nothing under the pointer is
// redrawn; sorted by a check column, the rows are put in order again each minute
{
  const DAY = AGE_DAY, MONTH = AGE_MO;
  // an age as "~5y, 4m" (under a year "~4m", under two months "~12d")
  const fmtWhen = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
  const ageSaid = ms => { const y = Math.floor(ms / (12 * MONTH)), m = Math.floor((ms - y * 12 * MONTH) / MONTH);
    return y ? `~${y}y, ${m}m` : m >= 2 ? `~${m}m` : `~${Math.floor(ms / DAY)}d`; };
  // when it was made, as far as known, in your own time: the day and hour once within a day, the days once within ten
  const fmtDay = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric" });
  const fmtDayTime = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
  const madeSaid = (lo, hi, now) => hi - lo <= DAY ? `<span title="${fmtDayTime.format(lo)} – ${fmtDayTime.format(hi)}">${fmtDayTime.format(lo)}</span>`
    : hi - lo <= 10 * DAY ? `<span title="${fmtDayTime.format(lo)} – ${fmtDayTime.format(hi)}">${fmtDay.formatRange(lo, hi)}</span>` : ageSaid(now - (lo + hi) / 2);
  // a time ahead: "in 3 days" from two days on, else a clock, "in 5:04:09" or "in 04:09"; its date in the tip; passed, "Now"
  const two = n => String(n).padStart(2, "0");
  const clock = ms => { const s = Math.round(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60; return h ? `${h}:${two(m)}:${two(s % 60)}` : `${two(m)}:${two(s % 60)}`; };
  const inSaid = (ms, at) => (ms < 1000 ? "Now" : `<span title="${fmtWhen.format(at)}">in ${ms >= 2 * DAY ? `${Math.round(ms / DAY)} days` : clock(ms)}</span>`);
  // a time ahead that is somewhere between two moments (a birthday, as far as the range tells): "in 23–31 days", "in
  // 5:04:09 – 13:04:09"; falling due already, "Now, by …"; the moments in the tip
  const spanSaid = (a, b, now) => {
    const tip = `title="${fmtWhen.format(a)} – ${fmtWhen.format(b)}"`;
    if (a <= now) return `<span ${tip}><span class="now">Now</span>, by ${b - now >= 2 * DAY ? `${Math.round((b - now) / DAY)} days` : clock(Math.max(0, b - now))}</span>`;
    if (b - a < 1000) return inSaid(a - now, a);
    if (a - now >= 2 * DAY) { const x = Math.round((a - now) / DAY), y = Math.round((b - now) / DAY); return `<span ${tip}>in ${x === y ? x : `${x}–${y}`} days</span>`; }
    return `<span ${tip}>in ${clock(a - now)} – ${b - now >= 2 * DAY ? `${Math.round((b - now) / DAY)} days` : clock(b - now)}</span>`;
  };
  // the rows' order: by a column (its header clicked: again, the other way), set when the page loads (oldest first) and
  // when a header is clicked, then kept as ages are added (a new character last); by a check column, redone each minute
  let order = null, prev = [], sortBy = "age", sortDir = -1;
  const COLS = [["acct", "Account"], ["name", "Character"], ["age", "Age / made", "About how old it is; once known within ten days, when it was made (your time)"],
    ["bday", "Next birthday", "When its next birthday present falls due, as far as the range tells (your time)", "chk"],
    ["range", "Range", "How long the time it can have been made in still is (rounded up): days, then hours, then minutes", "num"],
    ["best", "Best check (50%)", "When a reading of /age halves the range (the age it says ticks over at its middle)", "chk"],
    ["start", "Can check", "When a reading of /age starts to narrow the range (the age it says ticks over inside it); now, how much of it a reading cuts off at least: ⭡ still rising to the best check, ⭣ past it", "chk"]];
  // the rows shown, by character id: what the second-by-second refresh works from
  let shown = [];
  // what a row's live cells say now: when it was made, its next birthday, the range, the best check, whether a check
  // helps, and the readings /age can give
  function cells(r, now) {
    const { lo, hi, done } = r, a = ageAt(r.made, now), mid = (lo + hi) / 2;
    // (a boundary inside the range: a reading narrows it now, by the cut at least; the best check is when one is at the
    // middle, the next time if the one inside has passed it)
    const cut = Math.round(100 * a.side / (hi - lo)), best = a.next >= now ? a.next : mid + ageNextX(now - mid);
    const b = ageBirthday(lo, hi, now), add = ageAddHTML(r.c, now);
    return { age: madeSaid(lo, hi, now), bday: spanSaid(b.from, b.to, now),
      range: done ? "" : a.said(Math.max(1, Math.ceil((hi - lo) / a.unit))),
      best: done ? "" : inSaid(best - now, best),
      start: done ? "" : a.inside ? `<span class="now">Now</span> (${cut || "<1"}%)<span class="arr">${a.rising ? "⭡" : "⭣"}</span>` : inSaid(a.start - now, a.start),
      add, key: { acct: r.acct ?? 1, name: r.name.toLowerCase(), age: now - mid, bday: b.from, range: hi - lo, best, start: a.start - cut } };
  }
  const FIELDS = ["age", "bday", "range", "best", "start", "add"];
  // the live cells refreshed in place: only those whose text changed (a box being typed in, or a button being held, stays)
  let lastSort = 0;
  function tick() {
    const now = Date.now();
    for (const r of shown) {
      const c = cells(r, now); r.key = c.key;
      for (const f of FIELDS) {
        if (r.was[f] === c[f]) continue;
        if (f === "add" && (ageHolding() || r.el.querySelector(".age-box") === document.activeElement)) continue;
        r.was[f] = c[f]; r.el.querySelector(`[data-f="${f}"]`).innerHTML = c[f];
      }
    }
    // (sorted by a column that moves with time: the rows put in order again each minute, moved, not redrawn)
    if (["best", "start", "bday"].includes(sortBy) && now - lastSort >= 6e4 && !ageHolding()) { lastSort = now; reorder(true); }
  }
  // the rows in order: by the sort column (ties as they were), or as kept (order); the table's rows moved to match
  function reorder(fresh = false) {
    if (fresh || !order) {
      const last = sortBy === "best" || sortBy === "start", was = x => { const i = (fresh ? order : prev).indexOf(x.id); return i < 0 ? 1e9 : i; };
      shown.sort((a, b) => (last && a.done !== b.done ? a.done - b.done : 0) || (a.key[sortBy] < b.key[sortBy] ? -sortDir : a.key[sortBy] > b.key[sortBy] ? sortDir : 0) || was(a) - was(b) || a.mid - b.mid);
      order = shown.map(x => x.id);
    } else { const at = x => { const i = order.indexOf(x.id); return i < 0 ? order.length : i; }; shown.sort((a, b) => at(a) - at(b)); }
    const body = $("bd").querySelector("tbody");
    if (body) for (const r of shown) if (r.el && r.el.parentElement === body) body.append(r.el);
  }
  function render() {
    if (User.stored() == null || User.broken()) { shown = []; $("bd").innerHTML = `<p class="dim pg-empty">No characters yet: add them on the <a href="characters?view=edit">Edit</a> tab, or try a mock one on <a href="characters?view=about">About</a>.</p>`; return; }
    const o = User.data(), acct = c => accountName(o.accounts.find(a => a.id === c.account) || { id: c.account });
    const now = Date.now(), rows = o.chars.filter(c => c.bornBetween).map(c => {
      const [lo, hi] = c.bornBetween.map(Date.parse);
      // down to a minute, it's known: nothing more to check
      const r = { id: c.id, c, name: c.name, acct: c.account, made: c.bornBetween, lo, hi, done: hi - lo <= 6e4, mid: (lo + hi) / 2, was: {} };
      r.key = cells(r, now).key;
      r.html = `<tr data-id="${c.id}"><td class="dim">${esc(acct(c))}</td><td><a class="n" href="characters" data-go="${c.id}"><img src="${profImg(c.profession || 0)}" alt="">${esc(c.name)}</a></td>
        <td data-f="age"></td><td class="dim" data-f="bday"></td><td class="num" data-f="range"></td><td class="dim" data-f="best"></td><td class="dim" data-f="start"></td><td class="add" data-f="add"></td></tr>`;
      return r;
    });
    if (!rows.length) { shown = []; $("bd").innerHTML = `<p class="dim pg-empty">No character's age known yet: add one on a character's Edit tab, on the <a href="characters">Characters</a> tab.</p>`; return; }
    shown = rows;
    const head = COLS.map(([k, t, tip, cls]) => `<th class="sort${cls ? ` ${cls}` : ""}"${tip ? ` title="${tip}"` : ""}><button type="button" data-sort="${k}">${t}<span class="sort-ar"${sortBy === k ? "" : " hidden"}>${sortDir > 0 || sortBy !== k ? "▴" : "▾"}</span></button></th>`).join("");
    $("bd").innerHTML = `<table class="xp-bd"><thead><tr>${head}<th>What /age says</th></tr></thead><tbody>${rows.map(x => x.html).join("")}</tbody></table>`;
    for (const r of rows) r.el = $("bd").querySelector(`tr[data-id="${r.id}"]`);
    reorder();
    lastSort = now;
    tick();
  }
  // a header clicked: sorted by it (again: the other way)
  document.addEventListener("click", e => {
    const h = e.target.closest("[data-sort]");
    if (!h) return;
    // (age: oldest first)
    sortDir = sortBy === h.dataset.sort ? -sortDir : h.dataset.sort === "age" ? -1 : 1;
    sortBy = h.dataset.sort;
    prev = order || [];
    order = null;
    render();
  });
  // a character's name: My Characters, with it picked
  document.addEventListener("click", e => { const a = e.target.closest("[data-go]"); if (a) User.pick(+a.dataset.go); });
  render();
  addEventListener("userchange", render);
  setInterval(tick, 1000);
}
