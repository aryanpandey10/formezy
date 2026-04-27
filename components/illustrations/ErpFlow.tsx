"use client";

import { motion } from "framer-motion";
import {
  Factory,
  LineChart,
  Users,
  Truck,
  Wallet,
  Box,
  FileText,
  BarChart3,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { viewportOnce, fadeUp, staggerContainer } from "@/lib/animations";

const left = [
  { Icon: Factory, label: "Manufacturing", color: "#6C63FF" },
  { Icon: LineChart, label: "Analytics", color: "#06B6D4" },
  { Icon: Users, label: "HR", color: "#F59E0B" },
  { Icon: Truck, label: "Supply Chain", color: "#10B981" },
  { Icon: Wallet, label: "Finance", color: "#EF4444" },
  { Icon: Box, label: "Inventory", color: "#A78BFA" },
];

const right = [
  { Icon: FileText, label: "Reports", color: "#6C63FF" },
  { Icon: BarChart3, label: "KPIs", color: "#F59E0B" },
  { Icon: Smartphone, label: "Mobile", color: "#06B6D4" },
  { Icon: ShieldCheck, label: "Governance", color: "#10B981" },
  { Icon: CheckCircle2, label: "Approvals", color: "#A78BFA" },
  { Icon: MessageSquare, label: "Comms", color: "#EF4444" },
];

export default function ErpFlow() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-white p-6 md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3"
        >
          {left.map((l) => {
            const { Icon } = l;
            return (
              <motion.div
                key={l.label}
                variants={fadeUp}
                className="flex w-[132px] items-center gap-2 rounded-2xl border border-surface-border bg-white p-2.5 shadow-card"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${l.color}18`, color: l.color }}
                >
                  <Icon size={16} />
                </span>
                <span className="text-[11px] font-semibold text-ink">
                  {l.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative h-56 md:h-72">
          <svg
            viewBox="0 0 320 260"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="erpBlob" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
              <linearGradient id="erpBlob2" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#6C63FF" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 20 130 C 60 60, 140 40, 180 130 S 280 180, 300 130"
              stroke="url(#erpBlob)"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.9"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
            <motion.path
              d="M 20 150 C 80 200, 160 60, 220 160 S 280 180, 300 150"
              stroke="url(#erpBlob2)"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.7"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 20 110 C 100 60, 180 190, 260 120 S 300 110, 300 110"
              stroke="url(#erpBlob)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-cta text-white shadow-cta">
              <span className="text-[13px] font-extrabold">ERP</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3"
        >
          {right.map((r) => {
            const { Icon } = r;
            return (
              <motion.div
                key={r.label}
                variants={fadeUp}
                className="flex w-[132px] items-center gap-2 rounded-2xl border border-surface-border bg-white p-2.5 shadow-card"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${r.color}18`, color: r.color }}
                >
                  <Icon size={16} />
                </span>
                <span className="text-[11px] font-semibold text-ink">
                  {r.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
