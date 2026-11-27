"use strict";
/* Nicholas the Traveler's page (nicholas): this week's item and spot, or the week picked (?nick=<entry>), his map with
   the ways to him (nicholas.js), and his whole rotation as a table to search, from this week on, each week with when
   he is there next. */
{
  const $find = $("find"), n = NICK.entries.length;
  const weekOf = () => Rotation.period(NICK);  // (the rotation's week count now)
  const idx = k => ((k % n) + n) % n;
  const cur = () => idx(weekOf());
  // the weeks from now until entry i comes up (0: this week)
  const weeksUntil = i => idx(i - cur());
  const dateOf = k => new Date(Rotation.startsAt(NICK, k)).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  const whenText = i => { const w = weeksUntil(i); return w === 0 ? "this week" : w === 1 ? "next week" : `in ${w} weeks`; };
  const daysLeft = () => Math.max(1, Math.ceil((Rotation.endsAt(NICK) - Date.now()) / 864e5));
  const itemText = e => `${e.count} ${esc(e.item)}`;
  const where = e => `${LINK.area(e.area)}${regionOf(AREAS[e.area]) ? `, ${esc(regionOf(AREAS[e.area]).name)}` : ""}`;

  // the picked week: ?nick=<entry>, else this week
  const picked = () => { const p = args(), i = +p.get("nick"); return p.has("nick") && NICK.entries[i] ? i : cur(); };

  function nowHTML(i) {
    const e = NICK.entries[i], c = cur(), nx = NICK.entries[idx(c + 1)], d = daysLeft();
    if (i === c) return `<b>This week</b> he wants ${itemText(e)} and stands in ${where(e)}; he moves on in ${d} day${d === 1 ? "" : "s"}. Next week: <a href="nicholas?nick=${idx(c + 1)}">${itemText(nx)}</a>, ${esc(areaName(nx.area))}.`;
    const w = weeksUntil(i);
    return `<b>${whenText(i)[0].toUpperCase()}${whenText(i).slice(1)}</b>, from ${dateOf(weekOf() + w)}: ${itemText(e)} in ${where(e)}. <a class="dim nk-back" href="nicholas">Back to the present</a>`;
  }
  // his rotation from this week on; a search narrows it by item or area
  function tableHTML(sel) {
    const q = $find.value.trim().toLowerCase(), c = cur();
    const rows = [];
    for (let w = 0; w < n; w++) {
      const i = idx(c + w), e = NICK.entries[i];
      if (q && !e.item.toLowerCase().includes(q) && !areaName(e.area).toLowerCase().includes(q)) continue;
      rows.push(`<tr class="nk-row${i === c ? " cur" : ""}${i === sel ? " sel" : ""}" data-nick="${i}"><th>${whenText(i)}</th><td class="dim">${dateOf(weekOf() + w)}</td>
        <td><a href="nicholas?nick=${i}">${itemText(e)}</a>${e.at ? "" : ' <span class="dim" title="His spot that week isn\'t placed on the map yet">(no map yet)</span>'}</td>
        <td>${where(e)}</td></tr>`);
    }
    $("nk-count").textContent = q ? `${rows.length} of ${n} weeks` : `${n} weeks`;
    return `<thead><tr><th>When</th><th>From</th><th>He wants</th><th>Where he stands</th></tr></thead><tbody>${rows.join("") || `<tr><td colspan="4" class="dim">Nothing of his matches.</td></tr>`}</tbody>`;
  }
  function show() {
    const i = picked();
    $("nk-now").innerHTML = nowHTML(i);
    if (+$("nk-map").dataset.nick !== i || !$("nk-map").firstChild) nickMap($("nk-map"), i);
    // (the table drawn once; a week picked just moves the mark, so the page stays where it is)
    if (!$("nk-table").firstChild) $("nk-table").innerHTML = tableHTML(i);
    else for (const r of $("nk-table").querySelectorAll("tr[data-nick]")) r.classList.toggle("sel", +r.dataset.nick === i);
    document.title = i === cur() ? "GW Nicholas the Traveler" : `${NICK.entries[i].item} · Nicholas the Traveler`;
  }
  // a click anywhere on a week's row shows it (its links still go where they go)
  $("nk-table").addEventListener("click", e => { const r = e.target.closest("tr[data-nick]"); if (!r || e.target.closest("a") || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return; go(`?nick=${r.dataset.nick}`); });
  $find.addEventListener("input", () => { $("nk-table").innerHTML = tableHTML(picked()); });
  searchKeys($find, () => { $("nk-table").innerHTML = tableHTML(picked()); });
  show();
  onRoute(show);
  setInterval(() => { $("nk-now").innerHTML = nowHTML(picked()); }, 60000);
}
