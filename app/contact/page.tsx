"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO, CONTACT_SERVICE_OPTIONS } from "@/constants";
import type { ContactFormData, ContactFormErrors } from "@/types";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, MessageCircle, Check } from "lucide-react";

const socialIcons = { Linkedin, Facebook, Instagram, MessageCircle };

function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Invalid email address";
  if (!data.company.trim()) errors.company = "Company is required";
  if (!data.service) errors.service = "Please select a service";
  if (data.budget.trim() && !/^\d+$/.test(data.budget.trim())) errors.budget = "Budget must be numeric only";
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Check className="text-accent" size={40} aria-hidden />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out. We&apos;ll get back to you soon.
            </p>
            <Button href="/" variant="ghost">
              Back to Home
            </Button>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      <Container className="mb-16">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Ready To Build Something Great?"
          align="center"
        />
      </Container>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>
            </Card>
            <Card className="p-6">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </a>
            </Card>
            {CONTACT_INFO.address && (
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-foreground font-medium">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </Card>
            )}
            <div className="flex gap-4 pt-2">
              {CONTACT_INFO.socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                if (!Icon) return null;
                const isPlaceholder = social.href === "#";
                return isPlaceholder ? (
                  <span
                    key={social.name}
                    className="w-10 h-10 rounded-lg bg-muted border border-gray-200 flex items-center justify-center text-muted-foreground/60 cursor-not-allowed"
                    title="Coming soon"
                    aria-label={`${social.name} (Coming soon)`}
                  >
                    <Icon size={20} />
                  </span>
                ) : (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted border border-gray-200 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company *
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Company name"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData((p) => ({ ...p, service: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="">Select a service</option>
                    {CONTACT_SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.service}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Budget (optional)
                  </label>
                  <input
                    id="budget"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={formData.budget}
                    onChange={(e) => setFormData((p) => ({ ...p, budget: e.target.value.replace(/\D/g, "") }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Numeric only (e.g. 5000)"
                    aria-invalid={!!errors.budget}
                    aria-describedby={errors.budget ? "budget-error" : undefined}
                  />
                  {errors.budget && (
                    <p id="budget-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.budget}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-y min-h-[120px]"
                    placeholder="Tell us about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
