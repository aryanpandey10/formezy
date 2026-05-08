"use client";

// Carousel pattern inspired by: https://stackoverflow.com/a/75267462 (Jöcker, CC BY-SA 4.0)
// Adapted to a 7-circle fan with decreasing sizes outward, no circle fill.

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

const integrations = [
  { id: "gs",      name: "Google Sheets", label: "Google Sheets",     src: "/images/Google_Sheets_Logo.png" },
  { id: "ns",      name: "NetSuite",      label: "NetSuite ERP",      src: "/images/NetSuite-Symbol.png" },
  { id: "gw",      name: "G Suite",       label: "Google Workspace",  src: "/images/Gsuite_logo.png" },
  { id: "oracle",  name: "Oracle",        label: "Oracle Database",   src: "/images/Oracle-logo.png" },
  { id: "outlook", name: "Outlook",       label: "Outlook Calendars", src: "/images/Microsoft_Office_Outlook.png" },
  { id: "sap",     name: "SAP",           label: "SAP Integration",   src: "/images/SAP-Logo.png" },
  { id: "o365",    name: "Office 365",    label: "Microsoft 365",     src: "/images/Microsoft_360.png" },
  { id: "wp",      name: "WordPress",     label: "WordPress CMS",     src: "/images/Wordpress.png" },
  { id: "excel",   name: "Excel",         label: "Microsoft Excel",   src: "/images/Microsoft_Excel-Logo.png" },
];

const N = integrations.length;

// Desktop sizes — 7 positions (0=far-left … 3=center … 6=far-right), pixels
const DESKTOP_SIZES = [60, 84, 116, 168, 116, 84, 60];
// Mobile sizes (shown as 5 circles; positions 0 & 6 hidden)
const MOBILE_SIZES  = [0,  52, 80,  118, 80,  52, 0];

// Opacity decreasing outward from center
const OPACITIES = [0.28, 0.48, 0.72, 1, 0.72, 0.48, 0.28];

export default function SeamlessIntegrations() {
  const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([0, 1]);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive size detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const indexInScope = ((activeIndex % N) + N) % N;

  const handleClick = useCallback((newDir: number) => {
    setActiveIndex(([prev]) => [prev + newDir, newDir]);
  }, []);

  // Auto-rotate every 3 s
  useEffect(() => {
    const t = setInterval(() => handleClick(1), 3000);
    return () => clearInterval(t);
  }, [handleClick]);

  // Compute the 7 positions: center is posIdx 3
  const positions = Array.from({ length: 7 }, (_, posIdx) => {
    const offset = posIdx - 3; // -3 … +3
    const itemIdx = ((indexInScope + offset) % N + N) % N;
    const sizes = isMobile ? MOBILE_SIZES : DESKTOP_SIZES;
    return {
      item: integrations[itemIdx],
      size: sizes[posIdx],
      opacity: OPACITIES[posIdx],
      isCenter: posIdx === 3,
      hidden: isMobile && (posIdx === 0 || posIdx === 6),
    };
  });

  const centerItem = positions[3].item;

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

        {/* ── 7-circle fan carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          {/* Nav + circles row */}
          <div className="flex items-center justify-center gap-3 md:gap-6">
            {/* Prev */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleClick(-1)}
              aria-label="Previous integration"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary md:h-12 md:w-12"
            >
              <ChevronLeft size={18} className="text-[#2C0E3A]" />
            </motion.button>

            {/* 7 circles — stable positional keys so only content animates */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 lg:gap-6">
              {positions.map(({ item, size, opacity, isCenter, hidden }, posIdx) => {
                if (hidden) return null;
                return (
                  <motion.div
                    key={posIdx}
                    animate={{ opacity }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="flex flex-shrink-0 cursor-pointer flex-col items-center"
                    onClick={() => {
                      const offset = posIdx - 3;
                      if (offset !== 0) handleClick(offset > 0 ? 1 : -1);
                    }}
                  >
                    {/* Circle — transparent background, border only */}
                    <motion.div
                      animate={{ width: size, height: size }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative flex items-center justify-center overflow-visible rounded-full ${
                        isCenter
                          ? "border border-[#6C60E8]/40 shadow-[0_6px_32px_rgba(108,96,232,0.2)]"
                          : "border border-purple-100/70"
                      }`}
                      style={{ minWidth: size }}
                    >
                      {/* Dashed orbit ring — center only */}
                      {isCenter && (
                        <svg
                          viewBox="0 0 220 220"
                          className="pointer-events-none absolute -inset-[18px] h-[calc(100%+36px)] w-[calc(100%+36px)]"
                          fill="none"
                          aria-hidden
                        >
                          <circle
                            cx="110"
                            cy="110"
                            r="107"
                            stroke="#6C60E8"
                            strokeWidth="1.5"
                            strokeOpacity="0.32"
                            strokeDasharray="8 8"
                          />
                        </svg>
                      )}

                      {/* Logo image — animates on item change */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.7 }}
                          transition={{ duration: 0.28 }}
                          className="absolute inset-0 flex items-center justify-center p-[22%]"
                        >
                          <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            sizes={`${size}px`}
                            className="object-contain p-[22%]"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Next */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handleClick(1)}
              aria-label="Next integration"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white shadow-card transition-colors hover:border-purple-primary md:h-12 md:w-12"
            >
              <ChevronRight size={18} className="text-[#2C0E3A]" />
            </motion.button>
          </div>

          {/* Connector + active label */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="h-8 w-px bg-gradient-to-b from-[#6C60E8]/50 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.div
                key={centerItem.id + "-label"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
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

          {/* Dot nav */}
          <div className="mt-5 flex items-center justify-center gap-2">
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
