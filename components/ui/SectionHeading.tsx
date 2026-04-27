"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="pill border border-purple-200 bg-purple-50 text-purple-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="h2 text-balance">{title}</h2>
      {description ? (
        <p className="body-l text-balance max-w-2xl">{description}</p>
      ) : null}
    </motion.div>
  );
}
