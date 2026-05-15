"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { capabilitiesPageImages } from "@/lib/page-section-images";

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
          <span className="font-sora text-[14px] leading-[22px] text-[#6366A8] md:text-[15px] md:leading-[24px]">
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ── Hero — left-aligned copy (Overview-style); full-width image below ── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0 md:pt-10 lg:pt-12">
      <div className="container-app flex flex-col items-start text-left">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Breadcrumb"
          className="mb-8 inline-flex h-11 shrink-0 items-center gap-[10px] rounded-[50px] border border-[#E8E4FF] bg-white/90 px-5 py-[10px] font-sora text-[14px] font-medium text-[#6366A8] shadow-sm backdrop-blur-sm md:w-[min(100%,340px)]"
        >
          <Link href="/" className="text-[#6366A8] transition-colors hover:text-purple-primary">
            Home
          </Link>
          <span className="text-[#C4B5FD]" aria-hidden>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span className="text-[#2C0E3A]">Capabilities</span>
        </motion.nav>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex w-full max-w-[1100px] flex-col items-start gap-6 md:gap-8"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.08] tracking-tight text-[#2C0E3A] sm:text-[44px] md:text-[52px] lg:text-[60px] lg:leading-[1.06] xl:text-[68px]"
          >
            Capabilities Built for <G>Modern Business Operations</G>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-[720px] font-sora text-[15px] leading-[24px] text-[#6366A8] sm:text-[16px] sm:leading-[26px]"
          >
            A versatile platform for how your teams actually work — design workflows, automate
            execution, govern access, and see everything in one connected layer.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href="#demo" size="lg" className="rounded-[10px]">
              Get Started <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-10 w-full md:mt-12 lg:mt-14"
        >
          <div className="relative aspect-[1923/680] w-full max-w-[1280px]">
            <Image
              src={capabilitiesPageImages.hero}
              alt="Formezy capabilities dashboard and operations overview"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain object-left md:object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const lowCodeBullets = [
  "Compose screens, validations, and data models visually",
  "Ship internal tools quickly with reusable modules",
  "Keep IT guardrails while business teams iterate safely",
];
const automationBullets = [
  "Trigger steps from events, schedules, or data changes",
  "Built-in escalations, reminders, and human-in-the-loop paths",
  "Monitor SLAs and bottlenecks from one operations view",
];

/* ── Low-Code + Workflow (two columns, wide visual below) ── */
function LowCodeAutomationSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-10 text-left md:grid-cols-2 md:gap-14 lg:gap-16"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <h2
              className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px] lg:text-[40px]"
              style={{ lineHeight: "1.15" }}
            >
              Low-Code <G>/ No-Code</G>
            </h2>
            <p className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
              Empower teams to assemble workflows and apps without heavy engineering — so ideas move
              from whiteboard to production without losing governance.
            </p>
            <BulletList items={lowCodeBullets} />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <h2
              className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px] lg:text-[40px]"
              style={{ lineHeight: "1.15" }}
            >
              Workflow <G>Automation</G>
            </h2>
            <p className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
              Replace manual follow-ups with structured automation — approvals, handoffs, and
              notifications run in sequence so work never stalls in inboxes.
            </p>
            <BulletList items={automationBullets} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 w-full overflow-hidden rounded-[24px] border border-[#EDE9FE] bg-[#F3F8FF] shadow-sm md:mt-14 lg:mt-16"
        >
          <div className="relative mx-auto aspect-[1414/750] w-full max-w-[1280px] min-h-[200px]">
            <Image
              src={capabilitiesPageImages.coreOperationsVisual}
              alt="Low-code building and workflow automation across operations"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Powering every layer ── */
function PoweringLayersSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[880px] flex-col items-center gap-5 text-center md:gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[40px] md:text-[48px] lg:text-[52px]"
          >
            Powering Every Layer <G>of Your Operations</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            From day-to-day execution to leadership visibility — Formezy connects how work gets
            done with how it&apos;s measured, secured, and improved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const roleBasedBullets = [
  "Permissions scoped by role, team, and data sensitivity",
  "Consistent policies across modules and workflows",
  "Designed for enterprise SSO and audit expectations",
];

/* ── Role-Based Access — light panel, image left / copy right ── */
function RoleBasedAccessSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[24px] border border-[#C7D9F5] bg-gradient-to-br from-[#E8F2FF] via-[#F2F7FF] to-[#EEF4FF] shadow-[0_12px_48px_rgba(60,80,140,0.08)]"
        >
          <div className="grid items-center gap-10 p-8 md:gap-12 md:p-12 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-[20px] border border-white/80 bg-white/60 p-4 shadow-sm">
                <div className="relative aspect-[925/690] w-full">
                  <Image
                    src={capabilitiesPageImages.roleBased}
                    alt="Role-based access and secure permissions in Formezy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-5 text-left lg:gap-6"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px] lg:text-[40px]"
                style={{ lineHeight: "1.15" }}
              >
                Role-Based <G>Access</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Keep sensitive operations visible only to the right people. Fine-grained controls
                align with how your organization already thinks about responsibility and risk.
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

/* ── AskEasy — centered copy + full-width UI image ── */
function AiSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center md:gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[40px] md:text-[48px] lg:text-[52px]"
          >
            AI-Powered Intelligence — <G>AskEasy</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Ask questions in natural language and move faster across forms, records, and workflows
            — AskEasy surfaces answers where your teams already work.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 w-full overflow-hidden rounded-[24px] border border-[#EDE9FE] bg-white shadow-sm md:mt-12"
        >
          <div className="relative mx-auto aspect-[1600/666] w-full max-w-[1280px] min-h-[200px]">
            <Image
              src={capabilitiesPageImages.askEasy}
              alt="AskEasy AI assistant alongside Formezy data and workflows"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const approvalBullets = [
  "Sequential and parallel paths that mirror real sign-off chains",
  "Delegation and coverage when approvers are unavailable",
  "Escalations and reminders tied to SLAs you define",
];

/* ── Multi-Level Approvals — soft pink panel, text left / image right ── */
function ApprovalsSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[24px] border border-[#F5D0E8] bg-gradient-to-br from-[#FFF5FA] via-[#FFF8FC] to-[#F5F0FF] shadow-[0_12px_48px_rgba(120,60,120,0.08)]"
        >
          <div className="grid items-center gap-10 p-8 md:gap-12 md:p-12 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="order-2 flex flex-col gap-5 text-left lg:order-1 lg:gap-6"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px] lg:text-[40px]"
                style={{ lineHeight: "1.15" }}
              >
                Multi-Level <G>Approvals</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Model complex approval chains that match reality — so reviews stay fast, traceable,
                and consistent across departments.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList items={approvalBullets} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
            >
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-[20px] border border-white/80 bg-white/60 p-4 shadow-sm">
                <div className="relative aspect-[925/690] w-full">
                  <Image
                    src={capabilitiesPageImages.approvals}
                    alt="Multi-level approval sequence in Formezy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const auditBullets = [
  "Immutable history of who changed what and when",
  "Exports and views aligned with compliance reviews",
  "Less reconstruction work when issues need investigation",
];
const centralizationBullets = [
  "One operational spine instead of scattered spreadsheets",
  "Shared definitions for customers, orders, and assets",
  "Reporting that draws from the same live records everyone uses",
];

/* ── Audit + Data centralization — two text columns (Figma) ── */
function AuditDataSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 rounded-[24px] border border-[#E8E4FF] bg-white/90 p-8 shadow-sm backdrop-blur-sm md:p-10"
          >
            <h3
              className="font-sora text-[26px] font-bold text-[#2C0E3A] md:text-[30px]"
              style={{ lineHeight: "1.2" }}
            >
              Audit <G>Logs</G>
            </h3>
            <p className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
              Track changes and maintain a clear trail for compliance — without stitching together
              screenshots from different tools.
            </p>
            <BulletList items={auditBullets} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 rounded-[24px] border border-[#E8E4FF] bg-white/90 p-8 shadow-sm backdrop-blur-sm md:p-10"
          >
            <h3
              className="font-sora text-[26px] font-bold text-[#2C0E3A] md:text-[30px]"
              style={{ lineHeight: "1.2" }}
            >
              Data <G>Centralization</G>
            </h3>
            <p className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
              Bring operational data into one governed layer so teams stop reconciling conflicting
              versions across folders and inboxes.
            </p>
            <BulletList items={centralizationBullets} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── CTA — gradient card, centered copy, image below (Figma) ── */
function CtaSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[30px] border border-[#D8D4F5] bg-gradient-to-b from-[#EEF4FF] via-[#F5F0FF] to-[#EDE9FF] px-6 py-12 shadow-[0_8px_48px_rgba(108,96,232,0.12)] md:px-12 md:py-14 lg:px-16 lg:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[12%] top-0 h-[180px] rounded-full bg-[#6C60E8]/10 blur-[56px]"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px] lg:text-[48px]"
            >
              Ready to Unlock <G>Smarter Business Capabilities?</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Experience the power of Formezy&apos;s enterprise-grade features. Build your own
              system with clarity.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Get Started <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className="relative z-10 mx-auto mt-10 w-full max-w-[900px] overflow-hidden rounded-[22px] border border-white/70 bg-white/50 shadow-sm md:mt-12"
          >
            <div className="relative aspect-[1414/750] w-full min-h-[180px]">
              <Image
                src={capabilitiesPageImages.ctaVisual}
                alt="Connected secure operations with Formezy"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

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
