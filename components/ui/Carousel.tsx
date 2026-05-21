"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type EmblaOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>;

type Props = {
  children: React.ReactNode;
  options?: EmblaOptions;
  className?: string;
  slideClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  /** `overlay` = large side arrows centered vertically (e.g. industry carousel). */
  arrowPlacement?: "bottom" | "overlay";
  /** When `arrowPlacement` is overlay, when to show side arrows (default: md+). */
  overlayArrowsFrom?: "sm" | "md" | "always";
};

export default function Carousel({
  children,
  options = { align: "start", loop: false, slidesToScroll: 1 },
  className,
  slideClassName,
  showArrows = true,
  showDots = false,
  autoplay = false,
  autoplayInterval = 5000,
  arrowPlacement = "bottom",
  overlayArrowsFrom = "md",
}: Props) {
  const overlayArrowVisibility =
    overlayArrowsFrom === "always"
      ? "flex"
      : overlayArrowsFrom === "sm"
        ? "hidden sm:flex"
        : "hidden md:flex";

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api: UseEmblaCarouselType[1]) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!autoplay || !emblaApi) return;

    const interval = window.setInterval(() => {
      if (!emblaApi) return;
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (options.loop) {
        emblaApi.scrollNext();
      }
    }, autoplayInterval);

    return () => {
      window.clearInterval(interval);
    };
  }, [autoplay, autoplayInterval, emblaApi, options.loop]);

  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {childrenArray.map((child, i) => (
            <div
              key={i}
              className={cn(
                "min-w-0 shrink-0 grow-0 pl-6 mx-2",
                slideClassName,
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && arrowPlacement === "overlay" && (
        <>
          <button
            type="button"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous"
            className={cn(
              "absolute left-0 top-1/2 z-10 h-12 w-12 -translate-x-[4%] -translate-y-1/2 items-center justify-center rounded-full bg-[#2C0E3A]/70 text-white shadow-[0_8px_32px_rgba(44,14,58,0.15)] transition-all hover:bg-[#2C0E3A] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 sm:h-[72px] sm:w-[72px] sm:-translate-x-[8%] lg:h-[88px] lg:w-[88px] lg:-translate-x-[12%]",
              overlayArrowVisibility,
            )}
          >
            <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canNext}
            aria-label="Next"
            className={cn(
              "absolute right-0 top-1/2 z-10 h-12 w-12 translate-x-[4%] -translate-y-1/2 items-center justify-center rounded-full bg-[#2C0E3A]/70 text-white shadow-[0_8px_32px_rgba(44,14,58,0.15)] transition-all hover:bg-[#2C0E3A] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 sm:h-[72px] sm:w-[72px] sm:translate-x-[8%] lg:h-[88px] lg:w-[88px] lg:translate-x-[12%]",
              overlayArrowVisibility,
            )}
          >
            <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
          </button>
        </>
      )}

      {showArrows && arrowPlacement === "bottom" && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white text-ink transition-all hover:border-purple-primary hover:text-purple-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canNext}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-primary text-white transition-all hover:bg-purple-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === selectedIndex
                  ? "w-8 bg-purple-primary"
                  : "w-2 bg-purple-200 hover:bg-purple-300",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
