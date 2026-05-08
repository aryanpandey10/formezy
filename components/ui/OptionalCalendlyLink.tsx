import { calendlyMeetingUrl } from "@/lib/constants";

type Props = {
  className?: string;
  /** Tighter line when stacked under headings */
  variant?: "default" | "compact";
};

/**
 * Optional Calendly link — does not affect form submission or validation.
 */
export function OptionalCalendlyLink({ className = "", variant = "default" }: Props) {
  return (
    <p
      className={`font-sora text-[#6366A8] ${variant === "compact" ? "text-[12px] leading-snug" : "text-[13px] leading-relaxed"} ${className}`}
    >
      <span className="text-[#6366A8]/90">
        Prefer to pick a time yourself?{" "}
      </span>
      <a
        href={calendlyMeetingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#6C60E8] underline-offset-2 hover:text-[#2C0E3A] hover:underline"
      >
        Schedule a 30-minute call
      </a>
      <span className="text-[#6366A8]/70"> (optional)</span>
    </p>
  );
}
