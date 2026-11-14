const GW_QUESTS = {
  "quests_": "Kept by hand. Keys are game quest ids; 100000 and up are ours until the game's is known. givers: npcs, one per area it is given (their area and region come from there); campaign and region only when there is no giver. travel: the campaign it takes you to. event: the yearly event (calendar.js) it belongs to. requires, next: quests; requires_missions, next_missions: missions; requires_other: requirements that aren't quests. missions: missions it belongs to. dungeon: the dungeon (area) it sends you into, when its giver stands outside it. skills: skill ids. wiki: its page on each wiki, {en, de} (as areas).",
  "quests": {
    "917": {
      "name": "The Last Hierophant",
      "type": "secondary",
      "givers": [843],
      "xp": 15000,
      "gold": 2750,
      "objectives": [
        [0, "Defeat Justiciar Thommis."],
        [0, "Defeat Rand Stormweaver."],
        [0, "Defeat Selvetarm"],
        [0, "Defeat Forgewight."],
        [0, "Destroy Duncan the Black"],
        [0, "See Veth the Storyteller for your reward."]
      ],
      "wiki": {"en": "The Last Hierophant", "de": "Der letzte Hierophant"}
    },
    "100000": {
      "name": "Reunion",
      "type": "secondary",
      "givers": [785],
      "hero": [24],
      "xp": 1000,
      "gold": 1000,
      "requires": [101221],
      "next": [100387],
      "objectives": [
        [0, "Gwen must be present to continue."],
        [0, "Find Keiran."],
        [0, "See Gwen for your reward."]
      ],
      "wiki": {"en": "Reunion", "de": "Wiedervereinigung"}
    },
    "100001": {
      "name": "The Necromancer's Novice",
      "type": "secondary",
      "givers": [331],
      "xp": 250,
      "skills": [83, 105, 109],
      "objectives": [
        [0, "Get past the fire traps in the burning section of the catacombs. (Use bone horrors to trigger the traps.)"],
        [0, "Return to Necromancer Munne for your reward."]
      ],
      "wiki": {"en": "The Necromancer's Novice", "de": "Der Nekromantennovize"}
    },
    "100002": {
      "name": "A Gate Too Far/Zaishen Quest",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Norn reputation points"],
      "objectives": [
        [0, "Destroy the Asura Gate in the temple near Raven's Point."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "A Gate Too Far (Zaishen quest)", "de": "Ein Portal zu weit (Zaishen-Mission)"}
    },
    "100003": {
      "name": "A Gift of Griffons",
      "type": "secondary",
      "givers": [486],
      "xp": 10000,
      "gold": 750,
      "objectives": [
        [0, "Escort all three Forest Griffons safely to the Tower of Courage."],
        [0, "See Rastigan the Eternal for your reward."]
      ],
      "requires": [100297],
      "wiki": {"en": "A Gift of Griffons", "de": "Ein Greifen-Geschenk"}
    },
    "100004": {
      "name": "A Time for Heroes (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Defeat the Great Destroyer."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "A Time for Heroes (Zaishen quest)", "de": "Eine Zeit für Helden (Zaishen-Mission)"}
    },
    "100005": {
      "name": "Abaddon's Gate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Kill the God of Secrets."],
        [0, "*BONUS* Defeat Abaddon in under 20 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Abaddon's Gate (Zaishen quest)", "de": "Abaddons Tor (Zaishen-Mission)"}
    },
    "100006": {
      "name": "Abaddon's Mouth (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Open the Door of Komalie on the Ring of Fire Islands."],
        [0, "*BONUS* Guide the spirit of Leah Stone to her rest."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Abaddon's Mouth (Zaishen quest)", "de": "Abaddons Maul (Zaishen-Mission)"}
    },
    "100007": {
      "name": "Admiral Kantoh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Kill Admiral Kantoh in the Fortress of Jahai."],
        [0, "*BONUS* Kill Admiral Kantoh in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Admiral Kantoh (Zaishen quest)", "de": "Admiral Kantoh (Zaishen-Kopfgeld)"}
    },
    "100008": {
      "name": "Against the Charr (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Search for the Ebon Vanguard in the Charr homelands."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Against the Charr (Zaishen quest)", "de": "Gegen die Charr (Zaishen-Mission)"}
    },
    "100009": {
      "name": "Alcazia Tangle (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["5,000 Asura reputation points"],
      "objectives": [
        [0, "Clear the Alcazia Tangle on the Tarnished Coast of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Alcazia Tangle (Zaishen vanquish)", "de": "Alcazia-Dickicht (Zaishen-Bezwingung)"}
    },
    "100010": {
      "name": "Alliance Battles (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["7,500 Imperial faction"],
      "objectives": [
        [0, "Win 2 Alliance Battles."],
        [0, "*BONUS* Win an Alliance Battle by at least 200 points."],
        [0, "*BONUS* Win 6 Alliance Battles."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Alliance Battles (Zaishen quest)", "de": "Bündniskämpfe"}
    },
    "100011": {
      "name": "Annihilator",
      "type": "event",
      "givers": [772],
      "event": 3,
      "repeatable": true,
      "xp": 2029,
      "gold": 1000,
      "rewards": ["1,984 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Travel back to the year 1059 AE."],
        [0, "Make your way to Lakeside County before the Annihilator Golem kills Sarah."],
        [0, "Destroy the Annihilator Golem before it kills Sarah."],
        [0, "See Corporal Bane for your reward."]
      ],
      "wiki": {"en": "Annihilator", "de": "Vernichter (Quest)"}
    },
    "100012": {
      "name": "Annihilator 2: Searing Day",
      "type": "event",
      "givers": [772],
      "event": 3,
      "repeatable": true,
      "xp": 2029,
      "gold": 1000,
      "rewards": ["1,995 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Travel back to the year 1070 AE."],
        [0, "Search for familiar faces."],
        [0, "Find Gwen."],
        [0, "Defend Gwen from the G-1000."],
        [0, "Escape to Ashford Abbey."],
        [0, "Enter the dungeon below Ashford."],
        [0, "Lure the G-1000 to the lava pit and throw it inside."],
        [0, "Step into the lava pit to erase all evidence of golems from this timeline."],
        [0, "See Corporal Bane for your reward."]
      ],
      "wiki": {"en": "Annihilator 2: Searing Day", "de": "Vernichter 2: Tag des Großen Feuers"}
    },
    "100013": {
      "name": "Anvil Rock (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Anvil Rock in the Northern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Anvil Rock (Zaishen vanquish)", "de": "Ambossstein (Zaishen-Bezwingung)"}
    },
    "100014": {
      "name": "Arachni (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "objectives": [
        [0, "Kill Arachni in the Depths of Tyria. Lists the region instead of the dungeon name"],
        [0, "*BONUS* Kill Arachni in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Arachni (Zaishen quest)", "de": "Arachni (Zaishen-Kopfgeld)"}
    },
    "100015": {
      "name": "Arbor Bay (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "objectives": [
        [0, "Clear the Arbor Bay on the Tarnished Coast of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Arbor Bay (Zaishen vanquish)", "de": "Arborbucht (Zaishen-Bezwingung)"}
    },
    "100016": {
      "name": "Arbor Earthcall (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction"],
      "objectives": [
        [0, "Kill Arbor Earthcall in the Morostav Trail."],
        [0, "*BONUS* Kill Arbor Earthcall in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Arbor Earthcall (Zaishen quest)", "de": "Arbor Erdruf (Zaishen-Kopfgeld)"}
    },
    "100017": {
      "name": "Arborstone (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction"],
      "objectives": [
        [0, "Retrieve the Urn of Saint Viktor from the cathedral in Arborstone."],
        [0, "*BONUS* Complete the mission in under 30 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Arborstone (Zaishen quest)", "de": "Arborstein (Zaishen-Mission)"}
    },
    "100018": {
      "name": "Arborstone (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "objectives": [
        [0, "Clear Arborstone in the Echovald Forest of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Arborstone (Zaishen vanquish)", "de": "Arborstein (Zaishen-Bezwingung)"}
    },
    "100019": {
      "name": "Archipelagos (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear the Archipelagos in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Archipelagos (Zaishen vanquish)", "de": "Archipel (Zaishen-Bezwingung)"}
    },
    "100020": {
      "name": "Arkjok Ward (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear Arkjok Ward in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Arkjok Ward (Zaishen vanquish)", "de": "Arkjok-Bastei (Zaishen-Bezwingung)"}
    },
    "100021": {
      "name": "Army of Darkness",
      "type": "secondary",
      "givers": [206],
      "xp": 10000,
      "gold": 750,
      "objectives": [[0, "Destroy the Priest of Menzies"], [0, "Deliver the unholy text to Kromril the Eternal"]],
      "wiki": {"en": "Army of Darkness", "de": "Armee der Finsternis"}
    },
    "100022": {
      "name": "Ascalon Foothills (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Ascalon Foothills of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Ascalon Foothills (Zaishen vanquish)", "de": "Ascalon-Vorgebirge (Zaishen-Bezwingung)"}
    },
    "100023": {
      "name": "Assault on the Stronghold (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Assault the Stronghold and free the Ebon Vanguard captives from Hierophant Burntsoul."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Assault on the Stronghold (Zaishen quest)",
        "de": "Der Angriff auf die Festung (Zaishen-Mission)"
      }
    },
    "100024": {
      "name": "Augury Rock (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Defeat your Doppelganger at Augury Rock."],
        [0, "*BONUS* Complete the mission in under 10 minutes (2 minutes in Hard Mode)."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Augury Rock (Zaishen quest)", "de": "Fels der Weissagung (Zaishen-Mission)"}
    },
    "100025": {
      "name": "Aurora Glade (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Attune to and use the Henge Portal in the Aurora Glade before the White Mantle can do the same."],
        [0, "*BONUS* Kill the Demagogue."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Aurora Glade (Zaishen quest)", "de": "Auroralichtung (Zaishen-Mission)"}
    },
    "100026": {
      "name": "Bahdok Caverns (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Bahdok Caverns in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Bahdok Caverns (Zaishen vanquish)", "de": "Bahdok-Höhlen (Zaishen-Bezwingung)"}
    },
    "100027": {
      "name": "Barbarous Shore (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Barbarous Shore in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Barbarous Shore (Zaishen vanquish)", "de": "Barbarenküste (Zaishen-Bezwingung)"}
    },
    "100028": {
      "name": "BauBao Wavewrath (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill Baubao Wavewrath in the Undercity."],
        [0, "*BONUS* Kill Baubao Wavewrath in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Baubao Wavewrath (Zaishen quest)", "de": "Baubao Wellenzorn (Zaishen-Kopfgeld)"}
    },
    "100029": {
      "name": "Bjora Marches (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "objectives": [
        [0, "Clear the Bjora Marches in the Far Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Bjora Marches (Zaishen vanquish)", "de": "Bjora-Sümpfe (Zaishen-Bezwingung)"}
    },
    "100030": {
      "name": "Blacktide Den (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Take Tahlkora and stop the general from making a deal with the Corsairs in Blacktide Den."],
        [0, "*BONUS* Kill five Rinkhal Monitors."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Blacktide Den (Zaishen quest)", "de": "Schwarzwasserloch (Zaishen-Mission)"}
    },
    "100031": {
      "name": "Blood Washes Blood (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Norn reputation points"],
      "objectives": [
        [0, "Kill the Charr trespassers on Jora's homeland in Bjora Marches."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Blood Washes Blood (Zaishen quest)", "de": "Blut wäscht Blut (Zaishen-Mission)"}
    },
    "100032": {
      "name": "Bloodstone Fen (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Avenge the White Mantle Chosen by killing their murderer."],
        [0, "*BONUS* Awaken the four druids and speak with the Elder Druid."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Bloodstone Fen (Zaishen quest)", "de": "Blutsteinsumpf (Zaishen-Mission)"}
    },
    "100033": {
      "name": "Boreas Seabed (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Luxon faction"],
      "objectives": [
        [0, "Help Master Togo win the Luxon convocation."],
        [0, "*BONUS* Complete the mission in under 20 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Boreas Seabed (Zaishen quest)", "de": "Boreas-Meeresgrund (Zaishen-Mission)"}
    },
    "100034": {
      "name": "Boreas Seabed (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear the Boreas Seabed in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Boreas Seabed (Zaishen vanquish)", "de": "Boreas-Meeresgrund (Zaishen-Bezwingung)"}
    },
    "100035": {
      "name": "Borlis Pass (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Light the storm beacons along Borlis Pass."],
        [0, "*BONUS* Kill the Ice Drake."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "Borlis Pass (Zaishen quest)", "de": "Borlispass (Zaishen-Mission)"}
    },
    "100036": {
      "name": "Borrguus Blisterbark (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Kill Borrguus Blisterbark in Sacnoth Valley."],
        [0, "*BONUS* Kill Borrguus Blisterbark in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Borrguus Blisterbark (Zaishen quest)", "de": "Borrguus Raurinde (Zaishen-Kopfgeld)"}
    },
    "100037": {
      "name": "Bukdek Byway (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear at least 25 enemies in the Bukdek Byway near Kaineng City 'near Kaineng City' instead of 'in Kaineng City' or 'near Kaineng Center' in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Bukdek Byway (Zaishen vanquish)", "de": "Bukdek-Seitenweg (Zaishen-Bezwingung)"}
    },
    "100038": {
      "name": "Chahbek Village (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Destroy the corsairs invading Chahbek Village."],
        [0, "*BONUS* Keep the Sunspear recruits alive."],
        [0, "*BONUS* Complete the mission in Hard Mode."]
      ],
      "wiki": {"en": "Chahbek Village (Zaishen quest)", "de": "Chahbek (Zaishen-Mission)"}
    },
    "100039": {
      "name": "Charged Blackness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Kill a group of Charged Blackness in the Underworld."],
        [0, "*BONUS* Kill a group of Charged Blackness in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 40 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 100 Zaishen Copper Coins."],
      "wiki": {"en": "Charged Blackness (Zaishen quest)", "de": "Geladene Schwärze (Zaishen-Kopfgeld)"}
    },
    "100040": {
      "name": "Chung, the Attuned (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill Chung, the Attuned in the Undercity."],
        [0, "*BONUS* Kill Chung in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Chung, the Attuned (Zaishen quest)", "de": "Chung der Eingestimmte (Zaishen-Kopfgeld)"}
    },
    "100041": {
      "name": "Clear the Chamber",
      "type": "instance",
      "givers": [744],
      "repeatable": true,
      "xp": 5000,
      "objectives": [
        [0, "Clear the chamber of any grasping darkness. You have [3..0] group[s] remaining."],
        [0, "Destroy the Terrorwebs around the statue of Grenth."],
        [0, "See Reaper of the Labyrinth for your reward."]
      ],
      "next": [100309, 100076, 100213],
      "wiki": {"en": "Clear the Chamber", "de": "Säubert die Kammer"}
    },
    "100042": {
      "name": "Cliffs of Dohjok (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
      "objectives": [
        [0, "Clear the Cliffs of Dohjok in Istan of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Cliffs of Dohjok (Zaishen vanquish)", "de": "Felsen von Dohjok (Zaishen-Bezwingung)"}
    },
    "100043": {
      "name": "Codex Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "objectives": [
        [0, "Win 3 battles in Codex Arena."],
        [0, "*BONUS* 5 battles in a row in Codex Arena."],
        [0, "*BONUS* Win 9 battles in Codex Arena."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Codex Arena (Zaishen quest)", "de": "Kodex-Arena (Zaishen-Kampf)"}
    },
    "100044": {
      "name": "Commander Wahli (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Kill Commander Wahli in the Barbarous Shore."],
        [0, "*BONUS* Kill Commander Wahli in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Commander Wahli (Zaishen quest)", "de": "Kommandeur Wahli (Zaishen-Kopfgeld)"}
    },
    "100045": {
      "name": "Consulate Docks (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Take Dunkoro and join the assault on Gandara."],
        [0, "*BONUS* Eliminate the Kournan field marshal groups."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Consulate Docks (Zaishen quest)", "de": "Konsulatshafen (Zaishen-Mission)"}
    },
    "100046": {
      "name": "Crystal Overlook (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["1,000 Lightbringer points"],
      "objectives": [
        [0, "Clear the Crystal Overlook in the Desolation of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Crystal Overlook (Zaishen vanquish)", "de": "Kristallspitze (Zaishen-Bezwingung)"}
    },
    "100047": {
      "name": "Curse of the Nornbear (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Norn reputation points"],
      "objectives": [
        [0, "Help Jora track and defeat the Nornbear."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Curse of the Nornbear (Zaishen quest)", "de": "Der Fluch des Nornbären (Zaishen-Mission)"}
    },
    "100048": {
      "name": "Cursed Lands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Cursed Lands in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Cursed Lands (Zaishen vanquish)", "de": "Verfluchtes Land (Zaishen-Bezwingung)"}
    },
    "100049": {
      "name": "D'Alessio Seaboard (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Cleanse Hakewood of undead and retrieve the Scepter of Orr."],
        [0, "*BONUS* Make an offering to the statue of Melandru."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "D'Alessio Seaboard (Zaishen quest)", "de": "D'Alessio-Küste (Zaishen-Mission)"}
    },
    "100050": {
      "name": "Dalada Uplands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Clear Dalada Uplands in the Charr Homelands of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Dalada Uplands (Zaishen vanquish)", "de": "Dalada-Hochlande (Zaishen-Bezwingung)"}
    },
    "100051": {
      "name": "Dasha Vestibule (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "objectives": [
        [0, "Complete the three trials and defeat the three djinn in the Dasha Vestibule."],
        [0, "*BONUS* Collect three treasures of Ahdashim for Margrid."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Dasha Vestibule (Zaishen quest)", "de": "Vorhof von Dasha (Zaishen-Mission)"}
    },
    "100052": {
      "name": "Deactivating N.O.X.",
      "type": "secondary",
      "givers": [668],
      "objectives": [
        [0, "Speak with Attendant to the Prince in Resplendent Makuun."],
        [0, "Defend Prince Bokka. He must survive."],
        [0, "Deactivate N.O.X."]
      ],
      "rewards": ["N.O.X.'s Power Crystal"],
      "wiki": {"en": "Deactivating N.O.X.", "de": "N.O.X. deaktivieren"}
    },
    "100053": {
      "name": "Deactivating P.O.X.",
      "type": "secondary",
      "givers": [668],
      "objectives": [
        [0, "Speak with Guardsman Makuruyo in The Marketplace."]
      ],
      "rewards": ["P.O.X.'s Power Crystal"],
      "wiki": {"en": "Deactivating P.O.X.", "de": "P.O.X. deaktivieren"}
    },
    "100054": {
      "name": "Deactivating R.O.X.",
      "type": "secondary",
      "givers": [668],
      "objectives": [
        [0, "Speak with Salma in the Temple of the Ages."],
        [0, "Defend Princess Salma. She must survive."],
        [0, "Deactivate R.O.X. and eliminate his forces."],
        [0, "Extract R.O.X.'s power crystal."]
      ],
      "rewards": ["R.O.X.'s Power Crystal"],
      "wiki": {"en": "Deactivating R.O.X.", "de": "R.O.X. deaktivieren"}
    },
    "100055": {
      "name": "Defend the Temple of War",
      "type": "secondary",
      "givers": [635],
      "xp": 10000,
      "gold": 750,
      "objectives": [
        [0, "Destroy the Shadow Army Invader[sic]. You have 12..0 groups left."],
        [0, "The Crafter must survive."],
        [0, "Return to Eternal Forgemaster for your reward."]
      ],
      "requires": [100265],
      "next": [100212, 100139],
      "wiki": {"en": "Defend the Temple of War", "de": "Verteidigt den Tempel des Krieges"}
    },
    "100056": {
      "name": "Dejarin Estate (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Dejarin Estate in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Dejarin Estate (Zaishen vanquish)", "de": "Dejarin-Anwesen (Zaishen-Bezwingung)"}
    },
    "100057": {
      "name": "Deldrimor Bowl (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Deldrimor Bowl in the Northern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Deldrimor Bowl (Zaishen vanquish)", "de": "Deldrimor-Becken (Zaishen-Bezwingung)"}
    },
    "100058": {
      "name": "Demon Assassin",
      "type": "instance",
      "givers": [477],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Destroy the Reaper Slayer before it reaches the mountain top."],
        [0, "Return to Reaper of the Twin Serpent Mountains for your reward."]
      ],
      "requires": [100041],
      "wiki": {"en": "Demon Assassin", "de": "Dämonischer Meuchler"}
    },
    "100059": {
      "name": "Destruction's Depths (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Reclaim the Asura Gate to the Central Transfer Chamber from the Destroyers in the Depths of Tyria."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Destruction's Depths (Zaishen quest)", "de": "Die Tiefen der Zerstörung (Zaishen-Mission)"}
    },
    "100060": {
      "name": "Diessa Lowlands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Diessa Lowlands in Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Diessa Lowlands (Zaishen vanquish)", "de": "Tiefland von Diessa (Zaishen-Bezwingung)"}
    },
    "100061": {
      "name": "Diviner's Ascent (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Diviner's Ascent in the Crystal Desert of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Diviner's Ascent (Zaishen vanquish)", "de": "Wahrsagerhöhe (Zaishen-Bezwingung)"}
    },
    "100062": {
      "name": "Divinity Coast (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Deliver the Eye of Janthir to Loamhurst."],
        [0, "*BONUS* Find and deliver five Chosen to Loamhurst."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Divinity Coast (Zaishen quest)", "de": "Küste der Göttlichkeit (Zaishen-Mission)"}
    },
    "100063": {
      "name": "Dragon Lich (Zaishen quest)",
      "type": "secondary",
      "campaign": 0,
      "region": 21,
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill a Dragon Lich in the Great Battle Field."],
        [0, "*BONUS* Kill a Dragon Lich in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Dragon Lich (Zaishen quest)", "de": "Drachen-Lich (Zaishen-Kopfgeld)"}
    },
    "100064": {
      "name": "Dragon's Gullet (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Dragon's Gullet in Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Dragon's Gullet (Zaishen vanquish)", "de": "Drachenschlund (Zaishen-Bezwingung)"}
    },
    "100065": {
      "name": "Drakkar Lake (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "objectives": [
        [0, "Clear Drakkar Lake in the Far Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Drakkar Lake (Zaishen vanquish)", "de": "Drakkar-See (Zaishen-Bezwingung)"}
    },
    "100066": {
      "name": "Drazach Thicket (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "objectives": [
        [0, "Clear the Drazach Thicket in the Echovald Forest of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Drazach Thicket (Zaishen vanquish)", "de": "Drazachdickicht (Zaishen-Bezwingung)"}
    },
    "100067": {
      "name": "Dreadnought's Drift (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Dreadnought's Drift in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Dreadnought's Drift (Zaishen vanquish)", "de": "Schreckensdrift (Zaishen-Bezwingung)"}
    },
    "100068": {
      "name": "Droajam, Mage of the Sands (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Lightbringer points"],
      "objectives": [
        [0, "Kill Droajam, Mage of the Sands in the Poisoned Outcrops."],
        [0, "*BONUS* Kill Droajam, Mage of the Sands in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Droajam, Mage of the Sands (Zaishen quest)",
        "de": "Droajam, Magier des Sandes (Zaishen-Kopfgeld)"
      }
    },
    "100069": {
      "name": "Dry Top (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Dry Top in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Dry Top (Zaishen vanquish)", "de": "Trockenkuppe (Zaishen-Bezwingung)"}
    },
    "100070": {
      "name": "Duncan the Black (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["3,750 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Duncan the Black in Slavers' Exile."],
        [0, "*BONUS* Kill Duncan the Black in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Duncan the Black (Zaishen quest)", "de": "Duncan der Schwarze (Zaishen-Kopfgeld)"}
    },
    "100071": {
      "name": "Dunes of Despair (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Help the Ghostly Hero reclaim his throne in the Dunes of Despair."],
        [0, "*BONUS* Defeat the three Forgotten generals."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Dunes of Despair (Zaishen quest)", "de": "Dünen der Verzweiflung (Zaishen-Mission)"}
    },
    "100072": {
      "name": "Dzagonur Bastion (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "objectives": [
        [0, "Defend Dzagonur Bastion against the invading generals."],
        [0, "*BONUS* Keep the defensive structures intact."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Dzagonur Bastion (Zaishen quest)", "de": "Bastion von Dzagonur (Zaishen-Mission)"}
    },
    "100073": {
      "name": "Eastern Frontier (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Eastern Frontier in Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Eastern Frontier (Zaishen vanquish)", "de": "Ostgrenze (Zaishen-Bezwingung)"}
    },
    "100074": {
      "name": "Eldritch Ettin (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill the Eldritch Ettin in the Bloodstone Caves."],
        [0, "*BONUS* Kill the Eldritch Ettin in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Eldritch Ettin (Zaishen quest)", "de": "Eldritch-Ettin (Zaishen-Kopfgeld)"}
    },
    "100075": {
      "name": "Elona Reach (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Deliver the crystal shards to the Ghostly Hero."],
        [0, "*BONUS* Awaken the three Ritual Priests of Elona."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Elona Reach (Zaishen quest)", "de": "Elonaspitze (Zaishen-Mission)"}
    },
    "100076": {
      "name": "Escort of Souls",
      "type": "instance",
      "givers": [578],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Escort the souls to Mayor Alegheri in the Forgotten Vale."],
        [0, "See Mayor Alegheri for your reward."]
      ],
      "requires": [100041],
      "wiki": {"en": "Escort of Souls", "de": "Geleit der Seelen"}
    },
    "100077": {
      "name": "Ettin's Back (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Ettin's Back in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Ettin's Back (Zaishen vanquish)", "de": "Ettinbuckel (Zaishen-Bezwingung)"}
    },
    "100078": {
      "name": "Fahranur, The First City (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
      "objectives": [
        [0, "Clear Fahranur, the First City in Istan of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Fahranur, the First City (Zaishen vanquish)",
        "de": "Fahranur, die Erste Stadt (Zaishen-Bezwingung)"
      }
    },
    "100079": {
      "name": "Fendi Nin (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "objectives": [
        [0, "Kill Fendi Nin in the Shards of Orr."],
        [0, "*BONUS* Kill Fendi Nin in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Fendi Nin (Zaishen quest)", "de": "Fendi Nin (Zaishen-Kopfgeld)"}
    },
    "100080": {
      "name": "Fenrir (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Norn reputation points"],
      "objectives": [
        [0, "Kill Fenrir in Norrhart Domains."],
        [0, "*BONUS* Kill Fenrir in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Fenrir (Zaishen quest)", "de": "Fenrir (Zaishen-Kopfgeld)"}
    },
    "100081": {
      "name": "Ferndale (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["10,000 Kurzick faction"],
      "objectives": [
        [0, "Clear Ferndale in the Echovald Forest of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Ferndale (Zaishen vanquish)", "de": "Farntal (Zaishen-Bezwingung)"}
    },
    "100082": {
      "name": "Finding the Bloodstone (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Asura reputation points"],
      "objectives": [
        [0, "Help Gadd acquire the Bloodstone from Sparkfly Swamp on the Tarnished Coast."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Finding the Bloodstone (Zaishen quest)",
        "de": "Auf der Suche nach dem Blutstein (Zaishen-Mission)"
      }
    },
    "100083": {
      "name": "Flame Temple Corridor (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Flame Temple Corridor in Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Flame Temple Corridor (Zaishen vanquish)", "de": "Flammentempel-Gang (Zaishen-Bezwingung)"}
    },
    "100084": {
      "name": "Forgewight (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Forgewight in Slavers' Exile."],
        [0, "*BONUS* Kill Forgewight in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Forgewight (Zaishen quest)", "de": "Schmiedewicht (Zaishen-Kopfgeld)"}
    },
    "100085": {
      "name": "Fort Aspenwood (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["5,000 Imperial faction"],
      "objectives": [
        [0, "Win 3 PvP battles in Fort Aspenwood."],
        [0, "*BONUS* Win 5 PvP battles in Fort Aspenwood."],
        [0, "*BONUS* Win 9 PvP battles in Fort Aspenwood."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Fort Aspenwood (Zaishen quest)", "de": "Fort Espenwald (Zaishen-Kampf)"}
    },
    "100086": {
      "name": "Fort Ranik (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Push the invading Charr forces back to the Great Northern Wall."],
        [0, "*BONUS* Rescue Deeter Saberlin from the Charr."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "Fort Ranik (Zaishen quest)", "de": "Fort Ranik (Zaishen-Mission)"}
    },
    "100087": {
      "name": "Forum Highlands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Forum Highlands in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Forum Highlands (Zaishen vanquish)", "de": "Forum-Hochland (Zaishen-Bezwingung)"}
    },
    "100088": {
      "name": "Fozzy Yeoryios (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Kill Fozzy Yeoryios in Sacnoth Valley."],
        [0, "*BONUS* Kill Fozzy Yeoryios in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Fozzy Yeoryios (Zaishen quest)", "de": "Fozzy Yeoryios (Zaishen-Kopfgeld)"}
    },
    "100089": {
      "name": "Fronis Irontoe (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Fronis Irontoe in his lair."],
        [0, "*BONUS* Kill Fronis Irontoe in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Fronis Irontoe (Zaishen quest)", "de": "Fronis Eisenzehe (Zaishen-Kopfgeld)"}
    },
    "100090": {
      "name": "Frostmaw the Kinslayer (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
      "objectives": [
        [0, "Kill Frostmaw the Kinslayer in Frostmaw's Burrows."],
        [0, "*BONUS* Kill Frostmaw the Kinslayer in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Frostmaw the Kinslayer (Zaishen quest)",
        "de": "Frostrachen der Sippenschlächter (Zaishen-Kopfgeld)"
      }
    },
    "100091": {
      "name": "Frozen Forest (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Frozen Forest in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Frozen Forest (Zaishen vanquish)", "de": "Frostwald (Zaishen-Bezwingung)"}
    },
    "100092": {
      "name": "G.O.L.E.M. (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Asura reputation points"],
      "objectives": [
        [0, "Defend the G.O.L.E.M. kilns and destroy the Destroyer hive outside Rata Sum."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "G.O.L.E.M. (Zaishen quest)", "de": "G.O.L.E.M. (Zaishen-Mission)"}
    },
    "100093": {
      "name": "Gandara, the Moon Fortress (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
      "objectives": [
        [0, "Clear Gandara, the Moon Fortress in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Gandara, the Moon Fortress (Zaishen vanquish)",
        "de": "Gandara, die Mondfestung (Zaishen-Bezwingung)"
      }
    },
    "100094": {
      "name": "Garden of Seborhin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Garden of Seborhin in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Garden of Seborhin (Zaishen vanquish)", "de": "Garten von Seborhin (Zaishen-Bezwingung)"}
    },
    "100095": {
      "name": "Gate of Desolation (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Tame Queen Aijundu to travel across The Desolation."],
        [0, "*BONUS* Save three young Junundu."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Gate of Desolation (Zaishen quest)", "de": "Ödland-Tor (Zaishen-Mission)"}
    },
    "100096": {
      "name": "Gate of Madness (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Defeat Shiro and the Lich at the Gate of Madness."],
        [0, "*BONUS* Capture favor of the five shrines."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Gate of Madness (Zaishen quest)", "de": "Tor des Wahnsinns (Zaishen-Mission)"}
    },
    "100097": {
      "name": "Gate of Pain (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Take Dunkoro and release the tortured souls at the Gate of Pain."],
        [0, "*BONUS* Kill three additional Emissaries of Dhuum."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Gate of Pain (Zaishen quest)", "de": "Tor des Schmerzes (Zaishen-Mission)"}
    },
    "100098": {
      "name": "Gates of Kryta (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Destroy the undead in the swamp south of Lion's Arch."],
        [0, "*BONUS* Retrieve the Orrian Text for the Historian."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "Gates of Kryta (Zaishen quest)", "de": "Tore von Kryta (Zaishen-Mission)"}
    },
    "100099": {
      "name": "Ghial the Bone Dancer (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill Ghial the Bone Dancer in the Xaquang Skyway."],
        [0, "*BONUS* Kill Ghial in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Ghial the Bone Dancer (Zaishen quest)", "de": "Ghial der Knochentänzer (Zaishen-Kopfgeld)"}
    },
    "100100": {
      "name": "Grand Court of Sebelkeh (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Take Tahlkora and close the torment rifts in the Sebelkeh Basilica."],
        [0, "*BONUS* Complete the mission in under 6 minutes (12 minutes in Hard Mode)."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Grand Court of Sebelkeh (Zaishen quest)", "de": "Großer Hof von Sebelkeh (Zaishen-Mission)"}
    },
    "100101": {
      "name": "Grenth's Footprint (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Grenth's Footprint in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Grenth's Footprint (Zaishen vanquish)", "de": "Grenths Fußabdruck (Zaishen-Bezwingung)"}
    },
    "100102": {
      "name": "Griffon's Mouth (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Griffon's Mouth in the Northern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Griffon's Mouth (Zaishen vanquish)", "de": "Greifenmaul (Zaishen-Bezwingung)"}
    },
    "100103": {
      "name": "Grothmar Wardowns (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Clear the Grothmar Wardowns in the Charr Homelands of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Grothmar Wardowns (Zaishen vanquish)", "de": "Grothmar-Kriegshügel (Zaishen-Bezwingung)"}
    },
    "100104": {
      "name": "Guild Versus Guild (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1500,
      "rewards": ["9,000 Balthazar faction"],
      "objectives": [
        [0, "Win 1 rated GvG battle."],
        [0, "*BONUS* Win a round of GvG in an Automated Tournament."],
        [0, "*BONUS* Win 3 rated GvG battles."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Guild Versus Guild (Zaishen quest)", "de": "Gilde gegen Gilde (Zaishen-Kampf)"}
    },
    "100105": {
      "name": "Gyala Hatchery (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Luxon faction"],
      "objectives": [
        [0, "Guard the turtle caravan from the Gyala Hatchery."],
        [0, "*BONUS* Keep all five young turtles alive."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Gyala Hatchery (Zaishen quest)", "de": "Gyala-Brutstätte (Zaishen-Mission)"}
    },
    "100106": {
      "name": "Gyala Hatchery (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear the Gyala Hatchery in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Gyala Hatchery (Zaishen vanquish)", "de": "Gyala-Brutstätte (Zaishen-Bezwingung)"}
    },
    "100107": {
      "name": "Haiju Lagoon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Haiju Lagoon on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Haiju Lagoon (Zaishen vanquish)", "de": "Haiju-Lagune (Zaishen-Bezwingung)"}
    },
    "100108": {
      "name": "Harn and Maxine Coldstone (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill either Harn or Maxine Coldstone in Perdition Rock."],
        [0, "*BONUS* Kill either Harn or Maxine Coldstone in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {
        "en": "Harn and Maxine Coldstone (Zaishen quest)",
        "de": "Harn und Maxine Coldstone (Zaishen-Kopfgeld)"
      }
    },
    "100109": {
      "name": "Havok Soulwail (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
      "objectives": [
        [0, "Kill Havok Soulwail in Darkrime Delves."],
        [0, "*BONUS* Kill Havok Soulwail in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Havok Soulwail (Zaishen quest)", "de": "Havok Seelenheuler (Zaishen-Kopfgeld)"}
    },
    "100110": {
      "name": "Hell's Precipice (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Defeat the great evil at Hell's Precipice."],
        [0, "*BONUS* Destroy all three Armageddon Lords."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Hell's Precipice (Zaishen quest)", "de": "Vorhof der Hölle (Zaishen-Mission)"}
    },
    "100111": {
      "name": "Hero Battles (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "objectives": [
        [0, "Win 2 rated Hero vs. Hero battles."],
        [0, "*BONUS* Win a round of rated Hero vs. Hero battles in an Automated Tournament."],
        [0, "*BONUS* Win 6 rated Hero vs. Hero battles."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Hero Battles (Zaishen quest)", "de": "Heldenkämpfe (Zaishen-Kampf)"}
    },
    "100112": {
      "name": "Heroes' Ascent (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1500,
      "rewards": ["9,000 Balthazar faction"],
      "objectives": [
        [0, "Win 2 battles in Heroes' Ascent."],
        [0, "*BONUS* Win your way to competing in the Hall of Heroes."],
        [0, "*BONUS* Win 6 battles in Heroes' Ascent."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Heroes' Ascent (Zaishen quest)", "de": "Aufstieg der Helden (Zaishen-Kampf)"}
    },
    "100113": {
      "name": "Holdings of Chokhin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Holdings of Chokhin in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Holdings of Chokhin (Zaishen vanquish)", "de": "Güter von Chokhin (Zaishen-Bezwingung)"}
    },
    "100114": {
      "name": "Ice Caves of Sorrow (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Free the rebel leaders imprisoned in the Ice Caves of Sorrow."],
        [0, "*BONUS* Relay news of Deldrimor's spy to the dwarves."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Ice Caves of Sorrow (Zaishen quest)", "de": "Eishöhlen der Betrübnis (Zaishen-Mission)"}
    },
    "100115": {
      "name": "Ice Cliff Chasms (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "objectives": [
        [0, "Clear the Ice Cliff Chasms in the Far Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Ice Cliff Chasms (Zaishen vanquish)", "de": "Eisklippen-Abgründe (Zaishen-Bezwingung)"}
    },
    "100116": {
      "name": "Ice Floe (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Ice Floe in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Ice Floe (Zaishen vanquish)", "de": "Eisscholle (Zaishen-Bezwingung)"}
    },
    "100117": {
      "name": "Icedome (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Icedome in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Icedome (Zaishen vanquish)", "de": "Eisdom (Zaishen-Bezwingung)"}
    },
    "100118": {
      "name": "Ilsundur, Lord of Fire (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Kill Ilsundur, Lord of Fire in the Catacombs of Kathandrax."],
        [0, "*BONUS* Kill Ilsundur in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Ilsundur, Lord of Fire (Zaishen quest)", "de": "Ilsundur, Herr des Feuers (Zaishen-Kopfgeld)"}
    },
    "100119": {
      "name": "Imperial Sanctum (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Defeat Shiro."],
        [0, "*BONUS* Complete the mission in under 2.5 minutes (3 minutes in Hard Mode)."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Imperial Sanctum (Zaishen quest)", "de": "Kaiserliches Refugium (Zaishen-Mission)"}
    },
    "100120": {
      "name": "Imprisoned Spirits",
      "type": "instance",
      "givers": [536],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Defend the Released Spirits while they escape from the Pit."],
        [0, "Protect the Released Spirits while they travel to the Reaper."],
        [0, "Return to the Reaper of the Bone Pits for your reward."]
      ],
      "requires": [100213],
      "wiki": {"en": "Imprisoned Spirits", "de": "Eingesperrte Geister"}
    },
    "100121": {
      "name": "Iron Horse Mine (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Iron Horse Mine in the Northern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Iron Horse Mine (Zaishen vanquish)", "de": "Eisenrossmine (Zaishen-Bezwingung)"}
    },
    "100122": {
      "name": "Iron Mines of Moladune (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Find the traitor in the Iron Mines of Moladune. Defeat him and his guards."],
        [0, "*BONUS* Defeat The Inquisitor."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Iron Mines of Moladune (Zaishen quest)", "de": "Eisenminen von Moladune (Zaishen-Mission)"}
    },
    "100123": {
      "name": "Issnur Isles (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Issnur Isles in Istan of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Issnur Isles (Zaishen vanquish)", "de": "Issnur-Inseln (Zaishen-Bezwingung)"}
    },
    "100124": {
      "name": "Jade Quarry (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["5,000 Imperial faction"],
      "objectives": [
        [0, "Win 3 PvP battles in Jade Quarry."],
        [0, "*BONUS* Win 5 PvP battles in Jade Quarry."],
        [0, "*BONUS* Win 9 PvP battles in Jade Quarry."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Jade Quarry (Zaishen quest)", "de": "Jadesteinbruch"}
    },
    "100125": {
      "name": "Jaga Moraine (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "objectives": [
        [0, "Clear the Jaga Moraine in the Far Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Jaga Moraine (Zaishen vanquish)", "de": "Jaga-Moräne (Zaishen-Bezwingung)"}
    },
    "100126": {
      "name": "Jahai Bluffs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Jahai Bluffs in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Jahai Bluffs (Zaishen vanquish)", "de": "Jahai-Klippen (Zaishen-Bezwingung)"}
    },
    "100127": {
      "name": "Jarimiya the Unmerciful (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Kill Jarimiya the Unmerciful in the Vehtendi Valley."],
        [0, "*BONUS* Kill Jarimiya in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Jarimiya the Unmerciful (Zaishen quest)", "de": "Jarimiya der Gnadenlose (Zaishen-Kopfgeld)"}
    },
    "100128": {
      "name": "Jaya Bluffs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Jaya Bluffs on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Jaya Bluffs (Zaishen vanquish)", "de": "Jaya-Klippen (Zaishen-Bezwingung)"}
    },
    "100129": {
      "name": "Jedeh the Mighty (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Kill Jedeh the Mighty in Crystal Overlook."],
        [0, "*BONUS* Kill Jedeh the Mighty in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Jedeh the Mighty (Zaishen quest)", "de": "Jedeh der Mächtige (Zaishen-Kopfgeld)"}
    },
    "100130": {
      "name": "Jennur's Horde (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Take Koss and defend the Garden of Seborhin against the demon horde."],
        [0, "*BONUS* Defeat two additional Harbingers and accompanying foes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Jennur's Horde (Zaishen quest)", "de": "Jennurs Horde (Zaishen-Mission)"}
    },
    "100131": {
      "name": "Joffs the Mitigator (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Asura reputation points"],
      "objectives": [
        [0, "Kill Joffs the Mitigator in Riven Earth."],
        [0, "*BONUS* Kill Joffs the Mitigator in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Joffs the Mitigator (Zaishen quest)", "de": "Joffs der Sanfte (Zaishen-Kopfgeld)"}
    },
    "100132": {
      "name": "Jokanur Diggings (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Take Melonni to investigate the deaths of workers at the Jokanur Diggings in the ruins of Fahranur, the First City."],
        [0, "*BONUS* Complete the mission with two Sunspear Ghosts left alive."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Jokanur Diggings (Zaishen quest)", "de": "Ausgrabungsstätte von Jokanur (Zaishen-Mission)"}
    },
    "100133": {
      "name": "Joko's Domain (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "objectives": [
        [0, "Clear Joko's Domain in the Desolation of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Joko's Domain (Zaishen vanquish)", "de": "Jokos Domäne (Zaishen-Bezwingung)"}
    },
    "100134": {
      "name": "Justiciar Thommis (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Justiciar Thommis and accompanying foes in Slavers' Exile."],
        [0, "*BONUS* Kill Justiciar Thommis and accompanying foes in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Justiciar Thommis (Zaishen quest)", "de": "Justiziar Thommis (Zaishen-Kopfgeld)"}
    },
    "100135": {
      "name": "Kanaxai (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["7,500 Luxon faction"],
      "objectives": [
        [0, "Kill Kanaxai in the Deep."],
        [0, "*BONUS* Kill Kanaxai in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Kanaxai (Zaishen quest)", "de": "Kanaxai (Zaishen-Kopfgeld)"}
    },
    "100136": {
      "name": "Kepkhet Marrowfeast (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill Kepkhet Marrowfeast in Prophet's Path."],
        [0, "*BONUS* Kill Kepkhet Marrowfeast in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Kepkhet Marrowfeast (Zaishen quest)", "de": "Kepkhet Markschmaus (Zaishen-Kopfgeld)"}
    },
    "100137": {
      "name": "Kessex Peak (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Kessex Peak in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Kessex Peak (Zaishen vanquish)", "de": "Kessex-Gipfel (Zaishen-Bezwingung)"}
    },
    "100138": {
      "name": "Khabuus (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "objectives": [
        [0, "Kill Khabuus in Bogroot Growths."],
        [0, "*BONUS* Kill Khabuus in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Khabuus (Zaishen quest)", "de": "Khabuus (Zaishen-Kopfgeld)"}
    },
    "100139": {
      "name": "Khobay the Betrayer",
      "type": "secondary",
      "givers": [635],
      "xp": 10000,
      "gold": 750,
      "objectives": [[0, "Strike down Lord Khobay"], [0, "See the Eternal Forgemaster for your reward"]],
      "requires": [100055],
      "wiki": {"en": "Khobay the Betrayer", "de": "Khobay der Verräter"}
    },
    "100140": {
      "name": "Kinya Province (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Kinya Province on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Kinya Province (Zaishen vanquish)", "de": "Provinz Kinya (Zaishen-Bezwingung)"}
    },
    "100141": {
      "name": "Kodonur Crossroads (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "objectives": [
        [0, "Take Zhed Shadowhoof and rescue Mirza Veldrunner from the Kodonur Crossroads in Kourna."],
        [0, "*BONUS* Kill the three cruel Taskmaster bosses."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Kodonur Crossroads (Zaishen quest)", "de": "Kodonur-Kreuzung (Zaishen-Mission)"}
    },
    "100142": {
      "name": "Korshek the Immolated (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Lightbringer points"],
      "objectives": [
        [0, "Kill Korshek the Immolated in Forum Highlands."],
        [0, "*BONUS* Kill Korshek the Immolated in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Korshek the Immolated (Zaishen quest)", "de": "Korshek der Geopferte (Zaishen-Kopfgeld)"}
    },
    "100143": {
      "name": "Kunvie Firewing (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction", "500 Luxon faction"],
      "objectives": [
        [0, "Kill Kunvie Firewing in the Unwaking Waters."],
        [0, "*BONUS* Kill Kunvie Firewing in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Kunvie Firewing (Zaishen quest)", "de": "Kunvie Feuerflügel (Zaishen-Kopfgeld)"}
    },
    "100144": {
      "name": "Lahtenda Bog (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear points"],
      "objectives": [
        [0, "Clear the Lahtenda Bog in Istan of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Lahtenda Bog (Zaishen vanquish)", "de": "Lahtenda-Sumpf (Zaishen-Bezwingung)"}
    },
    "100145": {
      "name": "Lord Jadoth (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "objectives": [
        [0, "Kill Lord Jadoth in the City of Torc'qua."],
        [0, "*BONUS* Kill Lord Jadoth in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Lord Jadoth (Zaishen quest)", "de": "Fürst Jadoth (Zaishen-Kopfgeld)"}
    },
    "100146": {
      "name": "Lord Khobay (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Kill Lord Khobay in the Lake of Fire."],
        [0, "*BONUS* Kill Lord Khobay in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 40 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 100 Zaishen Copper Coins."],
      "wiki": {"en": "Lord Khobay (Zaishen quest)", "de": "Lord Khobay (Zaishen-Kopfgeld)"}
    },
    "100147": {
      "name": "Lornar's Pass (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Lornar's Pass in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Lornar's Pass (Zaishen vanquish)", "de": "Lornarpass (Zaishen-Bezwingung)"}
    },
    "100148": {
      "name": "Magmus (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Magmus in the Heart of the Shiverpeaks."],
        [0, "*BONUS* Kill Magmus in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Magmus (Zaishen quest)", "de": "Magmus (Zaishen-Kopfgeld)"}
    },
    "100149": {
      "name": "Magus Stones (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "objectives": [
        [0, "Clear Magus Stones on the Tarnished Coast of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Magus Stones (Zaishen vanquish)", "de": "Magussteine (Zaishen-Bezwingung)"}
    },
    "100150": {
      "name": "Maishang Hills (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear the Maishang Hills in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Maishang Hills (Zaishen vanquish)", "de": "Maishang-Hügel (Zaishen-Bezwingung)"}
    },
    "100151": {
      "name": "Majesty's Rest (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Majesty's Rest in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Majesty's Rest (Zaishen vanquish)", "de": "Königsruh (Zaishen-Bezwingung)"}
    },
    "100152": {
      "name": "Mamnoon Lagoon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Mamnoon Lagoon in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Mamnoon Lagoon (Zaishen vanquish)", "de": "Mamnoon-Lagune (Zaishen-Bezwingung)"}
    },
    "100153": {
      "name": "Marga Coast (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Marga Coast in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Marga Coast (Zaishen vanquish)", "de": "Marga-Küste (Zaishen-Bezwingung)"}
    },
    "100154": {
      "name": "Mehtani Keys (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Mehtani Keys in Istan of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Mehtani Keys (Zaishen vanquish)", "de": "Mehtani-Archipel (Zaishen-Bezwingung)"}
    },
    "100155": {
      "name": "Melandru's Hope (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "objectives": [
        [0, "Clear Melandru's Hope in the Echovald Forest of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Melandru's Hope (Zaishen vanquish)", "de": "Melandrus Hoffnung (Zaishen-Bezwingung)"}
    },
    "100156": {
      "name": "Mineral Springs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear the Mineral Springs in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Mineral Springs (Zaishen vanquish)", "de": "Mineralquellen (Zaishen-Bezwingung)"}
    },
    "100157": {
      "name": "Miniature Companion: Dungeons",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2007,
      "objectives": [
        [0, "Redeem a fully complete copy of the Master Dungeon Guide (Hard Mode) storybook at a loremaster."]
      ],
      "rewards": ["Miniature Destroyer of Flesh"],
      "wiki": {"en": "Miniature Companion: Dungeons", "de": "Miniatur-Gefährte: Verliese"}
    },
    "100158": {
      "name": "Miniature Companion: Eye of the North",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2007,
      "objectives": [
        [0, "Redeem a fully complete copy of the Hero's Handbook (Hard Mode) storybook at a loremaster."]
      ],
      "rewards": ["Miniature Asura"],
      "wiki": {"en": "Miniature Companion: Eye of the North", "de": "Miniatur-Gefährte: Auge des Nordens"}
    },
    "100159": {
      "name": "Miniature Companion: Factions",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Redeem a fully complete copy of the Shiro's Return (Hard Mode) storybook at a loremaster."]
      ],
      "rewards": ["Miniature Panda"],
      "wiki": {"en": "Miniature Companion: Factions", "de": "Miniatur-Gefährte: Fraktionen"}
    },
    "100160": {
      "name": "Miniature Companion: Nightfall",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Redeem a fully complete copy of the Night Falls (Hard Mode) storybook at a loremaster."]
      ],
      "rewards": ["Broken Toy"],
      "wiki": {"en": "Miniature Companion: Nightfall", "de": "Miniatur-Gefährte: Anbruch der Nacht"}
    },
    "100161": {
      "name": "Miniature Companion: Prophecies",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2005,
      "objectives": [
        [0, "Redeem a fully complete copy of the Flameseeker Prophecies (Hard Mode) storybook at a loremaster."]
      ],
      "rewards": ["Miniature Grawl"],
      "wiki": {"en": "Miniature Companion: Prophecies", "de": "Miniatur-Gefährte: Prophezeiungen"}
    },
    "100162": {
      "name": "Miniature Companion: Sorrow's Furnace",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2005,
      "objectives": [
        [0, "Defeat the Iron Forgeman in Sorrow's Furnace in Hard Mode."]
      ],
      "rewards": ["Miniature Longhair Yeti"],
      "wiki": {"en": "Miniature Companion: Sorrow's Furnace", "de": "Miniatur-Gefährte: Hochofen der Betrübnis"}
    },
    "100163": {
      "name": "Miniature Companion: The Deep",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Defeat Kanaxai in The Deep in Hard Mode."]
      ],
      "rewards": ["Miniature Kanaxai"],
      "wiki": {"en": "Miniature Companion: The Deep", "de": "Miniatur-Gefährte: Die Tiefe"}
    },
    "100164": {
      "name": "Miniature Companion: The Domain of Anguish",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Defeat Malyx in the Domain of Anguish in Hard Mode."]
      ],
      "rewards": ["Miniature Greased Lightning"],
      "wiki": {"en": "Miniature Companion: The Domain of Anguish", "de": "Miniatur-Gefährte: Die Domäne der Pein"}
    },
    "100165": {
      "name": "Miniature Companion: The Fissure of Woe",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Complete every quest in one expedition to the Fissure of Woe in Hard Mode."]
      ],
      "rewards": ["Miniature Ceratadon"],
      "wiki": {"en": "Miniature Companion: The Fissure of Woe", "de": "Miniatur-Gefährte: Der Riss des Kummers"}
    },
    "100166": {
      "name": "Miniature Companion: The Underworld",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Defeat Dhuum in The Underworld in Hard Mode."]
      ],
      "rewards": ["Miniature Mad King's Guard"],
      "wiki": {"en": "Miniature Companion: The Underworld", "de": "Miniatur-Gefährte: Die Unterwelt"}
    },
    "100167": {
      "name": "Miniature Companion: Urgoz's Warren",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Defeat Urgoz in Urgoz's Warren in Hard Mode."]
      ],
      "rewards": ["Miniature Island Guardian"],
      "wiki": {"en": "Miniature Companion: Urgoz's Warren", "de": "Miniatur-Gefährte: Urgoz' Bau"}
    },
    "100168": {
      "name": "Miniature Companion: Young Heroes",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "objectives": [
        [0, "Redeem a fully complete copy of the Young Heroes of Tyria (Hard Mode) storybook at a loremaster."]
      ],
      "rewards": ["Miniature Pig"],
      "wiki": {"en": "Miniature Companion: Young Heroes", "de": "Miniatur-Gefährte: Junge Helden"}
    },
    "100169": {
      "name": "Minister Cho's Estate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Neutralize the danger to Minister Cho."],
        [0, "*BONUS* Complete the mission in under 20 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "Minister Cho's Estate (Zaishen quest)", "de": "Minister Chos Anwesen (Zaishen-Mission)"}
    },
    "100170": {
      "name": "Minister Cho's Estate (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Minister Cho's Estate on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Minister Cho's Estate (Zaishen vanquish)", "de": "Minister Chos Anwesen (Zaishen-Bezwingung)"}
    },
    "100171": {
      "name": "Mobrin, Lord of the Marsh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Asura reputation points"],
      "objectives": [
        [0, "Kill Mobrin, Lord of the Marsh in Sparkfly Swamp."],
        [0, "*BONUS* Kill Mobrin in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Mobrin, Lord of the Marsh (Zaishen quest)", "de": "Mobrin, Herr des Sumpfes (Zaishen-Kopfgeld)"}
    },
    "100172": {
      "name": "Moddok Crevice (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "objectives": [
        [0, "Take Dunkoro through the Moddok Crevice into Vabbi."],
        [0, "*BONUS* Complete the mission by following Dunkoro's suggestions."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Moddok Crevice (Zaishen quest)", "de": "Moddok-Spalte (Zaishen-Mission)"}
    },
    "100173": {
      "name": "Mohby Windbeak (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Luxon faction"],
      "objectives": [
        [0, "Kill Mohby Windbeak in the Gyala Hatchery."],
        [0, "*BONUS* Kill Mohby Windbeak in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Mohby Windbeak (Zaishen quest)", "de": "Mohby Windschnabel (Zaishen-Kopfgeld)"}
    },
    "100174": {
      "name": "Molotov Rocktail (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Kill Molotov Rocktail in the Dalada Uplands."],
        [0, "*BONUS* Kill Molotov Rocktail in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Molotov Rocktail (Zaishen quest)", "de": "Molotov Felsschweif (Zaishen-Kopfgeld)"}
    },
    "100175": {
      "name": "Morostav Trail (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["10,000 Kurzick faction"],
      "objectives": [
        [0, "Clear the Morostav Trail in the Echovald Forest of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Morostav Trail (Zaishen vanquish)", "de": "Morostovweg (Zaishen-Bezwingung)"}
    },
    "100176": {
      "name": "Mount Qinkai (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear Mount Qinkai in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Mount Qinkai (Zaishen vanquish)", "de": "Qinkai (Zaishen-Bezwingung)"}
    },
    "100177": {
      "name": "Mourning Veil Falls (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "objectives": [
        [0, "Clear Mourning Veil Falls in the Echovald Forest of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Mourning Veil Falls (Zaishen vanquish)", "de": "Trauerflorfälle (Zaishen-Bezwingung)"}
    },
    "100178": {
      "name": "Mungri Magicbox (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction"],
      "objectives": [
        [0, "Kill Mungri Magicbox in Ferndale."],
        [0, "*BONUS* Kill Mungri Magicbox in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Mungri Magicbox (Zaishen quest)", "de": "Mungri Magiebox (Zaishen-Kopfgeld)"}
    },
    "100179": {
      "name": "Murakai, Lady of the Night (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Kill Murakai, Lady of the Night in the Cathedral of Flames."],
        [0, "*BONUS* Kill Murakai in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Murakai, Lady of the Night (Zaishen quest)",
        "de": "Murakai, Herrin der Nacht (Zaishen-Kopfgeld)"
      }
    },
    "100180": {
      "name": "Myish, Lady of the Lake (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Norn reputation points"],
      "objectives": [
        [0, "Kill Myish, Lady of the Lake in Drakkar Lake."],
        [0, "*BONUS* Kill Myish in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Myish, Lady of the Lake (Zaishen quest)", "de": "Myish, Herrin des Sees (Zaishen-Kopfgeld)"}
    },
    "100181": {
      "name": "Nahpui Quarter (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Become Closer to the Stars within the Nahpui Quarter of Kaineng City."],
        [0, "*BONUS* Complete the mission in under 25 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Nahpui Quarter (Zaishen quest)", "de": "Nahpuiviertel (Zaishen-Mission)"}
    },
    "100182": {
      "name": "Nahpui Quarter (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Nahpui Quarter in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Nahpui Quarter (Zaishen vanquish)", "de": "Nahpuiviertel (Zaishen-Bezwingung)"}
    },
    "100183": {
      "name": "Nebo Terrace (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Nebo Terrace in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Nebo Terrace (Zaishen vanquish)", "de": "Nebo-Terrasse (Zaishen-Bezwingung)"}
    },
    "100184": {
      "name": "Nolani Academy (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Help Prince Rurik exit the besieged Nolani Academy and return to Rin."],
        [0, "*BONUS* Return the Tome of the Fallen to its pedestal."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "Nolani Academy (Zaishen quest)", "de": "Nolani-Akademie (Zaishen-Mission)"}
    },
    "100185": {
      "name": "Norrhart Domains (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "objectives": [
        [0, "Clear Norrhart Domains in the Far Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Norrhart Domains (Zaishen vanquish)", "de": "Norrhart-Gebiete (Zaishen-Bezwingung)"}
    },
    "100186": {
      "name": "North Kryta Province (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the North Kryta Province of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "North Kryta Province (Zaishen vanquish)", "de": "Provinz Nordkryta (Zaishen-Bezwingung)"}
    },
    "100187": {
      "name": "Nulfastu Earthbound (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Norn reputation points"],
      "objectives": [
        [0, "Kill Nulfastu, Earthbound in Drakkar Lake."],
        [0, "*BONUS* Kill Nulfastu in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Nulfastu, Earthbound (Zaishen quest)", "de": "Nulfastu Erdgebundener (Zaishen-Kopfgeld)"}
    },
    "100188": {
      "name": "Nundu Bay (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Take Melonni and defend the village of Ronjok."],
        [0, "*BONUS* Defeat two additional Harbingers of Nightfall."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Nundu Bay (Zaishen quest)", "de": "Nundu-Bucht (Zaishen-Mission)"}
    },
    "100189": {
      "name": "Old Ascalon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Old Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Old Ascalon (Zaishen vanquish)", "de": "Alt-Ascalon (Zaishen-Bezwingung)"}
    },
    "100190": {
      "name": "Panjiang Peninsula (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Panjiang Peninsula on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Panjiang Peninsula (Zaishen vanquish)", "de": "Panjiang-Halbinsel (Zaishen-Bezwingung)"}
    },
    "100191": {
      "name": "Perdition Rock (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Perdition Rock in the Ring of Fire Islands of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Perdition Rock (Zaishen vanquish)", "de": "Fels der Verdammnis (Zaishen-Bezwingung)"}
    },
    "100192": {
      "name": "Pilgrimage to the Hall of Heroes",
      "type": "event",
      "givers": [694],
      "event": 5,
      "repeatable": true,
      "objectives": [
        [0, "Win 1 battle or participate in 3 battles in Heroes' Ascent."],
        [0, "See Anzhaer, Hammer of Balthazar for your reward."]
      ],
      "rewards": ["Proof of Steel"],
      "wiki": {"en": "Pilgrimage to the Hall of Heroes", "de": "Pilgerreise zur Halle der Helden"}
    },
    "100193": {
      "name": "Plague of Destruction (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
      "objectives": [
        [0, "Kill Plague of Destruction and accompanying foes in Raven's Point."],
        [0, "*BONUS* Kill Plague of Destruction and accompanying foes in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Plague of Destruction (Zaishen quest)", "de": "Seuche der Zerstörung (Zaishen-Kopfgeld)"}
    },
    "100194": {
      "name": "Plains of Jarin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear points"],
      "objectives": [
        [0, "Clear the Plains of Jarin in Istan of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Plains of Jarin (Zaishen vanquish)", "de": "Flachland von Jarin (Zaishen-Bezwingung)"}
    },
    "100195": {
      "name": "Pockmark Flats (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Pockmark Flats in Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Pockmark Flats (Zaishen vanquish)", "de": "Pockennarbenebene (Zaishen-Bezwingung)"}
    },
    "100196": {
      "name": "Pogahn Passage (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "objectives": [
        [0, "Rescue Kormir from Gandara."],
        [0, "*BONUS* Complete optional objectives."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Pogahn Passage (Zaishen quest)", "de": "Passage von Pogahn (Zaishen-Mission)"}
    },
    "100197": {
      "name": "Poisoned Outcrops (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "objectives": [
        [0, "Clear the Poisoned Outcrops in the Desolation of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Poisoned Outcrops (Zaishen vanquish)", "de": "Giftige Auswüchse (Zaishen-Bezwingung)"}
    },
    "100198": {
      "name": "Pongmei Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Pongmei Valley near Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Pongmei Valley (Zaishen vanquish)", "de": "Pongmei-Tal (Zaishen-Bezwingung)"}
    },
    "100199": {
      "name": "Priest of Menzies (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill the Priest of Menzies in the Fissure of Woe."],
        [0, "*BONUS* Kill the Priest of Menzies in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Priest of Menzies (Zaishen quest)", "de": "Menzies' Priester (Zaishen-Kopfgeld)"}
    },
    "100200": {
      "name": "Prismatic Ooze (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill 3 Prismatic Oozes in the Depths of Tyria. Lists the region instead of the dungeon name"],
        [0, "*BONUS* Kill 3 Prismatic Oozes in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Prismatic Ooze (Zaishen quest)", "de": "Spektral-Schleim (Zaishen-Kopfgeld)"}
    },
    "100201": {
      "name": "Prophet's Path (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Prophet's Path in the Crystal Desert of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Prophet's Path (Zaishen vanquish)", "de": "Pfad des Propheten (Zaishen-Bezwingung)"}
    },
    "100202": {
      "name": "Pywatt the Swift (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Asura reputation points"],
      "objectives": [
        [0, "Kill Pywatt the Swift in Alcazia Tangle."],
        [0, "*BONUS* Kill Pywatt the Swift in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Pywatt the Swift (Zaishen quest)", "de": "Pywatt der Schnelle (Zaishen-Kopfgeld)"}
    },
    "100203": {
      "name": "Quansong Spiritspeak (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill Quansong Spiritspeak in Tahnnakai Temple."],
        [0, "*BONUS* Kill Quansong Spiritspeak in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Quansong Spiritspeak (Zaishen quest)", "de": "Quansong Geistsprecher (Zaishen-Kopfgeld)"}
    },
    "100204": {
      "name": "Raisu Palace (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Protect Emperor Kisu from Shiro'ken."],
        [0, "*BONUS* Complete the mission in under 20 minutes (26 minutes in Hard Mode)."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Raisu Palace (Zaishen quest)", "de": "Raisu-Palast (Zaishen-Mission)"}
    },
    "100205": {
      "name": "Raisu Palace (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Raisu Palace in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Raisu Palace (Zaishen vanquish)", "de": "Raisu-Palast (Zaishen-Bezwingung)"}
    },
    "100206": {
      "name": "Rand Stormweaver (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Rand Stormweaver and accompanying foes in Slavers' Exile."],
        [0, "*BONUS* Kill Rand Stormweaver and accompanying foes in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Rand Stormweaver (Zaishen quest)", "de": "Rand Sturmweber (Zaishen-Kopfgeld)"}
    },
    "100207": {
      "name": "Random Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["3000 Balthazar faction"],
      "objectives": [
        [0, "Win 3 battles in Random Arena."],
        [0, "*BONUS* Win 5 in a row in Random Arena."],
        [0, "*BONUS* Win 9 battles in Random Arena."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Random Arena (Zaishen quest)", "de": "Zufallsarenen (Zaishen-Kampf)"}
    },
    "100208": {
      "name": "Reed Bog (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Reed Bog in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Reed Bog (Zaishen vanquish)", "de": "Schilfmoor (Zaishen-Bezwingung)"}
    },
    "100209": {
      "name": "Regent Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the Regent Valley in Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Regent Valley (Zaishen vanquish)", "de": "Regentental (Zaishen-Bezwingung)"}
    },
    "100210": {
      "name": "Remnant of Antiquities (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill the Remnant of Antiquities and accompanying foes in the Sepulchre of Dragrimmar."],
        [0, "*BONUS* Kill the Remnant of Antiquities and accompanying foes in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Remnant of Antiquities (Zaishen quest)", "de": "Überrest der Vorzeit (Zaishen-Kopfgeld)"}
    },
    "100211": {
      "name": "Resplendent Makuun (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Resplendent Makuun in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Resplendent Makuun (Zaishen vanquish)", "de": "Makuun die Leuchtende (Zaishen-Bezwingung)"}
    },
    "100212": {
      "name": "Restore the Temple of War",
      "type": "secondary",
      "givers": [635],
      "xp": 10000,
      "gold": 750,
      "objectives": [
        [0, "Destroy the Seeds of Corruption. 5..0 Seeds of Corruption remain."],
        [0, "Return to Eternal Forgemaster for your reward."]
      ],
      "requires": [100055],
      "wiki": {"en": "Restore the Temple of War", "de": "Stellt den Tempel des Krieges wieder her"}
    },
    "100213": {
      "name": "Restoring Grenth's Monuments",
      "type": "instance",
      "givers": [578],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Summon the Reaper of the Chaos Planes."],
        [0, "Summon the Reaper of the Ice Wastes."],
        [0, "Summon the Reaper of the Bone Pits."],
        [0, "Summon the Reaper of the Spawning Pools."],
        [0, "Summon the Reaper of the Forgotten Vale."],
        [0, "Summon the Reaper of the Twin Serpent Mountains."],
        [0, "Return to Reaper of the Labyrinth for your reward."]
      ],
      "requires": [100041],
      "next": [100120, 100325, 100231, 100058, 100270, 100256],
      "wiki": {"en": "Restoring Grenth's Monuments", "de": "Grenths Monumente wiederherstellen"}
    },
    "100214": {
      "name": "Rhea's Crater (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear Rhea's Crater in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Rhea's Crater (Zaishen vanquish)", "de": "Rheas Krater (Zaishen-Bezwingung)"}
    },
    "100215": {
      "name": "Rilohn Refuge (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "objectives": [
        [0, "Take the Master of Whispers to Rilohn Refuge in Kourna and defeat the demon in Mahnkelon Waterworks."],
        [0, "*BONUS* Complete the mission without shutting down the water pumps."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Rilohn Refuge (Zaishen quest)", "de": "Rilohn-Refugium (Zaishen-Mission)"}
    },
    "100216": {
      "name": "Ring of Fire (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear the way on the Ring of Fire islands."],
        [0, "*BONUS* Return the Spectral Essence from the Eidolon to the Ancient Seer."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Ring of Fire (Zaishen quest)", "de": "Feuerring (Zaishen-Mission)"}
    },
    "100217": {
      "name": "Riven Earth (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "objectives": [
        [0, "Clear Riven Earth in the Tarnished Coast of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Riven Earth (Zaishen vanquish)", "de": "Zerrissene Erde (Zaishen-Bezwingung)"}
    },
    "100218": {
      "name": "Riverside Province (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Claim the Scepter of Orr."],
        [0, "*BONUS* Take out all nine watchtowers."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Riverside Province (Zaishen quest)", "de": "Flussuferprovinz (Zaishen-Mission)"}
    },
    "100219": {
      "name": "Rotscale (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill Rotscale in Majesty's Rest."],
        [0, "*BONUS* Kill Rotscale in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Rotscale (Zaishen quest)", "de": "Faulschuppe (Zaishen-Kopfgeld)"}
    },
    "100220": {
      "name": "Royen Beastkeeper (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill Royen Beastkeeper in Nahpui Quarter of Kaineng City."],
        [0, "*BONUS* Kill Royen Beastkeeper in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Royen Beastkeeper (Zaishen quest)", "de": "Royen Bestienwärter (Zaishen-Kopfgeld)"}
    },
    "100221": {
      "name": "Rragar Maneater (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Kill Rragar Maneater in the Depths of Tyria. Lists the region instead of the dungeon name"],
        [0, "*BONUS* Kill Rragar Maneater in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Rragar Maneater (Zaishen quest)", "de": "Rragar Menschenfresser (Zaishen-Kopfgeld)"}
    },
    "100222": {
      "name": "Ruins of Morah (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Kill Abaddon's prophet in the Ruins of Morah."],
        [0, "*BONUS* Complete the mission in less than 8 minutes (10 in Hard Mode)."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Ruins of Morah (Zaishen quest)", "de": "Ruinen von Morah (Zaishen-Mission)"}
    },
    "100223": {
      "name": "Ruins of Surmia (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Assist and protect Prince Rurik as he frees Ascalonians from the Charr in the Ruins of Surmia."],
        [0, "*BONUS* Extinguish the Charr temple flame."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "Ruins of Surmia (Zaishen quest)", "de": "Ruinen von Surmia (Zaishen-Mission)"}
    },
    "100224": {
      "name": "Sacnoth Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Clear Sacnoth Valley in the Charr Homelands of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Sacnoth Valley (Zaishen vanquish)", "de": "Sacnoth-Tal (Zaishen-Bezwingung)"}
    },
    "100225": {
      "name": "Sage Lands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Sage Lands in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Sage Lands (Zaishen vanquish)", "de": "Land der Weisen (Zaishen-Bezwingung)"}
    },
    "100226": {
      "name": "Salt Flats (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Salt Flats in the Crystal Desert of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Salt Flats (Zaishen vanquish)", "de": "Salzebenen (Zaishen-Bezwingung)"}
    },
    "100227": {
      "name": "Sanctum Cay (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Safely deliver the Scepter of Orr to Vizier Khilbron."],
        [0, "*BONUS* Help the Restless Spirit find his final resting place."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Sanctum Cay (Zaishen quest)", "de": "Riff der Stille (Zaishen-Mission)"}
    },
    "100228": {
      "name": "Saoshang Trail (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Saoshang Trail on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Saoshang Trail (Zaishen vanquish)", "de": "Saoshangweg (Zaishen-Bezwingung)"}
    },
    "100229": {
      "name": "Scoundrel's Rise (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Scoundrel's Rise in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Scoundrel's Rise (Zaishen vanquish)", "de": "Schurkenhügel (Zaishen-Bezwingung)"}
    },
    "100230": {
      "name": "Selvetarm (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Selvetarm and accompanying foes in Slavers' Exile."],
        [0, "*BONUS* Kill Selvetarm and accompanying foes in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Selvetarm (Zaishen quest)", "de": "Selvetarm (Zaishen-Kopfgeld)"}
    },
    "100231": {
      "name": "Servants of Grenth",
      "type": "instance",
      "givers": [596],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Defend King Frozenwind while he summons new Ice Elementals."],
        [0, "Protect the Reaper of Ice."],
        [0, "Return to the Reaper of the Ice Wastes for your reward."]
      ],
      "requires": [100213],
      "wiki": {"en": "Servants of Grenth", "de": "Grenths Diener"}
    },
    "100232": {
      "name": "Shadow's Passage (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Shadow's Passage in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Shadow's Passage (Zaishen vanquish)", "de": "Schattenpassage (Zaishen-Bezwingung)"}
    },
    "100233": {
      "name": "Shenzun Tunnels (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Shenzun Tunnels in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Shenzun Tunnels (Zaishen vanquish)", "de": "Shenzun-Tunnel (Zaishen-Bezwingung)"}
    },
    "100234": {
      "name": "Silent Surf (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear the Silent Surf in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Silent Surf (Zaishen vanquish)", "de": "Stumme Brandung (Zaishen-Bezwingung)"}
    },
    "100235": {
      "name": "Silverwood (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Silverwood in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Silverwood (Zaishen vanquish)", "de": "Silberholz (Zaishen-Bezwingung)"}
    },
    "100236": {
      "name": "Skyward Reach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Skyward Reach in the Crystal Desert of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Skyward Reach (Zaishen vanquish)", "de": "Himmelsspitze (Zaishen-Bezwingung)"}
    },
    "100237": {
      "name": "Slaves of Menzies",
      "type": "secondary",
      "givers": [725],
      "xp": 10000,
      "gold": 750,
      "objectives": [
        [0, "Destroy the Shadow Overlords. [sic] You have [4...0] Shadow Overlords left."],
        [0, "Return to Miko the Unchained for your reward."]
      ],
      "wiki": {"en": "Slaves of Menzies", "de": "Sklaven von Menzies"}
    },
    "100238": {
      "name": "Snake Dance (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Snake Dance in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Snake Dance (Zaishen vanquish)", "de": "Schlangentanz (Zaishen-Bezwingung)"}
    },
    "100239": {
      "name": "Sparkfly Swamp (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "objectives": [
        [0, "Clear Sparkfly Swamp in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Sparkfly Swamp (Zaishen vanquish)", "de": "Funkenschwärmersumpf (Zaishen-Bezwingung)"}
    },
    "100240": {
      "name": "Spearhead Peak (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Spearhead Peak in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Spearhead Peak (Zaishen vanquish)", "de": "Speerspitzengipfel (Zaishen-Bezwingung)"}
    },
    "100241": {
      "name": "Ssuns, Blessed of Dwayna (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Luxon faction"],
      "objectives": [
        [0, "Kill Ssuns, Blessed of Dwayna in the Archipelagos."],
        [0, "*BONUS* Kill Ssuns in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "Ssuns, Blessed of Dwayna (Zaishen quest)",
        "de": "Ssuns der von Dwayna Gesegnete (Zaishen-Kopfgeld)"
      }
    },
    "100242": {
      "name": "Stingray Strand (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Stingray Strand in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Stingray Strand (Zaishen vanquish)", "de": "Stachelrochenstrand (Zaishen-Bezwingung)"}
    },
    "100243": {
      "name": "Sunjiang District (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Locate and destroy the source of the spirit army in the Sunjiang District of Kaineng City."],
        [0, "*BONUS* Complete the mission in under 20 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Sunjiang District (Zaishen quest)", "de": "Sunjiang-Bezirk (Zaishen-Mission)"}
    },
    "100244": {
      "name": "Sunjiang District (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Sunjiang District in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Sunjiang District (Zaishen vanquish)", "de": "Sunjiang-Bezirk (Zaishen-Bezwingung)"}
    },
    "100245": {
      "name": "Sunqua Vale (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Sunqua Vale on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Sunqua Vale (Zaishen vanquish)", "de": "Sunqua-Tal (Zaishen-Bezwingung)"}
    },
    "100246": {
      "name": "Sunward Marches (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Sunward Marches in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Sunward Marches (Zaishen vanquish)", "de": "Sonnenwärtige Sümpfe (Zaishen-Bezwingung)"}
    },
    "100247": {
      "name": "TPS Regulator Golem (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "objectives": [
        [0, "Kill the TPS Regulator Golem in Oola's Lab."],
        [0, "*BONUS* Kill the TPS Regulator Golem in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "TPS Regulator Golem (Zaishen quest)", "de": "TPS-Regler-Golem (Zaishen-Kopfgeld)"}
    },
    "100248": {
      "name": "Tahnnakai Temple (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Take Mhenlo and free the eight bound spirits in Tahnnakai Temple."],
        [0, "*BONUS* Complete the mission in under 20 minutes (30 in Hard Mode)."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Tahnnakai Temple (Zaishen quest)", "de": "Tahnnakai-Tempel (Zaishen-Mission)"}
    },
    "100249": {
      "name": "Tahnnakai Temple (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Tahnnakai Temple in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Tahnnakai Temple (Zaishen vanquish)", "de": "Tahnnakai-Tempel (Zaishen-Bezwingung)"}
    },
    "100250": {
      "name": "Talmark Wilderness (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Talmark Wilderness in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Talmark Wilderness (Zaishen vanquish)", "de": "Talmark-Wildnis (Zaishen-Bezwingung)"}
    },
    "100251": {
      "name": "Talus Chute (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear Talus Chute in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "Talus Chute (Zaishen vanquish)", "de": "Talusschnelle (Zaishen-Bezwingung)"}
    },
    "100252": {
      "name": "Tangle Root (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Tangle Root in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Tangle Root (Zaishen vanquish)", "de": "Wildwurzel (Zaishen-Bezwingung)"}
    },
    "100253": {
      "name": "Tasca's Demise (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Tasca's Demise in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Tasca's Demise (Zaishen vanquish)", "de": "Tascas Ableben (Zaishen-Bezwingung)"}
    },
    "100254": {
      "name": "Team Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "objectives": [
        [0, "Win 3 battles in Team Arena."],
        [0, "*BONUS* 5 battles in a row in Team Arena."],
        [0, "*BONUS* Win 9 battles in Team Arena."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Team Arena (Zaishen quest)", "de": "Team-Arena (Zaishen-Kampf)"}
    },
    "100255": {
      "name": "Tears of the Fallen (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Tears of the Fallen in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Tears of the Fallen (Zaishen vanquish)", "de": "Tränen der Gefallenen (Zaishen-Bezwingung)"}
    },
    "100256": {
      "name": "Terrorweb Queen",
      "type": "instance",
      "givers": [717],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Destroy the Terrorweb Queen."],
        [0, "Return to Reaper of the Spawning Pools for your reward."]
      ],
      "requires": [100213],
      "wiki": {"en": "Terrorweb Queen", "de": "Schrecknetzkönigin (Quest)"}
    },
    "100257": {
      "name": "The Alkali Pan (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "objectives": [
        [0, "Clear the Alkali Pan in the Desolation of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Alkali Pan (Zaishen vanquish)", "de": "Das Alkalibecken (Zaishen-Bezwingung)"}
    },
    "100258": {
      "name": "The Arid Sea (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Arid Sea in the Crystal Desert of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "The Arid Sea (Zaishen vanquish)", "de": "Das Trockene Meer (Zaishen-Bezwingung)"}
    },
    "100259": {
      "name": "The Black Beast of Arrgh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "objectives": [
        [0, "Kill the Black Beast of Arrgh in the Foundry of Failed Creations"],
        [0, "*BONUS* Kill the Black Beast of Arrgh in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "The Black Beast of Arrgh (Zaishen quest)",
        "de": "Die Schwarze Bestie von Arrgh (Zaishen-Kopfgeld)"
      }
    },
    "100260": {
      "name": "The Black Curtain (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Black Curtain in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "The Black Curtain (Zaishen vanquish)", "de": "Der Schwarze Vorhang (Zaishen-Bezwingung)"}
    },
    "100261": {
      "name": "The Breach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Breach in Ascalon of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "The Breach (Zaishen vanquish)", "de": "Die Bresche (Zaishen-Bezwingung)"}
    },
    "100262": {
      "name": "The Darkness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Kill the 3 Darknesses in the Hall of Heroes."],
        [0, "*BONUS* Kill the 3 Darknesses in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 40 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 100 Zaishen Copper Coins."],
      "wiki": {"en": "The Darknesses (Zaishen quest)", "de": "Das Dunkel (Zaishen-Kopfgeld)"}
    },
    "100263": {
      "name": "The Dragon's Lair (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Talk to Glint in the Dragon's Lair."],
        [0, "*BONUS* Defeat Glint."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "The Dragon's Lair (Zaishen quest)", "de": "Die Drachenhöhle (Zaishen-Mission)"}
    },
    "100264": {
      "name": "The Elusive Golemancer (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Asura reputation points"],
      "objectives": [
        [0, "In the laboratory south west of Rata Sum, survive Oola's security measures while you locate her."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Elusive Golemancer (Zaishen quest)", "de": "Die scheue Golemantin (Zaishen-Mission)"}
    },
    "100265": {
      "name": "The Eternal Forgemaster",
      "type": "secondary",
      "givers": [323],
      "xp": 5000,
      "gold": 500,
      "objectives": [
        [0, "Clear the Temple of War of enemies!"],
        [0, "Seek out the Forgemaster at the temple of War."],
        [0, "See Eternal Forgemaster for your reward."]
      ],
      "next": [100055],
      "wiki": {"en": "The Eternal Forgemaster", "de": "Der Herr der ewigen Schmiede"}
    },
    "100266": {
      "name": "The Eternal Grove (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction"],
      "objectives": [
        [0, "Protect the Forever Trees in the Eternal Grove."],
        [0, "*BONUS* Keep all 12 Tree Singers alive."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Eternal Grove (Zaishen quest)", "de": "Der Ewige Hain (Zaishen-Mission)"}
    },
    "100267": {
      "name": "The Eternal Grove (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "objectives": [
        [0, "Clear the Eternal Grove in the Echovald Forest of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Eternal Grove (Zaishen vanquish)", "de": "Der Ewige Hain (Zaishen-Bezwingung)"}
    },
    "100268": {
      "name": "The Falls (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear the Falls in the Maguuma Jungle of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "The Falls (Zaishen vanquish)", "de": "Die Wasserfälle (Zaishen-Bezwingung)"}
    },
    "100269": {
      "name": "The Floodplain of Mahnkelon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Floodplain of Mahnkelon in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "The Floodplain of Mahnkelon (Zaishen vanquish)",
        "de": "Die Schwemmebene von Mahnkelon (Zaishen-Bezwingung)"
      }
    },
    "100270": {
      "name": "The Four Horsemen",
      "type": "instance",
      "givers": [466],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Destroy Madruk Dhuum."],
        [0, "Destroy Thul Za Dhuum."],
        [0, "Destroy Ghozer Dhuum."],
        [0, "Destroy Kazhad Dhuum."],
        [0, "Return to Reaper of the Chaos Planes for your reward."]
      ],
      "requires": [100213],
      "wiki": {"en": "The Four Horsemen", "de": "Die vier Reiter"}
    },
    "100271": {
      "name": "The Four Horsemen (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Kill the four horsemen; Madruk Dhuum, Thul Za Dhuum, Ghozer Dhuum, Kazhad Dhuum in the Underworld."],
        [0, "*BONUS* Kill the four horsemen in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 60 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 150 Zaishen Copper Coins."],
      "wiki": {"en": "The Four Horsemen (Zaishen quest)", "de": "Die vier Reiter (Zaishen-Kopfgeld)"}
    },
    "100272": {
      "name": "The Frost Gate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Open the Frost Gate in the Northern Shiverpeaks."],
        [0, "*BONUS* Secure the secret siege weapon plans."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "The Frost Gate (Zaishen quest)", "de": "Das Frosttor (Zaishen-Mission)"}
    },
    "100273": {
      "name": "The Great Northern Wall (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Scout the enemy territory north of the Great Northern Wall and assess the strength of the Charr army."],
        [0, "*BONUS* Find and return the four pieces of Kilnn Testibrie's armor to his tomb."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "The Great Northern Wall (Zaishen quest)", "de": "Der Große Nordwall (Zaishen-Mission)"}
    },
    "100274": {
      "name": "The Greater Darkness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "objectives": [
        [0, "Kill the Greater Darkness in Ravenheart Gloom."],
        [0, "*BONUS* Kill The Unlike the previous objective, 'The' is capitalized here Greater Darkness in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Greater Darkness (Zaishen quest)", "de": "Das Große Dunkel (Zaishen-Kopfgeld)"}
    },
    "100275": {
      "name": "The Hidden City of Ahdashim (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Hidden City of Ahdashim in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "The Hidden City of Ahdashim (Zaishen vanquish)",
        "de": "Verborgene Stadt von Ahdashim (Zaishen-Bezwingung)"
      }
    },
    "100276": {
      "name": "The Hunt",
      "type": "secondary",
      "givers": [408],
      "xp": 10000,
      "gold": 750,
      "objectives": [
        [0, "Destroy the Shard Wolves. 7..0 Shard Wolve[s] [sic] remain."],
        [0, "Return to Nimros the Hunter for your reward."]
      ],
      "wiki": {"en": "The Hunt", "de": "Die Jagd"}
    },
    "100277": {
      "name": "The Iron Forgeman (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill the Iron Forgeman in the Forge Heart."],
        [0, "*BONUS* Kill The Unlike the previous objective, 'The' is capitalized here Iron Forgeman in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "The Iron Forgeman (Zaishen quest)", "de": "Der Eiserne Schmied (Zaishen-Kopfgeld)"}
    },
    "100278": {
      "name": "The Mirror of Lyss (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Mirror of Lyss in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Mirror of Lyss (Zaishen vanquish)", "de": "Der Spiegel von Lyss (Zaishen-Bezwingung)"}
    },
    "100279": {
      "name": "The Nameless Masters",
      "type": "secondary",
      "givers": [330],
      "rewards": ["Unlocks Zaishen Challenge"],
      "next": [100296],
      "objectives": [
        [0, "Speak with [3...0] more master[s] on the training grounds of the Isle of the Nameless."],
        [0, "Return to the Guide on the Isle of the Nameless."]
      ],
      "wiki": {"en": "The Nameless Masters", "de": "Der Namenlose Meister"}
    },
    "100280": {
      "name": "The Nightman Cometh",
      "type": "instance",
      "givers": [329],
      "repeatable": true,
      "xp": 15000,
      "gold": 1000,
      "objectives": [
        [0, "Engage Dhuum in the Hall of Judgment. Your entire party must enter the hall."],
        [
          0,
          "Protect the Reapers while they channel all their energy into Dhuum's Rest, a powerful enchantment developed to force Dhuum into dormancy. At least one Reaper must survive. There are 7..1 Reapers still standing."
        ],
        [0, "Lay Dhuum low so the Reapers' magic can force Dhuum into dormancy."],
        [0, "See King Frozenwind for your reward."]
      ],
      "requires": [100120, 100325, 100231, 100058, 100270, 100256],
      "wiki": {"en": "The Nightman Cometh", "de": "Der Nachtmann kommt"}
    },
    "100281": {
      "name": "The Path of the Zaishen Elite",
      "type": "secondary",
      "givers": [333],
      "objectives": [
        [0, "Speak to the Guard of the Isles near the eastern gate to access the Forbidden Path."],
        [0, "Speak to General Yurukaro in the Zaishen Elite refuge."]
      ],
      "rewards": ["Unlocks the Zaishen Elite outpost for the account."],
      "wiki": {"en": "The Path of the Zaishen Elite", "de": "Der Pfad der Zaishen-Elite"}
    },
    "100282": {
      "name": "The Path to Combat: Codex Arena",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Strategist's Zaishen Strongbox"],
      "requires": [100285],
      "next": [100286, 100284],
      "objectives": [
        [0, "Complete a battle in the Codex Arena."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Combat: Codex Arena", "de": "Der Weg zum Kampf: Kodex-Arena"}
    },
    "100283": {
      "name": "The Path to Combat: Guild Battles",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Champion's Zaishen Strongbox"],
      "requires": [100286],
      "next": [100287],
      "objectives": [
        [0, "Complete a guild battle."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Combat: Guild Battles", "de": "Der Weg zum Kampf: Gildenkämpfe"}
    },
    "100284": {
      "name": "The Path to Combat: Heroes' Ascent",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Hero's Zaishen Strongbox"],
      "requires": [100282],
      "next": [100288],
      "objectives": [
        [0, "Complete a battle in Heroes' Ascent."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Combat: Heroes' Ascent", "de": "Der Weg zum Kampf: Aufstieg der Helden"}
    },
    "100285": {
      "name": "The Path to Combat: Random Arena",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Gladiator's Zaishen Strongbox"],
      "next": [100289],
      "objectives": [
        [0, "Complete a battle in the Random Arenas."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Combat: Random Arena", "de": "Der Weg zum Kampf: Zufallsarena"}
    },
    "100286": {
      "name": "The Path to Victory: Codex Arena",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Strategist's Zaishen Strongbox"],
      "requires": [100282],
      "next": [100283],
      "objectives": [
        [0, "Win a battle in the Codex Arena."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Victory: Codex Arena", "de": "Der Weg zum Sieg: Kodex-Arena"}
    },
    "100287": {
      "name": "The Path to Victory: Guild Battles",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Champion's Zaishen Strongbox"],
      "requires": [100283],
      "objectives": [
        [0, "Win a Guild Battle."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Victory: Guild Battles", "de": "Der Weg zum Sieg: Gildenkämpfe"}
    },
    "100288": {
      "name": "The Path to Victory: Heroes' Ascent",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Hero's Zaishen Strongbox"],
      "requires": [100284],
      "objectives": [
        [0, "Win a battle in the Heroes' Ascent."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Victory: Heroes' Ascent", "de": "Der Weg zum Sieg: Aufstieg der Helden"}
    },
    "100289": {
      "name": "The Path to Victory: Random Arenas",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Gladiator's Zaishen Strongbox"],
      "requires": [100285],
      "next": [100282],
      "objectives": [
        [0, "Win a battle in the Random Arenas."],
        [0, "See Zenjal [Zaishen Guide] for your reward."]
      ],
      "wiki": {"en": "The Path to Victory: Random Arenas", "de": "Der Weg zum Sieg: Zufallsarenen"}
    },
    "100290": {
      "name": "The Ruptured Heart (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["1,000 Lightbringer points"],
      "objectives": [
        [0, "Clear the Ruptured Heart in the Desolation of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Ruptured Heart (Zaishen vanquish)", "de": "Das Zerrissene Herz (Zaishen-Bezwingung)"}
    },
    "100291": {
      "name": "The Scar (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "objectives": [
        [0, "Clear the Scar in the Crystal Desert of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 250 Zaishen Copper Coins."],
      "wiki": {"en": "The Scar (Zaishen vanquish)", "de": "Die Narbe (Zaishen-Bezwingung)"}
    },
    "100292": {
      "name": "The Shattered Ravines (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "objectives": [
        [0, "Clear the Shattered Ravines in the Desolation of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {
        "en": "The Shattered Ravines (Zaishen vanquish)",
        "de": "Die Zerklüfteten Schluchten (Zaishen-Bezwingung)"
      }
    },
    "100293": {
      "name": "The Stygian Lords (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Kill 4 Stygian Lords in the Stygian Veil."],
        [0, "*BONUS* Kill 4 Stygian Lords in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Stygian Lords (Zaishen quest)", "de": "Die Stygischen Fürsten (Zaishen-Kopfgeld)"}
    },
    "100294": {
      "name": "The Stygian Underlords (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["300 Lightbringer points"],
      "objectives": [
        [0, "Kill 2 Stygian Underlords in the Stygian Veil."],
        [0, "*BONUS* Kill 2 Stygian Underlords in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Stygian Underlords (Zaishen quest)", "de": "Die Stygischen Unterfürsten (Zaishen-Kopfgeld)"}
    },
    "100295": {
      "name": "The Sulfurous Wastes (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "objectives": [
        [0, "Clear the Sulfurous Wastes in the Desolation of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "The Sulfurous Wastes (Zaishen vanquish)", "de": "Die Schwefel-Einöde (Zaishen-Bezwingung)"}
    },
    "100296": {
      "name": "The Team Trials",
      "type": "secondary",
      "givers": [330],
      "requires": [100279],
      "objectives": [
        [0, "Speak to the Master of Paths on the Isle of the Nameless."],
        [0, "Defeat all four arenas consecutively from outside the Great Temple of Balthazar."],
        [0, "Report to Challenge Master Rioka in the Zaishen Challenge Outpost."]
      ],
      "rewards": ["Unlocks the Zaishen Challenge outpost for the account."],
      "wiki": {"en": "The Team Trials", "de": "Die Teamtests"}
    },
    "100297": {
      "name": "The Wailing Lord",
      "type": "secondary",
      "givers": [322],
      "xp": 10000,
      "gold": 750,
      "objectives": [
        [0, "Destroy the forest banshees. 5..0 forest banshees remain."],
        [0, "Do not harm the Wailing Lord."],
        [0, "Return to Rastigan the Eternal for your reward."]
      ],
      "next": [100003],
      "wiki": {"en": "The Wailing Lord", "de": "Der Herr der Klagen"}
    },
    "100298": {
      "name": "The Wilds (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Rescue the Chosen hostages in the Wilds of the Maguuma Jungle."],
        [0, "*BONUS* Defeat the two centaur chieftains."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "The Wilds (Zaishen quest)", "de": "Die Wildnis (Zaishen-Mission)"}
    },
    "100299": {
      "name": "Thirsty River (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Annihilate the six opposing enemy teams."],
        [0, "*BONUS* Cleanse the area before King Khimaar's spirit leaves."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Thirsty River (Zaishen quest)", "de": "Durstiger Fluss (Zaishen-Mission)"}
    },
    "100300": {
      "name": "Thunderhead Keep (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Retake Thunderhead Keep"],
        [0, "*BONUS* Light the beacons to draw additional Mursaat forces into Thunderhead Keep."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 30 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 45 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 75 Zaishen Copper Coins."],
      "wiki": {"en": "Thunderhead Keep (Zaishen quest)", "de": "Feste Donnerkopf (Zaishen-Mission)"}
    },
    "100301": {
      "name": "Tihark Orchard (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "objectives": [
        [0, "Talk to the three Vabbi Princes about joining your cause."],
        [0, "*BONUS* Participate in five festival activities."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Tihark Orchard (Zaishen quest)", "de": "Obstgarten von Tihark (Zaishen-Mission)"}
    },
    "100302": {
      "name": "Tower of Courage",
      "type": "secondary",
      "givers": [322],
      "xp": 5000,
      "gold": 500,
      "objectives": [
        [0, "Destroy the Shadow Army forces surrounding the Tower of Courage. You have 5...0 groups left."],
        [0, "Destroy the Shadow Lord within the Tower of Courage."],
        [0, "Return to Rastigan the Eternal for your reward."]
      ],
      "next": [100297],
      "wiki": {"en": "Tower of Courage", "de": "Turm der Tapferkeit (Quest)"}
    },
    "100303": {
      "name": "Tower of Strength",
      "type": "secondary",
      "givers": [757],
      "xp": 10000,
      "gold": 750,
      "objectives": [
        [0, "Clear the path to the Tower of Strength. You have 5...0 Shadow Patrols left."],
        [0, "Enter the Tower of Strength and destroy the Shadow Lord."],
        [0, "Return to Eternal Lord Taeres for your reward."]
      ],
      "requires": [100055],
      "wiki": {"en": "Tower of Strength", "de": "Turm der Stärke (Quest)"}
    },
    "100304": {
      "name": "Traveler's Vale (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Traveler's Vale in the Northern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Traveler's Vale (Zaishen vanquish)", "de": "Tal des Reisenden (Zaishen-Bezwingung)"}
    },
    "100305": {
      "name": "Turai's Procession (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear Turai's Procession in Kourna of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Turai's Procession (Zaishen vanquish)", "de": "Turais Weg (Zaishen-Bezwingung)"}
    },
    "100306": {
      "name": "Twin Serpent Lakes (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Twin Serpent Lakes in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Twin Serpent Lakes (Zaishen vanquish)", "de": "Zwillingsschlangenseen (Zaishen-Bezwingung)"}
    },
    "100307": {
      "name": "Unwaking Waters (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction", "2,500 Luxon faction"],
      "objectives": [
        [0, "Defeat Kuunavang in the Unwaking Waters."],
        [0, "*BONUS* Complete the mission in under 15 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Unwaking Waters (Zaishen quest)", "de": "Verschlafene Gewässer (Zaishen-Mission)"}
    },
    "100308": {
      "name": "Unwaking Waters (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "objectives": [
        [0, "Clear the Unwaking Waters in the Jade Sea of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Unwaking Waters (Zaishen vanquish)", "de": "Verschlafene Gewässer (Zaishen-Bezwingung)"}
    },
    "100309": {
      "name": "Unwanted Guests",
      "type": "instance",
      "givers": [578],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Clear The Labyrinth of the invading Dryder Force. you have 6..0 groups remaining."],
        [0, "Return to Reaper of the Labyrinth for your reward."]
      ],
      "requires": [100041],
      "wiki": {"en": "Unwanted Guests", "de": "Ungebetene Gäste"}
    },
    "100310": {
      "name": "Urgoz (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["7,500 Kurzick faction"],
      "objectives": [
        [0, "Kill Urgoz in Urgoz's Warren."],
        [0, "*BONUS* Kill Urgoz in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Urgoz (Zaishen quest)", "de": "Urgoz (Zaishen-Kopfgeld)"}
    },
    "100311": {
      "name": "Varajar Fells (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "objectives": [
        [0, "Clear the Varajar Fells in the Far Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Varajar Fells (Zaishen vanquish)", "de": "Varajar-Moor (Zaishen-Bezwingung)"}
    },
    "100312": {
      "name": "Vehjin Mines (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Vehjin Mines in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Vehjin Mines (Zaishen vanquish)", "de": "Vehjin-Minen (Zaishen-Bezwingung)"}
    },
    "100313": {
      "name": "Vehtendi Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Vehtendi Valley in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Vehtendi Valley (Zaishen vanquish)", "de": "Vehtendi-Tal (Zaishen-Bezwingung)"}
    },
    "100314": {
      "name": "Vengeful Aatxe (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Kill a Vengeful Aatxe in the Underworld."],
        [0, "*BONUS* Kill a Vengeful Aatxe in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 40 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 100 Zaishen Copper Coins."],
      "wiki": {"en": "Vengeful Aatxe (Zaishen quest)", "de": "Rachsüchtiger Aatxe (Zaishen-Kopfgeld)"}
    },
    "100315": {
      "name": "Venta Cemetery (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "objectives": [
        [0, "Take Koss and escort the Sunspear evacuees from the Venta Cemetery to the boat at Dajkah Inlet."],
        [0, "*BONUS* Neutralize all 12 guard posts."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Venta Cemetery (Zaishen quest)", "de": "Totenanger von Venta (Zaishen-Mission)"}
    },
    "100316": {
      "name": "Verata (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "objectives": [
        [0, "Kill Verata in Kessex Peak."],
        [0, "*BONUS* Kill Verata in Hard Mode."],
        [0, "See Zehnchu &#91;Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Verata (Zaishen quest)", "de": "Verata (Zaishen-Kopfgeld)"}
    },
    "100317": {
      "name": "Verdant Cascades (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Asura reputation points"],
      "objectives": [
        [0, "Clear the Verdant Cascades in the Tarnished Coast of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Verdant Cascades (Zaishen vanquish)", "de": "Grüne Kaskaden (Zaishen-Bezwingung)"}
    },
    "100318": {
      "name": "Vizunah Square (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "objectives": [
        [0, "Locate and destroy the source of the plague in Kaineng City."],
        [0, "*BONUS* Complete the mission in under 25 minutes. see the Notes section"],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 20 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 30 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 50 Zaishen Copper Coins."],
      "wiki": {"en": "Vizunah Square (Zaishen quest)", "de": "Vizunahplatz (Zaishen-Mission)"}
    },
    "100319": {
      "name": "Vulture Drifts (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Vulture Drifts in the Crystal Desert of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Vulture Drifts (Zaishen vanquish)", "de": "Geierdünen (Zaishen-Bezwingung)"}
    },
    "100320": {
      "name": "Wajjun Bazaar (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Wajjun Bazaar in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Wajjun Bazaar (Zaishen vanquish)", "de": "Wajjun-Basar (Zaishen-Bezwingung)"}
    },
    "100321": {
      "name": "Warband of Brothers (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Rescue three warband members from the Cathedral of Flames in the Charr homelands."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Warband of Brothers (Zaishen quest)", "de": "Brudertrupp (Zaishen-Mission)"}
    },
    "100322": {
      "name": "Watchtower Coast (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Clear Watchtower Coast in Kryta of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Watchtower Coast (Zaishen vanquish)", "de": "Wachturmküste (Zaishen-Bezwingung)"}
    },
    "100323": {
      "name": "Wilderness of Bahdza (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Wilderness of Bahdza in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Wilderness of Bahdza (Zaishen vanquish)", "de": "Wildnis von Bahdza (Zaishen-Bezwingung)"}
    },
    "100324": {
      "name": "Witman's Folly (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Witman's Folly in the Southern Shiverpeaks of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 50 Zaishen Copper Coins."],
      "wiki": {"en": "Witman's Folly (Zaishen vanquish)", "de": "Witmans Torheit (Zaishen-Bezwingung)"}
    },
    "100325": {
      "name": "Wrathful Spirits",
      "type": "instance",
      "givers": [790],
      "repeatable": true,
      "xp": 10000,
      "objectives": [
        [0, "Eliminate the Wrathful Spirits before they destroy all the villagers."],
        [0, "Return to the Reaper of the Forgotten Vale for your reward."]
      ],
      "requires": [100213],
      "wiki": {"en": "Wrathful Spirits", "de": "Zornige Geister"}
    },
    "100326": {
      "name": "Xaquang Skyway (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear the Xaquang Skyway in Kaineng City of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Xaquang Skyway (Zaishen vanquish)", "de": "Xaquang-Himmelsweg (Zaishen-Bezwingung)"}
    },
    "100327": {
      "name": "Yatendi Canyons (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "objectives": [
        [0, "Clear the Yatendi Canyons in Vabbi of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Yatendi Canyons (Zaishen vanquish)", "de": "Yahtendi-Schluchten (Zaishen-Bezwingung)"}
    },
    "100328": {
      "name": "Z'him Monns (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "objectives": [
        [0, "Kill Z'him Monns in Bogroot Growths."],
        [0, "*BONUS* Kill Z'him Monns in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Z'him Monns (Zaishen quest)", "de": "Z'him Monns (Zaishen-Kopfgeld)"}
    },
    "100329": {
      "name": "Zehlon Reach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["750 Sunspear points"],
      "objectives": [
        [0, "Clear Zehlon Reach in Istan of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Zehlon Reach (Zaishen vanquish)", "de": "Zehlon-Bucht (Zaishen-Bezwingung)"}
    },
    "100330": {
      "name": "Zen Daijun (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Search Zen Daijun for the source of the infection."],
        [0, "*BONUS* Complete the mission in under 20 minutes."],
        [0, "*BONUS* Complete the mission in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 15 Zaishen Copper Coins.", "Complete the first *BONUS* Objective for an additional 22 Zaishen Copper Coins.", "Complete the second *BONUS* Objective for an additional 37 Zaishen Copper Coins."],
      "wiki": {"en": "Zen Daijun (Zaishen quest)", "de": "Zen Daijun (Zaishen-Mission)"}
    },
    "100331": {
      "name": "Zen Daijun (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "objectives": [
        [0, "Clear Zen Daijun on Shing Jea Island of all enemies in hard mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "rewards": ["Complete the Base Objective for 150 Zaishen Copper Coins."],
      "wiki": {"en": "Zen Daijun (Zaishen vanquish)", "de": "Zen Daijun (Zaishen-Bezwingung)"}
    },
    "100332": {
      "name": "Zinn's Task",
      "type": "secondary",
      "givers": [668],
      "xp": 50000,
      "gold": 10000,
      "rewards": ["10 Automaton Summoning Stones", "10 Sinister Automatonics"],
      "objectives": [
        [0, "Retrieve R.O.X.'s power crystal."],
        [0, "Retrieve N.O.X.'s power crystal."],
        [0, "Retrieve P.O.X.'s power crystal."],
        [0, "Locate Zinn's secret lair."]
      ],
      "wiki": {"en": "Zinn's Task", "de": "Zinns Aufgabe"}
    },
    "100333": {
      "name": "Zoldark the Unholy (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "objectives": [
        [0, "Kill Zoldark the Unholy in the Vloxen Excavations."],
        [0, "*BONUS* Kill Zoldark the Unholy in Hard Mode."],
        [0, "See Zehnchu [Zaishen Challenge] for your reward."]
      ],
      "wiki": {"en": "Zoldark the Unholy (Zaishen quest)", "de": "Zoldark der Unheilige (Zaishen-Kopfgeld)"}
    },
    "100334": {
      "name": "A Gate Too Far",
      "type": "primary",
      "givers": [249],
      "requires": [100454],
      "objectives": [
        [0, "Speak to Olaf Olafson to journey to Raven's Point. (disappears from Quest Log after entering Mission)"],
        [0, "Help Olaf cleanse the Shrine of the Raven Spirit."],
        [0, "Receive the Raven Blessing from the shrine."],
        [0, "Follow the Destroyer Tremor trail to its source."],
        [0, "Destroy the Asura Gate to halt the Destroyer influx."],
        [0, "Use Raven's Flight to protect you from the Destroyer Tremors."],
        [0, "Receive Unlike the previous objective, there is no \"the\" here Raven Blessing from Olaf."]
      ],
      "rewards": ["Norn reputation points", "First time: 1,000 (1,500 in hard mode)", "On repeat: 100 (150 in hard mode)"],
      "wiki": {"en": "A Gate Too Far", "de": "Ein Portal zu weit"}
    },
    "100335": {
      "name": "A Good Deed",
      "type": "secondary",
      "givers": [405],
      "xp": 5000,
      "gold": 500,
      "rewards": ["500 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Speak with Gwen in the Hall of Monuments."],
        [0, "Speak with Lieutenant Thackeray in the Ice Cliff Chasms."],
        [0, "Speak with Valgar Tempestcrafter in Olafstead."],
        [0, "Take the family crest pendant to Lefsi Spiritchaser in Varajar Fells. Don't take Gwen with you."],
        [0, "Protect Lefsi Spiritchaser while he imbues the pendant."],
        [0, "Speak with Lieutenant Thackeray."],
        [0, "Speak with Gwen."],
        [0, "See Lieutenant Thackeray for your reward."]
      ],
      "wiki": {"en": "A Good Deed.", "de": "Eine gute Tat."}
    },
    "100336": {
      "name": "A Hunter's Pride",
      "type": "secondary",
      "givers": [626],
      "skills": [2374],
      "rewards": ["100 Norn reputation points", "3 Honeycombs"],
      "requires": [100346],
      "objectives": [
        [0, "Travel to Jaga Moraine and track down the polar bear."],
        [0, "Take the hunter's honey."],
        [0, "Use the bear to drive the hunters away. You have driven away [0-5] of 5 hunters."],
        [0, "See Hogni Truthseeker for your reward."]
      ],
      "wiki": {"en": "A Hunter's Pride", "de": "Jägerstolz"}
    },
    "100337": {
      "name": "A Little Help",
      "type": "primary",
      "givers": [501],
      "xp": 2000,
      "rewards": ["250 Asura reputation points"],
      "next": [100361, 100380],
      "objectives": [
        [0, "Seek Renk in Riven Earth and recruit him for the project."],
        [0, "Meet Renk at his laboratory in Alcazia Tangle once you've recruited Gadd and Oola."],
        [0, "Eliminate the Destroyers."],
        [0, "Speak to Renk."],
        [0, "Talk to Mamp in Rata Sum regarding the G.O.L.E.M. project."]
      ],
      "wiki": {"en": "A Little Help", "de": "Ein wenig Hilfe"}
    },
    "100338": {
      "name": "A Time for Heroes",
      "type": "primary",
      "givers": [453],
      "objectives": [
        [0, "Defeat the Great Destroyer."]
      ],
      "rewards": ["Dwarf reputation points", "First time: 5,000 (7,500 in hard mode)", "On repeat: 100 (150 in hard mode)"],
      "wiki": {"en": "A Time for Heroes", "de": "Eine Zeit für Helden"}
    },
    "100339": {
      "name": "Against the Charr",
      "type": "primary",
      "givers": [571],
      "next": [100433],
      "objectives": [
        [0, "Search the Charr camp to the east for signs of the Vanguard captives."],
        [0, "*OPTIONAL* Find ways to weaken the Charr garrison."],
        [0, "*OPTIONAL* Intercept the Charr supply caravan. Use Charr Explosive charges to disable it."],
        [0, "*OPTIONAL* Destroy the watchtowers with explosive charges. [0...2] of 2 destroyed."],
        [0, "*OPTIONAL* Employ the siege devourers to fire explosive charges at the garrison. [0...2] of 2 fired."],
        [0, "Defeat Harvest Soulreign."]
      ],
      "rewards": ["Ebon Vanguard reputation points", "First time: 1,000 (1,500 in hard mode)", "On repeat: 100 (150 in hard mode)"],
      "wiki": {"en": "Against the Charr", "de": "Gegen die Charr"}
    },
    "100340": {
      "name": "Against the Destroyers",
      "type": "primary",
      "campaign": 4,
      "region": 19,
      "xp": 10000,
      "rewards": ["1,000 Deldrimor reputation points"],
      "objectives": [
        [0, "Speak with Jora."],
        [0, "Investigate the Eye of the North."],
        [0, "Seek assistance from the Asura. (The Knowledgeable Asura)"],
        [0, "Gain the Norn as allies. (Northern Allies)"],
        [0, "Search for the Ebon Vanguard in the Charr homelands. (The Missing Vanguard)"],
        [0, "Look into the scrying pool at the Eye of the North."],
        [0, "Seek out Jalis Ironhammer and help summon the power of the Great Dwarf. (Heart of the Shiverpeaks)"],
        [0, "Eliminate the Destroyers. (A Time for Heroes)"],
        [0, "See Droknar for your reward."]
      ],
      "wiki": {"en": "Against the Destroyers", "de": "Gegen die Zerstörer"}
    },
    "100341": {
      "name": "Anything You Can Do",
      "type": "secondary",
      "givers": [315],
      "xp": 15000,
      "gold": 1000,
      "rewards": ["250 Norn reputation points"],
      "requires": [100460],
      "next": [100350],
      "objectives": [
        [0, "Prove your worth to Sif. Bring down Whiteout in Jaga Moraine."],
        [0, "Test your mettle. Defeat Avarr the Fallen in Jaga Moraine"],
        [0, "Cement your legacy. Beat the Fragment of Antiquities in the Sepulchre of Dragrimmar."],
        [0, "See Sif Shadowhunter for your Reward"]
      ],
      "wiki": {"en": "Anything You Can Do", "de": "Was ich kann, könnt Ihr auch"}
    },
    "100342": {
      "name": "Assault on the Stronghold",
      "type": "primary",
      "givers": [307, 308],
      "requires": [100458],
      "objectives": [
        [0, "Roan Fierceheart in Dalada Uplands will prepare you for the assault."],
        [0, "Invade the hierophant's stronghold and rescue the Ebon Vanguard."],
        [0, "Defeat the Charr guards and gain control of the siege devourers."],
        [0, "Target archer groups with siege devourers to cover the armored saurus while it breaks down the front gates."],
        [0, "Free the Ebon Vanguard held captive within the fortress."],
        [0, "Defeat Hierophant Burntsoul and all hostile forces."]
      ],
      "rewards": ["Ebon Vanguard reputation points", "First time: 1,000 (1,500 in hard mode)", "On repeat: 100 (150 in hard mode)"],
      "wiki": {"en": "Assault on the Stronghold", "de": "Der Angriff auf die Festung"}
    },
    "100343": {
      "name": "Attack on Jalis's Camp",
      "type": "secondary",
      "givers": [200],
      "skills": [2217, 2219],
      "rewards": ["200 Deldrimor reputation points", "Diamond"],
      "requires": [100389],
      "next": [100374],
      "objectives": [
        [0, "Tell Orozar that you are ready to defend King Jalis and his camp."],
        [0, "Ask Orozar when Ural will arrive."],
        [0, "Defend King Jalis's camp from the attacking Stone Summit forces."],
        [0, "See Orozar Highstone for your reward."]
      ],
      "wiki": {"en": "Attack on Jalis's Camp", "de": "Angriff auf Jalis' Lager"}
    },
    "100344": {
      "name": "Be Very, Very Quiet...",
      "type": "secondary",
      "givers": [722],
      "skills": [2231],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100342],
      "next": [100391],
      "objectives": [
        [0, "Follow Torch Harrowkeeper. Do not alert him to your presence."],
        [0, "Eavesdrop on the Charr while they discuss their plans."],
        [0, "Talk to Vael. See how he wants to proceed."],
        [0, "Follow the Charr to their meeting with the Grawl leaders. Crash the meeting and eliminate all hostiles."],
        [0, "Bring the Charr Intelligence to Captain Langmar."]
      ],
      "wiki": {"en": "Be Very, Very Quiet...", "de": "Seid ganz, ganz still ..."}
    },
    "100345": {
      "name": "Bear Club for Women / Men",
      "type": "secondary",
      "givers": [249, 250],
      "skills": [2361],
      "rewards": ["100 Norn reputation points"],
      "objectives": [
        [0, "Speak to Olaf about the bear."],
        [0, "Clutch the Club of a Thousand Bears."],
        [0, "Defeat the bear using the club given to you."],
        [0, "See Olaf Olafson for your reward"]
      ],
      "wiki": {"en": "Bear Club for Women", "de": "Bärenkeule"}
    },
    "100346": {
      "name": "Blood Washes Blood",
      "type": "primary",
      "givers": [243],
      "requires": [100364],
      "objectives": [
        [0, "Light the sacred altar. Lead the bear spirit into Bjora Marches to cleanse Jora's homestead."],
        [0, "Accompany Bear on the mountain pilgrimage to the Shrine of the Bear Spirit."],
        [0, "Defeat the Charr forces surrounding the Shrine of the Bear Spirit."],
        [0, "Receive the Ursan Blessing the skill received is Ursan Aura from the Shrine of the Bear Spirit."],
        [0, "Use the bear spirit skill, Ursan Force, to break down the Charr barricades."],
        [0, "Kill the Charr in Jora's homestead. [5...0] group[s] remaining."],
        [0, "Receive Ursan Blessing from Egil."]
      ],
      "rewards": ["Norn reputation points", "First time: 1,000 (1,500 in hard mode)", "On repeat: 100 (150 in hard mode)"],
      "wiki": {"en": "Blood Washes Blood", "de": "Blut wäscht Blut"}
    },
    "100347": {
      "name": "Charr Invaders",
      "type": "secondary",
      "givers": [257],
      "xp": 10000,
      "skills": [2422],
      "rewards": ["150 Ebon Vanguard reputation points"],
      "next": [100411],
      "objectives": [
        [0, "Destroy the Charr expeditionary force in Norrhart Domains."],
        [0, "See Artificer Mullenix for your reward."]
      ],
      "wiki": {"en": "Charr Invaders", "de": "Charr-Invasoren"}
    },
    "100348": {
      "name": "Charr-broiled Plans",
      "type": "event",
      "givers": [405],
      "event": 13,
      "xp": 2000,
      "gold": 200,
      "rewards": [
        "200 Ebon Vanguard reputation points",
        "Mischievous Summoning Stone",
        "10 Candy Cane Shards",
        "10 Wintersday Gifts"
      ],
      "requires": [100446],
      "next": [100459, 100414],
      "objectives": [
        [0, "Speak with Brartak the Glutton in Ice Cliff Chasms outside the Eye of the North."],
        [0, "Clear out all the Charr advancing on the Eye of the North. Number of Charr groups remaining: [9...0]"],
        [0, "See Casey Carpenter for your reward."]
      ],
      "wiki": {"en": "Charr-broiled Plans", "de": "Langsam geröstete Pläne"}
    },
    "100349": {
      "name": "Cold Vengeance",
      "type": "secondary",
      "givers": [627, 628],
      "xp": 10000,
      "gold": 2000,
      "objectives": [
        [0, "Travel through the wurm's lair and destroy Frostmaw the Kinslayer."],
        [0, "Speak with Fastulf and discover his findings."],
        [0, "Destroy Frost Larvae within the wurm's lair to enrage Frostmaw the Kinslayer and force her to appear."],
        [0, "Exact revenge on Frostmaw the Kinslayer for all the Norn she and her offspring have killed."],
        [0, "Convince Latham to share the glory of the kill."]
      ],
      "wiki": {"en": "Cold Vengeance", "de": "Kalte Rache"}
    },
    "100350": {
      "name": "Cold as Ice",
      "type": "secondary",
      "givers": [315],
      "skills": [2356],
      "rewards": ["500 Norn reputation points", "Perfect Salvage Kit"],
      "objectives": [
        [0, "Speak to Sif when you are ready to face the Glacial Griffon."],
        [0, "Destroy the Glacial Griffon and prove your valor to Sif. Earn your song!"],
        [0, "See Sif Shadowhunter for your reward."]
      ],
      "wiki": {"en": "Cold as Ice", "de": "Eiskalt erwischt"}
    },
    "100351": {
      "name": "Crystal Method",
      "type": "secondary",
      "givers": [395, 396],
      "repeatable": true,
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
      "objectives": [
        [0, "Defeat the Eldritch Ettin."],
        [0, "Retrieve the Spectral Crystal."],
        [0, "Return the spectral crystal to Saerin for a reward."]
      ],
      "wiki": {"en": "Crystal Method", "de": "Die Kristall-Methode"}
    },
    "100352": {
      "name": "Curse of the Nornbear",
      "type": "primary",
      "givers": [315],
      "requires": [100450],
      "next": [100364, 100454],
      "objectives": [
        [0, "Speak to Sif in Sifhalla to begin the hunt. (disappears from Quest Log after entering Mission)"],
        [0, "Join Jora and Sif. Get the Volfen Blessing from the Shrine of the Wolf Spirit."],
        [0, "Invoke the Volfen Blessing to receive the abilities of the wolf spirit."],
        [0, "Track down Svanir, the Nornbear."],
        [0, "Receive Volfen Blessing from Sif."],
        [0, "Use the skill Volfen Bloodlust to follow the scent of the Nornbear."],
        [0, "Stay on Svanir's trail."],
        [0, "Pursue Svanir. Don't let him escape."],
        [0, "Slay Svanir, the Nornbear."]
      ],
      "rewards": ["Norn reputation points", "First time: 1,000 (1,500 in hard mode)", "On repeat: 100 (150 in hard mode)", "Jora joins your party"],
      "wiki": {"en": "Curse of the Nornbear", "de": "Der Fluch des Nornbären"}
    },
    "100353": {
      "name": "Deeprunner's Map",
      "type": "secondary",
      "givers": [380],
      "xp": 15000,
      "skills": [2218],
      "rewards": ["1,500 Deldrimor reputation points"],
      "next": [100384],
      "objectives": [
        [0, "Retrieve the top left treasure map piece for Koris Deeprunner."],
        [0, "Retrieve the top right treasure map piece for Koris Deeprunner."],
        [0, "Retrieve the bottom left treasure map piece for Koris Deeprunner."],
        [0, "Retrieve the bottom right treasure map piece for Koris Deeprunner."],
        [0, "See Koris Deeprunner for your reward."]
      ],
      "wiki": {"en": "Deeprunner's Map", "de": "Tiefenläufers Karte"}
    },
    "100354": {
      "name": "Defending the Breach",
      "type": "secondary",
      "givers": [387, 319],
      "xp": 5000,
      "gold": 1250,
      "objectives": [
        [0, "Find Captain Sargen's unit deep in Raven's Point."],
        [0, "Defeat the Destroyer swarms."],
        [0, "See Olrun Olafdottir for your reward."]
      ],
      "wiki": {"en": "Defending the Breach", "de": "Die Bresche (Quest)"}
    },
    "100355": {
      "name": "Destruction's Depths",
      "type": "primary",
      "givers": [442],
      "requires": [100372],
      "next": [100338],
      "missions": [673],
      "objectives": [
        [0, "Speak to Jalis Ironhammer when you are ready to face this evil. (disappears after entering the mission)"],
        [0, "Find and reclaim the Central Transfer Chamber"],
        [0, "Take command of the golems and find the missing Asuran patrol."],
        [0, "Rendezvous with the Ebon Vanguard."],
        [0, "Clear a path into the depths with the Ebon Vanguard."],
        [0, "Continue deeper into the caverns."],
        [0, "Fight beside the Norn as they hold off the Destroyers."],
        [0, "Travel to the Central Transfer Chamber via the Asura Gate."],
        [0, "Clear the Central Transfer Chamber of Destroyers."]
      ],
      "rewards": ["Dwarf reputation points", "First time: 3,000 (4,500 in hard mode)", "On repeat: 300 (450 in hard mode)"],
      "wiki": {"en": "Destruction's Depths", "de": "Die Tiefen der Zerstörung"}
    },
    "100356": {
      "name": "Destructive Research",
      "type": "secondary",
      "givers": [454],
      "skills": [2221],
      "rewards": ["150 Deldrimor reputation points"],
      "requires": [100389],
      "next": [100434],
      "objectives": [
        [0, "Gather 3 Destroyer Cores. You have [3...0] of 3 left to collect."],
        [0, "See High Priest Alkar for your reward."]
      ],
      "wiki": {"en": "Destructive Research", "de": "Zerstörerische Forschung"}
    },
    "100357": {
      "name": "Dredging the Depths",
      "type": "secondary",
      "givers": [602, 603],
      "xp": 7500,
      "gold": 1500,
      "objectives": [
        [0, "Free the Dredge slaves by slaying Stone Summit Taskmasters."],
        [0, "Discover what the Stone Summit Dwarves are searching for in the Vloxen Excavations."],
        [0, "Seek and destroy Zoldark the Unholy."],
        [0, "See Molenin for your reward."]
      ],
      "wiki": {"en": "Dredging the Depths", "de": "Hammer und Schaufel"}
    },
    "100358": {
      "name": "Failure to Communicate",
      "type": "secondary",
      "givers": [317],
      "xp": 5000,
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100342],
      "next": [100439],
      "objectives": [
        [0, "Investigate the disappearances of Anton and Scout Winslow."],
        [0, "Defeat the Charr and rescue Scout Winslow."],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {"en": "Failure to Communicate", "de": "Kommunikationsfehler"}
    },
    "100359": {
      "name": "Falling Out",
      "type": "secondary",
      "givers": [226],
      "skills": [2234],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100342],
      "next": [100438],
      "objectives": [
        [0, "Discover the fate of Jenn Valefield."],
        [0, "Discern the fate of Chance Redding."],
        [0, "Divine the fate of Sergeant Weststar."]
      ],
      "wiki": {"en": "Falling Out", "de": "Ausfall"}
    },
    "100360": {
      "name": "Final Round: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100407],
      "objectives": [
        [0, "Defeat Magni the Bison and claim victory in his tournament."],
        [0, "See Magni the Bison for your reward."]
      ],
      "wiki": {"en": "Final Round: Fight!", "de": "Letzte Runde: Kämpft!"}
    },
    "100361": {
      "name": "Finding Gadd",
      "type": "primary",
      "givers": [434],
      "xp": 2000,
      "rewards": ["250 Asura reputation points"],
      "requires": [100337],
      "next": [100362],
      "missions": [661],
      "objectives": [
        [0, "Head southeast to the Shards of Orr. Use the Asura Gate inside the entrance to gain access to Gadd's Encampment. Rendezvous there with Bartholos."],
        [0, "Join Livia and Gadd in Sparkfly Swamp."],
        [0, "Assist Livia with collecting inscriptions from the inscribed ettins. You have collected [0...3] of 3 inscriptions."],
        [0, "Return to the entrance of the Bloodstone Caves."],
        [0, "Talk to Gadd."],
        [0, "Activate the inscription and gain entrance to the Bloodstone Caves."]
      ],
      "wiki": {"en": "Finding Gadd", "de": "Die Suche nach Gadd"}
    },
    "100362": {
      "name": "Finding the Bloodstone",
      "type": "primary",
      "givers": [213],
      "requires": [100361],
      "next": [100368],
      "missions": [664],
      "objectives": [
        [0, "Invoke the inscription stone in Sparkfly Swamp to unlock the path to the Bloodstone."],
        [0, "Help Gadd and Livia reach the Bloodstone in the depths below."],
        [0, "Defeat Inscribed Sentries and decipher their inscriptions to open passageways."],
        [0, "Destroy the Inscribed Guardian protecting the Bloodstone."]
      ],
      "rewards": ["Asura reputation points", "First time: 3,000 (4,500 in hard mode)", "On repeat: 300 (450 in hard mode)", "Livia joins your party."],
      "wiki": {"en": "Finding the Bloodstone", "de": "Auf der Suche nach dem Blutstein"}
    },
    "100363": {
      "name": "Fire and Pain",
      "type": "secondary",
      "givers": [259],
      "hero": [24],
      "xp": 15000,
      "rewards": ["Rose Focus"],
      "requires": [100443],
      "objectives": [
        [0, "Gwen must be present to continue."],
        [0, "Travel to Sacnoth Valley to investigate the reports of the new Charr force amassing."],
        [0, "Defeat the Charr Flame Keepers."],
        [0, "Locate the Charr Shaman's ceremony site."],
        [0, "Destroy the Charr forces to prevent the ritual from being completed. You have [3&hellip;0] groups remaining."],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {"en": "Fire and Pain", "de": "Feuer und Schmerz"}
    },
    "100364": {
      "name": "Flames of the Bear Spirit",
      "type": "primary",
      "givers": [243],
      "xp": 2000,
      "rewards": ["250 Norn reputation points"],
      "requires": [100352],
      "next": [100346],
      "missions": [654],
      "objectives": [
        [0, "Travel to the sacred altar and light the spiritual flame to summon the bear spirit."],
        [0, "Prevent the arctic nightmares from consuming the spiritual flame."],
        [0, "See Egil Fireteller for your reward."]
      ],
      "wiki": {"en": "Flames of the Bear Spirit", "de": "Flammen der Großen Bärin"}
    },
    "100365": {
      "name": "Forbidden Fruit",
      "type": "secondary",
      "givers": [317],
      "gold": 1000,
      "skills": [2230],
      "rewards": ["150 Ebon Vanguard reputation points"],
      "requires": [100391],
      "objectives": [
        [0, "Meet Vael in Sacnoth Valley to begin your mission."],
        [0, "Follow Vael to the hierophant's stronghold."],
        [0, "You have three minutes to sneak in and out of the stronghold."],
        [0, "Poison the food supplies."],
        [0, "Your mission has been compromised! Kill Gharaz the Glutton at all costs!"],
        [0, "Report back to Vael."]
      ],
      "wiki": {"en": "Forbidden Fruit", "de": "Verbotene Frucht"}
    },
    "100366": {
      "name": "Forgotten Relics",
      "type": "secondary",
      "givers": [767],
      "skills": [2232],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "objectives": [
        [0, "Locate the cave where the captives are being held in the Dalada Uplands."],
        [0, "Bushwhack the Charr guarding the prisoners."],
        [0, "Check on the Flaming Scepter Mages."],
        [0, "See Sergeant Weststar for your reward."]
      ],
      "wiki": {"en": "Forgotten Relics", "de": "Vergessene Reliquien"}
    },
    "100367": {
      "name": "Frogstomp",
      "type": "secondary",
      "givers": [227],
      "xp": 5000,
      "gold": 1000,
      "next": [100370],
      "objectives": [
        [0, "Find Hayda in Sparkfly Swamp."],
        [0, "Clear out the frogmen. You have [3...0] of 3 groups remaining."],
        [0, "See Bartholos for your reward."]
      ],
      "wiki": {"en": "Frogstomp", "de": "Ausgequakt"}
    },
    "100368": {
      "name": "Genius Operated Living Enchanted Manifestation",
      "type": "primary",
      "givers": [570],
      "requires": [100337, 100362, 100435],
      "objectives": [
        [0, "Mamp in Rata Sum will brief you on the defenses."],
        [0, "Protect each golem kiln as it heats up."],
        [0, "Learn how to deploy golems into battle."],
        [0, "Raze the Destroyer hive."],
        [0, "Drop an Asuran beacon obtained from Sokka to summon golem reinforcements."],
        [0, "Defeat the Bringers of Destruction protecting the hive."]
      ],
      "rewards": ["Asura reputation points", "First time: 1,000 (1,500 in hard mode)", "On repeat: 100 (150 in hard mode)"],
      "wiki": {
        "en": "Genius Operated Living Enchanted Manifestation",
        "de": "Geführter Operand Lebender Entfesselter Magie"
      }
    },
    "100369": {
      "name": "Giriff's War",
      "type": "secondary",
      "givers": [586, 587],
      "xp": 5000,
      "gold": 1250,
      "objectives": [
        [0, "Inquire with Giriff about helping the red Gokir tribe."],
        [0, "Defeat Khabuus and his minions."],
        [0, "See Giriff for your reward."]
      ],
      "wiki": {"en": "Giriff's War", "de": "Giriffs Krieg"}
    },
    "100370": {
      "name": "Give Peace a Chance",
      "type": "secondary",
      "givers": [227],
      "xp": 10000,
      "requires": [100367],
      "objectives": [
        [0, "Meet Hayda in Sparkfly Swamp."],
        [0, "Assemble with the White Mantle for their peace talks."],
        [0, "Defeat the White Mantle. You currently have [5...0] of 5 groups remaining."],
        [0, "See Bartholos for your reward."]
      ],
      "rewards": ["Hayda joins your party."],
      "wiki": {"en": "Give Peace a Chance", "de": "Eine Chance für den Frieden"}
    },
    "100371": {
      "name": "Haunted",
      "type": "secondary",
      "givers": [273],
      "hero": [25],
      "xp": 15000,
      "objectives": [
        [0, "Investigate the spirit sighting areas. You have 3..0 areas left to explore."],
        [0, "Exorcise the spirit of Tanto the Grim."],
        [0, "See Magni the Bison for your reward."]
      ],
      "wiki": {"en": "Haunted", "de": "Die Heimsuchung"}
    },
    "100372": {
      "name": "Heart of the Shiverpeaks",
      "dungeon": 607,
      "type": "primary",
      "givers": [442],
      "xp": 2000,
      "rewards": ["250 Deldrimor reputation points"],
      "requires": [100389, 100441, 100443],
      "objectives": [
        [0, "Meet Budger Blackpowder inside the Heart of the Shiverpeaks."],
        [0, "Retrieve the Hammer of the Great Dwarf from deep within the mountain caverns."],
        [0, "Use Dwarven powder kegs to remove obstacles."],
        [0, "Slay Cyndr the Mountain Heart."],
        [0, "See Jalis Ironhammer for your reward."]
      ],
      "wiki": {"en": "Heart of the Shiverpeaks (quest)", "de": "Herz der Zittergipfel (Quest)"}
    },
    "100373": {
      "name": "Hero Tutorial",
      "type": "secondary",
      "givers": [606],
      "xp": 1000,
      "rewards": ["Burol Ironfist's Commendation"],
      "objectives": [
        [0, "Speak to Burol Ironfist while you have a Hero in your party to begin the Hero tutorial."],
        [0, "Use your Hero to capture area one."],
        [0, "Use your Hero to capture areas two and three."],
        [0, "Order your Hero to return to area one."],
        [0, "See Burol Ironfist [Hero Tutorial] for your reward."]
      ],
      "wiki": {"en": "Hero Tutorial", "de": "Helden-Tutorial"}
    },
    "100374": {
      "name": "In the Service of Revenge",
      "type": "secondary",
      "givers": [615],
      "skills": [2220, 2223],
      "rewards": ["300 Deldrimor reputation points", "Onyx Gemstone"],
      "requires": [100343],
      "objectives": [
        [0, "Find the Stone Summit camp concealed in Drakkar Lake."],
        [0, "Eradicate all Stone Summit in the camp."],
        [0, "See Orozar Highstone for your reward."]
      ],
      "wiki": {"en": "In the Service of Revenge", "de": "Im Dienste der Rache"}
    },
    "100375": {
      "name": "Insidious Remnants",
      "type": "secondary",
      "campaign": 4,
      "region": 17,
      "xp": 10000,
      "gold": 1000,
      "rewards": ["150 Asura reputation points"],
      "requires": [100423],
      "next": [100386],
      "objectives": [
        [0, "Speak with Glayvin."],
        [0, "Watch the ritual."],
        [0, "Defeat the Aspect of Lazarus."],
        [0, "See Justiciar Naveed for your reward."]
      ],
      "wiki": {"en": "Insidious Remnants", "de": "Heimtückische Überreste"}
    },
    "100376": {
      "name": "Kathandrax's Crusher",
      "type": "secondary",
      "givers": [632, 633],
      "xp": 7500,
      "gold": 1500,
      "objectives": [
        [0, "Recover Kathandrax's Crusher."],
        [0, "Return Kathandrax's Crusher to Swithin Nye in Sacnoth Valley Missing period"]
      ],
      "wiki": {"en": "Kathandrax's Crusher", "de": "Kathandrax' Malmer"}
    },
    "100377": {
      "name": "Kilroy Stonekin's Punch-Out Extravaganza!",
      "type": "secondary",
      "givers": [619, 637],
      "xp": 2500,
      "gold": 250,
      "rewards": ["250 Deldrimor reputation points"],
      "requires": [100402],
      "next": [100447],
      "objectives": [
        [0, "Speak to Kilroy when you are ready to hunt for Fronis Irontoe."],
        [0, "Accompany Kilroy. Find and defeat Fronis Irontoe using nothing but brass knuckles."],
        [0, "See Kilroy Stonekin for your reward."]
      ],
      "wiki": {"en": "Kilroy Stonekin's Punch-Out Extravaganza!", "de": "Kilroy Steinsipps Fausthieb-Fete"}
    },
    "100378": {
      "name": "Kilroy's Punchout Tournament",
      "type": "secondary",
      "givers": [619],
      "rewards": ["120 Deldrimor reputation points"],
      "requires": [100447],
      "objectives": [
        [0, "Speak to Kilroy Stonekin to start the brawling tournament."],
        [0, "Defeat eight opponents in a row to win the brawling tournament."],
        [0, "See Kilroy Stonekin for your reward."]
      ],
      "wiki": {"en": "Kilroy's Punchout Tournament", "de": "Kilroys Turnier der Fliegenden Fäuste"}
    },
    "100379": {
      "name": "Krak's Cavalry",
      "type": "secondary",
      "givers": [369],
      "gold": 1000,
      "skills": [2216],
      "rewards": ["200 Deldrimor reputation points"],
      "objectives": [
        [0, "Find and destroy Krak Flamewhip's elite cavalry unit in Jaga Moraine."],
        [0, "See Undrath Blastrock for your reward."]
      ],
      "wiki": {"en": "Krak's Cavalry", "de": "Kraks Kavallerie"}
    },
    "100380": {
      "name": "Lab Space",
      "type": "primary",
      "givers": [647],
      "xp": 2000,
      "rewards": ["250 Asura reputation points"],
      "requires": [100337],
      "next": [100435],
      "missions": [658],
      "objectives": [
        [0, "Locate the laboratory of Oola, the Asuran master golemancer."],
        [0, "Find Oola's former assistant, Blimm, in Rata Sum."],
        [0, "Meet Blimm in Magus Stones."],
        [0, "Travel with Blimm to the secret entrance to Oola's Lab in Magus Stones."],
        [0, "Defeat the timberland guardian and pick a vine seed from its remains to open the bridge to Oola's Lab."],
        [0, "Speak to Blimm about the secret entrance to Oola's Lab."]
      ],
      "wiki": {"en": "Lab Space", "de": "Labor-Suche"}
    },
    "100381": {
      "name": "Leader of the Pack",
      "type": "secondary",
      "givers": [626],
      "skills": [2379],
      "rewards": ["250 Norn reputation points", "Scroll of Hero's Insight"],
      "requires": [100352],
      "objectives": [
        [0, "Travel to Bjora Marches and enlist the help of the tundra wolves, 6 of 6 remaining."],
        [0, "Head south to meet the oncoming Destroyer threat."],
        [0, "Defeat the Destroyer onslaught."],
        [0, "See Hogni Truthseeker for your reward."]
      ],
      "wiki": {"en": "Leader of the Pack", "de": "Rudelführer"}
    },
    "100382": {
      "name": "Little Workshop of Horrors",
      "type": "secondary",
      "givers": [459, 460],
      "xp": 7500,
      "gold": 1500,
      "requires": [100380],
      "objectives": [
        [0, "Investigate the source of the malfunctioning golems."],
        [0, "Defeat the total protection security regulator golem."],
        [0, "See Blimm for your reward."]
      ],
      "wiki": {"en": "Little Workshop of Horrors", "de": "Die kleine Horror-Werkstatt"}
    },
    "100383": {
      "name": "Lost Souls",
      "type": "secondary",
      "givers": [769, 770],
      "xp": 7500,
      "gold": 1500,
      "objectives": [
        [0, "Discover the whereabouts of Lady Glaive's crew and free their spirits."],
        [0, "Avenge the crew of the Queen of Fools by destroying Fendi Nin."],
        [0, "See Crewmember Shandra for your reward."]
      ],
      "wiki": {"en": "Lost Souls", "de": "Verlorene Seelen"}
    },
    "100384": {
      "name": "Lost Treasure of King Hundar",
      "dungeon": 701,
      "type": "secondary",
      "givers": [380],
      "xp": 2500,
      "gold": 250,
      "rewards": ["The Chest of Wintersday Past appears"],
      "requires": [100353],
      "objectives": [
        [0, "Speak to Koris Deeprunner when you're ready to begin the hunt for King Hundar's lost treasure."],
        [0, "Raid the ancient cave to recover King Hundar's treasure."],
        [0, "See Koris Deeprunner for your reward."]
      ],
      "wiki": {"en": "Lost Treasure of King Hundar", "de": "Der verlorene Schatz König Hundars"}
    },
    "100385": {
      "name": "Mano a Norn-o",
      "type": "secondary",
      "givers": [257],
      "skills": [2228],
      "rewards": ["100 Ebon Vanguard reputation points", "Lockpick"],
      "objectives": [
        [0, "Speak to Artificer Mullenix when you are ready to duel with Knorr Oaken."],
        [0, "Stand as the champion for the Eye of the North and defeat Knorr Oaken for the sake of all humanity!"],
        [0, "See Artificer Mullenix for your reward."]
      ],
      "wiki": {"en": "Mano a Norn-o", "de": "Mensch gegen Norn"}
    },
    "100386": {
      "name": "Moths to a Flame",
      "type": "secondary",
      "campaign": 4,
      "region": 17,
      "xp": 12500,
      "gold": 1000,
      "rewards": ["175 Asura reputation points"],
      "requires": [100375],
      "next": [100440],
      "objectives": [
        [0, "Meet Justiciar Naveed at the Magus Stones."],
        [0, "Rendezvous with the White Mantle."],
        [0, "Lead the White Mantle to Justiciar Naveed's ambush point."],
        [0, "Defeat the White Mantle."],
        [0, "See Justiciar Naveed for your reward."]
      ],
      "wiki": {"en": "Moths to a Flame", "de": "Motten um eine Flamme"}
    },
    "100387": {
      "name": "Norn Catering",
      "type": "primary",
      "givers": [405],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "requires": [100000],
      "objectives": [
        [0, "Slay the Alpha Tyrannus inside Alcazia Tangle for fine, slow roasted Tyrannus Fillets."],
        [0, "Hunt down the Elusive Black Moa inside Mourning Veil Falls for Spicy Moa Wings."],
        [0, "Defeat 3 Ripened Mirage Ibogas inside the Garden of Seborhin for the Gourmet Iboga Salad."],
        [0, "See Lieutenant Thackeray for your reward."]
      ],
      "wiki": {"en": "Norn Catering", "de": "Norn-Verköstigung"}
    },
    "100388": {
      "name": "Nornhood",
      "type": "secondary",
      "givers": [273],
      "hero": [23],
      "xp": 15000,
      "objectives": [
        [0, "Track down and destroy the troublesome jotun to prove Kahmu's worthiness."],
        [0, "See Magni the Bison for your reward."]
      ],
      "wiki": {"en": "Nornhood", "de": "Das Norn-Ritual"}
    },
    "100389": {
      "name": "Northern Allies",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1000 Norn reputation points", "Monumental Tapestry"],
      "objectives": [
        [0, "Convince the Norn to ally with you."],
        [0, "Speak to Ogden Stonehealer in the Hall of Monuments."],
        [0, "Seek out Jora near the Eye of the North."],
        [0, "Help Jora track the Nornbear in the Far Shiverpeaks. (Tracking the Nornbear)"],
        [0, "Assist Jora, despite her reservations, in her hunt. Gain her friendship. (Curse of the Nornbear)"],
        [0, "OPTIONAL: Go to Sifhalla. Ask Sif for information on Olaf Olafson and Egil Fireteller."],
        [0, "Speak with Olaf Olafson in Olafstead. Help Ogden gain allies among the Norn. (A Gate Too Far)"],
        [0, "Speak with Egil Fireteller in Jaga Moraine. Help Jora regain her honor among the Norn. (Blood Washes Blood)"],
        [0, "See Jalis Ironhammer for your reward."]
      ],
      "wiki": {"en": "Northern Allies", "de": "Verbündete im Norden"}
    },
    "100390": {
      "name": "O Brave New World",
      "type": "secondary",
      "givers": [720],
      "skills": [2411],
      "rewards": ["100 Asura reputation points", "Essence of Celerity"],
      "requires": [100435],
      "objectives": [
        [0, "Meet Erff in Arbor Bay."],
        [0, "Guide Erff to a potential settlement location in Arbor Bay."],
        [0, "Help Erff scout out another potential settlement location."],
        [0, "Speak with Erff."],
        [0, "Defend the work krewe from the invading Destroyers."],
        [0, "See Blorf for your reward."]
      ],
      "wiki": {"en": "O Brave New World", "de": "Schöne neue Welt"}
    },
    "100391": {
      "name": "Plan A",
      "type": "secondary",
      "givers": [317],
      "skills": [2116],
      "rewards": ["100 Ebon Vanguard reputation points", "Lockpick"],
      "next": [100365],
      "objectives": [
        [0, "Meet Vael at the rendezvous point in Grothmar Wardowns."],
        [0, "Get into position and wait for Vael to create a diversion. Do not alert the Charr in the camp to your presence."],
        [0, "Run in and steal the plans while Vael keeps the Charr busy."],
        [0, "Take the plans back to Captain Langmar."],
        [0, "Don't forget the plans! (If the plans are dropped.)"],
        [0, "Vael is not ready to undertake the covert mission. He has still not made himself known to one of your party members."],
        [0, "Vael is not ready to undertake the covert mission. He is busy following a suspicious looking Charr. Help your party member discover what that Charr is up to, and then Vael will be ready to raid the Charr camp for plans."]
      ],
      "wiki": {"en": "Plan A", "de": "Plan A"}
    },
    "100392": {
      "name": "Polymock: Defeat Blarp",
      "type": "secondary",
      "givers": [696],
      "rewards": ["200 Asura reputation points", "Ice Imp Polymock Piece"],
      "requires": [100398],
      "next": [100394],
      "objectives": [
        [0, "Defeat Blarp in a game of Polymock at Gadd's Encampment."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Blarp", "de": "Polymock: Besiegt Blarp"}
    },
    "100393": {
      "name": "Polymock: Defeat Dune Teardrinker",
      "type": "secondary",
      "givers": [696],
      "skills": [2227],
      "rewards": ["250 Asura reputation points", "Aloe Seed Polymock Piece"],
      "requires": [100394, 100433],
      "next": [100396],
      "objectives": [
        [0, "Defeat Dune Teardrinker in a game of Polymock at Doomlore Shrine."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Dune Teardrinker", "de": "Polymock: Besiegt Dune Tränentrinker"}
    },
    "100394": {
      "name": "Polymock: Defeat Fonk",
      "type": "secondary",
      "givers": [696],
      "rewards": ["250 Asura reputation points", "Earth Elemental Polymock Piece"],
      "requires": [100392],
      "next": [100395, 100397, 100393],
      "objectives": [
        [0, "Defeat Fonk in a game of Polymock at Gunnar's Hold."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Fonk", "de": "Polymock: Besiegt Fonk"}
    },
    "100395": {
      "name": "Polymock: Defeat Grulhammer Silverfist",
      "type": "secondary",
      "givers": [696],
      "skills": [2225],
      "rewards": ["250 Asura reputation points", "Fire Elemental Polymock Piece"],
      "requires": [100394],
      "next": [100396],
      "objectives": [
        [0, "Defeat Grulhammer Silverfist in a game of Polymock at Umbral Grotto."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Grulhammer Silverfist", "de": "Polymock: Besiegt Grulhammer Silberfaust"}
    },
    "100396": {
      "name": "Polymock: Defeat Master Hoff",
      "type": "secondary",
      "givers": [696],
      "skills": [2224],
      "rewards": ["1,000 Asura reputation points", "Mirage Iboga Polymock Piece"],
      "requires": [100395, 100397, 100393],
      "objectives": [
        [0, "Defeat Master Hoff in a game of Polymock at Rata Sum."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Master Hoff", "de": "Polymock: Besiegt Meister Hoff"}
    },
    "100397": {
      "name": "Polymock: Defeat Necromancer Volumandus",
      "type": "secondary",
      "givers": [696],
      "skills": [2226],
      "rewards": ["250 Asura reputation points", "Ice Elemental Polymock Piece"],
      "requires": [100394],
      "next": [100396],
      "objectives": [
        [0, "Defeat Necromancer Volumandus in a game of Polymock at Tarnished Haven."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Necromancer Volumandus", "de": "Polymock: Besiegt Nekromant Volumandus"}
    },
    "100398": {
      "name": "Polymock: Defeat Plurgg",
      "type": "secondary",
      "givers": [696],
      "rewards": ["100 Asura reputation points", "Kappa Polymock Piece"],
      "requires": [100399],
      "next": [100392],
      "objectives": [
        [0, "Defeat Plurgg in a game of Polymock at Vlox's Falls."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Plurgg", "de": "Polymock: Besiegt Plurgg"}
    },
    "100399": {
      "name": "Polymock: Defeat Yulma",
      "type": "secondary",
      "givers": [696],
      "rewards": ["100 Asura reputation points", "Fire Imp Polymock Piece"],
      "next": [100398],
      "objectives": [
        [0, "Register three Polymock pieces for play with Denn [Polymock Unlocks] at Rata Sum."],
        [0, "Talk to Yulma [Polymock] to start the game."],
        [0, "Defeat Yulma in a game of Polymock at Rata Sum."],
        [0, "See Hoff [Polymock Master] for your reward."]
      ],
      "wiki": {"en": "Polymock: Defeat Yulma", "de": "Polymock: Besiegt Yulma"}
    },
    "100400": {
      "name": "Prenuptial Disagreement",
      "type": "secondary",
      "givers": [318, 319],
      "rewards": ["250 Norn reputation points", "Grail of Might"],
      "requires": [100345],
      "objectives": [
        [0, "Travel to Jaga Moraine and find the bottomless pit."],
        [0, "Kill the leviathan, Ssissth"],
        [0, "See Olrun Olafdottir for your reward."]
      ],
      "wiki": {"en": "Prenuptial Disagreement (male)", "de": "Voreheliche Verstimmung (männlich)"}
    },
    "100401": {
      "name": "Prenuptial Disagreement",
      "type": "secondary",
      "givers": [249, 250],
      "rewards": ["250 Norn reputation points", "Grail of Might"],
      "requires": [100345],
      "objectives": [
        [0, "Travel to Jaga Moraine and find the bottomless pit."],
        [0, "Kill the leviathan, Ssissth"],
        [0, "See Olaf Olafson for your reward."]
      ],
      "wiki": {"en": "Prenuptial Disagreement (female)", "de": "Voreheliche Verstimmung (weiblich)"}
    },
    "100402": {
      "name": "Punch the Clown",
      "type": "secondary",
      "givers": [619],
      "skills": [2215],
      "rewards": ["100 Deldrimor reputation points"],
      "next": [100377],
      "objectives": [
        [0, "Speak to Kilroy to start your brawling training."],
        [0, "Defeat the Norn brawlers using your new skills."],
        [0, "See Kilroy Stonekin for your reward."]
      ],
      "wiki": {"en": "Punch the Clown", "de": "Verhaut den Hampelmann"}
    },
    "100403": {
      "name": "Round 1: Fight!",
      "type": "secondary",
      "givers": [273],
      "skills": [2353, 2354, 2357],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "next": [100404],
      "objectives": [
        [0, "Enter the tournament and defeat your first round opponent."]
      ],
      "wiki": {"en": "Round 1: Fight!", "de": "Ring frei zur ersten Runde!"}
    },
    "100404": {
      "name": "Round 2: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100403],
      "next": [100405],
      "objectives": [
        [0, "Defeat your second round opponent in Magni the Bison's tournament."]
      ],
      "wiki": {"en": "Round 2: Fight!", "de": "Ring frei zur zweiten Runde!"}
    },
    "100405": {
      "name": "Round 3: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100404],
      "next": [100406],
      "objectives": [
        [0, "Defeat your third round opponent in Magni the Bison's tournament."]
      ],
      "wiki": {"en": "Round 3: Fight!", "de": "Ring frei zur dritten Runde!"}
    },
    "100406": {
      "name": "Round 4: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100405],
      "next": [100407],
      "objectives": [
        [0, "Win the fourth round of the Norn fighting tournament."]
      ],
      "wiki": {"en": "Round 4: Fight!", "de": "Ring frei zur vierten Runde!"}
    },
    "100407": {
      "name": "Round 5: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100406],
      "next": [100360],
      "objectives": [
        [0, "Win the fifth round of the Norn fighting tournament."]
      ],
      "wiki": {"en": "Round 5: Fight!", "de": "Ring frei zur fünften Runde!"}
    },
    "100408": {
      "name": "Scrambled Reinforcements",
      "type": "secondary",
      "givers": [620, 621],
      "repeatable": true,
      "xp": 7500,
      "gold": 1500,
      "objectives": [
        [0, "Help Hixx and his troops secure the Arachni's Haunt."],
        [0, "Destroy 3 spider matriarchs."],
        [0, "Kill Arachni."],
        [0, "Use the Asura flame staff to burn through the web gates."],
        [0, "Use the Asura flame staff to set ablaze the egg sacs."]
      ],
      "wiki": {"en": "Scrambled Reinforcements", "de": "Ins Netz gegangen"}
    },
    "100409": {
      "name": "Search for the Ebon Vanguard",
      "type": "primary",
      "givers": [436],
      "xp": 2000,
      "rewards": ["250 Ebon Vanguard reputation points"],
      "next": [100339],
      "missions": [665],
      "objectives": [
        [0, "Discover the fate of the Ebon Vanguard."],
        [0, "Search Grothmar Wardowns for signs of the Vanguard."]
      ],
      "wiki": {"en": "Search for the Ebon Vanguard", "de": "Die Suche nach der Ebon-Vorhut"}
    },
    "100410": {
      "name": "Service: In Defense of the Eye",
      "type": "secondary",
      "givers": [257],
      "skills": [2420],
      "rewards": ["250 Ebon Vanguard reputation points", "Powerstone of Courage"],
      "requires": [100411],
      "objectives": [
        [0, "Speak to Artificer Mullenix when you are ready to defend the Eye of the North."],
        [0, "Fight alongside the Eye's support personnel. Defend the Eye of the North from the attacking Shiverpeak Centaurs."],
        [0, "See Artificer Mullenix for your reward."]
      ],
      "wiki": {"en": "Service: In Defense of the Eye", "de": "Dienst: Die Verteidigung des Auges"}
    },
    "100411": {
      "name": "Service: Practice, Dummy",
      "type": "secondary",
      "givers": [257],
      "skills": [2235],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100347],
      "next": [100410],
      "objectives": [
        [0, "Tell Artificer Mullenix when you are ready to start the training session."],
        [0, "Help train the service staff by leading them into combat. Destroy 20 practice dummies in 3 minutes."],
        [0, "See Artificer Mullenix for your reward."]
      ],
      "wiki": {"en": "Service: Practice, Dummy", "de": "Dienst: Kampfübung"}
    },
    "100412": {
      "name": "Shadows in the Night",
      "type": "secondary",
      "givers": [626],
      "skills": [2384],
      "rewards": ["100 Norn reputation points", "Lockpick"],
      "requires": [100334],
      "objectives": [
        [0, "Travel to Raven's Point to begin the hunt."],
        [0, "Defeat the shadow spawn."],
        [0, "See Hogni Truthseeker for your reward."]
      ],
      "wiki": {"en": "Shadows in the Night", "de": "Schatten in der Nacht"}
    },
    "100413": {
      "name": "Single Ugly Grawl Seeks Same for Mindless Destruction in Ascalon",
      "type": "secondary",
      "givers": [538],
      "skills": [2421],
      "rewards": ["150 Ebon Vanguard reputation points", "Lockpick"],
      "requires": [100365],
      "objectives": [
        [0, "Wait by the entrance to the hierophant's stronghold for Vael to create a diversion."],
        [0, "Rush in while the Charr are distracted and kill Vyrrgis the Pestilent."],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {
        "en": "Single Ugly Grawl Seeks Same for Mindless Destruction in Ascalon",
        "de": "Einsamer, hässlicher Grawl sucht Gleichgesinnte für brutale Zerstörung in Ascalon"
      }
    },
    "100414": {
      "name": "Snowball Dominance",
      "type": "event",
      "givers": [716],
      "event": 13,
      "repeatable": true,
      "xp": 5000,
      "gold": 500,
      "rewards": [
        "500 Ebon Vanguard reputation points",
        "5 Frosty Tonics",
        "10 Candy Cane Shards",
        "10 Wintersday Gifts"
      ],
      "requires": [100348],
      "objectives": [
        [0, "Speak to Casey Carpenter to enter the Ebon Vanguard Snowball Spectacular. You may only have two people in your party to enter this event."],
        [0, "Defeat the opposing team in icy combat. When your Health reaches 0, you're out of the game!"]
      ],
      "wiki": {"en": "Snowball Dominance", "de": "Schneeball-Dominanz"}
    },
    "100415": {
      "name": "Special Ops: Dragon's Gullet",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "objectives": [
        [0, "Find and annihilate all three Charr companies in Dragon's Gullet."],
        [0, "X of 100 Charr slain."]
      ],
      "rewards": ["1,000 Vanguard reputation points [with Ebon Vanguard rank 7 or less]"],
      "wiki": {"en": "Special Ops: Dragon's Gullet", "de": "Spezialeinsatz: Drachenschlund"}
    },
    "100416": {
      "name": "Special Ops: Flame Temple Corridor",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "objectives": [
        [0, "Find and kill [Charr Boss Name], Charr legion leader."],
        [0, "You have 15 minutes to find and kill the legion leader before he escapes."]
      ],
      "rewards": ["1,000 Vanguard reputation points [with Ebon Vanguard rank 7 or less]"],
      "wiki": {"en": "Special Ops: Flame Temple Corridor", "de": "Spezialeinsatz: Flammentempel-Gang"}
    },
    "100417": {
      "name": "Special Ops: Grendich Courthouse",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "objectives": [
        [0, "Defend Grendich Courthouse from the Charr attackers."],
        [0, "At least one Ascalonian soldier must survive. [8..0] of 8 soldiers still living."]
      ],
      "rewards": ["1,000 Vanguard reputation points [with Ebon Vanguard rank 7 or less]"],
      "wiki": {"en": "Special Ops: Grendich Courthouse", "de": "Spezialeinsatz: Gerichtsgebäude in Grendich"}
    },
    "100418": {
      "name": "Tekks's War",
      "type": "secondary",
      "givers": [747, 748],
      "xp": 5000,
      "gold": 1250,
      "objectives": [
        [0, "Talk to Tekks about helping the yellow Ophil tribe."],
        [0, "Destroy Z'him Monns."],
        [0, "See Tekks for your reward."]
      ],
      "wiki": {"en": "Tekks's War", "de": "Tekks' Krieg"}
    },
    "100419": {
      "name": "Temple of the Damned",
      "type": "secondary",
      "givers": [750, 751],
      "xp": 7500,
      "gold": 1500,
      "requires": [100433],
      "objectives": [
        [0, "Locate and defeat the leader of the undead in the temple."],
        [0, "Find a sacked relic and return it to Gron Fierceclaw."],
        [0, "See Gron Fierceclaw [Merchant] for your reward."]
      ],
      "wiki": {"en": "Temple of the Damned", "de": "Tempel der Verdammten"}
    },
    "100420": {
      "name": "The Anvil of Dragrimmar",
      "type": "secondary",
      "givers": [303, 304],
      "xp": 5000,
      "gold": 1250,
      "objectives": [
        [0, "Escort Outrunner Remlok to the Anvil of Dragrimmar within the depths of the sepulchre."],
        [0, "Defeat the Remnant of Antiquities guarding the Anvil of Dragrimmar."],
        [0, "See Outrunner Remlok for your reward."]
      ],
      "wiki": {"en": "The Anvil of Dragrimmar", "de": "Der Amboss des Dragrimmar"}
    },
    "100421": {
      "name": "The Arrow's Point",
      "type": "secondary",
      "givers": [395, 396],
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
      "objectives": [
        [0, "Defeat the Crystal Ettin."],
        [0, "Retrieve an Arcane Crystal Shard."],
        [0, "Return to Saerin for your reward."]
      ],
      "wiki": {"en": "The Arrow's Point", "de": "Spitze Pfeile"}
    },
    "100422": {
      "name": "The Assassin's Revenge",
      "type": "secondary",
      "givers": [317],
      "rewards": ["150 Ebon Vanguard reputation points"],
      "requires": [100439],
      "objectives": [
        [0, "Meet Anton in Sacnoth Valley."],
        [0, "Find and defeat Rend Ragemauler"],
        [0, "Defeat Rend Ragemauler's guards. You have killed [0..9] of 9 guards."],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {"en": "The Assassin's Revenge", "de": "Die Rache des Assassinen"}
    },
    "100423": {
      "name": "The Asura Trap",
      "type": "secondary",
      "campaign": 4,
      "region": 17,
      "xp": 7500,
      "gold": 1000,
      "rewards": ["125 Asura reputation points"],
      "requires": [100452],
      "next": [100375],
      "objectives": [
        [0, "Meet Justiciar Naveed in Riven Earth."],
        [0, "Escort Justiciar Naveed to the meeting place."],
        [0, "Leave the Grimoire at the meeting place as bait."],
        [0, "Take cover until Glayvin gets caught."],
        [0, "See Justiciar Naveed for your reward."]
      ],
      "wiki": {"en": "The Asura Trap", "de": "Die Asura-Falle"}
    },
    "100424": {
      "name": "The Beginning of the End",
      "type": "primary",
      "campaign": 4,
      "region": 18,
      "requires": [100573],
      "next": [100340],
      "objectives": [
        [0, "Help the Dwarves locate and flee through the Asuran Gate."]
      ],
      "rewards": ["Hero: Ogden Stonehealer", "Hero: Vekk"],
      "wiki": {"en": "The Beginning of the End", "de": "Der Anfang vom Ende"}
    },
    "100425": {
      "name": "The Big Unfriendly Jotun",
      "type": "secondary",
      "givers": [369],
      "gold": 1000,
      "skills": [2222, 2423],
      "rewards": ["100 Deldrimor reputation points"],
      "objectives": [
        [0, "Find and kill Chieftain Ulgrimar Gnash in Drakkar Lake."],
        [0, "See Undrath Blastrock for your reward."]
      ],
      "wiki": {"en": "The Big Unfriendly Jotun", "de": "Der große, unfreundliche Jotun"}
    },
    "100426": {
      "name": "The Blade's Essence",
      "type": "secondary",
      "givers": [395, 396],
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
      "objectives": [
        [0, "Defeat the Paranoia Ettin."],
        [0, "Retrieve the shimmering essence."],
        [0, "Return the shimmering essence to Saerin for a reward."]
      ],
      "wiki": {"en": "The Blade's Essence", "de": "Die Essenz der Klinge"}
    },
    "100427": {
      "name": "The Cipher of Balthazar",
      "type": "secondary",
      "givers": [341],
      "skills": [2417],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "objectives": [
        [0, "Use the Divination to locate the Facet of Destruction."],
        [0, "You are currently carrying the Divination."],
        [0, "Defeat the Facet of Destruction to obtain its cipher."],
        [0, "See Kerrsh for your reward."]
      ],
      "wiki": {"en": "The Cipher of Balthazar", "de": "Der Schlüssel von Balthasar"}
    },
    "100428": {
      "name": "The Cipher of Dwayna",
      "type": "secondary",
      "givers": [341],
      "skills": [2414],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "objectives": [
        [0, "Use the Divination to locate the Facet of Existence."],
        [0, "You are currently carrying the Divination."],
        [0, "Defeat the Facet of Existence to obtain its cipher."],
        [0, "See Kerrsh for your reward."]
      ],
      "wiki": {"en": "The Cipher of Dwayna", "de": "Der Schlüssel von Dwayna"}
    },
    "100429": {
      "name": "The Cipher of Grenth",
      "type": "secondary",
      "givers": [341],
      "skills": [2415],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "objectives": [
        [0, "Use the Divination to locate the Facet of Death."],
        [0, "You are currently carrying the Divination."],
        [0, "Defeat the Facet of Death to obtain its cipher."],
        [0, "See Kerrsh for your reward."]
      ],
      "wiki": {"en": "The Cipher of Grenth", "de": "Der Schlüssel von Grenth"}
    },
    "100430": {
      "name": "The Cipher of Kormir",
      "type": "secondary",
      "givers": [341],
      "skills": [2418],
      "rewards": ["100 Asura reputation points"],
      "requires": [100427, 100428, 100429, 100431],
      "next": [100444],
      "objectives": [
        [0, "Use the Divination to locate the Facet of Spirit."],
        [0, "You are currently carrying the Divination."],
        [0, "Defeat the Facet of Spirit to obtain its cipher."],
        [0, "See Kerrsh for your reward."]
      ],
      "wiki": {"en": "The Cipher of Kormir", "de": "Der Schlüssel von Kormir"}
    },
    "100431": {
      "name": "The Cipher of Lyssa",
      "type": "secondary",
      "givers": [341],
      "skills": [2413],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "objectives": [
        [0, "Use the Divination to locate the Facet of Illusions."],
        [0, "You are currently carrying the Divination."],
        [0, "Defeat the Facet of Illusions to obtain its cipher."],
        [0, "See Kerrsh for your reward."]
      ],
      "wiki": {"en": "The Cipher of Lyssa", "de": "Der Schlüssel von Lyssa"}
    },
    "100432": {
      "name": "The Cipher of Melandru",
      "type": "secondary",
      "givers": [341],
      "skills": [2412],
      "rewards": ["100 Asura reputation points"],
      "next": [100427, 100428, 100429, 100431],
      "objectives": [
        [0, "Use the Divination to locate the Facet of Creation"],
        [0, "You are currently carrying the Divination."],
        [0, "Defeat the Facet of Creation to obtain its cipher."],
        [0, "See Kerrsh for your reward."]
      ],
      "wiki": {"en": "The Cipher of Melandru", "de": "Der Schlüssel von Melandru"}
    },
    "100433": {
      "name": "The Dawn of Rebellion",
      "type": "primary",
      "givers": [306],
      "xp": 2000,
      "rewards": ["250 Ebon Vanguard reputation points"],
      "requires": [100339],
      "next": [100455],
      "missions": [666],
      "objectives": [
        [0, "Kill the Charr Shaman, Scorch Maulclaw, at Doomlore Shrine."],
        [0, "Clear the entrance to the Cathedral of Flames."],
        [0, "See Gron Fierceclaw [Merchant] for your reward."]
      ],
      "wiki": {"en": "The Dawn of Rebellion", "de": "Der Anbruch der Rebellion"}
    },
    "100434": {
      "name": "The Destroyer Challenge",
      "type": "secondary",
      "givers": [453, 454],
      "skills": [2211],
      "rewards": ["150 Deldrimor reputation points", "Armor of Salvation"],
      "requires": [100356],
      "objectives": [
        [0, "Use Alkar's concoction against the Destroyers to test its effectiveness."],
        [0, "See High Priest Alkar for your reward."]
      ],
      "wiki": {"en": "The Destroyer Challenge", "de": "Die Zerstörer-Probe"}
    },
    "100435": {
      "name": "The Elusive Golemancer",
      "type": "primary",
      "givers": [463],
      "next": [100368],
      "missions": [664],
      "objectives": [
        [0, "Find Oola's workshop in the depths below and convince her to help with Mamp's project."],
        [0, "Find a golem to circumvent the security system."],
        [0, "Discover a way to access the next laboratory level."],
        [0, "Search the room for a passage leading further into the laboratory."],
        [0, "Survive the fiery gauntlet."],
        [0, "Open the security lock."],
        [0, "Defeat the indestructible golem."],
        [0, "Confront the mysterious voice."]
      ],
      "rewards": ["Asura reputation points", "First time: 3,000 (4,500 in hard mode)", "On repeat: 300 (450 in hard mode)"],
      "wiki": {"en": "The Elusive Golemancer", "de": "Die scheue Golemantin"}
    },
    "100436": {
      "name": "The Great Norn Alemoot",
      "type": "secondary",
      "givers": [318, 319],
      "xp": 15000,
      "skills": [2360],
      "rewards": ["100 Norn reputation points"],
      "requires": [100334],
      "next": [100345],
      "objectives": [
        [0, "Drink from each of the two ale barrels to get drunk"],
        [0, "Move three kegs of ale from the pile to the keg stand"],
        [0, "Drink from each of the two ale barrels"],
        [0, "Run the slalom. You must pass each flag on the far side or you will be disqualified"],
        [0, "Drink from each of the two ale barrels"],
        [0, "Herd three pigs into one of the pens"],
        [0, "See Olaf Olafson for your reward. (Female quest only)"],
        [0, "See Olrun Olafdottir for your reward. (Male quest only)"]
      ],
      "wiki": {"en": "The Great Norn Alemoot", "de": "Der Große Bierrat der Norn (männlich)"}
    },
    "100437": {
      "name": "The Great Norn Alemoot",
      "type": "secondary",
      "givers": [249, 250],
      "xp": 15000,
      "skills": [2360],
      "rewards": ["100 Norn reputation points"],
      "requires": [100334],
      "next": [100345],
      "objectives": [
        [0, "Drink from each of the two ale barrels to get drunk"],
        [0, "Move three kegs of ale from the pile to the keg stand"],
        [0, "Drink from each of the two ale barrels"],
        [0, "Run the slalom. You must pass each flag on the far side or you will be disqualified"],
        [0, "Drink from each of the two ale barrels"],
        [0, "Herd three pigs into one of the pens"],
        [0, "See Olaf Olafson for your reward. (Female quest only)"],
        [0, "See Olrun Olafdottir for your reward. (Male quest only)"]
      ],
      "wiki": {"en": "The Great Norn Alemoot", "de": "Der Große Bierrat der Norn (weiblich)"}
    },
    "100438": {
      "name": "The Hunting of the Charr",
      "type": "secondary",
      "givers": [410],
      "skills": [2229],
      "rewards": ["250 Ebon Vanguard reputation points", "Powerstone of Courage"],
      "requires": [100359],
      "objectives": [
        [0, "Hunt down Rake Blazeclaw."],
        [0, "Crush Rake Blazeclaw."],
        [0, "Bash the Enforcer."],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {"en": "The Hunting of the Charr", "de": "Die Jagd auf die Charr"}
    },
    "100439": {
      "name": "The Imploding Past",
      "type": "secondary",
      "givers": [317],
      "xp": 10000,
      "rewards": ["150 Ebon Vanguard reputation points"],
      "requires": [100358],
      "next": [100422],
      "objectives": [
        [0, "Meet Anton in Dalada Uplands."],
        [0, "Defeat the Charr warbands and discover the location of Rend Ragemauler."],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {"en": "The Imploding Past", "de": "Die implodierende Vergangenheit"}
    },
    "100440": {
      "name": "The Justiciar's End",
      "type": "secondary",
      "givers": [265],
      "xp": 15000,
      "rewards": ["250 Asura reputation points", "Scroll of Resurrection"],
      "requires": [100386],
      "objectives": [
        [0, "Speak to Justiciar Naveed when you are ready to face the White Mantle."],
        [0, "Repel the White Mantle."],
        [0, "See Glayvin for your reward."]
      ],
      "wiki": {"en": "The Justiciar's End", "de": "Das Ende des Justiziars"}
    },
    "100441": {
      "name": "The Knowledgeable Asura",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1000 Asura reputation points", "Monumental Tapestry"],
      "requires": [100340],
      "objectives": [
        [0, "Seek assistance from the Asura."],
        [0, "Speak to Vekk in the Hall of Monuments."],
        [0, "Journey through the Asura Gate in the Vloxen Excavations."],
        [0, "Assemble a krewe for project G.O.L.E.M."],
        [0, "Recruit Gadd to help with the project. (Finding the Bloodstone)"],
        [0, "Enlist Oola to help with the project. (The Elusive Golemancer)"],
        [0, "Acquire Renk's help with the project."],
        [0, "Protect the golem foundry from the Destroyers. (Genius Operated Living Enchanted Manifestation)"],
        [0, "See Mamp for your reward."]
      ],
      "wiki": {"en": "The Knowledgeable Asura", "de": "Die klugen Asura"}
    },
    "100442": {
      "name": "The Misanthropic Jotun Principle",
      "type": "secondary",
      "givers": [708, 709],
      "repeatable": true,
      "xp": 7500,
      "objectives": [
        [0, "Seek the great jotun living within Darkrime Delves."],
        [0, "Find the source of the roar heard from below."],
        [0, "Find a way to kill the giant jotun."],
        [0, "See Einarr Frostcleft for your reward."]
      ],
      "wiki": {"en": "The Misanthropic Jotun Principle", "de": "Ruhm und Missgunst"}
    },
    "100443": {
      "name": "The Missing Vanguard",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1,000 Ebon Vanguard reputation points", "Monumental Tapestry"],
      "requires": [100340],
      "objectives": [
        [0, "Search for the Ebon Vanguard in the Charr homelands."],
        [0, "Speak to Gwen in the Hall of Monuments."],
        [0, "Travel to Longeye's Ledge and search for clues about the Vanguard. (Against the Charr)"],
        [0, "Free Pyre's warband and gain their aid. (Warband of Brothers)"],
        [0, "Free the remaining Ebon Vanguard from the stronghold of Hierophant Burntsoul. (Assault on the Stronghold)"],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {"en": "The Missing Vanguard", "de": "Die verschwundene Vorhut"}
    },
    "100444": {
      "name": "The Path to Revelations",
      "type": "secondary",
      "givers": [341],
      "skills": [2416],
      "rewards": ["100 Asura reputation points", "Kerrsh's Staff (unique item)"],
      "requires": [100430],
      "objectives": [
        [0, "Travel to the deciphered location in Varajar Fells."],
        [0, "Defeat the Facet of Spirit."],
        [0, "Conquer the Facet of Destruction."],
        [0, "Vanquish the Facet of Existence."],
        [0, "Dominate the Facet of Death."],
        [0, "Thrash the Facet of Illusions."],
        [0, "Annihilate the Facet of Creation."],
        [0, "See Kerrsh for your reward."]
      ],
      "wiki": {"en": "The Path to Revelations", "de": "Der Weg zu Enthüllungen"}
    },
    "100445": {
      "name": "The Smell of Titan in the Morning",
      "type": "secondary",
      "givers": [317],
      "skills": [2233],
      "rewards": ["250 Ebon Vanguard reputation points", "Scroll of Hero's Insight"],
      "requires": [100443],
      "objectives": [
        [0, "Flush out the Titan in Sacnoth Valley"],
        [0, "Slay the Titan."],
        [0, "See Captain Langmar for your reward."]
      ],
      "wiki": {"en": "The Smell of Titan in the Morning", "de": "Der Geruch von Titanen am Morgen"}
    },
    "100446": {
      "name": "The Three Wise Norn",
      "type": "event",
      "givers": [405],
      "event": 13,
      "xp": 1000,
      "gold": 100,
      "rewards": [
        "100 Ebon Vanguard reputation points",
        "Frosty Summoning Stone",
        "10 Candy Cane Shards",
        "10 Wintersday Gifts"
      ],
      "next": [100348],
      "objectives": [
        [0, "Speak with Ebon Vanguard troops in the Eye of the North about Wintersday gifts for the Norn. Number of gifts received: [0...3]"],
        [0, "Enlist the aid of Galbraum."],
        [0, "Enlist the aid of Brartak."],
        [0, "Enlist the aid of Helga."],
        [0, "See Casey Carpenter for your reward."]
      ],
      "wiki": {"en": "The Three Wise Norn", "de": "Die drei weisen Norn"}
    },
    "100447": {
      "name": "The Throwdown in a Norn Town",
      "type": "secondary",
      "givers": [619],
      "skills": [2213, 2214],
      "rewards": ["300 Deldrimor reputation points", "Armor of Salvation"],
      "requires": [100377],
      "next": [100378],
      "objectives": [
        [0, "Speak to Kilroy when you are ready to fight Bjorn Thunderfist."],
        [0, "Defeat Bjorn Thunderfist in the championship brawling match."],
        [0, "See Kilroy Stonekin for your reward."]
      ],
      "wiki": {"en": "The Throwdown in a Norn Town", "de": "In dieser Stadt macht Ihr ihn platt"}
    },
    "100448": {
      "name": "The Wedding",
      "type": "primary",
      "givers": [405],
      "requires": [100000],
      "rewards": ["Keiran Thackeray joins your party as a Hero."],
      "wiki": {"en": "The Wedding", "de": "Die Hochzeit"}
    },
    "100449": {
      "name": "Then and Now, Here and There",
      "type": "secondary",
      "givers": [259],
      "hero": [24],
      "xp": 15000,
      "requires": [100443],
      "objectives": [
        [0, "Travel to the ruins in Diessa Lowlands."],
        [0, "Defeat the Charr guarding the ruins to free the prisoners. You have [4...0] group[s] remaining."],
        [0, "Reassure the Charr's prisoners."],
        [0, "Find Dahgar the Eye of Flame in Old Ascalon and destroy him."],
        [0, "Find Gwen's hidden treasure in the ruins of Ashford."],
        [0, "Bring news of the Charr's defeat to Duke Barradin in Piken Square."]
      ],
      "rewards": ["Gwen's Flute (unique) (obtained during the quest, not at the end)"],
      "wiki": {"en": "Then and Now, Here and There", "de": "Damals und heute, dort und hier"}
    },
    "100450": {
      "name": "Tracking the Nornbear",
      "type": "primary",
      "givers": [295],
      "xp": 2000,
      "rewards": ["250 Norn reputation points"],
      "requires": [100389],
      "next": [100352],
      "missions": [653],
      "objectives": [
        [0, "Help Jora track the Nornbear in the Far Shiverpeaks"],
        [0, "Seek out Gunnar Poundfist in Gunnar's Hold."],
        [0, "Locate Sif in Sifhalla."],
        [0, "Defend Sifhalla."],
        [0, "See Sif Shadowhunter for your reward."]
      ],
      "wiki": {"en": "Tracking the Nornbear", "de": "Dem Nornbären auf der Spur"}
    },
    "100451": {
      "name": "Truthseeker",
      "type": "secondary",
      "campaign": 4,
      "region": 19,
      "skills": [2355],
      "rewards": ["100 Norn reputation points"],
      "requires": [100352],
      "objectives": [
        [0, "Find the home of Hogni Truthseeker in Drakkar Lake."],
        [0, "Speak with Hogni Truthseeker"]
      ],
      "wiki": {"en": "Truthseeker", "de": "Wahrheitssucher"}
    },
    "100452": {
      "name": "Turning the Page",
      "type": "secondary",
      "givers": [260],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["100 Asura reputation points"],
      "next": [100423],
      "objectives": [
        [0, "Defeat the White Mantle who have taken the Grimoire Arcanum."],
        [0, "Recover the Grimoire Arcanum."],
        [0, "Return the Grimoire Arcanum to Justiciar Naveed."]
      ],
      "wiki": {"en": "Turning the Page", "de": "Das Blatt wendet sich"}
    },
    "100453": {
      "name": "Veiled Threat",
      "type": "secondary",
      "givers": [751, 765],
      "xp": 7500,
      "gold": 1500,
      "requires": [100433],
      "objectives": [
        [0, "Find Rragar Maneater."],
        [0, "Pursue Rragar into the depths of the dungeon and eliminate him."],
        [0, "Destroy Hidesplitter"],
        [0, "See Gron Fierceclaw (Merchant) for your reward."]
      ],
      "wiki": {"en": "Veiled Threat", "de": "Verborgene Bedrohung"}
    },
    "100454": {
      "name": "Vision of the Raven Spirit",
      "type": "primary",
      "givers": [249],
      "xp": 2000,
      "rewards": ["250 Norn reputation points"],
      "requires": [100352],
      "next": [100334],
      "missions": [655],
      "objectives": [
        [0, "\"Discuss\" the situation with Olaf."],
        [0, "Defeat the attacking Destroyers."],
        [0, "See Olaf Olafson for your reward."]
      ],
      "wiki": {"en": "Vision of the Raven Spirit", "de": "Vision des Rabengeists"}
    },
    "100455": {
      "name": "Warband of Brothers",
      "type": "primary",
      "campaign": 4,
      "region": 20,
      "requires": [100433],
      "next": [100458],
      "objectives": [
        [0, "Rescue each member of Pyre Fierceshot's warband from the Cathedral of Flames."],
        [0, "Rescue Seer Fiercereign."],
        [0, "Rescue Cowl Fiercetongue."],
        [0, "Rescue Roan Fierceheart."],
        [0, "Slay Flamemaster Maultooth."],
        [0, "Your party has [0...1] key[s]."]
      ],
      "rewards": ["Ebon Vanguard reputation points", "First time: 1,500 (2,250 in hard mode)", "On repeat: 200 (300 in hard mode)", "Pyre Fierceshot joins your party"],
      "wiki": {"en": "Warband of Brothers", "de": "Brudertrupp"}
    },
    "100456": {
      "name": "Watch It Jiggle",
      "type": "secondary",
      "givers": [588, 589],
      "xp": 5000,
      "gold": 1250,
      "objectives": [
        [0, "Recover some prismatic gelatinous material from the ooze pit."],
        [0, "Transport the prismatic gelatinous material to Seer Fiercereign."]
      ],
      "wiki": {"en": "Watch it Jiggle", "de": "Glibberige Sache"}
    },
    "100457": {
      "name": "Wayfarer's Reverie: The Far North",
      "type": "event",
      "campaign": 4,
      "region": 19,
      "event": 8,
      "xp": 2007,
      "gold": 2012,
      "rewards": ["Proof of Mountains"],
      "objectives": [
        [0, "Visit Gwen's Garden."],
        [0, "Visit Drakkar Lake."],
        [0, "Visit the Shrine of the Bear Spirit Missing period"],
        [0, "Visit the strange ridge in Dalada Uplands."],
        [0, "Visit the burning forest in Sacnoth Valley."],
        [0, "Visit the G.O.L.E.M site. missing period after M"],
        [0, "Visit the Shiverpeak bloodstone. Note: Take the \"Crystal Method\" quest from Saerin in Gadd's Encampment"],
        [0, "Visit Ventari's sanctuary."],
        [0, "See Festival Enthusiast Styr Wolf-Handed for your reward."]
      ],
      "wiki": {"en": "Wayfarer's Reverie: The Far North", "de": "Erinnerung des Reisenden: Der Hohe Norden"}
    },
    "100458": {
      "name": "What Must Be Done",
      "type": "primary",
      "givers": [781],
      "xp": 2000,
      "rewards": ["250 Ebon Vanguard reputation points"],
      "requires": [100455],
      "next": [100342],
      "missions": [669],
      "objectives": [
        [0, "Seek Seer Fiercereign in Dalada Uplands to learn how to safely use the Charr siege devourer."],
        [0, "Destroy the Shaman scout patrol using the Charr siege devourer."],
        [0, "Meet Gron Fierceclaw in Dalada Uplands."],
        [0, "Hunt down and tame an armored saurus in the southwest fields of Dalada Uplands."],
        [0, "Report to Bonwor Fierceblade in Doomlore Shrine for combat training."],
        [0, "Learn to overcome the Charr warband formation."],
        [0, "See Bonwor Fierceblade for your reward."]
      ],
      "wiki": {"en": "What Must Be Done", "de": "Was getan werden muss"}
    },
    "100459": {
      "name": "Wintersday Cheer",
      "type": "event",
      "givers": [405],
      "event": 13,
      "xp": 5000,
      "rewards": ["500 Ebon Vanguard reputation points", "10 Candy Cane Shards", "5 Mischievous Tonics"],
      "requires": [100348],
      "objectives": [
        [0, "Speak with Gwen in the Hall of Monuments."],
        [0, "Speak with Lieutenant Thackeray in the Eye of the North."],
        [0, "Speak with Valgar Tempestcrafter, the Norn metallurgist."],
        [0, "Take the family crest pendant to Lefsi Spiritchaser in Varajar Fells. Don't take Gwen with you."],
        [0, "Protect Lefsi Spiritchaser while he imbues the pendant."],
        [0, "Speak with Lieutenant Thackeray."],
        [0, "Speak with Gwen."],
        [0, "See Lieutenant Thackeray for your reward."]
      ],
      "wiki": {"en": "Wintersday Cheer", "de": "Wintertagsgrüße"}
    },
    "100460": {
      "name": "Worthy Deeds (Done Dirt Cheap)",
      "type": "secondary",
      "givers": [315],
      "xp": 15000,
      "skills": [2358],
      "rewards": ["250 Norn reputation points"],
      "objectives": [
        [0, "Prove your valor to Sif. Vanquish Koren Wildrunner in Drakkar Lake."],
        [0, "Continue proving your worth. Defeat Myish, Lady Of The Lake in Drakkar Lake."],
        [0, "Flex your valor muscle. Stomp Nulfastu, Earthbound in Drakkar Lake."],
        [0, "See Sif Shadowhunter for your reward."]
      ],
      "wiki": {"en": "Worthy Deeds (Done Dirt Cheap)", "de": "Ruhmreiche Taten (spottbillig erledigt)"}
    },
    "100461": {
      "name": "A Belt Pouch",
      "type": "secondary",
      "givers": [519],
      "xp": 1500,
      "gold": 75,
      "objectives": [
        [0, "Speak with Herder Tsiyingju about getting treated hides."],
        [0, "Destroy the group of Crimson Skull plaguing Kaitan Village."],
        [0, "Speak with Herder Tsiyingju."],
        [0, "See Neing the Tanner for your reward."]
      ],
      "rewards": ["Belt Pouch", "Holds 5 items"],
      "wiki": {"en": "A Belt Pouch", "de": "Eine Gürteltasche"}
    },
    "100462": {
      "name": "A Chance Encounter",
      "type": "secondary",
      "givers": [502],
      "xp": 3000,
      "gold": 1500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100781],
      "next": [100463, 100464],
      "objectives": [
        [0, "Attend the Ministry of Purity's rally."],
        [0, "Prevent the Ministry of Purity from killing Miku."],
        [0, "Escape from the Ministry of Purity."],
        [0, "Defeat Xan Hei."],
        [0, "See Miku for your reward."]
      ],
      "wiki": {"en": "A Chance Encounter", "de": "Ein zufälliges Treffen"}
    },
    "100463": {
      "name": "A Chance Encounter (Hard mode)",
      "type": "secondary",
      "givers": [503],
      "xp": 6000,
      "gold": 3000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100782, 100462],
      "next": [100465],
      "objectives": [
        [0, "Attend the Ministry of Purity's rally."],
        [0, "Prevent the Ministry of Purity from killing Miku."],
        [0, "Escape from the Ministry of Purity."],
        [0, "Defeat Xan Hei."],
        [0, "See Miku for your reward."]
      ],
      "wiki": {"en": "A Chance Encounter (Hard mode)", "de": "Ein zufälliges Treffen (Schwerer Modus)"}
    },
    "100464": {
      "name": "A Favor Returned",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100462],
      "next": [100465, 100537, 100554],
      "objectives": [
        [0, "Locate the Jade Brotherhood at Mount Qinkai."],
        [0, "Rescue the Jade Brotherhood's captives."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "A Favor Returned", "de": "Ein erwiderter Gefallen"}
    },
    "100465": {
      "name": "A Favor Returned (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2 Imperial Guard Requisition Orders", "1 Imperial Commendation"],
      "requires": [100463, 100464],
      "next": [100538],
      "objectives": [
        [0, "Locate the Jade Brotherhood at Mount Qinkai."],
        [0, "Rescue the Jade Brotherhood's captives."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "A Favor Returned (Hard mode)", "de": "Ein erwiderter Gefallen (Schwerer Modus)"}
    },
    "100466": {
      "name": "A Formal Introduction",
      "type": "primary",
      "givers": [467],
      "xp": 2000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [100508],
      "missions": [257],
      "objectives": [
        [0, "Meet Master Togo outside the monastery in Sunqua Vale."],
        [0, "Accompany Master Togo to Minister Cho's Estate."],
        [0, "Speak with Guardsman Zui to gain entrance to the estate."],
        [0, "See Guardsman Kayao for your reward."]
      ],
      "wiki": {"en": "A Formal Introduction", "de": "Eine förmliche Vorstellung"}
    },
    "100467": {
      "name": "A Letter Home",
      "type": "secondary",
      "givers": [481],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Bring the letter to Arani."]
      ],
      "wiki": {"en": "A Letter Home", "de": "Ein Brief nach Hause"}
    },
    "100468": {
      "name": "A Master's Burden",
      "type": "primary",
      "givers": [389],
      "xp": 3000,
      "gold": 150,
      "requires_missions": [258],
      "next": [100610],
      "objectives": [
        [0, "Speak with Headmaster Greico on the Kaineng Docks."],
        [0, "Find Master Togo in Wajjun Bazaar."],
        [0, "Find Yijo's mother, Jia, in Wajjun Bazaar. Inform her of her son's demise."],
        [0, "See Headmaster Greico for your reward."]
      ],
      "wiki": {"en": "A Master's Burden", "de": "Die Bürde eines Meisters"}
    },
    "100469": {
      "name": "A Meeting With the Emperor",
      "type": "primary",
      "givers": [443],
      "xp": 3000,
      "gold": 150,
      "requires_missions": [261],
      "next": [100710],
      "objectives": [
        [0, "Speak with the emperor."],
        [0, "See Emperor's Voice for your reward."]
      ],
      "wiki": {"en": "A Meeting With the Emperor", "de": "Ein Treffen mit dem Kaiser"}
    },
    "100470": {
      "name": "A Monstrous Revelation",
      "type": "secondary",
      "givers": [438],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100646],
      "objectives": [
        [0, "You must defeat 10 more Am Fah"],
        [0, "See Imperial Agent Hanjo for your reward"]
      ],
      "wiki": {"en": "A Monstrous Revelation", "de": "Eine ungeheuere Enthüllung"}
    },
    "100471": {
      "name": "A New Escort",
      "type": "secondary",
      "givers": [530],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "objectives": [
        [0, "Meet Merchant Orek and the Caravan in Drazach Thicket."],
        [0, "Escort Merchant Orek and the Caravan to Saint Anjeka's Shrine."],
        [0, "See Merchant Orek for your reward."]
      ],
      "wiki": {"en": "A New Escort", "de": "Eine neue Eskorte"}
    },
    "100472": {
      "name": "A Strange Request",
      "type": "event",
      "givers": [342],
      "event": 6,
      "xp": 100,
      "gold": 150,
      "rewards": ["60 Victory Tokenns"],
      "requires": [100740],
      "next": [100536],
      "objectives": [
        [0, "Travel to the Crimson Skull refugee site in Sunqua Vale. Talk to their leader and find out what drove them from their original encampment. 'refugee site' and 'leader' are bolded green in the quest log"],
        [0, "Destroy the creature that has taken control of the Crimson Skull camp in Kinya Province."],
        [0, "See Imperial Guard Hanso for your reward."]
      ],
      "wiki": {"en": "A Strange Request", "de": "Eine sonderbare Bitte"}
    },
    "100473": {
      "name": "A Treaty's a Treaty",
      "type": "secondary",
      "givers": [478],
      "xp": 5000,
      "gold": 2500,
      "rewards": ["Sapphire", "2 Lockpicks"],
      "requires": [100569],
      "next": [100644, 100474, 100558, 100770],
      "objectives": [
        [0, "Find and speak with Ryun Grayfeather in Jaya Bluffs."],
        [0, "Talk to Ryun Grayfeather to travel to Tsumei Village."],
        [0, "Defend Tsumei Village from the attacking Sensali Tengu."],
        [0, "Defeat the Ministry of Purity's Forces."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "A Treaty's a Treaty", "de": "Ein Vertrag ist ein Vertrag"}
    },
    "100474": {
      "name": "A Treaty's a Treaty (Hard mode)",
      "type": "secondary",
      "givers": [478],
      "xp": 10000,
      "gold": 5000,
      "rewards": ["Gold Zaishen Coin", "Ruby", "Sapphire", "Lockpick"],
      "requires": [100570, 100473],
      "next": [100557, 100771, 100645],
      "objectives": [
        [0, "Find and speak with Ryun Grayfeather in Jaya Bluffs."],
        [0, "Defend Tsumei Village from the attacking Sensali Tengu."],
        [0, "Defeat the Ministry of Purity's Forces."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "A Treaty's a Treaty (Hard mode)", "de": "Ein Vertrag ist ein Vertrag (Schwerer Modus)"}
    },
    "100475": {
      "name": "Advanced Defense Techniques",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [43, 118, 176, 299, 345, 424, 871, 973],
      "objectives": [
        [0, "Speak to Weng Gha."],
        [0, "Talk to Weng Gha again to begin your test."],
        [0, "Use defensive skills to survive attacks for 2 minutes, or defeat Jinzo and Weng Gha."],
        [0, "See Instructor Ng for your reward."]
      ],
      "wiki": {"en": "Advanced Defense Techniques", "de": "Fortgeschrittene Verteidigungstechniken"}
    },
    "100476": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [472, 504],
      "xp": 600,
      "gold": 50,
      "requires": [100546],
      "next": [100680, 100685, 100683, 100686, 100681, 100682, 100687, 100508],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Assassine)"}
    },
    "100477": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [505, 474],
      "xp": 600,
      "gold": 50,
      "requires": [100679],
      "next": [100684, 100687, 100685, 100683, 100681, 100682, 100680],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Elementarmagier)"}
    },
    "100478": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [506, 393],
      "xp": 600,
      "gold": 50,
      "requires": [100711],
      "next": [100684, 100685, 100683, 100686, 100681, 100682, 100680],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Krieger)"}
    },
    "100479": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [507, 508],
      "xp": 600,
      "gold": 50,
      "requires": [100595],
      "next": [100684, 100685, 100683, 100686, 100680, 100681, 100687],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Mesmer)"}
    },
    "100480": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [214, 509],
      "xp": 600,
      "gold": 50,
      "requires": [100668],
      "next": [100684, 100685, 100683, 100686, 100681, 100682, 100687],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Mönch)"}
    },
    "100481": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [420, 510],
      "xp": 600,
      "gold": 50,
      "requires": [100642],
      "next": [100684, 100685, 100687, 100686, 100681, 100682, 100680],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Nekromant)"}
    },
    "100482": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [511, 512],
      "xp": 600,
      "gold": 50,
      "requires": [100672],
      "next": [100684, 100687, 100683, 100686, 100681, 100682, 100680],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Ritualist)"}
    },
    "100483": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [409, 513],
      "xp": 600,
      "gold": 50,
      "requires": [100747],
      "next": [100684, 100685, 100683, 100686, 100680, 100682, 100687],
      "wiki": {"en": "An Audience with Master Togo", "de": "Eine Audienz bei Meister Togo (Waldläufer)"}
    },
    "100484": {
      "name": "An End to Suffering",
      "type": "secondary",
      "givers": [294],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find Tukan on the rooftops and end his suffering"],
        [0, "See Qian for your reward"]
      ],
      "wiki": {"en": "An End to Suffering", "de": "Dem Leiden ein Ende"}
    },
    "100485": {
      "name": "An Unwelcome Guest",
      "type": "attribute",
      "givers": [499],
      "xp": 4000,
      "gold": 175,
      "rewards": ["15 Attribute points"],
      "requires_missions": [258],
      "objectives": [
        [0, "Restore Zunraa's presence by cleansing the valley of miasma. Should he fall, you may revive Zunraa by ringing the ceremonial bell at any of his shrines."],
        [0, "Destroy the corrupted Zunraa."],
        [0, "See Zunraa for your reward."]
      ],
      "wiki": {"en": "An Unwelcome Guest", "de": "Ein unwillkommener Gast"}
    },
    "100486": {
      "name": "Appearance of the Naga",
      "type": "secondary",
      "givers": [224],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100730],
      "objectives": [
        [0, "Speak with Sister Choi Ju in Tsumei Village to learn more about Zen Nai Falls."],
        [0, "Go to Zen Nai Falls and find the Naga that have invaded the area."],
        [0, "Scare off the Naga from the area."],
        [0, "See Captain Zinghu for your reward."]
      ],
      "wiki": {"en": "Appearance of the Naga", "de": "Auftauchen der Naga"}
    },
    "100487": {
      "name": "Architect of Corruption",
      "type": "secondary",
      "givers": [187],
      "xp": 2000,
      "gold": 1000,
      "rewards": ["Ministerial Commendation"],
      "requires": [100764],
      "next": [100488, 100719],
      "objectives": [
        [0, "Seek out Jeijou, Shadow Whispered."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "Architect of Corruption", "de": "Architekt der Verdorbenheit"}
    },
    "100488": {
      "name": "Architect of Corruption (Hard mode)",
      "type": "secondary",
      "givers": [187],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100765, 100487],
      "next": [100720],
      "objectives": [
        [0, "Seek out Jeijou, Shadow Whispered."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "Architect of Corruption (Hard mode)", "de": "Architekt der Verdorbenheit (Schwerer Modus)"}
    },
    "100489": {
      "name": "Artistic Endeavors",
      "type": "secondary",
      "givers": [646],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "objectives": [
        [0, "Kill the Sly Dredge who stole Jun's art supplies"],
        [0, "See Jun for your reward"]
      ],
      "wiki": {"en": "Artistic Endeavors", "de": "Künstlerische Bemühungen"}
    },
    "100490": {
      "name": "Assassin Insignia",
      "type": "secondary",
      "givers": [210],
      "profession": 7,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100529],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Advanced Defense Techniques course."],
        [0, "Complete the Disenchantment Course."],
        [0, "Complete the Skill Chaining Course."],
        [0, "Complete the Snaring Course."],
        [0, "See Headmaster Lee for your reward."]
      ],
      "wiki": {"en": "Assassin Insignia", "de": "Assassinen-Befähigung"}
    },
    "100491": {
      "name": "Assassination Attempt",
      "type": "secondary",
      "givers": [665],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find Ratsu and stop him before he kills Saito."],
        [0, "See Saito for your reward."]
      ],
      "wiki": {"en": "Assassination Attempt", "de": "Mordversuch"}
    },
    "100492": {
      "name": "Assist the Guards",
      "type": "secondary",
      "givers": [471],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "next": [100692],
      "objectives": [
        [0, "Locate Waeng in the sewers and eliminate him."],
        [0, "See Guardsman Tang for your reward"]
      ],
      "wiki": {"en": "Assist the Guards", "de": "Helft den Wächtern"}
    },
    "100493": {
      "name": "Attack the Kurzicks!",
      "type": "secondary",
      "givers": [595],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Make contact with Khim."],
        [0, "Destroy the forces marching on Gyala Hatchery. You have [9...0] group[s] remaining."],
        [0, "See Captain Juno for your reward."]
      ],
      "wiki": {"en": "Attack the Kurzicks!", "de": "Greift die Kurzick an!"}
    },
    "100494": {
      "name": "Battle in the Sewers",
      "type": "primary",
      "givers": [569],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [100509],
      "next_missions": [264],
      "missions": [264],
      "objectives": [
        [0, "Meet the Royal Guard in the Shenzun Tunnels."],
        [0, "Escort the Royal Guard to Commander Jafai."],
        [0, "See Royal Guard Kazuya for your reward."]
      ],
      "wiki": {"en": "Battle in the Sewers", "de": "Schlacht in der Kanalisation"}
    },
    "100495": {
      "name": "Befriending the Kurzicks",
      "type": "primary",
      "givers": [204],
      "xp": 10000,
      "gold": 700,
      "requires": [100585],
      "next": [100712],
      "objectives": [
        [0, "Accumulate 10,000 unspent Kurzick faction points."],
        [0, "See Count zu Heltzer for your reward."]
      ],
      "wiki": {"en": "Befriending the Kurzicks", "de": "Freundschaft mit den Kurzick"}
    },
    "100496": {
      "name": "Befriending the Luxons",
      "type": "primary",
      "givers": [324],
      "xp": 10000,
      "gold": 700,
      "requires": [100584],
      "next": [100691],
      "objectives": [
        [0, "Accumulate 10,000 unspent Luxon faction points."],
        [0, "See Elder Rhea for your reward."]
      ],
      "rewards": ["Your Luxon faction cap limit is increased by 10,000 points", "This increase is only applied once per account. To receive this reward, you must either complete the quest (if none of your characters has done so), or log in with a character in your account that has done the quest."],
      "wiki": {"en": "Befriending the Luxons", "de": "Freundschaft mit den Luxon"}
    },
    "100497": {
      "name": "Calling All Thugs",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100558],
      "next": [100636, 100498],
      "objectives": [
        [0, "Travel to Shadow's Passage and investigate the meeting."],
        [0, "Speak with the attendees to find out what the criminals are planning. Avoid the group you are disguised as and mind your tongue. The wrong words will draw unwanted attention."],
        [0, "Go listen to the criminal's speech. Leaving early will blow your cover."],
        [0, "Escape the meeting."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Calling All Thugs", "de": "Aufruf an alle Schurken"}
    },
    "100498": {
      "name": "Calling All Thugs (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100557, 100497],
      "next": [100637],
      "objectives": [
        [0, "Travel to Shadow's Passage and investigate the meeting."],
        [0, "Speak with the attendees to find out what the criminals are planning. Avoid the group you are disguised as and mind your tongue. The wrong words will draw unwanted attention."],
        [0, "Go listen to the criminal's speech. Leaving early will blow your cover."],
        [0, "Escape the meeting."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Calling All Thugs (Hard mode)", "de": "Aufruf an alle Schurken (Schwerer Modus)"}
    },
    "100499": {
      "name": "Cantha Courier Crisis",
      "type": "secondary",
      "givers": [251],
      "xp": 2000,
      "gold": 1500,
      "rewards": ["Imperial Commendation"],
      "requires": [100510],
      "next": [100500],
      "objectives": [
        [0, "Meet up with the Krytan courier in Kaineng Docks."],
        [0, "Talk to Courier Falken to get a new move."],
        [0, "Defeat all enemies on the way back to Kaineng Center. Don't get knocked out."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Cantha Courier Crisis", "de": "Canthanische Kurierkrise"}
    },
    "100500": {
      "name": "Cantha Courier Crisis (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2 Imperial Commendations"],
      "requires": [100511, 100499],
      "objectives": [
        [0, "Meet up with the Krytan courier in Kaineng Docks."],
        [0, "Talk to Courier Falken to get a new move."],
        [0, "Defeat all enemies on the way back to Kaineng Center. Don't get knocked out."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Cantha Courier Crisis (Hard mode)", "de": "Canthanische Kurierkrise (Schwerer Modus)"}
    },
    "100501": {
      "name": "Captured",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find the kidnapped guard in Wajjun Bazaar."],
        [0, "Kill the Am Fah guarding the captive."],
        [0, "See Emperor's Hand for your reward."]
      ],
      "wiki": {"en": "Captured", "de": "Gefangen"}
    },
    "100502": {
      "name": "Capturing the Orrian Tome",
      "type": "secondary",
      "givers": [302],
      "next": [100618],
      "objectives": [
        [0, "Infiltrate the Am Fah and eavesdrop upon the Am Fah, without being noticed, to learn the location of the Orrian Tomes."],
        [0, "Capture the Orrian Tome from the Am Fah."],
        [0, "See Minister Jaisan for your reward."]
      ],
      "wiki": {"en": "Capturing the Orrian Tome", "de": "Den orrianischen Folianten erbeuten"}
    },
    "100503": {
      "name": "Cash Crops",
      "type": "secondary",
      "givers": [546],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Speak with Farmer Xeng Jo."],
        [0, "Kneel and plant seeds in each of the farmer's fields."],
        [0, "See Villager Hijai for your reward."]
      ],
      "wiki": {"en": "Cash Crops", "de": "Ernte zum Verkauf"}
    },
    "100504": {
      "name": "Challenge of Strength",
      "type": "secondary",
      "givers": [607],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Defeat the Ancient Elder Naga."],
        [0, "See Captain Elora for your reward."]
      ],
      "wiki": {"en": "Challenge of Strength", "de": "Herausforderung der Kraft"}
    },
    "100505": {
      "name": "Chaos in Kryta",
      "type": "secondary",
      "givers": [254],
      "travel": 1,
      "xp": 1000,
      "objectives": [
        [0, "Speak to Mhenlo at Bejunkan Pier."],
        [0, "Speak to Armian to book passage on the good ship Sea Swift, bound for Tyria."],
        [0, "Speak to Lionguard Neiro in the foreign administration center and gain entrance to Lion's Arch and the lands of Kryta."],
        [0, "Speak to Firstwatch Sergio, captain of the Lionguard, to inform him you have arrived in Lion's Arch."]
      ],
      "wiki": {"en": "Chaos in Kryta", "de": "Chaos in Kryta"}
    },
    "100506": {
      "name": "Charting the Forests",
      "type": "secondary",
      "givers": [271],
      "xp": 5000,
      "gold": 200,
      "rewards": ["500 Kurzick faction", "Imperial Commendation"],
      "objectives": [
        [0, "Explore Arborstone for Sekai the Mapmaker. You have [5...0] places left to visit."],
        [0, "Explore Ferndale. You have [5...0] places left to visit."],
        [0, "Explore Melandru's Hope. You have [5...0] places left to visit."],
        [0, "Explore Drazach Thicket. You have [5...0] places left to visit."],
        [0, "See Sekai the Mapmaker for your reward."]
      ],
      "wiki": {"en": "Charting the Forests", "de": "Die Wälder kartographieren"}
    },
    "100507": {
      "name": "Charting the Jade Sea",
      "type": "secondary",
      "givers": [271],
      "xp": 5000,
      "gold": 200,
      "rewards": ["500 Luxon faction", "Imperial Commendation"],
      "objectives": [
        [0, "Explore Mount Qinkai. You have [5...0] places left to visit."],
        [0, "Explore Boreas Seabed. You have [5...0] places left to visit."],
        [0, "Explore Archipelagos. You have [5...0] places left to visit."],
        [0, "Explore Maishang Hills. You have [5...0] places left to visit."],
        [0, "See Sekai the Mapmaker for your reward."]
      ],
      "wiki": {"en": "Charting the Jade Sea", "de": "Das Jademeer kartographieren"}
    },
    "100508": {
      "name": "Choose Your Secondary Profession (Factions)",
      "type": "primary",
      "givers": [787],
      "xp": 3500,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Seek out at least one headmaster and complete that headmaster's training."]
      ],
      "wiki": {
        "en": "Choose Your Secondary Profession (Factions quest)",
        "de": "Wählt Eure sekundäre Klasse (Factions)"
      }
    },
    "100509": {
      "name": "City Under Attack",
      "type": "primary",
      "givers": [202],
      "xp": 3000,
      "gold": 150,
      "next": [100494],
      "objectives": [
        [0, "Find Master Togo at the city gates."],
        [0, "Learn what is going on in the sewers."],
        [0, "Speak to the emperor in Raisu Pavilion."]
      ],
      "wiki": {"en": "City Under Attack", "de": "Angriff auf die Stadt"}
    },
    "100510": {
      "name": "Cleansing Bukdek Byway",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "next": [100511, 100520, 100499],
      "objectives": [
        [0, "Defeat the Afflicted in Bukdek Byway"],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Bukdek Byway", "de": "Säuberung des Bukdek-Seitenweges"}
    },
    "100511": {
      "name": "Cleansing Bukdek Byway (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100510],
      "next": [100521, 100592, 100500],
      "objectives": [
        [0, "Defeat the Afflicted in Bukdek Byway"],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Bukdek Byway (Hard mode)", "de": "Säuberung des Bukdek-Seitenweges (Schwerer Modus)"}
    },
    "100512": {
      "name": "Cleansing Haiju Lagoon",
      "type": "secondary",
      "givers": [745],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100647],
      "next": [100513, 100524],
      "objectives": [
        [0, "Travel to Haiju Lagoon with Initiate Tsuriai."],
        [0, "Protect Initiate Tsuriai while she cleanses the lagoon."],
        [0, "See Initiate Tsuriai for your reward."]
      ],
      "wiki": {"en": "Cleansing Haiju Lagoon", "de": "Säuberung der Haiju-Lagune"}
    },
    "100513": {
      "name": "Cleansing Haiju Lagoon (Hard mode)",
      "type": "secondary",
      "givers": [745],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100648, 100512],
      "next": [100524],
      "objectives": [
        [0, "Travel to Haiju Lagoon with Initiate Tsuriai."],
        [0, "Protect Initiate Tsuriai while she cleanses the lagoon."],
        [0, "See Initiate Tsuriai for your reward."]
      ],
      "wiki": {"en": "Cleansing Haiju Lagoon (Hard mode)", "de": "Säuberung der Haiju-Lagune (Schwerer Modus)"}
    },
    "100514": {
      "name": "Cleansing Morostav Trail",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 2500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100527],
      "next": [100514, 100578],
      "objectives": [
        [0, "Defeat the Afflicted in Morostav Trail."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Morostav Trail", "de": "Säuberung des Morostavweges"}
    },
    "100515": {
      "name": "Cleansing Morostav Trail",
      "type": "secondary",
      "givers": [707],
      "xp": 10000,
      "gold": 5000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100527],
      "next": [100579],
      "objectives": [
        [0, "Defeat the Afflicted in Morostav Trail."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Morostav Trail", "de": "Säuberung des Morostavweges (Schwerer Modus)"}
    },
    "100516": {
      "name": "Cleansing Pongmei Valley",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100530],
      "next": [100517, 100647],
      "objectives": [
        [0, "Defeat the Afflicted in Pongmei Valley."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Pongmei Valley", "de": "Säuberung des Pongmei-Tals"}
    },
    "100517": {
      "name": "Cleansing Pongmei Valley (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100531, 100516],
      "next": [100648],
      "objectives": [
        [0, "Defeat the Afflicted in Pongmei Valley."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Pongmei Valley (Hard mode)", "de": "Säuberung des Pongmei-Tals (Schwerer Modus)"}
    },
    "100518": {
      "name": "Cleansing Rhea's Crater",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100524],
      "next": [100519, 100527],
      "objectives": [
        [0, "Defeat the Afflicted in Rhea's Crater."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Rhea's Crater", "de": "Säuberung von Rheas Krater"}
    },
    "100519": {
      "name": "Cleansing Rhea's Crater (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100524, 100518],
      "next": [100527],
      "objectives": [
        [0, "Defeat the Afflicted in Rhea's Crater."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Rhea's Crater (Hard mode)", "de": "Säuberung von Rheas Krater (Schwerer Modus)"}
    },
    "100520": {
      "name": "Cleansing Shadow's Passage",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100510],
      "next": [100521, 100522],
      "objectives": [
        [0, "Defeat the Afflicted in Shadow's Passage."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Shadow's Passage", "de": "Säuberung der Schattenpassage"}
    },
    "100521": {
      "name": "Cleansing Shadow's Passage (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100511, 100520],
      "next": [100523],
      "objectives": [
        [0, "Defeat the Afflicted in Shadow's Passage."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Shadow's Passage (Hard mode)", "de": "Säuberung der Schattenpassage (Schwerer Modus)"}
    },
    "100522": {
      "name": "Cleansing Shenzun Tunnels",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100520],
      "next": [100523, 100532],
      "objectives": [
        [0, "Defeat the Afflicted in Shenzun Tunnels."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Shenzun Tunnels", "de": "Säuberung der Shenzun-Tunnel"}
    },
    "100523": {
      "name": "Cleansing Shenzun Tunnels (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100521, 100522],
      "next": [100533],
      "objectives": [
        [0, "Defeat the Afflicted in Shenzun Tunnels."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing Shenzun Tunnels (Hard mode)", "de": "Säuberung der Shenzun-Tunnel (Schwerer Modus)"}
    },
    "100524": {
      "name": "Cleansing Zen Daijun",
      "type": "secondary",
      "givers": [745],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100512],
      "next": [100524, 100518],
      "objectives": [
        [0, "Defeat the plagued aspect of Zunraa."],
        [0, "Defeat the rotten aspect of Zunraa."],
        [0, "Defeat the tainted aspect of Zunraa."],
        [0, "Defeat the infected aspect of Zunraa."],
        [0, "Defeat the diseased aspect of Zunraa."],
        [0, "See Initiate Tsuriai for your reward."]
      ],
      "wiki": {"en": "Cleansing Zen Daijun", "de": "Säuberung von Zen Daijun"}
    },
    "100525": {
      "name": "Cleansing Zen Daijun",
      "type": "secondary",
      "givers": [745],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100513, 100524],
      "next": [100519],
      "objectives": [
        [0, "Defeat the plagued aspect of Zunraa."],
        [0, "Defeat the rotten aspect of Zunraa."],
        [0, "Defeat the tainted aspect of Zunraa."],
        [0, "Defeat the infected aspect of Zunraa."],
        [0, "Defeat the diseased aspect of Zunraa."],
        [0, "See Initiate Tsuriai for your reward."]
      ],
      "wiki": {"en": "Cleansing Zen Daijun", "de": "Säuberung von Zen Daijun (Schwerer Modus)"}
    },
    "100526": {
      "name": "Cleansing the Shrine",
      "type": "primary",
      "givers": [300],
      "xp": 1000,
      "gold": 50,
      "skills": [28, 67],
      "requires": [100597],
      "next": [100759],
      "objectives": [
        [0, "Travel to the Shrine of Maat."],
        [0, "Cure Brother Sitai of his affliction and restore order at the Shrine of Maat."],
        [0, "See Mei Ling for your reward."]
      ],
      "wiki": {"en": "Cleansing the Shrine", "de": "Den Schrein säubern"}
    },
    "100527": {
      "name": "Cleansing the Silent Surf",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100518],
      "next": [100527],
      "objectives": [
        [0, "Defeat the Afflicted in the Silent Surf."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing the Silent Surf", "de": "Säuberung der Stummen Brandung"}
    },
    "100528": {
      "name": "Cleansing the Silent Surf",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100519, 100527],
      "objectives": [
        [0, "Defeat the Afflicted in the Silent Surf."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing the Silent Surf", "de": "Säuberung der Stummen Brandung (Schwerer Modus)"}
    },
    "100529": {
      "name": "Cleansing the Steel",
      "type": "primary",
      "givers": [210],
      "xp": 2500,
      "gold": 100,
      "requires": [100490],
      "objectives": [
        [0, "Deliver the carved buckeye to Soar Honorclaw."],
        [0, "Meet Dao Weng in Panjiang Peninsula and kill him."],
        [0, "Return to Soar Honorclaw to let her know you have succeeded."],
        [0, "See Headmaster Lee for your reward."]
      ],
      "rewards": ["Sai"],
      "wiki": {"en": "Cleansing the Steel", "de": "Den Stahl säubern"}
    },
    "100530": {
      "name": "Cleansing the Sunjiang District",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100532],
      "next": [100531, 100516],
      "objectives": [
        [0, "Defeat the Afflicted in Sunjiang District."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing the Sunjiang District", "de": "Säuberung des Sunjiang-Bezirks"}
    },
    "100531": {
      "name": "Cleansing the Sunjiang District (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100533, 100530],
      "next": [100517],
      "objectives": [
        [0, "Defeat the Afflicted in Sunjiang District."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {
        "en": "Cleansing the Sunjiang District (Hard mode)",
        "de": "Säuberung des Sunjiang-Bezirks (Schwerer Modus)"
      }
    },
    "100532": {
      "name": "Cleansing the Undercity",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100522],
      "next": [100533, 100530],
      "objectives": [
        [0, "Defeat the Afflicted in the Undercity."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing the Undercity", "de": "Säuberung der Unterstadt"}
    },
    "100533": {
      "name": "Cleansing the Undercity (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100523, 100532],
      "next": [100531],
      "objectives": [
        [0, "Defeat the Afflicted in the Undercity."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Cleansing the Undercity (Hard mode)", "de": "Säuberung der Unterstadt (Schwerer Modus)"}
    },
    "100534": {
      "name": "Closer to the Stars",
      "type": "primary",
      "givers": [685],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [100559],
      "next_missions": [260],
      "missions": [260],
      "objectives": [
        [0, "Talk to Fishmonger Bihzun in Wajjun Bazaar."],
        [0, "Defend Fishmonger Bihzun from the Jade Brotherhood."],
        [0, "Ask Fishmonger Bihzun how to contact the Oracle of the Mists."],
        [0, "Talk to Loud Kou in Wajjun Bazaar."],
        [0, "See Adept Nai for your reward."]
      ],
      "wiki": {"en": "Closer to the Stars", "de": "Näher an den Sternen"}
    },
    "100535": {
      "name": "Condition Removal",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [154, 277, 787],
      "objectives": [
        [0, "Speak to Weng Gha."],
        [0, "Speak with Weng Gha again to begin the test."],
        [0, "Survive for 2 minutes by removing Conditions as they are placed upon you."],
        [0, "See Instructor Ng for your reward."]
      ],
      "wiki": {"en": "Condition Removal", "de": "Zustandsentfernung"}
    },
    "100536": {
      "name": "Darkness at Kaitan",
      "type": "event",
      "givers": [342],
      "event": 6,
      "xp": 100,
      "gold": 150,
      "rewards": ["90 Victory Tokenns"],
      "requires": [100472],
      "objectives": [
        [0, "Meet Imperial Guard Musashi in Panjiang Peninsula."],
        [0, "Destroy the Naga attacking Kaitan. [7...0] of 7 Naga groups remaining."],
        [0, "Speak to Farmer Lune and learn of the events that took place in Kaitan village."],
        [0, "Make haste to Raiyan Cave and determine the source of the problem."],
        [0, "Destroy the creatures in control of Raiyan Cave."],
        [0, "See Imperial Guard Hanso for your reward."]
      ],
      "wiki": {"en": "Darkness at Kaitan", "de": "Dunkelheit in Kaitan"}
    },
    "100537": {
      "name": "Deadly Cargo",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100464],
      "next": [100538, 100766],
      "objectives": [
        [0, "Clear the Jade Brotherhood out of Seitung Harbor."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Deadly Cargo", "de": "Tödliche Fracht"}
    },
    "100538": {
      "name": "Deadly Cargo (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2 Imperial Guard Requisition Orders", "1 Imperial Commendation"],
      "requires": [100465, 100537],
      "next": [100767],
      "objectives": [
        [0, "Clear the Jade Brotherhood out of Seitung Harbor."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Deadly Cargo (Hard mode)", "de": "Tödliche Fracht (Schwerer Modus)"}
    },
    "100539": {
      "name": "Death with Honor",
      "type": "secondary",
      "givers": [479],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Find a group of enemies that can grant Yorrt Strongjaw death with honor."],
        [0, "Take Yorrt Strongjaw's club to his son Trrok."],
        [0, "See Trrok Strongjaw for your reward."]
      ],
      "wiki": {"en": "Death with Honor", "de": "Ehrenvoller Tod"}
    },
    "100540": {
      "name": "Defend Fort Aspenwood",
      "type": "primary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "objectives": [
        [0, "Travel to Fort Aspenwood and speak to Master Architect Gunther."]
      ],
      "wiki": {"en": "Defend Fort Aspenwood", "de": "Fort Espenwald verteidigen"}
    },
    "100541": {
      "name": "Defense Against Hexes",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [67, 301],
      "objectives": [
        [0, "Speak with Lo Sha."],
        [0, "Speak with Lo Sha again to begin the test."],
        [0, "Defeat Su or survive for 2 minutes."],
        [0, "Speak with Lo Sha again."],
        [0, "See Instructor Ng for your reward."]
      ],
      "wiki": {"en": "Defense Against Hexes", "de": "Verteidigung gegen Verhexungen"}
    },
    "100542": {
      "name": "Discord Wallow Lyre",
      "type": "secondary",
      "givers": [662],
      "xp": 3000,
      "gold": 175,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires": [100612],
      "objectives": [
        [0, "Hunt down and kill the Discord Wallow. Retrieve its discord sinew and return to Vasili Lutgardis."],
        [0, "See Vasili Lutgardis for your reward."]
      ],
      "wiki": {"en": "Discord Wallow Lyre", "de": "Misstönende Suhler-Lyra"}
    },
    "100543": {
      "name": "Disenchantment Course",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [69, 143, 990],
      "objectives": [
        [0, "Speak with Mei Ling."],
        [0, "Speak with Mei Ling again to begin your test."],
        [0, "Battle Brother Pe Wan."],
        [0, "Speak with Mei Ling again."],
        [0, "See Instructor Ng for your reward."]
      ],
      "wiki": {"en": "Disenchantment Course", "de": "Entzauberungskurs"}
    },
    "100544": {
      "name": "Disruption",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [23, 162, 325, 399, 921],
      "objectives": [
        [0, "Talk to Talon Silverwing."],
        [0, "Speak to Talon Silverwing again to begin your test."],
        [0, "Defeat Ronsu."],
        [0, "Talk to Talon Silverwing again."],
        [0, "See Instructor Ng for your reward."]
      ],
      "wiki": {"en": "Disruption", "de": "Störung"}
    },
    "100545": {
      "name": "Drink from the Chalice of Corruption",
      "type": "secondary",
      "givers": [661],
      "xp": 3500,
      "gold": 275,
      "requires": [100666],
      "next": [100609],
      "objectives": [
        [0, "Allow Brother Tosai to finish his ritual."],
        [0, "See Brother Tosai for your reward."]
      ],
      "wiki": {"en": "Drink from the Chalice of Corruption", "de": "Trinkt aus dem Kelch der Verdorbenheit"}
    },
    "100546": {
      "name": "Dual Strike",
      "type": "primary",
      "givers": [472],
      "profession": 7,
      "xp": 1500,
      "gold": 100,
      "skills": [776, 1031],
      "rewards": ["Monastery Credit"],
      "requires": [100760],
      "next": [100476],
      "objectives": [
        [0, "Speak with Panaku again when you are ready to go to the Tengu village."],
        [0, "Travel with Panaku to the Tengu village of Aerie and assassinate Swift Honorclaw."],
        [0, "See Panaku for your reward."]
      ],
      "wiki": {"en": "Dual Strike", "de": "Doppelschlag"}
    },
    "100547": {
      "name": "Duel of the Houses",
      "type": "instance",
      "givers": [263],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "objectives": [
        [0, "Travel to the dueling grounds."],
        [0, "Defeat the Kurzick House in an honorable duel."],
        [0, "See Duel Master Vaughn for your reward."]
      ],
      "wiki": {"en": "Duel of the Houses", "de": "Das Duell der Häuser"}
    },
    "100548": {
      "name": "Elementalist Insignia",
      "type": "secondary",
      "givers": [344],
      "profession": 6,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100743],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Advanced Defense Techniques course."],
        [0, "Complete the Disruption course."],
        [0, "Complete the Skill Chaining course."],
        [0, "Complete the Snaring course."],
        [0, "See Headmaster Vhang for your reward."]
      ],
      "wiki": {"en": "Elementalist Insignia", "de": "Elementarmagier-Befähigung"}
    },
    "100549": {
      "name": "Eliminate the Am Fah",
      "type": "secondary",
      "givers": [773],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Seek out the Am Fah gathering in Bukdek Byway and eliminate them."],
        [0, "See Guardsman Ping for your reward."]
      ],
      "wiki": {"en": "Eliminate the Am Fah", "de": "Vernichtet die Am Fah"}
    },
    "100550": {
      "name": "Eliminate the Jade Brotherhood",
      "type": "secondary",
      "givers": [254],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "requires_missions": [260],
      "objectives": [
        [0, "Find the Jade Brotherhood in Bukdek Byway and eliminate them."],
        [0, "See Guardsman Chienpo for your reward."]
      ],
      "wiki": {"en": "Eliminate the Jade Brotherhood", "de": "Eliminiert die Jadebruderschaft"}
    },
    "100551": {
      "name": "Envoy of the Dredge",
      "type": "secondary",
      "givers": [222],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "next": [100699],
      "objectives": [
        [0, "Find Count zu Heltzer. Try to negotiate a ceasefire between the Kurzicks and the Dredge."],
        [0, "See Moleneaux for your reward."]
      ],
      "wiki": {"en": "Envoy of the Dredge", "de": "Gesandter der Schaufler"}
    },
    "100552": {
      "name": "Ever Closer to the Edge",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["1,000 Luxon faction", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100766],
      "next": [100553, 100772],
      "objectives": [
        [0, "Seek out the Am Fah."],
        [0, "Protect the Luxon Diplomats."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Ever Closer to the Edge", "de": "Noch näher am Abgrund"}
    },
    "100553": {
      "name": "Ever Closer to the Edge (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2,000 Luxon faction", "2 Imperial Guard Requisition Orders", "1 Imperial Commendation"],
      "requires": [100767, 100552],
      "next": [100773],
      "objectives": [
        [0, "Seek out the Am Fah."],
        [0, "Protect the Luxon Diplomats."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Ever Closer to the Edge (Hard mode)", "de": "Noch näher am Abgrund (Schwerer Modus)"}
    },
    "100554": {
      "name": "Family Matters",
      "type": "secondary",
      "givers": [251],
      "xp": 2000,
      "gold": 1500,
      "rewards": ["Imperial Commendation"],
      "requires": [100464],
      "next": [100555],
      "objectives": [
        [0, "Find Imperial Guard Miyuki in Wajjun Bazaar."],
        [0, "Ask around to find out where Imperial Guard Natsumi has been."],
        [0, "Head to the location Miyuki has suggested."],
        [0, "Defeat Meijun, Vengeful Eye and his allies."],
        [0, "See Lei Jeng For your reward."]
      ],
      "wiki": {"en": "Family Matters", "de": "Familienangelegenheit"}
    },
    "100555": {
      "name": "Family Matters (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100465, 100554],
      "objectives": [
        [0, "Find Imperial Guard Miyuki in Wajjun Bazaar."],
        [0, "Ask around to find out where Imperial Guard Natsumi has been."],
        [0, "Head to the location Miyuki has suggested."],
        [0, "Defeat Meijun, Vengeful Eye and his allies."],
        [0, "See Lei Jeng For your reward."]
      ],
      "wiki": {"en": "Family Matters (Hard mode)", "de": "Familienangelegenheit (Schwerer Modus)"}
    },
    "100556": {
      "name": "Feed the Hungry",
      "type": "secondary",
      "givers": [363],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Protect the emperor's cook as he serves soup to the poor."],
        [0, "See Imperial Guardsman Kintae for your reward."]
      ],
      "wiki": {"en": "Feed the Hungry", "de": "Die Hungernden ernähren"}
    },
    "100557": {
      "name": "Finding Jinnai (Hard mode)",
      "type": "secondary",
      "givers": [339],
      "xp": 6000,
      "gold": 3000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100474, 100558],
      "next": [100498],
      "objectives": [
        [0, "Locate Guardsman Jinnai."],
        [0, "Defeat the attacking Ministry of Purity forces. Jinnai has placed traps in the area that will aid you."],
        [0, "See Miku for your reward."]
      ],
      "wiki": {"en": "Finding Jinnai (Hard mode)", "de": "Suche nach Jinnai (Schwerer Modus)"}
    },
    "100558": {
      "name": "Finding Jinnai",
      "type": "secondary",
      "givers": [338],
      "xp": 3000,
      "gold": 1500,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100473],
      "next": [100497, 100557],
      "objectives": [
        [0, "Locate Guardsman Jinnai."],
        [0, "Defeat the attacking Ministry of Purity forces. Jinnai has placed traps in the area that will aid you."],
        [0, "See Miku for your reward."]
      ],
      "wiki": {"en": "Finding Jinnai", "de": "Suche nach Jinnai"}
    },
    "100559": {
      "name": "Finding The Oracle",
      "type": "primary",
      "givers": [557],
      "xp": 3000,
      "gold": 150,
      "requires_missions": [215],
      "next": [100534],
      "objectives": [
        [0, "Speak to Mhenlo and Togo about how to find the Oracle of the Mists."],
        [0, "Seek out Nika in Bukdek Byway."]
      ],
      "wiki": {"en": "Finding The Oracle", "de": "Findet das Orakel"}
    },
    "100560": {
      "name": "Fire in the Sky",
      "type": "event",
      "givers": [367],
      "event": 1,
      "xp": 2000,
      "gold": 300,
      "rewards": ["25 Lunar Tokens", "1 Bottle Rocket", "1 Champagne Popper", "1 Sparkler"],
      "next": [100704],
      "objectives": [
        [0, "Talk to Nubah Lao in Sunqua Vale to learn how to protect yourself from the nian."],
        [0, "Bring Nubah Lao 10 piles of glittering dust and he will make you some fireworks."],
        [0, "See Coordinator Tahyaa for your reward."]
      ],
      "wiki": {"en": "Fire in the Sky", "de": "Feuer am Himmel"}
    },
    "100561": {
      "name": "Forming a Party",
      "type": "secondary",
      "givers": [518],
      "xp": 1000,
      "gold": 10,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Invite a henchman into your party, then speak to Ludo in Sunqua Vale."]
      ],
      "wiki": {"en": "Forming a Party", "de": "Eine Gruppe bilden"}
    },
    "100562": {
      "name": "Fort Aspenwood",
      "type": "primary",
      "givers": [324],
      "xp": 3000,
      "gold": 250,
      "requires": [100584],
      "objectives": [
        [0, "Travel to Fort Aspenwood and speak to the Luxon Commander."]
      ],
      "wiki": {"en": "Fort Aspenwood (quest)", "de": "Fort Espenwald (Quest)"}
    },
    "100563": {
      "name": "Free Birds",
      "type": "secondary",
      "givers": [478],
      "xp": 3000,
      "gold": 1500,
      "rewards": ["Diamond", "2 Lockpicks"],
      "requires": [100775],
      "next": [100564, 100569],
      "objectives": [
        [0, "Meet Soar Honorclaw and his forces in Xaquang Skyway."],
        [0, "Fight your way inside the \"Tengu Containment Zone.\""],
        [0, "Locate and free the Tengu Prisoners."],
        [0, "Escort the prisoners to the Shenzun Tunnels."],
        [0, "At least one Tengu Prisoner must survive."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "Free Birds", "de": "Frei wie ein Vogel"}
    },
    "100564": {
      "name": "Free Birds (Hard mode)",
      "type": "secondary",
      "givers": [478],
      "xp": 6000,
      "gold": 3000,
      "rewards": ["Ruby", "Diamond", "Lockpick"],
      "requires": [100776, 100563],
      "next": [100570],
      "objectives": [
        [0, "Meet Soar Honorclaw and his forces in Xaquang Skyway."],
        [0, "Fight your way inside the \"Tengu Containment Zone.\""],
        [0, "Locate and free the Tengu Prisoners."],
        [0, "Escort the prisoners to the Shenzun Tunnels."],
        [0, "At least one Tengu Prisoner must survive."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "Free Birds (Hard mode)", "de": "Frei wie ein Vogel (Schwerer Modus)"}
    },
    "100565": {
      "name": "Free the Fur",
      "type": "primary",
      "givers": [562],
      "profession": 2,
      "xp": 1000,
      "gold": 50,
      "skills": [436, 450],
      "requires": [100602],
      "next": [100763],
      "objectives": [
        [0, "Speak to Sujun once you are ready to go rescue the rabbits."],
        [0, "Release all the rabbits from the traps. 3..0 of 3 rabbits still trapped."],
        [0, "See Sujun for your reward."]
      ],
      "wiki": {"en": "Free the Fur", "de": "Freie Felle"}
    },
    "100566": {
      "name": "Gain Zenmai",
      "type": "secondary",
      "givers": [728],
      "xp": 1500,
      "objectives": [
        [0, "Investigate the corpse Zenmai dragged to the city."],
        [0, "Defeat the demons."],
        [0, "Recruit Zenmai."],
        [0, "See Imperial Guardsman Linro for your reward."]
      ],
      "rewards": ["Zenmai joins your party."],
      "wiki": {"en": "Gain Zenmai", "de": "Zenmai aufnehmen"}
    },
    "100567": {
      "name": "Going Home",
      "type": "secondary",
      "givers": [794],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find a ship willing to carry a passenger to Ascalon."],
        [0, "Seek out Captain Joran in Wajjun Bazaar."],
        [0, "See Bryan for your reward."]
      ],
      "wiki": {"en": "Going Home", "de": "Zurück in die Heimat"}
    },
    "100568": {
      "name": "Haiju Lagoon",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["50 Victory Tokens"],
      "objectives": [
        [0, "Destroy the \"chaos rifts\" in Haiju Lagoon. [0...8] rifts destroyed."]
      ],
      "wiki": {"en": "Haiju Lagoon (mission)", "de": "Haiju-Lagune (Mission)"}
    },
    "100569": {
      "name": "Honorable Combat",
      "type": "secondary",
      "givers": [478],
      "xp": 3000,
      "gold": 1500,
      "rewards": ["Ruby", "2 Lockpicks"],
      "requires": [100563],
      "next": [100570, 100473],
      "objectives": [
        [0, "Find and rescue Ryun Grayfeather at Jaya Bluffs."],
        [0, "Defeat the Ministry of Purity Forces engaging you."],
        [0, "Catch the Ministry of Purity Sergeant."],
        [0, "Survive the battle between the Sensali and the Ministry of Purity."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "Honorable Combat", "de": "Ehrenhafter Kampf"}
    },
    "100570": {
      "name": "Honorable Combat (Hard mode)",
      "type": "secondary",
      "givers": [478],
      "xp": 6000,
      "gold": 3000,
      "rewards": ["Sapphire", "Diamond", "Lockpick"],
      "requires": [100564, 100569],
      "next": [100474],
      "objectives": [
        [0, "Find and rescue Ryun Grayfeather at Jaya Bluffs."],
        [0, "Defeat the Ministry of Purity Forces engaging you."],
        [0, "Catch the Ministry of Purity Sergeant."],
        [0, "Survive the battle between the Sensali and the Ministry of Purity."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "Honorable Combat (Hard mode)", "de": "Ehrenhafter Kampf (Schwerer Modus)"}
    },
    "100571": {
      "name": "Hopeless Romantic",
      "type": "event",
      "givers": [612],
      "event": 1,
      "xp": 5000,
      "gold": 300,
      "rewards": ["25 Lunar Tokens"],
      "objectives": [
        [0, "Meet with Hai Len in Panjiang Peninsula."],
        [0, "Help Hai Len search for Jei Zohn. Hai Len must survive."],
        [0, "See Hai Len for your reward."]
      ],
      "wiki": {"en": "Hopeless Romantic", "de": "Hoffnungsloser Romantiker"}
    },
    "100572": {
      "name": "Housing for Refugees",
      "type": "secondary",
      "givers": [764],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find the refugees in Shenzun Tunnels."],
        [0, "See Emperor's Hand for your reward."]
      ],
      "wiki": {"en": "Housing for Refugees", "de": "Unterkünfte für Flüchtlinge"}
    },
    "100573": {
      "name": "I Feel the Earth Move Under Cantha's Feet",
      "type": "primary",
      "givers": [548],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "objectives": [
        [0, "Investigate the collapsed street in Bukdek Byway."],
        [0, "Enter the gaping chasm."],
        [0, "Investigate the Depths beneath Cantha."]
      ],
      "wiki": {"en": "I Feel the Earth Move Under Cantha's Feet", "de": "Erschütterungen unter Cantha"}
    },
    "100574": {
      "name": "If It Weren't for Bad Luck....",
      "type": "secondary",
      "givers": [692],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Find the saltspray dragon Albax and return his scale."],
        [0, "See Infortunatos Maxeles for your reward."]
      ],
      "wiki": {"en": "If It Weren't for Bad Luck....", "de": "Pech gehabt ..."}
    },
    "100575": {
      "name": "Imperial Assistance",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Speak with Imperial Guard Rantoh about medical supplies."],
        [0, "Take the medical supplies to Guardsman Pah."]
      ],
      "wiki": {"en": "Imperial Assistance", "de": "Kaiserliche Unterstützung"}
    },
    "100576": {
      "name": "In the Army (Luxon)",
      "type": "instance",
      "givers": [470],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "objectives": [
        [0, "Find and enlist four recruits into the Luxon army. [4...0] recruits remaining."]
      ],
      "wiki": {"en": "In the Army (Luxon)", "de": "Dienst fürs Vaterland (Luxon)"}
    },
    "100577": {
      "name": "In the Army Now (Kurzick)",
      "type": "instance",
      "givers": [469],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "objectives": [
        [0, "Find and enlist four recruits into the Kurzick army. [4...0] recruits remaining."],
        [0, "Escort the recruits to Recruiter Sigmund."],
        [0, "See Recruiter Sigmund for your reward."]
      ],
      "wiki": {"en": "In the Army Now (Kurzick)", "de": "Dienst fürs Vaterland (Kurzick)"}
    },
    "100578": {
      "name": "Intercepting the Am Fah",
      "type": "secondary",
      "givers": [187],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "next": [100579, 100764],
      "objectives": [
        [0, "Stop the Am Fah Courier."],
        [0, "Recover the Am Fah Case."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "Intercepting the Am Fah", "de": "Abfangen des Am Fah"}
    },
    "100579": {
      "name": "Intercepting the Am Fah (Hard mode)",
      "type": "secondary",
      "givers": [187],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100578],
      "next": [100765],
      "objectives": [
        [0, "Stop the Am Fah Courier"],
        [0, "Recover the Am Fah Case."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "Intercepting the Am Fah (Hard mode)", "de": "Abfangen des Am Fah (Schwerer Modus)"}
    },
    "100580": {
      "name": "Into the Whirlpool",
      "type": "primary",
      "givers": [616],
      "xp": 4000,
      "gold": 150,
      "rewards": ["1,250 Kurzick faction", "1 Skill point"],
      "missions": [204],
      "objectives": [
        [0, "Travel with Mhenlo to the edge of the Unwaking Waters."],
        [0, "Speak with Acolyte Jorg to gain access to the Unwaking Waters."],
        [0, "See Redemptor Iszar for your reward."]
      ],
      "wiki": {"en": "Into the Whirlpool", "de": "In den Strudel"}
    },
    "100581": {
      "name": "Invoking the Saints",
      "type": "secondary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires_missions": [267],
      "objectives": [
        [0, "Invoke Saint Anjeka of House Vasburg."],
        [0, "Invoke Saint Melodie of House Lutgardis."],
        [0, "Invoke Saint Perahta of House Brauer."],
        [0, "Invoke Saint Ehren of House Durheim."],
        [0, "See Count zu Heltzer for your reward."]
      ],
      "wiki": {"en": "Invoking the Saints", "de": "Anrufung der Heiligen"}
    },
    "100582": {
      "name": "It Ends Here",
      "type": "secondary",
      "givers": [608],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100731],
      "objectives": [
        [0, "Destroy the fire golems. You have [5...0] fire golems remaining."],
        [0, "See the Emperor's Hand for your reward."]
      ],
      "wiki": {"en": "It Ends Here", "de": "Hier endet es"}
    },
    "100583": {
      "name": "Jaya Bluffs",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["50 Victory Tokens"],
      "objectives": [
        [0, "Destroy the \"chaos rifts\" in Jaya Bluffs. [0..8] of 8 rifts destroyed."]
      ],
      "wiki": {"en": "Jaya Bluffs (mission)", "de": "Jaya-Klippen (Mission)"}
    },
    "100584": {
      "name": "Journey to Cavalon",
      "type": "primary",
      "givers": [704],
      "xp": 4000,
      "rewards": ["250 Luxon faction", "1 Skill point"],
      "next": [100496],
      "objectives": [
        [0, "Travel to Zos Shivros Channel."],
        [0, "Speak with Watchman Bencis."],
        [0, "See Elder Rhea for your reward."]
      ],
      "wiki": {"en": "Journey to Cavalon", "de": "Reise nach Cavalon"}
    },
    "100585": {
      "name": "Journey to House zu Heltzer",
      "type": "primary",
      "givers": [704],
      "xp": 4000,
      "rewards": ["250 Kurzick faction", "1 Skill point"],
      "requires_missions": [264],
      "next": [100495],
      "objectives": [
        [0, "Travel to House zu Heltzer. reads HzH, but should say AR outpost"],
        [0, "Speak with Guardsman Oldrich at Altrumm Ruins."],
        [0, "See Count zu Heltzer for your reward."]
      ],
      "wiki": {"en": "Journey to House zu Heltzer", "de": "Reise zum Haus zu Heltzer"}
    },
    "100586": {
      "name": "Journey to the Master",
      "type": "primary",
      "givers": [705],
      "xp": 1500,
      "gold": 100,
      "requires": [100745],
      "next": [100737],
      "objectives": [
        [0, "Meet Master Togo in the Linnok Courtyard."]
      ],
      "wiki": {"en": "Journey to the Master", "de": "Reise zum Meister"}
    },
    "100587": {
      "name": "Journey to the Whirlpool",
      "type": "primary",
      "givers": [706],
      "xp": 4000,
      "gold": 150,
      "rewards": ["1,250 Luxon faction", "1 Skill point"],
      "requires_missions": [268],
      "missions": [204],
      "objectives": [
        [0, "Escort Master Togo to the edge of the Unwaking Waters."],
        [0, "Speak with Attis to gain access to the Unwaking Waters."],
        [0, "See Elder Oxis for your reward."]
      ],
      "wiki": {"en": "Journey to the Whirlpool", "de": "Reise zum Strudel"}
    },
    "100588": {
      "name": "Just My Luck",
      "type": "event",
      "givers": [792],
      "event": 1,
      "xp": 5000,
      "gold": 500,
      "rewards": ["25 Lunar Tokens"],
      "objectives": [
        [0, "Find Guwon the Wise at Kaabo Cemetery."],
        [0, "Collect nong berries for Guwon."],
        [0, "Acquire a sparkling kappa shell for Guwon."],
        [0, "Retrieve a vial of Raiyan spring water for Guwon."],
        [0, "Bring the ingredients to Guwon the Wise."],
        [0, "Meet Chong and Guwon on the shores of Kaitan Village."],
        [0, "See Guwon the Wise for your reward."]
      ],
      "wiki": {"en": "Just My Luck", "de": "Zum Glück geküsst"}
    },
    "100589": {
      "name": "Kurzick Supply Lines",
      "type": "instance",
      "givers": [674],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "objectives": [
        [0, "Deliver the Kurzick supplies to Quartermaster Mikhail."]
      ],
      "wiki": {"en": "Kurzick Supply Lines", "de": "Nachschubwege der Kurzick"}
    },
    "100590": {
      "name": "Lambs to the Slaughter",
      "type": "secondary",
      "givers": [608],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "requires": [100739],
      "objectives": [
        [0, "Rendezvous with the Obsidian Flame and prepare for the assault on the Shadow Blades."],
        [0, "Lead the Obsidian Flame to the place where the Shadow Blades are meeting. Destroy the rival organization."],
        [0, "See Guildmaster Luan for your reward."]
      ],
      "wiki": {"en": "Lambs to the Slaughter", "de": "Lämmer zur Schlachtbank"}
    },
    "100591": {
      "name": "Light My Fire",
      "type": "secondary",
      "givers": [251],
      "xp": 2000,
      "gold": 1500,
      "rewards": ["Imperial Commendation"],
      "requires": [100510],
      "next": [100783],
      "objectives": [
        [0, "Meet Imperial Guard Lei Jeng in Xaquang Skyway"],
        [0, "Find and capture the missing Fire Drakes: [5...0] of 5 remaining."],
        [0, "Prevent the Am Fah and the Jade Brotherhood from taking the Drakes."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Light My Fire", "de": "Feuer frei!"}
    },
    "100592": {
      "name": "Light My Fire (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2 Imperial Commendations"],
      "requires": [100511],
      "next": [100784],
      "objectives": [
        [0, "Meet Imperial Guard Lei Jeng in Xaquang Skyway"],
        [0, "Find and capture the missing Fire Drakes: [5...0] of 5 remaining."],
        [0, "Prevent the Am Fah and the Jade Brotherhood from taking the Drakes."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Light My Fire (Hard mode)", "de": "Feuer frei! (Schwerer Modus)"}
    },
    "100593": {
      "name": "Little Creatures",
      "type": "primary",
      "givers": [638],
      "profession": 4,
      "xp": 1000,
      "gold": 50,
      "skills": [84, 135],
      "requires": [100599],
      "next": [100761],
      "objectives": [
        [0, "Travel through the Zhengjo Temple and eliminate the mantids."],
        [0, "Kill the queen mantid."],
        [0, "See Reng Ku for your reward"]
      ],
      "wiki": {"en": "Little Creatures", "de": "Kleine Geschöpfe"}
    },
    "100594": {
      "name": "Little Lost Bear",
      "type": "secondary",
      "givers": [639],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find the tattered bear."],
        [0, "See Kaya for your reward."]
      ],
      "wiki": {"en": "Little Lost Bear", "de": "Kleiner verlorener Bär"}
    },
    "100595": {
      "name": "Lo Sha's Gift",
      "type": "primary",
      "givers": [507],
      "profession": 5,
      "xp": 1500,
      "gold": 100,
      "skills": [69, 80],
      "rewards": ["Monastery Credit"],
      "requires": [100759],
      "next": [100476],
      "objectives": [
        [0, "Travel to the bandit camp."],
        [0, "Retrieve Lo Sha's stolen gift."],
        [0, "See Lo Sha for your reward."]
      ],
      "wiki": {"en": "Lo Sha's Gift", "de": "Lo Shas Geschenk"}
    },
    "100596": {
      "name": "Locate Jinzo",
      "type": "primary",
      "givers": [210],
      "xp": 100,
      "gold": 10,
      "skills": [783, 814, 858, 2091],
      "requires": [100684],
      "next": [100628],
      "objectives": [
        [0, "Search Sunqua Vale for Jinzo."]
      ],
      "wiki": {"en": "Locate Jinzo", "de": "Macht Jinzo ausfindig"}
    },
    "100597": {
      "name": "Locate Mei Ling",
      "type": "primary",
      "givers": [430],
      "xp": 100,
      "gold": 10,
      "skills": [26, 31, 40],
      "requires": [100682],
      "next": [100526],
      "objectives": [
        [0, "Search Sunqua Vale for Mei Ling."]
      ],
      "wiki": {"en": "Locate Mei Ling", "de": "Macht Mei Ling ausfindig"}
    },
    "100598": {
      "name": "Locate Professor Gai",
      "type": "primary",
      "givers": [641],
      "xp": 100,
      "gold": 10,
      "skills": [964, 1237, 1247],
      "requires": [100685],
      "next": [100617],
      "objectives": [
        [0, "Search Sunqua Vale for Professor Gai."]
      ],
      "wiki": {"en": "Locate Professor Gai", "de": "Macht Professor Gai ausfindig"}
    },
    "100599": {
      "name": "Locate Reng Ku",
      "type": "primary",
      "givers": [196],
      "xp": 100,
      "gold": 10,
      "skills": [105, 109, 153],
      "requires": [100683],
      "next": [100593],
      "objectives": [
        [0, "Search Sunqua Vale for Reng Ku."]
      ],
      "wiki": {"en": "Locate Reng Ku", "de": "Macht Reng Ku ausfindig"}
    },
    "100600": {
      "name": "Locate Ronsu",
      "type": "primary",
      "givers": [344],
      "xp": 100,
      "gold": 10,
      "skills": [180, 194, 229],
      "requires": [100664],
      "next": [100678],
      "objectives": [
        [0, "Search Sunqua Vale for Ronsu."]
      ],
      "wiki": {"en": "Locate Ronsu", "de": "Macht Ronsu ausfindig"}
    },
    "100601": {
      "name": "Locate Sister Tai",
      "type": "primary",
      "givers": [282],
      "xp": 100,
      "gold": 10,
      "skills": [281, 288, 296],
      "requires": [100680],
      "next": [100689],
      "objectives": [
        [0, "Search Sunqua Vale for Sister Tai."]
      ],
      "wiki": {"en": "Locate Sister Tai", "de": "Macht Schwester Tai ausfindig"}
    },
    "100602": {
      "name": "Locate Sujun",
      "type": "primary",
      "givers": [377],
      "xp": 100,
      "gold": 10,
      "skills": [394, 411, 446],
      "requires": [100681],
      "next": [100565],
      "objectives": [
        [0, "Search Sunqua Vale for Sujun."]
      ],
      "wiki": {"en": "Locate Sujun", "de": "Macht Sujun ausfindig"}
    },
    "100603": {
      "name": "Locate Talon Silverwing",
      "type": "primary",
      "givers": [398],
      "xp": 100,
      "gold": 10,
      "skills": [1, 322, 382],
      "requires": [100687],
      "next": [100698],
      "objectives": [
        [0, "Search Sunqua Vale for Talon Silverwing."]
      ],
      "wiki": {"en": "Locate Talon Silverwing", "de": "Sucht Talon Silberflügel"}
    },
    "100604": {
      "name": "Looking For Trouble",
      "type": "primary",
      "givers": [215],
      "xp": 2000,
      "gold": 100,
      "requires": [100737],
      "next": [100753],
      "objectives": [
        [0, "Find Zho, Talon Silverwing, Panaku, and Lo Sha in Jaya Bluffs."],
        [0, "Destroy the plague creatures that have overrun the monastery."],
        [0, "See Zho for your reward."]
      ],
      "wiki": {"en": "Looking For Trouble", "de": "Auf der Suche nach Ärger"}
    },
    "100605": {
      "name": "Lost Treasure",
      "type": "attribute",
      "givers": [774],
      "xp": 4000,
      "gold": 175,
      "rewards": ["15 Attribute points"],
      "objectives": [
        [0, "Meet Raitahn Nem inside Minister Cho's Estate."],
        [0, "Find Raitahn Nem's treasure."],
        [0, "Keep Raitahn Nem alive."],
        [0, "See Raitahn Nem for your reward."]
      ],
      "wiki": {"en": "Lost Treasure", "de": "Verschollener Schatz"}
    },
    "100606": {
      "name": "Luxon Supply Lines",
      "type": "instance",
      "givers": [675],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "objectives": [
        [0, "Deliver the Luxon Supplies to Quartermaster Hector"]
      ],
      "wiki": {"en": "Luxon Supply Lines", "de": "Nachschubwege der Luxon"}
    },
    "100607": {
      "name": "Luxury Goods",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Seek out a homeless Canthan in need."],
        [0, "Find another homeless Canthan in need."],
        [0, "Find one last homeless Canthan."],
        [0, "See Officer Chitaro for your reward."]
      ],
      "wiki": {"en": "Luxury Goods", "de": "Luxusartikel"}
    },
    "100608": {
      "name": "Mantid Hatchlings",
      "type": "secondary",
      "givers": [657],
      "xp": 2000,
      "skills": [1, 26, 153, 194, 281, 296, 322, 382, 793, 1247],
      "next": [100663, 100660, 100665, 100659, 100664, 100658, 100661, 100662],
      "objectives": [
        [0, "Meet Instructor Ng at the gate."],
        [0, "Defeat [18..0] more mantid hatchlings."],
        [0, "See Instructor Ng for your reward."]
      ],
      "wiki": {"en": "Mantid Hatchlings", "de": "Mantiden-Junge"}
    },
    "100609": {
      "name": "Masters of Corruption",
      "type": "secondary",
      "givers": [661],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100545],
      "objectives": [
        [0, "Follow Brother Tosai to the Undercity."],
        [0, "Follow Brother Tosai through the Undercity to meet your new master."],
        [0, "Defeat the sickened Am Fah."],
        [0, "See Brother Tosai for your reward."]
      ],
      "wiki": {"en": "Masters of Corruption", "de": "Meister der Verdorbenheit"}
    },
    "100610": {
      "name": "Mayhem in the Market",
      "type": "primary",
      "givers": [253],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [100468],
      "missions": [215],
      "objectives": [
        [0, "Find Kisai in Wajjun Bazaar."],
        [0, "Find Mai."],
        [0, "Locate Aeson in the Market and speak with him."],
        [0, "Find Yuun and speak with him."],
        [0, "Find Lukas and speak with him."],
        [0, "Locate and speak with Jinzo and Master Togo in the sewers."],
        [0, "Find out what Master Togo learned at the palace. Give him your information."],
        [0, "Talk to Guardsman Pei."],
        [0, "See Guardsman Pei for your reward."]
      ],
      "wiki": {"en": "Mayhem in the Market", "de": "Chaos am Markt"}
    },
    "100611": {
      "name": "Medical Emergency",
      "type": "secondary",
      "givers": [659],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find Officer Chitaro and speak to him about medical supplies for the refugees."]
      ],
      "wiki": {"en": "Medical Emergency", "de": "Medizinischer Notfall"}
    },
    "100612": {
      "name": "Melodic Gaki Flute",
      "type": "secondary",
      "givers": [662],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "next": [100542],
      "objectives": [
        [0, "Hunt down and kill the melodic gaki. Retrieve its melodic horn and return to Vasili Lutgardis."],
        [0, "See Vasili Lutgardis for your reward."]
      ],
      "wiki": {"en": "Melodic Gaki Flute", "de": "Melodische Gaki-Flöte"}
    },
    "100613": {
      "name": "Memories of Purity",
      "type": "secondary",
      "givers": [502],
      "objectives": [
        [0, "Relive the events of the Canthan plague."]
      ],
      "wiki": {"en": "Memories of Purity", "de": "Erinnerungen der Reinheit"}
    },
    "100614": {
      "name": "Mesmer Insignia",
      "type": "secondary",
      "givers": [430],
      "profession": 5,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100706],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Defense Against Hexes course."],
        [0, "Complete the Disenchantment course."],
        [0, "Complete the Disruption course."],
        [0, "Complete the Skill Chaining course."],
        [0, "See Headmaster Kaa for your reward."]
      ],
      "wiki": {"en": "Mesmer Insignia", "de": "Mesmer-Befähigung"}
    },
    "100615": {
      "name": "Message on a Dragon Scale",
      "type": "secondary",
      "givers": [672],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "1 Luxon Totem"],
      "objectives": [
        [0, "Find the author of the message."],
        [0, "See Great Reaver Rixor for your reward."]
      ],
      "wiki": {"en": "Message on a Dragon Scale", "de": "Nachricht auf einer Drachenschuppe"}
    },
    "100616": {
      "name": "Messages, Messages Everywhere",
      "type": "secondary",
      "givers": [673],
      "xp": 4000,
      "gold": 275,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "requires": [100615],
      "objectives": [
        [0, "Collect the 3 remaining messages"],
        [0, "You have collected Message: Year 2"],
        [0, "You have collected Message: Year 3"],
        [0, "You have collected Message: Year 4"],
        [0, "See Samti Kohlreg for your reward."]
      ],
      "wiki": {"en": "Messages, Messages Everywhere", "de": "Nachrichten, überall Nachrichten"}
    },
    "100617": {
      "name": "Minions Gone Wild",
      "type": "primary",
      "givers": [556],
      "profession": 8,
      "xp": 1000,
      "gold": 50,
      "skills": [911, 1258],
      "requires": [100598],
      "next": [100756],
      "objectives": [
        [0, "Speak with Professor Gai when you are ready to begin your test."],
        [0, "Destroy the wild minions in the mausoleum. [5...0] minion[s] remaining."],
        [0, "See Professor Gai for your reward."]
      ],
      "wiki": {"en": "Minions Gone Wild", "de": "Wild gewordene Diener"}
    },
    "100618": {
      "name": "Minister's Test",
      "type": "secondary",
      "givers": [302],
      "xp": 2500,
      "requires": [100502],
      "objectives": [
        [0, "Destroy a suitable target and use the Signet of Capture to acquire a skill."],
        [0, "See Minister Jaisan for your reward"]
      ],
      "wiki": {"en": "Minister's Test", "de": "Test des Ministers"}
    },
    "100619": {
      "name": "Ministry of Oppression",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "next": [100638, 100620],
      "objectives": [
        [0, "Arrive at the rally before the Ministry of Purity and warn Xin Ji of their attack."],
        [0, "Escort Xin Ji and the other demonstrators to Xaquang Skyway."],
        [0, "Xin Ji must survive."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Ministry of Oppression", "de": "Ministerium der Unterdrückung"}
    },
    "100620": {
      "name": "Ministry of Oppression (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100619],
      "next": [100639],
      "objectives": [
        [0, "Arrive at the rally before the Ministry of Purity and warn Xin Ji of their attack."],
        [0, "Escort Xin Ji and the other demonstrators to Xaquang Skyway."],
        [0, "Xin Ji must survive."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Ministry of Oppression (Hard mode)", "de": "Ministerium der Unterdrückung (Schwerer Modus)"}
    },
    "100621": {
      "name": "Missing Daughter",
      "type": "secondary",
      "givers": [771],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Escort Aiko to her father."],
        [0, "See Taojo for your reward."]
      ],
      "wiki": {"en": "Missing Daughter", "de": "Vermisste Tochter"}
    },
    "100622": {
      "name": "Monk Insignia",
      "type": "secondary",
      "givers": [282],
      "profession": 3,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100741],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Advanced Defense Techniques course."],
        [0, "Complete the Condition Removal course."],
        [0, "Complete the Defense Against Hexes course."],
        [0, "Complete the Skill Chaining course."],
        [0, "See Headmaster Amara for your reward."]
      ],
      "wiki": {"en": "Monk Insignia", "de": "Mönchs-Befähigung"}
    },
    "100623": {
      "name": "More Cowbell",
      "type": "secondary",
      "givers": [660],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Search the beach near Mount Qinkai for Eurus' blessed cowbell."],
        [0, "Return the blessed cowbell to Eurus."]
      ],
      "wiki": {"en": "More Cowbell", "de": "Mehr Kuhglocke"}
    },
    "100624": {
      "name": "Naga Oil",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 250,
      "next": [100693],
      "objectives": [
        [0, "Obtain a sample plague remedy."],
        [0, "See Emperor's Hand for your reward."]
      ],
      "wiki": {"en": "Naga Oil", "de": "Nagaöl"}
    },
    "100625": {
      "name": "Necromancer Insignia",
      "type": "secondary",
      "givers": [196],
      "profession": 4,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Advanced Defense Techniques course."],
        [0, "Complete the Condition Removal course."],
        [0, "Complete the Disenchantment course."],
        [0, "Complete the Skill Chaining course."],
        [0, "See Headmaster Kuju for your reward."]
      ],
      "wiki": {"en": "Necromancer Insignia", "de": "Nekromanten-Befähigung"}
    },
    "100626": {
      "name": "Night Raiders",
      "type": "secondary",
      "givers": [595],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "requires_missions": [264],
      "objectives": [
        [0, "Speak with Reaver Tammox."],
        [0, "Bring Tahwaj Zing the head of Xiriss Stickleback."]
      ],
      "wiki": {"en": "Night Raiders", "de": "Nacht-Plünderer"}
    },
    "100627": {
      "name": "Old Friends, Dark Times",
      "type": "secondary",
      "givers": [196],
      "gold": 100,
      "requires": [100625],
      "objectives": [
        [0, "Speak with Su."],
        [0, "Speak with Reng Ku."],
        [0, "Travel to Raiyan Cave and kill the bedeviled Naga."],
        [0, "See Headmaster Kuju for your reward."]
      ],
      "rewards": ["Bleached Skull", ": Energy +7 (Requires 4 Soul Reaping)", ": Health +15"],
      "wiki": {"en": "Old Friends, Dark Times", "de": "Alte Freunde, dunkle Zeiten"}
    },
    "100628": {
      "name": "Opening Strike",
      "type": "primary",
      "campaign": 2,
      "region": 11,
      "xp": 1000,
      "gold": 50,
      "skills": [780, 952],
      "requires": [100596],
      "next": [100760],
      "objectives": [
        [0, "Talk to Jinzo again when you are ready to kill the target minions."],
        [0, "Kill 5 target minions. [5..0] target minions remaining."],
        [0, "See Jinzo for your reward."]
      ],
      "wiki": {"en": "Opening Strike", "de": "Eröffnungsschlag"}
    },
    "100629": {
      "name": "Outcasts in the Quarry",
      "type": "secondary",
      "givers": [583],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Speak with Rixor."],
        [0, "Speak with Rion."],
        [0, "Clear the Jade Quarry of all Outcast raiders. You have [5...0] groups remaining."],
        [0, "See Great Reaver Rixor for your reward."]
      ],
      "wiki": {"en": "Outcasts in the Quarry", "de": "Geächtete im Steinbruch"}
    },
    "100630": {
      "name": "Passing the Buck",
      "type": "secondary",
      "givers": [301],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Speak to Minister Khannai."],
        [0, "Talk to Minister Baasong."],
        [0, "Consult Minister Onghsang."],
        [0, "Chat with Guardsman Pah."]
      ],
      "wiki": {"en": "Passing the Buck", "de": "Den Schwarzen Peter weitergeben"}
    },
    "100631": {
      "name": "Pest Control",
      "type": "secondary",
      "givers": [629],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Travel to Shing Jea Monastery and get a kappa trap for Farmer Zinhao."],
        [0, "See Farmer Zinhao for your reward."]
      ],
      "wiki": {"en": "Pest Control", "de": "Kammerjäger"}
    },
    "100632": {
      "name": "Power Surge",
      "type": "secondary",
      "givers": [641],
      "profession": 8,
      "xp": 2500,
      "gold": 100,
      "requires": [100653],
      "objectives": [
        [0, "Talk to Jakimo."],
        [0, "Kill the unbound spirit."],
        [0, "See Headmaster Quin for your reward."]
      ],
      "rewards": ["Ceremonial Cauldron", "Energy +7 (Requires 4 Spawning Power)", "Health +15"],
      "wiki": {"en": "Power Surge", "de": "Kraftwelle"}
    },
    "100633": {
      "name": "Problem Salving",
      "type": "secondary",
      "givers": [275],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Speak to Officer Chitaro."],
        [0, "Speak to Guardsman Pah."],
        [0, "Talk to Budo."],
        [0, "See Paomu for your reward."]
      ],
      "wiki": {"en": "Problem Salving", "de": "Das Salbenproblem"}
    },
    "100634": {
      "name": "Protect the Halcyon",
      "type": "secondary",
      "givers": [321],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "requires": [100721],
      "objectives": [
        [0, "Contact Rion."],
        [0, "Protect the Halcyon from Outcast raiders. You have 7..0 groups remaining."],
        [0, "See Captain Lexis for your reward."]
      ],
      "wiki": {"en": "Protect the Halcyon", "de": "Schützt die Halkyon"}
    },
    "100635": {
      "name": "Quimang's Last Stand",
      "type": "secondary",
      "givers": [386],
      "xp": 4000,
      "gold": 200,
      "rewards": ["Monastery Credit"],
      "requires": [100742],
      "objectives": [
        [0, "Assault the Crimson Skull Guild Hall and defeat Captain Quimang. Find reinforcements along the way"],
        [0, "See The Emperor's Blade for your reward."]
      ],
      "wiki": {"en": "Quimang's Last Stand", "de": "Quimangs Widerstand"}
    },
    "100636": {
      "name": "Raid on Kaineng Center",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": [
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order"
      ],
      "requires": [100497],
      "next": [100637],
      "objectives": [
        [0, "Speak with Guardsman Qao Lin when you are ready for combat."],
        [0, "Position the Imperial Guards in defensive positions. There is only a short time before they reach the gates!"],
        [0, "Do not allow the gangs to breach the gate to the palace."],
        [0, "Defeat the attacking gangs."],
        [0, "Defeat Reisen the Phoenix and Apep, Unending Night"],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Raid on Kaineng Center", "de": "Überfall auf Kaineng"}
    },
    "100637": {
      "name": "Raid on Kaineng Center (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 10000,
      "gold": 5000,
      "rewards": [
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order"
      ],
      "requires": [100498, 100636],
      "objectives": [
        [0, "Speak with Guardsman Qao Lin when you are ready for combat."],
        [0, "Position the Imperial Guards in defensive positions. There is only a short time before they reach the gates!"],
        [0, "Do not allow the gangs to breach the gate to the palace."],
        [0, "Defeat the attacking gangs."],
        [0, "Defeat Reisen the Phoenix and Apep, Unending Night"],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Raid on Kaineng Center (Hard mode)", "de": "Überfall auf Kaineng (Schwerer Modus)"}
    },
    "100638": {
      "name": "Raid on Shing Jea Monastery",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": [
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order"
      ],
      "requires": [100619],
      "next": [100717, 100639],
      "objectives": [
        [0, "Speak with Qao Lin when you are ready for combat."],
        [0, "Position the Imperial Guards in defensive positions and utilize your Improvised Fire Bombs. There is only a short time before they breach the gates!"],
        [0, "Defeat the attacking Tengu."],
        [0, "Interim Headmaster Mhenlo must survive."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Raid on Shing Jea Monastery", "de": "Überfall auf das Kloster von Shing Jea"}
    },
    "100639": {
      "name": "Raid on Shing Jea Monastery (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 10000,
      "gold": 5000,
      "rewards": [
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order",
        "Imperial Guard Requisition Order"
      ],
      "requires": [100620, 100638],
      "next": [100718],
      "objectives": [
        [0, "Speak with Qao Lin when you are ready for combat."],
        [0, "Position the Imperial Guards in defensive positions and utilize your Improvised Fire Bombs. There is only a short time before they breach the gates!"],
        [0, "Defeat the attacking Tengu."],
        [0, "Interim Headmaster Mhenlo must survive."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {
        "en": "Raid on Shing Jea Monastery (Hard mode)",
        "de": "Überfall auf das Kloster von Shing Jea (Schwerer Modus)"
      }
    },
    "100640": {
      "name": "Ranger Insignia",
      "type": "secondary",
      "givers": [377],
      "profession": 2,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100733],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Advanced Defense Techniques course."],
        [0, "Complete the Disruption course."],
        [0, "Complete the Skill Chaining course."],
        [0, "Complete the Snaring course."],
        [0, "See Headmaster Greico for your reward."]
      ],
      "wiki": {"en": "Ranger Insignia", "de": "Waldläufer-Befähigung"}
    },
    "100641": {
      "name": "Raze the Roost",
      "type": "secondary",
      "campaign": 2,
      "region": 8,
      "objectives": [
        [0, "Find Junior Minister Jejiang. Convince him to call off the destruction of \"The Roost.\""],
        [0, "Collect 2 platinum to bribe Junior Minister Jejiang."],
        [0, "See Quill Songfeather for your reward."]
      ],
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "Raze the Roost", "de": "Den Schlafplatz schleifen"}
    },
    "100642": {
      "name": "Reaping the Naga",
      "type": "primary",
      "givers": [420],
      "profession": 4,
      "xp": 1500,
      "gold": 100,
      "skills": [96, 131],
      "rewards": ["Monastery Credit"],
      "requires": [100761],
      "next": [100476],
      "objectives": [
        [0, "Speak with Su again when you are ready to eliminate the Naga."],
        [0, "Escort Su through the cave and destroy any Naga you find."],
        [0, "See Su for your reward."]
      ],
      "wiki": {"en": "Reaping the Naga", "de": "Die Naga ernten"}
    },
    "100643": {
      "name": "Red Tape",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100611],
      "objectives": [
        [0, "Speak to Guardsman Pah about filling out the ministry's scrollwork."]
      ],
      "wiki": {"en": "Red Tape", "de": "Der Amtsschimmel wiehert"}
    },
    "100644": {
      "name": "Redemption for the Lost",
      "type": "secondary",
      "givers": [251],
      "xp": 2000,
      "gold": 1500,
      "rewards": ["Imperial Commendation"],
      "requires": [100473],
      "next": [100645],
      "objectives": [
        [0, "Meet Zenmai in Sunjiang District."],
        [0, "Talk to Watari the Infinite."],
        [0, "Talk to Yayoi of the Orders."],
        [0, "Talk to Chow Zhong the Inferno."],
        [0, "Talk to Gao Han of the Rings."],
        [0, "Talk to Disciple of Shadow Feung Zhu."],
        [0, "Talk to Min the Dragon's Claw."],
        [0, "Defeat the Ministry of Purity forces."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Redemption for the Lost", "de": "Die Erlösung der Verlorenen"}
    },
    "100645": {
      "name": "Redemption for the Lost (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100644, 100474],
      "objectives": [
        [0, "Meet Zenmai in Sunjiang District."],
        [0, "Talk to Watari the Infinite."],
        [0, "Talk to Yayoi of the Orders."],
        [0, "Talk to Chow Zhong the Inferno."],
        [0, "Talk to Gao Han of the Rings."],
        [0, "Talk to Disciple of Shadow Feung Zhu."],
        [0, "Talk to Min the Dragon's Claw."],
        [0, "Defeat the Ministry of Purity forces."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Redemption for the Lost (Hard mode)", "de": "Die Erlösung der Verlorenen (Schwerer Modus)"}
    },
    "100646": {
      "name": "Refuse to Drink",
      "type": "secondary",
      "givers": [661],
      "xp": 3500,
      "gold": 275,
      "requires": [100666],
      "next": [100470],
      "objectives": [
        [0, "Bring the Chalice of Corruption to the Imperial Agent Hanjo."]
      ],
      "wiki": {"en": "Refuse to Drink", "de": "Weigerung zu trinken"}
    },
    "100647": {
      "name": "Rescue at Minister Cho's Estate",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 1000,
      "rewards": ["Ministerial Commendation"],
      "requires": [100516],
      "next": [100648, 100512],
      "objectives": [
        [0, "Search for survivors at Minister Cho's Estate."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "Rescue at Minister Cho's Estate", "de": "Rettung auf dem Anwesen von Minister Cho"}
    },
    "100648": {
      "name": "Rescue at Minister Cho's Estate (Hard mode)",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100516, 100647],
      "next": [100513],
      "objectives": [
        [0, "Search for survivors at Minister Cho's Estate."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {
        "en": "Rescue at Minister Cho's Estate (Hard mode)",
        "de": "Rettung auf dem Anwesen von Minister Cho (Schwerer Modus)"
      }
    },
    "100649": {
      "name": "Return of the Yeti",
      "type": "secondary",
      "givers": [428],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Find and defeat Arrahhsh Mountainclub and retrieve the Golden Lantern."],
        [0, "See Magistrate Kin for your reward."]
      ],
      "wiki": {"en": "Return of the Yeti", "de": "Die Rückkehr des Yeti"}
    },
    "100650": {
      "name": "Revenge of the Yeti",
      "type": "secondary",
      "givers": [424],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Follow Wulk Cragfist to the Sensali Tengu camp and avenge his fallen companions."],
        [0, "See Wulk Cragfist for your reward."]
      ],
      "wiki": {"en": "Revenge of the Yeti", "de": "Die Rache des Yeti"}
    },
    "100651": {
      "name": "Revolt of the Dredge",
      "type": "secondary",
      "givers": [222],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires": [100699],
      "objectives": [
        [0, "Kill Maximole and his followers to quell the revolt."],
        [0, "See Moleneaux for your reward."]
      ],
      "wiki": {"en": "Revolt of the Dredge", "de": "Aufstand der Schaufler"}
    },
    "100652": {
      "name": "Rhythm Drinker Drum",
      "type": "secondary",
      "givers": [662],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires": [100542],
      "objectives": [
        [0, "Hunt down and kill the rhythm drinker. Retrieve its rhythm wing, and return to Vasili Lutgardis."],
        [0, "See Vasili Lutgardis for your reward."]
      ],
      "wiki": {"en": "Rhythm Drinker Drum", "de": "Rhythmustrinker-Trommel"}
    },
    "100653": {
      "name": "Ritualist Insignia",
      "type": "secondary",
      "givers": [641],
      "profession": 8,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Advanced Defense Techniques course."],
        [0, "Complete the Condition Removal course."],
        [0, "Complete the Disruption course."],
        [0, "Complete the Skill Chaining course."],
        [0, "See Headmaster Quin for your reward."]
      ],
      "wiki": {"en": "Ritualist Insignia", "de": "Ritualisten-Befähigung"}
    },
    "100654": {
      "name": "Scout the Coast",
      "type": "instance",
      "givers": [643],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "objectives": [
        [0, "Go to the first checkpoint and search for Kurzicks in the vicinity. Kill any Kurzick invaders you find."],
        [0, "Go to the second checkpoint and search for Kurzicks in the vicinity. Kill any Kurzick invaders you find."],
        [0, "Go to the third checkpoint and search for Kurzicks in the vicinity. Kill any Kurzick invaders you find."],
        [0, "Go to the fourth checkpoint and search for Kurzicks in the vicinity. Kill any Kurzick invaders you find."],
        [0, "See Scoutmaster Aerios for your reward."]
      ],
      "wiki": {"en": "Scout the Coast", "de": "Kundschaftet die Küste aus"}
    },
    "100655": {
      "name": "Scouting Ferndale",
      "type": "instance",
      "givers": [553],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "objectives": [
        [0, "Search Ferndale for Luxon scout groups and destroy them. [4...0] Luxon scout group[s] remaining."],
        [0, "See Forestmaster Vasha for your reward."]
      ],
      "wiki": {"en": "Scouting Ferndale", "de": "Farntal auskundschaften"}
    },
    "100656": {
      "name": "Scouting Maishang Hills",
      "type": "instance",
      "givers": [418],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "objectives": [
        [0, "Search Maishang Hills for Kurzick scout groups and destroy them. 4...0 Kurzick scout groups remaining."],
        [0, "See Scoutmaster Theron for your reward."]
      ],
      "wiki": {"en": "Scouting Maishang Hills", "de": "Die Maishang-Hügel erforschen"}
    },
    "100657": {
      "name": "Securing Echovald Forest",
      "type": "instance",
      "givers": [296],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "objectives": [
        [0, "Go to the first checkpoint and make certain that it is secure. Kill any Luxon invaders you find."],
        [0, "Go to the second checkpoint and make certain that it is secure. Kill any Luxon invaders you find."],
        [0, "Go to the third checkpoint and make certain that it is secure. Kill any Luxon invaders you find."],
        [0, "Go to the fourth checkpoint and make certain that it is secure. Kill any Luxon invaders you find."],
        [0, "See Scoutmaster Arne for your reward."]
      ],
      "wiki": {"en": "Securing Echovald Forest", "de": "Den Echowald sichern"}
    },
    "100658": {
      "name": "Seek Out Headmaster Amara",
      "type": "primary",
      "campaign": 2,
      "region": 11,
      "profession": 3,
      "xp": 250,
      "gold": 20,
      "next": [100601],
      "objectives": [
        [0, "Talk to Ludo to gain entrance to the monastery."],
        [0, "Seek out Headmaster Amara in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Amara", "de": "Sucht Großmeisterin Amara auf"}
    },
    "100659": {
      "name": "Seek Out Headmaster Greico",
      "type": "primary",
      "givers": [739],
      "profession": 2,
      "xp": 250,
      "gold": 20,
      "next": [100602],
      "objectives": [
        [0, "Talk to Ludo to gain entrance to the monastery."],
        [0, "Seek out Headmaster Greico in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Greico", "de": "Sucht Großmeister Greico auf"}
    },
    "100660": {
      "name": "Seek Out Headmaster Kaa",
      "type": "primary",
      "givers": [739],
      "profession": 5,
      "xp": 250,
      "gold": 20,
      "next": [100597],
      "objectives": [
        [0, "Talk to Ludo to gain entrance to the monastery."],
        [0, "Seek out Headmaster Kaa in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Kaa", "de": "Sucht Großmeister Kaa auf"}
    },
    "100661": {
      "name": "Seek Out Headmaster Kuju",
      "type": "secondary",
      "givers": [739],
      "profession": 4,
      "xp": 250,
      "gold": 20,
      "next": [100599],
      "objectives": [
        [0, "Talk to Ludo to gain entrance to the monastery."],
        [0, "Seek out Headmaster Kuju in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Kuju", "de": "Sucht Großmeisterin Kuju auf"}
    },
    "100662": {
      "name": "Seek Out Headmaster Lee",
      "type": "secondary",
      "givers": [739],
      "profession": 7,
      "xp": 250,
      "gold": 20,
      "next": [100596],
      "objectives": [
        [0, "Talk to Ludo to gain entrance into the monastery."],
        [0, "Seek out Headmaster Lee in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Lee", "de": "Sucht Großmeisterin Lee auf"}
    },
    "100663": {
      "name": "Seek Out Headmaster Quin",
      "type": "primary",
      "givers": [739],
      "profession": 8,
      "xp": 250,
      "gold": 20,
      "next": [100598],
      "objectives": [
        [0, "Talk to Ludo to gain entrance to the monastery."],
        [0, "Seek out Headmaster Quin in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Quin", "de": "Sucht Großmeisterin Quin auf"}
    },
    "100664": {
      "name": "Seek Out Headmaster Vhang",
      "type": "primary",
      "givers": [739],
      "profession": 6,
      "xp": 250,
      "gold": 20,
      "next": [100600],
      "objectives": [
        [0, "Talk to Ludo to gain entrance to the monastery."],
        [0, "Seek out Headmaster Vhang in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Vhang", "de": "Sucht Großmeister Vhang auf"}
    },
    "100665": {
      "name": "Seek Out Headmaster Zhan",
      "type": "primary",
      "givers": [739],
      "profession": 1,
      "xp": 250,
      "gold": 20,
      "next": [100603],
      "objectives": [
        [0, "Talk to Ludo to gain entrance to the monastery."],
        [0, "Seek out Headmaster Zhan in the monastery."]
      ],
      "wiki": {"en": "Seek Out Headmaster Zhan", "de": "Sucht Großmeister Zhan auf"}
    },
    "100666": {
      "name": "Seek out Brother Tosai",
      "type": "secondary",
      "givers": [740, 741],
      "xp": 3000,
      "gold": 175,
      "requires": [100738],
      "next": [100545],
      "objectives": [
        [0, "Speak with Brother Tosai"]
      ],
      "wiki": {"en": "Seek out Brother Tosai", "de": "Sucht nach Bruder Tosai"}
    },
    "100667": {
      "name": "Seeking Shelter",
      "type": "secondary",
      "givers": [435],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Speak to Guardsman Pongtu in Xaquang Skyway."],
        [0, "Locate Imperial Guardsman Tingjo in the Shenzun Tunnels. Obtain a shelter pass from him."],
        [0, "See Yikaro for your reward."]
      ],
      "wiki": {"en": "Seeking Shelter", "de": "Die Suche nach Obdach"}
    },
    "100668": {
      "name": "Seeking a Cure",
      "type": "primary",
      "givers": [214],
      "profession": 3,
      "xp": 1500,
      "gold": 100,
      "skills": [248],
      "rewards": ["Monastery Credit"],
      "requires": [100757],
      "next": [100476],
      "objectives": [
        [0, "Find the 2 ingredients needed to make an antidote for the coming sickness, nong berries and tai ling buds. You have found [0..2] of 2 ingredients."],
        [0, "Return to Brother Pe Wan for your reward."]
      ],
      "wiki": {"en": "Seeking a Cure", "de": "Auf der Suche nach einem Heilmittel"}
    },
    "100669": {
      "name": "Seitung Harbor (Mission)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["75 Victory Tokens"],
      "objectives": [
        [0, "Wipe out the \"enemy forces\" occupying Seitung Harbor. [0...40] of 40 enemies killed."]
      ],
      "wiki": {"en": "Seitung Harbor (mission)", "de": "Hafen von Seitung (Mission)"}
    },
    "100670": {
      "name": "Seitung Harbor (mission 2)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
      "objectives": [
        [0, "Wipe out the \"enemy forces\" occupying Seitung Harbor. [0...40] of 40 enemies killed."]
      ],
      "wiki": {"en": "Seitung Harbor (mission)", "de": "Hafen von Seitung (Mission 2)"}
    },
    "100671": {
      "name": "Sentimental Treasures",
      "type": "secondary",
      "givers": [613],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "next": [100675],
      "objectives": [
        [0, "Find Miller Quang's chest on Yuroso Island."],
        [0, "Return the chest to Miller Quang."],
        [0, "See Miller Quang for your reward."]
      ],
      "wiki": {"en": "Sentimental Treasures", "de": "Schätze mit nostalgischem Wert"}
    },
    "100672": {
      "name": "Shackled Spirits",
      "type": "primary",
      "givers": [512],
      "profession": 8,
      "xp": 1500,
      "gold": 100,
      "skills": [772, 910],
      "rewards": ["Monastery Credit"],
      "requires": [100756],
      "next": [100476],
      "objectives": [
        [0, "Speak with Ang again to begin eliminating the shackled spirits."],
        [0, "Defeat the 5 shackled spirits. You have [5...0] shackled spirit[s] remaining."],
        [0, "See Ang the Ephemeral for your reward."]
      ],
      "wiki": {"en": "Shackled Spirits", "de": "Gefesselte Geister"}
    },
    "100673": {
      "name": "Shing Jea Monastery",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
      "objectives": [
        [0, "Simultaneously close the opened \"rifts\" in Shing Jea Monastery. [0...4] of 4 Rifts closed"]
      ],
      "wiki": {"en": "Shing Jea Monastery (mission)", "de": "Kloster von Shing Jea (Mission)"}
    },
    "100674": {
      "name": "Skill Chaining",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [14, 76, 85, 104, 171, 200, 271, 311, 371, 396, 433, 1018, 1028, 1133, 1218, 1225],
      "objectives": [
        [0, "Talk to Sujun."],
        [0, "Speak with Sujun again to begin the test."],
        [0, "Defeat Panaku and Sujun"],
        [0, "See Instructor Ng for your reward."]
      ],
      "wiki": {"en": "Skill Chaining", "de": "Fertigkeitsfolgen"}
    },
    "100675": {
      "name": "Skin the Snake",
      "type": "secondary",
      "givers": [613],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "requires": [100671],
      "objectives": [
        [0, "Go to the north shore and kill the Naga boss Xsshsss Zsss"],
        [0, "See Miller Quang for your reward."]
      ],
      "wiki": {"en": "Skin the Snake", "de": "Häutet die Schlange"}
    },
    "100676": {
      "name": "Snaring Course",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [234, 349, 392, 985],
      "objectives": [
        [0, "Speak with Kai Ying"],
        [0, "Speak with Kai Ying again to begin your test."],
        [0, "Use snaring and kiting to force Zho into submission."],
        [0, "Speak with Kai Ying again."],
        [0, "See Instructor Ng for your reward"]
      ],
      "wiki": {"en": "Snaring Course", "de": "Fallenstellkurs"}
    },
    "100677": {
      "name": "Song and Stone",
      "type": "secondary",
      "givers": [204],
      "xp": 5000,
      "gold": 350,
      "rewards": ["1,000 Kurzick faction", "Equipment Requisition"],
      "objectives": [
        [0, "Patrol the area and protect the Stone Singers from the raiding Luxon forces. 5 Stone Singers must survive. You have [8...0] out of 8 remaining."],
        [0, "See Count zu Heltzer for your reward."]
      ],
      "wiki": {"en": "Song and Stone", "de": "Gesang und Gestein"}
    },
    "100678": {
      "name": "Spark of Interest",
      "type": "primary",
      "givers": [483],
      "profession": 6,
      "xp": 1000,
      "gold": 50,
      "skills": [165, 211],
      "requires": [100600],
      "next": [100758],
      "objectives": [
        [0, "Go to the beach and find a Stone of the Elements."],
        [0, "Defeat Huan to claim ownership of the Stone of the Elements."],
        [0, "See Ronsu for your reward."]
      ],
      "wiki": {"en": "Spark of Interest", "de": "Ein Funken Interesse"}
    },
    "100679": {
      "name": "Sparring Elements",
      "type": "primary",
      "givers": [474],
      "profession": 6,
      "xp": 1500,
      "gold": 100,
      "skills": [172, 197],
      "requires": [100758],
      "next": [100476],
      "objectives": [
        [0, "Enter the dueling grounds."],
        [0, "Defeat the other students."],
        [0, "See Kai Ying for your reward."]
      ],
      "rewards": ["Monastery Credit"],
      "wiki": {"en": "Sparring Elements", "de": "Duell mit den Elementen"}
    },
    "100680": {
      "name": "Speak with Headmaster Amara (Monk)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100601],
      "objectives": [
        [0, "Speak with Headmaster Amara in the monastery."]
      ],
      "wiki": {"en": "Speak with Headmaster Amara (Monk)", "de": "Sprecht mit Großmeisterin Amara (Mönchin)"}
    },
    "100681": {
      "name": "Speak with Headmaster Greico (Ranger)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100602],
      "objectives": [
        [0, "Speak with Headmaster Greico in the Shing Jea Monastery."]
      ],
      "wiki": {"en": "Speak with Headmaster Greico (Ranger)", "de": "Sprecht mit Großmeister Greico (Waldläufer)"}
    },
    "100682": {
      "name": "Speak with Headmaster Kaa (Mesmer)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100597],
      "objectives": [
        [0, "Speak With Headmaster Kaa in the Shing Jea Monastery."]
      ],
      "wiki": {"en": "Speak with Headmaster Kaa (Mesmer)", "de": "Sprecht mit Großmeister Kaa (Mesmer)"}
    },
    "100683": {
      "name": "Speak with Headmaster Kuju (Necromancer)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100599],
      "objectives": [
        [0, "Speak with Headmaster Kuju in the monastery."]
      ],
      "wiki": {"en": "Speak with Headmaster Kuju (Necromancer)", "de": "Sprecht mit Großmeisterin Kuju (Nekromantin)"}
    },
    "100684": {
      "name": "Speak with Headmaster Lee (Assassin)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100596],
      "objectives": [
        [0, "Speak with Headmaster Lee in the Shing Jea Monastery."]
      ],
      "wiki": {"en": "Speak with Headmaster Lee (Assassin)", "de": "Sprecht mit Großmeisterin Lee (Assassinin)"}
    },
    "100685": {
      "name": "Speak with Headmaster Quin (Ritualist)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100598],
      "objectives": [
        [0, "Speak with Headmaster Quin in the Shing Jea Monastery"]
      ],
      "wiki": {"en": "Speak with Headmaster Quin (Ritualist)", "de": "Sprecht mit Großmeisterin Quin (Ritualistin)"}
    },
    "100686": {
      "name": "Speak with Headmaster Vhang (Elementalist)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100600],
      "objectives": [
        [0, "Speak with Headmaster Vhang in the Shing Jea Monastery."]
      ],
      "wiki": {
        "en": "Speak with Headmaster Vhang (Elementalist)",
        "de": "Sprecht mit Großmeister Vhang (Elementarmagier)"
      }
    },
    "100687": {
      "name": "Speak with Headmaster Zhan (Warrior)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100603],
      "objectives": [
        [0, "Speak with Headmaster Zhan in the monastery"]
      ],
      "wiki": {"en": "Speak with Headmaster Zhan (Warrior)", "de": "Sprecht mit Großmeister Zhan (Krieger)"}
    },
    "100688": {
      "name": "Spirit of the Celebration",
      "type": "secondary",
      "campaign": 2,
      "region": 11,
      "rewards": ["Imperial Mask Token"],
      "objectives": [
        [0, "Acquire 250 Victory Tokens by participating in Dragon Festival events."],
        [0, "See Noblewoman Sun Li for your reward."]
      ],
      "wiki": {"en": "Spirit of the Celebration", "de": "Geist des Festes"}
    },
    "100689": {
      "name": "Stale Mate",
      "type": "primary",
      "givers": [714],
      "profession": 3,
      "xp": 1000,
      "gold": 50,
      "skills": [307, 313],
      "requires": [100601],
      "next": [100757],
      "objectives": [
        [0, "Speak to Sister Tai when you are ready to begin your challenge."],
        [0, "Select a Monk Student to relieve."],
        [0, "Keep your assigned Warrior Student alive while they train."],
        [0, "See Sister Tai for your reward after the training time is up."]
      ],
      "wiki": {"en": "Stale Mate", "de": "Schachmatt"}
    },
    "100690": {
      "name": "Stemming the Tide",
      "type": "secondary",
      "givers": [397],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Convince 5 Canthan Refugees to return to Kaineng City. You have convinced [0...5] of 5 refugees."],
        [0, "See Attendant Yoko for your reward."]
      ],
      "wiki": {"en": "Stemming the Tide", "de": "Die Flut eindämmen"}
    },
    "100691": {
      "name": "Stolen Eggs",
      "type": "primary",
      "givers": [324],
      "xp": 4000,
      "gold": 150,
      "rewards": ["1,250 Luxon faction", "1 Skill point"],
      "requires": [100496],
      "next_missions": [268],
      "missions": [268],
      "objectives": [
        [0, "Recover the stolen chest of turtle eggs."],
        [0, "Return the chest of turtle eggs to Hatchery Keeper Gratian."],
        [0, "See Endre for your reward."]
      ],
      "wiki": {"en": "Stolen Eggs", "de": "Gestohlene Eier"}
    },
    "100692": {
      "name": "Straight to the Top",
      "type": "secondary",
      "givers": [471],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100492],
      "objectives": [
        [0, "Find Quufu and kill him."],
        [0, "See Guardsman Tang for your reward"]
      ],
      "wiki": {"en": "Straight to the Top", "de": "Direkt an die Spitze"}
    },
    "100693": {
      "name": "Street Justice",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100624],
      "objectives": [
        [0, "Bring justice to all the unscrupulous peddlers."],
        [0, "You have eliminated [0...5] of the 5 peddlers."],
        [0, "See Emperor's Hand for your reward."]
      ],
      "wiki": {"en": "Street Justice", "de": "Straßenjustiz"}
    },
    "100694": {
      "name": "Study Buddy",
      "type": "secondary",
      "givers": [691],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "requires": [100466],
      "objectives": [
        [0, "Meet Yijo Tahn outside of Shing Jea Monastery."],
        [0, "Escort Yijo Tahn to Tsumei Village."],
        [0, "Talk to Sister Choi Ju in Tsumei Village."],
        [0, "See Yazoying for your reward."]
      ],
      "wiki": {"en": "Study Buddy", "de": "Paukergemeinschaft"}
    },
    "100695": {
      "name": "Sunspears in Cantha",
      "type": "secondary",
      "givers": [728],
      "travel": 3,
      "xp": 1000,
      "next": [100831],
      "objectives": [
        [0, "Speak with Kormir at Bejunkan Pier."],
        [0, "Defend Kaineng Center from the evil that threatens to destroy it."],
        [0, "Speak with Kormir at Bejunkan Pier to arrange to travel to Elona."],
        [0, "See Seamarshal Bendro for your reward."]
      ],
      "rewards": ["Travel to Kamadan, Jewel of Istan unlocked."],
      "wiki": {"en": "Sunspears in Cantha", "de": "Sonnenspeere in Cantha"}
    },
    "100696": {
      "name": "Take My Sister, Please",
      "type": "event",
      "givers": [286],
      "event": 1,
      "rewards": ["1 Celestial Miniature Token"],
      "objectives": [
        [0, "Acquire 100 Lunar Tokens by participating in Canthan New Year activities."],
        [0, "See Ikura for your reward."]
      ],
      "wiki": {"en": "Take My Sister, Please", "de": "Das lustige Schwesterlein"}
    },
    "100697": {
      "name": "Taking Back the Palace",
      "type": "primary",
      "givers": [784],
      "xp": 4000,
      "gold": 275,
      "rewards": ["1 Skill point"],
      "requires_missions": [204],
      "next_missions": [270],
      "missions": [270],
      "objectives": [
        [0, "Travel to Kaineng Center."],
        [0, "Talk to Palace Guard Tsungkim in Raisu Pavilion to gain access to Raisu Palace."],
        [0, "See Captain Sei for your reward."]
      ],
      "wiki": {"en": "Taking Back the Palace", "de": "Wiedereinnahme des Palastes"}
    },
    "100698": {
      "name": "Talon's Duel",
      "type": "primary",
      "givers": [733],
      "profession": 1,
      "skills": [330, 348],
      "requires": [100603],
      "next": [100762],
      "objectives": [
        [0, "Speak with Talon again when you are ready to begin the duel."],
        [0, "Defeat Talon Silverwing in combat."],
        [0, "See Talon Silverwing for your reward."]
      ],
      "wiki": {"en": "Talon's Duel", "de": "Talons Duell"}
    },
    "100699": {
      "name": "Temple of the Dredge",
      "type": "secondary",
      "givers": [222],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires": [100551],
      "next": [100651],
      "objectives": [
        [0, "Eliminate the wardens that threaten the Temple of the Dredge."],
        [0, "See Moleneaux for your reward."]
      ],
      "wiki": {"en": "Temple of the Dredge", "de": "Tempel der Schaufler"}
    },
    "100700": {
      "name": "The Afflicted Guard",
      "type": "secondary",
      "givers": [363],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find the afflicted creature that was once Imperial Guardsman Chun and destroy it."],
        [0, "See Imperial Guardsman Kintae for your reward."]
      ],
      "wiki": {"en": "The Afflicted Guard", "de": "Der befallene Wächter"}
    },
    "100701": {
      "name": "The Agriculturist",
      "type": "secondary",
      "givers": [327],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Escort Tahbo Paa to Aerie."],
        [0, "See Tahbo Paa for your reward."]
      ],
      "wiki": {"en": "The Agriculturist", "de": "Der Landwirtschaftsexperte"}
    },
    "100702": {
      "name": "The Ancient Forest",
      "type": "secondary",
      "givers": [362],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "next": [100716],
      "objectives": [
        [0, "Kill 3 different forest creatures and return to Scholar Andrej."],
        [0, "Kill a stone scale kirin."],
        [0, "Kill a dragon moss."],
        [0, "Kill a warden."],
        [0, "See Scholar Andrej for your reward."]
      ],
      "wiki": {"en": "The Ancient Forest", "de": "Der alte Wald"}
    },
    "100703": {
      "name": "The Beak of Darkness",
      "type": "secondary",
      "givers": [221],
      "xp": 3500,
      "gold": 275,
      "rewards": ["750 Kurzick faction"],
      "objectives": [
        [0, "Find Johann zu Heltzer in Ferndale and speak with him about the elusive Black Moa."],
        [0, "Find Erik Lutgardis in Melandru's Hope and talk to him about the mysterious Black Moa."],
        [0, "Find Konrad Vasburg in Ferndale and chat with him about the cunning Black Moa."],
        [0, "Find Ruprecht Brauer in Drazach Thicket and learn the whereabouts of the devious Black Moa."],
        [0, "Travel to Ferndale and slay the despicable Black Moa."],
        [0, "See Rutger zu Heltzer for your reward."]
      ],
      "wiki": {"en": "The Beak of Darkness", "de": "Der Schnabel der Dunkelheit"}
    },
    "100704": {
      "name": "The Big Bang",
      "type": "event",
      "givers": [367],
      "event": 1,
      "xp": 5000,
      "gold": 500,
      "rewards": ["25 Lunar Tokens", "2 Bottle Rockets", "2 Champagne Poppers", "2 Sparklers"],
      "requires": [100560],
      "objectives": [
        [0, "Obtain fireworks from Nubah Lao so you can defend Kaitan Village in Panjiang Peninsula!"],
        [0, "Stock up on fireworks to ensure you have enough to defend Kaitan Village. You have [0...5] of 5 fireworks."],
        [0, "Destroy the nian before they can doom Kaitan Village to a year of bad luck! Set off a firework near a group of nian to scare them away."],
        [0, "See Coordinator Tahyaa for your reward."]
      ],
      "wiki": {"en": "The Big Bang", "de": "Der große Knall"}
    },
    "100705": {
      "name": "The Bog Beast of Bokku",
      "type": "secondary",
      "givers": [277],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Find and defeat the legendary Bog Beast of Bokku."],
        [0, "See Baasong for your reward."]
      ],
      "wiki": {"en": "The Bog Beast of Bokku", "de": "Das Sumpfmonster von Bokku"}
    },
    "100706": {
      "name": "The Box of Illusions",
      "type": "secondary",
      "givers": [430],
      "xp": 2500,
      "gold": 100,
      "objectives": [
        [0, "Meet Lo Sha in Panjiang Peninsula."],
        [0, "Find out where the Crimson Skull are keeping Mei Ling."],
        [0, "Protect Lo Sha and help him rescue Mei Ling."],
        [0, "Talk to Lo Sha."],
        [0, "Return to Headmaster Kaa for your reward."]
      ],
      "rewards": ["Gilded Artifact"],
      "wiki": {"en": "The Box of Illusions", "de": "Die Schatulle der Illusionen"}
    },
    "100707": {
      "name": "The Captured Son",
      "type": "secondary",
      "givers": [366],
      "xp": 4000,
      "gold": 500,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Defeat the Crimson Skull and free Jatoro Musagi."],
        [0, "Talk to Jatoro Musagi."],
        [0, "Return the letter for Jatoro's Mother to Lady Mukei Musagi."]
      ],
      "wiki": {"en": "The Captured Son", "de": "Der gefangene Sohn"}
    },
    "100708": {
      "name": "The Challenge",
      "type": "secondary",
      "givers": [403],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find Bakghu and his gang in the Undercity."],
        [0, "Defeat Bakghu's gang."],
        [0, "Defeat Chong Poi's gang."],
        [0, "Defeat Soar Windfeather's gang."],
        [0, "Defeat Tae Xang's gang."],
        [0, "See Senjo Wah for your reward."]
      ],
      "wiki": {"en": "The Challenge", "de": "Die Herausforderung"}
    },
    "100709": {
      "name": "The Convocation",
      "type": "primary",
      "givers": [447],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires_missions": [262],
      "next_missions": [263],
      "missions": [263],
      "objectives": [
        [0, "Meet with Master Togo."],
        [0, "Seek admission into Boreas Seabed."],
        [0, "See Elder Rhea for your reward."]
      ],
      "wiki": {"en": "The Convocation", "de": "Die Versammlung"}
    },
    "100710": {
      "name": "The Count's Daughter",
      "type": "primary",
      "givers": [443],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [100469],
      "missions": [262],
      "objectives": [
        [0, "Speak with Danika zu Heltzer"],
        [0, "Meet Danika zu Heltzer outside the gates of Maatu Keep."],
        [0, "Speak with Redemptor Karl."],
        [0, "Speak with Lift Operator Shulz."],
        [0, "See Acolyte Hanz for your reward."]
      ],
      "wiki": {"en": "The Count's Daughter", "de": "Die Tochter des Grafen"}
    },
    "100711": {
      "name": "The Crop Thieves",
      "type": "primary",
      "givers": [393],
      "profession": 1,
      "xp": 1500,
      "gold": 100,
      "skills": [346, 351],
      "rewards": ["Monastery Credit"],
      "requires": [100762],
      "next": [100476],
      "objectives": [
        [0, "Prevent the thieves from stealing crops from the field."],
        [0, "See Weng Gha for your reward."]
      ],
      "wiki": {"en": "The Crop Thieves", "de": "Die Erntediebe"}
    },
    "100712": {
      "name": "The Defenders of the Forest",
      "type": "primary",
      "givers": [204],
      "xp": 4000,
      "gold": 150,
      "rewards": ["1,250 Kurzick faction", "1 Skill point"],
      "requires": [100495],
      "next_missions": [267],
      "missions": [267],
      "objectives": [
        [0, "Speak to Klaus in Drazach Thicket."],
        [0, "Speak to Leiber in Drazach Thicket."],
        [0, "Speak to Ex-Redemptor Berta in Drazach Thicket."],
        [0, "Keep all 3 volunteers alive."],
        [0, "Escort Klaus, Leiber, and Ex-Redemptor Berta to the Eternal Grove."],
        [0, "See Baron Mirek Vasburg for your reward."]
      ],
      "wiki": {"en": "The Defenders of the Forest", "de": "Die Verteidiger des Waldes"}
    },
    "100713": {
      "name": "The Dragon Hunter",
      "type": "secondary",
      "givers": [311],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Meet Turimachus in Silent Surf."],
        [0, "Lead Turimachus to the clutch of Saltspray Dragon Eggs."],
        [0, "Protect Turimachus from the Saltspray Dragons."],
        [0, "See Turimachus for your reward."]
      ],
      "wiki": {"en": "The Dragon Hunter", "de": "Der Drachenjäger"}
    },
    "100714": {
      "name": "The Drunken Master",
      "type": "secondary",
      "givers": [364],
      "xp": 2000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find Drinkmaster Tahnu."],
        [0, "Defeat Drinkmaster Tahnu."],
        [0, "See Barkeep Mehoro for your reward."]
      ],
      "wiki": {"en": "The Drunken Master", "de": "Der betrunkene Meister"}
    },
    "100715": {
      "name": "The Emperor in Peril",
      "type": "secondary",
      "givers": [608],
      "xp": 2000,
      "gold": 175,
      "next": [100731],
      "objectives": [
        [0, "Speak with the Emperor's Hand."],
        [0, "Speak with Informant Tahzen."],
        [0, "See Guildmaster Luan for your reward."]
      ],
      "wiki": {"en": "The Emperor in Peril", "de": "Kaiser in Gefahr"}
    },
    "100716": {
      "name": "The Experimental Weaponsmith",
      "type": "secondary",
      "givers": [362],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "objectives": [
        [0, "Bring the spirit essence to Mastersmith Rutger."]
      ],
      "wiki": {"en": "The Experimental Weaponsmith", "de": "Der experimentelle Waffenschmied"}
    },
    "100717": {
      "name": "The Final Confrontation",
      "type": "secondary",
      "givers": [338],
      "xp": 10000,
      "rewards": ["Imperial Dragon's Tear"],
      "requires": [100638],
      "next": [100718],
      "objectives": [
        [0, "Confront Reiko."],
        [0, "Defeat Reiko."],
        [0, "See Miku for your reward."]
      ],
      "wiki": {"en": "The Final Confrontation", "de": "Die letzte Gegenüberstellung"}
    },
    "100718": {
      "name": "The Final Confrontation (Hard mode)",
      "type": "secondary",
      "givers": [339],
      "xp": 20000,
      "rewards": ["Imperial Dragon's Tear", "Imperial Dragon's Tear"],
      "requires": [100717, 100639],
      "objectives": [
        [0, "Confront Reiko."],
        [0, "Defeat Reiko."],
        [0, "See Initiate Zei Ri for your reward."]
      ],
      "wiki": {"en": "The Final Confrontation (Hard mode)", "de": "Die letzte Gegenüberstellung (Schwerer Modus)"}
    },
    "100719": {
      "name": "The Gangs of Kaineng",
      "type": "secondary",
      "givers": [187],
      "xp": 2000,
      "gold": 1000,
      "rewards": ["Ministerial Commendation"],
      "requires": [100487],
      "next": [100720, 100781],
      "objectives": [
        [0, "Defeat Ganshu the Scribe, and obtain the Jade Brotherhood Text."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "The Gangs of Kaineng", "de": "Die Banden von Kaineng"}
    },
    "100720": {
      "name": "The Gangs of Kaineng (Hard mode)",
      "type": "secondary",
      "givers": [187],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100488, 100719],
      "next": [100782],
      "objectives": [
        [0, "Defeat Ganshu the Scribe, and obtain the Jade Brotherhood Text."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "The Gangs of Kaineng (Hard mode)", "de": "Die Banden von Kaineng (Schwerer Modus)"}
    },
    "100721": {
      "name": "The Halcyon Job",
      "type": "secondary",
      "givers": [321],
      "xp": 5000,
      "gold": 350,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "next": [100634],
      "objectives": [
        [0, "Speak to Captain Rion of the Halcyon."],
        [0, "Kill Lord Senkai."],
        [0, "Kill War Captain Womack."],
        [0, "See Captain Lexis for your reward."]
      ],
      "wiki": {"en": "The Halcyon Job", "de": "Der Halkyon-Job"}
    },
    "100722": {
      "name": "The Impossible Sea Monster",
      "type": "secondary",
      "givers": [289],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "objectives": [
        [0, "Meet Zenos and the rest of the crew in Gyala Hatchery."],
        [0, "Destroy the Jade Sea monster."],
        [0, "See Po Fang for your reward."]
      ],
      "wiki": {"en": "The Impossible Sea Monster", "de": "Das unmögliche Meeresmonster (Quest)"}
    },
    "100723": {
      "name": "The Jade Arena",
      "type": "instance",
      "givers": [407],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "objectives": [
        [0, "Enter the arena and defeat all of the other combatants."],
        [0, "See Arena Master Portus for your reward."]
      ],
      "wiki": {"en": "The Jade Arena", "de": "Die Jade-Arena"}
    },
    "100724": {
      "name": "The Jade Quarry (Kurzick quest)",
      "type": "primary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "requires": [100585],
      "objectives": [
        [0, "Travel to the Jade Quarry and speak to Kommandant Durheim."]
      ],
      "wiki": {"en": "The Jade Quarry (Kurzick quest)", "de": "Der Jadesteinbruch (Kurzick-Quest)"}
    },
    "100725": {
      "name": "The Jade Quarry (Luxon quest)",
      "type": "primary",
      "givers": [324],
      "xp": 3000,
      "gold": 250,
      "requires": [100584],
      "objectives": [
        [0, "Travel to the Jade Quarry and speak to Erek."]
      ],
      "wiki": {"en": "The Jade Quarry (Luxon quest)", "de": "Der Jadesteinbruch (Luxon-Quest)"}
    },
    "100726": {
      "name": "The Kaguchi Brothers",
      "type": "secondary",
      "givers": [398],
      "profession": 1,
      "xp": 2500,
      "gold": 100,
      "objectives": [
        [0, "Find and kill the Kaguchi brothers."],
        [0, "See Headmaster Zhan for your reward."]
      ],
      "rewards": ["Bronze Shield"],
      "wiki": {"en": "The Kaguchi Brothers", "de": "Die Gebrüder Kaguchi"}
    },
    "100727": {
      "name": "The Knights Who Say Nian",
      "type": "event",
      "givers": [426],
      "event": 1,
      "xp": 5000,
      "gold": 300,
      "rewards": ["25 Lunar Tokens"],
      "objectives": [
        [0, "Seek out the Knights Who Say Nian in Kinya Province."],
        [0, "Defeat the Knights Who Say Nian."],
        [0, "Find the stolen shipment of festival dyes."],
        [0, "See Johai Sohn for your reward."]
      ],
      "wiki": {"en": "The Knights Who Say Nian", "de": "Die Ritter, die Nian sagen"}
    },
    "100728": {
      "name": "The Missing Corpses",
      "type": "secondary",
      "givers": [465],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Go to Bukdek Byway and burn the diseased corpses."],
        [0, "Investigate the corpse thefts and find out where the bodies are being taken."],
        [0, "See Guardsman Kinri for your reward."]
      ],
      "wiki": {"en": "The Missing Corpses", "de": "Die verschollenen Kadaver"}
    },
    "100729": {
      "name": "The Missing Link",
      "type": "secondary",
      "campaign": 2,
      "region": 8,
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find Ke Feng's boss, Shae Wong, in Kaineng Center."],
        [0, "Find Ke Feng in the Undercity and inform him that his cover is blown."],
        [0, "Kill the Jade Brotherhood thug Noqui."],
        [0, "Return to Shae Wong and tell him what has transpired."]
      ],
      "wiki": {"en": "The Missing Link", "de": "Das fehlende Bindeglied"}
    },
    "100730": {
      "name": "The Naga Source",
      "type": "secondary",
      "givers": [224],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "requires": [100486],
      "objectives": [
        [0, "Travel to Haiju Lagoon and talk to Scout Shenfai."],
        [0, "Head North to the beach to look for Naga. Report your findings to Scout Shenfai."],
        [0, "See Scout Shenfai for your reward."]
      ],
      "wiki": {"en": "The Naga Source", "de": "Der Ursprung der Naga"}
    },
    "100731": {
      "name": "The Plot Thickens",
      "type": "secondary",
      "givers": [608],
      "xp": 2500,
      "gold": 175,
      "requires": [100715],
      "next": [100582],
      "objectives": [
        [0, "Speak with Deckhand Jakob."],
        [0, "Speak with Mariner Kevan."],
        [0, "Speak with Captain Ander."],
        [0, "See Guildmaster Luan for your reward."]
      ],
      "wiki": {"en": "The Plot Thickens", "de": "Langsam wird es interessant"}
    },
    "100732": {
      "name": "The Rampaging Yetis",
      "type": "event",
      "givers": [342],
      "event": 6,
      "xp": 100,
      "gold": 150,
      "rewards": ["40 Victory Tokenns"],
      "next": [100740],
      "objectives": [
        [0, "Find Imperial Guard Musashi in Kinya Province."],
        [0, "Stop the rampaging Yetis before they can further harm the village. [5...0] of 5 rampaging Yetis remaining."],
        [0, "Travel to the Yeti cave in Tomaat Pass and uncover what agitated them."],
        [0, "\"Destroy\" the creature inside the Yeti cave."],
        [0, "See Imperial Guard Hanso for your reward."]
      ],
      "wiki": {"en": "The Rampaging Yetis", "de": "Die randalierenden Yetis"}
    },
    "100733": {
      "name": "The Red Frog",
      "type": "secondary",
      "givers": [377],
      "xp": 2500,
      "gold": 100,
      "requires": [100640],
      "objectives": [
        [0, "Meet Zho and Sujun in Panjiang Peninsula."],
        [0, "Follow Ling Wong as she tracks the elusive red frog."],
        [0, "See Headmaster Greico for your reward."]
      ],
      "rewards": ["Recurve Bow"],
      "wiki": {"en": "The Red Frog", "de": "Der rote Frosch"}
    },
    "100734": {
      "name": "The Rescue Attempt",
      "type": "secondary",
      "givers": [338],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Silver Zaishen Coin"],
      "requires": [100772],
      "next": [100735, 100775],
      "objectives": [
        [0, "Help Miku Reach Ashu."],
        [0, "See Miku for your reward."]
      ],
      "wiki": {"en": "The Rescue Attempt", "de": "Der Rettungsversuch"}
    },
    "100735": {
      "name": "The Rescue Attempt (Hard mode)",
      "type": "secondary",
      "givers": [339],
      "xp": 10000,
      "gold": 5000,
      "rewards": ["Gold Zaishen Coin"],
      "requires": [100773, 100734],
      "next": [100776],
      "objectives": [
        [0, "Help Miku Reach Ashu."],
        [0, "See Miku for your reward."]
      ],
      "wiki": {"en": "The Rescue Attempt (Hard mode)", "de": "Der Rettungsversuch (Schwerer Modus)"}
    },
    "100736": {
      "name": "The Rite of Valor",
      "type": "secondary",
      "givers": [340],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Locate a powerful Yeti that Gull Hookbeak can kill to complete the Rite of Valor."],
        [0, "Speak with Gull Hookbeak."],
        [0, "Eliminate the Yeti without killing Yrrg Snagtooth."],
        [0, "See Gull Hookbeak for your reward"]
      ],
      "wiki": {"en": "The Rite of Valor", "de": "Der Ritus der Tapferkeit"}
    },
    "100737": {
      "name": "The Road Less Traveled",
      "type": "primary",
      "givers": [467],
      "xp": 1500,
      "gold": 100,
      "requires": [100586],
      "next": [100604],
      "objectives": [
        [0, "Speak with Guard Tsukaro about traveling to Seitung Harbor."],
        [0, "Speak to Brother Pe Wan."],
        [0, "Travel to Seitung Harbor with Brother Pe Wan."],
        [0, "Speak with Brother Pe Wan once you have traveled to Seitung Harbor."]
      ],
      "wiki": {"en": "The Road Less Traveled", "de": "Die wenig begangene Straße"}
    },
    "100738": {
      "name": "The Search for a Cure",
      "type": "secondary",
      "givers": [438],
      "xp": 3000,
      "gold": 175,
      "skills": [305],
      "next": [100666],
      "objectives": [
        [0, "Speak with Bujo."],
        [0, "Collect [3...0] more Jade Brotherhood guild cape[s]."],
        [0, "Return the 3 Jade Brotherhood guild capes to Bujo."]
      ],
      "wiki": {"en": "The Search for a Cure", "de": "Die Suche nach einem Heilmittel"}
    },
    "100739": {
      "name": "The Shadow Blades",
      "type": "secondary",
      "campaign": 2,
      "region": 8,
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "next": [100590],
      "objectives": [
        [0, "Travel to the secret location of the Shadow Blades' meeting. Avoid being spotted."],
        [0, "Eavesdrop on the Shadow Blades' meeting. Remain hidden."],
        [0, "See Guildmaster Luan for your reward."]
      ],
      "wiki": {"en": "The Shadow Blades", "de": "Die Schattenklingen"}
    },
    "100740": {
      "name": "The Shrine of Maat",
      "type": "event",
      "givers": [342],
      "event": 6,
      "xp": 100,
      "gold": 150,
      "rewards": ["50 Victory Tokenns"],
      "requires": [100732],
      "next": [100472],
      "objectives": [
        [0, "Meet Imperial Guard Musashi in Sunqua Vale."],
        [0, "Travel to the Shrine of Maat and investigate the massacre."],
        [0, "Destroy the creature infesting the Shrine of Maat."],
        [0, "Speak to Brother Sitai and learn what occurred at the Shrine of Maat."],
        [0, "See Imperial Guard Hanso for your reward."]
      ],
      "wiki": {"en": "The Shrine of Maat", "de": "Der Schrein des Maat"}
    },
    "100741": {
      "name": "The Sickened Village",
      "type": "secondary",
      "givers": [282],
      "xp": 2500,
      "gold": 100,
      "requires": [100622],
      "objectives": [
        [0, "Find and cure 3 sickened villagers. You have 3 sickened villagers remaining."],
        [0, "See Headmaster Amara for your reward."]
      ],
      "rewards": ["Divine Symbol", "Energy +7 (Requires 4 Divine Favor)", "Health +15"],
      "wiki": {"en": "The Sickened Village", "de": "Das erkrankte Dorf"}
    },
    "100742": {
      "name": "The Siege at Tsumei Village",
      "type": "secondary",
      "givers": [386],
      "xp": 3500,
      "gold": 175,
      "rewards": ["Monastery Credit"],
      "requires": [100754],
      "next": [100635],
      "objectives": [
        [0, "Head to Sunqua Vale and eradicate the approaching Crimson Skull forces. [9...0] groups of Crimson Skull cohorts remaining."],
        [0, "Head to Panjiang Peninsula and eradicate the approaching Crimson Skull forces. [9...0] groups of Crimson Skull cohorts remaining."],
        [0, "See the Emperor's Blade for your reward."]
      ],
      "wiki": {"en": "The Siege at Tsumei Village", "de": "Die Belagerung des Dorfes Tsumei"}
    },
    "100743": {
      "name": "The Stone of the Elements",
      "type": "secondary",
      "givers": [344],
      "xp": 2500,
      "gold": 100,
      "requires": [100548],
      "objectives": [
        [0, "Travel to Kupah Beach in Kinya Province."],
        [0, "Place the Stone of the Elements on the stone pedestal."],
        [0, "See Headmaster Vhang for your reward."]
      ],
      "rewards": ["Golden Chalice", ": Energy +7 (Requires 4 Energy Storage)", ": Health +15"],
      "wiki": {"en": "The Stone of the Elements", "de": "Der Stein der Elemente (Quest)"}
    },
    "100744": {
      "name": "The Thieving Nanny",
      "type": "secondary",
      "givers": [456],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "objectives": [
        [0, "Search Haiju Lagoon for Paomu's missing nanny and locate Paomu's missing coin purse."],
        [0, "Defeat the ravenous drake."],
        [0, "Return Paomu's coin purse."]
      ],
      "wiki": {"en": "The Thieving Nanny", "de": "Die diebische Kinderfrau"}
    },
    "100745": {
      "name": "The Threat Grows",
      "type": "primary",
      "givers": [385],
      "xp": 1500,
      "gold": 100,
      "requires": [100777],
      "next": [100586],
      "objectives": [
        [0, "Travel to Kaitan Village on the Panjiang Peninsula."],
        [0, "Destroy the sickened guards attacking Kaitan Village."],
        [0, "See Sister Tai for your reward."]
      ],
      "wiki": {"en": "The Threat Grows", "de": "Die Bedrohung wächst"}
    },
    "100746": {
      "name": "The Xunlai Agent",
      "type": "secondary",
      "givers": [452],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Find the stolen storage vault and return it to Xunlai Agent Honlo."],
        [0, "See Xunlai Agent Honlo for your reward."]
      ],
      "wiki": {"en": "The Xunlai Agent", "de": "Die Xunlai-Agentin"}
    },
    "100747": {
      "name": "The Yeti Hunt",
      "type": "secondary",
      "givers": [409],
      "profession": 2,
      "xp": 1500,
      "gold": 100,
      "skills": [432, 459],
      "rewards": ["Monastery Credit"],
      "requires": [100763],
      "next": [100476],
      "objectives": [
        [0, "Speak to Zho again when you are ready to begin hunting the Yeti."],
        [0, "Help Zho hunt down and kill the Yeti."],
        [0, "See Zho for your reward."]
      ],
      "wiki": {"en": "The Yeti Hunt", "de": "Die Jagd auf den Yeti"}
    },
    "100748": {
      "name": "The Zenos Squad",
      "type": "secondary",
      "givers": [289],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "next": [100722],
      "objectives": [
        [0, "Talk to Zenos and join his crew."],
        [0, "Obtain funding. Convince Po Fang in Kaineng Center to fund the expedition."],
        [0, "Make living history. Convince Jin Siyan with the Ministry of Earth to chronicle the expedition."],
        [0, "Hire a tracker. Convince Nendros to join the expedition."],
        [0, "Bring firepower. Convince Zenos' estranged wife Enelora to join the expedition."],
        [0, "Report back to Zenos."],
        [0, "See Delphinus for your reward."]
      ],
      "wiki": {"en": "The Zenos Squad", "de": "Der Zenos-Trupp"}
    },
    "100749": {
      "name": "There Goes the Neighborhood (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 6000,
      "gold": 3000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100637],
      "next": [100620],
      "objectives": [
        [0, "Travel to Bukdek Byway to protect the citizens from the retreating gangs."],
        [0, "Defeat the mercenaries attacking civilians."],
        [0, "Do not allow more than three groups of Peasants to die."],
        [0, "Listen to Eri, Heart of Fire and determine her fate."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "There Goes the Neighborhood (Hard mode)", "de": "Lebe wohl, Nachbarschaft (Schwerer Modus)"}
    },
    "100750": {
      "name": "There Goes the Neighborhood",
      "type": "secondary",
      "givers": [220],
      "xp": 3000,
      "gold": 1500,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100636],
      "next": [100619],
      "objectives": [
        [0, "Travel to Bukdek Byway to protect the citizens from the retreating gangs."],
        [0, "Defeat the mercenaries attacking civilians."],
        [0, "Do not allow more than three groups of Peasants to die."],
        [0, "Listen to Eri, Heart of Fire and determine her fate."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "There Goes the Neighborhood", "de": "Lebe wohl, Nachbarschaft"}
    },
    "100751": {
      "name": "To Tahnnakai Temple",
      "type": "primary",
      "givers": [793],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires_missions": [260],
      "next_missions": [261],
      "missions": [261],
      "objectives": [
        [0, "Go to Tahnnakai Temple."],
        [0, "Speak to Temple Guard Bai at the temple gate."],
        [0, "Help Togo and Mhenlo defeat the Afflicted assaulting Nika's guild."],
        [0, "Escort Togo to Tahnnakai Temple and speak with Temple Guard Bai there."],
        [0, "See Brother Khai Jhong for your reward."]
      ],
      "wiki": {"en": "To Tahnnakai Temple", "de": "Zum Tahnnakai-Tempel"}
    },
    "100752": {
      "name": "To Zen Daijun",
      "type": "primary",
      "givers": [671],
      "xp": 2500,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [100753],
      "missions": [258],
      "objectives": [
        [0, "Travel with Su, Professor Gai, Sister Tai, and Kai Ying to the gates of Zen Daijun."],
        [0, "Speak with Master Togo at the gates of Zen Daijun."],
        [0, "Speak with Brother Hanjui."],
        [0, "See Brother Hanjui for your reward."]
      ],
      "wiki": {"en": "To Zen Daijun", "de": "Nach Zen Daijun"}
    },
    "100753": {
      "name": "To the Rescue (Factions quest)",
      "type": "primary",
      "givers": [791],
      "xp": 2000,
      "gold": 150,
      "requires": [100604],
      "next": [100752],
      "objectives": [
        [0, "Find Su, Sister Tai, Kai Ying, and Professor Gai in Linkei Township in Haiju Lagoon."],
        [0, "Defend Linkei Township from the Afflicted creatures."],
        [0, "See Su for your reward."]
      ],
      "wiki": {"en": "To the Rescue (Factions quest)", "de": "Zu Hilfe"}
    },
    "100754": {
      "name": "Togo's Ultimatum",
      "type": "secondary",
      "givers": [386],
      "xp": 3000,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "next": [100742],
      "objectives": [
        [0, "Deliver Master Togo's ultimatum to Captain Quimang."],
        [0, "See The Emperor's Blade for your reward."]
      ],
      "wiki": {"en": "Togo's Ultimatum", "de": "Togos Ultimatum"}
    },
    "100755": {
      "name": "Too High a Price",
      "type": "secondary",
      "givers": [336],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "objectives": [
        [0, "Speak to Nakai about the loan."],
        [0, "Speak to Sunzu about the loan."],
        [0, "Speak to Mitah about the loan."],
        [0, "Return to Sunzu and discuss the loan."],
        [0, "Defeat Sunzu and his men."],
        [0, "See Nakai for your reward."]
      ],
      "wiki": {"en": "Too High a Price", "de": "Der Preis ist zu hoch"}
    },
    "100756": {
      "name": "Track Down Ang the Ephemeral",
      "type": "primary",
      "givers": [556],
      "profession": 8,
      "xp": 600,
      "gold": 50,
      "requires": [100617],
      "next": [100672],
      "objectives": [
        [0, "Find Ang the Ephemeral in Panjiang Peninsula."]
      ],
      "wiki": {"en": "Track Down Ang the Ephemeral", "de": "Findet Ang den Kurzlebigen"}
    },
    "100757": {
      "name": "Track Down Brother Pe Wan",
      "type": "primary",
      "givers": [714],
      "xp": 600,
      "gold": 50,
      "requires": [100689],
      "next": [100668],
      "objectives": [
        [0, "Seek out Brother Pe Wan in Kinya Province."]
      ],
      "wiki": {"en": "Track Down Brother Pe Wan", "de": "Sucht nach Bruder Pe Wan"}
    },
    "100758": {
      "name": "Track Down Kai Ying",
      "type": "primary",
      "givers": [483],
      "xp": 600,
      "gold": 50,
      "requires": [100678],
      "next": [100679],
      "objectives": [
        [0, "Search for Kai Ying in Panjiang Peninsula."]
      ],
      "wiki": {"en": "Track Down Kai Ying", "de": "Spürt Kai Ying auf"}
    },
    "100759": {
      "name": "Track Down Lo Sha",
      "type": "primary",
      "givers": [300],
      "xp": 600,
      "gold": 50,
      "requires": [100526],
      "next": [100595],
      "objectives": [
        [0, "Look for Lo Sha in Kinya Province."]
      ],
      "wiki": {"en": "Track Down Lo Sha", "de": "Spürt Lo Sha auf"}
    },
    "100760": {
      "name": "Track Down Panaku",
      "type": "primary",
      "givers": [742],
      "xp": 600,
      "gold": 50,
      "requires": [100628],
      "next": [100546],
      "objectives": [
        [0, "Seek out Panaku in Kinya Province."]
      ],
      "wiki": {"en": "Track Down Panaku", "de": "Sucht nach Panaku"}
    },
    "100761": {
      "name": "Track Down Su",
      "type": "primary",
      "givers": [638],
      "xp": 600,
      "gold": 50,
      "requires": [100593],
      "next": [100642],
      "objectives": [
        [0, "Look for Su in Panjiang Peninsula"]
      ],
      "wiki": {"en": "Track Down Su", "de": "Sucht nach Su"}
    },
    "100762": {
      "name": "Track Down Weng Gha",
      "type": "primary",
      "givers": [733],
      "xp": 600,
      "gold": 50,
      "requires": [100698],
      "next": [100711],
      "objectives": [
        [0, "Look for Weng Gha in Panjiang Peninsula."]
      ],
      "wiki": {"en": "Track Down Weng Gha", "de": "Spürt Weng Gha auf"}
    },
    "100763": {
      "name": "Track Down Zho",
      "type": "primary",
      "givers": [562],
      "xp": 600,
      "gold": 50,
      "requires": [100565],
      "next": [100747],
      "objectives": [
        [0, "Search for Zho in Kinya Province."]
      ],
      "wiki": {"en": "Track Down Zho", "de": "Sucht nach Zho"}
    },
    "100764": {
      "name": "Tracking the Corruption",
      "type": "secondary",
      "givers": [187],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100578],
      "next": [100765, 100487],
      "objectives": [
        [0, "Find information regarding the chalice. Good responses: [0...3] of 3."],
        [0, "Find information regarding the chalice. Bad responses: [0...3] of 3"],
        [0, "Defeat the Am Fah."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "Tracking the Corruption", "de": "Der Verdorbenheit auf der Spur"}
    },
    "100765": {
      "name": "Tracking the Corruption (Hard mode)",
      "type": "secondary",
      "givers": [187],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2 Ministerial Commendations"],
      "requires": [100579, 100764],
      "next": [100488],
      "objectives": [
        [0, "Find information regarding the chalice. Good responses: [0...3] of 3."],
        [0, "Find information regarding the chalice. Bad responses: [0...3] of 3"],
        [0, "Defeat the Am Fah."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "Tracking the Corruption (Hard mode)", "de": "Der Verdorbenheit auf der Spur (Schwerer Modus)"}
    },
    "100766": {
      "name": "Trading Blows",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["1,000 Kurzick faction", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100537],
      "next": [100767, 100552],
      "objectives": [
        [0, "Search for signs of suspicious activity."],
        [0, "Protect the Kurzick Diplomats."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Trading Blows", "de": "Schlagabtausch"}
    },
    "100767": {
      "name": "Trading Blows (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2,000 Kurzick faction", "2 Imperial Guard Requisition Orders", "1 Imperial Commendation"],
      "requires": [100538, 100766],
      "next": [100553],
      "objectives": [
        [0, "Search for signs of suspicious activity."],
        [0, "Protect the Kurzick Diplomats."]
      ],
      "wiki": {"en": "Trading Blows (Hard mode)", "de": "Schlagabtausch (Schwerer Modus)"}
    },
    "100768": {
      "name": "Tsumei Village",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["75 Victory Tokens"],
      "objectives": [
        [0, "Wipe out the \"enemy forces\" occupying Tsumei Village. [0...40] of 40 enemies killed."]
      ],
      "wiki": {"en": "Tsumei Village (mission)", "de": "Dorf Tsumei (Mission)"}
    },
    "100769": {
      "name": "Tsumei Village (mission 2)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
      "objectives": [
        [0, "Wipe out the \"enemy forces\" occupying Tsumei Village. [0...40] of 40 enemies killed."]
      ],
      "wiki": {"en": "Tsumei Village (mission)", "de": "Dorf Tsumei (Mission 2)"}
    },
    "100770": {
      "name": "Vassal States",
      "type": "secondary",
      "givers": [251],
      "xp": 2000,
      "gold": 1500,
      "rewards": ["Imperial Commendation"],
      "requires": [100473],
      "next": [100771],
      "objectives": [
        [0, "Go to the palace and talk to the diplomats."],
        [0, "Clear out the remaining Am Fah from the Jade Sea."],
        [0, "Clear out the remaining Jade Brotherhood from the Echovald Forest."],
        [0, "Tell the diplomats that their lands are clear."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Vassal States", "de": "Vasallenstaaten"}
    },
    "100771": {
      "name": "Vassal States (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100770, 100474],
      "objectives": [
        [0, "Go to the palace and talk to the diplomats."],
        [0, "Clear out the remaining Am Fah from the Jade Sea."],
        [0, "Clear out the remaining Jade Brotherhood from the Echovald Forest."],
        [0, "Tell the diplomats that their lands are clear."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "Vassal States (Hard mode)", "de": "Vasallenstaaten (Schwerer Modus)"}
    },
    "100772": {
      "name": "Violence in the Streets",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100552],
      "next": [100773, 100734],
      "objectives": [
        [0, "Find a way to end the fighting."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Violence in the Streets", "de": "Gewalt auf den Straßen"}
    },
    "100773": {
      "name": "Violence in the Streets (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2 Imperial Guard Requisition Orders", "1 Imperial Commendation"],
      "requires": [100553, 100772],
      "next": [100735],
      "objectives": [
        [0, "Find a way to end the fighting."],
        [0, "See Guardsman Qao Lin for your reward."]
      ],
      "wiki": {"en": "Violence in the Streets (Hard mode)", "de": "Gewalt auf den Straßen (Schwerer Modus)"}
    },
    "100774": {
      "name": "Wardens On the March",
      "type": "secondary",
      "givers": [221],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "objectives": [
        [0, "Protect Arborstone from the wardens. You have 4 groups remaining."]
      ],
      "wiki": {"en": "Wardens On the March", "de": "Aufseher im Anmarsch"}
    },
    "100775": {
      "name": "Warning the Angchu",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["Onyx Gemstone", "2 Lockpicks"],
      "requires": [100734],
      "next": [100776, 100563],
      "objectives": [
        [0, "Warn Soar Honorclaw of the Ministry of Purity's deceit."],
        [0, "Defeat the Ministry of Purity forces."],
        [0, "Soar Honorclaw must survive."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "Warning the Angchu", "de": "Die Angchu warnen"}
    },
    "100776": {
      "name": "Warning the Angchu (Hard mode)",
      "type": "secondary",
      "givers": [220],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Ruby", "Onyx Gemstone", "Lockpick"],
      "requires": [100735, 100775],
      "next": [100564],
      "objectives": [
        [0, "Warn Soar Honorclaw of the Ministry of Purity's deceit."],
        [0, "Defeat the Ministry of Purity forces."],
        [0, "Soar Honorclaw must survive."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "Warning the Angchu (Hard mode)", "de": "Die Angchu warnen (Schwerer Modus)"}
    },
    "100777": {
      "name": "Warning the Tengu",
      "type": "primary",
      "givers": [439],
      "xp": 1500,
      "gold": 75,
      "requires_missions": [257],
      "next": [100745],
      "objectives": [
        [0, "Travel to Aerie, the Angchu Tengu Village"],
        [0, "Speak to Soar Honorclaw."],
        [0, "Destroy the afflicted creature."],
        [0, "See Soar Honorclaw for your reward."]
      ],
      "wiki": {"en": "Warning the Tengu", "de": "Die Tengu warnen"}
    },
    "100778": {
      "name": "Warrior Insignia",
      "type": "secondary",
      "givers": [398],
      "profession": 1,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100726],
      "objectives": [
        [0, "Speak to Instructor Ng."],
        [0, "Complete the Advanced Defense Techniques course."],
        [0, "Complete the Disruption course."],
        [0, "Complete the Skill Chaining course."],
        [0, "Complete the Snaring course."],
        [0, "See Headmaster Zhan for your reward."]
      ],
      "wiki": {"en": "Warrior Insignia", "de": "Krieger-Befähigung"}
    },
    "100779": {
      "name": "Wayfarer's Reverie: Cantha",
      "type": "event",
      "campaign": 2,
      "region": 8,
      "event": 8,
      "xp": 2006,
      "gold": 2012,
      "rewards": ["Proof of Waves"],
      "objectives": [
        [0, "Visit the Shrine of Maat."],
        [0, "Visit Haiju Lagoon."],
        [0, "Visit Tahnakai Temple. Mispelt as \"Tahnakai\" rather than \"Tahnnakai\""],
        [0, "Visit Nahpui Quarter."],
        [0, "Visit Arborstone's central chamber."],
        [0, "Visit the entombed leviathan in Rhea's Crater."],
        [0, "Visit the whirlpool's edge."],
        [0, "Visit Raisu Palace."],
        [0, "See Festival Coordinator Tsuru for your reward."]
      ],
      "wiki": {"en": "Wayfarer's Reverie: Cantha", "de": "Erinnerung des Reisenden: Cantha"}
    },
    "100780": {
      "name": "Welcome to Cantha",
      "type": "secondary",
      "givers": [786],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [101193],
      "objectives": [
        [0, "Speak with Brother Mhenlo in Bukdek Byway."],
        [0, "Travel with Brother Mhenlo to find his old teacher, Master Togo."],
        [0, "Speak with Guardsman Chow."],
        [0, "See Guardsman Chow for your reward."]
      ],
      "wiki": {"en": "Welcome to Cantha", "de": "Willkommen in Cantha"}
    },
    "100781": {
      "name": "What Waits in Shadow",
      "type": "secondary",
      "givers": [187],
      "xp": 5000,
      "gold": 2500,
      "rewards": ["Ministerial Commendation"],
      "requires": [100719],
      "next": [100782, 100462],
      "objectives": [
        [0, "Locate and defeat Reisen the Phoenix."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "What Waits in Shadow", "de": "Was im Schatten lauert"}
    },
    "100782": {
      "name": "What Waits in Shadow (Hard mode)",
      "type": "secondary",
      "givers": [187],
      "xp": 10000,
      "gold": 5000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100720, 100781],
      "next": [100463],
      "objectives": [
        [0, "Locate and defeat Reisen the Phoenix."],
        [0, "See Xan Hei for your reward."]
      ],
      "wiki": {"en": "What Waits in Shadow (Hard mode)", "de": "Was im Schatten lauert (Schwerer Modus)"}
    },
    "100783": {
      "name": "When Kappa Attack",
      "type": "secondary",
      "givers": [251],
      "xp": 2000,
      "gold": 1500,
      "rewards": ["Imperial Commendation"],
      "next": [100784],
      "objectives": [
        [0, "Meet Ministry Agent Oroku in the Undercity."],
        [0, "Escort Oroku to the corrupted locations so that he can purify them. [0...3] of 3 purified. Oroku must survive."],
        [0, "Find the source of the corruption."],
        [0, "Defeat Kai Shi Jo and his corrupted kappa."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "When Kappa Attack", "de": "Kappa-Angriff"}
    },
    "100784": {
      "name": "When Kappa Attack (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Commendation", "Imperial Commendation"],
      "requires": [100783],
      "objectives": [
        [0, "Meet Ministry Agent Oroku in the Undercity."],
        [0, "Escort Oroku to the corrupted locations so that he can purify them. [0...3] of 3 purified. Oroku must survive."],
        [0, "Find the source of the corruption."],
        [0, "Defeat Kai Shi Jo and his corrupted kappa."],
        [0, "See Lei Jeng for your reward."]
      ],
      "wiki": {"en": "When Kappa Attack (Hard mode)", "de": "Kappa-Angriff (Schwerer Modus)"}
    },
    "100785": {
      "name": "Wicked Wardens",
      "type": "secondary",
      "givers": [679],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Kurzick faction", "Equipment Requisition"],
      "objectives": [
        [0, "Travel throughout Echovald Forest and slay 40 wardens. You have killed [0...40] of 40 wardens."],
        [0, "See Dunmel Gorhopf for your reward."]
      ],
      "wiki": {"en": "Wicked Wardens", "de": "Niederträchtige Aufseher"}
    },
    "100786": {
      "name": "A Brief Introduction",
      "type": "secondary",
      "givers": [529],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100833],
      "objectives": [
        [0, "Verify if the Tomb of Saevio Proelium is intact."],
        [0, "The tomb has been breached! The Order of Whispers must know right away!"],
        [0, "See Whispers Acolyte for your reward."]
      ],
      "wiki": {"en": "A Brief Introduction", "de": "Eine kurze Einführung"}
    },
    "100787": {
      "name": "A Burning Desire",
      "type": "event",
      "givers": [524],
      "event": 1,
      "xp": 2000,
      "gold": 300,
      "rewards": ["25 Lunar Tokens", "2 Sparklers"],
      "objectives": [
        [0, "Retrieve a box of Fehj's sparklers from his home in Zehlon Reach."],
        [0, "ADDED: Find the corsairs who stole Fehj's sparklers"],
        [0, "Distract Elder Nofuun before you give him a hot foot. (Dance or play a musical instrument)."],
        [0, "See Fehj for your reward."]
      ],
      "wiki": {"en": "A Burning Desire", "de": "Eine brandheiße Sache"}
    },
    "100788": {
      "name": "A Bushel of Trouble",
      "type": "secondary",
      "givers": [328],
      "xp": 2500,
      "gold": 200,
      "rewards": ["10 Lightbringer points", "Kournan Coin"],
      "requires": [100943],
      "next": [101060],
      "objectives": [
        [0, "Find Yera Swiftsight in the Sunward Marches and ask him about the corrupted plants."],
        [0, "Examine 10...0 more suspicious shrubs for signs of corruption."],
        [0, "Report your findings to Mirza Veldrunner in Turai's Procession."]
      ],
      "wiki": {"en": "A Bushel of Trouble", "de": "Ein Haufen Probleme"}
    },
    "100789": {
      "name": "A Deal's a Deal",
      "type": "primary",
      "givers": [581],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "requires_missions": [524],
      "next": [100918],
      "objectives": [
        [0, "Meet Palawa Joko in Joko's Domain."],
        [0, "Help Palawa Joko regain control of some of his army by defeating General Huduh."],
        [0, "Retake the Bone Palace from Varesh's rear Vanguard and defeat Zadukar the Blessed."],
        [0, "See Priest Kehmtut for your reward."]
      ],
      "wiki": {"en": "A Deal's a Deal", "de": "Geschäft ist Geschäft"}
    },
    "100790": {
      "name": "A Decayed Monument",
      "type": "secondary",
      "givers": [500],
      "xp": 2000,
      "gold": 200,
      "objectives": [
        [0, "Keep an eye on the monument while Vadben gets his tools."],
        [0, "See Vadben for your reward."]
      ],
      "rewards": ["15 Sunspear Promotion Points"],
      "wiki": {"en": "A Decayed Monument", "de": "Ein verfallenes Monument"}
    },
    "100791": {
      "name": "A Delayed Delivery",
      "type": "secondary",
      "givers": [496],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100819],
      "next": [100816],
      "objectives": [
        [0, "Travel to Issnur Isles."],
        [0, "Save Farmer Foneng from the corsairs."],
        [0, "Get a sack of grain from Farmer Foneng for Scholar Chago."],
        [0, "See Scholar Chago for your reward."]
      ],
      "wiki": {"en": "A Delayed Delivery", "de": "Eine verspätete Lieferung"}
    },
    "100792": {
      "name": "A Father's Fate",
      "type": "secondary",
      "givers": [535],
      "xp": 500,
      "gold": 50,
      "objectives": [
        [0, "Defeat the Lady of the Dead and free the soul of Sinni's father."]
      ],
      "wiki": {"en": "A Father's Fate", "de": "Eines Vaters Schicksal"}
    },
    "100793": {
      "name": "A Fleshy Operation",
      "type": "secondary",
      "givers": [526],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "requires": [100878],
      "objectives": [
        [0, "Free the other Orrian spirits from the Leech Tunnels. You have rescued [0...3] of 3 spirits."],
        [0, "Lead Orrian Spirit Gildran to the entrance of the Leech Tunnels."],
        [0, "Lead Orrian Spirit Minos to the entrance of the Leech Tunnels."],
        [0, "Lead Orrian Spirit Kandril to the entrance of the Leech Tunnels."],
        [0, "See Wandering Soul for your reward."]
      ],
      "wiki": {"en": "A Fleshy Operation", "de": "Eine fleischige Angelegenheit"}
    },
    "100794": {
      "name": "A Flickering Flame",
      "type": "secondary",
      "givers": [525],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points", "Inscribed Secret"],
      "next": [100866],
      "objectives": [
        [0, "Defeat the demons blocking the path to the Titan. 4...0 groups remain."],
        [0, "Seek council with the Titan, Ignis Cruor."],
        [0, "Defeat the Titan!"],
        [0, "See Scorch Emberspire for your reward."]
      ],
      "wiki": {"en": "A Flickering Flame", "de": "Eine flackernde Flamme"}
    },
    "100795": {
      "name": "A Fool's Luck",
      "type": "secondary",
      "givers": [267],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Visit Ruthless Sevad to collect Koss's winnings."],
        [0, "Find Jerob No-Spine on the Barbarous Shore and inquire about his debt to Ruthless Sevad."],
        [0, "Seek Ruthless Sevad's loot keeper and slay it to free the treasure."],
        [0, "Give Ruthless Sevad 5 Tarnished Platinum Coins."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "A Fool's Luck", "de": "Das Glück eines Narren"}
    },
    "100796": {
      "name": "A Friend in Need",
      "type": "secondary",
      "givers": [761],
      "xp": 250,
      "gold": 100,
      "objectives": [
        [0, "Add a henchman to your party and meet Kina in the Plains of Jarin."]
      ],
      "wiki": {"en": "A Friend in Need", "de": "Unter Freunden"}
    },
    "100797": {
      "name": "A Ghostly Request",
      "type": "secondary",
      "givers": [701],
      "xp": 2000,
      "gold": 200,
      "rewards": ["20 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100815],
      "objectives": [
        [0, "Hunt down Wianuyo to bring peace to the ghost of Sehwanu"],
        [0, "See Sehwanu for your reward"]
      ],
      "wiki": {"en": "A Ghostly Request", "de": "Rache für einen Geist"}
    },
    "100798": {
      "name": "A Hidden Threat",
      "type": "secondary",
      "givers": [531],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points"],
      "objectives": [
        [0, "Follow Elonbel as he patrols the western riverbank."],
        [0, "Now that Elonbel's true allegiance has been revealed, deal with him and his cohorts accordingly."],
        [0, "See Shaurom for your reward."]
      ],
      "wiki": {"en": "A Hidden Threat", "de": "Eine verborgene Bedrohung"}
    },
    "100799": {
      "name": "A History of Violence",
      "type": "secondary",
      "givers": [225],
      "xp": 4500,
      "gold": 400,
      "rewards": ["100 Lightbringer points"],
      "next": [100829],
      "objectives": [
        [0, "Free the bound souls of the Imperial guards from Shiro's constructs. You have freed 0...3 of 3 souls."],
        [0, "Speak to Imperial Guard Hao Li."],
        [0, "Speak to Imperial Guard Kaichen."],
        [0, "Speak to Imperial Guard Tiendi."],
        [0, "See Imperial Captain Shi Wang for your reward."]
      ],
      "wiki": {"en": "A History of Violence", "de": "Aus dem Geschichtsbuch der Gewalt"}
    },
    "100800": {
      "name": "A Land of Heroes",
      "type": "primary",
      "givers": [488],
      "xp": 2500,
      "rewards": ["300 Sunspear Promotion Points"],
      "requires": [100993],
      "next": [101041],
      "objectives": [
        [0, "Champion's Dawn must not fall to the corsairs."],
        [0, "Speak to Quarrymaster Bohanna when all members of your party are ready to defend Champion's Dawn!"],
        [0, "Hold off the initial assault against Champion's Dawn."],
        [0, "Kormir must survive."],
        [0, "Your party is engaged in a mini-mission. If your party dies during this quest you will not be resurrected at a resurrection shrine."],
        [0, "Seize the corsair landing points."],
        [0, "Destroy the corsair chain of command by striking back at their war camps."],
        [0, "See Castellan Puuba for your reward."]
      ],
      "wiki": {"en": "A Land of Heroes", "de": "Ein Land der Helden"}
    },
    "100801": {
      "name": "A Leap of Faith",
      "type": "secondary",
      "givers": [776],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [100928],
      "objectives": [
        [0, "Talk to Sahreh's father, Dalz, just outside Beknur Harbor. Tell him about Sahreh's behavior and request he meet with the two lovers."],
        [0, "Meet Dalz on the Cliffs of Dohjok."],
        [0, "Bring Dalz to Behron and Sahreh."],
        [0, "Witness the argument."],
        [0, "Witness the duel. You can choose to aid Behron or simply let the duel resolve."],
        [1, "If Behron dies first:"],
        [2, "See Dalz Jelon for your reward."],
        [1, "If Dalz dies first:"],
        [2, "See Behron for your Reward."],
        [1, "If they both die:"],
        [2, "Quest Failed. Travel to a nearby outpost or area, return and try again."],
        [1, "If Sahreh dies first:"],
        [2, "Quest Failed. Travel to a nearby outpost or area, return and try again."]
      ],
      "wiki": {"en": "A Leap of Faith", "de": "Vertrauenssache"}
    },
    "100802": {
      "name": "A Little Recon",
      "type": "secondary",
      "givers": [233],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "objectives": [
        [0, "Take Koss to Arkjok Ward and talk to Herbalist Umjabwe. Find out what's upsetting the villagers."],
        [0, "Create a diversion to help the villagers escape."],
        [0, "Kill the Kournan escort."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "A Little Recon", "de": "Ein bisschen Aufklärung"}
    },
    "100803": {
      "name": "A Loose Cannon",
      "type": "secondary",
      "givers": [533],
      "xp": 500,
      "gold": 50,
      "objectives": [
        [0, "Travel with Shaudok to the merchant's camp."],
        [0, "Teach the merchant and his bodyguards the error of their ways."],
        [0, "See Shaudok for your reward."]
      ],
      "wiki": {"en": "A Loose Cannon", "de": "Eine öffentliche Gefahr"}
    },
    "100804": {
      "name": "A Message Home",
      "type": "secondary",
      "givers": [521],
      "xp": 1500,
      "gold": 125,
      "objectives": [
        [0, "Travel to Kamadan and speak with Clerk Arlon."],
        [0, "Acquire official papers to grant Jatoro diplomatic status."],
        [0, "Relieve the clerk of some of his duties so he can draft Jatoro's diplomatic papers."],
        [0, "Bring Jatoro the official papers proving he has ambassador status"]
      ],
      "wiki": {"en": "A Message Home", "de": "Eine Nachricht an die Heimat"}
    },
    "100805": {
      "name": "A Message for Janeera",
      "type": "secondary",
      "givers": [517],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "requires": [100812],
      "objectives": [
        [0, "Bring Janeera the message from Ruthless Sevad."],
        [0, "See Ruthless Sevad for your reward."]
      ],
      "wiki": {"en": "A Message for Janeera", "de": "Eine Nachricht für Janeera"}
    },
    "100806": {
      "name": "A Mysterious Missive",
      "type": "secondary",
      "givers": [496],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100816],
      "objectives": [
        [0, "Travel to Zehlon Reach."],
        [0, "Find the location of the farm referred to in Yomindhe's note."],
        [0, "Search the farm for clues."],
        [0, "Travel to the Plains of Jarin."],
        [0, "Find Yomindhe's buried message."],
        [0, "See Scholar Chago for your reward."]
      ],
      "wiki": {"en": "A Mysterious Missive", "de": "Ein mysteriöses Sendschreiben"}
    },
    "100807": {
      "name": "A New Guide",
      "type": "secondary",
      "givers": [497],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points", "Ancient Artifact"],
      "requires": [101073],
      "next": [100902],
      "objectives": [
        [0, "Help Curator Ruras unearth a fossil for his \"Tyrian Investors.\""],
        [0, "Bring the fossilized shellfish to Curator Ruras."],
        [0, "Escort Curator Ruras back to the Lair of the Forgotten."],
        [0, "See Curator Ruras for your reward"]
      ],
      "wiki": {"en": "A New Guide", "de": "Ein neuer Fremdenführer"}
    },
    "100808": {
      "name": "A Peaceful Solution",
      "type": "secondary",
      "givers": [527],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation"],
      "objectives": [
        [0, "Speak with Shaudok."],
        [0, "Travel with Shaudok to the merchant's camp."],
        [0, "Drive off the merchant's bodyguards."],
        [0, "See Kohanu for your reward."]
      ],
      "wiki": {"en": "A Peaceful Solution", "de": "Eine friedliche Lösung"}
    },
    "100809": {
      "name": "A Perplexing Plague",
      "type": "secondary",
      "givers": [496],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100819],
      "objectives": [
        [0, "Travel to Fahranur."],
        [0, "Search Fahranur for clues as to the nature of the Scarab Plague."],
        [0, "See Scholar Chago for your reward."]
      ],
      "wiki": {"en": "A Perplexing Plague", "de": "Eine geheimnisvolle Seuche"}
    },
    "100810": {
      "name": "A Personal Vault",
      "type": "secondary",
      "givers": [493],
      "xp": 500,
      "objectives": [
        [0, "Talk to a Xunlai Agent and open a storage account."],
        [0, "See Xunlai Agent Jueh for your reward."]
      ],
      "wiki": {"en": "A Personal Vault", "de": "Ein eigener Tresor"}
    },
    "100811": {
      "name": "A Prescription for Conscription",
      "type": "secondary",
      "givers": [491],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires_missions": [453],
      "objectives": [
        [0, "Protect the fields. Do not let them be overrun."],
        [0, "You have [6...0] groups remaining."],
        [0, "See Elder Isma for your reward."]
      ],
      "wiki": {"en": "A Prescription for Conscription", "de": "Ein Vorwand zur Einberufung"}
    },
    "100812": {
      "name": "A Question of Morality",
      "type": "secondary",
      "givers": [517],
      "hero": [12],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "next": [100805],
      "objectives": [
        [0, "Locate the caravan in Arkjok Ward."],
        [0, "Steal the supplies from Herbalist Umjabwe."],
        [0, "Take the herbal remedies to Ruthless Sevad in Barbarous Shore or Elder Jonah in Ronjok."],
        [0, "Take the herbal remedies to Elder Jonah in Ronjok. (added if the party goes to Ruthless Sevad first)"]
      ],
      "wiki": {"en": "A Question of Morality", "de": "Eine Frage der Moral"}
    },
    "100813": {
      "name": "A Show of Force",
      "type": "secondary",
      "givers": [515],
      "xp": 4000,
      "gold": 400,
      "rewards": ["45 Lightbringer points"],
      "requires": [101008],
      "objectives": [
        [0, "Inform Palawa Joko about the Great Margonite Temple in The Sulfurous Wastes."],
        [0, "Report to Officer Lohru in the Remains of Sahlahja."],
        [0, "Report to Officer Lohru in The Sulfurous Wastes. She will release minions to you."],
        [0, "Destroy the Great Margonite Temple with the rune!"],
        [0, "See Palawa Joko for your reward."]
      ],
      "wiki": {"en": "A Show of Force", "de": "Eine Demonstration der Stärke"}
    },
    "100814": {
      "name": "A Sound of Ancient Horns",
      "type": "secondary",
      "givers": [228],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires_missions": [520],
      "objectives": [
        [0, "Visit some of Ahmtur's old friends and acquaintances. Find suitable reinforcements."],
        [0, "Visit Ordash in the Kodash Bazaar."],
        [0, "See Archivist Mijir in the Halls of Chokhin."],
        [0, "Consult with retired General Poruk in Vehtendi Valley."],
        [0, "Speak to Hervahn the Vexing in Resplendent Makuun."],
        [0, "See Lieutenant Murunda for your reward."]
      ],
      "wiki": {"en": "A Sound of Ancient Horns", "de": "Der Klang alter Hörner"}
    },
    "100815": {
      "name": "A Sticky Operation",
      "type": "secondary",
      "givers": [449, 450],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100861],
      "next": [101075],
      "objectives": [
        [0, "Eliminate the corsairs camping out in Lahtenda Bog. 0..5 of 5 camps still remain."],
        [0, "See Guard Kovu for your reward."]
      ],
      "wiki": {"en": "A Sticky Operation", "de": "Eine brenzlige Angelegenheit"}
    },
    "100816": {
      "name": "A Stolen Spore",
      "type": "secondary",
      "givers": [496],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100791],
      "next": [100806],
      "objectives": [
        [0, "Travel to Zehlon Reach."],
        [0, "Catch the three children and retrieve the stolen spores."],
        [0, "See Scholar Chago for your reward."]
      ],
      "wiki": {"en": "A Stolen Spore", "de": "Eine gestohlene Spore"}
    },
    "100817": {
      "name": "A Tasty Morsel",
      "type": "secondary",
      "givers": [489],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "requires": [101065],
      "objectives": [
        [0, "Meet up with Charen in the Ruptured Heart."],
        [0, "Journey with Charen to find Rebirther Jirath, the Margonite soul eater."],
        [0, "Wait in hiding until you hear the signal. The code word is: cat."],
        [0, "Kill the soul eating Margonite before he devours Charen."],
        [0, "See Kwalanah for your reward."]
      ],
      "wiki": {"en": "A Tasty Morsel", "de": "Ein Leckerbissen"}
    },
    "100818": {
      "name": "A Thorn in Varesh's Side",
      "type": "secondary",
      "givers": [482],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Assault the Kournan column marching north to Jahai."],
        [0, "Fall back to escape the incoming Kournan army."],
        [0, "Hold off the Kournan ambush."],
        [0, "Run toward Pogahn to escape the Kournan reinforcements."],
        [0, "See Nerashi for your reward."]
      ],
      "wiki": {"en": "A Thorn in Varesh's Side", "de": "Ein Dorn in Vareshs Seite"}
    },
    "100819": {
      "name": "A Troubling Theory",
      "type": "secondary",
      "givers": [496],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100809],
      "next": [100791],
      "objectives": [
        [0, "Travel to Fahranur."],
        [0, "Kill insects and gather 10 Scarab Spores for Scholar Chago. 0...10 of 10 spores gathered."],
        [0, "See Scholar Chago for your reward."]
      ],
      "wiki": {"en": "A Troubling Theory", "de": "Eine beunruhigende Theorie"}
    },
    "100820": {
      "name": "All Alone in the Darkness",
      "type": "primary",
      "givers": [193],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Lightbringer points"],
      "missions": [527],
      "objectives": [
        [0, "Meet Kormir in the Domain of Secrets."],
        [0, "Search for the missing scout in the Domain of Secrets with Kormir."],
        [0, "Rescue Ahtok from the attacking Margonites."],
        [0, "Speak with Ahtok."],
        [0, "See Runic Oracle for your reward."]
      ],
      "wiki": {"en": "All Alone in the Darkness", "de": "Alleine in der Dunkelheit"}
    },
    "100821": {
      "name": "All for One and One for Justice",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
      "objectives": [
        [0, "Meet Lionguard Figo in Lion's Arch."],
        [0, "Find Olias in Bloodstone Fen."],
        [0, "Help Olias rescue the Chosen."],
        [0, "Defeat the demons."],
        [0, "Olias must survive."],
        [0, "Your party is engaged in a mini-mission. If your party dies during this quest you will not be resurrected at a resurrection shrine."],
        [0, "Return to Clerk Arlon in Kamadan."]
      ],
      "rewards": ["Olias joins your party."],
      "wiki": {"en": "All for One and One for Justice", "de": "Alle für einen und einer für Gerechtigkeit"}
    },
    "100822": {
      "name": "All's Well That Ends Well",
      "type": "primary",
      "givers": [543],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires_missions": [518],
      "next": [101071],
      "objectives": [
        [0, "Meet Kehanni in the the Mirror of Lyss."],
        [0, "Schmooze with Bokka the Magnificent at his palace in Resplendent Makuun."],
        [0, "Hobnob with Vaughn the Venerable at the Bokka Amphitheatre."],
        [0, "It's a trap! Defeat the Kournan elite forces."],
        [0, "See Royal Finance Minister Oluda for your reward."]
      ],
      "wiki": {"en": "All's Well That Ends Well", "de": "Ende gut, alles gut"}
    },
    "100823": {
      "name": "Ancestral Anguish",
      "type": "secondary",
      "givers": [328],
      "xp": 4000,
      "gold": 200,
      "rewards": ["Kournan Coin", "10 Lightbringer points"],
      "requires": [101060],
      "next": [101057],
      "objectives": [
        [0, "Seek out and purify the corrupted sprouts in Turai's Procession. Defeat any vile incarnations you encounter. You have 3..0 sprouts left to purify."],
        [0, "See Mirza Veldrunner for your reward."]
      ],
      "wiki": {"en": "Ancestral Anguish", "de": "Qual der Ahnen"}
    },
    "100824": {
      "name": "And a Hero Shall Lead Them",
      "type": "primary",
      "givers": [413],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [101022],
      "missions": [453],
      "objectives": [
        [0, "Gain the rank of Sunspear General (2,500) or be a leader Kormir recruited from a foreign land. To gain promotion points, talk to Kournan priests to earn the respect of the Kournan people."],
        [0, "Speak to Koss in the Command Post at the Sunspear Sanctuary."],
        [0, "Rescue the remaining Sunspear forces."],
        [0, "Watch out for long-range Kournan spotters."],
        [0, "Watch out for sentry traps."],
        [0, "Talk to Commander Suha."],
        [0, "See Rojis for your reward."]
      ],
      "wiki": {"en": "And a Hero Shall Lead Them", "de": "Neue Helden braucht das Land"}
    },
    "100825": {
      "name": "Anger of the Stone Face",
      "type": "secondary",
      "givers": [359],
      "xp": 1000,
      "gold": 100,
      "requires": [101001],
      "objectives": [
        [0, "Travel to Zehlon Reach and talk to Tahon."],
        [0, "Defeat Tahon!"],
        [0, "See Kihawa for your reward."]
      ],
      "wiki": {"en": "Anger of the Stone Face", "de": "Der Zorn des Steinernen Antlitzes"}
    },
    "100826": {
      "name": "Armored Transport",
      "type": "secondary",
      "givers": [100],
      "xp": 500,
      "gold": 20,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "2 Tanned Hide Squares", "2 Bolt of Cloths"],
      "objectives": [
        [0, "Meet with Dengo on the Plains of Jarin."],
        [0, "Protect Dengo from corsair attacks as you travel to the Sunspear Great Hall."],
        [0, "See Mehinu for your reward."]
      ],
      "wiki": {"en": "Armored Transport", "de": "Gepanzerter Transport"}
    },
    "100827": {
      "name": "Assault on Beknur Harbor",
      "type": "secondary",
      "givers": [199],
      "xp": 2000,
      "gold": 200,
      "rewards": ["25 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100946],
      "next": [101017],
      "objectives": [
        [0, "Speak to Elder Jurdu when all members of your party are ready to defend Beknur Harbor"],
        [0, "Defend Beknur Harbor from the attacking amphibian army. 6...0 waves of attackers remain."],
        [0, "See Elder Jurdu for your reward."]
      ],
      "wiki": {"en": "Assault on Beknur Harbor", "de": "Angriff auf Beknurhafen"}
    },
    "100828": {
      "name": "Attack at the Kodash",
      "type": "primary",
      "givers": [201],
      "hero": [6, 9],
      "xp": 2500,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100911, 100912],
      "objectives": [
        [0, "Take Koss and Melonni to speak with Butoh the Bold to prepare the defenses of the Grand Forum of Vabb. (Koss and Melonni must be equipped heroes)"],
        [0, "Help defend the Grand Forum of Vabb. If it should fall, so will the Kodash Bazaar."],
        [0, "Speak with Butoh the Bold."],
        [0, "See Zerai the Learner for your reward."]
      ],
      "wiki": {"en": "Attack at the Kodash", "de": "Angriff auf Kodash"}
    },
    "100829": {
      "name": "Bad Fortune",
      "type": "secondary",
      "givers": [225],
      "xp": 4500,
      "gold": 400,
      "rewards": ["100 Lightbringer points", "Inscribed Secret"],
      "requires": [100799],
      "objectives": [
        [0, "Seek out the Fortune Teller in the Domain of Fear and defeat her."],
        [0, "See Imperial Captain Shi Wang for your reward."]
      ],
      "wiki": {"en": "Bad Fortune", "de": "Wahrheitsfindung"}
    },
    "100830": {
      "name": "Bad Tide Rising",
      "type": "primary",
      "givers": [235],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points"],
      "requires": [100928],
      "next": [100998],
      "objectives": [
        [0, "Meet with General Yurukaro."],
        [0, "Defend Kamadan by closing the ruptures. You have [3...0] remaining."],
        [0, "See First Spear Dehvad for your reward."]
      ],
      "wiki": {"en": "Bad Tide Rising", "de": "Die dunkle Flut steigt"}
    },
    "100831": {
      "name": "Battle Preparations",
      "type": "primary",
      "givers": [630],
      "xp": 1500,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [101240, 100695],
      "next": [100993],
      "objectives": [
        [0, "Talk to Kormir."],
        [0, "Speak to First Spear Dehvad to gain entrance to the Training Area."],
        [0, "Complete Command Training."],
        [0, "Report to Castellan Puuba in the Sunspear Great Hall for further orders."]
      ],
      "wiki": {"en": "Battle Preparations", "de": "Kampfvorbereitungen"}
    },
    "100832": {
      "name": "Battle of Turai's Procession",
      "type": "secondary",
      "givers": [328],
      "xp": 4000,
      "gold": 400,
      "rewards": ["10 Lightbringer points", "Kournan Coin"],
      "requires": [101057],
      "objectives": [
        [0, "Join the Centaur troop in Turai's Procession."],
        [0, "Stand your ground against the horde of nightmare creatures."]
      ],
      "wiki": {"en": "Battle of Turai's Procession", "de": "Die Schlacht an Turais Weg"}
    },
    "100833": {
      "name": "Between a Rock...",
      "type": "secondary",
      "givers": [618],
      "xp": 4000,
      "gold": 400,
      "rewards": ["15 Lightbringer points"],
      "requires": [100786],
      "objectives": [
        [0, "Speak with Whispers Adept."],
        [0, "Protect the villages of the Yatendi Canyons from attack. You have [6...0] Margonite groups left to destroy."],
        [0, "See Whispers Adept for your reward"]
      ],
      "wiki": {"en": "Between a Rock...", "de": "In der Klemme ..."}
    },
    "100834": {
      "name": "Big News, Small Package",
      "type": "primary",
      "givers": [219],
      "xp": 1000,
      "gold": 125,
      "rewards": ["10 Sunspear Promotion Points"],
      "requires": [100998],
      "next": [100888],
      "objectives": [
        [0, "Report to Jerek."],
        [0, "Travel to the Mehtani Keys and investigate Tahlkora's allegations."],
        [0, "See Jerek for your reward."]
      ],
      "wiki": {"en": "Big News, Small Package", "de": "Stückwerk"}
    },
    "100835": {
      "name": "Blueprint of the Fall",
      "type": "secondary",
      "givers": [561],
      "xp": 2500,
      "rewards": ["50 Lightbringer points", "Inscribed Secret"],
      "requires": [100875],
      "objectives": [
        [0, "Seek out Terick in the Domain of Secrets and learn the truth of his intentions."],
        [0, "Defeat the demon Razakel."],
        [0, "See Kaelen for your reward."]
      ],
      "wiki": {"en": "Blueprint of the Fall", "de": "Licht ins Dunkel"}
    },
    "100836": {
      "name": "Botanical Research",
      "type": "secondary",
      "givers": [245],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "objectives": [
        [0, "Talk to Horticulturist Hinon and find the whereabouts of the mehkuunah plant."],
        [0, "Bring back a sample of the mehkuunah plant to Librarian Kahnu for analysis."],
        [0, "See Librarian Kahnu for your reward."]
      ],
      "wiki": {"en": "Botanical Research", "de": "Botanische Recherchen"}
    },
    "100837": {
      "name": "Brains or Brawn",
      "type": "secondary",
      "givers": [201],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [101036],
      "objectives": [
        [0, "Help Zerai the Learner decide between Norgu and Goren."],
        [0, "See [Goren/Norgu] for your reward."]
      ],
      "wiki": {"en": "Brains or Brawn", "de": "Muskeln oder Grips (Entscheidung für Goren)"}
    },
    "100838": {
      "name": "Brains or Brawn",
      "type": "secondary",
      "givers": [201],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100906],
      "objectives": [
        [0, "Help Zerai the Learner decide between Norgu and Goren."],
        [0, "See [Goren/Norgu] for your reward."]
      ],
      "wiki": {"en": "Brains or Brawn", "de": "Muskeln oder Grips (Entscheidung für Norgu)"}
    },
    "100839": {
      "name": "Breaching the Stygian Veil",
      "type": "instance",
      "givers": [248],
      "xp": 10000,
      "gold": 500,
      "rewards": ["500 Lightbringer points"],
      "next": [100841],
      "objectives": [
        [0, "Defeat the approaching demon hordes."],
        [0, "Destroy the Demon Underlords to release the magical bindings placed on the entrance to the spawning tunnels. 0...2 of 2 Demon Underlords remain."],
        [0, "See Adept of Whispers for your reward."]
      ],
      "wiki": {"en": "Breaching the Stygian Veil", "de": "Eine Bresche im Stygischen Schleier"}
    },
    "100840": {
      "name": "Breaking the Broken",
      "type": "secondary",
      "givers": [203],
      "xp": 4500,
      "gold": 400,
      "rewards": ["100 Lightbringer points", "Inscribed Secret"],
      "requires": [101061],
      "next": [101045],
      "objectives": [
        [0, "Stave off the assault of Abaddon's forces in Nightfallen Jahai."],
        [0, "See Keeper Jinyssa for your reward."]
      ],
      "wiki": {"en": "Breaking the Broken", "de": "Angriff ist die beste Verteidigung"}
    },
    "100841": {
      "name": "Brood Wars",
      "type": "instance",
      "givers": [248],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "requires": [100839],
      "objectives": [
        [0, "Journey into the trenches of the Stygian Veil and kill the Stygian Lords. 4...0 of 4 still remaining."],
        [0, "See Adept of Whispers for your reward."]
      ],
      "wiki": {"en": "Brood Wars", "de": "Brutkriege"}
    },
    "100842": {
      "name": "Building the Base: Prisoners of War",
      "type": "secondary",
      "givers": [233],
      "hero": [7],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [101014],
      "next": [100843],
      "objectives": [
        [0, "Make your way to the intercept point with Dunkoro."],
        [0, "Split your forces. Attack the Kournan scouts without alerting the others."],
        [0, "Rescue the prisoners of war."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Building the Base: Prisoners of War", "de": "Bau des Stützpunkts: Kriegsgefangene"}
    },
    "100843": {
      "name": "Building the Base: The Interrogation",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [100842],
      "next": [100844],
      "objectives": [
        [0, "Meet Nerashi on the Marga Coast. She is holding a Kournan scout prisoner there."],
        [0, "Interrogate Kehtur and extract any valuable information you can."],
        [0, "Dictate Kehtur's fate to Nerashi."],
        [0, "Destroy the scout group guarding the Kournan peasants and liberate the prisoners."],
        [0, "Lead the Kournan peasants to the safety of the Sunspear Sanctuary."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Building the Base: The Interrogation", "de": "Bau des Stützpunkts: Das Verhör"}
    },
    "100844": {
      "name": "Building the Base: The Meeting",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [100843],
      "objectives": [
        [0, "Meet with Kerendu and his sons to discuss how they might assist the Sunspears."],
        [0, "Destroy the Kournan scout unit before it reports your meeting with Kerendu."],
        [0, "Lead Kerendu to safety at the Sunspear Sanctuary."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Building the Base: The Meeting", "de": "Bau des Stützpunkts: Das Treffen"}
    },
    "100845": {
      "name": "Calling the Order",
      "type": "primary",
      "givers": [610],
      "hero": [4],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [101071],
      "next_missions": [519],
      "missions": [519],
      "objectives": [
        [0, "Call upon the Order of Whispers."],
        [0, "Bring the Master of Whispers with you and use the Acolytes to defend against the Margonite threat."],
        [0, "Use the Acolytes to defend against the onslaught of demons."],
        [0, "Defend Norgu from the attacking forces."],
        [0, "Talk to Norgu."],
        [0, "Inform Prince Ahmtur the Mighty that the Order of Whispers will help protect the Citadel of Dzagon."],
        [0, "See Lieutenant Murunda for your reward."]
      ],
      "wiki": {"en": "Calling the Order", "de": "Hilfe vom Orden"}
    },
    "100846": {
      "name": "Capturing the Signet of Capture",
      "type": "secondary",
      "givers": [276],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [101022],
      "objectives": [
        [0, "Destroy a suitable target and use the Signet of Capture to acquire a skill."],
        [0, "See Elder Jonah for your reward."]
      ],
      "wiki": {"en": "Capturing the Signet of Capture", "de": "Das Siegel der Erbeutung"}
    },
    "100847": {
      "name": "Catch of the Day",
      "type": "secondary",
      "givers": [494],
      "xp": 1000,
      "gold": 125,
      "rewards": ["10 Sunspear Promotion Points"],
      "objectives": [
        [0, "Find the Hamou Ukaiou and destroy it."],
        [0, "See Lendu the Fisherman for your reward."]
      ],
      "wiki": {"en": "Catch of the Day", "de": "Ein großer Fang"}
    },
    "100848": {
      "name": "Centaur Blackmail",
      "type": "primary",
      "givers": [413],
      "xp": 2500,
      "gold": 200,
      "requires": [101054],
      "next_missions": [458],
      "missions": [458],
      "objectives": [
        [0, "Speak with the Centaur in the Command Post at the Sunspear Sanctuary."],
        [0, "Journey to the Jahai Bluffs and meet with Zhed Shadowhoof and his informant."],
        [0, "Talk to the Master of Whispers."],
        [0, "Make your way toward Kodonur Crossroads and speak to Haroj Firemane."],
        [0, "See Estate Guard Rikesh for your reward."]
      ],
      "rewards": ["Zhed Shadowhoof joins your party."],
      "wiki": {"en": "Centaur Blackmail", "de": "Wink mit dem Schattenhuf"}
    },
    "100849": {
      "name": "Centaur Concerns",
      "type": "secondary",
      "givers": [762],
      "hero": [10],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "objectives": [
        [0, "Journey with Zhed Shadowhoof to the Ancestor Tree in Turai's Procession."],
        [0, "See Mirza Veldrunner for your reward."]
      ],
      "wiki": {"en": "Centaur Concerns", "de": "Unter Zentauren"}
    },
    "100850": {
      "name": "Chasing Zenmai",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
      "objectives": [
        [0, "Speak with Imperial Guardsman Linro in Kaineng Center."],
        [0, "Find Zenmai in Bukdek Byway."],
        [0, "Travel to the Undercity. Zenmai must survive."],
        [0, "Stop the Am Fah from creating new afflicted soldiers."],
        [0, "Defeat the demons."],
        [0, "Speak with Zenmaimissing full stop"],
        [0, "Return to Clerk Arlon in Kamadan with Zenmai."]
      ],
      "rewards": ["Zenmai joins your party"],
      "wiki": {"en": "Chasing Zenmai", "de": "Jagd auf Zenmai"}
    },
    "100851": {
      "name": "Choose Your Secondary Profession (Nightfall)",
      "type": "primary",
      "givers": [649],
      "xp": 500,
      "gold": 50,
      "requires": [100990],
      "next": [100935],
      "objectives": [
        [0, "See First Spear Dehvad for your reward."]
      ],
      "wiki": {
        "en": "Choose Your Secondary Profession (Nightfall quest)",
        "de": "Wählt Eure sekundäre Klasse (Nightfall)"
      }
    },
    "100852": {
      "name": "Coffer of Joko",
      "type": "secondary",
      "campaign": 3,
      "region": 13,
      "hero": [4],
      "xp": 1500,
      "gold": 250,
      "rewards": ["10 Lightbringer points", "Trade Contract"],
      "requires": [101055],
      "next": [100970],
      "objectives": [
        [0, "Locate the ancient coffer of Palawa Joko."],
        [0, "Eliminate all hostiles and secure the coffer."],
        [0, "Obtain the Scriptures of Abaddon from the ancient coffer."],
        [0, "See Belgun the Quarry Master for your reward."]
      ],
      "wiki": {"en": "Coffer of Joko", "de": "Jokos Schatulle"}
    },
    "100853": {
      "name": "Command Training",
      "type": "secondary",
      "givers": [235],
      "xp": 250,
      "gold": 125,
      "objectives": [
        [0, "Report to Tactician Haj once you have a Hero in your party to begin command training."],
        [0, "Use your Hero to capture area one."],
        [0, "Use your Hero to capture area two and area three."],
        [0, "Order your Hero to return to area one."],
        [0, "See First Spear Dehvad for your reward."]
      ],
      "wiki": {"en": "Command Training", "de": "Befehlstraining"}
    },
    "100854": {
      "name": "Corsair Invasion",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires": [101031],
      "next": [100855],
      "objectives": [
        [0, "Go with Rahlon and protect the village from corsairs."],
        [0, "Eradicate the corsairs in Mehtani Keys."],
        [0, "Speak with Elder Olunideh for your reward."]
      ],
      "wiki": {"en": "Corsair Invasion", "de": "Korsaren-Invasion"}
    },
    "100855": {
      "name": "Corsair Vengeance",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires": [100854],
      "objectives": [
        [0, "Go with the men of the village and Elder Olunideh and drive the corsairs away from Istani soil."],
        [0, "See Elder Olunideh for your reward."]
      ],
      "wiki": {"en": "Corsair Vengeance", "de": "Korsaren-Rache"}
    },
    "100856": {
      "name": "Cover Your Tracks",
      "type": "secondary",
      "givers": [601],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "requires": [100930],
      "objectives": [
        [0, "Escort Kauniss to Atrocity Library. Kauniss must survive."],
        [0, "Protect Kauniss while he casts the Incantation of Fog. Kauniss must survive."],
        [0, "See Keeper Kauniss for your reward."]
      ],
      "wiki": {"en": "Cover Your Tracks", "de": "Verlorene Fährte"}
    },
    "100857": {
      "name": "Crossing the Desolation",
      "type": "primary",
      "givers": [413],
      "hero": [10],
      "xp": 2500,
      "gold": 200,
      "rewards": ["10 Lightbringer points"],
      "missions": [524],
      "objectives": [
        [0, "Talk to Kormir in the Command Post to find a way across the Desolation."],
        [0, "Travel with Zhed to speak with Mirza about crossing the Desolation."],
        [0, "Meet Mirza on the outskirts of the Desolation."],
        [0, "Return to Kormir."],
        [0, "Meet with Kormir at the monument to Palawa Joko's defeat."],
        [0, "Examine the monument to Palawa Joko's defeat."],
        [0, "Have Zhed help track Palawa Joko. Take Zhed to speak with Dirah Traptail."],
        [0, "See Laph Longmane for your reward."]
      ],
      "wiki": {"en": "Crossing the Desolation", "de": "Durchquerung des Ödlands"}
    },
    "100858": {
      "name": "Dark Gateway",
      "type": "secondary",
      "givers": [281],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "requires": [100873],
      "objectives": [
        [0, "Defeat the Emissary of Dhuum and close the gateway to the Jahai Bluffs."],
        [0, "See Neersi for your reward."]
      ],
      "wiki": {"en": "Dark Gateway", "de": "Das dunkle Tor"}
    },
    "100859": {
      "name": "Data Mining",
      "type": "secondary",
      "givers": [292],
      "hero": [4],
      "xp": 2000,
      "gold": 250,
      "rewards": ["1 Trade Contract"],
      "next": [101055],
      "objectives": [
        [0, "Query miner Lahri about suspicious activity around the quarry."],
        [0, "Find out if miner Moh has witnessed anything strange lately."],
        [0, "See if miner Kurli has noticed anything unusual recently."],
        [0, "See Belgun the Quarry Master for your reward."]
      ],
      "wiki": {"en": "Data Mining", "de": "Datensuche"}
    },
    "100860": {
      "name": "Deathbringer Company",
      "type": "instance",
      "givers": [753],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "objectives": [
        [0, "Destroy the Deathbringer Company"],
        [0, "See Voice of Whispers for your reward."]
      ],
      "wiki": {"en": "Deathbringer Company", "de": "Tod den Todbringern!"}
    },
    "100861": {
      "name": "Defender's Choice",
      "type": "secondary",
      "givers": [449, 450],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100815],
      "objectives": [
        [0, "Defeat the band of Corsairs roaming in Fahranur."],
        [0, "Seek out Arred the Unready and force him into submission."],
        [0, "Make Arred the Unready tell you about the rumored Corsairs rallying in the area. Use any means necessary."],
        [0, "See Guard Kovu for your reward."]
      ],
      "wiki": {"en": "Defender's Choice", "de": "Die Wahl des Verteidigers"}
    },
    "100862": {
      "name": "Desperate Measures",
      "type": "secondary",
      "givers": [777],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "objectives": [
        [0, "Kill the harpy leader, Render, in the Forum Highlands."],
        [0, "Exterminate the heket commander, Harrk Facestab, in the Forum Highlands."],
        [0, "See Kamveh for your reward."]
      ],
      "wiki": {"en": "Desperate Measures", "de": "Verzweifelte Maßnahmen"}
    },
    "100863": {
      "name": "Destroy the Harpies",
      "type": "secondary",
      "campaign": 3,
      "region": 13,
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires_missions": [520],
      "objectives": [
        [0, "Find the harpy roosts in the Wilderness of Bahdza and eliminate them. You have [4...0] roosts remaining."],
        [0, "See Lieutenant Murunda for your reward."]
      ],
      "wiki": {"en": "Destroy the Harpies", "de": "Vernichtet die Harpyien"}
    },
    "100864": {
      "name": "Destroy the Ungrateful Slaves",
      "type": "secondary",
      "givers": [298],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "objectives": [
        [0, "Destroy the renegade slave spirits before they can harm the spirit of Primeval King Jahnus."],
        [0, "See Primeval King Jahnus for your reward."]
      ],
      "wiki": {"en": "Destroy the Ungrateful Slaves", "de": "Vernichtet die undankbaren Sklaven"}
    },
    "100865": {
      "name": "Diamond in the Rough",
      "type": "secondary",
      "givers": [455],
      "xp": 1000,
      "gold": 100,
      "objectives": [
        [0, "Meet Dajwa on the Cliffs of Dohjok to help him recover his ring."],
        [0, "Help Dajwa find and slay the skree harpy that stole his pie."],
        [0, "Search the harpy nests for the missing ring. You have searched n of 5 nests."],
        [0, "See Dajwa for your reward."]
      ],
      "wiki": {"en": "Diamond in the Rough", "de": "Die diebische Harpyie"}
    },
    "100866": {
      "name": "Dismember the Titans",
      "type": "secondary",
      "givers": [678, 525],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points", "Inscribed Secret"],
      "requires": [100794],
      "objectives": [
        [0, "Seek out and destroy the Titan, Securis Phasmatis."],
        [0, "Find and defeat the remaining Titan, Letum Contineo."],
        [0, "See Scorch Emberspire for your reward."]
      ],
      "wiki": {"en": "Dismember the Titans", "de": "Nieder mit den Titanen"}
    },
    "100867": {
      "name": "Double Dog Dare",
      "type": "secondary",
      "givers": [715],
      "xp": 2000,
      "gold": 200,
      "requires": [101017],
      "objectives": [
        [0, "Go to where the water sparkles like diamonds and the dunes hide gold from the Elders."],
        [0, "Travel east past the place where men sleep on stilts. Reach the tower that lies on the edge of the world."],
        [0, "Follow the Queen's gaze south and find an ill tempered bear guarding his cave."],
        [0, "Pass the wrathful bear and run to the doors of the sanctuary that clings to the land as the maiden of the sea pulls it towards her bosom."],
        [0, "Face northwest and walk thirty-five paces. From beneath the Arch of the Twin Queens, gaze upon the great pillars that have stood since ages past."],
        [0, "Stand at the feet of the pillar that lies in eternal slumber."],
        [0, "From the sleeping pillar, travel west towards the spot where man's creation meets its end."],
        [0, "Beyond man's creation a huge boulder hugs the dunes. Find the treasure buried on the lee of the stone."],
        [0, "Kneel down and search the sand for the buried treasure."],
        [0, "Take Bobo back to Ashigun and collect your reward."]
      ],
      "wiki": {"en": "Double Dog Dare", "de": "Schatzsuche"}
    },
    "100868": {
      "name": "Double Your Pleasure and RUN!",
      "type": "event",
      "givers": [766],
      "event": 11,
      "rewards": ["Ghoulish Accessory Token"],
      "objectives": [
        [0, "Acquire 50 Pumpkin Cookies by participating in Halloween activities."],
        [0, "See Malavaka for your reward."]
      ],
      "wiki": {"en": "Double Your Pleasure and RUN!", "de": "Verdoppelt Euren Spaß und LAUFT"}
    },
    "100869": {
      "name": "Douse Your Enthusiasm",
      "type": "event",
      "givers": [686],
      "event": 1,
      "xp": 2000,
      "gold": 300,
      "rewards": ["10 Sunspear Promotion Points", "25 Lunar Tokens", "1 Sugary Blue Drink"],
      "objectives": [
        [0, "Travel to Fehj's village in Zehlon Reach and acquire a jug of water."],
        [0, "Drop the jug of water near Fehj's fireworks to \"disarm\" them."],
        [0, "See Elder Nofuun for your reward."]
      ],
      "wiki": {"en": "Douse Your Enthusiasm", "de": "O heiliger Sankt Florian"}
    },
    "100870": {
      "name": "Down on the Bayou",
      "type": "secondary",
      "givers": [449, 450],
      "xp": 1500,
      "gold": 125,
      "rewards": ["10 Sunspear points"],
      "objectives": [
        [0, "Meet Vidaj in Lahtenda Bog."],
        [0, "Lead Vidaj to the relics in the Lahtenda Bog. You have 5 areas left to explore."],
        [0, "Lead Vidaj out from the bayou."]
      ],
      "wiki": {"en": "Down on the Bayou", "de": "Sumpfgeschichten"}
    },
    "100871": {
      "name": "Drake in a Cage",
      "type": "secondary",
      "givers": [490],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "next": [100882],
      "objectives": [
        [0, "Slay kuskale and harvest their flesh for bait. You need [5...0] more [[Hunk of Fresh Meat|hunk[s] of fresh meat."],
        [0, "Place fresh meat in the basket by the shore to lure the ferocious beast."],
        [0, "Force the beast into submission."],
        [0, "See Chuno for your reward."]
      ],
      "wiki": {"en": "Drake in a Cage", "de": "Ein Lindwurm im Käfig"}
    },
    "100872": {
      "name": "Drakes on the Plain",
      "type": "secondary",
      "givers": [416],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "objectives": [
        [0, "Koss must be present to continue."],
        [0, "Take Koss to meet Wekehsa on The Floodplain of Mahnkelon."],
        [0, "Escort Wekehsa to his meeting place."],
        [0, "Defeat Lord Yama the Vengeful and his guards."],
        [0, "See Wekehsa for your reward."]
      ],
      "rewards": ["Banana Scythe"],
      "wiki": {"en": "Drakes on the Plain", "de": "Die Lindwürmer sind los"}
    },
    "100873": {
      "name": "Drink of the Gods",
      "type": "secondary",
      "givers": [281],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "next": [100858],
      "objectives": [
        [0, "Defeat the Abominations camped on Neersi's wine."],
        [0, "Find Neersi's Wine."],
        [0, "See Neersi for your reward."]
      ],
      "wiki": {"en": "Drink of the Gods", "de": "Trunk der Götter"}
    },
    "100874": {
      "name": "Eavesdropping",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Speak to Zhed Shadowhoof."],
        [0, "Eavesdrop on the Kournan captains and collect information on Kormir."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Eavesdropping", "de": "Lauschangriff"}
    },
    "100875": {
      "name": "Escape from the Torment",
      "type": "secondary",
      "givers": [561],
      "xp": 2500,
      "gold": 200,
      "rewards": ["50 Lightbringer points", "Inscribed Secret"],
      "next": [100835],
      "objectives": [
        [0, "Seek out Terick in the Domain of Secrets."],
        [0, "Escort Terick through the Domain of Secrets and search for a means of escape."],
        [0, "Defeat Abaddon's forces!"],
        [0, "See Kaelen for your reward."]
      ],
      "wiki": {"en": "Escape from the Torment", "de": "Flucht aus den Qualen"}
    },
    "100876": {
      "name": "Estate Planning",
      "type": "secondary",
      "givers": [238],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "requires": [101018],
      "next": [101009],
      "objectives": [
        [0, "Talk to Kwaju. He can show you around the estate."],
        [0, "Scout the estate with Kwaju and Koss."],
        [0, "See Behchu for your reward"]
      ],
      "wiki": {"en": "Estate Planning", "de": "Besitzansprüche"}
    },
    "100877": {
      "name": "Extinction",
      "type": "secondary",
      "givers": [228],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100910],
      "objectives": [
        [0, "Explore the area outside the Citadel and kill any remaining heket. [6...0] of 6 heket groups remain."],
        [0, "Locate the heket leader."],
        [0, "Defeat the heket leader and his comrades."],
        [0, "See Lieutenant Murunda for your reward."]
      ],
      "wiki": {"en": "Extinction", "de": "Auslöschung"}
    },
    "100878": {
      "name": "Faded Memory",
      "type": "secondary",
      "givers": [526],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "next": [100793],
      "objectives": [
        [0, "Slay Flesh Gluttons to help the Wandering Soul recover his memory. You have [5...0] of 5 left to kill."],
        [0, "See Wandering Soul for your reward."]
      ],
      "wiki": {"en": "Faded Memory", "de": "Verblasste Erinnerung"}
    },
    "100879": {
      "name": "Family Soul",
      "type": "secondary",
      "givers": [552],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "objectives": [
        [0, "Travel to the Arid Sea in Tyria and find the bones of Shanrah's husband."],
        [0, "Investigate Rotal's bones."],
        [0, "Strike down Khepkhet Marrowfeast in Prophet's Path and free the souls of Rotal's daughters."],
        [0, "See Shanrah for your reward."]
      ],
      "wiki": {"en": "Family Soul", "de": "Familienseele"}
    },
    "100880": {
      "name": "Family Ties (Nightfall quest)",
      "type": "secondary",
      "givers": [261],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "requires": [101009, 101046],
      "objectives": [
        [0, "Talk to Ailonseh Dejarin about Koss and the family estate."],
        [0, "Deliver Ailonseh's letter to Zudash Dejarin."]
      ],
      "wiki": {"en": "Family Ties (Nightfall quest)", "de": "Familienbande (Nightfall)"}
    },
    "100881": {
      "name": "Feast of Bokka",
      "type": "secondary",
      "givers": [244],
      "xp": 1500,
      "gold": 450,
      "objectives": [
        [0, "Obtain a Drake Kabob from Chef Lonbahn in Kamadan."],
        [0, "Obtain a bowl of Skalefin Soup from Chef Panjoh in the Astralarium."],
        [0, "Obtain a plate of Pahnai Salad from Chef Volon at Champion's Dawn."],
        [0, "See Royal Chef Hatundo for your reward."]
      ],
      "wiki": {"en": "Feast of Bokka", "de": "Bokkas Festmahl"}
    },
    "100882": {
      "name": "Feeding Frenzy",
      "type": "secondary",
      "givers": [490],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "requires": [100871],
      "next": [100923],
      "objectives": [
        [0, "Sate Toma's appetite. Lower the Health of a targeted enemy to 20% to activate Toma's Feeding Frenzy skill."],
        [0, "See Chuno for your reward."]
      ],
      "wiki": {"en": "Feeding Frenzy", "de": "Fressrausch (Quest)"}
    },
    "100883": {
      "name": "Find the Stolen Presents",
      "type": "event",
      "givers": [558],
      "event": 13,
      "xp": 5000,
      "gold": 250,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "requires": [100986],
      "next": [100999],
      "objectives": [
        [0, "Speak to the Frost Maiden on the Plains of Jarin and learn how to find the stolen presents."],
        [0, "Guide Rudi around the Plains of Jarin to find the stolen presents. You have recovered [0...3] of the stolen presents."],
        [0, "Return the stolen presents to the Frost Maiden."],
        [0, "Meet the Frost Maiden in Issnur Isles."],
        [0, "Guide Rudi around the Issnur Isles to find the stolen presents. You have recovered [0...3] of the stolen presents."],
        [0, "Return the stolen presents to the Frost Maiden."],
        [0, "See Grandfather Kringle for your reward."]
      ],
      "wiki": {"en": "Find the Stolen Presents", "de": "Findet die gestohlenen Geschenke"}
    },
    "100884": {
      "name": "Finding a Purpose",
      "type": "secondary",
      "givers": [343],
      "xp": 2500,
      "objectives": [
        [0, "Speak to Keeper Shafoss to gain entrance to the Heart of Abaddon."],
        [0, "Explore the Heart of Abaddon."],
        [0, "Speak to Razah."],
        [0, "Destroy the binding guardians and free Razah. [3...0] of 3 guardians remain."],
        [0, "Speak to Razah."],
        [0, "See Chaplain Phyratyss for your reward."]
      ],
      "rewards": ["Razah joins your party."],
      "wiki": {"en": "Finding a Purpose", "de": "Der Sinn des Lebens"}
    },
    "100885": {
      "name": "First Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "next": [100989],
      "objectives": [
        [0, "Speak to Mutu Wahmeh to learn if he is worthy of his father's inheritance."],
        [0, "Kill the Corsairs that stole the old fisherman's life savings."],
        [0, "Bring the fisherman back his life savings."],
        [0, "See Healer Zenwa for your reward."]
      ],
      "wiki": {"en": "First Born", "de": "Der Erstgeborene"}
    },
    "100886": {
      "name": "Fish in a Barrel",
      "type": "secondary",
      "givers": [559],
      "hero": [12],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "next": [101079],
      "objectives": [
        [0, "Meet up with Jerob No-Spine in the Sunward Marches"],
        [0, "Meet the Kournan soldiers."],
        [0, "You've been tricked! Kill the Kournan soldiers before they kill you!"],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Fish in a Barrel", "de": "Fische im Fass"}
    },
    "100887": {
      "name": "Flamingo-ing... going... gone.",
      "type": "secondary",
      "givers": [560],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "objectives": [
        [0, "Shoo the troublesome flamingos out of Kanyama's south field."],
        [0, "See Kanyama for your reward"]
      ],
      "wiki": {"en": "Flamingo-ing... going... gone.", "de": "Flamingo... gehen... gegangen"}
    },
    "100888": {
      "name": "Following the Trail",
      "type": "primary",
      "givers": [528],
      "hero": [3],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points"],
      "requires": [100834],
      "missions": [516],
      "objectives": [
        [0, "Explore the Cliffs of Dohjok with Tahlkora."],
        [0, "Kill the corsair captains to gain more pieces of the Cryptic Scroll."],
        [0, "You have [1...6] of 6 pieces in your possession."],
        [0, "Get the last piece of the Cryptic Scroll from Captain Mindhebeh on the Cliffs of Dohjok."],
        [0, "See Savage Nunbe for your reward."]
      ],
      "wiki": {"en": "Following the Trail", "de": "Eine heiße Spur"}
    },
    "100889": {
      "name": "For Your Ears Only",
      "type": "secondary",
      "givers": [684],
      "xp": 1500,
      "gold": 200,
      "requires": [100955],
      "next": [100924],
      "objectives": [
        [0, "Find Sergeant Bokkun in Sebelkeh Basilica. He'll know where the heket are."],
        [0, "Eavesdrop on the heket warrior's conversations. Glean information about the upcoming heket attacks."],
        [0, "Gather more details about the arriving shipment."],
        [0, "See Commander Tanmod for your reward."]
      ],
      "wiki": {"en": "For Your Ears Only", "de": "Nur für Eure Ohren bestimmt"}
    },
    "100890": {
      "name": "For a Price",
      "type": "primary",
      "givers": [565],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "requires": [100950],
      "next": [100953],
      "objectives": [
        [0, "Meet Margrid the Sly on the Marga Coast."],
        [0, "Collect the map of Gandara from Unlucky Simon."],
        [0, "Strong-arm Shifty Lem until he gives up the map."],
        [0, "See Margrid the Sly for your reward."]
      ],
      "wiki": {"en": "For a Price", "de": "Für einen Preis"}
    },
    "100891": {
      "name": "Forgotten Retribution",
      "type": "secondary",
      "givers": [372],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "objectives": [
        [0, "Kill 40 Margonites. You have destroyed [0...40] Margonite[s]."],
        [0, "See Vissh Rakissh for your reward."]
      ],
      "wiki": {"en": "Forgotten Retribution", "de": "Vergessene Rache"}
    },
    "100892": {
      "name": "Foundry Breakout",
      "type": "instance",
      "givers": [703],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "objectives": [
        [0, "The Forgotten prisoners must survive."],
        [0, "Find and free Silzesh."],
        [0, "Release Captain Valkyss."],
        [0, "Locate and release General Yendzarsh."],
        [0, "Escape through the back exit to the Foundry."],
        [0, "Defeat the Black Beast of Arrgh and his minions."],
        [0, "See General Yendzarsh for your reward."]
      ],
      "wiki": {"en": "Foundry Breakout", "de": "Raus aus dem Inferno"}
    },
    "100893": {
      "name": "Fury of a Grieving Heart",
      "type": "secondary",
      "givers": [211, 212],
      "xp": 1500,
      "gold": 125,
      "requires": [101067],
      "objectives": [
        [0, "Meet Rohtu in Lahtenda Bog."],
        [0, "Help Rohtu track down and kill the corsairs who killed his mother."],
        [0, "See Rohtu for your reward."]
      ],
      "wiki": {"en": "Fury of a Grieving Heart", "de": "Der Zorn eines trauernden Herzens"}
    },
    "100894": {
      "name": "Gain Goren",
      "type": "secondary",
      "givers": [590],
      "xp": 2500,
      "next": [100988],
      "objectives": [
        [0, "Release Goren from his debt to Prince Bokka the Magnificent."]
      ],
      "rewards": ["Goren joins your party."],
      "wiki": {"en": "Gain Goren", "de": "Goren aufnehmen"}
    },
    "100895": {
      "name": "Gain Jin",
      "type": "secondary",
      "givers": [625],
      "xp": 2500,
      "objectives": [
        [0, "Speak to Field General Hayao and formally accept Jin's oath of service."]
      ],
      "rewards": ["Acolyte Jin joins your party."],
      "wiki": {"en": "Gain Jin", "de": "Jin aufnehmen"}
    },
    "100896": {
      "name": "Gain Margrid",
      "type": "secondary",
      "givers": [658],
      "xp": 2500,
      "requires_missions": [528],
      "objectives": [
        [0, "Make arrangements with Margrid's crew."]
      ],
      "rewards": ["Margrid the Sly joins your party."],
      "wiki": {"en": "Gain Margrid", "de": "Margrid aufnehmen"}
    },
    "100897": {
      "name": "Gain Master of Whispers",
      "type": "secondary",
      "givers": [299],
      "xp": 2500,
      "objectives": [
        [0, "Find the Adept of the Order of Whispers and deliver the Master's commands."]
      ],
      "rewards": ["Master of Whispers joins your party."],
      "wiki": {"en": "Gain Master of Whispers", "de": "Den Meister der Gerüchte aufnehmen"}
    },
    "100898": {
      "name": "Gain Norgu",
      "type": "secondary",
      "givers": [682],
      "xp": 2500,
      "next": [100954],
      "objectives": [
        [0, "Make arrangements with Korvus to perform Norgu's Nightfall."]
      ],
      "rewards": ["Norgu joins your party."],
      "wiki": {"en": "Gain Norgu", "de": "Norgu aufnehmen"}
    },
    "100899": {
      "name": "Gain Olias",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
      "objectives": [
        [0, "Lead a contingent of Lionguard to investigate the disturbances in North Kryta Province."],
        [0, "Defeat the demons attacking Olias."],
        [0, "Get a report on the demon problem from Olias."],
        [0, "Deliver Olias's Letter."],
        [0, "See Lionguard Figo for your reward."]
      ],
      "rewards": ["Olias joins your party."],
      "wiki": {"en": "Gain Olias", "de": "Olias aufnehmen"}
    },
    "100900": {
      "name": "Gain Sousuke",
      "type": "secondary",
      "givers": [730],
      "xp": 2500,
      "objectives": [
        [0, "Speak with General Hayao and formally accept Sousuke's oath of fealty."]
      ],
      "rewards": ["Acolyte Sousuke joins your party."],
      "wiki": {"en": "Gain Sousuke", "de": "Sousuke aufnehmen"}
    },
    "100901": {
      "name": "Garden Chores",
      "type": "secondary",
      "campaign": 3,
      "region": 13,
      "xp": 1000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100970],
      "next": [100958],
      "objectives": [
        [0, "Exterminate the Seborhin Pests."],
        [0, "Kneel to water the garden plants. You have [6...0] more plants to water."],
        [0, "Pick up all fallen leaves. [10...0] leaf piles left."],
        [0, "Carry the leaf bags up the stairs. [3...0] leaf bags left."],
        [0, "See Hedge Wizard Mabai for your reward."]
      ],
      "wiki": {"en": "Garden Chores", "de": "Gartenarbeit"}
    },
    "100902": {
      "name": "Getting Even",
      "type": "secondary",
      "givers": [700],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points", "Ancient Artifact"],
      "requires": [100807],
      "objectives": [
        [0, "Help Kane extract his revenge by destroying Margonite Scouts."],
        [0, "You have killed … of 30 Margonite Scouts."]
      ],
      "wiki": {"en": "Getting Even", "de": "Rache (Quest)"}
    },
    "100903": {
      "name": "Ghosts in the Graveyard",
      "type": "secondary",
      "givers": [604],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires": [100909],
      "objectives": [
        [0, "Pick up the Spiritual Torch and find the Primeval Spirits."],
        [0, "Use the Spiritual Torch to light the way for the Primeaval Spirits back to their graves."],
        [0, "See Necromancer Musseh for your reward."]
      ],
      "wiki": {"en": "Ghosts in the Graveyard", "de": "Heimleuchten"}
    },
    "100904": {
      "name": "Gift of the Djinn",
      "type": "secondary",
      "givers": [579, 580],
      "xp": 4000,
      "gold": 1000,
      "rewards": ["2 Trade Contracts"],
      "objectives": [
        [0, "Meet Library Envoy Chukeht in The Hidden City of Ahdashim."],
        [0, "Defeat the Fire Djinn Lord to acquire its essence."],
        [0, "Defeat the Water Djinn Lord to acquire its essence."],
        [0, "Place the essences in their respective altars inside the vault room."],
        [0, "Flee from the djinn horde!"],
        [0, "See Library Envoy Chukeht for your reward."]
      ],
      "wiki": {"en": "Gift of the Djinn", "de": "Geschenk der Dschinn"}
    },
    "100905": {
      "name": "Good Demon Hunting",
      "type": "secondary",
      "givers": [622],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "objectives": [
        [0, "Seek out the Great Zehtuka in Nightfallen Jahai."],
        [0, "Slay the demon pestering the Great Zehtuka."],
        [0, "Follow the Great Zehtuka"],
        [0, "Draw out \"the Darkness.\""],
        [0, "Kill Zealous Amarantha and her minions."],
        [0, "See Churrazek for your reward."]
      ],
      "wiki": {"en": "Good Demon Hunting", "de": "Jagd auf den Dämonen"}
    },
    "100906": {
      "name": "Goren's Stuff: Part 1",
      "type": "secondary",
      "givers": [591],
      "xp": 2000,
      "requires": [100837],
      "next": [100907],
      "objectives": [
        [0, "Accompany Goren while he finds his weapon."],
        [0, "Accompany Goren while he finds his armor."],
        [0, "Accompany Goren while he finds his most prized possession: a sparkling rock."],
        [0, "Goren must survive."],
        [0, "See Xunlai Agent Momo for your reward."]
      ],
      "rewards": ["Goren joins your party."],
      "wiki": {"en": "Goren's Stuff: Part 1", "de": "Gorens Hab und Gut: Teil 1"}
    },
    "100907": {
      "name": "Goren's Stuff: Part 2",
      "type": "secondary",
      "givers": [592, 593],
      "hero": [2],
      "xp": 2000,
      "gold": 250,
      "requires": [100906],
      "requires_missions": [528],
      "objectives": [
        [0, "Take Goren and his Sparkling Rock to the Hidden City of Ahdashim to hide the rock."],
        [0, "Fight the baby dragon."],
        [0, "Speak to the baby dragon."],
        [0, "See Xunlai Agent Momo for your reward."]
      ],
      "wiki": {"en": "Goren's Stuff: Part 2", "de": "Gorens Hab und Gut: Teil 2"}
    },
    "100908": {
      "name": "Greed and Regret",
      "type": "primary",
      "givers": [584],
      "hero": [12],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [101071],
      "next_missions": [520],
      "missions": [520],
      "objectives": [
        [0, "Search the Halls of Chokhin with Margrid. Look for information on the Hidden City."],
        [0, "Pick up and examine the \"Duality of Lyssa.\""],
        [0, "Defeat the library defenses."],
        [0, "Talk to Goren."],
        [0, "Find Goren in the Mirror of Lyss."],
        [0, "Do the magic dance to gain entrance to the Hidden City of Ahdashim. (Use the /dance emote near the spot marked by Goren.)"],
        [0, "Speak to the Lock of Ahdashim."],
        [0, "See Lock of Ahdashim for your reward."]
      ],
      "wiki": {"en": "Greed and Regret", "de": "Gier und Reue"}
    },
    "100909": {
      "name": "Crypt-ology",
      "type": "secondary",
      "givers": [598, 599],
      "xp": 1500,
      "gold": 125,
      "next": [100903],
      "objectives": [
        [0, "Go to Lahtenda Bog and tell Necromancer Lahse you will be her guide."],
        [0, "Take Necromancer Lahse to the Sunspear Crypts and protect her along the way."],
        [0, "See Necromancer Lahse for your reward."]
      ],
      "wiki": {"en": "Crypt-ology", "de": "Gruft-ologie"}
    },
    "100910": {
      "name": "Guard Rescue",
      "type": "secondary",
      "givers": [240],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100966],
      "next": [100877],
      "objectives": [
        [0, "Travel to the eastern side of Resplendent Makuun. Explore the last known position of the raiding party."],
        [0, "Find the captured guard captain and assess the situation."],
        [0, "Escort the freed guards from the heket lair."],
        [0, "Hand over the freed guards to the rescue party."],
        [0, "See Prince Ahmtur the Mighty for your reward."]
      ],
      "wiki": {"en": "Guard Rescue", "de": "Wächterrettung"}
    },
    "100911": {
      "name": "Heart or Mind: Garden in Danger",
      "type": "primary",
      "givers": [201],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["10 Lightbringer points"],
      "next_missions": [522],
      "missions": [522],
      "objectives": [
        [0, "Bring Koss and find Hedge Wizard Lohhaj in the Nightfallen Garden."],
        [0, "See Master Gardener Kobahl for your reward."]
      ],
      "wiki": {"en": "Heart or Mind: Garden in Danger", "de": "Herz oder Verstand: Garten in Gefahr"}
    },
    "100912": {
      "name": "Heart or Mind: Ronjok in Danger",
      "type": "primary",
      "givers": [201],
      "hero": [9],
      "xp": 2500,
      "gold": 200,
      "rewards": ["10 Lightbringer points"],
      "missions": [523],
      "objectives": [
        [0, "Take Melonni to Ronjok in the Marga Coast and speak with Elder Jonah."],
        [0, "Follow Melonni's directions and investigate the area around Ronjok."],
        [0, "Quell Hahla's nightmares. Defeat the torment demons."],
        [0, "Speak with Dreamer Hahla."],
        [0, "See Dreamer Raja for your reward."]
      ],
      "wiki": {"en": "Heart or Mind: Ronjok in Danger", "de": "Herz oder Verstand: Ronjok in Gefahr"}
    },
    "100913": {
      "name": "Herds to the Slaughter",
      "type": "secondary",
      "givers": [495],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Seek out Herdsman Mehnosi on the Marga Coast."],
        [0, "Protect the cattle while Herdsman Mehnosi moves them to a safer location. At least 3 cows must survive."],
        [0, "See Herdsman Zekanu for your reward."]
      ],
      "wiki": {"en": "Herds to the Slaughter", "de": "Ein guter Hirte"}
    },
    "100914": {
      "name": "Hog Hunt",
      "type": "secondary",
      "givers": [719],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points"],
      "objectives": [
        [0, "Help Nehdukah find an impressive warthog"],
        [0, "Keep Nehdukah safe while he tames the impressive warthog."],
        [0, "Take Nehdukah and the tamed warthog to Yapono and Chitundu."],
        [0, "See Nehdukah for your reward"]
      ],
      "wiki": {"en": "Hog Hunt", "de": "Schweinejagd"}
    },
    "100915": {
      "name": "Holding the Line",
      "type": "secondary",
      "givers": [601],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "next": [100930],
      "objectives": [
        [0, "Aid the Keepers as they defend their position from Margonite forces."],
        [0, "Assist the Keepers as they fend off additional Margonite forces."],
        [0, "See Keeper Kauniss for your reward."]
      ],
      "wiki": {"en": "Holding the Line", "de": "Haltet die Stellung"}
    },
    "100916": {
      "name": "Hole of Istan",
      "type": "primary",
      "givers": [272],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "objectives": [
        [0, "Investigate the fissure on the Plains of Jarin near Kamadan."],
        [0, "Enter the fissure in the Plains of Jarin."],
        [0, "Investigate the Depths beneath Istan."]
      ],
      "wiki": {"en": "Hole of Istan", "de": "Das Loch von Istan"}
    },
    "100917": {
      "name": "Honing your Skills",
      "type": "primary",
      "givers": [649],
      "xp": 500,
      "gold": 250,
      "rewards": ["10 Sunspear Promotion Points"],
      "requires": [100967],
      "next": [100990],
      "objectives": [
        [0, "Speak to Second Spear Binah to enter Kamadan."],
        [0, "Hone your skills by reaching level 5."],
        [0, "See First Spear Dehvad for your reward."]
      ],
      "wiki": {"en": "Honing your Skills", "de": "Ohne Fleiß kein Preis"}
    },
    "100918": {
      "name": "Horde of Darkness",
      "type": "primary",
      "givers": [475],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "requires": [100789],
      "next_missions": [525],
      "missions": [525],
      "objectives": [
        [0, "Teach your great wurm to siege by devouring an elder siege wurm."],
        [0, "Destroy the Horde of Darkness guarding access to the Ruins of Morah by using Junundu Siege."],
        [0, "Strike down the Solitary Colossus with your wurm siege attacks to create a path to the Ruins of Morah."],
        [0, "Speak with Captain Mehhan."],
        [0, "See Captain Mehhan for your reward."]
      ],
      "wiki": {"en": "Horde of Darkness", "de": "Dunkle Horde (Quest)"}
    },
    "100919": {
      "name": "How the Grentches Stole Wintersday",
      "type": "event",
      "givers": [194],
      "event": 13,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "requires": [101077],
      "next": [101021],
      "objectives": [
        [0, "Rendezvous with the Grentch squad in Fahranur, the First City."],
        [0, "Capture the Wintersday stocking by destroying its protectors. [5...0] of 5 groups remain."],
        [0, "See Elder Skruuj for your reward."]
      ],
      "wiki": {"en": "How the Grentches Stole Wintersday", "de": "Als die Grentche den Wintertag stahlen"}
    },
    "100920": {
      "name": "Hunted!",
      "type": "primary",
      "givers": [574],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires_missions": [517],
      "next": [101022],
      "objectives": [
        [0, "Talk to Zudash Dejarin about a place for the Sunspears to hide."],
        [0, "Journey to Ronjok and ask Elder Jonah about a sanctuary for the sundered Sunspears."],
        [0, "Speak with Guardsman Bahsi to gain access to the underground complex."],
        [0, "Clear the area of monsters and establish a Sunspear Command Post."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Hunted!", "de": "Gejagt!"}
    },
    "100921": {
      "name": "Identity Theft",
      "type": "secondary",
      "givers": [614],
      "xp": 500,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points", "Identification Kit (25 uses)", "Battle Commendation"],
      "objectives": [
        [0, "Get information about the shipment of identification kits from Kupekanu at Champion's Dawn."],
        [0, "Recover the lost shipment crate from the band of corsairs at the Cliffs of Dohjok."],
        [0, "See Shatam for your reward."]
      ],
      "wiki": {"en": "Identity Theft", "de": "Identitäts-Diebstahl"}
    },
    "100922": {
      "name": "In Defense of Theatre",
      "type": "secondary",
      "givers": [634],
      "hero": [2],
      "xp": 4000,
      "gold": 400,
      "rewards": ["15 Lightbringer points", "Trade Contract"],
      "requires": [101064],
      "objectives": [
        [0, "Travel to Resplendent Makuun and protect the theatre against the besieging demons."],
        [0, "See Prince Bokka the Magnificient misspelling: extra \"i\" after the \"c\" for your reward."]
      ],
      "wiki": {"en": "In Defense of Theatre", "de": "Verteidigung des Theaters"}
    },
    "100923": {
      "name": "Insatiable Appetite",
      "type": "instance",
      "givers": [490],
      "repeatable": true,
      "rewards": ["Branch of Juni Berries"],
      "objectives": [
        [0, "Feed Toma as many enemies as possible in 3 minutes."]
      ],
      "wiki": {"en": "Insatiable Appetite", "de": "Unstillbarer Appetit"}
    },
    "100924": {
      "name": "Interception",
      "type": "secondary",
      "givers": [684],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100889],
      "next": [100966],
      "objectives": [
        [0, "Meet up with Scout Dehra."],
        [0, "Intercept the weapon shipment."],
        [0, "See Commander Tanmod for your reward."]
      ],
      "wiki": {"en": "Interception", "de": "Reiseunterbrechung"}
    },
    "100925": {
      "name": "Into Chahbek Village",
      "type": "primary",
      "givers": [383],
      "next": [100974],
      "missions": [556],
      "objectives": [
        [0, "Speak with First Spear Jahdugar."],
        [0, "See First Spear Jahdugar for your reward."]
      ],
      "rewards": ["Koss joins your party."],
      "wiki": {"en": "Into Chahbek Village", "de": "Nach Chahbek"}
    },
    "100926": {
      "name": "Into the Fire",
      "type": "secondary",
      "givers": [183, 184],
      "xp": 2500,
      "gold": 200,
      "next": [101030],
      "objectives": [
        [0, "Uncover the fate of The Oddbodies."],
        [0, "Find Thenemi."],
        [0, "Find Garfaz Steelfur."],
        [0, "Find Scout Ahktum."],
        [0, "Find The Lost."],
        [0, "Find Igraine."],
        [0, "Find Captain Yithlis."],
        [0, "See Captain Yithlis for your reward."]
      ],
      "wiki": {"en": "Into the Fire", "de": "Ab ins Getümmel"}
    },
    "100927": {
      "name": "Invasion From Within",
      "type": "secondary",
      "givers": [203],
      "xp": 2500,
      "gold": 200,
      "rewards": ["50 Lightbringer points"],
      "requires": [101047],
      "objectives": [
        [0, "Seek out Rukkassa in Nightfallen Jahai."],
        [0, "Defeat the possessed Rukkassa."],
        [0, "See Keeper Jinyssa for your reward."]
      ],
      "wiki": {"en": "Invasion From Within", "de": "Feinde in den eigenen Reihen"}
    },
    "100928": {
      "name": "Isle of the Dead (Quest)",
      "type": "primary",
      "givers": [235],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points"],
      "requires_missions": [515],
      "next": [100830],
      "objectives": [
        [0, "Seek out Nerashi's Squad."],
        [0, "Hunt down the undead that escaped from the First City. They are drawn to human settlements."],
        [0, "Clear the ancient undead from Issnur Isles. You have [4..0] of 4 groups remaining."],
        [0, "Purge the ancient undead from Mehtani Keys. You have [3..0] of 3 groups remaining."],
        [0, "See First Spear Dehvad for your reward."]
      ],
      "wiki": {"en": "Isle of the Dead (quest)", "de": "Die Insel der Toten"}
    },
    "100929": {
      "name": "Jedur, the Youngest Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
      "objectives": [
        [0, "Search the ruins of Fahranur to find where Nehbawa Wahmeh has hidden the family inheritance."],
        [0, "Jedur Wahmeh must survive to recover his inheritance."],
        [0, "See Healer Zenwa for your reward."]
      ],
      "wiki": {"en": "Jedur, the Youngest Child", "de": "Jedur, der Jüngste"}
    },
    "100930": {
      "name": "Know Thine Enemy",
      "type": "secondary",
      "givers": [601],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "requires": [100915],
      "next": [100856],
      "objectives": [
        [0, "Travel to the Gate of Fear and speak with the Apostate."],
        [0, "See Keeper Kauniss for your reward."]
      ],
      "wiki": {"en": "Know Thine Enemy", "de": "Kennt Eure Feinde"}
    },
    "100931": {
      "name": "Kormir's Crusade",
      "type": "primary",
      "givers": [640],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Lightbringer points"],
      "next": [100820],
      "objectives": [
        [0, "Meet Kormir in the Domain of Fear."],
        [0, "Travel to the Gate of Secrets with Kormir."],
        [0, "See Keeper Halyssi for your reward."]
      ],
      "wiki": {"en": "Kormir's Crusade", "de": "Kormirs Suche"}
    },
    "100932": {
      "name": "Koss Goes Recruiting",
      "type": "secondary",
      "givers": [233],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [101043],
      "objectives": [
        [0, "Recruit a rare material trader."],
        [0, "Talk to Koss."],
        [0, "Take Koss to meet his contact on the Barbarous Shore."],
        [0, "Help Hasahk the Clever defeat the corsairs."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Koss Goes Recruiting", "de": "Koss als Anwerber"}
    },
    "100933": {
      "name": "Koss's Elixir",
      "type": "secondary",
      "givers": [267],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "objectives": [
        [0, "Take Koss to Yohlon Haven and speak with Herbalist Makala about the Elixir of Strength."],
        [0, "Join Herbalist Makala on a zephyr hedger hunt in Arkjok Ward."],
        [0, "Slay a zephyr hedger."],
        [0, "The potion is ready! Talk to Herbalist Makala to obtain it."],
        [0, "Test your newfound strength by slaying Slort Nilbog."],
        [0, "See Herbalist Makala for your reward."]
      ],
      "wiki": {"en": "Koss's Elixir", "de": "Koss' Elixier"}
    },
    "100934": {
      "name": "Last of the Breed",
      "type": "secondary",
      "givers": [328],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "objectives": [
        [0, "The Centaurs need more gray giant tusks. Collect [3...0] more before returning to the village."],
        [0, "See Mirza Veldrunner for your reward."]
      ],
      "wiki": {"en": "Last of the Breed", "de": "Der Letzte seiner Art"}
    },
    "100935": {
      "name": "Leaving a Legacy",
      "type": "primary",
      "givers": [649],
      "xp": 2000,
      "gold": 125,
      "rewards": ["20 Sunspear Promotion Points"],
      "requires": [100851],
      "next": [101027],
      "objectives": [
        [0, "Talk with Quarrymaster Bohanna about manning the excavation."],
        [0, "Meet with Dunkoro on the Cliffs of Dohjok."],
        [0, "Explain the plan to Hamar and start the assault."],
        [0, "Lead Hamar against the skree harpies holding Dohjok quarry. [5...0] of 5 harpy groups remaining."],
        [0, "See Digmaster Gatah for your reward."]
      ],
      "wiki": {"en": "Leaving a Legacy", "de": "Leute für Kormir"}
    },
    "100936": {
      "name": "Loyal 'til the End",
      "type": "secondary",
      "givers": [676],
      "xp": 1500,
      "gold": 25,
      "rewards": ["15 Sunspear Promotion Points"],
      "objectives": [
        [0, "Go with Dzaga and his band of smugglers to the rendezvous."],
        [0, "Break up the deal and hand out some Sunspear justice."],
        [0, "Kill Dzaga and Sakku, and put an end to this smuggling ring!"],
        [0, "See Churrlan for your reward."]
      ],
      "wiki": {"en": "Loyal 'til the End", "de": "Treue oder Gold"}
    },
    "100937": {
      "name": "Mad Little Pony",
      "type": "event",
      "givers": [242],
      "event": 11,
      "xp": 2000,
      "gold": 1000,
      "rewards": ["50 Trick-or-Treat Bags"],
      "objectives": [
        [0, "Meet the Emissary outside of Venta Cemetery."],
        [0, "Search for the invisible pony."],
        [0, "Keep searching for the invisible pony."],
        [0, "That pony's got to be around here somewhere."],
        [0, "Where the heck is this stupid pony?!"],
        [0, "When I find this pony, Joko's minions are the last thing it should be worried about."],
        [0, "Defeat Palawa Joko's Elite Pony-Hunting Squad."],
        [0, "See Emissary of King Thorn of Kryta for your reward."]
      ],
      "wiki": {"en": "Mad Little Pony", "de": "Verrücktes kleines Pony"}
    },
    "100938": {
      "name": "Mallyx the Unyielding (Quest)",
      "type": "secondary",
      "givers": [653, 654, 655, 656],
      "xp": 30000,
      "rewards": [
        "2,000 Lightbringer points",
        "Margonite Gemstone",
        "Stygian Gemstone",
        "Titan Gemstone",
        "Torment Gemstone"
      ],
      "objectives": [
        [0, "Go to the City of Torc'qua and destroy Lord Jadoth."],
        [0, "Go to Ravenheart Gloom and destroy the Greater Darkness."],
        [0, "Go to The Foundry of Failed Creations and destroy the Fury."],
        [0, "Go to the Stygian Veil and destroy the Dreadspawn Maw."],
        [0, "Report your success in defeating the Lords of Anguish to High Priest Zhellix."],
        [0, "Speak to High Priest Zhellix to commence the assault on the Ebony Citadel of Mallyx the Unyielding."],
        [0, "Seek out and destroy Mallyx the Unyielding in his Ebony Citadel."],
        [0, "See High Priest Zhellix for your reward."]
      ],
      "wiki": {"en": "Mallyx the Unyielding (quest)", "de": "Mallyx der Unnachgiebige (Quest)"}
    },
    "100939": {
      "name": "Map-Travel Inventor",
      "type": "secondary",
      "givers": [412],
      "xp": 250,
      "gold": 50,
      "objectives": [
        [0, "Map travel to Kamadan and speak to Alekaya."],
        [0, "See Alekaya for your reward."]
      ],
      "wiki": {"en": "Map-Travel Inventor", "de": "Die Kartenerfinderin"}
    },
    "100940": {
      "name": "Material Girl",
      "type": "secondary",
      "givers": [101],
      "xp": 500,
      "gold": 100,
      "rewards": ["5 Sunspear Promotion Points", "Expert Salvage Kit (25 uses)"],
      "objectives": [
        [0, "Check on Pelei on the Plains of Jarin and see if she's safe."],
        [0, "Help Pelei by slaying 10 Killer Iboga. You have slain [0...10] of 10 Killer Iboga."],
        [0, "Inform Pelei that the area is now safe from Killer Iboga."],
        [0, "See Kahlim for your reward."]
      ],
      "wiki": {"en": "Material Girl", "de": "Fleißiges Mädchen"}
    },
    "100941": {
      "name": "Melonni Goes Recruiting",
      "type": "secondary",
      "givers": [233],
      "hero": [9],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [101043],
      "objectives": [
        [0, "Recruit a rare material trader."],
        [0, "Talk to Melonni."],
        [0, "Escort Melonni to meet her contact in the Sunward Marches."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Melonni Goes Recruiting", "de": "Melonni als Anwerberin"}
    },
    "100942": {
      "name": "Melonni's Meditations",
      "type": "secondary",
      "givers": [276],
      "hero": [9],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Lead Melonni through the Marga Coast as she attempts to commune with the natural world."],
        [0, "Defeat the creatures that attack when Melonni prays by the pond."],
        [0, "Defeat the creatures that attack when Melonni prays by the rock formation."],
        [0, "Defeat the creatures that attack when Melonni prays by the dying tree."],
        [0, "See Elder Jonah for your reward."]
      ],
      "wiki": {"en": "Melonni's Meditations", "de": "Melonni meditiert"}
    },
    "100943": {
      "name": "Mirza's Last Stand",
      "type": "secondary",
      "givers": [328],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "requires": [100849],
      "requires_missions": [458],
      "next": [100788],
      "objectives": [
        [0, "Defend the Centaur Village. You have [5...0] groups of Kournan troops remaining."],
        [0, "Mirza Veldrunner must survive."],
        [0, "See Mirza Veldrunner for your reward."]
      ],
      "wiki": {"en": "Mirza's Last Stand", "de": "Mirzas letztes Gefecht"}
    },
    "100944": {
      "name": "Misela, the Middle Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
      "objectives": [
        [0, "Search the ruins of Fahranur to find where Nehbawa Wahmeh has hidden the family inheritance."],
        [0, "Misela Wahmeh must survive to recover her inheritance."],
        [0, "See Healer Zenwa for your reward."]
      ],
      "wiki": {"en": "Misela, the Middle Child", "de": "Misela, die Zweitgeborene"}
    },
    "100945": {
      "name": "Missing Shipment",
      "type": "secondary",
      "givers": [103],
      "xp": 500,
      "gold": 100,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100826],
      "objectives": [
        [0, "Find the shipment of ink somewhere on the Plains of Jarin."],
        [0, "Bring the box of ink back to Kailona and collect your reward."]
      ],
      "wiki": {"en": "Missing Shipment", "de": "Fehlende Lieferung"}
    },
    "100946": {
      "name": "Moa'vu'Kaal, Awakened",
      "type": "secondary",
      "givers": [394],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [101066],
      "next": [100827],
      "objectives": [
        [0, "Speak to Elder Belin to learn more about Moa'vu'Kaal."],
        [0, "Find and stop the skale performing the summoning ritual."],
        [0, "Destroy Moa'vu'Kaal."],
        [0, "Warn Elder Jurdu in Beknur Harbor about the skale activity near his village."]
      ],
      "wiki": {"en": "Moa'vu'Kaal, Awakened", "de": "Die Erweckung des Moa'vu'Kaal"}
    },
    "100947": {
      "name": "Money Back Guarantee",
      "type": "secondary",
      "givers": [575, 576],
      "rewards": ["Margonite Gemstone", "Stygian Gemstone", "Titan Gemstone", "Torment Gemstone"],
      "requires": [100884],
      "objectives": [
        [0, "Speak to Chaplain Phyratyss in the Gate of Anguish."]
      ],
      "wiki": {"en": "Money Back Guarantee", "de": "Geld-zurück-Garantie"}
    },
    "100948": {
      "name": "Money on the Side",
      "type": "secondary",
      "givers": [676],
      "xp": 500,
      "gold": 200,
      "objectives": [
        [0, "Go with Dzaga and his band of smugglers to the rendezvous."],
        [0, "Watch the deal go down and make sure it goes smoothly."],
        [0, "Kill the treacherous Sakku and his cronies!"],
        [0, "See Dzaga for your reward."]
      ],
      "wiki": {"en": "Money on the Side", "de": "Nebeneinkünfte"}
    },
    "100949": {
      "name": "Mutu, the Oldest Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
      "objectives": [
        [0, "Search the ruins of Fahranur to find where Nehbawa Wahmeh has hidden the family inheritance."],
        [0, "Mutu Wahmeh must survive to recover his inheritance."],
        [0, "See Healer Zenwa for your reward."]
      ],
      "wiki": {"en": "Mutu, the Oldest Child", "de": "Mutu, der Erstgeborene"}
    },
    "100950": {
      "name": "Mysterious Message (Nightfall quest)",
      "type": "primary",
      "givers": [413],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "next": [100992, 100890],
      "objectives": [
        [0, "Travel to the rendezvous point on the Jahai Bluffs to discover the origin of the mysterious message."],
        [0, "See Whispers Adept for your reward."]
      ],
      "wiki": {"en": "Mysterious Message (Nightfall quest)", "de": "Rätselhafte Nachricht (Nightfall)"}
    },
    "100951": {
      "name": "Need More Stuff",
      "type": "secondary",
      "givers": [246],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "Belt Pouch"],
      "objectives": [
        [0, "Collect 2 Juvenile Termite Legs and bring them back to Nenah. You have collected x of 2 Juvenile Termite Legs."],
        [0, "Trade your Juvenile Termite Legs to Nenah for a Belt Pouch."],
        [0, "See Nenah [Collector] for your reward."]
      ],
      "wiki": {"en": "Need More Stuff", "de": "Braucht mehr Sachen"}
    },
    "100952": {
      "name": "Never Fight Alone",
      "type": "secondary",
      "givers": [644, 645],
      "xp": 250,
      "gold": 25,
      "objectives": [
        [0, "Add at least one henchman to you party and speak to Jibehr."]
      ],
      "wiki": {"en": "Never Fight Alone", "de": "Kämpft niemals allein"}
    },
    "100953": {
      "name": "No Me, No Kormir",
      "type": "primary",
      "givers": [688],
      "xp": 2500,
      "gold": 200,
      "requires": [100890],
      "next_missions": [460],
      "missions": [460],
      "objectives": [
        [0, "Show the Map of Gandara to Jack of Truths in Pogahn Passage."],
        [0, "Waylay a squad of Kournan guards and \"borrow\" their armor."],
        [0, "Don the Kournan armor."],
        [0, "See Jack of Truths for your reward."]
      ],
      "rewards": ["Margrid the Sly joins your party."],
      "wiki": {"en": "No Me, No Kormir", "de": "Ohne mich keine Kormir"}
    },
    "100954": {
      "name": "Norgu's Nightfall",
      "type": "secondary",
      "givers": [683],
      "hero": [1],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [101036],
      "requires_missions": [528],
      "objectives": [
        [0, "Watch \"Norgu's Nightfall\" while it is performed for Academy consideration."],
        [0, "Find out if \"Norgu's Nightfall\" gets nominated."],
        [0, "Attend the Entertainment Academy awards show."],
        [0, "Receive the \"Greatest Play in Vabbi and, Indeed, the Whole World\" award."],
        [0, "See Prince Bokka the Magnificent for your reward."]
      ],
      "wiki": {"en": "Norgu's Nightfall", "de": "Norgus Finsternis"}
    },
    "100955": {
      "name": "Old Friends",
      "type": "secondary",
      "givers": [195],
      "xp": 1000,
      "gold": 150,
      "next": [100889],
      "objectives": [
        [0, "Speak with Sergeant Bokkun about the heket rumor."],
        [0, "See Commander Tanmod for your reward."]
      ],
      "wiki": {"en": "Old Friends", "de": "Alte Freunde"}
    },
    "100956": {
      "name": "Old Woman River",
      "type": "secondary",
      "givers": [760],
      "xp": 2500,
      "gold": 200,
      "requires_missions": [459],
      "objectives": [
        [0, "Find the river ghost."],
        [0, "Cleanse the area of Kournans. [5...0] groups of Kournans remain."],
        [0, "See Yartu for your reward."]
      ],
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Old Woman River", "de": "Unten am Fluss"}
    },
    "100957": {
      "name": "One Good Turn Deserves Another",
      "type": "secondary",
      "givers": [520],
      "xp": 500,
      "gold": 50,
      "rewards": ["Official Papers"],
      "requires": [100804],
      "next": [101053],
      "objectives": [
        [0, "Deliver to Captain Gudur on the Plains of Jarin the proposed Sunspear duties needed during the visits of the diplomats from Kourna and Vabbi."],
        [0, "Inform Elder Belin in the Zehlon Reach of the need for fresh game at the scheduled banquet."],
        [0, "Speak with Stonecutter Ged on the Cliffs of Dohjok about meeting with the representative from the Wilderness of Bahdza."],
        [0, "See Clerk Arlon for your reward."]
      ],
      "wiki": {"en": "One Good Turn Deserves Another", "de": "Eine Hand wäscht die andere"}
    },
    "100958": {
      "name": "One Man's Dream",
      "type": "secondary",
      "givers": [534],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100901],
      "objectives": [
        [0, "Meet Hedge Wizard Mabai in the Forum Highlands."],
        [0, "Seek the wish grantor using the clues in the ancient parchment."],
        [0, "Find Hedge Wizard Mabai in the Halls of Chokhin."]
      ],
      "wiki": {"en": "One Man's Dream", "de": "Eines Mannes Traum"}
    },
    "100959": {
      "name": "Open Season",
      "type": "secondary",
      "givers": [601],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Lightbringer points"],
      "requires": [100856],
      "objectives": [
        [0, "Find The Hunter within the Domain of Secrets."],
        [0, "Defeat the Hunter. Be mindful of the Pack that guards him."],
        [0, "See Keeper Kauniss for your reward."]
      ],
      "wiki": {"en": "Open Season", "de": "Jagdsaison (Quest)"}
    },
    "100960": {
      "name": "Open the Flood Gates of Death",
      "type": "event",
      "givers": [242],
      "event": 11,
      "xp": 10000,
      "gold": 1500,
      "rewards": ["100 Trick-or-Treat Bags"],
      "requires": [101049],
      "next": [101029],
      "objectives": [
        [0, "Travel to Joko's Domain and challenge Palawa Joko."],
        [0, "Kill Joko's minions quickly enough to fill the Kill-O-Meter."],
        [0, "See Emissary of King Thorn of Kryta for your reward."]
      ],
      "wiki": {"en": "Open the Flood Gates of Death", "de": "Öffnet die Schleusen des Todes"}
    },
    "100961": {
      "name": "Out of Kourna",
      "type": "secondary",
      "givers": [624],
      "xp": 1,
      "objectives": [
        [0, "Protect the crafters while they make their way to Dajkah Inlet"],
        [0, "See Stonemason Tagor for your reward"]
      ],
      "wiki": {"en": "Out of Kourna", "de": "Jenseits von Kourna"}
    },
    "100962": {
      "name": "Pilgrimage",
      "type": "secondary",
      "givers": [693],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "objectives": [
        [0, "Escort the ghost Ganji to the spot Krahm fell."],
        [0, "Guide the wandering spirits to Allura's last resting place."],
        [0, "Walk to the spot where Shandara and her daughter were lost."],
        [0, "Reunite the spirits with Shahin to complete the pilgrimage."]
      ],
      "wiki": {"en": "Pilgrimage", "de": "Pilgerreise"}
    },
    "100963": {
      "name": "Plague in Cantha",
      "type": "primary",
      "givers": [523],
      "travel": 2,
      "xp": 2500,
      "gold": 200,
      "requires": [101041],
      "next": [100780],
      "objectives": [
        [0, "Speak to Funwa Shento in Kamadan, Jewel of Istan to be directed to Mhenlo."],
        [0, "Speak to Mhenlo at the Consulate Docks to learn about what is occurring in Cantha."],
        [0, "Tell Mhenlo when you are ready to leave for Cantha."],
        [0, "Find Dockhand Quangnai to learn more about the situation in Cantha."]
      ],
      "wiki": {"en": "Plague in Cantha", "de": "Eine Seuche in Cantha"}
    },
    "100964": {
      "name": "Plague of Frogs",
      "type": "secondary",
      "givers": [564],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "objectives": [
        [0, "Kill the heket in the Garden of Seborhin. You have X of 10 groups remaining."],
        [0, "See Horticulturist Hinon for your reward."]
      ],
      "wiki": {"en": "Plague of Frogs", "de": "Froschplage"}
    },
    "100965": {
      "name": "Pledge of the Merchant Princes",
      "type": "primary",
      "givers": [201],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "missions": [521],
      "objectives": [
        [0, "The Princes of Vabbi await you in the Halls of Chokhin."],
        [0, "Defeat the invading forces and protect the messenger of Lyssa."],
        [0, "Speak with the messenger of Lyssa."],
        [0, "Hurry to the Mirror of Lyss and investigate what's happening at the Grand Court of Sebelkeh."],
        [0, "Listen to Morgahn's explanation."],
        [0, "See Head Priest Vahmani for your reward."]
      ],
      "wiki": {"en": "Pledge of the Merchant Princes", "de": "Der Schwur der Handelsfürsten"}
    },
    "100966": {
      "name": "Population Control",
      "type": "secondary",
      "givers": [240],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100924],
      "next": [100910],
      "objectives": [
        [0, "Glean information about the harpies from Captain Jafahni."],
        [0, "Scavenge the wilderness for Screecher and Scratcher. Kill them to reduce harpy morale."],
        [0, "See Prince Ahmtur the Mighty for your reward."]
      ],
      "wiki": {"en": "Population Control", "de": "Bevölkerungskontrolle"}
    },
    "100967": {
      "name": "Primary Training",
      "type": "primary",
      "givers": [649],
      "xp": 250,
      "skills": [
        28,
        31,
        67,
        68,
        76,
        80,
        85,
        92,
        109,
        135,
        143,
        154,
        172,
        176,
        197,
        198,
        214,
        222,
        252,
        277,
        301,
        305,
        307,
        313,
        336,
        343,
        348,
        349,
        351,
        382,
        392,
        411,
        433,
        436,
        455,
        459,
        1493,
        1507,
        1526,
        1535,
        1539,
        1544,
        1557,
        1578,
        1585,
        1600,
        1605,
        1776
      ],
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100917],
      "objectives": [
        [0, "Travel to the Sunspear encampment near Chahbek Village."],
        [0, "Speak to at least one expert ."],
        [0, "See First Spear Dehvad for your reward."]
      ],
      "wiki": {"en": "Primary Training", "de": "Primärtraining"}
    },
    "100968": {
      "name": "Proof of Courage",
      "type": "secondary",
      "givers": [666],
      "xp": 500,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points"],
      "objectives": [
        [0, "Meet Poturi on the Plains of Jarin."],
        [0, "Retrieve the sword from the injured Corsair."],
        [0, "Speak to Poturi for your reward."]
      ],
      "wiki": {"en": "Proof of Courage", "de": "Mutprobe"}
    },
    "100969": {
      "name": "Protect the Learned",
      "type": "secondary",
      "givers": [348],
      "xp": 4000,
      "gold": 400,
      "rewards": ["10 Lightbringer points", "Trade Contract"],
      "requires": [101038],
      "objectives": [
        [0, "Alert the scholars about the assault on the Halls of Chokhin. You have spoken to 0...8 of 8 scholars."],
        [0, "Protect the scholars from the advancing Margonite forces. At least 4 scholars must survive. 8...0 of 8 scholars are still alive."],
        [0, "Eliminate the groups of Margonites attacking Chokhin. 12...0 of 12 groups remain."],
        [0, "See Library Envoy Chukeht for your reward."]
      ],
      "wiki": {"en": "Protect the Learned", "de": "Die Gelehrten beschützen"}
    },
    "100970": {
      "name": "Puzzling Parchment",
      "type": "secondary",
      "givers": [292],
      "xp": 3000,
      "gold": 300,
      "rewards": ["Trade Contract"],
      "requires": [100852],
      "next": [100901],
      "objectives": [
        [0, "Seek the meaning of the ancient parchment."]
      ],
      "wiki": {"en": "Puzzling Parchment", "de": "Rätselhafte Pergamentschrift"}
    },
    "100971": {
      "name": "Quality Steel",
      "type": "secondary",
      "givers": [699],
      "xp": 500,
      "gold": 20,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "2 Iron Ingots", "2 Wood Planks"],
      "objectives": [
        [0, "Deliver the custom sword to Castellan Puuba at the Sunspear Great Hall."],
        [0, "Meet up with Castellan Puuba on the Plains of Jarin."],
        [0, "Fight beside Castellan Puuba as he tries out his new, customized sword. You have slain x of 10 creatures."],
        [0, "See Chorben [Weapons] for your reward."]
      ],
      "wiki": {"en": "Quality Steel", "de": "Qualitätsstahl"}
    },
    "100972": {
      "name": "Quarry Quandry",
      "type": "secondary",
      "givers": [488],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100973],
      "objectives": [
        [0, "Speak to Miner Tonabanza at the Cliffs of Dohjok and tell him you will stand guard while he continues mining."],
        [0, "Protect the miner if he gets attacked."],
        [0, "Speak to Miner Tonabanza."],
        [0, "See Quarrymaster Bohanna for your reward."]
      ],
      "wiki": {"en": "Quarry Quandry", "de": "Stunk im Steinbruch"}
    },
    "100973": {
      "name": "Queen of the Quarry",
      "type": "secondary",
      "givers": [488],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100972],
      "objectives": [
        [0, "Meet the Sunspear squad at the Cliffs of Dohjok"],
        [0, "Kill all the mandragor in the quarry"],
        [0, "See Quarrymaster Bohanna for your reward"]
      ],
      "wiki": {"en": "Queen of the Quarry", "de": "Königin des Steinbruchs"}
    },
    "100974": {
      "name": "Quiz the Recruits",
      "type": "primary",
      "givers": [697, 698],
      "xp": 250,
      "next_missions": [556],
      "missions": [556],
      "objectives": [
        [0, "Speak to the first Sunspear Recruit."],
        [0, "Speak to the second Sunspear Recruit."],
        [0, "Speak to the third Sunspear Recruit."],
        [0, "See First Spear Jahdugar for your reward."]
      ],
      "wiki": {"en": "Quiz the Recruits", "de": "Prüft die Rekruten"}
    },
    "100975": {
      "name": "Raising an Army",
      "type": "secondary",
      "givers": [218],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "requires": [100981],
      "objectives": [
        [0, "Escort Hareh to the ancient graveyard in the Sulfurous Wastes."],
        [0, "Visit gravesites and help Hareh summon the undead. You have visited 0 of 5 gravesites."],
        [0, "Protect Hareh while he performs the ritual to raise the undead."],
        [0, "See Infantryman Hareh for your reward."]
      ],
      "wiki": {"en": "Raising an Army", "de": "Aufbau einer Armee"}
    },
    "100976": {
      "name": "Rally The Princes",
      "type": "primary",
      "givers": [712],
      "xp": 4000,
      "gold": 400,
      "rewards": ["2 Trade Contracts"],
      "requires_missions": [427],
      "next_missions": [518],
      "missions": [518],
      "objectives": [
        [0, "Travel to Yatendi Canyons and find Kehanni Nutu, priestess of Lyssa."],
        [0, "Meet with the Seeker of Whispers."],
        [0, "Meet Kehanni in Vehtendi Valley. Obtain an invitation to the Festival of Lyss."],
        [0, "Travel through the Forum Highlands. Meet Priestess Haila."],
        [0, "Wash the dirt, grime, and heket blood from your armor and gear in the Font of Lyss."],
        [0, "Speak with Priestess Haila to gain a sneak peek at the party."],
        [0, "See Event Planner Kazsha for your reward."]
      ],
      "wiki": {"en": "Rally The Princes", "de": "Sammelt die Fürsten"}
    },
    "100977": {
      "name": "Rally the Recruits (Tutorial)",
      "type": "primary",
      "givers": [383],
      "xp": 2000,
      "skills": [322],
      "next": [100925],
      "objectives": [
        [0, "Travel to the Sunspear watch post."],
        [0, "Travel to Chahbek Village."],
        [0, "See Kormir for your reward."]
      ],
      "wiki": {"en": "Rally the Recruits (Tutorial)", "de": "Die Rekruten abholen (Tutorial)"}
    },
    "100978": {
      "name": "Re-enlist Rojis",
      "type": "secondary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires": [100983],
      "objectives": [
        [0, "Find Rojis on Issnur Isles and convince him to rejoin the Sunspears."],
        [0, "Find the nest of mandragor destroying Rojis' field and eliminate them."],
        [0, "Tell Rojis the Mandragor are dead."],
        [0, "See Castellan Puuba for your reward."]
      ],
      "wiki": {"en": "Re-enlist Rojis", "de": "Rojis Rückkehr"}
    },
    "100979": {
      "name": "Reclaiming the Temple",
      "type": "secondary",
      "givers": [711, 228],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [101039],
      "objectives": [
        [0, "Meet Lieutenant Murunda and her soldiers in the Mirror of Lyss."],
        [0, "Kill the demons infesting the Sebelkeh Basilica. 7...0 of 7 groups remain."],
        [0, "See Lieutenant Murunda for your reward."]
      ],
      "wiki": {"en": "Reclaiming the Temple", "de": "Rückeroberung des Tempels"}
    },
    "100980": {
      "name": "Refuse the King",
      "type": "secondary",
      "givers": [298],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "objectives": [
        [0, "Defeat Primeval King Jahnus and his royal guards."],
        [0, "Find Myrish, the leader of the slave spirits, and tell him of King Jahnus' demise."]
      ],
      "wiki": {"en": "Refuse the King", "de": "Den König abweisen"}
    },
    "100981": {
      "name": "Requiem for a Brain",
      "type": "secondary",
      "givers": [218],
      "xp": 2500,
      "gold": 200,
      "rewards": ["1 Ancient Artifact"],
      "requires": [100918],
      "next": [100975],
      "objectives": [
        [0, "Travel to the ancient temple in the Sulfurous Wastes."],
        [0, "Retrieve the ancient tome of knowledge."],
        [0, "Return to Infantryman Hareh with the ancient tome."],
        [0, "See Infantryman Hareh for your reward."]
      ],
      "wiki": {"en": "Requiem for a Brain", "de": "Requiem für ein Gehirn"}
    },
    "100982": {
      "name": "Return of the Undead King",
      "type": "secondary",
      "givers": [429],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "objectives": [
        [0, "Stop the rampaging undead in Joko's Domain. 6...0 groups of undead remain."],
        [0, "See Palawa Joko for your reward."]
      ],
      "wiki": {"en": "Return of the Undead King", "de": "Die Rückkehr des untoten Königs"}
    },
    "100983": {
      "name": "Rising Suns",
      "type": "secondary",
      "givers": [219],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires_missions": [515],
      "next": [100978],
      "objectives": [
        [0, "Talk to three potential recruits in Zehlon Reach and convince them to join the Sunspears."],
        [0, "Talk to Morik in Zehlon Reach and ask him to join the Sunspears."],
        [0, "Talk to Dahni about Morik's dilemma."],
        [0, "Tell Morik that Dahni is leaving to join the Sunspears."],
        [0, "Talk to Ando and ask him to join the Sunspears."],
        [0, "Kill the beast threatening Ando's family."],
        [0, "Tell Ando that the threat is gone."],
        [0, "See Castellan Puuba for your reward"]
      ],
      "wiki": {"en": "Rising Suns", "de": "Aufgehende Sonnen"}
    },
    "100984": {
      "name": "Rising in the Ranks: First Spear",
      "type": "attribute",
      "givers": [411],
      "xp": 2000,
      "rewards": ["15 Attribute points"],
      "requires": [100985],
      "objectives": [
        [0, "Gain the rank of First Spear."],
        [0, "Complete quests or help Sunspear scouts with conscription orders to earn Sunspear promotion points."],
        [0, "See Runduk [Sunspear Rank Officer] for your reward."]
      ],
      "wiki": {"en": "Rising in the Ranks: First Spear", "de": "Die Karriereleiter: Erster Speer"}
    },
    "100985": {
      "name": "Rising in the Ranks: Master Sergeant",
      "type": "attribute",
      "givers": [411],
      "xp": 2000,
      "rewards": ["15 Attribute points"],
      "next": [100984],
      "objectives": [
        [0, "Gain the rank of Master Sergeant."],
        [0, "Complete quests or help Sunspear scouts with conscription orders to earn Sunspear promotion points."],
        [0, "See Runduk [Sunspear Rank Officer] for your reward."]
      ],
      "wiki": {"en": "Rising in the Ranks: Master Sergeant", "de": "Die Karriereleiter: Hauptfeldwebel"}
    },
    "100986": {
      "name": "Save the Reindeer",
      "type": "event",
      "givers": [558],
      "event": 13,
      "xp": 5000,
      "gold": 250,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "next": [100883],
      "objectives": [
        [0, "Meet with the Frost Maiden in Fahranur, the First City."],
        [0, "Find the kidnapped reindeer in Fahranur, the First City. You have found [0...2] of the 2 groups of kidnapped reindeer."],
        [0, "Return the reindeer to the Frost Maiden."],
        [0, "Meet with the Frost Maiden in Mehtani Keys."],
        [0, "Find the kidnapped reindeer in Mehtani Keys. You have found [0...2] of the 2 groups of kidnapped reindeer."],
        [0, "Return the reindeer to the Frost Maiden."],
        [0, "See Grandfather Kringle for your reward."]
      ],
      "wiki": {"en": "Save the Reindeer", "de": "Rettet die Rentiere"}
    },
    "100987": {
      "name": "Scholarly Affairs",
      "type": "secondary",
      "givers": [577],
      "xp": 250,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "objectives": [
        [0, "Meet Zerai the Learner on the Cliffs of Dohjok."],
        [0, "Collect 12 Iboga blossoms by slaying Beautiful Iboga. You have collected [0...12] of 12 Iboga blossoms."],
        [0, "Escort Zerai the Learner to Jokanur Diggings."],
        [0, "See Midauha for your reward."]
      ],
      "wiki": {"en": "Scholarly Affairs", "de": "Gelehrte Angelegenheiten"}
    },
    "100988": {
      "name": "Scorched Earth (Nightfall quest)",
      "type": "secondary",
      "givers": [274],
      "hero": [2],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100894],
      "next": [101064],
      "objectives": [
        [0, "Speak with Diji and find out what is happening in Vehtendi Valley."],
        [0, "Investigate the area around the disturbance and eliminate any hostiles."],
        [0, "Tell Diji the hostile creatures have been destroyed."],
        [0, "See Prince Bokka the Magnificent for your reward."]
      ],
      "wiki": {"en": "Scorched Earth (Nightfall quest)", "de": "Verbrannte Erde"}
    },
    "100989": {
      "name": "Second Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "requires": [100885],
      "next": [101048],
      "objectives": [
        [0, "Speak with Misela Wahmeh to learn if she is worthy of her father's inheritance."],
        [0, "Escort Misela Wahme while she gathers Mosu Reeds to make a cure for the swamp fever."],
        [0, "See Healer Zenwa for your reward."]
      ],
      "wiki": {"en": "Second Born", "de": "Die Zweitgeborene"}
    },
    "100990": {
      "name": "Secondary Training",
      "type": "primary",
      "givers": [235],
      "xp": 500,
      "gold": 200,
      "skills": [
        28,
        31,
        67,
        68,
        76,
        80,
        85,
        92,
        109,
        135,
        143,
        154,
        172,
        176,
        197,
        198,
        214,
        222,
        252,
        277,
        301,
        305,
        307,
        313,
        336,
        343,
        348,
        349,
        351,
        382,
        392,
        411,
        433,
        436,
        455,
        459,
        1493,
        1507,
        1526,
        1535,
        1539,
        1544,
        1557,
        1578,
        1585,
        1600,
        1605,
        1776
      ],
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100917],
      "next": [100851],
      "objectives": [
        [0, "Travel to the Sunspear encampment near Chahbek Village."],
        [0, "Speak to at least one non-[primary profession] expert."],
        [0, "See First Spear Devhad for your reward."]
      ],
      "wiki": {"en": "Secondary Training", "de": "Sekundärtraining"}
    },
    "100991": {
      "name": "Secret Passage",
      "type": "secondary",
      "givers": [425],
      "xp": 1000,
      "gold": 100,
      "objectives": [
        [0, "Help Hatuk kill the Great Fire Flower and pass his rite of passage into manhood."]
      ],
      "wiki": {"en": "Secret Passage", "de": "Die Reifeprüfung"}
    },
    "100992": {
      "name": "Secrets in the Shadow",
      "type": "primary",
      "givers": [572],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "requires": [100950],
      "next": [101052],
      "objectives": [
        [0, "Meet with Dehjah, an ally of the Master of Whispers."],
        [0, "Destroy the demons from the earth. [3...0] of 3 groups remain."],
        [0, "See Master of Whispers for your reward."]
      ],
      "wiki": {"en": "Secrets in the Shadow", "de": "Geheimnisse in den Schatten"}
    },
    "100993": {
      "name": "Securing Champion's Dawn",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [100831],
      "next": [100800],
      "objectives": [
        [0, "Rally the Sunspear Scouts. Brief Elite Scout Zusoh on the situation."],
        [0, "See Quarrymaster Bohanna for your reward."]
      ],
      "wiki": {"en": "Securing Champion's Dawn", "de": "Champions Erwachen sichern"}
    },
    "100994": {
      "name": "She Hungers",
      "type": "secondary",
      "givers": [605],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "requires": [100789],
      "objectives": [
        [0, "Collect heket legs to sate Rokel's unending hunger. You have collected [0...10] of 10 heket legs."],
        [0, "See Bonesmith Rokel for your reward."]
      ],
      "wiki": {"en": "She Hungers", "de": "Heißhunger"}
    },
    "100995": {
      "name": "Signs and Portents",
      "type": "primary",
      "givers": [789],
      "hero": [6],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "missions": [515],
      "objectives": [
        [0, "Koss must be present to continue."],
        [0, "Take Koss and meet Emissary Dajmir in Zehlon Reach."],
        [0, "Find and speak with Melonni."],
        [0, "Travel with Melonni to meet Kormir."],
        [0, "Examine the Inscribed Wall."],
        [0, "See Digmaster Gatah for your reward."]
      ],
      "wiki": {"en": "Signs and Portents", "de": "Zeichen und Omen"}
    },
    "100996": {
      "name": "Skale and Magic Compass",
      "type": "secondary",
      "givers": [724],
      "xp": 1000,
      "gold": 100,
      "objectives": [
        [0, "Seek out Master Engineer Jakumba in Zehlon Reach."],
        [0, "Lure the fierce skale by attacking his brethren by the fishing docks. x of 4 groups remain."],
        [0, "Recover Jakumba's magical compass from the fierce skale."],
        [0, "Return the magical compass to Jakumba."],
        [0, "See Lieutenant Murunda for your reward."]
      ],
      "wiki": {"en": "Skale and Magic Compass", "de": "Skal und magischer Kompass"}
    },
    "100997": {
      "name": "Skree Hatchling Season",
      "type": "secondary",
      "givers": [577],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "objectives": [
        [0, "Find the skree harpy nests on the Cliffs of Dohjok and destroy the skree hatchlings. You have destroyed [0...26] of 26 hatchlings so far."],
        [0, "See Mofuun for your reward."]
      ],
      "wiki": {"en": "Skree Hatchling Season", "de": "Zicke-zacke, Skree-Kacke"}
    },
    "100998": {
      "name": "Special Delivery",
      "type": "primary",
      "givers": [235],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points"],
      "requires": [100830],
      "next": [100834],
      "objectives": [
        [0, "Tell Field General Hayao to deploy the Zaishen."],
        [0, "Talk to Castellan Puuba about Jerek."],
        [0, "Deliver the orders to Jerek."],
        [0, "See Castellan Puuba for your reward."]
      ],
      "wiki": {"en": "Special Delivery", "de": "Botenauftrag"}
    },
    "100999": {
      "name": "Spreading the Wintersday Spirit",
      "type": "event",
      "campaign": 3,
      "region": 15,
      "event": 13,
      "xp": 5000,
      "gold": 250,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "requires": [100883],
      "objectives": [
        [0, "Meet with the Frost Maiden in Zehlon Reach to learn how the Festive Moa can spread Wintersday spirit."],
        [0, "Escort the Festive Moa to the village so she can entertain the locals."],
        [0, "Play some music to put the Festive Moa in a dancing mood."],
        [0, "Tell the Frost Maiden about the moa's performance."],
        [0, "Meet the Frost Maiden in Issnur Isles to continue spreading Wintersday spirit."],
        [0, "Take the Festive Moa to the village so she can entertain the locals."],
        [0, "Play more music to inspire the Festive Moa to boogie down."],
        [0, "Tell the Frost Maiden about the moa's performance."],
        [0, "See Grandfather Kringle for your reward."]
      ],
      "wiki": {"en": "Spreading the Wintersday Spirit", "de": "Wintertags-Stimmung verbreiten"}
    },
    "101000": {
      "name": "Sticks and Stones",
      "type": "secondary",
      "givers": [737],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "objectives": [
        [0, "Destroy the graven monoliths and harvest their shards. Collect 10 more to complete your sample."],
        [0, "See Awata for your reward."]
      ],
      "wiki": {"en": "Sticks and Stones", "de": "Stöcke und Steine"}
    },
    "101001": {
      "name": "Stone-Faced Orders",
      "type": "secondary",
      "givers": [480],
      "xp": 1000,
      "gold": 100,
      "requires": [101016],
      "next": [100825],
      "objectives": [
        [0, "Speak with Miresh about your task."],
        [0, "Meet Miresh on the Cliffs of Dohjok."],
        [0, "Fight your way to the center of the skree harpy nest and retrieve a harpy egg. Miresh must survive."],
        [0, "See Miresh for your reward."]
      ],
      "rewards": ["Transcendent Glory"],
      "wiki": {"en": "Stone-Faced Orders", "de": "Ein Befehl vom Steinernen Antlitz"}
    },
    "101002": {
      "name": "Strange Bedfellows",
      "type": "secondary",
      "givers": [429],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "next": [101063],
      "objectives": [
        [0, "Travel to the Alkali Pan and request an audience with the undead warlord."],
        [0, "Meet with the undead warlord."],
        [0, "Defeat Kareh Ossa and his undead guards."],
        [0, "See General Farrund for your reward."]
      ],
      "wiki": {"en": "Strange Bedfellows", "de": "Ein seltsames Gespann"}
    },
    "101003": {
      "name": "Student Jin",
      "type": "secondary",
      "givers": [721],
      "xp": 1500,
      "gold": 125,
      "objectives": [
        [0, "Travel to Zehlon Reach and bond with Acolyte Jin through battle against one of Balthazar's Eternals."],
        [0, "See Field General Hayao for your reward."]
      ],
      "rewards": ["Acolyte Jin joins your party."],
      "wiki": {"en": "Student Jin", "de": "Schülerin Jin"}
    },
    "101004": {
      "name": "Student Sousuke",
      "type": "secondary",
      "givers": [721],
      "xp": 1500,
      "gold": 125,
      "objectives": [
        [0, "Travel to Zehlon Reach and bond with Acolyte Sousuke through battle against one of Balthazar's Eternals."],
        [0, "See Field General Hayao for your reward."]
      ],
      "rewards": ["Acolyte Sousuke joins your party."],
      "wiki": {"en": "Student Sousuke", "de": "Schüler Sousuke"}
    },
    "101005": {
      "name": "Summertime for Bokka",
      "type": "secondary",
      "givers": [726],
      "hero": [1],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [101040],
      "objectives": [
        [0, "Find Ola the Fantastical in the Mirror of Lyss and convince him to perform in the new play."],
        [0, "Find Amadi and free her from the Kournans."],
        [0, "Convince Amadi she must appear in the new play."],
        [0, "See Theatre Manager Daudi for your reward."]
      ],
      "wiki": {"en": "Summertime for Bokka", "de": "Sommer für Bokka"}
    },
    "101006": {
      "name": "Suwash the Pirate",
      "type": "secondary",
      "givers": [743],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points"],
      "objectives": [
        [0, "Find and defeat the corsair raiding group that took Suwash. You have defeated x of 4 possible groups."],
        [0, "Speak with Suwash."],
        [0, "See Sehti for your reward."]
      ],
      "wiki": {"en": "Suwash the Pirate", "de": "Suwash der Pirat"}
    },
    "101007": {
      "name": "Take the Shortcut (Skip Tutorial)",
      "type": "primary",
      "givers": [383],
      "xp": 2000,
      "skills": [322],
      "next": [100974],
      "missions": [556],
      "objectives": [
        [0, "Make your way to Chahbek Village."],
        [0, "Speak to First Spear Jahdugar."],
        [0, "See First Spear Jahdugar for your reward."]
      ],
      "rewards": ["Koss joins your party."],
      "wiki": {"en": "Take the Shortcut (Skip Tutorial)", "de": "Die Abkürzung nehmen (Tutorial überspringen)"}
    },
    "101008": {
      "name": "Temple of the Monoliths",
      "type": "secondary",
      "givers": [749],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "requires": [100789],
      "next": [100813],
      "objectives": [
        [0, "Investigate the area plagued by graven monolith attacks."],
        [0, "See Officer Lohru for your reward."]
      ],
      "wiki": {"en": "Temple of the Monoliths", "de": "Tempel der Monolithen"}
    },
    "101009": {
      "name": "Tendering an Offer",
      "type": "secondary",
      "givers": [563],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "requires": [100876],
      "objectives": [
        [0, "Collect Vadah's debt for Koss."],
        [0, "Negotiate a deal with Caretaker Palmor to buy back Zudash Dejarin's property."],
        [0, "\"Evict\" the Kournan soldiers from Dejarin land."],
        [0, "See Zudash Dejarin for your reward."]
      ],
      "wiki": {"en": "Tendering an Offer", "de": "Freundliche Übernahme"}
    },
    "101010": {
      "name": "Terror in Tyria",
      "type": "primary",
      "givers": [752],
      "travel": 1,
      "xp": 2500,
      "gold": 200,
      "requires": [101041],
      "objectives": [
        [0, "Speak to Mhenlo at the Consulate Docks to learn more about the situation in Tyria."],
        [0, "Tell Mhenlo when you are ready to leave for Tyria."],
        [0, "Report to Lionguard Neiro in the foreign administration center and gain entrance to Lion's Arch and the lands of Kryta."],
        [0, "Inform Firstwatch Sergio, captain of the Lionguard, that you have arrived in Lion's Arch."]
      ],
      "wiki": {"en": "Terror in Tyria", "de": "Terror in Tyria"}
    },
    "101011": {
      "name": "The Apostate",
      "type": "secondary",
      "givers": [309],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points"],
      "objectives": [
        [0, "Escort the Apostate while he retrieves his writings."],
        [0, "Protect the Apostate from the Margonite Stalker!"],
        [0, "See Apostate for your reward."]
      ],
      "wiki": {"en": "The Apostate", "de": "Der Apostat"}
    },
    "101012": {
      "name": "The City of Torc'qua",
      "type": "instance",
      "givers": [432],
      "xp": 10000,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Destroy all residents of the Margonite City."]
      ],
      "wiki": {"en": "The City of Torc'qua", "de": "Die Stadt Torc'qua (Quest)"}
    },
    "101013": {
      "name": "The Cold Touch of the Past",
      "type": "secondary",
      "givers": [372],
      "xp": 4000,
      "gold": 400,
      "rewards": ["45 Lightbringer points"],
      "next": [101025],
      "objectives": [
        [0, "Travel to the Poisoned Outcrops and find the resting place of the Staff of the Mists before Battlelord Turgar discovers it."],
        [0, "Defeat Battlelord Turgar before he completes the ritual to activate the Staff of the Mists."],
        [0, "Recover the Staff of the Mists."],
        [0, "See Buuran for your reward."]
      ],
      "wiki": {"en": "The Cold Touch of the Past", "de": "Der kalte Hauch der Vergangenheit"}
    },
    "101014": {
      "name": "The Command Post",
      "type": "secondary",
      "givers": [413],
      "xp": 4000,
      "gold": 200,
      "rewards": ["160 Sunspear Promotion Points"],
      "objectives": [
        [0, "Establish a stable base of operations in Kourna."],
        [0, "Complete \"Building the Base: Prisoners of War.\""],
        [0, "Complete \"Building the Base: The Interrogation.\""],
        [0, "Complete \"Building the Base: The Meeting.\""]
      ],
      "wiki": {"en": "The Command Post", "de": "Die Kommandostelle"}
    },
    "101015": {
      "name": "The Council is Called",
      "type": "primary",
      "givers": [337],
      "xp": 2000,
      "gold": 150,
      "rewards": ["20 Sunspear Promotion Points"],
      "requires_missions": [517],
      "next": [101054],
      "objectives": [
        [0, "Give your report of the assault to the consulate."],
        [0, "Speak with Elder Suhl."],
        [0, "Give your report to Elder Nahlo."],
        [0, "Find Elder Dahut and make your report."],
        [0, "See Elder Suhl for your reward."]
      ],
      "wiki": {"en": "The Council is Called", "de": "Der Rat wird einberufen"}
    },
    "101016": {
      "name": "The Cult of the Stone Face",
      "type": "secondary",
      "givers": [326],
      "xp": 1000,
      "gold": 100,
      "next": [101001],
      "objectives": [
        [0, "Speak with Tahon and attempt to join the cult of the Stone Face."],
        [0, "Prove your might by defeating the crew of corsairs in southern Zehlon Reach"],
        [0, "Speak with Tahon"],
        [0, "Prove your resilience by withstanding an assault from an army of skales"],
        [0, "See Tahon for your reward"]
      ],
      "rewards": ["Eternal Bliss"],
      "wiki": {"en": "The Cult of the Stone Face", "de": "Der Kult um das Steinerne Antlitz"}
    },
    "101017": {
      "name": "The Cyclone Palace",
      "type": "secondary",
      "givers": [199],
      "xp": 2000,
      "gold": 200,
      "rewards": ["25 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100827],
      "next": [100867],
      "objectives": [
        [0, "Find and defeat the Skale Lord Jurpa."],
        [0, "See Elder Jurdu for your reward."]
      ],
      "wiki": {"en": "The Cyclone Palace", "de": "Der Zyklonpalast (Quest)"}
    },
    "101018": {
      "name": "The Dejarin Estate",
      "type": "secondary",
      "givers": [261],
      "xp": 4000,
      "gold": 400,
      "rewards": ["160 Sunspear Promotion Points", "2 Kournan Coins"],
      "requires": [101019],
      "objectives": [
        [0, "Help Zudash Dejarin regain his estate."],
        [0, "Complete \"Estate Planning.\""],
        [0, "Complete \"Tendering an Offer.\""],
        [0, "Complete \"The Young Lady Vanishes.\""],
        [0, "Complete \"Family Ties.\""],
        [0, "See Zudash Dejarin for your reward."]
      ],
      "wiki": {"en": "The Dejarin Estate", "de": "Das Dejarin-Anwesen"}
    },
    "101019": {
      "name": "The Foolhardy Father",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "next": [101018],
      "objectives": [
        [0, "Meet with Zudash"],
        [0, "Settle Zudash's debt with the corsairs."],
        [0, "Defeat Sevad's Boys."],
        [0, "See Zudash Dejarin for your reward."]
      ],
      "wiki": {"en": "The Foolhardy Father", "de": "Der tollkühne Vater"}
    },
    "101020": {
      "name": "The Foundry of Failed Creations",
      "type": "instance",
      "givers": [270],
      "xp": 10000,
      "rewards": ["500 Lightbringer points"],
      "next": [100892],
      "objectives": [
        [0, "Fight your way through the entrance chambers to gain entry to the foundry."],
        [0, "Clear the first chamber of enemies."],
        [0, "Clear the second chamber of enemies."],
        [0, "Clear the third chamber of enemies."],
        [0, "Clear the fourth chamber of enemies."],
        [0, "See Tekliss for your reward."]
      ],
      "wiki": {
        "en": "The Foundry of Failed Creations (quest)",
        "de": "Das Inferno der gescheiterten Schöpfung (Quest)"
      }
    },
    "101021": {
      "name": "The Gift of Giving",
      "type": "event",
      "givers": [194],
      "event": 13,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "requires": [100919],
      "objectives": [
        [0, "Deliver a Special Present to Bahbukar in Churrhir Fields."],
        [0, "Deliver a Special Present to Timahr on the Plains of Jarin."],
        [0, "Deliver a Special Present to Ashigun in Zehlon Reach."],
        [0, "Deliver a Special Present to Kanyama on the Issnur Isles."],
        [0, "Deliver a Special Present to Tesserai in Mehtani Keys."],
        [0, "See Elder Skruuj for your reward."]
      ],
      "wiki": {"en": "The Gift of Giving", "de": "Die Gabe des Schenkens"}
    },
    "101022": {
      "name": "The Great Escape",
      "type": "primary",
      "givers": [413],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [100920],
      "next": [100824],
      "objectives": [
        [0, "Get the location of Koss and the captured Sunspears from Nerashi in Arkjok Ward."],
        [0, "Rescue Koss and the captured Sunspears."],
        [0, "Eliminate the Kournan scout patrols around the perimeter of the garrison."],
        [0, "Kill Commander Kubeh and his elite guards."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "The Great Escape", "de": "Gesprengte Ketten"}
    },
    "101023": {
      "name": "The Great Zehtuka",
      "type": "secondary",
      "givers": [320],
      "xp": 2500,
      "gold": 200,
      "rewards": ["2 Kournan Coins"],
      "wiki": {"en": "The Great Zehtuka", "de": "Der Große Zehtuka (Quest)"}
    },
    "101024": {
      "name": "The Growing Threat",
      "type": "secondary",
      "givers": [779],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points", "1 Ancient Artifact"],
      "requires": [100817],
      "objectives": [
        [0, "Meet Jehner in the Poisoned Outcrops."],
        [0, "Destroy the soul-eating Margonites. You have X of 5 groups remaining."],
        [0, "See Jehner for your reward."]
      ],
      "wiki": {"en": "The Growing Threat", "de": "Wachsende Bedrohung"}
    },
    "101025": {
      "name": "The Hallowed Point",
      "type": "secondary",
      "givers": [401],
      "xp": 4000,
      "gold": 400,
      "rewards": ["30 Lightbringer points"],
      "requires": [101013],
      "objectives": [
        [0, "Carry the Staff of the Mists to the Hallowed Point."],
        [0, "Throw the Staff of the Mists into the Hallowed Point."],
        [0, "See Buuran for your reward."]
      ],
      "wiki": {"en": "The Hallowed Point", "de": "Die Geweihte Stelle"}
    },
    "101026": {
      "name": "The Hanging Gardener",
      "type": "secondary",
      "givers": [371],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "objectives": [
        [0, "Lead Gardener Pohsin safely to the Hanging Gardens of Jahin."],
        [0, "See Gardener Pohsin for your reward."]
      ],
      "wiki": {"en": "The Hanging Gardener", "de": "Der hängende Gärtner"}
    },
    "101027": {
      "name": "The Honorable General",
      "type": "primary",
      "givers": [484],
      "xp": 2000,
      "gold": 250,
      "rewards": ["20 Sunspear Promotion Points"],
      "next": [100995],
      "objectives": [
        [0, "Gain the rank of First Spear or Level 12."],
        [0, "Talk with General Morgahn."],
        [0, "Defeat the Kournans."],
        [0, "Talk with General Morgahn."],
        [0, "See Emissary Dajmir for your reward."]
      ],
      "wiki": {"en": "The Honorable General", "de": "Ein General und Ehrenmann"}
    },
    "101028": {
      "name": "The Iron Truth",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "next": [101059],
      "objectives": [
        [0, "Report to Jerek."],
        [0, "Speak to Savage Nunbe."],
        [0, "Defeat Ironfist and his crew."],
        [0, "Take Ironfist into custody."],
        [0, "See Jerek for your reward."]
      ],
      "wiki": {"en": "The Iron Truth", "de": "Die eiserne Wahrheit"}
    },
    "101029": {
      "name": "The Killing Joke",
      "type": "event",
      "givers": [242],
      "event": 11,
      "xp": 15000,
      "gold": 2500,
      "rewards": ["100 Trick-or-Treat Bags"],
      "requires": [100960],
      "objectives": [
        [0, "Find and defeat Qwytzylkak."],
        [0, "See Emissary of King Thorn of Kryta for your reward."]
      ],
      "wiki": {"en": "The Killing Joke", "de": "Ein mörderischer Witz"}
    },
    "101030": {
      "name": "The Last Patrol",
      "type": "secondary",
      "givers": [183, 184],
      "xp": 2500,
      "gold": 200,
      "requires": [100926],
      "objectives": [
        [0, "Find Captain Yithlis in the Domain of Fear."],
        [0, "Find and defeat the demons surrounding The Unseen."],
        [0, "Return to Commander Thurnis in the Gate of Torment for your reward."]
      ],
      "wiki": {"en": "The Last Patrol", "de": "Die letzte Patrouille"}
    },
    "101031": {
      "name": "The Lone Raider",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "next": [100854],
      "objectives": [
        [0, "Meet Rahlon and the village men in Mehtani Keys."],
        [0, "Chase down the corsair and stop him before he makes it back to his friends."],
        [0, "See Rahlon for your reward."]
      ],
      "wiki": {"en": "The Lone Raider", "de": "Eine Ein-Mann-Armee"}
    },
    "101032": {
      "name": "The Madness of Prophecy",
      "type": "secondary",
      "givers": [348],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [100965],
      "next": [101038],
      "objectives": [
        [0, "Find Hanbahd the Anchorite in the Mirror of Lyss."],
        [0, "Protect Hanbahd the Anchorite from the attacking Margonites."],
        [0, "Hanbahd has fled to the Halls of Chokhin. Locate him, and find out what he knows about the ancient temple site."]
      ],
      "wiki": {"en": "The Madness of Prophecy", "de": "Der Wahnwitz der Prophezeiung"}
    },
    "101033": {
      "name": "The Missing Patrol",
      "type": "secondary",
      "givers": [464],
      "xp": 2500,
      "gold": 200,
      "objectives": [
        [0, "Investigate the fate of the patrol under Captain Yithlis."],
        [0, "Defeat the attacking demons. Captain Yithlis must survive."],
        [0, "See Captain Yithlis for your reward."]
      ],
      "wiki": {"en": "The Missing Patrol", "de": "Die verschollene Patrouille"}
    },
    "101034": {
      "name": "The Oddbodies",
      "type": "secondary",
      "givers": [414, 415],
      "xp": 2500,
      "gold": 200,
      "requires": [101033],
      "next": [100926],
      "objectives": [
        [0, "Escort the Oddbodies to the Gate of Torment"],
        [0, "See Commander Thurnis for your reward."]
      ],
      "wiki": {"en": "The Oddbodies (quest)", "de": "Die Käuze (Quest)"}
    },
    "101035": {
      "name": "The Rifts Between Us",
      "type": "instance",
      "givers": [753],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "requires": [101056],
      "next": [100860],
      "objectives": [
        [0, "Capture the portal location to close the rift that provides the demons passage from the Realm of Torment."],
        [0, "See Voice of Whispers for your reward."]
      ],
      "wiki": {"en": "The Rifts Between Us", "de": "Tür zu, es zieht!"}
    },
    "101036": {
      "name": "The Role of a Lifetime",
      "type": "secondary",
      "givers": [427],
      "xp": 2000,
      "requires": [100837],
      "next": [100954],
      "objectives": [
        [0, "Perform with Norgu in Jahinur."],
        [0, "Write a short script with Norgu."],
        [0, "Perform with Norgu in Pojah Estates."],
        [0, "Protect Norgu from the dangers of Vehtendi Valley."],
        [0, "Destroy the heket that have overrun the performance area."],
        [0, "Register Norgu's play rights with Records Keeper Palin at the Writing Guild of Vabbi."]
      ],
      "rewards": ["Norgu joins your party."],
      "wiki": {"en": "The Role of a Lifetime", "de": "Die Rolle seines Lebens"}
    },
    "101037": {
      "name": "The Scourge of Vabbi",
      "type": "secondary",
      "givers": [400],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [100786, 100982],
      "objectives": [
        [0, "Talk to Palawa Joko. Find out how he moved his forces into Vabbi so easily."],
        [0, "Find Palawa Joko's Scepter."],
        [0, "Return the scepter to Palawa Joko."],
        [0, "Find the hidden passage to Vabbi."],
        [0, "See Whispers Adept for your reward."]
      ],
      "wiki": {"en": "The Scourge of Vabbi", "de": "Die Geißel von Vaabi"}
    },
    "101038": {
      "name": "The Search for Enlightenment",
      "type": "secondary",
      "givers": [738],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [101032],
      "next": [100969],
      "objectives": [
        [0, "Follow Hanbahd the Anchorite to the place where he hid the Lost Scriptures."],
        [0, "Eliminate the Margonites trying to steal the Lost Scriptures. Hanbahd must survive."],
        [0, "Bring the Lost Scriptures to Kachok."]
      ],
      "wiki": {"en": "The Search for Enlightenment", "de": "Suche nach Erleuchtung"}
    },
    "101039": {
      "name": "The Search for Survivors",
      "type": "secondary",
      "campaign": 3,
      "region": 13,
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100979],
      "objectives": [
        [0, "Find Ahmtur the Mighty and the other soldiers in the Mirror of Lyss."],
        [0, "Search for and rescue Nightfall survivors in the ruins of the Mirror of Lyss and the surrounding area. [3...0] of 3 survivor groups remain."],
        [0, "Escort Priest Tuwahan to the safety of the Kodash Bazaar."],
        [0, "Shuttle the family to the protection of the Kodash Bazaar."],
        [0, "Help the students reach the refuge of the Kodash Bazaar."],
        [0, "See Lieutenant Murunda for your reward."]
      ],
      "wiki": {"en": "The Search for Survivors", "de": "Die Suche nach Überlebenden"}
    },
    "101040": {
      "name": "The Show Must Go On",
      "type": "secondary",
      "givers": [274],
      "hero": [1],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "next": [101005],
      "objectives": [
        [0, "Tell Theatre Manager Daudi that the prince wants another play to soothe his raging heart. And he wants one now!"],
        [0, "Find a playwright to pen a new script for the prince to enjoy."],
        [0, "Find Sijo and convince him to write a new play for the prince."],
        [0, "See Theatre Manager Daudi for your reward."]
      ],
      "wiki": {"en": "The Show Must Go On", "de": "Die Show muss weitergehen!"}
    },
    "101041": {
      "name": "The Time is Nigh",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [100800],
      "next_missions": [517],
      "missions": [517],
      "objectives": [
        [0, "Gain the rank of Sunspear Captain or Level 17. (For Nightfall characters only.)"],
        [0, "Rally the Sunspears in Churrhir Fields."],
        [0, "Speak with Kormir."],
        [0, "Speak with Assistant Hahnna to gain an audience with Elder Suhl."],
        [0, "See Raidmarshal Mehdara for your reward."]
      ],
      "wiki": {"en": "The Time is Nigh", "de": "Der richtige Moment"}
    },
    "101042": {
      "name": "The Time is Nigh",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [101068, 101069, 101070],
      "missions": [517],
      "objectives": [
        [0, "Gain the rank of Sunspear Captain or Level 17. (For Nightfall characters only.)"],
        [0, "Rally the Sunspears in Churrhir Fields."],
        [0, "Speak with Kormir."],
        [0, "Speak with Assistant Hahnna to gain an audience with Elder Suhl."],
        [0, "See Raidmarshal Mehdara for your reward."]
      ],
      "wiki": {"en": "The Time is Nigh", "de": "Zeit zu handeln"}
    },
    "101043": {
      "name": "The Tools of War",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "objectives": [
        [0, "Kill the Kournan guards holding the Centaur weapon crafters captive."],
        [0, "Offer the Centaurs a place with the Sunspears."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "The Tools of War", "de": "Die Werkzeuge des Krieges"}
    },
    "101044": {
      "name": "The Toy's Story",
      "type": "secondary",
      "givers": [732],
      "xp": 1000,
      "rewards": ["Miniature Gray Giant"],
      "objectives": [
        [0, "Gather whimsical essence by defeating the whimsical djinn."],
        [0, "You have gathered the whimsical essence."],
        [0, "Tell Mahk to infuse the toy with the whimsical essence."],
        [0, "You received the model toy."],
        [0, "Use Mahk's model toy to negotiate a contract with the Vabbian toy buyers."],
        [0, "You received Mahk's contract."],
        [0, "See Mahk for your reward."]
      ],
      "wiki": {"en": "The Toy's Story", "de": "Spielzeug ist nicht gleich Spielzeug"}
    },
    "101045": {
      "name": "The Troubled Keeper",
      "type": "secondary",
      "givers": [203],
      "xp": 4000,
      "gold": 400,
      "rewards": ["100 Lightbringer points", "Inscribed Secret"],
      "requires": [100840],
      "objectives": [
        [0, "Speak to Keeper Jinyssa when all members of your party are ready to defend the Gate of Torment."],
        [0, "Defend the Gate of Torment from the attacking demon army. # of 3 attack groups remain."],
        [0, "Keeper Jinyssa must survive the battle."],
        [0, "See Keeper Jinyssa for your reward."]
      ],
      "wiki": {"en": "The Troubled Keeper", "de": "Hüterin in Not"}
    },
    "101046": {
      "name": "The Young Lady Vanishes",
      "type": "secondary",
      "givers": [278],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "requires": [101018],
      "objectives": [
        [0, "Help Hogun save his fiancee from corsair rivals."],
        [0, "Kill Hogun and his band of corsairs."],
        [0, "Speak with Ailonseh Dejarin and see if she is hurt."],
        [0, "Escort Ailonseh Dejarin to Camp Hojanu."],
        [0, "See Zudash Dejarin for your reward."]
      ],
      "wiki": {"en": "The Young Lady Vanishes", "de": "Das Verschwinden der jungen Dame"}
    },
    "101047": {
      "name": "They Only Come Out at Night",
      "type": "secondary",
      "givers": [419],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points"],
      "next": [100927],
      "objectives": [
        [0, "Patrol Nightfallen Jahai for signs of the enemy. Dispatch any foes found along the way."],
        [0, "Defeat Abaddon's Adjutant and the Emissary of Dhuum."],
        [0, "See Keshsek for your reward."]
      ],
      "wiki": {"en": "They Only Come Out at Night", "de": "Die Nachtaktiven"}
    },
    "101048": {
      "name": "Third Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "requires": [100989],
      "objectives": [
        [0, "Speak with Jedur Wahmeh to learn if he is worthy of his father's inheritance."],
        [0, "Go with Jedur Wahmeh to recover the buried treasure."],
        [0, "See Healer Zenwa for your reward."]
      ],
      "wiki": {"en": "Third Born", "de": "Der Drittgeborene"}
    },
    "101049": {
      "name": "Til Death Do Us Part...",
      "type": "event",
      "givers": [242],
      "event": 11,
      "xp": 5000,
      "gold": 1000,
      "rewards": ["50 Trick-or-Treat Bags"],
      "next": [100960],
      "objectives": [
        [0, "Speak with Princess Zola in Resplendent Makuun."],
        [0, "Defeat three of Princess Zola's suitors. You have [3...0] remaining."],
        [0, "Return to Princess Zola and inform her that she is now free from her suitors."],
        [0, "See Emissary of King Thorn of Kryta for your reward."]
      ],
      "wiki": {"en": "Til Death Do Us Part...", "de": "Bis dass der Tod uns scheidet..."}
    },
    "101050": {
      "name": "To Ask For More",
      "type": "secondary",
      "givers": [520],
      "xp": 1500,
      "gold": 125,
      "requires": [101053],
      "objectives": [
        [0, "Meet Nobleman Emrah and his fellow Vabbians in Lahtenda Bog."],
        [0, "Escort the Vabbians on their hike to the Sunspear Crypt in Lahtenda Bog."],
        [0, "See Nobleman Emrah for your reward."]
      ],
      "wiki": {"en": "To Ask For More", "de": "Nochmal mit Gefühl"}
    },
    "101051": {
      "name": "To Dye For",
      "type": "secondary",
      "givers": [754],
      "xp": 500,
      "gold": 100,
      "rewards": ["5 Sunspear Promotion Points"],
      "requires": [100935],
      "objectives": [
        [0, "Travel to the Zehlon Reach."],
        [0, "Gather petals from a swamp flower plant."],
        [0, "See Barlom Dye Trader for your reward."]
      ],
      "wiki": {"en": "To Dye For", "de": "Todschicke Farbe"}
    },
    "101052": {
      "name": "To Kill a Demon",
      "type": "primary",
      "givers": [783],
      "xp": 2500,
      "gold": 200,
      "requires": [100992],
      "next_missions": [459],
      "missions": [459],
      "objectives": [
        [0, "Meet the Master of Whispers in the Floodplain of Mahnkelon."],
        [0, "Weaken the Drought by killing the droughtlings at the Floodplain of Mahnkelon, outside the Waterworks. [5...0] of 5 groups remain."],
        [0, "Report to Dehjah for further instructions."],
        [0, "See Dehjah for your reward."]
      ],
      "rewards": ["Master of Whispers joins your party."],
      "wiki": {"en": "To Kill a Demon", "de": "Wie tötet man einen Dämon?"}
    },
    "101053": {
      "name": "To See the Sights",
      "type": "secondary",
      "givers": [520],
      "xp": 500,
      "gold": 50,
      "requires": [100957],
      "next": [101050],
      "objectives": [
        [0, "Meet the Vabbian nobles in Zehlon Reach."],
        [0, "Escort the Vabbian nobles on their tour of the Zehlon Reach."],
        [0, "See Clerk Arlon for your reward."]
      ],
      "wiki": {"en": "To See the Sights", "de": "Sehenswürdigkeiten besichtigen"}
    },
    "101054": {
      "name": "To Vabbi!",
      "type": "primary",
      "givers": [217],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [101015],
      "next": [100848],
      "objectives": [
        [0, "Consult with Dunkoro at the Command Post in Kourna to find a way to Vabbi."],
        [0, "Scout with Nerashi to find passage through Jahai."],
        [0, "Silence the Kournan patrol."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "To Vabbi!", "de": "Auf nach Vaabi!"}
    },
    "101055": {
      "name": "To the Rescue (Nightfall quest)",
      "type": "secondary",
      "givers": [292],
      "hero": [4],
      "xp": 2000,
      "gold": 250,
      "rewards": ["15 Lightbringer points", "1 Trade Contract"],
      "requires": [100859],
      "next": [100852],
      "objectives": [
        [0, "Search the mines for Belgun's assistants."],
        [0, "Defeat the Kournan and Margonite guards and free Assistant Lenahn."],
        [0, "Survive the onslaught of Kournan and Margonite troops."],
        [0, "See Belgun the Quarry Master for your reward."]
      ],
      "wiki": {"en": "To the Rescue (Nightfall quest)", "de": "Die Befreiung"}
    },
    "101056": {
      "name": "To the Rescue!",
      "type": "instance",
      "givers": [611],
      "xp": 10000,
      "gold": 500,
      "rewards": ["500 Lightbringer points"],
      "objectives": [
        [0, "Rescue the Order of Whispers company trapped behind enemy lines."],
        [0, "Survive the demon army assault."],
        [0, "Warden of Whispers must survive."],
        [0, "See Warden of Whispers for your reward."]
      ],
      "wiki": {"en": "To the Rescue!", "de": "Hinter die feindlichen Linien"}
    },
    "101057": {
      "name": "Total Corruption",
      "type": "secondary",
      "givers": [328],
      "xp": 2500,
      "gold": 200,
      "rewards": ["10 Lightbringer points", "Kournan Coin"],
      "requires": [100823],
      "next": [100832],
      "objectives": [
        [0, "Defeat 5...0 more ancestral sprouts to cleanse the Ancestor Tree."],
        [0, "See Mirza Veldrunner for your reward."]
      ],
      "wiki": {"en": "Total Corruption", "de": "Extrem starker Befall"}
    },
    "101058": {
      "name": "Trade Relations",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
      "objectives": [
        [0, "Gather 20 shells on the beaches in Mehtani Keys. You have gathered [0...20] of 20."],
        [0, "Give the shells to Elder Olunideh and collect your reward."]
      ],
      "wiki": {"en": "Trade Relations", "de": "Handelsbeziehungen"}
    },
    "101059": {
      "name": "Trial by Fire",
      "type": "primary",
      "givers": [528],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [101028],
      "next": [101068, 101069, 101070],
      "objectives": [
        [0, "Present charges against Kourna."],
        [0, "See Castellan Puuba for your reward."]
      ],
      "wiki": {"en": "Trial by Fire", "de": "Feuertaufe"}
    },
    "101060": {
      "name": "Troubled Lands",
      "type": "secondary",
      "givers": [328],
      "xp": 2500,
      "gold": 200,
      "rewards": ["10 Lightbringer points", "Kournan Coin"],
      "requires": [100788],
      "next": [100823],
      "objectives": [
        [0, "Seek the source of the corruption by defeating and purifying the tormented lands. You have [10...0] more tormented lands to defeat."],
        [0, "Defeat and purify the Earthen Abomination."],
        [0, "See Mirza Veldrunner for your reward."]
      ],
      "wiki": {"en": "Troubled Lands", "de": "Gequälte Länder"}
    },
    "101061": {
      "name": "Uncharted Territory",
      "type": "primary",
      "givers": [758],
      "hero": [7],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Lightbringer points"],
      "missions": [526],
      "objectives": [
        [0, "Bring Dunkoro to meet with Kormir in Nightfallen Jahai."],
        [0, "Travel through Nightfallen Jahai with Kormir and Dunkoro."],
        [0, "Speak with the Tortured Sunspear."],
        [0, "See Jarindok for your reward."]
      ],
      "wiki": {"en": "Uncharted Territory", "de": "Unkartiertes Gelände"}
    },
    "101062": {
      "name": "Undead Defenders",
      "type": "secondary",
      "givers": [276],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [100942, 100913],
      "requires_missions": [453],
      "objectives": [
        [0, "Rout the remaining Kournan forces. You have 0..3 groups to rout."],
        [0, "See Elder Jonah for your reward."]
      ],
      "wiki": {"en": "Undead Defenders", "de": "Untote Verteidiger"}
    },
    "101063": {
      "name": "Under New Management",
      "type": "secondary",
      "givers": [763],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "requires": [101002],
      "objectives": [
        [0, "Convince Kareh Ossa's commanders to align with Joko by defeating them in combat. You have defeated [0...4] of 4 commanders."],
        [0, "See Palawa Joko for your reward."]
      ],
      "wiki": {"en": "Under New Management", "de": "Unter neuer Leitung"}
    },
    "101064": {
      "name": "Valley of the Rifts",
      "type": "secondary",
      "givers": [274],
      "hero": [2],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract", "15 Lightbringer points"],
      "requires": [100988],
      "next": [100922],
      "objectives": [
        [0, "Seal the rifts in Vehtendi Valley by defeating all demons surrounding each rift. You have 3...0 rifts left to seal."],
        [0, "See Prince Bokka the Magnificent for your reward."]
      ],
      "wiki": {"en": "Valley of the Rifts", "de": "Das Risstal"}
    },
    "101065": {
      "name": "Vanishing Spirits",
      "type": "secondary",
      "givers": [489],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "next": [100817],
      "objectives": [
        [0, "Search the Ruptured Heart for anyone who might know the whereabouts of Kwalanah."],
        [0, "See Charen for your reward."]
      ],
      "wiki": {"en": "Vanishing Spirits", "de": "Verschwundene Geister"}
    },
    "101066": {
      "name": "Voices in the Night",
      "type": "secondary",
      "givers": [736],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100946],
      "objectives": [
        [0, "Destroy the evil mime."],
        [0, "Set the trapped voices free from the jars."],
        [0, "See Elder Belin for your reward."]
      ],
      "wiki": {"en": "Voices in the Night", "de": "Stimmen im Dunkeln"}
    },
    "101067": {
      "name": "Wandered Off Again",
      "type": "secondary",
      "givers": [211, 212],
      "xp": 1500,
      "gold": 125,
      "next": [100893],
      "objectives": [
        [0, "Find Rohtu's mother in Lahtenda Bog."],
        [0, "Return to Rohtu and tell him of his mother's fate."]
      ],
      "wiki": {"en": "Wandered Off Again", "de": "Auf der Suche"}
    },
    "101068": {
      "name": "War Preparations (Ghost Reconnaissance)",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [101059],
      "next": [101041],
      "objectives": [
        [0, "Kneel at the Sunspear Crypt to summon the original Sunspear Guard."],
        [0, "See Castellan Puuba for your reward."]
      ],
      "wiki": {"en": "War Preparations (Ghost Reconnaissance)", "de": "Kriegsvorbereitungen (Geisteraufklärung)"}
    },
    "101069": {
      "name": "War Preparations (Recruit Training)",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [101059],
      "next": [101041],
      "objectives": [
        [0, "Speak with Kormir on the Plains of Jarin."],
        [0, "Help Nerashi train the new recruits."],
        [0, "Report to Ahtok."],
        [0, "Speak with Rojis."],
        [0, "See Castellan Puuba for your reward."]
      ],
      "wiki": {"en": "War Preparations (Recruit Training)", "de": "Kriegsvorbereitungen (Rekrutenausbildung)"}
    },
    "101070": {
      "name": "War Preparations (Wind and Water)",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [101059],
      "next": [101041],
      "objectives": [
        [0, "Speak with Captain Bolduhr."],
        [0, "Defend the sailors as they complete the ceremony."],
        [0, "Receive the blessings of the wind and water."],
        [0, "See Castellan Puuba for your reward."]
      ],
      "wiki": {"en": "War Preparations (Wind and Water)", "de": "Kriegsvorbereitungen (Wind und Wasser)"}
    },
    "101071": {
      "name": "Warning Kehanni",
      "type": "primary",
      "givers": [634],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100845],
      "objectives": [
        [0, "Warn Kehanni of Varesh's forces."],
        [0, "Destroy the vanguard assaulting the temple."],
        [0, "See Head Priest Vahmani for your reward."]
      ],
      "wiki": {"en": "Warning Kehanni", "de": "Kehanni muss gewarnt werden"}
    },
    "101072": {
      "name": "Wayfarer's Reverie: Elona",
      "type": "event",
      "campaign": 3,
      "region": 15,
      "event": 8,
      "xp": 2006,
      "gold": 2012,
      "rewards": ["Proof of Flames"],
      "objectives": [
        [0, "Visit Fahranur, the First City. 'The' is lowercase unlike 'Fahranur, The First City'"],
        [0, "Visit the Cyclone Palace in Mehtani Keys."],
        [0, "Visit the secret corsair docks on the Barbarous Shore."],
        [0, "Visit the impregnable Fortress of Jahai."],
        [0, "Visit the vast libraries of the Halls of Chokhin."],
        [0, "Visit the inner sanctum of the Hidden City of Ahdashim."],
        [0, "Visit the Hallowed Point in the Poisoned Outcrops."],
        [0, "Visit the Crystal Overlook teleporter."],
        [0, "See Festival Coordinator Khuri for your reward."]
      ],
      "wiki": {"en": "Wayfarer's Reverie: Elona", "de": "Erinnerung des Reisenden: Elona"}
    },
    "101073": {
      "name": "Wayward Guide",
      "type": "secondary",
      "campaign": 3,
      "region": 14,
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "next": [100807],
      "objectives": [
        [0, "Find Kane."],
        [0, "Rescue Kane."],
        [0, "Escort Kane back to Curator Ruras."],
        [0, "See Curator Ruras for your reward."]
      ],
      "wiki": {"en": "Wayward Guide", "de": "Eigensinniger Fremdenführer"}
    },
    "101074": {
      "name": "Weird Waters",
      "type": "secondary",
      "givers": [727],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "objectives": [
        [0, "Explore the area surrounding the Waterworks."],
        [0, "Rescue Turlon."],
        [0, "Talk to Turlon."],
        [0, "See Lonai for your reward."]
      ],
      "wiki": {"en": "Weird Waters", "de": "Sonderbare Gewässer"}
    },
    "101075": {
      "name": "What do you do with a drunken shauben",
      "type": "secondary",
      "givers": [755, 756],
      "xp": 1500,
      "gold": 125,
      "rewards": ["Battle Commendation"],
      "objectives": [
        [0, "Find the captured clan warriors."],
        [0, "Kill the corsairs guarding the clansmen."],
        [0, "Speak with Ahbri."],
        [0, "Bring the surviving clansmen back to Blacktide Den."],
        [0, "See Dahleht for your reward."]
      ],
      "wiki": {"en": "What Do You Do with a Drunken Shauben?", "de": "Trunkene Shauben"}
    },
    "101076": {
      "name": "Which Way Did He Go?",
      "type": "secondary",
      "givers": [564],
      "xp": 1500,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "objectives": [
        [0, "Find Gardener Tidak and tell that lazy bum to get back to work!"],
        [0, "Kill the advancing beasts threatening Gardener Tidak."],
        [0, "See Horticulturist Hinon for your reward."]
      ],
      "wiki": {"en": "Which Way Did He Go?", "de": "Wo ist er hingegangen?"}
    },
    "101077": {
      "name": "White Mist",
      "type": "event",
      "givers": [194],
      "event": 13,
      "xp": 1000,
      "next": [100919],
      "objectives": [
        [0, "Rendezvous with the Humbugs on the Plains of Jarin."],
        [0, "Destroy the Freezie Wannabes. [3...0] of 3 remain."],
        [0, "See Elder Skruuj for your reward."]
      ],
      "rewards": ["5 Wintersday Gifts"],
      "wiki": {"en": "White Mist", "de": "Weißer Nebel"}
    },
    "101078": {
      "name": "Worst. Performance. Ever.",
      "type": "secondary",
      "givers": [274],
      "hero": [1],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100898],
      "next": [101040],
      "objectives": [
        [0, "Speak with Theatre Manager Daudi and find out how the Kournans were able to infiltrate the acting company."],
        [0, "Return to Prince Bokka the Magnificent and relate what you have learned."],
        [0, "See Prince Bokka the Magnificent for your reward."]
      ],
      "wiki": {"en": "Worst. Performance. Ever.", "de": "Die miserabelste Aufführung, die jemals stattfand."}
    },
    "101079": {
      "name": "You Can Run...",
      "type": "secondary",
      "givers": [559],
      "hero": [12],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "requires": [100886],
      "objectives": [
        [0, "Jerob No-Spine has betrayed you. Help Margrid find him and mete out corsair justice."],
        [0, "Seek Ruthless Sevad on the Barbarous Shore."],
        [0, "Find Herbalist Makala in Yohlon Haven."],
        [0, "Meet with Herdsman Mehnosi in the Marga Coast."],
        [0, "Seek out Jerob No-Spine along the southern Marga Coast."],
        [0, "Speak with Jerob No-Spine."]
      ],
      "wiki": {"en": "You Can Run...", "de": "Ihr könnt weglaufen ..."}
    },
    "101080": {
      "name": "Zaishen Elite",
      "type": "secondary",
      "givers": [788],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [100830],
      "next": [101004],
      "objectives": [
        [0, "Meet Field General Hayao on the Plains of Jarin."],
        [0, "Train the Zaishen Acolytes by defeating them in a test of might."],
        [0, "See Field General Hayao for your reward."]
      ],
      "wiki": {"en": "Zaishen Elite (quest)", "de": "Zaishen-Elite (Quest)"}
    },
    "101081": {
      "name": "A Bastion In the North",
      "type": "secondary",
      "givers": [514],
      "xp": 250,
      "gold": 100,
      "objectives": [
        [0, "Meet Devona in The Northlands [sic]"],
        [0, "Carve a path though the Northlands and retake Piken Square."],
        [0, "Hold off the Charr forces to secure Piken Square."],
        [0, "Report to Prince Rurik."]
      ],
      "requires": [101108],
      "next": [101187],
      "wiki": {"en": "A Bastion In the North", "de": "Eine Bastion im Norden."}
    },
    "101082": {
      "name": "A Belated Betrothal",
      "type": "secondary",
      "givers": [532],
      "xp": 1000,
      "skills": [41, 160, 275, 332, 454],
      "objectives": [
        [0, "Find out what has become of Tirzah's beloved Chebar in the Salt Flats."],
        [0, "Take the silver ring to Tirzah."]
      ],
      "wiki": {"en": "A Belated Betrothal", "de": "Eine verspätete Verlobung"}
    },
    "101083": {
      "name": "A Brother's Fury",
      "type": "primary",
      "givers": [451],
      "xp": 500,
      "missions": [11],
      "objectives": [
        [0, "Speak with Justiciar Thommis."],
        [0, "Speak with House Ranger Amon."],
        [0, "Speak with House Ranger Lanalt."],
        [0, "Speak with House Ranger Rionel."],
        [0, "See Witness Giselle for your reward."]
      ],
      "rewards": ["Poisonous Longbow (Dead Bow skin)", "Piercing Dmg: 14-26 (Requires 8 Marksmanship)", "Lengthens Poison duration on foes by 33%", "Reduces Poison duration on you by 20%", "Two-handed Flatbow", "Deadly Cesta", "Dark Dmg: 9-16 (Requires 5 Blood Magic)", "Halves casting time of spells (Chance: 5%)", "Armor penetration 10% (Chance: 10%)"],
      "wiki": {"en": "A Brother's Fury", "de": "Die Wut eines Bruders"}
    },
    "101084": {
      "name": "A Cure for Ralena",
      "type": "secondary",
      "givers": [297],
      "profession": 5,
      "xp": 300,
      "skills": [37, 42],
      "requires": [101331],
      "objectives": [
        [0, "Find Master Ranger Nente."],
        [0, "Return to Vassar for your reward."]
      ],
      "wiki": {"en": "A Cure for Ralena", "de": "Ein Heilmittel für Ralena"}
    },
    "101085": {
      "name": "A Gift for Althea",
      "type": "secondary",
      "givers": [485],
      "xp": 250,
      "objectives": [
        [0, "Find the perfect gift for Lady Althea. It must be something beautiful."],
        [0, "Give the Beautiful Feather to Captain Osric."],
        [0, "Give the Beautiful Pearl to Captain Osric."],
        [0, "Give the Beautiful Pendant to Captain Osric."],
        [0, "Return to Captain Osric for your reward."]
      ],
      "wiki": {"en": "A Gift for Althea", "de": "Ein Geschenk für Althea"}
    },
    "101086": {
      "name": "A Heart of Ice",
      "type": "secondary",
      "givers": [487],
      "profession": 6,
      "xp": 350,
      "skills": [163, 177, 210],
      "objectives": [
        [0, "Find Greplak Froststaff and obtain the Heart of Ice from him."],
        [0, "Deliver the Heart of Ice to Howland the Elementalist."],
        [0, "Return to Howland the Elementalist for your reward."]
      ],
      "wiki": {"en": "A Heart of Ice", "de": "Ein Herz aus Eis"}
    },
    "101087": {
      "name": "A Humbling Gift",
      "type": "event",
      "givers": [492],
      "event": 13,
      "rewards": ["Frozen Accessory Token"],
      "objectives": [
        [0, "Acquire 100 Candy Cane Shards by participating in Wintersday activities."],
        [0, "See Krunch for your reward."]
      ],
      "wiki": {"en": "A Humbling Gift", "de": "Ein bescheidenes Geschenk"}
    },
    "101088": {
      "name": "A Little Help From Above",
      "type": "secondary",
      "givers": [205],
      "xp": 10000,
      "gold": 2000,
      "rewards": ["5 Royal Gifts", "1 Medal of Honor"],
      "requires": [101223],
      "next": [101245],
      "objectives": [
        [0, "Travel to the Asuran Lab via the Secret River Passage in Talmark Wilderness"],
        [0, "Speak with Livia to plan your raid on Shaemoor"],
        [0, "Acquire the Key to the Fountain of Truth by killing Cairn the Berserker in Loamhurst"],
        [0, "Speak with Zinn to find out what weapons he has prepared for you."],
        [0, "Clear the way to the Fountain of Truth by defeating Justiciar Sevaan and his forces in Shaemoor. [10...0] of 10 groups remaining."],
        [0, "Open the gate to the Fountain of Truth, and kill Aily the Innocent."],
        [0, "Return to Princess Salma for a reward."]
      ],
      "wiki": {"en": "A Little Help From Above", "de": "Ein wenig Hilfe von oben"}
    },
    "101089": {
      "name": "A Mesmer's Burden",
      "type": "secondary",
      "givers": [390],
      "xp": 250,
      "skills": [31, 40, 76],
      "objectives": [
        [0, "Kill the Rogue Bull that is threatening Althea's theatre."],
        [0, "Return to Lady Althea for your reward."]
      ],
      "next": [101298, 101143],
      "wiki": {"en": "A Mesmer's Burden", "de": "Die Bürde eines Mesmers"}
    },
    "101090": {
      "name": "A Mission of Peace",
      "type": "secondary",
      "givers": [262],
      "xp": 250,
      "requires": [101247],
      "objectives": [
        [0, "Find Gate Guard Hollis at the eastern gate in Old Ascalon]. Give him Zain's strongbox."],
        [0, "Return to Ambassador Zain for your reward."]
      ],
      "rewards": ["Jeweled Chalice", "Energy +6 (Requires 5 Illusion Magic)", "Halves casting time of spells (Chance: 10%)", "Armor +5 (while enchanted)"],
      "wiki": {"en": "A Mission of Peace", "de": "Eine Friedensmission"}
    },
    "101091": {
      "name": "A Monk's Mission",
      "type": "secondary",
      "givers": [229],
      "xp": 250,
      "skills": [281, 296],
      "objectives": [
        [0, "Meet with Paulus inside the Catacombs."],
        [0, "Go with Paulus and use your healing prayers to make sure he survives."],
        [0, "Return to Brother Mhenlo for your reward."]
      ],
      "wiki": {"en": "A Monk's Mission", "de": "Die Mission eines Mönchs"}
    },
    "101092": {
      "name": "A New Elementalist Trainer",
      "type": "secondary",
      "givers": [498],
      "xp": 250,
      "objectives": [
        [
          0,
          "Follow the road southwest from town and continue past Ashford Abbey to find Wizard's Folly. Continue following the road until you reach the tower, and speak to Elementalist Aziure."
        ]
      ],
      "next": [101261],
      "wiki": {"en": "A New Elementalist Trainer", "de": "Eine neue Elementarmagier-Trainerin"}
    },
    "101093": {
      "name": "A New Mesmer Trainer",
      "type": "secondary",
      "givers": [498],
      "xp": 250,
      "objectives": [[0, "Follow the road northwest from town. Talk to Lady Althea at the Actor's Stage."]],
      "requires": [101190],
      "wiki": {"en": "A New Mesmer Trainer", "de": "Eine neue Mesmer-Trainerin"}
    },
    "101094": {
      "name": "A New Monk Trainer",
      "type": "secondary",
      "givers": [498],
      "xp": 250,
      "objectives": [
        [0, "Follow the road southwest toward Ashford. Continue on to Ashford Abbey. Talk to Brother Mhenlo."]
      ],
      "next": [101091],
      "wiki": {"en": "A New Monk Trainer", "de": "Ein neuer Mönch-Trainer"}
    },
    "101095": {
      "name": "A New Necromancer Trainer",
      "type": "secondary",
      "givers": [498],
      "profession": 4,
      "xp": 250,
      "objectives": [
        [
          0,
          "Follow the road southwest from town. Proceed past Ashford Abbey to the Catacombs. Talk to Necromancer Munne."
        ]
      ],
      "next": [100001],
      "wiki": {"en": "A New Necromancer Trainer", "de": "Ein neuer Nekromanten-Trainer"}
    },
    "101096": {
      "name": "A New Ranger Trainer",
      "type": "secondary",
      "givers": [498],
      "profession": 2,
      "xp": 250,
      "objectives": [
        [
          0,
          "Follow the road southwest from town. Turn south on the bridge near the village and enter Regent Valley. Talk to Master Ranger Nente."
        ]
      ],
      "next": [101294],
      "wiki": {"en": "A New Ranger Trainer", "de": "Ein neuer Waldläufer-Trainer"}
    },
    "101097": {
      "name": "A New Warrior Trainer",
      "type": "secondary",
      "givers": [498],
      "xp": 250,
      "objectives": [
        [0, "Follow the road northwest from town. Follow the signs to Green Hills County. Talk to Warmaster Grast."]
      ],
      "next": [101173],
      "wiki": {"en": "A New Warrior Trainer", "de": "Ein neuer Krieger-Trainer"}
    },
    "101098": {
      "name": "A Second Profession",
      "type": "primary",
      "givers": [358],
      "xp": 250,
      "objectives": [
        [
          0,
          "To take Warrior as your second profession, follow the road northwest from town, continue along the road as it turns into Green Hills County, and talk to Warmaster Grast."
        ],
        [
          0,
          "To take Ranger as your second profession, follow the road southwest from town. Turn south at the bridge and follow the signs to Regent Valley. Talk to Master Ranger Nente."
        ],
        [
          0,
          "To take Monk as your second profession, follow the road southwest from town, enter Ashford Abbey, and talk to Brother Mhenlo."
        ],
        [
          0,
          "To take Elementalist as your second profession, follow the road southwest from town, continue past Ashford up into Wizard's Folly, and talk to Elementalist Aziure."
        ],
        [
          0,
          "To take Necromancer as your second profession, follow the road southwest from town, pass through Ashford Abbey into the catacombs, and talk to Necromancer Munne."
        ],
        [
          0,
          "To take Mesmer as your second profession, follow the road northwest from town to the theatre, and talk to Lady Althea."
        ],
        [0, "Return to Armin Saberlin for your reward."]
      ],
      "requires": [101335],
      "next": [101287],
      "wiki": {"en": "A Second Profession", "de": "Eine zweite Klasse"}
    },
    "101099": {
      "name": "A Second Profession",
      "type": "primary",
      "givers": [358],
      "xp": 250,
      "objectives": [
        [
          0,
          "To take Warrior as your second profession, follow the road northwest from town, continue along the road as it turns into Green Hills County, and talk to Warmaster Grast."
        ],
        [
          0,
          "To take Ranger as your second profession, follow the road southwest from town. Turn south at the bridge and follow the signs to Regent Valley. Talk to Master Ranger Nente."
        ],
        [
          0,
          "To take Monk as your second profession, follow the road southwest from town, enter Ashford Abbey, and talk to Brother Mhenlo."
        ],
        [
          0,
          "To take Elementalist as your second profession, follow the road southwest from town, continue past Ashford up into Wizard's Folly, and talk to Elementalist Aziure."
        ],
        [
          0,
          "To take Necromancer as your second profession, follow the road southwest from town, pass through Ashford Abbey into the catacombs, and talk to Necromancer Munne."
        ],
        [
          0,
          "To take Mesmer as your second profession, follow the road northwest from town to the theatre, and talk to Lady Althea."
        ],
        [0, "Return to Armin Saberlin for your reward."]
      ],
      "wiki": {"en": "A Second Profession", "de": "Eine zweite Klasse (Elementarmagier)"}
    },
    "101100": {
      "name": "A Second Profession",
      "type": "primary",
      "givers": [358],
      "xp": 250,
      "objectives": [
        [
          0,
          "To take Warrior as your second profession, follow the road northwest from town, continue along the road as it turns into Green Hills County, and talk to Warmaster Grast."
        ],
        [
          0,
          "To take Ranger as your second profession, follow the road southwest from town. Turn south at the bridge and follow the signs to Regent Valley. Talk to Master Ranger Nente."
        ],
        [
          0,
          "To take Monk as your second profession, follow the road southwest from town, enter Ashford Abbey, and talk to Brother Mhenlo."
        ],
        [
          0,
          "To take Elementalist as your second profession, follow the road southwest from town, continue past Ashford up into Wizard's Folly, and talk to Elementalist Aziure."
        ],
        [
          0,
          "To take Necromancer as your second profession, follow the road southwest from town, pass through Ashford Abbey into the catacombs, and talk to Necromancer Munne."
        ],
        [
          0,
          "To take Mesmer as your second profession, follow the road northwest from town to the theatre, and talk to Lady Althea."
        ],
        [0, "Return to Armin Saberlin for your reward."]
      ],
      "requires": [101173],
      "wiki": {"en": "A Second Profession", "de": "Eine zweite Klasse (Krieger)"}
    },
    "101101": {
      "name": "A Second Profession",
      "type": "primary",
      "givers": [358],
      "xp": 250,
      "objectives": [
        [
          0,
          "To take Warrior as your second profession, follow the road northwest from town, continue along the road as it turns into Green Hills County, and talk to Warmaster Grast."
        ],
        [
          0,
          "To take Ranger as your second profession, follow the road southwest from town. Turn south at the bridge and follow the signs to Regent Valley. Talk to Master Ranger Nente."
        ],
        [
          0,
          "To take Monk as your second profession, follow the road southwest from town, enter Ashford Abbey, and talk to Brother Mhenlo."
        ],
        [
          0,
          "To take Elementalist as your second profession, follow the road southwest from town, continue past Ashford up into Wizard's Folly, and talk to Elementalist Aziure."
        ],
        [
          0,
          "To take Necromancer as your second profession, follow the road southwest from town, pass through Ashford Abbey into the catacombs, and talk to Necromancer Munne."
        ],
        [
          0,
          "To take Mesmer as your second profession, follow the road northwest from town to the theatre, and talk to Lady Althea."
        ],
        [0, "Return to Armin Saberlin for your reward."]
      ],
      "wiki": {"en": "A Second Profession", "de": "Eine zweite Klasse (Mesmer)"}
    },
    "101102": {
      "name": "A Second Profession",
      "type": "primary",
      "givers": [358],
      "xp": 250,
      "objectives": [
        [
          0,
          "To take Warrior as your second profession, follow the road northwest from town, continue along the road as it turns into Green Hills County, and talk to Warmaster Grast."
        ],
        [
          0,
          "To take Ranger as your second profession, follow the road southwest from town. Turn south at the bridge and follow the signs to Regent Valley. Talk to Master Ranger Nente."
        ],
        [
          0,
          "To take Monk as your second profession, follow the road southwest from town, enter Ashford Abbey, and talk to Brother Mhenlo."
        ],
        [
          0,
          "To take Elementalist as your second profession, follow the road southwest from town, continue past Ashford up into Wizard's Folly, and talk to Elementalist Aziure."
        ],
        [
          0,
          "To take Necromancer as your second profession, follow the road southwest from town, pass through Ashford Abbey into the catacombs, and talk to Necromancer Munne."
        ],
        [
          0,
          "To take Mesmer as your second profession, follow the road northwest from town to the theatre, and talk to Lady Althea."
        ],
        [0, "Return to Armin Saberlin for your reward."]
      ],
      "wiki": {"en": "A Second Profession", "de": "Eine zweite Klasse (Mönch)"}
    },
    "101103": {
      "name": "A Second Profession",
      "type": "primary",
      "givers": [358],
      "xp": 250,
      "objectives": [
        [
          0,
          "To take Warrior as your second profession, follow the road northwest from town, continue along the road as it turns into Green Hills County, and talk to Warmaster Grast."
        ],
        [
          0,
          "To take Ranger as your second profession, follow the road southwest from town. Turn south at the bridge and follow the signs to Regent Valley. Talk to Master Ranger Nente."
        ],
        [
          0,
          "To take Monk as your second profession, follow the road southwest from town, enter Ashford Abbey, and talk to Brother Mhenlo."
        ],
        [
          0,
          "To take Elementalist as your second profession, follow the road southwest from town, continue past Ashford up into Wizard's Folly, and talk to Elementalist Aziure."
        ],
        [
          0,
          "To take Necromancer as your second profession, follow the road southwest from town, pass through Ashford Abbey into the catacombs, and talk to Necromancer Munne."
        ],
        [
          0,
          "To take Mesmer as your second profession, follow the road northwest from town to the theatre, and talk to Lady Althea."
        ],
        [0, "Return to Armin Saberlin for your reward."]
      ],
      "wiki": {"en": "A Second Profession", "de": "Eine zweite Klasse (Nekromant)"}
    },
    "101104": {
      "name": "A Second Profession",
      "type": "primary",
      "givers": [358],
      "xp": 250,
      "objectives": [
        [
          0,
          "To take Warrior as your second profession, follow the road northwest from town, continue along the road as it turns into Green Hills County, and talk to Warmaster Grast."
        ],
        [
          0,
          "To take Ranger as your second profession, follow the road southwest from town. Turn south at the bridge and follow the signs to Regent Valley. Talk to Master Ranger Nente."
        ],
        [
          0,
          "To take Monk as your second profession, follow the road southwest from town, enter Ashford Abbey, and talk to Brother Mhenlo."
        ],
        [
          0,
          "To take Elementalist as your second profession, follow the road southwest from town, continue past Ashford up into Wizard's Folly, and talk to Elementalist Aziure."
        ],
        [
          0,
          "To take Necromancer as your second profession, follow the road southwest from town, pass through Ashford Abbey into the catacombs, and talk to Necromancer Munne."
        ],
        [
          0,
          "To take Mesmer as your second profession, follow the road northwest from town to the theatre, and talk to Lady Althea."
        ],
        [0, "Return to Armin Saberlin for your reward."]
      ],
      "wiki": {"en": "A Second Profession", "de": "Eine zweite Klasse (Waldläufer)"}
    },
    "101105": {
      "name": "A Test of Marksmanship",
      "type": "secondary",
      "givers": [522],
      "profession": 2,
      "xp": 250,
      "skills": [407, 432],
      "objectives": [
        [0, "Follow the ridge east until you find a plague worm. Kill all the Plague Worms in the time allotted."],
        [0, "Kill [5...0]/0 more Plague Worm[s]."],
        [0, "Return to Ivor Trueshot for your reward."]
      ],
      "wiki": {"en": "A Test of Marksmanship", "de": "Eine Prüfung in Treffsicherheit"}
    },
    "101106": {
      "name": "A Vengeance of Blades",
      "type": "primary",
      "campaign": 1,
      "region": 0,
      "repeatable": true,
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "requires": [101306],
      "next": [101253],
      "objectives": [
        [0, "Locate Danthor the Adamant."],
        [0, "Defeat Danthor the Adamant."]
      ],
      "wiki": {"en": "A Vengeance of Blades", "de": "Eine klingende Vergeltung"}
    },
    "101107": {
      "name": "A Very Grentchie Wintersday",
      "type": "event",
      "givers": [370],
      "event": 13,
      "xp": 5000,
      "rewards": ["Peppermint Shield", "Gingerbread Focus"],
      "objectives": [
        [0, "Speak to Vehemus to learn how you can assist Grenth."],
        [0, "Ask around for some termites... There must be some out there somewhere."],
        [0, "Ask around for some gunk... There must be some out there somewhere."],
        [0, "Ask around for some garlic... There must be some out there somewhere."],
        [0, "Ask around for a pair of unwashed socks... There must be some out there somewhere."],
        [0, "Return the four ingredients to Vehemus."],
        [0, "Meet Vehemus and the Grentch outside of Lion's Arch."],
        [0, "Travel to the Ascalon Settlement with the Grentch and destroy all the Wintersday gifts from Dwayna. [0...7] of 7 Wintersday gifts remaining."],
        [0, "See Vehemus for your reward."]
      ],
      "wiki": {"en": "A Very Grentchie Wintersday", "de": "Ein Wintertag voller Grentche"}
    },
    "101108": {
      "name": "Across the Wall",
      "type": "secondary",
      "givers": [623],
      "xp": 250,
      "objectives": [
        [0, "Find your way north of the wall. Search the road to Piken Square for Ben Wolfson."],
        [0, "Lead Ben Wolfson back to the gate."],
        [0, "Return to Gate Guard Torin for your reward."]
      ],
      "wiki": {"en": "Across the Wall", "de": "Jenseits des Walls"}
    },
    "101109": {
      "name": "Adventure with an Ally",
      "type": "secondary",
      "givers": [186],
      "xp": 100,
      "objectives": [[0, "Return to Ascalon City. Form a party with another player."]],
      "wiki": {"en": "Adventure with an Ally", "de": "Abenteuer mit einem Verbündeten"}
    },
    "101110": {
      "name": "Althea's Ashes",
      "type": "secondary",
      "givers": [198],
      "xp": 2000,
      "gold": 300,
      "requires": [101259],
      "next": [101148],
      "objectives": [
        [0, "Find the temple where Althea was killed and use the Barradin Family Urn to gather her ashes."],
        [0, "Bring Althea's Ashes to Duke Barradin."]
      ],
      "wiki": {"en": "Althea's Ashes", "de": "Altheas Asche"}
    },
    "101111": {
      "name": "An Ingenious Plan",
      "type": "event",
      "givers": [241],
      "event": 11,
      "xp": 15000,
      "gold": 2500,
      "rewards": ["100 Trick-or-Treat Bags"],
      "objectives": [
        [0, "Defeat the Ingenious Ettins. You have [5...0] of 5 remaining."],
        [0, "See The Countess of Hakewood for your reward."]
      ],
      "wiki": {"en": "An Ingenious Plan", "de": "Ein genialer Plan"}
    },
    "101112": {
      "name": "Ancient Secrets",
      "type": "secondary",
      "givers": [197],
      "xp": 1000,
      "objectives": [
        [0, "Find Sennat Sen in Salt Flats."]
      ],
      "wiki": {"en": "Ancient Secrets", "de": "Alte Geheimnisse"}
    },
    "101113": {
      "name": "Army Life",
      "type": "secondary",
      "givers": [648],
      "profession": 1,
      "xp": 250,
      "skills": [337, 351],
      "objectives": [
        [0, "Find Old Mac's body out in the Breach."],
        [0, "Escort Old Mac back to Piken Square."],
        [0, "Return to Armsman Pitney for your reward."]
      ],
      "wiki": {"en": "Army Life", "de": "Leben in der Armee"}
    },
    "101114": {"name": "Ascalon Academy", "type": "primary", "campaign": 1, "wiki": {"en": "Ascalon Academy"}},
    "101115": {
      "name": "Asuran Allies",
      "type": "secondary",
      "campaign": 1,
      "region": 0,
      "requires": [101316],
      "objectives": [
        [0, "Complete the \"Zinn's Task\" or \"The Knowledgeable Asura\" quest"],
        [0, "Speak with the Asura Chark in the Tarnished Coast."],
        [0, "Witness the events of Zinn's \"trial.\""],
        [0, "Report to Salma in Talmark Wilderness on the outcome of the Asuran Trial."],
        [0, "Speak with the Lion's Arch Keep gate guard to gain access to Lion's Arch Keep where Salma will have your congratulatory message."]
      ],
      "wiki": {"en": "Asuran Allies", "de": "Asura-Verbündete"}
    },
    "101116": {
      "name": "Auspicious Beginnings",
      "type": "primary",
      "campaign": 1,
      "region": 0,
      "repeatable": true,
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "requires": [101248],
      "next": [101306],
      "objectives": [
        [0, "Rescue Miku from the White Mantle."],
        [0, "Locate Danthor."],
        [0, "Defeat Danthor's forces."]
      ],
      "wiki": {"en": "Auspicious Beginnings", "de": "Verheißungsvoller Beginn"}
    },
    "101117": {
      "name": "Bandit Raid",
      "type": "secondary",
      "givers": [230],
      "xp": 250,
      "objectives": [
        [0, "Recover the Ashford strongbox from the bandits."],
        [0, "Return the strongbox to Devona in Ashford."]
      ],
      "wiki": {"en": "Bandit Raid", "de": "Banditenüberfall"}
    },
    "101118": {
      "name": "Bandit Trouble",
      "type": "secondary",
      "givers": [795],
      "xp": 500,
      "requires": [101146],
      "objectives": [
        [0, "Tell Mantle Knight Karriya of Miraba's bandit problem."],
        [0, "Deliver the Token of Janthir to Miraba."]
      ],
      "rewards": ["Tall Shield", "Armor: 9 (Requires 6 Tactics)", "Armor +5 (while Health is below 50%)", "Armor +5 (while Hexed)"],
      "wiki": {"en": "Bandit Trouble", "de": "Ärger mit Banditen"}
    },
    "101119": {
      "name": "Barradin's Advance",
      "type": "secondary",
      "givers": [231],
      "xp": 250,
      "next": [101120],
      "objectives": [
        [0, "Go to the Hammer Gate. Talk to Gate Guard Hollis."]
      ],
      "wiki": {"en": "Barradin's Advance", "de": "Barradins Vormarsch"}
    },
    "101120": {
      "name": "Barradin's Stand",
      "type": "secondary",
      "givers": [232],
      "xp": 500,
      "requires": [101119],
      "objectives": [
        [0, "Go to Piken Square and see if Duke Barradin needs assistance."]
      ],
      "rewards": ["Tall Shield (Militia Shield skin)", "Armor: 6 (Requires 4 Tactics)", "Armor +10 (vs. Charr)", "Health +15"],
      "wiki": {"en": "Barradin's Stand", "de": "Barradins Widerstand"}
    },
    "101121": {
      "name": "Better You Than Me",
      "type": "event",
      "givers": [650],
      "event": 11,
      "rewards": ["Ghoulish Accessory Token"],
      "objectives": [
        [0, "Acquire 50 pieces of Candy Corn by participating in Halloween activities."],
        [0, "See Gul Terror for your reward."]
      ],
      "wiki": {"en": "Better You Than Me", "de": "Lieber Ihr als ich"}
    },
    "101122": {
      "name": "Blankets for the Settlers",
      "type": "secondary",
      "givers": [293],
      "xp": 500,
      "objectives": [
        [0, "Go to Nebo Village with the Militia Weapons. Talk to Etham the Artisan and trade the weapons for blankets."],
        [0, "Take the blankets to Captain Greywind."]
      ],
      "rewards": ["Longbow"],
      "wiki": {"en": "Blankets for the Settlers", "de": "Decken für die Siedler"}
    },
    "101123": {
      "name": "Blood And Smoke",
      "type": "secondary",
      "givers": [237],
      "xp": 2500,
      "skills": [66, 131, 187, 245, 368, 426],
      "requires": [101145],
      "objectives": [
        [0, "Find Scout Melthoran in Reed Bog."],
        [0, "Find Dark Oak in the Falls to the southwest."],
        [0, "Slay Drogo Greatmane."],
        [0, "Return the bloody heart to Dark Oak."],
        [0, "Return to Deep Root and tell him of Dark Oak's warning."]
      ],
      "wiki": {"en": "Blood And Smoke", "de": "Blut und Rauch"}
    },
    "101124": {
      "name": "Caravan in Trouble",
      "type": "secondary",
      "givers": [631],
      "xp": 250,
      "skills": [44, 136, 186, 240, 320, 453],
      "objectives": [
        [0, "Help Cynn and Mhenlo rescue the Merchant Caravan."],
        [0, "See Laris Dankworth for your reward."]
      ],
      "wiki": {"en": "Caravan in Trouble", "de": "Karawane in Bedrängnis"}
    },
    "101125": {
      "name": "Casualty Report",
      "type": "secondary",
      "givers": [568],
      "xp": 150,
      "skills": [102],
      "next": [101141],
      "objectives": [
        [0, "Deliver the Casualty Report to Warmaster Tydus."],
        [0, "Return to Undertaker Cortis for your reward."]
      ],
      "wiki": {"en": "Casualty Report", "de": "Verlustmeldung"}
    },
    "101126": {
      "name": "Charr Reinforcements",
      "type": "secondary",
      "givers": [258],
      "profession": 2,
      "xp": 500,
      "skills": [399, 415],
      "objectives": [
        [0, "Meet Aidan just outside of Piken Square."],
        [0, "Ambush the Charr reinforcements."],
        [0, "Pillage the Charr Supply Depot."],
        [0, "Kill Kaargoth Bloodclaw."],
        [0, "Return to Ivor Trueshot for your reward."]
      ],
      "wiki": {"en": "Charr Reinforcements", "de": "Charr-Verstärkung"}
    },
    "101127": {
      "name": "Charr at the Gate",
      "type": "secondary",
      "givers": [255],
      "xp": 200,
      "objectives": [
        [0, "Follow Rurik and help him defeat the Charr."],
        [0, "Return to Prince Rurik for your reward."]
      ],
      "wiki": {"en": "Charr at the Gate", "de": "Charr vor dem Tor"}
    },
    "101128": {
      "name": "Charr in the Catacombs",
      "type": "secondary",
      "givers": [255],
      "xp": 250,
      "gold": 100,
      "objectives": [
        [0, "Find out if the Charr Ranger is using the catacombs. Speak to Brother Mhenlo in Ashford Abbey."],
        [0, "Ask Necromancer Munne if she has any information on the Charr."],
        [0, "Seek out Oberan the Reviled deep within the catacombs. Ask him about the Charr Ranger."],
        [0, "Return to Rurik in Ascalon City and show him the Sharp Charr Tooth."]
      ],
      "requires": [101330],
      "wiki": {"en": "Charr in the Catacombs", "de": "Charr in den Katakomben"}
    },
    "101129": {
      "name": "Charr in the Tunnels",
      "type": "secondary",
      "givers": [256],
      "xp": 250,
      "gold": 100,
      "objectives": [
        [0, "Rendevouz[sic] with Adept Mullenix."],
        [0, "Take out Wyle Brimscourge and use the key to access the lower level."],
        [0, "Take out the Charr patrols. [3...0] remain."],
        [0, "Report to Lieutenant Greywind."]
      ],
      "requires": [101187],
      "next": [101300],
      "wiki": {"en": "Charr in the Tunnels", "de": "Charr in den Tunneln"}
    },
    "101130": {
      "name": "Cities of Ascalon",
      "type": "secondary",
      "givers": [209],
      "xp": 1000,
      "objectives": [
        [0, "Find the historical monument in Surmia."],
        [0, "Find the historical monument in Nolani."],
        [0, "Find the historical monument of King's Watch."]
      ],
      "rewards": ["Earth Scroll", "Energy +6 (Requires 5 Earth Magic)", "Health +25", "Armor +5", "(randomly generated)", "Grim Cesta", "Energy +6 (Requires 5 Blood Magic)", "Health -50", "Energy +3 (while Enchanted)", "Energy +3 (while Hexed)", "Energy +5 (while Health is below 40%)"],
      "wiki": {"en": "Cities of Ascalon", "de": "Ascalons Städte"}
    },
    "101131": {
      "name": "Cold One",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "objectives": [
        [0, "Lead frost golems through the crushers. Combine enough ice with the \"warm one\" to make a \"cold one.\""],
        [0, "See Krak Flamewhip for your reward."]
      ],
      "wiki": {"en": "Cold One", "de": "Kaltes (Quest)"}
    },
    "101132": {
      "name": "Commandeering a Mortal Vessel",
      "type": "event",
      "givers": [241],
      "event": 11,
      "xp": 10000,
      "gold": 1500,
      "rewards": ["100 Trick-or-Treat Bags"],
      "objectives": [
        [0, "Travel to Majesty's Rest and enter the mausoleum."],
        [0, "Search the mausoleum for a sarcophagus worthy of a king."],
        [0, "See The Countess of Hakewood for your reward."]
      ],
      "wiki": {"en": "Commandeering a Mortal Vessel", "de": "Rekrutierung einer sterblichen Hülle"}
    },
    "101133": {
      "name": "Counting the Fallen",
      "type": "secondary",
      "givers": [209],
      "xp": 500,
      "next": [101130],
      "objectives": [
        [0, "Find the Ascalon census in the ruins in Old Ascalon."],
        [0, "Return to Symon the Scribe for your reward."]
      ],
      "rewards": ["Frost Artifact", "Energy +6 (Requires 5 Water Magic)", "Reduces Poison duration on you by 20%", "Reduces Bleeding duration on you by 20%", "Armor +7 (while Hexed)", "Idol", "Energy +6 (Requires 5 Curses)", "Armor +5 (while casting)"],
      "wiki": {"en": "Counting the Fallen", "de": "Volkszählung der Gefallenen"}
    },
    "101134": {
      "name": "Death in the Ruins",
      "type": "secondary",
      "givers": [687],
      "xp": 250,
      "skills": [133, 150],
      "next": [101203],
      "objectives": [
        [0, "[0..6]/6 Oberan's Minions slain."],
        [0, "Return to Kasha Blackblood for your reward."]
      ],
      "wiki": {"en": "Death in the Ruins", "de": "Tod in den Ruinen"}
    },
    "101135": {
      "name": "Defend Denravi",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
      "objectives": [
        [0, "Travel to The Henge of Denravi and speak with Shadow to learn how you can help defend against the Titan threat."],
        [0, "Seek out Evennia and offer her your assistance."],
        [0, "Help the Shining Blade defend Denravi from the Titans. Evennia must survive."]
      ],
      "wiki": {"en": "Defend Denravi", "de": "Verteidigt Denravi"}
    },
    "101136": {
      "name": "Defend Denravi (Hard mode)",
      "type": "secondary",
      "givers": [347],
      "xp": 50000,
      "gold": 7500,
      "rewards": ["1 Gold Zaishen Coin"],
      "requires": [101138],
      "next": [101308],
      "objectives": [
        [0, "Travel to The Henge of Denravi and speak with Shadow to learn how you can help defend against the Titan threat."],
        [0, "Seek out Evennia and offer her your assistance."],
        [0, "Help the Shining Blade defend Denravi from the Titans. Evennia must survive."]
      ],
      "wiki": {"en": "Defend Denravi (Hard mode)", "de": "Verteidigt Denravi (Schwerer Modus)"}
    },
    "101137": {
      "name": "Defend Droknar's Forge",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "next": [101276, 101139, 101135],
      "objectives": [
        [0, "Find and destroy the Titan Lord Evirso Sectus and his army in Mineral Springs."],
        [0, "Return to Vision of Glint for your reward."]
      ],
      "wiki": {"en": "Defend Droknar's Forge", "de": "Verteidigt Droknars Schmiede"}
    },
    "101138": {
      "name": "Defend Droknar's Forge (Hard mode)",
      "type": "secondary",
      "givers": [775],
      "xp": 50000,
      "gold": 7500,
      "rewards": ["1 Gold Zaishen Coin"],
      "requires": [101307],
      "next": [101277, 101140, 101136],
      "objectives": [
        [0, "Find and destroy the Titan Lord Evirso Sectus and his army in Mineral Springs."],
        [0, "Return to Vision of Glint for your reward."]
      ],
      "wiki": {"en": "Defend Droknar's Forge (Hard mode)", "de": "Verteidigt Droknars Schmiede (Schwerer Modus)"}
    },
    "101139": {
      "name": "Defend North Kryta Province",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
      "objectives": [
        [0, "Travel to Lion's Arch and speak with Firstwatch Sergio to learn of the fate of North Kryta Province."],
        [0, "Speak with Lionscout Gabrian to discover the fate of the Ascalon Settlement."],
        [0, "Seek out Captain Greywind to discover if the Ascalon Settlement is safe."],
        [0, "Defend Captain Greywind and the trapped Ascalon Settlers. Keep Captain Greywind alive!"],
        [0, "Return to the Ascalon Settlement and defend it! Captain Greywind must survive."],
        [0, "Return to Vision of Glint for your reward."]
      ],
      "wiki": {"en": "Defend North Kryta Province", "de": "Verteidigt die Provinz Nordkryta"}
    },
    "101140": {
      "name": "Defend North Kryta Province (Hard mode)",
      "type": "secondary",
      "givers": [347],
      "xp": 50000,
      "gold": 7500,
      "rewards": ["1 Gold Zaishen Coin"],
      "requires": [101138],
      "next": [101308],
      "objectives": [
        [0, "Travel to Lion's Arch and speak with Firstwatch Sergio to learn of the fate of North Kryta Province."],
        [0, "Speak with Lionscout Gabrian to discover the fate of the Ascalon Settlement."],
        [0, "Seek out Captain Greywind to discover if the Ascalon Settlement is safe."],
        [0, "Defend Captain Greywind and the trapped Ascalon Settlers. Keep Captain Greywind alive!"],
        [0, "Return to the Ascalon Settlement and defend it! Captain Greywind must survive."],
        [0, "Return to Vision of Glint for your reward."]
      ],
      "wiki": {
        "en": "Defend North Kryta Province (Hard mode)",
        "de": "Verteidigt die Provinz Nordkryta (Schwerer Modus)"
      }
    },
    "101141": {
      "name": "Defend the Wall",
      "type": "primary",
      "givers": [287],
      "xp": 500,
      "requires": [101274],
      "missions": [28],
      "objectives": [
        [0, "Talk to Squire Zachery at the Great Northern Wall."]
      ],
      "wiki": {"en": "Defend the Wall", "de": "Verteidigt den Wall"}
    },
    "101142": {
      "name": "Deliver a Message to My Wife",
      "type": "secondary",
      "givers": [247],
      "xp": 500,
      "objectives": [
        [0, "Find Melka Blanston, outside of Ascalon City, and tell her that Gurn loves her."]
      ],
      "wiki": {"en": "Deliver a Message to My Wife", "de": "Bringt meiner Frau eine Nachricht."}
    },
    "101143": {
      "name": "Domination Magic",
      "type": "secondary",
      "givers": [236],
      "profession": 5,
      "xp": 250,
      "skills": [27, 28],
      "objectives": [
        [0, "Head east from Foible's Fair to the woods. Destroy the skale brood."],
        [0, "Return to Vassar for your reward."]
      ],
      "wiki": {"en": "Domination Magic (quest)", "de": "Beherrschungsmagie (Quest)"}
    },
    "101144": {
      "name": "Don't Fear the Reapers",
      "type": "event",
      "givers": [384],
      "event": 11,
      "xp": 15000,
      "rewards": ["7 Phantasmal Tonics", "75 Trick-or-Treat Bags", "7 Phantasmal Tonics", "25 Trick-or-Treat Bags"],
      "requires": [101233],
      "next": [101235],
      "objectives": [
        [0, "Travel to the Temple of the Ages, Zin Ku Corridor, or Chantry of Secrets."],
        [0, "Use a Transmogrifier Tonic and speak to the Voice of Grenth and gain audience in the Underworld as an agent of the Mad King."],
        [0, "Navigate through the Underworld as an agent of the Mad King to speak with all seven Reapers. You've consulted [0&hellip;7] Reaper[s] in your quest for the truth."],
        [0, "Travel to the Hall of Judgment to receive the Reapers' final report."],
        [0, "See Mad King's Steward for your reward."]
      ],
      "wiki": {"en": "Don't Fear the Reapers", "de": "Keine Angst vor den Schnittern"}
    },
    "101145": {
      "name": "Dropping Eaves",
      "type": "secondary",
      "givers": [237],
      "xp": 500,
      "skills": [48, 104, 216, 306, 378, 470],
      "next": [101123],
      "objectives": [
        [0, "Find the White Mantle meeting spot and eavesdrop on their conversation."],
        [0, "Return to Deep Root and tell him what you have overheard."]
      ],
      "wiki": {"en": "Dropping Eaves", "de": "Belauschen"}
    },
    "101146": {
      "name": "Duties of a Lionguard",
      "type": "secondary",
      "givers": [422],
      "xp": 500,
      "next": [101118],
      "objectives": [
        [0, "Look for Lionguard Orrin at Miraba's farm."]
      ],
      "wiki": {"en": "Duties of a Lionguard", "de": "Die Pflichten eines Löwengardisten"}
    },
    "101147": {
      "name": "Ebon Vanguard Allies",
      "type": "secondary",
      "campaign": 1,
      "region": 0,
      "requires": [101316],
      "objectives": [
        [0, "Complete the quest \"A Good Deed.\""],
        [0, "Speak with Gwen in the Hall of Monuments."],
        [0, "Assist Keiran with his ill fated plan to win Gwen's affection."],
        [0, "Return to the Hall of Monuments."],
        [0, "Witness the pact between the Shining Blade and the Ebon Vanguard in the Ice Cliff Chasms."],
        [0, "Finish enlisting the aid of the Asura. (Asuran Allies)"],
        [0, "See Princess Salma for your reward."]
      ],
      "wiki": {"en": "Ebon Vanguard Allies", "de": "Verbündete von der Ebon-Vorhut"}
    },
    "101148": {
      "name": "Elegy for Those Left Behind",
      "type": "secondary",
      "givers": [540, 346],
      "xp": 500,
      "gold": 100,
      "requires": [101110],
      "next": [101256],
      "objectives": [
        [0, "Enter the Tunnels of the Forsaken."],
        [0, "Ignite the first pyre. 3 remaining. Hold off the waves of furious spirits."],
        [0, "Ignite the second pyre. 2 remaining. Hold off the waves of furious spirits."],
        [0, "Ignite the third pyre. 1 remaining. Hold off the waves of furious spirits."],
        [0, "Speak with Ghost of Althea in the ruined village."]
      ],
      "wiki": {"en": "Elegy for Those Left Behind", "de": "Elegie für die Zurückgelassenen"}
    },
    "101149": {
      "name": "Elemental Knowledge",
      "type": "secondary",
      "givers": [541],
      "xp": 250,
      "skills": [165, 212],
      "next": [101231],
      "objectives": [
        [0, "Seek out Shalev the Hermit."]
      ],
      "wiki": {"en": "Elemental Knowledge", "de": "Elementares Wissen"}
    },
    "101150": {
      "name": "Elementalist Test",
      "type": "primary",
      "givers": [542],
      "profession": 6,
      "xp": 500,
      "skills": [180, 194],
      "objectives": [
        [0, "Kill the skale along the road southwest. Acquire a shimmering scale."],
        [0, "0...1 shimmering scales collected."],
        [0, "Return to Howland the Elementalist for your reward."]
      ],
      "next": [101166],
      "wiki": {"en": "Elementalist Test", "de": "Elementarmagier-Prüfung"}
    },
    "101151": {
      "name": "Endangered Species",
      "type": "secondary",
      "givers": [234],
      "profession": 2,
      "xp": 200,
      "skills": [391, 411, 436, 446],
      "objectives": [
        [0, "Deliver a Melandru's Stalker to Nente."],
        [0, "Return to Master Ranger Nente for your reward."]
      ],
      "wiki": {"en": "Endangered Species", "de": "Bedrohte Tierart"}
    },
    "101152": {
      "name": "Every Bit Helps",
      "type": "event",
      "givers": [384],
      "event": 11,
      "repeatable": true,
      "xp": 10000,
      "gold": 1000,
      "rewards": ["25 Trick-or-Treat Bags"],
      "requires": [101235],
      "objectives": [
        [0, "Enter the Underworld."],
        [0, "Use the Everlasting Mobstoppers to trap Skeletons of Dhuum."],
        [0, "Bring 3 Captured Skeletons to the Mad King's steward 'steward' is lowercase for a reward."]
      ],
      "wiki": {"en": "Every Bit Helps", "de": "Jede Hilfe zählt"}
    },
    "101153": {
      "name": "Evil Residents",
      "type": "event",
      "givers": [241],
      "event": 11,
      "xp": 2000,
      "gold": 1000,
      "rewards": ["50 Trick-or-Treat Bags"],
      "next": [101153],
      "objectives": [
        [0, "Meet up with the Ascalonians outside of Lion's Arch."],
        [0, "Investigate the Ascalon Settlement."],
        [0, "Protect the survivors from the waves of undead. At least one must survive."],
        [0, "Defeat the Candy Corn Tyrant."],
        [0, "See The Countess of Hakewood for your reward."]
      ],
      "wiki": {"en": "Evil Residents", "de": "Bewohner des Bösen"}
    },
    "101154": {
      "name": "Evil Residents Code: Harmonica",
      "type": "event",
      "givers": [241],
      "event": 11,
      "repeatable": true,
      "xp": 1000,
      "gold": 200,
      "rewards": ["10 Trick-or-Treat Bags"],
      "objectives": [
        [0, "Talk to the Unlike the objective below, \"the\" is lowercase here Countess of Hakewood to travel to the settlement."],
        [0, "Investigate the Ascalon Settlement."],
        [0, "Protect the survivors from the waves of undead. At least one must survive."],
        [0, "Defeat the Candy Corn Tyrant."],
        [0, "See The Unlike the objective above, \"The\" is capitalized here Countess of Hakewood for your reward."]
      ],
      "wiki": {"en": "Evil Residents Code: Harmonica", "de": "Bewohner des Bösen, Codename: Mundharmonika"}
    },
    "101155": {
      "name": "Experimental Elixir",
      "type": "secondary",
      "givers": [550],
      "profession": 5,
      "xp": 500,
      "skills": [67],
      "requires": [101332],
      "next": [101331, 101191],
      "objectives": [
        [0, "Give the experimental elixir to Fadden Hathorn in Sardelac Sanitarium."],
        [0, "See Vassar for your reward."]
      ],
      "wiki": {"en": "Experimental Elixir", "de": "Experimentelles Heilmittel"}
    },
    "101156": {
      "name": "Eye For Profit",
      "type": "secondary",
      "givers": [451],
      "xp": 500,
      "skills": [10, 138, 225, 302, 334, 427],
      "objectives": [
        [0, "Find Grahm in the Sage Lands."],
        [0, "Slay Gale Stormsend and obtain the Lilac Eye."],
        [0, "Return the Lilac Eye to Trader Versai."]
      ],
      "wiki": {"en": "Eye For Profit", "de": "Ein Auge für Profit"}
    },
    "101157": {
      "name": "Fallen Soldiers",
      "type": "secondary",
      "givers": [568],
      "profession": 4,
      "xp": 250,
      "skills": [96],
      "objectives": [
        [0, "Collect [10..0] more family crest[s] from the fallen soldiers."],
        [0, "Return to Undertaker Cortis for your reward."]
      ],
      "wiki": {"en": "Fallen Soldiers", "de": "Gefallene Soldaten"}
    },
    "101158": {
      "name": "Family Ties (Prophecies quest)",
      "type": "secondary",
      "givers": [551],
      "xp": 500,
      "objectives": [
        [0, "Find the ghosts of Barris and Tamra Lefey."],
        [0, "Lead the ghosts to the gates of Ascalon City."],
        [0, "See Elise Lefey for your reward."]
      ],
      "wiki": {"en": "Family Ties (Prophecies quest)", "de": "Familienbande (Prophecies)"}
    },
    "101159": {
      "name": "Fighting in a Winter Wonderland",
      "type": "event",
      "givers": [735],
      "event": 13,
      "repeatable": true,
      "xp": 5000,
      "gold": 7500,
      "objectives": [
        [0, "Report to the Battlefield."],
        [0, "Destroy the Beacon of Grenth."],
        [0, "Destroy the Beacon of Balthazar."],
        [0, "Bonus Objective: Destroy all opposing Champions."],
        [0, "Bonus Objective: Complete the battle in under 20 minutes."],
        [0, "Bonus Objective: Complete the battle in under 10 minutes."],
        [0, "Bonus Objective: Complete the battle in under 5 minutes."],
        [0, "Bonus Objective: Protect all of your Champions and Beacons."]
      ],
      "wiki": {"en": "Fighting in a Winter Wonderland", "de": "Stille Nacht, heilige Schlacht"}
    },
    "101160": {
      "name": "Final Blow",
      "type": "primary",
      "givers": [375, 376],
      "xp": 500,
      "gold": 100,
      "missions": [122],
      "objectives": [
        [0, "Kill Inner Council Member Argyle."],
        [0, "Kill Inner Council Member Bolivar."],
        [0, "Kill Inner Council Member Cuthbert."],
        [0, "Talk to Captain Grumby."],
        [0, "See Fogard Axemighty for your reward."]
      ],
      "wiki": {"en": "Final Blow", "de": "Der letzte Schlag"}
    },
    "101161": {
      "name": "Fire in the Hole",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "objectives": [
        [0, "Go to the last place where the flame djinn was last seen."],
        [0, "Hunt down and destroy the flame djinn."],
        [0, "See Krak Flamewhip for your reward."]
      ],
      "wiki": {"en": "Fire in the Hole", "de": "Feuer im Loch"}
    },
    "101162": {
      "name": "Fires in the East",
      "type": "secondary",
      "givers": [231],
      "xp": 500,
      "requires": [101119],
      "objectives": [
        [0, "Find the Charr fires northeast of the Frontier Gate. Kill the Flame Keepers and extinguish the flames."],
        [0, "Return to Captain Arne for your reward."]
      ],
      "rewards": ["Inscribed Staff:", "Chaos damage: 4-7 (req. 3 Domination Magic)", "+4 Energy", "+3 Energy (while health is above 80%)", "+3 Energy (while health is above 60%)", "+3 Energy (while health is above 40%)", "Sundering Long Sword:", "Slashing damage: 10-14 (req. 3 Swordsmanship)", "Armor penetration +10% (Chance: 10%)1", "Damage +15% (vs. hexed foes)", "Can be salvaged"],
      "wiki": {"en": "Fires in the East", "de": "Feuer im Osten"}
    },
    "101163": {
      "name": "Fires in the North",
      "type": "secondary",
      "givers": [198],
      "xp": 1000,
      "objectives": [
        [0, "Find the Charr fires along the southern edge of the Diessa Lowlands. Kill the Flame Keepers and extinguish the flames."],
        [0, "Return to Duke Barradin for your reward."]
      ],
      "rewards": ["Smiting Rod", "Holy Dmg: 4-7 (Requires 3 Smiting Prayers)", "Armor +4 (while Hexed)", "Damage +10% (while Hexed)"],
      "wiki": {"en": "Fires in the North", "de": "Feuer im Norden"}
    },
    "101164": {
      "name": "Forgotten Wisdom",
      "type": "attribute",
      "givers": [768],
      "xp": 1500,
      "rewards": ["15 Attribute points"],
      "requires": [101266],
      "next": [101282],
      "objectives": [
        [0, "Seek out Siliss Yassith in the Arid Sea."]
      ],
      "wiki": {"en": "Forgotten Wisdom", "de": "Vergessene Weisheit"}
    },
    "101165": {
      "name": "Frontier Gate Fugitives",
      "type": "secondary",
      "givers": [597],
      "xp": 1000,
      "objectives": [
        [0, "Search the Eastern Frontier and Pockmark Flats for Footman Tate and Footman Quinn. Bring them to justice."],
        [0, "Footman Tate surrendered. Lead him back to the Frontier Gate."],
        [0, "Kill Footman Quinn."],
        [0, "Return to Warmaster Riga for your reward."]
      ],
      "rewards": ["Longbow of Fortitude", "Piercing Dmg: 11-18 (Requires 3 Marksmanship)", "Damage +10% (while in a stance)", "Health +20", "Two-handed", "Jeweled Chakram", "Energy +6 (Requires 5 Inspiration Magic)", "Energy +5 (while enchanted)"],
      "wiki": {"en": "Frontier Gate Fugitives", "de": "Grenztor-Flüchtlinge"}
    },
    "101166": {
      "name": "Further Adventures",
      "type": "primary",
      "givers": [498],
      "xp": 250,
      "objectives": [[0, "Follow the road southwest from Ashford Abbey. Talk to Devona."]],
      "requires": [101378, 101150, 101190, 101197, 101200, 101213],
      "next": [101335],
      "wiki": {"en": "Further Adventures", "de": "Weitere Abenteuer"}
    },
    "101167": {
      "name": "Garfazz Bloodfang",
      "type": "secondary",
      "givers": [444],
      "xp": 500,
      "objectives": [
        [0, "Go to the Diessa Lowlands. Kill Garfazz Bloodfang."],
        [0, "Return to Viggo for your reward."]
      ],
      "rewards": ["Cane (uses skin of Deadly Cesta)", "Chaos Dmg: 4-7 (Requires 3 Illusion Magic)", "Energy +3 (while Enchanted)", "Health +10 (while Enchanted)", "Long Sword", "Slashing Dmg: 10-14 (Requires 3 Swordsmanship)", "Damage +15% (while Hexed)", "Damage +15% (while Enchanted)"],
      "wiki": {"en": "Garfazz Bloodfang (quest)", "de": "Garfazz Bloodfang"}
    },
    "101168": {
      "name": "Gargoyle Trouble",
      "type": "secondary",
      "givers": [617],
      "profession": 1,
      "xp": 200,
      "skills": [1, 321, 382, 384],
      "objectives": [
        [0, "Kill 5 Shatter or Flash Gargoyles. You have killed 0..5 gargoyles."],
        [0, "Return to Warmaster Grast for your reward."]
      ],
      "wiki": {"en": "Gargoyle Trouble", "de": "Ärger mit den Gargoyles"}
    },
    "101169": {
      "name": "Gathering Resources",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "objectives": [
        [0, "Speak to Tharn Stonerift."],
        [0, "Gather 10 ore ingots."],
        [0, "Return the ore ingots to Tharn Stonerift."],
        [0, "See Krak Flamewhip for your reward."]
      ],
      "wiki": {"en": "Gathering Resources", "de": "Ressourcen sammeln"}
    },
    "101170": {
      "name": "Getting Started in Guild Wars",
      "type": "primary",
      "givers": [539],
      "xp": 500,
      "gold": 100,
      "objectives": [
        [0, "Meet up with your profession trainer outside the city gate. Complete their test."],
        [0, "Meet up with Devona and complete her task."],
        [
          0,
          "Choose a secondary profession. Visit trainers to try out different skills from each profession. Once decided, return to Armin Saberlin."
        ],
        [0, "Speak with Sir Tydus when you are ready to proceed."],
        [0, "Speak with any Town Crier to receive your reward."]
      ],
      "wiki": {"en": "Getting Started in Guild Wars", "de": "Einstieg in Guild Wars"}
    },
    "101171": {
      "name": "Ghostly Vengeance",
      "type": "secondary",
      "givers": [573],
      "xp": 1000,
      "skills": [14, 140, 219, 256, 363, 457],
      "objectives": [
        [0, "[0..10]/10 Minotaurs slain."],
        [0, "Return to Marchena for your reward."]
      ],
      "wiki": {"en": "Ghostly Vengeance", "de": "Geisterhafte Rache"}
    },
    "101172": {
      "name": "Graven Images",
      "type": "secondary",
      "givers": [537],
      "xp": 600,
      "skills": [9, 116, 183, 283, 342, 402],
      "objectives": [
        [0, "Protect Archivist Ithimar from the Nightmares."],
        [0, "Return to Archivist Ithimar for your reward."]
      ],
      "wiki": {"en": "Graven Images", "de": "Eingravierte Bilder"}
    },
    "101173": {
      "name": "Grawl Invasion",
      "type": "secondary",
      "givers": [594],
      "xp": 250,
      "skills": [1, 382, 384],
      "objectives": [
        [0, "Look for Grawl invaders along the road. Eliminate them."],
        [0, "Return to Warmaster Grast for your reward."]
      ],
      "wiki": {"en": "Grawl Invasion", "de": "Grawl-Invasion"}
    },
    "101174": {
      "name": "Gwen's Flute",
      "type": "secondary",
      "givers": [600],
      "xp": 250,
      "objectives": [[0, "Find Gwen's Flute"]],
      "wiki": {"en": "Gwen's Flute (quest)", "de": "Gwens Flöte (Quest)"}
    },
    "101175": {
      "name": "Hammer and Anvil",
      "type": "secondary",
      "givers": [198],
      "xp": 500,
      "requires": [101301],
      "objectives": [
        [0, "Ambush the Charr in the tar pits south of Piken Square. Strike down Grimm Sharpfang."],
        [0, "Return to Duke Barradin for your reward."]
      ],
      "rewards": ["Tall Shield (Militia Shield skin)", "Armor: 6 (Requires 4 Tactics)", "Armor +5 (while attacking)", "Armor -10 (while casting)"],
      "wiki": {"en": "Hammer and Anvil", "de": "Hammer und Amboss"}
    },
    "101176": {
      "name": "Heirlooms of the Mad King",
      "type": "event",
      "givers": [241],
      "event": 11,
      "xp": 5000,
      "gold": 1000,
      "rewards": ["50 Trick-or-Treat Bags"],
      "objectives": [
        [0, "Defeat Bryce the Stableboy and recover King Thorn's Unlike the other two objectives, it's \"King Thorn's\" instead of \"Mad King Thorn's\" most prized half-eaten apple from his saddlebag."],
        [0, "Defeat Geoffrey the Butler to recover Mad King Thorn's left slipper."],
        [0, "Defeat Guardsman Brofis the Deserter to recover Mad King Thorn's copy of \"Moa Soup for the Demented Soul.\""],
        [0, "See The Countess of Hakewood for your reward."]
      ],
      "wiki": {"en": "Heirlooms of the Mad King", "de": "Erbstücke des verrückten Königs"}
    },
    "101177": {
      "name": "Helping the Dwarves",
      "type": "secondary",
      "givers": [609],
      "xp": 250,
      "skills": [8, 108, 162, 301, 326, 406],
      "next": [101195],
      "objectives": [
        [0, "Find Rangil Ironbow in Traveler's Vale."]
      ],
      "wiki": {"en": "Helping the Dwarves", "de": "Hilfe für die Zwerge"}
    },
    "101178": {
      "name": "Helping the People of Ascalon",
      "type": "secondary",
      "givers": [262],
      "xp": 200,
      "skills": [80, 155, 290, 343, 398],
      "requires": [101274],
      "objectives": [
        [0, "Deliver the supplies to Ellie Rigby in Ascalon City."],
        [0, "Return to Ambassador Zain for your reward."]
      ],
      "wiki": {"en": "Helping the People of Ascalon", "de": "Hilfe für das Volk von Ascalon"}
    },
    "101179": {
      "name": "Hungry Devourer",
      "type": "secondary",
      "givers": [391],
      "xp": 400,
      "skills": [69, 106, 222, 310, 344, 392],
      "next": [101257],
      "objectives": [
        [0, "Speak with Old Mac in Deldrimor Bowl."],
        [0, "Feed Joe [10...0] more Succulent Juniper Meats."],
        [0, "Speak with Old Mac in Deldrimor Bowl."],
        [0, "Return to Master Saberlin for your reward."]
      ],
      "wiki": {"en": "Hungry Devourer", "de": "Hungriger Verschlinger"}
    },
    "101180": {
      "name": "In Grenth's Defense",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "objectives": [
        [0, "Speak to the Rift Warden when you are ready to defend the Underworld."],
        [0, "Destroy all followers of Dwayna who attempt to breach the Underworld. They must not reclaim the stolen presents."],
        [0, "See Rift Warden for your reward."],
        [0, "*BONUS*: Survive for as long as possible. Protect the stolen presents."]
      ],
      "wiki": {"en": "In Grenth's Defense", "de": "Zu Grenths Verteidigung"}
    },
    "101181": {
      "name": "In Memory of Paulus",
      "type": "secondary",
      "givers": [208],
      "xp": 300,
      "skills": [291, 305],
      "requires": [101211],
      "objectives": [
        [0, "Find Melka Blanston, outside of Ascalon City, and tell her that Gurn loves her.Objective for Deliver a Message to My Wife"],
        [0, "Find Melka Blanston, just outside of Ascalon City, and inform her of the death of Paulus."]
      ],
      "wiki": {"en": "In Memory of Paulus", "de": "Zum Angedenken an Paulus"}
    },
    "101182": {
      "name": "Into the Breach",
      "type": "secondary",
      "givers": [617],
      "profession": 1,
      "xp": 300,
      "skills": [339, 347],
      "requires": [101194],
      "objectives": [
        [0, "Head to The Breach and repel the Charr attacks."],
        [0, "Return to Warmaster Grast for your reward."]
      ],
      "wiki": {"en": "Into the Breach", "de": "In der Bresche"}
    },
    "101183": {
      "name": "Into the Unknown",
      "type": "secondary",
      "givers": [216],
      "xp": 1000,
      "skills": [36, 144, 233, 271, 366, 463],
      "objectives": [
        [0, "Meet your friends in Skyward Reach."],
        [0, "Find Aidan and get a good look at the mesa."],
        [0, "Return to Jorn Kudebeh for your reward."]
      ],
      "wiki": {"en": "Into the Unknown", "de": "Auf ins Unbekannte"}
    },
    "101184": {
      "name": "Iron Horse War Machine",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "requires": [101196],
      "objectives": [
        [0, "Go to the Iron Horse Mine. Sabotage the control levers around the equipment used by the Stone Summit."],
        [0, "Sabotage 9...0 more control lever(s)."],
        [0, "Return to Rangil Ironbow for your reward."]
      ],
      "rewards": ["Cruel Staff (uses Raven Staff skin)", "Energy +7", "Dark Dmg: 5-10 (Requires 5 Blood Magic)", "Armor +5 (vs. Physical damage)", "Two-handed", "Longbow", "Piercing Dmg: 12-21 (Requires 5 Marksmanship)", "Damage +10% (while in a Stance)", "Health +10 (while in a Stance)", "Two-handed Hornbow"],
      "wiki": {"en": "Iron Horse War Machine", "de": "Die Eisenross-Kriegsmaschine"}
    },
    "101185": {
      "name": "Kilroy Stonekin",
      "type": "instance",
      "givers": [636],
      "repeatable": true,
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Kilroy Stonekin", "de": "Kilroy Steinsipp (Quest)"}
    },
    "101186": {
      "name": "Little Thom's Big Cloak",
      "type": "secondary",
      "givers": [368],
      "xp": 250,
      "objectives": [
        [0, "Acquire a bear pelt. Many bears can be found in Wizard's Folly."],
        [0, "Take the bear pelt to Alison the Tanner in Ashford."],
        [0, "Go to Barradin Estate in Green Hills County and deliver the cloak to Little Thom."]
      ],
      "wiki": {"en": "Little Thom's Big Cloak", "de": "Der große Umhang des kleinen Thom"}
    },
    "101187": {
      "name": "Long Thought Forgotten",
      "type": "secondary",
      "givers": [651],
      "xp": 250,
      "gold": 100,
      "rewards": ["Elemental Crystal Shard"],
      "objectives": [
        [0, "Find a way into the underground tunnels."],
        [0, "Investigate the tunnels."],
        [0, "Push further into the tunnels."],
        [0, "Explore the remainder of this floor."],
        [0, "Exit the tunnels and report to Adept Mullenix."]
      ],
      "next": [101129],
      "wiki": {"en": "Long Thought Forgotten", "de": "Längst vergessen geglaubt"}
    },
    "101188": {
      "name": "Malaquire's Test",
      "type": "secondary",
      "givers": [652],
      "xp": 500,
      "requires": [101206],
      "objectives": [
        [0, "Seek out a suitable target and use the Signet of Capture to gain a skill."],
        [0, "See Magi Malaquire for your reward."]
      ],
      "wiki": {"en": "Malaquire's Test", "de": "Malaquires Prüfung"}
    },
    "101189": {
      "name": "Merchant's Plea",
      "type": "secondary",
      "givers": [266],
      "xp": 500,
      "objectives": [
        [0, "Deliver the strongbox to Captain Greywind in the Ascalon Settlement."]
      ],
      "wiki": {"en": "Merchant's Plea", "de": "Das Flehen des Kaufmanns"}
    },
    "101190": {
      "name": "Mesmer Test",
      "type": "primary",
      "givers": [663],
      "profession": 5,
      "xp": 500,
      "skills": [26, 40],
      "objectives": [
        [0, "Follow the road southwest until you find Skale. Clear the road of skale."],
        [0, "Return to Sebedoh the Mesmer for your reward."]
      ],
      "next": [101166],
      "wiki": {"en": "Mesmer Test", "de": "Mesmer-Prüfung"}
    },
    "101191": {
      "name": "Mesmerizing the Enemy",
      "type": "secondary",
      "givers": [297],
      "profession": 5,
      "xp": 200,
      "skills": [24, 31, 40, 76],
      "requires": [101155],
      "objectives": [
        [0, "Go to the ruins of Ashford and defeat Ignis Phanaura."],
        [0, "Return to Vassar for your reward."]
      ],
      "wiki": {"en": "Mesmerizing the Enemy", "de": "Den Feind erstarren lassen"}
    },
    "101192": {
      "name": "Message from a Friend",
      "type": "secondary",
      "givers": [539],
      "xp": 100,
      "gold": 10,
      "objectives": [[0, "Go to the town square in Ascalon City. Talk to Sir Tydus."]],
      "wiki": {"en": "Message from a Friend", "de": "Nachricht von einem Freund"}
    },
    "101193": {
      "name": "Mhenlo's Request",
      "type": "secondary",
      "givers": [113],
      "travel": 2,
      "xp": 1000,
      "next": [100780],
      "objectives": [
        [0, "Find Mhenlo in North Kryta Province to learn more about the letter he has received."],
        [0, "Speak with Jiaju Tai to book passage to Cantha."],
        [0, "Speak with Dockhand Quangnai to learn more about the situation in Cantha."]
      ],
      "wiki": {"en": "Mhenlo's Request", "de": "Mhenlos Bitte"}
    },
    "101194": {
      "name": "Military Matters",
      "type": "secondary",
      "givers": [617],
      "profession": 1,
      "xp": 250,
      "skills": [322, 349],
      "next": [101182],
      "objectives": [
        [0, "Talk to Sergeant Clark in Regent Valley."],
        [0, "Escort Sergeant Clark back to Warmaster Grast."]
      ],
      "wiki": {"en": "Military Matters", "de": "Militärische Angelegenheiten"}
    },
    "101195": {
      "name": "Minaar's Trouble",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "next": [101196],
      "objectives": [
        [0, "Find Minaar Stonesledge in Iron Horse Mine."],
        [0, "Escort Minaar back to Traveler's Vale."],
        [0, "Return to Rangil Ironbow for your reward."]
      ],
      "rewards": ["Tall Shield", "Armor: 7 (Requires 5 Tactics)", "Armor +10 (vs. Dwarves)", "Health +15", "Grim Cesta", "Energy +7 (Requires 5 Death Magic)", "Energy +10 (while Hexed)"],
      "wiki": {"en": "Minaar's Trouble", "de": "Minaars Leiden"}
    },
    "101196": {
      "name": "Minaar's Worry",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "requires": [101195],
      "next": [101184],
      "objectives": [
        [0, "Go to the Iron Horse Mine and kill Ore Darkwhip."],
        [0, "Deliver the war machine plans to Rangil Ironbow."]
      ],
      "rewards": ["Battle Axe of Fortitude", "Dmg: 7-19 (Requires 5 Axe Mastery)", "Health +25", "Damage +15% (while in a Stance)"],
      "wiki": {"en": "Minaar's Worry", "de": "Minaars Sorge"}
    },
    "101197": {
      "name": "Monk Test",
      "type": "primary",
      "givers": [667],
      "profession": 3,
      "xp": 500,
      "skills": [252, 288],
      "objectives": [
        [0, "Go southwest up the road until you find skale. Cross the river and find the missing girl Gwen."],
        [0, "Lead Gwen back to Ciglo the Monk. Gwen will not move as long as the skale are in the way."]
      ],
      "next": [101166],
      "wiki": {"en": "Monk Test", "de": "Mönch-Prüfung"}
    },
    "101198": {
      "name": "Mustering a Response",
      "type": "secondary",
      "givers": [205],
      "xp": 15000,
      "gold": 3000,
      "rewards": ["3 Royal Gifts", "1 Medal of Honor"],
      "requires": [101245],
      "next": [101250],
      "objectives": [
        [0, "Hurry to Dakutu Camp in Talmark Wilderness, and bring word to Bartholos of the impending attack on Lion's Arch."],
        [0, "Take the Secret River Passage to Divinity Coast, and order Livia to bring the Asuran weapon to Lion's Arch."],
        [0, "Warn Elder Hezron in Beetletun of the armies marching south."],
        [0, "Meet Livia, Zinn, and Blimm outside Beetletun, and protect them while they travel with you to North Kryta Province. They must all survive the journey."],
        [0, "Warn Elder Sobel of the coming attack, and advise her to evacuate Nebo Village."],
        [0, "Meet Livia, Zinn and Blimm in North Kryta Province, and continue protecting them on the journey to Lion's Arch. They must all reach Lion's Arch safely."],
        [0, "Convince Captain Greywind to evacuate the Ascalon Settlement."],
        [0, "Protect the Ascalonian Settlers on their way to take refuge in Lion's Arch. Do not let them all die."],
        [0, "Report to Princess Salma."]
      ],
      "wiki": {"en": "Mustering a Response", "de": "Sammeln zur Gegenwehr"}
    },
    "101199": {
      "name": "Mysterious Message",
      "type": "secondary",
      "givers": [710],
      "xp": 500,
      "skills": [45, 93, 172, 274, 328, 455],
      "next": [101291],
      "objectives": [
        [0, "Drop the mysterious message into the hollow log."],
        [0, "Let Alari Doubleblade know that the message has been delivered."]
      ],
      "wiki": {"en": "Mysterious Message (Prophecies quest)", "de": "Rätselhafte Nachricht (Prophecies)"}
    },
    "101200": {
      "name": "Necromancer Test",
      "type": "primary",
      "givers": [677],
      "profession": 4,
      "xp": 500,
      "skills": [105, 153],
      "objectives": [[0, "Go south to the river. Slay a skale so that Verata can make use of its corpse."]],
      "next": [101166],
      "wiki": {"en": "Necromancer Test", "de": "Nekromanten-Prüfung"}
    },
    "101201": {
      "name": "Noble Intentions",
      "type": "instance",
      "givers": [680, 681],
      "xp": 4000,
      "gold": 500,
      "next": [101202],
      "objectives": [
        [0, "Follow Orozar Highstone to the meeting place."],
        [0, "Protect Orozar Highstone!"],
        [0, "See Orozar Highstone for your reward."]
      ],
      "wiki": {"en": "Noble Intentions", "de": "Noble Absichten"}
    },
    "101202": {
      "name": "Noble Intentions Plan B",
      "type": "instance",
      "givers": [681],
      "xp": 4000,
      "gold": 500,
      "requires": [101201],
      "objectives": [
        [0, "Find Ural Highstone."],
        [0, "Keep Orozar Highstone alive as he leads you to the exit of Sorrow's Furnace. Bring the shackled Ural Highstone with you."],
        [0, "See Orozar Highstone for your reward."]
      ],
      "wiki": {"en": "Noble Intentions Plan B", "de": "Noble Absichten Plan B"}
    },
    "101203": {
      "name": "Oberan's Rage",
      "type": "secondary",
      "givers": [687],
      "xp": 350,
      "skills": [95, 99],
      "requires": [101134],
      "objectives": [
        [0, "Slay Oberan the Reviled"],
        [0, "Return to Kasha Blackblood for your reward."]
      ],
      "wiki": {"en": "Oberan's Rage", "de": "Oberans Wut"}
    },
    "101204": {
      "name": "Operation: Crush Spirits",
      "type": "event",
      "givers": [689],
      "event": 13,
      "repeatable": true,
      "xp": 5000,
      "gold": 7500,
      "objectives": [
        [0, "Report to the Battlefield."],
        [0, "Destroy the Beacon of Dwayna."],
        [0, "Destroy the Beacon of Melandru."],
        [0, "Bonus Objective: Destroy all opposing Champions."],
        [0, "Bonus Objective: Complete the battle in under 30 minutes."],
        [0, "Bonus Objective: Complete the battle in under 20 minutes."],
        [0, "Bonus Objective: Complete the battle in under 10 minutes."]
      ],
      "wiki": {"en": "Operation: Crush Spirits", "de": "Operation: Willen brechen"}
    },
    "101205": {
      "name": "Opposition to the King",
      "type": "secondary",
      "givers": [239],
      "xp": 500,
      "objectives": [
        [
          0,
          "Go north from Ashford to find the road to Green Hills County. Once in Green Hills County, question at least three locals about opposition to the king."
        ],
        [0, "[0..3]/3 locals questioned."],
        [0, "Return to Devona for your reward."]
      ],
      "requires": [101335],
      "wiki": {"en": "Opposition to the King", "de": "Widerstand gegen den König"}
    },
    "101206": {
      "name": "Orrian Excavation",
      "type": "secondary",
      "givers": [652],
      "xp": 400,
      "next": [101188],
      "objectives": [
        [0, "Collect [5..0] more Orrian tablet shards."],
        [0, "Return to Magi Malaquire for your reward."]
      ],
      "wiki": {"en": "Orrian Excavation", "de": "Orrianische Ausgrabung"}
    },
    "101207": {
      "name": "Oswalt's Epitaph",
      "type": "secondary",
      "givers": [690],
      "xp": 500,
      "gold": 250,
      "requires": [101232],
      "objectives": [
        [0, "Search the Ascalon Foothills for Oswalt's Headstone."],
        [0, "Inscribe Elsa's words on the headstone."],
        [0, "See Oswalt Alston for your reward."]
      ],
      "rewards": ["Grim Cesta", "Energy +7 (Requires 5 Blood Magic)", "Armor +5 (vs. physical damage)", "Armor +5 (while attacking)"],
      "wiki": {"en": "Oswalt's Epitaph", "de": "Oswalts Grabinschrift"}
    },
    "101208": {
      "name": "Passage Through The Dark River",
      "type": "primary",
      "givers": [476],
      "xp": 500,
      "next_missions": [73],
      "missions": [73],
      "objectives": [
        [0, "Talk to Old Joness to gain passage down the Ullen River."],
        [0, "Deliver Evennia's message to Derrikk Deathblade."]
      ],
      "rewards": ["Earth Scroll", "Energy +10 (Requires 8 Earth Magic)", "Armor +3 (vs. physical damage)", "Armor +5 (while casting)"],
      "wiki": {"en": "Passage Through The Dark River", "de": "Durchfahrt durch den Düsteren Fluss"}
    },
    "101209": {
      "name": "Political Ramifications",
      "type": "instance",
      "givers": [695],
      "xp": 6000,
      "objectives": [
        [0, "Find and slay 6 more Stone Summit leaders."],
        [0, "See Tharn Stonerift for your reward."]
      ],
      "wiki": {"en": "Political Ramifications", "de": "Politische Konsequenzen"}
    },
    "101210": {
      "name": "Poor Tenant",
      "type": "secondary",
      "givers": [207],
      "xp": 500,
      "objectives": [
        [0, "Follow the road southwest from town to Ashford. Find Miller Upton and ask him to help Namar."],
        [0, "Use the honeycomb to lure the three bee swarms across the bridge."],
        [0, "Return to Miller Upton for your reward."]
      ],
      "wiki": {"en": "Poor Tenant", "de": "Armer Mieter"}
    },
    "101211": {
      "name": "Protecting Ascalon",
      "type": "secondary",
      "givers": [208],
      "xp": 300,
      "skills": [280, 289],
      "next": [101181],
      "objectives": [
        [0, "Find Paulus the Monk in Regent Valley"],
        [0, "Search Paulus's body for any personal effects."],
        [0, "Return the holy symbol to Grazden the Protector."]
      ],
      "wiki": {"en": "Protecting Ascalon", "de": "Ascalon schützen"}
    },
    "101212": {
      "name": "Protection Prayers",
      "type": "secondary",
      "givers": [718],
      "profession": 3,
      "xp": 250,
      "skills": [299, 307],
      "objectives": [
        [0, "Meet Farrah Cappo in Lakeside County."],
        [0, "Keep Farrah alive while she hunts down the infamous Alain."],
        [0, "Return to Grazden the Protector for your reward."]
      ],
      "wiki": {"en": "Protection Prayers (quest)", "de": "Schutzgebete (Quest)"}
    },
    "101213": {
      "name": "Ranger Test",
      "type": "primary",
      "givers": [780],
      "profession": 2,
      "xp": 500,
      "skills": [394, 446],
      "objectives": [[0, "Find the River Skale Queen and slay her."]],
      "next": [101166],
      "wiki": {"en": "Ranger Test", "de": "Waldläufer-Prüfung"}
    },
    "101214": {
      "name": "Rastin's Ritual",
      "type": "secondary",
      "givers": [702],
      "xp": 500,
      "gold": 50,
      "objectives": [
        [0, "Take Rastin's request to Artisan Daved in Old Ascalon."],
        [0, "Deliver the Scribe's supplies to Witness Rastin in Old Ascalon."]
      ],
      "wiki": {"en": "Rastin's Ritual", "de": "Rastins Ritual"}
    },
    "101215": {
      "name": "Recruits for Hollis",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "next": [101120],
      "objectives": [
        [0, "Go from town to Old Ascalon and find the Army Recruits."],
        [0, "Lead all three recruits west along the wall to the far gate and present them to Gate Guard Hollis."],
        [0, "Speak to Gate Guard Hollis for your reward."]
      ],
      "rewards": ["Healing Ankh", "Energy +6 (Requires 5 Healing Prayers)", "Armor +10 (vs. Charr)"],
      "wiki": {"en": "Recruits for Hollis", "de": "Rekruten für Hollis"}
    },
    "101216": {
      "name": "Regent Valley Defense",
      "type": "secondary",
      "givers": [448],
      "xp": 500,
      "objectives": [
        [0, "Search King's Watch for Charr."],
        [0, "See Lord Darrin for your reward."]
      ],
      "rewards": ["Longbow of Charrslaying (Half Moon skin)", "Piercing Dmg: 11-18 (Requires 3 Marksmanship)", "Two-handed", "Dmg +15% (vs. Charr)"],
      "wiki": {"en": "Regent Valley Defense", "de": "Die Verteidigung des Regententals"}
    },
    "101217": {
      "name": "Renegade Necromancer",
      "type": "secondary",
      "givers": [189],
      "profession": 4,
      "xp": 350,
      "skills": [92, 97, 129],
      "objectives": [
        [0, "Find Verata in Traveler's Vale and put an end to his experiments."],
        [0, "Return to Necromancer Morgan for your reward."]
      ],
      "wiki": {"en": "Renegade Necromancer", "de": "Abtrünniger Nekromant"}
    },
    "101218": {
      "name": "Replacement Healers",
      "type": "secondary",
      "givers": [547],
      "xp": 500,
      "skills": [243, 292],
      "objectives": [
        [0, "Meet Devona in Pockmark Flats."],
        [0, "Escort Devona to the Eastern Frontier."],
        [0, "Help Devona defeat the Charr warband."],
        [0, "Return to Priestess Rashenna for your reward."]
      ],
      "wiki": {"en": "Replacement Healers", "de": "Ersatzheiler"}
    },
    "101219": {
      "name": "Report to the White Mantle",
      "type": "primary",
      "givers": [549],
      "xp": 500,
      "missions": [15],
      "objectives": [
        [0, "Go to North Kryta Province and follow the road to the fort in the D'Alessio Seaboard. Once there, report your presence to Mantle Knight Karriya."]
      ],
      "rewards": ["Holy Rod"],
      "wiki": {"en": "Report to the White Mantle", "de": "Erstattet dem Weißen Mantel Bericht"}
    },
    "101220": {
      "name": "Reversing the Skales",
      "type": "secondary",
      "givers": [293],
      "xp": 500,
      "objectives": [
        [0, "Head to Scoundrel's Rise east of North Kryta Province. Find the cause of the undead's westward movement."],
        [0, "Lord Timot is the source of the undead movement. Destroy him."],
        [0, "Return to Captain Greywind [Skills] for your reward."]
      ],
      "rewards": ["Jeweled Chalice", "Energy +8 (Requires 6 Illusion Magic)", "Halves casting time of spells (Chance: 5%)", "Earth Wand", "Earth Dmg: 7-13 (Requires 6 Earth Magic)", "Damage +10% (while Hexed)", "Damage +10% (while Enchanted)"],
      "wiki": {"en": "Reversing the Skales", "de": "Skal-Umkehrung"}
    },
    "101221": {
      "name": "Rise",
      "type": "primary",
      "campaign": 1,
      "region": 0,
      "repeatable": true,
      "requires": [101280],
      "next": [100000],
      "objectives": [
        [0, "Defend the town of Beetletun."]
      ],
      "rewards": ["1,250 Vanguard reputation points", "First time: 2 Medals of Honor", "On repeat: 5 War Supplies"],
      "wiki": {"en": "Rise", "de": "Aufstand"}
    },
    "101222": {
      "name": "Rites of Remembrance",
      "type": "secondary",
      "givers": [567],
      "xp": 250,
      "objectives": [
        [0, "Light candles on all four braziers in the catacombs to appease the angry spirits."],
        [0, "[0...4]/4 candles placed."],
        [0, "Return to Necromancer Munne for your reward."]
      ],
      "wiki": {"en": "Rites of Remembrance", "de": "Gedenkriten"}
    },
    "101223": {
      "name": "Riverside Assassination",
      "type": "secondary",
      "givers": [205],
      "xp": 10000,
      "gold": 2000,
      "rewards": ["5 Royal Gifts", "1 Medal of Honor"],
      "requires": [101355, 101356, 101357],
      "next": [101088],
      "objectives": [
        [0, "Speak with Blade Operative Paulina in Sanctum Cay to garner passage to Riverside Province."],
        [0, "Kill Willem the Demeaning, currently residing in the Temple of the Unseen, located in Riverside Province"],
        [0, "Speak with Blade Operative Paulina to be briefed on the temple's defenses."],
        [0, "Gain access to the heart of the Temple of the Unseen, either by assaulting the front gate or acquiring the keys to the rear entrance."],
        [0, "Defeat Ven the Conservator to acquire the blue key."],
        [0, "Defeat Degaz the Cynical to acquire the red key."],
        [0, "See Princess Salma for your reward."]
      ],
      "wiki": {"en": "Riverside Assassination", "de": "Anschlag am Flussufer"}
    },
    "101224": {
      "name": "Ruins of Surmia",
      "type": "secondary",
      "givers": [597],
      "xp": 500,
      "requires_missions": [29],
      "next": [101224],
      "missions": [30],
      "objectives": [
        [0, "Go north of the Wall in the Eastern Frontier and follow the road to Surmia."],
        [0, "Talk to Captain Miken"]
      ],
      "rewards": ["Truncheon", "Dark Dmg: 4-7 (Requires 3 Death Magic)", "Armor +5 (vs. physical damage)", "Received physical damage -1 (Chance: 10%)"],
      "wiki": {"en": "Ruins of Surmia (quest)", "de": "Ruinen von Surmia (Quest)"}
    },
    "101225": {
      "name": "Sands Of Souls",
      "type": "secondary",
      "givers": [713],
      "xp": 500,
      "missions": [117, 116, 118],
      "objectives": [
        [0, "Speak to Great Ritual Priest Zahmut."]
      ],
      "wiki": {"en": "Sands Of Souls", "de": "Sandwüste der Seelen"}
    },
    "101226": {
      "name": "Scavengers in Old Ascalon",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "requires": [101141],
      "requires_missions": [28],
      "objectives": [
        [0, "Go to the ruins in Old Ascalon. Clear out any scavengers."],
        [0, "Return to Warmaster Tydus for your reward,"]
      ],
      "rewards": ["Battle Axe of Fortitude", "Slashing Dmg: 6-16 (Requires 3 Axe Mastery)", "Health +25", "+15% damage (vs. Charr) Inherent Mod"],
      "wiki": {"en": "Scavengers in Old Ascalon", "de": "Plünderer in Alt-Ascalon"}
    },
    "101227": {
      "name": "Scorched Earth (Prophecies quest)",
      "type": "secondary",
      "givers": [541],
      "xp": 200,
      "skills": [175],
      "objectives": [
        [0, "0/5 Hulking Stone Elementals slain."],
        [0, "Return to Elementalist Aziure for your reward."]
      ],
      "wiki": {"en": "Scorched Earth (Prophecies quest)", "de": "Verkohlte Erde"}
    },
    "101228": {
      "name": "Securing the Vale",
      "type": "secondary",
      "givers": [365],
      "profession": 1,
      "xp": 500,
      "skills": [341, 356, 386],
      "objectives": [
        [0, "Proceed to the first patrol point in Traveler's Vale."],
        [0, "Proceed to the second patrol point in Traveler's Vale."],
        [0, "Proceed to the third patrol point in Traveler's Vale."],
        [0, "Return to Van the Warrior for your reward."]
      ],
      "wiki": {"en": "Securing the Vale", "de": "Die Sicherung des Tals"}
    },
    "101229": {
      "name": "Seeking the Seer",
      "type": "secondary",
      "givers": [437],
      "xp": 500,
      "missions": [22],
      "objectives": [
        [0, "Speak with Korg the Scout."],
        [0, "Speak with Onar Ironblood Missing a period"],
        [0, "See Blade Scout Shelby for your reward."]
      ],
      "wiki": {"en": "Seeking The Seer", "de": "Die Suche nach der Seherin"}
    },
    "101230": {
      "name": "Shadows in the Jungle",
      "type": "primary",
      "campaign": 1,
      "region": 0,
      "repeatable": true,
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points", "First time: 2 Medal of Honor", "Repeats: 5 War Supplies"],
      "requires": [101253],
      "next": [101280],
      "objectives": [
        [0, "Search for the White Mantle."],
        [0, "Defeat the White Mantle encampment."],
        [0, "Find information about the White Mantle's plans."]
      ],
      "wiki": {"en": "Shadows in the Jungle", "de": "Schatten im Dschungel"}
    },
    "101231": {
      "name": "Shalev's Task",
      "type": "secondary",
      "givers": [723],
      "xp": 300,
      "skills": [167, 213],
      "requires": [101149],
      "objectives": [
        [0, "Go to the Breach and kill Charr Fire Callers to obtain a bottle of fiery unguent."],
        [0, "Return to Shalev the Hermit for your reward."]
      ],
      "wiki": {"en": "Shalev's Task", "de": "Shalevs Aufgabe"}
    },
    "101232": {
      "name": "Shiverpeak Stragglers",
      "type": "secondary",
      "givers": [177],
      "xp": 500,
      "gold": 150,
      "objectives": [
        [0, "Search the road to Ascalon for refugees."],
        [0, "Lead the refugees to Yak's Bend."],
        [0, "Return to Captain Osric [Skills] for your reward."]
      ],
      "rewards": ["Holy Rod", "Fire Dmg: 5-10 (Requires 5 Divine Favor)", "Energy +3 (while Health is above 50%)", "War Hammer", "Blunt Dmg: 14-23 (Requires 5 Hammer Mastery)", "Armor penetration +5% (Chance: 5%)", "Health +25 (while in a Stance)", "Two-handed"],
      "wiki": {"en": "Shiverpeak Stragglers", "de": "Zittergipfel-Nachzügler"}
    },
    "101233": {
      "name": "Something Wicked This Way Comes",
      "type": "event",
      "givers": [384],
      "event": 11,
      "xp": 5000,
      "rewards": [
        "15 Transmogrifier Tonics",
        "50 Trick-or-Treat Bags",
        "15 Transmogrifier Tonics",
        "15 Trick-or-Treat Bags"
      ],
      "next": [101144],
      "objectives": [
        [0, "Travel to the Temple of the Ages, Zin Ku Corridor, or Chantry of Secrets."],
        [0, "Use a Transmogrifier Tonic, and speak to the Voice of Grenth to gain audience in the Underworld as an agent of the Mad King."],
        [0, "As an agent of the Mad King, navigate through the Underworld to the Hall of Judgment, and speak to King Frozenwind."],
        [0, "See Mad King's Steward for your reward."]
      ],
      "wiki": {"en": "Something Wicked This Way Comes", "de": "Etwas Böses kommt des Weges"}
    },
    "101234": {
      "name": "Sowing Seeds",
      "type": "secondary",
      "givers": [208],
      "xp": 200,
      "skills": [281, 287, 296],
      "objectives": [
        [0, "Escort Farmer Hamnet to Ascalon City"],
        [0, "Return to Grazden the Protector for your reward."]
      ],
      "wiki": {"en": "Sowing Seeds", "de": "Das Säen der Saat"}
    },
    "101235": {
      "name": "Stemming the Skeletal Tide",
      "type": "event",
      "givers": [384],
      "event": 11,
      "xp": 10000,
      "gold": 2000,
      "rewards": [
        "50 Trick-or-Treat Bags",
        "1 Passage Scroll to the Underworld",
        "15 Trick-or-Treat Bags",
        "1 Passage Scroll to the Underworld"
      ],
      "requires": [101144],
      "next": [101152, 101315],
      "objectives": [
        [0, "Enter the Underworld."],
        [0, "Use the Everlasting Mobstopper to trap the spirit of a weakened Skeleton of Dhuum."],
        [0, "Bring the Captured Skeleton to the Mad King's steward. 'steward' is lowercase"]
      ],
      "wiki": {"en": "Stemming the Skeletal Tide", "de": "Die Armee der knochigen Diener"}
    },
    "101236": {
      "name": "Stone Summit Beastmasters",
      "type": "secondary",
      "givers": [734],
      "profession": 2,
      "xp": 350,
      "objectives": [
        [0, "Track down and destroy Thorgrim Beastlasher in Iron Horse Mine."],
        [0, "Return to Artemis the Ranger for your reward."]
      ],
      "wiki": {"en": "Stone Summit Beastmasters", "de": "Steingipfel-Tierbändiger (Quest)"}
    },
    "101237": {
      "name": "Straight to the Heart",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "objectives": [
        [0, "Speak to the Rift Warden when you are ready to assault the Secret Lair of the Snowmen. Unlike The Strength of Snow's objectives, \"Secret Lair of the Snowmen\" is capitalized here."],
        [0, "Roast all the snowmen."],
        [0, "See Rift Warden for your reward."]
      ],
      "wiki": {"en": "Straight to the Heart", "de": "Mitten ins Herz"}
    },
    "101238": {
      "name": "Subversive Ideas",
      "type": "instance",
      "givers": [554],
      "xp": 6000,
      "objectives": [
        [0, "Deliver 5 Scrolls of Rebellious Rhetoric to the Dredge Slaves."],
        [0, "See Molachev for your reward."]
      ],
      "wiki": {"en": "Subversive Ideas", "de": "Feindliche Ideen"}
    },
    "101239": {
      "name": "Summit Slaves",
      "type": "instance",
      "givers": [585],
      "repeatable": true,
      "xp": 2000,
      "gold": 300,
      "objectives": [
        [0, "Scout the Stone Basilica."],
        [0, "Scout Darkhaven."],
        [0, "Scout Sorrow's Belly."],
        [0, "Scout The Gap."],
        [0, "Scout The Iron Arch."],
        [0, "See Galen Trask for your reward."]
      ],
      "wiki": {"en": "Summit Slaves", "de": "Gipfel-Sklaven"}
    },
    "101240": {
      "name": "Sunspears in Kryta",
      "type": "secondary",
      "givers": [729],
      "travel": 3,
      "xp": 1000,
      "objectives": [
        [0, "Speak to Lionguard Bedo to gain entrance to Lion's Gate."],
        [0, "Speak with Kormir in Lion's Gate."],
        [0, "Defend Lion's Arch from the evil that threatens to destroy it."],
        [0, "Speak with Kormir in Lion's Gate to arrange travel to Elona (see Notes below)."],
        [0, "See Seamarshal Bendro for your reward."]
      ],
      "rewards": ["Travel to Kamadan, Jewel of Istan port unlocked."],
      "wiki": {"en": "Sunspears in Kryta", "de": "Sonnenspeere in Kryta"}
    },
    "101241": {
      "name": "Supplies for the Duke",
      "type": "secondary",
      "givers": [232],
      "xp": 300,
      "skills": [11, 159, 211, 278, 348, 403],
      "requires": [101247],
      "objectives": [
        [0, "Find the lost supply column."],
        [0, "Escort the supply column to Piken Square."],
        [0, "See Quartermaster Aada for your reward."]
      ],
      "wiki": {"en": "Supplies for the Duke", "de": "Nachschub für den Herzog"}
    },
    "101242": {
      "name": "Surviving After the Searing",
      "type": "primary",
      "givers": [287],
      "xp": 1000,
      "gold": 500,
      "rewards": ["4 Skill points", "Belt Pouch", "Superior Identification Kit", "Superior Salvage Kit"],
      "objectives": [
        [0, "Speak with Warmaster Tydus to accept his aid."]
      ],
      "wiki": {"en": "Surviving After the Searing", "de": "Überleben nach dem Großen Feuer"}
    },
    "101243": {
      "name": "Symon's History of Ascalon",
      "type": "secondary",
      "givers": [702],
      "xp": 2000,
      "requires": [101130],
      "objectives": [
        [0, "Go to Ascalon City and talk to Symon about getting a copy of his book."],
        [0, "Find Artisan Daved in southeastern Old Ascalon and acquire 5 rolls of parchment."],
        [0, "Take the parchment to Symon the Scribe."],
        [0, "Deliver Symon's \"History of Ascalon\" to Witness Rastin."]
      ],
      "wiki": {"en": "Symon's History of Ascalon", "de": "Symons Geschichte von Ascalon"}
    },
    "101244": {
      "name": "Tasca's Reprise",
      "type": "instance",
      "givers": [746],
      "xp": 6000,
      "objectives": [
        [0, "Find Tasca's axe."],
        [0, "Find Tasca's compass."],
        [0, "Find Tasca's map."],
        [0, "Find Tasca's boots."],
        [0, "Find Tasca's pack."],
        [0, "See Marshall Whitman for your reward."]
      ],
      "wiki": {"en": "Tasca's Reprise", "de": "Tascas Last"}
    },
    "101245": {
      "name": "Temple of the Intolerable",
      "type": "secondary",
      "givers": [205],
      "xp": 10000,
      "gold": 2000,
      "rewards": ["5 Royal Gifts", "1 Medal of Honor"],
      "requires": [101088],
      "next": [101198],
      "objectives": [
        [0, "Speak with Jiaju Tai and arrange passage to D'Alessio Seaboard"],
        [0, "Seek out Dinas in Hakewood."],
        [0, "Fight your way to the Temple of Tolerance."],
        [0, "Kill Koril the Malignant."],
        [0, "Return to Princess Salma for a reward."]
      ],
      "wiki": {"en": "Temple of the Intolerable", "de": "Tempel der Unerträglichen"}
    },
    "101246": {
      "name": "The Accursed Path",
      "type": "secondary",
      "givers": [379],
      "xp": 500,
      "skills": [100, 135],
      "objectives": [
        [0, "Go south and destroy the crypt fiends."],
        [0, "Return to Oberan the Reviled for your reward."]
      ],
      "wiki": {"en": "The Accursed Path", "de": "Der verfluchte Pfad"}
    },
    "101247": {
      "name": "The Ambassador's Quandary",
      "type": "secondary",
      "givers": [262],
      "xp": 500,
      "requires": [101274],
      "next": [101090],
      "objectives": [
        [0, "Go to Regent Valley. Hunt down the bandit Torin."],
        [0, "Return to Ambassador Zain for your reward."]
      ],
      "rewards": ["Furious Battle Axe of Charrslaying", "Slashing Dmg: 6-16 (Requires 3 Axe Mastery)", "Double adrenaline gain (Chance: 10%)1", "Dmg +15% (vs. Charr)1", "Holy Staff", "Energy +4", "Fire Dmg: 4-7 (Requires 3 Divine Favor)", "Armor +10 (vs. Piercing damage)", "Two-handed", "Can be salvaged"],
      "wiki": {"en": "The Ambassador's Quandary", "de": "Das Dilemma des Botschafters"}
    },
    "101248": {
      "name": "The Arrowhead",
      "type": "secondary",
      "givers": [421],
      "xp": 1000,
      "gold": 500,
      "next": [101116],
      "objectives": [
        [0, "Investigate the arrowhead at the scrying pool."]
      ],
      "wiki": {"en": "The Arrowhead", "de": "Die Pfeilspitze"}
    },
    "101249": {
      "name": "The Ascalon Settlement",
      "type": "secondary",
      "givers": [431],
      "xp": 500,
      "skills": [50, 117, 229, 286, 385, 424],
      "objectives": [
        [0, "Speak with Devona."],
        [0, "Lead your party north to the Ascalon Settlement."],
        [0, "See Captain Greywind [Skills] for your reward."]
      ],
      "wiki": {"en": "The Ascalon Settlement", "de": "Die Siedlung Ascalon (Quest)"}
    },
    "101250": {
      "name": "The Battle for Lion's Arch",
      "type": "secondary",
      "givers": [205],
      "xp": 30000,
      "gold": 5000,
      "rewards": ["5 Royal Gifts", "3 Medals of Honor"],
      "requires": [101198],
      "objectives": [
        [0, "Speak with Bartholos in Lion's Arch Keep to assist with defending the city."],
        [0, "Order Firstwatch Sergio to open the front gates."],
        [0, "Defend Lion's Arch from the White Mantle onslaught pouring into the city."],
        [0, "Kill High Inquisitor Toriimo and his men."],
        [0, "Kill Confessor Isaiah and his followers."],
        [0, "Kill Lucent the Spectral."],
        [0, "Kill Oizys the Miserable and the two Cairns."],
        [0, "Kill Ambrillus the Guardian and Talios the Resplendent."],
        [0, "Defend Princess Salma with your life. Her death is your defeat."],
        [0, "Report to Princess Salma."]
      ],
      "wiki": {"en": "The Battle for Lion's Arch", "de": "Die Schlacht um Löwenstein"}
    },
    "101251": {
      "name": "The Bear Hunters",
      "type": "instance",
      "givers": [388],
      "repeatable": true,
      "rewards": ["Hunter's Ale"],
      "wiki": {"en": "The bear hunters", "de": "Die Bärenjäger"}
    },
    "101252": {
      "name": "The Blessings of Balthazar",
      "type": "secondary",
      "givers": [229],
      "xp": 250,
      "skills": [247, 248],
      "objectives": [
        [0, "Travel to the fields north of Ashford and dispatch the skeletons there."],
        [0, "Return to Brother Mhenlo for your reward."]
      ],
      "wiki": {"en": "The Blessings of Balthazar", "de": "Balthasars Segnungen"}
    },
    "101253": {
      "name": "The Broken Sword",
      "type": "secondary",
      "givers": [283],
      "xp": 1000,
      "gold": 500,
      "requires": [101106],
      "next": [101230],
      "wiki": {"en": "The Broken Sword", "de": "Das gebrochene Schwert"}
    },
    "101254": {
      "name": "The Charr Patrol",
      "type": "secondary",
      "givers": [234],
      "profession": 2,
      "xp": 250,
      "skills": [439, 472],
      "next": [101255],
      "objectives": [
        [0, "Hunt down and destroy the Charr patrol."]
      ],
      "wiki": {"en": "The Charr Patrol", "de": "Die Charr-Patrouille"}
    },
    "101255": {
      "name": "The Charr Staging Area",
      "type": "secondary",
      "givers": [234],
      "profession": 2,
      "xp": 300,
      "skills": [425, 475],
      "requires": [101254],
      "objectives": [
        [0, "Head to the Breach and kill Gorgaan Hatemonger."],
        [0, "Return to Master Ranger Nente for your reward."]
      ],
      "wiki": {"en": "The Charr Staging Area", "de": "Der Sammelpunkt der Charr"}
    },
    "101256": {
      "name": "The Cost of Survival",
      "type": "secondary",
      "givers": [335],
      "xp": 500,
      "gold": 100,
      "requires": [101148],
      "next": [101258],
      "objectives": [
        [0, "Enter the Tunnels of the Forsaken."],
        [0, "Deliver the supplies to Ghost of Althea."],
        [0, "Find a way to the next floor."],
        [0, "Track down Duke Willgrove and recover the stolen goods."],
        [0, "Return the stolen supplies to Ghost of Althea."],
        [0, "Speak with Ghost of Althea"]
      ],
      "wiki": {"en": "The Cost of Survival", "de": "Der Preis des Überlebens"}
    },
    "101257": {
      "name": "The Deserters",
      "type": "secondary",
      "givers": [391],
      "xp": 500,
      "skills": [22, 143, 214, 242, 380, 456],
      "requires": [101179],
      "objectives": [
        [0, "Find the deserters in Deldrimor Bowl."],
        [0, "Take word to Master Saberlin in Beacon's Perch that the supplies have been recovered."]
      ],
      "wiki": {"en": "The Deserters", "de": "Die Deserteure"}
    },
    "101258": {
      "name": "The Dreamer and the Zealot",
      "dungeon": 879,
      "type": "secondary",
      "givers": [346],
      "xp": 500,
      "gold": 100,
      "requires": [101256],
      "objectives": [
        [0, "Rendezvous with Althea."],
        [0, "Help Althea find a way deeper into the tunnels."],
        [0, "Reach the furthest depths of the Tunnels of the Forsaken."],
        [0, "Defeat the manipulated grawl."],
        [0, "Calm the God-touched Grawl."],
        [0, "Defeat Varny the Zealot."],
        [0, "Return to Ghost of Althea."]
      ],
      "rewards": ["Ghost of Althea joins your party (first time only)"],
      "wiki": {"en": "The Dreamer and the Zealot", "de": "Der Träumer und der Eiferer"}
    },
    "101259": {
      "name": "The Duke's Daughter",
      "type": "secondary",
      "givers": [444],
      "xp": 2000,
      "gold": 300,
      "next": [101110],
      "objectives": [
        [0, "Search for signs of Duke Barradin's lost daughter, Althea."],
        [0, "Speak to Duke Barradin to claim your reward."]
      ],
      "wiki": {"en": "The Duke's Daughter", "de": "Die Tochter des Herzogs"}
    },
    "101260": {
      "name": "The Egg Hunter",
      "type": "secondary",
      "givers": [313],
      "xp": 150,
      "rewards": ["2 Devourer Eggs"],
      "objectives": [
        [0, "Escort Fadden Hathorn into the Devourer cave [sic] and keep him safe while he gathers eggs."],
        [0, "Escort Fadden Hathorn back to Duke Gaban."],
        [0, "Return to Duke Gaban for your reward."]
      ],
      "wiki": {"en": "The Egg Hunter", "de": "Der Eiersucher"}
    },
    "101261": {
      "name": "The Elementalist Experiment",
      "type": "secondary",
      "givers": [264],
      "xp": 250,
      "skills": [180, 197, 200],
      "objectives": [
        [0, "Use your Fire Storm spell to defeat the ice beasts that attack Aziure."],
        [0, "Return to Elementalist Aziure for your reward."]
      ],
      "wiki": {"en": "The Elementalist Experiment", "de": "Das Elementarmagier-Experiment"}
    },
    "101262": {
      "name": "The Elementalist's Path",
      "type": "secondary",
      "givers": [350],
      "xp": 1000,
      "requires": [101271],
      "objectives": [
        [0, "Go to Prophet's Path and slay the kree minotaur."],
        [0, "Take the kree minotaur hide to Cembrien in Heroes' Audience."]
      ],
      "rewards": ["Elementalist available as a secondary profession."],
      "wiki": {"en": "The Elementalist's Path", "de": "Der Weg des Elementarmagiers"}
    },
    "101263": {
      "name": "The False Gods",
      "type": "secondary",
      "givers": [457],
      "xp": 750,
      "skills": [49, 130, 234, 297, 316, 434],
      "objectives": [
        [0, "Defeat Abbot Ramoth and retrieve the Litanies of the Unseen."],
        [0, "Return the Litanies of the Unseen to Brother Mizar."]
      ],
      "wiki": {"en": "The False Gods", "de": "Die falschen Götter"}
    },
    "101264": {
      "name": "The Final Assault",
      "type": "secondary",
      "givers": [374],
      "repeatable": true,
      "xp": 10000,
      "gold": 750,
      "requires": [101328],
      "objectives": [
        [0, "Locate Ennis Granitestrider."],
        [0, "Help Ennis Granitestrider complete his mission inside Sorrow's Furnace."]
      ],
      "wiki": {"en": "The Final Assault", "de": "Der letzte Angriff"}
    },
    "101265": {
      "name": "The Forge Heart",
      "type": "instance",
      "givers": [268],
      "repeatable": true,
      "xp": 8000,
      "gold": 500,
      "requires": [101328],
      "objectives": [
        [0, "Destroy all three of the Rage Binders controlling the Iron Forgeman at the same time."],
        [0, "Destroy [3..0] more flame djinn."],
        [0, "See Ennis Granitestrider for your reward."]
      ],
      "wiki": {"en": "The Forge Heart", "de": "Das Herz der Schmiede"}
    },
    "101266": {
      "name": "The Forgotten Ones",
      "type": "secondary",
      "givers": [446],
      "skills": [72, 84, 179, 315, 345, 400],
      "next": [101164],
      "objectives": [
        [0, "Seek out Sariss Yassith in Skyward Reach."]
      ],
      "wiki": {"en": "The Forgotten Ones", "de": "Die Vergessenen"}
    },
    "101267": {
      "name": "The Geomancer's Test",
      "type": "secondary",
      "givers": [351],
      "profession": 6,
      "xp": 500,
      "skills": [168, 169],
      "requires": [101319],
      "objectives": [
        [0, "Activate all 3 earth shrines by placing Scorched Lodestones upon them."],
        [0, "Slay the summoned stone golem."],
        [0, "Return to Kendrick Redstaff for your reward."]
      ],
      "wiki": {"en": "The Geomancer's Test", "de": "Die Prüfung des Geomanten"}
    },
    "101268": {
      "name": "The Greatest Snowman Ever Made",
      "type": "event",
      "givers": [370],
      "event": 13,
      "xp": 5000,
      "rewards": ["Gingerbread Shield", "Gingerbread Focus"],
      "objectives": [
        [0, "Speak to Joy, priestess of Dwayna, and learn how to aid the goddess of light and turn the tide of winter. For the children."],
        [0, "Make Scrappy happy."],
        [0, "Ask around for 2 pieces of coal... There must be some out there somewhere."],
        [0, "Ask around for a pipe made out of corncob or some other material... There must be one out there somewhere."],
        [0, "Ask around for a magic hat... There must be one out there somewhere."],
        [0, "Return to Scrappy Jhim and help him make the biggest snowman ever."],
        [0, "Take back Nebo Village for Dwayna! Destroy the Grentches and Humbugs. You have [17...0] remaining."],
        [0, "See Joy for your reward."]
      ],
      "wiki": {"en": "The Greatest Snowman Ever Made", "de": "Der größte Schneemann, der jemals gebaut wurde"}
    },
    "101269": {
      "name": "The Hero From Ascalon",
      "type": "secondary",
      "givers": [402],
      "xp": 100,
      "objectives": [
        [0, "Talk with Devona again."]
      ],
      "rewards": ["Devona joins your party."],
      "wiki": {"en": "The Hero From Ascalon", "de": "Die Heldin von Ascalon"}
    },
    "101270": {
      "name": "The Hero's Challenge",
      "type": "attribute",
      "givers": [404],
      "xp": 5000,
      "rewards": ["15 Attribute points"],
      "objectives": [
        [0, "Enter the Frozen Forest from Iron Mines of Moladune.1"],
        [0, "Follow Sanyi through the mountains."],
        [0, "Defeat Sanyi the Soul Eater."],
        [0, "Return to Vanyi for your reward."]
      ],
      "wiki": {"en": "The Hero's Challenge", "de": "Die Herausforderung des Helden"}
    },
    "101271": {
      "name": "The Hero's Journey",
      "type": "secondary",
      "givers": [404],
      "xp": 500,
      "next": [101270],
      "objectives": [
        [0, "Travel to Seeker's Passage."],
        [0, "Travel to Destiny's Gorge."],
        [0, "Travel to Heroes' Audience."],
        [0, "Return to Vanyi for your reward."]
      ],
      "wiki": {"en": "The Hero's Journey", "de": "Die Reise eines Helden"}
    },
    "101272": {
      "name": "The Hot Springs Murders",
      "type": "secondary",
      "givers": [440],
      "xp": 500,
      "skills": [32, 120, 173, 277, 357, 437],
      "objectives": [
        [0, "Go to Bergen Hot Springs and obtain a written testimony from Andar D'Leod."],
        [0, "Go to Bergen Hot Springs and obtain a written testimony from Dannel Smythe."],
        [0, "Go to Bergen Hot Springs and obtain a written testimony from Penelope Randell."],
        [0, "Go to Bergen Hot Springs and obtain a written testimony from Layman Josef."],
        [0, "Return the written testimonies to Inspector Caleb in Nebo Village."],
        [0, "Speak to Inquisitor Gilead."]
      ],
      "wiki": {"en": "The Hot Springs Murders", "de": "Die Thermalquellen-Morde"}
    },
    "101273": {
      "name": "The Hunter's Horn",
      "type": "secondary",
      "givers": [269],
      "xp": 500,
      "objectives": [
        [0, "Purify the hunter's horn in the healing spring in Regent Valley."],
        [0, "Go to the fishing village south of the tower in Wizard's Folly and deliver the purified horn to Aidan."]
      ],
      "wiki": {"en": "The Hunter's Horn", "de": "Das Horn des Jägers"}
    },
    "101274": {
      "name": "The King's Message",
      "type": "secondary",
      "givers": [287],
      "xp": 100,
      "gold": 50,
      "next": [101178, 101247, 101141],
      "objectives": [
        [0, "Gather a party in Ascalon City. Sir Tydus recommends bringing Alesia to heal you."],
        [0, "Go to Old Ascalon. Deliver the royal message to Ambassador Zain."]
      ],
      "rewards": ["War Hammer (has the skin of a Foehammer)", "Blunt Dmg: 13-20 (Requires 3 Hammer Mastery)", "Armor +5 (while attacking)", "Damage +10% (vs. Hexed foes)"],
      "wiki": {"en": "The King's Message", "de": "Die Nachricht des Königs"}
    },
    "101275": {
      "name": "The Krytan Ambassador",
      "type": "secondary",
      "givers": [373],
      "xp": 500,
      "next": [101274],
      "objectives": [
        [0, "Return to Ascalon City and speak to Warmaster Tydus."]
      ],
      "wiki": {"en": "The Krytan Ambassador", "de": "Der krytanische Botschafter"}
    },
    "101276": {
      "name": "The Last Day Dawns",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
      "objectives": [
        [0, "Travel to Frontier Gate and speak with Warmaster Riga."],
        [0, "Travel to the Eastern Frontier to aid King Adelbern against the Titans."]
      ],
      "wiki": {"en": "The Last Day Dawns", "de": "Der letzte Tag bricht an"}
    },
    "101277": {
      "name": "The Last Day Dawns (Hard mode)",
      "type": "secondary",
      "givers": [347],
      "xp": 50000,
      "gold": 7500,
      "rewards": ["1 Gold Zaishen Coin"],
      "requires": [101138],
      "next": [101308],
      "objectives": [
        [0, "Travel to Frontier Gate and speak with Warmaster Riga."],
        [0, "Travel to the Eastern Frontier to aid King Adelbern against the Titans."]
      ],
      "wiki": {"en": "The Last Day Dawns (Hard mode)", "de": "Der letzte Tag bricht an (Schwerer Modus)"}
    },
    "101278": {
      "name": "The Last Hog",
      "type": "secondary",
      "givers": [285],
      "xp": 500,
      "skills": [61, 157, 162, 244, 360, 447],
      "objectives": [
        [0, "Find Farmer Dirk's last remaining Prize-Winning Hog and chase it back to him."],
        [0, "Return to Farmer Dirk for your reward."]
      ],
      "wiki": {"en": "The Last Hog", "de": "Das letzte Schwein"}
    },
    "101279": {
      "name": "The Lost Princess",
      "type": "secondary",
      "givers": [462],
      "xp": 500,
      "skills": [29, 103, 170, 272, 371, 464],
      "objectives": [
        [0, "Find and speak to Salma in the Temple of the Ages."],
        [0, "Return to Watchman Arad for your reward."]
      ],
      "wiki": {"en": "The Lost Princess", "de": "Die verschollene Prinzessin"}
    },
    "101280": {
      "name": "The Mantle's Guise",
      "type": "secondary",
      "givers": [445],
      "xp": 1000,
      "gold": 500,
      "requires": [101230],
      "next": [101221],
      "objectives": [
        [0, "Investigate the Shining Blade cloak at the Scrying Pool."]
      ],
      "wiki": {"en": "The Mantle's Guise", "de": "Die Täuschung des Mantels"}
    },
    "101281": {
      "name": "The Mesmer's Path",
      "type": "secondary",
      "givers": [353],
      "xp": 1000,
      "requires_missions": [38],
      "objectives": [
        [0, "Go through Skyward Reach to Diviner's Ascent."],
        [0, "Slay all three tempest drakes in a single battle."],
        [0, "[0...3]/3 tempest drakes slain."],
        [0, "Return to Eulenias for your reward."]
      ],
      "rewards": ["Mesmer available for secondary profession"],
      "wiki": {"en": "The Mesmer's Path", "de": "Der Weg des Mesmers"}
    },
    "101282": {
      "name": "The Misplaced Sword",
      "type": "secondary",
      "givers": [290],
      "xp": 1000,
      "skills": [46, 94, 188, 313, 367, 459],
      "requires": [101164],
      "objectives": [
        [0, "Find Yort the Bronze's ceremonial family sword."],
        [0, "Return the ceremonial family sword to Yort the Bronze."]
      ],
      "wiki": {"en": "The Misplaced Sword", "de": "Das verlegte Schwert"}
    },
    "101283": {
      "name": "The Missing Artisan",
      "type": "secondary",
      "givers": [381],
      "xp": 500,
      "objectives": [
        [0, "Follow the road through Traveler's Vale to the Ascalon Foothills."],
        [0, "Talk to Artisan Rudger."]
      ],
      "wiki": {"en": "The Missing Artisan", "de": "Der verschollene Kunsthandwerker"}
    },
    "101284": {
      "name": "The Monk's Path",
      "type": "secondary",
      "givers": [354],
      "xp": 1000,
      "requires": [101271],
      "objectives": [
        [0, "Travel through the Salt Flats to Diviner's Ascent."],
        [0, "Find the Eater of Souls and destroy it!"],
        [0, "Return to Nausuan for your reward."]
      ],
      "rewards": ["Monk available for secondary profession"],
      "wiki": {"en": "The Monk's Path", "de": "Der Weg des Mönchs"}
    },
    "101285": {
      "name": "The Necromancer's Path",
      "type": "secondary",
      "givers": [355],
      "xp": 1000,
      "requires": [101271],
      "objectives": [
        [0, "Go to the Prophet's Path and slay the Sacred Griffon of Amnoon."],
        [0, "Return to Zratha Kor for your reward."]
      ],
      "rewards": ["Necromancer available for secondary profession."],
      "wiki": {"en": "The Necromancer's Path", "de": "Der Weg des Nekromanten"}
    },
    "101286": {
      "name": "The Orchard",
      "type": "secondary",
      "givers": [332],
      "xp": 250,
      "objectives": [[0, "Find the Basket of Apples. Take it to Mary Malone."]],
      "wiki": {"en": "The Orchard", "de": "Der Obstgarten"}
    },
    "101287": {
      "name": "The Path to Glory",
      "type": "primary",
      "givers": [358],
      "xp": 100,
      "objectives": [[0, "Go to Ascalon City to speak to Sir Tydus."]],
      "requires": [101098],
      "wiki": {"en": "The Path to Glory", "de": "Der Weg zum Ruhm"}
    },
    "101288": {
      "name": "The Poison Devourer",
      "type": "secondary",
      "givers": [230],
      "xp": 250,
      "objectives": [
        [0, "Cross the river and destroy the plague devourer to get a poisonous stinger."],
        [0, "Deliver the poisonous stinger to Brother Mhenlo in Ashford Abbey."]
      ],
      "wiki": {"en": "The Poison Devourer", "de": "Der Gift-Verschlinger"}
    },
    "101289": {
      "name": "The Polar Depressed",
      "type": "event",
      "givers": [458],
      "event": 13,
      "rewards": ["Frozen Accessory Token"],
      "objectives": [
        [0, "Acquire 99 Candy Cane Shards by participating in Wintersday activities."],
        [0, "See Brrrnadette for your reward."]
      ],
      "wiki": {"en": "The Polar Depressed", "de": "Die in den Schneeböen Trübsal blasen"}
    },
    "101290": {
      "name": "The Power of Blood",
      "type": "secondary",
      "givers": [417],
      "profession": 4,
      "xp": 250,
      "skills": [115, 156],
      "objectives": [
        [0, "Enter the catacombs and destroy the Blood Fanatics."],
        [0, "Destroy 3...0 more Blood Fanatic(s)."],
        [0, "Return to Kasha Blackblood for your reward."]
      ],
      "wiki": {"en": "The Power of Blood", "de": "Die Macht des Blutes"}
    },
    "101291": {
      "name": "The Price of Steel",
      "type": "secondary",
      "givers": [334],
      "xp": 500,
      "skills": [81, 141, 207, 300, 352, 458],
      "objectives": [
        [0, "Tell Gareth Quickblade about the lost White Mantle patrol."],
        [0, "Meet the Shining Blade scouts in Silverwood."],
        [0, "Seek out and destroy the White Mantle patrol."],
        [0, "Collect [5...0] more ruined White Mantle armor[s]."],
        [0, "Take the 5 ruined White Mantle armors back to Gareth Quickblade."]
      ],
      "wiki": {"en": "The Price of Steel", "de": "Der Preis des Stahls"}
    },
    "101292": {
      "name": "The Prize Moa Bird",
      "type": "secondary",
      "givers": [280],
      "xp": 250,
      "objectives": [
        [0, "Head to the catacombs and find Pitney's prize bird."],
        [0, "Return to Pitney for your reward."]
      ],
      "requires": [101323],
      "wiki": {"en": "The Prize Moa Bird", "de": "Der preisgekrönte Moa"}
    },
    "101293": {
      "name": "The Prize Winning Hogs",
      "type": "secondary",
      "givers": [288],
      "repeatable": true,
      "gold": 25,
      "objectives": [[0, "Drive the Prize-Winning Hogs back into their pen."]],
      "wiki": {"en": "The Prize Winning Hogs", "de": "Das preisgekrönte Schwein"}
    },
    "101294": {
      "name": "The Ranger's Companion",
      "type": "secondary",
      "givers": [316],
      "xp": 250,
      "skills": [411, 436, 446],
      "objectives": [
        [0, "Find the shrine of Melandru's statue along the path in the woods."],
        [0, "Use your Charm Animal skill on one of Melandru's Stalkers when it appears."],
        [0, "Return to Master Ranger Nente for your reward."]
      ],
      "wiki": {"en": "The Ranger's Companion", "de": "Der Gefährte des Waldläufers"}
    },
    "101295": {
      "name": "The Ranger's Path",
      "type": "secondary",
      "givers": [356],
      "xp": 1000,
      "objectives": [
        [0, "Go to the Salt Flats and slay the Yxthoshth."],
        [0, "Return to Telius for your reward."]
      ],
      "rewards": ["Ranger available for secondary profession"],
      "wiki": {"en": "The Ranger's Path", "de": "Der Weg des Waldläufers"}
    },
    "101296": {
      "name": "The Red-Cloaked Deserter",
      "type": "secondary",
      "givers": [310],
      "xp": 1000,
      "objectives": [
        [0, "Deliver Farrah's message to Little Thom."],
        [0, "Tell Farrah of the death of Little Thom."]
      ],
      "rewards": ["Longbow of Fortitude", "Piercing Dmg: 11-18 (Requires 3 Marksmanship)", "Damage +15% (while health is above 50%)", "Health +20", "Two-handed", "Jeweled Chalice", "Energy +6 (Requires 5 Illusion Magic)", "Health +15 (while Hexed)", "Armor +5 (while Hexed)"],
      "wiki": {"en": "The Red-Cloaked Deserter", "de": "Der Deserteur im roten Umhang"}
    },
    "101297": {
      "name": "The Road to Borlis Pass",
      "type": "secondary",
      "givers": [177],
      "xp": 500,
      "requires_missions": [32],
      "next": [101318],
      "objectives": [
        [0, "Follow the road from Yak's Bend to Borlis Pass. Defeat all Stone Summit raiders along the road."],
        [0, "Return to Captain Osric for your reward."]
      ],
      "rewards": ["Frost Artifact", "Energy +7 (req. 5 water magic)", "Armor +5 (vs. elemental damage)"],
      "wiki": {"en": "The Road to Borlis Pass", "de": "Der Weg zum Borlispass"}
    },
    "101298": {
      "name": "The Rogue's Replacement",
      "type": "secondary",
      "givers": [314],
      "xp": 250,
      "objectives": [
        [0, "Search for a source of devourer eggs in Lakeside County. Collect one devourer egg."],
        [0, "Return to Old Mac for your reward."]
      ],
      "requires": [101089],
      "wiki": {"en": "The Rogue's Replacement", "de": "Der Ersatz des Ausreißers"}
    },
    "101299": {
      "name": "The Royal Papers",
      "type": "secondary",
      "givers": [462],
      "xp": 750,
      "skills": [6, 85, 184, 251, 390, 408],
      "objectives": [
        [0, "Retrieve the royal scribe's papers from the Tengu in Stingray Strand."],
        [0, "Return the royal scribe's papers to Watchman Arad in Fishermen's Haven."]
      ],
      "wiki": {"en": "The Royal Papers", "de": "Die königlichen Papiere"}
    },
    "101300": {
      "name": "The Scourge Beneath",
      "dungeon": 780,
      "type": "secondary",
      "givers": [399],
      "xp": 250,
      "gold": 100,
      "objectives": [
        [0, "Enter the tunnels and rendezvous with Devona. (first time only)"],
        [0, "Enter the tunnels. (when repeating the quest)"],
        [0, "Secure the key and gain access to the lower level."],
        [0, "Find a way through the crystal gate."],
        [0, "Defeat Maz Scourgeheart."],
        [0, "Exit the tunnels and report to Devona in Piken Square."]
      ],
      "requires": [101129],
      "wiki": {"en": "The Scourge Beneath", "de": "Die Geißel in der Tiefe"}
    },
    "101301": {
      "name": "The Siege of Piken Square",
      "type": "secondary",
      "givers": [198],
      "xp": 500,
      "next": [101175],
      "objectives": [
        [0, "Destroy the Charr forces besieging Piken Square."]
      ],
      "rewards": ["Air Staff", "Energy +4", "Lightning Dmg: 4-7 (Requires 3 Air Magic)", "Armor penetration +10% (Chance: 10%)", "Two-handed", "Furious War Hammer", "Blunt Dmg: 13-20 (Requires 3 Hammer Mastery)", "Double adrenaline gain (Chance: 10%)1", "Armor penetration +5% (Chance: 10%)", "Two-handed", "Can be salvaged"],
      "wiki": {"en": "The Siege of Piken Square", "de": "Die Belagerung des Pikenplatzes"}
    },
    "101302": {
      "name": "The Stolen Artifact",
      "type": "secondary",
      "givers": [284],
      "profession": 4,
      "xp": 200,
      "skills": [83, 105, 109, 123],
      "objectives": [
        [0, "Find the Grawl that have stolen the relic. Look for them in the fields just north of the Sanitarium."],
        [0, "Escort Necromancer Munne and the relic back to the sanitarium. \"sanitarium\" is lowercase here"],
        [0, "Return to Necromancer Munne for your reward."]
      ],
      "wiki": {"en": "The Stolen Artifact", "de": "Das gestohlene Artefakt"}
    },
    "101303": {
      "name": "The Stone Summit Champion",
      "type": "secondary",
      "givers": [345],
      "profession": 5,
      "xp": 350,
      "skills": [19, 23, 38],
      "objectives": [
        [0, "Defeat Ulrik the Undefeated in Traveler's Vale."],
        [0, "Return to Sebedoh the Mesmer for your reward."]
      ],
      "wiki": {"en": "The Stone Summit Champion", "de": "Der Steingipfel-Champion"}
    },
    "101304": {
      "name": "The Strength of Snow",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "objectives": [
        [0, "Speak to the Rift Warden when you are ready to defend the secret lair of the snowmen."],
        [0, "Join Freezie's forces to defend the secret lair of the snowmen."],
        [0, "Defend the secret lair of the snowmen from the attacking grentches."],
        [0, "See Rift Warden for your reward."]
      ],
      "wiki": {"en": "The Strength of Snow", "de": "Die Stärke des Schnees"}
    },
    "101305": {
      "name": "The Supremacy of Air",
      "type": "secondary",
      "givers": [468],
      "xp": 250,
      "objectives": [
        [0, "Follow the road up to the wizard's tower. Destroy the Tower Golem."],
        [0, "See Elementalist Aziure for your reward."]
      ],
      "wiki": {"en": "The Supremacy of Air", "de": "Die Überlegenheit der Luft"}
    },
    "101306": {
      "name": "The Tarnished Emblem",
      "type": "secondary",
      "givers": [291],
      "xp": 1000,
      "gold": 500,
      "requires": [101116],
      "next": [101106],
      "objectives": [
        [0, "Investigate the tarnished emblem at the scrying pool."]
      ],
      "wiki": {"en": "The Tarnished Emblem", "de": "Das verrostete Abzeichen"}
    },
    "101307": {
      "name": "The Titan Source",
      "type": "secondary",
      "givers": [347],
      "xp": 50000,
      "requires": [101276, 101139, 101135],
      "next": [101138],
      "objectives": [
        [0, "Travel to Grendich Courthouse and speak with Warmaster Labofski to learn how you can help defend against the Titan threat."],
        [0, "Travel to the northwest region of Dragon's Gullet and kill the 3 Titan bosses."],
        [0, "Return to Vision of Glint for your reward."]
      ],
      "wiki": {"en": "The Titan Source", "de": "Der Ursprung der Titanen"}
    },
    "101308": {
      "name": "The Titan Source (Hard mode)",
      "type": "secondary",
      "givers": [347],
      "xp": 75000,
      "gold": 10000,
      "rewards": ["1 Gold Zaishen Coin"],
      "requires": [101277, 101140, 101136],
      "objectives": [
        [0, "Travel to Grendich Courthouse and speak with Warmaster Labofski to learn how you can help defend against the Titan threat."],
        [0, "Travel to the northwest region of Dragon's Gullet and kill the 3 Titan bosses."],
        [0, "Return to Vision of Glint for your reward."]
      ],
      "wiki": {"en": "The Titan Source (Hard mode)", "de": "Der Ursprung der Titanen (Schwerer Modus)"}
    },
    "101309": {
      "name": "The Troublesome Artifact",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "gold": 100,
      "objectives": [
        [0, "Starting at the Frontier Gate, follow the road south through the Eastern Frontier and into Pockmark Flats."],
        [0, "Return to Warmaster Tydus for your reward."]
      ],
      "rewards": ["Divine Symbol", "Energy +6 (Requires 5 Divine Favor)", "Armor +5 (while casting)"],
      "wiki": {"en": "The Troublesome Artifact", "de": "Das lästige Artefakt"}
    },
    "101310": {
      "name": "The True King",
      "type": "secondary",
      "givers": [382],
      "xp": 750,
      "objectives": [
        [
          0,
          "Travel east from the Barradin Estate to Lakeside County. Head south to Ashford. Take the southeast bridge to Regent Valley. Once in Regent Valley, follow the road to Fort Ranik."
        ]
      ],
      "requires": [101330],
      "wiki": {"en": "The True King", "de": "Der wahre König"}
    },
    "101311": {
      "name": "The Undead Hordes",
      "type": "secondary",
      "givers": [406],
      "xp": 500,
      "skills": [21, 154, 208, 309, 327, 468],
      "objectives": [
        [0, "Go to the Watchtower Coast and stop the undead from reaching Beetletun."],
        [0, "Return to Elder Hezron for your reward."]
      ],
      "wiki": {"en": "The Undead Hordes", "de": "Die Horden der Untoten"}
    },
    "101312": {
      "name": "The Villainy of Galrath",
      "type": "secondary",
      "givers": [113],
      "xp": 4000,
      "next": [101313],
      "objectives": [
        [0, "Seek out Galrath at the wizard's tower in Kessex Peak. Put an end to his villainy."],
        [0, "Return to Firstwatch Sergio for your reward."]
      ],
      "rewards": ["Cruel Staff", "Energy +6", "Dark Dmg: 7-13 (Requires 6 Blood Magic)", "Damage +15% (vs. Hexed foes)", "Armor +5 (while Attacking)", "Two-handed", "Furious Long Sword of Fortitude", "Slashing Dmg: 13-19 (Requires 6 Swordsmanship)", "Health +25", "Double adrenaline gain (Chance: 10%)"],
      "wiki": {"en": "The Villainy of Galrath", "de": "Galraths Abscheulichkeit"}
    },
    "101313": {
      "name": "The Villainy of Galrath (Hard mode)",
      "type": "secondary",
      "givers": [566],
      "xp": 30000,
      "gold": 5000,
      "requires": [101312],
      "objectives": [
        [0, "Seek out Galrath at the wizard's tower in Kessex Peak. Put an end to his villainy."],
        [0, "Return to Firstwatch Sergio for your reward."]
      ],
      "wiki": {"en": "The Villainy of Galrath (Hard mode)", "de": "Galraths Abscheulichkeit (Schwerer Modus)"}
    },
    "101314": {
      "name": "The Vineyard Problem",
      "type": "secondary",
      "givers": [279],
      "profession": 1,
      "xp": 250,
      "skills": [330, 336],
      "objectives": [
        [0, "Go to the duke's vineyard and kill all large aloe seeds."],
        [0, "Kill 4...0 more large aloe seeds."],
        [0, "Return to Little Thom for your reward."]
      ],
      "wiki": {"en": "The Vineyard Problem", "de": "Das Weinberg-Problem"}
    },
    "101315": {
      "name": "The Waiting Game",
      "type": "event",
      "givers": [384],
      "event": 11,
      "xp": 15000,
      "gold": 5000,
      "rewards": [
        "250 Trick-or-Treat Bags",
        "Passage Scroll to the Underworld",
        "100 Trick-or-Treat Bags",
        "Passage Scroll to the Underworld"
      ],
      "requires": [101235],
      "objectives": [
        [0, "Speak with the Voice of Grenth in the Temple of the Ages, Zin Ku Corridor, or Chantry of Secrets should you wish to volunteer your services in the fight against Dhuum."],
        [0, "Speak with the Reaper of the Labyrinth to get an update on Dhuum's state of imprisonment."],
        [0, "Completing all quests in the Underworld will release Dhuum."]
      ],
      "wiki": {"en": "The Waiting Game", "de": "Warten wir ab"}
    },
    "101316": {
      "name": "The War in Kryta",
      "type": "primary",
      "givers": [325],
      "objectives": [
        [0, "Find the Shining Blade Camp in Talmark Wilderness."],
        [0, "Enlist the aid of the Asura. (Asuran Allies)"],
        [0, "Enlist the aid of the Ebon Vanguard. (Ebon Vanguard Allies)"],
        [0, "Defeat the Inquisitors of the White Mantle: Lashona, Bauer, and Lovisa."],
        [0, "Defeat the three Mursaat to give hope to the people: Willem the Demeaning, Aily the Innocent, and Koril the Malignant."],
        [0, "Locate the Shining Blade's allies, and gather them at Lion's Arch."],
        [0, "Defend Lion's Arch."],
        [0, "Return to Salma for your congratulatory message."]
      ],
      "wiki": {"en": "The War in Kryta", "de": "Der Krieg in Kryta"}
    },
    "101317": {
      "name": "The Warrior's Path",
      "type": "secondary",
      "givers": [352],
      "xp": 1000,
      "objectives": [
        [0, "Go to the Scar and slay the Orshad Chieftain."],
        [0, "Return to Agastos the Brave for your reward."]
      ],
      "rewards": ["Warrior available for secondary profession"],
      "wiki": {"en": "The Warrior's Path", "de": "Der Weg des Kriegers"}
    },
    "101318": {
      "name": "The Way is Blocked",
      "type": "primary",
      "givers": [177],
      "xp": 500,
      "requires": [101297],
      "next_missions": [25],
      "missions": [25],
      "objectives": [
        [0, "Clear the Stone Summit blocking the entrance to Borlis Pass."],
        [0, "See Beccum Reedly for your reward."]
      ],
      "wiki": {"en": "The Way is Blocked", "de": "Der Weg ist versperrt"}
    },
    "101319": {
      "name": "The Way of the Geomancer",
      "type": "secondary",
      "givers": [351],
      "profession": 6,
      "xp": 500,
      "next": [101267],
      "objectives": [
        [0, "Kill ten hulking stone elementals."],
        [0, "0/10 hulking stone elementals slain."],
        [0, "Return to Kendrick Redstaff."]
      ],
      "wiki": {"en": "The Way of the Geomancer", "de": "Der Weg des Geomanten"}
    },
    "101320": {
      "name": "The Wayward Monk",
      "type": "secondary",
      "givers": [365],
      "profession": 3,
      "xp": 350,
      "skills": [254, 264, 284],
      "objectives": [
        [0, "Talk to Cynn in Traveler's Vale."],
        [0, "Help Cynn find Mhenlo in Iron Horse Mine."],
        [0, "Find Mhenlo."]
      ],
      "wiki": {"en": "The Wayward Monk", "de": "Der eigensinnige Mönch"}
    },
    "101321": {
      "name": "The Wayward Wizard",
      "type": "secondary",
      "givers": [378],
      "xp": 250,
      "objectives": [
        [0, "Talk to Ralena Stormbringer in Foible's Fair to learn Orion's whereabouts."],
        [0, "Find Orion in Wizard's Folly and convince him to come home."],
        [0, "Return to Sandre Elek for your reward."]
      ],
      "wiki": {"en": "The Wayward Wizard", "de": "Der unberechenbare Zauberer"}
    },
    "101322": {
      "name": "The Weaver of Nebo",
      "type": "secondary",
      "givers": [349],
      "xp": 500,
      "gold": 500,
      "objectives": [
        [0, "Follow the road through North Kryta Province to Nebo Terrace."],
        [0, "Talk to Etham the Artisan in Nebo Village."]
      ],
      "wiki": {"en": "The Weaver of Nebo", "de": "Der Weber von Nebo"}
    },
    "101323": {
      "name": "The Worm Problem",
      "type": "secondary",
      "givers": [280],
      "xp": 250,
      "objectives": [
        [0, "Acquire a devourer egg from Fadden Hathorn in the devourer cave."],
        [0, "Take the devourer egg to Pitney in Ashford."],
        [0, "Follow Pitney and kill the Worm Queen."],
        [0, "Return to Pitney for your reward."]
      ],
      "next": [101292],
      "wiki": {"en": "The Worm Problem", "de": "Das Wurmproblem"}
    },
    "101324": {
      "name": "Tithe for Ashford Abbey",
      "type": "secondary",
      "givers": [239],
      "xp": 250,
      "rewards": ["1 Skill point"],
      "objectives": [
        [
          0,
          "Head due north from Ashford until you find the road to Green Hills County. Go to Green Hills County and talk to Grazden the Protector."
        ],
        [0, "Deliver Barradin's Tithe to Devona."]
      ],
      "requires": [101335],
      "wiki": {"en": "Tithe for Ashford Abbey", "de": "Zehnt für die Abtei von Aschfurt"}
    },
    "101325": {
      "name": "To Kryta: Journey's End",
      "type": "primary",
      "givers": [670],
      "xp": 500,
      "requires": [101327],
      "next_missions": [14],
      "missions": [14],
      "objectives": [
        [0, "Deliver the letter to Ambassador Braun."],
        [0, "See Witness Casori for your reward."]
      ],
      "wiki": {"en": "To Kryta: Journey's End", "de": "Nach Kryta: Ende einer Reise"}
    },
    "101326": {
      "name": "To Kryta: Refugees",
      "type": "primary",
      "givers": [391],
      "xp": 500,
      "next": [101327],
      "objectives": [
        [0, "Eliminate the [6...0] remaining Centaur patrol[s] along the main road."],
        [0, "See Ranger Olson for your reward."]
      ],
      "wiki": {"en": "To Kryta: Refugees", "de": "Nach Kryta: Flüchtlinge"}
    },
    "101327": {
      "name": "To Kryta: The Ice Cave",
      "type": "primary",
      "givers": [669],
      "xp": 500,
      "requires": [101326],
      "next": [101325],
      "objectives": [
        [0, "Follow Aidan's markers through the Ice Cave."],
        [0, "See Aidan for your reward."]
      ],
      "wiki": {"en": "To Kryta: The Ice Cave", "de": "Nach Kryta: Die Eishöhle"}
    },
    "101328": {
      "name": "To Sorrow's Furnace",
      "type": "primary",
      "givers": [374],
      "xp": 10000,
      "gold": 750,
      "next": [101264],
      "objectives": [
        [0, "Help Galen Trask complete his mission inside Sorrow's Furnace."],
        [0, "Help Kilroy Stonekin complete his mission inside Sorrow's Furnace."],
        [0, "Help High Priest Alkar complete his mission inside Sorrow's Furnace."],
        [0, "Help Orozar Highstone complete his mission inside Sorrow's Furnace."],
        [0, "Find Galen Trask somewhere in Grenth's Footprint."],
        [0, "Lead Galen Trask into Sorrow's Furnace."],
        [0, "Find Kilroy Stonekin somewhere in Grenth's Footprint."],
        [0, "Lead Kilroy Stonekin into Sorrow's Furnace."],
        [0, "Find High Priest Alkar somewhere in Grenth's Footprint."],
        [0, "Lead High Priest Alkar into Sorrow's Furnace."],
        [0, "Find Orozar Highstone somewhere in Grenth's Footprint."],
        [0, "Lead Orozar Highstone into Sorrow's Furnace."]
      ],
      "wiki": {"en": "To Sorrow's Furnace", "de": "Zum Hochofen der Betrübnis"}
    },
    "101329": {
      "name": "Toward the Front Lines",
      "type": "primary",
      "givers": [262],
      "xp": 500,
      "gold": 200,
      "objectives": [
        [0, "The war with the Charr is at Ascalon's gates. Report to Warmaster Tydus to join the battle."]
      ],
      "wiki": {"en": "Toward the Front Lines", "de": "Nach vorn zur Front"}
    },
    "101330": {
      "name": "Trouble in the Woods",
      "type": "secondary",
      "givers": [539],
      "xp": 500,
      "objectives": [
        [0, "Go to Lakeside County and follow the road to Ashford. Talk to Devona about the Grawl threat."],
        [0, "Go with Devona and destroy the Grawl threatening Ashford."]
      ],
      "next": [101128, 101310],
      "wiki": {"en": "Trouble in the Woods", "de": "Ärger im Wald"}
    },
    "101331": {
      "name": "Trying Times",
      "type": "secondary",
      "givers": [297],
      "profession": 5,
      "xp": 300,
      "skills": [7, 77],
      "next": [101084],
      "objectives": [
        [0, "Find and retrieve a mossy rock from the cave near the ruins of Ashford."],
        [0, "Return to Vassar for your reward."]
      ],
      "wiki": {"en": "Trying Times", "de": "Schwierige Zeiten"}
    },
    "101332": {
      "name": "Unnatural Creatures",
      "type": "secondary",
      "givers": [550],
      "profession": 5,
      "xp": 250,
      "skills": [30],
      "next": [101155],
      "objectives": [
        [0, "Slay Grenn Mindvenom."],
        [0, "Return to Erudine for your reward."]
      ],
      "wiki": {"en": "Unnatural Creatures", "de": "Unnatürliche Kreaturen"}
    },
    "101333": {
      "name": "Unnatural Growths",
      "type": "secondary",
      "givers": [188],
      "profession": 2,
      "xp": 250,
      "skills": [396, 431],
      "objectives": [
        [0, "Go to the falls to the west. Destroy the aloe husks until you find an aloe root."],
        [0, "Take the aloe root back to Aidan."]
      ],
      "wiki": {"en": "Unnatural Growths", "de": "Abnormale Gewächse"}
    },
    "101334": {
      "name": "Unruly Slaves",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "objectives": [
        [0, "Defeat Molachev"],
        [0, "See Krak Flamewhip for your reward."]
      ],
      "wiki": {"en": "Unruly Slaves", "de": "Widerspenstige Sklaven"}
    },
    "101335": {
      "name": "Unsettling Rumors",
      "type": "primary",
      "givers": [239],
      "xp": 250,
      "objectives": [
        [0, "Speak with Meerak the Scribe in Ashford Abbey."],
        [0, "Deliver the message to Armin Saberlin. Use your map to travel to Ascalon City quickly."]
      ],
      "requires": [101166],
      "next": [101098],
      "wiki": {"en": "Unsettling Rumors", "de": "Beunruhigende Gerüchte"}
    },
    "101336": {
      "name": "Unspeakable, Unknowable",
      "type": "instance",
      "givers": [759],
      "xp": 8000,
      "gold": 500,
      "objectives": [
        [0, "Return to the ancient ruins of the Great Destroyer."],
        [0, "Destroy the Hierophant Morlog before he learns the true name of the Great Destroyer."],
        [0, "Return the Tome of the Rubicon to the ancient ruins. Drop it where High Priest Alkar awaits."],
        [0, "Collect 4 shards of Balthazate crystal and place them near High Priest Alkar. You have [4..0] shards remaining. Be sure to protect the High Priest from enemy patrols."],
        [0, "See High Priest Alkar for your reward."]
      ],
      "wiki": {"en": "Unspeakable, Unknowable", "de": "Unsäglich, unverständlich"}
    },
    "101337": {
      "name": "Urgent Warning",
      "type": "primary",
      "givers": [360],
      "xp": 500,
      "requires": [101382],
      "missions": [12],
      "objectives": [
        [0, "Meet up with Gretchen's Scout."],
        [0, "See Elder Gretchen for your reward."]
      ],
      "rewards": ["Battle Axe", "Slashing Dmg: 6-25 (Requires 8 Axe Mastery)", "Damage +15% (while Enchanted)", "Wicked Staff", "Energy +8", "Dark Dmg: 9-16 (Requires 8 Blood Magic)", "Damage +10% (vs. Hexed foes)", "Energy +5 (while Hexed)", "Two-handed"],
      "wiki": {"en": "Urgent Warning", "de": "Dringende Warnung"}
    },
    "101338": {
      "name": "Vanguard Annihilation: Bandits",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find and kill the Bandit Ringleaders inside Regent Valley. [6...0] remain."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Annihilation: Bandits", "de": "Vorhut-Vernichtung: Banditen"}
    },
    "101339": {
      "name": "Vanguard Annihilation: Charr",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find and kill the Charr Champions inside the Northlands. [6...0] remain."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Annihilation: Charr", "de": "Vorhut-Vernichtung: Charr"}
    },
    "101340": {
      "name": "Vanguard Annihilation: Undead",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find and kill the Undead Necromancers inside the Catacombs. [6...0] remain."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Annihilation: Undead", "de": "Vorhut-Vernichtung: Untote"}
    },
    "101341": {
      "name": "Vanguard Bounty: Blazefiend Griefblade",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find and kill Blazefiend Griefblade inside the Northlands."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Bounty: Blazefiend Griefblade", "de": "Vorhut-Kopfgeld: Lohteufel Leidklinge"}
    },
    "101342": {
      "name": "Vanguard Bounty: Countess Nadya",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find and kill Countess Nadya inside the Regent Valley."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Bounty: Countess Nadya", "de": "Vorhut-Kopfgeld: Gräfin Nadya"}
    },
    "101343": {
      "name": "Vanguard Bounty: Utini Wupwup",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find and kill Utini Wupwup inside of Green Hills County."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Bounty: Utini Wupwup", "de": "Vorhut-Kopfgeld: Utini Wupwup"}
    },
    "101344": {
      "name": "Vanguard Equipment",
      "type": "secondary",
      "givers": [231],
      "xp": 500,
      "requires": [101141],
      "objectives": [
        [0, "Go to Regent Valley. Acquire the Vanguard equipment from Gelsan."],
        [0, "Recover Gelsan's stolen goods from the bandits."],
        [0, "Deliver the stolen goods to Gelsan."],
        [0, "Deliver the Vanguard equipment to Captain Arne in Ascalon City."]
      ],
      "rewards": ["Flame Artifact", "Energy +6 (Requires 5 Fire Magic)", "Energy +5 (while Hexed)", "Energy +5 (while Health is above 50%)"],
      "wiki": {"en": "Vanguard Equipment", "de": "Vorhut-Ausrüstung"}
    },
    "101345": {
      "name": "Vanguard Rescue: Farmer Hamnet",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find and rescue Farmer Hamnet, who is lost in Wizard's Folly."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Rescue: Farmer Hamnet", "de": "Vorhut-Rettung: Bauer Hamnet"}
    },
    "101346": {
      "name": "Vanguard Rescue: Footman Tate",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Rescue Footman Tate, who is trapped behind enemy lines in the Northlands."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Rescue: Footman Tate", "de": "Vorhut-Rettung: Fußsoldat Tate"}
    },
    "101347": {
      "name": "Vanguard Rescue: Save the Ascalonian Noble",
      "type": "secondary",
      "givers": [778],
      "xp": 1000,
      "gold": 50,
      "objectives": [
        [0, "Find Duke Gaban and escort him out of the Catacombs."],
        [0, "See Lieutenant Langmar for your reward."]
      ],
      "wiki": {"en": "Vanguard Rescue: Save the Ascalonian Noble", "de": "Vorhut-Rettung: Der ascalonische Adlige"}
    },
    "101348": {
      "name": "Wanted: Amalek the Unmerciful",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Amalek the Unmerciful in Watchtower Coast"],
        [0, "*BONUS* Kill Amalek the Unmerciful in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Amalek the Unmerciful", "de": "Gesucht: Amalek der Gnadenlose"}
    },
    "101349": {
      "name": "Wanted: Barthimus the Provident",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Barthimus the Provident in Cursed Lands"],
        [0, "*BONUS* Kill Barthimus the Provident in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Barthimus the Provident", "de": "Gesucht: Barthimus der Fürsorgliche"}
    },
    "101350": {
      "name": "Wanted: Calamitous",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Calamitous in Watchtower Coast"],
        [0, "*BONUS* Kill Calamitous in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Calamitous", "de": "Gesucht: Calamitous"}
    },
    "101351": {
      "name": "Wanted: Carnak the Hungry",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "objectives": [
        [0, "Kill Carnak the Hungry in The Black Curtain"],
        [0, "*BONUS* Kill Carnak the Hungry in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 7 War Supplies", "Complete the *BONUS* Objective for an additional 3 War Supplies"],
      "wiki": {"en": "Wanted: Carnak the Hungry", "de": "Gesucht: Carnak der Hungernde"}
    },
    "101352": {
      "name": "Wanted: Cerris",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Cerris in Nebo Terrace"],
        [0, "*BONUS* Kill Cerris in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies.", "Complete the *BONUS* Objective for an additional 5 War Supplies."],
      "wiki": {"en": "Wanted: Cerris", "de": "Gesucht: Cerris"}
    },
    "101353": {
      "name": "Wanted: Destor the Truth Seeker",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Destor the Truth Seeker in Kessex Peak"],
        [0, "*BONUS* Kill Destor the Truth Seeker in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Destor the Truth Seeker", "de": "Gesucht: Destor der Wahrheitssuchende"}
    },
    "101354": {
      "name": "Wanted: Greves the Overbearing",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "objectives": [
        [0, "Kill Greves the Overbearing in The Black Curtain"],
        [0, "*BONUS* Kill Greves the Overbearing in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 7 War Supplies", "Complete the *BONUS* Objective for an additional 3 War Supplies"],
      "wiki": {"en": "Wanted: Greves the Overbearing", "de": "Gesucht: Greves der Anmaßende"}
    },
    "101355": {
      "name": "Wanted: Inquisitor Bauer",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill Inquisitor Bauer in Scoundrel's Rise"],
        [0, "*BONUS* Kill Inquisitor Bauer in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 20 War Supplies", "Complete the *BONUS* Objective for an additional 10 War Supplies"],
      "wiki": {"en": "Wanted: Inquisitor Bauer", "de": "Gesucht: Inquisitor Bauer"}
    },
    "101356": {
      "name": "Wanted: Inquisitor Lashona",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill Inquisitor Lashona in North Kryta Province"],
        [0, "*BONUS* Kill Inquisitor Lashona in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 20 War Supplies", "Complete the *BONUS* Objective for an additional 10 War Supplies"],
      "wiki": {"en": "Wanted: Inquisitor Lashona", "de": "Gesucht: Inquisitor Lashona"}
    },
    "101357": {
      "name": "Wanted: Inquisitor Lovisa",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill Inquisitor Lovisa in Watchtower Coast"],
        [0, "*BONUS* Kill Inquisitor Lovisa in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 20 War Supplies", "Complete the *BONUS* Objective for an additional 10 War Supplies"],
      "wiki": {"en": "Wanted: Inquisitor Lovisa", "de": "Gesucht: Inquisitorin Lovisa"}
    },
    "101358": {
      "name": "Wanted: Insatiable Vakar",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "objectives": [
        [0, "Kill Insatiable Vakar in North Kryta Province"],
        [0, "*BONUS* Kill Insatiable Vakar in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 7 War Supplies", "Complete the *BONUS* Objective for an additional 3 War Supplies"],
      "wiki": {"en": "Wanted: Insatiable Vakar", "de": "Gesucht: Vakar der Unersättliche"}
    },
    "101359": {
      "name": "Wanted: Joh the Hostile",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Kill Joh the Hostile in Scoundrel's Rise"],
        [0, "*BONUS* Kill Joh the Hostile in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 3 War Supplies", "Complete the *BONUS* Objective for an additional 1 War Supplies"],
      "wiki": {"en": "Wanted: Joh the Hostile", "de": "Gesucht: Joh der Feindselige"}
    },
    "101360": {
      "name": "Wanted: Justiciar Amilyn",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Justiciar Amilyn in Kessex Peak"],
        [0, "*BONUS* Kill Justiciar Amilyn in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Justiciar Amilyn", "de": "Gesucht: Justiziarin Amilyn"}
    },
    "101361": {
      "name": "Wanted: Justiciar Kasandra",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Kill Justiciar Kasandra in D'Alessio Seaboard"],
        [0, "Kill Justiciar Kasandra in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 15 War Supplies", "Complete the *BONUS* Objective for an additional 7 War Supplies"],
      "wiki": {"en": "Wanted: Justiciar Kasandra", "de": "Gesucht: Justiziarin Kasandra"}
    },
    "101362": {
      "name": "Wanted: Justiciar Kimii",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Gain passage to Riverside Province and Kill Justiciar Kimii"],
        [0, "*BONUS* Kill Justiciar Kimii in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 15 War Supplies", "Complete the *BONUS* Objective for an additional 7 War Supplies"],
      "wiki": {"en": "Wanted: Justiciar Kimii", "de": "Gesucht: Justiziarin Kimii"}
    },
    "101363": {
      "name": "Wanted: Justiciar Marron",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Justiciar Marron in Kessex Peak"],
        [0, "*BONUS* Kill Justiciar Marron in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Justiciar Marron", "de": "Gesucht: Justiziar Marron"}
    },
    "101364": {
      "name": "Wanted: Justiciar Sevaan",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "objectives": [
        [0, "Take the Secret River Passage to Divinity Coast and kill Justiciar Sevaan."],
        [0, "*BONUS* Kill Justiciar Sevaan in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 15 War Supplies", "Complete the *BONUS* Objective for an additional 7 War Supplies"],
      "wiki": {"en": "Wanted: Justiciar Sevaan", "de": "Gesucht: Justiziar Sevaan"}
    },
    "101365": {
      "name": "Wanted: Lev the Condemned",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "objectives": [
        [0, "Kill Lev the Condemned in North Kryta Province"],
        [0, "*BONUS* Kill Lev the Condemned in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 3 War Supplies", "Complete the *BONUS* Objective for an additional 1 War Supplies"],
      "wiki": {"en": "Wanted: Lev the Condemned", "de": "Gesucht: Lev die Verdammte"}
    },
    "101366": {
      "name": "Wanted: Maximilian the Meticulous",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Kill Maximilian the Meticulous in Nebo Terrace"],
        [0, "*BONUS* Kill Maximilian the Meticulous in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 3 War Supplies", "Complete the *BONUS* Objective for an additional 1 War Supplies"],
      "wiki": {"en": "Wanted: Maximilian the Meticulous", "de": "Gesucht: Maximilian der Pingelige"}
    },
    "101367": {
      "name": "Wanted: Sarnia the Red-Handed",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Kill Sarnia the Red-Handed in North Kryta Province"],
        [0, "*BONUS* Kill Sarnia the Red-Handed in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 3 War Supplies.", "Complete the *BONUS* Objective for an additional 1 War Supply."],
      "wiki": {"en": "Wanted: Sarnia the Red-Handed", "de": "Gesucht: Sarnia die Rothändige"}
    },
    "101368": {
      "name": "Wanted: Selenas the Blunt",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Kill Selenas the Blunt in Twin Serpent Lakes"],
        [0, "*BONUS* Kill Selenas the Blunt in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 3 War Supplies", "Complete the *BONUS* Objective for an additional 1 War Supplies"],
      "wiki": {"en": "Wanted: Selenas the Blunt", "de": "Gesucht: Selenas die Unverblümte"}
    },
    "101369": {
      "name": "Wanted: Valis the Rampant",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "objectives": [
        [0, "Kill Valis the Rampant in Twin Serpent Lakes"],
        [0, "*BONUS* Kill Valis the Rampant in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 3 War Supplies.", "Complete the *BONUS* Objective for an additional 1 War Supplies."],
      "wiki": {"en": "Wanted: Valis the Rampant", "de": "Gesucht: Valis der Ungezügelte"}
    },
    "101370": {
      "name": "Wanted: Vess the Disputant",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Kill Vess the Disputant in Divinity Coast"],
        [0, "*BONUS* Kill Vess the Disputant in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Vess the Disputant", "de": "Gesucht: Vess die Streitsüchtige"}
    },
    "101371": {
      "name": "Wanted: Zaln the Jaded",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "objectives": [
        [0, "Gain passage to D'Alessio Seaboard and kill Zaln the Jaded"],
        [0, "*BONUS* Kill Zaln the Jaded in Hard Mode"],
        [0, "See Princess Salma for your reward"]
      ],
      "rewards": ["Complete the Base Objective for 10 War Supplies", "Complete the *BONUS* Objective for an additional 5 War Supplies"],
      "wiki": {"en": "Wanted: Zaln the Jaded", "de": "Gesucht: Zaln der Erschöpfte"}
    },
    "101372": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 6,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": {"en": "War Preparations", "de": "Kriegsvorbereitungen (Elementarmagier)"}
    },
    "101373": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 1,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": {"en": "War Preparations", "de": "Kriegsvorbereitungen (Krieger)"}
    },
    "101374": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 5,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": {"en": "War Preparations", "de": "Kriegsvorbereitungen (Mesmer)"}
    },
    "101375": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 3,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": {"en": "War Preparations", "de": "Kriegsvorbereitungen (Mönch)"}
    },
    "101376": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 4,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": {"en": "War Preparations", "de": "Kriegsvorbereitungen (Nekromant)"}
    },
    "101377": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 2,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": {"en": "War Preparations", "de": "Kriegsvorbereitungen (Waldläufer)"}
    },
    "101378": {
      "name": "Warrior Test",
      "type": "primary",
      "givers": [423],
      "profession": 1,
      "xp": 500,
      "skills": [1, 346],
      "objectives": [
        [0, "Go southwest along the road to find the skale. Clear the river of skale."],
        [0, "Return to Van the Warrior for your reward."]
      ],
      "next": [101166],
      "wiki": {"en": "Warrior Test", "de": "Die Prüfung des Kriegers"}
    },
    "101379": {
      "name": "Warrior's Challenge",
      "type": "secondary",
      "givers": [382],
      "xp": 250,
      "skills": [331, 346],
      "objectives": [
        [0, "Go to Green Hills County and defeat Agnar the Foot. (Use Hammer Bash to interrupt his Rage skill.)"],
        [0, "Return to Duke Barradin for your reward."]
      ],
      "wiki": {"en": "Warrior's Challenge", "de": "Herausforderung des Kriegers"}
    },
    "101380": {
      "name": "Wayfarer's Reverie: Tyria",
      "type": "event",
      "givers": [545],
      "event": 8,
      "xp": 2005,
      "gold": 2012,
      "rewards": ["Proof of Flames"],
      "objectives": [
        [0, "Visit the Searing crystal near Serenity Temple."],
        [0, "Visit the Flame Temple."],
        [0, "Visit the Wizard's Tower."],
        [0, "Visit the Mausoleum in Majesty's Rest."],
        [0, "Visit Anvil Rock."],
        [0, "Visit the Falls in the Maguuma Jungle."],
        [0, "Visit the ancient temple of Lyssa in Mineral Springs."],
        [0, "Visit the ruined statues of the Arid Sea."],
        [0, "See Festival Coordinator Teron for your reward."]
      ],
      "wiki": {"en": "Wayfarer's Reverie: Tyria", "de": "Erinnerung des Reisenden: Tyria"}
    },
    "101381": {
      "name": "What Lies Beneath",
      "type": "primary",
      "givers": [441],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "objectives": [
        [0, "Investigate the earthquake aftermath in North Kryta Province."],
        [0, "Enter the crevasse."],
        [0, "Investigate the Depths beneath North Kryta Province."]
      ],
      "wiki": {"en": "What Lies Beneath", "de": "Die Tiefen"}
    },
    "101382": {
      "name": "White Mantle Wrath: A Helping Hand",
      "type": "primary",
      "givers": [360],
      "xp": 500,
      "requires": [101383],
      "next": [101337],
      "objectives": [
        [0, "Speak with Ventari"],
        [0, "Defeat the forces surrounding Ventari's Refuge."],
        [0, "Return to Councilor Vaylor for your reward."]
      ],
      "rewards": ["Inscribed Chakram"],
      "wiki": {"en": "White Mantle Wrath: A Helping Hand", "de": "Der Zorn des Weißen Mantels: Unterstützung"}
    },
    "101383": {
      "name": "White Mantle Wrath: Demagogue's Vanguard",
      "type": "primary",
      "givers": [361],
      "xp": 500,
      "requires_missions": [10],
      "next": [101382],
      "objectives": [
        [0, "Destroy the three groups of White Mantle vanguard marching to Quarrel Falls."],
        [0, "See Councilor Vaylor for your reward."]
      ],
      "rewards": ["Cane", "Chaos Dmg: 9-16 (Requires 5 Domination Magic)Health +10Health +10 (while Hexed)Health +10 (while Enchanted)"],
      "wiki": {
        "en": "White Mantle Wrath: Demagogue's Vanguard",
        "de": "Der Zorn des Weißen Mantels: die Vorhut des Demagogen"
      }
    },
    "101384": {
      "name": "Wisdom of the Druids",
      "type": "secondary",
      "givers": [782],
      "xp": 500,
      "objectives": [
        [0, "Travel through the Sage Lands and await the druids at the base of the waterfall."]
      ],
      "wiki": {"en": "Wisdom of the Druids", "de": "Weisheit der Druiden"}
    },
    "101385": {
      "name": "Wrenches In The Gears",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "objectives": [
        [0, "Place the toothed cog in The Cruncher's cog mouth. It is the only place a master gear won't fit."],
        [0, "Eliminate the [5...0] remaining rebel spirit keepers."],
        [0, "See Krak Flamewhip for your reward."]
      ],
      "wiki": {"en": "Wrenches In The Gears", "de": "Sand im Getriebe"}
    },
    "101386": {
      "name": "You're a Mean One, Mr. Grenth",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "objectives": [
        [0, "Speak to the Rift Warden when you are ready to enter the Underworld."],
        [0, "Recover all the stolen presents. [0...5] of 5 gift bundles recovered."],
        [0, "See Rift Warden for your reward."],
        [0, "*BONUS*: Survive for as long as possible."]
      ],
      "wiki": {"en": "You're a Mean One, Mr. Grenth", "de": "Ihr seid gemein, Herr Grenth"}
    }
  },
  "storylines_": "Each campaign's story flow: nodes ({mission} or {quest}, with the English wiki's rank; kind \"attribute\" for an attribute quest) and edges [from, to, inferred?]. Eye of the North instead has parts, one per storyline, of steps in rows.",
  "storylines": [
    {
      "campaign": 1,
      "nodes": [
        {"mission": 123, "rank": 45},
        {"mission": 12, "rank": 31},
        {"mission": 10, "rank": 28},
        {"mission": 25, "rank": 17},
        {"mission": 15, "rank": 24},
        {"mission": 21, "rank": 18},
        {"mission": 28, "rank": 11},
        {"mission": 120, "rank": 38},
        {"mission": 11, "rank": 27},
        {"mission": 117, "rank": 36},
        {"mission": 116, "rank": 36},
        {"mission": 24, "rank": 41},
        {"mission": 22, "rank": 40},
        {"mission": 118, "rank": 36},
        {"mission": 38, "rank": 37},
        {"mission": 23, "rank": 42},
        {"mission": 122, "rank": 44},
        {"mission": 73, "rank": 33},
        {"mission": 29, "rank": 12},
        {"mission": 16, "rank": 25},
        {"mission": 32, "rank": 15},
        {"mission": 19, "rank": 34},
        {"mission": 30, "rank": 14},
        {"mission": 14, "rank": 22},
        {"mission": 124, "rank": 46},
        {"quest": 101335, "rank": 4},
        {"quest": 101318, "rank": 16},
        {"quest": 101287, "rank": 6},
        {"quest": 101382, "rank": 30},
        {"quest": 101383, "rank": 29},
        {"quest": 101275, "rank": 8},
        {"quest": 101160, "rank": 43},
        {"quest": 101270, "rank": 38, "kind": "attribute"},
        {"quest": 101378, "rank": 2},
        {"quest": 101229, "rank": 39},
        {"quest": 101266, "rank": 36, "kind": "attribute"},
        {"quest": 101083, "rank": 26},
        {"quest": 101337, "rank": 30},
        {"quest": 101208, "rank": 32},
        {"quest": 101114, "rank": 7},
        {"quest": 101104, "rank": 5},
        {"quest": 101150, "rank": 2},
        {"quest": 101219, "rank": 23},
        {"quest": 101377, "rank": 1},
        {"quest": 101190, "rank": 2},
        {"quest": 101197, "rank": 2},
        {"quest": 101327, "rank": 20},
        {"quest": 101325, "rank": 21},
        {"quest": 101326, "rank": 19},
        {"quest": 101329, "rank": 9},
        {"quest": 101192, "rank": 0},
        {"quest": 101200, "rank": 2},
        {"quest": 101224, "rank": 13},
        {"quest": 101225, "rank": 35},
        {"quest": 101164, "rank": 37, "kind": "attribute"},
        {"quest": 101141, "rank": 10},
        {"quest": 101213, "rank": 2},
        {"quest": 101166, "rank": 3}
      ],
      "edges": [
        [{"mission": 123}, {"mission": 124}],
        [{"mission": 12}, {"quest": 101208}],
        [{"mission": 10}, {"quest": 101383}],
        [{"mission": 25}, {"mission": 21}],
        [{"mission": 15}, {"mission": 16}],
        [{"mission": 21}, {"quest": 101326}],
        [{"mission": 28}, {"mission": 29}],
        [{"mission": 120}, {"quest": 101229}],
        [{"mission": 11}, {"mission": 10}],
        [{"mission": 117}, {"mission": 38}],
        [{"mission": 116}, {"mission": 38}],
        [{"mission": 24}, {"mission": 23}],
        [{"mission": 22}, {"mission": 24}],
        [{"mission": 118}, {"mission": 38}],
        [{"mission": 38}, {"mission": 120}],
        [{"mission": 38}, {"quest": 101270}],
        [{"mission": 23}, {"quest": 101160}],
        [{"mission": 122}, {"mission": 123}],
        [{"mission": 73}, {"mission": 19}],
        [{"mission": 29}, {"quest": 101224}],
        [{"mission": 16}, {"quest": 101083}],
        [{"mission": 32}, {"quest": 101318}],
        [{"mission": 19}, {"quest": 101225}],
        [{"mission": 30}, {"mission": 32}],
        [{"mission": 14}, {"quest": 101219}],
        [{"quest": 101335}, {"quest": 101104}],
        [{"quest": 101318}, {"mission": 25}],
        [{"quest": 101287}, {"quest": 101114}],
        [{"quest": 101383}, {"quest": 101382}],
        [{"quest": 101383}, {"quest": 101337}],
        [{"quest": 101275}, {"quest": 101329}],
        [{"quest": 101160}, {"mission": 122}],
        [{"quest": 101378}, {"quest": 101166}],
        [{"quest": 101229}, {"mission": 22}],
        [{"quest": 101266}, {"quest": 101164}],
        [{"quest": 101083}, {"mission": 11}],
        [{"quest": 101337}, {"mission": 12}],
        [{"quest": 101208}, {"mission": 73}],
        [{"quest": 101114}, {"quest": 101275}],
        [{"quest": 101104}, {"quest": 101287}],
        [{"quest": 101150}, {"quest": 101166}],
        [{"quest": 101219}, {"mission": 15}],
        [{"quest": 101377}, {"quest": 101378}],
        [{"quest": 101377}, {"quest": 101150}],
        [{"quest": 101377}, {"quest": 101190}],
        [{"quest": 101377}, {"quest": 101197}],
        [{"quest": 101377}, {"quest": 101200}],
        [{"quest": 101377}, {"quest": 101213}],
        [{"quest": 101190}, {"quest": 101166}],
        [{"quest": 101197}, {"quest": 101166}],
        [{"quest": 101327}, {"quest": 101325}],
        [{"quest": 101325}, {"mission": 14}],
        [{"quest": 101326}, {"quest": 101327}],
        [{"quest": 101329}, {"quest": 101141}],
        [{"quest": 101192}, {"quest": 101377}],
        [{"quest": 101200}, {"quest": 101166}],
        [{"quest": 101224}, {"mission": 30}],
        [{"quest": 101225}, {"mission": 117}],
        [{"quest": 101225}, {"mission": 116}],
        [{"quest": 101225}, {"mission": 118}],
        [{"quest": 101225}, {"quest": 101266}],
        [{"quest": 101141}, {"mission": 28}],
        [{"quest": 101213}, {"quest": 101166}],
        [{"quest": 101166}, {"quest": 101335}]
      ]
    },
    {
      "campaign": 2,
      "nodes": [
        {"mission": 262, "rank": 28},
        {"mission": 263, "rank": 30},
        {"mission": 267, "rank": 37},
        {"mission": 268, "rank": 37},
        {"mission": 271, "rank": 42},
        {"mission": 257, "rank": 9},
        {"mission": 260, "rank": 23},
        {"mission": 270, "rank": 41},
        {"mission": 264, "rank": 33},
        {"mission": 261, "rank": 25},
        {"mission": 204, "rank": 39},
        {"mission": 215, "rank": 20},
        {"mission": 258, "rank": 17},
        {"quest": 100509, "rank": 31},
        {"quest": 100668, "rank": 5},
        {"quest": 100604, "rank": 14},
        {"quest": 100610, "rank": 19},
        {"quest": 100526, "rank": 3},
        {"quest": 100745, "rank": 11},
        {"quest": 100468, "rank": 18},
        {"quest": 100711, "rank": 5},
        {"quest": 100747, "rank": 5},
        {"quest": 100642, "rank": 5},
        {"quest": 100777, "rank": 10},
        {"quest": 100710, "rank": 27},
        {"quest": 100709, "rank": 29},
        {"quest": 100712, "rank": 36},
        {"quest": 100737, "rank": 13},
        {"quest": 100546, "rank": 5},
        {"quest": 100679, "rank": 5},
        {"quest": 100678, "rank": 3},
        {"quest": 100469, "rank": 26},
        {"quest": 100485, "rank": 18, "kind": "attribute"},
        {"quest": 100476, "rank": 6},
        {"quest": 100466, "rank": 8},
        {"quest": 100628, "rank": 3},
        {"quest": 100756, "rank": 4},
        {"quest": 100559, "rank": 21},
        {"quest": 100565, "rank": 3},
        {"quest": 100495, "rank": 35},
        {"quest": 100496, "rank": 35},
        {"quest": 100672, "rank": 5},
        {"quest": 100691, "rank": 36},
        {"quest": 100580, "rank": 38},
        {"quest": 100593, "rank": 3},
        {"quest": 100595, "rank": 5},
        {"quest": 100596, "rank": 2},
        {"quest": 100597, "rank": 2},
        {"quest": 100598, "rank": 2},
        {"quest": 100599, "rank": 2},
        {"quest": 100600, "rank": 2},
        {"quest": 100601, "rank": 2},
        {"quest": 100602, "rank": 2},
        {"quest": 100608, "rank": 0},
        {"quest": 100752, "rank": 16},
        {"quest": 100534, "rank": 22},
        {"quest": 100584, "rank": 34},
        {"quest": 100585, "rank": 34},
        {"quest": 100586, "rank": 12},
        {"quest": 100587, "rank": 38},
        {"quest": 100689, "rank": 3},
        {"quest": 100494, "rank": 32},
        {"quest": 100758, "rank": 4},
        {"quest": 100759, "rank": 4},
        {"quest": 100762, "rank": 4},
        {"quest": 100659, "rank": 1},
        {"quest": 100660, "rank": 1},
        {"quest": 100664, "rank": 1},
        {"quest": 100665, "rank": 1},
        {"quest": 100658, "rank": 1},
        {"quest": 100661, "rank": 1},
        {"quest": 100662, "rank": 1},
        {"quest": 100663, "rank": 1},
        {"quest": 100603, "rank": 2},
        {"quest": 100757, "rank": 4},
        {"quest": 100760, "rank": 4},
        {"quest": 100761, "rank": 4},
        {"quest": 100763, "rank": 4},
        {"quest": 100698, "rank": 3},
        {"quest": 100605, "rank": 10, "kind": "attribute"},
        {"quest": 100697, "rank": 40},
        {"quest": 100617, "rank": 3},
        {"quest": 100780, "rank": 18},
        {"quest": 100508, "rank": 7},
        {"quest": 100753, "rank": 15},
        {"quest": 100751, "rank": 24}
      ],
      "edges": [
        [{"mission": 262}, {"quest": 100709}],
        [{"mission": 263}, {"quest": 100509}],
        [{"mission": 267}, {"quest": 100580}],
        [{"mission": 268}, {"quest": 100587}],
        [{"mission": 257}, {"quest": 100777}],
        [{"mission": 257}, {"quest": 100605}],
        [{"mission": 260}, {"quest": 100751}],
        [{"mission": 270}, {"mission": 271}],
        [{"mission": 264}, {"quest": 100584}],
        [{"mission": 264}, {"quest": 100585}],
        [{"mission": 261}, {"quest": 100469}],
        [{"mission": 204}, {"mission": 270}],
        [{"mission": 204}, {"quest": 100697}],
        [{"mission": 215}, {"quest": 100559}],
        [{"mission": 258}, {"quest": 100468}],
        [{"mission": 258}, {"quest": 100485}],
        [{"quest": 100509}, {"quest": 100494}],
        [{"quest": 100668}, {"quest": 100476}],
        [{"quest": 100604}, {"quest": 100753}],
        [{"quest": 100610}, {"mission": 215}],
        [{"quest": 100526}, {"quest": 100759}],
        [{"quest": 100745}, {"quest": 100586}],
        [{"quest": 100468}, {"quest": 100610}],
        [{"quest": 100711}, {"quest": 100476}],
        [{"quest": 100747}, {"quest": 100476}],
        [{"quest": 100642}, {"quest": 100476}],
        [{"quest": 100777}, {"quest": 100745}],
        [{"quest": 100710}, {"mission": 262}],
        [{"quest": 100709}, {"mission": 263}],
        [{"quest": 100712}, {"mission": 267}],
        [{"quest": 100737}, {"quest": 100604}],
        [{"quest": 100546}, {"quest": 100476}],
        [{"quest": 100679}, {"quest": 100476}],
        [{"quest": 100678}, {"quest": 100758}],
        [{"quest": 100469}, {"quest": 100710}],
        [{"quest": 100476}, {"quest": 100508}],
        [{"quest": 100466}, {"mission": 257}],
        [{"quest": 100628}, {"quest": 100760}],
        [{"quest": 100756}, {"quest": 100672}],
        [{"quest": 100559}, {"quest": 100534}],
        [{"quest": 100565}, {"quest": 100763}],
        [{"quest": 100495}, {"quest": 100712}],
        [{"quest": 100496}, {"quest": 100691}],
        [{"quest": 100672}, {"quest": 100476}],
        [{"quest": 100691}, {"mission": 268}],
        [{"quest": 100580}, {"mission": 204}],
        [{"quest": 100593}, {"quest": 100761}],
        [{"quest": 100595}, {"quest": 100476}],
        [{"quest": 100596}, {"quest": 100628}],
        [{"quest": 100597}, {"quest": 100526}],
        [{"quest": 100598}, {"quest": 100617}],
        [{"quest": 100599}, {"quest": 100593}],
        [{"quest": 100600}, {"quest": 100678}],
        [{"quest": 100601}, {"quest": 100689}],
        [{"quest": 100602}, {"quest": 100565}],
        [{"quest": 100608}, {"quest": 100659}],
        [{"quest": 100608}, {"quest": 100660}],
        [{"quest": 100608}, {"quest": 100664}],
        [{"quest": 100608}, {"quest": 100665}],
        [{"quest": 100608}, {"quest": 100658}],
        [{"quest": 100608}, {"quest": 100661}],
        [{"quest": 100608}, {"quest": 100662}],
        [{"quest": 100608}, {"quest": 100663}],
        [{"quest": 100752}, {"mission": 258}],
        [{"quest": 100534}, {"mission": 260}],
        [{"quest": 100584}, {"quest": 100496}],
        [{"quest": 100585}, {"quest": 100495}],
        [{"quest": 100586}, {"quest": 100737}],
        [{"quest": 100587}, {"mission": 204}],
        [{"quest": 100689}, {"quest": 100757}],
        [{"quest": 100494}, {"mission": 264}],
        [{"quest": 100758}, {"quest": 100679}],
        [{"quest": 100759}, {"quest": 100595}],
        [{"quest": 100762}, {"quest": 100711}],
        [{"quest": 100659}, {"quest": 100602}],
        [{"quest": 100660}, {"quest": 100597}],
        [{"quest": 100664}, {"quest": 100600}],
        [{"quest": 100665}, {"quest": 100603}],
        [{"quest": 100658}, {"quest": 100601}],
        [{"quest": 100661}, {"quest": 100599}],
        [{"quest": 100662}, {"quest": 100596}],
        [{"quest": 100663}, {"quest": 100598}],
        [{"quest": 100603}, {"quest": 100698}],
        [{"quest": 100757}, {"quest": 100668}],
        [{"quest": 100760}, {"quest": 100546}],
        [{"quest": 100761}, {"quest": 100642}],
        [{"quest": 100763}, {"quest": 100747}],
        [{"quest": 100698}, {"quest": 100762}],
        [{"quest": 100697}, {"mission": 270}],
        [{"quest": 100617}, {"quest": 100756}],
        [{"quest": 100780}, {"quest": 100610}],
        [{"quest": 100508}, {"quest": 100466}],
        [{"quest": 100753}, {"quest": 100752}],
        [{"quest": 100751}, {"mission": 261}]
      ]
    },
    {
      "campaign": 3,
      "nodes": [
        {"mission": 528, "rank": 56},
        {"mission": 515, "rank": 10},
        {"mission": 519, "rank": 40},
        {"mission": 556, "rank": 2},
        {"mission": 521, "rank": 42},
        {"mission": 522, "rank": 45},
        {"mission": 458, "rank": 29},
        {"mission": 517, "rank": 21},
        {"mission": 427, "rank": 34},
        {"mission": 523, "rank": 45},
        {"mission": 518, "rank": 36},
        {"mission": 460, "rank": 33},
        {"mission": 459, "rank": 33},
        {"mission": 525, "rank": 50},
        {"mission": 516, "rank": 16},
        {"mission": 526, "rank": 52},
        {"mission": 527, "rank": 55},
        {"mission": 453, "rank": 25},
        {"mission": 520, "rank": 40},
        {"mission": 524, "rank": 47},
        {"quest": 100820, "rank": 54},
        {"quest": 100828, "rank": 43},
        {"quest": 101054, "rank": 27},
        {"quest": 100998, "rank": 13},
        {"quest": 100993, "rank": 18},
        {"quest": 101015, "rank": 26},
        {"quest": 100965, "rank": 41},
        {"quest": 101007, "rank": 1},
        {"quest": 100928, "rank": 11},
        {"quest": 100984, "rank": 4, "kind": "attribute", "note": "needs Sunspear rank"},
        {"quest": 100985, "rank": 3, "kind": "attribute", "note": "needs Sunspear rank"},
        {"quest": 100977, "rank": 0},
        {"quest": 100830, "rank": 12},
        {"quest": 101028, "rank": 17},
        {"quest": 100918, "rank": 49},
        {"quest": 100857, "rank": 46},
        {"quest": 101027, "rank": 8},
        {"quest": 100800, "rank": 19},
        {"quest": 100888, "rank": 15},
        {"quest": 100822, "rank": 37},
        {"quest": 101059, "rank": 18},
        {"quest": 100890, "rank": 31},
        {"quest": 100992, "rank": 31},
        {"quest": 100920, "rank": 22},
        {"quest": 100789, "rank": 48},
        {"quest": 101022, "rank": 23},
        {"quest": 100908, "rank": 39},
        {"quest": 100911, "rank": 44},
        {"quest": 100912, "rank": 44},
        {"quest": 100845, "rank": 39},
        {"quest": 100831, "rank": 17},
        {"quest": 101071, "rank": 38},
        {"quest": 100931, "rank": 53},
        {"quest": 101068, "rank": 19},
        {"quest": 101069, "rank": 19},
        {"quest": 101070, "rank": 19},
        {"quest": 100935, "rank": 7},
        {"quest": 100925, "rank": 1},
        {"quest": 100824, "rank": 24},
        {"quest": 100917, "rank": 4},
        {"quest": 100953, "rank": 32},
        {"quest": 100967, "rank": 3},
        {"quest": 100950, "rank": 30},
        {"quest": 100976, "rank": 35},
        {"quest": 100990, "rank": 5},
        {"quest": 100834, "rank": 14},
        {"quest": 101061, "rank": 51},
        {"quest": 101052, "rank": 32},
        {"quest": 100848, "rank": 28},
        {"quest": 100851, "rank": 6},
        {"quest": 100995, "rank": 9},
        {"quest": 101042, "rank": 20}
      ],
      "edges": [
        [{"mission": 515}, {"quest": 100928}],
        [{"mission": 519}, {"quest": 100965}],
        [{"mission": 556}, {"quest": 100985}],
        [{"mission": 556}, {"quest": 100967}],
        [{"mission": 521}, {"quest": 100828}],
        [{"mission": 522}, {"quest": 100857}],
        [{"mission": 458}, {"quest": 100950}],
        [{"mission": 517}, {"quest": 100920}],
        [{"mission": 427}, {"quest": 100976}],
        [{"mission": 523}, {"quest": 100857}],
        [{"mission": 518}, {"quest": 100822}],
        [{"mission": 460}, {"mission": 427}],
        [{"mission": 459}, {"mission": 427}],
        [{"mission": 525}, {"quest": 101061}],
        [{"mission": 516}, {"quest": 101028}],
        [{"mission": 526}, {"quest": 100931}],
        [{"mission": 527}, {"mission": 528}],
        [{"mission": 453}, {"quest": 101015}],
        [{"mission": 520}, {"quest": 100965}],
        [{"mission": 524}, {"quest": 100789}],
        [{"quest": 100820}, {"mission": 527}],
        [{"quest": 100828}, {"quest": 100911}],
        [{"quest": 100828}, {"quest": 100912}],
        [{"quest": 101054}, {"quest": 100848}],
        [{"quest": 100998}, {"quest": 100834}],
        [{"quest": 100993}, {"quest": 100800}],
        [{"quest": 101015}, {"quest": 101054}],
        [{"quest": 100965}, {"mission": 521}],
        [{"quest": 101007}, {"mission": 556}],
        [{"quest": 100928}, {"quest": 100830}],
        [{"quest": 100985}, {"quest": 100984}],
        [{"quest": 100977}, {"quest": 100925}],
        [{"quest": 100830}, {"quest": 100998}],
        [{"quest": 101028}, {"quest": 101059}],
        [{"quest": 100918}, {"mission": 525}],
        [{"quest": 100857}, {"mission": 524}],
        [{"quest": 101027}, {"quest": 100995}],
        [{"quest": 100800}, {"quest": 101042}],
        [{"quest": 100888}, {"mission": 516}],
        [{"quest": 100822}, {"quest": 101071}],
        [{"quest": 101059}, {"quest": 101068}],
        [{"quest": 101059}, {"quest": 101069}],
        [{"quest": 101059}, {"quest": 101070}],
        [{"quest": 100890}, {"quest": 100953}],
        [{"quest": 100992}, {"quest": 101052}],
        [{"quest": 100920}, {"quest": 101022}],
        [{"quest": 100789}, {"quest": 100918}],
        [{"quest": 101022}, {"quest": 100824}],
        [{"quest": 100908}, {"mission": 520}],
        [{"quest": 100911}, {"mission": 522}],
        [{"quest": 100912}, {"mission": 523}],
        [{"quest": 100845}, {"mission": 519}],
        [{"quest": 100831}, {"quest": 100993}],
        [{"quest": 101071}, {"quest": 100908}],
        [{"quest": 101071}, {"quest": 100845}],
        [{"quest": 100931}, {"quest": 100820}],
        [{"quest": 101068}, {"quest": 101042}],
        [{"quest": 101069}, {"quest": 101042}],
        [{"quest": 101070}, {"quest": 101042}],
        [{"quest": 100935}, {"quest": 101027}],
        [{"quest": 100925}, {"mission": 556}],
        [{"quest": 100824}, {"mission": 453}],
        [{"quest": 100917}, {"quest": 100990}],
        [{"quest": 100953}, {"mission": 460}],
        [{"quest": 100967}, {"quest": 100917}],
        [{"quest": 100950}, {"quest": 100890}],
        [{"quest": 100950}, {"quest": 100992}],
        [{"quest": 100976}, {"mission": 518}],
        [{"quest": 100990}, {"quest": 100851}],
        [{"quest": 100834}, {"quest": 100888}],
        [{"quest": 101061}, {"mission": 526}],
        [{"quest": 101052}, {"mission": 459}],
        [{"quest": 100848}, {"mission": 458}],
        [{"quest": 100851}, {"quest": 100935}],
        [{"quest": 100995}, {"mission": 515}],
        [{"quest": 101042}, {"mission": 517}]
      ]
    },
    {
      "campaign": 4,
      "parts": [
        {
          "part": "Start",
          "steps": [
            {"quest": 101381, "row": 4},
            {"quest": 100573, "row": 4},
            {"quest": 100916, "row": 4},
            {"quest": 100424, "row": 6},
            {"quest": 100340, "row": 8}
          ]
        },
        {
          "part": "Asura",
          "steps": [
            {"quest": 100441, "row": 10},
            {"quest": 100361, "row": 11},
            {"quest": 100380, "row": 11},
            {"mission": 661, "row": 13},
            {"mission": 658, "row": 13},
            {"quest": 100337, "row": 15},
            {"mission": 664, "row": 17}
          ]
        },
        {
          "part": "Ebon Vanguard",
          "steps": [
            {"quest": 100443, "row": 18},
            {"quest": 100409, "row": 19},
            {"mission": 665, "row": 21},
            {"quest": 100433, "row": 23},
            {"mission": 666, "row": 25},
            {"quest": 100458, "row": 27},
            {"mission": 669, "row": 29}
          ]
        },
        {
          "part": "Norn",
          "steps": [
            {"quest": 100389, "row": 30},
            {"quest": 100450, "row": 31},
            {"mission": 653, "row": 33},
            {"quest": 100364, "row": 35},
            {"quest": 100454, "row": 35},
            {"mission": 654, "row": 37},
            {"mission": 655, "row": 37}
          ]
        },
        {
          "part": "All together",
          "steps": [{"quest": 100372, "row": 40}, {"mission": 670, "row": 42}, {"mission": 673, "row": 44}]
        }
      ]
    }
  ]
};
