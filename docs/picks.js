"use strict";
/* Picks: a few one-line things to do today, each for one character. Today's Zaishen mission with the character it
   brings closest to a Protector or Guardian title (in the mode it lacks), today's Zaishen vanquish (or Nicholas's area)
   with the character closest to its Vanquisher title, this week's bonus against the reputation title a character is
   highest on without maxing it, and a capture line: the character closest to a Skill Hunter title, so many elites short
   (linking to the captures page); the other lines' "so many from a title" link to the list of what's missing. A day with no mission or vanquish to do gets the character closest to a Protector,
   Guardian or Vanquisher title instead. Then, for a wannabe, an elite area today's bounty is in that it hasn't
   cleared. Three or four lines on a plain week, one more on a double-title one. picksHTML(now) renders them.
   The characters: the wannabe GWAMMs, and the others played (not hidden, retired or pre-Searing) only where no
   wannabe has the thing to do. Needs common.js, mytitles.js and data/captures.js. */
// the easiest capture of each elite (data/captures.js, where loaded): the ranked picks; a walk first, the shortest
const CAPS_PK = data("GW_CAPTURES")?.captures || {};
const farPick = p => (p.ranges == null ? 99 : p.ranges) + (p.kind === "walk" ? 0 : 50);
const pickChars = () => (User.broken() ? [] : User.data().chars.filter(c => !c.hidden && c.aim !== "retired" && !isPreSearing(c)));
const pickDayNo = now => Math.floor((now - new Date(now).getTimezoneOffset() * 60000) / 864e5);
// a character in a line: its icon and name, a click picks it and opens the page given (its Titles tab, say)
const who = (c, href = "characters") => `<a class="pk-who" href="${href}" data-go="${c.id}"><img src="${profImg(c.profession || 0)}" alt="">${esc(c.name)}</a>`;
const nOf = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const titlesTab = (c, html) => `<a href="characters?tab=titles" data-go="${c.id}">${html}</a>`;
// the list of what a character lacks for a title: the Missions page filtered to the campaign's missions missing in a
// mode, the Areas page to its areas not vanquished, the captures page to its elites
const missingAt = { mission: (camp, mode) => `missions?c=${camp}&d=${mode}`, vanquish: camp => `areas?c=${camp}&v=n`, elite: camp => `captures?camp=${camp}` };
const lacks = (c, href, html) => `<a href="${href}" data-go="${c.id}">${html}</a>`;

// how many a character still lacks for a campaign's title: areas, missions in a mode, elites
const vanqLeft = (c, camp) => { const got = new Set(c.vanquished || []); return vanquishIn(camp).filter(id => !got.has(id)).length; };
const missLeft = (c, camp, mode) => storyIn(camp).filter(m => !((c.missions[m] || 0) & mode)).length;
const eliteShort = (c, camp) => { const got = new Set(c.elites || []); return [90, 120, 140][camp - 1] - capturedIn(camp).filter(s => got.has(s)).length; };
// the characters in the day's order: another one leads tomorrow, so ties go round
const byDay = (cs, now) => { const t = pickDayNo(now) % Math.max(1, cs.length); return [...cs.slice(t), ...cs.slice(0, t)]; };

function picksLines(now = Date.now()) {
  const o = User.broken() ? null : User.data(), cs = byDay(pickChars(), now), slot = {};  // (a line a slot: mission, vanquish, capture, a wannabe extra, weekly, in that order)
  if (!o || !cs.length) return [];
  const cur = key => Rotation.current(ROTATIONS[key], now), least = (xs, f) => xs.reduce((b, x) => (b === null || f(x) < f(b) ? x : b), null);
  // the wannabe GWAMMs first: the others only where no wannabe has the thing to do (f: the candidates from a list)
  const wb = cs.filter(c => c.aim === "gwamm"), pref = f => { const a = wb.length ? f(wb) : []; return a.length ? a : f(cs); };
  // "That and 2 more for Protector of Cantha." (n: the things left, the one named among them), linking to the list
  const more = (c, n, title, href) => (n > 1 ? ` That and ${lacks(c, href, `${n - 1} more for ${esc(TITLES[title].name)}`)}.` : ` ${lacks(c, href, `The last one for ${esc(TITLES[title].name)}`)}.`);
  // today's mission: the character it brings closest to Guardian (HM first; NM for one that hasn't HM open) or Protector
  const zm = cur("zaishen-mission"), camp = zm?.mission && campaignOf(AREAS[zm.mission]);
  if (zm?.mission && hasModes(MISSIONS[zm.mission]) && camp && camp !== 4) {
    const need = pref(xs => xs.map(c => { const nm = !((c.missions[zm.mission] || 0) & 1), hm = !((c.missions[zm.mission] || 0) & 2); return nm || hm ? { c, mode: hm ? 2 : 1, left: missLeft(c, camp, hm ? 2 : 1) } : null; }).filter(Boolean));
    const b = least(need, x => x.left);
    if (b) { slot.mission = (`${who(b.c)} hasn't completed ${LINK.mission(zm.mission)} in ${b.mode === 1 ? "NM" : "HM"}, today's Zaishen mission.${more(b.c, b.left, (b.mode === 1 ? [13, 14, 19] : [35, 36, 37])[camp - 1], missingAt.mission(camp, b.mode))}`); }
  }
  // today's vanquish: the character closest to its Vanquisher
  const zv = cur("zaishen-vanquish");
  for (const [area, why] of [[zv?.area, "today's Zaishen vanquish"]]) {
    const vc = area && AREAS[area]?.foes && campaignOf(AREAS[area]);
    if (!vc) continue;
    // (an Eye of the North area counts for no Vanquisher title: today's vanquish there is pointed to only on
    // Northern Support week, for the double reputation points)
    if (vc === 4) { if (area !== zv?.area || cur("weekly-pve")?.bonus !== 5) continue;
      const b = pref(xs => xs.filter(c => !(c.vanquished || []).includes(area)))[0];
      if (b) { slot.vanquish = (`${who(b)} hasn't vanquished ${LINK.area(area)}, today's Zaishen vanquish: double reputation points this week, Northern Support.`); break; } continue; }
    const b = least(pref(xs => xs.filter(c => !(c.vanquished || []).includes(area))), c => vanqLeft(c, vc));
    if (b) { slot.vanquish = (`${who(b)} hasn't vanquished ${LINK.area(area)}, ${why}.${more(b, vanqLeft(b, vc), [25, 27, 29][vc - 1], missingAt.vanquish(vc))}`); break; }
  }
  // this week's bonus: a title it doubles that a character is well along on, not maxed (one of the better placed, not
  // always the best: the top three by ranks left, the day picking among them, so the week names more than one
  // character; a title not started isn't suggested; an account's title is the account's, not the character's)
  const wk = cur("weekly-pve"), ts = (BONUS_TITLES[wk?.bonus] || []).map(t => TITLES[t]).filter(Boolean);
  if (ts.length) { const cands = pref(xs => xs.flatMap(c => ts.map(t => ({ c, t, r: titleRankOf(t, c, o), m: titleMax(t) })).filter(x => x.r > 0 && x.r < x.m))).sort((a, b) => (a.m - a.r) - (b.m - b.r)).slice(0, 3);
    const x = cands.length ? cands[(pickDayNo(now) * 7 + 3) % cands.length] : null;
    if (x) slot.weekly = (`${x.t.scope === "account" ? `${o.accounts.length > 1 ? `${esc(acctSaid(o, x.c))} is` : "The account is"} ${titlesTab(x.c, `${x.r}/${x.m} ${esc(x.t.name)}`)}` : `${who(x.c)} is ${titlesTab(x.c, `${x.r}/${x.m} ${esc(x.t.name)}`)}`}, and this week is ${esc(BONUSES[wk.bonus].name)}: double points.`); }
  // the rest: a capture line always (the character closest to a Skill Hunter title, however far), and a mission or
  // vanquish line only where today gave none (the character closest to a Protector, Guardian or Vanquisher title)
  const used = new Set(Object.values(slot).map(l => +l.match(/data-go="(\d+)"/)?.[1]).filter(Boolean));
  const nearest = xs => least(xs.filter(x => x.n > 0), x => x.n), near = f => nearest(pref(xs => { const fresh = xs.filter(c => !used.has(c.id)); return f(fresh.length ? fresh : xs).filter(x => x.n > 0); }));
  // (a mission or area named: the first one left, in the campaign's order)
  if (!slot.mission) { const x = near(xs => xs.flatMap(c => [1, 2, 3].flatMap(k => [1, 2].map(mode => ({ c, k, mode, n: missLeft(c, k, mode) })))));
    if (x) { const m = storyIn(x.k).find(id => !((x.c.missions[id] || 0) & x.mode));
      slot.mission = (`${zm?.mission && camp && camp !== 4 ? "Today's Zaishen mission is done by all; " : ""}${who(x.c)} hasn't completed ${LINK.mission(m)} in ${x.mode === 1 ? "NM" : "HM"}.${more(x.c, x.n, (x.mode === 1 ? [13, 14, 19] : [35, 36, 37])[x.k - 1], missingAt.mission(x.k, x.mode))}`); } }
  if (!slot.vanquish) { const x = near(xs => xs.flatMap(c => [1, 2, 3].map(k => ({ c, k, n: vanqLeft(c, k) }))));
    if (x) { const a = vanquishIn(x.k).find(id => !(x.c.vanquished || []).includes(id));
      slot.vanquish = (`${zv?.area && campaignOf(AREAS[zv.area]) !== 4 ? "Today's Zaishen vanquish is done by all; " : ""}${who(x.c)} hasn't vanquished ${LINK.area(a)}.${more(x.c, x.n, [25, 27, 29][x.k - 1], missingAt.vanquish(x.k))}`); } }
  // the capture line goes to whoever is closest, named above or not: that is the good progression; today's bounty's
  // boss carrying an elite that character lacks leads the line when the elite counts for the title, else it's added
  { const x = nearest(pref(xs => xs.flatMap(c => [1, 2, 3].map(k => ({ c, k, n: eliteShort(c, k), what: "elite", title: [24, 26, 28][k - 1], href: missingAt.elite(k) }))).filter(x => x.n > 0)));
    if (x) {
      const zb = cur("zaishen-bounty"), got = new Set(x.c.elites || []), e = zb?.creature ? eliteAt(zb.creature, zb.area).filter(id => isCapturable(SKILLS[id]) && !got.has(id)) : [];
      // (the bounty's elite leads whatever campaign it is from: the title named is that campaign's, a Core elite the
      // nearest title's)
      if (e.length) { const k2 = [1, 2, 3].includes(SKILLS[e[0]].campaign) ? SKILLS[e[0]].campaign : x.k;
        slot.capture = (`${who(x.c)} hasn't capped ${andList(e.map(id => LINK.skill(id)))}, which today's Zaishen bounty ${LINK.boss(zb.creature)} has.${more(x.c, eliteShort(x.c, k2), [24, 26, 28][k2 - 1], missingAt.elite(k2))}`); }
      else {
        // (no such bounty: the easiest elite left to capture, by our ranked picks, data/captures.js)
        const left = capturedIn(x.k).filter(id => !got.has(id) && CAPS_PK[id]), best = least(left, id => farPick(CAPS_PK[id][0])), pk = best && CAPS_PK[best][0];
        if (pk) slot.capture = (`${who(x.c)} hasn't capped ${LINK.skill(best)}, the easiest at hand: ${pk.kind === "walk" && pk.from ? `${pk.ranges ?? "?"} ranges from ${LINK.area(pk.from)}` : pk.kind === "mission" ? `in the mission ${LINK.area(pk.area)}` : pk.kind === "dungeon" ? `in the dungeon ${LINK.area(pk.area)}` : `in ${LINK.area(pk.area)}`}.${more(x.c, x.n, x.title, x.href)}`);
        else slot.capture = (`${who(x.c)} is ${lacks(x.c, x.href, `${nOf(x.n, "elite")} from ${esc(TITLES[x.title].name)}`)}.`); } } }
  // one more, for a wannabe: an elite area today's bounty is in that it hasn't cleared
  const extra = [
    () => { const zb = cur("zaishen-bounty"), id = zb?.area && typeof CHECK_AREAS !== "undefined" && CHECK_AREAS[zb.area];
      // (not the Domain of Anguish: its item is Mallyx beaten, which a bounty in one of its quarters says nothing about)
      const c = id && id !== "doa" && wb.find(c => NEEDS.check(c, id)); return c ? `${who(c)} hasn't cleared ${LINK.area(zb.area)}, where today's Zaishen bounty ${LINK.boss(zb.creature)} is.` : null; },
  ];
  for (const f of extra) { const l = f(); if (l) { slot.extra = l; break; } }
  return [slot.mission, slot.vanquish, slot.capture, slot.extra, slot.weekly].filter(Boolean);
}
const picksHTML = (now = Date.now()) => { const ls = picksLines(now); return ls.length ? `<ul class="picks">${ls.map(l => `<li>${l}</li>`).join("")}</ul>` : `<p class="dim">Nothing in particular today.</p>`; };
