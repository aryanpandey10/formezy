"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { retailIndustryWebp } from "@/lib/use-case-webp";

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

export default function RetailIndustryContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <PlatformBreadcrumb currentLabel="Retail Industry" />

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
              Connected Retail <br className="hidden sm:block" />
              <G>Operations with Formezy</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[840px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Digitize retail workflows, inventory visibility, store operations, approvals, and customer coordination through one connected operational platform.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              <b>Powered by Formezy EAP</b>
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
               <Button   href="#demo"   size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Industry Challenges ── */}
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
                  src={retailIndustryWebp.businessChallenges}
                  alt="Retail Industry Challenges"
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
                Retail Industry <G>Challenges</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Retail businesses often struggle with fragmented store operations, inventory inconsistencies, disconnected workflows, and limited visibility across locations, making coordination and operational control difficult.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Inventory mismatches across stores",
                  "Delayed replenishment coordination",
                  "Limited operational visibility",
                  "Manual approvals and workflows",
                  "Disconnected retail operations",
                  "Slow reporting and decision-making",
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

      {/* ── Section 3: Retail Operations with Formezy ── */}
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
              Retail Operations <G>with Formezy</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Formezy helps retail businesses streamline store operations, inventory management, approvals, communication, and operational coordination through connected and workflow-driven systems.
            </motion.p>
            <p className="text-[#2C0E3A] my-6 font-bold font-sora text-[18px]">
              Core Capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mb-8">
              {[
                "Inventory and stock visibility",
                "Store workflow automation",
                "Billing and operational coordination",
                "Approval and escalation workflows",
                "Reporting and operational insights",
                "Multi-location retail visibility",
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

            <p className="text-[#2C0E3A] mt-8 mb-8 font-bold font-sora text-[18px]">
              How It Works in Practice
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-white shadow-xl"
          >
            <Image
              src={retailIndustryWebp.whatIs}
              alt="Retail Operations Concept"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Retail Verticals ── */}
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
              Tailored for Every <G>Retail Vertical</G>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                title: "Fashion & Apparel Retail",
                desc: "Manage inventory, store operations, approvals, and customer coordination across retail outlets with improved visibility and operational control.",
                points: [
                  "Multi-store inventory visibility",
                  "Faster replenishment coordination",
                  "Better stock movement tracking",
                  "Improved operational synchronization",
                ],
              },
              {
                title: "Electronics & Consumer Retail",
                desc: "Digitize sales coordination, inventory workflows, operational approvals, and reporting visibility across electronics and consumer retail operations.",
                points: [
                  "Improved product visibility",
                  "Better inventory coordination",
                  "Faster operational reporting",
                  "Centralized workflow management",
                ],
              },
              {
                title: "Grocery & FMCG Retail",
                desc: "Streamline inventory movement, replenishment workflows, store coordination, and operational tracking across high-volume retail environments.",
                points: [
                  "Real-time stock visibility",
                  "Improved replenishment workflows",
                  "Better operational coordination",
                  "Faster inventory tracking",
                ],
              },
              {
                title: "Lifestyle & Specialty Retail",
                desc: "Manage approvals, customer workflows, inventory coordination, and operational reporting across specialty and lifestyle retail operations.",
                points: [
                  "Better workflow visibility",
                  "Improved operational coordination",
                  "Centralized retail operations",
                  "Enhanced reporting and control",
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

      {/* ── Section 5: How Formezy Enables Retail Operations ── */}
      <section className="section bg-[#F8F9FF]/30">
        <div className="container-app">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Formezy Capabilities */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  How Formezy Enables <br />
                  <span className="text-[#6C63FF]">Retail Operations</span>
                </h3>
                <ul className="mt-8 space-y-4">
                  {[
                    "Workflow automation",
                    "Inventory synchronization",
                    "Multi-location visibility",
                    "Real-time operational dashboards",
                    "Mobile operational access",
                    "Alerts and escalation workflows",
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

            {/* Business Benefits */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Business <br />
                  <span className="text-[#6C63FF]">Benefits</span>
                </h3>
                <ul className="mt-8 space-y-4">
                  {[
                    "Improved retail visibility",
                    "Faster inventory coordination",
                    "Better operational control",
                    "Reduced manual workflows",
                    "Improved decision-making",
                    "Centralized retail governance",
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
          </div>
        </div>
      </section>

      {/* ── Section 6: Why Formezy ── */}
      <section className="section bg-white pt-0">
        <div className="container-app">
          <div className="rounded-[32px] bg-gradient-to-br from-[#FAFAFE] to-[#F5F0FF] border border-purple-100 p-8 md:p-14 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-4">
                <span className="inline-flex max-w-fit items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                  Why Formezy
                </span>
                <h2 className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px]">
                  An Enterprise platform <G>for modern Retail</G>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <ul className="space-y-3">
                  {[
                    "Tailored retail workflows",
                    "Multi-location operational visibility",
                    "Workflow-driven coordination",
                    "Real-time inventory tracking",
                    "Flexible enterprise platform",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3 font-sora text-[16px] text-[#6366A8]">
                      <span className="h-2 w-2 rounded-full bg-[#6C60E8]" />
                      {p}
                    </li>
                  ))}
                </ul>
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
                Simplify Retail Operations <G>with Formezy</G>
              </h2>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Button href="#demo" size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide rounded-[10px]">
                  Book a Demo
                </Button>
                
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={retailIndustryWebp.cta}
                alt="Retail CTA Illustration"
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
