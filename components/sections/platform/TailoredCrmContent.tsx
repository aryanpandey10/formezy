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
              Not a generic CRM, but one designed around your sales processes, customer journeys, and business workflows.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              <b>Powered by Formezy EAP</b>
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
                Most businesses don&apos;t struggle with managing customers; they struggle with disconnected systems and unclear processes.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Leads are scattered across tools and spreadsheets",
                  "Lack of visibility into the sales pipeline",
                  "Missed follow-ups and delayed responses",
                  "Disconnected communication across teams",
                  "Inconsistent tracking of customer interactions",
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

            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              A tailored CRM is built around how your sales and customer processes actually work, not predefined pipelines or rigid structures.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              It adapts to your business, ensuring every interaction, follow-up, and opportunity is tracked seamlessly.
            </motion.p>
            <p className="text-[#2C0E3A] mt-5"><b>Core Capabilities</b></p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Lead management across stages
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Sales pipeline tracking and visibility
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Customer data and interaction tracking
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Follow-ups and activity management
              </li>

            </ul>
            <p className="text-[#2C0E3A] mt-5"><b>How It Works in Practice</b></p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center">

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Lead → Opportunity → Deal
              </li>              

            </ul>
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
                Formezy allows you to build a CRM that fits your sales processes, not the other way around.

              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Low-code customization for sales workflows",
                  "Automation across follow-ups and processes",
                  "Role-based access for sales teams",
                  "Integration with communication and business tools",
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
              See how a tailored CRM works in a real business scenario:
            </motion.p>
            <p className="text-[#2C0E3A]"><b>Sales Workflow</b></p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Lead captured and assigned
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Opportunity created and tracked
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Follow-ups scheduled automatically
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Deal closed and recorded
              </li>

            </ul>
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
      <section className="section bg-white">
        <div className="container-app p-0">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

            {/* Card 1 */}
            <div className="rounded-[30px] border border-[#9D94EF] p-[50px]">
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[70px]">
                What You Can{" "}
                <span className="text-[#6C63FF]">Build and Manage</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                With Formezy, your CRM becomes a fully connected customer management system.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Lead capture and tracking workflows
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Sales pipeline and opportunity management
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Customer communication and updates
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Follow-up and task automation
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Centralized customer data and interactions
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="rounded-[30px] border border-[#9D94EF] p-[50px]">
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[70px]">
                Industry{" "}
                <span className="text-[#6C63FF]">Applications</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                Formezy enables tailored CRM systems across industries, adapting to different sales processes and customer journeys.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Manufacturing and distribution
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Retail and wholesale
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Service-based businesses
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Real estate and project-based businesses
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-[30px] border border-[#9D94EF] p-[50px]">
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[70px]">
                Business{" "}
                <span className="text-[#6C63FF]">Impact</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                A tailored CRM built on Formezy improves how your business manages customers and sales.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Better visibility across the sales pipeline
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Reduced missed opportunities and follow-ups
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Faster response and conversion cycles
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Structured and scalable customer management
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="rounded-[30px] border border-[#9D94EF] p-[50px]">
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[70px]">
                Why{" "}
                <span className="text-[#6C63FF]">Formezy</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                Formezy enables CRM systems that are built for real business processes.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Built on an Enterprise Application Platform (EAP)
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Fully customizable to your sales workflows
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Faster implementation and adaptability
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Systems that evolve with your business
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section >

      {/* ── Section 7: Footer CTA ── */}
      < section className="section pt-0" >
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
                Move beyond rigid CRMs and create one designed around your sales process.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide">
                  Book a Demo
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
      </ section>
    </div >
  );
}
