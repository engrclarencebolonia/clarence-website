export const personalInfo = {
  name: "Clarence Gio Bolonia",
  title: "UI/UX & Product Designer",
  tagline: "Designing clarity from complexity.",
  bio: "I'm a UI/UX and Product Designer with 5 years of experience building complex Fintech and B2B SaaS platforms. I come from a frontend development background — which means I design with engineering feasibility in mind, always.",
  bioExtended:
    "My work lives at the intersection of data density and cognitive ease. I don't chase trends — I solve operational friction. Every design decision I make has intent and usability behind it.",
  location: "Bacoor, Cavite, Philippines",
  email: "engrclarencebolonia08@gmail.com",
  github: "https://github.com/engrclarencebolonia",
  figma:
    "https://www.figma.com/design/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio",
  wix: "https://engrclarencebolonia.wixsite.com/profile/my-projects",
  linkedin: "https://www.linkedin.com/in/engrclarencebolonia08/",
  stats: [
    { label: "Years Experience", value: "5" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Industries", value: "Fintech, B2B SaaS, E-Commerce" },
  ],
};

export const skills = [
  {
    category: "Design",
    items: [
      "Product Design",
      "UX Strategy",
      "Design Systems in Figma (components, tokens, scalability)",
      "Information Architecture",
      "UI/UX Design",
      "User Research",
      "Prototyping",
      "Wireframing",
      "Interaction Design",

    ],
  },
  {
    category: "Tools",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "AI-Assisted Design & Workflow",
      "Adobe XD",
      "Framer",
      "Webflow",
      "Jira",
      "Confluence",
      "Loom",
      "Notion",
      "Slack",

    ],
  },
  {
    category: "Development",
    items: [
      "HTML / CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Java (Android)",
      "Firebase",
      "Git",
    ],
  },
  {
    category: "Specializations",
    items: [
      "B2B SaaS Platforms",
      "Problem Framing & Solution Mapping",
      "Data-informed Design",
       "Product Discovery & Research",
      "Fintech & Payments",
      "Design Systems & Scalability",
      "Presentation & Communication",
      "Data Dashboards",
      "Mobile Apps (Android)",
      "BPO / Ops Tools",
      "Accessibility (WCAG)",
      "Design-to-Dev Handoff",
      "Agile Workflows",
    ],
  },
];

export interface CaseStudySection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  year: string;
  status: "Live" | "Completed" | "In Progress";
  tags: string[];
  color: string;
  accentColor: string;
  textColor: string;
  emoji: string;
  coverGradient: string;
  image?: string;
  mockupImage?: string;
  overview: string;
  client?: string;
  role?: string;
  duration?: string;
  problem: string;
  problemBullets?: string[];
  process: string[];
  solution: string;
  outcome: string;
  outcomes: { metric: string; value: string; description: string }[];
  impactCards?: string[];
  tools: string[];
  figmaLink?: string;
  nda?: boolean;
}

export const projects: Project[] = [
  {
    id: "b2b-bpo-platform",
    title: "B2B SaaS BPO Platform",
    subtitle: "All-in-One BPO Operations & Performance Platform",
    type: "B2B SaaS · Web Platform",
    year: "2024-2026",
    status: "Completed",
    tags: ["Product Design", "Design System","Dashboards", "Web Application", "B2B SaaS", "Data Dashboard"],
    color: "#4a2ff1",
    accentColor: "#8077ff",
    textColor: "#ffffff",
    emoji: "📊",
    coverGradient: "from-indigo-700 via-violet-800 to-slate-950",
    image: "/images/project-b2b-bpo.png",
    overview:
      "Led the design of dashboards and operational tools for a B2B SaaS BPO platform, focusing on improving data clarity, reducing workflow friction, and enabling faster, more confident decision-making.",
    client: "Compass Experience Labs",
    role: "UI/UX Designer (Product Focus)",
    duration: "1.6 years",
    problem:
      "The initial objective was to design a more gamified and data-driven system aligned with operational workflows — helping teams stay engaged while tracking performance effectively. However, during discovery, deeper issues emerged. Operational data was sourced from multiple systems, including CRMs and manual Excel reports, with inconsistent formats and validation.",
    problemBullets: [
      "Fragmented workflows across tools and systems",
      "Inconsistent and unreliable performance metrics",
      "High cognitive load when interpreting data",
      "Limited trust in dashboards due to data inaccuracies",
    ],
    process: [
      "Workflow & Data Analysis — Identified fragmentation across multiple CRMs and reports, causing unreliable data and high cognitive load for teams.",
      "Structuring the System — Redesigned the system architecture to unify workflows, data, and communication into a single, scalable structure.",
      "Interaction & Interface Design — Simplified complex workflows into a clear, intuitive interface that reduces cognitive load and supports decision-making.",
      "Validation & Optimization — Collaborated with stakeholders and developers to validate solutions and ensure alignment with business and technical constraints.",
      "Launch & Iteration — Continuously refined the product based on usage patterns, feedback, and evolving operational needs.",
    ],
    solution:
      "Rather than focusing solely on UI improvements or gamification, I redefined the approach to address the core system issues identified during discovery. The solution focused on Data Consolidation & Standardization, Workflow Alignment, Structured Data Presentation surfacing key metrics first with clear drill-down paths, and Gamification with Purpose — integrating engagement elements without compromising clarity.",
    outcome:
      "The redesigned system improved clarity and trust in performance data, reduced cognitive load, and enabled teams to make faster, more informed decisions. By aligning data, workflows, and interface design, the platform evolved from a fragmented reporting tool into a scalable, decision-support system.",
    impactCards: [
      "Reduced tool switching and streamlined workflows, improving efficiency",
      "Improved task completion by simplifying user flows and reducing friction",
      "Achieved strong early adoption, indicating high usability and product fit",
    ],
    outcomes: [
      { metric: "Product Discoveries", value: "20+", description: "Uncovered gaps in fragmented data and workflows" },
      { metric: "Shipped to Production", value: "75%", description: "Simplified user flows reduced friction" },
      { metric: "Product Evolution", value: "Beta → 2.0", description: "Improved system clarity and workflow efficiency" },
 { metric: "Unified & Automated System", value: "5 → 1", description: "Reduced tool switching and fragmented workflows" },],
    tools: ["Figma", "FigJam", "FigmaMale", "Photoshop","Illustrator", "Rive", "Jira", "Confluence", "Gemini AI", "ChatGPT AI", "Slack", "Loom"],
    nda: true,
  },
  {
    id: "ml-wallet",
    title: "ML Wallet",
    subtitle: "Simplifying Fintech Transactions for Everyday Use",
    type: "Fintech · Mobile App",
    year: "2022",
    status: "Completed",
    tags: ["Mobile Apps", "Fintech", "UX Research", "Payment Flows"],
    color: "#b91c1c",
    accentColor: "#ef4444",
    textColor: "#ffffff",
    emoji: "💳",
    coverGradient: "from-red-700 via-red-800 to-slate-900",
    image: "/images/project-ml-wallet.png",
    overview:
      "Led the end-to-end redesign of ML Wallet, a fintech mobile application used for payments, remittances, and daily financial transactions through M Lhuillier's nationwide network. Focused on reducing friction in financial workflows, improving clarity in transactions, and creating a more intuitive and reliable user experience.",
    client: "M Lhuillier",
    role: "Research Staff — UI/UX Focus",
    duration: "5 months",
    problem:
      "ML Wallet supports high-frequency financial transactions, but several usability issues created friction in critical user flows. Initial goals focused on improving usability and modernizing the interface. However, deeper issues emerged during the process:",
    problemBullets: [
      "Friction-heavy OTP and verification flows",
      "Confusing navigation across key features",
      "High cognitive load during transactions",
      "Inconsistent structure in financial workflows",
    ],
    process: [
      "Workflow Analysis — Analyzed end-to-end financial transaction flows and identified friction points in OTP, navigation, and multi-step processes",
      "Structuring the Experience — Reorganized navigation and information hierarchy to prioritize high-frequency actions and improve clarity during transactions.",
      "Interaction & Interface Design — Designed intuitive, consistent interfaces focused on reducing cognitive load and improving usability in critical financial actions",
      "Validation & Optimization — Collaborated with stakeholders and developers to ensure flows are clear, feasible, and aligned with system constraints",
      "Launch & Iteration — Refined designs based on feedback and improved flows to enhance speed, accuracy, and user confidence",
    ],
    solution:
      "Redesigned the application with a focus on clarity, efficiency, and trust across core financial workflows. Key improvements: Streamlined Transaction Flows, reducing multi-step processes, Improved Navigation Structure, reorganizing features for faster access to high-frequency actions, Clearer Information Hierarchy, prioritizing critical data during transactions, and a Consistent Design System, standardizing components for better usability and scalability.",
    outcome:
      "The goal was to make financial actions faster, clearer, and more reliable — reducing risk of user error in high-stakes financial moments.",
    impactCards: [
      "Reduced friction in key financial workflows, improving transaction efficiency",
      "Improved transaction clarity and flow, reducing user errors during critical actions",
      "Enhanced usability and navigation, enabling faster and more confident transactions",
    ],
    outcomes: [
      { metric: "Product Discoveries", value: "8+", description: "Identified opportunities across financial workflows and product features" },
      { metric: "Industry Trends", value: "2022", description: "Anticipated 2022 design patterns, resulting in a more modern experience than competitors" },
      { metric: "Flow Simplification", value: "3 → 2", description: "Reduced transaction steps by combining redundant actions" },
      { metric: "Screens Designed", value: "80+", description: "End-to-end coverage of core financial workflows" },
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Jira", "Confluence", "Microsoft Office Tools", "MS Teams"],
    figmaLink: "https://www.figma.com/proto/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=736-78031&t=jMdIPcROf70WepeI-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=855%3A21509",
  },
  {
    id: "synthnexus",
    title: "SynthNexus",
    subtitle: "Collaborative Kanban Board — Android App",
    type: "Productivity · Android App",
    year: "2023",
    status: "Completed",
    tags: ["Mobile Apps", "Collaboration Tool", "Design + Dev", "Firebase"],
    color: "#1d00e6",
    accentColor: "#a78bfa",
    textColor: "#ffffff",
    emoji: "🗂",
    coverGradient: "from-blue-700 via-indigo-900 to-slate-950",
    image: "/images/project-synthnexus.png",
    overview:
      "SynthNexus is a collaborative Kanban board Android app designed and built from the ground up. It enables teams to create, assign, and track tasks in real-time with a clean, focused interface that minimizes overhead and maximizes clarity.",
    problem:
      "Most Kanban tools are desktop-first and overbuilt. Mobile teams needed a lightweight, real-time collaboration tool that felt native to Android — not a shrunken desktop app. Existing solutions suffered from poor touch targets, confusing gestures, and cluttered UIs.",
    process: [
      "Defined core use cases: board creation, ticket management, team collaboration, status tracking",
      "Designed a bottom-sheet-first interaction model optimized for one-handed use",
      "Built the design system with primary blue + violet accent, full dark-mode support",
      "Implemented in Java (Android) with Firebase Realtime Database for live sync",
      "Iterated through 3 prototype rounds, focusing on gesture clarity and state feedback",
    ],
    solution:
      "A native Android Kanban app with real-time board sync, intuitive drag-and-drop ticket management, team invite flows, and a focused notification system. Designed with Android Material guidelines while maintaining a distinct visual identity.",
    outcome:
      "Published on Google Play. Demonstrates end-to-end product ownership — from UX research through design system to shipped Android code.",
    outcomes: [
      { metric: "Platform", value: "Android", description: "Native Java app on Google Play" },
      { metric: "Sync Latency", value: "<200ms", description: "Real-time Firebase board updates" },
      { metric: "Auth Methods", value: "3", description: "Email, Google, anonymous guest access" },
      { metric: "Screens Built", value: "12+", description: "Full design + development ownership" },
    ],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Material Design"],
    figmaLink: "https://www.figma.com/proto/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=850-5772&scaling=scale-down-width&content-scaling=fixed",
  },
  {
    id: "dream-catcher",
    title: "Dream Catcher",
    subtitle: "Personal Dream Journal — Published Android App",
    type: "Mobile Design · Android App",
    year: "2023",
    status: "Live",
    tags: ["Mobile Apps", "Android", "Personal Productivity", "Published"],
    color: "#3730a3",
    accentColor: "#c084fc",
    textColor: "#ffffff",
    emoji: "🌙",
    coverGradient: "from-indigo-900 via-purple-950 to-slate-950",
    image: "/images/project-dreamcatcher.png",
    overview:
      "Dream Catcher is a published Android dream journal app that lets users log, organize, and reflect on their dreams. It combines a calming visual aesthetic with practical journaling features — supporting text entries, media attachments, tagging, and Google Sign-In.",
    problem:
      "Dream journaling apps were either clinical and sterile (like generic note apps) or overly whimsical and hard to navigate. There was no app that felt both emotionally resonant and functionally reliable for daily journaling.",
    process: [
      "Researched journaling behavior patterns and emotional design principles",
      "Defined the dual design intent: calming visual identity + reliable data capture",
      "Created a dark, moody aesthetic system — deep indigo + soft purple with subtle gradients",
      "Designed the core journal loop: New Entry → Tag → Save → Reflect",
      "Built with Firebase Auth (Google Sign-In), Realtime DB, Firestore, Storage, and Analytics",
      "Shipped 5 production releases (versionCode 5) with iterative improvements",
    ],
    solution:
      "A beautifully calm dark-mode Android journal app with frictionless entry creation, media attachment support, dream tagging, and a Google-authenticated sync — so your journal follows you across devices.",
    outcome:
      "Published and actively maintained on Google Play with 5 versioned releases. Demonstrates end-to-end consumer app product ownership.",
    outcomes: [
      { metric: "Releases", value: "5", description: "Production versions shipped to Google Play" },
      { metric: "Auth", value: "Google SSO", description: "Secure, seamless sign-in experience" },
      { metric: "Media Support", value: "✓", description: "Image attachments on dream entries" },
      { metric: "Design Mode", value: "Dark-first", description: "Optimized for low-light night journaling" },
    ],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Google Sign-In API"],
    figmaLink: "https://www.figma.com/proto/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=850-5500&t=jMdIPcROf70WepeI-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=855%3A21509",
  },
  {
    id: "flavour-buddy",
    title: "FlavorBuddy",
    subtitle: "Food Ordering System — Android App",
    type: "Food & Commerce · Android App",
    year: "2023",
    status: "Completed",
    tags: ["E-Commerce", "Android", "Maps Integration", "Consumer App"],
    color: "#c2170a",
    accentColor: "#fb7185",
    textColor: "#ffffff",
    emoji: "🍔",
    coverGradient: "from-red-600 via-orange-600 to-yellow-500",
    image: "/images/project-flavorbuddy.png",
    mockupImage: "/images/flavorbuddy-mockup.png",
    overview:
      "FlavorBuddy is a food ordering platform that streamlines the entire experience — from discovery to delivery. It connects users with nearby restaurants through an intuitive mobile app, while providing businesses with a web dashboard to manage orders, products, and performance in real time.",
    problem:
      "Regional food delivery apps lacked the polish and reliability of platforms like Grab Food or Foodpanda, but also lacked local context. FlavorBuddy was designed to feel premium yet approachable — with a clean ordering flow that worked equally well for delivery and dine-in.",
    process: [
      "Mapped the 3-mode ordering journey: Delivery / Dine-In / Pickup with mode-specific flow variations",
      "Designed a restaurant discovery experience combining list + map views",
      "Built the visual system around a red-orange-yellow gradient for energy and appetite appeal",
      "Created the cart + checkout system with real-time price calculations and delivery fee transparency",
      "Integrated Google Maps for restaurant geolocation and delivery radius visualization",
      "Built in-app chat for order updates and restaurant communication",
    ],
    solution:
      "A multi-mode food ordering app with map-based restaurant discovery, tabbed ordering (Delivery/Dine-In/Pickup), an animated cart, transparent checkout flow, and real-time order chat — all in a warm, premium visual style.",
    outcome:
      "Shipped as a complete release APK with full design-to-development ownership. Demonstrates the ability to design and build complex multi-flow consumer commerce apps.",
    outcomes: [
      { metric: "Order Modes", value: "3", description: "Delivery, Dine-In, and Pickup flows" },
      { metric: "Map Integration", value: "Google Maps", description: "Restaurant discovery + delivery radius" },
      { metric: "Real-time Chat", value: "Firebase", description: "Live order status communication" },
      { metric: "Screens Designed", value: "20+", description: "Full ordering journey coverage" },
    ],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Google Maps API", "Picasso"],
  },
];
