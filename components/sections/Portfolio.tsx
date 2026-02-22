"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PROJECTS, STATS, PORTFOLIO_FILTERS } from "@/constants";
import { cn } from "@/lib/utils";

type Filter = (typeof PORTFOLIO_FILTERS)[number];

function getFilteredProjects(filter: Filter) {
  if (filter === "All") return PROJECTS;
  if (filter === "Branding") return PROJECTS.filter((p) => p.category === "Branding");
  if (filter === "Web Design") return PROJECTS.filter((p) => p.category === "Web Design");
  if (filter === "Development") return PROJECTS.filter((p) => p.category === "Development");
  return PROJECTS;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filtered = getFilteredProjects(activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 scroll-mt-20 bg-muted/50" aria-labelledby="portfolio-heading">
      <Container>
        <SectionHeading
          id="portfolio-heading"
          eyebrow="Our Work"
          title="Projects That Speak For Themselves"
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 mb-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-2xl font-bold text-accent">{stat.value}</span>
              <span className="text-muted-foreground ml-2">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PORTFOLIO_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-accent text-background"
                  : "bg-muted text-muted-foreground hover:bg-gray-100 hover:text-foreground border border-gray-200"
              )}
              aria-pressed={activeFilter === filter}
              aria-label={`Filter by ${filter}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid with layout animation */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm backdrop-blur-md"
              >
                {/* Gradient placeholder image */}
                <div
                  className="aspect-video bg-gradient-to-br from-accent/30 via-accent/10 to-transparent"
                  aria-hidden
                />
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-foreground font-bold">{project.name}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={`${project.id}-${tag}-${tagIndex}`}
                        className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-accent font-medium flex items-center gap-2">
                    View Project →
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="/#portfolio" variant="ghost" size="md">
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
