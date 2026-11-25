"use strict";

const ROT = ROTATIONS;
const DAILY = ["zaishen-mission", "zaishen-vanquish", "zaishen-bounty", "zaishen-combat", "wanted",
  "vanguard", "nicholas-sandford"].map(k => ROT[k]);
const WEEKLY = ["nicholas-traveler", "weekly-pve", "weekly-pvp"].map(k => ROT[k]);
const SHORT = {
  "zaishen-mission": "Mission", "zaishen-bounty": "Bounty", "zaishen-vanquish": "Vanquish",
  "zaishen-combat": "Combat", "wanted": "Shining Blade", "nicholas-sandford": "Nicholas Sandford",
  "vanguard": "Vanguard", "nicholas-traveler": "Nicholas the Traveler", "weekly-pve": "PvE bonus", "weekly-pvp": "PvP bonus",
};
const SHOW_DAYS = 21, SHOW_WEEKS = 12, FIRST_DAYS = 7, FIRST_WEEKS = 6;
const DAILY_AHEAD = 91 * 86400000;  // the daily table lists matches at most three months ahead
// each table starts with its first few rows; "Show more" opens the rest (a search always shows every match)
const expanded = { daily: false, weekly: false };
// a date shows its year only when it isn't this year's
const withYear = (opts, f = new Intl.DateTimeFormat(undefined, opts), fy = new Intl.DateTimeFormat(undefined, { ...opts, year: "numeric" })) =>
  ({ format: t => (new Date(t).getFullYear() === new Date().getFullYear() ? f : fy).format(t) });
// times in your time zone or in UTC, one choice with the Events page's, remembered in this browser
let utc = false;
try { utc = localStorage.getItem("events-utc") === "1"; } catch (e) {}
let fmtDay, fmtTime, fmtWeek, fmtWeekday;
function formats() {
  const z = utc ? { timeZone: "UTC", hourCycle: "h23" } : {};
  fmtDay = withYear({ weekday: "short", month: "short", day: "numeric", ...z });
  fmtTime = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", ...z });
  fmtWeek = withYear({ weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", ...z });
  fmtWeekday = new Intl.DateTimeFormat(undefined, { weekday: "long", ...z });
}
formats();

const $find = $("find");

function matches(e, ts) {
  if (!ts.length) return true;
  // the entry's name and area (a bounty's area too; no region, no aliases), each search word the start of one of
  // their words, so a search marks just what it names ("rn" is not inside "Southern")
  const words = fold([entryName(e), e.creature && areaName(e.area)].filter(Boolean).join(" ")).split(/[\s'-]+/);
  return ts.every(t => words.some(w => w.startsWith(t)));
}

// a Vanguard quest without its "Vanguard Annihilation: " prefix, in its column where every one has one
const short = (r, e) => (r.key === "vanguard" && e.quest && QUESTS[e.quest]
  ? LINK.quest(e.quest, QUESTS[e.quest].name.replace(/^Vanguard \w+: /, "")) : entryHTML(e));
// a cell the search matched is marked as a whole, so it stands out in a wide table; from: when the entry starts, for
// a rotation that resets at another hour than the row's
function cell(r, e, ts, from) {
  const cls = [ts.length && matches(e, ts) && "r-hit", from && "r-own"].filter(Boolean).join(" ");
  return `<td${cls ? ` class="${cls}"` : ""}>${from ? `<span class="r-from">${from === true ? "Now" : fmtDay.format(from)}</span>` : ""}${short(r, e)}</td>`;
}

// time to the column's next reset: 5h 06m, or 3d 4h for a weekly
function left(ms) {
  const m = Math.max(0, Math.floor(ms / 60000)), h = Math.floor(m / 60);
  return h >= 24 ? timeLeft(ms) : `${h}h ${String(m % 60).padStart(2, "0")}m`;
}

// Rows are reset periods of the first rotation; other rotations in the table share its period length.
// head: what the brackets after each column's title say
function table(el, rotations, count, label, ahead = Infinity, head = r => left(Rotation.endsAt(r) - Date.now())) {
  const ts = terms($find);
  const anchor = rotations[0];
  const k0 = Rotation.period(anchor);
  const own = r => (r.start - anchor.start) % r.period !== 0;  // resets at another hour than the rows
  const span = ts.length ? Math.max(...rotations.map(r => r.entries.length)) : count;
  let rows = "";
  for (let i = 0; i < span; i++) {
    const t = Rotation.startsAt(anchor, k0 + i) + 1000;
    if (t > Date.now() + ahead) break;
    // each rotation's entry running at the row's start (now, for the first row); one resetting at another hour than
    // the first rotation (Nicholas Sandford) shows when its entry starts
    const at = i === 0 ? Date.now() : t;
    const ks = rotations.map(r => Rotation.period(r, at)), entries = rotations.map((r, j) => Rotation.entry(r, ks[j]));
    if (ts.length && !entries.some(e => matches(e, ts))) continue;
    rows += `<tr class="${i === 0 ? "cur" : ""}"><th>${label(t, i)}</th>${rotations.map((r, j) => cell(r, entries[j], ts, own(r) && (i === 0 || Rotation.startsAt(r, ks[j])))).join("")}</tr>`;
  }
  el.innerHTML = `<thead><tr><th></th>${rotations.map(r => `<th${own(r) ? ' class="r-own"' : ""}>${esc(SHORT[r.key])} <span class="r-left">(${head(r)})</span></th>`).join("")}</tr></thead>`
    + `<tbody>${rows || `<tr><td colspan="${rotations.length + 1}" class="dim">No match in a full cycle.</td></tr>`}</tbody>`;
}

function render() {
  table($("daily"), DAILY, expanded.daily ? SHOW_DAYS : FIRST_DAYS, (t, i) => (i === 0 ? "Now" : fmtDay.format(t)), DAILY_AHEAD,
    r => fmtTime.format(Rotation.endsAt(r)) + (utc ? " UTC" : ""));  // the hour each column switches
  table($("weekly"), WEEKLY, expanded.weekly ? SHOW_WEEKS : FIRST_WEEKS, (t, i) => (i === 0 ? "This week" : `Week of ${fmtDay.format(t)}`));
  const searching = terms($find).length > 0;
  for (const b of document.querySelectorAll("[data-more]")) {
    b.hidden = searching;
    b.textContent = expanded[b.dataset.more] ? "Show less" : "Show more";
  }
  const daily = Rotation.endsAt(ROT["zaishen-mission"]);
  const sandford = Rotation.endsAt(ROT["nicholas-sandford"]);
  const weekly = Rotation.endsAt(ROT["weekly-pve"]);
  $("tz").innerHTML = `${utc ? 'Times are in UTC (<a id="tzflip" href="#">change to your time</a>)' : 'Times are in your time (<a id="tzflip" href="#">change to UTC</a>)'}. Dailies change at ${fmtTime.format(daily)}, Nicholas Sandford at ${fmtTime.format(sandford)}, weeklies on ${fmtWeekday.format(weekly)} at ${fmtTime.format(weekly)}.`;
  $("tzflip").onclick = e => {
    e.preventDefault();
    utc = !utc;
    try { localStorage.setItem("events-utc", utc ? "1" : "0"); } catch (x) {}
    formats();
    render();
  };
}

/* ---------- one weekly PvE bonus's page ---------- */

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
  // his map: only once an item of his is clicked (?nick=<entry>), that week's, scrolled to
  const has = p.has("nick") && !!NICK.entries[p.get("nick")];
  $("nickbox").hidden = $("nick").hidden = !has;
  if (!has) { scrollNick = first = false; return; }
  const i = +p.get("nick");
  if (+$("nick").dataset.nick !== i || !$("nick").firstChild) {
    const e = NICK.entries[i];
    $("nick-what").textContent = `· ${e.count} × ${e.item}, ${areaName(e.area)}`;
    nickMap($("nick"), i);
  }
  // (on arriving, after the search box's autofocus has had its say)
  if (p.has("nick") && scrollNick) $("nickbox").scrollIntoView({ behavior: "smooth" });
  if (p.has("nick") && first) setTimeout(() => $("nickbox").scrollIntoView(), 100);
  scrollNick = first = false;
}
// the map is scrolled to for an item of his clicked (or on arriving from another page's)
let scrollNick = false, first = true;
document.addEventListener("click", e => { scrollNick = !!e.target.closest('a[href*="nick="]'); }, true);

$find.addEventListener("input", () => {
  history.replaceState(null, "", $find.value ? "?q=" + encodeURIComponent($find.value) : location.pathname);
  render();
});
show();
onRoute(show);
setInterval(() => { if (!$("browse").hidden) render(); }, 30000);  // the clocks in the column titles too
// the picked character or its progress changed (in another tab): its marks drawn again
addEventListener("userchange", () => { if (!$("browse").hidden) render(); });
for (const b of document.querySelectorAll("[data-more]")) {
  b.addEventListener("click", () => { expanded[b.dataset.more] = !expanded[b.dataset.more]; render(); });
}
