"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { caseStudies, caseStudyImageSrc } from "@/lib/case-study-data";

const G = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </span>
);

function CaseStudyCard({
  title,
  imageFile,
  problem,
  solutions,
  index,
}: {
  title: string;
  imageFile: string;
  problem: string;
  solutions: string[];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-purple-100/70 bg-white/95 shadow-card backdrop-blur-sm"
    >
      <div className="border-b border-purple-100/60 px-6 pb-4 pt-6 md:px-7 md:pt-7">
        <h2 className="font-sora text-[20px] font-bold leading-snug text-[#2C0E3A] md:text-[22px]">
          {title}
        </h2>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-purple-50/40 p-4">
        <Image
          src={caseStudyImageSrc(imageFile)}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={index < 2 ? "eager" : "lazy"}
          priority={index < 2}
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-6 px-6 py-6 md:px-7 md:py-7">
        <div>
          <h3 className="font-sora text-[15px] font-bold text-[#2C0E3A] md:text-[16px]">
            Problem
          </h3>
          <p className="mt-2 font-sora text-[14px] leading-[24px] text-[#6366A8] md:text-[15px] md:leading-[26px]">
            {problem}
          </p>
        </div>

        <div>
          <h3 className="font-sora text-[15px] font-bold text-[#2C0E3A] md:text-[16px]">
            Solutions
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {solutions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-sora text-[14px] leading-[24px] text-[#6366A8] md:text-[15px]"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesContent() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-8 md:pb-10 md:pt-12 lg:pt-14">
        <div className="container-app">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex flex-wrap items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">
              Home
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/resources/blogs" className="hover:text-[#2C0E3A]">
              Resources
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Case Studies</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Real Businesses <G>Real Results</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-[760px] font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px] md:leading-[28px]"
            >
              See how organizations transform operations with Formezy — from
              inventory and invoicing to multi-site stock control. Each story
              highlights a real challenge and the structured systems that solved
              it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0rem" }}>
        <div className="container-app">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                imageFile={study.imageFile}
                problem={study.problem}
                solutions={study.solutions}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
