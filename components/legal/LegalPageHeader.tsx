"use client";

import PlatformBreadcrumb from "@/components/ui/PlatformBreadcrumb";

const gradientTextStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

type Props = {
  breadcrumbLabel: string;
  title: React.ReactNode;
  description: string;
};

/**
 * Legal / policy page hero — same breadcrumb pill and left-aligned heading as Overview.
 */
export default function LegalPageHeader({
  breadcrumbLabel,
  title,
  description,
}: Props) {
  return (
    <header className="flex w-full max-w-[1100px] flex-col items-start text-left">
      <PlatformBreadcrumb currentLabel={breadcrumbLabel} showPlatform={false} />

      <h1 className="font-sora text-[34px] font-bold leading-[1.08] tracking-tight text-[#2C0E3A] sm:text-[44px] md:text-[52px] lg:text-[64px] lg:leading-[1.05] xl:text-[72px] xl:leading-[1.02] 2xl:text-[80px] 2xl:leading-[84px]">
        {title}
      </h1>

      <p className="mt-6 max-w-[720px] font-sora text-[15px] font-normal leading-[24px] text-[#6366A8] sm:text-[16px]">
        {description}
      </p>
    </header>
  );
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return <span style={gradientTextStyle}>{children}</span>;
}
