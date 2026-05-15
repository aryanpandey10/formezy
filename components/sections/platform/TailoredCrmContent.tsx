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

export default function TailoredCrmContent() {
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
            <Link href="/platform/use-cases" className="transition-colors hover:text-[#6C60E8]">
              Use Cases
            </Link>
            <span className="text-[#C4B5FD]" aria-hidden>
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
            <span className="text-[#2C0E3A]">Tailored CRM</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-[800px]"
          >
            <motion.h1
              variants={fadeUp}
              className="font-sora text-[40px] font-bold leading-[1.1] text-[#2C0E3A] sm:text-[48px] md:text-[56px] lg:text-[64px]"
            >
              Build a Tailored <br className="hidden sm:block" />
              <G>CRM Your Business</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Formezy CRM is built to match how your sales, success and marketing teams actually
              work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Business Challenges ── */}
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
                  alt="Business Challenges Illustration"
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
              <motion.p variants={fadeUp} className="font-sora text-[16px] text-[#6366A8]">
                No more forcing your business into rigid CRM software that doesn&apos;t fit your unique
                sales processes.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Complex, non-standard sales cycles",
                  "Scattered customer data across tools",
                  "Lack of real-time pipeline visibility",
                  "Manual entry and fragmented reporting",
                  "Rigid structures that don't scale",
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

      {/* ── Section 3: What Is a Tailored CRM ── */}
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
              What Is a Tailored <br className="hidden sm:block" />
              <G>Tenant Management System</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              A tailored CRM is an enterprise-grade system that adapts to your specific sales
              workflows, data models and reporting requirements—so you run on connected systems
              instead of scattered tools.
            </motion.p>
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
              alt="Tailored CRM Workflow"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: How Formezy Enables It ── */}
      <section className="section">
        <div className="container-app">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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
                How Formezy <br />
                <G>Enables It</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] text-[#6366A8]">
                Build a CRM that actually works for your business by defining exactly how data flows
                and how teams collaborate.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Custom Data Models & Fields",
                  "Automated Sales Workflows",
                  "Role-Based Access Controls",
                  "Real-Time Pipeline Analytics",
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-white p-2 shadow-sm">
                <Image
                  src={tailoredCrmWebp.howFormezyEnables}
                  alt="How Formezy Enables It Illustration"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-[18px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Real Workflow in Action ── */}
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
              Real Workflow <G>in Action</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              See how Formezy connects every stage of your customer journey—from lead acquisition to
              deal closure and beyond.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-white shadow-lg"
          >
            <Image
              src={tailoredCrmWebp.realWorkflow}
              alt="Real Workflow Illustration"
              width={1200}
              height={500}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Grid Sections ── */}
      <section className="section">
        <div className="container-app">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "What You Can Build and Manage",
                items: [
                  "Custom Lead & Opportunity Pipelines",
                  "Automated Lead Routing & Scoring",
                  "Client Portal & Case Management",
                  "Advanced Reporting & Forecasting",
                ],
              },
              {
                title: "Industry Applications",
                gradientTitle: "Applications",
                titleStart: "Industry",
                items: [
                  "Discrete & Process Manufacturing",
                  "Retail & E-commerce",
                  "Real Estate & Construction",
                  "Professional & Financial Services",
                ],
              },
              {
                title: "Business Impact",
                gradientTitle: "Impact",
                titleStart: "Business",
                items: [
                  "Higher Lead-to-Deal Conversion",
                  "30% Faster Sales Cycle Velocity",
                  "Full Visibility Into Team Performance",
                  "Eliminate Data Silos & Manual Entry",
                ],
              },
              {
                title: "Why Formezy",
                gradientTitle: "Formezy",
                titleStart: "Why",
                items: [
                  "Designed for Enterprise-Grade Workflows",
                  "No-Code Customization with Scalability",
                  "Security First — RBAC & Audit Trails",
                  "Unified Data Across All Business Units",
                ],
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-[24px] border border-[#E8E4FF] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-6 font-sora text-[24px] font-bold leading-tight text-[#2C0E3A]">
                  {card.titleStart ? (
                    <>
                      {card.titleStart} <G>{card.gradientTitle}</G>
                    </>
                  ) : (
                    card.title
                  )}
                </h3>
                <ul className="flex flex-col gap-4">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sora text-[15px] text-[#6366A8]">
                      <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
                Build a CRM That <G>Works Your Way</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Deploy a custom sales system designed for your business in weeks, not months.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide">
                  START NOW
                </Button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={tailoredCrmWebp.buildCrmWorksYourWay}
                alt="Build a CRM That Works Your Way Illustration"
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
