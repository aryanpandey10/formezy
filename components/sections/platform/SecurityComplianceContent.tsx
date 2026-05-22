"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import PlatformFeatureHero from "@/components/sections/platform/PlatformFeatureHero";
import { securityCompliancePageImages } from "@/lib/security-compliance-page-images";

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

const roleBasedBullets = [
  "Granular roles and permissions by module and action",
  "Field-level and record-level access controls",
  "SSO, SCIM, and SAML for enterprise identity",
];

const dataProtectionBullets = [
  "Encryption in transit and at rest",
  "Row-level security across modules",
  "Secure data residency options",
];

const complianceBullets = [
  "SOC 2 Type II and ISO 27001 aligned practices",
  "Audit-ready logging and retention",
  "Policies that support regulated industries",
];

const keyCapabilitiesBullets = [
  "Immutable audit logs and access history",
  "Multi-factor authentication support",
  "Environment separation and governed deployments",
  "Vulnerability management and monitoring",
  "Data export and deletion controls",
];

const consistencyBullets = [
  "Same security model across web and mobile",
  "Consistent enforcement in workflows and APIs",
  "Clear ownership for admins and compliance teams",
];

const auditBullets = [
  "Chronological activity feed across the platform",
  "Who did what, when, and on which record",
  "Exportable logs for internal and external review",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-sora text-[14px] leading-[22px] text-[#6366A8] md:text-[15px]"
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
            <Check size={11} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function HeroSection() {
  return (
    <PlatformFeatureHero
      currentLabel="Security & Compliance"
      title={
        <>
          <G>Secure</G> by Design. <G>Controlled</G> by You.
        </>
      }
      description={
        <p>
          Formezy is built for enterprises that need strong security, governed
          access, and compliance-ready operations — without slowing how teams
          work.
        </p>
      }
      sectionClassName="pb-4 md:pb-8"
      decorations={
        <>
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(#6C60E8 1.5px, transparent 1.5px)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 top-24 -z-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#708FF4]/25 to-[#6C60E8]/20 blur-3xl md:h-64 md:w-64"
            aria-hidden
          />
        </>
      }
    >
      <div className="relative w-full overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/60 shadow-[0_16px_48px_rgba(108,96,232,0.12)] md:rounded-[28px]">
        <div className="relative aspect-[21/10] w-full min-h-[240px] md:min-h-[380px]">
          <Image
            src={securityCompliancePageImages.hero}
            alt="Secure by design — connected security and data nodes"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
            className="object-contain object-center p-2 md:p-4"
          />
        </div>
      </div>
    </PlatformFeatureHero>
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

const featureCards = [
  {
    title: (
      <>
        Data Protection <G>at Every Level</G>
      </>
    ),
    description:
      "Protect sensitive operational and customer data with encryption, access controls, and governance built into the platform.",
    bullets: dataProtectionBullets,
  },
  {
    title: (
      <>
        Built for <G>Compliance Readiness</G>
      </>
    ),
    description:
      "Support audits and regulatory expectations with logging, policies, and practices aligned to enterprise standards.",
    bullets: complianceBullets,
  },
  {
    title: (
      <>
        <G>Key Capabilities</G>
      </>
    ),
    description:
      "The security controls teams expect when running mission-critical workflows on Formezy.",
    bullets: keyCapabilitiesBullets,
  },
  {
    title: (
      <>
        Consistency You Can <G>Rely On</G>
      </>
    ),
    description:
      "One security model everywhere — so enforcement does not vary between modules, devices, or integrations.",
    bullets: consistencyBullets,
  },
];

function FeaturesGrid() {
  return (
    <section className="section bg-white/80 py-12 backdrop-blur-sm md:py-16">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {featureCards.map((card) => (
            <motion.article
              key={card.bullets[0]}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-[24px] border border-purple-100/80 bg-white p-7 shadow-card md:p-8"
            >
              <h3 className="font-sora text-[22px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[26px]">
                {card.title}
              </h3>
              <p className="font-sora text-[14px] leading-[24px] text-[#6366A8] md:text-[15px]">
                {card.description}
              </p>
              <BulletList items={card.bullets} />
            </motion.article>
          ))}
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
          className="relative overflow-hidden rounded-[32px] border border-purple-100 bg-gradient-to-br from-purple-50/90 via-white to-blue-50/60"
        >
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:py-16">
            <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[52px]">
              Operate With <G>Confidence and Control</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Run secure, compliant, and robust operations on Formezy — with
              visibility and governance your leadership and auditors can trust.
            </p>
            <Button href="#demo" size="lg" className="rounded-[12px] px-10">
              Get Started <ArrowRight size={18} />
            </Button>
          </div>
          <div className="relative w-full px-4 pb-6 md:px-8 md:pb-10">
            <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl min-h-[220px] md:min-h-[340px]">
              <Image
                src={securityCompliancePageImages.cta}
                alt="Operate with confidence and control on Formezy"
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SecurityComplianceContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <CenteredSection
        className="bg-white/80 py-14 backdrop-blur-sm md:py-16"
        title={
          <>
            Built for <G>Secure Business Operations</G>
          </>
        }
        description="Security and compliance are part of how Formezy runs — from identity and access to audit trails and data protection across every workflow and module."
      />

      <FeatureShowcaseSection
        image={securityCompliancePageImages.roleBased}
        imageAlt="Role-based access and control in Formezy"
        title={
          <>
            Role-Based <G>Access and Control</G>
          </>
        }
        description="Define who can see, edit, approve, and administer — with roles that match how your organization actually works."
        bulletPoints={roleBasedBullets}
      />

      <FeaturesGrid />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={securityCompliancePageImages.audit}
        imageAlt="Complete audit visibility in Formezy"
        title={
          <>
            Complete <G>Audit Visibility</G>
          </>
        }
        description="Every meaningful action leaves a trace — so security, operations, and compliance teams can investigate and report with confidence."
        bulletPoints={auditBullets}
      />

      <CenteredSection
        className="bg-white/70 backdrop-blur-sm"
        title={
          <>
            Business <G>Impact</G>
          </>
        }
        description="Reduce risk, speed audits, and give stakeholders confidence that operations run on a platform designed for control — not bolted on after the fact."
      />

      <CtaSection />
    </main>
  );
}
