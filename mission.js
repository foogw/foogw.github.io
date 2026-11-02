"use strict";
/* A mission's page, on the front page: ./?mission=<map id>. Objectives, rewards, bosses and foes, its map and where it
   sits in the story. */

VIEWS.mission = (() => {
  const ALL = Object.values(MISSIONS);
  const KINDS = { story: "Mission", challenge: "Challenge", competitive: "Competitive", elite: "Elite mission", pvp: "PvP" };
  const place = m => LOCATIONS[m.id];
  const outpost = m => LOCATIONS[m.outpost];
  const party = m => outpost(m)?.party || place(m)?.party || 0;
  const regionId = m => (outpost(m) || place(m))?.region;
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
  function creaturesHTML(list, boss = false) {
    if (!list?.length) return '<p class="dim">—</p>';
    let html = "", group;
    for (const x of list) {
      const c = CREATURES[x.creature] || {};
      if (!boss && c.group !== group) { group = c.group; if (group) html += `<tr><td colspan="3" class="grp">${esc(group)}</td></tr>`; }
      const level = x.level ? `${x.level[0]}${x.level[1] ? ` (${x.level[1]})` : ""}` : "";
      html += `<tr style="--pc:${profVar(c.profession)}"><td class="pdot" title="${PROFS[c.profession] || ""}">${c.profession ? PROF_ABBR[c.profession] : ""}</td><td class="num dim">${level}</td>
        <td>${boss ? LINK.boss(x.creature) : esc(c.name)}</td>${boss ? `<td>${(c.elites || []).filter(e => SKILLS[e]).map(e => LINK.skill(e)).join(" ")}</td>` : ""}</tr>`;
    }
    return `<table class="npcs">${html}</table>`;
  }
  // when the Zaishen Mission is next about this mission, or how long the current one still runs
  const fmtZDay = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" });
  function zaishenNote(m) {
    const r = ROTATIONS["zaishen-mission"];
    if (!r?.entries.some(e => e.mission === m.id)) return "";
    const now = Date.now(), k = Rotation.period(r, now);
    let i = 0;
    while (Rotation.entry(r, k + i).mission !== m.id) i++;
    return i ? `The next <a href="rotations">Zaishen Mission</a> here is on ${fmtZDay.format(Rotation.startsAt(r, k + i))}, in ${i} day${i > 1 ? "s" : ""}.`
      : `This is today's <a href="rotations">Zaishen Mission</a>, for another ${timeLeft(Rotation.endsAt(r, now) - now)}.`;
  }
  function html(m) {
    const sub = [m.label && `Mission ${m.label}`, m.kind === "pvp" ? "PvP" : CAMPAIGNS[camp(m)], REGIONS[regionId(m)]?.name, m.kind !== "story" && KINDS[m.kind]].filter(Boolean).map(esc).join(" · ");
    const before = ALL.filter(x => (x.leads_to || []).includes(m.outpost ?? m.id));
    const heroes = (m.hero || []).map(i => HEROES[i]).filter(Boolean);
    const teams = (BUILDDATA?.teams || []).filter(t => t.mission === m.id);
    const bonus = (m.objectives || []).find(o => o[2]);
    const story = [
      before.length && ["After", before.map(x => LINK.mission(x.id)).join(", ")],
      m.leads_to?.length && ["Leads to", m.leads_to.map(whereLink).join(", ")],
      m.outpost && m.outpost !== m.id && ["Outpost", LINK.place(m.outpost)],
      heroes.length && ["Required hero", heroes.map(heroChip).join(" and ")],
    ].filter(Boolean);
    const notes = [zaishenNote(m)].filter(Boolean);
    const steps = QUESTDATA?.storylines?.find(s => (s.nodes || []).some(n => n.mission === m.id) || (s.parts || []).some(p => p.steps.some(n => n.mission === m.id)));
    return `<p class="back"><a href="missions">← All missions</a></p>
      <div class="sp-head" style="--pc:var(${CAMP_COLOR[camp(m)]})">
        <div class="sp-title"><h2>${esc(m.name)}</h2><div class="sp-sub">${sub}</div></div>
        ${party(m) ? `<div class="lstats"><span class="lstat"><small>Party</small><b>${party(m)}</b></span></div>` : ""}
      </div>
      ${notes.length ? `<ul class="lnotes">${notes.map(n => `<li>${n}</li>`).join("")}</ul>` : ""}
      <div class="lgrid">
        <div class="lside">
          ${m.objectives?.length ? `<section class="lbox"><h4>Objectives</h4><ul class="qp-obj">${m.objectives.map(([d, o, b]) =>
            `<li style="--d:${d}"${b ? ' class="bonus"' : ""}>${b ? "<b>Bonus:</b> " : ""}${esc(o)}</li>`).join("")}</ul></section>` : ""}
          <section class="lbox"><h4>Rewards</h4>${bonus ? `<p class="rgoal"><b>Bonus:</b> ${esc(bonus[1])}</p>` : ""}${rewardsHTML(m.rewards)}</section>
          <section class="lbox"><h4>Bosses</h4>${creaturesHTML(m.bosses, true)}</section>
          <section class="lbox"><h4>Foes</h4>${creaturesHTML(m.foes)}</section>
        </div>
        <div class="lside">
          ${m.kind !== "pvp" ? mapHTML([m.id]) : ""}
          ${story.length ? `<section class="lbox"><h4>Story</h4><ul class="lrows">${story.map(([k, v]) => `<li><span class="dim">${k}</span><span>${v}</span></li>`).join("")}</ul></section>` : ""}
          ${teams.length ? `<section class="lbox"><h4>Team builds</h4><ul class="lrows">${teams.map(t =>
            `<li><a href="builds?${esc(t.id)}">${esc(t.name)}</a><span class="dim">${t.builds.length} heroes</span></li>`).join("")}</ul></section>` : ""}
          <section class="lbox"><h4>Allies</h4>${creaturesHTML(m.allies)}</section>
        </div>
      </div>
      <p class="llinks">${steps ? `<a href="${storylineHref(steps.campaign, { m: m.id })}">In the storyline →</a>` : ""}${wikiLink(m.wiki)}</p>`;
  }
  return { find: id => MISSIONS[id], title: m => m.name, html };
})();
