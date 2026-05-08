"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export default function ImageCompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const updateFromClientX = useCallback(
    (clientX: number, opts?: { ignoreDragFlag?: boolean }) => {
      if (!containerRef.current) return;
      if (!opts?.ignoreDragFlag && !isDragging.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setPosition(clamp(pct));
    },
    [],
  );

  useEffect(() => {
    const onMouseUp = () => {
      isDragging.current = false;
    };
    const onMouseMove = (e: MouseEvent) => updateFromClientX(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
    };

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchend", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full cursor-col-resize select-none overflow-hidden rounded-[20px] border border-purple-100 shadow-card md:h-[500px] lg:h-[580px]"
      onMouseDown={(e) => {
        isDragging.current = true;
        updateFromClientX(e.clientX, { ignoreDragFlag: true });
      }}
      onTouchStart={(e) => {
        isDragging.current = true;
        const t = e.touches[0];
        if (t) updateFromClientX(t.clientX, { ignoreDragFlag: true });
      }}
      aria-label="Image comparison slider"
    >
      {/* Before (left) — clipped so nothing shows right of the divider */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width:1280px) 100vw, 1232px"
          draggable={false}
        />
        <span className="pointer-events-none absolute left-4 top-4 z-[1] rounded-pill bg-white/90 px-3 py-1 text-[12px] font-semibold text-[#2C0E3A] shadow-card backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* After (right) — clipped so nothing shows left of the divider */}
      <div
        className="absolute inset-0 z-[1] overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width:1280px) 100vw, 1232px"
          draggable={false}
        />
        <span className="pointer-events-none absolute right-4 top-4 z-[1] rounded-pill bg-white/90 px-3 py-1 text-[12px] font-semibold text-[#2C0E3A] shadow-card backdrop-blur">
          {afterLabel}
        </span>
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 flex items-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]" />

        {/* Handle */}
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] ring-1 ring-purple-200">
          <ChevronLeft size={14} className="text-[#6C63FF]" />
          <ChevronRight size={14} className="text-[#6C63FF]" />
        </div>
      </div>
    </div>
  );
}
