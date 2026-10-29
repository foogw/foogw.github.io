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
  dungeon: ["#a99bff", 7, "Dungeon"], unknown: ["#8a8f96", 5.5, "Map point"] };
const markHref = name => `locations#${new URLSearchParams({ place: name })}`;
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
    (r ? Promise.all([load(`img/world/${r.id}/base.webp`), ...r.layers.map(l => load(`img/world/${r.id}/m${l.m}.png`))]).then(([b, ...ms]) => {
      // the region's walkable areas, each drawn into one mask at its place
      const c = document.createElement("canvas");
      c.width = b.naturalWidth; c.height = b.naturalHeight;
      const k = c.width / r.w, g = c.getContext("2d");
      r.layers.forEach((l, i) => g.drawImage(ms[i], l.x * k, l.y * k, l.w * k, l.h * k));
      return [b, c];
    }) : Promise.all([load(`img/maps/${win.dataset.map}.webp`), load(`img/maps/${win.dataset.map}.png`)]))
      .then(([b, m]) => { base = b; mask = m; draw(); }, () => fig.remove());
  }
}
