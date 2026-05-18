"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, ChevronLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { integrationsWebp } from "@/lib/webp-assets";
import { cn } from "@/lib/cn";

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

const integrationsData = [
  { id: "gs",      name: "Google Sheets", label: "Google Sheets",     src: "/images/Google_Sheets_Logo.png" },
  { id: "ns",      name: "NetSuite",      label: "NetSuite ERP",      src: "/images/NetSuite-Symbol.png" },
  { id: "oracle",  name: "Oracle",        label: "Oracle Database",   src: "/images/Oracle-logo.png" },
  { id: "outlook", name: "Outlook",       label: "Outlook Calendars", src: "/images/Microsoft_Office_Outlook.png" },
  { id: "sap",     name: "SAP",           label: "SAP Integration",   src: "/images/SAP-Logo.png" },
  { id: "o365",    name: "Office 365",    label: "Microsoft 365",     src: "/images/Microsoft_360.png" },
  { id: "wp",      name: "WordPress",     label: "WordPress CMS",     src: "/images/Wordpress.png" },
  { id: "excel",   name: "Excel",         label: "Microsoft Excel",   src: "/images/Microsoft_Excel-Logo.png" },
];

const DESKTOP_SIZES = [60, 84, 116, 168, 116, 84, 60];
const MOBILE_SIZES  = [0,  52, 80,  118, 80,  52, 0];
const OPACITIES = [0.28, 0.48, 0.72, 1, 0.72, 0.48, 0.28];

const faqs: AccordionItem[] = [
  {
    id: "1",
    question: "What systems can Formezy integrate with?",
    answer:
      "Formezy integrates with leading ERPs (SAP, NetSuite, Oracle), productivity suites (Google Workspace, Microsoft 365), and hundreds of third-party apps via our robust API layer.",
  },
  {
    id: "2",
    question: "Do you offer custom API integrations?",
    answer:
      "Yes. Beyond our pre-built connectors, Formezy provides a documented REST API and webhook system, allowing you to build custom integrations for your proprietary or industry-specific software.",
  },
  {
    id: "3",
    question: "How secure are the integrations?",
    answer:
      "Security is our priority. All integrations use enterprise-standard protocols like OAuth2, and we support role-based access controls to ensure data is only shared with authorized systems.",
  },
  {
    id: "4",
    question: "Can I automate workflows across different apps?",
    answer:
      "Absolutely. Formezy's orchestration engine allows you to trigger actions in one system based on events in another, creating seamless end-to-end automated workflows.",
  },
  {
    id: "5",
    question: "Is there a limit to the number of integrations?",
    answer:
      "No. Formezy is designed to be the central nervous system of your business. You can connect as many tools and systems as your operations require.",
  },
];

function HeroSection() {
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
    const t = setInterval(() => handleRotate(1), 3000);
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
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden pt-[100px] pb-20 md:pt-[120px]">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{ 
          backgroundImage: "radial-gradient(#6C60E8 1.5px, transparent 1.5px)", 
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black 80%, transparent)" 
        }}
      />
      
      <div className="container-app relative z-10 flex flex-col">
        {/* Top-Left Heading & Paragraph */}
        <div className="flex flex-col items-start text-left max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-100 bg-purple-50/50 px-4 py-1.5 font-sora text-[13px] font-bold text-purple-primary shadow-sm"
          >
            Integrations
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeUp}
              className="font-sora text-[44px] font-bold leading-[1.1] text-[#2C0E3A] sm:text-[54px] md:text-[64px] lg:text-[76px]"
            >
              The Integration Layer <br />
              <G>Your Business Was Missing</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[19px] lg:max-w-[800px]"
            >
              Bring your systems, tools and data together into one unified platform with Formezy — through native connectors, open APIs, and dedicated ERP extensions.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="#demo" size="lg" className="rounded-[12px] px-10 py-3.5">
                Book a Demo <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="#integrations" className="font-sora text-[16px] font-bold text-[#6C60E8] underline underline-offset-4 hover:text-purple-700 transition-colors">
                Browse Integrations
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Center-Aligned Moving Slider Component */}
        <div className="relative mt-24 flex w-full flex-col items-center justify-center md:mt-32">
          {/* Section Header for the Slider */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="mb-12 flex flex-col items-center gap-3 text-center"
          >
            <h2 className="font-sora text-[32px] font-bold leading-tight text-[#2C0E3A] md:text-[44px]">
              Seamless <G>Integrations</G>
            </h2>
            <p className="font-sora text-[15px] font-medium text-[#6366A8] md:text-[17px]">
              Connect Formezy With Your Existing Systems
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-3 md:gap-8">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleRotate(-1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary md:h-12 md:w-12"
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
                        "relative flex items-center justify-center overflow-visible rounded-full",
                        isCenter
                          ? "border border-[#6C60E8]/40 shadow-[0_8px_40px_rgba(108,96,232,0.15)]"
                          : "border border-purple-100/70"
                      )}
                      style={{ minWidth: size }}
                    >
                      {isCenter && (
                        <svg viewBox="0 0 220 220" className="pointer-events-none absolute -inset-[22px] h-[calc(100%+44px)] w-[calc(100%+44px)]" fill="none">
                          <circle cx="110" cy="110" r="108" stroke="#6C60E8" strokeWidth="1.2" strokeOpacity="0.25" strokeDasharray="6 6" />
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
                          <Image src={item.src} alt={item.name} fill sizes={`${size}px`} className="object-contain p-[20%]" />
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleRotate(1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary md:h-12 md:w-12"
            >
              <ChevronRight size={20} className="text-[#2C0E3A]" />
            </motion.button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="h-10 w-px bg-gradient-to-b from-[#6C60E8]/40 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={centerItem.id + "-label"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-purple-100 bg-white px-6 py-3 shadow-card"
              >
                <Image src={centerItem.src} alt={centerItem.name} width={20} height={20} className="h-5 w-5 object-contain" />
                <span className="font-sora text-[15px] font-semibold text-[#2C0E3A]">{centerItem.label}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ pill, title, subtitle }: { pill: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center">
      <span className="inline-flex items-center rounded-full border border-purple-100 bg-purple-50/50 px-5 py-2 font-sora text-[13px] font-bold text-purple-primary shadow-sm">
        {pill}
      </span>
      <h2 className="font-sora text-[38px] font-bold leading-tight text-[#2C0E3A] md:text-[48px]">
        {title}
      </h2>
      <p className="font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]">
        {subtitle}
      </p>
    </div>
  );
}

function IntegrationRow({ 
  pill,
  title, 
  subtitle,
  description, 
  image, 
  bullets, 
  reverse = false 
}: { 
  pill: string;
  title: string; 
  subtitle: string;
  description: string; 
  image: string; 
  bullets: string[];
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn("relative", reverse ? "lg:order-2" : "lg:order-1")}
      >
        <div className="overflow-hidden rounded-[32px] border border-purple-100 bg-gradient-to-br from-[#F5F0FF] to-white p-2 shadow-sm">
          <div className="relative aspect-[4/3] w-full">
            <Image src={image} alt={title} fill className="object-contain p-8 md:p-12" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer}
        className={cn("flex flex-col items-start", reverse ? "lg:order-1" : "lg:order-2")}
      >
        <motion.span variants={fadeUp} className="font-sora text-[14px] font-bold text-purple-primary uppercase tracking-wider mb-2">
          {pill}
        </motion.span>
        <motion.h3 variants={fadeUp} className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[40px] leading-tight">
          {title}
        </motion.h3>
        <motion.p variants={fadeUp} className="mt-2 font-sora text-[18px] font-semibold text-[#6C60E8]">
          {subtitle}
        </motion.p>
        <motion.p variants={fadeUp} className="mt-6 font-sora text-[16px] leading-relaxed text-[#6366A8] md:text-[18px]">
          {description}
        </motion.p>
        <motion.ul variants={staggerContainer} className="mt-8 flex flex-col gap-4">
          {bullets.map((b) => (
            <motion.li key={b} variants={fadeUp} className="flex items-start gap-3 font-sora text-[15px] text-[#6366A8] md:text-[16px]">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                <Check size={14} strokeWidth={3} />
              </span>
              {b}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div variants={fadeUp} className="mt-10">
          <Button variant="secondary" className="rounded-full px-8 py-3 border-purple-100 hover:bg-purple-50">
            Know More <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ErpSection() {
  return (
    <section id="integrations" className="section relative bg-[#FAFAFE]/50 overflow-hidden">
      <div className="container-app">
        <div className="mx-auto mb-16 flex max-w-[900px] flex-col items-center gap-3 text-center">
          <span className="font-sora text-[14px] font-bold text-purple-primary uppercase tracking-wider">
            ERP Extensions
          </span>
          <h2 className="font-sora text-[38px] font-bold leading-tight text-[#2C0E3A] md:text-[48px]">
            ERP Integrations
          </h2>
          <p className="font-sora text-[18px] font-semibold text-[#6C60E8]">
            Enhance what you already have.
          </p>
          <p className="mt-4 font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[18px]">
            Formezy sits above your ERP as an intelligent operational layer — adding workflow, approvals and collaboration without disrupting your system of record.
          </p>
        </div>
        
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-[40px] border border-purple-100 bg-white p-3 shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full bg-gradient-to-b from-white to-purple-50/20">
              <Image 
                src={integrationsWebp.erp} 
                alt="ERP integrations extending your system of record with Formezy" 
                fill 
                className="object-contain p-6 md:p-10" 
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.ul variants={staggerContainer} className="flex flex-col gap-6">
              {[
                "Extend ERP functionality",
                "Improve workflow execution",
                "Connect departments seamlessly"
              ].map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-start gap-4 font-sora text-[17px] text-[#6366A8]">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white shadow-md">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  {b}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-12">
              <Button variant="secondary" className="rounded-full px-10 py-4 border-purple-100 hover:bg-purple-50">
                Know More <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center overflow-hidden rounded-[48px] border border-purple-100 bg-[#EEF2FF]/40 px-6 py-24 text-center"
        >
          <div className="relative z-10 max-w-[840px]">
            <h2 className="font-sora text-[36px] font-bold leading-tight text-[#2C0E3A] md:text-[52px]">
              Ready to Connect Your <br />
              <G>Entire Business Ecosystem?</G>
            </h2>
            <p className="mt-8 font-sora text-[17px] leading-relaxed text-[#6366A8] md:text-[19px]">
              Unify your tools, systems and workflows with Formezy — and make every part of your business talk to every other part.
            </p>
            <div className="mt-12 flex justify-center">
              <Button href="#demo" size="lg" className="rounded-[14px] px-14 py-4 text-[18px]">
                Contact Us <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="relative mt-20 w-full max-w-[1000px] aspect-[16/8]">
            <Image
              src={integrationsWebp.cta}
              alt="Integrations Ecosystem"
              fill
              className="object-contain object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function IntegrationsContent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      
      {/* New Section: Built for a Connected Business Environment */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-10 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col items-center gap-6"
            >
              <SectionIntro
                pill="Connected business systems"
                title="Built for a Connected Business Environment"
                subtitle="Formezy sits between your systems and your teams — so information, approvals and decisions move at the speed your business actually needs."
              />
              
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full mt-8"
              >
                {[
                  "Eliminate system silos",
                  "Enable real-time data flow",
                  "Reduce manual data transfer",
                  "Improve cross-team visibility"
                ].map((text) => (
                  <motion.div
                    key={text}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-2xl border border-purple-50 bg-[#FAFAFE] px-5 py-4 shadow-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-primary text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="font-sora text-[14px] font-semibold text-[#2C0E3A]">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white relative z-10 pt-0">
        <div className="container-app flex flex-col gap-28 md:gap-40">
          <IntegrationRow
            pill="APIs & Webhooks"
            title="API Integrations"
            subtitle="Flexibility to Connect What You Need"
            description="Every Formezy workspace ships with open REST APIs, webhooks and event streams — so your internal and partner systems can talk to Formezy, and Formezy can talk back."
            image={integrationsWebp.api}
            bullets={[
              "Connect custom applications with ease",
              "Enable secure, real-time data exchange",
              "Build scalable integrations without code",
              "Adapt to changing system requirements"
            ]}
          />

          <IntegrationRow
            pill="Native Connectors"
            title="Third-Party Integrations"
            subtitle="Your Tools, Working Together"
            description="Keep using the tools your teams love — Formezy connects to Gmail, Outlook, Slack, Teams, Drive, Dropbox and dozens more with maintained, official integrations."
            image={integrationsWebp.thirdParty}
            bullets={[
              "Sync data across platforms automatically",
              "Reduce manual transfers and re-entry",
              "Keep all systems aligned in real time",
              "Improve cross-team operational efficiency"
            ]}
            reverse
          />
        </div>
      </section>

      <ErpSection />
      <CtaSection />
      
      <section className="section bg-[#FAFAFE]/80">
        <div className="container-app">
          <div className="mx-auto flex max-w-4xl flex-col gap-16">
            <div className="text-center">
              <h2 className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[48px]">
                Frequently <G>Asked Questions</G>
              </h2>
            </div>
            <Accordion items={faqs} defaultOpen="1" />
          </div>
        </div>
      </section>
    </main>
  );
}
