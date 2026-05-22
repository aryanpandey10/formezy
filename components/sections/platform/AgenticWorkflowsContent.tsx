"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import PlatformFeatureHero from "@/components/sections/platform/PlatformFeatureHero";
import { agenticWorkflowsPageImages } from "@/lib/agentic-workflows-page-images";

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

const whatAreBullets = [
  "Workflows that reason over live business context",
  "Decisions and actions triggered without manual hand-offs",
  "Orchestration across people, data, and systems",
];

const keyCapabilities = [
  "Context-aware routing and next-best actions",
  "AI-assisted decisions within governed workflows",
  "Multi-step orchestration with human oversight",
  "Event-driven triggers and adaptive paths",
  "Audit trails for every automated decision",
  "Secure integration with your existing stack",
];

const futureOfWorkBullets = [
  "Scale intelligent operations without adding complexity",
  "Empower teams with workflows that adapt in real time",
  "Reduce dependency on rigid, static rule sets",
];

const featureCards = [
  {
    title: (
      <>
        Beyond Traditional <G>Automation</G>
      </>
    ),
    description:
      "Go past fixed if-then rules. Agentic workflows interpret context, choose paths, and execute the right next step.",
    bullets: [
      "Dynamic branching based on live data",
      "Fewer brittle scripts and manual exceptions",
      "Automation that responds when conditions change",
    ],
  },
  {
    title: (
      <>
        Built for Dynamic <G>Business Operations</G>
      </>
    ),
    description:
      "Model how work actually runs — with variability, approvals, and cross-team dependencies built in.",
    bullets: [
      "Adapt to shifting priorities and inputs",
      "Coordinate across departments in one flow",
      "Keep governance without slowing execution",
    ],
  },
  {
    title: (
      <>
        Intelligent Execution <G>Across Workflows</G>
      </>
    ),
    description:
      "Connect triggers, decisions, and outcomes so every step knows what happened before and what should happen next.",
    bullets: [
      "End-to-end visibility from trigger to close",
      "Consistent execution at scale",
      "Human-in-the-loop when judgment is required",
    ],
  },
  {
    title: (
      <>
        From Static Rules to <G>Intelligent Systems</G>
      </>
    ),
    description:
      "Evolve from rigid checklists to workflows that learn from patterns and improve how work gets done.",
    bullets: [
      "Replace one-off workarounds with governed flows",
      "Reduce rework from outdated static rules",
      "Build operational resilience over time",
    ],
  },
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
      currentLabel="Agentic Workflows"
      title={
        <>
          Workflows That Think, <G>Decide, and Act</G>
        </>
      }
      description={
        <p>
          Formezy agentic workflows combine automation, context, and intelligence
          — so processes don&apos;t just run, they adapt and execute with
          purpose.
        </p>
      }
      sectionClassName="pb-6 md:pb-10"
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
            className="pointer-events-none absolute -right-20 top-24 -z-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#708FF4]/25 to-[#6C60E8]/20 blur-3xl md:h-64 md:w-64"
            aria-hidden
          />
        </>
      }
    />
  );
}

function WhatAreSection() {
  return (
    <section className="section pt-4 md:pt-6">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[28px] border border-purple-100/80 bg-white/90 shadow-card"
        >
          <div className="grid items-center gap-8 p-6 md:gap-10 md:p-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[4/3] w-full min-h-[220px] overflow-hidden rounded-[20px] border border-purple-50 bg-gradient-to-br from-purple-50/50 to-white md:min-h-[300px]">
              <Image
                src={agenticWorkflowsPageImages.whatAre}
                alt="What are agentic workflows — interconnected intelligent nodes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center p-4 md:p-6"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-sora text-[28px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[36px]">
                What Are <G>Agentic Workflows</G>
              </h2>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
                Agentic workflows are intelligent, autonomous process flows that
                evaluate context, make governed decisions, and take action —
                connecting your teams, data, and systems in one adaptive layer.
              </p>
              <BulletList items={whatAreBullets} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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

function CenteredSection({
  title,
  description,
}: {
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="section bg-white/70 backdrop-blur-sm">
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
          className="relative overflow-hidden rounded-[32px] border border-purple-100 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/60"
        >
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:py-16">
            <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[52px]">
              Move Beyond <G>Automation</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              See how agentic workflows compare to traditional automation — and
              what intelligent execution means for your operations.
            </p>
            <Button href="#demo" size="lg" className="rounded-[12px] px-10">
              Book a Demo <ArrowRight size={18} />
            </Button>
          </div>
          <div className="relative w-full px-4 pb-6 md:px-8 md:pb-10">
            <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl min-h-[200px] md:min-h-[320px]">
              <Image
                src={agenticWorkflowsPageImages.cta}
                alt="Traditional automation vs intelligent agentic system"
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

export default function AgenticWorkflowsContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhatAreSection />
      <FeaturesGrid />
      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={agenticWorkflowsPageImages.keyCapabilities}
        imageAlt="Agentic workflow key capabilities icon grid"
        title={
          <>
            Key <G>Capabilities</G>
          </>
        }
        bulletPoints={keyCapabilities}
        reverse
      />
      <FeatureShowcaseSection
        image={agenticWorkflowsPageImages.futureOfWork}
        imageAlt="Built for the future of work with connected tools"
        title={
          <>
            Built for the <G>Future of Work</G>
          </>
        }
        description="Equip teams with workflows that meet modern expectations — responsive, connected, and intelligent — without rebuilding your entire stack."
        bulletPoints={futureOfWorkBullets}
      />
      <CenteredSection
        title={
          <>
            Business <G>Impact</G>
          </>
        }
        description="Faster execution, fewer manual bottlenecks, and operations that stay aligned as conditions change — with visibility and control at every step."
      />
      <CtaSection />
    </main>
  );
}
