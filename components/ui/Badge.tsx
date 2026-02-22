"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-muted text-foreground border border-gray-200",
        variant === "accent" && "bg-accent/20 text-accent border border-accent/30",
        className
      )}
    >
      {children}
    </span>
  );
}
