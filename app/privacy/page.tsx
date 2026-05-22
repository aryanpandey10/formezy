import type { Metadata } from "next";
import LegalPageHeader, { GradientText } from "@/components/legal/LegalPageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Formezy",
  description:
    "At Formezy, we are committed to protecting your privacy and ensuring that your personal and business information is handled in a safe and responsible manner.",
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
    title: "Information We Collect",
    body: [
      "We may collect information that you provide to us directly when you access Formezy services.",
      "This information includes but is not limited to your name, email address, phone number, company information, and any other information you provide through forms or in interactions. We may also collect usage data, system data, and information related to website interactions that permit us to understand your experience.",
    ],
  },
  {
    id: 2,
    title: "How We Use Your Information",
    body: [
      "The information we collect is used to deliver, improve, and personalise our services.",
      "We use your data as needed to organise, promote product demonstrations, manage accounts, improve automations and security, and communicate useful or relevant information. This helps us ensure a seamless and efficient experience.",
    ],
  },
  {
    id: 3,
    title: "Data Sharing and Disclosure",
    body: [
      "We do not sell or rent your personal information.",
      "Your data may be shared only when necessary to provide services, comply with legal obligations, or work with trusted partners who support our operations. All such sharing is done with appropriate safeguards in place.",
    ],
  },
  {
    id: 4,
    title: "Data Security",
    body: [
      "We take appropriate measures to protect your information.",
      "Formezy implements security practices such as access control, encryption, and monitoring to ensure that your data remains secure and protected against unauthorised access, loss, or misuse.",
    ],
  },
  {
    id: 5,
    title: "Data Retention",
    body: [
      "We retain your information only for as long as necessary.",
      "Data is kept as required by business needs, legal requirements, and service obligations. Once data is no longer required, it is securely deleted or anonymised.",
    ],
  },
  {
    id: 6,
    title: "Your Rights",
    body: [
      "You have the right to access and control your information.",
      "You may request access to your data, correction, or deletion, subject to applicable laws. You can also choose to opt in or out of certain communications at any time.",
    ],
  },
  {
    id: 7,
    title: "Cookies and Tracking Technologies",
    body: [
      "Formezy may use cookies and similar technologies to improve site experience.",
      "These help us understand usage patterns, enhance functionality, and provide a more personalised experience. You can manage cookie preferences through your browser settings.",
    ],
  },
  {
    id: 8,
    title: "Third-Party Services",
    body: [
      "Our platform may integrate with third-party tools and services.",
      "These services operate under their own privacy policies, and we recommend reviewing them when interacting with such platforms.",
    ],
  },
  {
    id: 9,
    title: "Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time.",
      "Any changes will be reflected on this page with an updated effective date. Continued use of our services indicates acceptance of the updated policy.",
    ],
  },
  {
    id: 10,
    title: "Contact Us",
    body: [
      "If you have any questions or concerns regarding this Privacy Policy, you can contact us through our official communication channels.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-24 pt-8 md:pt-10 lg:pt-12">
      <div className="container-app flex flex-col items-start text-left">
        <LegalPageHeader
          breadcrumbLabel="Privacy Policy"
          title={
            <>
              Your Privacy <GradientText>Matters to Us</GradientText>
            </>
          }
          description="At Formezy, we are committed to protecting your privacy and ensuring that your personal and business information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our platform and services."
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
