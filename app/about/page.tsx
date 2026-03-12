"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

function TechIcon({ icon, name }: { icon: string; name: string }) {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) return null;

  return (
    <Image
      src={`https://cdn.simpleicons.org/${icon}`}
      alt={name}
      width={18}
      height={18}
      unoptimized
      className="shrink-0 group-hover:scale-110 transition-transform"
      onError={() => setHasError(true)}
    />
  );
}

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
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Web Technologies", key: "webTech" as const },
              { label: "Libraries & Frameworks", key: "libraries" as const },
              { label: "Mobile Development", key: "mobileDev" as const },
              { label: "AI & Machine Learning", key: "ai" as const },
              { label: "DevOps & Cloud", key: "devops" as const },
              { label: "Digital Marketing", key: "digitalMarketing" as const },
              { label: "Graphic Design", key: "graphicDesign" as const },
            ].map(({ label, key }) => (
              <div key={key}>
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">{label}</h3>
                <div className="flex flex-wrap gap-3">
                  {TOOLS[key].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted border border-gray-200 hover:border-accent hover:shadow-md transition-all group cursor-default"
                    >
                      <TechIcon icon={tech.icon} name={tech.name} />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="relative w-full h-full rounded-full bg-muted border-2 border-accent/20 overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="128px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-accent">{member.avatarInitial}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-accent/80 mb-3">{member.role}</p>

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
