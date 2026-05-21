"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWebpImage from "@/components/ui/SectionWebpImage";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { featuresPageImages } from "@/lib/page-section-images";
import Image from "next/image";
import Link from "next/link";

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

/* ── Reusable feature row: image one side, text other ── */
type FeatureRowProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  bullets?: string[];
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  imgW: number;
  imgH: number;
  reverse?: boolean;
  bgWhite?: boolean;
};

function FeatureRow({
  eyebrow,
  title,
  description,
  bullets,
  ctaHref = "/platform/capabilities",
  imageSrc,
  imageAlt,
  imgW,
  imgH,
  reverse = false,
  bgWhite = false,
}: FeatureRowProps) {
  const text = (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="flex flex-col items-start gap-5"
    >
      <motion.div variants={fadeUp}>
        <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="font-sora text-[30px] font-bold text-[#2C0E3A] md:text-[38px]"
        style={{ lineHeight: "1.2" }}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="font-sora text-[15px] leading-[26px] text-[#6366A8]"
      >
        {description}
      </motion.p>
      {bullets && (
        <motion.ul variants={staggerContainer} className="flex flex-col gap-2.5">
          {bullets.map((b) => (
            <motion.li key={b} variants={fadeUp} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                <Check size={11} strokeWidth={2.5} />
              </span>
              <span className="font-sora text-[14px] leading-[22px] text-[#6366A8]">{b}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
      <motion.div variants={fadeUp}>
        <Button href={ctaHref} size="md" className="rounded-[10px]">
          Know More <ArrowRight size={14} />
        </Button>
      </motion.div>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 32 : -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionWebpImage
        src={imageSrc}
        alt={imageAlt}
        aspectWidth={imgW}
        aspectHeight={imgH}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </motion.div>
  );

  return (
    <section className={`section ${bgWhite ? "bg-white/90 backdrop-blur-sm" : ""}`}>
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {reverse ? (
            <>
              {text}
              {image}
            </>
          ) : (
            <>
              {image}
              {text}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Reusable centered feature: heading + wide screenshot ── */
type FeatureCenteredProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  imgW: number;
  imgH: number;
  bgWhite?: boolean;
};

function FeatureCentered({
  eyebrow,
  title,
  description,
  ctaHref = "/platform/capabilities",
  imageSrc,
  imageAlt,
  imgW,
  imgH,
  bgWhite = false,
}: FeatureCenteredProps) {
  return (
    <section className={`section ${bgWhite ? "bg-white/90 backdrop-blur-sm" : ""}`}>
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
              {eyebrow}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-2xl font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[44px]"
            style={{ lineHeight: "1.15" }}
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[580px] font-sora text-[15px] leading-[26px] text-[#6366A8]"
          >
            {description}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href={ctaHref} size="md" className="rounded-[10px]">
              Know More <ArrowRight size={14} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Wide screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-[20px] border border-purple-100 shadow-card-hover"
        >
          <SectionWebpImage
            src={imageSrc}
            alt={imageAlt}
            aspectWidth={imgW}
            aspectHeight={imgH}
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="rounded-none border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 1 — Hero
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-0 pt-8 md:pt-12 lg:pt-16">
      <div className="container-app">
        <div className="">
          {/* Left — text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Features
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-sora text-[30px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[46px] lg:text-[56px]"
            >
              Powerful Features Built for <br/>
              <G>Intelligent Operations</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className=" font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Every capability your operations team needs — from AI assistance
              to enterprise-grade security — in one deeply integrated platform.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Book a Demo <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — 3D isometric illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <SectionWebpImage
              src={featuresPageImages.hero}
              alt="Formezy platform features overview"
              aspectWidth={800}
              aspectHeight={250}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   Section 2 — Explore Features (transition heading)
───────────────────────────────────────────── */
function ExploreFeaturesSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
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
            className="font-sora text-[38px] font-bold text-[#2C0E3A] md:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            Explore <G>Formezy Features</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            A complete platform built to handle every dimension of business
            operations — intelligently, securely and at scale.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 9 — CTA
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
                Ready to Explore{" "}
                <G>Formezy in Depth?</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="max-w-[400px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                See every feature live, with your data, on your workflows — in
                a 30-minute personalised walkthrough.
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
              <SectionWebpImage
                src={featuresPageImages.cta}
                alt="Explore Formezy in depth"
                aspectWidth={480}
                aspectHeight={360}
                sizes="(max-width: 1024px) 90vw, 380px"
                className="relative z-10 max-w-[380px] rounded-2xl border-0 bg-transparent shadow-none"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Root export — all 11 sections
───────────────────────────────────────────── */
export default function FeaturesContent() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Explore intro */}
      <ExploreFeaturesSection />

      {/* 3. AskEzy Intelligence — image left, text right */}
      <FeatureRow
        eyebrow="AI Assistant"
        title={<>AskEzy <G>Intelligence</G></>}
        description="Ask anything about your business in natural language — AskEzy searches across your workflows, documents and data in real-time."
        bullets={[
          "Natural language queries across all modules",
          "Document summarisation and extraction",
          "Contextual answers with source citations",
        ]}
        ctaHref="/platform/features/ask-ezy"
        imageSrc={featuresPageImages.askEzy}
        imageAlt="AskEzy AI assistant in Formezy"
        imgW={620}
        imgH={440}
        bgWhite
      />

      {/* 4. Developer Studio — text left, image right */}
      <FeatureRow
        reverse
        eyebrow="For Developers"
        title={<>Developer <G>Studio</G></>}
        description="When you need to go deeper, Developer Studio gives your engineers full control — custom modules, extensions and APIs with full TypeScript support."
        bullets={[
          "TypeScript SDK for advanced modules",
          "Custom event handlers and webhooks",
          "Embedded dev tools and sandbox",
        ]}
        ctaHref="/platform/features/developer-studio"
        imageSrc={featuresPageImages.studio}
        imageAlt="Developer Studio in Formezy"
        imgW={620}
        imgH={440}
      />

      {/* 5. Logic Builder — centered + wide screenshot */}
      <FeatureCentered
        eyebrow="Visual Workflow"
        title={<>Logic <G>Builder</G></>}
        description="Drag-and-drop your business logic — branching rules, approvals and automations — without writing a single line of code."
        ctaHref="/platform/features/logic-builder"
        imageSrc={featuresPageImages.logicBuilder}
        imageAlt="Visual Logic Builder in Formezy"
        imgW={1300}
        imgH={560}
        bgWhite
      />

      {/* 6. Workflow Automation — image left, text right */}
      <FeatureRow
        eyebrow="Automation"
        title={<>Workflow <G>Automation</G></>}
        description="Turn repetitive work into background automations that just run — with full visibility, SLA guarantees and retry policies."
        bullets={[
          "Event-based triggers and scheduled runs",
          "Retry and fallback on failure",
          "Human-in-the-loop escalation paths",
        ]}
        ctaHref="/platform/features/workflow-automation"
        imageSrc={featuresPageImages.automation}
        imageAlt="Workflow automation in Formezy"
        imgW={620}
        imgH={420}
      />

      {/* 7. Integrations & Connections — text left, image right */}
      <FeatureRow
        reverse
        eyebrow="Integrations"
        title={<>Integrations &amp; <G>Connections</G></>}
        description="Plug Formezy into the tools you already use — ERPs, CRMs, email, storage and more — with native, maintained connectors."
        bullets={[
          "50+ native integrations out of the box",
          "Open API and webhooks for custom tools",
          "SSO, SCIM and SAML support",
        ]}
        ctaHref="/platform/integrations-connectors"
        imageSrc={featuresPageImages.integrations}
        imageAlt="Integrations and connections in Formezy"
        imgW={620}
        imgH={420}
        bgWhite
      />

      {/* 8. Reporting & Dashboards — centered + wide screenshot */}
      <FeatureCentered
        eyebrow="Analytics"
        title={<>Reporting &amp; <G>Dashboards</G></>}
        description="Live dashboards built on live data — for ops leaders who need answers now, not a data-team ticket next week."
        ctaHref="/platform/features/reporting-dashboards"
        imageSrc={featuresPageImages.dashboards}
        imageAlt="Reporting and dashboards in Formezy"
        imgW={1300}
        imgH={560}
      />

      {/* 9. Mobile Access — image left, text right */}
      <FeatureRow
        eyebrow="On the Go"
        title={<>Mobile <G>Access</G></>}
        description="Approve, review and act on critical workflows from anywhere — a dedicated Formezy app for iOS and Android, optimised for speed."
        bullets={[
          "Offline-first approvals and submissions",
          "Push notifications with full context",
          "Face ID / Touch ID sign-in",
        ]}
        ctaHref="/platform/features/mobile-access"
        imageSrc={featuresPageImages.mobile}
        imageAlt="Mobile access to Formezy"
        imgW={560}
        imgH={480}
        bgWhite
      />

      {/* 10. Security & Compliance — text left, image right */}
      <FeatureRow
        reverse
        eyebrow="Trust"
        title={<>Security &amp; <G>Compliance</G></>}
        description="Built for enterprises with strict security, compliance and data residency requirements — SOC 2, ISO 27001 and region-locked deployments."
        bullets={[
          "SOC 2 Type II · ISO 27001 certified",
          "Row-level security and field encryption",
          "Immutable audit logs and access controls",
        ]}
        ctaHref="/platform/features/security-compliance"
        imageSrc={featuresPageImages.security}
        imageAlt="Security and compliance in Formezy"
        imgW={620}
        imgH={460}
      />

      {/* 11. CTA */}
      <CtaSectionBlock />
    </>
  );
}
