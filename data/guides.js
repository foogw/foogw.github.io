const GW_GUIDES = {
  "_": "The guides, written by hand, as the Guides page lists them, in its order. id: its short name, its address (guides?gom) and its file, data/guides/<id>.json. group: \"afk\", \"solo\" or \"quests\". mission: the map id it's played in.",
  "guides_": "In a guide's file: source: the page it shortens {href, archive, author, full, more: false to leave out the closing link to it}; stats: [label, value] pairs at its top; sections: [{title, flow, blocks}]. Each guide is a list of sections, each a list of blocks: {h}, {p}, {note} (a paragraph set apart), {box: {title, blocks}}, {ul}, {ol}, {table: {head, rows, notes}}, {builds}, {qa: [[q, a]]}, {img: {src, caption, side}}, {imgs: {srcs, caption}}, {areas: [map ids], side, height, crop: [x0, y0, x1, y1] (the part of the map shown, in its pixels; none: all the areas), spots: [{at: [x, y] in the map's pixels, name}], from: an outpost to start from, or a list of them} (those areas lit on their map; {maps: [such blocks]} shows maps side by side; {level: [dungeon map id, level index], height, to: [x, y]} a dungeon level's map (data/depths.js) with its way through, or to that point; spots marked, with the way on foot from the first area, or from each in from, to the first spot, then on to each next), {capCalc}, {route: [{start | map | step | area: map id, steps: [{t, take, go, done: [quest ids]}]}]}, {routeTotal}, {questIndex: {areas: [map ids], skip: {quest id: reason}}} (the quests given there). A build has a template code, or skill ids (null for a free slot); runes by attribute id; or a Builds page build's id. In text, {skill:id} links a skill with its icon, {skillname:id} without, {area:id} an area, {mission:id}, {quest:id}, {hero:id}, {page:href|text} another page, {ext:href|text} another site.",
  "guides": [
    {
      "id": "gom",
      "group": "afk",
      "name": "GoM AFK XP Farm",
      "summary": "An AFK XP farm in Gate of Madness: the Legendary Survivor title in about 4 hours, and 534 skill points a day.",
      "tags": ["Farm", "XP", "AFK", "Normal mode", "3 heroes"],
      "mission": 527
    },
    {
      "id": "pre",
      "group": "quests",
      "name": "Pre-Searing Quests",
      "summary": "An efficient route through the pre-Searing quests, with as little fighting and backtracking as possible.",
      "tags": ["Quests", "Pre-Searing", "Route"]
    },
    {
      "id": "reverie",
      "group": "quests",
      "name": "Wayfarer's Reverie",
      "summary": "The four Wayfarer's Reverie quests: every place to visit, the nearest outpost and the way there.",
      "tags": ["Quests", "Event", "Route"]
    },
    {
      "id": "fow",
      "group": "quests",
      "name": "Fissure of Woe Quests",
      "summary": "An efficient route through all eleven Fissure of Woe quests, with as little backtracking as possible.",
      "tags": ["Quests", "Fissure of Woe", "Route"]
    },
    {
      "id": "uw",
      "group": "quests",
      "name": "Underworld Quests",
      "summary": "All eleven Underworld quests in one run, the dangerous ones first, ending with Dhuum.",
      "tags": ["Quests", "Underworld", "Route"]
    },
    {
      "id": "drakes",
      "group": "solo",
      "name": "Purp Insc Chaos Axe Farm",
      "summary": "Purple and blue inscribable Chaos Axes and Shadow Shields, Blades, Bows and Staves from two Obsidian Furnace Drakes in Kourna, solo.",
      "tags": ["Farm", "Weapons", "Solo", "Koss"]
    },
    {
      "id": "spidercave",
      "group": "solo",
      "name": "Solo W/R FoW Spider Cave Farm",
      "summary": "Farm the Fissure of Woe spider cave for Obsidian Shards and other goodies with a high-armor warrior and Melandru's Resilience.",
      "tags": ["Farm", "Obsidian Shards", "Solo", "Warrior"]
    },
    {
      "id": "vaettir",
      "group": "solo",
      "name": "Easy 55hp Mo/A Vaettir Farm",
      "summary": "A Monk with 55 Health and Shadow Form burns down the Vaettir in Jaga Moraine with three Smiting spells.",
      "tags": ["Farm", "Solo", "Monk", "Eye of the North"]
    },
    {
      "id": "augury",
      "group": "solo",
      "name": "Augury Rock: Beating Your Doppelganger",
      "summary": "Easy bars for every profession to beat your Doppelganger in Augury Rock: Insidious Parasite with PvE skills it can't copy, or a bear it can't answer.",
      "tags": ["Mission", "Solo", "Prophecies", "Every profession"],
      "mission": 38
    },
    {
      "id": "zos",
      "group": "afk",
      "name": "Zos Shivros AFK Luxon Farm",
      "summary": "Luxon faction all day in Zos Shivros Channel with 7 heroes: one click to start, a couple to stand in place, then go AFK.",
      "tags": ["Farm", "Luxon faction", "AFK", "7 heroes"]
    }
  ]
};
