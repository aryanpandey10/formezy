"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  ExternalLink,
} from "lucide-react";
// Job type + data imported from lib/job-data
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { jobs, type Job } from "@/lib/job-data";
import { careerCultureWebp } from "@/lib/webp-assets";

/* ─── helpers ──────────────────────────────── */
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
          <span className="font-sora text-[15px] leading-[24px] text-[#6366A8]">{b}</span>
        </li>
      ))}
    </ul>
  );
}

function ImgPlaceholder({ height = 340, label }: { height?: number; label?: string }) {
  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden rounded-[20px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50/40"
      style={{ height }}
    >
      <span className="font-sora text-[13px] text-[#6366A8]/60">{label ?? "Illustration"}</span>
    </div>
  );
}

/* ─── Office photo carousel ─────────────────── */
const OFFICE_PHOTOS = [
  { src: careerCultureWebp[0], alt: "Formezy office – team at work" },
  { src: careerCultureWebp[1], alt: "Formezy office – collaboration" },
  { src: careerCultureWebp[2], alt: "Formezy office – meeting room" },
  { src: careerCultureWebp[3], alt: "Formezy office – workspace" },
  { src: careerCultureWebp[4], alt: "Formezy office – team celebration" },
];

function CultureCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const total = OFFICE_PHOTOS.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setActive((p) => ((p + d) % total + total) % total);
    },
    [total]
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [go]);

  const pause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resume = () => {
    intervalRef.current = setInterval(() => go(1), 4000);
  };

  /* visible: [prev, active, next, next+1] — 3 tiles */
  const indices = [
    ((active - 1) % total + total) % total,
    active,
    (active + 1) % total,
    (active + 2) % total,
  ];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d: number) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0, scale: 0.9, transition: { duration: 0.35 } }),
  };

  return (
    <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>
      {/* Grid of 3 visible photos */}
      <div className="relative overflow-hidden">
        <AnimatePresence custom={dir} mode="popLayout" initial={false}>
          <motion.div
            key={active}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-2 gap-3 md:grid-cols-4"
          >
            {indices.map((idx, i) => (
              <motion.div
                key={`${idx}-${i}`}
                className={`relative overflow-hidden rounded-[16px] ${i === 1 ? "col-span-2 row-span-2 md:col-span-2" : "aspect-square"}`}
                style={{ aspectRatio: i === 1 ? "16/10" : "1" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Image
                  src={OFFICE_PHOTOS[idx].src}
                  alt={OFFICE_PHOTOS[idx].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => { pause(); go(-1); resume(); }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2C0E3A] shadow-card backdrop-blur-sm transition hover:bg-white hover:shadow-card-hover"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => { pause(); go(1); resume(); }}
        aria-label="Next"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2C0E3A] shadow-card backdrop-blur-sm transition hover:bg-white hover:shadow-card-hover"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="mt-5 flex justify-center gap-2">
        {OFFICE_PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
            className={`rounded-full transition-all duration-300 ${i === active ? "h-2 w-6 bg-[#6C60E8]" : "h-2 w-2 bg-purple-100"}`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Job Listings ──────────────────────────── */

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-[18px] border border-purple-100 bg-white/90 shadow-card backdrop-blur-sm transition-shadow hover:shadow-card-hover"
    >
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-sora text-[18px] font-bold text-[#2C0E3A]">
            {job.title} {job.titleHighlight}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-sora text-[12px] text-[#6366A8]">
              <MapPin size={12} /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 font-sora text-[12px] text-[#6366A8]">
              <Briefcase size={12} /> {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5 font-sora text-[12px] text-[#6366A8]">
              <Clock size={12} /> {job.experience}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {job.skills.map((s) => (
              <span
                key={s}
                className="rounded-pill border border-purple-100 bg-purple-50/80 px-3 py-1 font-sora text-[11px] font-semibold text-[#6C60E8]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-start gap-3">
          <span className="hidden rounded-pill border border-purple-100 bg-purple-50 px-3 py-1.5 font-sora text-[11px] font-semibold text-[#6C60E8] sm:inline-flex">
            {job.department}
          </span>
          <Link
            href={`/about/careers/${job.slug}`}
            className="inline-flex items-center gap-1.5 rounded-[10px] bg-[#6C60E8] px-4 py-2 font-sora text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-[#2C0E3A]"
          >
            Apply Now <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────── */
const workMatters = [
  "Build tools used by real enterprise teams every day",
  "Solve deep operational problems — not just UI features",
  "Ship code that directly impacts hundreds of workflows",
  "Work at the intersection of ERP, automation and AI",
];
const growWithUs = [
  "Mentorship from senior engineers and product leaders",
  "Clear career ladders with bi-annual reviews",
  "Access to tech conferences and learning budgets",
];
const lookingFor = [
  "Builders who care deeply about craft and clarity",
  "People who own outcomes, not just tasks",
  "Collaborators who raise the bar for everyone around them",
];

export default function CareersContent() {
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
            <span className="font-semibold text-[#2C0E3A]">Careers</span>
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
                Build What{" "}
                <G>Powers Modern
                <br />
                Businesses</G>
              </h1>
              <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                At Formezy, we&apos;re replacing fragmented, manual operations with
                intelligent systems. Join a team building the next generation of
                enterprise software — and grow with us.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="#opportunities"
                  className="inline-flex items-center rounded-[10px] bg-[#2C0E3A] px-6 py-3 font-sora text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.3)] transition-colors hover:bg-[#3d1650]"
                >
                  See Open Roles
                </Link>
                <Link
                  href="/about/company"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-purple-200 bg-white px-6 py-3 font-sora text-[14px] font-semibold text-[#2C0E3A] shadow-card transition-colors hover:border-purple-400"
                >
                  About Formezy <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImgPlaceholder height={400} label="Team / Platform Isometric Illustration" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Why Join Formezy ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-4 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
              style={{ lineHeight: "1.1" }}
            >
              Why <G>Join Formezy</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              At Formezy, we ship real products for real businesses. You&apos;ll have
              ownership from day one, mentorship from experienced engineers, and the
              satisfaction of seeing your work used in production every day.
            </motion.p>

            {/* Quote highlight */}
            <motion.div
              variants={fadeUp}
              className="mt-4 rounded-[18px] border border-purple-100 bg-white/80 px-8 py-5 shadow-card backdrop-blur-sm"
            >
              <p className="font-sora text-[20px] font-semibold italic text-[#6366A8]">
                &ldquo;Work that creates real impact, not just output.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Work That Matters ── */}
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
                <ImgPlaceholder height={320} label="Team Collaboration Illustration" />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <h2
                  className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[40px]"
                  style={{ lineHeight: "1.1" }}
                >
                  Work That <G>Matters</G>
                </h2>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Every line of code, every feature and every integration you
                  ship lands directly in the hands of enterprise operations teams
                  running their business on Formezy.
                </p>
                <Bullet items={workMatters} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Grow With Us + Who We're Looking For ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-2"
          >
            {/* Grow with us */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[28px] border border-purple-100 bg-white/90 p-8 shadow-card backdrop-blur-sm"
            >
              <h2
                className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[32px]"
                style={{ lineHeight: "1.15" }}
              >
                Grow <G>With Us</G>
              </h2>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                As Formezy scales across new industries and geographies, so does
                your career. We invest heavily in our team — because better
                people build better products.
              </p>
              <Bullet items={growWithUs} />
              <p className="font-sora text-[14px] font-semibold italic text-[#6366A8]">
                Growth that moves with you.
              </p>
            </motion.div>

            {/* Who we're looking for */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-[28px] border border-purple-100 bg-white/90 p-8 shadow-card backdrop-blur-sm"
            >
              <h2
                className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[32px]"
                style={{ lineHeight: "1.15" }}
              >
                Who We&apos;re <G>Looking For</G>
              </h2>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                We&apos;re building an ambitious platform for ambitious
                businesses. The people who thrive here are curious, take
                initiative, and communicate clearly under ambiguity.
              </p>
              <Bullet items={lookingFor} />
              <p className="font-sora text-[14px] font-semibold italic text-[#6366A8]">
                Scale operations without slowing down.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Our Work Culture ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-3 text-center"
            >
              <h2
                className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
                style={{ lineHeight: "1.1" }}
              >
                Our Work <G>Culture</G>
              </h2>
              <p className="max-w-2xl font-sora text-[15px] leading-[26px] text-[#6366A8]">
                We build great software at Formezy by empowered people working
                in open, collaborative spaces — where every voice is heard and
                every idea is explored.
              </p>
              <ul className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {[
                  "Open office spaces",
                  "Flexible work hours",
                  "Team-first decisions",
                  "No-blame retrospectives",
                ].map((v) => (
                  <li key={v} className="flex items-center gap-2 font-sora text-[14px] text-[#6366A8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6C60E8]" />
                    {v}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <CultureCarousel />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Current Opportunities ── */}
      <section id="opportunities" className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-3 text-center"
            >
              <h2
                className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
                style={{ lineHeight: "1.1" }}
              >
                Current <G>Opportunities</G>
              </h2>
              <p className="max-w-xl font-sora text-[15px] leading-[26px] text-[#6366A8]">
                Explore open positions at Formezy and find the role that creates
                real impact.
              </p>
            </motion.div>

            {/* Job cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="flex flex-col gap-4"
            >
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </motion.div>

            {/* Open application nudge */}
            <motion.div
              variants={fadeUp}
              className="rounded-[18px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50/30 p-6 text-center"
            >
              <p className="font-sora text-[15px] text-[#6366A8]">
                Don&apos;t see the right role?{" "}
                <Link
                  href="mailto:hello@safalinfosoft.com?subject=Open Application – Formezy"
                  className="font-semibold text-[#6C60E8] underline underline-offset-2 hover:text-[#2C0E3A]"
                >
                  Send us an open application
                </Link>{" "}
                — we&apos;re always on the lookout for great talent.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Bottom CTA ── */}
      <section className="section">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] bg-[#0f0620] px-8 py-16 text-center md:px-16 md:py-20"
          >
            {/* Glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#6C60E8]/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#708FF4]/20 blur-3xl"
            />
            {/* Dot grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative flex flex-col items-center gap-6">
              <h2
                className="mx-auto max-w-2xl font-sora text-[36px] font-bold text-white md:text-[48px]"
                style={{ lineHeight: "1.12" }}
              >
                Ready to Build Something{" "}
                <G>Meaningful?</G>
              </h2>
              <p className="mx-auto max-w-lg font-sora text-[16px] leading-[28px] text-white/60">
                Join a team that ships enterprise-grade products and genuinely
                cares about doing great work.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="#opportunities"
                  className="inline-flex items-center rounded-[10px] bg-white px-7 py-3.5 font-sora text-[15px] font-semibold text-[#2C0E3A] shadow-[0_4px_20px_rgba(255,255,255,0.25)] transition-colors hover:bg-purple-50"
                >
                  See Open Roles
                </Link>
                <Link
                  href="mailto:hello@safalinfosoft.com"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 px-7 py-3.5 font-sora text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  Write to Us <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
