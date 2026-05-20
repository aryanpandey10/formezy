"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import { mobileAccessPageImages } from "@/lib/mobile-access-page-images";

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

const locationBullets = [
  "Access workflows and records from any device",
  "Approve, submit, and update on the move",
  "Stay productive outside the office",
];

const actionBullets = [
  "Respond to tasks and notifications immediately",
  "Complete approvals with full context on mobile",
  "Act on urgent items without logging into desktop",
];

const speedBullets = [
  "Fast, focused screens built for mobile use",
  "Offline-first where connectivity is limited",
  "Biometric sign-in for quick, secure access",
];

const keyCapabilities = [
  "iOS and Android apps for Formezy",
  "Push notifications with actionable context",
  "Offline approvals and submissions",
  "Face ID and Touch ID authentication",
  "Role-based mobile views and permissions",
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
    <section className="relative overflow-hidden pb-4 pt-8 md:pb-8 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#708FF4]/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#6C60E8]/15 blur-3xl" aria-hidden />
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
          <span className="font-semibold text-[#2C0E3A]">Mobile Access</span>
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
            Operate Your Business, <G>Wherever You Are</G>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-[760px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]"
          >
            Formezy mobile access puts approvals, workflows, and operational
            data in your pocket — so teams stay connected and in control from
            anywhere.
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
              src={mobileAccessPageImages.hero}
              alt="Formezy mobile app screens on dashboard, jobs, and lists"
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

function StayUpdatedSection() {
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
            Stay Updated, <G>Stay Aligned</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Notifications, team context, and live status keep everyone on the
            same page — whether they are in the field, on site, or working
            remotely.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/70 shadow-card md:rounded-[28px]"
          >
            <div className="relative aspect-[21/9] w-full min-h-[260px] md:min-h-[400px]">
              <Image
                src={mobileAccessPageImages.stayUpdated}
                alt="Stay updated and aligned with team network on mobile"
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

function DualCapabilityCards() {
  return (
    <section className="section bg-white/80 py-12 backdrop-blur-sm md:py-16">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="rounded-[24px] border border-purple-100/80 bg-white p-8 shadow-card md:p-10"
          >
            <h3 className="font-sora text-[24px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[28px]">
              Designed for <G>Speed and Simplicity</G>
            </h3>
            <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8]">
              Mobile screens are built for quick decisions — not shrunk-down
              desktop layouts — so field teams can move fast.
            </p>
            <div className="mt-6">
              <BulletList items={speedBullets} />
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.08 }}
            className="rounded-[24px] border border-purple-100/80 bg-white p-8 shadow-card md:p-10"
          >
            <h3 className="font-sora text-[24px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[28px]">
              Key <G>Capabilities</G>
            </h3>
            <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8]">
              Everything you need to run critical work from mobile, with the
              same governance as the web platform.
            </p>
            <div className="mt-6">
              <BulletList items={keyCapabilities} />
            </div>
          </motion.article>
        </div>
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
              Stay Connected. <G>Stay In Control.</G>
            </h2>
            <p className="max-w-[560px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Manage your business anytime, anywhere with the Formezy mobile
              app — built for teams that cannot wait until they are back at a
              desk.
            </p>
            <Button href="#demo" size="lg" className="rounded-[12px] px-10">
              Get Started <ArrowRight size={18} />
            </Button>
          </div>
          <div className="relative w-full px-4 pb-6 md:px-8 md:pb-10">
            <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl min-h-[220px] md:min-h-[340px]">
              <Image
                src={mobileAccessPageImages.cta}
                alt="Stay connected and in control with Formezy mobile"
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

export default function MobileAccessContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      <CenteredSection
        className="bg-white/80 py-14 backdrop-blur-sm md:py-16"
        title={
          <>
            What Is <G>Mobile Access</G>
          </>
        }
        description="Mobile Access brings Formezy to iOS and Android — so approvals, workflows, notifications, and operational data are always within reach for distributed and field teams."
      />

      <FeatureShowcaseSection
        image={mobileAccessPageImages.locationLimits}
        imageAlt="Work without location limits on mobile"
        title={
          <>
            Work Without <G>Location Limits</G>
          </>
        }
        description="Run your operations from wherever work happens — with the same governed processes and data you rely on in the office."
        bulletPoints={locationBullets}
      />

      <FeatureShowcaseSection
        background="bg-white/80 backdrop-blur-sm"
        image={mobileAccessPageImages.takeAction}
        imageAlt="Take action instantly on mobile"
        title={
          <>
            Take Action <G>Instantly</G>
          </>
        }
        description="Turn notifications into completed work. Review context, approve, assign, and update records in seconds from your phone."
        bulletPoints={actionBullets}
        reverse
      />

      <StayUpdatedSection />
      <DualCapabilityCards />

      <CenteredSection
        className="bg-white/70 backdrop-blur-sm"
        title={
          <>
            Business <G>Impact</G>
          </>
        }
        description="Faster response times, fewer delays waiting on desk-based users, and better coordination for mobile and distributed teams — without sacrificing control or auditability."
      />

      <CtaSection />
    </main>
  );
}
