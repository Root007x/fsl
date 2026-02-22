"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants";
import { Star } from "lucide-react";

/** Duplicate items so infinite scroll has no gap */
function duplicateItems<T>(arr: T[], times: number): T[] {
  return Array.from({ length: times }, () => [...arr]).flat();
}

export function Testimonials() {
  const duplicated = duplicateItems(TESTIMONIALS, 3);

  return (
    <section className="py-20 md:py-28" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          align="center"
        />
      </Container>

      {/* Two-row marquee: row 1 scrolls left, row 2 scrolls right. Each row has 2 copies for seamless loop. */}
      <div className="marquee-container overflow-hidden space-y-4">
        <div className="marquee-container flex overflow-hidden">
          <div className="marquee-content flex gap-6 animate-scroll-left min-w-max">
            {duplicated.map((t, i) => (
              <div
                key={`row1-${t.id}-${i}`}
                className="shrink-0 w-[320px] md:w-[380px] rounded-2xl border border-gray-200 bg-white shadow-sm backdrop-blur-md p-6"
              >
                <div className="flex gap-1 mb-3" aria-hidden>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            ))}
            {duplicated.map((t, i) => (
              <div
                key={`row1-dup-${t.id}-${i}`}
                className="shrink-0 w-[320px] md:w-[380px] rounded-2xl border border-gray-200 bg-white shadow-sm backdrop-blur-md p-6"
                aria-hidden
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-container flex overflow-hidden">
          <div className="marquee-content flex gap-6 animate-scroll-right min-w-max">
            {duplicated.map((t, i) => (
              <div
                key={`row2-${t.id}-${i}`}
                className="shrink-0 w-[320px] md:w-[380px] rounded-2xl border border-gray-200 bg-white shadow-sm backdrop-blur-md p-6"
              >
                <div className="flex gap-1 mb-3" aria-hidden>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            ))}
            {duplicated.map((t, i) => (
              <div
                key={`row2-dup-${t.id}-${i}`}
                className="shrink-0 w-[320px] md:w-[380px] rounded-2xl border border-gray-200 bg-white shadow-sm backdrop-blur-md p-6"
                aria-hidden
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <p className="text-foreground/90 text-sm mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client logo strip */}
      <div className="mt-16 border-y border-gray-200 py-6 overflow-hidden marquee-container">
        <div className="marquee-content flex gap-12 items-center animate-scroll-left min-w-max">
          {["Artcon", "Labiba Builders", "BM Abroad Dreamers", "Crazy Dough", "Tech Marvels"].map((name) => (
            <span key={name} className="shrink-0 text-muted-foreground font-semibold text-lg">
              {name}
            </span>
          ))}
          {["Artcon", "Labiba Builders", "BM Abroad Dreamers", "Crazy Dough", "Tech Marvels"].map((name) => (
            <span key={`${name}-2`} className="shrink-0 text-muted-foreground font-semibold text-lg">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
