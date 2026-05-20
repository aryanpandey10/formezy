"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { navLinks, type NavItem } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 12);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-black/5 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(15,15,26,0.04)]"
            : "bg-transparent",
        )}
      >
        <div className="container_home flex h-[60px] items-center justify-between lg:h-[72px]">
          <Logo />

          <nav className="hidden items-center gap-1 lg:gap-4 lg:flex">
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.label}
                link={link}
                open={openDropdown === link.label}
                onOpen={() => setOpenDropdown(link.label)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="#demo" size="sm" className="hidden rounded-sm md:inline-flex">
              Book a Demo
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white/80 text-ink lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <div className="h-[60px] lg:h-[72px]" aria-hidden />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <MobileNavLink
                      key={link.label}
                      link={link}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  ))}
                </ul>
              </div>
              <div className="border-t border-surface-border p-6">
                <Button href="#demo" className="w-full rounded-pill">
                  Book a Demo
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLinkItem({
  link,
  open,
  onOpen,
  onClose,
}: {
  link: NavItem;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  if (!link.children) {
    return (
      <Link
        href={link.href}
        className="relative rounded-full px-3 py-2 text-[14px] font-medium text-ink-secondary transition-colors hover:text-ink"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Link
        href={link.href}
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[14px] lg:text-[16px] font-medium text-ink-secondary transition-colors hover:text-ink"
      >
        {link.label}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full mt-2 w-[320px] -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-surface-border bg-white p-2 shadow-card-hover">
              {link.children.map((child) => (
                <div key={child.label}>
                  <Link
                    href={child.href}
                    className="flex flex-col gap-1 rounded-xl px-4 py-3 transition-colors hover:bg-purple-50"
                  >
                    <span className="text-sm font-semibold text-ink">
                      {child.label}
                    </span>
                    {child.description ? (
                      <span className="text-xs text-ink-secondary">
                        {child.description}
                      </span>
                    ) : null}
                  </Link>
                  {child.children?.length ? (
                    <ul className="mb-1 ml-3 border-l border-purple-100 pl-3">
                      {child.children.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block rounded-lg px-3 py-2 text-[13px] font-medium text-ink-secondary transition-colors hover:bg-purple-50 hover:text-purple-primary"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavLink({
  link,
  onNavigate,
}: {
  link: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <li>
        <Link
          href={link.href}
          onClick={onNavigate}
          className="flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-semibold text-ink transition-colors hover:bg-purple-50"
        >
          {link.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="flex flex-col">
      <div className="flex w-full items-center justify-between">
        <Link
          href={link.href}
          onClick={onNavigate}
          className="flex-1 rounded-xl px-4 py-3 text-[16px] font-semibold text-ink transition-colors hover:bg-purple-50"
        >
          {link.label}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-xl text-ink transition-colors hover:bg-purple-50"
        >
          <ChevronDown
            size={16}
            className={cn("transition-transform duration-200", open && "rotate-180")}
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-2"
          >
            {link.children.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className="block rounded-xl px-4 py-2.5 text-[14px] font-semibold text-ink-secondary hover:bg-purple-50 hover:text-purple-primary"
                >
                  {child.label}
                </Link>
                {child.children?.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    onClick={onNavigate}
                    className="block rounded-xl py-2 pl-8 pr-4 text-[13px] text-ink-secondary hover:bg-purple-50 hover:text-purple-primary"
                  >
                    {sub.label}
                  </Link>
                ))}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
