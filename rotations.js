"use strict";

const ROT = ROTATIONS;
const DAILY = ["zaishen-mission", "zaishen-bounty", "zaishen-vanquish", "zaishen-combat", "wanted",
  "nicholas-sandford", "vanguard"].map(k => ROT[k]);
const WEEKLY = ["nicholas-traveler", "weekly-pve", "weekly-pvp"].map(k => ROT[k]);
const SHORT = {
  "zaishen-mission": "Mission", "zaishen-bounty": "Bounty", "zaishen-vanquish": "Vanquish",
  "zaishen-combat": "Combat", "wanted": "Shining Blade", "nicholas-sandford": "Nicholas Sandford",
  "vanguard": "Vanguard", "nicholas-traveler": "Nicholas the Traveler", "weekly-pve": "PvE bonus", "weekly-pvp": "PvP bonus",
};
const SHOW_DAYS = 21, SHOW_WEEKS = 12, SHOW_FIRST = 4;
const DAILY_AHEAD = 91 * 86400000;  // the daily table lists matches at most three months ahead
// each table starts with its first few rows; "Show more" opens the rest (a search always shows every match)
const expanded = { daily: false, weekly: false };
// a date shows its year only when it isn't this year's
const withYear = (opts, f = new Intl.DateTimeFormat(undefined, opts), fy = new Intl.DateTimeFormat(undefined, { ...opts, year: "numeric" })) =>
  ({ format: t => (new Date(t).getFullYear() === new Date().getFullYear() ? f : fy).format(t) });
const fmtDay = withYear({ weekday: "short", month: "short", day: "numeric" });
const fmtTime = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" });

const $find = $("find");

const NOW = [["zaishen-mission", "Zaishen Mission"], ["zaishen-bounty", "Zaishen Bounty"],
  ["zaishen-vanquish", "Zaishen Vanquish"], ["zaishen-combat", "Zaishen Combat"], ["wanted", "Shining Blade"],
  ["nicholas-sandford", "Sandford"], ["vanguard", "Vanguard"], null,
  ["nicholas-traveler", "Nicholas"], ["weekly-pve", "PvE bonus"], ["weekly-pvp", "PvP bonus"]];

function renderNow() {
  $("now").innerHTML = rotationListHTML(NOW);
}

function matches(e, ts) {
  if (!ts.length) return true;
  // the entry's name and place (a bounty's area too; no region, no aliases), each search word the start of one of
  // their words, so a search marks just what it names ("rn" is not inside "Southern")
  const words = fold([entryName(e), e.creature && locName(e.location)].filter(Boolean).join(" ")).split(/[\s'-]+/);
  return ts.every(t => words.some(w => w.startsWith(t)));
}

// a cell the search matched is marked as a whole, so it stands out in a wide table
function cell(r, e, ts) {
  return `<td${ts.length && matches(e, ts) ? ' class="r-hit"' : ""}>${entryHTML(e)}</td>`;
}

// time to the column's next reset: 5h 06m, or 3d 4h for a weekly
function left(ms) {
  const m = Math.max(0, Math.floor(ms / 60000)), h = Math.floor(m / 60);
  return h >= 24 ? timeLeft(ms) : `${h}h ${String(m % 60).padStart(2, "0")}m`;
}

// Rows are reset periods of the first rotation; other rotations in the table share its period length.
function table(el, rotations, count, label, ahead = Infinity) {
  const ts = terms($find);
  const anchor = rotations[0];
  const k0 = Rotation.period(anchor);
  const span = ts.length ? Math.max(...rotations.map(r => r.entries.length)) : count;
  let rows = "";
  for (let i = 0; i < span; i++) {
    const t = Rotation.startsAt(anchor, k0 + i) + 1000;
    if (t > Date.now() + ahead) break;
    // each rotation's own i-th period from now: Nicholas Sandford resets at another hour than the Zaishen dailies, so
    // what runs at the row's start isn't what runs now
    const entries = rotations.map(r => Rotation.entry(r, Rotation.period(r) + i));
    if (ts.length && !entries.some(e => matches(e, ts))) continue;
    rows += `<tr class="${i === 0 ? "cur" : ""}"><th>${label(t, i)}</th>${rotations.map((r, j) => cell(r, entries[j], ts)).join("")}</tr>`;
  }
  el.innerHTML = `<thead><tr><th></th>${rotations.map(r => `<th>${esc(SHORT[r.key])} <span class="r-left">(${left(Rotation.endsAt(r) - Date.now())})</span></th>`).join("")}</tr></thead>`
    + `<tbody>${rows || `<tr><td colspan="${rotations.length + 1}" class="dim">No match in a full cycle.</td></tr>`}</tbody>`;
}

function render() {
  renderNow();
  table($("daily"), DAILY, expanded.daily ? SHOW_DAYS : SHOW_FIRST, (t, i) => (i === 0 ? "Today" : fmtDay.format(Date.now() + i * 86400000)), DAILY_AHEAD);
  table($("weekly"), WEEKLY, expanded.weekly ? SHOW_WEEKS : SHOW_FIRST, (t, i) => (i === 0 ? "This week" : `Week of ${fmtDay.format(t)}`));
  const searching = terms($find).length > 0;
  $("nowbox").hidden = searching;  // a search shows only its matches
  for (const b of document.querySelectorAll("[data-more]")) {
    b.hidden = searching;
    b.textContent = expanded[b.dataset.more] ? "Show less" : "Show more";
  }
  const daily = Rotation.endsAt(ROT["zaishen-mission"]);
  const sandford = Rotation.endsAt(ROT["nicholas-sandford"]);
  const weekly = Rotation.endsAt(ROT["weekly-pve"]);
  $("tz").textContent = `Times in your time zone. Dailies change at ${fmtTime.format(daily)}, Nicholas Sandford at ${fmtTime.format(sandford)}, weeklies on ${new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(weekly)} at ${fmtTime.format(weekly)}.`;
}

/* ---------- one weekly PvE bonus's page ---------- */
const fmtWeek = withYear({ weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

// the weeks this bonus runs, from the current one on: [start, end] in ms
function bonusWeeks(id, count) {
  const r = ROT["weekly-pve"], k0 = Rotation.period(r), out = [];
  for (let k = k0; out.length < count; k++) {
    if (Rotation.entry(r, k).bonus === id) out.push([Rotation.startsAt(r, k), Rotation.startsAt(r, k + 1)]);
  }
  return out;
}

// a daily rotation's picks during one week, by the day each starts
function dailyPicks(key, [start, end]) {
  const r = ROT[key], out = [];
  // dailies reset an hour after the weekly bonus: the one already running at its start is left out
  for (let k = Rotation.period(r, start) + 1; Rotation.startsAt(r, k) < end; k++) out.push([Rotation.startsAt(r, k), Rotation.entry(r, k)]);
  return out;
}

function bonusPageHTML(b) {
  const weeks = bonusWeeks(b.id, 4);
  const now = Date.now();
  const active = weeks[0][0] <= now;
  const status = active ? `Active now, ends in ${timeLeft(weeks[0][1] - now)}` : `Next: ${fmtWeek.format(weeks[0][0])}`;
  const week = weeks[0];
  const picks = b.daily ? dailyPicks(b.daily, week) : [];
  const pickHTML = e => entryHTML(e) + (e.creature ? entryWhere(e) : "");
  const others = Object.values(BONUSES).filter(x => x !== b);
  return `<p class="back"><a href="?">← Rotations</a></p>
    <div class="sp-head" style="--pc:var(--accent)">
      <div class="sp-title"><h2>${esc(b.name)} Bonus</h2><div class="sp-sub">Weekly PvE bonus · Monday 15:00 UTC to the next Monday</div></div>
      <div class="lstats"><span class="lstat"><small>${active ? "This week" : "Next"}</small><b>${esc(active ? `ends in ${timeLeft(week[1] - now)}` : fmtDay.format(week[0]))}</b></span></div>
    </div>
    <div class="lgrid">
      <div class="lside">
        <section class="lbox"><h4>What it does</h4><p class="sp-desc">${esc(b.effect)}</p>
          <p class="dim sp-concise">In game: “${esc(b.announcement)}”</p></section>
        <section class="lbox"><h4>Best things to do</h4><ul class="lnotes">${b.tips.map(t => `<li>${text(t)}</li>`).join("")}</ul></section>
      </div>
      <div class="lside">
        <section class="lbox"><h4>When</h4><ul class="lrows">${weeks.map(([s, e], i) =>
          `<li><span>${fmtWeek.format(s)}</span><span class="dim">${i === 0 && active ? "now" : `to ${fmtDay.format(e)}`}</span></li>`).join("")}</ul>
          <p class="dim" style="margin:8px 0 0;font-size:12px">${esc(status)}. Times in your time zone; the nine PvE bonuses take turns, one per week.</p></section>
        ${picks.length ? `<section class="lbox"><h4>${{ "zaishen-mission": "Zaishen missions", "zaishen-bounty": "Zaishen bounties", "zaishen-vanquish": "Zaishen vanquishes" }[b.daily]} ${active ? "this week" : "that week"}</h4><ul class="lrows">${picks.map(([t, e]) =>
          `<li><span>${pickHTML(e)}</span><span class="dim">${fmtDay.format(t)}</span></li>`).join("")}</ul></section>` : ""}
        <section class="lbox"><h4>Other PvE bonuses</h4><div class="chips">${others.map(x =>
          `<a class="chip" style="text-decoration:none" href="${query({ bonus: x.id })}">${esc(x.name)}</a>`).join("")}</div></section>
      </div>
    </div>
    <p class="dim" style="font-size:12px;margin-top:10px">Effects from the <a href="https://web.archive.org/web/2025/https://wiki.guildwars.com/wiki/Weekly_bonuses" target="_blank" rel="noopener">Guild Wars Wiki</a> (archived); tips written for this site.</p>`;
}

// the rotation tables, or one bonus's page when the address names one
function show() {
  const p = args();
  const b = BONUSES[p.get("bonus")];
  $("browse").hidden = !!b;
  $("bonus").hidden = !b;
  if (b) {
    $("bonus").innerHTML = bonusPageHTML(b);
    document.title = `${b.name} Bonus · GW Rotations`;
    window.scrollTo(0, 0);
    return;
  }
  document.title = "GW Rotations";
  $find.value = p.get("q") || "";
  render();
  // his map: this week's, or the week of an item clicked (?nick=<entry>), scrolled to
  const i = p.has("nick") && NICK.entries[p.get("nick")] ? +p.get("nick") : Rotation.period(NICK) % NICK.entries.length;
  if (+$("nick").dataset.nick !== i || !$("nick").firstChild) {
    const e = NICK.entries[i];
    $("nick-what").textContent = `· ${e.count} × ${e.item}, ${locName(e.location)}`;
    nickMap($("nick"), i);
  }
  // (on arriving, after the search box's autofocus has had its say)
  if (p.has("nick") && scrollNick) $("nickbox").scrollIntoView({ behavior: "smooth" });
  if (p.has("nick") && first) setTimeout(() => $("nickbox").scrollIntoView(), 100);
  scrollNick = first = false;
}
// the map is scrolled to for an item clicked in the Now list (or on arriving from another page's), not in the tables
let scrollNick = false, first = true;
document.addEventListener("click", e => { scrollNick = !!e.target.closest('#now a[href*="nick="]'); }, true);

$find.addEventListener("input", () => {
  history.replaceState(null, "", $find.value ? "?q=" + encodeURIComponent($find.value) : location.pathname);
  render();
});
show();
onRoute(show);
setInterval(() => { if (!$("browse").hidden) render(); }, 30000);  // the clocks in the column titles too
for (const b of document.querySelectorAll("[data-more]")) {
  b.addEventListener("click", () => { expanded[b.dataset.more] = !expanded[b.dataset.more]; render(); });
}
