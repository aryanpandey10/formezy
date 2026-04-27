"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export type VideoItem = {
  id: string;
  title: string;
  step?: string;
  thumb: React.ReactNode;
  videoUrl: string;
};

type Props = {
  videos: VideoItem[];
};

export default function VideoGrid({ videos }: Props) {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {videos.map((v) => (
          <motion.button
            key={v.id}
            variants={fadeUp}
            onClick={() => setActive(v)}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-[20px] border border-purple-100/60 bg-white text-left shadow-[0_4px_20px_rgba(108,96,232,0.08)] transition-shadow hover:shadow-[0_8px_40px_rgba(108,96,232,0.18)]"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden bg-purple-50">
              {v.thumb}

              {/* Step badge */}
              {v.step && (
                <span className="absolute right-3 top-3 rounded-[8px] border border-white/60 bg-white/95 px-2.5 py-1 font-sora text-[11px] font-bold text-[#2C0E3A] shadow-sm backdrop-blur-sm">
                  {v.step}
                </span>
              )}

              {/* Gradient overlay */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"
              />

              {/* Play button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#1a1030]/80 text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] ring-[3px] ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#6C60E8]">
                  <Play size={22} fill="white" className="ml-[3px]" />
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="line-clamp-2 font-sora text-[15px] font-semibold leading-[22px] text-[#2C0E3A] md:text-[16px]">
                {v.title}
              </h3>
              <span className="mt-auto font-sora text-[12px] font-semibold text-[#6C60E8] transition-colors group-hover:text-[#2C0E3A]">
                Watch video →
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <VideoModal
        open={!!active}
        onClose={() => setActive(null)}
        videoUrl={active?.videoUrl ?? ""}
        title={active?.title ?? ""}
      />
    </>
  );
}
