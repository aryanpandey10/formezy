"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Button from "@/components/ui/Button";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import SectionWebpImage from "@/components/ui/SectionWebpImage";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { howItWorksPageImages } from "@/lib/page-section-images";

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

/* ─────────────────────────────────────────────
   Section 1 — Hero (stacked: breadcrumb → copy → image, like Overview)
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0 md:pt-10 lg:pt-12">
      <div className="container-app flex flex-col items-start text-left">
        <PlatformBreadcrumb currentLabel="How it Works" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex w-full  flex-col items-start gap-6 md:gap-8"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora leading-none text-[34px] font-bold tracking-tight text-[#2C0E3A] sm:text-[44px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]"
          >
            From Idea to <br/> <G>Execution, Seamlessly</G>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className=" space-y-2 font-sora text-[15px] leading-[24px] text-[#6366A8] sm:text-[16px]"
          >
            <p className="font-normal">
              Formezy turns process thinking into working systems — in weeks, not quarters.
              Here&apos;s the five-step journey every customer takes, from mapping workflows to
              scaling with confidence.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button href="#demo" size="lg" className="rounded-[10px]">
              Book a Demo <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mt-10 w-full md:mt-12 lg:mt-14"
        >
          <div className="relative aspect-[1920/680] w-full">
            <Image
              src={howItWorksPageImages.hero}
              alt="From business idea to execution with Formezy"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain object-left md:object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Build Powerful–style journey card (home `BuildPowerful` pattern) ── */
const HIW_CARD_COLORS = ["#FFF7E8", "#E8F8FF", "#E8EBFF", "#F8E9FF"] as const;

function HiwJourneyCard({
  title,
  description,
  imageSrc,
  color,
  priority = false,
}: {
  title: string;
  description: string;
  imageSrc: string;
  color: string;
  priority?: boolean;
}) {
  return (
    <motion.article
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="flex h-auto min-h-[400px] w-full max-w-[430px] flex-col items-start gap-4 overflow-hidden rounded-[30px] border border-[#B8B1FD] p-5 md:min-h-[480px]"
      style={{ backgroundColor: color }}
    >
      <div className="flex w-full flex-col items-start gap-3">
        <h3 className="font-sora text-[22px] font-semibold leading-[1.2] text-[#2C0E3A] md:text-[24px]">
          {title}
        </h3>
        <p className="font-sora text-[15px] font-normal leading-[24px] text-[#6366A8] md:text-[16px] md:leading-[26px]">
          {description}
        </p>
      </div>
      <div className="relative mt-auto h-[180px] w-full flex-shrink-0 overflow-hidden rounded-[18px] md:h-[240px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 48vw, 380px"
          className="object-contain transition-transform duration-700"
        />
      </div>
    </motion.article>
  );
}

const hiwJourneySteps = [
  {
    title: "Map Your Workflows",
    description:
      "See how work moves between people, tools, and handoffs so nothing is ambiguous before you automate.",
    imageSrc: howItWorksPageImages.hiwCarouselMap,
  },
  {
    title: "Enable Automation",
    description:
      "Turn repeatable steps into rules-driven execution so tasks advance on their own with full visibility.",
    imageSrc: howItWorksPageImages.hiwCarouselEnable,
  },
  {
    title: "Connect Your Ecosystem",
    description:
      "Link ERP, CRM, messaging, and files so Formezy orchestrates data where it already lives.",
    imageSrc: howItWorksPageImages.hiwCarouselConnect,
  },
  {
    title: "Unify Operations",
    description:
      "Run the full journey on one spine — fewer silos, clearer ownership, and faster decisions across teams.",
    imageSrc: howItWorksPageImages.hiwCarouselUnify,
  },
];

/* ─────────────────────────────────────────────
   Section 2 — How Formezy Works (carousel, same pattern as home Build Powerful)
───────────────────────────────────────────── */
function HowItWorksStepsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section bg-white/90 backdrop-blur-sm">
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
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            How <G>Formezy Works</G>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-xl font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
            The same structured journey behind every successful Formezy rollout.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href="/platform/overview" size="lg" className="rounded-[10px]">
              Explore the Platform <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative mt-8 md:mt-10" aria-label="Formezy journey steps">
          <motion.button
            type="button"
            whileTap={{ scale: 0.88 }}
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous step"
            className="absolute left-0 top-[45%] z-10 hidden h-[88px] w-[88px] -translate-x-[48%] -translate-y-1/2 items-center justify-center rounded-full border border-[#B8B1FD] bg-white shadow-[0_8px_32px_rgba(108,96,232,0.18)] transition-all hover:border-[#6C60E8] hover:shadow-[0_8px_40px_rgba(108,96,232,0.32)] disabled:cursor-not-allowed disabled:opacity-40 lg:flex xl:h-[99px] xl:w-[99px] xl:-translate-x-[52%]"
          >
            <ChevronLeft size={32} className="text-[#2C0E3A]" />
          </motion.button>

          <div className="overflow-hidden lg:mx-10 xl:mx-12" ref={emblaRef}>
            <div className="flex -ml-5">
              {hiwJourneySteps.map((s, i) => (
                <div
                  key={s.title}
                  className="min-w-0 shrink-0 grow-0 basis-[88%] pl-5 sm:basis-[60%] md:basis-[48%] lg:basis-[34%]"
                >
                  <HiwJourneyCard
                    title={s.title}
                    description={s.description}
                    imageSrc={s.imageSrc}
                    color={HIW_CARD_COLORS[i % HIW_CARD_COLORS.length]}
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.88 }}
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next step"
            className="absolute right-0 top-[45%] z-10 hidden h-[88px] w-[88px] translate-x-[48%] -translate-y-1/2 items-center justify-center rounded-full border border-[#B8B1FD] bg-white shadow-[0_8px_32px_rgba(108,96,232,0.18)] transition-all hover:border-[#6C60E8] hover:shadow-[0_8px_40px_rgba(108,96,232,0.32)] disabled:cursor-not-allowed disabled:opacity-40 lg:flex xl:h-[99px] xl:w-[99px] xl:translate-x-[52%]"
          >
            <ChevronRight size={32} className="text-[#2C0E3A]" />
          </motion.button>

          <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous step"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B8B1FD] bg-white shadow-card transition-colors hover:border-[#6C60E8] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={20} className="text-[#2C0E3A]" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next step"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C0E3A] text-white shadow-card transition-colors hover:bg-[#3D1650] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — Define Your Workflows
───────────────────────────────────────────── */
function DefineWorkflowsSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[24px] border border-[#EDE9FE] bg-[#F3F0FF] shadow-sm lg:mx-0 lg:max-w-none">
              <SectionWebpImage
                src={howItWorksPageImages.defineDeep}
                alt="Define workflows with Formezy"
                aspectWidth={730}
                aspectHeight={691}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-none border-0 !bg-[#F3F0FF] shadow-none"
                imgClassName="object-contain p-3 sm:p-4 md:p-5"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-5 text-left lg:gap-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[44px] lg:text-[48px]"
              style={{ lineHeight: "1.15" }}
            >
              Define Your <G>Workflows</G>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sora text-[17px] font-semibold leading-[26px] text-[#2C0E3A] md:text-[18px]"
            >
              Every system starts with clarity.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Formezy helps you break down operations into structured workflows, ensuring every step,
              role, and decision point is clearly defined before automation begins.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-rancho text-[24px] leading-snug text-purple-primary sm:text-[28px] md:text-[30px]"
              style={{
                WebkitTextStroke: "0.3px rgba(15, 15, 26, 0.25)",
                paintOrder: "stroke fill",
              }}
            >
              &ldquo;Clear workflows eliminate confusion before it starts.&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const logicBullets = [
  "Visual rules, approvals, and branches without writing code",
  "Reuse modules across teams so logic stays consistent as you grow",
  "Connect workflow steps to real data and ownership in one place",
];

/* ─────────────────────────────────────────────
   Section 4 — Build with Logic Builder (Overview “Why EAP” overlap layout)
───────────────────────────────────────────── */
function LogicBuilderSection() {
  return (
    <section className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-12 lg:mb-14">
          <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
            Step 02
          </span>
          <h2 className="max-w-[920px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[56px]">
            Build with <G>Logic Builder</G>
          </h2>
          <p
            className="max-w-[720px] font-rancho text-[26px] leading-snug text-purple-primary sm:text-[30px] md:text-[32px] lg:text-[34px]"
            style={{
              WebkitTextStroke: "0.3px rgba(15, 15, 26, 0.3)",
              paintOrder: "stroke fill",
            }}
          >
            It&apos;s not about adding more tools; it&apos;s about bringing everything together.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center md:flex-row md:items-center md:justify-center md:gap-0 lg:max-w-[1180px]">
          <div className="relative z-0 w-full max-w-[620px] shrink-0 md:w-[min(56%,600px)] md:max-w-none md:-translate-x-[clamp(8px,2.5vw,36px)] lg:-translate-x-[clamp(12px,3vw,48px)]">
            <div className="relative w-full overflow-hidden rounded-[24px] border border-[#EDE9FE] bg-[#F3F0FF] shadow-sm">
              <Image
                src={howItWorksPageImages.logicLarge}
                width={1080}
                height={621}
                sizes="(max-width: 768px) 100vw, 600px"
                alt="Build business logic visually with Formezy Logic Builder"
                className="h-auto w-full object-contain align-middle"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-6 w-full max-w-[480px] md:mt-0 md:w-[min(48%,460px)] md:max-w-none md:-ml-10 md:translate-x-[clamp(8px,2.5vw,36px)] lg:-ml-14 lg:translate-x-[clamp(12px,3vw,48px)] xl:-ml-16"
          >
            <div className="rounded-[20px] border border-purple-100/90 bg-white p-6 shadow-[0_16px_48px_rgba(44,14,58,0.14)] md:rounded-[22px] md:p-7">
              <p className="font-sora text-[16px] leading-[24px] text-[#2C0E3A]">
                Translate how work should run into modules, validations, and approvals — so the
                system enforces the process instead of your inbox chasing it.
              </p>
              <p className="mt-4 font-sora text-[16px] font-semibold leading-[24px] text-[#2C0E3A]">
                Logic Builder helps you:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {logicBullets.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 font-sora text-[15px] leading-relaxed text-[#6366A8] md:text-[16px]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — Automate Processes + Integrate / Scale (design reference)
───────────────────────────────────────────── */
function AutomateProcessesSection() {
  return (
    <section className="section bg-[#FAFAFE]">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[44px] lg:text-[48px]"
            style={{ lineHeight: "1.15" }}
          >
            Automate <G>Processes</G>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-[640px] font-sora text-[17px] font-semibold leading-[26px] text-[#2C0E3A] md:text-[18px]"
          >
            With the structure in place, execution becomes automatic.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-[640px] font-sora text-[16px] leading-[28px] text-[#6366A8]"
          >
            Tasks move forward without constant follow-ups. Approvals happen in sequence.
            Notifications ensure nothing is missed — so your teams spend time on decisions, not
            chasing status.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="relative mt-2 max-w-[640px] rounded-2xl border border-purple-100/60 bg-white/80 px-10 py-8 shadow-card backdrop-blur-sm"
          >
            <Quote
              size={32}
              className="absolute left-5 top-5 text-[#6C60E8]/25"
              fill="currentColor"
            />
            <Quote
              size={32}
              className="absolute bottom-5 right-5 rotate-180 text-[#6C60E8]/25"
              fill="currentColor"
            />
            <p
              className="font-rancho text-[22px] leading-snug text-purple-primary sm:text-[24px] md:text-[26px]"
              style={{
                WebkitTextStroke: "0.3px rgba(15, 15, 26, 0.25)",
                paintOrder: "stroke fill",
              }}
            >
              Execution becomes consistent, predictable, and faster.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 w-full overflow-hidden rounded-[24px] border border-[#EDE9FE] bg-[#F3F0FF] shadow-sm md:mt-14"
        >
          <div className="relative mx-auto w-full max-w-[1600px] aspect-[1600/779] min-h-[200px]">
            <Image
              src={howItWorksPageImages.automateWide}
              alt="Automated process path from intake to result with Formezy"
              fill
              sizes="(max-width: 1600px) 100vw, 1600px"
              className="object-contain object-center"
            />
          </div>
        </motion.div>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 text-center md:text-left"
          >
            <h3 className="font-sora text-[26px] font-bold text-[#2C0E3A] md:text-[30px]">
              Integrate <G>Systems</G>
            </h3>
            <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Formezy integrates with the tools your teams already use so data flows smoothly
              without forcing everyone onto yet another interface.
            </p>
            <p
              className="font-rancho text-[20px] leading-snug text-purple-primary sm:text-[22px] md:text-[24px]"
              style={{
                WebkitTextStroke: "0.25px rgba(15, 15, 26, 0.2)",
                paintOrder: "stroke fill",
              }}
            >
              &ldquo;Your systems stay aligned. Your data stays consistent.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="flex flex-col gap-4 text-center md:text-left"
          >
            <h3 className="font-sora text-[26px] font-bold text-[#2C0E3A] md:text-[30px]">
              Scale with <G>Confidence</G>
            </h3>
            <p className="font-sora text-[16px] leading-[28px] text-[#6366A8]">
              The platform is built to scale alongside your business — add teams, regions, and
              workloads without rebuilding your core workflows from scratch.
            </p>
            <p
              className="font-rancho text-[20px] leading-snug text-purple-primary sm:text-[22px] md:text-[24px]"
              style={{
                WebkitTextStroke: "0.25px rgba(15, 15, 26, 0.2)",
                paintOrder: "stroke fill",
              }}
            >
              &ldquo;Scale operations without starting over.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — CTA (home `BuildErp` “Own Enterprise Platform” pattern)
───────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="section overflow-hidden bg-white/80 backdrop-blur-sm padding_top
 ">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-purple-100 shadow-[0_8px_48px_rgba(108,96,232,0.12)] md:min-h-[600px] lg:min-h-[680px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/90 via-white/50 to-transparent"
          />
          <Image
            src={howItWorksPageImages.cta}
            alt="Build smarter workflows with Formezy"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="z-0 object-cover object-bottom"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="relative z-10 flex flex-col items-center gap-6 px-6 pb-12 pt-12 text-center md:px-16 md:pt-14 lg:pt-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Ready to Build{" "}
              <span
                style={{
                  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Smarter Workflows?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-[640px] font-sora text-[16px] leading-[26px] text-[#6366A8]"
            >
              Design ERP-grade systems tailored to your business workflows, approvals, and
              operational structure—without the limitations of traditional software. Start building
              your custom platform today.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button href="#demo" size="lg" className="rounded-[10px]">
                Get Started <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Root export
───────────────────────────────────────────── */
export default function HowItWorksContent() {
  return (
    <>
      <HeroSection />
      <HowItWorksStepsSection />
      <DefineWorkflowsSection />
      <LogicBuilderSection />
      <AutomateProcessesSection />
      <CtaSection />
    </>
  );
}
