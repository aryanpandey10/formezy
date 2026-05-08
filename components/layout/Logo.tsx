import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  tone?: "light" | "dark";
};

export default function Logo({ className, tone = "light" }: Props) {
  return (
    <Link
      href="/"
      aria-label="Formezy home"
      className={cn("group inline-flex items-center", className)}
    >
      {tone === "dark" ? (
        <Image
          src="/images/FooterLogo.svg"
          alt="Formezy"
          width={140}
          height={40}
          className="h-9 w-auto object-contain brightness-200 invert"
          priority
        />
      ) : (
        <Image
          src="/images/HeaderLogo.svg"
          alt="Formezy"
          width={140}
          height={40}
          className="h-9 w-auto object-contain"
          priority
        />
      )}
    </Link>
  );
}
