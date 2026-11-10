"use strict";
/* The Today page: a day's dailies and weekly bonus (today, or a day picked: today?d=2026-11-20) and what your
   characters can do with them: who still needs each Zaishen daily, whose titles a support week helps, whose age a
   check of /age that day narrows. A day picked is taken at an hour picked (at first, this hour). */
const fmtDay = new Intl.DateTimeFormat(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
// the moment looked at: the day and hour picked (today?d=2026-11-25&h=15; a day alone: at this hour), else now
function moment() {
  const d = args().get("d"), m = d && d.match(/^(\d{4})-(\d{2})-(\d{2})$/), h = args().get("h");
  if (!m && h == null) return Date.now();
  const now = new Date(), t = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(now);
  t.setHours(h != null && +h >= 0 && +h < 24 ? +h : now.getHours(), 0, 0, 0);
  return isNaN(t) ? Date.now() : +t;
}
// the hours to pick, in the viewer's own clock
$("td-time").innerHTML = [...Array(24).keys()].map(h => `<option value="${h}">${new Date(2026, 0, 1, h).toLocaleTimeString(undefined, { hour: "numeric" })}</option>`).join("");
const fmtWhen = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
// a row: its label, with the time left till it changes (from the moment looked at), its entry, the rest
let T = Date.now();
const row = (label, e, rest = "", key = null) => `<tr><td>${label}${key && ROTATIONS[key] ? `<small class="td-left">${timeLeft(Rotation.endsAt(ROTATIONS[key], T) - T)}</small>` : ""}</td>
  <td class="e">${entryHTML(e)}${entryWhere(e)}</td><td>${rest}</td></tr>`;
// the characters a Zaishen daily is shown for: the ones that do that kind of thing, 3 at least done (missions in HM,
// areas vanquished, dungeons in HM)
const hmCount = (c, part, is) => Object.entries(c[part] || {}).filter(([id, d]) => d & 2 && is(id)).length;
const ACTIVE = {
  "zaishen-mission": c => hmCount(c, "missions", id => hasModes(MISSIONS[id])) >= 3,
  "zaishen-vanquish": c => (c.vanquished || []).length >= 3,
  "zaishen-bounty": c => hmCount(c, "dungeons", isTickedDungeon) >= 3,
};
function draw() {
  const t = moment(), picked = args().has("d") || args().has("h"), today = ymd(t) === ymd(Date.now());
  T = t;
  drawnAt = Date.now();
  $("td-date").value = ymd(t);
  $("td-time").value = String(new Date(t).getHours());
  // (a moment picked: said, with the way back to now)
  $("td-today").hidden = $("td-at").hidden = !picked;  // (the time to pick only once a day is: now, it's now)
  $("td-when").textContent = picked ? `Showing ${fmtWhen.format(t)}, as if it were now` : "";
  const at = key => Rotation.current(ROTATIONS[key], t);
  const ok = User.stored() != null && !User.broken(), o = ok ? User.data() : null;
  // (the characters still played: not hidden nor marked no longer played)
  const played = c => !c.hidden && !c.retired;
  const cs = ok ? byImportance(o.chars.filter(c => played(c) && !(c.modes || []).includes("presearing")), o) : [];
  const none = '<span class="dim">No characters yet: see <a href="characters">My Characters</a>.</span>';
  // the Zaishen dailies, each with who still needs it
  // (and the Vanguard quest, for the pre-Searing characters not yet Legendary Defenders of Ascalon)
  const pres = ok ? byImportance(o.chars.filter(c => played(c) && (c.modes || []).includes("presearing") && titleRankOf(TITLES[21], c, o) < 1), o) : [];
  const vanguard = row("Vanguard", at("vanguard"), !ok ? none : pres.length ? pres.map(c => charPill(c)).join("") : '<span class="dim">No one</span>', "vanguard");
  $("td-zaishen").innerHTML = `<table class="td-t"><tbody>${[["zaishen-mission", "Mission"], ["zaishen-vanquish", "Vanquish"], ["zaishen-bounty", "Bounty"]].map(([key, label]) => {
    // (fewer than 3 that pass the bar: made up to 3 with the next in line that need it all the same, dimmer)
    const e = at(key), all = ok ? dailyNeeds(key, e, cs) : null, who = all && all.filter(([c]) => ACTIVE[key](c));
    if (who && who.length < 3) who.push(...all.filter(([c]) => !ACTIVE[key](c)).slice(0, 3 - who.length).map(([c, x]) => [c, x, true]));
    return row(label, e, !ok ? none : !who ? '<span class="dim">Nothing to track</span>' : who.length ? who.map(([c, x, more]) => more ? charPill(c, x).replace('class="c-pill"', 'class="c-pill more"') : charPill(c, x)).join("") : '<span class="dim">No one</span>', key);
  }).join("")}${vanguard}</tbody></table>`;
  // the other dailies
  $("td-other").innerHTML = `<table class="td-t"><tbody>${[["zaishen-combat", "Combat"], ["wanted", "Shining Blade"], ["nicholas-sandford", "Sandford"]]
    .filter(([key]) => ROTATIONS[key]).map(([key, label]) => row(label, at(key), "", key)).join("")}</tbody></table>`;
  // the week's bonus, and for a support week whose titles it helps
  const e = at("weekly-pve"), pills = ok && BONUS_TITLES[e.bonus] ? bonusPills(e.bonus, o, cs) : null;
  $("td-bonus").innerHTML = `<table class="td-t"><tbody>${row("PvE", e, !BONUS_TITLES[e.bonus] ? '<span class="dim">No titles</span>' : !ok ? none
    : pills.length ? pills.join("") : '<span class="dim">No one: maxed</span>', "weekly-pve")}${ROTATIONS["nicholas-traveler"] ? row("Nicholas", at("nicholas-traveler"), "", "nicholas-traveler") : ""}</tbody></table>`;
  // the characters whose age a check of /age narrows: a range still in days, when a check at some hour of the day cuts a
  // third of it at least; one down to hours or minutes, whenever a check cuts it at all, with the time left to check
  const day0 = new Date(t).setHours(0, 0, 0, 0), cutAt = (c, at) => { const a = ageAt(c.bornBetween, at); return a.side / (a.hi - a.lo); };
  const bdays = ok ? byImportance(o.chars.filter(c => c.bornBetween && played(c)), o).flatMap(c => {
    const a = ageAt(c.bornBetween, t);
    if (a.done) return [];
    if (a.word === "day") return [...Array(25).keys()].some(h => cutAt(c, day0 + h * 36e5) >= 1 / 3) ? [[c, null]] : [];
    // (a check helps till the age's tick passes the range's latest end: no end for a range longer than a tick)
    return a.side ? [[c, Number.isFinite(a.end) ? a.end : null]] : [];
  }) : [];
  $("td-bday").innerHTML = !ok ? `<p>${none}</p>` : bdays.length
    // (each to its Edit tab, where its age is narrowed)
    ? bdays.map(([c, end]) => { const p = charPill(c).replace('href="characters"', 'href="characters?tab=edit"');
      return end == null ? p : p.replace(/<\/a>$/, `<span class="dim" data-end="${end}">${leftSaid(end - t)}</span></a>`); }).join("")
    : `<p class="dim">No one${today ? " today" : " that day"}.</p>`;
}
// a time left to check as a countdown: 1:04:09, 4:32
const leftSaid = ms => { const s = Math.max(0, Math.floor(ms / 1000)), h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, x = String(s % 60).padStart(2, "0");
  return `${h ? `${h}:${String(m).padStart(2, "0")}` : m}:${x} left`; };
// the countdowns counting down each second, from the moment looked at (a moment picked too, as if the clock ran from
// it); one at 0 gone, and "No one" when none are left
let drawnAt = Date.now();
setInterval(() => {
  const at = T + Date.now() - drawnAt, box = $("td-bday");
  for (const e of box.querySelectorAll("[data-end]")) {
    if (+e.dataset.end <= at) e.closest(".c-pill").remove();
    else e.textContent = leftSaid(+e.dataset.end - at);
  }
  if (!box.querySelector(".c-pill") && !box.querySelector("p")) box.innerHTML = '<p class="dim">No one now.</p>';
}, 1000);
// a day or time picked: in the address, so it can be shared or kept
const pick = () => { const d = $("td-date").value || ymd(Date.now()), h = $("td-at").hidden ? new Date().getHours() : $("td-time").value;
  history.replaceState(null, "", `?${new URLSearchParams({ d, h })}`); draw(); };
$("td-date").addEventListener("change", pick);
$("td-time").addEventListener("change", pick);
$("td-today").addEventListener("click", () => { history.replaceState(null, "", location.pathname); draw(); });
draw();
addEventListener("userchange", draw);
setInterval(() => { if (!args().has("d") && !args().has("h")) draw(); }, 30000);  // (now: the time left too)
