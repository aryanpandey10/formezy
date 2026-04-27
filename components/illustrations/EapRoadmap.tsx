"use client";

import { motion } from "framer-motion";
import { Users, Workflow, BarChart3, Zap } from "lucide-react";
import { pathDraw, viewportOnce } from "@/lib/animations";

const stops = [
  { Icon: Users, label: "Teams", color: "#6C63FF", x: 50, y: 180 },
  { Icon: Workflow, label: "Workflows", color: "#A78BFA", x: 180, y: 80 },
  { Icon: Zap, label: "Automation", color: "#F59E0B", x: 310, y: 180 },
  { Icon: BarChart3, label: "Outcomes", color: "#10B981", x: 440, y: 90 },
];

export default function EapRoadmap() {
  return (
    <div className="relative aspect-[500/300] w-full">
      <svg viewBox="0 0 500 300" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="roadmapGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 40 220 C 110 40, 220 260, 300 160 S 450 40, 470 120"
          stroke="url(#roadmapGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />

        {stops.map((s, i) => (
          <motion.circle
            key={"c" + i}
            cx={s.x}
            cy={s.y}
            r="10"
            fill="#ffffff"
            stroke={s.color}
            strokeWidth="3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4 + 0.12 * i }}
          />
        ))}
      </svg>

      {stops.map((s, i) => {
        const { Icon } = s;
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5 + 0.12 * i }}
            style={{ left: s.x, top: s.y }}
            className="absolute flex -translate-x-1/2 -translate-y-[130%] items-center gap-1.5 rounded-2xl border border-surface-border bg-white p-2 shadow-card"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${s.color}18`, color: s.color }}
            >
              <Icon size={14} />
            </span>
            <span className="pr-1 text-[11px] font-semibold text-ink">
              {s.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
