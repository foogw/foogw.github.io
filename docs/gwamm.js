"use strict";
/* The GWAMM route (gwamm; Guides › Tools): what the picked character should do next on an efficient way to God Walking
   Amongst Mere Mortals, in phases. First the port towns (its own campaign's missions up to its port, then the boats);
   then the heroes of the meta team, the easiest first, with the missions that lead to each; then the next mission of
   each campaign, one in normal mode and one in hard mode (the one left whose Zaishen day comes first), and the next three Zaishen
   vanquishes; then all the vanquishes, the maps, the elites left, and the Eye of the North's dungeons and reputations with
   topping up the titles the route left short. Every mission with its
   bonus, capturing the elites there and mapping on the way, the right storybook on you. Worked out from the character's
   ticks and marks (My Characters), nothing kept here. */
{
  const els = { who: $("gw-who"), goals: $("gw-goals"), main: $("gw-main") };
  const ckUser = () => !User.broken();

  /* ---------- the hero team ---------- */
  // the heroes a meta team is built from, by profession: three Mesmers, two Necromancers, a Ritualist; Razah is a
  // wildcard, filling whatever is short (a Mesmer first)
  const KEY_HEROES = { 5: [24, 39, 1], 4: [14, 21, 4], 8: [25] }, TEAM = [[5, 3], [4, 2], [8, 1]], RAZAH = 15;
  const teamOf = c => { const got = new Set(c.heroes || []);
    const team = TEAM.map(([p, n]) => { const have = KEY_HEROES[p].filter(h => got.has(h)); return { prof: p, need: n, have: Math.min(n, have.length), missing: KEY_HEROES[p].filter(h => !got.has(h)) }; });
    const short = team.find(t => t.have < t.need); if (got.has(RAZAH) && short) { short.have++; short.razah = true; }
    return team; };
  const teamReady = c => teamOf(c).every(t => t.have >= t.need);
  const teamCount = c => teamOf(c).reduce((s, t) => s + t.have, 0);
  // the way to each, the easiest tier first: Gwen, Olias and Xandra for the coming; then Althea and Livia; then Norgu
  // (and Master of Whispers, the other Nightfall Necromancer); the long way to Razah last. how: what to do; camp and
  // upto: the campaign's story missions needed, up to that order (none: just getting there)
  const WAYS = {
    24: { how: "reach the Eye of the North: the quest at level 10 from any port town, to Boreal Station; she joins after The First Vision at the Scrying Pool" },
    14: { how: "from Consulate Docks, Dinja's All for One and One for Justice: a mini-mission in Bloodstone Fen, from Lion's Arch", camp: 3, upto: 4 },
    25: { how: "Gunnar's Hold, past Norrhart Domains from the Eye: The Norn Fighting Tournament, she joins once beaten (at random, so a few rounds)" },
    39: { how: "Ascalon City, after the Searing: The Duke's Daughter → Althea's Ashes → Elegy for Those Left Behind → The Cost of Survival → The Dreamer and the Zealot (Reforged only)" },
    21: { how: "the Asura line from Gadd's Encampment: Finding Gadd, then Finding the Bloodstone, she joins at its end", camp: 4, upto: 1 },
    1: { how: "Dzagonur Bastion or Dasha Vestibule, then Brains or Brawn (choose Goren) → The Role of a Lifetime; or Gain Norgu after Abaddon's Gate", camp: 3, upto: 10 },
    4: { how: "from Consulate Docks, Secrets in the Shadow → To Kill a Demon, choosing him over Margrid", camp: 3, upto: 4 },
    15: { how: "Abaddon's Gate done: Finding a Purpose in the Realm of Torment", camp: 3, upto: 99 },
  };
  const TIERS = [[24, 14, 25], [39, 21], [1, 4], [15]];

  /* ---------- the storybooks (the Guild Wars Wiki): their pages, by mission ----------
     (the hard-mode books only: Young Heroes of Tyria fills in normal mode but is left out, its rewards no title) */
  const BOOKS = [
    { id: "fsp", name: "The Flameseeker Prophecies", from: "Gordon Ecker in Lion's Arch (the hard-mode one at level 20)",
      pages: [[15, 1], [16, 2], [11, 3], [10, 4], [12, 5], [73, 6], [19, 7], [116, 8], [117, 9], [118, 10], [38, 11], [120, 12], [22, 13], [24, 14], [23, 15], [122, 16], [123, 17], [124, 18]] },
    { id: "shiro", name: "Shiro's Return", from: "Anja or Gorani in Kaineng Center",
      pages: [[215, 1], [260, 2], [261, 3], [262, 4], [263, 5], [264, 6], [267, 7], [268, 8], [204, 9], [270, 10], [271, 11]] },
    { id: "nf", name: "Night Falls", from: "Captain Ahkenchu in the Sunspear Great Hall, or the Source of Whispers in the Chantry of Secrets",
      pages: [[517, 1], [453, 2], [458, 3], [459, 4], [460, 5], [427, 6], [518, 7], [519, 8], [520, 9], [521, 10], [522, 11], [523, 12], [524, 13], [525, 14], [526, 15], [527, 16], [528, 17]] },
    { id: "hh", name: "Hero's Handbook", from: "Gedrel of Ascalon at the Eye of the North, Kodan or Tyr the Skaald in Gunnar's Hold, Lexx in Rata Sum",
      pages: [["q100424", 1], ["q100443", 2], [665, 3], [666, 4], [669, 5], ["q100389", 6], [653, 7], [655, 8], [654, 9], ["q100441", 10], [658, 11], [661, 12], [664, 13], ["q100340", 14], [670, 15], [673, 16]] },
  ];
  const BOOK_OF = new Map();  // mission id -> [book, page]
  for (const b of BOOKS) for (const [m, p] of b.pages) if (typeof m === "number") BOOK_OF.set(m, [b, p]);
  // (a note on the hard-mode lines only: the pages fill in hard mode)
  const bookNote = (id, hm) => { const bp = BOOK_OF.get(id); if (!bp || !hm) return "";
    const [b, p] = bp; return `<span class="gw-book" title="From ${esc(b.from)}; forgot it: a page can be bought for 100 gold within 30 days">📖 ${esc(b.name)} (Hard Mode), page ${p}</span>`; };

  /* ---------- the campaigns' missions ---------- */
  const STORY = {};  // campaign -> its story missions, in order
  for (const [id, m] of Object.entries(MISSIONS)) if (m.kind === "story") { const c = missionCampaign(m); if (c) (STORY[c] ??= []).push({ id: +id, m, order: m.order ?? 99 }); }
  for (const l of Object.values(STORY)) l.sort((a, b) => a.order - b.order);
  // a foreign character's first mission (the entry: D'Alessio Seaboard, Vizunah Square, Consulate Docks), and the last
  // one a native does before reaching its port town (Gates of Kryta before Lion's Arch, Zen Daijun before Kaineng Center,
  // Consulate Docks to sail from Kamadan)
  const ENTRY = { 1: 8, 2: 3, 3: 4 }, PORT = { 1: 7, 2: 2, 3: 4 }, PORT_TOWN = { 1: 55, 2: 194, 3: 449 };
  const nm = (c, id) => !!((c.missions[id] || 0) & 1), hm = (c, id) => !!((c.missions[id] || 0) & 2);
  const ports = c => (c.checks || []).includes("ports");
  // the first missions not done of a list, n orders' worth: those sharing an order are a branch (either)
  const groups = (list, n = 2) => { const out = []; let cur = null; for (const x of list) { if (cur && cur[0].order === x.order) cur.push(x); else { if (out.length >= n) break; cur = [x]; out.push(cur); } } return out; };
  // a campaign's missions left for the character, from where it comes in: a native from the start, a foreigner from the
  // entry (the Eye of the North: everyone from the start)
  const left = (c, camp) => { const from = camp === madeIn(c) || camp === 4 ? 0 : ENTRY[camp]; return (STORY[camp] || []).filter(x => !nm(c, x.id) && x.order >= from); };

  /* ---------- what's there: elites, heroes and ground ---------- */
  // the elites to capture in an area (a mission's too), from where the bosses stand (data/bosses.js), the quest-only spots left out
  const AREA_ELITES = new Map();
  // (the version of the boss standing there: eliteAt, common.js)
  for (const [cid, spots] of Object.entries(GW_BOSS_SPOTS.spots)) for (const s of spots) if (!s[3]) for (const e of eliteAt(cid, s[0])) if (isCapturable(SKILLS[e])) (AREA_ELITES.get(s[0]) || AREA_ELITES.set(s[0], new Set()).get(s[0])).add(e);
  // the explorables next to an outpost
  // (a Prophecies mission's outpost touches only its town: then the explorables next to that town)
  const nextTo = id => [...new Set((AREAS[id]?.exits || []).map(x => x.to))].filter(a => AREAS[a]);
  const around = outpost => { const d = nextTo(outpost), e = d.filter(id => AREAS[id].type === 2);
    return e.length ? e : [...new Set(d.filter(id => AREAS[id].type !== 2).flatMap(nextTo))].filter(id => AREAS[id].type === 2); };
  // the elites a character lacks in a mission and around its outpost: all of them, a GWAMM wants every one
  const elitesHTML = (c, id, outpost) => {
    const got = new Set(c.elites), ids = new Set([...(AREA_ELITES.get(id) || []), ...around(outpost).flatMap(a => [...(AREA_ELITES.get(a) || [])])]);
    const miss = [...ids].filter(e => !got.has(e)).sort((a, b) => SKILLS[a].profession - SKILLS[b].profession || cmpStr(SKILLS[a].name, SKILLS[b].name));
    return miss.length ? `<span class="gw-caps">🎯 cap ${miss.map(e => LINK.skill(e)).join(" ")}</span>` : "";
  };
  // mapping: what the mission itself shows; the explorables around are vanquished later, on their Zaishen days
  // (not in the Eye of the North: no Cartographer title there)
  const groundHTML = x => (missionCampaign(x.m) === 4 ? "" : `<span class="gw-map">🧭 map what you can on the way</span>`);
  // the bonus: Prophecies names it (the flagged objective); Factions and Nightfall have the Master's reward, said with
  // what earns it (rewards.tiers.master, by time or a count kept alive) or the flagged objective; the Eye of the North none
  const masterSaid = r => { const t = r?.tiers?.master; if (!t) return "";
    if (r.by === "time") return t.startsWith("<") ? `under ${t.slice(1).trim()}` : t.startsWith("≤") ? `${t.slice(1).trim()} or less` : t;
    return `${t} ${r.by}`; };
  const bonusHTML = x => { const camp = missionCampaign(x.m), b = (x.m.objectives || []).filter(o => o[2]).map(o => o[1]), m = masterSaid(x.m.rewards);
    return camp === 4 ? "" : `<span class="gw-bonus">⭐ ${camp === 1 ? (b.length ? `bonus: ${esc(b.join(" "))}` : "with the bonus") : `Master's reward${m || b.length ? `: ${esc(m || b.join(" "))}` : ""}`}</span>`; };

  // the next Zaishen day of a mission (0: today), from its rotation
  const zDays = (r, is) => { if (!r) return null; const n = r.entries.length, k = Rotation.period(r); for (let i = 0; i < n; i++) if (is(Rotation.entry(r, k + i))) return i; return null; };

  /* ---------- the lines: a card with what matters there, or the bare name ---------- */
  // every card names the mode to do it in, with one tick for that mode (the page draws again on "userchange"), so a
  // mission is marked done here; in hard mode its Zaishen day too (the bare lines, the missions on
  // the way to a hero, have no ticks: the hero's Recruited tick is the mark there)
  // (one tick, for the card's mode: the shared tick's shape, so common.js's handler saves it)
  const ticks = (c, x, hard) => { const b = hard ? 2 : 1, on = !!((c.missions[x.id] || 0) & b);
    return `<span class="uticks" data-part="missions" data-id="${x.id}"><button type="button" class="utick" data-mode="${b}" aria-pressed="${on}" title="Done in ${hard ? "hard" : "normal"} mode: click to change"><span class="ubox"></span>Completed in ${hard ? "HM" : "NM"}</button></span>`; };
  const missionLine = (c, x, hard = false, bare = false) => bare ? `<li class="gw-bare"><b>${LINK.mission(x.id)}</b></li>`
    : `<li class="gw-card"><div class="gw-card-head"><b>${LINK.mission(x.id)}</b>${ticks(c, x, hard)}</div><div class="gw-with">${[`<span class="gw-rec"><b>${hard ? "hard" : "normal"} mode</b></span>`, hard && zText(x.id) ? `<span class="gw-z">📅 ${zText(x.id)}</span>` : "", hard ? "" : bonusHTML(x), bookNote(x.id, hard), elitesHTML(c, x.id, x.m.outpost), groundHTML(x)].filter(Boolean).join("")}</div></li>`;
  const groupLines = (c, gs, hard = false, bare = false) => gs.map(g => (g.length > 1 ? `<li class="gw-either"><span class="dim">either</span><ul>${g.map(x => missionLine(c, x, hard, bare)).join("")}</ul></li>` : missionLine(c, g[0], hard, bare))).join("");

  /* ---------- phase 0: the campaign it was made in ---------- */
  const campaignHTML = c => `<section><h2>Where was ${charLabel(c)} made?</h2><p class="dim">The route starts from there. Pick it here or on its <a href="characters?tab=edit">Edit</a> tab.</p>
    <div class="gw-btns">${[1, 2, 3].map(k => `<button type="button" class="gw-btn" data-camp="${k}">${esc(CAMPAIGNS[k])}</button>`).join("")}</div></section>`;

  /* ---------- phase 1: the port towns ---------- */
  function portsHTML(c) {
    // (the next mission after the last one done, up to the port's: one skipped on the way, a run past it or a tick
    // forgotten, isn't sent back for until the ports are reached)
    const camp = madeIn(c), upto = (STORY[camp] || []).filter(x => x.order <= PORT[camp]), last = Math.max(-1, ...upto.filter(x => nm(c, x.id)).map(x => x.order));
    const next = groups(upto.filter(x => !nm(c, x.id) && x.order > last), 1);
    // (a Tyrian can be run to Lion's Arch; a Canthan or an Elonian plays to its port: the ferry wants Zen Daijun done, the
    // ship Consulate Docks)
    const way = camp === 1 ? `either a run to ${LINK.area(55)} or ${esc(CAMPAIGNS[camp])}'s missions up to it` : `${esc(CAMPAIGNS[camp])}'s missions up to ${LINK.area(PORT_TOWN[camp])}`;
    return `<section><h2>Reach the port towns</h2><p class="dim">${LINK.area(55)}, ${LINK.area(194)} and ${LINK.area(449, "Kamadan")}: ${way}, then the other two by boat. Playing the missions: each with its bonus, capturing the elites there and mapping on the way.</p>
      ${next.length ? `<ul class="gw-list">${groupLines(c, next)}</ul>` : `<p class="dim">The missions to ${LINK.area(PORT_TOWN[camp])} are done: the boats are left.</p>`}
      <div class="gw-btns"><button type="button" class="gw-btn" data-check="ports">Reached all port towns</button> <span class="dim">(the Checklist's mark)</span></div>
      <p class="dim gw-then">Then: the meta team's heroes, then the three campaigns side by side.</p></section>`;
  }

  /* ---------- phase 2: the heroes ---------- */
  function heroesHTML2(c) {
    const team = teamOf(c), short = new Set(team.filter(t => t.have < t.need).map(t => t.prof)), got = new Set(c.heroes || []);
    const want = h => !got.has(h) && (h === RAZAH ? short.size > 0 : short.has(HEROES[h].profession));
    const line = h => { const w = WAYS[h], ms = w.camp ? groups(left(c, w.camp).filter(x => x.order <= w.upto), 99) : [];
      return `<li><img src="${profImg(HEROES[h].profession)}" alt=""><div><b>${LINK.hero(h)}</b>${heroTick(h, false, "Recruited")}${h === RAZAH ? ' <span class="dim">any profession: whatever is short</span>' : ""} <span class="dim">${esc(w.how)}</span>${ms.length ? `<ul class="gw-list gw-path"><li class="dim gw-sub">Missions on the way</li>${groupLines(c, ms, false, true)}</ul>` : ""}</div></li>`; };
    const tiers = TIERS.map(t => t.filter(want)).filter(t => t.length);
    return `<section><h2>Get the heroes</h2><p class="dim">The meta team: three Mesmers, two Necromancers, a Ritualist, ${teamCount(c)} of 6 so far. The easiest first; Razah fills whatever stays short. No hard mode until they're all there.</p>
      ${tiers.map(t => `<ul class="gw-heroes-list gw-tier">${t.map(line).join("")}</ul>`).join("")}
      <p class="dim gw-then">Then: the next mission of each campaign, in normal and hard mode, and the vanquishes on the Zaishen days.</p></section>`;
  }

  /* ---------- phase 3: the three paths, the vanquishes ---------- */
  // a campaign's next missions, one in each mode: in normal mode the first in order not done, a foreigner from its entry
  // to the end and only then the ones before the entry; in hard mode (the team there) the one left whose Zaishen day
  // comes first, whatever its normal-mode tick
  const Z_MISSION = ROTATIONS["zaishen-mission"];
  const zOf = id => zDays(Z_MISSION, e => e.mission === id);
  const zText = id => { const d = zOf(id); return d === null ? "" : d === 0 ? "Zaishen mission <b>today</b>" : `Zaishen mission in ${d} day${d === 1 ? "" : "s"}`; };
  function pathsHTML(c) {
    const parts = [], ready = teamReady(c);
    for (const camp of [1, 2, 3, 4]) {
      const from = camp === madeIn(c) || camp === 4 ? 0 : ENTRY[camp], undone = (STORY[camp] || []).filter(x => !nm(c, x.id));
      const nmNext = groups(undone.filter(x => x.order >= from), 1)[0] || groups(undone.filter(x => x.order < from), 1)[0] || null;
      // (hard mode: the one left whose Zaishen day comes first, whatever its normal-mode tick)
      const hmNext = ready && hmOpen(c, camp) ? (STORY[camp] || []).map(x => [x, zOf(x.id)]).filter(([x, d]) => !hm(c, x.id) && d !== null).sort((a, b) => a[1] - b[1])[0]?.[0] || null : null;
      // (a campaign done in both modes keeps its column, saying so)
      const done = !nmNext && !(STORY[camp] || []).some(x => !hm(c, x.id));
      parts.push(`<div class="gw-path-col"><h3>${esc(CAMPAIGNS[camp])}${done ? ' <span class="dim">done</span>' : ""}</h3>${done ? `<p class="dim">Every mission done in both modes.</p>` : `<ul class="gw-list">${nmNext ? groupLines(c, [nmNext]) : ""}${hmNext ? missionLine(c, hmNext, true) : ""}</ul>`}</div>`);
    }
    return parts.length ? `<section><h2>Next missions</h2><p class="dim">The next of each campaign in normal mode, and in hard mode the one left whose Zaishen day comes first.</p><div class="gw-paths">${parts.join("")}</div></section>` : "";
  }
  // the vanquishes: the next three Zaishen days (today first) whose area is left, in a campaign open in hard mode
  // hard mode is taken as open everywhere: it unlocks for the whole account once any character has finished the campaign,
  // and a GWAMM's account has
  const hmOpen = (c, camp) => !!camp;
  const zWhen = d => `<span class="dim gw-z">Zaishen day ${d === 0 ? "<b>today</b>" : d === 1 ? "tomorrow" : `in ${d} days`}</span>`;
  const zNext = (r, keep, n = 3) => { const out = [], k = Rotation.period(r); for (let i = 0; i < r.entries.length && out.length < n; i++) { const e = Rotation.entry(r, k + i); if (keep(e)) out.push({ e, d: i }); } return out; };
  // stage 4: the next three Zaishen days; stage 5 (every mission done): all left in the three campaigns, a column each,
  // the Zaishen days first in their order, then the areas with no Zaishen day; each with its tick (the Eye of the North's
  // areas count for no Vanquisher title: they come with its reputations, stage 8)
  const vanqLeft = (c, camps = [1, 2, 3]) => { const vq = new Set(c.vanquished || []); return camps.flatMap(vanquishIn).filter(id => !vq.has(id)); };  // (vanquishIn: mytitles.js)
  const vanqRow = (c, id, when) => `<li class="gw-bare"><b>${LINK.area(id)}</b>${vanqTick(id, false)}${when}<div class="gw-with">${elitesHTML(c, id, null)}</div></li>`;
  // the areas left, the Zaishen days first in their order: [id, when]
  const vanqOrder = (c, ids) => { const r = ROTATIONS["zaishen-vanquish"], left = new Set(ids);
    const zs = zNext(r, e => left.has(e.area), Infinity), seen = new Set(zs.map(x => x.e.area));
    return [...zs.map(x => [x.e.area, zWhen(x.d)]), ...ids.filter(id => !seen.has(id)).sort((a, b) => cmpStr(AREAS[a].name, AREAS[b].name)).map(id => [id, `<span class="dim gw-z">no Zaishen day</span>`])]; };
  function vanqHTML(c) {
    const vq = new Set(c.vanquished || []), r = ROTATIONS["zaishen-vanquish"];
    // (the three campaigns' areas: the Eye of the North's count for no Vanquisher title)
    const zs = zNext(r, e => e.area && AREAS[e.area]?.foes && !vq.has(e.area) && [1, 2, 3].includes(campaignOf(AREAS[e.area])));
    return zs.length ? `<section><h2>Next vanquishes</h2><p class="dim">The next three Zaishen days; map as you go.</p><ul class="gw-list">${zs.map(x => vanqRow(c, x.e.area, zWhen(x.d))).join("")}</ul></section>` : "";
  }
  function vanqAllHTML(c) {
    // (a campaign with none left: its column says so)
    const cols = [1, 2, 3].map(camp => { const ids = vanqLeft(c, [camp]); return `<div class="gw-path-col"><h3>${esc(CAMPAIGNS[camp])} <span class="dim">${ids.length ? ids.length : "done"}</span></h3>${ids.length ? `<ul class="gw-list">${vanqOrder(c, ids).map(([id, when]) => vanqRow(c, id, when)).join("")}</ul>` : `<p class="dim">Every area vanquished.</p>`}</div>`; }).join("");
    return `<section><h2>Vanquishes</h2><p class="dim">${vanqLeft(c).length} left, by Zaishen day; capture and map as you go.</p><div class="gw-paths">${cols}</div></section>`;
  }

  /* ---------- stages 6 to 8: what the missions and vanquishes leave ---------- */
  const rankOf = (id, c, o) => titleRankOf(TITLES[id], c, o), maxOf = id => titleMax(TITLES[id]);
  // (every title here links to the Titles tab, where its rank is set: the title pages say nothing to do)
  const titleHref = () => "characters?tab=titles";
  const titleLine = (id, c, o, note = "") => { const r = rankOf(id, c, o), m = maxOf(id);
    return `<li class="gw-bare${r >= m ? " done" : ""}"><b><a href="${titleHref(id)}">${esc(TITLES[id].name)}</a></b> <span class="dim">rank ${r} of ${m}${note ? ` · ${note}` : ""}</span></li>`; };
  const titlesLeft = (ids, c, o) => ids.filter(id => rankOf(id, c, o) < maxOf(id));
  // stage 6: the three continents' maps, what the missions and vanquishes left unmapped
  const CARTO = [1, 2, 18];
  const cartoHTML = (c, o) => `<section><h2>Cartography</h2><p class="dim">Each continent's Cartographer is at 100% of its map: the missions and vanquishes have shown you most of it. Tick the ranks on <a href="characters?tab=titles">My Characters</a> as they come.</p>
    <ul class="gw-list">${CARTO.map(id => titleLine(id, c, o)).join("")}</ul></section>`;
  // stage 7: the elites left, the easiest capture first (data/captures.js: the pick ranked first, closest from its
  // start), the rest on the Elite captures tool
  const CAPS = data("GW_CAPTURES")?.captures || {};
  const far = p => (p.ranges == null ? 99 : p.ranges) + (p.kind === "walk" ? 0 : 50);
  function huntHTML(c, o) {
    const got = new Set(c.elites), left = capturableElites().filter(id => !got.has(id));
    const easy = left.filter(id => CAPS[id]).sort((a, b) => far(CAPS[a][0]) - far(CAPS[b][0]) || cmpStr(SKILLS[a].name, SKILLS[b].name)).slice(0, 3);
    const line = id => { const p = CAPS[id][0]; return `<li class="gw-bare"><b>${LINK.skill(id)}</b>${eliteTick(id, false)}<span class="dim">${LINK.boss(p.boss)} · ${LINK.area(p.area)}${p.from ? ` · from ${LINK.area(p.from)}` : p.kind === "mission" ? " · in the mission" : " · in the dungeon"}${p.ranges != null ? ` · ${p.ranges} r` : ""}</span></li>`; };
    return `<section><h2>Elite captures</h2><p class="dim">${left.length} elite${left.length === 1 ? "" : "s"} left; the easiest first, the whole list with maps on <a href="captures">Elite captures</a>.</p>
      <ul class="gw-list">${easy.map(line).join("")}</ul>
      <ul class="gw-list">${titlesLeft([24, 26, 28, 32], c, o).map(id => titleLine(id, c, o)).join("")}</ul></section>`;
  }
  // stage 8: Master of the North alone, while dungeons are left: each in hard mode, on its Zaishen Bounty day
  // stage 9, topping up: the four reputations (the Eye of the North's vanquishes, for what they bring) and whatever other
  // character title isn't at its top (Sunspear, Lightbringer, Survivor, the consumables)
  // (Survivor: a stretch of 1,337,500 experience without a death, any time; the greatest stretch counts, so a death
  // only starts a new one)
  const NORTH = [38, 39, 40, 41], REST = [17, 20, 9, 7, 34, 43];
  function northHTML(c, o) {
    const r = ROTATIONS["zaishen-bounty"], left = USER_ALL_V3.dungeons.filter(id => !((c.dungeons[id] || 0) & 2));
    const bounty = new Map(zNext(r, e => e.area && left.includes(e.area), Infinity).map(x => [x.e.area, x.d]));
    const dgs = [...left].sort((a, b) => (bounty.get(a) ?? 999) - (bounty.get(b) ?? 999) || cmpStr(AREAS[a].name, AREAS[b].name));
    return `<section><h2>Master of the North</h2><p class="dim">The Eye of the North's dungeons in hard mode, on their Zaishen Bounty days.</p>
      ${dgs.length ? `<ul class="gw-list">${dgs.map(id => `<li class="gw-bare"><b>${LINK.area(id)}</b>${doneTicks("dungeons", id, c.dungeons[id] || 0)}${bounty.has(id) ? zWhen(bounty.get(id)).replace("Zaishen day", "Zaishen Bounty") : ""}</li>`).join("")}</ul>` : ""}
      <ul class="gw-list">${titleLine(42, c, o)}</ul></section>`;
  }
  function restHTML(c, o) {
    // (Master of the North here too when its dungeons are done and the map keeps it short: the map's share is typed on
    // the Titles tab)
    const vqs = vanqLeft(c, [4]), ids = [...titlesLeft([42, ...NORTH], c, o), ...titlesLeft(REST, c, o)];
    return `<section><h2>Topping up</h2><p class="dim">What the route left short: reputation past what its missions and vanquishes gave, a death-free stretch, the consumables.</p>
      ${vqs.length ? `<h3>The Eye of the North's vanquishes <span class="dim">${vqs.length}</span></h3><ul class="gw-list">${vanqOrder(c, vqs).map(([id, when]) => vanqRow(c, id, when)).join("")}</ul>` : ""}
      <ul class="gw-list">${ids.map(id => titleLine(id, c, o, id === 9 ? `1,337,500 experience without a death; <a href="guides?gom">the Gate of Madness AFK farm</a> is a safe one` : "")).join("")}</ul></section>`;
  }
  const stageLeft = { missions: c => Object.values(STORY).flat().some(x => !nm(c, x.id) || !hm(c, x.id)), vanq: c => vanqLeft(c).length > 0,
    carto: (c, o) => titlesLeft(CARTO, c, o).length > 0, hunt: c => c.elites.length < capturableElites().length,
    north: c => USER_ALL_V3.dungeons.some(id => !((c.dungeons[id] || 0) & 2)), rest: (c, o) => titlesLeft([42, ...NORTH, ...REST], c, o).length > 0 || vanqLeft(c, [4]).length > 0 };

  /* ---------- the page ---------- */
  const stat = (k, v, done, href, sub = "") => `<${href ? `a href="${href}"` : "span"} class="lstat${done ? " done" : ""}"><small>${k}</small><b>${v}</b>${sub ? `<small class="lstat-sub">${esc(sub)}</small>` : ""}</${href ? "a" : "span"}>`;
  const isGwamm = (c, o) => titleRankOf(TITLES[10], c, o) >= 6;
  function goalsHTML(c, o) {
    const team = teamOf(c), ready = teamReady(c), all = Object.values(STORY).flat(), n = all.length;
    const nmDone = all.filter(x => nm(c, x.id)).length, hmDone = all.filter(x => hm(c, x.id)).length, vqAll = Object.values(AREAS).filter(a => a.foes).length;
    const goal = isGwamm(c, o) ? `<p class="gw-goal gw-gwamm">🏆 ${charLabel(c)} is a <b>God Walking Amongst Mere Mortals</b>. Below, whatever is left beyond the title.</p>`
      : `<p class="gw-goal">${!ports(c) ? "First: the three port towns, to reach every campaign." : ready ? "The meta hero team is ready: hard mode is open." : `Main goal: the meta hero team, ${team.map(t => `${t.have} of ${t.need} ${PROFS[t.prof]}${t.need === 1 ? "" : "s"}`).join(", ")}. Until then, normal mode.`}</p>`;
    // (the count toward the title: the other titles maxed, 30 for the sixth rank, and the rank's name held now)
    const maxed = titlesMaxed(c, o), rank = titleRankOf(TITLES[10], c, o), held = rank ? TITLES[10].rank_names[rank - 1] : "no title yet";
    return `${goal}<div class="lstats">${stat("Titles maxed", `${Math.min(maxed, 30)} / 30`, maxed >= 30, "characters?tab=titles", held)}${stat("Port towns", ports(c) ? "reached" : "to reach", ports(c))}${stat("Hero team", ready ? "ready" : `${teamCount(c)} / 6`, ready)}${stat("Missions", `${nmDone} / ${n}`, nmDone === n)}${stat("Hard mode", `${hmDone} / ${n}`, hmDone === n)}${stat("Vanquishes", `${(c.vanquished || []).length} / ${vqAll}`, (c.vanquished || []).length >= vqAll)}${stat("Elites", `${c.elites.length} / ${capturableElites().length}`, c.elites.length >= capturableElites().length)}${stat("Checklist", `${checklistDone(c)} / ${checklistFor(c).length}`, checklistDone(c) === checklistFor(c).length, "characters?tab=check")}</div>`;
  }
  function render() {
    if (!ckUser()) { els.who.innerHTML = ""; els.goals.innerHTML = ""; els.main.innerHTML = `<p class="dim pg-empty">Your saved progress can't be read: see the <a href="backup">Backup</a> page to keep a copy of it and fix it.</p>`; return; }
    const o = User.data(), c = User.char(o);
    // (the other wannabe GWAMMs to pick here; anyone else in the top bar)
    const others = (wannabes() || []).filter(x => x.id !== c.id);
    els.who.innerHTML = `<span class="cap-who">For ${charPill(c)}</span> <span class="dim">${others.length ? `or ${others.map(x => `<button type="button" class="link" data-pick="${x.id}">${charLabel(x)}</button>`).join(", ")}; anyone else in the top bar` : "pick another in the top bar"}</span>`;
    // (a pre-Searing character: Legendary Defender of Ascalon, then the Searing, or staying)
    if (isPreSearing(c)) { const ldoa = !!(c.titles || {})[21];
      els.goals.innerHTML = `<p class="gw-goal">${ldoa ? `${charLabel(c)} is a Legendary Defender of Ascalon: what's left is the Searing, or staying.` : `Main goal: <a href="${titleHref(21)}">Legendary Defender of Ascalon</a>, level 20 in pre-Searing; then the Searing, or staying.`}</p>
        <div class="lstats">${stat("Legendary Defender of Ascalon", ldoa ? "done" : "level 20 to reach", ldoa)}</div>`;
      els.main.innerHTML = `<h2>Next things to do</h2><p class="dim">${ldoa ? "The Searing, when it's time: the route starts after it." : "Level 20 in pre-Searing: the Charr at the wall, the Vanguard quests, the Nicholas Sandford gifts."}</p>`; return; }
    els.goals.innerHTML = goalsHTML(c, o);
    // the stage it's in: the campaign to pick, the port towns, the heroes, the missions (with the next vanquishes), all
    // the vanquishes, the maps, the elites, then Master of the North and the topping up
    const html = !madeIn(c) ? campaignHTML(c) : !ports(c) ? portsHTML(c) : !teamReady(c) ? heroesHTML2(c)
      : stageLeft.missions(c) ? pathsHTML(c) + vanqHTML(c) : stageLeft.vanq(c) ? vanqAllHTML(c) : stageLeft.carto(c, o) ? cartoHTML(c, o)
      : stageLeft.hunt(c) ? huntHTML(c, o) : stageLeft.north(c, o) ? northHTML(c, o) : stageLeft.rest(c, o) ? restHTML(c, o) : "";
    els.main.innerHTML = html || `<p class="dim">Nothing left on the route: every title it covers is at its top.</p>`;
  }
  // another wannabe picked: the page is its now (the top bar follows)
  els.who.addEventListener("click", e => { const b = e.target.closest("[data-pick]"); if (b) { User.pick(+b.dataset.pick); render(); } });
  // the buttons: the campaign it was made in (as on the Edit tab), the port towns mark (as on the Checklist tab)
  els.main.addEventListener("click", e => {
    const b = e.target.closest("[data-check], [data-camp]"); if (!b || !ckUser()) return;
    const o = User.data(), c = User.char(o);
    if (b.dataset.camp) c.campaign = +b.dataset.camp;
    else { const s = new Set(c.checks || []); if (s.has("ports")) s.delete("ports"); else s.add("ports"); c.checks = USER_CHECKS.filter(x => s.has(x)); if (!c.checks.length) delete c.checks; }
    if (User.save(o)) dispatchEvent(new Event("userchange"));
  });
  render();
  addEventListener("userchange", render);
}
