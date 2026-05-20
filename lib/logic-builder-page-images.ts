import { publicAssetUrl } from "@/lib/webp-assets";

const lb = (file: string) => publicAssetUrl("images", "Logic Builder", "Webp", file);

export const logicBuilderPageImages = {
  hero: lb("logic_builder_banner.webp"),
  build: lb("logic_builder_build.webp"),
  designed: lb("logic_builder_designed.webp"),
  keyCapabilities: lb("logic_builder_key_Capabilities.webp"),
  control: lb("logic_builder_control.webp"),
  built: lb("logic_builder_built.webp"),
  cta: lb("logic_builder_CTA.webp"),
} as const;
