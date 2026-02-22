"use client";

import { motion } from "framer-motion";
import { GradientText } from "./GradientText";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {typeof title === "string" ? <GradientText>{title}</GradientText> : title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
