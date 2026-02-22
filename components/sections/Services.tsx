"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SERVICES } from "@/constants";
import { Palette, Globe, TrendingUp, ArrowRight } from "lucide-react";

const iconMap = { Palette, Globe, TrendingUp };

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-20" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Solving Complex Problems With Design & Technology"
          id="services-heading"
        />
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card
                  as="article"
                  className="group h-full flex flex-col"
                >
                  <div className="mb-4 inline-flex w-12 h-12 rounded-xl bg-accent/20 items-center justify-center text-accent transition-transform duration-300 group-hover:rotate-6">
                    <Icon size={24} aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.subServices.map((sub) => (
                      <li key={sub} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
