"use client";

import Image from "next/image";
import {
  trustedEnterpriseLogoSrc,
  trustedEnterpriseLogos,
} from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function TrustedLogos({ className }: { className?: string }) {
  const row = [...trustedEnterpriseLogos, ...trustedEnterpriseLogos];

  return (
    <div
      className={cn(
        "relative flex gap-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="flex shrink-0 animate-[marquee_55s_linear_infinite] items-center gap-10 pr-10">
        {row.map(({ name, file }, index) => (
          <div
            key={`${file}-${index}`}
            className="flex h-12 max-w-[180px] shrink-0 items-center justify-center px-2 md:h-14 md:max-w-[200px]"
            title={name}
          >
            <Image
              src={trustedEnterpriseLogoSrc(file)}
              alt={name}
              width={200}
              height={56}
              className="h-10 w-auto max-h-10 max-w-[min(180px,44vw)] object-contain object-center md:h-12 md:max-h-12 md:max-w-[200px]"
              sizes="(max-width: 768px) 44vw, 200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
