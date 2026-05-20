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
  <div className="flex flex-col items-center py-6">
    <svg

      width="2"
      height="90"
      viewBox="0 0 2 60"
      fill="none"
      className="overflow-visible hidden"
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
         d="M -2 54 L 1 58 L 4 54"
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

      <svg width="15" height="66" viewBox="0 0 15 66" fill="none" xmlns="http://www.w3.org/2000/svg"
      
       className="overflow-visible lg:hidden">
<path d="M6.65715 65.5387C7.04768 65.9292 7.68084 65.9292 8.07136 65.5387L14.4353 59.1748C14.8259 58.7842 14.8259 58.1511 14.4353 57.7605C14.0448 57.37 13.4116 57.37 13.0211 57.7605L7.36426 63.4174L1.7074 57.7605C1.31688 57.37 0.683714 57.37 0.29319 57.7605C-0.0973344 58.1511 -0.0973344 58.7842 0.29319 59.1748L6.65715 65.5387ZM7.36426 0H6.36426V3.24158H7.36426H8.36426V0H7.36426ZM7.36426 9.72474H6.36426V16.2079H7.36426H8.36426V9.72474H7.36426ZM7.36426 22.6911H6.36426V29.1742H7.36426H8.36426V22.6911H7.36426ZM7.36426 35.6574H6.36426V42.1405H7.36426H8.36426V35.6574H7.36426ZM7.36426 48.6237H6.36426V55.1069H7.36426H8.36426V48.6237H7.36426ZM7.36426 61.59H6.36426V64.8316H7.36426H8.36426V61.59H7.36426Z" fill="url(#paint0_linear_18_49)"/>
<defs>
<linearGradient id="paint0_linear_18_49" x1="7.86426" y1="0" x2="7.86426" y2="64.8316" gradientUnits="userSpaceOnUse">
<stop stop-color="#708FF4"/>
<stop offset="1" stop-color="#6C60E8"/>
</linearGradient>
</defs>
</svg>

  </div>
);

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col font-sans overflow-hidden  mt-5 xl:mt-10">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 -z-0"
        style={{ 
          backgroundImage: "url('/images/Home/bg_grid.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      ></div>
      
      <div className="container_home relative z-10 flex flex-col items-center">
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
        <svg className="hero_top_arrow hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="788" height="120" viewBox="0 0 788 125" fill="none">
  <path d="M786.17 58.2719V59.2719H787.17V58.2719H786.17ZM7.36426 58.2719V57.2719H6.36426V58.2719H7.36426ZM6.65715 123.811C7.04768 124.201 7.68084 124.201 8.07136 123.811L14.4353 117.447C14.8259 117.056 14.8259 116.423 14.4353 116.032C14.0448 115.642 13.4116 115.642 13.0211 116.032L7.36426 121.689L1.7074 116.032C1.31688 115.642 0.683714 115.642 0.29319 116.032C-0.0973344 116.423 -0.0973344 117.056 0.29319 117.447L6.65715 123.811ZM7.36426 123.103H8.36426V119.862H7.36426H6.36426V123.103H7.36426ZM7.36426 113.379H8.36426V106.896H7.36426H6.36426V113.379H7.36426ZM7.36426 100.412H8.36426V93.9292H7.36426H6.36426V100.412H7.36426ZM7.36426 87.4461H8.36426V80.9629H7.36426H6.36426V87.4461H7.36426ZM7.36426 74.4797H8.36426V67.9966H7.36426H6.36426V74.4797H7.36426ZM7.36426 61.5134H8.36426V58.2719H7.36426H6.36426V61.5134H7.36426ZM7.36426 58.2719V59.2719H10.3597V58.2719V57.2719H7.36426V58.2719ZM16.3505 58.2719V59.2719H22.3413V58.2719V57.2719H16.3505V58.2719ZM28.3321 58.2719V59.2719H34.3229V58.2719V57.2719H28.3321V58.2719ZM40.3137 58.2719V59.2719H46.3046V58.2719V57.2719H40.3137V58.2719ZM52.2954 58.2719V59.2719H58.2862V58.2719V57.2719H52.2954V58.2719ZM64.277 58.2719V59.2719H70.2678V58.2719V57.2719H64.277V58.2719ZM76.2586 58.2719V59.2719H82.2494V58.2719V57.2719H76.2586V58.2719ZM88.2403 58.2719V59.2719H94.2311V58.2719V57.2719H88.2403V58.2719ZM100.222 58.2719V59.2719H106.213V58.2719V57.2719H100.222V58.2719ZM112.204 58.2719V59.2719H118.194V58.2719V57.2719H112.204V58.2719ZM124.185 58.2719V59.2719H130.176V58.2719V57.2719H124.185V58.2719ZM136.167 58.2719V59.2719H142.158V58.2719V57.2719H136.167V58.2719ZM148.148 58.2719V59.2719H154.139V58.2719V57.2719H148.148V58.2719ZM160.13 58.2719V59.2719H166.121V58.2719V57.2719H160.13V58.2719ZM172.112 58.2719V59.2719H178.102V58.2719V57.2719H172.112V58.2719ZM184.093 58.2719V59.2719H190.084V58.2719V57.2719H184.093V58.2719ZM196.075 58.2719V59.2719H202.066V58.2719V57.2719H196.075V58.2719ZM208.057 58.2719V59.2719H214.047V58.2719V57.2719H208.057V58.2719ZM220.038 58.2719V59.2719H226.029V58.2719V57.2719H220.038V58.2719ZM232.02 58.2719V59.2719H238.011V58.2719V57.2719H232.02V58.2719ZM244.001 58.2719V59.2719H249.992V58.2719V57.2719H244.001V58.2719ZM255.983 58.2719V59.2719H261.974V58.2719V57.2719H255.983V58.2719ZM267.965 58.2719V59.2719H273.956V58.2719V57.2719H267.965V58.2719ZM279.946 58.2719V59.2719H285.937V58.2719V57.2719H279.946V58.2719ZM291.928 58.2719V59.2719H297.919V58.2719V57.2719H291.928V58.2719ZM303.91 58.2719V59.2719H309.9V58.2719V57.2719H303.91V58.2719ZM315.891 58.2719V59.2719H321.882V58.2719V57.2719H315.891V58.2719ZM327.873 58.2719V59.2719H333.864V58.2719V57.2719H327.873V58.2719ZM339.854 58.2719V59.2719H345.845V58.2719V57.2719H339.854V58.2719ZM351.836 58.2719V59.2719H357.827V58.2719V57.2719H351.836V58.2719ZM363.818 58.2719V59.2719H369.809V58.2719V57.2719H363.818V58.2719ZM375.799 58.2719V59.2719H381.79V58.2719V57.2719H375.799V58.2719ZM387.781 58.2719V59.2719H393.772V58.2719V57.2719H387.781V58.2719ZM399.763 58.2719V59.2719H405.753V58.2719V57.2719H399.763V58.2719ZM411.744 58.2719V59.2719H417.735V58.2719V57.2719H411.744V58.2719ZM423.726 58.2719V59.2719H429.717V58.2719V57.2719H423.726V58.2719ZM435.707 58.2719V59.2719H441.698V58.2719V57.2719H435.707V58.2719ZM447.689 58.2719V59.2719H453.68V58.2719V57.2719H447.689V58.2719ZM459.671 58.2719V59.2719H465.662V58.2719V57.2719H459.671V58.2719ZM471.652 58.2719V59.2719H477.643V58.2719V57.2719H471.652V58.2719ZM483.634 58.2719V59.2719H489.625V58.2719V57.2719H483.634V58.2719ZM495.616 58.2719V59.2719H501.606V58.2719V57.2719H495.616V58.2719ZM507.597 58.2719V59.2719H513.588V58.2719V57.2719H507.597V58.2719ZM519.579 58.2719V59.2719H525.57V58.2719V57.2719H519.579V58.2719ZM531.561 58.2719V59.2719H537.551V58.2719V57.2719H531.561V58.2719ZM543.542 58.2719V59.2719H549.533V58.2719V57.2719H543.542V58.2719ZM555.524 58.2719V59.2719H561.515V58.2719V57.2719H555.524V58.2719ZM567.506 58.2719V59.2719H573.497V58.2719V57.2719H567.506V58.2719ZM579.487 58.2719V59.2719H585.478V58.2719V57.2719H579.487V58.2719ZM591.469 58.2719V59.2719H597.46V58.2719V57.2719H591.469V58.2719ZM603.451 58.2719V59.2719H609.442V58.2719V57.2719H603.451V58.2719ZM615.432 58.2719V59.2719H621.423V58.2719V57.2719H615.432V58.2719ZM627.414 58.2719V59.2719H633.405V58.2719V57.2719H627.414V58.2719ZM639.396 58.2719V59.2719H645.387V58.2719V57.2719H639.396V58.2719ZM651.378 58.2719V59.2719H657.368V58.2719V57.2719H651.378V58.2719ZM663.359 58.2719V59.2719H669.35V58.2719V57.2719H663.359V58.2719ZM675.341 58.2719V59.2719H681.332V58.2719V57.2719H675.341V58.2719ZM687.323 58.2719V59.2719H693.313V58.2719V57.2719H687.323V58.2719ZM699.304 58.2719V59.2719H705.295V58.2719V57.2719H699.304V58.2719ZM711.286 58.2719V59.2719H717.277V58.2719V57.2719H711.286V58.2719ZM723.268 58.2719V59.2719H729.258V58.2719V57.2719H723.268V58.2719ZM735.249 58.2719V59.2719H741.24V58.2719V57.2719H735.249V58.2719ZM747.231 58.2719V59.2719H753.222V58.2719V57.2719H747.231V58.2719ZM759.213 58.2719V59.2719H765.204V58.2719V57.2719H759.213V58.2719ZM771.194 58.2719V59.2719H777.185V58.2719V57.2719H771.194V58.2719ZM783.176 58.2719V59.2719H786.17V58.2719V57.2719H783.176V58.2719ZM786.17 58.2719H787.17V55.3583H786.17H785.17V58.2719H786.17ZM786.17 49.5311H787.17V43.7039H786.17H785.17V49.5311H786.17ZM786.17 37.8767H787.17V32.0495H786.17H785.17V37.8767H786.17ZM786.17 26.2223H787.17V20.3951H786.17H785.17V26.2223H786.17ZM786.17 14.568H787.17V8.74077H786.17H785.17V14.568H786.17ZM786.17 2.91359H787.17V0H786.17H785.17V2.91359H786.17Z" fill="url(#paint0_linear_1_308862)"/>
  <defs>
    <linearGradient id="paint0_linear_1_308862" x1="396.767" y1="0" x2="396.767" y2="123.103" gradientUnits="userSpaceOnUse">
      <stop stop-color="#708FF4"/>
      <stop offset="1" stop-color="#6C60E8"/>
    </linearGradient>
  </defs>
</svg>

        {/* 2. Main Content Area */}
        <div className="w-full flex flex-col lg:grid lg:grid-cols-12 items-center lg:gap-8 lg:pb-[5vw] xl:pb-[2vw] mt-4 lg:mt-10">
          
          {/* Left Column (Block 2) */}
          <div className="relative lg:col-span-5 z-20 flex flex-col items-center lg:items-start text-center lg:text-left px-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}

              className="inline-block text-white  rounded-full px-5 py-2 md:px-[1.75vw] md:py-[0.75vw] text-[14px] md:text-[16px] lg:text-[0.9vw] mb-6 shadow-2xl shadow-indigo-300/40 transform hover:scale-105 transition-transform cursor-default"
             style={{
  background: "var(--gradient-1, linear-gradient(180deg, #708FF4 0%, #6C60E8 100%))"
}}
            >
              We are here to Help
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-[32px] sm:text-[42px]  lg:text-[46px] 2xl:text-[60px] font-extrabold text-[#1e1b4b] leading-[1.1] mb-8"
            >
              Go Beyond ERP <br />
              with <span className="text-[#6366f1]">Formezy EAP</span>
            </motion.h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 md:gap-[1.25vw] mb-4 lg:mb-10">
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
          <div className="relative lg:col-span-7 w-full flex items-center justify-center lg:justify-end md:px-4 mb-12 lg:mb-0">
            {/* Desktop Arrows (Hidden on Mobile) */}
            {/* <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/images/topArrow.svg" 
              alt="" 
              className="absolute -top-[10vw] -left-[5vw] w-[26vw] opacity-60 hidden lg:block pointer-events-none z-0"
            /> */}
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
            style={{ border: "1px solid #2c0e3a" }}
              href="#demo"
              className=" flex-1 lg:flex-none lg:min-w-[12vw] rounded-[10px] md:rounded-[0.75vw] text-[13px] sm:text-[15px] lg:text-[1vw] px-4 py-3.5 md:px-[2vw] md:py-[1vw] h-auto flex items-center justify-center gap-1.5 md:gap-[0.5vw]"
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
