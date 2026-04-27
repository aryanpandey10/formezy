"use client";

import { motion } from "framer-motion";
import { Bell, Home, CheckCircle2, BarChart3 } from "lucide-react";

export default function PhoneMock() {
  return (
    <div className="relative mx-auto aspect-[320/640] w-full max-w-[280px]">
      <div className="absolute inset-0 rounded-[40px] border-[10px] border-ink bg-ink shadow-[0_30px_60px_rgba(15,15,26,0.25)]">
        <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
        <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-gradient-to-br from-purple-50 via-white to-cyan-50">
          <div className="flex items-center justify-between px-5 pb-1 pt-6 text-[11px] font-semibold text-ink">
            <span>9:41</span>
            <Bell size={12} />
          </div>
          <div className="px-5 pt-3">
            <span className="text-[11px] text-ink-muted">Good morning,</span>
            <h4 className="text-[18px] font-extrabold text-ink">Ravi Mehta</h4>
          </div>
          <div className="mx-5 mt-4 rounded-2xl bg-white p-3 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-ink-secondary">
                Pending Approvals
              </span>
              <span className="rounded-full bg-purple-primary px-2 py-0.5 text-[9px] font-bold text-white">
                4 new
              </span>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {[
                { t: "PO-1894 · ₹1.2L", s: "Vendor: Acme" },
                { t: "Leave request · Sneha", s: "3 days · Jan 22" },
                { t: "Invoice #4491", s: "Due tomorrow" },
              ].map((r) => (
                <div
                  key={r.t}
                  className="flex items-center gap-2 rounded-lg border border-surface-border p-2"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-50 text-purple-primary">
                    <CheckCircle2 size={12} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-ink">
                      {r.t}
                    </span>
                    <span className="text-[9px] text-ink-muted">{r.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-5 mt-3 flex items-center justify-between rounded-2xl bg-purple-cta p-3 text-white shadow-cta">
            <div className="flex items-center gap-2">
              <BarChart3 size={16} />
              <span className="text-[11px] font-semibold">
                Weekly automations
              </span>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[16px] font-extrabold"
            >
              1,204
            </motion.span>
          </div>

          <div className="absolute inset-x-5 bottom-6 flex items-center justify-around rounded-full bg-ink px-6 py-3">
            {[Home, CheckCircle2, BarChart3, Bell].map((Icon, i) => (
              <Icon
                key={i}
                size={16}
                className={i === 0 ? "text-purple-light" : "text-white/60"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
