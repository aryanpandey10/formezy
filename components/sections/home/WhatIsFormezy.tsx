"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import ImageCompareSlider from "@/components/ui/ImageCompareSlider";

export default function WhatIsFormezy() {
  return (
    <section className="section overflow-hidden bg-white/80 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center"
        >
      
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            What is{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Formezy?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-[1340px] font-sora text-[16px] font-normal leading-[24px] text-[#6366A8]"
          >
            Formezy is an Enterprise Application Platform that transforms
            disconnected tools into a unified, intelligent system. Instead of
            relying on spreadsheets, multiple software, and manual processes,
            Formezy enables businesses to build fully integrated ERP, CRM, and
            workflow systems—designed around how their operations actually work.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 w-full"
        >
          <ImageCompareSlider
            beforeSrc="/images/Home/Webp/legacy_systems.webp"
            afterSrc="/images/Home/Webp/intelligent_systems.webp"
            beforeLabel="Without Formezy"
            afterLabel="With Formezy"
            beforeAlt="Disconnected legacy tools — without Formezy"
            afterAlt="Unified intelligent systems — with Formezy"
          />

          <div className="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            {[
              { value: "Unified", label: "Single Platform" },
              { value: "No-Code", label: "Visual Builder" },
              { value: "Real-time", label: "Data Sync" },
              { value: "Scalable", label: "For Any Team Size" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 rounded-2xl border border-purple-100 bg-purple-50/60 px-4 py-4"
              >
                <span className="font-sora text-[18px] font-bold text-[#2C0E3A]">
                  {s.value}
                </span>
                <span className="font-sora text-[12px] text-[#6366A8]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
