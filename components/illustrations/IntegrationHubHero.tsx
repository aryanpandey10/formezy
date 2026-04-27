"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { pathDraw, viewportOnce } from "@/lib/animations";
import IntegrationLogo from "@/components/ui/IntegrationLogo";

const logos = [
  { name: "Google Sheets", short: "GS" },
  { name: "Netify", short: "Nf" },
  { name: "G Suite", short: "G" },
  { name: "Oracle", short: "OR" },
  { name: "Outlook", short: "OL", highlighted: true },
  { name: "SAP", short: "SAP" },
  { name: "Office 365", short: "365" },
  { name: "WordPress", short: "WP" },
  { name: "Excel", short: "XL" },
];

export default function IntegrationHubHero() {
  const arcRadius = 380;
  const arcCenterY = 440;
  const n = logos.length;

  const positions = logos.map((_, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const angle = Math.PI - t * Math.PI;
    const x = 500 + Math.cos(angle) * arcRadius;
    const y = arcCenterY - Math.sin(angle) * arcRadius;
    return { x, y };
  });

  return (
    <div className="relative mx-auto aspect-[1000/560] w-full max-w-5xl">
      <svg
        viewBox="0 0 1000 560"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hubArc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="50%" stopColor="#6C63FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hubGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#6C63FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.path
          d={`M ${positions[0].x} ${positions[0].y} A ${arcRadius} ${arcRadius} 0 0 1 ${positions[n - 1].x} ${positions[n - 1].y}`}
          stroke="url(#hubArc)"
          strokeWidth="1.4"
          strokeDasharray="4 6"
          fill="none"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={pathDraw}
        />

        {positions.map((p, i) => (
          <motion.path
            key={i}
            d={`M ${p.x} ${p.y + 28} C ${p.x} ${p.y + 120}, 500 ${420}, 500 ${480}`}
            stroke={i === 4 ? "#6C63FF" : "#A78BFA"}
            strokeOpacity={i === 4 ? 0.9 : 0.4}
            strokeWidth={i === 4 ? 2 : 1.2}
            strokeDasharray="4 5"
            fill="none"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={pathDraw}
          />
        ))}

        <circle cx="500" cy="480" r="70" fill="url(#hubGlow2)" />
      </svg>

      {positions.map((p, i) => (
        <motion.div
          key={logos[i].name}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.1 * i }}
          style={{
            left: `${(p.x / 1000) * 100}%`,
            top: `${(p.y / 560) * 100}%`,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <IntegrationLogo
            name={logos[i].name}
            short={logos[i].short}
            highlighted={!!logos[i].highlighted}
          />
          {logos[i].highlighted ? (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-purple-primary bg-white px-3 py-1.5 text-[11px] font-semibold text-purple-primary shadow-[0_6px_20px_rgba(108,99,255,0.18)]">
                Outlook Calendars
                <ChevronDown size={12} />
              </span>
            </motion.div>
          ) : null}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: `${(480 / 560) * 100}%` }}
      >
        <div className="flex -translate-y-1/2 items-center gap-2 rounded-2xl border border-purple-200 bg-purple-cta px-5 py-3 text-white shadow-cta">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-[11px] font-extrabold">
            F
          </span>
          <span className="text-[14px] font-bold">Formezy Hub</span>
        </div>
      </motion.div>
    </div>
  );
}
