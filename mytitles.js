"use strict";
/* A character's titles, worked out from its progress (User, in common.js): the ones reached through its ticks or
   through other titles, the others as kept on it or its account. Used by My Characters (characters).
   Needs game/titles.js, game/skills.js, game/ground.js and game/missions.js. Every function takes the character c and
   the progress o it's in. */
const titleMax = t => t.max ?? t.ranks.length;
// what Skill Hunter counts for a campaign: its own elites and the Core ones (Core ones count for all three, however
// they were got: captured anywhere or from a tome); not the PvP versions
const capturedIn = camp => Object.entries(SKILLS).filter(([, s]) => s.elite && !s.pvp_only && (s.campaign === camp || s.campaign === 0)).map(([id]) => +id);
// the story missions of a campaign (by the area they're played in)
const storyIn = camp => Object.values(MISSIONS).filter(m => m.kind === "story" && AREAS[m.id]?.campaign === camp).map(m => m.id);
// the areas of a campaign to vanquish (those with foes to kill for it)
const vanquishIn = camp => Object.values(AREAS).filter(l => l.foes && l.campaign === camp).map(l => l.id);
// the derived titles: [title id, (c, o) => [have, need, unit]]; a title is reached when have >= need
const DERIVED_TITLES = new Map([
  ...[[24, 1, 90], [26, 2, 120], [28, 3, 140]].map(([id, camp, need]) => [id, c => { const got = new Set(c.elites); return [capturedIn(camp).filter(s => got.has(s)).length, need, "elites"]; }]),
  ...[[13, 1, 25, 1], [14, 2, 13, 1], [19, 3, 20, 1], [35, 1, 25, 2], [36, 2, 13, 2], [37, 3, 20, 2]].map(([id, camp, need, mode]) =>
    [id, c => [storyIn(camp).filter(m => (c.missions[m] || 0) & mode).length, need, `missions in ${mode === 1 ? "NM" : "HM"}`]]),
  ...[[25, 1], [27, 2], [29, 3]].map(([id, camp]) => [id, c => {
    const got = new Set(c.vanquished), all = vanquishIn(camp);
    return [all.filter(l => got.has(l)).length, all.length, "areas vanquished"];
  }]),
  ...[[31, [35, 36, 37]], [32, [24, 26, 28]], [30, [1, 2, 18]], [33, [25, 27, 29]]].map(([id, of]) =>
    [id, (c, o) => [of.filter(x => titleMaxed(x, c, o)).length, 3, "campaigns"]]),
]);
// Master of the North's points: 5 an EotN mission in NM and 10 in HM, 10 a dungeon in NM and 20 in HM, 15 an area
// vanquished, from the character's ticks; and 1 a percent of the Eye of the North map explored, worked out on My
// Characters from the points the game shows and kept on the character (eotnMap). The 18 dungeons it counts: the Eye of
// the North's, with Secret Lair of the Snowmen (701) and not Destruction's Depths (a mission, counted with them)
const MOTN_DUNGEONS = [...USER_ALL.dungeons.filter(id => AREAS[id]?.campaign === 4 && !MISSIONS[id]), 701];
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
// the other titles maxed, that Kind of a Big Deal counts
const titlesMaxed = (c, o) => Object.values(TITLES).filter(x => x.id !== 10 && titleMaxed(x.id, c, o)).length;
// a title's rank: worked out, or as kept; Kind of a Big Deal: a rank for every 5 other titles maxed
function titleRankOf(t, c, o) {
  if (t.id === 10) return Math.min(titleMax(t), Math.floor(titlesMaxed(c, o) / 5));
  if (t.id === 42) return MOTN_RANKS.filter(p => motnPoints(c) >= p).length;
  if (DERIVED_TITLES.has(t.id)) { const [have, need] = DERIVED_TITLES.get(t.id)(c, o); return have >= need ? titleMax(t) : 0; }
  return titleKept(t, c, o);
}
function titleMaxed(id, c, o) { const t = TITLES[id]; return !!t && titleRankOf(t, c, o) >= titleMax(t); }
