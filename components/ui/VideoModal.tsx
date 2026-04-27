"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
};

export default function VideoModal({ open, onClose, videoUrl, title }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [open, handleKey]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        /* ── Backdrop ── */
        <motion.div
          key="video-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(10, 6, 30, 0.82)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Blur layer */}
          <div className="absolute inset-0 backdrop-blur-[6px]" />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[24px] bg-[#1a1030] shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-3">
                {/* Traffic-light dots (decorative) */}
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <h3 className="flex-1 truncate text-center font-sora text-[14px] font-semibold text-white/80">
                {title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close video"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Video iframe */}
            <div className="aspect-video w-full bg-black">
              {open && (
                <iframe
                  src={videoUrl}
                  title={title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center justify-center py-3">
              <span className="font-sora text-[11px] text-white/30">
                Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-white/50">Esc</kbd>{" "}
                or click outside to close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
