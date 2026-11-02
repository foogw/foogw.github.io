"use strict";

/* The Maps page: a map set (a continent, or a picture of its own) with every area's walkable ground. Drag to move,
   wheel or pinch to zoom, click an area for its pages. #set=<id> opens a map, &region=<id> fits a region of it,
   #place=<map id> picks out that area. */
const CONTINENT_SETS = [1, 0, 2, 4];
const MAX_ZOOM = 3;
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

let set = null, areas = [], hover = null, pick = null, allPath = null;
const view = { zoom: 1, x: 0, y: 0 };
let cssW = 0, cssH = 0, dpr = 1, raf = 0, token = 0;
const inSet = s => Object.values(LOCATIONS).filter(l => l.set === s);

/* ---------- choosing a map and a region ---------- */
const OTHER = Object.keys(MAP_SETS).map(Number).filter(s => s >= 100);
$("groups").innerHTML = [...CONTINENT_SETS.map(s => [s, MAP_SETS[s].name]), ["other", "Other maps"]]
  .map(([v, n]) => `<button class="prof-chip" data-v="${v}">${esc(n)}</button>`).join("");
$("groups").addEventListener("click", e => {
  const b = e.target.closest("[data-v]");
  if (b) go({ set: b.dataset.v === "other" ? OTHER[0] : b.dataset.v });
});
$("regions").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) go(b.dataset.region ? { set, region: b.dataset.region } : { set: b.dataset.set });
});
function chips() {
  const other = set >= 100;
  for (const b of $("groups").children) b.setAttribute("aria-pressed", other ? b.dataset.v === "other" : +b.dataset.v === set);
  const regions = [...new Set(inSet(set).map(l => l.region))].filter(r => REGIONS[r]).sort((a, b) => cmpStr(REGIONS[a].name, REGIONS[b].name));
  $("regions").innerHTML = other
    ? OTHER.map(s => `<button data-set="${s}" aria-pressed="${s === set}">${esc(MAP_SETS[s].name)}</button>`).join("")
    : regions.map(r => `<button data-region="${r}">${esc(REGIONS[r].name)}</button>`).join("");
}
const go = h => { location.hash = new URLSearchParams(h); };

async function openSet(s) {
  if (s === set) return;
  set = s; areas = []; hover = pick = null; allPath = null;
  const t = ++token;
  chips();
  resize();
  const ls = inSet(s);
  const walks = await Promise.all(ls.map(l => loadWalk(l.id)));
  if (t !== token) return;
  areas = ls.map((l, i) => walks[i] && { l, path: walkPath([walks[i]]), box: ringsBox([walks[i]]) }).filter(a => a?.box);
  allPath = walkPath(walks.filter(Boolean));
  schedule();
}
async function fromHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  const place = LOCATIONS[h.get("place")];
  const s = place?.set ?? (MAP_SETS[h.get("set")] ? +h.get("set") : 1);
  await openSet(s);
  pick = place ? areas.find(a => a.l.id === place.id) || null : null;
  const region = +h.get("region");
  const boxes = pick ? [pick.box] : h.has("region") ? areas.filter(a => a.l.region === region).map(a => a.box) : [];
  for (const b of $("regions").children) b.setAttribute("aria-pressed", b.dataset.set ? +b.dataset.set === set : h.has("region") && +b.dataset.region === region);
  showPanel();
  boxes.length ? zoomTo(boxes) : fit();
}
window.addEventListener("hashchange", fromHash);

/* ---------- the panel for the picked area ---------- */
function showPanel() {
  if (!pick) { panel.hidden = true; return; }
  const l = pick.l, same = areas.filter(a => a !== pick && a.l.terrain && a.l.terrain === l.terrain).map(a => a.l);
  panel.hidden = false;
  panel.innerHTML = `<button class="wm-close" title="Close" aria-label="Close">×</button><ul>${[l, ...same].map(x =>
    `<li><b>${esc(x.name)}</b>${x.type !== 14 && x.type !== 17 ? `<a href="${HREF.place(x.id)}">Location →</a>` : ""}${MISSIONS[x.id] ? `<a href="${HREF.mission(x.id)}">Mission →</a>` : ""}</li>`).join("")}</ul>`;
}
panel.addEventListener("click", e => {
  if (e.target.closest(".wm-close")) { pick = null; showPanel(); history.replaceState(null, "", hash({ set })); schedule(); }
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
function zoomTo(boxes) {
  const x0 = Math.min(...boxes.map(b => b[0])), y0 = Math.min(...boxes.map(b => b[1])), x1 = Math.max(...boxes.map(b => b[2])), y1 = Math.max(...boxes.map(b => b[3]));
  const m = Math.max(x1 - x0, y1 - y0) * 0.1;
  view.zoom = Math.max(fitZoom(), Math.min(MAX_ZOOM, cssW / (x1 - x0 + 2 * m), cssH / (y1 - y0 + 2 * m)));
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
const marks = () => (nomarks.checked ? [] : inSet(set).filter(l => l.at && isOutpost(l)).map(l => ({ id: l.id, x: l.at[0], y: l.at[1], kind: markKind(l), name: l.name })));
function portals() {
  if (noportals.checked) return [];
  const seen = new Set(), out = [];
  for (const l of inSet(set)) for (const e of l.exits || []) if (e.at && !seen.has(e.at.join())) { seen.add(e.at.join()); out.push(e.at); }
  return out;
}
function draw() {
  raf = 0;
  if (set == null || !cssW) return;
  const fade = Math.min(1, Math.max(0.15, view.zoom / (fitZoom() * 2)));
  const outlines = [];
  if (allPath) outlines.push([allPath, "#ffffff", 1, 0.35 * fade]);
  if (hover && hover !== pick) outlines.push([hover.path, "#ffffff", 1.6, 0.9]);
  if (pick) outlines.push([pick.path, MAP_RING, 2.2, 1]);
  // labels only where they have room
  const ms = view.zoom > fitZoom() * 1.6 || set >= 100 ? marks() : marks().map(m => ({ ...m, name: "" }));
  paintMap(ctx, { set, zoom: view.zoom, x: view.x, y: view.y, dpr, lit: allPath, dark: dark.value / 100, outlines, marks: ms, portals: portals(), redraw: schedule });
}

/* ---------- pointer ---------- */
const local = e => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
const onMap = p => ({ x: (p.x - view.x) / view.zoom, y: (p.y - view.y) / view.zoom });
function markAt(p) {
  let best = null, bd = 12;
  for (const m of marks()) {
    const d = Math.hypot(view.x + m.x * view.zoom - p.x, view.y + m.y * view.zoom - p.y);
    if (d < bd) { bd = d; best = m; }
  }
  return best;
}
// the area under a map point: the smallest one there, so an outpost inside an area wins
function areaAt({ x, y }) {
  const hits = areas.filter(a => x >= a.box[0] && x <= a.box[2] && y >= a.box[1] && y <= a.box[3] && ctx.isPointInPath(a.path, x, y, "evenodd"));
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
  const mk = drag ? null : markAt(p), a = mk || drag ? null : areaAt(onMap(p));
  if (a !== hover) { hover = a; schedule(); }
  if (mk || a) {
    tip.hidden = false;
    tip.textContent = mk ? `${mk.name} · ${MARK_STYLE[mk.kind][2]}` : a.l.name;
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
    if (mk) { endDrag(); location.href = HREF.place(mk.id); return; }
    pick = areaAt(onMap(local(e)));
    history.replaceState(null, "", pick ? hash({ place: pick.l.id }) : hash({ set }));
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
fromHash();
