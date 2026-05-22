import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import VideoGrid, { type VideoItem } from "@/components/sections/VideoGrid";
import { youtubeEmbedUrl } from "@/lib/youtube";
import {
  NumberFieldThumb,
  DateBoxThumb,
  TextBoxThumb,
  TransferEntryThumb,
  RaiseTicketThumb,
  UserRolesThumb,
} from "@/components/illustrations/VideoThumbs";

export const metadata: Metadata = {
  title: "Videos | Formezy",
  description:
    "Visual insights into how businesses build, automate and scale with Formezy. Watch product walkthroughs, explainer videos and real-world use cases.",
};

const YT = {
  numberField: "https://youtu.be/wwm9jgJbwJQ?si=W4yKq-TlVEaihLNf",
  dateBox: "https://youtu.be/iOORMK1uSy0?si=N3FpEc33GMU2GPEZ",
  textBox: "https://youtu.be/5DcUxxiNKKM?si=efc7pr4aPSGR5pPe",
  transfer: "https://youtu.be/xqZPOOJmiQY?si=Ln179W13vaFMSF58",
  ticket: "https://youtu.be/vpTL6-1203g?si=GQhmGg4YM-rGStK8",
  sales : "https://youtu.be/hrdww4hOy7w?si=yTr4KBHEjYffTN25",
} as const;

const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Best Enterprise Workflow Automation",
    step: "Step 1",
    thumb: <NumberFieldThumb />,
    videoUrl: youtubeEmbedUrl(YT.numberField),
  },
  {
    id: "v2",
    title: "How to Add a Number Field in Formezy",
    
    thumb: <DateBoxThumb />,
    videoUrl: youtubeEmbedUrl(YT.dateBox),
  },
  {
    id: "v3",
    title: "How to Add a Date Box in Inquiry Form", 
    thumb: <TextBoxThumb />,
    videoUrl: youtubeEmbedUrl(YT.textBox),
  },
  {
    id: "v4",
    title: "How to Add a Custom Text Box",
    step: "Step 1",
    thumb: <TransferEntryThumb />,
    videoUrl: youtubeEmbedUrl(YT.transfer),
  },
  {
    id: "v5",
    title: "How to Transfer an Entry to Another User in Formezy",
    thumb: <RaiseTicketThumb />,
    videoUrl: youtubeEmbedUrl(YT.ticket),
  },
  {
    id: "v6",
    title: "How to Add and Manage Salesperson Parameters in Formezy",
    thumb: <UserRolesThumb />,
    videoUrl: youtubeEmbedUrl(YT.sales),
  },
];

export default function VideosPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-8">
        <div className="container-app">
          {/* Breadcrumbs */}
          <nav
            className="mb-6 flex items-center gap-1.5 font-sora text-[13px] text-[#6366A8]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#2C0E3A]">
              Home
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <Link href="/resources/blogs" className="hover:text-[#2C0E3A]">
              Resources
            </Link>
            <ChevronRight size={13} className="opacity-50" />
            <span className="font-semibold text-[#2C0E3A]">Videos</span>
          </nav>

          {/* Heading */}
          <h1
            className="font-sora text-[32px] font-bold leading-[1.15] text-[#2C0E3A] md:text-[48px] lg:text-[58px]"
          >
            See Formezy{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #708FF4 0%, #6C60E8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in Action
            </span>
          </h1>

          {/* Description */}
          <div className="mt-4 max-w-2xl space-y-1">
            <p className="font-sora text-[15px] font-semibold text-[#2C0E3A]">
              Visual insights into how businesses build, automate, and scale
              with Formezy.
            </p>
            <p className="font-sora text-[14px] leading-[24px] text-[#6366A8]">
              Watch product walkthroughs, explainer videos, and real-world use
              cases that show how Formezy transforms everyday business
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Video Grid ── */}
      <section className="pb-20">
        <div className="container-app">
          <VideoGrid videos={videos} />
        </div>
      </section>
    </>
  );
}
