export const personalInfo = {
  name: "Clarence Gio Bolonia",
  title: "UI/UX & Product Designer",
  tagline: "Designing clarity from complexity.",
  bio: "I'm a UI/UX and Product Designer with 4+ years of experience building complex Fintech and B2B SaaS platforms. I come from a frontend development background — which means I design with engineering feasibility in mind, always.",
  bioExtended:
    "My work lives at the intersection of data density and cognitive ease. I don't chase trends — I solve operational friction. Every design decision I make has intent and usability behind it.",
  location: "Bacoor, Cavite, Philippines",
  email: "engrclarencebolonia08@gmail.com",
  github: "https://github.com/engrclarencebolonia",
  figma:
    "https://www.figma.com/design/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio",
  wix: "https://engrclarencebolonia.wixsite.com/profile/my-projects",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Industries", value: "Fintech, SaaS, Mobile" },
    { label: "Design Systems Built", value: "3" },
  ],
};

export const skills = [
  {
    category: "Design",
    items: [
      "UI/UX Design",
      "Product Design",
      "Design Systems",
      "Interaction Design",
      "Information Architecture",
      "User Research",
      "Prototyping",
      "Wireframing",
    ],
  },
  {
    category: "Tools",
    items: [
      "Figma",
      "Adobe XD",
      "Framer",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Principle",
      "Zeplin",
      "Maze",
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
      "Fintech & Payments",
      "Data Dashboards",
      "Mobile Apps (Android)",
      "BPO / Ops Tools",
      "Accessibility (WCAG)",
      "Design-to-Dev Handoff",
      "Agile Workflows",
    ],
  },
];

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
  emoji: string;
  coverGradient: string;
  overview: string;
  problem: string;
  process: string[];
  solution: string;
  outcome: string;
  outcomes: { metric: string; value: string; description: string }[];
  tools: string[];
  image?: string;
  figmaLink?: string;
}

export const projects: Project[] = [
  {
    id: "sherpacx",
    title: "SherpaCX",
    subtitle: "BPO Agent Performance & Analytics Platform",
    type: "B2B SaaS · Web Platform",
    year: "2023–2024",
    status: "In Progress",
    tags: ["Product Design", "Design System", "B2B SaaS", "Data Dashboard"],
    color: "#5b48fa",
    accentColor: "#8077ff",
    emoji: "📊",
    image: "/images/e35017_82c67c9626e843a48f2539ad75b459c1.png",
    coverGradient: "from-brand-600 via-brand-700 to-brand-950",
    overview:
      "SherpaCX is a B2B SaaS platform built for BPO contact center operations. It consolidates agent performance data from fragmented CRM systems and manual Excel workflows into a unified, real-time analytics dashboard — reducing cognitive load for supervisors and improving decision velocity.",
    problem:
      "BPO supervisors were managing agent performance across 3–5 disconnected tools: CRM exports, manual Excel logs, call recordings, and chat transcripts. Data was inconsistent, delayed, and scattered — making it nearly impossible to spot performance trends, coach in real-time, or report accurately to clients.",
    process: [
      "Conducted stakeholder interviews with 8 BPO supervisors across 3 contact centers",
      "Mapped existing workflows end-to-end, identifying 12 critical friction points",
      "Audited 4 competing tools (Genesys, NICE, Calabrio, Verint) for benchmark patterns",
      "Defined the unified data model: standardizing CSAT, DSAT, AHT, FCR metrics across sources",
      "Iterated through 4 design generations — from information architecture → component system → interaction design → optimization",
      "Ran 3 rounds of usability testing with supervisors, reducing task completion time by 40%",
    ],
    solution:
      "A unified supervisor dashboard with real-time agent KPI cards, drill-down performance tables, gamified leaderboards (when contextually appropriate), and an alert system for performance anomalies. Built on a scalable design system with semantic color-coding, skeleton loading states, and contextual empty states.",
    outcome:
      "Delivered across 4 design evolution stages over 1.5 years. The platform became the primary performance tool for the client's operations team, replacing all manual Excel workflows.",
    outcomes: [
      {
        metric: "AHT Reduction",
        value: "18%",
        description: "Average Handle Time reduced by consolidating workflow",
      },
      {
        metric: "Supervisor Efficiency",
        value: "40%",
        description: "Faster task completion in usability testing",
      },
      {
        metric: "Data Sources Unified",
        value: "5→1",
        description: "Consolidated fragmented systems into single truth",
      },
      {
        metric: "Design Stages",
        value: "4",
        description: "Shipped iteratively over 1.5 years",
      },
    ],
    tools: ["Figma", "FigJam", "Maze", "Zeplin", "Notion"],
    figmaLink:
      "https://www.figma.com/design/hTZnsr5L1ImsG0exAzefpf/Current?node-id=92-118",
  },
  {
    id: "ml-wallet",
    title: "ML Wallet",
    subtitle: "Mobile Transaction & Payment Experience",
    type: "Fintech · Mobile App",
    year: "2022",
    status: "Completed",
    tags: [
      "Mobile Design",
      "Fintech",
      "UX Research",
      "Payment Flows",
    ],
    color: "#0ea5e9",
    accentColor: "#38bdf8",
    emoji: "💳",
    image: "/images/e35017_38721819d9fe4db0b7454b12e9cc8c9e.png",
    coverGradient: "from-sky-500 via-sky-700 to-slate-900",
    overview:
      "ML Wallet is a mobile-first fintech app designed for seamless payments, remittances, and financial transactions. The project focused on building user trust through clarity, reducing friction in payment flows, and making complex financial actions feel effortless.",
    problem:
      "Existing mobile wallets suffered from over-cluttered dashboards, confusing transaction hierarchies, and trust-eroding micro-copy. Users — particularly those new to digital payments — abandoned flows mid-transaction due to unclear confirmation states and ambiguous error messages.",
    process: [
      "Conducted competitive analysis of 6 Philippine fintech apps (GCash, Maya, BPI, UnionBank, Coins.ph, ShopeePay)",
      "Ran card sorting sessions to understand user mental models of financial categories",
      "Designed information architecture with focus on the 3 primary flows: Send, Pay, Load",
      "Created a trust-first design language — clear confirmation states, plain-language copy, explicit fees before commitment",
      "Built component library covering all transaction states: pending, processing, success, failed, disputed",
    ],
    solution:
      "A clean, scannable wallet dashboard with transaction-first navigation, transparent fee disclosures, and a progressive disclosure model that surfaces complexity only when needed. Key flows — Send Money, Pay Bills, Load Credits — were reduced to 3 steps or fewer.",
    outcome:
      "Successfully delivered as a portfolio case study demonstrating fintech UX principles. The design system established for ML Wallet informed subsequent mobile projects.",
    outcomes: [
      {
        metric: "Flow Reduction",
        value: "3 Steps",
        description: "Core transactions completed in 3 taps or fewer",
      },
      {
        metric: "Trust Score",
        value: "+34%",
        description: "User trust rating in usability tests vs baseline",
      },
      {
        metric: "Error Recovery",
        value: "100%",
        description: "All error states designed with clear recovery paths",
      },
      {
        metric: "Screens Designed",
        value: "40+",
        description: "Full coverage across all user journeys",
      },
    ],
    tools: ["Figma", "Maze", "Principle", "Adobe Illustrator"],
  },
  {
    id: "synthnexus",
    title: "SynthNexus",
    subtitle: "Collaborative Kanban Board — Android App",
    type: "Productivity · Android App",
    year: "2023",
    status: "Live",
    tags: ["Android Design", "Collaboration Tool", "Design + Dev", "Firebase"],
    color: "#6b5df5",
    accentColor: "#a78bfa",
    emoji: "🗂",
    image: "/images/e35017_ebdb91d42f6144f4b5fef9149ae0f6cd.png",
    coverGradient: "from-violet-600 via-purple-800 to-slate-950",
    overview:
      "SynthNexus is a collaborative Kanban board Android app designed and built from the ground up. It enables teams to create, assign, and track tasks in real-time with a clean, focused interface that minimizes overhead and maximizes clarity.",
    problem:
      "Most Kanban tools are desktop-first and overbuilt. Mobile teams needed a lightweight, real-time collaboration tool that felt native to Android — not a shrunken desktop app. Existing solutions suffered from poor touch targets, confusing gestures, and cluttered UIs.",
    process: [
      "Defined core use cases: board creation, ticket management, team collaboration, status tracking",
      "Designed a bottom-sheet-first interaction model optimized for one-handed use",
      "Built the Figma design system with `#2335FF` primary + `#6b5df5` accent, dark-capable",
      "Implemented in Java (Android) with Firebase Realtime Database for live sync",
      "Iterated through 3 prototype rounds, focusing on gesture clarity and state feedback",
    ],
    solution:
      "A native Android Kanban app with real-time board sync, intuitive drag-and-drop ticket management, team invite flows, and a focused notification system. Designed with Android Material guidelines while maintaining a distinct visual identity.",
    outcome:
      "Published on Google Play. The app demonstrated end-to-end product ownership — from UX research through design system to shipped Android code.",
    outcomes: [
      {
        metric: "Platform",
        value: "Android",
        description: "Native Java app on Google Play",
      },
      {
        metric: "Sync Latency",
        value: "<200ms",
        description: "Real-time Firebase board updates",
      },
      {
        metric: "Auth Methods",
        value: "3",
        description: "Email, Google, anonymous guest access",
      },
      {
        metric: "Screens Built",
        value: "12+",
        description: "Full design + development ownership",
      },
    ],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Material Design"],
    figmaLink:
      "https://www.figma.com/proto/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=850-5772",
  },
  {
    id: "dream-catcher",
    title: "Dream Catcher",
    subtitle: "Personal Dream Journal — Published Android App",
    type: "Consumer · Android App",
    year: "2022–2023",
    status: "Live",
    tags: ["Consumer App", "Android", "Personal Productivity", "Published"],
    color: "#7c3aed",
    accentColor: "#c084fc",
    emoji: "🌙",
    image: "/images/e35017_aafe65189eba4d7e82dc734ffe80a4f7.png",
    coverGradient: "from-indigo-900 via-purple-950 to-slate-950",
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
      "Shipped 5 production releases (versionCode 5) with iterative improvements based on usage analytics",
    ],
    solution:
      "A beautifully calm dark-mode Android journal app with frictionless entry creation, media attachment support, dream tagging, and a Google-authenticated sync — so your journal follows you across devices.",
    outcome:
      "Published and actively maintained on Google Play with 5 versioned releases. Demonstrates end-to-end consumer app product ownership.",
    outcomes: [
      {
        metric: "Releases",
        value: "5",
        description: "Production versions shipped to Google Play",
      },
      {
        metric: "Auth",
        value: "Google SSO",
        description: "Secure, seamless sign-in experience",
      },
      {
        metric: "Media Support",
        value: "✓",
        description: "Image attachments on dream entries",
      },
      {
        metric: "Design Mode",
        value: "Dark-first",
        description: "Optimized for low-light night journaling",
      },
    ],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Google Sign-In API"],
  },
  {
    id: "flavour-buddy",
    title: "FlavorBuddy",
    subtitle: "Food Ordering System — Android App",
    type: "Food & Commerce · Android App",
    year: "2023",
    status: "Completed",
    tags: ["E-Commerce", "Android", "Maps Integration", "Consumer App"],
    color: "#e11d48",
    accentColor: "#fb7185",
    emoji: "🍔",
    image: "/images/e35017_02edc834c183418e8819fdbc3f43951b.png",
    coverGradient: "from-rose-600 via-red-700 to-slate-900",
    overview:
      "FlavorBuddy is a full-featured food ordering Android app supporting Delivery, Dine-In, and Pickup modes. It integrates Google Maps for restaurant discovery, a real-time cart and checkout system, and an in-app chat — built with a warm, appetite-forward visual identity.",
    problem:
      "Regional food delivery apps lacked the polish and reliability of platforms like Grab Food or Foodpanda, but also lacked the local context. FlavorBuddy was designed to feel premium yet approachable — with a clean ordering flow that worked equally well for delivery and dine-in.",
    process: [
      "Mapped the 3-mode ordering journey: Delivery / Dine-In / Pickup with mode-specific flow variations",
      "Designed a restaurant discovery experience combining list + map views",
      "Built the visual system around a red-orange gradient (`#FF0030 → #F88163`) for energy and appetite appeal",
      "Created the cart + checkout system with real-time price calculations and delivery fee transparency",
      "Integrated Google Maps for restaurant geolocation and delivery radius visualization",
      "Built in-app chat for order updates and restaurant communication",
    ],
    solution:
      "A multi-mode food ordering app with map-based restaurant discovery, tabbed ordering (Delivery/Dine-In/Pickup), an animated cart, transparent checkout flow, and real-time order chat — all in a warm, premium visual style.",
    outcome:
      "Shipped as a complete release APK with full design-to-development ownership. Demonstrates the ability to design and build complex multi-flow consumer commerce apps.",
    outcomes: [
      {
        metric: "Order Modes",
        value: "3",
        description: "Delivery, Dine-In, and Pickup flows",
      },
      {
        metric: "Map Integration",
        value: "Google Maps",
        description: "Restaurant discovery + delivery radius",
      },
      {
        metric: "Real-time Chat",
        value: "Firebase",
        description: "Live order status communication",
      },
      {
        metric: "Screens Designed",
        value: "20+",
        description: "Full ordering journey coverage",
      },
    ],
    tools: [
      "Figma",
      "Java",
      "Android Studio",
      "Firebase",
      "Google Maps API",
      "Picasso",
    ],
    figmaLink:
      "https://www.figma.com/design/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=865-22320",
  },
];
