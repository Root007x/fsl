/** All site data for Falahsys */

import type { NavLink, Service, Project, Testimonial, Stat, ContactInfo, ProcessStep, ValueCard, TeamMember } from "@/types";

export const COMPANY = {
  name: "Falahsys",
  tagline: "Software & Digital Solutions for SMEs",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Homepage services (4 cards) */
export const SERVICES: Service[] = [
  {
    id: "creative-design",
    title: "Creative Design",
    description: "We create modern visual identities and marketing materials that help your brand stand out and communicate effectively with your audience.",
    icon: "Palette",
    subServices: [
      "Brand Identity",
      "Graphic Design",
      "Social Media Creatives",
      "Marketing Materials",
      "Video Editing & Motion Graphics",
    ],
    href: "/contact",
  },
  {
    id: "web-software-development",
    title: "Web & Software Development",
    description: "We design and build scalable digital products including websites, ERP systems, and custom business software tailored to your needs.",
    icon: "Globe",
    subServices: [
      "Custom Web Design & Development",
      "E-Commerce Website Development",
      "ERP Management Systems",
      "Website Maintenance & Support",
    ],
    href: "/contact",
  },
  {
    id: "mobile-app-development",
    title: "Mobile Application Development",
    description: "We build high-performance mobile applications that deliver seamless user experiences across Android and iOS platforms.",
    icon: "Smartphone",
    subServices: [
      "Custom Mobile Application Development",
      "UI/UX Design for Mobile Apps",
      "App Testing & Optimization",
      "App Maintenance & Updates",
    ],
    href: "/contact",
  },
  {
    id: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    description: "We help businesses grow online with data-driven marketing strategies and engaging content that attracts and converts customers.",
    icon: "TrendingUp",
    subServices: [
      "Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Content Writing",
      "Social Media Marketing",
      "Custom Video Marketing",
    ],
    href: "/contact",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Intelligent Systems",
    description: "We help businesses leverage artificial intelligence to automate operations, gain insights from data, and build smarter digital products that improve efficiency and customer experience.",
    icon: "Brain",
    subServices: [
      "AI Agent Development",
      "LLM Applications & Chatbots",
      "Predictive Analytics & Machine Learning",
      "Computer Vision Systems",
      "AI Workflow Automation",
    ],
    href: "/contact",
  },
];

/** Contact form service dropdown options */
export const CONTACT_SERVICE_OPTIONS = [
  { value: "e-commerce-website", label: "E-Commerce Website" },
  { value: "erp-management", label: "Erp Management" },
  { value: "custom-web-design-development", label: "Custom Web Design and Development" },
  { value: "custom-mobile-application", label: "Custom Mobile Application" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "seo", label: "Seo" },
  { value: "content-writing", label: "Content Writing" },
  { value: "creative-design", label: "Creative Design" },
  { value: "custom-video-making", label: "Custom Video Making" },
  { value: "ai-solutions", label: "AI Solutions & Intelligent Systems" },
];

export const STATS: Stat[] = [
  { value: "7+", label: "Projects" },
  { value: "5★", label: "Average Rating" },
  { value: "2", label: "Awards" },
  { value: "12+", label: "Happy Clients" },
];

export const PROJECTS: Project[] = [
  {
    id: "kepler-academy",
    name: "Kepler Academy",
    category: "Web Design",
    year: "2024",
    description: "Education platform delivering quality learning experiences.",
    tags: ["Website Design", "Web Development"],
    image: "https://placehold.co/800x450/f0f0f0/6b7280?text=Kepler+Academy",
  },
  {
    id: "skylab-education",
    name: "Skylab Education",
    category: "Web Design",
    year: "2024",
    description: "Innovative educational solutions and digital learning.",
    tags: ["Web Development"],
    image: "https://placehold.co/800x450/f0f0f0/6b7280?text=Skylab+Education",
  },
  {
    id: "sulekkho",
    name: "Sulekkho",
    category: "Development",
    year: "2024",
    description: "Digital platform for streamlined services.",
    tags: ["Web Development"],
    image: "https://placehold.co/800x450/f0f0f0/6b7280?text=Sulekkho",
  },
  {
    id: "bari-computer-trading",
    name: "Bari Computer Trading Co.",
    category: "Branding",
    year: "2024",
    description: "Computer and technology trading company.",
    tags: ["Brand Design"],
    image: "https://placehold.co/800x450/f0f0f0/6b7280?text=Bari+Computer+Trading",
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
  email: "falahsystemsltd@gmail.com",
  phone: "+880 1339-904830",
  address: "Ka/4, Mamata Complex, Basundhara R/A, Dhaka - 1229, Bangladesh",
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61585230855546", icon: "Facebook" },
    { name: "Instagram", href: "https://www.instagram.com/falahsysltd?igsh=MTRncW1xMW0zb2FjZQ==", icon: "Instagram" },
    { name: "WhatsApp", href: "https://wa.me/8801339904830", icon: "MessageCircle" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
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
  { id: "5", title: "Testing" },
  { id: "6", title: "Launch" },
  { id: "7", title: "Support" },
];

export const VALUE_CARDS: ValueCard[] = [
  { id: "1", title: "Precision", description: "Every pixel and line of code is crafted with care.", icon: "Target" },
  { id: "2", title: "Innovation", description: "We stay ahead with modern tools and practices.", icon: "Lightbulb" },
  { id: "3", title: "Reliability", description: "On-time delivery and consistent quality.", icon: "Shield" },
  { id: "4", title: "Transparency", description: "Clear communication at every step.", icon: "Eye" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "1", name: "S. M. Mahedi Hasan", role: "Founder & CEO", avatarInitial: "M", linkedIn: "#" },
  { id: "2", name: "Mahadi Hasan", role: "Co-Founder and Head of Artificial Intelligence", avatarInitial: "M", linkedIn: "#" },
  { id: "3", name: "Riad Safowan", role: "Co-Founder and Head of Full Stack Development", avatarInitial: "R", linkedIn: "#" },
];

export const TOOLS = {
  programming: ["Springboot", "AWS", "MongoDB", "Firebase", "Flutter", "Kotlin"],
  digitalMarketing: ["Google Analytics", "Facebook Ads Manager", "Google Ads", "Mailchimp"],
  graphicDesign: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Adobe After Effects", "Adobe Premiere Pro"],
};
