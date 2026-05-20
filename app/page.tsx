import HomePreloads from "@/components/sections/home/HomePreloads";
import HomeHero from "@/components/sections/home/HomeHero";
import TrustedBy from "@/components/sections/home/TrustedBy";
import WhatIsFormezy from "@/components/sections/home/WhatIsFormezy";
import BuildPowerful from "@/components/sections/home/BuildPowerful";
import WhyChoose from "@/components/sections/home/WhyChoose";
import AskEzyHomeSection from "@/components/sections/home/AskEzyHomeSection";
import CoreCapabilities from "@/components/sections/home/CoreCapabilities";
import IndustrySolutions from "@/components/sections/home/IndustrySolutions";
import Testimonials from "@/components/sections/home/Testimonials";
import BuildErp from "@/components/sections/home/BuildErp";
import Integrations from "@/components/sections/home/Integrations";

export default function HomePage() {
  return (
    <>
      <HomePreloads />
      <HomeHero />
      <TrustedBy />
      <WhatIsFormezy />
      <BuildPowerful />
      <WhyChoose />
      <AskEzyHomeSection />
      <CoreCapabilities />
      <IndustrySolutions />
      <Testimonials />
      <BuildErp />
      <Integrations />
    </>
  );
}
