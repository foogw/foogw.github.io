"use strict";
/* The Anniversary planner: for a year's Anniversary Celebration (its window, eventWindow in common.js), the Zaishen
   Missions of a list of easy ones: the last three of the list to come up before it starts, to take their quests ahead;
   the ones that come up while it runs, to wait for; the rest, to do on any day of it. The list is ours (ANNIV_DEFAULT, common.js)
   until changed, then the visitor's own, kept in this browser and in a backup (annivMissions): at the left, every
   region (data/anniversary.js: one Proof of Legend per region) with its missions, the wiki's quickest first, each ticked
   into the list or out of it; the Zaishen days around the year's event marked ZM everywhere. */
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
    return all ? `<span class="an-done" title="${n} of your ${all} character${all === 1 ? "" : "s"} can enter it: done once in NM or HM, so unlocked">${n}</span>` : ""; };
  const fmt = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  const ev = Object.values(EVENTS).find(e => e.name === "Anniversary Celebration"), r = ROTATIONS["zaishen-mission"];
  // the years to pick: two back to six ahead; the next Anniversary's picked at first
  const thisYear = new Date().getUTCFullYear(), YEARS = Array.from({ length: 9 }, (_, i) => thisYear - 2 + i);
  let year = Math.min(thisYear + 6, eventWindow(ev)[0].getUTCFullYear());
  const windowIn = y => eventWindow(ev, new Date(Date.UTC(y, 0, 1)));
  const nowAt = () => Date.now();
  // the foot of the side: the regions the list covers (one Proof of Legend per region, so a second mission in a region
  // adds none, though different characters may prefer different missions), and Reset once the list isn't ours
  function renderFoot() {
    const list = annivMissions(), covered = new Set(list.map(id => regionOf(id)?.name).filter(Boolean)).size;
    $("an-reset").hidden = isAnnivDefault(list);
    $("an-side-foot").innerHTML = `<b title="One Proof of Legend per region per character: a second mission in the same region adds no Proof, though another character may find it the easier one">${covered} of ${REGIONS_PL.length} regions</b> covered, ${list.length} mission${list.length === 1 ? "" : "s"}.${isAnnivDefault(list) ? " Our picks: tick others in or out, and the list is kept with your progress." : ""}`;
  }
  // the plan at the right for the year picked
  function renderPlan() {
    const list = annivMissions(), [a, b] = windowIn(year), ka = Rotation.period(r, +a), kb = Rotation.period(r, +b - 1);
    const day = k => ({ k, e: Rotation.entry(r, k), at: Rotation.startsAt(r, k) }), easy = d => list.includes(d.e.mission);
    // (take ahead: the last three of the list to come up before the event, however far back)
    const before = [];
    for (let k = ka - 1; before.length < 3 && k > ka - r.entries.length; k--) if (easy(day(k))) before.unshift(day(k));
    const during = [];
    for (let k = ka; k <= kb; k++) if (easy(day(k))) during.push(day(k));
    $("an-year").innerHTML = YEARS.map(y => `<option value="${y}"${y === year ? " selected" : ""}>${y}</option>`).join("");
    const now = nowAt();
    $("an-when").textContent = `${fmt.format(a)} to ${fmt.format(b)}${a <= now && now < b ? " (on now)" : b <= now ? " (past)" : ""}`;
    // the days said two ways. Live, from a week before the first take-ahead day to a week after the event:
    // "in 3 days", "next", "current", "one day ago", "2 days ago"; a day that has passed moves its mission down to the
    // any-time section, its day still said. Otherwise, by the event: "12 days before", "day 5"
    const DAY = 864e5, dayOf = t => Math.floor(t / DAY), live = before.length && now >= before[0].at - 7 * DAY && now <= +b + 7 * DAY;
    const said = t => {
      if (live) { const n = dayOf(t) - dayOf(now); return n === 0 ? "current" : n === 1 ? "next" : n === -1 ? "one day ago" : n > 0 ? `in ${n} days` : `${-n} days ago`; }
      if (t < a) { const n = Math.round((+a - t) / DAY); return n === 1 ? "the day before" : `${n} days before`; }
      return `day ${dayOf(t) - dayOf(+a) + 1}`;
    };
    // (the day itself in the site's own hover card, at once; today's row stands out)
    const row = d => `<tr${live && dayOf(d.at) === dayOf(now) ? ' class="an-today"' : ""}><td>${LINK.mission(d.e.mission)}${zmHTML(d.e.mission)}${regionHTML(d.e.mission)}</td><td class="dim an-away" data-note="${fmt.format(d.at)}" data-plain tabindex="0">${said(d.at)}</td><td class="dim">${doneHTML(d.e.mission)}</td></tr>`;
    const passed = d => live && dayOf(d.at) < dayOf(now);
    const ahead = ds => ds.filter(d => !passed(d)).map(row).join("");
    // (the any-time section: the missions with no day around the event, and, live, the ones whose day has passed)
    const gone = [...before, ...during].filter(passed);
    const rest = [...list.filter(id => ![...before, ...during].some(d => d.e.mission === id)).map(id => `<tr><td colspan="2">${LINK.mission(id)}${zmHTML(id)}${regionHTML(id)}</td><td class="dim">${doneHTML(id)}</td></tr>`),
      ...gone.map(row)].join("");
    // (a section only when it has rows; nothing picked: a word to the boxes)
    const section = (title, sub, body) => (body ? `<tr><th colspan="3">${title}<small>${sub}</small></th></tr>${body}` : "");
    const sections = section("The last 3 ZMs before the event", "Take their quests ahead", ahead(before))
      + section(`No ZM around the event${gone.length ? ", or its ZM passed" : ""}`, "Do these any time during it", rest)
      + section("ZMs during the event", "Wait for them", ahead(during));
    $("an-plan").innerHTML = sections ? `<table class="an-t"><tbody>${sections}</tbody>
      ${chars().length ? `<tfoot><tr><td colspan="2" class="dim">Total characters with the mission unlocked</td><td class="dim" title="How many runs the list offers you during the event, if every character did every mission it can enter">${list.reduce((n, id) => n + doneBy(id), 0)}</td></tr></tfoot>` : ""}</table>`
      : `<p class="dim">Nothing picked: turn missions on in the boxes at the left.</p>`;
  }
  // the side: a block per region, its missions with the wiki's quickest first, each ticked when in the list (the tick
  // adds or takes out); a region with none in the list is dimmed
  // ZM, raised, on a mission whose Zaishen day falls during the year's event, or that is one of the last three of the
  // list to come up before it (their quests keep for it): on the buttons and in the plan alike
  let zm = new Map(), zmStart = 0;
  function findZM() {
    const list = annivMissions(), [a, b] = windowIn(year), ka = Rotation.period(r, +a), kb = Rotation.period(r, +b - 1);
    zm = new Map(); zmStart = +a;
    for (let k = ka; k <= kb; k++) { const d = Rotation.entry(r, k); if (!zm.has(d.mission)) zm.set(d.mission, Rotation.startsAt(r, k)); }
    let n = 0;
    for (let k = ka - 1; n < 3 && k > ka - r.entries.length; k--) { const d = Rotation.entry(r, k); if (list.includes(d.mission)) { n++; if (!zm.has(d.mission)) zm.set(d.mission, Rotation.startsAt(r, k)); } }
  }
  const zmHTML = id => (zm.has(id) ? `<sup class="an-zm" title="Zaishen Mission ${fmt.format(zm.get(id))}, ${zm.get(id) < zmStart ? "one of the last three before the event: its quest keeps for it" : "during the event"}">ZM</sup>` : "");
  function renderRegions() {
    const list = annivMissions();
    // (the region's name with the wiki's quickest under it, the hover saying so; the others beside, in two columns)
    // (each mission a button, on when in the list, styled as the NM / HM ticks are, but its own class: the shared tick
    // handler must not take its clicks)
    // (ZM raised on a mission with a Zaishen day around the event; on, it fills green, the others yellow)
    const line = (id, quick) => `<button type="button" class="an-rm ${zm.has(id) ? "an-zmy" : "an-zmn"}${quick ? " an-q" : ""}" data-toggle="${id}" aria-pressed="${list.includes(id)}" title="${zm.has(id) ? `Zaishen Mission ${fmt.format(zm.get(id))}, ${zm.get(id) < zmStart ? "one of the last three before the event: its quest keeps for it" : "during the event"}. ` : "No Zaishen day during the event. "}${quick ? "The wiki's pick, the least time taken. " : ""}${list.includes(id) ? "In the list: click to take it out" : "Click to add it to the list"}">${esc(missionShort(MISSIONS[id]))}${zmHTML(id)}</button>`;
    // (a box per region: its name, the quickest, the others; a column of boxes per campaign, the Eye of the North the fourth)
    const box = g => `<div class="an-rg"><h3${g.missions.some(id => list.includes(id)) ? "" : ' class="none" title="None of its missions in the list: no Proof of Legend from it"'}>${esc(g.name)}</h3>${[g.quick, ...g.missions.filter(id => id !== g.quick)].map(id => line(id, id === g.quick)).join("")}</div>`;
    $("an-regions").innerHTML = `<div class="an-camps">${[1, 2, 3, 4].map(camp => `<div class="an-camp an-camp-${camp}">${REGIONS_PL.filter(g => g.campaign === camp).map(box).join("")}</div>`).join("")}</div>`;
  }
  // the lead: the next event, coming in so long or on now with so long left, and what the planner syncs
  function renderLead() {
    const now = nowAt(), [a, b] = eventWindow(ev, new Date(now));
    const when = a <= now ? `<b>on now</b>, for ${eventAway(b - now).replace(/^in /, "")} more` : `<b>coming ${eventAway(a - now)}</b>`;
    $("an-lead").innerHTML = `The Anniversary Celebration is ${when}. Pick your missions, one per region; the plan at the right lines them up with the
      Zaishen Mission rotation: the ones that come up just before the event, to take their quests ahead, the ones during it, to wait for,
      and the rest, for any day of it.`;
  }
  const render = () => { findZM(); renderLead(); renderFoot(); renderPlan(); renderRegions(); };
  $("an-year").addEventListener("change", e => { year = +e.target.value; render(); });
  document.addEventListener("click", e => {
    const tg = e.target.closest("[data-toggle]");
    if (tg) { const id = +tg.dataset.toggle, list = annivMissions(); setAnnivMissions(list.includes(id) ? list.filter(x => x !== id) : [...list, id]); return render(); }
  });
  // (Reset, held for two seconds: our list again)
  holdToAct($("an-reset"), () => { setAnnivMissions(null); render(); });
  if (ev && r) render();
  else $("an-plan").innerHTML = `<p class="dim">The calendar has no Anniversary Celebration or Zaishen Mission rotation to plan with.</p>`;
}
