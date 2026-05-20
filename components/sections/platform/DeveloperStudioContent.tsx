"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import { developerStudioPageImages } from "@/lib/developer-studio-page-images";

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

const flexibilityBullets = [
  "Design workflows visually with drag-and-drop logic",
  "Connect modules, data, and actions without custom code",
  "Iterate quickly as business rules change",
];

const lowCodeBullets = [
  "Build real application logic — not just simple forms",
  "Use conditions, loops, and data transforms in one studio",
  "Ship production-ready flows with governance built in",
];

const businessNeedsBullets = [
  "Model ERP, CRM, and operations modules to match your processes",
  "Configure fields, validations, and approvals per department",
  "Extend the platform without waiting on lengthy dev cycles",
];

const keyCapabilities = [
  "Visual workflow and logic builder",
  "Reusable components and templates",
  "Versioning and change tracking",
  "Role-based publishing and testing",
  "Deep integration with Formezy data models",
];

const scaleBullets = [
  "Supports growing teams, locations, and transaction volume",
  "Structured governance as complexity increases",
  "Performance tuned for enterprise-scale operations",
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
          <span className="font-semibold text-[#2C0E3A]">Developer Studio</span>
        </motion.nav>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Build Without Limits. <G>Customize Without Complexity.</G>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-[760px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]"
          >
            Developer Studio is Formezy&apos;s visual builder for workflows,
            logic, and applications — so teams can create powerful systems
            without heavy custom development.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/60 shadow-[0_16px_48px_rgba(108,96,232,0.12)] md:rounded-[28px]"
        >
          <div className="relative aspect-[21/10] w-full min-h-[240px] md:min-h-[360px]">
            <Image
              src={developerStudioPageImages.hero}
              alt="Developer Studio workflow builder"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-contain object-center p-4 md:p-6"
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
            src={developerStudioPageImages.cta}
            alt="Build systems that fit your business with Developer Studio"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/50" />
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:py-20">
            <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[56px]">
              Build Systems That <G>Fit Your Business</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Start creating flexible, scalable solutions with Developer
              Studio — tailored to how your teams work today and how you will
              grow tomorrow.
            </p>
            <Button href="#demo" size="lg" className="rounded-[12px] px-10">
              Try for Free <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function DeveloperStudioContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <CenteredSection
        className="bg-white/80 py-14 backdrop-blur-sm md:py-16"
        title={
          <>
            What is <G>Developer Studio</G>
          </>
        }
        description="Developer Studio is where teams design, configure, and extend Formezy — using visual tools to build workflows, application logic, and operational systems aligned with real business needs."
      />

      <FeatureShowcaseSection
        image={developerStudioPageImages.flexibility}
        imageAlt="Built for flexibility and control in Developer Studio"
        title={
          <>
            Built for <G>Flexibility and Control</G>
          </>
        }
        description="Shape how your platform behaves — from field-level rules to multi-step workflows — with full visibility into how logic connects across your system."
        bulletPoints={flexibilityBullets}
      />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={developerStudioPageImages.lowCode}
        imageAlt="Low-code meets real capability in Developer Studio"
        title={
          <>
            <G>Low-Code</G> Meets <G>Real Capability</G>
          </>
        }
        description="Go beyond basic automation. Developer Studio supports the depth enterprises need — complex conditions, integrations, and governed releases — in a visual environment."
        bulletPoints={lowCodeBullets}
        reverse
      />

      <FeatureShowcaseSection
        image={developerStudioPageImages.build}
        imageAlt="Build what your business actually needs"
        title={
          <>
            Build What Your <G>Business Actually Needs</G>
          </>
        }
        description="Configure navigation, modules, and data structures that mirror your organization — not a rigid template that forces you to change how you operate."
        bulletPoints={businessNeedsBullets}
      />

      <CenteredSection
        title={
          <>
            Seamless Integration <G>with the Platform</G>
          </>
        }
        description="Developer Studio is native to Formezy — everything you build connects directly to live data, permissions, workflows, and reporting without brittle third-party glue."
      />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={developerStudioPageImages.keyCapabilities}
        imageAlt="Developer Studio key capabilities"
        title={
          <>
            <G>Key Capabilities</G>
          </>
        }
        bulletPoints={keyCapabilities}
        reverse
      />

      <FeatureShowcaseSection
        image={developerStudioPageImages.scale}
        imageAlt="Built to scale with your business"
        title={
          <>
            Built to <G>Scale With You</G>
          </>
        }
        description="As your operations grow, Developer Studio grows with you — supporting more users, locations, and complexity without rebuilding from scratch."
        bulletPoints={scaleBullets}
      />

      <CenteredSection
        className="bg-white/70 backdrop-blur-sm"
        title={<G>Business Impact</G>}
        description="Teams ship changes faster, reduce dependency on custom code, and keep operations aligned with a single governed platform — improving agility while maintaining control."
      />

      <CtaSection />
    </main>
  );
}
