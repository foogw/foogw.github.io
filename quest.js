"use strict";
/* A quest's page, on the front page: ./?quest=<quest id>. Who gives it, what it leads to, its rewards and its map. */

VIEWS.quest = (() => {
  const key = n => (n.mission != null ? `m${n.mission}` : `q${n.quest}`);
  const allSteps = s => [...(s.nodes || []), ...(s.parts || []).flatMap(p => p.steps)];
  // each quest's place in a story: quest id -> [campaign, step key]
  const IN_STORY = new Map((QUESTDATA?.storylines || []).flatMap(s => allSteps(s).filter(n => n.quest).map(n => [n.quest, [s.campaign, key(n)]])));
  const questProfs = q => [...new Set((q.skills || []).map(id => SKILLS[id]?.profession))].filter(p => p);

  function html(q) {
    const camp = questCampaign(q);
    const sub = [`${q.type[0].toUpperCase() + q.type.slice(1)} quest`, CAMPAIGNS[camp], questRegion(q)?.name].filter(Boolean).map(esc).join(" · ");
    const stats = [q.xp && ["XP", q.xp.toLocaleString("en")], q.gold && ["Gold", q.gold.toLocaleString("en")]].filter(Boolean);
    const skills = (q.skills || []).filter(id => SKILLS[id]);
    const heroes = (q.hero || []).map(i => HEROES[i]).filter(Boolean);
    const givers = questGivers(q), places = questPlaces(q), profs = questProfs(q);
    const facts = [
      givers.length && ["Giver", [...new Set(givers.map(n => n.name))].map(esc).join(", ")],
      places.length && ["Where", places.map(l => LINK.place(l.id)).join(", ")],
      (profs.length || q.profession) && ["Profession", profs.map(p => `${profIcon(p)} ${PROFS[p]}`).join(" ") || PROFS[q.profession]],
      heroes.length && ["Required hero", heroes.map(heroChip).join(" and ")],
      (q.requires?.length || q.requires_missions?.length || q.requires_other?.length) && ["After", [...(q.requires || []).map(i => LINK.quest(i)),
        ...(q.requires_missions || []).map(whereLink), ...(q.requires_other || []).map(esc)].join(", ")],
      q.next?.length && ["Leads to", q.next.map(i => LINK.quest(i)).join(", ")],
      (q.missions?.length || q.next_missions?.length) && ["Opens mission", [...(q.missions || []), ...(q.next_missions || [])].map(whereLink).join(", ")],
      q.travel != null && ["Takes you to", CAMPAIGNS[q.travel]],
      q.event && ["Event", `<a href="events">${esc(EVENTS[q.event]?.name)}</a>`],
    ].filter(Boolean);
    const step = IN_STORY.get(q.id);
    return `<p class="back"><a href="quests">← All quests</a></p>
      <div class="sp-head" style="--pc:var(${CAMP_COLOR[camp]})">
        <div class="sp-title"><h2>${esc(q.name)}${q.type === "secondary" && step ? '<span class="tag" title="A secondary quest the campaign\'s storyline goes through">Story</span>' : ""}${q.repeatable ? '<span class="tag">Repeatable</span>' : ""}${q.missions?.length ? '<span class="tag">Leads to a mission</span>' : ""}</h2><div class="sp-sub">${sub}</div></div>
        ${stats.length ? `<div class="lstats">${stats.map(([k, v]) => `<span class="lstat"><small>${k}</small><b>${esc(v)}</b></span>`).join("")}</div>` : ""}
      </div>
      <div class="lgrid">
        <div class="lside">
          ${facts.length ? `<section class="lbox"><h4>Quest</h4><ul class="lrows">${facts.map(([k, v]) => `<li><span class="dim">${k}</span><span>${v}</span></li>`).join("")}</ul></section>` : ""}
          ${q.objectives?.length ? `<section class="lbox"><h4>Objectives</h4><ul class="qp-obj">${q.objectives.map(([d, t]) => `<li style="--d:${d}">${esc(t)}</li>`).join("")}</ul></section>` : ""}
        </div>
        <div class="lside">
          <section class="lbox"><h4>Rewards</h4>
            ${skills.length ? `<div class="qp-skills">${skills.map(id => LINK.skill(id)).join("")}</div>` : ""}
            ${q.rewards?.length ? `<ul class="qp-rewards">${q.rewards.map(r => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
            ${!skills.length && !q.rewards?.length ? `<p class="dim">${q.xp && q.gold ? "Experience and gold only." : q.xp ? "Experience only." : q.gold ? "Gold only." : "—"}</p>` : ""}</section>
          ${mapHTML(places.flatMap(placeAreas), { self: places[0]?.id })}
        </div>
      </div>
      <p class="llinks">${step ? `<a href="${storylineHref(step[0], { s: step[1] })}">In the storyline →</a>` : ""}${skills.length && q.type !== "primary" ? `<a href="quests?sq=1">Skill quests →</a>` : ""}${wikiLink(q.wiki)}</p>`;
  }
  return { find: id => QUESTS[id], title: q => q.name, html };
})();
