"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="home-hero-fold relative flex flex-col overflow-x-hidden">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="relative left-1/2 flex min-h-0 w-screen max-w-[100vw] flex-1 -translate-x-1/2 flex-col px-4 pb-3 pt-5 sm:px-6 sm:pb-4 sm:pt-6 md:px-8 md:pt-7 lg:pt-8">
          <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-2xl md:rounded-3xl">
            <Image
              src="/images/Home/HeroImage.svg"
              alt="Formezy platform"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        <div className="container-app relative shrink-0 pb-4 pt-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="relative z-10 flex w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Button
              href="#demo"
              size="lg"
              className="w-full max-w-[176px] rounded-[10px] sm:w-[176px] sm:shrink-0"
            >
              Book Demo <ArrowRight size={16} />
            </Button>
            <Button
              href="/platform/overview"
              variant="secondary"
              size="lg"
              className="rounded-[10px] sm:shrink-0"
            >
              Explore Platform
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
