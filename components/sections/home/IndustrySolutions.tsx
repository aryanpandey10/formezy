"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/ui/Carousel";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

// Only 4 industries shown (zig-zag layout)
const industries = [
  { title: "Heavy Manufacturing",    image: "/images/SolutionAccross1.png" },
  { title: "Process Industries",     image: "/images/SolutionAccross2.png" },
  { title: "Discrete Manufacturing", image: "/images/SolutionAccross3.png" },
  { title: "Retail & Wholesale",     image: "/images/SolutionAccross4.png" },
];

export default function IndustrySolutions() {
  return (
    <section className="section bg-white/70 backdrop-blur-sm">
      <div className="container-app">
        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              Industry Solutions
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Solutions Across{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Industries
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-[720px] font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
            Empowering diverse industries with tailored systems designed to match
            their unique workflows, operations, and business challenges.
          </motion.p>
        </motion.div>

        {/* ── Desktop: 4-card zig-zag ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 hidden lg:flex lg:items-start lg:gap-6"
        >
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              /* even indices sit high, odd indices sit low — creates zig-zag */
              className={`flex-1 ${i % 2 === 1 ? "mt-16" : ""}`}
            >
              <IndustryCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Mobile: carousel ── */}
        <div className="mt-14 lg:hidden">
          <Carousel
            options={{ align: "start" }}
            slideClassName="basis-[80%] sm:basis-[55%]"
            showDots
            showArrows={false}
          >
            {industries.map((item) => (
              <IndustryCard key={item.title} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ title, image }: { title: string; image: string }) {
  return (
    <Link
      href="/platform/use-cases"
      className="group relative block h-[300px] overflow-hidden rounded-[20px] shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-hover"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 80vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
        <span className="font-sora text-[16px] font-bold">{title}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
