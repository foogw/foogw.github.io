"use strict";

const STORYLINES = QUESTDATA.storylines;
const CAMPS = STORYLINES.map(s => s.campaign);
// a step of a story: a mission ("m28") or a quest ("q100023")
const key = n => (n.mission != null ? `m${n.mission}` : `q${n.quest}`);
const stepOf = k => (k[0] === "m" ? { mission: MISSIONS[k.slice(1)] || LOCATIONS[k.slice(1)] } : { quest: QUESTS[k.slice(1)] });
const stepName = k => { const s = stepOf(k); return (s.mission || s.quest)?.name || ""; };
const allSteps = s => [...(s.nodes || []), ...(s.parts || []).flatMap(p => p.steps)];
const MIN_W = 104, MAX_W = 230, NODE_H = 44, GAP_X = 10, GAP_Y = 30;
const state = { camp: CAMPS[0], sel: null };

/* ---------- helpers ---------- */
const storyline = () => STORYLINES.find(s => s.campaign === state.camp);
const NODE = new Map();  // step key -> its node (kind, note) in the current storyline
const edgesOf = s => (s.edges || []).map(([a, b, inferred]) => ({ from: key(a), to: key(b), inferred }));
const neighbours = k => {
  const es = edgesOf(storyline());
  return { prev: es.filter(e => e.to === k).map(e => e.from), next: es.filter(e => e.from === k).map(e => e.to) };
};
const stepHeroes = k => { const s = stepOf(k); return ((s.mission || s.quest)?.hero || []).map(i => HEROES[i]).filter(Boolean); };
const heroBadge = (k, style = "") => {
  const hs = stepHeroes(k);
  return hs.length ? `<span class="qn-hero" style="${style}" title="Required hero: ${esc(hs.map(h => h.name).join(" and "))}">${hs.map(h =>
    `<img src="${profImg(h.profession)}" alt="">${esc(h.name.split(" ")[0])}`).join(" + ")}</span>` : "";
};
const questProfs = q => [...new Set((q.skills || []).map(id => SKILLS[id]?.profession))].filter(p => p);
const stepLink = k => { const s = stepOf(k); return s.quest ? LINK.quest(s.quest.id) : s.mission ? whereLink(s.mission.id) : ""; };

/* ---------- layout ----------
   Rows follow the story (rank) and the width is fixed to the container. Each row's steps form one evenly spaced
   group, ordered by where the steps they follow sit and centred under them; a row with more steps than fit wraps. */
function layout(s, avail) {
  const nodes = s.nodes.map(n => ({ id: key(n), rank: n.rank, kind: n.kind }));
  const widest = Math.max(1, ...Object.values(nodes.reduce((n, x) => ((n[x.rank] = (n[x.rank] || 0) + 1), n), {})));
  const fit = Math.max(1, Math.floor((avail + GAP_X) / (MIN_W + GAP_X)));
  const cols = Math.max(3, Math.min(fit, Math.max(widest, Math.floor((avail + GAP_X) / (180 + GAP_X)))));
  const w = Math.min(MAX_W, Math.floor((avail - (cols - 1) * GAP_X) / cols)), step = w + GAP_X, middle = avail / 2;
  const preds = new Map(), succs = new Map();
  for (const e of edgesOf(s)) {
    (preds.get(e.to) || preds.set(e.to, []).get(e.to)).push(e.from);
    (succs.get(e.from) || succs.set(e.from, []).get(e.from)).push(e.to);
  }
  const rows = [];
  for (const n of nodes) (rows[n.rank] ||= []).push(n.id);
  for (let i = 0; i < rows.length; i++) rows[i] ||= [];
  const cx = new Map();
  const mean = ids => { const v = (ids || []).filter(i => cx.has(i)).map(i => cx.get(i)); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
  let lines = [];
  for (let pass = 0; pass < 2; pass++) {
    lines = [];
    for (const row of rows) {
      // side branches (attribute quests, and optional steps that lead nowhere) go beside what they follow
      const deadEnd = id => !succs.has(id) && (preds.get(id) || []).some(p => succs.get(p).length > 1);
      const side = row.filter(id => NODE.get(id)?.kind === "attribute" || deadEnd(id));
      const want = row.filter(id => !side.includes(id)).map(id => ({ id, at: mean(preds.get(id)) ?? (pass ? mean(succs.get(id)) : null) ?? middle }));
      want.sort((a, b) => a.at - b.at || cmpStr(stepName(a.id), stepName(b.id)));
      for (let i = 0; i < Math.max(want.length, 1); i += cols) {
        const group = want.slice(i, i + cols), span = (group.length - 1) * step;
        const target = group.length ? group.reduce((t, g) => t + g.at, 0) / group.length : middle;
        const first = Math.min(Math.max(target - span / 2, w / 2), avail - w / 2 - span);
        const line = group.map((g, k) => [g.id, first + k * step]);
        if (i + cols >= want.length) for (const id of side) {
          const taken = line.map(([, x]) => x);
          const fromSide = (preds.get(id) || []).some(p => NODE.get(p)?.kind === "attribute");
          let x = (mean(preds.get(id)) ?? middle) + (fromSide ? 0 : step);
          while (taken.some(o => Math.abs(o - x) < step - 1)) x += step;
          line.push([id, Math.min(x, avail - w / 2)]);
        }
        for (const [id, x] of line) cx.set(id, x);
        if (line.length) lines.push(line);
      }
    }
  }
  const placed = new Map();
  let y = 0;
  for (const line of lines) {
    for (const [id, x] of line) placed.set(id, { id, x: x - w / 2, y, w, h: NODE_H });
    y += NODE_H + GAP_Y;
  }
  return { placed, width: avail, height: y };
}

/* ---------- rendering ---------- */
function nodeHTML(p) {
  const s = stepOf(p.id), n = NODE.get(p.id) || {}, attr = n.kind === "attribute";
  const cls = attr ? "attribute" : s.mission ? "mission" : "primary";
  const givesAttr = attr && (s.quest?.rewards || []).some(r => /Attribute point/.test(r));
  const sub = attr ? [givesAttr ? "+15 attribute points" : "Unlocks an attribute quest", n.note].filter(Boolean).join(" · ")
    : s.mission ? `Mission ${MISSIONS[s.mission.id]?.label ?? ""}` : questRegion(s.quest || {})?.name || "";
  return `<button class="qn ${cls}${p.w < 160 ? " narrow" : ""}${state.sel === p.id ? " sel" : ""}" data-id="${p.id}" title="${esc(stepName(p.id))}" style="left:${p.x}px;top:${p.y}px;width:${p.w}px;height:${NODE_H}px">
    <span class="qn-t">${esc(stepName(p.id))}</span><span class="qn-s">${esc(sub)}</span></button>`
    + heroBadge(p.id, `left:${p.x + p.w - 8}px;top:${p.y - 9}px;right:auto;transform:translateX(-100%)`);
}
function edgePath(a, b) {
  const x1 = a.x + a.w / 2, y1 = a.y + a.h, x2 = b.x + b.w / 2, y2 = b.y, dy = Math.max(14, (y2 - y1) / 2);
  return `M${x1},${y1} C${x1},${y1 + dy} ${x2},${y2 - dy} ${x2},${y2}`;
}
/* Eye of the North: the opening steps, one column per storyline, then the steps after they converge. */
function renderParts(s) {
  const box = n => {
    const k = key(n), m = n.mission != null;
    return `<button class="eotn-step${m ? " mission" : ""}${state.sel === k ? " sel" : ""}" data-id="${k}" title="${esc(stepName(k))}">
      <span class="qn-t">${esc(stepName(k))}</span><span class="qn-s">${m ? "Mission" : esc(questRegion(QUESTS[n.quest] || {})?.name || "")}</span>${heroBadge(k)}</button>`;
  };
  const list = part => {
    const rows = [];
    for (const n of part.steps) {
      if (rows.length && rows.at(-1)[0].row === n.row) rows.at(-1).push(n); else rows.push([n]);
    }
    return `<div class="eotn-part"><h4>${esc(part.part)}</h4><ol>${rows.map(r => `<li class="eotn-row">${r.map(box).join("")}</li>`).join("")}</ol></div>`;
  };
  const named = n => s.parts.find(p => p.part === n), parallel = s.parts.filter(p => p.part !== "Start" && p.part !== "All together");
  const join = '<div class="eotn-join" aria-hidden="true">↓</div>';
  $("canvas").style.width = $("canvas").style.height = "";
  $("canvas").innerHTML = `<div class="eotn">
    ${named("Start") ? `<div class="eotn-wide">${list(named("Start"))}</div>${join}` : ""}
    <div class="eotn-parallel">${parallel.map(list).join("")}</div>
    ${named("All together") ? `${join}<div class="eotn-final">${list(named("All together"))}</div>` : ""}</div>`;
  // join each row to the next; several steps on a row merge into (or fan out from) the next one
  for (const ol of $("canvas").querySelectorAll(".eotn-part ol")) {
    const o = ol.getBoundingClientRect();
    const rect = el => { const r = el.getBoundingClientRect(); return { x: r.left - o.left, y: r.top - o.top, w: r.width, h: r.height }; };
    const rows = [...ol.children].map(li => [...li.querySelectorAll(".eotn-step")].map(rect));
    let svg = "";
    for (let i = 1; i < rows.length; i++) for (const a of rows[i - 1]) for (const b of rows[i]) svg += `<path d="${edgePath(a, b)}"/>`;
    ol.insertAdjacentHTML("afterbegin", `<svg class="eotn-links" aria-hidden="true">${svg}</svg>`);
  }
}
function render() {
  const s = storyline();
  NODE.clear();
  for (const n of allSteps(s)) NODE.set(key(n), n);
  $("legend-hero").hidden = ![...NODE.keys()].some(k => stepHeroes(k).length);
  $("legend-attr").hidden = !(s.nodes || []).some(n => n.kind === "attribute");
  $("legend-inferred").hidden = !(s.edges || []).some(e => e[2]);
  if (s.parts) { renderParts(s); writeArgs(); return; }
  const { placed, width, height } = layout(s, $("canvas").parentElement.clientWidth - 32);
  let svg = "";
  for (const e of edgesOf(s)) {
    const a = placed.get(e.from), b = placed.get(e.to);
    if (a && b) svg += `<path d="${edgePath(a, b)}" class="${e.inferred ? "inferred" : ""}${NODE.get(e.to)?.kind === "attribute" ? " attr" : ""}"/>`;
  }
  $("canvas").style.width = width + "px";
  $("canvas").style.height = height + "px";
  $("canvas").innerHTML = `<svg width="${width}" height="${height}">${svg}</svg>` + [...placed.values()].map(nodeHTML).join("");
  writeArgs();
}

function rewardsHTML(q) {
  const parts = [q.xp && `${q.xp.toLocaleString("en")} XP`, q.gold && `${q.gold.toLocaleString("en")} gold`, ...(q.rewards || [])].filter(Boolean);
  const skills = (q.skills || []).filter(id => SKILLS[id]).map(id => { const s = SKILLS[id];
    return `<a class="q-skill${s.elite ? " elite" : ""}" href="${HREF.skill(id)}" style="--pc:${profVar(s.profession)}"><img src="img/skills/${id}.jpg" alt="" onerror="this.remove()">${esc(s.name)}</a>`; }).join("");
  return (parts.length ? `<p>${parts.map(esc).join(" · ")}</p>` : "") + (skills ? `<div class="q-skills">${skills}</div>` : "");
}
const row = (k, v) => (v ? `<div class="q-row"><span>${k}</span><span>${v}</span></div>` : "");
function renderDetail() {
  const k = state.sel;
  if (!k || !NODE.has(k)) { $("detail").innerHTML = '<p class="dim">Click a step to see its details.</p>'; return; }
  const s = stepOf(k), nb = neighbours(k), hs = stepHeroes(k);
  const heroes = row("Hero", hs.length && `${hs.map(heroChip).join(" and ")} (required)`);
  if (s.mission) {
    const m = MISSIONS[s.mission.id], l = LOCATIONS[m?.outpost] || LOCATIONS[s.mission.id];
    $("detail").innerHTML = `<div class="q-dk">Mission ${m?.label ?? ""}</div><h3>${esc(stepName(k))}</h3>
      <p class="dim">${esc(regionOf(l)?.name || "")}${l?.party ? ` · party of ${l.party}` : ""}</p>
      ${row("After", nb.prev.map(stepLink).join(", "))}${row("Leads to", nb.next.map(stepLink).join(", "))}${heroes}
      <p>${whereLink(s.mission.id).replace(/>([^<]*)</, ">Open mission →<")}</p>`;
    return;
  }
  const q = s.quest;
  if (!q) return;
  const givers = questGivers(q);
  $("detail").innerHTML = `<div class="q-dk">${esc(q.type)} quest${q.repeatable ? " · repeatable" : ""}</div><h3>${esc(q.name)}</h3>
    ${row("Region", esc(questRegion(q)?.name || ""))}
    ${row("Giver", givers.map(n => `${esc(n.name)}${n.location ? ` — ${LINK.place(n.location)}` : ""}`).join("<br>"))}
    ${row("After", nb.prev.map(stepLink).join(", "))}
    ${row("Leads to", nb.next.filter(n => n[0] !== "m" || !(q.next_missions || []).includes(+n.slice(1))).map(stepLink).join(", "))}
    ${row("Opens mission", [...(q.missions || []), ...(q.next_missions || [])].map(whereLink).join(", "))}
    ${row("Profession", questProfs(q).map(p => `${profIcon(p)} ${PROFS[p]}`).join(" ") || (q.profession ? PROFS[q.profession] : ""))}
    ${heroes}
    <div class="q-dk" style="margin-top:12px">Rewards</div>${rewardsHTML(q) || '<p class="dim">—</p>'}
    <p><a href="${HREF.quest(q.id)}">Open quest →</a></p>`;
}

// the storyline the address names (storylines?prophecies), and the step picked in it (&s=q100023, or &m=28: a mission)
function show() {
  const p = args();
  const c = Object.keys(STORYLINE).find(c => p.has(STORYLINE[c]));
  if (CAMPS.includes(+c)) state.camp = +c;
  state.sel = p.get("s") || (p.get("m") ? `m${p.get("m")}` : null);
  syncChips($("camps"), new Set([String(state.camp)]));
  render();
  renderDetail();
  document.querySelector("#canvas .sel")?.scrollIntoView({ block: "center" });
}
function writeArgs() {
  history.replaceState(null, "", storylineHref(state.camp, state.sel && { s: state.sel }));
}

$("camps").innerHTML = CAMPS.map(c => `<button class="prof-chip" data-v="${c}" aria-pressed="false">${CAMPAIGNS[c]}</button>`).join("");
$("camps").addEventListener("click", e => {
  const b = e.target.closest("[data-v]");
  if (!b) return;
  state.camp = +b.dataset.v; state.sel = null;
  syncChips($("camps"), new Set([b.dataset.v]));
  render(); renderDetail();
  $("canvas").parentElement.scrollTop = 0;
});
$("canvas").addEventListener("click", e => {
  const n = e.target.closest("[data-id]");
  if (!n) return;
  state.sel = n.dataset.id;
  for (const x of $("canvas").querySelectorAll(".sel")) x.classList.remove("sel");
  n.classList.add("sel");
  renderDetail();
  writeArgs();
});
let timer;
window.addEventListener("resize", () => { clearTimeout(timer); timer = setTimeout(render, 120); });
show();
onRoute(show);
