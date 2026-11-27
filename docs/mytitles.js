"use strict";
/* A character's titles, worked out from its progress (User, in common.js): the ones reached through its ticks or
   through other titles, the others as kept on it or its account. Used by My Characters (characters).
   Needs game/titles.js, game/skills.js, game/ground.js and game/missions.js. Every function takes the character c and
   the progress o it's in. */
const titleMax = t => t.max ?? t.ranks.length;
// a list worked out from the game's data once, then kept (the elites, missions and areas of a campaign)
const ONCE = new Map(), once = (k, f) => ONCE.get(k) ?? ONCE.set(k, f()).get(k);
// what Skill Hunter counts for a campaign: its own elites and the Core ones (Core ones count for all three, however
// they were got: captured anywhere or from a tome); not the PvP versions
const capturedIn = camp => once("cap" + camp, () => Object.entries(SKILLS).filter(([, s]) => s.elite && !s.pvp_only && (s.campaign === camp || s.campaign === 0)).map(([id]) => +id));
// the story missions of a campaign (by the area they're played in)
const storyIn = camp => once("story" + camp, () => Object.values(MISSIONS).filter(m => m.kind === "story" && AREAS[m.id]?.campaign === camp).map(m => m.id));
// the areas of a campaign to vanquish (those with foes to kill for it)
const vanquishIn = camp => once("vanq" + camp, () => Object.values(AREAS).filter(l => l.foes && l.campaign === camp).map(l => l.id));
// the derived titles: [title id, (c, o) => [have, need, unit, left]]; a title is reached when have >= need; left is
// what its list of things still to do holds (My Characters' Titles tab links it while there is something), which can
// outlast the title: a campaign's Skill Hunter needs fewer elites than it counts
const uncaptured = (c, camps) => { const got = new Set(c.elites); return [...new Set(camps.flatMap(capturedIn))].filter(s => !got.has(s)).length; };
const DERIVED_TITLES = new Map([
  ...[[24, 1, 90], [26, 2, 120], [28, 3, 140]].map(([id, camp, need]) => [id, c => { const got = new Set(c.elites), all = capturedIn(camp); return [all.filter(s => got.has(s)).length, need, "elites", uncaptured(c, [camp])]; }]),
  ...[[13, 1, 25, 1], [14, 2, 13, 1], [19, 3, 20, 1], [35, 1, 25, 2], [36, 2, 13, 2], [37, 3, 20, 2]].map(([id, camp, need, mode]) =>
    [id, c => { const n = storyIn(camp).filter(m => (c.missions[m] || 0) & mode).length; return [n, need, `missions in ${mode === 1 ? "NM" : "HM"}`, storyIn(camp).length - n]; }]),
  ...[[25, 1], [27, 2], [29, 3]].map(([id, camp]) => [id, c => {
    const got = new Set(c.vanquished), all = vanquishIn(camp), n = all.filter(l => got.has(l)).length;
    return [n, all.length, "areas vanquished", all.length - n];
  }]),
  // the Legendary ones: their list is the three campaigns' together (Core elites once)
  [32, (c, o) => [[24, 26, 28].filter(x => titleMaxed(x, c, o)).length, 3, "campaigns", uncaptured(c, [1, 2, 3])]],
  [30, (c, o) => [[1, 2, 18].filter(x => titleMaxed(x, c, o)).length, 3, "campaigns"]],
  [33, (c, o) => { const got = new Set(c.vanquished), all = [1, 2, 3].flatMap(vanquishIn); return [[25, 27, 29].filter(x => titleMaxed(x, c, o)).length, 3, "campaigns", all.filter(l => !got.has(l)).length]; }],
  // Legendary Guardian: the three Protector titles (NM) and the three Guardian ones (HM); its list, the missions missing
  // in either mode
  [31, (c, o) => [[13, 14, 19, 35, 36, 37].filter(x => titleMaxed(x, c, o)).length, 6, "titles", [1, 2, 3].flatMap(storyIn).filter(m => ((c.missions[m] || 0) & 3) !== 3).length]],
]);
// Master of the North's points: 5 an EotN mission in NM and 10 in HM, 10 a dungeon in NM and 20 in HM, 15 an area
// vanquished, from the character's ticks; and 1 a percent of the Eye of the North map explored, worked out on My
// Characters from the points the game shows and kept on the character (eotnMap). The 18 dungeons it counts: the Eye of
// the North's, with Secret Lair of the Snowmen (701) and not Destruction's Depths (a mission, counted with them)
const MOTN_DUNGEONS = USER_ALL_V3.dungeons;
const MOTN_RANKS = [100, 200, 350, 550, 750, 1000];
function motnTicked(c) {
  const modes = (part, id, nm, hm) => ((c[part]?.[id] || 0) & 1 ? nm : 0) + ((c[part]?.[id] || 0) & 2 ? hm : 0);
  const got = new Set(c.vanquished || []);
  return storyIn(4).reduce((n, id) => n + modes("missions", id, 5, 10), 0)
    + MOTN_DUNGEONS.reduce((n, id) => n + modes("dungeons", id, 10, 20), 0)
    + 15 * vanquishIn(4).filter(id => got.has(id)).length;
}
// the most the ticks can give: every mission, dungeon and area done in both modes
const motnTickMax = () => 15 * storyIn(4).length + 30 * MOTN_DUNGEONS.length + 15 * vanquishIn(4).length;
const motnPoints = c => motnTicked(c) + Math.max(0, c.eotnMap ?? 0);
// the rank kept for a title: on the character, or on its account (its "account", else account 1)
function titleKept(t, c, o) {
  const holder = t.scope === "account" ? (o.accounts || []).find(a => a.id === (c.account ?? 1)) : c;
  return holder?.titles?.[t.id] || 0;
}
// a Melandru's Accord character: it can't show its account's titles or have their effects, and Kind of a Big Deal
// doesn't count them (wiki, Melandru's Accord)
const isMelandru = c => (c.modes || []).includes("melandru");
// the other titles maxed, that Kind of a Big Deal counts: for a Melandru's Accord character, its own only
// (kept per character, worked out again only when what titles go by changed: its ticks, titles, map explored, modes,
// its account's titles; not its name, order, heroes or builds)
const MAXED = new Map();
function titlesMaxed(c, o) {
  const sig = JSON.stringify([c.elites, c.vanquished, c.missions, c.dungeons, c.titles, c.eotnMap, c.modes, o.accounts.find(a => a.id === c.account)?.titles]);
  const was = MAXED.get(c.id);
  if (was?.sig === sig) return was.n;
  const n = Object.values(TITLES).filter(x => x.id !== 10 && !(isMelandru(c) && x.scope === "account") && titleMaxed(x.id, c, o)).length;
  MAXED.set(c.id, { sig, n });
  return n;
}
// the account titles maxed, that Kind of a Big Deal doesn't count for a Melandru's Accord character
const accountTitlesMaxed = (c, o) => Object.values(TITLES).filter(x => x.id !== 10 && x.scope === "account" && titleMaxed(x.id, c, o)).length;
// what to say by a Melandru's Accord character's count when the game's Hero panel may show another (the wiki's bug
// note: the account's titles may count there for a while), or ""
function melMaxedNote(c, o) {
  if (!isMelandru(c)) return "";
  const own = titlesMaxed(c, o), acct = accountTitlesMaxed(c, o);
  return acct > own ? `The game may show more. Its account has ${acct} account title${acct === 1 ? "" : "s"} maxed, not counted under Melandru's Accord, but the game's Hero panel may count them for a while (a known bug).` : "";
}
// a title's rank: worked out, or as kept; Kind of a Big Deal: a rank for every 5 other titles maxed
// a character's importance: the titles it has maxed (Kind of a Big Deal's count); characters most important first, the
// saved order among equals
const charImportance = (c, o) => titlesMaxed(c, o);
const byImportance = (cs, o) => cs.map((c, i) => [c, charImportance(c, o), i]).sort((a, b) => b[1] - a[1] || a[2] - b[2]).map(x => x[0]);
function titleRankOf(t, c, o) {
  if (t.id === 10) return Math.min(titleMax(t), Math.floor(titlesMaxed(c, o) / 5));
  if (t.id === 42) return MOTN_RANKS.filter(p => motnPoints(c) >= p).length;
  if (DERIVED_TITLES.has(t.id)) { const [have, need] = DERIVED_TITLES.get(t.id)(c, o); return have >= need ? titleMax(t) : 0; }
  return titleKept(t, c, o);
}
function titleMaxed(id, c, o) { const t = TITLES[id]; return !!t && titleRankOf(t, c, o) >= titleMax(t); }

/* ---------- the Checklist tab's items (My Characters' Checklist; counted on the Overview) ---------- */
const ATTR_QUESTS = { 1: [101164, 101270], 2: [100605, 100485], 3: [100985, 100984] };  // each campaign's two attribute point quests
const LAST = { 1: 124, 2: 271, 3: 528, 4: 673 };  // each campaign's last mission: Hell's Precipice, Imperial Sanctum, Abaddon's Gate, A Time for Heroes
const MARK = "Marked by hand", TICKS = "From your ticks";
// each item: id; name; known: (c) => done, from the ticks (an item with it and no mark is a fact; with mark too, a fact
// when it holds, yours to mark otherwise); needs: (c) => why it can't be marked yet, or ""; mark: it can be marked (its
// id in USER_CHECKS, kept on the character as checks); hero: its mark is that hero's tick; title: its mark is that title's tick; how: (c) => where the answer
// comes from
const CHECKLIST = [
  // (the two attribute quests of the campaign it was made in; none named while that isn't set)
  { id: "attr", name: "200 attribute points", mark: true, how: c => { const m = madeIn(c), q = ATTR_QUESTS[m]; return q ? `both ${CAMPAIGNS[m]} attribute quests, ${LINK.quest(q[0])} and ${LINK.quest(q[1])}` : "both attribute quests of its campaign"; } },
  // (the three port towns, one a campaign: a character past them can sail anywhere)
  { id: "ports", name: "All port towns unlocked", mark: true, how: () => `${LINK.area(55)}, ${LINK.area(194)} and ${LINK.area(449, "Kamadan")}` },
  // (known from the last mission's tick, which means its bonus; a campaign finished without the bonus is marked by hand)
  ...[[1, "Prophecies", "prophecies"], [2, "Factions", "factions"], [3, "Nightfall", "nightfall"], [4, "Eye of the North", "eotn"]].map(([camp, name, id]) => ({ id, name: `${name} completed`, mark: true,
    known: c => !!((c.missions[LAST[camp]] || 0) & 3),
    how: c => (((c.missions[LAST[camp]] || 0) & 3) ? `${LINK.mission(LAST[camp])} ticked` : `mark it, or tick ${LINK.mission(LAST[camp])} (either mode)`) })),
  { id: "wik", name: "War in Kryta completed", mark: true, known: c => (c.heroes || []).includes(17),
    how: c => ((c.heroes || []).includes(17) ? `${LINK.hero(17)} recruited (Hearts of the North, after it, done)` : `mark it, or recruit ${LINK.hero(17)} (Hearts of the North, after it)`) },
  // (Hearts of the North: Keiran joins at its end, The Wedding; the mark is his tick, as on the Heroes tab)
  { id: "hotn", name: "Hearts of the North completed", hero: 17, mark: true, how: () => `${LINK.hero(17)}'s tick: he joins at its end, The Wedding` },
  // (Winds of Change: Miku joins at the end of the normal-mode chain, Zei Ri at the hard-mode one's; the marks are their ticks)
  { id: "woc", name: "Winds of Change completed in NM", hero: 36, mark: true, known: c => (c.heroes || []).includes(37),
    how: () => `${LINK.hero(36)}'s tick: she joins at its end` },
  { id: "wochm", name: "Winds of Change completed in HM", hero: 37, mark: true, how: () => `${LINK.hero(37)}'s tick: he joins at its end` },
  { id: "uw", name: "The Underworld cleared", mark: true, how: () => LINK.area(72) },
  { id: "fow", name: "The Fissure of Woe cleared", mark: true, how: () => LINK.area(34) },
  { id: "sf", name: "Sorrow's Furnace cleared", mark: true, how: () => LINK.area(190) },
  { id: "deep", name: "The Deep cleared", mark: true, how: () => LINK.mission(307) },
  { id: "urgoz", name: "Urgoz's Warren cleared", mark: true, how: () => LINK.mission(266) },
  { id: "doa", name: "Domain of Anguish cleared, Mallyx beaten", mark: true, how: () => LINK.area(474) },
  { id: "outposts", name: "All outposts", mark: true, how: () => "every outpost visited (every map travel unlocked)" },
  { id: "skills", name: "All skills", mark: true, needs: c => { const n = capturableElites().filter(id => !(c.elites || []).includes(id)).length; return n ? `${n} elite${n === 1 ? "" : "s"} still to capture` : ""; },
    how: () => `mark it once every elite is captured (<a href="captures">Elite captures</a>) and the rest bought` },
  { id: "heroes", name: "All heroes recruited", known: c => USER_ALL_V3.heroes.every(h => (c.heroes || []).includes(h)),
    // (the missing ones named, three at most; the rest on the Heroes tab)
    how: c => { const left = USER_ALL_V3.heroes.filter(h => !(c.heroes || []).includes(h));
      return left.length ? `still to recruit: ${left.slice(0, 3).map(h => LINK.hero(h)).join(", ")}${left.length > 3 ? ` and <a href="characters?tab=heroes">${left.length - 3} more</a>` : ""}` : "every hero, as ticked on the Heroes tab"; } },
  // (the goal itself: Kind of a Big Deal's last rank, 30 other titles maxed, as worked out on the Titles tab)
  { id: "gwamm", name: "God Walking Amongst Mere Mortals", known: c => titleMaxed(10, c, User.data()),
    how: c => { const n = titlesMaxed(c, User.data()); return n >= 30 ? "30 titles maxed, as worked out on the Titles tab" : `${n} of 30 titles maxed, as worked out on the <a href="characters?tab=titles">Titles tab</a>`; } },
];
// a pre-Searing character's own list, all marked by hand: the bags and pack, the collector headgear, the Rune of
// Vigor and the minor runes of its primary profession, every attribute's (PRE_RUNES, by profession: 1 Warrior, 2 Ranger,
// 3 Monk, 4 Necromancer, 5 Mesmer, 6 Elementalist), one item, how saying which
const PRE_RUNES = { 1: ["Strength", "Axe Mastery", "Hammer Mastery", "Swordsmanship", "Tactics", "Absorption"], 2: ["Expertise", "Beast Mastery", "Marksmanship", "Wilderness Survival"],
  3: ["Divine Favor", "Healing Prayers", "Smiting Prayers", "Protection Prayers"], 4: ["Soul Reaping", "Blood Magic", "Curses", "Death Magic"],
  5: ["Fast Casting", "Domination Magic", "Illusion Magic", "Inspiration Magic"], 6: ["Energy Storage", "Air Magic", "Earth Magic", "Fire Magic", "Water Magic"] };
const PRE_CHECKLIST = [
  // (its own id: the post-Searing list's "outposts" mark would otherwise come along when the character leaves pre-Searing)
  { id: "preoutposts", name: "All outposts" },
  { id: "pouch", name: "Belt pouch" }, { id: "charrbags", name: "Two Charr bags" }, { id: "eqpack", name: "Equipment pack" },
  // (Devona: the mark is the hero's tick, as on the Heroes tab)
  { id: "devona", name: "Devona recruited", hero: 38 },
  { id: "headgear", name: "Collector headgear" },
  { id: "vigor", name: "Rune of Vigor" }, { id: "runes", name: "Profession runes", how: c => (PRE_RUNES[c.profession] || []).join(", ") },
  // (the goal itself, level 20: the mark is the title's tick, as on the Titles tab)
  { id: "ldoa", name: "Legendary Defender of Ascalon", title: 21, how: () => `level 20 reached; the same tick as on the <a href="characters?tab=titles">Titles tab</a>` },
].map(i => ({ how: () => "", ...i, mark: true }));
// the items for a character: a pre-Searing one's own, else the list above
const checklistFor = c => (isPreSearing(c) ? PRE_CHECKLIST : CHECKLIST);
// an item done by a character: by its ticks, or by its mark (a hero's: the hero recruited; a title's: the title maxed)
const checkDone = (c, i) => !!((i.known && i.known(c)) || (i.hero ? (c.heroes || []).includes(i.hero) : i.title ? titleMaxed(i.title, c, User.data()) : i.mark && (c.checks || []).includes(i.id)));
// how many of its items a character has
const checklistDone = c => checklistFor(c).filter(i => checkDone(c, i)).length;
// the elite areas with a checklist item, by area id: the Underworld, the Fissure of Woe, Sorrow's Furnace, the Deep,
// Urgoz's Warren, the Domain of Anguish (Gate of Anguish and its four areas)
const CHECK_AREAS = { 72: "uw", 34: "fow", 190: "sf", 307: "deep", 266: "urgoz", 474: "doa", 451: "doa", 100000: "doa", 100001: "doa", 100002: "doa", 100003: "doa" };
