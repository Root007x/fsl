import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/constants";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params if you want these exported statically
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <Container>
          <div className="max-w-4xl">
            <Link 
              href="/#portfolio" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                {project.category}
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground font-medium">{project.year}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {project.name}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </Container>
      </section>


      {/* Content Columns */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Col: Details & Tags */}
            <div className="md:col-span-1 space-y-10">
              {project.client && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 border-b border-gray-100 pb-2">Client</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              )}
              
              {(project.servicesProvided || project.tags) && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 border-b border-gray-100 pb-2">Services Provided</h3>
                  <ul className="space-y-2">
                    {(project.servicesProvided || project.tags).map(tag => (
                      <li key={tag} className="text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologiesUsed && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 border-b border-gray-100 pb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologiesUsed.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {project.creativeTools && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 border-b border-gray-100 pb-2">Creative & Marketing Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.creativeTools.map(tool => (
                      <span key={tool} className="px-3 py-1.5 bg-accent/5 rounded-md text-sm font-medium text-muted-foreground">{tool}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Story / Narrative */}
            <div className="md:col-span-2 prose prose-lg prose-slate max-w-none">
              {project.introduction && (
                <>
                  <h2 className="text-3xl font-bold text-foreground mb-6 mt-0">Introduction</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {project.introduction}
                  </p>
                </>
              )}

              {project.challenges && (
                <>
                  <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {project.challenges}
                  </p>
                </>
              )}

              {project.solution && (
                <>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {project.solution}
                  </p>
                </>
              )}

              {project.keyResults && (
                <div className="bg-muted/50 p-8 rounded-2xl border border-gray-100 my-10">
                  <h3 className="text-xl font-bold text-foreground mb-6">Key Results</h3>
                  <ul className="space-y-4 m-0 p-0 list-none">
                    {project.keyResults.map((result, i) => (
                      <li key={i} className="flex items-start gap-4 p-0 m-0">
                        <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground mt-1 leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-gray-100">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to start your own project?</h2>
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s Talk
          </Button>
        </Container>
      </section>
    </article>
  );
}
