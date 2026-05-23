"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { discreteManufacturingWebp } from "@/lib/use-case-webp";

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

export default function DiscreteManufacturingContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <PlatformBreadcrumb currentLabel="Discrete Manufacturing" />

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
              Built for Precision-Driven <br className="hidden sm:block" />
              <G>Discrete Manufacturing</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[840px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Manage components, assembly, and production workflows with complete visibility, structured processes, and real-time control.
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
                  src={discreteManufacturingWebp.intro}
                  alt="Key Challenges in Discrete Manufacturing"
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
                Key Challenges in <G>Discrete Manufacturing</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Discrete manufacturing focuses on assembling individual components into finished products. Managing multiple parts, production stages, and coordination across teams can quickly become complex without structured systems.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Lack of visibility across assembly and production stages",
                  "Difficulty tracking components and inventory in real time",
                  "Disconnected workflows between departments",
                  "Manual coordination across production, procurement, and delivery",
                  "Delays due to inefficient tracking and communication",
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

      {/* ── Section 3: How Formezy Brings Structure ── */}
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
              How Formezy Brings <G>Structure to Production</G>
            </motion.h2>
            <p className="text-[#2C0E3A] my-6 font-bold font-sora text-[18px]">
              Platform Capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mb-8">
              {[
                "Track components, inventory, and production workflows",
                "Automate approvals and operational processes",
                "Centralize communication across teams",
                "Monitor production progress in real time",
                "Maintain consistency across assembly processes",
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
              src={discreteManufacturingWebp.diagram}
              alt="Structured Discrete Manufacturing Concept"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Designed for Every Discrete Manufacturing Vertical ── */}
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
              Designed for Every <G>Discrete Manufacturing Vertical</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[800px] font-sora text-[15px] leading-[24px] text-[#6366A8]"
            >
              Discrete manufacturing involves multiple product types, components, and assembly processes. Formezy adapts to these variations, ensuring structured workflows, accurate tracking, and seamless coordination across every vertical.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                title: "Electronics",
                desc: "Complex components and precision assembly require accurate tracking and coordination.",
                points: [
                  "Track components and sub-assemblies in real time",
                  "Manage multi-stage production workflows",
                  "Ensure accuracy across assembly processes",
                  "Improve coordination across production teams",
                ],
              },
              {
                title: "Appliances",
                desc: "High-volume production and assembly require consistency and efficient workflow management.",
                points: [
                  "Manage assembly lines and production stages",
                  "Track components and finished goods",
                  "Maintain consistency across production cycles",
                  "Optimize coordination across departments",
                ],
              },
              {
                title: "Automotive Components",
                desc: "Large-scale production requires precise coordination across parts, suppliers, and assembly.",
                points: [
                  "Track parts and component availability",
                  "Manage supplier and procurement workflows",
                  "Monitor production timelines and dependencies",
                  "Ensure seamless coordination across operations",
                ],
              },
              {
                title: "Industrial Equipment",
                desc: "Complex product assembly requires structured workflows and detailed tracking.",
                points: [
                  "Manage multi-level assembly processes",
                  "Track production stages and progress",
                  "Coordinate across engineering and production teams",
                  "Ensure consistency in final product output",
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
                    "Component and inventory tracking",
                    "Assembly and production workflows",
                    "Procurement and supplier coordination",
                    "Internal communication across teams",
                    "Order tracking and fulfillment",
                    "Multi-stage production management",
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

            {/* Take Control of Your Entire Production */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Take Control of <br />
                  <span className="text-[#6C63FF]">Your Entire Production</span>
                </h3>
                <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                  Formezy brings clarity and control to discrete manufacturing operations.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Improve visibility across assembly processes",
                    "Reduce delays in production cycles",
                    "Ensure coordination across teams and stages",
                    "Maintain consistency in output and execution",
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
                  Streamlining Assembly <G>with Precision</G>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                  Formezy simplifies discrete manufacturing by connecting every component, process, and team into one structured system.
                </p>
                <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                  It improves efficiency, reduces errors, and ensures your operations run with precision — enabling scalable and reliable production.
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
                Bring Precision to <G>Every Production Stage</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Streamline your assembly and manufacturing workflows with Formezy.
              </p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Button href="#demo" size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide rounded-[10px]">
                  Book a Demo
                </Button>
                
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={discreteManufacturingWebp.cta}
                alt="Discrete Manufacturing CTA Illustration"
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
