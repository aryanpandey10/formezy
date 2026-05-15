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
    className="bg-[#ad8e59] text-white rounded-full px-[1.25vw] py-[0.5vw] text-[0.85vw] font-bold flex items-center gap-[0.5vw] shadow-sm border border-[#ad8e59]/20 whitespace-nowrap"
  >
    <X size="0.85vw" strokeWidth={3} className="text-white" />
    {text}
  </motion.div>
);

const FeaturePill = ({ text }: { text: string }) => (
  <motion.div 
    whileHover={{ y: -2, scale: 1.02 }}
    className="bg-[#60a5fa] text-white rounded-full px-[1.5vw] py-[0.75vw] text-[0.9vw] font-bold flex items-center gap-[0.75vw] shadow-xl shadow-blue-100/50 cursor-default whitespace-nowrap"
  >
    <div className="flex items-center justify-center w-[1.2vw] h-[1.2vw] rounded-full border-2 border-white/90">
      <Check size="0.6vw" strokeWidth={4} />
    </div>
    {text}
  </motion.div>
);

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col font-sans overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ 
          backgroundImage: "url('/images/Home/bg_grid.svg')", 
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      ></div>
      
      {/* Top Section */}
      <div className="relative z-10 pt-[5vw] pb-[2.5vw] flex flex-col items-center text-center px-[2vw]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sora text-[3.75vw] font-extrabold text-[#1e1b4b] mb-[1.5vw] tracking-tight leading-[1.05]"
        >
          Build from Chaos to Clarity
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-[1.25vw] relative">
          <ChaosBadge text="Manual Tracking" />
          <ChaosBadge text="Disconnected System" />
          <ChaosBadge text="Delayed Execution" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow grid grid-cols-1 lg:grid-cols-12 items-center px-[6vw] max-w-[1920px] mx-auto w-full pb-[5vw]">
        
        {/* Left Column (Text) */}
        <div className="relative lg:col-span-5 z-20 mb-[4vw] lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#6366f1] text-white rounded-[1vw] px-[1.75vw] py-[0.75vw] text-[0.9vw] font-black mb-[2.5vw] shadow-2xl shadow-indigo-300/40 transform hover:scale-105 transition-transform cursor-default"
          >
            We are here to Help
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora text-[4.375vw] font-extrabold text-[#1e1b4b] leading-[1.0] mb-[3vw]"
          >
            Go Beyond ERP <br />
            with <span className="text-[#6366f1]">Formezy EAP</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-[1.25vw]"
          >
            <FeaturePill text="Digitize execution" />
            <FeaturePill text="Get real-time visibility" />
            <FeaturePill text="Standardize processes" />
          </motion.div>
        </div>

        {/* Right Column (Diagram Area) */}
        <div className="relative lg:col-span-7 h-full flex items-center justify-center lg:justify-end">
          
          {/* Top Arrow */}
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="/images/topArrow.svg" 
            alt="" 
            className="absolute -top-[10vw] -left-[5vw] w-[26vw] opacity-60 hidden lg:block pointer-events-none z-0"
          />

          {/* Bottom Arrow */}
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
          <div className="relative w-full max-w-[44vw] lg:mr-[-3vw] z-10">
            <motion.div 
              animate={{ y: [0, -0.75, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateY(0)" }}
              className="relative z-10"
            >
              <Image 
                src="/images/heroRound.svg" 
                alt="Formezy EAP Platform Overview" 
                width={850}
                height={850}
                priority
                className="w-full h-auto drop-shadow-[0_2vw_4vw_rgba(0,0,0,0.08)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons Container */}
      <div className="container-app relative z-30 pb-[4vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-start gap-[1.5vw] sm:flex-row sm:items-center sm:gap-[2vw]"
        >
          <Button
            href="#demo"
            className="w-full max-w-[12vw] rounded-[0.75vw] sm:w-[12vw] text-[1vw] px-[2vw] py-[1vw] h-auto flex items-center justify-center gap-[0.5vw]"
          >
            Book Demo <ArrowRight size="1vw" />
          </Button>
          <Button
            href="/platform/overview"
            variant="secondary"
            className="w-full max-w-[12vw] rounded-[0.75vw] sm:w-[12vw] text-[1vw] px-[2vw] py-[1vw] h-auto flex items-center justify-center gap-[0.5vw]"
          >
            Explore Platform
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
