import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Animated neural-network SVG used as hero visual.
 * Pure SVG + framer-motion — no external assets.
 */
export function NeuralHero() {
  const nodes = useMemo(() => {
    const seed = [
      [50, 50],
      [120, 80],
      [80, 150],
      [160, 130],
      [220, 70],
      [200, 180],
      [110, 220],
      [260, 140],
      [300, 80],
      [320, 200],
      [180, 260],
      [260, 260],
      [60, 280],
      [380, 140],
      [350, 280],
      [140, 330],
      [240, 330],
      [320, 350],
    ];
    return seed.map(([x, y], i) => ({ id: i, x, y, r: 3 + (i % 3) }));
  }, []);
  const links = useMemo(() => {
    const out: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        if (Math.hypot(dx, dy) < 110) out.push([i, j]);
      }
    }
    return out;
  }, [nodes]);

  return (
    <div className="relative aspect-square w-full max-w-xl">
      <div
        className="absolute inset-0 rounded-full bg-gradient-glow blur-3xl opacity-60"
        style={{ background: "var(--gradient-glow)" }}
      />
      <motion.svg
        viewBox="0 0 420 400"
        className="relative h-full w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.18 235)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.88 0.14 210)" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="oklch(0.95 0.14 210)" />
            <stop offset="100%" stopColor="oklch(0.72 0.18 235)" />
          </radialGradient>
        </defs>
        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#lineGrad)"
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: i * 0.02 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="url(#nodeGrad)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2.5, delay: i * 0.08, repeat: Infinity, repeatDelay: 1 }}
            style={{ filter: "drop-shadow(0 0 6px oklch(0.72 0.18 235))" }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function Particles() {
  const items = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            boxShadow: "0 0 10px oklch(0.72 0.18 235)",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
