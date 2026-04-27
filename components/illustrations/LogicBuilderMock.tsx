"use client";

import { motion } from "framer-motion";
import { pathDraw, viewportOnce } from "@/lib/animations";
import { Mail, GitBranch, Check, Clock, UserCog } from "lucide-react";

const nodes = [
  { id: "start", label: "New Request", icon: Mail, x: 70, y: 80, color: "#6C63FF" },
  { id: "gate", label: "Amount > $10K?", icon: GitBranch, x: 270, y: 80, color: "#A78BFA" },
  { id: "manager", label: "Manager Review", icon: UserCog, x: 470, y: 30, color: "#06B6D4" },
  { id: "auto", label: "Auto-Approve", icon: Check, x: 470, y: 130, color: "#10B981" },
  { id: "wait", label: "Waiting SLA 24h", icon: Clock, x: 670, y: 30, color: "#F59E0B" },
  { id: "end", label: "Notify Vendor", icon: Check, x: 670, y: 130, color: "#6C63FF" },
];

const edges: [string, string][] = [
  ["start", "gate"],
  ["gate", "manager"],
  ["gate", "auto"],
  ["manager", "wait"],
  ["auto", "end"],
];

export default function LogicBuilderMock() {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-[800/220] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 via-white to-cyan-50 p-4">
      <svg viewBox="0 0 800 220" className="h-full w-full">
        {edges.map(([a, b], i) => {
          const A = byId[a]!;
          const B = byId[b]!;
          return (
            <motion.path
              key={i}
              d={`M ${A.x + 68} ${A.y + 20} C ${A.x + 140} ${A.y + 20}, ${B.x - 60} ${B.y + 20}, ${B.x} ${B.y + 20}`}
              fill="none"
              stroke="#A78BFA"
              strokeWidth="2"
              strokeDasharray="5 5"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={pathDraw}
            />
          );
        })}
      </svg>

      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 + i * 0.07 }}
            style={{ left: n.x, top: n.y }}
            className="absolute flex w-36 items-center gap-2 rounded-xl border border-surface-border bg-white p-2.5 shadow-card"
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${n.color}15`, color: n.color }}
            >
              <Icon size={16} />
            </span>
            <span className="text-[11px] font-semibold text-ink">
              {n.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
