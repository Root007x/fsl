"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80",
        className
      )}
    >
      {children}
    </span>
  );
}
