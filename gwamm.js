"use strict";
/* The GWAMM route (gwamm; Guides › Tools): what the picked character should do next on an efficient way to God Walking
   Amongst Mere Mortals, in phases. First the port towns (its own campaign's missions up to its port, then the boats);
   then the heroes of the meta team, the easiest first, with the missions that lead to each; then the three campaigns
   side by side, the next mission of each, with hard mode and the vanquishes on the Zaishen days. Every mission with its
   bonus, capturing the elites there and mapping on the way, the right storybook on you. Worked out from the character's
   ticks and marks (My Characters), nothing kept here. */
{
  const els = { who: $("gw-who"), goals: $("gw-goals"), main: $("gw-main") };
  const ckUser = () => User.stored() != null && !User.broken();

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

  /* ---------- the storybooks (the Guild Wars Wiki): their pages, by mission ---------- */
  const BOOKS = [
    { id: "yhot", name: "Young Heroes of Tyria", hm: false, from: "any loremaster: Gordon Ecker in Lion's Arch, Anja or Gorani in Kaineng Center, Captain Ahkenchu in the Sunspear Great Hall",
      pages: [[28, 2], [29, 3], [30, 4], [32, 5], [25, 6], [21, 7], [14, 8], [257, 9], [258, 10], [556, 11], [515, 12], [516, 13]] },
    { id: "fsp", name: "The Flameseeker Prophecies", hm: true, from: "Gordon Ecker in Lion's Arch (the hard-mode one at level 20)",
      pages: [[15, 1], [16, 2], [11, 3], [10, 4], [12, 5], [73, 6], [19, 7], [116, 8], [117, 9], [118, 10], [38, 11], [120, 12], [22, 13], [24, 14], [23, 15], [122, 16], [123, 17], [124, 18]] },
    { id: "shiro", name: "Shiro's Return", hm: true, from: "Anja or Gorani in Kaineng Center",
      pages: [[215, 1], [260, 2], [261, 3], [262, 4], [263, 5], [264, 6], [267, 7], [268, 8], [204, 9], [270, 10], [271, 11]] },
    { id: "nf", name: "Night Falls", hm: true, from: "Captain Ahkenchu in the Sunspear Great Hall, or the Source of Whispers in the Chantry of Secrets",
      pages: [[517, 1], [453, 2], [458, 3], [459, 4], [460, 5], [427, 6], [518, 7], [519, 8], [520, 9], [521, 10], [522, 11], [523, 12], [524, 13], [525, 14], [526, 15], [527, 16], [528, 17]] },
    { id: "hh", name: "Hero's Handbook", hm: true, from: "Gedrel of Ascalon at the Eye of the North, Kodan or Tyr the Skaald in Gunnar's Hold, Lexx in Rata Sum",
      pages: [["q100424", 1], ["q100443", 2], [665, 3], [666, 4], [669, 5], ["q100389", 6], [653, 7], [655, 8], [654, 9], ["q100441", 10], [658, 11], [661, 12], [664, 13], ["q100340", 14], [670, 15], [673, 16]] },
  ];
  const BOOK_OF = new Map();  // mission id -> [book, page]
  for (const b of BOOKS) for (const [m, p] of b.pages) if (typeof m === "number") BOOK_OF.set(m, [b, p]);
  const bookNote = (id, hm) => { const bp = BOOK_OF.get(id); if (!bp) return "";
    const [b, p] = bp; return hm && !b.hm ? "" : `<span class="gw-book" title="From ${esc(b.from)}; forgot it: a page can be bought for 100 gold within 30 days">📖 ${esc(b.name)}${hm ? " (Hard Mode)" : ""}, page ${p}</span>`; };

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
  for (const [cid, spots] of Object.entries(GW_BOSS_SPOTS.spots)) for (const s of spots) if (!s[3]) for (const e of CREATURES[cid]?.elites || []) if (isCapturable(SKILLS[e])) (AREA_ELITES.get(s[0]) || AREA_ELITES.set(s[0], new Set()).get(s[0])).add(e);
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
  const groundHTML = () => `<span class="gw-map">🗺 map what you can on the way</span>`;
  // the bonus: Prophecies names it (the flagged objective), Factions and Nightfall have the Master's reward, the Eye of the North none
  const bonusHTML = x => { const camp = missionCampaign(x.m), b = (x.m.objectives || []).filter(o => o[2]).map(o => o[1]);
    return camp === 4 ? "" : `<span class="gw-bonus">⭐ ${b.length ? `bonus: ${esc(b.join(" "))}` : camp === 1 ? "with the bonus" : "Master's reward"}</span>`; };

  // the next Zaishen day of a mission (0: today), from its rotation
  const zDays = (r, is) => { if (!r) return null; const n = r.entries.length, k = Rotation.period(r); for (let i = 0; i < n; i++) if (is(Rotation.entry(r, k + i))) return i; return null; };

  /* ---------- the lines: a card with what matters there, or the bare name ---------- */
  // rec (once the heroes are there): the mode to do it in and its Zaishen day
  const missionLine = (c, x, hard = false, bare = false, rec = null) => bare ? `<li><b>${LINK.mission(x.id)}</b></li>`
    : `<li class="gw-card"><b>${LINK.mission(x.id)}</b><div class="gw-with">${[rec ? `<span class="gw-rec"><b>${hard ? "hard" : "normal"} mode</b></span>` : "", rec && zText(x.id) ? `<span class="gw-z">📅 ${zText(x.id)}</span>` : "", hard ? "" : bonusHTML(x), bookNote(x.id, hard), elitesHTML(c, x.id, x.m.outpost), groundHTML()].filter(Boolean).join("")}</div></li>`;
  const groupLines = (c, gs, hard = false, bare = false, rec = null) => gs.map(g => (g.length > 1 ? `<li class="gw-either"><span class="dim">either</span><ul>${g.map(x => missionLine(c, x, hard, bare, rec)).join("")}</ul></li>` : missionLine(c, g[0], hard, bare, rec))).join("");

  /* ---------- phase 0: the campaign it was made in ---------- */
  const campaignHTML = c => `<section><h2>Where was ${esc(c.name)} made?</h2><p class="dim">The route starts from there. Pick it here or on its <a href="characters?tab=edit">Edit</a> tab.</p>
    <div class="gw-btns">${[1, 2, 3].map(k => `<button type="button" class="gw-btn" data-camp="${k}">${esc(CAMPAIGNS[k])}</button>`).join("")}</div></section>`;

  /* ---------- phase 1: the port towns ---------- */
  function portsHTML(c) {
    const camp = madeIn(c), before = left(c, camp).filter(x => x.order <= PORT[camp]), next = groups(before, 1);
    return `<section><h2>Reach the port towns</h2><p class="dim">${LINK.area(55)}, ${LINK.area(194)} and ${LINK.area(449, "Kamadan")}: ${esc(CAMPAIGNS[camp])}'s missions up to ${LINK.area(PORT_TOWN[camp])}, then the other two by boat. Every mission with its bonus, capturing the elites there and mapping on the way.</p>
      ${next.length ? `<ul class="gw-list">${groupLines(c, next)}</ul>` : `<p class="dim">The missions to ${LINK.area(PORT_TOWN[camp])} are done: the boats are left.</p>`}
      <div class="gw-btns"><button type="button" class="gw-btn" data-check="ports">Reached all port towns</button> <span class="dim">(the Checklist's mark)</span></div>
      <p class="dim gw-then">Then: the meta team's heroes, then the three campaigns side by side.</p></section>`;
  }

  /* ---------- phase 2: the heroes ---------- */
  function heroesHTML2(c) {
    const team = teamOf(c), short = new Set(team.filter(t => t.have < t.need).map(t => t.prof)), got = new Set(c.heroes || []);
    const want = h => !got.has(h) && (h === RAZAH ? short.size > 0 : short.has(HEROES[h].profession));
    const line = h => { const w = WAYS[h], ms = w.camp ? groups(left(c, w.camp).filter(x => x.order <= w.upto), 99) : [];
      return `<li><img src="${profImg(HEROES[h].profession)}" alt=""><div><b>${LINK.hero(h)}</b>${h === RAZAH ? ' <span class="dim">any profession: whatever is short</span>' : ""} <span class="dim">${esc(w.how)}</span>${ms.length ? `<ul class="gw-list gw-path"><li class="dim gw-sub">Missions on the way</li>${groupLines(c, ms, false, true)}</ul>` : ""}</div></li>`; };
    const tiers = TIERS.map(t => t.filter(want)).filter(t => t.length);
    return `<section><h2>Get the heroes</h2><p class="dim">The meta team: three Mesmers, two Necromancers, a Ritualist, ${teamCount(c)} of 6 so far. The easiest first; Razah fills whatever stays short. No hard mode until they're all there.</p>
      ${tiers.map(t => `<ul class="gw-heroes-list gw-tier">${t.map(line).join("")}</ul>`).join("")}
      <p class="dim gw-then">Then: the three campaigns side by side, hard mode and the vanquishes on the Zaishen days.</p></section>`;
  }

  /* ---------- phase 3: the three paths, the vanquishes ---------- */
  // a campaign's next missions: in normal mode the first in order not done; in hard mode (the team there, the campaign
  // finished) the one done in normal mode, so the character can get there, whose Zaishen day comes first
  const Z_MISSION = ROTATIONS["zaishen-mission"];
  const zOf = id => zDays(Z_MISSION, e => e.mission === id);
  const zText = id => { const d = zOf(id); return d === null ? "" : d === 0 ? "Zaishen mission <b>today</b>" : `Zaishen mission in ${d} day${d === 1 ? "" : "s"}`; };
  function pathsHTML(c) {
    const parts = [], ready = teamReady(c);
    for (const camp of [1, 2, 3, 4]) {
      const from = camp === madeIn(c) || camp === 4 ? 0 : ENTRY[camp];
      const nmNext = groups(left(c, camp), 1)[0] || null;
      const hmNext = ready && hmOpen(c, camp) ? (STORY[camp] || []).filter(x => nm(c, x.id) && !hm(c, x.id)).sort((a, b) => (zOf(a.id) ?? 999) - (zOf(b.id) ?? 999))[0] || null : null;
      const start = camp !== madeIn(c) && camp !== 4 ? (STORY[camp] || []).filter(x => !nm(c, x.id) && x.order < from) : [];
      if (!nmNext && !hmNext && !start.length) continue;
      parts.push(`<div class="gw-path-col"><h3>${esc(CAMPAIGNS[camp])}</h3><ul class="gw-list">${nmNext ? groupLines(c, [nmNext], false, false, true) : ""}${hmNext ? missionLine(c, hmNext, true, false, true) : ""}</ul>${start.length ? `<p class="dim gw-sub">From the start, left behind</p><ul class="gw-list">${groupLines(c, groups(start, 1), false, false, true)}</ul>` : ""}</div>`);
    }
    return parts.length ? `<section><h2>Next missions</h2><p class="dim">The next of each campaign, in normal mode and, once the campaign is finished, in hard mode; whichever is handy, on its Zaishen day if it comes soon.</p><div class="gw-paths">${parts.join("")}</div></section>` : "";
  }
  // hard mode, by the Zaishen rotations: what's left, the entries whose day has just passed first (they're the farthest
  // from coming round again)
  // hard mode is open in a campaign once its last mission is done (LAST, mytitles.js)
  const hmOpen = (c, camp) => !!camp && nm(c, LAST[camp]);
  const daysSince = (r, i) => { const n = r.entries.length, k = Rotation.period(r); return (((k - i) % n) + n) % n; };
  const zWhen = (x, n) => `<span class="dim gw-z">Zaishen day ${x.since === 0 ? "today" : `${x.since} day${x.since === 1 ? "" : "s"} ago`}, next in ${n - x.since} days</span>`;
  const zSorted = (r, keep) => r.entries.map((e, i) => ({ e, i })).filter(({ e }) => keep(e)).map(x => ({ ...x, since: daysSince(r, x.i) })).sort((a, b) => a.since - b.since).slice(0, 6);
  function vanqHTML(c) {
    const r = ROTATIONS["zaishen-vanquish"], vq = new Set(c.vanquished || []);
    const vs = zSorted(r, e => e.area && AREAS[e.area]?.foes && !vq.has(e.area) && hmOpen(c, campaignOf(AREAS[e.area])));
    return vs.length ? `<section><h2>Next vanquishes</h2><p class="dim">On the Zaishen days, the ones just passed first; map as you go.</p><ul class="gw-list">${vs.map(x => `<li><b>${LINK.area(x.e.area)}</b> ${zWhen(x, r.entries.length)}<div class="gw-with">${elitesHTML(c, x.e.area, null)}</div></li>`).join("")}</ul></section>` : "";
  }
  /* ---------- the page ---------- */
  const stat = (k, v, done, href) => `<${href ? `a href="${href}"` : "span"} class="lstat${done ? " done" : ""}"><small>${k}</small><b>${v}</b></${href ? "a" : "span"}>`;
  const isGwamm = (c, o) => titleRankOf(TITLES[10], c, o) >= 6;
  function goalsHTML(c, o) {
    const team = teamOf(c), ready = teamReady(c), all = Object.values(STORY).flat(), n = all.length;
    const nmDone = all.filter(x => nm(c, x.id)).length, hmDone = all.filter(x => hm(c, x.id)).length, vqAll = Object.values(AREAS).filter(a => a.foes).length;
    const goal = isGwamm(c, o) ? `<p class="gw-goal gw-gwamm">🏆 ${esc(c.name)} is a God Walking Amongst Mere Mortals. Below, whatever is left beyond the title.</p>`
      : `<p class="gw-goal">${!ports(c) ? "First: the three port towns, to reach every campaign." : ready ? "The meta hero team is ready: hard mode is open." : `Main goal: the meta hero team, ${team.map(t => `${t.have} of ${t.need} ${PROFS[t.prof]}${t.need === 1 ? "" : "s"}`).join(", ")}. Until then, normal mode.`}</p>`;
    return `${goal}<div class="lstats">${stat("Port towns", ports(c) ? "reached" : "to reach", ports(c))}${stat("Hero team", ready ? "ready" : `${teamCount(c)} / 6`, ready)}${stat("Missions", `${nmDone} / ${n}`, nmDone === n)}${stat("Hard mode", `${hmDone} / ${n}`, hmDone === n)}${stat("Vanquishes", `${(c.vanquished || []).length} / ${vqAll}`, (c.vanquished || []).length >= vqAll)}${stat("Elites", `${c.elites.length} / ${capturableElites().length}`, c.elites.length >= capturableElites().length)}${stat("Checklist", `${checklistDone(c)} / ${checklistFor(c).length}`, checklistDone(c) === checklistFor(c).length, "characters?tab=check")}</div>`;
  }
  function render() {
    if (!ckUser()) { els.who.innerHTML = ""; els.goals.innerHTML = ""; els.main.innerHTML = `<p class="dim pg-empty">No characters yet: add them on the <a href="characters">Characters</a> tab of My Characters, or try a mock one on <a href="characters?view=about">About</a>.</p>`; return; }
    const o = User.data(), c = User.char(o);
    // (the other wannabe GWAMMs to pick here; anyone else in the top bar)
    const others = (wannabes() || []).filter(x => x.id !== c.id);
    els.who.innerHTML = `<span class="cap-who">For ${charPill(c)}</span> <span class="dim">${others.length ? `or ${others.map(x => `<button type="button" class="link" data-pick="${x.id}">${esc(x.name)}</button>`).join(", ")}; anyone else in the top bar` : "pick another in the top bar"}</span>`;
    // (a pre-Searing character: Legendary Defender of Ascalon, then the Searing, or staying)
    if (isPreSearing(c)) { const ldoa = !!(c.titles || {})[21];
      els.goals.innerHTML = `<p class="gw-goal">${ldoa ? `${esc(c.name)} is a Legendary Defender of Ascalon: what's left is the Searing, or staying.` : `Main goal: <a href="${HREF.title(21)}">Legendary Defender of Ascalon</a>, level 20 in pre-Searing; then the Searing, or staying.`}</p>
        <div class="lstats">${stat("Legendary Defender of Ascalon", ldoa ? "done" : "level 20 to reach", ldoa)}</div>`;
      els.main.innerHTML = `<h2>Next things to do</h2><p class="dim">${ldoa ? "The Searing, when it's time: the route starts after it." : "Level 20 in pre-Searing: the Charr at the wall, the Vanguard quests, the Nicholas Sandford gifts."}</p>`; return; }
    els.goals.innerHTML = goalsHTML(c, o);
    // the phase it's in: the campaign to pick, the port towns, the heroes, then the paths with hard mode and the vanquishes
    const html = !madeIn(c) ? campaignHTML(c) : !ports(c) ? portsHTML(c) : !teamReady(c) ? heroesHTML2(c)
      : pathsHTML(c) + vanqHTML(c);
    els.main.innerHTML = html || `<p class="dim">Nothing left on the route.</p>`;
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
