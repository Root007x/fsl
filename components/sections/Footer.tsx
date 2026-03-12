"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY, CONTACT_INFO } from "@/constants";
import { Linkedin, Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";
import { PrivacyModal } from "@/components/sections/PrivacyModal";
import { TermsModal } from "@/components/sections/TermsModal";

const socialIcons = { Linkedin, Facebook, Instagram, Twitter };

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const servicesLinks = [
    { label: "Website Design & Dev", href: "/#services" },
    { label: "ERP Software", href: "/#services" },
    { label: "Mobile Application", href: "/#services" },
    { label: "Digital Marketing", href: "/#services" },
  ];
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Portfolio", href: "/#portfolio" },
  ];

  return (
    <footer className="bg-[#070B18] text-white py-12 md:py-16" role="contentinfo">
      <Container>
        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight"
            >
              Ready to craft your next <span className="text-accent">digital experience?</span>
            </motion.h2>
            <p className="text-white/60 text-base md:text-lg border-l-2 border-accent pl-4">
              Let&apos;s turn your vision into reality. We&apos;re always looking for new challenges.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Button href="/contact" variant="primary" size="md" className="rounded-full px-6 py-4 text-base group">
              Start a Project 
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 border-b border-white/10 pb-12 mb-8">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block font-bold text-2xl tracking-tight mb-4 text-white hover:text-accent transition-colors">
              {COMPANY.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed text-sm md:text-base">
              Software & Digital Solutions for SMEs
            </p>
            <div className="flex gap-3">
              {CONTACT_INFO.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                if (!Icon) return null;
                const isPlaceholder = social.href === "#";
                return (
                  <div key={social.name}>
                    {isPlaceholder ? (
                      <span
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/40 cursor-not-allowed bg-white/5"
                        title="Coming soon"
                      >
                        <Icon size={18} />
                      </span>
                    ) : (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white hover:text-[#070B18] hover:bg-white transition-all transform hover:-translate-y-1"
                        aria-label={social.name}
                      >
                        <Icon size={18} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group relative inline-flex text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group relative inline-flex text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="group relative inline-flex text-accent hover:text-white transition-colors mt-2 text-sm">
                  {CONTACT_INFO.email}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {COMPANY.name}. Crafted with precision.
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#070B18] hover:bg-white transition-colors cursor-pointer"
            >
              <ArrowUpRight className="transform -rotate-45" size={16} />
            </div>
          </div>
        </div>
      </Container>
      
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}
