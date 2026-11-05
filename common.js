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
const AREAS = GROUND?.areas || {}, REGIONS = GROUND?.regions || {}, SKILLS = SKILLDATA?.skills || {};
const QUESTS = QUESTDATA?.quests || {}, CREATURES = CREATUREDATA?.creatures || {}, NPCS = CREATUREDATA?.npcs || {};
const CALENDAR = data("GW_CALENDAR"), BUILDDATA = data("GW_BUILDS"), ALIASES = data("GW_ALIASES")?.aliases || {};
// each table's records with their id, as a list
const list = table => Object.entries(table).map(([id, r]) => Object.assign(r, { id: +id }));
for (const t of [AREAS, REGIONS, SKILLS, QUESTS, CREATURES, NPCS, MISSIONS, HEROES, TITLES, data("GW_CALENDAR")?.bonuses || {}]) list(t);

const CAMPAIGNS = ["Core", "Prophecies", "Factions", "Nightfall", "Eye of the North"];
// any campaign's name, the game's others too (the Bonus Mission Pack, the unknown one of the dev areas)
const campaignName = c => CAMPAIGNS[c] ?? GROUND?.campaigns?.[c]?.name ?? "";
const CAMP_SHORT = ["Core", "Prof", "Fa", "NF", "EotN"];
const CAMP_COLOR = ["--accent", "--p-paragon", "--p-ritualist", "--p-elementalist", "--p-monk"];
// professions by the game's number; 0 is no profession ("Common" for skills)
const PROFS = ["None", "Warrior", "Ranger", "Monk", "Necromancer", "Mesmer", "Elementalist", "Assassin", "Ritualist", "Paragon", "Dervish"];
const PROF_ABBR = ["X", "W", "R", "Mo", "N", "Me", "E", "A", "Rt", "P", "D"];
const profVar = p => `var(--p-${(PROFS[p] || "none").toLowerCase()})`;
const profImg = p => `img/prof/${p ? PROFS[p] : "Any"}.png`;  // a hero of any profession has the "Any" picture
const profIcon = (p, cls = "qp") => (p ? `<img class="${cls}" src="img/prof/${PROFS[p]}.png" alt="${PROFS[p]}" title="${PROFS[p]}">` : "");
const ATTRIBUTES = Object.fromEntries(Object.entries(SKILLDATA?.attributes || {}).map(([k, a]) => [k, a.name]));

/* ---------- areas ---------- */
// an area's kind: the game's own name for its area type (Outpost, City, Mission outpost, Challenge, ...)
const TYPE_LABEL = Object.fromEntries(Object.entries(GROUND?.types || {}).map(([t, x]) => [t, x.name[0].toUpperCase() + x.name.slice(1)]));
// the areas you stand in between fights: towns, and the areas a mission starts from, which in the game are the same
// area as the mission (mission outposts 5, elite missions 8, challenges 9)
const OUTPOST_TYPES = new Set([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 19]);
const PVP_TYPES = new Set([0, 1, 3, 7, 11, 12, 15, 16]);
const isOutpost = l => OUTPOST_TYPES.has(l?.type);
// (a PvP event with no game area of its own, e.g. the Snowball Tournament, counts as PvP too)
const isPvP = l => PVP_TYPES.has(l?.type) || (!!l && l.type == null && MISSIONS[l.id]?.kind === "pvp");
// an area's colour group: towns and mission outposts (out), mission areas and explorables (exp), dungeons, PvP
const areaGroup = l => (isPvP(l) ? "pvp" : l?.type === 18 ? "dgn" : isOutpost(l) ? "out" : "exp");
// a dungeon (not one of its later levels, nor a quest area the game also counts as a dungeon); with data/depths.js
// loaded, the ones it lists count too
const isDungeon = l => l?.type === 18 && !!(data("GW_DEPTHS")?.dungeons?.[l.id] || l.exits?.length && !/: Level \d+$/.test(l.name));
const regionOf = l => REGIONS[l?.region];
// an area's campaign: the game's own for it (ours, 100000 and up, have their region's)
const campaignOf = l => l?.campaign ?? regionOf(l)?.campaign;
const areaName = id => AREAS[id]?.name ?? MISSIONS[id]?.name ?? "";

/* ---------- where things are: npcs, quests ---------- */
const npcArea = n => AREAS[n?.area];
const npcRegion = n => REGIONS[n?.region ?? npcArea(n)?.region];
const questGivers = q => (q.givers || []).map(i => NPCS[i]).filter(Boolean);
const questAreas = q => [...new Set(questGivers(q).map(n => n.area).filter(Boolean))].map(i => AREAS[i]);
const questRegion = q => REGIONS[q.region] || questGivers(q).map(npcRegion).find(Boolean);
// a quest's campaign: its own, else its giver's area's, else its giver's region's (an NPC known only by region)
const questCampaign = q => q.campaign ?? questAreas(q)[0]?.campaign ?? questRegion(q)?.campaign ?? 0;
let QUESTS_AT;  // area id -> the quests given there
function questsAt(id) {
  if (!QUESTS_AT) {
    QUESTS_AT = new Map();
    for (const q of Object.values(QUESTS)) for (const p of questAreas(q)) (QUESTS_AT.get(p.id) || QUESTS_AT.set(p.id, []).get(p.id)).push(q);
  }
  return QUESTS_AT.get(+id) || [];
}
const missionCampaign = m => campaignOf(AREAS[m.outpost] || AREAS[m.id]);
const missionRegion = m => regionOf(AREAS[m.outpost] || AREAS[m.id]);

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
// an old address kept its settings after # (missions#mission=28): they move to ?, and the things that now open on the
// front page (a mission, a quest, a skill, a hero, a boss) go there
{
  if (/^#[\w-]+=/.test(location.hash) && !location.search) history.replaceState(null, "", location.pathname + "?" + location.hash.slice(1));
  const page = location.pathname.match(/([\w-]*?)(\.html)?$/)[1];
  const key = { missions: "mission", "all-quests": "quest", quests: "quest", skills: "skill", heroes: "hero", bosses: "boss" }[page];
  const id = key && args().get(key);
  if (id) location.replace("./" + query({ [key]: id }));
}
// the pages of the game's own things are on the front page: ./?area=146
const HREF = Object.fromEntries(["area", "mission", "dungeon", "quest", "skill", "hero", "boss", "title"].map(k => [k, id => "./" + query({ [k]: id })]));
// a dungeon is a page of its own, not an area (but not its later levels, nor the quest areas the game types as dungeons)
{ const area = HREF.area; HREF.area = id => (isDungeon(AREAS[id]) ? HREF.dungeon(id) : area(id)); }
// our own pages name what they show: builds?meta, storylines?prophecies&m=28
const buildHref = id => "builds?" + encodeURIComponent(id);
const STORYLINE = { 1: "prophecies", 2: "factions", 3: "nightfall", 4: "eotn" };  // campaign -> its storyline's name
const storylineHref = (c, more) => `storylines?${STORYLINE[c]}${more ? "&" + new URLSearchParams(more) : ""}`;
// a thing's page there: VIEWS[key] = { find(id), title(x), html(x), after(el, x) }, from area.js, mission.js and the rest
const VIEWS = {};
const skillIcon = (id, cls = "sk-ic") => `<img class="${cls}" src="img/skills/${id}.jpg" alt="" loading="lazy" onerror="this.remove()">`;
const LINK = {
  area: (id, label) => (AREAS[id] ? `<a href="${HREF.area(id)}">${esc(label ?? AREAS[id].name)}</a>` : esc(label ?? "")),
  mission: (id, label) => (MISSIONS[id] ? `<a href="${HREF.mission(id)}">${esc(label ?? MISSIONS[id].name)}</a>` : LINK.area(id, label)),
  quest: (id, label) => (QUESTS[id] ? `<a href="${HREF.quest(id)}">${esc(label ?? QUESTS[id].name)}</a>` : esc(label ?? "")),
  hero: (id, label) => (HEROES[id] ? `<a href="${HREF.hero(id)}">${esc(label ?? HEROES[id].name)}</a>` : esc(label ?? "")),
  boss: (id, label) => `<a href="${HREF.boss(id)}">${esc(label ?? CREATURES[id]?.name)}</a>`,
  skill: (id, icon = true, label) => {
    const s = SKILLS[id];
    return s ? `<a class="skill-link${s.elite ? " elite" : ""}" href="${HREF.skill(id)}" style="--pc:${profVar(s.profession)}">${icon ? skillIcon(id, "sk-ic sm") : ""}${esc(label ?? s.name)}</a>` : esc(label ?? "");
  },
};
// an area or mission, linked to whichever page it has
const whereLink = id => (MISSIONS[id] ? LINK.mission(id) : LINK.area(id));
const heroChip = h => `<a href="${HREF.hero(h.id)}"><img class="ip" src="${profImg(h.profession)}" alt=""> ${esc(h.name)}</a>`;

/* Hand-written text: {skill:id} (with icon), {skillname:id}, {area:id}, {mission:id}, {quest:id}, {hero:id},
   {page:href|text} and {ext:href|text}. html: the text is HTML already (the events'), not plain. */
const text = (t, html = false) => (html ? String(t ?? "") : esc(t))
  .replace(/\{skill:(\d+)\}/g, (_, i) => LINK.skill(i))
  .replace(/\{skillname:(\d+)\}/g, (_, i) => LINK.skill(i, false))
  .replace(/\{area:(\d+)\}/g, (_, i) => LINK.area(i))
  .replace(/\{mission:(\d+)\}/g, (_, i) => LINK.mission(i))
  .replace(/\{quest:(\d+)\}/g, (_, i) => LINK.quest(i))
  .replace(/\{hero:(\d+)\}/g, (_, i) => LINK.hero(i))
  .replace(/\{page:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}">${t}</a>`)
  .replace(/\{ext:([^|}]+)\|([^}]+)\}/g, (_, href, t) => `<a href="${href}" target="_blank" rel="noopener">${t}</a>`);

/* A skill description, its <gray> parts (values at other ranks) dimmed. */
const richText = s => esc(s).replace(/&lt;gray&gt;(.*?)&lt;\/gray&gt;/g, '<span class="gray">$1</span>');

/* The abbreviations players search with ("fow", "sos"), for a thing of a kind: skills, areas, regions, ... */
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
  const area = () => { $("head").style.top = headerHeight() + $("filters").offsetHeight + "px"; };
  area();
  window.addEventListener("resize", area);
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

/* Every boss: a creature a mission or an area names as a boss, or one an elite is captured from, with where it is;
   made the first time it's asked for */
let BOSS;
function bossTable() {
  if (BOSS) return BOSS;
  BOSS = new Map();
  const bossOf = id => BOSS.get(id) || BOSS.set(id, Object.assign(CREATURES[id], { where: new Set(), levels: new Set(), elites: new Set(CREATURES[id].elites || []) })).get(id);
  for (const s of Object.values(SKILLS)) for (const a of s.acquisition || []) if (a.capture && CREATURES[a.capture]) {
    const b = bossOf(a.capture);
    if (s.elite) b.elites.add(s.id);
    if (a.area != null) b.where.add(a.area);
  }
  for (const l of Object.values(AREAS)) for (const id of l.bosses || []) if (CREATURES[id]) bossOf(id).where.add(l.id);
  for (const m of Object.values(MISSIONS)) for (const x of m.bosses || []) if (CREATURES[x.creature]) {
    const b = bossOf(x.creature);
    b.where.add(m.id);
    if (x.level) b.levels.add(x.level[1] ? `${x.level[0]} (${x.level[1]})` : String(x.level[0]));
  }
  for (const b of BOSS.values()) {
    // without a profession of its own, a boss is taken to be of its elite's
    b.prof = b.profession || [...b.elites].map(id => SKILLS[id]?.profession).find(Boolean) || 0;
    b._elites = [...b.elites].map(id => SKILLS[id]).filter(s => s?.elite).sort((x, y) => cmpStr(x.name, y.name));
    b._where = [...b.where].filter(i => AREAS[i] || MISSIONS[i]).sort((x, y) => cmpStr(areaName(x), areaName(y)));
    b.camps = new Set(b._where.map(i => campaignOf(AREAS[i]) ?? missionCampaign(MISSIONS[i])).filter(c => c != null));
    b._k = fold([b.name, ...b._elites.map(s => s.name), ...b._where.map(areaName)].join(" | "));
  }
  return BOSS;
}

/* ---------- rotations: entry k of a cycle is active from start + k * period (unix seconds) ---------- */
const ROTATIONS = Object.fromEntries((CALENDAR?.rotations || []).map(r => [r.key, r]));
const BONUSES = CALENDAR?.bonuses || {}, EVENTS = CALENDAR?.events || {};
// our own write-up of the bonuses and events (what they do, tips, what not to miss) from data/calendar.js, where loaded
for (const [part, all] of [["bonuses", BONUSES], ["events", EVENTS]])
  for (const [i, n] of Object.entries(data("GW_CALENDAR_NOTES")?.[part] || {})) Object.assign(all[i] || {}, n);
// Nicholas the Traveler's weeks get their spot and starting outposts (at, from) from our own data/nicholas.js, where loaded
for (const [i, s] of Object.entries(data("GW_NICHOLAS")?.spots || {})) Object.assign(ROTATIONS["nicholas-traveler"]?.entries[i] || {}, s);
const Rotation = {
  period(r, t = Date.now()) { return Math.floor((t / 1000 - r.start) / r.period); },
  entry(r, k) { const n = r.entries.length; return r.entries[((k % n) + n) % n]; },
  startsAt(r, k) { return (r.start + k * r.period) * 1000; },
  current(r, t = Date.now()) { return Rotation.entry(r, Rotation.period(r, t)); },
  endsAt(r, t = Date.now()) { return Rotation.startsAt(r, Rotation.period(r, t) + 1); },
};
// what a rotation entry names, as text and as a link
const entryName = e => (e.item || (e.creature && CREATURES[e.creature]?.name) || (e.quest && QUESTS[e.quest]?.name)
  || (e.bonus && BONUSES[e.bonus]?.name) || (e.mission && (MISSIONS[e.mission]?.name || areaName(e.mission))) || (e.area && areaName(e.area)) || e.name || "");
function entryHTML(e) {
  if (e.mission) return LINK.mission(e.mission);
  if (e.area && !e.creature && !e.item) return LINK.area(e.area);
  if (e.bonus) return `<a href="rotations${query({ bonus: e.bonus })}">${esc(entryName(e))}</a>`;
  if (e.quest) return LINK.quest(e.quest);
  // Nicholas the Traveler's item: his map that week, at the foot of the Rotations page
  if (e.item) return `${e.count} × ${e.at ? `<a href="rotations${query({ nick: ROTATIONS["nicholas-traveler"].entries.indexOf(e) })}">${esc(e.item)}</a>` : esc(e.item)}`;
  return esc(entryName(e));
}
// where an entry takes you: a bounty's area, then the region and campaign
function entryWhere(e) {
  const l = AREAS[e.area || e.mission];
  if (!l) return "";
  const parts = [(e.creature || e.item) && l.name !== entryName(e) && l.name, regionOf(l)?.name, CAMPAIGNS[campaignOf(l)]].filter(Boolean);
  return ` <span class="dim">· ${parts.map(esc).join(" · ")}</span>`;
}
// the next Zaishen Bounty at an area: {days} from today (0: today), or null
function bountyAt(id, now = Date.now()) {
  const r = ROTATIONS["zaishen-bounty"], n = r?.entries.length, k0 = n && Rotation.period(r, now);
  for (let k = k0; n && k < k0 + n; k++) if (Rotation.entry(r, k).area === id) return { days: k - k0, entry: Rotation.entry(r, k), every: n };
  return null;
}
const inDays = d => (d === 0 ? "today" : d === 1 ? "tomorrow" : `in ${d} days`);
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
    const name = st.quest ? QUESTS[st.quest]?.name : areaName(st.mission);
    if (name) t = t.replace(esc(name), st.quest ? LINK.quest(st.quest) : whereLink(st.mission));
  }
  return t;
}

/* ---------- the visitor's progress, per character, kept in this browser only (the User page backs it up) ----------
   {v: 1, chars: [{id, name, elites: [skill ids captured], missions: {<id>: done}, dungeons: {<id>: done}}]}, done 1 normal
   mode, 2 hard mode, 3 both; what isn't done isn't listed. Everything is by the game's own ids, so it outlasts the site's
   updates, and ids the site doesn't know are kept. Which character is shown (its id) is kept apart, as it's no progress. */
const USER_KEY = "gw-user", USER_CHAR_KEY = "gw-user-char";
const USER_KEYS = ["id", "name", "elites", "missions", "dungeons"];
const newUserChar = id => ({ id, name: `Char${id}`, elites: [], missions: {}, dungeons: {} });
// what's wrong with an object as progress, or "" when it's fine
function userCheck(o) {
  const isObj = x => x && typeof x === "object" && !Array.isArray(x), isId = x => Number.isInteger(x) && x > 0;
  if (!isObj(o)) return "It isn't an object: it should start with {.";
  if (o.v !== 1) return 'It needs "v": 1.';
  const extra = Object.keys(o).find(k => !["v", "chars"].includes(k));
  if (extra) return `Unknown key "${extra}".`;
  if (!Array.isArray(o.chars) || !o.chars.length) return 'It needs "chars": a list of at least one character.';
  for (const [i, c] of o.chars.entries()) {
    const at = `Character ${i + 1}`;
    if (!isObj(c)) return `${at} isn't an object.`;
    const k = Object.keys(c).find(k => !USER_KEYS.includes(k));
    if (k) return `${at}: unknown key "${k}".`;
    if (!isId(c.id)) return `${at}: "id" should be a whole number above 0.`;
    if (o.chars.findIndex(x => x?.id === c.id) !== i) return `${at}: id ${c.id} is used twice.`;
    if (typeof c.name !== "string" || !c.name.trim() || c.name.length > 40) return `${at}: "name" should be 1 to 40 characters.`;
    if (!Array.isArray(c.elites) || !c.elites.every(isId) || new Set(c.elites).size !== c.elites.length) return `${at}: "elites" should be a list of skill ids, each once.`;
    for (const part of ["missions", "dungeons"])
      if (!isObj(c[part]) || !Object.entries(c[part]).every(([id, v]) => /^[1-9]\d*$/.test(id) && [1, 2, 3].includes(v))) return `${at}: "${part}" should map ids to 1 (NM), 2 (HM) or 3 (both).`;
  }
  return "";
}
const userRaw = () => { try { return `${localStorage.getItem(USER_KEY)}|${localStorage.getItem(USER_CHAR_KEY)}`; } catch { return ""; } };
let userSeen = userRaw();  // what this page last drew from
const User = {
  // what's kept, as text: null when nothing is
  stored() { try { return localStorage.getItem(USER_KEY); } catch { return null; } },
  // kept progress that can't be read (broken, or by a newer site): the pages go without it, and nothing writes over it
  // but the User page's reset, once it's been copied
  broken() { const t = User.stored(); if (t == null) return false; try { return !!userCheck(JSON.parse(t)); } catch { return true; } },
  data() {
    if (!User.broken()) try { const o = JSON.parse(User.stored()); if (o) return o; } catch { /* none yet */ }
    return { v: 1, chars: [newUserChar(1)] };
  },
  save(o) {
    if (User.broken()) return false;
    try { localStorage.setItem(USER_KEY, JSON.stringify(o)); } catch { /* storage blocked */ }
    userSeen = userRaw();
    return true;
  },
  // the User page's way out of broken progress: all of it gone, a fresh start
  reset() { try { localStorage.removeItem(USER_KEY); localStorage.removeItem(USER_CHAR_KEY); } catch { /* storage blocked */ } userSeen = userRaw(); },
  // the character shown: the one picked on the User page, else the first
  char(o = User.data()) {
    let id = null; try { id = +localStorage.getItem(USER_CHAR_KEY); } catch { /* storage blocked */ }
    return o.chars.find(c => c.id === id) || o.chars[0];
  },
  pick(id) { try { localStorage.setItem(USER_CHAR_KEY, id); } catch { /* storage blocked */ } userSeen = userRaw(); },
  captured(id) { return User.char().elites.includes(+id); },
  done(part, id) { return User.char()[part][id] || 0; },
  // change the shown character's progress
  change(f) { const o = User.data(); f(User.char(o)); User.save(o); },
  setCaptured(id, on) { User.change(c => { c.elites = c.elites.filter(x => x !== +id); if (on) c.elites.push(+id); c.elites.sort((a, b) => a - b); }); },
  setDone(part, id, v) { User.change(c => { if (v) c[part][id] = v; else delete c[part][id]; }); },
  // many at once, saved once
  setCapturedMany(ids, on) {
    User.change(c => { const s = new Set(c.elites); for (const id of ids) if (on) s.add(+id); else s.delete(+id); c.elites = [...s].sort((a, b) => a - b); });
  },
};
// back on a tab after the progress or the character changed in another: its ticks show the new state, and a page that
// lists by progress draws again (on "userchange")
addEventListener("focus", () => {
  if (userRaw() === userSeen) return;
  userSeen = userRaw();
  const c = User.char();
  for (const b of document.querySelectorAll(".utick[data-elite]")) b.setAttribute("aria-pressed", c.elites.includes(+b.dataset.elite));
  for (const g of document.querySelectorAll(".uticks")) for (const b of g.querySelectorAll(".utick")) b.setAttribute("aria-pressed", !!((c[g.dataset.part][g.dataset.id] || 0) & +b.dataset.mode));
  dispatchEvent(new Event("userchange"));
});
// the ticks: an elite captured, a mission or dungeon done in normal and hard mode
// (a list passes what it knows already: reading the progress for each row is slow)
const eliteTick = (id, on = User.captured(id), label = "") => `<button type="button" class="utick${label ? "" : " ck"}" data-elite="${id}" aria-pressed="${on}" title="Captured">${label ? `<span class="ubox"></span>${label}` : "✓"}</button>`;
// the missions with normal and hard mode to tick (not challenge, competitive or PvP ones)
const hasModes = m => m?.kind === "story" || m?.kind === "elite";
// the progress kept for them (a tick from before a kind lost its modes is kept, not counted)
const modeProgress = (c, part) => Object.entries(c[part]).filter(([id]) => part !== "missions" || hasModes(MISSIONS[id])).map(([, v]) => v);
// the done filter: "1" not done in NM, "2" not done in HM, "a" not done in one of them or both
const missing = (v = 0, mode) => (mode === "a" ? (v & 3) !== 3 : !(v & +mode));
const doneTicks = (part, id, v = User.done(part, id), label = "") => { return `<span class="uticks" data-part="${part}" data-id="${id}">${label ? `<span class="ulabel">${label}</span>` : ""}${[[1, "NM", "Normal mode"], [2, "HM", "Hard mode"]].map(([b, l, t]) =>
  `<button type="button" class="utick" data-mode="${b}" aria-pressed="${!!(v & b)}" title="Done in ${t}">${l}</button>`).join("")}</span>`; };
// a tick column's title: on hover (or focus), Check all and Uncheck all (for NM and HM each, where it has both), for
// the ticks in the rows shown (the list named by its data-bulk-list), after an are-you-sure
const bulkMenu = (list, modes = false) => ` <span class="bulk-menu" data-bulk-list="${list}">${(modes
  ? [[1, 1, "Check all NM"], [1, 2, "Check all HM"], [0, 1, "Uncheck all NM"], [0, 2, "Uncheck all HM"]]
  : [[1, 0, "Check all"], [0, 0, "Uncheck all"]]).map(([on, m, label]) => `<button type="button" data-bulk="${on}"${m ? ` data-mode="${m}"` : ""}>${label}</button>`).join("")}</span>`;
for (const s of document.querySelectorAll(".bulk-slot")) s.outerHTML = bulkMenu(s.dataset.list, s.dataset.modes === "1");
document.addEventListener("click", e => {
  const b = e.target.closest("[data-bulk]");
  if (!b) return;
  e.preventDefault(); e.stopPropagation();
  const list = document.querySelector(b.closest("[data-bulk-list]").dataset.bulkList), on = b.dataset.bulk === "1";
  if (User.broken()) { if (confirm("Your saved progress can't be read, so it can't be changed here. Open the User page to see it?")) location.href = "user"; return; }
  const elites = [...new Set([...list.querySelectorAll(".utick[data-elite]")].map(x => x.dataset.elite))];
  const done = [...list.querySelectorAll(".uticks[data-part]")].map(g => [g.dataset.part, g.dataset.id]);
  const n = elites.length + done.length, who = User.char().name, m = +b.dataset.mode || 0, mode = ["", "NM", "HM"][m];
  if (!n) return;
  const many = (k, w) => `${k} ${w}${k === 1 ? "" : "s"}`;
  const what = elites.length ? `${many(elites.length, "elite")} as captured` : `${many(done.length, done[0][0] === "dungeons" ? "dungeon" : "mission")} as done in ${mode}`;
  if (!confirm(on ? `Mark the ${what}, all shown, for ${who}?` : `Clear the ${mode ? `${mode} ` : ""}ticks of all ${n} shown for ${who}?`)) return;
  if (elites.length) User.setCapturedMany(elites, on);
  // NM and HM are bits of one number: set or clear the one asked for, keep the other
  if (done.length) User.change(c => { for (const [part, id] of done) { const v = on ? (c[part][id] || 0) | m : (c[part][id] || 0) & ~m; if (v) c[part][id] = v; else delete c[part][id]; } });
  b.blur();
  dispatchEvent(new Event("userchange"));
}, true);
// a tick is clicked: before the row it may sit in (a link, or a row that opens) sees the click
document.addEventListener("click", e => {
  const b = e.target.closest(".utick");
  if (!b) return;
  e.preventDefault(); e.stopPropagation();
  if (User.broken()) { if (confirm("Your saved progress can't be read, so it can't be changed here. Open the User page to see it?")) location.href = "user"; return; }
  const on = b.getAttribute("aria-pressed") !== "true";
  if (b.dataset.elite) {
    User.setCaptured(b.dataset.elite, on);
    for (const x of document.querySelectorAll(`.utick[data-elite="${b.dataset.elite}"]`)) x.setAttribute("aria-pressed", on);
  } else {
    const g = b.parentElement, v = User.done(g.dataset.part, g.dataset.id) ^ +b.dataset.mode;
    User.setDone(g.dataset.part, g.dataset.id, v);
    b.setAttribute("aria-pressed", on);
  }
  // a list filtered by progress draws again, so a row the tick takes out of it goes
  dispatchEvent(new Event("userchange"));
}, true);
