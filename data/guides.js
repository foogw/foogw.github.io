/* Guides, written by hand. Each guide is a list of sections, and each section a list of blocks:
   { h }, { p }, { note } (a paragraph set apart), { box: { title, blocks } } (an indented aside, for an option), { ul: [...] }, { ol: [...] }, { table: { head, rows, notes } }, { builds: [...] }, { qa: [[q, a]] }
   { img: { src, caption, side } } or { imgs: { srcs, caption } } (pictures in a row), { capCalc: { base, rate, rows } } (a faction
   cap calculator: rows of [text, faction] to tick, and one { rank, first, each, max } for a title). A section with flow: true lets its side picture run on beside the next one.
   A build has a template code, or skills by name (null for a free slot) when no code fits it, and may have runes as on
   the Builds page ({ "Fast Casting": "3+1" }), and gear shown beside the attributes (gear: ["High energy"]). A build
   may instead be a Builds page build's id ("zos-mm"), shown with its insignia and weapons; repeats of a bar show once, counted.
   In text, {skill:Name} links a skill with its icon, {skillname:Name} without, {place:Name} a location, {mission:Name} a mission, {page:href|text} another
   page and {ext:href|text} another site, {quest:Name} a quest and {hero:Name} a hero.
   { route: [{ start | map | step: place, steps: [{ t, take: [...], go: [...], done: [...] }] }] } is a numbered walk in
   legs, one per place: where you start, map travel to an outpost, or a step through a portal. Each step says what to
   do, and the quests it takes, moves on and turns in. { routeTotal } sums the XP of the quests the route finishes, and counts its zone loads.
   { questIndex: { region, skip: { name: reason } } } lists every quest of a
   region with its rewards and the steps that take and finish it. */
const GWW_USER = "https://wiki.guildwars.com/wiki/User:Foo";
const GWW_FOO = GWW_USER + "/GoM";
window.GW_GUIDES = [
  {
    id: "gom-afk-xp",
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
    id: "chaos-axe-farm",
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
