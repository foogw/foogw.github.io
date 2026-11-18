"use strict";
/* Elite captures: for the character picked (User, common.js), the elites it hasn't captured, each with the easiest
   capture we picked (data/captures.js): the boss, where, the start to walk from and how far, drawn on the boss's map
   with the way there (captureMap, boss.js). Two views: Next (one elite at a time, as a run to do, with its maps) and
   List (all of them, a map on demand). The filters and the view live in the address (captures?view=list&camp=1…). Needs mytitles.js for the Skill Hunter
   counts. */

const CAPS = data("GW_CAPTURES")?.captures || {};
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const ELITES = Object.keys(CAPS).map(id => SKILLS[id]).filter(s => s && s.elite && !s.pvp_only);
const SKILL_HUNTER = [[1, 90, "Prophecies"], [2, 120, "Factions"], [3, 140, "Nightfall"]];  // campaign, elites its title needs
const DIFF = { easy: ["Easy", "a sure spawn, standing still, within 6 ranges of the start"], medium: ["Medium", "a longer walk, a boss walking a loop, or a mission"], hard: ["Hard", "one of several places, a dungeon, or a way we couldn't measure"] };
// how hard a pick is: easy a sure spawn close to its start; hard one of several places (all walked), a dungeon, or
// unmeasured; medium the rest (a longer walk, a mission)
const diffOf = p => (p.places || p.kind === "dungeon" || p.ranges == null ? "hard" : p.kind === "walk" && p.ranges <= 6 && !p.loop ? "easy" : "medium");
const startName = p => (p.from ? AREAS[p.from]?.name || "?" : MISSIONS[p.area] ? "the mission" : "the dungeon");
const startLink = p => (p.from ? whereLink(p.from) : MISSIONS[p.area] ? `the mission ${whereLink(p.area)}` : `the dungeon ${whereLink(p.area)}`);
const rangesText = p => (p.ranges != null ? `${p.ranges} r` : p.kind === "mission" ? "not measured" : "");
// what else to know of a pick: a loop, a patrol, several places, a dungeon's level, the wiki's conditions
function pickNote(p) {
  return [p.loop && `walks a loop, ${LOOP_WAYS[p.loop] || p.loop}`, p.patrol && `${p.patrol} spots close together`, p.places && `one of ${p.places} places, all walked`,
    p.kind === "dungeon" && `level ${p.level}`, whenText(p.boss)].filter(Boolean).join(" · ");
}
const rows = ELITES.map(s => ({ s, picks: CAPS[s.id], best: CAPS[s.id][0], diff: diffOf(CAPS[s.id][0]) }));

/* ---------- the state, in the address ---------- */
const els = { prof: $("f-prof"), camp: $("f-camp"), diff: $("f-diff"), kind: $("f-kind"), sort: $("f-sort"), cap: $("f-cap"), count: $("count"), main: $("cap-main"), summary: $("cap-summary") };
const state = { view: "next", profs: new Set(), camps: new Set(), at: 0, later: new Set() };
els.prof.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(p => `<button class="prof-chip" data-v="${p}" aria-pressed="false" style="--c:${profVar(p)}" title="${PROFS[p]}">${PROFS[p]}</button>`).join("");
chipToggle(els.prof, state.profs, () => save());
els.camp.innerHTML = [0, 1, 2, 3].map(c => `<button class="prof-chip" data-v="${c}" aria-pressed="false" style="--c:var(${CAMP_COLOR[c]})">${CAMPAIGNS[c]}</button>`).join("");
chipToggle(els.camp, state.camps, () => save());
function read() {
  const a = args();
  state.view = ["next", "list"].includes(a.get("view")) ? a.get("view") : "next";
  // (the same Set the chips hold: refilled, never replaced)
  state.profs.clear(); for (const p of (a.get("prof") || "").split(",").filter(Boolean)) state.profs.add(p); syncChips(els.prof, state.profs);
  state.camps.clear(); for (const c of (a.get("camp") || "").split(",").filter(Boolean)) state.camps.add(c); syncChips(els.camp, state.camps);
  els.diff.value = a.get("diff") || ""; els.kind.value = a.get("kind") || ""; els.sort.value = a.get("sort") || "close";
  els.cap.checked = a.get("all") !== "1";
  state.at = +a.get("at") || 0;
}
const stateQuery = view => {
  const o = { view };
  if (state.profs.size) o.prof = [...state.profs].join(",");
  if (state.camps.size) o.camp = [...state.camps].join(",");
  for (const [k, v] of [["diff", els.diff.value], ["kind", els.kind.value]]) if (v) o[k] = v;
  if (els.sort.value !== "close") o.sort = els.sort.value;
  if (!els.cap.checked) o.all = "1";
  if (view === "next" && state.at) o.at = state.at;
  return query(o);
};
const save = (replace = true) => go(stateQuery(state.view), replace);
for (const el of [els.diff, els.kind, els.sort, els.cap]) el.addEventListener("change", () => { state.at = 0; save(); });
$("reset").addEventListener("click", () => { state.profs.clear(); state.camps.clear(); els.diff.value = els.kind.value = ""; els.sort.value = "close"; els.cap.checked = true; state.at = 0; save(); });

/* ---------- what's shown ---------- */
const shown = () => {
  const c = User.char(), got = new Set(c.elites);
  const list = rows.filter(r => (!state.profs.size || state.profs.has(String(r.s.profession)))
    && (!state.camps.size || state.camps.has(String(r.s.campaign)))
    && (!els.diff.value || r.diff === els.diff.value) && (!els.kind.value || r.best.kind === els.kind.value)
    && (!els.cap.checked || !got.has(r.s.id)));
  const far = p => (p.ranges == null ? 99 : p.ranges) + (p.kind === "walk" ? 0 : 50);
  const rank = { easy: 0, medium: 1, hard: 2 };
  const by = { close: (a, b) => far(a.best) - far(b.best) || cmpStr(a.s.name, b.s.name), name: (a, b) => cmpStr(a.s.name, b.s.name),
    hard: (a, b) => rank[b.diff] - rank[a.diff] || far(b.best) - far(a.best) || cmpStr(a.s.name, b.s.name),
    prof: (a, b) => a.s.profession - b.s.profession || cmpStr(a.s.name, b.s.name), area: (a, b) => cmpStr(areaName(a.best.area), areaName(b.best.area)) || far(a.best) - far(b.best) }[els.sort.value] || (() => 0);
  // (Later: put off for now, to the end)
  return list.sort((a, b) => (state.later.has(a.s.id) - state.later.has(b.s.id)) || by(a, b));
};

// the character and its Skill Hunter counts: Core elites count for all three campaigns
const ALL_ELITES = capturableElites();
const missingOf = c => { const got = new Set(c.elites); return ALL_ELITES.filter(id => !got.has(id)).length; };
const charKept = () => User.stored() != null && !User.broken();
// a character with every elite: nothing to capture, so none of the page; the other characters still at it instead
function doneHTML(c) {
  // (the wannabe GWAMMs still capturing; with none, the characters played as usual. Not the retired, hidden or pre-Searing)
  const o = User.data(), still = aim => o.chars.filter(x => x.id !== c.id && (x.aim || "") === aim && !x.hidden && !(x.modes || []).includes("presearing")).map(x => [x, missingOf(x)]).filter(([, n]) => n).sort((a, b) => a[1] - b[1]);
  const wb = still("gwamm"), others = wb.length ? wb : still("");
  return `<div class="cap-who cap-alldone"><img class="ip" src="${profImg(c.profession)}" alt=""> <b>${esc(c.name)}</b> has captured every elite: all ${ALL_ELITES.length} there are to capture, the three Skill Hunter titles done.</div>
    <div class="cap-done">${others.length ? `<p class="dim">${wb.length ? "Wannabe GWAMMs still capturing" : "Still capturing"}:</p> ${others.map(([x, n]) => `<a class="c-pill" href="captures${stateQuery(state.view)}" data-go="${x.id}"><img src="${profImg(x.profession || 0)}" alt="">${esc(x.name)}<span class="dim">${n} missing</span></a>`).join("")}` : `<p class="dim">No other character is after them.</p>`} <p><a href="characters">My Characters</a></p></div>`;
}
function summaryHTML() {
  const c = User.char(), got = new Set(c.elites), kept = charKept();
  const missing = missingOf(c);
  const hunter = SKILL_HUNTER.map(([camp, need, name]) => { const all = capturedIn(camp), n = all.filter(id => got.has(id)).length;
    return `<span class="lstat${n >= need ? " done" : ""}"><small>${name}</small><b>${n} <span class="dim">/ ${need}</span></b><small>${n >= need ? "Skill Hunter done" : `${need - n} more for Skill Hunter`}</small></span>`; }).join("");
  return `<div class="cap-who">${kept ? `<img class="ip" src="${profImg(c.profession)}" alt=""> <b>${esc(c.name)}</b> is missing <b>${missing}</b> of the ${new Set([1, 2, 3].flatMap(capturedIn)).size} elites` : `<b>No character picked</b>: every elite is listed. <a href="characters">My Characters</a> keeps what you've captured`}</div>
    <div class="lstats">${hunter}</div>`;
}

const diffTag = d => `<span class="tag cap-diff ${d}" title="${esc(DIFF[d][1])}">${DIFF[d][0]}</span>`;
const skillCell = s => `<a class="cap-skill" href="${HREF.skill(s.id)}"><img class="sk-ic" src="img/skills/${s.id}.jpg" alt="" loading="lazy"><span><b>${esc(s.name)}</b><small>${[PROFS[s.profession], ATTRIBUTES[s.attribute], s.campaign === 0 ? "Core" : ""].filter(Boolean).map(esc).join(" · ")}</small></span></a>`;
const pickLine = (p, k, n) => `${n > 1 ? `<span class="cap-n">#${k + 1}</span> ` : ""}${LINK.boss(p.boss)} <span class="dim">· ${whereLink(p.area)}${p.kind === "walk" ? ` · from ${startLink(p)}` : ` · in ${startLink(p).replace(/^the (mission|dungeon) /, "the $1 ")}`}${rangesText(p) ? ` · <span title="compass ranges, as our routes measure the walk">${rangesText(p)}</span>` : ""}${pickNote(p) ? ` · ${pickNote(p)}` : ""}</span>`;
// the first pick's map open; the other spots folded under "More options"
const mapsHTML = (s, picks) => `<div class="bmaps cap-maps">${picks.map((p, k) => `<section class="lbox bmap" data-sk="${s.id}" data-k="${k}"><h4>${pickLine(p, k, picks.length)}</h4><div class="nmap"></div><div class="nways"></div></section>`)
  .map((h, k) => k === 1 ? `<details class="bmore"><summary>More options: ${plural(picks.length - 1, "other spot")}</summary>${h}` : h).join("")}${picks.length > 1 ? "</details>" : ""}</div>`;
// the maps in a block, once on the page
function drawMaps(root) { for (const m of root.querySelectorAll(".bmap:not([data-drawn])")) { if (m.closest("details:not([open])")) continue; m.dataset.drawn = "1"; captureMap(m, CAPS[m.dataset.sk][+m.dataset.k], () => m.isConnected); } }
document.addEventListener("toggle", e => { if (e.target.matches?.(".bmore")) drawMaps(e.target); }, true);

/* ---------- Next: one elite at a time ---------- */
function nextHTML(list) {
  if (!list.length) return `<div class="empty">Nothing left here${els.cap.checked ? ": every elite that fits is captured" : ""}.</div>`;
  state.at = Math.min(state.at, list.length - 1);
  const r = list[state.at], s = r.s;
  return `<div class="cap-nav"><button type="button" class="chip" data-step="-1" title="Previous (←)">←</button><span class="dim">${state.at + 1} / ${list.length}</span><button type="button" class="chip" data-step="1" title="Next (→)">→</button>
      <span class="dim cap-keys">keys: ← → · c captured · l later</span></div>
    <div class="sp-head elite cap-card" style="--pc:${profVar(s.profession)}">
      <img class="sp-icon" src="img/skills/${s.id}.jpg" alt="" onerror="this.remove()">
      <div class="sp-title"><h2><a href="${HREF.skill(s.id)}">${esc(s.name)}</a>${diffTag(r.diff)}</h2><div class="sp-sub">${[PROFS[s.profession], ATTRIBUTES[s.attribute] || "", CAMPAIGNS[s.campaign]].filter(Boolean).map(esc).join(" · ")}</div>
        <p class="sp-desc dim">${richText(s.concise || s.description)}</p></div>
      <div class="cap-actions">${eliteTick(s.id, undefined, "Captured")}<button type="button" class="chip" data-later="${s.id}" title="Put it off: to the end of the list for now (l)">Later</button></div>
    </div>
    ${alsoHTML(list, r)}
    ${mapsHTML(s, r.picks)}`;
}
// the other elites shown whose best pick starts where this one's does: one trip for them all
function alsoHTML(list, r) {
  const p = r.best, same = list.filter(x => x !== r && x.best.from === p.from && (p.from || x.best.area === p.area));
  if (!same.length) return "";
  return `<p class="cap-also"><span class="dim">Also ${p.from ? `from ${esc(startName(p))}` : `in ${esc(areaName(p.area))}`}:</span> ${same.slice(0, 8).map(x => `<a href="#" data-jump="${x.s.id}"><img class="sk-ic sm" src="img/skills/${x.s.id}.jpg" alt="">${esc(x.s.name)}${x.best.ranges != null ? ` <small class="dim">${x.best.ranges} r</small>` : ""}</a>`).join(", ")}${same.length > 8 ? ` <span class="dim">and ${same.length - 8} more</span>` : ""}</p>`;
}

/* ---------- List and By outpost ---------- */
const rowHTML = r => `<tr data-id="${r.s.id}"><td>${skillCell(r.s)}</td><td class="cap-way"><div>${pickLine(r.best, 0, 1)}</div>${r.picks.length > 1 ? `<div class="dim">+ ${plural(r.picks.length - 1, "other spot")}, on the map</div>` : ""}</td>
  <td>${diffTag(r.diff)}</td><td class="cap-tick">${eliteTick(r.s.id, undefined, "Captured")}</td><td><button type="button" class="chip cap-map" data-map="${r.s.id}">map</button></td></tr>`;
const tableHTML = list => `<div class="cap-tablewrap"><table class="cap-table"><tbody>${list.map(rowHTML).join("")}</tbody></table></div>`;
function listHTML(list) { return list.length ? tableHTML(list) : `<div class="empty">Nothing here with these filters.</div>`; }

function render() {
  read();
  // (the tabs carry the filters along)
  for (const a of document.querySelectorAll(".cap-tabs a")) a.setAttribute("aria-current", a.dataset.view === state.view ? "page" : "false"), a.href = "captures" + stateQuery(a.dataset.view);
  const done = charKept() && !missingOf(User.char());
  for (const x of [$("filters"), document.querySelector(".cap-tabs"), els.main]) x.hidden = done;
  if (done) { els.summary.innerHTML = doneHTML(User.char()); return; }
  els.summary.innerHTML = summaryHTML();
  const list = shown();
  els.count.textContent = `${list.length} of ${rows.length}`;
  els.main.innerHTML = state.view === "next" ? nextHTML(list) : listHTML(list);
  if (state.view === "next") drawMaps(els.main);
}
onRoute(render);

addEventListener("userchange", render);
// a tick: the page follows (after the site's own handler has saved it); the list's map opens under its row
els.main.addEventListener("click", e => {
  const step = e.target.closest("[data-step]"), later = e.target.closest("[data-later]"), map = e.target.closest("[data-map]"), jump = e.target.closest("[data-jump]");
  if (jump) { e.preventDefault(); state.at = Math.max(0, shown().findIndex(x => x.s.id === +jump.dataset.jump)); return save(false); }
  if (e.target.closest(".utick")) return setTimeout(render, 0);
  if (step) { const n = shown().length; state.at = (state.at + +step.dataset.step + n) % n; return save(); }
  if (later) { state.later.add(+later.dataset.later); return render(); }
  if (map) {
    const tr = map.closest("tr"), open = tr.nextElementSibling?.classList.contains("cap-open");
    if (open) { tr.nextElementSibling.remove(); map.setAttribute("aria-pressed", "false"); return; }
    const r = rows.find(x => x.s.id === +map.dataset.map), row = document.createElement("tr"); row.className = "cap-open";
    row.innerHTML = `<td colspan="5">${mapsHTML(r.s, r.picks)}</td>`; tr.after(row); map.setAttribute("aria-pressed", "true"); drawMaps(row);
  }
});
document.addEventListener("keydown", e => {
  if (state.view !== "next" || e.target.matches?.("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
  const n = shown().length; if (!n) return;
  if (e.key === "ArrowRight") { state.at = (state.at + 1) % n; save(); }
  else if (e.key === "ArrowLeft") { state.at = (state.at + n - 1) % n; save(); }
  else if (e.key === "c") els.main.querySelector(".cap-actions .utick")?.click();
  else if (e.key === "l") els.main.querySelector("[data-later]")?.click();
});
render();
