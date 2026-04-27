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
};

export default function Carousel({
  children,
  options = { align: "start", loop: false, slidesToScroll: 1 },
  className,
  slideClassName,
  showArrows = true,
  showDots = false,
}: Props) {
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
                "min-w-0 shrink-0 grow-0 pl-4 first:pl-0",
                slideClassName,
              )}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-white text-ink transition-all hover:border-purple-primary hover:text-purple-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>
          <button
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
