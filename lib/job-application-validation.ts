import { EMAIL_RE, PHONE_RE } from "@/lib/lead-form-validation";

const MAX_NAME = 120;
const MAX_LOCATION = 200;
const MAX_MESSAGE = 5000;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

/** Type/size only — use when user picks a file before other fields are filled. */
export function validateResumeFile(file: File): string | undefined {
  if (!ALLOWED_RESUME_TYPES.has(file.type))
    return "Resume must be a PDF or Word file (.pdf, .doc, .docx).";
  if (file.size > MAX_RESUME_BYTES) return "Resume must be 5 MB or smaller.";
  return undefined;
}

export type JobApplicationForm = {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  file: File | null;
};

export type JobApplicationErrors = Partial<
  Record<keyof JobApplicationForm, string>
>;

export function validateJobApplication(
  form: JobApplicationForm,
): JobApplicationErrors {
  const errs: JobApplicationErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const location = form.location.trim();
  const message = form.message.trim();

  if (!name || name.length < 2)
    errs.name = "Full name must be at least 2 characters.";
  else if (name.length > MAX_NAME)
    errs.name = `Full name must be at most ${MAX_NAME} characters.`;

  if (!EMAIL_RE.test(email))
    errs.email = "Please enter a valid email address.";

  if (!PHONE_RE.test(phone))
    errs.phone = "Please enter a valid phone number.";

  if (!location || location.length < 2)
    errs.location = "Please enter your current location.";
  else if (location.length > MAX_LOCATION)
    errs.location = `Location must be at most ${MAX_LOCATION} characters.`;

  if (!message || message.length < 10)
    errs.message = "Message must be at least 10 characters.";
  else if (message.length > MAX_MESSAGE)
    errs.message = `Message must be at most ${MAX_MESSAGE} characters.`;

  if (!form.file) errs.file = "Please upload your resume (PDF or Word, max 5 MB).";
  else {
    const fileErr = validateResumeFile(form.file);
    if (fileErr) errs.file = fileErr;
  }

  return errs;
}
