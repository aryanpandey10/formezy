"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import PlatformFeatureHero from "@/components/sections/platform/PlatformFeatureHero";
import { reportingDashboardsPageImages } from "@/lib/reporting-dashboards-page-images";

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

const realTimeBullets = [
  "Monitor performance and KPIs in real time",
  "Identify bottlenecks and delays instantly",
  "See live data tied to actual operations",
];

const actionableInsightsBullets = [
  "Drill from summary metrics into underlying records",
  "Spot trends before they become problems",
  "Align teams around the same numbers",
];

const reportsEffortBullets = [
  "Generate reports without manual exports",
  "Schedule and share updates automatically",
  "Reduce time spent assembling spreadsheets",
];

const keyCapabilities = [
  "Live operational and financial dashboards",
  "Role-based views for leaders and teams",
  "Custom charts, filters, and drill-downs",
  "Scheduled reports and email delivery",
  "Data from workflows, forms, and integrations",
  "Export and sharing with governed access",
];

const clearDecisionsBullets = [
  "Replace scattered files with one source of truth",
  "Focus on signals that matter for decisions",
  "Give every role the visibility they need",
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
      currentLabel="Reporting & Dashboards"
      title={
        <>
          Clarity That <G>Drives Decisions</G>
        </>
      }
      description={
        <p>
          Reporting and dashboards in Formezy turn live operational data into
          clear visibility — so leaders and teams act with confidence, not
          guesswork.
        </p>
      }
      sectionClassName="pb-4 md:pb-8"
      decorations={
        <>
          <div
            className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-[#708FF4]/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-[#6C60E8]/15 blur-3xl"
            aria-hidden
          />
        </>
      }
    >
      <div className="relative w-full overflow-hidden rounded-[24px] border border-purple-100/70 shadow-[0_20px_56px_rgba(108,96,232,0.18)] md:rounded-[28px]">
        <div className="relative aspect-[21/10] w-full min-h-[240px] md:min-h-[400px]">
          <Image
            src={reportingDashboardsPageImages.hero}
            alt="Formezy reporting dashboard with charts and KPIs"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1000px"
            className="object-cover object-center"
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

function RealTimeSection() {
  return (
    <section className="section py-10 md:py-14">
      <div className="container-app">
        <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            className="relative lg:col-span-7"
          >
            <div className="relative aspect-[4/3] w-full min-h-[260px] overflow-hidden rounded-[24px] border border-purple-100/60 opacity-90 md:min-h-[360px]">
              <Image
                src={reportingDashboardsPageImages.realTime}
                alt="Real-time operational data visibility"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-left"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="rounded-[24px] border border-purple-100/80 bg-white/95 p-8 shadow-card md:p-10 lg:col-span-5 lg:-ml-8 lg:translate-x-4"
          >
            <h2 className="font-sora text-[26px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[32px]">
              Real-Time Visibility <G>Across Operations</G>
            </h2>
            <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8]">
              See what is happening across workflows, teams, and modules as it
              happens — without waiting for end-of-week reports.
            </p>
            <div className="mt-6">
              <BulletList items={realTimeBullets} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DualFeatureCards() {
  const cards = [
    {
      title: (
        <>
          Turn Data Into <G>Actionable Insights</G>
        </>
      ),
      description:
        "Move from raw numbers to narratives your teams can use — with context from the workflows and records behind every metric.",
      bullets: actionableInsightsBullets,
    },
    {
      title: (
        <>
          Reports Without <G>the Effort</G>
        </>
      ),
      description:
        "Stop rebuilding the same exports every month. Formezy keeps reports current from live data so sharing stays simple.",
      bullets: reportsEffortBullets,
    },
  ];

  return (
    <section className="section bg-white/80 py-12 backdrop-blur-sm md:py-16">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <motion.article
              key={card.bullets[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="rounded-[24px] border border-purple-100/80 bg-white p-8 shadow-card md:p-10"
            >
              <h3 className="font-sora text-[24px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[28px]">
                {card.title}
              </h3>
              <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8]">
                {card.description}
              </p>
              <div className="mt-6">
                <BulletList items={card.bullets} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomDashboardsSection() {
  return (
    <section className="section py-12 md:py-16">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[900px] flex-col items-center gap-8 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px] lg:text-[48px]"
          >
            Custom Dashboards <G>for Every Role</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Give executives, managers, and frontline teams the views they need —
            with permissions and filters that match how they work.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/70 shadow-card md:rounded-[28px]"
          >
            <div className="relative aspect-[16/9] w-full min-h-[280px] md:min-h-[420px]">
              <Image
                src={reportingDashboardsPageImages.role}
                alt="Custom role-based dashboards in Formezy"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-contain object-center p-3 md:p-5"
              />
            </div>
          </motion.div>
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
          className="relative overflow-hidden rounded-[32px] border border-purple-100 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/60"
        >
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:py-16">
            <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[52px]">
              Turn Data Into <G>Confident Decisions</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Experience complete visibility into cost, performance, and outcomes
              within Formezy — from live operations to leadership-ready insight.
            </p>
            <Button href="#demo" size="lg" className="rounded-[12px] px-10">
              Get Started <ArrowRight size={18} />
            </Button>
          </div>
          <div className="relative w-full px-4 pb-6 md:px-8 md:pb-10">
            <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl min-h-[200px] md:min-h-[300px]">
              <Image
                src={reportingDashboardsPageImages.cta}
                alt="Turn data into confident decisions"
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

export default function ReportingDashboardsContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <CenteredSection
        className="bg-white/80 py-14 backdrop-blur-sm md:py-16"
        title={
          <>
            What Are <G>Reporting &amp; Dashboards</G>
          </>
        }
        description="Formezy reporting connects directly to your workflows and records — delivering live dashboards, scheduled reports, and role-based views without a separate BI stack."
      />

      <RealTimeSection />
      <DualFeatureCards />
      <CustomDashboardsSection />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={reportingDashboardsPageImages.keyCapabilities}
        imageAlt="Reporting and dashboard key capabilities"
        title={
          <>
            Key <G>Capabilities</G>
          </>
        }
        bulletPoints={keyCapabilities}
        reverse
      />

      <FeatureShowcaseSection
        image={reportingDashboardsPageImages.dataOverload}
        imageAlt="From data overload to clear decisions"
        title={
          <>
            From Data Overload to <G>Clear Decisions</G>
          </>
        }
        description="Replace scattered exports and inbox attachments with governed visibility — so teams spend less time hunting data and more time acting on it."
        bulletPoints={clearDecisionsBullets}
      />

      <CenteredSection
        className="bg-white/70 backdrop-blur-sm"
        title={
          <>
            Business <G>Impact</G>
          </>
        }
        description="Leaders get faster answers, teams align on the same metrics, and operations improve through visibility that stays current as work happens."
      />

      <CtaSection />
    </main>
  );
}
