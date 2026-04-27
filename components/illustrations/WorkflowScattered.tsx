"use client";

import { motion } from "framer-motion";
import { FileSignature, GitBranch, CheckCircle2, Users, Zap } from "lucide-react";
import { viewportOnce, floatTransition, pathDraw } from "@/lib/animations";

const nodes = [
  { Icon: FileSignature, label: "Forms", x: "8%", y: "10%", color: "#6C63FF" },
  { Icon: GitBranch, label: "Branching", x: "78%", y: "12%", color: "#A78BFA" },
  { Icon: Users, label: "Roles", x: "12%", y: "70%", color: "#06B6D4" },
  { Icon: CheckCircle2, label: "Approvals", x: "82%", y: "66%", color: "#10B981" },
  { Icon: Zap, label: "Automation", x: "46%", y: "85%", color: "#F59E0B" },
];

export default function WorkflowScattered() {
  return (
    <div className="relative mx-auto aspect-[600/480] w-full max-w-xl">
      <svg viewBox="0 0 600 480" className="absolute inset-0 h-full w-full">
        <motion.path
          d="M60 50 Q300 180 540 70"
          stroke="#A78BFA"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />
        <motion.path
          d="M80 340 Q300 240 530 320"
          stroke="#A78BFA"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />
        <motion.path
          d="M60 50 Q280 280 280 420"
          stroke="#6C63FF"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />
      </svg>

      {nodes.map((n, i) => {
        const { Icon } = n;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [0, -8, 0] }}
            viewport={viewportOnce}
            transition={{
              opacity: { duration: 0.5, delay: 0.1 * i },
              y: { ...floatTransition, delay: i * 0.25 },
            }}
            style={{ left: n.x, top: n.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex flex-col items-center gap-1.5">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card"
                style={{ color: n.color }}
              >
                <Icon size={22} />
              </span>
              <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-ink shadow-card">
                {n.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
