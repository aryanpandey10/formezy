"use client";

import Image from "next/image";
import businessChallenges from "../../../public/images/Document_Management_System/Webp/business_challenges.webp";
import howFormezy from "../../../public/images/Document_Management_System/Webp/how_formezy_enables _it.webp";
import realWorkflow from "../../../public/images/Document_Management_System/Webp/real_workflow_in_action.webp";
import tailored from "../../../public/images/Document_Management_System/Webp/what _is _a _tailored_document_management _system.webp";
import cta from "../../../public/images/Document_Management_System/Webp/take_control_of_your_documents.webp";
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
              Build a Tailored Document Management System <br className="hidden sm:block" />
              <G> for Your Business</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]"
            >
              Not scattered files, but a structured system to manage, control, and track every document across your operations.
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
                  src={businessChallenges}
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
                Most businesses don’t struggle with documents, they struggle with managing them efficiently.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Files scattered across systems, emails, and folders",
                  "No control over versions and updates",
                  "Lack of visibility into document status",
                  "Manual approval and review processes",
                  "Risk of missing or unauthorized access",
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
              What Is a Tailored Document Management System <br className="hidden sm:block" />

            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              A tailored Document Management System is built around how your business creates, reviews, and manages documents.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[900px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              It ensures every document is structured, controlled, and accessible, without confusion or duplication.
            </motion.p>
            <p className="text-[#2C0E3A] mt-5"><b>Core Capabilities</b></p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Centralized document storage
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Version control and tracking
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Role-based access permissions
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Structured approval workflows
              </li>

            </ul>
            <p className="text-[#2C0E3A] mt-5"><b>How It Works in Practice</b></p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center">

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Upload → Review → Approve → Archive
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
              src={tailored}
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
                Formezy allows you to build a document system that fits your internal processes and compliance needs.

              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
                {[
                  "Low-code customization for document workflows",
                  "Automated approvals and review processes",
                  "Role-based access and document control",
                  "Integration with workflows and business systems",
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
                  src={howFormezy}
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
              See how a tailored document system works in a real business scenario:
            </motion.p>
            <p className="text-[#2C0E3A]"><b>Document Approval Workflow</b></p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Document uploaded and categorized
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Assigned for review and validation
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Approved through defined workflow
              </li>

              <li className="flex items-center gap-3 font-sora text-[16px] font-normal leading-[24px] text-[#6F6C90]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                Archived with complete version history
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
              src={realWorkflow}
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
                With Formezy, your document system becomes structured and fully connected to your operations.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Centralized document storage and organization
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Document lifecycle management
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Approval and review workflows
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Access control and permission management
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Tracking of document status and history
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
                Formezy enables document systems across industries, adapting to different documentation and compliance needs.
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
                    Construction and EPC
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Healthcare and regulated industries
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Service-based businesses
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
                A tailored Document Management System improves how your business handles information.

              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Better control over documents and access
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Reduced duplication and errors
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Faster approvals and document processing
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Improved compliance and traceability
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
                Formezy enables document systems that are structured, secure, and adaptable.
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
                   Fully customizable to your document workflows
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9D94EF]" />
                  <p className="font-sora text-[16px] leading-[28px] text-[#6F6C90]">
                    Faster implementation and scalability
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
                Take Control of <G>Your Documents</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Move beyond scattered files and build a structured document system with Formezy.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide">
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={cta}
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
