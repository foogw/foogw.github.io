"use strict";

/* The Maps page: one region of the world map at a time, darkened except where you can walk. Drag to move, wheel or
   pinch to zoom, click an area for its Locations and Missions pages. #region=<id> opens a region, #area=<name> also
   picks out that area. Data: data/world.js (tools/worldmap.py). */
const WORLD = window.GW_WORLD || [], PAGES = window.GW_WORLD_PAGES || {};
const GROUP_COLOR = { "Pre-Searing": "--p-mesmer", Tyria: "--p-paragon", Cantha: "--p-ritualist", Elona: "--p-elementalist", "Realm of Torment": "--p-dervish",
  "Eye of the North": "--p-monk", Elite: "--p-necromancer" };
const MAX_FIT = 2;
const VEIL = "#06080a", HOVER = "#ffffff", PICK = "#ffd98a";
const areaRegion = new Map();  // site name -> [region, layer]
for (const r of WORLD) for (const l of r.layers) for (const n of l.names) if (!areaRegion.has(n)) areaRegion.set(n, [r, l]);

const stage = $("stage"), cv = stage.querySelector("canvas"), ctx = cv.getContext("2d"), tip = $("tip"), panel = $("panel");
const dark = $("dark"), nomarks = $("nomarks"), noportals = $("noportals"), unknown = $("unknown");
// the towns, outposts and missions on the map, and on request the table's other map points by number ("#727", no
// page), and the portals; the choices are remembered in this browser only
for (const [box, key] of [[nomarks, "maps.nomarks"], [noportals, "maps.noportals"], [unknown, "maps.unknown"]]) {
  try { box.checked = localStorage.getItem(key) === "1"; } catch (e) { /* storage blocked */ }
  box.addEventListener("change", () => {
    try { localStorage.setItem(key, box.checked ? "1" : "0"); } catch (e) { /* storage blocked */ }
    hoverMark = null; schedule();
  });
}
// the portals between areas, named on hover
const plain = n => n.replace(/ \(pre-Searing\)$/, "");
// a swirl on the picture not yet tied to two places is drawn apart, for checking
const portals = () => (region?.portals || []).map(([x, y, a, b]) => a ? [`${plain(a)} ↔ ${plain(b)}`, "portal", x, y] : [`Unpaired swirl ${x},${y}`, "swirl", x, y]);
const marks = () => [...(nomarks.checked ? [] : region?.marks || []), ...(unknown.checked ? region?.unknown || [] : []), ...(noportals.checked ? [] : portals())];
let region = null, base = null, layers = [], hover = null, pick = null, hoverMark = null;
const view = { zoom: 1, x: 0, y: 0 };
let cssW = 0, cssH = 0, dpr = 1, fitZoom = 1, raf = 0, loadToken = 0;

/* ---------- region and area choice ---------- */
const groups = [...new Set(WORLD.map(r => r.group))];
$("groups").innerHTML = groups.map(g =>
  `<button class="prof-chip" data-group="${esc(g)}" style="--c:var(${GROUP_COLOR[g] || "--p-none"})">${esc(g)}</button>`).join("");
$("groups").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) openRegion(WORLD.find(r => r.group === b.dataset.group));
});
$("regions").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) openRegion(WORLD.find(r => r.id === b.dataset.region));
});

function chips() {
  for (const b of $("groups").children) b.setAttribute("aria-pressed", b.dataset.group === region.group);
  $("regions").innerHTML = WORLD.filter(r => r.group === region.group).map(r =>
    `<button data-region="${esc(r.id)}" aria-pressed="${r === region}">${esc(r.label)}</button>`).join("");
}

// the address names the open region or area, except for the region the page opens on by itself
function setHash(h) {
  const url = h ? `#${new URLSearchParams(h)}` : location.pathname + location.search;
  try { history.replaceState(null, "", url); } catch (e) { /* sandboxed */ }
}

function openRegion(r, area = null, quiet = false) {
  if (!r) return;
  const same = r === region, token = same ? loadToken : ++loadToken;
  region = r; hover = null;
  if (!same) { base = null; layers = r.layers.map(l => ({ ...l, img: null, bits: null })); }
  pick = area && layers.find(l => l.m === area.m);
  chips();
  if (!quiet) setHash(pick ? { area: pick.names[0] } : { region: r.id });
  showPanel();
  if (same) { pick ? zoomTo(pick) : fit(); return; }
  draw();
  const load = src => new Promise((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = src; });
  dev.load();
  load(`img/world/${r.id}/base.webp`).then(img => {
    if (token !== loadToken) return;
    base = img; resize(); pick ? zoomTo(pick) : fit();
  });
  for (const l of layers) load(`img/world/${r.id}/m${l.m}.png`).then(img => {
    if (token !== loadToken) return;
    l.img = img;
    const c = document.createElement("canvas"); c.width = img.width; c.height = img.height;
    const g = c.getContext("2d", { willReadFrequently: true }); g.drawImage(img, 0, 0);
    l.bits = g.getImageData(0, 0, c.width, c.height).data;
    schedule();
  }, () => {});
}

function fromHash() {
  const h = new URLSearchParams(location.hash.slice(1));
  const hit = h.get("area") && areaRegion.get(h.get("area"));
  if (hit) return openRegion(hit[0], hit[1]);
  const r = WORLD.find(r => r.id === h.get("region"));
  openRegion(r || region || WORLD[0], null, !r && !region);
}
window.addEventListener("hashchange", fromHash);

/* ---------- the panel for the picked area ---------- */
function showPanel() {
  if (!pick || !pick.names.length) { panel.hidden = true; return; }
  panel.hidden = false;
  panel.innerHTML = `<button class="wm-close" title="Close" aria-label="Close">×</button><ul>${pick.names.map(n => {
    const k = PAGES[n] || "";
    return `<li><b>${esc(n)}</b>${k.includes("l") ? `<a href="locations#${new URLSearchParams({ place: n })}">Location →</a>` : ""}${k.includes("m") ? `<a href="${esc(missionHref(n))}">Mission →</a>` : ""}</li>`;
  }).join("")}</ul>`;
}
panel.addEventListener("click", e => {
  if (e.target.closest(".wm-close")) { pick = null; showPanel(); setHash({ region: region.id }); schedule(); }
});

/* ---------- view ---------- */
function resize() {
  dpr = window.devicePixelRatio || 1;
  const r = stage.getBoundingClientRect();
  if (r.width < 2 || r.height < 2) return;
  const was = fitZoom;
  cssW = Math.round(r.width); cssH = Math.round(r.height);
  cv.width = Math.round(cssW * dpr); cv.height = Math.round(cssH * dpr);
  // a small picture is shown at most twice its size, centred, rather than blown up to fill the frame
  if (region) fitZoom = Math.min(cssW / region.w, cssH / region.h, MAX_FIT);
  if (view.zoom === was) fit(); else clamp();
  schedule();
}
function fit() { view.zoom = fitZoom; view.x = (cssW - region.w * fitZoom) / 2; view.y = (cssH - region.h * fitZoom) / 2; schedule(); }
function zoomTo(l) {
  if (!l || !cssW) return fit();
  const m = Math.max(l.w, l.h) * 0.15;
  view.zoom = Math.max(fitZoom, Math.min(fitZoom * 16, MAX_FIT, cssW / (l.w + 2 * m), cssH / (l.h + 2 * m)));
  view.x = cssW / 2 - (l.x + l.w / 2) * view.zoom; view.y = cssH / 2 - (l.y + l.h / 2) * view.zoom;
  clamp(); schedule();
}
function clamp() {
  const pw = region.w * view.zoom, ph = region.h * view.zoom, mx = Math.min(cssW, Math.max(80, pw / 4)), my = Math.min(cssH, Math.max(80, ph / 4));
  view.x = Math.min(cssW - mx, Math.max(mx - pw, view.x));
  view.y = Math.min(cssH - my, Math.max(my - ph, view.y));
}
function zoomAt(k, x, y) {
  const z = Math.min(fitZoom * 24, Math.max(fitZoom * 0.5, view.zoom * k));
  view.x = x - (x - view.x) * z / view.zoom; view.y = y - (y - view.y) * z / view.zoom; view.zoom = z;
  clamp(); schedule();
}

/* ---------- drawing ---------- */
const veil = document.createElement("canvas"), ringCv = document.createElement("canvas");
const tints = new Map();
function tinted(l, color) {
  const key = l.m + color;
  if (!tints.has(key)) {
    const c = document.createElement("canvas"); c.width = l.img.width; c.height = l.img.height;
    const g = c.getContext("2d"); g.drawImage(l.img, 0, 0); g.globalCompositeOperation = "source-in"; g.fillStyle = color; g.fillRect(0, 0, c.width, c.height);
    tints.set(key, c);
  }
  return tints.get(key);
}
// a thin line just outside one area's walkable edge
function ring(l, color, width, alpha) {
  const A = dpr * view.zoom, E = dpr * view.x, F = dpr * view.y, m = Math.ceil(width * dpr) + 2;
  // only the part on screen: zoomed far in, a whole area would need a canvas too big to draw
  const x0 = Math.floor(Math.max(E + A * l.x - m, -m)), y0 = Math.floor(Math.max(F + A * l.y - m, -m));
  const w = Math.ceil(Math.min(E + A * (l.x + l.w) + m, cv.width + m)) - x0, h = Math.ceil(Math.min(F + A * (l.y + l.h) + m, cv.height + m)) - y0;
  if (w <= 0 || h <= 0) return;
  ringCv.width = w; ringCv.height = h;
  const g = ringCv.getContext("2d"), t = tinted(l, color), r = width * dpr;
  for (let i = 0; i < 8; i++) g.drawImage(t, A * l.x + E - x0 + Math.cos(i * Math.PI / 4) * r, A * l.y + F - y0 + Math.sin(i * Math.PI / 4) * r, A * l.w, A * l.h);
  g.globalCompositeOperation = "destination-out"; g.drawImage(l.img, A * l.x + E - x0, A * l.y + F - y0, A * l.w, A * l.h);
  ctx.globalAlpha = alpha; ctx.drawImage(ringCv, Math.round(x0), Math.round(y0)); ctx.globalAlpha = 1;
}
function schedule() { if (!raf) raf = requestAnimationFrame(draw); }
// read once: opening a region rewrites the address
// and remembered in this browser once a link turns it on
const DEV = (() => {
  const on = new URLSearchParams(location.hash.slice(1)).has("dev");
  try { if (on) localStorage.setItem("maps.dev", "1"); return on || localStorage.getItem("maps.dev") === "1"; } catch (e) { return on; }
})();
/* ---------- dev: points and lines drawn by hand (Alt-click), and the overlaps left to resolve (#...&dev) ---------- */
const dev = {
  lines: [[]], overlay: null, box: null,
  on: () => DEV,
  ui() {
    if (this.box) return;
    const bar = document.querySelector(".wm-bar");
    const w = document.createElement("div"); w.className = "dev-pts";
    w.innerHTML = `<textarea rows="4" placeholder="Alt-click to add points; type notes freely; copy from here"></textarea>
      <button type="button" data-dev="new">New line</button><button type="button" data-dev="undo">Undo</button><button type="button" data-dev="clear">Clear</button>`;
    bar.after(w); this.box = w.querySelector("textarea");
    // typing ends the current line: the next point starts a new one
    this.box.addEventListener("input", () => { if (this.lines.at(-1).length) this.lines.push([]); });
    w.addEventListener("click", e => {
      const k = e.target.dataset.dev;
      if (k === "new" && this.lines.at(-1).length) { this.lines.push([]); this.box.value += "\n"; }
      if (k === "undo" && this.lines.at(-1).length) {  // the last point, from the map and the text
        this.lines.at(-1).pop(); this.box.value = this.box.value.replace(/\s*\S+,\S+\s*$/, "");
        if (!this.lines.at(-1).length) this.box.value = this.box.value.replace(/\S+\s*$/, "");
      }
      if (k === "clear") { this.lines = [[]]; this.box.value = ""; }
      schedule();
    });
  },
  // a point goes on the map and at the end of the text (which the user may also type in)
  add(x, y) {
    this.ui();
    const line = this.lines.at(-1);
    if (!line.length) this.box.value += `${this.box.value && !this.box.value.endsWith("\n") ? "\n" : ""}${region.id}`;
    line.push([x, y]); this.box.value += ` ${x},${y}`;
    schedule();
  },
  // another map: its marks go, the text stays
  reset() { this.lines = [[]]; if (this.box && this.box.value && !this.box.value.endsWith("\n")) this.box.value += "\n"; },
  load() {
    this.overlay = null; this.reset();
    if (!this.on() || !region) return;
    this.ui();
    const i = new Image(); i.onload = () => { this.overlay = i; schedule(); }; i.src = `http://127.0.0.1:8766/overlap/dev/${region.id}.png?r=${Date.now()}`;
  },
  draw(T) {
    if (this.overlay) { ctx.setTransform(...T); ctx.drawImage(this.overlay, 0, 0, region.w, region.h); }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (const l of this.lines) {
      const pts = l.map(([x, y]) => [dpr * (view.x + x * view.zoom), dpr * (view.y + y * view.zoom)]);
      ctx.lineWidth = 2 * dpr; ctx.strokeStyle = "#3df2ff"; ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke();
      for (const [x, y] of pts) { ctx.beginPath(); ctx.arc(x, y, 4 * dpr, 0, 2 * Math.PI); ctx.fillStyle = "#3df2ff"; ctx.fill(); ctx.strokeStyle = "#000"; ctx.lineWidth = 1.5 * dpr; ctx.stroke(); }
    }
  },
};

function draw() {
  raf = 0;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#0c0d0f"; ctx.fillRect(0, 0, cv.width, cv.height);
  if (!base) return;
  const T = [dpr * view.zoom, 0, 0, dpr * view.zoom, dpr * view.x, dpr * view.y];
  ctx.setTransform(...T); ctx.imageSmoothingQuality = "high";
  ctx.drawImage(base, 0, 0, region.w, region.h);
  const a = dark.value / 100, ready = layers.filter(l => l.img);
  if (a > 0) {
    if (veil.width !== cv.width || veil.height !== cv.height) { veil.width = cv.width; veil.height = cv.height; }
    const v = veil.getContext("2d");
    v.setTransform(1, 0, 0, 1, 0, 0); v.globalCompositeOperation = "source-over"; v.clearRect(0, 0, veil.width, veil.height);
    v.setTransform(...T); v.fillStyle = VEIL; v.fillRect(0, 0, region.w, region.h);
    v.globalCompositeOperation = "destination-out";
    for (const l of ready) v.drawImage(l.img, l.x, l.y, l.w, l.h);
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = a; ctx.drawImage(veil, 0, 0); ctx.globalAlpha = 1;
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  // faint outlines on every area, fading out when zoomed far out where they pile up; unnamed areas dimmer still
  const fade = Math.min(1, Math.max(0.15, view.zoom / (fitZoom * 2)));
  for (const l of ready) if (l !== hover && l !== pick) ring(l, HOVER, 1, (l.names.length ? 0.35 : 0.12) * fade);
  if (hover && hover.img && hover !== pick) ring(hover, HOVER, 1.4, 0.9);
  if (pick && pick.img) ring(pick, PICK, 2, 1);
  dev.draw(T);
  // towns and outposts keep their size on screen at every zoom
  for (const [n, k, x, y] of marks()) {
    const px = dpr * (view.x + x * view.zoom), py = dpr * (view.y + y * view.zoom), sc = dpr * (n === hoverMark?.[0] ? 1.3 : 1);
    if (k === "portal" || k === "swirl") drawSwirl(ctx, px, py, sc, k === "swirl" ? "#ff4fd8" : "#d8f6ff");  // named on hover only
    else drawMark(ctx, k, px, py, sc, n);
  }
}

/* ---------- pointer ---------- */
// the marker under a stage point (CSS px), if any
function markAt(p) {
  let best = null, bd = 12;
  for (const m of marks()) {
    const d = Math.hypot(view.x + m[2] * view.zoom - p.x, view.y + m[3] * view.zoom - p.y);
    if (d < bd) { bd = d; best = m; }
  }
  return best;
}
function layerAt(px, py) {
  const tol = 3 / view.zoom;
  for (let i = layers.length - 1; i >= 0; i--) {
    const l = layers[i];
    if (!l.bits || px < l.x - tol || py < l.y - tol || px > l.x + l.w + tol || py > l.y + l.h + tol) continue;
    const sx = l.img.width / l.w, sy = l.img.height / l.h;
    for (const [dx, dy] of [[0, 0], [tol, 0], [-tol, 0], [0, tol], [0, -tol]]) {
      const x = Math.floor((px + dx - l.x) * sx), y = Math.floor((py + dy - l.y) * sy);
      if (x >= 0 && y >= 0 && x < l.img.width && y < l.img.height && l.bits[(y * l.img.width + x) * 4 + 3] > 127) return l;
    }
  }
  return null;
}
const local = e => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
const pic = p => ({ x: (p.x - view.x) / view.zoom, y: (p.y - view.y) / view.zoom });

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
  const mk = drag ? null : markAt(p), q = pic(p), l = mk ? null : layerAt(q.x, q.y);
  if (l !== hover || mk !== hoverMark) { hover = l; hoverMark = mk; schedule(); }
  if (mk || (l && l.names.length && !drag)) {
    tip.hidden = false;
    tip.textContent = !mk ? l.names.join(" · ") : mk[1] === "portal" ? `Portal: ${mk[0]}` : mk[1] === "swirl" ? mk[0] : mk[0].startsWith("#") ? `Map ${mk[0]} · ${MARK_STYLE[mk[1]][2]}, no page on this site`
      : `${mk[0]} · ${(MARK_STYLE[mk[1]] || MARK_STYLE.outpost)[2]}`;
    tip.style.left = `${Math.min(p.x + 14, cssW - tip.offsetWidth - 6)}px`; tip.style.top = `${p.y + 16}px`;
  } else tip.hidden = true;
  stage.style.cursor = mk || (l && l.names.length) ? "pointer" : "";
});
function up(e) {
  const was = pointers.size;
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinch = null;
  if (was === 1 && !moved && e.type === "pointerup" && e.altKey) {  // dev: a point for a portal or a hand-drawn border
    const q = pic(local(e));
    dev.add(Math.round(q.x), Math.round(q.y));
    endDrag(); return;
  }
  if (was === 1 && !moved && e.type === "pointerup") {
    const mk = markAt(local(e));
    if (mk && !mk[0].startsWith("#") && mk[1] !== "portal" && mk[1] !== "swirl") { endDrag(); location.href = markHref(mk[0]); return; }
    const q = pic(local(e)), l = layerAt(q.x, q.y);
    pick = l && l.names.length ? l : null;
    setHash(pick ? { area: pick.names[0] } : { region: region.id });
    showPanel(); schedule();
  }
  if (!pointers.size) endDrag();
}
function endDrag() { pointers.clear(); drag = null; pinch = null; stage.classList.remove("dragging"); }
// coming back with the browser's Back button restores the page as it was left: never in the middle of a drag
window.addEventListener("pageshow", endDrag);
stage.addEventListener("pointerup", up);
stage.addEventListener("pointercancel", up);
stage.addEventListener("pointerleave", () => { tip.hidden = true; if (hover || hoverMark) { hover = hoverMark = null; schedule(); } });
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
