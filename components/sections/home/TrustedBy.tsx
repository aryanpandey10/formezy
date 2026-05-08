"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import TrustedLogos from "@/components/illustrations/TrustedLogos";

export default function TrustedBy() {
  return (
    <section className="border-y border-purple-100/60 bg-white/80 py-10 backdrop-blur-sm md:py-14">
      <div className="container-app">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-muted"
        >
          Trusted by Enterprises worldwide
        </motion.p>
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white/80 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white/80 to-transparent"
        />

        <TrustedLogos className="py-2" />
      </div>
    </section>
  );
}
