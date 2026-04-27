"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Users,
  Wallet,
  MapPin,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/cn";

type Card = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  style: string;
  delay: number;
  extra?: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "AI Powered",
    subtitle: "Smart insights in seconds",
    icon: <Bot size={18} />,
    accent: "bg-purple-50 text-purple-primary",
    style: "top-[6%] left-[6%] w-[220px]",
    delay: 0,
    extra: <Sparkline color="#6C63FF" />,
  },
  {
    title: "Vendor Management",
    subtitle: "124 active vendors",
    icon: <Users size={18} />,
    accent: "bg-cyan-50 text-cyan-600",
    style: "top-[2%] right-[0%] w-[220px]",
    delay: 0.4,
    extra: (
      <div className="flex -space-x-2">
        {["#6C63FF", "#A78BFA", "#06B6D4", "#F59E0B"].map((c, i) => (
          <span
            key={i}
            className="h-6 w-6 rounded-full border-2 border-white"
            style={{ background: c }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Automated Commission",
    subtitle: "$38,240 this month",
    icon: <Wallet size={18} />,
    accent: "bg-amber-50 text-amber-600",
    style: "top-[42%] left-[-2%] w-[240px]",
    delay: 0.8,
    extra: (
      <div className="flex items-center gap-1.5 text-[12px] font-medium text-emerald-600">
        <TrendingUp size={12} /> +12.4% vs last month
      </div>
    ),
  },
  {
    title: "Location Tracking",
    subtitle: "Live · 38 field agents",
    icon: <MapPin size={18} />,
    accent: "bg-rose-50 text-rose-500",
    style: "bottom-[4%] right-[4%] w-[230px]",
    delay: 1.2,
    extra: (
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[12px] font-medium text-ink-secondary">
          38 online now
        </span>
      </div>
    ),
  },
  {
    title: "Approval Flow",
    subtitle: "3 pending · 12 approved",
    icon: <CheckCircle2 size={18} />,
    accent: "bg-emerald-50 text-emerald-600",
    style: "bottom-[30%] right-[35%] w-[200px]",
    delay: 1.6,
  },
];

export default function FloatingHeroCards({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-[520px] w-full", className)}>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-purple"
      />
      <div
        aria-hidden
        className="absolute inset-x-10 top-10 h-[380px] rounded-[32px] border border-purple-100/70 bg-white/30 backdrop-blur-sm"
      />
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.05 * i },
            y: {
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: c.delay,
            },
          }}
          className={cn(
            "absolute rounded-2xl border border-white/80 bg-white/95 p-4 shadow-card",
            c.style,
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl",
                c.accent,
              )}
            >
              {c.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-ink">
                {c.title}
              </span>
              <span className="text-[11px] text-ink-secondary">
                {c.subtitle}
              </span>
            </div>
          </div>
          {c.extra ? <div className="mt-3">{c.extra}</div> : null}
        </motion.div>
      ))}
    </div>
  );
}

function Sparkline({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 180 40" className="h-10 w-full">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 30 L20 24 L40 28 L60 16 L80 22 L100 10 L120 18 L140 8 L160 14 L180 4 L180 40 L0 40 Z"
        fill="url(#sparkFill)"
      />
      <path
        d="M0 30 L20 24 L40 28 L60 16 L80 22 L100 10 L120 18 L140 8 L160 14 L180 4"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
