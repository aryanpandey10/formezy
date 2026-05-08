"use client";

import { useState, useCallback, useMemo, useId } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { viewportOnce } from "@/lib/animations";
import { submitLead } from "@/lib/submit-lead";
import { validateLeadForm } from "@/lib/lead-form-validation";
import {
  contactOffices,
  footerMeta,
  type ContactOffice,
} from "@/lib/constants";
import { OptionalCalendlyLink } from "@/components/ui/OptionalCalendlyLink";

/* ─── gradient text ─────────────────────── */
const G = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </span>
);

const COMPANY_SIZES = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

/* ─── Contact Form ──────────────────────── */
type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  size: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function ContactForm() {
  const fieldId = useId();
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    size: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const set =
    (k: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setForm((p) => ({ ...p, [k]: e.target.value }));
      if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
    };

  const inputBase =
    "w-full rounded-[10px] border border-[#E5E4FF] bg-white px-4 py-3 font-sora text-[14px] text-[#2C0E3A] placeholder:text-[#6366A8]/50 focus:border-[#6C60E8] focus:outline-none focus:ring-2 focus:ring-[#6C60E8]/10 transition-colors";
  const inputError = "border-red-300 focus:border-red-400 focus:ring-red-100";

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!verified) return;
      const errs = validateLeadForm(form);
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setLoading(true);
      setServerError("");
      try {
        const result = await submitLead({
          source: "contact",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          company_size: form.size,
          message: form.message,
          subject: `Contact form: ${form.name} — ${form.company}`,
          from_name: "Formezy Contact",
        });
        if (result.ok) {
          setSubmitted(true);
        } else {
          setServerError(result.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [form, verified]
  );

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 rounded-[20px] border border-purple-100 bg-white/90 p-12 text-center shadow-card"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
          <CheckCircle2 size={36} strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="font-sora text-[22px] font-bold text-[#2C0E3A]">
            Message Sent!
          </h3>
          <p className="mt-2 font-sora text-[15px] leading-[26px] text-[#6366A8]">
            Thanks for reaching out. Our team will get back to you within
            1–2 business days.
          </p>
          <OptionalCalendlyLink className="mt-4 max-w-md" variant="compact" />
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              company: "",
              email: "",
              phone: "",
              size: "",
              message: "",
            });
            setVerified(false);
            setErrors({});
          }}
          className="inline-flex items-center gap-2 rounded-[10px] border border-purple-100 bg-white px-5 py-2.5 font-sora text-[13px] font-semibold text-[#6C60E8] shadow-card transition-colors hover:border-purple-300"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`${fieldId}-name`}
            className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
          >
            Full Name<span className="text-red-400" aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={`${fieldId}-name`}
            type="text"
            placeholder="Enter your Full Name"
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
            Company<span className="text-red-400" aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={`${fieldId}-company`}
            type="text"
            placeholder="Enter Company Name"
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`${fieldId}-email`}
            className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
          >
            Email<span className="text-red-400" aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={`${fieldId}-email`}
            type="email"
            placeholder="Enter your Email Id"
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
            Phone<span className="text-red-400" aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={`${fieldId}-phone`}
            type="tel"
            placeholder="Enter your Number"
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

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${fieldId}-size`}
          className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
        >
          Company Size<span className="text-red-400" aria-hidden>*</span>
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
            <option value="" disabled>
              Select Company Size
            </option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
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

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${fieldId}-message`}
          className="font-sora text-[13px] font-semibold text-[#2C0E3A]"
        >
          Message<span className="text-red-400" aria-hidden>*</span>
          <span className="sr-only"> (required)</span>
        </label>
        <textarea
          id={`${fieldId}-message`}
          rows={4}
          placeholder="Write Message (at least 10 characters)"
          value={form.message}
          onChange={set("message")}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          className={`${inputBase} resize-none ${errors.message ? inputError : ""}`}
        />
        {errors.message && (
          <span className="font-sora text-[12px] text-red-500">{errors.message}</span>
        )}
      </div>

      <div className="flex items-center gap-4 rounded-[10px] border border-[#E5E4FF] bg-white px-4 py-3 shadow-sm">
        <button
          type="button"
          onClick={() => setVerified((v) => !v)}
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
            verified
              ? "border-[#6C60E8] bg-[#6C60E8]"
              : "border-[#6366A8]/40 bg-white"
          }`}
          aria-label="I'm not a robot"
        >
          {verified && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              viewBox="0 0 12 10"
              fill="none"
              className="h-3 w-3"
            >
              <path
                d="M1 5l3.5 3.5L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </button>
        <span className="flex-1 font-sora text-[13px] text-[#2C0E3A]">
          I&apos;m not a robot
        </span>
        <div className="flex flex-col items-center gap-0.5">
          <ShieldCheck size={22} className="text-[#6C60E8]" />
          <span className="font-sora text-[9px] leading-none text-[#6366A8]/60">
            reCAPTCHA
          </span>
          <span className="font-sora text-[8px] leading-none text-[#6366A8]/40">
            Privacy · Terms
          </span>
        </div>
      </div>

      {serverError && (
        <p className="rounded-[10px] bg-red-50 px-4 py-3 font-sora text-[13px] text-red-600">
          {serverError}
        </p>
      )}

      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={!verified || loading}
        className={`inline-flex w-fit items-center gap-2 rounded-[10px] px-7 py-3.5 font-sora text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.3)] transition-all ${
          verified && !loading
            ? "bg-[#2C0E3A] hover:bg-[#3d1650]"
            : "cursor-not-allowed bg-[#2C0E3A]/40"
        }`}
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="white"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message <Send size={15} />
          </>
        )}
      </motion.button>
    </form>
  );
}

function OfficeCard({
  office,
  active,
  onSelect,
}: {
  office: ContactOffice;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full flex-col gap-3 rounded-[16px] border p-5 text-left transition-colors ${
        active
          ? "border-[#6C60E8] bg-purple-50/80 shadow-[0_4px_24px_rgba(108,96,232,0.15)]"
          : "border-purple-100 bg-white hover:border-purple-200"
      }`}
    >
      <p className="font-sora text-[14px] font-bold text-[#2C0E3A]">{office.title}</p>
      <div className="flex items-start gap-2">
        <MapPin size={14} className="mt-0.5 shrink-0 text-[#6C60E8]" />
        <p className="font-sora text-[12px] leading-[20px] text-[#6366A8]">
          {office.lines.join(" ")}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Phone size={14} className="shrink-0 text-[#6C60E8]" />
        <a
          href={`tel:${office.phoneTel}`}
          onClick={(e) => e.stopPropagation()}
          className="font-sora text-[12px] text-[#6366A8] hover:text-[#6C60E8]"
        >
          {office.phoneDisplay}
        </a>
      </div>
    </button>
  );
}

/* ─── Map + offices ───────────────────── */
function MapSection() {
  const [activeId, setActiveId] = useState(contactOffices[0]?.id ?? "in");

  const activeOffice = useMemo(
    () => contactOffices.find((o) => o.id === activeId) ?? contactOffices[0],
    [activeId]
  );

  const mapSrc = useMemo(() => {
    if (!activeOffice) return "";
    const q = encodeURIComponent(activeOffice.mapQuery);
    return `https://maps.google.com/maps?q=${q}&output=embed`;
  }, [activeOffice]);

  const sidebar = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col gap-5 rounded-[20px] border border-purple-100 bg-white p-7 shadow-[0_8px_40px_rgba(108,96,232,0.18)]"
    >
      <h2
        className="font-sora text-[26px] font-bold text-[#2C0E3A]"
        style={{ lineHeight: "1.15" }}
      >
        Get <G>in Touch</G>
      </h2>
      <p className="font-sora text-[13px] leading-[22px] text-[#6366A8]">
        Reach out for product queries, partnerships, or general inquiries. Choose a
        location below; the map updates to match.
      </p>

      <div className="flex flex-col gap-3">
        {contactOffices.map((office) => (
          <OfficeCard
            key={office.id}
            office={office}
            active={activeId === office.id}
            onSelect={() => setActiveId(office.id)}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-purple-100 pt-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-purple-50 text-[#6C60E8]">
          <Mail size={15} />
        </span>
        <a
          href={`mailto:${footerMeta.email}`}
          className="font-sora text-[13px] text-[#6366A8] underline-offset-2 hover:text-[#6C60E8] hover:underline"
        >
          {footerMeta.email}
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
      <div className="order-2 flex-1 lg:order-1">{sidebar}</div>

      <div className="order-1 min-h-[320px] flex-1 overflow-hidden rounded-[24px] border border-purple-100 shadow-card lg:order-2 lg:min-h-[520px]">
        {mapSrc && (
          <iframe
            title={`Map — ${activeOffice?.title ?? "office"}`}
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[320px] w-full lg:min-h-[520px]"
          />
        )}
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────── */
export default function ContactContent() {
  return (
    <>
      <section className="pb-8 pt-8 md:pt-12">
        <div className="container-app">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">
              Home
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Contact</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-sora text-[36px] font-bold leading-[1.1] text-[#2C0E3A] md:text-[56px] lg:text-[68px]"
          >
            Let&apos;s <G>Connect</G>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="mt-4 max-w-3xl"
          >
            <p className="font-sora text-[15px] font-semibold text-[#2C0E3A]">
              Have a question, need a solution, or want to explore Formezy?
              We&apos;re here to help.
            </p>
            <p className="mt-1.5 font-sora text-[14px] leading-[24px] text-[#6366A8]">
              Whether you&apos;re looking to streamline operations, explore use
              cases, or understand how Formezy fits your business, our team is
              ready to guide you. Fill out the form, and we&apos;ll get back to
              you with the right direction.
            </p>
            <OptionalCalendlyLink className="mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section className="pb-20 pt-6">
        <div className="container-app">
          <MapSection />
        </div>
      </section>
    </>
  );
}
