/** Shared rules for contact + book-demo lead forms. */

export type LeadFormShape = {
  name: string;
  company: string;
  email: string;
  phone: string;
  size: string;
  message: string;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormShape, string>>;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^\+?[\d\s\-().]{7,24}$/;

const MAX_NAME = 120;
const MAX_COMPANY = 200;
const MAX_MESSAGE = 5000;

export function validateLeadForm(form: LeadFormShape): LeadFormErrors {
  const errs: LeadFormErrors = {};
  const name = form.name.trim();
  const company = form.company.trim();

  if (!name) errs.name = "Full name is required.";
  else if (name.length < 2)
    errs.name = "Full name must be at least 2 characters.";
  else if (name.length > MAX_NAME)
    errs.name = `Full name must be at most ${MAX_NAME} characters.`;

  if (!company) errs.company = "Company name is required.";
  else if (company.length > MAX_COMPANY)
    errs.company = `Company name must be at most ${MAX_COMPANY} characters.`;

  const emailTrim = form.email.trim();
  if (!emailTrim) errs.email = "Email is required.";
  else if (!EMAIL_RE.test(emailTrim))
    errs.email = "Please enter a valid email address.";

  const phone = form.phone.trim();
  if (!phone) errs.phone = "Phone number is required.";
  else if (!PHONE_RE.test(phone))
    errs.phone = "Please enter a valid phone number.";


  if (!form.size) errs.size = "Company size is required.";
  // Message is now optional, no validation

  return errs;
}
