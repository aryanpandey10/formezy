"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  "No-code form & workflow builder",
  "Real-time approvals & automation",
  "ERP, CRM, HR — all in one platform",
];

const stats = [
  { value: "500+", label: "Enterprises" },
  { value: "10k+", label: "Workflows" },
  { value: "99.9%", label: "Uptime" },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-0 pt-4 md:pt-4 lg:pt-4">

      <div className="container-app relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-start gap-6 pb-8 lg:pb-20"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-pill border border-purple-200 bg-white/80 px-3.5 py-1.5 text-[12px] font-semibold text-purple-primary shadow-card backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-primary" />
                Enterprise Application Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[36px] font-bold leading-[1.15] tracking-tight text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Build Your EAP{" "}
              <span
                className="bg-clip-text"
                style={{
                  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Without Complex Development
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[500px] font-sora text-[16px] leading-[24px] text-[#6366A8]"
            >
              Formezy unifies workflows, data, automation and intelligence on a
              single platform — so every team operates as one, with clarity and
              control.
            </motion.p>

            <motion.ul variants={fadeUp} className="flex flex-col gap-2.5">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 font-sora text-[14px] text-[#2C0E3A]/70"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#6C63FF] text-white">
                    <Check size={10} />
                  </span>
                  {f}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Button
                href="#demo"
                size="lg"
                className="w-[176px] rounded-[10px]"
              >
                Book Demo <ArrowRight size={16} />
              </Button>
              <Button
                href="/platform/overview"
                variant="secondary"
                size="lg"
                className="rounded-[10px]"
              >
                Explore Platform
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6 border-t border-purple-100 pt-6 md:gap-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="font-sora text-[26px] font-bold text-[#2C0E3A]">
                    {s.value}
                  </span>
                  <span className="font-sora text-[12px] text-[#6366A8]">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative flex items-end justify-center"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[10%] rounded-full bg-[#A78BFA]/15 blur-2xl"
            />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full"
            >
              <Image
                src="/images/HeroHome.svg"
                alt="Formezy platform overview"
                width={789}
                height={611}
                priority
                className="h-auto w-full"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-[5%] z-0"
            >
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full opacity-20"
                aria-hidden
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#6C63FF"
                  strokeWidth="0.5"
                  strokeDasharray="3 4"
                  fill="none"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
