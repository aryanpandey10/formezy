"use client";

import {
  trustedEnterpriseLogoSrc,
  trustedEnterpriseLogos,
} from "@/lib/constants";
import { cn } from "@/lib/cn";

function LogoStrip({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <>
      {trustedEnterpriseLogos.map(({ name, file }) => (
        <div
          key={`${file}-${ariaHidden ? "dup" : "orig"}`}
          className="flex h-11 w-[100px] shrink-0 items-center justify-center px-1 sm:h-12 sm:w-[130px] md:h-14 md:w-[170px] lg:w-[190px]"
          title={ariaHidden ? undefined : name}
          aria-hidden={ariaHidden || undefined}
        >
          <img
            src={trustedEnterpriseLogoSrc(file)}
            alt={ariaHidden ? "" : name}
            width={160}
            height={48}
            loading="eager"
            decoding="async"
            draggable={false}
            className="pointer-events-none h-8 w-auto max-h-full max-w-full select-none object-contain object-center sm:h-9 md:h-11"
          />
        </div>
      ))}
    </>
  );
}

export default function TrustedLogos({
  className,
  animate = true,
}: {
  className?: string;
  /** When false, logos are centered with no scroll animation (e.g. home page). */
  animate?: boolean;
}) {
  return (
    <div
      className={cn(
        "trusted-marquee relative overflow-hidden",
        !animate && "trusted-marquee--static",
        className
      )}
      aria-label="Trusted enterprise logos"
    >
      <div className="trusted-marquee__track flex w-max items-center gap-3 sm:gap-5 md:gap-8">
        <LogoStrip />
        {animate ? <LogoStrip ariaHidden /> : null}
      </div>
    </div>
  );
}
