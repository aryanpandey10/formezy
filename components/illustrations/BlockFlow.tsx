"use client";

import { motion } from "framer-motion";
import { Check, Circle, Square, Triangle } from "lucide-react";
import { pathDraw, viewportOnce } from "@/lib/animations";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  icon?: React.ReactNode;
};

const nodes: Node[] = [
  { id: "a", label: "Request", x: 60, y: 60, color: "#6C63FF", icon: <Square size={14} /> },
  { id: "b", label: "Route", x: 240, y: 60, color: "#A78BFA", icon: <Triangle size={14} /> },
  { id: "c", label: "Approve", x: 420, y: 60, color: "#06B6D4", icon: <Check size={14} /> },
  { id: "d", label: "Execute", x: 420, y: 200, color: "#F59E0B", icon: <Circle size={14} /> },
  { id: "e", label: "Review", x: 240, y: 200, color: "#10B981", icon: <Check size={14} /> },
  { id: "f", label: "Report", x: 60, y: 200, color: "#EF4444", icon: <Square size={14} /> },
];

const edges: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "f"],
];

export default function BlockFlow() {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-[500/280] w-full overflow-hidden rounded-2xl border border-surface-border bg-gradient-to-br from-purple-50 via-white to-cyan-50 p-5">
      <svg viewBox="0 0 500 280" className="absolute inset-0 h-full w-full">
        {edges.map(([a, b], i) => {
          const A = byId[a]!;
          const B = byId[b]!;
          return (
            <motion.path
              key={i}
              d={`M ${A.x + 50} ${A.y + 22} C ${A.x + 100} ${A.y + 22}, ${B.x - 40} ${B.y + 22}, ${B.x} ${B.y + 22}`}
              stroke="#A78BFA"
              strokeWidth="1.8"
              strokeDasharray="4 5"
              fill="none"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={pathDraw}
            />
          );
        })}
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2 + 0.08 * i }}
          style={{ left: n.x, top: n.y }}
          className="absolute flex w-28 items-center gap-2 rounded-xl border border-surface-border bg-white p-2.5 shadow-card"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
            style={{ background: n.color }}
          >
            {n.icon}
          </span>
          <span className="text-[11px] font-semibold text-ink">{n.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
