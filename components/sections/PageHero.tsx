"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Sparkles } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 md:pt-14 lg:pb-16 lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] -top-[20%] h-[640px] w-[640px] rounded-full bg-radial-purple blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-radial-purple blur-2xl opacity-60"
      />
      <div className="container-app relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center"
        >
          {breadcrumbs ? (
            <motion.div variants={fadeUp}>
              <Breadcrumbs items={breadcrumbs} />
            </motion.div>
          ) : null}
          {eyebrow ? (
            <motion.div variants={fadeUp}>
              <Badge icon={<Sparkles size={12} />}>{eyebrow}</Badge>
            </motion.div>
          ) : null}
          <motion.h1 variants={fadeUp} className="h1 text-balance">
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              variants={fadeUp}
              className="body-l max-w-2xl text-balance"
            >
              {description}
            </motion.p>
          ) : null}
        </motion.div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
