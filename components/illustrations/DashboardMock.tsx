"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = { className?: string };

export default function DashboardMock({ className }: Props) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl bg-gradient-to-br from-purple-50 via-white to-cyan-50 p-3",
        className,
      )}
    >
      <aside className="hidden w-28 flex-col gap-1.5 rounded-lg bg-white/70 p-2 md:flex">
        {["Home", "Workflows", "Approvals", "Reports", "Team"].map((l, i) => (
          <div
            key={l}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] font-medium",
              i === 1
                ? "bg-purple-primary text-white"
                : "text-ink-secondary hover:bg-purple-50",
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
            {l}
          </div>
        ))}
      </aside>

      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Workflows", value: "248", accent: "#6C63FF" },
            { label: "Approvals Today", value: "36", accent: "#06B6D4" },
            { label: "Automations", value: "1.2K", accent: "#F59E0B" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg bg-white p-2.5 shadow-[0_2px_8px_rgba(15,15,26,0.04)]"
            >
              <div className="text-[9px] text-ink-muted">{m.label}</div>
              <div
                className="mt-1 text-[18px] font-extrabold"
                style={{ color: m.accent }}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-white p-3 shadow-[0_2px_8px_rgba(15,15,26,0.04)]">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-ink">
              Workflow volume
            </span>
            <span className="text-[9px] text-ink-muted">Last 14 days</span>
          </div>
          <svg viewBox="0 0 300 80" className="h-16 w-full">
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 60 L30 52 L60 58 L90 40 L120 48 L150 28 L180 34 L210 22 L240 30 L270 16 L300 10 L300 80 L0 80 Z"
              fill="url(#areaFill)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <motion.path
              d="M0 60 L30 52 L60 58 L90 40 L120 48 L150 28 L180 34 L210 22 L240 30 L270 16 L300 10"
              fill="none"
              stroke="#6C63FF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          {[
            { title: "PO-1892 approved", by: "R. Mehta" },
            { title: "Invoice #4491 flagged", by: "AI Audit" },
          ].map((r) => (
            <div
              key={r.title}
              className="flex items-center justify-between rounded-lg bg-white p-2.5 text-[10px] shadow-[0_2px_8px_rgba(15,15,26,0.04)]"
            >
              <span className="font-medium text-ink">{r.title}</span>
              <span className="text-ink-muted">{r.by}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
