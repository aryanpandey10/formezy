"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText, Send } from "lucide-react";

export default function AiChatMock() {
  return (
    <div className="rounded-2xl border border-surface-border bg-white p-4 shadow-card-hover">
      <div className="flex items-center justify-between border-b border-surface-border pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-cta text-white">
            <Sparkles size={16} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-ink">AskEzy</span>
            <span className="text-[10px] text-ink-muted">
              AI Assistant · Online
            </span>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
          Beta
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-start gap-2.5">
          <span className="h-7 w-7 shrink-0 rounded-full bg-purple-200" />
          <div className="rounded-2xl rounded-tl-md bg-purple-50 px-3 py-2 text-[12px] text-ink">
            Summarize last quarter&apos;s vendor performance.
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-2.5"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-cta text-white">
            <Sparkles size={12} />
          </span>
          <div className="flex max-w-[85%] flex-col gap-2 rounded-2xl rounded-tl-md bg-white px-3 py-2.5 text-[12px] leading-relaxed text-ink ring-1 ring-surface-border">
            <p>
              Across 142 vendors,{" "}
              <span className="font-semibold text-purple-primary">94% SLA</span>{" "}
              adherence. Top performers:{" "}
              <span className="font-semibold">Acme, Globex</span>. 3 vendors
              flagged for delays.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Q3-Vendors.pdf", "SLA-Report.xlsx"].map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-medium text-purple-primary"
                >
                  <FileText size={10} /> {f}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-surface-border bg-surface-muted p-1 pl-3">
        <input
          disabled
          placeholder="Ask anything about your workflows…"
          className="w-full bg-transparent text-[12px] text-ink-secondary outline-none"
        />
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-primary text-white">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
