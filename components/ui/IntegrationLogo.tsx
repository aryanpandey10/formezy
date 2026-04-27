import { cn } from "@/lib/cn";

type Props = {
  name: string;
  short: string;
  highlighted?: boolean;
  className?: string;
};

export default function IntegrationLogo({
  name,
  short,
  highlighted = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl border bg-white shadow-card transition-all",
          highlighted
            ? "border-purple-primary shadow-[0_8px_30px_rgba(108,99,255,0.25)] ring-2 ring-purple-primary/20"
            : "border-surface-border",
        )}
      >
        <span
          className={cn(
            "text-[13px] font-extrabold",
            highlighted ? "text-purple-primary" : "text-ink",
          )}
        >
          {short}
        </span>
      </div>
      <span
        className={cn(
          "whitespace-nowrap text-[11px] font-medium",
          highlighted ? "text-purple-primary" : "text-ink-secondary",
        )}
      >
        {name}
      </span>
    </div>
  );
}
