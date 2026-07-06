"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { type NavDropdownItem } from "@/lib/constants";
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
        className="relative rounded-full px-3 py-2 text-[14px] lg:text-[16px] font-medium text-ink-secondary transition-colors hover:text-ink"
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
            className={cn(
              "absolute left-1/2 top-full mt-2 -translate-x-1/2",
              link.children.some((c) => c.children?.length)
                ? "w-[300px]"
                : "w-[320px]",
            )}
          >
            <div className="overflow-visible rounded-2xl border border-surface-border bg-white p-2 shadow-card-hover">
              {link.children.map((child) => (
                <DesktopDropdownItem key={child.label} child={child} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopDropdownItem({ child }: { child: NavDropdownItem }) {
  if (!child.children?.length) {
    return (
      <Link
        href={child.href}
        className="flex flex-col gap-1 rounded-xl px-4 py-3 transition-colors hover:bg-purple-50"
      >
        <span className="text-sm font-semibold text-ink">{child.label}</span>
        {child.description ? (
          <span className="text-xs text-ink-secondary">{child.description}</span>
        ) : null}
      </Link>
    );
  }

  return (
    <div className="group/nested relative">
      <Link
        href={child.href}
        className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 transition-colors hover:bg-purple-50"
      >
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-sm font-semibold text-ink">{child.label}</span>
          {child.description ? (
            <span className="text-xs text-ink-secondary">{child.description}</span>
          ) : null}
        </div>
        <ChevronRight
          size={16}
          className="shrink-0 text-ink-secondary transition-transform group-hover/nested:translate-x-0.5 group-hover/nested:text-purple-primary"
        />
      </Link>

      <div className="invisible absolute right-full top-0 z-20 mr-1 w-[300px] opacity-0 transition-all duration-150 group-hover/nested:visible group-hover/nested:opacity-100">
        <div className="max-h-[min(70vh,420px)] overflow-y-auto rounded-2xl border border-surface-border bg-white p-2 shadow-card-hover">
          <Link
            href={child.href}
            className="mb-1 block rounded-lg px-3 py-2 text-[12px] font-bold uppercase tracking-wide text-purple-primary transition-colors hover:bg-purple-50"
          >
            All {child.label}
          </Link>
          <ul className="grid grid-cols-1 gap-0.5">
            {child.children.map((sub) => (
              <li key={sub.label}>
                <Link
                  href={sub.href}
                  className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-ink-secondary transition-colors hover:bg-purple-50 hover:text-purple-primary"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
              <MobileDropdownItem
                key={child.label}
                child={child}
                onNavigate={onNavigate}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileDropdownItem({
  child,
  onNavigate,
}: {
  child: NavDropdownItem;
  onNavigate: () => void;
}) {
  const [nestedOpen, setNestedOpen] = useState(false);

  if (!child.children?.length) {
    return (
      <li>
        <Link
          href={child.href}
          onClick={onNavigate}
          className="block rounded-xl px-4 py-2.5 text-[14px] font-semibold text-ink-secondary hover:bg-purple-50 hover:text-purple-primary"
        >
          {child.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="flex flex-col">
      <div className="flex items-center">
        <Link
          href={child.href}
          onClick={onNavigate}
          className="flex-1 rounded-xl px-4 py-2.5 text-[14px] font-semibold text-ink-secondary hover:bg-purple-50 hover:text-purple-primary"
        >
          {child.label}
        </Link>
        <button
          type="button"
          onClick={() => setNestedOpen((v) => !v)}
          aria-expanded={nestedOpen}
          aria-label={`${nestedOpen ? "Collapse" : "Expand"} ${child.label} menu`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-ink-secondary hover:bg-purple-50"
        >
          <ChevronDown
            size={16}
            className={cn(
              "transition-transform duration-200",
              nestedOpen && "rotate-180",
            )}
          />
        </button>
      </div>
      <AnimatePresence>
        {nestedOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-l-2 border-purple-100 ml-4 mb-1"
          >
            {child.children.map((sub) => (
              <li key={sub.label}>
                <Link
                  href={sub.href}
                  onClick={onNavigate}
                  className="block rounded-xl py-2 pl-4 pr-4 text-[13px] text-ink-secondary hover:bg-purple-50 hover:text-purple-primary"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
