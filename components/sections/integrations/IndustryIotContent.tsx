"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { tailoredCrmWebp } from "@/lib/webp-assets";

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

export default function IndustryIotContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            aria-label="Breadcrumb"
            className="mb-8 inline-flex h-11 items-center gap-[10px] rounded-[50px] border border-[#E8E4FF] bg-white/90 px-5 py-[10px] font-sora text-[14px] font-medium text-[#6366A8] shadow-sm backdrop-blur-sm"
          >
            <Link href="/" className="transition-colors hover:text-[#6C60E8]">
              Home
            </Link>
            <span className="text-[#C4B5FD]" aria-hidden>
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
            <Link href="/integrations" className="transition-colors hover:text-[#6C60E8]">
              Integrations
            </Link>
            <span className="text-[#C4B5FD]" aria-hidden>
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
            <span className="text-[#2C0E3A]">Industry 4.0</span>
          </motion.nav>

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
              Enable Industry 4.0 <br className="hidden sm:block" />
              <G>Operations with Formezy</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[840px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Connect machines, shopfloor operations, production workflows, sensors, and operational intelligence into one digitally connected manufacturing ecosystem.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              <b>Smart Integrations for Connected Manufacturing</b>
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
                  src={tailoredCrmWebp.businessChallenges}
                  alt="Key Challenges in Smart Manufacturing"
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
                Business <G>Challenges</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Manufacturing environments often operate with disconnected machines, fragmented production visibility, delayed issue reporting, and manual monitoring processes, making operational coordination and real-time decision-making difficult.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Limited real-time shopfloor visibility",
                  "Disconnected machine and production data",
                  "Delayed issue detection and response",
                  "Reactive maintenance operations",
                  "Manual execution tracking",
                  "Lack of operational intelligence across production",
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

      {/* ── Section 3: Understanding the Solution ── */}
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
              What are <G>Industry 4.0 Integrations?</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[800px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Industry 4.0 integrations help businesses connect machines, production systems, IoT devices, workflows, and operational data to create a smart and connected manufacturing environment.
            </motion.p>
            <p className="text-[#2C0E3A] my-6 font-bold font-sora text-[18px]">
              Integration Capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mb-8">
              {[
                "Machine and PLC integrations",
                "IoT and sensor connectivity",
                "Real-time production monitoring",
                "Automated alerts and escalations",
                "Production analytics and reporting",
                "Shopfloor execution visibility",
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
              src={tailoredCrmWebp.whatIsTailoredTenant}
              alt="Industry 4.0 integrations Concept Diagram"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Key Capabilities ── */}
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
              Key <G>Capabilities</G>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                title: "Machine & IoT Connectivity",
                desc: "Connect production equipment, sensors, PLCs, and operational systems into one unified platform.",
              },
              {
                title: "Real-Time Production Monitoring",
                desc: "Track machine activity, production status, downtime, and operational performance in real time.",
              },
              {
                title: "Alerts & Workflow Automation",
                desc: "Automate issue reporting, escalations, maintenance coordination, and operational notifications.",
              },
              {
                title: "Operational Intelligence & Insights",
                desc: "Generate production dashboards, downtime analytics, utilization reports, and operational visibility.",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="rounded-[24px] border border-[#E8E4FF] bg-gradient-to-br from-white to-[#FAFBFF] p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-sora text-[22px] font-bold text-[#2C0E3A]">
                    {cap.title}
                  </h3>
                  <p className="mt-4 font-sora text-[15px] leading-[24px] text-[#6366A8]">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Example Workflows & How Formezy Enables It ── */}
      <section className="section bg-[#F8F9FF]/30">
        <div className="container-app">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* How Formezy Enables It */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  How Formezy <br />
                  <span className="text-[#6C63FF]">Enables It</span>
                </h3>
                <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6F6C90] mb-6">
                  Formezy EAP enables businesses to digitize and connect manufacturing operations with real-time monitoring, workflow automation, machine integrations, and centralized execution visibility.
                </p>
                <ul className="space-y-4">
                  {[
                    "Machine and IoT connectivity",
                    "Real-time operational dashboards",
                    "Workflow-driven alerts and escalations",
                    "Shopfloor activity tracking",
                    "Production analytics and insights",
                    "Mobile accessibility for operational teams",
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

            {/* Example Workflows */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Example <br />
                  <span className="text-[#6C63FF]">Workflows</span>
                </h3>
                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="font-sora text-[16px] font-bold text-[#1D0629]">
                      Production Visibility Workflow
                    </h4>
                    <div className="mt-2 text-[14px] font-sora text-[#6F6C90]">
                      Machine Activity → Real-Time Tracking → Alert Detection → Workflow Escalation → Dashboard Reporting
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sora text-[16px] font-bold text-[#1D0629]">
                      Smart Maintenance Workflow
                    </h4>
                    <div className="mt-2 text-[14px] font-sora text-[#6F6C90]">
                      Machine Alert → Maintenance Assignment → Inspection → Resolution → Operational Update
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Business Benefits & Industry Applications ── */}
      <section className="section bg-white pt-0">
        <div className="container-app">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Business Benefits */}
            <div className="rounded-[30px] border border-[#E8E4FF] bg-gradient-to-br from-[#FAFBFF] to-white p-8 md:p-12 shadow-sm">
              <h3 className="font-sora text-[24px] font-bold text-[#2C0E3A]">
                Business Benefits
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Improved shopfloor visibility",
                  "Faster issue identification and response",
                  "Reduced downtime and operational delays",
                  "Better production coordination",
                  "Improved execution tracking and control",
                  "Real-time operational intelligence",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sora text-[15px] text-[#6366A8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6C60E8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry Applications */}
            <div className="rounded-[30px] border border-[#E8E4FF] bg-gradient-to-br from-[#FAFBFF] to-white p-8 md:p-12 shadow-sm">
              <h3 className="font-sora text-[24px] font-bold text-[#2C0E3A]">
                Industry Applications
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Heavy Manufacturing",
                  "Process Industries",
                  "Engineering & Fabrication",
                  "Metal Processing",
                  "Industrial Production Operations",
                  "Smart Factory Environments",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sora text-[15px] text-[#6366A8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6C60E8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Why Formezy ── */}
      <section className="section bg-white pt-0">
        <div className="container-app">
          <div className="rounded-[32px] bg-gradient-to-br from-[#FAFAFE] to-[#F5F0FF] border border-purple-100 p-8 md:p-14 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-4">
                <span className="inline-flex max-w-fit items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                  Why Formezy
                </span>
                <h2 className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px]">
                  Smart Operational <G>Intelligence</G>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <ul className="space-y-3">
                  {[
                    "Industry 4.0-ready platform",
                    "Real-time execution visibility",
                    "Workflow-driven manufacturing operations",
                    "Flexible integration ecosystem",
                    "Enterprise-scale operational intelligence",
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

      {/* ── Section 8: Footer CTA ── */}
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
                Build Connected Manufacturing <G>Operations with Formezy</G>
              </h2>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide rounded-[10px]">
                  Book a Demo
                </Button>
                <Button size="lg" variant="secondary" className="h-14 px-10 text-[16px] font-bold tracking-wide rounded-[10px]">
                  Talk to Experts
                </Button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={tailoredCrmWebp.buildCrmWorksYourWay}
                alt="Industry 4.0 CTA Illustration"
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
