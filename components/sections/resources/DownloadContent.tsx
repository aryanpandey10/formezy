"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { mainBrochure } from "@/lib/download-data";
import {
  industryBrochures,
  industryBrochureImageSrc,
  industryBrochurePdfHref,
} from "@/lib/download-data";

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

function DownloadButton({
  href,
  downloadName,
  label = "Download",
  className = "",
}: {
  href: string;
  downloadName: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      download={downloadName}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#2C0E3A] px-5 py-3 font-sora text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.28)] transition-colors hover:bg-[#3d1650] ${className}`}
    >
      {label}
      <Download size={16} strokeWidth={2} />
    </a>
  );
}

function IndustryCard({
  name,
  imageFile,
  pdfFile,
  description,
  index,
}: {
  name: string;
  imageFile: string;
  pdfFile: string;
  description: string;
  index: number;
}) {
  const imageSrc = industryBrochureImageSrc(imageFile);
  const pdfHref = industryBrochurePdfHref(pdfFile);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.55,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-purple-100/70 bg-white/90 shadow-card backdrop-blur-sm"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-gradient-to-br from-purple-50/80 to-blue-50/40">
        <Image
          src={imageSrc}
          alt={`${name} industry brochure`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={index < 2 ? "eager" : "lazy"}
          priority={index < 2}
          className="object-contain p-4 transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <h3 className="font-sora text-[22px] font-bold leading-tight text-[#2C0E3A] md:text-[24px]">
          {name} <G>Industry</G>
        </h3>
        <p className="flex-1 font-sora text-[14px] leading-[24px] text-[#6366A8] md:text-[15px] md:leading-[26px]">
          {description}
        </p>
        <DownloadButton
          href={pdfHref}
          downloadName={pdfFile}
          className="w-fit"
        />
      </div>
    </motion.article>
  );
}

export default function DownloadContent() {
  return (
    <>
      {/* Hero */}
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
            <span className="font-semibold text-[#2C0E3A]">Brochures</span>
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
              Resources You <G>Can Put</G> to Work Instantly
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-[720px] font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px] md:leading-[28px]"
            >
              Download product brochures and industry-specific guides to
              understand how Formezy helps teams design, automate, and scale
              business systems — without complex development.
            </motion.p>
          </motion.div>

          {/* Featured brochure */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10"
          >
            <div className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-gradient-to-br from-purple-50/90 to-blue-50/50 shadow-card sm:min-h-[320px] lg:min-h-[380px]">
              <Image
                src={mainBrochure.image}
                alt="Formezy product brochure preview"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 md:p-8"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 rounded-[24px] border border-purple-100/80 bg-white/95 p-8 shadow-card backdrop-blur-sm md:p-10">
              <span className="inline-flex w-fit items-center rounded-pill border border-[#B8B1FD] bg-[#E8EBFF] px-3.5 py-1.5 font-sora text-[12px] font-semibold text-[#6C60E8]">
                {mainBrochure.tag}
              </span>
              <div>
                <h2 className="font-sora text-[28px] font-bold leading-tight text-[#2C0E3A] md:text-[36px]">
                  Formezy <G>Brochure</G>
                </h2>
                <p className="mt-4 font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  {mainBrochure.description}
                </p>
              </div>
              <DownloadButton
                href={mainBrochure.file}
                downloadName={mainBrochure.fileName}
                label="Download Brochure"
                className="w-full sm:w-fit"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="section pt-4 md:pt-6">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto mb-12 flex max-w-[800px] flex-col items-center gap-4 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[30px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[42px] lg:text-[48px]"
            >
              Industry <G>Specific Solutions</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]"
            >
              Explore brochures tailored to your industry — each highlights
              workflows, capabilities, and outcomes relevant to how your
              business operates.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            {industryBrochures.map((item, index) => (
              <IndustryCard
                key={item.id}
                name={item.name}
                imageFile={item.imageFile}
                pdfFile={item.pdfFile}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
