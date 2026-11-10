"use strict";
/* My Characters: the accounts and characters whose progress the site keeps in this browser (User, in common.js). At the
   left, the characters to pick from (the one picked is the one the whole site shows the ticks of); at the right, the one
   picked: its card, its progress and its titles (titles.js). Edit (managing, in the code) swaps both for the list to change: names,
   professions, game modes, genders, order, the ones hidden from the view, new ones and deletes. */
const els = { list: $("u-list") };
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const modes = vs => `${vs.filter(v => v & 1).length} NM, ${vs.filter(v => v & 2).length} HM`;
const charCounts = c => `${plural(c.elites.length, "elite")} captured · missions ${modes(modeProgress(c, "missions"))} · dungeons ${modes(modeProgress(c, "dungeons"))}`;
// each account's characters, folded under its name (the accounts' ids, kept as one list in this browser)
const ACCT_FOLDS = "chars.folded";
const acctFolds = () => { try { return JSON.parse(localStorage.getItem(ACCT_FOLDS)) || []; } catch { return []; } };
const foldAccount = id => {
  const fs = acctFolds(), next = fs.includes(id) ? fs.filter(x => x !== id) : [...fs, id];
  try { localStorage.setItem(ACCT_FOLDS, JSON.stringify(next)); } catch { /* storage blocked */ }
};
// the characters hidden from the view (Edit still lists them, to show them again): "hidden" in the progress
const hiddenIds = (o = User.data()) => o.chars.filter(c => c.hidden).map(c => c.id);
const hideChar = id => {
  const o = User.data(), c = o.chars.find(x => x.id === id);
  if (c.hidden) delete c.hidden; else c.hidden = true;
  User.save(o);
};
// (from before, the hidden ones kept in this browser apart: into the progress, once)
try {
  const old = JSON.parse(localStorage.getItem("chars.hidden"));
  if (old && User.stored() != null && !User.broken() && !readOnly()) {
    const o = User.data();
    for (const c of o.chars) if (old.includes(c.id)) c.hidden = true;
    User.save(o);
  }
  localStorage.removeItem("chars.hidden");
} catch { /* storage blocked */ }
// the characters the view lists: all but the hidden ones (the one picked stays)
const shownChars = (o, cur) => { const hs = new Set(hiddenIds(o)); return o.chars.filter(c => c === cur || !hs.has(c.id)); };
// the picked character's tabs, [key, label, its panel]: the one shown, the same for every character, kept in this
// browser (first Titles)
const TABS = [["titles", "Titles", "title"], ["next", "What's next", "ch-next"], ["heroes", "Heroes", "ch-heroes"], ["builds", "Builds", "ch-builds"], ["edit", "Edit", "ch-edit"]], TAB = "chars.tab";
let tab = (() => { try { const t = localStorage.getItem(TAB); return TABS.some(x => x[0] === t) ? t : "titles"; } catch { return "titles"; } })();
// a tab asked for in the address (characters?tab=edit, from Today's birthdays): picked, kept, and taken off the address
{ const t = new URLSearchParams(location.search).get("tab");
  if (TABS.some(x => x[0] === t)) { tab = t; try { localStorage.setItem(TAB, t); } catch { /* storage blocked */ } history.replaceState(null, "", location.pathname); } }
// the tabs, and the one shown drawn (only it: the others are drawn when picked)
const drawTabs = (o = User.data(), cur = User.char(o)) => {
  $("ch-tabs").innerHTML = TABS.map(([k, label]) => `<button type="button" role="tab" data-tab="${k}" aria-selected="${k === tab}">${label}</button>`).join("");
  for (const [k, , id] of TABS) $(id).hidden = k !== tab;
  if (tab === "titles") redrawTitles();
  else if (tab === "next") $("ch-next").innerHTML = nextHTML(o, cur);
  else if (tab === "heroes") $("ch-heroes").innerHTML = heroesHTML(cur);
  else if (tab === "builds") $("ch-builds").innerHTML = buildsHTML(cur);
  else $("ch-edit").innerHTML = `<table class="u-chars ch-edit-row"><tbody>${charRow(o, cur, null, true)}</tbody></table>
    <label class="ch-edit-note">Note <input type="text" id="edit-note" maxlength="${USER_NOTE_MAX}" value="${esc(cur.note || "")}"
      placeholder="A line about ${esc(cur.name)}: its role, what it's farming…" autocomplete="off"><span class="dim" id="edit-note-n">${(cur.note || "").length} / ${USER_NOTE_MAX}</span></label>
    ${ageHTML(cur)}${readingsHTML(cur)}`;
};
// managing or not, not kept: the page opens on the view, or managing while nothing is saved yet, to name the character
let manage = User.stored() == null;
// the titles below draw again (titles.js, once it's in): the character picked, its account, may have changed
const redrawTitles = () => typeof draw === "function" && draw();

// Kind of a Big Deal, on the card's second line, before the modes: its rank said of the character ("Very Important", "People Know Her"), the
// titles maxed on hover; none for no rank yet (People Know Him or Her by its gender, set in Edit)
// a character spoken of by its gender (set in Edit): him, her, or them when not set
const objPronoun = c => ({ m: "him", f: "her" })[c.gender] || "them";
const cap = t => t[0].toUpperCase() + t.slice(1);
const BIG_DEAL_SAYS = ["", "Kind of a Big Deal", c => `People Know ${cap(objPronoun(c))}`, "Very Important",
  "Has Many Leather-Bound Books", "Smells of Rich Mahogany", "A God Walking Amongst Mere Mortals"];
function bigDeal(c, o) {
  const t = TITLES[10], r = titleRankOf(t, c, o), says = [BIG_DEAL_SAYS[r]].map(x => (typeof x === "function" ? x(c) : x))[0];
  return !r ? "" : `<span class="ch-says" title="Kind of a Big Deal: ${titlesMaxed(c, o)} of ${titleMax(t) * 5} titles maxed">${says}</span>`;
}
// a character's profession: its icon, a button that opens the ten to pick from (or none)
// a pre-Searing character can't be an Assassin, Ritualist, Paragon or Dervish (made in Factions or Nightfall), nor one
// made in a campaign be a profession of another (a Factions one, a Paragon): those aren't offered, nor pre-Searing to
// them
const PRE_NOT = { 7: 1, 8: 1, 9: 1, 10: 1 };
const PROF_CAMP = { 7: 2, 8: 2, 9: 3, 10: 3 };
const noPre = (c, p) => !!PROF_CAMP[p] && ((c.modes || []).includes("presearing") || (!!c.campaign && c.campaign !== PROF_CAMP[p]));
const profPick = c => `<span class="u-prof"><button type="button" class="u-prof-btn" data-prof-open aria-haspopup="true" title="${c.profession ? PROFS[c.profession] : "Profession"}">
  <img src="${profImg(c.profession || 0)}" alt="${c.profession ? PROFS[c.profession] : "No profession"}"></button>
  <span class="u-prof-menu" hidden>${[...Array(11).keys()].slice(1).concat(0).filter(p => !noPre(c, p)).map(p => `<button type="button" data-prof="${p}" title="${p ? PROFS[p] : "None"}"${(c.profession || 0) === p ? ' aria-current="true"' : ""}><img src="${profImg(p)}" alt="${p ? PROFS[p] : "None"}"></button>`).join("")}</span></span>`;
// up and down chevrons to move a character within its account, or an account among the accounts (the saved order)
const CHEV = d => `<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const moveBtns = (first, last) => `<span class="u-move"><button type="button" data-move="-1" aria-label="Move up"${first ? " disabled" : ""}>${CHEV("M3 10l5-5 5 5")}</button><button type="button" data-move="1" aria-label="Move down"${last ? " disabled" : ""}>${CHEV("M3 6l5 5 5-5")}</button></span>`;
// the optional game modes, each a badge: lit when the character is bound to it, greyed when not; click to set or clear
// a character's gender, for how the site speaks of it: not set, he or she, each click the next
const GENDERS = { "": ["He / She", "Not set"], m: ["He", "Male"], f: ["She", "Female"] };
const genderBtn = c => { const [label, name] = GENDERS[c.gender || ""];
  return `<button type="button" class="u-gender${c.gender ? "" : " unset"}" data-gender title="Gender: ${name}">${label}</button>`; };
// (pre-Searing not offered to a profession that can't be, nor to a character made in Factions or Nightfall, its place
// kept so the badges stay lined up)
const modeBadges = c => `<span class="u-modes">${Object.entries(USER_MODES).map(([m, name]) =>
  m === "presearing" && (PRE_NOT[c.profession] || madeIn(c) > 1) && !(c.modes || []).includes(m) ? '<span class="u-mode-gap"></span>' :
  `<button type="button" class="u-mode" data-mode="${m}" aria-pressed="${(c.modes || []).includes(m)}" title="${esc(name)}"><img src="img/modes/${m}.png" alt="${esc(name)}"></button>`).join("")}</span>`;
const closeProfs = () => { for (const m of document.querySelectorAll(".u-prof-menu")) m.hidden = true; };
document.addEventListener("click", e => { if (!e.target.closest(".u-prof")) closeProfs(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProfs(); });
// the counts under the card, a row by subject: [subject, [label, have, of, the page listing what's left]]; the three
// campaigns' (with the Core elites), and the Eye of the North's (the subject not shown)
const DONE_DUNGEONS = USER_ALL_V3.dungeons;
const eotn = id => AREAS[id]?.campaign === 4;
function progress(c) {
  const el = new Set(c.elites), vq = new Set(c.vanquished), has = (ids, got) => ids.filter(id => got.has(id)).length;
  const mode = (part, ids, b) => ids.filter(id => (c[part][id] || 0) & b).length;
  const ticked = USER_ALL.missions.filter(id => hasModes(MISSIONS[id]));
  const ms = ticked.filter(id => !eotn(id)), ems = ticked.filter(eotn);
  const vs = USER_ALL.vanquished.filter(id => !eotn(id)), evs = USER_ALL.vanquished.filter(eotn);
  return [["Prophecies, Factions, Nightfall", [
      ["Elites captured", has(USER_ALL.elites, el), USER_ALL.elites.length, "skills?cap=1"],
      ["Missions in NM", mode("missions", ms, 1), ms.length, "missions?c=1,2,3&d=1"],
      ["Missions in HM", mode("missions", ms, 2), ms.length, "missions?c=1,2,3&d=2"],
      ["Areas vanquished", has(vs, vq), vs.length, "areas?c=1,2,3&v=n"]]],
    ["Eye of the North", [
      ["EoTN missions in NM", mode("missions", ems, 1), ems.length, "missions?c=4&d=1"],
      ["EoTN missions in HM", mode("missions", ems, 2), ems.length, "missions?c=4&d=2"],
      ["EoTN dungeons in NM", mode("dungeons", DONE_DUNGEONS, 1), DONE_DUNGEONS.length, "dungeons?d=1"],
      ["EoTN dungeons in HM", mode("dungeons", DONE_DUNGEONS, 2), DONE_DUNGEONS.length, "dungeons?d=2"],
      ["EoTN areas vanquished", has(evs, vq), evs.length, "areas?c=4&v=n"]]]];
}
const unnamed = c => c.name === `Char${c.id}`;
const lit = c => (c.modes || []).map(m => `<img class="ch-mode" src="img/modes/${m}.png" alt="${esc(USER_MODES[m])}" title="${esc(USER_MODES[m])}">`).join("");
// an account's Reforged Coins waiting (with the bell): a coin each, clicked once they're taken (the game's icons, in img/items)
const BELL = '<img src="img/items/purveyors-bell.png" alt="Purveyor\'s Bell">', COIN = '<img src="img/items/reforged-coin.png" alt="">';
function coinsPill(a) {
  if (!a || a.reforgedCoinClock === undefined) return "";
  const n = coinsWaiting(a), left = timeLeft(coinsNext() - Date.now());
  // (at once, in the site's tooltip: how many, and the time to the next round, at any count)
  const tip = `${n ? `${n} coin${n === 1 ? "" : "s"} waiting. Next round in ${left}` : `New coins in ${left}`}. Click to reset`;
  // (a coin each, a faded one for none)
  return `<button type="button" class="ch-coins${n >= COINS.HOLD ? " full" : n ? "" : " none"}" data-coins="${a.id}" data-tip="${esc(tip)}" aria-label="${esc(tip)}">${COIN.repeat(Math.max(1, n))}</button>`;
}
// the characters to pick from, by account (with one account, just its characters); and the same as a menu, on a phone
function sideHTML(o, cur, many) {
  const folded = new Set(acctFolds());
  const item = c => `<li><button type="button" class="ch-item${c === cur ? " cur" : ""}" data-pick="${c.id}"${c === cur ? ' aria-current="true"' : ""}>
    <img src="${profImg(c.profession || 0)}" alt=""><span class="ch-iname">${esc(c.name)}</span>${lit(c)}
    <span class="ch-ig u-gwamm" data-rank="${titleRankOf(TITLES[10], c, o)}" title="Kind of a Big Deal: titles maxed">${titlesMaxed(c, o)}</span></button></li>`;
  const list = cs => `<ul class="ch-list">${cs.map(item).join("")}</ul>`, chars = shownChars(o, cur);
  // an account with all its characters hidden is left out
  return many ? o.accounts.map(a => { const cs = chars.filter(c => c.account === a.id), open = !folded.has(a.id);
    if (!cs.length) return "";
    return `<div class="ch-acct"><div class="ch-acct-row"><button type="button" class="ch-acct-h" data-fold-account="${a.id}" aria-expanded="${open}">${esc(accountName(a))}</button>${coinsPill(a)}</div>${open ? list(cs) : ""}</div>`; }).join("")
    : (coinsPill(o.accounts[0]) ? `<div class="ch-acct-row ch-acct-one"><span class="dim">Reforged Coins</span>${coinsPill(o.accounts[0])}</div>` : "") + list(chars);
}
const selectHTML = (o, cur, many) => {
  const opt = c => `<option value="${c.id}"${c === cur ? " selected" : ""}>${esc(c.name)}</option>`, chars = shownChars(o, cur);
  return many ? o.accounts.map(a => { const cs = chars.filter(c => c.account === a.id);
    return cs.length ? `<optgroup label="${esc(accountName(a))}">${cs.map(opt).join("")}</optgroup>` : ""; }).join("") : chars.map(opt).join("");
};
/* ---------- what's next tab ---------- */
// one list, by date: the next 3 days with Zaishen dailies the character still needs (a mission not done in NM and HM,
// an area not vanquished, a bounty at the end of a dungeon not done), and the next 3 weeks whose PvE bonus helps a title
// of its not maxed (bonusNeeds, common.js); looked for up to a whole cycle of each ahead
// (as far as the longest daily cycle goes, the vanquishes' 136 days, and the bonuses' whole cycle)
// the yearly events for an account title: [event name, title id]
const ACCOUNT_EVENTS = [["Sweet Treats Week", 45]];
// the yearly events that bring weekly PvE bonuses for titles: [event name, the bonuses' ids] (Wayfarer's Reverie: all
// of them at once)
const BONUS_EVENTS = [["Wayfarer's Reverie", [2, 5, 8]]];
// an event's row, while it runs or for its next time, when it helps a title not maxed (scope: the character's, or
// its account's)
function eventRows(c, o, scope) {
  return BONUS_EVENTS.flatMap(([name, ids]) => {
    const ev = Object.values(EVENTS).find(x => x.name === name), says = ev ? bonusNeeds(ids, c, o, scope) : [];
    if (!says.length) return [];
    const [a, b] = eventWindow(ev), now = a <= Date.now();
    return [[now ? Date.now() : +a, now ? `Now, till ${fmtNextDay.format(b)}` : fmtNextDay.format(a),
      `<span class="ch-next-it"><span class="dim">Event:</span> <a href="events">${esc(ev.name)}</a> <span class="dim">· ${esc(says.join("; "))}</span></span>`, now]];
  });
}
const NEXT_DAYS = 3, NEXT_WEEKS = 3, NEXT_ROWS = 7, LOOK_DAYS = Math.max(...["zaishen-mission", "zaishen-vanquish", "zaishen-bounty"].map(k => ROTATIONS[k].entries.length)),
  LOOK_WEEKS = ROTATIONS["weekly-pve"].entries.length;
const fmtNextDay = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short" });
// a pre-Searing character: the pre-Searing dailies of the next days instead (the Vanguard quest, Nicholas Sandford's
// item), none of the rest being for it
function preNextHTML(c) {
  const r0 = ROTATIONS["vanguard"], k0 = Rotation.period(r0);
  const rows = Array.from({ length: NEXT_ROWS }, (_, i) => {
    const at = Rotation.startsAt(r0, k0 + i), t = at + 1000;
    const items = [["vanguard", "Vanguard"], ["nicholas-sandford", "Sandford"]].map(([key, label]) => { const r = ROTATIONS[key];
      const e = Rotation.entry(r, Rotation.period(r, t));
      // (a Vanguard quest without its "Vanguard Annihilation: " prefix, as on the Rotations page)
      const html = e.quest && QUESTS[e.quest] ? LINK.quest(e.quest, QUESTS[e.quest].name.replace(/^Vanguard \w+: /, "")) : entryHTML(e);
      return `<span class="ch-next-it"><span class="dim">${label}:</span> ${html}</span>`; }).join("");
    return `<li${i === 1 ? ' class="ch-next-later"' : ""}><b>${i === 0 ? "Today" : i === 1 ? "Tomorrow" : fmtNextDay.format(at)}</b><span>${items}</span></li>`;
  }).join("");
  return `<p class="dim ch-next-intro">${esc(c.name)} stays in pre-Searing Ascalon: its coming dailies, the Vanguard quest and Nicholas Sandford's gift.</p>
    <ul class="ch-next">${rows}</ul>`;
}
function nextHTML(o, c) {
  const both = (part, id) => ((c[part][id] || 0) & 3) === 3, vq = new Set(c.vanquished || []);
  const needs = [["zaishen-mission", "Mission", e => hasModes(MISSIONS[e.mission]) && !both("missions", e.mission)],
    ["zaishen-vanquish", "Vanquish", e => AREAS[e.area]?.foes && !vq.has(e.area)],
    ["zaishen-bounty", "Bounty", e => e.area && isTickedDungeon(e.area) && !both("dungeons", e.area)]];
  const rw = ROTATIONS["weekly-pve"], w0 = Rotation.period(rw);
  // the next weeks whose bonus helps a title of the character's (or of its account's) not maxed
  const bonusRows = scope => { const out = [];
    for (let i = 0; i < LOOK_WEEKS && out.length < NEXT_WEEKS; i++) {
      const e = Rotation.entry(rw, w0 + i), says = bonusNeeds(e.bonus, c, o, scope), at = Rotation.startsAt(rw, w0 + i);
      if (says.length) out.push([i === 0 ? Date.now() : at, i === 0 ? "This week" : `Week of ${fmtNextDay.format(at)}`,
        `<span class="ch-next-it"><span class="dim">Bonus:</span> <a href="rotations${query({ bonus: e.bonus })}">${esc(entryName(e))}</a> <span class="dim">· ${esc(says.join("; "))}</span></span>`, i === 0]);
    }
    return out; };
  // the weeks and events first, then days, at least 3, as many as fit in 7 rows
  const rows = [...bonusRows("character"), ...eventRows(c, o, "character")], r0 = ROTATIONS["zaishen-mission"], k0 = Rotation.period(r0);
  const days = Math.max(NEXT_DAYS, NEXT_ROWS - rows.length);
  const seen = new Set();
  for (let i = 0, n = 0; i < LOOK_DAYS && n < days; i++) {
    const at = Rotation.startsAt(r0, k0 + i), t = at + 1000;
    // (each one once, the first time it comes: a cycle shorter than the days looked through comes round again)
    const items = needs.map(([key, label, need]) => { const r = ROTATIONS[key], e = Rotation.entry(r, Rotation.period(r, t));
      if (!need(e) || seen.has(e)) return ""; seen.add(e);
      return `<span class="ch-next-it"><span class="dim">${label}:</span> ${entryHTML(e)}</span>`; }).filter(Boolean);
    if (items.length) { rows.push([at, i === 0 ? "Today" : i === 1 ? "Tomorrow" : fmtNextDay.format(at), items.join(""), i === 0]); n++; }
  }
  // (today's and this week's first, then a firmer line before what's later)
  const list = rs => { rs.sort((a, b) => b[3] - a[3] || a[0] - b[0]); const later = rs.findIndex(r => !r[3]);
    return `<ul class="ch-next">${rs.map(([, when, what], i) => `<li${i === later && i > 0 ? ' class="ch-next-later"' : ""}><b>${when}</b><span>${what}</span></li>`).join("")}</ul>`; };
  // what's for its account (the account titles' bonuses), in a list of its own below
  // and the yearly events that help an account title not maxed: Sweet Treats Week, Treasure Hunter's (running now, or
  // its next time)
  const acct = [...bonusRows("account"), ...eventRows(c, o, "account")];
  for (const [name, tid] of ACCOUNT_EVENTS) {
    const ev = Object.values(EVENTS).find(x => x.name === name), t = TITLES[tid];
    if (!ev || !t || titleKept(t, c, o) >= titleMax(t)) continue;
    const [a, b] = eventWindow(ev), now = a <= Date.now();
    acct.push([now ? Date.now() : +a, now ? `Now, till ${fmtNextDay.format(b)}` : fmtNextDay.format(a),
      `<span class="ch-next-it"><span class="dim">Event:</span> <a href="events">${esc(ev.name)}</a> <span class="dim">· ${esc(acctSaid(o, c))} hasn't maxed the ${esc(t.name)} title</span></span>`, now]);
  }
  const acctHTML = acct.length ? `<h3 class="ch-tab-h">Account</h3>${list(acct)}` : "";
  if ((c.modes || []).includes("presearing")) return preNextHTML(c);  // (nor its account's: none of it is for it)
  // (a line first saying what's listed; nothing for the character: what that means, its own titles only; its account's
  // list below all the same)
  const intro = `<p class="dim ch-next-intro">The coming Zaishen dailies, weekly bonuses and events that help ${esc(c.name)}'s titles not yet maxed.</p>`;
  return intro + (rows.length ? list(rows) : `<p class="ch-next-done">${esc(c.name)} has maxed the titles of Legendary Guardian, Legendary Vanquisher, Sunspear,
      Lightbringer, Asura, Deldrimor, Ebon Vanguard and Norn, and has beaten every dungeon boss the Zaishen Bounties send
      you to, so there aren't any important dailies for ${objPronoun(c)}!</p>`) + acctHTML;
}

// (the campaign a character was made in: madeIn, common.js)
/* ---------- its age: when it was made, from what /age says ----------
   /age gives whole months (whole days for a young one), a month a twelfth of the game's 365-day year; a reading of N months at time t puts its making
   after t − (N+1) months and no later than t − N months. Only that range is kept ("bornBetween"), each reading narrowing it;
   a reading helps only while a month could tick over within it (the window: the range moved on by whole months), so
   the tab says when to check next, best halfway through, till it's down to a day. Its birthdays: every 365 days. */
const AGE_MONTH = 365 / 12 * 864e5, AGE_YEAR = 365 * 864e5;
// (dates as the game's servers count them, UTC: one it can have been made on, a whole UTC day)
const fmtAgeDay = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const ageDates = (lo, hi) => Math.floor(hi / 864e5) - Math.floor(lo / 864e5) + 1;
const fmtAgeTime = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
const isoMin = t => new Date(t).toISOString().slice(0, 16) + "Z";
// the window for a reading now or next: [opens, closes, best], k whole ticks on from the range (days for a character
// under two months old, else months: ageTick)
function ageWindow(lo, hi, now = Date.now()) {
  const tick = ageTick(lo, hi, now);
  let k = Math.floor((now - lo) / tick);
  if (now >= hi + k * tick) k++;
  return [lo + k * tick, hi + k * tick, (lo + hi) / 2 + k * tick];
}
function ageHTML(c) {
  // first what's known of it, then how to know more
  let known = `We have no idea of ${esc(c.name)}'s age yet.`, next = "Type in how old /age says it is: \"79 months\", or \"12 days\" for a young one.";
  if (c.bornBetween) {
    const [lo, hi] = c.bornBetween.map(Date.parse), now = Date.now();
    if (ageDates(lo, hi) === 1) {
      const mid = (lo + hi) / 2, years = Math.floor((now - mid) / AGE_YEAR), bday = mid + (years + 1) * AGE_YEAR;
      known = `${esc(c.name)} was created on ${fmtAgeDay.format(lo)}: ${years} year${years === 1 ? "" : "s"} old, next birthday ${fmtAgeDay.format(bday)} (${(years + 1) * 12} months).`;
      next = "";
    } else {
      const [a, b, best] = ageWindow(lo, hi, now);
      known = `${esc(c.name)} was created between ${fmtAgeDay.format(lo)} and ${fmtAgeDay.format(hi)}.`;
      // (best halfway through the window; "now" only once that's passed: a reading just after the last tells little)
      next = now >= best ? `<b>Check now</b>: a reading till ${fmtAgeTime.format(b)} narrows it.`
        : `<b>Next check</b>: best ${fmtAgeTime.format(best)}, or any time from ${fmtAgeTime.format(Math.min(best, Math.max(a, now + 864e5)))} till ${fmtAgeTime.format(b)}.`;
    }
  }
  return `<hr class="ch-edit-hr"><div class="ch-edit-age"><p class="ch-age-known">${known}</p>
    ${next ? `<label>Age <input type="text" maxlength="12" id="age-months" placeholder="79 months" aria-label="What /age says: months, or days"></label>
    <button type="button" class="u-btn" id="age-add">Add reading</button>` : ""}
    <span class="dim ch-age-say" id="age-say">${next}</span></div>`;
}
// a reading: the range narrowed (one that doesn't fit what's known is refused)
$("ch-edit").addEventListener("click", e => {
  if (e.target.id !== "age-add") return;
  // ("79", "79 months", "12 days", "12d": months unless it says days)
  const m = $("age-months").value.trim().toLowerCase().match(/^(\d+)\s*(d|days?|m|mo|months?)?$/), now = Date.now();
  if (!m) return $("age-months").focus();
  const n = +m[1], unit = m[2]?.startsWith("d") ? 864e5 : AGE_MONTH;
  const lo = now - (n + 1) * unit, hi = now - n * unit, cur = User.char();
  const [a, b] = cur.bornBetween ? cur.bornBetween.map(Date.parse) : [-Infinity, Infinity], nlo = Math.max(lo, a), nhi = Math.min(hi, b);
  if (nlo > nhi) { $("age-say").textContent = `${$("age-months").value.trim()} doesn't fit what earlier readings said: check /age again.`; return; }
  editChar(c => { c.bornBetween = [isoMin(nlo), isoMin(nhi)]; });
});
$("ch-edit").addEventListener("keydown", e => { if (e.target.id === "age-months" && e.key === "Enter") $("age-add").click(); });

// the campaign it was made in, picked in the Edit tab; and its note, saved once it's left (or Enter), its length counted
$("ch-edit").addEventListener("change", e => {
  if (e.target.id === "edit-retired") editChar(c => { if (e.target.checked) c.retired = true; else delete c.retired; });
  if (e.target.id === "edit-campaign") editChar(c => { const v = +e.target.value; if (v) c.campaign = v; else delete c.campaign; });
  if (e.target.id === "edit-note") editChar(c => { const v = e.target.value.trim(); if (v) c.note = v; else delete c.note; });
});
$("ch-edit").addEventListener("input", e => { if (e.target.id === "edit-note") $("edit-note-n").textContent = `${e.target.value.length} / ${USER_NOTE_MAX}`; });
$("ch-edit").addEventListener("keydown", e => { if (e.target.id === "edit-note" && e.key === "Enter") e.target.blur(); });

// its experience, hours played and hours played outside: typed in ("12.5m", "340k", "1b": thousands, millions,
// billions), each kept with when: the last in its box, and beside it with when
const READINGS = [["xp", "Experience"], ["played", "Hours played"], ["playedOutside", "Hours played outside"]];
const fmtReadDay = new Intl.DateTimeFormat(undefined, { day: "numeric", month: "short", year: "numeric" });
const amountOf = s => { const m = s.trim().toLowerCase().replace(/,/g, "").match(/^(\d+(?:\.\d+)?)\s*([kmb])?$/);
  return m ? +m[1] * ({ k: 1e3, m: 1e6, b: 1e9 }[m[2]] || 1) : null; };
// (an amount said back: amountSaid, common.js)
// beside its box: the amount, its unit, and when
const readingSaid = (k, r) => (r ? `${amountSaid(r[0])} ${k === "xp" ? "XP" : r[0] === 1 ? "hour" : "hours"}, as of ${fmtReadDay.format(Date.parse(r[1]))}` : "");
const readingsHTML = c => `<hr class="ch-edit-hr"><div class="ch-edit-read">${READINGS.map(([k, label]) => `<label>${label}
  <input type="text" data-reading="${k}" maxlength="16" autocomplete="off" value="${c[k] ? amountSaid(c[k][0]) : ""}"></label><span class="dim" data-reading-at="${k}">${readingSaid(k, c[k])}</span>`).join("")}</div>`;
// a reading typed in (Enter, or leaving the box): kept with now (0: taken off); one that doesn't read as an amount, said so
$("ch-edit").addEventListener("change", e => {
  const k = e.target.dataset?.reading;
  if (!k || !e.target.value.trim()) return;
  // (one refused: the box back to what's kept)
  const was = User.char()[k] ? amountSaid(User.char()[k][0]) : "";
  // (one refused: said in red, the box emptied, what was kept left as it was)
  // (said a couple of seconds, then faded back to what was beside it)
  const say = t => { const el = document.querySelector(`[data-reading-at="${k}"]`), back = el.dataset.was ??= el.textContent;
    clearTimeout(el.fade); el.textContent = `Not saved: ${t}`; el.className = "bad"; e.target.value = was;
    el.fade = setTimeout(() => { el.classList.add("gone"); el.fade = setTimeout(() => { el.textContent = back; el.className = "dim"; delete el.dataset.was; }, 400); }, 2500); };
  const v = amountOf(e.target.value);
  if (v === null) return say(`"${e.target.value.trim()}" isn't an amount (a number, or with k, m or b)`);
  // (hours played outside no more than hours played, either typed in)
  const cur = User.char(), h = Math.round(v * 10) / 10;
  if (v && k === "playedOutside" && cur.played && h > cur.played[0]) return say(`more than the ${cur.played[0].toLocaleString()} hours played`);
  if (v && k === "played" && cur.playedOutside && h < cur.playedOutside[0]) return say(`fewer than the ${cur.playedOutside[0].toLocaleString()} hours played outside`);
  // (0: the reading taken off; saved without drawing the tab again, so a click into the next box isn't lost: its box and
  // what's beside it said again in place)
  if (User.broken()) return;
  const o = User.data(), c = User.char(o);
  if (!v) delete c[k]; else c[k] = [k === "xp" ? Math.round(v) : Math.round(v * 10) / 10, isoMin(Date.now())];
  if (!User.save(o)) return;
  const el = document.querySelector(`[data-reading-at="${k}"]`);
  clearTimeout(el.fade); delete el.dataset.was; el.className = "dim";
  el.textContent = readingSaid(k, c[k]);
  e.target.value = c[k] ? amountSaid(c[k][0]) : "";
});
$("ch-edit").addEventListener("keydown", e => { if (e.target.dataset?.reading && e.key === "Enter") e.target.blur(); });

/* ---------- heroes and builds tabs ---------- */
// every hero recruited
const allHeroes = c => { const got = new Set(c.heroes || []); return Object.values(HEROES).every(h => got.has(h.id)); };
// the heroes it has recruited, each a button to tick, by profession (Razah, of none, last); all ticked or none at once
// the heroes a character can recruit: a pre-Searing one, only Devona (the others shown, but not to tick; what's saved
// is left as it is)
const isPre = c => (c.modes || []).includes("presearing");
// the heroes' order among their profession's pills
const PILL_ORDER = ["Goren", "Koss", "Jora", "Devona", "Acolyte Jin", "Margrid the Sly", "Pyre Fierceshot", "Tahlkora", "Dunkoro",
  "Ogden Stonehealer", "Master of Whispers", "Olias", "Livia", "Norgu", "Gwen", "Ghost of Althea", "Acolyte Sousuke", "Zhed Shadowhoof",
  "Vekk", "Zenmai", "Anton", "Miku", "Xandra", "Zei Ri", "General Morgahn", "Keiran Thackeray", "Hayda", "Melonni", "M.O.X.", "Kahmu"];
const pillRank = h => { const i = PILL_ORDER.indexOf(h.name); return i < 0 ? PILL_ORDER.length : i; };
function heroesHTML(c) {
  const got = new Set(c.heroes || []), all = Object.values(HEROES), open = canRecruit(c), may = new Set(open.map(h => h.id));
  const n = open.filter(h => got.has(h.id)).length;
  const btn = h => `<button type="button" class="ch-hero${got.has(h.id) ? " got" : ""}" data-hero="${h.id}" aria-pressed="${got.has(h.id)}"${may.has(h.id) ? "" : ' disabled title="Not for a pre-Searing character"'}>${esc(h.name)}</button>`;
  const profs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  return `<div class="ch-tab-head"><span><b>${n}</b> <span class="dim">/ ${open.length} ${open.length === 1 ? "hero" : "heroes"} recruited${open.length < all.length ? " (pre-Searing)" : ""}</span></span>
      <span><button type="button" class="u-btn" data-heroes="all"${n === open.length ? " disabled" : ""}>Tick all</button>
      <button type="button" class="u-btn" data-heroes="none"${n ? "" : " disabled"}>Untick all</button></span></div>
    <div class="ch-hgrid"><div class="ch-hprofs">${profs.map(p => { const hs = all.filter(h => (h.profession || 0) === p).sort((a, b) => pillRank(a) - pillRank(b) || cmpStr(a.name, b.name));
      return hs.length ? `<div class="ch-hprof" style="--pc:${profVar(p)}"><img src="${profImg(p)}" alt="${p ? PROFS[p] : "Any profession"}" title="${p ? PROFS[p] : "Any profession"}"><div>${hs.map(btn).join("")}</div></div>` : ""; }).join("")}</div>${toRecruit(open, got)}</div>`;
}
// the heroes still to recruit, each linked to its page, in the pills' order: by profession (Razah last), then as
// PILL_ORDER (in two columns when more than 8)
const PROF_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0], profRank = h => PROF_ORDER.indexOf(h.profession || 0);
const toRecruit = (all, got) => { const left = all.filter(h => !got.has(h.id)).sort((a, b) => profRank(a) - profRank(b) || pillRank(a) - pillRank(b));
  return left.length ? `<aside class="ch-hleft"><h3 class="ch-tab-h">To recruit <span class="dim">${left.length}</span></h3><ol${left.length > 8 ? ' class="two"' : ""}>${left.map(h =>
    `<li><a href="${HREF.hero(h.id)}"><img src="${profImg(h.profession || 0)}" alt="">${esc(h.name)}</a></li>`).join("")}</ol></aside>` : ""; };
// its saved skill templates, in its order: each one's bar (opening it in the builder), its code to copy, chevrons and
// a delete; a code pasted in adds one
function buildsHTML(c) {
  const bs = c.builds || [];
  const row = (code, i) => `<li class="ch-build" data-build="${i}"><a class="hb-bar" href="${esc(builderHref({ code }))}" title="Open in the builder">${barIcons(code)}</a>
    <code class="ch-code">${esc(code)}</code><button type="button" class="u-btn" data-copy="${esc(code)}">Copy</button>
    ${moveBtns(i === 0, i === bs.length - 1)}<button type="button" class="u-btn danger" data-build-delete>Delete</button></li>`;
  return `<form class="ch-build-add" id="build-add"><input type="text" id="build-code" placeholder="Paste a skill template code" aria-label="Skill template code" autocomplete="off" spellcheck="false">
    <button type="submit" class="u-btn">Add</button><span class="dim" id="build-err" role="alert"></span></form>
    ${bs.length ? `<ol class="ch-builds">${bs.map(row).join("")}</ol>` : `<p class="dim">No builds saved yet.</p>`}`;
}
// a change to the picked character's heroes or builds, saved and drawn again
const editChar = f => { if (User.broken()) return; const o = User.data(), c = User.char(o); f(c); User.save(o); render(); };
$("ch-heroes").addEventListener("click", e => {
  const all = e.target.closest("[data-heroes]");
  // (only the heroes it can recruit ticked or unticked; any other saved stays)
  if (all) return editChar(c => { const ids = canRecruit(c).map(h => h.id), hs = new Set(c.heroes || []);
    for (const id of ids) if (all.dataset.heroes === "all") hs.add(id); else hs.delete(id);
    if (hs.size) c.heroes = [...hs]; else delete c.heroes; });
  const b = e.target.closest("[data-hero]");
  if (!b) return;
  editChar(c => { const id = +b.dataset.hero, hs = new Set(c.heroes || []); if (hs.has(id)) hs.delete(id); else hs.add(id);
    if (hs.size) c.heroes = [...hs]; else delete c.heroes; });
});
$("ch-builds").addEventListener("submit", e => {
  e.preventDefault();
  const code = $("build-code").value.trim().replace(/\s+/g, "");
  if (!code) return;
  try { if (!TemplateCode.decode(code).skills.some(id => SKILLS[id])) throw 0; } catch { $("build-err").textContent = "That isn't a skill template code."; return; }
  editChar(c => { c.builds = [...(c.builds || []), code]; });
});
$("ch-builds").addEventListener("click", async e => {
  const li = e.target.closest("[data-build]");
  if (!li) return;
  const i = +li.dataset.build, mv = e.target.closest("[data-move]");
  if (mv) editChar(c => { const j = i + +mv.dataset.move; [c.builds[i], c.builds[j]] = [c.builds[j], c.builds[i]]; });
  else if (e.target.closest("[data-build-delete]") && await ask({ title: "Delete this build?", ok: "Delete", danger: true, focus: "cancel" })) editChar(c => { c.builds.splice(i, 1); if (!c.builds.length) delete c.builds; });
});

// the character picked: its card (its Kind of a Big Deal, then its modes, under its name), and how far it is, each count a link to what's left
function cardHTML(o, c) {
  return `<section class="ch-card">
      <img class="ch-prof" src="${profImg(c.profession || 0)}" alt="${c.profession ? PROFS[c.profession] : "No profession"}">
      <div class="ch-who"><h2>${esc(c.name)}</h2><div class="dim">${[bigDeal(c, o), allHeroes(c) && `<span class="ch-says">Recruiter of Heroes</span>`, lit(c)].filter(Boolean).join(" · ")}</div></div>
    </section>
    ${unnamed(c) ? `<p class="ch-hint">Give this character its name and profession: <button type="button" class="link" data-manage="1">Edit</button>.</p>` : ""}
`;
}
// its progress by subject, each count a link to what's left (under the titles' heading, titles.js)
function statsHTML(c) {
  return progress(c).map(([, tiles]) => `<div class="ch-stats">${tiles.map(([k, have, of, href]) => `<a class="ch-stat ${have >= of ? "done" : have ? "some" : "none"}" href="${href}" title="${have >= of ? "All done" : "See what's left"}">
      <span class="ch-sk">${k}</span><span><b>${have}</b> <span class="dim">/ ${of}</span></span></a>`).join("")}</div>`).join("");
}
// the list to manage, by account: with one account, just its characters; with more, each account as a heading (its name
// to rename, a delete while it has no characters, chevrons to reorder) with a new character after its last; a character
// stays on the account it was made on, and chevrons move it among the account's characters: the saved order is the shown
// order
// a character's row to change: its profession, name, modes and gender, then hide or show, chevrons (round the ends:
// the first up goes last) and delete; the Edit tab's (the one picked) without hide and delete
// the campaign it was made in, to pick (on the Edit tab's row, after its gender)
const campPick = c => `<label class="ch-edit-camp">Made in <select id="edit-campaign"${fixedCampaign(c) ? ` disabled title="${PROF_CAMPAIGN[c.profession] ? `A ${PROFS[c.profession]} can only be made in ${CAMPAIGNS[PROF_CAMPAIGN[c.profession]]}` : "A pre-Searing character is a Prophecies one"}"` : ""}>${[[0, "Not set"], [1, "Prophecies"], [2, "Factions"], [3, "Nightfall"]].map(([v, n]) =>
  `<option value="${v}"${(madeIn(c) || 0) === v ? " selected" : ""}>${n}</option>`).join("")}</select></label>`;
const charRow = (o, c, cur, tab = false) => { const sib = o.chars.filter(x => x.account === c.account), hid = !!c.hidden, one = o.chars.length < 2, lone = sib.length < 2;
  return `<tr class="${[c === cur && "cur", hid && "u-hid"].filter(Boolean).join(" ")}" data-id="${c.id}">
    <td><div class="u-name">${profPick(c)}<input type="text" maxlength="40" value="${esc(c.name)}" aria-label="Name">${modeBadges(c)}${genderBtn(c)}${tab ? campPick(c) + `<label class="ch-edit-retired" title="No longer played: left out of the Today page's suggestions"><input type="checkbox" id="edit-retired"${c.retired ? " checked" : ""}> Retired <span class="dim">(no suggestions)</span></label>` : ""}</div></td>
    <td>${tab ? "" : `<button type="button" class="u-btn u-show" data-hide aria-pressed="${hid}" title="${hid ? "Hidden from the view: show it" : "Hide it from the view"}">${hid ? "Show" : "Hide"}</button>`}${moveBtns(lone, lone)}${tab ? "" : `<span class="u-slot"><button type="button" class="u-btn danger" data-delete${one ? " disabled" : ""}>Delete</button></span>`}</td></tr>`; };
function manageHTML(o, cur, many) {
  const folded = new Set(acctFolds()), row = c => charRow(o, c, cur);
  const head = a => `<tr class="u-acct" data-account="${a.id}"><td colspan="2"><div class="u-acct-row">
      <button type="button" class="u-fold" data-fold-account="${a.id}" aria-expanded="${!folded.has(a.id)}" aria-label="${folded.has(a.id) ? "Show" : "Hide"} its characters"></button>
      <input type="text" maxlength="40" value="${esc(a.name || "")}" placeholder="${esc(accountName(a))}" aria-label="Account name">
      <span class="u-n" title="Characters">${o.chars.filter(c => c.account === a.id).length}</span>
      <button type="button" class="u-bell" data-bell aria-pressed="${a.reforgedCoinClock !== undefined}" title="${a.reforgedCoinClock !== undefined ? "Has the bell: its Reforged Coins counted (click if it hasn't)" : "Has the bell? Click to count its Reforged Coins"}">${BELL}</button>
      <span class="u-acct-right">${moveBtns(o.accounts[0] === a, o.accounts[o.accounts.length - 1] === a)}<span class="u-slot">${o.chars.some(c => c.account === a.id) ? "" : `<button type="button" class="u-btn danger" data-delete-account>Delete account</button>`}</span></span></div></td></tr>`;
  // after an account's characters: a new one on it
  const foot = a => `<tr class="u-acct-foot" data-account="${a.id}"><td colspan="2"><button type="button" class="u-btn" data-new-char>New character</button></td></tr>`;
  return many ? o.accounts.map(a => head(a) + (folded.has(a.id) ? "" : o.chars.filter(c => c.account === a.id).map(row).join("") + foot(a))).join("") : o.chars.map(row).join("");
}
function render() {
  const broken = User.broken(), o = User.data(), cur = User.char(o), many = o.accounts.length > 1;
  $("u-broken").hidden = !broken;
  $("ch-view").hidden = broken || manage;
  $("ch-manage").hidden = broken || !manage;
  if (manage) {
    $("u-new").hidden = many;
    els.list.innerHTML = manageHTML(o, cur, many);
  } else {
    $("ch-list").innerHTML = sideHTML(o, cur, many);
    $("ch-select").innerHTML = selectHTML(o, cur, many);
    // (on a phone, the list hidden: the picked character's account's coins under the menu)
    const ca = o.accounts.find(a => a.id === cur.account), cp = coinsPill(ca);
    $("ch-coins-phone").innerHTML = cp ? `<span class="dim">${esc(accountName(ca))}'s Reforged Coins</span>${cp}` : "";
    $("ch-card").innerHTML = cardHTML(o, cur);
    drawTabs(o, cur);
  }
}
const setManage = on => { manage = on; render(); scrollTo(0, 0); };
// picking a character (its name at the left, or the menu), managing or done, a tab, an account folded
document.addEventListener("click", e => {
  const m = e.target.closest("[data-manage]");
  if (m) return setManage(m.dataset.manage === "1");
  const tb = e.target.closest("[data-tab]");
  if (tb) { tab = tb.dataset.tab; try { localStorage.setItem(TAB, tab); } catch { /* storage blocked */ } return drawTabs(); }
  const p = e.target.closest("[data-pick]");
  if (p) { User.pick(+p.dataset.pick); return render(); }
  const f = e.target.closest("[data-fold-account]");
  if (f) { foldAccount(+f.dataset.foldAccount); return render(); }
});
// coins taken: counted again from now (after asking)
document.addEventListener("click", async e => {
  const b = e.target.closest("[data-coins]");
  if (!b || User.broken()) return;
  const o = User.data(), a = o.accounts.find(x => x.id === +b.dataset.coins);
  if (!a || !await ask({ title: `Took ${accountName(a)}'s Reforged Coins from the Purveyor?`, ok: "Took them" })) return;
  a.reforgedCoinClock = new Date().toISOString().slice(0, 16) + "Z";
  User.save(o); render();
});
// (the coins counted again as the day turns)
setInterval(() => { if (!manage && !User.broken()) { const o = User.data(); $("ch-list").innerHTML = sideHTML(o, User.char(o), o.accounts.length > 1); } }, 60000);
$("ch-select").addEventListener("change", e => { User.pick(+e.target.value); render(); });
/* ---------- characters ---------- */
const rowChar = (o, el) => o.chars.find(c => c.id === +el.closest("tr").dataset.id);
const rowAccount = (o, el) => o.accounts.find(a => a.id === +el.closest("tr").dataset.account);
// the Edit list's handlers, and the Edit tab's (its one row)
const onEdit = (type, f) => { els.list.addEventListener(type, f); $("ch-edit").addEventListener(type, f); };
onEdit("change", e => {
  if (!e.target.closest("tr") || ["edit-campaign", "edit-retired"].includes(e.target.id)) return;  // (not a row's name: the Edit tab's campaign, retired)
  const o = User.data();
  // an account's new name (none: its number)
  if (e.target.closest(".u-acct")) {
    const a = rowAccount(o, e.target), n = e.target.value.trim();
    if (n) a.name = n; else delete a.name;
    User.save(o); return render();
  }
  const c = rowChar(o, e.target);
  // a new name, once it's left
  const n = e.target.value.trim();
  if (!n || n === c.name) { e.target.value = c.name; return; }
  c.name = n;
  User.save(o); render();
});
onEdit("keydown", e => {
  if (e.target.type !== "text") return;
  if (e.key === "Enter") e.target.blur();
  // Escape: the name as it was
  if (e.key === "Escape") { const o = User.data(); e.target.value = e.target.closest(".u-acct") ? rowAccount(o, e.target).name || "" : rowChar(o, e.target).name; e.target.blur(); }
});
onEdit("click", async e => {
  // a character hidden from the view, or shown again
  const hb = e.target.closest("[data-hide]");
  if (hb) { hideChar(+hb.closest("tr").dataset.id); return render(); }
  // the profession picker: open it, or pick one
  const open = e.target.closest("[data-prof-open]");
  if (open) { const m = open.nextElementSibling, was = m.hidden; closeProfs(); m.hidden = !was; return; }
  const pick = e.target.closest("[data-prof]");
  if (pick) {
    const o = User.data(), c = rowChar(o, pick), p = +pick.dataset.prof;
    if (p) c.profession = p; else delete c.profession;
    User.save(o); return render();
  }
  const mv = e.target.closest("[data-move]");
  if (mv) {
    const o = User.data(), d = +mv.dataset.move, tr = mv.closest("tr");
    if (tr.dataset.account) {  // an account among the accounts
      const i = o.accounts.findIndex(a => a.id === +tr.dataset.account), j = i + d;
      if (j < 0 || j >= o.accounts.length) return;
      [o.accounts[i], o.accounts[j]] = [o.accounts[j], o.accounts[i]];
    } else {  // a character among its account's: swap with the next one of the same account in the saved order, or,
      // past the first or the last, round to the other end
      // (from the Edit tab, past the hidden ones, as the list at the left shows it)
      const c = rowChar(o, mv), i = o.chars.indexOf(c), tab = !!mv.closest("#ch-edit");
      const near = x => x.account === c.account && (x === c || !tab || !x.hidden), sib = o.chars.filter(near);
      if (sib.length < 2) return;
      let j = i + d;
      while (j >= 0 && j < o.chars.length && !near(o.chars[j])) j += d;
      if (j >= 0 && j < o.chars.length) [o.chars[i], o.chars[j]] = [o.chars[j], o.chars[i]];
      else { o.chars.splice(i, 1); const end = o.chars.indexOf(d < 0 ? sib.at(-1) : sib[0]); o.chars.splice(d < 0 ? end + 1 : end, 0, c); }
    }
    User.save(o); return render();
  }
  // an account with the bell (its coins counted, never taken yet) or without
  const bell = e.target.closest("[data-bell]");
  if (bell) {
    const o = User.data(), a = rowAccount(o, bell);
    if (a.reforgedCoinClock === undefined) a.reforgedCoinClock = 0; else delete a.reforgedCoinClock;
    User.save(o); return render();
  }
  const g = e.target.closest("[data-gender]");
  if (g) {
    const o = User.data(), c = rowChar(o, g), next = { "": "m", m: "f", f: "" }[c.gender || ""];
    if (next) c.gender = next; else delete c.gender;
    User.save(o); return render();
  }
  const mode = e.target.closest("[data-mode]");
  if (mode) {
    const o = User.data(), c = rowChar(o, mode), m = mode.dataset.mode, set = new Set(c.modes || []);
    if (set.has(m)) set.delete(m); else set.add(m);
    if (set.size) c.modes = [...set]; else delete c.modes;
    User.save(o); return render();
  }
  if (e.target.closest("[data-new-char]")) return newChar(+e.target.closest("tr").dataset.account);
  if (e.target.closest("[data-delete-account]")) {
    const o = User.data(), a = rowAccount(o, e.target);
    if (o.chars.some(c => c.account === a.id) || !await ask({ title: `Delete the account "${accountName(a)}"?`, body: "And its account titles. This can't be undone.", ok: "Delete", danger: true, focus: "cancel" })) return;
    o.accounts = o.accounts.filter(x => x !== a);
    User.save(o); return render();
  }
  if (!e.target.closest("[data-delete]")) return;
  const o = User.data(), c = rowChar(o, e.target);
  if (o.chars.length < 2 || !await ask({ title: `Delete "${c.name}"?`, body: `And all its progress (${charCounts(c)}). This can't be undone.`, ok: "Delete", danger: true, focus: "cancel" })) return;
  const shown = User.char(o) === c;
  o.chars = o.chars.filter(x => x !== c);
  User.save(o);
  if (shown) User.pick(o.chars[0].id);
  render();
});
// a new character is named by its id (Char2), to be renamed in its row; it's on the account of the one shown (or the
// account it's added to)
function newChar(account = User.char().account) {
  const o = User.data(), c = newUserChar(Math.max(...o.chars.map(c => c.id)) + 1, account);
  o.chars.push(c);
  if (!User.save(o)) return;  // (read-only)
  User.pick(c.id); render();
  els.list.querySelector(`tr[data-id="${c.id}"] input[type=text]`).select();
}
$("u-new").addEventListener("click", () => newChar());
// a new account, with no characters yet
$("u-new-account").addEventListener("click", () => {
  const o = User.data(), id = Math.max(...o.accounts.map(a => a.id)) + 1;
  o.accounts.push({ id });
  if (!User.save(o)) return;  // (read-only)
  render();
  els.list.querySelector(`tr[data-account="${id}"] input[type=text]`)?.focus();
});

// changed in another tab
addEventListener("userchange", render);
render();
