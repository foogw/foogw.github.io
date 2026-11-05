"use strict";
/* The User page: the characters whose progress the site keeps in this browser (User, in common.js), and that progress
   as text to copy, download, or paste or load back in place of it. Saved progress the site can't read is shown as it
   is, to be copied, then replaced or reset. */
const els = { list: $("u-list"), text: $("u-text"), status: $("u-status"), submit: $("u-submit"), reset: $("u-reset") };
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const modes = vs => `${vs.filter(v => v & 1).length} NM, ${vs.filter(v => v & 2).length} HM`;
const charCounts = c => `${plural(c.elites.length, "elite")} captured · missions ${modes(modeProgress(c, "missions"))} · dungeons ${modes(modeProgress(c, "dungeons"))}`;
// one line for the characters, then one for each
const summary = o => [plural(o.chars.length, "character"), ...o.chars.map(c => `${c.name}: ${charCounts(c)}`)].join("\n");
// the saved progress as text: as it's kept, when it can't be read
const keptText = () => (User.broken() ? User.stored() : JSON.stringify(User.data()));
let kept = false;  // broken progress copied or downloaded on this visit: only then can it be replaced or reset
const status = (t, cls = "") => { els.status.textContent = t; els.status.className = `u-status ${cls}`; };

function render() {
  const broken = User.broken(), o = User.data(), cur = User.char(o), one = o.chars.length < 2;
  const n = (c, part, b) => modeProgress(c, part).filter(v => v & b).length;
  $("u-broken").hidden = !broken;
  $("u-char").hidden = broken;
  els.reset.hidden = !broken;
  els.list.innerHTML = o.chars.map(c => `<tr class="${c === cur ? "cur" : ""}" data-id="${c.id}">
    <td><input type="radio" name="u-shown" aria-label="Show ${esc(c.name)}"${c === cur ? " checked" : ""}></td>
    <td><input type="text" maxlength="40" value="${esc(c.name)}" aria-label="Name"></td>
    <td class="num">${c.elites.length}</td><td class="num">${n(c, "missions", 1)}</td><td class="num">${n(c, "missions", 2)}</td>
    <td class="num">${n(c, "dungeons", 1)}</td><td class="num">${n(c, "dungeons", 2)}</td>
    <td><button type="button" class="u-btn danger" data-delete${one ? " disabled" : ""}>Delete</button></td></tr>`).join("");
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
  if (broken && !kept) return status(`Valid: ${summary(o)}\nCopy or download your saved progress first, to use this in its area.`, "ok");
  els.submit.disabled = false;
  status(`Valid: ${summary(o)}`, "ok");
}
els.text.addEventListener("input", check);

/* ---------- characters ---------- */
const rowChar = (o, el) => o.chars.find(c => c.id === +el.closest("tr").dataset.id);
els.list.addEventListener("change", e => {
  const o = User.data(), c = rowChar(o, e.target);
  if (e.target.type === "radio") { User.pick(c.id); return render(); }
  // a new name, once it's left
  const n = e.target.value.trim();
  if (!n || n === c.name) { e.target.value = c.name; return; }
  c.name = n;
  User.save(o); render();
});
els.list.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.type === "text") e.target.blur(); });
els.list.addEventListener("click", e => {
  if (!e.target.closest("[data-delete]")) return;
  const o = User.data(), c = rowChar(o, e.target);
  if (o.chars.length < 2 || !confirm(`Delete "${c.name}" and all its progress (${charCounts(c)})? This can't be undone.`)) return;
  const shown = User.char(o) === c;
  o.chars = o.chars.filter(x => x !== c);
  User.save(o);
  if (shown) User.pick(o.chars[0].id);
  render();
});
// a new character is named by its id (Char2), to be renamed in its row
$("u-new").addEventListener("click", () => {
  const o = User.data(), c = newUserChar(Math.max(...o.chars.map(c => c.id)) + 1);
  o.chars.push(c);
  User.save(o); User.pick(c.id); render();
  els.list.querySelector(`tr[data-id="${c.id}"] input[type=text]`).select();
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
  const o = JSON.parse(els.text.value.trim()), broken = User.broken();
  if (userCheck(o) || broken && !kept) return;
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
