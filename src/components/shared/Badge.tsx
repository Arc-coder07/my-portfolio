import { type ReactNode } from "react";

type BadgeVariant = "tech" | "category" | "status-active" | "status-completed" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  tech: "bg-accent-light text-accent border border-border-accent",
  category: "bg-bg-tertiary text-text-secondary border border-border-subtle",
  "status-active": "bg-[hsl(160,70%,95%)] text-[var(--color-success)] dark:bg-[hsl(160,70%,12%)]",
  "status-completed": "bg-[hsl(210,80%,95%)] text-[var(--color-info)] dark:bg-[hsl(210,80%,12%)]",
  outline: "bg-transparent text-text-secondary border border-border",
};

export function Badge({ children, variant = "tech", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
