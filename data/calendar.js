const GW_CALENDAR_NOTES = {
  "_": "Our own write-up of the game's weekly bonuses and yearly events (game/calendar.js), by the same numbers. Text may link things as {skill:id}, {quest:id}, {place:id} and so on.",
  "bonuses_": "words: more words a search finds it by; effect: what it does, in short; tips: how to make the most of it.",
  "bonuses": {
    "1": {
      "words": "lucky unlucky lockpick key chest title",
      "effect": "Keys and lockpicks drop four times as often, and Lucky and Unlucky title points are doubled.",
      "tips": [
        "Farm where chests are common: with keys and lockpicks dropping four times as often, you can open most of the chests you pass.",
        "Open chests with lockpicks: every lockpick you keep gives Lucky points and every one that breaks gives Unlucky points, doubled this week.",
        "The Nine Rings and Rings of Fortune games at the Shing Jea Boardwalk count double too."
      ]
    },
    "2": {
      "words": "sunspear lightbringer title",
      "effect": "Sunspear and Lightbringer title points are doubled, except those from turning in completed books.",
      "tips": [
        "Lightbringer: fight demons and Torment creatures in the Realm of Torment, for example by vanquishing its areas or running the Domain of Anguish from the {place:393}.",
        "Sunspear: kill foes anywhere in Elona; vanquishing an Elonian area gives a steady stream of points.",
        "Don't turn in completed books this week: they are not doubled."
      ]
    },
    "3": {
      "words": "zaishen coins",
      "effect": "Zaishen bounties give double copper Zaishen Coins.",
      "tips": [
        "Pick up each day's bounty at {place:857} and finish it before the week ends.",
        "Each character can hold up to 3 Zaishen bounties at a time and turn them in whenever they like, so bounties done in earlier weeks can be saved and turned in this week."
      ]
    },
    "4": {
      "words": "deep urgoz kanaxai elite",
      "effect": "Anyone can enter The Deep and Urgoz's Warren from Kaineng Center all week.",
      "tips": [
        "Talk to Vash or Eurayle in {place:194} to enter. Other weeks, The Deep opens from Cavalon and Urgoz's Warren from House zu Heltzer, and only for the alliance that holds that town.",
        "Both are elite areas for a party of 12: plan the team ahead."
      ]
    },
    "5": {
      "words": "asura deldrimor norn ebon vanguard reputation rep title",
      "effect": "Asura, Deldrimor, Ebon Vanguard and Norn reputation points are doubled, except those from turning in completed books.",
      "tips": [
        "Take the blessing in an Eye of the North area before you fight: every kill then earns that region's reputation, doubled this week.",
        "Repeat the {page:missions?c=4|Eye of the North missions}: each gives reputation every time you finish it, and more in Hard mode.",
        "Don't turn in completed books this week: they are not doubled."
      ]
    },
    "6": {
      "words": "zaishen coins",
      "effect": "Zaishen missions give double copper Zaishen Coins.",
      "tips": [
        "Pick up each day's mission at {place:857} and finish it before the week ends.",
        "Each character can hold up to 3 Zaishen missions at a time and turn them in whenever they like, so missions done in earlier weeks can be saved and turned in this week."
      ]
    },
    "7": {
      "words": "underworld fissure uw fow statue",
      "effect": "Entering the Underworld and the Fissure of Woe through the gods' statues is free all week.",
      "tips": [
        "Enter from a god's statue in the {place:138}, the {place:393} or the {place:284}: Grenth sends you to the Underworld, Balthazar to the Fissure of Woe. Other weeks it costs 1 platinum.",
        "The Temple of Grenth in Lornar's Pass still charges, so use one of the outposts above.",
        "A good week for Underworld and Fissure of Woe runs: Globs of Ectoplasm, Obsidian Shards and their quests.",
        "With no entry fee, it's also the week to solo farm there, and to try out and tune a solo build without paying for every failed attempt."
      ]
    },
    "8": {
      "words": "kurzick luxon faction title",
      "effect": "Exchanging Kurzick or Luxon faction at the faction reward NPCs gives double title points.",
      "tips": [
        "Run the {page:builds?luxafk|7 Hero AFK Luxon Faction Farm} all week, and turn the faction in each time you near the cap: the most title points for the least effort.",
        "The week to push the Kurzick and Luxon titles: save up faction in other weeks and turn it in at the faction reward NPCs now, for double the title points.",
        "Faction from vanquishes and the faction PvP maps counts too.",
        "Imperial faction from PvP can be exchanged for Kurzick or Luxon faction too, so PvP players gain from this week as well."
      ]
    },
    "9": {
      "words": "zaishen coins vanquish",
      "effect": "Zaishen vanquishes give double copper Zaishen Coins.",
      "tips": [
        "Pick up each day's vanquish at {place:857}; vanquishing is done in Hard mode.",
        "Each character can hold up to 3 Zaishen vanquishes at a time and turn them in whenever they like, so vanquishes done in earlier weeks can be saved and turned in this week."
      ]
    }
  },
  "events_": "blurb: what it's about, in short; miss: what not to miss ([text, true] when it's the main thing); drops: what foes drop.",
  "events": {
    "1": {
      "blurb": "A Lion Mask from the finale, a Celestial miniature from {quest:100696}, and Lunar Tokens from foes for Lunar Fortunes and Red Gift Bags.",
      "miss": [
        [
          "Lion Mask: stand in Shing Jea Monastery when the Celestial Animal arrives at a finale (every 3 hours, February 6, 08:01 to February 7, 08:01 UTC)",
          true
        ],
        ["Celestial miniature of your choice: {quest:100696} gives a Celestial Miniature Token, once per account"],
        ["Celestial Summoning Stones: only from finales, one per dish served in the district"]
      ],
      "drops": [
        "Lunar Token <span class=what>— 3 for a Lunar Fortune (a blessing or item, rarely the year's Celestial miniature), 5 for a Red Gift Bag</span>"
      ]
    },
    "2": {
      "blurb": "Four-Leaf Clovers <span class=what>(party loses 5–15% death penalty)</span> and Shamrock Ale drop from foes.",
      "drops": [
        "Four-Leaf Clover <span class=what>(removes 5–15% death penalty from the whole party)</span>",
        "Shamrock Ale"
      ]
    },
    "3": {"blurb": "The {quest:100011} and {quest:100012} quests on Embark Beach."},
    "4": {
      "blurb": "Golden Eggs <span class=what>(+1 all attributes)</span> and Chocolate Bunnies drop from foes. Each Golden Egg you pick up yourself also gives a Treasure Hunter point.",
      "miss": [
        [
          "Treasure Hunter: picking up a Golden Egg that dropped for you gives 1 Treasure Hunter point, like opening a chest. Eggs bought from players or picked up for someone else give none, so loot your own"
        ]
      ],
      "drops": ["Golden Egg <span class=what>(+1 to all attributes)</span>", "Chocolate Bunny"]
    },
    "5": {
      "blurb": "Proofs of Legend from missions for Anniversary and Decade weapons, Birthday Cupcakes <span class=what>(+100 health, +10 energy, 25% faster movement)</span> and Honeycomb <span class=what>(5% party morale)</span> from foes, and the Hound of Balthazar pet.",
      "miss": [
        [
          "Proofs of Legend: one per character per campaign region for any cooperative mission. 5 of them at the Ancient Anniversary Weaponsmith (Embark Beach) buy an Anniversary weapon, a Decade weapon, a Proof of Triumph or a Blessing of War. The weapons are customized to the character that buys them",
          true
        ],
        [
          "Show a Proof of Legend to Palora, Sworn to Earth: the Anniversary storage pane once per account, then a Blessing of War each year",
          true
        ],
        ["Hound of Balthazar pet: talk to Ceira, Sworn to Fire (otherwise 100,000 Balthazar faction)"]
      ],
      "drops": [
        "Birthday Cupcake <span class=what>(+100 health, +10 energy, 25% faster movement)</span>",
        "Honeycomb <span class=what>(5% morale for the party)</span>",
        "Victory Token <span class=what>— 10 for a Birthday Cupcake (Elite Xunlai Agent Isa Ku) or an XP scroll: Adventurer's, Rampager's or Hunter's Insight (Zaishen Supply Masters, Sheng Yi)</span>",
        "Fireworks, sweets and drinks"
      ]
    },
    "6": {
      "blurb": "A Dragon Festival mask from {quest:100688}, and Victory Tokens from foes for XP scrolls.",
      "miss": [
        [
          "Dragon Festival mask of your choice: {quest:100688} gives an Imperial Mask Token, once per account; trade it at Imperial Supply Master Kagno in Shing Jea Monastery",
          true
        ]
      ],
      "drops": [
        "Victory Token <span class=what>— 10 for an XP scroll: Adventurer's, Rampager's or Hunter's Insight (Zaishen Supply Masters, Sheng Yi)</span>"
      ]
    },
    "7": {
      "blurb": "Snowman Summoners, Frosty and Mischievous Tonics, Eggnog and Fruitcake drop from foes for a week.",
      "drops": ["Snowman Summoner", "Frosty Tonic", "Mischievous Tonic", "Eggnog", "Fruitcake"]
    },
    "8": {
      "blurb": "A Legionnaire Summoning Crystal for the four Reverie quests, every weekly PvE bonus at once, and Wayfarer's Marks from foes for drinks and fireworks.",
      "miss": [
        [
          "Legionnaire Summoning Crystal: do the four Wayfarer's Reverie quests ({quest:101380}, {quest:100779}, {quest:101072}, {quest:100457}) and trade the four proofs at Fylinn, Sworn to Winds (or instead: an Everlasting Legionnaire Tonic, a Miniature Legionnaire, a Legion Loot Bag, or once per account a Reverie Gift with a customized Tormented weapon). The crystal can't be traded",
          true
        ],
        ["All weekly PvE bonuses at once: Elonian Support, Extra Luck, Faction Support and Northern Support"]
      ],
      "drops": ["Wayfarer's Mark <span class=what>— 1 for a drink or a firework</span>"]
    },
    "9": {
      "blurb": "Bottles of Grog drop from foes, and Lion's Arch and Kamadan talk like pirates.",
      "drops": ["Bottle of Grog"]
    },
    "10": {
      "blurb": "Pink dye from Sadie Salvitas in Lion's Arch, all month.",
      "miss": [["Pink dye from Sadie Salvitas in Lion's Arch"]]
    },
    "11": {
      "blurb": "Halloween hats from {quest:101121} and {quest:100868}, Captured Skeletons turned in for 10,000 XP per three, and Trick-or-Treat Bags from foes with Candy Corn <span class=what>(+1 all attributes)</span>, Candy Apples <span class=what>(+100 health, +10 energy)</span> and Pumpkin Cookies <span class=what>(10% morale)</span>.",
      "miss": [
        [
          "Halloween hats: {quest:101121} (50 Candy Corn, Lion's Arch) and {quest:100868} (50 Pumpkin Cookies, Kamadan) each give a Ghoulish Accessory Token, once per account. Trade each token for the hat of your choice at Erulis (Lion's Arch) or Aahtan (Kamadan)",
          true
        ],
        [
          "Turn in Captured Skeletons: after {quest:101235}, {quest:101152} takes 3 Captured Skeletons for 10,000 XP, as often as you like. Skeletons of Dhuum can be captured in the Underworld all year, so stock up on Everlasting Mobstoppers now: put all you carry in storage and ask the Mad King's Steward for more, again and again."
        ]
      ],
      "drops": [
        "Trick-or-Treat Bag <span class=what>— opens into Candy Corn (+1 all attributes), Candy Apple (+100 health, +10 energy), Pumpkin Cookie (10% morale), tonics and drinks</span>"
      ]
    },
    "12": {
      "blurb": "Slices of Pumpkin Pie <span class=what>(25% faster attacks, 15% faster skills)</span> and Hard Apple Cider drop from foes.",
      "drops": [
        "Slice of Pumpkin Pie <span class=what>(25% faster attacks, 15% faster skill activation)</span>",
        "Hard Apple Cider"
      ]
    },
    "13": {
      "blurb": "Wintersday hats for Candy Cane Shards, a Wintergreen weapon from the first finale, the Jingle Bear and White Jingle Moa pets, and Candy Cane weapons.",
      "miss": [
        [
          "Wintersday hats: {quest:101087} (100 Candy Cane Shards, Krunch) and {quest:101289} (99 Candy Cane Shards, Brrrnadette) each give a Frozen Accessory Token, once per account. Trade each token for the hat of your choice at Brrrtie or Krisp (Lion's Arch, Kamadan)",
          true
        ],
        [
          "Wintergreen weapon: the first finale an account attends each year (January 1, every 3 hours from 08:01 UTC, Lion's Arch; Kamadan 15 minutes later)",
          true
        ],
        ["Jingle Bear and White Jingle Moa pets: {quest:100414} unlocks them in Gwen's garden for good", true],
        [
          "Candy Cane weapons (weapon skins, not the Peppermint Candy Cane sweet): 9 Candy Cane Shards each at the Candysmiths"
        ],
        ["Frosty and Mischievous Summoning Stones: {quest:100446} and {quest:100348}"]
      ],
      "drops": [
        "Candy Cane Shard <span class=what>— above all for the hat quests (199 for both); also 9 for a Candy Cane weapon, 5 for a Wintersday Gift (Peppermint Candy Cane: all death penalty off, Wintergreen Candy Cane, tonics, drinks)</span>",
        "Snowman Summoner",
        "Frosty Tonic",
        "Mischievous Tonic",
        "Eggnog",
        "Fruitcake"
      ]
    }
  }
};
