"use strict";
/* The User page: the accounts and characters whose progress the site keeps in this browser (User, in common.js), and that progress
   as text to copy, download, or paste or load back in place of it. Saved progress the site can't read is shown as it
   is, to be copied, then replaced or reset. */
const els = { list: $("u-list"), text: $("u-text"), status: $("u-status"), submit: $("u-submit"), reset: $("u-reset") };
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const modes = vs => `${vs.filter(v => v & 1).length} NM, ${vs.filter(v => v & 2).length} HM`;
const charCounts = c => `${plural(c.elites.length, "elite")} captured · missions ${modes(modeProgress(c, "missions"))} · dungeons ${modes(modeProgress(c, "dungeons"))}`;
// one line for the accounts and characters, then one for each character
// (o as the pages see it)
const summary = o => [`${plural(o.accounts?.length || 1, "account")}, ${plural(o.chars.length, "character")}`, ...o.chars.map(c => `${c.name}: ${charCounts(c)}`)].join("\n");
// the saved progress as text: as it's kept, when it can't be read
const keptText = () => (User.broken() ? User.stored() : JSON.stringify(userToKept(User.data())));
let kept = false;  // broken progress copied or downloaded on this visit: only then can it be replaced or reset
const status = (t, cls = "") => { els.status.textContent = t; els.status.className = `u-status ${cls}`; };

// Kind of a Big Deal: its rank's name and the titles maxed toward its top rank; a link to the character's titles
function bigDeal(c, o) {
  const t = TITLES[10], r = titleRankOf(t, c, o), name = r ? t.rank_names[r - 1] : "No rank yet";
  return `<a href="titles" data-titles>${esc(name)} ${titlesMaxed(c, o)}/${titleMax(t) * 5}</a>`;
}
// a character's profession: its icon, a button that opens the ten to pick from (or none)
const profPick = c => `<span class="u-prof"><button type="button" class="u-prof-btn" data-prof-open aria-haspopup="true" title="${c.profession ? PROFS[c.profession] : "Profession"}">
  <img src="${profImg(c.profession || 0)}" alt="${c.profession ? PROFS[c.profession] : "No profession"}"></button>
  <span class="u-prof-menu" hidden>${[...Array(11).keys()].slice(1).concat(0).map(p => `<button type="button" data-prof="${p}" title="${p ? PROFS[p] : "None"}"${(c.profession || 0) === p ? ' aria-current="true"' : ""}><img src="${profImg(p)}" alt="${p ? PROFS[p] : "None"}"></button>`).join("")}</span></span>`;
const closeProfs = () => { for (const m of document.querySelectorAll(".u-prof-menu")) m.hidden = true; };
document.addEventListener("click", e => { if (!e.target.closest(".u-prof")) closeProfs(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProfs(); });
// the characters, by account: with one account, just its characters; with more, each account as a heading (its name to
// rename, a delete while it has no characters, a new character on it), and each character can move
function render() {
  const broken = User.broken(), o = User.data(), cur = User.char(o), one = o.chars.length < 2, many = o.accounts.length > 1;
  $("u-broken").hidden = !broken;
  $("u-char").hidden = broken;
  els.reset.hidden = !broken;
  $("u-new").hidden = many;
  const move = c => `<select data-move aria-label="Account">${o.accounts.map(a => `<option value="${a.id}"${a.id === c.account ? " selected" : ""}>${esc(accountName(a))}</option>`).join("")}</select>`;
  const row = c => `<tr class="${c === cur ? "cur" : ""}" data-id="${c.id}">
    <td><input type="radio" name="u-shown" aria-label="Show ${esc(c.name)}"${c === cur ? " checked" : ""}></td>
    <td><div class="u-name">${profPick(c)}<input type="text" maxlength="40" value="${esc(c.name)}" aria-label="Name"></div></td>
    <td>${bigDeal(c, o)}</td>${many ? `<td>${move(c)}</td>` : ""}
    <td><button type="button" class="u-btn danger" data-delete${one ? " disabled" : ""}>Delete</button></td></tr>`;
  const head = a => `<tr class="u-acct" data-account="${a.id}"><td colspan="5"><div class="u-acct-row">
      <input type="text" maxlength="40" value="${esc(a.name || "")}" placeholder="${esc(accountName(a))}" aria-label="Account name">
      ${o.chars.some(c => c.account === a.id) ? "" : `<button type="button" class="u-btn danger" data-delete-account>Delete account</button>`}
      <button type="button" class="u-btn u-acct-new" data-new-char>New character</button></div></td></tr>`;
  $("u-head").innerHTML = `<tr><th>Shown</th><th>Name</th><th>Kind of a Big Deal</th>${many ? "<th>Account</th>" : ""}<th></th></tr>`;
  els.list.innerHTML = many ? o.accounts.map(a => head(a) + o.chars.filter(c => c.account === a.id).map(row).join("")).join("") : o.chars.map(row).join("");
  els.text.value = keptText();
  check();
}
// the box's text, checked: the button takes it only when it's valid progress that differs from the saved one (and, in
// area of broken progress, only once that's been copied)
function check() {
  const t = els.text.value.trim(), broken = User.broken();
  els.submit.disabled = true;
  els.reset.disabled = !kept;
  if (!t) return status("Paste a backup here, or load it from a file.");
  let o, err;
  try { o = JSON.parse(t); err = userCheck(o); } catch { err = "it doesn't read as JSON text."; }
  if (t === keptText().trim()) return broken ? status(`This is your saved progress, as it's kept. It isn't valid: ${err}`, "bad") : status("");
  if (err) return status(`This isn't valid: ${err}`, "bad");
  o = userFromKept(o);
  if (broken && !kept) return status(`Valid: ${summary(o)}\nCopy or download your saved progress first, to use this in its area.`, "ok");
  els.submit.disabled = false;
  status(`Valid: ${summary(o)}`, "ok");
}
els.text.addEventListener("input", check);

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
  if (e.target.matches("[data-move]")) { c.account = +e.target.value; User.save(o); return render(); }
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
  // a character's titles: it's picked, then its titles are shown
  if (e.target.closest("[data-titles]")) { User.pick(rowChar(User.data(), e.target).id); return; }
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

/* ---------- the text: copy, download, load, use, reset ---------- */
const keep = () => { kept = true; check(); };
$("u-copy").addEventListener("click", e => navigator.clipboard?.writeText(keptText()).then(() => {
  e.target.textContent = "Copied";
  setTimeout(() => { e.target.textContent = "Copy"; }, 1500);
  keep();
}));
$("u-download").addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([keptText()], { type: "application/json" }));
  a.download = "guild-wars-today-data.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  keep();
});
$("u-load").addEventListener("click", () => $("u-file").click());
$("u-file").addEventListener("change", async e => {
  const f = e.target.files[0];
  e.target.value = "";
  if (!f) return;
  els.text.value = f.size > 1e6 ? "" : await f.text();
  if (f.size > 1e6) return status("This file is too big to be progress.", "bad");
  check();
});
els.submit.addEventListener("click", () => {
  const raw = JSON.parse(els.text.value.trim()), broken = User.broken();
  if (userCheck(raw) || broken && !kept) return;
  const o = userFromKept(raw);
  const was = broken ? "your saved progress, which can't be read" : summary(User.data());
  if (!confirm(`This replaces all the progress saved in this browser:\n\n${was}\n\nwith this:\n\n${summary(o)}\n\nContinue?`)) return;
  if (broken) User.reset();
  User.save(o);
  kept = false;
  render();
  status("Done: this is your progress now.", "ok");
});
els.reset.addEventListener("click", () => {
  if (!kept || !confirm("This deletes all your saved progress for good and starts afresh, with one empty character. You've kept a copy?")) return;
  User.reset();
  kept = false;
  render();
  status("Reset: a fresh start.", "ok");
});
// changed in another tab
addEventListener("userchange", render);
render();
