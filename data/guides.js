/* Guides, written by hand. Each guide is a list of sections, and each section a list of blocks:
   { h }, { p }, { note } (a paragraph set apart), { ul: [...] }, { ol: [...] }, { table: { head, rows, notes } }, { builds: [...] }, { qa: [[q, a]] }
   or { img: { src, caption, side } }.
   A build has a template code, or skills by name (null for a free slot) when no code fits it.
   In text, {skill:Name} links a skill with its icon, {skillname:Name} without, {place:Name} a location, {mission:Name} a mission, {page:href|text} another
   page and {ext:href|text} another site, {quest:Name} a quest and {hero:Name} a hero.
   { route: [{ start | map | step: place, steps: [{ t, take: [...], go: [...], done: [...] }] }] } is a numbered walk in
   legs, one per place: where you start, map travel to an outpost, or a step through a portal. Each step says what to
   do, and the quests it takes, moves on and turns in. { routeTotal } sums the XP of the quests the route finishes.
   { questIndex: { region, skip: { name: reason } } } lists every quest of a
   region with its rewards and the steps that take and finish it. */
const GWW_FOO = "https://wiki.guildwars.com/wiki/User:Foo/GoM";
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
          { img: { src: "img/guides/gom-afk-xp-1.jpg", caption: "The farm running: bonders at the end of the long shadow (flag 3), the player just south of the Portal Wraiths, the Keystone on the far edge of the aggro bubble (flag 1)." } },
          { p: "Legendary Survivor in about 4 hours, or 534 skill points a day. Normal mode, {mission:Gate of Madness}; about 8 minutes to set up, then it runs indefinitely." },
        ],
      },
      {
        title: "How it works",
        blocks: [
          { ul: [
            "A Chaos Rift spawns 8 Titans every 30 seconds. You tank them in low-armor, low-health gear.",
            "With your health set just right, {skill:Protective Bond} and the Lightbringer title cut every hit to 1 damage.",
            "Two Monk heroes share Protective Bond's cost, paid by {skill:Blessed Signet} and {skill:Essence Bond} (which needs that 1 damage).",
            "{skill:Purifying Veil} shortens the conditions; {skill:Mending}, {skill:Watchful Spirit} and {skill:Succor} cover them.",
            "A {skill:Keystone Signet} Mesmer hero kills. Everyone else stays out of range, so XP is split only two ways: 348 per kill with a Scroll of Berserker's Insight.",
          ] },
        ],
      },
      {
        title: "Build",
        blocks: [
          { builds: [
            { name: "Player", role: "You", skills: [null, null, null, null, null, null, null, "Heroic Refrain"],
              note: "Any profession. 5 Leadership from an \"of the Paragon\" mod; health by LB rank (table below)." },
            { name: "Bonder 1", code: "OwAS8Y4NHkrPNRfkSAAAAAA",
              note: "Bonds first. 18 Protection, 7 Divine Favor under Heroic Refrain." },
            { name: "Bonder 2", code: "OwAT043Ct4gi8f6LlAAAAAA",
              note: "Bonds second. 18 Healing, 13 Protection, 7 Divine Favor under Heroic Refrain." },
            { name: "Keystone", code: "OQNCA8wDP9B8DyzmOUi1veC", mode: "Fight",
              note: "16 Fast Casting, 15 Inspiration with runes. No weapon." },
          ] },
          { ul: [
            "Put these 3 heroes first in the party, so each can be flagged.",
            "Bonders: all bonds disabled, about 50 energy.",
            "Optional at LB4+: \"of the Necromancer\" weapons on both bonders (energy), and a +1/20% Protection item on bonder 1, recasting Veil until it lands at 62% (Burning down to 2s). LB3 needs the first, LB2 both.",
          ] },
          { p: "Wear a low-armor set (from Banoit, Kambei, Moon Ahn, Nu Leng or Mehinu), with health by LB rank:" },
          { table: {
            head: ["LB", "Target HP¹", "How", "Dervish²"],
            rows: [
              ["8", "190", "4 superior runes", "No chest piece"],
              ["7", "170", "4 superior runes, −20 \"Life is Pain\" focus", "No chest piece"],
              ["6", "155", "5 superior runes, full Survivor", "Survivor only on chest"],
              ["5", "135", "5 superior runes, Survivor chest and head", "Survivor only on chest, −20 focus"],
              ["4", "115", "5 superior runes", "−20 focus"],
              ["3", "95", "5 superior runes, −20 focus", "−50 cesta"],
              ["2", "95³", "5 superior runes, −20 focus", "−50 cesta"],
            ],
            notes: [
              "¹ Including the +2% morale from closing the Torment rift. Up to 20 more is fine (2 damage per hit).",
              "² Dervishes get +25 health from their chest piece.",
              "³ Takes 2 per hit, but safer than less health.",
            ],
          } },
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
      {
        title: "Without Heroic Refrain",
        blocks: [
          { p: "As an alternative at LB4 and up, you can be the third bonder instead of using Heroic Refrain. Two bonders need 18 and 13 Protection, but three can do with 13, 8 and 3: bonder 1 at 13, bonder 2 at 8 and you at 3, bonding in that order." },
          { builds: [
            { name: "Player", role: "You", skills: ["Protective Bond", "Balthazar's Spirit", null, null, null, null, null, null],
              note: "Monk secondary with 3 Protection. Balthazar's Spirit pays for your share of the bond." },
          ] },
          { p: "The cost: without Heroic Refrain's +2, Purifying Veil and Mending are weaker, so conditions last longer and Mending heals less. That's a little less safe at high LB, still fine at LB4, and too risky below it." },
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
          { p: "An efficient way to do the pre-Searing quests, with as little fighting and backtracking as possible. Each group starts at a map travel or a portal. No outposts are assumed unlocked: the route reaches each on foot before mapping there." },
          { p: "Assumed done already:" },
          { ul: [
            "Your profession test, and level 2.",
            "{quest:Adventure with an Ally} ({skillname:Resurrection Signet}).",
            "The Piken Square quests, through {quest:The Scourge Beneath} ({hero:Devona} as a hero).",
          ] },
          { p: "Left out: profession quests, and repeatable and daily quests." },
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
              { t: "Pick up the Beautiful Feather on the hill in the middle of the village.", go: ["A Gift for Althea"] },
              { t: "Head to the Ashford Abbey portal, northwest of Devona." },
            ] },
            { step: "Ashford Abbey", steps: [
              { t: "Talk to Meerak the Scribe, and give Brother Mhenlo the stinger.", go: ["Unsettling Rumors"], done: ["The Poison Devourer"] },
            ] },
            { step: "Lakeside County", steps: [
              { t: "Cross the worm field to the bandit camp. Take the Ashford strongbox, fighting only what notices you.", go: ["Bandit Raid"] },
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
              { t: "Head to The Barradin Estate." },
            ] },
            { step: "The Barradin Estate", steps: [
              { t: "Talk to Duke Barradin.", take: ["The True King"] },
            ] },
            { step: "Green Hills County", steps: [
              { t: "Take the south exit to Wizard's Folly." },
            ] },
            { step: "Wizard's Folly", steps: [
              { t: "Kill black bears on the green around the snow until one drops a bear pelt.", go: ["Little Thom's Big Cloak"] },
              { t: "Head north to Foible's Fair." },
            ] },
            { step: "Foible's Fair", steps: [
              { t: "Talk to Ralena Stormbringer.", go: ["The Wayward Wizard"] },
            ] },
            { step: "Wizard's Folly", steps: [
              { t: "Follow the road northeast to the house on the left, then go west through the trees to Orion, and talk to him.", go: ["The Wayward Wizard"] },
              { t: "Head southeast to Regent Valley." },
            ] },
            { step: "Regent Valley", steps: [
              { t: "Go south to the healing spring and use it to purify the hunter's horn.", go: ["The Hunter's Horn"] },
              { t: "Follow the road to Fort Ranik." },
            ] },
            { step: "Fort Ranik", steps: [
              { t: "Give Lord Darrin the message.", done: ["The True King"] },
            ] },
            { step: "Regent Valley", steps: [
              { t: "Talk to Mary Malone, right outside Fort Ranik. Go south then east to the arches, kill the spiders and bring her the Basket of Apples on foot.", take: ["The Orchard"], done: ["The Orchard"] },
              { t: "Head southwest to Wizard's Folly." },
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
              { t: "Talk to Sandre Elek and Prince Rurik.", done: ["The Wayward Wizard", "Charr in the Catacombs"] },
              { t: "If you have picked your secondary profession, talk to Armin Saberlin, then Sir Tydus, then the Town Crier.", take: ["A Second Profession", "The Path to Glory"], done: ["A Second Profession", "The Path to Glory", "Getting Started in Guild Wars"] },
            ] },
            { step: "Lakeside County", steps: [
              { t: "Give Gwen her flute.", done: ["Gwen's Flute"] },
              { t: "Go west past Captain Osric to Lady Althea and give her the Beautiful Feather: she takes a single item and gives the reward.", done: ["A Gift for Althea"] },
            ] },
            { map: "Ascalon City", steps: [
              { t: "Talk to Prince Rurik. Taking this only now keeps it from blocking A Gift for Althea.", take: ["Charr at the Gate"] },
            ] },
            { step: "Lakeside County", steps: [
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
          }, daily: "Vanguard" } },
        ],
      },
    ],
  },
];
