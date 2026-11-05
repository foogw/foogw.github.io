"use strict";
/* A skill's page, on the front page: ./?skill=<skill id>. Its description, costs, how to get it and the builds that
   use it. */

VIEWS.skill = (() => {
  const PVE_OF = new Map(Object.values(SKILLS).filter(s => s.pvp_version).map(s => [s.pvp_version, s.id]));
  // the title whose rank a PvE skill scales with (the Kurzick and Luxon titles share one entry)
  const titleOf = s => TITLES[s.title] || Object.values(TITLES).find(t => t.also === s.title);
  const attrName = s => (s.title ? `${titleOf(s)?.name || "Title"} rank` : ATTRIBUTES[s.attribute] || "No attribute");
  const SOURCES = { capture: "Signet of Capture", "skill trainer": "Skill trainer", "hero skill trainer": "Hero skill trainer", quest: "Quest", "profession changer": "Profession Changer" };
  const sourceOf = a => (a.capture ? "capture" : a.quest || a.quest_name ? "quest" : a.as || "other");

  // the teams and single builds whose bars use each skill
  const USED_IN = new Map();
  for (const t of [...(BUILDDATA?.teams || []), ...(BUILDDATA?.players || []).map(id => ({ single: "player build", builds: [id] })),
    ...(BUILDDATA?.singles || []).map(id => ({ single: "hero build", builds: [id] }))]) {
    const counts = new Map();
    for (const id of t.builds) counts.set(id, (counts.get(id) || 0) + 1);
    for (const [id, n] of counts) {
      const b = BUILDS.get(id);
      let skills = [];
      try { skills = TemplateCode.decode(b.code).skills; } catch { /* an unreadable code lists nothing */ }
      for (const sid of new Set(skills)) if (sid) (USED_IN.get(sid) || USED_IN.set(sid, []).get(sid)).push({ team: t, build: b, n });
    }
  }

  // how to get it: grouped by way, then by campaign
  function acquisitionHTML(s) {
    if (!s.acquisition?.length) return '<p class="dim">No acquisition data.</p>';
    const groups = new Map();
    for (const a of s.acquisition) {
      const n = NPCS[a.npc], q = QUESTS[a.quest], where = a.area ?? n?.area ?? questAreas(q || {})[0]?.id;
      const line = (a.capture ? LINK.boss(a.capture) : q ? LINK.quest(q.id) : esc(n?.name || a.quest_name || ""))
        + (where ? ` <span class="m">— ${whereLink(where)}</span>` : "");
      const camp = CAMPAIGNS[campaignOf(AREAS[where]) ?? (q && questCampaign(q))] || "";
      const g = groups.get(sourceOf(a)) || groups.set(sourceOf(a), new Map()).get(sourceOf(a));
      const lines = g.get(camp) || g.set(camp, []).get(camp);
      if (!lines.includes(line)) lines.push(line);
    }
    const order = Object.keys(SOURCES);
    return [...groups].sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0])).map(([m, byCamp]) =>
      `<div class="acq-group"><div>${SOURCES[m] || "Other"}</div>` + [...byCamp].map(([c, lines]) =>
        (c ? `<div class="camp">${esc(c)}</div>` : "") + `<ul class="acq">${lines.map(l => `<li>${l}</li>`).join("")}</ul>`).join("") + "</div>").join("");
  }

  function html(s) {
    const chip = (id, label) => SKILLS[id] ? `<a class="chip" href="${HREF.skill(id)}" style="border-left:3px solid ${profVar(SKILLS[id].profession)}">${esc(label || SKILLS[id].name)}</a>` : "";
    const versions = [s.pvp_version ? chip(s.pvp_version, "PvP version") : "", PVE_OF.has(s.id) ? chip(PVE_OF.get(s.id), "PvE version") : ""].join("");
    const related = (s.related_ids || []).map(id => chip(id)).join("");
    const sub = [s.profession ? PROFS[s.profession] : "Common", attrName(s), s.label + (s.touch ? " (touch)" : ""), CAMPAIGNS[s.campaign]].map(esc).join(" · ");
    const tags = [s.elite && "Elite", s.pvp_only && "PvP only", s.title && "PvE only"].filter(Boolean).map(t => `<span class="tag">${t}</span>`).join("");
    const stats = [s.energy && ["Energy", s.energy, "c-e"], s.adrenaline && ["Adrenaline", s.adrenaline, "c-a"], s.sacrifice && ["Sacrifice", `${s.sacrifice}%`, "c-s"],
      s.upkeep && ["Upkeep", s.upkeep, "c-u"], s.overcast && ["Overcast", s.overcast, "c-o"], s.activation && ["Activation", `${secs(s.activation)}s`],
      s.recharge && ["Recharge", `${s.recharge}s`]].filter(Boolean);
    const title = s.title && titleOf(s);
    const used = USED_IN.get(s.id) || [];
    return `<p class="back"><a href="skills">← All skills</a></p>
      <div class="sp-head${s.elite ? " elite" : ""}" style="--pc:${profVar(s.profession)}">
        <img class="sp-icon" src="img/skills/${s.id}.jpg" alt="" onerror="this.remove()">
        <div class="sp-title"><h2>${esc(s.name)}${tags}${s.elite && !s.pvp_only ? eliteTick(s.id, undefined, "Captured") : ""}</h2><div class="sp-sub">${sub}</div></div>
        <div class="lstats">${stats.map(([k, v, c]) => `<span class="lstat"><small>${k}</small><b class="${c || ""}">${esc(v)}</b></span>`).join("")}</div>
      </div>
      <div class="lgrid">
        <div class="lside">
          <section class="lbox"><h4>Description</h4><p class="sp-desc">${richText(s.description)}</p>
            ${s.concise && s.concise !== s.description ? `<p class="dim sp-concise">${richText(s.concise)}</p>` : ""}</section>
          ${title ? `<section class="lbox"><h4>Title</h4><p>Gets stronger with your <a href="${HREF.title(title.id)}">${esc(title.name)} title</a> rank.</p></section>` : ""}
          ${used.length ? `<section class="lbox"><h4>Used in builds</h4><ul class="lrows">${used.map(u => u.team.single
            ? `<li><a href="${buildHref(u.build.id)}">${esc(u.build.name)}</a><span class="dim">${u.team.single}</span></li>`
            : `<li><a href="${buildHref(u.team.id)}">${esc(u.team.name)}</a><span class="dim">${esc(u.build.name)}${u.n > 1 ? ` ×${u.n}` : ""}</span></li>`).join("")}</ul></section>` : ""}
          ${versions || related ? `<section class="lbox">${versions ? `<h4>Versions</h4><div class="chips">${versions}</div>` : ""}${related ? `<h4>Related skills</h4><div class="chips">${related}</div>` : ""}</section>` : ""}
        </div>
        <div class="lside"><section class="lbox"><h4>How to get it</h4>${acquisitionHTML(s)}</section></div>
      </div>
      <p class="llinks"><a href="builder?add=${s.id}">Add to builder →</a><span class="dim">Skill ID ${s.id}</span></p>`;
  }
  return { find: id => SKILLS[id], title: s => s.name, html };
})();
