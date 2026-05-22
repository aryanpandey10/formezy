"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { supplyChainManagementWebp } from "@/lib/use-case-webp";

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

export default function SupplyChainContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <PlatformBreadcrumb currentLabel="Supply Chain Management" />

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
              Build a Tailored Supply Chain Management System <br className="hidden sm:block" />
              <G> for Your Business</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Manage procurement, vendors, logistics, and demand with structured workflows, real-time visibility, and complete control.
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
                  src={supplyChainManagementWebp.businessChallenges}
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
                Managing supply chains across disconnected systems leads to delays, inefficiencies, and lack of coordination.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Limited visibility across procurement, inventory, and logistics",
                  "Disconnected vendor and supplier management",
                  "Delays in order processing and delivery tracking",
                  "Manual coordination across multiple stakeholders",
                  "Difficulty aligning demand with supply",
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
              What Is a Tailored Supply Chain Management System <br className="hidden sm:block" />

            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              A tailored Supply Chain Management System is built around how your business manages sourcing, movement, and delivery of goods.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              It connects procurement, vendors, logistics, and demand into one structured system, ensuring smooth and efficient operations.
            </motion.p>
            <p className="text-[#2C0E3A] my-3"><b>Core Capabilities</b></p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Procurement and sourcing workflows
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Vendor and supplier management
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Logistics tracking and coordination
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
               Demand planning and forecasting
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
              src={supplyChainManagementWebp.whatIs}
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
                Formezy allows you to build a supply chain system tailored to your operational complexity and scale.

              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Low-code customization for supply chain workflows",
                  "Automation across procurement and logistics processes",
                  "Role-based access for internal teams and stakeholders",
                  "Integration with inventory, finance, and external systems",
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
                  src={supplyChainManagementWebp.howFormezyEnables}
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
              See how a tailored supply chain system works in a real business scenario:
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
              src={supplyChainManagementWebp.realWorkflow}
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
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px]">
                What You Can{" "}
                <span className="text-[#6C63FF]">Build and Manage</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
               With Formezy, your supply chain becomes a fully connected and controlled system.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Procurement and purchase workflows
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                   Vendor onboarding and management
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Order tracking and logistics coordination
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Demand planning and supply alignment
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Communication across teams and partners
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="rounded-[30px] border border-[#9D94EF] p-[50px]">
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px]">
                Industry{" "}
                <span className="text-[#6C63FF]">Applications</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                Formezy enables supply chain systems across industries that rely on efficient movement and coordination of goods.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Manufacturing and production
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
                    Logistics and distribution
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Construction and project-based operations
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-[30px] border border-[#9D94EF] p-[50px]">
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px]">
                Business{" "}
                <span className="text-[#6C63FF]">Impact</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                A tailored Supply Chain Management System improves efficiency and coordination across your operations.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Better visibility across the entire supply chain
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Reduced delays in procurement and delivery
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Improved coordination across vendors and teams

                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    More accurate demand and supply planning
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="rounded-[30px] border border-[#9D94EF] p-[50px]">
              <h2 className="font-sora text-[40px] font-bold leading-[48px] text-[#1D0629] sm:text-[48px] sm:leading-[58px]">
                Why{" "}
                <span className="text-[#6C63FF]">Formezy</span>
              </h2>

              <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                Formezy enables supply chain systems that are flexible, scalable, and fully connected.
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
                  Fully customizable to your supply chain workflows
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
                Bring Control to <G>Your Supply Chain</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Build a system that connects procurement, logistics, and delivery seamlessly.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide">
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={supplyChainManagementWebp.cta}
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
