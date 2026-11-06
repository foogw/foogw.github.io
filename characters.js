"use strict";
/* My Characters: the accounts and characters whose progress the site keeps in this browser (User, in common.js), the one
   picked to play (the whole site shows its ticks), and below them its titles (titles.js). The list folds away,
   remembered in this browser. */
const els = { list: $("u-list") };
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const modes = vs => `${vs.filter(v => v & 1).length} NM, ${vs.filter(v => v & 2).length} HM`;
const charCounts = c => `${plural(c.elites.length, "elite")} captured · missions ${modes(modeProgress(c, "missions"))} · dungeons ${modes(modeProgress(c, "dungeons"))}`;
// the list open or folded
const FOLD = "chars.fold";
try { if (localStorage.getItem(FOLD) === "1") $("u-char").open = false; } catch { /* storage blocked */ }
$("u-char").addEventListener("toggle", e => { try { localStorage.setItem(FOLD, e.target.open ? "0" : "1"); } catch { /* storage blocked */ } });
// the titles below draw again (titles.js, once it's in): the character picked, its account, may have changed
const redrawTitles = () => typeof draw === "function" && draw();

// Kind of a Big Deal: its rank's name and the titles maxed toward its top rank
function bigDeal(c, o) {
  const t = TITLES[10], r = titleRankOf(t, c, o), name = r ? t.rank_names[r - 1] : "No rank yet";
  return `${titlesMaxed(c, o)}/${titleMax(t) * 5} ${esc(name)}`;
}
// a character's profession: its icon, a button that opens the ten to pick from (or none)
const profPick = c => `<span class="u-prof"><button type="button" class="u-prof-btn" data-prof-open aria-haspopup="true" title="${c.profession ? PROFS[c.profession] : "Profession"}">
  <img src="${profImg(c.profession || 0)}" alt="${c.profession ? PROFS[c.profession] : "No profession"}"></button>
  <span class="u-prof-menu" hidden>${[...Array(11).keys()].slice(1).concat(0).map(p => `<button type="button" data-prof="${p}" title="${p ? PROFS[p] : "None"}"${(c.profession || 0) === p ? ' aria-current="true"' : ""}><img src="${profImg(p)}" alt="${p ? PROFS[p] : "None"}"></button>`).join("")}</span></span>`;
// up and down chevrons to move a character within its account, or an account among the accounts (the saved order)
const CHEV = d => `<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const moveBtns = (first, last) => `<span class="u-move"><button type="button" data-move="-1" aria-label="Move up"${first ? " disabled" : ""}>${CHEV("M3 10l5-5 5 5")}</button><button type="button" data-move="1" aria-label="Move down"${last ? " disabled" : ""}>${CHEV("M3 6l5 5 5-5")}</button></span>`;
// the optional game modes, each a badge: lit when the character is bound to it, greyed when not; click to set or clear
const modeBadges = c => `<span class="u-modes">${Object.entries(USER_MODES).map(([m, name]) =>
  `<button type="button" class="u-mode" data-mode="${m}" aria-pressed="${(c.modes || []).includes(m)}" title="${esc(name)}"><img src="img/modes/${m}.png" alt="${esc(name)}"></button>`).join("")}</span>`;
const closeProfs = () => { for (const m of document.querySelectorAll(".u-prof-menu")) m.hidden = true; };
document.addEventListener("click", e => { if (!e.target.closest(".u-prof")) closeProfs(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProfs(); });
// the characters, by account: with one account, just its characters; with more, each account as a heading (its name to
// rename, a delete while it has no characters, chevrons to reorder) with a new character after its last; a character stays on the
// account it was made on, and chevrons move it among the account's characters: the saved order is the shown order
function render() {
  const broken = User.broken(), o = User.data(), cur = User.char(o), one = o.chars.length < 2, many = o.accounts.length > 1;
  $("u-broken").hidden = !broken;
  $("u-char").hidden = broken;
  $("u-new").hidden = many;
  const row = c => { const sib = o.chars.filter(x => x.account === c.account); return `<tr class="${c === cur ? "cur" : ""}" data-id="${c.id}">
    <td><input type="radio" name="u-shown" aria-label="Show ${esc(c.name)}"${c === cur ? " checked" : ""}></td>
    <td><div class="u-name">${profPick(c)}<input type="text" maxlength="40" value="${esc(c.name)}" aria-label="Name">${modeBadges(c)}</div></td>
    <td><button type="button" class="link u-gwamm" data-rank="${titleRankOf(TITLES[10], c, o)}" data-pick title="Show ${esc(c.name)}">${bigDeal(c, o)}</button></td>
    <td>${moveBtns(sib[0] === c, sib[sib.length - 1] === c)}<span class="u-slot"><button type="button" class="u-btn danger" data-delete${one ? " disabled" : ""}>Delete</button></span></td></tr>`; };
  const head = a => `<tr class="u-acct" data-account="${a.id}"><td colspan="4"><div class="u-acct-row">
      <input type="text" maxlength="40" value="${esc(a.name || "")}" placeholder="${esc(accountName(a))}" aria-label="Account name">
      <span class="u-acct-right">${moveBtns(o.accounts[0] === a, o.accounts[o.accounts.length - 1] === a)}<span class="u-slot">${o.chars.some(c => c.account === a.id) ? "" : `<button type="button" class="u-btn danger" data-delete-account>Delete account</button>`}</span></span></div></td></tr>`;
  // after an account's characters: a new one on it
  const foot = a => `<tr class="u-acct-foot" data-account="${a.id}"><td colspan="4"><button type="button" class="u-btn" data-new-char>New character</button></td></tr>`;
  $("u-head").innerHTML = `<tr><th>Shown</th><th>Name</th><th>GWAMM</th><th></th></tr>`;
  els.list.innerHTML = many ? o.accounts.map(a => head(a) + o.chars.filter(c => c.account === a.id).map(row).join("") + foot(a)).join("") : o.chars.map(row).join("");
  redrawTitles();
}
/* ---------- characters ---------- */
const rowChar = (o, el) => o.chars.find(c => c.id === +el.closest("tr").dataset.id);
const rowAccount = (o, el) => o.accounts.find(a => a.id === +el.closest("tr").dataset.account);
els.list.addEventListener("change", e => {
  const o = User.data();
  // an account's new name (none: its number)
  if (e.target.closest(".u-acct")) {
    const a = rowAccount(o, e.target), n = e.target.value.trim();
    if (n) a.name = n; else delete a.name;
    User.save(o); return render();
  }
  const c = rowChar(o, e.target);
  if (e.target.type === "radio") { User.pick(c.id); return render(); }
  // a new name, once it's left
  const n = e.target.value.trim();
  if (!n || n === c.name) { e.target.value = c.name; return; }
  c.name = n;
  User.save(o); render();
});
els.list.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.type === "text") e.target.blur(); });
els.list.addEventListener("click", e => {
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
    } else {  // a character among its account's: swap with the next one of the same account in the saved order
      const c = rowChar(o, mv), i = o.chars.indexOf(c);
      let j = i + d;
      while (j >= 0 && j < o.chars.length && o.chars[j].account !== c.account) j += d;
      if (j < 0 || j >= o.chars.length) return;
      [o.chars[i], o.chars[j]] = [o.chars[j], o.chars[i]];
    }
    User.save(o); return render();
  }
  const pick1 = e.target.closest("[data-pick]");
  if (pick1) { User.pick(rowChar(User.data(), pick1).id); return render(); }
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
