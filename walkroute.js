"use strict";

/* The way on foot between two spots on a map, worked out in the browser: the areas' walkable shapes
   (game/walk/<map id>.json) drawn into one grid, joined at the portals between them, and searched for the shortest
   walk that keeps off the edges. walkGrid(ids) builds the grid, and walkRoute(grid, from, to) gives the way as a
   short polyline in the map's pixels, or null; a null in it is a portal crossed to an area that doesn't touch this
   one on the map (walkLines splits the way there). */
const WALK_S = 1;        // map pixels per grid cell: a ridge a few pixels wide stays a wall
const WALK_BRIDGE = 12;  // map pixels: the disc joining two areas at their portal
const WALK_WALL = 8;     // grid cells from an edge within which a step costs more

async function walkGrid(ids) {
  // all the ground there is: an outpost's town too
  const walks = (await Promise.all(ids.map(loadWalk))).map((w, i) => w && { id: ids[i], rings: [...w.rings, ...(w.town || [])], walls: w.walls, cross: w.cross }).filter(Boolean);
  const [x0, y0, x1, y1] = ringsBox(walks);
  const W = Math.ceil((x1 - x0) / WALK_S) + 2, H = Math.ceil((y1 - y0) / WALK_S) + 2;
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d");
  const T = [1 / WALK_S, 0, 0, 1 / WALK_S, -x0 / WALK_S + 1, -y0 / WALK_S + 1];
  // which areas each cell is ground of, a bit per area: a step from one area's ground into another's (where they touch
  // on the map) goes only through a portal, where both are set
  const area = new Uint32Array(W * H), bit = new Map(walks.map((w, k) => [w.id, 1 << (k % 32)]));
  const portal = new Uint8Array(W * H);  // a portal's disc: never walled off below
  const paint = (id, draw, isPortal = false) => {
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, W, H);
    g.setTransform(...T); g.fillStyle = "#fff"; draw();
    const px = g.getImageData(0, 0, W, H).data;
    for (let i = 0; i < W * H; i++) if (px[4 * i + 3] >= 128) { area[i] |= id; if (isPortal) portal[i] = 1; }  // half covered: the edges' smoothing doesn't close a thin gap
  };
  for (const w of walks) paint(bit.get(w.id), () => g.fill(walkPath([w]), "nonzero"));
  // a portal between two of the areas, where each lists it: one listed by one side only is a way in with no way back
  // (into an outpost that leads only into its mission)
  const both = (a, b) => (LOCATIONS[b]?.exits || []).some(x => x.to === a);
  for (const id of ids) for (const e of LOCATIONS[id]?.exits || []) if (e.at && bit.has(id) && bit.has(e.to) && both(id, e.to))
    paint(bit.get(id) | bit.get(e.to), () => { g.beginPath(); g.arc(e.at[0], e.at[1], WALK_BRIDGE, 0, 2 * Math.PI); g.fill(); }, true);
  // where two areas with no portal between them overlap on the map (their pictures' edges), the ground is neither's:
  // a wall, so a way doesn't step from one into the other there
  const linked = new Set(walks.map(w => bit.get(w.id)));
  for (const id of ids) for (const e of LOCATIONS[id]?.exits || []) if (bit.has(id) && bit.has(e.to) && both(id, e.to)) linked.add(bit.get(id) | bit.get(e.to));
  // two places on the same ground (an area and a copy of it under another id) overlap all over: those count as linked
  const size = new Map(), shared = new Map(), one = m => { const bs = []; for (let b = m; b; b &= b - 1) bs.push(b & -b); return bs; };
  for (let i = 0; i < W * H; i++) if (area[i]) {
    const bs = one(area[i]);
    for (const a of bs) size.set(a, (size.get(a) || 0) + 1);
    for (let n = 0; n < bs.length; n++) for (let k = n + 1; k < bs.length; k++) shared.set(bs[n] | bs[k], (shared.get(bs[n] | bs[k]) || 0) + 1);
  }
  for (const [pair, n] of shared) if (n > 0.3 * Math.min(...one(pair).map(a => size.get(a)))) linked.add(pair);
  const walk = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) {
    const m = area[i];
    if (m & (m - 1) && !portal[i]) {  // more than one area, not at a portal
      const bs = one(m);
      if (bs.some((a, n) => bs.slice(n + 1).some(c => !linked.has(a | c)))) area[i] = 0;
    }
    walk[i] = area[i] ? 1 : 0;
  }
  // a portal between two areas that don't touch on the map has an end at each one's edge (the Alkali Pan's and the
  // Shattered Ravines' are 83 pixels apart): stepping in at one end comes out at the other
  const oxMap = x0 - WALK_S, oyMap = y0 - WALK_S;
  const jumps = new Map(), grid = { W, H, walk, ox: oxMap, oy: oyMap, area, bit, portal };
  const paths = new Map(walks.map(w => [w.id, walkPath([w])]));
  g.setTransform(...T); g.lineWidth = 2 * WALK_BRIDGE;
  const near = (id, [x, y]) => paths.has(id) && (g.isPointInPath(paths.get(id), (x - x0) / WALK_S + 1, (y - y0) / WALK_S + 1)
    || g.isPointInStroke(paths.get(id), (x - x0) / WALK_S + 1, (y - y0) / WALK_S + 1));
  const ends = new Map();  // two areas -> their portals' ends
  for (const id of ids) for (const e of LOCATIONS[id]?.exits || []) if (e.at && ids.includes(e.to) && both(id, e.to)) {
    const k = [id, e.to].sort((a, b) => a - b).join("-");
    if (!ends.has(k)) ends.set(k, new Map());
    ends.get(k).set(String(e.at), e.at);
  }
  const jump = (i, j) => { if (i >= 0 && j >= 0) for (const [u, v] of [[i, j], [j, i]]) (jumps.get(u) || jumps.set(u, []).get(u)).push(v); };
  for (const [k, pts] of ends) {
    const [a, b] = k.split("-").map(Number), all = [...pts.values()];
    for (const [x, y] of [[a, b], [b, a]]) for (const p of all) if (near(x, p) && !near(y, p)) {
      const far = all.filter(q => near(y, q) && !near(x, q));
      // the other end; where the data has none, the other area's ground nearest this end
      if (far.length) for (const q of far) jump(walkSnap(grid, ...p, x), walkSnap(grid, ...q, y));
      else jump(walkSnap(grid, ...p, x), walkSnap(grid, ...p, y, true));  // its own ground, not the portal's disc
    }
  }
  // walls (our data, over the walkable ground): lines that can't be walked across
  g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, W, H); g.setTransform(...T);
  g.lineWidth = 3; g.lineCap = g.lineJoin = "round"; g.strokeStyle = "#fff";
  for (const w of walks) for (const l of w.walls || []) {
    g.beginPath(); for (let k = 0; k < l.length; k += 2) (k ? g.lineTo(l[k], l[k + 1]) : g.moveTo(l[k], l[k + 1]));
    g.stroke();
  }
  { const px = g.getImageData(0, 0, W, H).data; for (let i = 0; i < W * H; i++) if (px[4 * i + 3] >= 128) walk[i] = 0; }
  // a crossing (a bridge over a path): its circle is walled off, and each way's two ends (out at the circle's edge) are
  // joined, so a way goes on along the one it came in on and can't turn onto the other
  const cross = new Set();
  for (const w of walks) for (const [cx, cy, r, ...e] of w.cross || []) {
    for (let y = Math.floor((cy - r - oyMap) / WALK_S); y <= (cy + r - oyMap) / WALK_S; y++)
      for (let x = Math.floor((cx - r - oxMap) / WALK_S); x <= (cx + r - oxMap) / WALK_S; x++)
        if (x >= 0 && y >= 0 && x < W && y < H && Math.hypot(oxMap + x * WALK_S - cx, oyMap + y * WALK_S - cy) < r) walk[y * W + x] = 0;
    const out = k => { const dx = e[k] - cx, dy = e[k + 1] - cy, d = Math.hypot(dx, dy) || 1; return walkSnap(grid, cx + dx / d * (r + 2), cy + dy / d * (r + 2), w.id); };
    for (const k of [0, 4]) {
      const i = out(k), j = out(k + 2);
      if (i >= 0 && j >= 0) { jump(i, j); cross.add(i + "," + j).add(j + "," + i); }
    }
  }
  // a step costs more near an edge, so the way keeps to the middle of a path
  let cur = walk.slice(); const d = new Uint8Array(W * H);
  for (let k = 0; k < WALK_WALL; k++) {
    const next = new Uint8Array(W * H);
    for (let i = 0; i < W * H; i++) if (cur[i]) {
      d[i]++;
      const x = i % W;
      next[i] = x > 0 && cur[i - 1] && x < W - 1 && cur[i + 1] && cur[i - W] && cur[i + W] ? 1 : 0;
    }
    cur = next;
  }
  const cost = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) cost[i] = 1 + 3 * (WALK_WALL - d[i]) / WALK_WALL;
  // the grid's corner in map pixels
  return { ...grid, cost, jumps, cross };
}

// the walkable cell nearest a map point, or -1; with an area's id, the nearest of that area's ground
function walkSnap({ W, H, walk, ox, oy, area, bit, portal }, x, y, id = null, offPortal = false) {
  const want = id == null ? 0 : bit?.get(id) || 0;
  const cx = Math.round((x - ox) / WALK_S), cy = Math.round((y - oy) / WALK_S);
  for (let r = 0; r < 120 / WALK_S; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {  // up to 120 map pixels off
    if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
    const nx = cx + dx, ny = cy + dy;
    if (nx >= 0 && ny >= 0 && nx < W && ny < H && walk[ny * W + nx] && (!want || area[ny * W + nx] & want) && !(offPortal && portal[ny * W + nx])) return ny * W + nx;
  }
  return -1;
}

// A* over 8 neighbours with a binary heap: the cells from a to b, or null
function walkSearch({ W, H, walk, cost, ox, oy, jumps, area, cross }, a, b) {
  const g = new Float64Array(W * H).fill(Infinity), from = new Int32Array(W * H).fill(-1);
  const heap = [], bx = b % W, by = (b / W) | 0;
  const h = i => Math.hypot(i % W - bx, ((i / W) | 0) - by);
  const push = (f, i) => {
    heap.push([f, i]);
    for (let k = heap.length - 1; k;) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; }
  };
  const pop = () => {
    const top = heap[0], last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      for (let k = 0; ;) {
        const l = 2 * k + 1, r = l + 1; let m = k;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === k) break;
        [heap[m], heap[k]] = [heap[k], heap[m]]; k = m;
      }
    }
    return top;
  };
  const steps = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2]];
  g[a] = 0; push(h(a), a);
  while (heap.length) {
    const [f, i] = pop();
    if (i === b) break;
    if (f - h(i) > g[i] + 1e-6) continue;  // a stale entry
    const x = i % W, y = (i / W) | 0;
    for (const [dx, dy, s] of steps) {
      const nx = x + dx, ny = y + dy, j = ny * W + nx;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H || !walk[j]) continue;
      if (dx && dy && !(walk[i + dx] && walk[i + dy * W])) continue;  // no cutting a corner: a thin diagonal wall holds
      if (!(area[i] & area[j])) continue;  // from one area's ground into another's only at a portal
      const ng = g[i] + s * cost[j];
      if (ng < g[j]) { g[j] = ng; from[j] = i; push(ng + h(j), j); }
    }
    for (const j of jumps?.get(i) || []) {  // through a portal to its other end
      const ng = g[i] + (cross?.has(i + "," + j) ? Math.hypot(i % W - j % W, ((i / W) | 0) - ((j / W) | 0)) : 1);  // a crossing: its length
      if (ng < g[j]) { g[j] = ng; from[j] = i; push(ng + h(j), j); }
    }
  }
  if (a !== b && from[b] < 0) return null;
  const out = [];
  for (let i = b, prev = -1; i !== -1; prev = i, i = i === a ? -1 : from[i]) {
    const p = [ox + (i % W) * WALK_S, oy + ((i / W) | 0) * WALK_S], q = out.at(-1);
    if (q && Math.hypot(p[0] - q[0], p[1] - q[1]) > 2 * WALK_S && !cross?.has(i + "," + prev)) out.push(null);  // a jump through a portal (a crossing's is walked)
    out.push(p);
  }
  return out.reverse();
}

// Ramer-Douglas-Peucker, so the line is a few dozen points
function walkSimplify(pts, eps = 2) {
  if (pts.length < 3) return pts;
  const [x0, y0] = pts[0], [x1, y1] = pts[pts.length - 1], L = Math.hypot(x1 - x0, y1 - y0) || 1;
  let far = 0, at = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const e = Math.abs((x1 - x0) * (y0 - pts[i][1]) - (x0 - pts[i][0]) * (y1 - y0)) / L;
    if (e > far) { far = e; at = i; }
  }
  return far <= eps ? [pts[0], pts[pts.length - 1]]
    : walkSimplify(pts.slice(0, at + 1), eps).slice(0, -1).concat(walkSimplify(pts.slice(at), eps));
}

// from: a map point, or { at, area }: a point to start on that area's ground (walkFrom gives one)
function walkRoute(grid, from, [tx, ty]) {
  const [fx, fy] = Array.isArray(from) ? from : from.at, a = walkSnap(grid, fx, fy, from.area), b = walkSnap(grid, tx, ty);
  const way = a >= 0 && b >= 0 ? walkSearch(grid, a, b) : null;
  return way && walkLines([[fx, fy], ...way, [tx, ty]]).map(l => walkSimplify(l)).flatMap((l, k) => (k ? [null, ...l] : l));
}
// a way as its unbroken lines: split where it jumps through a portal
const walkLines = pts => pts.reduce((ls, p) => (p ? ls.at(-1).push(p) : ls.push([]), ls), [[]]).filter(l => l.length);
// a way's length in map pixels, not counting the jumps
const walkLength = pts => walkLines(pts).reduce((s, l) => s + l.slice(1).reduce((t, p, i) => t + Math.hypot(p[0] - l[i][0], p[1] - l[i][1]), 0), 0);
// where a walk from a place can start: an outpost's portals out to the areas (portals both sides list: the ways you
// leave it), each on its area's ground; else its marker
function walkFrom(grid, id, ids) {
  const l = LOCATIONS[id], out = e => e.at && ids.includes(e.to) && grid.bit?.has(e.to) && (LOCATIONS[e.to]?.exits || []).some(x => x.to === id);
  // a place off this map: the portals into it on the own maps of the areas here
  const own = grid.bit?.has(id) ? [] : ids.flatMap(a => grid.bit?.has(a) ? (LOCATIONS[a]?.exits || []).filter(e => e.to === id && e.own).map(e => ({ at: e.own, area: a })) : []);
  if (own.length) return own;
  const es = isOutpost(l) ? (l.exits || []).filter(out) : [];
  return es.length ? es.map(e => ({ at: e.at, area: e.to })) : l?.at ? [l.at] : [];
}
// the shortest way from a place (by any of its portals) to a point, or null
function walkWay(grid, id, ids, to) {
  let best = null;
  for (const s of walkFrom(grid, id, ids)) {
    const pts = walkRoute(grid, s, to);
    if (pts && (!best || walkLength(pts) < walkLength(best))) best = pts;
  }
  return best;
}
// the places a walk goes over: areas you walk in, not outposts or missions (a way leaves an outpost by its portal)
const walkable = id => [2, 18].includes(LOCATIONS[id]?.type);
