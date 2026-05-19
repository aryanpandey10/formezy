"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import Button from "@/components/ui/Button";

const ChaosBadge = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#AD8E59] text-white rounded-full px-3 py-1 md:px-[1.25vw] md:py-[0.5vw] text-[12px] md:text-[14px] lg:text-[0.85vw] font-bold flex items-center gap-1.5 md:gap-[0.5vw] shadow-sm border border-[#ad8e59]/20 whitespace-nowrap"
  >
    <X className="w-3.5 h-3.5 md:w-[0.85vw] md:h-[0.85vw]" strokeWidth={3} />
    {text}
  </motion.div>
);



const FeaturePill = ({ text }: { text: string }) => (
  <motion.div 
    whileHover={{ y: -2, scale: 1.02 }}
    className="bg-[#60a5fa] text-white rounded-full px-4 py-2 md:px-[1.5vw] md:py-[0.75vw] text-[13px] md:text-[15px] lg:text-[0.9vw] font-bold flex items-center gap-2 md:gap-[0.75vw] shadow-xl shadow-blue-100/50 cursor-default whitespace-nowrap"
  >
    <div className="flex items-center justify-center w-4 h-4 md:w-[1.2vw] md:h-[1.2vw] rounded-full border-2 border-white/90">
      <Check className="w-2 h-2 md:w-[0.6vw] md:h-[0.6vw]" strokeWidth={4} />
    </div>
    {text}
  </motion.div>
);
const VerticalArrow = () => (
  <div className="flex flex-col items-center py-6 lg:hidden">
    <svg
      width="2"
      height="90"
      viewBox="0 0 2 60"
      fill="none"
      className="overflow-visible"
    >
      {/* Moving dashed line */}
      <motion.path
        d="M 1 0 L 1 60"
        stroke="#6366f1"
        strokeWidth="2"
        strokeDasharray="6 6"
        animate={{
          strokeDashoffset: [0, -12],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Arrowhead */}
      <motion.path
        d="M -3 55 L 1 60 L 5 55"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
    </svg>
  </div>
);

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col font-sans overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 -z-0"
        style={{ 
          backgroundImage: "url('/images/Home/bg_grid.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      ></div>
      
      <div className="container-app relative z-10 flex flex-col items-center">
        {/* 1. Top Section: Chaos to Clarity */}
        <div className="flex flex-col items-center text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sora text-[28px] sm:text-[36px] md:text-[44px] lg:text-[3.75vw] font-extrabold text-[#1e1b4b] mb-6 tracking-tight leading-[1.1]"
          >
            Build from Chaos to Clarity
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-[1.25vw]">
            <ChaosBadge text="Manual Tracking" />
            <ChaosBadge text="Disconnected System" />
            <ChaosBadge text="Delayed Execution" />
          </div>
        </div>

        {/* Vertical Arrow 1 (Mobile Only) */}
        <VerticalArrow />

        {/* 2. Main Content Area */}
        <div className="w-full flex flex-col lg:grid lg:grid-cols-12 items-center lg:gap-8 lg:pb-[5vw]">
          
          {/* Left Column (Block 2) */}
          <div className="relative lg:col-span-5 z-20 flex flex-col items-center lg:items-start text-center lg:text-left px-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#6366f1] text-white  md:rounded-full px-5 py-2 md:px-[1.75vw] md:py-[0.75vw] text-[14px] md:text-[16px] lg:text-[0.9vw] font-black mb-6 shadow-2xl shadow-indigo-300/40 transform hover:scale-105 transition-transform cursor-default"
            >
              We are here to Help
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-[32px] sm:text-[42px] md:text-[50px] lg:text-[4.375vw] font-extrabold text-[#1e1b4b] leading-[1.1] mb-8"
            >
              Go Beyond ERP <br />
              with <span className="text-[#6366f1]">Formezy EAP</span>
            </motion.h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 md:gap-[1.25vw] mb-10">
              <FeaturePill text="Digitize execution" />
              <FeaturePill text="Get real-time visibility" />
              <FeaturePill text="Standardize processes" />
            </div>

            {/* Vertical Arrow 2 (Mobile Only) */}
            <div className="lg:hidden w-full flex justify-center">
              <VerticalArrow />
            </div>
          </div>

          {/* Right Column (Diagram Area) */}
          <div className="relative lg:col-span-7 w-full flex items-center justify-center lg:justify-end px-4 mb-12 lg:mb-0">
            {/* Desktop Arrows (Hidden on Mobile) */}
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/images/topArrow.svg" 
              alt="" 
              className="absolute -top-[10vw] -left-[5vw] w-[26vw] opacity-60 hidden lg:block pointer-events-none z-0"
            />
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              src="/images/bottomArrow.svg" 
              alt="" 
              className="absolute bottom-[2vw] -left-[24vw] w-[28vw] opacity-60 hidden lg:block pointer-events-none z-0"
            />

            {/* Central Image */}
            <div className="relative w-full max-w-[450px] lg:max-w-none lg:w-[44vw] z-10">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image 
                  src="/images/Home/m_banner_2x.webp" 
                  alt="Formezy EAP Platform Overview" 
                  width={850}
                  height={850}
                  priority
                  className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Buttons: Forced Side-by-Side on Mobile */}
        <div className="relative z-30 pb-16 w-full flex justify-center lg:justify-start px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-[2vw] w-full"
          >
            <Button
              href="#demo"
              className="flex-1 lg:flex-none lg:min-w-[12vw] rounded-[10px] md:rounded-[0.75vw] text-[13px] sm:text-[15px] lg:text-[1vw] px-4 py-3.5 md:px-[2vw] md:py-[1vw] h-auto flex items-center justify-center gap-1.5 md:gap-[0.5vw]"
            >
              Book Demo <ArrowRight className="w-4 h-4 md:w-[1vw] md:h-[1vw]" />
            </Button>
            <Button
              href="/platform/overview"
              variant="secondary"
              className="flex-1 lg:flex-none lg:min-w-[12vw] rounded-[10px] md:rounded-[0.75vw] text-[13px] sm:text-[15px] lg:text-[1vw] px-4 py-3.5 md:px-[2vw] md:py-[1vw] h-auto flex items-center justify-center gap-1.5 md:gap-[0.5vw]"
            >
              Explore Platform
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
