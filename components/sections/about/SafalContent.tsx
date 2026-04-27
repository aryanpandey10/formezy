"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Check,
  Pause,
  Play,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

/* ─── helpers ──────────────────────────────────────── */
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

function ImgPlaceholder({
  height = 340,
  label,
}: {
  height?: number;
  label?: string;
}) {
  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden rounded-[20px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50/40"
      style={{ height }}
    >
      <span className="font-sora text-[13px] text-[#6366A8]/60">
        {label ?? "Illustration"}
      </span>
    </div>
  );
}

/* ─── timeline data ─────────────────────────────────── */
const TIMELINE = [
  {
    year: "2005",
    title: "Establishment",
    color: "#708FF4",
    desc: "Safal Infosoft was founded with a mission to deliver intelligent, structured business solutions. Our early work laid the groundwork for what would become a trusted enterprise partner.",
    tags: ["Founded", "Core Systems", "First Clients"],
  },
  {
    year: "2010",
    title: "Product Expansion",
    color: "#6C60E8",
    desc: "We expanded our product portfolio, building industry-specific modules for manufacturing, retail and services. Cross-vertical expertise became our defining strength.",
    tags: ["New Verticals", "50+ Clients", "Product Suite"],
  },
  {
    year: "2014",
    title: "Scaling Excellence",
    color: "#7C3AED",
    desc: "Intelliworks and other platforms were rolled out across enterprise clients. Automation and workflow digitisation became the focus — reducing manual overhead and improving accuracy.",
    tags: ["Intelliworks Launch", "Automation", "Enterprise Scale"],
  },
  {
    year: "2018",
    title: "Digital Transformation",
    color: "#5B7FE8",
    desc: "A full pivot to cloud-native delivery. Mobile-first modules, real-time dashboards, and API-first integrations enabled seamless connectivity across every business unit.",
    tags: ["Cloud-native", "Mobile-first", "APIs"],
  },
  {
    year: "2022",
    title: "Formezy Innovation",
    color: "#6C60E8",
    desc: "Formezy was born — an Enterprise Application Platform that unifies every input, team and workflow into one intelligent, adaptable system. A new category of enterprise software.",
    tags: ["Formezy Launch", "No-code Builder", "EAP"],
  },
  {
    year: "2024",
    title: "AI-Powered Future",
    color: "#708FF4",
    desc: "AskEzy AI, advanced logic builder and cross-system intelligence landed in Formezy, enabling businesses to operate with greater clarity, prediction and scale than ever before.",
    tags: ["AskEzy AI", "Logic Builder", "Scale"],
  },
];

/* ─── Animated Timeline Carousel ───────────────────── */
function TimelineCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplaying, setAutoplaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TIMELINE.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActiveIdx((prev) => ((prev + dir) % total + total) % total);
    },
    [total]
  );

  /* autoplay */
  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(() => go(1), 4000);
  }, [go]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (autoplaying) startAuto();
    return stopAuto;
  }, [autoplaying, startAuto, stopAuto]);

  /* visible indices: prev, active, next (always 3) */
  const prevIdx = ((activeIdx - 1) % total + total) % total;
  const nextIdx = (activeIdx + 1) % total;

  const cardVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (d: number) => ({
      x: d > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.35 },
    }),
  };

  const sideCard = (idx: number, side: "left" | "right") => {
    const item = TIMELINE[idx];
    const isLeft = side === "left";
    return (
      <motion.button
        key={`${side}-${idx}`}
        onClick={() => {
          stopAuto();
          setAutoplaying(false);
          const d = side === "right" ? 1 : -1;
          setDirection(d);
          setActiveIdx(idx);
        }}
        whileHover={{ scale: 1.03 }}
        className={`hidden w-[260px] shrink-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-[20px] border border-purple-100 bg-white/70 p-6 shadow-card backdrop-blur-sm transition-all hover:border-purple-300 hover:shadow-card-hover lg:flex ${isLeft ? "origin-right" : "origin-left"}`}
        style={{ opacity: 0.65, transform: "scale(0.92)" }}
      >
        <span
          className="inline-flex items-center rounded-pill px-3 py-1 font-sora text-[11px] font-bold text-white"
          style={{ background: item.color }}
        >
          {item.year}
        </span>
        <h3 className="font-sora text-[17px] font-bold text-[#2C0E3A]">
          {item.title}
        </h3>
        <p className="line-clamp-3 font-sora text-[13px] leading-[22px] text-[#6366A8]">
          {item.desc}
        </p>
      </motion.button>
    );
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Progress track — scrollable on small screens */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="flex min-w-max items-center justify-center gap-2 px-2">
        {TIMELINE.map((t, i) => (
          <button
            key={t.year}
            onClick={() => {
              stopAuto();
              setAutoplaying(false);
              setDirection(i > activeIdx ? 1 : -1);
              setActiveIdx(i);
            }}
            className="flex flex-col items-center gap-1.5 px-1"
          >
            <span
              className={`font-sora text-[12px] font-bold transition-colors ${i === activeIdx ? "text-[#2C0E3A]" : "text-[#6366A8]/40"}`}
            >
              {t.year}
            </span>
            <span
              className={`h-1 rounded-full transition-all duration-500 ${i === activeIdx ? "w-8 bg-[#6C60E8]" : "w-3 bg-purple-100"}`}
            />
          </button>
        ))}
        </div>
      </div>

      {/* Cards row */}
      <div className="flex w-full items-center justify-center gap-4">
        {/* Left side card — hidden on mobile */}
        <div className="hidden lg:block">{sideCard(prevIdx, "left")}</div>

        {/* Centre active card */}
        <div className="relative w-full max-w-[480px] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-5 overflow-hidden rounded-[24px] border border-[#6C60E8]/30 bg-white p-8 shadow-[0_8px_40px_rgba(108,96,232,0.18)]"
            >
              {/* Year badge */}
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex items-center rounded-pill px-4 py-1.5 font-sora text-[13px] font-bold text-white shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${TIMELINE[activeIdx].color}, #6C60E8)`,
                  }}
                >
                  {TIMELINE[activeIdx].year}
                </span>
                <span className="font-sora text-[12px] text-[#6366A8]/50">
                  {activeIdx + 1} / {total}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-sora text-[26px] font-bold text-[#2C0E3A]"
                style={{ lineHeight: "1.15" }}
              >
                {TIMELINE[activeIdx].title}
              </h3>

              {/* Description */}
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                {TIMELINE[activeIdx].desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {TIMELINE[activeIdx].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-pill border border-purple-100 bg-purple-50 px-3 py-1 font-sora text-[12px] font-semibold text-[#6C60E8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Animated accent line */}
              <motion.div
                key={`line-${activeIdx}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-1 origin-left rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${TIMELINE[activeIdx].color}, transparent)`,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side card — hidden on mobile */}
        <div className="hidden lg:block">{sideCard(nextIdx, "right")}</div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => {
            stopAuto();
            setAutoplaying(false);
            go(-1);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white text-[#6366A8] shadow-card transition-colors hover:border-purple-400 hover:text-[#6C60E8]"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => {
            if (autoplaying) {
              stopAuto();
              setAutoplaying(false);
            } else {
              setAutoplaying(true);
            }
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white text-[#6366A8] shadow-card transition-colors hover:border-purple-400 hover:text-[#6C60E8]"
          aria-label={autoplaying ? "Pause" : "Play"}
        >
          {autoplaying ? <Pause size={16} /> : <Play size={16} />}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => {
            stopAuto();
            setAutoplaying(false);
            go(1);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white text-[#6366A8] shadow-card transition-colors hover:border-purple-400 hover:text-[#6C60E8]"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </div>
  );
}

/* ─── Page content ──────────────────────────────────── */
const whatWeDo = [
  "Enterprise Application Platform (EAP) development",
  "Workflow automation and system integration",
  "Custom ERP, CRM and business intelligence tools",
  "Cloud-native mobile and web application delivery",
];
const approach = [
  "Listen before building — every system fits the client",
  "Agile delivery with structured QA at every milestone",
  "Long-term partnerships, not one-time projects",
];
const trust = [
  "19+ years of consistent enterprise delivery",
  "Clients across manufacturing, retail, services and healthcare",
  "100+ successful implementations across India",
];
const future = [
  "Expanding AI-powered workflows inside Formezy",
  "Deeper integrations with Oracle, SAP and Microsoft",
  "Bringing enterprise-grade tools to mid-market businesses",
];

export default function SafalContent() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="overflow-hidden pb-6 pt-8 md:pt-12">
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
            <span className="font-semibold text-[#2C0E3A]">Safal Infosoft</span>
          </motion.nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5"
            >
              <h1
                className="font-sora text-[30px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[46px] lg:text-[56px]"
                style={{ lineHeight: "1.08" }}
              >
                Driving Business
                <br />
                <G>Innovation Since 2006</G>
              </h1>
              <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Safal Infosoft is a technology company powering enterprise
                operations across industries — from ERP implementations to
                custom application platforms — for over 19 years.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="#journey"
                  className="inline-flex items-center rounded-[10px] bg-[#2C0E3A] px-6 py-3 font-sora text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.3)] transition-colors hover:bg-[#3d1650]"
                >
                  Our Journey
                </Link>
                <Link
                  href="/platform/overview"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-purple-200 bg-white px-6 py-3 font-sora text-[14px] font-semibold text-[#2C0E3A] shadow-card transition-colors hover:border-purple-400"
                >
                  Explore Formezy <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImgPlaceholder height={400} label="Business Innovation / Pipeline Illustration" />
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
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
              style={{ lineHeight: "1.1" }}
            >
              Who <G>We Are</G>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Safal Infosoft Pvt. Ltd. is an Ahmedabad-based enterprise technology company
              with deep expertise in building structured, intelligent business systems. Over
              nearly two decades, we&apos;ve helped organizations across India replace
              fragmented tools with unified, process-driven platforms.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
              Formezy is our flagship — an Enterprise Application Platform purpose-built for
              businesses that have outgrown spreadsheets and off-the-shelf software.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. What We Do ── */}
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
                <ImgPlaceholder height={320} label="3D Modules / Hexagon Illustration" />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <h2
                  className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[40px]"
                  style={{ lineHeight: "1.1" }}
                >
                  What <G>We Do</G>
                </h2>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  We design, build and deploy technology systems that help
                  businesses operate with structure, speed and scale.
                </p>
                <Bullet items={whatWeDo} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Journey of Growth (Animated Timeline) ── */}
      <section id="journey" className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-8"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 text-center">
              <h2
                className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
                style={{ lineHeight: "1.1" }}
              >
                Our Journey <G>of Growth</G>
              </h2>
              <p className="font-sora text-[15px] text-[#6366A8]">
                From foundational systems{" "}
                <ArrowRight className="mx-1 inline text-[#6C60E8]" size={15} />{" "}
                to advanced, scalable platforms.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="w-full">
              <TimelineCarousel />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Business Verticals ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-8 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
              style={{ lineHeight: "1.1" }}
            >
              Our Business <G>Verticals</G>
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-xl font-sora text-[15px] leading-[26px] text-[#6366A8]">
              A diversified approach built to support businesses at every stage.
            </motion.p>

            {/* Brand logos */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {[
                { name: "Intelliworks", color: "#6C60E8" },
                { name: "Safal ERP", color: "#708FF4" },
                { name: "Formezy", color: "#2C0E3A" },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-[14px] border border-purple-100 bg-white/90 px-8 py-5 shadow-card backdrop-blur-sm"
                >
                  <span
                    className="font-sora text-[18px] font-bold"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Our Approach + Built on Trust (2-col) ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-2"
          >
            {/* Approach */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[28px] border border-purple-100 bg-white/90 p-8 shadow-card backdrop-blur-sm"
            >
              <h2
                className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[32px]"
                style={{ lineHeight: "1.15" }}
              >
                Our <G>Approach</G>
              </h2>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                We don&apos;t sell software — we architect systems around how
                your business actually works. Our delivery philosophy is built
                on deep listening, collaborative design, and measured execution.
              </p>
              <Bullet items={approach} />
            </motion.div>

            {/* Built on Experience */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[28px] border border-purple-100 bg-white/90 p-8 shadow-card backdrop-blur-sm"
            >
              <h2
                className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[32px]"
                style={{ lineHeight: "1.15" }}
              >
                Built on <G>Experience and Trust</G>
              </h2>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                Every implementation carries the weight of nearly two decades of
                enterprise learning. Our clients trust us because we deliver
                what we promise — on time and on budget.
              </p>
              <Bullet items={trust} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Driving the Future Forward ── */}
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
                <h2
                  className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[40px]"
                  style={{ lineHeight: "1.1" }}
                >
                  Driving the <G>Future Forward</G>
                </h2>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Our roadmap is clear — build the most powerful, accessible
                  enterprise platform for growing businesses. Formezy evolves
                  continuously to match the ambition of the companies we serve.
                </p>
                <Bullet items={future} />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ImgPlaceholder height={340} label="Future / Isometric Platform Illustration" />
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
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] bg-[#0f0620] p-8 text-center md:p-16"
          >
            {/* Glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#6C60E8]/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#708FF4]/20 blur-3xl"
            />
            {/* Dot grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative flex flex-col items-center gap-6">
              <h2
                className="mx-auto max-w-3xl font-sora text-[36px] font-bold text-white md:text-[48px]"
                style={{ lineHeight: "1.12" }}
              >
                A Legacy of Innovation.
                <br />
                <G>A Future of Possibilities.</G>
              </h2>
              <p className="mx-auto max-w-xl font-sora text-[16px] leading-[28px] text-white/60">
                Discover our platforms and see how Safal Infosoft can
                transform your business operations.
              </p>
              <Link
                href="/platform/overview"
                className="inline-flex items-center gap-2 rounded-[10px] bg-white px-7 py-3.5 font-sora text-[15px] font-semibold text-[#2C0E3A] shadow-[0_4px_20px_rgba(255,255,255,0.25)] transition-colors hover:bg-purple-50"
              >
                Explore Formezy <ArrowRight size={15} />
              </Link>

              {/* Illustration */}
              <div className="mt-6 w-full max-w-2xl opacity-70">
                <ImgPlaceholder height={220} label="Journey / Platform Illustration" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
