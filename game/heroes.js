const GW_HEROES = {
  "heroes_": "Kept by hand. Keys are the game's hero ids. recruit_steps: the quests or missions on the way.",
  "heroes": {
    "1": {
      "name": "Norgu",
      "profession": 5,
      "campaigns": [3],
      "region": 13,
      "recruit": "Dasha Vestibule or Dzagonur Bastion → Brains or Brawn (choose Goren) → The Role of a Lifetime — or, after completing Nightfall: Gain Norgu",
      "recruit_steps": [{"mission": 520}, {"mission": 519}, {"quest": 100837}, {"quest": 101036}, {"quest": 100898}],
      "alternative_to": [2]
    },
    "2": {
      "name": "Goren",
      "profession": 1,
      "campaigns": [3],
      "region": 13,
      "recruit": "Dasha Vestibule or Dzagonur Bastion → Brains or Brawn (choose Norgu) → Goren's Stuff: Part 1 — or, after completing Nightfall: Gain Goren",
      "recruit_steps": [{"mission": 520}, {"mission": 519}, {"quest": 100837}, {"quest": 100906}, {"quest": 100894}],
      "alternative_to": [1]
    },
    "3": {
      "name": "Tahlkora",
      "profession": 3,
      "campaigns": [3],
      "region": 15,
      "recruit": "Big News, Small Package (Nightfall characters), talk to Kormir during Battle Preparations (for others)",
      "recruit_steps": [{"quest": 100834}, {"quest": 100831}]
    },
    "4": {
      "name": "Master of Whispers",
      "profession": 4,
      "campaigns": [3],
      "region": 12,
      "recruit": "To Kill a Demon — or, after completing Nightfall: Gain Master of Whispers",
      "recruit_steps": [{"quest": 101052}, {"quest": 100897}],
      "alternative_to": [12]
    },
    "5": {
      "name": "Acolyte Jin",
      "profession": 2,
      "campaigns": [3],
      "region": 15,
      "recruit": "Student Jin — or, after completing Nightfall: Gain Jin",
      "recruit_steps": [{"quest": 101003}, {"quest": 100895}],
      "alternative_to": [8]
    },
    "6": {
      "name": "Koss",
      "profession": 1,
      "campaigns": [3],
      "region": 15,
      "recruit": "Into Chahbek Village (Nightfall characters), talk to Kormir during Battle Preparations (for others)",
      "recruit_steps": [{"quest": 100925}, {"quest": 100831}]
    },
    "7": {
      "name": "Dunkoro",
      "profession": 3,
      "campaigns": [3],
      "region": 15,
      "recruit": "Leaving a Legacy (Nightfall characters), talk to Kormir during Battle Preparations (for others)",
      "recruit_steps": [{"quest": 100935}, {"quest": 100831}]
    },
    "8": {
      "name": "Acolyte Sousuke",
      "profession": 6,
      "campaigns": [3],
      "region": 15,
      "recruit": "Student Sousuke — or, after completing Nightfall: Gain Sousuke",
      "recruit_steps": [{"quest": 101004}, {"quest": 100900}],
      "alternative_to": [5]
    },
    "9": {
      "name": "Melonni",
      "profession": 10,
      "campaigns": [3],
      "region": 15,
      "recruit": "Signs and Portents (Nightfall characters), talk to Kormir during Battle Preparations (for others)",
      "recruit_steps": [{"quest": 100995}, {"quest": 100831}]
    },
    "10": {
      "name": "Zhed Shadowhoof",
      "profession": 6,
      "campaigns": [3],
      "region": 12,
      "recruit": "Centaur Blackmail",
      "recruit_steps": [{"quest": 100848}]
    },
    "11": {
      "name": "General Morgahn",
      "profession": 9,
      "campaigns": [3],
      "region": 13,
      "recruit": "Grand Court of Sebelkeh",
      "recruit_steps": [{"mission": 521}]
    },
    "12": {
      "name": "Margrid the Sly",
      "profession": 2,
      "campaigns": [3],
      "region": 12,
      "recruit": "No Me, No Kormir — or, after completing Nightfall: Gain Margrid",
      "recruit_steps": [{"quest": 100953}, {"quest": 100896}],
      "alternative_to": [4]
    },
    "13": {
      "name": "Zenmai",
      "profession": 7,
      "campaigns": [2, 3],
      "region": 8,
      "recruit": "Chasing Zenmai",
      "recruit_steps": [{"quest": 100850}]
    },
    "14": {
      "name": "Olias",
      "profession": 4,
      "campaigns": [1, 3],
      "region": 0,
      "recruit": "All for One and One for Justice",
      "recruit_steps": [{"quest": 100821}]
    },
    "15": {
      "name": "Razah",
      "profession": 0,
      "campaigns": [3],
      "region": 16,
      "recruit": "Completion of the Nightfall campaign → Finding a Purpose",
      "recruit_steps": [{"quest": 100884}]
    },
    "16": {
      "name": "M.O.X.",
      "profession": 10,
      "campaigns": [1, 2, 3],
      "recruit": "Talk to M.O.X. in North Kryta Province, Bukdek Byway or Plains of Jarin",
      "recruit_steps": [{"mission": 58}, {"mission": 240}, {"mission": 430}]
    },
    "17": {
      "name": "Keiran Thackeray",
      "profession": 9,
      "campaigns": [1, 4],
      "region": 19,
      "recruit": "Completion of War in Kryta and Hearts of the North",
      "recruit_steps": [{"mission": null}, {"mission": null}]
    },
    "18": {
      "name": "Jora",
      "profession": 1,
      "campaigns": [4],
      "region": 19,
      "recruit": "Curse of the Nornbear",
      "recruit_steps": [{"quest": 100352}]
    },
    "19": {
      "name": "Pyre Fierceshot",
      "profession": 2,
      "campaigns": [4],
      "region": 20,
      "recruit": "Warband of Brothers",
      "recruit_steps": [{"quest": 100455}]
    },
    "20": {
      "name": "Anton",
      "profession": 7,
      "campaigns": [4],
      "region": 20,
      "recruit": "The Missing Vanguard → Failure to Communicate → The Imploding Past → The Assassin's Revenge",
      "recruit_steps": [{"quest": 100443}, {"quest": 100358}, {"quest": 100439}, {"quest": 100422}]
    },
    "21": {
      "name": "Livia",
      "profession": 4,
      "campaigns": [4],
      "region": 17,
      "recruit": "Finding the Bloodstone",
      "recruit_steps": [{"quest": 100362}]
    },
    "22": {
      "name": "Hayda",
      "profession": 9,
      "campaigns": [4],
      "region": 17,
      "recruit": "Frogstomp → Give Peace a Chance",
      "recruit_steps": [{"quest": 100367}, {"quest": 100370}]
    },
    "23": {
      "name": "Kahmu",
      "profession": 10,
      "campaigns": [4],
      "region": 19,
      "recruit": "randomly, by defeating them during The Norn Fighting Tournament",
      "recruit_steps": [{"mission": 700}]
    },
    "24": {
      "name": "Gwen",
      "profession": 5,
      "campaigns": [4],
      "region": 19,
      "recruit": "After watching The First Vision",
      "recruit_steps": [{"mission": null}]
    },
    "25": {
      "name": "Xandra",
      "profession": 8,
      "campaigns": [4],
      "region": 19,
      "recruit": "randomly, by defeating them during The Norn Fighting Tournament",
      "recruit_steps": [{"mission": 700}]
    },
    "26": {
      "name": "Vekk",
      "profession": 6,
      "campaigns": [4],
      "region": 19,
      "recruit": "The Beginning of the End",
      "recruit_steps": [{"quest": 100424}]
    },
    "27": {
      "name": "Ogden Stonehealer",
      "profession": 3,
      "campaigns": [4],
      "region": 19,
      "recruit": "The Beginning of the End",
      "recruit_steps": [{"quest": 100424}]
    },
    "36": {
      "name": "Miku",
      "profession": 7,
      "campaigns": [2],
      "region": 8,
      "recruit": "Winds of Change (completion of the Normal Mode version)",
      "recruit_steps": [{"mission": null}]
    },
    "37": {
      "name": "Zei Ri",
      "profession": 8,
      "campaigns": [2],
      "region": 8,
      "recruit": "Winds of Change (completion of the Hard Mode version)",
      "recruit_steps": [{"mission": null}]
    },
    "38": {
      "name": "Devona",
      "profession": 1,
      "campaigns": [1],
      "region": 7,
      "recruit": "Across the Wall → A Bastion In the North → Long Thought Forgotten → Charr in the Tunnels → The Scourge Beneath (Requires Reforged Mode)",
      "recruit_steps": [
        {"quest": 101108},
        {"quest": 101081},
        {"quest": 101187},
        {"quest": 101129},
        {"quest": 101300},
        {"mission": null}
      ]
    },
    "39": {
      "name": "Ghost of Althea",
      "profession": 5,
      "campaigns": [1],
      "region": 2,
      "recruit": "The Duke's Daughter → Althea's Ashes → Elegy for Those Left Behind → The Cost of Survival → The Dreamer and the Zealot (Requires Reforged Mode)",
      "recruit_steps": [
        {"quest": 101259},
        {"quest": 101110},
        {"quest": 101148},
        {"quest": 101256},
        {"quest": 101258},
        {"mission": null}
      ]
    }
  }
};
