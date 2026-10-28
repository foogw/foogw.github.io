"use strict";

const PLACES = window.GW_LOCATIONS;
const BY_NAME = new Map(PLACES.map(p => [p.name, p]));
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const TYPE_LABEL = { outpost: "Outpost", "mission outpost": "Mission outpost", town: "Town", explorable: "Explorable",
  arena: "Arena", dungeon: "Dungeon" };
const els = { name: $("f-name"), pvp: $("f-pvp"), index: $("index"), place: $("place"), empty: $("empty"), count: $("count") };
const CAMPS = ["Prophecies", "Factions", "Nightfall", "Eye of the North", "Core"];
// the tab a place is listed under: a Core place inside a campaign's lands goes with that campaign
const tabOf = p => p.tab || p.campaign;
const state = { place: null, camp: CAMPS[0] };

for (const p of PLACES) p._k = fold([p.name, p.region, TYPE_LABEL[p.type], aliasText(p.name, p.region)].join(" "));
// the campaigns' own places get a page and a place in the index; the rest only appear as neighbours
const FULL = PLACES.filter(p => p.exits);
// regions in the order each story visits them
const REGION_ORDER = [
  "Ascalon (pre-Searing)", "Ascalon", "Northern Shiverpeaks", "Kryta", "Maguuma Jungle", "Crystal Desert",
  "Southern Shiverpeaks", "Ring of Fire Islands",
  "Shing Jea Island", "Kaineng City", "Echovald Forest", "The Jade Sea",
  "Istan", "Kourna", "Vabbi", "The Desolation", "Realm of Torment", "Domain of Anguish",
  "Far Shiverpeaks", "Charr Homelands", "Tarnished Coast", "Depths of Tyria",
  "The Battle Isles", "The Mists"];
const regionIdx = r => REGION_ORDER.indexOf(r) + 1 || 99;
const CAMP_TAG = { "Eye of the North": "EotN", Nightfall: "Nightfall", Factions: "Factions", Prophecies: "Prophecies" };
const isOutpost = p => p.type !== "explorable" && p.type !== "dungeon";
// PvP arenas and battle maps stay hidden unless asked for
const shown = name => els.pvp.checked || !BY_NAME.get(name)?.pvp;

/* ---------- small pieces ---------- */
const placeLink = name => (BY_NAME.has(name)
  ? `<a href="#${new URLSearchParams({ place: name })}" class="plink ${isOutpost(BY_NAME.get(name)) ? "out" : "exp"}">${esc(name)}</a>`
  : esc(name));
const typeTag = p => `<span class="ltype ${p.type.replace(" ", "-")}">${esc(TYPE_LABEL[p.type])}</span>`;
// an explorable takes the party size of the outpost it was entered from
const partyText = p => (!p.party ? "" : p.party_max ? `${p.party}–${p.party_max}` : `${p.party}`);
const partyTitle = p => (p.party_max
  ? `${p.party} from the nearest outposts; up to ${p.party_max} when entered from further away`
  : "");
const skillLink = s => `<a class="skill-link${s.elite ? " elite" : ""}" href="skills.html#skill=${s.id}" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${esc(s.name)}</a>`;

const questLink = (q, p) => `<a href="${esc(questHref(q.name, p.campaign))}">${esc(q.name)}</a>`;

/* ---------- index ---------- */
// a search looks through every campaign, the current one first; within a region, places come in the order the
// story reaches them
function renderIndex(q) {
  const all = FULL.filter(p => shown(p.name) && (q.length || tabOf(p) === state.camp));
  const hits = all.filter(p => q.every(w => p._k.includes(w)));
  els.count.textContent = `${hits.length} / ${all.length}`;
  els.empty.hidden = hits.length > 0;
  const camps = [state.camp, ...CAMPS.filter(c => c !== state.camp)];
  const groups = [...new Set(hits.map(p => `${tabOf(p)}|${p.region}`))].sort((a, b) => {
    const [ca, ra] = a.split("|"), [cb, rb] = b.split("|");
    return camps.indexOf(ca) - camps.indexOf(cb) || regionIdx(ra) - regionIdx(rb);
  });
  els.index.innerHTML = groups.map(g => {
    const [c, r] = g.split("|");
    const list = hits.filter(p => tabOf(p) === c && p.region === r).sort((a, b) => isOutpost(b) - isOutpost(a) || (a.order ?? 999) - (b.order ?? 999) || cmpStr(a.name, b.name));
    const chips = l => (l.length ? `<div class="lchips">${l.map(p =>
      `<a class="lchip ${isOutpost(p) ? "out" : "exp"}" href="#${new URLSearchParams({ place: p.name })}" title="${esc(TYPE_LABEL[p.type])}${p.party ? ` · party ${partyText(p)}` : ""}">${highlight(p.name, q)}</a>`).join("")}</div>` : "");
    return `<section class="lregion"><h3>${esc(r)}${c !== state.camp ? ` <span class="lcamp">· ${esc(c)}</span>` : ""}</h3>${chips(list.filter(isOutpost))}${chips(list.filter(p => !isOutpost(p)))}</section>`;
  }).join("");
}

function renderCamps() {
  for (const b of $("camps").children) b.setAttribute("aria-pressed", b.dataset.camp === state.camp);
}

/* ---------- one place ---------- */
// an exit as a card: the place, what it is, and where it leads on to
function exitCard(name, dir, from) {
  const p = BY_NAME.get(name);
  const next = (p?.exits || []).map(([n]) => n).filter(n => n !== from && shown(n));
  const meta = p ? [TYPE_LABEL[p.type], p.party ? `party ${partyText(p)}` : ""].filter(Boolean).join(" · ") : "";
  return `<div class="xcard ${p && isOutpost(p) ? "out" : "exp"}">
    ${dir ? `<span class="xdir">${esc(dir)}</span>` : ""}${placeLink(name)}
    ${meta ? `<div class="xmeta" title="${esc(p ? partyTitle(p) : "")}">${esc(meta)}</div>` : ""}
    ${next.length ? `<div class="next">→ ${next.map(placeLink).join(", ")}</div>` : ""}
  </div>`;
}

// exits laid out by compass direction around the place; those without a direction follow below
const COMPASS = ["NW", "N", "NE", "W", "", "E", "SW", "S", "SE"];
function exitsHTML(p, exits) {
  if (!exits.length) return `<p class="dim">${p.type === "mission outpost" ? "No exits: this outpost leads only into its mission." : "No exits: reached by map travel, or from a quest, mission or NPC."}</p>`;
  const placed = exits.filter(([, d]) => d), loose = exits.filter(([, d]) => !d);
  const card = ([n, d]) => exitCard(n, d, p.name);
  const grid = placed.length ? `<div class="compass">${COMPASS.map(d => d
    ? `<div class="cell${placed.some(e => e[1] === d) ? "" : " none"}" data-dir="${d}">${placed.filter(e => e[1] === d).map(card).join("")}</div>`
    : `<div class="cell here"><span>${esc(p.name)}</span></div>`).join("")}</div>` : "";
  return grid + (loose.length ? `<div class="xloose">${placed.length ? `<div class="xlabel">Direction not known</div>` : ""}${loose.map(card).join("")}</div>` : "");
}

const listText = items => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`);
const rotationLink = name => `<a href="rotations.html#${new URLSearchParams({ q: name })}">${esc(name)}</a>`;

// the things about a place that its exits and lists don't show
// "X (explorable)" is the same terrain as X: a mission's outpost, a town, or the same area entered another way
function twinNote(p) {
  const base = p.name.replace(/ \(explorable\)$/, "");
  const twin = BY_NAME.get(base === p.name ? `${base} (explorable)` : base);
  if (!twin) return "";
  const mission = twin.mission && ` and the <a href="${esc(missionHref(twin.mission))}">${esc(twin.mission)} mission</a>`;
  return `The same area as ${isOutpost(twin) ? "the outpost " : ""}${placeLink(twin.name)}${mission || ""}.`;
}

// other pages on the same terrain: the missions played in this area, and explorables that are the same ground
function sharedAreaNotes(name) {
  const all = mapSharers(name), areas = all.filter(n => BY_NAME.get(n)?.type === "explorable");
  const missions = all.filter(n => !areas.includes(n)).map(n => `<a href="${esc(missionHref(n))}">${esc(n)}</a>`);
  return [
    missions.length && `This area is where the ${listText(missions)} mission${missions.length > 1 ? "s take" : " takes"} place.`,
    areas.length && `The same area as ${listText(areas.map(placeLink))}.`,
  ];
}

function notesHTML(p) {
  const notes = [
    p.mission && `This outpost is where the <a href="${esc(missionHref(p.mission))}">${esc(p.mission)}</a> mission starts.`,
    twinNote(p),
    ...sharedAreaNotes(p.name),
    p.after && `Completing the mission takes you to ${placeLink(p.after)}.`,
    p.gateway && `${listText(p.gateway.map(placeLink))} are reached from here, through a god's statue or an NPC.`,
    p.rotations && `Rotating quests are given here: ${listText(p.rotations.map(rotationLink))}. See which one is up today on the Rotations page.`,
    ...(p.notes || []).map(n => esc(n).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')),
    p.from && (p.exits?.length ? `Also reached from ${listText(p.from.map(placeLink))}, with no way back there.`
      : `Entered from ${listText(p.from.map(placeLink))}.`),
  ].filter(Boolean);
  return notes.length ? `<ul class="lnotes">${notes.map(n => `<li>${n}</li>`).join("")}</ul>` : "";
}

function renderPlace(p) {
  const exits = (p.exits || []).filter(([n]) => shown(n));
  const stat = (label, value, title = "") => `<span class="lstat" title="${esc(title)}"><small>${label}</small><b>${esc(value)}</b></span>`;
  const stats = [
    p.party ? stat("Party", partyText(p), partyTitle(p)) : "",
    p.foes ? stat("Vanquish", `${p.foes} foes`, "Foes to kill for a vanquish") : "",
    p.levels ? stat("Levels", p.levels) : "",
  ].join("");
  const box = (title, body) => (body ? `<section class="lbox"><h4>${title}</h4>${body}</section>` : "");
  const roles = new Map();  // one row per service, with every NPC who offers it
  for (const s of p.services || []) { const [k, v] = s.split(": "); roles.set(k, [...(roles.get(k) || []), v]); }
  const services = [...roles].map(([k, v]) => `<li><span>${esc(k)}</span><span class="dim">${esc(v.join(", "))}</span></li>`).join("");
  const bosses = (p.bosses || []).map(([b, id]) => SKILL.has(id)
    ? `<li>${skillLink(SKILL.get(id))}${b ? `<a class="dim" href="${esc(bossHref(b))}">${esc(b)}</a>` : ""}</li>` : "").join("");
  const quests = (p.quests || []).map(q => `<li><span>${questLink(q, p)}${q.travel ? ` <span class="tag" title="Takes you to ${esc(q.travel)}">To ${esc(CAMP_TAG[q.travel] || q.travel)}</span>` : q.type !== "Secondary" ? ` <span class="tag">${esc(q.type)}</span>` : q.flow ? ' <span class="tag" title="A secondary quest the campaign\'s storyline goes through">Story</span>' : ""}</span>${q.skills.length ? `<span class="qsk">${q.skills.map(id => SKILL.get(id)).filter(Boolean).map(s => `<a href="skills.html#skill=${s.id}" title="${esc(s.name)}">${skillIcon(s.id, "sk-ic sm")}</a>`).join("")}</span>` : ""}</li>`).join("");
  const side = (p.type === "explorable" ? mapHTML(p.name) : "")
    + box("Services", services && `<ul class="lrows">${services}</ul>`)
    + box("Elite skills to capture", bosses && `<ul class="lrows">${bosses}</ul>`)
    + box(`Quests <span class="dim">${(p.quests || []).length || ""}</span>`, quests && `<ul class="lrows lquests">${quests}</ul>`);
  els.place.innerHTML = `
    <p class="back"><a href="#${new URLSearchParams({ c: state.camp })}">← All ${esc(state.camp)} locations</a></p>
    <div class="lhead ${isOutpost(p) ? "out" : "exp"}">
      <div>
        <h2>${esc(p.name)}</h2>
        <div class="lsub">${typeTag(p)} <span>${esc(p.region)} · ${esc(p.campaign)}</span></div>
      </div>
      ${stats ? `<div class="lstats">${stats}</div>` : ""}
    </div>
    ${p.party_max ? `<p class="dim note">An area takes the party size of the outpost you enter from: ${p.party} from the nearest outposts, up to ${p.party_max} if you walk in from further away.</p>` : ""}
    ${notesHTML(p)}
    <div class="llinks">${p.wiki_de ? `<a href="${esc(p.wiki_de)}" target="_blank" rel="noopener">guildwiki.de ↗</a>` : ""}</div>
    <div class="lgrid${side ? "" : " solo"}">
      <section class="lexits"><h4>Exits</h4>${p.exits ? exitsHTML(p, exits) : `<p class="dim">Not covered.</p>`}</section>
      ${side ? `<div class="lside">${side}</div>` : ""}
    </div>`;
  initMaps(els.place);
}

/* ---------- state ---------- */
function update() {
  const p = state.place && BY_NAME.get(state.place);
  if (p && CAMPS.includes(tabOf(p))) state.camp = tabOf(p);
  renderCamps();
  els.index.hidden = !!p;
  els.place.hidden = !p;
  if (p) {
    els.empty.hidden = true;
    els.count.textContent = "";
    renderPlace(p);
    document.title = `${p.name} · GW Locations`;
  } else {
    renderIndex(terms(els.name));
    document.title = "GW Locations";
  }
}

function readHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  state.place = h.get("place");
  if (CAMPS.includes(h.get("c"))) state.camp = h.get("c");
  update();
  if (state.place) window.scrollTo(0, 0);
}

$("camps").innerHTML = CAMPS.map(c => `<button class="prof-chip" data-camp="${c}">${c}</button>`).join("");
$("camps").addEventListener("click", e => {
  const b = e.target.closest("[data-camp]");
  if (b) location.hash = new URLSearchParams({ c: b.dataset.camp });
});
els.name.addEventListener("input", () => {
  if (state.place) history.pushState(null, "", "#" + new URLSearchParams({ c: state.camp }));
  state.place = null;
  update();
});
els.name.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const first = els.index.querySelector(".lchip");
  if (first) { location.hash = first.getAttribute("href").slice(1); els.name.blur(); }
});
document.addEventListener("keydown", e => {
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
    e.preventDefault(); els.name.focus(); els.name.select();
  } else if (e.key === "Escape" && document.activeElement === els.name && els.name.value) {
    els.name.value = ""; update();
  }
});
els.pvp.addEventListener("change", update);
window.addEventListener("hashchange", readHash);
readHash();
