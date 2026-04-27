"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Boxes,
  ShieldCheck,
  BarChart3,
  Bot,
  Plug,
} from "lucide-react";
import { pathDraw, viewportOnce } from "@/lib/animations";

const capabilities = [
  { label: "Workflow Automation", icon: Workflow, color: "#6C63FF" },
  { label: "Data Centralization", icon: Boxes, color: "#A78BFA" },
  { label: "Role-based Security", icon: ShieldCheck, color: "#06B6D4" },
  { label: "Reports & Dashboards", icon: BarChart3, color: "#F59E0B" },
  { label: "AI Intelligence", icon: Bot, color: "#8B5CF6" },
  { label: "Integrations", icon: Plug, color: "#10B981" },
];

export default function PlatformHub() {
  const center = { x: 400, y: 320 };
  const R = 240;

  const nodes = capabilities.map((c, i) => {
    const angle = (Math.PI * 2 * i) / capabilities.length - Math.PI / 2;
    return {
      ...c,
      x: center.x + Math.cos(angle) * R,
      y: center.y + Math.sin(angle) * R,
    };
  });

  return (
    <div className="relative mx-auto aspect-[800/640] w-full max-w-4xl">
      <svg viewBox="0 0 800 640" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hubEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>

        {nodes.map((n, i) => (
          <motion.line
            key={i}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            stroke={n.color}
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        ))}

        <motion.polygon
          points={hexPoints(center.x, center.y, 88)}
          fill="url(#hubEdge)"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        />
        <text
          x={center.x}
          y={center.y + 6}
          textAnchor="middle"
          fontSize="22"
          fontWeight="800"
          fill="#ffffff"
        >
          Formezy
        </text>
      </svg>

      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            style={{
              left: `${(n.x / 800) * 100}%`,
              top: `${(n.y / 640) * 100}%`,
            }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card"
              style={{ color: n.color }}
            >
              <Icon size={24} />
            </div>
            <span className="max-w-[140px] whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-center text-[12px] font-semibold text-ink shadow-card">
              {n.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function hexPoints(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return pts.join(" ");
}
