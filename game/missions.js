const GW_MISSIONS = {
  "missions_": "Kept by hand. Keys are the map id the mission is played on (for Prophecies, its outpost's). outpost: where you start it. leads_to: locations it unlocks. hero: heroes it gives. objectives: [depth, text, bonus?]. rewards: per mode and tier, [xp, gold, skill points, extra...]; by: what sets the tier. foes, bosses, allies: {creature, level: [normal, hard]}. wiki: its page on each wiki, {en, de} (as locations).",
  "missions": {
    "10": {
      "name": "Bloodstone Fen",
      "kind": "story",
      "outpost": 10,
      "order": 11,
      "label": "11",
      "leads_to": [142],
      "objectives": [
        [0, "Seek the truth about the White Mantle.", false],
        [1, "Locate Blade Scout Ryder. He'll take you to the Bloodstone.", false],
        [1, "Use the vine bridges to traverse the jungle.", false],
        [1, "Travel on to the Bloodstone on your own.", false],
        [1, "Avenge the chosen by killing Justiciar Hablion and his personal guards.", false],
        [1, "Awaken the Druids while preserving their guardians.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100569, "level": [18, 25]},
        {"creature": 100567, "level": [16, 25]},
        {"creature": 100568, "level": [16, 25]},
        {"creature": 100573, "level": [19, 25]},
        {"creature": 100621, "level": [20, 26]},
        {"creature": 100574, "level": [17, 25]},
        {"creature": 100622, "level": [19, 25]},
        {"creature": 100575, "level": [12, 24]},
        {"creature": 100576, "level": [12, 24]},
        {"creature": 100578, "level": [17, 25]},
        {"creature": 100579, "level": [17, 25]},
        {"creature": 100623, "level": [16, 25]},
        {"creature": 100624, "level": [16, 25]}
      ],
      "bosses": [
        {"creature": 100625, "level": [20, 29]},
        {"creature": 100626, "level": [20, 29]},
        {"creature": 100627, "level": [20, 29]},
        {"creature": 100628, "level": [20, 29]},
        {"creature": 100629, "level": [20, 29]},
        {"creature": 100630, "level": [20, 29]},
        {"creature": 100631, "level": [20, 29]},
        {"creature": 100632, "level": [20, 29]},
        {"creature": 100633, "level": [20, 29]},
        {"creature": 100634, "level": [20, 29]},
        {"creature": 100635, "level": [20, 29]}
      ],
      "allies": [
        {"creature": 100636, "level": [10, 20]},
        {"creature": 100637, "level": [15, 20]},
        {"creature": 100638, "level": [15, 20]},
        {"creature": 100639, "level": [15, 20]},
        {"creature": 100594, "level": [20]},
        {"creature": 100640, "level": [20]}
      ],
      "wiki": {"en": "Bloodstone Fen", "de": "Blutsteinsumpf (Mission)"}
    },
    "11": {
      "name": "The Wilds",
      "kind": "story",
      "outpost": 11,
      "order": 10,
      "label": "10",
      "leads_to": [10],
      "objectives": [
        [0, "Hunt down the Shining Blade kidnappers, and rescue the Chosen they have taken hostage.", false],
        [1, "Chase the fleeing Shining Blade.", false],
        [1, "Rescue the Chosen.", false],
        [1, "Discover how the Shining Blade navigates the jungle.", false],
        [1, "Defeat the two Centaur chieftains.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100577, "level": [16, 25]},
        {"creature": 100834, "level": [16, 25]},
        {"creature": 100624, "level": [16, 25]},
        {"creature": 100835, "level": [16, 25]},
        {"creature": 100623, "level": [16, 25]},
        {"creature": 100836, "level": [16, 25]},
        {"creature": 100837, "level": [16, 25]},
        {"creature": 100838, "level": [16, 25]},
        {"creature": 100839, "level": [20, 20]},
        {"creature": 100840, "level": [20, 20]},
        {"creature": 100841, "level": [18, 25]},
        {"creature": 100842, "level": [15, 25]},
        {"creature": 100575, "level": [12, 24]},
        {"creature": 100576, "level": [12, 24]},
        {"creature": 100843, "level": [18, 25]}
      ],
      "bosses": [
        {"creature": 100581, "level": [18, 28]},
        {"creature": 100844, "level": [19, 29]},
        {"creature": 100583, "level": [18, 28]},
        {"creature": 100845, "level": [19, 29]},
        {"creature": 100846, "level": [19, 29]},
        {"creature": 100586, "level": [18, 28]},
        {"creature": 100847, "level": [18, 28]},
        {"creature": 100848, "level": [19, 29]},
        {"creature": 100589, "level": [18, 28]},
        {"creature": 100849, "level": [19, 29]},
        {"creature": 100850, "level": [19, 29]},
        {"creature": 100851, "level": [19, 29]},
        {"creature": 100591, "level": [18, 28]}
      ],
      "allies": [
        {"creature": 100852, "level": [10, 20]},
        {"creature": 100567, "level": [15, 20]},
        {"creature": 100839, "level": [20, 20]},
        {"creature": 100853, "level": [20, 20]},
        {"creature": 100854, "level": [15, 20]}
      ],
      "wiki": {"en": "The Wilds", "de": "Die Wildnis (Mission)"}
    },
    "12": {
      "name": "Aurora Glade",
      "kind": "story",
      "outpost": 12,
      "order": 12,
      "label": "12",
      "leads_to": [49],
      "objectives": [
        [0, "Gain access to the Henge of Denravi.", false],
        [1, "Get to the Henge Portal.", false],
        [1, "Attune the Henge Portal before the White Mantle do.", false],
        [1, "Attune the thorn pedestal to clear the vine gate.", false],
        [1, "Attune both thorn pedestals to clear the vine gate.", false],
        [1, "Kill the Henge Guardian.", false],
        [1, "Assassinate the Demagogue.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100567, "level": [16, 25]},
        {"creature": 100568, "level": [16, 25]},
        {"creature": 100569, "level": [18, 25]},
        {"creature": 100570, "level": [16, 25]},
        {"creature": 100571, "level": [16, 25]},
        {"creature": 100572, "level": [16, 25]},
        {"creature": 100573, "level": [19, 25]},
        {"creature": 100574, "level": [17, 25]},
        {"creature": 100575, "level": [14, 24]},
        {"creature": 100576, "level": [12, 24]},
        {"creature": 100577, "level": [16, 25]},
        {"creature": 100578, "level": [17, 25]},
        {"creature": 100579, "level": [17, 25]}
      ],
      "bosses": [
        {"creature": 100580, "level": [16, 25]},
        {"creature": 100581, "level": [18, 28]},
        {"creature": 100582, "level": [20, 29]},
        {"creature": 100583, "level": [18, 28]},
        {"creature": 100584, "level": [20, 29]},
        {"creature": 100585, "level": [20, 29]},
        {"creature": 100586, "level": [18, 28]},
        {"creature": 100587, "level": [20, 29]},
        {"creature": 100588, "level": [20, 29]},
        {"creature": 100589, "level": [18, 28]},
        {"creature": 100590, "level": [20, 29]},
        {"creature": 100591, "level": [18, 28]},
        {"creature": 100592, "level": [20, 29]}
      ],
      "allies": [{"creature": 100593, "level": [15]}, {"creature": 100594, "level": [20]}],
      "wiki": {"en": "Aurora Glade", "de": "Auroralichtung (Mission)"}
    },
    "14": {
      "name": "Gates of Kryta",
      "kind": "story",
      "outpost": 14,
      "order": 7,
      "label": "7",
      "leads_to": [55],
      "objectives": [
        [0, "Secure a safe place for your people to settle.", false],
        [1, "Make contact with the local authorities at Lion's Arch.", false],
        [1, "Head south across the beach to find Justiciar Hablion.", false],
        [1, "Help Justiciar Hablion clear the swamp of undead.", false],
        [1, "Retrieve the Orrian text and have it translated.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 101108, "level": [18, 25]},
        {"creature": 100704, "level": [14, 24]},
        {"creature": 101110, "level": [12, 24]},
        {"creature": 100987, "level": [16, 25]},
        {"creature": 100707, "level": [11, 24]},
        {"creature": 100708, "level": [13, 24]},
        {"creature": 100991, "level": [18, 25]},
        {"creature": 100710, "level": [14, 24]},
        {"creature": 100711, "level": [13, 24]},
        {"creature": 100943, "level": [17, 25]},
        {"creature": 100712, "level": [13, 24]}
      ],
      "bosses": [
        {"creature": 101350, "level": [15, 28]},
        {"creature": 101351, "level": [14, 28]},
        {"creature": 101352, "level": [15, 28]},
        {"creature": 101353, "level": [15, 28]},
        {"creature": 101354, "level": [15, 28]},
        {"creature": 101355, "level": [15, 28]}
      ],
      "allies": [
        {"creature": 101356, "level": [1, 20]},
        {"creature": 101357, "level": [10, 20]},
        {"creature": 101358, "level": [10, 20]},
        {"creature": 101359, "level": [10, 20]},
        {"creature": 101360, "level": [10, 20]},
        {"creature": 101361, "level": [10, 20]},
        {"creature": 101362, "level": [10, 20]},
        {"creature": 100625, "level": [18, 20]},
        {"creature": 101363, "level": [15, 20]},
        {"creature": 101364, "level": [8, 20]},
        {"creature": 101365, "level": [8, 20]},
        {"creature": 101366, "level": [15, 20]},
        {"creature": 100567, "level": [15, 20]},
        {"creature": 100568, "level": [12, 20]},
        {"creature": 100569, "level": [15, 20]},
        {"creature": 100572, "level": [15, 20]},
        {"creature": 101367, "level": [8, 20]},
        {"creature": 100732, "level": [5]}
      ],
      "wiki": {"en": "Gates of Kryta", "de": "Tore von Kryta (Mission)"}
    },
    "15": {
      "name": "D'Alessio Seaboard",
      "kind": "story",
      "outpost": 15,
      "order": 8,
      "label": "8",
      "leads_to": [16],
      "objectives": [
        [0, "Lend aid to the White Mantle in their fight against the undead.", false],
        [1, "Hurry to the Temple of Tolerance.", false],
        [1, "Discuss the undead menace with Confessor Dorian.", false],
        [1, "Clear out the undead from the village of Hakewood.", false],
        [1, "Protect Confessor Dorian from the undead.", false],
        [1, "Head to the southwest. Locate Dinas and the Scepter of Orr.", false],
        [1, "Deliver the village's offering intact to the statue of Melandru.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100703, "level": [15, 24]},
        {"creature": 100704, "level": [14, 24]},
        {"creature": 100705, "level": [17, 25]},
        {"creature": 100706, "level": [11, 24]},
        {"creature": 100707, "level": [11, 24]},
        {"creature": 100708, "level": [13, 24]},
        {"creature": 100709, "level": [12, 24]},
        {"creature": 100710, "level": [14, 24]},
        {"creature": 100711, "level": [13, 24]},
        {"creature": 100712, "level": [13, 24]}
      ],
      "bosses": [
        {"creature": 100713, "level": [16]},
        {"creature": 100714, "level": [17]},
        {"creature": 100715, "level": [16]},
        {"creature": 100716, "level": [17]},
        {"creature": 100717, "level": [16]},
        {"creature": 100718, "level": [17]},
        {"creature": 100719, "level": [17]},
        {"creature": 100720, "level": [16]},
        {"creature": 100721, "level": [17]},
        {"creature": 100722, "level": [16]},
        {"creature": 100723, "level": [17]},
        {"creature": 100724, "level": [16]}
      ],
      "allies": [
        {"creature": 100725, "level": [10, 20]},
        {"creature": 100726, "level": [10, 20]},
        {"creature": 100727, "level": [12, 20]},
        {"creature": 100728, "level": [20]},
        {"creature": 100729, "level": [20]},
        {"creature": 100730, "level": [15, 20]},
        {"creature": 100731, "level": [15, 20]},
        {"creature": 100732, "level": [5]}
      ],
      "wiki": {"en": "D'Alessio Seaboard", "de": "D'Alessio-Küste (Mission)"}
    },
    "16": {
      "name": "Divinity Coast",
      "kind": "story",
      "outpost": 16,
      "order": 9,
      "label": "9",
      "leads_to": [140],
      "objectives": [
        [0, "Administer the Test of the Chosen.", false],
        [1, "Retrieve the Eye of Janthir from Justiciar Hablion in the upper courtyard of Shaemoor.", false],
        [1, "Deliver the Eye to the coastal city of Loamhurst.", false],
        [1, "Cleanse yourself in the Fountain of Truth on the hill to the southeast.", false],
        [1, "Find and escort all the chosen to Loamhurst.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 101108, "level": [18, 25]},
        {"creature": 101109, "level": [20, 26]},
        {"creature": 100703, "level": [15, 24]},
        {"creature": 101110, "level": [12, 24]},
        {"creature": 101111, "level": [13, 24]},
        {"creature": 101112, "level": [11, 24]},
        {"creature": 100706, "level": [11, 24]},
        {"creature": 101113, "level": [13, 24]},
        {"creature": 101114, "level": [13, 24]},
        {"creature": 100987, "level": [16, 25]},
        {"creature": 100707, "level": [11, 24]},
        {"creature": 100708, "level": [13, 24]},
        {"creature": 100709, "level": [12, 24]},
        {"creature": 100710, "level": [14, 24]},
        {"creature": 100711, "level": [13, 24]},
        {"creature": 100712, "level": [13, 24]}
      ],
      "bosses": [
        {"creature": 101115, "level": [18, 28]},
        {"creature": 101116, "level": [18, 28]},
        {"creature": 101117, "level": [18, 28]},
        {"creature": 101118, "level": [18, 28]},
        {"creature": 101119, "level": [18, 28]},
        {"creature": 101120, "level": [18, 28]},
        {"creature": 101121, "level": [18, 28]},
        {"creature": 101122, "level": [18, 28]},
        {"creature": 101123, "level": [18, 28]},
        {"creature": 101124, "level": [18, 28]},
        {"creature": 101125, "level": [18, 28]},
        {"creature": 101126, "level": [18, 28]}
      ],
      "allies": [
        {"creature": 100726, "level": [10, 20]},
        {"creature": 100625, "level": [18, 20]},
        {"creature": 101127, "level": [10, 20]},
        {"creature": 100567, "level": [15, 20]},
        {"creature": 101128, "level": [12, 20]},
        {"creature": 100569, "level": [15, 20]},
        {"creature": 101129},
        {"creature": 101130},
        {"creature": 100636, "level": [10, 20]},
        {"creature": 101131, "level": [12, 20]},
        {"creature": 101132, "level": [15, 20]},
        {"creature": 101133, "level": [15, 20]}
      ],
      "wiki": {"en": "Divinity Coast", "de": "Küste der Göttlichkeit (Mission)"}
    },
    "19": {
      "name": "Sanctum Cay",
      "kind": "story",
      "outpost": 19,
      "order": 14,
      "label": "14",
      "leads_to": [109],
      "objectives": [
        [
          0,
          "Deliver the Scepter of Orr to Vizier Khilbron and rendezvous with Evennia on the other side of the island.",
          false
        ],
        [1, "Locate the Vizier and deliver the Scepter.", false],
        [1, "Make your way to the docks on the opposite side of the island.", false],
        [1, "Help the Restless Spirit find his final resting place.", true],
        [
          1,
          "You have been betrayed! Evennia has been taken. Meet the Vizier at the docks to make your escape.",
          false
        ],
        [1, "Defend the Vizier while he summons a ship for your escape. Get on the boat when he is done.", false],
        [1, "Get on the boat!", false]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 101111, "level": [13, 24]},
        {"creature": 101108, "level": [18, 25]},
        {"creature": 100983, "level": [20, 26]},
        {"creature": 100986, "level": [18, 25]},
        {"creature": 100987, "level": [16, 25]},
        {"creature": 100988, "level": [18, 25]},
        {"creature": 100708, "level": [13, 24]},
        {"creature": 100990, "level": [17, 25]},
        {"creature": 100991, "level": [18, 25]},
        {"creature": 100943, "level": [17, 25]},
        {"creature": 100944, "level": [18, 25]},
        {"creature": 100567, "level": [16, 25]},
        {"creature": 101272, "level": [16, 25]},
        {"creature": 100568, "level": [16, 25]},
        {"creature": 100569, "level": [18, 25]},
        {"creature": 100570, "level": [16, 25]},
        {"creature": 100572, "level": [16, 25]}
      ],
      "bosses": [
        {"creature": 101273, "level": [21, 29]},
        {"creature": 100988, "level": [21, 29]},
        {"creature": 101274, "level": [20, 29]},
        {"creature": 101275, "level": [21, 29]},
        {"creature": 101276, "level": [20, 29]},
        {"creature": 101277, "level": [20, 29]},
        {"creature": 101278, "level": [21, 29]},
        {"creature": 101279, "level": [21, 29]},
        {"creature": 101280, "level": [21, 29]}
      ],
      "allies": [
        {"creature": 100707, "level": [11, 20]},
        {"creature": 100854, "level": [15, 20]},
        {"creature": 100521, "level": [20, 20]},
        {"creature": 100943, "level": [18, 20]},
        {"creature": 101281, "level": [10, 20]},
        {"creature": 100732, "level": [5, 5]}
      ],
      "wiki": {"en": "Sanctum Cay", "de": "Riff der Stille (Mission)"}
    },
    "21": {
      "name": "The Frost Gate",
      "kind": "story",
      "outpost": 21,
      "order": 6,
      "label": "6",
      "leads_to": [133],
      "objectives": [
        [0, "Open the Frost Gate.", false],
        [1, "Destroy the ballistae to secure safe passage for Rurik and the Ascalon refugees.", false],
        [1, "Retrieve the Gear Lever from the Dwarven fort to open the Frost Gate.", false],
        [1, "Use the Gear Lever on the Lever Mechanism to reach the Frost Gate.", false],
        [1, "Steal the Stone Summit's secret plans for a powerful siege weapon.", true],
        [1, "Activate the three Frost Gate Lever Mechanisms before the Stone Summit overwhelms Rurik.", false]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100750, "level": [10, 24]},
        {"creature": 100673, "level": [10, 24]},
        {"creature": 100667, "level": [10, 24]},
        {"creature": 100666, "level": [9, 23]},
        {"creature": 100669, "level": [9, 23]},
        {"creature": 100670, "level": [11, 24]},
        {"creature": 100672, "level": [10, 24]},
        {"creature": 100671, "level": [10, 24]},
        {"creature": 100675, "level": [10, 24]},
        {"creature": 100751, "level": [11, 24]},
        {"creature": 100674, "level": [10, 24]}
      ],
      "bosses": [
        {"creature": 100752, "level": [13, 27]},
        {"creature": 100753, "level": [13, 27]},
        {"creature": 100754, "level": [13, 27]},
        {"creature": 100755, "level": [13, 27]},
        {"creature": 100756, "level": [13, 27]},
        {"creature": 100757, "level": [13, 27]}
      ],
      "allies": [
        {"creature": 100690, "level": [10, 20]},
        {"creature": 100758, "level": [5, 20]},
        {"creature": 100694, "level": [10, 20]}
      ],
      "wiki": {"en": "The Frost Gate", "de": "Das Frosttor (Mission)"}
    },
    "22": {
      "name": "Ice Caves of Sorrow",
      "kind": "story",
      "outpost": 22,
      "order": 20,
      "label": "20",
      "leads_to": [24],
      "objectives": [
        [0, "Rescue Evennia [sic]", false],
        [1, "Find a way into the holding area.", false],
        [1, "Break Evennia out of her cell.", false],
        [1, "Escape with Evennia to the awaiting ice ship.", false],
        [1, "Return news of Rornak Stonesledge to Hamdor Grandaxe.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100668, "level": [13, 24]},
        {"creature": 100897, "level": [24, 26]},
        {"creature": 100913, "level": [24, 26]},
        {"creature": 100914, "level": [24, 26]},
        {"creature": 100915, "level": [24, 26]},
        {"creature": 100673, "level": [24, 26]},
        {"creature": 100891, "level": [20, 26]},
        {"creature": 100568, "level": [20, 26]},
        {"creature": 100569, "level": [20, 26]},
        {"creature": 100892, "level": [20, 26]},
        {"creature": 100571, "level": [20, 25]},
        {"creature": 100572, "level": [20, 25]},
        {"creature": 100893, "level": [20, 26]},
        {"creature": 100916, "level": [24, 26]},
        {"creature": 100917, "level": [22, 26]},
        {"creature": 100498, "level": [24, 26]},
        {"creature": 100500, "level": [24, 26]},
        {"creature": 100503, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100918, "level": [28, 30]},
        {"creature": 100919, "level": [28, 30]},
        {"creature": 100920, "level": [28, 30]},
        {"creature": 100921, "level": [28, 30]},
        {"creature": 100922, "level": [28, 30]},
        {"creature": 100923, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 100839, "level": [20, 20]},
        {"creature": 100854, "level": [20, 20]},
        {"creature": 100924, "level": [10, 20]},
        {"creature": 100694, "level": [10, 20]},
        {"creature": 100693, "level": [10, 20]},
        {"creature": 100925, "level": [20, 20]}
      ],
      "wiki": {"en": "Ice Caves of Sorrow", "de": "Eishöhlen der Betrübnis (Mission)"}
    },
    "23": {
      "name": "Thunderhead Keep",
      "kind": "story",
      "outpost": 23,
      "order": 22,
      "label": "22",
      "leads_to": [35],
      "objectives": [
        [0, "Retake Thunderhead Keep.", false],
        [1, "Clear the city.", false],
        [1, "Clear the fort.", false],
        [1, "Kill Dagnar Stonepate.", false],
        [1, "Help King Jalis Ironhammer hold Thunderhead Keep.", false],
        [1, "Speak with King Jalis Ironhammer.", false],
        [1, "Light the beacons to draw additional Mursaat forces into Thunderhead Keep.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100691, "level": [24]},
        {"creature": 100692, "level": [20]},
        {"creature": 100943, "level": [17]},
        {"creature": 100890, "level": [24, 26]},
        {"creature": 100498, "level": [24, 26]},
        {"creature": 100499, "level": [24, 26]},
        {"creature": 100500, "level": [24, 26]},
        {"creature": 100501, "level": [24, 26]},
        {"creature": 100502, "level": [24, 26]},
        {"creature": 100503, "level": [24, 26]},
        {"creature": 100944, "level": [18, 25]},
        {"creature": 100568, "level": [16, 25]},
        {"creature": 100892, "level": [20, 26]},
        {"creature": 100728, "level": [20, 26]},
        {"creature": 100570, "level": [16, 25]},
        {"creature": 100571, "level": [16, 25]},
        {"creature": 100572, "level": [16, 25]},
        {"creature": 100897, "level": [24, 26]},
        {"creature": 100898, "level": [24, 26]},
        {"creature": 100913, "level": [24, 26]},
        {"creature": 100914, "level": [24, 26]},
        {"creature": 100945, "level": [24, 26]},
        {"creature": 100915, "level": [24, 26]},
        {"creature": 100889, "level": [24, 26]},
        {"creature": 100946, "level": [24, 26]},
        {"creature": 100947, "level": [24, 26]},
        {"creature": 100948, "level": [24, 26]},
        {"creature": 100949, "level": [24, 26]},
        {"creature": 100950, "level": [24, 26]},
        {"creature": 100951, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100952, "level": [28, 30]},
        {"creature": 100953, "level": [28, 30]},
        {"creature": 100954, "level": [28, 30]},
        {"creature": 100679, "level": [28, 30]},
        {"creature": 100955, "level": [28, 30]},
        {"creature": 100956, "level": [28, 30]},
        {"creature": 100957, "level": [28, 30]},
        {"creature": 100682, "level": [28, 30]},
        {"creature": 100958, "level": [28, 30]},
        {"creature": 100959, "level": [28, 30]},
        {"creature": 100960, "level": [28, 30]},
        {"creature": 100961, "level": [28, 30]},
        {"creature": 100962, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 100691, "level": [24]},
        {"creature": 100692, "level": [20]},
        {"creature": 100943, "level": [17]}
      ],
      "wiki": {"en": "Thunderhead Keep", "de": "Feste Donnerkopf (Mission)"}
    },
    "24": {
      "name": "Iron Mines of Moladune",
      "kind": "story",
      "outpost": 24,
      "order": 21,
      "label": "21",
      "leads_to": [23],
      "objectives": [
        [0, "Kill Markis and his Jade Armor guards.", false],
        [1, "Find the Seer.", false],
        [1, "Kill the Eidolon.", false],
        [1, "Deliver the Spectral Essence to the Seer to infuse your armor.", false],
        [1, "Defeat The Inquisitor before he leaves with the information about the Shining Blade.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100889},
        {"creature": 100890},
        {"creature": 100891},
        {"creature": 100567},
        {"creature": 100568},
        {"creature": 100892},
        {"creature": 100570},
        {"creature": 100893},
        {"creature": 100498},
        {"creature": 100499},
        {"creature": 100500},
        {"creature": 100501},
        {"creature": 100502},
        {"creature": 100503},
        {"creature": 100894},
        {"creature": 100895},
        {"creature": 100896},
        {"creature": 100897},
        {"creature": 100898}
      ],
      "bosses": [
        {"creature": 100899, "level": [28]},
        {"creature": 100900, "level": [28]},
        {"creature": 100901, "level": [28]},
        {"creature": 100902, "level": [28]},
        {"creature": 100853, "level": [22]},
        {"creature": 100903, "level": [28]},
        {"creature": 100904, "level": [28]},
        {"creature": 100905, "level": [28]},
        {"creature": 100906, "level": [28]},
        {"creature": 100907, "level": [28]},
        {"creature": 100908, "level": [28]},
        {"creature": 100518, "level": [24]},
        {"creature": 100909, "level": [28]},
        {"creature": 100910, "level": [28]}
      ],
      "allies": [{"creature": 100911}, {"creature": 100912}],
      "wiki": {"en": "Iron Mines of Moladune", "de": "Eisenminen von Moladune (Mission)"}
    },
    "25": {
      "name": "Borlis Pass",
      "kind": "story",
      "outpost": 25,
      "order": 5,
      "label": "5",
      "leads_to": [21],
      "objectives": [
        [0, "Negotiate passage to Grooble's Gulch and shelter for the Ascalon refugees.", false],
        [1, "Ignite all the storm beacons to light the way through the storm.", false],
        [1, "Find out what happened to Prince Rurik's negotiations with Dwarf king Jalis Ironhammer.", false],
        [1, "Break through the locked gate into Maladar's Fort.", false],
        [
          1,
          "Bring an end to the siege of Krok's Hollow. Destroy the ballistae and the forces outside the gates.",
          false
        ],
        [1, "Light the magical signal beacons.", false],
        [1, "Kill the ice drake.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100663, "level": [8, 23]},
        {"creature": 100664, "level": [8, 23]},
        {"creature": 100665, "level": [8, 23]},
        {"creature": 100666, "level": [9, 23]},
        {"creature": 100667, "level": [10, 23]},
        {"creature": 100668, "level": [13, 24]},
        {"creature": 100669, "level": [9, 23]},
        {"creature": 100670, "level": [11, 24]},
        {"creature": 100671, "level": [10, 24]},
        {"creature": 100672, "level": [10, 24]},
        {"creature": 100673, "level": [10, 24]},
        {"creature": 100674, "level": [10, 24]},
        {"creature": 100675, "level": [10, 24]}
      ],
      "bosses": [
        {"creature": 100676, "level": [11, 27]},
        {"creature": 100677, "level": [12, 27]},
        {"creature": 100678, "level": [11, 27]},
        {"creature": 100679, "level": [12, 27]},
        {"creature": 100680, "level": [11, 27]},
        {"creature": 100681, "level": [11, 27]},
        {"creature": 100682, "level": [12, 27]},
        {"creature": 100683, "level": [11, 27]},
        {"creature": 100684, "level": [12, 27]},
        {"creature": 100685, "level": [11, 27]},
        {"creature": 100686, "level": [14, 28]},
        {"creature": 100687, "level": [13, 27]}
      ],
      "allies": [
        {"creature": 100688, "level": [7, 20]},
        {"creature": 100689, "level": [7, 20]},
        {"creature": 100690, "level": [10, 20]},
        {"creature": 100691, "level": [24, 24]},
        {"creature": 100692, "level": [10, 20]},
        {"creature": 100693, "level": [10, 20]},
        {"creature": 100694, "level": [10, 20]}
      ],
      "wiki": {"en": "Borlis Pass", "de": "Borlispass (Mission)"}
    },
    "28": {
      "name": "The Great Northern Wall",
      "kind": "story",
      "outpost": 28,
      "order": 1,
      "label": "1",
      "leads_to": [29],
      "objectives": [
        [0, "Scout for Bonfaaz Burntfur's Charr forces.", false],
        [1, "Search north of the Wall to find the Charr army.", false],
        [1, "Report your findings to Captain Calhaan.", false],
        [1, "Find a new way back. Run to the Wall.", false],
        [1, "Recover the four pieces of Kilnn Testibrie's armor and return them to his tomb.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100779, "level": [6, 23]},
        {"creature": 100780, "level": [8, 23]},
        {"creature": 100781, "level": [8, 23]},
        {"creature": 100782, "level": [7, 23]},
        {"creature": 100783, "level": [4, 22]},
        {"creature": 100784, "level": [3, 22]},
        {"creature": 100785, "level": [4, 22]},
        {"creature": 100786, "level": [3, 22]},
        {"creature": 100787, "level": [4, 22]},
        {"creature": 100788, "level": [4, 22]},
        {"creature": 100789, "level": [3, 22]}
      ],
      "bosses": [
        {"creature": 100790, "level": [7, 26]},
        {"creature": 100791, "level": [6, 26]},
        {"creature": 100792, "level": [6, 26]},
        {"creature": 100793, "level": [7, 26]},
        {"creature": 100794, "level": [6, 26]},
        {"creature": 100795, "level": [7, 26]},
        {"creature": 100796, "level": [6, 26]},
        {"creature": 100797, "level": [7, 26]},
        {"creature": 100798, "level": [7, 26]},
        {"creature": 100799, "level": [6, 26]},
        {"creature": 100800, "level": [6, 26]},
        {"creature": 100801, "level": [7, 26]},
        {"creature": 100802, "level": [10, 27]}
      ],
      "allies": [
        {"creature": 100803, "level": [6, 20]},
        {"creature": 100804, "level": [15, 20]},
        {"creature": 100805, "level": [3, 3]}
      ],
      "wiki": {"en": "The Great Northern Wall", "de": "Der Große Nordwall (Mission)"}
    },
    "29": {
      "name": "Fort Ranik",
      "kind": "story",
      "outpost": 29,
      "order": 2,
      "label": "2",
      "leads_to": [135],
      "objectives": [
        [0, "Retake the Great Northern Wall.", false],
        [1, "Push back the invading Charr army.", false],
        [1, "Locate the RESTRAINING BOLT [sic] and return it to Siegemaster Lormar.", false],
        [1, "Locate the ARMING CRANK [sic] and return it to Siegemaster Lormar.", false],
        [1, "Locate the RELEASE LEVER [sic] and return it to Siegemaster Lormar.", false],
        [1, "Rescue Deeter Saberlin from his Charr imprisonment.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 101007, "level": [6, 23]},
        {"creature": 100779, "level": [6, 23]},
        {"creature": 101008, "level": [6, 23]},
        {"creature": 101009, "level": [6, 23]},
        {"creature": 101010, "level": [5, 23]},
        {"creature": 101011, "level": [6, 23]},
        {"creature": 101012, "level": [6, 23]},
        {"creature": 101013, "level": [8, 23]},
        {"creature": 101014, "level": [6, 23]},
        {"creature": 101015, "level": [6, 23]}
      ],
      "bosses": [
        {"creature": 101016, "level": [8, 26]},
        {"creature": 101017, "level": [8, 26]},
        {"creature": 101018, "level": [8, 26]},
        {"creature": 101019, "level": [8, 26]},
        {"creature": 101020, "level": [8, 26]},
        {"creature": 101021, "level": [8, 26]}
      ],
      "allies": [
        {"creature": 101022, "level": [5, 20]},
        {"creature": 101023, "level": [5, 20]},
        {"creature": 101024, "level": [5, 20]},
        {"creature": 101025, "level": [4, 20]},
        {"creature": 101026, "level": [4, 20]},
        {"creature": 101027, "level": [4, 20]},
        {"creature": 101028, "level": [4, 20]},
        {"creature": 101029, "level": [5, 20]},
        {"creature": 101030, "level": [5, 20]}
      ],
      "wiki": {"en": "Fort Ranik", "de": "Fort Ranik (Mission)"}
    },
    "30": {
      "name": "Ruins of Surmia",
      "kind": "story",
      "outpost": 30,
      "order": 3,
      "label": "3",
      "leads_to": [32],
      "objectives": [
        [0, "Rescue the soldiers taken prisoner by the Charr.", false],
        [1, "Safeguard Prince Rurik's life.", false],
        [1, "Free all the Ascalon captives.", false],
        [1, "Get to the obelisks inside the ruined academy.", false],
        [
          1,
          "Cross the ravine and open the drawbridge for Rurik and Erol. (Only appears in the Mission Objectives after it is completed.)",
          false
        ],
        [
          1,
          "Follow the Flame Keepers [sic] at a distance to gain entrance to the Flame Temple. Extinguish the Flame Temple once inside.",
          true
        ]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100780, "level": [8, 23]},
        {"creature": 101177, "level": [8, 23]},
        {"creature": 101007, "level": [6, 23]},
        {"creature": 101290, "level": [8, 23]},
        {"creature": 100781, "level": [8, 23]},
        {"creature": 101009, "level": [6, 23]},
        {"creature": 101010, "level": [5, 23]},
        {"creature": 100782, "level": [7, 23]},
        {"creature": 101012, "level": [6, 23]},
        {"creature": 101013, "level": [8, 23]},
        {"creature": 101178, "level": [8, 23]},
        {"creature": 101014, "level": [6, 23]},
        {"creature": 101015, "level": [6, 23]},
        {"creature": 101291, "level": [7, 23]},
        {"creature": 101179, "level": [8, 23]},
        {"creature": 101292}
      ],
      "bosses": [
        {"creature": 101293, "level": [9, 29]},
        {"creature": 101294, "level": [9, 27]},
        {"creature": 101295, "level": [9, 29]},
        {"creature": 101296, "level": [7, 26]},
        {"creature": 101297, "level": [9, 27]},
        {"creature": 101298, "level": [9, 29]},
        {"creature": 101299, "level": [9, 27]},
        {"creature": 101300, "level": [9, 27]},
        {"creature": 101301, "level": [9, 27]}
      ],
      "allies": [
        {"creature": 100690, "level": [10, 20]},
        {"creature": 101302, "level": [7, 20]},
        {"creature": 101303, "level": [4, 20]},
        {"creature": 101304, "level": [7, 20]},
        {"creature": 101195, "level": [7, 20]}
      ],
      "wiki": {"en": "Ruins of Surmia", "de": "Ruinen von Surmia (Mission)"}
    },
    "32": {
      "name": "Nolani Academy",
      "kind": "story",
      "outpost": 32,
      "order": 4,
      "label": "4",
      "leads_to": [134],
      "objectives": [
        [0, "Return Prince Rurik south of the Wall to safety.", false],
        [1, "Sneak out and ambush the Charr forces besieging the academy.", false],
        [1, "Return to the Nolani Academy to rendezvous with the prince.", false],
        [1, "Defend Prince Rurik on the way back to the capital city of Rin.", false],
        [1, "Return the Tome of the Fallen.", true],
        [1, "Take Stormcaller to Horn Hill.", false],
        [1, "Save Rin.", false]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100780, "level": [8, 23]},
        {"creature": 101177, "level": [8, 23]},
        {"creature": 100781, "level": [8, 23]},
        {"creature": 101009, "level": [6, 23]},
        {"creature": 100782, "level": [7, 23]},
        {"creature": 101013, "level": [8, 23]},
        {"creature": 101178, "level": [8, 23]},
        {"creature": 101179, "level": [8, 23]},
        {"creature": 100787, "level": [8, 23]},
        {"creature": 100788, "level": [7, 23]},
        {"creature": 100789, "level": [8, 23]},
        {"creature": 100783, "level": [8, 23]},
        {"creature": 100784, "level": [7, 23]},
        {"creature": 101180, "level": [10, 24]},
        {"creature": 101181, "level": [7, 23]}
      ],
      "bosses": [
        {"creature": 101182, "level": [10, 27]},
        {"creature": 101183, "level": [9, 27]},
        {"creature": 101184, "level": [11, 27]},
        {"creature": 101185, "level": [9, 27]},
        {"creature": 101186, "level": [10, 27]},
        {"creature": 101187, "level": [10, 27]},
        {"creature": 101188, "level": [10, 27]},
        {"creature": 101189, "level": [10, 27]},
        {"creature": 100802, "level": [10, 27]},
        {"creature": 101190, "level": [10, 27]}
      ],
      "allies": [
        {"creature": 100690, "level": [10, 20]},
        {"creature": 101191, "level": [7, 20]},
        {"creature": 101024, "level": [7, 20]},
        {"creature": 101192, "level": [7, 20]},
        {"creature": 101193, "level": [5, 20]},
        {"creature": 101194, "level": [7, 20]},
        {"creature": 101195, "level": [7, 20]},
        {"creature": 101196, "level": [11, 20]}
      ],
      "wiki": {"en": "Nolani Academy", "de": "Nolani-Akademie (Mission)"}
    },
    "37": {
      "name": "Glint's Challenge",
      "kind": "challenge",
      "objectives": [
        [1, "Protect the Baby Dragon at all costs.", false],
        [2, "Survive all six waves of destroyers.", false],
        [2, "Destroy enemy waves quickly to earn points; the faster you kill the more points you earn.", false],
        [2, "Earn bonus points for each Dwarf defender who survives the assault.", false]
      ],
      "foes": [
        {"creature": 101031, "level": [28]},
        {"creature": 101032, "level": [28]},
        {"creature": 101033, "level": [28]},
        {"creature": 101034, "level": [28]},
        {"creature": 101035, "level": [28]},
        {"creature": 101036, "level": [20]},
        {"creature": 101037, "level": [28]},
        {"creature": 101038, "level": [28]}
      ],
      "bosses": [
        {"creature": 101039, "level": [28]},
        {"creature": 101040, "level": [28]},
        {"creature": 101041, "level": [28]},
        {"creature": 101042, "level": [28]}
      ],
      "allies": [
        {"creature": 101043, "level": [22]},
        {"creature": 100692, "level": [24]},
        {"creature": 100693, "level": [24]}
      ],
      "wiki": {"en": "Glint's Challenge", "de": "Glints Herausforderung"}
    },
    "38": {
      "name": "Augury Rock",
      "kind": "story",
      "outpost": 38,
      "order": 18,
      "label": "18",
      "leads_to": [120],
      "objectives": [
        [1, "Defeat your Doppelganger.", false],
        [1, "Defeat the Doppelganger in under 10 minutes. (In Normal mode.)", true],
        [1, "Defeat the Doppelganger in under 2 minutes. (In Hard mode.)", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "allies": [{"creature": 100940}, {"creature": 100941}, {"creature": 100942}],
      "wiki": {"en": "Augury Rock", "de": "Fels der Weissagung (Mission)"}
    },
    "72": {
      "name": "The Underworld",
      "kind": "pvp",
      "outpost": 72,
      "wiki": {"en": "The Underworld", "de": "Die Unterwelt (Turnier-Karte)"}
    },
    "73": {
      "name": "Riverside Province",
      "kind": "story",
      "outpost": 73,
      "order": 13,
      "label": "13",
      "leads_to": [19],
      "objectives": [
        [0, "Steal the Scepter of Orr.", false],
        [1, "Avoid detection on your way to the temple.", false],
        [1, "Talk to Dinas to get the scepter.", false],
        [1, "Escape to the bridge to the northeast.", false],
        [1, "Take out the Watchman at each tower, so Saidra can get the weapons through.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100983, "level": [20, 26]},
        {"creature": 100891, "level": [20, 26]},
        {"creature": 100944, "level": [18, 25]},
        {"creature": 100568, "level": [16, 25]},
        {"creature": 100984, "level": [20, 26]},
        {"creature": 100569, "level": [18, 25]},
        {"creature": 100892, "level": [20, 26]},
        {"creature": 100570, "level": [16, 25]},
        {"creature": 100571, "level": [16, 25]},
        {"creature": 100572, "level": [16, 25]},
        {"creature": 100985, "level": [20, 26]},
        {"creature": 100986, "level": [18, 25]},
        {"creature": 100987, "level": [16, 25]},
        {"creature": 100707, "level": [11, 24]},
        {"creature": 100988, "level": [18, 25]},
        {"creature": 100989, "level": [17, 25]},
        {"creature": 100708, "level": [13, 24]},
        {"creature": 100990, "level": [17, 25]},
        {"creature": 100991, "level": [18, 25]},
        {"creature": 100992, "level": [17, 25]},
        {"creature": 100711, "level": [13, 24]},
        {"creature": 100943, "level": [17, 25]}
      ],
      "bosses": [
        {"creature": 100993, "level": [20, 29]},
        {"creature": 100994, "level": [21, 29]},
        {"creature": 100995, "level": [20, 29]},
        {"creature": 100996, "level": [21, 29]},
        {"creature": 100997, "level": [21, 29]},
        {"creature": 100998, "level": [20, 29]},
        {"creature": 100999, "level": [20, 29]},
        {"creature": 101000, "level": [21, 29]},
        {"creature": 101001, "level": [20, 29]},
        {"creature": 101002, "level": [21, 29]},
        {"creature": 101003, "level": [20, 29]},
        {"creature": 101004, "level": [21, 29]}
      ],
      "allies": [
        {"creature": 100729, "level": [20, 20]},
        {"creature": 101005, "level": [10, 20]},
        {"creature": 101006, "level": [10, 20]}
      ],
      "wiki": {"en": "Riverside Province", "de": "Flussuferprovinz (Mission)"}
    },
    "75": {
      "name": "The Hall of Heroes",
      "kind": "pvp",
      "wiki": {"en": "The Hall of Heroes", "de": "Die Halle der Helden"}
    },
    "76": {"name": "Broken Tower", "kind": "pvp", "wiki": {"en": "Broken Tower", "de": "Zerfallener Turm"}},
    "78": {"name": "The Courtyard", "kind": "pvp", "wiki": {"en": "The Courtyard", "de": "Der Hof"}},
    "79": {"name": "Unholy Temples", "kind": "pvp", "wiki": {"en": "Unholy Temples", "de": "Unheilige Tempel"}},
    "80": {"name": "Burial Mounds", "kind": "pvp", "wiki": {"en": "Burial Mounds", "de": "Grabhügel"}},
    "83": {"name": "The Vault", "kind": "pvp", "wiki": {"en": "The Vault", "de": "Die Gruft"}},
    "86": {"name": "Sacred Temples", "kind": "pvp", "wiki": {"en": "Sacred Temples", "de": "Geheiligte Tempel"}},
    "116": {
      "name": "Dunes of Despair",
      "kind": "story",
      "outpost": 116,
      "order": 15,
      "label": "15",
      "leads_to": [38],
      "objectives": [
        [0, "Help the Ghostly Hero reclaim his throne.", false],
        [1, "Escort the Ghostly Hero to the Temple of Ascension.", false],
        [1, "Defeat the Enemy Ghostly Hero.", false],
        [1, "Hold out while the Ghostly Hero performs his ritual.", false],
        [1, "Gain more glory by defeating the three forgotten generals and their minions within their forts.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100818, "level": [20, 26]},
        {"creature": 100817, "level": [20, 26]},
        {"creature": 100816, "level": [20, 26]},
        {"creature": 100876, "level": [20, 26]},
        {"creature": 100877, "level": [20, 26]},
        {"creature": 100878, "level": [20, 26]},
        {"creature": 100820, "level": [20, 26]},
        {"creature": 100822, "level": [20, 26]},
        {"creature": 100879, "level": [20, 26]},
        {"creature": 100880, "level": [20, 26]},
        {"creature": 100881},
        {"creature": 100882, "level": [20, 26]}
      ],
      "bosses": [
        {"creature": 100883, "level": [24]},
        {"creature": 100884, "level": [24]},
        {"creature": 100885, "level": [24]},
        {"creature": 100886, "level": [24]},
        {"creature": 100872, "level": [24]},
        {"creature": 100887, "level": [24]},
        {"creature": 100888, "level": [24]}
      ],
      "allies": [{"creature": 100881}],
      "wiki": {"en": "Dunes of Despair", "de": "Dünen der Verzweiflung (Mission)"}
    },
    "117": {
      "name": "Thirsty River",
      "kind": "story",
      "outpost": 117,
      "order": 16,
      "label": "16",
      "leads_to": [38],
      "objectives": [
        [0, "Annihilate the opposing enemy teams.", false],
        [1, "Defeat Goss Aleessh's team.", false],
        [1, "Defeat Issah Sshay's team.", false],
        [1, "Defeat Hessper Sasso's team.", false],
        [1, "Defeat Josso Essher's team.", false],
        [1, "Defeat Lyssha Suss's team.[sic]", false],
        [1, "Defeat Kesskah Shissh's team.[sic]", false],
        [1, "Cleanse the area before King Khimaar's spirit is driven away.", true]
      ],
      "rewards": {
        "normal": {"mission": [1500, 150, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100863, "level": [22, 31]},
        {"creature": 100864, "level": [20, 26]},
        {"creature": 100865, "level": [20, 26]},
        {"creature": 100866, "level": [20, 26]},
        {"creature": 100819, "level": [20, 26]},
        {"creature": 100821, "level": [20, 26]},
        {"creature": 100820, "level": [20, 26]},
        {"creature": 100822, "level": [20, 26]},
        {"creature": 100867, "level": [20, 26]}
      ],
      "bosses": [
        {"creature": 100868, "level": [24, 30]},
        {"creature": 100869, "level": [24, 30]},
        {"creature": 100870, "level": [24, 30]},
        {"creature": 100871, "level": [24, 30]},
        {"creature": 100872, "level": [24, 30]},
        {"creature": 100873, "level": [24, 30]}
      ],
      "allies": [{"creature": 100874, "level": [20, 20]}, {"creature": 100875, "level": [24, 24]}],
      "wiki": {"en": "Thirsty River", "de": "Durstiger Fluss (Mission)"}
    },
    "118": {
      "name": "Elona Reach",
      "kind": "story",
      "outpost": 118,
      "order": 17,
      "label": "17",
      "leads_to": [38],
      "objectives": [
        [
          0,
          "Help the Ghostly Hero complete the ritual that will combine the three pieces of the Vision Crystal.",
          false
        ],
        [1, "Return Crystal Shard 1 to the Ghostly Hero.", false],
        [1, "Return Crystal Shard 2 to the Ghostly Hero.", false],
        [1, "Return Crystal Shard 3 to the Ghostly Hero.", false],
        [1, "Use the Crystal Shards to awaken the three Ritual Priests of Elona.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100926, "level": [20, 26]},
        {"creature": 100927, "level": [20, 26]},
        {"creature": 100822, "level": [20, 26]},
        {"creature": 100820, "level": [20, 26]},
        {"creature": 100821, "level": [20, 26]},
        {"creature": 100819, "level": [20, 26]},
        {"creature": 100928, "level": [22, 26]}
      ],
      "bosses": [
        {"creature": 100929, "level": [24, 28]},
        {"creature": 100930, "level": [24, 28]},
        {"creature": 100931, "level": [24, 28]},
        {"creature": 100932, "level": [24, 28]},
        {"creature": 100933, "level": [24, 28]},
        {"creature": 100934, "level": [24, 28]}
      ],
      "allies": [
        {"creature": 100935, "level": [24, 24]},
        {"creature": 100936, "level": [24, 24]},
        {"creature": 100937, "level": [24, 24]},
        {"creature": 100938, "level": [15, 20]},
        {"creature": 100939, "level": [5]}
      ],
      "wiki": {"en": "Elona Reach", "de": "Elonaspitze (Mission)"}
    },
    "120": {
      "name": "The Dragon's Lair",
      "kind": "story",
      "outpost": 120,
      "order": 19,
      "label": "19",
      "leads_to": [20],
      "objectives": [
        [0, "Gain audience with the prophet Glint.", false],
        [1, "Defeat the Facet of Light.", false],
        [1, "Defeat the Facet of Nature.", false],
        [1, "Defeat the Facet of Chaos.", false],
        [1, "Defeat the Facet of Darkness.", false],
        [1, "Defeat the Facet of Elements.", false],
        [1, "Defeat the Facet of Strength.", false],
        [1, "Defeat Glint.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100816, "level": [20, 26]},
        {"creature": 100817, "level": [20, 26]},
        {"creature": 100818, "level": [20, 26]},
        {"creature": 100819, "level": [20, 26]},
        {"creature": 100820, "level": [20, 26]},
        {"creature": 100821, "level": [20, 26]},
        {"creature": 100822, "level": [20, 26]},
        {"creature": 100823, "level": [20, 26]},
        {"creature": 100824, "level": [20, 26]},
        {"creature": 100825, "level": [22, 26]}
      ],
      "bosses": [
        {"creature": 100826, "level": [26, 30]},
        {"creature": 100827, "level": [26, 30]},
        {"creature": 100828, "level": [26, 30]},
        {"creature": 100829, "level": [26, 30]},
        {"creature": 100830, "level": [26, 30]},
        {"creature": 100831, "level": [26, 30]}
      ],
      "allies": [{"creature": 100832, "level": [20, 20]}, {"creature": 100833, "level": [31, 31]}],
      "wiki": {"en": "The Dragon's Lair", "de": "Die Drachenhöhle (Mission)"}
    },
    "122": {
      "name": "Ring of Fire",
      "kind": "story",
      "outpost": 122,
      "order": 23,
      "label": "23",
      "leads_to": [123],
      "objectives": [
        [0, "Establish a foothold on the Ring of Fire Island Chain", false],
        [1, "Gain access to the Citadel Guardhouse", false],
        [1, "Open the main gate to the Citadel Guardhouse", false],
        [1, "Clear the Guardhouse of Mursaat", false],
        [1, "Defeat the Eidolon", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100963, "level": [24, 26]},
        {"creature": 100964, "level": [24, 26]},
        {"creature": 100965, "level": [24, 26]},
        {"creature": 100498, "level": [24, 26]},
        {"creature": 100499, "level": [24, 26]},
        {"creature": 100500, "level": [24, 26]},
        {"creature": 100501, "level": [24, 26]},
        {"creature": 100502, "level": [24, 26]},
        {"creature": 100503, "level": [24, 26]},
        {"creature": 100504, "level": [24, 26]},
        {"creature": 100966, "level": [28, 30]},
        {"creature": 100967, "level": [24, 26]},
        {"creature": 100968, "level": [24, 26]},
        {"creature": 100969, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100970, "level": [28, 30]},
        {"creature": 100971, "level": [28, 30]},
        {"creature": 100972, "level": [28, 30]},
        {"creature": 100973, "level": [28, 30]},
        {"creature": 100974, "level": [28, 30]},
        {"creature": 100975, "level": [28, 30]},
        {"creature": 100976, "level": [28, 30]},
        {"creature": 100977, "level": [28, 30]},
        {"creature": 100978, "level": [28, 30]},
        {"creature": 100979, "level": [28, 30]},
        {"creature": 100980, "level": [28, 30]},
        {"creature": 100981, "level": [28, 30]},
        {"creature": 100518, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 100692, "level": [10, 20]},
        {"creature": 100982, "level": [24, 24]},
        {"creature": 100521, "level": [20, 20]},
        {"creature": 100522, "level": [30, 30]}
      ],
      "wiki": {"en": "Ring of Fire", "de": "Feuerring (Mission)"}
    },
    "123": {
      "name": "Abaddon's Mouth",
      "kind": "story",
      "outpost": 123,
      "order": 24,
      "label": "24",
      "requires": [122],
      "leads_to": [124],
      "objectives": [
        [0, "Open the Door of Komalie.", false],
        [1, "Disable the seals to power down the Onyx Gate.", false],
        [1, "Climb the path into Abaddon's Mouth.", false],
        [1, "Break the magical seals holding closed the Door of Komalie.", false],
        [1, "Escort the spirit of Leah Stone to its final resting place.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100494, "level": [24, 26]},
        {"creature": 100495, "level": [10, 20]},
        {"creature": 100496, "level": [24, 26]},
        {"creature": 100497, "level": [28, 30]},
        {"creature": 100498, "level": [24, 26]},
        {"creature": 100499, "level": [24, 26]},
        {"creature": 100500, "level": [24, 26]},
        {"creature": 100501, "level": [24, 26]},
        {"creature": 100502, "level": [24, 26]},
        {"creature": 100503, "level": [24, 26]},
        {"creature": 100504, "level": [24, 26]},
        {"creature": 100505, "level": [24, 26]},
        {"creature": 100506, "level": [24, 26]},
        {"creature": 100507, "level": [28, 30]},
        {"creature": 100508, "level": [28, 30]}
      ],
      "bosses": [
        {"creature": 100509, "level": [28, 30]},
        {"creature": 100510, "level": [28, 30]},
        {"creature": 100511, "level": [28, 30]},
        {"creature": 100512, "level": [28, 30]},
        {"creature": 100513, "level": [28, 30]},
        {"creature": 100514, "level": [28, 30]},
        {"creature": 100515, "level": [28, 30]},
        {"creature": 100516, "level": [28, 30]},
        {"creature": 100517, "level": [28, 30]},
        {"creature": 100518, "level": [28, 30]},
        {"creature": 100519, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 100520, "level": [15, 20]},
        {"creature": 100521, "level": [20, 20]},
        {"creature": 100522, "level": [30, 30]}
      ],
      "wiki": {"en": "Abaddon's Mouth", "de": "Abaddons Maul (Mission)"}
    },
    "124": {
      "name": "Hell's Precipice",
      "kind": "story",
      "outpost": 124,
      "order": 25,
      "label": "25",
      "requires": [123],
      "leads_to": [20],
      "objectives": [
        [0, "Stop the Lich from destroying the world.", false],
        [1, "Disable the Titan portals.", false],
        [1, "Defeat Undead Rurik.", false],
        [1, "Destroy the Lich.", false],
        [1, "Destroy all three Armageddon Lords.", true]
      ],
      "rewards": {
        "normal": {"mission": [2000, 200, 1], "bonus": [1500, 150, 1]},
        "hard": {"mission": [3000, 500, 1], "bonus": [2000, 500, 1]}
      },
      "foes": [
        {"creature": 100522, "level": [30, 30]},
        {"creature": 100507, "level": [28, 30]},
        {"creature": 101347, "level": [28, 30]},
        {"creature": 101405, "level": [28, 30]},
        {"creature": 101406, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 101407, "level": [28, 30]},
        {"creature": 101408, "level": [28, 30]},
        {"creature": 101409, "level": [28, 30]},
        {"creature": 101410, "level": [28, 30]},
        {"creature": 101341, "level": [30, 32]},
        {"creature": 101411, "level": [28, 30]},
        {"creature": 101412, "level": [28, 30]}
      ],
      "allies": [{"creature": 100522, "level": [30, 30]}],
      "wiki": {"en": "Hell's Precipice", "de": "Vorhof der Hölle (Mission)"}
    },
    "126": {"name": "Golden Gates", "kind": "pvp", "wiki": {"en": "Golden Gates", "de": "Goldene Tore"}},
    "127": {
      "name": "Scarred Earth",
      "kind": "pvp",
      "wiki": {"en": "Scarred Earth", "de": "Vernarbte Erde (Turnier-Karte)"}
    },
    "204": {
      "name": "Unwaking Waters",
      "kind": "story",
      "order": 10,
      "label": "10",
      "leads_to": [277],
      "objectives": [
        [0, "Defeat Kuunavang.", false],
        [1, "Weaken Kuunavang to destroy the barrier.", false],
        [1, "Continue to weaken Kuunavang until the next barrier is destroyed.", false],
        [1, "Continue weakening Kuunavang until the last barrier is destroyed.", false],
        [1, "Defeat Kuunavang.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 20 min", "expert": "15 - 20 min", "master": "< 15 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100759, "level": [24, 26]},
        {"creature": 100760, "level": [24, 26]},
        {"creature": 100761, "level": [24, 26]},
        {"creature": 100763, "level": [24, 26]},
        {"creature": 100762, "level": [24, 26]},
        {"creature": 100764, "level": [24, 26]},
        {"creature": 100765, "level": [24, 26]},
        {"creature": 100766, "level": [24, 26]},
        {"creature": 101074, "level": [30, 32]},
        {"creature": 101074, "level": [30, 32]}
      ],
      "bosses": [
        {"creature": 100768, "level": [28, 30]},
        {"creature": 101394, "level": [28, 30]},
        {"creature": 101395, "level": [28, 30]},
        {"creature": 101396, "level": [28, 30]},
        {"creature": 101397, "level": [28, 30]},
        {"creature": 101398, "level": [28, 30]},
        {"creature": 100769, "level": [28, 30]},
        {"creature": 100770, "level": [28, 30]}
      ],
      "wiki": {"en": "Unwaking Waters", "de": "Verschlafene Gewässer (Mission)"}
    },
    "215": {
      "name": "Vizunah Square",
      "kind": "story",
      "order": 3,
      "label": "3",
      "leads_to": [274],
      "objectives": [
        [0, "Locate the source of the plague in Kaineng City.", false],
        [0, "Find Togo in Vizunah Square. (If your party is from Vizunah Square (Foreign Quarter).)", false],
        [0, "Hold out until Mhenlo 's party arrives. (If your party is from Vizunah Square (Local Quarter).)", false],
        [0, "Travel with Mhenlo and Togo in search of the plague's source.", false],
        [0, "Defeat Shiro's Construct.", false],
        [1, "Mhenlo must survive.", false],
        [1, "Togo must survive.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 40 min", "expert": "35 - 40 min", "master": "< 35 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100759, "level": [20, 26]},
        {"creature": 100760, "level": [20, 26]},
        {"creature": 100761, "level": [20, 26]},
        {"creature": 100762, "level": [20, 26]},
        {"creature": 100763, "level": [20, 26]},
        {"creature": 100764, "level": [20, 26]},
        {"creature": 100765, "level": [20, 26]},
        {"creature": 100766, "level": [20, 26]},
        {"creature": 101399, "level": [20, 26]},
        {"creature": 101400, "level": [20, 26]},
        {"creature": 101401, "level": [20, 26]},
        {"creature": 101402, "level": [20, 26]},
        {"creature": 101258, "level": [28, 30]},
        {"creature": 101260, "level": [28, 30]},
        {"creature": 101261, "level": [28, 30]},
        {"creature": 101264, "level": [28, 30]}
      ],
      "bosses": [
        {"creature": 100318, "level": [24, 30]},
        {"creature": 101403, "level": [24, 30]},
        {"creature": 100436, "level": [24, 30]},
        {"creature": 101404, "level": [24, 30]},
        {"creature": 100322, "level": [24, 30]},
        {"creature": 100323, "level": [24, 30]},
        {"creature": 100372, "level": [24, 30]},
        {"creature": 100284, "level": [24, 30]}
      ],
      "allies": [{"creature": 100548, "level": [20, 20]}, {"creature": 101146, "level": [20, 20]}],
      "wiki": {"en": "Vizunah Square", "de": "Vizunahplatz (Mission)"}
    },
    "221": {
      "name": "Fort Aspenwood",
      "kind": "competitive",
      "leads_to": [294, 293],
      "wiki": {"en": "Fort Aspenwood", "de": "Fort Espenwald (Mission)"}
    },
    "223": {
      "name": "The Jade Quarry",
      "kind": "competitive",
      "leads_to": [296, 295],
      "objectives": [
        [0, "Control the jade quarries.", false],
        [
          1,
          "Be the first team to score 10 points, or score more points than your opponent before 15 minutes have elapsed.",
          false
        ],
        [1, "Claim quarries to begin collecting jade.", false],
        [1, "Protect your team's jade carriers.", false],
        [1, "[No one controls / Kurzicks control / Luxons control] the Green quarry.", false],
        [1, "[No one controls / Kurzicks control / Luxons control] the Purple quarry.", false],
        [1, "[No one controls / Kurzicks control / Luxons control] the Yellow quarry.", false]
      ],
      "wiki": {"en": "The Jade Quarry", "de": "Der Jadesteinbruch (Mission)"}
    },
    "230": {
      "name": "Amatz Basin",
      "kind": "challenge",
      "outpost": 230,
      "objectives": [[0, "Save as many Kurzick refugees as possible before time elapses.", false]],
      "wiki": {"en": "Amatz Basin", "de": "Amatzbecken (Mission)"}
    },
    "234": {
      "name": "The Aurios Mines",
      "kind": "challenge",
      "outpost": 234,
      "objectives": [
        [0, "Beat back the nightmare horde.", false],
        [1, "Kill the enemy guards at the quarry sites.", false]
      ],
      "allies": [{"creature": 100815, "level": [20]}],
      "wiki": {"en": "The Aurios Mines", "de": "Die Auriosminen (Mission)"}
    },
    "253": {"name": "Dwayna Vs Grenth", "kind": "pvp", "wiki": {"en": "Dwayna Vs Grenth", "de": "Dwayna gg. Grenth"}},
    "257": {
      "name": "Minister Cho's Estate",
      "kind": "story",
      "outpost": 214,
      "order": 1,
      "label": "1",
      "leads_to": [251],
      "objectives": [
        [0, "Find Minister Cho.", false],
        [1, "Master Togo must survive to reach the Minister's Estate.", false],
        [1, "Yijo Tahn must survive to reach the Minister's Estate.", false],
        [1, "ADDED. [sic] Defeat the afflicted minister.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 25 min", "expert": "20 - 25 min", "master": "< 20 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 101134, "level": [8, 23]},
        {"creature": 101135, "level": [8, 23]},
        {"creature": 101136, "level": [8, 23]},
        {"creature": 101137, "level": [8, 23]},
        {"creature": 101138, "level": [8, 23]},
        {"creature": 101139, "level": [8, 23]},
        {"creature": 101140, "level": [5, 23]},
        {"creature": 101141, "level": [5, 23]},
        {"creature": 101141, "level": [5, 23]},
        {"creature": 101141, "level": [5, 23]},
        {"creature": 101141, "level": [5, 23]},
        {"creature": 101142, "level": [5, 23]}
      ],
      "bosses": [{"creature": 101143, "level": [9, 27]}, {"creature": 101144, "level": [11, 27]}],
      "allies": [
        {"creature": 101145, "level": [10, 20]},
        {"creature": 101146, "level": [20]},
        {"creature": 101147, "level": [10, 20]},
        {"creature": 101148, "level": [2]}
      ],
      "wiki": {"en": "Minister Cho's Estate", "de": "Minister Chos Anwesen (Mission)"}
    },
    "258": {
      "name": "Zen Daijun",
      "kind": "story",
      "outpost": 213,
      "order": 2,
      "label": "2",
      "leads_to": [250],
      "objectives": [
        [0, "Find the source of the plague.", false],
        [1, "Togo must survive.", false],
        [1, "Kill Afflicted Yijo.", false],
        [1, "Kill Afflicted Farmer Xeng Jo.", false],
        [1, "Kill Afflicted Kana.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 25 min", "expert": "20-25 min", "master": "< 20 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 101424, "level": [11, 24]},
        {"creature": 101425, "level": [13, 24]},
        {"creature": 100759, "level": [14, 24]},
        {"creature": 100760, "level": [14, 24]},
        {"creature": 100761, "level": [14, 24]},
        {"creature": 100762, "level": [14, 24]},
        {"creature": 100763, "level": [10, 24]},
        {"creature": 100764, "level": [10, 24]},
        {"creature": 100765, "level": [14, 24]},
        {"creature": 100766, "level": [12, 24]},
        {"creature": 101426, "level": [11, 24]},
        {"creature": 101427, "level": [11, 24]}
      ],
      "bosses": [
        {"creature": 101428, "level": [16, 28]},
        {"creature": 101429, "level": [16, 28]},
        {"creature": 101430, "level": [18, 28]},
        {"creature": 101431, "level": [18, 28]}
      ],
      "allies": [
        {"creature": 101432, "level": [13, 20]},
        {"creature": 101433, "level": [15, 20]},
        {"creature": 101146, "level": [20, 20]}
      ],
      "wiki": {"en": "Zen Daijun", "de": "Zen Daijun (Mission)"}
    },
    "260": {
      "name": "Nahpui Quarter",
      "kind": "story",
      "outpost": 216,
      "order": 4,
      "label": "4",
      "leads_to": [51],
      "objectives": [
        [0, "Defeat the celestial creatures to become Closer to the Stars.", false],
        [1, "Defeat Kaijun Don, the Celestial Kirin.", false],
        [1, "Defeat Kuonghsang, the Celestial Turtle Dragon.", false],
        [1, "Defeat Hai Jii, the Celestial Phoenix.", false],
        [1, "Defeat Tahmu, the Celestial Dragon.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 45 min", "expert": "40 - 45 min", "master": "< 40 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 101165, "level": [20, 26]},
        {"creature": 101166, "level": [20, 26]},
        {"creature": 101167, "level": [20, 26]},
        {"creature": 101168, "level": [20, 26]},
        {"creature": 101169, "level": [20, 26]},
        {"creature": 101170, "level": [20, 26]},
        {"creature": 101171, "level": [20, 26]}
      ],
      "bosses": [
        {"creature": 101172, "level": [22, 29]},
        {"creature": 101173, "level": [22, 29]},
        {"creature": 101174, "level": [22, 29]},
        {"creature": 101175, "level": [22, 29]}
      ],
      "allies": [{"creature": 101176, "level": [10, 20]}],
      "wiki": {"en": "Nahpui Quarter", "de": "Nahpuiviertel (Mission)"}
    },
    "261": {
      "name": "Tahnnakai Temple",
      "kind": "story",
      "outpost": 217,
      "order": 5,
      "label": "5",
      "leads_to": [284],
      "objectives": [
        [0, "Stop the Spirit Binder from consuming Vizu.", false],
        [1, "You have freed [0...8] soul[s] out of 8.", false],
        [1, "Togo must survive.", false],
        [1, "Mhenlo must survive.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 35 min", "expert": "30 - 35 min", "master": "< 30 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100759, "level": [20, 26]},
        {"creature": 100760, "level": [20, 26]},
        {"creature": 100761, "level": [20, 26]},
        {"creature": 100764, "level": [20, 26]},
        {"creature": 100762, "level": [20, 26]},
        {"creature": 100763, "level": [20, 26]},
        {"creature": 100765, "level": [20, 26]},
        {"creature": 100766, "level": [20, 26]},
        {"creature": 101328, "level": [20, 26]}
      ],
      "bosses": [
        {"creature": 101329, "level": [24, 30]},
        {"creature": 101330, "level": [24, 30]},
        {"creature": 101331, "level": [24, 30]},
        {"creature": 101332, "level": [24, 30]},
        {"creature": 101333, "level": [24, 30]},
        {"creature": 101334, "level": [24, 30]},
        {"creature": 101335, "level": [24, 30]},
        {"creature": 101336, "level": [24, 30]}
      ],
      "allies": [
        {"creature": 101146, "level": [20, 20]},
        {"creature": 101266},
        {"creature": 100548, "level": [20, 20]}
      ],
      "wiki": {"en": "Tahnnakai Temple", "de": "Tahnnakai-Tempel (Mission)"}
    },
    "262": {
      "name": "Arborstone",
      "kind": "story",
      "outpost": 218,
      "order": 6,
      "label": "6",
      "leads_to": [272],
      "objectives": [
        [0, "Retrieve the sacred Urn of Saint Viktor and deliver it to Mhenlo.", false],
        [1, "Escort Danika to the door of the cathedral so she can open it.", false],
        [
          1,
          "Clear the cathedral of the guardians binding the Urn of Saint Viktor. You have [5...0] group[s] of guardians remaining.",
          false
        ],
        [1, "Collect the Urn of Saint Viktor", false],
        [1, "Make your way out of the cathedral! Defeat the guardian Stone Souls.", false],
        [1, "Protect Danika so that she can open the door.", false],
        [1, "Mhenlo must survive.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 35 min", "expert": "30 - 35 min", "master": "< 30 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100548, "level": [20, 20]},
        {"creature": 100549, "level": [20, 20]},
        {"creature": 100550, "level": [23, 26]},
        {"creature": 100551, "level": [28, 30]},
        {"creature": 100540, "level": [24, 26]},
        {"creature": 100541, "level": [24, 26]},
        {"creature": 100542, "level": [24, 26]},
        {"creature": 100543, "level": [24, 26]},
        {"creature": 100552, "level": [23, 26]},
        {"creature": 100553, "level": [24, 26]},
        {"creature": 100554, "level": [23, 26]},
        {"creature": 100555, "level": [24, 26]},
        {"creature": 100556, "level": [22, 26]},
        {"creature": 100557, "level": [23, 26]},
        {"creature": 100558, "level": [18, 26]},
        {"creature": 100559, "level": [21, 26]},
        {"creature": 100528, "level": [24, 26]},
        {"creature": 100560, "level": [21, 26]},
        {"creature": 100529, "level": [24, 26]},
        {"creature": 100561, "level": [20, 26]},
        {"creature": 100530, "level": [24, 26]},
        {"creature": 100562, "level": [18, 26]},
        {"creature": 100563, "level": [20, 26]},
        {"creature": 100531, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100564, "level": [28, 30]},
        {"creature": 100010, "level": [28, 30]},
        {"creature": 100565, "level": [28, 30]},
        {"creature": 100245, "level": [28, 30]},
        {"creature": 100566, "level": [28, 30]}
      ],
      "wiki": {"en": "Arborstone", "de": "Arborstein (Mission)"}
    },
    "263": {
      "name": "Boreas Seabed",
      "kind": "story",
      "outpost": 219,
      "order": 7,
      "label": "7",
      "leads_to": [273],
      "objectives": [
        [0, "Triumph in the Convocation and earn the right to use the Spear of Archemorus against Shiro.", false],
        [1, "Defeat the three Champions and their Seaguard.", false],
        [1, "Retrieve the Spear of Archemorus.", false],
        [1, "Defeat Zhu Hanuku using the Spear of Archemorus.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 25 min", "expert": "20 - 25 min", "master": "< 20 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100641, "level": [22, 26]},
        {"creature": 100642, "level": [22, 26]},
        {"creature": 100643, "level": [24, 26]},
        {"creature": 100644, "level": [24, 26]},
        {"creature": 100645, "level": [20, 26]},
        {"creature": 100646, "level": [20, 26]},
        {"creature": 100647, "level": [20, 26]},
        {"creature": 100648, "level": [20, 26]},
        {"creature": 100649, "level": [20, 26]},
        {"creature": 100650, "level": [20, 26]},
        {"creature": 100651, "level": [23, 26]},
        {"creature": 100652, "level": [24, 26]},
        {"creature": 100653, "level": [23, 26]},
        {"creature": 100654, "level": [28, 30]},
        {"creature": 100655, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100656, "level": [24, 30]},
        {"creature": 100657, "level": [24, 30]},
        {"creature": 100658, "level": [24, 30]},
        {"creature": 100659, "level": [24, 30]},
        {"creature": 100660, "level": [30, 32]},
        {"creature": 100661, "level": [24, 30]},
        {"creature": 100662, "level": [24, 30]}
      ],
      "wiki": {"en": "Boreas Seabed", "de": "Boreas-Meeresgrund (Mission)"}
    },
    "264": {
      "name": "Sunjiang District",
      "kind": "story",
      "outpost": 220,
      "order": 8,
      "label": "8",
      "leads_to": [283],
      "objectives": [
        [0, "Prevent Shiro from summoning his spirit army!", false],
        [1, "Locate Shiro in the sewers.", false],
        [
          1,
          "[sic] Destroy the spirit rifts to remove Shiro's protective shield. [4...0] spirit rift[s] remaining.",
          false
        ],
        [1, "[sic] Defeat Shiro's Constructs.", false],
        [1, "Togo must survive.", false],
        [1, "Mhenlo must survive.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 30 min", "expert": "25 - 30 min", "master": "< 25 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100548, "level": [20, 20]},
        {"creature": 101146, "level": [20, 20]},
        {"creature": 100759, "level": [24, 26]},
        {"creature": 100760, "level": [24, 26]},
        {"creature": 100761, "level": [24, 26]},
        {"creature": 100762, "level": [24, 26]},
        {"creature": 100763, "level": [24, 26]},
        {"creature": 100764, "level": [24, 26]},
        {"creature": 100765, "level": [24, 26]},
        {"creature": 100766, "level": [24, 26]},
        {"creature": 101257, "level": [28, 30]},
        {"creature": 101258, "level": [28, 30]},
        {"creature": 101260, "level": [28, 30]},
        {"creature": 101263, "level": [28, 30]},
        {"creature": 101327, "level": [24, 30]}
      ],
      "bosses": [
        {"creature": 100362, "level": [24, 30]},
        {"creature": 100365, "level": [24, 30]},
        {"creature": 100367, "level": [24, 30]},
        {"creature": 100368, "level": [24, 30]},
        {"creature": 100369, "level": [24, 30]},
        {"creature": 100370, "level": [24, 30]},
        {"creature": 100333, "level": [24, 30]},
        {"creature": 100236, "level": [24, 30]}
      ],
      "wiki": {"en": "Sunjiang District", "de": "Sunjiang-Bezirk (Mission)"}
    },
    "266": {
      "name": "Urgoz's Warren",
      "kind": "elite",
      "outpost": 266,
      "objectives": [[1, "Kill Urgoz.", false]],
      "foes": [
        {"creature": 101371, "level": [28, 30]},
        {"creature": 101372, "level": [28, 30]},
        {"creature": 101373, "level": [28, 30]},
        {"creature": 101374, "level": [28, 30]},
        {"creature": 101375, "level": [28, 30]},
        {"creature": 101376, "level": [28, 30]},
        {"creature": 101377, "level": [28, 30]},
        {"creature": 101378, "level": [28]},
        {"creature": 101379, "level": [10, 24]},
        {"creature": 101380, "level": [30, 32]},
        {"creature": 101381, "level": [28, 30]},
        {"creature": 101382, "level": [28, 30]},
        {"creature": 101383, "level": [30, 32]},
        {"creature": 101384, "level": [24, 26]},
        {"creature": 101385, "level": [28, 30]},
        {"creature": 101386, "level": [28, 30]},
        {"creature": 101387, "level": [28, 30]},
        {"creature": 100542, "level": [24, 26]},
        {"creature": 100543, "level": [24, 26]},
        {"creature": 101388, "level": [28, 30]},
        {"creature": 101389, "level": [10, 24]},
        {"creature": 101390, "level": [10, 24]},
        {"creature": 101391, "level": [30, 32]},
        {"creature": 101392, "level": [28, 30]}
      ],
      "allies": [{"creature": 101393, "level": [10, 20]}],
      "wiki": {"en": "Urgoz's Warren", "de": "Urgoz' Bau (Mission)"}
    },
    "267": {
      "name": "The Eternal Grove",
      "kind": "story",
      "outpost": 222,
      "order": 9,
      "label": "9a",
      "leads_to": [130],
      "objectives": [
        [
          0,
          "Protect the Forever Trees by keeping the Tree Singers alive. You have [12...0] of 12 Tree Singers remaining.",
          false
        ],
        [1, "Defeat the Afflicted forces. You have [12...0] group[s] remaining.", false]
      ],
      "rewards": {
        "by": "treesingers alive",
        "tiers": {"standard": "1-5", "expert": "6-11", "master": "12"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100759, "level": [20, 26]},
        {"creature": 100760, "level": [20, 26]},
        {"creature": 100761, "level": [20, 26]},
        {"creature": 100762, "level": [20, 26]},
        {"creature": 100763, "level": [20, 26]},
        {"creature": 100764, "level": [20, 26]},
        {"creature": 100765, "level": [20, 26]},
        {"creature": 100766, "level": [20, 26]},
        {"creature": 100645, "level": [20, 26]},
        {"creature": 100646, "level": [20, 26]},
        {"creature": 100649, "level": [20, 26]},
        {"creature": 100767, "level": [24, 24]}
      ],
      "bosses": [
        {"creature": 100768, "level": [28, 30]},
        {"creature": 100769, "level": [28, 30]},
        {"creature": 100770, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 100771, "level": [20, 20]},
        {"creature": 100772, "level": [20, 20]},
        {"creature": 100773, "level": [20, 20]},
        {"creature": 100774, "level": [20, 20]},
        {"creature": 100775, "level": [20, 20]},
        {"creature": 100548, "level": [20, 20]},
        {"creature": 100549, "level": [20, 20]},
        {"creature": 100776, "level": [28, 28]},
        {"creature": 100777, "level": [28, 28]},
        {"creature": 100778, "level": [28, 28]},
        {"creature": 100646, "level": [20, 20]}
      ],
      "wiki": {"en": "The Eternal Grove", "de": "Der Ewige Hain (Mission)"}
    },
    "268": {
      "name": "Gyala Hatchery",
      "kind": "story",
      "outpost": 224,
      "order": 9,
      "label": "9b",
      "leads_to": [279],
      "objectives": [
        [0, "Escort the young turtles to the Leviathan Pits.", false],
        [1, "At least 1 young turtle must survive. You have [5...0] remaining.", false],
        [1, "Destroy the attacking plague force.", false]
      ],
      "rewards": {
        "extra": ["Turtles alive", "Luxon points"],
        "normal": {
          "standard": [1000, 100, 1, 1, 1000],
          "expert": [1500, 150, 1, 2, 1000],
          "master": [2000, 200, 1, 5, 1000]
        },
        "hard": {
          "standard": [1000, 200, 1, 1, 1000],
          "expert": [2000, 300, 1, 2, 1000],
          "master": [3000, 500, 1, 5, 1000]
        }
      },
      "foes": [
        {"creature": 100759, "level": [24, 26]},
        {"creature": 100760, "level": [24, 26]},
        {"creature": 100761, "level": [24, 26]},
        {"creature": 100762, "level": [24, 26]},
        {"creature": 100763, "level": [24, 26]},
        {"creature": 100764, "level": [24, 26]},
        {"creature": 100765, "level": [24, 26]},
        {"creature": 100766, "level": [24, 26]},
        {"creature": 101046, "level": [20, 26]},
        {"creature": 101047, "level": [20, 26]},
        {"creature": 101048, "level": [20, 26]},
        {"creature": 101049, "level": [20, 26]},
        {"creature": 101050, "level": [20, 26]},
        {"creature": 101051, "level": [20, 26]},
        {"creature": 101052, "level": [20, 26]},
        {"creature": 101053},
        {"creature": 101053, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 101054, "level": [10, 20]},
        {"creature": 101055, "level": [20, 20]},
        {"creature": 100662, "level": [20, 20]},
        {"creature": 101056, "level": [20, 20]},
        {"creature": 101057, "level": [15, 20]},
        {"creature": 100767, "level": [24, 24]}
      ],
      "wiki": {"en": "Gyala Hatchery", "de": "Gyala-Brutstätte (Mission)"}
    },
    "270": {
      "name": "Raisu Palace",
      "kind": "story",
      "outpost": 225,
      "order": 11,
      "label": "11",
      "leads_to": [226],
      "objectives": [
        [0, "Get to the emperor before Shiro kills him!", false],
        [1, "<Character name>, you must choose two allies from among these heroes to accompany the party.", false],
        [1, "Master Togo must survive.", false],
        [1, "Mhenlo must survive.", false]
      ],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 28 min", "expert": "26 - 28 min", "master": "< 26 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 101063},
        {"creature": 101257, "level": [28, 30]},
        {"creature": 101258, "level": [28, 30]},
        {"creature": 101259, "level": [28, 30]},
        {"creature": 101260, "level": [28, 30]},
        {"creature": 101261, "level": [28, 30]},
        {"creature": 101262, "level": [28, 30]},
        {"creature": 101263, "level": [28, 30]},
        {"creature": 101264, "level": [28, 30]}
      ],
      "bosses": [
        {"creature": 100286, "level": [28, 30]},
        {"creature": 100287, "level": [28, 30]},
        {"creature": 100288, "level": [28, 30]},
        {"creature": 101265, "level": [24, 30]},
        {"creature": 100289, "level": [28, 30]},
        {"creature": 100290, "level": [28, 30]},
        {"creature": 100291, "level": [28, 30]},
        {"creature": 100292, "level": [28, 30]},
        {"creature": 100293, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 101074, "level": [30, 30]},
        {"creature": 101266},
        {"creature": 100548, "level": [20, 20]},
        {"creature": 101267, "level": [20, 20]},
        {"creature": 100549, "level": [20, 20]},
        {"creature": 100662, "level": [20, 20]},
        {"creature": 101268, "level": [20, 20]},
        {"creature": 101269, "level": [20, 20]},
        {"creature": 101146, "level": [20, 20]},
        {"creature": 101270},
        {"creature": 101271, "level": [20, 20]}
      ],
      "wiki": {"en": "Raisu Palace", "de": "Raisu-Palast (Mission)"}
    },
    "271": {
      "name": "Imperial Sanctum",
      "kind": "story",
      "outpost": 226,
      "order": 12,
      "label": "12",
      "leads_to": [351],
      "objectives": [[1, "Destroy Shiro [sic]", false]],
      "rewards": {
        "by": "time",
        "tiers": {"standard": "> 6 min", "expert": "3 - 6 min", "master": "≤ 3 min"},
        "normal": {"standard": [1000, 100, 1], "expert": [1500, 150, 1], "master": [2000, 200, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 101062, "level": [24]},
        {"creature": 101063},
        {"creature": 101064, "level": [20]},
        {"creature": 101065, "level": [20]},
        {"creature": 101066, "level": [20]},
        {"creature": 101067, "level": [20]},
        {"creature": 101068, "level": [20]},
        {"creature": 101069, "level": [20]},
        {"creature": 101070, "level": [20]},
        {"creature": 101071, "level": [20]},
        {"creature": 101072, "level": [31, 33]}
      ],
      "allies": [
        {"creature": 101073},
        {"creature": 101074, "level": [30]},
        {"creature": 100548, "level": [20]},
        {"creature": 101075, "level": [10]}
      ],
      "wiki": {"en": "Imperial Sanctum", "de": "Kaiserliches Refugium (Mission)"}
    },
    "272": {
      "name": "Altrumm Ruins",
      "kind": "challenge",
      "outpost": 272,
      "objectives": [
        [0, "Collect as much amber as possible before the timer runs out. Kill a boss to gain a time bonus.", false]
      ],
      "foes": [
        {"creature": 100528, "level": [24, 26]},
        {"creature": 100529, "level": [24, 26]},
        {"creature": 100530, "level": [24, 26]},
        {"creature": 100531, "level": [24, 26]},
        {"creature": 100532, "level": [22, 26]},
        {"creature": 100533, "level": [21, 26]},
        {"creature": 100534, "level": [22, 26]},
        {"creature": 100535, "level": [23, 26]},
        {"creature": 100536, "level": [24, 26]},
        {"creature": 100537, "level": [24, 26]},
        {"creature": 100538, "level": [23, 26]},
        {"creature": 100539, "level": [24, 26]},
        {"creature": 100540, "level": [24, 26]},
        {"creature": 100541, "level": [24, 26]},
        {"creature": 100542, "level": [24, 26]},
        {"creature": 100543, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100544, "level": [28, 30]},
        {"creature": 100545, "level": [28, 30]},
        {"creature": 100546, "level": [28, 30]},
        {"creature": 100547, "level": [28, 30]}
      ],
      "wiki": {"en": "Altrumm Ruins", "de": "Altrumm-Ruinen (Mission)"}
    },
    "273": {
      "name": "Zos Shivros Channel",
      "kind": "challenge",
      "outpost": 273,
      "objectives": [
        [0, "Keep Battle Priest Calibos alive for as long as possible.", false],
        [1, "Destroy Luxon Adepts to receive a morale boost and score bonus.", false]
      ],
      "foes": [
        {"creature": 100551, "level": [28]},
        {"creature": 101434, "level": [24, 26]},
        {"creature": 100532, "level": [22, 26]},
        {"creature": 100533, "level": [21, 26]},
        {"creature": 100535, "level": [23, 26]},
        {"creature": 100643, "level": [24, 26]},
        {"creature": 100644, "level": [24, 26]},
        {"creature": 101435, "level": [24, 26]},
        {"creature": 101436, "level": [24, 26]},
        {"creature": 101437, "level": [28, 30]},
        {"creature": 100651, "level": [23, 26]},
        {"creature": 100653, "level": [24, 26]},
        {"creature": 100652, "level": [24, 26]},
        {"creature": 100767, "level": [24, 26]}
      ],
      "allies": [{"creature": 101438, "level": [24]}],
      "wiki": {"en": "Zos Shivros Channel", "de": "Zos Shivros-Kanal (Mission)"}
    },
    "274": {
      "name": "Dragon's Throat",
      "kind": "challenge",
      "outpost": 274,
      "objectives": [
        [
          0,
          "Kill as many of the afflicted as possible before the timer runs out. Kill an afflicted boss to gain a time bonus.",
          false
        ]
      ],
      "bosses": [
        {"creature": 100855, "level": [24, 30]},
        {"creature": 100856, "level": [24, 30]},
        {"creature": 100857, "level": [24, 30]},
        {"creature": 100858, "level": [24, 30]},
        {"creature": 100859, "level": [24, 30]},
        {"creature": 100860, "level": [24, 30]},
        {"creature": 100861, "level": [24, 30]},
        {"creature": 100862, "level": [24, 30]}
      ],
      "wiki": {"en": "Dragon's Throat", "de": "Drachenhals (Mission)"}
    },
    "307": {
      "name": "The Deep",
      "kind": "elite",
      "outpost": 307,
      "objectives": [[1, "Find and destroy the source of the Luxon outcasts and Oni", false]],
      "wiki": {"en": "The Deep", "de": "Die Tiefe (Mission)"}
    },
    "368": {
      "name": "Dragon Arena",
      "kind": "pvp",
      "outpost": 368,
      "wiki": {"en": "Dragon Arena", "de": "Drachenarena (Mission)"}
    },
    "427": {
      "name": "Moddok Crevice",
      "kind": "story",
      "outpost": 427,
      "order": 8,
      "label": "8",
      "leads_to": [378],
      "hero": [7],
      "objectives": [
        [0, "Travel through the Bahdok Caverns to escape to Vabbi.", false],
        [1, "Defeat Bayel and the Hunger to open the passage to Vabbi.", false],
        [1, "Follow Dunkoro's remaining suggestions.", true],
        [1, "You have followed [0...4] of Dunkoro's 4 remaining suggestions.", false]
      ],
      "rewards": {
        "extra": ["Instructions followed"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 3], "master": [2000, 200, 1, 4]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 3], "master": [3000, 500, 1, 4]}
      },
      "foes": [
        {"creature": 101149, "level": [22]},
        {"creature": 101150, "level": [22]},
        {"creature": 101151, "level": [22]},
        {"creature": 101152, "level": [20]},
        {"creature": 101153, "level": [20]},
        {"creature": 101154, "level": [20]},
        {"creature": 101155, "level": [20]},
        {"creature": 101156, "level": [28]},
        {"creature": 101157, "level": [16]},
        {"creature": 101158, "level": [17]},
        {"creature": 101159, "level": [15]},
        {"creature": 100735, "level": [22]},
        {"creature": 100739, "level": [21]},
        {"creature": 100740, "level": [23]},
        {"creature": 100734, "level": [21]},
        {"creature": 101160, "level": [22]},
        {"creature": 101161, "level": [28]}
      ],
      "bosses": [
        {"creature": 101162, "level": [24]},
        {"creature": 101163, "level": [24]},
        {"creature": 101164, "level": [24]}
      ],
      "wiki": {"en": "Moddok Crevice", "de": "Moddok-Spalte (Mission)"}
    },
    "453": {
      "name": "Venta Cemetery",
      "kind": "story",
      "outpost": 421,
      "order": 5,
      "label": "5",
      "leads_to": [449],
      "hero": [6],
      "objectives": [
        [0, "Lead the Sunspear Evacuees to Dajkah Inlet without being discovered by the garrison.", false],
        [1, "Kill all the guards at the garrison posts before they sound an alert and blow your cover.", false],
        [1, "Disarm the sentry traps before they discharge.", false],
        [1, "Start negotiations with Margrid the Sly.", false],
        [1, "Neutralize all guard posts.", true],
        [1, "[0...12] of 12 guard posts neutralized!", false]
      ],
      "rewards": {
        "extra": ["Sentries neutralised"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 8], "master": [2000, 200, 1, 12]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 8], "master": [3000, 500, 1, 12]}
      },
      "foes": [
        {"creature": 101076, "level": [20, 26]},
        {"creature": 101079, "level": [20, 26]},
        {"creature": 101097, "level": [20, 26]},
        {"creature": 101080, "level": [20, 26]},
        {"creature": 101084, "level": [20, 26]},
        {"creature": 101083, "level": [20, 26]},
        {"creature": 101081, "level": [20, 26]},
        {"creature": 101087, "level": [20, 26]},
        {"creature": 101368, "level": [20, 26]},
        {"creature": 101085, "level": [20, 26]}
      ],
      "allies": [
        {"creature": 101369, "level": [18, 20]},
        {"creature": 101370, "level": [20, 20]},
        {"creature": 101107, "level": [20, 20]}
      ],
      "wiki": {"en": "Venta Cemetery", "de": "Totenanger von Venta (Mission)"}
    },
    "458": {
      "name": "Kodonur Crossroads",
      "kind": "story",
      "outpost": 424,
      "order": 6,
      "label": "6",
      "leads_to": [387],
      "hero": [10],
      "objectives": [
        [0, "Rescue Mirza Veldrunner from the Kournans.", false],
        [1, "Defeat Kournan Taskmasters to get cell keys.", false],
        [1, "Your party has [0...6] cell key[s]. Use a cell key to open a cell.", false],
        [
          1,
          "Free additional Veldrunner Centaurs to build a resistance force. You have [6...0] more cell[s] to unlock.",
          false
        ],
        [1, "Defeat Overseer Boktek and Overseer Haubeh.", false],
        [1, "Defeat the cruel Taskmasters.", true],
        [1, "You have [3...0] of 3 cruel Taskmasters remaining.", false]
      ],
      "rewards": {
        "extra": ["Cruel taskmasters killed"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 2], "master": [2000, 200, 1, 3]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 2], "master": [3000, 500, 1, 3]}
      },
      "foes": [
        {"creature": 101076, "level": [20, 26]},
        {"creature": 101077, "level": [22, 26]},
        {"creature": 101078, "level": [24, 30]},
        {"creature": 101079, "level": [20, 26]},
        {"creature": 101080, "level": [20, 26]},
        {"creature": 101081, "level": [20, 26]},
        {"creature": 101082, "level": [22, 26]},
        {"creature": 101083, "level": [20, 26]},
        {"creature": 101084, "level": [20, 26]},
        {"creature": 101085, "level": [20, 26]},
        {"creature": 101086, "level": [22, 26]},
        {"creature": 101087, "level": [20, 26]},
        {"creature": 101088, "level": [22, 26]}
      ],
      "bosses": [
        {"creature": 101089, "level": [24, 24]},
        {"creature": 101090, "level": [24, 30]},
        {"creature": 101091, "level": [24, 30]},
        {"creature": 101092, "level": [24, 30]},
        {"creature": 101093, "level": [24, 30]},
        {"creature": 101094, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 101089, "level": [20]},
        {"creature": 101095, "level": [20]},
        {"creature": 101096, "level": [20]}
      ],
      "wiki": {"en": "Kodonur Crossroads", "de": "Kodonur-Kreuzung (Mission)"}
    },
    "459": {
      "name": "Rilohn Refuge",
      "kind": "story",
      "outpost": 425,
      "order": 7,
      "label": "7b",
      "leads_to": [427],
      "hero": [4],
      "objectives": [
        [0, "Destroy the Drought.", false],
        [1, "Protect Dehjah until she opens the entrance to the Mahnkelon Waterworks.", false],
        [1, "Make your way to the central reservoir.", false],
        [1, "Weaken the Drought by shutting off the water pumps. [5...0] of 5 remain active.", false],
        [1, "Defeat the Drought without shutting down water pumps.", true]
      ],
      "rewards": {
        "extra": ["Water pumps disabled"],
        "normal": {"standard": [1000, 100, 1, 2], "expert": [1500, 150, 1, 1], "master": [2000, 200, 1, 0]},
        "hard": {"standard": [1000, 200, 1, 2], "expert": [2000, 300, 1, 1], "master": [3000, 500, 1, 0]}
      },
      "foes": [
        {"creature": 101282, "level": [20]},
        {"creature": 101283, "level": [24]},
        {"creature": 101154, "level": [20]},
        {"creature": 101153, "level": [20]},
        {"creature": 101152, "level": [20]},
        {"creature": 101076, "level": [20]},
        {"creature": 101079, "level": [20]},
        {"creature": 101080, "level": [20]},
        {"creature": 101084, "level": [20]},
        {"creature": 101083, "level": [20]},
        {"creature": 101081, "level": [20]},
        {"creature": 101087, "level": [20]},
        {"creature": 101085, "level": [20]}
      ],
      "bosses": [{"creature": 101284, "level": [28]}],
      "allies": [
        {"creature": 101285, "level": [18]},
        {"creature": 101286, "level": [20]},
        {"creature": 101287, "level": [20]}
      ],
      "wiki": {"en": "Rilohn Refuge", "de": "Rilohn-Refugium (Mission)"}
    },
    "460": {
      "name": "Pogahn Passage",
      "kind": "story",
      "outpost": 426,
      "order": 7,
      "label": "7a",
      "leads_to": [427],
      "hero": [12],
      "objectives": [
        [0, "Rescue Kormir from Gandara.", false],
        [1, "Escort Margrid to the Gandaran treasure vault to retrieve the Diadem of Lady Glaive.", false],
        [1, "Free Kormir from the Kournan prison.", false],
        [1, "Escape from Gandara with Kormir and Shahai.", false],
        [1, "Optional: Escort the Sunspear prisoners to the prison.", false],
        [1, "Optional: Obtain the prison code for entry into the prison.", false],
        [
          1,
          "Optional: The demon is out of control! You can either help the guards or stand aside and let them fight on their own.",
          false
        ],
        [1, "Optional: Take over gate duty for some guards.", false],
        [1, "Complete optional objectives.", true]
      ],
      "rewards": {
        "extra": ["Tasks completed"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 3], "master": [2000, 200, 1, 4]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 3], "master": [3000, 500, 1, 4]}
      },
      "foes": [
        {"creature": 101242, "level": [20, 26]},
        {"creature": 101243, "level": [20]},
        {"creature": 101244, "level": [20]},
        {"creature": 101076, "level": [20]},
        {"creature": 101079, "level": [20]},
        {"creature": 101080, "level": [20]},
        {"creature": 101084, "level": [20]},
        {"creature": 101083, "level": [20]},
        {"creature": 101081, "level": [20]},
        {"creature": 101085, "level": [20]},
        {"creature": 101087, "level": [20]},
        {"creature": 101245, "level": [20, 29]}
      ],
      "bosses": [
        {"creature": 101246, "level": [24, 30]},
        {"creature": 101247, "level": [24, 30]},
        {"creature": 101248, "level": [24, 30]}
      ],
      "allies": [
        {"creature": 101210, "level": [20]},
        {"creature": 101249, "level": [20]},
        {"creature": 101076, "level": [20]},
        {"creature": 101076, "level": [20]},
        {"creature": 101250, "level": [20]},
        {"creature": 101251, "level": [20]},
        {"creature": 101252, "level": [20]},
        {"creature": 101242, "level": [20]},
        {"creature": 101243, "level": [20]},
        {"creature": 101244, "level": [20]},
        {"creature": 101253, "level": [20]},
        {"creature": 101254, "level": [20]},
        {"creature": 101255, "level": [20]},
        {"creature": 101256, "level": [20]},
        {"creature": 100527, "level": [20]}
      ],
      "wiki": {"en": "Pogahn Passage", "de": "Passage von Pogahn (Mission)"}
    },
    "467": {
      "name": "Rollerbeetle Racing",
      "kind": "pvp",
      "outpost": 467,
      "wiki": {"en": "Rollerbeetle Racing", "de": "Rollkäfer-Rennen (Mission)"}
    },
    "515": {
      "name": "Jokanur Diggings",
      "kind": "story",
      "outpost": 491,
      "order": 2,
      "label": "2",
      "leads_to": [449],
      "hero": [9],
      "objectives": [
        [0, "Travel to the ancient Istani ruins.", false],
        [1, "Obtain the tablet from Darehk and place it on the stone pedestal.", false],
        [1, "Place the two tablets on the pedestals.", false],
        [1, "Guard Kahdash while he places the tablet on the pedestal.", false],
        [1, "Find and defeat the Apocrypha.", false],
        [1, "Kormir must survive.", false],
        [1, "Do not harm any Sunspear Ghosts.", true]
      ],
      "rewards": {
        "extra": ["Sunspear spirits killed", "Sunspear points"],
        "normal": {"standard": [1000, 100, 1, 2, 5], "expert": [1500, 150, 1, 1, 5], "master": [2000, 200, 1, 0, 5]},
        "hard": {"standard": [1000, 200, 1, 2, 50], "expert": [2000, 300, 1, 1, 50], "master": [3000, 500, 1, 0, 50]}
      },
      "foes": [
        {"creature": 100595, "level": [10, 24]},
        {"creature": 100596, "level": [10, 24]},
        {"creature": 100597, "level": [8, 23]},
        {"creature": 100598, "level": [8, 23]},
        {"creature": 100599, "level": [12, 20]},
        {"creature": 100600, "level": [12, 20]},
        {"creature": 100601, "level": [10, 23]},
        {"creature": 100602, "level": [10, 23]}
      ],
      "allies": [
        {"creature": 100527, "level": [20, 20]},
        {"creature": 100603, "level": [12, 20]},
        {"creature": 100604, "level": [12, 20]}
      ],
      "wiki": {"en": "Jokanur Diggings", "de": "Ausgrabungsstätte von Jokanur (Mission)"}
    },
    "516": {
      "name": "Blacktide Den",
      "kind": "story",
      "outpost": 492,
      "order": 3,
      "label": "3",
      "leads_to": [431],
      "hero": [3],
      "objectives": [
        [0, "Find General Kahyet. Prevent her from striking a deal with Ironfist, the corsair captain.", false],
        [1, "Eliminate Ironfist's envoy and crew.", false],
        [1, "Steal the corsair garb.", false],
        [1, "Pass through the Kournan check point.", false],
        [1, "Follow Captain Besuz to the meeting with Kahyet.", false],
        [1, "Kill Kahyet.", false],
        [1, "Clear Lahtenda Bog of rinkhal monitors.", true],
        [1, "You have [5...0] of 5 rinkhal monitors remaining.", false]
      ],
      "rewards": {
        "extra": ["Rinkhal monitors killed"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 3], "master": [2000, 200, 1, 5]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 3], "master": [3000, 500, 1, 5]}
      },
      "foes": [
        {"creature": 101159, "level": [15, 25]},
        {"creature": 101305, "level": [15, 25]},
        {"creature": 101306, "level": [16, 25]},
        {"creature": 101307, "level": [15, 20]},
        {"creature": 101308, "level": [16, 25]},
        {"creature": 101309, "level": [12, 24]},
        {"creature": 101310, "level": [11, 24]},
        {"creature": 101311, "level": [14, 24]},
        {"creature": 101312, "level": [13, 24]},
        {"creature": 101313, "level": [13, 24]},
        {"creature": 101314, "level": [13, 24]},
        {"creature": 101315, "level": [14, 24]},
        {"creature": 101316, "level": [12, 20]}
      ],
      "bosses": [
        {"creature": 101317, "level": [17, 28]},
        {"creature": 101318, "level": [17, 28]},
        {"creature": 101319, "level": [18, 24]}
      ],
      "allies": [
        {"creature": 101320, "level": [17, 20]},
        {"creature": 101321, "level": [15, 20]},
        {"creature": 101159, "level": [15, 20]},
        {"creature": 101307, "level": [15, 20]},
        {"creature": 101322, "level": [15, 20]},
        {"creature": 101323, "level": [15, 20]},
        {"creature": 101324, "level": [15, 20]},
        {"creature": 101325, "level": [15, 20]},
        {"creature": 101305, "level": [15, 20]},
        {"creature": 101326, "level": [15, 20]}
      ],
      "wiki": {"en": "Blacktide Den", "de": "Schwarzwasserloch (Mission)"}
    },
    "517": {
      "name": "Consulate Docks",
      "kind": "story",
      "outpost": 493,
      "order": 4,
      "label": "4",
      "leads_to": [381],
      "hero": [7],
      "objectives": [
        [0, "Assault Gandara.", false],
        [1, "Unite the western and southern attack fronts.", false],
        [1, "Capture the forward wall!", false],
        [1, "Defeat the Kournan Gate Captain to prevent him from summoning Kournan troops.", false],
        [
          1,
          "Kill the siege engineers manning the firespitters to clear the way for the southern attack front.",
          false
        ],
        [1, "Capture the Kournan bombard to gain entrance to the heart of Gandara.", false],
        [1, "Rally the attack force outside the Plaza of the Five Gods.", false],
        [1, "Eliminate the Kournan field marshal groups.", true],
        [1, "You have [3...0] of 3 Kournan field marshal groups remaining.", false]
      ],
      "rewards": {
        "extra": ["Field commander groups killed"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 2], "master": [2000, 200, 1, 3]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 2], "master": [3000, 500, 1, 3]}
      },
      "foes": [
        {"creature": 101077, "level": [22, 26]},
        {"creature": 101097, "level": [20, 26]},
        {"creature": 101080, "level": [16, 25]},
        {"creature": 101084, "level": [20, 26]},
        {"creature": 101098, "level": [20, 26]},
        {"creature": 101081, "level": [20, 26]},
        {"creature": 101088, "level": [22, 26]},
        {"creature": 101099, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 101100, "level": [24, 30]},
        {"creature": 101101, "level": [24, 30]},
        {"creature": 101102, "level": [24, 30]},
        {"creature": 101103, "level": [24, 30]}
      ],
      "allies": [
        {"creature": 100747, "level": [20, 20]},
        {"creature": 101104, "level": [20, 20]},
        {"creature": 101105, "level": [20, 20]},
        {"creature": 101106, "level": [20, 20]},
        {"creature": 101107, "level": [20, 20]}
      ],
      "wiki": {"en": "Consulate Docks", "de": "Konsulatshafen (Mission)"}
    },
    "518": {
      "name": "Tihark Orchard",
      "kind": "story",
      "outpost": 428,
      "order": 9,
      "label": "9",
      "leads_to": [414],
      "objectives": [
        [0, "Convince the three Princes of Vabbi to join the fight against Varesh.", false],
        [1, "Recruit Prince Mehtu the Wise for your war against Varesh.", false],
        [
          1,
          "Persuade Prince Bokka the Magnificent to join the Sunspears in the struggle against Warmarshal Varesh.",
          false
        ],
        [1, "Coerce Prince Ahmtur the Mighty to rally against Warmarshal Varesh.", false],
        [1, "Prince Ahmtur the Mighty wishes to speak with you again. Find out what he has to say.", false],
        [1, "Defend the garden and its guests by slaying the harpies.", false],
        [1, "Participate in the Festival of Lyss.", true],
        [1, "You have participated in [0...5] of 5 festivities.", false]
      ],
      "rewards": {
        "extra": ["Festivities visited"],
        "normal": {"standard": [1000, 100, 1, 3], "expert": [1500, 150, 1, 4], "master": [2000, 200, 1, 5]},
        "hard": {"standard": [1000, 200, 1, 3], "expert": [2000, 300, 1, 4], "master": [3000, 500, 1, 5]}
      },
      "foes": [
        {"creature": 101206, "level": [20, 20]},
        {"creature": 101207, "level": [24, 26]},
        {"creature": 101208, "level": [24, 26]},
        {"creature": 101209, "level": [24, 26]}
      ],
      "allies": [
        {"creature": 101210, "level": [20, 20]},
        {"creature": 101211, "level": [10, 20]},
        {"creature": 101212, "level": [20, 20]},
        {"creature": 101213, "level": [20, 20]},
        {"creature": 101214, "level": [10, 20]},
        {"creature": 101214, "level": [10, 20]},
        {"creature": 101215, "level": [10, 20]},
        {"creature": 101215, "level": [10, 20]},
        {"creature": 101216, "level": [10, 20]},
        {"creature": 101217, "level": [2, 20]},
        {"creature": 101218, "level": [10, 20]},
        {"creature": 101219, "level": [2, 20]},
        {"creature": 101220, "level": [2, 20]},
        {"creature": 101221, "level": [10, 20]},
        {"creature": 101222, "level": [10, 20]},
        {"creature": 101223, "level": [10, 20]},
        {"creature": 101224, "level": [20, 20]},
        {"creature": 101225, "level": [20, 20]},
        {"creature": 101226, "level": [18, 20]},
        {"creature": 100619, "level": [20, 20]},
        {"creature": 101227, "level": [20, 20]},
        {"creature": 101228, "level": [20, 20]},
        {"creature": 101229, "level": [10, 20]},
        {"creature": 101230, "level": [20, 20]},
        {"creature": 101231, "level": [10, 20]},
        {"creature": 101232, "level": [18, 20]},
        {"creature": 101233, "level": [10, 20]},
        {"creature": 101234, "level": [12, 20]},
        {"creature": 101235, "level": [20, 20]},
        {"creature": 101236, "level": [20, 20]},
        {"creature": 101237, "level": [20, 20]},
        {"creature": 101060, "level": [10, 20]},
        {"creature": 101238, "level": [10, 20]},
        {"creature": 101239, "level": [20, 20]},
        {"creature": 101240, "level": [10, 20]},
        {"creature": 101241, "level": [10, 20]}
      ],
      "wiki": {"en": "Tihark Orchard", "de": "Obstgarten von Tihark (Mission)"}
    },
    "519": {
      "name": "Dzagonur Bastion",
      "kind": "story",
      "outpost": 433,
      "order": 10,
      "label": "10b",
      "leads_to": [414],
      "hero": [4],
      "objectives": [
        [
          0,
          "Defeat the Margonite generals before their forces take the Citadel. Preserve the perimeter bombards to aid you in the battle. Defend the gates to prevent enemy forces from reaching the Citadel.",
          false
        ],
        [1, "Speak to Prince Ahmtur the Mighty.", false],
        [1, "[3...0] of 3 gates still stand.", false],
        [1, "[3...0] of 3 bombards still function.", false],
        [1, "[4...0] of 4 generals remain.", false],
        [1, "Keep the bastion's defenses intact.", true],
        [1, "[6...0] of 6 defenses left intact.", false]
      ],
      "rewards": {
        "extra": ["Fortifications intact"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 1], "master": [2000, 200, 1, 5]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 1], "master": [3000, 500, 1, 5]}
      },
      "foes": [
        {"creature": 100605},
        {"creature": 100606, "level": [24, 26]},
        {"creature": 100607, "level": [24, 26]},
        {"creature": 100608, "level": [24, 26]},
        {"creature": 100609, "level": [24, 26]},
        {"creature": 100610, "level": [24, 26]},
        {"creature": 100611, "level": [24, 26]},
        {"creature": 100612, "level": [24, 26]},
        {"creature": 100613, "level": [24, 26]},
        {"creature": 100614}
      ],
      "bosses": [
        {"creature": 100615, "level": [28, 30]},
        {"creature": 100616, "level": [28, 30]},
        {"creature": 100617, "level": [28, 30]},
        {"creature": 100618, "level": [28, 30]}
      ],
      "allies": [{"creature": 100619, "level": [20, 20]}, {"creature": 100620, "level": [20, 20]}],
      "wiki": {"en": "Dzagonur Bastion", "de": "Bastion von Dzagonur (Mission)"}
    },
    "520": {
      "name": "Dasha Vestibule",
      "kind": "story",
      "outpost": 434,
      "order": 10,
      "label": "10a",
      "leads_to": [414],
      "hero": [12],
      "objectives": [
        [0, "Gain access to the vault's inner sanctum and rescue the two princes.", false],
        [
          1,
          "Complete the trial in each chamber to open the way into the inner sanctum. [0...3] of 3 trials completed.",
          false
        ],
        [1, "Defeat the Eternal Guardians to complete the Trial of Eternity.", false],
        [1, "Answer the riddles posed by the Divine Djinn to pass the Trial of Divinity.", false],
        [1, "Solve the crystal key puzzle to complete the Trial of Wisdom.", false],
        [1, "Defeat the enraged djinn to reach the two princes.", false],
        [1, "Goren must survive.", false],
        [1, "Help Margrid collect the Treasure of Ahdashim.", true],
        [1, "[0...3] of 3 treasures found.", false]
      ],
      "rewards": {
        "extra": ["Treasure of Ahdashim"],
        "normal": {"standard": [1000, 100, 1, 0], "expert": [1500, 150, 1, 1], "master": [2000, 200, 1, 3]},
        "hard": {"standard": [1000, 200, 1, 0], "expert": [2000, 300, 1, 1], "master": [3000, 500, 1, 3]}
      },
      "foes": [
        {"creature": 101413, "level": [24, 26]},
        {"creature": 101414, "level": [24, 26]},
        {"creature": 101415, "level": [24, 26]},
        {"creature": 101416, "level": [24, 26]},
        {"creature": 101417, "level": [28, 30]},
        {"creature": 101418, "level": [24, 26]},
        {"creature": 101419, "level": [24, 26]},
        {"creature": 101420, "level": [24, 26]},
        {"creature": 101414, "level": [24, 26]},
        {"creature": 101421, "level": [24, 26]},
        {"creature": 101422, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100296, "level": [28, 30]},
        {"creature": 100413, "level": [28, 30]},
        {"creature": 101423, "level": [28, 30]}
      ],
      "wiki": {"en": "Dasha Vestibule", "de": "Vorhof von Dasha (Mission)"}
    },
    "521": {
      "name": "Grand Court of Sebelkeh",
      "kind": "story",
      "outpost": 435,
      "order": 11,
      "label": "11",
      "leads_to": [414],
      "hero": [3],
      "objectives": [
        [0, "The Altar of Lyssa must not be captured by the Blasphemy.", false],
        [
          1,
          "Capture the torment rifts guarded by the Margonites. Stand near a rift to claim it. [0...3] of 3 rifts captured.",
          false
        ]
      ],
      "rewards": {
        "by": "time",
        "extra": ["Lightbringer points"],
        "tiers": {"standard": "> 16 min", "expert": "12-16", "master": "< 12 min"},
        "normal": {"standard": [1000, 100, 1, 25], "expert": [1500, 150, 1, 25], "master": [2000, 200, 1, 25]},
        "hard": {"standard": [1000, 200, 1, 75], "expert": [2000, 300, 1, 75], "master": [3000, 500, 1, 75]}
      },
      "foes": [
        {"creature": 100606, "level": [24, 26]},
        {"creature": 100607, "level": [24, 26]},
        {"creature": 100608, "level": [24, 26]},
        {"creature": 100609, "level": [24, 26]},
        {"creature": 100610, "level": [24, 26]},
        {"creature": 100611, "level": [24, 26]},
        {"creature": 100613, "level": [24, 26]},
        {"creature": 100612, "level": [24, 26]},
        {"creature": 101044, "level": [27, 32]},
        {"creature": 101045, "level": [20, 26]},
        {"creature": 100525, "level": [24, 26]}
      ],
      "wiki": {"en": "Grand Court of Sebelkeh", "de": "Großer Hof von Sebelkeh (Mission)"}
    },
    "522": {
      "name": "Jennur's Horde",
      "kind": "story",
      "outpost": 476,
      "order": 12,
      "label": "12a",
      "leads_to": [414],
      "hero": [6],
      "objectives": [
        [0, "Defeat the Harbinger of Nightfall before it summons enough demons to destroy Seborhin.", false],
        [1, "Protect the Spirits of Seborhin from the onslaught of torment demons.", false],
        [
          1,
          "The Light of Seborhin is the only thing that can harm the Harbingers. Drop the Light of Seborhin when you are close enough to an enemy to release its energy.",
          false
        ],
        [1, "Horticulturist Hinon must survive.", false],
        [1, "Defeat the additional Harbingers.", true],
        [1, "You have defeated [0...2] of 2 additional Harbingers.", false]
      ],
      "rewards": {
        "extra": ["Extra Harbingers killed", "Lightbringer points"],
        "normal": {
          "standard": [1000, 100, 1, 0, 30],
          "expert": [1500, 150, 1, 2, 30],
          "master": [2000, 200, 1, 3, 30]
        },
        "hard": {"standard": [1000, 200, 1, 0, 75], "expert": [2000, 300, 1, 2, 75], "master": [3000, 500, 1, 3, 75]}
      },
      "foes": [
        {"creature": 101058, "level": [28]},
        {"creature": 101059, "level": [26]},
        {"creature": 100606, "level": [24, 26]},
        {"creature": 100607, "level": [24, 26]},
        {"creature": 100608, "level": [24, 26]},
        {"creature": 100609, "level": [24, 26]},
        {"creature": 100610, "level": [24, 26]},
        {"creature": 100611, "level": [24, 26]},
        {"creature": 100612, "level": [24, 26]},
        {"creature": 100613, "level": [24, 26]}
      ],
      "allies": [{"creature": 101060}, {"creature": 101061}],
      "wiki": {"en": "Jennur's Horde", "de": "Jennurs Horde (Mission)"}
    },
    "523": {
      "name": "Nundu Bay",
      "kind": "story",
      "outpost": 477,
      "order": 12,
      "label": "12b",
      "leads_to": [387],
      "hero": [9],
      "objectives": [
        [0, "Defeat the Harbingers of Nightfall before they can destroy the village of Ronjok.", false],
        [
          1,
          "The Harbingers of Nightfall can only be damaged once they are affected by the purified water of the vials.",
          false
        ],
        [1, "Protect and defend Elder Jonah. He must survive.", false],
        [1, "Defeat the additional Harbingers.", true],
        [1, "You have defeated [0...2] of 2 additional Harbingers.", false]
      ],
      "rewards": {
        "extra": ["Extra Harbingers killed", "Lightbringer points"],
        "normal": {
          "standard": [1000, 100, 1, 0, 30],
          "expert": [1500, 150, 1, 1, 30],
          "master": [2000, 200, 1, 2, 30]
        },
        "hard": {"standard": [1000, 200, 1, 0, 75], "expert": [2000, 300, 1, 1, 75], "master": [3000, 500, 1, 2, 75]}
      },
      "foes": [
        {"creature": 100605},
        {"creature": 100606, "level": [24, 26]},
        {"creature": 100607, "level": [24, 26]},
        {"creature": 100608, "level": [24, 26]},
        {"creature": 100609, "level": [24, 26]},
        {"creature": 100610, "level": [24, 26]},
        {"creature": 100611, "level": [24, 26]},
        {"creature": 100612, "level": [24, 26]},
        {"creature": 100613, "level": [24, 26]},
        {"creature": 101197},
        {"creature": 101198, "level": [28, 30]},
        {"creature": 101058, "level": [28, 30]}
      ],
      "bosses": [
        {"creature": 101199, "level": [28, 30]},
        {"creature": 101200, "level": [28, 30]},
        {"creature": 101201, "level": [28, 30]},
        {"creature": 101202, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 101203, "level": [15, 20]},
        {"creature": 101204, "level": [20]},
        {"creature": 101204, "level": [20]},
        {"creature": 101205, "level": [20]}
      ],
      "wiki": {"en": "Nundu Bay", "de": "Nundu-Bucht (Mission)"}
    },
    "524": {
      "name": "Gate of Desolation",
      "kind": "story",
      "outpost": 478,
      "order": 13,
      "label": "13",
      "leads_to": [545],
      "hero": [10],
      "objectives": [
        [0, "Tame Queen Aijundu and gain control of the junundu wurms.", false],
        [1, "Defeat Queen Aijundu and her undead minions.", false],
        [1, "Call forth a junundu so you may ride it through the sulfur.", false],
        [1, "Guide the junundu to the Remains of Sahlahja.", false],
        [1, "Protect the junundu young from the demon hordes.", true],
        [1, "You have saved [0...3] of 3 junundu young.", false]
      ],
      "rewards": {
        "extra": ["Young junundus rescued", "Lightbringer points"],
        "normal": {
          "standard": [1000, 100, 1, 0, 30],
          "expert": [1500, 150, 1, 1, 30],
          "master": [2000, 200, 1, 3, 30]
        },
        "hard": {"standard": [1000, 200, 1, 0, 75], "expert": [2000, 300, 1, 1, 75], "master": [3000, 500, 1, 3, 75]}
      },
      "foes": [
        {"creature": 101439},
        {"creature": 100606, "level": [24]},
        {"creature": 100607, "level": [24]},
        {"creature": 100608, "level": [24]},
        {"creature": 100609, "level": [24]},
        {"creature": 100610, "level": [24]},
        {"creature": 100611, "level": [24]},
        {"creature": 100612, "level": [24]},
        {"creature": 100613, "level": [24]},
        {"creature": 101440, "level": [24]},
        {"creature": 101441, "level": [24]},
        {"creature": 101442, "level": [24]},
        {"creature": 101443, "level": [24]},
        {"creature": 101444, "level": [24]},
        {"creature": 101445, "level": [24]},
        {"creature": 101446, "level": [24]},
        {"creature": 101447, "level": [24]},
        {"creature": 101448, "level": [24]},
        {"creature": 101449, "level": [24]},
        {"creature": 101450, "level": [24]}
      ],
      "bosses": [
        {"creature": 101451, "level": [28]},
        {"creature": 101452, "level": [28]},
        {"creature": 101453, "level": [28]},
        {"creature": 101454, "level": [28]},
        {"creature": 101455, "level": [28]}
      ],
      "allies": [{"creature": 101456}, {"creature": 101457}],
      "wiki": {"en": "Gate of Desolation", "de": "Ödland-Tor (Mission)"}
    },
    "525": {
      "name": "Ruins of Morah",
      "kind": "story",
      "outpost": 480,
      "order": 14,
      "label": "14",
      "leads_to": [450],
      "hero": [11],
      "foes": [
        {"creature": 100605},
        {"creature": 100608, "level": [24, 26]},
        {"creature": 101288, "level": [29, 32]},
        {"creature": 101289, "level": [30, 32]},
        {"creature": 101197},
        {"creature": 100807, "level": [28, 30]},
        {"creature": 100810, "level": [28, 30]},
        {"creature": 100809, "level": [28, 30]},
        {"creature": 100812, "level": [28, 30]}
      ],
      "wiki": {"en": "Ruins of Morah", "de": "Ruinen von Morah (Mission)"}
    },
    "526": {
      "name": "Gate of Pain",
      "kind": "story",
      "outpost": 494,
      "order": 15,
      "label": "15",
      "leads_to": [469],
      "hero": [7],
      "objectives": [
        [0, "Find a way to release the tortured souls from the River of Souls.", false],
        [1, "Destroy the Emissary of Dhuum.", false],
        [1, "Kill Tortureweb Dryders to free the souls they captured from the River of Souls.", false],
        [1, "Kill the additional elite emissaries.", true],
        [1, "[0...3] of 3 elite emissaries destroyed.", false]
      ],
      "rewards": {
        "extra": ["Emissaries killed", "Lightbringer points"],
        "normal": {
          "standard": [1000, 100, 1, 0, 40],
          "expert": [1500, 150, 1, 2, 40],
          "master": [2000, 200, 1, 3, 40]
        },
        "hard": {
          "standard": [1000, 200, 1, 0, 100],
          "expert": [2000, 300, 1, 2, 100],
          "master": [3000, 500, 1, 3, 100]
        }
      },
      "foes": [
        {"creature": 100807, "level": [28, 30]},
        {"creature": 100806, "level": [28, 30]},
        {"creature": 100810, "level": [28, 30]},
        {"creature": 100812, "level": [28, 30]},
        {"creature": 100813, "level": [28, 30]},
        {"creature": 100808, "level": [28, 30]},
        {"creature": 100809, "level": [28, 30]},
        {"creature": 101337, "level": [28, 30]},
        {"creature": 101338, "level": [28, 30]}
      ],
      "bosses": [{"creature": 101338, "level": [28, 30]}],
      "allies": [
        {"creature": 100527, "level": [20]},
        {"creature": 101339, "level": [20]},
        {"creature": 101340, "level": [6]}
      ],
      "wiki": {"en": "Gate of Pain", "de": "Tor des Schmerzes (Mission)"}
    },
    "527": {
      "name": "Gate of Madness",
      "kind": "story",
      "outpost": 495,
      "order": 16,
      "label": "16",
      "leads_to": [496],
      "objectives": [
        [1, "Travel to the Temple of the Six Gods.", false],
        [1, "Close the torment rifts by slaying the portal wraiths. [5...0] of 5 rifts remain open.", false],
        [1, "Activate the shrines to the Five Gods to aid you in battle.", false],
        [1, "Destroy the Undead Lich and Shiro Tagachi.", false],
        [1, "Rally the god avatars.", true],
        [1, "You have rallied [0...5] of 5 god avatars.", false]
      ],
      "rewards": {
        "extra": ["Shrines captured", "Lightbringer points"],
        "normal": {
          "standard": [1000, 100, 1, 0, 45],
          "expert": [1500, 150, 1, 2, 45],
          "master": [2000, 200, 1, 5, 45]
        },
        "hard": {
          "standard": [1000, 200, 1, 0, 100],
          "expert": [2000, 300, 1, 2, 100],
          "master": [3000, 500, 1, 5, 100]
        }
      },
      "foes": [
        {"creature": 101072},
        {"creature": 101341},
        {"creature": 100811, "level": [28, 30]},
        {"creature": 100809, "level": [28, 30]},
        {"creature": 100807, "level": [28, 30]},
        {"creature": 100810, "level": [28, 30]},
        {"creature": 100813, "level": [28, 30]},
        {"creature": 101342, "level": [28, 30]},
        {"creature": 100613, "level": [24, 26]},
        {"creature": 100606, "level": [24, 26]},
        {"creature": 100611, "level": [24, 26]},
        {"creature": 100607, "level": [24, 26]},
        {"creature": 101343, "level": [28, 30]},
        {"creature": 101261, "level": [28, 30]},
        {"creature": 101257, "level": [28, 30]},
        {"creature": 101260, "level": [28, 30]},
        {"creature": 101259, "level": [28, 30]},
        {"creature": 101258, "level": [28, 30]},
        {"creature": 101344, "level": [28, 30]},
        {"creature": 101345, "level": [28, 30]},
        {"creature": 101346, "level": [28, 30]},
        {"creature": 101347, "level": [28, 30]}
      ],
      "bosses": [
        {"creature": 101348, "level": [28, 30]},
        {"creature": 101349, "level": [28, 30]},
        {"creature": 101072, "level": [31, 33]},
        {"creature": 101341, "level": [30, 32]}
      ],
      "allies": [{"creature": 100527}],
      "wiki": {"en": "Gate of Madness", "de": "Tor des Wahnsinns (Mission)"}
    },
    "528": {
      "name": "Abaddon's Gate",
      "kind": "story",
      "outpost": 496,
      "order": 17,
      "label": "17",
      "leads_to": [503],
      "objectives": [
        [0, "Destroy Abaddon.", false],
        [1, "Destroy the graven monoliths to power the chains of Abaddon.", false],
        [1, "Attack Abaddon while he is vulnerable.", false]
      ],
      "rewards": {
        "by": "time",
        "extra": ["Lightbringer points"],
        "tiers": {"standard": "> 25 min", "expert": "20 - 25 min", "master": "< 20 min"},
        "normal": {"standard": [1000, 100, 1, 50], "expert": [1500, 150, 1, 50], "master": [2000, 200, 1, 50]},
        "hard": {"standard": [1000, 200, 1, 100], "expert": [2000, 300, 1, 100], "master": [3000, 500, 1, 100]}
      },
      "foes": [{"creature": 100523}, {"creature": 100524, "level": [30, 32]}, {"creature": 100525, "level": [24, 26]}],
      "allies": [{"creature": 100526}, {"creature": 100527, "level": [20]}],
      "wiki": {"en": "Abaddon's Gate", "de": "Abaddons Tor (Mission)"}
    },
    "545": {
      "name": "Remains of Sahlahja",
      "kind": "challenge",
      "outpost": 545,
      "objectives": [
        [0, "Start from Lost Soul [Challenge Mission Starter] located in Remains of Sahlahja.", false],
        [0, "Evade angry ghosts and cleanse the tombs by killing the insects that have infested the area.", false],
        [1, "Evade the ghosts of the primeval kings.", false],
        [1, "Kill infestations to earn points.", false],
        [1, "Kill greater infestations to earn points and gain the temporary ability to harm ghosts.", false],
        [1, "Destroy lost souls to free their spirits and earn points.", false],
        [1, "Earn 15 points to unlock access to each section of the tombs.", false]
      ],
      "wiki": {"en": "Remains of Sahlahja", "de": "Überreste Sahlahjars (Mission)"}
    },
    "554": {
      "name": "Dajkah Inlet",
      "kind": "challenge",
      "outpost": 554,
      "objectives": [
        [0, "Assault the corsair guild halls and defeat their Guild Lords.", false],
        [1, "Defeat the corsair Guild Lords to move to the next island.", false],
        [1, "Use the portal to access the next island.", false],
        [1, "Kill Corsair commanders to gain extra time.", false]
      ],
      "foes": [
        {"creature": 100733, "level": [20, 20]},
        {"creature": 100734, "level": [20, 26]},
        {"creature": 100735, "level": [20, 26]},
        {"creature": 100736, "level": [20, 26]},
        {"creature": 100737, "level": [20, 26]},
        {"creature": 100738, "level": [20, 26]},
        {"creature": 100739, "level": [20, 26]},
        {"creature": 100740, "level": [20, 26]},
        {"creature": 100741, "level": [20, 26]},
        {"creature": 100742, "level": [20, 26]}
      ],
      "bosses": [
        {"creature": 100743, "level": [28, 30]},
        {"creature": 100744, "level": [24, 30]},
        {"creature": 100745, "level": [28, 30]},
        {"creature": 100746, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 100747, "level": [20, 20]},
        {"creature": 100748, "level": [20, 20]},
        {"creature": 100749, "level": [20, 20]}
      ],
      "wiki": {"en": "Dajkah Inlet", "de": "Dajkah-Zulauf (Mission)"}
    },
    "555": {
      "name": "The Shadow Nexus",
      "kind": "challenge",
      "outpost": 555,
      "objectives": [
        [
          0,
          "Keep the Margonite Portal Mages from summoning enough demons and Margonites to overwhelm the area.",
          false
        ],
        [1, "Defeat the creatures guarding the Torment rifts to increase your score.", false],
        [1, "Defeat the Margonite Portal Mages to close the rift and earn a bonus score!", false]
      ],
      "foes": [
        {"creature": 100606, "level": [24, 26]},
        {"creature": 100607, "level": [24, 26]},
        {"creature": 100608, "level": [24, 26]},
        {"creature": 100609, "level": [24, 26]},
        {"creature": 100610, "level": [24, 26]},
        {"creature": 100611, "level": [24, 26]},
        {"creature": 100612, "level": [24, 26]},
        {"creature": 100613, "level": [24, 26]},
        {"creature": 100806, "level": [28, 30]},
        {"creature": 100807, "level": [28, 30]},
        {"creature": 100808, "level": [28, 30]},
        {"creature": 100809, "level": [28, 30]},
        {"creature": 100810, "level": [28, 30]},
        {"creature": 100811, "level": [28, 30]},
        {"creature": 100812, "level": [28, 30]},
        {"creature": 100813, "level": [28, 30]}
      ],
      "bosses": [{"creature": 100814, "level": [24, 30]}],
      "wiki": {"en": "The Shadow Nexus", "de": "Der Nexus der Schatten (Mission)"}
    },
    "556": {
      "name": "Chahbek Village",
      "kind": "story",
      "outpost": 544,
      "order": 1,
      "label": "1",
      "leads_to": [456],
      "hero": [6],
      "objectives": [
        [0, "Save Chahbek Village.", false],
        [1, "Destroy the corsairs occupying the village.", false],
        [1, "Sink the corsair ship on the north side of the village.", false],
        [1, "Sink the corsair ship on the south side of the village.", false],
        [1, "Keep as many Sunspear Recruits alive as possible.", true]
      ],
      "rewards": {
        "by": "sunspear recruits alive",
        "tiers": {"standard": "0-1", "expert": "2", "master": "3"},
        "normal": {"standard": [250, 20, 1], "expert": [750, 30, 1], "master": [1000, 50, 1]},
        "hard": {"standard": [1000, 200, 1], "expert": [2000, 300, 1], "master": [3000, 500, 1]}
      },
      "foes": [
        {"creature": 100695, "level": [1, 22]},
        {"creature": 100696, "level": [0, 22]},
        {"creature": 100697, "level": [0, 22]},
        {"creature": 100698, "level": [1, 22]},
        {"creature": 100699, "level": [0, 22]}
      ],
      "bosses": [{"creature": 100700, "level": [4, 26]}],
      "allies": [
        {"creature": 100701, "level": [2, 20]},
        {"creature": 100702, "level": [2, 20]},
        {"creature": 100527, "level": [20, 20]}
      ],
      "wiki": {"en": "Chahbek Village", "de": "Chahbek (Mission)"}
    },
    "593": {"name": "Fetid River", "kind": "pvp", "wiki": {"en": "Fetid River", "de": "Stinkender Fluss"}},
    "596": {
      "name": "Forgotten Shrines",
      "kind": "pvp",
      "wiki": {"en": "Forgotten Shrines", "de": "Vergessene Schreine"}
    },
    "598": {"name": "The Antechamber", "kind": "pvp", "wiki": {"en": "Antechamber", "de": "Die Vorkammer"}},
    "653": {
      "name": "Curse of the Nornbear",
      "kind": "story",
      "order": 7,
      "label": "7",
      "objectives": [
        [1, "Speak to Sif in Sifhalla to begin the hunt. (disappears from Quest Log after entering Mission)", false],
        [1, "Join Jora and Sif. Get the Volfen Blessing from the Shrine of the Wolf Spirit.", false],
        [1, "Invoke the Volfen Blessing to receive the abilities of the wolf spirit.", false],
        [1, "Track down Svanir, the Nornbear.", false],
        [1, "Receive Volfen Blessing from Sif.", false],
        [1, "Use the skill Volfen Bloodlust to follow the scent of the Nornbear.", false],
        [1, "Stay on Svanir's trail.", false],
        [1, "Pursue Svanir. Don't let him escape.", false],
        [1, "Slay Svanir, the Nornbear.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Norn points",
        "normal": {"first": 1000, "repeat": 100},
        "hard": {"first": 1500, "repeat": 150}
      },
      "foes": [
        {"creature": 101508, "level": [28, 30]},
        {"creature": 101509, "level": [28, 30]},
        {"creature": 101510, "level": [28, 30]},
        {"creature": 101511, "level": [28, 30]},
        {"creature": 101482, "level": [20, 26]},
        {"creature": 101483, "level": [20, 26]},
        {"creature": 101484, "level": [20, 26]},
        {"creature": 101485, "level": [20, 26]},
        {"creature": 101512, "level": [20, 26]},
        {"creature": 101513, "level": [24, 30]}
      ],
      "allies": [
        {"creature": 101514, "level": [20]},
        {"creature": 101515, "level": [20]},
        {"creature": 101516, "level": [0, 20]}
      ],
      "wiki": {"en": "Curse of the Nornbear", "de": "Der Fluch des Nornbären"}
    },
    "654": {
      "name": "Blood Washes Blood",
      "kind": "story",
      "order": 8,
      "label": "8",
      "objectives": [
        [1, "Light the sacred altar. Lead the bear spirit into Bjora Marches to cleanse Jora's homestead.", false],
        [1, "Accompany Bear on the mountain pilgrimage to the Shrine of the Bear Spirit.", false],
        [1, "Defeat the Charr forces surrounding the Shrine of the Bear Spirit.", false],
        [1, "Receive the Ursan Blessing [sic] from the Shrine of the Bear Spirit.", false],
        [1, "Use the bear spirit skill, Ursan Force, to break down the Charr barricades.", false],
        [1, "Kill the Charr in Jora's homestead. [5...0] group[s] remaining.", false],
        [1, "Receive Ursan Blessing [sic] from Egil.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Norn points",
        "normal": {"first": 1000, "repeat": 100},
        "hard": {"first": 1500, "repeat": 150}
      },
      "foes": [
        {"creature": 101481, "level": [20, 26]},
        {"creature": 101482, "level": [20, 26]},
        {"creature": 101483, "level": [20, 26]},
        {"creature": 101484, "level": [20, 26]},
        {"creature": 101485, "level": [20, 26]},
        {"creature": 101486, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 100043, "level": [24]},
        {"creature": 100044, "level": [24]},
        {"creature": 100048, "level": [24]},
        {"creature": 100045, "level": [24]}
      ],
      "allies": [{"creature": 101487, "level": [20]}, {"creature": 101488, "level": [20]}],
      "wiki": {"en": "Blood Washes Blood", "de": "Blut wäscht Blut"}
    },
    "655": {
      "name": "A Gate Too Far",
      "kind": "story",
      "order": 9,
      "label": "9",
      "objectives": [
        [
          1,
          "Speak to Olaf Olafson to journey to Raven's Point. (disappears from Quest Log after entering Mission)",
          false
        ],
        [1, "Help Olaf cleanse the Shrine of the Raven Spirit.", false],
        [1, "Receive the Raven Blessing from the shrine.", false],
        [1, "Follow the Destroyer Tremor trail to its source.", false],
        [1, "Destroy the Asura Gate to halt the Destroyer influx.", false],
        [1, "Use Raven's Flight [sic] to protect you from the Destroyer Tremors.", false],
        [1, "Receive [sic] Raven Blessing from Olaf.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Norn points",
        "normal": {"first": 1000, "repeat": 100},
        "hard": {"first": 1500, "repeat": 150}
      },
      "foes": [
        {"creature": 101543, "level": [20, 26]},
        {"creature": 101522, "level": [20, 26]},
        {"creature": 101523, "level": [20, 26]},
        {"creature": 101524, "level": [20, 26]},
        {"creature": 100917, "level": [20]},
        {"creature": 101544, "level": [20, 20]},
        {"creature": 101521, "level": [20, 26]},
        {"creature": 101520, "level": [20, 26]},
        {"creature": 101519, "level": [20, 26]},
        {"creature": 101031, "level": [28, 30]},
        {"creature": 101033, "level": [28, 30]},
        {"creature": 101032, "level": [28, 30]},
        {"creature": 101501, "level": [28, 30]},
        {"creature": 101034, "level": [28, 30]},
        {"creature": 101035, "level": [28, 30]},
        {"creature": 101036, "level": [28, 30]},
        {"creature": 101545, "level": [28, 30]}
      ],
      "allies": [
        {"creature": 101532, "level": [20]},
        {"creature": 101546, "level": [20]},
        {"creature": 101546, "level": [20]}
      ],
      "wiki": {"en": "A Gate Too Far", "de": "Ein Portal zu weit"}
    },
    "658": {
      "name": "The Elusive Golemancer",
      "kind": "story",
      "order": 2,
      "label": "2",
      "objectives": [
        [1, "Find Oola's workshop in the depths below and convince her to help with Mamp's project.", false],
        [1, "Find a golem to circumvent the security system.", false],
        [1, "Discover a way to access the next laboratory level.", false],
        [1, "Search the room for a passage leading further into the laboratory.", false],
        [1, "Survive the fiery gauntlet.", false],
        [1, "Open the security lock.", false],
        [1, "Defeat the indestructible golem.", false],
        [1, "Confront the mysterious voice.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Asura points",
        "normal": {"first": 3000, "repeat": 300},
        "hard": {"first": 4500, "repeat": 450}
      },
      "foes": [
        {"creature": 101539, "level": [20]},
        {"creature": 101540, "level": [20]},
        {"creature": 101541, "level": [20]}
      ],
      "allies": [{"creature": 101542, "level": [20]}],
      "wiki": {"en": "The Elusive Golemancer", "de": "Die scheue Golemantin"}
    },
    "661": {
      "name": "Finding the Bloodstone",
      "kind": "story",
      "order": 1,
      "label": "1",
      "objectives": [
        [1, "Invoke the inscription stone in Sparkfly Swamp to unlock the path to the Bloodstone.", false],
        [1, "Help Gadd and Livia reach the Bloodstone in the depths below.", false],
        [1, "Defeat Inscribed Sentries and decipher their inscriptions to open passageways.", false],
        [1, "Destroy the Inscribed Guardian protecting the Bloodstone.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Asura points",
        "normal": {"first": 3000, "repeat": 300},
        "hard": {"first": 4500, "repeat": 450}
      },
      "foes": [
        {"creature": 101458, "level": [24, 26]},
        {"creature": 101459, "level": [24, 26]},
        {"creature": 101460, "level": [24, 26]},
        {"creature": 101461},
        {"creature": 101462, "level": [20, 26]},
        {"creature": 101463, "level": [20, 26]},
        {"creature": 101464, "level": [20, 26]},
        {"creature": 101465, "level": [20, 26]},
        {"creature": 101466, "level": [24, 26]},
        {"creature": 101467, "level": [24, 30]},
        {"creature": 101468, "level": [24, 26]},
        {"creature": 101469, "level": [24, 26]},
        {"creature": 101470, "level": [24, 30]},
        {"creature": 101471},
        {"creature": 101472, "level": [24, 26]},
        {"creature": 101473, "level": [24, 26]},
        {"creature": 101474, "level": [24, 26]},
        {"creature": 101475, "level": [24, 26]},
        {"creature": 101476, "level": [24, 26]}
      ],
      "bosses": [{"creature": 101477, "level": [28, 30]}, {"creature": 101478, "level": [28, 30]}],
      "allies": [{"creature": 101479, "level": [20, 20]}, {"creature": 101480, "level": [20, 20]}],
      "wiki": {"en": "Finding the Bloodstone", "de": "Auf der Suche nach dem Blutstein"}
    },
    "664": {
      "name": "Genius Operated Living Enchanted Manifestation",
      "kind": "story",
      "order": 3,
      "label": "3",
      "objectives": [
        [1, "Mamp in Rata Sum will brief you on the defenses.", false],
        [1, "Protect each golem kiln as it heats up.", false],
        [1, "Learn how to deploy golems into battle.", false],
        [1, "Raze the Destroyer hive.", false],
        [1, "Drop an Asuran beacon obtained from Sokka to summon golem reinforcements.", false],
        [1, "Defeat the Bringers of Destruction protecting the hive.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Asura points",
        "normal": {"first": 1000, "repeat": 100},
        "hard": {"first": 1500, "repeat": 150}
      },
      "foes": [
        {"creature": 101033, "level": [28]},
        {"creature": 101031, "level": [28]},
        {"creature": 101032, "level": [28]},
        {"creature": 101517, "level": [28]},
        {"creature": 101034, "level": [28]},
        {"creature": 101501, "level": [28]},
        {"creature": 101035, "level": [28]},
        {"creature": 101036, "level": [28]},
        {"creature": 101037, "level": [28]},
        {"creature": 101547, "level": [16]}
      ],
      "bosses": [{"creature": 101548, "level": [28, 30]}],
      "allies": [
        {"creature": 101535, "level": [20]},
        {"creature": 101537, "level": [20]},
        {"creature": 101480, "level": [20]},
        {"creature": 101549}
      ],
      "wiki": {
        "en": "Genius Operated Living Enchanted Manifestation",
        "de": "Geführter Operand Lebender Entfesselter Magie"
      }
    },
    "665": {
      "name": "Against the Charr",
      "kind": "story",
      "order": 4,
      "label": "4",
      "objectives": [
        [1, "Search the Charr camp to the east for signs of the Vanguard captives.", false],
        [1, "*OPTIONAL* Find ways to weaken the Charr garrison.", false],
        [1, "*OPTIONAL* Intercept the Charr supply caravan. Use Charr Explosive charges to disable it.", false],
        [1, "*OPTIONAL* Destroy the watchtowers with explosive charges. [0...2] of 2 destroyed.", false],
        [
          1,
          "*OPTIONAL* Employ the siege devourers to fire explosive charges at the garrison. [0...2] of 2 fired.",
          false
        ],
        [1, "Defeat Harvest Soulreign.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Vanguard points",
        "normal": {"first": 1000, "repeat": 100},
        "hard": {"first": 1500, "repeat": 150}
      },
      "foes": [
        {"creature": 101550, "level": [24, 26]},
        {"creature": 101551, "level": [24, 26]},
        {"creature": 101552, "level": [24, 26]},
        {"creature": 101553},
        {"creature": 101426, "level": [20, 26]},
        {"creature": 101554, "level": [20, 26]},
        {"creature": 101555, "level": [20, 26]},
        {"creature": 101556, "level": [20, 26]}
      ],
      "bosses": [
        {"creature": 101557, "level": [24, 30]},
        {"creature": 101558, "level": [24, 30]},
        {"creature": 101559, "level": [24, 30]},
        {"creature": 100314, "level": [24, 30]},
        {"creature": 101560, "level": [24, 30]}
      ],
      "wiki": {"en": "Against the Charr", "de": "Gegen die Charr"}
    },
    "666": {
      "name": "Warband of Brothers",
      "kind": "story",
      "order": 5,
      "label": "5",
      "objectives": [
        [1, "Rescue each member of Pyre Fierceshot's warband from the Cathedral of Flames.", false],
        [1, "Rescue Seer Fiercereign.", false],
        [1, "Rescue Cowl Fiercetongue.", false],
        [1, "Rescue Roan Fierceheart.", false],
        [1, "Slay Flamemaster Maultooth.", false],
        [1, "Your party has [0...1] key[s].", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Vanguard points",
        "normal": {"first": 1500, "repeat": 200},
        "hard": {"first": 2250, "repeat": 300}
      },
      "foes": [
        {"creature": 101489, "level": [20, 26]},
        {"creature": 101490, "level": [28, 30]},
        {"creature": 101481, "level": [20, 26]},
        {"creature": 101491, "level": [20, 26]},
        {"creature": 101492, "level": [28, 30]},
        {"creature": 101493, "level": [24, 26]},
        {"creature": 101494, "level": [24, 26]},
        {"creature": 101495, "level": [14, 24]},
        {"creature": 101458, "level": [24, 26]},
        {"creature": 101460, "level": [24, 26]}
      ],
      "bosses": [
        {"creature": 101496, "level": [24, 30]},
        {"creature": 101497, "level": [28, 30]},
        {"creature": 101498, "level": [28, 30]}
      ],
      "allies": [{"creature": 101499, "level": [20]}, {"creature": 101500, "level": [20]}],
      "wiki": {"en": "Warband of Brothers", "de": "Brudertrupp"}
    },
    "669": {
      "name": "Assault on the Stronghold",
      "kind": "story",
      "order": 6,
      "label": "6",
      "objectives": [
        [1, "Roan Fierceheart in Dalada Uplands will prepare you for the assault.", false],
        [1, "Invade the hierophant's stronghold and rescue the Ebon Vanguard.", false],
        [1, "Defeat the Charr guards and gain control of the siege devourers.", false],
        [
          1,
          "Target archer groups with siege devourers to cover the armored saurus while it breaks down the front gates.",
          false
        ],
        [1, "Free the Ebon Vanguard held captive within the fortress.", false],
        [1, "Defeat Hierophant Burntsoul and all hostile forces.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Vanguard points",
        "normal": {"first": 1000, "repeat": 100},
        "hard": {"first": 1500, "repeat": 150}
      },
      "foes": [
        {"creature": 101033, "level": [28, 30]},
        {"creature": 101032, "level": [28, 30]},
        {"creature": 101034, "level": [28, 30]},
        {"creature": 101501, "level": [28, 30]},
        {"creature": 101036, "level": [28, 30]},
        {"creature": 101481, "level": [20, 26]},
        {"creature": 101491, "level": [20, 26]}
      ],
      "bosses": [{"creature": 101502, "level": [24, 30]}],
      "allies": [
        {"creature": 101503, "level": [20, 20]},
        {"creature": 101503, "level": [20, 20]},
        {"creature": 101504, "level": [28, 28]},
        {"creature": 101505, "level": [20, 20]},
        {"creature": 101506, "level": [20, 20]},
        {"creature": 101500, "level": [20, 20]},
        {"creature": 101507, "level": [20, 20]}
      ],
      "wiki": {"en": "Assault on the Stronghold", "de": "Der Angriff auf die Festung"}
    },
    "670": {
      "name": "Destruction's Depths",
      "kind": "story",
      "order": 10,
      "label": "10",
      "objectives": [
        [
          1,
          "Speak to Jalis Ironhammer when you are ready to face this evil. (disappears after entering the mission)",
          false
        ],
        [1, "Find and reclaim the Central Transfer Chamber", false],
        [1, "Take command of the golems and find the missing Asuran patrol.", false],
        [1, "Rendezvous with the Ebon Vanguard.", false],
        [1, "Clear a path into the depths with the Ebon Vanguard.", false],
        [1, "Continue deeper into the caverns.", false],
        [1, "Fight beside the Norn as they hold off the Destroyers.", false],
        [1, "Travel to the Central Transfer Chamber via the Asura Gate.", false],
        [1, "Clear the Central Transfer Chamber of Destroyers.", false]
      ],
      "rewards": {
        "xp": 2500,
        "points": "Deldrimor points",
        "normal": {"first": 3000, "repeat": 300},
        "hard": {"first": 4500, "repeat": 450}
      },
      "foes": [
        {"creature": 101033, "level": [28, 30]},
        {"creature": 101031, "level": [28, 30]},
        {"creature": 101032, "level": [28, 30]},
        {"creature": 101517, "level": [28, 30]},
        {"creature": 101034, "level": [28, 30]},
        {"creature": 101501, "level": [28, 30]},
        {"creature": 101035, "level": [28, 30]},
        {"creature": 101036, "level": [28, 30]},
        {"creature": 101037, "level": [28, 30]},
        {"creature": 101518, "level": [30, 32]},
        {"creature": 101519, "level": [20, 26]},
        {"creature": 101520, "level": [20, 26]},
        {"creature": 101521, "level": [20, 26]},
        {"creature": 101522, "level": [20, 26]},
        {"creature": 101523, "level": [20, 26]},
        {"creature": 101524, "level": [20, 26]},
        {"creature": 101525, "level": [24]},
        {"creature": 101526, "level": [24]},
        {"creature": 101527, "level": [24]},
        {"creature": 101528, "level": [24]}
      ],
      "bosses": [{"creature": 101529, "level": [28, 30]}, {"creature": 101530, "level": [28, 30]}],
      "allies": [
        {"creature": 101531},
        {"creature": 101532},
        {"creature": 101533},
        {"creature": 101534},
        {"creature": 101535},
        {"creature": 101536},
        {"creature": 101514},
        {"creature": 101537},
        {"creature": 101538},
        {"creature": 101487}
      ],
      "wiki": {"en": "Destruction's Depths", "de": "Die Tiefen der Zerstörung"}
    },
    "673": {
      "name": "A Time for Heroes",
      "kind": "story",
      "order": 11,
      "label": "11",
      "objectives": [[1, "Defeat the Great Destroyer.", false]],
      "rewards": {
        "xp": 2500,
        "points": "Deldrimor points",
        "normal": {"first": 5000, "repeat": 100},
        "hard": {"first": 7500, "repeat": 150}
      },
      "wiki": {"en": "A Time for Heroes", "de": "Eine Zeit für Helden"}
    },
    "722": {
      "name": "Whitefury Rapids",
      "kind": "pvp",
      "wiki": {"en": "Whitefury Rapids", "de": "Wildwasser-Stromschnellen"}
    },
    "723": {"name": "Kysten Shore", "kind": "pvp", "wiki": {"en": "Kysten Shore", "de": "Kysten-Küste"}},
    "724": {"name": "Deepway Ruins", "kind": "pvp", "wiki": {"en": "Deepway Ruins", "de": "Tiefenbach-Ruinen"}},
    "725": {"name": "Plikkup Works", "kind": "pvp", "wiki": {"en": "Plikkup Works", "de": "Plikkup-Werke"}},
    "100004": {
      "name": "The Elite Zaishen Battle",
      "kind": "pvp",
      "outpost": 100004,
      "wiki": {"en": "The Elite Zaishen Battle", "de": "Aufstieg der Helden (Turnier-Karte)"}
    },
    "100005": {
      "name": "Snowball Tournament",
      "kind": "pvp",
      "outpost": 100005,
      "wiki": {"en": "Dwayna Vs Grenth", "de": "Schneeballturnier"}
    }
  }
};
