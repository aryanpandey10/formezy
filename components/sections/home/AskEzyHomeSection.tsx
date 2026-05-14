"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const VIDEO_SRC = "/images/Home/Web%20SIte%20Video%2001.mp4";

const bullets = [
  "Get accurate answers from business data",
  "Summarize reports, documents, and updates instantly",
  "Receive reminders for tasks, meetings, and operations",
  "Track real-time updates across workflows",
  "Understand what's happening without manual follow-ups",
];

export default function AskEzyHomeSection() {
  return (
    <section className="section overflow-hidden bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col gap-5 lg:col-span-5 lg:gap-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.12] tracking-tight text-[#2C0E3A] md:text-[42px] lg:text-[48px]"
            >
              Get Answers.{" "}
              <span
                className="bg-clip-text"
                style={{
                  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Stay in Control.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sora text-[17px] font-semibold leading-snug text-[#2C0E3A] md:text-[18px]"
            >
              AskEzy lets you interact with your business without navigating multiple
              systems.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="max-w-xl font-sora text-[15px] leading-[1.65] text-[#6366A8] md:text-[16px]"
            >
              AskEzy is built into Formezy so teams can query live data, surface what
              needs attention, and act faster — without switching tools or digging
              through disconnected reports.
            </motion.p>

            <motion.ul variants={fadeUp} className="flex flex-col gap-3.5">
              {bullets.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 font-sora text-[15px] leading-relaxed text-[#6366A8] md:text-[16px]"
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-primary"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <Button
                href="/platform/features"
                size="lg"
                className="rounded-[10px]"
              >
                Know More <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col items-center gap-4 lg:col-span-7"
          >
            <p
              className="w-full text-center font-rancho text-[28px] tracking-wide text-purple-primary sm:text-[32px] md:text-[36px] lg:text-[38px]"
              style={{
                WebkitTextStroke: "0.45px rgba(15, 15, 26, 0.55)",
                paintOrder: "stroke fill",
              }}
            >
              Confused ?? Just Askezy !
            </p>

            <div className="relative w-full overflow-hidden rounded-[24px] border border-[#E8E4FF] bg-[#F5F3FF] shadow-[0_12px_40px_rgba(108,99,255,0.12)] md:rounded-[28px]">
              <div className="relative aspect-video w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="AskEzy assistant overview video"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
