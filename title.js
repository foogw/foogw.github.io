"use strict";
/* A title's page, on the front page: ./?title=<title id>, listed on the Titles page (titlelist.js). What earns it, what each
   rank gives and the skills that grow with it. */

VIEWS.title = (() => {
  const num = n => Number(n).toLocaleString("en");
  // a bonus reads "+7" or "+5%"; damage absorbed is a plain number
  const value = (v, [label, unit]) => (v == null ? "—" : `${label === "Damage absorbed" ? "" : "+"}${num(v)}${unit}`);

  const metaHTML = t => `<span>${CAMPAIGNS[t.campaign]}</span><span>${t.scope === "account" ? "account-wide" : "per character"}</span><span>${t.ranks.length} ranks, ${t.points_name ? `max at ${num(t.ranks.at(-1).points)} ${t.points_name === "XP" ? "XP" : t.points_name.toLowerCase()}` : `${num(t.ranks.at(-1).points)} points to max`}</span>`;

  // "R1 title effect · R3 Asura consumables crafter · …"
  const unlocksHTML = t => {
    const items = t.ranks.flatMap(r => r.unlocks.map(u => `<span><b>R${r.rank}</b> ${esc(u)}</span>`));
    return items.length ? `<div class="t-unlocks">${items.join("")}</div>` : "";
  };

  // the effect columns at rank 1 and at max, e.g. "Max energy +7 → +15"
  const rangeHTML = t => (t.columns || []).map((c, i) =>
    `<span>${esc(c[0])} <b>${value(t.ranks[0].values[i], c)} → ${value(t.ranks.at(-1).values[i], c)}</b></span>`).join("");

  function tableHTML(t) {
    // the rank's name, where known, and what it unlocks, where any rank unlocks something
    const names = !!t.rank_names, unl = t.ranks.some(r => r.unlocks.length);
    const head = [["Rank", 1], ...(names ? [["Name", 0]] : []), [t.points_name || "Points", 1], ...(t.columns || []).map(c => [c[0], 1]), ...(unl ? [["Unlocks", 0]] : [])];
    // the picked character's rank (or its account's) marked, Luxon's too on Kurzick / Luxon's page
    const mine = User.stored() != null && !User.broken() ? (() => { const o = User.data(), c = User.char(o);
      return new Set([t.id, t.also].filter(x => TITLES[x]).map(x => titleRankOf(TITLES[x], c, o))); })() : new Set();
    const rows = t.ranks.map((r, i) => `<tr${mine.has(r.rank) ? ' class="me" title="Your rank"' : ""}><td class="num">${r.rank}</td>${names ? `<td>${esc(t.rank_names[i] || "")}</td>` : ""}<td class="num">${num(r.points)}</td>${
      r.values.map((v, i) => `<td class="num">${value(v, t.columns[i])}</td>`).join("")}${unl ? `<td class="dim">${esc(r.unlocks.join(", "))}</td>` : ""}</tr>`).join("");
    return `<div class="t-table"><h4>Ranks</h4><div class="t-scroll"><table class="t-ranks"><thead><tr>${
      head.map(([h, n]) => `<th${n ? ' class="num"' : ""}>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div></div>`;
  }

  // the PvE skills that get stronger with this title's rank
  function skillsHTML(t) {
    const list = Object.values(SKILLS).filter(s => s.title && (s.title === t.id || s.title === t.also) && !s.pvp_only)
      .sort((a, b) => a.profession - b.profession || cmpStr(a.name, b.name));
    // a skill with a Kurzick and a Luxon version (one name) is listed once, with both icons
    const named = new Map();
    for (const s of list) named.set(s.name, [...(named.get(s.name) || []), s]);
    return named.size ? `<h4>Skills <span class="dim">${named.size}</span></h4><div class="t-skills">${[...named.values()].map(([s, ...more]) =>
      `<a class="skill-link${s.elite ? " elite" : ""}" href="${HREF.skill(s.id)}" style="--pc:${profVar(s.profession)}" title="${PROFS[s.profession]}">${[s, ...more].map(x => skillIcon(x.id, "sk-ic")).join("")}<span>${esc(s.name)}</span></a>`).join("")}</div>` : "";
  }

  // our guide that earns a title: [guide id, its name] (the guides aren't loaded on the front page)
  const GUIDE = { 5: ["zos", "Zos Shivros AFK Luxon Farm"], 9: ["gom", "GoM AFK XP Farm"] };
  function panel(t) {
    const giver = NPCS[t.giver], guide = GUIDE[t.id];
    return `<section class="t-panel" style="--c:var(${CAMP_COLOR[t.campaign]})">
      <div class="t-meta">${metaHTML(t)}</div>
      <p><span class="dim">Earned by</span> ${esc(t.earn)}</p>
      ${t.effect ? `<p><span class="dim">When displayed</span> ${esc(t.effect)}${giver ? ` <span class="dim">From ${esc(giver.name)} in ${LINK.area(giver.area)}.</span>` : ""}</p>` : ""}
      ${t.columns?.length ? `<div class="t-range">${rangeHTML(t)}</div>` : ""}
      ${t.note ? `<p class="dim">${esc(t.note)}</p>` : ""}
      ${guide ? `<p><span class="dim">Guide</span> <a href="guides?${guide[0]}">${esc(guide[1])}</a></p>` : ""}
      ${unlocksHTML(t)}
      ${skillsHTML(t)}
      ${tableHTML(t)}
      <p class="t-src">${wikiLink(t.wiki)}</p>
    </section>`;
  }
  const html = t => `<p class="back"><a href="titles">← Titles</a></p>
    <div class="sp-head" style="--pc:var(${CAMP_COLOR[t.campaign]})"><div class="sp-title"><h2>${esc(t.name)} title</h2></div></div>${panel(t)}`;
  // only a title with its ranks listed has a page
  const hasPage = id => !!TITLES[id]?.ranks;
  return { find: id => (hasPage(id) ? TITLES[id] : null), hasPage, title: t => `${t.name} title`, html, panel, metaHTML, rangeHTML, tableHTML };
})();
