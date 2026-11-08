"use strict";
/* The Titles page: every title with a page of its own (title.js, on the front page), as cards by kind: the ones that
   power PvE skills, then the character's, then the account's; with the picked character's rank on each. */
// [heading, its rows: title ids in order, or the titles that belong]: the skill titles in the campaigns' order (Kurzick /
// Luxon, Sunspear, Lightbringer), the Eye of the North reputations on a row of their own
const GROUPS = [["Skill titles", [[5, 17, 20], [38, 39, 40, 41]]], ["Character titles", [t => t.group !== "skills" && t.scope === "character"]],
  ["Account titles", [t => t.group !== "skills" && t.scope === "account"]]];
function draw() {
  const titles = Object.keys(TITLES).filter(VIEWS.title.hasPage).map(id => TITLES[id]);
  const o = User.stored() != null && !User.broken() ? User.data() : null, c = o && User.char(o);
  const card = t => {
    const r = c ? titleRankOf(t, c, o) : 0, max = titleMax(t);
    const mine = c ? `<span class="tl-me">${r >= max ? "Max" : r ? `Rank ${r} of ${max}` : "No rank yet"}</span>` : "";
    return `<a class="tl-card" href="${HREF.title(t.id)}" style="--c:var(${CAMP_COLOR[t.campaign]})"><b>${esc(t.name)}</b>
      <span>${CAMPAIGNS[t.campaign]} · ${t.scope === "account" ? "account-wide" : "per character"} · ${t.ranks.length} ranks</span>${mine}</a>`;
  };
  const row = r => (Array.isArray(r) ? r.map(id => TITLES[id]).filter(t => titles.includes(t)) : titles.filter(r).sort((a, b) => cmpStr(a.name, b.name)));
  $("list").innerHTML = GROUPS.map(([label, rows]) => `<h2 class="tl-group">${label}</h2>${rows.map(row).filter(ts => ts.length)
    .map(ts => `<div class="tl-list">${ts.map(card).join("")}</div>`).join("")}`).join("");
}
draw();
addEventListener("userchange", draw);
