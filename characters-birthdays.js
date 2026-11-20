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
  // a stretch of time: "20d" from a day on, else a clock, "5:04" or "0:04"
  const two = n => String(n).padStart(2, "0");
  const clock = ms => { const m = Math.max(0, Math.round(ms / 6e4)); return `${Math.floor(m / 60)}:${two(m % 60)}`; };
  const stretch = ms => (ms >= DAY ? `${Math.round(ms / DAY)}d` : clock(ms));
  // the check: the best one ahead and how long a reading helps for, "20d, 10d"; one helping now, "Now, 3:12" with
  // what's left of it (the tip: when the best check is, and how much of the range a reading cuts off now at least)
  const checkSaid = (a, now, best) => a.inside
    ? `<span title="Best check ${fmtWhen.format(best)}; a reading now cuts off ${Math.round(100 * a.side / (a.hi - a.lo)) || "<1"}% at least"><span class="now">Now</span>, ${a.end === Infinity ? "∞" : stretch(a.end - now)}</span>`
    : `<span title="Best check ${fmtWhen.format(best)}; readings help from ${fmtWhen.format(a.start)}">${stretch(best - now)}, ${stretch(a.hi - a.lo)}</span>`;
  // the rows' order: by a column (its header clicked: again, the other way), set when the page loads (oldest first) and
  // when a header is clicked, then kept as ages are added (a new character last); by a check column, redone each minute
  let order = null, prev = [], sortBy = "age", sortDir = -1;
  const COLS = [["acct", "Account"], ["name", "Character"], ["age", "Age", "How old it is: ~ when the range leaves a doubt"],
    ["created", "Created", "When it was made (your time), once known to the day; with the time once known to the minute"],
    ["range", "Range", "How long the time it can have been made in still is (rounded up): days, then hours, then minutes", "num"],
    ["check", "Best check, duration", "In how long a reading of /age halves the range, and for how long readings help; Now: one helps already, with what's left of that", "chk"]];
  // the rows shown, by character id: what the second-by-second refresh works from
  let shown = [];
  // an age's colour, as on the Overview: a gradient over the characters shown, oldest to newest (one character: none)
  let bdLo = 0, bdHi = 0;
  const ageColor = mid => (bdHi === bdLo ? "" : ` style="color: color-mix(in oklab, var(--gw6) ${Math.round(100 * (mid - bdLo) / (bdHi - bdLo))}%, var(--gw3))"`);
  // what a row's live cells say now: its age, when it was made, the range, the check, and the readings /age can give
  function cells(r, now) {
    const { lo, hi, done } = r, a = ageAt(r.made, now), mid = (lo + hi) / 2;
    // (the best check is when a boundary is at the middle, the next time if the one inside has passed it)
    const best = a.next >= now ? a.next : mid + ageNextX(now - mid);
    const add = ageAddHTML(r.c, now);
    // (sorted: the checks helping now first, the soonest to end first; then by the best check ahead)
    return { age: `<span${ageColor(mid)}>${ageSaid(lo, hi, now)}</span>`, created: madeSaid(lo, hi),
      range: done ? "" : a.said(Math.max(1, Math.ceil((hi - lo) / a.unit))),
      check: done ? "" : checkSaid(a, now, best),
      add, key: { acct: r.acct ?? 1, name: r.name.toLowerCase(), age: now - mid, created: lo, range: hi - lo, check: a.inside ? a.end - now : 1e15 + best - now } };
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
    // (sorted by a column that moves with time: the rows put in order again each minute, moved, not redrawn)
    if (sortBy === "check" && now - lastSort >= 6e4 && !ageHolding()) { lastSort = now; reorder(true); }
  }
  // the rows in order: by the sort column (ties as they were), or as kept (order); the table's rows moved to match
  function reorder(fresh = false) {
    if (fresh || !order) {
      const last = sortBy === "check", was = x => { const i = (fresh ? order : prev).indexOf(x.id); return i < 0 ? 1e9 : i; };
      shown.sort((a, b) => (last && a.done !== b.done ? a.done - b.done : 0) || (a.key[sortBy] < b.key[sortBy] ? -sortDir : a.key[sortBy] > b.key[sortBy] ? sortDir : 0) || was(a) - was(b) || a.mid - b.mid);
      order = shown.map(x => x.id);
    } else { const at = x => { const i = order.indexOf(x.id); return i < 0 ? order.length : i; }; shown.sort((a, b) => at(a) - at(b)); }
    const body = $("bd").querySelector("tbody");
    if (body) for (const r of shown) if (r.el && r.el.parentElement === body) body.append(r.el);
  }
  function render() {
    if (User.stored() == null || User.broken()) { shown = []; $("bd").innerHTML = `<p class="dim pg-empty">No characters yet: add them on the <a href="characters?view=edit">Edit</a> tab, or try a mock one on <a href="characters?view=about">About</a>.</p>`; return; }
    const o = User.data(), acct = c => accountName(o.accounts.find(a => a.id === c.account) || { id: c.account });
    const mids = o.chars.filter(c => c.bornBetween).map(c => c.bornBetween.map(Date.parse)).map(([a, b]) => (a + b) / 2);
    bdLo = Math.min(...mids); bdHi = Math.max(...mids);
    const now = Date.now(), rows = o.chars.filter(c => c.bornBetween).map(c => {
      const [lo, hi] = c.bornBetween.map(Date.parse);
      // down to a minute, it's known: nothing more to check
      const r = { id: c.id, c, name: c.name, acct: c.account, made: c.bornBetween, lo, hi, done: hi - lo <= 6e4, mid: (lo + hi) / 2, was: {} };
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
