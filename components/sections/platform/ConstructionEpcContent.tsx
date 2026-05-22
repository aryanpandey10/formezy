"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { constructionEpcWebp } from "@/lib/use-case-webp";

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

export default function ConstructionEpcContent() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      {/* ── Section 1: Hero & Breadcrumb ── */}
      <section className="relative pt-8 pb-10 md:pt-12 lg:pt-16">
        <div className="container-app">
          <PlatformBreadcrumb currentLabel="Construction & EPC Projects" />

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
              Built for Complex, <br className="hidden sm:block" />
              <G>Multi-Stage Projects</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[840px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Manage planning, execution, and coordination across construction and EPC projects with structured workflows, real-time visibility, and complete control.
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
                  src={constructionEpcWebp.intro}
                  alt="Key Challenges in Construction and EPC"
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
                Key Challenges in <G>Construction & EPC</G>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Construction and EPC projects involve multiple stakeholders, timelines, and processes, from planning and procurement to execution and delivery. Managing these across teams and locations often leads to delays, miscommunication, and a lack of visibility without a structured system.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Lack of real-time visibility across project stages",
                  "Disconnected workflows between teams, vendors, and sites",
                  "Manual tracking of approvals, documentation, and progress",
                  "Delays due to poor coordination and communication",
                  "Difficulty managing multiple projects and locations",
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
              How Formezy Brings <G>Structure to Projects</G>
            </motion.h2>
            <p className="text-[#2C0E3A] my-6 font-bold font-sora text-[18px]">
              Platform Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto mb-8">
              {[
                "Track project progress across all stages",
                "Automate approvals and workflow processes",
                "Centralize communication across teams and stakeholders",
                "Manage documentation and compliance in one place",
                "Maintain visibility across multiple projects and sites",
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
              src={constructionEpcWebp.diagram}
              alt="Structured Construction & EPC Concept"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Designed for Every Construction & EPC Vertical ── */}
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
              Designed for Every <G>Construction & EPC Vertical</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[800px] font-sora text-[15px] leading-[24px] text-[#6366A8]"
            >
              Construction and EPC operations vary across project types, scale, and execution models. Formezy adapts to these differences, ensuring structured workflows, seamless coordination, and real-time visibility across every vertical.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Infrastructure Projects",
                desc: "Large-scale infrastructure projects require coordination across multiple teams, vendors, and timelines.",
                points: [
                  "Track project stages and milestones",
                  "Coordinate across contractors and stakeholders",
                  "Monitor progress across multiple sites",
                  "Ensure timely execution of project phases",
                ],
              },
              {
                title: "Commercial & Residential",
                desc: "Managing multiple sites and teams requires structured workflows and centralized visibility.",
                points: [
                  "Track construction progress across sites",
                  "Manage approvals and documentation workflows",
                  "Coordinate between on-site and office teams",
                  "Maintain consistency across projects",
                ],
              },
              {
                title: "Engineering & EPC Projects",
                desc: "Complex project execution requires alignment across design, procurement, and implementation.",
                points: [
                  "Manage project lifecycle from planning to delivery",
                  "Coordinate across engineering, procurement, and execution",
                  "Track approvals and process flows",
                  "Ensure seamless project execution",
                ],
              },
              {
                title: "Industrial Construction",
                desc: "Large industrial projects demand precise coordination and structured execution.",
                points: [
                  "Track resource allocation and project stages",
                  "Monitor execution across multiple units",
                  "Manage documentation and compliance",
                  "Ensure alignment across teams and processes",
                ],
              },
              {
                title: "Project Management & Consulting",
                desc: "Managing multiple client projects requires visibility, coordination, and structured workflows.",
                points: [
                  "Track project timelines and deliverables",
                  "Manage communication across stakeholders",
                  "Monitor project performance and updates",
                  "Maintain centralized control across projects",
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
                    "Project planning and workflow management",
                    "Task tracking and milestone monitoring",
                    "Document management and approvals",
                    "Vendor and contractor coordination",
                    "Internal communication across teams",
                    "Multi-project and multi-site operations",
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

            {/* Take Control of Every Project Stage */}
            <div className="rounded-[30px] border border-[#9D94EF] p-8 md:p-[50px] shadow-sm flex flex-col justify-between bg-white">
              <div>
                <h3 className="font-sora text-[28px] font-bold leading-[38px] text-[#1D0629] sm:text-[34px] lg:text-[38px]">
                  Take Control of <br />
                  <span className="text-[#6C63FF]">Every Project Stage</span>
                </h3>
                <p className="mt-6 font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                  Formezy brings clarity and control to construction and EPC operations.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Improve visibility across project timelines",
                    "Reduce delays in approvals and execution",
                    "Ensure coordination across teams and stakeholders",
                    "Maintain consistency across projects and sites",
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
                  Timely Project <G>Execution</G>
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                  Formezy simplifies construction and EPC operations by connecting every stage of your project into one structured system.
                </p>
                <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                  It improves coordination, reduces delays, and ensures projects are executed efficiently, enabling better control and timely delivery.
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
                Bring Control to <G>Every Project</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Streamline planning, execution, and coordination with Formezy.
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
                src={constructionEpcWebp.cta}
                alt="Construction & EPC CTA Illustration"
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
