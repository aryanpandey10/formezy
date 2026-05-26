"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import FeatureShowcaseSection from "@/components/sections/FeatureShowcaseSection";
import { integrationsConnectorsPageImages } from "@/lib/integrations-connectors-page-images";
import { integrations } from "../home/Integrations";

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

const ecosystemBullets = [
  "Unify source and target systems in one integration layer",
  "Native connectors, REST APIs, and webhooks",
  "Keep teams aligned with real-time, governed data flow",
];

const erpBullets = [
  "Extend ERP functionality without replacing your system of record",
  "Improve workflow execution across finance, HR, and operations",
  "Connect departments with shared context and approvals",
];

const realTimeBullets = [
  "Sync data and events as they happen",
  "Trigger workflows from external system changes",
  "Reduce latency between operational systems",
];

const keyCapabilitiesBullets = [
  "Pre-built connectors for popular business tools",
  "Secure authentication and role-based access",
  "Field mapping and transformation rules",
  "Monitoring, logging, and error recovery",
];

const growthBullets = [
  "Move from disconnected tools to one connected platform",
  "Add integrations as teams and processes scale",
  "Improve visibility without constant manual exports",
];



const DESKTOP_SIZES = [60, 84, 116, 168, 116, 84, 60];
const MOBILE_SIZES = [0, 52, 80, 118, 80, 52, 0];
const OPACITIES = [0.28, 0.48, 0.72, 1, 0.72, 0.48, 0.28];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-sora text-[15px] leading-[24px] text-[#6366A8] md:text-[16px]"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
            <Check size={14} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-6 pt-8 md:pb-10 md:pt-12 lg:pt-14">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#6C60E8 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />
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
          <span className="font-semibold text-[#2C0E3A]">
            Integration &amp; Connectors
          </span>
        </motion.nav>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mx-auto mb-10 flex max-w-[1000px] flex-col items-center gap-5 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.1] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Connect Everything. <G>Work Without Boundaries.</G>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-[760px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]"
          >
            Bring your systems, tools, and data together on Formezy — through
            native connectors, open APIs, and ERP extensions built for real
            operations.
          </motion.p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/70 shadow-card md:rounded-[28px]"
          >
            <div className="relative aspect-[4/3] w-full min-h-[260px] md:min-h-[360px]">
              <Image
                src={integrationsConnectorsPageImages.ecosystem}
                alt="Source and target systems connected through Formezy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center p-3 md:p-5"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="rounded-[24px] border border-purple-100/80 bg-white/90 p-8 shadow-card md:p-10"
          >
            <h2 className="font-sora text-[28px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[36px]">
              Built to Fit <G>Your Ecosystem</G>
            </h2>
            <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
              Formezy sits between your existing stack and your teams — so
              information, approvals, and actions flow without constant switching
              or manual re-entry.
            </p>
            <div className="mt-6">
              <BulletList items={ecosystemBullets} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ErpSection() {
  return (
    <section className="section bg-white/80 backdrop-blur-sm">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="rounded-[24px] border border-purple-100/80 bg-white/90 p-8 shadow-card md:p-10"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[28px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[36px]"
            >
              ERP <G>Integrations</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]"
            >
              Extend your ERP as the system of record while Formezy adds
              workflow, collaboration, and cross-functional execution on top.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6">
              <BulletList items={erpBullets} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[24px] border border-purple-100/70 bg-white/70 shadow-card md:rounded-[28px]"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto min-h-[280px] md:min-h-[400px]">
              <Image
                src={integrationsConnectorsPageImages.erp}
                alt="ERP integrations hub with connected business modules"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain object-center p-4 md:p-6"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ThirdPartySection() {
  const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([0, 1]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const N = integrations.length;
  const indexInScope = ((activeIndex % N) + N) % N;

  const handleRotate = useCallback((newDir: number) => {
    setActiveIndex(([prev]) => [prev + newDir, newDir]);
  }, []);

  useEffect(() => {
    const t = setInterval(() => handleRotate(1), 3500);
    return () => clearInterval(t);
  }, [handleRotate]);

  const positions = Array.from({ length: 7 }, (_, posIdx) => {
    const offset = posIdx - 3;
    const itemIdx = ((indexInScope + offset) % N + N) % N;
    const sizes = isMobile ? MOBILE_SIZES : DESKTOP_SIZES;
    return {
      item: integrations[itemIdx],
      size: sizes[posIdx],
      opacity: OPACITIES[posIdx],
      isCenter: posIdx === 3,
      hidden: isMobile && (posIdx === 0 || posIdx === 6),
    };
  });

  const centerItem = positions[3].item;

  return (
    <section id="integrations" className="section py-12 md:py-16">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto mb-12 flex max-w-[820px] flex-col items-center gap-5 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px] lg:text-[48px]"
          >
            Third-Party <G>Integrations</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Connect the productivity tools, ERPs, and data platforms your teams
            already rely on — with maintained connectors and secure sync.
          </motion.p>
        </motion.div>

        {/* ── 7-circle fan carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          {/* Nav + circles row */}
          <div className="flex items-center justify-center gap-3 md:gap-6">
            {/* Prev */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleRotate(-1)}
              aria-label="Previous integration"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary md:h-12 md:w-12"
            >
              <ChevronLeft size={18} className="text-[#2C0E3A]" />
            </motion.button>

            {/* 7 circles — stable positional keys so only content animates */}
            <div className="flex items-center justify-center gap-6 sm:gap-5 md:gap-5 lg:gap-6">
              {positions.map(({ item, size, opacity, isCenter, hidden }, posIdx) => {
                if (hidden) return null;
                return (
                  <motion.div
                    key={posIdx}
                    animate={{ opacity }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="flex max-w-[88px] flex-shrink-0 cursor-pointer flex-col items-center sm:max-w-none"
                    onClick={() => {
                      const offset = posIdx - 3;
                      if (offset !== 0) handleRotate(offset > 0 ? 1 : -1);
                    }}
                  >
                    {/* Circle — transparent background, border only */}
                    <motion.div
                      animate={{ width: size, height: size }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative flex items-center justify-center overflow-visible rounded-full ${
                        isCenter
                          ? "border border-[#6C60E8]/40 shadow-[0_6px_32px_rgba(108,96,232,0.2)]"
                          : "border border-purple-100/70"
                      }`}
                      style={{ minWidth: size }}
                    >
                      {/* Dashed orbit ring — center only */}
                      {isCenter && (
                        <svg
                          viewBox="0 0 220 220"
                          className="pointer-events-none absolute -inset-[18px] h-[calc(100%+36px)] w-[calc(100%+36px)]"
                          fill="none"
                          aria-hidden
                        >
                          <circle
                            cx="110"
                            cy="110"
                            r="107"
                            stroke="#6C60E8"
                            strokeWidth="1.5"
                            strokeOpacity="0.32"
                            strokeDasharray="8 8"
                          />
                        </svg>
                      )}

                      {/* Logo image — animates on item change */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.7 }}
                          transition={{ duration: 0.28 }}
                          className="absolute inset-0 flex items-center justify-center p-[22%]"
                        >
                          <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            sizes={`${size}px`}
                            className="object-contain p-[22%]"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>                    
                  </motion.div>
                );
              })}
            </div>

            {/* Next */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleRotate(1)}
              aria-label="Next integration"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary md:h-12 md:w-12"
            >
              <ChevronRight size={18} className="text-[#2C0E3A]" />
            </motion.button>
          </div>

          {/* Connector + active label */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="h-8 w-px bg-gradient-to-b from-[#6C60E8]/50 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={centerItem.id + "-label"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="rounded-pill border border-purple-100 bg-white px-5 py-2.5 shadow-card"
              >
                <span className="font-sora text-[14px] font-semibold text-[#2C0E3A]">
                  {centerItem.label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot nav */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {integrations.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  setActiveIndex([i, i > indexInScope ? 1 : -1])
                }
                aria-label={`Go to ${integrations[i].name}`}
                className={`rounded-full transition-all duration-300 ${
                  indexInScope === i
                    ? "h-2 w-8 bg-[#6C60E8]"
                    : "h-2 w-2 bg-[#2C0E3A]/20 hover:bg-[#2C0E3A]/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="secondary"
            href="#integrations"
            className="rounded-full border-purple-100 px-8"
          >
            View All Integrations <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function DualCapabilityCards() {
  return (
    <section className="section bg-white/80 py-12 backdrop-blur-sm md:py-16">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="rounded-[24px] border border-purple-100/80 bg-white/90 p-8 shadow-card md:p-10"
          >
            <h2 className="font-sora text-[26px] font-bold text-[#2C0E3A] md:text-[32px]">
              Real-Time <G>Connectivity</G>
            </h2>
            <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8]">
              Keep systems in sync as events happen — so workflows, dashboards,
              and teams always work from current data.
            </p>
            <div className="mt-6">
              <BulletList items={realTimeBullets} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.08 }}
            className="rounded-[24px] border border-purple-100/80 bg-white/90 p-8 shadow-card md:p-10"
          >
            <h2 className="font-sora text-[26px] font-bold text-[#2C0E3A] md:text-[32px]">
              Key <G>Capabilities</G>
            </h2>
            <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8]">
              Everything you need to connect, map, secure, and maintain
              integrations at enterprise scale.
            </p>
            <div className="mt-6">
              <BulletList items={keyCapabilitiesBullets} />
            </div>
          </motion.div>
        </div>
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
          className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-purple-100 md:min-h-[600px] lg:min-h-[680px]"
        >
          <Image
            src={integrationsConnectorsPageImages.cta}
            alt="Connect your business without limits"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-1 text-center">
            <h2 className="max-w-full font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[56px]">
              Connect Your <G>Business Without Limits</G>
            </h2>
            <p className="max-w-[800px] font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Integrate everything, everyone, and every system — so Formezy
              becomes the layer where your business actually runs.
            </p>
            <Button href="#demo" size="lg" className="rounded-[12px] px-10">
              Book Demo <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function IntegrationsConnectorsContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ErpSection />
      <ThirdPartySection />
      <DualCapabilityCards />
      <FeatureShowcaseSection
        image={integrationsConnectorsPageImages.growth}
        imageAlt="Disconnected systems vs connected platform"
        title={
          <>
            Built for <G>Growth</G>
          </>
        }
        description="As your stack and teams expand, Formezy keeps integrations manageable — so new tools plug in without breaking how work gets done."
        bulletPoints={growthBullets}
      />
      <CenteredSection
        title={
          <>
            Business <G>Impact</G>
          </>
        }
        description="Fewer silos, faster decisions, and cleaner data across the organization — with integrations that support scale instead of slowing it down."
      />
      <CtaSection />
    </main>
  );
}
