"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { viewportOnce, fadeUp, staggerContainer } from "@/lib/animations";

type Capability = {
  id: number;
  bigTitle: string;
  heading: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    id: 1,
    bigTitle: "01",
    heading: "Low-Code / No-Code",
    description:
      "Design and build business applications visually using drag-and-drop components, without relying on complex coding.",
  },
  {
    id: 2,
    bigTitle: "02",
    heading: "Workflow Automation",
    description:
      "Automate approvals, tasks, notifications, and recurring processes to keep operations moving efficiently.",
  },
  {
    id: 3,
    bigTitle: "03",
    heading: "Role-Based Access",
    description:
      "Control user permissions, visibility, and responsibilities with secure access tailored to every role.",
  },
  {
    id: 4,
    bigTitle: "04",
    heading: "Reporting & Dashboards",
    description:
      "Track business performance, workflows, and operations through real-time dashboards and structured reports.",
  },
  {
    id: 5,
    bigTitle: "05",
    heading: "AskEzy Intelligence",
    description:
      "Get instant answers, summaries, reminders, and insights through AI built into your workflows.",
  },
  {
    id: 6,
    bigTitle: "06",
    heading: "Integrations & Connectors",
    description:
      "Connect Formezy with ERP systems, business tools, and third-party platforms for seamless operations.",
  },
];

export default function CoreCapabilities() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % capabilities.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const cap = capabilities[active];

  return (
    <section className="section overflow-hidden bg-white/80 backdrop-blur-sm">
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
              Core Capabilities
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Core Capabilities of{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Formezy
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-[720px] font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
            A powerful set of capabilities designed to help you build, automate,
            and scale business systems—without complexity.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 w-full"
        >
          <div className="mx-auto flex h-auto w-full max-w-[1600px] flex-col overflow-hidden rounded-[30px] bg-[#F8E8FF] p-6 md:min-h-[560px] md:flex-row md:items-center md:p-10 lg:p-12">
            <div className="flex w-full flex-col gap-8 md:w-[38%] md:flex-shrink-0">
              <div className="flex flex-col gap-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cap.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-6"
                  >
                    <span
                      className="font-bold leading-[60px] text-[#2C0E3A]"
                      style={{
                        fontFamily: "var(--font-sora), system-ui, sans-serif",
                        fontSize: "clamp(48px, 5vw, 60px)",
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "#2C0E3A",
                        lineHeight: "60px",
                      }}
                    >
                      {cap.bigTitle}
                    </span>
                    <h3 className="font-sora text-[24px] font-semibold leading-[24px] text-[#2C0E3A]">
                      {cap.heading}
                    </h3>
                    <p className="font-sora text-[16px] leading-[24px] text-[#6366A8]">
                      {cap.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <Button
                href="/platform/capabilities"
                size="md"
                className="w-[176px] rounded-[10px]"
              >
                Learn More <ArrowRight size={14} />
              </Button>

              <div className="flex gap-3">
                {capabilities.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(i)}
                    aria-label={`View ${c.heading}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === i
                        ? "w-8 bg-[#6C60E8]"
                        : "w-2 bg-[#2C0E3A]/20 hover:bg-[#6C60E8]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div
              key={cap.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mt-8 h-[340px] flex-1 overflow-hidden rounded-[20px] md:mt-0 md:h-auto md:max-h-[574px] md:min-h-[450px]"
            >
              <Image
                src="/images/CoreCap.svg"
                alt="Core capabilities overview"
                fill
                className="object-contain"
                sizes="(max-width:768px) 100vw, 995px"
              />
            </motion.div>
          </div>

          {/* <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 d-none">
            {capabilities.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                  active === i
                    ? "border-[#B8B1FD] bg-white shadow-card"
                    : "border-transparent bg-[#F8E8FF]/60 hover:bg-white/80"
                }`}
              >
                <p
                  className={`font-sora text-[13px] font-semibold leading-tight ${
                    active === i ? "text-[#2C0E3A]" : "text-[#6366A8]"
                  }`}
                >
                  {c.heading}
                </p>
              </button>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
