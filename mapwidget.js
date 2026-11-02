"use strict";

/* Maps: a map set's picture (game/maps.js) drawn from its tiles, darkened except where the chosen areas can be
   walked (game/walk/<map id>.json), with markers for places and portals. mapHTML(ids) gives a window on some areas,
   initMaps(root) brings the windows in it to life; paintMap draws any view, for the Maps page and the route finder. */
// the maps, and the places with walkable ground: map id -> the map it is on
const MAP_SETS = data("GW_MAPS")?.sets || {}, WALK_SET = new Map(Object.entries(data("GW_MAPS")?.walks || {}).map(([k, s]) => [+k, s]));
const HAS_WALK = { has: id => WALK_SET.has(+id) };
const TILE = 256;
const MAP_TINT = "#06080a", MAP_RING = "#ffd98a", MAP_MAX_H = 520;

/* ---------- loading ---------- */
const WALKS = new Map();
// a location's walkable ground, {set, rings: [[x0, y0, x1, y1, ...]]}, or null where the site has none
function loadWalk(id) {
  if (!HAS_WALK.has(+id)) return Promise.resolve(null);
  if (!WALKS.has(+id)) WALKS.set(+id, fetch(`game/walk/${id}.json`).then(r => (r.ok ? r.json() : null)).catch(() => null));
  return WALKS.get(+id);
}
// the rings as one path in map pixels (filled non-zero: holes run the other way and stay dark)
function walkPath(walks) {
  const p = new Path2D();
  for (const w of walks) for (const r of w.rings) {
    p.moveTo(r[0], r[1]);
    for (let i = 2; i < r.length; i += 2) p.lineTo(r[i], r[i + 1]);
    p.closePath();
  }
  return p;
}
function ringsBox(walks) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const w of walks) for (const r of w.rings) for (let i = 0; i < r.length; i += 2) {
    x0 = Math.min(x0, r[i]); x1 = Math.max(x1, r[i]); y0 = Math.min(y0, r[i + 1]); y1 = Math.max(y1, r[i + 1]);
  }
  return x0 < x1 ? [x0, y0, x1, y1] : null;
}
const TILES = new Map();
// a tile's picture once loaded (or null while loading, or off the map); onLoad redraws. Tiles cover the whole map:
// level 1 a tile per 256 map pixels, level 0 a tile per 1024
function tile(set, z, x, y, onLoad) {
  const m = MAP_SETS[set], span = z ? TILE : TILE * 4;
  if (!m || x * span >= m.w || y * span >= m.h) return null;
  const key = `${set}/${z}/${x}-${y}`;
  let t = TILES.get(key);
  if (!t) {
    t = { img: new Image(), ok: false, waiting: new Set() };
    t.img.onload = () => { t.ok = true; for (const f of t.waiting) f(); t.waiting.clear(); };
    t.img.onerror = () => t.waiting.clear();
    t.img.src = `img/tiles/${key}.webp`;
    TILES.set(key, t);
  }
  if (!t.ok && onLoad) t.waiting.add(onLoad);
  return t.ok ? t.img : null;
}

/* ---------- drawing ---------- */
// towns, outposts, mission outposts and dungeons: [fill, radius in CSS px, label]
const MARK_STYLE = { outpost: ["#f2eee4", 6.5, "Outpost"], mission: ["#e8664a", 7, "Mission outpost"], dungeon: ["#a99bff", 7, "Dungeon"],
  explorable: ["#7cbf8a", 5.5, "Area"] };
const markKind = l => (l.type === 5 || l.type === 6 ? "mission" : l.type === 18 ? "dungeon" : isOutpost(l) ? "outpost" : "explorable");
// a portal: a small swirl of four spiral arms, like the game's own map icon (scale = device pixels per CSS px)
function drawSwirl(g, x, y, scale = 1, color = "#d8f6ff") {
  const r = 5.5 * scale;
  g.save(); g.translate(x, y); g.lineCap = "round";
  for (const [w, c] of [[3.4 * scale, "rgb(0 0 0 / .8)"], [1.6 * scale, color]]) {
    g.lineWidth = w; g.strokeStyle = c;
    for (let i = 0; i < 4; i++) {
      const a0 = i * Math.PI / 2;
      g.beginPath();
      for (let t = 0; t <= 1.0001; t += 0.1) {
        const ang = a0 + t * 2.9, rr = r * (0.1 + 0.9 * Math.sqrt(t));
        t ? g.lineTo(rr * Math.cos(ang), rr * Math.sin(ang)) : g.moveTo(rr * Math.cos(ang), rr * Math.sin(ang));
      }
      g.stroke();
    }
  }
  g.restore();
}
// a swirl or a dot drawn once per look and size, then copied: a continent has hundreds
const SPRITES = new Map();
function sprite(key, size, paint) {
  if (!SPRITES.has(key)) {
    const c = document.createElement("canvas");
    c.width = c.height = Math.ceil(size);
    paint(c.getContext("2d"), size / 2);
    SPRITES.set(key, c);
  }
  return SPRITES.get(key);
}
// a dot, and the place's name beside it (in device pixels; scale = device pixels per CSS px)
function drawMark(g, kind, x, y, scale = 1, name = "", self = false) {
  const [fill, r] = MARK_STYLE[kind] || MARK_STYLE.outpost;
  if (self) {  // the place the page is about: a ring around a larger dot
    scale *= 1.3;
    g.beginPath(); g.arc(x, y, (r + 5) * scale, 0, 2 * Math.PI); g.lineWidth = 3 * scale; g.strokeStyle = MAP_RING; g.stroke();
  }
  const dot = sprite(`${kind}:${scale}`, (r + 2) * scale * 2, (c, m) => {
    c.beginPath(); c.arc(m, m, r * scale, 0, 2 * Math.PI);
    c.fillStyle = fill; c.fill(); c.lineWidth = 2.5 * scale; c.strokeStyle = "#111"; c.stroke();
  });
  g.drawImage(dot, x - dot.width / 2, y - dot.height / 2);
  if (!name) return;
  g.font = `600 ${13 * scale}px system-ui, sans-serif`; g.textBaseline = "middle"; g.lineJoin = "round";
  // beside the dot on the right, or on the left where the right would run off the picture
  const gap = (r + 4) * scale, left = x + gap + g.measureText(name).width > g.canvas.width;
  const tx = left ? x - gap : x + gap;
  g.textAlign = left ? "right" : "left";
  g.lineWidth = 3.5 * scale; g.strokeStyle = "rgb(0 0 0 / .85)"; g.strokeText(name, tx, y);
  g.fillStyle = "#fff"; g.fillText(name, tx, y);
  g.textAlign = "left";
}

const veil = document.createElement("canvas");
/* One view of a map set onto a canvas. v: { set, zoom (CSS px per map pixel), x, y (CSS px of the map's corner),
   dpr, ground(ctx, z): draws over the tiles, lit: Path2D of the ground to keep bright (or null: all bright), dark (0-1), outlines: [[Path2D, color, width]],
   marks: [{ x, y, kind, name, self }], portals: [[x, y]], redraw }. */
function paintMap(ctx, v) {
  const W = ctx.canvas.width, H = ctx.canvas.height, d = v.dpr, z = v.zoom * d;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#0c0d0f"; ctx.fillRect(0, 0, W, H);
  // the tiles at the level that keeps them sharp: a quarter-size level once a map pixel is under half a screen pixel
  const level = z < 0.5 ? 0 : 1, span = level ? TILE : TILE * 4, s = z * span;
  const tx0 = Math.max(0, Math.floor(-v.x * d / s)), ty0 = Math.max(0, Math.floor(-v.y * d / s));
  const tx1 = Math.floor((W - v.x * d) / s), ty1 = Math.floor((H - v.y * d) / s);
  ctx.imageSmoothingQuality = "high";
  for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) {
    const img = tile(v.set, level, tx, ty, v.redraw);
    // whole device pixels, so neighbouring tiles meet without a seam
    if (img) { const x = Math.round(v.x * d + tx * s), y = Math.round(v.y * d + ty * s); ctx.drawImage(img, x, y, Math.round(v.x * d + (tx + 1) * s) - x, Math.round(v.y * d + (ty + 1) * s) - y); }
  }
  const T = [z, 0, 0, z, v.x * d, v.y * d];
  if (v.lit && v.dark > 0) {
    if (veil.width !== W || veil.height !== H) { veil.width = W; veil.height = H; }
    const g = veil.getContext("2d");
    g.setTransform(1, 0, 0, 1, 0, 0); g.globalCompositeOperation = "source-over";
    g.fillStyle = MAP_TINT; g.fillRect(0, 0, W, H);
    g.setTransform(...T); g.globalCompositeOperation = "destination-out"; g.fill(v.lit, "nonzero");
    ctx.globalAlpha = v.dark; ctx.drawImage(veil, 0, 0); ctx.globalAlpha = 1;
  }
  if (v.ground) v.ground(ctx, z);  // the caller's own darkening and outlines (the Maps page caches them)
  ctx.setTransform(...T); ctx.lineJoin = "round";
  for (const [p, color, width, alpha = 1] of v.outlines || []) {
    ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = width * d / z; ctx.stroke(p);
  }
  ctx.globalAlpha = 1;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const at = (x, y) => [(v.x + x * v.zoom) * d, (v.y + y * v.zoom) * d];
  const seen = ([x, y]) => x > -40 && y > -40 && x < W + 40 && y < H + 40;  // and the rest skipped
  const swirl = sprite(`swirl:${d}`, 16 * d, (c, m) => drawSwirl(c, m, m, d));
  for (const [x, y] of v.portals || []) { const p = at(x, y); if (seen(p)) ctx.drawImage(swirl, p[0] - swirl.width / 2, p[1] - swirl.height / 2); }
  for (const m of v.marks || []) { const p = at(m.x, m.y); if (m.self || seen(p)) drawMark(ctx, m.kind, ...p, d, m.name, m.self); }
}

/* ---------- a window on some areas ---------- */
// ids: the areas lit; self: a place the page is about, marked out (an outpost shows the areas around it)
// town: an outpost whose own town to light (where its mission's ground shares its map id), not the mission's ground
function mapHTML(ids, { self = null, height = MAP_MAX_H, town = null } = {}) {
  ids = [...new Set(ids.map(Number))];
  if (!ids.length && !self) return "";
  return `<figure class="gmap" data-ids="${ids.join(",")}"${self ? ` data-self="${self}"` : ""}${town ? ` data-town="${town}"` : ""} data-h="${height}">
    <div class="gmap-win" tabindex="0" role="img"><canvas></canvas></div>
    <figcaption><label>Darkness <input type="range" min="0" max="100" value="66"></label>
      <label title="Outposts, mission outposts and dungeons"><input type="checkbox" class="gmap-nomarks"${hideMarks() ? " checked" : ""}> Hide markers</label></figcaption>
  </figure>`;
}
// hiding the markers is one choice for every map, remembered in this browser only
const hideMarks = () => { try { return localStorage.getItem("maps.nomarks") === "1"; } catch { return false; } };

// the places to mark in a box of a set: the areas themselves and places a portal joins to one of them
function nearMarks(set, ids, self, box) {
  const near = new Set([...ids, self].filter(Boolean));
  for (const i of [...near]) for (const e of LOCATIONS[i]?.exits || []) near.add(e.to);
  for (const l of Object.values(LOCATIONS)) if ((l.exits || []).some(e => ids.includes(e.to))) near.add(l.id);
  const [x0, y0, x1, y1] = box;
  return [...near].map(i => LOCATIONS[i]).filter(l => l && l.set === set && l.at && isOutpost(l)
    && l.at[0] >= x0 && l.at[0] <= x1 && l.at[1] >= y0 && l.at[1] <= y1)
    .map(l => ({ id: l.id, x: l.at[0], y: l.at[1], kind: markKind(l), name: l.name, self: l.id === self }));
}

async function initMap(fig) {
  const ids = (fig.dataset.ids || "").split(",").filter(Boolean).map(Number), self = +fig.dataset.self || null;
  // only places on a map have ground to load
  const town = +fig.dataset.town || null;
  const walks = (await Promise.all(ids.map(loadWalk))).map((w, i) => w && { set: w.set, rings: ids[i] === town && w.town ? w.town : w.rings, id: ids[i] }).filter(Boolean);
  const place = LOCATIONS[self] || LOCATIONS[ids[0]];
  const set = walks[0]?.set ?? place?.set;
  if (set == null || !MAP_SETS[set]) { fig.remove(); return; }
  const lit = walks.filter(w => w.set === set);
  // the box: the areas' ground and the place marked out, with a margin, kept within the map
  let box = ringsBox(lit);
  for (const l of [LOCATIONS[self], ...ids.map(i => LOCATIONS[i])]) if (l?.set === set && l.at) {
    const [x, y] = l.at;
    box = box ? [Math.min(box[0], x), Math.min(box[1], y), Math.max(box[2], x), Math.max(box[3], y)] : [x - 250, y - 180, x + 250, y + 180];
  }
  if (!box) { fig.remove(); return; }
  const pad = Math.max(40, 0.08 * Math.max(box[2] - box[0], box[3] - box[1])), S = MAP_SETS[set];
  box = [Math.max(0, box[0] - pad), Math.max(0, box[1] - pad), Math.min(S.w, box[2] + pad), Math.min(S.h, box[3] + pad)];
  const bw = box[2] - box[0], bh = box[3] - box[1], maxH = +fig.dataset.h;
  const win = fig.querySelector(".gmap-win"), cv = win.querySelector("canvas"), ctx = cv.getContext("2d");
  win.style.aspectRatio = `${bw} / ${bh}`;
  win.style.width = `min(100%, ${Math.round(maxH * bw / bh)}px)`;
  win.setAttribute("aria-label", `${ids.map(locName).join(", ") || locName(self)}: where you can walk`);
  const slider = fig.querySelector("input[type=range]"), nomarks = fig.querySelector(".gmap-nomarks");
  const path = lit.length ? walkPath(lit) : null;
  const marks = nearMarks(set, ids, self, box);
  const portals = [];
  for (const i of ids) for (const e of LOCATIONS[i]?.exits || []) if (e.at && !portals.some(p => p[0] === e.at[0] && p[1] === e.at[1])) portals.push(e.at);
  // each marker is also a link, for the keyboard and for clicks
  win.insertAdjacentHTML("beforeend", marks.map(m => `<a class="gmap-mark" href="${HREF.place(m.id)}" title="${esc(m.name)} · ${MARK_STYLE[m.kind][2]}" aria-label="${esc(m.name)}"></a>`).join(""));
  const links = [...win.querySelectorAll(".gmap-mark")];
  // what is shown: the box, or a part of it (Shift+wheel zooms in, a drag then moves about)
  let cur = [...box];
  let raf = 0;
  const draw = () => {
    raf = 0;
    const d = window.devicePixelRatio || 1, w = Math.round(win.clientWidth * d), h = Math.round(win.clientHeight * d);
    if (!w) return;
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    const cw = cur[2] - cur[0], ch = cur[3] - cur[1], zoom = win.clientWidth / cw;
    links.forEach((a, i) => { a.style.left = `${(100 * (marks[i].x - cur[0]) / cw).toFixed(2)}%`; a.style.top = `${(100 * (marks[i].y - cur[1]) / ch).toFixed(2)}%`; });
    win.classList.toggle("nomarks", nomarks.checked);
    paintMap(ctx, { set, zoom, x: -cur[0] * zoom, y: -cur[1] * zoom, dpr: d, lit: path, dark: slider.value / 100,
      outlines: path ? [[path, MAP_RING, 1.2, 0.8 * slider.value / 100]] : [], portals, marks: nomarks.checked ? [] : marks,
      redraw: () => { raf ||= requestAnimationFrame(draw); } });
  };
  slider.addEventListener("input", draw);
  nomarks.addEventListener("change", () => {
    try { localStorage.setItem("maps.nomarks", nomarks.checked ? "1" : "0"); } catch { /* storage blocked */ }
    draw();
  });
  new ResizeObserver(draw).observe(win);
  // for pages that draw more on it (the route finder): box is what is shown now, onchange called when it moves,
  // dragged set when the last press moved the map (so it isn't a click)
  const mv = fig.mapView = { set, get box() { return cur; }, path, win, draw, onchange: null, dragged: false };
  const show = b => {
    const w = Math.min(bw, Math.max(bw / 12, b[2] - b[0])), h = w * bh / bw;
    const x0 = Math.min(box[2] - w, Math.max(box[0], b[0])), y0 = Math.min(box[3] - h, Math.max(box[1], b[1]));
    cur = [x0, y0, x0 + w, y0 + h];
    draw(); mv.onchange?.();
  };
  win.addEventListener("wheel", e => {
    if (!e.shiftKey) return;  // a plain wheel scrolls the page
    e.preventDefault();
    const r = win.getBoundingClientRect(), fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
    const k = Math.exp((e.deltaY || e.deltaX) * 0.002), w = (cur[2] - cur[0]) * k, h = (cur[3] - cur[1]) * k;  // Shift turns the wheel sideways on a Mac
    const x = cur[0] + fx * (cur[2] - cur[0]), y = cur[1] + fy * (cur[3] - cur[1]);
    show([x - fx * w, y - fy * h, x - fx * w + w, y - fy * h + h]);
  }, { passive: false });
  let grab = null;
  win.addEventListener("pointerdown", e => { grab = { x: e.clientX, y: e.clientY, cur }; mv.dragged = false; });
  win.addEventListener("pointermove", e => {
    if (!grab || cur[2] - cur[0] >= bw) return;  // nothing to move about when all of it shows
    const dx = e.clientX - grab.x, dy = e.clientY - grab.y;
    if (!mv.dragged && Math.abs(dx) + Math.abs(dy) < 5) return;
    mv.dragged = true;
    const k = (cur[2] - cur[0]) / win.clientWidth, [x0, y0, x1, y1] = grab.cur;
    show([x0 - dx * k, y0 - dy * k, x1 - dx * k, y1 - dy * k]);
  });
  window.addEventListener("pointerup", () => { grab = null; });
}
function initMaps(root = document) {
  return Promise.all([...root.querySelectorAll(".gmap:not([data-ready])")].map(fig => { fig.dataset.ready = ""; return initMap(fig); }));
}
// the areas to show for a place: its own ground, or an outpost's surroundings (the areas its exits lead to)
function placeAreas(l) {
  if (!l) return [];
  // an outpost, or a place with no ground of its own (a dungeon's entrance): it and the areas its exits lead to
  return isOutpost(l) || !HAS_WALK.has(l.id) ? [l.id, ...(l.exits || []).map(e => e.to).filter(i => !isOutpost(LOCATIONS[i]))] : [l.id];
}
