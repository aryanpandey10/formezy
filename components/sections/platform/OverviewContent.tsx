"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { overviewWebp } from "@/lib/webp-assets";

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

/* ── Hero — same background as rest of site; image below copy ── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0 md:pt-10 lg:pt-12">
      <div className="container-app flex flex-col items-start text-left">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Breadcrumb"
          className="mb-8 inline-flex h-11 shrink-0 items-center gap-[5px] rounded-[50px] border border-[#E8E4FF] bg-white/90 px-5 py-[10px] font-sora text-[14px] font-medium text-[#6366A8] shadow-sm backdrop-blur-sm"
        >
          <Link href="/" className="text-[#6366A8] transition-colors hover:text-purple-primary">
            Home
          </Link>

           {/* <Link href="/" className="text-[#6366A8] transition-colors hover:text-purple-primary">
            Platform
          </Link> */
          }
          <span className="text-[#C4B5FD]" aria-hidden>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span className="text-[#2C0E3A]">Platform</span>
          <span className="text-[#C4B5FD]" aria-hidden>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span className="text-[#2C0E3A]">Overview</span>
        </motion.nav>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex w-full max-w-[1100px] flex-col items-start gap-6 md:gap-8"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.08] tracking-tight text-[#2C0E3A] sm:text-[44px] md:text-[52px] lg:text-[64px] lg:leading-[1.05] xl:text-[72px] xl:leading-[1.02] 2xl:text-[80px] 2xl:leading-[84px]"
          >
            Run Your Business on <G>One Intelligent Platform</G>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="max-w-[720px] space-y-2 font-sora text-[15px] leading-[24px] text-[#6366A8] sm:text-[16px]"
          >
            <p className="font-bold text-[#2C0E3A]">
              Disconnected tools slow businesses down.
            </p>
            <p className="font-normal">
              Formezy brings your processes, teams, and data into one unified Enterprise
              Application Platform… built for clarity, control, and scale.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className=""
        >
          <div className="w-full">
  <Image
    src={overviewWebp.hero}
    alt="Formezy business platform overview"
    width={1200}
    height={640}
    priority
    className="h-auto w-full object-contain"
  />
</div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── What is an EAP — centered copy; full-width illustration (previous style) ── */
function WhatIsEapSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
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
            className="font-sora text-[32px] font-bold leading-[1.12] tracking-tight text-[#2C0E3A] sm:text-[40px] md:text-[48px] md:leading-[1.1] lg:text-[56px] lg:leading-[1.08] xl:text-[60px] xl:leading-[70px]"
          >
            What is an <G>Enterprise Application Platform</G>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sora text-[15px] font-normal leading-[24px] text-[#6366A8] sm:text-[16px]"
          >
            An Enterprise Application Platform (EAP) is a unified system that helps businesses build, connect, and manage workflows, applications, and operations through one intelligent environment. It enables real-time visibility, automation, scalability, and operational control.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[15px] font-normal leading-[24px] text-[#6366A8] sm:text-[16px]"
          >
            Formezy is an AI-led EAP that helps businesses streamline operations, improve efficiency, and enable faster, data-driven decision-making.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 w-full md:mt-14 lg:mt-16"
        >
          <div className="relative mx-auto w-full max-w-5xl">
            <div className="relative aspect-[1200/560] w-full">
              <Image
                src={overviewWebp.enterpriseApplication}
                alt="Enterprise Application Platform — unified ecosystem"
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const whyBullets = [
  "Connecting teams and processes in one system",
  "Structuring workflows across departments",
  "Eliminating manual follow-ups and silos",
  "Providing real-time operational visibility",
];

/* ── Why businesses — centered row: image nudged left, copy card nudged right ── */
function WhyEapSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app">
        <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-12 lg:mb-14">
          <h2 className="max-w-[920px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px]">
            Why Businesses <G>Need an EAP Today</G>
          </h2>
          <p
            className="max-w-[720px] font-rancho text-[26px] leading-snug text-purple-primary sm:text-[30px] md:text-[32px] lg:text-[34px]"
            style={{
              WebkitTextStroke: "0.3px rgba(15, 15, 26, 0.3)",
              paintOrder: "stroke fill",
            }}
          >
            It&apos;s not about adding more tools; it&apos;s about bringing everything
            together.
          </p>
        </div>

        {/* Centered pair: image slightly left, copy card slightly right (overlap on md+) */}
        
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center md:flex-row md:items-stretch md:justify-center" style={{ alignItems: "center" }}>

          {/* LEFT IMAGE */}
          <div className="relative z-0 w-full md:w-[65%] lg:w-[75%]">
            <div className="relative h-full overflow-hidden">

              <Image
                src="/images/overview/Webp/businesses_eap.webp"
                alt="Why businesses need an Enterprise Application Platform today"
                width={1080}
                height={652}
                className="h-full w-full object-cover"
              />

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10 mt-6 w-full md:mt-0 md:w-[35%] lg:w-[30%] md:-ml-16"
          style={{ height: "fit-content" }}
          >
            <div className="rounded-[20px] border border-purple-100/90 bg-white p-6 shadow-[0_16px_48px_rgba(44,14,58,0.14)] md:rounded-[22px] md:p-7">
              <p className="font-sora text-[16px] leading-[24px] text-[#2C0E3A]">
                As businesses grow, so does complexity. Multiple tools, scattered
                communication, and manual workflows create delays and limit visibility.
              </p>
              <p className="mt-4 font-sora text-[16px] font-semibold leading-[24px] text-[#2C0E3A]">
                An Enterprise Application Platform solves this by:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {whyBullets.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 font-sora text-[15px] leading-relaxed text-[#6366A8] md:text-[16px]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Internal vs External — width × height tracks 1920×543 (543px at full artboard width) ── */
function SystemsVsAppsSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm" aria-labelledby="internal-vs-external-heading">
      <div className="container-app text-center">
        <motion.h2
          id="internal-vs-external-heading"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="font-sora text-[30px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[38px] md:text-[44px] lg:text-[48px]"
        >
          Internal Systems <G>VS</G> External Apps
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-3 max-w-2xl font-sora text-[15px] leading-[24px] text-[#6366A8] md:text-[16px]"
        >
          Internal systems versus external applications — unified with Formezy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 w-full overflow-hidden rounded-[20px] md:mt-12 md:rounded-[24px]"
        >
          <div className="relative mx-auto w-full max-w-[1920px] aspect-[1920/543] min-h-[200px]">
            <Image
              src={overviewWebp.internalVsExternal}
              alt="Internal systems versus external applications — unified with Formezy"
              fill
              sizes="(max-width: 1920px) 100vw, 1920px"
              className="object-contain object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Spreadsheets — larger cover image in container ── */
function SpreadsheetToSystemsSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto max-w-[900px] font-sora text-[30px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[38px] md:text-[44px] lg:text-[48px]"
        >
          From Spreadsheets to <G>Structured Systems</G>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto mt-3 max-w-2xl font-sora text-[15px] leading-[24px] text-[#6366A8] md:text-[16px]"
        >
          Move from fragile spreadsheets to governed, connected systems your teams can
          trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 w-full overflow-hidden rounded-[20px] md:mt-12 md:rounded-[24px]"
        >
          <div className="relative aspect-[16/9] min-h-[320px] w-full sm:min-h-[400px] md:aspect-[1200/680] md:min-h-[460px] lg:min-h-[520px] xl:min-h-[560px]">
            <Image
              src={overviewWebp.fromSpreadsheet}
              alt="From spreadsheets to structured systems with Formezy"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── CTA — 7 / 5 ── */
function ReadySection() {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-start gap-6 lg:col-span-7"
          >
            <motion.h2
              variants={fadeUp}
              className="text-left font-sora text-[28px] font-bold leading-[1.15] text-[#2C0E3A] sm:text-[34px] md:text-[38px] lg:text-[40px]"
            >
                Ready to Simplify and <G>Scale Your Operations?</G>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="flex max-w-xl flex-col gap-4 font-sora text-[15px] leading-[24px] text-[#6366A8] sm:text-[16px]"
            >
              <p className="font-normal text-[#2C0E3A]">
                Bring your workflows, communication, and data into one connected system
                with Formezy. Build your enterprise platform. Achieve more with clarity.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Book Demo <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative h-[220px] w-full max-w-[340px] sm:h-[260px] sm:max-w-[380px] lg:h-[280px] lg:max-w-[400px]">
              <Image
                src={overviewWebp.readyToSimplify}
                alt="Simplify and scale operations with Formezy on tablet and mobile"
                fill
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
