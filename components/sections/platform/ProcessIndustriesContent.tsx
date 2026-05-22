"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { processIndustriesWebp } from "@/lib/use-case-webp";

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

export default function ProcessIndustriesContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <PlatformBreadcrumb currentLabel="Process Industries" />

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-full"
          >
            <motion.h1
              variants={fadeUp}
              className="font-sora text-[40px] font-bold leading-[1.1] text-[#2C0E3A] sm:text-[48px] md:text-[56px] lg:text-[64px]"
            >
              Built for Controlled, <br className="hidden sm:block" />
              <G>Process-Driven Operations</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[840px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Standardize, monitor, and optimize your manufacturing processes with structured workflows, real-time visibility, and complete control.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              <b>Powered by Formezy EAP</b>
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Key Challenges ── */}
      <section className="section">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-gradient-to-br from-[#EEF4FF] to-[#F5F0FF] p-2 shadow-sm">
                <Image
                  src={processIndustriesWebp.businessChallenges}
                  alt="Key Challenges in Process Manufacturing"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-[18px]"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[40px]"
              >
                Key Challenges in <G>Process Manufacturing</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Process manufacturing relies on consistency, precision, and compliance across every stage of production. Managing batches, formulations, and quality across disconnected systems often leads to inefficiencies, errors, and a lack of visibility.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Inconsistent processes across batches and production cycles",
                  "Limited visibility into production and quality control",
                  "Manual tracking of formulations, materials, and outputs",
                  "Compliance and documentation challenges",
                  "Delays due to a lack of coordination across teams",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-3 font-sora text-[15px] text-[#6366A8]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: How Formezy Brings Structure to Processes ── */}
      <section className="section bg-[#F8F9FF]/50">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]"
            >
              How Formezy Brings <G>Structure to Processes</G>
            </motion.h2>
            <p className="text-[#2C0E3A] my-6 font-bold font-sora text-[18px]">
              Platform Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mb-8">
              {[
                "Standardize workflows across batches and operations",
                "Automate approvals and production processes",
                "Centralize data, documentation, and communication",
                "Track production and quality in real time",
                "Maintain consistency across all outputs",
              ].map((cap) => (
                <span
                  key={cap}
                  className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-white shadow-xl"
          >
            <Image
              src={processIndustriesWebp.whatIs}
              alt="Structured Process Manufacturing Concept"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Designed for Every Process Manufacturing Vertical ── */}
      <section className="section bg-white">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-12 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[40px]"
            >
              Designed for Every <G>Process Manufacturing Vertical</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[800px] font-sora text-[15px] leading-[24px] text-[#6366A8]"
            >
              Process manufacturing spans multiple industries, each with its own requirements for consistency, compliance, and control. Formezy adapts to these needs, ensuring structured, traceable, and efficient operations across every segment.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Chemicals",
                desc: "Complex formulations and controlled processes require precision and consistent execution.",
                points: [
                  "Standardize production workflows and formulations",
                  "Track raw materials and chemical processes",
                  "Ensure consistency across batches",
                  "Monitor safety and compliance requirements",
                ],
              },
              {
                title: "Pharmaceuticals",
                desc: "Highly regulated environments demand strict compliance, traceability, and documentation.",
                points: [
                  "Maintain compliance-driven workflows",
                  "Track batch production and quality control",
                  "Manage documentation and approvals centrally",
                  "Ensure audit readiness and traceability",
                ],
              },
              {
                title: "Food & Beverages",
                desc: "Consistency, quality, and safety are critical across every stage of production.",
                points: [
                  "Standardize production and quality processes",
                  "Track ingredients and batch outputs",
                  "Ensure compliance with safety standards",
                  "Monitor production consistency across units",
                ],
              },
              {
                title: "Plastics & Polymers",
                desc: "Material consistency and process control are essential for quality output.",
                points: [
                  "Track material usage and production cycles",
                  "Maintain consistency across manufacturing processes",
                  "Monitor production efficiency and outputs",
                  "Manage workflows across production stages",
                ],
              },
              {
                title: "Paints & Coatings",
                desc: "Formulation accuracy and batch consistency are key to product quality.",
                points: [
                  "Manage formulation-based production workflows",
                  "Track batch-level production and outputs",
                  "Ensure consistency in product quality",
                  "Control inventory and material usage",
                ],
              },
              {
                title: "Paper & Packaging",
                desc: "High-volume production requires streamlined processes and material tracking.",
                points: [
                  "Monitor production workflows across units",
                  "Track raw materials and finished goods",
                  "Improve coordination across production stages",
                  "Maintain consistency in output quality",
                ],
              },
            ].map((vertical) => (
              <div
                key={vertical.title}
                className="rounded-[24px] border border-[#E8E4FF] bg-gradient-to-br from-white to-[#FAFBFF] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-sora text-[22px] font-bold text-[#2C0E3A]">
                    {vertical.title}
                  </h3>
                  <p className="mt-3 font-sora text-[14px] leading-[22px] text-[#6366A8]">
                    {vertical.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {vertical.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 font-sora text-[13px] text-[#6366A8]">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: What You Can Manage & Business Impact ── */}
      <section className="section bg-[#F8F9FF]/30">
        <div className="container-app">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* What You Can Manage with Formezy */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  What You Can <br />
                  <span className="text-[#6C63FF]">Manage with Formezy</span>
                </h3>
                <ul className="mt-8 space-y-4">
                  {[
                    "Batch production and process workflows",
                    "Raw material and inventory tracking",
                    "Quality control and compliance processes",
                    "Documentation and approval workflows",
                    "Internal coordination across teams",
                    "Multi-unit production management",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9D94EF]" />
                      <p className="font-sora text-[15px] leading-[24px] text-[#6F6C90]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Take Control of Your Entire Process */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Take Control of <br />
                  <span className="text-[#6C63FF]">Your Entire Process</span>
                </h3>
                <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                  Formezy brings clarity and control to process manufacturing operations.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Standardize processes across production cycles",
                    "Ensure consistency in output and quality",
                    "Reduce manual tracking and errors",
                    "Improve coordination across teams and units",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-sora text-[14px] text-[#6F6C90]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9D94EF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Business Impact ── */}
      <section className="section bg-white pt-0">
        <div className="container-app">
          <div className="rounded-[32px] bg-gradient-to-br from-[#FAFAFE] to-[#F5F0FF] border border-purple-100 p-8 md:p-14 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-4">
                <span className="inline-flex max-w-fit items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                  Business Impact
                </span>
                <h2 className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px]">
                  Powering Precise <G>Process Execution</G>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                  Formezy transforms process manufacturing by introducing structure, visibility, and control.
                </p>
                <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                  It improves consistency, reduces inefficiencies, and ensures every process runs with precision, enabling scalable and compliant operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Footer CTA ── */}
      <section className="section pt-0">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-gradient-to-br from-[#F5F0FF] to-[#EEF4FF] pt-16 text-center shadow-lg"
          >
            <div className="relative z-10 px-6">
              <h2 className="mx-auto max-w-[800px] font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]">
                Bring Precision to <G>Every Process</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Simplify, standardize, and optimize your manufacturing operations with Formezy.
              </p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide rounded-[10px]">
                  Book a Demo
                </Button>
                <Button size="lg" variant="secondary" className="h-14 px-10 text-[16px] font-bold tracking-wide rounded-[10px]">
                  Talk to an Expert
                </Button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={processIndustriesWebp.cta}
                alt="Process Manufacturing CTA Illustration"
                width={1200}
                height={600}
                className="mx-auto h-auto w-full rounded-t-[20px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
