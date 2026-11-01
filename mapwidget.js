"use strict";

/* A window on one map: the game's world picture around the area, darkened except where you can walk. No dragging
   or zooming; the slider (or the wheel, once the map is clicked) sets how dark the rest is. mapHTML(name) gives the
   markup for a place or mission with a map in data/maps.js (or ""), initMaps(root) brings it to life. */
const GW_MAPS = window.GW_MAPS || {}, GW_PLACE_MAPS = window.GW_PLACE_MAPS || {};
const GW_REGIONS = new Map((window.GW_WORLD || []).map(r => [r.id, r]));
const MAP_TINT = "#06080a", MAP_RING = "#ffd98a", MAP_STEP = 0.05, MAP_MAX_H = 520;
const MAP_HINT = "Click, then scroll to change the darkness";

// the other pages showing the same map (an explorable and the missions played in it, or areas sharing one terrain),
// leaving out an "X (explorable)" twin of X, which its pages already link
function mapSharers(name) {
  const f = GW_MAPS[name]?.f, base = n => n.replace(/ \(explorable\)$/, "");
  return f ? Object.keys(GW_MAPS).filter(n => GW_MAPS[n].f === f && base(n) !== base(name)) : [];
}

// towns, outposts, mission outposts and dungeon entrances on a map: [fill, radius in CSS px, label]
const MARK_STYLE = { town: ["#ffd98a", 8, "Town"], outpost: ["#f2eee4", 6.5, "Outpost"], mission: ["#e8664a", 7, "Mission outpost"],
  dungeon: ["#a99bff", 7, "Dungeon"], unknown: ["#8a8f96", 5.5, "Map point"], portal: ["#7fd8ff", 5, "Portal"], swirl: ["#ff4fd8", 6, "Unpaired swirl"] };
const markHref = name => `locations#${new URLSearchParams({ place: name })}`;
// a portal: a small swirl of four spiral arms, like the game's own map icon (scale = device pixels per CSS px)
function drawSwirl(g, x, y, scale = 1, color = "#d8f6ff") {
  const r = 5.5 * scale, N = 4;
  g.save(); g.translate(x, y); g.lineCap = "round";
  for (const [w, c] of [[3.4 * scale, "rgb(0 0 0 / .8)"], [1.6 * scale, color]]) {
    g.lineWidth = w; g.strokeStyle = c;
    for (let i = 0; i < N; i++) {
      // each arm spirals out from the centre, bending round through almost half a circle
      const a0 = i * 2 * Math.PI / N;
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
// a dot, and the place's name beside it (drawn into a canvas in device pixels; scale = device pixels per CSS px)
function drawMark(g, kind, x, y, scale = 1, name = "", self = false) {
  const [fill, r] = MARK_STYLE[kind] || MARK_STYLE.outpost;
  if (self) {  // the place the page is about: a ring around a larger dot
    scale *= 1.3;
    g.beginPath(); g.arc(x, y, (r + 5) * scale, 0, 2 * Math.PI); g.lineWidth = 3 * scale; g.strokeStyle = MAP_RING; g.stroke();
  }
  g.beginPath(); g.arc(x, y, r * scale, 0, 2 * Math.PI);
  g.fillStyle = fill; g.fill(); g.lineWidth = 2.5 * scale; g.strokeStyle = "#111"; g.stroke();
  if (!name) return;
  name = name.replace(/ \(pre-Searing\)$/, "");  // pre-Searing places are only ever on the pre-Searing map
  g.font = `600 ${13 * scale}px system-ui, sans-serif`; g.textBaseline = "middle"; g.lineJoin = "round";
  // beside the dot on the right, or on the left where the right would run off the picture
  const gap = (r + 4) * scale, left = x + gap + g.measureText(name).width > g.canvas.width;
  const tx = left ? x - gap : x + gap;
  g.textAlign = left ? "right" : "left";
  g.lineWidth = 3.5 * scale; g.strokeStyle = "rgb(0 0 0 / .85)"; g.strokeText(name, tx, y);
  g.fillStyle = "#fff"; g.fillText(name, tx, y);
  g.textAlign = "left";
}

// name: the area whose map it is; self: a town or outpost on it that the page is about, marked out
function mapHTML(name, self = "", maxH = MAP_MAX_H) {
  const m = GW_MAPS[name];
  return m ? winHTML(m, `data-map="${esc(m.f)}"`, self ? `Where ${self} is` : `${name}: where you can walk`, m.p, self, maxH) : "";
}
// a whole region of the Maps page (data/world.js), its areas put together the same way
function regionMapHTML(id, maxH = MAP_MAX_H) {
  const r = GW_REGIONS.get(id);
  return r ? winHTML(r, `data-region="${esc(id)}"`, `${r.label}: where you can walk`, r.marks, "", maxH) : "";
}
// a set of areas, each Maps-page region they're on cropped to them: only their ground is lit, and only markers
// inside the crop show (one window per region, the region holding most of them first)
function areasMapHTML(names, maxH = MAP_MAX_H) {
  // regions on one continent picture share a window (an area across the border shows beside its neighbours)
  const want = new Set(names), groups = new Map();
  for (const r of GW_REGIONS.values()) {
    const ls = r.layers.filter(l => l.names.some(n => want.has(n))), ms = r.marks.filter(m => want.has(m[0]));
    if (!ls.length && !ms.length) continue;
    const [ox, oy] = r.o ? r.o.slice(1) : [0, 0], key = r.o ? r.o[0] : r.id;
    if (!groups.has(key)) groups.set(key, { rs: [], n: 0, x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity });
    const g = groups.get(key);
    g.rs.push(r); g.n += ls.length + ms.length;
    for (const l of ls) { g.x0 = Math.min(g.x0, ox + l.x); g.y0 = Math.min(g.y0, oy + l.y); g.x1 = Math.max(g.x1, ox + l.x + l.w); g.y1 = Math.max(g.y1, oy + l.y + l.h); }
    for (const [, , x, y] of ms) { g.x0 = Math.min(g.x0, ox + x); g.y0 = Math.min(g.y0, oy + y); g.x1 = Math.max(g.x1, ox + x); g.y1 = Math.max(g.y1, oy + y); }
  }
  const out = [];
  for (const g of groups.values()) {
    // the box in continent pixels (a region's own pixels for one not on a continent), kept within the regions' pictures
    const at = r => r.o ? r.o.slice(1) : [0, 0];
    const pad = Math.max(40, 0.08 * Math.max(g.x1 - g.x0, g.y1 - g.y0));
    const x0 = Math.floor(Math.max(g.x0 - pad, Math.min(...g.rs.map(r => at(r)[0])))), y0 = Math.floor(Math.max(g.y0 - pad, Math.min(...g.rs.map(r => at(r)[1]))));
    const x1 = Math.ceil(Math.min(g.x1 + pad, Math.max(...g.rs.map(r => at(r)[0] + r.w)))), y1 = Math.ceil(Math.min(g.y1 + pad, Math.max(...g.rs.map(r => at(r)[1] + r.h))));
    // markers only for the areas themselves and places a portal joins to one of them
    const near = new Set(names);
    for (const r of g.rs) for (const [, , a, b] of r.portals || []) { if (want.has(a) && b) near.add(b); if (want.has(b) && a) near.add(a); }
    const m = { w: x1 - x0, h: y1 - y0 }, seen = new Set(), marks = [];
    for (const r of g.rs) for (const [n, k, x, y] of r.marks) {
      const [X, Y] = [at(r)[0] + x, at(r)[1] + y];
      if (near.has(n) && X >= x0 && X <= x1 && Y >= y0 && Y <= y1 && !seen.has(n)) { seen.add(n); marks.push([n, k, X - x0, Y - y0]); }
    }
    // each region's part: its id and the window's corner in its own pixels
    const parts = g.rs.map(r => [r.id, x0 - at(r)[0], y0 - at(r)[1]]);
    out.push([g.n, winHTML(m, `data-parts="${esc(JSON.stringify(parts))}" data-crop="${m.w},${m.h}" data-areas="${esc(JSON.stringify(names))}"`,
      `${names.join(", ")}: where you can walk`, marks, "", maxH)]);
  }
  // an area on no region picture (the Hidden City of Ahdashim) shows on its own map
  for (const n of names) if (GW_MAPS[n]?.f && ![...GW_REGIONS.values()].some(r => r.layers.some(l => l.names.includes(n))))
    out.push([0, mapHTML(n, "", maxH)]);
  return out.sort((a, b) => b[0] - a[0]).map(o => o[1]).join("");
}
// hiding the markers is one choice for every map, the Maps page's too, remembered in this browser only
const hideMarks = () => { try { return localStorage.getItem("maps.nomarks") === "1"; } catch (e) { return false; } };
function winHTML(m, src, label, marks = [], self = "", maxH = MAP_MAX_H) {
  // the whole area always fits: no taller than maxH, as wide as the column allows
  return `<figure class="gmap">
    <div class="gmap-win" style="aspect-ratio:${m.w} / ${m.h};width:min(100%, ${Math.round(maxH * m.w / m.h)}px)" ${src} tabindex="0" role="img" aria-label="${esc(label)}">
      <canvas></canvas>${(marks || []).map(([n, k, x, y]) =>
        `<a class="gmap-mark" data-k="${esc(k)}"${n === self ? " data-self" : ""} href="${esc(markHref(n))}" title="${esc(n)} · ${esc((MARK_STYLE[k] || MARK_STYLE.outpost)[2])}" aria-label="${esc(n)}"
          style="left:${(100 * x / m.w).toFixed(2)}%;top:${(100 * y / m.h).toFixed(2)}%"></a>`).join("")}<span class="gmap-hint">${MAP_HINT}</span>
    </div>
    <figcaption><label>Darkness <input type="range" min="0" max="100" value="66"></label>${(marks || []).length
      ? `<label title="Towns, outposts, mission outposts and dungeon entrances"><input type="checkbox" class="gmap-nomarks"${hideMarks() ? " checked" : ""}> Hide markers</label>` : ""}</figcaption>
  </figure>`;
}

function mapActive(win, on) {
  win.toggleAttribute("data-active", on);
  win.querySelector(".gmap-hint").textContent = on ? "Scroll to change the darkness · click outside to stop" : MAP_HINT;
}
// a click anywhere else lets go of the active map
document.addEventListener("pointerdown", e => {
  for (const win of document.querySelectorAll(".gmap-win[data-active]")) if (!win.contains(e.target)) mapActive(win, false);
});

function initMaps(root = document) {
  for (const fig of root.querySelectorAll(".gmap:not([data-ready])")) {
    fig.dataset.ready = "";
    const win = fig.querySelector(".gmap-win"), cv = win.querySelector("canvas"), ctx = cv.getContext("2d");
    const slider = fig.querySelector("input[type=range]"), nomarks = fig.querySelector(".gmap-nomarks");
    let alpha = slider.value / 100, base, mask;
    const veil = document.createElement("canvas"), ring = document.createElement("canvas");
    let ringFor = "";

    function draw() {
      if (!base || !win.clientWidth) return;
      const d = window.devicePixelRatio || 1, w = Math.round(win.clientWidth * d), h = Math.round(win.clientHeight * d);
      if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(base, 0, 0, w, h);
      veil.width = w; veil.height = h;
      const v = veil.getContext("2d");
      v.fillStyle = MAP_TINT; v.fillRect(0, 0, w, h);
      v.globalCompositeOperation = "destination-out"; v.drawImage(mask, 0, 0, w, h);
      ctx.globalAlpha = alpha; ctx.drawImage(veil, 0, 0);
      if (ringFor !== `${w}x${h}`) {  // a thin line just outside the walkable edge
        ringFor = `${w}x${h}`; ring.width = w; ring.height = h;
        const g = ring.getContext("2d"), r = Math.max(1, Math.round(d));
        for (let i = 0; i < 8; i++) g.drawImage(mask, Math.cos(i * Math.PI / 4) * r, Math.sin(i * Math.PI / 4) * r, w, h);
        g.globalCompositeOperation = "destination-out"; g.drawImage(mask, 0, 0, w, h);
        g.globalCompositeOperation = "source-in"; g.fillStyle = MAP_RING; g.fillRect(0, 0, w, h);
      }
      ctx.globalAlpha = alpha * 0.8; ctx.drawImage(ring, 0, 0); ctx.globalAlpha = 1;
      win.classList.toggle("nomarks", !!nomarks?.checked);
      if (!nomarks?.checked) for (const a of win.querySelectorAll(".gmap-mark")) {
        drawMark(ctx, a.dataset.k, parseFloat(a.style.left) / 100 * w, parseFloat(a.style.top) / 100 * h, d, a.getAttribute("aria-label"), a.hasAttribute("data-self"));
      }
    }
    function set(a) {
      alpha = Math.max(0, Math.min(1, Math.round(a * 100) / 100));
      slider.value = Math.round(alpha * 100);
      draw();
    }
    const active = on => mapActive(win, on);

    slider.addEventListener("input", () => set(slider.value / 100));
    nomarks?.addEventListener("change", () => {
      try { localStorage.setItem("maps.nomarks", nomarks.checked ? "1" : "0"); } catch (e) { /* storage blocked */ }
      draw();
    });
    win.addEventListener("click", () => active(true));
    win.addEventListener("wheel", e => {
      if (!win.hasAttribute("data-active")) return;  // the page scrolls normally until the map is clicked
      e.preventDefault();
      const dy = e.deltaMode === 1 ? e.deltaY * 20 : e.deltaY;
      set(alpha - Math.sign(dy) * Math.min(3, Math.max(1, Math.abs(dy) / 60)) * MAP_STEP);
    }, { passive: false });
    win.addEventListener("keydown", e => {
      if (e.key === "ArrowUp" || e.key === "ArrowRight") { e.preventDefault(); set(alpha + MAP_STEP); }
      else if (e.key === "ArrowDown" || e.key === "ArrowLeft") { e.preventDefault(); set(alpha - MAP_STEP); }
      else if (e.key === "Escape") active(false);
    });
    new ResizeObserver(draw).observe(win);

    const load = src => new Promise((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = src; });
    const r = GW_REGIONS.get(win.dataset.region);
    // a region's picture and its walkable areas (only those named in data-areas, if given), each drawn into one mask
    const region = r => Promise.all([load(`img/world/${r.id}/base.webp`), ...r.layers.map(l => load(`img/world/${r.id}/m${l.m}.png`))]).then(([b, ...ms]) => {
      const c = document.createElement("canvas");
      c.width = b.naturalWidth; c.height = b.naturalHeight;
      const k = c.width / r.w, g = c.getContext("2d");
      const only = win.dataset.areas && new Set(JSON.parse(win.dataset.areas));
      r.layers.forEach((l, i) => { if (!only || l.names.some(n => only.has(n))) g.drawImage(ms[i], l.x * k, l.y * k, l.w * k, l.h * k); });
      return [b, c, k];
    });
    (win.dataset.parts ? (() => {
      // an areas window: the box cut from each region's picture and mask, laid side by side
      const parts = JSON.parse(win.dataset.parts), [w, h] = win.dataset.crop.split(",").map(Number);
      return Promise.all(parts.map(([id]) => region(GW_REGIONS.get(id)))).then(got => {
        const k = Math.max(...got.map(x => x[2])), b = document.createElement("canvas"), c = document.createElement("canvas");
        for (const o of [b, c]) { o.width = Math.round(w * k); o.height = Math.round(h * k); }
        got.forEach(([pic, msk, kk], i) => {
          const [, x, y] = parts[i];
          for (const [o, src] of [[b, pic], [c, msk]]) o.getContext("2d").drawImage(src, x * kk, y * kk, w * kk, h * kk, 0, 0, o.width, o.height);
        });
        return [b, c];
      });
    })() : r ? region(r) : Promise.all([load(`img/maps/${win.dataset.map}.webp`), load(`img/maps/${win.dataset.map}.png`)]))
      .then(([b, m]) => { base = b; mask = m; draw(); }, () => fig.remove());
  }
}
