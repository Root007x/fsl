"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Animates text word-by-word with stagger */
export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap gap-x-2", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * stagger,
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
