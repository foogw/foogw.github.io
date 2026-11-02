"use strict";
/* A boss's page, on the front page: ./?boss=<creature id>. Its elite to capture and where it is. */

VIEWS.boss = (() => {
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
            ${LINK.skill(s.id).replace("sk-ic sm", "sk-ic")}<span class="dim">${PROFS[s.profession]} · ${esc(ATTRIBUTES[s.attribute] || "")}</span>
            <p class="bp-desc">${richText(s.concise || s.description)}</p></div>`).join("") : '<p class="dim">None.</p>'}</section>
        </div>
        <div class="lside">
          <section class="lbox"><h4>Where</h4><ul class="lrows">${b._where.map(i =>
            `<li>${whereLink(i)}<span class="dim">${MISSIONS[i] ? "Mission" : esc(TYPE_LABEL[LOCATIONS[i]?.type] || "")}</span></li>`).join("")}</ul></section>
          ${mapHTML(b._where.filter(i => LOCATIONS[i]))}
        </div>
      </div>`;
  }
  return { find: id => bossTable().get(+id), title: b => b.name, html };
})();
