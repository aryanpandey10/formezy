"use client";

import { motion } from "framer-motion";
import { X, Check, Gem } from "lucide-react";
import { pathDraw, viewportOnce, fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

const leftItems = [
  "Operate in Silos",
  "Manual Coordination",
  "Fragmented Communication",
  "Lack Process-level Control",
];
const rightItems = [
  "Built Around Your Workflow",
  "Connects Teams, Data, and Processes",
  "Enables Structured Communication",
  "Automates Execution Across Departments",
];

export default function SiloVsFormezy() {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr,auto,1fr]">
        <motion.ul
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {leftItems.map((text) => (
            <motion.li
              key={text}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl border border-surface-border bg-white/70 p-4 text-ink-muted backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-ink-muted">
                <X size={18} />
              </span>
              <span className="text-[15px] font-medium line-through decoration-ink-muted/50">
                {text}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <div className="relative flex flex-col items-center">
          <div aria-hidden className="absolute inset-0 -z-10 rounded-full bg-radial-purple blur-2xl" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-32 w-32 items-center justify-center rounded-full bg-purple-cta shadow-cta"
          >
            <Gem size={48} className="text-white" />
            <span className="absolute -bottom-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-purple-primary shadow-card">
              Formezy
            </span>
          </motion.div>

          <svg
            aria-hidden
            viewBox="0 0 120 280"
            className="absolute left-1/2 top-1/2 hidden h-[280px] w-[120px] -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.line
                key={"l" + i}
                x1={0}
                y1={40 + i * 60}
                x2={60}
                y2={140}
                stroke="#A78BFA"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={pathDraw}
              />
            ))}
            {[0, 1, 2, 3].map((i) => (
              <motion.line
                key={"r" + i}
                x1={60}
                y1={140}
                x2={120}
                y2={40 + i * 60}
                stroke="#6C63FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={pathDraw}
              />
            ))}
          </svg>
        </div>

        <motion.ul
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {rightItems.map((text) => (
            <motion.li
              key={text}
              variants={fadeUp}
              className={cn(
                "flex items-center gap-4 rounded-2xl border p-4",
                "border-purple-200 bg-purple-50/60 shadow-card",
              )}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-cta text-white">
                <Check size={18} />
              </span>
              <span className="text-[15px] font-semibold text-ink">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
