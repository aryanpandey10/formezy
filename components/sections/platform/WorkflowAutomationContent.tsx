"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import PlatformFeatureHero from "@/components/sections/platform/PlatformFeatureHero";
import { workflowAutomationPageImages } from "@/lib/workflow-automation-page-images";

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

const letWorkBullets = [
  "Event-based triggers and scheduled runs",
  "Automatic routing, assignments, and notifications",
  "Background execution with full visibility",
];

const connectStepBullets = [
  "Link forms, approvals, and data updates in one flow",
  "Connect modules and teams across Formezy",
  "Keep context from trigger through completion",
];

const keyCapabilities = [
  "Event-based and scheduled automation triggers",
  "Conditional routing and parallel execution paths",
  "Data mapping and field updates across steps",
  "Notifications, escalations, and SLA handling",
  "Retry policies and error recovery",
  "Integration hooks for external systems",
];

const manualFlowBullets = [
  "Replace repetitive hand-offs with governed automation",
  "Reduce delays and missed steps across departments",
  "Scale execution without adding headcount",
];

function HeroSection() {
  return (
    <PlatformFeatureHero
      currentLabel="Workflow Automation"
      title={
        <>
          Automate Workflows. <G>Accelerate Execution.</G>
        </>
      }
      description={
        <p>
          Turn repetitive processes into reliable automations that run in the
          background — with triggers, routing, and visibility built in.
        </p>
      }
      sectionClassName="pb-4 md:pb-8"
    >
      <div className="relative w-full overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/60 shadow-[0_16px_48px_rgba(108,96,232,0.12)] md:rounded-[28px]">
        <div className="relative aspect-[21/10] w-full min-h-[240px] md:min-h-[380px]">
          <Image
            src={workflowAutomationPageImages.hero}
            alt="Workflow automation from manual effort to continuous flow"
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
  children,
}: {
  title: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
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
          {description ? (
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              {description}
            </motion.p>
          ) : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-sora text-[15px] leading-[24px] text-[#6366A8] md:text-[16px]"
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#708FF4] to-[#6C60E8]"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function DualFeatureColumns() {
  return (
    <section className="section bg-white/80 py-12 backdrop-blur-sm md:py-16">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <h2 className="font-sora text-[28px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[36px]">
              Let Work <G>Move on Its Own</G>
            </h2>
            <BulletList items={letWorkBullets} />
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <h2 className="font-sora text-[28px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[36px]">
              Connect Every <G>Step of Your Process</G>
            </h2>
            <BulletList items={connectStepBullets} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RealWorkflowsSection() {
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
            Built for <G>Real Business Workflows</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Model end-to-end processes with steps, conditions, and outcomes your
            teams recognize — from intake and approval to fulfillment and close-out.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/70 shadow-card md:rounded-[28px]"
          >
            <div className="relative aspect-[16/9] w-full min-h-[280px] md:min-h-[420px]">
              <Image
                src={workflowAutomationPageImages.workflow}
                alt="Real business workflow diagram in Formezy"
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
          className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-purple-100 md:min-h-[560px] lg:min-h-[640px]"
        >
          <Image
            src={workflowAutomationPageImages.cta}
            alt="Let your workflows run themselves with Formezy"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/50" />
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:py-20">
            <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[56px]">
              Let Your <G>Workflows Run Themselves</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Experience seamless execution with Formezy workflow automation —
              less manual effort, more speed, and full visibility end to end.
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

export default function WorkflowAutomationContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <CenteredSection
        className="bg-white/80 py-14 backdrop-blur-sm md:py-16"
        title={
          <>
            What Is <G>Workflow Automation</G>
          </>
        }
        description="Workflow Automation in Formezy runs your defined processes automatically — triggering steps, routing work, updating records, and notifying the right people without manual chasing."
      />

      <FeatureShowcaseSection
        image={workflowAutomationPageImages.work}
        imageAlt="Let work move on its own with workflow automation"
        title={
          <>
            Let Work <G>Move on Its Own</G>
          </>
        }
        description="Set rules once and let Formezy handle the repetitive motion — from assignment and reminders to status updates and escalations."
        bulletPoints={letWorkBullets}
      />

      <DualFeatureColumns />

      <RealWorkflowsSection />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={workflowAutomationPageImages.keyCapabilities}
        imageAlt="Workflow automation key capabilities"
        title={
          <>
            Key <G>Capabilities</G>
          </>
        }
        bulletPoints={keyCapabilities}
        reverse
      />

      <FeatureShowcaseSection
        image={workflowAutomationPageImages.manual}
        imageAlt="From manual effort to continuous flow"
        title={
          <>
            From <G>Manual Effort</G> to <G>Continuous Flow</G>
          </>
        }
        description={
          <>
            <p>
              Move from scattered tasks and inbox chasing to governed flows that
              execute consistently — even as volume and complexity grow.
            </p>
            <blockquote className="mt-6 font-rancho text-[24px] leading-[1.4] text-[#5B6FD8] md:text-[30px] lg:text-[34px]">
              No delays. No missed steps.
              <br />
              Just continuous execution.
            </blockquote>
          </>
        }
        bulletPoints={manualFlowBullets}
      />

      <CenteredSection
        className="bg-white/70 backdrop-blur-sm"
        title={<G>Business Impact</G>}
        description="Teams ship work faster, cut operational friction, and gain confidence that processes run the same way every time — improving throughput, compliance, and customer experience."
      />

      <CtaSection />
    </main>
  );
}
