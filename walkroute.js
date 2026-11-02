"use strict";

/* The way on foot between two spots on a map, worked out in the browser: the areas' walkable shapes
   (game/walk/<map id>.json) drawn into one grid, joined at the portals between them, and searched for the shortest
   walk that keeps off the edges. walkGrid(ids) builds the grid, and walkRoute(grid, from, to) gives the way as a
   short polyline in the map's pixels, or null. */
const WALK_S = 2;        // map pixels per grid cell
const WALK_BRIDGE = 12;  // map pixels: the disc joining two areas at their portal
const WALK_WALL = 4;     // grid cells from an edge within which a step costs more

async function walkGrid(ids) {
  const walks = (await Promise.all(ids.map(loadWalk))).filter(Boolean);
  const [x0, y0, x1, y1] = ringsBox(walks);
  const W = Math.ceil((x1 - x0) / WALK_S) + 2, H = Math.ceil((y1 - y0) / WALK_S) + 2;
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d");
  g.setTransform(1 / WALK_S, 0, 0, 1 / WALK_S, -x0 / WALK_S + 1, -y0 / WALK_S + 1);
  g.fillStyle = "#fff";
  g.fill(walkPath(walks), "evenodd");
  // a portal between two of the areas
  for (const id of ids) for (const e of LOCATIONS[id]?.exits || []) if (e.at && ids.includes(e.to)) {
    g.beginPath(); g.arc(e.at[0], e.at[1], WALK_BRIDGE, 0, 2 * Math.PI); g.fill();
  }
  const px = g.getImageData(0, 0, W, H).data, walk = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) walk[i] = px[4 * i + 3] > 0 ? 1 : 0;  // any walkable pixel: a neck one pixel wide still joins
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
  return { W, H, walk, cost, ox: x0 - WALK_S, oy: y0 - WALK_S };
}

// the walkable cell nearest a map point, or -1
function walkSnap({ W, H, walk, ox, oy }, x, y) {
  const cx = Math.round((x - ox) / WALK_S), cy = Math.round((y - oy) / WALK_S);
  for (let r = 0; r < 60; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
    if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
    const nx = cx + dx, ny = cy + dy;
    if (nx >= 0 && ny >= 0 && nx < W && ny < H && walk[ny * W + nx]) return ny * W + nx;
  }
  return -1;
}

// A* over 8 neighbours with a binary heap: the cells from a to b, or null
function walkSearch({ W, H, walk, cost, ox, oy }, a, b) {
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
      const ng = g[i] + s * cost[j];
      if (ng < g[j]) { g[j] = ng; from[j] = i; push(ng + h(j), j); }
    }
  }
  if (a !== b && from[b] < 0) return null;
  const out = [];
  for (let i = b; i !== -1; i = i === a ? -1 : from[i]) out.push([ox + (i % W) * WALK_S, oy + ((i / W) | 0) * WALK_S]);
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

function walkRoute(grid, [fx, fy], [tx, ty]) {
  const a = walkSnap(grid, fx, fy), b = walkSnap(grid, tx, ty);
  const way = a >= 0 && b >= 0 ? walkSearch(grid, a, b) : null;
  return way && walkSimplify([[fx, fy], ...way, [tx, ty]]);
}
