/** All TypeScript interfaces for Falahsys */

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  subServices: string[];
  href: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  imagePlaceholder?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
  socials: SocialLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarInitial: string;
  linkedIn?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description?: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}
