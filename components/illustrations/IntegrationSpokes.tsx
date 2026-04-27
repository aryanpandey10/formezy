"use client";

import { motion } from "framer-motion";
import { pathDraw, viewportOnce } from "@/lib/animations";
import { integrationsList } from "@/lib/constants";

export default function IntegrationSpokes() {
  const R = 220;
  const center = { x: 360, y: 260 };

  const nodes = integrationsList.map((integ, i) => {
    const angle = (Math.PI * 2 * i) / integrationsList.length - Math.PI / 2;
    return {
      ...integ,
      x: center.x + Math.cos(angle) * R,
      y: center.y + Math.sin(angle) * R,
    };
  });

  return (
    <div className="relative mx-auto aspect-[720/520] w-full max-w-3xl">
      <svg
        viewBox="0 0 720 520"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#6C63FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="spoke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>

        <circle cx={center.x} cy={center.y} r="180" fill="url(#hubGlow)" />

        {nodes.map((n, i) => (
          <motion.line
            key={i}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            stroke="url(#spoke)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        ))}

        <circle
          cx={center.x}
          cy={center.y}
          r="72"
          fill="#ffffff"
          stroke="#E5E7EB"
        />
        <circle
          cx={center.x}
          cy={center.y}
          r="58"
          fill="url(#spoke)"
          opacity="0.95"
        />
        <text
          x={center.x}
          y={center.y + 6}
          textAnchor="middle"
          fontSize="20"
          fontWeight="700"
          fill="#ffffff"
        >
          Formezy
        </text>
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.name}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{
            delay: 0.6 + i * 0.07,
            duration: 0.4,
            ease: "easeOut",
          }}
          style={{
            left: `${(n.x / 720) * 100}%`,
            top: `${(n.y / 520) * 100}%`,
          }}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-border bg-white text-[13px] font-bold text-purple-primary shadow-card">
            {n.short}
          </div>
          <span className="whitespace-nowrap text-[11px] font-medium text-ink-secondary">
            {n.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
