import React from "react";

export default function HeroGraph() {
  const nodes = [
    { x: 60, y: 60 }, { x: 220, y: 30 }, { x: 360, y: 90 },
    { x: 120, y: 170 }, { x: 300, y: 200 }, { x: 440, y: 150 },
    { x: 200, y: 260 }, { x: 400, y: 300 }, { x: 60, y: 300 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5],
    [3, 6], [4, 7], [6, 8], [3, 8], [5, 7],
  ];

  return (
    <svg className="hero-graph" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          className="graph-edge"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y} r={i % 3 === 0 ? 6 : 4.5}
          className="graph-node"
          style={{ animationDelay: `${i * 0.22}s` }}
        />
      ))}
    </svg>
  );
}
