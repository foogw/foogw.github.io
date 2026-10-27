/* Guides, written by hand. Each guide is a list of sections, and each section a list of blocks:
   { h }, { p }, { ul: [...] }, { ol: [...] }, { table: { head, rows, notes } }, { builds: [...] }, { qa: [[q, a]] }
   or { img: { src, caption, side } }.
   A build has a template code, or skills by name (null for a free slot) when no code fits it.
   In text, {skill:Name} links a skill, {place:Name} a location, {mission:Name} a mission, {page:href|text} another
   page and {ext:href|text} another site. */
const GWW_FOO = "https://wiki.guildwars.com/wiki/User:Foo/GoM";
window.GW_GUIDES = [
  {
    id: "gom-afk-xp",
    name: "GoM AFK XP Farm",
    summary: "An AFK XP farm in Gate of Madness: the Legendary Survivor title in about 4 hours, and 534 skill points a day.",
    tags: ["Farm", "XP", "AFK", "Normal mode", "3 heroes"],
    mission: "Gate of Madness",
    source: { href: GWW_FOO, archive: "https://web.archive.org/web/2026/" + GWW_FOO, author: "Foo" },
    stats: [["Per kill", "348 XP"], ["Per hour", "334,080 XP"], ["Setup", "~8 min"]],
    sections: [
      {
        blocks: [
          { img: { src: "img/guides/gom-afk-xp-1.jpg", caption: "The farm running: bonders at the end of the long shadow (flag 3), the player just south of the Portal Wraiths, the Keystone on the far edge of the aggro bubble (flag 1)." } },
          { p: "Legendary Survivor in about 4 hours, or 534 skill points a day. Normal mode, {mission:Gate of Madness}; about 8 minutes to set up, then it runs indefinitely." },
        ],
      },
      {
        title: "How it works",
        blocks: [
          { ul: [
            "A Chaos Rift spawns 8 Titans every 30 seconds. You tank them in low-armor, low-health gear.",
            "With your health set just right, {skill:Protective Bond} and the Lightbringer title cut every hit to 1 damage.",
            "Two Monk heroes share Protective Bond's cost, paid by {skill:Blessed Signet} and {skill:Essence Bond} (which needs that 1 damage).",
            "{skill:Purifying Veil} shortens the conditions; {skill:Mending}, {skill:Watchful Spirit} and {skill:Succor} cover them.",
            "A {skill:Keystone Signet} Mesmer hero kills. Everyone else stays out of range, so XP is split only two ways: 348 per kill with a Scroll of Berserker's Insight.",
          ] },
        ],
      },
      {
        title: "Build",
        blocks: [
          { builds: [
            { name: "Player", role: "You", skills: [null, null, null, null, null, null, null, "Heroic Refrain"],
              note: "Any profession. 5 Leadership from an \"of the Paragon\" mod; health by LB rank (table below)." },
            { name: "Bonder 1", code: "OwAS8Y4NHkrPNRfkSAAAAAA",
              note: "Bonds first. 18 Protection, 7 Divine Favor under Heroic Refrain." },
            { name: "Bonder 2", code: "OwAT043Ct4gi8f6LlAAAAAA",
              note: "Bonds second. 18 Healing, 13 Protection, 7 Divine Favor under Heroic Refrain." },
            { name: "Keystone", code: "OQNCA8wDP9B8DyzmOUi1veC", mode: "Fight",
              note: "16 Fast Casting, 15 Inspiration with runes. No weapon." },
          ] },
          { ul: [
            "Put these 3 heroes first in the party, so each can be flagged.",
            "Bonders: all bonds disabled, about 50 energy.",
            "Optional at LB4+: \"of the Necromancer\" weapons on both bonders (energy), and a +1/20% Protection item on bonder 1, recasting Veil until it lands at 62% (Burning down to 2s). LB3 needs the first, LB2 both.",
          ] },
          { p: "Wear a low-armor set (from Banoit, Kambei, Moon Ahn, Nu Leng or Mehinu), with health by LB rank:" },
          { table: {
            head: ["LB", "Target HP¹", "How", "Dervish²"],
            rows: [
              ["8", "190", "4 superior runes", "No chest piece"],
              ["7", "170", "4 superior runes, −20 \"Life is Pain\" focus", "No chest piece"],
              ["6", "155", "5 superior runes, full Survivor", "Survivor only on chest"],
              ["5", "135", "5 superior runes, Survivor chest and head", "Survivor only on chest, −20 focus"],
              ["4", "115", "5 superior runes", "−20 focus"],
              ["3", "95", "5 superior runes, −20 focus", "−50 cesta"],
              ["2", "95³", "5 superior runes, −20 focus", "−50 cesta"],
            ],
            notes: [
              "¹ Including the +2% morale from closing the Torment rift. Up to 20 more is fine (2 damage per hit).",
              "² Dervishes get +25 health from their chest piece.",
              "³ Takes 2 per hit, but safer than less health.",
            ],
          } },
        ],
      },
      {
        title: "Walkthrough",
        blocks: [
          { img: { src: "img/guides/gom-afk-xp-2.jpg", caption: "The path, and the compass once everyone is in place.", side: true } },
          { p: "Fight your way to the Chaos Rifts." },
          { h: "Clear" },
          { ul: [
            "The 3 Portal Wraiths at the Torment rift (left, south): +2% morale.",
            "The 3 Torment creatures and 2 Margonites patrolling.",
          ] },
          { h: "Leave alone" },
          { ul: [
            "The 2 Titan Abominations: killed ones respawn.",
            "The 3 Portal Wraiths at the Titan rift (right, north): if all die, the Titans stop.",
            "Everything further west: closing another rift adds morale and throws off your health.",
          ] },
          { h: "Set up" },
          { ol: [
            "Flag the bonders and the Keystone at the tip of the long shadow; flag everyone else out of compass range.",
            "Wield the \"of the Paragon\" weapon. Heroic Refrain each bonder in turn, and let it put its 4 enchantments on you.",
            "Switch to the low-health set, check your health, then reactivate the Lightbringer title.",
            "Aggro the Titans and stand just south of the Portal Wraiths, without aggroing them.",
            "Flag the Keystone to the edge of your aggro bubble, away from the Wraiths, and use the scroll.",
          ] },
          { p: "Watch a couple of Madness Titan cycles: they bleed and burn you, and their holy damage gives no Essence Bond energy. If your health and the bonders' energy hold, go AFK." },
        ],
      },
      {
        title: "Without Heroic Refrain",
        blocks: [
          { p: "As an alternative at LB4 and up, you can be the third bonder instead of using Heroic Refrain. Two bonders need 18 and 13 Protection, but three can do with 13, 8 and 3: bonder 1 at 13, bonder 2 at 8 and you at 3, bonding in that order." },
          { builds: [
            { name: "Player", role: "You", skills: ["Protective Bond", "Balthazar's Spirit", null, null, null, null, null, null],
              note: "Monk secondary with 3 Protection. Balthazar's Spirit pays for your share of the bond." },
          ] },
          { p: "The cost: without Heroic Refrain's +2, Purifying Veil and Mending are weaker, so conditions last longer and Mending heals less. That's a little less safe at high LB, still fine at LB4, and too risky below it." },
        ],
      },
    ],
  },
];
