"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/80 shadow-lg shadow-accent/20 hover:shadow-accent/30",
    ghost:
      "bg-transparent text-foreground border border-gray-300 hover:border-accent hover:bg-muted",
    outline:
      "bg-transparent text-accent border-2 border-accent hover:bg-accent/10",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
