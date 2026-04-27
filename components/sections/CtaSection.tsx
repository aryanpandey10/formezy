"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";

type Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "purple" | "soft";
};

export default function CtaSection({
  title,
  description,
  ctaLabel = "Contact Us",
  ctaHref = "#contact",
  secondaryLabel,
  secondaryHref,
  children,
  className,
  variant = "soft",
}: Props) {
  return (
    <section className="section">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className={cn(
            "relative overflow-hidden rounded-[28px] border px-6 py-14 text-center md:px-14 md:py-20",
            variant === "purple"
              ? "border-purple-200 bg-purple-cta text-white"
              : "border-purple-200/60 bg-gradient-to-br from-purple-50 via-white to-purple-50",
            className,
          )}
        >
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full blur-3xl",
              variant === "purple" ? "bg-white/20" : "bg-purple-primary/20",
            )}
          />
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full blur-3xl",
              variant === "purple" ? "bg-purple-softer/40" : "bg-cyan-200/40",
            )}
          />
          <h2
            className={cn(
              "h2 mx-auto max-w-3xl text-balance",
              variant === "purple" && "text-white",
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mx-auto mt-5 max-w-2xl text-balance text-[16px] leading-[1.65] md:text-[18px]",
                variant === "purple" ? "text-white/85" : "text-ink-secondary",
              )}
            >
              {description}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={ctaHref}
              variant={variant === "purple" ? "white" : "primary"}
              className="rounded-pill"
            >
              {ctaLabel}
            </Button>
            {secondaryLabel ? (
              <Button
                href={secondaryHref ?? "#"}
                variant="secondary"
                className={cn(
                  "rounded-pill",
                  variant === "purple" &&
                    "border-white/50 bg-white/10 text-white hover:bg-white/20",
                )}
              >
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
