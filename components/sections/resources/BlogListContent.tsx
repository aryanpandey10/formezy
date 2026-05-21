"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Clock } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { BlogPost } from "@/lib/blog-data";

/* ─────────────────────────────────────────────
   Single Blog Card (Figma-matched design)
───────────────────────────────────────────── */
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/resources/blogs/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-purple-100/60 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-card-hover"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-purple-50">
          <Image
            src={post.image}
            alt={post.title + " " + post.titleHighlight}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Tag pill */}
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-pill border border-white/40 bg-white/85 px-3 py-1 font-sora text-[11px] font-semibold text-[#2C0E3A] backdrop-blur-sm">
            <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#6C60E8] font-bold text-[8px] text-white">
              F
            </span>
            {post.tag}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="line-clamp-2 font-sora text-[16px] font-bold leading-snug text-[#2C0E3A] md:text-[17px]">
            {post.title} {post.titleHighlight}
          </h3>

          <p className="line-clamp-3 font-sora text-[13px] leading-[22px] text-[#6366A8]">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#6366A8]/70" />
              <span className="font-sora text-[12px] text-[#6366A8]/80">
                {post.readTime}
              </span>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6C60E8] text-white shadow-[0_4px_12px_rgba(108,96,232,0.35)] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Root export
───────────────────────────────────────────── */
export default function BlogListContent({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-10 pt-8 md:pt-12 lg:pt-14">
        <div className="container-app">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">Home</Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/resources/blogs" className="hover:text-[#2C0E3A]">Resources</Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Blog</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col gap-5"
          >
            <motion.h1
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
            >
              Insights That Power <br/>
              <span
                style={{
                  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Smarter Business Decisions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className=" font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              Stay updated with ideas, trends, and practical knowledge across
              automation, workflows, and modern business operations. Explore
              articles that break down complex concepts into actionable insights
              for modern business leaders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="section" style={{ paddingTop: "0rem" }}>
        <div className="container-app">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Subscribe CTA ── */}
      <section className="section" style={{ paddingTop: "0rem" }}>
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50/40 px-8 py-14 text-center shadow-card md:px-16 md:py-20"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#6C60E8]/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
            />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="relative flex flex-col items-center gap-5"
            >
              <motion.h2
                variants={fadeUp}
                className="mx-auto max-w-2xl font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[42px]"
                style={{ lineHeight: "1.15" }}
              >
                Fresh thinking on{" "}
                <span
                  style={{
                    background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  modern operations
                </span>
                .
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-xl font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                New essays, frameworks and product updates — delivered straight
                to your inbox.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {/* Email input + button */}
                <div className="flex w-full max-w-md items-center overflow-hidden rounded-[12px] border border-purple-100 bg-white shadow-card">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-5 py-3.5 font-sora text-[14px] text-[#2C0E3A] placeholder-[#6366A8]/60 outline-none"
                  />
                  <button className="flex-shrink-0 rounded-[10px] bg-[#2C0E3A] px-6 py-3.5 font-sora text-[14px] font-semibold text-white transition-colors hover:bg-[#3d1650]">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
