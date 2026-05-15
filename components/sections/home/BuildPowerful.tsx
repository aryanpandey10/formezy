"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

// 5 card colours cycling through the 6 cards
const CARD_COLORS = ["#FFF7E8", "#E8F8FF", "#E8EBFF", "#FFEBEB", "#F8E9FF"];

const HOME_WEBP = "/images/Home/Webp";

/** One WebP per solution — filenames under `public/images/Home/Webp/` */
const SOLUTION_IMAGE_BY_ID: Record<number, string> = {
  1: `${HOME_WEBP}/business_systems.webp`,
  2: `${HOME_WEBP}/mfg.webp`,
  3: `${HOME_WEBP}/quality.webp`,  
  4: `${HOME_WEBP}/crm_systems.webp`,
  5: `${HOME_WEBP}/supply_chain_systems.webp`,
  6: `${HOME_WEBP}/operations_platforms.webp`,
  7: `${HOME_WEBP}/role_based_access.webp`,
  8: `${HOME_WEBP}/reporting_dashboards.webp`,
};

type Solution = {
  id: number;
  title: string;
  description: string;
};

const solutions: Solution[] = [
  {
    id: 1,
    title: "Business Workflows",
    description:
      "Unify finance, inventory, procurement and HR into one configurable system that scales as your business grows.",
  },  
  {
    id: 2,
    title: "MFG / Production Systems",
    description:
      "Manage production workflows, execution tracking, and operational coordination across your manufacturing processes.",
  },
  {
    id: 3,
    title: "Quality Control Systems",
    description:
      "Standardize inspections, approvals, and quality workflows with real-time tracking and complete process visibility.",
  },
  {
    id: 4,
    title: "CRM Systems",
    description:
      "Manage the full customer lifecycle — from lead to renewal — on one unified timeline with complete visibility.",
  },
  {
    id: 5,
    title: "Supply Chain Systems",
    description:
      "Track vendors, shipments and inventory in a single connected workflow with real-time alerts and SLA controls.",
  },
  {
    id: 6,
    title: "Operations Management",
    description:
      "Coordinate people, tasks, assets and projects across locations with full operational control and clarity.",
  },
  {
    id: 7,
    title: "HR & People Systems",
    description:
      "Streamline onboarding, leave management, performance reviews and payroll processes in a single platform.",
  },
  {
    id: 8,
    title: "Finance & Compliance",
    description:
      "Automate approvals, budget tracking and audit-ready reporting across all your financial workflows.",
  },
];

export default function BuildPowerful() {
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
    <section className="bg-white/80 py-10 backdrop-blur-sm md:py-12 lg:py-14">
      <div className="container-app">
        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Build Powerful Business Systems{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Way
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-xl font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
            Start from a template, or compose from modules — Formezy flexes to
            match how your business actually works.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              href="/platform/use-cases"
              size="lg"
              className="rounded-[10px]"
            >
              Explore Solutions <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Carousel with side buttons ── */}
        <div className="relative mt-8 md:mt-10">
          {/* LEFT NAV BUTTON — outside track on lg */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous solution"
            className="absolute left-0 top-[45%] z-10 hidden h-[99px] w-[99px] -translate-x-[52%] -translate-y-1/2 items-center justify-center rounded-full border border-[#B8B1FD] bg-white shadow-[0_8px_32px_rgba(108,96,232,0.18)] transition-all hover:border-[#6C60E8] hover:shadow-[0_8px_40px_rgba(108,96,232,0.32)] lg:flex"
          >
            <ChevronLeft size={32} className="text-[#2C0E3A]" />
          </motion.button>

          {/* Embla viewport — inset on lg to leave room for side buttons */}
          <div className="overflow-hidden lg:mx-10 xl:mx-12" ref={emblaRef}>
            <div className="flex -ml-5">
              {solutions.map((s, i) => (
                <div
                  key={s.id}
                  className="min-w-0 shrink-0 grow-0 basis-[88%] pl-5 sm:basis-[60%] md:basis-[48%] lg:basis-[34%]"
                >
                  <SolutionCard
                    solution={s}
                    color={CARD_COLORS[i % CARD_COLORS.length]}
                    imageSrc={SOLUTION_IMAGE_BY_ID[s.id]}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT NAV BUTTON — outside track on lg */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next solution"
            className="absolute right-0 top-[45%] z-10 hidden h-[99px] w-[99px] translate-x-[52%] -translate-y-1/2 items-center justify-center rounded-full border border-[#B8B1FD] bg-white shadow-[0_8px_32px_rgba(108,96,232,0.18)] transition-all hover:border-[#6C60E8] hover:shadow-[0_8px_40px_rgba(108,96,232,0.32)] lg:flex"
          >
            <ChevronRight size={32} className="text-[#2C0E3A]" />
          </motion.button>

          {/* Mobile nav — below the track */}
          <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B8B1FD] bg-white shadow-card transition-colors hover:border-[#6C60E8]"
            >
              <ChevronLeft size={20} className="text-[#2C0E3A]" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C0E3A] text-white shadow-card transition-colors hover:bg-[#3D1650]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  solution,
  color,
  imageSrc,
}: {
  solution: Solution;
  color: string;
  imageSrc: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="flex h-auto min-h-[420px] w-full max-w-[430px] flex-col items-start gap-4 overflow-hidden rounded-[30px] border border-[#B8B1FD] p-5 md:min-h-[500px]"
      style={{ backgroundColor: color }}
    >
      <div className="flex w-full flex-col items-start gap-3">
        <h3 className="font-sora text-[24px] font-semibold leading-[28px] text-[#2C0E3A]">
          {solution.title}
        </h3>
        <p className="font-sora text-[16px] font-normal leading-[26px] text-[#6366A8]">
          {solution.description}
        </p>
      </div>

      <div className="relative mt-auto h-[200px] w-full flex-shrink-0 overflow-hidden rounded-[18px] md:h-[280px]">
        <Image
          src={imageSrc}
          alt={solution.title}
          fill
          sizes="380px"
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
}
