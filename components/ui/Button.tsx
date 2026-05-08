"use client";

import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";
import { forwardRef } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "dark"
  | "white"
  | "brand";
export type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const variantCls: Record<ButtonVariant, string> = {
  primary:
    "bg-[#2C0E3A] text-white hover:bg-[#3d1650] shadow-[0_4px_16px_rgba(44,14,58,0.35)] hover:shadow-[0_8px_24px_rgba(44,14,58,0.45)]",
  secondary:
    "border border-purple-primary text-purple-primary bg-white/60 backdrop-blur hover:bg-purple-50",
  ghost: "text-purple-primary underline underline-offset-4 hover:text-purple-dark",
  dark:
    "bg-[#2C0E3A] text-white hover:bg-[#3d1650] shadow-[0_4px_16px_rgba(44,14,58,0.35)]",
  white:
    "bg-white text-purple-primary hover:bg-purple-50 shadow-[0_8px_24px_rgba(15,15,26,0.18)]",
  brand:
    "bg-purple-primary text-white hover:bg-purple-dark shadow-cta hover:shadow-cta-hover",
};

const sizeCls: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-[10px] py-[15px] text-[15px]",
  lg: "px-[30px] py-[15px] text-base",
};

type ButtonAnchorProps = BaseProps & {
  href: string;
} & Omit<HTMLMotionProps<"a">, "href" | "ref">;

type ButtonNativeProps = BaseProps & {
  href?: undefined;
} & Omit<HTMLMotionProps<"button">, "ref">;

export type ButtonProps = ButtonAnchorProps | ButtonNativeProps;

const baseCls =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, href, ...props },
  ref,
) {
  const classes = cn(baseCls, variantCls[variant], sizeCls[size], className);

  const hover = { scale: 1.02 };
  const tap = { scale: 0.98 };

  if (href) {
    const anchorProps = props as Omit<HTMLMotionProps<"a">, "href" | "ref">;
    // Intercept #demo links to open the BookDemo modal instead of navigating
    if (href === "#demo") {
      return (
        <motion.button
          whileHover={hover}
          whileTap={tap}
          className={classes}
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("openBookDemo"));
            }
          }}
          {...(props as HTMLMotionProps<"button">)}
        >
          {children}
        </motion.button>
      );
    }
    return (
      <motion.span whileHover={hover} whileTap={tap} className="inline-flex">
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      whileHover={hover}
      whileTap={tap}
      className={classes}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
});

export default Button;
