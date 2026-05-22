"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  /** Current page label (last segment). */
  currentLabel: string;
  className?: string;
  /** When true (default), shows Home → Platform → current. When false: Home → current. */
  showPlatform?: boolean;
};

/**
 * Site breadcrumb pill — matches `/platform/overview/` styling.
 * Platform pages: Home → Platform → [current]
 * Standalone pages (legal, etc.): Home → [current]
 */
export default function PlatformBreadcrumb({
  currentLabel,
  className,
  showPlatform = true,
}: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      aria-label="Breadcrumb"
      className={cn(
        "mb-8 inline-flex h-11 shrink-0 items-center gap-[5px] rounded-[50px] border border-[#E8E4FF] bg-white/90 px-5 py-[10px] font-sora text-[14px] font-medium text-[#6366A8] shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      <Link href="/" className="text-[#6366A8] transition-colors hover:text-purple-primary">
        Home
      </Link>
      {showPlatform ? (
        <>
          <span className="text-[#C4B5FD]" aria-hidden>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span className="text-[#2C0E3A]">Platform</span>
        </>
      ) : null}
      <span className="text-[#C4B5FD]" aria-hidden>
        <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
      <span className="text-[#2C0E3A]">{currentLabel}</span>
    </motion.nav>
  );
}
