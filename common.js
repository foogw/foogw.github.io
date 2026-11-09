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
  const key = { missions: "mission", quests: "quest", skills: "skill", heroes: "hero", bosses: "boss" }[page];
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
    // (an icon button: lit for a moment instead)
    if (b.classList.contains("bd-copyp")) { b.classList.add("copied"); setTimeout(() => b.classList.remove("copied"), 1500); return; }
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
// the marks and notes of what the picked character has left to do show only once it has a name of its own (not the
// default Char<id>), as the top bar names it (header.js): before that, nothing says whose they'd be
const userNamed = () => { if (User.stored() == null || User.broken()) return false; const c = User.char(); return !!c?.name.trim() && c.name !== `Char${c.id}`; };
// the dungeons ticked done: the Eye of the North's (Secret Lair of the Snowmen too; not Destruction's Depths, a mission,
// nor the Piken Square ones)
const isTickedDungeon = id => USER_ALL_V3.dungeons.includes(+id);
// a mission or dungeon ("missions" or "dungeons") the picked character hasn't completed: † in normal mode, ‡ in hard mode
function modeMarks(part, id) {
  if (!(part === "missions" ? hasModes(MISSIONS[id]) : isTickedDungeon(id)) || !userNamed()) return "";
  // (a dungeon by its name: its marks are on a bounty, named for its boss)
  const c = User.char(), d = User.done(part, id), what = part === "missions" ? "this mission" : esc(areaName(id));
  return [[1, "†", "NM"], [2, "‡", "HM"]].filter(([b]) => !(d & b))
    .map(([, m, mode]) => `<sup class="u-miss" tabindex="0" data-tip="${esc(c.name)} hasn't completed ${what} in ${mode}" aria-label="${esc(c.name)} hasn't completed ${what} in ${mode}">${m}</sup>`).join("");
}
const missionMarks = id => modeMarks("missions", id);
// an area with foes to vanquish the picked character hasn't vanquished: §
function vanqMark(id) {
  if (!AREAS[id]?.foes || !userNamed() || User.vanquished(id)) return "";
  const tip = `${esc(User.char().name)} hasn't vanquished this area yet`;
  return `<sup class="u-miss" tabindex="0" data-tip="${tip}" aria-label="${tip}">§</sup>`;
}
// the same as a sentence, for the mission's, the dungeon's or the area's page ("" when done, or no progress is kept):
// what's left to do, "mission:<id>", "dungeon:<id>" or "vanq:<id>"; leftNote gives it in a span that follows the page's ticks, its list item hidden while it
// says nothing
const LEFT = {
  mission: id => hasModes(MISSIONS[id]),
  dungeon: isTickedDungeon,
  vanq: id => !!AREAS[id]?.foes,
};
function leftText(key) {
  const [kind, id] = key.split(":");
  if (!LEFT[kind]?.(id) || !userNamed()) return "";
  const who = `<b>${esc(User.char().name)}</b>`;
  if (kind === "vanq") return User.vanquished(id) ? "" : `${who} hasn't vanquished this area yet.`;
  const d = User.done(kind + "s", id), left = [[1, "normal"], [2, "hard"]].filter(([b]) => !(d & b)).map(([, m]) => m);
  return left.length ? `${who} hasn't completed this ${kind} in ${left.join(" or ")} mode.` : "";
}
const leftNote = key => (LEFT[key.split(":")[0]]?.(key.split(":")[1]) && userNamed() ? `<span data-left-note="${key}">${leftText(key)}</span>` : "");
// a list item that says nothing (yet) is hidden
const noteLi = n => `<li${/^<span data-left-note="[\w:]+"><\/span>$/.test(n) ? " hidden" : ""}>${n}</li>`;
// [data-tip]: its text in a tooltip at once, above it (below near the top of the window), on hover or keyboard focus
{
  let tip = null;
  const show = el => {
    tip ??= Object.assign(document.createElement("div"), { className: "tip", role: "tooltip" });
    if (!tip.isConnected) document.body.append(tip);
    tip.textContent = el.dataset.tip; tip.hidden = false;
    const r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = `${Math.max(4, Math.min(innerWidth - w - 4, r.left + r.width / 2 - w / 2))}px`;
    tip.style.top = `${r.top - h - 6 < 4 ? r.bottom + 6 : r.top - h - 6}px`;
  };
  const hide = () => { if (tip) tip.hidden = true; };
  for (const [on, off] of [["mouseover", "mouseout"], ["focusin", "focusout"]]) {
    addEventListener(on, e => { const el = e.target.closest?.("[data-tip]"); if (el) show(el); });
    addEventListener(off, e => { if (e.target.closest?.("[data-tip]")) hide(); });
  }
  addEventListener("scroll", hide, true);
}
addEventListener("userchange", () => {
  for (const s of document.querySelectorAll("[data-left-note]")) {
    s.innerHTML = leftText(s.dataset.leftNote);
    if (s.parentElement.tagName === "LI") s.parentElement.hidden = !s.innerHTML;
  }
});
// the weekly PvE bonuses that double a title's points, and those titles (Faction Support: Luxon's only, the one
// farmed; not Extra Luck's); the titles the picked character, or its account, hasn't maxed, said of a bonus
// (titleKept, mytitles.js)
const BONUS_TITLES = { 2: [17, 20], 5: [38, 39, 40, 41], 8: [6] };
const andList = xs => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);
// an account as a sentence names it: Account "Main" (one with no name of its own: Account 2)
const acctSaid = (o, c) => { const a = o.accounts.find(x => x.id === c.account); return a?.name ? `Account "${a.name}"` : `Account ${c.account}`; };
// (only the character's titles, or only its account's, when scope says so; several bonuses at once, as a list of ids)
function bonusNeeds(id, c, o, scope = null) {
  if (typeof titleKept !== "function") return [];
  const left = [id].flat().flatMap(b => BONUS_TITLES[b] || []).map(t => TITLES[t]).filter(t => t && (!scope || t.scope === scope) && titleKept(t, c, o) < titleMax(t));
  const say = (ts, who) => ts.length && `${who} hasn't maxed the ${andList(ts.map(t => t.own_name || t.name))} title${ts.length > 1 ? "s" : ""}`;
  return [say(left.filter(t => t.scope === "character"), c.name), say(left.filter(t => t.scope === "account"), acctSaid(o, c))].filter(Boolean);
}
// a character as a pill linking to My Characters (with it picked: data-go, handled below), a note inside it
const charPill = (c, x = "") => `<a class="c-pill" href="characters" data-go="${c.id}"><img src="${profImg(c.profession || 0)}" alt="">${esc(c.name)}${x ? `<span class="dim">${esc(x)}</span>` : ""}</a>`;
document.addEventListener("click", e => { const a = e.target.closest?.("[data-go]"); if (a && typeof User !== "undefined") User.pick(+a.dataset.go); });
// a Zaishen daily's characters still needing it, of cs, [character, note] each: a mission not done in NM or HM (said
// which), an area not vanquished, a dungeon not done; null when the daily isn't one tracked
function dailyNeeds(key, e, cs) {
  const modesLeft = (c, part, id) => { const d = c[part][id] || 0; return [!(d & 1) && "NM", !(d & 2) && "HM"].filter(Boolean).join(", "); };
  const f = key === "zaishen-mission" ? hasModes(MISSIONS[e.mission]) && (c => modesLeft(c, "missions", e.mission))
    : key === "zaishen-vanquish" ? AREAS[e.area]?.foes && (c => !(c.vanquished || []).includes(e.area) && " ")
    : key === "zaishen-bounty" ? e.area && isTickedDungeon(e.area) && (c => modesLeft(c, "dungeons", e.area)) : null;
  return f ? cs.map(c => [c, f(c)]).filter(([, x]) => x).map(([c, x]) => [c, x.trim()]) : null;
}
// a weekly bonus's pills: the characters of cs, then the accounts, whose titles it helps, each with those titles
function bonusPills(bonus, o, cs) {
  const left = x => x[0].replace(/^.* hasn't maxed the /, "").replace(/ titles?$/, "");
  const chars = cs.map(c => [c, bonusNeeds(bonus, c, o, "character")]).filter(([, x]) => x.length).map(([c, x]) => charPill(c, left(x)));
  const accts = o.accounts.map(a => [a, o.chars.find(c => c.account === a.id)]).filter(([, c]) => c)
    .map(([a, c]) => [a, bonusNeeds(bonus, c, o, "account")]).filter(([, x]) => x.length)
    .map(([a, x]) => `<span class="c-pill">${esc(accountName(a))}<span class="dim">${esc(left(x))}</span></span>`);
  return [...chars, ...accts];
}
// a character's age range at a moment (its "bornBetween", narrowed by /age readings): the unit it's said in (days while it
// covers more than two dates, then hours, then minutes), and what a reading then takes off for sure (the smaller side
// where a month ticks over inside it). A month: a twelfth of the game's 365-day year
const AGE_DAY = 864e5, AGE_MO = 365 / 12 * AGE_DAY;
function ageAt(made, t = Date.now()) {
  const [lo, hi] = made.map(Date.parse), dates = Math.floor(hi / AGE_DAY) - Math.floor(lo / AGE_DAY) + 1;
  const [unit, word] = dates > 2 ? [AGE_DAY, "day"] : hi - lo >= 36e5 ? [36e5, "hour"] : [6e4, "minute"];
  const b = t - Math.floor((t - lo) / AGE_MO) * AGE_MO, side = b > lo && b < hi ? Math.min(b - lo, hi - b) : 0;
  const mid = (lo + hi) / 2;
  return { lo, hi, dates, unit, word, side, mid, done: hi - lo <= 6e4, next: mid + Math.ceil((t - mid) / AGE_MO) * AGE_MO,
    said: n => `${n} ${word}${n === 1 ? "" : "s"}` };
}
function bonusMark(id) {
  if (!userNamed()) return "";
  const o = User.data(), says = bonusNeeds(id, User.char(o), o);
  if (!says.length) return "";
  const tip = esc(says.join("; "));
  return `<sup class="u-miss" tabindex="0" data-tip="${tip}" aria-label="${tip}">¶</sup>`;
}
function entryHTML(e) {
  if (e.mission) return LINK.mission(e.mission) + missionMarks(e.mission);
  if (e.area && !e.creature && !e.item) return LINK.area(e.area) + vanqMark(e.area);
  if (e.bonus) return `<a href="rotations${query({ bonus: e.bonus })}">${esc(entryName(e))}</a>${bonusMark(e.bonus)}`;
  // a bounty at the end of a dungeon: a link to the dungeon, and its marks
  if (e.creature && e.area && isTickedDungeon(e.area)) return `<a href="${HREF.dungeon(e.area)}" title="${esc(areaName(e.area))}">${esc(entryName(e))}</a>` + modeMarks("dungeons", e.area);
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
// when a daily rotation (Zaishen Mission, Zaishen Vanquish) is next on what is(entry) picks, or how long the current
// one still runs: a sentence, or "" when it never comes
const fmtZDay = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" });
function zaishenNote(key, is) {
  const r = ROTATIONS[key];
  if (!r?.entries.some(is)) return "";
  const now = Date.now(), k = Rotation.period(r, now);
  let i = 0;
  while (!is(Rotation.entry(r, k + i))) i++;
  return i ? `The next <a href="rotations">${esc(r.title)}</a> here is on ${fmtZDay.format(Rotation.startsAt(r, k + i))}, in ${i} day${i > 1 ? "s" : ""}.`
    : `This is today's <a href="rotations">${esc(r.title)}</a>, for another ${timeLeft(Rotation.endsAt(r, now) - now)}.`;
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
      + `<span class="t-l">${timeLeft(Rotation.endsAt(r, now) - now)}</span><span class="t-n">Then: ${entryHTML(Rotation.entry(r, k + 1))}</span></div>`;
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

/* ---------- the visitor's progress, per character, kept in this browser only (the Backup page backs it up) ----------
   Kept as {v: 3, accounts: [{id, name, titles: its account titles, reforgedCoinClock: (with the bell) 0 or when the
   Purveyor's coins were last taken, chars: [its characters, in the order shown: {id,
   name, profession: its primary (1 Warrior ... 10 Dervish), elites: [skill ids captured], vanquished: [area ids],
   missionsNM, missionsHM, dungeonsNM, dungeonsHM: [ids done in that mode], titles: {title id: rank}, modes: the optional game modes
   the character is bound to (and our pre-Searing mark), of USER_MODES, gender: "m" or "f" (for how the site speaks of it,
   left out when not set), hidden: true when kept out of My Characters' list (left out when shown), heroes: [hero ids
   recruited] (or "all"), builds: [skill template codes saved, in the order shown], campaign: the one it was made in (1 Prophecies, 2 Factions, 3
   Nightfall), note: the player's one line about it, retired: true when no longer played (left out of the Today page's suggestions), bornBetween: [the earliest, the latest]
   time it can have been made, narrowed by the ages /age gave (My Characters' Edit), eotnMap: the percent of the Eye of the North map
   explored, as worked out on My Characters from Master of the North's points}]}]}, the accounts in the order shown.
   A list may be "all": every id in USER_ALL_V3 (frozen: should the game ever have more, they'd come with a
   new version). An empty list, or a title not reached, is left out. Version 1 (from before), still read: no "all", and
   missions and dungeons as {<id>: done}, done 1 normal mode, 2 hard mode, 3 both; with no "account": account 1.
   Version 2 (from before), still read: "all" as USER_ALL, the same characters in one list, {v: 2, chars: [{..., account: its account's
   id}], accounts: [{id, name, titles}]}.
   In memory, the pages see every character as {id, name, account, elites: [], vanquished: [], missions: {<id>: done},
   dungeons: {<id>: done}, titles}, the lists in full: it's turned into what's kept only when saved.
   Everything is by the game's own ids, so it outlasts the site's updates, and ids the site doesn't know are kept. Which
   character is shown (its id) is kept apart, as it's no progress. */
const USER_KEY = "gw-user", USER_CHAR_KEY = "gw-user-char";
/* Read-only mode, for a copy of the progress brought from another machine or browser (set on the Backup page, kept in
   this browser only, not in a backup): every change is refused with a notice, but loading a backup over it. */
const READ_ONLY_KEY = "gw-read-only";
const readOnly = () => { try { return localStorage.getItem(READ_ONLY_KEY) === "1"; } catch { return false; } };
// the notice, once at a time; true when read-only (the change to be dropped)
function readOnlyBlocks() {
  if (!readOnly()) return false;
  if (document.querySelector(".ro-note")) return true;
  const d = document.createElement("div");
  d.className = "ro-note"; d.setAttribute("role", "alertdialog"); d.setAttribute("aria-modal", "true");
  d.innerHTML = `<div class="ro-box"><b>This is read-only mode.</b><p>You probably want to edit the source, which is on another
    machine or browser.</p><p class="dim">To change things here anyway, turn read-only off on the <a href="backup">Backup</a> page.</p>
    <button type="button" class="u-btn">OK</button></div>`;
  d.addEventListener("click", e => { if (e.target === d || e.target.closest("button")) d.remove(); });
  document.body.append(d);
  d.querySelector("button").focus();
  return true;
}
const USER_NOTE_MAX = 100;  // a character's note, at most
/* Kept in this browser apart from the characters, and in a backup with them (the Backup page): the Builder's saved
   builds, the guides' steps ticked and faction cap calculators, and the Rotations page's UTC switch. In a backup, each
   part is optional: {builderBuilds: [the Builder's template codes, newest first], guides: {<guide id>: {steps: "1-5,7", cap: {rows: [the
   raises ticked, by their row], rank}}}, settings: {eventsUtc: true | false}}. */
const BUILDER_SAVED_KEY = "gw-builder-saved-v2", GUIDE_STEPS_KEY = id => `gw-guide-${id}`, GUIDE_CAP_KEY = id => `gw-cap-${id}`;
const lsGet = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const lsSet = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } };
// the guides' ids before they were short names: what this browser kept under them moved to the new ones, once (kept
// there when the new one has its own), and the old ones gone
const GUIDE_OLD_IDS = {"gom-afk-xp": "gom", "pre-searing-quests": "pre", "wayfarers-reverie": "reverie", "fow-quests": "fow", "uw-quests": "uw", "chaos-axe-farm": "drakes", "fow-spider-cave": "spidercave", "zos-afk-luxon": "zos"};
for (const [old, id] of Object.entries(GUIDE_OLD_IDS)) for (const key of [GUIDE_STEPS_KEY, GUIDE_CAP_KEY]) try {
  const v = localStorage.getItem(key(old));
  if (v == null) continue;
  if (localStorage.getItem(key(id)) == null) localStorage.setItem(key(id), v);
  localStorage.removeItem(key(old));
} catch { /* storage blocked */ }
// the Builder's saved builds (from before, {name, code} each: the codes, once, the names dropped)
function builderSaved() {
  let codes = lsGet(BUILDER_SAVED_KEY);
  if (!Array.isArray(codes)) {
    const old = lsGet("gw-builder-saved-v1");
    codes = Array.isArray(old) ? [...new Set(old.map(b => b?.code).filter(c => typeof c === "string"))] : [];
    if (old) { lsSet(BUILDER_SAVED_KEY, codes); lsSet("gw-builder-saved-v1", null); }
  }
  return codes.filter(c => typeof c === "string");
}
// numbers as ranges, "1-5,7,12-30", and back
const toRanges = ns => [...new Set(ns)].sort((a, b) => a - b).reduce((rs, n) => { const r = rs.at(-1); if (r && n === r[1] + 1) r[1] = n; else rs.push([n, n]); return rs; }, [])
  .map(([a, b]) => (a === b ? `${a}` : `${a}-${b}`)).join(",");
const fromRanges = t => t.split(",").filter(Boolean).flatMap(r => { const [a, b = a] = r.split("-").map(Number); return Array.from({ length: b - a + 1 }, (_, i) => a + i); });
const RANGES = /^(\d+(-\d+)?)(,\d+(-\d+)?)*$/;
// what's kept in this browser of them, as it goes in a backup (a part with nothing in it left out)
function extrasKept() {
  const x = {}, builds = builderSaved(), guides = {};
  if (builds.length) x.builderBuilds = builds;
  let keys = []; try { keys = Object.keys(localStorage); } catch { /* storage blocked */ }
  for (const k of keys) {
    const m = k.match(/^gw-(guide|cap)-([a-z0-9-]+)$/);
    if (!m) continue;
    const v = lsGet(k), g = guides[m[2]] ||= {};
    if (m[1] === "guide" && Array.isArray(v) && v.length) g.steps = toRanges(v.filter(Number.isInteger));
    if (m[1] === "cap" && v && typeof v === "object" && (v.rows?.length || v.rank)) g.cap = { rows: v.rows || [], rank: v.rank || 0 };
  }
  for (const [id, g] of Object.entries(guides)) if (!Object.keys(g).length) delete guides[id];
  if (Object.keys(guides).length) x.guides = Object.fromEntries(Object.entries(guides).sort(([a], [b]) => cmpStr(a, b)));
  let utc = null; try { utc = localStorage.getItem("events-utc"); } catch { /* storage blocked */ }
  if (utc != null) x.settings = { eventsUtc: utc === "1" };
  return x;
}
// a backup's parts put in this browser: each part in it replaces what's here, a part left out leaves it as it is
function extrasApply(o) {
  if (o.builderBuilds) lsSet(BUILDER_SAVED_KEY, [...new Set(o.builderBuilds)]);
  if (o.guides) {
    let keys = []; try { keys = Object.keys(localStorage); } catch { /* storage blocked */ }
    for (const k of keys) if (/^gw-(guide|cap)-/.test(k)) lsSet(k, null);
    for (const [id, g] of Object.entries(o.guides)) {
      if (g.steps) lsSet(GUIDE_STEPS_KEY(id), fromRanges(g.steps));
      if (g.cap) lsSet(GUIDE_CAP_KEY(id), { rows: g.cap.rows, rank: g.cap.rank });
    }
  }
  if (o.settings && "eventsUtc" in o.settings) try { localStorage.setItem("events-utc", o.settings.eventsUtc ? "1" : "0"); } catch { /* storage blocked */ }
}
// what's wrong with them in a backup, or ""
function extrasCheck(o) {
  const isObj = x => x && typeof x === "object" && !Array.isArray(x);
  if (o.builderBuilds !== undefined && !(Array.isArray(o.builderBuilds) && o.builderBuilds.every(b => typeof b === "string" && /^[A-Za-z0-9+/]{1,200}$/.test(b)))) return '"builderBuilds" should be a list of skill template codes.';
  if (o.guides !== undefined) {
    if (!isObj(o.guides)) return '"guides" should map guide ids to what\'s kept of them.';
    for (const [id, g] of Object.entries(o.guides)) {
      if (!/^[a-z0-9-]+$/.test(id) || !isObj(g) || Object.keys(g).some(k => !["steps", "cap"].includes(k))) return `Guide "${id}": it should have "steps" and/or "cap".`;
      if (g.steps !== undefined && !(typeof g.steps === "string" && RANGES.test(g.steps))) return `Guide "${id}": "steps" should be step numbers and ranges, as "1-5,7".`;
      if (g.cap !== undefined && !(isObj(g.cap) && Array.isArray(g.cap.rows) && g.cap.rows.every(r => Number.isInteger(r) && r >= 0) && Number.isInteger(g.cap.rank) && g.cap.rank >= 0))
        return `Guide "${id}": "cap" should be {rows: [row numbers], rank}.`;
    }
  }
  if (o.settings !== undefined && !(isObj(o.settings) && Object.entries(o.settings).every(([k, v]) => k === "eventsUtc" && typeof v === "boolean"))) return '"settings" should be {"eventsUtc": true or false}.';
  return "";
}
// what "all" stands for, version 2: every elite (but PvP versions), every area with foes to vanquish, every mission with
// modes, every dungeon
const USER_ALL = {
  elites: [5,13,33,39,47,52,53,54,55,58,63,74,79,82,86,91,107,113,114,119,121,125,126,128,132,142,146,148,151,164,178,181,185,199,203,205,209,218,226,227,228,236,237,239,259,260,261,262,265,266,268,269,270,273,276,282,285,294,298,317,318,329,335,338,354,355,358,364,365,372,374,375,379,381,389,393,395,397,404,405,409,428,429,430,442,448,449,451,461,465,570,764,771,781,789,790,799,801,803,804,806,808,809,812,813,817,819,820,821,822,826,827,830,831,832,836,837,843,847,853,862,863,867,869,878,880,884,888,889,892,900,901,907,913,914,928,933,937,939,941,942,946,953,954,961,987,988,992,993,997,1029,1030,1034,1035,1042,1045,1053,1055,1057,1066,1083,1088,1091,1095,1098,1115,1118,1123,1126,1129,1142,1146,1195,1198,1199,1200,1202,1212,1215,1217,1220,1231,1239,1240,1250,1255,1257,1268,1333,1339,1342,1345,1346,1348,1350,1352,1355,1356,1359,1362,1364,1367,1372,1373,1377,1378,1380,1393,1394,1395,1397,1405,1406,1408,1412,1415,1465,1466,1468,1471,1473,1479,1482,1499,1502,1517,1518,1519,1520,1521,1522,1536,1548,1553,1554,1555,1568,1570,1587,1588,1596,1599,1602,1634,1635,1640,1642,1643,1644,1649,1652,1654,1656,1659,1662,1664,1684,1686,1687,1688,1690,1692,1694,1696,1697,1698,1701,1721,1724,1726,1729,1730,1732,1736,1737,1742,1744,1749,1750,1752,1754,1756,1759,1760,1761,1767,1769,1771,1773,1782,2374,2379,2384,3422,3423,3424,3425,3426,3427,3428,3429,3430,3431],
  vanquished: [13,17,18,26,27,31,33,41,42,43,44,45,46,47,48,53,54,56,58,59,60,61,62,63,64,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,110,111,112,113,114,115,121,128,144,191,195,196,197,198,199,200,201,202,203,205,209,210,211,227,232,233,235,236,237,238,239,240,244,245,246,247,256,265,269,313,369,371,373,375,377,379,380,382,384,386,392,394,395,397,399,402,404,406,413,419,430,432,437,439,441,443,444,446,448,481,482,483,484,485,486,488,499,501,513,546,548,553,558,566,569,572,647,649,651],
  missions: [10,11,12,14,15,16,19,21,22,23,24,25,28,29,30,32,38,73,116,117,118,120,122,123,124,204,215,257,258,260,261,262,263,264,266,267,268,270,271,307,427,453,458,459,460,515,516,517,518,519,520,521,522,523,524,525,526,527,528,556,653,654,655,658,661,664,665,666,669,670,673],
  dungeons: [560,570,573,576,577,578,581,584,604,607,612,615,617,628,630,635,670,704,780,879],
};
const USER_KEYS = { 1: ["id", "name", "elites", "missions", "dungeons", "titles", "account", "vanquished"],
  2: ["id", "name", "account", "profession", "elites", "vanquished", "missionsNM", "missionsHM", "dungeonsNM", "dungeonsHM", "titles", "modes", "gender", "hidden", "heroes", "builds", "campaign", "note", "bornBetween", "retired", "eotnMap"] };
// (version 3's characters: version 2's, their account the one they're in)
USER_KEYS[3] = USER_KEYS[2].filter(k => k !== "account");
// version 3 as version 2: each account's characters in one list, each with its account's id
const userFlat = o => (o.v !== 3 ? o : { v: 2, chars: o.accounts.flatMap(a => a.chars.map(c => ({ ...c, account: a.id }))),
  accounts: o.accounts.map(({ chars, ...a }) => a) });
// the optional game modes (Guild Wars Reforged): a character bound to one wears its badge beside its name; and our own
// "pre-Searing", a character that stays in pre-Searing Ascalon, with the Tapestry Shred as its badge
const USER_MODES = { presearing: "Pre-Searing: stays in pre-Searing Ascalon", melandru: "Melandru's Accord", dhuum: "Dhuum's Covenant" };
const USER_LISTS = ["elites", "vanquished", "missionsNM", "missionsHM", "dungeonsNM", "dungeonsHM"];
// what "all" stands for in version 3: the same, but the dungeons are the 18 ticked (the Eye of the North's with Secret
// Lair of the Snowmen; not Destruction's Depths, a mission, nor the Piken Square ones), the missions are the 69 story
// ones (not Urgoz's Warren and The Deep), and the heroes are every one;
// frozen, as USER_ALL is
const USER_ALL_V3 = { ...USER_ALL, missions: USER_ALL.missions.filter(id => id !== 266 && id !== 307), dungeons: [560, 570, 573, 576, 577, 578, 581, 584, 604, 607, 612, 615, 617, 628, 630, 635, 701, 704],
  heroes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 36, 37, 38, 39] };
const allOf = (k, v = 3) => (v < 3 ? USER_ALL : USER_ALL_V3)[k.replace(/[NH]M$/, "")];
const newUserChar = (id, account = 1) => ({ id, name: `Char${id}`, account, elites: [], vanquished: [], missions: {}, dungeons: {} });
// what's kept (version 1, 2 or 3, checked) as the pages see it
function userFromKept(o) {
  const v = o.v;
  o = userFlat(o);
  const chars = o.chars.map(k => {
    const c = { id: k.id, name: k.name, account: k.account ?? 1 };
    if (k.profession) c.profession = k.profession;
    if (k.modes?.length) c.modes = [...k.modes];
    if (k.gender) c.gender = k.gender;
    if (k.hidden) c.hidden = true;
    if (o.v === 1) Object.assign(c, { elites: k.elites, vanquished: k.vanquished || [], missions: k.missions, dungeons: k.dungeons });
    else {
      const list = key => (k[key] === "all" ? [...allOf(key, v)] : k[key] || []);
      Object.assign(c, { elites: list("elites"), vanquished: list("vanquished") });
      for (const part of ["missions", "dungeons"]) {
        c[part] = {};
        for (const [m, b] of [["NM", 1], ["HM", 2]]) for (const id of list(part + m)) c[part][id] = (c[part][id] || 0) | b;
      }
    }
    if (k.titles) c.titles = { ...k.titles };
    if (k.heroes) c.heroes = k.heroes === "all" ? [...USER_ALL_V3.heroes] : [...k.heroes];
    if (k.builds) c.builds = [...k.builds];
    if (k.campaign) c.campaign = k.campaign;
    if (k.note) c.note = k.note;
    if (k.bornBetween) c.bornBetween = [...k.bornBetween];
    if (k.retired) c.retired = true;
    if (k.eotnMap !== undefined) c.eotnMap = k.eotnMap;
    return c;
  });
  return userNormalize({ v: 2, chars, accounts: (o.accounts || []).map(a => ({ ...a })) });
}
// the pages' progress as it's kept (version 3): each list sorted, "all" when it holds every id, left out when empty;
// the characters under their accounts
function userToKept(o) {
  const chars = o.chars.map(c => {
    const k = { id: c.id, name: c.name };
    if (c.profession) k.profession = c.profession;
    if (c.modes?.length) k.modes = Object.keys(USER_MODES).filter(m => c.modes.includes(m));
    if (c.gender) k.gender = c.gender;
    if (c.hidden) k.hidden = true;
    const lists = { elites: c.elites, vanquished: c.vanquished || [] };
    // (a mission or dungeon with no ticks, as Urgoz's Warren, Destruction's Depths or the Piken Square ones, isn't kept)
    for (const part of ["missions", "dungeons"]) for (const [m, b] of [["NM", 1], ["HM", 2]])
      lists[part + m] = Object.entries(c[part]).filter(([id, v]) => v & b && USER_ALL_V3[part].includes(+id)).map(([id]) => +id);
    for (const [key, ids] of Object.entries(lists)) {
      const sorted = [...new Set(ids)].sort((a, b) => a - b), set = new Set(sorted);
      if (allOf(key).every(id => set.has(id)) && sorted.length === allOf(key).length) k[key] = "all";
      else if (sorted.length) k[key] = sorted;
    }
    if (c.titles && Object.keys(c.titles).length) k.titles = c.titles;
    if (c.heroes?.length) { const hs = [...new Set(c.heroes)].sort((a, b) => a - b);
      k.heroes = hs.length === USER_ALL_V3.heroes.length && USER_ALL_V3.heroes.every(id => hs.includes(id)) ? "all" : hs; }
    if (c.builds?.length) k.builds = [...c.builds];
    if (c.campaign) k.campaign = c.campaign;
    if (c.note?.trim()) k.note = c.note.trim();
    if (c.bornBetween) k.bornBetween = c.bornBetween;
    if (c.retired) k.retired = true;
    if (c.eotnMap !== undefined) k.eotnMap = c.eotnMap;
    return k;
  });
  return { v: 3, accounts: o.accounts.map(a => ({ ...a, chars: chars.filter((k, i) => (o.chars[i].account ?? 1) === a.id) })) };
}
// progress as the site keeps it: every character on an account (one kept without, from before accounts: account 1),
// every account a character is on listed (one not listed is added last); the lists' order is the order shown
function userNormalize(o) {
  o.accounts = o.accounts || [];
  for (const c of o.chars) {
    c.account = c.account ?? 1;
    if (!o.accounts.some(a => a.id === c.account)) o.accounts.push({ id: c.account });
  }
  return o;
}
const accountName = a => a.name || `Account ${a.id}`;
/* An account's Reforged Coins, kept by the Purveyor for an account with the bell (its "reforgedCoinClock": 0 never
   taken, else when they last were; left out without the bell): one a day from 8:00 UTC, at most 3 */
const COINS = { DAY: 864e5, RESET: 8 * 36e5, HOLD: 3 };
const coinDay = t => Math.floor((t - COINS.RESET) / COINS.DAY);
const coinsWaiting = a => (a.reforgedCoinClock === 0 ? COINS.HOLD : Math.max(0, Math.min(COINS.HOLD, coinDay(Date.now()) - coinDay(Date.parse(a.reforgedCoinClock)))));
const coinsNext = () => (coinDay(Date.now()) + 1) * COINS.DAY + COINS.RESET;
// what's wrong with an object as progress, or "" when it's fine
function userCheck(o) {
  const isObj = x => x && typeof x === "object" && !Array.isArray(x), isId = x => Number.isInteger(x) && x > 0;
  if (!isObj(o)) return "It isn't an object: it should start with {.";
  if (![1, 2, 3].includes(o.v)) return 'It needs "v": 3 (or 2 or 1, from before).';
  // version 3: its accounts, each with its characters (no "account" of their own), then checked as version 2
  if (o.v === 3) {
    const extra = Object.keys(o).find(k => !["v", "accounts", "builderBuilds", "guides", "settings"].includes(k));
    if (extra) return `Unknown key "${extra}".`;
    const bad = extrasCheck(o);
    if (bad) return bad;
    if (!Array.isArray(o.accounts) || !o.accounts.length) return 'It needs "accounts": a list of at least one account.';
    let n = 0;
    for (const [i, a] of o.accounts.entries()) {
      if (!isObj(a)) return `Account ${i + 1} isn't an object.`;
      const k = Object.keys(a).find(k => !["id", "name", "titles", "reforgedCoinClock", "chars"].includes(k));
      if (k) return `Account ${i + 1}: unknown key "${k}".`;
      if (!Array.isArray(a.chars)) return `Account ${i + 1}: "chars" should be a list of its characters.`;
      for (const c of a.chars) {
        n++;
        if (!isObj(c)) return `Character ${n} isn't an object.`;
        const ck = Object.keys(c).find(k => !USER_KEYS[3].includes(k));
        if (ck) return `Character ${n}: unknown key "${ck}".`;
      }
    }
    if (!n) return "It needs at least one character.";
    o = userFlat(o);
  }
  const extra = Object.keys(o).find(k => !["v", "chars", "accounts"].includes(k));
  if (extra) return `Unknown key "${extra}".`;
  if (!Array.isArray(o.chars) || !o.chars.length) return 'It needs "chars": a list of at least one character.';
  // titles reached, character or account: {title id: rank}, a title not reached is left out
  const badTitles = t => t !== undefined && !(isObj(t) && Object.entries(t).every(([id, r]) => /^\d+$/.test(id) && Number.isInteger(r) && r > 0 && r < 100));
  if (o.accounts !== undefined) {
    if (!Array.isArray(o.accounts)) return '"accounts" should be a list.';
    for (const [i, a] of o.accounts.entries()) {
      const at = `Account ${i + 1}`;
      if (!isObj(a)) return `${at} isn't an object.`;
      const k = Object.keys(a).find(k => !["id", "name", "titles", "reforgedCoinClock"].includes(k));
      if (a.reforgedCoinClock !== undefined && a.reforgedCoinClock !== 0 && !(typeof a.reforgedCoinClock === "string" && !isNaN(Date.parse(a.reforgedCoinClock))))
        return `${at}: "reforgedCoinClock" should be 0 (never) or the time they were taken.`;
      if (k) return `${at}: unknown key "${k}".`;
      if (!isId(a.id)) return `${at}: "id" should be a whole number above 0.`;
      if (o.accounts.findIndex(x => x?.id === a.id) !== i) return `${at}: id ${a.id} is used twice.`;
      if (a.name !== undefined && (typeof a.name !== "string" || !a.name.trim() || a.name.length > 40)) return `${at}: "name" should be 1 to 40 characters.`;
      if (badTitles(a.titles)) return `${at}: "titles" should map title ids to the rank reached (a whole number from 1).`;
    }
  }
  for (const [i, c] of o.chars.entries()) {
    const at = `Character ${i + 1}`;
    if (!isObj(c)) return `${at} isn't an object.`;
    const k = Object.keys(c).find(k => !USER_KEYS[o.v].includes(k));
    if (k) return `${at}: unknown key "${k}".`;
    if (!isId(c.id)) return `${at}: "id" should be a whole number above 0.`;
    if (o.chars.findIndex(x => x?.id === c.id) !== i) return `${at}: id ${c.id} is used twice.`;
    if (typeof c.name !== "string" || !c.name.trim() || c.name.length > 40) return `${at}: "name" should be 1 to 40 characters.`;
    const idList = x => Array.isArray(x) && x.every(isId) && new Set(x).size === x.length;
    if (o.v === 1) {
      if (!idList(c.elites)) return `${at}: "elites" should be a list of skill ids, each once.`;
      for (const part of ["missions", "dungeons"])
        if (!isObj(c[part]) || !Object.entries(c[part]).every(([id, v]) => /^[1-9]\d*$/.test(id) && [1, 2, 3].includes(v))) return `${at}: "${part}" should map ids to 1 (NM), 2 (HM) or 3 (both).`;
      if (c.vanquished !== undefined && !idList(c.vanquished)) return `${at}: "vanquished" should be a list of area ids, each once.`;
      if (c.account !== undefined && !isId(c.account)) return `${at}: "account" should be an account's id.`;
    } else {
      if (!isId(c.account)) return `${at}: "account" should be an account's id.`;
      if (c.profession !== undefined && !(Number.isInteger(c.profession) && c.profession >= 1 && c.profession <= 10)) return `${at}: "profession" should be 1 (Warrior) to 10 (Dervish).`;
      if (c.modes !== undefined && !(Array.isArray(c.modes) && c.modes.every(m => USER_MODES[m]) && new Set(c.modes).size === c.modes.length)) return `${at}: "modes" should list game modes of ${Object.keys(USER_MODES).join(", ")}, each once.`;
      if (c.gender !== undefined && !["m", "f"].includes(c.gender)) return `${at}: "gender" should be "m" or "f".`;
      if (c.hidden !== undefined && c.hidden !== true) return `${at}: "hidden" should be true (or left out).`;
      if (c.heroes !== undefined && c.heroes !== "all" && !idList(c.heroes)) return `${at}: "heroes" should be "all" or a list of hero ids, each once.`;
      if (c.note !== undefined && !(typeof c.note === "string" && c.note.length <= USER_NOTE_MAX && !/\n/.test(c.note))) return `${at}: "note" should be one line, at most ${USER_NOTE_MAX} characters.`;
      if (c.retired !== undefined && c.retired !== true) return `${at}: "retired" should be true (or left out).`;
      const r = c.bornBetween;
      if (r !== undefined && !(Array.isArray(r) && r.length === 2 && r.every(t => typeof t === "string" && !isNaN(Date.parse(t))) && Date.parse(r[0]) <= Date.parse(r[1])))
        return `${at}: "bornBetween" should be [the earliest, the latest] time it can have been made.`;
      if (c.campaign !== undefined && ![1, 2, 3].includes(c.campaign)) return `${at}: "campaign" should be 1 (Prophecies), 2 (Factions) or 3 (Nightfall).`;
      if (c.builds !== undefined && !(Array.isArray(c.builds) && c.builds.every(b => typeof b === "string" && /^[A-Za-z0-9+/]{1,200}$/.test(b)))) return `${at}: "builds" should be a list of skill template codes.`;
      if (c.eotnMap !== undefined && !(Number.isInteger(c.eotnMap) && c.eotnMap >= 0)) return `${at}: "eotnMap" should be the Eye of the North map's Master of the North points (a whole number from 0).`;
      const bad = USER_LISTS.find(k => c[k] !== undefined && c[k] !== "all" && !idList(c[k]));
      if (bad) return `${at}: "${bad}" should be "all" or a list of ids, each once.`;
    }
    if (badTitles(c.titles)) return `${at}: "titles" should map title ids to the rank reached (a whole number from 1).`;
  }
  return "";
}
const userRaw = () => { try { return `${localStorage.getItem(USER_KEY)}|${localStorage.getItem(USER_CHAR_KEY)}`; } catch { return ""; } };
let userSeen = userRaw();  // what this page last drew from
const User = {
  // what's kept, as text: null when nothing is
  stored() { try { return localStorage.getItem(USER_KEY); } catch { return null; } },
  // kept progress that can't be read (broken, or by a newer site): the pages go without it, and nothing writes over it
  // but the Backup page's reset, once it's been copied
  broken() { const t = User.stored(); if (t == null) return false; try { return !!userCheck(JSON.parse(t)); } catch { return true; } },
  data() {
    if (!User.broken()) try { const o = JSON.parse(User.stored()); if (o) return userFromKept(o); } catch { /* none yet */ }
    return userNormalize({ v: 2, chars: [newUserChar(1)] });
  },
  // (read-only: refused, with the notice; force: loading a backup, which a read-only copy is made by)
  save(o, force = false) {
    if (User.broken() || (!force && readOnlyBlocks())) return false;
    try { localStorage.setItem(USER_KEY, JSON.stringify(userToKept(userNormalize(o)))); } catch { /* storage blocked */ }
    userSeen = userRaw();
    globalThis.headerChar?.();
    return true;
  },
  // the Backup page's way out of broken progress: all of it gone, a fresh start
  reset() { try { localStorage.removeItem(USER_KEY); localStorage.removeItem(USER_CHAR_KEY); } catch { /* storage blocked */ } userSeen = userRaw(); globalThis.headerChar?.(); },
  // the character shown: the one picked on My Characters, else the first
  char(o = User.data()) {
    let id = null; try { id = +localStorage.getItem(USER_CHAR_KEY); } catch { /* storage blocked */ }
    return o.chars.find(c => c.id === id) || o.chars[0];
  },
  pick(id) { try { localStorage.setItem(USER_CHAR_KEY, id); } catch { /* storage blocked */ } userSeen = userRaw(); globalThis.headerChar?.(); },
  captured(id) { return User.char().elites.includes(+id); },
  vanquished(id) { return (User.char().vanquished || []).includes(+id); },
  // the shown character's account
  account(o = User.data()) { return o.accounts.find(a => a.id === User.char(o).account); },
  // the rank reached in a title, kept on the character or on its account (by the title's scope); 0: not reached
  titleRank(id, scope) { return ((scope === "account" ? User.account()?.titles : User.char().titles) || {})[id] || 0; },
  // set a title's rank (0: not reached, and left out; a titles list only while it holds one)
  setTitle(id, scope, rank) {
    const o = User.data(), c = User.char(o), holder = scope === "account" ? User.account(o) : c;
    holder.titles = holder.titles || {};
    if (rank) holder.titles[id] = rank; else delete holder.titles[id];
    if (!Object.keys(holder.titles).length) delete holder.titles;
    return User.save(o);
  },
  // the percent of the Eye of the North map explored (undefined: not worked out, and left out)
  setEotnMap(map) { User.change(c => { if (map === undefined) delete c.eotnMap; else c.eotnMap = map; }); },
  done(part, id) { return User.char()[part][id] || 0; },
  // change the shown character's progress
  change(f) { const o = User.data(); f(User.char(o)); User.save(o); },
  setCaptured(id, on) { User.change(c => { c.elites = c.elites.filter(x => x !== +id); if (on) c.elites.push(+id); c.elites.sort((a, b) => a - b); }); },
  setDone(part, id, v) { User.change(c => { if (v) c[part][id] = v; else delete c[part][id]; }); },
  // many at once, saved once
  setCapturedMany(ids, on) {
    User.change(c => { const s = new Set(c.elites); for (const id of ids) if (on) s.add(+id); else s.delete(+id); c.elites = [...s].sort((a, b) => a - b); });
  },
  // areas vanquished
  setVanquishedMany(ids, on) {
    User.change(c => {
      const s = new Set(c.vanquished); for (const id of ids) if (on) s.add(+id); else s.delete(+id);
      c.vanquished = [...s].sort((a, b) => a - b);
    });
  },
};
// back on a tab after the progress or the character changed in another: its ticks show the new state, and a page that
// lists by progress draws again (on "userchange")
// (also when the page is shown again from the browser's back/forward cache, or its tab comes back into view)
function userSync() {
  if (userRaw() === userSeen) return;
  userSeen = userRaw();
  const c = User.char();
  for (const b of document.querySelectorAll(".utick[data-elite]")) b.setAttribute("aria-pressed", c.elites.includes(+b.dataset.elite));
  for (const b of document.querySelectorAll(".utick[data-vanq]")) b.setAttribute("aria-pressed", (c.vanquished || []).includes(+b.dataset.vanq));
  for (const g of document.querySelectorAll(".uticks")) for (const b of g.querySelectorAll(".utick")) b.setAttribute("aria-pressed", !!((c[g.dataset.part][g.dataset.id] || 0) & +b.dataset.mode));
  dispatchEvent(new Event("userchange"));
}
// (as soon as another tab saves, while this one is in the background; and on coming back, as a safety net)
addEventListener("storage", e => { if (e.key === USER_KEY || e.key === USER_CHAR_KEY || e.key === null) userSync(); });
addEventListener("focus", userSync);
addEventListener("pageshow", userSync);
document.addEventListener("visibilitychange", () => { if (!document.hidden) userSync(); });
// the ticks: an elite captured, a mission or dungeon done in normal and hard mode
// (a list passes what it knows already: reading the progress for each row is slow)
const eliteTick = (id, on = User.captured(id), label = "") => `<button type="button" class="utick${label ? "" : " ck"}" data-elite="${id}" aria-pressed="${on}" title="Captured">${label ? `<span class="ubox"></span>${label}` : "✓"}</button>`;
// an area vanquished (one with foes to vanquish)
const vanqTick = (id, on = User.vanquished(id), label = "") => `<button type="button" class="utick${label ? "" : " ck"}" data-vanq="${id}" aria-pressed="${on}" title="Vanquished">${label ? `<span class="ubox"></span>${label}` : "✓"}</button>`;
// the missions with normal and hard mode to tick: the story ones (not the elite ones, Urgoz's Warren and The Deep, nor
// challenge, competitive or PvP ones)
const hasModes = m => m?.kind === "story";
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
  if (User.broken()) { if (confirm("Your saved progress can't be read, so it can't be changed here. Open the Backup page to see it?")) location.href = "backup"; return; }
  if (readOnlyBlocks()) return;
  const elites = [...new Set([...list.querySelectorAll(".utick[data-elite]")].map(x => x.dataset.elite))];
  const vanqs = [...new Set([...list.querySelectorAll(".utick[data-vanq]")].map(x => x.dataset.vanq))];
  const done = [...list.querySelectorAll(".uticks[data-part]")].map(g => [g.dataset.part, g.dataset.id]);
  const n = elites.length + vanqs.length + done.length, who = User.char().name, m = +b.dataset.mode || 0, mode = ["", "NM", "HM"][m];
  if (!n) return;
  const many = (k, w) => `${k} ${w}${k === 1 ? "" : "s"}`;
  const what = elites.length ? `${many(elites.length, "elite")} as captured` : vanqs.length ? `${many(vanqs.length, "area")} as vanquished` : `${many(done.length, done[0][0] === "dungeons" ? "dungeon" : "mission")} as done in ${mode}`;
  if (!confirm(on ? `Mark the ${what}, all shown, for ${who}?` : `Clear the ${mode ? `${mode} ` : ""}ticks of all ${n} shown for ${who}?`)) return;
  if (elites.length) User.setCapturedMany(elites, on);
  if (vanqs.length) User.setVanquishedMany(vanqs, on);
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
  if (User.broken()) { if (confirm("Your saved progress can't be read, so it can't be changed here. Open the Backup page to see it?")) location.href = "backup"; return; }
  if (readOnlyBlocks()) return;
  const on = b.getAttribute("aria-pressed") !== "true";
  if (b.dataset.elite) {
    User.setCaptured(b.dataset.elite, on);
    for (const x of document.querySelectorAll(`.utick[data-elite="${b.dataset.elite}"]`)) x.setAttribute("aria-pressed", on);
  } else if (b.dataset.vanq) {
    User.setVanquishedMany([b.dataset.vanq], on);
    for (const x of document.querySelectorAll(`.utick[data-vanq="${b.dataset.vanq}"]`)) x.setAttribute("aria-pressed", on);
  } else {
    const g = b.parentElement, v = User.done(g.dataset.part, g.dataset.id) ^ +b.dataset.mode;
    User.setDone(g.dataset.part, g.dataset.id, v);
    b.setAttribute("aria-pressed", on);
  }
  // a list filtered by progress draws again, so a row the tick takes out of it goes
  dispatchEvent(new Event("userchange"));
}, true);
