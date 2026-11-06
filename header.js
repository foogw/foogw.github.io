"use strict";
/* The top bar, the same on every page: each page has an empty <header class="top"> with this script right after it,
   so adding or changing a link is done here only. The page's own link is marked current. */
{
  // (the front page by a house icon)
  const HOME = '<svg class="home-ic" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h5v-6h3v6h5V9.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const PAGES = [["./", HOME, "Home"], ["rotations", "Rotations"], ["guides", "Guides"], ["storylines", "Storylines"], ["areas", "Areas"],
    ["missions", "Missions"], ["quests", "Quests"], ["dungeons", "Dungeons"], ["maps", "Maps"], ["skills", "Skills"], ["bosses", "Bosses"],
    ["heroes", "Heroes"], ["armor", "Armor"], ["builds", "Builds"], ["builder", "Builder"], ["titles", "Titles"]];
  const SMALL = [["user", "User"], ["about", "About"], ["thanks", "Thanks"], ["contact", "Contact"], ["license", "License"]];
  const page = location.pathname.match(/([\w-]*?)(\.html)?$/)[1].replace(/^index$/, "") || "./";
  const link = ([href, name, label], cls = "") => `<a${cls ? ` class="${cls}"` : ""} href="${href}"${label ? ` aria-label="${label}" title="${label}"` : ""}${href === page ? ' aria-current="page"' : ""}>${name}</a>`;
  document.currentScript.previousElementSibling.innerHTML = `<nav class="pages">${PAGES.map(p => link(p)).join("")}</nav>`
    + SMALL.map((p, i) => link(p, i ? "hdr-link" : "hdr-link push")).join("");
}
