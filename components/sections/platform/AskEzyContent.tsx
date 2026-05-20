"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import { askezyPageImages } from "@/lib/askezy-page-images";

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

const whatYouCanDo = [
  "Ask questions about live business data in plain language",
  "Summarize reports, documents, and operational updates instantly",
  "Get reminders for tasks, meetings, and pending approvals",
  "Track workflow status without opening multiple modules",
  "Surface insights from connected systems in one conversation",
];

const businessContextBullets = [
  "Queries run against your real Formezy data — not generic answers",
  "Understands modules, workflows, and permissions in your environment",
  "Keeps responses aligned with how your business actually operates",
];

const everydayBullets = [
  "Faster decisions for managers and team leads",
  "Less time searching across spreadsheets and tools",
  "Clear answers for daily operational questions",
];

const keyCapabilities = [
  "Natural language search across business data",
  "Context-aware summaries and explanations",
  "Cross-module visibility in a single query",
  "Role-based access so teams see only what they should",
  "Integrated with Formezy workflows and records",
];

const proactiveBullets = [
  "Highlights anomalies and overdue items before they escalate",
  "Suggests next steps based on workflow state",
  "Surfaces trends teams might miss in manual reviews",
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-4 pt-8 md:pb-8 md:pt-12 lg:pt-14">
      <div className="container-app">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex flex-wrap items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#2C0E3A]">
            Home
          </Link>
          <ChevronRight size={13} className="opacity-50" />
          <Link href="/platform/overview" className="hover:text-[#2C0E3A]">
            Platform
          </Link>
          <ChevronRight size={13} className="opacity-50" />
          <Link href="/platform/features" className="hover:text-[#2C0E3A]">
            Features
          </Link>
          <ChevronRight size={13} className="opacity-50" />
          <span className="font-semibold text-[#2C0E3A]">AskEzy</span>
        </motion.nav>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora text-[36px] font-bold leading-[1.1] text-[#2C0E3A] md:text-[52px] lg:text-[64px]"
          >
            Ask. <G>Understand. Act.</G>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-[720px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]"
          >
            AskEzy Intelligence turns scattered business data into instant
            answers — so teams understand what is happening and what to do next,
            without switching tools.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-[#F5F3FF] shadow-[0_16px_48px_rgba(108,96,232,0.15)] md:rounded-[28px]"
        >
          <div className="relative aspect-video w-full">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={askezyPageImages.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="AskEzy Intelligence product overview"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CenteredIntro({
  title,
  description,
}: {
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="section bg-white/80 py-14 backdrop-blur-sm md:py-16">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px] lg:text-[48px]"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="section py-12 md:py-16">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl rounded-[28px] border border-purple-100/80 bg-gradient-to-br from-purple-50/90 via-white to-blue-50/50 px-8 py-12 text-center shadow-card md:px-14 md:py-16"
        >
          <span
            className="pointer-events-none absolute left-6 top-4 font-sora text-[80px] font-bold leading-none text-[#6C60E8]/15 md:left-10 md:text-[100px]"
            aria-hidden
          >
            &ldquo;
          </span>
          <h2 className="mb-4 font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[36px]">
            From Searching to <G>Instant Clarity</G>
          </h2>
          <p className="mb-8 font-sora text-[15px] leading-[26px] text-[#6366A8]">
            Stop digging through modules, exports, and inbox threads. Ask once
            and get a clear answer grounded in your live business context.
          </p>
          <blockquote className="relative font-rancho text-[26px] leading-[1.4] text-[#5B6FD8] md:text-[32px] lg:text-[36px]">
            No searching. No switching tools.
            <br />
            Just answers.
          </blockquote>
          <span
            className="pointer-events-none absolute bottom-4 right-6 font-sora text-[80px] font-bold leading-none text-[#6C60E8]/15 md:right-10 md:text-[100px]"
            aria-hidden
          >
            &rdquo;
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function BusinessImpactSection() {
  return (
    <section className="section bg-white/70 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-[800px] text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[44px]"
          >
            <G>Business</G> Impact
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Teams spend less time hunting for information and more time acting
            on it. AskEzy reduces follow-up friction, speeds up decisions, and
            helps leaders stay aligned with what is happening across operations
            — in real time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section pb-20 pt-4 md:pb-28">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-purple-100 md:min-h-[560px] lg:min-h-[640px]"
        >
          <Image
            src={askezyPageImages.cta}
            alt="Turn data into instant decisions with AskEzy"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/40" />
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
            <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[56px]">
              Turn Data Into <G>Instant Decisions</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              See how AskEzy Intelligence fits into your Formezy platform and
              gives every team clarity without the complexity.
            </p>
            <Button href="#demo" size="lg" className="rounded-[12px] px-10">
              Get Started <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AskEzyContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <CenteredIntro
        title={
          <>
            What Is <G>AskEzy Intelligence</G>
          </>
        }
        description="AskEzy is Formezy's built-in AI layer — designed to understand your business context, query live operational data, and return answers teams can trust and act on."
      />

      <FeatureShowcaseSection
        image={askezyPageImages.what}
        imageAlt="AskEzy Intelligence interface overview"
        title={
          <>
            Built for Real <G>Business Context</G>
          </>
        }
        description="Unlike generic chat tools, AskEzy connects to your Formezy environment — workflows, records, and permissions — so every response reflects how your organization actually works."
        bulletPoints={businessContextBullets}
        reverse
      />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={askezyPageImages.businessContext}
        imageAlt="What you can do with AskEzy"
        title={
          <>
            <G>What You Can Do</G> With AskEzy
          </>
        }
        description="From daily check-ins to executive summaries, AskEzy helps every role get the information they need — instantly and in context."
        bulletPoints={whatYouCanDo}
      />

      <QuoteSection />

      <FeatureShowcaseSection
        image={askezyPageImages.designed}
        imageAlt="Designed for everyday business decisions"
        title={
          <>
            <G>Designed for</G> Everyday Decisions
          </>
        }
        description="AskEzy is built for the questions teams ask every day — not just analysts and power users. Anyone can get clear, actionable answers without training."
        bulletPoints={everydayBullets}
        reverse
      />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={askezyPageImages.keyCapabilities}
        imageAlt="AskEzy key capabilities"
        title={
          <>
            Key <G>Capabilities</G>
          </>
        }
        bulletPoints={keyCapabilities}
      />

      <FeatureShowcaseSection
        image={askezyPageImages.proactive}
        imageAlt="Proactive intelligence with AskEzy"
        title={
          <>
            <G>Proactive</G> Intelligence
          </>
        }
        description="AskEzy doesn't wait for you to ask — it can highlight what needs attention, flag risks early, and keep teams ahead of operational surprises."
        bulletPoints={proactiveBullets}
        reverse
      />

      <BusinessImpactSection />
      <CtaSection />
    </main>
  );
}
