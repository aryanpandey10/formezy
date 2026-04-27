"use client";

import { trustedLogos } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function TrustedLogos({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex gap-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-10 pr-10">
        {[...trustedLogos, ...trustedLogos].map((name, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 text-ink-muted"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-muted/15 text-[11px] font-extrabold text-ink-muted">
              {name.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-[17px] font-bold tracking-tight">{name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
