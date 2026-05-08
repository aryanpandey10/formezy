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
} from "lucide-react";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";
import { cn } from "@/lib/cn";
import { useCasesIndustryWebp } from "@/lib/webp-assets";

type TailoredCard = {
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
};

const tailored: TailoredCard[] = [
  {
    title: "Tailored ERP",
    description: "A configurable ERP that molds to your ops, not the other way around.",
    icon: <Boxes size={20} />,
    bullets: [
      "Finance, inventory, HR in one",
      "Configurable per entity",
      "Audit-ready reports",
    ],
  },
  {
    title: "Tailored CRM",
    description: "Go beyond generic pipelines — build a CRM that mirrors how you actually sell.",
    icon: <Users2 size={20} />,
    bullets: [
      "Custom pipeline stages",
      "Account-based workflows",
      "Renewal and churn alerts",
    ],
  },
  {
    title: "Document Management System",
    description: "Central, searchable, permissioned document repositories for every team.",
    icon: <FileStack size={20} />,
    bullets: [
      "Version history built in",
      "Granular sharing rules",
      "AI-powered search",
    ],
  },
  {
    title: "Tenant Management System",
    description: "Manage properties, tenants, leases, dues and service requests end-to-end.",
    icon: <Building2 size={20} />,
    bullets: [
      "Rent and invoicing automation",
      "Service ticket tracking",
      "Tenant self-service portal",
    ],
  },
];

const business: TailoredCard[] = [
  {
    title: "Claims Management",
    description: "Speed up claims intake, triage, approvals and settlement.",
    icon: <FileCheck2 size={20} />,
    bullets: [
      "Digital intake forms",
      "Multi-level reviewer routing",
      "Policy-based auto-approvals",
    ],
  },
  {
    title: "Field Service Management",
    description: "Dispatch, track and complete field jobs from request to invoice.",
    icon: <Wrench size={20} />,
    bullets: [
      "Smart dispatch & routing",
      "Mobile tech app",
      "Parts and SLA tracking",
    ],
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end visibility across vendors, shipments and warehouses.",
    icon: <Truck size={20} />,
    bullets: [
      "Vendor scorecards",
      "Shipment milestones",
      "Exception alerts",
    ],
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
  },
];

const tabs = [
  { id: "tailored", label: "Tailored Systems" },
  { id: "business", label: "Business Systems" },
  { id: "industry", label: "Industry Solutions" },
];

export default function UseCaseTabs() {
  const [active, setActive] = useState<string>("tailored");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-surface-border bg-white p-1 shadow-card">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "rounded-full px-4 py-2 text-[13px] font-semibold transition-all md:px-5",
                active === t.id
                  ? "bg-purple-cta text-white shadow-cta"
                  : "text-ink-secondary hover:bg-purple-50 hover:text-ink",
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
          transition={{ duration: 0.35 }}
        >
          {active === "tailored" ? (
            <CardGrid cols={4} cards={tailored} />
          ) : active === "business" ? (
            <CardGrid cols={2} cards={business} />
          ) : (
            <IndustryCarousel items={industries} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function CardGrid({ cards, cols }: { cards: TailoredCard[]; cols: 2 | 4 }) {
  return (
    <div
      className={cn(
        "grid gap-5",
        cols === 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "md:grid-cols-2",
      )}
    >
      {cards.map((c) => (
        <div
          key={c.title}
          className="flex h-full flex-col gap-4 rounded-[20px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-white p-6 shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-cta text-white shadow-cta">
              {c.icon}
            </span>
            <h3 className="text-[17px] font-bold text-ink">{c.title}</h3>
          </div>
          <p className="text-[14px] leading-relaxed text-ink-secondary">
            {c.description}
          </p>
          <ul className="flex flex-col gap-1.5">
            {c.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-[13px] text-ink-secondary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-primary" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button
              href="#"
              variant="dark"
              size="sm"
              className="rounded-pill"
            >
              Know More <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function IndustryCarousel({ items }: { items: IndustryCard[] }) {
  return (
    <Carousel
      options={{ align: "start" }}
      slideClassName="basis-[85%] md:basis-[70%] lg:basis-[48%]"
      showDots
    >
      {items.map((it) => (
        <article
          key={it.title}
          className="relative h-[420px] overflow-hidden rounded-[24px] border border-white/10 shadow-card-hover"
        >
          <Image
            src={it.image}
            alt={it.title}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
          <div className="relative flex h-full flex-col justify-end gap-4 p-7 text-white">
            <h3 className="text-[22px] font-extrabold md:text-[26px]">
              {it.title}
            </h3>
            <p className="max-w-lg text-[14px] leading-relaxed text-white/85">
              {it.description}
            </p>
            <ul className="flex flex-col gap-1.5">
              {it.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-[13px] text-white/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-light" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-white px-5 py-2.5 text-[13px] font-semibold text-ink hover:bg-purple-50"
            >
              Know More <ArrowRight size={14} />
            </Link>
          </div>
        </article>
      ))}
    </Carousel>
  );
}
