"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { heavyManufacturingWebp } from "@/lib/use-case-webp";

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

export default function HeavyManufacturingContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <PlatformBreadcrumb currentLabel="Heavy Manufacturing" />

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
              Built for Complex <br className="hidden sm:block" />
              <G>Heavy Manufacturing Operations</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[840px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Streamline large-scale, multi-layered manufacturing processes with structured workflows, real-time visibility, and complete operational control.
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

      {/* ── Section 2: Understanding & Key Challenges ── */}
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
                  src={heavyManufacturingWebp.intro}
                  alt="Understanding Heavy Manufacturing Operations"
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
                Key Challenges in <G>Heavy Manufacturing</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Heavy manufacturing businesses operate across multiple layers from production and procurement to compliance and coordination. Managing these operations manually or across disconnected systems leads to delays, inefficiencies, and lack of visibility.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Lack of real-time visibility across production and operations",
                  "Disconnected workflows between departments and units",
                  "Manual tracking of inventory, processes, and approvals",
                  "Delays due to poor coordination and communication",
                  "Difficulty managing multi-location operations",
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

      {/* ── Section 3: Formezy for Structured Operations ── */}
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
              Formezy For <G>Structured Operations</G>
            </motion.h2>
            <p className="text-[#2C0E3A] my-6 font-bold font-sora text-[18px]">
              Core Operations Managed
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mb-8">
              {[
                "Streamline production workflows from start to finish",
                "Automate approvals and operational processes",
                "Centralize communication across teams and departments",
                "Track operations in real time across units",
                "Maintain consistency across all processes",
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
              src={heavyManufacturingWebp.diagram}
              alt="Structured Heavy Manufacturing Concept"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Built for Every Heavy Manufacturing Vertical ── */}
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
              Built for Every <G>Heavy Manufacturing Vertical</G>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Metal",
                desc: "High-volume production and material movement require precision, consistency, and real-time tracking.",
                points: [
                  "Manage high-volume production workflows efficiently",
                  "Track inventory, processing, and dispatch in real time",
                  "Maintain consistency across operations",
                ],
              },
              {
                title: "Engineering",
                desc: "Project-based manufacturing demands coordination across design, production, and delivery stages.",
                points: [
                  "Structure project-based manufacturing processes",
                  "Coordinate across design, production, and delivery",
                  "Track progress and approvals seamlessly",
                ],
              },
              {
                title: "Foundry",
                desc: "Batch-based production and casting processes require standardization and controlled workflows.",
                points: [
                  "Standardize casting and production workflows",
                  "Monitor batch processes and material movement",
                  "Ensure operational consistency and control",
                ],
              },
              {
                title: "Mining",
                desc: "Operations spread across locations require centralized visibility and coordinated execution.",
                points: [
                  "Track operations across remote and distributed sites",
                  "Manage resources, processes, and reporting centrally",
                  "Improve coordination between on-site and management teams",
                ],
              },
              {
                title: "Oil & Gas",
                desc: "Highly regulated environments demand structured workflows, compliance, and operational visibility.",
                points: [
                  "Handle complex, compliance-driven operations",
                  "Maintain structured documentation and workflows",
                  "Ensure visibility across large-scale processes",
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
                    "Production planning and workflow management",
                    "Inventory and material tracking",
                    "Procurement and vendor coordination",
                    "Document management and compliance tracking",
                    "Internal communication across departments",
                    "Multi-location operations and reporting",
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

            {/* Business Impact */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Business <br />
                  <span className="text-[#6C63FF]">Impact</span>
                </h3>
                <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                  Formezy brings clarity and structure to heavy manufacturing operations.
                </p>
                <p className="mt-4 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                  It reduces delays, improves coordination, and ensures every process runs efficiently — enabling better control, faster execution, and scalable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Footer CTA ── */}
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
                Bring Structure to <G>Complex Manufacturing Operations</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Simplify, connect, and optimize your workflows with Formezy.
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
                src={heavyManufacturingWebp.cta}
                alt="Heavy Manufacturing CTA Illustration"
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
