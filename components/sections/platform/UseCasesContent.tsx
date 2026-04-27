"use client";

import { motion } from "framer-motion";
import {
  Users2,
  Boxes,
  HeartPulse,
  Megaphone,
  Factory,
  Stethoscope,
  Landmark,
  ShoppingCart,
  Truck,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import UseCaseTabs from "@/components/sections/use-cases/UseCaseTabs";
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
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 shadow-sm">
          <svg
            width="20"
            height="20"
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
        <p className="font-sora text-[10px] text-[#6366A8]/50">{w} × {h}</p>
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

/* ─────────────────────────────────────────────
   Use-case icon grid data
───────────────────────────────────────────── */
const overviewItems = [
  { label: "Customer Relationship Mgmt.", Icon: Users2,       color: "#6C63FF" },
  { label: "Enterprise Resource Planning", Icon: Boxes,       color: "#A78BFA" },
  { label: "Human Resource CRM",           Icon: HeartPulse,  color: "#06B6D4" },
  { label: "Marketing Automation",          Icon: Megaphone,   color: "#F59E0B" },
  { label: "Manufacturing",                 Icon: Factory,     color: "#10B981" },
  { label: "Healthcare",                    Icon: Stethoscope, color: "#EF4444" },
  { label: "Financial Services / Banking",  Icon: Landmark,    color: "#8B5CF6" },
  { label: "Retail & E-commerce",           Icon: ShoppingCart,color: "#14B8A6" },
  { label: "Logistics / Supply Chain",      Icon: Truck,       color: "#F43F5E" },
];

/* ─────────────────────────────────────────────
   FAQ data
───────────────────────────────────────────── */
const faqs: AccordionItem[] = [
  {
    id: "1",
    question: "What Are Use Cases in Formezy?",
    answer:
      "Use Cases are ready-to-configure starting points — ERP, CRM, field service, and more — that you can tailor to your business instead of building from scratch. Every Use Case uses the same Formezy foundation, so nothing is a dead-end.",
  },
  {
    id: "2",
    question: "Can Formezy Be Customized For Specific Business Needs?",
    answer:
      "Yes. Every Use Case is fully configurable: you can add fields, change approval flows, rename modules and connect to your existing systems. Most customers ship their first tailored system live within weeks.",
  },
  {
    id: "3",
    question: "Is Formezy Suitable For Multiple Industries?",
    answer:
      "Formezy is used across manufacturing, BFSI, healthcare, retail, construction, logistics and professional services. The platform is industry-agnostic — Use Cases give you a head start for your specific domain.",
  },
  {
    id: "4",
    question: "Can Formezy Replace Multiple Business Tools?",
    answer:
      "For most operational workflows, yes. Formezy typically replaces 3–7 point tools (spreadsheets, shared mailboxes, project trackers, legacy ERPs) with a single governed system — while still integrating with the tools you want to keep.",
  },
  {
    id: "5",
    question: "How Do I Choose The Right Use Case?",
    answer:
      "Start with the workflow that hurts the most — approvals, field ops, vendor onboarding, HR requests. Our team will map it in a free workshop and recommend the Use Case that fits best.",
  },
  {
    id: "6",
    question: "Can Formezy Scale As My Business Grows?",
    answer:
      "Absolutely. Formezy customers start with one workflow and scale to hundreds of users and modules across entities, without replatforming. The same EAP supports a 50-person team and a 50,000-person enterprise.",
  },
];

/* ─────────────────────────────────────────────
   Section 1 — Hero: text left + icon grid right
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-0 pt-8 md:pt-12 lg:pt-16">
      <div className="container-app">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-start gap-6 lg:pt-4"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Use Cases
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Built for Every{" "}
              <G>Business Use Case</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[500px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Whatever your operation — from field service to claims to retail
              — there&apos;s a Formezy Use Case that takes you most of the way,
              fast.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
              <Button
                href="#explore"
                size="lg"
                variant="ghost"
                className="rounded-[10px]"
              >
                Explore Use Cases
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — 3×3 icon grid + center illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Icon grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {overviewItems.map((o, i) => {
                const { Icon } = o;
                const isCenter = i === 4; // middle item gets the illustration treatment
                return (
                  <motion.div
                    key={o.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`flex flex-col items-center gap-2.5 rounded-[18px] border p-4 text-center shadow-card transition-transform hover:-translate-y-1 ${
                      isCenter
                        ? "border-purple-200 bg-gradient-to-br from-purple-100 to-blue-50 shadow-card-hover"
                        : "border-purple-100/60 bg-white/90"
                    }`}
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${o.color}18`,
                        color: o.color,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <span className="font-sora text-[11px] font-semibold leading-[16px] text-[#2C0E3A]">
                      {o.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — Turning Business Needs into Working Systems
───────────────────────────────────────────── */
function TurningNeedsSection() {
  return (
    <section className="section">
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — isometric illustration */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImgPlaceholder
              w={640}
              h={480}
              label="Isometric platform — use case categories connected to Formezy hub"
            />
          </motion.div>

          {/* Right — text block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Turning business needs into working systems
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[44px]"
              style={{ lineHeight: "1.15" }}
            >
              Turning Business Needs into{" "}
              <G>Working Systems</G>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-[480px] font-sora text-[15px] leading-[26px] text-[#6366A8]"
            >
              Every Use Case comes with proven templates, best-practice
              workflows and integration blueprints — so you go live on real
              value in weeks, not quarters.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="flex flex-col gap-2.5"
            >
              {[
                "Pre-built workflows for your industry",
                "Fully configurable to match your ops",
                "Integration blueprints included",
                "Go live in weeks, not quarters",
              ].map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3 font-sora text-[14px] leading-[22px] text-[#6366A8]"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 translate-y-1.5 rounded-full bg-[#6C60E8]" />
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Button href="#demo" size="md" className="rounded-[10px]">
                Talk to a Specialist <ArrowRight size={14} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — Explore Use Cases (tabs)
───────────────────────────────────────────── */
function ExploreSection() {
  return (
    <section id="explore" className="section bg-white/90 backdrop-blur-sm">
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
            className="mx-auto max-w-3xl font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[50px]"
            style={{ lineHeight: "1.15" }}
          >
            Explore Use Cases{" "}
            <G>Across Systems and Industries</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Browse by the kind of system you need, or by the industry you
            operate in.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <UseCaseTabs />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — CTA card
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
                Ready to Build a System{" "}
                <G>That Fits Your Business?</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="max-w-[420px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Tell us about the workflow you want to solve — we&apos;ll map it
                and show you a working Formezy system in 30 minutes.
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
                label="CTA — isometric Formezy use-case ecosystem illustration"
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
   Section 5 — FAQ
───────────────────────────────────────────── */
function FaqSection() {
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
            Frequently <G>Asked Questions</G>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion items={faqs} defaultOpen="1" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Root export
───────────────────────────────────────────── */
export default function UseCasesContent() {
  return (
    <>
      <HeroSection />
      <TurningNeedsSection />
      <ExploreSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
