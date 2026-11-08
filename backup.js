"use strict";
/* The Backup page: the progress the site keeps in this browser (User, in common.js) as text to copy, download, or paste
   or load back in place of it. Saved progress the site can't read is shown as it is, to be copied, then replaced or
   reset. (The characters and accounts are on My Characters.) */
const els = { text: $("u-text"), status: $("u-status"), submit: $("u-submit"), reset: $("u-reset") };
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const modes = vs => `${vs.filter(v => v & 1).length} NM, ${vs.filter(v => v & 2).length} HM`;
const charCounts = c => `${plural(c.elites.length, "elite")} captured · missions ${modes(modeProgress(c, "missions"))} · dungeons ${modes(modeProgress(c, "dungeons"))}`;
// one line for the accounts and characters, one for each character, then one for the rest (o as the pages see it, x
// the rest as kept)
const extrasLine = x => [x.builderBuilds && plural(x.builderBuilds.length, "saved build"), x.guides && `${plural(Object.keys(x.guides).length, "guide")} with steps ticked or a calculator set`,
  x.settings && `Rotations in ${x.settings.eventsUtc ? "UTC" : "your time"}`].filter(Boolean).join(" · ");
const summary = (o, x = {}) => [`${plural(o.accounts?.length || 1, "account")}, ${plural(o.chars.length, "character")}`, ...o.chars.map(c => `${c.name}: ${charCounts(c)}`),
  extrasLine(x)].filter(Boolean).join("\n");
// JSON laid out to read: each key on its line, indented, but a list of plain values (ids, codes) on one line
const pretty = (v, ind = "") => {
  if (Array.isArray(v) && v.some(x => x && typeof x === "object"))
    return `[\n${v.map(x => ind + "  " + pretty(x, ind + "  ")).join(",\n")}\n${ind}]`;
  if (v && typeof v === "object" && !Array.isArray(v)) {
    const es = Object.entries(v);
    return es.length ? `{\n${es.map(([k, x]) => `${ind}  ${JSON.stringify(k)}: ${pretty(x, ind + "  ")}`).join(",\n")}\n${ind}}` : "{}";
  }
  return Array.isArray(v) ? `[${v.map(x => JSON.stringify(x)).join(", ")}]` : JSON.stringify(v);
};
// the saved progress as text, on one line or laid out (as picked: one line first), and copied and downloaded so; as
// it's kept, when it can't be read
let laidOut = false;
const asText = o => (laidOut ? pretty(o) : JSON.stringify(o));
const keptText = () => (User.broken() ? User.stored() : asText({ ...userToKept(User.data()), ...extrasKept() }));
$("u-layout").addEventListener("click", e => {
  // (the box's text laid out again too: the saved progress, or any progress pasted that reads as JSON)
  const t = els.text.value.trim(), was = keptText().trim();
  laidOut = !laidOut;
  e.target.setAttribute("aria-pressed", laidOut);
  if (t === was) els.text.value = keptText();
  else try { els.text.value = asText(JSON.parse(t)); } catch { /* left as it is */ }
  check();
});
let kept = false;  // broken progress copied or downloaded on this visit: only then can it be replaced or reset
const status = (t, cls = "") => { els.status.textContent = t; els.status.className = `u-status ${cls}`; };

function render() {
  const broken = User.broken();
  $("u-broken").hidden = !broken;
  els.reset.hidden = !broken;
  els.text.value = keptText();
  check();
}
// the box's text, checked: the button takes it only when it's valid progress that differs from the saved one (and, in
// place of broken progress, only once that's been copied)
function check() {
  const t = els.text.value.trim(), broken = User.broken();
  els.submit.disabled = true;
  els.reset.disabled = !kept;
  if (!t) return status("Paste a backup here, or load it from a file.");
  let o, err;
  try { o = JSON.parse(t); err = userCheck(o); } catch { err = "it doesn't read as JSON text."; }
  if (t === keptText().trim()) return broken ? status(`This is your saved progress, as it's kept. It isn't valid: ${err}`, "bad") : status("");
  if (err) return status(`This isn't valid: ${err}`, "bad");
  const x = o;
  o = userFromKept(o);
  if (broken && !kept) return status(`Valid: ${summary(o, x)}\nCopy or download your saved progress first, to use this in its place.`, "ok");
  els.submit.disabled = false;
  status(`Valid: ${summary(o, x)}`, "ok");
}
els.text.addEventListener("input", check);

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
  const was = broken ? "your saved progress, which can't be read" : summary(User.data(), extrasKept());
  if (!confirm(`This replaces all the progress saved in this browser:\n\n${was}\n\nwith this:\n\n${summary(o, raw)}\n\nContinue?`)) return;
  if (broken) User.reset();
  User.save(o);
  extrasApply(raw);
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
