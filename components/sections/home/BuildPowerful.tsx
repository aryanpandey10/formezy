"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type Solution = {
  id: number;
  title: string;
  description: string;
  imageSeed: string;
};

const solutions: Solution[] = [
  {
    id: 1,
    title: "ERP-Grade Systems",
    description:
      "Unify finance, inventory, procurement and HR into one configurable system that scales as your business grows.",
    imageSeed: "erp-system",
  },
  {
    id: 2,
    title: "CRM Systems",
    description:
      "Manage the full customer lifecycle — from lead to renewal — on one unified timeline with complete visibility.",
    imageSeed: "crm-system",
  },
  {
    id: 3,
    title: "Supply Chain Systems",
    description:
      "Track vendors, shipments and inventory in a single connected workflow with real-time alerts and SLA controls.",
    imageSeed: "supply-chain",
  },
  {
    id: 4,
    title: "Operations Management",
    description:
      "Coordinate people, tasks, assets and projects across locations with full operational control and clarity.",
    imageSeed: "operations",
  },
  {
    id: 5,
    title: "HR & People Systems",
    description:
      "Streamline onboarding, leave management, performance reviews and payroll processes in a single platform.",
    imageSeed: "hr-system",
  },
  {
    id: 6,
    title: "Finance & Compliance",
    description:
      "Automate approvals, budget tracking and audit-ready reporting across all your financial workflows.",
    imageSeed: "finance",
  },
];

export default function BuildPowerful() {
  return (
    <section className="section bg-white/80 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-6 text-center"
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

        <div className="mt-14">
          <Carousel
            options={{ align: "start", loop: true }}
            slideClassName="basis-[85%] sm:basis-[60%] md:basis-[48%] lg:basis-[34%]"
            showArrows
            showDots
          >
            {solutions.map((s) => (
              <SolutionCard key={s.id} solution={s} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="flex h-auto min-h-[420px] w-full max-w-[430px] flex-col items-start gap-5 overflow-hidden rounded-[30px] border border-[#B8B1FD] bg-[#FFF7E8] p-[25px] md:min-h-[520px]"
    >
      <div className="flex w-full flex-col items-start gap-5">
        <h3
          className="font-sora text-[24px] font-semibold leading-[24px] text-[#2C0E3A]"
        >
          {solution.title}
        </h3>
        <p
          className="font-sora text-[18px] font-normal leading-[26px] text-[#6366A8]"
        >
          {solution.description}
        </p>
      </div>

      <div className="relative mt-auto h-[220px] w-full flex-shrink-0 overflow-hidden rounded-[18px] md:h-[300px]">
        <Image
          src={`https://picsum.photos/seed/${solution.imageSeed}/380/338`}
          alt={solution.title}
          fill
          sizes="380px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C0E3A]/20 to-transparent" />
      </div>
    </motion.article>
  );
}
