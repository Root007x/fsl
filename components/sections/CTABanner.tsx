"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Call to action"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(0,98,230,0.08) 0%, transparent 70%)`,
        }}
      />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to turn your ideas into reality?
          </h2>
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s Talk
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
