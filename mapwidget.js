"use strict";

/* A window on one map: the game's world picture around the area, darkened except where you can walk. No dragging
   or zooming; the slider (or the wheel, once the map is clicked) sets how dark the rest is. mapHTML(name) gives the
   markup for a place or mission with a map in data/maps.js (or ""), initMaps(root) brings it to life. */
const GW_MAPS = window.GW_MAPS || {};
const MAP_TINT = "#06080a", MAP_RING = "#ffd98a", MAP_STEP = 0.05, MAP_MAX_H = 520;
const MAP_HINT = "Click, then scroll to change the darkness";

function mapHTML(name) {
  const m = GW_MAPS[name];
  if (!m) return "";
  // the whole area always fits: no taller than MAP_MAX_H, as wide as the column allows
  return `<figure class="gmap">
    <div class="gmap-win" style="aspect-ratio:${m.w} / ${m.h};width:min(100%, ${Math.round(MAP_MAX_H * m.w / m.h)}px)" data-map="${esc(m.f)}" tabindex="0" role="img" aria-label="${esc(name)}: where you can walk">
      <canvas></canvas><span class="gmap-hint">${MAP_HINT}</span>
    </div>
    <figcaption><label>Darkness <input type="range" min="0" max="100" value="66"></label></figcaption>
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
    const slider = fig.querySelector("input");
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
    }
    function set(a) {
      alpha = Math.max(0, Math.min(1, Math.round(a * 100) / 100));
      slider.value = Math.round(alpha * 100);
      draw();
    }
    const active = on => mapActive(win, on);

    slider.addEventListener("input", () => set(slider.value / 100));
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
    Promise.all([load(`img/maps/${win.dataset.map}.webp`), load(`img/maps/${win.dataset.map}.png`)])
      .then(([b, m]) => { base = b; mask = m; draw(); }, () => fig.remove());
  }
}
