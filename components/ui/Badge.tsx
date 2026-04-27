import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  tone?: "purple" | "gold" | "teal" | "dark";
};

const toneCls: Record<NonNullable<Props["tone"]>, string> = {
  purple:
    "bg-purple-50 text-purple-primary border border-purple-200/70",
  gold: "bg-amber-50 text-amber-700 border border-amber-200",
  teal: "bg-cyan-50 text-cyan-700 border border-cyan-200",
  dark: "bg-ink text-white border border-ink",
};

export default function Badge({
  children,
  className,
  icon,
  tone = "purple",
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill px-3 py-1.5 text-[13px] font-medium",
        toneCls[tone],
        className,
      )}
    >
      {icon ? (
        <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
      ) : null}
      {children}
    </span>
  );
}
