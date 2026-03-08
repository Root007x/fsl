"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  PROCESS_STEPS,
  VALUE_CARDS,
  TEAM_MEMBERS,
  TOOLS,
} from "@/constants";
import { Target, Lightbulb, Shield, Eye } from "lucide-react";

const valueIcons = { Target, Lightbulb, Shield, Eye };

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              We Are Falahsys — A Team Focused on Building Smart Digital Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Falahsys, we help businesses grow by building powerful digital systems and modern online experiences. From custom websites and ERP solutions to mobile applications and digital marketing, we combine technology, creativity, and strategic thinking to deliver reliable solutions that drive real business growth.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What Drives Us"
          />
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {VALUE_CARDS.map((card) => {
              const Icon = valueIcons[card.icon as keyof typeof valueIcons] ?? Target;
              return (
                <motion.div
                  key={card.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className="h-full text-center">
                    <div className="inline-flex w-12 h-12 rounded-xl bg-accent/20 items-center justify-center text-accent mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="From Idea to Launch"
          />
          <motion.div
            className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-6 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-4"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <span className="text-foreground font-medium">{step.title}</span>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="hidden md:inline text-muted-foreground/60 mx-2">→</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Tools */}
      <section className="py-16 md:py-24 bg-muted/50">
        <Container>
          <SectionHeading
            eyebrow="Tools"
            title="Technologies We Use"
          />
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {TOOLS.programming.map((tech) => (
                  <span className="px-4 py-2 rounded-lg bg-muted border border-gray-200 text-muted-foreground font-medium text-sm" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Digital Marketing</h3>
              <div className="flex flex-wrap gap-2">
                {TOOLS.digitalMarketing.map((tech) => (
                  <span className="px-4 py-2 rounded-lg bg-muted border border-gray-200 text-muted-foreground font-medium text-sm" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Graphic Design</h3>
              <div className="flex flex-wrap gap-2">
                {TOOLS.graphicDesign.map((tech) => (
                  <span className="px-4 py-2 rounded-lg bg-muted border border-gray-200 text-muted-foreground font-medium text-sm" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind Falahsys"
          />
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {TEAM_MEMBERS.map((member, index) => (
              <motion.article
                key={member.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`text-center ${index === 0 ? "md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}`}
              >
                <div
                  className="w-24 h-24 rounded-full bg-accent/20 text-accent text-2xl font-bold flex items-center justify-center mx-auto mb-4"
                  aria-hidden
                >
                  {member.avatarInitial}
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>

              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <Container>
          <p className="text-xl text-muted-foreground mb-6">Ready to start your project?</p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </Container>
      </section>
    </div>
  );
}
