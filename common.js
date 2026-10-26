"use strict";
/* Helpers shared by every page. */

const PROFS = [
  ["Warrior", "W"], ["Ranger", "R"], ["Monk", "Mo"], ["Necromancer", "N"], ["Mesmer", "Me"],
  ["Elementalist", "E"], ["Assassin", "A"], ["Ritualist", "Rt"], ["Paragon", "P"], ["Dervish", "D"],
  ["None", "Common"],
];
const PROF_ORDER = Object.fromEntries(PROFS.map(([p], i) => [p, i]));
const PROF_BY_SHORT = Object.fromEntries(PROFS.map(([p, s]) => [s, p]));
const CAMPAIGNS = ["Core", "Prophecies", "Factions", "Nightfall", "Eye of the North"];
const CAMP_SHORT = { Core: "Core", Prophecies: "Prof", Factions: "Fa", Nightfall: "NF", "Eye of the North": "EotN" };

const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fold = s => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[“”"!]/g, "");
const profVar = p => `var(--p-${String(PROF_BY_SHORT[p] || p || "none").toLowerCase()})`;
const cmpStr = (a, b) => String(a ?? "").localeCompare(String(b ?? ""));
const terms = input => fold(input.value).split(/\s+/).filter(Boolean);

function highlight(text, terms) {
  const html = esc(text);
  if (!terms.length) return html;
  const folded = fold(text);
  const marks = [];
  for (const t of terms) {
    let i = folded.indexOf(t);
    while (i >= 0) { marks.push([i, i + t.length]); i = folded.indexOf(t, i + t.length); }
  }
  if (!marks.length || folded.length !== text.length) return html;
  marks.sort((a, b) => a[0] - b[0]);
  let out = "", pos = 0;
  for (const [a, b] of marks) {
    if (a < pos) continue;
    out += esc(text.slice(pos, a)) + "<mark>" + esc(text.slice(a, b)) + "</mark>";
    pos = b;
  }
  return out + esc(text.slice(pos));
}

/* Keeps a sticky column header right below the sticky filter bar. */
function stickHeadBelowFilters() {
  const place = () => { $("head").style.top = headerHeight() + $("filters").offsetHeight + "px"; };
  place();
  window.addEventListener("resize", place);
}

/* The page's top bar stays visible; sticky bars below it read its height from --hdr-h. */
function headerHeight() { return document.querySelector("header.top")?.offsetHeight || 0; }
function trackHeaderHeight() {
  const set = () => document.documentElement.style.setProperty("--hdr-h", headerHeight() + "px");
  set();
  window.addEventListener("resize", set);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", trackHeaderHeight);
else trackHeaderHeight();

/* Rotations: entry k of a cycle is active from start + k * period (unix seconds). */
const Rotation = {
  period(r, t = Date.now()) { return Math.floor((t / 1000 - r.start) / r.period); },
  entry(r, k) { const n = r.entries.length; return r.entries[((k % n) + n) % n]; },
  startsAt(r, k) { return (r.start + k * r.period) * 1000; },
  current(r, t = Date.now()) { return Rotation.entry(r, Rotation.period(r, t)); },
  endsAt(r, t = Date.now()) { return Rotation.startsAt(r, Rotation.period(r, t) + 1); },
};

function timeLeft(ms) {
  const m = Math.max(0, Math.floor(ms / 60000));
  const d = Math.floor(m / 1440), h = Math.floor((m % 1440) / 60), mm = m % 60;
  return d ? `${d}d ${h}h` : h ? `${h}h ${mm}m` : `${mm}m`;
}

// Nicholas the Traveler's items link to the German wiki's map of where he stands that week.
const nicholasItemHTML = e => (e.map ? `<a href="${esc(e.map)}" target="_blank" rel="noopener">${esc(e.name)}</a>` : esc(e.name));

/* How a rotation entry reads, with a link where the site has a page for it. */
function rotationEntryHTML(r, e, missionNames) {
  const name = r.key === "zaishen-mission" && missionNames && missionNames.has(e.name)
    ? `<a href="missions.html#open=${encodeURIComponent(e.name)}">${esc(e.name)}</a>`
    : r.key === "nicholas-traveler" ? nicholasItemHTML(e) : esc(e.name);
  if (e.count) return `${e.count} × ${name} <span class="dim">— ${esc(e.where)}, ${esc(e.region)}</span>`;
  return name;
}

/* Compact "label · current · time left" rows; a null row draws the daily/weekly divider. */
function rotationListHTML(rows, rotations, missionNames, now = Date.now()) {
  return rows.map(row => {
    if (!row) return '<div class="t-sep"></div>';
    const [key, title] = row;
    const r = rotations[key];
    const k = Rotation.period(r, now);
    const show = e => e.count ? `${e.count} × ${nicholasItemHTML(e)} <span class="dim">· ${esc(e.where)}</span>`
      : rotationEntryHTML(r, e, missionNames);
    const next = Rotation.entry(r, k + 1);
    return `<div class="t-row"><span class="t-k">${title}</span><span class="t-v">${show(Rotation.entry(r, k))}</span>`
      + `<span class="t-l">${timeLeft(Rotation.endsAt(r, now) - now)}</span>`
      + `<span class="t-n">then: ${next.count ? `${next.count} × ${nicholasItemHTML(next)}` : rotationEntryHTML(r, next, missionNames)}</span></div>`;
  }).join("");
}

/* On the published site the home page is "/", never "/index.html": point Home links at the folder and
   drop "index.html" from the address bar. Opened from disk (file:), links keep index.html. */
function cleanHomeUrls() {
  if (!location.protocol.startsWith("http")) return;
  for (const a of document.querySelectorAll('a[href^="index.html"]')) a.setAttribute("href", "./" + a.getAttribute("href").slice(10));
  if (location.pathname.endsWith("/index.html")) {
    history.replaceState(history.state, "", location.pathname.slice(0, -10) + location.search + location.hash);
  }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", cleanHomeUrls);
else cleanHomeUrls();

/* A skill's icon (lazy-loaded; removed if the skill has none). */
/* Skill type filter shared by the skills list and the builder: "All attacks" / "All spells" / "All rituals"
   groups, then every type the given skills have. */
const TYPE_GROUPS = [["~Attack", "All attacks", /Attack/], ["~Spell", "All spells", /Spell|Hex|Enchantment/], ["~Ritual", "All rituals", /Ritual/]];
function typeOptionsHTML(skills, { groups: withGroups = true, any = "Any type" } = {}) {
  const types = [...new Set(skills.map(s => s.type).filter(Boolean))].sort();
  const groups = withGroups ? TYPE_GROUPS.filter(([, , re]) => types.some(t => re.test(t))) : [];
  return `<option value="">${any}</option>`
    + groups.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")
    + (groups.length ? `<option disabled>──────────</option>` : "")
    + types.map(t => `<option>${esc(t)}</option>`).join("");
}
const typeMatches = (s, type) => !type
  || (type.startsWith("~") ? TYPE_GROUPS.find(g => g[0] === type)[2].test(s.type || "") : s.type === type);

/* On narrow screens the top bar's links scroll sideways: bring the current page's link into view. */
function revealCurrentNav() {
  const cur = document.querySelector('nav.pages a[aria-current="page"]');
  const nav = cur?.parentElement;
  if (cur && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2;
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", revealCurrentNav);
else revealCurrentNav();

/* Attribute names by their id in template codes. */
const ATTRIBUTES = {
  0: "Fast Casting", 1: "Illusion Magic", 2: "Domination Magic", 3: "Inspiration Magic",
  4: "Blood Magic", 5: "Death Magic", 6: "Soul Reaping", 7: "Curses",
  8: "Air Magic", 9: "Earth Magic", 10: "Fire Magic", 11: "Water Magic", 12: "Energy Storage",
  13: "Healing Prayers", 14: "Smiting Prayers", 15: "Protection Prayers", 16: "Divine Favor",
  17: "Strength", 18: "Axe Mastery", 19: "Hammer Mastery", 20: "Swordsmanship", 21: "Tactics",
  22: "Beast Mastery", 23: "Expertise", 24: "Wilderness Survival", 25: "Marksmanship",
  29: "Dagger Mastery", 30: "Deadly Arts", 31: "Shadow Arts", 32: "Communing",
  33: "Restoration Magic", 34: "Channeling Magic", 35: "Critical Strikes", 36: "Spawning Power",
  37: "Spear Mastery", 38: "Command", 39: "Motivation", 40: "Leadership",
  41: "Scythe Mastery", 42: "Wind Prayers", 43: "Earth Prayers", 44: "Mysticism",
};
const skillIcon = (id, cls = "sk-ic") => `<img class="${cls}" src="img/skills/${id}.jpg" alt="" loading="lazy" onerror="this.remove()">`;
