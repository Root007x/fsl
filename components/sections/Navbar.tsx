"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, COMPANY } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 font-bold text-xl text-foreground hover:text-accent transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label={`${COMPANY.name} - Home`}
            >
              {COMPANY.name}
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-accent",
                      pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                        ? "text-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Button href="/contact" variant="primary" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-2xl font-medium",
                        pathname === link.href ? "text-accent" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
