"use strict";
/* The Backup page: the progress the site keeps in this browser (User, in common.js) as text to copy, download, or paste
   or load back in place of it. Saved progress the site can't read is shown as it is, to be copied, then replaced or
   reset. (The characters and accounts are on My Characters.) */
const els = { text: $("u-text"), status: $("u-status"), submit: $("u-submit"), reset: $("u-reset") };
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
// a backup in short: its accounts and characters (o as the pages see it), and its format's version when older than this one
const facts = o => ({ accounts: o.accounts?.length || 1, characters: o.chars.length });
const older = x => { const v = x.v ?? 1; return v < USER_VERSION ? `Format version ${v}, made ${USER_VERSION} once it's used.` : ""; };
const summary = o => { const f = facts(o); return `${plural(f.accounts, "account")}, ${plural(f.characters, "character")}`; };
// the progress as it's kept now, and as it would be with a backup used (o as the pages see it, raw as pasted): in this
// version, with the rest (saved builds, guides, settings) the backup's where it has them, else kept as they are
const EXTRAS = ["builderBuilds", "guides", "settings"];
const keptNow = () => ({ ...userToKept(User.data()), ...extrasKept() });
const keptWith = (o, raw) => { const x = extrasKept(); for (const k of EXTRAS) if (raw[k] !== undefined) x[k] = raw[k]; return { ...userToKept(o), ...x }; };
// the rows added and removed, laid out, from one to the other (a longest common run of rows)
function rowsDiff(a, b) {
  const A = pretty(a).split("\n"), B = pretty(b).split("\n"), n = A.length, m = B.length;
  let prev = new Array(m + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const cur = new Array(m + 1).fill(0);
    for (let j = 1; j <= m; j++) cur[j] = A[i - 1] === B[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
    prev = cur;
  }
  return { added: m - prev[m], removed: n - prev[m] };
}
// what using a backup does, said the same on the page and in the question before it's used: only what differs, as it
// is → as it would be
function restoreSays(o, raw) {
  if (User.broken()) return [`Your saved progress, which can't be read, becomes: ${summary(o)}`, older(raw)].filter(Boolean).join("\n");
  const fa = facts(User.data()), fb = facts(o), d = rowsDiff(keptNow(), keptWith(o, raw));
  const lines = Object.keys(fa).filter(k => fa[k] !== fb[k]).map(k => `${k[0].toUpperCase()}${k.slice(1)}: ${fa[k]} → ${fb[k]}`);
  lines.push(`Rows, laid out: ${d.added} added, ${d.removed} removed`);
  return [...lines, older(raw)].filter(Boolean).join("\n");
}
// a backup that's the progress saved now, in whatever layout
const sameAsNow = (o, raw) => !User.broken() && JSON.stringify(keptNow()) === JSON.stringify(keptWith(o, raw));
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

// the format's version a backup is made in; an older one still loads, and becomes it with the next change
const USER_VERSION = 3;
function versionLine() {
  $("u-version").textContent = `Backups are made in the format's version ${USER_VERSION}. Older ones still load, and become version ${USER_VERSION} with your next change.`;
}
function render() {
  versionLine();
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
  if (sameAsNow(o, x)) return status("This is your saved progress: nothing to change.");
  if (broken && !kept) return status(`Valid. ${restoreSays(o, x)}\nCopy or download your saved progress first, to use this in its place.`, "ok");
  els.submit.disabled = false;
  status(`Valid. ${restoreSays(o, x)}`, "ok");
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
  // (named with the day, in your own time: guild-wars-today-data-2026-11-10.json)
  a.download = `guild-wars-today-data-${ymd()}.json`;
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
els.submit.addEventListener("click", async () => {
  const raw = JSON.parse(els.text.value.trim()), broken = User.broken();
  if (userCheck(raw) || broken && !kept) return;
  const o = userFromKept(raw);
  if (!await ask({ title: "Replace all the progress saved in this browser?", body: restoreSays(o, raw), ok: "Replace", danger: true, focus: "cancel" })) return;
  if (broken) User.reset();
  User.save(o, true);
  extrasApply(raw);
  kept = false;
  render();
  status("Done: this is your progress now.", "ok");
});
els.reset.addEventListener("click", async () => {
  if (!kept || !await ask({ title: "Delete all your saved progress?", body: "For good, starting afresh with one empty character. You've kept a copy?", ok: "Delete all", danger: true, focus: "cancel" })) return;
  User.reset();
  kept = false;
  render();
  status("Reset: a fresh start.", "ok");
});
// read-only on or off (in this browser only); the box set from what's kept whenever the page shows (a browser that puts
// a form back as it was on a reload or Back, autocomplete or not, doesn't get the last word)
const showReadOnly = () => { $("u-read-only").checked = readOnly(); globalThis.headerReadOnly?.(); roLook(); };
$("u-read-only").addEventListener("change", e => { try { if (e.target.checked) localStorage.setItem(READ_ONLY_KEY, "1"); else localStorage.removeItem(READ_ONLY_KEY); } catch { /* storage blocked */ } showReadOnly(); });
showReadOnly();
addEventListener("pageshow", showReadOnly);
addEventListener("load", showReadOnly);
// changed in another tab
addEventListener("userchange", render);
render();
