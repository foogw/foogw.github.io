"use strict";

/* The way on foot between two spots on a map, worked out in the browser: the areas' walkable shapes
   (game/walk/<map id>.json) drawn into one grid, joined at the portals between them, and searched for the shortest
   walk that keeps off the edges. walkGrid(ids) builds the grid, and walkRoute(grid, from, to) gives the way as a
   short polyline in the map's pixels, or null; a null in it is a portal crossed to an area that doesn't touch this
   one on the map (walkLines splits the way there). */
// our own fixes to the ground (data/routing.js): walls, paths, crossings, teleporters, and portals on an area's own map, by map id
const ROUTING = data("GW_ROUTING");
if (!ROUTING) console.warn("walkroute.js: data/routing.js isn't loaded, so the ways ignore our walls and crossings");
const WALK_S = 1;        // map pixels per grid cell: a ridge a few pixels wide stays a wall
const WALK_BRIDGE = 12;  // map pixels: the disc joining two areas at their portal
const WALK_WALL = 8;     // grid cells from an edge within which a step costs more

// given: ground to use instead of an id's own, by id ({rings, walls}: a dungeon level, its cell's ground walled in to its area)
async function walkGrid(ids, given = {}) {
  // all the ground there is: an outpost's town too
  const walks = (await Promise.all(ids.map(id => given[id] || loadWalk(id)))).map((w, i) => w && { id: ids[i], rings: [...w.rings, ...(w.town || [])], walls: [...(ROUTING?.walls[ids[i]] || []), ...(w.walls || [])], paths: ROUTING?.paths?.[ids[i]], cross: ROUTING?.cross[ids[i]], teleports: ROUTING?.teleports?.[ids[i]] }).filter(Boolean);
  const [x0, y0, x1, y1] = ringsBox(walks);
  const W = Math.ceil((x1 - x0) / WALK_S) + 2, H = Math.ceil((y1 - y0) / WALK_S) + 2;
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d");
  const T = [1 / WALK_S, 0, 0, 1 / WALK_S, -x0 / WALK_S + 1, -y0 / WALK_S + 1];
  // which areas each cell is ground of, a bit per area: a step from one area's ground into another's (where they touch
  // on the map) goes only through a portal, where both are set
  const area = new Uint32Array(W * H), bit = new Map(walks.map((w, k) => [w.id, 1 << (k % 32)]));
  const portal = new Uint8Array(W * H);  // a portal's disc: never walled off below
  const gx = x => (x - x0) / WALK_S + 1, gy = y => (y - y0) / WALK_S + 1;  // map pixels -> grid cells
  for (const w of walks) walkFill(W, H, w.rings.map(r => r.map((v, k) => (k % 2 ? gy(v) : gx(v)))), i => { area[i] |= bit.get(w.id); });
  // a portal between two of the areas, where each lists it: one listed by one side only is a way in with no way back
  // (into an outpost that leads only into its mission)
  const both = (a, b) => (AREAS[b]?.exits || []).some(x => x.to === a);
  for (const id of ids) for (const e of AREAS[id]?.exits || []) if (e.at && bit.has(id) && bit.has(e.to) && both(id, e.to))
    walkNear(W, H, [gx(e.at[0]), gy(e.at[1])], WALK_BRIDGE / WALK_S, i => { area[i] |= bit.get(id) | bit.get(e.to); portal[i] = 1; });
  // paths (our data): lines the area's ground misses, walkable, 4 map pixels wide (a step on one at the plain cost below:
  // it's all edge, and would cost more than going round)
  const onPath = new Uint8Array(W * H);
  for (const w of walks) for (const l of w.paths || []) for (let k = 2; k < l.length; k += 2)
    walkNear(W, H, [gx(l[k - 2]), gy(l[k - 1])], 2 / WALK_S, i => { area[i] |= bit.get(w.id); onPath[i] = 1; }, [gx(l[k]), gy(l[k + 1])]);
  // where two areas with no portal between them overlap on the map (their pictures' edges), the ground is neither's:
  // a wall, so a way doesn't step from one into the other there
  const linked = new Set(walks.map(w => bit.get(w.id)));
  for (const id of ids) for (const e of AREAS[id]?.exits || []) if (bit.has(id) && bit.has(e.to) && both(id, e.to)) linked.add(bit.get(id) | bit.get(e.to));
  // two areas on the same ground (an area and a copy of it under another id) overlap all over: those count as linked
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
  for (const id of ids) for (const e of AREAS[id]?.exits || []) if (e.at && ids.includes(e.to) && both(id, e.to)) {
    const k = [id, e.to].sort((a, b) => a - b).join("-");
    if (!ends.has(k)) ends.set(k, new Map());
    ends.get(k).set(String(e.at), e.at);
  }
  const jump = (i, j) => { if (i >= 0 && j >= 0) for (const [u, v] of [[i, j], [j, i]]) (jumps.get(u) || jumps.set(u, []).get(u)).push(v); };
  for (const [k, pts] of ends) {
    const [a, b] = k.split("-").map(Number), all = [...pts.values()];
    for (const [x, y] of [[a, b], [b, a]]) for (const p of all) if (near(x, p) && !near(y, p)) {
      // (an end by both areas, the other end's area too, when none is by that one alone: two portals 100 pixels apart,
      // one by both areas' ground, as Crystal Overlook's to the Ruptured Heart)
      let far = all.filter(q => near(y, q) && !near(x, q));
      if (!far.length) far = all.filter(q => q !== p && near(y, q));
      // the other end; where the data has none, the other area's ground nearest this end
      if (far.length) for (const q of far) jump(walkSnap(grid, ...p, x), walkSnap(grid, ...q, y));
      else jump(walkSnap(grid, ...p, x), walkSnap(grid, ...p, y, true));  // its own ground, not the portal's disc
    }
  }
  // walls (our data, over the walkable ground): lines that can't be walked across
  for (const w of walks) for (const l of w.walls || []) for (let k = 2; k < l.length; k += 2)
    walkNear(W, H, [gx(l[k - 2]), gy(l[k - 1])], 1.5 / WALK_S, i => { walk[i] = 0; }, [gx(l[k]), gy(l[k + 1])]);  // 3 map pixels wide
  // a crossing (a bridge over a path): its circle is walled off, and each way's two ends (out at the circle's edge) are
  // joined, so a way goes on along the one it came in on and can't turn onto the other. Crossings close together (an
  // end inside another's circle) chain: the way goes on along the other's way that starts nearest that end
  const cross = new Set(), cs = [];
  for (const w of walks) for (const [cx, cy, r, ...e] of w.cross || []) {
    for (let y = Math.floor((cy - r - oyMap) / WALK_S); y <= (cy + r - oyMap) / WALK_S; y++)
      for (let x = Math.floor((cx - r - oxMap) / WALK_S); x <= (cx + r - oxMap) / WALK_S; x++)
        if (x >= 0 && y >= 0 && x < W && y < H && Math.hypot(oxMap + x * WALK_S - cx, oyMap + y * WALK_S - cy) < r) walk[y * W + x] = 0;
    const end = k => { const dx = e[k] - cx, dy = e[k + 1] - cy, d = Math.hypot(dx, dy) || 1; return [cx + dx / d * (r + 2), cy + dy / d * (r + 2)]; };
    cs.push({ id: w.id, cx, cy, r, ways: [[end(0), end(2)], [end(4), end(6)]] });
  }
  const follow = (p, c, n = 0) => {
    const d = cs.find(o => o !== c && Math.hypot(p[0] - o.cx, p[1] - o.cy) < o.r + 2);
    if (!d || n > 8) return p;
    // the other's way end nearest p: on along that way, to its other end
    const [way, k] = d.ways.flatMap(wy => [[wy, 0], [wy, 1]]).sort(([u, i], [v, j]) => Math.hypot(u[i][0] - p[0], u[i][1] - p[1]) - Math.hypot(v[j][0] - p[0], v[j][1] - p[1]))[0];
    return follow(way[1 - k], d, n + 1);
  };
  for (const c of cs) for (const [a, b] of c.ways) {
    const i = walkSnap(grid, ...follow(a, c), c.id), j = walkSnap(grid, ...follow(b, c), c.id);
    if (i >= 0 && j >= 0) { jump(i, j); cross.add(i + "," + j).add(j + "," + i); }
  }

  // a teleporter: its two ends joined, at no cost
  const teleport = new Set();
  for (const w of walks) for (const [ax, ay, bx, by] of w.teleports || []) {
    const i = walkSnap(grid, ax, ay), j = walkSnap(grid, bx, by);
    if (i >= 0 && j >= 0) { jump(i, j); teleport.add(i + "," + j).add(j + "," + i); }
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
  for (let i = 0; i < W * H; i++) cost[i] = onPath[i] ? 1 : 1 + 3 * (WALK_WALL - d[i]) / WALK_WALL;
  // the grid's corner in map pixels
  return { ...grid, cost, jumps, cross, teleport };
}

// The cells a shape covers, worked out by arithmetic rather than drawn on a canvas and read back (a browser that
// resists fingerprinting gives a blank picture back): rings ([x0, y0, x1, y1, ...] in grid cells) filled non-zero,
// sampled at 4 x 4 points a cell; WALK_FILL of them make it covered, as a canvas's smoothed edge at half its alpha
// (a thin diagonal path stays open, a gap of a pixel or two stays shut)
const WALK_FILL = 6;
function walkFill(W, H, rings, set) {
  const S = 4, lines = Array.from({ length: S * H }, () => []), count = new Uint8Array(W * H);
  for (const r of rings) for (let k = 0, n = r.length; k < n; k += 2) {
    const ax = r[k], ay = r[k + 1], bx = r[(k + 2) % n], by = r[(k + 3) % n];
    if (ay === by) continue;
    // the sample lines the edge crosses, and where, with the way it goes
    for (let j = Math.max(0, Math.ceil(S * Math.min(ay, by) - 0.5)); j < S * H && (j + 0.5) / S < Math.max(ay, by); j++)
      lines[j].push([ax + ((j + 0.5) / S - ay) * (bx - ax) / (by - ay), by > ay ? 1 : -1]);
  }
  lines.forEach((xs, j) => {
    xs.sort((a, b) => a[0] - b[0]);
    const row = Math.floor(j / S) * W;
    for (let k = 0, wind = 0; k < xs.length - 1; k++) {
      wind += xs[k][1];
      if (wind) for (let x = Math.max(0, Math.ceil(S * xs[k][0] - 0.5)); x < S * W && (x + 0.5) / S < xs[k + 1][0]; x++) count[row + Math.floor(x / S)]++;
    }
  });
  for (let i = 0; i < W * H; i++) if (count[i] >= WALK_FILL) set(i);
}
// the cells whose middles are within d of a point, or of the line from it to another (grid cells)
function walkNear(W, H, [ax, ay], d, set, [bx, by] = [ax, ay]) {
  const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy;
  for (let y = Math.max(0, Math.floor(Math.min(ay, by) - d)); y <= Math.min(H - 1, Math.max(ay, by) + d); y++)
    for (let x = Math.max(0, Math.floor(Math.min(ax, bx) - d)); x <= Math.min(W - 1, Math.max(ax, bx) + d); x++) {
      const t = L ? Math.max(0, Math.min(1, ((x + 0.5 - ax) * dx + (y + 0.5 - ay) * dy) / L)) : 0;
      if (Math.hypot(ax + t * dx - x - 0.5, ay + t * dy - y - 0.5) <= d) set(y * W + x);
    }
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
function walkSearch({ W, H, walk, cost, ox, oy, jumps, area, cross, teleport }, a, b) {
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
      const k = i + "," + j, ng = g[i] + (cross?.has(k) ? Math.hypot(i % W - j % W, ((i / W) | 0) - ((j / W) | 0)) : teleport?.has(k) ? 0 : 1);  // a crossing: its length; a teleporter: none
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
// a walk's length as players know it: in compass ranges (the compass's radius, 5,000 game units), from its length in
// map pixels (96 game units each)
const WALK_UNITS = 96, COMPASS_UNITS = 5000;
const compassRanges = px => { const n = px * WALK_UNITS / COMPASS_UNITS; return n < 10 ? Math.round(n * 10) / 10 : Math.round(n); };
const walkText = px => `~${compassRanges(px)} compass ranges`;
const walkLength = pts => walkLines(pts).reduce((s, l) => s + l.slice(1).reduce((t, p, i) => t + Math.hypot(p[0] - l[i][0], p[1] - l[i][1]), 0), 0);
// where a walk from an area can start: an outpost's portals out to the areas, or any area's whose ground isn't walked
// over (portals both sides list: the ways you leave it), each on its area's ground; else its marker
function walkFrom(grid, id, ids) {
  const l = AREAS[id], out = e => e.at && ids.includes(e.to) && grid.bit?.has(e.to) && (AREAS[e.to]?.exits || []).some(x => x.to === id)
    && !ROUTING?.closed?.[id]?.includes(e.to);  // (a portal it can't be left by: ours, data/routing.js)
  // an area off this map: the portals into it on the own maps of the areas here
  const own = grid.bit?.has(id) ? [] : ids.flatMap(a => grid.bit?.has(a) ? Object.entries(ROUTING?.portals[a] || {}).filter(([to]) => +to === id).map(([, at]) => ({ at, area: a })) : []);
  if (own.length) return own;
  const es = isOutpost(l) || !grid.bit?.has(id) ? (l.exits || []).filter(out) : [];  // (an area not walked over, too: a mission)
  return es.length ? es.map(e => ({ at: e.at, area: e.to })) : l?.at ? [l.at] : [];
}
// the shortest way from an area (by any of its portals) to a point, or null
function walkWay(grid, id, ids, to) {
  let best = null;
  for (const s of walkFrom(grid, id, ids)) {
    const pts = walkRoute(grid, s, to);
    if (pts && (!best || walkLength(pts) < walkLength(best))) best = pts;
  }
  return best;
}
// the areas a walk goes over: areas you walk in, not outposts or missions (a way leaves an outpost by its portal)
const walkable = id => [2, 18].includes(AREAS[id]?.type);
