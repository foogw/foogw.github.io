"use strict";
/* GoM AFK farm: the alternative builds (from the original guide's Builds page on the wiki), rendered into #gom-builds.
   Each build is a few bars in Protective Bond casting order, with what each bar's Prot Bond costs (the player's in bold),
   badges for what it takes beyond the skills (a hover says what), and each bar's energy sum (its arithmetic on hover).
   Skills are named; their ids are looked up in the game's skill table. */
{
  // skill id by name (the PvE version: the table keeps PvP versions as their own ids with a pvp_only flag)
  const BY_NAME = new Map(Object.entries(SKILLS).filter(([, s]) => !s.pvp_only).map(([id, s]) => [s.name, +id]));
  const sid = n => BY_NAME.get(n) ?? (console.warn(`no skill ${n}`), 0);
  // a bar: slots[0..7] skill names ("" free); a sparse one is given as {7: "Heroic Refrain"}
  const bar = (who, prof, slots, note, e, sum) => ({ who, prof, slots: Array.isArray(slots) ? [...slots, "", "", "", "", "", "", "", ""].slice(0, 8) : Array.from({ length: 8 }, (_, i) => slots[i] || ""), note, e, sum });
  const PB = "Protective Bond", PV = "Purifying Veil", EB = "Essence Bond", BS = "Blessed Signet", ME = "Mending", WS = "Watchful Spirit", SU = "Succor", BA = "Balthazar's Spirit", OB = "Offering of Blood", HR = "Heroic Refrain", SI = "Signet of Illusions", RC = "Recall", ST = "Shadow Theft";

  // the badges: what a build needs beyond its skills
  const BADGES = {
    safe: { img: "img/items/lightbringer.jpg", name: "Safe Mode", tip: "Reaches 19 Protection for Purifying Veil and 18 Healing for Mending, so it is safer. With \"of the Necromancer\" mods on the bonders, these work at any Lightbringer rank." },
    sr: { img: "img/prof/Necromancer.png", name: "SR mod", tip: "An \"of the Necromancer\" weapon mod: 5 Soul Reaping, 2 pips of energy from the Titans dying." },
    lead: { img: "img/prof/Paragon.png", name: "Leadership mod", tip: "An \"of the Paragon\" weapon mod: 5 Leadership for Heroic Refrain." },
    corn: { img: "img/items/candy-corn.png", name: "Candy Corn", tip: "Candy Corn: +1 to all attributes." },
    egg: { img: "img/items/golden-egg.png", name: "Golden Egg", tip: "Golden Egg: +1 to all attributes." },
    lunar: { img: "img/items/lunar-fortune.png", name: "Lunar Fortune", tip: "Lunar Fortune: a chance of Lunar Blessing, +1 to all attributes while in the area." },
    sac: { img: "img/costs/sacrifice.png", name: "Fear Cuts Deeper", tip: "A \"Fear Cuts Deeper\" inscription and a Rune of Restoration: each cuts Bleeding's duration on you by 20%." },
  };
  const PCONS = ["corn", "egg", "lunar"];

  // the energy sums: [text of the arithmetic, result] as the guide worked them out
  const H3 = ["4 + 6 + 0.75 × 3 − 9 − 3", "+0.25"], H4 = ["4 + 6 + 0.75 × 4 − 9 − 4", "0"], P2 = ["2 + 9 + 1 − 9 − 2", "+1"];
  const NH = ["4 + 6 + 0.75 + 3.34 + 2 ⁄ 5 × 16 − 18 − 3", "−0.51", "A touch short on paper; fine if Soul Reaping gives 2.16 pips, as it seems to."];
  const LB8 = ["4 + 6 + 9 + 2 − 18 − 4", "−1", "On paper: Protective Bond's 9 is an overestimate at Lightbringer 8."];

  const GROUPS = [
    { title: "Any profession", sets: [
      { title: "Without mods, pcons or special items", builds: [
        { name: "3 heroes", costs: [1, 1, 1], bars: [
          bar("Prot hero", 3, [PB, PV, EB, BS], "13 Protection, 4 Divine Favor.", 1, H3),
          bar("Heal hero", 3, [PB, ME, EB, BS], "8 Protection, 13 Healing, 4 Divine Favor.", 1, H3),
          bar("Third hero", 3, [PB, WS, EB, BS], "3 Protection, 4 Divine Favor.", 1, H3),
          bar("You", 0, [], "Doing nothing but tanking.") ] },
        { name: "2 heroes", costs: [1, 1, "1"], bars: [
          bar("Prot hero", 3, [PB, PV, SU, EB, BS], "13 Protection, 7 Divine Favor.", 1, H4),
          bar("Heal hero", 3, [PB, ME, WS, EB, BS], "8 Protection, 13 Healing, 7 Divine Favor.", 1, H4),
          bar("You", 0, [PB, BA], "3 Protection.", "1", P2) ] } ] },
      { title: "Safe Mode", builds: [
        { name: "2 heroes", costs: [1, 1], badges: ["safe", "lead"], bars: [
          bar("Prot hero", 3, [PB, PV, SU, EB, BS], "16+2 = 18 Protection (or 19 with a +1 20% mod), 7 Divine Favor.", 1, H4),
          bar("Heal hero", 3, [PB, ME, WS, EB, BS], "11+2 = 13 Protection, 16+2 = 18 Healing, 7 Divine Favor.", 1, H4),
          bar("You", 0, { 7: HR }, "5 Leadership.") ] } ] },
      { title: "Fewer heroes", builds: [
        { name: "1 hero", costs: ["2", 1], badges: ["sr", "sr"], bars: [
          bar("You", 0, [PB, EB], "8 Protection, 5 Soul Reaping.", "2", ["2 + 6 + 9 + 1 + 2 − 18 − 2", "0"]),
          bar("Hero", 3, [PB, PV, ME, WS, SU, BA, EB, BS], "13 Protection, 13 Healing, 13 Divine Favor (10 might do), 5 Soul Reaping.", 1, ["4 + 6 + 0.75 × 7 + 2 − 9 − 7", "+1.25"]) ] } ] } ] },
    { title: "By profession", sets: [
      { title: "Without mods, pcons or special items", builds: [
        { name: "Necromancer, 1 hero", prof: 4, costs: ["2", 1], bars: [
          bar("You", 4, [PB, BA, EB], "8 Protection and some Soul Reaping: 3 should do, but why not 5, or 12 or more.", "2", ["4 + 6 + 9 + 1 + 1.2 − 18 − 3", "+0.2"]),
          bar("Monk hero", 3, [PB, PV, ME, WS, SU, EB, BS, OB], "13 Protection, 13 Healing, 11 Divine Favor, 9 Blood Magic, low health.", 1, ["4 + 6 + 0.75 × 6 + 2.75 − 9 − 6", "+2.25", "Overkill."]) ] },
        { name: "Assassin, 1 hero", prof: 7, costs: ["1", 1], bars: [
          bar("You", 7, { 0: PB, 1: PV, 2: WS, 3: BA, 6: RC, 7: ST }, "12+6 = 18 Protection, 16 Critical Strikes.", "1", ["4 + 9 + 1 − 9 − 4", "+1"]),
          bar("Monk hero", 3, [PB, ME, SU, EB, BS], "13 Protection, 13 Healing, 7 Divine Favor.", 1, H4) ] },
        { name: "Monk, 1 hero", prof: 3, costs: [2, "1"], bars: [
          bar("Necro hero", 4, [PB, SU, EB, BS, OB], "8 Protection, 16 Soul Reaping, 13 Blood Magic, low health.", 2, NH),
          bar("You", 3, [PB, PV, ME, WS, BA], "13 Protection, 13 Healing.", "1", ["4 + 9 + 1 − 9 − 5", "0"]) ] },
        { name: "Mesmer, 1 hero", prof: 5, costs: [2, "1"], bars: [
          bar("Necro hero", 4, [PB, SU, EB, BS, OB], "8 Protection, 16 Soul Reaping, 13 Blood Magic, low health.", 2, NH),
          bar("You", 5, { 0: PB, 1: PV, 2: ME, 3: WS, 4: BA, 7: SI }, "13 Illusion Magic.", "1", ["4 + 9 + 1 − 9 − 5", "0"]) ] },
        { name: "Paragon, 1 hero", prof: 9, costs: [1, "1"], bars: [
          bar("Monk hero", 3, [PB, PV, ME, SU, EB, BS, OB], "15+3 = 18 Protection, 10+3 = 13 Healing, 9 Divine Favor, 10 Blood Magic, low health.", 1, ["4 + 6 + 0.75 × 5 + 2.95 − 9 − 5", "+2.7"]),
          bar("You", 9, { 0: PB, 1: WS, 2: BA, 7: HR }, "12 Leadership, 10+3 = 13 Protection.", "1", ["2 + 9 + 1 − 9 − 3", "0"]) ] } ] },
      { title: "Safe Mode", builds: [
        { name: "Monk, 1 hero", prof: 3, costs: ["1", 1], badges: ["safe", "lead"], bars: [
          bar("You", 3, { 0: PB, 1: PV, 2: ME, 3: WS, 4: BA, 7: HR }, "5 Leadership, 16+2 = 18 Protection (or 19 with a +1 20% mod), 13 Healing (or 16+2 = 18).", "1", ["4 + 9 + 1 − 9 − 5", "0"]),
          bar("Monk hero", 3, [PB, SU, EB, BS], "13 Protection, 4 Divine Favor.", 1, H3) ] },
        { name: "Paragon, 1 hero", prof: 9, costs: [1, "1"], badges: ["safe", "sr"], bars: [
          bar("Monk hero", 3, [PB, PV, ME, WS, SU, EB, BS], "15+4 = 19 Protection, 14+4 = 18 Healing, 11 Divine Favor, 5 Soul Reaping.", 1, ["4 + 6 + 0.75 × 6 − 9 − 6 + 2", "+1.5"]),
          bar("You", 9, { 0: PB, 1: BA, 7: HR }, "16 Leadership, 9+4 = 13 Protection.", "1", P2) ] },
        { name: "Mesmer, 1 hero", prof: 5, costs: ["1", 1], badges: ["safe", ...PCONS], bars: [
          bar("You", 5, { 0: PB, 1: PV, 2: ME, 3: WS, 4: BA, 7: SI }, "16+2 = 18 Illusion Magic (or 19 with +3) with the pcons.", "1", ["4 + 9 + 1 − 9 − 5", "0"]),
          bar("Monk hero", 3, [PB, SU, EB, BS], "13 Protection, 4 Divine Favor.", 1, H3) ] },
        { name: "Assassin, 1 hero", prof: 7, costs: ["1", 1], badges: ["safe", ...PCONS], bars: [
          bar("You", 7, { 0: PB, 1: PV, 2: ME, 3: WS, 4: BA, 6: RC, 7: ST }, "16 Critical Strikes, 9+6+3 = 18 Protection (19 with a +1 20% mod) and 9+6+3 = 18 Healing with the pcons.", "1", ["4 + 9 + 1 − 9 − 5", "0"]),
          bar("Monk hero", 3, [PB, SU, EB, BS], "13 Protection, 4 Divine Favor.", 1, H3) ] } ] },
      { title: "No heroes, Lightbringer 8", builds: [
        { name: "Monk alone", prof: 3, costs: ["2"], badges: ["lead", "sr", "sac"], bars: [
          bar("You", 3, { 0: PB, 1: ME, 2: BA, 3: EB, 7: HR }, "5 Leadership, 16+2 = 18 Protection, 16+2 = 18 Healing, 5 Soul Reaping, Fear Cuts Deeper and a Rune of Restoration.", "2", LB8) ] },
        { name: "Mesmer alone", prof: 5, costs: ["2"], badges: ["sr", "corn", "egg", "sac"], bars: [
          bar("You", 5, { 0: PB, 1: ME, 2: BA, 3: EB, 7: SI }, "16+2 = 18 Illusion Magic with the pcons, 5 Soul Reaping, Fear Cuts Deeper and a Rune of Restoration.", "2", LB8) ] },
        { name: "Assassin alone", prof: 7, costs: ["2"], badges: ["sr", ...PCONS, "sac"], bars: [
          bar("You", 7, { 0: PB, 1: ME, 2: BA, 3: EB, 6: RC, 7: ST }, "16 Critical Strikes, 9+6+3 = 18 Protection, 9+6+3 = 18 Healing, 5 Soul Reaping, Fear Cuts Deeper and a Rune of Restoration.", "2", LB8) ] } ] } ] },
  ];

  const badge = k => { const b = BADGES[k]; return `<img class="gb-badge" src="${b.img}" alt="${esc(b.name)}" data-tip="${esc(b.tip)}" data-tip-wide>`; };
  // a bar's Prot Bond cost: a string marks the player's (bold)
  const cost = c => `<span class="gb-cost${typeof c === "string" ? " you" : ""}">${c}e</span>`;
  const sumPill = ([math, r, note]) => `<span class="gb-sum${r.startsWith("−") ? " neg" : ""}" data-tip="${esc(`${math} = ${r}${note ? `. ${note}` : ""}`)}" data-tip-wide>${r}</span>`;
  const slot = n => { if (!n) return `<i class="bd-noskill" title="Free slot"></i>`; const id = sid(n), s = SKILLS[id];
    return `<a href="${HREF.skill(id)}" title="${esc(n)}" class="${s?.elite ? "elite" : ""}" style="--pc:${profVar(s?.profession || 0)}"><img src="img/skills/${id}.jpg" alt="${esc(n)}" loading="lazy"></a>`; };
  const barHTML = b => `<div class="gd-build" style="--pc:${profVar(b.prof)}">
    <div class="gd-who"><img class="ip" src="${profImg(b.prof)}" alt=""><b>${esc(b.who)}</b>${b.e !== undefined ? cost(b.e) : ""}</div>
    <div class="bd-obar">${b.slots.map(slot).join("")}</div>
    <div class="gd-info"><p class="bd-note">${esc(b.note)}${b.sum ? ` ${sumPill(b.sum)}` : ""}</p></div></div>`;
  const buildHTML = b => `<section class="gb-build"><h4>${b.prof ? `<img class="ip" src="${profImg(b.prof)}" alt="">` : ""}${esc(b.name)} <span class="gb-costs" data-tip="What Protective Bond costs each bar per damage packet, in bar order; the player's in bold." data-tip-wide>(${b.costs.map(cost).join(" / ")})</span>${(b.badges || []).map(badge).join("")}</h4>
    <div class="gd-builds">${b.bars.map(barHTML).join("")}</div></section>`;

  const intro = `<p>${text(`Alternatives to the <a href="guides?gom">guide's</a> build, from the original guide's Builds page. Every bar is written in {why:Protective Bond casting order|The bonder with the higher Protection casts first, then the next: each then pays 1 energy a packet.}, and every build runs at {why:Lightbringer 4 and up|Below that, only the Safe Mode builds, with \"of the Necromancer\" mods on the bonders.}.`, true)}</p>
    <div class="gb-legend">${Object.entries(BADGES).map(([k, b]) => `<span>${badge(k)} ${esc(b.name)}</span>`).join("")}</div>
    <div class="gd-box gb-energy"><h3>How the energy adds up</h3>
      <p>Each bar's pill is its energy balance in pips: what comes in, less what Protective Bond and the enchantments cost. Hover it for the arithmetic.</p>
      <ul>
        <li><b>In:</b> natural regeneration 2, 3 or 4 by profession; Succor 1; Essence Bond 6 (about two thirds of Prot Bond's 9 at Lightbringer 4); Balthazar's Spirit 9; Blessed Signet 0.75 an enchantment, with enough Divine Favor; Offering of Blood 2.75, 2.95 or 3.34 at 9, 10 or 13 Blood Magic; 5 Soul Reaping 2.</li>
        <li><b>Out:</b> Protective Bond 9 for each energy it costs a packet; 1 for each enchantment kept up.</li>
      </ul></div>`;
  document.getElementById("gom-builds").innerHTML = intro + GROUPS.map(g => `<section class="gb-group"><h2>${esc(g.title)}</h2>${g.sets.map(s => `<h3>${esc(s.title)}</h3>${s.builds.map(buildHTML).join("")}`).join("")}</section>`).join("");
}
