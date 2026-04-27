"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/animations";

type Client = {
  id: number;
  name: string;
  shortName: string;
  industry: string;
  color: string;
  logo: number;
  quote: string;
  author: string;
  role: string;
  stars: number;
};

const clients: Client[] = [
  {
    id: 1,
    name: "Stark Industries",
    shortName: "SI",
    industry: "Manufacturing",
    color: "#6C63FF",
    logo: 1,
    quote:
      "Formezy gave our operations team a common language. Workflows that used to take days now finish before lunch — and we finally have a single source of truth across all plants.",
    author: "Tanya Shah",
    role: "VP Operations · Stark Industries",
    stars: 5,
  },
  {
    id: 2,
    name: "Nexora Group",
    shortName: "NG",
    industry: "Supply Chain",
    color: "#06B6D4",
    logo: 2,
    quote:
      "We replaced four separate tools with Formezy. Procurement, vendor management, and approvals all live in one place now. Our error rate dropped by over 60% in the first quarter.",
    author: "Rajan Mehta",
    role: "COO · Nexora Group",
    stars: 5,
  },
  {
    id: 3,
    name: "Vortex Capital",
    shortName: "VC",
    industry: "Finance",
    color: "#F59E0B",
    logo: 3,
    quote:
      "Compliance used to be a quarterly fire drill. With Formezy's audit logs and approval workflows, it's just another report we run. The board loves it.",
    author: "Priya Anand",
    role: "CFO · Vortex Capital",
    stars: 5,
  },
  {
    id: 4,
    name: "Meridian Health",
    shortName: "MH",
    industry: "Healthcare",
    color: "#10B981",
    logo: 4,
    quote:
      "Patient record updates, vendor contracts, PPE reorders — all automated. Our staff spends time on care, not spreadsheets. Formezy transformed how our admin operates.",
    author: "Dr. Amina Osei",
    role: "Director of Operations · Meridian Health",
    stars: 5,
  },
  {
    id: 5,
    name: "PeakScale Retail",
    shortName: "PS",
    industry: "Retail",
    color: "#A78BFA",
    logo: 5,
    quote:
      "Cross-department collaboration used to mean endless email threads. Now every team sees the same data, same tasks, same status. Communication latency is down by 80%.",
    author: "Liam Torres",
    role: "Head of Operations · PeakScale Retail",
    stars: 5,
  },
  {
    id: 6,
    name: "Alterra Systems",
    shortName: "AS",
    industry: "Technology",
    color: "#EF4444",
    logo: 6,
    quote:
      "We built our entire internal ERP on Formezy in six weeks. No developer required. What would have been a multi-year SAP implementation became a flexible platform our team controls.",
    author: "Sahil Kapoor",
    role: "CTO · Alterra Systems",
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
        <SectionHeading
          eyebrow="Client Stories"
          title={
            <>
              What our{" "}
              <span className="gradient-text">clients say</span>
            </>
          }
          description="Businesses across industries use Formezy to turn operational complexity into clarity."
        />

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

              {/* <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-2 pb-4 px-4">
                {clients.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(i)}
                    aria-label={`Show ${c.name} testimonial`}
                    className="relative rounded-pill border px-3 py-1.5 text-[12px] font-semibold transition-all duration-300"
                    style={{
                      borderColor: i === active ? c.color : "#e5e7eb",
                      backgroundColor:
                        i === active ? `${c.color}18` : "white",
                      color: i === active ? c.color : "#6B7280",
                      transform: i === active ? "scale(1.06)" : "scale(1)",
                    }}
                  >
                    <span
                      className="mr-1.5 inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                    {c.name}
                  </button>
                ))}
              </div> */}
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
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-[15px] font-extrabold text-white shadow-lg"
                    style={{ backgroundColor: client.color }}
                  >
                    {client.shortName}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {Array.from({ length: client.stars }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <span
                      className="rounded-pill px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${client.color}18`,
                        color: client.color,
                      }}
                    >
                      {client.industry}
                    </span>
                  </div>
                </div>

                <Quote
                  size={36}
                  className="mt-6 opacity-10"
                  style={{ color: client.color }}
                />
                <blockquote className="mt-3 text-[19px] font-medium leading-[1.6] text-ink md:text-[21px]">
                  &ldquo;{client.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-bold text-white shadow"
                    style={{ backgroundColor: client.color }}
                  >
                    {client.author
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div className="flex flex-col leading-tight">
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
                      backgroundColor:
                        i === active ? client.color : "#e5e7eb",
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
