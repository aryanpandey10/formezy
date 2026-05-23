"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  MapPin,
  Briefcase,
  Clock,
  ExternalLink,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { jobs, type Job } from "@/lib/job-data";
import { careerPageImages } from "@/lib/career-images";
import { cn } from "@/lib/cn";

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

const ScriptText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "font-rancho text-[22px] text-[#6366A8] md:text-[30px]",
      className
    )}
  >
    {children}
  </p>
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

const OFFICE_PHOTOS = careerPageImages.culture.map((src, i) => ({
  src,
  alt: `Formezy office — photo ${i + 1}`,
}));

function CultureGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Previous photos"
        className=" lg:hidden absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-purple-100 bg-white text-[#2C0E3A] shadow-card transition hover:border-purple-300 md:-left-5"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Next photos"
        className=" lg:hidden absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-purple-100 bg-white text-[#2C0E3A] shadow-card transition hover:border-purple-300 md:-right-5"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-2 md:grid md:grid-cols-4 md:overflow-visible"
      >
        {OFFICE_PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="relative h-[200px] w-[min(280px,78vw)] shrink-0 overflow-hidden rounded-[16px] md:h-[220px] md:w-full"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 78vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-[18px] border border-purple-100/80 bg-white p-6 shadow-[0_4px_24px_rgba(108,96,232,0.06)] transition-shadow hover:shadow-[0_8px_32px_rgba(108,96,232,0.1)]"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="font-sora text-[18px] font-bold text-[#2C0E3A] md:text-[20px]">
            {job.title} {job.titleHighlight}
          </h3>
          {job.description[0] && (
            <p className="line-clamp-2 font-sora text-[14px] leading-[24px] text-[#6366A8]">
              {job.description[0]}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]">
              <Briefcase size={14} className="text-[#6C60E8]" />
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]">
              <MapPin size={14} className="text-[#6C60E8]" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]">
              <Clock size={14} className="text-[#6C60E8]" />
              {job.type}
            </span>
          </div>
        </div>

        <Link
          href={`/about/careers/${job.slug}`}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-[10px] bg-[#2C0E3A] px-6 py-3 font-sora text-[14px] font-semibold text-white transition-colors hover:bg-[#3d1650]"
        >
          Apply Now <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

const workMatters = [
  "Solve real-world business challenges",
  "Work on scalable, enterprise-grade systems",
  "Be part of a team that loves to build",
];

const culturePoints = [
  "Open communication & collaboration",
  "Focus on learning and development",
  "Ownership & accountability",
];

export default function CareersContent() {
  return (
    <main className="flex flex-col pb-16">
      {/* ── 1. Hero ── */}
      <section className="overflow-hidden pb-8 pt-8 md:pt-12">
        <div className="container-app">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">
              Home
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/about/company" className="hover:text-[#2C0E3A]">
              About
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Career</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="max-w-[900px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[42px] md:text-[52px] lg:text-[58px]"
            >
              Build What <G>Powers Modern Businesses</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[720px] font-sora text-[15px] leading-[28px] text-[#6366A8] md:text-[17px]"
            >
              Join a team building tools that help businesses move beyond
              fragmented operations — with structure, clarity, and technology
              that scales.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 w-full">
              <div className="relative mx-auto aspect-[16/9] w-full max-w-[1100px] sm:aspect-[2/1]">
                <Image
                  src={careerPageImages.hero}
                  alt="Build what powers modern businesses"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1100px"
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </motion.div>
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
            className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[48px]"
            >
              Why <G>Join Formezy</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[15px] leading-[28px] text-[#6366A8] md:text-[17px]"
            >
              Formezy is a cutting-edge low-code / no-code operational technology
              company. We build enterprise-grade systems that replace spreadsheets
              and disconnected tools with unified, intelligent workflows.
            </motion.p>
            <motion.div variants={fadeUp}>
              <ScriptText>Work that creates real impact, not just output.</ScriptText>
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
            className="overflow-hidden rounded-[24px] border border-purple-100 bg-white p-6 shadow-[0_8px_40px_rgba(108,96,232,0.08)] md:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                variants={fadeUp}
                className="relative aspect-square w-full max-w-[520px] lg:max-w-none"
              >
                <Image
                  src={careerPageImages.workThatMatters}
                  alt="Team collaborating on enterprise systems"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain object-center"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <h2 className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[40px]">
                  Work That <G>Matters</G>
                </h2>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Every feature you ship helps teams solve real operational
                  complexity — with software built for how businesses actually
                  run.
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
            className="grid gap-8 lg:grid-cols-2"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[36px]">
                Grow <G>With Us</G>
              </h2>
              <p className="font-sora text-[15px] leading-[28px] text-[#6366A8]">
                We invest in our people with mentorship, learning opportunities,
                and clear paths to grow as Formezy scales across industries and
                geographies.
              </p>
              <ScriptText>Growth that moves with you.</ScriptText>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[36px]">
                Who We&apos;re <G>Looking For</G>
              </h2>
              <p className="font-sora text-[15px] leading-[28px] text-[#6366A8]">
                Curious problem solvers who take ownership, communicate clearly,
                and care about building products that make a difference in real
                businesses.
              </p>
              <ScriptText>Scale operations without starting over.</ScriptText>
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
              className="flex flex-col items-center gap-4 text-center"
            >
              <h2 className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[48px]">
                Our Work <G>Culture</G>
              </h2>
              <p className="max-w-2xl font-sora text-[15px] leading-[28px] text-[#6366A8]">
                Entrepreneurial teams, open collaboration, and a focus on
                learning — so great people can do their best work.
              </p>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                {culturePoints.map((v) => (
                  <li
                    key={v}
                    className="flex items-center gap-2 font-sora text-[14px] text-[#6366A8]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6C60E8]" />
                    {v}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <CultureGallery />
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
              <h2 className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[48px]">
                Current <G>Opportunities</G>
              </h2>
              <p className="max-w-xl font-sora text-[15px] leading-[26px] text-[#6366A8]">
                Explore open roles across different teams and find where you can
                create real impact.
              </p>
            </motion.div>

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

            <motion.div
              variants={fadeUp}
              className="rounded-[18px] border border-purple-100 bg-purple-50/40 p-6 text-center"
            >
              <p className="font-sora text-[15px] text-[#6366A8]">
                Don&apos;t see the right role?{" "}
                <Link
                  href="mailto:hello@safalinfosoft.com?subject=Open Application – Formezy"
                  className="font-semibold text-[#6C60E8] underline underline-offset-2 hover:text-[#2C0E3A]"
                >
                  Send us an open application
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
