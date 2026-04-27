"use client";

import { motion } from "framer-motion";
import { pathDraw, viewportOnce } from "@/lib/animations";

const steps = [
  { label: "Data Intake", x: 60 },
  { label: "Processing", x: 180 },
  { label: "Approval", x: 300 },
  { label: "Execution", x: 420 },
  { label: "Review", x: 540 },
  { label: "Integration", x: 660 },
  { label: "Result", x: 780 },
];

export default function WorkflowRoad() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <svg viewBox="0 0 860 220" className="h-auto w-full">
        <defs>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        <motion.path
          d="M20 120 C 140 40, 260 200, 400 110 S 620 40, 840 130"
          fill="none"
          stroke="url(#roadGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="1 10"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />

        {steps.map((s, i) => {
          const y = 60 + Math.sin(i * 1.05) * 35;
          return (
            <motion.g
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <circle
                cx={s.x}
                cy={y}
                r="14"
                fill="#ffffff"
                stroke="#6C63FF"
                strokeWidth="3"
              />
              <circle cx={s.x} cy={y} r="5" fill="#6C63FF" />
              <text
                x={s.x}
                y={y + 34}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="#0F0F1A"
              >
                {s.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
