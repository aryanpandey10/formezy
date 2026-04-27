import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  children?: React.ReactNode;
  url?: string;
};

export default function BrowserMock({
  className,
  children,
  url = "formezy.io/app",
}: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-surface-border bg-white shadow-card-hover",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-surface-border bg-surface-muted px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 flex h-6 flex-1 items-center justify-center rounded-md bg-white px-3 text-[11px] text-ink-muted">
          {url}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
