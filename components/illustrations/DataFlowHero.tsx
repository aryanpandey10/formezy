"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Database,
  Mail,
  BarChart3,
  LineChart,
  PieChart,
} from "lucide-react";
import { pathDraw, viewportOnce } from "@/lib/animations";

const inputs = [
  { Icon: FileText, label: "Documents", color: "#6C63FF" },
  { Icon: Database, label: "Databases", color: "#A78BFA" },
  { Icon: Mail, label: "Emails", color: "#06B6D4" },
];

const outputs = [
  { Icon: BarChart3, label: "Dashboards", color: "#F59E0B" },
  { Icon: LineChart, label: "Analytics", color: "#10B981" },
  { Icon: PieChart, label: "Reports", color: "#EF4444" },
];

export default function DataFlowHero() {
  return (
    <div className="relative mx-auto aspect-[1000/420] w-full max-w-5xl">
      <svg viewBox="0 0 1000 420" className="absolute inset-0 h-full w-full">
        {inputs.map((_, i) => (
          <motion.path
            key={`in${i}`}
            d={`M 120 ${80 + i * 120} C 300 ${80 + i * 120}, 360 210, 440 210`}
            stroke="#A78BFA"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        ))}
        {outputs.map((_, i) => (
          <motion.path
            key={`out${i}`}
            d={`M 560 210 C 640 210, 700 ${80 + i * 120}, 880 ${80 + i * 120}`}
            stroke="#6C63FF"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        ))}
      </svg>

      <div className="absolute inset-0">
        {inputs.map((n, i) => {
          const { Icon } = n;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1 * i }}
              style={{ top: `${(80 + i * 120 - 28) / 420 * 100}%` }}
              className="absolute left-[4%] flex items-center gap-2.5 rounded-2xl border border-surface-border bg-white p-2.5 shadow-card"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${n.color}15`, color: n.color }}
              >
                <Icon size={18} />
              </span>
              <span className="pr-2 text-[13px] font-semibold text-ink">
                {n.label}
              </span>
            </motion.div>
          );
        })}

        {outputs.map((n, i) => {
          const { Icon } = n;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2 + 0.1 * i }}
              style={{ top: `${(80 + i * 120 - 28) / 420 * 100}%` }}
              className="absolute right-[4%] flex items-center gap-2.5 rounded-2xl border border-surface-border bg-white p-2.5 shadow-card"
            >
              <span className="pl-2 text-[13px] font-semibold text-ink">
                {n.label}
              </span>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${n.color}15`, color: n.color }}
              >
                <Icon size={18} />
              </span>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex h-36 w-36 flex-col items-center justify-center gap-1.5 rounded-3xl bg-purple-cta text-white shadow-[0_30px_60px_rgba(108,99,255,0.35)]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-80">
              Formezy
            </span>
            <span className="text-[18px] font-extrabold">Platform</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
