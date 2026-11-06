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
  return `${esc(name)} ${titlesMaxed(c, o)}/${titleMax(t) * 5}`;
}
// a character's profession: its icon, a button that opens the ten to pick from (or none)
const profPick = c => `<span class="u-prof"><button type="button" class="u-prof-btn" data-prof-open aria-haspopup="true" title="${c.profession ? PROFS[c.profession] : "Profession"}">
  <img src="${profImg(c.profession || 0)}" alt="${c.profession ? PROFS[c.profession] : "No profession"}"></button>
  <span class="u-prof-menu" hidden>${[...Array(11).keys()].slice(1).concat(0).map(p => `<button type="button" data-prof="${p}" title="${p ? PROFS[p] : "None"}"${(c.profession || 0) === p ? ' aria-current="true"' : ""}><img src="${profImg(p)}" alt="${p ? PROFS[p] : "None"}"></button>`).join("")}</span></span>`;
const closeProfs = () => { for (const m of document.querySelectorAll(".u-prof-menu")) m.hidden = true; };
document.addEventListener("click", e => { if (!e.target.closest(".u-prof")) closeProfs(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProfs(); });
// the characters, by account: with one account, just its characters; with more, each account as a heading (its name to
// rename, a delete while it has no characters, a new character on it); a character stays on the account it was made on
function render() {
  const broken = User.broken(), o = User.data(), cur = User.char(o), one = o.chars.length < 2, many = o.accounts.length > 1;
  $("u-broken").hidden = !broken;
  $("u-char").hidden = broken;
  $("u-new").hidden = many;
  const row = c => `<tr class="${c === cur ? "cur" : ""}" data-id="${c.id}">
    <td><input type="radio" name="u-shown" aria-label="Show ${esc(c.name)}"${c === cur ? " checked" : ""}></td>
    <td><div class="u-name">${profPick(c)}<input type="text" maxlength="40" value="${esc(c.name)}" aria-label="Name"></div></td>
    <td>${bigDeal(c, o)}</td>
    <td><button type="button" class="u-btn danger" data-delete${one ? " disabled" : ""}>Delete</button></td></tr>`;
  const head = a => `<tr class="u-acct" data-account="${a.id}"><td colspan="4"><div class="u-acct-row">
      <input type="text" maxlength="40" value="${esc(a.name || "")}" placeholder="${esc(accountName(a))}" aria-label="Account name">
      ${o.chars.some(c => c.account === a.id) ? "" : `<button type="button" class="u-btn danger" data-delete-account>Delete account</button>`}
      <button type="button" class="u-btn u-acct-new" data-new-char>New character</button></div></td></tr>`;
  $("u-head").innerHTML = `<tr><th>Shown</th><th>Name</th><th>Kind of a Big Deal</th><th></th></tr>`;
  els.list.innerHTML = many ? o.accounts.map(a => head(a) + o.chars.filter(c => c.account === a.id).map(row).join("")).join("") : o.chars.map(row).join("");
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
