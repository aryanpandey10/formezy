"use client";

import { motion } from "framer-motion";
import { Shield, Lock, KeyRound, CheckCircle2 } from "lucide-react";
import { viewportOnce, pathDraw } from "@/lib/animations";

export default function SecurityShield() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 420 420" className="absolute inset-0 h-full w-full">
        {[140, 170, 200].map((r, i) => (
          <motion.circle
            key={r}
            cx="210"
            cy="210"
            r={r}
            fill="none"
            stroke="#A78BFA"
            strokeOpacity={0.4 - i * 0.1}
            strokeDasharray="3 7"
            strokeWidth="1"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-purple-cta text-white shadow-cta"
        >
          <Shield size={56} />
        </motion.div>
      </div>

      {[
        { Icon: Lock, x: "14%", y: "22%", color: "#6C63FF" },
        { Icon: KeyRound, x: "80%", y: "30%", color: "#F59E0B" },
        { Icon: CheckCircle2, x: "18%", y: "78%", color: "#10B981" },
        { Icon: Shield, x: "78%", y: "78%", color: "#06B6D4" },
      ].map(({ Icon, x, y, color }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3 + i * 0.1 }}
          style={{ left: x, top: y }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-card"
            style={{ color }}
          >
            <Icon size={20} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
