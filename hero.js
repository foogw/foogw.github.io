"use strict";
/* A hero's page, on the front page: ./?hero=<hero id>. How to recruit them, suggested builds, and the missions that
   need them. */

VIEWS.hero = (() => {
  const campNames = h => h.campaigns.map(c => CAMPAIGNS[c]);

  function html(h) {
    const alts = (h.alternative_to || []).map(i => HEROES[i]).filter(Boolean);
    const missions = Object.values(MISSIONS).filter(m => (m.hero || []).includes(h.id));
    const builds = HERO_BUILDS.get(h.id) || [];
    const single = new Set(BUILDDATA?.singles || []);
    return `<p class="back"><a href="heroes">← All heroes</a></p>
      <div class="sp-head" style="--pc:${profVar(h.profession)}">
        <img class="sp-icon hp-icon" src="img/prof/${profName(h)}.png" alt="">
        <div class="sp-title"><h2>${esc(h.name)}</h2><div class="sp-sub">${h.profession ? profName(h) : "Any profession"} · needs ${esc(listText(campNames(h)))}</div></div>
      </div>
      <div class="lgrid">
        <div class="lside">
          <section class="lbox"><h4>How to recruit</h4><p class="hp-recruit">${recruitHTML(h)}</p>
            ${alts.length ? `<p class="dim">You get either ${esc(h.name)} or ${alts.map(a => LINK.hero(a.id)).join(" or ")}, not both.</p>` : ""}</section>
          ${builds.length ? `<section class="lbox"><h4>Suggested builds</h4>${builds.map(b => `<div class="hp-build">
            <div class="hp-bname">${single.has(b.id) ? `<a href="${buildHref(b.id)}">${esc(b.name)}</a>` : esc(b.name)}</div>
            <div class="hbuild"><a class="hb-bar" href="${esc(builderHref(b))}" title="Open ${esc(b.name)} in the builder">${barIcons(b.code)}</a>
            <button class="hb-copy" data-copy="${esc(b.code)}" title="Copy the template code" aria-label="Copy the template code">${COPY_ICON}</button></div></div>`).join("")}</section>` : ""}
        </div>
        <div class="lside">
          ${missions.length ? `<section class="lbox"><h4>Required in</h4><ul class="lrows">${missions.map(m =>
            `<li>${LINK.mission(m.id)}<span class="dim">${CAMPAIGNS[missionCampaign(m)] || ""}</span></li>`).join("")}</ul></section>` : ""}
        </div>
      </div>`;
  }
  return { find: id => HEROES[id], title: h => h.name, html };
})();
