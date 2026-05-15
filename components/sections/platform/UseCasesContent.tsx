"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import {
  BusinessSystemsSection,
  IndustrySolutionsSection,
  TailoredSystemsSection,
} from "@/components/sections/use-cases/UseCaseTabs";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { useCasesPageWebp } from "@/lib/webp-assets";

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

const faqs: AccordionItem[] = [
  {
    id: "1",
    question: "What is Formezy?",
    answer:
      "Formezy is an Enterprise Application Platform (EAP) that lets you design workflows, automate execution, govern access, and centralize operational data — so teams run on connected systems instead of scattered tools.",
  },
  {
    id: "2",
    question: "How does the platform handle data security?",
    answer:
      "Formezy supports role-based access, audit trails, and enterprise authentication patterns. Your data stays attributed, traceable, and aligned with the controls your security and compliance teams expect.",
  },
  {
    id: "3",
    question: "What Are Use Cases in Formezy?",
    answer:
      "Use Cases are ready-to-configure starting points — ERP, CRM, field service, and more — that you can tailor to your business instead of building from scratch. Every Use Case uses the same Formezy foundation.",
  },
  {
    id: "4",
    question: "Can Formezy Be Customized For Specific Business Needs?",
    answer:
      "Yes. Every Use Case is fully configurable: fields, approvals, modules, and integrations can be adapted. Most customers ship their first tailored system live within weeks.",
  },
  {
    id: "5",
    question: "Is Formezy Suitable For Multiple Industries?",
    answer:
      "Formezy is used across manufacturing, retail, construction, logistics, and professional services. The platform is industry-agnostic — Use Cases give you a head start for your domain.",
  },
  {
    id: "6",
    question: "How Do I Choose The Right Use Case?",
    answer:
      "Start with the workflow that hurts the most — approvals, field ops, vendor onboarding, or inventory. Our team can map it in a workshop and recommend the best starting template.",
  },
];

/* ── Hero — breadcrumb + “Built for…” + Turning (image left, copy right) ── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0 md:pt-10 lg:pt-12">
      <div className="container-app">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 font-sora text-[15px] font-semibold text-[#2C0E3A] md:text-[16px]"
        >
          Built for Every Business Use Case
        </motion.p>

        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Breadcrumb"
          className="mb-10 inline-flex h-11 shrink-0 items-center gap-[10px] rounded-[50px] border border-[#E8E4FF] bg-white/90 px-5 py-[10px] font-sora text-[14px] font-medium text-[#6366A8] shadow-sm backdrop-blur-sm md:w-[min(100%,320px)]"
        >
          <Link href="/" className="text-[#6366A8] transition-colors hover:text-purple-primary">
            Home
          </Link>
          <span className="text-[#C4B5FD]" aria-hidden>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span className="text-[#2C0E3A]">Use Cases</span>
        </motion.nav>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="w-full"
          >
            <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-gradient-to-br from-[#EEF4FF] to-[#F5F0FF] shadow-sm lg:mx-0 lg:max-w-none">
              <div className="relative mx-auto aspect-[380/253] w-full max-w-[480px] p-4 md:p-6 lg:max-w-none">
                <Image
                  src={useCasesPageWebp.turningHub}
                  alt="Formezy hub connecting ERP, HR, finance, logistics, retail, and marketing systems"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col gap-5 text-left lg:gap-6"
          >
            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px]"
            >
              Turning Business Needs into <G>Working Systems</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Formezy gives you the flexibility to build custom systems that match how your teams
              actually work — with templates, workflows, and integrations so you move from
              requirements to production without starting from zero.
            </motion.p>
            <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
              {[
                "Proven starting points for common operational systems",
                "Fully configurable modules, fields, and approvals",
                "Integration-friendly by design — connect what you already use",
                "Ship value in weeks with a clear path to scale",
              ].map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3 font-sora text-[14px] leading-[22px] text-[#6366A8] md:text-[15px] md:leading-[24px]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  {b}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-1">
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Get Started <ArrowRight size={16} />
              </Button>
              <Button href="#explore" size="lg" variant="secondary" className="rounded-[10px]">
                Explore below
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExploreIntroSection() {
  return (
    <section id="explore" className="section bg-[#FAFAFE]">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[920px] flex-col items-center gap-5 text-center md:gap-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[40px] md:text-[48px] lg:text-[52px]"
          >
            Explore Use Cases <G>Across Systems and Industries</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Build custom business systems for industry-specific solutions. Formezy supports a wide
            range of use cases, all within one connected platform.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section overflow-hidden bg-white/80 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-[#D8D4F5] shadow-[0_8px_48px_rgba(108,96,232,0.12)] md:min-h-[580px] lg:min-h-[640px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/92 via-white/55 to-transparent"
          />
          <Image
            src={useCasesPageWebp.cta}
            alt="Connected systems and secure operations with Formezy"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="z-0 object-cover object-bottom"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="relative z-10 flex flex-col items-center gap-6 px-6 pb-10 pt-12 text-center md:px-14 md:pt-16 lg:pt-16"
          >
            <motion.h2
              variants={fadeUp}
              className="max-w-[880px] font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[56px]"
            >
              Ready to Build a System{" "}
              <span
                style={{
                  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                That Fits Your Business?
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-[640px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Design ERP-grade systems tailored to your business workflows, approvals, and
              operational structure—without the limitations of traditional software.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Get Started <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[44px] lg:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            Frequently <G>Asked Questions</G>
          </motion.h2>
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
  );
}

export default function UseCasesContent() {
  return (
    <>
      <HeroSection />
      <ExploreIntroSection />
      <TailoredSystemsSection />
      <BusinessSystemsSection />
      <IndustrySolutionsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
