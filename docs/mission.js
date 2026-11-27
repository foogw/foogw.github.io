"use strict";
/* A mission's page, on the front page: ./?mission=<map id>. Objectives, rewards, bosses and foes, its map and where it
   sits in the story. */

VIEWS.mission = (() => {
  const ALL = Object.values(MISSIONS);
  const KINDS = { story: "Mission", challenge: "Challenge", competitive: "Competitive", elite: "Elite mission", pvp: "PvP" };
  const area = m => AREAS[m.id];
  const outpost = m => AREAS[m.outpost];
  const party = m => outpost(m)?.party || area(m)?.party || 0;
  const regionId = m => (outpost(m) || area(m))?.region;
  const camp = m => missionCampaign(m) ?? 0;

  const num = n => (n ? n.toLocaleString("en") : "—");
  function rewardsHTML(r) {
    if (!r) return '<p class="dim">No fixed rewards (score-based or none).</p>';
    if (r.points) return `<p class="rgoal">${num(r.xp)} XP for each completion.</p><table class="rewards">
      <tr><th></th><th class="num">${esc(r.points)}, first time</th><th class="num">Repeat</th></tr>
      ${["normal", "hard"].filter(k => r[k]).map(k => `<tr><td>${k === "normal" ? "Normal" : "Hard"} mode</td><td class="num">${num(r[k].first)}</td><td class="num">${num(r[k].repeat)}</td></tr>`).join("")}</table>`;
    const tiers = [...new Set(["normal", "hard"].flatMap(k => Object.keys(r[k] || {})))];
    const head = `<tr><th>${tiers.includes("bonus") ? "For" : "Tier"}</th>${r.by ? `<th>${esc(r.by[0].toUpperCase() + r.by.slice(1))}</th>` : ""}<th class="num">XP</th><th class="num">Gold</th><th class="num">Skill pts</th>${(r.extra || []).map(x => `<th class="num">${esc(x)}</th>`).join("")}</tr>`;
    return ["normal", "hard"].filter(k => r[k]).map(k => `<div class="rmode">${k === "normal" ? "Normal" : "Hard"} mode</div><table class="rewards">${head}${
      Object.entries(r[k]).map(([t, [xp, gold, sp, ...extra]]) => `<tr><td>${esc(t[0].toUpperCase() + t.slice(1))}</td>${r.by ? `<td>${esc(r.tiers?.[t] || "")}</td>` : ""}<td class="num">${num(xp)}</td><td class="num">${num(gold)}</td><td class="num">${sp}</td>${extra.map(v => `<td class="num">${v}</td>`).join("")}</tr>`).join("")}</table>`).join("");
  }
  // foes and allies, by group: [profession, level, name]
  // (bosses: the elites of the version played in this mission, eliteAt in common.js; a version with no elite says so)
  function creaturesHTML(list, boss = false, missionId) {
    if (!list?.length) return '<p class="dim">—</p>';
    let html = "", group;
    for (const x of list) {
      const c = CREATURES[x.creature] || {};
      if (!boss && c.group !== group) { group = c.group; if (group) html += `<tr><td colspan="3" class="grp">${esc(group)}</td></tr>`; }
      const level = x.level ? `${x.level[0]}${x.level[1] ? ` (${x.level[1]})` : ""}` : "";
      html += `<tr style="--pc:${profVar(c.profession)}"><td class="pdot" title="${PROFS[c.profession] || ""}">${c.profession ? PROF_ABBR[c.profession] : ""}</td><td class="num dim">${level}</td>
        <td>${boss ? LINK.boss(x.creature) : esc(c.name)}</td>${boss ? `<td>${eliteAt(x.creature, missionId).filter(e => SKILLS[e]).map(e => (SKILLS[e].elite ? eliteTick(e) : "") + LINK.skill(e)).join(" ")
          || (c.elites?.length ? '<span class="dim" title="This version of the boss has no elite skill">no elite here</span>' : "")}</td>` : ""}</tr>`;
    }
    return `<table class="npcs">${html}</table>`;
  }
  // its map, with where its bosses stand in it (data/bosses.js: the spots filed under the mission). A boss with several
  // places (one at a time): its dots unnamed, and named under the map
  // A mission whose bosses are met in a fixed order (data/missionmaps.js order): the spots numbered in it, the mission's
  // own portals marked (data/routing.js teleports, in the same order), and the way from the start through each boss in
  // turn drawn after the map is made (ways), the legs numbered where each begins
  const ordered = m => { const o = data("GW_MISSION_MAPS")?.order?.[m.id]; return o?.length && data("GW_MISSION_MAPS")?.starts?.[m.id] ? o : null; };
  const LEG_COLOR = NICK_COLORS[0];
  function missionMap(m) {
    const order = ordered(m);
    const all = Object.entries(data("GW_BOSS_SPOTS")?.spots || {}).map(([c, ss]) => [c, CREATURES[c]?.name.replace(/\s*\(boss\)$/, "") || "", ss.filter(s => s[0] === m.id && !s[3])]).filter(([, , ss]) => ss.length);
    if (order) all.sort((a, b) => (order.indexOf(+a[0]) + 1 || 99) - (order.indexOf(+b[0]) + 1 || 99));
    // (in order: its profession's icon in the dot's place; its number where its leg begins, and with its name in the list under the map)
    const spots = all.flatMap(([c, name, ss], k) => ss.map(s => ({ x: s[1], y: s[2], ...(ss.length > 1 ? { name: "" } : order?.includes(+c) ? { name: "", icon: profImg(CREATURES[c]?.profession) } : { name }) })));
    const note = all.filter(([, , ss]) => ss.length > 1).map(([c, name, ss]) => `${esc(name)}: ${spotsText(c, ss.length)}`).join(" · ");
    const portals = order ? (data("GW_ROUTING")?.teleports?.[m.id] || []).map(([x, y], n) => ({ at: [x, y], name: `Portal, opens when boss ${n + 1} dies` })).filter((p, n) => n >= 1 && n <= order.length) : null;
    if (portals) portals.unshift({ at: data("GW_ROUTING").teleports[m.id][0].slice(0, 2), name: "Portal from the start" });
    return (missionMapHTML(m.id, m.name, { spots, note, portals }) || mapHTML([m.id], { spots, note, portals })) + (order ? '<div class="nways"></div>' : "");
  }
  async function after(el, m) {
    const order = ordered(m), ways = el.querySelector(".nways");
    if (!order || !ways) return;
    const live = () => el.dataset.at === `mission=${m.id}`;
    const spot = c => (data("GW_BOSS_SPOTS")?.spots?.[c] || []).find(s => s[0] === m.id && !s[3]);
    const grid = await walkGrid([data("GW_MISSION_MAPS")?.missions?.[m.id]?.walk ?? m.id]);
    if (!live()) return;
    let from = { at: data("GW_MISSION_MAPS").starts[m.id], area: m.id };
    const legs = order.map(c => { const s = spot(c); const p = s && walkRoute(grid, from, [s[1], s[2]]); if (s) from = { at: [s[1], s[2]], area: m.id }; return p; });
    await markIcons(order.map(c => profImg(CREATURES[c]?.profession)));
    if (!live()) return;
    const view = el.querySelector(".gmap")?.mapView;
    // (each leg numbered where it begins on its boss's ground: after the portal, at the start of its last line)
    if (view) { view.ways = legs.map((p, n) => { const ls = p && walkLines(p); return ls && { lines: ls, color: LEG_COLOR, label: { at: ls.at(-1)[0], text: String(n + 1) } }; }).filter(Boolean); view.draw(); }
    const name = c => esc(CREATURES[c]?.name.replace(/\s*\(boss\)$/, "") || "");
    ways.innerHTML = legs.map((p, n) => `<span style="--c:${LEG_COLOR}">${n + 1} ${profIcon(CREATURES[order[n]]?.profession, "qp")} ${name(order[n])}: ${n ? `on from ${n}` : "from the start"}, ${p ? walkText(walkLength(p)) : "no way found"}</span>`).join("")
      + `<span class="dim">In this order, the portal to each opening when the boss before it dies. All of them: ${walkText(legs.reduce((a, p) => a + (p ? walkLength(p) : 0), 0))}</span>`;
  }
  function html(m) {
    const sub = [m.label && esc(`Mission ${m.label}`), regionLink(REGIONS[regionId(m)]), m.kind === "pvp" ? "PvP" : esc(CAMPAIGNS[camp(m)] || ""), m.kind !== "story" && esc(KINDS[m.kind] || "")].filter(Boolean).join(" · ");  // (region, then campaign, as every page; the region a link to its map)
    const before = ALL.filter(x => (x.leads_to || []).includes(m.outpost ?? m.id));
    const heroes = (m.hero || []).map(i => HEROES[i]).filter(Boolean);
    const teams = (BUILDDATA?.teams || []).filter(t => t.mission === m.id);
    const bonus = (m.objectives || []).find(o => o[2]);
    const story = [
      before.length && ["After", before.map(x => LINK.mission(x.id)).join(", ")],
      m.leads_to?.length && ["Leads to", m.leads_to.map(whereLink).join(", ")],
      // where it starts, and where it's played when that's an area of its own (Factions, Nightfall)
      outpost(m) && ["Outpost", LINK.area(m.outpost)],
      m.outpost !== m.id && [14, 17].includes(area(m)?.type) && ["Played in", `${LINK.area(m.id)} <span class="dim">(the area's page)</span>`],
      heroes.length && ["Required hero", heroes.map(heroChip).join(" and ")],
    ].filter(Boolean);
    const notes = [zaishenNote("zaishen-mission", e => e.mission === m.id), missionWhereNote(m.id)].filter(Boolean);
    const steps = QUESTDATA?.storylines?.find(s => (s.nodes || []).some(n => n.mission === m.id) || (s.parts || []).some(p => p.steps.some(n => n.mission === m.id)));
    // (the storyline's order fills in what the mission's own fields don't say: the step before and after)
    if (steps) { const key = n => (n.mission != null ? `m${n.mission}` : `q${n.quest}`), k = `m${m.id}`, es = (steps.edges || []).map(([a, b]) => [key(a), key(b)]);
      const link = x => (x[0] === "m" ? LINK.mission(+x.slice(1)) : LINK.quest(+x.slice(1)));
      const prev = es.filter(e => e[1] === k).map(e => e[0]), next = es.filter(e => e[0] === k).map(e => e[1]);
      if (prev.length && !story.some(([t]) => t === "After")) story.unshift(["After", prev.map(link).join(", ")]);
      if (next.length && !story.some(([t]) => t === "Leads to")) story.splice(story.findIndex(([t]) => t === "After") + 1, 0, ["Leads to", next.map(link).join(", ")]); }
    return `<p class="back"><a href="missions">← All missions</a></p>
      <div class="sp-head" style="--pc:var(${CAMP_COLOR[camp(m)]})">
        <div class="sp-title"><h2>${esc(m.name)}${hasModes(m) ? doneTicks("missions", m.id, undefined, "Done in") : ""}</h2><div class="sp-sub">${sub}</div>${hasModes(m) ? wannabeNeeds("mission", m.id) : ""}${CHECK_AREAS[m.id] ? wannabeNeeds("check", CHECK_AREAS[m.id]) : ""}</div>
        ${party(m) ? `<div class="lstats"><span class="lstat"><small>Party</small><b>${party(m)}</b></span></div>` : ""}
      </div>
      ${notes.length ? `<ul class="lnotes">${notes.map(noteLi).join("")}</ul>` : ""}
      <div class="lgrid">
        <div class="lside">
          ${m.objectives?.length ? `<section class="lbox"><h4>Objectives</h4><ul class="qp-obj">${m.objectives.map(([d, o, b]) =>
            `<li style="--d:${d}"${b ? ' class="bonus"' : ""}>${b ? "<b>Bonus:</b> " : ""}${esc(o)}</li>`).join("")}</ul></section>` : ""}
          <section class="lbox"><h4>Rewards</h4>${bonus ? `<p class="rgoal"><b>Bonus:</b> ${esc(bonus[1])}</p>` : ""}${rewardsHTML(m.rewards)}</section>
          <section class="lbox"><h4>Bosses</h4>${creaturesHTML(m.bosses, true, m.id)}</section>
          <section class="lbox"><h4>Foes</h4>${creaturesHTML(m.foes)}</section>
        </div>
        <div class="lside">
          ${m.kind !== "pvp" ? missionMap(m) : ""}
          ${story.length ? `<section class="lbox"><h4>Story</h4><ul class="lrows">${story.map(([k, v]) => `<li><span class="dim">${k}</span><span>${v}</span></li>`).join("")}</ul></section>` : ""}
          ${teams.length ? `<section class="lbox"><h4>Team builds</h4><ul class="lrows">${teams.map(t =>
            `<li><a href="builds?${esc(t.id)}">${esc(t.name)}</a><span class="dim">${t.builds.length} heroes</span></li>`).join("")}</ul></section>` : ""}
          <section class="lbox"><h4>Allies</h4>${creaturesHTML(m.allies)}</section>
        </div>
      </div>
      <p class="llinks">${steps ? `<a href="${storylineHref(steps.campaign, { m: m.id })}">In the storyline →</a>` : ""}${wikiLink(m.wiki)}</p>`;
  }
  return { find: id => MISSIONS[id], title: m => m.name, html, after };
})();
