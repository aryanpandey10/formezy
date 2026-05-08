"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import SectionWebpImage from "@/components/ui/SectionWebpImage";
// ── Reused components from other pages ──────────────────────────
import SeamlessIntegrations from "@/components/sections/home/Integrations";
import CtaSection from "@/components/sections/CtaSection";
// ────────────────────────────────────────────────────────────────
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { integrationPageImages } from "@/lib/page-section-images";

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
   FAQ data
───────────────────────────────────────────── */
const faqs: AccordionItem[] = [
  {
    id: "1",
    question: "What Types Of Integrations Does Formezy Support?",
    answer:
      "Formezy supports three classes of integrations: native connectors (Google Workspace, Microsoft 365, Oracle, SAP, Slack, and more), open REST APIs and webhooks for custom apps, and dedicated ERP extensions that sit alongside your existing system of record.",
  },
  {
    id: "2",
    question: "Can Formezy Integrate With My Existing Business Tools?",
    answer:
      "In most cases, yes. We ship 50+ native connectors out of the box and can be extended to any system that exposes an API. If you have a homegrown system, our open API and webhooks make it straightforward to integrate.",
  },
  {
    id: "3",
    question: "Do I Need Technical Expertise To Set Up Integrations?",
    answer:
      "No — native integrations are configured with a few clicks by business users. For custom API integrations, our solutions team helps you set up and test in a guided onboarding session.",
  },
  {
    id: "4",
    question: "How Do API Integrations Benefit My Business Operations?",
    answer:
      "API integrations let Formezy become the connective tissue across your stack — so data flows in real time, approvals don't get stuck and every team works from the same source of truth.",
  },
  {
    id: "5",
    question: "Will Formezy Replace My Existing ERP System?",
    answer:
      "Not necessarily. Most customers keep their ERP as the system of record and use Formezy as the operational layer above it — adding workflow, approvals and collaboration without disrupting finance.",
  },
  {
    id: "6",
    question: "Are Integrations Secure In Formezy?",
    answer:
      "All integrations use encrypted channels (TLS 1.2+), OAuth2 / SSO where available, and honor your role-based permissions. Every integration event is audit-logged for compliance review.",
  },
];

/* ─────────────────────────────────────────────
   Section 1 — Hero
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-0 pt-8 md:pt-12 lg:pt-16">
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Integrations
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              The Integration Layer{" "}
              <G>Your Business Was Missing</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-[500px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Bring your systems, tools and data together into one unified
              platform with Formezy — through native connectors, open APIs, and
              dedicated ERP extensions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
              <Button
                href="#browse"
                size="lg"
                variant="ghost"
                className="rounded-[10px]"
              >
                Browse Integrations
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — hub illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <SectionWebpImage
              src={integrationPageImages.hero}
              alt="Formezy integration layer connecting business systems"
              aspectWidth={720}
              aspectHeight={520}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl border-purple-100/80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — SeamlessIntegrations carousel (REUSED from home)
   id="browse" anchors the "Browse Integrations" CTA above
───────────────────────────────────────────── */
// Rendered directly — no wrapper needed; the component already
// includes its own <section> with white background, heading and carousel.

/* ─────────────────────────────────────────────
   Section 3 — Built for a Connected Business Environment
───────────────────────────────────────────── */
const connectedPills = [
  "Eliminate system silos",
  "Enable real-time data flow",
  "Reduce manual data transfer",
  "Improve cross-team visibility",
];

function ConnectedBusinessSection() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              Connected Business
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-2xl font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            Built for a Connected{" "}
            <G>Business Environment</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[620px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Formezy sits between your systems and your teams — so information,
            approvals and decisions move at the speed your business actually
            needs.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center justify-center gap-3"
          >
            {connectedPills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-pill border border-purple-100 bg-white px-4 py-2 font-sora text-[13px] font-medium text-[#6366A8] shadow-card"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                  <Check size={9} strokeWidth={2.5} />
                </span>
                {p}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 w-full max-w-4xl">
            <SectionWebpImage
              src="/images/integrations/Webp/3.webp"
              alt="Connected business systems working together through Formezy"
              aspectWidth={16}
              aspectHeight={9}
              sizes="(max-width: 1024px) 100vw, 896px"
              className="rounded-[24px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 — API Integrations
   Card: illustration left + text right
───────────────────────────────────────────── */
const apiBullets = [
  "Connect custom applications with ease",
  "Enable secure, real-time data exchange",
  "Build scalable integrations without code",
  "Adapt to changing system requirements",
];

function ApiSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-card"
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* Left — isometric API illustration */}
            <div className="flex items-center justify-center bg-gradient-to-br from-[#EEF0FF] to-[#E8F4FF] p-8 md:p-12">
              <SectionWebpImage
                src={integrationPageImages.api}
                alt="API and webhook integrations with Formezy"
                aspectWidth={560}
                aspectHeight={420}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl border-0 bg-transparent shadow-none"
              />
            </div>

            {/* Right — text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-5 p-8 md:p-12"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                  APIs & Webhooks
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px]"
                style={{ lineHeight: "1.2" }}
              >
                <G>API</G> Integrations
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[15px] font-semibold text-[#2C0E3A]"
              >
                Flexibility to Connect What You Need
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[14px] leading-[24px] text-[#6366A8]"
              >
                Every Formezy workspace ships with open REST APIs, webhooks
                and event streams — so your internal and partner systems can
                talk to Formezy, and Formezy can talk back.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList items={apiBullets} />
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button href="/platform/capabilities" size="md" className="rounded-[10px]">
                  Know More <ArrowRight size={14} />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — Third-Party Integrations
   Card: text left + colorful illustration right
───────────────────────────────────────────── */
const thirdPartyBullets = [
  "Sync data across platforms automatically",
  "Reduce manual transfers and re-entry",
  "Keep all systems aligned in real time",
  "Improve cross-team operational efficiency",
];

function ThirdPartySection() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-card"
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* Left — text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-5 p-8 md:p-12"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex w-fit items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                  Native Connectors
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px]"
                style={{ lineHeight: "1.2" }}
              >
                Third-Party{" "}
                <G>Integrations</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[15px] font-semibold text-[#2C0E3A]"
              >
                Your Tools, Working Together
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[14px] leading-[24px] text-[#6366A8]"
              >
                Keep using the tools your teams love — Formezy connects to
                Gmail, Outlook, Slack, Teams, Drive, Dropbox and dozens more
                with maintained, official integrations.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList items={thirdPartyBullets} />
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button href="/#integrations" size="md" className="rounded-[10px]">
                  Know More <ArrowRight size={14} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right — colorful connection illustration */}
            <div className="flex items-center justify-center bg-gradient-to-br from-[#FFF8E8] to-[#F0F0FF] p-8 md:p-12">
              <SectionWebpImage
                src={integrationPageImages.thirdParty}
                alt="Third-party app integrations connected to Formezy"
                aspectWidth={560}
                aspectHeight={420}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl border-0 bg-transparent shadow-none"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — ERP Integrations (centered + full-width image)
───────────────────────────────────────────── */
const erpPills = [
  "Extend ERP functionality",
  "Improve workflow execution",
  "Connect departments seamlessly",
];

function ErpSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              ERP Extensions
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            ERP <G>Integrations</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[620px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Enhance what you already have. Formezy sits above your ERP as an
            intelligent operational layer — adding workflow, approvals and
            collaboration without disrupting your system of record.
          </motion.p>

          {/* Benefit pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {erpPills.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-pill border border-purple-100 bg-white px-4 py-2 font-sora text-[13px] font-medium text-[#6366A8] shadow-card"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                  <Check size={9} strokeWidth={2.5} />
                </span>
                {p}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Full-width ERP flow illustration */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-[24px] border border-purple-100 shadow-card-hover"
        >
          <SectionWebpImage
            src={integrationPageImages.erp}
            alt="ERP integrations extending your system of record with Formezy"
            aspectWidth={1300}
            aspectHeight={500}
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="rounded-none border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 7 — CTA (REUSED CtaSection component, with 2-col card)
───────────────────────────────────────────── */
function CtaSectionBlock() {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[30px] border border-purple-100 bg-white/90 shadow-[0_8px_48px_rgba(108,96,232,0.12)] backdrop-blur-sm"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] top-0 h-[200px] rounded-full bg-[#6C60E8]/8 blur-[60px]"
          />

          <div className="grid items-center lg:grid-cols-2">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col items-start gap-6 p-10 md:p-14 lg:p-16"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[34px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]"
              >
                Ready to Connect Your{" "}
                <G>Entire Business Ecosystem?</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="max-w-[420px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Unify your tools, systems and workflows with Formezy — and
                make every part of your business talk to every other part.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button href="#demo" size="lg" className="rounded-[10px]">
                  Contact Us <ArrowRight size={16} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 px-8 pt-10 lg:h-full lg:min-h-[360px]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(108,96,232,0.12)_0%,transparent_70%)]"
              />
              <div className="relative z-10 w-full max-w-[420px]">
                <SectionWebpImage
                  src={integrationPageImages.cta}
                  alt="Connect your entire business ecosystem with Formezy"
                  aspectWidth={520}
                  aspectHeight={380}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="rounded-2xl border-0 bg-transparent shadow-none"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 8 — FAQ (reuses Accordion component)
───────────────────────────────────────────── */
function FaqSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
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

/* ─────────────────────────────────────────────
   Root export
───────────────────────────────────────────── */
export default function IntegrationsContent() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. SeamlessIntegrations carousel — REUSED from home page */}
      <div id="browse">
        <SeamlessIntegrations />
      </div>

      {/* 3. Built for a Connected Business Environment */}
      <ConnectedBusinessSection />

      {/* 4. API Integrations */}
      <ApiSection />

      {/* 5. Third-Party Integrations */}
      <ThirdPartySection />

      {/* 6. ERP Integrations */}
      <ErpSection />

      {/* 7. CTA */}
      <CtaSectionBlock />

      {/* 8. FAQ — reuses Accordion component */}
      <FaqSection />
    </>
  );
}
