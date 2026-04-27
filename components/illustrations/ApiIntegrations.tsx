"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Users2,
  Cloud,
  MessageCircle,
  Mail,
} from "lucide-react";
import { pathDraw, viewportOnce } from "@/lib/animations";

const nodes = [
  { Icon: Megaphone, label: "Marketing Autom.", color: "#F59E0B", x: 100, y: 60 },
  { Icon: Users2, label: "Sales CRM", color: "#6C63FF", x: 380, y: 40 },
  { Icon: Cloud, label: "Cloud Storage", color: "#06B6D4", x: 60, y: 250 },
  { Icon: MessageCircle, label: "Communication Tools", color: "#10B981", x: 400, y: 340 },
  { Icon: Mail, label: "Email Services", color: "#EF4444", x: 120, y: 400 },
];

export default function ApiIntegrations() {
  const center = { x: 230, y: 220 };

  return (
    <div className="relative aspect-[500/480] w-full">
      <svg viewBox="0 0 500 480" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="apiHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#6C63FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={center.x} cy={center.y} r="140" fill="url(#apiHubGlow)" />

        {nodes.map((n, i) => (
          <motion.path
            key={i}
            d={`M ${n.x + 20} ${n.y + 20} Q ${(n.x + center.x) / 2} ${(n.y + center.y) / 2 - 20} ${center.x} ${center.y}`}
            stroke={n.color}
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            fill="none"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
        style={{ left: center.x, top: center.y }}
        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-cta text-white shadow-cta">
          <span className="text-[13px] font-extrabold">API</span>
        </div>
        <span className="rounded-pill bg-white px-3 py-1 text-[11px] font-semibold text-purple-primary shadow-card">
          Formezy
        </span>
      </motion.div>

      {nodes.map((n, i) => {
        const { Icon } = n;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 + 0.08 * i }}
            style={{ left: n.x, top: n.y }}
            className="absolute flex items-center gap-2 rounded-2xl border border-surface-border bg-white p-2.5 shadow-card"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${n.color}18`, color: n.color }}
            >
              <Icon size={16} />
            </span>
            <span className="pr-2 text-[11px] font-semibold text-ink">
              {n.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
