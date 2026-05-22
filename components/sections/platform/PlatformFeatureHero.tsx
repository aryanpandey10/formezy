"use client";

import { motion } from "framer-motion";
import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

type Props = {
  /** Breadcrumb last segment — matches Overview: Home → Platform → [currentLabel] */
  currentLabel: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Hero media (image, video) below the copy block */
  children?: React.ReactNode;
  className?: string;
  sectionClassName?: string;
  /** Optional decorative elements (absolute blurs, patterns) inside the section */
  decorations?: React.ReactNode;
};

/**
 * Feature page hero — same breadcrumb and left-aligned heading as `/platform/overview/`.
 */
export default function PlatformFeatureHero({
  currentLabel,
  title,
  description,
  children,
  className,
  sectionClassName,
  decorations,
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-0 pt-8 md:pt-10 lg:pt-12",
        sectionClassName,
      )}
    >
      {decorations}
      <div
        className={cn(
          "container-app flex flex-col items-start text-left",
          className,
        )}
      >
        <PlatformBreadcrumb currentLabel={currentLabel} />

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="flex w-full max-w-[1100px] flex-col items-start gap-6 md:gap-8"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.08] tracking-tight text-[#2C0E3A] sm:text-[44px] md:text-[52px] lg:text-[64px] lg:leading-[1.05] xl:text-[72px] xl:leading-[1.02] 2xl:text-[80px] 2xl:leading-[84px]"
          >
            {title}
          </motion.h1>

          {description ? (
            <motion.div
              variants={fadeUp}
              className="max-w-[720px] font-sora text-[15px] font-normal leading-[24px] text-[#6366A8] sm:text-[16px]"
            >
              {description}
            </motion.div>
          ) : null}
        </motion.div>

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.12,
            }}
            className="mt-8 w-full md:mt-10"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
