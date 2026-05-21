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

const integrationsData = [
  { id: "gs", name: "Google Sheets", src: "/images/Google_Sheets_Logo.png" },
  { id: "ns", name: "NetSuite", src: "/images/NetSuite-Symbol.png" },
  { id: "oracle", name: "Oracle", src: "/images/Oracle-logo.png" },
  { id: "outlook", name: "Outlook", src: "/images/Microsoft_Office_Outlook.png" },
  { id: "sap", name: "SAP", src: "/images/SAP-Logo.png" },
  { id: "o365", name: "Office 365", src: "/images/Microsoft_360.png" },
  { id: "wp", name: "WordPress", src: "/images/Wordpress.png" },
  { id: "excel", name: "Excel", src: "/images/Microsoft_Excel-Logo.png" },
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

  const N = integrationsData.length;
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
      item: integrationsData[itemIdx],
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

        <div className="flex items-center justify-center gap-3 md:gap-8">
          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={() => handleRotate(-1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card hover:border-purple-primary md:h-12 md:w-12"
            aria-label="Previous integration"
          >
            <ChevronLeft size={20} className="text-[#2C0E3A]" />
          </motion.button>

          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 lg:gap-8">
            {positions.map(({ item, size, opacity, isCenter, hidden }, posIdx) => {
              if (hidden) return null;
              return (
                <motion.div
                  key={posIdx}
                  animate={{ opacity }}
                  transition={{ duration: 0.45 }}
                  className="flex shrink-0 cursor-pointer flex-col items-center"
                  onClick={() => {
                    const offset = posIdx - 3;
                    if (offset !== 0) handleRotate(offset > 0 ? 1 : -1);
                  }}
                >
                  <motion.div
                    animate={{ width: size, height: size }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "relative flex items-center justify-center rounded-full",
                      isCenter
                        ? "border border-[#6C60E8]/40 shadow-[0_8px_40px_rgba(108,96,232,0.15)]"
                        : "border border-purple-100/70 bg-white",
                    )}
                    style={{ minWidth: size }}
                  >
                    {isCenter && (
                      <svg
                        viewBox="0 0 220 220"
                        className="pointer-events-none absolute -inset-[22px] h-[calc(100%+44px)] w-[calc(100%+44px)]"
                        fill="none"
                        aria-hidden
                      >
                        <circle
                          cx="110"
                          cy="110"
                          r="108"
                          stroke="#6C60E8"
                          strokeWidth="1.2"
                          strokeOpacity="0.25"
                          strokeDasharray="6 6"
                        />
                      </svg>
                    )}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.28 }}
                        className="absolute inset-0 flex items-center justify-center p-[20%]"
                      >
                        <Image
                          src={item.src}
                          alt={item.name}
                          fill
                          sizes={`${size}px`}
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={() => handleRotate(1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card hover:border-purple-primary md:h-12 md:w-12"
            aria-label="Next integration"
          >
            <ChevronRight size={20} className="text-[#2C0E3A]" />
          </motion.button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={centerItem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-purple-100 bg-white px-6 py-3 shadow-card"
            >
              <Image
                src={centerItem.src}
                alt={centerItem.name}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              <span className="font-sora text-[15px] font-semibold text-[#2C0E3A]">
                {centerItem.name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

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
    <>
      < section className="section pt-0" >
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-gradient-to-br from-[#F5F0FF] to-[#EEF4FF] pt-16 text-center shadow-lg"
          >
             {/* Background Image */}
      <Image
        src={integrationsConnectorsPageImages.bgcta}
        alt="CTA Background"
        fill
        className="object-cover object-center"
      />
            <div className="relative z-10 px-6">
              <h2 className="mx-auto max-w-[800px] font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]">
                Build an ERP That  <G>Fits Your Business</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Move beyond rigid systems and create one designed around your operations.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide">
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="relative z-10 mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={integrationsConnectorsPageImages.cta}
                alt="Build a CRM That Works Your Way Illustration"
                width={924}
                height={436}
                className="mx-auto h-auto w-full pb-12 rounded-t-[20px]"
              />
            </div>
          </motion.div>
        </div>
      </ section>
   
    </>
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
