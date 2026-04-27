"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { viewportOnce, fadeUp, staggerContainer } from "@/lib/animations";

const animatedPaths = [
  { d: "M 592 310 L 169 186", color: "#708FF4", dur: "3s", delay: "0s" },
  { d: "M 592 310 L 363 186", color: "#6C60E8", dur: "3.5s", delay: "0.2s" },
  { d: "M 592 310 L 557 186", color: "#708FF4", dur: "4s", delay: "0.4s" },
  { d: "M 592 310 L 750 186", color: "#6C60E8", dur: "3s", delay: "0.6s" },
  { d: "M 592 310 L 350 430", color: "#708FF4", dur: "3.5s", delay: "0.8s" },
  { d: "M 592 310 L 750 430", color: "#6C60E8", dur: "4s", delay: "1s" },
];

export default function WhyChoose() {
  return (
    <section className="section overflow-hidden bg-white/70 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              Why Formezy
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Why Modern Businesses{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Choose Formezy
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-[720px] font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
            Formezy combines flexibility, automation, and scalability to help
            businesses build and manage systems that truly match their
            operations.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button href="#demo" size="lg" className="rounded-[10px]">
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14"
        >
          <Image
            src="/images/WhyFormEzy.svg"
            alt="Why Formezy — connected business flows"
            width={1185}
            height={621}
            className="h-auto w-full"
          />

          
        </motion.div>
      </div>
    </section>
  );
}
