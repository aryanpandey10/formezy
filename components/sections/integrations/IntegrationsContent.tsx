"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
            <Check size={11} strokeWidth={2.5} />
          </span>
          <span className="font-sora text-[14px] leading-[22px] text-[#6366A8]">{b}</span>
        </li>
      ))}
    </ul>
  );
}

const faqs: AccordionItem[] = [
  {
    id: "1",
    question: "What types of integrations does Formezy support?",
    answer: "Formezy supports API integrations, ERP integrations, and third-party tool integrations, allowing businesses to connect their entire ecosystem into one unified platform.",
  },
  {
    id: "2",
    question: "Can Formezy integrate with my existing business tools?",
    answer: "Yes, Formezy is designed to integrate with commonly used tools such as CRMs, accounting software, and other business applications to ensure seamless data flow.",
  },
  {
    id: "3",
    question: "Do I need technical expertise to set up integrations?",
    answer: "Not necessarily. While advanced integrations can use APIs, many connections can be configured easily, depending on your system requirements.",
  },
  {
    id: "4",
    question: "How do API integrations benefit my business operations?",
    answer: "API integrations enable real-time data exchange between systems, reduce manual work, and ensure your business processes remain connected and efficient.",
  },
  {
    id: "5",
    question: "Will Formezy replace my existing ERP system?",
    answer: "No, Formezy works alongside your ERP system to enhance it by adding workflow automation, communication, and document management capabilities.",
  },
  {
    id: "6",
    question: "Are integrations secure in Formezy?",
    answer: "Yes, Formezy ensures secure data exchange through controlled access, system-level permissions, and structured integration protocols.",
  },
];

export default function IntegrationsContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero ── */}
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
            <span className="text-[#2C0E3A]">Integrations</span>
          </motion.nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="flex flex-col items-start gap-6"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                  Ecosystem Integration
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-sora text-[40px] font-bold leading-[1.1] text-[#2C0E3A] sm:text-[48px] md:text-[56px] lg:text-[64px]"
              >
                The Integration Layer <br />
                <G>Your Business Was Missing</G>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="max-w-[540px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
              >
                Bring your systems, tools, and data together into one unified platform with Formezy.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-[10px]">
                  Book a Demo <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-gradient-to-br from-[#EEF4FF] to-[#F5F0FF] p-2 shadow-sm">
                <Image
                  src={tailoredCrmWebp.businessChallenges}
                  alt="Ecosystem Integrations with Formezy"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-[18px]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Overview (Built for a Connected Business Environment) ── */}
      <section className="section bg-[#F8F9FF]/30">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-5 text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                Overview
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[44px]"
            >
              Built for a <G>Connected Business Environment</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Most businesses today rely on multiple tools, but when those systems don’t communicate, operations become fragmented. Formezy unifies your ecosystem by connecting workflows, data, and systems into one continuous flow. It ensures information moves seamlessly, reducing inefficiencies and improving visibility across operations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                "Eliminate system silos",
                "Enable real-time data flow",
                "Reduce manual data transfer",
                "Improve cross-team visibility",
              ].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 rounded-[50px] border border-[#E8E4FF] bg-white px-5 py-2.5 font-sora text-[14px] font-medium text-[#6366A8] shadow-sm"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  {p}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Third-Party Integrations with API ── */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                  API Integration
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[40px]"
              >
                Third-Party Integrations <br/> <G>with API</G>
              </motion.h2>
              <motion.h6
                variants={fadeUp}
                className="font-sora text-[12px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[20px]"
              >
                Connect Your Business Ecosystem
              </motion.h6>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Integrate Formezy with ERP systems, accounting platforms, communication tools, APIs, and operational applications to create a connected and synchronized enterprise environment.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList
                  items={[
                    "Enable seamless system connectivity",
                    "Automate cross-platform workflows",
                    "Improve operational visibility",
                    "Synchronize data in real time",
                  ]}
                />
              </motion.div>
              <motion.div variants={fadeUp} className="pt-2">
                <Button href="/integrations/third-party-api" variant="secondary" className="rounded-[10px]">
                  Explore APIs & Connectors <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-gradient-to-br from-[#EEF4FF] to-[#F5F0FF] p-2 shadow-sm">
                <Image
                  src={tailoredCrmWebp.buildCrmWorksYourWay}
                  alt="Third-Party Integrations"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-[18px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 4: IoT Integration (Industry 4.0) ── */}
      <section className="section bg-[#F8F9FF]/30">
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
                  src={tailoredCrmWebp.realWorkflow}
                  alt="IoT Smart Manufacturing Integrations"
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
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                  IoT Integration
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[40px]"
              >
                Industry <G>4.0 Integration</G>
              </motion.h2>
              <motion.h6
                variants={fadeUp}
                className="font-sora text-[12px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[20px]"
              >
                Connect Smart Manufacturing Operations
              </motion.h6>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Integrate machines, IoT devices, production systems, and shopfloor operations with Formezy to enable real-time monitoring, operational intelligence, and connected manufacturing workflows.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList
                  items={[
                    "Improve shopfloor visibility",
                    "Enable real-time production tracking",
                    "Automate alerts and escalations",
                    "Connect machines and operational systems",
                  ]}
                />
              </motion.div>
              <motion.div variants={fadeUp} className="pt-2">
                <Button href="/integrations/industry-4-0" variant="secondary" className="rounded-[10px]">
                  Explore Industry 4.0 <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 5: ERP Integrations ── */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center rounded-[50px] border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-[#6C60E8]">
                  ERP Integrations
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[40px]"
              >
                Enhance What <G>You Already Have</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Formezy strengthens your existing ERP by adding workflow automation, communication, and document management capabilities. It bridges operational gaps and ensures smoother execution across departments without replacing your current system.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList
                  items={[
                    "Extend ERP functionality",
                    "Improve workflow execution",
                    "Connect departments seamlessly",
                    "Enhance data visibility",
                  ]}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-gradient-to-br from-[#EEF4FF] to-[#F5F0FF] p-2 shadow-sm">
                <Image
                  src={tailoredCrmWebp.whatIsTailoredTenant}
                  alt="ERP Integrations with Formezy"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-[18px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="section pt-0">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-gradient-to-br from-[#F5F0FF] to-[#EEF4FF] pt-16 text-center shadow-lg"
          >
            <div className="relative z-10 px-6 pb-16">
              <h2 className="mx-auto max-w-[800px] font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]">
                Ready to Connect Your <G>Entire Business Ecosystem?</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Unify your tools, systems, and workflows with Formezy. Build a connected platform. Achieve more with clarity.
              </p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide rounded-[10px]">
                  Build a Connected Platform
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 7: FAQ ── */}
      <section className="section bg-[#F8F9FF]/20">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-5 text-center"
          >
            <h2 className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]">
              Frequently <G>Asked Questions</G>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <Accordion items={faqs} defaultOpen="1" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}