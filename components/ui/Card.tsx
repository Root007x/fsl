"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, className, as: Component = "div" }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-gray-200 bg-white shadow-sm backdrop-blur-md p-6 transition-all duration-300",
        "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10",
        className
      )}
    >
      {children}
    </Component>
  );
}
