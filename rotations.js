"use strict";

const ROT = Object.fromEntries(window.GW_ROTATIONS.map(r => [r.key, r]));
const MISSION_NAMES = new Set(window.GW_MISSIONS.filter(m => m.kind === "PvE").map(m => m.name));
const DAILY = ["zaishen-mission", "zaishen-bounty", "zaishen-vanquish", "zaishen-combat", "wanted",
  "nicholas-sandford", "vanguard"].map(k => ROT[k]);
const WEEKLY = ["nicholas-traveler", "weekly-pve", "weekly-pvp"].map(k => ROT[k]);
const SHORT = {
  "zaishen-mission": "Zaishen Mission", "zaishen-bounty": "Zaishen Bounty", "zaishen-vanquish": "Zaishen Vanquish",
  "zaishen-combat": "Zaishen Combat", "wanted": "Shining Blade", "nicholas-sandford": "Nicholas Sandford",
  "vanguard": "Vanguard", "nicholas-traveler": "Nicholas the Traveler", "weekly-pve": "PvE bonus", "weekly-pvp": "PvP bonus",
};
const SHOW_DAYS = 21, SHOW_WEEKS = 12;
const fmtDay = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" });
const fmtTime = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" });

const $find = $("find");

const NOW = [["zaishen-mission", "Zaishen Mission"], ["zaishen-bounty", "Zaishen Bounty"],
  ["zaishen-vanquish", "Zaishen Vanquish"], ["zaishen-combat", "Zaishen Combat"], ["wanted", "Shining Blade"],
  ["nicholas-sandford", "Pre-Searing"], ["vanguard", "Vanguard"], null,
  ["nicholas-traveler", "Nicholas"], ["weekly-pve", "PvE bonus"], ["weekly-pvp", "PvP bonus"]];

function renderNow() {
  $("now").innerHTML = rotationListHTML(NOW, ROT, MISSION_NAMES);
}

function matches(e, ts) {
  if (!ts.length) return true;
  const k = fold([e.name, e.where, e.region].filter(Boolean).join(" "));
  return ts.every(t => k.includes(t));
}

function cell(r, e, ts) {
  const html = ts.length && matches(e, ts)
    ? `<mark>${rotationEntryHTML(r, e, MISSION_NAMES)}</mark>` : rotationEntryHTML(r, e, MISSION_NAMES);
  return `<td>${html}</td>`;
}

// Rows are reset periods of the first rotation; other rotations in the table share its period length.
function table(el, rotations, count, label) {
  const ts = terms($find);
  const anchor = rotations[0];
  const k0 = Rotation.period(anchor);
  const span = ts.length ? Math.max(...rotations.map(r => r.entries.length)) : count;
  let rows = "";
  for (let i = 0; i < span; i++) {
    const t = Rotation.startsAt(anchor, k0 + i) + 1000;
    const entries = rotations.map(r => Rotation.current(r, t));
    if (ts.length && !entries.some(e => matches(e, ts))) continue;
    rows += `<tr class="${i === 0 ? "cur" : ""}"><th>${label(t, i)}</th>${rotations.map((r, j) => cell(r, entries[j], ts)).join("")}</tr>`;
  }
  el.innerHTML = `<thead><tr><th></th>${rotations.map(r => `<th>${esc(SHORT[r.key])}</th>`).join("")}</tr></thead>`
    + `<tbody>${rows || `<tr><td colspan="${rotations.length + 1}" class="dim">No match in a full cycle.</td></tr>`}</tbody>`;
}

function render() {
  renderNow();
  table($("daily"), DAILY, SHOW_DAYS, (t, i) => (i === 0 ? "Today" : fmtDay.format(t)));
  table($("weekly"), WEEKLY, SHOW_WEEKS, (t, i) => (i === 0 ? "This week" : `Week of ${fmtDay.format(t)}`));
  const daily = Rotation.endsAt(ROT["zaishen-mission"]);
  const sandford = Rotation.endsAt(ROT["nicholas-sandford"]);
  const weekly = Rotation.endsAt(ROT["weekly-pve"]);
  $("tz").textContent = `Times in your time zone. Dailies change at ${fmtTime.format(daily)}, Nicholas Sandford at ${fmtTime.format(sandford)}, weeklies on ${new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(weekly)} at ${fmtTime.format(weekly)}.`;
}

$find.value = new URLSearchParams(location.hash.slice(1)).get("q") || "";
$find.addEventListener("input", () => {
  history.replaceState(null, "", $find.value ? "#q=" + encodeURIComponent($find.value) : location.pathname);
  render();
});
render();
setInterval(renderNow, 30000);
