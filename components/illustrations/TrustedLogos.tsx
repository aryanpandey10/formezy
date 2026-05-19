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
          className="flex h-14 w-[min(200px,42vw)] shrink-0 items-center justify-center px-3 md:h-16 md:w-[220px]"
          title={ariaHidden ? undefined : name}
          aria-hidden={ariaHidden || undefined}
        >
          <img
            src={trustedEnterpriseLogoSrc(file)}
            alt={ariaHidden ? "" : name}
            width={200}
            height={56}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="pointer-events-none h-10 w-auto max-w-full select-none object-contain object-center md:h-14"
          />
        </div>
      ))}
    </>
  );
}

export default function TrustedLogos({ className }: { className?: string }) {
  return (
    <div
      className={cn("trusted-marquee relative overflow-hidden", className)}
      aria-label="Trusted enterprise logos"
    >
      <div className="trusted-marquee__track flex w-max items-center gap-8 md:gap-12">
        <LogoStrip />
        <LogoStrip ariaHidden />
      </div>
    </div>
  );
}
