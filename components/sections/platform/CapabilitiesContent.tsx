"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

/* ─────────────────────────────────────────────
   Shared helpers
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
            <Check size={12} strokeWidth={2.5} />
          </span>
          <span className="font-sora text-[14px] leading-[22px] text-[#6366A8]">{b}</span>
        </li>
      ))}
    </ul>
  );
}

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
                Capabilities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[30px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[46px] lg:text-[56px]"
            >
              Capabilities Built for{" "}
              <G>Modern Business Operations</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[520px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Everything operations teams need to build, govern and scale
              internal systems — out of the box, on one platform.
            </motion.p>

            <motion.div variants={fadeUp}>
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
              label="Hero — Capabilities platform dashboard & workflow illustration"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — Low-Code / No-Code + Workflow Automation
───────────────────────────────────────────── */
const lowCodeBullets = [
  "Build modules visually, no engineering required",
  "Composable blocks for every team",
  "Ship internal systems in days",
];
const automationBullets = [
  "Conditional, event-driven workflows",
  "SLA-based escalations and retries",
  "Human-in-the-loop when it matters",
];

function LowCodeAutomationSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        {/* 2-col text blocks */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-10 md:grid-cols-2 md:gap-14"
        >
          {/* Low-Code / No-Code */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              01 · Build Faster
            </span>
            <h2
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[40px]"
              style={{ lineHeight: "1.15" }}
            >
              Low-Code <G>/ No-Code</G>
            </h2>
            <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
              Give your operations team the power to design and ship systems
              themselves — with guardrails your IT team will actually approve.
            </p>
            <BulletList items={lowCodeBullets} />
          </motion.div>

          {/* Workflow Automation */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              02 · Automate Everything
            </span>
            <h2
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[40px]"
              style={{ lineHeight: "1.15" }}
            >
              Workflow <G>Automation</G>
            </h2>
            <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
              Replace email threads, Slack pings and manual follow-ups with
              workflows that run themselves — and escalate only when they
              should.
            </p>
            <BulletList items={automationBullets} />
          </motion.div>
        </motion.div>

        {/* Shared isometric illustration */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <ImgPlaceholder
            w={1300}
            h={520}
            label="Isometric 3D — person with dashboards, low-code & automation screens"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — Powering Every Layer (transition heading)
───────────────────────────────────────────── */
function PoweringLayersSection() {
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
              Control & Governance
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[50px]"
            style={{ lineHeight: "1.15" }}
          >
            Powering Every Layer{" "}
            <G>of Your Operations</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[620px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            From frontline task execution to board-level reporting — with the
            controls you&apos;d expect from enterprise software.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — Role-Based Access
───────────────────────────────────────────── */
const roleBasedBullets = [
  "Fine-grained permissions per field and module",
  "Team- and territory-based data scopes",
  "SSO, SCIM and audit-grade access logs",
];

function RoleBasedAccessSection() {
  return (
    <section className="pb-section">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[24px] border border-purple-100 bg-white shadow-card"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — illustration (lavender/blue bg) */}
            <div className="flex items-center justify-center bg-gradient-to-br from-[#EEF0FF] via-[#E8F4FF] to-[#EEF0FF] p-8 md:p-12">
              <ImgPlaceholder
                w={500}
                h={380}
                label="Role-Based Access — hub/orbit diagram with user avatar connections"
                className="border-0 bg-transparent"
              />
            </div>

            {/* Right — text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-6 p-8 md:p-12"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                  03 · Access Control
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px]"
                style={{ lineHeight: "1.2" }}
              >
                Role-Based <G>Access</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[15px] leading-[26px] text-[#6366A8]"
              >
                Every user sees exactly what they should — no more, no less.
                Granular permissions work at every level, from workspace to
                individual field.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList items={roleBasedBullets} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — AI-Powered Intelligence – AskEasy
───────────────────────────────────────────── */
function AiSection() {
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
              04 · AI-Powered
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            AI-Powered Intelligence —{" "}
            <G>AskEasy</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[600px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            AskEasy turns every workflow, form and document into a searchable,
            summarisable knowledge base. Just ask — Formezy finds it.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              "Summarize documents & files instantly",
              "Find data across all workflows",
              "Natural language queries",
              "AI-assisted approvals",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-pill border border-purple-100 bg-white px-4 py-2 font-sora text-[13px] font-medium text-[#6366A8] shadow-card"
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Large AI UI image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-[24px] border border-purple-100 bg-gradient-to-br from-purple-50/60 to-blue-50/40 p-4 shadow-card-hover md:p-6"
        >
          <ImgPlaceholder
            w={1200}
            h={500}
            label="AskEasy — AI chat interface / document search UI screenshot"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — Multi-Level Approvals
───────────────────────────────────────────── */
const approvalBullets = [
  "Unlimited sequential and parallel approval levels",
  "Delegation when approvers are unavailable",
  "SLA-based escalations with automatic nudges",
];

function ApprovalsSection() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[24px] border border-pink-100 bg-white shadow-card"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-6 p-8 md:p-12"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                  05 · Approvals
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px]"
                style={{ lineHeight: "1.2" }}
              >
                Multi-Level <G>Approvals</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[15px] leading-[26px] text-[#6366A8]"
              >
                Configure approval chains that reflect reality — parallel
                reviewers, fallback approvers, delegations and SLA-based
                escalations.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList items={approvalBullets} />
              </motion.div>
            </motion.div>

            {/* Right — approval flow (pink/salmon bg) */}
            <div className="flex items-center justify-center bg-gradient-to-br from-[#FFF0F0] via-[#FFF5F5] to-[#F0F0FF] p-8 md:p-12">
              <ImgPlaceholder
                w={500}
                h={380}
                label="Multi-Level Approvals — approval chain flow diagram"
                className="border-0 bg-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 7 — Audit Logs + Data Centralization
───────────────────────────────────────────── */
const auditBullets = [
  "Every action timestamped and attributed",
  "Immutable audit trail for compliance",
  "Instant export for auditors",
];
const centralizationBullets = [
  "Single source of truth across departments",
  "Cross-module reporting and dashboards",
  "Live data accessible to every team",
];

function AuditDataSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Audit Logs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 overflow-hidden rounded-[24px] border border-purple-100 bg-white shadow-card"
          >
            <div className="flex flex-col gap-4 p-8 pb-0">
              <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                06 · Auditability
              </span>
              <h3
                className="font-sora text-[26px] font-bold text-[#2C0E3A]"
                style={{ lineHeight: "1.2" }}
              >
                Audit <G>Logs</G>
              </h3>
              <p className="font-sora text-[14px] leading-[24px] text-[#6366A8]">
                Know exactly who did what, where and when — without chasing
                screenshots or Slack threads.
              </p>
              <BulletList items={auditBullets} />
            </div>
            <div className="p-6 pt-4">
              <ImgPlaceholder
                w={560}
                h={240}
                label="Audit Logs — activity timeline / log UI screenshot"
                className="border-0"
              />
            </div>
          </motion.div>

          {/* Data Centralization */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 overflow-hidden rounded-[24px] border border-purple-100 bg-white shadow-card"
          >
            <div className="flex flex-col gap-4 p-8 pb-0">
              <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                07 · Data
              </span>
              <h3
                className="font-sora text-[26px] font-bold text-[#2C0E3A]"
                style={{ lineHeight: "1.2" }}
              >
                Data <G>Centralization</G>
              </h3>
              <p className="font-sora text-[14px] leading-[24px] text-[#6366A8]">
                One place for every record, every update, every decision — no
                more hunting through folders or mailboxes.
              </p>
              <BulletList items={centralizationBullets} />
            </div>
            <div className="p-6 pt-4">
              <ImgPlaceholder
                w={560}
                h={240}
                label="Data Centralization — unified data dashboard screenshot"
                className="border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 8 — CTA
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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] top-0 h-[200px] rounded-full bg-[#6C60E8]/8 blur-[60px]"
          />

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
                Ready to Unlock{" "}
                <G>Smarter Business Capabilities?</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="max-w-[420px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Build automation, control and intelligence into one unified
                platform with Formezy.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button href="#demo" size="lg" className="rounded-[10px]">
                  Contact Us <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Illustration */}
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
                label="CTA — capabilities ecosystem / network illustration"
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
export default function CapabilitiesContent() {
  return (
    <>
      <HeroSection />
      <LowCodeAutomationSection />
      <PoweringLayersSection />
      <RoleBasedAccessSection />
      <AiSection />
      <ApprovalsSection />
      <AuditDataSection />
      <CtaSection />
    </>
  );
}
