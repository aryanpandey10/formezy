"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";
import {
  executiveTeam,
  leadershipImages,
  leadershipTeam,
  philosophyBullets,
} from "@/lib/leadership-data";
import { cn } from "@/lib/cn";

const G = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-b from-[#708FF4] to-[#6C60E8] bg-clip-text text-transparent">
    {children}
  </span>
);

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6C60E8] text-white shadow-sm">
            <Check size={13} strokeWidth={3} />
          </span>
          <span className="font-sora text-[15px] leading-[26px] text-[#6366A8] md:text-[16px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PhotoPlaceholder({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[16px] bg-gradient-to-br from-[#E8EBFF] to-[#F8E8FF] font-sora text-[28px] font-bold text-[#6C60E8]/50",
        className,
      )}
      aria-hidden
    >
      {initials}
    </div>
  );
}

function ExecutiveCard({
  name,
  role,
  index,
}: {
  name: string;
  role: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col gap-4 rounded-[20px] border border-purple-100/70 bg-white/90 p-5 shadow-card backdrop-blur-sm"
    >
      <PhotoPlaceholder name={name} className="aspect-[4/3] w-full" />
      <div>
        <p className="font-sora text-[18px] font-bold text-[#2C0E3A]">{name}</p>
        <p className="mt-1 font-sora text-[14px] font-semibold text-[#6C60E8]">{role}</p>
      </div>
    </motion.div>
  );
}

function LeaderCard({
  name,
  role,
  bio,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="flex h-full flex-col gap-5 rounded-[20px] border border-purple-100/70 bg-white/90 p-6 shadow-card backdrop-blur-sm"
    >
      <PhotoPlaceholder name={name} className="aspect-[3/4] w-full max-h-[220px]" />
      <div>
        <h3 className="font-sora text-[18px] font-bold text-[#2C0E3A]">{name}</h3>
        <p className="mt-1 font-sora text-[13px] font-semibold text-[#6C60E8]">{role}</p>
        <p className="mt-3 font-sora text-[14px] leading-[24px] text-[#6366A8]">{bio}</p>
      </div>
    </motion.article>
  );
}

export default function LeadershipContent() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-8 md:pt-12 lg:pt-14">
        <div className="container-app relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">
              Home
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/about/company" className="hover:text-[#2C0E3A]">
              About
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Leadership</span>
          </motion.nav>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="max-w-[1000px] font-sora text-[36px] font-bold leading-[1.1] text-[#2C0E3A] md:text-[52px] lg:text-[64px]"
            >
              Guided by Experience. <G>Driven by Vision.</G>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[720px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]"
            >
              Our leadership brings together deep enterprise experience and a
              clear vision for how modern businesses should design, automate,
              and scale their operations.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 w-full">
              <div className="relative aspect-[21/9] w-full min-h-[220px] md:min-h-[320px]">
                <Image
                  src={leadershipImages.hero}
                  alt="Formezy leadership — connected teams and vision"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership That Understands Business */}
      <section className="section bg-white/80 py-16 backdrop-blur-sm md:py-20">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px] lg:text-[52px]"
            >
              Leadership That <G>Understands Business</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]"
            >
              Formezy is led by practitioners who have spent years inside
              complex operations — not just building software, but understanding
              how businesses actually run, scale, and adapt.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Leadership Philosophy */}
      <section className="section pt-0">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="grid items-center gap-10 rounded-[28px] border border-purple-100/80 bg-white/90 p-6 shadow-card backdrop-blur-sm md:grid-cols-2 md:gap-12 md:p-10 lg:p-12"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-purple-50/50">
              <Image
                src={leadershipImages.philosophy}
                alt="Our leadership philosophy — data-driven collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[30px] font-bold leading-tight text-[#2C0E3A] md:text-[38px]"
              >
                Our <G>Leadership Philosophy</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                We believe technology leadership should reduce complexity — not
                add to it. Every decision we make is grounded in operational
                clarity, adoption, and measurable business impact.
              </motion.p>
              <motion.div variants={fadeUp}>
                <BulletList items={philosophyBullets} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Driving Innovation and Growth */}
      <section className="section">
        <div className="container-app">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[42px]"
              >
                Driving Innovation <G>and Growth</G>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
              >
                Our executive team combines enterprise software expertise with
                hands-on operational insight — ensuring Formezy evolves with the
                real needs of growing businesses.
              </motion.p>
              <motion.blockquote
                variants={fadeUp}
                className="font-rancho text-[28px] leading-[1.35] text-[#6366A8] md:text-[34px] lg:text-[38px]"
              >
                Innovation guided by experience.
                <br />
                Growth driven by clarity.
              </motion.blockquote>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {executiveTeam.map((person, i) => (
                <ExecutiveCard key={person.name} {...person} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Leadership */}
      <section className="section bg-white/70 pt-0 backdrop-blur-sm">
        <div className="container-app">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mx-auto mb-12 flex max-w-[720px] flex-col items-center gap-4 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[44px]"
            >
              Meet the <G>Leadership</G>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sora text-[16px] leading-[28px] text-[#6366A8]"
            >
              The people behind Formezy — guiding product, engineering, customer
              success, and go-to-market with one shared mission.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((leader, i) => (
              <LeaderCard key={leader.name} {...leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pb-20 pt-4 md:pb-28">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-purple-100 shadow-[0_8px_48px_rgba(108,96,232,0.12)] md:min-h-[620px] lg:min-h-[700px]"
          >
            <Image
              src={leadershipImages.cta}
              alt="Built by people who understand business"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
            <div className="relative z-10 flex flex-col items-center gap-6 px-6 pt-14 text-center md:px-12 md:pt-16">
              <h2 className="max-w-[800px] font-sora text-[32px] font-bold leading-[1.12] text-[#2C0E3A] md:text-[48px] lg:text-[56px]">
                Built by People Who <G>Understand Business</G>
              </h2>
              <p className="max-w-[600px] font-sora text-[16px] leading-[28px] text-[#6366A8] md:text-[17px]">
                Join a team that builds enterprise systems the way businesses
                actually need them — with clarity, purpose, and long-term impact.
              </p>
              <Button href="/about/careers" size="lg" className="rounded-[12px] px-10">
                Join Us <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
