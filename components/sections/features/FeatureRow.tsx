"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { viewportOnce, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
  cta?: { label: string; href: string };
  bullets?: string[];
  className?: string;
};

export default function FeatureRow({
  eyebrow,
  title,
  description,
  visual,
  reverse = false,
  cta,
  bullets,
  className,
}: Props) {
  return (
    <section className={cn("section", className)}>
      <div className="container-app">
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-16",
            "lg:grid-cols-2",
          )}
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={reverse ? slideInRight : slideInLeft}
            className={cn(
              "flex flex-col gap-5",
              reverse && "lg:order-2",
            )}
          >
            {eyebrow ? (
              <span className="pill w-fit border border-purple-200 bg-purple-50 text-purple-primary">
                {eyebrow}
              </span>
            ) : null}
            <h2 className="h2 text-balance">{title}</h2>
            <p className="body-l text-balance max-w-xl">{description}</p>
            {bullets ? (
              <ul className="mt-1 flex flex-col gap-2 text-[15px] text-ink">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
            {cta ? (
              <div className="mt-2">
                <Button href={cta.href} variant="secondary" className="rounded-pill">
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={reverse ? slideInLeft : slideInRight}
            className={cn(reverse && "lg:order-1")}
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type CenteredProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  visual: React.ReactNode;
  cta?: { label: string; href: string };
  className?: string;
};

export function FeatureCentered({
  eyebrow,
  title,
  description,
  visual,
  cta,
  className,
}: CenteredProps) {
  return (
    <section className={cn("section", className)}>
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          {eyebrow ? (
            <span className="pill border border-purple-200 bg-purple-50 text-purple-primary">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="h2 text-balance">{title}</h2>
          {description ? (
            <p className="body-l text-balance">{description}</p>
          ) : null}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-12"
        >
          {visual}
        </motion.div>

        {cta ? (
          <div className="mt-10 flex justify-center">
            <Button href={cta.href} variant="secondary" className="rounded-pill">
              {cta.label}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
