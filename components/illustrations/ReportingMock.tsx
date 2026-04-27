"use client";

import { motion } from "framer-motion";

const bars = [
  { label: "Mon", val: 40 },
  { label: "Tue", val: 65 },
  { label: "Wed", val: 52 },
  { label: "Thu", val: 78 },
  { label: "Fri", val: 92 },
  { label: "Sat", val: 48 },
  { label: "Sun", val: 34 },
];

export default function ReportingMock() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-cyan-50 p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {[
          { l: "Monthly Revenue", v: "$2.48M", d: "+12.4%", c: "#6C63FF" },
          { l: "Approvals Cycle", v: "1.8d", d: "-34%", c: "#06B6D4" },
          { l: "Active Users", v: "4,219", d: "+8.1%", c: "#F59E0B" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-xl bg-white p-4 shadow-[0_2px_10px_rgba(15,15,26,0.04)]"
          >
            <div className="text-[11px] text-ink-muted">{m.l}</div>
            <div
              className="mt-1 text-[22px] font-extrabold"
              style={{ color: m.c }}
            >
              {m.v}
            </div>
            <div className="text-[11px] font-semibold text-emerald-600">
              {m.d}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white p-5 shadow-[0_2px_10px_rgba(15,15,26,0.04)]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-ink">
            Workflow runs this week
          </span>
          <span className="text-[11px] text-ink-muted">Live</span>
        </div>
        <div className="flex h-36 items-end gap-3">
          {bars.map((b, i) => (
            <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${b.val}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="w-full rounded-t-md"
                style={{
                  background:
                    "linear-gradient(180deg, #A78BFA 0%, #6C63FF 100%)",
                }}
              />
              <span className="text-[10px] text-ink-muted">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
