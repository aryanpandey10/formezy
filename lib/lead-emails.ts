/**
 * Default recipients for form leads (Book Demo + Contact).
 * Override with env `NOTIFICATION_EMAILS` (comma-separated) in `.env.local`.
 */
export const LEAD_NOTIFICATION_EMAILS = [
  "cmo@safalinfosoft.com",
  "dipak@safalinfosoft.com",
  "mayur@intelliworkz.tech",
  "arvind@intelliworkz.tech",
] as const;

/** Primary inbox — always included with `LEAD_NOTIFICATION_EMAILS` for EmailJS + future SMTP. */
export const PRIMARY_LEAD_INBOX = "hello@safalinfosoft.com";

/** Unique list: hello@ + default team addresses (for template fields / BCC-style lists). */
export function allLeadNotificationEmails(): string[] {
  const merged = [PRIMARY_LEAD_INBOX, ...LEAD_NOTIFICATION_EMAILS];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const e of merged) {
    const k = e.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(e);
  }
  return out;
}

export function allLeadNotificationEmailsCsv(): string {
  return allLeadNotificationEmails().join(", ");
}
