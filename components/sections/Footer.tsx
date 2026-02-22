"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY, CONTACT_INFO } from "@/constants";
import { Linkedin, Github, Facebook, ExternalLink } from "lucide-react";

const socialIcons = { Linkedin, Github, Facebook, ExternalLink };

export function Footer() {
  const servicesLinks = [
    { label: "Creative Design", href: "/#services" },
    { label: "Web Design & Development", href: "/#services" },
    { label: "Digital Marketing", href: "/#services" },
  ];
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Portfolio", href: "/#portfolio" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-muted/50" role="contentinfo">
      <div className="border-t border-accent/20" />
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-1.5 font-bold text-xl text-foreground hover:text-accent transition-colors">
              {COMPANY.name}
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">{COMPANY.tagline}</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Social</h3>
            <ul className="flex gap-4">
              {CONTACT_INFO.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons] ?? ExternalLink;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors p-1 rounded focus-visible:ring-2 focus-visible:ring-accent"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
