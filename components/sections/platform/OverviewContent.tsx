"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { overviewWebp } from "@/lib/webp-assets";

/* ─────────────────────────────────────────────
   Reusable image placeholder (user will swap
   these out with real assets later).
───────────────────────────────────────────── */
function ImgPlaceholder({
  w,
  h,
  label,
  className = "",
}: {
  w: number;
  h: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-purple-200 bg-gradient-to-br from-purple-50/80 to-blue-50/80 ${className}`}
      style={{ aspectRatio: `${w}/${h}`, width: "100%" }}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 shadow-sm">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6366A8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <p className="font-sora text-[12px] font-medium text-[#6366A8]/70">
          {label}
        </p>
        <p className="font-sora text-[11px] text-[#6366A8]/50">
          {w} × {h}
        </p>
      </div>
    </div>
  );
}

/* ── Gradient span helper ── */
const G = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </span>
);

/* ─────────────────────────────────────────────
   Section 1 — Hero
───────────────────────────────────────────── */
const heroStats = [
  { value: "10×", label: "Faster deployment" },
  { value: "80%", label: "Less manual work" },
  { value: "1 platform", label: "For every team" },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0 md:pt-12 lg:pt-16">
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Platform Overview
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Run Your Business on{" "}
              <G>One Intelligent Platform</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[520px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Formezy is the Enterprise Application Platform that unifies every
              input, every team and every workflow — so the right information
              reaches the right people, automatically.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
              <Button
                href="/platform/how-it-works"
                size="lg"
                variant="ghost"
                className="rounded-[10px]"
              >
                See How It Works <ChevronRight size={16} />
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-wrap gap-8"
            >
              {heroStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="font-sora text-[28px] font-bold text-[#2C0E3A]">
                    {s.value}
                  </span>
                  <span className="font-sora text-[13px] text-[#6366A8]">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "800/560" }}>
              <Image
                src={overviewWebp.hero}
                alt="Formezy platform overview"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — What is an EAP
───────────────────────────────────────────── */
function WhatIsEapSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              EAP 101
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[52px]"
            style={{ lineHeight: "1.15" }}
          >
            What is an{" "}
            <G>Enterprise Application Platform</G>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[680px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            An EAP is a unified foundation that lets you build, connect and
            operate every internal system your business needs — on a single,
            governed platform. Instead of managing scattered tools, every team
            works within one intelligent ecosystem.
          </motion.p>
        </motion.div>

        {/* Hub diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl" style={{ aspectRatio: "1200/560" }}>
            <Image
              src={overviewWebp.enterpriseApplication}
              alt="Enterprise Application Platform — connected ecosystem"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — Why Businesses Need an EAP Today
───────────────────────────────────────────── */
const eapReasons = [
  {
    title: "Connect teams across departments",
    desc: "Break down information silos and give every team a shared, real-time view of the business.",
  },
  {
    title: "Structure workflows across operations",
    desc: "Replace ad-hoc processes with governed, automated workflows that scale with your growth.",
  },
  {
    title: "Replace brittle spreadsheet glue",
    desc: "Move from fragile, error-prone spreadsheets to structured data systems that never go stale.",
  },
  {
    title: "Enable automation and AI on clean data",
    desc: "Unlock the power of AI and automation only when your data is unified, accurate and ready.",
  },
];

function WhyEapSection() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[52px]"
            style={{ lineHeight: "1.15" }}
          >
            Why Businesses{" "}
            <G>Need an EAP Today</G>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[560px] font-sora text-[16px] italic leading-[28px] text-[#6366A8]"
          >
            It&apos;s not about adding more tools — it&apos;s about bringing
            everything together.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "680/480" }}>
              <Image
                src={overviewWebp.needEapToday}
                alt="Why businesses need an Enterprise Application Platform today"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right — checklist */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-4"
          >
            {eapReasons.map((r) => (
              <motion.li
                key={r.title}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-purple-100/60 bg-white/80 p-5 shadow-card backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-sora text-[15px] font-semibold text-[#2C0E3A]">
                    {r.title}
                  </span>
                  <span className="font-sora text-[13px] leading-[22px] text-[#6366A8]">
                    {r.desc}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — Internal Systems VS External Apps
───────────────────────────────────────────── */
function SystemsVsAppsSection() {
  return (
    <section
      className="section bg-white/90 backdrop-blur-sm"
      aria-labelledby="internal-vs-external-heading"
    >
      <div className="container-app">
        <h2
          id="internal-vs-external-heading"
          className="sr-only"
        >
          Internal systems versus external apps
        </h2>

        {/* Hub illustration only */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl" style={{ aspectRatio: "1200/700" }}>
            <Image
              src={overviewWebp.internalVsExternal}
              alt="Internal systems vs external apps — Formezy unifies them"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — From Spreadsheets to Structured Systems
───────────────────────────────────────────── */
function SpreadsheetToSystemsSection() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              The Shift
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[52px]"
            style={{ lineHeight: "1.15" }}
          >
            From Spreadsheets to{" "}
            <G>Structured Systems</G>
          </motion.h2>

        </motion.div>

        {/* Single full-width image */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl" style={{ aspectRatio: "1200/700" }}>
            <Image
              src={overviewWebp.fromSpreadsheet}
              alt="From spreadsheets to structured Formezy systems"
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — CTA: Ready to Simplify
───────────────────────────────────────────── */
function ReadySection() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[30px] border border-purple-100 bg-white/90 shadow-[0_8px_48px_rgba(108,96,232,0.12)] backdrop-blur-sm"
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col items-start gap-6 p-10 md:p-14 lg:p-16"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[34px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]"
              >
                Ready to Simplify and{" "}
                <G>Scale Your Operations?</G>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-[440px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Book a 30-minute walkthrough — we&apos;ll map your core
                workflows and show you a working system before we even talk
                pricing.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Button href="#demo" size="lg" className="rounded-[10px]">
                  Book a Demo <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Device image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 px-8 pt-10 lg:h-full lg:min-h-[380px]"
            >
              {/* Ambient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(108,96,232,0.12)_0%,transparent_70%)]"
              />
              <div className="relative z-10 w-full max-w-[380px] overflow-hidden rounded-2xl" style={{ aspectRatio: "480/360" }}>
                <Image
                  src={overviewWebp.readyToSimplify}
                  alt="Formezy — ready to simplify and scale operations"
                  fill
                  sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 40vw, 380px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Root export
───────────────────────────────────────────── */
export default function OverviewContent() {
  return (
    <>
      <HeroSection />
      <WhatIsEapSection />
      <WhyEapSection />
      <SystemsVsAppsSection />
      <SpreadsheetToSystemsSection />
      <ReadySection />
    </>
  );
}
