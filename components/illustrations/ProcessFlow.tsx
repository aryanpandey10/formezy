"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  LayoutTemplate,
  GitMerge,
  Workflow,
  LineChart,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { viewportOnce, fadeUp, staggerContainer } from "@/lib/animations";

const steps = [
  { label: "Idea / Concept", icon: Lightbulb, color: "#F59E0B" },
  { label: "System Design", icon: LayoutTemplate, color: "#6C63FF" },
  { label: "Logic & Rules", icon: GitMerge, color: "#A78BFA" },
  { label: "Automation", icon: Workflow, color: "#06B6D4" },
  { label: "Analytics", icon: LineChart, color: "#10B981" },
  { label: "Scale", icon: Rocket, color: "#EF4444" },
];

export default function ProcessFlow() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="relative mx-auto w-full max-w-6xl"
    >
      <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="flex flex-1 items-center gap-4 md:flex-col md:gap-3"
            >
              <motion.div variants={fadeUp} className="flex flex-1 md:flex-none">
                <div className="group relative flex w-full flex-col items-center gap-2 rounded-2xl border border-surface-border bg-white p-4 text-center shadow-card transition-transform hover:-translate-y-1">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${step.color}18`,
                      color: step.color,
                    }}
                  >
                    <Icon size={24} />
                  </span>
                  <span className="text-[13px] font-semibold text-ink">
                    {step.label}
                  </span>
                  <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-primary">
                    Step {i + 1}
                  </span>
                </div>
              </motion.div>
              {i < steps.length - 1 ? (
                <ArrowRight
                  className="hidden rotate-0 text-purple-primary md:block"
                  size={18}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
