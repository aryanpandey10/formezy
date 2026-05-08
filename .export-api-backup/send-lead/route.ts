import { NextResponse } from "next/server";
import { Resend } from "resend";
import { allLeadNotificationEmails } from "@/lib/lead-emails";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(s: unknown): string {
  const t = String(s ?? "");
  return t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailParts(body: {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  company_size?: string;
  message?: string;
  subject?: string;
  from_name?: string;
}) {
  const {
    source,
    name,
    email,
    phone,
    company,
    company_size,
    message,
    subject,
    from_name,
  } = body;

  const html = `
    <h2 style="font-family:system-ui,sans-serif;color:#2C0E3A;">New lead — ${escapeHtml(source)}</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;color:#6366A8;line-height:1.6;">
      ${from_name ? `<tr><td><strong>From</strong></td><td>${escapeHtml(from_name)}</td></tr>` : ""}
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      ${phone ? `<tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>` : ""}
      ${company ? `<tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>` : ""}
      ${company_size ? `<tr><td><strong>Company size</strong></td><td>${escapeHtml(company_size)}</td></tr>` : ""}
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:14px;color:#2C0E3A;"><strong>Message</strong></p>
    <p style="font-family:system-ui,sans-serif;font-size:14px;color:#6366A8;white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  const text = [
    `Source: ${source}`,
    from_name ? `From label: ${from_name}` : "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    company ? `Company: ${company}` : "",
    company_size ? `Company size: ${company_size}` : "",
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    html,
    text,
    subject: String(subject).trim(),
    replyTo: String(email).trim(),
  };
}

type Body = {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  company_size?: string;
  message?: string;
  subject?: string;
  from_name?: string;
};

/** Comma-separated env override, else default list from lib/lead-emails.ts */
function recipientEmails(): string[] {
  const raw = process.env.NOTIFICATION_EMAILS?.trim();
  if (raw) {
    return raw.split(",").map((s) => s.trim()).filter(Boolean);
  }
  return allLeadNotificationEmails();
}

/** First address in To:, rest BCC (same content for everyone). */
function toAndBcc(recipients: string[]): { to: string[]; bcc?: string[] } {
  const fallback = allLeadNotificationEmails();
  if (recipients.length === 0) {
    return { to: [fallback[0]] };
  }
  if (recipients.length === 1) {
    return { to: [recipients[0]] };
  }
  return { to: [recipients[0]], bcc: recipients.slice(1) };
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const { source, name, email, phone, company, company_size, message, subject, from_name } =
    body;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !subject?.trim()) {
    return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
  }

  const baseBody = buildEmailParts({
    source,
    name,
    email,
    phone,
    company,
    company_size,
    message,
    subject,
    from_name,
  });

  const recipients = recipientEmails();
  const { to, bcc } = toAndBcc(recipients);

  /*
   * --- Future: SMTP (Zoho / Gmail) — requires `nodemailer` in this file again ---
   * const smtpHost = process.env.SMTP_HOST?.trim();
   * if (smtpHost && smtpUser && smtpPass) { ... transporter.sendMail({ to, bcc, ... }); }
   */
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    const resend = new Resend(resendKey);
    const from =
      process.env.RESEND_FROM?.trim() ||
      "Formezy <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      ...(bcc && bcc.length > 0 ? { bcc } : {}),
      replyTo: baseBody.replyTo,
      subject: baseBody.subject,
      html: baseBody.html,
      text: baseBody.text,
    });

    if (error) {
      console.error("[send-lead] Resend:", error);
      return NextResponse.json(
        {
          success: false,
          message:
            typeof error === "object" && error && "message" in error
              ? String((error as { message?: string }).message)
              : "Email could not be sent via Resend.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    {
      success: false,
      message:
        "Email is not configured. Use EmailJS (NEXT_PUBLIC_EMAILJS_*) in the browser or add RESEND_API_KEY for /api/send-lead.",
    },
    { status: 503 }
  );
}
