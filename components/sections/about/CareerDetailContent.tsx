"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MapPin,
  Briefcase,
  Clock,
  Building2,
  Upload,
  Send,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { Job } from "@/lib/job-data";
import {
  validateJobApplication,
  validateResumeFile,
  type JobApplicationErrors,
} from "@/lib/job-application-validation";

/* ─── gradient text ─── */
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

/* ─── dot bullet list ─── */
function DotList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
          <span className="font-sora text-[14px] leading-[24px] text-[#6366A8]">{b}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Application Form ─── */
type FormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  file: File | null;
};

function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    file: null,
  });
  const [errors, setErrors] = useState<JobApplicationErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [k]: e.target.value }));
      if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
    };

  const handleFile = useCallback((file: File | null) => {
    if (!file) {
      setForm((p) => ({ ...p, file: null }));
      setErrors((p) => ({ ...p, file: undefined }));
      return;
    }
    const fileErr = validateResumeFile(file);
    if (fileErr) {
      setErrors((p) => ({ ...p, file: fileErr }));
      return;
    }
    setForm((p) => ({ ...p, file }));
    setErrors((p) => ({ ...p, file: undefined }));
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0] ?? null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateJobApplication(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-[10px] border border-purple-100 bg-white px-4 py-3 font-sora text-[14px] text-[#2C0E3A] placeholder:text-[#6366A8]/50 focus:border-[#6C60E8] focus:outline-none focus:ring-2 focus:ring-[#6C60E8]/10 transition-colors";
  const inputError = "border-red-300 focus:border-red-400 focus:ring-red-100";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-5 rounded-[20px] border border-purple-100 bg-white/95 p-8 text-center shadow-card backdrop-blur-sm"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
          <CheckCircle2 size={36} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-sora text-[20px] font-bold text-[#2C0E3A]">
            Application Submitted!
          </h3>
          <p className="mt-2 font-sora text-[14px] leading-[24px] text-[#6366A8]">
            Thanks for applying for <strong>{jobTitle}</strong>. We&apos;ll be
            in touch within 3–5 business days.
          </p>
        </div>
        <Link
          href="/about/careers"
          className="inline-flex items-center gap-2 rounded-[10px] border border-purple-100 bg-white px-5 py-2.5 font-sora text-[13px] font-semibold text-[#6C60E8] shadow-card transition-colors hover:border-purple-300"
        >
          <ArrowLeft size={14} /> Back to Careers
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="sticky top-24 overflow-hidden rounded-[20px] border border-purple-100 bg-white/95 shadow-[0_8px_32px_rgba(108,96,232,0.12)] backdrop-blur-sm">
      {/* Form header */}
      <div className="border-b border-purple-100 bg-gradient-to-r from-[#6C60E8] to-[#708FF4] px-6 py-5">
        <h2 className="font-sora text-[20px] font-bold text-white">Apply Now</h2>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 p-6">
        {/* Row 1 */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-sora text-[12px] font-semibold text-[#2C0E3A]">
              Full Name<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              value={form.name}
              onChange={set("name")}
              className={`${inputCls} ${errors.name ? inputError : ""}`}
            />
            {errors.name && (
              <span className="font-sora text-[12px] text-red-500">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sora text-[12px] font-semibold text-[#2C0E3A]">
              Email ID<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email Id"
              value={form.email}
              onChange={set("email")}
              className={`${inputCls} ${errors.email ? inputError : ""}`}
            />
            {errors.email && (
              <span className="font-sora text-[12px] text-red-500">{errors.email}</span>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-sora text-[12px] font-semibold text-[#2C0E3A]">
              Phone Number<span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your Number"
              value={form.phone}
              onChange={set("phone")}
              className={`${inputCls} ${errors.phone ? inputError : ""}`}
            />
            {errors.phone && (
              <span className="font-sora text-[12px] text-red-500">{errors.phone}</span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sora text-[12px] font-semibold text-[#2C0E3A]">
              Current Location<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmedabad"
              value={form.location}
              onChange={set("location")}
              className={`${inputCls} ${errors.location ? inputError : ""}`}
            />
            {errors.location && (
              <span className="font-sora text-[12px] text-red-500">{errors.location}</span>
            )}
          </div>
        </div>

        {/* Resume upload */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sora text-[12px] font-semibold text-[#2C0E3A]">
            Upload Resume<span className="text-red-400">*</span>
          </label>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[12px] border-2 border-dashed px-4 py-6 text-center transition-colors ${
              errors.file
                ? "border-red-300 bg-red-50/40"
                : dragging
                  ? "border-[#6C60E8] bg-purple-50"
                  : "border-purple-100 bg-purple-50/30 hover:border-purple-300 hover:bg-purple-50"
            }`}
          >
            <Upload size={22} className="text-[#6C60E8]" />
            {form.file ? (
              <span className="font-sora text-[13px] font-semibold text-[#2C0E3A]">
                {form.file.name}
              </span>
            ) : (
              <>
                <span className="font-sora text-[13px] font-medium text-[#6366A8]">
                  Attach Your Resume in PDF, Word Format
                </span>
                <span className="font-sora text-[11px] text-[#6366A8]/60">
                  Max Size: 5 Mb
                </span>
              </>
            )}
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />
          </div>
          {errors.file && (
            <span className="font-sora text-[12px] text-red-500">{errors.file}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sora text-[12px] font-semibold text-[#2C0E3A]">
            Write Message<span className="text-red-400">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Write Message"
            value={form.message}
            onChange={set("message")}
            className={`${inputCls} resize-none ${errors.message ? inputError : ""}`}
          />
          {errors.message && (
            <span className="font-sora text-[12px] text-red-500">{errors.message}</span>
          )}
        </div>

        {/* Submit */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#6C60E8] py-3.5 font-sora text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(108,96,232,0.3)] transition-colors hover:bg-[#2C0E3A]"
        >
          Submit <Send size={15} />
        </motion.button>
      </form>
    </div>
  );
}

/* ─── Main page ─────────────────────────── */
export default function CareerDetailContent({ job }: { job: Job }) {
  return (
    <>
      <section className="overflow-hidden pb-0 pt-8 md:pt-12">
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
            <Link href="/about/company" className="hover:text-[#2C0E3A]">About</Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/about/careers" className="hover:text-[#2C0E3A]">Careers</Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">
              {job.title} {job.titleHighlight}
            </span>
          </motion.nav>

          {/* Job title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-sora text-[32px] font-bold text-[#2C0E3A] md:text-[48px] lg:text-[60px]"
            style={{ lineHeight: "1.05" }}
          >
            {job.title} <G>{job.titleHighlight}</G>
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-purple-100 pb-6 font-sora text-[13px] text-[#6366A8]"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#6C60E8]" />
              <strong className="text-[#2C0E3A]">Location:</strong>&nbsp;{job.location}
            </span>
            <span className="hidden text-purple-100 md:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#6C60E8]" />
              <strong className="text-[#2C0E3A]">Experience Required:</strong>&nbsp;{job.experience}
            </span>
            <span className="hidden text-purple-100 md:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={13} className="text-[#6C60E8]" />
              <strong className="text-[#2C0E3A]">Job Type:</strong>&nbsp;{job.type}
            </span>
            <span className="hidden text-purple-100 md:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Building2 size={13} className="text-[#6C60E8]" />
              <strong className="text-[#2C0E3A]">Department:</strong>&nbsp;{job.department}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Two-column body ── */}
      <section className="section pt-8">
        <div className="container-app">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px]">

            {/* Left – job spec */}
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-8"
            >
              {/* Intro paragraphs */}
              <motion.div variants={fadeUp} className="flex flex-col gap-4">
                {job.description.map((para, i) => (
                  <p key={i} className="font-sora text-[15px] leading-[28px] text-[#6366A8]">
                    {para}
                  </p>
                ))}
              </motion.div>

              {/* Spec sections */}
              {job.sections.map((sec) => (
                <motion.div key={sec.title} variants={fadeUp} className="flex flex-col gap-4">
                  <h2 className="font-sora text-[20px] font-bold text-[#2C0E3A]">
                    {sec.title}
                  </h2>
                  <DotList items={sec.bullets} />
                </motion.div>
              ))}

              {/* Back link */}
              <motion.div variants={fadeUp}>
                <Link
                  href="/about/careers"
                  className="inline-flex items-center gap-2 font-sora text-[13px] font-semibold text-[#6C60E8] transition-colors hover:text-[#2C0E3A]"
                >
                  <ArrowLeft size={14} /> Back to all openings
                </Link>
              </motion.div>
            </motion.article>

            {/* Right – sticky application form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <ApplyForm jobTitle={`${job.title} ${job.titleHighlight}`} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
