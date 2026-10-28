"use strict";

const { quests: QUESTS, flows: FLOWS } = window.GW_QUESTS;
// English-only story steps (no German page) come with the flows
const QUEST = new Map([...QUESTS, ...FLOWS.flatMap(f => f.extra_quests || [])].map(q => [q.name_de, q]));
const FLOW_NODE = new Map(FLOWS.flatMap(f => [...f.nodes, ...(f.parts || []).flatMap(p => p.steps)].map(n => [n.id, n])));
const MISSION = new Map(window.GW_MISSIONS.map(m => [m.name_de, m]));
const SKILL = new Map(window.GW_SKILLS.map(s => [s.id, s]));
const CAMPS = FLOWS.map(f => f.campaign);
const HERO = new Map((window.GW_HEROES || []).map(h => [h.name, h]));
const MISSION_EN = new Map(window.GW_MISSIONS.map(m => [m.name, m]));
const PLACES = new Map((window.GW_LOCATIONS || []).map(p => [p.name, p]));
// quests by English name; a name several quests share is told apart by campaign
const BY_NAME = new Map();
for (const q of QUEST.values()) (BY_NAME.get(q.name) || BY_NAME.set(q.name, []).get(q.name)).push(q);
const questURL = q => questHref(q.name, BY_NAME.get(q.name).length > 1 ? q.campaign : null);
// the places whose quest lists name each quest
const QUEST_PLACES = new Map();
for (const p of window.GW_LOCATIONS || []) {
  for (const x of p.quests || []) (QUEST_PLACES.get(x.name) || QUEST_PLACES.set(x.name, []).get(x.name)).push(p.name);
}
// each quest's step in a story flow: [campaign, step id]
const FLOW_STEP = new Map(FLOWS.flatMap(f => [...f.nodes, ...(f.parts || []).flatMap(p => p.steps)]
  .filter(n => n.id.startsWith("q:")).map(n => [n.id.slice(2), [f.campaign, n.id]])));
const MIN_W = 104, MAX_W = 230, NODE_H = 44, GAP_X = 10, GAP_Y = 30;

const state = { camp: CAMPS[0], sel: null, quest: null };

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
// heroes a mission or quest requires in the party
const stepHeroes = id => {
  const n = nodeInfo(id);
  return (n.m?.hero || n.q?.hero || "").split(" and ").map(name => HERO.get(name)).filter(Boolean);
};
const heroBadge = (id, style = "") => {
  const hs = stepHeroes(id);
  return hs.length ? `<span class="qn-hero" style="${style}" title="Required hero: ${esc(hs.map(h => h.name).join(" and "))}">${hs.map(h =>
    `<img src="img/prof/${esc(h.profession)}.png" alt="">${esc(h.name.split(" ")[0])}`).join(" + ")}</span>` : "";
};
const heroLinks = hs => hs.map(h => `<a href="${esc(heroHref(h.name))}"><img src="img/prof/${esc(h.profession)}.png" alt=""> ${esc(h.name)}</a>`);
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
      // side branches (attribute quests, and optional steps that lead nowhere while the story goes on) don't
      // count towards centring the row: they go beside what they follow
      const deadEnd = id => !succs.has(id) && (preds.get(id) || []).some(p => succs.get(p).length > 1);
      const side = row.filter(id => FLOW_NODE.get(id)?.kind === "attribute" || deadEnd(id));
      const main = row.filter(id => !side.includes(id));
      const want = main.map(id => ({ id, at: mean(preds.get(id)) ?? (pass ? mean(succs.get(id)) : null) ?? middle }));
      want.sort((a, b) => a.at - b.at || cmpStr(nodeName(a.id), nodeName(b.id)));
      for (let i = 0; i < Math.max(want.length, 1); i += cols) {
        const group = want.slice(i, i + cols);
        const span = (group.length - 1) * step;
        const target = group.length ? group.reduce((s, g) => s + g.at, 0) / group.length : middle;
        const first = Math.min(Math.max(target - span / 2, w / 2), avail - w / 2 - span);
        const line = group.map((g, k) => [g.id, first + k * step]);
        if (i + cols >= want.length) {
          for (const id of side) {  // right of the step it follows, past anything already on the line
            const taken = line.map(([, x]) => x);
            // a chain of side steps stays in one column; the first one sits right of the story step
            const fromSide = (preds.get(id) || []).some(p => FLOW_NODE.get(p)?.kind === "attribute");
            let x = (mean(preds.get(id)) ?? middle) + (fromSide ? 0 : step);
            while (taken.some(o => Math.abs(o - x) < step - 1)) x += step;
            line.push([id, Math.min(x, avail - w / 2)]);
          }
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
  const n = nodeInfo(p.id);
  const fn = FLOW_NODE.get(p.id) || {};
  const attr = fn.kind === "attribute";
  const cls = attr ? "attribute" : n.kind === "mission" ? "mission" : "primary";
  const givesAttr = attr && (n.q?.rewards || []).some(r => /Attribute point/.test(r));
  const sub = attr ? [givesAttr ? "+15 attribute points" : "Unlocks an attribute quest", fn.note].filter(Boolean).join(" · ")
    : n.kind === "mission" ? `Mission ${n.m?.story_label ?? ""}` : n.q?.region || "";
  const narrow = p.w < 160 ? " narrow" : "";
  let html = `<button class="qn ${cls}${narrow}${state.sel === p.id ? " sel" : ""}" data-id="${esc(p.id)}" title="${esc(nodeName(p.id))}" style="left:${p.x}px;top:${p.y}px;width:${p.w}px;height:${NODE_H}px">
    <span class="qn-t">${esc(nodeName(p.id))}</span><span class="qn-s">${esc(sub)}</span></button>`;
  return html + heroBadge(p.id, `left:${p.x + p.w - 8}px;top:${p.y - 9}px;right:auto;transform:translateX(-100%)`);
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
      <span class="qn-t">${esc(s.name)}</span><span class="qn-s">${esc(s.mission ? "Mission" : q?.region || "")}</span>${heroBadge(s.id)}</button>`;
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

function renderHeroes(flow) {
  $("legend-hero").hidden = ![...flow.nodes, ...(flow.parts || []).flatMap(p => p.steps)].some(n => stepHeroes(n.id).length);
}

function render() {
  const flow = FLOWS.find(f => f.campaign === state.camp);
  renderHeroes(flow);
  $("legend-primary").hidden = false;
  $("legend-attr").hidden = !flow.nodes.some(n => n.kind === "attribute");
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
    if (a && b) svg += `<path d="${edgePath(a, b)}" class="${e.inferred ? "inferred" : ""}${FLOW_NODE.get(e.to)?.kind === "attribute" ? " attr" : ""}"/>`;
  }
  $("canvas").style.width = width + "px";
  $("canvas").style.height = height + "px";
  $("canvas").innerHTML = `<svg width="${width}" height="${height}">${svg}</svg>` + [...placed.values()].map(nodeHTML).join("");
  writeHash();
}

function rewardsHTML(q) {
  const parts = [q.xp && `${q.xp.toLocaleString("en")} XP`, q.gold && `${q.gold.toLocaleString("en")} gold`, ...q.rewards].filter(Boolean);
  const skills = q.skills.map(id => SKILL.get(id)).filter(Boolean).map(s =>
    `<a class="q-skill${s.elite ? " elite" : ""}" href="skills#skill=${s.id}" style="--pc:${profVar(s.profession)}"><img src="img/skills/${s.id}.jpg" alt="" onerror="this.remove()">${esc(s.name)}</a>`).join("");
  return (parts.length ? `<p>${parts.map(esc).join(" · ")}</p>` : "") + (skills ? `<div class="q-skills">${skills}</div>` : "");
}

const heroRow = id => {
  const hs = stepHeroes(id);
  return hs.length ? `<div class="q-row"><span>Hero</span><span>${heroLinks(hs).join(" and ")} (required)</span></div>` : "";
};

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
      ${heroRow(id)}
      <p><a href="${esc(missionHref(m.name))}">Open mission →</a></p>
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
    ${row("Leads to", nb.next.filter(n => !(q.missions || []).includes(n)).map(esc).join(", "))}
    ${row("Opens mission", (q.missions || []).map(n => `<a href="${esc(missionHref(n))}">${esc(n)}</a>`).join(", "))}
    ${row("Profession", questProfs(q).map(p => `${profIcon(p)} ${esc(p)}`).join(" ") || esc(q.profession || ""))}
    ${heroRow(id)}
    <div class="q-dk" style="margin-top:12px">Rewards</div>${rewardsHTML(q) || '<p class="dim">—</p>'}
    ${q.wiki_de ? `<p><a href="${esc(questURL(q))}">Open quest →</a></p>` : ""}
    <p class="dim" style="font-size:12px">${sourceLinks(id, q.wiki_de)}</p>`;
}

/* ---------- one quest's page ---------- */
const CAMP_COLOR = { Prophecies: "--p-paragon", Factions: "--p-ritualist", Nightfall: "--p-elementalist", "Eye of the North": "--p-monk" };
// a prerequisite or follow-up: a quest (of the same campaign when the name is shared) or a mission
function refLink(name, camp) {
  const qs = BY_NAME.get(name);
  if (qs) return `<a href="${esc(questURL(qs.find(q => q.campaign === camp) || qs[0]))}">${esc(name)}</a>`;
  return MISSION_EN.has(name) ? `<a href="${esc(missionHref(name))}">${esc(name)}</a>` : esc(name);
}
const placeLink = name => (PLACES.has(name) ? `<a href="locations#${new URLSearchParams({ place: name })}">${esc(name)}</a>` : esc(name));

function questPageHTML(q) {
  const sub = [`${q.type} quest`, q.campaign, q.region].filter(Boolean).map(esc).join(" · ");
  const stats = [q.xp && ["XP", q.xp.toLocaleString("en")], q.gold && ["Gold", q.gold.toLocaleString("en")]].filter(Boolean);
  const skills = q.skills.map(id => SKILL.get(id)).filter(Boolean);
  const heroes = (q.hero || "").split(" and ").map(n => HERO.get(n)).filter(Boolean);
  const profs = questProfs(q);
  const places = [...new Set([q.where, ...(QUEST_PLACES.get(q.name) || [])].filter(Boolean))];
  const next = q.next.filter(n => !q.missions.includes(n));  // missions get their own line
  const facts = [
    q.giver && ["Giver", esc(q.giver)],
    places.length && ["Where", places.map(placeLink).join(", ")],
    (profs.length || q.profession) && ["Profession", profs.map(p => `${profIcon(p)} ${esc(p)}`).join(" ") || esc(q.profession)],
    heroes.length && ["Required hero", heroLinks(heroes).join(" and ")],
    q.requires.length && ["After", q.requires.map(n => refLink(n, q.campaign)).join(", ")],
    next.length && ["Leads to", next.map(n => refLink(n, q.campaign)).join(", ")],
    q.missions?.length && ["Opens mission", q.missions.map(n => `<a href="${esc(missionHref(n))}">${esc(n)}</a>`).join(", ")],
  ].filter(Boolean);
  const step = FLOW_STEP.get(q.name_de);
  return `<p class="back"><a href="#${new URLSearchParams({ c: state.camp })}">← Storylines</a></p>
    <div class="sp-head" style="--pc:var(${CAMP_COLOR[q.campaign] || "--p-none"})">
      <div class="sp-title"><h2>${esc(q.name)}${q.type === "Secondary" && FLOW_STEP.has(q.name_de) ? '<span class="tag" title="A secondary quest the campaign\'s storyline goes through">Story</span>' : ""}${q.repeatable ? '<span class="tag">Repeatable</span>' : ""}${q.missions?.length ? '<span class="tag">Leads to a mission</span>' : ""}</h2><div class="sp-sub">${sub}</div></div>
      ${stats.length ? `<div class="lstats">${stats.map(([k, v]) => `<span class="lstat"><small>${k}</small><b>${esc(v)}</b></span>`).join("")}</div>` : ""}
    </div>
    <div class="lgrid">
      <div class="lside">
        ${facts.length ? `<section class="lbox"><h4>Quest</h4><ul class="lrows">${facts.map(([k, v]) => `<li><span class="dim">${k}</span><span>${v}</span></li>`).join("")}</ul></section>` : ""}
        ${q.objectives?.length ? `<section class="lbox"><h4>Objectives</h4><ul class="qp-obj">${q.objectives.map(([d, t]) =>
          `<li style="--d:${d}">${esc(t)}</li>`).join("")}</ul></section>` : ""}
      </div>
      <div class="lside">
        <section class="lbox"><h4>Rewards</h4>
          ${skills.length ? `<div class="qp-skills">${skills.map(s => `<a class="skill-link${s.elite ? " elite" : ""}" href="skills#skill=${s.id}" style="--pc:${profVar(s.profession)}">${skillIcon(s.id, "sk-ic sm")}${esc(s.name)}</a>`).join("")}</div>` : ""}
          ${q.rewards.length ? `<ul class="qp-rewards">${q.rewards.map(r => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
          ${!skills.length && !q.rewards.length ? `<p class="dim">${q.xp && q.gold ? "Experience and gold only." : q.xp ? "Experience only." : q.gold ? "Gold only." : "—"}</p>` : ""}</section>
      </div>
    </div>
    <p class="llinks">${step ? `<a href="#${new URLSearchParams({ c: step[0], q: step[1] })}">In the storyline →</a>` : ""}${skills.length && q.type !== "Primary" ? `<a href="skill-quests#${new URLSearchParams({ q: q.name })}">Skill quests →</a>` : ""}${q.wiki_en ? `<a href="${esc(q.wiki_en)}" target="_blank" rel="noopener">Guild Wars Wiki (archived)</a>` : ""}${q.wiki_de ? `<a href="${esc(q.wiki_de)}" target="_blank" rel="noopener">guildwiki.de</a>` : ""}</p>`;
}

// the storyline, or one quest's page when the address names one
function show() {
  const p = new URLSearchParams(location.hash.slice(1));
  const qs = BY_NAME.get(p.get("quest")) || [];
  const q = qs.find(x => x.campaign === p.get("qc")) || qs[0];
  $("story").hidden = !!q;
  $("quest").hidden = !q;
  if (q) {
    if (CAMPS.includes(q.campaign)) state.camp = q.campaign;
    $("quest").innerHTML = questPageHTML(q);
    document.title = `${q.name} · GW Storylines`;
    window.scrollTo(0, 0);
    return;
  }
  document.title = "GW Storylines";
  readHash();
  for (const x of $("camps").children) x.setAttribute("aria-pressed", x.dataset.camp === state.camp);
  render();
  renderDetail();
  document.querySelector("#canvas .sel")?.scrollIntoView({ block: "center" });
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
  window.addEventListener("resize", () => { clearTimeout(timer); timer = setTimeout(() => { if (!$("story").hidden) render(); }, 120); });
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
show();
window.addEventListener("hashchange", show);
