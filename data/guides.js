/* Guides, written by hand, each in a group of the list (group: "afk", "solo" or "quests"). Each guide is a list of sections, and each section a list of blocks:
   { h }, { p }, { note } (a paragraph set apart), { box: { title, blocks } } (an indented aside, for an option), { ul: [...] }, { ol: [...] }, { table: { head, rows, notes } }, { builds: [...] }, { qa: [[q, a]] }
   { img: { src, caption, side } }, { imgs: { srcs, caption } } (pictures in a row), { map: place, side } (the place's map window), { capCalc: { base, rate, rows } } (a faction
   cap calculator: rows of [text, faction] to tick, and one { rank, first, each, max } for a title). A section with flow: true lets its side picture run on beside the next one.
   A build has a template code, or skills by name (null for a free slot) when no code fits it, and may have runes as on
   the Builds page ({ "Fast Casting": "3+1" }), and gear shown beside the attributes (gear: ["High energy"]). A build
   may instead be a Builds page build's id ("zos-mm"), shown with its insignia and weapons; repeats of a bar show once, counted.
   In text, {skill:Name} links a skill with its icon, {skillname:Name} without, {place:Name} a location, {mission:Name} a mission, {page:href|text} another
   page and {ext:href|text} another site, {quest:Name} a quest and {hero:Name} a hero.
   { route: [{ start | map | step | area: place, steps: [{ t, take: [...], go: [...], done: [...] }] }] } (area: a part of the same zone) is a numbered walk in
   legs, one per place: where you start, map travel to an outpost, or a step through a portal. Each step says what to
   do, and the quests it takes, moves on and turns in. { routeTotal } sums the XP of the quests the route finishes, and counts its zone loads; { routeTotal: { plus } } names a reward on top.
   { questIndex: { region, skip: { name: reason } } } lists every quest of a
   region with its rewards and the steps that take and finish it. */
const GWW_USER = "https://wiki.guildwars.com/wiki/User:Foo";
const GWW_FOO = GWW_USER + "/GoM";
window.GW_GUIDES = [
  {
    id: "gom-afk-xp",
    group: "afk",
    name: "GoM AFK XP Farm",
    summary: "An AFK XP farm in Gate of Madness: the Legendary Survivor title in about 4 hours, and 534 skill points a day.",
    tags: ["Farm", "XP", "AFK", "Normal mode", "3 heroes"],
    mission: "Gate of Madness",
    source: { href: GWW_FOO, archive: "https://web.archive.org/web/2026/" + GWW_FOO, author: "Foo" },
    stats: [["Per kill", "348 XP"], ["Per hour", "334,080 XP"], ["Setup", "~8 min"]],
    sections: [
      {
        blocks: [
          { p: "A shortened version of the {ext:" + GWW_FOO + "|full guide on the Guild Wars Wiki} ({ext:https://web.archive.org/web/2026/" + GWW_FOO + "|archived copy})." },
          { img: { src: "img/guides/gom-afk-xp-1.jpg", caption: "The farm running: bonders at the end of the long shadow (flag 3), the player just south of the Portal Wraiths, the Keystone on the far edge of the aggro bubble (flag 1)." } },
          { p: "Legendary Survivor in about 4 hours, or 534 skill points a day. Normal mode, {mission:Gate of Madness}; about 8 minutes to set up, then it runs indefinitely." },
        ],
      },
      {
        title: "How it works",
        blocks: [
          { ul: [
            "A Chaos Rift spawns 8 Titans every 30 seconds, and you tank them.",
            "Your health is set so each hit does only 1 damage, under {skill:Protective Bond} and the Lightbringer title.",
            "Two Monk heroes keep the bond up and heal the conditions; that 1 damage pays their energy back through {skill:Essence Bond}.",
            "A {skill:Keystone Signet} Mesmer hero kills. The rest of the party stays away, so the XP is split only two ways.",
          ] },
        ],
      },
      {
        title: "Build",
        blocks: [
          { builds: [
            { name: "Player", role: "You", skills: [null, null, null, null, null, null, null, "Heroic Refrain"],
              note: "Any profession. 5 Leadership from an \"of the Paragon\" mod; health by LB rank (table below)." },
            { name: "Prot Bonder", code: "OwAS8Y4NHkrPNRfkSAAAAAA", mode: "Avoid", runes: { "Protection Prayers": "3+1" }, insignia: "Radiant",
              note: "Bonds first. 16 Protection (18 after Heroic Refrain), 7 Divine Favor." },
            { name: "Heal Bonder", code: "OwAT043Ct4gi8f6LlAAAAAA", mode: "Avoid", runes: { "Healing Prayers": "3+1", "Divine Favor": "1" }, insignia: "Radiant",
              note: "Bonds second. 16 Healing (18 after Heroic Refrain), 11 Protection (13 after Heroic Refrain), 7 Divine Favor." },
            { name: "Keystone", code: "OQNCA8wDP9B8DyzmOUi1veC", mode: "Fight", runes: { "Fast Casting": "3+1", "Inspiration Magic": "3" },
              note: "16 Fast Casting, 15 Inspiration with runes. No weapon." },
          ] },
          { box: { title: "Optional: without Heroic Refrain", blocks: [
              { p: "As an alternative at LB4 and up, you can be the third bonder instead of using Heroic Refrain. Two bonders need 18 and 13 Protection, but three can do with 13, 8 and 3: the Prot Bonder at 13, the Heal Bonder at 8 and you at 3, bonding in that order." },
              { builds: [
                { name: "Player", role: "You", skills: ["Protective Bond", "Balthazar's Spirit", null, null, null, null, null, null],
                  note: "Monk secondary with 3 Protection. Balthazar's Spirit fully pays for your share of the bond." },
              ] },
              { p: "The cost: without Heroic Refrain's +2, Purifying Veil and Mending are weaker, so conditions last longer and Mending gives less health regeneration. That's a little less safe at high LB, and still fine at LB4." },
          ] } },
          { ul: [
            "Put these 3 heroes first in the party, so each can be flagged.",
            "Bonders: all bonds disabled, about 50 energy.",
          ] },
          { p: "Wear a low-armor set (from Banoit, Kambei, Moon Ahn, Nu Leng or Mehinu), with health by LB rank:" },
          { table: {
            head: ["LB¹", "Target HP²", "With morale³", "How", "Correction for Dervishes⁴"],
            rows: [
              ["8", "180", "190", "4 superior runes", "No chest piece"],
              ["7", "160", "170", "4 superior runes, −20 \"Life is Pain\" focus", "No chest piece"],
              ["6", "145", "155", "5 superior runes, full Survivor", "Survivor only on chest"],
              ["5", "125", "135", "5 superior runes, Survivor chest and head", "Survivor only on chest, −20 focus"],
              ["4", "105", "115", "5 superior runes", "−20 focus"],
            ],
            notes: [
              "¹ For LB2 or LB3, see the full guide linked at the end of the page.",
              "² Up to 20 HP over the target is fine: hits then do 2 damage.",
              "³ After closing the Torment rift (+2% morale).",
              "⁴ Dervishes get +25 health from their chest piece.",
            ],
          } },
          { box: { title: "Optional: extra safety", blocks: [
            { ul: [
              "Energy: \"of the Necromancer\" weapons on both bonders.",
              "Health: a +1/20% Protection item on the Prot Bonder, recasting Purifying Veil until it lands at 62%, which cuts Burning to 2 seconds.",
            ] },
          ] } },
        ],
      },
      {
        title: "Walkthrough",
        blocks: [
          { img: { src: "img/guides/gom-afk-xp-2.jpg", caption: "The path, and the compass once everyone is in place.", side: true } },
          { p: "Fight your way to the Chaos Rifts." },
          { h: "Clear" },
          { ul: [
            "The 3 Portal Wraiths at the Torment rift (left, south): +2% morale.",
            "The 3 Torment creatures and 2 Margonites patrolling.",
          ] },
          { h: "Leave alone" },
          { ul: [
            "The 2 Titan Abominations: killed ones respawn.",
            "The 3 Portal Wraiths at the Titan rift (right, north): if all die, the Titans stop.",
            "Everything further west: closing another rift adds morale and throws off your health.",
          ] },
          { h: "Set up" },
          { ol: [
            "Flag the bonders and the Keystone at the tip of the long shadow; flag everyone else out of compass range.",
            "Wield the \"of the Paragon\" weapon. Heroic Refrain each bonder in turn, and let it put its 4 enchantments on you.",
            "Switch to the low-health set, check your health, then reactivate the Lightbringer title.",
            "Aggro the Titans and stand just south of the Portal Wraiths, without aggroing them.",
            "Flag the Keystone to the edge of your aggro bubble, away from the Wraiths, and use the scroll.",
          ] },
          { p: "Watch a couple of Madness Titan cycles: they bleed and burn you, and their holy damage gives no Essence Bond energy. If your health and the bonders' energy hold, go AFK." },
        ],
      },
    ],
  },
  {
    id: "pre-searing-quests",
    group: "quests",
    name: "Pre-Searing Quests",
    summary: "An efficient route through the pre-Searing quests, with as little fighting and backtracking as possible.",
    tags: ["Quests", "Pre-Searing", "Route"],
    sections: [
      {
        blocks: [
          { p: "This is a walkthrough for characters that have saved most of the pre-Searing quests for a higher level, with as little fighting and backtracking as possible. Each group starts at a map travel or a portal." },
          { p: "Assumed done already:" },
          { ul: [
            "Every pre-Searing outpost unlocked.",
            "{quest:Adventure with an Ally} ({skillname:Resurrection Signet}).",
            "Every primary and secondary profession quest, for their skills.",
            "The Piken Square quests, through {quest:The Scourge Beneath} ({hero:Devona} as a hero).",
          ] },
          { note: "Note: this route was computer generated and hasn't been checked in a playthrough yet." },
        ],
      },
      {
        title: "Route",
        blocks: [
          { route: [
            { start: "Ascalon City", steps: [
              { t: "Talk to the Town Crier.", take: ["Getting Started in Guild Wars", "Message from a Friend", "Trouble in the Woods"] },
              { t: "Cross the bridge to Sir Tydus at the Academy gate.", done: ["Message from a Friend"] },
              { t: "Talk to Baron Egan, Namar and Sandre Elek.", take: ["Bandit Raid", "The Poison Devourer", "Poor Tenant", "The Wayward Wizard"] },
            ] },
            { step: "Lakeside County", steps: [
              { t: "Talk to Gwen, behind the resurrection shrine on your left, and to Haversdan, right outside the gate.", take: ["Gwen's Flute", "Further Adventures"] },
              { t: "Just west of the city portal, wait for Prince Rurik and Captain Osric to finish talking, then talk to Osric.", take: ["A Gift for Althea"] },
              { t: "Go south to the river and pick up the Broken Flute on the far shore. Keep it for now.", go: ["Gwen's Flute"] },
              { t: "Go slightly uphill to Duke Gaban and Fadden Hathorn.", take: ["The Egg Hunter"] },
              { t: "Lead Fadden into the cave and keep him safe while he gathers eggs.", go: ["The Egg Hunter"] },
              { t: "Go on to the end of the cave and kill the Plague Devourer; pick up a poisonous stinger.", go: ["The Poison Devourer"] },
              { t: "Back to Duke Gaban: he gives you 2 devourer eggs.", done: ["The Egg Hunter"] },
              { t: "Follow the road southwest to Ashford village. Talk to Devona.", done: ["Further Adventures"], take: ["Unsettling Rumors"] },
              { t: "Talk to Devona again, follow her across the bridge and kill the grawl.", done: ["Trouble in the Woods"] },
              { t: "Talk to Pitney, next to Devona, give him an egg, follow him to his field and kill the Worm Queen. Don't leave the area meanwhile, or you need another egg.", take: ["The Worm Problem"], done: ["The Worm Problem"] },
              { t: "Talk to Pitney again, Chantalle the Troubadour and Alison the Tanner.", take: ["The Prize Moa Bird", "The Hunter's Horn", "Little Thom's Big Cloak"] },
              { t: "Talk to Miller Upton, then lure the three bee swarms across the bridge with the honeycomb and return to him.", done: ["Poor Tenant"] },
              { t: "Open the Beautiful Shell near the watermill for the Beautiful Pearl.", go: ["A Gift for Althea"] },
              { t: "Pick up the Beautiful Feather on the hill in the middle of the village.", go: ["A Gift for Althea"] },
            ] },
            { map: "Ashford Abbey", steps: [
              { t: "Talk to Meerak the Scribe, and give Brother Mhenlo the stinger.", go: ["Unsettling Rumors"], done: ["The Poison Devourer"] },
            ] },
            { step: "Lakeside County", steps: [
              { t: "Cross the worm field to the bandit camp, and go on northeast up the mountain pass to the chest with the Beautiful Pendant.", go: ["A Gift for Althea"] },
              { t: "Back at the bandit camp, take the Ashford strongbox, fighting only what notices you.", go: ["Bandit Raid"] },
              { t: "Carry the strongbox to Devona on foot: map travel loses it.", done: ["Bandit Raid"] },
            ] },
            { map: "Ascalon City", steps: [
              { t: "Give Armin Saberlin the message, and talk to Prince Rurik.", done: ["Unsettling Rumors"], take: ["Charr in the Catacombs"] },
            ] },
            { map: "Ashford Abbey", steps: [
              { t: "Ask Brother Mhenlo about the Charr ranger.", go: ["Charr in the Catacombs"] },
            ] },
            { step: "The Catacombs", steps: [
              { t: "Necromancer Munne is on your right: ask about the Charr, and take the candles.", go: ["Charr in the Catacombs"], take: ["Rites of Remembrance"] },
              { t: "Light the four braziers in the order the map shows. Swamp water drains health, and dying loses the candles.", go: ["Rites of Remembrance"] },
              { t: "Find the Corpse of Prize Moa Bird in the south, past the corridor of undead.", go: ["The Prize Moa Bird"] },
              { t: "Find Oberan the Reviled, toward the Green Hills County exit, and ask him about the Charr ranger for the Sharp Charr Tooth.", go: ["Charr in the Catacombs"] },
            ] },
            { map: "Ashford Abbey", steps: [] },
            { step: "The Catacombs", steps: [
              { t: "Talk to Munne, right by the entrance.", done: ["Rites of Remembrance"] },
            ] },
            { map: "Ashford Abbey", steps: [] },
            { step: "Lakeside County", steps: [
              { t: "In Ashford village, give Pitney the news, and talk to Devona.", done: ["The Prize Moa Bird"], take: ["Opposition to the King", "Tithe for Ashford Abbey"] },
              { t: "Go north from Ashford to the Green Hills County portal." },
            ] },
            { step: "Green Hills County", steps: [
              { t: "By the Balthazar statue just past the portal, talk to Grazden the Protector for the tithe, and question him, Farrah Cappo and Kasha Blackblood.", go: ["Tithe for Ashford Abbey", "Opposition to the King"] },
            ] },
            { map: "The Barradin Estate", steps: [
              { t: "Talk to Duke Barradin.", take: ["The True King"] },
            ] },
            { map: "Foible's Fair", steps: [
              { t: "Talk to Ralena Stormbringer.", go: ["The Wayward Wizard"] },
            ] },
            { step: "Wizard's Folly", steps: [
              { t: "Kill black bears for a bear pelt on the way to Orion: northeast along the road to the house on the left, then west through the trees.", go: ["The Wayward Wizard", "Little Thom's Big Cloak"] },
            ] },
            { map: "Fort Ranik", steps: [
              { t: "Give Lord Darrin the message.", done: ["The True King"] },
            ] },
            { step: "Regent Valley", steps: [
              { t: "Talk to Mary Malone, right outside Fort Ranik. Go south then east to the arches, kill the spiders and bring her the Basket of Apples on foot.", take: ["The Orchard"], done: ["The Orchard"] },
              { t: "Head southwest toward Wizard's Folly. Just before the exit, go south to the healing spring and use it to purify the hunter's horn.", go: ["The Hunter's Horn"] },
            ] },
            { step: "Wizard's Folly", steps: [
              { t: "Go west along the river to the fishing village, then south and east to Aidan.", done: ["The Hunter's Horn"] },
            ] },
            { map: "Ashford Abbey", steps: [] },
            { step: "Lakeside County", steps: [
              { t: "In Ashford village, talk to Devona, and to Alison the Tanner, who turns the pelt into a cloak.", go: ["Little Thom's Big Cloak"], done: ["Opposition to the King", "Tithe for Ashford Abbey"] },
            ] },
            { map: "The Barradin Estate", steps: [
              { t: "Give Little Thom the cloak.", done: ["Little Thom's Big Cloak"] },
            ] },
            { map: "Ascalon City", steps: [
              { t: "Talk to Sandre Elek and Prince Rurik; Rurik then gives you the next quest.", done: ["The Wayward Wizard", "Charr in the Catacombs"], take: ["Charr at the Gate"] },
              { t: "Talk to Armin Saberlin and pick your secondary profession, then talk to Sir Tydus, then the Town Crier.", take: ["A Second Profession", "The Path to Glory"], done: ["A Second Profession", "The Path to Glory", "Getting Started in Guild Wars"] },
            ] },
            { step: "Lakeside County", steps: [
              { t: "Give Gwen her flute.", done: ["Gwen's Flute"] },
              { t: "Give Captain Osric the feather, the pearl and the pendant: he turns down the first two and takes the third.", done: ["A Gift for Althea"] },
              { t: "Meet Rurik just outside and follow him to the Northlands gate; let him and his allies kill the Charr. Get the reward from him there.", done: ["Charr at the Gate"] },
            ] },
          ] },
          { routeTotal: true },
        ],
      },
      {
        title: "All quests",
        blocks: [
          { questIndex: { region: "Ascalon (pre-Searing)", skip: {
            "War Preparations": "Gone after your test",
            "Adventure with an Ally": "Done: you have the Resurrection Signet",
            "Across the Wall": "Done: you have Piken Square", "A Bastion In the North": "Done: you have Piken Square",
            "Long Thought Forgotten": "Done: you have Devona", "Charr in the Tunnels": "Done: you have Devona",
            "The Scourge Beneath": "Done: you have Devona",
            "Warrior Test": "Done: your profession test", "Ranger Test": "Done: your profession test", "Monk Test": "Done: your profession test",
            "Necromancer Test": "Done: your profession test", "Mesmer Test": "Done: your profession test", "Elementalist Test": "Done: your profession test",
            "The Rogue's Replacement": "Follows A Mesmer's Burden",
          }, rest: "Done: your profession skills", daily: "Vanguard" } },
        ],
      },
    ],
  },
  {
    id: "fow-quests",
    group: "quests",
    name: "Fissure of Woe Quests",
    summary: "An efficient route through all eleven Fissure of Woe quests, with as little backtracking as possible.",
    tags: ["Quests", "Fissure of Woe", "Route"],
    sections: [
      {
        blocks: [
          { map: "The Fissure of Woe", side: true },
          { p: "{place:The Fissure of Woe} is Balthazar's realm in the Mists: an elite area for a full party, heroes allowed. Its eleven repeatable quests pay 100,000 XP in all, plus a reward chest by the Forgemaster once they're all done. It's the only place Obsidian Shards drop, and once Restore the Temple of War is done, the Forgemaster offers Obsidian armor." },
          { p: "This guide is for doing all eleven in one run, in an order with as little backtracking as possible. The Hunt sets the order: its seven Shard Wolves only count once you have the quest, and its giver stands south of the Temple of War. So the route opens the temple first, picks up the hunt, and then sweeps the rest of the map once, killing each wolf on the way." },
          { p: "The {page:builds#team=meta|meta hero team} can do it." },
          { note: "Note: this guide hasn't been fact-checked yet, so it may have mistakes." },
        ],
      },
      {
        title: "Route",
        blocks: [
          { route: [
            { start: "The Fissure of Woe", steps: [
              { t: "Clear the area around Rastigan the Eternal, and talk to him. Taking the quest is safe, but killing one of the ranger groups by the tower starts it: he then walks to the tower through anything in his way.", take: ["Tower of Courage"] },
            ] },
            { area: "Tower of Courage", steps: [
              { t: "Up the hill to the east, kill the Shadow Army groups around the tower. Rastigan opens the gate: kill the Shadow Lord and his two Abyssals, and open the chest inside.", go: ["Tower of Courage"] },
              { t: "Back to Rastigan. Keep his next quest for later.", done: ["Tower of Courage"], take: ["The Wailing Lord"] },
            ] },
            { area: "Great Battle Field", steps: [
              { t: "Go east, then north, to the Eternals' camp on the west side of the battle field. Kill the Shadow Army group there to free Kromril the Eternal and the Eternal Weaponsmith, and talk to both.", take: ["Army of Darkness", "The Eternal Forgemaster"] },
              { t: "Cross to the Shadow Army camp on the hill to the east. Kill both Dragon Liches at its ramps first, then the Priest of Menzies.", go: ["Army of Darkness"] },
              { t: "Pick up his book and carry it straight back to Kromril: it's a bundle, so you can't put it away.", done: ["Army of Darkness"] },
            ] },
            { area: "Temple of War", steps: [
              { t: "The temple stands on the mound south of the Eternals' camp. Kill the Shadow Mesmers and Monks halfway up the ramp; the big group at its foot can be skipped. Inside, clear the round course, then the Shadow Rangers on the four ramps of the center platform.", go: ["The Eternal Forgemaster"] },
              { t: "The Eternal Forgemaster appears on the platform.", done: ["The Eternal Forgemaster"], take: ["Defend the Temple of War"] },
              { t: "Hold the platform against twelve groups, Shadow Beasts and then Abyssals, and keep the Forgemaster alive.", go: ["Defend the Temple of War"] },
              { t: "Turn in to the Forgemaster, and talk to Eternal Lord Taeres, who now stands in the temple.", done: ["Defend the Temple of War"], take: ["Restore the Temple of War", "Khobay the Betrayer", "Tower of Strength"] },
            ] },
            { area: "Spider Cave", steps: [
              { t: "Leave by the south exit, keep right and kill the three big Shadow Army groups. Nimros the Hunter stands straight south of the temple.", take: ["The Hunt"] },
              { t: "Kill the Shard Wolf just north of him.", go: ["The Hunt"] },
              { t: "Go into the Spider Cave nearby and kill the five Seeds of Corruption. Armored Cave Spiders drop from the ceiling, so advance slowly.", go: ["Restore the Temple of War"] },
            ] },
            { area: "Fissure Shore", steps: [
              { t: "Follow the cave out to the shore, and kill the Shard Wolf by Admiral Saidon the Eternal.", go: ["The Hunt"] },
            ] },
            { area: "Tower of Courage", steps: [
              { t: "Take the shore's west exit to the hills below the Tower of Courage, and kill the Shard Wolf southeast of the tower.", go: ["The Hunt"] },
            ] },
            { area: "Forest of the Wailing Lord", steps: [
              { t: "From the tower, go east and north into the valley, then west along the left wall into the forest. Kill the Shard Wolf, and clear the west side of the forest, where the griffons will appear.", go: ["The Hunt"] },
              { t: "Lure the skeletons off the bridge, and kill the five forest banshees by the Wailing Lord. Don't harm him: no AoE near him, and keep minions off him.", go: ["The Wailing Lord"] },
              { t: "Talk to the Wailing Lord, now friendly.", take: ["A Gift of Griffons"] },
              { t: "Lead the three Forest Griffons to the Tower of Courage. Foes respawn behind you on the way, and a dead griffon sends everyone out.", go: ["A Gift of Griffons"] },
            ] },
            { area: "Tower of Courage", steps: [
              { t: "Turn both in to Rastigan.", done: ["The Wailing Lord", "A Gift of Griffons"] },
            ] },
            { area: "Great Battle Field", steps: [
              { t: "Go east and north again, and kill the Shard Wolf in the middle of the battle field on the way east.", go: ["The Hunt"] },
            ] },
            { area: "Burning Forest", steps: [
              { t: "Go northeast into the Burning Forest. Talk to Miko the Unchained at its southern entrance.", take: ["Slaves of Menzies"] },
              { t: "Kill the Shard Wolf near the great fire in the middle.", go: ["The Hunt"] },
              { t: "By the windmill in the northeast corner, kill the four groups of a Shadow Overlord, a Shadow Mesmer and a Shadow Ranger.", go: ["Slaves of Menzies"] },
              { t: "Back to Miko.", done: ["Slaves of Menzies"] },
            ] },
            { area: "Tower of Strength", steps: [
              { t: "Take the fork south toward the Tower of Strength. Kill the five Shadow Patrols on the way, and the Shard Wolf by the Infernal Wurm outside the tower.", go: ["Tower of Strength", "The Hunt"] },
              { t: "Send one player to the temple's south exit to fetch the Tower Mage: he walks to the tower and opens it. Kill the Shadow Lord inside.", go: ["Tower of Strength"] },
            ] },
            { area: "Lake of Fire", steps: [
              { t: "Cross the bridge south over the Lake of Fire, past the Obsidian Furnace Drakes, and kill Lord Khobay and his Traitorous Temple Guards. An Infernal Wurm guards him.", go: ["Khobay the Betrayer"] },
            ] },
            { area: "Temple of War", steps: [
              { t: "Back to Nimros, south of the temple.", done: ["The Hunt"] },
              { t: "Up into the temple: turn in to the Forgemaster and Lord Taeres.", done: ["Restore the Temple of War", "Khobay the Betrayer", "Tower of Strength"] },
              { t: "With every quest done, open the Chest of Woe by the Forgemaster." },
            ] },
          ] },
          { routeTotal: { plus: "the Chest of Woe" } },
        ],
      },
      {
        title: "All quests",
        blocks: [
          { questIndex: { region: "The Fissure of Woe", skip: {}, rest: "" } },
        ],
      },
    ],
  },
  {
    id: "uw-quests",
    group: "quests",
    name: "Underworld Quests",
    summary: "All eleven Underworld quests in one run, the dangerous ones first, ending with Dhuum.",
    tags: ["Quests", "Underworld", "Route"],
    sections: [
      {
        flow: true,
        blocks: [
          { map: "The Underworld", side: true },
          { p: "{place:The Underworld} is Grenth's realm in the Mists: an elite area for a full party, heroes allowed. Its eleven repeatable quests pay 110,000 XP in all, and the last one, against Dhuum, earns the Underworld Chest. It's also the main place Globs of Ectoplasm drop." },
          { p: "This guide is for doing all eleven in one run. Most of the quests send you out of the Underworld if an NPC dies, so the order puts the dangerous ones first: a failure early costs little, and the easy ones are left for when the team has the most to lose." },
          { p: "With practice, it can be done with the {page:builds#team=meta|meta hero team}." },
          { note: "Note: this guide hasn't been fact-checked yet, so it may have mistakes." },
        ],
      },
      {
        title: "Releasing the Reapers",
        flow: true,
        blocks: [
          { p: "Each area has a statue of Grenth with a Reaper imprisoned at it. Clear the Chamber frees the Reaper of the Labyrinth, and his Restoring Grenth's Monuments puts three Terrorweb Dryders at each of the other six statues: kill them and that area's Reaper appears." },
          { ul: [
            "A freed Reaper gives the area's quest, and teleports the party to any other freed Reaper. Free them as you go, and the rest of the run is mostly teleports.",
            "A Reaper that dies sends everyone out, so clear the monsters around a statue before killing its Dryders.",
            "The Terrorweb Dryders are fire Elementalists with Meteor Shower among their AoE, and they make up most quest spawns too. Kill them first, and keep them away from the NPCs you protect.",
            "Once ten quests are done, the Reapers only teleport one player at a time, and once anyone enters the Hall of Judgment they're gone.",
          ] },
        ],
      },
      {
        title: "Black Widows",
        blocks: [
          { p: "Black Widows are a rare pet, one of three with a statue in the Hall of Monuments' Fellowship monument, and the Underworld is the only place to charm one. A level 20 widow with a random evolution spawns when you finish Demon Assassin, Imprisoned Spirits, Servants of Grenth, Terrorweb Queen, the Four Horsemen and Wrathful Spirits, and three more when Dhuum is down. Bring a Ranger hero to charm one, and tell the party first: a widow turns hostile while it's being charmed." },
        ],
      },
      {
        title: "Route",
        blocks: [
          { route: [
            { start: "The Underworld", steps: [
              { t: "Take the quest from the Lost Soul. Kill the three groups of Grasping Darknesses that rush in, and the Bladed Aatxes around the start. The doors open: head into the Labyrinth, clear around Grenth's statue, and kill its three Terrorweb Dryders last.", take: ["Clear the Chamber"], go: ["Clear the Chamber"] },
              { t: "Talk to the Reaper of the Labyrinth, and take only the monuments quest for now.", done: ["Clear the Chamber"], take: ["Restoring Grenth's Monuments"] },
            ] },
            { area: "Ice Wastes", steps: [
              { t: "Go to the Ice Wastes, clear around the statue and free the Reaper. Leave his quest for later: this Reaper is your second teleport for Unwanted Guests.", go: ["Restoring Grenth's Monuments"] },
            ] },
            { area: "Labyrinth", steps: [
              { t: "Teleport to the Reaper of the Labyrinth, with the whole Labyrinth cleared, and take Unwanted Guests. Six clusters spawn around the Labyrinth, each a Keeper of Souls with six Dryders, three Skeletons of Dhuum and six Vengeful Aatxes. The Keeper is what matters: while he lives, nothing can hurt his Aatxes, and when he dies his whole cluster dies with him. So the quest is six Keeper kills, and the fight is about reaching each Keeper without being stuck under invulnerable Aatxes.", take: ["Unwanted Guests"] },
              { t: "Walking into a cluster from the front brings the Aatxes first. The Reapers are the way around: talk to the Reaper of the Labyrinth, teleport to the Ice Wastes Reaper, and walk back into the Labyrinth from that side, reaching clusters from behind, where the Dryders and the Keeper often stand clear of the Aatxes. Kill the Dryders, then the Keeper. When the Aatxes do come, tank them, or knock them down and cripple them, while the rest kill the Keeper; teleport between the two Reapers to come at each cluster from its open side.", go: ["Unwanted Guests"] },
              { t: "Back to the Reaper of the Labyrinth.", done: ["Unwanted Guests"] },
            ] },
            { area: "Twin Serpent Mountains", steps: [
              { t: "Go to the mountains and free their Reaper. Keep his quest for later.", go: ["Restoring Grenth's Monuments"] },
            ] },
            { area: "Chaos Planes", steps: [
              { t: "On to the Chaos Planes, and free their Reaper. A lone Banished Dream Rider spawns three Mindblade Spectres when it dies, those spawn six, and those nine: leave them alone.", go: ["Restoring Grenth's Monuments"] },
              { t: "The Four Horsemen is the hardest quest down here, and worth watching {ext:https://www.youtube.com/results?search_query=guild+wars+underworld+four+horsemen|a video of it} first. Clear everything around the Reaper and rest to full energy before taking it: he fights alone, and if he dies the run is over. Four groups spawn in different places around the planes, each a Horseman with Terrorweb Dryders and a Skeleton of Dhuum. They join up in two big groups, Ghozer with Kazhad and Thul Za with Madruk, about a radar circle out on either side, and close in on the Reaper from both sides at once.", take: ["The Four Horsemen"] },
              { t: "The Horsemen are level 28 Mesmers built to shut down a party: Power Block and Diversion lock your healers' skills, Cry of Frustration interrupts, Drain Enchantment strips protection, and Wastrel's Worry punishes casting. The Dryders bring the damage, with Meteor Shower and other fire AoE, and the Skeletons pile on with Bone Spike. Two ways to hold: make a stand around the Reaper, spread out and flagged apart so one AoE never hits two, with every healer on him; or hold one side with a tank that can't be targeted by spells while the rest meet the other side as far out as they can, before it joins up, then turn to the tank. Either way, spread the healing over several heroes so one locked bar doesn't lose the Reaper, interrupt Meteor Showers, kill the Dryders nearest the Reaper first, and keep going until all four Horsemen are dead.", done: ["The Four Horsemen"] },
            ] },
            { area: "Ice Wastes", steps: [
              { t: "Teleport to the Ice Wastes. Taking Servants of Grenth sends three quick waves, each two groups of Dryders and a Skeleton of Dhuum: one goes for King Frozenwind, the other for the Reaper, and either dying ends the run. The King and his four Ice Elementals hold one group with Ward Against Harm; the Reaper has nothing. Stand between the spawn and the Reaper, or meet the waves at the spawn with the whole team, and kill fast.", take: ["Servants of Grenth"], done: ["Servants of Grenth"] },
            ] },
            { area: "Bone Pits", steps: [
              { t: "Teleport to the Chaos Planes, and through the stone arch by their Reaper into the Bone Pits. Clear the area and free the Reaper.", go: ["Restoring Grenth's Monuments"] },
              { t: "Send the party down by the pit, and have one player take the quest. Four Tortured Spirits climb out one by one: if one dies, the run is over, and they run at any foe in range. Three Skeletons of Dhuum spawn at once, then Dryders by the bridge, a smaller group by the hooked path, and a third group past the first about a minute in. Stand on the spawns so nothing reaches the spirits; once it's all dead they walk to the Reaper.", take: ["Imprisoned Spirits"], done: ["Imprisoned Spirits"] },
            ] },
            { area: "Twin Serpent Mountains", steps: [
              { t: "Teleport to the mountains for Demon Assassin, and fight away from the Reaper. The Slayer climbs up slowly and is no threat, but it brings four Keepers of Souls and eight Dryders that advance together on the Reaper. Spread out against their AoE, hit them while they bunch up, and kill every last one before turning in, or they kill the Reaper after.", take: ["Demon Assassin"], done: ["Demon Assassin"] },
            ] },
            { area: "Spawning Pools", steps: [
              { t: "Teleport to the Chaos Planes and go on to the Spawning Pools, the hardest area: Dryders and Charged Blacknesses, both Elementalists. Free the Reaper.", go: ["Restoring Grenth's Monuments"] },
              { t: "The Queen spawns in a narrow passage with four Obsidian Guardians, which knock down and ward her, and each side of her room gets four more Guardians, three Skeletons of Dhuum and four Dryders. Clear one side, teleport around to clear the other, or pull the Queen out of the wards: she attacks from far, so back off further than usual.", take: ["Terrorweb Queen"], done: ["Terrorweb Queen"] },
            ] },
            { area: "Forgotten Vale", steps: [
              { t: "Teleport to the Labyrinth and go on to the Vale. The friendly villagers, Tortured Spirits, only appear as you kill the groups of Grasping Darknesses near Mayor Alegheri: leave the first group alive and fewer of them spawn. Kill the patrolling Nights, and free the Reaper.", go: ["Restoring Grenth's Monuments"] },
              { t: "Taking Wrathful Spirits puts four groups of three hostile spirits among the villagers and one on the hill. Their Illusionary Weaponry hits for 40 armor-ignoring damage, so a group melts anything it focuses: keep at least one villager alive, then the Mayor and the Reaper, who are next. The hill group can wait.", take: ["Wrathful Spirits"], done: ["Wrathful Spirits"] },
            ] },
            { area: "Labyrinth", steps: [
              { t: "Teleport to the Reaper of the Labyrinth and turn in the monuments.", done: ["Restoring Grenth's Monuments"] },
              { t: "Leave one player at the Reaper of the Labyrinth and walk everyone else back to the chamber where you entered the Underworld: the first group of six Mindblade Spectres spawns there. Once they're in place, the player at the Reaper takes Escort of Souls. Six New Souls set off for the Vale on their own, and more Spectres spawn in the hall to the Vale, at its gate, and between the Mayor and the bridge: stay ahead of the souls and kill each group before they arrive. Don't teleport ahead, or they walk into the first group alone.", take: ["Escort of Souls"], done: ["Escort of Souls"] },
            ] },
            { area: "Hall of Judgment", steps: [
              { t: "Teleport to the Ice Wastes and go to King Frozenwind at the Hall of Judgment. Gather the whole party before anyone takes the quest: it removes every Reaper.", take: ["The Nightman Cometh"] },
              { t: "Enter the Hall together: the doors close and Dhuum turns hostile. Two things end the fight: the Dhuum's Rest bar filling, which the Reapers fill along with players in Spirit Form, and Dhuum dropping below 25% health. Kill the Minions and Champions of Dhuum he keeps summoning, or they swarm you; Edge of Extinction helps. Resurrection skills don't work in the Hall, but Resurrection Scrolls and \"By Ural's Hammer!\" do. Dying, or reaching 60% death penalty, puts you next to Mayor Alegheri in the Vale in Spirit Form: talk to him to go back; heroes go back on their own. Don't use Encase Skeletal: it makes the skeleton unkillable.", go: ["The Nightman Cometh"] },
              { t: "Turn in to King Frozenwind, and open the Underworld Chest at the Hall's door.", done: ["The Nightman Cometh"] },
            ] },
          ] },
          { routeTotal: { plus: "the Underworld Chest" } },
        ],
      },
      {
        title: "All quests",
        blocks: [
          { questIndex: { region: "The Underworld", skip: {}, rest: "" } },
        ],
      },
    ],
  },
  {
    id: "chaos-axe-farm",
    group: "solo",
    name: "Purp Insc Chaos Axe Farm",
    summary: "Purple and blue inscribable Chaos Axes and Shadow Shields, Blades, Bows and Staves from two Obsidian Furnace Drakes in Kourna, solo.",
    tags: ["Farm", "Weapons", "Solo", "Koss"],
    source: { href: GWW_USER, archive: "https://web.archive.org/web/2026/" + GWW_USER, author: "Foo", full: true },
    stats: [["Per run", "~45 s"], ["Inscribable drop", "~1 in 30 runs"]],
    sections: [
      {
        blocks: [
          { p: "Chaos Axes and the Shadow weapons are Obsidian Furnace Drake drops, and nowhere else do these skins drop as inscribable blue or purple items. The {quest:Drakes on the Plain} quest brings two of the drakes into Elona, where they drop as Nightfall items: blue and purple Chaos Axes and Shadow Shields, Blades, Bows and Staves with an inscription slot." },
          { imgs: { srcs: ["img/guides/chaos-axe-farm-axe.jpg", "img/guides/chaos-axe-farm-shield.jpg", "img/guides/chaos-axe-farm-staff.jpg"], caption: "A purple Chaos Axe, a blue Shadow Shield and a blue Shadow Staff from the farm, each with an empty inscription slot." } },
        ],
      },
      {
        title: "Build",
        blocks: [
          { builds: [
            { name: "Drake killer", role: "You", code: "OAVCQ8x0bwSQeAbwgQton3NI", runes: { "Curses": "3+1" }, gear: ["High energy"] },
          ] },
          { p: "Using 1-2-3-Tab-2-4-5-6-7 is enough to kill both drakes when they are adjacent to each other. When they are not, {skill:Necrosis} comes in useful." },
        ],
      },
      {
        title: "How it works",
        flow: true,
        blocks: [
          { img: { src: "img/guides/chaos-axe-farm-path.jpg", caption: "The path from the portal to the drops, clockwise around the cliff. The flag marks Koss in the pool.", side: true } },
          { ul: [
            "The drakes spawn on a cliff above the portal out of {place:Moddok Crevice}. From below the cliff they can't reach you and can't see you, so they can't hurt you.",
            "You can't hit them with attacks either, so the damage comes from hexes, which spread between the two drakes when they stand next to each other.",
            "They put up Obsidian Flesh, which blocks spells; signets aren't spells, so the signets keep working through it.",
            "{hero:Koss} must be in the party for the quest, so he is flagged out of the way.",
            "Each run is short: fight, rezone, flag, grab and aggro take about 45 seconds.",
          ] },
        ],
      },
      {
        title: "Walkthrough",
        blocks: [
          { ol: [
            "Take {quest:Drakes on the Plain}, which needs {hero:Koss}, and leave {place:Moddok Crevice} with him.",
            "Flag Koss far into the pool to your south-west.",
            "Walk back towards the portal to aggro the drakes above the cliff.",
            "Wait a minute for the initial drop-rate reduction to pass (a good time to set up another account for the farm).",
            "Kill both drakes.",
            "If anything worthwhile dropped, run through {place:The Floodplain of Mahnkelon} to pick it up.",
            "Rezone and repeat.",
          ] },
        ],
      },
      {
        blocks: [
          { note: "Masochist? This is a safe way to get Legendary Survivor: just 50 hours for 4,000 runs, or a third of that with scrolls!" },
          { p: "Not a masochist? Take the {page:guides#guide=gom-afk-xp|4-hour route} ;)" },
        ],
      },
    ],
  },
  {
    id: "fow-spider-cave",
    group: "solo",
    name: "Solo W/R FoW Spider Cave Farm",
    summary: "Farm the Fissure of Woe spider cave for Obsidian Shards and other goodies with a high-armor warrior and Melandru's Resilience.",
    tags: ["Farm", "Obsidian Shards", "Solo", "Warrior"],
    source: { href: GWW_USER, archive: "https://web.archive.org/web/2026/" + GWW_USER, author: "Foo", full: true },
    sections: [
      {
        blocks: [
          { p: "{place:The Fissure of Woe} is the only place in the game where Obsidian Shards drop. Its Spider Cave, between the Temple of War and the Fissure Shore, is packed with Armored Cave Spiders, which drop Obsidian Shards, Corrosive Spider Legs and Glittering Dust. A warrior with high armor can farm them alone." },
        ],
      },
      {
        title: "How it works",
        blocks: [
          { ul: [
            "The spiders are rangers: their arrows are physical damage, which warrior armor takes well.",
            "They poison you with Apply Poison. Every condition on you adds health regeneration from {skill:Melandru's Resilience}, so their poison helps you heal.",
            "{skill:Troll Unguent} and {skill:Feel No Pain} add more regeneration, and {skill:Lion's Comfort} heals when you need a burst.",
            "{skill:\"I Am the Strongest!\"} raises your damage while {skill:Whirlwind Attack} and {skill:Cyclone Axe} hit the whole balled-up group.",
            "{skill:Sprint} gets you there and away.",
          ] },
        ],
      },
      {
        title: "Build",
        blocks: [
          { builds: [
            { name: "W/R", role: "You", code: "OQITEV5iTaHUp4va4Ancm03orAA", runes: { "Axe Mastery": "3+1", "Strength": "3" } },
          ] },
        ],
      },
      {
        title: "Walkthrough",
        blocks: [
          { ol: [
            "Enter {place:The Fissure of Woe}.",
            "Head to the Spider Cave, between the Temple of War and the Fissure Shore. Heroes can help you get there, but you can make it alone too.",
            "Pull the three Doubter's Dryders guarding the cave and kill them first.",
            "Then deal with the spiders that pop up: keep Melandru's Resilience and your regeneration up and spin them down with Whirlwind Attack and Cyclone Axe. If you feel safe, or have extra consumables, gather all or most of them into one ball first; speed-boost consumables make that harder.",
            "Pick up the drops.",
          ] },
        ],
      },
    ],
  },
  {
    id: "zos-afk-luxon",
    group: "afk",
    name: "Zos Shivros AFK Luxon Farm",
    summary: "Luxon faction all day in Zos Shivros Channel with 7 heroes: one click to start, a couple to stand in place, then go AFK.",
    tags: ["Farm", "Luxon faction", "AFK", "7 heroes"],
    sections: [
      {
        blocks: [
          { p: "{mission:Zos Shivros Channel} sends seven waves, then stops for good while still paying 50 Luxon faction a minute. This hero team holds all seven waves on its own, so the run can go on for as long as your faction cap allows." },
        ],
      },
      {
        title: "Build",
        blocks: [
          { builds: ["zos-sogm", "zos-sos", "zos-bip", "zos-mm", "zos-esurge", "zos-esurge", "zos-esurge-rez"] },
          { p: "The same team is on the {page:builds#team=afk-luxon-faction|Builds page}." },
        ],
      },
      {
        title: "Setup",
        blocks: [
          { img: { src: "img/guides/zos-afk-luxon-place.jpg", caption: "The team in place behind Battle Priest Calibos, with you in the middle.", side: true } },
          { ol: [
            "Start the mission in Normal mode: one click.",
            "Walk to the spot just behind Battle Priest Calibos, as in the picture, and stand there.",
            "Go AFK. If you worry, check once at 31 minutes that the team is alive: wave 7 is over by then, and nothing comes after it.",
          ] },
        ],
      },
      {
        title: "Faction cap",
        blocks: [
          { p: "Faction past your cap is lost, so your cap decides how long a run can last. Donate or spend before you run again." },
          { capCalc: { base: 10000, rate: 3000, rows: [
            ["{quest:Befriending the Luxons}", 10000],
            ["{mission:The Deep}: defeat Kanaxai", 10000],
            ["{mission:Unwaking Waters}, entered from the Luxon side", 7000],
            { rank: "Friend of the Luxons title", first: 5000, each: 1000, max: 12 },
            ["Win {mission:Fort Aspenwood} for the Luxons", 5000],
            ["Win {mission:The Jade Quarry} for the Luxons", 5000],
            ["Win an Alliance Battle for the Luxons", 5000],
            ["Score 100 points in {mission:Zos Shivros Channel}: your first run of this farm", 1000],
            ["Score 100 points in {mission:The Aurios Mines}", 1000],
          ] } },
          { p: "Not sure which you have? Ask the Luxon Scavenger in {place:Cavalon} or a Luxon-allied guild hall: he lists the ones you haven't done yet." },
        ],
      },
      {
        title: "Notes",
        blocks: [
          { ul: [
            "Turning faction in during Faction Support Week doubles the title points.",
            "It takes about 200 hours (or 100) of this farm to reach rank 6, at which Luxon skills reach full strength.",
            "It takes about 1,670 hours (or 835) to max the title at rank 12.",
            "The number of runs it takes to max the title depends on how high your cap is at the start, and on turning in during Faction Support Weeks. At the least, with every other raise done and rank 1 reached (a 59,000 cap), it takes 38 runs, all turned in during Faction Support Weeks. At the most, with no raises besides the title ranks and this farm's own score, and no Faction Support Weeks, it takes 217.",
          ] },
        ],
      },
    ],
  },
];
