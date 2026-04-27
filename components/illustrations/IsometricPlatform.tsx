"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Smartphone,
  ShieldCheck,
  BarChart3,
  Plug,
  Workflow,
} from "lucide-react";
import { viewportOnce, floatTransition } from "@/lib/animations";

const orbit = [
  { Icon: Bot, label: "AI", color: "#6C63FF", x: "10%", y: "15%" },
  { Icon: Smartphone, label: "Mobile", color: "#06B6D4", x: "82%", y: "18%" },
  { Icon: ShieldCheck, label: "Security", color: "#EF4444", x: "6%", y: "60%" },
  {
    Icon: BarChart3,
    label: "Analytics",
    color: "#F59E0B",
    x: "85%",
    y: "62%",
  },
  { Icon: Plug, label: "Integrations", color: "#10B981", x: "22%", y: "88%" },
  { Icon: Workflow, label: "Workflow", color: "#8B5CF6", x: "72%", y: "90%" },
];

export default function IsometricPlatform() {
  return (
    <div className="relative mx-auto aspect-[900/560] w-full max-w-5xl">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-purple blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-44 w-44 [transform-style:preserve-3d] [perspective:800px]">
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center rounded-3xl bg-purple-cta text-white shadow-[0_40px_80px_rgba(108,99,255,0.35)] [transform-style:preserve-3d]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-[20px] font-extrabold tracking-tight">
              Formezy
            </span>
          </motion.div>
        </div>
      </motion.div>

      {orbit.map((o, i) => {
        const { Icon } = o;
        return (
          <motion.div
            key={o.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [0, -10, 0] }}
            viewport={viewportOnce}
            transition={{
              opacity: { duration: 0.5, delay: 0.1 * i },
              y: { ...floatTransition, delay: i * 0.3 },
            }}
            style={{ left: o.x, top: o.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex flex-col items-center gap-1.5">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card-hover"
                style={{ color: o.color }}
              >
                <Icon size={22} />
              </span>
              <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-ink shadow-card">
                {o.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
