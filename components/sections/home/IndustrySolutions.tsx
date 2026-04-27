"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Carousel from "@/components/ui/Carousel";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const industries = [
  {
    title: "Heavy Manufacturing",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Process Industries",
    image:
      "https://images.unsplash.com/photo-1581091870622-1e7f41bdfbfa?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Discrete Manufacturing",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Retail & Wholesale",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Healthcare & Life Sciences",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Finance & Banking",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=70",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="section bg-white/70 backdrop-blur-sm">
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
              Industry Solutions
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sora text-[34px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            Solutions Across{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Industries
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-[720px] font-sora text-[16px] leading-[24px] text-[#6366A8]"
          >
            Empowering diverse industries with tailored systems designed to match
            their unique workflows, operations, and business challenges.
          </motion.p>
        </motion.div>

        <div className="mt-14 hidden lg:block">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {industries.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <IndustryCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 lg:hidden">
          <Carousel
            options={{ align: "start" }}
            slideClassName="basis-[80%] sm:basis-[55%]"
            showDots
            showArrows={false}
          >
            {industries.map((item) => (
              <IndustryCard key={item.title} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ title, image }: { title: string; image: string }) {
  return (
    <Link
      href="/platform/use-cases"
      className="group relative block h-[260px] overflow-hidden rounded-[20px] shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-hover"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 80vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
        <span className="text-[16px] font-bold">{title}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
