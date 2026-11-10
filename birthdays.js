"use strict";
/* The Birthdays page: every character with a range it was made in ("bornBetween", narrowed here or on My Characters'
   Edit tab), and when a check of /age narrows it. */
// every character with a range it was made in ("bornBetween", narrowed on My Characters' Edit tab), oldest first (by the
// range's middle; the others left out); a reading of /age now splits the range where a month would tick over, if that's
// inside it: the days the range would be cut to, either way. A month: a twelfth of the game's 365-day year
{
  const DAY = 864e5, MONTH = 365 / 12 * DAY;
  // an age as "~5y, 4m" (under a year "~4m", under two months "~12d")
  const fmtWhen = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
  const ageSaid = ms => { const y = Math.floor(ms / (12 * MONTH)), m = Math.floor((ms - y * 12 * MONTH) / MONTH);
    return y ? `~${y}y, ${m}m` : m >= 2 ? `~${m}m` : `~${Math.floor(ms / DAY)}d`; };
  // the day it was made in, once known (a UTC date, as the range's days are counted)
  const fmtDob = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  // a time ahead as "in 3 days" (then hours, then minutes), its date in the tip; under a minute "Now"
  const inSaid = (ms, at) => { if (ms < 6e4) return "Now";
    const [u, w] = ms >= 2 * DAY ? [DAY, "day"] : ms >= 2 * 36e5 ? [36e5, "hour"] : [6e4, "minute"], n = Math.round(ms / u);
    return `<span title="${fmtWhen.format(at)}">in ${n} ${w}${n === 1 ? "" : "s"}</span>`; };
  // the order the rows are in: set when the page loads (oldest first), kept as ages are added (a new character last)
  // the rows' order: by a column (its header clicked: again, the other way), set when the page loads (oldest first) and
  // when a header is clicked, then kept as ages are added (a new character last)
  let order = null, prev = [], sortBy = "age", sortDir = -1;
  // the unit a span is said in: days while it covers more than two dates, then hours, then minutes
  const unitOf = (lo, hi) => (Math.floor(hi / DAY) - Math.floor(lo / DAY) + 1 > 2 ? [DAY, "day"] : hi - lo >= 36e5 ? [36e5, "hour"] : [6e4, "minute"]);
  const COLS = [["acct", "Account"], ["name", "Character"], ["age", "Age/DOB", "About how old it is; once the day it was made in is known, that day (UTC)"],
    ["range", "Range", "How long the time it can have been made in still is (rounded up): days, then hours, then minutes", "num"],
    ["best", "Best check (50%)", "When a reading of /age halves the range (the age it says ticks over at its middle)", "chk"],
    ["start", "Can check", "When a reading of /age starts to narrow the range (the age it says ticks over inside it); now, how much of it a reading cuts off at least: ⭡ still rising to the best check, ⭣ past it", "chk"]];
  function render() {
    if (User.stored() == null || User.broken()) { $("bd").innerHTML = `<p class="dim">No characters yet: see <a href="characters">My Characters</a>.</p>`; return; }
    const o = User.data(), acct = c => accountName(o.accounts.find(a => a.id === c.account) || { id: c.account });
    const now = Date.now(), rows = o.chars.filter(c => c.bornBetween).map(c => {
      const [lo, hi] = c.bornBetween.map(Date.parse);
      // down to a minute, it's known: nothing more to check
      const done = hi - lo <= 6e4, [unit, word] = unitOf(lo, hi), said = n => `${n} ${word}${n === 1 ? "" : "s"}`;
      // where a month (a day, under two months old: ageTick) ticks over for a reading now: inside the range, it splits it
      const tick = ageTick(lo, hi, now), b = now - Math.floor((now - lo) / tick) * tick, side = b > lo && b < hi ? Math.min(b - lo, hi - b) : 0;
      // a reading helps from when that tick enters the range (now, while it's inside), and halves it when the tick is at the middle, next
      const mid = (lo + hi) / 2, best = mid + Math.ceil((now - mid) / tick) * tick, start = side ? now : lo + Math.ceil((now - lo) / tick) * tick;
      const cut = Math.round(100 * side / (hi - lo));
      const name = `<td class="dim">${esc(acct(c))}</td><td><a class="n" href="characters" data-go="${c.id}"><img src="${profImg(c.profession || 0)}" alt="">${esc(c.name)}</a></td>`;
      const add = done ? `<span class="dim known">Known to the minute</span>` : `<input type="text" class="xp-age" data-age="${c.id}" maxlength="12" placeholder="X ${tick === DAY ? "days" : "months"}" aria-label="What /age says for ${esc(c.name)}"><button type="button" class="u-btn" data-age-add="${c.id}">Add</button>`;
      const html = `<tr>${name}<td>${Math.floor(lo / DAY) === Math.floor(hi / DAY) ? fmtDob.format(lo) : ageSaid(now - mid)}</td><td class="num">${done ? "" : said(Math.max(1, Math.ceil((hi - lo) / unit)))}</td>
        <td class="dim">${done ? "" : inSaid(best - now, best)}</td><td class="dim">${done ? "" : side ? (cut ? `<span class="now">Now</span> (${cut}%)<span class="arr">${b < mid ? "⭡" : "⭣"}</span>` : `<span class="now">Soon</span>`) : inSaid(start - now, start)}</td><td class="add">${add}</td></tr>`;
      // what each column sorts by (known to the minute: last on the checks, either way); a check helping now, the most it cuts first
      return { id: c.id, html, mid, done, key: { acct: c.account ?? 1, name: c.name.toLowerCase(), age: now - mid, range: hi - lo, best, start: start - cut } };
    });
    if (!rows.length) { $("bd").innerHTML = `<p class="dim">No character's age known yet: add one on My Characters' Edit tab.</p>`; return; }
    if (!order) {
      // (ties left in the order they were in: by account, each account's characters as they were)
      const last = sortBy === "best" || sortBy === "start", was = x => { const i = prev.indexOf(x.id); return i < 0 ? prev.length : i; };
      rows.sort((a, b) => (last && a.done !== b.done ? a.done - b.done : 0) || (a.key[sortBy] < b.key[sortBy] ? -sortDir : a.key[sortBy] > b.key[sortBy] ? sortDir : 0) || was(a) - was(b) || a.mid - b.mid);
      order = rows.map(x => x.id);
    }
    const at = x => { const i = order.indexOf(x.id); return i < 0 ? order.length : i; };
    rows.sort((a, b) => at(a) - at(b));
    const head = COLS.map(([k, t, tip, cls]) => `<th class="sort${cls ? ` ${cls}` : ""}"${tip ? ` title="${tip}"` : ""}><button type="button" data-sort="${k}">${t}${sortBy === k ? (sortDir > 0 ? " ▴" : " ▾") : ""}</button></th>`).join("");
    $("bd").innerHTML = `<table class="xp-bd"><thead><tr>${head}<th>Add what /age says</th></tr></thead><tbody>${rows.map(x => x.html).join("")}</tbody></table>`;
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
  // a reading: "79", "79 months", "12 days"; the range narrowed (to the minute, the earliest end down and the latest up),
  // one that doesn't fit refused
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-age-add]");
    if (!btn || User.broken()) return;
    const box = document.querySelector(`[data-age="${btn.dataset.ageAdd}"]`), m = box.value.trim().toLowerCase().match(/^(\d+)\s*(d|days?|m|mo|months?)?$/);
    if (!m) return box.focus();
    const n = +m[1], u = m[2]?.startsWith("d") ? DAY : MONTH, now = Date.now(), o = User.data(), c = o.chars.find(x => x.id === +btn.dataset.ageAdd);
    const [a, b] = c.bornBetween.map(Date.parse), lo = Math.max(a, now - (n + 1) * u), hi = Math.min(b, now - n * u);
    if (lo > hi) { box.value = ""; box.placeholder = "Doesn't fit: check again"; return; }
    const iso = t => new Date(t).toISOString().slice(0, 16) + "Z";
    c.bornBetween = [iso(Math.floor(lo / 6e4) * 6e4), iso(Math.ceil(hi / 6e4) * 6e4)];
    User.save(o); render();
  });
  document.addEventListener("keydown", e => { if (e.target.matches?.("[data-age]") && e.key === "Enter") document.querySelector(`[data-age-add="${e.target.dataset.age}"]`).click(); });
  // a character's name: My Characters, with it picked
  document.addEventListener("click", e => { const a = e.target.closest("[data-go]"); if (a) User.pick(+a.dataset.go); });
  render();
  addEventListener("userchange", render);
  setInterval(render, 60000);
}
