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
  Factory,
  ShoppingCart,
  Landmark,
  UserCheck,
  PenTool,
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
    description:
      "Move beyond traditional systems with a tailored approach that connects workflows, communication, and data into one unified platform. Designed to adapt to your business processes while maintaining structure and control.",
    icon: <Boxes size={20} />,
    bullets: [
      "Custom workflows aligned with operations",
      "Unified data and communication flow",
      "Scalable system built for growth",
    ],
    image: useCasesPageWebp.tailoredErp,
    cardClass: "border-purple-100 bg-[#F5F0FF]/30",
    href: "/platform/use-cases/tailored-erp",
  },
  {
    title: "Tailored CRM",
    description:
      "Build customer management systems that reflect how your sales and support teams actually operate, ensuring better engagement and complete visibility.",
    icon: <Users2 size={20} />,
    bullets: [
      "Structured customer lifecycle tracking",
      "Improved communication and follow-ups",
      "Real-time visibility into customer interactions",
    ],
    image: useCasesPageWebp.tailoredCrm,
    cardClass: "border-blue-100 bg-[#EBF5FF]/30",
    href: "/platform/use-cases/tailored-crm",
  },
  {
    title: "Document Management System",
    description:
      "Manage documents in a structured and secure environment with complete visibility and control over access, versions, and workflows.",
    icon: <FileStack size={20} />,
    bullets: [
      "Centralized document storage",
      "Easy access and retrieval",
      "Version control and compliance support",
    ],
    image: useCasesPageWebp.documentManagement,
    cardClass: "border-amber-100 bg-[#FFF9EB]/30",
    href: "/platform/use-cases/document-management-system",
  },
  {
    title: "Tenant Management System",
    description:
      "Simplify property and tenant operations with structured workflows that manage everything from onboarding to communication and maintenance.",
    icon: <Building2 size={20} />,
    bullets: [
      "Organized tenant and property data",
      "Streamlined communication workflows",
      "Improved tracking of operations",
    ],
    image: useCasesPageWebp.tenantManagement,
    cardClass: "border-rose-100 bg-[#FFF5F5]/30",
    href: "/platform/use-cases/tenant-management-system",
  },
  {
    title: "Task Management System",
    description:
      "Track, assign, and manage tasks across teams with clarity and accountability, ensuring smoother execution and better coordination.",
    icon: <ClipboardList size={20} />,
    bullets: [
      "Clear task ownership",
      "Real-time progress tracking",
      "Improved team collaboration",
    ],
    image: useCasesPageWebp.taskManagement,
    cardClass: "border-emerald-100 bg-[#F0FFF4]/30",
    href: "/platform/use-cases/task-management-system",
  },
];

const business: BusinessCard[] = [
  {
    title: "CRM System",
    description:
      "Manage leads, customer interactions, sales pipelines, and follow-ups through one connected CRM platform designed to improve visibility and customer engagement.",
    icon: <Users2 size={20} />,
    bullets: [
      "Better sales pipeline visibility",
      "Improved customer coordination",
      "Faster follow-up management",
    ],
    href: "/platform/use-cases/crm-system",
  },
  {
    title: "Planning & Production Management",
    description:
      "Streamline production planning, shopfloor execution, inventory coordination, and operational tracking through structured production workflows.",
    icon: <Factory size={20} />,
    bullets: [
      "Improved production visibility",
      "Better planning coordination",
      "Reduced operational delays",
    ],
    href: "/platform/use-cases/planning-production-management",
  },
  {
    title: "Procurement Management System",
    description:
      "Digitize procurement workflows, vendor coordination, approvals, and purchasing visibility through one centralized operational platform.",
    icon: <ShoppingCart size={20} />,
    bullets: [
      "Faster procurement approvals",
      "Better vendor management",
      "Improved purchasing visibility",
    ],
    href: "/platform/use-cases/procurement-management-system",
  },
  {
    title: "Quality Control Management",
    description:
      "Standardize inspections, compliance workflows, traceability, and quality operations with real-time visibility and structured process control.",
    icon: <FileCheck2 size={20} />,
    bullets: [
      "Improved quality consistency",
      "Better traceability and compliance",
      "Faster issue resolution",
    ],
    href: "/platform/use-cases/quality-control-management",
  },
  {
    title: "Finance Management System",
    description:
      "Manage financial workflows, approvals, reconciliation, and reporting through one connected finance management platform.",
    icon: <Landmark size={20} />,
    bullets: [
      "Faster financial coordination",
      "Improved reporting visibility",
      "Better operational control",
    ],
    href: "/platform/use-cases/finance-management-system",
  },
  {
    title: "Human Resources Management System",
    description:
      "Digitize employee workflows, attendance, approvals, and workforce coordination through one centralized HR management system.",
    icon: <UserCheck size={20} />,
    bullets: [
      "Improved workforce visibility",
      "Faster HR operations",
      "Better employee coordination",
    ],
    href: "/platform/use-cases/human-resources-management-system",
  },
  {
    title: "Asset Management System",
    description:
      "Track assets, maintenance workflows, inspections, and operational visibility through one connected asset management platform.",
    icon: <Wrench size={20} />,
    bullets: [
      "Reduced operational downtime",
      "Improved maintenance visibility",
      "Better asset utilization tracking",
    ],
    href: "/platform/use-cases/asset-management-system",
  },
  {
    title: "R&D & Design Management System",
    description:
      "Manage design workflows, approvals, revisions, and product development coordination through one centralized R&D and design platform.",
    icon: <PenTool size={20} />,
    bullets: [
      "Improved design collaboration",
      "Better revision control",
      "Faster approval workflows",
    ],
    href: "/platform/use-cases/rd-design-management-system",
  },
  {
    title: "Supply Chain Management",
    description:
      "Connect procurement, inventory, and logistics into one system, enabling better coordination and operational visibility.",
    icon: <Truck size={20} />,
    bullets: [
      "Improved supply chain visibility",
      "Better coordination across functions",
      "Reduced operational delays",
    ],
    href: "/platform/use-cases/supply-chain-management-system",
  },
  {
    title: "Inventory Management",
    description:
      "Track stock levels, movement, and availability in real time, ensuring accuracy and reducing operational inefficiencies.",
    icon: <PackageSearch size={20} />,
    bullets: [
      "Real-time inventory tracking",
      "Reduced stock discrepancies",
      "Better control over stock movement",
    ],
    href: "/platform/use-cases/inventory-management-system",
  },
];

const industries: IndustryCard[] = [
  {
    title: "Heavy Manufacturing",
    description:
      "Supports complex operations across metal, engineering, foundry, mining, and oil & gas industries with structured workflows and operational control.",
    bullets: [
      "Structured production workflows",
      "Improved operational visibility",
      "Better coordination across teams",
    ],
    image: useCasesIndustryWebp.heavyManufacturing,
    href: "/platform/use-cases/heavy-manufacturing",
  },
  {
    title: "Process Industries",
    description:
      "Designed for industries like chemicals, pharmaceuticals, food, and more, ensuring compliance, traceability, and process efficiency.",
    bullets: [
      "Enhanced compliance tracking",
      "Process standardization",
      "Improved operational accuracy",
    ],
    image: useCasesIndustryWebp.processIndustries,
    href: "/platform/use-cases/process-industries",
  },
  {
    title: "Discrete Manufacturing",
    description:
      "Streamlines production and operations for electronics, electrical, and appliance industries with better workflow control.",
    bullets: [
      "Improved production tracking",
      "Better workflow coordination",
      "Reduced operational gaps",
    ],
    image: useCasesIndustryWebp.discreteManufacturing,
    href: "/platform/use-cases/discrete-manufacturing",
  },
  {
    title: "Construction & EPC Projects",
    description:
      "Coordinate projects, approvals, and resources effectively with structured workflows and better visibility.",
    bullets: [
      "Improved project tracking",
      "Better resource management",
      "Reduced delays in execution",
    ],
    image: useCasesIndustryWebp.constructionEpc,
    href: "/platform/use-cases/construction-epc-projects",
  },
  {
    title: "Service-based Businesses",
    description:
      "Designed for service-driven businesses that rely on coordination, communication, and process efficiency. Formezy helps structure operations, improve service delivery, and ensure seamless execution across workflows.",
    bullets: [
      "Centralized service operations",
      "Improved team coordination",
      "Better visibility into performance",
    ],
    image: useCasesIndustryWebp.serviceBased,
    href: "/platform/use-cases/service-based-businesses",
  },
  {
    title: "Retail Industry",
    description:
      "Digitize store operations, inventory coordination, approvals, and multi-location retail workflows through one connected operational platform.",
    bullets: [
      "Improved inventory visibility",
      "Faster store coordination",
      "Better operational control",
    ],
    image: useCasesIndustryWebp.retailWholesale,
    href: "/platform/use-cases/retail-industry",
  },
  {
    title: "Wholesale Industry",
    description:
      "Manage procurement, warehouse operations, inventory movement, and fulfillment workflows with centralized operational visibility and coordination.",
    bullets: [
      "Improved warehouse visibility",
      "Faster order processing",
      "Better inventory synchronization",
    ],
    image: useCasesIndustryWebp.retailWholesale,
    href: "/platform/use-cases/wholesale-industry",
  },
  {
    title: "Rental Industry",
    description:
      "Streamline rental workflows, asset tracking, maintenance coordination, and operational visibility across equipment, commodities, vehicles, and infrastructure rentals.",
    bullets: [
      "Better asset utilization tracking",
      "Improved operational coordination",
      "Real-time rental visibility",
    ],
    image: useCasesPageWebp.hero,
    href: "/platform/use-cases/rental-industry",
  },
];

export function TailoredSystemsSection() {
  return (
    <section className="py-12">
      <div className="container-app">
        <Carousel
          options={{ align: "start", loop: true }}
          slideClassName="basis-[90%] md:basis-[48%] lg:basis-[33%]"
          showDots={false}
          arrowPlacement="overlay"
        >
          {tailored.map((c) => (
            <div
              key={c.title}
              className={cn(
                "flex h-full min-h-[480px] flex-col overflow-hidden rounded-[24px] border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
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
        </Carousel>
      </div>
    </section>
  );
}

export function BusinessSystemsSection() {
  return (
    <section className="py-12">
      <div className="container-app">
        <Carousel
          options={{ align: "start", loop: true }}
          slideClassName="basis-[90%] md:basis-[48%] lg:basis-[33%]"
          showDots={false}
          arrowPlacement="overlay"
        >
          {business.map((c) => (
            <div
              key={c.title}
              className="flex h-full min-h-[380px] flex-col gap-5 rounded-[24px] border border-purple-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
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
              <ul className="flex flex-col gap-2">
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
        </Carousel>
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
          slideClassName="basis-[90%] md:basis-[48%] lg:basis-[33%]"
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
                  : "text-[#6366A8] hover:bg-purple-50 hover:text-[#2C0E3A]"
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
