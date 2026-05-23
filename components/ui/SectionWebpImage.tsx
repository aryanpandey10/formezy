"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  /** Intrinsic ratio for layout (width / height). Ignored if `fixedHeightPx` is set. */
  aspectWidth?: number;
  aspectHeight?: number;
  /** Fixed pixel height (e.g. company cards); width stays 100%. */
  fixedHeightPx?: number;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Responsive section image from `public/` (typically WebP).
 * Wrapper gets `position: relative` and aspect ratio; image uses `fill` + `object-contain` by default.
 */
export default function SectionWebpImage({
  src,
  alt,
  aspectWidth = 16,
  aspectHeight = 10,
  fixedHeightPx,
  className,
  imgClassName = "object-contain",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl  bg-gradient-to-br from-purple-50/30 to-blue-50/20",
        className,
      )}
      style={
        fixedHeightPx != null
          ? { height: fixedHeightPx, minHeight: Math.min(fixedHeightPx, 200) }
          : { aspectRatio: `${aspectWidth} / ${aspectHeight}` }
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("p-2 md:p-3", imgClassName)}
      />
    </div>
  );
}
