"use client";

import { MotionConfig } from "framer-motion";

/** Disables all Framer Motion animations for the home page tree. */
export default function HomeMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="always">{children}</MotionConfig>;
}
