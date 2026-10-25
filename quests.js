"use strict";

const { quests: QUESTS, flows: FLOWS } = window.GW_QUESTS;
// English-only story steps (no German page) come with the flows
const QUEST = new Map([...QUESTS, ...FLOWS.flatMap(f => f.extra_quests || [])].map(q => [q.name_de, q]));
const FLOW_NODE = new Map(FLOWS.flatMap(f => [...f.nodes, ...(f.parts || []).flatMap(p => p.steps)].map(n => [n.id, n])));
const MISSION = new Map(window.GW_MISSIONS.map(m => [m.name_de, m]));
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const CAMPS = FLOWS.map(f => f.campaign);
const MIN_W = 104, MAX_W = 230, NODE_H = 44, GAP_X = 10, GAP_Y = 30;

const state = { camp: CAMPS[0], sel: null };

/* ---------- helpers ---------- */
const nodeInfo = id => (id.startsWith("m:") ? { kind: "mission", m: MISSION.get(id.slice(2)) }
  : { kind: "quest", q: QUEST.get(id.slice(2)) });
const nodeName = id => {
  if (FLOW_NODE.get(id)?.name) return FLOW_NODE.get(id).name;  // English wiki title
  const n = nodeInfo(id); return n.m ? n.m.name : n.q ? n.q.name : id.slice(2);
};
// previous/next steps as the flow links them
const flowNeighbours = id => {
  const flow = FLOWS.find(f => f.campaign === state.camp);
  return {
    prev: flow.edges.filter(e => e.to === id).map(e => nodeName(e.from)),
    next: flow.edges.filter(e => e.from === id).map(e => nodeName(e.to)),
  };
};
const sourceLinks = (id, wikiDe) => [
  FLOW_NODE.get(id)?.wiki_en && `<a href="${esc(FLOW_NODE.get(id).wiki_en)}" target="_blank" rel="noopener">English wiki (archived)</a>`,
  wikiDe && `<a href="${esc(wikiDe)}" target="_blank" rel="noopener">guildwiki.de</a>`,
].filter(Boolean).join(" · ");
const questProfs = q => [...new Set(q.skills.map(id => SKILL.get(id)?.profession))].filter(p => p && p !== "None");
const profIcon = p => `<img class="qp" src="img/prof/${p}.png" alt="${p}" title="${p}">`;

/* ---------- layout ----------
   Rows follow the story (rank) and the width is fixed to the container. Each row's steps form one
   evenly spaced group, ordered by where the steps they follow sit and centred under them: a split
   A → B, C → D puts B and C either side of A, and D back under both. A row with more steps than fit
   wraps onto an extra line. */
function layout(flow, avail) {
  // box width: narrow enough that the widest row fits on one line, within reason
  const widest = Math.max(1, ...Object.values(flow.nodes.reduce((n, x) => ((n[x.rank] = (n[x.rank] || 0) + 1), n), {})));
  const fit = Math.max(1, Math.floor((avail + GAP_X) / (MIN_W + GAP_X)));
  const cols = Math.max(3, Math.min(fit, Math.max(widest, Math.floor((avail + GAP_X) / (180 + GAP_X)))));
  const w = Math.min(MAX_W, Math.floor((avail - (cols - 1) * GAP_X) / cols));
  const step = w + GAP_X;
  const middle = avail / 2;

  const preds = new Map(), succs = new Map();
  for (const e of flow.edges) {
    (preds.get(e.to) || preds.set(e.to, []).get(e.to)).push(e.from);
    (succs.get(e.from) || succs.set(e.from, []).get(e.from)).push(e.to);
  }
  const rows = [];
  for (const n of flow.nodes) (rows[n.rank] ||= []).push(n.id);
  for (let i = 0; i < rows.length; i++) rows[i] ||= [];

  const cx = new Map();  // centre x of each placed step
  const mean = ids => { const v = (ids || []).filter(i => cx.has(i)).map(i => cx.get(i)); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
  let lines = [];
  for (let pass = 0; pass < 2; pass++) {
    lines = [];
    for (const row of rows) {
      const want = row.map(id => ({ id, at: mean(preds.get(id)) ?? (pass ? mean(succs.get(id)) : null) ?? middle }));
      want.sort((a, b) => a.at - b.at || cmpStr(nodeName(a.id), nodeName(b.id)));
      for (let i = 0; i < want.length; i += cols) {
        const group = want.slice(i, i + cols);
        const span = (group.length - 1) * step;
        const target = group.reduce((s, g) => s + g.at, 0) / group.length;
        const first = Math.min(Math.max(target - span / 2, w / 2), avail - w / 2 - span);
        const line = group.map((g, k) => [g.id, first + k * step]);
        for (const [id, x] of line) cx.set(id, x);
        lines.push(line);
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
  const n = nodeInfo(p.id);
  const cls = n.kind === "mission" ? "mission" : "primary";
  const sub = n.kind === "mission" ? `Mission ${n.m?.story_label ?? ""}` : n.q?.region || "";
  const narrow = p.w < 160 ? " narrow" : "";
  let html = `<button class="qn ${cls}${narrow}${state.sel === p.id ? " sel" : ""}" data-id="${esc(p.id)}" title="${esc(nodeName(p.id))}" style="left:${p.x}px;top:${p.y}px;width:${p.w}px;height:${NODE_H}px">
    <span class="qn-t">${esc(nodeName(p.id))}</span><span class="qn-s">${esc(sub)}</span></button>`;
  return html;
}

function edgePath(a, b) {
  const x1 = a.x + a.w / 2, y1 = a.y + a.h, x2 = b.x + b.w / 2, y2 = b.y;
  const dy = Math.max(14, (y2 - y1) / 2);
  return `M${x1},${y1} C${x1},${y1 + dy} ${x2},${y2 - dy} ${x2},${y2}`;
}

/* Eye of the North: the opening steps, one column per storyline, then the steps after they converge.
   Steps drawn on one diagram row sit side by side; missions are gold, connecting quests plain. */
function renderParts(flow) {
  const box = s => {
    const q = QUEST.get(s.id.slice(2));
    return `<button class="eotn-step${s.mission ? " mission" : ""}${state.sel === s.id ? " sel" : ""}" data-id="${esc(s.id)}" title="${esc(s.name)}">
      <span class="qn-t">${esc(s.name)}</span><span class="qn-s">${esc(s.mission ? "Mission" : q?.region || "")}</span></button>`;
  };
  const list = part => {
    const rows = [];
    for (const s of part.steps) {
      if (rows.length && rows[rows.length - 1][0].row === s.row) rows[rows.length - 1].push(s);
      else rows.push([s]);
    }
    return `<div class="eotn-part"><h4>${esc(part.part)}</h4><ol>${rows.map(r =>
      `<li class="eotn-row">${r.map(box).join("")}</li>`).join("")}</ol></div>`;
  };
  const named = name => flow.parts.find(p => p.part === name);
  const parallel = flow.parts.filter(p => p.part !== "Start" && p.part !== "All together");
  const join = '<div class="eotn-join" aria-hidden="true">↓</div>';
  $("canvas").style.width = $("canvas").style.height = "";
  $("canvas").innerHTML = `<div class="eotn">
    ${named("Start") ? `<div class="eotn-wide">${list(named("Start"))}</div>${join}` : ""}
    <div class="eotn-parallel">${parallel.map(list).join("")}</div>
    ${named("All together") ? `${join}<div class="eotn-final">${list(named("All together"))}</div>` : ""}
  </div>`;
}

function render() {
  const flow = FLOWS.find(f => f.campaign === state.camp);
  $("legend-primary").hidden = false;
  if (flow.parts) {
    $("legend-inferred").hidden = true;
    renderParts(flow);
    writeHash();
    return;
  }
  $("legend-inferred").hidden = !flow.edges.some(e => e.inferred);
  const avail = $("canvas").parentElement.clientWidth - 32;
  const { placed, width, height } = layout(flow, avail);
  let svg = "";
  for (const e of flow.edges) {
    const a = placed.get(e.from), b = placed.get(e.to);
    if (a && b) svg += `<path d="${edgePath(a, b)}" class="${e.inferred ? "inferred" : ""}"/>`;
  }
  $("canvas").style.width = width + "px";
  $("canvas").style.height = height + "px";
  $("canvas").innerHTML = `<svg width="${width}" height="${height}">${svg}</svg>` + [...placed.values()].map(nodeHTML).join("");
  writeHash();
}

function rewardsHTML(q) {
  const parts = [q.xp && `${q.xp.toLocaleString("en")} XP`, q.gold && `${q.gold.toLocaleString("en")} gold`, ...q.rewards].filter(Boolean);
  const skills = q.skills.map(id => SKILL.get(id)).filter(Boolean).map(s =>
    `<a class="q-skill${s.elite ? " elite" : ""}" href="skills.html#open=${s.id}" style="--pc:${profVar(s.profession)}"><img src="img/skills/${s.id}.jpg" alt="" onerror="this.remove()">${esc(s.name)}</a>`).join("");
  return (parts.length ? `<p>${parts.map(esc).join(" · ")}</p>` : "") + (skills ? `<div class="q-skills">${skills}</div>` : "");
}

function renderDetail() {
  const id = state.sel;
  if (!id) { $("detail").innerHTML = '<p class="dim">Click a step to see its details.</p>'; return; }
  const n = nodeInfo(id);
  if (n.kind === "mission" && n.m) {
    const m = n.m;
    const nb = flowNeighbours(id);
    $("detail").innerHTML = `<div class="q-dk">Mission ${m.story_label ?? ""}</div><h3>${esc(nodeName(id))}</h3>
      <p class="dim">${esc(m.region || "")}${m.party_size ? ` · party of ${esc(m.party_size)}` : ""}</p>
      ${nb.prev.length ? `<div class="q-row"><span>After</span><span>${nb.prev.map(esc).join(", ")}</span></div>` : ""}
      ${nb.next.length ? `<div class="q-row"><span>Leads to</span><span>${nb.next.map(esc).join(", ")}</span></div>` : ""}
      <p><a href="missions.html#open=${encodeURIComponent(m.name)}">Open mission →</a></p>
      <p class="dim" style="font-size:12px">${sourceLinks(id)}</p>`;
    return;
  }
  const q = n.q;
  if (!q) return;
  const row = (k, v) => (v ? `<div class="q-row"><span>${k}</span><span>${v}</span></div>` : "");
  const kind = `${q.type} quest`;
  const nb = flowNeighbours(id);
  $("detail").innerHTML = `<div class="q-dk">${esc(kind)}${q.repeatable ? " · repeatable" : ""}</div><h3>${esc(nodeName(id))}</h3>
    ${row("Region", esc(q.region || ""))}
    ${row("Giver", esc([q.giver, q.where].filter(Boolean).join(" — ")))}
    ${row("After", nb.prev.map(esc).join(", "))}
    ${row("Leads to", nb.next.map(esc).join(", "))}
    ${row("Profession", questProfs(q).map(p => `${profIcon(p)} ${esc(p)}`).join(" ") || esc(q.profession || ""))}
    ${row("Hero", esc(q.hero || ""))}
    <div class="q-dk" style="margin-top:12px">Rewards</div>${rewardsHTML(q) || '<p class="dim">—</p>'}
    <p class="dim" style="font-size:12px">${sourceLinks(id, q.wiki_de)}</p>`;
}

/* ---------- controls ---------- */
function buildControls() {
  $("camps").innerHTML = CAMPS.map(c => `<button class="prof-chip" data-camp="${c}" aria-pressed="${c === state.camp}">${c}</button>`).join("");
  $("camps").addEventListener("click", e => {
    const b = e.target.closest("[data-camp]");
    if (!b) return;
    state.camp = b.dataset.camp; state.sel = null;
    for (const x of $("camps").children) x.setAttribute("aria-pressed", x.dataset.camp === state.camp);
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
    writeHash();
  });
  let timer;
  window.addEventListener("resize", () => { clearTimeout(timer); timer = setTimeout(render, 120); });
}

function writeHash() {
  const p = new URLSearchParams({ c: state.camp });
  if (state.sel) p.set("q", state.sel);
  history.replaceState(null, "", "#" + p);
}

function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  if (CAMPS.includes(p.get("c"))) state.camp = p.get("c");
  state.sel = p.get("q") || null;
}

readHash();
buildControls();
render();
renderDetail();
document.querySelector("#canvas .sel")?.scrollIntoView({ block: "center" });
