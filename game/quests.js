const GW_QUESTS = {
  "quests_": "Kept by hand. Keys are game quest ids; 100000 and up are ours until the game's is known. givers: npcs, one per place it is given (their location and region come from there); campaign and region only when there is no giver. travel: the campaign it takes you to. event: the yearly event (calendar.js) it belongs to. requires, next: quests; requires_missions, next_missions: missions; requires_other: requirements that aren't quests. missions: missions it belongs to. skills: skill ids. wiki: its page on each wiki, {en, de} (as locations).",
  "quests": {
    "917": {
      "name": "The Last Hierophant",
      "type": "secondary",
      "campaign": 4,
      "region": 18,
      "xp": 15000,
      "gold": 2750,
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
      "wiki": {"en": "Reunion", "de": "Wiedervereinigung"}
    },
    "100001": {
      "name": "The Necromancer's Novice",
      "type": "secondary",
      "givers": [331],
      "xp": 250,
      "skills": [83, 105, 109],
      "wiki": {"en": "The Necromancer's Novice", "de": "Der Nekromantennovize"}
    },
    "100002": {
      "name": "A Gate Too Far/Zaishen Quest",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Norn reputation points"],
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
      "wiki": {"en": "A Time for Heroes (Zaishen quest)", "de": "Eine Zeit für Helden (Zaishen-Mission)"}
    },
    "100005": {
      "name": "Abaddon's Gate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Abaddon's Gate (Zaishen quest)", "de": "Abaddons Tor (Zaishen-Mission)"}
    },
    "100006": {
      "name": "Abaddon's Mouth (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Abaddon's Mouth (Zaishen quest)", "de": "Abaddons Maul (Zaishen-Mission)"}
    },
    "100007": {
      "name": "Admiral Kantoh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Admiral Kantoh (Zaishen quest)", "de": "Admiral Kantoh (Zaishen-Kopfgeld)"}
    },
    "100008": {
      "name": "Against the Charr (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "wiki": {"en": "Against the Charr (Zaishen quest)", "de": "Gegen die Charr (Zaishen-Mission)"}
    },
    "100009": {
      "name": "Alcazia Tangle (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": {"en": "Alcazia Tangle (Zaishen vanquish)", "de": "Alcazia-Dickicht (Zaishen-Bezwingung)"}
    },
    "100010": {
      "name": "Alliance Battles (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["7,500 Imperial faction"],
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
      "wiki": {"en": "Annihilator 2: Searing Day", "de": "Vernichter 2: Tag des Großen Feuers"}
    },
    "100013": {
      "name": "Anvil Rock (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Anvil Rock (Zaishen vanquish)", "de": "Ambossstein (Zaishen-Bezwingung)"}
    },
    "100014": {
      "name": "Arachni (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": {"en": "Arachni (Zaishen quest)", "de": "Arachni (Zaishen-Kopfgeld)"}
    },
    "100015": {
      "name": "Arbor Bay (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": {"en": "Arbor Bay (Zaishen vanquish)", "de": "Arborbucht (Zaishen-Bezwingung)"}
    },
    "100016": {
      "name": "Arbor Earthcall (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction"],
      "wiki": {"en": "Arbor Earthcall (Zaishen quest)", "de": "Arbor Erdruf (Zaishen-Kopfgeld)"}
    },
    "100017": {
      "name": "Arborstone (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction"],
      "wiki": {"en": "Arborstone (Zaishen quest)", "de": "Arborstein (Zaishen-Mission)"}
    },
    "100018": {
      "name": "Arborstone (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": {"en": "Arborstone (Zaishen vanquish)", "de": "Arborstein (Zaishen-Bezwingung)"}
    },
    "100019": {
      "name": "Archipelagos (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": {"en": "Archipelagos (Zaishen vanquish)", "de": "Archipel (Zaishen-Bezwingung)"}
    },
    "100020": {
      "name": "Arkjok Ward (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
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
      "wiki": {"en": "Ascalon Foothills (Zaishen vanquish)", "de": "Ascalon-Vorgebirge (Zaishen-Bezwingung)"}
    },
    "100023": {
      "name": "Assault on the Stronghold (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
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
      "wiki": {"en": "Augury Rock (Zaishen quest)", "de": "Fels der Weissagung (Zaishen-Mission)"}
    },
    "100025": {
      "name": "Aurora Glade (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Aurora Glade (Zaishen quest)", "de": "Auroralichtung (Zaishen-Mission)"}
    },
    "100026": {
      "name": "Bahdok Caverns (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Bahdok Caverns (Zaishen vanquish)", "de": "Bahdok-Höhlen (Zaishen-Bezwingung)"}
    },
    "100027": {
      "name": "Barbarous Shore (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Barbarous Shore (Zaishen vanquish)", "de": "Barbarenküste (Zaishen-Bezwingung)"}
    },
    "100028": {
      "name": "BauBao Wavewrath (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": {"en": "Baubao Wavewrath (Zaishen quest)", "de": "Baubao Wellenzorn (Zaishen-Kopfgeld)"}
    },
    "100029": {
      "name": "Bjora Marches (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "wiki": {"en": "Bjora Marches (Zaishen vanquish)", "de": "Bjora-Sümpfe (Zaishen-Bezwingung)"}
    },
    "100030": {
      "name": "Blacktide Den (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Blacktide Den (Zaishen quest)", "de": "Schwarzwasserloch (Zaishen-Mission)"}
    },
    "100031": {
      "name": "Blood Washes Blood (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Norn reputation points"],
      "wiki": {"en": "Blood Washes Blood (Zaishen quest)", "de": "Blut wäscht Blut (Zaishen-Mission)"}
    },
    "100032": {
      "name": "Bloodstone Fen (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Bloodstone Fen (Zaishen quest)", "de": "Blutsteinsumpf (Zaishen-Mission)"}
    },
    "100033": {
      "name": "Boreas Seabed (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Luxon faction"],
      "wiki": {"en": "Boreas Seabed (Zaishen quest)", "de": "Boreas-Meeresgrund (Zaishen-Mission)"}
    },
    "100034": {
      "name": "Boreas Seabed (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": {"en": "Boreas Seabed (Zaishen vanquish)", "de": "Boreas-Meeresgrund (Zaishen-Bezwingung)"}
    },
    "100035": {
      "name": "Borlis Pass (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Borlis Pass (Zaishen quest)", "de": "Borlispass (Zaishen-Mission)"}
    },
    "100036": {
      "name": "Borrguus Blisterbark (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "wiki": {"en": "Borrguus Blisterbark (Zaishen quest)", "de": "Borrguus Raurinde (Zaishen-Kopfgeld)"}
    },
    "100037": {
      "name": "Bukdek Byway (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Bukdek Byway (Zaishen vanquish)", "de": "Bukdek-Seitenweg (Zaishen-Bezwingung)"}
    },
    "100038": {
      "name": "Chahbek Village (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Chahbek Village (Zaishen quest)", "de": "Chahbek (Zaishen-Mission)"}
    },
    "100039": {
      "name": "Charged Blackness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Charged Blackness (Zaishen quest)", "de": "Geladene Schwärze (Zaishen-Kopfgeld)"}
    },
    "100040": {
      "name": "Chung, the Attuned (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
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
      "wiki": {"en": "Cliffs of Dohjok (Zaishen vanquish)", "de": "Felsen von Dohjok (Zaishen-Bezwingung)"}
    },
    "100043": {
      "name": "Codex Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "wiki": {"en": "Codex Arena (Zaishen quest)", "de": "Kodex-Arena (Zaishen-Kampf)"}
    },
    "100044": {
      "name": "Commander Wahli (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Commander Wahli (Zaishen quest)", "de": "Kommandeur Wahli (Zaishen-Kopfgeld)"}
    },
    "100045": {
      "name": "Consulate Docks (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Consulate Docks (Zaishen quest)", "de": "Konsulatshafen (Zaishen-Mission)"}
    },
    "100046": {
      "name": "Crystal Overlook (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": {"en": "Crystal Overlook (Zaishen vanquish)", "de": "Kristallspitze (Zaishen-Bezwingung)"}
    },
    "100047": {
      "name": "Curse of the Nornbear (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Norn reputation points"],
      "wiki": {"en": "Curse of the Nornbear (Zaishen quest)", "de": "Der Fluch des Nornbären (Zaishen-Mission)"}
    },
    "100048": {
      "name": "Cursed Lands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Cursed Lands (Zaishen vanquish)", "de": "Verfluchtes Land (Zaishen-Bezwingung)"}
    },
    "100049": {
      "name": "D'Alessio Seaboard (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "D'Alessio Seaboard (Zaishen quest)", "de": "D'Alessio-Küste (Zaishen-Mission)"}
    },
    "100050": {
      "name": "Dalada Uplands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Ebon Vanguard reputation points"],
      "wiki": {"en": "Dalada Uplands (Zaishen vanquish)", "de": "Dalada-Hochlande (Zaishen-Bezwingung)"}
    },
    "100051": {
      "name": "Dasha Vestibule (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "wiki": {"en": "Dasha Vestibule (Zaishen quest)", "de": "Vorhof von Dasha (Zaishen-Mission)"}
    },
    "100052": {
      "name": "Deactivating N.O.X.",
      "type": "secondary",
      "givers": [668],
      "wiki": {"en": "Deactivating N.O.X.", "de": "N.O.X. deaktivieren"}
    },
    "100053": {
      "name": "Deactivating P.O.X.",
      "type": "secondary",
      "givers": [668],
      "wiki": {"en": "Deactivating P.O.X.", "de": "P.O.X. deaktivieren"}
    },
    "100054": {
      "name": "Deactivating R.O.X.",
      "type": "secondary",
      "givers": [668],
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
      "wiki": {"en": "Dejarin Estate (Zaishen vanquish)", "de": "Dejarin-Anwesen (Zaishen-Bezwingung)"}
    },
    "100057": {
      "name": "Deldrimor Bowl (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
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
      "wiki": {"en": "Destruction's Depths (Zaishen quest)", "de": "Die Tiefen der Zerstörung (Zaishen-Mission)"}
    },
    "100060": {
      "name": "Diessa Lowlands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Diessa Lowlands (Zaishen vanquish)", "de": "Tiefland von Diessa (Zaishen-Bezwingung)"}
    },
    "100061": {
      "name": "Diviner's Ascent (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Diviner's Ascent (Zaishen vanquish)", "de": "Wahrsagerhöhe (Zaishen-Bezwingung)"}
    },
    "100062": {
      "name": "Divinity Coast (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Divinity Coast (Zaishen quest)", "de": "Küste der Göttlichkeit (Zaishen-Mission)"}
    },
    "100063": {
      "name": "Dragon Lich (Zaishen quest)",
      "type": "secondary",
      "campaign": 0,
      "region": 21,
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Dragon Lich (Zaishen quest)", "de": "Drachen-Lich (Zaishen-Kopfgeld)"}
    },
    "100064": {
      "name": "Dragon's Gullet (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Dragon's Gullet (Zaishen vanquish)", "de": "Drachenschlund (Zaishen-Bezwingung)"}
    },
    "100065": {
      "name": "Drakkar Lake (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "wiki": {"en": "Drakkar Lake (Zaishen vanquish)", "de": "Drakkar-See (Zaishen-Bezwingung)"}
    },
    "100066": {
      "name": "Drazach Thicket (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": {"en": "Drazach Thicket (Zaishen vanquish)", "de": "Drazachdickicht (Zaishen-Bezwingung)"}
    },
    "100067": {
      "name": "Dreadnought's Drift (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Dreadnought's Drift (Zaishen vanquish)", "de": "Schreckensdrift (Zaishen-Bezwingung)"}
    },
    "100068": {
      "name": "Droajam, Mage of the Sands (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Lightbringer points"],
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
      "wiki": {"en": "Dry Top (Zaishen vanquish)", "de": "Trockenkuppe (Zaishen-Bezwingung)"}
    },
    "100070": {
      "name": "Duncan the Black (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["3,750 Deldrimor reputation points"],
      "wiki": {"en": "Duncan the Black (Zaishen quest)", "de": "Duncan der Schwarze (Zaishen-Kopfgeld)"}
    },
    "100071": {
      "name": "Dunes of Despair (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Dunes of Despair (Zaishen quest)", "de": "Dünen der Verzweiflung (Zaishen-Mission)"}
    },
    "100072": {
      "name": "Dzagonur Bastion (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "wiki": {"en": "Dzagonur Bastion (Zaishen quest)", "de": "Bastion von Dzagonur (Zaishen-Mission)"}
    },
    "100073": {
      "name": "Eastern Frontier (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1000,
      "wiki": {"en": "Eastern Frontier (Zaishen vanquish)", "de": "Ostgrenze (Zaishen-Bezwingung)"}
    },
    "100074": {
      "name": "Eldritch Ettin (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Eldritch Ettin (Zaishen quest)", "de": "Eldritch-Ettin (Zaishen-Kopfgeld)"}
    },
    "100075": {
      "name": "Elona Reach (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
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
      "wiki": {"en": "Ettin's Back (Zaishen vanquish)", "de": "Ettinbuckel (Zaishen-Bezwingung)"}
    },
    "100078": {
      "name": "Fahranur, The First City (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
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
      "wiki": {"en": "Fendi Nin (Zaishen quest)", "de": "Fendi Nin (Zaishen-Kopfgeld)"}
    },
    "100080": {
      "name": "Fenrir (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Norn reputation points"],
      "wiki": {"en": "Fenrir (Zaishen quest)", "de": "Fenrir (Zaishen-Kopfgeld)"}
    },
    "100081": {
      "name": "Ferndale (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["10,000 Kurzick faction"],
      "wiki": {"en": "Ferndale (Zaishen vanquish)", "de": "Farntal (Zaishen-Bezwingung)"}
    },
    "100082": {
      "name": "Finding the Bloodstone (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Asura reputation points"],
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
      "wiki": {"en": "Flame Temple Corridor (Zaishen vanquish)", "de": "Flammentempel-Gang (Zaishen-Bezwingung)"}
    },
    "100084": {
      "name": "Forgewight (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Forgewight (Zaishen quest)", "de": "Schmiedewicht (Zaishen-Kopfgeld)"}
    },
    "100085": {
      "name": "Fort Aspenwood (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["5,000 Imperial faction"],
      "wiki": {"en": "Fort Aspenwood (Zaishen quest)", "de": "Fort Espenwald (Zaishen-Kampf)"}
    },
    "100086": {
      "name": "Fort Ranik (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Fort Ranik (Zaishen quest)", "de": "Fort Ranik (Zaishen-Mission)"}
    },
    "100087": {
      "name": "Forum Highlands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Sunspear Promotion Points"],
      "wiki": {"en": "Forum Highlands (Zaishen vanquish)", "de": "Forum-Hochland (Zaishen-Bezwingung)"}
    },
    "100088": {
      "name": "Fozzy Yeoryios (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "wiki": {"en": "Fozzy Yeoryios (Zaishen quest)", "de": "Fozzy Yeoryios (Zaishen-Kopfgeld)"}
    },
    "100089": {
      "name": "Fronis Irontoe (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Deldrimor reputation points"],
      "wiki": {"en": "Fronis Irontoe (Zaishen quest)", "de": "Fronis Eisenzehe (Zaishen-Kopfgeld)"}
    },
    "100090": {
      "name": "Frostmaw the Kinslayer (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
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
      "wiki": {"en": "Frozen Forest (Zaishen vanquish)", "de": "Frostwald (Zaishen-Bezwingung)"}
    },
    "100092": {
      "name": "G.O.L.E.M. (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": {"en": "G.O.L.E.M. (Zaishen quest)", "de": "G.O.L.E.M. (Zaishen-Mission)"}
    },
    "100093": {
      "name": "Gandara, the Moon Fortress (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
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
      "wiki": {"en": "Garden of Seborhin (Zaishen vanquish)", "de": "Garten von Seborhin (Zaishen-Bezwingung)"}
    },
    "100095": {
      "name": "Gate of Desolation (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Gate of Desolation (Zaishen quest)", "de": "Ödland-Tor (Zaishen-Mission)"}
    },
    "100096": {
      "name": "Gate of Madness (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Gate of Madness (Zaishen quest)", "de": "Tor des Wahnsinns (Zaishen-Mission)"}
    },
    "100097": {
      "name": "Gate of Pain (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Gate of Pain (Zaishen quest)", "de": "Tor des Schmerzes (Zaishen-Mission)"}
    },
    "100098": {
      "name": "Gates of Kryta (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Gates of Kryta (Zaishen quest)", "de": "Tore von Kryta (Zaishen-Mission)"}
    },
    "100099": {
      "name": "Ghial the Bone Dancer (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": {"en": "Ghial the Bone Dancer (Zaishen quest)", "de": "Ghial der Knochentänzer (Zaishen-Kopfgeld)"}
    },
    "100100": {
      "name": "Grand Court of Sebelkeh (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Grand Court of Sebelkeh (Zaishen quest)", "de": "Großer Hof von Sebelkeh (Zaishen-Mission)"}
    },
    "100101": {
      "name": "Grenth's Footprint (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Grenth's Footprint (Zaishen vanquish)", "de": "Grenths Fußabdruck (Zaishen-Bezwingung)"}
    },
    "100102": {
      "name": "Griffon's Mouth (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Griffon's Mouth (Zaishen vanquish)", "de": "Greifenmaul (Zaishen-Bezwingung)"}
    },
    "100103": {
      "name": "Grothmar Wardowns (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Ebon Vanguard reputation points"],
      "wiki": {"en": "Grothmar Wardowns (Zaishen vanquish)", "de": "Grothmar-Kriegshügel (Zaishen-Bezwingung)"}
    },
    "100104": {
      "name": "Guild Versus Guild (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1500,
      "rewards": ["9,000 Balthazar faction"],
      "wiki": {"en": "Guild Versus Guild (Zaishen quest)", "de": "Gilde gegen Gilde (Zaishen-Kampf)"}
    },
    "100105": {
      "name": "Gyala Hatchery (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Luxon faction"],
      "wiki": {"en": "Gyala Hatchery (Zaishen quest)", "de": "Gyala-Brutstätte (Zaishen-Mission)"}
    },
    "100106": {
      "name": "Gyala Hatchery (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": {"en": "Gyala Hatchery (Zaishen vanquish)", "de": "Gyala-Brutstätte (Zaishen-Bezwingung)"}
    },
    "100107": {
      "name": "Haiju Lagoon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Haiju Lagoon (Zaishen vanquish)", "de": "Haiju-Lagune (Zaishen-Bezwingung)"}
    },
    "100108": {
      "name": "Harn and Maxine Coldstone (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
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
      "wiki": {"en": "Havok Soulwail (Zaishen quest)", "de": "Havok Seelenheuler (Zaishen-Kopfgeld)"}
    },
    "100110": {
      "name": "Hell's Precipice (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Hell's Precipice (Zaishen quest)", "de": "Vorhof der Hölle (Zaishen-Mission)"}
    },
    "100111": {
      "name": "Hero Battles (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "wiki": {"en": "Hero Battles (Zaishen quest)", "de": "Heldenkämpfe (Zaishen-Kampf)"}
    },
    "100112": {
      "name": "Heroes' Ascent (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1500,
      "rewards": ["9,000 Balthazar faction"],
      "wiki": {"en": "Heroes' Ascent (Zaishen quest)", "de": "Aufstieg der Helden (Zaishen-Kampf)"}
    },
    "100113": {
      "name": "Holdings of Chokhin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Holdings of Chokhin (Zaishen vanquish)", "de": "Güter von Chokhin (Zaishen-Bezwingung)"}
    },
    "100114": {
      "name": "Ice Caves of Sorrow (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Ice Caves of Sorrow (Zaishen quest)", "de": "Eishöhlen der Betrübnis (Zaishen-Mission)"}
    },
    "100115": {
      "name": "Ice Cliff Chasms (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "wiki": {"en": "Ice Cliff Chasms (Zaishen vanquish)", "de": "Eisklippen-Abgründe (Zaishen-Bezwingung)"}
    },
    "100116": {
      "name": "Ice Floe (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Ice Floe (Zaishen vanquish)", "de": "Eisscholle (Zaishen-Bezwingung)"}
    },
    "100117": {
      "name": "Icedome (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Icedome (Zaishen vanquish)", "de": "Eisdom (Zaishen-Bezwingung)"}
    },
    "100118": {
      "name": "Ilsundur, Lord of Fire (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "wiki": {"en": "Ilsundur, Lord of Fire (Zaishen quest)", "de": "Ilsundur, Herr des Feuers (Zaishen-Kopfgeld)"}
    },
    "100119": {
      "name": "Imperial Sanctum (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
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
      "wiki": {"en": "Iron Horse Mine (Zaishen vanquish)", "de": "Eisenrossmine (Zaishen-Bezwingung)"}
    },
    "100122": {
      "name": "Iron Mines of Moladune (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Iron Mines of Moladune (Zaishen quest)", "de": "Eisenminen von Moladune (Zaishen-Mission)"}
    },
    "100123": {
      "name": "Issnur Isles (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Issnur Isles (Zaishen vanquish)", "de": "Issnur-Inseln (Zaishen-Bezwingung)"}
    },
    "100124": {
      "name": "Jade Quarry (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["5,000 Imperial faction"],
      "wiki": {"en": "Jade Quarry (Zaishen quest)", "de": "Jadesteinbruch"}
    },
    "100125": {
      "name": "Jaga Moraine (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "wiki": {"en": "Jaga Moraine (Zaishen vanquish)", "de": "Jaga-Moräne (Zaishen-Bezwingung)"}
    },
    "100126": {
      "name": "Jahai Bluffs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "wiki": {"en": "Jahai Bluffs (Zaishen vanquish)", "de": "Jahai-Klippen (Zaishen-Bezwingung)"}
    },
    "100127": {
      "name": "Jarimiya the Unmerciful (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Jarimiya the Unmerciful (Zaishen quest)", "de": "Jarimiya der Gnadenlose (Zaishen-Kopfgeld)"}
    },
    "100128": {
      "name": "Jaya Bluffs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Jaya Bluffs (Zaishen vanquish)", "de": "Jaya-Klippen (Zaishen-Bezwingung)"}
    },
    "100129": {
      "name": "Jedeh the Mighty (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Jedeh the Mighty (Zaishen quest)", "de": "Jedeh der Mächtige (Zaishen-Kopfgeld)"}
    },
    "100130": {
      "name": "Jennur's Horde (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Jennur's Horde (Zaishen quest)", "de": "Jennurs Horde (Zaishen-Mission)"}
    },
    "100131": {
      "name": "Joffs the Mitigator (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Asura reputation points"],
      "wiki": {"en": "Joffs the Mitigator (Zaishen quest)", "de": "Joffs der Sanfte (Zaishen-Kopfgeld)"}
    },
    "100132": {
      "name": "Jokanur Diggings (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Jokanur Diggings (Zaishen quest)", "de": "Ausgrabungsstätte von Jokanur (Zaishen-Mission)"}
    },
    "100133": {
      "name": "Joko's Domain (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": {"en": "Joko's Domain (Zaishen vanquish)", "de": "Jokos Domäne (Zaishen-Bezwingung)"}
    },
    "100134": {
      "name": "Justiciar Thommis (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Justiciar Thommis (Zaishen quest)", "de": "Justiziar Thommis (Zaishen-Kopfgeld)"}
    },
    "100135": {
      "name": "Kanaxai (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["7,500 Luxon faction"],
      "wiki": {"en": "Kanaxai (Zaishen quest)", "de": "Kanaxai (Zaishen-Kopfgeld)"}
    },
    "100136": {
      "name": "Kepkhet Marrowfeast (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": {"en": "Kepkhet Marrowfeast (Zaishen quest)", "de": "Kepkhet Markschmaus (Zaishen-Kopfgeld)"}
    },
    "100137": {
      "name": "Kessex Peak (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Kessex Peak (Zaishen vanquish)", "de": "Kessex-Gipfel (Zaishen-Bezwingung)"}
    },
    "100138": {
      "name": "Khabuus (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
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
      "wiki": {"en": "Kinya Province (Zaishen vanquish)", "de": "Provinz Kinya (Zaishen-Bezwingung)"}
    },
    "100141": {
      "name": "Kodonur Crossroads (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": {"en": "Kodonur Crossroads (Zaishen quest)", "de": "Kodonur-Kreuzung (Zaishen-Mission)"}
    },
    "100142": {
      "name": "Korshek the Immolated (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Lightbringer points"],
      "wiki": {"en": "Korshek the Immolated (Zaishen quest)", "de": "Korshek der Geopferte (Zaishen-Kopfgeld)"}
    },
    "100143": {
      "name": "Kunvie Firewing (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction", "500 Luxon faction"],
      "wiki": {"en": "Kunvie Firewing (Zaishen quest)", "de": "Kunvie Feuerflügel (Zaishen-Kopfgeld)"}
    },
    "100144": {
      "name": "Lahtenda Bog (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear points"],
      "wiki": {"en": "Lahtenda Bog (Zaishen vanquish)", "de": "Lahtenda-Sumpf (Zaishen-Bezwingung)"}
    },
    "100145": {
      "name": "Lord Jadoth (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "wiki": {"en": "Lord Jadoth (Zaishen quest)", "de": "Fürst Jadoth (Zaishen-Kopfgeld)"}
    },
    "100146": {
      "name": "Lord Khobay (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Lord Khobay (Zaishen quest)", "de": "Lord Khobay (Zaishen-Kopfgeld)"}
    },
    "100147": {
      "name": "Lornar's Pass (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Lornar's Pass (Zaishen vanquish)", "de": "Lornarpass (Zaishen-Bezwingung)"}
    },
    "100148": {
      "name": "Magmus (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Magmus (Zaishen quest)", "de": "Magmus (Zaishen-Kopfgeld)"}
    },
    "100149": {
      "name": "Magus Stones (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": {"en": "Magus Stones (Zaishen vanquish)", "de": "Magussteine (Zaishen-Bezwingung)"}
    },
    "100150": {
      "name": "Maishang Hills (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": {"en": "Maishang Hills (Zaishen vanquish)", "de": "Maishang-Hügel (Zaishen-Bezwingung)"}
    },
    "100151": {
      "name": "Majesty's Rest (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Majesty's Rest (Zaishen vanquish)", "de": "Königsruh (Zaishen-Bezwingung)"}
    },
    "100152": {
      "name": "Mamnoon Lagoon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Mamnoon Lagoon (Zaishen vanquish)", "de": "Mamnoon-Lagune (Zaishen-Bezwingung)"}
    },
    "100153": {
      "name": "Marga Coast (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "wiki": {"en": "Marga Coast (Zaishen vanquish)", "de": "Marga-Küste (Zaishen-Bezwingung)"}
    },
    "100154": {
      "name": "Mehtani Keys (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Mehtani Keys (Zaishen vanquish)", "de": "Mehtani-Archipel (Zaishen-Bezwingung)"}
    },
    "100155": {
      "name": "Melandru's Hope (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": {"en": "Melandru's Hope (Zaishen vanquish)", "de": "Melandrus Hoffnung (Zaishen-Bezwingung)"}
    },
    "100156": {
      "name": "Mineral Springs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Mineral Springs (Zaishen vanquish)", "de": "Mineralquellen (Zaishen-Bezwingung)"}
    },
    "100157": {
      "name": "Miniature Companion: Dungeons",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2007,
      "wiki": {"en": "Miniature Companion: Dungeons", "de": "Miniatur-Gefährte: Verliese"}
    },
    "100158": {
      "name": "Miniature Companion: Eye of the North",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2007,
      "wiki": {"en": "Miniature Companion: Eye of the North", "de": "Miniatur-Gefährte: Auge des Nordens"}
    },
    "100159": {
      "name": "Miniature Companion: Factions",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: Factions", "de": "Miniatur-Gefährte: Fraktionen"}
    },
    "100160": {
      "name": "Miniature Companion: Nightfall",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: Nightfall", "de": "Miniatur-Gefährte: Anbruch der Nacht"}
    },
    "100161": {
      "name": "Miniature Companion: Prophecies",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2005,
      "wiki": {"en": "Miniature Companion: Prophecies", "de": "Miniatur-Gefährte: Prophezeiungen"}
    },
    "100162": {
      "name": "Miniature Companion: Sorrow's Furnace",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2005,
      "wiki": {"en": "Miniature Companion: Sorrow's Furnace", "de": "Miniatur-Gefährte: Hochofen der Betrübnis"}
    },
    "100163": {
      "name": "Miniature Companion: The Deep",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: The Deep", "de": "Miniatur-Gefährte: Die Tiefe"}
    },
    "100164": {
      "name": "Miniature Companion: The Domain of Anguish",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: The Domain of Anguish", "de": "Miniatur-Gefährte: Die Domäne der Pein"}
    },
    "100165": {
      "name": "Miniature Companion: The Fissure of Woe",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: The Fissure of Woe", "de": "Miniatur-Gefährte: Der Riss des Kummers"}
    },
    "100166": {
      "name": "Miniature Companion: The Underworld",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: The Underworld", "de": "Miniatur-Gefährte: Die Unterwelt"}
    },
    "100167": {
      "name": "Miniature Companion: Urgoz's Warren",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: Urgoz's Warren", "de": "Miniatur-Gefährte: Urgoz' Bau"}
    },
    "100168": {
      "name": "Miniature Companion: Young Heroes",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": {"en": "Miniature Companion: Young Heroes", "de": "Miniatur-Gefährte: Junge Helden"}
    },
    "100169": {
      "name": "Minister Cho's Estate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Minister Cho's Estate (Zaishen quest)", "de": "Minister Chos Anwesen (Zaishen-Mission)"}
    },
    "100170": {
      "name": "Minister Cho's Estate (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Minister Cho's Estate (Zaishen vanquish)", "de": "Minister Chos Anwesen (Zaishen-Bezwingung)"}
    },
    "100171": {
      "name": "Mobrin, Lord of the Marsh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Asura reputation points"],
      "wiki": {"en": "Mobrin, Lord of the Marsh (Zaishen quest)", "de": "Mobrin, Herr des Sumpfes (Zaishen-Kopfgeld)"}
    },
    "100172": {
      "name": "Moddok Crevice (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": {"en": "Moddok Crevice (Zaishen quest)", "de": "Moddok-Spalte (Zaishen-Mission)"}
    },
    "100173": {
      "name": "Mohby Windbeak (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Luxon faction"],
      "wiki": {"en": "Mohby Windbeak (Zaishen quest)", "de": "Mohby Windschnabel (Zaishen-Kopfgeld)"}
    },
    "100174": {
      "name": "Molotov Rocktail (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "wiki": {"en": "Molotov Rocktail (Zaishen quest)", "de": "Molotov Felsschweif (Zaishen-Kopfgeld)"}
    },
    "100175": {
      "name": "Morostav Trail (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["10,000 Kurzick faction"],
      "wiki": {"en": "Morostav Trail (Zaishen vanquish)", "de": "Morostovweg (Zaishen-Bezwingung)"}
    },
    "100176": {
      "name": "Mount Qinkai (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": {"en": "Mount Qinkai (Zaishen vanquish)", "de": "Qinkai (Zaishen-Bezwingung)"}
    },
    "100177": {
      "name": "Mourning Veil Falls (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": {"en": "Mourning Veil Falls (Zaishen vanquish)", "de": "Trauerflorfälle (Zaishen-Bezwingung)"}
    },
    "100178": {
      "name": "Mungri Magicbox (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction"],
      "wiki": {"en": "Mungri Magicbox (Zaishen quest)", "de": "Mungri Magiebox (Zaishen-Kopfgeld)"}
    },
    "100179": {
      "name": "Murakai, Lady of the Night (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
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
      "wiki": {"en": "Myish, Lady of the Lake (Zaishen quest)", "de": "Myish, Herrin des Sees (Zaishen-Kopfgeld)"}
    },
    "100181": {
      "name": "Nahpui Quarter (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Nahpui Quarter (Zaishen quest)", "de": "Nahpuiviertel (Zaishen-Mission)"}
    },
    "100182": {
      "name": "Nahpui Quarter (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Nahpui Quarter (Zaishen vanquish)", "de": "Nahpuiviertel (Zaishen-Bezwingung)"}
    },
    "100183": {
      "name": "Nebo Terrace (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Nebo Terrace (Zaishen vanquish)", "de": "Nebo-Terrasse (Zaishen-Bezwingung)"}
    },
    "100184": {
      "name": "Nolani Academy (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Nolani Academy (Zaishen quest)", "de": "Nolani-Akademie (Zaishen-Mission)"}
    },
    "100185": {
      "name": "Norrhart Domains (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "wiki": {"en": "Norrhart Domains (Zaishen vanquish)", "de": "Norrhart-Gebiete (Zaishen-Bezwingung)"}
    },
    "100186": {
      "name": "North Kryta Province (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "North Kryta Province (Zaishen vanquish)", "de": "Provinz Nordkryta (Zaishen-Bezwingung)"}
    },
    "100187": {
      "name": "Nulfastu Earthbound (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Norn reputation points"],
      "wiki": {"en": "Nulfastu, Earthbound (Zaishen quest)", "de": "Nulfastu Erdgebundener (Zaishen-Kopfgeld)"}
    },
    "100188": {
      "name": "Nundu Bay (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Nundu Bay (Zaishen quest)", "de": "Nundu-Bucht (Zaishen-Mission)"}
    },
    "100189": {
      "name": "Old Ascalon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Old Ascalon (Zaishen vanquish)", "de": "Alt-Ascalon (Zaishen-Bezwingung)"}
    },
    "100190": {
      "name": "Panjiang Peninsula (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Panjiang Peninsula (Zaishen vanquish)", "de": "Panjiang-Halbinsel (Zaishen-Bezwingung)"}
    },
    "100191": {
      "name": "Perdition Rock (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Perdition Rock (Zaishen vanquish)", "de": "Fels der Verdammnis (Zaishen-Bezwingung)"}
    },
    "100192": {
      "name": "Pilgrimage to the Hall of Heroes",
      "type": "event",
      "givers": [694],
      "event": 5,
      "repeatable": true,
      "wiki": {"en": "Pilgrimage to the Hall of Heroes", "de": "Pilgerreise zur Halle der Helden"}
    },
    "100193": {
      "name": "Plague of Destruction (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
      "wiki": {"en": "Plague of Destruction (Zaishen quest)", "de": "Seuche der Zerstörung (Zaishen-Kopfgeld)"}
    },
    "100194": {
      "name": "Plains of Jarin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear points"],
      "wiki": {"en": "Plains of Jarin (Zaishen vanquish)", "de": "Flachland von Jarin (Zaishen-Bezwingung)"}
    },
    "100195": {
      "name": "Pockmark Flats (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Pockmark Flats (Zaishen vanquish)", "de": "Pockennarbenebene (Zaishen-Bezwingung)"}
    },
    "100196": {
      "name": "Pogahn Passage (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "wiki": {"en": "Pogahn Passage (Zaishen quest)", "de": "Passage von Pogahn (Zaishen-Mission)"}
    },
    "100197": {
      "name": "Poisoned Outcrops (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": {"en": "Poisoned Outcrops (Zaishen vanquish)", "de": "Giftige Auswüchse (Zaishen-Bezwingung)"}
    },
    "100198": {
      "name": "Pongmei Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Pongmei Valley (Zaishen vanquish)", "de": "Pongmei-Tal (Zaishen-Bezwingung)"}
    },
    "100199": {
      "name": "Priest of Menzies (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Priest of Menzies (Zaishen quest)", "de": "Menzies' Priester (Zaishen-Kopfgeld)"}
    },
    "100200": {
      "name": "Prismatic Ooze (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Prismatic Ooze (Zaishen quest)", "de": "Spektral-Schleim (Zaishen-Kopfgeld)"}
    },
    "100201": {
      "name": "Prophet's Path (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Prophet's Path (Zaishen vanquish)", "de": "Pfad des Propheten (Zaishen-Bezwingung)"}
    },
    "100202": {
      "name": "Pywatt the Swift (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Asura reputation points"],
      "wiki": {"en": "Pywatt the Swift (Zaishen quest)", "de": "Pywatt der Schnelle (Zaishen-Kopfgeld)"}
    },
    "100203": {
      "name": "Quansong Spiritspeak (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": {"en": "Quansong Spiritspeak (Zaishen quest)", "de": "Quansong Geistsprecher (Zaishen-Kopfgeld)"}
    },
    "100204": {
      "name": "Raisu Palace (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Raisu Palace (Zaishen quest)", "de": "Raisu-Palast (Zaishen-Mission)"}
    },
    "100205": {
      "name": "Raisu Palace (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Raisu Palace (Zaishen vanquish)", "de": "Raisu-Palast (Zaishen-Bezwingung)"}
    },
    "100206": {
      "name": "Rand Stormweaver (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Rand Stormweaver (Zaishen quest)", "de": "Rand Sturmweber (Zaishen-Kopfgeld)"}
    },
    "100207": {
      "name": "Random Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["3000 Balthazar faction"],
      "wiki": {"en": "Random Arena (Zaishen quest)", "de": "Zufallsarenen (Zaishen-Kampf)"}
    },
    "100208": {
      "name": "Reed Bog (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Reed Bog (Zaishen vanquish)", "de": "Schilfmoor (Zaishen-Bezwingung)"}
    },
    "100209": {
      "name": "Regent Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Regent Valley (Zaishen vanquish)", "de": "Regentental (Zaishen-Bezwingung)"}
    },
    "100210": {
      "name": "Remnant of Antiquities (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Remnant of Antiquities (Zaishen quest)", "de": "Überrest der Vorzeit (Zaishen-Kopfgeld)"}
    },
    "100211": {
      "name": "Resplendent Makuun (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
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
      "wiki": {"en": "Rhea's Crater (Zaishen vanquish)", "de": "Rheas Krater (Zaishen-Bezwingung)"}
    },
    "100215": {
      "name": "Rilohn Refuge (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": {"en": "Rilohn Refuge (Zaishen quest)", "de": "Rilohn-Refugium (Zaishen-Mission)"}
    },
    "100216": {
      "name": "Ring of Fire (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Ring of Fire (Zaishen quest)", "de": "Feuerring (Zaishen-Mission)"}
    },
    "100217": {
      "name": "Riven Earth (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": {"en": "Riven Earth (Zaishen vanquish)", "de": "Zerrissene Erde (Zaishen-Bezwingung)"}
    },
    "100218": {
      "name": "Riverside Province (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Riverside Province (Zaishen quest)", "de": "Flussuferprovinz (Zaishen-Mission)"}
    },
    "100219": {
      "name": "Rotscale (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Rotscale (Zaishen quest)", "de": "Faulschuppe (Zaishen-Kopfgeld)"}
    },
    "100220": {
      "name": "Royen Beastkeeper (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": {"en": "Royen Beastkeeper (Zaishen quest)", "de": "Royen Bestienwärter (Zaishen-Kopfgeld)"}
    },
    "100221": {
      "name": "Rragar Maneater (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "wiki": {"en": "Rragar Maneater (Zaishen quest)", "de": "Rragar Menschenfresser (Zaishen-Kopfgeld)"}
    },
    "100222": {
      "name": "Ruins of Morah (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": {"en": "Ruins of Morah (Zaishen quest)", "de": "Ruinen von Morah (Zaishen-Mission)"}
    },
    "100223": {
      "name": "Ruins of Surmia (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Ruins of Surmia (Zaishen quest)", "de": "Ruinen von Surmia (Zaishen-Mission)"}
    },
    "100224": {
      "name": "Sacnoth Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Ebon Vanguard reputation points"],
      "wiki": {"en": "Sacnoth Valley (Zaishen vanquish)", "de": "Sacnoth-Tal (Zaishen-Bezwingung)"}
    },
    "100225": {
      "name": "Sage Lands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Sage Lands (Zaishen vanquish)", "de": "Land der Weisen (Zaishen-Bezwingung)"}
    },
    "100226": {
      "name": "Salt Flats (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Salt Flats (Zaishen vanquish)", "de": "Salzebenen (Zaishen-Bezwingung)"}
    },
    "100227": {
      "name": "Sanctum Cay (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Sanctum Cay (Zaishen quest)", "de": "Riff der Stille (Zaishen-Mission)"}
    },
    "100228": {
      "name": "Saoshang Trail (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Saoshang Trail (Zaishen vanquish)", "de": "Saoshangweg (Zaishen-Bezwingung)"}
    },
    "100229": {
      "name": "Scoundrel's Rise (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Scoundrel's Rise (Zaishen vanquish)", "de": "Schurkenhügel (Zaishen-Bezwingung)"}
    },
    "100230": {
      "name": "Selvetarm (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
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
      "wiki": {"en": "Shadow's Passage (Zaishen vanquish)", "de": "Schattenpassage (Zaishen-Bezwingung)"}
    },
    "100233": {
      "name": "Shenzun Tunnels (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Shenzun Tunnels (Zaishen vanquish)", "de": "Shenzun-Tunnel (Zaishen-Bezwingung)"}
    },
    "100234": {
      "name": "Silent Surf (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": {"en": "Silent Surf (Zaishen vanquish)", "de": "Stumme Brandung (Zaishen-Bezwingung)"}
    },
    "100235": {
      "name": "Silverwood (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Silverwood (Zaishen vanquish)", "de": "Silberholz (Zaishen-Bezwingung)"}
    },
    "100236": {
      "name": "Skyward Reach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
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
      "wiki": {"en": "Snake Dance (Zaishen vanquish)", "de": "Schlangentanz (Zaishen-Bezwingung)"}
    },
    "100239": {
      "name": "Sparkfly Swamp (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": {"en": "Sparkfly Swamp (Zaishen vanquish)", "de": "Funkenschwärmersumpf (Zaishen-Bezwingung)"}
    },
    "100240": {
      "name": "Spearhead Peak (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Spearhead Peak (Zaishen vanquish)", "de": "Speerspitzengipfel (Zaishen-Bezwingung)"}
    },
    "100241": {
      "name": "Ssuns, Blessed of Dwayna (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Luxon faction"],
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
      "wiki": {"en": "Stingray Strand (Zaishen vanquish)", "de": "Stachelrochenstrand (Zaishen-Bezwingung)"}
    },
    "100243": {
      "name": "Sunjiang District (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Sunjiang District (Zaishen quest)", "de": "Sunjiang-Bezirk (Zaishen-Mission)"}
    },
    "100244": {
      "name": "Sunjiang District (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Sunjiang District (Zaishen vanquish)", "de": "Sunjiang-Bezirk (Zaishen-Bezwingung)"}
    },
    "100245": {
      "name": "Sunqua Vale (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Sunqua Vale (Zaishen vanquish)", "de": "Sunqua-Tal (Zaishen-Bezwingung)"}
    },
    "100246": {
      "name": "Sunward Marches (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Sunward Marches (Zaishen vanquish)", "de": "Sonnenwärtige Sümpfe (Zaishen-Bezwingung)"}
    },
    "100247": {
      "name": "TPS Regulator Golem (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": {"en": "TPS Regulator Golem (Zaishen quest)", "de": "TPS-Regler-Golem (Zaishen-Kopfgeld)"}
    },
    "100248": {
      "name": "Tahnnakai Temple (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Tahnnakai Temple (Zaishen quest)", "de": "Tahnnakai-Tempel (Zaishen-Mission)"}
    },
    "100249": {
      "name": "Tahnnakai Temple (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Tahnnakai Temple (Zaishen vanquish)", "de": "Tahnnakai-Tempel (Zaishen-Bezwingung)"}
    },
    "100250": {
      "name": "Talmark Wilderness (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Talmark Wilderness (Zaishen vanquish)", "de": "Talmark-Wildnis (Zaishen-Bezwingung)"}
    },
    "100251": {
      "name": "Talus Chute (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "Talus Chute (Zaishen vanquish)", "de": "Talusschnelle (Zaishen-Bezwingung)"}
    },
    "100252": {
      "name": "Tangle Root (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Tangle Root (Zaishen vanquish)", "de": "Wildwurzel (Zaishen-Bezwingung)"}
    },
    "100253": {
      "name": "Tasca's Demise (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Tasca's Demise (Zaishen vanquish)", "de": "Tascas Ableben (Zaishen-Bezwingung)"}
    },
    "100254": {
      "name": "Team Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "wiki": {"en": "Team Arena (Zaishen quest)", "de": "Team-Arena (Zaishen-Kampf)"}
    },
    "100255": {
      "name": "Tears of the Fallen (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
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
      "wiki": {"en": "The Alkali Pan (Zaishen vanquish)", "de": "Das Alkalibecken (Zaishen-Bezwingung)"}
    },
    "100258": {
      "name": "The Arid Sea (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "The Arid Sea (Zaishen vanquish)", "de": "Das Trockene Meer (Zaishen-Bezwingung)"}
    },
    "100259": {
      "name": "The Black Beast of Arrgh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
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
      "wiki": {"en": "The Black Curtain (Zaishen vanquish)", "de": "Der Schwarze Vorhang (Zaishen-Bezwingung)"}
    },
    "100261": {
      "name": "The Breach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "The Breach (Zaishen vanquish)", "de": "Die Bresche (Zaishen-Bezwingung)"}
    },
    "100262": {
      "name": "The Darkness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "The Darknesses (Zaishen quest)", "de": "Das Dunkel (Zaishen-Kopfgeld)"}
    },
    "100263": {
      "name": "The Dragon's Lair (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "The Dragon's Lair (Zaishen quest)", "de": "Die Drachenhöhle (Zaishen-Mission)"}
    },
    "100264": {
      "name": "The Elusive Golemancer (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Asura reputation points"],
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
      "wiki": {"en": "The Eternal Grove (Zaishen quest)", "de": "Der Ewige Hain (Zaishen-Mission)"}
    },
    "100267": {
      "name": "The Eternal Grove (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": {"en": "The Eternal Grove (Zaishen vanquish)", "de": "Der Ewige Hain (Zaishen-Bezwingung)"}
    },
    "100268": {
      "name": "The Falls (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "The Falls (Zaishen vanquish)", "de": "Die Wasserfälle (Zaishen-Bezwingung)"}
    },
    "100269": {
      "name": "The Floodplain of Mahnkelon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
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
      "wiki": {"en": "The Four Horsemen (Zaishen quest)", "de": "Die vier Reiter (Zaishen-Kopfgeld)"}
    },
    "100272": {
      "name": "The Frost Gate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "The Frost Gate (Zaishen quest)", "de": "Das Frosttor (Zaishen-Mission)"}
    },
    "100273": {
      "name": "The Great Northern Wall (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "The Great Northern Wall (Zaishen quest)", "de": "Der Große Nordwall (Zaishen-Mission)"}
    },
    "100274": {
      "name": "The Greater Darkness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "wiki": {"en": "The Greater Darkness (Zaishen quest)", "de": "Das Große Dunkel (Zaishen-Kopfgeld)"}
    },
    "100275": {
      "name": "The Hidden City of Ahdashim (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
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
      "wiki": {"en": "The Iron Forgeman (Zaishen quest)", "de": "Der Eiserne Schmied (Zaishen-Kopfgeld)"}
    },
    "100278": {
      "name": "The Mirror of Lyss (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "The Mirror of Lyss (Zaishen vanquish)", "de": "Der Spiegel von Lyss (Zaishen-Bezwingung)"}
    },
    "100279": {
      "name": "The Nameless Masters",
      "type": "secondary",
      "givers": [330],
      "rewards": ["Unlocks Zaishen Challenge"],
      "next": [100296],
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
      "wiki": {"en": "The Path to Combat: Heroes' Ascent", "de": "Der Weg zum Kampf: Aufstieg der Helden"}
    },
    "100285": {
      "name": "The Path to Combat: Random Arena",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Gladiator's Zaishen Strongbox"],
      "next": [100289],
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
      "wiki": {"en": "The Path to Victory: Codex Arena", "de": "Der Weg zum Sieg: Kodex-Arena"}
    },
    "100287": {
      "name": "The Path to Victory: Guild Battles",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Champion's Zaishen Strongbox"],
      "requires": [100283],
      "wiki": {"en": "The Path to Victory: Guild Battles", "de": "Der Weg zum Sieg: Gildenkämpfe"}
    },
    "100288": {
      "name": "The Path to Victory: Heroes' Ascent",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Hero's Zaishen Strongbox"],
      "requires": [100284],
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
      "wiki": {"en": "The Path to Victory: Random Arenas", "de": "Der Weg zum Sieg: Zufallsarenen"}
    },
    "100290": {
      "name": "The Ruptured Heart (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": {"en": "The Ruptured Heart (Zaishen vanquish)", "de": "Das Zerrissene Herz (Zaishen-Bezwingung)"}
    },
    "100291": {
      "name": "The Scar (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": {"en": "The Scar (Zaishen vanquish)", "de": "Die Narbe (Zaishen-Bezwingung)"}
    },
    "100292": {
      "name": "The Shattered Ravines (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
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
      "wiki": {"en": "The Stygian Lords (Zaishen quest)", "de": "Die Stygischen Fürsten (Zaishen-Kopfgeld)"}
    },
    "100294": {
      "name": "The Stygian Underlords (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["300 Lightbringer points"],
      "wiki": {"en": "The Stygian Underlords (Zaishen quest)", "de": "Die Stygischen Unterfürsten (Zaishen-Kopfgeld)"}
    },
    "100295": {
      "name": "The Sulfurous Wastes (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": {"en": "The Sulfurous Wastes (Zaishen vanquish)", "de": "Die Schwefel-Einöde (Zaishen-Bezwingung)"}
    },
    "100296": {
      "name": "The Team Trials",
      "type": "secondary",
      "givers": [330],
      "requires": [100279],
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
      "wiki": {"en": "The Wilds (Zaishen quest)", "de": "Die Wildnis (Zaishen-Mission)"}
    },
    "100299": {
      "name": "Thirsty River (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Thirsty River (Zaishen quest)", "de": "Durstiger Fluss (Zaishen-Mission)"}
    },
    "100300": {
      "name": "Thunderhead Keep (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Thunderhead Keep (Zaishen quest)", "de": "Feste Donnerkopf (Zaishen-Mission)"}
    },
    "100301": {
      "name": "Tihark Orchard (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
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
      "wiki": {"en": "Traveler's Vale (Zaishen vanquish)", "de": "Tal des Reisenden (Zaishen-Bezwingung)"}
    },
    "100305": {
      "name": "Turai's Procession (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "wiki": {"en": "Turai's Procession (Zaishen vanquish)", "de": "Turais Weg (Zaishen-Bezwingung)"}
    },
    "100306": {
      "name": "Twin Serpent Lakes (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Twin Serpent Lakes (Zaishen vanquish)", "de": "Zwillingsschlangenseen (Zaishen-Bezwingung)"}
    },
    "100307": {
      "name": "Unwaking Waters (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction", "2,500 Luxon faction"],
      "wiki": {"en": "Unwaking Waters (Zaishen quest)", "de": "Verschlafene Gewässer (Zaishen-Mission)"}
    },
    "100308": {
      "name": "Unwaking Waters (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
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
      "wiki": {"en": "Urgoz (Zaishen quest)", "de": "Urgoz (Zaishen-Kopfgeld)"}
    },
    "100311": {
      "name": "Varajar Fells (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "wiki": {"en": "Varajar Fells (Zaishen vanquish)", "de": "Varajar-Moor (Zaishen-Bezwingung)"}
    },
    "100312": {
      "name": "Vehjin Mines (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Vehjin Mines (Zaishen vanquish)", "de": "Vehjin-Minen (Zaishen-Bezwingung)"}
    },
    "100313": {
      "name": "Vehtendi Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Vehtendi Valley (Zaishen vanquish)", "de": "Vehtendi-Tal (Zaishen-Bezwingung)"}
    },
    "100314": {
      "name": "Vengeful Aatxe (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Vengeful Aatxe (Zaishen quest)", "de": "Rachsüchtiger Aatxe (Zaishen-Kopfgeld)"}
    },
    "100315": {
      "name": "Venta Cemetery (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": {"en": "Venta Cemetery (Zaishen quest)", "de": "Totenanger von Venta (Zaishen-Mission)"}
    },
    "100316": {
      "name": "Verata (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": {"en": "Verata (Zaishen quest)", "de": "Verata (Zaishen-Kopfgeld)"}
    },
    "100317": {
      "name": "Verdant Cascades (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Asura reputation points"],
      "wiki": {"en": "Verdant Cascades (Zaishen vanquish)", "de": "Grüne Kaskaden (Zaishen-Bezwingung)"}
    },
    "100318": {
      "name": "Vizunah Square (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": {"en": "Vizunah Square (Zaishen quest)", "de": "Vizunahplatz (Zaishen-Mission)"}
    },
    "100319": {
      "name": "Vulture Drifts (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Vulture Drifts (Zaishen vanquish)", "de": "Geierdünen (Zaishen-Bezwingung)"}
    },
    "100320": {
      "name": "Wajjun Bazaar (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Wajjun Bazaar (Zaishen vanquish)", "de": "Wajjun-Basar (Zaishen-Bezwingung)"}
    },
    "100321": {
      "name": "Warband of Brothers (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "wiki": {"en": "Warband of Brothers (Zaishen quest)", "de": "Brudertrupp (Zaishen-Mission)"}
    },
    "100322": {
      "name": "Watchtower Coast (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Watchtower Coast (Zaishen vanquish)", "de": "Wachturmküste (Zaishen-Bezwingung)"}
    },
    "100323": {
      "name": "Wilderness of Bahdza (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Wilderness of Bahdza (Zaishen vanquish)", "de": "Wildnis von Bahdza (Zaishen-Bezwingung)"}
    },
    "100324": {
      "name": "Witman's Folly (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
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
      "wiki": {"en": "Xaquang Skyway (Zaishen vanquish)", "de": "Xaquang-Himmelsweg (Zaishen-Bezwingung)"}
    },
    "100327": {
      "name": "Yatendi Canyons (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": {"en": "Yatendi Canyons (Zaishen vanquish)", "de": "Yahtendi-Schluchten (Zaishen-Bezwingung)"}
    },
    "100328": {
      "name": "Z'him Monns (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": {"en": "Z'him Monns (Zaishen quest)", "de": "Z'him Monns (Zaishen-Kopfgeld)"}
    },
    "100329": {
      "name": "Zehlon Reach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["750 Sunspear points"],
      "wiki": {"en": "Zehlon Reach (Zaishen vanquish)", "de": "Zehlon-Bucht (Zaishen-Bezwingung)"}
    },
    "100330": {
      "name": "Zen Daijun (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Zen Daijun (Zaishen quest)", "de": "Zen Daijun (Zaishen-Mission)"}
    },
    "100331": {
      "name": "Zen Daijun (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": {"en": "Zen Daijun (Zaishen vanquish)", "de": "Zen Daijun (Zaishen-Bezwingung)"}
    },
    "100332": {
      "name": "Zinn's Task",
      "type": "secondary",
      "givers": [668],
      "xp": 50000,
      "gold": 10000,
      "rewards": ["10 Automaton Summoning Stones", "10 Sinister Automatonics"],
      "wiki": {"en": "Zinn's Task", "de": "Zinns Aufgabe"}
    },
    "100333": {
      "name": "Zoldark the Unholy (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": {"en": "Zoldark the Unholy (Zaishen quest)", "de": "Zoldark der Unheilige (Zaishen-Kopfgeld)"}
    },
    "100334": {
      "name": "A Gate Too Far",
      "type": "primary",
      "givers": [249],
      "requires": [100454],
      "wiki": {"en": "A Gate Too Far", "de": "Ein Portal zu weit"}
    },
    "100335": {
      "name": "A Good Deed",
      "type": "secondary",
      "givers": [405],
      "xp": 5000,
      "gold": 500,
      "rewards": ["500 Ebon Vanguard reputation points"],
      "wiki": {"en": "A Good Deed.", "de": "Eine gute Tat."}
    },
    "100336": {
      "name": "A Hunter's Pride",
      "type": "secondary",
      "givers": [626],
      "skills": [2374],
      "rewards": ["100 Norn reputation points", "3 Honeycombs"],
      "requires": [100346],
      "wiki": {"en": "A Hunter's Pride", "de": "Jägerstolz"}
    },
    "100337": {
      "name": "A Little Help",
      "type": "primary",
      "givers": [501],
      "xp": 2000,
      "rewards": ["250 Asura reputation points"],
      "next": [100361, 100380],
      "wiki": {"en": "A Little Help", "de": "Ein wenig Hilfe"}
    },
    "100338": {
      "name": "A Time for Heroes",
      "type": "primary",
      "givers": [453],
      "wiki": {"en": "A Time for Heroes", "de": "Eine Zeit für Helden"}
    },
    "100339": {
      "name": "Against the Charr",
      "type": "primary",
      "givers": [571],
      "next": [100433],
      "wiki": {"en": "Against the Charr", "de": "Gegen die Charr"}
    },
    "100340": {
      "name": "Against the Destroyers",
      "type": "primary",
      "campaign": 4,
      "region": 19,
      "xp": 10000,
      "rewards": ["1,000 Deldrimor reputation points"],
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
      "wiki": {"en": "Anything You Can Do", "de": "Was ich kann, könnt Ihr auch"}
    },
    "100342": {
      "name": "Assault on the Stronghold",
      "type": "primary",
      "givers": [307, 308],
      "requires": [100458],
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
      "wiki": {"en": "Be Very, Very Quiet...", "de": "Seid ganz, ganz still ..."}
    },
    "100345": {
      "name": "Bear Club for Women / Men",
      "type": "secondary",
      "givers": [249, 250],
      "skills": [2361],
      "rewards": ["100 Norn reputation points"],
      "wiki": {"en": "Bear Club for Women", "de": "Bärenkeule"}
    },
    "100346": {
      "name": "Blood Washes Blood",
      "type": "primary",
      "givers": [243],
      "requires": [100364],
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
      "wiki": {"en": "Charr-broiled Plans", "de": "Langsam geröstete Pläne"}
    },
    "100349": {
      "name": "Cold Vengeance",
      "type": "secondary",
      "givers": [627, 628],
      "xp": 10000,
      "gold": 2000,
      "wiki": {"en": "Cold Vengeance", "de": "Kalte Rache"}
    },
    "100350": {
      "name": "Cold as Ice",
      "type": "secondary",
      "givers": [315],
      "skills": [2356],
      "rewards": ["500 Norn reputation points", "Perfect Salvage Kit"],
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
      "wiki": {"en": "Crystal Method", "de": "Die Kristall-Methode"}
    },
    "100352": {
      "name": "Curse of the Nornbear",
      "type": "primary",
      "givers": [315],
      "requires": [100450],
      "next": [100364, 100454],
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
      "wiki": {"en": "Deeprunner's Map", "de": "Tiefenläufers Karte"}
    },
    "100354": {
      "name": "Defending the Breach",
      "type": "secondary",
      "givers": [387, 319],
      "xp": 5000,
      "gold": 1250,
      "wiki": {"en": "Defending the Breach", "de": "Die Bresche (Quest)"}
    },
    "100355": {
      "name": "Destruction's Depths",
      "type": "primary",
      "givers": [442],
      "requires": [100372],
      "next": [100338],
      "missions": [673],
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
      "wiki": {"en": "Destructive Research", "de": "Zerstörerische Forschung"}
    },
    "100357": {
      "name": "Dredging the Depths",
      "type": "secondary",
      "givers": [602, 603],
      "xp": 7500,
      "gold": 1500,
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
      "wiki": {"en": "Falling Out", "de": "Ausfall"}
    },
    "100360": {
      "name": "Final Round: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100407],
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
      "wiki": {"en": "Finding Gadd", "de": "Die Suche nach Gadd"}
    },
    "100362": {
      "name": "Finding the Bloodstone",
      "type": "primary",
      "givers": [213],
      "requires": [100361],
      "next": [100368],
      "missions": [664],
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
      "wiki": {"en": "Forbidden Fruit", "de": "Verbotene Frucht"}
    },
    "100366": {
      "name": "Forgotten Relics",
      "type": "secondary",
      "givers": [767],
      "skills": [2232],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "wiki": {"en": "Forgotten Relics", "de": "Vergessene Reliquien"}
    },
    "100367": {
      "name": "Frogstomp",
      "type": "secondary",
      "givers": [227],
      "xp": 5000,
      "gold": 1000,
      "next": [100370],
      "wiki": {"en": "Frogstomp", "de": "Ausgequakt"}
    },
    "100368": {
      "name": "Genius Operated Living Enchanted Manifestation",
      "type": "primary",
      "givers": [570],
      "requires": [100337, 100362, 100435],
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
      "wiki": {"en": "Giriff's War", "de": "Giriffs Krieg"}
    },
    "100370": {
      "name": "Give Peace a Chance",
      "type": "secondary",
      "givers": [227],
      "xp": 10000,
      "requires": [100367],
      "wiki": {"en": "Give Peace a Chance", "de": "Eine Chance für den Frieden"}
    },
    "100371": {
      "name": "Haunted",
      "type": "secondary",
      "givers": [273],
      "hero": [25],
      "xp": 15000,
      "wiki": {"en": "Haunted", "de": "Die Heimsuchung"}
    },
    "100372": {
      "name": "Heart of the Shiverpeaks",
      "type": "primary",
      "givers": [442],
      "xp": 2000,
      "rewards": ["250 Deldrimor reputation points"],
      "requires": [100389, 100441, 100443],
      "wiki": {"en": "Heart of the Shiverpeaks (quest)", "de": "Herz der Zittergipfel (Quest)"}
    },
    "100373": {
      "name": "Hero Tutorial",
      "type": "secondary",
      "givers": [606],
      "xp": 1000,
      "rewards": ["Burol Ironfist's Commendation"],
      "wiki": {"en": "Hero Tutorial", "de": "Helden-Tutorial"}
    },
    "100374": {
      "name": "In the Service of Revenge",
      "type": "secondary",
      "givers": [615],
      "skills": [2220, 2223],
      "rewards": ["300 Deldrimor reputation points", "Onyx Gemstone"],
      "requires": [100343],
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
      "wiki": {"en": "Insidious Remnants", "de": "Heimtückische Überreste"}
    },
    "100376": {
      "name": "Kathandrax's Crusher",
      "type": "secondary",
      "givers": [632, 633],
      "xp": 7500,
      "gold": 1500,
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
      "wiki": {"en": "Kilroy Stonekin's Punch-Out Extravaganza!", "de": "Kilroy Steinsipps Fausthieb-Fete"}
    },
    "100378": {
      "name": "Kilroy's Punchout Tournament",
      "type": "secondary",
      "givers": [619],
      "rewards": ["120 Deldrimor reputation points"],
      "requires": [100447],
      "wiki": {"en": "Kilroy's Punchout Tournament", "de": "Kilroys Turnier der Fliegenden Fäuste"}
    },
    "100379": {
      "name": "Krak's Cavalry",
      "type": "secondary",
      "givers": [369],
      "gold": 1000,
      "skills": [2216],
      "rewards": ["200 Deldrimor reputation points"],
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
      "wiki": {"en": "Lab Space", "de": "Labor-Suche"}
    },
    "100381": {
      "name": "Leader of the Pack",
      "type": "secondary",
      "givers": [626],
      "skills": [2379],
      "rewards": ["250 Norn reputation points", "Scroll of Hero's Insight"],
      "requires": [100352],
      "wiki": {"en": "Leader of the Pack", "de": "Rudelführer"}
    },
    "100382": {
      "name": "Little Workshop of Horrors",
      "type": "secondary",
      "givers": [459, 460],
      "xp": 7500,
      "gold": 1500,
      "requires": [100380],
      "wiki": {"en": "Little Workshop of Horrors", "de": "Die kleine Horror-Werkstatt"}
    },
    "100383": {
      "name": "Lost Souls",
      "type": "secondary",
      "givers": [769, 770],
      "xp": 7500,
      "gold": 1500,
      "wiki": {"en": "Lost Souls", "de": "Verlorene Seelen"}
    },
    "100384": {
      "name": "Lost Treasure of King Hundar",
      "type": "secondary",
      "givers": [380],
      "xp": 2500,
      "gold": 250,
      "rewards": ["The Chest of Wintersday Past appears"],
      "requires": [100353],
      "wiki": {"en": "Lost Treasure of King Hundar", "de": "Der verlorene Schatz König Hundars"}
    },
    "100385": {
      "name": "Mano a Norn-o",
      "type": "secondary",
      "givers": [257],
      "skills": [2228],
      "rewards": ["100 Ebon Vanguard reputation points", "Lockpick"],
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
      "wiki": {"en": "Norn Catering", "de": "Norn-Verköstigung"}
    },
    "100388": {
      "name": "Nornhood",
      "type": "secondary",
      "givers": [273],
      "hero": [23],
      "xp": 15000,
      "wiki": {"en": "Nornhood", "de": "Das Norn-Ritual"}
    },
    "100389": {
      "name": "Northern Allies",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1000 Norn reputation points", "Monumental Tapestry"],
      "wiki": {"en": "Northern Allies", "de": "Verbündete im Norden"}
    },
    "100390": {
      "name": "O Brave New World",
      "type": "secondary",
      "givers": [720],
      "skills": [2411],
      "rewards": ["100 Asura reputation points", "Essence of Celerity"],
      "requires": [100435],
      "wiki": {"en": "O Brave New World", "de": "Schöne neue Welt"}
    },
    "100391": {
      "name": "Plan A",
      "type": "secondary",
      "givers": [317],
      "skills": [2116],
      "rewards": ["100 Ebon Vanguard reputation points", "Lockpick"],
      "next": [100365],
      "wiki": {"en": "Plan A", "de": "Plan A"}
    },
    "100392": {
      "name": "Polymock: Defeat Blarp",
      "type": "secondary",
      "givers": [696],
      "rewards": ["200 Asura reputation points", "Ice Imp Polymock Piece"],
      "requires": [100398],
      "next": [100394],
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
      "wiki": {"en": "Polymock: Defeat Dune Teardrinker", "de": "Polymock: Besiegt Dune Tränentrinker"}
    },
    "100394": {
      "name": "Polymock: Defeat Fonk",
      "type": "secondary",
      "givers": [696],
      "rewards": ["250 Asura reputation points", "Earth Elemental Polymock Piece"],
      "requires": [100392],
      "next": [100395, 100397, 100393],
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
      "wiki": {"en": "Polymock: Defeat Grulhammer Silverfist", "de": "Polymock: Besiegt Grulhammer Silberfaust"}
    },
    "100396": {
      "name": "Polymock: Defeat Master Hoff",
      "type": "secondary",
      "givers": [696],
      "skills": [2224],
      "rewards": ["1,000 Asura reputation points", "Mirage Iboga Polymock Piece"],
      "requires": [100395, 100397, 100393],
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
      "wiki": {"en": "Polymock: Defeat Necromancer Volumandus", "de": "Polymock: Besiegt Nekromant Volumandus"}
    },
    "100398": {
      "name": "Polymock: Defeat Plurgg",
      "type": "secondary",
      "givers": [696],
      "rewards": ["100 Asura reputation points", "Kappa Polymock Piece"],
      "requires": [100399],
      "next": [100392],
      "wiki": {"en": "Polymock: Defeat Plurgg", "de": "Polymock: Besiegt Plurgg"}
    },
    "100399": {
      "name": "Polymock: Defeat Yulma",
      "type": "secondary",
      "givers": [696],
      "rewards": ["100 Asura reputation points", "Fire Imp Polymock Piece"],
      "next": [100398],
      "wiki": {"en": "Polymock: Defeat Yulma", "de": "Polymock: Besiegt Yulma"}
    },
    "100400": {
      "name": "Prenuptial Disagreement",
      "type": "secondary",
      "givers": [318, 319],
      "rewards": ["250 Norn reputation points", "Grail of Might"],
      "requires": [100345],
      "wiki": {"en": "Prenuptial Disagreement (male)", "de": "Voreheliche Verstimmung (männlich)"}
    },
    "100401": {
      "name": "Prenuptial Disagreement",
      "type": "secondary",
      "givers": [249, 250],
      "rewards": ["250 Norn reputation points", "Grail of Might"],
      "requires": [100345],
      "wiki": {"en": "Prenuptial Disagreement (female)", "de": "Voreheliche Verstimmung (weiblich)"}
    },
    "100402": {
      "name": "Punch the Clown",
      "type": "secondary",
      "givers": [619],
      "skills": [2215],
      "rewards": ["100 Deldrimor reputation points"],
      "next": [100377],
      "wiki": {"en": "Punch the Clown", "de": "Verhaut den Hampelmann"}
    },
    "100403": {
      "name": "Round 1: Fight!",
      "type": "secondary",
      "givers": [273],
      "skills": [2353, 2354, 2357],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "next": [100404],
      "wiki": {"en": "Round 1: Fight!", "de": "Ring frei zur ersten Runde!"}
    },
    "100404": {
      "name": "Round 2: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100403],
      "next": [100405],
      "wiki": {"en": "Round 2: Fight!", "de": "Ring frei zur zweiten Runde!"}
    },
    "100405": {
      "name": "Round 3: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100404],
      "next": [100406],
      "wiki": {"en": "Round 3: Fight!", "de": "Ring frei zur dritten Runde!"}
    },
    "100406": {
      "name": "Round 4: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100405],
      "next": [100407],
      "wiki": {"en": "Round 4: Fight!", "de": "Ring frei zur vierten Runde!"}
    },
    "100407": {
      "name": "Round 5: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100406],
      "next": [100360],
      "wiki": {"en": "Round 5: Fight!", "de": "Ring frei zur fünften Runde!"}
    },
    "100408": {
      "name": "Scrambled Reinforcements",
      "type": "secondary",
      "givers": [620, 621],
      "repeatable": true,
      "xp": 7500,
      "gold": 1500,
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
      "wiki": {"en": "Search for the Ebon Vanguard", "de": "Die Suche nach der Ebon-Vorhut"}
    },
    "100410": {
      "name": "Service: In Defense of the Eye",
      "type": "secondary",
      "givers": [257],
      "skills": [2420],
      "rewards": ["250 Ebon Vanguard reputation points", "Powerstone of Courage"],
      "requires": [100411],
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
      "wiki": {"en": "Service: Practice, Dummy", "de": "Dienst: Kampfübung"}
    },
    "100412": {
      "name": "Shadows in the Night",
      "type": "secondary",
      "givers": [626],
      "skills": [2384],
      "rewards": ["100 Norn reputation points", "Lockpick"],
      "requires": [100334],
      "wiki": {"en": "Shadows in the Night", "de": "Schatten in der Nacht"}
    },
    "100413": {
      "name": "Single Ugly Grawl Seeks Same for Mindless Destruction in Ascalon",
      "type": "secondary",
      "givers": [538],
      "skills": [2421],
      "rewards": ["150 Ebon Vanguard reputation points", "Lockpick"],
      "requires": [100365],
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
      "wiki": {"en": "Snowball Dominance", "de": "Schneeball-Dominanz"}
    },
    "100415": {
      "name": "Special Ops: Dragon's Gullet",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "wiki": {"en": "Special Ops: Dragon's Gullet", "de": "Spezialeinsatz: Drachenschlund"}
    },
    "100416": {
      "name": "Special Ops: Flame Temple Corridor",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "wiki": {"en": "Special Ops: Flame Temple Corridor", "de": "Spezialeinsatz: Flammentempel-Gang"}
    },
    "100417": {
      "name": "Special Ops: Grendich Courthouse",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "wiki": {"en": "Special Ops: Grendich Courthouse", "de": "Spezialeinsatz: Gerichtsgebäude in Grendich"}
    },
    "100418": {
      "name": "Tekks's War",
      "type": "secondary",
      "givers": [747, 748],
      "xp": 5000,
      "gold": 1250,
      "wiki": {"en": "Tekks's War", "de": "Tekks' Krieg"}
    },
    "100419": {
      "name": "Temple of the Damned",
      "type": "secondary",
      "givers": [750, 751],
      "xp": 7500,
      "gold": 1500,
      "requires": [100433],
      "wiki": {"en": "Temple of the Damned", "de": "Tempel der Verdammten"}
    },
    "100420": {
      "name": "The Anvil of Dragrimmar",
      "type": "secondary",
      "givers": [303, 304],
      "xp": 5000,
      "gold": 1250,
      "wiki": {"en": "The Anvil of Dragrimmar", "de": "Der Amboss des Dragrimmar"}
    },
    "100421": {
      "name": "The Arrow's Point",
      "type": "secondary",
      "givers": [395, 396],
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
      "wiki": {"en": "The Arrow's Point", "de": "Spitze Pfeile"}
    },
    "100422": {
      "name": "The Assassin's Revenge",
      "type": "secondary",
      "givers": [317],
      "rewards": ["150 Ebon Vanguard reputation points"],
      "requires": [100439],
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
      "wiki": {"en": "The Asura Trap", "de": "Die Asura-Falle"}
    },
    "100424": {
      "name": "The Beginning of the End",
      "type": "primary",
      "campaign": 4,
      "region": 18,
      "requires": [100573],
      "next": [100340],
      "wiki": {"en": "The Beginning of the End", "de": "Der Anfang vom Ende"}
    },
    "100425": {
      "name": "The Big Unfriendly Jotun",
      "type": "secondary",
      "givers": [369],
      "gold": 1000,
      "skills": [2222, 2423],
      "rewards": ["100 Deldrimor reputation points"],
      "wiki": {"en": "The Big Unfriendly Jotun", "de": "Der große, unfreundliche Jotun"}
    },
    "100426": {
      "name": "The Blade's Essence",
      "type": "secondary",
      "givers": [395, 396],
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
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
      "wiki": {"en": "The Cipher of Lyssa", "de": "Der Schlüssel von Lyssa"}
    },
    "100432": {
      "name": "The Cipher of Melandru",
      "type": "secondary",
      "givers": [341],
      "skills": [2412],
      "rewards": ["100 Asura reputation points"],
      "next": [100427, 100428, 100429, 100431],
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
      "wiki": {"en": "The Dawn of Rebellion", "de": "Der Anbruch der Rebellion"}
    },
    "100434": {
      "name": "The Destroyer Challenge",
      "type": "secondary",
      "givers": [453, 454],
      "skills": [2211],
      "rewards": ["150 Deldrimor reputation points", "Armor of Salvation"],
      "requires": [100356],
      "wiki": {"en": "The Destroyer Challenge", "de": "Die Zerstörer-Probe"}
    },
    "100435": {
      "name": "The Elusive Golemancer",
      "type": "primary",
      "givers": [463],
      "next": [100368],
      "missions": [664],
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
      "wiki": {"en": "The Great Norn Alemoot", "de": "Der Große Bierrat der Norn (weiblich)"}
    },
    "100438": {
      "name": "The Hunting of the Charr",
      "type": "secondary",
      "givers": [410],
      "skills": [2229],
      "rewards": ["250 Ebon Vanguard reputation points", "Powerstone of Courage"],
      "requires": [100359],
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
      "wiki": {"en": "The Imploding Past", "de": "Die implodierende Vergangenheit"}
    },
    "100440": {
      "name": "The Justiciar's End",
      "type": "secondary",
      "givers": [265],
      "xp": 15000,
      "rewards": ["250 Asura reputation points", "Scroll of Resurrection"],
      "requires": [100386],
      "wiki": {"en": "The Justiciar's End", "de": "Das Ende des Justiziars"}
    },
    "100441": {
      "name": "The Knowledgeable Asura",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1000 Asura reputation points", "Monumental Tapestry"],
      "requires": [100340],
      "wiki": {"en": "The Knowledgeable Asura", "de": "Die klugen Asura"}
    },
    "100442": {
      "name": "The Misanthropic Jotun Principle",
      "type": "secondary",
      "givers": [708, 709],
      "repeatable": true,
      "xp": 7500,
      "wiki": {"en": "The Misanthropic Jotun Principle", "de": "Ruhm und Missgunst"}
    },
    "100443": {
      "name": "The Missing Vanguard",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1,000 Ebon Vanguard reputation points", "Monumental Tapestry"],
      "requires": [100340],
      "wiki": {"en": "The Missing Vanguard", "de": "Die verschwundene Vorhut"}
    },
    "100444": {
      "name": "The Path to Revelations",
      "type": "secondary",
      "givers": [341],
      "skills": [2416],
      "rewards": ["100 Asura reputation points", "Kerrsh's Staff (unique item)"],
      "requires": [100430],
      "wiki": {"en": "The Path to Revelations", "de": "Der Weg zu Enthüllungen"}
    },
    "100445": {
      "name": "The Smell of Titan in the Morning",
      "type": "secondary",
      "givers": [317],
      "skills": [2233],
      "rewards": ["250 Ebon Vanguard reputation points", "Scroll of Hero's Insight"],
      "requires": [100443],
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
      "wiki": {"en": "The Throwdown in a Norn Town", "de": "In dieser Stadt macht Ihr ihn platt"}
    },
    "100448": {
      "name": "The Wedding",
      "type": "primary",
      "givers": [405],
      "requires": [100000],
      "wiki": {"en": "The Wedding", "de": "Die Hochzeit"}
    },
    "100449": {
      "name": "Then and Now, Here and There",
      "type": "secondary",
      "givers": [259],
      "hero": [24],
      "xp": 15000,
      "requires": [100443],
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
      "wiki": {"en": "Turning the Page", "de": "Das Blatt wendet sich"}
    },
    "100453": {
      "name": "Veiled Threat",
      "type": "secondary",
      "givers": [751, 765],
      "xp": 7500,
      "gold": 1500,
      "requires": [100433],
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
      "wiki": {"en": "Vision of the Raven Spirit", "de": "Vision des Rabengeists"}
    },
    "100455": {
      "name": "Warband of Brothers",
      "type": "primary",
      "campaign": 4,
      "region": 20,
      "requires": [100433],
      "next": [100458],
      "wiki": {"en": "Warband of Brothers", "de": "Brudertrupp"}
    },
    "100456": {
      "name": "Watch It Jiggle",
      "type": "secondary",
      "givers": [588, 589],
      "xp": 5000,
      "gold": 1250,
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
      "wiki": {"en": "Wintersday Cheer", "de": "Wintertagsgrüße"}
    },
    "100460": {
      "name": "Worthy Deeds (Done Dirt Cheap)",
      "type": "secondary",
      "givers": [315],
      "xp": 15000,
      "skills": [2358],
      "rewards": ["250 Norn reputation points"],
      "wiki": {"en": "Worthy Deeds (Done Dirt Cheap)", "de": "Ruhmreiche Taten (spottbillig erledigt)"}
    },
    "100461": {
      "name": "A Belt Pouch",
      "type": "secondary",
      "givers": [519],
      "xp": 1500,
      "gold": 75,
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
      "wiki": {"en": "A Formal Introduction", "de": "Eine förmliche Vorstellung"}
    },
    "100467": {
      "name": "A Letter Home",
      "type": "secondary",
      "givers": [481],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
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
      "wiki": {"en": "A Monstrous Revelation", "de": "Eine ungeheuere Enthüllung"}
    },
    "100471": {
      "name": "A New Escort",
      "type": "secondary",
      "givers": [530],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
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
      "wiki": {"en": "A Treaty's a Treaty (Hard mode)", "de": "Ein Vertrag ist ein Vertrag (Schwerer Modus)"}
    },
    "100475": {
      "name": "Advanced Defense Techniques",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [43, 118, 176, 299, 345, 424, 871, 973],
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
      "wiki": {"en": "Architect of Corruption (Hard mode)", "de": "Architekt der Verdorbenheit (Schwerer Modus)"}
    },
    "100489": {
      "name": "Artistic Endeavors",
      "type": "secondary",
      "givers": [646],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
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
      "wiki": {"en": "Assassin Insignia", "de": "Assassinen-Befähigung"}
    },
    "100491": {
      "name": "Assassination Attempt",
      "type": "secondary",
      "givers": [665],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Assist the Guards", "de": "Helft den Wächtern"}
    },
    "100493": {
      "name": "Attack the Kurzicks!",
      "type": "secondary",
      "givers": [595],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
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
      "wiki": {"en": "Cantha Courier Crisis (Hard mode)", "de": "Canthanische Kurierkrise (Schwerer Modus)"}
    },
    "100501": {
      "name": "Captured",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "Captured", "de": "Gefangen"}
    },
    "100502": {
      "name": "Capturing the Orrian Tome",
      "type": "secondary",
      "givers": [302],
      "next": [100618],
      "wiki": {"en": "Capturing the Orrian Tome", "de": "Den orrianischen Folianten erbeuten"}
    },
    "100503": {
      "name": "Cash Crops",
      "type": "secondary",
      "givers": [546],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "wiki": {"en": "Cash Crops", "de": "Ernte zum Verkauf"}
    },
    "100504": {
      "name": "Challenge of Strength",
      "type": "secondary",
      "givers": [607],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": {"en": "Challenge of Strength", "de": "Herausforderung der Kraft"}
    },
    "100505": {
      "name": "Chaos in Kryta",
      "type": "secondary",
      "givers": [254],
      "travel": 1,
      "xp": 1000,
      "wiki": {"en": "Chaos in Kryta", "de": "Chaos in Kryta"}
    },
    "100506": {
      "name": "Charting the Forests",
      "type": "secondary",
      "givers": [271],
      "xp": 5000,
      "gold": 200,
      "rewards": ["500 Kurzick faction", "Imperial Commendation"],
      "wiki": {"en": "Charting the Forests", "de": "Die Wälder kartographieren"}
    },
    "100507": {
      "name": "Charting the Jade Sea",
      "type": "secondary",
      "givers": [271],
      "xp": 5000,
      "gold": 200,
      "rewards": ["500 Luxon faction", "Imperial Commendation"],
      "wiki": {"en": "Charting the Jade Sea", "de": "Das Jademeer kartographieren"}
    },
    "100508": {
      "name": "Choose Your Secondary Profession (Factions)",
      "type": "primary",
      "givers": [787],
      "xp": 3500,
      "gold": 250,
      "rewards": ["Monastery Credit"],
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
      "wiki": {"en": "Cleansing the Silent Surf", "de": "Säuberung der Stummen Brandung (Schwerer Modus)"}
    },
    "100529": {
      "name": "Cleansing the Steel",
      "type": "primary",
      "givers": [210],
      "xp": 2500,
      "gold": 100,
      "requires": [100490],
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
      "wiki": {"en": "Closer to the Stars", "de": "Näher an den Sternen"}
    },
    "100535": {
      "name": "Condition Removal",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [154, 277, 787],
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
      "wiki": {"en": "Deadly Cargo (Hard mode)", "de": "Tödliche Fracht (Schwerer Modus)"}
    },
    "100539": {
      "name": "Death with Honor",
      "type": "secondary",
      "givers": [479],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "wiki": {"en": "Death with Honor", "de": "Ehrenvoller Tod"}
    },
    "100540": {
      "name": "Defend Fort Aspenwood",
      "type": "primary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "wiki": {"en": "Defend Fort Aspenwood", "de": "Fort Espenwald verteidigen"}
    },
    "100541": {
      "name": "Defense Against Hexes",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [67, 301],
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
      "wiki": {"en": "Discord Wallow Lyre", "de": "Misstönende Suhler-Lyra"}
    },
    "100543": {
      "name": "Disenchantment Course",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [69, 143, 990],
      "wiki": {"en": "Disenchantment Course", "de": "Entzauberungskurs"}
    },
    "100544": {
      "name": "Disruption",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [23, 162, 325, 399, 921],
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
      "wiki": {"en": "Elementalist Insignia", "de": "Elementarmagier-Befähigung"}
    },
    "100549": {
      "name": "Eliminate the Am Fah",
      "type": "secondary",
      "givers": [773],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Family Matters (Hard mode)", "de": "Familienangelegenheit (Schwerer Modus)"}
    },
    "100556": {
      "name": "Feed the Hungry",
      "type": "secondary",
      "givers": [363],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Fire in the Sky", "de": "Feuer am Himmel"}
    },
    "100561": {
      "name": "Forming a Party",
      "type": "secondary",
      "givers": [518],
      "xp": 1000,
      "gold": 10,
      "rewards": ["Monastery Credit"],
      "wiki": {"en": "Forming a Party", "de": "Eine Gruppe bilden"}
    },
    "100562": {
      "name": "Fort Aspenwood",
      "type": "primary",
      "givers": [324],
      "xp": 3000,
      "gold": 250,
      "requires": [100584],
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
      "wiki": {"en": "Free the Fur", "de": "Freie Felle"}
    },
    "100566": {
      "name": "Gain Zenmai",
      "type": "secondary",
      "givers": [728],
      "xp": 1500,
      "wiki": {"en": "Gain Zenmai", "de": "Zenmai aufnehmen"}
    },
    "100567": {
      "name": "Going Home",
      "type": "secondary",
      "givers": [794],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "Going Home", "de": "Zurück in die Heimat"}
    },
    "100568": {
      "name": "Haiju Lagoon",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["50 Victory Tokens"],
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
      "wiki": {"en": "Hopeless Romantic", "de": "Hoffnungsloser Romantiker"}
    },
    "100572": {
      "name": "Housing for Refugees",
      "type": "secondary",
      "givers": [764],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "Housing for Refugees", "de": "Unterkünfte für Flüchtlinge"}
    },
    "100573": {
      "name": "I Feel the Earth Move Under Cantha's Feet",
      "type": "primary",
      "givers": [548],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "wiki": {"en": "I Feel the Earth Move Under Cantha's Feet", "de": "Erschütterungen unter Cantha"}
    },
    "100574": {
      "name": "If It Weren't for Bad Luck....",
      "type": "secondary",
      "givers": [692],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": {"en": "If It Weren't for Bad Luck....", "de": "Pech gehabt ..."}
    },
    "100575": {
      "name": "Imperial Assistance",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "It Ends Here", "de": "Hier endet es"}
    },
    "100583": {
      "name": "Jaya Bluffs",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["50 Victory Tokens"],
      "wiki": {"en": "Jaya Bluffs (mission)", "de": "Jaya-Klippen (Mission)"}
    },
    "100584": {
      "name": "Journey to Cavalon",
      "type": "primary",
      "givers": [704],
      "xp": 4000,
      "rewards": ["250 Luxon faction", "1 Skill point"],
      "next": [100496],
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
      "wiki": {"en": "Little Creatures", "de": "Kleine Geschöpfe"}
    },
    "100594": {
      "name": "Little Lost Bear",
      "type": "secondary",
      "givers": [639],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Looking For Trouble", "de": "Auf der Suche nach Ärger"}
    },
    "100605": {
      "name": "Lost Treasure",
      "type": "attribute",
      "givers": [774],
      "xp": 4000,
      "gold": 175,
      "rewards": ["15 Attribute points"],
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
      "wiki": {"en": "Luxon Supply Lines", "de": "Nachschubwege der Luxon"}
    },
    "100607": {
      "name": "Luxury Goods",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "Luxury Goods", "de": "Luxusartikel"}
    },
    "100608": {
      "name": "Mantid Hatchlings",
      "type": "secondary",
      "givers": [657],
      "xp": 2000,
      "skills": [1, 26, 153, 194, 281, 296, 322, 382, 793, 1247],
      "next": [100663, 100660, 100665, 100659, 100664, 100658, 100661, 100662],
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
      "wiki": {"en": "Mayhem in the Market", "de": "Chaos am Markt"}
    },
    "100611": {
      "name": "Medical Emergency",
      "type": "secondary",
      "givers": [659],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Melodic Gaki Flute", "de": "Melodische Gaki-Flöte"}
    },
    "100613": {
      "name": "Memories of Purity",
      "type": "secondary",
      "givers": [502],
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
      "wiki": {"en": "Mesmer Insignia", "de": "Mesmer-Befähigung"}
    },
    "100615": {
      "name": "Message on a Dragon Scale",
      "type": "secondary",
      "givers": [672],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "1 Luxon Totem"],
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
      "wiki": {"en": "Minions Gone Wild", "de": "Wild gewordene Diener"}
    },
    "100618": {
      "name": "Minister's Test",
      "type": "secondary",
      "givers": [302],
      "xp": 2500,
      "requires": [100502],
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
      "wiki": {"en": "Ministry of Oppression (Hard mode)", "de": "Ministerium der Unterdrückung (Schwerer Modus)"}
    },
    "100621": {
      "name": "Missing Daughter",
      "type": "secondary",
      "givers": [771],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Monk Insignia", "de": "Mönchs-Befähigung"}
    },
    "100623": {
      "name": "More Cowbell",
      "type": "secondary",
      "givers": [660],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": {"en": "More Cowbell", "de": "Mehr Kuhglocke"}
    },
    "100624": {
      "name": "Naga Oil",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 250,
      "next": [100693],
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
      "wiki": {"en": "Night Raiders", "de": "Nacht-Plünderer"}
    },
    "100627": {
      "name": "Old Friends, Dark Times",
      "type": "secondary",
      "givers": [196],
      "gold": 100,
      "requires": [100625],
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
      "wiki": {"en": "Opening Strike", "de": "Eröffnungsschlag"}
    },
    "100629": {
      "name": "Outcasts in the Quarry",
      "type": "secondary",
      "givers": [583],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "wiki": {"en": "Outcasts in the Quarry", "de": "Geächtete im Steinbruch"}
    },
    "100630": {
      "name": "Passing the Buck",
      "type": "secondary",
      "givers": [301],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "Passing the Buck", "de": "Den Schwarzen Peter weitergeben"}
    },
    "100631": {
      "name": "Pest Control",
      "type": "secondary",
      "givers": [629],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
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
      "wiki": {"en": "Power Surge", "de": "Kraftwelle"}
    },
    "100633": {
      "name": "Problem Salving",
      "type": "secondary",
      "givers": [275],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Ranger Insignia", "de": "Waldläufer-Befähigung"}
    },
    "100641": {
      "name": "Raze the Roost",
      "type": "secondary",
      "campaign": 2,
      "region": 8,
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
      "wiki": {"en": "Return of the Yeti", "de": "Die Rückkehr des Yeti"}
    },
    "100650": {
      "name": "Revenge of the Yeti",
      "type": "secondary",
      "givers": [424],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
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
      "wiki": {"en": "Seek out Brother Tosai", "de": "Sucht nach Bruder Tosai"}
    },
    "100667": {
      "name": "Seeking Shelter",
      "type": "secondary",
      "givers": [435],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Seeking a Cure", "de": "Auf der Suche nach einem Heilmittel"}
    },
    "100669": {
      "name": "Seitung Harbor (Mission)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["75 Victory Tokens"],
      "wiki": {"en": "Seitung Harbor (mission)", "de": "Hafen von Seitung (Mission)"}
    },
    "100670": {
      "name": "Seitung Harbor (mission 2)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
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
      "wiki": {"en": "Shackled Spirits", "de": "Gefesselte Geister"}
    },
    "100673": {
      "name": "Shing Jea Monastery",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
      "wiki": {"en": "Shing Jea Monastery (mission)", "de": "Kloster von Shing Jea (Mission)"}
    },
    "100674": {
      "name": "Skill Chaining",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [14, 76, 85, 104, 171, 200, 271, 311, 371, 396, 433, 1018, 1028, 1133, 1218, 1225],
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
      "wiki": {"en": "Skin the Snake", "de": "Häutet die Schlange"}
    },
    "100676": {
      "name": "Snaring Course",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [234, 349, 392, 985],
      "wiki": {"en": "Snaring Course", "de": "Fallenstellkurs"}
    },
    "100677": {
      "name": "Song and Stone",
      "type": "secondary",
      "givers": [204],
      "xp": 5000,
      "gold": 350,
      "rewards": ["1,000 Kurzick faction", "Equipment Requisition"],
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
      "wiki": {"en": "Sparring Elements", "de": "Duell mit den Elementen"}
    },
    "100680": {
      "name": "Speak with Headmaster Amara (Monk)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100601],
      "wiki": {"en": "Speak with Headmaster Amara (Monk)", "de": "Sprecht mit Großmeisterin Amara (Mönchin)"}
    },
    "100681": {
      "name": "Speak with Headmaster Greico (Ranger)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100602],
      "wiki": {"en": "Speak with Headmaster Greico (Ranger)", "de": "Sprecht mit Großmeister Greico (Waldläufer)"}
    },
    "100682": {
      "name": "Speak with Headmaster Kaa (Mesmer)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100597],
      "wiki": {"en": "Speak with Headmaster Kaa (Mesmer)", "de": "Sprecht mit Großmeister Kaa (Mesmer)"}
    },
    "100683": {
      "name": "Speak with Headmaster Kuju (Necromancer)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100599],
      "wiki": {"en": "Speak with Headmaster Kuju (Necromancer)", "de": "Sprecht mit Großmeisterin Kuju (Nekromantin)"}
    },
    "100684": {
      "name": "Speak with Headmaster Lee (Assassin)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100596],
      "wiki": {"en": "Speak with Headmaster Lee (Assassin)", "de": "Sprecht mit Großmeisterin Lee (Assassinin)"}
    },
    "100685": {
      "name": "Speak with Headmaster Quin (Ritualist)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100598],
      "wiki": {"en": "Speak with Headmaster Quin (Ritualist)", "de": "Sprecht mit Großmeisterin Quin (Ritualistin)"}
    },
    "100686": {
      "name": "Speak with Headmaster Vhang (Elementalist)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100600],
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
      "wiki": {"en": "Speak with Headmaster Zhan (Warrior)", "de": "Sprecht mit Großmeister Zhan (Krieger)"}
    },
    "100688": {
      "name": "Spirit of the Celebration",
      "type": "secondary",
      "campaign": 2,
      "region": 11,
      "rewards": ["Imperial Mask Token"],
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
      "wiki": {"en": "Stale Mate", "de": "Schachmatt"}
    },
    "100690": {
      "name": "Stemming the Tide",
      "type": "secondary",
      "givers": [397],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Study Buddy", "de": "Paukergemeinschaft"}
    },
    "100695": {
      "name": "Sunspears in Cantha",
      "type": "secondary",
      "givers": [728],
      "travel": 3,
      "xp": 1000,
      "next": [100831],
      "wiki": {"en": "Sunspears in Cantha", "de": "Sonnenspeere in Cantha"}
    },
    "100696": {
      "name": "Take My Sister, Please",
      "type": "event",
      "givers": [286],
      "event": 1,
      "rewards": ["1 Celestial Miniature Token"],
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
      "wiki": {"en": "Temple of the Dredge", "de": "Tempel der Schaufler"}
    },
    "100700": {
      "name": "The Afflicted Guard",
      "type": "secondary",
      "givers": [363],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "The Afflicted Guard", "de": "Der befallene Wächter"}
    },
    "100701": {
      "name": "The Agriculturist",
      "type": "secondary",
      "givers": [327],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
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
      "wiki": {"en": "The Ancient Forest", "de": "Der alte Wald"}
    },
    "100703": {
      "name": "The Beak of Darkness",
      "type": "secondary",
      "givers": [221],
      "xp": 3500,
      "gold": 275,
      "rewards": ["750 Kurzick faction"],
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
      "wiki": {"en": "The Big Bang", "de": "Der große Knall"}
    },
    "100705": {
      "name": "The Bog Beast of Bokku",
      "type": "secondary",
      "givers": [277],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "wiki": {"en": "The Bog Beast of Bokku", "de": "Das Sumpfmonster von Bokku"}
    },
    "100706": {
      "name": "The Box of Illusions",
      "type": "secondary",
      "givers": [430],
      "xp": 2500,
      "gold": 100,
      "wiki": {"en": "The Box of Illusions", "de": "Die Schatulle der Illusionen"}
    },
    "100707": {
      "name": "The Captured Son",
      "type": "secondary",
      "givers": [366],
      "xp": 4000,
      "gold": 500,
      "rewards": ["Monastery Credit"],
      "wiki": {"en": "The Captured Son", "de": "Der gefangene Sohn"}
    },
    "100708": {
      "name": "The Challenge",
      "type": "secondary",
      "givers": [403],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "The Defenders of the Forest", "de": "Die Verteidiger des Waldes"}
    },
    "100713": {
      "name": "The Dragon Hunter",
      "type": "secondary",
      "givers": [311],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "wiki": {"en": "The Dragon Hunter", "de": "Der Drachenjäger"}
    },
    "100714": {
      "name": "The Drunken Master",
      "type": "secondary",
      "givers": [364],
      "xp": 2000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": {"en": "The Drunken Master", "de": "Der betrunkene Meister"}
    },
    "100715": {
      "name": "The Emperor in Peril",
      "type": "secondary",
      "givers": [608],
      "xp": 2000,
      "gold": 175,
      "next": [100731],
      "wiki": {"en": "The Emperor in Peril", "de": "Kaiser in Gefahr"}
    },
    "100716": {
      "name": "The Experimental Weaponsmith",
      "type": "secondary",
      "givers": [362],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
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
      "wiki": {"en": "The Final Confrontation", "de": "Die letzte Gegenüberstellung"}
    },
    "100718": {
      "name": "The Final Confrontation (Hard mode)",
      "type": "secondary",
      "givers": [339],
      "xp": 20000,
      "rewards": ["Imperial Dragon's Tear", "Imperial Dragon's Tear"],
      "requires": [100717, 100639],
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
      "wiki": {"en": "The Halcyon Job", "de": "Der Halkyon-Job"}
    },
    "100722": {
      "name": "The Impossible Sea Monster",
      "type": "secondary",
      "givers": [289],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
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
      "wiki": {"en": "The Jade Arena", "de": "Die Jade-Arena"}
    },
    "100724": {
      "name": "The Jade Quarry (Kurzick quest)",
      "type": "primary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "requires": [100585],
      "wiki": {"en": "The Jade Quarry (Kurzick quest)", "de": "Der Jadesteinbruch (Kurzick-Quest)"}
    },
    "100725": {
      "name": "The Jade Quarry (Luxon quest)",
      "type": "primary",
      "givers": [324],
      "xp": 3000,
      "gold": 250,
      "requires": [100584],
      "wiki": {"en": "The Jade Quarry (Luxon quest)", "de": "Der Jadesteinbruch (Luxon-Quest)"}
    },
    "100726": {
      "name": "The Kaguchi Brothers",
      "type": "secondary",
      "givers": [398],
      "profession": 1,
      "xp": 2500,
      "gold": 100,
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
      "wiki": {"en": "The Knights Who Say Nian", "de": "Die Ritter, die Nian sagen"}
    },
    "100728": {
      "name": "The Missing Corpses",
      "type": "secondary",
      "givers": [465],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "The Rampaging Yetis", "de": "Die randalierenden Yetis"}
    },
    "100733": {
      "name": "The Red Frog",
      "type": "secondary",
      "givers": [377],
      "xp": 2500,
      "gold": 100,
      "requires": [100640],
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
      "wiki": {"en": "The Rescue Attempt (Hard mode)", "de": "Der Rettungsversuch (Schwerer Modus)"}
    },
    "100736": {
      "name": "The Rite of Valor",
      "type": "secondary",
      "givers": [340],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
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
      "wiki": {"en": "The Shrine of Maat", "de": "Der Schrein des Maat"}
    },
    "100741": {
      "name": "The Sickened Village",
      "type": "secondary",
      "givers": [282],
      "xp": 2500,
      "gold": 100,
      "requires": [100622],
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
      "wiki": {"en": "The Siege at Tsumei Village", "de": "Die Belagerung des Dorfes Tsumei"}
    },
    "100743": {
      "name": "The Stone of the Elements",
      "type": "secondary",
      "givers": [344],
      "xp": 2500,
      "gold": 100,
      "requires": [100548],
      "wiki": {"en": "The Stone of the Elements", "de": "Der Stein der Elemente (Quest)"}
    },
    "100744": {
      "name": "The Thieving Nanny",
      "type": "secondary",
      "givers": [456],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
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
      "wiki": {"en": "The Threat Grows", "de": "Die Bedrohung wächst"}
    },
    "100746": {
      "name": "The Xunlai Agent",
      "type": "secondary",
      "givers": [452],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Togo's Ultimatum", "de": "Togos Ultimatum"}
    },
    "100755": {
      "name": "Too High a Price",
      "type": "secondary",
      "givers": [336],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
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
      "wiki": {"en": "Trading Blows (Hard mode)", "de": "Schlagabtausch (Schwerer Modus)"}
    },
    "100768": {
      "name": "Tsumei Village",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["75 Victory Tokens"],
      "wiki": {"en": "Tsumei Village (mission)", "de": "Dorf Tsumei (Mission)"}
    },
    "100769": {
      "name": "Tsumei Village (mission 2)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
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
      "wiki": {"en": "Violence in the Streets (Hard mode)", "de": "Gewalt auf den Straßen (Schwerer Modus)"}
    },
    "100774": {
      "name": "Wardens On the March",
      "type": "secondary",
      "givers": [221],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
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
      "wiki": {"en": "When Kappa Attack (Hard mode)", "de": "Kappa-Angriff (Schwerer Modus)"}
    },
    "100785": {
      "name": "Wicked Wardens",
      "type": "secondary",
      "givers": [679],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Kurzick faction", "Equipment Requisition"],
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
      "wiki": {"en": "A Deal's a Deal", "de": "Geschäft ist Geschäft"}
    },
    "100790": {
      "name": "A Decayed Monument",
      "type": "secondary",
      "givers": [500],
      "xp": 2000,
      "gold": 200,
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
      "wiki": {"en": "A Delayed Delivery", "de": "Eine verspätete Lieferung"}
    },
    "100792": {
      "name": "A Father's Fate",
      "type": "secondary",
      "givers": [535],
      "xp": 500,
      "gold": 50,
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
      "wiki": {"en": "A Fool's Luck", "de": "Das Glück eines Narren"}
    },
    "100796": {
      "name": "A Friend in Need",
      "type": "secondary",
      "givers": [761],
      "xp": 250,
      "gold": 100,
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
      "wiki": {"en": "A Ghostly Request", "de": "Rache für einen Geist"}
    },
    "100798": {
      "name": "A Hidden Threat",
      "type": "secondary",
      "givers": [531],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points"],
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
      "wiki": {"en": "A Little Recon", "de": "Ein bisschen Aufklärung"}
    },
    "100803": {
      "name": "A Loose Cannon",
      "type": "secondary",
      "givers": [533],
      "xp": 500,
      "gold": 50,
      "wiki": {"en": "A Loose Cannon", "de": "Eine öffentliche Gefahr"}
    },
    "100804": {
      "name": "A Message Home",
      "type": "secondary",
      "givers": [521],
      "xp": 1500,
      "gold": 125,
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
      "wiki": {"en": "A New Guide", "de": "Ein neuer Fremdenführer"}
    },
    "100808": {
      "name": "A Peaceful Solution",
      "type": "secondary",
      "givers": [527],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation"],
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
      "wiki": {"en": "A Perplexing Plague", "de": "Eine geheimnisvolle Seuche"}
    },
    "100810": {
      "name": "A Personal Vault",
      "type": "secondary",
      "givers": [493],
      "xp": 500,
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
      "wiki": {"en": "A Tasty Morsel", "de": "Ein Leckerbissen"}
    },
    "100818": {
      "name": "A Thorn in Varesh's Side",
      "type": "secondary",
      "givers": [482],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
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
      "wiki": {"en": "All Alone in the Darkness", "de": "Alleine in der Dunkelheit"}
    },
    "100821": {
      "name": "All for One and One for Justice",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
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
      "wiki": {"en": "And a Hero Shall Lead Them", "de": "Neue Helden braucht das Land"}
    },
    "100825": {
      "name": "Anger of the Stone Face",
      "type": "secondary",
      "givers": [359],
      "xp": 1000,
      "gold": 100,
      "requires": [101001],
      "wiki": {"en": "Anger of the Stone Face", "de": "Der Zorn des Steinernen Antlitzes"}
    },
    "100826": {
      "name": "Armored Transport",
      "type": "secondary",
      "givers": [100],
      "xp": 500,
      "gold": 20,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "2 Tanned Hide Squares", "2 Bolt of Cloths"],
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
      "wiki": {"en": "Big News, Small Package", "de": "Stückwerk"}
    },
    "100835": {
      "name": "Blueprint of the Fall",
      "type": "secondary",
      "givers": [561],
      "xp": 2500,
      "rewards": ["50 Lightbringer points", "Inscribed Secret"],
      "requires": [100875],
      "wiki": {"en": "Blueprint of the Fall", "de": "Licht ins Dunkel"}
    },
    "100836": {
      "name": "Botanical Research",
      "type": "secondary",
      "givers": [245],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
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
      "wiki": {"en": "Breaking the Broken", "de": "Angriff ist die beste Verteidigung"}
    },
    "100841": {
      "name": "Brood Wars",
      "type": "instance",
      "givers": [248],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "requires": [100839],
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
      "wiki": {"en": "Capturing the Signet of Capture", "de": "Das Siegel der Erbeutung"}
    },
    "100847": {
      "name": "Catch of the Day",
      "type": "secondary",
      "givers": [494],
      "xp": 1000,
      "gold": 125,
      "rewards": ["10 Sunspear Promotion Points"],
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
      "wiki": {"en": "Centaur Concerns", "de": "Unter Zentauren"}
    },
    "100850": {
      "name": "Chasing Zenmai",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
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
      "wiki": {"en": "Coffer of Joko", "de": "Jokos Schatulle"}
    },
    "100853": {
      "name": "Command Training",
      "type": "secondary",
      "givers": [235],
      "xp": 250,
      "gold": 125,
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
      "wiki": {"en": "Data Mining", "de": "Datensuche"}
    },
    "100860": {
      "name": "Deathbringer Company",
      "type": "instance",
      "givers": [753],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
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
      "wiki": {"en": "Defender's Choice", "de": "Die Wahl des Verteidigers"}
    },
    "100862": {
      "name": "Desperate Measures",
      "type": "secondary",
      "givers": [777],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
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
      "wiki": {"en": "Destroy the Harpies", "de": "Vernichtet die Harpyien"}
    },
    "100864": {
      "name": "Destroy the Ungrateful Slaves",
      "type": "secondary",
      "givers": [298],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": {"en": "Destroy the Ungrateful Slaves", "de": "Vernichtet die undankbaren Sklaven"}
    },
    "100865": {
      "name": "Diamond in the Rough",
      "type": "secondary",
      "givers": [455],
      "xp": 1000,
      "gold": 100,
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
      "wiki": {"en": "Dismember the Titans", "de": "Nieder mit den Titanen"}
    },
    "100867": {
      "name": "Double Dog Dare",
      "type": "secondary",
      "givers": [715],
      "xp": 2000,
      "gold": 200,
      "requires": [101017],
      "wiki": {"en": "Double Dog Dare", "de": "Schatzsuche"}
    },
    "100868": {
      "name": "Double Your Pleasure and RUN!",
      "type": "event",
      "givers": [766],
      "event": 11,
      "rewards": ["Ghoulish Accessory Token"],
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
      "wiki": {"en": "Douse Your Enthusiasm", "de": "O heiliger Sankt Florian"}
    },
    "100870": {
      "name": "Down on the Bayou",
      "type": "secondary",
      "givers": [449, 450],
      "xp": 1500,
      "gold": 125,
      "rewards": ["10 Sunspear points"],
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
      "wiki": {"en": "Drake in a Cage", "de": "Ein Lindwurm im Käfig"}
    },
    "100872": {
      "name": "Drakes on the Plain",
      "type": "secondary",
      "givers": [416],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
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
      "wiki": {"en": "Drink of the Gods", "de": "Trunk der Götter"}
    },
    "100874": {
      "name": "Eavesdropping",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
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
      "wiki": {"en": "Faded Memory", "de": "Verblasste Erinnerung"}
    },
    "100879": {
      "name": "Family Soul",
      "type": "secondary",
      "givers": [552],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
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
      "wiki": {"en": "Family Ties (Nightfall quest)", "de": "Familienbande (Nightfall)"}
    },
    "100881": {
      "name": "Feast of Bokka",
      "type": "secondary",
      "givers": [244],
      "xp": 1500,
      "gold": 450,
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
      "wiki": {"en": "Find the Stolen Presents", "de": "Findet die gestohlenen Geschenke"}
    },
    "100884": {
      "name": "Finding a Purpose",
      "type": "secondary",
      "givers": [343],
      "xp": 2500,
      "wiki": {"en": "Finding a Purpose", "de": "Der Sinn des Lebens"}
    },
    "100885": {
      "name": "First Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "next": [100989],
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
      "wiki": {"en": "Fish in a Barrel", "de": "Fische im Fass"}
    },
    "100887": {
      "name": "Flamingo-ing... going... gone.",
      "type": "secondary",
      "givers": [560],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
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
      "wiki": {"en": "For a Price", "de": "Für einen Preis"}
    },
    "100891": {
      "name": "Forgotten Retribution",
      "type": "secondary",
      "givers": [372],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "wiki": {"en": "Forgotten Retribution", "de": "Vergessene Rache"}
    },
    "100892": {
      "name": "Foundry Breakout",
      "type": "instance",
      "givers": [703],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "wiki": {"en": "Foundry Breakout", "de": "Raus aus dem Inferno"}
    },
    "100893": {
      "name": "Fury of a Grieving Heart",
      "type": "secondary",
      "givers": [211, 212],
      "xp": 1500,
      "gold": 125,
      "requires": [101067],
      "wiki": {"en": "Fury of a Grieving Heart", "de": "Der Zorn eines trauernden Herzens"}
    },
    "100894": {
      "name": "Gain Goren",
      "type": "secondary",
      "givers": [590],
      "xp": 2500,
      "next": [100988],
      "wiki": {"en": "Gain Goren", "de": "Goren aufnehmen"}
    },
    "100895": {
      "name": "Gain Jin",
      "type": "secondary",
      "givers": [625],
      "xp": 2500,
      "wiki": {"en": "Gain Jin", "de": "Jin aufnehmen"}
    },
    "100896": {
      "name": "Gain Margrid",
      "type": "secondary",
      "givers": [658],
      "xp": 2500,
      "requires_missions": [528],
      "wiki": {"en": "Gain Margrid", "de": "Margrid aufnehmen"}
    },
    "100897": {
      "name": "Gain Master of Whispers",
      "type": "secondary",
      "givers": [299],
      "xp": 2500,
      "wiki": {"en": "Gain Master of Whispers", "de": "Den Meister der Gerüchte aufnehmen"}
    },
    "100898": {
      "name": "Gain Norgu",
      "type": "secondary",
      "givers": [682],
      "xp": 2500,
      "next": [100954],
      "wiki": {"en": "Gain Norgu", "de": "Norgu aufnehmen"}
    },
    "100899": {
      "name": "Gain Olias",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
      "wiki": {"en": "Gain Olias", "de": "Olias aufnehmen"}
    },
    "100900": {
      "name": "Gain Sousuke",
      "type": "secondary",
      "givers": [730],
      "xp": 2500,
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
      "wiki": {"en": "Ghosts in the Graveyard", "de": "Heimleuchten"}
    },
    "100904": {
      "name": "Gift of the Djinn",
      "type": "secondary",
      "givers": [579, 580],
      "xp": 4000,
      "gold": 1000,
      "rewards": ["2 Trade Contracts"],
      "wiki": {"en": "Gift of the Djinn", "de": "Geschenk der Dschinn"}
    },
    "100905": {
      "name": "Good Demon Hunting",
      "type": "secondary",
      "givers": [622],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "wiki": {"en": "Good Demon Hunting", "de": "Jagd auf den Dämonen"}
    },
    "100906": {
      "name": "Goren's Stuff: Part 1",
      "type": "secondary",
      "givers": [591],
      "xp": 2000,
      "requires": [100837],
      "next": [100907],
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
      "wiki": {"en": "Greed and Regret", "de": "Gier und Reue"}
    },
    "100909": {
      "name": "Crypt-ology",
      "type": "secondary",
      "givers": [598, 599],
      "xp": 1500,
      "gold": 125,
      "next": [100903],
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
      "wiki": {"en": "Heart or Mind: Ronjok in Danger", "de": "Herz oder Verstand: Ronjok in Gefahr"}
    },
    "100913": {
      "name": "Herds to the Slaughter",
      "type": "secondary",
      "givers": [495],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "Herds to the Slaughter", "de": "Ein guter Hirte"}
    },
    "100914": {
      "name": "Hog Hunt",
      "type": "secondary",
      "givers": [719],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points"],
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
      "wiki": {"en": "Holding the Line", "de": "Haltet die Stellung"}
    },
    "100916": {
      "name": "Hole of Istan",
      "type": "primary",
      "givers": [272],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
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
      "wiki": {"en": "Hunted!", "de": "Gejagt!"}
    },
    "100921": {
      "name": "Identity Theft",
      "type": "secondary",
      "givers": [614],
      "xp": 500,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points", "Identification Kit (25 uses)", "Battle Commendation"],
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
      "wiki": {"en": "In Defense of Theatre", "de": "Verteidigung des Theaters"}
    },
    "100923": {
      "name": "Insatiable Appetite",
      "type": "instance",
      "givers": [490],
      "repeatable": true,
      "rewards": ["Branch of Juni Berries"],
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
      "wiki": {"en": "Interception", "de": "Reiseunterbrechung"}
    },
    "100925": {
      "name": "Into Chahbek Village",
      "type": "primary",
      "givers": [383],
      "next": [100974],
      "missions": [556],
      "wiki": {"en": "Into Chahbek Village", "de": "Nach Chahbek"}
    },
    "100926": {
      "name": "Into the Fire",
      "type": "secondary",
      "givers": [183, 184],
      "xp": 2500,
      "gold": 200,
      "next": [101030],
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
      "wiki": {"en": "Isle of the Dead (quest)", "de": "Die Insel der Toten"}
    },
    "100929": {
      "name": "Jedur, the Youngest Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
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
      "wiki": {"en": "Koss's Elixir", "de": "Koss' Elixier"}
    },
    "100934": {
      "name": "Last of the Breed",
      "type": "secondary",
      "givers": [328],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
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
      "wiki": {"en": "Leaving a Legacy", "de": "Leute für Kormir"}
    },
    "100936": {
      "name": "Loyal 'til the End",
      "type": "secondary",
      "givers": [676],
      "xp": 1500,
      "gold": 25,
      "rewards": ["15 Sunspear Promotion Points"],
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
      "wiki": {"en": "Mallyx the Unyielding (quest)", "de": "Mallyx der Unnachgiebige (Quest)"}
    },
    "100939": {
      "name": "Map-Travel Inventor",
      "type": "secondary",
      "givers": [412],
      "xp": 250,
      "gold": 50,
      "wiki": {"en": "Map-Travel Inventor", "de": "Die Kartenerfinderin"}
    },
    "100940": {
      "name": "Material Girl",
      "type": "secondary",
      "givers": [101],
      "xp": 500,
      "gold": 100,
      "rewards": ["5 Sunspear Promotion Points", "Expert Salvage Kit (25 uses)"],
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
      "wiki": {"en": "Mirza's Last Stand", "de": "Mirzas letztes Gefecht"}
    },
    "100944": {
      "name": "Misela, the Middle Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
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
      "wiki": {"en": "Moa'vu'Kaal, Awakened", "de": "Die Erweckung des Moa'vu'Kaal"}
    },
    "100947": {
      "name": "Money Back Guarantee",
      "type": "secondary",
      "givers": [575, 576],
      "rewards": ["Margonite Gemstone", "Stygian Gemstone", "Titan Gemstone", "Torment Gemstone"],
      "requires": [100884],
      "wiki": {"en": "Money Back Guarantee", "de": "Geld-zurück-Garantie"}
    },
    "100948": {
      "name": "Money on the Side",
      "type": "secondary",
      "givers": [676],
      "xp": 500,
      "gold": 200,
      "wiki": {"en": "Money on the Side", "de": "Nebeneinkünfte"}
    },
    "100949": {
      "name": "Mutu, the Oldest Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
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
      "wiki": {"en": "Mysterious Message (Nightfall quest)", "de": "Rätselhafte Nachricht (Nightfall)"}
    },
    "100951": {
      "name": "Need More Stuff",
      "type": "secondary",
      "givers": [246],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "Belt Pouch"],
      "wiki": {"en": "Need More Stuff", "de": "Braucht mehr Sachen"}
    },
    "100952": {
      "name": "Never Fight Alone",
      "type": "secondary",
      "givers": [644, 645],
      "xp": 250,
      "gold": 25,
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
      "wiki": {"en": "Norgu's Nightfall", "de": "Norgus Finsternis"}
    },
    "100955": {
      "name": "Old Friends",
      "type": "secondary",
      "givers": [195],
      "xp": 1000,
      "gold": 150,
      "next": [100889],
      "wiki": {"en": "Old Friends", "de": "Alte Freunde"}
    },
    "100956": {
      "name": "Old Woman River",
      "type": "secondary",
      "givers": [760],
      "xp": 2500,
      "gold": 200,
      "requires_missions": [459],
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
      "wiki": {"en": "Open the Flood Gates of Death", "de": "Öffnet die Schleusen des Todes"}
    },
    "100961": {
      "name": "Out of Kourna",
      "type": "secondary",
      "givers": [624],
      "xp": 1,
      "wiki": {"en": "Out of Kourna", "de": "Jenseits von Kourna"}
    },
    "100962": {
      "name": "Pilgrimage",
      "type": "secondary",
      "givers": [693],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
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
      "wiki": {"en": "Plague in Cantha", "de": "Eine Seuche in Cantha"}
    },
    "100964": {
      "name": "Plague of Frogs",
      "type": "secondary",
      "givers": [564],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
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
      "wiki": {"en": "Primary Training", "de": "Primärtraining"}
    },
    "100968": {
      "name": "Proof of Courage",
      "type": "secondary",
      "givers": [666],
      "xp": 500,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points"],
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
      "wiki": {"en": "Puzzling Parchment", "de": "Rätselhafte Pergamentschrift"}
    },
    "100971": {
      "name": "Quality Steel",
      "type": "secondary",
      "givers": [699],
      "xp": 500,
      "gold": 20,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "2 Iron Ingots", "2 Wood Planks"],
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
      "wiki": {"en": "Queen of the Quarry", "de": "Königin des Steinbruchs"}
    },
    "100974": {
      "name": "Quiz the Recruits",
      "type": "primary",
      "givers": [697, 698],
      "xp": 250,
      "next_missions": [556],
      "missions": [556],
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
      "wiki": {"en": "Rally The Princes", "de": "Sammelt die Fürsten"}
    },
    "100977": {
      "name": "Rally the Recruits (Tutorial)",
      "type": "primary",
      "givers": [383],
      "xp": 2000,
      "skills": [322],
      "next": [100925],
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
      "wiki": {"en": "Reclaiming the Temple", "de": "Rückeroberung des Tempels"}
    },
    "100980": {
      "name": "Refuse the King",
      "type": "secondary",
      "givers": [298],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
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
      "wiki": {"en": "Requiem for a Brain", "de": "Requiem für ein Gehirn"}
    },
    "100982": {
      "name": "Return of the Undead King",
      "type": "secondary",
      "givers": [429],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
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
      "wiki": {"en": "Rising Suns", "de": "Aufgehende Sonnen"}
    },
    "100984": {
      "name": "Rising in the Ranks: First Spear",
      "type": "attribute",
      "givers": [411],
      "xp": 2000,
      "rewards": ["15 Attribute points"],
      "requires": [100985],
      "wiki": {"en": "Rising in the Ranks: First Spear", "de": "Die Karriereleiter: Erster Speer"}
    },
    "100985": {
      "name": "Rising in the Ranks: Master Sergeant",
      "type": "attribute",
      "givers": [411],
      "xp": 2000,
      "rewards": ["15 Attribute points"],
      "next": [100984],
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
      "wiki": {"en": "Save the Reindeer", "de": "Rettet die Rentiere"}
    },
    "100987": {
      "name": "Scholarly Affairs",
      "type": "secondary",
      "givers": [577],
      "xp": 250,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
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
      "wiki": {"en": "Secondary Training", "de": "Sekundärtraining"}
    },
    "100991": {
      "name": "Secret Passage",
      "type": "secondary",
      "givers": [425],
      "xp": 1000,
      "gold": 100,
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
      "wiki": {"en": "Signs and Portents", "de": "Zeichen und Omen"}
    },
    "100996": {
      "name": "Skale and Magic Compass",
      "type": "secondary",
      "givers": [724],
      "xp": 1000,
      "gold": 100,
      "wiki": {"en": "Skale and Magic Compass", "de": "Skal und magischer Kompass"}
    },
    "100997": {
      "name": "Skree Hatchling Season",
      "type": "secondary",
      "givers": [577],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
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
      "wiki": {"en": "Spreading the Wintersday Spirit", "de": "Wintertags-Stimmung verbreiten"}
    },
    "101000": {
      "name": "Sticks and Stones",
      "type": "secondary",
      "givers": [737],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
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
      "wiki": {"en": "Strange Bedfellows", "de": "Ein seltsames Gespann"}
    },
    "101003": {
      "name": "Student Jin",
      "type": "secondary",
      "givers": [721],
      "xp": 1500,
      "gold": 125,
      "wiki": {"en": "Student Jin", "de": "Schülerin Jin"}
    },
    "101004": {
      "name": "Student Sousuke",
      "type": "secondary",
      "givers": [721],
      "xp": 1500,
      "gold": 125,
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
      "wiki": {"en": "Summertime for Bokka", "de": "Sommer für Bokka"}
    },
    "101006": {
      "name": "Suwash the Pirate",
      "type": "secondary",
      "givers": [743],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points"],
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
      "wiki": {"en": "Terror in Tyria", "de": "Terror in Tyria"}
    },
    "101011": {
      "name": "The Apostate",
      "type": "secondary",
      "givers": [309],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points"],
      "wiki": {"en": "The Apostate", "de": "Der Apostat"}
    },
    "101012": {
      "name": "The City of Torc'qua",
      "type": "instance",
      "givers": [432],
      "xp": 10000,
      "rewards": ["500 Lightbringer points"],
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
      "wiki": {"en": "The Cold Touch of the Past", "de": "Der kalte Hauch der Vergangenheit"}
    },
    "101014": {
      "name": "The Command Post",
      "type": "secondary",
      "givers": [413],
      "xp": 4000,
      "gold": 200,
      "rewards": ["160 Sunspear Promotion Points"],
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
      "wiki": {"en": "The Council is Called", "de": "Der Rat wird einberufen"}
    },
    "101016": {
      "name": "The Cult of the Stone Face",
      "type": "secondary",
      "givers": [326],
      "xp": 1000,
      "gold": 100,
      "next": [101001],
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
      "wiki": {"en": "The Foolhardy Father", "de": "Der tollkühne Vater"}
    },
    "101020": {
      "name": "The Foundry of Failed Creations",
      "type": "instance",
      "givers": [270],
      "xp": 10000,
      "rewards": ["500 Lightbringer points"],
      "next": [100892],
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
      "wiki": {"en": "The Hallowed Point", "de": "Die Geweihte Stelle"}
    },
    "101026": {
      "name": "The Hanging Gardener",
      "type": "secondary",
      "givers": [371],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
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
      "wiki": {"en": "The Killing Joke", "de": "Ein mörderischer Witz"}
    },
    "101030": {
      "name": "The Last Patrol",
      "type": "secondary",
      "givers": [183, 184],
      "xp": 2500,
      "gold": 200,
      "requires": [100926],
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
      "wiki": {"en": "The Madness of Prophecy", "de": "Der Wahnwitz der Prophezeiung"}
    },
    "101033": {
      "name": "The Missing Patrol",
      "type": "secondary",
      "givers": [464],
      "xp": 2500,
      "gold": 200,
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
      "wiki": {"en": "The Rifts Between Us", "de": "Tür zu, es zieht!"}
    },
    "101036": {
      "name": "The Role of a Lifetime",
      "type": "secondary",
      "givers": [427],
      "xp": 2000,
      "requires": [100837],
      "next": [100954],
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
      "wiki": {"en": "The Time is Nigh", "de": "Zeit zu handeln"}
    },
    "101043": {
      "name": "The Tools of War",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": {"en": "The Tools of War", "de": "Die Werkzeuge des Krieges"}
    },
    "101044": {
      "name": "The Toy's Story",
      "type": "secondary",
      "givers": [732],
      "xp": 1000,
      "rewards": ["Miniature Gray Giant"],
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
      "wiki": {"en": "They Only Come Out at Night", "de": "Die Nachtaktiven"}
    },
    "101048": {
      "name": "Third Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "requires": [100989],
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
      "wiki": {"en": "Til Death Do Us Part...", "de": "Bis dass der Tod uns scheidet..."}
    },
    "101050": {
      "name": "To Ask For More",
      "type": "secondary",
      "givers": [520],
      "xp": 1500,
      "gold": 125,
      "requires": [101053],
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
      "wiki": {"en": "To the Rescue (Nightfall quest)", "de": "Die Befreiung"}
    },
    "101056": {
      "name": "To the Rescue!",
      "type": "instance",
      "givers": [611],
      "xp": 10000,
      "gold": 500,
      "rewards": ["500 Lightbringer points"],
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
      "wiki": {"en": "Total Corruption", "de": "Extrem starker Befall"}
    },
    "101058": {
      "name": "Trade Relations",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
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
      "wiki": {"en": "Voices in the Night", "de": "Stimmen im Dunkeln"}
    },
    "101067": {
      "name": "Wandered Off Again",
      "type": "secondary",
      "givers": [211, 212],
      "xp": 1500,
      "gold": 125,
      "next": [100893],
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
      "wiki": {"en": "Wayward Guide", "de": "Eigensinniger Fremdenführer"}
    },
    "101074": {
      "name": "Weird Waters",
      "type": "secondary",
      "givers": [727],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "wiki": {"en": "Weird Waters", "de": "Sonderbare Gewässer"}
    },
    "101075": {
      "name": "What do you do with a drunken shauben",
      "type": "secondary",
      "givers": [755, 756],
      "xp": 1500,
      "gold": 125,
      "rewards": ["Battle Commendation"],
      "wiki": {"en": "What Do You Do with a Drunken Shauben?", "de": "Trunkene Shauben"}
    },
    "101076": {
      "name": "Which Way Did He Go?",
      "type": "secondary",
      "givers": [564],
      "xp": 1500,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "wiki": {"en": "Which Way Did He Go?", "de": "Wo ist er hingegangen?"}
    },
    "101077": {
      "name": "White Mist",
      "type": "event",
      "givers": [194],
      "event": 13,
      "xp": 1000,
      "next": [100919],
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
      "wiki": {"en": "A Belated Betrothal", "de": "Eine verspätete Verlobung"}
    },
    "101083": {
      "name": "A Brother's Fury",
      "type": "primary",
      "givers": [451],
      "xp": 500,
      "missions": [11],
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
      "wiki": {"en": "A Heart of Ice", "de": "Ein Herz aus Eis"}
    },
    "101087": {
      "name": "A Humbling Gift",
      "type": "event",
      "givers": [492],
      "event": 13,
      "rewards": ["Frozen Accessory Token"],
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
      "wiki": {"en": "A Vengeance of Blades", "de": "Eine klingende Vergeltung"}
    },
    "101107": {
      "name": "A Very Grentchie Wintersday",
      "type": "event",
      "givers": [370],
      "event": 13,
      "xp": 5000,
      "rewards": ["Peppermint Shield", "Gingerbread Focus"],
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
      "wiki": {"en": "An Ingenious Plan", "de": "Ein genialer Plan"}
    },
    "101112": {
      "name": "Ancient Secrets",
      "type": "secondary",
      "givers": [197],
      "xp": 1000,
      "wiki": {"en": "Ancient Secrets", "de": "Alte Geheimnisse"}
    },
    "101113": {
      "name": "Army Life",
      "type": "secondary",
      "givers": [648],
      "profession": 1,
      "xp": 250,
      "skills": [337, 351],
      "wiki": {"en": "Army Life", "de": "Leben in der Armee"}
    },
    "101114": {"name": "Ascalon Academy", "type": "primary", "campaign": 1, "wiki": {"en": "Ascalon Academy"}},
    "101115": {
      "name": "Asuran Allies",
      "type": "secondary",
      "campaign": 1,
      "region": 0,
      "requires": [101316],
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
      "wiki": {"en": "Bandit Trouble", "de": "Ärger mit Banditen"}
    },
    "101119": {
      "name": "Barradin's Advance",
      "type": "secondary",
      "givers": [231],
      "xp": 250,
      "next": [101120],
      "wiki": {"en": "Barradin's Advance", "de": "Barradins Vormarsch"}
    },
    "101120": {
      "name": "Barradin's Stand",
      "type": "secondary",
      "givers": [232],
      "xp": 500,
      "requires": [101119],
      "wiki": {"en": "Barradin's Stand", "de": "Barradins Widerstand"}
    },
    "101121": {
      "name": "Better You Than Me",
      "type": "event",
      "givers": [650],
      "event": 11,
      "rewards": ["Ghoulish Accessory Token"],
      "wiki": {"en": "Better You Than Me", "de": "Lieber Ihr als ich"}
    },
    "101122": {
      "name": "Blankets for the Settlers",
      "type": "secondary",
      "givers": [293],
      "xp": 500,
      "wiki": {"en": "Blankets for the Settlers", "de": "Decken für die Siedler"}
    },
    "101123": {
      "name": "Blood And Smoke",
      "type": "secondary",
      "givers": [237],
      "xp": 2500,
      "skills": [66, 131, 187, 245, 368, 426],
      "requires": [101145],
      "wiki": {"en": "Blood And Smoke", "de": "Blut und Rauch"}
    },
    "101124": {
      "name": "Caravan in Trouble",
      "type": "secondary",
      "givers": [631],
      "xp": 250,
      "skills": [44, 136, 186, 240, 320, 453],
      "wiki": {"en": "Caravan in Trouble", "de": "Karawane in Bedrängnis"}
    },
    "101125": {
      "name": "Casualty Report",
      "type": "secondary",
      "givers": [568],
      "xp": 150,
      "skills": [102],
      "next": [101141],
      "wiki": {"en": "Casualty Report", "de": "Verlustmeldung"}
    },
    "101126": {
      "name": "Charr Reinforcements",
      "type": "secondary",
      "givers": [258],
      "profession": 2,
      "xp": 500,
      "skills": [399, 415],
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
      "wiki": {"en": "Cities of Ascalon", "de": "Ascalons Städte"}
    },
    "101131": {
      "name": "Cold One",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
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
      "wiki": {"en": "Commandeering a Mortal Vessel", "de": "Rekrutierung einer sterblichen Hülle"}
    },
    "101133": {
      "name": "Counting the Fallen",
      "type": "secondary",
      "givers": [209],
      "xp": 500,
      "next": [101130],
      "wiki": {"en": "Counting the Fallen", "de": "Volkszählung der Gefallenen"}
    },
    "101134": {
      "name": "Death in the Ruins",
      "type": "secondary",
      "givers": [687],
      "xp": 250,
      "skills": [133, 150],
      "next": [101203],
      "wiki": {"en": "Death in the Ruins", "de": "Tod in den Ruinen"}
    },
    "101135": {
      "name": "Defend Denravi",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
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
      "wiki": {"en": "Defend Denravi (Hard mode)", "de": "Verteidigt Denravi (Schwerer Modus)"}
    },
    "101137": {
      "name": "Defend Droknar's Forge",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "next": [101276, 101139, 101135],
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
      "wiki": {"en": "Defend Droknar's Forge (Hard mode)", "de": "Verteidigt Droknars Schmiede (Schwerer Modus)"}
    },
    "101139": {
      "name": "Defend North Kryta Province",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
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
      "wiki": {"en": "Defend the Wall", "de": "Verteidigt den Wall"}
    },
    "101142": {
      "name": "Deliver a Message to My Wife",
      "type": "secondary",
      "givers": [247],
      "xp": 500,
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
      "wiki": {"en": "Don't Fear the Reapers", "de": "Keine Angst vor den Schnittern"}
    },
    "101145": {
      "name": "Dropping Eaves",
      "type": "secondary",
      "givers": [237],
      "xp": 500,
      "skills": [48, 104, 216, 306, 378, 470],
      "next": [101123],
      "wiki": {"en": "Dropping Eaves", "de": "Belauschen"}
    },
    "101146": {
      "name": "Duties of a Lionguard",
      "type": "secondary",
      "givers": [422],
      "xp": 500,
      "next": [101118],
      "wiki": {"en": "Duties of a Lionguard", "de": "Die Pflichten eines Löwengardisten"}
    },
    "101147": {
      "name": "Ebon Vanguard Allies",
      "type": "secondary",
      "campaign": 1,
      "region": 0,
      "requires": [101316],
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
      "wiki": {"en": "Elegy for Those Left Behind", "de": "Elegie für die Zurückgelassenen"}
    },
    "101149": {
      "name": "Elemental Knowledge",
      "type": "secondary",
      "givers": [541],
      "xp": 250,
      "skills": [165, 212],
      "next": [101231],
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
      "wiki": {"en": "Experimental Elixir", "de": "Experimentelles Heilmittel"}
    },
    "101156": {
      "name": "Eye For Profit",
      "type": "secondary",
      "givers": [451],
      "xp": 500,
      "skills": [10, 138, 225, 302, 334, 427],
      "wiki": {"en": "Eye For Profit", "de": "Ein Auge für Profit"}
    },
    "101157": {
      "name": "Fallen Soldiers",
      "type": "secondary",
      "givers": [568],
      "profession": 4,
      "xp": 250,
      "skills": [96],
      "wiki": {"en": "Fallen Soldiers", "de": "Gefallene Soldaten"}
    },
    "101158": {
      "name": "Family Ties (Prophecies quest)",
      "type": "secondary",
      "givers": [551],
      "xp": 500,
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
      "wiki": {"en": "Fighting in a Winter Wonderland", "de": "Stille Nacht, heilige Schlacht"}
    },
    "101160": {
      "name": "Final Blow",
      "type": "primary",
      "givers": [375, 376],
      "xp": 500,
      "gold": 100,
      "missions": [122],
      "wiki": {"en": "Final Blow", "de": "Der letzte Schlag"}
    },
    "101161": {
      "name": "Fire in the Hole",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "wiki": {"en": "Fire in the Hole", "de": "Feuer im Loch"}
    },
    "101162": {
      "name": "Fires in the East",
      "type": "secondary",
      "givers": [231],
      "xp": 500,
      "requires": [101119],
      "wiki": {"en": "Fires in the East", "de": "Feuer im Osten"}
    },
    "101163": {
      "name": "Fires in the North",
      "type": "secondary",
      "givers": [198],
      "xp": 1000,
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
      "wiki": {"en": "Forgotten Wisdom", "de": "Vergessene Weisheit"}
    },
    "101165": {
      "name": "Frontier Gate Fugitives",
      "type": "secondary",
      "givers": [597],
      "xp": 1000,
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
      "wiki": {"en": "Garfazz Bloodfang (quest)", "de": "Garfazz Bloodfang"}
    },
    "101168": {
      "name": "Gargoyle Trouble",
      "type": "secondary",
      "givers": [617],
      "profession": 1,
      "xp": 200,
      "skills": [1, 321, 382, 384],
      "wiki": {"en": "Gargoyle Trouble", "de": "Ärger mit den Gargoyles"}
    },
    "101169": {
      "name": "Gathering Resources",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
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
      "wiki": {"en": "Ghostly Vengeance", "de": "Geisterhafte Rache"}
    },
    "101172": {
      "name": "Graven Images",
      "type": "secondary",
      "givers": [537],
      "xp": 600,
      "skills": [9, 116, 183, 283, 342, 402],
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
      "wiki": {"en": "Heirlooms of the Mad King", "de": "Erbstücke des verrückten Königs"}
    },
    "101177": {
      "name": "Helping the Dwarves",
      "type": "secondary",
      "givers": [609],
      "xp": 250,
      "skills": [8, 108, 162, 301, 326, 406],
      "next": [101195],
      "wiki": {"en": "Helping the Dwarves", "de": "Hilfe für die Zwerge"}
    },
    "101178": {
      "name": "Helping the People of Ascalon",
      "type": "secondary",
      "givers": [262],
      "xp": 200,
      "skills": [80, 155, 290, 343, 398],
      "requires": [101274],
      "wiki": {"en": "Helping the People of Ascalon", "de": "Hilfe für das Volk von Ascalon"}
    },
    "101179": {
      "name": "Hungry Devourer",
      "type": "secondary",
      "givers": [391],
      "xp": 400,
      "skills": [69, 106, 222, 310, 344, 392],
      "next": [101257],
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
      "wiki": {"en": "In Grenth's Defense", "de": "Zu Grenths Verteidigung"}
    },
    "101181": {
      "name": "In Memory of Paulus",
      "type": "secondary",
      "givers": [208],
      "xp": 300,
      "skills": [291, 305],
      "requires": [101211],
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
      "wiki": {"en": "Into the Breach", "de": "In der Bresche"}
    },
    "101183": {
      "name": "Into the Unknown",
      "type": "secondary",
      "givers": [216],
      "xp": 1000,
      "skills": [36, 144, 233, 271, 366, 463],
      "wiki": {"en": "Into the Unknown", "de": "Auf ins Unbekannte"}
    },
    "101184": {
      "name": "Iron Horse War Machine",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "requires": [101196],
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
      "wiki": {"en": "Malaquire's Test", "de": "Malaquires Prüfung"}
    },
    "101189": {
      "name": "Merchant's Plea",
      "type": "secondary",
      "givers": [266],
      "xp": 500,
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
      "wiki": {"en": "Military Matters", "de": "Militärische Angelegenheiten"}
    },
    "101195": {
      "name": "Minaar's Trouble",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "next": [101196],
      "wiki": {"en": "Minaar's Trouble", "de": "Minaars Leiden"}
    },
    "101196": {
      "name": "Minaar's Worry",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "requires": [101195],
      "next": [101184],
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
      "wiki": {"en": "Mustering a Response", "de": "Sammeln zur Gegenwehr"}
    },
    "101199": {
      "name": "Mysterious Message",
      "type": "secondary",
      "givers": [710],
      "xp": 500,
      "skills": [45, 93, 172, 274, 328, 455],
      "next": [101291],
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
      "wiki": {"en": "Noble Intentions", "de": "Noble Absichten"}
    },
    "101202": {
      "name": "Noble Intentions Plan B",
      "type": "instance",
      "givers": [681],
      "xp": 4000,
      "gold": 500,
      "requires": [101201],
      "wiki": {"en": "Noble Intentions Plan B", "de": "Noble Absichten Plan B"}
    },
    "101203": {
      "name": "Oberan's Rage",
      "type": "secondary",
      "givers": [687],
      "xp": 350,
      "skills": [95, 99],
      "requires": [101134],
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
      "wiki": {"en": "Orrian Excavation", "de": "Orrianische Ausgrabung"}
    },
    "101207": {
      "name": "Oswalt's Epitaph",
      "type": "secondary",
      "givers": [690],
      "xp": 500,
      "gold": 250,
      "requires": [101232],
      "wiki": {"en": "Oswalt's Epitaph", "de": "Oswalts Grabinschrift"}
    },
    "101208": {
      "name": "Passage Through The Dark River",
      "type": "primary",
      "givers": [476],
      "xp": 500,
      "next_missions": [73],
      "missions": [73],
      "wiki": {"en": "Passage Through The Dark River", "de": "Durchfahrt durch den Düsteren Fluss"}
    },
    "101209": {
      "name": "Political Ramifications",
      "type": "instance",
      "givers": [695],
      "xp": 6000,
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
      "wiki": {"en": "Rastin's Ritual", "de": "Rastins Ritual"}
    },
    "101215": {
      "name": "Recruits for Hollis",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "next": [101120],
      "wiki": {"en": "Recruits for Hollis", "de": "Rekruten für Hollis"}
    },
    "101216": {
      "name": "Regent Valley Defense",
      "type": "secondary",
      "givers": [448],
      "xp": 500,
      "wiki": {"en": "Regent Valley Defense", "de": "Die Verteidigung des Regententals"}
    },
    "101217": {
      "name": "Renegade Necromancer",
      "type": "secondary",
      "givers": [189],
      "profession": 4,
      "xp": 350,
      "skills": [92, 97, 129],
      "wiki": {"en": "Renegade Necromancer", "de": "Abtrünniger Nekromant"}
    },
    "101218": {
      "name": "Replacement Healers",
      "type": "secondary",
      "givers": [547],
      "xp": 500,
      "skills": [243, 292],
      "wiki": {"en": "Replacement Healers", "de": "Ersatzheiler"}
    },
    "101219": {
      "name": "Report to the White Mantle",
      "type": "primary",
      "givers": [549],
      "xp": 500,
      "missions": [15],
      "wiki": {"en": "Report to the White Mantle", "de": "Erstattet dem Weißen Mantel Bericht"}
    },
    "101220": {
      "name": "Reversing the Skales",
      "type": "secondary",
      "givers": [293],
      "xp": 500,
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
      "wiki": {"en": "Ruins of Surmia (quest)", "de": "Ruinen von Surmia (Quest)"}
    },
    "101225": {
      "name": "Sands Of Souls",
      "type": "secondary",
      "givers": [713],
      "xp": 500,
      "missions": [117, 116, 118],
      "wiki": {"en": "Sands Of Souls", "de": "Sandwüste der Seelen"}
    },
    "101226": {
      "name": "Scavengers in Old Ascalon",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "requires": [101141],
      "requires_missions": [28],
      "wiki": {"en": "Scavengers in Old Ascalon", "de": "Plünderer in Alt-Ascalon"}
    },
    "101227": {
      "name": "Scorched Earth (Prophecies quest)",
      "type": "secondary",
      "givers": [541],
      "xp": 200,
      "skills": [175],
      "wiki": {"en": "Scorched Earth (Prophecies quest)", "de": "Verkohlte Erde"}
    },
    "101228": {
      "name": "Securing the Vale",
      "type": "secondary",
      "givers": [365],
      "profession": 1,
      "xp": 500,
      "skills": [341, 356, 386],
      "wiki": {"en": "Securing the Vale", "de": "Die Sicherung des Tals"}
    },
    "101229": {
      "name": "Seeking the Seer",
      "type": "secondary",
      "givers": [437],
      "xp": 500,
      "missions": [22],
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
      "wiki": {"en": "Shadows in the Jungle", "de": "Schatten im Dschungel"}
    },
    "101231": {
      "name": "Shalev's Task",
      "type": "secondary",
      "givers": [723],
      "xp": 300,
      "skills": [167, 213],
      "requires": [101149],
      "wiki": {"en": "Shalev's Task", "de": "Shalevs Aufgabe"}
    },
    "101232": {
      "name": "Shiverpeak Stragglers",
      "type": "secondary",
      "givers": [177],
      "xp": 500,
      "gold": 150,
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
      "wiki": {"en": "Something Wicked This Way Comes", "de": "Etwas Böses kommt des Weges"}
    },
    "101234": {
      "name": "Sowing Seeds",
      "type": "secondary",
      "givers": [208],
      "xp": 200,
      "skills": [281, 287, 296],
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
      "wiki": {"en": "Stemming the Skeletal Tide", "de": "Die Armee der knochigen Diener"}
    },
    "101236": {
      "name": "Stone Summit Beastmasters",
      "type": "secondary",
      "givers": [734],
      "profession": 2,
      "xp": 350,
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
      "wiki": {"en": "Straight to the Heart", "de": "Mitten ins Herz"}
    },
    "101238": {
      "name": "Subversive Ideas",
      "type": "instance",
      "givers": [554],
      "xp": 6000,
      "wiki": {"en": "Subversive Ideas", "de": "Feindliche Ideen"}
    },
    "101239": {
      "name": "Summit Slaves",
      "type": "instance",
      "givers": [585],
      "repeatable": true,
      "xp": 2000,
      "gold": 300,
      "wiki": {"en": "Summit Slaves", "de": "Gipfel-Sklaven"}
    },
    "101240": {
      "name": "Sunspears in Kryta",
      "type": "secondary",
      "givers": [729],
      "travel": 3,
      "xp": 1000,
      "wiki": {"en": "Sunspears in Kryta", "de": "Sonnenspeere in Kryta"}
    },
    "101241": {
      "name": "Supplies for the Duke",
      "type": "secondary",
      "givers": [232],
      "xp": 300,
      "skills": [11, 159, 211, 278, 348, 403],
      "requires": [101247],
      "wiki": {"en": "Supplies for the Duke", "de": "Nachschub für den Herzog"}
    },
    "101242": {
      "name": "Surviving After the Searing",
      "type": "primary",
      "givers": [287],
      "xp": 1000,
      "gold": 500,
      "rewards": ["4 Skill points", "Belt Pouch", "Superior Identification Kit", "Superior Salvage Kit"],
      "wiki": {"en": "Surviving After the Searing", "de": "Überleben nach dem Großen Feuer"}
    },
    "101243": {
      "name": "Symon's History of Ascalon",
      "type": "secondary",
      "givers": [702],
      "xp": 2000,
      "requires": [101130],
      "wiki": {"en": "Symon's History of Ascalon", "de": "Symons Geschichte von Ascalon"}
    },
    "101244": {
      "name": "Tasca's Reprise",
      "type": "instance",
      "givers": [746],
      "xp": 6000,
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
      "wiki": {"en": "The Ambassador's Quandary", "de": "Das Dilemma des Botschafters"}
    },
    "101248": {
      "name": "The Arrowhead",
      "type": "secondary",
      "givers": [421],
      "xp": 1000,
      "gold": 500,
      "next": [101116],
      "wiki": {"en": "The Arrowhead", "de": "Die Pfeilspitze"}
    },
    "101249": {
      "name": "The Ascalon Settlement",
      "type": "secondary",
      "givers": [431],
      "xp": 500,
      "skills": [50, 117, 229, 286, 385, 424],
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
      "wiki": {"en": "The Cost of Survival", "de": "Der Preis des Überlebens"}
    },
    "101257": {
      "name": "The Deserters",
      "type": "secondary",
      "givers": [391],
      "xp": 500,
      "skills": [22, 143, 214, 242, 380, 456],
      "requires": [101179],
      "wiki": {"en": "The Deserters", "de": "Die Deserteure"}
    },
    "101258": {
      "name": "The Dreamer and the Zealot",
      "type": "secondary",
      "givers": [346],
      "xp": 500,
      "gold": 100,
      "requires": [101256],
      "wiki": {"en": "The Dreamer and the Zealot", "de": "Der Träumer und der Eiferer"}
    },
    "101259": {
      "name": "The Duke's Daughter",
      "type": "secondary",
      "givers": [444],
      "xp": 2000,
      "gold": 300,
      "next": [101110],
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
      "wiki": {"en": "The Elementalist's Path", "de": "Der Weg des Elementarmagiers"}
    },
    "101263": {
      "name": "The False Gods",
      "type": "secondary",
      "givers": [457],
      "xp": 750,
      "skills": [49, 130, 234, 297, 316, 434],
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
      "wiki": {"en": "The Forge Heart", "de": "Das Herz der Schmiede"}
    },
    "101266": {
      "name": "The Forgotten Ones",
      "type": "secondary",
      "givers": [446],
      "skills": [72, 84, 179, 315, 345, 400],
      "next": [101164],
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
      "wiki": {"en": "The Geomancer's Test", "de": "Die Prüfung des Geomanten"}
    },
    "101268": {
      "name": "The Greatest Snowman Ever Made",
      "type": "event",
      "givers": [370],
      "event": 13,
      "xp": 5000,
      "rewards": ["Gingerbread Shield", "Gingerbread Focus"],
      "wiki": {"en": "The Greatest Snowman Ever Made", "de": "Der größte Schneemann, der jemals gebaut wurde"}
    },
    "101269": {
      "name": "The Hero From Ascalon",
      "type": "secondary",
      "givers": [402],
      "xp": 100,
      "wiki": {"en": "The Hero From Ascalon", "de": "Die Heldin von Ascalon"}
    },
    "101270": {
      "name": "The Hero's Challenge",
      "type": "attribute",
      "givers": [404],
      "xp": 5000,
      "rewards": ["15 Attribute points"],
      "wiki": {"en": "The Hero's Challenge", "de": "Die Herausforderung des Helden"}
    },
    "101271": {
      "name": "The Hero's Journey",
      "type": "secondary",
      "givers": [404],
      "xp": 500,
      "next": [101270],
      "wiki": {"en": "The Hero's Journey", "de": "Die Reise eines Helden"}
    },
    "101272": {
      "name": "The Hot Springs Murders",
      "type": "secondary",
      "givers": [440],
      "xp": 500,
      "skills": [32, 120, 173, 277, 357, 437],
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
      "wiki": {"en": "The King's Message", "de": "Die Nachricht des Königs"}
    },
    "101275": {
      "name": "The Krytan Ambassador",
      "type": "secondary",
      "givers": [373],
      "xp": 500,
      "next": [101274],
      "wiki": {"en": "The Krytan Ambassador", "de": "Der krytanische Botschafter"}
    },
    "101276": {
      "name": "The Last Day Dawns",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
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
      "wiki": {"en": "The Last Day Dawns (Hard mode)", "de": "Der letzte Tag bricht an (Schwerer Modus)"}
    },
    "101278": {
      "name": "The Last Hog",
      "type": "secondary",
      "givers": [285],
      "xp": 500,
      "skills": [61, 157, 162, 244, 360, 447],
      "wiki": {"en": "The Last Hog", "de": "Das letzte Schwein"}
    },
    "101279": {
      "name": "The Lost Princess",
      "type": "secondary",
      "givers": [462],
      "xp": 500,
      "skills": [29, 103, 170, 272, 371, 464],
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
      "wiki": {"en": "The Mantle's Guise", "de": "Die Täuschung des Mantels"}
    },
    "101281": {
      "name": "The Mesmer's Path",
      "type": "secondary",
      "givers": [353],
      "xp": 1000,
      "requires_missions": [38],
      "wiki": {"en": "The Mesmer's Path", "de": "Der Weg des Mesmers"}
    },
    "101282": {
      "name": "The Misplaced Sword",
      "type": "secondary",
      "givers": [290],
      "xp": 1000,
      "skills": [46, 94, 188, 313, 367, 459],
      "requires": [101164],
      "wiki": {"en": "The Misplaced Sword", "de": "Das verlegte Schwert"}
    },
    "101283": {
      "name": "The Missing Artisan",
      "type": "secondary",
      "givers": [381],
      "xp": 500,
      "wiki": {"en": "The Missing Artisan", "de": "Der verschollene Kunsthandwerker"}
    },
    "101284": {
      "name": "The Monk's Path",
      "type": "secondary",
      "givers": [354],
      "xp": 1000,
      "requires": [101271],
      "wiki": {"en": "The Monk's Path", "de": "Der Weg des Mönchs"}
    },
    "101285": {
      "name": "The Necromancer's Path",
      "type": "secondary",
      "givers": [355],
      "xp": 1000,
      "requires": [101271],
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
      "wiki": {"en": "The Ranger's Path", "de": "Der Weg des Waldläufers"}
    },
    "101296": {
      "name": "The Red-Cloaked Deserter",
      "type": "secondary",
      "givers": [310],
      "xp": 1000,
      "wiki": {"en": "The Red-Cloaked Deserter", "de": "Der Deserteur im roten Umhang"}
    },
    "101297": {
      "name": "The Road to Borlis Pass",
      "type": "secondary",
      "givers": [177],
      "xp": 500,
      "requires_missions": [32],
      "next": [101318],
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
      "wiki": {"en": "The Royal Papers", "de": "Die königlichen Papiere"}
    },
    "101300": {
      "name": "The Scourge Beneath",
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
      "wiki": {"en": "The Siege of Piken Square", "de": "Die Belagerung des Pikenplatzes"}
    },
    "101302": {
      "name": "The Stolen Artifact",
      "type": "secondary",
      "givers": [284],
      "profession": 4,
      "xp": 200,
      "skills": [83, 105, 109, 123],
      "wiki": {"en": "The Stolen Artifact", "de": "Das gestohlene Artefakt"}
    },
    "101303": {
      "name": "The Stone Summit Champion",
      "type": "secondary",
      "givers": [345],
      "profession": 5,
      "xp": 350,
      "skills": [19, 23, 38],
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
      "wiki": {"en": "The Tarnished Emblem", "de": "Das verrostete Abzeichen"}
    },
    "101307": {
      "name": "The Titan Source",
      "type": "secondary",
      "givers": [347],
      "xp": 50000,
      "requires": [101276, 101139, 101135],
      "next": [101138],
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
      "wiki": {"en": "The Titan Source (Hard mode)", "de": "Der Ursprung der Titanen (Schwerer Modus)"}
    },
    "101309": {
      "name": "The Troublesome Artifact",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "gold": 100,
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
      "wiki": {"en": "The Undead Hordes", "de": "Die Horden der Untoten"}
    },
    "101312": {
      "name": "The Villainy of Galrath",
      "type": "secondary",
      "givers": [113],
      "xp": 4000,
      "next": [101313],
      "wiki": {"en": "The Villainy of Galrath", "de": "Galraths Abscheulichkeit"}
    },
    "101313": {
      "name": "The Villainy of Galrath (Hard mode)",
      "type": "secondary",
      "givers": [566],
      "xp": 30000,
      "gold": 5000,
      "requires": [101312],
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
      "wiki": {"en": "The Waiting Game", "de": "Warten wir ab"}
    },
    "101316": {
      "name": "The War in Kryta",
      "type": "primary",
      "givers": [325],
      "wiki": {"en": "The War in Kryta", "de": "Der Krieg in Kryta"}
    },
    "101317": {
      "name": "The Warrior's Path",
      "type": "secondary",
      "givers": [352],
      "xp": 1000,
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
      "wiki": {"en": "The Way is Blocked", "de": "Der Weg ist versperrt"}
    },
    "101319": {
      "name": "The Way of the Geomancer",
      "type": "secondary",
      "givers": [351],
      "profession": 6,
      "xp": 500,
      "next": [101267],
      "wiki": {"en": "The Way of the Geomancer", "de": "Der Weg des Geomanten"}
    },
    "101320": {
      "name": "The Wayward Monk",
      "type": "secondary",
      "givers": [365],
      "profession": 3,
      "xp": 350,
      "skills": [254, 264, 284],
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
      "wiki": {"en": "To Kryta: Journey's End", "de": "Nach Kryta: Ende einer Reise"}
    },
    "101326": {
      "name": "To Kryta: Refugees",
      "type": "primary",
      "givers": [391],
      "xp": 500,
      "next": [101327],
      "wiki": {"en": "To Kryta: Refugees", "de": "Nach Kryta: Flüchtlinge"}
    },
    "101327": {
      "name": "To Kryta: The Ice Cave",
      "type": "primary",
      "givers": [669],
      "xp": 500,
      "requires": [101326],
      "next": [101325],
      "wiki": {"en": "To Kryta: The Ice Cave", "de": "Nach Kryta: Die Eishöhle"}
    },
    "101328": {
      "name": "To Sorrow's Furnace",
      "type": "primary",
      "givers": [374],
      "xp": 10000,
      "gold": 750,
      "next": [101264],
      "wiki": {"en": "To Sorrow's Furnace", "de": "Zum Hochofen der Betrübnis"}
    },
    "101329": {
      "name": "Toward the Front Lines",
      "type": "primary",
      "givers": [262],
      "xp": 500,
      "gold": 200,
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
      "wiki": {"en": "Unspeakable, Unknowable", "de": "Unsäglich, unverständlich"}
    },
    "101337": {
      "name": "Urgent Warning",
      "type": "primary",
      "givers": [360],
      "xp": 500,
      "requires": [101382],
      "missions": [12],
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
      "wiki": {"en": "Wanted: Amalek the Unmerciful", "de": "Gesucht: Amalek der Gnadenlose"}
    },
    "101349": {
      "name": "Wanted: Barthimus the Provident",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": {"en": "Wanted: Barthimus the Provident", "de": "Gesucht: Barthimus der Fürsorgliche"}
    },
    "101350": {
      "name": "Wanted: Calamitous",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": {"en": "Wanted: Calamitous", "de": "Gesucht: Calamitous"}
    },
    "101351": {
      "name": "Wanted: Carnak the Hungry",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": {"en": "Wanted: Carnak the Hungry", "de": "Gesucht: Carnak der Hungernde"}
    },
    "101352": {
      "name": "Wanted: Cerris",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": {"en": "Wanted: Cerris", "de": "Gesucht: Cerris"}
    },
    "101353": {
      "name": "Wanted: Destor the Truth Seeker",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": {"en": "Wanted: Destor the Truth Seeker", "de": "Gesucht: Destor der Wahrheitssuchende"}
    },
    "101354": {
      "name": "Wanted: Greves the Overbearing",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": {"en": "Wanted: Greves the Overbearing", "de": "Gesucht: Greves der Anmaßende"}
    },
    "101355": {
      "name": "Wanted: Inquisitor Bauer",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Wanted: Inquisitor Bauer", "de": "Gesucht: Inquisitor Bauer"}
    },
    "101356": {
      "name": "Wanted: Inquisitor Lashona",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Wanted: Inquisitor Lashona", "de": "Gesucht: Inquisitor Lashona"}
    },
    "101357": {
      "name": "Wanted: Inquisitor Lovisa",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Wanted: Inquisitor Lovisa", "de": "Gesucht: Inquisitorin Lovisa"}
    },
    "101358": {
      "name": "Wanted: Insatiable Vakar",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": {"en": "Wanted: Insatiable Vakar", "de": "Gesucht: Vakar der Unersättliche"}
    },
    "101359": {
      "name": "Wanted: Joh the Hostile",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Wanted: Joh the Hostile", "de": "Gesucht: Joh der Feindselige"}
    },
    "101360": {
      "name": "Wanted: Justiciar Amilyn",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": {"en": "Wanted: Justiciar Amilyn", "de": "Gesucht: Justiziarin Amilyn"}
    },
    "101361": {
      "name": "Wanted: Justiciar Kasandra",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Wanted: Justiciar Kasandra", "de": "Gesucht: Justiziarin Kasandra"}
    },
    "101362": {
      "name": "Wanted: Justiciar Kimii",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Wanted: Justiciar Kimii", "de": "Gesucht: Justiziarin Kimii"}
    },
    "101363": {
      "name": "Wanted: Justiciar Marron",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": {"en": "Wanted: Justiciar Marron", "de": "Gesucht: Justiziar Marron"}
    },
    "101364": {
      "name": "Wanted: Justiciar Sevaan",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": {"en": "Wanted: Justiciar Sevaan", "de": "Gesucht: Justiziar Sevaan"}
    },
    "101365": {
      "name": "Wanted: Lev the Condemned",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": {"en": "Wanted: Lev the Condemned", "de": "Gesucht: Lev die Verdammte"}
    },
    "101366": {
      "name": "Wanted: Maximilian the Meticulous",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Wanted: Maximilian the Meticulous", "de": "Gesucht: Maximilian der Pingelige"}
    },
    "101367": {
      "name": "Wanted: Sarnia the Red-Handed",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Wanted: Sarnia the Red-Handed", "de": "Gesucht: Sarnia die Rothändige"}
    },
    "101368": {
      "name": "Wanted: Selenas the Blunt",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Wanted: Selenas the Blunt", "de": "Gesucht: Selenas die Unverblümte"}
    },
    "101369": {
      "name": "Wanted: Valis the Rampant",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": {"en": "Wanted: Valis the Rampant", "de": "Gesucht: Valis der Ungezügelte"}
    },
    "101370": {
      "name": "Wanted: Vess the Disputant",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": {"en": "Wanted: Vess the Disputant", "de": "Gesucht: Vess die Streitsüchtige"}
    },
    "101371": {
      "name": "Wanted: Zaln the Jaded",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
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
      "wiki": {"en": "Wayfarer's Reverie: Tyria", "de": "Erinnerung des Reisenden: Tyria"}
    },
    "101381": {
      "name": "What Lies Beneath",
      "type": "primary",
      "givers": [441],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "wiki": {"en": "What Lies Beneath", "de": "Die Tiefen"}
    },
    "101382": {
      "name": "White Mantle Wrath: A Helping Hand",
      "type": "primary",
      "givers": [360],
      "xp": 500,
      "requires": [101383],
      "next": [101337],
      "wiki": {"en": "White Mantle Wrath: A Helping Hand", "de": "Der Zorn des Weißen Mantels: Unterstützung"}
    },
    "101383": {
      "name": "White Mantle Wrath: Demagogue's Vanguard",
      "type": "primary",
      "givers": [361],
      "xp": 500,
      "requires_missions": [10],
      "next": [101382],
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
      "wiki": {"en": "Wisdom of the Druids", "de": "Weisheit der Druiden"}
    },
    "101385": {
      "name": "Wrenches In The Gears",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
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
