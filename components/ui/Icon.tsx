"use client";

import {
  Palette,
  Globe,
  TrendingUp,
  Linkedin,
  Github,
  Facebook,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Palette,
  Globe,
  TrendingUp,
  Linkedin,
  Github,
  Facebook,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Star,
  ArrowRight,
} as const;

type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component className={cn("shrink-0", className)} size={size} aria-hidden />;
}
