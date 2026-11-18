// The strings fan out where the visible span has the most slack. The slight
// shear gives a transverse pluck both a horizontal and vertical component.
const strandCount = 17;
const stationCount = 65;
export const shear = 0.3;

function restPoint(u, v) {
  const span = (u - 220) / 265;
  const slack = Math.exp(-span * span);
  const arc = (43 + 49 * slack) * Math.sin((u - 84) / 128 + v * .84);
  const y = 187 - .105 * u + arc + v * (120 + 126 * slack);
  return {x: u + shear * (y - 175), y};
}

export const strands = Array.from({length: strandCount}, (_, row) => {
  const v = row / (strandCount - 1) - 0.5;
  const points = Array.from({length: stationCount}, (_, column) =>
    restPoint(-850 + 1700 * column / (stationCount - 1), v)
  );
  return {points};
});

// A midpoint spline rounds each simulated string without overshooting its nodes.
export function curve(points, offsets) {
  const projectedX = i => points[i].x + shear * (offsets?.[i] ?? 0);
  const projectedY = i => points[i].y + (offsets?.[i] ?? 0);
  let path = `M${projectedX(0).toFixed(1)} ${projectedY(0).toFixed(1)} Q`;
  for (let i = 1; i < points.length - 1; i++) {
    const x = projectedX(i);
    const y = projectedY(i);
    const endX = (x + projectedX(i + 1)) / 2;
    const endY = (y + projectedY(i + 1)) / 2;
    path += `${x.toFixed(1)} ${y.toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)} `;
  }
  return path;
}
