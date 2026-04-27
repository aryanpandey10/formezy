import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Formezy",
  description:
    "Learn how Formezy uses cookies and similar technologies to enhance your experience on our platform.",
};

const SECTIONS = [
  {
    id: 1,
    title: "What Are Cookies?",
    body: [
      "Cookies are small text files stored on your device when you visit a website.",
      "They help websites function efficiently, remember user preferences, and provide insights into how users interact with the platform.",
    ],
  },
  {
    id: 2,
    title: "How We Use Cookies",
    body: [
      "Cookies are small text files stored on your device when you visit a website.",
      "They help websites function efficiently, remember user preferences, and provide insights into how users interact with the platform.",
    ],
  },
  {
    id: 3,
    title: "Types of Cookies We Use",
    body: [
      "We use different types of cookies to support various functions of our platform.",
    ],
    subsections: [
      {
        title: "Essential Cookies",
        body: "These cookies are necessary for the website to function properly. They enable core features such as navigation, access, and security.",
      },
      {
        title: "Performance Cookies",
        body: "These cookies help us understand how users interact with our website by collecting information such as page visits and usage patterns.",
      },
      {
        title: "Functional Cookies",
        body: "These cookies remember your preferences and settings to provide a more personalised experience.",
      },
      {
        title: "Analytics Cookies",
        body: "These cookies help us analyse traffic and improve platform performance by tracking user behaviour in an aggregated manner.",
      },
    ],
  },
  {
    id: 4,
    title: "Managing Cookies",
    body: [
      "You have control over how cookies are used on your device.",
      "Most browsers allow you to manage, block, or delete cookies through settings. However, disabling certain cookies may impact the functionality of the website.",
    ],
  },
  {
    id: 5,
    title: "Third-Party Cookies",
    body: [
      "Formezy may use third-party services that set their own cookies.",
      "These cookies are governed by the respective third-party privacy policies, and we recommend reviewing them for more information.",
    ],
  },
  {
    id: 6,
    title: "Updates to This Policy",
    body: [
      "We may update this Cookie Policy from time to time.",
      "Any changes will be reflected on this page with an updated effective date. Continued use of our website indicates your acceptance of the updated policy.",
    ],
  },
  {
    id: 7,
    title: "Contact Us",
    body: [
      "If you have any questions about this Cookie Policy or how we use cookies, you can contact us through our official communication channels.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="pb-24 pt-8 md:pt-12">
      <div className="container-app">
        {/* Breadcrumbs */}
        <nav
          className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#2C0E3A]">
            Home
          </Link>
          <ChevronRight size={13} className="opacity-50" />
          <span className="font-semibold text-[#2C0E3A]">Cookie Policy</span>
        </nav>

        {/* Heading */}
        <h1
          className="font-sora text-[28px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[42px] lg:text-[52px]"
          style={{ lineHeight: "1.1" }}
        >
          Understanding
          <br />
          <span
            style={{
              background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            How We Use Cookies
          </span>
        </h1>

        {/* Intro */}
        <p className="mt-5 max-w-3xl font-sora text-[14px] leading-[26px] text-[#6366A8]">
          This Cookie Policy explains how Formezy uses cookies and similar
          technologies to enhance your experience when you visit our website or
          use our platform. By continuing to use our website, you agree to the
          use of cookies as described in this policy.
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-purple-100" />

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
              {"subsections" in sec && sec.subsections && (
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
