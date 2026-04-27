"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type Props = {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: string;
};

export default function Accordion({ items, className, defaultOpen }: Props) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-card border bg-white transition-colors",
              isOpen ? "border-purple-300 shadow-card" : "border-surface-border",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[16px] font-semibold text-ink md:text-[18px]">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                  isOpen
                    ? "bg-purple-primary text-white"
                    : "bg-purple-50 text-purple-primary",
                )}
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-surface-border px-6 py-5 text-[15px] leading-[1.7] text-ink-secondary">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
