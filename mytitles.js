"use strict";
/* A character's titles, worked out from its progress (User, in common.js): the ones reached through its ticks or
   through other titles, the others as kept on it or its account. Used by My titles (titles) and the User page.
   Needs game/titles.js, game/skills.js, game/ground.js and game/missions.js. Every function takes the character c and
   the progress o it's in. */
const titleMax = t => t.max ?? t.ranks.length;
// what Skill Hunter counts in a campaign: its own elites and the Core ones its bosses carry (by where they're captured)
const capturedIn = camp => Object.entries(SKILLS).filter(([, s]) => s.elite && !s.pvp_only && (s.campaign === camp || s.campaign === 0)
  && (s.acquisition || []).some(a => a.capture && (s.campaign === camp || AREAS[a.area]?.campaign === camp))).map(([id]) => +id);
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
  if (DERIVED_TITLES.has(t.id)) { const [have, need] = DERIVED_TITLES.get(t.id)(c, o); return have >= need ? titleMax(t) : 0; }
  return titleKept(t, c, o);
}
function titleMaxed(id, c, o) { const t = TITLES[id]; return !!t && titleRankOf(t, c, o) >= titleMax(t); }
