"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { crmSystemWebp } from "@/lib/use-case-webp";

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

export default function CrmSystemContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <PlatformBreadcrumb currentLabel="CRM System" />

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
              Build a Tailored <br className="hidden sm:block" />
              <G>CRM System for Your Business</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[800px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Manage leads, customer interactions, sales pipelines, and follow-ups with structured workflows, real-time visibility, and complete customer coordination.
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
                  src={crmSystemWebp.businessChallenges}
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
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Managing customer relationships across disconnected systems leads to missed opportunities, delayed follow-ups, and poor visibility.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Scattered lead and customer information",
                  "Limited visibility into sales pipelines",
                  "Missed follow-ups and delayed responses",
                  "Disconnected communication workflows",
                  "Manual tracking of sales activities",
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
              What Is a <G>Tailored CRM System</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              A tailored CRM System is built around how your business manages leads, customers, communication, and sales operations.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              It helps businesses streamline customer interactions, improve sales coordination, and maintain complete visibility across the customer lifecycle.
            </motion.p>
            <p className="text-[#2C0E3A] my-6 font-bold font-sora text-[18px]">
              Core Capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mb-8">
              {[
                "Lead and opportunity management",
                "Sales pipeline tracking",
                "Customer communication management",
                "Follow-up and task coordination",
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
              src={crmSystemWebp.whatIs}
              alt="Tailored CRM System Concept"
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
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Formezy allows you to build a CRM system that aligns with your customer management workflows and operational structure.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Low-code customization for CRM workflows",
                  "Automation across follow-ups and sales activities",
                  "Role-based access for sales and customer teams",
                  "Integration with communication and operational systems",
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
                  src={crmSystemWebp.howFormezyEnables}
                  alt="How Formezy Enables CRM Illustration"
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
              See how a tailored CRM system works in a real business scenario:
            </motion.p>
            <p className="text-[#2C0E3A] mt-6 font-bold font-sora text-[18px]">
              Customer Management Workflow
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mt-4 mb-8">
              {[
                "Lead captured and assigned",
                "Opportunity created and tracked",
                "Sales follow-ups managed through workflows",
                "Deal updated and customer communication tracked",
              ].map((step, idx) => (
                <span
                  key={step}
                  className="flex items-center gap-2 font-sora text-[15px] font-semibold text-[#6C60E8]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6C60E8] text-white text-[12px]">
                    {idx + 1}
                  </span>
                  {step}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-white shadow-lg"
          >
            <Image
              src={crmSystemWebp.realWorkflow}
              alt="Real CRM Workflow Diagram"
              width={1200}
              height={500}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Grid Sections ── */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Card 1: What You Can Build & Manage */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  What You Can <br />
                  <span className="text-[#6C63FF]">Build and Manage</span>
                </h3>
                <p className="mt-6 font-sora text-[15px] leading-[26px] text-[#6F6C90]">
                  With Formezy, your CRM system becomes fully connected and operationally aligned.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Lead and customer lifecycle management",
                    "Sales pipeline visibility and tracking",
                    "Follow-up and communication workflows",
                    "Team coordination across customer operations",
                    "Centralized customer and sales visibility",
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

            {/* Card 2: Industry Applications */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Industry <br />
                  <span className="text-[#6C63FF]">Applications</span>
                </h3>
                <p className="mt-6 font-sora text-[15px] leading-[26px] text-[#6F6C90]">
                  Formezy enables CRM systems across industries that rely on structured customer and sales operations.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Manufacturing and distribution",
                    "Retail and wholesale",
                    "Service-based businesses",
                    "Enterprise sales operations",
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

            {/* Card 3: Business Impact */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Business <br />
                  <span className="text-[#6C63FF]">Impact</span>
                </h3>
                <p className="mt-6 font-sora text-[15px] leading-[26px] text-[#6F6C90]">
                  A tailored CRM System improves visibility, coordination, and responsiveness across customer operations.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Improved customer and sales visibility",
                    "Faster follow-up and response management",
                    "Better coordination across sales teams",
                    "Improved operational tracking and reporting",
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

            {/* Card 4: Why Formezy */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Why <br />
                  <span className="text-[#6C63FF]">Formezy</span>
                </h3>
                <p className="mt-6 font-sora text-[15px] leading-[26px] text-[#6F6C90]">
                  Formezy enables CRM systems that are flexible, scalable, and workflow-driven.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Built on an Enterprise Application Platform (EAP)",
                    "Fully customizable to your CRM workflows",
                    "Faster implementation and flexibility",
                    "Systems that evolve with your business",
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
                Build a CRM System <G>Around Your Business</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Create a connected customer management system with better visibility and operational control.
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
                src={crmSystemWebp.cta}
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
