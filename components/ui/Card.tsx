import { cn } from "@/lib/cn";

type Props = {
  as?: "div" | "article" | "section";
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
};

export default function Card({
  as: Tag = "div",
  className,
  children,
  hover = true,
}: Props) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-surface-border bg-white shadow-card transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
