"use client";

import { motion } from "framer-motion";
import { Check, Clock, User } from "lucide-react";
import { viewportOnce, fadeUp, staggerContainer } from "@/lib/animations";

const people = [
  { name: "Sneha K.", role: "Requester", state: "done", color: "#10B981" },
  { name: "Ravi M.", role: "Manager", state: "done", color: "#10B981" },
  { name: "Dev P.", role: "Finance", state: "pending", color: "#F59E0B" },
  { name: "CFO", role: "Approver", state: "queued", color: "#9CA3AF" },
];

export default function ApprovalFlow() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="flex flex-col gap-4 rounded-2xl border border-surface-border bg-white p-5 shadow-card"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-ink">
          Purchase Order #PO-1894
        </span>
        <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-bold text-purple-primary">
          Level 3 of 4
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white"
              style={{ borderColor: p.color, color: p.color }}
            >
              <User size={16} />
              {i < people.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-full h-4 w-0.5"
                  style={{ background: p.color }}
                />
              )}
            </span>
            <div className="flex flex-1 flex-col leading-tight">
              <span className="text-[13px] font-semibold text-ink">
                {p.name}
              </span>
              <span className="text-[11px] text-ink-muted">{p.role}</span>
            </div>
            <span
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold"
              style={{
                background:
                  p.state === "done"
                    ? "#ECFDF5"
                    : p.state === "pending"
                      ? "#FFFBEB"
                      : "#F3F4F6",
                color: p.color,
              }}
            >
              {p.state === "done" ? (
                <Check size={12} />
              ) : p.state === "pending" ? (
                <Clock size={12} />
              ) : null}
              {p.state === "done"
                ? "Approved"
                : p.state === "pending"
                  ? "Reviewing"
                  : "Queued"}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
