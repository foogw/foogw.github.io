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
  if (old && User.stored() != null && !User.broken()) {
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
const TABS = [["titles", "Titles", "title"], ["heroes", "Heroes", "ch-heroes"], ["builds", "Builds", "ch-builds"], ["edit", "Edit", "ch-edit"]], TAB = "chars.tab";
let tab = (() => { try { const t = localStorage.getItem(TAB); return TABS.some(x => x[0] === t) ? t : "titles"; } catch { return "titles"; } })();
// the tabs, and the one shown drawn (only it: the others are drawn when picked)
const drawTabs = (o = User.data(), cur = User.char(o)) => {
  $("ch-tabs").innerHTML = TABS.map(([k, label]) => `<button type="button" role="tab" data-tab="${k}" aria-selected="${k === tab}">${label}</button>`).join("");
  for (const [k, , id] of TABS) $(id).hidden = k !== tab;
  if (tab === "titles") redrawTitles();
  else if (tab === "heroes") $("ch-heroes").innerHTML = heroesHTML(cur);
  else if (tab === "builds") $("ch-builds").innerHTML = buildsHTML(cur);
  else $("ch-edit").innerHTML = `<table class="u-chars ch-edit-row"><tbody>${charRow(o, cur, null, true)}</tbody></table>`;
};
// managing or not, not kept: the page opens on the view, or managing while nothing is saved yet, to name the character
let manage = User.stored() == null;
// the titles below draw again (titles.js, once it's in): the character picked, its account, may have changed
const redrawTitles = () => typeof draw === "function" && draw();

// Kind of a Big Deal, on the card's second line, before the modes: its rank said of the character ("Very Important", "People Know Her"), the
// titles maxed on hover; none for no rank yet (People Know Him or Her by its gender, set in Edit)
const BIG_DEAL_SAYS = ["", "Kind of a Big Deal", c => `People Know ${{ f: "Her", m: "Him" }[c.gender] || "Them"}`, "Very Important",
  "Has Many Leather-Bound Books", "Smells of Rich Mahogany", "A God Walking Amongst Mere Mortals"];
function bigDeal(c, o) {
  const t = TITLES[10], r = titleRankOf(t, c, o), says = [BIG_DEAL_SAYS[r]].map(x => (typeof x === "function" ? x(c) : x))[0];
  return !r ? "" : `<span class="ch-says" title="Kind of a Big Deal: ${titlesMaxed(c, o)} of ${titleMax(t) * 5} titles maxed">${says}</span>`;
}
// a character's profession: its icon, a button that opens the ten to pick from (or none)
const profPick = c => `<span class="u-prof"><button type="button" class="u-prof-btn" data-prof-open aria-haspopup="true" title="${c.profession ? PROFS[c.profession] : "Profession"}">
  <img src="${profImg(c.profession || 0)}" alt="${c.profession ? PROFS[c.profession] : "No profession"}"></button>
  <span class="u-prof-menu" hidden>${[...Array(11).keys()].slice(1).concat(0).map(p => `<button type="button" data-prof="${p}" title="${p ? PROFS[p] : "None"}"${(c.profession || 0) === p ? ' aria-current="true"' : ""}><img src="${profImg(p)}" alt="${p ? PROFS[p] : "None"}"></button>`).join("")}</span></span>`;
// up and down chevrons to move a character within its account, or an account among the accounts (the saved order)
const CHEV = d => `<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const moveBtns = (first, last) => `<span class="u-move"><button type="button" data-move="-1" aria-label="Move up"${first ? " disabled" : ""}>${CHEV("M3 10l5-5 5 5")}</button><button type="button" data-move="1" aria-label="Move down"${last ? " disabled" : ""}>${CHEV("M3 6l5 5 5-5")}</button></span>`;
// the optional game modes, each a badge: lit when the character is bound to it, greyed when not; click to set or clear
// a character's gender, for how the site speaks of it: not set, he or she, each click the next
const GENDERS = { "": ["He / She", "Not set"], m: ["He", "Male"], f: ["She", "Female"] };
const genderBtn = c => { const [label, name] = GENDERS[c.gender || ""];
  return `<button type="button" class="u-gender${c.gender ? "" : " unset"}" data-gender title="Gender: ${name}">${label}</button>`; };
const modeBadges = c => `<span class="u-modes">${Object.entries(USER_MODES).map(([m, name]) =>
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
    return `<div class="ch-acct"><button type="button" class="ch-acct-h" data-fold-account="${a.id}" aria-expanded="${open}">${esc(accountName(a))}</button>${open ? list(cs) : ""}</div>`; }).join("")
    : list(chars);
}
const selectHTML = (o, cur, many) => {
  const opt = c => `<option value="${c.id}"${c === cur ? " selected" : ""}>${esc(c.name)}</option>`, chars = shownChars(o, cur);
  return many ? o.accounts.map(a => { const cs = chars.filter(c => c.account === a.id);
    return cs.length ? `<optgroup label="${esc(accountName(a))}">${cs.map(opt).join("")}</optgroup>` : ""; }).join("") : chars.map(opt).join("");
};
/* ---------- heroes and builds tabs ---------- */
// the heroes it has recruited, each a button to tick, by profession (Razah, of none, last); all ticked or none at once
function heroesHTML(c) {
  const got = new Set(c.heroes || []), all = Object.values(HEROES), n = all.filter(h => got.has(h.id)).length;
  const btn = h => `<button type="button" class="ch-hero${got.has(h.id) ? " got" : ""}" data-hero="${h.id}" aria-pressed="${got.has(h.id)}">${esc(h.name)}</button>`;
  const profs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  return `<div class="ch-tab-head"><span><b>${n}</b> <span class="dim">/ ${all.length} heroes recruited</span></span>
      <span><button type="button" class="u-btn" data-heroes="all"${n === all.length ? " disabled" : ""}>Tick all</button>
      <button type="button" class="u-btn" data-heroes="none"${n ? "" : " disabled"}>Untick all</button></span></div>
    <div class="ch-hprofs">${profs.map(p => { const hs = all.filter(h => (h.profession || 0) === p).sort((a, b) => cmpStr(a.name, b.name));
      return hs.length ? `<div class="ch-hprof" style="--pc:${profVar(p)}"><img src="${profImg(p)}" alt="${p ? PROFS[p] : "Any profession"}" title="${p ? PROFS[p] : "Any profession"}"><div>${hs.map(btn).join("")}</div></div>` : ""; }).join("")}</div>`;
}
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
  if (all) return editChar(c => { if (all.dataset.heroes === "all") c.heroes = Object.values(HEROES).map(h => h.id); else delete c.heroes; });
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
$("ch-builds").addEventListener("click", e => {
  const li = e.target.closest("[data-build]");
  if (!li) return;
  const i = +li.dataset.build, mv = e.target.closest("[data-move]");
  if (mv) editChar(c => { const j = i + +mv.dataset.move; [c.builds[i], c.builds[j]] = [c.builds[j], c.builds[i]]; });
  else if (e.target.closest("[data-build-delete]") && confirm("Delete this build?")) editChar(c => { c.builds.splice(i, 1); if (!c.builds.length) delete c.builds; });
});

// the character picked: its card (its Kind of a Big Deal, then its modes, under its name), and how far it is, each count a link to what's left
function cardHTML(o, c) {
  return `<section class="ch-card">
      <img class="ch-prof" src="${profImg(c.profession || 0)}" alt="${c.profession ? PROFS[c.profession] : "No profession"}">
      <div class="ch-who"><h2>${esc(c.name)}</h2><div class="dim">${[bigDeal(c, o), lit(c)].filter(Boolean).join(" · ")}</div></div>
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
const charRow = (o, c, cur, tab = false) => { const sib = o.chars.filter(x => x.account === c.account), hid = !!c.hidden, one = o.chars.length < 2, lone = sib.length < 2;
  return `<tr class="${[c === cur && "cur", hid && "u-hid"].filter(Boolean).join(" ")}" data-id="${c.id}">
    <td><div class="u-name">${profPick(c)}<input type="text" maxlength="40" value="${esc(c.name)}" aria-label="Name">${modeBadges(c)}${genderBtn(c)}</div></td>
    <td>${tab ? "" : `<button type="button" class="u-btn u-show" data-hide aria-pressed="${hid}" title="${hid ? "Hidden from the view: show it" : "Hide it from the view"}">${hid ? "Show" : "Hide"}</button>`}${moveBtns(lone, lone)}${tab ? "" : `<span class="u-slot"><button type="button" class="u-btn danger" data-delete${one ? " disabled" : ""}>Delete</button></span>`}</td></tr>`; };
function manageHTML(o, cur, many) {
  const folded = new Set(acctFolds()), row = c => charRow(o, c, cur);
  const head = a => `<tr class="u-acct" data-account="${a.id}"><td colspan="2"><div class="u-acct-row">
      <button type="button" class="u-fold" data-fold-account="${a.id}" aria-expanded="${!folded.has(a.id)}" aria-label="${folded.has(a.id) ? "Show" : "Hide"} its characters"></button>
      <input type="text" maxlength="40" value="${esc(a.name || "")}" placeholder="${esc(accountName(a))}" aria-label="Account name">
      <span class="u-n" title="Characters">${o.chars.filter(c => c.account === a.id).length}</span>
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
$("ch-select").addEventListener("change", e => { User.pick(+e.target.value); render(); });
/* ---------- characters ---------- */
const rowChar = (o, el) => o.chars.find(c => c.id === +el.closest("tr").dataset.id);
const rowAccount = (o, el) => o.accounts.find(a => a.id === +el.closest("tr").dataset.account);
// the Edit list's handlers, and the Edit tab's (its one row)
const onEdit = (type, f) => { els.list.addEventListener(type, f); $("ch-edit").addEventListener(type, f); };
onEdit("change", e => {
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
onEdit("click", e => {
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
      const c = rowChar(o, mv), i = o.chars.indexOf(c), sib = o.chars.filter(x => x.account === c.account);
      if (sib.length < 2) return;
      let j = i + d;
      while (j >= 0 && j < o.chars.length && o.chars[j].account !== c.account) j += d;
      if (j >= 0 && j < o.chars.length) [o.chars[i], o.chars[j]] = [o.chars[j], o.chars[i]];
      else { o.chars.splice(i, 1); const end = o.chars.indexOf(d < 0 ? sib.at(-1) : sib[0]); o.chars.splice(d < 0 ? end + 1 : end, 0, c); }
    }
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
    if (o.chars.some(c => c.account === a.id) || !confirm(`Delete the account "${accountName(a)}" and its account titles? This can't be undone.`)) return;
    o.accounts = o.accounts.filter(x => x !== a);
    User.save(o); return render();
  }
  if (!e.target.closest("[data-delete]")) return;
  const o = User.data(), c = rowChar(o, e.target);
  if (o.chars.length < 2 || !confirm(`Delete "${c.name}" and all its progress (${charCounts(c)})? This can't be undone.`)) return;
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
  User.save(o); User.pick(c.id); render();
  els.list.querySelector(`tr[data-id="${c.id}"] input[type=text]`).select();
}
$("u-new").addEventListener("click", () => newChar());
// a new account, with no characters yet
$("u-new-account").addEventListener("click", () => {
  const o = User.data(), id = Math.max(...o.accounts.map(a => a.id)) + 1;
  o.accounts.push({ id });
  User.save(o); render();
  els.list.querySelector(`tr[data-account="${id}"] input[type=text]`)?.focus();
});

// changed in another tab
addEventListener("userchange", render);
render();
