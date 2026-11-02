"use strict";
/* Helpers shared by every page, and lookups into the game data (game/*.js) and the site's own (data/*.js). A page
   loads only the data files it needs; a lookup into one it didn't load gives nothing. */

const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fold = s => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[“”"!]/g, "");
const cmpStr = (a, b) => String(a ?? "").localeCompare(String(b ?? ""));
const terms = input => fold(input.value).split(/\s+/).filter(Boolean);
const listText = items => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`);

/* ---------- the data ---------- */
const data = name => { try { return eval(name); } catch { return null; } };  // a data file's constant, if the page loaded it
const GROUND = data("GW_GROUND"), SKILLDATA = data("GW_SKILLS"), QUESTDATA = data("GW_QUESTS"), CREATUREDATA = data("GW_CREATURES");
const MISSIONS = data("GW_MISSIONS")?.missions || {}, HEROES = data("GW_HEROES")?.heroes || {}, TITLES = data("GW_TITLES")?.titles || {};
const LOCATIONS = GROUND?.locations || {}, REGIONS = GROUND?.regions || {}, SKILLS = SKILLDATA?.skills || {};
const QUESTS = QUESTDATA?.quests || {}, CREATURES = CREATUREDATA?.creatures || {}, NPCS = CREATUREDATA?.npcs || {};
const CALENDAR = data("GW_CALENDAR"), BUILDDATA = data("GW_BUILDS"), ALIASES = data("GW_ALIASES")?.aliases || {};
// each table's records with their id, as a list
const list = table => Object.entries(table).map(([id, r]) => Object.assign(r, { id: +id }));
for (const t of [LOCATIONS, REGIONS, SKILLS, QUESTS, CREATURES, NPCS, MISSIONS, HEROES, TITLES, data("GW_CALENDAR")?.bonuses || {}]) list(t);

const CAMPAIGNS = ["Core", "Prophecies", "Factions", "Nightfall", "Eye of the North"];
const CAMP_SHORT = ["Core", "Prof", "Fa", "NF", "EotN"];
const CAMP_COLOR = ["--accent", "--p-paragon", "--p-ritualist", "--p-elementalist", "--p-monk"];
// professions by the game's number; 0 is no profession ("Common" for skills)
const PROFS = ["None", "Warrior", "Ranger", "Monk", "Necromancer", "Mesmer", "Elementalist", "Assassin", "Ritualist", "Paragon", "Dervish"];
const PROF_ABBR = ["X", "W", "R", "Mo", "N", "Me", "E", "A", "Rt", "P", "D"];
const profVar = p => `var(--p-${(PROFS[p] || "none").toLowerCase()})`;
const profImg = p => `img/prof/${p ? PROFS[p] : "Any"}.png`;  // a hero of any profession has the "Any" picture
const profIcon = (p, cls = "qp") => (p ? `<img class="${cls}" src="img/prof/${PROFS[p]}.png" alt="${PROFS[p]}" title="${PROFS[p]}">` : "");
const ATTRIBUTES = Object.fromEntries(Object.entries(SKILLDATA?.attributes || {}).map(([k, a]) => [k, a.name]));

/* ---------- places ---------- */
// a location's kind, from the game's area type: outposts (towns too), explorables, missions, PvP
const TYPE_LABEL = { 0: "PvP", 1: "PvP", 2: "Explorable", 3: "PvP", 4: "Guild hall", 5: "Mission outpost", 6: "Mission outpost",
  7: "PvP", 8: "Elite mission", 9: "Challenge", 10: "Outpost", 11: "PvP", 12: "PvP", 13: "Outpost", 14: "Mission",
  15: "PvP", 16: "PvP", 17: "Mission", 18: "Dungeon", 19: "Outpost" };
const OUTPOST_TYPES = new Set([0, 1, 3, 4, 5, 6, 7, 10, 11, 12, 13, 15, 16, 19]);
const PVP_TYPES = new Set([0, 1, 3, 7, 11, 12, 15, 16]);
const isOutpost = l => OUTPOST_TYPES.has(l?.type);
const isPvP = l => PVP_TYPES.has(l?.type);
const regionOf = l => REGIONS[l?.region];
const campaignOf = l => regionOf(l)?.campaign;
const locName = id => LOCATIONS[id]?.name ?? MISSIONS[id]?.name ?? "";

/* ---------- where things are: npcs, quests ---------- */
const npcPlace = n => LOCATIONS[n?.location];
const npcRegion = n => REGIONS[n?.region ?? npcPlace(n)?.region];
const questGivers = q => (q.givers || []).map(i => NPCS[i]).filter(Boolean);
const questPlaces = q => [...new Set(questGivers(q).map(n => n.location).filter(Boolean))].map(i => LOCATIONS[i]);
const questRegion = q => REGIONS[q.region] || questGivers(q).map(npcRegion).find(Boolean);
const questCampaign = q => q.campaign ?? questRegion(q)?.campaign ?? 0;
let QUESTS_AT;  // location id -> the quests given there
function questsAt(id) {
  if (!QUESTS_AT) {
    QUESTS_AT = new Map();
    for (const q of Object.values(QUESTS)) for (const p of questPlaces(q)) (QUESTS_AT.get(p.id) || QUESTS_AT.set(p.id, []).get(p.id)).push(q);
  }
  return QUESTS_AT.get(+id) || [];
}
const missionCampaign = m => campaignOf(LOCATIONS[m.outpost] || LOCATIONS[m.id]);
const missionRegion = m => regionOf(LOCATIONS[m.outpost] || LOCATIONS[m.id]);

/* ---------- the wikis: a thing's page on each, {en, de}, by its title there (a picture by its file name) ---------- */
const WIKI_LANGUAGE = "en";  // the wiki links go to; another language's wiki where this one has no page
const WIKIS = { en: { name: "Guild Wars Wiki", url: "https://wiki.guildwars.com/wiki/" }, de: { name: "GuildWiki.de", url: "https://www.guildwiki.de/wiki/" } };
function wikiHref(w, file = false) {
  const lang = w?.[WIKI_LANGUAGE] ? WIKI_LANGUAGE : Object.keys(WIKIS).find(l => w?.[l]);
  if (!lang) return null;
  const title = encodeURIComponent(w[lang].replace(/ /g, "_")).replace(/%2F/g, "/").replace(/%3A/g, ":");
  return { href: WIKIS[lang].url + (file ? "Special:FilePath/" : "") + title, name: WIKIS[lang].name };
}
// a link to the thing's wiki page, "Guild Wars Wiki ↗", or nothing
const wikiLink = w => { const p = wikiHref(w); return p ? `<a href="${esc(p.href)}" target="_blank" rel="noopener">${p.name} ↗</a>` : ""; };

/* ---------- addresses: a page's settings are after ? (missions?c=1&sort=name) ---------- */
const query = o => "?" + new URLSearchParams(o);
const args = () => new URLSearchParams(location.search);
// a page that redraws from its address calls onRoute(draw): links to its own address then change it in place, and go()
// moves to one (replace: without a step back)
let routed = false;
function onRoute(f) { routed = true; addEventListener("route", f); addEventListener("popstate", f); }
function go(q, replace = false) {
  history[replace ? "replaceState" : "pushState"](null, "", q && q !== "?" ? q : location.pathname);
  dispatchEvent(new Event("route"));
}
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!routed || !a || a.target || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
  const u = new URL(a.href), path = p => p.replace(/(\.html)?$/, "").replace(/\/index$/, "/");
  if (u.origin !== location.origin || path(u.pathname) !== path(location.pathname) || u.hash) return;
  e.preventDefault();
  go(u.search || "?");
});
// an old address kept its settings after # (locations#place=146): they move to ?, and the things that now open on the
// front page (a place, a mission, a quest, a skill, a hero, a boss) go there
{
  if (/^#[\w-]+=/.test(location.hash) && !location.search) history.replaceState(null, "", location.pathname + "?" + location.hash.slice(1));
  const page = location.pathname.match(/([\w-]*?)(\.html)?$/)[1];
  const key = { locations: "place", missions: "mission", "all-quests": "quest", quests: "quest", skills: "skill", heroes: "hero", bosses: "boss" }[page];
  const id = key && args().get(key);
  if (id) location.replace("./" + query({ [key]: id }));
}
// the pages of the game's own things are on the front page: ./?place=146
const HREF = Object.fromEntries(["place", "mission", "quest", "skill", "hero", "boss", "title"].map(k => [k, id => "./" + query({ [k]: id })]));
// our own pages name what they show: builds?meta, storylines?prophecies&m=28
const buildHref = id => "builds?" + encodeURIComponent(id);
const STORYLINE = { 1: "prophecies", 2: "factions", 3: "nightfall", 4: "eotn" };  // campaign -> its storyline's name
const storylineHref = (c, more) => `storylines?${STORYLINE[c]}${more ? "&" + new URLSearchParams(more) : ""}`;
// a thing's page there: VIEWS[key] = { find(id), title(x), html(x), after(el, x) }, from place.js, mission.js and the rest
const VIEWS = {};
const skillIcon = (id, cls = "sk-ic") => `<img class="${cls}" src="img/skills/${id}.jpg" alt="" loading="lazy" onerror="this.remove()">`;
const LINK = {
  place: (id, label) => (LOCATIONS[id] ? `<a href="${HREF.place(id)}">${esc(label ?? LOCATIONS[id].name)}</a>` : esc(label ?? "")),
  mission: (id, label) => (MISSIONS[id] ? `<a href="${HREF.mission(id)}">${esc(label ?? MISSIONS[id].name)}</a>` : LINK.place(id, label)),
  quest: (id, label) => (QUESTS[id] ? `<a href="${HREF.quest(id)}">${esc(label ?? QUESTS[id].name)}</a>` : esc(label ?? "")),
  hero: (id, label) => (HEROES[id] ? `<a href="${HREF.hero(id)}">${esc(label ?? HEROES[id].name)}</a>` : esc(label ?? "")),
  boss: (id, label) => `<a href="${HREF.boss(id)}">${esc(label ?? CREATURES[id]?.name)}</a>`,
  skill: (id, icon = true, label) => {
    const s = SKILLS[id];
    return s ? `<a class="skill-link${s.elite ? " elite" : ""}" href="${HREF.skill(id)}" style="--pc:${profVar(s.profession)}">${icon ? skillIcon(id, "sk-ic sm") : ""}${esc(label ?? s.name)}</a>` : esc(label ?? "");
  },
};
// a place or mission, linked to whichever page it has
const whereLink = id => (MISSIONS[id] ? LINK.mission(id) : LINK.place(id));
const heroChip = h => `<a href="${HREF.hero(h.id)}"><img class="ip" src="${profImg(h.profession)}" alt=""> ${esc(h.name)}</a>`;

/* Hand-written text: {skill:id} (with icon), {skillname:id}, {place:id}, {mission:id}, {quest:id}, {hero:id},
   {page:href|text} and {ext:href|text}. html: the text is HTML already (the events'), not plain. */
const text = (t, html = false) => (html ? String(t ?? "") : esc(t))
  .replace(/\{skill:(\d+)\}/g, (_, i) => LINK.skill(i))
  .replace(/\{skillname:(\d+)\}/g, (_, i) => LINK.skill(i, false))
  .replace(/\{place:(\d+)\}/g, (_, i) => LINK.place(i))
  .replace(/\{mission:(\d+)\}/g, (_, i) => LINK.mission(i))
  .replace(/\{quest:(\d+)\}/g, (_, i) => LINK.quest(i))
  .replace(/\{hero:(\d+)\}/g, (_, i) => LINK.hero(i))
  .replace(/\{page:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}">${t}</a>`)
  .replace(/\{ext:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`);

/* A skill description, its <gray> parts (values at other ranks) dimmed. */
const richText = s => esc(s).replace(/&lt;gray&gt;(.*?)&lt;\/gray&gt;/g, '<span class="gray">$1</span>');

/* The abbreviations players search with ("fow", "sos"), for a thing of a kind: skills, locations, regions, ... */
const aliasText = (kind, id) => (ALIASES[kind]?.[id] || []).join(" ");

/* ---------- search boxes and highlighting ---------- */
function highlight(t, ts) {
  const html = esc(t);
  if (!ts.length) return html;
  const folded = fold(t), marks = [];
  for (const w of ts) for (let i = folded.indexOf(w); i >= 0; i = folded.indexOf(w, i + w.length)) marks.push([i, i + w.length]);
  if (!marks.length || folded.length !== t.length) return html;
  marks.sort((a, b) => a[0] - b[0]);
  let out = "", pos = 0;
  for (const [a, b] of marks) {
    if (a < pos) continue;
    out += esc(t.slice(pos, a)) + "<mark>" + esc(t.slice(a, b)) + "</mark>";
    pos = b;
  }
  return out + esc(t.slice(pos));
}
// "/" focuses the box, Escape clears it
function searchKeys(input, onChange) {
  document.addEventListener("keydown", e => {
    if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); input.focus(); input.select(); }
    else if (e.key === "Escape" && document.activeElement === input && input.value) { input.value = ""; onChange(); }
  });
}
// a row of toggle chips: a click picks one, Ctrl/Cmd/Shift-click adds to the pick
function chipToggle(el, set, onChange) {
  el.addEventListener("click", e => {
    const b = e.target.closest("[data-v]");
    if (!b) return;
    const v = b.dataset.v;
    if (e.metaKey || e.ctrlKey || e.shiftKey) set.has(v) ? set.delete(v) : set.add(v);
    else if (set.size === 1 && set.has(v)) set.clear();
    else { set.clear(); set.add(v); }
    syncChips(el, set);
    onChange();
  });
}
const syncChips = (el, set) => { for (const b of el.children) b.setAttribute("aria-pressed", set.has(b.dataset.v)); };

/* ---------- the page frame ---------- */
function headerHeight() { return document.querySelector("header.top")?.offsetHeight || 0; }
/* Keeps a sticky column header right below the sticky filter bar. */
function stickHeadBelowFilters() {
  const place = () => { $("head").style.top = headerHeight() + $("filters").offsetHeight + "px"; };
  place();
  window.addEventListener("resize", place);
}
function onReady(f) { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", f); else f(); }
onReady(() => {
  // sticky bars below the top bar read its height from --hdr-h
  const set = () => document.documentElement.style.setProperty("--hdr-h", headerHeight() + "px");
  set();
  window.addEventListener("resize", set);
  // on narrow screens the top bar's links scroll sideways: bring the current page's link into view
  const cur = document.querySelector('nav.pages a[aria-current="page"]'), nav = cur?.parentElement;
  if (cur && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2;
  // pages are linked without ".html"; an old ".html" address drops it from the address bar
  const m = location.protocol.startsWith("http") && location.pathname.match(/^(.*\/)([\w-]+)\.html$/);
  if (m) history.replaceState(history.state, "", m[1] + (m[2] === "index" ? "" : m[2]) + location.search + location.hash);
});
// a copy button: data-copy holds the text; the label says "Copied" for a moment
document.addEventListener("click", e => {
  const b = e.target.closest("[data-copy]");
  if (!b) return;
  navigator.clipboard?.writeText(b.dataset.copy).then(() => {
    const was = b.innerHTML;
    b.textContent = "Copied";
    setTimeout(() => { b.innerHTML = was; }, 1500);
  });
});

/* Every boss: a creature a mission or a place names as a boss, or one an elite is captured from, with where it is;
   made the first time it's asked for */
let BOSS;
function bossTable() {
  if (BOSS) return BOSS;
  BOSS = new Map();
  const bossOf = id => BOSS.get(id) || BOSS.set(id, Object.assign(CREATURES[id], { where: new Set(), levels: new Set(), elites: new Set(CREATURES[id].elites || []) })).get(id);
  for (const s of Object.values(SKILLS)) for (const a of s.acquisition || []) if (a.capture && CREATURES[a.capture]) {
    const b = bossOf(a.capture);
    if (s.elite) b.elites.add(s.id);
    if (a.location != null) b.where.add(a.location);
  }
  for (const l of Object.values(LOCATIONS)) for (const id of l.bosses || []) if (CREATURES[id]) bossOf(id).where.add(l.id);
  for (const m of Object.values(MISSIONS)) for (const x of m.bosses || []) if (CREATURES[x.creature]) {
    const b = bossOf(x.creature);
    b.where.add(m.id);
    if (x.level) b.levels.add(x.level[1] ? `${x.level[0]} (${x.level[1]})` : String(x.level[0]));
  }
  for (const b of BOSS.values()) {
    // without a profession of its own, a boss is taken to be of its elite's
    b.prof = b.profession || [...b.elites].map(id => SKILLS[id]?.profession).find(Boolean) || 0;
    b._elites = [...b.elites].map(id => SKILLS[id]).filter(s => s?.elite).sort((x, y) => cmpStr(x.name, y.name));
    b._where = [...b.where].filter(i => LOCATIONS[i] || MISSIONS[i]).sort((x, y) => cmpStr(locName(x), locName(y)));
    b.camps = new Set(b._where.map(i => campaignOf(LOCATIONS[i]) ?? missionCampaign(MISSIONS[i])).filter(c => c != null));
    b._k = fold([b.name, ...b._elites.map(s => s.name), ...b._where.map(locName)].join(" | "));
  }
  return BOSS;
}

/* ---------- rotations: entry k of a cycle is active from start + k * period (unix seconds) ---------- */
const ROTATIONS = Object.fromEntries((CALENDAR?.rotations || []).map(r => [r.key, r]));
const BONUSES = CALENDAR?.bonuses || {}, EVENTS = CALENDAR?.events || {};
const Rotation = {
  period(r, t = Date.now()) { return Math.floor((t / 1000 - r.start) / r.period); },
  entry(r, k) { const n = r.entries.length; return r.entries[((k % n) + n) % n]; },
  startsAt(r, k) { return (r.start + k * r.period) * 1000; },
  current(r, t = Date.now()) { return Rotation.entry(r, Rotation.period(r, t)); },
  endsAt(r, t = Date.now()) { return Rotation.startsAt(r, Rotation.period(r, t) + 1); },
};
// what a rotation entry names, as text and as a link
const entryName = e => (e.item || (e.creature && CREATURES[e.creature]?.name) || (e.quest && QUESTS[e.quest]?.name)
  || (e.bonus && BONUSES[e.bonus]?.name) || (e.mission && (MISSIONS[e.mission]?.name || locName(e.mission))) || (e.location && locName(e.location)) || e.name || "");
function entryHTML(e) {
  if (e.mission) return LINK.mission(e.mission);
  if (e.location && !e.creature && !e.item) return LINK.place(e.location);
  if (e.bonus) return `<a href="rotations${query({ bonus: e.bonus })}">${esc(entryName(e))}</a>`;
  if (e.quest) return LINK.quest(e.quest);
  if (e.item) return `${e.count} × ${e.map ? `<a href="${esc(wikiHref(e.map, true).href)}" target="_blank" rel="noopener">${esc(e.item)}</a>` : esc(e.item)}`;
  return esc(entryName(e));
}
// where an entry takes you: a bounty's place, then the region and campaign
function entryWhere(e) {
  const l = LOCATIONS[e.location || e.mission];
  if (!l) return "";
  const parts = [(e.creature || e.item) && l.name !== entryName(e) && l.name, regionOf(l)?.name, CAMPAIGNS[campaignOf(l)]].filter(Boolean);
  return ` <span class="dim">· ${parts.map(esc).join(" · ")}</span>`;
}
function timeLeft(ms) {
  const m = Math.max(0, Math.floor(ms / 60000)), d = Math.floor(m / 1440), h = Math.floor((m % 1440) / 60), mm = m % 60;
  return d ? `${d}d ${h}h` : h ? `${h}h ${mm}m` : `${mm}m`;
}
/* Compact "label · current · time left" rows; a null row draws the daily/weekly divider. */
function rotationListHTML(rows, now = Date.now()) {
  return rows.map(row => {
    if (!row) return '<div class="t-sep"></div>';
    const [key, title] = row, r = ROTATIONS[key], k = Rotation.period(r, now);
    return `<div class="t-row"><span class="t-k">${title}</span><span class="t-v">${entryHTML(Rotation.entry(r, k))}${entryWhere(Rotation.entry(r, k))}</span>`
      + `<span class="t-l">${timeLeft(Rotation.endsAt(r, now) - now)}</span><span class="t-n">then: ${entryHTML(Rotation.entry(r, k + 1))}</span></div>`;
  }).join("");
}

/* ---------- yearly events: the running or next window, [start, end, collectors leave] ---------- */
function eventWindow(e, now = new Date()) {
  const at = (y, [m, d, t]) => new Date(Date.UTC(y, m - 1, d, ...t.split(":").map(Number)));
  const later = (y, md) => at(md[0] < e.start[0] ? y + 1 : y, md);
  for (let y = now.getUTCFullYear() - 1; ; y++) {
    const w = [at(y, e.start), later(y, e.end), e.stay && later(y, e.stay)];
    if (now < w[1]) return w;
  }
}
// "in 20 days", "in 2 months"
function eventAway(ms) {
  const h = ms / 3600000, d = h / 24, n = (v, u) => `${v} ${u}${v === 1 ? "" : "s"}`;
  if (h < 1) return `in ${n(Math.max(1, Math.round(ms / 60000)), "minute")}`;
  if (h < 24) return `in ${n(Math.round(h), "hour")}`;
  if (d < 45) return `in ${n(Math.round(d), "day")}`;
  return `in ${n(Math.round(d / 30.4), "month")}`;
}

/* ---------- skills and builds ---------- */
const FRACTIONS = { 0.25: "¼", 0.5: "½", 0.75: "¾", 1.5: "1½" };
const secs = v => (v ? FRACTIONS[v] ?? String(v) : "");
/* Skill type filter: "All attacks" / "All spells" / "All rituals" groups, then every type (the wiki's label) the
   given skills have. */
const TYPE_GROUPS = [["~Attack", "All attacks", /Attack/], ["~Spell", "All spells", /Spell|Hex|Enchantment/], ["~Ritual", "All rituals", /Ritual/]];
function typeOptionsHTML(skills, { groups: withGroups = true, any = "Any type" } = {}) {
  const types = [...new Set(skills.map(s => s.label).filter(Boolean))].sort();
  const groups = withGroups ? TYPE_GROUPS.filter(([, , re]) => types.some(t => re.test(t))) : [];
  return `<option value="">${any}</option>` + groups.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")
    + (groups.length ? `<option disabled>──────────</option>` : "") + types.map(t => `<option>${esc(t)}</option>`).join("");
}
const typeMatches = (s, type) => !type || (type.startsWith("~") ? TYPE_GROUPS.find(g => g[0] === type)[2].test(s.label || "") : s.label === type);

/* A bar's attributes, highest first: by the total with runes ("12+3+1" counts 16), then by base rank */
const runeBonus = r => String(r || "").split("+").reduce((s, x) => s + (+x || 0), 0);
const byRank = (attrs, runes = {}) => [...attrs].sort((a, b) =>
  (b.rank + runeBonus(runes[b.id])) - (a.rank + runeBonus(runes[a.id])) || b.rank - a.rank);
/* A build's link into the builder, with its runes and headgear as attribute bonuses (?code=…&bonus=13:4,15:1) */
function builderHref(b) {
  const bonus = Object.entries(b.runes || {}).map(([id, r]) => [id, runeBonus(r)]).filter(([, v]) => v).map(([id, v]) => `${id}:${v}`).join(",");
  return "builder?" + new URLSearchParams(bonus ? { code: b.code, bonus } : { code: b.code }).toString().replace(/%3A/g, ":").replace(/%2C/g, ",");
}
const BUILDS = new Map((BUILDDATA?.builds || []).map(b => [b.id, b]));
// the builds suggested for each hero (the "heroes" of each build on the Builds page)
const HERO_BUILDS = new Map();
for (const b of BUILDS.values()) for (const id of b.heroes || []) (HERO_BUILDS.get(id) || HERO_BUILDS.set(id, []).get(id)).push(b);
// a bar's skill icons: the whole bar opens in the builder; the code can also be copied straight away
function barIcons(code) {
  let skills = [];
  try { skills = TemplateCode.decode(code).skills; } catch { /* an unreadable code shows no icons */ }
  return skills.map(id => (id ? `<img src="img/skills/${id}.jpg" alt="" loading="lazy">` : '<i class="hb-none">?</i>')).join("");
}
const COPY_ICON = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
const profName = h => (h.profession ? PROFS[h.profession] : "Any");
// how to recruit a hero, each step linked to its quest's or mission's page
function recruitHTML(h) {
  let t = esc(h.recruit);
  for (const st of h.recruit_steps || []) {
    const name = st.quest ? QUESTS[st.quest]?.name : locName(st.mission);
    if (name) t = t.replace(esc(name), st.quest ? LINK.quest(st.quest) : whereLink(st.mission));
  }
  return t;
}
