"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Users2,
  Boxes,
  HeartPulse,
  Megaphone,
  Factory,
  Stethoscope,
  Landmark,
  ShoppingCart,
  Truck,
  Blend
} from "lucide-react";
import cta from "../../../public/images/Use Cases/Webp/use_cases_CTA_1.png";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import UseCaseTabs from "@/components/sections/use-cases/UseCaseTabs";
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

/* ─────────────────────────────────────────────
   Use-case icon grid data
   ───────────────────────────────────────────── */
const overviewItems = [
  { label: "Customer Relationship Mgmt.", Icon: Users2, color: "#6C63FF" },
  { label: "Enterprise Resource Planning", Icon: Boxes, color: "#A78BFA" },
  { label: "Human Resource CRM", Icon: HeartPulse, color: "#06B6D4" },
  { label: "Rental Industry", Icon: Blend, color: "#F59E0B" },
  { label: "Manufacturing", Icon: Factory, color: "#10B981" },
  { label: "Healthcare", Icon: Stethoscope, color: "#EF4444" },
  { label: "Financial Services / Banking", Icon: Landmark, color: "#8B5CF6" },
  { label: "Retail & E-commerce", Icon: ShoppingCart, color: "#14B8A6" },
  { label: "Logistics / Supply Chain", Icon: Truck, color: "#F43F5E" },
];

const faqs: AccordionItem[] = [
  {
    id: "1",
    question: "What are use cases in Formezy?",
    answer:
      "Use cases represent how Formezy can be applied to different business functions and industries to solve operational challenges.",
  },
  {
    id: "2",
    question: "Can Formezy be customized for specific business needs?",
    answer:
      "Yes, Formezy allows businesses to build tailored systems based on their workflows and requirements.",
  },
  {
    id: "3",
    question: "Is Formezy suitable for multiple industries?",
    answer:
      "Yes, it supports industries like manufacturing, retail, logistics, construction, and more.",
  },
  {
    id: "4",
    question: "Can Formezy replace multiple business tools?",
    answer:
      "Yes, it connects workflows, communication, and data into one unified platform.",
  },
  {
    id: "5",
    question: "How do I choose the right use case?",
    answer:
      "You can explore based on your business needs or connect with the Formezy team for guidance.",
  },
  {
    id: "6",
    question: "Can Formezy scale as my business grows?",
    answer:
      "Yes, it is designed to scale with your operations without losing structure or control.",
  },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-0 pt-8 md:pt-12 lg:pt-16">
      <div className="container-app">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-start gap-6 lg:pt-4"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Use Cases
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Built for Every{" "}
              <G>Business Use Case</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[500px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              From tailored systems to industry-specific solutions, Formezy adapts to your business — enabling structured, scalable, and intelligent operations.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
              <Button
                href="#explore"
                size="lg"
                variant="secondary"
                className="rounded-[10px]"
              >
                Explore Use Cases
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — 3×3 icon grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Icon grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {overviewItems.map((o, i) => {
                const { Icon } = o;
                const isCenter = i === 4;
                return (
                  <motion.div
                    key={o.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`flex flex-col items-center justify-center gap-2.5 rounded-[18px] border p-4 text-center shadow-sm transition-transform hover:-translate-y-1 ${isCenter
                        ? "border-purple-200 bg-gradient-to-br from-purple-100 to-blue-50 shadow-md"
                        : "border-purple-100/60 bg-white/90"
                      }`}
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${o.color}18`,
                        color: o.color,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <span className="font-sora text-[11px] font-semibold leading-[16px] text-[#2C0E3A]">
                      {o.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TurningNeedsSection() {
  return (
    <section className="section">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
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
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-5 text-left lg:gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Turning business needs into working systems
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[52px]"
            >
              Turning Business Needs into <G>Working Systems</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Every business has it&aposs own workflow we transform it into a solution.
            </motion.p>
            <motion.div variants={fadeUp}>
              <BulletList
                items={[
                  "Custom workflows for your industry",
                  "Fully configurable to match your ops",
                  "Integration blueprints included",
                  "Go live in weeks, not quarters",
                ]}
              />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-1">
              <Button href="#explore" size="lg" className="rounded-[10px]">
                Get Started <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AdaptAndScaleSection() {
  return (
    <section className="section bg-white/50 backdrop-blur-sm">
      <div className="container-app">
        <div className="rounded-[32px] bg-gradient-to-br from-[#FAFAFE] to-[#F5F0FF] border border-purple-100 p-8 md:p-14 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-4">
              <span className="inline-flex max-w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Scalable EAP Platform
              </span>
              <h2 className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px]">
                Built to Adapt, <G>Designed to Scale</G>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Formezy isn&apos;t limited to predefined systems, it adapts to your business requirements and evolves as your operations grow.
              </p>
              <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
                Whether you’re building a single system or connecting multiple functions, Formezy ensures everything works together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (        
  <section className="section pt-0" >
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
            Ready to Build a System  <G>That Fits Your Business?</G>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
            Explore how Formezy adapts to your workflows, industry, and operational needs. Build your enterprise platform. Achieve more with clarity.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#demo" size="lg" className="rounded-[10px]">
              Get Started <ArrowRight size={16} />
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
      <TurningNeedsSection />

      <section id="explore" className="section bg-[#FAFAFE]">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto flex max-w-[920px] flex-col items-center gap-5 text-center md:gap-6 mb-16"
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
              From core business systems to industry-specific solutions, Formezy supports a wide range of use cases, all within one connected platform.
            </motion.p>
          </motion.div>

          <UseCaseTabs />
        </div>
      </section>

      <AdaptAndScaleSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
