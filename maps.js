"use strict";

/* The Maps page: the regions of the old Maps page, by group (Pre-Searing, Tyria, ...), each a view on its map (a
   continent's whole painting, or a picture of its own) with every area's walkable ground. A continent's regions are
   zooms on one map: drag to move on to the next, wheel or pinch to zoom, click an area for its pages.
   maps?<tab> opens a tab (its map whole, or the part that is the tab's), maps?<tab>&<subtab> one view (maps?realm_of_torment&gates),
   maps?area=<map id> picks out that area. */
const MAP_VIEWS = data("GW_MAPS").views.map((v, i) => ({ ...v, i }));
// a tab's own view: what the tab shows before a region is chosen
const GROUPS = data("GW_MAPS").groups.map(g => ({ ...g, group: g.name, main: true }));
const MAX_ZOOM = 3, VIEW_ZOOM = 1.5;  // a view opens at most at VIEW_ZOOM (a small map, like the Shadow Nexus, isn't blown up)
const stage = $("stage"), cv = stage.querySelector("canvas"), ctx = cv.getContext("2d"), tip = $("tip"), panel = $("panel");
const dark = $("dark"), nomarks = $("nomarks"), noportals = $("noportals");
for (const [box, key] of [[nomarks, "maps.nomarks"], [noportals, "maps.noportals"]]) {
  try { box.checked = localStorage.getItem(key) === "1"; } catch { /* storage blocked */ }
  box.addEventListener("change", () => {
    try { localStorage.setItem(key, box.checked ? "1" : "0"); } catch { /* storage blocked */ }
    schedule();
  });
}
$("unknown").closest("label").remove();  // the old map points by number are gone

let set = null, view0 = null, areas = [], hover = null, pick = null;
const view = { zoom: 1, x: 0, y: 0 };
let cssW = 0, cssH = 0, dpr = 1, raf = 0, token = 0;
// the areas on a map: their ground is there, or (without ground) their marker; not the versions drawn with another's
const inSet = s => Object.values(AREAS).filter(l => !l.ground && (WALK_SET.get(l.id) ?? l.set) === s);

/* ---------- choosing a view ---------- */
$("groups").innerHTML = GROUPS.map(g => `<button class="prof-chip" data-g="${esc(g.name)}">${esc(g.name)}</button>`).join("");
$("groups").addEventListener("click", e => {
  const b = e.target.closest("[data-g]");
  if (b) go("?" + slug(b.dataset.g));
});
$("regions").addEventListener("click", e => {
  const b = e.target.closest("[data-view]");
  if (b) { const v = MAP_VIEWS[b.dataset.view]; go(`?${slug(v.group)}&${slug(v.name)}`); }
});
function chips() {
  for (const b of $("groups").children) b.setAttribute("aria-pressed", b.dataset.g === view0.group);
  $("regions").innerHTML = MAP_VIEWS.filter(v => v.group === view0.group)
    .map(v => `<button data-view="${v.i}" aria-pressed="${v === view0 || (view0.main && v.set === view0.set && String(v.box) === String(view0.box))}">${esc(v.name)}</button>`).join("");
}
// a tab's or a view's name in the address: "Realm of Torment" is realm_of_torment
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
// the address of what is shown: a tab, or one view in it
const here = () => "?" + slug(view0.group) + (view0.main ? "" : "&" + slug(view0.name));

// one piece of ground on the map, and the areas it is ({ id, town: an outpost's own town, mission: a mission's ground })
// box: where to look first, set before the first frame is drawn (the last map's view never shows on this one)
async function openSet(s, box) {
  if (s === set) { if (box) zoomTo([box], VIEW_ZOOM); return; }
  set = s; areas = []; hover = pick = null;
  const t = ++token;
  resize();
  if (box) zoomTo([box], VIEW_ZOOM); else fit();
  const ls = inSet(s);
  const walks = await Promise.all(ls.map(l => loadWalk(l.id)));
  // ground no area claims yet, dimmer
  const extras = Object.entries(data("GW_MAPS").extras || {}).filter(([, x]) => x.set === s);
  const ex = await Promise.all(extras.map(([n]) => fetch(`game/walk/extra/${n}.json`).then(r => r.json()).catch(() => null)));
  if (t !== token) return;
  const byGround = new Map();
  const add = (rings, who) => {
    const k = JSON.stringify(rings[0]);  // the same ground under several areas (the Domain of Anguish's areas)
    if (!byGround.has(k)) byGround.set(k, { rings, who: [] });
    byGround.get(k).who.push(who);
  };
  ls.forEach((l, i) => {
    const w = walks[i];
    if (!w) return;
    if (w.town) { add(w.rings, { l, mission: true }); add(w.town, { l, town: true }); } else add(w.rings, { l, mission: !!MISSIONS[l.id] && l.type === 14 });
  });
  extras.forEach(([, x], i) => { if (ex[i]) add(ex[i].rings, { extra: true, name: x.name || "Unknown ground: no area known here yet" }); });
  areas = [...byGround.values()].map(g => {
    const w = { rings: g.rings };
    return { who: g.who, path: walkPath([w]), box: ringsBox([w]), name: whoNames(g.who) };
  }).filter(a => a.box);
  groundAt = performance.now();
  schedule();
}
// what a piece of ground is called: each area once, an outpost's town and a mission's ground said so
const whoName = x => (x.extra ? x.name : x.town ? `${x.l.name} (outpost)` : x.mission && (x.l.type !== 14) ? `${x.l.name} (mission)` : x.l.name);
// a name two areas share on one ground (a mission and the explorable copy of its map) says which is which
const whoNames = who => {
  const names = who.map(whoName), base = who.map(x => x.l?.name);
  return [...new Set(names.map((n, i) => (base.filter(b => b && b === base[i]).length > 1 && n === base[i] ? `${n} (${(TYPE_LABEL[who[i].l.type] || "area").toLowerCase()})` : n)))].join(" · ");
};

async function fromArgs() {
  const h = args();
  const area = AREAS[h.get("area")];
  // an area opens in the view that holds it, else the first view on its map
  const inBox = (v, p) => v.set === p.set && p.at && p.at[0] >= v.box[0] && p.at[0] <= v.box[2] && p.at[1] >= v.box[1] && p.at[1] <= v.box[3];
  const ps = area && (WALK_SET.get(area.id) ?? area.set);  // the map its ground is on, else its marker's
  // a tab and a view by name; older links named the tab (g=Tyria) or numbered the view (view=3)
  const [tab, sub] = h.keys();
  const g = GROUPS.find(x => x.name === h.get("g") || slug(x.name) === tab);
  const v = MAP_VIEWS[h.get("view")] || (g && sub && MAP_VIEWS.find(v => v.group === g.name && slug(v.name) === sub));
  if (h.has("g") || h.has("view")) history.replaceState(null, "", "?" + slug((v || g)?.group || "") + (v ? "&" + slug(v.name) : ""));
  view0 = v || g || (area ? MAP_VIEWS.find(v => v.set === ps && inBox(v, area)) || MAP_VIEWS.find(v => v.set === ps) : GROUPS[0]) || MAP_VIEWS[0];
  chips();
  await openSet(ps ?? view0.set, area ? null : view0.box);
  pick = area ? areas.find(a => a.who.some(x => x.l?.id === area.id && !x.mission)) || areas.find(a => a.who.some(x => x.l?.id === area.id)) || null : null;
  showPanel();
  zoomTo([pick ? pick.box : view0.box], pick ? MAX_ZOOM : VIEW_ZOOM);
}
onRoute(fromArgs);

/* ---------- the panel for the picked area ---------- */
function showPanel() {
  if (!pick) { panel.hidden = true; return; }
  panel.hidden = false;
  const row = x => `<li><b>${esc(whoName(x))}</b>${x.extra ? '<span class="dim">Walkable, not tied to an area yet</span>'
    : `${!x.mission || x.town ? (x.l.type !== 14 && x.l.type !== 17 ? `<a href="${HREF.area(x.l.id)}">Area →</a>` : "") : ""}${x.mission && MISSIONS[x.l.id] ? `<a href="${HREF.mission(x.l.id)}">Mission →</a>` : ""}`}</li>`;
  const seen = new Set();
  panel.innerHTML = `<button class="wm-close" title="Close" aria-label="Close">×</button><ul>${pick.who.filter(x => !seen.has(whoName(x)) && seen.add(whoName(x))).map(row).join("")}</ul>`;
}
panel.addEventListener("click", e => {
  if (e.target.closest(".wm-close")) { pick = null; showPanel(); history.replaceState(null, "", here()); schedule(); }
});

/* ---------- view ---------- */
const fitZoom = () => Math.min(cssW / MAP_SETS[set].w, cssH / MAP_SETS[set].h);
function resize() {
  dpr = window.devicePixelRatio || 1;
  const r = stage.getBoundingClientRect();
  if (r.width < 2 || set == null) return;
  cssW = Math.round(r.width); cssH = Math.round(r.height);
  cv.width = Math.round(cssW * dpr); cv.height = Math.round(cssH * dpr);
  clamp(); schedule();
}
function fit() {
  const S = MAP_SETS[set], z = fitZoom();
  Object.assign(view, { zoom: z, x: (cssW - S.w * z) / 2, y: (cssH - S.h * z) / 2 });
  schedule();
}
function zoomTo(boxes, most = MAX_ZOOM) {
  const x0 = Math.min(...boxes.map(b => b[0])), y0 = Math.min(...boxes.map(b => b[1])), x1 = Math.max(...boxes.map(b => b[2])), y1 = Math.max(...boxes.map(b => b[3]));
  const m = Math.max(x1 - x0, y1 - y0) * 0.1;
  view.zoom = Math.max(Math.min(fitZoom(), most), Math.min(most, cssW / (x1 - x0 + 2 * m), cssH / (y1 - y0 + 2 * m)));
  view.x = cssW / 2 - (x0 + x1) / 2 * view.zoom; view.y = cssH / 2 - (y0 + y1) / 2 * view.zoom;
  clamp(); schedule();
}
function clamp() {
  if (set == null) return;
  const S = MAP_SETS[set], pw = S.w * view.zoom, ph = S.h * view.zoom, mx = Math.min(cssW, Math.max(80, pw / 4)), my = Math.min(cssH, Math.max(80, ph / 4));
  view.x = Math.min(cssW - mx, Math.max(mx - pw, view.x));
  view.y = Math.min(cssH - my, Math.max(my - ph, view.y));
}
function zoomAt(k, x, y) {
  const z = Math.min(MAX_ZOOM, Math.max(fitZoom() * 0.5, view.zoom * k));
  view.x = x - (x - view.x) * z / view.zoom; view.y = y - (y - view.y) * z / view.zoom; view.zoom = z;
  clamp(); schedule();
}

/* ---------- drawing ---------- */
function schedule() { raf ||= requestAnimationFrame(draw); }
// the outposts on the map, and the portals between areas
const marks = () => (nomarks.checked ? [] : Object.values(AREAS).filter(l => l.set === set && l.at && isOutpost(l)).map(l => ({ id: l.id, x: l.at[0], y: l.at[1], kind: markKind(l), name: l.name })));
// each portal once, with the two areas it joins (named on hover)
function portals() {
  if (noportals.checked) return [];
  const seen = new Set(), out = [];
  for (const l of inSet(set)) for (const e of l.exits || []) if (e.at && !seen.has(e.at.join())) {
    seen.add(e.at.join());
    out.push(Object.assign([...e.at], { name: `${l.name} ↔ ${AREAS[e.to]?.name}` }));
  }
  return out;
}
/* The ground: the map darkened but for the walkable areas, each outlined. Thousands of outlines are too slow to draw
   every frame, so they are drawn once into a picture a margin larger than the screen, which is moved about while
   dragging and redrawn when the drag runs past its edge or the zoom settles. */
let ground = null, groundTimer = 0;
// unknown ground (no area claims it yet) stays under the fog, outlined in dashes
const isUnknown = a => a.who.every(x => x.extra);
function paintGround(g, T, list, zoom) {
  const fade = Math.min(1, Math.max(0.2, zoom * 1.5));  // outlines fade out when zoomed far out, where they pile up
  const W = g.canvas.width, H = g.canvas.height, k = dark.value / 100;
  if (k > 0) {
    const veil = groundVeil;
    if (veil.width !== W || veil.height !== H) { veil.width = W; veil.height = H; }
    const v = veil.getContext("2d");
    v.setTransform(1, 0, 0, 1, 0, 0); v.globalCompositeOperation = "source-over";
    v.fillStyle = MAP_TINT; v.fillRect(0, 0, W, H);
    v.setTransform(...T); v.globalCompositeOperation = "destination-out";
    for (const a of list) if (!isUnknown(a)) v.fill(a.path, "nonzero");
    g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = k; g.drawImage(veil, 0, 0); g.globalAlpha = 1;
  }
  g.setTransform(...T); g.lineJoin = "round"; g.globalAlpha = 0.35 * fade; g.strokeStyle = "#ffffff"; g.lineWidth = dpr / T[0];
  for (const a of list) if (!isUnknown(a)) g.stroke(a.path);
  g.setLineDash([4 * dpr / T[0], 3 * dpr / T[0]]); g.globalAlpha = 0.6 * fade;
  for (const a of list) if (isUnknown(a)) g.stroke(a.path);
  g.setLineDash([]); g.globalAlpha = 1; g.setTransform(1, 0, 0, 1, 0, 0);
}
// the fog alone, over all of it: before the ground has loaded, and fading off it once it has
function fog(g, alpha) {
  g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = alpha * dark.value / 100;
  g.fillStyle = MAP_TINT; g.fillRect(0, 0, g.canvas.width, g.canvas.height); g.globalAlpha = 1;
}
const FADE_MS = 300;
let groundAt = 0;  // when the ground loaded
function drawGround(g, z) {
  if (!areas.length) { fog(g, 1); return; }
  const t = (performance.now() - groundAt) / FADE_MS;
  if (t < 1) schedule();
  drawGroundNow(g, z);
  if (t < 1) fog(g, 1 - t);
}
function drawGroundNow(g, z) {
  const W = g.canvas.width, H = g.canvas.height, M = Math.max(W, H) / 4;
  // the screen in map pixels
  const sx0 = -view.x * dpr / z, sy0 = -view.y * dpr / z, sx1 = sx0 + W / z, sy1 = sy0 + H / z;
  const c = ground, key = `${set}|${dark.value}`;
  const same = c && c.key === key && c.areas === areas, sameZoom = same && Math.abs(c.z - z) / z <= 0.01;
  const covers = c && sx0 >= c.x0 && sy0 >= c.y0 && sx1 <= c.x0 + c.canvas.width / c.z && sy1 <= c.y0 + c.canvas.height / c.z;
  if (!same || (sameZoom && !covers)) build();
  else if (!sameZoom) { clearTimeout(groundTimer); groundTimer = setTimeout(() => { build(); schedule(); }, 150); }  // meanwhile the last one, scaled
  const k = z / ground.z;
  g.drawImage(ground.canvas, view.x * dpr + ground.x0 * z, view.y * dpr + ground.y0 * z, ground.canvas.width * k, ground.canvas.height * k);
  function build() {
    const cv = ground?.canvas || document.createElement("canvas");
    cv.width = Math.ceil(W + 2 * M); cv.height = Math.ceil(H + 2 * M);
    const x0 = sx0 - M / z, y0 = sy0 - M / z, x1 = x0 + cv.width / z, y1 = y0 + cv.height / z;
    paintGround(cv.getContext("2d"), [z, 0, 0, z, -x0 * z, -y0 * z],
      areas.filter(a => a.box[2] >= x0 && a.box[0] <= x1 && a.box[3] >= y0 && a.box[1] <= y1), view.zoom);
    ground = { key, areas, z, x0, y0, canvas: cv };
  }
}
const groundVeil = document.createElement("canvas");

function draw() {
  raf = 0;
  if (set == null || !cssW) return;
  const outlines = [];
  if (hover && hover !== pick) outlines.push([hover.path, "#ffffff", 1.6, 0.9]);
  if (pick) outlines.push([pick.path, MAP_RING, 2.2, 1]);
  // labels only where they have room
  const ms = view.zoom > 0.3 ? marks() : marks().map(m => ({ ...m, name: "" }));
  paintMap(ctx, { set, zoom: view.zoom, x: view.x, y: view.y, dpr, ground: drawGround, outlines, marks: ms, portals: portals(), redraw: schedule });
}

/* ---------- pointer ---------- */
const local = e => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
const onMap = p => ({ x: (p.x - view.x) / view.zoom, y: (p.y - view.y) / view.zoom });
function markAt(p, list = marks()) {
  let best = null, bd = 12;
  for (const m of list) {
    const d = Math.hypot(view.x + m.x * view.zoom - p.x, view.y + m.y * view.zoom - p.y);
    if (d < bd) { bd = d; best = m; }
  }
  return best;
}
// the area under a map point: the smallest one there, so an outpost inside an area wins
function areaAt({ x, y }) {
  const hits = areas.filter(a => x >= a.box[0] && x <= a.box[2] && y >= a.box[1] && y <= a.box[3] && ctx.isPointInPath(a.path, x, y, "nonzero"));
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  return hits.sort((a, b) => (a.box[2] - a.box[0]) * (a.box[3] - a.box[1]) - (b.box[2] - b.box[0]) * (b.box[3] - b.box[1]))[0] || null;
}
let drag = null, moved = false, pinch = null;
const pointers = new Map();
stage.addEventListener("pointerdown", e => {
  if (e.pointerType === "mouse" && e.button !== 0) return;
  stage.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, local(e));
  moved = false;
  if (pointers.size === 1) drag = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y };
  if (pointers.size === 2) { drag = null; const [a, b] = pointers.values(); pinch = Math.hypot(a.x - b.x, a.y - b.y); }
});
stage.addEventListener("pointermove", e => {
  const p = local(e);
  if (pointers.has(e.pointerId)) pointers.set(e.pointerId, p);
  if (pinch && pointers.size === 2) {
    const [a, b] = pointers.values(), d = Math.hypot(a.x - b.x, a.y - b.y);
    zoomAt(d / pinch, (a.x + b.x) / 2, (a.y + b.y) / 2); pinch = d; moved = true; return;
  }
  if (drag) {
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
    if (moved) { view.x = drag.vx + dx; view.y = drag.vy + dy; clamp(); schedule(); stage.classList.add("dragging"); }
  }
  const mk = drag ? null : markAt(p), po = mk || drag ? null : markAt(p, portals().map(q => ({ x: q[0], y: q[1], name: q.name })));
  const a = mk || po || drag ? null : areaAt(onMap(p));
  if (a !== hover) { hover = a; schedule(); }
  if (mk || po || a) {
    tip.hidden = false;
    tip.textContent = mk ? `${mk.name} · ${MARK_STYLE[mk.kind][2]}` : po ? `Portal: ${po.name}` : a.name;
    tip.style.left = `${Math.min(p.x + 14, cssW - tip.offsetWidth - 6)}px`; tip.style.top = `${p.y + 16}px`;
  } else tip.hidden = true;
  stage.style.cursor = mk || a ? "pointer" : "";
});
function up(e) {
  const was = pointers.size;
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinch = null;
  if (was === 1 && !moved && e.type === "pointerup") {
    const mk = markAt(local(e));
    if (mk) { endDrag(); location.href = HREF.area(mk.id); return; }
    pick = areaAt(onMap(local(e)));
    const first = pick?.who.find(x => x.l);
    history.replaceState(null, "", first ? query({ area: first.l.id }) : here());
    showPanel(); schedule();
  }
  if (!pointers.size) endDrag();
}
function endDrag() { pointers.clear(); drag = null; pinch = null; stage.classList.remove("dragging"); }
window.addEventListener("pageshow", endDrag);
stage.addEventListener("pointerup", up);
stage.addEventListener("pointercancel", up);
stage.addEventListener("pointerleave", () => { tip.hidden = true; if (hover) { hover = null; schedule(); } });
stage.addEventListener("wheel", e => {
  e.preventDefault();
  const p = local(e), dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
  zoomAt(Math.exp(-dy * (e.ctrlKey ? 0.01 : 0.0015)), p.x, p.y);
}, { passive: false });
stage.addEventListener("dblclick", e => { const p = local(e); zoomAt(2, p.x, p.y); });
stage.addEventListener("keydown", e => {
  if (e.key === "+" || e.key === "=") zoomAt(1.25, cssW / 2, cssH / 2);
  else if (e.key === "-") zoomAt(0.8, cssW / 2, cssH / 2);
  else if (e.key === "0") fit();
  else return;
  e.preventDefault();
});
$("zin").addEventListener("click", () => zoomAt(1.25, cssW / 2, cssH / 2));
$("zout").addEventListener("click", () => zoomAt(0.8, cssW / 2, cssH / 2));
$("zfit").addEventListener("click", () => fit());
dark.addEventListener("input", schedule);
new ResizeObserver(resize).observe(stage);
fromArgs();
