"use client";

import { motion } from "framer-motion";
import { FileWarning, Sparkles } from "lucide-react";
import { pathDraw, viewportOnce } from "@/lib/animations";

export default function LegacyToIntelligent() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <svg
        viewBox="0 0 960 360"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6C63FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <motion.path
          d="M180 180 Q320 120 420 180"
          stroke="url(#flowLine)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />
        <motion.path
          d="M540 180 Q660 240 780 180"
          stroke="url(#flowLine)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 grid grid-cols-3 items-center px-2 md:px-0">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-surface-border bg-surface-muted text-ink-muted shadow-sm">
            <FileWarning size={36} />
          </div>
          <span className="text-[13px] font-semibold text-ink-secondary">
            Legacy Systems
          </span>
          <span className="text-[11px] text-ink-muted">
            Spreadsheets · Silos
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-40 w-64 items-center justify-center"
          >
            <div className="absolute inset-0 rounded-2xl bg-radial-purple blur-2xl" />
            <div className="relative h-36 w-60 rounded-[14px] border border-purple-200 bg-white p-3 shadow-card-hover">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="mt-3 flex h-6 w-full items-center rounded bg-purple-50 px-2 text-[9px] font-medium text-purple-primary">
                formezy.io/dashboard
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="h-2.5 w-2/3 rounded bg-purple-200" />
                <div className="h-2 w-full rounded bg-surface-muted" />
                <div className="h-2 w-5/6 rounded bg-surface-muted" />
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  <div className="h-8 rounded bg-purple-100" />
                  <div className="h-8 rounded bg-cyan-100" />
                  <div className="h-8 rounded bg-amber-100" />
                </div>
              </div>
            </div>
          </motion.div>
          <span className="text-[13px] font-semibold text-purple-primary">
            Formezy Platform
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-purple-200 bg-purple-cta text-white shadow-cta">
            <Sparkles size={36} />
          </div>
          <span className="text-[13px] font-semibold text-ink">
            Intelligent Systems
          </span>
          <span className="text-[11px] text-ink-muted">
            Connected · Automated
          </span>
        </div>
      </div>
    </div>
  );
}
