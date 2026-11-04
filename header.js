"use strict";
/* The top bar, the same on every page: each page has an empty <header class="top"> with this script right after it,
   so adding or changing a link is done here only. The page's own link is marked current. */
{
  const PAGES = [["./", "Home"], ["rotations", "Rotations"], ["guides", "Guides"], ["storylines", "Storylines"], ["missions", "Missions"],
    ["locations", "Locations"], ["maps", "Maps"], ["skills", "Skills"], ["heroes", "Heroes"], ["builds", "Builds"], ["builder", "Builder"]];
  const SMALL = [["user", "User"], ["about", "About"], ["thanks", "Thanks"], ["contact", "Contact"], ["license", "License"]];
  const page = location.pathname.match(/([\w-]*?)(\.html)?$/)[1].replace(/^index$/, "") || "./";
  const link = ([href, name], cls = "") => `<a${cls ? ` class="${cls}"` : ""} href="${href}"${href === page ? ' aria-current="page"' : ""}>${name}</a>`;
  document.currentScript.previousElementSibling.innerHTML = `<nav class="pages">${PAGES.map(p => link(p)).join("")}</nav>`
    + SMALL.map((p, i) => link(p, i ? "hdr-link" : "hdr-link push")).join("");
}
