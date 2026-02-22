/** All site data for Falahsys */

import type { NavLink, Service, Project, Testimonial, Stat, ContactInfo, ProcessStep, ValueCard, TeamMember } from "@/types";

export const COMPANY = {
  name: "Falahsys",
  tagline: "We Build Digital Products That Make a Difference",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "creative-design",
    title: "Creative Design",
    description: "We craft distinctive brand identities and visual systems that resonate with your audience and stand out in the market.",
    icon: "Palette",
    subServices: [
      "Brand Identity",
      "Brand Guidelines",
      "Digital Materials",
      "Print Materials",
      "Illustrations & Iconography",
    ],
    href: "/#services",
  },
  {
    id: "web-design-development",
    title: "Web Design & Development",
    description: "From concept to launch, we build high-performance websites and e-commerce solutions that scale with your business.",
    icon: "Globe",
    subServices: [
      "Website Design",
      "Web Development",
      "E-commerce Solutions",
      "Maintenance & Support",
    ],
    href: "/#services",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your reach, engage your audience, and convert leads into loyal customers.",
    icon: "TrendingUp",
    subServices: [
      "Social Media Marketing",
      "Content Marketing",
      "SEO & SEM",
      "Email Marketing",
    ],
    href: "/#services",
  },
];

export const STATS: Stat[] = [
  { value: "7+", label: "Projects" },
  { value: "5★", label: "Average Rating" },
  { value: "2", label: "Awards" },
  { value: "12+", label: "Happy Clients" },
];

export const PROJECTS: Project[] = [
  {
    id: "artcon",
    name: "Artcon",
    category: "Web Design",
    year: "2023",
    description: "An art platform embracing artistic diversity and emerging talent.",
    tags: ["Website Design", "Web Development"],
  },
  {
    id: "labiba-builders",
    name: "Labiba Builders",
    category: "Branding",
    year: "2024",
    description: "A distinguished construction company with two decades of expertise.",
    tags: ["Brand Design"],
  },
  {
    id: "bm-abroad-dreamers",
    name: "BM Abroad Dreamers",
    category: "Development",
    year: "2023",
    description: "Study abroad and tourism services platform.",
    tags: ["Web Development"],
  },
  {
    id: "crazy-dough",
    name: "Crazy Dough",
    category: "Branding",
    year: "2023",
    description: "Immersive pizza brand experience and identity.",
    tags: ["Branding"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "They perfectly captured our vision while ensuring a smooth user experience.",
    author: "ARK Reepon",
    role: "Founder & CEO",
    company: "Artcon",
    rating: 5,
  },
  {
    id: "2",
    quote: "I love their creativity. Quality full-service delivery.",
    author: "Hasan Morshadul",
    role: "CEO",
    company: "BM Abroad Dreamers",
    rating: 5,
  },
  {
    id: "3",
    quote: "Multiple successful projects together. Will keep working with them.",
    author: "Shipon Hossain",
    role: "CEO",
    company: "Tech Marvels",
    rating: 5,
  },
  {
    id: "4",
    quote: "Understood our brand message perfectly, delivered beyond expectations.",
    author: "Mahadi Hasan",
    role: "Co-Founder",
    company: "Crazy Dough",
    rating: 5,
  },
  {
    id: "5",
    quote: "Professionalism and attention to detail that surpassed our expectations.",
    author: "Azizul Haque",
    role: "MD",
    company: "Labiba Builders",
    rating: 5,
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "hello@falahsys.com",
  phone: "+1 (555) 000-0000",
  address: "Your City, Your Country",
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "GitHub", href: "https://github.com", icon: "Github" },
    { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { name: "Clutch", href: "https://clutch.co", icon: "ExternalLink" },
  ],
};

export const SERVICE_OPTIONS = SERVICES.map((s) => ({ value: s.id, label: s.title }));

export const PORTFOLIO_FILTERS = [
  "All",
  "Branding",
  "Web Design",
  "Development",
] as const;

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "1", title: "Discovery" },
  { id: "2", title: "Strategy" },
  { id: "3", title: "Design" },
  { id: "4", title: "Development" },
  { id: "5", title: "Launch" },
  { id: "6", title: "Support" },
];

export const VALUE_CARDS: ValueCard[] = [
  { id: "1", title: "Precision", description: "Every pixel and line of code is crafted with care.", icon: "Target" },
  { id: "2", title: "Innovation", description: "We stay ahead with modern tools and practices.", icon: "Lightbulb" },
  { id: "3", title: "Reliability", description: "On-time delivery and consistent quality.", icon: "Shield" },
  { id: "4", title: "Transparency", description: "Clear communication at every step.", icon: "Eye" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "1", name: "Team Lead", role: "Founder & Creative Director", avatarInitial: "T", linkedIn: "#" },
  { id: "2", name: "Tech Lead", role: "Head of Development", avatarInitial: "D", linkedIn: "#" },
  { id: "3", name: "Design Lead", role: "Head of Design", avatarInitial: "D", linkedIn: "#" },
];
