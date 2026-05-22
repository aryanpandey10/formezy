import type { Metadata } from "next";
import LegalPageHeader, { GradientText } from "@/components/legal/LegalPageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions | Formezy",
  description:
    "Read the Terms & Conditions that govern your access to and use of the Formezy platform.",
};

type Section = {
  id: number;
  title: string;
  body: string[];
  subsections?: { title: string; body: string }[];
};

const SECTIONS: Section[] = [
  {
    id: 1,
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the Formezy platform, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.",
      "If you do not agree with any of these terms, you are prohibited from using or accessing this platform. These terms apply to all users, including visitors, registered users, and enterprise clients.",
    ],
  },
  {
    id: 2,
    title: "Use of the Platform",
    body: [
      "Formezy grants you a limited, non-exclusive, non-transferable licence to access and use the platform solely for your internal business operations.",
      "You agree not to use the platform for any unlawful purpose, or in any way that could damage, disable, overburden or impair the service or interfere with any other party's use.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account.",
    ],
  },
  {
    id: 3,
    title: "Account Registration",
    body: [
      "To access certain features of the platform, you may be required to register for an account. You agree to provide accurate, current and complete information during registration.",
      "You are responsible for safeguarding your password and for any activities or actions under your account.",
      "Formezy reserves the right to disable any account at any time, with or without notice, for conduct that we believe violates these Terms & Conditions.",
    ],
  },
  {
    id: 4,
    title: "Intellectual Property",
    body: [
      "All content, features and functionality of the Formezy platform — including but not limited to software, text, graphics, logos, icons, and data compilations — are owned by Safal Infosoft Pvt. Ltd. and are protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from the platform without our express written permission.",
    ],
  },
  {
    id: 5,
    title: "User Data and Content",
    body: [
      "You retain ownership of all data, content and information you input into or create on the Formezy platform.",
      "By using our platform, you grant Formezy the right to process your data solely as necessary to provide the services outlined in our Privacy Policy.",
      "You represent and warrant that you have all rights necessary to submit any content you provide through the platform, and that doing so does not violate any third-party rights.",
    ],
  },
  {
    id: 6,
    title: "Subscription and Payments",
    body: [
      "Certain features of the Formezy platform require a paid subscription. Subscription fees are billed in advance on a monthly or annual basis as selected at the time of purchase.",
      "All fees are non-refundable except as expressly stated in our refund policy or required by applicable law.",
      "Formezy reserves the right to modify pricing at any time. We will provide 30 days' notice of any price changes before they take effect.",
    ],
  },
  {
    id: 7,
    title: "Prohibited Activities",
    body: [
      "You agree not to engage in any of the following prohibited activities:",
    ],
    subsections: [
      {
        title: "Unauthorised Access",
        body: "Attempting to gain unauthorised access to any portion of the platform, other accounts, computer systems or networks connected to the platform.",
      },
      {
        title: "Data Scraping",
        body: "Using automated tools to extract, scrape, crawl, or index any portion of the platform without our express written consent.",
      },
      {
        title: "Harmful Content",
        body: "Uploading or transmitting any content that is unlawful, defamatory, offensive, fraudulent, or that violates any third-party intellectual property rights.",
      },
      {
        title: "Platform Interference",
        body: "Interfering with or disrupting the integrity or performance of the platform, or attempting to decompile, reverse engineer or disassemble any component of the platform.",
      },
    ],
  },
  {
    id: 8,
    title: "Service Availability and Modifications",
    body: [
      "We strive to maintain high availability of the Formezy platform but do not guarantee uninterrupted or error-free access at all times.",
      "We reserve the right to modify, suspend or discontinue any part of the service at any time with reasonable prior notice, where practicable.",
      "Formezy shall not be liable to you or any third party for any modification, suspension or discontinuation of the service.",
    ],
  },
  {
    id: 9,
    title: "Disclaimer of Warranties",
    body: [
      "The Formezy platform is provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied.",
      "We do not warrant that the platform will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    id: 10,
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Formezy and its affiliates, officers, employees and agents shall not be liable for any indirect, incidental, special, exemplary, punitive or consequential damages.",
      "Our total aggregate liability to you for any claims arising under or in connection with these Terms shall not exceed the total amount paid by you for the service in the twelve (12) months preceding the claim.",
    ],
  },
  {
    id: 11,
    title: "Indemnification",
    body: [
      "You agree to indemnify, defend and hold harmless Formezy, Safal Infosoft Pvt. Ltd., and their respective officers, directors, employees and agents from any claims, damages, losses, liabilities, costs and expenses arising from your use of the platform or violation of these Terms.",
    ],
  },
  {
    id: 12,
    title: "Termination",
    body: [
      "We reserve the right to terminate or suspend your account and access to the platform at our sole discretion, without prior notice, for any conduct that we believe violates these Terms & Conditions or is harmful to other users, the platform, or third parties.",
      "Upon termination, your right to use the platform will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.",
    ],
  },
  {
    id: 13,
    title: "Governing Law and Jurisdiction",
    body: [
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
      "Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.",
    ],
  },
  {
    id: 14,
    title: "Changes to These Terms",
    body: [
      "Formezy reserves the right to modify these Terms & Conditions at any time. We will notify you of significant changes by updating the date at the bottom of this page.",
      "Your continued use of the platform after changes are posted constitutes your acceptance of the revised terms. We encourage you to review these Terms periodically.",
    ],
  },
  {
    id: 15,
    title: "Contact Us",
    body: [
      "If you have any questions, concerns or requests regarding these Terms & Conditions, please contact our team at hello@safalinfosoft.com or visit our Contact page.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="pb-24 pt-8 md:pt-10 lg:pt-12">
      <div className="container-app flex flex-col items-start text-left">
        <LegalPageHeader
          breadcrumbLabel="Terms & Conditions"
          title={
            <>
              Terms &amp; <GradientText>Conditions</GradientText>
            </>
          }
          description="These Terms & Conditions govern your access to and use of the Formezy platform, operated by Safal Infosoft Pvt. Ltd. By using our platform, you agree to be bound by these terms. Please read them carefully before proceeding."
        />

        <div className="my-8 h-px w-full max-w-3xl bg-purple-100" />

        {/* Sections */}
        <article className="flex max-w-3xl flex-col gap-10">
          {SECTIONS.map((sec) => (
            <section key={sec.id}>
              <h2 className="mb-3 font-sora text-[18px] font-bold text-[#2C0E3A]">
                {sec.id}.&nbsp;{sec.title}
              </h2>

              {sec.body.map((para, i) => (
                <p
                  key={i}
                  className="mb-2 font-sora text-[14px] leading-[26px] text-[#6366A8]"
                >
                  {para}
                </p>
              ))}

              {/* Subsections */}
              {sec.subsections && (
                <div className="mt-4 flex flex-col gap-4">
                  {sec.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h3 className="mb-1 font-sora text-[14px] font-bold text-[#2C0E3A]">
                        {sub.title}
                      </h3>
                      <p className="font-sora text-[14px] leading-[26px] text-[#6366A8]">
                        {sub.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Last updated */}
          <p className="mt-4 font-sora text-[12px] text-[#6366A8]/60">
            Last updated: April 2026
          </p>
        </article>
      </div>
    </div>
  );
}
