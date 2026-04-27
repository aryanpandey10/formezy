"use client";

import { motion } from "framer-motion";
import { viewportOnce, pathDraw } from "@/lib/animations";

const clients = [
  "Globex",
  "Initech",
  "Stark",
  "Wayne",
  "Umbrella",
  "Soylent",
  "Hooli",
  "Acme",
];

export default function ClientOrbit() {
  const center = { x: 260, y: 260 };
  const R = 180;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="orbitGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.circle
          cx={center.x}
          cy={center.y}
          r={R}
          stroke="url(#orbitGrad)"
          strokeWidth="1.5"
          strokeDasharray="3 6"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />
        <motion.circle
          cx={center.x}
          cy={center.y}
          r={R - 40}
          stroke="#A78BFA"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="2 6"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />
      </svg>

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {clients.map((name, i) => {
          const angle = (Math.PI * 2 * i) / clients.length;
          const x = center.x + Math.cos(angle) * R;
          const y = center.y + Math.sin(angle) * R;
          return (
            <motion.div
              key={name}
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{
                left: `${(x / 520) * 100}%`,
                top: `${(y / 520) * 100}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-border bg-white text-[11px] font-bold text-ink shadow-card">
                {name}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-purple-cta text-white shadow-cta">
          <span className="text-[14px] font-extrabold">Formezy</span>
          <span className="absolute -inset-2 -z-10 rounded-full bg-purple-primary/20 blur-xl" />
        </div>
      </div>
    </div>
  );
}
