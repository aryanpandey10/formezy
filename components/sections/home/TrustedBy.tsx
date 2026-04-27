"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

const logos = [
  { src: "/images/TrustedEnterprice1.png", alt: "Trusted Enterprise 1" },
  { src: "/images/TrustedEnterprice2.png", alt: "Trusted Enterprise 2" },
  { src: "/images/TrustedEnterprice3.png", alt: "Trusted Enterprise 3" },
  { src: "/images/TrustedEnterprice4.png", alt: "Trusted Enterprise 4" },
  { src: "/images/TrustedEnterprice5.png", alt: "Trusted Enterprise 5" },
  { src: "/images/TrustedEnterprice6.png", alt: "Trusted Enterprise 6" },
  { src: "/images/TrustedEnterprice7.png", alt: "Trusted Enterprise 7" },
  { src: "/images/TrustedEnterprice8.png", alt: "Trusted Enterprise 8" },
];

const doubled = [...logos, ...logos];

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

        <div className="flex animate-marquee items-center gap-10 pr-10 will-change-transform">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="h-10 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
