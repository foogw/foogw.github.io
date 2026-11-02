const GW_GUIDES = {
  "guides_": "Guides, written by hand. id: the guide's short name, its address (guides?gom). Each is in a group of the list (group: \"afk\", \"solo\" or \"quests\"). Each guide is a list of sections, each a list of blocks: {h}, {p}, {note} (a paragraph set apart), {box: {title, blocks}}, {ul}, {ol}, {table: {head, rows, notes}}, {builds}, {qa: [[q, a]]}, {img: {src, caption, side}}, {imgs: {srcs, caption}}, {areas: [map ids], side, height} (those areas lit on their map), {capCalc}, {route: [{start | map | step | area: map id, steps: [{t, take, go, done: [quest ids]}]}]}, {routeTotal}, {questIndex: {places: [map ids], skip: {quest id: reason}}} (the quests given there). A build has a template code, or skill ids (null for a free slot); runes by attribute id; or a Builds page build's id. In text, {skill:id} links a skill with its icon, {skillname:id} without, {place:id} a location, {mission:id}, {quest:id}, {hero:id}, {page:href|text} another page, {ext:href|text} another site.",
  "guides": [
    {
      "id": "gom",
      "group": "afk",
      "name": "GoM AFK XP Farm",
      "summary": "An AFK XP farm in Gate of Madness: the Legendary Survivor title in about 4 hours, and 534 skill points a day.",
      "tags": ["Farm", "XP", "AFK", "Normal mode", "3 heroes"],
      "mission": 527,
      "source": {
        "href": "https://wiki.guildwars.com/wiki/User:Foo/GoM",
        "archive": "https://web.archive.org/web/2026/https://wiki.guildwars.com/wiki/User:Foo/GoM",
        "author": "Foo"
      },
      "stats": [["Per kill", "348 XP"], ["Per hour", "334,080 XP"], ["Setup", "~8 min"]],
      "sections": [
        {
          "blocks": [
            {
              "p": "A shortened version of the {ext:https://wiki.guildwars.com/wiki/User:Foo/GoM|full guide on the Guild Wars Wiki} ({ext:https://web.archive.org/web/2026/https://wiki.guildwars.com/wiki/User:Foo/GoM|archived copy})."
            },
            {
              "img": {
                "src": "img/guides/gom-afk-xp-1.jpg",
                "caption": "The farm running: bonders at the end of the long shadow (flag 3), the player just south of the Portal Wraiths, the Keystone on the far edge of the aggro bubble (flag 1)."
              }
            },
            {
              "p": "Legendary Survivor in about 4 hours, or 534 skill points a day. Normal mode, {mission:527}; about 8 minutes to set up, then it runs indefinitely."
            }
          ]
        },
        {
          "title": "How it works",
          "blocks": [
            {
              "ul": [
                "A Chaos Rift spawns 8 Titans every 30 seconds, and you tank them.",
                "Your health is set so each hit does only 1 damage, under {skill:263} and the Lightbringer title.",
                "Two Monk heroes keep the bond up and heal the conditions; that 1 damage pays their energy back through {skill:250}.",
                "A {skill:63} Mesmer hero kills. The rest of the party stays away, so the XP is split only two ways."
              ]
            }
          ]
        },
        {
          "title": "Build",
          "blocks": [
            {
              "builds": [
                {
                  "name": "Player",
                  "role": "You",
                  "skills": [null, null, null, null, null, null, null, 3431],
                  "note": "Any profession. 5 Leadership from an \"of the Paragon\" mod; health by LB rank (table below)."
                },
                {
                  "name": "Prot Bonder",
                  "code": "OwAS8Y4NHkrPNRfkSAAAAAA",
                  "mode": "Avoid",
                  "runes": {"15": "3+1"},
                  "insignia": "Radiant",
                  "note": "Bonds first. 16 Protection (18 after Heroic Refrain), 7 Divine Favor."
                },
                {
                  "name": "Heal Bonder",
                  "code": "OwAT043Ct4gi8f6LlAAAAAA",
                  "mode": "Avoid",
                  "runes": {"13": "3+1", "16": "1"},
                  "insignia": "Radiant",
                  "note": "Bonds second. 16 Healing (18 after Heroic Refrain), 11 Protection (13 after Heroic Refrain), 7 Divine Favor."
                },
                {
                  "name": "Keystone",
                  "code": "OQNCA8wDP9B8DyzmOUi1veC",
                  "mode": "Fight",
                  "runes": {"0": "3+1", "3": "3"},
                  "note": "16 Fast Casting, 15 Inspiration with runes. No weapon."
                }
              ]
            },
            {
              "box": {
                "title": "Optional: without Heroic Refrain",
                "blocks": [
                  {
                    "p": "As an alternative at LB4 and up, you can be the third bonder instead of using Heroic Refrain. Two bonders need 18 and 13 Protection, but three can do with 13, 8 and 3: the Prot Bonder at 13, the Heal Bonder at 8 and you at 3, bonding in that order."
                  },
                  {
                    "builds": [
                      {
                        "name": "Player",
                        "role": "You",
                        "skills": [263, 242, null, null, null, null, null, null],
                        "note": "Monk secondary with 3 Protection. Balthazar's Spirit fully pays for your share of the bond."
                      }
                    ]
                  },
                  {
                    "p": "The cost: without Heroic Refrain's +2, Purifying Veil and Mending are weaker, so conditions last longer and Mending gives less health regeneration. That's a little less safe at high LB, and still fine at LB4."
                  }
                ]
              }
            },
            {
              "ul": [
                "Put these 3 heroes first in the party, so each can be flagged.",
                "Bonders: all bonds disabled, about 50 energy."
              ]
            },
            {"p": "Wear a low-armor set (from Banoit, Kambei, Moon Ahn, Nu Leng or Mehinu), with health by LB rank:"},
            {
              "table": {
                "head": ["LB¹", "Target HP²", "With morale³", "How", "Correction for Dervishes⁴"],
                "rows": [
                  ["8", "180", "190", "4 superior runes", "No chest piece"],
                  ["7", "160", "170", "4 superior runes, −20 \"Life is Pain\" focus", "No chest piece"],
                  ["6", "145", "155", "5 superior runes, full Survivor", "Survivor only on chest"],
                  [
                    "5",
                    "125",
                    "135",
                    "5 superior runes, Survivor chest and head",
                    "Survivor only on chest, −20 focus"
                  ],
                  ["4", "105", "115", "5 superior runes", "−20 focus"]
                ],
                "notes": [
                  "¹ For LB2 or LB3, see the full guide linked at the end of the page.",
                  "² Up to 20 HP over the target is fine: hits then do 2 damage.",
                  "³ After closing the Torment rift (+2% morale).",
                  "⁴ Dervishes get +25 health from their chest piece."
                ]
              }
            },
            {
              "box": {
                "title": "Optional: extra safety",
                "blocks": [
                  {
                    "ul": [
                      "Energy: \"of the Necromancer\" weapons on both bonders.",
                      "Health: a +1/20% Protection item on the Prot Bonder, recasting Purifying Veil until it lands at 62%, which cuts Burning to 2 seconds."
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "title": "Walkthrough",
          "blocks": [
            {
              "img": {
                "src": "img/guides/gom-afk-xp-2.jpg",
                "caption": "The path, and the compass once everyone is in place.",
                "side": true
              }
            },
            {"p": "Fight your way to the Chaos Rifts."},
            {"h": "Clear"},
            {
              "ul": [
                "The 3 Portal Wraiths at the Torment rift (left, south): +2% morale.",
                "The 3 Torment creatures and 2 Margonites patrolling."
              ]
            },
            {"h": "Leave alone"},
            {
              "ul": [
                "The 2 Titan Abominations: killed ones respawn.",
                "The 3 Portal Wraiths at the Titan rift (right, north): if all die, the Titans stop.",
                "Everything further west: closing another rift adds morale and throws off your health."
              ]
            },
            {"h": "Set up"},
            {
              "ol": [
                "Flag the bonders and the Keystone at the tip of the long shadow; flag everyone else out of compass range.",
                "Wield the \"of the Paragon\" weapon. Heroic Refrain each bonder in turn, and let it put its 4 enchantments on you.",
                "Switch to the low-health set, check your health, then reactivate the Lightbringer title.",
                "Aggro the Titans and stand just south of the Portal Wraiths, without aggroing them.",
                "Flag the Keystone to the edge of your aggro bubble, away from the Wraiths, and use the scroll."
              ]
            },
            {
              "p": "Watch a couple of Madness Titan cycles: they bleed and burn you, and their holy damage gives no Essence Bond energy. If your health and the bonders' energy hold, go AFK."
            }
          ]
        }
      ]
    },
    {
      "id": "pre",
      "group": "quests",
      "name": "Pre-Searing Quests",
      "summary": "An efficient route through the pre-Searing quests, with as little fighting and backtracking as possible.",
      "tags": ["Quests", "Pre-Searing", "Route"],
      "sections": [
        {
          "flow": true,
          "blocks": [
            {"side": true, "areas": [160, 147, 162, 146, 161, 151, 148, 166, 164, 779, 165, 163]},
            {
              "p": "This is a walkthrough for characters that have saved most of the pre-Searing quests for a higher level, with as little fighting and backtracking as possible. The map shows pre-Searing Ascalon and its outposts; each group of the route below starts at a map travel to one of them, or at a portal."
            },
            {"p": "Assumed done already:"},
            {
              "ul": [
                "Every pre-Searing outpost unlocked.",
                "{quest:101109} ({skillname:2}).",
                "Every primary and secondary profession quest, for their skills.",
                "The Piken Square quests, through {quest:101300} ({hero:38} as a hero)."
              ]
            },
            {"note": "Note: this route was computer generated and hasn't been checked in a playthrough yet."}
          ]
        },
        {
          "title": "Route",
          "blocks": [
            {
              "route": [
                {
                  "start": 81,
                  "steps": [
                    {"t": "Talk to the Town Crier.", "take": [101170, 101192, 101330]},
                    {"t": "Cross the bridge to Sir Tydus at the Academy gate.", "done": [101192]},
                    {"t": "Talk to Baron Egan, Namar and Sandre Elek.", "take": [101117, 101288, 101210, 101321]}
                  ]
                },
                {
                  "step": 146,
                  "steps": [
                    {
                      "t": "Talk to Gwen, behind the resurrection shrine on your left, and to Haversdan, right outside the gate.",
                      "take": [101174, 101166]
                    },
                    {
                      "t": "Just west of the city portal, wait for Prince Rurik and Captain Osric to finish talking, then talk to Osric.",
                      "take": [101085]
                    },
                    {
                      "t": "Go south to the river and pick up the Broken Flute on the far shore. Keep it for now.",
                      "go": [101174]
                    },
                    {"t": "Go slightly uphill to Duke Gaban and Fadden Hathorn.", "take": [101260]},
                    {"t": "Lead Fadden into the cave and keep him safe while he gathers eggs.", "go": [101260]},
                    {
                      "t": "Go on to the end of the cave and kill the Plague Devourer; pick up a poisonous stinger.",
                      "go": [101288]
                    },
                    {"t": "Back to Duke Gaban: he gives you 2 devourer eggs.", "done": [101260]},
                    {
                      "t": "Follow the road southwest to Ashford village. Talk to Devona.",
                      "done": [101166],
                      "take": [101335]
                    },
                    {"t": "Talk to Devona again, follow her across the bridge and kill the grawl.", "done": [101330]},
                    {
                      "t": "Talk to Pitney, next to Devona, give him an egg, follow him to his field and kill the Worm Queen. Don't leave the area meanwhile, or you need another egg.",
                      "take": [101323],
                      "done": [101323]
                    },
                    {
                      "t": "Talk to Pitney again, Chantalle the Troubadour and Alison the Tanner.",
                      "take": [101292, 101273, 101186]
                    },
                    {
                      "t": "Talk to Miller Upton, then lure the three bee swarms across the bridge with the honeycomb and return to him.",
                      "done": [101210]
                    },
                    {"t": "Open the Beautiful Shell near the watermill for the Beautiful Pearl.", "go": [101085]},
                    {"t": "Pick up the Beautiful Feather on the hill in the middle of the village.", "go": [101085]}
                  ]
                },
                {
                  "map": 164,
                  "steps": [
                    {
                      "t": "Talk to Meerak the Scribe, and give Brother Mhenlo the stinger.",
                      "go": [101335],
                      "done": [101288]
                    }
                  ]
                },
                {
                  "step": 146,
                  "steps": [
                    {
                      "t": "Cross the worm field to the bandit camp, and go on northeast up the mountain pass to the chest with the Beautiful Pendant.",
                      "go": [101085]
                    },
                    {
                      "t": "Back at the bandit camp, take the Ashford strongbox, fighting only what notices you.",
                      "go": [101117]
                    },
                    {"t": "Carry the strongbox to Devona on foot: map travel loses it.", "done": [101117]}
                  ]
                },
                {
                  "map": 81,
                  "steps": [
                    {
                      "t": "Give Armin Saberlin the message, and talk to Prince Rurik.",
                      "done": [101335],
                      "take": [101128]
                    }
                  ]
                },
                {"map": 164, "steps": [{"t": "Ask Brother Mhenlo about the Charr ranger.", "go": [101128]}]},
                {
                  "step": 145,
                  "steps": [
                    {
                      "t": "Necromancer Munne is on your right: ask about the Charr, and take the candles.",
                      "go": [101128],
                      "take": [101222]
                    },
                    {
                      "t": "Light the four braziers in the order the map shows. Swamp water drains health, and dying loses the candles.",
                      "go": [101222]
                    },
                    {
                      "t": "Find the Corpse of Prize Moa Bird in the south, past the corridor of undead.",
                      "go": [101292]
                    },
                    {
                      "t": "Find Oberan the Reviled, toward the Green Hills County exit, and ask him about the Charr ranger for the Sharp Charr Tooth.",
                      "go": [101128]
                    }
                  ]
                },
                {"map": 164, "steps": []},
                {"step": 145, "steps": [{"t": "Talk to Munne, right by the entrance.", "done": [101222]}]},
                {"map": 164, "steps": []},
                {
                  "step": 146,
                  "steps": [
                    {
                      "t": "In Ashford village, give Pitney the news, and talk to Devona.",
                      "done": [101292],
                      "take": [101205, 101324]
                    },
                    {"t": "Go north from Ashford to the Green Hills County portal."}
                  ]
                },
                {
                  "step": 160,
                  "steps": [
                    {
                      "t": "By the Balthazar statue just past the portal, talk to Grazden the Protector for the tithe, and question him, Farrah Cappo and Kasha Blackblood.",
                      "go": [101324, 101205]
                    }
                  ]
                },
                {"map": 163, "steps": [{"t": "Talk to Duke Barradin.", "take": [101310]}]},
                {"map": 165, "steps": [{"t": "Talk to Ralena Stormbringer.", "go": [101321]}]},
                {
                  "step": 161,
                  "steps": [
                    {
                      "t": "Kill black bears for a bear pelt on the way to Orion: northeast along the road to the house on the left, then west through the trees.",
                      "go": [101321, 101186]
                    }
                  ]
                },
                {"map": 29, "steps": [{"t": "Give Lord Darrin the message.", "done": [101310]}]},
                {
                  "step": 101,
                  "steps": [
                    {
                      "t": "Talk to Mary Malone, right outside Fort Ranik. Go south then east to the arches, kill the spiders and bring her the Basket of Apples on foot.",
                      "take": [101286],
                      "done": [101286]
                    },
                    {
                      "t": "Head southwest toward Wizard's Folly. Just before the exit, go south to the healing spring and use it to purify the hunter's horn.",
                      "go": [101273]
                    }
                  ]
                },
                {
                  "step": 161,
                  "steps": [
                    {
                      "t": "Go west along the river to the fishing village, then south and east to Aidan.",
                      "done": [101273]
                    }
                  ]
                },
                {"map": 164, "steps": []},
                {
                  "step": 146,
                  "steps": [
                    {
                      "t": "In Ashford village, talk to Devona, and to Alison the Tanner, who turns the pelt into a cloak.",
                      "go": [101186],
                      "done": [101205, 101324]
                    }
                  ]
                },
                {"map": 163, "steps": [{"t": "Give Little Thom the cloak.", "done": [101186]}]},
                {
                  "map": 81,
                  "steps": [
                    {
                      "t": "Talk to Sandre Elek and Prince Rurik; Rurik then gives you the next quest.",
                      "done": [101321, 101128],
                      "take": [101127]
                    },
                    {
                      "t": "Talk to Armin Saberlin and pick your secondary profession, then talk to Sir Tydus, then the Town Crier.",
                      "take": [101098, 101287],
                      "done": [101098, 101287, 101170]
                    }
                  ]
                },
                {
                  "step": 146,
                  "steps": [
                    {"t": "Give Gwen her flute.", "done": [101174]},
                    {
                      "t": "Give Captain Osric the feather, the pearl and the pendant: he turns down the first two and takes the third.",
                      "done": [101085]
                    },
                    {
                      "t": "Meet Rurik just outside and follow him to the Northlands gate; let him and his allies kill the Charr. Get the reward from him there.",
                      "done": [101127]
                    }
                  ]
                }
              ]
            },
            {"routeTotal": true}
          ]
        },
        {
          "title": "All quests",
          "blocks": [
            {
              "questIndex": {
                "skip": {
                  "101372": "Gone after your test",
                  "101109": "Done: you have the Resurrection Signet",
                  "101108": "Done: you have Piken Square",
                  "101081": "Done: you have Piken Square",
                  "101187": "Done: you have Devona",
                  "101129": "Done: you have Devona",
                  "101300": "Done: you have Devona",
                  "101378": "Done: your profession test",
                  "101213": "Done: your profession test",
                  "101197": "Done: your profession test",
                  "101200": "Done: your profession test",
                  "101190": "Done: your profession test",
                  "101150": "Done: your profession test",
                  "101298": "Follows A Mesmer's Burden"
                },
                "rest": "Done: your profession skills",
                "daily": "Vanguard",
                "places": [148, 164, 165, 166, 160, 146, 779, 162, 163, 145, 147, 161]
              }
            }
          ]
        }
      ]
    },
    {
      "id": "reverie",
      "group": "quests",
      "name": "Wayfarer's Reverie",
      "summary": "The four Wayfarer's Reverie quests: every place to visit, the nearest outpost and the way there.",
      "tags": ["Quests", "Event", "Route"],
      "sections": [
        {
          "blocks": [
            {
              "p": "During {page:events|Wayfarer's Reverie} (August 25 to September 1), a Festival Coordinator on each continent gives a quest to visit eight famous places. Bring the four proofs to Fylinn, Sworn to Winds for a Legionnaire Summoning Crystal (or an Everlasting Legionnaire Tonic, a Miniature Legionnaire, a Legion Loot Bag, or once per account a Reverie Gift)."
            },
            {
              "p": "Only one character or hero in the party has to reach each place, and the runner doesn't need the quest, so these are runs, not fights. Each map below shows the area to reach, the outpost to start from, and the areas between them."
            },
            {"p": "Take all four quests first, so every place counts on the way:"},
            {
              "ul": [
                "{quest:101380} from Festival Coordinator Teron in {place:55}. Reward: Proof of Flames.",
                "{quest:100779} from Festival Coordinator Tsuru in {place:194}. Reward: Proof of Waves.",
                "{quest:101072} from Festival Coordinator Khuri in {place:449}. Reward: Proof of Winds.",
                "{quest:100457} from Festival Enthusiast Styr Wolf-Handed in {place:642}. Reward: Proof of Mountains."
              ]
            },
            {
              "p": "The runs below go by the party size of the outpost they start from: a full party of 8 first, then 6, then 4. The Shiverpeak bloodstone comes last, as the only one that needs a fight."
            }
          ]
        },
        {
          "blocks": [
            {"h": "Party of 8"},
            {"p": "Visit the Wizard's Tower (Tyria): from {place:138} through {place:18} into {place:64}."},
            {"areas": [138, 18, 64], "height": 380},
            {
              "p": "Visit the Mausoleum in Majesty's Rest (Tyria): from {place:138} through {place:18}, {place:17} into {place:60}."
            },
            {"areas": [138, 18, 17, 60], "height": 380},
            {
              "p": "Visit the ancient temple of Lyssa in Mineral Springs (Tyria): from {place:156} through {place:92} into {place:96}."
            },
            {"areas": [156, 92, 96], "height": 380},
            {"p": "Visit Gwen's Garden (Far North): from {place:642} into {place:499}."},
            {"areas": [642, 499], "height": 380},
            {"p": "Visit Drakkar Lake (Far North): from {place:643} into {place:513}."},
            {"areas": [643, 513], "height": 380},
            {"p": "Visit the Shrine of the Bear Spirit (Far North): from {place:650} into {place:482}."},
            {"areas": [482], "height": 380},
            {
              "p": "Visit the strange ridge in Dalada Uplands (Far North): from {place:648} into {place:647}. Next to Xunlai Investigator Jian Fo. Don't leave from here: go on into {place:651} for the next one."
            },
            {"areas": [648, 647], "height": 380},
            {"p": "Visit the burning forest in Sacnoth Valley (Far North): go on from {place:647} into {place:651}."},
            {"areas": [648, 647, 651], "height": 380},
            {"p": "Visit the G.O.L.E.M. site (Far North): from {place:640} into {place:501}."},
            {"areas": [640, 501], "height": 380},
            {"p": "Visit Ventari's sanctuary (Far North): from {place:624} into {place:485}."},
            {"areas": [624, 485], "height": 380},
            {"p": "Visit Tahnnakai Temple (Cantha): from {place:284} into {place:269}."},
            {"areas": [284, 269], "height": 380},
            {"p": "Visit Nahpui Quarter (Cantha): from {place:51} into {place:265}."},
            {"areas": [51, 265], "height": 380},
            {"p": "Visit Arborstone's central chamber (Cantha): from {place:218} into {place:244}."},
            {"areas": [218, 244], "height": 380},
            {"p": "Visit the entombed leviathan in Rhea's Crater (Cantha): from {place:289} into {place:202}."},
            {"areas": [289, 202], "height": 380},
            {"p": "Visit the whirlpool's edge (Cantha): from {place:277} into {place:227}."},
            {"areas": [277, 227], "height": 380},
            {"p": "Visit Raisu Palace (Cantha): from {place:225} into {place:233}."},
            {"areas": [225, 233], "height": 380},
            {
              "p": "Visit Fahranur, the First City (Elona): from {place:492} into {place:481}. {place:492} lets you bring a party of 8."
            },
            {"areas": [492, 481], "height": 380},
            {"p": "Visit the Cyclone Palace in Mehtani Keys (Elona): from {place:489} into {place:488}."},
            {"areas": [489, 488], "height": 380},
            {"p": "Visit the secret corsair docks on the Barbarous Shore (Elona): from {place:376} into {place:375}."},
            {"areas": [376, 375], "height": 380},
            {"p": "Visit the Fortress of Jahai (Elona): from {place:424} into {place:369}."},
            {"areas": [424, 369], "height": 380},
            {"p": "Visit the libraries of the Halls of Chokhin (Elona): from {place:396} into {place:395}."},
            {"areas": [396, 395], "height": 380},
            {
              "p": "Visit the inner sanctum of the Hidden City of Ahdashim (Elona): from {place:434} into {place:413}."
            },
            {"areas": [413], "height": 380},
            {"p": "Visit the Hallowed Point in the Poisoned Outcrops (Elona): from {place:442} into {place:443}."},
            {"areas": [442, 443], "height": 380},
            {
              "p": "Visit the Crystal Overlook teleporter (Elona): from {place:442} through {place:443}, {place:439} into {place:448}. Don't leave from here: take the teleporter on into {place:112} for the next one."
            },
            {"areas": [442, 443, 439, 448], "height": 380},
            {
              "p": "Visit the ruined statues of the Arid Sea (Tyria): take the teleporter from {place:448} into {place:112}."
            },
            {"areas": [112], "height": 380}
          ]
        },
        {
          "blocks": [
            {"h": "Party of 6"},
            {"p": "Visit Anvil Rock (Tyria): from {place:132} into {place:89}."},
            {"areas": [132, 89], "height": 380},
            {
              "p": "Visit the Falls in the Maguuma Jungle (Tyria): from {place:139} through {place:44}, {place:45} into {place:46}."
            },
            {"areas": [139, 44, 45, 46], "height": 380},
            {"p": "Visit Haiju Lagoon (Cantha): from {place:213} into {place:237}."},
            {"areas": [213, 237], "height": 380}
          ]
        },
        {
          "blocks": [
            {"h": "Party of 4"},
            {"p": "Visit the Searing crystal near Serenity Temple (Tyria): from {place:131} into {place:104}."},
            {"areas": [131, 104], "height": 380},
            {"p": "Visit the Flame Temple (Tyria): from {place:36} through {place:13} into {place:106}."},
            {"areas": [36, 13, 106], "height": 380},
            {"p": "Visit the Shrine of Maat (Cantha): from {place:242} into {place:238}."},
            {"areas": [242, 238], "height": 380}
          ]
        },
        {
          "blocks": [
            {"h": "The Shiverpeak bloodstone"},
            {
              "p": "Visit the Shiverpeak bloodstone (Far North): from {place:638} through {place:558} into {place:612}. Take {quest:100351} from Saerin in {place:638} and enter the dungeon through its portal (not the Inscription Stone). The door at the end of the first level needs the dungeon key the Paranoia Ettin drops, so this one can't simply be run. The bloodstone is at the end of the dungeon's third level (sorry, we don't have the dungeon's maps yet)."
            },
            {"height": 380, "areas": [612]}
          ]
        }
      ]
    },
    {
      "id": "fow",
      "group": "quests",
      "name": "Fissure of Woe Quests",
      "summary": "An efficient route through all eleven Fissure of Woe quests, with as little backtracking as possible.",
      "tags": ["Quests", "Fissure of Woe", "Route"],
      "sections": [
        {
          "flow": true,
          "blocks": [
            {"side": true, "areas": [34]},
            {
              "p": "{place:34} is Balthazar's realm in the Mists: an elite area for a full party, heroes allowed. Its eleven repeatable quests pay 100,000 XP in all, plus a reward chest by the Forgemaster once they're all done. It's the only place Obsidian Shards drop, and once Restore the Temple of War is done, the Forgemaster offers Obsidian armor."
            },
            {
              "p": "This guide is for doing all eleven in one run, in an order with as little backtracking as possible. The Hunt sets the order: its seven Shard Wolves only count once you have the quest, and its giver stands south of the Temple of War. So the route opens the temple first, picks up the hunt, and then sweeps the rest of the map once, killing each wolf on the way."
            },
            {"p": "The {page:builds?meta|meta hero team} can do it."},
            {"note": "Note: this guide hasn't been fact-checked yet, so it may have mistakes."}
          ]
        },
        {
          "title": "Route",
          "blocks": [
            {
              "route": [
                {
                  "start": 34,
                  "steps": [
                    {
                      "t": "Clear the area around Rastigan the Eternal, and talk to him. Taking the quest is safe, but killing one of the ranger groups by the tower starts it: he then walks to the tower through anything in his way.",
                      "take": [100302]
                    }
                  ]
                },
                {
                  "area": "Tower of Courage",
                  "steps": [
                    {
                      "t": "Up the hill to the east, kill the Shadow Army groups around the tower. Rastigan opens the gate: kill the Shadow Lord and his two Abyssals, and open the chest inside.",
                      "go": [100302]
                    },
                    {"t": "Back to Rastigan. Keep his next quest for later.", "done": [100302], "take": [100297]}
                  ]
                },
                {
                  "area": "Great Battle Field",
                  "steps": [
                    {
                      "t": "Go east, then north, to the Eternals' camp on the west side of the battle field. Kill the Shadow Army group there to free Kromril the Eternal and the Eternal Weaponsmith, and talk to both.",
                      "take": [100021, 100265]
                    },
                    {
                      "t": "Cross to the Shadow Army camp on the hill to the east. Kill both Dragon Liches at its ramps first, then the Priest of Menzies.",
                      "go": [100021]
                    },
                    {
                      "t": "Pick up his book and carry it straight back to Kromril: it's a bundle, so you can't put it away.",
                      "done": [100021]
                    }
                  ]
                },
                {
                  "area": 34,
                  "steps": [
                    {
                      "t": "The temple stands on the mound south of the Eternals' camp. Kill the Shadow Mesmers and Monks halfway up the ramp; the big group at its foot can be skipped. Inside, clear the round course, then the Shadow Rangers on the four ramps of the center platform.",
                      "go": [100265]
                    },
                    {"t": "The Eternal Forgemaster appears on the platform.", "done": [100265], "take": [100055]},
                    {
                      "t": "Hold the platform against twelve groups, Shadow Beasts and then Abyssals, and keep the Forgemaster alive.",
                      "go": [100055]
                    },
                    {
                      "t": "Turn in to the Forgemaster, and talk to Eternal Lord Taeres, who now stands in the temple.",
                      "done": [100055],
                      "take": [100212, 100139, 100303]
                    }
                  ]
                },
                {
                  "area": "Spider Cave",
                  "steps": [
                    {
                      "t": "Leave by the south exit, keep right and kill the three big Shadow Army groups. Nimros the Hunter stands straight south of the temple.",
                      "take": [100276]
                    },
                    {"t": "Kill the Shard Wolf just north of him.", "go": [100276]},
                    {
                      "t": "Go into the Spider Cave nearby and kill the five Seeds of Corruption. Armored Cave Spiders drop from the ceiling, so advance slowly.",
                      "go": [100212]
                    }
                  ]
                },
                {
                  "area": "Fissure Shore",
                  "steps": [
                    {
                      "t": "Follow the cave out to the shore, and kill the Shard Wolf by Admiral Saidon the Eternal.",
                      "go": [100276]
                    }
                  ]
                },
                {
                  "area": "Tower of Courage",
                  "steps": [
                    {
                      "t": "Take the shore's west exit to the hills below the Tower of Courage, and kill the Shard Wolf southeast of the tower.",
                      "go": [100276]
                    }
                  ]
                },
                {
                  "area": "Forest of the Wailing Lord",
                  "steps": [
                    {
                      "t": "From the tower, go east and north into the valley, then west along the left wall into the forest. Kill the Shard Wolf, and clear the west side of the forest, where the griffons will appear.",
                      "go": [100276]
                    },
                    {
                      "t": "Lure the skeletons off the bridge, and kill the five forest banshees by the Wailing Lord. Don't harm him: no AoE near him, and keep minions off him.",
                      "go": [100297]
                    },
                    {"t": "Talk to the Wailing Lord, now friendly.", "take": [100003]},
                    {
                      "t": "Lead the three Forest Griffons to the Tower of Courage. Foes respawn behind you on the way, and a dead griffon sends everyone out.",
                      "go": [100003]
                    }
                  ]
                },
                {"area": "Tower of Courage", "steps": [{"t": "Turn both in to Rastigan.", "done": [100297, 100003]}]},
                {
                  "area": "Great Battle Field",
                  "steps": [
                    {
                      "t": "Go east and north again, and kill the Shard Wolf in the middle of the battle field on the way east.",
                      "go": [100276]
                    }
                  ]
                },
                {
                  "area": 34,
                  "steps": [
                    {
                      "t": "Go northeast into the Burning Forest. Talk to Miko the Unchained at its southern entrance.",
                      "take": [100237]
                    },
                    {"t": "Kill the Shard Wolf near the great fire in the middle.", "go": [100276]},
                    {
                      "t": "By the windmill in the northeast corner, kill the four groups of a Shadow Overlord, a Shadow Mesmer and a Shadow Ranger.",
                      "go": [100237]
                    },
                    {"t": "Back to Miko.", "done": [100237]}
                  ]
                },
                {
                  "area": "Tower of Strength",
                  "steps": [
                    {
                      "t": "Take the fork south toward the Tower of Strength. Kill the five Shadow Patrols on the way, and the Shard Wolf by the Infernal Wurm outside the tower.",
                      "go": [100303, 100276]
                    },
                    {
                      "t": "Send one player to the temple's south exit to fetch the Tower Mage: he walks to the tower and opens it. Kill the Shadow Lord inside.",
                      "go": [100303]
                    }
                  ]
                },
                {
                  "area": "Lake of Fire",
                  "steps": [
                    {
                      "t": "Cross the bridge south over the Lake of Fire, past the Obsidian Furnace Drakes, and kill Lord Khobay and his Traitorous Temple Guards. An Infernal Wurm guards him.",
                      "go": [100139]
                    }
                  ]
                },
                {
                  "area": 34,
                  "steps": [
                    {"t": "Back to Nimros, south of the temple.", "done": [100276]},
                    {
                      "t": "Up into the temple: turn in to the Forgemaster and Lord Taeres.",
                      "done": [100212, 100139, 100303]
                    },
                    {"t": "With every quest done, open the Chest of Woe by the Forgemaster."}
                  ]
                }
              ]
            },
            {"routeTotal": {"plus": "the Chest of Woe"}}
          ]
        },
        {"title": "All quests", "blocks": [{"questIndex": {"skip": {}, "rest": "", "places": [34]}}]}
      ]
    },
    {
      "id": "uw",
      "group": "quests",
      "name": "Underworld Quests",
      "summary": "All eleven Underworld quests in one run, the dangerous ones first, ending with Dhuum.",
      "tags": ["Quests", "Underworld", "Route"],
      "sections": [
        {
          "flow": true,
          "blocks": [
            {"side": true, "height": 760, "areas": [72]},
            {
              "p": "{place:72} is Grenth's realm in the Mists: an elite area for a full party, heroes allowed. Its eleven repeatable quests pay 110,000 XP in all, and the last one, against Dhuum, earns the Underworld Chest. It's also the main place Globs of Ectoplasm drop."
            },
            {
              "p": "This guide is for doing all eleven in one run. Most of the quests send you out of the Underworld if an NPC dies, so the order puts the dangerous ones first: a failure early costs little, and the easy ones are left for when the team has the most to lose."
            },
            {"p": "With practice, it can be done with the {page:builds?meta|meta hero team}."},
            {"note": "Note: this guide hasn't been fact-checked yet, so it may have mistakes."}
          ]
        },
        {
          "title": "Releasing the Reapers",
          "flow": true,
          "blocks": [
            {
              "p": "Each area has a statue of Grenth with a Reaper imprisoned at it. Clear the Chamber frees the Reaper of the Labyrinth, and his Restoring Grenth's Monuments puts three Terrorweb Dryders at each of the other six statues: kill them and that area's Reaper appears."
            },
            {
              "ul": [
                "A freed Reaper gives the area's quest, and teleports the party to any other freed Reaper. Free them as you go, and the rest of the run is mostly teleports.",
                "A Reaper that dies sends everyone out, so clear the monsters around a statue before killing its Dryders.",
                "The Terrorweb Dryders are fire Elementalists with Meteor Shower among their AoE, and they make up most quest spawns too. Kill them first, and keep them away from the NPCs you protect.",
                "Once ten quests are done, the Reapers only teleport one player at a time, and once anyone enters the Hall of Judgment they're gone."
              ]
            }
          ]
        },
        {
          "title": "Black Widows",
          "blocks": [
            {
              "p": "Black Widows are a rare pet, one of three with a statue in the Hall of Monuments' Fellowship monument, and the Underworld is the only place to charm one. A level 20 widow with a random evolution spawns when you finish Demon Assassin, Imprisoned Spirits, Servants of Grenth, Terrorweb Queen, the Four Horsemen and Wrathful Spirits, and three more when Dhuum is down. Bring a Ranger hero to charm one, and tell the party first: a widow turns hostile while it's being charmed."
            }
          ]
        },
        {
          "title": "Route",
          "blocks": [
            {
              "route": [
                {
                  "start": 72,
                  "steps": [
                    {
                      "t": "Take the quest from the Lost Soul. Kill the three groups of Grasping Darknesses that rush in, and the Bladed Aatxes around the start. The doors open: head into the Labyrinth, clear around Grenth's statue, and kill its three Terrorweb Dryders last.",
                      "take": [100041],
                      "go": [100041]
                    },
                    {
                      "t": "Talk to the Reaper of the Labyrinth, and take only the monuments quest for now.",
                      "done": [100041],
                      "take": [100213]
                    }
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "Go to the Ice Wastes, clear around the statue and free the Reaper. Leave his quest for later: this Reaper is your second teleport for Unwanted Guests.",
                      "go": [100213]
                    }
                  ]
                },
                {
                  "area": "Labyrinth",
                  "steps": [
                    {
                      "t": "Teleport to the Reaper of the Labyrinth, with the whole Labyrinth cleared, and take Unwanted Guests. Six clusters spawn around the Labyrinth, each a Keeper of Souls with six Dryders, three Skeletons of Dhuum and six Vengeful Aatxes. The Keeper is what matters: while he lives, nothing can hurt his Aatxes, and when he dies his whole cluster dies with him. So the quest is six Keeper kills, and the fight is about reaching each Keeper without being stuck under invulnerable Aatxes.",
                      "take": [100309]
                    },
                    {
                      "t": "Walking into a cluster from the front brings the Aatxes first. The Reapers are the way around: talk to the Reaper of the Labyrinth, teleport to the Ice Wastes Reaper, and walk back into the Labyrinth from that side, reaching clusters from behind, where the Dryders and the Keeper often stand clear of the Aatxes. Kill the Dryders, then the Keeper. When the Aatxes do come, tank them, or knock them down and cripple them, while the rest kill the Keeper; teleport between the two Reapers to come at each cluster from its open side.",
                      "go": [100309]
                    },
                    {"t": "Back to the Reaper of the Labyrinth.", "done": [100309]}
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {"t": "Go to the mountains and free their Reaper. Keep his quest for later.", "go": [100213]}
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "On to the Chaos Planes, and free their Reaper. A lone Banished Dream Rider spawns three Mindblade Spectres when it dies, those spawn six, and those nine: leave them alone.",
                      "go": [100213]
                    },
                    {
                      "t": "The Four Horsemen is the hardest quest down here, and worth watching {ext:https://www.youtube.com/results?search_query=guild+wars+underworld+four+horsemen|a video of it} first. Clear everything around the Reaper and rest to full energy before taking it: he fights alone, and if he dies the run is over. Four groups spawn in different places around the planes, each a Horseman with Terrorweb Dryders and a Skeleton of Dhuum. They join up in two big groups, Ghozer with Kazhad and Thul Za with Madruk, about a radar circle out on either side, and close in on the Reaper from both sides at once.",
                      "take": [100270]
                    },
                    {
                      "t": "The Horsemen are level 28 Mesmers built to shut down a party: Power Block and Diversion lock your healers' skills, Cry of Frustration interrupts, Drain Enchantment strips protection, and Wastrel's Worry punishes casting. The Dryders bring the damage, with Meteor Shower and other fire AoE, and the Skeletons pile on with Bone Spike. Two ways to hold: make a stand around the Reaper, spread out and flagged apart so one AoE never hits two, with every healer on him; or hold one side with a tank that can't be targeted by spells while the rest meet the other side as far out as they can, before it joins up, then turn to the tank. Either way, spread the healing over several heroes so one locked bar doesn't lose the Reaper, interrupt Meteor Showers, kill the Dryders nearest the Reaper first, and keep going until all four Horsemen are dead.",
                      "done": [100270]
                    }
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "Teleport to the Ice Wastes. Taking Servants of Grenth sends three quick waves, each two groups of Dryders and a Skeleton of Dhuum: one goes for King Frozenwind, the other for the Reaper, and either dying ends the run. The King and his four Ice Elementals hold one group with Ward Against Harm; the Reaper has nothing. Stand between the spawn and the Reaper, or meet the waves at the spawn with the whole team, and kill fast.",
                      "take": [100231],
                      "done": [100231]
                    }
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "Teleport to the Chaos Planes, and through the stone arch by their Reaper into the Bone Pits. Clear the area and free the Reaper.",
                      "go": [100213]
                    },
                    {
                      "t": "Send the party down by the pit, and have one player take the quest. Four Tortured Spirits climb out one by one: if one dies, the run is over, and they run at any foe in range. Three Skeletons of Dhuum spawn at once, then Dryders by the bridge, a smaller group by the hooked path, and a third group past the first about a minute in. Stand on the spawns so nothing reaches the spirits; once it's all dead they walk to the Reaper.",
                      "take": [100120],
                      "done": [100120]
                    }
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "Teleport to the mountains for Demon Assassin, and fight away from the Reaper. The Slayer climbs up slowly and is no threat, but it brings four Keepers of Souls and eight Dryders that advance together on the Reaper. Spread out against their AoE, hit them while they bunch up, and kill every last one before turning in, or they kill the Reaper after.",
                      "take": [100058],
                      "done": [100058]
                    }
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "Teleport to the Chaos Planes and go on to the Spawning Pools, the hardest area: Dryders and Charged Blacknesses, both Elementalists. Free the Reaper.",
                      "go": [100213]
                    },
                    {
                      "t": "The Queen spawns in a narrow passage with four Obsidian Guardians, which knock down and ward her, and each side of her room gets four more Guardians, three Skeletons of Dhuum and four Dryders. Clear one side, teleport around to clear the other, or pull the Queen out of the wards: she attacks from far, so back off further than usual.",
                      "take": [100256],
                      "done": [100256]
                    }
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "Teleport to the Labyrinth and go on to the Vale. The friendly villagers, Tortured Spirits, only appear as you kill the groups of Grasping Darknesses near Mayor Alegheri: leave the first group alive and fewer of them spawn. Kill the patrolling Nights, and free the Reaper.",
                      "go": [100213]
                    },
                    {
                      "t": "Taking Wrathful Spirits puts four groups of three hostile spirits among the villagers and one on the hill. Their Illusionary Weaponry hits for 40 armor-ignoring damage, so a group melts anything it focuses: keep at least one villager alive, then the Mayor and the Reaper, who are next. The hill group can wait.",
                      "take": [100325],
                      "done": [100325]
                    }
                  ]
                },
                {
                  "area": "Labyrinth",
                  "steps": [
                    {"t": "Teleport to the Reaper of the Labyrinth and turn in the monuments.", "done": [100213]},
                    {
                      "t": "Leave one player at the Reaper of the Labyrinth and walk everyone else back to the chamber where you entered the Underworld: the first group of six Mindblade Spectres spawns there. Once they're in place, the player at the Reaper takes Escort of Souls. Six New Souls set off for the Vale on their own, and more Spectres spawn in the hall to the Vale, at its gate, and between the Mayor and the bridge: stay ahead of the souls and kill each group before they arrive. Don't teleport ahead, or they walk into the first group alone.",
                      "take": [100076],
                      "done": [100076]
                    }
                  ]
                },
                {
                  "area": 72,
                  "steps": [
                    {
                      "t": "Teleport to the Ice Wastes and go to King Frozenwind at the Hall of Judgment. Gather the whole party before anyone takes the quest: it removes every Reaper.",
                      "take": [100280]
                    },
                    {
                      "t": "Enter the Hall together: the doors close and Dhuum turns hostile. Two things end the fight: the Dhuum's Rest bar filling, which the Reapers fill along with players in Spirit Form, and Dhuum dropping below 25% health. Kill the Minions and Champions of Dhuum he keeps summoning, or they swarm you; Edge of Extinction helps. Resurrection skills don't work in the Hall, but Resurrection Scrolls and \"By Ural's Hammer!\" do. Dying, or reaching 60% death penalty, puts you next to Mayor Alegheri in the Vale in Spirit Form: talk to him to go back; heroes go back on their own. Don't use Encase Skeletal: it makes the skeleton unkillable.",
                      "go": [100280]
                    },
                    {
                      "t": "Turn in to King Frozenwind, and open the Underworld Chest at the Hall's door.",
                      "done": [100280]
                    }
                  ]
                }
              ]
            },
            {"routeTotal": {"plus": "the Underworld Chest"}}
          ]
        },
        {"title": "All quests", "blocks": [{"questIndex": {"skip": {}, "rest": "", "places": [72]}}]}
      ]
    },
    {
      "id": "drakes",
      "group": "solo",
      "name": "Purp Insc Chaos Axe Farm",
      "summary": "Purple and blue inscribable Chaos Axes and Shadow Shields, Blades, Bows and Staves from two Obsidian Furnace Drakes in Kourna, solo.",
      "tags": ["Farm", "Weapons", "Solo", "Koss"],
      "source": {
        "href": "https://wiki.guildwars.com/wiki/User:Foo",
        "archive": "https://web.archive.org/web/2026/https://wiki.guildwars.com/wiki/User:Foo",
        "author": "Foo",
        "full": true
      },
      "stats": [["Per run", "~45 s"], ["Inscribable drop", "~1 in 30 runs"]],
      "sections": [
        {
          "blocks": [
            {
              "p": "Chaos Axes and the Shadow weapons are Obsidian Furnace Drake drops, and nowhere else do these skins drop as inscribable blue or purple items. The {quest:100872} quest brings two of the drakes into Elona, where they drop as Nightfall items: blue and purple Chaos Axes and Shadow Shields, Blades, Bows and Staves with an inscription slot."
            },
            {
              "imgs": {
                "srcs": [
                  "img/guides/chaos-axe-farm-axe.jpg",
                  "img/guides/chaos-axe-farm-shield.jpg",
                  "img/guides/chaos-axe-farm-staff.jpg"
                ],
                "caption": "A purple Chaos Axe, a blue Shadow Shield and a blue Shadow Staff from the farm, each with an empty inscription slot."
              }
            }
          ]
        },
        {
          "title": "Build",
          "blocks": [
            {
              "builds": [
                {
                  "name": "Drake killer",
                  "role": "You",
                  "code": "OAVCQ8x0bwSQeAbwgQton3NI",
                  "runes": {"7": "3+1"},
                  "gear": ["High energy"]
                }
              ]
            },
            {
              "p": "Using 1-2-3-Tab-2-4-5-6-7 is enough to kill both drakes when they are adjacent to each other. When they are not, {skill:2103} comes in useful."
            }
          ]
        },
        {
          "title": "How it works",
          "flow": true,
          "blocks": [
            {
              "img": {
                "src": "img/guides/chaos-axe-farm-path.jpg",
                "caption": "The path from the portal to the drops, clockwise around the cliff. The flag marks Koss in the pool.",
                "side": true
              }
            },
            {
              "ul": [
                "The drakes spawn on a cliff above the portal out of {place:427}. From below the cliff they can't reach you and can't see you, so they can't hurt you.",
                "You can't hit them with attacks either, so the damage comes from hexes, which spread between the two drakes when they stand next to each other.",
                "They put up Obsidian Flesh, which blocks spells; signets aren't spells, so the signets keep working through it.",
                "{hero:6} must be in the party for the quest, so he is flagged out of the way.",
                "Each run is short: fight, rezone, flag, grab and aggro take about 45 seconds."
              ]
            }
          ]
        },
        {
          "title": "Walkthrough",
          "blocks": [
            {
              "ol": [
                "Take {quest:100872}, which needs {hero:6}, and leave {place:427} with him.",
                "Flag Koss far into the pool to your south-west.",
                "Walk back towards the portal to aggro the drakes above the cliff.",
                "Wait a minute for the initial drop-rate reduction to pass (a good time to set up another account for the farm).",
                "Kill both drakes.",
                "If anything worthwhile dropped, run through {place:384} to pick it up.",
                "Rezone and repeat."
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "note": "Masochist? This is a safe way to get Legendary Survivor: just 50 hours for 4,000 runs, or a third of that with scrolls!"
            },
            {"p": "Not a masochist? Take the {page:guides?gom|4-hour route} ;)"}
          ]
        }
      ]
    },
    {
      "id": "spidercave",
      "group": "solo",
      "name": "Solo W/R FoW Spider Cave Farm",
      "summary": "Farm the Fissure of Woe spider cave for Obsidian Shards and other goodies with a high-armor warrior and Melandru's Resilience.",
      "tags": ["Farm", "Obsidian Shards", "Solo", "Warrior"],
      "source": {
        "href": "https://wiki.guildwars.com/wiki/User:Foo",
        "archive": "https://web.archive.org/web/2026/https://wiki.guildwars.com/wiki/User:Foo",
        "author": "Foo",
        "full": true
      },
      "sections": [
        {
          "blocks": [
            {
              "p": "{place:34} is the only place in the game where Obsidian Shards drop. Its Spider Cave, between the Temple of War and the Fissure Shore, is packed with Armored Cave Spiders, which drop Obsidian Shards, Corrosive Spider Legs and Glittering Dust. A warrior with high armor can farm them alone."
            }
          ]
        },
        {
          "title": "How it works",
          "blocks": [
            {
              "ul": [
                "The spiders are rangers: their arrows are physical damage, which warrior armor takes well.",
                "They poison you with Apply Poison. Every condition on you adds health regeneration from {skill:451}, so their poison helps you heal.",
                "{skill:446} and {skill:2360} add more regeneration, and {skill:1407} heals when you need a burst.",
                "{skill:2355} raises your damage while {skill:2107} and {skill:330} hit the whole balled-up group.",
                "{skill:349} gets you there and away."
              ]
            }
          ]
        },
        {
          "title": "Build",
          "blocks": [
            {
              "builds": [
                {
                  "name": "W/R",
                  "role": "You",
                  "code": "OQITEV5iTaHUp4va4Ancm03orAA",
                  "runes": {"18": "3+1", "17": "3"}
                }
              ]
            }
          ]
        },
        {
          "title": "Walkthrough",
          "blocks": [
            {
              "ol": [
                "Enter {place:34}.",
                "Head to the Spider Cave, between the Temple of War and the Fissure Shore. Heroes can help you get there, but you can make it alone too.",
                "Pull the three Doubter's Dryders guarding the cave and kill them first.",
                "Then deal with the spiders that pop up: keep Melandru's Resilience and your regeneration up and spin them down with Whirlwind Attack and Cyclone Axe. If you feel safe, or have extra consumables, gather all or most of them into one ball first; speed-boost consumables make that harder.",
                "Pick up the drops."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "zos",
      "group": "afk",
      "name": "Zos Shivros AFK Luxon Farm",
      "summary": "Luxon faction all day in Zos Shivros Channel with 7 heroes: one click to start, a couple to stand in place, then go AFK.",
      "tags": ["Farm", "Luxon faction", "AFK", "7 heroes"],
      "sections": [
        {
          "blocks": [
            {
              "p": "{mission:273} sends seven waves, then stops for good while still paying 50 Luxon faction a minute. This hero team holds all seven waves on its own, so the run can go on for as long as your faction cap allows."
            }
          ]
        },
        {
          "title": "Build",
          "blocks": [
            {"builds": ["luxsogm", "luxsos", "luxbip", "luxmm", "luxesurge", "luxesurge", "luxrez"]},
            {"p": "The same team is on the {page:builds?luxafk|Builds page}."}
          ]
        },
        {
          "title": "Setup",
          "blocks": [
            {
              "img": {
                "src": "img/guides/zos-afk-luxon-place.jpg",
                "caption": "The team in place behind Battle Priest Calibos, with you in the middle.",
                "side": true
              }
            },
            {
              "ol": [
                "Start the mission in Normal mode: one click.",
                "Walk to the spot just behind Battle Priest Calibos, as in the picture, and stand there.",
                "Go AFK. If you worry, check once at 31 minutes that the team is alive: wave 7 is over by then, and nothing comes after it."
              ]
            }
          ]
        },
        {
          "title": "Faction cap",
          "blocks": [
            {
              "p": "Faction past your cap is lost, so your cap decides how long a run can last. Donate or spend before you run again."
            },
            {
              "capCalc": {
                "base": 10000,
                "rate": 3000,
                "rows": [
                  ["{quest:100496}", 10000],
                  ["{mission:307}: defeat Kanaxai", 10000],
                  ["{mission:204}, entered from the Luxon side", 7000],
                  {"rank": "Friend of the Luxons title", "first": 5000, "each": 1000, "max": 12},
                  ["Win {mission:221} for the Luxons", 5000],
                  ["Win {mission:223} for the Luxons", 5000],
                  ["Win an Alliance Battle for the Luxons", 5000],
                  ["Score 100 points in {mission:273}: your first run of this farm", 1000],
                  ["Score 100 points in {mission:234}", 1000]
                ]
              }
            },
            {
              "p": "Not sure which you have? Ask the Luxon Scavenger in {place:193} or a Luxon-allied guild hall: he lists the ones you haven't done yet."
            }
          ]
        },
        {
          "title": "Notes",
          "blocks": [
            {
              "ul": [
                "Turning faction in during Faction Support Week doubles the title points.",
                "It takes about 200 hours (or 100) of this farm to reach rank 6, at which Luxon skills reach full strength.",
                "It takes about 1,670 hours (or 835) to max the title at rank 12.",
                "The number of runs it takes to max the title depends on how high your cap is at the start, and on turning in during Faction Support Weeks. At the least, with every other raise done and rank 1 reached (a 59,000 cap), it takes 38 runs, all turned in during Faction Support Weeks. At the most, with no raises besides the title ranks and this farm's own score, and no Faction Support Weeks, it takes 217."
              ]
            }
          ]
        }
      ]
    }
  ]
};
