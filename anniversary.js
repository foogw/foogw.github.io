"use strict";
/* The Anniversary planner: for a year's Anniversary Celebration (its window, eventWindow in common.js), the Zaishen
   Missions of a list of easy ones: the three last to come up before it starts, to take their quests ahead; the ones that
   come up while it runs, to wait for; the rest, to do on any day of it. The list, at the left, is ours (ANNIV_DEFAULT,
   common.js) until changed: a mission taken out with its ×, one added from the search under it (the Zaishen Mission
   rotation's missions, by name); then it's the visitor's own, kept in this browser and in a backup (annivMissions). Each mission
   with its region (data/anniversary.js: one Proof of Legend per region), and a Regions view: every region's missions, the
   ones in the list ticked (a tick adds or takes out), the wiki's quickest marked. */
{
  const REGIONS_PL = data("GW_ANNIVERSARY")?.regions || [];
  const regionOf = id => REGIONS_PL.find(g => g.missions.includes(id));
  // under a mission: its region, and how many of the characters can enter it (done once in either mode: unlocked for them)
  const chars = () => (User.broken() ? [] : User.data().chars);
  const doneBy = id => chars().filter(c => (c.missions[id] || 0) & 3).length;
  // (a region the list has twice or more: marked, since a second mission there brings no second Proof)
  const regionHTML = id => { const g = regionOf(id); if (!g) return "";
    const n = annivMissions().filter(x => regionOf(x) === g).length;
    return ` <span class="an-reg${n > 1 ? " an-twice" : ""}"${n > 1 ? ` title="${n} missions of the list are in ${esc(g.name)}: one Proof of Legend for all of them"` : ""}>– ${esc(g.name)}${n > 1 ? ` <b>×${n}</b>` : ""}</span>`; };
  const doneHTML = id => { const n = doneBy(id), all = chars().length;
    return all ? `<span class="an-done" title="${n} of your ${all} character${all === 1 ? "" : "s"} can enter it: done once in NM or HM, so unlocked">${n ? `${n} char${n === 1 ? "" : "s"}` : "no char"}</span>` : ""; };
  const fmt = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  const ev = Object.values(EVENTS).find(e => e.name === "Anniversary Celebration"), r = ROTATIONS["zaishen-mission"];
  // the missions the Zaishen Mission rotation has, to pick from, by name
  const inRotation = [...new Set(r.entries.map(e => e.mission))].filter(id => MISSIONS[id]).sort((a, b) => cmpStr(MISSIONS[a].name, MISSIONS[b].name));
  // the years to pick: two back to six ahead; the next Anniversary's picked at first
  const thisYear = new Date().getUTCFullYear(), YEARS = Array.from({ length: 9 }, (_, i) => thisYear - 2 + i);
  let year = Math.min(thisYear + 6, eventWindow(ev)[0].getUTCFullYear());
  const windowIn = y => eventWindow(ev, new Date(Date.UTC(y, 0, 1)));
  // the list at the left: the missions in the rotation's order of the year picked, each with its ×; the search box
  function renderList() {
    const list = annivMissions();
    $("an-list").innerHTML = list.length ? list.map(id => `<li><a href="${HREF.mission(id)}">${esc(MISSIONS[id]?.name || `#${id}`)}${regionHTML(id)}</a><button type="button" class="an-x" data-drop="${id}" aria-label="Take ${esc(MISSIONS[id]?.name || "")} out" title="Take it out">×</button></li>`).join("")
      : `<li class="an-empty dim">No missions: add some below.</li>`;
    $("an-reset").hidden = isAnnivDefault(list);
    // (the regions the list covers: one Proof of Legend per region, so a second mission in a region adds none, though
    // different characters may prefer different missions)
    const covered = new Set(list.map(id => regionOf(id)?.name).filter(Boolean)).size;
    $("an-side-foot").innerHTML = `<b title="One Proof of Legend per region per character: a second mission in the same region adds no Proof, though another character may find it the easier one">${covered} of ${REGIONS_PL.length} regions</b> covered.${isAnnivDefault(list) ? " Our list of the easy ones: take any out, or add your own, and it's kept with your progress." : ""}`;
  }
  // the search: the rotation's missions not in the list whose name has the letters typed, the first marked (Enter adds it)
  let hit = 0;
  function renderHits() {
    const q = $("an-find").value.trim().toLowerCase(), list = annivMissions();
    if (!q) { $("an-hits").hidden = true; return; }
    const found = inRotation.filter(id => !list.includes(id) && MISSIONS[id].name.toLowerCase().includes(q)).slice(0, 12);
    hit = Math.min(hit, Math.max(0, found.length - 1));
    $("an-hits").hidden = false;
    $("an-hits").innerHTML = found.length ? found.map((id, i) => `<li${i === hit ? ' class="hit"' : ""}><button type="button" data-add="${id}">${esc(MISSIONS[id].name)} <span class="an-reg">${esc(regionOf(id)?.name || "")}</span></button></li>`).join("")
      : `<li class="dim">No Zaishen Mission by that name${list.length ? " that isn't in the list" : ""}</li>`;
  }
  // the plan at the right for the year picked
  function renderPlan() {
    const list = annivMissions(), [a, b] = windowIn(year), ka = Rotation.period(r, +a), kb = Rotation.period(r, +b - 1);
    const day = k => ({ k, e: Rotation.entry(r, k), at: Rotation.startsAt(r, k) }), easy = d => list.includes(d.e.mission);
    const before = [];
    for (let k = ka - 1; before.length < 3 && k > ka - r.entries.length; k--) if (easy(day(k))) before.unshift(day(k));
    const during = [];
    for (let k = ka; k <= kb; k++) if (easy(day(k))) during.push(day(k));
    $("an-year").innerHTML = YEARS.map(y => `<option value="${y}"${y === year ? " selected" : ""}>${y}</option>`).join("");
    const now = Date.now();
    $("an-when").textContent = `${fmt.format(a)} to ${fmt.format(b)}${a <= now && now < b ? " (on now)" : b <= now ? " (past)" : ""}`;
    // (the mission first, then its day)
    // (a day ahead: how far, "in 20 days"; past: how long ago)
    const away = t => { const ms = t - Date.now(); return ms >= 0 ? eventAway(ms) : `${eventAway(-ms).replace(/^in /, "")} ago`; };
    const rows = ds => ds.map(d => `<tr><td>${LINK.mission(d.e.mission)}${regionHTML(d.e.mission)}</td><td class="dim">${fmt.format(d.at)} <span class="an-away">${away(d.at)}</span></td><td class="dim">${doneHTML(d.e.mission)}</td></tr>`).join("");
    const rest = list.filter(id => ![...before, ...during].some(d => d.e.mission === id));
    $("an-plan").innerHTML = list.length ? `<table class="an-t"><tbody><tr><th colspan="3">Take these Zaishen quests ahead of time</th></tr>${rows(before) || '<tr><td colspan="3" class="dim">None in the cycle before it</td></tr>'}
      <tr><th colspan="3">Do these any time during the event</th></tr>${rest.map(id => `<tr><td colspan="2">${LINK.mission(id)}${regionHTML(id)}</td><td class="dim">${doneHTML(id)}</td></tr>`).join("") || '<tr><td colspan="3" class="dim">None: every one of the list comes up before or during it</td></tr>'}
      <tr><th colspan="3">Wait for these Zaishen quests</th></tr>${rows(during) || '<tr><td colspan="3" class="dim">None while it runs</td></tr>'}</tbody>
      ${chars().length ? `<tfoot><tr><td colspan="2" class="dim">Runs open to you, in all</td><td class="dim" title="The characters that can enter each mission, summed up: the potential, not what's been done">${list.reduce((n, id) => n + doneBy(id), 0)}</td></tr></tfoot>` : ""}</table>`
      : `<p class="dim">No missions in the list: add some at the left.</p>`;
  }
  // the Regions view: a row per region, the wiki's quickest mission in its own column, the others as alternatives in
  // story order, each ticked when in the list (the tick adds or takes out); a region with none in the list stands out
  // (ZM, raised, on a mission whose Zaishen day falls in the two weeks before the year's event or during it: its quest
  // can be taken for the event)
  const ZM_AHEAD = 14;
  function renderRegions() {
    const list = annivMissions(), [a, b] = windowIn(year), ka = Rotation.period(r, +a), kb = Rotation.period(r, +b - 1), zm = new Map();
    for (let k = ka - ZM_AHEAD; k <= kb; k++) { const d = Rotation.entry(r, k); if (!zm.has(d.mission)) zm.set(d.mission, Rotation.startsAt(r, k)); }
    const cell = id => `<span class="an-rm"><button type="button" class="an-in" data-toggle="${id}" aria-pressed="${list.includes(id)}" aria-label="${list.includes(id) ? "Take out" : "Add"} ${esc(MISSIONS[id].name)}" title="${list.includes(id) ? "In the list: take it out" : "Add it to the list"}">${list.includes(id) ? "✓" : ""}</button>${LINK.mission(id)}${zm.has(id) ? `<sup class="an-zm" title="Zaishen Mission ${fmt.format(zm.get(id))}, ${zm.get(id) < a ? "before the event: its quest keeps for it" : "during the event"}">ZM</sup>` : ""}</span>`;
    $("an-regions").innerHTML = `<table class="an-rt"><thead><tr><th>Region</th><th>Quickest</th><th>Alternatives</th></tr></thead><tbody>${REGIONS_PL.map(g =>
      `<tr><td${g.missions.some(id => list.includes(id)) ? "" : ' class="dim" title="None of its missions in the list: no Proof of Legend from it"'}>${esc(g.name)}</td><td>${cell(g.quick)}</td><td>${g.missions.filter(id => id !== g.quick).map(cell).join("")}</td></tr>`).join("")}</tbody></table>`;
  }
  // the view shown, kept in this browser across reloads
  const VIEW_KEY = "gw-anniv-view";
  let view = (() => { try { return localStorage.getItem(VIEW_KEY) === "regions" ? "regions" : "plan"; } catch { return "plan"; } })();
  const showView = () => { try { localStorage.setItem(VIEW_KEY, view); } catch { /* storage blocked */ } $("an-plan").hidden = view !== "plan"; $("an-regions").hidden = view !== "regions"; $("an-year-l").hidden = $("an-when").hidden = view !== "plan";
    for (const b of document.querySelectorAll(".an-tabs [data-view]")) b.setAttribute("aria-selected", b.dataset.view === view); };
  const render = () => { renderList(); renderHits(); renderPlan(); renderRegions(); showView(); };
  const add = id => { setAnnivMissions([...annivMissions(), id]); $("an-find").value = ""; hit = 0; render(); $("an-find").focus(); };
  $("an-year").addEventListener("change", e => { year = +e.target.value; renderPlan(); renderRegions(); });
  $("an-find").addEventListener("input", () => { hit = 0; renderHits(); });
  $("an-find").addEventListener("keydown", e => {
    const found = [...$("an-hits").querySelectorAll("[data-add]")];
    if (e.key === "Enter" && found[hit]) { e.preventDefault(); add(+found[hit].dataset.add); }
    else if (e.key === "ArrowDown" && found.length) { e.preventDefault(); hit = (hit + 1) % found.length; renderHits(); }
    else if (e.key === "ArrowUp" && found.length) { e.preventDefault(); hit = (hit + found.length - 1) % found.length; renderHits(); }
    else if (e.key === "Escape") { $("an-find").value = ""; renderHits(); }
  });
  document.addEventListener("click", e => {
    const drop = e.target.closest("[data-drop]"), addB = e.target.closest("[data-add]"), tg = e.target.closest("[data-toggle]"), tab = e.target.closest("[data-view]");
    if (drop) { setAnnivMissions(annivMissions().filter(id => id !== +drop.dataset.drop)); return render(); }
    if (addB) return add(+addB.dataset.add);
    if (tg) { const id = +tg.dataset.toggle, list = annivMissions(); setAnnivMissions(list.includes(id) ? list.filter(x => x !== id) : [...list, id]); return render(); }
    if (tab) { view = tab.dataset.view; return showView(); }
  });
  // (Reset, held for two seconds: our list again)
  holdToAct($("an-reset"), () => { setAnnivMissions(null); render(); });
  if (ev && r) render();
  else $("an-plan").innerHTML = `<p class="dim">The calendar has no Anniversary Celebration or Zaishen Mission rotation to plan with.</p>`;
}
