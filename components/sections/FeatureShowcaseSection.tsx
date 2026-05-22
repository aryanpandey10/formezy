"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export type FeatureShowcaseSectionProps = {
  /** Optional block above the two-column grid (e.g. section title + subline). */
  header?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  bulletPoints?: string[];
  image: string;
  /** When true: text column is first (left on desktop, top on mobile). */
  reverse?: boolean;
  background?: string;
  className?: string;
  id?: string;
  imageAlt: string;
  imageSizes?: string;
};

/**
 * Standard two-column feature block — same spacing, type, and radii everywhere.
 */
export default function FeatureShowcaseSection({
  header,
  title,
  description,
  bulletPoints,
  image,
  reverse = false,
  background,
  className,
  id,
  imageAlt,
  imageSizes = "(max-width: 1024px) 100vw, 50vw",
}: FeatureShowcaseSectionProps) {
  const hasBullets = bulletPoints && bulletPoints.length > 0;

  const textBlock = (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="flex flex-col gap-5 lg:gap-6"
    >
      <motion.h2
        variants={fadeUp}
        className="text-left font-sora text-[28px] font-bold leading-[1.2] tracking-tight text-[#2C0E3A] md:text-[36px] lg:text-[40px]"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.div
          variants={fadeUp}
          className="font-sora text-[15px] font-normal leading-[24px] text-[#6366A8] md:text-[16px] md:leading-[24px]"
        >
          {description}
        </motion.div>
      ) : null}

      {hasBullets ? (
        <motion.ul variants={fadeUp} className="flex flex-col gap-3.5 lg:gap-4">
          {bulletPoints!.map((line) => (
            <li
              key={line}
              className="flex gap-3 font-sora text-[15px] leading-relaxed text-[#6366A8] md:text-[16px]"
            >
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-primary"
                aria-hidden
              />
              {line}
            </li>
          ))}
        </motion.ul>
      ) : null}
    </motion.div>
  );

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden rounded-[20px] border border-purple-100/70 bg-white/60 shadow-card md:rounded-[24px]"
    >
      <div className="relative aspect-[4/3] w-full min-h-[220px] md:min-h-[280px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={imageSizes}
          className="object-contain object-center p-2 md:p-4"
        />
      </div>
    </motion.div>
  );

  return (
    <section id={id} className={cn("section", background, className)}>
      <div className="container-app">
        {header ? <div className="mb-12 md:mb-14 lg:mb-16">{header}</div> : null}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {reverse ? (
            <>
              {textBlock}
              {imageBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {textBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
