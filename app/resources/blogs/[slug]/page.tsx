import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, ChevronRight, Tag } from "lucide-react";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: `${post.title} ${post.titleHighlight} | Formezy Blog`,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const faqItems: AccordionItem[] = post.faqs.map((f, i) => ({
    id: String(i + 1),
    question: f.question,
    answer: f.answer,
  }));

  /* Suggest 3 other articles (exclude current) */
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-6 pt-8 md:pt-12">
        <div className="container-app">
          {/* Breadcrumbs */}
          <nav
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">Home</Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/resources/blogs" className="hover:text-[#2C0E3A]">Resources</Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/resources/blogs" className="hover:text-[#2C0E3A]">Blog</Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">{post.tag}</span>
          </nav>

          {/* Heading — left aligned */}
          <h1
            className="max-w-4xl font-sora text-[36px] font-bold text-[#2C0E3A] md:text-[48px] lg:text-[54px]"
            style={{ lineHeight: "1.1" }}
          >
            {post.title}{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {post.titleHighlight}
            </span>
          </h1>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            {/* Brand badge */}
            <div className="flex items-center gap-2 rounded-[10px] border border-purple-100 bg-white px-3 py-2 shadow-card">
              <div className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#6C60E8]">
                <span className="font-sora text-[11px] font-extrabold text-white">F</span>
              </div>
              <span className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
                Formezy
              </span>
            </div>

            {/* Tag */}
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-purple-100 bg-purple-50 px-3 py-1.5 font-sora text-[12px] font-semibold text-purple-primary">
              <Tag size={11} />
              {post.tag}
            </span>

            {/* Read time */}
            <span className="inline-flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]">
              <Clock size={13} />
              {post.readTime}
            </span>

            {/* Date */}
            <span className="font-sora text-[13px] text-[#6366A8]">
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="pb-8">
        <div className="container-app">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[24px] border border-purple-100 shadow-card-hover md:aspect-[16/7]">
            <Image
              src={post.image}
              alt={`${post.title} ${post.titleHighlight}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="section pt-0" style={{ paddingTop: "0rem" }}>
        <div className="container-app">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_300px]">

            {/* Main article column */}
            <article>
              {/* Intro */}
              <p className="font-sora text-[17px] leading-[1.85] text-[#6366A8]">
                {post.intro}
              </p>

              {/* Sections */}
              <div className="mt-10 flex flex-col gap-10">
                {post.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="mb-3 font-sora text-[21px] font-bold text-[#2C0E3A] md:text-[23px]">
                      {s.heading}
                    </h2>
                    {s.body.map((para, idx) => (
                      <p
                        key={idx}
                        className="my-3 font-sora text-[15px] leading-[1.85] text-[#6366A8]"
                      >
                        {para}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="my-4 flex flex-col gap-2.5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 font-sora text-[14px] leading-[22px] text-[#6366A8]"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white">
                              <Check size={11} strokeWidth={2.5} />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQ block */}
              <div className="mt-14 overflow-hidden rounded-[24px] border border-purple-100 bg-white/90 p-6 shadow-card backdrop-blur-sm md:p-10">
                <h2 className="mb-6 font-sora text-[24px] font-bold text-[#2C0E3A]">
                  Frequently{" "}
                  <span
                    style={{
                      background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Asked Questions
                  </span>
                </h2>
                <Accordion items={faqItems} defaultOpen="1" />
              </div>

              {/* Back link */}
              <div className="mt-10 flex items-center justify-between border-t border-purple-100/60 pt-8">
                <Link
                  href="/resources/blogs"
                  className="inline-flex items-center gap-2 font-sora text-[14px] font-semibold text-[#6C60E8] transition-colors hover:text-[#2C0E3A]"
                >
                  <ArrowLeft size={16} />
                  Back to all articles
                </Link>
                <span className="font-sora text-[12px] uppercase tracking-widest text-[#6366A8]/70">
                  #{post.tag}
                </span>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:flex lg:flex-col lg:gap-6">
              {/* About Formezy card */}
              <div className="rounded-[20px] border border-purple-100 bg-white/90 p-6 shadow-card backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#6C60E8]">
                    <span className="font-sora text-[12px] font-extrabold text-white">F</span>
                  </div>
                  <span className="font-sora text-[15px] font-bold text-[#2C0E3A]">Formezy</span>
                </div>
                <p className="font-sora text-[13px] leading-[22px] text-[#6366A8]">
                  Formezy is the Enterprise Application Platform that helps
                  businesses build, automate and scale intelligent operations
                  — without complexity.
                </p>
                <Link
                  href="/platform/overview"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-[10px] bg-[#2C0E3A] px-4 py-2.5 font-sora text-[13px] font-semibold text-white transition-colors hover:bg-[#3d1650]"
                >
                  Learn about Formezy
                </Link>
              </div>

              {/* Related articles */}
              <div className="rounded-[20px] border border-purple-100 bg-white/90 p-6 shadow-card backdrop-blur-sm">
                <h3 className="mb-4 font-sora text-[14px] font-bold uppercase tracking-widest text-[#2C0E3A]">
                  Related Articles
                </h3>
                <div className="flex flex-col gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/resources/blogs/${r.slug}`}
                      className="group flex flex-col gap-2"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]">
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          sizes="300px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="font-sora text-[13px] font-semibold leading-snug text-[#2C0E3A] group-hover:text-[#6C60E8]">
                        {r.title} {r.titleHighlight}
                      </p>
                      <span className="font-sora text-[11px] text-[#6366A8]">
                        {r.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-[20px] border border-purple-100 bg-gradient-to-br from-purple-50 to-blue-50/40 p-6">
                <h3 className="mb-2 font-sora text-[16px] font-bold text-[#2C0E3A]">
                  See Formezy in action
                </h3>
                <p className="mb-4 font-sora text-[13px] leading-[22px] text-[#6366A8]">
                  Book a 20-minute walkthrough tailored to your team&apos;s
                  operations.
                </p>
                <Link
                  href="#demo"
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-[#6C60E8] px-4 py-2.5 font-sora text-[13px] font-semibold text-white transition-colors hover:bg-[#5b4fe8]"
                >
                  Book a Demo
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container-app">
          <div className="relative overflow-hidden rounded-[28px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50/40 px-8 py-14 text-center shadow-card md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#6C60E8]/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
            />

            <h2
              className="relative mx-auto max-w-2xl font-sora text-[34px] font-bold text-[#2C0E3A] md:text-[42px]"
              style={{ lineHeight: "1.15" }}
            >
              Want to see Formezy{" "}
              <span
                style={{
                  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                in your workflow?
              </span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl font-sora text-[16px] leading-[28px] text-[#6366A8]">
              Book a 20-minute walkthrough tailored to your team&apos;s
              operations.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#demo"
                className="inline-flex items-center rounded-[10px] bg-[#2C0E3A] px-7 py-3.5 font-sora text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.35)] transition-colors hover:bg-[#3d1650]"
              >
                Book a Demo
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center rounded-[10px] border border-purple-200 bg-white px-7 py-3.5 font-sora text-[15px] font-semibold text-[#2C0E3A] shadow-card transition-colors hover:border-purple-400"
              >
                Explore Integrations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
