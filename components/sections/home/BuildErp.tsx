"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

// build ERp
export default function BuildErp() {
  return (
    <>
        < section className="section pt-0" >
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-[#E8E4FF] bg-gradient-to-br from-[#F5F0FF] to-[#EEF4FF] pt-16 text-center shadow-lg"
          >
            <div className="relative z-10 px-6">
              <h2 className="mx-auto max-w-[800px] font-sora text-[32px] font-bold leading-[1.2] text-[#2C0E3A] md:text-[44px]">
                Build an ERP That 
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-sora text-[16px] text-[#6366A8]">
                Move beyond rigid systems and create one designed around your operations.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" className="h-14 px-10 text-[16px] font-bold tracking-wide">
                  Book a Demo
                </Button>
              </div>
            </div>

            <div className="mt-12 overflow-hidden px-4 md:px-12 lg:px-20">
              <Image
                src="/images/BuildYourERP.png"
                alt="Build a CRM That Works Your Way Illustration"
                width={1200}
                height={600}
                className="mx-auto h-auto w-full rounded-t-[20px]"
              />
            </div>
          </motion.div>
        </div>
      </ section>
  
    <section className="section overflow-hidden bg-white/80 backdrop-blur-sm">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          /* The card itself is the background container */
         className="relative overflow-hidden rounded-[24px]
  border border-purple-100
  shadow-[0_8px_48px_rgba(108,96,232,0.12)]
  min-h-[400px]
  sm:min-h-[580px]
  md:min-h-[660px]
  lg:min-h-[920px]
"
        >
          <Image
            src="/images/BuildYourERP.png"
            alt="Build your ERP with Formezy modules"
            fill
            sizes="100vw"
            className="
              hidden
              object-cover
              object-center
              opacity-40
              sm:opacity-50
              md:opacity-100
              md:object-bottom
              lg:block
            "
            priority={false}
          />

          <Image
            src="/images/m_cta_banner.webp"
            alt="Build your ERP with Formezy modules"
            fill
            sizes="100vw"
            className="
              object-cover
              object-center
              opacity-40
              sm:opacity-50
              md:opacity-100
              md:object-bottom
              lg:hidden
            "
            priority={false}
          />

          {/* Gradient overlay — strong at top for text legibility, fades out toward bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/20 to-transparent" />

          {/* Text content — top-center, sits above gradient */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="
                    absolute inset-0 z-10
                     flex flex-col items-center pt-8  md:justify-start
                    text-center
  gap-5 sm:gap-6
  px-5 sm:px-8 md:px-12 lg:px-16
  max-w-[900px]
  mx-auto
  
"
          >
            {/* <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-pill border border-purple-100 bg-purple-50 px-3.5 py-1.5 font-sora text-[13px] font-medium text-purple-primary">
                Build Your Own ERP
              </span>
            </motion.div> */}

            <motion.h2
              variants={fadeUp}
              className="
                max-w-[1000px]
                font-sora font-bold
                leading-[1.15]
                tracking-[-0.02em]

                text-[30px]
                sm:text-[38px]
                md:text-[48px]
                lg:text-[58px]
              "
            >
              <span className="text-[#2C0E3A]">
                Ready to Move{" "}
              </span>

              <span
                style={{
                  background:
                    "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Beyond Traditional Systems?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                max-w-[720px]
                font-sora text-[#6366A8]

                text-[15px]
                leading-[26px]

                sm:text-[16px]
                sm:leading-[28px]

                md:text-[17px]
              "
            >
              Design ERP-grade systems tailored to your business
              workflows, approvals, and operational structure—
              without the limitations of traditional software.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button
                href="/platform/use-cases"
                size="lg"
                className="rounded-[12px]"
              >
                Explore Solutions <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
      </>
  );
}