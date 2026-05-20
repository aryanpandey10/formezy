"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import { logicBuilderPageImages } from "@/lib/logic-builder-page-images";

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

const buildLogicBullets = [
  "Visual nodes for conditions, branches, and actions",
  "Connect data, users, and modules in one flow",
  "See the full path from trigger to outcome",
];

const designedBullets = [
  "Approvals, escalations, and SLA-driven routing",
  "Multi-step processes across departments",
  "Rules that reflect how your business actually runs",
];

const keyCapabilities = [
  "Drag-and-drop workflow design",
  "Conditional branching and parallel paths",
  "Event triggers and scheduled runs",
  "Human-in-the-loop steps",
  "Governed publishing and testing",
];

const controlBullets = [
  "Full editor for complex logic without code",
  "Property panels for every node and connection",
  "Debug and trace flows before going live",
];

const continuousChangeBullets = [
  "Update workflows without rebuilding the platform",
  "Version and roll back with confidence",
  "Adapt as policies and operations evolve",
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
          <span className="font-semibold text-[#2C0E3A]">Logic Builder</span>
        </motion.nav>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.1] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Turn Processes Into <G>Intelligent Workflows</G>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-[760px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]"
          >
            Logic Builder lets teams design, automate, and refine business
            workflows visually — turning static processes into adaptive systems
            that scale with your operations.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/60 shadow-[0_16px_48px_rgba(108,96,232,0.12)] md:rounded-[28px]"
        >
          <div className="relative aspect-[21/10] w-full min-h-[240px] md:min-h-[380px]">
            <Image
              src={logicBuilderPageImages.hero}
              alt="Logic Builder intelligent workflow diagram"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-contain object-center p-2 md:p-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CenteredSection({
  title,
  description,
  className = "",
}: {
  title: React.ReactNode;
  description: string;
  className?: string;
}) {
  return (
    <section className={`section ${className}`}>
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
            From Static Processes to <G>Dynamic Workflows</G>
          </h2>
          <p className="mb-8 font-sora text-[15px] leading-[26px] text-[#6366A8]">
            Replace rigid, manual hand-offs with flows that respond to data,
            roles, and real-time events — so operations stay aligned as conditions
            change.
          </p>
          <blockquote className="relative font-rancho text-[26px] leading-[1.4] text-[#5B6FD8] md:text-[32px] lg:text-[38px]">
            Rigid steps slow you down.
            <br />
            Smart workflows move with you.
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
            src={logicBuilderPageImages.cta}
            alt="Build smarter adaptive workflows with Logic Builder"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/50" />
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:py-20">
            <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[56px]">
              Build Smarter, <G>Adaptive Workflows</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Start designing intelligent processes on Formezy — with the clarity
              and control your teams need to automate with confidence.
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

export default function LogicBuilderContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <CenteredSection
        className="bg-white/80 py-14 backdrop-blur-sm md:py-16"
        title={
          <>
            What Is <G>Logic Builder</G>
          </>
        }
        description="Logic Builder is Formezy's visual workflow engine — where teams map triggers, conditions, approvals, and actions into flows that run reliably across the platform."
      />

      <FeatureShowcaseSection
        image={logicBuilderPageImages.build}
        imageAlt="Build logic not complexity"
        title={
          <>
            Build Logic, <G>Not Complexity</G>
          </>
        }
        description="Design powerful automation without drowning in code. Connect nodes, set rules, and see how data and decisions move through your organization."
        bulletPoints={buildLogicBullets}
      />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={logicBuilderPageImages.designed}
        imageAlt="Designed for real business scenarios"
        title={
          <>
            Designed for <G>Real Business Scenarios</G>
          </>
        }
        description="From procurement approvals to customer onboarding — model the paths, exceptions, and hand-offs your teams deal with every day."
        bulletPoints={designedBullets}
        reverse
      />

      <QuoteSection />

      <FeatureShowcaseSection
        image={logicBuilderPageImages.keyCapabilities}
        imageAlt="Logic Builder key capabilities"
        title={
          <>
            <G>Key Capabilities</G>
          </>
        }
        bulletPoints={keyCapabilities}
      />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={logicBuilderPageImages.control}
        imageAlt="Control without complexity in Logic Builder"
        title={
          <>
            <G>Control</G> Without Complexity
          </>
        }
        description="The full Logic Builder editor gives you precision when you need it — with a visual canvas, property panels, and testing tools in one place."
        bulletPoints={controlBullets}
        reverse
      />

      <FeatureShowcaseSection
        image={logicBuilderPageImages.built}
        imageAlt="Built for continuous change"
        title={
          <>
            Built for <G>Continuous Change</G>
          </>
        }
        description="Business rules evolve. Logic Builder makes it practical to update flows, test changes, and roll out improvements without disrupting live operations."
        bulletPoints={continuousChangeBullets}
      />

      <CenteredSection
        className="bg-white/70 backdrop-blur-sm"
        title={<G>Business Impact</G>}
        description="Teams automate faster, reduce manual errors, and gain visibility into how work moves through the organization — improving speed, consistency, and accountability."
      />

      <CtaSection />
    </main>
  );
}
