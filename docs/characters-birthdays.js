"use strict";
/* The Characters Birthdays page (characters-birthdays; birthdays leads here): every character with a range it was made in ("bornBetween", narrowed here or on My Characters'
   Edit tab), its age and, once known to the day, when it was made, and when a check of /age narrows the range. */
// every character with a range it was made in ("bornBetween", narrowed on My Characters' Edit tab), oldest first (by the
// range's middle; the others left out). What /age can say for it now (ageReadings, common.js): a button each, held to
// set it (ageAddHTML, common.js); the range then narrowed to the piece that reading leaves. The table is built when the characters or the
// order change; its times, counts and readings are refreshed in place every second, so nothing under the pointer is
// redrawn; sorted by a check column, the rows are put in order again each minute
{
  const DAY = AGE_DAY, MONTH = AGE_MO;
  const fmtWhen = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
  // its age: "4 years" when the range leaves no doubt, "~4 years" when it may be 3 or 4 (by the middle); years from a
  // year, months from a month, days below
  const ageSaid = (lo, hi, now) => {
    const young = now - hi, old = now - lo, mid = (young + old) / 2;
    const [unit, word] = mid >= AGE_YEAR ? [AGE_YEAR, "year"] : mid >= MONTH ? [MONTH, "month"] : [DAY, "day"];
    const n = Math.floor(mid / unit), sure = Math.floor(young / unit) === Math.floor(old / unit);
    return `${sure ? "" : "~"}${n} ${word}${n === 1 ? "" : "s"}`;
  };
  // when it was made, in your own time: once known to the day; with the time once known to the minute; else nothing
  const fmtDay = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric" });
  const fmtDayTime = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
  const madeSaid = (lo, hi) => hi - lo <= 6e4 ? fmtDayTime.format(lo)
    : new Date(lo).toDateString() === new Date(hi).toDateString() ? `<span title="${fmtDayTime.format(lo)} – ${fmtDayTime.format(hi)}">${fmtDay.format(lo)}</span>` : "";
  // a stretch of time: "20d" from a day on, else a clock, "5:04", with seconds under an hour, "0:04:09"; under ten
  // minutes, in red
  const two = n => String(n).padStart(2, "0");
  const clock = ms => { const s = Math.max(0, Math.round(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60; return h ? `${h}:${two(m)}` : `0:${two(m)}:${two(s % 60)}`; };
  // (a clock keeps a fixed width, so the cell doesn't move as it counts down)
  const stretch = ms => (ms >= DAY ? `${Math.round(ms / DAY)}d` : `<span class="clk${ms < 36e5 ? " clk-s" : ""}${ms < 6e5 ? " soon" : ""}">${clock(ms)}</span>`);
  // a window's length: "6d", "3h", "40m"
  const length = ms => (ms >= DAY ? `${Math.round(ms / DAY)}d` : ms >= 36e5 ? `${Math.round(ms / 36e5)}h` : `${Math.max(1, Math.round(ms / 6e4))}m`);
  // the check, one sentence: "3h window opens in 13:14", or "3h window is open now for 0:38:59 (64%⭣)" with what's left
  // of it and how far through it is, rising to the best check at 50%, falling after, the arrow raised (the tip: when the
  // best check is, and how much of the range a reading cuts off now at least); then its reason for standing out, if it does
  const checkSaid = (a, now, best, why) => (a.inside
    ? `<span title="Best check ${fmtWhen.format(best)}; a reading now cuts off ${Math.round(100 * a.side / (a.hi - a.lo)) || "<1"}% at least">${length(a.hi - a.lo)} window <span class="now">is open now</span>${a.end === Infinity ? ""
      : ` for ${stretch(a.end - now)} (${Math.round(100 * (1 - (a.end - now) / (a.hi - a.lo)))}%<sup class="arr">${a.rising ? "⭡" : "⭣"}</sup>)`}</span>`
    : `<span title="Best check ${fmtWhen.format(best)}; readings help from ${fmtWhen.format(a.start)}">${length(a.hi - a.lo)} window opens in ${stretch(a.start - now)}</span>`)
    + (why ? ` <span class="bd-tag bd-tag-${why.split(" ")[0]}">${why}</span>` : "");
  // the order of the check column, by urgency (the sort notes): a window is "active" from 2/7 of the way (about 29%) through it to
  // its end, and those come first, the soonest to close first; two closing within a few hours of each other, the one
  // longer than a day first (its birthday to lock in before the birth minute), then the one nearest the target, 30% of
  // the way. Then the ones too early to ask, by when they become active; then the windows not open, by their next
  // target; the known-to-the-minute last. The tag names the active ones (ask) and the early ones (early)
  const HOUR = 36e5, ASK = 2 / 7;  // (how far through a window asking starts)
  function opportunity(a, now) {
    const W = a.hi - a.lo, start = a.inside ? a.end - W : a.start, end = start + W, target = start + 0.3 * W, left = end - now;
    if (a.inside && a.end === Infinity) return [0, 0, "ask"];  // (a boundary always inside: ask any time, first of all)
    if (a.inside && now >= start + ASK * W) return [0, Math.floor(left / (3 * HOUR)) * 1e9 + (W > DAY ? 0 : 1e8) + Math.min(1e8 - 1, Math.abs(now - target)), "ask"];
    if (a.inside) return [1, start + ASK * W - now, "early"];
    return [2, target - now, ""];
  }
  // the rows' order: by a column (its header clicked: again, the other way), set when the page loads (as kept, by
  // account) and when a header is clicked, then kept as ages are added (a new character last); by the check column,
  // redone each minute
  let order = null, prev = [], sortBy = "acct", sortDir = 1;
  const COLS = [["acct", "Account"], ["name", "Character"], ["age", "Age", "How old it is: ~ when the range leaves a doubt"],
    ["created", "Created", "When it was made (your time), once known to the day; with the time once known to the minute"],
    ["range", "Range", "How long the time it can have been made in still is (rounded up): days, then hours, then minutes", "num"],
    ["check", "Check window", "How long readings of /age help for, and when: opening in so long, or open now with what's left and how far through (the best check at 50%). Sorted by urgency: the windows open and at least 2/7 through, the soonest to close first (then the longer one, then the nearest its 30% target); then the ones too early to ask; then the windows not open, by their next target", "chk"]];
  // the rows shown, by character id: what the second-by-second refresh works from
  let shown = [];
  // an age's colour, as on the Overview: a gradient over the characters shown, oldest to newest (one character: none)
  let bdLo = 0, bdHi = 0;
  const ageColor = mid => (bdHi === bdLo ? "" : ` style="color: color-mix(in oklab, var(--gw6) ${Math.round(100 * (mid - bdLo) / (bdHi - bdLo))}%, var(--gw3))"`);
  // what a row's live cells say now: its age, when it was made, the range, the check, and the readings /age can give
  function cells(r, now) {
    const { lo, hi, done } = r, a = ageAt(r.made, now), mid = (lo + hi) / 2;
    // (the best check is when a boundary is at the middle, the next time if the one inside has passed it)
    const best = a.next >= now ? a.next : mid + ageNextX(now - mid), [tier, within, why] = opportunity(a, now);
    const add = ageAddHTML(r.c, now, false);  // (the column header says "/age says")
    return { age: `<span${ageColor(mid)}>${ageSaid(lo, hi, now)}</span>`, created: madeSaid(lo, hi),
      range: done ? "" : a.said(Math.max(1, Math.ceil((hi - lo) / a.unit))),
      check: done ? "" : checkSaid(a, now, best, why),
      add, key: { acct: r.acctAt, name: r.name.toLowerCase(), age: now - mid, created: lo, range: hi - lo, check: tier * 1e15 + within } };
  }
  const FIELDS = ["age", "created", "range", "check", "add"];
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
    // (sorted by the check column, which moves with time: the rows put in order again each minute, moved, not redrawn)
    if (sortBy === "check" && now - lastSort >= 6e4 && !ageHolding()) { lastSort = now; reorder(true); }
  }
  // the rows in order: as kept (by account), or by the column clicked (ties as they were); the check column by
  // opportunity, its stand-outs first; clicked again, the whole table the other way round; the table's rows moved to match
  function reorder(fresh = false) {
    if (fresh || !order) {
      const last = sortBy === "check", was = x => { const i = (fresh ? order : prev).indexOf(x.id); return i < 0 ? 1e9 : i; };
      // (by account: the kept order outright; by a column: ties as they were)
      shown.sort((a, b) => sortBy === "acct" ? a.i - b.i
        : (last && a.done !== b.done ? a.done - b.done : 0) || (a.key[sortBy] < b.key[sortBy] ? -1 : a.key[sortBy] > b.key[sortBy] ? 1 : 0) || was(a) - was(b) || a.i - b.i);
      if (sortDir < 0) shown.reverse();  // (the other way: the whole table turned round, ties and all)
      order = shown.map(x => x.id);
    } else { const at = x => { const i = order.indexOf(x.id); return i < 0 ? order.length : i; }; shown.sort((a, b) => at(a) - at(b)); }
    const body = $("bd").querySelector("tbody");
    if (body) for (const r of shown) if (r.el && r.el.parentElement === body) body.append(r.el);
  }
  function render() {
    if (User.broken()) { shown = []; $("bd").innerHTML = `<p class="dim pg-empty">Your saved progress can't be read: see the <a href="backup">Backup</a> page to keep a copy of it and fix it.</p>`; return; }
    const o = User.data(), acct = c => accountName(o.accounts.find(a => a.id === c.account) || { id: c.account });
    const mids = o.chars.filter(c => c.bornBetween).map(c => c.bornBetween.map(Date.parse)).map(([a, b]) => (a + b) / 2);
    bdLo = Math.min(...mids); bdHi = Math.max(...mids);
    const now = Date.now(), rows = o.chars.filter(c => c.bornBetween).map(c => {
      const [lo, hi] = c.bornBetween.map(Date.parse);
      // down to a minute, it's known: nothing more to check (i: its place as kept, the order at first and the last tie-break)
      const r = { id: c.id, i: o.chars.indexOf(c), c, name: c.name, acct: c.account, acctAt: o.accounts.findIndex(a => a.id === c.account), made: c.bornBetween, lo, hi, done: hi - lo <= 6e4, mid: (lo + hi) / 2, was: {} };
      r.key = cells(r, now).key;
      r.html = `<tr data-id="${c.id}"><td class="dim">${esc(acct(c))}</td><td><a class="n" href="characters" data-go="${c.id}"><img src="${profImg(c.profession || 0)}" alt="">${esc(c.name)}</a></td>
        <td data-f="age"></td><td class="dim" data-f="created"></td><td class="num" data-f="range"></td><td class="dim" data-f="check"></td><td class="add" data-f="add"></td></tr>`;
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
    // (the same column again: the whole table turned round, as it stands; age: oldest first)
    if (sortBy === h.dataset.sort && order) { sortDir = -sortDir; order.reverse(); return render(); }
    sortDir = h.dataset.sort === "age" ? -1 : 1;
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
