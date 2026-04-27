"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

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

function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    size: "",
    message: "",
  });
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set =
    (k: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!verified) return;
      setSubmitted(true);
    },
    [verified]
  );

  const inputBase =
    "w-full rounded-[10px] border border-[#E5E4FF] bg-white px-4 py-3 font-sora text-[14px] text-[#2C0E3A] placeholder:text-[#6366A8]/50 focus:border-[#6C60E8] focus:outline-none focus:ring-2 focus:ring-[#6C60E8]/10 transition-colors";

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
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", company: "", email: "", phone: "", size: "", message: "" });
            setVerified(false);
          }}
          className="inline-flex items-center gap-2 rounded-[10px] border border-purple-100 bg-white px-5 py-2.5 font-sora text-[13px] font-semibold text-[#6C60E8] shadow-card transition-colors hover:border-purple-300"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Row 1: Name + Company */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
            Full Name<span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Enter your Full Name"
            value={form.name}
            onChange={set("name")}
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
            Company Name<span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Enter Company Name"
            value={form.company}
            onChange={set("company")}
            className={inputBase}
          />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
            Company Email ID<span className="text-red-400">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="Enter your Email Id"
            value={form.email}
            onChange={set("email")}
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
            Phone Number<span className="text-red-400">*</span>
          </label>
          <input
            required
            type="tel"
            placeholder="Enter your Number"
            value={form.phone}
            onChange={set("phone")}
            className={inputBase}
          />
        </div>
      </div>

      {/* Company size dropdown */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
          Company Size<span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select
            required
            value={form.size}
            onChange={set("size")}
            className={`${inputBase} appearance-none pr-10`}
          >
            <option value="" disabled>Select Company Size</option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6366A8]"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
          Write Message<span className="text-red-400">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Write Message"
          value={form.message}
          onChange={set("message")}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* reCAPTCHA simulation */}
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
              <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          )}
        </button>
        <span className="flex-1 font-sora text-[13px] text-[#2C0E3A]">
          I&apos;m not a robot
        </span>
        {/* reCAPTCHA branding */}
        <div className="flex flex-col items-center gap-0.5">
          <ShieldCheck size={22} className="text-[#6C60E8]" />
          <span className="font-sora text-[9px] leading-none text-[#6366A8]/60">reCAPTCHA</span>
          <span className="font-sora text-[8px] leading-none text-[#6366A8]/40">Privacy · Terms</span>
        </div>
      </div>

      {/* Submit */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={!verified}
        className={`inline-flex w-fit items-center gap-2 rounded-[10px] px-7 py-3.5 font-sora text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(44,14,58,0.3)] transition-all ${
          verified
            ? "bg-[#2C0E3A] hover:bg-[#3d1650]"
            : "cursor-not-allowed bg-[#2C0E3A]/40"
        }`}
      >
        Send Message <Send size={15} />
      </motion.button>
    </form>
  );
}

/* ─── Map + Info card ───────────────────── */
function MapSection() {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col justify-center gap-5 rounded-[20px] border border-purple-100 bg-white p-7 shadow-[0_8px_40px_rgba(108,96,232,0.18)]"
    >
      <h2
        className="font-sora text-[26px] font-bold text-[#2C0E3A]"
        style={{ lineHeight: "1.15" }}
      >
        Get <G>in Touch</G>
      </h2>
      <p className="font-sora text-[13px] leading-[22px] text-[#6366A8]">
        Reach out to us for product queries, partnerships, or general
        inquiries. We ensure quick responses and the right assistance
        based on your needs.
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-purple-50 text-[#6C60E8]">
            <MapPin size={15} />
          </span>
          <p className="font-sora text-[13px] leading-[22px] text-[#6366A8]">
            B/204-205, B/204-206, Shivalik Corporate Park, Opp.
            Ash-ramnath Bungalows, Sarkhej Rd, Ahmedabad 380015, Gujarat
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-purple-50 text-[#6C60E8]">
            <Mail size={15} />
          </span>
          <a
            href="mailto:hello@safalinfosoft.com"
            className="font-sora text-[13px] text-[#6366A8] underline-offset-2 hover:text-[#6C60E8] hover:underline"
          >
            hello@safalinfosoft.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-purple-50 text-[#6C60E8]">
            <Phone size={15} />
          </span>
          <a
            href="tel:+919099999999"
            className="font-sora text-[13px] text-[#6366A8] hover:text-[#6C60E8]"
          >
            +91 90999 99999
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="overflow-hidden rounded-[24px] border border-purple-100 shadow-card">
      {/* Info card shown above map on mobile */}
      <div className="block md:hidden">{card}</div>

      {/* Map + floating card on desktop */}
      <div className="relative">
        <div className="h-[360px] w-full md:h-[520px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0438!2d72.5285!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85f5c5a5e5a5%3A0x5a5e5a5e5a5e5a5e!2sShivalik%20Corporate%20Park%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Safal Infosoft location"
            className="h-full w-full"
          />
        </div>
        {/* Overlaid card on md+ */}
        <div className="absolute bottom-6 right-6 top-6 hidden w-[300px] md:block lg:w-[320px]">
          {card}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────── */
export default function ContactContent() {
  return (
    <>
      {/* ── Hero + Form ── */}
      <section className="pb-8 pt-8 md:pt-12">
        <div className="container-app">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">Home</Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Contact</span>
          </motion.nav>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-sora text-[36px] font-bold leading-[1.1] text-[#2C0E3A] md:text-[56px] lg:text-[68px]"
          >
            Let&apos;s <G>Connect</G>
          </motion.h1>

          {/* Subtitles */}
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
          </motion.div>

          {/* Form */}
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

      {/* ── Map + Info card ── */}
      <section className="pb-20 pt-6">
        <div className="container-app">
          <MapSection />
        </div>
      </section>
    </>
  );
}
