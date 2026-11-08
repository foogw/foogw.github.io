"use strict";
/* A boss's page, on the front page: ./?boss=<creature id>. Its elite to capture and where it is. */

VIEWS.boss = (() => {
  // a boss at the end of a dungeon level (its boss mark, data/depths.js): that level's map, marked, in place of the
  // dungeon's whole area
  const bossMaps = b => b._where.flatMap(id => { const d = VIEWS.dungeon?.find(id);
    return (d?.levels || []).map((v, i) => v.marks.some(m => m[0] === "boss" && m[3] === b.name) ? VIEWS.dungeon.levelMap(d, i) : "").filter(Boolean); }).join("");
  function html(b) {
    const sub = [b.prof && PROFS[b.prof], [...b.camps].sort().map(c => CAMPAIGNS[c]).join(", ")].filter(Boolean).map(esc).join(" · ");
    return `<p class="back"><a href="bosses">← All bosses</a></p>
      <div class="sp-head" style="--pc:${profVar(b.prof)}">
        ${b.prof ? `<img class="sp-icon hp-icon" src="img/prof/${PROFS[b.prof]}.png" alt="">` : ""}
        <div class="sp-title"><h2>${esc(b.name)}</h2><div class="sp-sub">${sub}</div></div>
        ${b.levels.size ? `<div class="lstats"><span class="lstat"><small>Level</small><b>${esc([...b.levels].join(", "))}</b></span></div>` : ""}
      </div>
      <div class="lgrid">
        <div class="lside">
          <section class="lbox"><h4>Elite to capture</h4>${b._elites.length ? b._elites.map(s => `<div class="bp-skill">
            ${LINK.skill(s.id).replace("sk-ic sm", "sk-ic")}${eliteTick(s.id, undefined, "Captured")}<span class="dim">${PROFS[s.profession]} · ${esc(ATTRIBUTES[s.attribute] || "")}</span>
            <p class="bp-desc">${richText(s.concise || s.description)}</p></div>`).join("") : '<p class="dim">None.</p>'}</section>
        </div>
        <div class="lside">
          <section class="lbox"><h4>Where</h4><ul class="lrows">${b._where.map(i =>
            `<li>${whereLink(i)}<span class="dim">${MISSIONS[i] ? "Mission" : esc(TYPE_LABEL[AREAS[i]?.type] || "")}</span></li>`).join("")}</ul></section>
          ${bossMaps(b) || mapHTML(b._where.filter(i => AREAS[i]))}
        </div>
      </div>`;
  }
  return { find: id => bossTable().get(+id), title: b => b.name, html };
})();
