"use strict";
/* An area's page, on the front page: ./?area=<map id>. Its exits around it by compass direction, what's there
   (services, bosses, quests) and its map. */

VIEWS.area = (() => {
  // PvP arenas show among an area's exits only on a PvP area's own page
  let pvp = false;
  const shown = l => pvp || !isPvP(l);
  const STORY = new Set((QUESTDATA?.storylines || []).flatMap(s => [...(s.nodes || []), ...(s.parts || []).flatMap(p => p.steps)]).map(n => n.quest).filter(Boolean));
  // the rotations that send you to an area (the Zaishen Mission and Vanquish say when, in a note of their own)
  const ROTATED = new Map();
  for (const r of Object.values(ROTATIONS)) if (!["zaishen-mission", "zaishen-vanquish"].includes(r.key)) for (const e of r.entries) {
    const id = e.area ?? e.mission;
    if (id != null) (ROTATED.get(id) || ROTATED.set(id, new Set()).get(id)).add(r.title);
  }
  const kind = l => (isOutpost(l) ? "out" : "exp");
  const areaLink = id => (AREAS[id] ? `<a href="${HREF.area(id)}" class="plink ${kind(AREAS[id])}">${esc(AREAS[id].name)}</a>` : "");
  const typeTag = l => `<span class="ltype t${l.type} ${areaGroup(l)}">${esc(TYPE_LABEL[l.type] || "")}</span>`;

  // an exit as a card: the area, what it is, and where it leads on to
  function exitCard(id, from) {
    const l = AREAS[id];
    const next = [...new Set((l?.exits || []).map(e => e.to))].filter(n => n !== from && AREAS[n] && shown(AREAS[n]));
    const meta = [TYPE_LABEL[l.type], l.party && `party ${l.party}`].filter(Boolean).join(" · ");
    return `<div class="xcard ${kind(l)}">${areaLink(id)}<div class="xmeta">${esc(meta)}</div>
      ${next.length ? `<div class="next">→ ${next.map(areaLink).join(", ")}</div>` : ""}</div>`;
  }
  // exits laid out by compass direction around the area: from where the portal is on the map, else the wiki's
  const COMPASS = ["NW", "N", "NE", "W", "", "E", "SW", "S", "SE"];
  function compassOf(at, [cx, cy]) {
    const a = Math.atan2(at[1] - cy, at[0] - cx) * 180 / Math.PI;  // 0 = east, 90 = south
    return ["E", "SE", "S", "SW", "W", "NW", "N", "NE"][Math.round(((a + 360) % 360) / 45) % 8];
  }
  function exitsHTML(l, centre) {
    const seen = new Map();  // one card per area, at the direction of its first portal
    for (const e of l.exits || []) if (AREAS[e.to] && shown(AREAS[e.to]) && !seen.has(e.to)) seen.set(e.to, e.at && centre ? compassOf(e.at, centre) : e.dir || "");
    if (!seen.size) return `<p class="dim">${l.type === 5 ? "No exits: this outpost leads only into its mission." : "No exits: reached by map travel, or from a quest, mission or NPC."}</p>`;
    const exits = [...seen], placed = exits.filter(([, d]) => d), loose = exits.filter(([, d]) => !d);
    const grid = placed.length ? `<div class="compass">${COMPASS.map(d => d
      ? `<div class="cell${placed.some(e => e[1] === d) ? "" : " none"}" data-dir="${d}">${placed.filter(e => e[1] === d).map(([id]) => exitCard(id, l.id)).join("")}</div>`
      : `<div class="cell here"><span>${esc(l.name)}</span></div>`).join("")}</div>` : "";
    return grid + (loose.length ? `<div class="xloose">${placed.length ? `<div class="xlabel">Direction not known</div>` : ""}${loose.map(([id]) => exitCard(id, l.id)).join("")}</div>` : "");
  }

  function notesHTML(l) {
    // an outpost (a challenge's too) is where its missions start; an elite mission's area is the mission itself
    const outpostHere = isOutpost(l);
    const missions = Object.values(MISSIONS).filter(m => m.outpost === l.id && (outpostHere || m.id !== l.id));
    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
    const the = id => (/^the /i.test(MISSIONS[id]?.name || AREAS[id]?.name || "") ? "" : "the ");
    // the areas that may share its ground: the same terrain file on the same map (checked against the ground itself
    // once loaded: an outpost inside an area shares its terrain, not its ground)
    const same = l.terrain ? Object.values(AREAS).filter(x => x !== l && x.type !== 14 && x.type !== 17 && x.terrain === l.terrain && x.set === l.set) : [];
    const from = l.from || [];
    const notes = [
      missions.length && `This outpost is where ${listText(missions.map(m => the(m.id) + LINK.mission(m.id)))} mission${missions.length > 1 ? "s start" : " starts"}.`,
      MISSIONS[l.id] && l.type !== 5 && !(outpostHere && MISSIONS[l.id].outpost === l.id) && `${the(l.id) ? "The " : ""}${LINK.mission(l.id)} mission is played here.`,
      same.length && `<span data-same="${same.map(x => x.id).join(",")}"></span>`,
      AREAS[l.ground] && `The same ground as ${areaLink(l.ground)}: its map is drawn here.`,
      l.after && `Completing the mission takes you to ${areaLink(l.after)}.`,
      l.gateway && `${listText(l.gateway.map(areaLink))} are reached from here, through a god's statue or an NPC.`,
      [14, 17].includes(l.type) && missionWhereNote(l.id),
      missionsIn(l.id).length && `${cap(listText(missionsIn(l.id).map(i => the(i) + LINK.mission(i))))} mission${missionsIn(l.id).length > 1 ? "s are" : " is"} played in this area's place.`,
      zaishenNote("zaishen-mission", e => e.mission === l.id),
      zaishenNote("zaishen-vanquish", e => e.area === l.id && !e.creature),
      ROTATED.has(l.id) && `${listText([...ROTATED.get(l.id)].map(esc))} send${ROTATED.get(l.id).size > 1 ? "" : "s"} you here now and then: see when on the <a href="rotations">Rotations</a> page.`,
      ...(l.notes || []).map(text),
      from.length && (l.exits?.length ? `Also reached from ${listText(from.map(areaLink))}, with no way back there.` : `Entered from ${listText(from.map(areaLink))}.`),
    ].filter(Boolean);
    return notes.length ? `<ul class="lnotes">${notes.map(n => `<li${n.startsWith("<span data-same") ? " hidden" : ""}>${n}</li>`).join("")}</ul>` : "";
  }

  function html(l) {
    pvp = isPvP(l);
    const stat = (label, value, title = "") => `<span class="lstat" title="${esc(title)}"><small>${label}</small><b>${esc(value)}</b></span>`;
    const stats = [l.party && stat("Party", l.party), l.foes && stat("Vanquish", `${l.foes[0]}–${l.foes[1]} foes`, "Foes to kill for a vanquish"),
      l.levels && stat("Levels", l.levels)].filter(Boolean).join("");
    const box = (title, body) => (body ? `<section class="lbox"><h4>${title}</h4>${body}</section>` : "");
    const roles = new Map();  // one row per service, with every NPC who offers it
    for (const n of Object.values(NPCS)) if (n.area === l.id) for (const r of n.roles || []) if (r !== "quests") roles.set(r, [...(roles.get(r) || []), n.name]);
    const services = [...roles].map(([k, v]) => `<li><span>${esc(k[0].toUpperCase() + k.slice(1))}</span><span class="dim">${esc(v.join(", "))}</span></li>`).join("");
    const bosses = (l.bosses || []).map(i => CREATURES[i]).filter(Boolean).flatMap(c => (c.elites || []).filter(e => SKILLS[e])
      .map(e => `<li>${LINK.skill(e)}${LINK.boss(c.id).replace("<a ", '<a class="dim" ')}</li>`)).join("");
    const quests = questsAt(l.id);
    const questRows = quests.map(q => `<li><span>${LINK.quest(q.id)}${q.travel != null ? ` <span class="tag" title="Takes you to ${campaignName(q.travel)}">To ${CAMP_SHORT[q.travel]}</span>`
      : q.type !== "secondary" ? ` <span class="tag">${esc(q.type[0].toUpperCase() + q.type.slice(1))}</span>` : STORY.has(q.id) ? ' <span class="tag" title="A secondary quest the campaign\'s storyline goes through">Story</span>' : ""}</span>${
      q.skills?.length ? `<span class="qsk">${q.skills.filter(id => SKILLS[id]).map(id => `<a href="${HREF.skill(id)}" title="${esc(SKILLS[id].name)}">${skillIcon(id, "sk-ic sm")}</a>`).join("")}</span>` : ""}</li>`).join("");
    // a mission's own area (not its outpost) is drawn where the mission is played, where we marked it
    const side = ([14, 17].includes(l.type) && missionMapHTML(l.id, l.name)) || mapHTML(shownAreas(l), { self: isOutpost(l) ? l.id : null, town: isOutpost(l) ? l.id : null })
      + box("Services", services && `<ul class="lrows">${services}</ul>`)
      + box("Elite skills to capture", bosses && `<ul class="lrows">${bosses}</ul>`)
      + box(`Quests <span class="dim">${quests.length || ""}</span>`, questRows && `<ul class="lrows lquests">${questRows}</ul>`);
    const c = campaignOf(l);
    return `
      <p class="back"><a href="areas${query({ c })}">← All ${campaignName(c)} areas</a></p>
      <div class="lhead ${kind(l)}">
        <div><h2>${esc(l.name)}${l.foes ? vanqTick(l.id, undefined, "Vanquished") : ""}</h2><div class="lsub">${typeTag(l)} <span>${esc(regionOf(l)?.name)} · ${campaignName(c)}</span></div></div>
        ${stats ? `<div class="lstats">${stats}</div>` : ""}
      </div>
      ${notesHTML(l)}
      <div class="llinks">${wikiLink(l.wiki)}</div>
      <div class="lgrid">
        <section class="lexits"><h4>Exits</h4><div class="exits">${exitsHTML(l, l.at)}</div></section>
        <div class="lside">${side}</div>
      </div>`;
  }
  // with the area's ground, the exits take their directions from where the portals are on it
  function after(el, l) {
    // the same ground: the areas whose own walkable ground (an outpost's town, else its rings) is this one's
    const ground = w => w && JSON.stringify(w.town || w.rings);
    const s = el.querySelector("[data-same]");
    if (s) Promise.all([l.id, ...s.dataset.same.split(",")].map(loadWalk)).then(([w, ...ws]) => {
      const ids = s.dataset.same.split(",").filter((id, i) => ground(w) && ground(ws[i]) === ground(w));
      if (!ids.length) return;
      s.outerHTML = `The same ground as ${listText(ids.map(id => areaLink(+id)))}.`;
      el.querySelector(".lnotes li[hidden]")?.removeAttribute("hidden");
    });
    loadWalk(l.id).then(w => {
      const b = w && w.set === l.set && ringsBox([w.town ? { rings: w.town } : w]);  // the portals are on the area's map
      const ex = el.querySelector(".exits");
      if (b && ex && el.dataset.at === `area=${l.id}`) ex.innerHTML = exitsHTML(l, [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]);
    });
  }
  return { find: id => AREAS[id], title: l => l.name, html, after };
})();
