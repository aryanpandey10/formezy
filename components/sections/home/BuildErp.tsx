"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function BuildErp() {
  return (
    <section className="section overflow-hidden bg-white/80 backdrop-blur-sm">
      <div className="container-app">
        {/* ── Visual container card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[30px] border border-purple-100 bg-white shadow-[0_8px_48px_rgba(108,96,232,0.12)]"
        >
          {/* Soft ambient glow inside the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[20%] top-0 h-[300px] rounded-full bg-[#6C60E8]/6 blur-[80px]"
          />

          {/* Text + button block */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="relative z-10 flex flex-col items-center gap-6 px-6 pb-10 pt-14 text-center md:px-16 md:pt-16"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Build Your Own ERP
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Build Your{" "}
              <span
                style={{
                  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Own ERP
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-[700px] font-sora text-[16px] leading-[24px] text-[#6366A8]"
            >
              Design ERP systems tailored to your business workflows, approvals,
              and operational structure—without the limitations of traditional
              software.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button
                href="/platform/use-cases"
                size="lg"
                className="rounded-[10px]"
              >
                Explore Solutions <ArrowRight size={16} />
              </Button>
            </motion.div>

            {/* ── Image inside the card, below the button ── */}
            <motion.div
              variants={fadeUp}
              className="mt-6 w-full max-w-5xl"
            >
              <Image
                src="/images/BuildYourERP.png"
                alt="Build your ERP with Formezy modules"
                width={1200}
                height={700}
                className="h-auto w-full"
                priority={false}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
