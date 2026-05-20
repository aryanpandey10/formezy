"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { homeTwoMobileImage } from "@/lib/home-images";



export default function Operations() {
 const whyBullets = [
  "Approve workflows and requests instantly",
  "Track tasks, updates, and activities in real time",
  "Access reports, documents, and operational data remotely",
  "Enable faster coordination across teams and locations",
];

  return (
    <section className="bg-white/80 py-10 backdrop-blur-sm md:py-12 lg:py-14">
      <div className="container-app">
        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Operations Don’t Stop {" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              at the Desk
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-xl font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
           Access workflows, approvals, tasks, updates, and business operations from anywhere with Formezy Mobile Access. Stay connected to your systems in real time, whether on the shopfloor, on-site, or on the move.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              href="/platform/use-cases"
              size="lg"
              className="rounded-[10px]"
            >
              Know More <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>
<div className="mx-auto flex w-full max-w-[1320px] flex-col py-8 gap-8 md:flex-row md:items-center">
          {/* LEFT IMAGE */}
         <div className="relative z-0 w-full md:w-[60%]">
          <div className="relative overflow-hidden">

              <Image
                src={homeTwoMobileImage}
                alt="Formezy mobile access on multiple devices"
                width={875}
                height={672}
                sizes="(max-width: 768px) 100vw, 60vw"
                className="h-full w-full object-contain"
              />

            </div>
          </div>

          {/* RIGHT CONTENT */}
        <div
  className="relative z-10 w-full md:-ml-20 md:w-[40%]"
          style={{ height: "fit-content" }}
          >
            <div className="rounded-[20px] border border-purple-100/90 bg-white p-6 shadow-[0_16px_48px_rgba(44,14,58,0.14)] md:rounded-[22px] md:p-7">
            <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] mb-2 lg:text-[32px]"
          >
            Built for {" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Operational Mobility
            </span>
          </motion.h2>

              <p className="font-sora text-[15px] leading-[24px] text-[#6366A8] md:text-[16px]">
                Formezy Mobile Access ensures your teams stay productive, informed, and connected — no matter where operations happen.
              </p>
              
              <ul className="mt-4 flex flex-col gap-3">
                {whyBullets.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 font-sora text-[12px] leading-relaxed text-[#6366A8] md:text-[14px]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <p className="font-sora text-[12px] leading-[24px] text-[#6366A8] md:text-[14px]">
               Stay connected without depending on desktop systems              </p>
            </div>
          </div>

        </div>
         <p
              className="w-full text-center font-rancho text-[28px] tracking-wide text-purple-primary sm:text-[32px] md:text-[36px] lg:text-[38px]"
              style={{
                WebkitTextStroke: "0.45px rgba(15, 15, 26, 0.55)",
                paintOrder: "stroke fill",
              }}
            >
              Operate Anywhere. Respond Faster.
            </p>
      </div>
    </section>
  );
}
