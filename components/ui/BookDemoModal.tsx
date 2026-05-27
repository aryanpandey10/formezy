"use client";

import { useState, useEffect, useCallback, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronDown } from "lucide-react";
import { submitLead } from "@/lib/submit-lead";
import { validateLeadForm } from "@/lib/lead-form-validation";
import { OptionalCalendlyLink } from "@/components/ui/OptionalCalendlyLink";

/* ─── Dispatch helper — call this from any "Book Demo" button ─── */
export function openBookDemoModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("openBookDemo"));
  }
}

const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  size: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormData, string>>;

const inputBase =
  "w-full rounded-[10px] border border-[#E5E4FF] bg-white px-4 py-3 font-sora text-[14px] text-[#2C0E3A] placeholder:text-[#6366A8]/50 focus:border-[#6C60E8] focus:outline-none focus:ring-2 focus:ring-[#6C60E8]/10 transition-colors";
const inputError = "border-red-300 focus:border-red-400 focus:ring-red-100";

/* ─── The modal content ─── */
function ModalContent({ onClose }: { onClose: () => void }) {
  const fieldId = useId();
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    size: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const set =
    (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [k]: e.target.value }));
      if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
    };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const errs = validateLeadForm(form);
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setLoading(true);
      setServerError("");
      try {
        const name = form.name.trim();
        const email = form.email.trim();
        const company = form.company.trim();
        const phone = form.phone.trim();
        const message = form.message.trim();
        const result = await submitLead({
          source: "book-demo",
          name,
          email,
          phone,
          company,
          company_size: form.size,
          message,
          subject: `Book Demo Request from ${name} — ${company}`,
          // ASCII label avoids rare SMTP / EmailJS quirks with unicode punctuation in params.
          from_name: "Formezy - Book a Demo",
        });
        if (result.ok) {
          setStep("success");
        } else {
          setServerError(result.message);
          console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        }
      } finally {
        setLoading(false);
      }
    },
    [form]



  );

  return (
    <div className="relative flex h-full max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_32px_80px_rgba(44,14,58,0.28)]">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-purple-100 px-8 py-5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-[10px]"
            style={{ background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)" }}
          >
            <svg viewBox="0 0 20 20" fill="white" className="h-5 w-5">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4zm2 3a1 1 0 000 2h4a1 1 0 000-2H8zm0 4a1 1 0 000 2h4a1 1 0 000-2H8z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-sora text-[16px] font-bold text-[#2C0E3A]">Book a Demo</span>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-100 bg-white text-[#6366A8] transition-colors hover:border-purple-300 hover:text-[#2C0E3A]"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {step === "form" ? (
          <div className="px-8 py-7">
            <p className="mb-3 font-sora text-[14px] leading-[22px] text-[#6366A8]">
              Fill in your details and our team will reach out to schedule a personalised demo.
            </p>
            <OptionalCalendlyLink className="mb-6" variant="compact" />
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Name + Company */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor={`${fieldId}-name`}
                    className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
                  >
                    Full Name <span className="text-red-400" aria-hidden>*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    id={`${fieldId}-name`}
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={set("name")}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    autoComplete="name"
                    className={`${inputBase} ${errors.name ? inputError : ""}`}
                  />
                  {errors.name && (
                    <span className="font-sora text-[12px] text-red-500">{errors.name}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor={`${fieldId}-company`}
                    className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
                  >
                    Company <span className="text-red-400" aria-hidden>*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    id={`${fieldId}-company`}
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={set("company")}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.company)}
                    autoComplete="organization"
                    className={`${inputBase} ${errors.company ? inputError : ""}`}
                  />
                  {errors.company && (
                    <span className="font-sora text-[12px] text-red-500">{errors.company}</span>
                  )}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor={`${fieldId}-email`}
                    className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
                  >
                    Email <span className="text-red-400" aria-hidden>*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    id={`${fieldId}-email`}
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set("email")}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    autoComplete="email"
                    className={`${inputBase} ${errors.email ? inputError : ""}`}
                  />
                  {errors.email && (
                    <span className="font-sora text-[12px] text-red-500">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor={`${fieldId}-phone`}
                    className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
                  >
                    Phone <span className="text-red-400" aria-hidden>*</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <input
                    id={`${fieldId}-phone`}
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={set("phone")}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.phone)}
                    autoComplete="tel"
                    className={`${inputBase} ${errors.phone ? inputError : ""}`}
                  />
                  {errors.phone && (
                    <span className="font-sora text-[12px] text-red-500">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Company size */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`${fieldId}-size`}
                  className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
                >
                  Company Size <span className="text-red-400" aria-hidden>*</span>
                  <span className="sr-only"> (required)</span>
                </label>
                <div className="relative">
                  <select
                    id={`${fieldId}-size`}
                    value={form.size}
                    onChange={set("size")}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.size)}
                    className={`${inputBase} appearance-none pr-10 ${errors.size ? inputError : ""}`}
                  >
                    <option value="" disabled>Select company size</option>
                    {COMPANY_SIZES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6366A8]"
                  />
                </div>
                {errors.size && (
                  <span className="font-sora text-[12px] text-red-500">{errors.size}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={`${fieldId}-message`}
                  className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
                >
                  Message
                </label>
                <textarea
                  id={`${fieldId}-message`}
                  rows={3}
                  placeholder="Tell us about your use case or requirements..."
                  value={form.message}
                  onChange={set("message")}
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputBase} resize-none`}
                />
                {/* No message validation errors shown, message is optional */}
              </div>

              {serverError && (
                <p className="rounded-[10px] bg-red-50 px-4 py-3 font-sora text-[13px] text-red-600">
                  {serverError}
                </p>
              )}

              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#2C0E3A] px-7 py-3.5 font-sora text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.3)] transition-all hover:bg-[#3d1650] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Book My Demo"
                )}
              </motion.button>
            </form>
          </div>
        ) : (
          <div className="px-8 py-10">
            <div className="flex flex-col items-center gap-5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
                <CheckCircle2 size={36} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-sora text-[22px] font-bold text-[#2C0E3A]">
                  Request received
                </h3>
                <p className="mt-2 max-w-md font-sora text-[15px] leading-[26px] text-[#6366A8]">
                  Thank you for your interest in Formezy. Our team will review your
                  details and reach out shortly to schedule your demo.
                </p>
                <OptionalCalendlyLink className="mt-4 max-w-md text-left" variant="compact" />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 inline-flex items-center justify-center rounded-[10px] bg-[#2C0E3A] px-8 py-3 font-sora text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.3)] transition-colors hover:bg-[#3d1650]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── The modal wrapper that listens for the custom event ─── */
export default function BookDemoModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setOpen(true);
    window.addEventListener("openBookDemo", handler);
    return () => window.removeEventListener("openBookDemo", handler);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, close]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(15, 5, 25, 0.72)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl"
          >
            <ModalContent onClose={close} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
