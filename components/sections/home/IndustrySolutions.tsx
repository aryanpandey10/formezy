"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/ui/Carousel";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { industrySolutionImages } from "@/lib/home-images";

const industries = [
  {
    title: "Heavy Manufacturing",
    image: industrySolutionImages["Heavy Manufacturing"],
    href: "/platform/use-cases/heavy-manufacturing",
  },
  {
    title: "Process Industries",
    image: industrySolutionImages["Process Industries"],
    href: "/platform/use-cases/process-industries",
  },
  {
    title: "Discrete Manufacturing",
    image: industrySolutionImages["Discrete Manufacturing"],
    href: "/platform/use-cases/discrete-manufacturing",
  },
  {
    title: "Retail",
    image: industrySolutionImages.Retail,
    href: "/platform/use-cases/retail-industry",
  },
  {
    title: "Wholesale",
    image: industrySolutionImages.Wholesale,
    href: "/platform/use-cases/wholesale-industry",
  },
  {
    title: "Rental",
    image: industrySolutionImages.Rental,
    href: "/platform/use-cases/rental-industry",
  },
] as const;

export default function IndustrySolutions() {
  return (
    <section className="section bg-white/70 backdrop-blur-sm">
      <div className="mx-5">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center"
        >
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 px-2 md:px-12 lg:px-16"
        >
          <Carousel
            options={{ align: "start", loop: true }}
            slideClassName="basis-[85%] sm:basis-[55%] md:basis-[42%] lg:basis-[calc(25%-12px)]"
            showDots
            showArrows
            arrowPlacement="overlay"
            overlayArrowsFrom="always"
          >
            {industries.map((item, i) => (
              <div
                key={item.title}
                className={`h-full ${i % 2 === 1 ? "pt-12 md:pt-16 lg:pt-20" : ""}`}
              >
                <IndustryCard {...item} priority={i === 0} />
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

function IndustryCard({
  title,
  image,
  href,
  priority = false,
}: {
  title: string;
  image: string;
  href: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative block h-[280px] overflow-hidden rounded-[20px] shadow-card transition-transform  hover:shadow-card-hover sm:h-[300px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 25vw"
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
