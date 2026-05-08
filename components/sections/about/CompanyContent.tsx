"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import SectionWebpImage from "@/components/ui/SectionWebpImage";
import { companyPageImages } from "@/lib/page-section-images";

/* ── helpers ── */
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

function Bullet({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
            <Check size={11} strokeWidth={2.5} />
          </span>
          <span className="font-sora text-[15px] leading-[24px] text-[#6366A8]">
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ── data ── */
const whyEap = [
  "Replace disconnected tools with one unified system",
  "Align workflows and approvals across every team",
  "Enable scalable, process-driven execution",
];
const approach = [
  "Define your own workflows without code",
  "Structure processes exactly as you operate",
  "Build without rebuilding existing systems",
];
const vision = [
  "Move beyond fragmented, siloed tools",
  "Operate through connected, intelligent platforms",
  "Enable clarity, control, and scalable growth",
];
const mission = [
  "Reduce operational complexity",
  "Improve execution speed and accuracy",
  "Make better decisions with real-time clarity",
];
const scalable = [
  "Automate visibility across all teams",
  "Keep processes structured as your headcount grows",
  "Scale operations without losing governance",
];

/* ════════════════════════════════════════ */
export default function CompanyContent() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="overflow-hidden pb-4 pt-8 md:pt-12">
        <div className="container-app">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">Home</Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/about/company" className="hover:text-[#2C0E3A]">About</Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Company</span>
          </motion.nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Left – text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              <h1
                className="font-sora text-[30px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[46px] lg:text-[56px]"
                style={{ lineHeight: "1.08" }}
              >
                Enterprise <G>Systems,</G>
                <br />
                <G>Reimagined</G>
              </h1>
              <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Formezy helps businesses move beyond disconnected tools and
                build a unified, intelligent way of operating — built around
                how you actually work.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="#demo"
                  className="inline-flex items-center rounded-[10px] bg-[#2C0E3A] px-6 py-3 font-sora text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.35)] transition-colors hover:bg-[#3d1650]"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/platform/overview"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-purple-200 bg-white px-6 py-3 font-sora text-[14px] font-semibold text-[#2C0E3A] shadow-card transition-colors hover:border-purple-400"
                >
                  Explore Platform <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Right – illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionWebpImage
                src={companyPageImages.hero}
                alt="Enterprise systems reimagined with Formezy"
                fixedHeightPx={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="rounded-[20px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Who We Are ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-pill border border-purple-100 bg-white/80 px-4 py-1.5 font-sora text-[13px] font-semibold text-[#6C60E8] shadow-card"
            >
              Who We Are
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
              style={{ lineHeight: "1.1" }}
            >
              Who <G>We Are</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Formezy is an Enterprise Application Platform (EAP) built to
              bring structure, automation and intelligence into business
              operations — so growth doesn&apos;t mean growing complexity.
            </motion.p>

            {/* Quote card */}
            <motion.div
              variants={fadeUp}
              className="mt-4 w-full rounded-[20px] border border-purple-100 bg-white/80 px-8 py-6 shadow-card backdrop-blur-sm"
            >
              <p className="font-sora text-[18px] font-medium italic text-[#6366A8] md:text-[20px]">
                &ldquo;From fragmented operations.{" "}
                <ArrowRight className="mx-1 inline text-[#6C60E8]" size={18} />{" "}
                To system-driven execution.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Why EAP Matters Today ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="overflow-hidden rounded-[28px] border border-purple-100 bg-white/90 p-6 shadow-card backdrop-blur-sm md:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div variants={fadeUp}>
                <SectionWebpImage
                  src={companyPageImages.whyEap}
                  alt="Why an enterprise application platform matters today"
                  fixedHeightPx={320}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="rounded-[20px]"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-4 py-1.5 font-sora text-[13px] font-semibold text-[#6C60E8]">
                  Why EAP matters
                </span>
                <h2
                  className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[38px]"
                  style={{ lineHeight: "1.1" }}
                >
                  Why EAP Matters <G>Today</G>
                </h2>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Most businesses of 50+ operate across disconnected systems —
                  an ERP here, a CRM there, spreadsheets everywhere. The cost
                  isn&apos;t the tools. It&apos;s the coordination that never
                  quite happens between them.
                </p>
                <Bullet items={whyEap} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Our Approach ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="overflow-hidden rounded-[28px] border border-purple-100 bg-white/90 p-6 shadow-card backdrop-blur-sm md:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-white px-4 py-1.5 font-sora text-[13px] font-semibold text-[#6C60E8]">
                  Our Approach
                </span>
                <h2
                  className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[38px]"
                  style={{ lineHeight: "1.1" }}
                >
                  Our <G>Approach</G>
                </h2>
                <p className="font-sora text-[16px] font-semibold text-[#2C0E3A]">
                  We believe systems should adapt to businesses, not the other
                  way around.
                </p>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Formezy allows you to:
                </p>
                <Bullet items={approach} />
                <p className="font-sora text-[14px] italic text-[#6366A8]/70">
                  This ensures flexibility without losing control.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <SectionWebpImage
                  src={companyPageImages.approach}
                  alt="Formezy approach to enterprise workflows"
                  fixedHeightPx={320}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="rounded-[20px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Vision + Mission ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-2"
          >
            {/* Vision */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[28px] border border-purple-100 bg-white/90 p-8 shadow-card backdrop-blur-sm md:p-10"
            >
              <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-4 py-1.5 font-sora text-[13px] font-semibold text-[#6C60E8]">
                Our Vision
              </span>
              <h2
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[36px]"
                style={{ lineHeight: "1.1" }}
              >
                Our <G>Vision</G>
              </h2>
              <p className="font-sora text-[16px] font-semibold text-[#2C0E3A]">
                To redefine how businesses build and operate systems.
              </p>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                We aim to help businesses:
              </p>
              <Bullet items={vision} />
              <div className="mt-2 overflow-hidden rounded-[16px] border border-purple-100 bg-purple-50/60">
                <SectionWebpImage
                  src={companyPageImages.vision}
                  alt="Our vision for connected enterprise systems"
                  fixedHeightPx={200}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="rounded-none border-0 bg-transparent"
                />
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[28px] border border-purple-100 bg-white/90 p-8 shadow-card backdrop-blur-sm md:p-10"
            >
              <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-4 py-1.5 font-sora text-[13px] font-semibold text-[#6C60E8]">
                Our Mission
              </span>
              <h2
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[36px]"
                style={{ lineHeight: "1.1" }}
              >
                Our <G>Mission</G>
              </h2>
              <p className="font-sora text-[16px] font-semibold text-[#2C0E3A]">
                To simplify business operations by connecting workflows,
                communication and data into one system.
              </p>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                We focus on helping businesses:
              </p>
              <Bullet items={mission} />
              <div className="mt-2 overflow-hidden rounded-[16px] border border-purple-100 bg-white">
                <SectionWebpImage
                  src={companyPageImages.mission}
                  alt="Our mission to simplify business operations"
                  fixedHeightPx={200}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="rounded-none border-0 bg-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Beyond Traditional Software ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-pill border border-purple-100 bg-white/80 px-4 py-1.5 font-sora text-[13px] font-semibold text-[#6C60E8] shadow-card"
            >
              Beyond software
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
              style={{ lineHeight: "1.1" }}
            >
              Beyond <G>Traditional Software</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-xl font-sora text-[20px] italic leading-[1.6] text-[#6366A8]"
            >
              &ldquo;Not just managing operations, but controlling and
              optimizing them.&rdquo;
            </motion.p>
            <motion.div variants={fadeUp} className="w-full">
              <SectionWebpImage
                src={companyPageImages.beyond}
                alt="Moving beyond traditional disconnected software"
                fixedHeightPx={360}
                sizes="(max-width: 1024px) 100vw, 960px"
                className="rounded-[20px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Built for Scalable Operations ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="overflow-hidden rounded-[28px] border border-purple-100 bg-white/90 p-6 shadow-card backdrop-blur-sm md:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div variants={fadeUp}>
                <SectionWebpImage
                  src={companyPageImages.scalable}
                  alt="Built for scalable operations with Formezy"
                  fixedHeightPx={340}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="rounded-[20px]"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-4 py-1.5 font-sora text-[13px] font-semibold text-[#6C60E8]">
                  Built for scale
                </span>
                <h2
                  className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[38px]"
                  style={{ lineHeight: "1.1" }}
                >
                  Built for <G>Scalable Operations</G>
                </h2>
                <p className="font-sora text-[16px] font-semibold text-[#2C0E3A]">
                  As businesses grow, operations become more complex.
                </p>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Formezy ensures that growth doesn&apos;t lead to chaos by
                  providing a structured system that scales with you.
                </p>
                <Bullet items={scalable} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] bg-[#0f0620] px-8 py-16 text-center md:px-16 md:py-20"
          >
            {/* Decorative glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#6C60E8]/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#708FF4]/20 blur-3xl"
            />

            {/* Dot-grid overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative">
              <h2
                className="mx-auto max-w-3xl font-sora text-[36px] font-bold text-white md:text-[48px]"
                style={{ lineHeight: "1.12" }}
              >
                Ready to Move Beyond{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Traditional Systems?
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-sora text-[16px] leading-[28px] text-white/60">
                An Enterprise Application Platform ensures your business runs
                on common rules and standards. Build your enterprise platform.
                Achieve more with Formezy.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/about/company#contact"
                  className="inline-flex items-center rounded-[10px] bg-white px-7 py-3.5 font-sora text-[15px] font-semibold text-[#2C0E3A] shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-colors hover:bg-purple-50"
                >
                  Contact Us
                </Link>
                <Link
                  href="/platform/overview"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/20 px-7 py-3.5 font-sora text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  Explore the Platform <ArrowRight size={15} />
                </Link>
              </div>

              {/* Illustration inside CTA */}
              <div className="mx-auto mt-10 max-w-md opacity-90">
                <SectionWebpImage
                  src={companyPageImages.cta}
                  alt="Enterprise platform with Formezy"
                  fixedHeightPx={200}
                  sizes="(max-width: 768px) 90vw, 448px"
                  className="rounded-[16px] border-white/10 bg-white/5"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
