import {curve, shear, strands} from './ribbon-shape.mjs';

const hero = document.querySelector('.optic-hero');
const svg = hero.querySelector('.ribbon');
const paths = [...svg.querySelectorAll('path')];
const rest = paths.map(path => path.getAttribute('d'));
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const columns = strands[0].points.length;
const nodes = strands.flatMap(strand => strand.points);
const offset = new Float32Array(nodes.length);
const velocity = new Float32Array(nodes.length);
const rows = strands.map((_, row) => offset.subarray(row * columns, (row + 1) * columns));

// Each row is an independently tensioned string with fixed ends. Wind does
// work on it; tension propagates bends along its length and damping removes energy.
const step = 1 / 60;
const damping = 1.45;
const endStiffness = 4.2;
const middleStiffness = 2.2;
const restitution = .12;
const tension = strands.map((_, r) => 235 + 55 * Math.cos(r * 2.4));
const airPhase = nodes.map(({x, y}, i) => {
  const row = Math.floor(i / columns);
  return [x / 166 + y / 138 + row * .39, x / 102 + row * 2.4];
});
let time = 0;

// Two slow bends move the equilibrium through the open span. The taper
// keeps both the resting shape and spring strength near each end intact.
const anchors = Array.from({length: columns}, (_, col) => {
  const angle = Math.PI * col / (columns - 1);
  const bow = Math.sin(angle) ** 6;
  return {
    bow,
    twist: bow * Math.sin(2 * angle),
    stiffness: endStiffness + (middleStiffness - endStiffness) * bow
  };
});
const equilibrium = new Float32Array(columns);

// At each station, subtract the clearance reserved for the stroke edges.
// The resulting coordinates may meet, but must stay in their original order.
const freeGap = new Float32Array(nodes.length);
for (let i = columns; i < nodes.length; i++) {
  const gap = nodes[i].y - nodes[i - columns].y;
  const clearance = Math.min(.8 * gap, Math.max(4.8, .31 * gap));
  freeGap[i] = freeGap[i - columns] + gap - clearance;
}
const centers = new Float64Array(rows.length);
const counts = new Uint16Array(rows.length);

function collide(col) {
  // Merge adjacent contacts about their common center of mass. Solving an
  // entire contact chain together avoids pushing all its error to one side.
  let groups = 0;
  for (let i = col; i < nodes.length; i += columns) {
    counts[groups] = 1;
    centers[groups++] = offset[i] + freeGap[i];
    while (groups > 1 && centers[groups - 2] > centers[groups - 1]) {
      const b = --groups, a = b - 1;
      counts[a] += counts[b];
      centers[a] += (centers[b] - centers[a]) * counts[b] / counts[a];
    }
  }
  for (let g = 0, i = col; g < groups; g++) {
    const end = i + columns * counts[g];
    if (counts[g] > 1) {
      let commonSpeed = 0;
      for (let j = i; j < end; j += columns) commonSpeed += velocity[j] / counts[g];
      for (let j = i; j < end; j += columns) {
        offset[j] = centers[g] - freeGap[j];
        velocity[j] = commonSpeed + restitution * (commonSpeed - velocity[j]);
      }
    }
    i = end;
  }
}

function integrate() {
  time += step;
  const bow = 15 * Math.sin(.26 * time);
  const twist = 9 * Math.sin(.39 * time);
  for (let col = 1; col < columns - 1; col++) {
    equilibrium[col] = bow * anchors[col].bow + twist * anchors[col].twist;
  }
  for (let row = 0; row < rows.length; row++) {
    for (let col = 1; col < columns - 1; col++) {
      const i = row * columns + col;
      const [gust, flutter] = airPhase[i];
      const air = 34 * Math.sin(gust - 1.04 * time) + 18 * Math.sin(flutter + 1.64 * time);
      const bend = offset[i - 1] + offset[i + 1] - 2 * offset[i];
      const restoringForce = anchors[col].stiffness * (equilibrium[col] - offset[i]);
      velocity[i] += step * (air + tension[row] * bend + restoringForce - damping * velocity[i]);
    }
  }
  for (let i = 0; i < offset.length; i++) offset[i] += step * velocity[i];
  for (let col = 1; col < columns - 1; col++) collide(col);
}

let frame = 0, lastTime = null, lastPaint = -Infinity, remainder = 0;
function animate(now) {
  remainder += lastTime === null ? 0 : Math.min((now - lastTime) / 1000, .08);
  lastTime = now;
  while (remainder >= step) {
    integrate();
    remainder -= step;
  }
  if (now - lastPaint >= 32) {
    paths.forEach((path, row) => path.setAttribute('d', curve(strands[row].points, rows[row])));
    lastPaint = now;
  }
  frame = requestAnimationFrame(animate);
}

let visible = false;
let previousPointer = null;
function sync() {
  if (visible && !document.hidden && !reducedMotion.matches) {
    if (!frame) frame = requestAnimationFrame(animate);
    return;
  }
  cancelAnimationFrame(frame);
  frame = 0;
  lastTime = null;
  remainder = 0;
  previousPointer = null;
}

const brushReach = 12;
function pluck(x, y, travelX, travelY) {
  // Pick one string by distance to its deformed segments.
  const reachSquared = brushReach ** 2;
  let closest = reachSquared, hit = -1, fraction = 0, normalTravel = 0;
  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < columns - 1; col++) {
      const i = row * columns + col;
      const fromX = x - (nodes[i].x + shear * offset[i]);
      const fromY = y - (nodes[i].y + offset[i]);
      const dy = nodes[i + 1].y - nodes[i].y + offset[i + 1] - offset[i];
      const dx = nodes[i + 1].x - nodes[i].x + shear * (offset[i + 1] - offset[i]);
      const t = Math.max(0, Math.min(1, (fromX * dx + fromY * dy) / (dx * dx + dy * dy)));
      const distance = (fromX - t * dx) ** 2 + (fromY - t * dy) ** 2;
      if (distance >= closest) continue;
      closest = distance;
      hit = i;
      fraction = t;
      normalTravel = (travelY * dx - travelX * dy) / Math.hypot(dx, dy);
    }
  }
  if (hit < 0) return;
  // A smooth, localized kick launches a wave in both directions along this string.
  const impulse = normalTravel * 16 * (1 - closest / reachSquared);
  const rowStart = hit - hit % columns;
  const center = hit % columns + fraction;
  const radius = 2.5;
  for (let col = Math.max(1, Math.ceil(center - radius)); col <= Math.min(columns - 2, center + radius); col++) {
    const weight = (1 + Math.cos(Math.PI * (col - center) / radius)) / 2;
    velocity[rowStart + col] += impulse * weight;
  }
}

hero.addEventListener('pointermove', event => {
  if (!frame || event.pointerType !== 'mouse') return;
  const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(svg.getScreenCTM().inverse());
  const previous = previousPointer;
  previousPointer = p;
  if (!previous) return;
  const dx = p.x - previous.x, dy = p.y - previous.y;
  const distance = Math.hypot(dx, dy);
  if (!distance) return;
  // Fast pointer events can span multiple strings. Sample the sweep between events.
  const samples = Math.min(64, Math.ceil(distance / (brushReach / 2)));
  for (let s = 1; s <= samples; s++) {
    pluck(previous.x + dx * s / samples, previous.y + dy * s / samples, dx / samples, dy / samples);
  }
}, {passive: true});
hero.addEventListener('pointerleave', () => { previousPointer = null; });
new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }).observe(hero);
document.addEventListener('visibilitychange', sync);
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) {
    offset.fill(0);
    velocity.fill(0);
    paths.forEach((path, i) => path.setAttribute('d', rest[i]));
    time = 0;
  }
  sync();
});
