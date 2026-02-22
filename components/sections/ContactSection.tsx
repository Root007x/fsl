"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-20" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Get In Touch"
          title="Ready To Build Something Great?"
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 justify-center items-center"
        >
          <Button href="/contact" variant="primary" size="lg">
            Go to Contact Page
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
