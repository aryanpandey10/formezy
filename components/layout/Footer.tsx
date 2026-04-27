import Link from "next/link";
import { Instagram } from "lucide-react";
import Logo from "./Logo";
import { footerColumns, footerMeta } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#EEF0FF]">
      <div className="container-app py-14 md:py-16">
        {/* Top row: logo + description + store badges */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[#C7C4F5]/50 pb-10 md:flex-row md:items-start">
          <div className="flex max-w-sm flex-col gap-3">
            <Logo tone="light" />
            <p className="font-sora text-[13px] leading-[1.7] text-[#6366A8]">
              Formezy makes it easier for businesses to adapt quickly and work
              closely. Create, automate, and improve any task or process with a
              safe, user-friendly tool.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <StoreBadge store="google" />
            <StoreBadge store="apple" />
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="font-sora text-[12px] font-bold uppercase tracking-widest text-[#2C0E3A]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sora text-[13px] text-[#6366A8] transition-colors hover:text-[#2C0E3A]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-6 border-t border-[#C7C4F5]/50 pt-8 md:flex-row md:items-start md:justify-between">
          {/* Company info */}
          <div className="flex flex-col gap-1.5">
            <p className="font-sora text-[13px] font-bold text-[#2C0E3A]">
              {footerMeta.companyName}
            </p>
            <p className="max-w-sm font-sora text-[12px] leading-[1.6] text-[#6366A8]">
              {footerMeta.address}
            </p>
          </div>

          {/* Email + Social */}
          <div className="flex flex-col gap-3">
            <p className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
              Email:
            </p>
            <Link
              href={`mailto:${footerMeta.email}`}
              className="font-sora text-[13px] text-[#6366A8] transition-colors hover:text-[#2C0E3A]"
            >
              {footerMeta.email}
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#C7C4F5] bg-white/60 text-[#6366A8] transition-colors hover:border-purple-primary hover:text-purple-primary"
            >
              <Instagram size={16} />
            </Link>
          </div>

          {/* Legal + copyright */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy"
                className="font-sora text-[13px] text-[#6366A8] transition-colors hover:text-[#2C0E3A]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-sora text-[13px] text-[#6366A8] transition-colors hover:text-[#2C0E3A]"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/cookies"
                className="font-sora text-[13px] text-[#6366A8] transition-colors hover:text-[#2C0E3A]"
              >
                Cookies
              </Link>
            </div>
            <p className="font-sora text-[12px] text-[#6366A8]">
              {footerMeta.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <Link
      href="#"
      className="inline-flex items-center gap-2.5 rounded-xl border border-[#C7C4F5] bg-white/70 px-4 py-2.5 transition-colors hover:border-purple-primary hover:bg-white"
    >
      <span className="text-[#2C0E3A]">
        {store === "google" ? (
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path
              d="M1.8 1.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L1.8 1.3z"
              fill="#EA4335"
            />
            <path
              d="M14.2 14.7l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.8 2z"
              fill="#FBBC04"
            />
            <path
              d="M14.3 14.6l-3.2-3.2L1.8 20.7c.4.4 1 .4 1.7.1l10.8-6.2z"
              fill="#4285F4"
            />
            <path
              d="M14.3 8.2L3.5 2.1c-.7-.4-1.3-.3-1.7.1l9.3 9.2 3.2-3.2z"
              fill="#34A853"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="currentColor"
            className="text-[#2C0E3A]"
          >
            <path d="M15.3 11.4c0-2 1.6-3 1.7-3-1-1.3-2.4-1.5-2.9-1.5-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.3 1 8.3.7 1 1.6 2.1 2.7 2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.1 1.1-2.2 1.2-2.3-.1 0-2.3-.9-2.3-3.5zm-2-6.4c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1.1 1.6-.9 2.6 1 .1 2-.5 2.5-1.2z" />
          </svg>
        )}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-sora text-[9px] uppercase tracking-wider text-[#6366A8]">
          {store === "google" ? "Get it on" : "Download on the"}
        </span>
        <span className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
          {store === "google" ? "Google Play" : "App Store"}
        </span>
      </span>
    </Link>
  );
}
