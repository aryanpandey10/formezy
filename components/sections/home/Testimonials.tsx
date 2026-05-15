"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fadeUp, viewportOnce, staggerContainer } from "@/lib/animations";

type Client = {
  id: number;
  name: string;
  logo: string;
  industry: string;
  color: string;
  quote: string;
  author: string;
  role: string;
  stars: number;
};

const clients: Client[] = [
  {
    id: 1,
    name: "Heavy Metal and Tubes Pvt Ltd.",
    logo: "/images/Home/heavy_metal.png",
    industry: "Manufacturing",
    color: "#6C63FF",
    quote:
      "Formezy transformed how our plants operate. Real-time visibility, faster approvals, zero dependency on spreadsheets - it's the one system our entire operations team actually trusts and uses daily.",
    author: "Management",
    role: "Heavy Metal and Tubes Pvt Ltd.",
    stars: 5,
  },
  {
    id: 2,
    name: "Twin Cool Engineers",
    logo: "/images/Home/twincool.png",
    industry: "Engineering",
    color: "#06B6D4",
    quote:
      "We moved from another ERP to Formezy. The transition was smooth, adoption was quick, and our workflows finally feel structured, connected, and fully in our control.",
    author: "Management",
    role: "Twin Cool Engineers",
    stars: 5,
  },
  {
    id: 3,
    name: "Yash Filter",
    logo: "/images/Home/yash_filters.png",
    industry: "Filtration",
    color: "#F59E0B",
    quote:
      "Formezy cut down the time our team spends on follow-ups significantly. It was simple enough for our team to use from day one - without anyone having to ask.",
    author: "Management",
    role: "Yash Filter",
    stars: 5,
  },
  {
    id: 4,
    name: "Pep Foods",
    logo: "/images/Home/pepfood.png",
    industry: "Food & Beverage",
    color: "#A78BFA",
    quote:
      "Compliance and procurement used to demand constant follow-ups. With Formezy, the system follows up for us - deadlines are met, nothing slips, and our team works worry-free.",
    author: "Management",
    role: "Pep Foods",
    stars: 5,
  },
  {
    id: 5,
    name: "Parishi Construction Equipment",
    logo: "/images/Home/parishi.png",
    industry: "Construction",
    color: "#EF4444",
    quote:
      "We tried many ERPs - none felt right. Formezy just fits. Our construction workflows, approvals, and equipment tracking finally run the way our business actually works.",
    author: "Management",
    role: "Parishi Construction Equipment",
    stars: 5,
  },
  {
    id: 6,
    name: "Armstrong Machinery LLP",
    logo: "/images/Home/armstrong.png",
    industry: "Machinery",
    color: "#6366F1",
    quote:
      "Before Formezy, our processes were scattered across emails and sheets. Now everything is tracked, approved, and reported in one place - our operations run smoother than ever before.",
    author: "Management",
    role: "Armstrong Machinery LLP",
    stars: 5,
  },
  {
    id: 7,
    name: "Navjivan Roller Flour & Pulse Mills",
    logo: "/images/Home/navjivan.png",
    industry: "Food & Milling",
    color: "#10B981",
    quote:
      "Eight decades of manual operations - Formezy digitized all of it. Reporting improved, decisions became data-driven, and we're now more competitive than we've ever been in our history.",
    author: "Management",
    role: "Navjivan Roller Flour & Pulse Mills",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const client = clients[active]!;

  const prev = () => setActive((p) => (p === 0 ? clients.length - 1 : p - 1));
  const next = () => setActive((p) => (p === clients.length - 1 ? 0 : p + 1));

  return (
    <section className="section overflow-hidden bg-white" id="testimonials">
      <div className="container-app">

        {/* ── Heading — matches "What is Formezy?" pattern exactly ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Client Testimonials{" "}
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
            className="max-w-[840px] font-sora text-[16px] font-normal leading-[24px] text-[#6366A8]"
          >
            Businesses across industries use Formezy to turn operational complexity into clarity.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-purple-50 via-white to-purple-50/50 p-0">
              <Image
                src="/images/ClientSays.svg"
                alt="Formezy client network"
                width={1073}
                height={713}
                className="h-auto w-full opacity-90"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={client.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[24px] border border-purple-100 bg-white p-8 shadow-card md:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-colors duration-500"
                  style={{ backgroundColor: `${client.color}20` }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="relative h-14 w-32 shrink-0">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col items-end gap-1">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {Array.from({ length: client.stars }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <span
                      className="max-w-[min(100%,220px)] rounded-pill px-2.5 py-0.5 text-right text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${client.color}18`,
                        color: client.color,
                      }}
                    >
                      {client.industry}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                  {client.name}
                </p>

                <Quote
                  size={36}
                  className="mt-4 opacity-10"
                  style={{ color: client.color }}
                />
                <blockquote className="mt-3 text-[19px] font-medium leading-[1.6] text-ink md:text-[21px]">
                  &ldquo;{client.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={client.logo}
                      alt={client.author}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col leading-tight">
                    <span className="text-[14px] font-semibold text-ink">
                      {client.author}
                    </span>
                    <span className="text-[12px] text-ink-muted">
                      {client.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {clients.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 28 : 8,
                      height: 8,
                      backgroundColor: i === active ? client.color : "#e5e7eb",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-ink-secondary shadow-card transition-all hover:border-purple-200 hover:text-purple-primary"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-ink-secondary shadow-card transition-all hover:border-purple-200 hover:text-purple-primary"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
