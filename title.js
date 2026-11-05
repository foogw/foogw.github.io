"use strict";
/* A title's page, on the front page: ./?title=<title id>, and its panel on the Titles page. What earns it, what each
   rank gives and the skills that grow with it. */

VIEWS.title = (() => {
  const num = n => Number(n).toLocaleString("en");
  // a bonus reads "+7" or "+5%"; damage absorbed is a plain number
  const value = (v, [label, unit]) => (v == null ? "—" : `${label === "Damage absorbed" ? "" : "+"}${num(v)}${unit}`);

  const metaHTML = t => `<span>${CAMPAIGNS[t.campaign]}</span><span>${t.scope === "account" ? "account-wide" : "per character"}</span><span>${t.ranks.length} ranks, ${num(t.ranks.at(-1).points)} points to max</span>`;

  // "R1 title effect · R3 Asura consumables crafter · …"
  const unlocksHTML = t => {
    const items = t.ranks.flatMap(r => r.unlocks.map(u => `<span><b>R${r.rank}</b> ${esc(u)}</span>`));
    return items.length ? `<div class="t-unlocks">${items.join("")}</div>` : "";
  };

  // the effect columns at rank 1 and at max, e.g. "Max energy +7 → +15"
  const rangeHTML = t => (t.columns || []).map((c, i) =>
    `<span>${esc(c[0])} <b>${value(t.ranks[0].values[i], c)} → ${value(t.ranks.at(-1).values[i], c)}</b></span>`).join("");

  function tableHTML(t) {
    const head = ["Rank", "Points", ...(t.columns || []).map(c => c[0]), "Unlocks"];
    const rows = t.ranks.map(r => `<tr><td class="num">${r.rank}</td><td class="num">${num(r.points)}</td>${
      r.values.map((v, i) => `<td class="num">${value(v, t.columns[i])}</td>`).join("")}<td>${esc(r.unlocks.join(", "))}</td></tr>`).join("");
    return `<details class="t-table"><summary>Rank table</summary><div class="t-scroll"><table class="t-ranks"><thead><tr>${
      head.map((h, i) => `<th${i < head.length - 1 ? ' class="num"' : ""}>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div></details>`;
  }

  // the PvE skills that get stronger with this title's rank
  function skillsHTML(t) {
    const list = Object.values(SKILLS).filter(s => s.title && (s.title === t.id || s.title === t.also) && !s.pvp_only)
      .sort((a, b) => a.profession - b.profession || cmpStr(a.name, b.name));
    return list.length ? `<h4>Skills <span class="dim">${list.length}</span></h4><div class="t-skills">${list.map(s =>
      `<a class="skill-link${s.elite ? " elite" : ""}" href="${HREF.skill(s.id)}" style="--pc:${profVar(s.profession)}" title="${PROFS[s.profession]}">${skillIcon(s.id, "sk-ic")}<span>${esc(s.name)}</span></a>`).join("")}</div>` : "";
  }

  function panel(t) {
    const giver = NPCS[t.giver];
    return `<section class="t-panel" style="--c:var(${CAMP_COLOR[t.campaign]})">
      <div class="t-meta">${metaHTML(t)}</div>
      <p><span class="dim">Earned by</span> ${esc(t.earn)}</p>
      ${t.effect ? `<p><span class="dim">When displayed</span> ${esc(t.effect)}${giver ? ` <span class="dim">From ${esc(giver.name)} in ${LINK.area(giver.area)}.</span>` : ""}</p>` : ""}
      ${t.columns?.length ? `<div class="t-range">${rangeHTML(t)}</div>` : ""}
      ${t.note ? `<p class="dim">${esc(t.note)}</p>` : ""}
      ${unlocksHTML(t)}
      ${skillsHTML(t)}
      ${tableHTML(t)}
      <p class="t-src">${wikiLink(t.wiki)}</p>
    </section>`;
  }
  const html = t => `<p class="back"><a href="titles">← All titles</a></p>
    <div class="sp-head" style="--pc:var(${CAMP_COLOR[t.campaign]})"><div class="sp-title"><h2>${esc(t.name)} title</h2></div></div>${panel(t)}`;
  // (only a title with its ranks listed has a page)
  return { find: id => (TITLES[id]?.ranks ? TITLES[id] : null), title: t => `${t.name} title`, html, panel, metaHTML, rangeHTML, tableHTML };
})();
