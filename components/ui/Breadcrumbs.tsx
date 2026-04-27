import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
  tone?: "light" | "dark";
};

export default function Breadcrumbs({ items, className, tone = "light" }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center justify-center gap-1.5 text-[13px]",
        tone === "light" ? "text-ink-muted" : "text-white/70",
        className,
      )}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn(
                  "font-medium transition-colors",
                  tone === "light"
                    ? "hover:text-purple-primary"
                    : "hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "font-semibold",
                  tone === "light" ? "text-ink" : "text-white",
                )}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
            {!isLast && (
              <ChevronRight
                size={12}
                className={cn(
                  tone === "light" ? "text-ink-muted" : "text-white/50",
                )}
              />
            )}
          </span>
        );
      })}
    </nav>
  );
}
