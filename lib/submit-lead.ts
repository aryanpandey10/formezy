import { allLeadNotificationEmailsCsv } from "@/lib/lead-emails";

export type LeadPayload = {
  source: "book-demo" | "contact";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  company_size?: string;
  message: string;
  subject: string;
  from_name: string;
};

type SubmitResult = { ok: true } | { ok: false; message: string };

function emailjsEnv() {
  return {
    publicKey: "gXJ5Z2hAoOAqaL5LO",
    serviceId:"service_4sm2eq3",
    templateId:"template_xbafddr",
    /** Optional: use when Book Demo uses a different EmailJS template than Contact (same Content vars). */
    templateIdBookDemo:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BOOK_DEMO?.trim() ?? "",
  };
}

/** EmailJS expects plain strings for every template variable. */
function stringifyEmailjsParams(
  params: Record<string, string>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(params)) {
    out[k] = v == null ? "" : String(v);
  }
  return out;
}

function templateIdForLead(source: LeadPayload["source"]): string {
  const { templateId, templateIdBookDemo } = emailjsEnv();
  if (source === "book-demo" && templateIdBookDemo) return templateIdBookDemo;
  return templateId;
}

function emailjsTemplateParams(payload: LeadPayload) {
  const notification_emails = allLeadNotificationEmailsCsv();
  /** Matches EmailJS placeholders {{name}}, {{email}}, {{time}} (also sent as user_name / user_email). */
  const time = new Date().toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const full_details = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Submitted: ${time}`,
    `Source: ${payload.source}`,
  ].join("\n");
  const lines = [
    `Source: ${payload.source}`,
    payload.from_name ? `From label: ${payload.from_name}` : "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.company ? `Company: ${payload.company}` : "",
    payload.company_size ? `Company size: ${payload.company_size}` : "",
    "",
    payload.message,
  ].filter(Boolean);
  return stringifyEmailjsParams({
    subject: payload.subject,
    message: payload.message,
    message_text: lines.join("\n"),
    full_details,
    name: payload.name,
    email: payload.email,
    time,
    submitted_at: time,
    user_name: payload.name,
    user_email: payload.email,
    phone: payload.phone ?? "",
    company: payload.company ?? "",
    company_size: payload.company_size ?? "",
    source: payload.source,
    from_name: payload.from_name,
    reply_to: payload.email,
    notification_emails,
  });
}

/**
 * Lead forms use **EmailJS only** (runs in the browser). No `/api` or PHP backend.
 * Set `NEXT_PUBLIC_EMAILJS_*` at **build time** so they are embedded in the static export.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
  const { publicKey, serviceId, templateId, templateIdBookDemo } = emailjsEnv();
  const resolvedTemplateId = templateIdForLead(payload.source);
  const anyEmailjs = Boolean(
    publicKey || serviceId || templateId || templateIdBookDemo,
  );
  const allEmailjs = Boolean(
    publicKey && serviceId && (templateId || templateIdBookDemo) && resolvedTemplateId,
  );

  if (anyEmailjs && !allEmailjs) {
    return {
      ok: false,
      message:
        "EmailJS is incomplete. Set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_EMAILJS_SERVICE_ID, and NEXT_PUBLIC_EMAILJS_TEMPLATE_ID (or NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BOOK_DEMO for demo-only) before building.",
    };
  }

  if (!allEmailjs) {
    return {
      ok: false,
      message:
        "Email is not configured. Add EmailJS keys to .env.local and rebuild the site.",
    };
  }

  try {
    const emailjs = (await import("@emailjs/browser")).default;
    emailjs.init({ publicKey });
    await emailjs.send(
      serviceId,
      resolvedTemplateId,
      emailjsTemplateParams(payload),
      { publicKey },
    );
    return { ok: true };
  } catch (e: unknown) {
    const text =
      e && typeof e === "object" && "text" in e
        ? String((e as { text?: string }).text)
        : e instanceof Error
          ? e.message
          : "Email could not be sent.";
    return { ok: false, message: text || "Email could not be sent." };
  }
}
