"use client";

// Carousel pattern inspired by: https://stackoverflow.com/a/75267462 (Jöcker, CC BY-SA 4.0)
// Adapted to circular logo cards with auto-rotation and white background.

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const integrations = [
  { id: "gs",      name: "Google Sheets", label: "Google Sheets",    src: "/images/Google_Sheets_Logo.png" },
  { id: "ns",      name: "NetSuite",       label: "NetSuite ERP",     src: "/images/NetSuite-Symbol.png" },
  { id: "gw",      name: "G Suite",        label: "Google Workspace", src: "/images/Gsuite_logo.png" },
  { id: "oracle",  name: "Oracle",         label: "Oracle Database",  src: "/images/Oracle-logo.png" },
  { id: "outlook", name: "Outlook",        label: "Outlook Calendars",src: "/images/Microsoft_Office_Outlook.png" },
  { id: "sap",     name: "SAP",            label: "SAP Integration",  src: "/images/SAP-Logo.png" },
  { id: "o365",    name: "Office 365",     label: "Microsoft 365",    src: "/images/Microsoft_360.png" },
  { id: "wp",      name: "WordPress",      label: "WordPress CMS",    src: "/images/Wordpress.png" },
  { id: "excel",   name: "Excel",          label: "Microsoft Excel",  src: "/images/Microsoft_Excel-Logo.png" },
];

const N = integrations.length;

// Variant: only enter/exit use x; center state uses opacity based on position.
// The `layout` prop handles physical position shifts in the flex row.
const cardVariants = {
  enter: ({ direction }: { direction: number }) => ({
    opacity: 0,
    scale: 0.75,
    x: direction > 0 ? 220 : -220,
  }),
  center: ({ position }: { position: () => "left" | "center" | "right" }) => ({
    opacity: position() === "center" ? 1 : 0.55,
    scale: 1,
    x: 0,
  }),
  exit: ({ direction }: { direction: number }) => ({
    opacity: 0,
    scale: 0.75,
    x: direction > 0 ? -220 : 220,
  }),
};

export default function SeamlessIntegrations() {
  const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([4, 1]);

  const indexInScope = ((activeIndex % N) + N) % N;

  // Endless: double the array and slice 3 from the current position
  const visibleItems = [...integrations, ...integrations].slice(
    indexInScope,
    indexInScope + 3,
  );

  const centerItem = visibleItems[1];

  const handleClick = (newDir: number) => {
    setActiveIndex(([prev]) => [prev + newDir, newDir]);
  };

  // Auto-rotate every 3 s
  useEffect(() => {
    const t = setInterval(() => handleClick(1), 3000);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="section overflow-hidden bg-white/90 backdrop-blur-sm"
      id="integrations"
    >
      <div className="container-app">
        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              Integrations
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[56px]"
          >
            Seamless{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Integrations
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-lg font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
            Connect Formezy With Your Existing Systems
          </motion.p>
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          {/* Arrow + cards row */}
          <div className="flex items-center justify-center gap-3 md:gap-10">
            {/* Prev */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleClick(-1)}
              aria-label="Previous integration"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary hover:shadow-card-hover md:h-12 md:w-12"
            >
              <ChevronLeft size={16} className="text-[#2C0E3A] md:hidden" />
              <ChevronLeft size={20} className="hidden text-[#2C0E3A] md:block" />
            </motion.button>

            {/* Cards — fixed width so equal gaps are maintained */}
            <div
              className="flex items-center justify-center gap-4 overflow-visible sm:gap-8 md:gap-10"
              style={{ minWidth: 0 }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleItems.map((item, i) => {
                  const position: "left" | "center" | "right" =
                    i === 0 ? "left" : i === 1 ? "center" : "right";
                  const isCenter = position === "center";

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      custom={{ direction, position: () => position }}
                      variants={cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                        layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className="flex flex-shrink-0 cursor-pointer flex-col items-center"
                      onClick={() =>
                        setActiveIndex([
                          i === 0
                            ? activeIndex - 1
                            : i === 2
                            ? activeIndex + 1
                            : activeIndex,
                          i === 0 ? -1 : 1,
                        ])
                      }
                    >
                      {/* Circle */}
                      <div
                        className={`relative flex items-center justify-center rounded-full bg-white transition-shadow duration-300 ${
                          isCenter
                            ? "h-[120px] w-[120px] shadow-[0_8px_40px_rgba(91,79,232,0.28),0_0_0_1px_rgba(108,96,232,0.14)] sm:h-[150px] sm:w-[150px] md:h-[190px] md:w-[190px]"
                            : "h-[72px] w-[72px] border border-purple-100 shadow-card sm:h-[90px] sm:w-[90px] md:h-[110px] md:w-[110px]"
                        }`}
                      >
                        {/* Dashed ring — center only, equal 8px dash + 8px gap */}
                        {isCenter && (
                          <svg
                            viewBox="0 0 220 220"
                            className="pointer-events-none absolute -inset-[15px] h-[calc(100%+30px)] w-[calc(100%+30px)]"
                            fill="none"
                            aria-hidden
                          >
                            <circle
                              cx="110"
                              cy="110"
                              r="107"
                              stroke="#6C60E8"
                              strokeWidth="1.5"
                              strokeOpacity="0.38"
                              strokeDasharray="8 8"
                            />
                          </svg>
                        )}

                        <Image
                          src={item.src}
                          alt={item.name}
                          width={isCenter ? 110 : 64}
                          height={isCenter ? 110 : 64}
                          className="object-contain"
                          style={{
                            width: isCenter ? "58%" : "55%",
                            height: "auto",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Next */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleClick(1)}
              aria-label="Next integration"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary hover:shadow-card-hover md:h-12 md:w-12"
            >
              <ChevronRight size={16} className="text-[#2C0E3A] md:hidden" />
              <ChevronRight size={20} className="hidden text-[#2C0E3A] md:block" />
            </motion.button>
          </div>

          {/* Vertical connector + active label */}
          <div className="mt-5 flex flex-col items-center gap-2">
            <div className="h-8 w-px bg-gradient-to-b from-[#6C60E8]/50 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={centerItem.id + "-label"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2.5 rounded-pill border border-purple-100 bg-white px-5 py-2.5 shadow-card"
              >
                <Image
                  src={centerItem.src}
                  alt={centerItem.name}
                  width={18}
                  height={18}
                  className="h-4 w-4 object-contain"
                />
                <span className="font-sora text-[14px] font-semibold text-[#2C0E3A]">
                  {centerItem.label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot navigation */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {integrations.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  setActiveIndex([i, i > indexInScope ? 1 : -1])
                }
                aria-label={`Go to ${integrations[i].name}`}
                className={`rounded-full transition-all duration-300 ${
                  indexInScope === i
                    ? "h-2 w-8 bg-[#6C60E8]"
                    : "h-2 w-2 bg-[#2C0E3A]/20 hover:bg-[#2C0E3A]/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
