"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { companyPageImages } from "@/lib/page-section-images";
import { cn } from "@/lib/cn";

/* ── helpers ── */
const G = ({ children }: { children: React.ReactNode }) => (
  <span
    className="bg-gradient-to-b from-[#708FF4] to-[#6C60E8] bg-clip-text text-transparent"
  >
    {children}
  </span>
);

function Bullet({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3.5">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white shadow-sm">
            <Check size={13} strokeWidth={3} />
          </span>
          <span className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
}

const ScriptText = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={cn("font-rancho text-[26px] text-[#6366A8] md:text-[34px]", className)}>
    {children}
  </p>
);

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

export default function CompanyContent() {
  return (
    <main className="flex flex-col">
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden pt-[60px] pb-0 md:pt-[80px]">
        {/* Transparent section to let HomeBG show */}
        <div className="container-app relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center rounded-full border border-purple-100 bg-white/80 px-4 py-1.5 font-sora text-[13px] font-bold text-purple-primary shadow-sm"
            >
              Enterprise Systems
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[44px] font-bold leading-[1.1] text-[#2C0E3A] sm:text-[54px] md:text-[64px] lg:text-[76px]"
            >
              Enterprise <G>Systems, Reimagined</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-[800px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[19px]"
            >
              Formezy helps businesses move beyond disconnected tools and build a unified, intelligent way of operating — built around how you actually work.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12 w-full">
              <div className="relative aspect-[21/9] w-full overflow-hidden">
                <Image
                  src={companyPageImages.hero}
                  alt="Enterprise systems reimagined with Formezy"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Who We Are ── */}
      <section className="section bg-white/60 py-20 md:py-28 backdrop-blur-[2px]">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[54px]"
            >
              Who <G>We Are</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-8 font-sora text-[17px] leading-[30px] text-[#6366A8] md:text-[20px]"
            >
              Formezy is an Enterprise Application Platform (EAP) built to bring structure, automation and intelligence into business operations — so growth doesn&apos;t mean growing complexity.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12">
              <ScriptText>
                From fragmented operations • To system-driven execution.
              </ScriptText>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Why EAP Matters Today ── */}
      <section className="section bg-white/90 py-24 backdrop-blur-sm">
        <div className="container-app">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden rounded-[40px] border border-purple-100 bg-white p-2 shadow-card"
            >
              <Image
                src={companyPageImages.whyEap}
                alt="Why EAP Matters Today"
                fill
                className="object-contain p-8 md:p-12"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col items-start"
            >
              <motion.h2 variants={fadeUp} className="font-sora text-[36px] font-bold text-[#2C0E3A] md:text-[48px]">
                Why EAP Matters Today
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 font-sora text-[16px] leading-relaxed text-[#6366A8] md:text-[18px]">
                Most businesses of 50+ operate across disconnected systems — an ERP here, a CRM there, spreadsheets everywhere. The cost isn&apos;t the tools. It&apos;s the coordination that never quite happens between them.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <Bullet items={whyEap} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Our Approach ── */}
      <section className="section bg-white/90 py-24 backdrop-blur-sm">
        <div className="container-app">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="order-2 flex flex-col items-start lg:order-1"
            >
              <motion.h2 variants={fadeUp} className="font-sora text-[36px] font-bold text-[#2C0E3A] md:text-[48px]">
                Our <G>Approach</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 font-sora text-[16px] leading-relaxed text-[#6366A8] md:text-[18px]">
                We believe systems should adapt to businesses, not the other way around. Formezy provides the flexibility to build your way without compromise.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <Bullet items={approach} />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
              className="order-1 relative aspect-square overflow-hidden rounded-[40px] border border-purple-100 bg-white p-2 shadow-card lg:order-2"
            >
              <Image
                src={companyPageImages.approach}
                alt="Our Approach"
                fill
                className="object-contain p-8 md:p-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. Vision + Mission ── */}
      <section className="section bg-white/90 py-24 backdrop-blur-sm">
        <div className="container-app">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="rounded-[40px] border border-purple-100 bg-white p-10 md:p-16 shadow-sm"
            >
              <h2 className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[42px]">
                Our <G>Vision</G>
              </h2>
              <p className="mt-6 font-sora text-[16px] leading-relaxed text-[#6366A8] md:text-[18px]">
                To redefine how businesses build and operate systems, moving beyond silos to unified intelligence.
              </p>
              <div className="mt-10">
                <Bullet items={vision} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2 }}
              className="rounded-[40px] border border-purple-100 bg-white p-10 md:p-16 shadow-sm"
            >
              <h2 className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[42px]">
                Our <G>Mission</G>
              </h2>
              <p className="mt-6 font-sora text-[16px] leading-relaxed text-[#6366A8] md:text-[18px]">
                To simplify business operations by connecting workflows, communication and data into one system.
              </p>
              <div className="mt-10">
                <Bullet items={mission} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. Beyond Traditional Software ── */}
      <section className="section bg-white/95 py-24 md:py-32 backdrop-blur-sm">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[54px]"
            >
              Beyond <G>Traditional Software</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl font-sora text-[16px] leading-relaxed text-[#6366A8] md:text-[18px]"
            >
              Standard software forces you into boxes. Formezy builds the platform that scales with your unique complexity.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-16 w-full max-w-[1000px]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-purple-100 bg-white p-2 shadow-xl">
                <Image
                  src={companyPageImages.beyond}
                  alt="Beyond Traditional Software"
                  fill
                  className="object-contain p-4 md:p-8"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12">
              <ScriptText>
                Not just managing operations, but controlling and optimizing them.
              </ScriptText>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Built for Scalable Operations ── */}
      <section className="section bg-white/95 py-24 backdrop-blur-sm">
        <div className="container-app">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden rounded-[40px] border border-purple-100 bg-white p-2 shadow-card"
            >
              <Image
                src={companyPageImages.scalable}
                alt="Built for Scalable Operations"
                fill
                className="object-contain p-8 md:p-12"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col items-start"
            >
              <motion.h2 variants={fadeUp} className="font-sora text-[36px] font-bold text-[#2C0E3A] md:text-[48px]">
                Built for <G>Scalable Operations</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 font-sora text-[16px] leading-relaxed text-[#6366A8] md:text-[18px]">
                As businesses grow, operations become more complex. Formezy ensures that growth doesn&apos;t lead to chaos by providing a structured system.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <Bullet items={scalable} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA Section (Mirrored from Home page BuildErp style) ── */}
      <section className="section bg-transparent py-24 md:py-32">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[560px] overflow-hidden rounded-[48px] border border-purple-100 shadow-[0_8px_48px_rgba(108,96,232,0.12)] md:min-h-[660px] lg:min-h-[760px]"
          >
            {/* Background image — fill & bottom anchored */}
            <Image
              src={companyPageImages.cta}
              alt="Ready to move beyond traditional systems"
              fill
              className="object-cover object-bottom"
            />

            {/* Content area */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="relative z-10 flex flex-col items-center gap-8 px-6 pt-16 text-center md:px-16 md:pt-20"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[36px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[52px] lg:text-[62px]"
              >
                Ready to Move <br />
                <G>Beyond Traditional Systems?</G>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-[680px] font-sora text-[17px] leading-[28px] text-[#6366A8] md:text-[19px]"
              >
                An Enterprise Application Platform ensures your business runs on common rules and standards. Achieve more with Formezy.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-4">
                <Button href="#demo" size="lg" className="rounded-[12px] px-14 py-4 text-[18px]">
                  Book a Demo <ArrowRight size={20} className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
