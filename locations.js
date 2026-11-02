"use strict";

// the places with a page: every location but the mission areas (the Missions page has those)
const PLACES = Object.values(LOCATIONS).filter(l => l.type !== 14 && l.type !== 17);
const els = { name: $("f-name"), pvp: $("f-pvp"), index: $("index"), place: $("place"), empty: $("empty"), count: $("count") };
const TABS = [1, 2, 3, 4, 0];  // campaigns, Core last
const state = { place: null, camp: 1 };
// regions in the order each story visits them
const REGION_ORDER = [7, 2, 101, 0, 1, 5, 3, 6, 11, 8, 9, 10, 15, 12, 13, 14, 16, 100, 19, 20, 17, 18, 21, 4];
const regionIdx = r => REGION_ORDER.indexOf(r) + 1 || 99;
const shown = l => els.pvp.checked || !isPvP(l);
const STORY = new Set((QUESTDATA?.storylines || []).flatMap(s => [...(s.nodes || []), ...(s.parts || []).flatMap(p => p.steps)]).map(n => n.quest).filter(Boolean));
// the rotations that send you to a place
const ROTATED = new Map();
for (const r of Object.values(ROTATIONS)) for (const e of r.entries) {
  const id = e.location ?? e.mission;
  if (id != null) (ROTATED.get(id) || ROTATED.set(id, new Set()).get(id)).add(r.title);
}
for (const l of PLACES) l._k = fold([l.name, regionOf(l)?.name, TYPE_LABEL[l.type], aliasText("locations", l.id), aliasText("regions", l.region)].join(" "));

const kind = l => (isOutpost(l) ? "out" : "exp");
const placeLink = id => (LOCATIONS[id] ? `<a href="${hash({ place: id })}" class="plink ${kind(LOCATIONS[id])}">${esc(LOCATIONS[id].name)}</a>` : "");
const typeTag = l => `<span class="ltype t${l.type}">${esc(TYPE_LABEL[l.type] || "")}</span>`;

/* ---------- index ---------- */
// a search looks through every campaign, the current one first; within a region, places come in story order
function renderIndex(ts) {
  const all = PLACES.filter(l => shown(l) && (ts.length || campaignOf(l) === state.camp));
  const hits = all.filter(l => ts.every(w => l._k.includes(w)));
  els.count.textContent = `${hits.length} / ${all.length}`;
  els.empty.hidden = hits.length > 0;
  const camps = [state.camp, ...TABS.filter(c => c !== state.camp)];
  const groups = [...new Set(hits.map(l => l.region))].sort((a, b) =>
    camps.indexOf(REGIONS[a]?.campaign) - camps.indexOf(REGIONS[b]?.campaign) || regionIdx(a) - regionIdx(b));
  const chips = ls => (ls.length ? `<div class="lchips">${ls.map(l => `<a class="lchip ${kind(l)}" href="${hash({ place: l.id })}" title="${esc(TYPE_LABEL[l.type])}${l.party ? ` · party ${l.party}` : ""}">${highlight(l.name, ts)}</a>`).join("")}</div>` : "");
  els.index.innerHTML = groups.map(r => {
    const ls = hits.filter(l => l.region === r).sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || cmpStr(a.name, b.name));
    const c = REGIONS[r]?.campaign;
    return `<section class="lregion"><h3>${esc(REGIONS[r]?.name)}${c !== state.camp ? ` <span class="lcamp">· ${CAMPAIGNS[c]}</span>` : ""}</h3>${chips(ls.filter(isOutpost))}${chips(ls.filter(l => !isOutpost(l)))}</section>`;
  }).join("");
}

/* ---------- one place ---------- */
// an exit as a card: the place, what it is, and where it leads on to
function exitCard(id, from) {
  const l = LOCATIONS[id];
  const next = [...new Set((l?.exits || []).map(e => e.to))].filter(n => n !== from && LOCATIONS[n] && shown(LOCATIONS[n]));
  const meta = [TYPE_LABEL[l.type], l.party && `party ${l.party}`].filter(Boolean).join(" · ");
  return `<div class="xcard ${kind(l)}">${placeLink(id)}<div class="xmeta">${esc(meta)}</div>
    ${next.length ? `<div class="next">→ ${next.map(placeLink).join(", ")}</div>` : ""}</div>`;
}
// exits laid out by compass direction around the place: from where the portal is on the map, else the wiki's
const COMPASS = ["NW", "N", "NE", "W", "", "E", "SW", "S", "SE"];
function compassOf(at, [cx, cy]) {
  const a = Math.atan2(at[1] - cy, at[0] - cx) * 180 / Math.PI;  // 0 = east, 90 = south
  return ["E", "SE", "S", "SW", "W", "NW", "N", "NE"][Math.round(((a + 360) % 360) / 45) % 8];
}
function exitsHTML(l, centre) {
  const seen = new Map();  // one card per place, at the direction of its first portal
  for (const e of l.exits || []) if (LOCATIONS[e.to] && shown(LOCATIONS[e.to]) && !seen.has(e.to)) seen.set(e.to, e.at && centre ? compassOf(e.at, centre) : e.dir || "");
  if (!seen.size) return `<p class="dim">${l.type === 5 ? "No exits: this outpost leads only into its mission." : "No exits: reached by map travel, or from a quest, mission or NPC."}</p>`;
  const exits = [...seen], placed = exits.filter(([, d]) => d), loose = exits.filter(([, d]) => !d);
  const grid = placed.length ? `<div class="compass">${COMPASS.map(d => d
    ? `<div class="cell${placed.some(e => e[1] === d) ? "" : " none"}" data-dir="${d}">${placed.filter(e => e[1] === d).map(([id]) => exitCard(id, l.id)).join("")}</div>`
    : `<div class="cell here"><span>${esc(l.name)}</span></div>`).join("")}</div>` : "";
  return grid + (loose.length ? `<div class="xloose">${placed.length ? `<div class="xlabel">Direction not known</div>` : ""}${loose.map(([id]) => exitCard(id, l.id)).join("")}</div>` : "");
}

function notesHTML(l) {
  const missions = Object.values(MISSIONS).filter(m => m.outpost === l.id);
  const same = l.terrain ? PLACES.filter(x => x !== l && x.terrain === l.terrain && x.set === l.set) : [];
  const from = l.from || [];
  const notes = [
    missions.length && `This outpost is where the ${listText(missions.map(m => LINK.mission(m.id)))} mission${missions.length > 1 ? "s start" : " starts"}.`,
    MISSIONS[l.id] && l.type !== 5 && `The ${LINK.mission(l.id)} mission is played here.`,
    same.length && `The same ground as ${listText(same.map(x => placeLink(x.id)))}.`,
    l.after && `Completing the mission takes you to ${placeLink(l.after)}.`,
    l.gateway && `${listText(l.gateway.map(placeLink))} are reached from here, through a god's statue or an NPC.`,
    ROTATED.has(l.id) && `${listText([...ROTATED.get(l.id)].map(esc))} send${ROTATED.get(l.id).size > 1 ? "" : "s"} you here now and then: see when on the <a href="rotations">Rotations</a> page.`,
    ...(l.notes || []).map(text),
    from.length && (l.exits?.length ? `Also reached from ${listText(from.map(placeLink))}, with no way back there.` : `Entered from ${listText(from.map(placeLink))}.`),
  ].filter(Boolean);
  return notes.length ? `<ul class="lnotes">${notes.map(n => `<li>${n}</li>`).join("")}</ul>` : "";
}

function renderPlace(l) {
  const stat = (label, value, title = "") => `<span class="lstat" title="${esc(title)}"><small>${label}</small><b>${esc(value)}</b></span>`;
  const stats = [l.party && stat("Party", l.party), l.foes && stat("Vanquish", `${l.foes[0]}–${l.foes[1]} foes`, "Foes to kill for a vanquish"),
    l.levels && stat("Levels", l.levels)].filter(Boolean).join("");
  const box = (title, body) => (body ? `<section class="lbox"><h4>${title}</h4>${body}</section>` : "");
  const roles = new Map();  // one row per service, with every NPC who offers it
  for (const n of Object.values(NPCS)) if (n.location === l.id) for (const r of n.roles || []) if (r !== "quests") roles.set(r, [...(roles.get(r) || []), n.name]);
  const services = [...roles].map(([k, v]) => `<li><span>${esc(k[0].toUpperCase() + k.slice(1))}</span><span class="dim">${esc(v.join(", "))}</span></li>`).join("");
  const bosses = (l.bosses || []).map(i => CREATURES[i]).filter(Boolean).flatMap(c => (c.elites || []).filter(e => SKILLS[e])
    .map(e => `<li>${LINK.skill(e)}${LINK.boss(c.id).replace("<a ", '<a class="dim" ')}</li>`)).join("");
  const quests = questsAt(l.id);
  const questRows = quests.map(q => `<li><span>${LINK.quest(q.id)}${q.travel != null ? ` <span class="tag" title="Takes you to ${CAMPAIGNS[q.travel]}">To ${CAMP_SHORT[q.travel]}</span>`
    : q.type !== "secondary" ? ` <span class="tag">${esc(q.type[0].toUpperCase() + q.type.slice(1))}</span>` : STORY.has(q.id) ? ' <span class="tag" title="A secondary quest the campaign\'s storyline goes through">Story</span>' : ""}</span>${
    q.skills?.length ? `<span class="qsk">${q.skills.filter(id => SKILLS[id]).map(id => `<a href="${HREF.skill(id)}" title="${esc(SKILLS[id].name)}">${skillIcon(id, "sk-ic sm")}</a>`).join("")}</span>` : ""}</li>`).join("");
  const side = mapHTML(placeAreas(l), { self: isOutpost(l) ? l.id : null, town: l.id })
    + box("Services", services && `<ul class="lrows">${services}</ul>`)
    + box("Elite skills to capture", bosses && `<ul class="lrows">${bosses}</ul>`)
    + box(`Quests <span class="dim">${quests.length || ""}</span>`, questRows && `<ul class="lrows lquests">${questRows}</ul>`);
  els.place.innerHTML = `
    <p class="back"><a href="${hash({ c: state.camp })}">← All ${CAMPAIGNS[state.camp]} locations</a></p>
    <div class="lhead ${kind(l)}">
      <div><h2>${esc(l.name)}</h2><div class="lsub">${typeTag(l)} <span>${esc(regionOf(l)?.name)} · ${CAMPAIGNS[campaignOf(l)]}</span></div></div>
      ${stats ? `<div class="lstats">${stats}</div>` : ""}
    </div>
    ${notesHTML(l)}
    <div class="llinks">${l.wiki ? `<a href="${esc(l.wiki)}" target="_blank" rel="noopener">guildwiki.de ↗</a>` : ""}</div>
    <div class="lgrid">
      <section class="lexits"><h4>Exits</h4><div id="exits">${exitsHTML(l, l.at)}</div></section>
      <div class="lside">${side}</div>
    </div>`;
  initMaps(els.place);
  // with the area's ground, the exits take their directions from where the portals are on it
  loadWalk(l.id).then(w => {
    const b = w && w.set === l.set && ringsBox([w.town ? { rings: w.town } : w]);  // the portals are on the place's map
    if (b && state.place === l.id) $("exits").innerHTML = exitsHTML(l, [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]);
  });
}

/* ---------- state ---------- */
function update() {
  const l = LOCATIONS[state.place];
  if (l && TABS.includes(campaignOf(l))) state.camp = campaignOf(l);
  for (const b of $("camps").children) b.setAttribute("aria-pressed", +b.dataset.v === state.camp);
  els.index.hidden = !!l;
  els.place.hidden = !l;
  if (l) {
    els.empty.hidden = true;
    els.count.textContent = "";
    renderPlace(l);
    document.title = `${l.name} · GW Locations`;
  } else {
    renderIndex(terms(els.name));
    document.title = "GW Locations";
  }
}
function readHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  state.place = +h.get("place") || null;
  if (TABS.includes(+h.get("c")) && h.has("c")) state.camp = +h.get("c");
  update();
  if (state.place) window.scrollTo(0, 0);
}

$("camps").innerHTML = TABS.map(c => `<button class="prof-chip" data-v="${c}">${CAMPAIGNS[c]}</button>`).join("");
$("camps").addEventListener("click", e => {
  const b = e.target.closest("[data-v]");
  if (b) location.hash = new URLSearchParams({ c: b.dataset.v });
});
els.name.addEventListener("input", () => {
  if (state.place) history.pushState(null, "", hash({ c: state.camp }));
  state.place = null;
  update();
});
els.name.addEventListener("keydown", e => {
  const first = e.key === "Enter" && els.index.querySelector(".lchip");
  if (first) { location.hash = first.getAttribute("href").slice(1); els.name.blur(); }
});
searchKeys(els.name, update);
els.pvp.addEventListener("change", update);
window.addEventListener("hashchange", readHash);
readHash();
