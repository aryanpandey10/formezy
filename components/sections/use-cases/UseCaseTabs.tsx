"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
  ClipboardList,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import { cn } from "@/lib/cn";
import { useCasesIndustryWebp, useCasesPageWebp } from "@/lib/webp-assets";

type TailoredCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets: string[];
  image: string;
  cardClass: string;
  href: string;
};

type BusinessCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets: string[];
  href: string;
};

type IndustryCard = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  href: string;
};

const tailored: TailoredCard[] = [
  {
    title: "Tailored ERP",
    description: "A custom system that molds to your operations, finance, and procurement.",
    icon: <Boxes size={20} />,
    bullets: [
      "Entity-aware finance & inventory",
      "Configurable approvals & audit trails",
      "Real-time dashboards",
    ],
    image: useCasesPageWebp.tailoredErp,
    cardClass: "border-purple-100 bg-[#F5F0FF]/30",
    href: "/platform/use-cases/tailored-erp",
  },
  {
    title: "Tailored CRM",
    description: "Build a CRM that mirrors how you actually sell, track, and engage.",
    icon: <Users2 size={20} />,
    bullets: [
      "Custom pipeline stages",
      "Automated follow-ups & handoffs",
      "Single customer timeline",
    ],
    image: useCasesPageWebp.tailoredCrm,
    cardClass: "border-blue-100 bg-[#EBF5FF]/30",
    href: "/platform/use-cases/tailored-crm",
  },
  {
    title: "Document Management System",
    description: "Secure, central, and searchable repository for all business documents.",
    icon: <FileStack size={20} />,
    bullets: [
      "Versioning & access rules",
      "Structured review paths",
      "AI-powered search",
    ],
    image: useCasesPageWebp.documentManagement,
    cardClass: "border-amber-100 bg-[#FFF9EB]/30",
    href: "/platform/use-cases/document-management-system",
  },
  {
    title: "Tenant Management System",
    description: "Manage properties, residents, and maintenance in one platform.",
    icon: <Building2 size={20} />,
    bullets: [
      "Leases & billing automation",
      "Maintenance ticket tracking",
      "Resident self-service portal",
    ],
    image: useCasesPageWebp.tenantManagement,
    cardClass: "border-rose-100 bg-[#FFF5F5]/30",
    href: "/platform/use-cases/tenant-management-system",
  },
  {
    title: "Task Management System",
    description: "Streamline team tasks, workflows, and project execution.",
    icon: <ClipboardList size={20} />,
    bullets: [
      "Dynamic task assignment",
      "Real-time status tracking",
      "Automated notifications",
    ],
    image: useCasesPageWebp.hero, 
    cardClass: "border-emerald-100 bg-[#F0FFF4]/30",
    href: "/platform/use-cases/task-management-system",
  },
];

const business: BusinessCard[] = [
  {
    title: "Supply Chain Management",
    description: "End-to-end visibility across vendors, shipments and warehouses.",
    icon: <Truck size={20} />,
    bullets: [
      "Vendor scorecards",
      "Shipment milestones",
      "Exception alerts",
    ],
    href: "/platform/use-cases/supply-chain-management-system",
  },
  {
    title: "Inventory Management",
    description: "Track every SKU across every location in real time.",
    icon: <PackageSearch size={20} />,
    bullets: [
      "Barcode & RFID ready",
      "Multi-warehouse rules",
      "Reorder automations",
    ],
    href: "/platform/use-cases/inventory-management-system",
  },
];

const industries: IndustryCard[] = [
  {
    title: "Discrete Manufacturing",
    description:
      "Production tracking, quality control, BOM and work-order management built for discrete goods.",
    bullets: [
      "Real-time shop floor visibility",
      "Machine & operator tracking",
      "Quality and defect logs",
    ],
    image: useCasesIndustryWebp.discreteManufacturing,
    href: "#",
  },
  {
    title: "Retail & Wholesale",
    description:
      "Manage inventory, pricing, offers and multi-location ops from one unified system.",
    bullets: [
      "Multi-store inventory",
      "Dynamic pricing rules",
      "Loyalty and promotions",
    ],
    image: useCasesIndustryWebp.retailWholesale,
    href: "#",
  },
  {
    title: "Construction & EPC",
    description:
      "Coordinate projects, vendors, materials and compliance across every site.",
    bullets: [
      "Project and task orchestration",
      "Vendor and subcontractor mgmt",
      "Compliance checklists",
    ],
    image: useCasesIndustryWebp.constructionEpc,
    href: "#",
  },
  {
    title: "Consumer Goods",
    description: "Coordinate demand, distribution, and partner networks with clarity.",
    bullets: [
      "Channel and distributor performance",
      "Campaign-to-cash visibility",
      "Operational controls",
    ],
    image: useCasesIndustryWebp.consumerGoods,
    href: "#",
  },
];

export function TailoredSystemsSection() {
  return (
    <section className="py-12">
      <div className="container-app">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tailored.map((c) => (
            <div
              key={c.title}
              className={cn(
                "flex h-full flex-col overflow-hidden rounded-[24px] border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
                c.cardClass
              )}
            >
              <div className="flex flex-1 flex-col gap-4 p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2C0E3A] text-white shadow-lg">
                    {c.icon}
                  </span>
                  <h3 className="font-sora text-[18px] font-bold leading-tight text-[#2C0E3A]">
                    {c.title}
                  </h3>
                </div>
                <p className="font-sora text-[14px] leading-relaxed text-[#6366A8]">
                  {c.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sora text-[13px] text-[#6366A8]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Button href={c.href} variant="dark" size="sm" className="rounded-[10px]">
                    Know More <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
              <div className="relative h-[160px] w-full border-t border-black/5 bg-white/40">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-contain object-bottom p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessSystemsSection() {
  return (
    <section className="py-12">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-2">
          {business.map((c) => (
            <div
              key={c.title}
              className="flex h-full flex-col gap-5 rounded-[24px] border border-purple-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6C60E8] text-white shadow-lg">
                  {c.icon}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sora text-[20px] font-bold text-[#2C0E3A]">
                    {c.title}
                  </h3>
                  <p className="font-sora text-[15px] leading-relaxed text-[#6366A8]">
                    {c.description}
                  </p>
                </div>
              </div>
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 font-sora text-[14px] text-[#6366A8]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Button href={c.href} variant="dark" size="sm" className="rounded-[10px]">
                  Know More <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustrySolutionsSection() {
  return (
    <section className="py-12">
      <div className="container-app">
        <Carousel
          options={{ align: "start", loop: true }}
          slideClassName="basis-[90%] md:basis-[48%] lg:basis-[33%] pl-6"
          showDots={false}
          arrowPlacement="overlay"
        >
          {industries.map((it) => (
            <article
              key={it.title}
              className="relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-[24px] border border-white/20 bg-white shadow-md"
            >
              <div className="flex flex-1 flex-col gap-4 p-8">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]" />
                  <h3 className="font-sora text-[22px] font-bold text-[#2C0E3A]">
                    {it.title}
                  </h3>
                </div>
                <p className="font-sora text-[15px] leading-relaxed text-[#6366A8]">
                  {it.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sora text-[14px] text-[#6366A8]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C60E8]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button href={it.href} variant="dark" size="sm" className="rounded-[10px]">
                    Know More <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
              <div className="relative h-[240px] w-full border-t border-black/5">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

const tabs = [
  { id: "business", label: "Business Systems" },
  { id: "tailored", label: "Tailored Systems" },
  { id: "industry", label: "Industry Solutions" },
];

export default function UseCaseTabs() {
  const [active, setActive] = useState<string>("business");

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {/* Tab Controls */}
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-purple-100 bg-white p-1.5 shadow-sm">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "rounded-full px-6 py-2.5 text-[14px] font-bold transition-all md:px-8 md:py-3",
                active === t.id
                  ? "bg-[#2C0E3A] text-white shadow-md"
                  : "text-[#6366A8] hover:bg-purple-50 hover:text-[#2C0E3A]",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {active === "tailored" && <TailoredSystemsSection />}
          {active === "business" && <BusinessSystemsSection />}
          {active === "industry" && <IndustrySolutionsSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
