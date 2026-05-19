"use client";

import { useState, useEffect, useRef } from "react";
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
    author: "",
    role: "Heavy Metal and Tubes Pvt Ltd.",
    stars: 5,
  },
  {
    id: 2,
    name: "Twin Cool Engineers",
    logo: "/images/Home/twin_cool.png",
    industry: "Engineering",
    color: "#06B6D4",
    quote:
      "We moved from another ERP to Formezy. The transition was smooth, adoption was quick, and our workflows finally feel structured, connected, and fully in our control.",
    author: "",
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
    author: "",
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
    author: "",
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
    author: "",
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
    author: "",
    role: "Armstrong Machinery LLP",
    stars: 5,
  },
  {
    id: 7,
    name: "Navjivan Roller Flour & Pulse Mills",
    logo: "/images/Home/navjeevan.png",
    industry: "Food & Milling",
    color: "#10B981",
    quote:
      "Eight decades of manual operations - Formezy digitized all of it. Reporting improved, decisions became data-driven, and we're now more competitive than we've ever been in our history.",
    author: "",
    role: "Navjivan Roller Flour & Pulse Mills",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const client = clients[active];

  const prev = () =>
    setActive((p) => (p === 0 ? clients.length - 1 : p - 1));

  const next = () =>
    setActive((p) => (p === clients.length - 1 ? 0 : p + 1));

  // ✅ FIXED AUTO SLIDER (ONLY CHANGE)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((p) =>
        p === clients.length - 1 ? 0 : p + 1
      );
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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


          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Client Testimonials{" "}
            <span
              style={{
                background:
                  "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
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

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[7fr_3fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[24px]p-0">
              <Image
                src="/images/ClientSays.svg"
                alt="Formezy client network"
                width={1073}
                height={713}
                className="h-auto w-full opacity-90"
              />
            </div>
          </motion.div>

          <div className="flex flex-col h-full justify-end gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={client.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="relative h-14 w-32 shrink-0">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  <div className="flex min-w-0 flex-col items-end gap-1">
                    <div className="flex items-center gap-0.5 text-[#708FF4]">
                      {Array.from({ length: client.stars }).map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </div>

                <hr className="border-t border-slate-200 mt-2 mb-6" />

                <blockquote className="mt-3 font-sora text-[16px] leading-[1.6] text-ink">
                  &ldquo;{client.quote}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {clients.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 28 : 8,
                      height: 8,
                      backgroundColor: i === active ? client.color : "#e5e7eb",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}