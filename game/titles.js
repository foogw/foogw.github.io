const GW_TITLES = {
  "titles_": "Kept by hand. Keys are the game's title ids. wiki: its page on each wiki, {en, de} (as locations).",
  "titles": {
    "5": {
      "name": "Kurzick / Luxon",
      "group": "skills",
      "scope": "account",
      "earn": "Kurzick or Luxon faction points transferred to your alliance (Friend of the Kurzicks / Friend of the Luxons: two titles with the same ranks)",
      "skills": "Kurzick rank",
      "note": "Each skill comes in a Kurzick and a Luxon version, powered by its own title; each costs 3,000 of that faction to unlock, for any PvE character.",
      "ranks": [
        {"rank": 1, "points": 100000, "values": [], "unlocks": ["Kurzick / Luxon skills"]},
        {"rank": 2, "points": 250000, "values": [], "unlocks": []},
        {"rank": 3, "points": 400000, "values": [], "unlocks": []},
        {"rank": 4, "points": 550000, "values": [], "unlocks": []},
        {"rank": 5, "points": 875000, "values": [], "unlocks": []},
        {"rank": 6, "points": 1200000, "values": [], "unlocks": []},
        {"rank": 7, "points": 1850000, "values": [], "unlocks": []},
        {"rank": 8, "points": 2500000, "values": [], "unlocks": []},
        {"rank": 9, "points": 3750000, "values": [], "unlocks": []},
        {"rank": 10, "points": 5000000, "values": [], "unlocks": []},
        {"rank": 11, "points": 7500000, "values": [], "unlocks": []},
        {"rank": 12, "points": 10000000, "values": [], "unlocks": []}
      ],
      "campaign": 2,
      "wiki": {"en": "Allegiance rank", "de": "Bündnisbelohnungspunkte-Übertragung"},
      "also": 6
    },
    "15": {
      "name": "Lucky",
      "group": "loot",
      "scope": "account",
      "earn": "Lucky points, from winning festival games and keeping lockpicks",
      "columns": [["Lockpick retention", "%"]],
      "ranks": [
        {"rank": 1, "points": 50000, "values": [2], "unlocks": []},
        {"rank": 2, "points": 100000, "values": [4], "unlocks": []},
        {"rank": 3, "points": 250000, "values": [6], "unlocks": []},
        {"rank": 4, "points": 500000, "values": [8], "unlocks": []},
        {"rank": 5, "points": 1000000, "values": [10], "unlocks": []},
        {"rank": 6, "points": 2500000, "values": [12], "unlocks": []}
      ],
      "campaign": 0,
      "wiki": {"en": "Lucky and Unlucky", "de": "Titel Glückspilz"}
    },
    "17": {
      "name": "Sunspear",
      "group": "skills",
      "scope": "character",
      "earn": "Sunspear promotion points, from killing foes and completing quests and missions in Elona",
      "skills": "Sunspear rank",
      "ranks": [
        {"rank": 1, "points": 50, "values": [], "unlocks": []},
        {"rank": 2, "points": 100, "values": [], "unlocks": []},
        {"rank": 3, "points": 175, "values": [], "unlocks": []},
        {"rank": 4, "points": 300, "values": [], "unlocks": []},
        {"rank": 5, "points": 500, "values": [], "unlocks": []},
        {"rank": 6, "points": 1000, "values": [], "unlocks": []},
        {"rank": 7, "points": 2500, "values": [], "unlocks": []},
        {"rank": 8, "points": 7500, "values": [], "unlocks": []},
        {"rank": 9, "points": 15000, "values": [], "unlocks": []},
        {"rank": 10, "points": 50000, "values": [], "unlocks": []}
      ],
      "campaign": 3,
      "wiki": {"en": "Sunspear rank", "de": "Sonnenspeertitel"}
    },
    "20": {
      "name": "Lightbringer",
      "group": "skills",
      "scope": "character",
      "earn": "Lightbringer points, from killing demons (Margonites, Torment creatures) in Elona",
      "columns": [["Damage vs demons", "%"], ["Damage absorbed", ""]],
      "skills": "Lightbringer rank",
      "effect": "Lightbringer: per rank, +5% damage and 1 damage absorbed against Abaddon's demons.",
      "ranks": [
        {"rank": 1, "points": 100, "values": [5, 1], "unlocks": ["title effect"]},
        {"rank": 2, "points": 300, "values": [10, 2], "unlocks": ["Lightbringer's Gaze"]},
        {"rank": 3, "points": 1000, "values": [15, 3], "unlocks": ["Lightbringer Signet"]},
        {"rank": 4, "points": 2500, "values": [20, 4], "unlocks": []},
        {"rank": 5, "points": 7500, "values": [25, 5], "unlocks": []},
        {"rank": 6, "points": 15000, "values": [30, 6], "unlocks": []},
        {"rank": 7, "points": 25000, "values": [35, 7], "unlocks": []},
        {"rank": 8, "points": 50000, "values": [40, 8], "unlocks": []}
      ],
      "campaign": 3,
      "giver": 830,
      "wiki": {"en": "Lightbringer rank", "de": "Lichtbringertitel"}
    },
    "38": {
      "name": "Asura",
      "group": "skills",
      "scope": "character",
      "earn": "Asura reputation points, from quests, bounties and vanquishing in the Tarnished Coast",
      "columns": [["Max energy", ""]],
      "skills": "Asura rank",
      "effect": "Edification: extra maximum energy in Asura lands (the Tarnished Coast).",
      "ranks": [
        {"rank": 1, "points": 1000, "values": [7], "unlocks": ["title effect"]},
        {"rank": 2, "points": 4000, "values": [9], "unlocks": []},
        {"rank": 3, "points": 8000, "values": [11], "unlocks": ["Asura consumables crafter"]},
        {"rank": 4, "points": 16000, "values": [13], "unlocks": ["Asura weapons"]},
        {"rank": 5, "points": 26000, "values": [15], "unlocks": ["Asuran armor", "goggles"]},
        {"rank": 6, "points": 40000, "values": [15], "unlocks": []},
        {"rank": 7, "points": 56000, "values": [15], "unlocks": []},
        {"rank": 8, "points": 80000, "values": [15], "unlocks": []},
        {"rank": 9, "points": 110000, "values": [15], "unlocks": []},
        {"rank": 10, "points": 160000, "values": [15], "unlocks": []}
      ],
      "campaign": 4,
      "giver": 805,
      "wiki": {"en": "Asura rank", "de": "Asuratitel"}
    },
    "39": {
      "name": "Deldrimor",
      "group": "skills",
      "scope": "character",
      "earn": "Deldrimor reputation points, from quests, bounties and vanquishing in the Depths of Tyria",
      "columns": [["Damage and healing vs Destroyers", ""]],
      "skills": "Deldrimor rank",
      "effect": "Stout-Hearted: each skill you use against a Destroyer deals it this much damage and heals you as much.",
      "ranks": [
        {"rank": 1, "points": 1000, "values": [7], "unlocks": ["title effect"]},
        {"rank": 2, "points": 4000, "values": [9], "unlocks": []},
        {"rank": 3, "points": 8000, "values": [11], "unlocks": ["Deldrimor consumables crafter"]},
        {"rank": 4, "points": 16000, "values": [13], "unlocks": ["Deldrimor weapons"]},
        {"rank": 5, "points": 26000, "values": [15], "unlocks": ["Deldrimor armor", "Warrior Silver Eagle armor"]},
        {"rank": 6, "points": 40000, "values": [15], "unlocks": []},
        {"rank": 7, "points": 56000, "values": [15], "unlocks": []},
        {"rank": 8, "points": 80000, "values": [15], "unlocks": []},
        {"rank": 9, "points": 110000, "values": [15], "unlocks": []},
        {"rank": 10, "points": 160000, "values": [15], "unlocks": []}
      ],
      "campaign": 4,
      "giver": 803,
      "wiki": {"en": "Deldrimor rank", "de": "Deldrimortitel"}
    },
    "40": {
      "name": "Ebon Vanguard",
      "group": "skills",
      "scope": "character",
      "earn": "Ebon Vanguard reputation points, from quests, bounties and vanquishing in the Charr Homelands",
      "columns": [["Armor vs Charr", ""], ["Adrenaline from hitting Charr", "%"]],
      "skills": "Ebon Vanguard rank",
      "effect": "Rebel Yell: armor against Charr and more adrenaline from hitting them; 2 energy for each Charr you kill.",
      "ranks": [
        {"rank": 1, "points": 1000, "values": [6, 40], "unlocks": ["title effect"]},
        {"rank": 2, "points": 4000, "values": [7, 55], "unlocks": []},
        {"rank": 3, "points": 8000, "values": [8, 70], "unlocks": ["Ebon Vanguard consumables crafter"]},
        {"rank": 4, "points": 16000, "values": [9, 85], "unlocks": ["Charrslayer weapons"]},
        {"rank": 5, "points": 26000, "values": [10, 100], "unlocks": ["Monument armor"]},
        {"rank": 6, "points": 40000, "values": [10, 100], "unlocks": []},
        {"rank": 7, "points": 56000, "values": [10, 100], "unlocks": []},
        {"rank": 8, "points": 80000, "values": [10, 100], "unlocks": []},
        {"rank": 9, "points": 110000, "values": [10, 100], "unlocks": []},
        {"rank": 10, "points": 160000, "values": [10, 100], "unlocks": []}
      ],
      "campaign": 4,
      "giver": 802,
      "wiki": {"en": "Ebon Vanguard rank", "de": "Ebon-Vorhut-Titel"}
    },
    "41": {
      "name": "Norn",
      "group": "skills",
      "scope": "character",
      "earn": "Norn reputation points, from quests, bounties and vanquishing in the Far Shiverpeaks",
      "columns": [["Max health", ""]],
      "skills": "Norn rank",
      "effect": "Heart of the Norn: extra maximum health in Norn lands (the Far Shiverpeaks).",
      "ranks": [
        {"rank": 1, "points": 1000, "values": [60], "unlocks": ["title effect"]},
        {"rank": 2, "points": 4000, "values": [70], "unlocks": []},
        {"rank": 3, "points": 8000, "values": [80], "unlocks": ["Norn consumables crafter"]},
        {"rank": 4, "points": 16000, "values": [90], "unlocks": ["Norn weapons"]},
        {"rank": 5, "points": 26000, "values": [100], "unlocks": ["Norn armor"]},
        {"rank": 6, "points": 40000, "values": [100], "unlocks": []},
        {"rank": 7, "points": 56000, "values": [100], "unlocks": []},
        {"rank": 8, "points": 80000, "values": [100], "unlocks": []},
        {"rank": 9, "points": 110000, "values": [100], "unlocks": []},
        {"rank": 10, "points": 160000, "values": [100], "unlocks": []}
      ],
      "campaign": 4,
      "giver": 804,
      "wiki": {"en": "Norn rank", "de": "Norntitel"}
    },
    "45": {
      "name": "Treasure Hunter",
      "group": "loot",
      "scope": "account",
      "earn": "Opening locked chests",
      "columns": [["Salvage bonus", "%"], ["Lockpick retention", "%"]],
      "ranks": [
        {"rank": 1, "points": 100, "values": [3, 3], "unlocks": []},
        {"rank": 2, "points": 250, "values": [6, 6], "unlocks": []},
        {"rank": 3, "points": 550, "values": [9, 9], "unlocks": []},
        {"rank": 4, "points": 1200, "values": [12, 12], "unlocks": []},
        {"rank": 5, "points": 2500, "values": [15, 15], "unlocks": []},
        {"rank": 6, "points": 5000, "values": [18, 18], "unlocks": []},
        {"rank": 7, "points": 10000, "values": [21, 21], "unlocks": []}
      ],
      "campaign": 0,
      "wiki": {"en": "Treasure Hunter", "de": "Schatzjäger-Titel"}
    },
    "46": {
      "name": "Wisdom",
      "group": "loot",
      "scope": "account",
      "earn": "Identifying gold items",
      "columns": [["Salvage bonus", "%"]],
      "ranks": [
        {"rank": 1, "points": 100, "values": [3], "unlocks": []},
        {"rank": 2, "points": 250, "values": [6], "unlocks": []},
        {"rank": 3, "points": 550, "values": [9], "unlocks": []},
        {"rank": 4, "points": 1200, "values": [12], "unlocks": []},
        {"rank": 5, "points": 2500, "values": [15], "unlocks": []},
        {"rank": 6, "points": 5000, "values": [18], "unlocks": []},
        {"rank": 7, "points": 10000, "values": [21], "unlocks": []}
      ],
      "campaign": 0,
      "wiki": {"en": "Wisdom", "de": "Weisheitstitel"}
    }
  },
  "chests_": "Lucky and Unlucky title odds per chest: [points, chance].",
  "chests": [[50, 55], [80, 53.5], [200, 50], [300, 45], [450, 35], [600, 30], [750, 25], [1250, 10]]
};
