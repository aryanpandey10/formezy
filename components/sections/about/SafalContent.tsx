"use client";

import Image from "next/image";
import Link from "next/link";
import cta from "../../../public/images/Safal_infosoft/webp/build_erp.webp";
import { motion } from "framer-motion";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import {
  safalInfosoftImages,
  SAFAL_SECTION,
} from "@/lib/safal-infosoft-images";

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

function Bullet({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
            <Check size={11} strokeWidth={2.5} />
          </span>
          <span className="font-sora text-[15px] leading-[24px] text-[#6366A8]">
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
}

const whatWeDo = [
  "Custom Software Development",
  "Enterprise Resource Planning (ERP)",
  "Business Process Automation",
  "Cloud Solutions & Integration",
];

const journeyMilestones = [
  {
    year: "2025",
    title: "Digital Legacy",
    desc: "Focused on future-ready platforms, deeper automation, and expanding enterprise capabilities across industries.",
  },
  {
    year: "2024",
    title: "Business Empowerment",
    desc: "Scaling delivery, strengthening client partnerships, and enabling businesses to operate with greater clarity and control.",
  },
  {
    year: "2022",
    title: "The Next Innovation",
    desc: "Advancing structured systems, workflow digitisation, and the foundation for modern enterprise application platforms.",
  },
];

const verticalLogos = [
  {
    src: safalInfosoftImages.verticalLogos.intelliWorks,
    alt: "intelliWorkz",
    width: 160,
    height: 48,
    url: "https://intelliworkz.tech/",
  },
  {
    src: safalInfosoftImages.verticalLogos.webShop,
    alt: "WebShop",
    width: 140,
    height: 48,
    url: "https://ideaz.ventures/",
  },
  // {
  //   src: safalInfosoftImages.verticalLogos.intelliText,
  //   alt: "IntelliText",
  //   width: 140,
  //   height: 48,
  // },
] as const;

export default function SafalContent() {
  return (
    <main className="flex flex-col">
      {/* ── 1. Hero ── */}
      <section className="overflow-hidden pb-6 pt-6 md:pt-10">
        <div className="container-app">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">
              Home
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/about/company" className="hover:text-[#2C0E3A]">
              About
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Safal Infosoft</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.span
              variants={fadeUp}
              className="mb-6 inline-flex items-center rounded-full border border-purple-100 bg-purple-50 px-4 py-1.5 font-sora text-[12px] font-bold uppercase tracking-wide text-[#6C60E8]"
            >
              Safal Infosoft
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="max-w-[900px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[42px] md:text-[52px] lg:text-[58px]"
            >
              Driving Business <G>Innovation Since 2006</G>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[720px] font-sora text-[15px] leading-[28px] text-[#6366A8] md:text-[17px]"
            >
              Safal Infosoft has been at the forefront of innovation, delivering
              cutting-edge solutions for businesses worldwide.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 w-full md:mt-8">
              <div className="relative mx-auto aspect-[16/9] w-full max-w-[1100px] sm:aspect-[2/1]">
                <Image
                  src={safalInfosoftImages.hero}
                  alt="Driving business innovation since 2006"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1100px"
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Who We Are ── */}
      <section className={SAFAL_SECTION}>
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[48px]"
              style={{ lineHeight: "1.1" }}
            >
              Who <G>We Are</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[15px] leading-[28px] text-[#6366A8] md:text-[17px]"
            >
              Safal Infosoft Ltd. is an enterprise technology company with deep
              expertise in building structured, intelligent business systems. For
              nearly two decades, we have helped organizations replace fragmented
              tools with unified, process-driven platforms — including Formezy,
              our Enterprise Application Platform.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. What We Do ── */}
      <section className={SAFAL_SECTION}>
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="overflow-hidden rounded-[24px] border border-purple-100 bg-white p-6 shadow-[0_8px_40px_rgba(108,96,232,0.08)] md:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div variants={fadeUp} className="relative aspect-square w-full max-w-[520px] lg:max-w-none">
                <Image
                  src={safalInfosoftImages.whatWeDo}
                  alt="What we do — modular enterprise systems"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain object-center"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <h2 className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[40px]">
                  What <G>We Do</G>
                </h2>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  We design, build, and deploy technology systems that help
                  businesses operate with structure, speed, and scale.
                </p>
                <Bullet items={whatWeDo} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Journey of Growth ── */}
      <section id="journey" className="section">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-10"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-3 text-center"
            >
              <h2 className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[48px]">
                Our Journey <G>of Growth</G>
              </h2>
              <p className="max-w-2xl font-sora text-[15px] leading-[26px] text-[#6366A8]">
                From foundational systems to advanced, scalable platforms — a
                continuous evolution in enterprise technology.
              </p>
              <p className="font-sora text-[14px] font-medium text-[#6C60E8]">
                From foundational systems{" "}
                <ArrowRight className="mx-1 inline" size={14} />
                to advanced, scalable platforms.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative grid w-full gap-6 md:grid-cols-3"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent md:block"
              />
              {journeyMilestones.map((m) => (
                <div
                  key={m.year}
                  className="relative flex flex-col gap-4 rounded-[20px] border border-purple-100 bg-white p-6 shadow-card md:pt-10"
                >
                  <span className="inline-flex w-fit rounded-full bg-gradient-to-b from-[#708FF4] to-[#6C60E8] px-3.5 py-1 font-sora text-[12px] font-bold text-white">
                    {m.year}
                  </span>
                  <h3 className="font-sora text-[20px] font-bold text-[#2C0E3A]">
                    {m.title}
                  </h3>
                  <p className="font-sora text-[14px] leading-[24px] text-[#6366A8]">
                    {m.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Business Verticals ── */}
      <section className={SAFAL_SECTION}>
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col items-center gap-4 text-center md:gap-5"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[48px]"
            >
              Our Business <G>Verticals</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-xl font-sora text-[15px] leading-[26px] text-[#6366A8]"
            >
              A diversified approach built to support businesses at every stage.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-2 flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20"
            >
              {verticalLogos.map((logo) => (
                <a
                  key={logo.alt}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-10 w-auto object-contain md:h-12"
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Approach + Trust ── */}
      <section className={SAFAL_SECTION}>
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-2"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[36px]">
                Our <G>Approach</G>
              </h2>
              <p className="font-sora text-[15px] leading-[28px] text-[#6366A8]">
                We architect systems around how your business actually works —
                through deep listening, collaborative design, and measured
                execution. Every solution is tailored to your workflows, not the
                other way around.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="font-sora text-[28px] font-bold text-[#2C0E3A] md:text-[36px]">
                Built on <G>Experience and Trust</G>
              </h2>
              <p className="font-sora text-[15px] leading-[28px] text-[#6366A8]">
                Nearly two decades of enterprise delivery across manufacturing,
                retail, services, and more. Our clients trust us because we deliver
                what we promise — on time, on budget, and built to scale.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Driving the Future Forward ── */}
      <section className={SAFAL_SECTION}>
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="overflow-hidden rounded-[24px] border border-purple-100 bg-white p-6 shadow-[0_8px_40px_rgba(108,96,232,0.08)] md:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div variants={fadeUp} className="order-2 flex flex-col gap-5 lg:order-1">
                <h2 className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[40px]">
                  Driving the <G>Future Forward</G>
                </h2>
                <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Our roadmap is clear — build the most powerful, accessible
                  enterprise platform for growing businesses. Formezy evolves
                  continuously to match the ambition of the companies we serve.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="relative order-1 aspect-[4/3] w-full lg:order-2"
              >
                <Image
                  src={safalInfosoftImages.drivingFuture}
                  alt="Driving the future forward"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-contain object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. CTA — Legacy of Innovation ── */}
    
      < section className="section pt-0" >
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-gradient-to-br from-[#F5F0FF] to-[#EEF4FF] pt-16 text-center shadow-lg"
          >
            <div className="relative z-10 px-6">
              <h2 className="mx-auto max-w-[800px] font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]">
              A Legacy of Innovation.{" "}
                <G>A Future of Possibilities.</G>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
               Explore Safal Infosoft&apos;s evolution and our vision for the
                future. Discover our journey and capabilities.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/platform/use-cases" size="lg" className="rounded-[12px]">
                  Explore Solutions <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src={cta}
                alt="Build a CRM That Works Your Way Illustration"
                width={1200}
                height={600}
                className="mx-auto h-auto w-full rounded-t-[20px]"
              />
            </div>
          </motion.div>
        </div>
      </ section>
    </main>
  );
}
