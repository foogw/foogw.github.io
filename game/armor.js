const GW_ARMOR = {
  "materials_": "Keys are the game's item model ids; 100000 and up are ours.",
  "materials": {
    "921": {"name": "Bone"},
    "923": {"name": "Monstrous Claw"},
    "925": {"name": "Bolt of Cloth"},
    "926": {"name": "Bolt of Linen"},
    "927": {"name": "Bolt of Damask"},
    "928": {"name": "Bolt of Silk"},
    "929": {"name": "Pile of Glittering Dust"},
    "930": {"name": "Glob of Ectoplasm"},
    "931": {"name": "Monstrous Eye"},
    "932": {"name": "Monstrous Fang"},
    "933": {"name": "Feather"},
    "934": {"name": "Plant Fiber"},
    "937": {"name": "Ruby"},
    "938": {"name": "Sapphire"},
    "939": {"name": "Tempered Glass Vial"},
    "940": {"name": "Tanned Hide Square"},
    "941": {"name": "Fur Square"},
    "942": {"name": "Leather Square"},
    "943": {"name": "Elonian Leather Square"},
    "944": {"name": "Vial of Ink"},
    "945": {"name": "Obsidian Shard"},
    "946": {"name": "Wood Plank"},
    "948": {"name": "Iron Ingot"},
    "949": {"name": "Steel Ingot"},
    "950": {"name": "Deldrimor Steel Ingot"},
    "951": {"name": "Roll of Parchment"},
    "952": {"name": "Roll of Vellum"},
    "953": {"name": "Scale"},
    "954": {"name": "Chitin Fragment"},
    "955": {"name": "Granite Slab"},
    "6532": {"name": "Amber Chunk"},
    "6533": {"name": "Jadeite Shard"}
  },
  "armor_": "Keys are our numbers. pieces: per slot, [count, material]. at: the crafters (npcs) who make that tier.",
  "armor": {
    "1": {
      "name": "Ancient armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 948], [5, 943]],
            "chest": [[150, 948], [15, 943]],
            "hands": [[50, 948], [5, 943]],
            "legs": [[100, 948], [10, 943]],
            "feet": [[50, 948], [5, 943]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Alte_Rüstung"
    },
    "2": {
      "name": "Asuran armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 949]],
            "chest": [[150, 940], [15, 949]],
            "hands": [[50, 940], [5, 949]],
            "legs": [[100, 940], [10, 949]],
            "feet": [[50, 940], [5, 949]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Asura-Rüstung"
    },
    "3": {
      "name": "Canthan armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2, 4],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [144]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [128]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [139]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 942]],
            "chest": [[75, 925], [12, 942]],
            "hands": [[25, 925], [4, 942]],
            "legs": [[50, 925], [8, 942]],
            "feet": [[25, 925], [4, 942]]
          },
          "at": [93, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Cantha-Rüstung"
    },
    "4": {
      "name": "Deldrimor armor",
      "profession": 7,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 940], [15, 923]],
            "hands": [[50, 940], [5, 950]],
            "legs": [[100, 940], [10, 942]],
            "feet": [[50, 940], [5, 950]]
          },
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Deldrimor-Rüstung"
    },
    "5": {
      "name": "Elite Canthan armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 942]],
            "chest": [[150, 925], [15, 942]],
            "hands": [[50, 925], [5, 942]],
            "legs": [[100, 925], [10, 942]],
            "feet": [[50, 925], [5, 942]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Elite-Cantha-Rüstung"
    },
    "6": {
      "name": "Elite Exotic armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 954], [5, 949]],
            "chest": [[150, 954], [15, 949]],
            "hands": [[50, 954], [5, 949]],
            "legs": [[100, 954], [10, 949]],
            "feet": [[50, 954], [5, 949]]
          },
          "at": [832]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Elite-Exoten-Rüstung"
    },
    "7": {
      "name": "Elite Imperial armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 940], [5, 949]],
            "chest": [[150, 940], [15, 949]],
            "hands": [[50, 940], [5, 949]],
            "legs": [[100, 940], [10, 949]],
            "feet": [[50, 940], [5, 949]]
          },
          "at": [833]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Elite-Kaiser-Rüstung"
    },
    "8": {
      "name": "Elite Kurzick armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 940], [5, 949], [10, 6532]],
            "chest": [[150, 940], [15, 949], [30, 6532]],
            "hands": [[50, 940], [5, 949], [10, 6532]],
            "legs": [[100, 940], [10, 949], [20, 6532]],
            "feet": [[50, 940], [5, 949], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Elite-Kurzick-Rüstung"
    },
    "9": {
      "name": "Elite Luxon armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 940], [5, 949], [10, 6533]],
            "chest": [[150, 940], [15, 949], [30, 6533]],
            "hands": [[50, 940], [5, 949], [10, 6533]],
            "legs": [[100, 940], [10, 949], [20, 6533]],
            "feet": [[50, 940], [5, 949], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Elite-Luxon-Rüstung"
    },
    "10": {
      "name": "Exotic armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 954], [4, 949]],
            "chest": [[75, 954], [12, 949]],
            "hands": [[25, 954], [4, 949]],
            "legs": [[50, 954], [8, 949]],
            "feet": [[25, 954], [4, 949]]
          },
          "at": [834]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Exoten-Rüstung"
    },
    "11": {
      "name": "Imperial armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949]],
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Kaiser-Rüstung"
    },
    "12": {
      "name": "Kurzick armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949], [3, 6532]],
            "chest": [[75, 940], [12, 949], [9, 6532]],
            "hands": [[25, 940], [4, 949], [3, 6532]],
            "legs": [[50, 940], [8, 949], [6, 6532]],
            "feet": [[25, 940], [4, 949], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Kurzick-Rüstung"
    },
    "13": {
      "name": "Luxon armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949], [3, 6533]],
            "chest": [[75, 940], [12, 949], [9, 6533]],
            "hands": [[25, 940], [4, 949], [3, 6533]],
            "legs": [[50, 940], [8, 949], [6, 6533]],
            "feet": [[25, 940], [4, 949], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Luxon-Rüstung"
    },
    "14": {
      "name": "Monument armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 953], [5, 942]],
            "chest": [[150, 953], [15, 942]],
            "hands": [[50, 953], [5, 942]],
            "legs": [[100, 953], [10, 942]],
            "feet": [[50, 953], [5, 942]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Monument-Rüstung"
    },
    "15": {
      "name": "Norn armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 925], [5, 941]],
            "chest": [[150, 925], [15, 941]],
            "hands": [[50, 925], [5, 941]],
            "legs": [[100, 925], [10, 941]],
            "feet": [[50, 925], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Norn-Rüstung"
    },
    "16": {
      "name": "Obsidian armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[15, 930], [15, 945], [50, 925], [5, 950]],
            "chest": [[45, 930], [45, 945], [150, 925], [15, 950]],
            "hands": [[15, 930], [15, 945], [50, 925], [5, 950]],
            "legs": [[30, 930], [30, 945], [100, 925], [10, 950]],
            "feet": [[15, 930], [15, 945], [50, 925], [5, 950]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Obsidian-Rüstung"
    },
    "17": {
      "name": "Seitung armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [146]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [126]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 940]],
            "chest": [[18, 940]],
            "hands": [[6, 940]],
            "legs": [[12, 940]],
            "feet": [[6, 940]]
          },
          "at": [137]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949]],
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Seitung-Rüstung"
    },
    "18": {
      "name": "Shing Jea armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [145]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [127]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [138]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [1, 927]],
            "chest": [[75, 925], [3, 927]],
            "hands": [[25, 925], [1, 927]],
            "legs": [[50, 925], [2, 927]],
            "feet": [[25, 925], [1, 927]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Shing_Jea-Rüstung"
    },
    "19": {
      "name": "Vabbian armor",
      "profession": 7,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[25, 940], [4, 943], [2, 937], [2, 938]],
            "chest": [[75, 940], [12, 943], [6, 937], [6, 938]],
            "hands": [[25, 940], [4, 943], [2, 937], [2, 938]],
            "legs": [[50, 940], [8, 943], [4, 937], [4, 938]],
            "feet": [[25, 940], [4, 943], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Assassine_Vaabi-Rüstung"
    },
    "20": {
      "name": "Ancient armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 943]],
            "chest": [[150, 940], [15, 943]],
            "hands": [[50, 940], [5, 943]],
            "legs": [[100, 940], [10, 943]],
            "feet": [[50, 940], [5, 943]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Alte_Rüstung"
    },
    "21": {
      "name": "Primeval armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 921], [5, 943]],
            "chest": [[150, 921], [15, 943]],
            "hands": [[50, 921], [5, 943]],
            "legs": [[100, 921], [10, 943]],
            "feet": [[50, 921], [5, 943]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Altehrwürdige_Rüstung"
    },
    "22": {
      "name": "Asuran armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 942]],
            "chest": [[150, 940], [15, 942]],
            "hands": [[50, 940], [5, 942]],
            "legs": [[100, 940], [10, 942]],
            "feet": [[50, 940], [5, 942]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Asura-Rüstung"
    },
    "23": {
      "name": "Deldrimor armor",
      "profession": 10,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 30000,
          "pieces": {"chest": [[150, 948], [15, 950]], "legs": [[100, 940], [10, 942]], "feet": [[50, 940], [5, 942]]},
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Deldrimor-Rüstung"
    },
    "24": {
      "name": "Elite Sunspear armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 940], [5, 949]],
            "chest": [[150, 940], [15, 949]],
            "hands": [[50, 940], [5, 949]],
            "legs": [[100, 940], [10, 949]],
            "feet": [[50, 940], [5, 949]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Elite-Sonnenspeer-Rüstung"
    },
    "25": {
      "name": "Elonian armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [3, 4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949]],
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [40, 839, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Elona-Rüstung"
    },
    "26": {
      "name": "Istani armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [100]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [840]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 940], [3, 925]],
            "chest": [[9, 940], [9, 925]],
            "hands": [[3, 940], [3, 925]],
            "legs": [[6, 940], [6, 925]],
            "feet": [[3, 940], [3, 925]]
          },
          "at": [841]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 926]],
            "chest": [[75, 940], [12, 926]],
            "hands": [[25, 940], [4, 926]],
            "legs": [[50, 940], [8, 926]],
            "feet": [[25, 940], [4, 926]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Istan-Rüstung"
    },
    "27": {
      "name": "Monument armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 925], [5, 949]],
            "chest": [[150, 925], [15, 949]],
            "hands": [[50, 925], [5, 949]],
            "legs": [[100, 925], [10, 949]],
            "feet": [[50, 925], [5, 949]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Monument-Rüstung"
    },
    "28": {
      "name": "Norn armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 941]],
            "chest": [[150, 940], [15, 941]],
            "hands": [[50, 940], [5, 941]],
            "legs": [[100, 940], [10, 941]],
            "feet": [[50, 940], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Norn-Rüstung"
    },
    "29": {
      "name": "Obsidian armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[15, 930], [15, 945], [50, 940], [5, 943]],
            "chest": [[45, 930], [45, 945], [150, 940], [15, 943]],
            "hands": [[15, 930], [15, 945], [50, 940], [5, 943]],
            "legs": [[30, 930], [30, 945], [100, 940], [10, 943]],
            "feet": [[15, 930], [15, 945], [50, 940], [5, 943]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Obsidian-Rüstung"
    },
    "30": {
      "name": "Sunspear armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [100]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [840]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 940], [3, 948]],
            "chest": [[9, 940], [9, 948]],
            "hands": [[3, 940], [3, 948]],
            "legs": [[6, 940], [6, 948]],
            "feet": [[3, 940], [3, 948]]
          },
          "at": [841]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949]],
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Sonnenspeer-Rüstung"
    },
    "31": {
      "name": "Vabbian armor",
      "profession": 10,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[25, 925], [4, 943], [2, 937], [2, 938]],
            "chest": [[75, 925], [12, 943], [6, 937], [6, 938]],
            "hands": [[25, 925], [4, 943], [2, 937], [2, 938]],
            "legs": [[50, 925], [8, 943], [4, 937], [4, 938]],
            "feet": [[25, 925], [4, 943], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Derwisch_Vaabi-Rüstung"
    },
    "32": {
      "name": "Ancient armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Alte_Rüstung"
    },
    "33": {
      "name": "Primeval armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [75, 946]],
            "hands": [[50, 925], [25, 946]],
            "legs": [[100, 925], [50, 946]],
            "feet": [[50, 925], [25, 946]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Altehrwürdige_Rüstung"
    },
    "34": {
      "name": "Ascalon armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [146]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [126]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[18, 925]], "hands": [[6, 925]], "legs": [[12, 925]], "feet": [[6, 925]]},
          "at": [137]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 942]],
            "hands": [[25, 925], [4, 942]],
            "legs": [[50, 925], [8, 942]],
            "feet": [[25, 925], [4, 942]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Ascalon-Rüstung"
    },
    "35": {
      "name": "Asuran armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 940], [15, 949]],
            "hands": [[50, 940], [5, 949]],
            "legs": [[100, 940], [10, 949]],
            "feet": [[50, 940], [5, 949]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Asura-Rüstung"
    },
    "36": {
      "name": "Canthan armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [144]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [128]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[18, 925]], "hands": [[6, 925]], "legs": [[12, 925]], "feet": [[6, 925]]},
          "at": [139]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [93]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Cantha-Rüstung"
    },
    "37": {
      "name": "Deldrimor armor",
      "profession": 6,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Deldrimor-Rüstung"
    },
    "38": {
      "name": "Iceforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [109, 176]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 954]],
            "hands": [[25, 925], [4, 954]],
            "legs": [[50, 925], [8, 954]],
            "feet": [[25, 925], [4, 954]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Eisgeschmiedete-Rüstung"
    },
    "39": {
      "name": "Elite Canthan armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Cantha-Rüstung"
    },
    "40": {
      "name": "Elite Iceforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 954]],
            "hands": [[50, 925], [5, 954]],
            "legs": [[100, 925], [10, 954]],
            "feet": [[50, 925], [5, 954]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Eisgeschmiedete-Rüstung"
    },
    "41": {
      "name": "Elite Flameforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 953]],
            "hands": [[50, 925], [5, 953]],
            "legs": [[100, 925], [10, 953]],
            "feet": [[50, 925], [5, 953]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Flammengeschmiedete-Rüstung"
    },
    "42": {
      "name": "Elite Kurzick armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 928], [30, 6532]],
            "hands": [[50, 925], [5, 928], [10, 6532]],
            "legs": [[100, 925], [10, 928], [20, 6532]],
            "feet": [[50, 925], [5, 928], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Kurzick-Rüstung"
    },
    "43": {
      "name": "Elite Luxon armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 928], [30, 6533]],
            "hands": [[50, 925], [5, 928], [10, 6533]],
            "legs": [[100, 925], [10, 928], [20, 6533]],
            "feet": [[50, 925], [5, 928], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Luxon-Rüstung"
    },
    "44": {
      "name": "Elite Sunspear armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Sonnenspeer-Rüstung"
    },
    "45": {
      "name": "Elite Stoneforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 955]],
            "hands": [[50, 925], [5, 955]],
            "legs": [[100, 925], [10, 955]],
            "feet": [[50, 925], [5, 955]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Steingeschmiedete-Rüstung"
    },
    "46": {
      "name": "Elite Stormforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Elite-Sturmgeschmiedete-Rüstung"
    },
    "47": {
      "name": "Flameforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [3, 122]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [4, 176, 109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [124, 172]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 953]],
            "hands": [[25, 925], [4, 953]],
            "legs": [[50, 925], [8, 953]],
            "feet": [[25, 925], [4, 953]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Flammengeschmiedete-Rüstung"
    },
    "48": {
      "name": "Istani armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {
            "chest": [[9, 925], [9, 940]],
            "hands": [[3, 925], [3, 940]],
            "legs": [[6, 925], [6, 940]],
            "feet": [[3, 925], [3, 940]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Istan-Rüstung"
    },
    "49": {
      "name": "Krytan armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Kryta-Rüstung"
    },
    "50": {
      "name": "Kurzick armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928], [9, 6532]],
            "hands": [[25, 925], [4, 928], [3, 6532]],
            "legs": [[50, 925], [8, 928], [6, 6532]],
            "feet": [[25, 925], [4, 928], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Kurzick-Rüstung"
    },
    "51": {
      "name": "Luxon armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928], [9, 6533]],
            "hands": [[25, 925], [4, 928], [3, 6533]],
            "legs": [[50, 925], [8, 928], [6, 6533]],
            "feet": [[25, 925], [4, 928], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Luxon-Rüstung"
    },
    "52": {
      "name": "Monument armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Monument-Rüstung"
    },
    "53": {
      "name": "Norn armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 940], [15, 941]],
            "hands": [[50, 940], [5, 941]],
            "legs": [[100, 940], [10, 941]],
            "feet": [[50, 940], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Norn-Rüstung"
    },
    "54": {
      "name": "Obsidian armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[45, 930], [45, 945], [150, 925], [15, 950]],
            "hands": [[15, 930], [15, 945], [50, 925], [5, 950]],
            "legs": [[30, 930], [30, 945], [100, 925], [10, 950]],
            "feet": [[15, 930], [15, 945], [50, 925], [5, 950]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Obsidian-Rüstung"
    },
    "55": {
      "name": "Shing Jea armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [145]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [127]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[18, 925]], "hands": [[6, 925]], "legs": [[12, 925]], "feet": [[6, 925]]},
          "at": [138]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Shing_Jea-Rüstung"
    },
    "56": {
      "name": "Sunspear armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 50,
          "price": 200,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {
            "chest": [[9, 925], [9, 940]],
            "hands": [[3, 925], [3, 940]],
            "legs": [[6, 925], [6, 940]],
            "feet": [[3, 925], [3, 940]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 942]],
            "hands": [[25, 925], [4, 942]],
            "legs": [[50, 925], [8, 942]],
            "feet": [[25, 925], [4, 942]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Sonnenspeer-Rüstung"
    },
    "57": {
      "name": "Stoneforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [124]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 955]],
            "hands": [[25, 925], [4, 955]],
            "legs": [[50, 925], [8, 955]],
            "feet": [[25, 925], [4, 955]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Steingeschmiedete-Rüstung"
    },
    "58": {
      "name": "Stormforged armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [17]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Sturmgeschmiedete-Rüstung"
    },
    "59": {
      "name": "Tyrian armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [1, 2, 4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [3, 927]],
            "hands": [[25, 925], [1, 927]],
            "legs": [[50, 925], [2, 927]],
            "feet": [[25, 925], [1, 927]]
          },
          "at": [834, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Tyria-Rüstung"
    },
    "60": {
      "name": "Vabbian armor",
      "profession": 6,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[25, 929], [2, 937], [2, 938]],
            "chest": [[75, 925], [12, 926], [6, 937], [6, 938]],
            "hands": [[25, 925], [4, 926], [2, 937], [2, 938]],
            "legs": [[50, 925], [8, 926], [4, 937], [4, 938]],
            "feet": [[25, 925], [4, 926], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier_Vaabi-Rüstung"
    },
    "61": {
      "name": "Ancient armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 948], [5, 943]],
            "chest": [[150, 948], [15, 943]],
            "hands": [[50, 948], [5, 943]],
            "legs": [[100, 948], [10, 943]],
            "feet": [[50, 948], [5, 943]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Alte_Rüstung"
    },
    "62": {
      "name": "Primeval armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 921], [5, 949]],
            "chest": [[150, 921], [15, 949]],
            "hands": [[50, 921], [5, 949]],
            "legs": [[100, 921], [10, 949]],
            "feet": [[50, 921], [5, 949]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Altehrwürdige_Rüstung"
    },
    "63": {
      "name": "Ascalon armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [146]
        },
        {
          "armor": 45,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [126]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 940], [3, 949]],
            "chest": [[9, 940], [9, 949]],
            "hands": [[3, 940], [3, 949]],
            "legs": [[6, 940], [6, 949]],
            "feet": [[3, 940], [3, 949]]
          },
          "at": [137]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949]],
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Ascalon-Rüstung"
    },
    "64": {
      "name": "Asuran armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 948], [5, 949]],
            "chest": [[150, 948], [15, 949]],
            "hands": [[50, 948], [5, 949]],
            "legs": [[100, 948], [10, 949]],
            "feet": [[50, 948], [5, 949]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Asura-Rüstung"
    },
    "65": {
      "name": "Canthan armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 948]],
            "chest": [[3, 948]],
            "hands": [[1, 948]],
            "legs": [[2, 948]],
            "feet": [[1, 948]]
          },
          "at": [144]
        },
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 948]],
            "chest": [[6, 948]],
            "hands": [[2, 948]],
            "legs": [[4, 948]],
            "feet": [[2, 948]]
          },
          "at": [128]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 948]],
            "chest": [[18, 948]],
            "hands": [[6, 948]],
            "legs": [[12, 948]],
            "feet": [[6, 948]]
          },
          "at": [139]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 949]],
            "chest": [[75, 948], [12, 949]],
            "hands": [[25, 948], [4, 949]],
            "legs": [[50, 948], [8, 949]],
            "feet": [[25, 948], [4, 949]]
          },
          "at": [93]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Cantha-Rüstung"
    },
    "66": {
      "name": "Prophecies Ascalon armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 948]],
            "chest": [[3, 948]],
            "hands": [[1, 948]],
            "legs": [[2, 948]],
            "feet": [[1, 948]]
          },
          "at": [3, 122]
        },
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 948]],
            "chest": [[6, 948]],
            "hands": [[2, 948]],
            "legs": [[4, 948]],
            "feet": [[2, 948]]
          },
          "at": [4, 176, 109]
        },
        {
          "armor": 59,
          "price_per_piece": 100,
          "price": 500,
          "pieces": {
            "head": [[3, 948]],
            "chest": [[9, 948]],
            "hands": [[3, 948]],
            "legs": [[6, 948]],
            "feet": [[3, 948]]
          },
          "at": [17]
        },
        {"armor": 59, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 948]]}, "at": [124]},
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[4, 948]],
            "chest": [[12, 948]],
            "hands": [[4, 948]],
            "legs": [[8, 948]],
            "feet": [[4, 948]]
          },
          "at": [172, 78]
        },
        {
          "armor": 71,
          "price_per_piece": 250,
          "price": 1250,
          "pieces": {
            "head": [[8, 948]],
            "chest": [[24, 948]],
            "hands": [[8, 948]],
            "legs": [[16, 948]],
            "feet": [[8, 948]]
          },
          "at": [155]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 941]],
            "chest": [[75, 948], [12, 941]],
            "hands": [[25, 948], [4, 941]],
            "legs": [[50, 948], [8, 941]],
            "feet": [[25, 948], [4, 941]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Charr-Fell-Rüstung"
    },
    "67": {
      "name": "Deldrimor armor",
      "profession": 1,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 948], [15, 950]],
            "hands": [[50, 948], [5, 950]],
            "legs": [[100, 948], [10, 950]],
            "feet": [[50, 948], [5, 950]]
          },
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Deldrimor-Rüstung"
    },
    "68": {
      "name": "Elite Canthan armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [5, 949]],
            "chest": [[150, 948], [15, 949]],
            "hands": [[50, 948], [5, 949]],
            "legs": [[100, 948], [10, 949]],
            "feet": [[50, 948], [5, 949]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Cantha-Rüstung"
    },
    "69": {
      "name": "Elite Charr Hide armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [5, 941]],
            "chest": [[150, 948], [15, 941]],
            "hands": [[50, 948], [5, 941]],
            "legs": [[100, 948], [10, 941]],
            "feet": [[50, 948], [5, 941]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Charr-Fell-Rüstung"
    },
    "70": {
      "name": "Elite Dragon armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [5, 953]],
            "chest": [[150, 948], [15, 953]],
            "hands": [[50, 948], [5, 953]],
            "legs": [[100, 948], [10, 953]],
            "feet": [[50, 948], [5, 953]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Drachenrüstung"
    },
    "71": {
      "name": "Elite Gladiator armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [16, 940]],
            "chest": [[150, 948], [48, 940]],
            "hands": [[50, 948], [16, 940]],
            "legs": [[100, 948], [32, 940]],
            "feet": [[50, 948], [16, 940]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Gladiatoren-Rüstung"
    },
    "72": {
      "name": "Elite Kurzick armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [5, 949], [10, 6532]],
            "chest": [[150, 948], [15, 949], [30, 6532]],
            "hands": [[50, 948], [5, 949], [10, 6532]],
            "legs": [[100, 948], [10, 949], [20, 6532]],
            "feet": [[50, 948], [5, 949], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Kurzick-Rüstung"
    },
    "73": {
      "name": "Elite Luxon armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 953], [50, 954], [10, 6533]],
            "chest": [[150, 953], [150, 954], [30, 6533]],
            "hands": [[50, 953], [50, 954], [10, 6533]],
            "legs": [[100, 953], [100, 954], [20, 6533]],
            "feet": [[50, 953], [50, 954], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Luxon-Rüstung"
    },
    "74": {
      "name": "Elite Platemail armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [5, 950]],
            "chest": [[150, 948], [15, 950]],
            "hands": [[50, 948], [5, 950]],
            "legs": [[100, 948], [10, 950]],
            "feet": [[50, 948], [5, 950]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Plattenpanzer-Rüstung"
    },
    "75": {
      "name": "Elite Sunspear armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [5, 949]],
            "chest": [[150, 948], [15, 949]],
            "hands": [[50, 948], [5, 949]],
            "legs": [[100, 948], [10, 949]],
            "feet": [[50, 948], [5, 949]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Sonnenspeer-Rüstung"
    },
    "76": {
      "name": "Elite Templar armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 948], [5, 950]],
            "chest": [[150, 948], [15, 943]],
            "hands": [[50, 948], [5, 943]],
            "legs": [[100, 948], [10, 943]],
            "feet": [[50, 948], [5, 943]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Elite-Templer-Rüstung"
    },
    "77": {
      "name": "Gladiator armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {"armor": 50, "price_per_piece": 75, "price": 75, "pieces": {"head": [[4, 948]]}, "at": [4]},
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[4, 948]],
            "chest": [[12, 948]],
            "hands": [[4, 948]],
            "legs": [[8, 948]],
            "feet": [[4, 948]]
          },
          "at": [176, 109]
        },
        {
          "armor": 59,
          "price_per_piece": 100,
          "price": 500,
          "pieces": {
            "head": [[6, 948]],
            "chest": [[18, 948]],
            "hands": [[6, 948]],
            "legs": [[12, 948]],
            "feet": [[6, 948]]
          },
          "at": [13]
        },
        {
          "armor": 65,
          "price_per_piece": 100,
          "price": 1000,
          "pieces": {
            "head": [[8, 948]],
            "chest": [[24, 948]],
            "hands": [[8, 948]],
            "legs": [[16, 948]],
            "feet": [[8, 948]]
          },
          "at": [172, 78]
        },
        {
          "armor": 71,
          "price_per_piece": 250,
          "price": 1250,
          "pieces": {
            "head": [[9, 948]],
            "chest": [[27, 948]],
            "hands": [[9, 948]],
            "legs": [[18, 948]],
            "feet": [[9, 948]]
          },
          "at": [155]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [16, 940]],
            "chest": [[75, 948], [48, 940]],
            "hands": [[25, 948], [16, 940]],
            "legs": [[50, 948], [32, 940]],
            "feet": [[25, 948], [16, 940]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Gladiatoren-Rüstung"
    },
    "78": {
      "name": "Istani armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [100]
        },
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [840]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 940], [3, 948]],
            "chest": [[9, 940], [9, 948]],
            "hands": [[3, 940], [3, 948]],
            "legs": [[6, 940], [6, 948]],
            "feet": [[3, 940], [3, 948]]
          },
          "at": [841]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 949]],
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Istan-Rüstung"
    },
    "79": {
      "name": "Krytan armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 71,
          "price_per_piece": 250,
          "price": 1250,
          "pieces": {
            "head": [[9, 948], [3, 949]],
            "chest": [[27, 948], [9, 949]],
            "hands": [[9, 948], [3, 949]],
            "legs": [[18, 948], [6, 949]],
            "feet": [[9, 948], [3, 949]]
          },
          "at": [155]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 949]],
            "chest": [[75, 948], [12, 949]],
            "hands": [[25, 948], [4, 949]],
            "legs": [[50, 948], [8, 949]],
            "feet": [[25, 948], [4, 949]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Kryta-Rüstung"
    },
    "80": {
      "name": "Kurzick armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 949], [3, 6532]],
            "chest": [[75, 948], [12, 949], [9, 6532]],
            "hands": [[25, 948], [4, 949], [3, 6532]],
            "legs": [[50, 948], [8, 949], [6, 6532]],
            "feet": [[25, 948], [4, 949], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Kurzick-Rüstung"
    },
    "81": {
      "name": "Luxon armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 953], [25, 954], [3, 6533]],
            "chest": [[75, 953], [75, 954], [9, 6533]],
            "hands": [[25, 953], [25, 954], [3, 6533]],
            "legs": [[50, 953], [50, 954], [6, 6533]],
            "feet": [[25, 953], [25, 954], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Luxon-Rüstung"
    },
    "82": {
      "name": "Monument armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 954], [5, 949]],
            "chest": [[150, 954], [15, 949]],
            "hands": [[50, 954], [5, 949]],
            "legs": [[100, 954], [10, 949]],
            "feet": [[50, 954], [5, 949]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Monument-Rüstung"
    },
    "83": {
      "name": "Norn armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 948], [3, 932], [2, 923]],
            "chest": [[150, 948], [9, 932], [6, 923]],
            "hands": [[50, 948], [3, 932], [2, 923]],
            "legs": [[100, 948], [6, 932], [4, 923]],
            "feet": [[50, 948], [3, 932], [2, 923]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Norn-Rüstung"
    },
    "84": {
      "name": "Obsidian armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[15, 930], [15, 945], [50, 948], [5, 950]],
            "chest": [[45, 930], [45, 945], [150, 948], [15, 950]],
            "hands": [[15, 930], [15, 945], [50, 948], [5, 950]],
            "legs": [[30, 930], [30, 945], [100, 948], [10, 950]],
            "feet": [[15, 930], [15, 945], [50, 948], [5, 950]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Obsidian-Rüstung"
    },
    "85": {
      "name": "Platemail armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 949]],
            "chest": [[75, 948], [12, 949]],
            "hands": [[25, 948], [4, 949]],
            "legs": [[50, 948], [8, 949]],
            "feet": [[25, 948], [4, 949]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Plattenpanzerrüstung"
    },
    "86": {
      "name": "Shing Jea armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [145]
        },
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [127]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [138]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [1, 927]],
            "chest": [[75, 925], [3, 927]],
            "hands": [[25, 925], [1, 927]],
            "legs": [[50, 925], [2, 927]],
            "feet": [[25, 925], [1, 927]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Shing_Jea-Rüstung"
    },
    "87": {
      "name": "Silver Eagle armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 933], [5, 950]],
            "chest": [[150, 933], [15, 950]],
            "hands": [[50, 933], [5, 950]],
            "legs": [[100, 933], [10, 950]],
            "feet": [[50, 933], [5, 950]]
          },
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Silberadler-Rüstung"
    },
    "88": {
      "name": "Sunspear armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 948]],
            "chest": [[3, 948]],
            "hands": [[1, 948]],
            "legs": [[2, 948]],
            "feet": [[1, 948]]
          },
          "at": [100]
        },
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 948]],
            "chest": [[6, 948]],
            "hands": [[2, 948]],
            "legs": [[4, 948]],
            "feet": [[2, 948]]
          },
          "at": [840]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 940], [3, 948]],
            "chest": [[9, 940], [9, 948]],
            "hands": [[3, 940], [3, 948]],
            "legs": [[6, 940], [6, 948]],
            "feet": [[3, 940], [3, 948]]
          },
          "at": [841]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 949]],
            "chest": [[75, 948], [12, 949]],
            "hands": [[25, 948], [4, 949]],
            "legs": [[50, 948], [8, 949]],
            "feet": [[25, 948], [4, 949]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Sonnenspeer-Rüstung"
    },
    "89": {
      "name": "Templar armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 949]],
            "chest": [[75, 948], [12, 942]],
            "hands": [[25, 948], [4, 942]],
            "legs": [[50, 948], [8, 942]],
            "feet": [[25, 948], [4, 942]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Templer-Rüstung"
    },
    "90": {
      "name": "Tyrian armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1, 2, 4],
      "tiers": [
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[4, 948]],
            "chest": [[12, 948]],
            "hands": [[4, 948]],
            "legs": [[8, 948]],
            "feet": [[4, 948]]
          },
          "at": [172, 78]
        },
        {
          "armor": 71,
          "price_per_piece": 250,
          "price": 1250,
          "pieces": {
            "head": [[8, 948]],
            "chest": [[24, 948]],
            "hands": [[8, 948]],
            "legs": [[16, 948]],
            "feet": [[8, 948]]
          },
          "at": [842, 155]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 949]],
            "chest": [[75, 948], [12, 949]],
            "hands": [[25, 948], [4, 949]],
            "legs": [[50, 948], [8, 949]],
            "feet": [[25, 948], [4, 949]]
          },
          "at": [44, 834, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Tyria-Rüstung"
    },
    "91": {
      "name": "Vabbian armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[25, 948], [4, 926], [2, 937], [2, 938]],
            "chest": [[75, 948], [12, 926], [6, 937], [6, 938]],
            "hands": [[25, 948], [4, 926], [2, 937], [2, 938]],
            "legs": [[50, 948], [8, 926], [4, 937], [4, 938]],
            "feet": [[25, 948], [4, 926], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Vaabi-Rüstung"
    },
    "92": {
      "name": "Wyvern armor",
      "profession": 1,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[4, 948]],
            "chest": [[12, 948]],
            "hands": [[4, 948]],
            "legs": [[8, 948]],
            "feet": [[4, 948]]
          },
          "at": [109]
        },
        {
          "armor": 59,
          "price_per_piece": 100,
          "price": 500,
          "pieces": {
            "head": [[6, 948]],
            "chest": [[18, 948]],
            "hands": [[6, 948]],
            "legs": [[12, 948]],
            "feet": [[6, 948]]
          },
          "at": [124]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[8, 948]],
            "chest": [[24, 948]],
            "hands": [[8, 948]],
            "legs": [[16, 948]],
            "feet": [[8, 948]]
          },
          "at": [172, 78]
        },
        {
          "armor": 71,
          "price_per_piece": 250,
          "price": 1250,
          "pieces": {
            "head": [[9, 948]],
            "chest": [[27, 948]],
            "hands": [[9, 948]],
            "legs": [[18, 948]],
            "feet": [[9, 948]]
          },
          "at": [155]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 948], [4, 953]],
            "chest": [[75, 948], [12, 953]],
            "hands": [[25, 948], [4, 953]],
            "legs": [[50, 948], [8, 953]],
            "feet": [[25, 948], [4, 953]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Krieger_Wyvernrüstung"
    },
    "93": {
      "name": "Ancient armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 943]],
            "chest": [[150, 940], [15, 943]],
            "hands": [[50, 940], [5, 943]],
            "legs": [[100, 940], [10, 943]],
            "feet": [[50, 940], [5, 943]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Alte_Rüstung"
    },
    "94": {
      "name": "Primeval armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 941]],
            "chest": [[150, 925], [15, 941]],
            "hands": [[50, 925], [5, 941]],
            "legs": [[100, 925], [10, 941]],
            "feet": [[50, 925], [5, 941]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Altehrwürdige_Rüstung"
    },
    "95": {
      "name": "Ascalon armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [146]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [126]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[18, 925]], "hands": [[6, 925]], "legs": [[12, 925]], "feet": [[6, 925]]},
          "at": [137]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Ascalon-Rüstung"
    },
    "96": {
      "name": "Asuran armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 925], [5, 928]],
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Asura-Rüstung"
    },
    "97": {
      "name": "Canthan armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [144]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [128]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [139]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 928]],
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [93]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Cantha-Rüstung"
    },
    "98": {
      "name": "Deldrimor armor",
      "profession": 5,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 30000,
          "pieces": {"chest": [[150, 925], [15, 928]], "legs": [[100, 925], [10, 928]], "feet": [[50, 925], [5, 928]]},
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Deldrimor-Rüstung"
    },
    "99": {
      "name": "Elite Canthan armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 928]],
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Cantha-Rüstung"
    },
    "100": {
      "name": "Elite Elegant armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Elegant-Rüstung"
    },
    "101": {
      "name": "Elite Kurzick armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 940], [5, 928], [10, 6532]],
            "chest": [[150, 940], [15, 928], [30, 6532]],
            "hands": [[50, 940], [5, 928], [10, 6532]],
            "legs": [[100, 940], [10, 928], [20, 6532]],
            "feet": [[50, 940], [5, 928], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Kurzick-Rüstung"
    },
    "102": {
      "name": "Elite Luxon armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 928], [10, 6533]],
            "chest": [[150, 925], [15, 928], [30, 6533]],
            "hands": [[50, 925], [5, 928], [10, 6533]],
            "legs": [[100, 925], [10, 928], [20, 6533]],
            "feet": [[50, 925], [5, 928], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Luxon-Rüstung"
    },
    "103": {
      "name": "Elite Rogue armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 943]],
            "hands": [[50, 925], [5, 943]],
            "legs": [[100, 925], [10, 943]],
            "feet": [[50, 925], [5, 943]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Schurken-Rüstung"
    },
    "104": {
      "name": "Elite Sunspear armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 928]],
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Sonnenspeer-Rüstung"
    },
    "105": {
      "name": "Elite Noble armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Vornehme-Rüstung"
    },
    "106": {
      "name": "Elite Enchanter armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 929]],
            "hands": [[50, 925], [5, 929]],
            "legs": [[100, 925], [10, 929]],
            "feet": [[50, 925], [5, 929]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Elite-Zauberkundigen-Rüstung"
    },
    "107": {
      "name": "Courtly armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [109, 176]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[9, 925]], "feet": [[3, 925]]},
          "at": [18]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Höfische_Rüstung"
    },
    "108": {
      "name": "Istani armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 940], [3, 925]],
            "chest": [[9, 940], [9, 925]],
            "hands": [[3, 940], [3, 925]],
            "legs": [[6, 940], [6, 925]],
            "feet": [[3, 940], [3, 925]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 942]],
            "chest": [[75, 940], [12, 942]],
            "hands": [[25, 940], [4, 942]],
            "legs": [[50, 940], [8, 942]],
            "feet": [[25, 940], [4, 942]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Istan-Rüstung"
    },
    "109": {
      "name": "Krytan armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Kryta-Rüstung"
    },
    "110": {
      "name": "Kurzick armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 928], [3, 6532]],
            "chest": [[75, 940], [12, 928], [9, 6532]],
            "hands": [[25, 940], [4, 928], [3, 6532]],
            "legs": [[50, 940], [8, 928], [6, 6532]],
            "feet": [[25, 940], [4, 928], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Kurzick-Rüstung"
    },
    "111": {
      "name": "Luxon armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 928], [3, 6533]],
            "chest": [[75, 925], [12, 928], [9, 6533]],
            "hands": [[25, 925], [4, 928], [3, 6533]],
            "legs": [[50, 925], [8, 928], [6, 6533]],
            "feet": [[25, 925], [4, 928], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Luxon-Rüstung"
    },
    "112": {
      "name": "Monument armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 925], [5, 928]],
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Monument-Rüstung"
    },
    "113": {
      "name": "Norn armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 925], [5, 941]],
            "chest": [[150, 925], [15, 941]],
            "hands": [[50, 925], [5, 941]],
            "legs": [[100, 925], [10, 941]],
            "feet": [[50, 925], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Norn-Rüstung"
    },
    "114": {
      "name": "Obsidian armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[45, 930], [45, 945], [150, 925], [15, 943]],
            "hands": [[15, 930], [15, 945], [50, 925], [5, 943]],
            "legs": [[30, 930], [30, 945], [100, 925], [10, 943]],
            "feet": [[15, 930], [15, 945], [50, 925], [5, 943]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Obsidian-Rüstung"
    },
    "115": {
      "name": "Performer armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [17]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Schausteller-Rüstung"
    },
    "116": {
      "name": "Rogue armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [3, 122]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [4, 176, 109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [124, 172]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 942]],
            "hands": [[25, 925], [4, 942]],
            "legs": [[50, 925], [8, 942]],
            "feet": [[25, 925], [4, 942]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Schurken-Rüstung"
    },
    "117": {
      "name": "Shing Jea armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [145]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [127]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [138]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 928]],
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Shing_Jea-Rüstung"
    },
    "118": {
      "name": "Sunspear armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 925], [3, 940]],
            "chest": [[9, 925], [9, 940]],
            "hands": [[3, 925], [3, 940]],
            "legs": [[6, 925], [6, 940]],
            "feet": [[3, 925], [3, 940]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 928]],
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Sonnenspeer-Rüstung"
    },
    "119": {
      "name": "Tyrian armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1, 2, 4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [834, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Tyria-Rüstung"
    },
    "120": {
      "name": "Vabbian armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[25, 925], [4, 943], [2, 937], [2, 938]],
            "chest": [[75, 925], [12, 943], [6, 937], [6, 938]],
            "hands": [[25, 925], [4, 943], [2, 937], [2, 938]],
            "legs": [[50, 925], [8, 943], [4, 937], [4, 938]],
            "feet": [[25, 925], [4, 943], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Vaabi-Rüstung"
    },
    "121": {
      "name": "Enchanter armor",
      "profession": 5,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [124]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 929]],
            "hands": [[25, 925], [4, 929]],
            "legs": [[50, 925], [8, 929]],
            "feet": [[25, 925], [4, 929]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer_Zauberkundigen-Rüstung"
    },
    "122": {
      "name": "Ancient armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Alte_Rüstung"
    },
    "123": {
      "name": "Primeval armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 925], [6, 923], [6, 932]],
            "hands": [[50, 925], [2, 923], [2, 932]],
            "legs": [[100, 925], [4, 923], [4, 932]],
            "feet": [[50, 925], [2, 923], [2, 932]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Altehrwürdige_Rüstung"
    },
    "124": {
      "name": "Ascalon armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [146]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [126]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[18, 925]], "hands": [[6, 925]], "legs": [[12, 925]], "feet": [[6, 925]]},
          "at": [137]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Ascalon-Rüstung"
    },
    "125": {
      "name": "Asuran armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 925], [15, 942]],
            "hands": [[50, 925], [5, 942]],
            "legs": [[100, 925], [10, 942]],
            "feet": [[50, 925], [5, 942]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Asura-Rüstung"
    },
    "126": {
      "name": "Canthan armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [144]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [128]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [139]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 925], [3, 927]],
            "hands": [[25, 925], [1, 927]],
            "legs": [[50, 925], [2, 927]],
            "feet": [[25, 925], [1, 927]]
          },
          "at": [93]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Cantha-Rüstung"
    },
    "127": {
      "name": "Deldrimor armor",
      "profession": 3,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Deldrimor-Rüstung"
    },
    "128": {
      "name": "Dragon armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 929]],
            "hands": [[2, 929]],
            "legs": [[4, 929]],
            "feet": [[2, 929]]
          },
          "at": [109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 500,
          "pieces": {
            "head": [[3, 929]],
            "chest": [[9, 929]],
            "hands": [[3, 929]],
            "legs": [[6, 929]],
            "feet": [[3, 929]]
          },
          "at": [17]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[4, 929]],
            "chest": [[12, 929]],
            "hands": [[4, 929]],
            "legs": [[8, 929]],
            "feet": [[4, 929]]
          },
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1250,
          "pieces": {
            "head": [[8, 929]],
            "chest": [[24, 929]],
            "hands": [[8, 929]],
            "legs": [[16, 929]],
            "feet": [[8, 929]]
          },
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 951], [4, 933]],
            "chest": [[75, 951], [12, 933]],
            "hands": [[25, 951], [4, 933]],
            "legs": [[50, 951], [8, 933]],
            "feet": [[25, 951], [4, 933]]
          },
          "at": [44]
        },
        {"armor": 60, "price_per_piece": 800, "price": 800, "pieces": {"head": [[25, 951], [4, 933]]}, "at": [95]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Drachen-Rüstung"
    },
    "129": {
      "name": "Elite Canthan armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Elite-Cantha-Rüstung"
    },
    "130": {
      "name": "Elite Woven armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 940]],
            "hands": [[50, 925], [5, 940]],
            "legs": [[100, 925], [10, 940]],
            "feet": [[50, 925], [5, 940]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Elite-Geflochtene-Rüstung"
    },
    "131": {
      "name": "Elite Saintly armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Elite-Heiligen-Rüstung"
    },
    "132": {
      "name": "Elite Kurzick armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944], [10, 6532]],
            "chest": [[150, 925], [15, 927], [30, 6532]],
            "hands": [[50, 925], [5, 927], [10, 6532]],
            "legs": [[100, 925], [10, 927], [20, 6532]],
            "feet": [[50, 925], [5, 927], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Elite-Kurzick-Rüstung"
    },
    "133": {
      "name": "Elite Luxon armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944], [10, 6533]],
            "chest": [[150, 925], [15, 944], [30, 6533]],
            "hands": [[50, 925], [5, 944], [10, 6533]],
            "legs": [[100, 925], [10, 944], [20, 6533]],
            "feet": [[50, 925], [5, 944], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Elite-Luxon-Rüstung"
    },
    "134": {
      "name": "Elite Judge armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 925], [15, 950]],
            "hands": [[50, 925], [5, 950]],
            "legs": [[100, 925], [10, 950]],
            "feet": [[50, 925], [5, 950]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Elite-Richter-Rüstung"
    },
    "135": {
      "name": "Elite Sunspear armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Elite-Sonnenspeer-Rüstung"
    },
    "136": {
      "name": "Flowing armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 8000,
          "price": 32000,
          "pieces": {
            "chest": [[150, 952], [15, 933]],
            "hands": [[50, 952], [5, 933]],
            "legs": [[100, 952], [10, 933]],
            "feet": [[50, 952], [5, 933]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Fließende-Rüstung"
    },
    "137": {
      "name": "Woven armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 925]], "hands": [[1, 925]], "legs": [[2, 925]], "feet": [[1, 925]]},
          "at": [3, 122]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [4, 176, 109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [124, 172]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 940]],
            "hands": [[25, 925], [4, 940]],
            "legs": [[50, 925], [8, 940]],
            "feet": [[25, 925], [4, 940]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Geflochtene-Rüstung"
    },
    "138": {
      "name": "Sacred armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[6, 925]], "feet": [[3, 925]]},
          "at": [17]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Geweihte-Rüstung"
    },
    "139": {
      "name": "Istani armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[9, 925], [9, 934]],
            "hands": [[3, 925], [3, 934]],
            "legs": [[6, 925], [6, 934]],
            "feet": [[3, 925], [3, 934]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [3, 944]],
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Istan-Rüstung"
    },
    "140": {
      "name": "Krytan armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Kryta-Rüstung"
    },
    "141": {
      "name": "Kurzick armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 925], [6, 927], [9, 6532]],
            "hands": [[25, 925], [2, 927], [3, 6532]],
            "legs": [[50, 925], [4, 927], [6, 6532]],
            "feet": [[25, 925], [2, 927], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Kurzick-Rüstung"
    },
    "142": {
      "name": "Labyrinthine armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 8000,
          "price": 40000,
          "pieces": {
            "head": [[50, 952], [5, 933]],
            "chest": [[150, 952], [15, 933]],
            "hands": [[50, 952], [5, 933]],
            "legs": [[100, 952], [10, 933]],
            "feet": [[50, 952], [5, 933]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Labyrinth-Rüstung"
    },
    "143": {
      "name": "Luxon armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 925], [12, 944], [9, 6533]],
            "hands": [[25, 925], [4, 944], [3, 6533]],
            "legs": [[50, 925], [8, 944], [6, 6533]],
            "feet": [[25, 925], [4, 944], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Luxon-Rüstung"
    },
    "144": {
      "name": "Monument armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 925], [15, 927]],
            "hands": [[50, 925], [5, 927]],
            "legs": [[100, 925], [10, 927]],
            "feet": [[50, 925], [5, 927]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Monument-Rüstung"
    },
    "145": {
      "name": "Norn armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 940], [15, 941]],
            "hands": [[50, 940], [5, 941]],
            "legs": [[100, 940], [10, 941]],
            "feet": [[50, 940], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Norn-Rüstung"
    },
    "146": {
      "name": "Obsidian armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[45, 930], [45, 945], [150, 925], [15, 940]],
            "hands": [[15, 930], [15, 945], [50, 925], [5, 940]],
            "legs": [[30, 930], [30, 945], [100, 925], [10, 940]],
            "feet": [[15, 930], [15, 945], [50, 925], [5, 940]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Obsidian-Rüstung"
    },
    "147": {
      "name": "Shing Jea armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [145]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [127]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [138]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Shing_Jea-Rüstung"
    },
    "148": {
      "name": "Sunspear armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[9, 925], [9, 942]],
            "hands": [[3, 925], [3, 942]],
            "legs": [[6, 925], [6, 942]],
            "feet": [[3, 925], [3, 942]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [3, 944]],
            "chest": [[75, 925], [12, 942]],
            "hands": [[25, 925], [4, 942]],
            "legs": [[50, 925], [8, 942]],
            "feet": [[25, 925], [4, 942]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Sonnenspeer-Rüstung"
    },
    "149": {
      "name": "Star armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 500,
          "pieces": {
            "head": [[3, 929]],
            "chest": [[9, 929]],
            "hands": [[3, 929]],
            "legs": [[6, 929]],
            "feet": [[3, 929]]
          },
          "at": [124]
        },
        {
          "armor": 60,
          "price_per_piece": 800,
          "price": 4000,
          "pieces": {
            "head": [[25, 951], [4, 933]],
            "chest": [[75, 951], [12, 933]],
            "hands": [[25, 951], [4, 933]],
            "legs": [[50, 951], [8, 933]],
            "feet": [[25, 951], [4, 933]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Sternen-Rüstung"
    },
    "150": {
      "name": "Tyrian armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1, 2, 4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [3, 927]],
            "hands": [[25, 925], [1, 927]],
            "legs": [[50, 925], [2, 927]],
            "feet": [[25, 925], [1, 927]]
          },
          "at": [834, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Tyria-Rüstung"
    },
    "151": {
      "name": "Vabbian armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[5, 951], [3, 944], [2, 937], [2, 938]],
            "chest": [[75, 925], [12, 926], [6, 937], [6, 938]],
            "hands": [[25, 925], [4, 926], [2, 937], [2, 938]],
            "legs": [[50, 925], [8, 926], [4, 937], [4, 938]],
            "feet": [[25, 925], [4, 926], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Vaabi-Rüstung"
    },
    "152": {
      "name": "Censor armor",
      "profession": 3,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 925]], "hands": [[2, 925]], "legs": [[4, 925]], "feet": [[2, 925]]},
          "at": [109, 176]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 925]], "hands": [[3, 925]], "legs": [[9, 925]], "feet": [[3, 925]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 925]], "hands": [[4, 925]], "legs": [[8, 925]], "feet": [[4, 925]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 925]], "hands": [[8, 925]], "legs": [[16, 925]], "feet": [[8, 925]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 949]],
            "hands": [[25, 925], [4, 949]],
            "legs": [[50, 925], [8, 949]],
            "feet": [[25, 925], [4, 949]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mönch_Zensoren-Rüstung"
    },
    "153": {
      "name": "Ancient armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 940], [6, 932], [6, 923]],
            "hands": [[50, 940], [2, 932], [2, 923]],
            "legs": [[100, 940], [4, 932], [4, 923]],
            "feet": [[50, 940], [2, 932], [2, 923]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Alte_Rüstung"
    },
    "154": {
      "name": "Primeval armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 953], [75, 954]],
            "hands": [[50, 953], [25, 954]],
            "legs": [[100, 953], [50, 954]],
            "feet": [[50, 953], [25, 954]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Altehrwürdige_Rüstung"
    },
    "155": {
      "name": "Ascalon armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 940]], "hands": [[1, 940]], "legs": [[2, 940]], "feet": [[1, 940]]},
          "at": [146]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [126]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[18, 940]], "hands": [[6, 940]], "legs": [[12, 940]], "feet": [[6, 940]]},
          "at": [137]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 942]],
            "hands": [[25, 940], [4, 942]],
            "legs": [[50, 940], [8, 942]],
            "feet": [[25, 940], [4, 942]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Ascalon-Rüstung"
    },
    "156": {
      "name": "Asuran armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 953], [9, 932], [6, 923]],
            "hands": [[50, 953], [3, 932], [2, 923]],
            "legs": [[100, 953], [6, 932], [4, 923]],
            "feet": [[50, 953], [3, 932], [2, 923]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Asura-Rüstung"
    },
    "157": {
      "name": "Canthan armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 921]],
            "hands": [[1, 921]],
            "legs": [[2, 921]],
            "feet": [[1, 921]]
          },
          "at": [144]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 921]],
            "hands": [[2, 921]],
            "legs": [[4, 921]],
            "feet": [[2, 921]]
          },
          "at": [128]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[18, 921]],
            "hands": [[6, 921]],
            "legs": [[12, 921]],
            "feet": [[6, 921]]
          },
          "at": [139]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 921], [3, 931], [3, 932], [3, 923]],
            "hands": [[25, 921], [1, 931], [1, 932], [1, 923]],
            "legs": [[50, 921], [2, 931], [2, 932], [2, 923]],
            "feet": [[25, 921], [1, 931], [1, 932], [1, 923]]
          },
          "at": [93]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Cantha-Rüstung"
    },
    "158": {
      "name": "Deldrimor armor",
      "profession": 4,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 940], [15, 942]],
            "hands": [[50, 940], [5, 942]],
            "legs": [[100, 940], [10, 928]],
            "feet": [[50, 921], [5, 942]]
          },
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Deldrimor-Rüstung"
    },
    "159": {
      "name": "Elite Canthan armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 921], [3, 931], [3, 923], [3, 932]],
            "hands": [[50, 921], [1, 931], [1, 923], [1, 932]],
            "legs": [[100, 921], [2, 931], [2, 923], [2, 932]],
            "feet": [[50, 921], [1, 931], [1, 923], [1, 932]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Cantha-Rüstung"
    },
    "160": {
      "name": "Elite Profane armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [15, 950]],
            "hands": [[50, 940], [5, 950]],
            "legs": [[100, 940], [10, 950]],
            "feet": [[50, 940], [5, 950]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Gottlos-Rüstung"
    },
    "161": {
      "name": "Elite Cabal armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [150, 921]],
            "hands": [[50, 940], [50, 921]],
            "legs": [[100, 940], [100, 921]],
            "feet": [[50, 940], [50, 921]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Kabalen-Rüstung"
    },
    "162": {
      "name": "Elite Kurzick armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944], [10, 6532]],
            "chest": [[150, 940], [15, 949], [30, 6532]],
            "hands": [[50, 940], [5, 949], [10, 6532]],
            "legs": [[100, 940], [10, 949], [20, 6532]],
            "feet": [[50, 940], [5, 949], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Kurzick-Rüstung"
    },
    "163": {
      "name": "Elite Luxon armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944], [10, 6533]],
            "chest": [[150, 953], [15, 932], [30, 6533]],
            "hands": [[50, 953], [5, 932], [10, 6533]],
            "legs": [[100, 953], [10, 932], [20, 6533]],
            "feet": [[50, 953], [5, 932], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Luxon-Rüstung"
    },
    "164": {
      "name": "Elite Scar Pattern armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 8000,
          "price": 32000,
          "pieces": {
            "chest": [[150, 952], [15, 933]],
            "hands": [[50, 952], [5, 933]],
            "legs": [[100, 952], [10, 933]],
            "feet": [[50, 952], [5, 933]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Narbenmuster-Rüstung"
    },
    "165": {
      "name": "Elite Necrotic armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [15, 954]],
            "hands": [[50, 940], [5, 954]],
            "legs": [[100, 940], [10, 954]],
            "feet": [[50, 940], [5, 954]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Nekrotik-Rüstung"
    },
    "166": {
      "name": "Elite Cultist armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [15, 943]],
            "hands": [[50, 940], [5, 943]],
            "legs": [[100, 940], [10, 943]],
            "feet": [[50, 940], [5, 943]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Sektierer-Rüstung"
    },
    "167": {
      "name": "Elite Sunspear armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 940], [15, 943]],
            "hands": [[50, 940], [5, 943]],
            "legs": [[100, 940], [10, 943]],
            "feet": [[50, 940], [5, 943]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Elite-Sonnenspeer-Rüstung"
    },
    "168": {
      "name": "Fanatic armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [109, 176]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[9, 940]], "feet": [[3, 940]]},
          "at": [18]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 942]],
            "hands": [[25, 940], [4, 942]],
            "legs": [[50, 940], [8, 942]],
            "feet": [[25, 940], [4, 942]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Fanatiker-Rüstung"
    },
    "169": {
      "name": "Profane armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[6, 940]], "feet": [[3, 940]]},
          "at": [124]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Gottlos-Rüstung"
    },
    "170": {
      "name": "Istani armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[9, 940], [9, 953]],
            "hands": [[3, 940], [3, 953]],
            "legs": [[6, 940], [6, 953]],
            "feet": [[3, 940], [3, 953]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [3, 944]],
            "chest": [[75, 940], [75, 953]],
            "hands": [[25, 940], [25, 953]],
            "legs": [[50, 940], [50, 953]],
            "feet": [[25, 940], [25, 953]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Istan-Rüstung"
    },
    "171": {
      "name": "Cabal armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 940]], "hands": [[1, 940]], "legs": [[2, 940]], "feet": [[1, 940]]},
          "at": [3, 122]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [4, 176, 109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[6, 940]], "feet": [[3, 940]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [124, 172]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [75, 921]],
            "hands": [[25, 940], [25, 921]],
            "legs": [[50, 940], [50, 921]],
            "feet": [[25, 940], [25, 921]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Kabalen-Rüstung"
    },
    "172": {
      "name": "Krytan armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 954], [12, 942]],
            "hands": [[25, 954], [4, 942]],
            "legs": [[50, 954], [8, 942]],
            "feet": [[25, 954], [4, 942]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Kryta-Rüstung"
    },
    "173": {
      "name": "Kurzick armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 940], [12, 949], [9, 6532]],
            "hands": [[25, 940], [4, 949], [3, 6532]],
            "legs": [[50, 940], [8, 949], [6, 6532]],
            "feet": [[25, 940], [4, 949], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Kurzick-Rüstung"
    },
    "174": {
      "name": "Luxon armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 953], [12, 932], [9, 6533]],
            "hands": [[25, 953], [4, 932], [3, 6533]],
            "legs": [[50, 953], [8, 932], [6, 6533]],
            "feet": [[25, 953], [4, 932], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Luxon-Rüstung"
    },
    "175": {
      "name": "Monument armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 940], [15, 949]],
            "hands": [[50, 940], [5, 949]],
            "legs": [[100, 940], [10, 949]],
            "feet": [[50, 940], [5, 949]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Monument-Rüstung"
    },
    "176": {
      "name": "Scar Pattern armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 929]], "hands": [[2, 929]], "legs": [[4, 929]], "feet": [[2, 929]]},
          "at": [109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 929]], "hands": [[3, 929]], "legs": [[6, 929]], "feet": [[3, 929]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 929]], "hands": [[4, 929]], "legs": [[8, 929]], "feet": [[4, 929]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 929]], "hands": [[8, 929]], "legs": [[16, 929]], "feet": [[8, 929]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 800,
          "price": 3200,
          "pieces": {
            "chest": [[75, 951], [12, 933]],
            "hands": [[25, 951], [4, 933]],
            "legs": [[50, 951], [8, 933]],
            "feet": [[25, 951], [4, 933]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Narbenmuster-Rüstung"
    },
    "177": {
      "name": "Necrotic armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [109]
        },
        {
          "armor": 39,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[6, 940]], "feet": [[3, 940]]},
          "at": [13]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [172, 78]
        },
        {
          "armor": 51,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 954]],
            "hands": [[25, 940], [4, 954]],
            "legs": [[50, 940], [8, 954]],
            "feet": [[25, 940], [4, 954]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Nekrotik-Rüstung"
    },
    "178": {
      "name": "Norn armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[10, 951], [5, 944]],
            "chest": [[150, 940], [9, 941], [6, 932]],
            "hands": [[50, 940], [3, 941], [2, 932]],
            "legs": [[100, 940], [6, 941], [4, 932]],
            "feet": [[50, 940], [3, 941], [2, 932]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Norn-Rüstung"
    },
    "179": {
      "name": "Obsidian armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[45, 930], [45, 945], [150, 940], [15, 943]],
            "hands": [[15, 930], [15, 945], [50, 940], [5, 943]],
            "legs": [[30, 930], [30, 945], [100, 940], [10, 943]],
            "feet": [[15, 930], [15, 945], [50, 940], [5, 943]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Obsidian-Rüstung"
    },
    "180": {
      "name": "Shing Jea armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [145]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [127]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[18, 940]],
            "hands": [[6, 940]],
            "legs": [[12, 940]],
            "feet": [[6, 940]]
          },
          "at": [138]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [4, 944]],
            "chest": [[75, 940], [75, 921]],
            "hands": [[25, 940], [25, 921]],
            "legs": [[50, 940], [50, 921]],
            "feet": [[25, 940], [25, 921]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Shing_Jea-Rüstung"
    },
    "181": {
      "name": "Sunspear armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 929]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [100]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 929]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [840]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 929]],
            "chest": [[9, 940], [9, 933]],
            "hands": [[3, 940], [3, 933]],
            "legs": [[6, 940], [6, 933]],
            "feet": [[3, 940], [3, 933]]
          },
          "at": [841]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[5, 951], [3, 944]],
            "chest": [[75, 940], [75, 933]],
            "hands": [[25, 940], [25, 933]],
            "legs": [[50, 940], [50, 933]],
            "feet": [[25, 940], [25, 933]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Sonnenspeer-Rüstung"
    },
    "182": {
      "name": "Tyrian armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [1, 2, 4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 948], [12, 942]],
            "hands": [[25, 948], [4, 942]],
            "legs": [[50, 948], [8, 942]],
            "feet": [[25, 948], [4, 942]]
          },
          "at": [834, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Tyria-Rüstung"
    },
    "183": {
      "name": "Vabbian armor",
      "profession": 4,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[5, 951], [3, 944], [2, 937], [2, 938]],
            "chest": [[75, 940], [12, 926], [6, 937], [6, 938]],
            "hands": [[25, 940], [4, 926], [2, 937], [2, 938]],
            "legs": [[50, 940], [8, 926], [4, 937], [4, 938]],
            "feet": [[25, 940], [4, 926], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant_Vaabi-Rüstung"
    },
    "184": {
      "name": "Ancient armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 948], [15, 943]],
            "hands": [[50, 948], [5, 943]],
            "legs": [[100, 948], [10, 943]],
            "feet": [[50, 948], [5, 943]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Alte_Rüstung"
    },
    "185": {
      "name": "Primeval armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 948], [15, 949]],
            "hands": [[50, 948], [5, 949]],
            "legs": [[100, 948], [10, 949]],
            "feet": [[50, 948], [5, 949]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Altehrwürdige_Rüstung"
    },
    "186": {
      "name": "Asuran armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 940], [15, 942]],
            "hands": [[50, 940], [5, 942]],
            "legs": [[100, 940], [10, 942]],
            "feet": [[50, 940], [5, 942]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Asura-Rüstung"
    },
    "187": {
      "name": "Deldrimor armor",
      "profession": 9,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 30000,
          "pieces": {"chest": [[150, 940], [15, 942]], "legs": [[100, 940], [10, 942]], "feet": [[50, 940], [5, 942]]},
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Deldrimor-Rüstung"
    },
    "188": {
      "name": "Elite Sunspear armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 948], [15, 943]],
            "hands": [[50, 948], [5, 943]],
            "legs": [[100, 948], [10, 943]],
            "feet": [[50, 948], [5, 943]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Elite-Sonnenspeer-Rüstung"
    },
    "189": {
      "name": "Elonian armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [3, 4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 948], [12, 942]],
            "hands": [[25, 948], [4, 942]],
            "legs": [[50, 948], [8, 942]],
            "feet": [[25, 948], [4, 942]]
          },
          "at": [40, 839, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Elona-Rüstung"
    },
    "190": {
      "name": "Istani armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 940]], "hands": [[1, 940]], "legs": [[2, 940]], "feet": [[1, 940]]},
          "at": [100]
        },
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [840]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {
            "chest": [[9, 940], [9, 925]],
            "hands": [[3, 940], [3, 925]],
            "legs": [[6, 940], [6, 925]],
            "feet": [[3, 940], [3, 925]]
          },
          "at": [841]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 942]],
            "hands": [[25, 940], [4, 942]],
            "legs": [[50, 940], [8, 942]],
            "feet": [[25, 940], [4, 942]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Istan-Rüstung"
    },
    "191": {
      "name": "Monument armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 948], [15, 942]],
            "hands": [[50, 948], [5, 942]],
            "legs": [[100, 948], [10, 942]],
            "feet": [[50, 948], [5, 942]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Monument-Rüstung"
    },
    "192": {
      "name": "Norn armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 10000,
          "price": 40000,
          "pieces": {
            "chest": [[150, 940], [15, 941]],
            "hands": [[50, 940], [5, 941]],
            "legs": [[100, 940], [10, 941]],
            "feet": [[50, 940], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Norn-Rüstung"
    },
    "193": {
      "name": "Obsidian armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[15, 930], [15, 945], [50, 929], [5, 955]],
            "chest": [[45, 930], [45, 945], [150, 948], [15, 950]],
            "hands": [[15, 930], [15, 945], [50, 948], [5, 950]],
            "legs": [[30, 930], [30, 945], [100, 948], [10, 950]],
            "feet": [[15, 930], [15, 945], [50, 948], [5, 950]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Obsidian-Rüstung"
    },
    "194": {
      "name": "Sunspear armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 35,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 948]], "hands": [[1, 948]], "legs": [[2, 948]], "feet": [[1, 948]]},
          "at": [100]
        },
        {
          "armor": 50,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 948]], "hands": [[2, 948]], "legs": [[4, 948]], "feet": [[2, 948]]},
          "at": [840]
        },
        {
          "armor": 65,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {
            "chest": [[9, 948], [9, 940]],
            "hands": [[3, 948], [3, 940]],
            "legs": [[6, 948], [6, 940]],
            "feet": [[3, 948], [3, 940]]
          },
          "at": [841]
        },
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 948], [12, 949]],
            "hands": [[25, 948], [4, 949]],
            "legs": [[50, 948], [8, 949]],
            "feet": [[25, 948], [4, 949]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Sonnenspeer-Rüstung"
    },
    "195": {
      "name": "Vabbian armor",
      "profession": 9,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 80,
          "price_per_piece": 5000,
          "price": 20000,
          "pieces": {
            "chest": [[75, 948], [12, 943], [6, 937], [6, 938]],
            "hands": [[25, 948], [4, 943], [2, 937], [2, 938]],
            "legs": [[50, 948], [8, 943], [4, 937], [4, 938]],
            "feet": [[25, 948], [4, 943], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon_Vaabi-Rüstung"
    },
    "196": {
      "name": "Ancient armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 925], [5, 926]],
            "chest": [[150, 925], [15, 926]],
            "hands": [[50, 925], [5, 926]],
            "legs": [[100, 925], [10, 926]],
            "feet": [[50, 925], [5, 926]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Alte_Rüstung"
    },
    "197": {
      "name": "Asuran armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 925], [5, 944]],
            "chest": [[150, 925], [15, 944]],
            "hands": [[50, 925], [5, 944]],
            "legs": [[100, 925], [10, 944]],
            "feet": [[50, 925], [5, 944]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Asura-Rüstung"
    },
    "198": {
      "name": "Canthan armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2, 4],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [144]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [128]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [139]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 949]],
            "chest": [[75, 925], [12, 949]],
            "hands": [[25, 925], [4, 949]],
            "legs": [[50, 925], [8, 949]],
            "feet": [[25, 925], [4, 949]]
          },
          "at": [93, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Cantha-Rüstung"
    },
    "199": {
      "name": "Deldrimor armor",
      "profession": 8,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 30000,
          "pieces": {"chest": [[150, 925], [15, 950]], "legs": [[100, 953], [10, 941]], "feet": [[50, 940], [5, 942]]},
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Deldrimor-Rüstung"
    },
    "200": {
      "name": "Elite Canthan armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 944]],
            "chest": [[150, 925], [15, 944]],
            "hands": [[50, 925], [5, 944]],
            "legs": [[100, 925], [10, 944]],
            "feet": [[50, 925], [5, 944]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Elite-Cantha-Rüstung"
    },
    "201": {
      "name": "Elite Exotic armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 928]],
            "chest": [[150, 925], [15, 928]],
            "hands": [[50, 925], [5, 928]],
            "legs": [[100, 925], [10, 928]],
            "feet": [[50, 925], [5, 928]]
          },
          "at": [832]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Elite-Exoten-Rüstung"
    },
    "202": {
      "name": "Elite Imperial armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 940], [50, 921]],
            "chest": [[150, 940], [150, 921]],
            "hands": [[50, 940], [50, 921]],
            "legs": [[100, 940], [100, 921]],
            "feet": [[50, 940], [50, 921]]
          },
          "at": [833]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Elite-Kaiser-Rüstung"
    },
    "203": {
      "name": "Elite Kurzick armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 940], [5, 944], [10, 6532]],
            "chest": [[150, 940], [15, 944], [30, 6532]],
            "hands": [[50, 940], [5, 944], [10, 6532]],
            "legs": [[100, 940], [10, 944], [20, 6532]],
            "feet": [[50, 940], [5, 944], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Elite-Kurzick-Rüstung"
    },
    "204": {
      "name": "Elite Luxon armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 944], [10, 6533]],
            "chest": [[150, 925], [15, 944], [30, 6533]],
            "hands": [[50, 925], [5, 944], [10, 6533]],
            "legs": [[100, 925], [10, 944], [20, 6533]],
            "feet": [[50, 925], [5, 944], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Elite-Luxon-Rüstung"
    },
    "205": {
      "name": "Exotic armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 928]],
            "chest": [[75, 925], [12, 928]],
            "hands": [[25, 925], [4, 928]],
            "legs": [[50, 925], [8, 928]],
            "feet": [[25, 925], [4, 928]]
          },
          "at": [834]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Exoten-Rüstung"
    },
    "206": {
      "name": "Imperial armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [25, 921]],
            "chest": [[75, 940], [75, 921]],
            "hands": [[25, 940], [25, 921]],
            "legs": [[50, 940], [50, 921]],
            "feet": [[25, 940], [25, 921]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Kaiser-Rüstung"
    },
    "207": {
      "name": "Kurzick armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 944], [3, 6532]],
            "chest": [[75, 940], [12, 944], [9, 6532]],
            "hands": [[25, 940], [4, 944], [3, 6532]],
            "legs": [[50, 940], [8, 944], [6, 6532]],
            "feet": [[25, 940], [4, 944], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Kurzick-Rüstung"
    },
    "208": {
      "name": "Luxon armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 944], [3, 6533]],
            "chest": [[75, 925], [12, 944], [9, 6533]],
            "hands": [[25, 925], [4, 944], [3, 6533]],
            "legs": [[50, 925], [8, 944], [6, 6533]],
            "feet": [[25, 925], [4, 944], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Luxon-Rüstung"
    },
    "209": {
      "name": "Monument armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 944]],
            "chest": [[150, 940], [15, 944]],
            "hands": [[50, 940], [5, 944]],
            "legs": [[100, 940], [10, 944]],
            "feet": [[50, 940], [5, 944]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Monument-Rüstung"
    },
    "210": {
      "name": "Norn armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 941]],
            "chest": [[150, 940], [15, 941]],
            "hands": [[50, 940], [5, 941]],
            "legs": [[100, 940], [10, 941]],
            "feet": [[50, 940], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Norn-Rüstung"
    },
    "211": {
      "name": "Obsidian armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[15, 930], [15, 945], [50, 925], [5, 944]],
            "chest": [[45, 930], [45, 945], [150, 925], [15, 944]],
            "hands": [[15, 930], [15, 945], [50, 925], [5, 944]],
            "legs": [[30, 930], [30, 945], [100, 925], [10, 944]],
            "feet": [[15, 930], [15, 945], [50, 925], [5, 944]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Obsidian-Rüstung"
    },
    "212": {
      "name": "Seitung armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [146]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [126]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 940]],
            "chest": [[18, 940]],
            "hands": [[6, 940]],
            "legs": [[12, 940]],
            "feet": [[6, 940]]
          },
          "at": [137]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 923]],
            "chest": [[75, 940], [12, 923]],
            "hands": [[25, 940], [4, 923]],
            "legs": [[50, 940], [8, 923]],
            "feet": [[25, 940], [4, 923]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Seitung-Rüstung"
    },
    "213": {
      "name": "Shing Jea armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 15,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [145]
        },
        {
          "armor": 30,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [127]
        },
        {
          "armor": 45,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [138]
        },
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 942]],
            "chest": [[75, 925], [12, 942]],
            "hands": [[25, 925], [4, 942]],
            "legs": [[50, 925], [8, 942]],
            "feet": [[25, 925], [4, 942]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Shing_Jea-Rüstung"
    },
    "214": {
      "name": "Vabbian armor",
      "profession": 8,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 60,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[25, 940], [4, 928], [2, 937], [2, 938]],
            "chest": [[75, 940], [12, 928], [6, 937], [6, 938]],
            "hands": [[25, 940], [4, 928], [2, 937], [2, 938]],
            "legs": [[50, 940], [8, 928], [4, 937], [4, 938]],
            "feet": [[25, 940], [4, 928], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Ritualist_Vaabi-Rüstung"
    },
    "215": {
      "name": "Ancient armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 943]],
            "chest": [[150, 940], [15, 943]],
            "hands": [[50, 940], [5, 943]],
            "legs": [[100, 940], [10, 943]],
            "feet": [[50, 940], [5, 943]]
          },
          "at": [21]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Alte_Rüstung"
    },
    "216": {
      "name": "Primeval armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 921], [5, 941]],
            "chest": [[150, 921], [15, 941]],
            "hands": [[50, 921], [5, 941]],
            "legs": [[100, 921], [10, 941]],
            "feet": [[50, 921], [5, 941]]
          },
          "at": [837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Altehrwürdige_Rüstung"
    },
    "217": {
      "name": "Ascalon armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 940]], "hands": [[1, 940]], "legs": [[2, 940]], "feet": [[1, 940]]},
          "at": [146]
        },
        {
          "armor": 35,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [126]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[18, 940]], "hands": [[6, 940]], "legs": [[12, 940]], "feet": [[6, 940]]},
          "at": [137]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 942]],
            "hands": [[25, 940], [4, 942]],
            "legs": [[50, 940], [8, 942]],
            "feet": [[25, 940], [4, 942]]
          },
          "at": [95]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Ascalon-Rüstung"
    },
    "218": {
      "name": "Asuran armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 942]],
            "chest": [[150, 940], [15, 942]],
            "hands": [[50, 940], [5, 942]],
            "legs": [[100, 940], [10, 942]],
            "feet": [[50, 940], [5, 942]]
          },
          "at": [130]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Asura-Rüstung"
    },
    "219": {
      "name": "Studded Leather armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 49,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[6, 940]], "feet": [[3, 940]]},
          "at": [124]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [172, 78]
        },
        {
          "armor": 61,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 949]],
            "hands": [[25, 940], [4, 949]],
            "legs": [[50, 940], [8, 949]],
            "feet": [[25, 940], [4, 949]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Beschlagene_Leder-Rüstung"
    },
    "220": {
      "name": "Canthan armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [144]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [128]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 925]],
            "chest": [[18, 925]],
            "hands": [[6, 925]],
            "legs": [[12, 925]],
            "feet": [[6, 925]]
          },
          "at": [139]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 941]],
            "chest": [[75, 925], [12, 941]],
            "hands": [[25, 925], [4, 941]],
            "legs": [[50, 925], [8, 941]],
            "feet": [[25, 925], [4, 941]]
          },
          "at": [93]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Cantha-Rüstung"
    },
    "221": {
      "name": "Deldrimor armor",
      "profession": 2,
      "kind": "pieces",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 30000,
          "pieces": {"chest": [[150, 940], [15, 942]], "legs": [[100, 940], [10, 927]], "feet": [[50, 940], [5, 942]]},
          "at": [36]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Deldrimor-Rüstung"
    },
    "222": {
      "name": "Druid armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [109]
        },
        {
          "armor": 49,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[6, 940]], "feet": [[3, 940]]},
          "at": [17]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [172, 78]
        },
        {
          "armor": 61,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [75, 946]],
            "hands": [[25, 940], [25, 946]],
            "legs": [[50, 940], [50, 946]],
            "feet": [[25, 940], [25, 946]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Druiden-Rüstung"
    },
    "223": {
      "name": "Elite Studded Leather armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [15, 950]],
            "hands": [[50, 940], [5, 950]],
            "legs": [[100, 940], [10, 950]],
            "feet": [[50, 940], [5, 950]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Beschlagene_Leder-Rüstung"
    },
    "224": {
      "name": "Elite Canthan armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 953], [5, 941]],
            "chest": [[150, 953], [15, 941]],
            "hands": [[50, 953], [5, 941]],
            "legs": [[100, 953], [10, 941]],
            "feet": [[50, 953], [5, 941]]
          },
          "at": [831]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Cantha-Rüstung"
    },
    "225": {
      "name": "Elite Druid armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [150, 946]],
            "hands": [[50, 940], [50, 946]],
            "legs": [[100, 940], [100, 946]],
            "feet": [[50, 940], [50, 946]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Druiden-Rüstung"
    },
    "226": {
      "name": "Elite Kurzick armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 926], [10, 6532]],
            "chest": [[150, 925], [15, 926], [30, 6532]],
            "hands": [[50, 925], [5, 926], [10, 6532]],
            "legs": [[100, 925], [10, 926], [20, 6532]],
            "feet": [[50, 925], [5, 926], [10, 6532]]
          },
          "at": [170]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Kurzick-Rüstung"
    },
    "227": {
      "name": "Elite Drakescale armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [15, 953]],
            "hands": [[50, 940], [5, 953]],
            "legs": [[100, 940], [10, 953]],
            "feet": [[50, 940], [5, 953]]
          },
          "at": [117]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Lindwurmschuppen-Rüstung"
    },
    "228": {
      "name": "Elite Luxon armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 953], [50, 954], [10, 6533]],
            "chest": [[150, 953], [150, 954], [30, 6533]],
            "hands": [[50, 953], [50, 954], [10, 6533]],
            "legs": [[100, 953], [100, 954], [20, 6533]],
            "feet": [[50, 953], [50, 954], [10, 6533]]
          },
          "at": [107]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Luxon-Rüstung"
    },
    "229": {
      "name": "Elite Fur-Lined armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[150, 940], [15, 941]],
            "hands": [[50, 940], [5, 941]],
            "legs": [[100, 940], [10, 941]],
            "feet": [[50, 940], [5, 941]]
          },
          "at": [162]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Pelzverbrämte-Rüstung"
    },
    "230": {
      "name": "Elite Sunspear armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 75000,
          "pieces": {
            "head": [[50, 925], [5, 943]],
            "chest": [[150, 925], [15, 943]],
            "hands": [[50, 925], [5, 943]],
            "legs": [[100, 925], [10, 943]],
            "feet": [[50, 925], [5, 943]]
          },
          "at": [838]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Elite-Sonnenspeer-Rüstung"
    },
    "231": {
      "name": "Istani armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [100]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [840]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 940], [3, 921]],
            "chest": [[9, 940], [9, 921]],
            "hands": [[3, 940], [3, 921]],
            "legs": [[6, 940], [6, 921]],
            "feet": [[3, 940], [3, 921]]
          },
          "at": [841]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 942]],
            "chest": [[75, 940], [12, 942]],
            "hands": [[25, 940], [4, 942]],
            "legs": [[50, 940], [8, 942]],
            "feet": [[25, 940], [4, 942]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Istan-Rüstung"
    },
    "232": {
      "name": "Krytan armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1, 2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 921], [25, 940]],
            "chest": [[75, 921], [75, 940]],
            "hands": [[25, 921], [25, 940]],
            "legs": [[50, 921], [50, 940]],
            "feet": [[25, 921], [25, 940]]
          },
          "at": [835]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Kryta-Rüstung"
    },
    "233": {
      "name": "Kurzick armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [4, 926], [3, 6532]],
            "chest": [[75, 925], [12, 926], [9, 6532]],
            "hands": [[25, 925], [4, 926], [3, 6532]],
            "legs": [[50, 925], [8, 926], [6, 6532]],
            "feet": [[25, 925], [4, 926], [3, 6532]]
          },
          "at": [84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Kurzick-Rüstung"
    },
    "234": {
      "name": "Drakescale armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [176, 109]
        },
        {
          "armor": 49,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[6, 940]], "feet": [[3, 940]]},
          "at": [13]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [172, 78]
        },
        {
          "armor": 61,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 940], [12, 953]],
            "hands": [[25, 940], [4, 953]],
            "legs": [[50, 940], [8, 953]],
            "feet": [[25, 940], [4, 953]]
          },
          "at": [44]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Lindwurmschuppen-Rüstung"
    },
    "235": {
      "name": "Luxon armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 953], [25, 954], [3, 6533]],
            "chest": [[75, 953], [75, 954], [9, 6533]],
            "hands": [[25, 953], [25, 954], [3, 6533]],
            "legs": [[50, 953], [50, 954], [6, 6533]],
            "feet": [[25, 953], [25, 954], [3, 6533]]
          },
          "at": [31]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Luxon-Rüstung"
    },
    "236": {
      "name": "Monument armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 942]],
            "chest": [[150, 940], [15, 942]],
            "hands": [[50, 940], [5, 942]],
            "legs": [[100, 940], [10, 942]],
            "feet": [[50, 940], [5, 942]]
          },
          "at": [836]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Monument-Rüstung"
    },
    "237": {
      "name": "Norn armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 10000,
          "price": 50000,
          "pieces": {
            "head": [[50, 940], [5, 941]],
            "chest": [[150, 940], [15, 941]],
            "hands": [[50, 940], [5, 941]],
            "legs": [[100, 940], [10, 941]],
            "feet": [[50, 940], [5, 941]]
          },
          "at": [72]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Norn-Rüstung"
    },
    "238": {
      "name": "Obsidian armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [0],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 15000,
          "price": 60000,
          "pieces": {
            "chest": [[45, 930], [45, 945], [150, 940], [15, 941]],
            "hands": [[15, 930], [15, 945], [50, 940], [5, 941]],
            "legs": [[30, 930], [30, 945], [100, 940], [10, 941]],
            "feet": [[15, 930], [15, 945], [50, 940], [5, 941]]
          },
          "at": [635]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Obsidian-Rüstung"
    },
    "239": {
      "name": "Fur-Lined armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 80,
          "pieces": {"chest": [[3, 940]], "hands": [[1, 940]], "legs": [[2, 940]], "feet": [[1, 940]]},
          "at": [3, 122]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {"chest": [[6, 940]], "hands": [[2, 940]], "legs": [[4, 940]], "feet": [[2, 940]]},
          "at": [4, 176, 109]
        },
        {
          "armor": 49,
          "price_per_piece": 100,
          "price": 400,
          "pieces": {"chest": [[9, 940]], "hands": [[3, 940]], "legs": [[6, 940]], "feet": [[3, 940]]},
          "at": [13]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 800,
          "pieces": {"chest": [[12, 940]], "hands": [[4, 940]], "legs": [[8, 940]], "feet": [[4, 940]]},
          "at": [172, 78]
        },
        {
          "armor": 61,
          "price_per_piece": 250,
          "price": 1000,
          "pieces": {"chest": [[24, 940]], "hands": [[8, 940]], "legs": [[16, 940]], "feet": [[8, 940]]},
          "at": [155]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [4, 941]],
            "chest": [[75, 940], [12, 941]],
            "hands": [[25, 940], [4, 941]],
            "legs": [[50, 940], [8, 941]],
            "feet": [[25, 940], [4, 941]]
          },
          "at": [45]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Pelzverbrämte-Rüstung"
    },
    "240": {
      "name": "Shing Jea armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [2],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 940]],
            "chest": [[3, 940]],
            "hands": [[1, 940]],
            "legs": [[2, 940]],
            "feet": [[1, 940]]
          },
          "at": [145]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 300,
          "pieces": {
            "head": [[2, 940]],
            "chest": [[6, 940]],
            "hands": [[2, 940]],
            "legs": [[4, 940]],
            "feet": [[2, 940]]
          },
          "at": [127]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[6, 940]],
            "chest": [[18, 940]],
            "hands": [[6, 940]],
            "legs": [[12, 940]],
            "feet": [[6, 940]]
          },
          "at": [138]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 940], [25, 946]],
            "chest": [[75, 940], [75, 946]],
            "hands": [[25, 940], [25, 946]],
            "legs": [[50, 940], [50, 946]],
            "feet": [[25, 940], [25, 946]]
          },
          "at": [94]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Shing_Jea-Rüstung"
    },
    "241": {
      "name": "Sunspear armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 25,
          "price_per_piece": 20,
          "price": 100,
          "pieces": {
            "head": [[1, 925]],
            "chest": [[3, 925]],
            "hands": [[1, 925]],
            "legs": [[2, 925]],
            "feet": [[1, 925]]
          },
          "at": [100]
        },
        {
          "armor": 40,
          "price_per_piece": 75,
          "price": 375,
          "pieces": {
            "head": [[2, 925]],
            "chest": [[6, 925]],
            "hands": [[2, 925]],
            "legs": [[4, 925]],
            "feet": [[2, 925]]
          },
          "at": [840]
        },
        {
          "armor": 55,
          "price_per_piece": 200,
          "price": 1000,
          "pieces": {
            "head": [[3, 925], [3, 954]],
            "chest": [[9, 925], [9, 954]],
            "hands": [[3, 925], [3, 954]],
            "legs": [[6, 925], [6, 954]],
            "feet": [[3, 925], [3, 954]]
          },
          "at": [841]
        },
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 5000,
          "pieces": {
            "head": [[25, 925], [25, 954]],
            "chest": [[75, 925], [75, 954]],
            "hands": [[25, 925], [25, 954]],
            "legs": [[50, 925], [50, 954]],
            "feet": [[25, 925], [25, 954]]
          },
          "at": [40, 839]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Sonnenspeer-Rüstung"
    },
    "242": {
      "name": "Tyrian armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [1, 2, 4],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 1000,
          "price": 4000,
          "pieces": {
            "chest": [[75, 925], [12, 926]],
            "hands": [[25, 925], [4, 926]],
            "legs": [[50, 925], [8, 926]],
            "feet": [[25, 925], [4, 926]]
          },
          "at": [834, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Tyria-Rüstung"
    },
    "243": {
      "name": "Vabbian armor",
      "profession": 2,
      "kind": "set",
      "campaigns": [3],
      "tiers": [
        {
          "armor": 70,
          "price_per_piece": 5000,
          "price": 25000,
          "pieces": {
            "head": [[25, 925], [4, 943], [2, 937], [2, 938]],
            "chest": [[75, 925], [12, 943], [6, 937], [6, 938]],
            "hands": [[25, 925], [4, 943], [2, 937], [2, 938]],
            "legs": [[50, 925], [8, 943], [4, 937], [4, 938]],
            "feet": [[25, 925], [4, 943], [2, 937], [2, 938]]
          },
          "at": [163]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer_Vaabi-Rüstung"
    },
    "244": {
      "name": "Third Eye",
      "profession": 6,
      "kind": "headgear",
      "campaigns": [1, 4],
      "tiers": [
        {"armor": 15, "price_per_piece": 20, "price": 20, "pieces": {"head": [[1, 929]]}, "at": [3, 122]},
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 929]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 929]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 929]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 929]]}, "at": [155]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier-Kopfschmuck"
    },
    "245": {
      "name": "Stone Eye",
      "profession": 6,
      "kind": "headgear",
      "campaigns": [1, 4],
      "tiers": [
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 929]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 929]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 929]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 929]]}, "at": [155]},
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 1000,
          "pieces": {"head": [[25, 929], [4, 955]]},
          "at": [44, 45, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier-Kopfschmuck"
    },
    "246": {
      "name": "Eyes",
      "profession": 6,
      "kind": "headgear",
      "campaigns": [1, 4],
      "tiers": [
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 929]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 929]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 929]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 929]]}, "at": [155]},
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 1000,
          "pieces": {"head": [[25, 929], [25, 948]]},
          "at": [44, 45, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier-Kopfschmuck"
    },
    "247": {
      "name": "Auras",
      "profession": 6,
      "kind": "headgear",
      "campaigns": [2],
      "tiers": [
        {"armor": 15, "price_per_piece": 20, "price": 20, "pieces": {"head": [[1, 929]]}, "at": [146, 145, 144]},
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 929]]}, "at": [126, 127, 128]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[6, 929]]}, "at": [137, 138, 139]},
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 1000,
          "pieces": {"head": [[25, 929], [4, 939]]},
          "at": [93, 94, 95, 835, 834, 31, 84]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier-Kopfschmuck"
    },
    "248": {
      "name": "Eyes",
      "profession": 6,
      "kind": "headgear",
      "campaigns": [3],
      "tiers": [
        {"armor": 15, "price_per_piece": 20, "price": 20, "pieces": {"head": [[1, 929]]}, "at": [100]},
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 929]]}, "at": [840]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[6, 929]]}, "at": [841]},
        {
          "armor": 60,
          "price_per_piece": 1000,
          "price": 1000,
          "pieces": {"head": [[25, 929]]},
          "at": [40, 839, 21, 837]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier-Kopfschmuck"
    },
    "249": {
      "name": "Discreet Mask",
      "profession": 5,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 15, "price_per_piece": 20, "price": 20, "pieces": {"head": [[1, 925]]}, "at": [3, 122]},
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 60, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 929]]}, "at": [44]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer-Kopfschmuck"
    },
    "250": {
      "name": "Imposing Mask",
      "profession": 5,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 60, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 949]]}, "at": [45]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer-Kopfschmuck"
    },
    "251": {
      "name": "Costume Mask",
      "profession": 5,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 60, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 933]]}, "at": [45]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer-Kopfschmuck"
    },
    "252": {
      "name": "Animal Mask",
      "profession": 5,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 60, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 942]]}, "at": [45]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer-Kopfschmuck"
    },
    "253": {
      "name": "Sleek Mask",
      "profession": 5,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 60, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 926]]}, "at": [44]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Mesmer-Kopfschmuck"
    },
    "254": {
      "name": "Scar Patterns",
      "profession": 4,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 15, "price_per_piece": 20, "price": 20, "pieces": {"head": [[1, 929]]}, "at": [3, 122]},
        {"armor": 30, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 929]]}, "at": [4, 176, 109]},
        {"armor": 39, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 929]]}, "at": [17, 13, 124]},
        {"armor": 45, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 929]]}, "at": [172, 78]},
        {"armor": 51, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 60, "price_per_piece": 800, "price": 800, "pieces": {"head": [[25, 951], [4, 933]]}, "at": [44, 45]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Nekromant-Kopfschmuck"
    },
    "255": {
      "name": "Elonian Crests",
      "profession": 9,
      "kind": "headgear",
      "campaigns": [3, 4],
      "tiers": [
        {"armor": 35, "price_per_piece": 20, "price": 20, "pieces": {"head": [[1, 929]]}, "at": [100]},
        {"armor": 50, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 929]]}, "at": [840]},
        {"armor": 65, "price_per_piece": 200, "price": 200, "pieces": {"head": [[6, 929]]}, "at": [841]},
        {
          "armor": 80,
          "price_per_piece": 1000,
          "price": 1000,
          "pieces": {"head": [[25, 929]]},
          "at": [40, 839, 21, 837, 25]
        }
      ],
      "wiki": "https://www.guildwiki.de/wiki/Paragon-Kopfschmuck"
    },
    "256": {
      "name": "Vabbian Crests",
      "profession": 9,
      "kind": "headgear",
      "campaigns": [3],
      "tiers": [{"armor": 80, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 929]]}, "at": [163]}],
      "wiki": "https://www.guildwiki.de/wiki/Paragon-Kopfschmuck"
    },
    "257": {
      "name": "Simple Mask",
      "profession": 2,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 25, "price_per_piece": 20, "price": 20, "pieces": {"head": [[1, 925]]}, "at": [3, 122]},
        {"armor": 40, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 49, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 55, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 61, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 70, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 928]]}, "at": [44]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer-Kopfschmuck"
    },
    "258": {
      "name": "Hunter Mask",
      "profession": 2,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 40, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 49, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 55, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 61, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 70, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 926]]}, "at": [45]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer-Kopfschmuck"
    },
    "259": {
      "name": "Traveler Mask",
      "profession": 2,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 40, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 49, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 55, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 61, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 70, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 953]]}, "at": [44]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer-Kopfschmuck"
    },
    "260": {
      "name": "Tamer Mask",
      "profession": 2,
      "kind": "headgear",
      "campaigns": [1],
      "tiers": [
        {"armor": 40, "price_per_piece": 75, "price": 75, "pieces": {"head": [[2, 925]]}, "at": [4, 176, 109]},
        {"armor": 49, "price_per_piece": 100, "price": 100, "pieces": {"head": [[3, 925]]}, "at": [17, 13, 124]},
        {"armor": 55, "price_per_piece": 200, "price": 200, "pieces": {"head": [[4, 925]]}, "at": [172, 78]},
        {"armor": 61, "price_per_piece": 250, "price": 250, "pieces": {"head": [[8, 925]]}, "at": [155]},
        {"armor": 70, "price_per_piece": 1000, "price": 1000, "pieces": {"head": [[25, 925], [4, 941]]}, "at": [45]}
      ],
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer-Kopfschmuck"
    }
  }
};
