import { notFound } from "next/navigation";
import Image from "next/image";
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

      {/* Featured Image */}
      <section className="py-10">
        <Container>
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} featured image`}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
            )}
          </div>
        </Container>
      </section>

      {/* Content Columns */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Col: Details & Tags */}
            <div className="md:col-span-1 space-y-10">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 border-b border-gray-100 pb-2">Client</h3>
                <p className="text-muted-foreground">{project.name} Inc.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 border-b border-gray-100 pb-2">Services Provided</h3>
                <ul className="space-y-2">
                  {project.tags.map(tag => (
                    <li key={tag} className="text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 border-b border-gray-100 pb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium text-muted-foreground">React</span>
                  <span className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium text-muted-foreground">Next.js</span>
                  <span className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium text-muted-foreground">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Right Col: Story / Narrative */}
            <div className="md:col-span-2 prose prose-lg prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <div className="bg-muted/50 p-8 rounded-2xl border border-gray-100 my-10">
                <h3 className="text-xl font-bold text-foreground mb-4">Key Results</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent font-bold">1</span>
                    Increased user engagement by 150%
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent font-bold">2</span>
                    Reduced load times from 4.2s to 0.8s
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent font-bold">3</span>
                    Successfully launched on time and within budget
                  </li>
                </ul>
              </div>
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
