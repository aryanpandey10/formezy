import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  tag?: string;
};

export default function BlogCard({ title, excerpt, image, slug, tag }: Props) {
  return (
    <Link
      href={`/resources/blogs/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-surface-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-purple-50">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-pill border border-white/40 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
          <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-purple-cta text-[8px] font-bold text-white">
            F
          </span>
          {tag ?? "Formezy"}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 text-[17px] font-bold leading-snug text-ink md:text-[18px]">
          {title}
        </h3>
        <p className="line-clamp-3 text-[14px] leading-relaxed text-ink-secondary">
          {excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-[12px] font-semibold text-ink-muted">
            Read article
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-cta text-white shadow-cta transition-transform group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
