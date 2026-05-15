"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Boxes,
  Users2,
  FileStack,
  Building2,
  FileCheck2,
  Wrench,
  Truck,
  PackageSearch,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { useCasesIndustryWebp, useCasesPageWebp } from "@/lib/webp-assets";

type TailoredCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets: string[];
  bottomImage: string;
  cardClass: string;
};

type BusinessCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets: string[];
};

type IndustryCard = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  shellClass: string;
};

const tailored: TailoredCard[] = [
  {
    title: "Tailored ERP",
    description:
      "A custom system that centralizes your core business operations — finance, inventory, procurement, and reporting — in one governed layer.",
    icon: <Boxes size={20} />,
    bullets: [
      "Entity-aware finance and inventory",
      "Configurable approvals and audit trails",
      "Dashboards aligned to how you run the business",
    ],
    bottomImage: useCasesPageWebp.tailoredErp,
    cardClass:
      "border-[#E8DFF7] bg-gradient-to-br from-[#F5F0FF] via-white to-white",
  },
  {
    title: "Tailored CRM",
    description:
      "Build a CRM that actually works for your team — pipelines, renewals, and account history without forcing a generic template.",
    icon: <Users2 size={20} />,
    bullets: [
      "Stages and fields that match your sales motion",
      "Automations for follow-ups and handoffs",
      "Single timeline across accounts and opportunities",
    ],
    bottomImage: useCasesPageWebp.tailoredCrm,
    cardClass:
      "border-[#C7DCF5] bg-gradient-to-br from-[#E8F4FF] via-white to-white",
  },
  {
    title: "Document Management System",
    description:
      "Move beyond simple storage with a system that manages the entire lifecycle — capture, review, approve, and retrieve with clear ownership.",
    icon: <FileStack size={20} />,
    bullets: [
      "Versioning and access rules by role",
      "Structured review and approval paths",
      "Search across contracts, SOPs, and attachments",
    ],
    bottomImage: useCasesPageWebp.documentManagement,
    cardClass:
      "border-[#F5E6C8] bg-gradient-to-br from-[#FFF7E8] via-white to-white",
  },
  {
    title: "Tenant Management System",
    description:
      "Manage properties, residents, and maintenance in one unified platform — from lease intake to service resolution.",
    icon: <Building2 size={20} />,
    bullets: [
      "Leases, billing, and arrears in one place",
      "Maintenance tickets with SLA visibility",
      "Resident portals for requests and documents",
    ],
    bottomImage: useCasesPageWebp.tenantManagement,
    cardClass:
      "border-[#F5D0D8] bg-gradient-to-br from-[#FFF5F5] via-white to-white",
  },
];

const business: BusinessCard[] = [
  {
    title: "Claims Management System",
    description:
      "Speed up claims intake, triage, approvals, and settlement — with clear ownership and a full audit trail from first notice to resolution.",
    icon: <FileCheck2 size={20} />,
    bullets: [
      "Digital intake forms and structured case files",
      "Multi-level reviewer routing and escalations",
      "Policy-based rules and SLA visibility",
    ],
  },
  {
    title: "Field Service Management",
    description:
      "Coordinate your field teams with real-time updates — dispatch, parts, proof-of-work, and billing connected end to end.",
    icon: <Wrench size={20} />,
    bullets: [
      "Scheduling with skills and territory rules",
      "Mobile-first job execution and checklists",
      "Parts, SLAs, and customer comms in one thread",
    ],
  },
  {
    title: "Supply Chain Management",
    description:
      "Gain end-to-end visibility into your supply chain — vendors, purchase orders, shipments, and exceptions in one orchestrated flow.",
    icon: <Truck size={20} />,
    bullets: [
      "Vendor scorecards and onboarding workflows",
      "Milestone tracking across PO to delivery",
      "Exception alerts before delays hit customers",
    ],
  },
  {
    title: "Inventory Management",
    description:
      "Track and manage your inventory across multiple locations, channels, and warehouses with live stock and reorder logic.",
    icon: <PackageSearch size={20} />,
    bullets: [
      "Multi-location stock with transfers and adjustments",
      "Reorder rules tied to demand signals",
      "Cycle counts and reconciliation workflows",
    ],
  },
];

const industries: IndustryCard[] = [
  {
    title: "Discrete Manufacturing",
    description:
      "Production tracking, quality control, BOM and work-order management built for discrete manufacturing environments.",
    bullets: [
      "Shop-floor visibility and downtime tracking",
      "Quality gates tied to each operation",
      "Traceability from raw material to shipment",
    ],
    image: useCasesIndustryWebp.discreteManufacturing,
    shellClass:
      "border-[#F5E6B8] bg-gradient-to-b from-[#FFFBF0] via-[#FFFCF5] to-white",
  },
  {
    title: "Retail & Wholesale",
    description:
      "Unify stores, warehouses, and wholesale channels — pricing, promotions, and fulfilment on one operational spine.",
    bullets: [
      "Multi-location inventory and transfers",
      "Promotions and loyalty without spreadsheet chaos",
      "Faster fulfilment with fewer stock-outs",
    ],
    image: useCasesIndustryWebp.retailWholesale,
    shellClass:
      "border-[#C7DCF5] bg-gradient-to-b from-[#EEF6FF] via-[#F8FBFF] to-white",
  },
  {
    title: "Construction & EPC",
    description:
      "Coordinate projects, vendors, materials, and compliance across every site — from tendering to handover.",
    bullets: [
      "Project controls and site-level execution",
      "Vendor and subcontractor governance",
      "Safety and compliance checklists built-in",
    ],
    image: useCasesIndustryWebp.constructionEpc,
    shellClass:
      "border-[#DDD5F5] bg-gradient-to-b from-[#F5F0FF] via-[#FAF8FF] to-white",
  },
  {
    title: "Consumer Goods",
    description:
      "Coordinate demand, distribution, and partner networks with clarity — built for brands that move fast at scale.",
    bullets: [
      "Channel and distributor performance in one view",
      "Campaign-to-cash visibility",
      "Operational controls that flex with seasons",
    ],
    image: useCasesIndustryWebp.consumerGoods,
    shellClass:
      "border-[#F5E0C8] bg-gradient-to-b from-[#FFF8ED] via-[#FFFCF7] to-white",
  },
];

function SectionIntro({
  pill,
  subtitle,
}: {
  pill: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center md:mb-12">
      <span className="inline-flex items-center rounded-full border border-[#E8E4FF] bg-white px-5 py-2 font-sora text-[13px] font-semibold text-[#2C0E3A] shadow-sm">
        {pill}
      </span>
      <p className="font-sora text-[15px] leading-[24px] text-[#6366A8] md:text-[16px] md:leading-[26px]">
        {subtitle}
      </p>
    </div>
  );
}

function KnowMoreButton() {
  return (
    <Button href="#demo" variant="dark" size="sm" className="rounded-[10px]">
      Know More <ArrowRight size={14} />
    </Button>
  );
}

export function TailoredSystemsSection() {
  return (
    <section id="tailored-systems" className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionIntro
              pill="Tailored Systems"
              subtitle="Systems designed around your business."
            />
          </motion.div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tailored.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={cn(
                "flex h-full flex-col overflow-hidden rounded-[22px] border shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-hover",
                c.cardClass,
              )}
            >
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2C0E3A] text-white shadow-md">
                    {c.icon}
                  </span>
                  <h3 className="font-sora text-[17px] font-bold leading-snug text-[#2C0E3A]">
                    {c.title}
                  </h3>
                </div>
                <p className="font-sora text-[14px] leading-relaxed text-[#6366A8]">{c.description}</p>
                <ul className="flex flex-col gap-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 font-sora text-[13px] leading-relaxed text-[#6366A8]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <KnowMoreButton />
                </div>
              </div>
              <div className="relative mt-auto h-[150px] w-full border-t border-black/[0.05] bg-white/60">
                <Image
                  src={c.bottomImage}
                  alt={`${c.title} illustration`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-contain object-bottom p-3"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessSystemsSection() {
  return (
    <section id="business-systems" className="section bg-[#FAFAFE]">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionIntro
              pill="Business Systems"
              subtitle="Optimizing core business operations."
            />
          </motion.div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {business.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex h-full flex-col gap-5 rounded-[22px] border border-[#E8E4FF] bg-white p-7 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md md:p-8"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#6C60E8] text-white shadow-md">
                  {c.icon}
                </span>
                <h3 className="font-sora text-[19px] font-bold leading-snug text-[#2C0E3A] md:text-[20px]">
                  {c.title}
                </h3>
              </div>
              <p className="font-sora text-[15px] leading-[26px] text-[#6366A8]">{c.description}</p>
              <ul className="flex flex-col gap-2">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 font-sora text-[14px] leading-relaxed text-[#6366A8]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-1">
                <KnowMoreButton />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustrySolutionsSection() {
  return (
    <section id="industry-solutions" className="section bg-white/90 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionIntro
              pill="Industry Solutions"
              subtitle="Built for industry-specific operations."
            />
          </motion.div>
        </motion.div>

        <div className="relative py-2 md:py-4">
          <Carousel
            options={{ align: "start", loop: true }}
            slideClassName="basis-[88%] pl-4 first:pl-0 sm:basis-[72%] lg:basis-[48%] xl:basis-[44%]"
            showDots={false}
            arrowPlacement="overlay"
          >
            {industries.map((it) => (
              <article
                key={it.title}
                className={cn(
                  "flex h-full min-h-[440px] flex-col overflow-hidden rounded-[24px] border shadow-[0_10px_36px_rgba(60,40,100,0.08)]",
                  it.shellClass,
                )}
              >
                <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]"
                      aria-hidden
                    />
                    <h3 className="font-sora text-[21px] font-bold text-[#2C0E3A] md:text-[23px]">
                      {it.title}
                    </h3>
                  </div>
                  <p className="font-sora text-[14px] leading-relaxed text-[#6366A8] md:text-[15px]">
                    {it.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {it.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 font-sora text-[13px] leading-relaxed text-[#6366A8] md:text-[14px]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <KnowMoreButton />
                  </div>
                </div>
                <div className="relative h-[200px] w-full shrink-0 border-t border-black/[0.06] bg-white/70 md:h-[220px]">
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
