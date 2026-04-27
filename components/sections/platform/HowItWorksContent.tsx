"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

/* ─────────────────────────────────────────────
   Shared image placeholder
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
      <div className="flex flex-col items-center gap-2 p-6 text-center">
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
        <p className="font-sora text-[12px] font-medium text-[#6366A8]/80">{label}</p>
        <p className="font-sora text-[11px] text-[#6366A8]/50">{w} × {h}</p>
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
function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-0 pt-8 md:pt-12 lg:pt-16">
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
                How It Works
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              From Idea to{" "}
              <G>Execution, Seamlessly</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[520px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Formezy turns process thinking into working systems — in weeks,
              not quarters. Here&apos;s the five-step journey every customer
              takes, from mapping workflows to scaling with confidence.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — hero illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <ImgPlaceholder
              w={800}
              h={560}
              label="Hero — workflow to execution diagram with dashboard"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — How Formezy Works (4 step cards)
───────────────────────────────────────────── */
const stepCards = [
  {
    num: "01",
    title: "Define Your Workflows",
    desc: "Map how work actually flows across your teams — who does what, when, and what data moves between them.",
    color: "#6C60E8",
    imgW: 280,
    imgH: 200,
    imgLabel: "Workflow mapping illustration",
  },
  {
    num: "02",
    title: "Build with Logic Builder",
    desc: "Translate workflows into modules, rules and approvals using a visual, no-code logic builder.",
    color: "#A78BFA",
    imgW: 280,
    imgH: 200,
    imgLabel: "Logic builder UI illustration",
  },
  {
    num: "03",
    title: "Automate Processes",
    desc: "Let Formezy handle approvals, handoffs and reminders so execution is consistent and fast.",
    color: "#708FF4",
    imgW: 280,
    imgH: 200,
    imgLabel: "Automation flow illustration",
  },
  {
    num: "04",
    title: "Scale with Confidence",
    desc: "Add teams, modules and geographies without rebuilding from scratch — Formezy grows with you.",
    color: "#06B6D4",
    imgW: 280,
    imgH: 200,
    imgLabel: "Scale & deploy illustration",
  },
];

function HowItWorksStepsSection() {
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
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            How <G>Formezy Works</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            The same structured journey behind every successful Formezy rollout.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stepCards.map((s) => (
            <motion.article
              key={s.num}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-purple-100/60 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              {/* Image area */}
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-50/80 to-blue-50/60 px-6 pt-6">
                <ImgPlaceholder
                  w={s.imgW}
                  h={s.imgH}
                  label={s.imgLabel}
                  className="rounded-xl border-0 bg-transparent"
                />
              </div>

              {/* Text area */}
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center gap-3">
                  <span
                    className="font-sora text-[11px] font-bold tracking-widest"
                    style={{ color: s.color }}
                  >
                    STEP {s.num}
                  </span>
                </div>
                <h3 className="font-sora text-[17px] font-bold text-[#2C0E3A]">
                  {s.title}
                </h3>
                <p className="font-sora text-[13px] leading-[22px] text-[#6366A8]">
                  {s.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — Define Your Workflows (deep dive)
───────────────────────────────────────────── */
const workflowBullets = [
  "Visual canvas to map any business process",
  "Role-based ownership for every step",
  "Clear data flows between teams and systems",
];

function DefineWorkflowsSection() {
  return (
    <section className="section">
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImgPlaceholder
              w={620}
              h={500}
              label="Step 01 — workflow mapping canvas screenshot"
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Step 01
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[44px]"
              style={{ lineHeight: "1.15" }}
            >
              Define Your <G>Workflows</G>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Start by mapping who does what, when, and what data moves between
              them. Formezy gives you a visual canvas to design workflows before
              a single form is built — so every team is aligned from day one.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-[#6C60E8] pl-4 font-sora text-[15px] italic leading-[1.7] text-[#6366A8]"
            >
              Clear workflows eliminate confusion before it starts.
            </motion.blockquote>

            <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
              {workflowBullets.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="font-sora text-[14px] font-medium text-[#2C0E3A]">
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — Build with Logic Builder (deep dive)
───────────────────────────────────────────── */
function LogicBuilderSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col gap-5"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              Step 02
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="max-w-2xl font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[44px]"
            style={{ lineHeight: "1.15" }}
          >
            Build with <G>Logic Builder</G>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-[580px] font-sora text-[16px] italic leading-[28px] text-[#6366A8]"
          >
            Your processes don&apos;t just get defined — they become
            system-driven and scalable.
          </motion.p>
        </motion.div>

        {/* Large logic builder image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-[24px] border border-purple-100 bg-gradient-to-br from-purple-50/60 to-blue-50/40 p-4 shadow-card-hover md:p-6"
        >
          <ImgPlaceholder
            w={1200}
            h={520}
            label="Step 02 — Logic Builder UI: node-based visual workflow editor"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — Automate Processes (deep dive)
───────────────────────────────────────────── */
function AutomateSection() {
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
              Step 03
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            Automate <G>Processes</G>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-[600px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Every approval, every handoff, every reminder — done for you. Let
            Formezy run the repetitive steps so your team focuses on what matters.
          </motion.p>

          {/* Quote with large quotation marks */}
          <motion.div
            variants={fadeUp}
            className="relative mt-2 max-w-[640px] rounded-2xl border border-purple-100/60 bg-white/80 px-10 py-8 shadow-card backdrop-blur-sm"
          >
            <Quote
              size={32}
              className="absolute left-5 top-5 text-[#6C60E8]/20"
              fill="currentColor"
            />
            <Quote
              size={32}
              className="absolute bottom-5 right-5 rotate-180 text-[#6C60E8]/20"
              fill="currentColor"
            />
            <p className="font-sora text-[18px] font-medium italic leading-[1.7] text-[#2C0E3A] md:text-[20px]">
              Execution becomes consistent, predictable, and faster.
            </p>
          </motion.div>
        </motion.div>

        {/* Full-width isometric illustration */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <ImgPlaceholder
            w={1300}
            h={540}
            label="Step 03 — Isometric automation workflow illustration (road/journey metaphor)"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — Integrate + Scale (2-col deep dive)
───────────────────────────────────────────── */
function IntegrateAndScaleSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Integrate Systems */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 overflow-hidden rounded-[24px] border border-purple-100 bg-white shadow-card"
          >
            <div className="flex flex-col gap-4 p-8 pb-0">
              <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Step 04
              </span>
              <h3
                className="font-sora text-[28px] font-bold text-[#2C0E3A]"
                style={{ lineHeight: "1.2" }}
              >
                Integrate <G>Systems</G>
              </h3>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                Connect your ERP, CRM, messaging and data stack so Formezy
                becomes the spine, not another silo.
              </p>
              <p className="font-sora text-[14px] italic leading-[24px] text-[#6366A8]/80">
                A platform that plays with everything you already depend on.
              </p>
            </div>
            <ImgPlaceholder
              w={580}
              h={300}
              label="Step 04 — Integration ecosystem illustration"
              className="m-6 mt-2 rounded-xl border-0"
            />
          </motion.div>

          {/* Scale with Confidence */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-5 overflow-hidden rounded-[24px] border border-purple-100 bg-white shadow-card"
          >
            <div className="flex flex-col gap-4 p-8 pb-0">
              <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Step 05
              </span>
              <h3
                className="font-sora text-[28px] font-bold text-[#2C0E3A]"
                style={{ lineHeight: "1.2" }}
              >
                Scale with <G>Confidence</G>
              </h3>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                Add new modules, teams and geographies without rebuilding from
                scratch — Formezy flexes with you at every stage.
              </p>
              <p className="font-sora text-[14px] italic leading-[24px] text-[#6366A8]/80">
                Scale operations effortlessly as your business grows.
              </p>
            </div>
            <ImgPlaceholder
              w={580}
              h={300}
              label="Step 05 — Scale / growth trajectory illustration"
              className="m-6 mt-2 rounded-xl border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 7 — CTA: Ready to Build Smarter Workflows?
───────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[30px] border border-purple-100 bg-white/90 shadow-[0_8px_48px_rgba(108,96,232,0.12)] backdrop-blur-sm"
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[15%] top-0 h-[200px] rounded-full bg-[#6C60E8]/8 blur-[60px]"
          />

          <div className="grid items-center lg:grid-cols-2">
            {/* Text block */}
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
                Ready to Build <G>Smarter Workflows?</G>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-[440px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Let&apos;s turn one of your trickiest processes into a working
                Formezy system — live, in a 30-minute session.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Button href="#demo" size="lg" className="rounded-[10px]">
                  Contact Us <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 px-8 pt-10 lg:h-full lg:min-h-[360px]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(108,96,232,0.12)_0%,transparent_70%)]"
              />
              <ImgPlaceholder
                w={480}
                h={360}
                label="CTA — Formezy workflow network illustration"
                className="relative z-10 max-w-[380px]"
              />
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
export default function HowItWorksContent() {
  return (
    <>
      <HeroSection />
      <HowItWorksStepsSection />
      <DefineWorkflowsSection />
      <LogicBuilderSection />
      <AutomateSection />
      <IntegrateAndScaleSection />
      <CtaSection />
    </>
  );
}
