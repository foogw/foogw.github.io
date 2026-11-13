"use strict";
/* The top bar, the same on every page: each page has an empty <header class="top"> with this script right after it,
   so adding or changing a link is done here only. Today (the front page, a house), then three groups, each a link to its landing page
   with a menu of its pages (open on hover or focus; on a touch screen the first tap opens it, the second follows the
   link), then My Characters with its tabs as a menu, then (once there is a character) the picked character with the ones marked In the menu to pick from; the small links at the right. On a phone the groups
   fold into one menu button that opens a full-screen list. The page's own link and its group are marked current. */
{
  const HOME = '<svg class="home-ic" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h5v-6h3v6h5V9.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  // each group: its name, its landing page, its pages
  const GROUPS = [
    ["Play", "rotations", [["rotations", "Rotations"], ["guides", "Guides"], ["builds", "Builds"], ["builder", "Builder"]]],
    ["World", "world", [["areas", "Areas"], ["missions", "Missions"], ["quests", "Quests"], ["dungeons", "Dungeons"], ["maps", "Maps"], ["storylines", "Storylines"]]],
    ["Compendium", "things", [["skills", "Skills"], ["bosses", "Bosses"], ["heroes", "Heroes"], ["armor", "Armor"], ["titles", "Titles"]]],
  ];
  const SMALL = [["about", "About"], ["thanks", "Thanks"], ["contact", "Contact"], ["license", "License"], ["backup", "Backup"]];
  const page = location.pathname.match(/([\w-]*?)(\.html)?$/)[1].replace(/^index$/, "") || "./";
  // (on My Characters, the view shown: characters?view=edit marks Edit, not Characters; with no view in the address, About
  // while nothing is saved yet, as characters.js opens it)
  const saved = (() => { try { return localStorage.getItem("gw-user") != null; } catch { return false; } })();
  const v = new URLSearchParams(location.search).get("view");
  let view = ["about", "edit"].includes(v) ? v : v === "chars" || saved ? null : "about";
  const isCurrent = href => page === "characters" && href.startsWith("characters") && !href.includes("-") ? (view ? href.endsWith(`=${view}`) : href === "characters")
    : href === page;
  const link = (href, name, cls = "", label = "") => `<a${cls ? ` class="${cls}"` : ""} href="${href}"${label ? ` aria-label="${label}" title="${label}"` : ""}${isCurrent(href) ? ' aria-current="page"' : ""}>${name}</a>`;
  const group = ([name, landing, pages]) => {
    const inGroup = pages.some(([h]) => isCurrent(h)) || isCurrent(landing);
    return `<div class="grp${inGroup ? " cur" : ""}"><a class="gt" href="${landing}"${inGroup ? ' aria-current="page"' : ""} aria-haspopup="true">${name}<span class="gchev" aria-hidden="true"></span></a>
      <div class="gmenu" role="menu">${pages.map(([h, n]) => link(h, n)).join("")}</div></div>`;
  };
  const header = document.currentScript.previousElementSibling;
  const CHAR = [["characters?view=about", "About"], ["characters", "Characters"], ["characters?view=edit", "Edit"], ["characters-overview", "Overview"], ["characters-birthdays", "Birthdays"]];
  const charGroup = () => group(["My Characters", "characters", CHAR]);
  // the picked character, a menu of its own at the bar's end once there is a character: the ones marked In the menu to
  // pick from (the picked one ticked), and the way to the Edit tab; its title opens the character's page
  const pickedGroup = () => `<div class="grp gpick" hidden><a class="gt hdr-char" href="characters" aria-haspopup="true"><img class="gpic" src="img/prof/Any.png" alt=""><span></span><span class="gchev" aria-hidden="true"></span></a>
      <div class="gmenu" role="menu"><div class="gchars"></div><div class="gsep"></div><a href="characters?view=edit">Edit…</a></div></div>`;
  header.innerHTML = `<nav class="pages">${link("./", HOME + "Today", "hdr-home")}${GROUPS.map(group).join("")}${charGroup()}${pickedGroup()}</nav>
    <button type="button" class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    ${SMALL.map(([h, n], i) => link(h, n, i ? "hdr-link" : "hdr-link push")).join("")}
    <div class="sheet" hidden>${GROUPS.map(([name, landing, pages]) => `<div class="sheet-g"><a class="sheet-t" href="${landing}">${name}</a>${pages.map(([h, n]) => link(h, n)).join("")}</div>`).join("")}
      <div class="sheet-g"><a class="sheet-t" href="characters">My Characters</a>${CHAR.map(([h, n]) => link(h, n)).join("")}</div>
      <div class="sheet-g gpick" hidden><a class="sheet-t hdr-char" href="characters"><span></span></a><div class="gchars"></div></div>
      <div class="sheet-g"><a class="sheet-t" href="./">Today</a>${SMALL.map(([h, n]) => link(h, n)).join("")}</div></div>`;
  // the menus: open on hover or focus by CSS; on a touch screen (no hover) the first tap on a group's name opens its
  // menu and the second follows the link; a tap elsewhere or Escape closes
  const touch = matchMedia("(hover: none)").matches;
  header.addEventListener("click", e => {
    const gt = e.target.closest(".gt"), grp = gt?.closest(".grp");
    if (gt && touch && !grp.classList.contains("open")) { e.preventDefault(); header.querySelectorAll(".grp.open").forEach(g => g !== grp && g.classList.remove("open")); grp.classList.add("open"); return; }
    if (e.target.closest(".burger")) { const b = e.target.closest(".burger"), on = header.classList.toggle("sheet-open"); b.setAttribute("aria-expanded", on); header.querySelector(".sheet").hidden = !on; document.body.classList.toggle("no-scroll", on); }
  });
  document.addEventListener("click", e => { if (!e.target.closest(".grp")) header.querySelectorAll(".grp.open").forEach(g => g.classList.remove("open")); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { header.querySelectorAll(".grp.open").forEach(g => g.classList.remove("open")); if (header.classList.contains("sheet-open")) header.querySelector(".burger").click(); } });
  // My Characters by the picked character's name, once it has one of its own (not the default Char<id>): read from the
  // progress kept in this browser (common.js's User; this script runs before it), and again when it changes
  const PROF_PIC = ["Any", "Warrior", "Ranger", "Monk", "Necromancer", "Mesmer", "Elementalist", "Assassin", "Ritualist", "Paragon", "Dervish"];
  const readChars = () => {
    try {
      const o = JSON.parse(localStorage.getItem("gw-user")), id = +localStorage.getItem("gw-user-char");
      // (version 3 keeps the characters under their accounts, version 2 in one list)
      const chars = o?.chars ?? o?.accounts?.flatMap(a => a.chars || []) ?? [];
      // (in the menu by default, while no one is marked: the first three shown; as common.js's menuDefault)
      if (!chars.some(c => c.inMenu)) { let n = 0; for (const c of chars) if (!c.hidden && n < 3) { c.inMenu = true; n++; } }
      return { chars, cur: chars.find(c => c.id === id) ?? chars[0] };
    } catch { return { chars: [], cur: null }; }
  };
  const charName = () => { const c = readChars().cur, n = typeof c?.name === "string" ? c.name.trim() : ""; return n && n !== `Char${c.id}` ? n : null; };
  // the characters marked "In the menu" (their Edit tab), the picked one marked: a click picks it, and the pages redraw
  const showMenuChars = () => {
    const { chars, cur } = readChars(), list = chars.filter(c => c.inMenu && !c.hidden);
    const esc = t => String(t).replace(/[&<>"]/g, x => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[x]);
    const items = list.map(c => `<button type="button" class="gchar${c === cur ? " cur" : ""}" data-pick="${c.id}"><img src="img/prof/${PROF_PIC[c.profession] || "Any"}.png" alt="">${esc(c.name)}</button>`).join("");
    for (const g of header.querySelectorAll(".gchars")) g.innerHTML = items;
  };
  header.addEventListener("click", e => { const b = e.target.closest("[data-pick]"); if (!b) return; e.preventDefault();
    if (typeof User !== "undefined") User.pick(+b.dataset.pick); else { try { localStorage.setItem("gw-user-char", b.dataset.pick); } catch { /* storage blocked */ } }
    showChar(); });
  const showChar = () => {
    const { chars, cur } = readChars(), n = charName();
    for (const g of header.querySelectorAll(".gpick")) g.hidden = !chars.length;
    for (const a of header.querySelectorAll(".hdr-char")) { a.querySelector("span").textContent = n ?? (cur ? cur.name : ""); a.title = "The character picked: its page"; a.classList.toggle("named", !!n);
      const pic = a.querySelector(".gpic"); if (pic) pic.src = `img/prof/${PROF_PIC[cur?.profession] || "Any"}.png`; }
    showMenuChars();
  };
  showChar();
  globalThis.headerChar = showChar;
  // the view My Characters moved to in the page (a mock made, the last one deleted): its links marked again
  globalThis.headerView = v => { view = v === "chars" ? null : v;
    for (const a of header.querySelectorAll('a[href^="characters"]:not([href*="-"])')) { if (isCurrent(a.getAttribute("href"))) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); } };
  addEventListener("storage", showChar);  // (another tab)
  // Backup with a * while this browser's progress is read-only (set on that page: common.js's READ_ONLY_KEY)
  const showReadOnly = () => {
    let ro = false; try { ro = localStorage.getItem("gw-read-only") === "1"; } catch { /* storage blocked */ }
    for (const a of header.querySelectorAll('a[href="backup"]')) { a.textContent = ro ? "Backup*" : "Backup"; a.title = ro ? "Backup (read-only mode is on)" : ""; }
  };
  showReadOnly();
  globalThis.headerReadOnly = showReadOnly;
  addEventListener("storage", showReadOnly);
}
