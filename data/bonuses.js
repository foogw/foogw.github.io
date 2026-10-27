/* The weekly PvE bonuses: what each does (from the Guild Wars Wiki's weekly bonus list and the login-screen
   announcements it archives, GNU FDL 1.2) and what is worth doing that week (written for this site).
   In tips, {place:Name} links a location, {page:href|text} another page. "daily" names the Zaishen rotation
   whose picks for that week the page lists. "words" are related search words ("sunspear" finds Elonian Support). */
window.GW_BONUSES = [
  {
    name: "Extra Luck",
    words: "lucky unlucky lockpick key chest title",
    effect: "Keys and lockpicks drop four times as often, and Lucky and Unlucky title points are doubled.",
    announcement: "The road ahead is filled with opportunity! Keys and lockpicks drop at four times the usual rate, and you'll receive double lucky and unlucky points all week long.",
    tips: [
      "Farm where chests are common: with keys and lockpicks dropping four times as often, you can open most of the chests you pass.",
      "Open chests with lockpicks: every lockpick you keep gives Lucky points and every one that breaks gives Unlucky points, doubled this week.",
      "The Nine Rings and Rings of Fortune games at the Shing Jea Boardwalk count double too.",
    ],
  },
  {
    name: "Elonian Support",
    words: "sunspear lightbringer title",
    effect: "Sunspear and Lightbringer title points are doubled, except those from turning in completed books.",
    announcement: "The Land of the Golden Sun requires your aid! Receive double Sunspear and Lightbringer points (excluding completed books) as you battle across Elona.",
    tips: [
      "Lightbringer: fight demons and Torment creatures in the Realm of Torment, for example by vanquishing its areas or running the Domain of Anguish from the {place:Chantry of Secrets}.",
      "Sunspear: kill foes anywhere in Elona; vanquishing an Elonian area gives a steady stream of points.",
      "Don't turn in completed books this week: they are not doubled.",
    ],
  },
  {
    name: "Zaishen Bounty",
    words: "zaishen coins",
    effect: "Zaishen bounties give double copper Zaishen Coins.",
    announcement: "Tolerance for the notorious is at an all time low! The Zaishen are offering double copper Zaishen Coin rewards for Zaishen bounties this week. Visit Embark Beach today and see what's posted.",
    daily: "zaishen-bounty",
    tips: [
      "Pick up each day's bounty at {place:Embark Beach} and finish it before the week ends.",
      "Each character can hold up to 3 Zaishen bounties at a time and turn them in whenever they like, so bounties done in earlier weeks can be saved and turned in this week.",
    ],
  },
  {
    name: "Factions Elite",
    words: "deep urgoz kanaxai elite",
    effect: "Anyone can enter The Deep and Urgoz's Warren from Kaineng Center all week.",
    announcement: "Kanaxai and Urgoz welcome your challenge! The Deep and Urgoz's Warren are open all week. Speak to Vash and Eurayle in Kaineng Center if you dare to go.",
    tips: [
      "Talk to Vash or Eurayle in {place:Kaineng Center} to enter. Other weeks, The Deep opens from Cavalon and Urgoz's Warren from House zu Heltzer, and only for the alliance that holds that town.",
      "Both are elite areas for a party of 12: plan the team ahead.",
    ],
  },
  {
    name: "Northern Support",
    words: "asura deldrimor norn ebon vanguard reputation rep title",
    effect: "Asura, Deldrimor, Ebon Vanguard and Norn reputation points are doubled, except those from turning in completed books.",
    announcement: "Strap on your snow boots! All week long, whether you're helping the Asura, Deldrimor, Ebon Vanguard, or the Norn, reputation points are doubled (excluding completed books).",
    tips: [
      "Take the blessing in an Eye of the North area before you fight: every kill then earns that region's reputation, doubled this week.",
      "Repeat the {page:missions.html#c=Eye+of+the+North|Eye of the North missions}: each gives reputation every time you finish it, and more in Hard mode.",
      "Don't turn in completed books this week: they are not doubled.",
    ],
  },
  {
    name: "Zaishen Mission",
    words: "zaishen coins",
    effect: "Zaishen missions give double copper Zaishen Coins.",
    announcement: "There's no better time to challenge yourself. The Zaishen are offering double copper Zaishen Coin rewards for Zaishen missions this week. Visit Embark Beach today and see what's posted.",
    daily: "zaishen-mission",
    tips: [
      "Pick up each day's mission at {place:Embark Beach} and finish it before the week ends.",
      "Each character can hold up to 3 Zaishen missions at a time and turn them in whenever they like, so missions done in earlier weeks can be saved and turned in this week.",
    ],
  },
  {
    name: "Pantheon",
    words: "underworld fissure uw fow statue",
    effect: "Entering the Underworld and the Fissure of Woe through the gods' statues is free all week.",
    announcement: "The gods are watching! Their statues across Tyria are active all week. Balthazar and Grenth in particular welcome all worthy adventurers with free passage to the Underworld and Fissure of Woe.",
    tips: [
      "Enter from a god's statue in the {place:Temple of the Ages}, the {place:Chantry of Secrets} or the {place:Zin Ku Corridor}: Grenth sends you to the Underworld, Balthazar to the Fissure of Woe. Other weeks it costs 1 platinum.",
      "The Temple of Grenth in Lornar's Pass still charges, so use one of the outposts above.",
      "A good week for Underworld and Fissure of Woe runs: Globs of Ectoplasm, Obsidian Shards and their quests.",
      "With no entry fee, it's also the week to solo farm there, and to try out and tune a solo build without paying for every failed attempt.",
    ],
  },
  {
    name: "Faction Support",
    words: "kurzick luxon faction title",
    effect: "Exchanging Kurzick or Luxon faction at the faction reward NPCs gives double title points.",
    announcement: "Your support is twice as important this week! Receive double Kurzick and Luxon title track points for exchanging faction with faction reward NPCs.",
    tips: [
      "Run the {page:builds.html#team=afk-luxon-faction|7 Hero AFK Luxon Faction Farm} all week, and turn the faction in each time you near the cap: the most title points for the least effort.",
      "The week to push the Kurzick and Luxon titles: save up faction in other weeks and turn it in at the faction reward NPCs now, for double the title points.",
      "Faction from vanquishes and the faction PvP maps counts too.",
      "Imperial faction from PvP can be exchanged for Kurzick or Luxon faction too, so PvP players gain from this week as well.",
    ],
  },
  {
    name: "Zaishen Vanquishing",
    words: "zaishen coins vanquish",
    effect: "Zaishen vanquishes give double copper Zaishen Coins.",
    announcement: "More coins for combat! The Zaishen are offering double copper Zaishen Coin rewards for Zaishen vanquishes this week. Visit Embark Beach today and see what's posted.",
    daily: "zaishen-vanquish",
    tips: [
      "Pick up each day's vanquish at {place:Embark Beach}; vanquishing is done in Hard mode.",
      "Each character can hold up to 3 Zaishen vanquishes at a time and turn them in whenever they like, so vanquishes done in earlier weeks can be saved and turned in this week.",
    ],
  },
];
