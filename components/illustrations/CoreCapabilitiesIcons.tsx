"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Workflow,
  ShieldCheck,
  BarChart3,
  Bot,
  Plug,
  FileText,
  Users,
} from "lucide-react";
import { viewportOnce, pathDraw } from "@/lib/animations";

const modules = [
  { label: "Inventory", icon: Boxes, color: "#6C63FF" },
  { label: "HR & Payroll", icon: Users, color: "#A78BFA" },
  { label: "Finance", icon: BarChart3, color: "#06B6D4" },
  { label: "Procurement", icon: FileText, color: "#F59E0B" },
  { label: "Workflow", icon: Workflow, color: "#10B981" },
  { label: "Security", icon: ShieldCheck, color: "#EF4444" },
  { label: "AI", icon: Bot, color: "#8B5CF6" },
  { label: "Integrations", icon: Plug, color: "#14B8A6" },
];

export default function CoreCapabilitiesIcons() {
  const center = { x: 400, y: 220 };

  return (
    <div className="relative mx-auto aspect-[800/360] w-full max-w-4xl">
      <svg viewBox="0 0 800 360" className="absolute inset-0 h-full w-full">
        {modules.map((_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const x = 100 + col * 200;
          const y = 80 + row * 160;
          return (
            <motion.path
              key={i}
              d={`M ${x} ${y} L ${center.x} ${center.y}`}
              stroke="#A78BFA"
              strokeOpacity="0.4"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              fill="none"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={pathDraw}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4">
        {modules.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="flex flex-col items-center gap-1.5"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-card"
                style={{ color: m.color }}
              >
                <Icon size={22} />
              </span>
              <span className="text-[11px] font-semibold text-ink">
                {m.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-cta text-white shadow-cta">
          <span className="text-[11px] font-extrabold">ERP</span>
        </div>
        <span className="text-[12px] font-semibold text-purple-primary">
          Formezy
        </span>
      </div>
    </div>
  );
}
