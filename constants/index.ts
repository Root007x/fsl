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
  {
    id: "devops-scalable-infrastructure",
    title: "DevOps & Scalable Infrastructure",
    description: "We build reliable, automated, and scalable infrastructure that ensures your applications run efficiently, deploy faster, and handle growth smoothly.",
    icon: "Server",
    subServices: [
      "CI/CD Pipeline Setup",
      "Docker & Containerization",
      "Cloud Infrastructure (AWS / GCP / Azure)",
      "Infrastructure as Code (Terraform / Ansible)",
      "Monitoring & Performance Optimization",
      "Microservices Deployment",
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
    introduction: "Kepler Academy is an education platform delivering high-quality learning experiences through a modern digital ecosystem powered by LMS and ERP solutions.",
    client: "Kepler Academy",
    servicesProvided: [
      "Website Design",
      "Web Development",
      "LMS Development",
      "ERP System",
      "Digital Marketing Support",
      "Creative Content"
    ],
    technologiesUsed: [
      "React JS",
      "Next JS",
      "Express",
      "Node.js",
      "Spring Boot",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS"
    ],
    creativeTools: [
      "Facebook Pixel",
      "Google Analytics",
      "Facebook Ads Manager",
      "Google Ads",
      "Mailchimp",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Adobe After Effects",
      "Adobe Premiere Pro"
    ],
    challenges: "Kepler Academy faced several barriers in growing its education business online. The institution had limited digital presence, which made it difficult to reach students beyond their local network. Student enrollment and lead management were handled manually, causing inefficiencies and lost inquiries. The absence of a structured LMS and ERP system made it hard to manage courses, student data, and academic operations effectively. Additionally, their marketing campaigns lacked strong creative content and data tracking, resulting in low engagement and poor conversion rates.",
    solution: "Falahsys delivered a complete digital transformation by designing and developing a modern, scalable website integrated with a powerful LMS and ERP system. This allowed Kepler Academy to manage courses, students, and operations from a single platform. We also implemented data-driven digital marketing strategies using tools like Facebook Pixel, Google Analytics, and targeted ad campaigns. Creative content and optimized marketing assets were developed to strengthen brand credibility and attract more students.",
    keyResults: [
      "Significant increase in online student inquiries and enrollments",
      "Automated student registration, course management, and academic operations",
      "Improved lead tracking and higher marketing conversion rates",
      "Stronger online brand presence and credibility",
      "Expanded reach beyond local geographic boundaries",
      "Scalable infrastructure for future growth"
    ]
  },
  {
    id: "skylab-education",
    name: "Skylab Education",
    category: "Web Design",
    year: "2024",
    description: "Innovative educational solutions and digital learning.",
    tags: ["Web Development"],
    image: "https://placehold.co/800x450/f0f0f0/6b7280?text=Skylab+Education",
    introduction: "Skylab Education is a Bangladesh-based study abroad consultancy helping students pursue higher education in destinations such as the USA, UK, Australia, Canada, New Zealand, Europe, and Asia.",
    servicesProvided: [
      "Web Design",
      "Web Development",
      "ERP System",
      "LMS",
      "Digital Marketing",
      "Creative Content"
    ],
    challenges: "Skylab Education faced difficulties managing a high volume of student inquiries from multiple channels including social media, phone calls, and in-person visits. Their previous system lacked a centralized platform to manage student applications and counseling efficiently. Manual record keeping made it difficult to track documents, applications, and communication with students, which slowed down operations and delayed responses.",
    solution: "Falahsys developed a modern website and implemented a customized ERP system to centralize student data, track application processes, and manage counseling workflows. The integrated platform streamlined operations and allowed the team to handle leads, documents, and student communication more efficiently.",
    keyResults: [
      "Improved online credibility and professional digital presence",
      "Faster response time to student inquiries",
      "Centralized student application and document tracking",
      "Reduced manual workload through automation",
      "Organized management of counseling processes",
      "Better operational efficiency and scalability"
    ]
  },
  {
    id: "sulekkho",
    name: "Sulekkho",
    category: "Development",
    year: "2024",
    description: "Digital platform for streamlined services.",
    tags: ["Web Development"],
    image: "https://placehold.co/800x450/f0f0f0/6b7280?text=Sulekkho",
    introduction: "Sulekkho is a Bangladesh-based fashion and lifestyle brand offering over 1,900 products including clothing, jewelry, ornaments, and handcrafted items. The company also operates Sulekkho Fine Art & Craft Coaching Center as a sister concern.",
    servicesProvided: [
      "Web Design",
      "Web Development",
      "ERP System",
      "LMS",
      "Mobile Application",
      "Digital Marketing",
      "Creative Content"
    ],
    challenges: "Sulekkho faced challenges managing a large product catalog and maintaining a strong online presence. Inventory, customer inquiries, and product management were handled through scattered systems, making operations inefficient. Additionally, their Fine Art & Craft Coaching Center required a separate system to manage courses and students. Without a unified platform, scaling both the retail and education businesses was becoming difficult.",
    solution: "Falahsys built a modern digital ecosystem including a professional website, ERP system, LMS platform, and mobile application. The ERP streamlined inventory and product management, while the LMS supported the coaching center by managing courses and students. Digital marketing strategies and creative content were also implemented to strengthen the brand’s online visibility.",
    keyResults: [
      "Centralized management of products and inventory",
      "Professional platform showcasing 1,900+ fashion products",
      "Efficient system for managing the coaching center",
      "Increased brand visibility through digital marketing",
      "Better customer engagement with creative content",
      "Scalable infrastructure for future expansion"
    ]
  },
  {
    id: "bari-computer-trading",
    name: "Bari Computer Trading Co.",
    category: "Branding",
    year: "2024",
    description: "Computer and technology trading company.",
    tags: ["Brand Design"],
    image: "https://placehold.co/800x450/f0f0f0/6b7280?text=Bari+Computer+Trading",
    introduction: "Bari Computer Trading Co. is a Bangladesh-based technology retailer supplying printers, toners, scanners, photocopy machines, and related accessories through both a physical store and an online e-commerce platform.",
    servicesProvided: [
      "Web Design",
      "Web Development",
      "ERP System",
      "Digital Marketing",
      "Creative Content"
    ],
    challenges: "The company struggled to manage both offline and online sales efficiently. Inventory updates, product listings, and customer inquiries were handled manually, which caused stock mismatches and delayed responses. Their digital presence was limited, making it difficult to compete with larger online electronics retailers.",
    solution: "Falahsys developed a modern e-commerce website integrated with an ERP system to centralize inventory management, product listings, and order processing. We also implemented digital marketing strategies and creative content to increase product visibility and attract more customers online.",
    keyResults: [
      "Professional e-commerce platform for technology products",
      "Centralized inventory and order management system",
      "Improved online visibility through digital marketing",
      "Faster response to customer inquiries and orders",
      "High-quality product presentation and listings",
      "Increased scalability for both online and offline sales"
    ]
  }
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
  email: "info@falahsys.com",
  phone: "+880 1339-904830",
  address: "Ka/4, Mamata Complex, Basundhara R/A, Dhaka - 1229, Bangladesh",
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61585230855546", icon: "Facebook" },
    { name: "Instagram", href: "https://www.instagram.com/falahsysltd?igsh=MTRncW1xMW0zb2FjZQ==", icon: "Instagram" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/falahsys", icon: "Linkedin" },
    { name: "Twitter", href: "https://twitter.com/falahsys", icon: "Twitter" },
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
  { id: "1", name: "S. M. Mahedi Hasan", role: "Founder & CEO", avatarInitial: "M", image: "/team/hasan.jpg", linkedIn: "#" },
  { id: "2", name: "Md. Mahadi Hasan", role: "Co-Founder and Head of Artificial Intelligence", avatarInitial: "M", image: "/team/mahadi.jpeg", linkedIn: "#" },
  { id: "3", name: "Riad Safowan", role: "Co-Founder and Head of Full Stack Development", avatarInitial: "R", image: "/team/riad.jpeg", linkedIn: "#" },
];

export const TOOLS = {
  webTech: [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React JS", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Vue.js", icon: "vuedotjs" },
    { name: "Vite", icon: "vite" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Express", icon: "express" },
    { name: "Spring Boot", icon: "springboot" },
    { name: "GraphQL", icon: "graphql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Firebase", icon: "firebase" },
  ],
  libraries: [
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Redux", icon: "redux" },
    { name: "Axios", icon: "axios" },
    { name: "Socket.io", icon: "socketdotio" },
    { name: "Prisma", icon: "prisma" },
    { name: "JWT", icon: "jsonwebtokens" },
    { name: "Stripe", icon: "stripe" },
  ],
  mobileDev: [
    { name: "Flutter", icon: "flutter" },
    { name: "Kotlin", icon: "kotlin" },
    { name: "React Native", icon: "react" },
    { name: "Android", icon: "android" },
  ],
  ai: [
    { name: "OpenAI", icon: "openai" },
    { name: "Gemini", icon: "googlegemini" },
    { name: "Python", icon: "python" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "OpenCV", icon: "opencv" },
    { name: "Scikit-learn", icon: "scikitlearn" },
    { name: "Pandas", icon: "pandas" },
    { name: "NumPy", icon: "numpy" },
    { name: "Hugging Face", icon: "huggingface" },
    { name: "LangChain", icon: "langchain" },
    { name: "LangGraph", icon: "langchain" },
    { name: "NLTK", icon: "python" },
    { name: "YOLO", icon: "python" },
    { name: "n8n", icon: "n8n" },
    { name: "ChromaDB", icon: "python" },
    { name: "FAISS", icon: "meta" },
    { name: "Qdrant", icon: "qdrant" },
    { name: "Pinecone", icon: "pinecone" },
  ],
  devops: [
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "GitHub Actions", icon: "githubactions" },
    { name: "GitLab CI/CD", icon: "gitlab" },
    { name: "Terraform", icon: "terraform" },
    { name: "Nginx", icon: "nginx" },
    { name: "Linux", icon: "linux" },
    { name: "AWS", icon: "amazonaws" },
    { name: "Vercel", icon: "vercel" },
    { name: "DigitalOcean", icon: "digitalocean" },
  ],
  digitalMarketing: [
    { name: "Google Analytics", icon: "googleanalytics" },
    { name: "Google Ads", icon: "googleads" },
    { name: "Meta Ads", icon: "meta" },
    { name: "Mailchimp", icon: "mailchimp" },
    { name: "HubSpot", icon: "hubspot" },
    { name: "Semrush", icon: "semrush" },
  ],
  graphicDesign: [
    { name: "Photoshop", icon: "adobephotoshop" },
    { name: "Illustrator", icon: "adobeillustrator" },
    { name: "After Effects", icon: "adobeaftereffects" },
    { name: "Premiere Pro", icon: "adobepremierepro" },
    { name: "Adobe XD", icon: "adobexd" },
    { name: "Figma", icon: "figma" },
    { name: "Canva", icon: "canva" },
  ],
};


