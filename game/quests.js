const GW_QUESTS = {
  "quests_": "Keys are game quest ids; 100000 and up are ours until the game's is known. givers: npcs, one per place it is given (their location and region come from there); campaign and region only when there is no giver. travel: the campaign it takes you to. event: the yearly event (calendar.js) it belongs to. requires, next: quests; requires_missions, next_missions: missions; requires_other: requirements that aren't quests. missions: missions it belongs to. skills: skill ids.",
  "quests": {
    "917": {
      "name": "The Last Hierophant",
      "type": "secondary",
      "campaign": 4,
      "region": 18,
      "xp": 15000,
      "gold": 2750,
      "wiki": "https://www.guildwiki.de/wiki/Der_letzte_Hierophant"
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
      "wiki": "https://www.guildwiki.de/wiki/Wiedervereinigung"
    },
    "100001": {
      "name": "The Necromancer's Novice",
      "type": "secondary",
      "givers": [331],
      "xp": 250,
      "skills": [83, 105, 109],
      "wiki": "https://www.guildwiki.de/wiki/Der_Nekromantennovize"
    },
    "100002": {
      "name": "A Gate Too Far/Zaishen Quest",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Portal_zu_weit_(Zaishen-Mission)"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_Greifen-Geschenk",
      "wiki_en": "https://web.archive.org/web/20260630161024/https://wiki.guildwars.com/wiki/A_Gift_of_Griffons"
    },
    "100004": {
      "name": "A Time for Heroes (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Zeit_für_Helden_(Zaishen-Mission)"
    },
    "100005": {
      "name": "Abaddon's Gate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Abaddons_Tor_(Zaishen-Mission)"
    },
    "100006": {
      "name": "Abaddon's Mouth (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Abaddons_Maul_(Zaishen-Mission)"
    },
    "100007": {
      "name": "Admiral Kantoh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Admiral_Kantoh_(Zaishen-Kopfgeld)"
    },
    "100008": {
      "name": "Against the Charr (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Gegen_die_Charr_(Zaishen-Mission)"
    },
    "100009": {
      "name": "Alcazia Tangle (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Alcazia-Dickicht_(Zaishen-Bezwingung)"
    },
    "100010": {
      "name": "Alliance Battles (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["7,500 Imperial faction"],
      "wiki": "https://www.guildwiki.de/wiki/Bündniskämpfe"
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
      "wiki": "https://www.guildwiki.de/wiki/Vernichter_(Quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Vernichter_2:_Tag_des_Großen_Feuers"
    },
    "100013": {
      "name": "Anvil Rock (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Ambossstein_(Zaishen-Bezwingung)"
    },
    "100014": {
      "name": "Arachni (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Arachni_(Zaishen-Kopfgeld)"
    },
    "100015": {
      "name": "Arbor Bay (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Arborbucht_(Zaishen-Bezwingung)"
    },
    "100016": {
      "name": "Arbor Earthcall (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Arbor_Erdruf_(Zaishen-Kopfgeld)"
    },
    "100017": {
      "name": "Arborstone (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Arborstein_(Zaishen-Mission)"
    },
    "100018": {
      "name": "Arborstone (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Arborstein_(Zaishen-Bezwingung)"
    },
    "100019": {
      "name": "Archipelagos (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Archipel_(Zaishen-Bezwingung)"
    },
    "100020": {
      "name": "Arkjok Ward (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Arkjok-Bastei_(Zaishen-Bezwingung)"
    },
    "100021": {
      "name": "Army of Darkness",
      "type": "secondary",
      "givers": [206],
      "xp": 10000,
      "gold": 750,
      "objectives": [[0, "Destroy the Priest of Menzies"], [0, "Deliver the unholy text to Kromril the Eternal"]],
      "wiki": "https://www.guildwiki.de/wiki/Armee_der_Finsternis",
      "wiki_en": "https://web.archive.org/web/20260730154442/https://wiki.guildwars.com/wiki/Army_of_Darkness"
    },
    "100022": {
      "name": "Ascalon Foothills (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Ascalon-Vorgebirge_(Zaishen-Bezwingung)"
    },
    "100023": {
      "name": "Assault on the Stronghold (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Angriff_auf_die_Festung_(Zaishen-Mission)"
    },
    "100024": {
      "name": "Augury Rock (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Fels_der_Weissagung_(Zaishen-Mission)"
    },
    "100025": {
      "name": "Aurora Glade (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Auroralichtung_(Zaishen-Mission)"
    },
    "100026": {
      "name": "Bahdok Caverns (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Bahdok-Höhlen_(Zaishen-Bezwingung)"
    },
    "100027": {
      "name": "Barbarous Shore (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Barbarenküste_(Zaishen-Bezwingung)"
    },
    "100028": {
      "name": "BauBao Wavewrath (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Baubao_Wellenzorn_(Zaishen-Kopfgeld)"
    },
    "100029": {
      "name": "Bjora Marches (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Bjora-Sümpfe_(Zaishen-Bezwingung)"
    },
    "100030": {
      "name": "Blacktide Den (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Schwarzwasserloch_(Zaishen-Mission)"
    },
    "100031": {
      "name": "Blood Washes Blood (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Blut_wäscht_Blut_(Zaishen-Mission)"
    },
    "100032": {
      "name": "Bloodstone Fen (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Blutsteinsumpf_(Zaishen-Mission)"
    },
    "100033": {
      "name": "Boreas Seabed (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Boreas-Meeresgrund_(Zaishen-Mission)"
    },
    "100034": {
      "name": "Boreas Seabed (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Boreas-Meeresgrund_(Zaishen-Bezwingung)"
    },
    "100035": {
      "name": "Borlis Pass (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Borlispass_(Zaishen-Mission)"
    },
    "100036": {
      "name": "Borrguus Blisterbark (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Borrguus_Raurinde_(Zaishen-Kopfgeld)"
    },
    "100037": {
      "name": "Bukdek Byway (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Bukdek-Seitenweg_(Zaishen-Bezwingung)"
    },
    "100038": {
      "name": "Chahbek Village (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Chahbek_(Zaishen-Mission)"
    },
    "100039": {
      "name": "Charged Blackness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Geladene_Schwärze_(Zaishen-Kopfgeld)"
    },
    "100040": {
      "name": "Chung, the Attuned (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Chung_der_Eingestimmte_(Zaishen-Kopfgeld)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säubert_die_Kammer",
      "wiki_en": "https://web.archive.org/web/20260624125405/https://wiki.guildwars.com/wiki/Clear_the_Chamber"
    },
    "100042": {
      "name": "Cliffs of Dohjok (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
      "wiki": "https://www.guildwiki.de/wiki/Felsen_von_Dohjok_(Zaishen-Bezwingung)"
    },
    "100043": {
      "name": "Codex Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "wiki": "https://www.guildwiki.de/wiki/Kodex-Arena_(Zaishen-Kampf)"
    },
    "100044": {
      "name": "Commander Wahli (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Kommandeur_Wahli_(Zaishen-Kopfgeld)"
    },
    "100045": {
      "name": "Consulate Docks (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Konsulatshafen_(Zaishen-Mission)"
    },
    "100046": {
      "name": "Crystal Overlook (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Kristallspitze_(Zaishen-Bezwingung)"
    },
    "100047": {
      "name": "Curse of the Nornbear (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Fluch_des_Nornbären_(Zaishen-Mission)"
    },
    "100048": {
      "name": "Cursed Lands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Verfluchtes_Land_(Zaishen-Bezwingung)"
    },
    "100049": {
      "name": "D'Alessio Seaboard (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/D'Alessio-Küste_(Zaishen-Mission)"
    },
    "100050": {
      "name": "Dalada Uplands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Dalada-Hochlande_(Zaishen-Bezwingung)"
    },
    "100051": {
      "name": "Dasha Vestibule (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Vorhof_von_Dasha_(Zaishen-Mission)"
    },
    "100052": {
      "name": "Deactivating N.O.X.",
      "type": "secondary",
      "givers": [668],
      "wiki": "https://www.guildwiki.de/wiki/N.O.X._deaktivieren"
    },
    "100053": {
      "name": "Deactivating P.O.X.",
      "type": "secondary",
      "givers": [668],
      "wiki": "https://www.guildwiki.de/wiki/P.O.X._deaktivieren"
    },
    "100054": {
      "name": "Deactivating R.O.X.",
      "type": "secondary",
      "givers": [668],
      "wiki": "https://www.guildwiki.de/wiki/R.O.X._deaktivieren"
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
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_den_Tempel_des_Krieges",
      "wiki_en": "https://web.archive.org/web/20260807155035/https://wiki.guildwars.com/wiki/Defend_the_Temple_of_War"
    },
    "100056": {
      "name": "Dejarin Estate (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Dejarin-Anwesen_(Zaishen-Bezwingung)"
    },
    "100057": {
      "name": "Deldrimor Bowl (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Deldrimor-Becken_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Dämonischer_Meuchler",
      "wiki_en": "https://web.archive.org/web/20260624131506/https://wiki.guildwars.com/wiki/Demon_Assassin"
    },
    "100059": {
      "name": "Destruction's Depths (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Tiefen_der_Zerstörung_(Zaishen-Mission)"
    },
    "100060": {
      "name": "Diessa Lowlands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Tiefland_von_Diessa_(Zaishen-Bezwingung)"
    },
    "100061": {
      "name": "Diviner's Ascent (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Wahrsagerhöhe_(Zaishen-Bezwingung)"
    },
    "100062": {
      "name": "Divinity Coast (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Küste_der_Göttlichkeit_(Zaishen-Mission)"
    },
    "100063": {
      "name": "Dragon Lich (Zaishen quest)",
      "type": "secondary",
      "campaign": 0,
      "region": 21,
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Drachen-Lich_(Zaishen-Kopfgeld)"
    },
    "100064": {
      "name": "Dragon's Gullet (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Drachenschlund_(Zaishen-Bezwingung)"
    },
    "100065": {
      "name": "Drakkar Lake (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Drakkar-See_(Zaishen-Bezwingung)"
    },
    "100066": {
      "name": "Drazach Thicket (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Drazachdickicht_(Zaishen-Bezwingung)"
    },
    "100067": {
      "name": "Dreadnought's Drift (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Schreckensdrift_(Zaishen-Bezwingung)"
    },
    "100068": {
      "name": "Droajam, Mage of the Sands (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Droajam,_Magier_des_Sandes_(Zaishen-Kopfgeld)"
    },
    "100069": {
      "name": "Dry Top (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Trockenkuppe_(Zaishen-Bezwingung)"
    },
    "100070": {
      "name": "Duncan the Black (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["3,750 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Duncan_der_Schwarze_(Zaishen-Kopfgeld)"
    },
    "100071": {
      "name": "Dunes of Despair (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Dünen_der_Verzweiflung_(Zaishen-Mission)"
    },
    "100072": {
      "name": "Dzagonur Bastion (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Bastion_von_Dzagonur_(Zaishen-Mission)"
    },
    "100073": {
      "name": "Eastern Frontier (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Ostgrenze_(Zaishen-Bezwingung)"
    },
    "100074": {
      "name": "Eldritch Ettin (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Eldritch-Ettin_(Zaishen-Kopfgeld)"
    },
    "100075": {
      "name": "Elona Reach (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Elonaspitze_(Zaishen-Mission)"
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
      "wiki": "https://www.guildwiki.de/wiki/Geleit_der_Seelen",
      "wiki_en": "https://web.archive.org/web/20260624131340/https://wiki.guildwars.com/wiki/Escort_of_Souls"
    },
    "100077": {
      "name": "Ettin's Back (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Ettinbuckel_(Zaishen-Bezwingung)"
    },
    "100078": {
      "name": "Fahranur, The First City (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
      "wiki": "https://www.guildwiki.de/wiki/Fahranur,_die_Erste_Stadt_(Zaishen-Bezwingung)"
    },
    "100079": {
      "name": "Fendi Nin (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Fendi_Nin_(Zaishen-Kopfgeld)"
    },
    "100080": {
      "name": "Fenrir (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Fenrir_(Zaishen-Kopfgeld)"
    },
    "100081": {
      "name": "Ferndale (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["10,000 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Farntal_(Zaishen-Bezwingung)"
    },
    "100082": {
      "name": "Finding the Bloodstone (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Auf_der_Suche_nach_dem_Blutstein_(Zaishen-Mission)"
    },
    "100083": {
      "name": "Flame Temple Corridor (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Flammentempel-Gang_(Zaishen-Bezwingung)"
    },
    "100084": {
      "name": "Forgewight (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Schmiedewicht_(Zaishen-Kopfgeld)"
    },
    "100085": {
      "name": "Fort Aspenwood (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["5,000 Imperial faction"],
      "wiki": "https://www.guildwiki.de/wiki/Fort_Espenwald_(Zaishen-Kampf)"
    },
    "100086": {
      "name": "Fort Ranik (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Fort_Ranik_(Zaishen-Mission)"
    },
    "100087": {
      "name": "Forum Highlands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Forum-Hochland_(Zaishen-Bezwingung)"
    },
    "100088": {
      "name": "Fozzy Yeoryios (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Fozzy_Yeoryios_(Zaishen-Kopfgeld)"
    },
    "100089": {
      "name": "Fronis Irontoe (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Fronis_Eisenzehe_(Zaishen-Kopfgeld)"
    },
    "100090": {
      "name": "Frostmaw the Kinslayer (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Frostrachen_der_Sippenschlächter_(Zaishen-Kopfgeld)"
    },
    "100091": {
      "name": "Frozen Forest (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Frostwald_(Zaishen-Bezwingung)"
    },
    "100092": {
      "name": "G.O.L.E.M. (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/G.O.L.E.M._(Zaishen-Mission)"
    },
    "100093": {
      "name": "Gandara, the Moon Fortress (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear points"],
      "wiki": "https://www.guildwiki.de/wiki/Gandara,_die_Mondfestung_(Zaishen-Bezwingung)"
    },
    "100094": {
      "name": "Garden of Seborhin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Garten_von_Seborhin_(Zaishen-Bezwingung)"
    },
    "100095": {
      "name": "Gate of Desolation (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Ödland-Tor_(Zaishen-Mission)"
    },
    "100096": {
      "name": "Gate of Madness (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Tor_des_Wahnsinns_(Zaishen-Mission)"
    },
    "100097": {
      "name": "Gate of Pain (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Tor_des_Schmerzes_(Zaishen-Mission)"
    },
    "100098": {
      "name": "Gates of Kryta (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Tore_von_Kryta_(Zaishen-Mission)"
    },
    "100099": {
      "name": "Ghial the Bone Dancer (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Ghial_der_Knochentänzer_(Zaishen-Kopfgeld)"
    },
    "100100": {
      "name": "Grand Court of Sebelkeh (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Großer_Hof_von_Sebelkeh_(Zaishen-Mission)"
    },
    "100101": {
      "name": "Grenth's Footprint (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Grenths_Fußabdruck_(Zaishen-Bezwingung)"
    },
    "100102": {
      "name": "Griffon's Mouth (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Greifenmaul_(Zaishen-Bezwingung)"
    },
    "100103": {
      "name": "Grothmar Wardowns (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Grothmar-Kriegshügel_(Zaishen-Bezwingung)"
    },
    "100104": {
      "name": "Guild Versus Guild (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1500,
      "rewards": ["9,000 Balthazar faction"],
      "wiki": "https://www.guildwiki.de/wiki/Gilde_gegen_Gilde_(Zaishen-Kampf)"
    },
    "100105": {
      "name": "Gyala Hatchery (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Gyala-Brutstätte_(Zaishen-Mission)"
    },
    "100106": {
      "name": "Gyala Hatchery (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Gyala-Brutstätte_(Zaishen-Bezwingung)"
    },
    "100107": {
      "name": "Haiju Lagoon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Haiju-Lagune_(Zaishen-Bezwingung)"
    },
    "100108": {
      "name": "Harn and Maxine Coldstone (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Harn_und_Maxine_Coldstone_(Zaishen-Kopfgeld)"
    },
    "100109": {
      "name": "Havok Soulwail (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Havok_Seelenheuler_(Zaishen-Kopfgeld)"
    },
    "100110": {
      "name": "Hell's Precipice (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Vorhof_der_Hölle_(Zaishen-Mission)"
    },
    "100111": {
      "name": "Hero Battles (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "wiki": "https://www.guildwiki.de/wiki/Heldenkämpfe_(Zaishen-Kampf)"
    },
    "100112": {
      "name": "Heroes' Ascent (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1500,
      "rewards": ["9,000 Balthazar faction"],
      "wiki": "https://www.guildwiki.de/wiki/Aufstieg_der_Helden_(Zaishen-Kampf)"
    },
    "100113": {
      "name": "Holdings of Chokhin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Güter_von_Chokhin_(Zaishen-Bezwingung)"
    },
    "100114": {
      "name": "Ice Caves of Sorrow (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Eishöhlen_der_Betrübnis_(Zaishen-Mission)"
    },
    "100115": {
      "name": "Ice Cliff Chasms (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Eisklippen-Abgründe_(Zaishen-Bezwingung)"
    },
    "100116": {
      "name": "Ice Floe (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Eisscholle_(Zaishen-Bezwingung)"
    },
    "100117": {
      "name": "Icedome (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Eisdom_(Zaishen-Bezwingung)"
    },
    "100118": {
      "name": "Ilsundur, Lord of Fire (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Ilsundur,_Herr_des_Feuers_(Zaishen-Kopfgeld)"
    },
    "100119": {
      "name": "Imperial Sanctum (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Kaiserliches_Refugium_(Zaishen-Mission)"
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
      "wiki": "https://www.guildwiki.de/wiki/Eingesperrte_Geister",
      "wiki_en": "https://web.archive.org/web/20260624125103/https://wiki.guildwars.com/wiki/Imprisoned_Spirits"
    },
    "100121": {
      "name": "Iron Horse Mine (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Eisenrossmine_(Zaishen-Bezwingung)"
    },
    "100122": {
      "name": "Iron Mines of Moladune (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Eisenminen_von_Moladune_(Zaishen-Mission)"
    },
    "100123": {
      "name": "Issnur Isles (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Issnur-Inseln_(Zaishen-Bezwingung)"
    },
    "100124": {
      "name": "Jade Quarry (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["5,000 Imperial faction"],
      "wiki": "https://www.guildwiki.de/wiki/Jadesteinbruch"
    },
    "100125": {
      "name": "Jaga Moraine (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Jaga-Moräne_(Zaishen-Bezwingung)"
    },
    "100126": {
      "name": "Jahai Bluffs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Jahai-Klippen_(Zaishen-Bezwingung)"
    },
    "100127": {
      "name": "Jarimiya the Unmerciful (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Jarimiya_der_Gnadenlose_(Zaishen-Kopfgeld)"
    },
    "100128": {
      "name": "Jaya Bluffs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Jaya-Klippen_(Zaishen-Bezwingung)"
    },
    "100129": {
      "name": "Jedeh the Mighty (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Jedeh_der_Mächtige_(Zaishen-Kopfgeld)"
    },
    "100130": {
      "name": "Jennur's Horde (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Jennurs_Horde_(Zaishen-Mission)"
    },
    "100131": {
      "name": "Joffs the Mitigator (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Joffs_der_Sanfte_(Zaishen-Kopfgeld)"
    },
    "100132": {
      "name": "Jokanur Diggings (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Ausgrabungsstätte_von_Jokanur_(Zaishen-Mission)"
    },
    "100133": {
      "name": "Joko's Domain (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Jokos_Domäne_(Zaishen-Bezwingung)"
    },
    "100134": {
      "name": "Justiciar Thommis (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Justiziar_Thommis_(Zaishen-Kopfgeld)"
    },
    "100135": {
      "name": "Kanaxai (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["7,500 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Kanaxai_(Zaishen-Kopfgeld)"
    },
    "100136": {
      "name": "Kepkhet Marrowfeast (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Kepkhet_Markschmaus_(Zaishen-Kopfgeld)"
    },
    "100137": {
      "name": "Kessex Peak (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Kessex-Gipfel_(Zaishen-Bezwingung)"
    },
    "100138": {
      "name": "Khabuus (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Khabuus_(Zaishen-Kopfgeld)"
    },
    "100139": {
      "name": "Khobay the Betrayer",
      "type": "secondary",
      "givers": [635],
      "xp": 10000,
      "gold": 750,
      "objectives": [[0, "Strike down Lord Khobay"], [0, "See the Eternal Forgemaster for your reward"]],
      "requires": [100055],
      "wiki": "https://www.guildwiki.de/wiki/Khobay_der_Verräter",
      "wiki_en": "https://web.archive.org/web/20260805221352/https://wiki.guildwars.com/wiki/Khobay_the_Betrayer"
    },
    "100140": {
      "name": "Kinya Province (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Provinz_Kinya_(Zaishen-Bezwingung)"
    },
    "100141": {
      "name": "Kodonur Crossroads (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Kodonur-Kreuzung_(Zaishen-Mission)"
    },
    "100142": {
      "name": "Korshek the Immolated (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["100 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Korshek_der_Geopferte_(Zaishen-Kopfgeld)"
    },
    "100143": {
      "name": "Kunvie Firewing (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction", "500 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Kunvie_Feuerflügel_(Zaishen-Kopfgeld)"
    },
    "100144": {
      "name": "Lahtenda Bog (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear points"],
      "wiki": "https://www.guildwiki.de/wiki/Lahtenda-Sumpf_(Zaishen-Bezwingung)"
    },
    "100145": {
      "name": "Lord Jadoth (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Fürst_Jadoth_(Zaishen-Kopfgeld)"
    },
    "100146": {
      "name": "Lord Khobay (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Lord_Khobay_(Zaishen-Kopfgeld)"
    },
    "100147": {
      "name": "Lornar's Pass (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Lornarpass_(Zaishen-Bezwingung)"
    },
    "100148": {
      "name": "Magmus (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Magmus_(Zaishen-Kopfgeld)"
    },
    "100149": {
      "name": "Magus Stones (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Magussteine_(Zaishen-Bezwingung)"
    },
    "100150": {
      "name": "Maishang Hills (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Maishang-Hügel_(Zaishen-Bezwingung)"
    },
    "100151": {
      "name": "Majesty's Rest (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Königsruh_(Zaishen-Bezwingung)"
    },
    "100152": {
      "name": "Mamnoon Lagoon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Mamnoon-Lagune_(Zaishen-Bezwingung)"
    },
    "100153": {
      "name": "Marga Coast (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Marga-Küste_(Zaishen-Bezwingung)"
    },
    "100154": {
      "name": "Mehtani Keys (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Mehtani-Archipel_(Zaishen-Bezwingung)"
    },
    "100155": {
      "name": "Melandru's Hope (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Melandrus_Hoffnung_(Zaishen-Bezwingung)"
    },
    "100156": {
      "name": "Mineral Springs (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Mineralquellen_(Zaishen-Bezwingung)"
    },
    "100157": {
      "name": "Miniature Companion: Dungeons",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2007,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Verliese"
    },
    "100158": {
      "name": "Miniature Companion: Eye of the North",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2007,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Auge_des_Nordens"
    },
    "100159": {
      "name": "Miniature Companion: Factions",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Fraktionen"
    },
    "100160": {
      "name": "Miniature Companion: Nightfall",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Anbruch_der_Nacht"
    },
    "100161": {
      "name": "Miniature Companion: Prophecies",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2005,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Prophezeiungen"
    },
    "100162": {
      "name": "Miniature Companion: Sorrow's Furnace",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2005,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Hochofen_der_Betrübnis"
    },
    "100163": {
      "name": "Miniature Companion: The Deep",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Die_Tiefe"
    },
    "100164": {
      "name": "Miniature Companion: The Domain of Anguish",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Die_Domäne_der_Pein"
    },
    "100165": {
      "name": "Miniature Companion: The Fissure of Woe",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Der_Riss_des_Kummers"
    },
    "100166": {
      "name": "Miniature Companion: The Underworld",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Die_Unterwelt"
    },
    "100167": {
      "name": "Miniature Companion: Urgoz's Warren",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Urgoz'_Bau"
    },
    "100168": {
      "name": "Miniature Companion: Young Heroes",
      "type": "event",
      "givers": [664],
      "xp": 2025,
      "gold": 2006,
      "wiki": "https://www.guildwiki.de/wiki/Miniatur-Gefährte:_Junge_Helden"
    },
    "100169": {
      "name": "Minister Cho's Estate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Minister_Chos_Anwesen_(Zaishen-Mission)"
    },
    "100170": {
      "name": "Minister Cho's Estate (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Minister_Chos_Anwesen_(Zaishen-Bezwingung)"
    },
    "100171": {
      "name": "Mobrin, Lord of the Marsh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Mobrin,_Herr_des_Sumpfes_(Zaishen-Kopfgeld)"
    },
    "100172": {
      "name": "Moddok Crevice (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Moddok-Spalte_(Zaishen-Mission)"
    },
    "100173": {
      "name": "Mohby Windbeak (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Mohby_Windschnabel_(Zaishen-Kopfgeld)"
    },
    "100174": {
      "name": "Molotov Rocktail (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Molotov_Felsschweif_(Zaishen-Kopfgeld)"
    },
    "100175": {
      "name": "Morostav Trail (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["10,000 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Morostovweg_(Zaishen-Bezwingung)"
    },
    "100176": {
      "name": "Mount Qinkai (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Qinkai_(Zaishen-Bezwingung)"
    },
    "100177": {
      "name": "Mourning Veil Falls (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Trauerflorfälle_(Zaishen-Bezwingung)"
    },
    "100178": {
      "name": "Mungri Magicbox (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Mungri_Magiebox_(Zaishen-Kopfgeld)"
    },
    "100179": {
      "name": "Murakai, Lady of the Night (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Murakai,_Herrin_der_Nacht_(Zaishen-Kopfgeld)"
    },
    "100180": {
      "name": "Myish, Lady of the Lake (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Myish,_Herrin_des_Sees_(Zaishen-Kopfgeld)"
    },
    "100181": {
      "name": "Nahpui Quarter (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Nahpuiviertel_(Zaishen-Mission)"
    },
    "100182": {
      "name": "Nahpui Quarter (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Nahpuiviertel_(Zaishen-Bezwingung)"
    },
    "100183": {
      "name": "Nebo Terrace (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Nebo-Terrasse_(Zaishen-Bezwingung)"
    },
    "100184": {
      "name": "Nolani Academy (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Nolani-Akademie_(Zaishen-Mission)"
    },
    "100185": {
      "name": "Norrhart Domains (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Norrhart-Gebiete_(Zaishen-Bezwingung)"
    },
    "100186": {
      "name": "North Kryta Province (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Provinz_Nordkryta_(Zaishen-Bezwingung)"
    },
    "100187": {
      "name": "Nulfastu Earthbound (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,250 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Nulfastu_Erdgebundener_(Zaishen-Kopfgeld)"
    },
    "100188": {
      "name": "Nundu Bay (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Nundu-Bucht_(Zaishen-Mission)"
    },
    "100189": {
      "name": "Old Ascalon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Alt-Ascalon_(Zaishen-Bezwingung)"
    },
    "100190": {
      "name": "Panjiang Peninsula (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Panjiang-Halbinsel_(Zaishen-Bezwingung)"
    },
    "100191": {
      "name": "Perdition Rock (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Fels_der_Verdammnis_(Zaishen-Bezwingung)"
    },
    "100192": {
      "name": "Pilgrimage to the Hall of Heroes",
      "type": "event",
      "givers": [694],
      "event": 5,
      "repeatable": true,
      "wiki": "https://www.guildwiki.de/wiki/Pilgerreise_zur_Halle_der_Helden"
    },
    "100193": {
      "name": "Plague of Destruction (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Seuche_der_Zerstörung_(Zaishen-Kopfgeld)"
    },
    "100194": {
      "name": "Plains of Jarin (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear points"],
      "wiki": "https://www.guildwiki.de/wiki/Flachland_von_Jarin_(Zaishen-Bezwingung)"
    },
    "100195": {
      "name": "Pockmark Flats (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Pockennarbenebene_(Zaishen-Bezwingung)"
    },
    "100196": {
      "name": "Pogahn Passage (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Passage_von_Pogahn_(Zaishen-Mission)"
    },
    "100197": {
      "name": "Poisoned Outcrops (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Giftige_Auswüchse_(Zaishen-Bezwingung)"
    },
    "100198": {
      "name": "Pongmei Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Pongmei-Tal_(Zaishen-Bezwingung)"
    },
    "100199": {
      "name": "Priest of Menzies (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Menzies'_Priester_(Zaishen-Kopfgeld)"
    },
    "100200": {
      "name": "Prismatic Ooze (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Spektral-Schleim_(Zaishen-Kopfgeld)"
    },
    "100201": {
      "name": "Prophet's Path (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Pfad_des_Propheten_(Zaishen-Bezwingung)"
    },
    "100202": {
      "name": "Pywatt the Swift (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Pywatt_der_Schnelle_(Zaishen-Kopfgeld)"
    },
    "100203": {
      "name": "Quansong Spiritspeak (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Quansong_Geistsprecher_(Zaishen-Kopfgeld)"
    },
    "100204": {
      "name": "Raisu Palace (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Raisu-Palast_(Zaishen-Mission)"
    },
    "100205": {
      "name": "Raisu Palace (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Raisu-Palast_(Zaishen-Bezwingung)"
    },
    "100206": {
      "name": "Rand Stormweaver (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Rand_Sturmweber_(Zaishen-Kopfgeld)"
    },
    "100207": {
      "name": "Random Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 500,
      "rewards": ["3000 Balthazar faction"],
      "wiki": "https://www.guildwiki.de/wiki/Zufallsarenen_(Zaishen-Kampf)"
    },
    "100208": {
      "name": "Reed Bog (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Schilfmoor_(Zaishen-Bezwingung)"
    },
    "100209": {
      "name": "Regent Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Regentental_(Zaishen-Bezwingung)"
    },
    "100210": {
      "name": "Remnant of Antiquities (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Überrest_der_Vorzeit_(Zaishen-Kopfgeld)"
    },
    "100211": {
      "name": "Resplendent Makuun (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Makuun_die_Leuchtende_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Stellt_den_Tempel_des_Krieges_wieder_her",
      "wiki_en": "https://web.archive.org/web/20260807155048/https://wiki.guildwars.com/wiki/Restore_the_Temple_of_War"
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
      "wiki": "https://www.guildwiki.de/wiki/Grenths_Monumente_wiederherstellen",
      "wiki_en": "https://web.archive.org/web/20260717161145/https://wiki.guildwars.com/wiki/Restoring_Grenth%27s_Monuments"
    },
    "100214": {
      "name": "Rhea's Crater (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Rheas_Krater_(Zaishen-Bezwingung)"
    },
    "100215": {
      "name": "Rilohn Refuge (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Rilohn-Refugium_(Zaishen-Mission)"
    },
    "100216": {
      "name": "Ring of Fire (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Feuerring_(Zaishen-Mission)"
    },
    "100217": {
      "name": "Riven Earth (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Zerrissene_Erde_(Zaishen-Bezwingung)"
    },
    "100218": {
      "name": "Riverside Province (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Flussuferprovinz_(Zaishen-Mission)"
    },
    "100219": {
      "name": "Rotscale (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Faulschuppe_(Zaishen-Kopfgeld)"
    },
    "100220": {
      "name": "Royen Beastkeeper (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Royen_Bestienwärter_(Zaishen-Kopfgeld)"
    },
    "100221": {
      "name": "Rragar Maneater (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Rragar_Menschenfresser_(Zaishen-Kopfgeld)"
    },
    "100222": {
      "name": "Ruins of Morah (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Ruinen_von_Morah_(Zaishen-Mission)"
    },
    "100223": {
      "name": "Ruins of Surmia (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Ruinen_von_Surmia_(Zaishen-Mission)"
    },
    "100224": {
      "name": "Sacnoth Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Sacnoth-Tal_(Zaishen-Bezwingung)"
    },
    "100225": {
      "name": "Sage Lands (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Land_der_Weisen_(Zaishen-Bezwingung)"
    },
    "100226": {
      "name": "Salt Flats (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Salzebenen_(Zaishen-Bezwingung)"
    },
    "100227": {
      "name": "Sanctum Cay (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Riff_der_Stille_(Zaishen-Mission)"
    },
    "100228": {
      "name": "Saoshang Trail (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Saoshangweg_(Zaishen-Bezwingung)"
    },
    "100229": {
      "name": "Scoundrel's Rise (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Schurkenhügel_(Zaishen-Bezwingung)"
    },
    "100230": {
      "name": "Selvetarm (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Selvetarm_(Zaishen-Kopfgeld)"
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
      "wiki": "https://www.guildwiki.de/wiki/Grenths_Diener",
      "wiki_en": "https://web.archive.org/web/20260624125655/https://wiki.guildwars.com/wiki/Servants_of_Grenth"
    },
    "100232": {
      "name": "Shadow's Passage (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Schattenpassage_(Zaishen-Bezwingung)"
    },
    "100233": {
      "name": "Shenzun Tunnels (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Shenzun-Tunnel_(Zaishen-Bezwingung)"
    },
    "100234": {
      "name": "Silent Surf (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Stumme_Brandung_(Zaishen-Bezwingung)"
    },
    "100235": {
      "name": "Silverwood (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Silberholz_(Zaishen-Bezwingung)"
    },
    "100236": {
      "name": "Skyward Reach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Himmelsspitze_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Sklaven_von_Menzies",
      "wiki_en": "https://web.archive.org/web/20260214234403/https://wiki.guildwars.com/wiki/Slaves_of_Menzies"
    },
    "100238": {
      "name": "Snake Dance  (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Schlangentanz_(Zaishen-Bezwingung)"
    },
    "100239": {
      "name": "Sparkfly Swamp (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Funkenschwärmersumpf_(Zaishen-Bezwingung)"
    },
    "100240": {
      "name": "Spearhead Peak (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Speerspitzengipfel_(Zaishen-Bezwingung)"
    },
    "100241": {
      "name": "Ssuns, Blessed of Dwayna (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "rewards": ["500 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Ssuns_der_von_Dwayna_Gesegnete_(Zaishen-Kopfgeld)"
    },
    "100242": {
      "name": "Stingray Strand (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Stachelrochenstrand_(Zaishen-Bezwingung)"
    },
    "100243": {
      "name": "Sunjiang District (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Sunjiang-Bezirk_(Zaishen-Mission)"
    },
    "100244": {
      "name": "Sunjiang District (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Sunjiang-Bezirk_(Zaishen-Bezwingung)"
    },
    "100245": {
      "name": "Sunqua Vale (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Sunqua-Tal_(Zaishen-Bezwingung)"
    },
    "100246": {
      "name": "Sunward Marches (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Sonnenwärtige_Sümpfe_(Zaishen-Bezwingung)"
    },
    "100247": {
      "name": "TPS Regulator Golem (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/TPS-Regler-Golem_(Zaishen-Kopfgeld)"
    },
    "100248": {
      "name": "Tahnnakai Temple (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Tahnnakai-Tempel_(Zaishen-Mission)"
    },
    "100249": {
      "name": "Tahnnakai Temple (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Tahnnakai-Tempel_(Zaishen-Bezwingung)"
    },
    "100250": {
      "name": "Talmark Wilderness (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Talmark-Wildnis_(Zaishen-Bezwingung)"
    },
    "100251": {
      "name": "Talus Chute (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Talusschnelle_(Zaishen-Bezwingung)"
    },
    "100252": {
      "name": "Tangle Root (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Wildwurzel_(Zaishen-Bezwingung)"
    },
    "100253": {
      "name": "Tasca's Demise (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Tascas_Ableben_(Zaishen-Bezwingung)"
    },
    "100254": {
      "name": "Team Arena (Zaishen quest)",
      "type": "secondary",
      "givers": [223],
      "gold": 1000,
      "rewards": ["6,000 Balthazar faction"],
      "wiki": "https://www.guildwiki.de/wiki/Team-Arena_(Zaishen-Kampf)"
    },
    "100255": {
      "name": "Tears of the Fallen (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Tränen_der_Gefallenen_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Schrecknetzkönigin_(Quest)",
      "wiki_en": "https://web.archive.org/web/20260218212422/https://wiki.guildwars.com/wiki/Terrorweb_Queen"
    },
    "100257": {
      "name": "The Alkali Pan (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Alkalibecken_(Zaishen-Bezwingung)"
    },
    "100258": {
      "name": "The Arid Sea (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Das_Trockene_Meer_(Zaishen-Bezwingung)"
    },
    "100259": {
      "name": "The Black Beast of Arrgh (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Schwarze_Bestie_von_Arrgh_(Zaishen-Kopfgeld)"
    },
    "100260": {
      "name": "The Black Curtain (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Der_Schwarze_Vorhang_(Zaishen-Bezwingung)"
    },
    "100261": {
      "name": "The Breach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Die_Bresche_(Zaishen-Bezwingung)"
    },
    "100262": {
      "name": "The Darkness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Das_Dunkel_(Zaishen-Kopfgeld)"
    },
    "100263": {
      "name": "The Dragon's Lair (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Die_Drachenhöhle_(Zaishen-Mission)"
    },
    "100264": {
      "name": "The Elusive Golemancer (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_scheue_Golemantin_(Zaishen-Mission)"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Herr_der_ewigen_Schmiede",
      "wiki_en": "https://web.archive.org/web/20260807155025/https://wiki.guildwars.com/wiki/The_Eternal_Forgemaster"
    },
    "100266": {
      "name": "The Eternal Grove (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Ewige_Hain_(Zaishen-Mission)"
    },
    "100267": {
      "name": "The Eternal Grove (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Ewige_Hain_(Zaishen-Bezwingung)"
    },
    "100268": {
      "name": "The Falls (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Die_Wasserfälle_(Zaishen-Bezwingung)"
    },
    "100269": {
      "name": "The Floodplain of Mahnkelon (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Schwemmebene_von_Mahnkelon_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_vier_Reiter",
      "wiki_en": "https://web.archive.org/web/20260717155346/https://wiki.guildwars.com/wiki/The_Four_Horsemen"
    },
    "100271": {
      "name": "The Four Horsemen (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Die_vier_Reiter_(Zaishen-Kopfgeld)"
    },
    "100272": {
      "name": "The Frost Gate (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Das_Frosttor_(Zaishen-Mission)"
    },
    "100273": {
      "name": "The Great Northern Wall (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Der_Große_Nordwall_(Zaishen-Mission)"
    },
    "100274": {
      "name": "The Greater Darkness (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["750 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Große_Dunkel_(Zaishen-Kopfgeld)"
    },
    "100275": {
      "name": "The Hidden City of Ahdashim (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Verborgene_Stadt_von_Ahdashim_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Jagd",
      "wiki_en": "https://web.archive.org/web/20260805221352/https://wiki.guildwars.com/wiki/The_Hunt"
    },
    "100277": {
      "name": "The Iron Forgeman (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Der_Eiserne_Schmied_(Zaishen-Kopfgeld)"
    },
    "100278": {
      "name": "The Mirror of Lyss (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Spiegel_von_Lyss_(Zaishen-Bezwingung)"
    },
    "100279": {
      "name": "The Nameless Masters",
      "type": "secondary",
      "givers": [330],
      "rewards": ["Unlocks Zaishen Challenge"],
      "next": [100296],
      "wiki": "https://www.guildwiki.de/wiki/Der_Namenlose_Meister"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Nachtmann_kommt",
      "wiki_en": "https://web.archive.org/web/20260206113456/https://wiki.guildwars.com/wiki/The_Nightman_Cometh"
    },
    "100281": {
      "name": "The Path of the Zaishen Elite",
      "type": "secondary",
      "givers": [333],
      "wiki": "https://www.guildwiki.de/wiki/Der_Pfad_der_Zaishen-Elite"
    },
    "100282": {
      "name": "The Path to Combat: Codex Arena",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Strategist's Zaishen Strongbox"],
      "requires": [100285],
      "next": [100286, 100284],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Kampf:_Kodex-Arena"
    },
    "100283": {
      "name": "The Path to Combat: Guild Battles",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Champion's Zaishen Strongbox"],
      "requires": [100286],
      "next": [100287],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Kampf:_Gildenkämpfe"
    },
    "100284": {
      "name": "The Path to Combat: Heroes' Ascent",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Hero's Zaishen Strongbox"],
      "requires": [100282],
      "next": [100288],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Kampf:_Aufstieg_der_Helden"
    },
    "100285": {
      "name": "The Path to Combat: Random Arena",
      "type": "secondary",
      "givers": [357],
      "xp": 2500,
      "rewards": ["Gladiator's Zaishen Strongbox"],
      "next": [100289],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Kampf:_Zufallsarena"
    },
    "100286": {
      "name": "The Path to Victory: Codex Arena",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Strategist's Zaishen Strongbox"],
      "requires": [100282],
      "next": [100283],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Sieg:_Kodex-Arena"
    },
    "100287": {
      "name": "The Path to Victory: Guild Battles",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Champion's Zaishen Strongbox"],
      "requires": [100283],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Sieg:_Gildenkämpfe"
    },
    "100288": {
      "name": "The Path to Victory: Heroes' Ascent",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Hero's Zaishen Strongbox"],
      "requires": [100284],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Sieg:_Aufstieg_der_Helden"
    },
    "100289": {
      "name": "The Path to Victory: Random Arenas",
      "type": "secondary",
      "givers": [357],
      "xp": 5000,
      "rewards": ["Gladiator's Zaishen Strongbox"],
      "requires": [100285],
      "next": [100282],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Sieg:_Zufallsarenen"
    },
    "100290": {
      "name": "The Ruptured Heart (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Zerrissene_Herz_(Zaishen-Bezwingung)"
    },
    "100291": {
      "name": "The Scar (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Die_Narbe_(Zaishen-Bezwingung)"
    },
    "100292": {
      "name": "The Shattered Ravines (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Zerklüfteten_Schluchten_(Zaishen-Bezwingung)"
    },
    "100293": {
      "name": "The Stygian Lords (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Stygischen_Fürsten_(Zaishen-Kopfgeld)"
    },
    "100294": {
      "name": "The Stygian Underlords (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["300 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Stygischen_Unterfürsten_(Zaishen-Kopfgeld)"
    },
    "100295": {
      "name": "The Sulfurous Wastes (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Schwefel-Einöde_(Zaishen-Bezwingung)"
    },
    "100296": {
      "name": "The Team Trials",
      "type": "secondary",
      "givers": [330],
      "requires": [100279],
      "wiki": "https://www.guildwiki.de/wiki/Die_Teamtests"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Herr_der_Klagen",
      "wiki_en": "https://web.archive.org/web/20260807162941/https://wiki.guildwars.com/wiki/The_Wailing_Lord"
    },
    "100298": {
      "name": "The Wilds (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Die_Wildnis_(Zaishen-Mission)"
    },
    "100299": {
      "name": "Thirsty River (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Durstiger_Fluss_(Zaishen-Mission)"
    },
    "100300": {
      "name": "Thunderhead Keep (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Feste_Donnerkopf_(Zaishen-Mission)"
    },
    "100301": {
      "name": "Tihark Orchard (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Obstgarten_von_Tihark_(Zaishen-Mission)"
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
      "wiki": "https://www.guildwiki.de/wiki/Turm_der_Tapferkeit_(Quest)",
      "wiki_en": "https://web.archive.org/web/20260807152108/https://wiki.guildwars.com/wiki/Tower_of_Courage"
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
      "wiki": "https://www.guildwiki.de/wiki/Turm_der_Stärke_(Quest)",
      "wiki_en": "https://web.archive.org/web/20260806161710/https://wiki.guildwars.com/wiki/Tower_of_Strength"
    },
    "100304": {
      "name": "Traveler's Vale  (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Tal_des_Reisenden_(Zaishen-Bezwingung)"
    },
    "100305": {
      "name": "Turai's Procession (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["1,000 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Turais_Weg_(Zaishen-Bezwingung)"
    },
    "100306": {
      "name": "Twin Serpent Lakes (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Zwillingsschlangenseen_(Zaishen-Bezwingung)"
    },
    "100307": {
      "name": "Unwaking Waters (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["2,500 Kurzick faction", "2,500 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Verschlafene_Gewässer_(Zaishen-Mission)"
    },
    "100308": {
      "name": "Unwaking Waters (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["7,000 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Verschlafene_Gewässer_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Ungebetene_Gäste",
      "wiki_en": "https://web.archive.org/web/20260730143923/https://wiki.guildwars.com/wiki/Unwanted_Guests"
    },
    "100310": {
      "name": "Urgoz (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["7,500 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Urgoz_(Zaishen-Kopfgeld)"
    },
    "100311": {
      "name": "Varajar Fells (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 15000,
      "gold": 2000,
      "rewards": ["5,000 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Varajar-Moor_(Zaishen-Bezwingung)"
    },
    "100312": {
      "name": "Vehjin Mines (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Vehjin-Minen_(Zaishen-Bezwingung)"
    },
    "100313": {
      "name": "Vehtendi Valley (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Vehtendi-Tal_(Zaishen-Bezwingung)"
    },
    "100314": {
      "name": "Vengeful Aatxe (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Rachsüchtiger_Aatxe_(Zaishen-Kopfgeld)"
    },
    "100315": {
      "name": "Venta Cemetery (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["300 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Totenanger_von_Venta_(Zaishen-Mission)"
    },
    "100316": {
      "name": "Verata (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 1000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Verata_(Zaishen-Kopfgeld)"
    },
    "100317": {
      "name": "Verdant Cascades (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["3,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Grüne_Kaskaden_(Zaishen-Bezwingung)"
    },
    "100318": {
      "name": "Vizunah Square (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Vizunahplatz_(Zaishen-Mission)"
    },
    "100319": {
      "name": "Vulture Drifts (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Geierdünen_(Zaishen-Bezwingung)"
    },
    "100320": {
      "name": "Wajjun Bazaar (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Wajjun-Basar_(Zaishen-Bezwingung)"
    },
    "100321": {
      "name": "Warband of Brothers (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 3000,
      "gold": 500,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Brudertrupp_(Zaishen-Mission)"
    },
    "100322": {
      "name": "Watchtower Coast (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Wachturmküste_(Zaishen-Bezwingung)"
    },
    "100323": {
      "name": "Wilderness of Bahdza (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Wildnis_von_Bahdza_(Zaishen-Bezwingung)"
    },
    "100324": {
      "name": "Witman's Folly (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Witmans_Torheit_(Zaishen-Bezwingung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Zornige_Geister",
      "wiki_en": "https://web.archive.org/web/20260624125106/https://wiki.guildwars.com/wiki/Wrathful_Spirits"
    },
    "100326": {
      "name": "Xaquang Skyway (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Xaquang-Himmelsweg_(Zaishen-Bezwingung)"
    },
    "100327": {
      "name": "Yatendi Canyons (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["750 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Yahtendi-Schluchten_(Zaishen-Bezwingung)"
    },
    "100328": {
      "name": "Z'him Monns (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Asura reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Z'him_Monns_(Zaishen-Kopfgeld)"
    },
    "100329": {
      "name": "Zehlon Reach (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["750 Sunspear points"],
      "wiki": "https://www.guildwiki.de/wiki/Zehlon-Bucht_(Zaishen-Bezwingung)"
    },
    "100330": {
      "name": "Zen Daijun (Zaishen quest)",
      "type": "secondary",
      "givers": [185],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Zen_Daijun_(Zaishen-Mission)"
    },
    "100331": {
      "name": "Zen Daijun (Zaishen vanquish)",
      "type": "secondary",
      "givers": [191],
      "xp": 10000,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Zen_Daijun_(Zaishen-Bezwingung)"
    },
    "100332": {
      "name": "Zinn's Task",
      "type": "secondary",
      "givers": [668],
      "xp": 50000,
      "gold": 10000,
      "rewards": ["10 Automaton Summoning Stones", "10 Sinister Automatonics"],
      "wiki": "https://www.guildwiki.de/wiki/Zinns_Aufgabe"
    },
    "100333": {
      "name": "Zoldark the Unholy (Zaishen quest)",
      "type": "secondary",
      "givers": [190],
      "xp": 10000,
      "gold": 1500,
      "rewards": ["2,500 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Zoldark_der_Unheilige_(Zaishen-Kopfgeld)"
    },
    "100334": {
      "name": "A Gate Too Far",
      "type": "primary",
      "givers": [249],
      "requires": [100454],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Portal_zu_weit"
    },
    "100335": {
      "name": "A Good Deed",
      "type": "secondary",
      "givers": [405],
      "xp": 5000,
      "gold": 500,
      "rewards": ["500 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Eine_gute_Tat."
    },
    "100336": {
      "name": "A Hunter's Pride",
      "type": "secondary",
      "givers": [626],
      "skills": [2374],
      "rewards": ["100 Norn reputation points", "3 Honeycombs"],
      "requires": [100346],
      "wiki": "https://www.guildwiki.de/wiki/Jägerstolz"
    },
    "100337": {
      "name": "A Little Help",
      "type": "primary",
      "givers": [501],
      "xp": 2000,
      "rewards": ["250 Asura reputation points"],
      "next": [100361, 100380],
      "wiki": "https://www.guildwiki.de/wiki/Ein_wenig_Hilfe"
    },
    "100338": {
      "name": "A Time for Heroes",
      "type": "primary",
      "givers": [453],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Zeit_für_Helden"
    },
    "100339": {
      "name": "Against the Charr",
      "type": "primary",
      "givers": [571],
      "next": [100433],
      "wiki": "https://www.guildwiki.de/wiki/Gegen_die_Charr"
    },
    "100340": {
      "name": "Against the Destroyers",
      "type": "primary",
      "campaign": 4,
      "region": 19,
      "xp": 10000,
      "rewards": ["1,000 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Gegen_die_Zerstörer"
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
      "wiki": "https://www.guildwiki.de/wiki/Was_ich_kann,_könnt_Ihr_auch"
    },
    "100342": {
      "name": "Assault on the Stronghold",
      "type": "primary",
      "givers": [307, 308],
      "requires": [100458],
      "wiki": "https://www.guildwiki.de/wiki/Der_Angriff_auf_die_Festung"
    },
    "100343": {
      "name": "Attack on Jalis's Camp",
      "type": "secondary",
      "givers": [200],
      "skills": [2217, 2219],
      "rewards": ["200 Deldrimor reputation points", "Diamond"],
      "requires": [100389],
      "next": [100374],
      "wiki": "https://www.guildwiki.de/wiki/Angriff_auf_Jalis'_Lager"
    },
    "100344": {
      "name": "Be Very, Very Quiet...",
      "type": "secondary",
      "givers": [722],
      "skills": [2231],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100342],
      "next": [100391],
      "wiki": "https://www.guildwiki.de/wiki/Seid_ganz,_ganz_still_..."
    },
    "100345": {
      "name": "Bear Club for Women / Men",
      "type": "secondary",
      "givers": [249, 250],
      "skills": [2361],
      "rewards": ["100 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Bärenkeule"
    },
    "100346": {
      "name": "Blood Washes Blood",
      "type": "primary",
      "givers": [243],
      "requires": [100364],
      "wiki": "https://www.guildwiki.de/wiki/Blut_wäscht_Blut"
    },
    "100347": {
      "name": "Charr Invaders",
      "type": "secondary",
      "givers": [257],
      "xp": 10000,
      "skills": [2422],
      "rewards": ["150 Ebon Vanguard reputation points"],
      "next": [100411],
      "wiki": "https://www.guildwiki.de/wiki/Charr-Invasoren"
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
      "wiki": "https://www.guildwiki.de/wiki/Langsam_geröstete_Pläne"
    },
    "100349": {
      "name": "Cold Vengeance",
      "type": "secondary",
      "givers": [627, 628],
      "xp": 10000,
      "gold": 2000,
      "wiki": "https://www.guildwiki.de/wiki/Kalte_Rache"
    },
    "100350": {
      "name": "Cold as Ice",
      "type": "secondary",
      "givers": [315],
      "skills": [2356],
      "rewards": ["500 Norn reputation points", "Perfect Salvage Kit"],
      "wiki": "https://www.guildwiki.de/wiki/Eiskalt_erwischt"
    },
    "100351": {
      "name": "Crystal Method",
      "type": "secondary",
      "givers": [395, 396],
      "repeatable": true,
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
      "wiki": "https://www.guildwiki.de/wiki/Die_Kristall-Methode"
    },
    "100352": {
      "name": "Curse of the Nornbear",
      "type": "primary",
      "givers": [315],
      "requires": [100450],
      "next": [100364, 100454],
      "wiki": "https://www.guildwiki.de/wiki/Der_Fluch_des_Nornbären"
    },
    "100353": {
      "name": "Deeprunner's Map",
      "type": "secondary",
      "givers": [380],
      "xp": 15000,
      "skills": [2218],
      "rewards": ["1,500 Deldrimor reputation points"],
      "next": [100384],
      "wiki": "https://www.guildwiki.de/wiki/Tiefenläufers_Karte"
    },
    "100354": {
      "name": "Defending the Breach",
      "type": "secondary",
      "givers": [387, 319],
      "xp": 5000,
      "gold": 1250,
      "wiki": "https://www.guildwiki.de/wiki/Die_Bresche_(Quest)"
    },
    "100355": {
      "name": "Destruction's Depths",
      "type": "primary",
      "givers": [442],
      "requires": [100372],
      "next": [100338],
      "missions": [673],
      "wiki": "https://www.guildwiki.de/wiki/Die_Tiefen_der_Zerstörung"
    },
    "100356": {
      "name": "Destructive Research",
      "type": "secondary",
      "givers": [454],
      "skills": [2221],
      "rewards": ["150 Deldrimor reputation points"],
      "requires": [100389],
      "next": [100434],
      "wiki": "https://www.guildwiki.de/wiki/Zerstörerische_Forschung"
    },
    "100357": {
      "name": "Dredging the Depths",
      "type": "secondary",
      "givers": [602, 603],
      "xp": 7500,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Hammer_und_Schaufel"
    },
    "100358": {
      "name": "Failure to Communicate",
      "type": "secondary",
      "givers": [317],
      "xp": 5000,
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100342],
      "next": [100439],
      "wiki": "https://www.guildwiki.de/wiki/Kommunikationsfehler"
    },
    "100359": {
      "name": "Falling Out",
      "type": "secondary",
      "givers": [226],
      "skills": [2234],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100342],
      "next": [100438],
      "wiki": "https://www.guildwiki.de/wiki/Ausfall"
    },
    "100360": {
      "name": "Final Round: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100407],
      "wiki": "https://www.guildwiki.de/wiki/Letzte_Runde:_Kämpft!"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Suche_nach_Gadd"
    },
    "100362": {
      "name": "Finding the Bloodstone",
      "type": "primary",
      "givers": [213],
      "requires": [100361],
      "next": [100368],
      "missions": [664],
      "wiki": "https://www.guildwiki.de/wiki/Auf_der_Suche_nach_dem_Blutstein"
    },
    "100363": {
      "name": "Fire and Pain",
      "type": "secondary",
      "givers": [259],
      "hero": [24],
      "xp": 15000,
      "rewards": ["Rose Focus"],
      "requires": [100443],
      "wiki": "https://www.guildwiki.de/wiki/Feuer_und_Schmerz"
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
      "wiki": "https://www.guildwiki.de/wiki/Flammen_der_Großen_Bärin"
    },
    "100365": {
      "name": "Forbidden Fruit",
      "type": "secondary",
      "givers": [317],
      "gold": 1000,
      "skills": [2230],
      "rewards": ["150 Ebon Vanguard reputation points"],
      "requires": [100391],
      "wiki": "https://www.guildwiki.de/wiki/Verbotene_Frucht"
    },
    "100366": {
      "name": "Forgotten Relics",
      "type": "secondary",
      "givers": [767],
      "skills": [2232],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Vergessene_Reliquien"
    },
    "100367": {
      "name": "Frogstomp",
      "type": "secondary",
      "givers": [227],
      "xp": 5000,
      "gold": 1000,
      "next": [100370],
      "wiki": "https://www.guildwiki.de/wiki/Ausgequakt"
    },
    "100368": {
      "name": "Genius Operated Living Enchanted Manifestation",
      "type": "primary",
      "givers": [570],
      "requires": [100337, 100362, 100435],
      "wiki": "https://www.guildwiki.de/wiki/Geführter_Operand_Lebender_Entfesselter_Magie"
    },
    "100369": {
      "name": "Giriff's War",
      "type": "secondary",
      "givers": [586, 587],
      "xp": 5000,
      "gold": 1250,
      "wiki": "https://www.guildwiki.de/wiki/Giriffs_Krieg"
    },
    "100370": {
      "name": "Give Peace a Chance",
      "type": "secondary",
      "givers": [227],
      "xp": 10000,
      "requires": [100367],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Chance_für_den_Frieden"
    },
    "100371": {
      "name": "Haunted",
      "type": "secondary",
      "givers": [273],
      "hero": [25],
      "xp": 15000,
      "wiki": "https://www.guildwiki.de/wiki/Die_Heimsuchung"
    },
    "100372": {
      "name": "Heart of the Shiverpeaks",
      "type": "primary",
      "givers": [442],
      "xp": 2000,
      "rewards": ["250 Deldrimor reputation points"],
      "requires": [100389, 100441, 100443],
      "wiki": "https://www.guildwiki.de/wiki/Herz_der_Zittergipfel_(Quest)"
    },
    "100373": {
      "name": "Hero Tutorial",
      "type": "secondary",
      "givers": [606],
      "xp": 1000,
      "rewards": ["Burol Ironfist's Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Helden-Tutorial"
    },
    "100374": {
      "name": "In the Service of Revenge",
      "type": "secondary",
      "givers": [615],
      "skills": [2220, 2223],
      "rewards": ["300 Deldrimor reputation points", "Onyx Gemstone"],
      "requires": [100343],
      "wiki": "https://www.guildwiki.de/wiki/Im_Dienste_der_Rache"
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
      "wiki": "https://www.guildwiki.de/wiki/Heimtückische_Überreste"
    },
    "100376": {
      "name": "Kathandrax's Crusher",
      "type": "secondary",
      "givers": [632, 633],
      "xp": 7500,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Kathandrax'_Malmer"
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
      "wiki": "https://www.guildwiki.de/wiki/Kilroy_Steinsipps_Fausthieb-Fete"
    },
    "100378": {
      "name": "Kilroy's Punchout Tournament",
      "type": "secondary",
      "givers": [619],
      "rewards": ["120 Deldrimor reputation points"],
      "requires": [100447],
      "wiki": "https://www.guildwiki.de/wiki/Kilroys_Turnier_der_Fliegenden_Fäuste"
    },
    "100379": {
      "name": "Krak's Cavalry",
      "type": "secondary",
      "givers": [369],
      "gold": 1000,
      "skills": [2216],
      "rewards": ["200 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Kraks_Kavallerie"
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
      "wiki": "https://www.guildwiki.de/wiki/Labor-Suche"
    },
    "100381": {
      "name": "Leader of the Pack",
      "type": "secondary",
      "givers": [626],
      "skills": [2379],
      "rewards": ["250 Norn reputation points", "Scroll of Hero's Insight"],
      "requires": [100352],
      "wiki": "https://www.guildwiki.de/wiki/Rudelführer"
    },
    "100382": {
      "name": "Little Workshop of Horrors",
      "type": "secondary",
      "givers": [459, 460],
      "xp": 7500,
      "gold": 1500,
      "requires": [100380],
      "wiki": "https://www.guildwiki.de/wiki/Die_kleine_Horror-Werkstatt"
    },
    "100383": {
      "name": "Lost Souls",
      "type": "secondary",
      "givers": [769, 770],
      "xp": 7500,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Verlorene_Seelen"
    },
    "100384": {
      "name": "Lost Treasure of King Hundar",
      "type": "secondary",
      "givers": [380],
      "xp": 2500,
      "gold": 250,
      "rewards": ["The Chest of Wintersday Past appears"],
      "requires": [100353],
      "wiki": "https://www.guildwiki.de/wiki/Der_verlorene_Schatz_König_Hundars"
    },
    "100385": {
      "name": "Mano a Norn-o",
      "type": "secondary",
      "givers": [257],
      "skills": [2228],
      "rewards": ["100 Ebon Vanguard reputation points", "Lockpick"],
      "wiki": "https://www.guildwiki.de/wiki/Mensch_gegen_Norn"
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
      "wiki": "https://www.guildwiki.de/wiki/Motten_um_eine_Flamme"
    },
    "100387": {
      "name": "Norn Catering",
      "type": "primary",
      "givers": [405],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["1,500 Ebon Vanguard reputation points"],
      "requires": [100000],
      "wiki": "https://www.guildwiki.de/wiki/Norn-Verköstigung"
    },
    "100388": {
      "name": "Nornhood",
      "type": "secondary",
      "givers": [273],
      "hero": [23],
      "xp": 15000,
      "wiki": "https://www.guildwiki.de/wiki/Das_Norn-Ritual"
    },
    "100389": {
      "name": "Northern Allies",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1000 Norn reputation points", "Monumental Tapestry"],
      "wiki": "https://www.guildwiki.de/wiki/Verbündete_im_Norden"
    },
    "100390": {
      "name": "O Brave New World",
      "type": "secondary",
      "givers": [720],
      "skills": [2411],
      "rewards": ["100 Asura reputation points", "Essence of Celerity"],
      "requires": [100435],
      "wiki": "https://www.guildwiki.de/wiki/Schöne_neue_Welt"
    },
    "100391": {
      "name": "Plan A",
      "type": "secondary",
      "givers": [317],
      "skills": [2116],
      "rewards": ["100 Ebon Vanguard reputation points", "Lockpick"],
      "next": [100365],
      "wiki": "https://www.guildwiki.de/wiki/Plan_A"
    },
    "100392": {
      "name": "Polymock: Defeat Blarp",
      "type": "secondary",
      "givers": [696],
      "rewards": ["200 Asura reputation points", "Ice Imp Polymock Piece"],
      "requires": [100398],
      "next": [100394],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Blarp"
    },
    "100393": {
      "name": "Polymock: Defeat Dune Teardrinker",
      "type": "secondary",
      "givers": [696],
      "skills": [2227],
      "rewards": ["250 Asura reputation points", "Aloe Seed Polymock Piece"],
      "requires": [100394, 100433],
      "next": [100396],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Dune_Tränentrinker"
    },
    "100394": {
      "name": "Polymock: Defeat Fonk",
      "type": "secondary",
      "givers": [696],
      "rewards": ["250 Asura reputation points", "Earth Elemental Polymock Piece"],
      "requires": [100392],
      "next": [100395, 100397, 100393],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Fonk"
    },
    "100395": {
      "name": "Polymock: Defeat Grulhammer Silverfist",
      "type": "secondary",
      "givers": [696],
      "skills": [2225],
      "rewards": ["250 Asura reputation points", "Fire Elemental Polymock Piece"],
      "requires": [100394],
      "next": [100396],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Grulhammer_Silberfaust"
    },
    "100396": {
      "name": "Polymock: Defeat Master Hoff",
      "type": "secondary",
      "givers": [696],
      "skills": [2224],
      "rewards": ["1,000 Asura reputation points", "Mirage Iboga Polymock Piece"],
      "requires": [100395, 100397, 100393],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Meister_Hoff"
    },
    "100397": {
      "name": "Polymock: Defeat Necromancer Volumandus",
      "type": "secondary",
      "givers": [696],
      "skills": [2226],
      "rewards": ["250 Asura reputation points", "Ice Elemental Polymock Piece"],
      "requires": [100394],
      "next": [100396],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Nekromant_Volumandus"
    },
    "100398": {
      "name": "Polymock: Defeat Plurgg",
      "type": "secondary",
      "givers": [696],
      "rewards": ["100 Asura reputation points", "Kappa Polymock Piece"],
      "requires": [100399],
      "next": [100392],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Plurgg"
    },
    "100399": {
      "name": "Polymock: Defeat Yulma",
      "type": "secondary",
      "givers": [696],
      "rewards": ["100 Asura reputation points", "Fire Imp Polymock Piece"],
      "next": [100398],
      "wiki": "https://www.guildwiki.de/wiki/Polymock:_Besiegt_Yulma"
    },
    "100400": {
      "name": "Prenuptial Disagreement",
      "type": "secondary",
      "givers": [318, 319],
      "rewards": ["250 Norn reputation points", "Grail of Might"],
      "requires": [100345],
      "wiki": "https://www.guildwiki.de/wiki/Voreheliche_Verstimmung_(männlich)"
    },
    "100401": {
      "name": "Prenuptial Disagreement",
      "type": "secondary",
      "givers": [249, 250],
      "rewards": ["250 Norn reputation points", "Grail of Might"],
      "requires": [100345],
      "wiki": "https://www.guildwiki.de/wiki/Voreheliche_Verstimmung_(weiblich)"
    },
    "100402": {
      "name": "Punch the Clown",
      "type": "secondary",
      "givers": [619],
      "skills": [2215],
      "rewards": ["100 Deldrimor reputation points"],
      "next": [100377],
      "wiki": "https://www.guildwiki.de/wiki/Verhaut_den_Hampelmann"
    },
    "100403": {
      "name": "Round 1: Fight!",
      "type": "secondary",
      "givers": [273],
      "skills": [2353, 2354, 2357],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "next": [100404],
      "wiki": "https://www.guildwiki.de/wiki/Ring_frei_zur_ersten_Runde!"
    },
    "100404": {
      "name": "Round 2: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100403],
      "next": [100405],
      "wiki": "https://www.guildwiki.de/wiki/Ring_frei_zur_zweiten_Runde!"
    },
    "100405": {
      "name": "Round 3: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100404],
      "next": [100406],
      "wiki": "https://www.guildwiki.de/wiki/Ring_frei_zur_dritten_Runde!"
    },
    "100406": {
      "name": "Round 4: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100405],
      "next": [100407],
      "wiki": "https://www.guildwiki.de/wiki/Ring_frei_zur_vierten_Runde!"
    },
    "100407": {
      "name": "Round 5: Fight!",
      "type": "secondary",
      "givers": [273],
      "rewards": ["150 Norn reputation points", "The Bison Cup", "1 Bison Championship Token"],
      "requires": [100406],
      "next": [100360],
      "wiki": "https://www.guildwiki.de/wiki/Ring_frei_zur_fünften_Runde!"
    },
    "100408": {
      "name": "Scrambled Reinforcements",
      "type": "secondary",
      "givers": [620, 621],
      "repeatable": true,
      "xp": 7500,
      "gold": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Ins_Netz_gegangen"
    },
    "100409": {
      "name": "Search for the Ebon Vanguard",
      "type": "primary",
      "givers": [436],
      "xp": 2000,
      "rewards": ["250 Ebon Vanguard reputation points"],
      "next": [100339],
      "missions": [665],
      "wiki": "https://www.guildwiki.de/wiki/Die_Suche_nach_der_Ebon-Vorhut"
    },
    "100410": {
      "name": "Service: In Defense of the Eye",
      "type": "secondary",
      "givers": [257],
      "skills": [2420],
      "rewards": ["250 Ebon Vanguard reputation points", "Powerstone of Courage"],
      "requires": [100411],
      "wiki": "https://www.guildwiki.de/wiki/Dienst:_Die_Verteidigung_des_Auges"
    },
    "100411": {
      "name": "Service: Practice, Dummy",
      "type": "secondary",
      "givers": [257],
      "skills": [2235],
      "rewards": ["100 Ebon Vanguard reputation points"],
      "requires": [100347],
      "next": [100410],
      "wiki": "https://www.guildwiki.de/wiki/Dienst:_Kampfübung"
    },
    "100412": {
      "name": "Shadows in the Night",
      "type": "secondary",
      "givers": [626],
      "skills": [2384],
      "rewards": ["100 Norn reputation points", "Lockpick"],
      "requires": [100334],
      "wiki": "https://www.guildwiki.de/wiki/Schatten_in_der_Nacht"
    },
    "100413": {
      "name": "Single Ugly Grawl Seeks Same for Mindless Destruction in Ascalon",
      "type": "secondary",
      "givers": [538],
      "skills": [2421],
      "rewards": ["150 Ebon Vanguard reputation points", "Lockpick"],
      "requires": [100365],
      "wiki": "https://www.guildwiki.de/wiki/Einsamer,_hässlicher_Grawl_sucht_Gleichgesinnte_für_brutale_Zerstörung_in_Ascalon"
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
      "wiki": "https://www.guildwiki.de/wiki/Schneeball-Dominanz"
    },
    "100415": {
      "name": "Special Ops: Dragon's Gullet",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "wiki": "https://www.guildwiki.de/wiki/Spezialeinsatz:_Drachenschlund"
    },
    "100416": {
      "name": "Special Ops: Flame Temple Corridor",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "wiki": "https://www.guildwiki.de/wiki/Spezialeinsatz:_Flammentempel-Gang"
    },
    "100417": {
      "name": "Special Ops: Grendich Courthouse",
      "type": "secondary",
      "givers": [731],
      "requires": [100443],
      "wiki": "https://www.guildwiki.de/wiki/Spezialeinsatz:_Gerichtsgebäude_in_Grendich"
    },
    "100418": {
      "name": "Tekks's War",
      "type": "secondary",
      "givers": [747, 748],
      "xp": 5000,
      "gold": 1250,
      "wiki": "https://www.guildwiki.de/wiki/Tekks'_Krieg"
    },
    "100419": {
      "name": "Temple of the Damned",
      "type": "secondary",
      "givers": [750, 751],
      "xp": 7500,
      "gold": 1500,
      "requires": [100433],
      "wiki": "https://www.guildwiki.de/wiki/Tempel_der_Verdammten"
    },
    "100420": {
      "name": "The Anvil of Dragrimmar",
      "type": "secondary",
      "givers": [303, 304],
      "xp": 5000,
      "gold": 1250,
      "wiki": "https://www.guildwiki.de/wiki/Der_Amboss_des_Dragrimmar"
    },
    "100421": {
      "name": "The Arrow's Point",
      "type": "secondary",
      "givers": [395, 396],
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
      "wiki": "https://www.guildwiki.de/wiki/Spitze_Pfeile"
    },
    "100422": {
      "name": "The Assassin's Revenge",
      "type": "secondary",
      "givers": [317],
      "rewards": ["150 Ebon Vanguard reputation points"],
      "requires": [100439],
      "wiki": "https://www.guildwiki.de/wiki/Die_Rache_des_Assassinen"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Asura-Falle"
    },
    "100424": {
      "name": "The Beginning of the End",
      "type": "primary",
      "campaign": 4,
      "region": 18,
      "requires": [100573],
      "next": [100340],
      "wiki": "https://www.guildwiki.de/wiki/Der_Anfang_vom_Ende"
    },
    "100425": {
      "name": "The Big Unfriendly Jotun",
      "type": "secondary",
      "givers": [369],
      "gold": 1000,
      "skills": [2222, 2423],
      "rewards": ["100 Deldrimor reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Der_große,_unfreundliche_Jotun"
    },
    "100426": {
      "name": "The Blade's Essence",
      "type": "secondary",
      "givers": [395, 396],
      "xp": 2500,
      "gold": 500,
      "requires": [100362],
      "wiki": "https://www.guildwiki.de/wiki/Die_Essenz_der_Klinge"
    },
    "100427": {
      "name": "The Cipher of Balthazar",
      "type": "secondary",
      "givers": [341],
      "skills": [2417],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schlüssel_von_Balthasar"
    },
    "100428": {
      "name": "The Cipher of Dwayna",
      "type": "secondary",
      "givers": [341],
      "skills": [2414],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schlüssel_von_Dwayna"
    },
    "100429": {
      "name": "The Cipher of Grenth",
      "type": "secondary",
      "givers": [341],
      "skills": [2415],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schlüssel_von_Grenth"
    },
    "100430": {
      "name": "The Cipher of Kormir",
      "type": "secondary",
      "givers": [341],
      "skills": [2418],
      "rewards": ["100 Asura reputation points"],
      "requires": [100427, 100428, 100429, 100431],
      "next": [100444],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schlüssel_von_Kormir"
    },
    "100431": {
      "name": "The Cipher of Lyssa",
      "type": "secondary",
      "givers": [341],
      "skills": [2413],
      "rewards": ["100 Asura reputation points"],
      "requires": [100432],
      "next": [100430],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schlüssel_von_Lyssa"
    },
    "100432": {
      "name": "The Cipher of Melandru",
      "type": "secondary",
      "givers": [341],
      "skills": [2412],
      "rewards": ["100 Asura reputation points"],
      "next": [100427, 100428, 100429, 100431],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schlüssel_von_Melandru"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Anbruch_der_Rebellion"
    },
    "100434": {
      "name": "The Destroyer Challenge",
      "type": "secondary",
      "givers": [453, 454],
      "skills": [2211],
      "rewards": ["150 Deldrimor reputation points", "Armor of Salvation"],
      "requires": [100356],
      "wiki": "https://www.guildwiki.de/wiki/Die_Zerstörer-Probe"
    },
    "100435": {
      "name": "The Elusive Golemancer",
      "type": "primary",
      "givers": [463],
      "next": [100368],
      "missions": [664],
      "wiki": "https://www.guildwiki.de/wiki/Die_scheue_Golemantin"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Große_Bierrat_der_Norn_(männlich)"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Große_Bierrat_der_Norn_(weiblich)"
    },
    "100438": {
      "name": "The Hunting of the Charr",
      "type": "secondary",
      "givers": [410],
      "skills": [2229],
      "rewards": ["250 Ebon Vanguard reputation points", "Powerstone of Courage"],
      "requires": [100359],
      "wiki": "https://www.guildwiki.de/wiki/Die_Jagd_auf_die_Charr"
    },
    "100439": {
      "name": "The Imploding Past",
      "type": "secondary",
      "givers": [317],
      "xp": 10000,
      "rewards": ["150 Ebon Vanguard reputation points"],
      "requires": [100358],
      "next": [100422],
      "wiki": "https://www.guildwiki.de/wiki/Die_implodierende_Vergangenheit"
    },
    "100440": {
      "name": "The Justiciar's End",
      "type": "secondary",
      "givers": [265],
      "xp": 15000,
      "rewards": ["250 Asura reputation points", "Scroll of Resurrection"],
      "requires": [100386],
      "wiki": "https://www.guildwiki.de/wiki/Das_Ende_des_Justiziars"
    },
    "100441": {
      "name": "The Knowledgeable Asura",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1000 Asura reputation points", "Monumental Tapestry"],
      "requires": [100340],
      "wiki": "https://www.guildwiki.de/wiki/Die_klugen_Asura"
    },
    "100442": {
      "name": "The Misanthropic Jotun Principle",
      "type": "secondary",
      "givers": [708, 709],
      "repeatable": true,
      "xp": 7500,
      "wiki": "https://www.guildwiki.de/wiki/Ruhm_und_Missgunst"
    },
    "100443": {
      "name": "The Missing Vanguard",
      "type": "primary",
      "givers": [461],
      "xp": 10000,
      "rewards": ["1,000 Ebon Vanguard reputation points", "Monumental Tapestry"],
      "requires": [100340],
      "wiki": "https://www.guildwiki.de/wiki/Die_verschwundene_Vorhut"
    },
    "100444": {
      "name": "The Path to Revelations",
      "type": "secondary",
      "givers": [341],
      "skills": [2416],
      "rewards": ["100 Asura reputation points", "Kerrsh's Staff (unique item)"],
      "requires": [100430],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zu_Enthüllungen"
    },
    "100445": {
      "name": "The Smell of Titan in the Morning",
      "type": "secondary",
      "givers": [317],
      "skills": [2233],
      "rewards": ["250 Ebon Vanguard reputation points", "Scroll of Hero's Insight"],
      "requires": [100443],
      "wiki": "https://www.guildwiki.de/wiki/Der_Geruch_von_Titanen_am_Morgen"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_drei_weisen_Norn"
    },
    "100447": {
      "name": "The Throwdown in a Norn Town",
      "type": "secondary",
      "givers": [619],
      "skills": [2213, 2214],
      "rewards": ["300 Deldrimor reputation points", "Armor of Salvation"],
      "requires": [100377],
      "next": [100378],
      "wiki": "https://www.guildwiki.de/wiki/In_dieser_Stadt_macht_Ihr_ihn_platt"
    },
    "100448": {
      "name": "The Wedding",
      "type": "primary",
      "givers": [405],
      "requires": [100000],
      "wiki": "https://www.guildwiki.de/wiki/Die_Hochzeit"
    },
    "100449": {
      "name": "Then and Now, Here and There",
      "type": "secondary",
      "givers": [259],
      "hero": [24],
      "xp": 15000,
      "requires": [100443],
      "wiki": "https://www.guildwiki.de/wiki/Damals_und_heute,_dort_und_hier"
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
      "wiki": "https://www.guildwiki.de/wiki/Dem_Nornbären_auf_der_Spur"
    },
    "100451": {
      "name": "Truthseeker",
      "type": "secondary",
      "campaign": 4,
      "region": 19,
      "skills": [2355],
      "rewards": ["100 Norn reputation points"],
      "requires": [100352],
      "wiki": "https://www.guildwiki.de/wiki/Wahrheitssucher"
    },
    "100452": {
      "name": "Turning the Page",
      "type": "secondary",
      "givers": [260],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["100 Asura reputation points"],
      "next": [100423],
      "wiki": "https://www.guildwiki.de/wiki/Das_Blatt_wendet_sich"
    },
    "100453": {
      "name": "Veiled Threat",
      "type": "secondary",
      "givers": [751, 765],
      "xp": 7500,
      "gold": 1500,
      "requires": [100433],
      "wiki": "https://www.guildwiki.de/wiki/Verborgene_Bedrohung"
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
      "wiki": "https://www.guildwiki.de/wiki/Vision_des_Rabengeists"
    },
    "100455": {
      "name": "Warband of Brothers",
      "type": "primary",
      "campaign": 4,
      "region": 20,
      "requires": [100433],
      "next": [100458],
      "wiki": "https://www.guildwiki.de/wiki/Brudertrupp"
    },
    "100456": {
      "name": "Watch It Jiggle",
      "type": "secondary",
      "givers": [588, 589],
      "xp": 5000,
      "gold": 1250,
      "wiki": "https://www.guildwiki.de/wiki/Glibberige_Sache"
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
      "wiki": "https://www.guildwiki.de/wiki/Erinnerung_des_Reisenden:_Der_Hohe_Norden"
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
      "wiki": "https://www.guildwiki.de/wiki/Was_getan_werden_muss"
    },
    "100459": {
      "name": "Wintersday Cheer",
      "type": "event",
      "givers": [405],
      "event": 13,
      "xp": 5000,
      "rewards": ["500 Ebon Vanguard reputation points", "10 Candy Cane Shards", "5 Mischievous Tonics"],
      "requires": [100348],
      "wiki": "https://www.guildwiki.de/wiki/Wintertagsgrüße"
    },
    "100460": {
      "name": "Worthy Deeds (Done Dirt Cheap)",
      "type": "secondary",
      "givers": [315],
      "xp": 15000,
      "skills": [2358],
      "rewards": ["250 Norn reputation points"],
      "wiki": "https://www.guildwiki.de/wiki/Ruhmreiche_Taten_(spottbillig_erledigt)"
    },
    "100461": {
      "name": "A Belt Pouch",
      "type": "secondary",
      "givers": [519],
      "xp": 1500,
      "gold": 75,
      "wiki": "https://www.guildwiki.de/wiki/Eine_Gürteltasche"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_zufälliges_Treffen"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_zufälliges_Treffen_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_erwiderter_Gefallen"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_erwiderter_Gefallen_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_förmliche_Vorstellung"
    },
    "100467": {
      "name": "A Letter Home",
      "type": "secondary",
      "givers": [481],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Brief_nach_Hause"
    },
    "100468": {
      "name": "A Master's Burden",
      "type": "primary",
      "givers": [389],
      "xp": 3000,
      "gold": 150,
      "requires_missions": [258],
      "next": [100610],
      "wiki": "https://www.guildwiki.de/wiki/Die_Bürde_eines_Meisters"
    },
    "100469": {
      "name": "A Meeting With the Emperor",
      "type": "primary",
      "givers": [443],
      "xp": 3000,
      "gold": 150,
      "requires_missions": [261],
      "next": [100710],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Treffen_mit_dem_Kaiser"
    },
    "100470": {
      "name": "A Monstrous Revelation",
      "type": "secondary",
      "givers": [438],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100646],
      "wiki": "https://www.guildwiki.de/wiki/Eine_ungeheuere_Enthüllung"
    },
    "100471": {
      "name": "A New Escort",
      "type": "secondary",
      "givers": [530],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "wiki": "https://www.guildwiki.de/wiki/Eine_neue_Eskorte"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_sonderbare_Bitte"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_Vertrag_ist_ein_Vertrag"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_Vertrag_ist_ein_Vertrag_(Schwerer_Modus)"
    },
    "100475": {
      "name": "Advanced Defense Techniques",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [43, 118, 176, 299, 345, 424, 871, 973],
      "wiki": "https://www.guildwiki.de/wiki/Fortgeschrittene_Verteidigungstechniken"
    },
    "100476": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [472, 504],
      "xp": 600,
      "gold": 50,
      "requires": [100546],
      "next": [100680, 100685, 100683, 100686, 100681, 100682, 100687, 100508],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Assassine)"
    },
    "100477": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [505, 474],
      "xp": 600,
      "gold": 50,
      "requires": [100679],
      "next": [100684, 100687, 100685, 100683, 100681, 100682, 100680],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Elementarmagier)"
    },
    "100478": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [506, 393],
      "xp": 600,
      "gold": 50,
      "requires": [100711],
      "next": [100684, 100685, 100683, 100686, 100681, 100682, 100680],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Krieger)"
    },
    "100479": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [507, 508],
      "xp": 600,
      "gold": 50,
      "requires": [100595],
      "next": [100684, 100685, 100683, 100686, 100680, 100681, 100687],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Mesmer)"
    },
    "100480": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [214, 509],
      "xp": 600,
      "gold": 50,
      "requires": [100668],
      "next": [100684, 100685, 100683, 100686, 100681, 100682, 100687],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Mönch)"
    },
    "100481": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [420, 510],
      "xp": 600,
      "gold": 50,
      "requires": [100642],
      "next": [100684, 100685, 100687, 100686, 100681, 100682, 100680],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Nekromant)"
    },
    "100482": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [511, 512],
      "xp": 600,
      "gold": 50,
      "requires": [100672],
      "next": [100684, 100687, 100683, 100686, 100681, 100682, 100680],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Ritualist)"
    },
    "100483": {
      "name": "An Audience with Master Togo",
      "type": "primary",
      "givers": [409, 513],
      "xp": 600,
      "gold": 50,
      "requires": [100747],
      "next": [100684, 100685, 100683, 100686, 100680, 100682, 100687],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Audienz_bei_Meister_Togo_(Waldläufer)"
    },
    "100484": {
      "name": "An End to Suffering",
      "type": "secondary",
      "givers": [294],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Dem_Leiden_ein_Ende"
    },
    "100485": {
      "name": "An Unwelcome Guest",
      "type": "attribute",
      "givers": [499],
      "xp": 4000,
      "gold": 175,
      "rewards": ["15 Attribute points"],
      "requires_missions": [258],
      "wiki": "https://www.guildwiki.de/wiki/Ein_unwillkommener_Gast"
    },
    "100486": {
      "name": "Appearance of the Naga",
      "type": "secondary",
      "givers": [224],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "next": [100730],
      "wiki": "https://www.guildwiki.de/wiki/Auftauchen_der_Naga"
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
      "wiki": "https://www.guildwiki.de/wiki/Architekt_der_Verdorbenheit"
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
      "wiki": "https://www.guildwiki.de/wiki/Architekt_der_Verdorbenheit_(Schwerer_Modus)"
    },
    "100489": {
      "name": "Artistic Endeavors",
      "type": "secondary",
      "givers": [646],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "wiki": "https://www.guildwiki.de/wiki/Künstlerische_Bemühungen"
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
      "wiki": "https://www.guildwiki.de/wiki/Assassinen-Befähigung"
    },
    "100491": {
      "name": "Assassination Attempt",
      "type": "secondary",
      "givers": [665],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Mordversuch"
    },
    "100492": {
      "name": "Assist the Guards",
      "type": "secondary",
      "givers": [471],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "next": [100692],
      "wiki": "https://www.guildwiki.de/wiki/Helft_den_Wächtern"
    },
    "100493": {
      "name": "Attack the Kurzicks!",
      "type": "secondary",
      "givers": [595],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Greift_die_Kurzick_an!"
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
      "wiki": "https://www.guildwiki.de/wiki/Schlacht_in_der_Kanalisation"
    },
    "100495": {
      "name": "Befriending the Kurzicks",
      "type": "primary",
      "givers": [204],
      "xp": 10000,
      "gold": 700,
      "requires": [100585],
      "next": [100712],
      "wiki": "https://www.guildwiki.de/wiki/Freundschaft_mit_den_Kurzick"
    },
    "100496": {
      "name": "Befriending the Luxons",
      "type": "primary",
      "givers": [324],
      "xp": 10000,
      "gold": 700,
      "requires": [100584],
      "next": [100691],
      "wiki": "https://www.guildwiki.de/wiki/Freundschaft_mit_den_Luxon"
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
      "wiki": "https://www.guildwiki.de/wiki/Aufruf_an_alle_Schurken"
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
      "wiki": "https://www.guildwiki.de/wiki/Aufruf_an_alle_Schurken_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Canthanische_Kurierkrise"
    },
    "100500": {
      "name": "Cantha Courier Crisis (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["2 Imperial Commendations"],
      "requires": [100511, 100499],
      "wiki": "https://www.guildwiki.de/wiki/Canthanische_Kurierkrise_(Schwerer_Modus)"
    },
    "100501": {
      "name": "Captured",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Gefangen"
    },
    "100502": {
      "name": "Capturing the Orrian Tome",
      "type": "secondary",
      "givers": [302],
      "next": [100618],
      "wiki": "https://www.guildwiki.de/wiki/Den_orrianischen_Folianten_erbeuten"
    },
    "100503": {
      "name": "Cash Crops",
      "type": "secondary",
      "givers": [546],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Ernte_zum_Verkauf"
    },
    "100504": {
      "name": "Challenge of Strength",
      "type": "secondary",
      "givers": [607],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Herausforderung_der_Kraft"
    },
    "100505": {
      "name": "Chaos in Kryta",
      "type": "secondary",
      "givers": [254],
      "travel": 1,
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Chaos_in_Kryta"
    },
    "100506": {
      "name": "Charting the Forests",
      "type": "secondary",
      "givers": [271],
      "xp": 5000,
      "gold": 200,
      "rewards": ["500 Kurzick faction", "Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Wälder_kartographieren"
    },
    "100507": {
      "name": "Charting the Jade Sea",
      "type": "secondary",
      "givers": [271],
      "xp": 5000,
      "gold": 200,
      "rewards": ["500 Luxon faction", "Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Jademeer_kartographieren"
    },
    "100508": {
      "name": "Choose Your Secondary Profession (Factions)",
      "type": "primary",
      "givers": [787],
      "xp": 3500,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Wählt_Eure_sekundäre_Klasse_(Factions)"
    },
    "100509": {
      "name": "City Under Attack",
      "type": "primary",
      "givers": [202],
      "xp": 3000,
      "gold": 150,
      "next": [100494],
      "wiki": "https://www.guildwiki.de/wiki/Angriff_auf_die_Stadt"
    },
    "100510": {
      "name": "Cleansing Bukdek Byway",
      "type": "secondary",
      "givers": [707],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "next": [100511, 100520, 100499],
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Bukdek-Seitenweges"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Bukdek-Seitenweges_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Haiju-Lagune"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Haiju-Lagune_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Morostavweges"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Morostavweges_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Pongmei-Tals"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Pongmei-Tals_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_von_Rheas_Krater"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_von_Rheas_Krater_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Schattenpassage"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Schattenpassage_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Shenzun-Tunnel"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Shenzun-Tunnel_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_von_Zen_Daijun"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_von_Zen_Daijun_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Den_Schrein_säubern"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Stummen_Brandung"
    },
    "100528": {
      "name": "Cleansing the Silent Surf",
      "type": "secondary",
      "givers": [707],
      "xp": 5000,
      "gold": 1000,
      "rewards": ["Ministerial Commendation", "Ministerial Commendation"],
      "requires": [100519, 100527],
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Stummen_Brandung_(Schwerer_Modus)"
    },
    "100529": {
      "name": "Cleansing the Steel",
      "type": "primary",
      "givers": [210],
      "xp": 2500,
      "gold": 100,
      "requires": [100490],
      "wiki": "https://www.guildwiki.de/wiki/Den_Stahl_säubern"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Sunjiang-Bezirks"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_des_Sunjiang-Bezirks_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Unterstadt"
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
      "wiki": "https://www.guildwiki.de/wiki/Säuberung_der_Unterstadt_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Näher_an_den_Sternen"
    },
    "100535": {
      "name": "Condition Removal",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [154, 277, 787],
      "wiki": "https://www.guildwiki.de/wiki/Zustandsentfernung"
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
      "wiki": "https://www.guildwiki.de/wiki/Dunkelheit_in_Kaitan"
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
      "wiki": "https://www.guildwiki.de/wiki/Tödliche_Fracht"
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
      "wiki": "https://www.guildwiki.de/wiki/Tödliche_Fracht_(Schwerer_Modus)"
    },
    "100539": {
      "name": "Death with Honor",
      "type": "secondary",
      "givers": [479],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Ehrenvoller_Tod"
    },
    "100540": {
      "name": "Defend Fort Aspenwood",
      "type": "primary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Fort_Espenwald_verteidigen"
    },
    "100541": {
      "name": "Defense Against Hexes",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [67, 301],
      "wiki": "https://www.guildwiki.de/wiki/Verteidigung_gegen_Verhexungen"
    },
    "100542": {
      "name": "Discord Wallow Lyre",
      "type": "secondary",
      "givers": [662],
      "xp": 3000,
      "gold": 175,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires": [100612],
      "wiki": "https://www.guildwiki.de/wiki/Misstönende_Suhler-Lyra"
    },
    "100543": {
      "name": "Disenchantment Course",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [69, 143, 990],
      "wiki": "https://www.guildwiki.de/wiki/Entzauberungskurs"
    },
    "100544": {
      "name": "Disruption",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [23, 162, 325, 399, 921],
      "wiki": "https://www.guildwiki.de/wiki/Störung"
    },
    "100545": {
      "name": "Drink from the Chalice of Corruption",
      "type": "secondary",
      "givers": [661],
      "xp": 3500,
      "gold": 275,
      "requires": [100666],
      "next": [100609],
      "wiki": "https://www.guildwiki.de/wiki/Trinkt_aus_dem_Kelch_der_Verdorbenheit"
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
      "wiki": "https://www.guildwiki.de/wiki/Doppelschlag"
    },
    "100547": {
      "name": "Duel of the Houses",
      "type": "instance",
      "givers": [263],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Duell_der_Häuser"
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
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier-Befähigung"
    },
    "100549": {
      "name": "Eliminate the Am Fah",
      "type": "secondary",
      "givers": [773],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Vernichtet_die_Am_Fah"
    },
    "100550": {
      "name": "Eliminate the Jade Brotherhood",
      "type": "secondary",
      "givers": [254],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "requires_missions": [260],
      "wiki": "https://www.guildwiki.de/wiki/Eliminiert_die_Jadebruderschaft"
    },
    "100551": {
      "name": "Envoy of the Dredge",
      "type": "secondary",
      "givers": [222],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "next": [100699],
      "wiki": "https://www.guildwiki.de/wiki/Gesandter_der_Schaufler"
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
      "wiki": "https://www.guildwiki.de/wiki/Noch_näher_am_Abgrund"
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
      "wiki": "https://www.guildwiki.de/wiki/Noch_näher_am_Abgrund_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Familienangelegenheit"
    },
    "100555": {
      "name": "Family Matters (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100465, 100554],
      "wiki": "https://www.guildwiki.de/wiki/Familienangelegenheit_(Schwerer_Modus)"
    },
    "100556": {
      "name": "Feed the Hungry",
      "type": "secondary",
      "givers": [363],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Hungernden_ernähren"
    },
    "100557": {
      "name": "Finding Jinnai (Hard mode)‎",
      "type": "secondary",
      "givers": [339],
      "xp": 6000,
      "gold": 3000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100474, 100558],
      "next": [100498],
      "wiki": "https://www.guildwiki.de/wiki/Suche_nach_Jinnai_(Schwerer_Modus)"
    },
    "100558": {
      "name": "Finding Jinnai‎",
      "type": "secondary",
      "givers": [338],
      "xp": 3000,
      "gold": 1500,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100473],
      "next": [100497, 100557],
      "wiki": "https://www.guildwiki.de/wiki/Suche_nach_Jinnai"
    },
    "100559": {
      "name": "Finding The Oracle",
      "type": "primary",
      "givers": [557],
      "xp": 3000,
      "gold": 150,
      "requires_missions": [215],
      "next": [100534],
      "wiki": "https://www.guildwiki.de/wiki/Findet_das_Orakel"
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
      "wiki": "https://www.guildwiki.de/wiki/Feuer_am_Himmel"
    },
    "100561": {
      "name": "Forming a Party",
      "type": "secondary",
      "givers": [518],
      "xp": 1000,
      "gold": 10,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Gruppe_bilden"
    },
    "100562": {
      "name": "Fort Aspenwood",
      "type": "primary",
      "givers": [324],
      "xp": 3000,
      "gold": 250,
      "requires": [100584],
      "wiki": "https://www.guildwiki.de/wiki/Fort_Espenwald_(Quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Frei_wie_ein_Vogel"
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
      "wiki": "https://www.guildwiki.de/wiki/Frei_wie_ein_Vogel_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Freie_Felle"
    },
    "100566": {
      "name": "Gain Zenmai",
      "type": "secondary",
      "givers": [728],
      "xp": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Zenmai_aufnehmen"
    },
    "100567": {
      "name": "Going Home",
      "type": "secondary",
      "givers": [794],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Zurück_in_die_Heimat"
    },
    "100568": {
      "name": "Haiju Lagoon",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["50 Victory Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Haiju-Lagune_(Mission)"
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
      "wiki": "https://www.guildwiki.de/wiki/Ehrenhafter_Kampf"
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
      "wiki": "https://www.guildwiki.de/wiki/Ehrenhafter_Kampf_(Schwerer_Modus)"
    },
    "100571": {
      "name": "Hopeless Romantic",
      "type": "event",
      "givers": [612],
      "event": 1,
      "xp": 5000,
      "gold": 300,
      "rewards": ["25 Lunar Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Hoffnungsloser_Romantiker"
    },
    "100572": {
      "name": "Housing for Refugees",
      "type": "secondary",
      "givers": [764],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Unterkünfte_für_Flüchtlinge"
    },
    "100573": {
      "name": "I Feel the Earth Move Under Cantha's Feet",
      "type": "primary",
      "givers": [548],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "wiki": "https://www.guildwiki.de/wiki/Erschütterungen_unter_Cantha"
    },
    "100574": {
      "name": "If It Weren't for Bad Luck....",
      "type": "secondary",
      "givers": [692],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Pech_gehabt_..."
    },
    "100575": {
      "name": "Imperial Assistance",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Kaiserliche_Unterstützung"
    },
    "100576": {
      "name": "In the Army (Luxon)",
      "type": "instance",
      "givers": [470],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Dienst_fürs_Vaterland_(Luxon)"
    },
    "100577": {
      "name": "In the Army Now (Kurzick)",
      "type": "instance",
      "givers": [469],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Dienst_fürs_Vaterland_(Kurzick)"
    },
    "100578": {
      "name": "Intercepting the Am Fah",
      "type": "secondary",
      "givers": [187],
      "xp": 2000,
      "gold": 500,
      "rewards": ["Ministerial Commendation"],
      "next": [100579, 100764],
      "wiki": "https://www.guildwiki.de/wiki/Abfangen_des_Am_Fah"
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
      "wiki": "https://www.guildwiki.de/wiki/Abfangen_des_Am_Fah_(Schwerer_Modus)"
    },
    "100580": {
      "name": "Into the Whirlpool",
      "type": "primary",
      "givers": [616],
      "xp": 4000,
      "gold": 150,
      "rewards": ["1,250 Kurzick faction", "1 Skill point"],
      "missions": [204],
      "wiki": "https://www.guildwiki.de/wiki/In_den_Strudel"
    },
    "100581": {
      "name": "Invoking the Saints",
      "type": "secondary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires_missions": [267],
      "wiki": "https://www.guildwiki.de/wiki/Anrufung_der_Heiligen"
    },
    "100582": {
      "name": "It Ends Here",
      "type": "secondary",
      "givers": [608],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100731],
      "wiki": "https://www.guildwiki.de/wiki/Hier_endet_es"
    },
    "100583": {
      "name": "Jaya Bluffs",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["50 Victory Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Jaya-Klippen_(Mission)"
    },
    "100584": {
      "name": "Journey to Cavalon",
      "type": "primary",
      "givers": [704],
      "xp": 4000,
      "rewards": ["250 Luxon faction", "1 Skill point"],
      "next": [100496],
      "wiki": "https://www.guildwiki.de/wiki/Reise_nach_Cavalon"
    },
    "100585": {
      "name": "Journey to House zu Heltzer",
      "type": "primary",
      "givers": [704],
      "xp": 4000,
      "rewards": ["250 Kurzick faction", "1 Skill point"],
      "requires_missions": [264],
      "next": [100495],
      "wiki": "https://www.guildwiki.de/wiki/Reise_zum_Haus_zu_Heltzer"
    },
    "100586": {
      "name": "Journey to the Master",
      "type": "primary",
      "givers": [705],
      "xp": 1500,
      "gold": 100,
      "requires": [100745],
      "next": [100737],
      "wiki": "https://www.guildwiki.de/wiki/Reise_zum_Meister"
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
      "wiki": "https://www.guildwiki.de/wiki/Reise_zum_Strudel"
    },
    "100588": {
      "name": "Just My Luck",
      "type": "event",
      "givers": [792],
      "event": 1,
      "xp": 5000,
      "gold": 500,
      "rewards": ["25 Lunar Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Zum_Glück_geküsst"
    },
    "100589": {
      "name": "Kurzick Supply Lines",
      "type": "instance",
      "givers": [674],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Nachschubwege_der_Kurzick"
    },
    "100590": {
      "name": "Lambs to the Slaughter",
      "type": "secondary",
      "givers": [608],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "requires": [100739],
      "wiki": "https://www.guildwiki.de/wiki/Lämmer_zur_Schlachtbank"
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
      "wiki": "https://www.guildwiki.de/wiki/Feuer_frei!"
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
      "wiki": "https://www.guildwiki.de/wiki/Feuer_frei!_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Kleine_Geschöpfe"
    },
    "100594": {
      "name": "Little Lost Bear",
      "type": "secondary",
      "givers": [639],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Kleiner_verlorener_Bär"
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
      "wiki": "https://www.guildwiki.de/wiki/Lo_Shas_Geschenk"
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
      "wiki": "https://www.guildwiki.de/wiki/Macht_Jinzo_ausfindig"
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
      "wiki": "https://www.guildwiki.de/wiki/Macht_Mei_Ling_ausfindig"
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
      "wiki": "https://www.guildwiki.de/wiki/Macht_Professor_Gai_ausfindig"
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
      "wiki": "https://www.guildwiki.de/wiki/Macht_Reng_Ku_ausfindig"
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
      "wiki": "https://www.guildwiki.de/wiki/Macht_Ronsu_ausfindig"
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
      "wiki": "https://www.guildwiki.de/wiki/Macht_Schwester_Tai_ausfindig"
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
      "wiki": "https://www.guildwiki.de/wiki/Macht_Sujun_ausfindig"
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
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Talon_Silberflügel"
    },
    "100604": {
      "name": "Looking For Trouble",
      "type": "primary",
      "givers": [215],
      "xp": 2000,
      "gold": 100,
      "requires": [100737],
      "next": [100753],
      "wiki": "https://www.guildwiki.de/wiki/Auf_der_Suche_nach_Ärger"
    },
    "100605": {
      "name": "Lost Treasure",
      "type": "attribute",
      "givers": [774],
      "xp": 4000,
      "gold": 175,
      "rewards": ["15 Attribute points"],
      "wiki": "https://www.guildwiki.de/wiki/Verschollener_Schatz"
    },
    "100606": {
      "name": "Luxon Supply Lines",
      "type": "instance",
      "givers": [675],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Nachschubwege_der_Luxon"
    },
    "100607": {
      "name": "Luxury Goods",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Luxusartikel"
    },
    "100608": {
      "name": "Mantid Hatchlings",
      "type": "secondary",
      "givers": [657],
      "xp": 2000,
      "skills": [1, 26, 153, 194, 281, 296, 322, 382, 793, 1247],
      "next": [100663, 100660, 100665, 100659, 100664, 100658, 100661, 100662],
      "wiki": "https://www.guildwiki.de/wiki/Mantiden-Junge"
    },
    "100609": {
      "name": "Masters of Corruption",
      "type": "secondary",
      "givers": [661],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100545],
      "wiki": "https://www.guildwiki.de/wiki/Meister_der_Verdorbenheit"
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
      "wiki": "https://www.guildwiki.de/wiki/Chaos_am_Markt"
    },
    "100611": {
      "name": "Medical Emergency",
      "type": "secondary",
      "givers": [659],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Medizinischer_Notfall"
    },
    "100612": {
      "name": "Melodic Gaki Flute",
      "type": "secondary",
      "givers": [662],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "next": [100542],
      "wiki": "https://www.guildwiki.de/wiki/Melodische_Gaki-Flöte"
    },
    "100613": {
      "name": "Memories of Purity",
      "type": "secondary",
      "givers": [502],
      "wiki": "https://www.guildwiki.de/wiki/Erinnerungen_der_Reinheit"
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
      "wiki": "https://www.guildwiki.de/wiki/Mesmer-Befähigung"
    },
    "100615": {
      "name": "Message on a Dragon Scale",
      "type": "secondary",
      "givers": [672],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "1 Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Nachricht_auf_einer_Drachenschuppe"
    },
    "100616": {
      "name": "Messages, Messages Everywhere",
      "type": "secondary",
      "givers": [673],
      "xp": 4000,
      "gold": 275,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "requires": [100615],
      "wiki": "https://www.guildwiki.de/wiki/Nachrichten,_überall_Nachrichten"
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
      "wiki": "https://www.guildwiki.de/wiki/Wild_gewordene_Diener"
    },
    "100618": {
      "name": "Minister's Test",
      "type": "secondary",
      "givers": [302],
      "xp": 2500,
      "requires": [100502],
      "wiki": "https://www.guildwiki.de/wiki/Test_des_Ministers"
    },
    "100619": {
      "name": "Ministry of Oppression",
      "type": "secondary",
      "givers": [220],
      "xp": 2500,
      "gold": 1000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "next": [100638, 100620],
      "wiki": "https://www.guildwiki.de/wiki/Ministerium_der_Unterdrückung"
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
      "wiki": "https://www.guildwiki.de/wiki/Ministerium_der_Unterdrückung_(Schwerer_Modus)"
    },
    "100621": {
      "name": "Missing Daughter",
      "type": "secondary",
      "givers": [771],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Vermisste_Tochter"
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
      "wiki": "https://www.guildwiki.de/wiki/Mönchs-Befähigung"
    },
    "100623": {
      "name": "More Cowbell",
      "type": "secondary",
      "givers": [660],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Mehr_Kuhglocke"
    },
    "100624": {
      "name": "Naga Oil",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 250,
      "next": [100693],
      "wiki": "https://www.guildwiki.de/wiki/Nagaöl"
    },
    "100625": {
      "name": "Necromancer Insignia",
      "type": "secondary",
      "givers": [196],
      "profession": 4,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Nekromanten-Befähigung"
    },
    "100626": {
      "name": "Night Raiders",
      "type": "secondary",
      "givers": [595],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "requires_missions": [264],
      "wiki": "https://www.guildwiki.de/wiki/Nacht-Plünderer"
    },
    "100627": {
      "name": "Old Friends, Dark Times",
      "type": "secondary",
      "givers": [196],
      "gold": 100,
      "requires": [100625],
      "wiki": "https://www.guildwiki.de/wiki/Alte_Freunde,_dunkle_Zeiten"
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
      "wiki": "https://www.guildwiki.de/wiki/Eröffnungsschlag"
    },
    "100629": {
      "name": "Outcasts in the Quarry",
      "type": "secondary",
      "givers": [583],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Geächtete_im_Steinbruch"
    },
    "100630": {
      "name": "Passing the Buck",
      "type": "secondary",
      "givers": [301],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Den_Schwarzen_Peter_weitergeben"
    },
    "100631": {
      "name": "Pest Control",
      "type": "secondary",
      "givers": [629],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Kammerjäger"
    },
    "100632": {
      "name": "Power Surge",
      "type": "secondary",
      "givers": [641],
      "profession": 8,
      "xp": 2500,
      "gold": 100,
      "requires": [100653],
      "wiki": "https://www.guildwiki.de/wiki/Kraftwelle"
    },
    "100633": {
      "name": "Problem Salving",
      "type": "secondary",
      "givers": [275],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Salbenproblem"
    },
    "100634": {
      "name": "Protect the Halcyon",
      "type": "secondary",
      "givers": [321],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "requires": [100721],
      "wiki": "https://www.guildwiki.de/wiki/Schützt_die_Halkyon"
    },
    "100635": {
      "name": "Quimang's Last Stand",
      "type": "secondary",
      "givers": [386],
      "xp": 4000,
      "gold": 200,
      "rewards": ["Monastery Credit"],
      "requires": [100742],
      "wiki": "https://www.guildwiki.de/wiki/Quimangs_Widerstand"
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
      "wiki": "https://www.guildwiki.de/wiki/Überfall_auf_Kaineng"
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
      "wiki": "https://www.guildwiki.de/wiki/Überfall_auf_Kaineng_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Überfall_auf_das_Kloster_von_Shing_Jea"
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
      "wiki": "https://www.guildwiki.de/wiki/Überfall_auf_das_Kloster_von_Shing_Jea_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer-Befähigung"
    },
    "100641": {
      "name": "Raze the Roost",
      "type": "secondary",
      "campaign": 2,
      "region": 8,
      "wiki": "https://www.guildwiki.de/wiki/Den_Schlafplatz_schleifen"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Naga_ernten"
    },
    "100643": {
      "name": "Red Tape",
      "type": "secondary",
      "givers": [305],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100611],
      "wiki": "https://www.guildwiki.de/wiki/Der_Amtsschimmel_wiehert"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Erlösung_der_Verlorenen"
    },
    "100645": {
      "name": "Redemption for the Lost (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100644, 100474],
      "wiki": "https://www.guildwiki.de/wiki/Die_Erlösung_der_Verlorenen_(Schwerer_Modus)"
    },
    "100646": {
      "name": "Refuse to Drink",
      "type": "secondary",
      "givers": [661],
      "xp": 3500,
      "gold": 275,
      "requires": [100666],
      "next": [100470],
      "wiki": "https://www.guildwiki.de/wiki/Weigerung_zu_trinken"
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
      "wiki": "https://www.guildwiki.de/wiki/Rettung_auf_dem_Anwesen_von_Minister_Cho"
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
      "wiki": "https://www.guildwiki.de/wiki/Rettung_auf_dem_Anwesen_von_Minister_Cho_(Schwerer_Modus)"
    },
    "100649": {
      "name": "Return of the Yeti",
      "type": "secondary",
      "givers": [428],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Rückkehr_des_Yeti"
    },
    "100650": {
      "name": "Revenge of the Yeti",
      "type": "secondary",
      "givers": [424],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Rache_des_Yeti"
    },
    "100651": {
      "name": "Revolt of the Dredge",
      "type": "secondary",
      "givers": [222],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires": [100699],
      "wiki": "https://www.guildwiki.de/wiki/Aufstand_der_Schaufler"
    },
    "100652": {
      "name": "Rhythm Drinker Drum",
      "type": "secondary",
      "givers": [662],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "requires": [100542],
      "wiki": "https://www.guildwiki.de/wiki/Rhythmustrinker-Trommel"
    },
    "100653": {
      "name": "Ritualist Insignia",
      "type": "secondary",
      "givers": [641],
      "profession": 8,
      "xp": 2000,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Ritualisten-Befähigung"
    },
    "100654": {
      "name": "Scout the Coast",
      "type": "instance",
      "givers": [643],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Kundschaftet_die_Küste_aus"
    },
    "100655": {
      "name": "Scouting Ferndale",
      "type": "instance",
      "givers": [553],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Farntal_auskundschaften"
    },
    "100656": {
      "name": "Scouting Maishang Hills",
      "type": "instance",
      "givers": [418],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Maishang-Hügel_erforschen"
    },
    "100657": {
      "name": "Securing Echovald Forest",
      "type": "instance",
      "givers": [296],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Den_Echowald_sichern"
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
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeisterin_Amara_auf"
    },
    "100659": {
      "name": "Seek Out Headmaster Greico",
      "type": "primary",
      "givers": [739],
      "profession": 2,
      "xp": 250,
      "gold": 20,
      "next": [100602],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeister_Greico_auf"
    },
    "100660": {
      "name": "Seek Out Headmaster Kaa",
      "type": "primary",
      "givers": [739],
      "profession": 5,
      "xp": 250,
      "gold": 20,
      "next": [100597],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeister_Kaa_auf"
    },
    "100661": {
      "name": "Seek Out Headmaster Kuju",
      "type": "secondary",
      "givers": [739],
      "profession": 4,
      "xp": 250,
      "gold": 20,
      "next": [100599],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeisterin_Kuju_auf"
    },
    "100662": {
      "name": "Seek Out Headmaster Lee",
      "type": "secondary",
      "givers": [739],
      "profession": 7,
      "xp": 250,
      "gold": 20,
      "next": [100596],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeisterin_Lee_auf"
    },
    "100663": {
      "name": "Seek Out Headmaster Quin",
      "type": "primary",
      "givers": [739],
      "profession": 8,
      "xp": 250,
      "gold": 20,
      "next": [100598],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeisterin_Quin_auf"
    },
    "100664": {
      "name": "Seek Out Headmaster Vhang",
      "type": "primary",
      "givers": [739],
      "profession": 6,
      "xp": 250,
      "gold": 20,
      "next": [100600],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeister_Vhang_auf"
    },
    "100665": {
      "name": "Seek Out Headmaster Zhan",
      "type": "primary",
      "givers": [739],
      "profession": 1,
      "xp": 250,
      "gold": 20,
      "next": [100603],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_Großmeister_Zhan_auf"
    },
    "100666": {
      "name": "Seek out Brother Tosai",
      "type": "secondary",
      "givers": [740, 741],
      "xp": 3000,
      "gold": 175,
      "requires": [100738],
      "next": [100545],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_nach_Bruder_Tosai"
    },
    "100667": {
      "name": "Seeking Shelter",
      "type": "secondary",
      "givers": [435],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Suche_nach_Obdach"
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
      "wiki": "https://www.guildwiki.de/wiki/Auf_der_Suche_nach_einem_Heilmittel"
    },
    "100669": {
      "name": "Seitung Harbor (Mission)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["75 Victory Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Hafen_von_Seitung_(Mission)"
    },
    "100670": {
      "name": "Seitung Harbor (mission 2)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Hafen_von_Seitung_(Mission_2)"
    },
    "100671": {
      "name": "Sentimental Treasures",
      "type": "secondary",
      "givers": [613],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "next": [100675],
      "wiki": "https://www.guildwiki.de/wiki/Schätze_mit_nostalgischem_Wert"
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
      "wiki": "https://www.guildwiki.de/wiki/Gefesselte_Geister"
    },
    "100673": {
      "name": "Shing Jea Monastery",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Kloster_von_Shing_Jea_(Mission)"
    },
    "100674": {
      "name": "Skill Chaining",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [14, 76, 85, 104, 171, 200, 271, 311, 371, 396, 433, 1018, 1028, 1133, 1218, 1225],
      "wiki": "https://www.guildwiki.de/wiki/Fertigkeitsfolgen"
    },
    "100675": {
      "name": "Skin the Snake",
      "type": "secondary",
      "givers": [613],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "requires": [100671],
      "wiki": "https://www.guildwiki.de/wiki/Häutet_die_Schlange"
    },
    "100676": {
      "name": "Snaring Course",
      "type": "secondary",
      "givers": [544],
      "xp": 500,
      "gold": 50,
      "skills": [234, 349, 392, 985],
      "wiki": "https://www.guildwiki.de/wiki/Fallenstellkurs"
    },
    "100677": {
      "name": "Song and Stone",
      "type": "secondary",
      "givers": [204],
      "xp": 5000,
      "gold": 350,
      "rewards": ["1,000 Kurzick faction", "Equipment Requisition"],
      "wiki": "https://www.guildwiki.de/wiki/Gesang_und_Gestein"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_Funken_Interesse"
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
      "wiki": "https://www.guildwiki.de/wiki/Duell_mit_den_Elementen"
    },
    "100680": {
      "name": "Speak with Headmaster Amara (Monk)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100601],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeisterin_Amara_(Mönchin)"
    },
    "100681": {
      "name": "Speak with Headmaster Greico (Ranger)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100602],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeister_Greico_(Waldläufer)"
    },
    "100682": {
      "name": "Speak with Headmaster Kaa (Mesmer)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100597],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeister_Kaa_(Mesmer)"
    },
    "100683": {
      "name": "Speak with Headmaster Kuju (Necromancer)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100599],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeisterin_Kuju_(Nekromantin)"
    },
    "100684": {
      "name": "Speak with Headmaster Lee (Assassin)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100596],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeisterin_Lee_(Assassinin)"
    },
    "100685": {
      "name": "Speak with Headmaster Quin (Ritualist)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100598],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeisterin_Quin_(Ritualistin)"
    },
    "100686": {
      "name": "Speak with Headmaster Vhang (Elementalist)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100600],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeister_Vhang_(Elementarmagier)"
    },
    "100687": {
      "name": "Speak with Headmaster Zhan (Warrior)",
      "type": "primary",
      "givers": [467],
      "xp": 50,
      "next": [100603],
      "wiki": "https://www.guildwiki.de/wiki/Sprecht_mit_Großmeister_Zhan_(Krieger)"
    },
    "100688": {
      "name": "Spirit of the Celebration",
      "type": "secondary",
      "campaign": 2,
      "region": 11,
      "rewards": ["Imperial Mask Token"],
      "wiki": "https://www.guildwiki.de/wiki/Geist_des_Festes"
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
      "wiki": "https://www.guildwiki.de/wiki/Schachmatt"
    },
    "100690": {
      "name": "Stemming the Tide",
      "type": "secondary",
      "givers": [397],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Flut_eindämmen"
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
      "wiki": "https://www.guildwiki.de/wiki/Gestohlene_Eier"
    },
    "100692": {
      "name": "Straight to the Top",
      "type": "secondary",
      "givers": [471],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100492],
      "wiki": "https://www.guildwiki.de/wiki/Direkt_an_die_Spitze"
    },
    "100693": {
      "name": "Street Justice",
      "type": "secondary",
      "givers": [569],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Imperial Commendation"],
      "requires": [100624],
      "wiki": "https://www.guildwiki.de/wiki/Straßenjustiz"
    },
    "100694": {
      "name": "Study Buddy",
      "type": "secondary",
      "givers": [691],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "requires": [100466],
      "wiki": "https://www.guildwiki.de/wiki/Paukergemeinschaft"
    },
    "100695": {
      "name": "Sunspears in Cantha",
      "type": "secondary",
      "givers": [728],
      "travel": 3,
      "xp": 1000,
      "next": [100831],
      "wiki": "https://www.guildwiki.de/wiki/Sonnenspeere_in_Cantha"
    },
    "100696": {
      "name": "Take My Sister, Please",
      "type": "event",
      "givers": [286],
      "event": 1,
      "rewards": ["1 Celestial Miniature Token"],
      "wiki": "https://www.guildwiki.de/wiki/Das_lustige_Schwesterlein"
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
      "wiki": "https://www.guildwiki.de/wiki/Wiedereinnahme_des_Palastes"
    },
    "100698": {
      "name": "Talon's Duel",
      "type": "primary",
      "givers": [733],
      "profession": 1,
      "skills": [330, 348],
      "requires": [100603],
      "next": [100762],
      "wiki": "https://www.guildwiki.de/wiki/Talons_Duell"
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
      "wiki": "https://www.guildwiki.de/wiki/Tempel_der_Schaufler"
    },
    "100700": {
      "name": "The Afflicted Guard",
      "type": "secondary",
      "givers": [363],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Der_befallene_Wächter"
    },
    "100701": {
      "name": "The Agriculturist",
      "type": "secondary",
      "givers": [327],
      "xp": 1500,
      "gold": 75,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Landwirtschaftsexperte"
    },
    "100702": {
      "name": "The Ancient Forest",
      "type": "secondary",
      "givers": [362],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "next": [100716],
      "wiki": "https://www.guildwiki.de/wiki/Der_alte_Wald"
    },
    "100703": {
      "name": "The Beak of Darkness",
      "type": "secondary",
      "givers": [221],
      "xp": 3500,
      "gold": 275,
      "rewards": ["750 Kurzick faction"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schnabel_der_Dunkelheit"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_große_Knall"
    },
    "100705": {
      "name": "The Bog Beast of Bokku",
      "type": "secondary",
      "givers": [277],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Sumpfmonster_von_Bokku"
    },
    "100706": {
      "name": "The Box of Illusions",
      "type": "secondary",
      "givers": [430],
      "xp": 2500,
      "gold": 100,
      "wiki": "https://www.guildwiki.de/wiki/Die_Schatulle_der_Illusionen"
    },
    "100707": {
      "name": "The Captured Son",
      "type": "secondary",
      "givers": [366],
      "xp": 4000,
      "gold": 500,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Der_gefangene_Sohn"
    },
    "100708": {
      "name": "The Challenge",
      "type": "secondary",
      "givers": [403],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Herausforderung"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Versammlung"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Tochter_des_Grafen"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Erntediebe"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Verteidiger_des_Waldes"
    },
    "100713": {
      "name": "The Dragon Hunter",
      "type": "secondary",
      "givers": [311],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Drachenjäger"
    },
    "100714": {
      "name": "The Drunken Master",
      "type": "secondary",
      "givers": [364],
      "xp": 2000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Der_betrunkene_Meister"
    },
    "100715": {
      "name": "The Emperor in Peril",
      "type": "secondary",
      "givers": [608],
      "xp": 2000,
      "gold": 175,
      "next": [100731],
      "wiki": "https://www.guildwiki.de/wiki/Kaiser_in_Gefahr"
    },
    "100716": {
      "name": "The Experimental Weaponsmith",
      "type": "secondary",
      "givers": [362],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "wiki": "https://www.guildwiki.de/wiki/Der_experimentelle_Waffenschmied"
    },
    "100717": {
      "name": "The Final Confrontation",
      "type": "secondary",
      "givers": [338],
      "xp": 10000,
      "rewards": ["Imperial Dragon's Tear"],
      "requires": [100638],
      "next": [100718],
      "wiki": "https://www.guildwiki.de/wiki/Die_letzte_Gegenüberstellung"
    },
    "100718": {
      "name": "The Final Confrontation (Hard mode)",
      "type": "secondary",
      "givers": [339],
      "xp": 20000,
      "rewards": ["Imperial Dragon's Tear", "Imperial Dragon's Tear"],
      "requires": [100717, 100639],
      "wiki": "https://www.guildwiki.de/wiki/Die_letzte_Gegenüberstellung_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Banden_von_Kaineng"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Banden_von_Kaineng_(Schwerer_Modus)"
    },
    "100721": {
      "name": "The Halcyon Job",
      "type": "secondary",
      "givers": [321],
      "xp": 5000,
      "gold": 350,
      "rewards": ["1,000 Luxon faction", "Luxon Totem"],
      "next": [100634],
      "wiki": "https://www.guildwiki.de/wiki/Der_Halkyon-Job"
    },
    "100722": {
      "name": "The Impossible Sea Monster",
      "type": "secondary",
      "givers": [289],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "wiki": "https://www.guildwiki.de/wiki/Das_unmögliche_Meeresmonster_(Quest)"
    },
    "100723": {
      "name": "The Jade Arena",
      "type": "instance",
      "givers": [407],
      "repeatable": true,
      "xp": 2000,
      "gold": 150,
      "rewards": ["400 Luxon faction"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Jade-Arena"
    },
    "100724": {
      "name": "The Jade Quarry (Kurzick quest)",
      "type": "primary",
      "givers": [204],
      "xp": 3000,
      "gold": 250,
      "requires": [100585],
      "wiki": "https://www.guildwiki.de/wiki/Der_Jadesteinbruch_(Kurzick-Quest)"
    },
    "100725": {
      "name": "The Jade Quarry (Luxon quest)",
      "type": "primary",
      "givers": [324],
      "xp": 3000,
      "gold": 250,
      "requires": [100584],
      "wiki": "https://www.guildwiki.de/wiki/Der_Jadesteinbruch_(Luxon-Quest)"
    },
    "100726": {
      "name": "The Kaguchi Brothers",
      "type": "secondary",
      "givers": [398],
      "profession": 1,
      "xp": 2500,
      "gold": 100,
      "wiki": "https://www.guildwiki.de/wiki/Die_Gebrüder_Kaguchi"
    },
    "100727": {
      "name": "The Knights Who Say Nian",
      "type": "event",
      "givers": [426],
      "event": 1,
      "xp": 5000,
      "gold": 300,
      "rewards": ["25 Lunar Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Ritter,_die_Nian_sagen"
    },
    "100728": {
      "name": "The Missing Corpses",
      "type": "secondary",
      "givers": [465],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Die_verschollenen_Kadaver"
    },
    "100729": {
      "name": "The Missing Link",
      "type": "secondary",
      "campaign": 2,
      "region": 8,
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Das_fehlende_Bindeglied"
    },
    "100730": {
      "name": "The Naga Source",
      "type": "secondary",
      "givers": [224],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "requires": [100486],
      "wiki": "https://www.guildwiki.de/wiki/Der_Ursprung_der_Naga"
    },
    "100731": {
      "name": "The Plot Thickens",
      "type": "secondary",
      "givers": [608],
      "xp": 2500,
      "gold": 175,
      "requires": [100715],
      "next": [100582],
      "wiki": "https://www.guildwiki.de/wiki/Langsam_wird_es_interessant"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_randalierenden_Yetis"
    },
    "100733": {
      "name": "The Red Frog",
      "type": "secondary",
      "givers": [377],
      "xp": 2500,
      "gold": 100,
      "requires": [100640],
      "wiki": "https://www.guildwiki.de/wiki/Der_rote_Frosch"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Rettungsversuch"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Rettungsversuch_(Schwerer_Modus)"
    },
    "100736": {
      "name": "The Rite of Valor",
      "type": "secondary",
      "givers": [340],
      "xp": 3000,
      "gold": 250,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Ritus_der_Tapferkeit"
    },
    "100737": {
      "name": "The Road Less Traveled",
      "type": "primary",
      "givers": [467],
      "xp": 1500,
      "gold": 100,
      "requires": [100586],
      "next": [100604],
      "wiki": "https://www.guildwiki.de/wiki/Die_wenig_begangene_Straße"
    },
    "100738": {
      "name": "The Search for a Cure",
      "type": "secondary",
      "givers": [438],
      "xp": 3000,
      "gold": 175,
      "skills": [305],
      "next": [100666],
      "wiki": "https://www.guildwiki.de/wiki/Die_Suche_nach_einem_Heilmittel"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Schattenklingen"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Schrein_des_Maat"
    },
    "100741": {
      "name": "The Sickened Village",
      "type": "secondary",
      "givers": [282],
      "xp": 2500,
      "gold": 100,
      "requires": [100622],
      "wiki": "https://www.guildwiki.de/wiki/Das_erkrankte_Dorf"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Belagerung_des_Dorfes_Tsumei"
    },
    "100743": {
      "name": "The Stone of the Elements",
      "type": "secondary",
      "givers": [344],
      "xp": 2500,
      "gold": 100,
      "requires": [100548],
      "wiki": "https://www.guildwiki.de/wiki/Der_Stein_der_Elemente_(Quest)"
    },
    "100744": {
      "name": "The Thieving Nanny",
      "type": "secondary",
      "givers": [456],
      "xp": 2500,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "wiki": "https://www.guildwiki.de/wiki/Die_diebische_Kinderfrau"
    },
    "100745": {
      "name": "The Threat Grows",
      "type": "primary",
      "givers": [385],
      "xp": 1500,
      "gold": 100,
      "requires": [100777],
      "next": [100586],
      "wiki": "https://www.guildwiki.de/wiki/Die_Bedrohung_wächst"
    },
    "100746": {
      "name": "The Xunlai Agent",
      "type": "secondary",
      "givers": [452],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Xunlai-Agentin"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Jagd_auf_den_Yeti"
    },
    "100748": {
      "name": "The Zenos Squad",
      "type": "secondary",
      "givers": [289],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Luxon faction", "Luxon Totem"],
      "next": [100722],
      "wiki": "https://www.guildwiki.de/wiki/Der_Zenos-Trupp"
    },
    "100749": {
      "name": "There Goes the Neighborhood (Hard mode)‎",
      "type": "secondary",
      "givers": [220],
      "xp": 6000,
      "gold": 3000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100637],
      "next": [100620],
      "wiki": "https://www.guildwiki.de/wiki/Lebe_wohl,_Nachbarschaft_(Schwerer_Modus)"
    },
    "100750": {
      "name": "There Goes the Neighborhood‎",
      "type": "secondary",
      "givers": [220],
      "xp": 3000,
      "gold": 1500,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100636],
      "next": [100619],
      "wiki": "https://www.guildwiki.de/wiki/Lebe_wohl,_Nachbarschaft"
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
      "wiki": "https://www.guildwiki.de/wiki/Zum_Tahnnakai-Tempel"
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
      "wiki": "https://www.guildwiki.de/wiki/Nach_Zen_Daijun"
    },
    "100753": {
      "name": "To the Rescue (Factions quest)",
      "type": "primary",
      "givers": [791],
      "xp": 2000,
      "gold": 150,
      "requires": [100604],
      "next": [100752],
      "wiki": "https://www.guildwiki.de/wiki/Zu_Hilfe"
    },
    "100754": {
      "name": "Togo's Ultimatum",
      "type": "secondary",
      "givers": [386],
      "xp": 3000,
      "gold": 150,
      "rewards": ["Monastery Credit"],
      "next": [100742],
      "wiki": "https://www.guildwiki.de/wiki/Togos_Ultimatum"
    },
    "100755": {
      "name": "Too High a Price",
      "type": "secondary",
      "givers": [336],
      "xp": 3000,
      "gold": 175,
      "rewards": ["Imperial Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Preis_ist_zu_hoch"
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
      "wiki": "https://www.guildwiki.de/wiki/Findet_Ang_den_Kurzlebigen"
    },
    "100757": {
      "name": "Track Down Brother Pe Wan",
      "type": "primary",
      "givers": [714],
      "xp": 600,
      "gold": 50,
      "requires": [100689],
      "next": [100668],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_nach_Bruder_Pe_Wan"
    },
    "100758": {
      "name": "Track Down Kai Ying",
      "type": "primary",
      "givers": [483],
      "xp": 600,
      "gold": 50,
      "requires": [100678],
      "next": [100679],
      "wiki": "https://www.guildwiki.de/wiki/Spürt_Kai_Ying_auf"
    },
    "100759": {
      "name": "Track Down Lo Sha",
      "type": "primary",
      "givers": [300],
      "xp": 600,
      "gold": 50,
      "requires": [100526],
      "next": [100595],
      "wiki": "https://www.guildwiki.de/wiki/Spürt_Lo_Sha_auf"
    },
    "100760": {
      "name": "Track Down Panaku",
      "type": "primary",
      "givers": [742],
      "xp": 600,
      "gold": 50,
      "requires": [100628],
      "next": [100546],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_nach_Panaku"
    },
    "100761": {
      "name": "Track Down Su",
      "type": "primary",
      "givers": [638],
      "xp": 600,
      "gold": 50,
      "requires": [100593],
      "next": [100642],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_nach_Su"
    },
    "100762": {
      "name": "Track Down Weng Gha",
      "type": "primary",
      "givers": [733],
      "xp": 600,
      "gold": 50,
      "requires": [100698],
      "next": [100711],
      "wiki": "https://www.guildwiki.de/wiki/Spürt_Weng_Gha_auf"
    },
    "100763": {
      "name": "Track Down Zho",
      "type": "primary",
      "givers": [562],
      "xp": 600,
      "gold": 50,
      "requires": [100565],
      "next": [100747],
      "wiki": "https://www.guildwiki.de/wiki/Sucht_nach_Zho"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Verdorbenheit_auf_der_Spur"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Verdorbenheit_auf_der_Spur_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Schlagabtausch"
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
      "wiki": "https://www.guildwiki.de/wiki/Schlagabtausch_(Schwerer_Modus)"
    },
    "100768": {
      "name": "Tsumei Village",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["75 Victory Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Dorf_Tsumei_(Mission)"
    },
    "100769": {
      "name": "Tsumei Village (mission 2)",
      "type": "event",
      "givers": [473],
      "event": 6,
      "rewards": ["100 Victory Tokens"],
      "wiki": "https://www.guildwiki.de/wiki/Dorf_Tsumei_(Mission_2)"
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
      "wiki": "https://www.guildwiki.de/wiki/Vasallenstaaten"
    },
    "100771": {
      "name": "Vassal States (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Guard Requisition Order", "Imperial Commendation"],
      "requires": [100770, 100474],
      "wiki": "https://www.guildwiki.de/wiki/Vasallenstaaten_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Gewalt_auf_den_Straßen"
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
      "wiki": "https://www.guildwiki.de/wiki/Gewalt_auf_den_Straßen_(Schwerer_Modus)"
    },
    "100774": {
      "name": "Wardens On the March",
      "type": "secondary",
      "givers": [221],
      "xp": 3000,
      "gold": 250,
      "rewards": ["750 Kurzick faction", "Equipment Requisition"],
      "wiki": "https://www.guildwiki.de/wiki/Aufseher_im_Anmarsch"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Angchu_warnen"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Angchu_warnen_(Schwerer_Modus)"
    },
    "100777": {
      "name": "Warning the Tengu",
      "type": "primary",
      "givers": [439],
      "xp": 1500,
      "gold": 75,
      "requires_missions": [257],
      "next": [100745],
      "wiki": "https://www.guildwiki.de/wiki/Die_Tengu_warnen"
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
      "wiki": "https://www.guildwiki.de/wiki/Krieger-Befähigung"
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
      "wiki": "https://www.guildwiki.de/wiki/Erinnerung_des_Reisenden:_Cantha"
    },
    "100780": {
      "name": "Welcome to Cantha",
      "type": "secondary",
      "givers": [786],
      "xp": 3000,
      "gold": 150,
      "rewards": ["1 Skill point"],
      "requires": [101193],
      "wiki": "https://www.guildwiki.de/wiki/Willkommen_in_Cantha"
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
      "wiki": "https://www.guildwiki.de/wiki/Was_im_Schatten_lauert"
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
      "wiki": "https://www.guildwiki.de/wiki/Was_im_Schatten_lauert_(Schwerer_Modus)"
    },
    "100783": {
      "name": "When Kappa Attack",
      "type": "secondary",
      "givers": [251],
      "xp": 2000,
      "gold": 1500,
      "rewards": ["Imperial Commendation"],
      "next": [100784],
      "wiki": "https://www.guildwiki.de/wiki/Kappa-Angriff"
    },
    "100784": {
      "name": "When Kappa Attack (Hard mode)",
      "type": "secondary",
      "givers": [252],
      "xp": 5000,
      "gold": 2000,
      "rewards": ["Imperial Commendation", "Imperial Commendation"],
      "requires": [100783],
      "wiki": "https://www.guildwiki.de/wiki/Kappa-Angriff_(Schwerer_Modus)"
    },
    "100785": {
      "name": "Wicked Wardens",
      "type": "secondary",
      "givers": [679],
      "xp": 3000,
      "gold": 250,
      "rewards": ["1,000 Kurzick faction", "Equipment Requisition"],
      "wiki": "https://www.guildwiki.de/wiki/Niederträchtige_Aufseher"
    },
    "100786": {
      "name": "A Brief Introduction",
      "type": "secondary",
      "givers": [529],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100833],
      "wiki": "https://www.guildwiki.de/wiki/Eine_kurze_Einführung"
    },
    "100787": {
      "name": "A Burning Desire",
      "type": "event",
      "givers": [524],
      "event": 1,
      "xp": 2000,
      "gold": 300,
      "rewards": ["25 Lunar Tokens", "2 Sparklers"],
      "wiki": "https://www.guildwiki.de/wiki/Eine_brandheiße_Sache"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_Haufen_Probleme"
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
      "wiki": "https://www.guildwiki.de/wiki/Geschäft_ist_Geschäft"
    },
    "100790": {
      "name": "A Decayed Monument",
      "type": "secondary",
      "givers": [500],
      "xp": 2000,
      "gold": 200,
      "wiki": "https://www.guildwiki.de/wiki/Ein_verfallenes_Monument"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_verspätete_Lieferung"
    },
    "100792": {
      "name": "A Father's Fate",
      "type": "secondary",
      "givers": [535],
      "xp": 500,
      "gold": 50,
      "wiki": "https://www.guildwiki.de/wiki/Eines_Vaters_Schicksal"
    },
    "100793": {
      "name": "A Fleshy Operation",
      "type": "secondary",
      "givers": [526],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "requires": [100878],
      "wiki": "https://www.guildwiki.de/wiki/Eine_fleischige_Angelegenheit"
    },
    "100794": {
      "name": "A Flickering Flame",
      "type": "secondary",
      "givers": [525],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points", "Inscribed Secret"],
      "next": [100866],
      "wiki": "https://www.guildwiki.de/wiki/Eine_flackernde_Flamme"
    },
    "100795": {
      "name": "A Fool's Luck",
      "type": "secondary",
      "givers": [267],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Das_Glück_eines_Narren"
    },
    "100796": {
      "name": "A Friend in Need",
      "type": "secondary",
      "givers": [761],
      "xp": 250,
      "gold": 100,
      "wiki": "https://www.guildwiki.de/wiki/Unter_Freunden"
    },
    "100797": {
      "name": "A Ghostly Request",
      "type": "secondary",
      "givers": [701],
      "xp": 2000,
      "gold": 200,
      "rewards": ["20 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100815],
      "wiki": "https://www.guildwiki.de/wiki/Rache_für_einen_Geist"
    },
    "100798": {
      "name": "A Hidden Threat",
      "type": "secondary",
      "givers": [531],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Eine_verborgene_Bedrohung"
    },
    "100799": {
      "name": "A History of Violence",
      "type": "secondary",
      "givers": [225],
      "xp": 4500,
      "gold": 400,
      "rewards": ["100 Lightbringer points"],
      "next": [100829],
      "wiki": "https://www.guildwiki.de/wiki/Aus_dem_Geschichtsbuch_der_Gewalt"
    },
    "100800": {
      "name": "A Land of Heroes",
      "type": "primary",
      "givers": [488],
      "xp": 2500,
      "rewards": ["300 Sunspear Promotion Points"],
      "requires": [100993],
      "next": [101041],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Land_der_Helden"
    },
    "100801": {
      "name": "A Leap of Faith",
      "type": "secondary",
      "givers": [776],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [100928],
      "wiki": "https://www.guildwiki.de/wiki/Vertrauenssache"
    },
    "100802": {
      "name": "A Little Recon",
      "type": "secondary",
      "givers": [233],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_bisschen_Aufklärung"
    },
    "100803": {
      "name": "A Loose Cannon",
      "type": "secondary",
      "givers": [533],
      "xp": 500,
      "gold": 50,
      "wiki": "https://www.guildwiki.de/wiki/Eine_öffentliche_Gefahr"
    },
    "100804": {
      "name": "A Message Home",
      "type": "secondary",
      "givers": [521],
      "xp": 1500,
      "gold": 125,
      "wiki": "https://www.guildwiki.de/wiki/Eine_Nachricht_an_die_Heimat"
    },
    "100805": {
      "name": "A Message for Janeera",
      "type": "secondary",
      "givers": [517],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "requires": [100812],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Nachricht_für_Janeera"
    },
    "100806": {
      "name": "A Mysterious Missive",
      "type": "secondary",
      "givers": [496],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100816],
      "wiki": "https://www.guildwiki.de/wiki/Ein_mysteriöses_Sendschreiben"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_neuer_Fremdenführer"
    },
    "100808": {
      "name": "A Peaceful Solution",
      "type": "secondary",
      "givers": [527],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Eine_friedliche_Lösung"
    },
    "100809": {
      "name": "A Perplexing Plague",
      "type": "secondary",
      "givers": [496],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100819],
      "wiki": "https://www.guildwiki.de/wiki/Eine_geheimnisvolle_Seuche"
    },
    "100810": {
      "name": "A Personal Vault",
      "type": "secondary",
      "givers": [493],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Ein_eigener_Tresor"
    },
    "100811": {
      "name": "A Prescription for Conscription",
      "type": "secondary",
      "givers": [491],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires_missions": [453],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Vorwand_zur_Einberufung"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_Frage_der_Moral"
    },
    "100813": {
      "name": "A Show of Force",
      "type": "secondary",
      "givers": [515],
      "xp": 4000,
      "gold": 400,
      "rewards": ["45 Lightbringer points"],
      "requires": [101008],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Demonstration_der_Stärke"
    },
    "100814": {
      "name": "A Sound of Ancient Horns",
      "type": "secondary",
      "givers": [228],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires_missions": [520],
      "wiki": "https://www.guildwiki.de/wiki/Der_Klang_alter_Hörner"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_brenzlige_Angelegenheit"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_gestohlene_Spore"
    },
    "100817": {
      "name": "A Tasty Morsel",
      "type": "secondary",
      "givers": [489],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "requires": [101065],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Leckerbissen"
    },
    "100818": {
      "name": "A Thorn in Varesh's Side",
      "type": "secondary",
      "givers": [482],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Dorn_in_Vareshs_Seite"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_beunruhigende_Theorie"
    },
    "100820": {
      "name": "All Alone in the Darkness",
      "type": "primary",
      "givers": [193],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Lightbringer points"],
      "missions": [527],
      "wiki": "https://www.guildwiki.de/wiki/Alleine_in_der_Dunkelheit"
    },
    "100821": {
      "name": "All for One and One for Justice",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Alle_für_einen_und_einer_für_Gerechtigkeit"
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
      "wiki": "https://www.guildwiki.de/wiki/Ende_gut,_alles_gut"
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
      "wiki": "https://www.guildwiki.de/wiki/Qual_der_Ahnen"
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
      "wiki": "https://www.guildwiki.de/wiki/Neue_Helden_braucht_das_Land"
    },
    "100825": {
      "name": "Anger of the Stone Face",
      "type": "secondary",
      "givers": [359],
      "xp": 1000,
      "gold": 100,
      "requires": [101001],
      "wiki": "https://www.guildwiki.de/wiki/Der_Zorn_des_Steinernen_Antlitzes"
    },
    "100826": {
      "name": "Armored Transport",
      "type": "secondary",
      "givers": [100],
      "xp": 500,
      "gold": 20,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "2 Tanned Hide Squares", "2 Bolt of Cloths"],
      "wiki": "https://www.guildwiki.de/wiki/Gepanzerter_Transport"
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
      "wiki": "https://www.guildwiki.de/wiki/Angriff_auf_Beknurhafen"
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
      "wiki": "https://www.guildwiki.de/wiki/Angriff_auf_Kodash"
    },
    "100829": {
      "name": "Bad Fortune",
      "type": "secondary",
      "givers": [225],
      "xp": 4500,
      "gold": 400,
      "rewards": ["100 Lightbringer points", "Inscribed Secret"],
      "requires": [100799],
      "wiki": "https://www.guildwiki.de/wiki/Wahrheitsfindung"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_dunkle_Flut_steigt"
    },
    "100831": {
      "name": "Battle Preparations",
      "type": "primary",
      "givers": [630],
      "xp": 1500,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [101240, 100695],
      "next": [100993],
      "wiki": "https://www.guildwiki.de/wiki/Kampfvorbereitungen"
    },
    "100832": {
      "name": "Battle of Turai's Procession",
      "type": "secondary",
      "givers": [328],
      "xp": 4000,
      "gold": 400,
      "rewards": ["10 Lightbringer points", "Kournan Coin"],
      "requires": [101057],
      "wiki": "https://www.guildwiki.de/wiki/Die_Schlacht_an_Turais_Weg"
    },
    "100833": {
      "name": "Between a Rock...",
      "type": "secondary",
      "givers": [618],
      "xp": 4000,
      "gold": 400,
      "rewards": ["15 Lightbringer points"],
      "requires": [100786],
      "wiki": "https://www.guildwiki.de/wiki/In_der_Klemme_..."
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
      "wiki": "https://www.guildwiki.de/wiki/Stückwerk"
    },
    "100835": {
      "name": "Blueprint of the Fall",
      "type": "secondary",
      "givers": [561],
      "xp": 2500,
      "rewards": ["50 Lightbringer points", "Inscribed Secret"],
      "requires": [100875],
      "wiki": "https://www.guildwiki.de/wiki/Licht_ins_Dunkel"
    },
    "100836": {
      "name": "Botanical Research",
      "type": "secondary",
      "givers": [245],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "wiki": "https://www.guildwiki.de/wiki/Botanische_Recherchen"
    },
    "100837": {
      "name": "Brains or Brawn",
      "type": "secondary",
      "givers": [201],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [101036],
      "wiki": "https://www.guildwiki.de/wiki/Muskeln_oder_Grips_(Entscheidung_für_Goren)"
    },
    "100838": {
      "name": "Brains or Brawn",
      "type": "secondary",
      "givers": [201],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100906],
      "wiki": "https://www.guildwiki.de/wiki/Muskeln_oder_Grips_(Entscheidung_für_Norgu)"
    },
    "100839": {
      "name": "Breaching the Stygian Veil",
      "type": "instance",
      "givers": [248],
      "xp": 10000,
      "gold": 500,
      "rewards": ["500 Lightbringer points"],
      "next": [100841],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Bresche_im_Stygischen_Schleier"
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
      "wiki": "https://www.guildwiki.de/wiki/Angriff_ist_die_beste_Verteidigung"
    },
    "100841": {
      "name": "Brood Wars",
      "type": "instance",
      "givers": [248],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "requires": [100839],
      "wiki": "https://www.guildwiki.de/wiki/Brutkriege"
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
      "wiki": "https://www.guildwiki.de/wiki/Bau_des_Stützpunkts:_Kriegsgefangene"
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
      "wiki": "https://www.guildwiki.de/wiki/Bau_des_Stützpunkts:_Das_Verhör"
    },
    "100844": {
      "name": "Building the Base: The Meeting",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [100843],
      "wiki": "https://www.guildwiki.de/wiki/Bau_des_Stützpunkts:_Das_Treffen"
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
      "wiki": "https://www.guildwiki.de/wiki/Hilfe_vom_Orden"
    },
    "100846": {
      "name": "Capturing the Signet of Capture",
      "type": "secondary",
      "givers": [276],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "requires": [101022],
      "wiki": "https://www.guildwiki.de/wiki/Das_Siegel_der_Erbeutung"
    },
    "100847": {
      "name": "Catch of the Day",
      "type": "secondary",
      "givers": [494],
      "xp": 1000,
      "gold": 125,
      "rewards": ["10 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_großer_Fang"
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
      "wiki": "https://www.guildwiki.de/wiki/Wink_mit_dem_Schattenhuf"
    },
    "100849": {
      "name": "Centaur Concerns",
      "type": "secondary",
      "givers": [762],
      "hero": [10],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "wiki": "https://www.guildwiki.de/wiki/Unter_Zentauren"
    },
    "100850": {
      "name": "Chasing Zenmai",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Jagd_auf_Zenmai"
    },
    "100851": {
      "name": "Choose Your Secondary Profession (Nightfall)",
      "type": "primary",
      "givers": [649],
      "xp": 500,
      "gold": 50,
      "requires": [100990],
      "next": [100935],
      "wiki": "https://www.guildwiki.de/wiki/Wählt_Eure_sekundäre_Klasse_(Nightfall)"
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
      "wiki": "https://www.guildwiki.de/wiki/Jokos_Schatulle"
    },
    "100853": {
      "name": "Command Training",
      "type": "secondary",
      "givers": [235],
      "xp": 250,
      "gold": 125,
      "wiki": "https://www.guildwiki.de/wiki/Befehlstraining"
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
      "wiki": "https://www.guildwiki.de/wiki/Korsaren-Invasion"
    },
    "100855": {
      "name": "Corsair Vengeance",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires": [100854],
      "wiki": "https://www.guildwiki.de/wiki/Korsaren-Rache"
    },
    "100856": {
      "name": "Cover Your Tracks",
      "type": "secondary",
      "givers": [601],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "requires": [100930],
      "wiki": "https://www.guildwiki.de/wiki/Verlorene_Fährte"
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
      "wiki": "https://www.guildwiki.de/wiki/Durchquerung_des_Ödlands"
    },
    "100858": {
      "name": "Dark Gateway",
      "type": "secondary",
      "givers": [281],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "requires": [100873],
      "wiki": "https://www.guildwiki.de/wiki/Das_dunkle_Tor"
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
      "wiki": "https://www.guildwiki.de/wiki/Datensuche"
    },
    "100860": {
      "name": "Deathbringer Company",
      "type": "instance",
      "givers": [753],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Tod_den_Todbringern!"
    },
    "100861": {
      "name": "Defender's Choice",
      "type": "secondary",
      "givers": [449, 450],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100815],
      "wiki": "https://www.guildwiki.de/wiki/Die_Wahl_des_Verteidigers"
    },
    "100862": {
      "name": "Desperate Measures",
      "type": "secondary",
      "givers": [777],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Verzweifelte_Maßnahmen"
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
      "wiki": "https://www.guildwiki.de/wiki/Vernichtet_die_Harpyien"
    },
    "100864": {
      "name": "Destroy the Ungrateful Slaves",
      "type": "secondary",
      "givers": [298],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": "https://www.guildwiki.de/wiki/Vernichtet_die_undankbaren_Sklaven"
    },
    "100865": {
      "name": "Diamond in the Rough",
      "type": "secondary",
      "givers": [455],
      "xp": 1000,
      "gold": 100,
      "wiki": "https://www.guildwiki.de/wiki/Die_diebische_Harpyie"
    },
    "100866": {
      "name": "Dismember the Titans",
      "type": "secondary",
      "givers": [678, 525],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points", "Inscribed Secret"],
      "requires": [100794],
      "wiki": "https://www.guildwiki.de/wiki/Nieder_mit_den_Titanen"
    },
    "100867": {
      "name": "Double Dog Dare",
      "type": "secondary",
      "givers": [715],
      "xp": 2000,
      "gold": 200,
      "requires": [101017],
      "wiki": "https://www.guildwiki.de/wiki/Schatzsuche"
    },
    "100868": {
      "name": "Double Your Pleasure and RUN!",
      "type": "event",
      "givers": [766],
      "event": 11,
      "rewards": ["Ghoulish Accessory Token"],
      "wiki": "https://www.guildwiki.de/wiki/Verdoppelt_Euren_Spaß_und_LAUFT"
    },
    "100869": {
      "name": "Douse Your Enthusiasm",
      "type": "event",
      "givers": [686],
      "event": 1,
      "xp": 2000,
      "gold": 300,
      "rewards": ["10 Sunspear Promotion Points", "25 Lunar Tokens", "1 Sugary Blue Drink"],
      "wiki": "https://www.guildwiki.de/wiki/O_heiliger_Sankt_Florian"
    },
    "100870": {
      "name": "Down on the Bayou",
      "type": "secondary",
      "givers": [449, 450],
      "xp": 1500,
      "gold": 125,
      "rewards": ["10 Sunspear points"],
      "wiki": "https://www.guildwiki.de/wiki/Sumpfgeschichten"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_Lindwurm_im_Käfig"
    },
    "100872": {
      "name": "Drakes on the Plain",
      "type": "secondary",
      "givers": [416],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "wiki": "https://www.guildwiki.de/wiki/Die_Lindwürmer_sind_los"
    },
    "100873": {
      "name": "Drink of the Gods",
      "type": "secondary",
      "givers": [281],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "next": [100858],
      "wiki": "https://www.guildwiki.de/wiki/Trunk_der_Götter"
    },
    "100874": {
      "name": "Eavesdropping",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Lauschangriff"
    },
    "100875": {
      "name": "Escape from the Torment",
      "type": "secondary",
      "givers": [561],
      "xp": 2500,
      "gold": 200,
      "rewards": ["50 Lightbringer points", "Inscribed Secret"],
      "next": [100835],
      "wiki": "https://www.guildwiki.de/wiki/Flucht_aus_den_Qualen"
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
      "wiki": "https://www.guildwiki.de/wiki/Besitzansprüche"
    },
    "100877": {
      "name": "Extinction",
      "type": "secondary",
      "givers": [228],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100910],
      "wiki": "https://www.guildwiki.de/wiki/Auslöschung"
    },
    "100878": {
      "name": "Faded Memory",
      "type": "secondary",
      "givers": [526],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "next": [100793],
      "wiki": "https://www.guildwiki.de/wiki/Verblasste_Erinnerung"
    },
    "100879": {
      "name": "Family Soul",
      "type": "secondary",
      "givers": [552],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": "https://www.guildwiki.de/wiki/Familienseele"
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
      "wiki": "https://www.guildwiki.de/wiki/Familienbande_(Nightfall)"
    },
    "100881": {
      "name": "Feast of Bokka",
      "type": "secondary",
      "givers": [244],
      "xp": 1500,
      "gold": 450,
      "wiki": "https://www.guildwiki.de/wiki/Bokkas_Festmahl"
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
      "wiki": "https://www.guildwiki.de/wiki/Fressrausch_(Quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Findet_die_gestohlenen_Geschenke"
    },
    "100884": {
      "name": "Finding a Purpose",
      "type": "secondary",
      "givers": [343],
      "xp": 2500,
      "wiki": "https://www.guildwiki.de/wiki/Der_Sinn_des_Lebens"
    },
    "100885": {
      "name": "First Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "next": [100989],
      "wiki": "https://www.guildwiki.de/wiki/Der_Erstgeborene"
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
      "wiki": "https://www.guildwiki.de/wiki/Fische_im_Fass"
    },
    "100887": {
      "name": "Flamingo... gehen... gegangen",
      "type": "secondary",
      "givers": [560],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Flamingo..._gehen..._gegangen"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_heiße_Spur"
    },
    "100889": {
      "name": "For Your Ears Only",
      "type": "secondary",
      "givers": [684],
      "xp": 1500,
      "gold": 200,
      "requires": [100955],
      "next": [100924],
      "wiki": "https://www.guildwiki.de/wiki/Nur_für_Eure_Ohren_bestimmt"
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
      "wiki": "https://www.guildwiki.de/wiki/Für_einen_Preis"
    },
    "100891": {
      "name": "Forgotten Retribution",
      "type": "secondary",
      "givers": [372],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Vergessene_Rache"
    },
    "100892": {
      "name": "Foundry Breakout",
      "type": "instance",
      "givers": [703],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Raus_aus_dem_Inferno"
    },
    "100893": {
      "name": "Fury of a Grieving Heart",
      "type": "secondary",
      "givers": [211, 212],
      "xp": 1500,
      "gold": 125,
      "requires": [101067],
      "wiki": "https://www.guildwiki.de/wiki/Der_Zorn_eines_trauernden_Herzens"
    },
    "100894": {
      "name": "Gain Goren",
      "type": "secondary",
      "givers": [590],
      "xp": 2500,
      "next": [100988],
      "wiki": "https://www.guildwiki.de/wiki/Goren_aufnehmen"
    },
    "100895": {
      "name": "Gain Jin",
      "type": "secondary",
      "givers": [625],
      "xp": 2500,
      "wiki": "https://www.guildwiki.de/wiki/Jin_aufnehmen"
    },
    "100896": {
      "name": "Gain Margrid",
      "type": "secondary",
      "givers": [658],
      "xp": 2500,
      "requires_missions": [528],
      "wiki": "https://www.guildwiki.de/wiki/Margrid_aufnehmen"
    },
    "100897": {
      "name": "Gain Master of Whispers",
      "type": "secondary",
      "givers": [299],
      "xp": 2500,
      "wiki": "https://www.guildwiki.de/wiki/Den_Meister_der_Gerüchte_aufnehmen"
    },
    "100898": {
      "name": "Gain Norgu",
      "type": "secondary",
      "givers": [682],
      "xp": 2500,
      "next": [100954],
      "wiki": "https://www.guildwiki.de/wiki/Norgu_aufnehmen"
    },
    "100899": {
      "name": "Gain Olias",
      "type": "secondary",
      "givers": [192],
      "xp": 1500,
      "wiki": "https://www.guildwiki.de/wiki/Olias_aufnehmen"
    },
    "100900": {
      "name": "Gain Sousuke",
      "type": "secondary",
      "givers": [730],
      "xp": 2500,
      "wiki": "https://www.guildwiki.de/wiki/Sousuke_aufnehmen"
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
      "wiki": "https://www.guildwiki.de/wiki/Gartenarbeit"
    },
    "100902": {
      "name": "Getting Even",
      "type": "secondary",
      "givers": [700],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points", "Ancient Artifact"],
      "requires": [100807],
      "wiki": "https://www.guildwiki.de/wiki/Rache_(Quest)"
    },
    "100903": {
      "name": "Ghosts in the Graveyard",
      "type": "secondary",
      "givers": [604],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires": [100909],
      "wiki": "https://www.guildwiki.de/wiki/Heimleuchten"
    },
    "100904": {
      "name": "Gift of the Djinn",
      "type": "secondary",
      "givers": [579, 580],
      "xp": 4000,
      "gold": 1000,
      "rewards": ["2 Trade Contracts"],
      "wiki": "https://www.guildwiki.de/wiki/Geschenk_der_Dschinn"
    },
    "100905": {
      "name": "Good Demon Hunting",
      "type": "secondary",
      "givers": [622],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "wiki": "https://www.guildwiki.de/wiki/Jagd_auf_den_Dämonen"
    },
    "100906": {
      "name": "Goren's Stuff: Part 1",
      "type": "secondary",
      "givers": [591],
      "xp": 2000,
      "requires": [100837],
      "next": [100907],
      "wiki": "https://www.guildwiki.de/wiki/Gorens_Hab_und_Gut:_Teil_1"
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
      "wiki": "https://www.guildwiki.de/wiki/Gorens_Hab_und_Gut:_Teil_2"
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
      "wiki": "https://www.guildwiki.de/wiki/Gier_und_Reue"
    },
    "100909": {
      "name": "Gruft-ologie",
      "type": "secondary",
      "givers": [598, 599],
      "xp": 1500,
      "gold": 125,
      "next": [100903],
      "wiki": "https://www.guildwiki.de/wiki/Gruft-ologie"
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
      "wiki": "https://www.guildwiki.de/wiki/Wächterrettung"
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
      "wiki": "https://www.guildwiki.de/wiki/Herz_oder_Verstand:_Garten_in_Gefahr"
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
      "wiki": "https://www.guildwiki.de/wiki/Herz_oder_Verstand:_Ronjok_in_Gefahr"
    },
    "100913": {
      "name": "Herds to the Slaughter",
      "type": "secondary",
      "givers": [495],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_guter_Hirte"
    },
    "100914": {
      "name": "Hog Hunt",
      "type": "secondary",
      "givers": [719],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Schweinejagd"
    },
    "100915": {
      "name": "Holding the Line",
      "type": "secondary",
      "givers": [601],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Inscribed Secret"],
      "next": [100930],
      "wiki": "https://www.guildwiki.de/wiki/Haltet_die_Stellung"
    },
    "100916": {
      "name": "Hole of Istan",
      "type": "primary",
      "givers": [272],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "wiki": "https://www.guildwiki.de/wiki/Das_Loch_von_Istan"
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
      "wiki": "https://www.guildwiki.de/wiki/Ohne_Fleiß_kein_Preis"
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
      "wiki": "https://www.guildwiki.de/wiki/Dunkle_Horde_(Quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Als_die_Grentche_den_Wintertag_stahlen"
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
      "wiki": "https://www.guildwiki.de/wiki/Gejagt!"
    },
    "100921": {
      "name": "Identity Theft",
      "type": "secondary",
      "givers": [614],
      "xp": 500,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points", "Identification Kit (25 uses)", "Battle Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Identitäts-Diebstahl"
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
      "wiki": "https://www.guildwiki.de/wiki/Verteidigung_des_Theaters"
    },
    "100923": {
      "name": "Insatiable Appetite",
      "type": "instance",
      "givers": [490],
      "repeatable": true,
      "rewards": ["Branch of Juni Berries"],
      "wiki": "https://www.guildwiki.de/wiki/Unstillbarer_Appetit"
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
      "wiki": "https://www.guildwiki.de/wiki/Reiseunterbrechung"
    },
    "100925": {
      "name": "Into Chahbek Village",
      "type": "primary",
      "givers": [383],
      "next": [100974],
      "missions": [556],
      "wiki": "https://www.guildwiki.de/wiki/Nach_Chahbek"
    },
    "100926": {
      "name": "Into the Fire",
      "type": "secondary",
      "givers": [183, 184],
      "xp": 2500,
      "gold": 200,
      "next": [101030],
      "wiki": "https://www.guildwiki.de/wiki/Ab_ins_Getümmel"
    },
    "100927": {
      "name": "Invasion From Within",
      "type": "secondary",
      "givers": [203],
      "xp": 2500,
      "gold": 200,
      "rewards": ["50 Lightbringer points"],
      "requires": [101047],
      "wiki": "https://www.guildwiki.de/wiki/Feinde_in_den_eigenen_Reihen"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Insel_der_Toten"
    },
    "100929": {
      "name": "Jedur, the Youngest Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
      "wiki": "https://www.guildwiki.de/wiki/Jedur,_der_Jüngste"
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
      "wiki": "https://www.guildwiki.de/wiki/Kennt_Eure_Feinde"
    },
    "100931": {
      "name": "Kormir's Crusade",
      "type": "primary",
      "givers": [640],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Lightbringer points"],
      "next": [100820],
      "wiki": "https://www.guildwiki.de/wiki/Kormirs_Suche"
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
      "wiki": "https://www.guildwiki.de/wiki/Koss_als_Anwerber"
    },
    "100933": {
      "name": "Koss's Elixir",
      "type": "secondary",
      "givers": [267],
      "hero": [6],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "wiki": "https://www.guildwiki.de/wiki/Koss'_Elixier"
    },
    "100934": {
      "name": "Last of the Breed",
      "type": "secondary",
      "givers": [328],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Letzte_seiner_Art"
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
      "wiki": "https://www.guildwiki.de/wiki/Leute_für_Kormir"
    },
    "100936": {
      "name": "Loyal 'til the End",
      "type": "secondary",
      "givers": [676],
      "xp": 1500,
      "gold": 25,
      "rewards": ["15 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Treue_oder_Gold"
    },
    "100937": {
      "name": "Mad Little Pony",
      "type": "event",
      "givers": [242],
      "event": 11,
      "xp": 2000,
      "gold": 1000,
      "rewards": ["50 Trick-or-Treat Bags"],
      "wiki": "https://www.guildwiki.de/wiki/Verrücktes_kleines_Pony"
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
      "wiki": "https://www.guildwiki.de/wiki/Mallyx_der_Unnachgiebige_(Quest)"
    },
    "100939": {
      "name": "Map-Travel Inventor",
      "type": "secondary",
      "givers": [412],
      "xp": 250,
      "gold": 50,
      "wiki": "https://www.guildwiki.de/wiki/Die_Kartenerfinderin"
    },
    "100940": {
      "name": "Material Girl",
      "type": "secondary",
      "givers": [101],
      "xp": 500,
      "gold": 100,
      "rewards": ["5 Sunspear Promotion Points", "Expert Salvage Kit (25 uses)"],
      "wiki": "https://www.guildwiki.de/wiki/Fleißiges_Mädchen"
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
      "wiki": "https://www.guildwiki.de/wiki/Melonni_als_Anwerberin"
    },
    "100942": {
      "name": "Melonni's Meditations",
      "type": "secondary",
      "givers": [276],
      "hero": [9],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Melonni_meditiert"
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
      "wiki": "https://www.guildwiki.de/wiki/Mirzas_letztes_Gefecht"
    },
    "100944": {
      "name": "Misela, the Middle Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
      "wiki": "https://www.guildwiki.de/wiki/Misela,_die_Zweitgeborene"
    },
    "100945": {
      "name": "Missing Shipment",
      "type": "secondary",
      "givers": [103],
      "xp": 500,
      "gold": 100,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100826],
      "wiki": "https://www.guildwiki.de/wiki/Fehlende_Lieferung"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Erweckung_des_Moa'vu'Kaal"
    },
    "100947": {
      "name": "Money Back Guarantee",
      "type": "secondary",
      "givers": [575, 576],
      "rewards": ["Margonite Gemstone", "Stygian Gemstone", "Titan Gemstone", "Torment Gemstone"],
      "requires": [100884],
      "wiki": "https://www.guildwiki.de/wiki/Geld-zurück-Garantie"
    },
    "100948": {
      "name": "Money on the Side",
      "type": "secondary",
      "givers": [676],
      "xp": 500,
      "gold": 200,
      "wiki": "https://www.guildwiki.de/wiki/Nebeneinkünfte"
    },
    "100949": {
      "name": "Mutu, the Oldest Child",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 150,
      "requires": [101048],
      "wiki": "https://www.guildwiki.de/wiki/Mutu,_der_Erstgeborene"
    },
    "100950": {
      "name": "Mysterious Message (Nightfall quest)",
      "type": "primary",
      "givers": [413],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "next": [100992, 100890],
      "wiki": "https://www.guildwiki.de/wiki/Rätselhafte_Nachricht_(Nightfall)"
    },
    "100951": {
      "name": "Need More Stuff",
      "type": "secondary",
      "givers": [246],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "Belt Pouch"],
      "wiki": "https://www.guildwiki.de/wiki/Braucht_mehr_Sachen"
    },
    "100952": {
      "name": "Never Fight Alone",
      "type": "secondary",
      "givers": [644, 645],
      "xp": 250,
      "gold": 25,
      "wiki": "https://www.guildwiki.de/wiki/Kämpft_niemals_allein"
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
      "wiki": "https://www.guildwiki.de/wiki/Ohne_mich_keine_Kormir"
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
      "wiki": "https://www.guildwiki.de/wiki/Norgus_Finsternis"
    },
    "100955": {
      "name": "Old Friends",
      "type": "secondary",
      "givers": [195],
      "xp": 1000,
      "gold": 150,
      "next": [100889],
      "wiki": "https://www.guildwiki.de/wiki/Alte_Freunde"
    },
    "100956": {
      "name": "Old Woman River",
      "type": "secondary",
      "givers": [760],
      "xp": 2500,
      "gold": 200,
      "requires_missions": [459],
      "wiki": "https://www.guildwiki.de/wiki/Unten_am_Fluss"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_Hand_wäscht_die_andere"
    },
    "100958": {
      "name": "One Man's Dream",
      "type": "secondary",
      "givers": [534],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "requires": [100901],
      "wiki": "https://www.guildwiki.de/wiki/Eines_Mannes_Traum"
    },
    "100959": {
      "name": "Open Season",
      "type": "secondary",
      "givers": [601],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Lightbringer points"],
      "requires": [100856],
      "wiki": "https://www.guildwiki.de/wiki/Jagdsaison_(Quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Öffnet_die_Schleusen_des_Todes"
    },
    "100961": {
      "name": "Out of Kourna",
      "type": "secondary",
      "givers": [624],
      "xp": 1,
      "wiki": "https://www.guildwiki.de/wiki/Jenseits_von_Kourna"
    },
    "100962": {
      "name": "Pilgrimage",
      "type": "secondary",
      "givers": [693],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": "https://www.guildwiki.de/wiki/Pilgerreise"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_Seuche_in_Cantha"
    },
    "100964": {
      "name": "Plague of Frogs",
      "type": "secondary",
      "givers": [564],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "wiki": "https://www.guildwiki.de/wiki/Froschplage"
    },
    "100965": {
      "name": "Pledge of the Merchant Princes",
      "type": "primary",
      "givers": [201],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "missions": [521],
      "wiki": "https://www.guildwiki.de/wiki/Der_Schwur_der_Handelsfürsten"
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
      "wiki": "https://www.guildwiki.de/wiki/Bevölkerungskontrolle"
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
      "wiki": "https://www.guildwiki.de/wiki/Primärtraining"
    },
    "100968": {
      "name": "Proof of Courage",
      "type": "secondary",
      "givers": [666],
      "xp": 500,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Mutprobe"
    },
    "100969": {
      "name": "Protect the Learned",
      "type": "secondary",
      "givers": [348],
      "xp": 4000,
      "gold": 400,
      "rewards": ["10 Lightbringer points", "Trade Contract"],
      "requires": [101038],
      "wiki": "https://www.guildwiki.de/wiki/Die_Gelehrten_beschützen"
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
      "wiki": "https://www.guildwiki.de/wiki/Rätselhafte_Pergamentschrift"
    },
    "100971": {
      "name": "Quality Steel",
      "type": "secondary",
      "givers": [699],
      "xp": 500,
      "gold": 20,
      "rewards": ["5 Sunspear Promotion Points", "Battle Commendation", "2 Iron Ingots", "2 Wood Planks"],
      "wiki": "https://www.guildwiki.de/wiki/Qualitätsstahl"
    },
    "100972": {
      "name": "Quarry Quandry",
      "type": "secondary",
      "givers": [488],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100973],
      "wiki": "https://www.guildwiki.de/wiki/Stunk_im_Steinbruch"
    },
    "100973": {
      "name": "Queen of the Quarry",
      "type": "secondary",
      "givers": [488],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "requires": [100972],
      "wiki": "https://www.guildwiki.de/wiki/Königin_des_Steinbruchs"
    },
    "100974": {
      "name": "Quiz the Recruits",
      "type": "primary",
      "givers": [697, 698],
      "xp": 250,
      "next_missions": [556],
      "missions": [556],
      "wiki": "https://www.guildwiki.de/wiki/Prüft_die_Rekruten"
    },
    "100975": {
      "name": "Raising an Army",
      "type": "secondary",
      "givers": [218],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "requires": [100981],
      "wiki": "https://www.guildwiki.de/wiki/Aufbau_einer_Armee"
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
      "wiki": "https://www.guildwiki.de/wiki/Sammelt_die_Fürsten"
    },
    "100977": {
      "name": "Rally the Recruits (Tutorial)",
      "type": "primary",
      "givers": [383],
      "xp": 2000,
      "skills": [322],
      "next": [100925],
      "wiki": "https://www.guildwiki.de/wiki/Die_Rekruten_abholen_(Tutorial)"
    },
    "100978": {
      "name": "Re-enlist Rojis",
      "type": "secondary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "requires": [100983],
      "wiki": "https://www.guildwiki.de/wiki/Rojis_Rückkehr"
    },
    "100979": {
      "name": "Reclaiming the Temple",
      "type": "secondary",
      "givers": [711, 228],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [101039],
      "wiki": "https://www.guildwiki.de/wiki/Rückeroberung_des_Tempels"
    },
    "100980": {
      "name": "Refuse the King",
      "type": "secondary",
      "givers": [298],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": "https://www.guildwiki.de/wiki/Den_König_abweisen"
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
      "wiki": "https://www.guildwiki.de/wiki/Requiem_für_ein_Gehirn"
    },
    "100982": {
      "name": "Return of the Undead King",
      "type": "secondary",
      "givers": [429],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Rückkehr_des_untoten_Königs"
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
      "wiki": "https://www.guildwiki.de/wiki/Aufgehende_Sonnen"
    },
    "100984": {
      "name": "Rising in the Ranks: First Spear",
      "type": "attribute",
      "givers": [411],
      "xp": 2000,
      "rewards": ["15 Attribute points"],
      "requires": [100985],
      "wiki": "https://www.guildwiki.de/wiki/Die_Karriereleiter:_Erster_Speer"
    },
    "100985": {
      "name": "Rising in the Ranks: Master Sergeant",
      "type": "attribute",
      "givers": [411],
      "xp": 2000,
      "rewards": ["15 Attribute points"],
      "next": [100984],
      "wiki": "https://www.guildwiki.de/wiki/Die_Karriereleiter:_Hauptfeldwebel"
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
      "wiki": "https://www.guildwiki.de/wiki/Rettet_die_Rentiere"
    },
    "100987": {
      "name": "Scholarly Affairs",
      "type": "secondary",
      "givers": [577],
      "xp": 250,
      "gold": 50,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Gelehrte_Angelegenheiten"
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
      "wiki": "https://www.guildwiki.de/wiki/Verbrannte_Erde"
    },
    "100989": {
      "name": "Second Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "requires": [100885],
      "next": [101048],
      "wiki": "https://www.guildwiki.de/wiki/Die_Zweitgeborene"
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
      "wiki": "https://www.guildwiki.de/wiki/Sekundärtraining"
    },
    "100991": {
      "name": "Secret Passage",
      "type": "secondary",
      "givers": [425],
      "xp": 1000,
      "gold": 100,
      "wiki": "https://www.guildwiki.de/wiki/Die_Reifeprüfung"
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
      "wiki": "https://www.guildwiki.de/wiki/Geheimnisse_in_den_Schatten"
    },
    "100993": {
      "name": "Securing Champion's Dawn",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "rewards": ["15 Sunspear Promotion Points"],
      "requires": [100831],
      "next": [100800],
      "wiki": "https://www.guildwiki.de/wiki/Champions_Erwachen_sichern"
    },
    "100994": {
      "name": "She Hungers",
      "type": "secondary",
      "givers": [605],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "requires": [100789],
      "wiki": "https://www.guildwiki.de/wiki/Heißhunger"
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
      "wiki": "https://www.guildwiki.de/wiki/Zeichen_und_Omen"
    },
    "100996": {
      "name": "Skale and Magic Compass",
      "type": "secondary",
      "givers": [724],
      "xp": 1000,
      "gold": 100,
      "wiki": "https://www.guildwiki.de/wiki/Skal_und_magischer_Kompass"
    },
    "100997": {
      "name": "Skree Hatchling Season",
      "type": "secondary",
      "givers": [577],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Zicke-zacke,_Skree-Kacke"
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
      "wiki": "https://www.guildwiki.de/wiki/Botenauftrag"
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
      "wiki": "https://www.guildwiki.de/wiki/Wintertags-Stimmung_verbreiten"
    },
    "101000": {
      "name": "Sticks and Stones",
      "type": "secondary",
      "givers": [737],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "wiki": "https://www.guildwiki.de/wiki/Stöcke_und_Steine"
    },
    "101001": {
      "name": "Stone-Faced Orders",
      "type": "secondary",
      "givers": [480],
      "xp": 1000,
      "gold": 100,
      "requires": [101016],
      "next": [100825],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Befehl_vom_Steinernen_Antlitz"
    },
    "101002": {
      "name": "Strange Bedfellows",
      "type": "secondary",
      "givers": [429],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "next": [101063],
      "wiki": "https://www.guildwiki.de/wiki/Ein_seltsames_Gespann"
    },
    "101003": {
      "name": "Student Jin",
      "type": "secondary",
      "givers": [721],
      "xp": 1500,
      "gold": 125,
      "wiki": "https://www.guildwiki.de/wiki/Schülerin_Jin"
    },
    "101004": {
      "name": "Student Sousuke",
      "type": "secondary",
      "givers": [721],
      "xp": 1500,
      "gold": 125,
      "wiki": "https://www.guildwiki.de/wiki/Schüler_Sousuke"
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
      "wiki": "https://www.guildwiki.de/wiki/Sommer_für_Bokka"
    },
    "101006": {
      "name": "Suwash the Pirate",
      "type": "secondary",
      "givers": [743],
      "xp": 500,
      "gold": 50,
      "rewards": ["5 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Suwash_der_Pirat"
    },
    "101007": {
      "name": "Take the Shortcut (Skip Tutorial)",
      "type": "primary",
      "givers": [383],
      "xp": 2000,
      "skills": [322],
      "next": [100974],
      "missions": [556],
      "wiki": "https://www.guildwiki.de/wiki/Die_Abkürzung_nehmen_(Tutorial_überspringen)"
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
      "wiki": "https://www.guildwiki.de/wiki/Tempel_der_Monolithen"
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
      "wiki": "https://www.guildwiki.de/wiki/Freundliche_Übernahme"
    },
    "101010": {
      "name": "Terror in Tyria",
      "type": "primary",
      "givers": [752],
      "travel": 1,
      "xp": 2500,
      "gold": 200,
      "requires": [101041],
      "wiki": "https://www.guildwiki.de/wiki/Terror_in_Tyria"
    },
    "101011": {
      "name": "The Apostate",
      "type": "secondary",
      "givers": [309],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Apostat"
    },
    "101012": {
      "name": "The City of Torc'qua",
      "type": "instance",
      "givers": [432],
      "xp": 10000,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Stadt_Torc'qua_(Quest)"
    },
    "101013": {
      "name": "The Cold Touch of the Past",
      "type": "secondary",
      "givers": [372],
      "xp": 4000,
      "gold": 400,
      "rewards": ["45 Lightbringer points"],
      "next": [101025],
      "wiki": "https://www.guildwiki.de/wiki/Der_kalte_Hauch_der_Vergangenheit"
    },
    "101014": {
      "name": "The Command Post",
      "type": "secondary",
      "givers": [413],
      "xp": 4000,
      "gold": 200,
      "rewards": ["160 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Kommandostelle"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Rat_wird_einberufen"
    },
    "101016": {
      "name": "The Cult of the Stone Face",
      "type": "secondary",
      "givers": [326],
      "xp": 1000,
      "gold": 100,
      "next": [101001],
      "wiki": "https://www.guildwiki.de/wiki/Der_Kult_um_das_Steinerne_Antlitz"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Zyklonpalast_(Quest)"
    },
    "101018": {
      "name": "The Dejarin Estate",
      "type": "secondary",
      "givers": [261],
      "xp": 4000,
      "gold": 400,
      "rewards": ["160 Sunspear Promotion Points", "2 Kournan Coins"],
      "requires": [101019],
      "wiki": "https://www.guildwiki.de/wiki/Das_Dejarin-Anwesen"
    },
    "101019": {
      "name": "The Foolhardy Father",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "next": [101018],
      "wiki": "https://www.guildwiki.de/wiki/Der_tollkühne_Vater"
    },
    "101020": {
      "name": "The Foundry of Failed Creations",
      "type": "instance",
      "givers": [270],
      "xp": 10000,
      "rewards": ["500 Lightbringer points"],
      "next": [100892],
      "wiki": "https://www.guildwiki.de/wiki/Das_Inferno_der_gescheiterten_Schöpfung_(Quest)"
    },
    "101021": {
      "name": "The Gift of Giving",
      "type": "event",
      "givers": [194],
      "event": 13,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "requires": [100919],
      "wiki": "https://www.guildwiki.de/wiki/Die_Gabe_des_Schenkens"
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
      "wiki": "https://www.guildwiki.de/wiki/Gesprengte_Ketten"
    },
    "101023": {
      "name": "The Great Zehtuka",
      "type": "secondary",
      "givers": [320],
      "xp": 2500,
      "gold": 200,
      "rewards": ["2 Kournan Coins"],
      "wiki": "https://www.guildwiki.de/wiki/Der_Große_Zehtuka_(Quest)"
    },
    "101024": {
      "name": "The Growing Threat",
      "type": "secondary",
      "givers": [779],
      "xp": 2500,
      "gold": 200,
      "rewards": ["30 Lightbringer points", "1 Ancient Artifact"],
      "requires": [100817],
      "wiki": "https://www.guildwiki.de/wiki/Wachsende_Bedrohung"
    },
    "101025": {
      "name": "The Hallowed Point",
      "type": "secondary",
      "givers": [401],
      "xp": 4000,
      "gold": 400,
      "rewards": ["30 Lightbringer points"],
      "requires": [101013],
      "wiki": "https://www.guildwiki.de/wiki/Die_Geweihte_Stelle"
    },
    "101026": {
      "name": "The Hanging Gardener",
      "type": "secondary",
      "givers": [371],
      "xp": 2000,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "wiki": "https://www.guildwiki.de/wiki/Der_hängende_Gärtner"
    },
    "101027": {
      "name": "The Honorable General",
      "type": "primary",
      "givers": [484],
      "xp": 2000,
      "gold": 250,
      "rewards": ["20 Sunspear Promotion Points"],
      "next": [100995],
      "wiki": "https://www.guildwiki.de/wiki/Ein_General_und_Ehrenmann"
    },
    "101028": {
      "name": "The Iron Truth",
      "type": "primary",
      "givers": [219],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points"],
      "next": [101059],
      "wiki": "https://www.guildwiki.de/wiki/Die_eiserne_Wahrheit"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_mörderischer_Witz"
    },
    "101030": {
      "name": "The Last Patrol",
      "type": "secondary",
      "givers": [183, 184],
      "xp": 2500,
      "gold": 200,
      "requires": [100926],
      "wiki": "https://www.guildwiki.de/wiki/Die_letzte_Patrouille"
    },
    "101031": {
      "name": "The Lone Raider",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
      "rewards": ["15 Sunspear Promotion Points", "1 Battle Commendation"],
      "next": [100854],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Ein-Mann-Armee"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Wahnwitz_der_Prophezeiung"
    },
    "101033": {
      "name": "The Missing Patrol",
      "type": "secondary",
      "givers": [464],
      "xp": 2500,
      "gold": 200,
      "wiki": "https://www.guildwiki.de/wiki/Die_verschollene_Patrouille"
    },
    "101034": {
      "name": "The Oddbodies",
      "type": "secondary",
      "givers": [414, 415],
      "xp": 2500,
      "gold": 200,
      "requires": [101033],
      "next": [100926],
      "wiki": "https://www.guildwiki.de/wiki/Die_Käuze_(Quest)"
    },
    "101035": {
      "name": "The Rifts Between Us",
      "type": "instance",
      "givers": [753],
      "xp": 10000,
      "rewards": ["800 Lightbringer points"],
      "requires": [101056],
      "next": [100860],
      "wiki": "https://www.guildwiki.de/wiki/Tür_zu,_es_zieht!"
    },
    "101036": {
      "name": "The Role of a Lifetime",
      "type": "secondary",
      "givers": [427],
      "xp": 2000,
      "requires": [100837],
      "next": [100954],
      "wiki": "https://www.guildwiki.de/wiki/Die_Rolle_seines_Lebens"
    },
    "101037": {
      "name": "The Scourge of Vabbi",
      "type": "secondary",
      "givers": [400],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "requires": [100786, 100982],
      "wiki": "https://www.guildwiki.de/wiki/Die_Geißel_von_Vaabi"
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
      "wiki": "https://www.guildwiki.de/wiki/Suche_nach_Erleuchtung"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Suche_nach_Überlebenden"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Show_muss_weitergehen!"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_richtige_Moment"
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
      "wiki": "https://www.guildwiki.de/wiki/Zeit_zu_handeln"
    },
    "101043": {
      "name": "The Tools of War",
      "type": "secondary",
      "givers": [233],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Werkzeuge_des_Krieges"
    },
    "101044": {
      "name": "The Toy's Story",
      "type": "secondary",
      "givers": [732],
      "xp": 1000,
      "rewards": ["Miniature Gray Giant"],
      "wiki": "https://www.guildwiki.de/wiki/Spielzeug_ist_nicht_gleich_Spielzeug"
    },
    "101045": {
      "name": "The Troubled Keeper",
      "type": "secondary",
      "givers": [203],
      "xp": 4000,
      "gold": 400,
      "rewards": ["100 Lightbringer points", "Inscribed Secret"],
      "requires": [100840],
      "wiki": "https://www.guildwiki.de/wiki/Hüterin_in_Not"
    },
    "101046": {
      "name": "The Young Lady Vanishes",
      "type": "secondary",
      "givers": [278],
      "xp": 2500,
      "gold": 200,
      "rewards": ["100 Sunspear Promotion Points", "Kournan Coin"],
      "requires": [101018],
      "wiki": "https://www.guildwiki.de/wiki/Das_Verschwinden_der_jungen_Dame"
    },
    "101047": {
      "name": "They Only Come Out at Night",
      "type": "secondary",
      "givers": [419],
      "xp": 2500,
      "gold": 200,
      "rewards": ["75 Lightbringer points"],
      "next": [100927],
      "wiki": "https://www.guildwiki.de/wiki/Die_Nachtaktiven"
    },
    "101048": {
      "name": "Third Born",
      "type": "secondary",
      "givers": [312],
      "xp": 1500,
      "gold": 125,
      "requires": [100989],
      "wiki": "https://www.guildwiki.de/wiki/Der_Drittgeborene"
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
      "wiki": "https://www.guildwiki.de/wiki/Bis_dass_der_Tod_uns_scheidet..."
    },
    "101050": {
      "name": "To Ask For More",
      "type": "secondary",
      "givers": [520],
      "xp": 1500,
      "gold": 125,
      "requires": [101053],
      "wiki": "https://www.guildwiki.de/wiki/Nochmal_mit_Gefühl"
    },
    "101051": {
      "name": "To Dye For",
      "type": "secondary",
      "givers": [754],
      "xp": 500,
      "gold": 100,
      "rewards": ["5 Sunspear Promotion Points"],
      "requires": [100935],
      "wiki": "https://www.guildwiki.de/wiki/Todschicke_Farbe"
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
      "wiki": "https://www.guildwiki.de/wiki/Wie_tötet_man_einen_Dämon?"
    },
    "101053": {
      "name": "To See the Sights",
      "type": "secondary",
      "givers": [520],
      "xp": 500,
      "gold": 50,
      "requires": [100957],
      "next": [101050],
      "wiki": "https://www.guildwiki.de/wiki/Sehenswürdigkeiten_besichtigen"
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
      "wiki": "https://www.guildwiki.de/wiki/Auf_nach_Vaabi!"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Befreiung"
    },
    "101056": {
      "name": "To the Rescue!",
      "type": "instance",
      "givers": [611],
      "xp": 10000,
      "gold": 500,
      "rewards": ["500 Lightbringer points"],
      "wiki": "https://www.guildwiki.de/wiki/Hinter_die_feindlichen_Linien"
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
      "wiki": "https://www.guildwiki.de/wiki/Extrem_starker_Befall"
    },
    "101058": {
      "name": "Trade Relations",
      "type": "secondary",
      "givers": [516],
      "xp": 1500,
      "gold": 125,
      "wiki": "https://www.guildwiki.de/wiki/Handelsbeziehungen"
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
      "wiki": "https://www.guildwiki.de/wiki/Feuertaufe"
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
      "wiki": "https://www.guildwiki.de/wiki/Gequälte_Länder"
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
      "wiki": "https://www.guildwiki.de/wiki/Unkartiertes_Gelände"
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
      "wiki": "https://www.guildwiki.de/wiki/Untote_Verteidiger"
    },
    "101063": {
      "name": "Under New Management",
      "type": "secondary",
      "givers": [763],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "requires": [101002],
      "wiki": "https://www.guildwiki.de/wiki/Unter_neuer_Leitung"
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
      "wiki": "https://www.guildwiki.de/wiki/Das_Risstal"
    },
    "101065": {
      "name": "Vanishing Spirits",
      "type": "secondary",
      "givers": [489],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Ancient Artifact"],
      "next": [100817],
      "wiki": "https://www.guildwiki.de/wiki/Verschwundene_Geister"
    },
    "101066": {
      "name": "Voices in the Night",
      "type": "secondary",
      "givers": [736],
      "xp": 1000,
      "gold": 100,
      "rewards": ["10 Sunspear Promotion Points", "Battle Commendation"],
      "next": [100946],
      "wiki": "https://www.guildwiki.de/wiki/Stimmen_im_Dunkeln"
    },
    "101067": {
      "name": "Wandered Off Again",
      "type": "secondary",
      "givers": [211, 212],
      "xp": 1500,
      "gold": 125,
      "next": [100893],
      "wiki": "https://www.guildwiki.de/wiki/Auf_der_Suche"
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
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Geisteraufklärung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Rekrutenausbildung)"
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
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Wind_und_Wasser)"
    },
    "101071": {
      "name": "Warning Kehanni",
      "type": "primary",
      "givers": [634],
      "xp": 2000,
      "gold": 250,
      "rewards": ["10 Lightbringer points"],
      "next": [100845],
      "wiki": "https://www.guildwiki.de/wiki/Kehanni_muss_gewarnt_werden"
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
      "wiki": "https://www.guildwiki.de/wiki/Erinnerung_des_Reisenden:_Elona"
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
      "wiki": "https://www.guildwiki.de/wiki/Eigensinniger_Fremdenführer"
    },
    "101074": {
      "name": "Weird Waters",
      "type": "secondary",
      "givers": [727],
      "xp": 2500,
      "gold": 200,
      "rewards": ["Kournan Coin"],
      "wiki": "https://www.guildwiki.de/wiki/Sonderbare_Gewässer"
    },
    "101075": {
      "name": "What do you do with a drunken shauben",
      "type": "secondary",
      "givers": [755, 756],
      "xp": 1500,
      "gold": 125,
      "rewards": ["Battle Commendation"],
      "wiki": "https://www.guildwiki.de/wiki/Trunkene_Shauben"
    },
    "101076": {
      "name": "Which Way Did He Go?",
      "type": "secondary",
      "givers": [564],
      "xp": 1500,
      "gold": 250,
      "rewards": ["Trade Contract"],
      "wiki": "https://www.guildwiki.de/wiki/Wo_ist_er_hingegangen?"
    },
    "101077": {
      "name": "White Mist",
      "type": "event",
      "givers": [194],
      "event": 13,
      "xp": 1000,
      "next": [100919],
      "wiki": "https://www.guildwiki.de/wiki/Weißer_Nebel"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_miserabelste_Aufführung,_die_jemals_stattfand."
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
      "wiki": "https://www.guildwiki.de/wiki/Ihr_könnt_weglaufen_..."
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
      "wiki": "https://www.guildwiki.de/wiki/Zaishen-Elite_(Quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_Bastion_im_Norden.",
      "wiki_en": "https://web.archive.org/web/20260628090011/https://wiki.guildwars.com/wiki/A_Bastion_In_the_North"
    },
    "101082": {
      "name": "A Belated Betrothal",
      "type": "secondary",
      "givers": [532],
      "xp": 1000,
      "skills": [41, 160, 275, 332, 454],
      "wiki": "https://www.guildwiki.de/wiki/Eine_verspätete_Verlobung"
    },
    "101083": {
      "name": "A Brother's Fury",
      "type": "primary",
      "givers": [451],
      "xp": 500,
      "missions": [11],
      "wiki": "https://www.guildwiki.de/wiki/Die_Wut_eines_Bruders"
    },
    "101084": {
      "name": "A Cure for Ralena",
      "type": "secondary",
      "givers": [297],
      "profession": 5,
      "xp": 300,
      "skills": [37, 42],
      "requires": [101331],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Heilmittel_für_Ralena"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_Geschenk_für_Althea",
      "wiki_en": "https://web.archive.org/web/20260621164023/https://wiki.guildwars.com/wiki/A_Gift_for_Althea"
    },
    "101086": {
      "name": "A Heart of Ice",
      "type": "secondary",
      "givers": [487],
      "profession": 6,
      "xp": 350,
      "skills": [163, 177, 210],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Herz_aus_Eis"
    },
    "101087": {
      "name": "A Humbling Gift",
      "type": "event",
      "givers": [492],
      "event": 13,
      "rewards": ["Frozen Accessory Token"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_bescheidenes_Geschenk"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_wenig_Hilfe_von_oben"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Bürde_eines_Mesmers",
      "wiki_en": "https://web.archive.org/web/20260630184143/https://wiki.guildwars.com/wiki/A_Mesmer%27s_Burden"
    },
    "101090": {
      "name": "A Mission of Peace",
      "type": "secondary",
      "givers": [262],
      "xp": 250,
      "requires": [101247],
      "wiki": "https://www.guildwiki.de/wiki/Eine_Friedensmission"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Mission_eines_Mönchs",
      "wiki_en": "https://web.archive.org/web/20260628101528/https://wiki.guildwars.com/wiki/A_Monk%27s_Mission"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_neue_Elementarmagier-Trainerin",
      "wiki_en": "https://web.archive.org/web/20260520213123/https://wiki.guildwars.com/wiki/A_New_Elementalist_Trainer"
    },
    "101093": {
      "name": "A New Mesmer Trainer",
      "type": "secondary",
      "givers": [498],
      "xp": 250,
      "objectives": [[0, "Follow the road northwest from town. Talk to Lady Althea at the Actor's Stage."]],
      "requires": [101190],
      "wiki": "https://www.guildwiki.de/wiki/Eine_neue_Mesmer-Trainerin",
      "wiki_en": "https://web.archive.org/web/20260630184230/https://wiki.guildwars.com/wiki/A_New_Mesmer_Trainer"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_neuer_Mönch-Trainer",
      "wiki_en": "https://web.archive.org/web/20260507161543/https://wiki.guildwars.com/wiki/A_New_Monk_Trainer"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_neuer_Nekromanten-Trainer",
      "wiki_en": "https://web.archive.org/web/20260630184130/https://wiki.guildwars.com/wiki/A_New_Necromancer_Trainer"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_neuer_Waldläufer-Trainer",
      "wiki_en": "https://web.archive.org/web/20260520213241/https://wiki.guildwars.com/wiki/A_New_Ranger_Trainer"
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
      "wiki": "https://www.guildwiki.de/wiki/Ein_neuer_Krieger-Trainer",
      "wiki_en": "https://web.archive.org/web/20260630184131/https://wiki.guildwars.com/wiki/A_New_Warrior_Trainer"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_zweite_Klasse",
      "wiki_en": "https://web.archive.org/web/20260711135835/https://wiki.guildwars.com/wiki/A_Second_Profession"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_zweite_Klasse_(Elementarmagier)",
      "wiki_en": "https://web.archive.org/web/20260711135835/https://wiki.guildwars.com/wiki/A_Second_Profession"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_zweite_Klasse_(Krieger)",
      "wiki_en": "https://web.archive.org/web/20260711135835/https://wiki.guildwars.com/wiki/A_Second_Profession"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_zweite_Klasse_(Mesmer)",
      "wiki_en": "https://web.archive.org/web/20260711135835/https://wiki.guildwars.com/wiki/A_Second_Profession"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_zweite_Klasse_(Mönch)",
      "wiki_en": "https://web.archive.org/web/20260711135835/https://wiki.guildwars.com/wiki/A_Second_Profession"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_zweite_Klasse_(Nekromant)",
      "wiki_en": "https://web.archive.org/web/20260711135835/https://wiki.guildwars.com/wiki/A_Second_Profession"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_zweite_Klasse_(Waldläufer)",
      "wiki_en": "https://web.archive.org/web/20260711135835/https://wiki.guildwars.com/wiki/A_Second_Profession"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_Prüfung_in_Treffsicherheit",
      "wiki_en": "https://web.archive.org/web/20260507160818/https://wiki.guildwars.com/wiki/A_Test_of_Marksmanship"
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
      "wiki": "https://www.guildwiki.de/wiki/Eine_klingende_Vergeltung"
    },
    "101107": {
      "name": "A Very Grentchie Wintersday",
      "type": "event",
      "givers": [370],
      "event": 13,
      "xp": 5000,
      "rewards": ["Peppermint Shield", "Gingerbread Focus"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Wintertag_voller_Grentche"
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
      "wiki": "https://www.guildwiki.de/wiki/Jenseits_des_Walls",
      "wiki_en": "https://web.archive.org/web/20260628090130/https://wiki.guildwars.com/wiki/Across_the_Wall"
    },
    "101109": {
      "name": "Adventure with an Ally",
      "type": "secondary",
      "givers": [186],
      "xp": 100,
      "objectives": [[0, "Return to Ascalon City. Form a party with another player."]],
      "wiki": "https://www.guildwiki.de/wiki/Abenteuer_mit_einem_Verbündeten",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/Adventure_with_an_Ally"
    },
    "101110": {
      "name": "Althea's Ashes",
      "type": "secondary",
      "givers": [198],
      "xp": 2000,
      "gold": 300,
      "requires": [101259],
      "next": [101148],
      "wiki": "https://www.guildwiki.de/wiki/Altheas_Asche"
    },
    "101111": {
      "name": "An Ingenious Plan",
      "type": "event",
      "givers": [241],
      "event": 11,
      "xp": 15000,
      "gold": 2500,
      "rewards": ["100 Trick-or-Treat Bags"],
      "wiki": "https://www.guildwiki.de/wiki/Ein_genialer_Plan"
    },
    "101112": {
      "name": "Ancient Secrets",
      "type": "secondary",
      "givers": [197],
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Alte_Geheimnisse"
    },
    "101113": {
      "name": "Army Life",
      "type": "secondary",
      "givers": [648],
      "profession": 1,
      "xp": 250,
      "skills": [337, 351],
      "wiki": "https://www.guildwiki.de/wiki/Leben_in_der_Armee"
    },
    "101114": {"name": "Ascalon Academy", "type": "primary", "campaign": 1},
    "101115": {
      "name": "Asuran Allies",
      "type": "secondary",
      "campaign": 1,
      "region": 0,
      "requires": [101316],
      "wiki": "https://www.guildwiki.de/wiki/Asura-Verbündete"
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
      "wiki": "https://www.guildwiki.de/wiki/Verheißungsvoller_Beginn"
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
      "wiki": "https://www.guildwiki.de/wiki/Banditenüberfall",
      "wiki_en": "https://web.archive.org/web/20260630184241/https://wiki.guildwars.com/wiki/Bandit_Raid"
    },
    "101118": {
      "name": "Bandit Trouble",
      "type": "secondary",
      "givers": [795],
      "xp": 500,
      "requires": [101146],
      "wiki": "https://www.guildwiki.de/wiki/Ärger_mit_Banditen"
    },
    "101119": {
      "name": "Barradin's Advance",
      "type": "secondary",
      "givers": [231],
      "xp": 250,
      "next": [101120],
      "wiki": "https://www.guildwiki.de/wiki/Barradins_Vormarsch"
    },
    "101120": {
      "name": "Barradin's Stand",
      "type": "secondary",
      "givers": [232],
      "xp": 500,
      "requires": [101119],
      "wiki": "https://www.guildwiki.de/wiki/Barradins_Widerstand"
    },
    "101121": {
      "name": "Better You Than Me",
      "type": "event",
      "givers": [650],
      "event": 11,
      "rewards": ["Ghoulish Accessory Token"],
      "wiki": "https://www.guildwiki.de/wiki/Lieber_Ihr_als_ich"
    },
    "101122": {
      "name": "Blankets for the Settlers",
      "type": "secondary",
      "givers": [293],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Decken_für_die_Siedler"
    },
    "101123": {
      "name": "Blood And Smoke",
      "type": "secondary",
      "givers": [237],
      "xp": 2500,
      "skills": [66, 131, 187, 245, 368, 426],
      "requires": [101145],
      "wiki": "https://www.guildwiki.de/wiki/Blut_und_Rauch"
    },
    "101124": {
      "name": "Caravan in Trouble",
      "type": "secondary",
      "givers": [631],
      "xp": 250,
      "skills": [44, 136, 186, 240, 320, 453],
      "wiki": "https://www.guildwiki.de/wiki/Karawane_in_Bedrängnis"
    },
    "101125": {
      "name": "Casualty Report",
      "type": "secondary",
      "givers": [568],
      "xp": 150,
      "skills": [102],
      "next": [101141],
      "wiki": "https://www.guildwiki.de/wiki/Verlustmeldung"
    },
    "101126": {
      "name": "Charr Reinforcements",
      "type": "secondary",
      "givers": [258],
      "profession": 2,
      "xp": 500,
      "skills": [399, 415],
      "wiki": "https://www.guildwiki.de/wiki/Charr-Verstärkung"
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
      "wiki": "https://www.guildwiki.de/wiki/Charr_vor_dem_Tor",
      "wiki_en": "https://web.archive.org/web/20260628085629/https://wiki.guildwars.com/wiki/Charr_at_the_Gate"
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
      "wiki": "https://www.guildwiki.de/wiki/Charr_in_den_Katakomben",
      "wiki_en": "https://web.archive.org/web/20260621162142/https://wiki.guildwars.com/wiki/Charr_in_the_Catacombs"
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
      "wiki": "https://www.guildwiki.de/wiki/Charr_in_den_Tunneln",
      "wiki_en": "https://web.archive.org/web/20260628101515/https://wiki.guildwars.com/wiki/Charr_in_the_Tunnels"
    },
    "101130": {
      "name": "Cities of Ascalon",
      "type": "secondary",
      "givers": [209],
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Ascalons_Städte"
    },
    "101131": {
      "name": "Cold One",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "wiki": "https://www.guildwiki.de/wiki/Kaltes_(Quest)"
    },
    "101132": {
      "name": "Commandeering a Mortal Vessel",
      "type": "event",
      "givers": [241],
      "event": 11,
      "xp": 10000,
      "gold": 1500,
      "rewards": ["100 Trick-or-Treat Bags"],
      "wiki": "https://www.guildwiki.de/wiki/Rekrutierung_einer_sterblichen_Hülle"
    },
    "101133": {
      "name": "Counting the Fallen",
      "type": "secondary",
      "givers": [209],
      "xp": 500,
      "next": [101130],
      "wiki": "https://www.guildwiki.de/wiki/Volkszählung_der_Gefallenen"
    },
    "101134": {
      "name": "Death in the Ruins",
      "type": "secondary",
      "givers": [687],
      "xp": 250,
      "skills": [133, 150],
      "next": [101203],
      "wiki": "https://www.guildwiki.de/wiki/Tod_in_den_Ruinen"
    },
    "101135": {
      "name": "Defend Denravi",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_Denravi"
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
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_Denravi_(Schwerer_Modus)"
    },
    "101137": {
      "name": "Defend Droknar's Forge",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "next": [101276, 101139, 101135],
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_Droknars_Schmiede"
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
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_Droknars_Schmiede_(Schwerer_Modus)"
    },
    "101139": {
      "name": "Defend North Kryta Province",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_die_Provinz_Nordkryta"
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
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_die_Provinz_Nordkryta_(Schwerer_Modus)"
    },
    "101141": {
      "name": "Defend the Wall",
      "type": "primary",
      "givers": [287],
      "xp": 500,
      "requires": [101274],
      "missions": [28],
      "wiki": "https://www.guildwiki.de/wiki/Verteidigt_den_Wall"
    },
    "101142": {
      "name": "Deliver a Message to My Wife",
      "type": "secondary",
      "givers": [247],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Bringt_meiner_Frau_eine_Nachricht."
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
      "wiki": "https://www.guildwiki.de/wiki/Beherrschungsmagie_(Quest)",
      "wiki_en": "https://web.archive.org/web/20261001193807/https://wiki.guildwars.com/wiki/Domination_Magic_(quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Keine_Angst_vor_den_Schnittern"
    },
    "101145": {
      "name": "Dropping Eaves",
      "type": "secondary",
      "givers": [237],
      "xp": 500,
      "skills": [48, 104, 216, 306, 378, 470],
      "next": [101123],
      "wiki": "https://www.guildwiki.de/wiki/Belauschen"
    },
    "101146": {
      "name": "Duties of a Lionguard",
      "type": "secondary",
      "givers": [422],
      "xp": 500,
      "next": [101118],
      "wiki": "https://www.guildwiki.de/wiki/Die_Pflichten_eines_Löwengardisten"
    },
    "101147": {
      "name": "Ebon Vanguard Allies",
      "type": "secondary",
      "campaign": 1,
      "region": 0,
      "requires": [101316],
      "wiki": "https://www.guildwiki.de/wiki/Verbündete_von_der_Ebon-Vorhut"
    },
    "101148": {
      "name": "Elegy for Those Left Behind",
      "type": "secondary",
      "givers": [540, 346],
      "xp": 500,
      "gold": 100,
      "requires": [101110],
      "next": [101256],
      "wiki": "https://www.guildwiki.de/wiki/Elegie_für_die_Zurückgelassenen"
    },
    "101149": {
      "name": "Elemental Knowledge",
      "type": "secondary",
      "givers": [541],
      "xp": 250,
      "skills": [165, 212],
      "next": [101231],
      "wiki": "https://www.guildwiki.de/wiki/Elementares_Wissen"
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
      "wiki": "https://www.guildwiki.de/wiki/Elementarmagier-Prüfung",
      "wiki_en": "https://web.archive.org/web/20260507161657/https://wiki.guildwars.com/wiki/Elementalist_Test"
    },
    "101151": {
      "name": "Endangered Species",
      "type": "secondary",
      "givers": [234],
      "profession": 2,
      "xp": 200,
      "skills": [391, 411, 436, 446],
      "wiki": "https://www.guildwiki.de/wiki/Bedrohte_Tierart"
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
      "wiki": "https://www.guildwiki.de/wiki/Jede_Hilfe_zählt"
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
      "wiki": "https://www.guildwiki.de/wiki/Bewohner_des_Bösen"
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
      "wiki": "https://www.guildwiki.de/wiki/Bewohner_des_Bösen,_Codename:_Mundharmonika"
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
      "wiki": "https://www.guildwiki.de/wiki/Experimentelles_Heilmittel"
    },
    "101156": {
      "name": "Eye For Profit",
      "type": "secondary",
      "givers": [451],
      "xp": 500,
      "skills": [10, 138, 225, 302, 334, 427],
      "wiki": "https://www.guildwiki.de/wiki/Ein_Auge_für_Profit"
    },
    "101157": {
      "name": "Fallen Soldiers",
      "type": "secondary",
      "givers": [568],
      "profession": 4,
      "xp": 250,
      "skills": [96],
      "wiki": "https://www.guildwiki.de/wiki/Gefallene_Soldaten"
    },
    "101158": {
      "name": "Family Ties (Prophecies quest)",
      "type": "secondary",
      "givers": [551],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Familienbande_(Prophecies)"
    },
    "101159": {
      "name": "Fighting in a Winter Wonderland",
      "type": "event",
      "givers": [735],
      "event": 13,
      "repeatable": true,
      "xp": 5000,
      "gold": 7500,
      "wiki": "https://www.guildwiki.de/wiki/Stille_Nacht,_heilige_Schlacht"
    },
    "101160": {
      "name": "Final Blow",
      "type": "primary",
      "givers": [375, 376],
      "xp": 500,
      "gold": 100,
      "missions": [122],
      "wiki": "https://www.guildwiki.de/wiki/Der_letzte_Schlag"
    },
    "101161": {
      "name": "Fire in the Hole",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "wiki": "https://www.guildwiki.de/wiki/Feuer_im_Loch"
    },
    "101162": {
      "name": "Fires in the East",
      "type": "secondary",
      "givers": [231],
      "xp": 500,
      "requires": [101119],
      "wiki": "https://www.guildwiki.de/wiki/Feuer_im_Osten"
    },
    "101163": {
      "name": "Fires in the North",
      "type": "secondary",
      "givers": [198],
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Feuer_im_Norden"
    },
    "101164": {
      "name": "Forgotten Wisdom",
      "type": "attribute",
      "givers": [768],
      "xp": 1500,
      "rewards": ["15 Attribute points"],
      "requires": [101266],
      "next": [101282],
      "wiki": "https://www.guildwiki.de/wiki/Vergessene_Weisheit"
    },
    "101165": {
      "name": "Frontier Gate Fugitives",
      "type": "secondary",
      "givers": [597],
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Grenztor-Flüchtlinge"
    },
    "101166": {
      "name": "Further Adventures",
      "type": "primary",
      "givers": [498],
      "xp": 250,
      "objectives": [[0, "Follow the road southwest from Ashford Abbey. Talk to Devona."]],
      "requires": [101378, 101150, 101190, 101197, 101200, 101213],
      "next": [101335],
      "wiki": "https://www.guildwiki.de/wiki/Weitere_Abenteuer",
      "wiki_en": "https://web.archive.org/web/20260628090023/https://wiki.guildwars.com/wiki/Further_Adventures"
    },
    "101167": {
      "name": "Garfazz Bloodfang",
      "type": "secondary",
      "givers": [444],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Garfazz_Bloodfang"
    },
    "101168": {
      "name": "Gargoyle Trouble",
      "type": "secondary",
      "givers": [617],
      "profession": 1,
      "xp": 200,
      "skills": [1, 321, 382, 384],
      "wiki": "https://www.guildwiki.de/wiki/Ärger_mit_den_Gargoyles"
    },
    "101169": {
      "name": "Gathering Resources",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "wiki": "https://www.guildwiki.de/wiki/Ressourcen_sammeln"
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
      "wiki": "https://www.guildwiki.de/wiki/Einstieg_in_Guild_Wars",
      "wiki_en": "https://web.archive.org/web/20260628090142/https://wiki.guildwars.com/wiki/Getting_Started_in_Guild_Wars"
    },
    "101171": {
      "name": "Ghostly Vengeance",
      "type": "secondary",
      "givers": [573],
      "xp": 1000,
      "skills": [14, 140, 219, 256, 363, 457],
      "wiki": "https://www.guildwiki.de/wiki/Geisterhafte_Rache"
    },
    "101172": {
      "name": "Graven Images",
      "type": "secondary",
      "givers": [537],
      "xp": 600,
      "skills": [9, 116, 183, 283, 342, 402],
      "wiki": "https://www.guildwiki.de/wiki/Eingravierte_Bilder"
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
      "wiki": "https://www.guildwiki.de/wiki/Grawl-Invasion",
      "wiki_en": "https://web.archive.org/web/20260908151433/https://wiki.guildwars.com/wiki/Grawl_Invasion"
    },
    "101174": {
      "name": "Gwen's Flute",
      "type": "secondary",
      "givers": [600],
      "xp": 250,
      "objectives": [[0, "Find Gwen's Flute"]],
      "wiki": "https://www.guildwiki.de/wiki/Gwens_Flöte_(Quest)",
      "wiki_en": "https://web.archive.org/web/20260908151427/https://wiki.guildwars.com/wiki/Gwen%27s_Flute_(quest)"
    },
    "101175": {
      "name": "Hammer and Anvil",
      "type": "secondary",
      "givers": [198],
      "xp": 500,
      "requires": [101301],
      "wiki": "https://www.guildwiki.de/wiki/Hammer_und_Amboss"
    },
    "101176": {
      "name": "Heirlooms of the Mad King",
      "type": "event",
      "givers": [241],
      "event": 11,
      "xp": 5000,
      "gold": 1000,
      "rewards": ["50 Trick-or-Treat Bags"],
      "wiki": "https://www.guildwiki.de/wiki/Erbstücke_des_verrückten_Königs"
    },
    "101177": {
      "name": "Helping the Dwarves",
      "type": "secondary",
      "givers": [609],
      "xp": 250,
      "skills": [8, 108, 162, 301, 326, 406],
      "next": [101195],
      "wiki": "https://www.guildwiki.de/wiki/Hilfe_für_die_Zwerge"
    },
    "101178": {
      "name": "Helping the People of Ascalon",
      "type": "secondary",
      "givers": [262],
      "xp": 200,
      "skills": [80, 155, 290, 343, 398],
      "requires": [101274],
      "wiki": "https://www.guildwiki.de/wiki/Hilfe_für_das_Volk_von_Ascalon"
    },
    "101179": {
      "name": "Hungry Devourer",
      "type": "secondary",
      "givers": [391],
      "xp": 400,
      "skills": [69, 106, 222, 310, 344, 392],
      "next": [101257],
      "wiki": "https://www.guildwiki.de/wiki/Hungriger_Verschlinger"
    },
    "101180": {
      "name": "In Grenth's Defense",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "wiki": "https://www.guildwiki.de/wiki/Zu_Grenths_Verteidigung"
    },
    "101181": {
      "name": "In Memory of Paulus",
      "type": "secondary",
      "givers": [208],
      "xp": 300,
      "skills": [291, 305],
      "requires": [101211],
      "wiki": "https://www.guildwiki.de/wiki/Zum_Angedenken_an_Paulus"
    },
    "101182": {
      "name": "Into the Breach",
      "type": "secondary",
      "givers": [617],
      "profession": 1,
      "xp": 300,
      "skills": [339, 347],
      "requires": [101194],
      "wiki": "https://www.guildwiki.de/wiki/In_der_Bresche"
    },
    "101183": {
      "name": "Into the Unknown",
      "type": "secondary",
      "givers": [216],
      "xp": 1000,
      "skills": [36, 144, 233, 271, 366, 463],
      "wiki": "https://www.guildwiki.de/wiki/Auf_ins_Unbekannte"
    },
    "101184": {
      "name": "Iron Horse War Machine",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "requires": [101196],
      "wiki": "https://www.guildwiki.de/wiki/Die_Eisenross-Kriegsmaschine"
    },
    "101185": {
      "name": "Kilroy Stonekin",
      "type": "instance",
      "givers": [636],
      "repeatable": true,
      "xp": 3000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Kilroy_Steinsipp_(Quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_große_Umhang_des_kleinen_Thom",
      "wiki_en": "https://web.archive.org/web/20260628090142/https://wiki.guildwars.com/wiki/Little_Thom%27s_Big_Cloak"
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
      "wiki": "https://www.guildwiki.de/wiki/Längst_vergessen_geglaubt",
      "wiki_en": "https://web.archive.org/web/20260628091714/https://wiki.guildwars.com/wiki/Long_Thought_Forgotten"
    },
    "101188": {
      "name": "Malaquire's Test",
      "type": "secondary",
      "givers": [652],
      "xp": 500,
      "requires": [101206],
      "wiki": "https://www.guildwiki.de/wiki/Malaquires_Prüfung"
    },
    "101189": {
      "name": "Merchant's Plea",
      "type": "secondary",
      "givers": [266],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Das_Flehen_des_Kaufmanns"
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
      "wiki": "https://www.guildwiki.de/wiki/Mesmer-Prüfung",
      "wiki_en": "https://web.archive.org/web/20260711135836/https://wiki.guildwars.com/wiki/Mesmer_Test"
    },
    "101191": {
      "name": "Mesmerizing the Enemy",
      "type": "secondary",
      "givers": [297],
      "profession": 5,
      "xp": 200,
      "skills": [24, 31, 40, 76],
      "requires": [101155],
      "wiki": "https://www.guildwiki.de/wiki/Den_Feind_erstarren_lassen"
    },
    "101192": {
      "name": "Message from a Friend",
      "type": "secondary",
      "givers": [539],
      "xp": 100,
      "gold": 10,
      "objectives": [[0, "Go to the town square in Ascalon City. Talk to Sir Tydus."]],
      "wiki": "https://www.guildwiki.de/wiki/Nachricht_von_einem_Freund",
      "wiki_en": "https://web.archive.org/web/20260908151433/https://wiki.guildwars.com/wiki/Message_from_a_Friend"
    },
    "101193": {
      "name": "Mhenlo's Request",
      "type": "secondary",
      "givers": [113],
      "travel": 2,
      "xp": 1000,
      "next": [100780],
      "wiki": "https://www.guildwiki.de/wiki/Mhenlos_Bitte"
    },
    "101194": {
      "name": "Military Matters",
      "type": "secondary",
      "givers": [617],
      "profession": 1,
      "xp": 250,
      "skills": [322, 349],
      "next": [101182],
      "wiki": "https://www.guildwiki.de/wiki/Militärische_Angelegenheiten"
    },
    "101195": {
      "name": "Minaar's Trouble",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "next": [101196],
      "wiki": "https://www.guildwiki.de/wiki/Minaars_Leiden"
    },
    "101196": {
      "name": "Minaar's Worry",
      "type": "secondary",
      "givers": [392],
      "xp": 500,
      "requires": [101195],
      "next": [101184],
      "wiki": "https://www.guildwiki.de/wiki/Minaars_Sorge"
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
      "wiki": "https://www.guildwiki.de/wiki/Mönch-Prüfung",
      "wiki_en": "https://web.archive.org/web/20260623033557/https://wiki.guildwars.com/wiki/Monk_Test"
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
      "wiki": "https://www.guildwiki.de/wiki/Sammeln_zur_Gegenwehr"
    },
    "101199": {
      "name": "Mysterious Message",
      "type": "secondary",
      "givers": [710],
      "xp": 500,
      "skills": [45, 93, 172, 274, 328, 455],
      "next": [101291],
      "wiki": "https://www.guildwiki.de/wiki/Rätselhafte_Nachricht_(Prophecies)"
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
      "wiki": "https://www.guildwiki.de/wiki/Nekromanten-Prüfung",
      "wiki_en": "https://web.archive.org/web/20260128012821/https://wiki.guildwars.com/wiki/Necromancer_Test"
    },
    "101201": {
      "name": "Noble Intentions",
      "type": "instance",
      "givers": [680, 681],
      "xp": 4000,
      "gold": 500,
      "next": [101202],
      "wiki": "https://www.guildwiki.de/wiki/Noble_Absichten"
    },
    "101202": {
      "name": "Noble Intentions Plan B",
      "type": "instance",
      "givers": [681],
      "xp": 4000,
      "gold": 500,
      "requires": [101201],
      "wiki": "https://www.guildwiki.de/wiki/Noble_Absichten_Plan_B"
    },
    "101203": {
      "name": "Oberan's Rage",
      "type": "secondary",
      "givers": [687],
      "xp": 350,
      "skills": [95, 99],
      "requires": [101134],
      "wiki": "https://www.guildwiki.de/wiki/Oberans_Wut"
    },
    "101204": {
      "name": "Operation: Crush Spirits",
      "type": "event",
      "givers": [689],
      "event": 13,
      "repeatable": true,
      "xp": 5000,
      "gold": 7500,
      "wiki": "https://www.guildwiki.de/wiki/Operation:_Willen_brechen"
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
      "wiki": "https://www.guildwiki.de/wiki/Widerstand_gegen_den_König",
      "wiki_en": "https://web.archive.org/web/20260908151433/https://wiki.guildwars.com/wiki/Opposition_to_the_King"
    },
    "101206": {
      "name": "Orrian Excavation",
      "type": "secondary",
      "givers": [652],
      "xp": 400,
      "next": [101188],
      "wiki": "https://www.guildwiki.de/wiki/Orrianische_Ausgrabung"
    },
    "101207": {
      "name": "Oswalt's Epitaph",
      "type": "secondary",
      "givers": [690],
      "xp": 500,
      "gold": 250,
      "requires": [101232],
      "wiki": "https://www.guildwiki.de/wiki/Oswalts_Grabinschrift"
    },
    "101208": {
      "name": "Passage Through The Dark River",
      "type": "primary",
      "givers": [476],
      "xp": 500,
      "next_missions": [73],
      "missions": [73],
      "wiki": "https://www.guildwiki.de/wiki/Durchfahrt_durch_den_Düsteren_Fluss"
    },
    "101209": {
      "name": "Political Ramifications",
      "type": "instance",
      "givers": [695],
      "xp": 6000,
      "wiki": "https://www.guildwiki.de/wiki/Politische_Konsequenzen"
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
      "wiki": "https://www.guildwiki.de/wiki/Armer_Mieter",
      "wiki_en": "https://web.archive.org/web/20260630184241/https://wiki.guildwars.com/wiki/Poor_Tenant"
    },
    "101211": {
      "name": "Protecting Ascalon",
      "type": "secondary",
      "givers": [208],
      "xp": 300,
      "skills": [280, 289],
      "next": [101181],
      "wiki": "https://www.guildwiki.de/wiki/Ascalon_schützen"
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
      "wiki": "https://www.guildwiki.de/wiki/Schutzgebete_(Quest)",
      "wiki_en": "https://web.archive.org/web/20260722115836/https://wiki.guildwars.com/wiki/Protection_Prayers_(quest)"
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
      "wiki": "https://www.guildwiki.de/wiki/Waldläufer-Prüfung",
      "wiki_en": "https://web.archive.org/web/20260507162011/https://wiki.guildwars.com/wiki/Ranger_Test"
    },
    "101214": {
      "name": "Rastin's Ritual",
      "type": "secondary",
      "givers": [702],
      "xp": 500,
      "gold": 50,
      "wiki": "https://www.guildwiki.de/wiki/Rastins_Ritual"
    },
    "101215": {
      "name": "Recruits for Hollis",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "next": [101120],
      "wiki": "https://www.guildwiki.de/wiki/Rekruten_für_Hollis"
    },
    "101216": {
      "name": "Regent Valley Defense",
      "type": "secondary",
      "givers": [448],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Die_Verteidigung_des_Regententals"
    },
    "101217": {
      "name": "Renegade Necromancer",
      "type": "secondary",
      "givers": [189],
      "profession": 4,
      "xp": 350,
      "skills": [92, 97, 129],
      "wiki": "https://www.guildwiki.de/wiki/Abtrünniger_Nekromant"
    },
    "101218": {
      "name": "Replacement Healers",
      "type": "secondary",
      "givers": [547],
      "xp": 500,
      "skills": [243, 292],
      "wiki": "https://www.guildwiki.de/wiki/Ersatzheiler"
    },
    "101219": {
      "name": "Report to the White Mantle",
      "type": "primary",
      "givers": [549],
      "xp": 500,
      "missions": [15],
      "wiki": "https://www.guildwiki.de/wiki/Erstattet_dem_Weißen_Mantel_Bericht"
    },
    "101220": {
      "name": "Reversing the Skales",
      "type": "secondary",
      "givers": [293],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Skal-Umkehrung"
    },
    "101221": {
      "name": "Rise",
      "type": "primary",
      "campaign": 1,
      "region": 0,
      "repeatable": true,
      "requires": [101280],
      "next": [100000],
      "wiki": "https://www.guildwiki.de/wiki/Aufstand"
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
      "wiki": "https://www.guildwiki.de/wiki/Gedenkriten",
      "wiki_en": "https://web.archive.org/web/20260630184143/https://wiki.guildwars.com/wiki/Rites_of_Remembrance"
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
      "wiki": "https://www.guildwiki.de/wiki/Anschlag_am_Flussufer"
    },
    "101224": {
      "name": "Ruins of Surmia",
      "type": "secondary",
      "givers": [597],
      "xp": 500,
      "requires_missions": [29],
      "next": [101224],
      "missions": [30],
      "wiki": "https://www.guildwiki.de/wiki/Ruinen_von_Surmia_(Quest)"
    },
    "101225": {
      "name": "Sands Of Souls",
      "type": "secondary",
      "givers": [713],
      "xp": 500,
      "missions": [117, 116, 118],
      "wiki": "https://www.guildwiki.de/wiki/Sandwüste_der_Seelen"
    },
    "101226": {
      "name": "Scavengers in Old Ascalon",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "requires": [101141],
      "requires_missions": [28],
      "wiki": "https://www.guildwiki.de/wiki/Plünderer_in_Alt-Ascalon"
    },
    "101227": {
      "name": "Scorched Earth (Prophecies quest)",
      "type": "secondary",
      "givers": [541],
      "xp": 200,
      "skills": [175],
      "wiki": "https://www.guildwiki.de/wiki/Verkohlte_Erde"
    },
    "101228": {
      "name": "Securing the Vale",
      "type": "secondary",
      "givers": [365],
      "profession": 1,
      "xp": 500,
      "skills": [341, 356, 386],
      "wiki": "https://www.guildwiki.de/wiki/Die_Sicherung_des_Tals"
    },
    "101229": {
      "name": "Seeking the Seer",
      "type": "secondary",
      "givers": [437],
      "xp": 500,
      "missions": [22],
      "wiki": "https://www.guildwiki.de/wiki/Die_Suche_nach_der_Seherin"
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
      "wiki": "https://www.guildwiki.de/wiki/Schatten_im_Dschungel"
    },
    "101231": {
      "name": "Shalev's Task",
      "type": "secondary",
      "givers": [723],
      "xp": 300,
      "skills": [167, 213],
      "requires": [101149],
      "wiki": "https://www.guildwiki.de/wiki/Shalevs_Aufgabe"
    },
    "101232": {
      "name": "Shiverpeak Stragglers",
      "type": "secondary",
      "givers": [177],
      "xp": 500,
      "gold": 150,
      "wiki": "https://www.guildwiki.de/wiki/Zittergipfel-Nachzügler"
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
      "wiki": "https://www.guildwiki.de/wiki/Etwas_Böses_kommt_des_Weges"
    },
    "101234": {
      "name": "Sowing Seeds",
      "type": "secondary",
      "givers": [208],
      "xp": 200,
      "skills": [281, 287, 296],
      "wiki": "https://www.guildwiki.de/wiki/Das_Säen_der_Saat"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Armee_der_knochigen_Diener"
    },
    "101236": {
      "name": "Stone Summit Beastmasters",
      "type": "secondary",
      "givers": [734],
      "profession": 2,
      "xp": 350,
      "wiki": "https://www.guildwiki.de/wiki/Steingipfel-Tierbändiger_(Quest)"
    },
    "101237": {
      "name": "Straight to the Heart",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "wiki": "https://www.guildwiki.de/wiki/Mitten_ins_Herz"
    },
    "101238": {
      "name": "Subversive Ideas",
      "type": "instance",
      "givers": [554],
      "xp": 6000,
      "wiki": "https://www.guildwiki.de/wiki/Feindliche_Ideen"
    },
    "101239": {
      "name": "Summit Slaves",
      "type": "instance",
      "givers": [585],
      "repeatable": true,
      "xp": 2000,
      "gold": 300,
      "wiki": "https://www.guildwiki.de/wiki/Gipfel-Sklaven"
    },
    "101240": {
      "name": "Sunspears in Kryta",
      "type": "secondary",
      "givers": [729],
      "travel": 3,
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Sonnenspeere_in_Kryta"
    },
    "101241": {
      "name": "Supplies for the Duke",
      "type": "secondary",
      "givers": [232],
      "xp": 300,
      "skills": [11, 159, 211, 278, 348, 403],
      "requires": [101247],
      "wiki": "https://www.guildwiki.de/wiki/Nachschub_für_den_Herzog"
    },
    "101242": {
      "name": "Surviving After the Searing",
      "type": "primary",
      "givers": [287],
      "xp": 1000,
      "gold": 500,
      "rewards": ["4 Skill points", "Belt Pouch", "Superior Identification Kit", "Superior Salvage Kit"],
      "wiki": "https://www.guildwiki.de/wiki/Überleben_nach_dem_Großen_Feuer"
    },
    "101243": {
      "name": "Symon's History of Ascalon",
      "type": "secondary",
      "givers": [702],
      "xp": 2000,
      "requires": [101130],
      "wiki": "https://www.guildwiki.de/wiki/Symons_Geschichte_von_Ascalon"
    },
    "101244": {
      "name": "Tasca's Reprise",
      "type": "instance",
      "givers": [746],
      "xp": 6000,
      "wiki": "https://www.guildwiki.de/wiki/Tascas_Last"
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
      "wiki": "https://www.guildwiki.de/wiki/Tempel_der_Unerträglichen"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_verfluchte_Pfad",
      "wiki_en": "https://web.archive.org/web/20260828152653/https://wiki.guildwars.com/wiki/The_Accursed_Path"
    },
    "101247": {
      "name": "The Ambassador's Quandary",
      "type": "secondary",
      "givers": [262],
      "xp": 500,
      "requires": [101274],
      "next": [101090],
      "wiki": "https://www.guildwiki.de/wiki/Das_Dilemma_des_Botschafters"
    },
    "101248": {
      "name": "The Arrowhead",
      "type": "secondary",
      "givers": [421],
      "xp": 1000,
      "gold": 500,
      "next": [101116],
      "wiki": "https://www.guildwiki.de/wiki/Die_Pfeilspitze"
    },
    "101249": {
      "name": "The Ascalon Settlement",
      "type": "secondary",
      "givers": [431],
      "xp": 500,
      "skills": [50, 117, 229, 286, 385, 424],
      "wiki": "https://www.guildwiki.de/wiki/Die_Siedlung_Ascalon_(Quest)"
    },
    "101250": {
      "name": "The Battle for Lion's Arch",
      "type": "secondary",
      "givers": [205],
      "xp": 30000,
      "gold": 5000,
      "rewards": ["5 Royal Gifts", "3 Medals of Honor"],
      "requires": [101198],
      "wiki": "https://www.guildwiki.de/wiki/Die_Schlacht_um_Löwenstein"
    },
    "101251": {
      "name": "The Bear Hunters",
      "type": "instance",
      "givers": [388],
      "repeatable": true,
      "rewards": ["Hunter's Ale"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Bärenjäger",
      "wiki_en": "https://web.archive.org/web/20260704201740/https://wiki.guildwars.com/wiki/The_bear_hunters"
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
      "wiki": "https://www.guildwiki.de/wiki/Balthasars_Segnungen",
      "wiki_en": "https://web.archive.org/web/20260507153816/https://wiki.guildwars.com/wiki/The_Blessings_of_Balthazar"
    },
    "101253": {
      "name": "The Broken Sword",
      "type": "secondary",
      "givers": [283],
      "xp": 1000,
      "gold": 500,
      "requires": [101106],
      "next": [101230],
      "wiki": "https://www.guildwiki.de/wiki/Das_gebrochene_Schwert"
    },
    "101254": {
      "name": "The Charr Patrol",
      "type": "secondary",
      "givers": [234],
      "profession": 2,
      "xp": 250,
      "skills": [439, 472],
      "next": [101255],
      "wiki": "https://www.guildwiki.de/wiki/Die_Charr-Patrouille"
    },
    "101255": {
      "name": "The Charr Staging Area",
      "type": "secondary",
      "givers": [234],
      "profession": 2,
      "xp": 300,
      "skills": [425, 475],
      "requires": [101254],
      "wiki": "https://www.guildwiki.de/wiki/Der_Sammelpunkt_der_Charr"
    },
    "101256": {
      "name": "The Cost of Survival",
      "type": "secondary",
      "givers": [335],
      "xp": 500,
      "gold": 100,
      "requires": [101148],
      "next": [101258],
      "wiki": "https://www.guildwiki.de/wiki/Der_Preis_des_Überlebens"
    },
    "101257": {
      "name": "The Deserters",
      "type": "secondary",
      "givers": [391],
      "xp": 500,
      "skills": [22, 143, 214, 242, 380, 456],
      "requires": [101179],
      "wiki": "https://www.guildwiki.de/wiki/Die_Deserteure"
    },
    "101258": {
      "name": "The Dreamer and the Zealot",
      "type": "secondary",
      "givers": [346],
      "xp": 500,
      "gold": 100,
      "requires": [101256],
      "wiki": "https://www.guildwiki.de/wiki/Der_Träumer_und_der_Eiferer"
    },
    "101259": {
      "name": "The Duke's Daughter",
      "type": "secondary",
      "givers": [444],
      "xp": 2000,
      "gold": 300,
      "next": [101110],
      "wiki": "https://www.guildwiki.de/wiki/Die_Tochter_des_Herzogs"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Eiersucher",
      "wiki_en": "https://web.archive.org/web/20260908151433/https://wiki.guildwars.com/wiki/The_Egg_Hunter"
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
      "wiki": "https://www.guildwiki.de/wiki/Das_Elementarmagier-Experiment",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/The_Elementalist_Experiment"
    },
    "101262": {
      "name": "The Elementalist's Path",
      "type": "secondary",
      "givers": [350],
      "xp": 1000,
      "requires": [101271],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_des_Elementarmagiers"
    },
    "101263": {
      "name": "The False Gods",
      "type": "secondary",
      "givers": [457],
      "xp": 750,
      "skills": [49, 130, 234, 297, 316, 434],
      "wiki": "https://www.guildwiki.de/wiki/Die_falschen_Götter"
    },
    "101264": {
      "name": "The Final Assault",
      "type": "secondary",
      "givers": [374],
      "repeatable": true,
      "xp": 10000,
      "gold": 750,
      "requires": [101328],
      "wiki": "https://www.guildwiki.de/wiki/Der_letzte_Angriff"
    },
    "101265": {
      "name": "The Forge Heart",
      "type": "instance",
      "givers": [268],
      "repeatable": true,
      "xp": 8000,
      "gold": 500,
      "requires": [101328],
      "wiki": "https://www.guildwiki.de/wiki/Das_Herz_der_Schmiede"
    },
    "101266": {
      "name": "The Forgotten Ones",
      "type": "secondary",
      "givers": [446],
      "skills": [72, 84, 179, 315, 345, 400],
      "next": [101164],
      "wiki": "https://www.guildwiki.de/wiki/Die_Vergessenen"
    },
    "101267": {
      "name": "The Geomancer's Test",
      "type": "secondary",
      "givers": [351],
      "profession": 6,
      "xp": 500,
      "skills": [168, 169],
      "requires": [101319],
      "wiki": "https://www.guildwiki.de/wiki/Die_Prüfung_des_Geomanten"
    },
    "101268": {
      "name": "The Greatest Snowman Ever Made",
      "type": "event",
      "givers": [370],
      "event": 13,
      "xp": 5000,
      "rewards": ["Gingerbread Shield", "Gingerbread Focus"],
      "wiki": "https://www.guildwiki.de/wiki/Der_größte_Schneemann,_der_jemals_gebaut_wurde"
    },
    "101269": {
      "name": "The Hero From Ascalon",
      "type": "secondary",
      "givers": [402],
      "xp": 100,
      "wiki": "https://www.guildwiki.de/wiki/Die_Heldin_von_Ascalon"
    },
    "101270": {
      "name": "The Hero's Challenge",
      "type": "attribute",
      "givers": [404],
      "xp": 5000,
      "rewards": ["15 Attribute points"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Herausforderung_des_Helden"
    },
    "101271": {
      "name": "The Hero's Journey",
      "type": "secondary",
      "givers": [404],
      "xp": 500,
      "next": [101270],
      "wiki": "https://www.guildwiki.de/wiki/Die_Reise_eines_Helden"
    },
    "101272": {
      "name": "The Hot Springs Murders",
      "type": "secondary",
      "givers": [440],
      "xp": 500,
      "skills": [32, 120, 173, 277, 357, 437],
      "wiki": "https://www.guildwiki.de/wiki/Die_Thermalquellen-Morde"
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
      "wiki": "https://www.guildwiki.de/wiki/Das_Horn_des_Jägers",
      "wiki_en": "https://web.archive.org/web/20260109123054/https://wiki.guildwars.com/wiki/The_Hunter%27s_Horn"
    },
    "101274": {
      "name": "The King's Message",
      "type": "secondary",
      "givers": [287],
      "xp": 100,
      "gold": 50,
      "next": [101178, 101247, 101141],
      "wiki": "https://www.guildwiki.de/wiki/Die_Nachricht_des_Königs"
    },
    "101275": {
      "name": "The Krytan Ambassador",
      "type": "secondary",
      "givers": [373],
      "xp": 500,
      "next": [101274],
      "wiki": "https://www.guildwiki.de/wiki/Der_krytanische_Botschafter"
    },
    "101276": {
      "name": "The Last Day Dawns",
      "type": "secondary",
      "givers": [347],
      "xp": 20000,
      "requires": [101137],
      "next": [101307],
      "wiki": "https://www.guildwiki.de/wiki/Der_letzte_Tag_bricht_an"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_letzte_Tag_bricht_an_(Schwerer_Modus)"
    },
    "101278": {
      "name": "The Last Hog",
      "type": "secondary",
      "givers": [285],
      "xp": 500,
      "skills": [61, 157, 162, 244, 360, 447],
      "wiki": "https://www.guildwiki.de/wiki/Das_letzte_Schwein"
    },
    "101279": {
      "name": "The Lost Princess",
      "type": "secondary",
      "givers": [462],
      "xp": 500,
      "skills": [29, 103, 170, 272, 371, 464],
      "wiki": "https://www.guildwiki.de/wiki/Die_verschollene_Prinzessin"
    },
    "101280": {
      "name": "The Mantle's Guise",
      "type": "secondary",
      "givers": [445],
      "xp": 1000,
      "gold": 500,
      "requires": [101230],
      "next": [101221],
      "wiki": "https://www.guildwiki.de/wiki/Die_Täuschung_des_Mantels"
    },
    "101281": {
      "name": "The Mesmer's Path",
      "type": "secondary",
      "givers": [353],
      "xp": 1000,
      "requires_missions": [38],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_des_Mesmers"
    },
    "101282": {
      "name": "The Misplaced Sword",
      "type": "secondary",
      "givers": [290],
      "xp": 1000,
      "skills": [46, 94, 188, 313, 367, 459],
      "requires": [101164],
      "wiki": "https://www.guildwiki.de/wiki/Das_verlegte_Schwert"
    },
    "101283": {
      "name": "The Missing Artisan",
      "type": "secondary",
      "givers": [381],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Der_verschollene_Kunsthandwerker"
    },
    "101284": {
      "name": "The Monk's Path",
      "type": "secondary",
      "givers": [354],
      "xp": 1000,
      "requires": [101271],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_des_Mönchs"
    },
    "101285": {
      "name": "The Necromancer's Path",
      "type": "secondary",
      "givers": [355],
      "xp": 1000,
      "requires": [101271],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_des_Nekromanten"
    },
    "101286": {
      "name": "The Orchard",
      "type": "secondary",
      "givers": [332],
      "xp": 250,
      "objectives": [[0, "Find the Basket of Apples. Take it to Mary Malone."]],
      "wiki": "https://www.guildwiki.de/wiki/Der_Obstgarten",
      "wiki_en": "https://web.archive.org/web/20260908151433/https://wiki.guildwars.com/wiki/The_Orchard"
    },
    "101287": {
      "name": "The Path to Glory",
      "type": "primary",
      "givers": [358],
      "xp": 100,
      "objectives": [[0, "Go to Ascalon City to speak to Sir Tydus."]],
      "requires": [101098],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Ruhm",
      "wiki_en": "https://web.archive.org/web/20260625213006/https://wiki.guildwars.com/wiki/The_Path_to_Glory"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Gift-Verschlinger",
      "wiki_en": "https://web.archive.org/web/20260722115836/https://wiki.guildwars.com/wiki/The_Poison_Devourer"
    },
    "101289": {
      "name": "The Polar Depressed",
      "type": "event",
      "givers": [458],
      "event": 13,
      "rewards": ["Frozen Accessory Token"],
      "wiki": "https://www.guildwiki.de/wiki/Die_in_den_Schneeböen_Trübsal_blasen"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Macht_des_Blutes",
      "wiki_en": "https://web.archive.org/web/20260908151433/https://wiki.guildwars.com/wiki/The_Power_of_Blood"
    },
    "101291": {
      "name": "The Price of Steel",
      "type": "secondary",
      "givers": [334],
      "xp": 500,
      "skills": [81, 141, 207, 300, 352, 458],
      "wiki": "https://www.guildwiki.de/wiki/Der_Preis_des_Stahls"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_preisgekrönte_Moa",
      "wiki_en": "https://web.archive.org/web/20260630184143/https://wiki.guildwars.com/wiki/The_Prize_Moa_Bird"
    },
    "101293": {
      "name": "The Prize Winning Hogs",
      "type": "secondary",
      "givers": [288],
      "repeatable": true,
      "gold": 25,
      "objectives": [[0, "Drive the Prize-Winning Hogs back into their pen."]],
      "wiki": "https://www.guildwiki.de/wiki/Das_preisgekrönte_Schwein",
      "wiki_en": "https://web.archive.org/web/20260116200107/https://wiki.guildwars.com/wiki/The_Prize_Winning_Hogs"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Gefährte_des_Waldläufers",
      "wiki_en": "https://web.archive.org/web/20260628090142/https://wiki.guildwars.com/wiki/The_Ranger%27s_Companion"
    },
    "101295": {
      "name": "The Ranger's Path",
      "type": "secondary",
      "givers": [356],
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_des_Waldläufers"
    },
    "101296": {
      "name": "The Red-Cloaked Deserter",
      "type": "secondary",
      "givers": [310],
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Der_Deserteur_im_roten_Umhang"
    },
    "101297": {
      "name": "The Road to Borlis Pass",
      "type": "secondary",
      "givers": [177],
      "xp": 500,
      "requires_missions": [32],
      "next": [101318],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_zum_Borlispass"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_Ersatz_des_Ausreißers",
      "wiki_en": "https://web.archive.org/web/20260422155315/https://wiki.guildwars.com/wiki/The_Rogue%27s_Replacement"
    },
    "101299": {
      "name": "The Royal Papers",
      "type": "secondary",
      "givers": [462],
      "xp": 750,
      "skills": [6, 85, 184, 251, 390, 408],
      "wiki": "https://www.guildwiki.de/wiki/Die_königlichen_Papiere"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Geißel_in_der_Tiefe",
      "wiki_en": "https://web.archive.org/web/20260628103926/https://wiki.guildwars.com/wiki/The_Scourge_Beneath"
    },
    "101301": {
      "name": "The Siege of Piken Square",
      "type": "secondary",
      "givers": [198],
      "xp": 500,
      "next": [101175],
      "wiki": "https://www.guildwiki.de/wiki/Die_Belagerung_des_Pikenplatzes"
    },
    "101302": {
      "name": "The Stolen Artifact",
      "type": "secondary",
      "givers": [284],
      "profession": 4,
      "xp": 200,
      "skills": [83, 105, 109, 123],
      "wiki": "https://www.guildwiki.de/wiki/Das_gestohlene_Artefakt"
    },
    "101303": {
      "name": "The Stone Summit Champion",
      "type": "secondary",
      "givers": [345],
      "profession": 5,
      "xp": 350,
      "skills": [19, 23, 38],
      "wiki": "https://www.guildwiki.de/wiki/Der_Steingipfel-Champion"
    },
    "101304": {
      "name": "The Strength of Snow",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "wiki": "https://www.guildwiki.de/wiki/Die_Stärke_des_Schnees"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Überlegenheit_der_Luft",
      "wiki_en": "https://web.archive.org/web/20260621193534/https://wiki.guildwars.com/wiki/The_Supremacy_of_Air"
    },
    "101306": {
      "name": "The Tarnished Emblem",
      "type": "secondary",
      "givers": [291],
      "xp": 1000,
      "gold": 500,
      "requires": [101116],
      "next": [101106],
      "wiki": "https://www.guildwiki.de/wiki/Das_verrostete_Abzeichen"
    },
    "101307": {
      "name": "The Titan Source",
      "type": "secondary",
      "givers": [347],
      "xp": 50000,
      "requires": [101276, 101139, 101135],
      "next": [101138],
      "wiki": "https://www.guildwiki.de/wiki/Der_Ursprung_der_Titanen"
    },
    "101308": {
      "name": "The Titan Source (Hard mode)",
      "type": "secondary",
      "givers": [347],
      "xp": 75000,
      "gold": 10000,
      "rewards": ["1 Gold Zaishen Coin"],
      "requires": [101277, 101140, 101136],
      "wiki": "https://www.guildwiki.de/wiki/Der_Ursprung_der_Titanen_(Schwerer_Modus)"
    },
    "101309": {
      "name": "The Troublesome Artifact",
      "type": "secondary",
      "givers": [287],
      "xp": 500,
      "gold": 100,
      "wiki": "https://www.guildwiki.de/wiki/Das_lästige_Artefakt"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_wahre_König",
      "wiki_en": "https://web.archive.org/web/20260628101528/https://wiki.guildwars.com/wiki/The_True_King"
    },
    "101311": {
      "name": "The Undead Hordes",
      "type": "secondary",
      "givers": [406],
      "xp": 500,
      "skills": [21, 154, 208, 309, 327, 468],
      "wiki": "https://www.guildwiki.de/wiki/Die_Horden_der_Untoten"
    },
    "101312": {
      "name": "The Villainy of Galrath",
      "type": "secondary",
      "givers": [113],
      "xp": 4000,
      "next": [101313],
      "wiki": "https://www.guildwiki.de/wiki/Galraths_Abscheulichkeit"
    },
    "101313": {
      "name": "The Villainy of Galrath (Hard mode)",
      "type": "secondary",
      "givers": [566],
      "xp": 30000,
      "gold": 5000,
      "requires": [101312],
      "wiki": "https://www.guildwiki.de/wiki/Galraths_Abscheulichkeit_(Schwerer_Modus)"
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
      "wiki": "https://www.guildwiki.de/wiki/Das_Weinberg-Problem",
      "wiki_en": "https://web.archive.org/web/20260625151559/https://wiki.guildwars.com/wiki/The_Vineyard_Problem"
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
      "wiki": "https://www.guildwiki.de/wiki/Warten_wir_ab"
    },
    "101316": {
      "name": "The War in Kryta",
      "type": "primary",
      "givers": [325],
      "wiki": "https://www.guildwiki.de/wiki/Der_Krieg_in_Kryta"
    },
    "101317": {
      "name": "The Warrior's Path",
      "type": "secondary",
      "givers": [352],
      "xp": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_des_Kriegers"
    },
    "101318": {
      "name": "The Way is Blocked",
      "type": "primary",
      "givers": [177],
      "xp": 500,
      "requires": [101297],
      "next_missions": [25],
      "missions": [25],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_ist_versperrt"
    },
    "101319": {
      "name": "The Way of the Geomancer",
      "type": "secondary",
      "givers": [351],
      "profession": 6,
      "xp": 500,
      "next": [101267],
      "wiki": "https://www.guildwiki.de/wiki/Der_Weg_des_Geomanten"
    },
    "101320": {
      "name": "The Wayward Monk",
      "type": "secondary",
      "givers": [365],
      "profession": 3,
      "xp": 350,
      "skills": [254, 264, 284],
      "wiki": "https://www.guildwiki.de/wiki/Der_eigensinnige_Mönch"
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
      "wiki": "https://www.guildwiki.de/wiki/Der_unberechenbare_Zauberer",
      "wiki_en": "https://web.archive.org/web/20260621193534/https://wiki.guildwars.com/wiki/The_Wayward_Wizard"
    },
    "101322": {
      "name": "The Weaver of Nebo",
      "type": "secondary",
      "givers": [349],
      "xp": 500,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Der_Weber_von_Nebo"
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
      "wiki": "https://www.guildwiki.de/wiki/Das_Wurmproblem",
      "wiki_en": "https://web.archive.org/web/20260621182021/https://wiki.guildwars.com/wiki/The_Worm_Problem"
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
      "wiki": "https://www.guildwiki.de/wiki/Zehnt_für_die_Abtei_von_Aschfurt",
      "wiki_en": "https://web.archive.org/web/20260613160229/https://wiki.guildwars.com/wiki/Tithe_for_Ashford_Abbey"
    },
    "101325": {
      "name": "To Kryta: Journey's End",
      "type": "primary",
      "givers": [670],
      "xp": 500,
      "requires": [101327],
      "next_missions": [14],
      "missions": [14],
      "wiki": "https://www.guildwiki.de/wiki/Nach_Kryta:_Ende_einer_Reise"
    },
    "101326": {
      "name": "To Kryta: Refugees",
      "type": "primary",
      "givers": [391],
      "xp": 500,
      "next": [101327],
      "wiki": "https://www.guildwiki.de/wiki/Nach_Kryta:_Flüchtlinge"
    },
    "101327": {
      "name": "To Kryta: The Ice Cave",
      "type": "primary",
      "givers": [669],
      "xp": 500,
      "requires": [101326],
      "next": [101325],
      "wiki": "https://www.guildwiki.de/wiki/Nach_Kryta:_Die_Eishöhle"
    },
    "101328": {
      "name": "To Sorrow's Furnace",
      "type": "primary",
      "givers": [374],
      "xp": 10000,
      "gold": 750,
      "next": [101264],
      "wiki": "https://www.guildwiki.de/wiki/Zum_Hochofen_der_Betrübnis"
    },
    "101329": {
      "name": "Toward the Front Lines",
      "type": "primary",
      "givers": [262],
      "xp": 500,
      "gold": 200,
      "wiki": "https://www.guildwiki.de/wiki/Nach_vorn_zur_Front"
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
      "wiki": "https://www.guildwiki.de/wiki/Ärger_im_Wald",
      "wiki_en": "https://web.archive.org/web/20260621164023/https://wiki.guildwars.com/wiki/Trouble_in_the_Woods"
    },
    "101331": {
      "name": "Trying Times",
      "type": "secondary",
      "givers": [297],
      "profession": 5,
      "xp": 300,
      "skills": [7, 77],
      "next": [101084],
      "wiki": "https://www.guildwiki.de/wiki/Schwierige_Zeiten"
    },
    "101332": {
      "name": "Unnatural Creatures",
      "type": "secondary",
      "givers": [550],
      "profession": 5,
      "xp": 250,
      "skills": [30],
      "next": [101155],
      "wiki": "https://www.guildwiki.de/wiki/Unnatürliche_Kreaturen"
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
      "wiki": "https://www.guildwiki.de/wiki/Abnormale_Gewächse",
      "wiki_en": "https://web.archive.org/web/20260630184143/https://wiki.guildwars.com/wiki/Unnatural_Growths"
    },
    "101334": {
      "name": "Unruly Slaves",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "wiki": "https://www.guildwiki.de/wiki/Widerspenstige_Sklaven"
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
      "wiki": "https://www.guildwiki.de/wiki/Beunruhigende_Gerüchte",
      "wiki_en": "https://web.archive.org/web/20260211124228/https://wiki.guildwars.com/wiki/Unsettling_Rumors"
    },
    "101336": {
      "name": "Unspeakable, Unknowable",
      "type": "instance",
      "givers": [759],
      "xp": 8000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Unsäglich,_unverständlich"
    },
    "101337": {
      "name": "Urgent Warning",
      "type": "primary",
      "givers": [360],
      "xp": 500,
      "requires": [101382],
      "missions": [12],
      "wiki": "https://www.guildwiki.de/wiki/Dringende_Warnung"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Vernichtung:_Banditen",
      "wiki_en": "https://web.archive.org/web/20260606123639/https://wiki.guildwars.com/wiki/Vanguard_Annihilation:_Bandits"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Vernichtung:_Charr",
      "wiki_en": "https://web.archive.org/web/20260803140400/https://wiki.guildwars.com/wiki/Vanguard_Annihilation:_Charr"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Vernichtung:_Untote",
      "wiki_en": "https://web.archive.org/web/20261001193953/https://wiki.guildwars.com/wiki/Vanguard_Annihilation:_Undead"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Kopfgeld:_Lohteufel_Leidklinge",
      "wiki_en": "https://web.archive.org/web/20260725185035/https://wiki.guildwars.com/wiki/Vanguard_Bounty:_Blazefiend_Griefblade"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Kopfgeld:_Gräfin_Nadya",
      "wiki_en": "https://web.archive.org/web/20260803140411/https://wiki.guildwars.com/wiki/Vanguard_Bounty:_Countess_Nadya"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Kopfgeld:_Utini_Wupwup",
      "wiki_en": "https://web.archive.org/web/20260730152310/https://wiki.guildwars.com/wiki/Vanguard_Bounty:_Utini_Wupwup"
    },
    "101344": {
      "name": "Vanguard Equipment",
      "type": "secondary",
      "givers": [231],
      "xp": 500,
      "requires": [101141],
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Ausrüstung"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Rettung:_Bauer_Hamnet",
      "wiki_en": "https://web.archive.org/web/20260730141157/https://wiki.guildwars.com/wiki/Vanguard_Rescue:_Farmer_Hamnet"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Rettung:_Fußsoldat_Tate",
      "wiki_en": "https://web.archive.org/web/20260824160208/https://wiki.guildwars.com/wiki/Vanguard_Rescue:_Footman_Tate"
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
      "wiki": "https://www.guildwiki.de/wiki/Vorhut-Rettung:_Der_ascalonische_Adlige",
      "wiki_en": "https://web.archive.org/web/20260730152310/https://wiki.guildwars.com/wiki/Vanguard_Rescue:_Save_the_Ascalonian_Noble"
    },
    "101348": {
      "name": "Wanted: Amalek the Unmerciful",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Amalek_der_Gnadenlose"
    },
    "101349": {
      "name": "Wanted: Barthimus the Provident",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Barthimus_der_Fürsorgliche"
    },
    "101350": {
      "name": "Wanted: Calamitous",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Calamitous"
    },
    "101351": {
      "name": "Wanted: Carnak the Hungry",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Carnak_der_Hungernde"
    },
    "101352": {
      "name": "Wanted: Cerris",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Cerris"
    },
    "101353": {
      "name": "Wanted: Destor the Truth Seeker",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Destor_der_Wahrheitssuchende"
    },
    "101354": {
      "name": "Wanted: Greves the Overbearing",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Greves_der_Anmaßende"
    },
    "101355": {
      "name": "Wanted: Inquisitor Bauer",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Inquisitor_Bauer"
    },
    "101356": {
      "name": "Wanted: Inquisitor Lashona",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Inquisitor_Lashona"
    },
    "101357": {
      "name": "Wanted: Inquisitor Lovisa",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Inquisitorin_Lovisa"
    },
    "101358": {
      "name": "Wanted: Insatiable Vakar",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Vakar_der_Unersättliche"
    },
    "101359": {
      "name": "Wanted: Joh the Hostile",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Joh_der_Feindselige"
    },
    "101360": {
      "name": "Wanted: Justiciar Amilyn",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Justiziarin_Amilyn"
    },
    "101361": {
      "name": "Wanted: Justiciar Kasandra",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Justiziarin_Kasandra"
    },
    "101362": {
      "name": "Wanted: Justiciar Kimii",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Justiziarin_Kimii"
    },
    "101363": {
      "name": "Wanted: Justiciar Marron",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Justiziar_Marron"
    },
    "101364": {
      "name": "Wanted: Justiciar Sevaan",
      "type": "secondary",
      "givers": [582],
      "xp": 5000,
      "gold": 1000,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Justiziar_Sevaan"
    },
    "101365": {
      "name": "Wanted: Lev the Condemned",
      "type": "secondary",
      "givers": [582],
      "xp": 2000,
      "gold": 500,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Lev_die_Verdammte"
    },
    "101366": {
      "name": "Wanted: Maximilian the Meticulous",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Maximilian_der_Pingelige"
    },
    "101367": {
      "name": "Wanted: Sarnia the Red-Handed",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Sarnia_die_Rothändige"
    },
    "101368": {
      "name": "Wanted: Selenas the Blunt",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Selenas_die_Unverblümte"
    },
    "101369": {
      "name": "Wanted: Valis the Rampant",
      "type": "secondary",
      "givers": [582],
      "xp": 1000,
      "gold": 250,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Valis_der_Ungezügelte"
    },
    "101370": {
      "name": "Wanted: Vess the Disputant",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Vess_die_Streitsüchtige"
    },
    "101371": {
      "name": "Wanted: Zaln the Jaded",
      "type": "secondary",
      "givers": [582],
      "xp": 3000,
      "gold": 750,
      "wiki": "https://www.guildwiki.de/wiki/Gesucht:_Zaln_der_Erschöpfte"
    },
    "101372": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 6,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Elementarmagier)",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/War_Preparations"
    },
    "101373": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 1,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Krieger)",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/War_Preparations"
    },
    "101374": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 5,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Mesmer)",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/War_Preparations"
    },
    "101375": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 3,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Mönch)",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/War_Preparations"
    },
    "101376": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 4,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Nekromant)",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/War_Preparations"
    },
    "101377": {
      "name": "War Preparations",
      "type": "primary",
      "givers": [642],
      "profession": 2,
      "xp": 250,
      "objectives": [[0, "Go out the gate to Lakeside County and talk to <Trainer>."]],
      "wiki": "https://www.guildwiki.de/wiki/Kriegsvorbereitungen_(Waldläufer)",
      "wiki_en": "https://web.archive.org/web/20260628091728/https://wiki.guildwars.com/wiki/War_Preparations"
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
      "wiki": "https://www.guildwiki.de/wiki/Die_Prüfung_des_Kriegers",
      "wiki_en": "https://web.archive.org/web/20260507162011/https://wiki.guildwars.com/wiki/Warrior_Test"
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
      "wiki": "https://www.guildwiki.de/wiki/Herausforderung_des_Kriegers",
      "wiki_en": "https://web.archive.org/web/20260621193534/https://wiki.guildwars.com/wiki/Warrior%27s_Challenge"
    },
    "101380": {
      "name": "Wayfarer's Reverie: Tyria",
      "type": "event",
      "givers": [545],
      "event": 8,
      "xp": 2005,
      "gold": 2012,
      "rewards": ["Proof of Flames"],
      "wiki": "https://www.guildwiki.de/wiki/Erinnerung_des_Reisenden:_Tyria"
    },
    "101381": {
      "name": "What Lies Beneath",
      "type": "primary",
      "givers": [441],
      "travel": 4,
      "xp": 2500,
      "next": [100424],
      "wiki": "https://www.guildwiki.de/wiki/Die_Tiefen"
    },
    "101382": {
      "name": "White Mantle Wrath: A Helping Hand",
      "type": "primary",
      "givers": [360],
      "xp": 500,
      "requires": [101383],
      "next": [101337],
      "wiki": "https://www.guildwiki.de/wiki/Der_Zorn_des_Weißen_Mantels:_Unterstützung"
    },
    "101383": {
      "name": "White Mantle Wrath: Demagogue's Vanguard",
      "type": "primary",
      "givers": [361],
      "xp": 500,
      "requires_missions": [10],
      "next": [101382],
      "wiki": "https://www.guildwiki.de/wiki/Der_Zorn_des_Weißen_Mantels:_die_Vorhut_des_Demagogen"
    },
    "101384": {
      "name": "Wisdom of the Druids",
      "type": "secondary",
      "givers": [782],
      "xp": 500,
      "wiki": "https://www.guildwiki.de/wiki/Weisheit_der_Druiden"
    },
    "101385": {
      "name": "Wrenches In The Gears",
      "type": "instance",
      "givers": [555],
      "xp": 1500,
      "requires": [101239],
      "wiki": "https://www.guildwiki.de/wiki/Sand_im_Getriebe"
    },
    "101386": {
      "name": "You're a Mean One, Mr. Grenth",
      "type": "event",
      "givers": [433],
      "event": 13,
      "repeatable": true,
      "xp": 1000,
      "rewards": ["5 Candy Cane Shards", "5 Wintersday Gifts"],
      "wiki": "https://www.guildwiki.de/wiki/Ihr_seid_gemein,_Herr_Grenth"
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
