"use client";

import { motion } from "framer-motion";
import { floatTransition, viewportOnce } from "@/lib/animations";

type Block = {
  label: string;
  color: string;
  x: string;
  y: string;
  size: number;
  rotate: number;
  delay: number;
};

const blocks: Block[] = [
  { label: "Workflows", color: "#6C63FF", x: "18%", y: "32%", size: 110, rotate: -6, delay: 0 },
  { label: "Analytics", color: "#06B6D4", x: "42%", y: "14%", size: 96, rotate: 5, delay: 0.3 },
  { label: "Automation", color: "#F59E0B", x: "68%", y: "28%", size: 112, rotate: -4, delay: 0.5 },
  { label: "Data", color: "#10B981", x: "30%", y: "70%", size: 92, rotate: 8, delay: 0.7 },
  { label: "AI", color: "#A78BFA", x: "56%", y: "72%", size: 104, rotate: -7, delay: 0.9 },
  { label: "Integrations", color: "#EF4444", x: "80%", y: "62%", size: 88, rotate: 6, delay: 1.1 },
];

export default function CompanyHero() {
  return (
    <div className="relative mx-auto aspect-[1100/560] w-full max-w-5xl">
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full bg-radial-purple blur-2xl"
      />
      {blocks.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: b.rotate,
            y: [0, -12, 0],
          }}
          viewport={viewportOnce}
          transition={{
            opacity: { duration: 0.5, delay: 0.05 * i },
            scale: { duration: 0.5, delay: 0.05 * i },
            rotate: { duration: 0.5, delay: 0.05 * i },
            y: { ...floatTransition, delay: b.delay },
          }}
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[22px] p-4 shadow-[0_20px_40px_rgba(15,15,26,0.12)]"
        >
          <div
            className="flex h-full w-full flex-col items-start justify-between rounded-[18px] p-3"
            style={{
              background: `linear-gradient(145deg, ${b.color}, ${b.color}cc 55%, ${b.color}88)`,
              color: "#fff",
            }}
          >
            <span className="rounded-pill bg-white/30 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
              Module
            </span>
            <span className="text-[13px] font-bold leading-tight">
              {b.label}
            </span>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-3xl bg-ink text-white shadow-[0_30px_70px_rgba(15,15,26,0.35)]">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-light">
            Platform
          </span>
          <span className="text-[18px] font-extrabold">Formezy</span>
        </div>
      </motion.div>
    </div>
  );
}
