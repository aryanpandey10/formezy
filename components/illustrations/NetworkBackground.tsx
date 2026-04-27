"use client";

import { motion } from "framer-motion";
import { pathDraw, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";

export default function NetworkBackground({ className }: { className?: string }) {
  const nodes = Array.from({ length: 18 }).map((_, i) => ({
    x: ((i * 97) % 1000) / 10 + 2,
    y: ((i * 53 + 23) % 800) / 10 + 4,
  }));

  return (
    <svg
      viewBox="0 0 100 80"
      preserveAspectRatio="none"
      className={cn("pointer-events-none h-full w-full", className)}
    >
      {nodes.map((n, i) => {
        if (i === nodes.length - 1) return null;
        const m = nodes[(i + 3) % nodes.length];
        return (
          <motion.line
            key={i}
            x1={n.x}
            y1={n.y}
            x2={m.x}
            y2={m.y}
            stroke="#A78BFA"
            strokeOpacity="0.35"
            strokeWidth="0.15"
            strokeDasharray="0.6 0.6"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        );
      })}
      {nodes.map((n, i) => (
        <motion.circle
          key={`c${i}`}
          cx={n.x}
          cy={n.y}
          r="0.5"
          fill="#6C63FF"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={viewportOnce}
          transition={{ delay: 0.05 * i }}
        />
      ))}
    </svg>
  );
}
