"use strict";
/* An example of saved progress, to try the site with (the Dev page applies it): three accounts and ten characters, one
   of every kind the site shows: a finished wannabe GWAMM, one halfway, pre-Searing permanents (Melandru's Accord too), a
   Dhuum's Covenant one, a retired one hidden from the list, a plain player, a character just made with nothing filled in,
   and an account of alts made up at random, as the About tab's example character is; four in the top bar's menu, the
   wannabes among them far apart in progress; account titles and the bell, with
   coins waiting, taken lately, or no bell; notes, builds and readings. Every character is flagged example, so its card says so.
   Everything dated is made for now, exampleProgress(now): the ages are ranges as /age readings leave them (a first reading
   long ago, then the ones given, by how many days ago), some found so the Birthdays page has a window closing, one just
   opened, one at its best check and a short one about to open; the coin clocks and the readings' dates likewise. The
   result is in the backup's shape (common.js, the visitor's progress, v3), checked by whoever applies it. Made by hand,
   the ids from the game tables. */
function exampleProgress(now = Date.now()) {
  const D = 864e5, H = 36e5, iso = t => new Date(t).toISOString().slice(0, 19) + "Z";
  const all = USER_ALL_V3, first = (xs, n) => xs.slice(0, n), every = (xs, k) => xs.filter((_, i) => i % k === 0);
  // what /age says at t for a character truly made at T: whole days under two months, whole months after
  const says = (T, t) => { const a = t - T; return a < AGE_TWO ? [Math.floor(a / AGE_DAY), "d"] : [Math.floor(a / AGE_MO), "m"]; };
  // the range readings leave: at the times given, each narrowing it as the site does (ageNarrow, common.js)
  const simulate = (T, times) => { let made = null; for (const t of times) { const [n, u] = says(T, t); const r = ageNarrow(made, n, u, t); if (r) made = r.map(iso); } return made; };
  // a character made so many days ago, read so many days ago each time (fractions, so the day-wide ranges of the young
  // ones sit at different points of their day)
  const range = (ageDays, readDays) => simulate(now - ageDays * D, readDays.map(d => now - d * D));
  // a range in a state wanted now (cond, of ageAt's view): a creation time and two readings a whole number of months
  // apart, the later one recent, tried until one fits; the same every time for the same now
  let seed = 11; const rnd = () => (seed = (seed * 48271) % 2147483647) / 2147483647;
  const pos = a => 1 - (a.end - now) / (a.hi - a.lo);
  const find = (cond, recentLo, recentHi, fallback) => {
    for (let i = 0; i < 20000; i++) {
      const T = now - AGE_YEAR - rnd() * 5 * AGE_YEAR, t2 = now - recentLo - rnd() * (recentHi - recentLo), j = 1 + Math.floor(rnd() * 6);
      const t1 = t2 - j * AGE_MO + (rnd() - 0.5) * 12 * H, t0 = T + AGE_TWO + 5 * D + rnd() * 30 * D;
      if (t1 <= t0) continue;
      const made = simulate(T, [t0, t1, t2]); if (!made) continue;
      const a = ageAt(made, now); if (a.done) continue;
      if (cond(a)) return made;
    }
    return fallback;
  };
  const closing = find(a => a.inside && a.hi - a.lo <= D && !a.rising && a.end - now < H && a.end - now > 15 * 6e4, 30 * 6e4, 6 * H, range(6 * 365, [1800]));
  const rising = find(a => a.inside && a.hi - a.lo < 12 * H && a.hi - a.lo > 2 * H && a.rising && pos(a) < 0.25, 5 * 6e4, 3 * H, range(4 * 365 + 100, [1300, 700]));
  const worth = find(a => a.inside && a.hi - a.lo > 2 * D && a.hi - a.lo < 8 * D && pos(a) > 0.4 && pos(a) < 0.6, 2 * D, 20 * D, range(2 * 365 + 10, [600, 200, 45, 44]));
  const soon = find(a => !a.inside && a.hi - a.lo <= D && a.start - now > H && a.start - now < 12 * H, H, 2 * D, range(190, [120, 5]));
  const at = iso(now - D);  // (the readings typed in yesterday)
  const nf = [556, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528], fa = [257, 258, 260, 261, 262, 263, 264, 267, 268, 270, 271, 204, 215];
  const pro = [28, 38, 10, 11, 12, 14, 15, 16, 19, 21, 22, 23, 24, 25, 29, 30, 32, 73, 116, 117, 118, 120, 122, 123, 124], eotn = [653, 654, 655, 658, 661, 664, 665, 666, 669, 670, 673];
  const chars = [
    // the finished one: everything, GWAMM near; one reading only, a month-wide range a boundary is always in
    { id: 1, name: "Ember Vale", account: 1, profession: 6, gender: "f", campaign: 1, aim: "gwamm", inMenu: true, elites: "all", vanquished: "all", missionsNM: "all", missionsHM: all.missions.filter(m => ![653, 654, 655].includes(m)),
      dungeonsNM: all.dungeons, dungeonsHM: all.dungeons.filter(d => d !== 704 && d !== 701), heroes: "all",
      titles: { 1: 6, 2: 6, 18: 6, 7: 2, 9: 3, 17: 10, 20: 8, 34: 2, 43: 2, 38: 10, 39: 10, 40: 10, 41: 10, 13: 1, 14: 1, 19: 1, 24: 1, 26: 1, 28: 1, 25: 1, 27: 1, 29: 1, 35: 1, 36: 1, 37: 1 },
      eotnMap: 836136, checks: ["attr", "ports", "prophecies", "factions", "nightfall", "eotn", "wik", "uw", "fow", "sf", "deep", "urgoz", "doa", "outposts"],
      builds: ["OgNDwcrOTRLO1giXEr5LZkXGjA", "OgdCoMzjkSgOn6lm6gu10mBA"], note: "The main: HM on Zaishen days, caps on the way",
      bornBetween: range(3 * 365 + 40, [900, 400, 31]), xp: [41200000, at], played: [6120, at], playedOutside: [2200, at] },
    // the one halfway: NM done, HM begun, most heroes; a range of days at its best check
    { id: 2, name: "Sable Thornwick", account: 1, profession: 4, gender: "m", campaign: 3, aim: "gwamm", inMenu: true, elites: every(all.elites, 2), vanquished: first(all.vanquished, 50),
      missionsNM: [...nf, ...fa, ...first(pro, 16), ...first(eotn, 4)], missionsHM: [...nf, ...first(fa, 5)], dungeonsNM: first(all.dungeons, 9), dungeonsHM: [],
      heroes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], titles: { 17: 10, 20: 7, 9: 2, 18: 4, 38: 6, 39: 5, 40: 7, 41: 6, 7: 1, 34: 1, 43: 1, 19: 1, 29: 1 },
      checks: ["attr", "ports", "nightfall", "factions"], builds: ["OAhjUwG6IPnB6CHpuUxk9UFoGA"], note: "Vanquishing Tyria",
      bornBetween: worth, xp: [9800000, at], played: [1840, at], playedOutside: [1100, at] },
    // the pre-Searing one, a permanent, Melandru's Accord too; a short window about to open
    { id: 3, name: "Little Wick", account: 1, profession: 5, gender: "f", modes: ["presearing", "melandru"], elites: [], vanquished: [], missionsNM: [], missionsHM: [], dungeonsNM: [], dungeonsHM: [],
      heroes: [38], titles: { 21: 1, 7: 1, 34: 2, 43: 1 }, checks: ["outposts", "pouch", "charrbags", "eqpack", "headgear", "vigor"], note: "LDoA done, farming the Charr",
      bornBetween: soon, played: [410, at], playedOutside: [410, at] },
    // the retired one, hidden from the list; a short window closing within the hour
    { id: 4, name: "Old Grumble", account: 1, profession: 1, gender: "m", campaign: 2, aim: "retired", hidden: true, elites: first(all.elites, 40), vanquished: first(all.vanquished, 12),
      missionsNM: fa, missionsHM: [], dungeonsNM: [], dungeonsHM: [], heroes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], titles: { 14: 1, 2: 3, 9: 1 }, checks: ["factions"],
      bornBetween: closing, xp: [2100000, at], played: [600, at], playedOutside: [50, at] },
    // the Dhuum's Covenant one, just begun, a wannabe too; young, one day-reading: a day-wide range
    { id: 5, name: "Dhuum Walker", account: 1, profession: 8, campaign: 2, modes: ["dhuum"], aim: "gwamm", inMenu: true, elites: first(all.elites, 6), vanquished: [], missionsNM: first(fa, 3), missionsHM: [], dungeonsNM: [], dungeonsHM: [],
      heroes: [], titles: { 9: 3 }, note: "No deaths yet", bornBetween: range(12.3, [3.4]), played: [38, at] },
    // the second account: a wannabe with Tyria done and little else (a window of hours just opened), and a character
    // just made, nothing filled in (the list ends here; the third account's alts are made up below)
    // (the wannabes in the menu differ in what they've done, so the Zaishen notices change with the one picked)
    { id: 6, name: "Brother Quill", account: 2, profession: 3, gender: "m", campaign: 1, aim: "gwamm", inMenu: true, elites: first(all.elites, 90), vanquished: first(all.vanquished, 30), missionsNM: [...pro, ...first(eotn, 8)], missionsHM: first(pro, 6),
      dungeonsNM: first(all.dungeons, 14), dungeonsHM: first(all.dungeons, 3), heroes: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 36, 37], titles: { 1: 5, 13: 1, 35: 1, 38: 8, 39: 7, 40: 8, 41: 9, 42: 3, 20: 2, 17: 3 },
      checks: ["prophecies", "eotn", "attr", "ports"], builds: ["OwUT0Y4+GRj2oM6uvpayEEAA"], bornBetween: rising, xp: [15300000, at], played: [2300, at], playedOutside: [900, at] },
    { id: 7, name: "Char7", account: 2, elites: [], vanquished: [], missionsNM: [], missionsHM: [], dungeonsNM: [], dungeonsHM: [] },
  ];
  // the third account's alts, made up at random (new ones every time): an example character each, as the
  // About tab makes them: profession, gender, campaign, GWAMM as the aim, progress between a little and most of the way,
  // a few titles, made on some day between its campaign's release and the end of 2012 and read once since
  const EXAMPLE_FIRST = ["Aldric", "Mira", "Teodor", "Sabela", "Korin", "Yllis", "Dagny", "Ruven", "Ilsa", "Haron", "Nessa", "Brannoc"];
  const EXAMPLE_LAST = ["Stormcaller", "Ashwalker", "Silverleaf", "Duskbane", "Emberhold", "Greywind", "Thornvale", "of the Dunes", "Frostmantle", "Nightsong"];
  // (random each time, unlike the ranges found above)
  const rand = Math.random, pick = xs => xs[Math.floor(rand() * xs.length)], between = (lo, hi) => lo + rand() * (hi - lo);
  const sample = (xs, share) => { const n = Math.round(xs.length * share), a = [...xs]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n).sort((x, y) => x - y); };
  const tmax = id => TITLES[id].max ?? TITLES[id].ranks.length;  // (a title's top rank, as mytitles.js has it)
  const example = id => {
    const c = { id, name: `${pick(EXAMPLE_FIRST)} ${pick(EXAMPLE_LAST)}`, account: 3, profession: 1 + Math.floor(rand() * 10), gender: pick(["m", "f"]), aim: "gwamm" };
    if (!fixedCampaign(c)) c.campaign = 1 + Math.floor(rand() * 3);
    const done = between(0.15, 0.7);
    c.elites = sample(all.elites, done * between(0.4, 0.9)); c.vanquished = sample(all.vanquished, done * between(0.2, 0.8));
    c.missionsNM = sample(all.missions, done); c.missionsHM = sample(c.missionsNM, between(0.2, 0.7));
    c.dungeonsNM = sample(all.dungeons, Math.min(1, done * between(0.5, 1.2))); c.dungeonsHM = sample(c.dungeonsNM, between(0, 0.6));
    c.heroes = sample(all.heroes, Math.min(1, done * between(0.6, 1.4)));
    c.titles = {};
    for (const t of [7, 34, 43, 1, 2, 18, 9]) if (rand() < 0.5) c.titles[t] = tmax(t);
    for (const t of [17, 20, 38, 39, 40, 41]) { const r = rand() < 0.5 ? tmax(t) : Math.floor(rand() * tmax(t)); if (r) c.titles[t] = r; }
    const from = [0, Date.UTC(2005, 3, 28), Date.UTC(2006, 3, 28), Date.UTC(2006, 9, 27)][madeIn(c)];
    c.bornBetween = simulate(between(from, Date.UTC(2013, 0, 1)), [now - between(30, 400) * D]);
    return c;
  };
  for (let id = 8; id <= 10; id++) chars.push(example(id));
  for (const c of chars) c.example = true;
  // the accounts: the bell with coins never taken (all waiting), no bell, the bell with coins taken a day and a half ago
  const accounts = [
    { id: 1, name: "Vanguard", reforgedCoinClock: 0, titles: { 0: 7, 3: 2, 4: 1, 5: 12, 6: 12, 15: 6, 16: 7, 44: 12, 45: 6, 46: 7, 22: 1, 23: 2, 47: 1 } },
    { id: 2, name: "Second Box", titles: { 5: 6, 45: 3, 46: 4, 44: 5 } },
    { id: 3, name: "Alts", reforgedCoinClock: iso(now - 36 * H) },
  ];
  // in the kept shape (v3): the characters under their accounts, their account key dropped
  return { v: 3, accounts: accounts.map(a => ({ ...a, chars: chars.filter(c => c.account === a.id).map(({ account, ...c }) => c) })) };
}
