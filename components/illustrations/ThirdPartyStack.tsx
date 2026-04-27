"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  BarChart3,
  FileText,
  Bell,
  Video,
} from "lucide-react";
import { viewportOnce, floatTransition } from "@/lib/animations";

const items = [
  { Icon: MessageSquare, label: "Chat", color: "#6C63FF", x: "10%", y: "20%", size: 70 },
  { Icon: Calendar, label: "Calendar", color: "#06B6D4", x: "70%", y: "8%", size: 64 },
  { Icon: BarChart3, label: "Analytics", color: "#F59E0B", x: "80%", y: "55%", size: 72 },
  { Icon: FileText, label: "Docs", color: "#10B981", x: "6%", y: "62%", size: 64 },
  { Icon: Bell, label: "Alerts", color: "#EF4444", x: "42%", y: "80%", size: 62 },
  { Icon: Video, label: "Video", color: "#A78BFA", x: "54%", y: "14%", size: 56 },
];

export default function ThirdPartyStack() {
  return (
    <div className="relative aspect-square w-full">
      <div
        aria-hidden
        className="absolute inset-[10%] rounded-full bg-radial-purple blur-2xl"
      />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="streamA" x1="0" x2="1">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="streamB" x1="0" x2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#6C63FF" />
          </linearGradient>
        </defs>
        {[
          "M 10 30 Q 50 70 90 40",
          "M 10 70 Q 50 30 90 65",
          "M 50 10 Q 30 50 50 90",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={i % 2 === 0 ? "url(#streamA)" : "url(#streamB)"}
            strokeOpacity="0.5"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, delay: i * 0.15 }}
          />
        ))}
      </svg>

      {items.map((n, i) => {
        const { Icon } = n;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [0, -10, 0] }}
            viewport={viewportOnce}
            transition={{
              opacity: { duration: 0.5, delay: 0.05 * i },
              y: { ...floatTransition, delay: 0.25 * i },
            }}
            style={{
              left: n.x,
              top: n.y,
              width: n.size,
              height: n.size,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[22px] bg-white p-3 shadow-card-hover"
          >
            <div
              className="flex h-full w-full items-center justify-center rounded-[14px]"
              style={{
                background: `linear-gradient(135deg, ${n.color}22, ${n.color}08)`,
                color: n.color,
              }}
            >
              <Icon size={n.size * 0.4} />
            </div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-cta text-white shadow-cta">
          <span className="text-[14px] font-extrabold">Formezy</span>
        </div>
      </motion.div>
    </div>
  );
}
