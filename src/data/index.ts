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
  linkedin: "https://www.linkedin.com/in/engrclarencebolonia08/",
  figma: "https://www.figma.com/design/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio",
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
      "⭐ Product Design",
      "⭐ UX Strategy",
      "⭐ Design Systems in Figma",
      "⭐ Information Architecture",
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
      "⭐ Figma",
      "⭐ Adobe Photoshop",
      "⭐ Adobe Illustrator",
      "⭐ AI-Assisted Design & Workflow",
      "Rive",
      "Adobe XD",
      "Framer",
      "Webflow",
      "⭐ Jira",
      "⭐ Confluence",
      "Loom",
      "Notion",
      "Slack",
    ],
  },
  {
    category: "Development",
    items: [
      "⭐ HTML / CSS",
      "⭐ JavaScript",
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
      "⭐ B2B SaaS Platforms",
      "⭐ Problem Framing & Solution Mapping",
      "⭐ Data-informed Design",
      "⭐ Product Discovery & Research",
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
  cardImage?: string;
heroImage?: string;
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
    type: "B2B SaaS · Web Platform · Case Study",
    year: "2024–2026",
    status: "Completed",
    tags: ["B2B SaaS", "Product Design", "Design System"],
    color: "#4a2ff1",
    accentColor: "#8077ff",
    textColor: "#ffffff",
    emoji: "",
    coverGradient: "from-indigo-700 via-violet-800 to-slate-950",
    cardImage: "/images/project-b2b-bpo.png",
heroImage: "/images/blue_background.png",
   client: "Compass Experience Labs",
    role: "UI/UX Designer - End-to-End Product Ownership",
    duration: "1 year 6 months",
    overview:
      "Led end-to-end UX strategy, workflow analysis, interface design, stakeholder validation, and developer collaboration for the platform redesign.",

    problem:
      "The initial objective was to design a more gamified and data-driven system aligned with operational workflows — helping teams stay engaged while tracking performance effectively. However, during discovery, deeper issues emerged. Operational data was sourced from multiple systems, including CRMs and manual Excel reports, with inconsistent formats and validation.",
    problemBullets: [
      "Fragmented workflows across tools and systems",
      "Inconsistent and unreliable performance metrics",
      "High cognitive load when interpreting data",
      "Limited trust in dashboards due to data inaccuracies",
    ],
  process: [
  "Discovery & Workflow Analysis — Worked closely with stakeholders, supervisors, and operational teams through interviews, surveys, and remote discovery sessions to identify workflow bottlenecks, reporting friction, and gaps in existing operational processes.",

  "Operational Data Analysis — Reviewed CRM records, Excel reports, and large-scale support tickets to identify recurring operational issues and inconsistent reporting behaviors. Used AI-assisted analysis workflows with Gemini and ChatGPT to accelerate data synthesis, validate insights, and reduce manual analysis time across high-volume datasets.",

  "Technical & System Alignment — Collaborated directly with developers to understand the existing React.js architecture, MUI component system, and technical constraints before defining scalable interaction patterns and workflow structures.",

  "UX Strategy & Product Design — Translated research findings, operational requirements, and usability considerations into user flows, information architecture, wireframes, and high-fidelity interfaces focused on improving clarity, reducing cognitive load, and supporting faster decision-making.",

  "Validation & Cross-Functional Collaboration — Presented solutions with stakeholders, developers, QA, and product teams to validate usability, technical feasibility, and business alignment while minimizing unnecessary iteration cycles.",

  "Documentation & Iteration — Maintained structured documentation in Figma and Confluence, prepared developer handoff assets, and continuously refined the platform based on implementation feedback, operational needs, and evolving workflow requirements.",
],
   solution:
  "Rather than focusing solely on visual redesigns or gamification, I redefined the product direction to address the underlying operational and workflow issues uncovered during discovery. The solution focused on consolidating fragmented data sources, standardizing workflows, and improving information clarity across the platform. Key metrics were prioritized through structured data presentation and intuitive drill-down experiences, enabling faster decision-making with reduced cognitive load. Gamification elements were introduced intentionally — not as decoration, but as a way to improve engagement, reinforce operational visibility, and support team motivation without compromising usability or clarity.",
    outcome:
      "The redesigned system improved clarity and trust in performance data, reduced cognitive load, and enabled teams to make faster, more informed decisions. By aligning data, workflows, and interface design, the platform evolved from a fragmented reporting tool into a scalable, decision-support system.",
    impactCards: [
      "Reduced tool switching and streamlined workflows, improving efficiency",
      "Improved task completion by simplifying user flows and reducing friction",
      "Achieved strong early adoption, indicating high usability and product fit",
    ],
    outcomes: [
      { metric: "Product Discoveries", value: "20+", description: "Uncovered gaps in fragmented data and workflows" },
      { metric: "Shipped to Production", value: "75%", description: "Enabled faster performance reviews and decision-making" },
      { metric: "Product Evolution", value: "Beta → 2.0", description: "Improved system clarity and workflow efficiency" },
      { metric: "Unified & Automated", value: "5 → 1", description: "Reduced tool switching and fragmented workflows" },
    ],
    tools: ["Figma", "FigJam", "Adobe Photoshop", "Adobe Illustrator", "Rive", "Jira", "Confluence", "Gemini AI", "ChatGPT AI", "Slack", "Loom"],
    nda: true,
  },
  {
    id: "ml-wallet",
    title: "ML Wallet",
    subtitle: "Simplifying Fintech Transactions for Everyday Use",
    type: "Fintech · Mobile App · Case Study",
    year: "2022",
    status: "Completed",
    tags: ["Fintech", "Mobile Apps"],
    color: "#b91c1c",
    accentColor: "#ef4444",
    textColor: "#ffffff",
    emoji: "",
    coverGradient: "from-red-700 via-red-800 to-slate-900",
    cardImage: "/images/project-ml-wallet.png",
    heroImage: "/images/red_background.png",
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
  "User Research & Market Analysis — Conducted interviews, surveys, and public user feedback sessions to understand financial transaction pain points, usability barriers, and adoption challenges across existing e-wallet experiences. Analyzed competitor platforms such as GCash and PayMaya to identify behavioral patterns, feature expectations, and opportunities for product differentiation.",

  "Transaction Flow & Experience Strategy — Mapped end-to-end financial workflows to identify friction points across OTP verification, navigation, multi-step transactions, and high-frequency actions. Prioritized usability, clarity, and transaction confidence to improve accessibility for everyday users.",

  "Information Architecture & Interface Design — Reorganized navigation structures, transaction flows, and information hierarchy to surface critical actions more clearly. Translated research findings and operational requirements into intuitive Figma prototypes focused on reducing cognitive load and improving financial usability.",

  "Stakeholder Validation & Technical Alignment — Collaborated with stakeholders, developers, and research teams to validate user insights, align design decisions with system constraints, and ensure proposed solutions remained feasible within existing financial and regulatory requirements.",

  "Design Evolution & Iteration — Refined interfaces and workflows through continuous feedback, usability discussions, and presentation reviews. Contributed modernized UI patterns and interaction approaches that aligned with emerging fintech design trends and improved overall product accessibility, consistency, and user confidence.",
],
    solution:
      "Redesigned the application with a focus on clarity, efficiency, and trust across core financial workflows. Key improvements: Streamlined Transaction Flows reducing multi-step processes, Improved Navigation Structure reorganizing features for faster access to high-frequency actions, Clearer Information Hierarchy prioritizing critical data during transactions, and a Consistent Design System standardizing components for better usability and scalability.",
    outcome:
      "The goal was to make financial actions faster, clearer, and more reliable — reducing risk of user error in high-stakes financial moments.",
    impactCards: [
      "Reduced friction in key financial workflows, improving transaction efficiency",
      "Improved transaction clarity and flow, reducing user errors during critical actions",
      "Enhanced usability and navigation, enabling faster and more confident transactions",
    ],
    outcomes: [
      { metric: "Product Discoveries", value: "8+", description: "Identified opportunities across financial workflows" },
      { metric: "Modernized UX Direction", value: "2022", description: "Introduced streamlined mobile-first interaction patterns aligned with emerging fintech trends" },
      { metric: "Flow Simplification", value: "3 → 2", description: "Reduced transaction steps by combining redundant actions" },
      { metric: "Workflow Coverage", value: "80+", description: "Covered end-to-end core transaction, remittance, and financial service experiences" },
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Jira", "Confluence", "Microsoft Office", "MS Teams"],
    figmaLink: "https://www.figma.com/proto/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=736-78031&t=jMdIPcROf70WepeI-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=855%3A21509",
  },
  {
    id: "synthnexus",
    title: "SynthNexus",
    subtitle: "Collaborative Kanban Board — Android App",
    type: "Productivity · Android App · Case Study",
    year: "2023",
    status: "Completed",
    tags: ["Mobile Apps", "Collaboration Tool"],
    color: "#1d00e6",
    accentColor: "#a78bfa",
    textColor: "#ffffff",
    emoji: "",
    coverGradient: "from-blue-700 via-indigo-900 to-slate-950",
    cardImage: "/images/project-synthnexus.png",
    heroImage: "/images/blue_background.png",
    client: "MAD Gaming Development",
    role: "UI/UX Application Developer",
    duration: "5 months - Project Based",
    overview:
      "SynthNexus is a collaborative Kanban board Android app designed and built from the ground up. It enables teams to create, assign, and track tasks in real-time with a clean, focused interface that minimizes overhead and maximizes clarity.",
    problem:
      "Most Kanban tools are desktop-first and overbuilt. Mobile teams needed a lightweight, real-time collaboration tool that felt native to Android — not a shrunken desktop app. Existing solutions suffered from poor touch targets, confusing gestures, and cluttered UIs.",
   process: [
    "Product Discovery & Market Research — Researched emerging productivity platforms such as Jira and Trello to identify usability gaps, mobile workflow limitations, and opportunities for a more lightweight, mobile-first collaboration experience optimized for handheld usage.",

    "Workflow Definition & UX Strategy — Defined core collaboration workflows including ticket creation, task assignment, status tracking, and real-time team coordination. Prioritized accessibility, gesture clarity, and one-handed usability to support fast interactions on mobile devices.",

    "Information Architecture & Interface Design — Created sketches, low-fidelity wireframes, and high-fidelity interfaces focused on reducing interface clutter and simplifying task management flows. Designed a visually distinct Android experience aligned with Material Design principles while maintaining a clean and modern visual identity.",

    "System Design & Development Alignment — Structured the product architecture around lightweight real-time collaboration using Firebase Realtime Database and native Android development in Java. Focused on maintaining responsive interactions, scalable workflows, and seamless synchronization across shared boards.",

    "Iteration & Product Refinement — Refined interactions, gestures, and workflow behaviors through multiple prototype iterations and usability reviews to improve navigation clarity, task visibility, and overall collaboration efficiency across mobile environments.",
  ],
    
  solution:
    "Developed a native Android collaboration platform featuring real-time Kanban board synchronization, drag-and-drop task management, ticket organization, team collaboration flows, and lightweight productivity tools optimized specifically for mobile use. The experience prioritized speed, usability, and operational clarity while remaining visually modern and accessible.",
  outcome:
    "Successfully delivered and published a fully functional mobile-first productivity platform demonstrating end-to-end ownership across research, UX strategy, interface design, system architecture, and Android development. The project showcased the viability of lightweight, real-time collaboration workflows designed specifically for mobile users.",

    outcomes: [
    {
      metric: "Platform",
      value: "Android",
      description: "Native mobile-first collaboration platform"
    },
    {
      metric: "Realtime Sync",
      value: "<200ms",
      description: "Live Kanban synchronization using Firebase"
    },
    {
      metric: "Core Workflows",
      value: "12+",
      description: "Task, collaboration, and productivity flows designed and built"
    },
    {
      metric: "Product Ownership",
      value: "End-to-End",
      description: "Handled research, UX, UI, architecture, and development"
    },
    ],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Material Design"],
    figmaLink: "https://www.figma.com/proto/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=850-5772&scaling=scale-down-width&content-scaling=fixed",
  },
  {
    id: "dream-catcher",
    title: "Dream Catcher",
    subtitle: "Personal Dream Journal — Published Android App",
    type: "Consumer · Android App · Case Study",
    year: "2023",
    status: "Live",
    tags: ["Mobile Apps", "Android"],
    color: "#3730a3",
    accentColor: "#c084fc",
    textColor: "#ffffff",
    emoji: "",
    coverGradient: "from-indigo-900 via-purple-950 to-slate-950",
    cardImage: "/images/project-dreamcatcher.png",
    heroImage: "/images/blue_background.png",
    client: "MAD Gaming Development",
    role: "UI/UX Application Developer",
    duration: "5 months - Project Based",
    overview:
  "Dream Catcher is a reflective journaling Android app designed to help users document, organize, and explore personal dream experiences through a calm, emotionally-driven interface. The concept emerged during the post-pandemic period where many users were increasingly engaging with reflective and self-expressive digital experiences such as journaling, dream tracking, and personal insight applications. The product focused on combining emotional comfort, lightweight journaling, and intuitive mobile usability into a more engaging personal reflection experience.",

problem:
  "Most journaling and note-taking apps felt overly clinical, generic, or emotionally disconnected for reflective use cases. Existing dream journal experiences often lacked intuitive organization, calming UX patterns, and meaningful ways for users to revisit and reflect on recurring thoughts, themes, and emotional patterns over time. There was an opportunity to create a more emotionally engaging journaling experience that still felt structured, modern, and easy to use.",

process: [
  "Behavioral & Trend Research — Conducted independent research on post-pandemic digital behavior trends, focusing on journaling, emotional wellness, dream tracking, astrology, and reflective mobile experiences that were gaining traction across social platforms and app ecosystems.",

  "User Observation & Product Direction — Gathered insights from potential users interested in reflective journaling and dream interpretation experiences to better understand emotional motivations, journaling habits, and engagement expectations. Defined the product direction around emotional comfort, lightweight reflection, and accessible daily use.",

  "UX Strategy & Interface Design — Created low-fidelity concepts, journaling workflows, and high-fidelity interfaces focused on minimizing friction while maintaining a calming and emotionally resonant experience. Designed a dark-first visual system using deep indigo tones, soft purple gradients, and low-light optimized interfaces suited for nighttime journaling.",

  "Interaction Design & System Integration — Structured core journaling experiences including dream logging, tagging, media attachments, reflection flows, and lightweight insight interactions. Integrated Firebase Authentication, Firestore, Realtime Database, Storage, and Analytics to support synchronized cross-device experiences and scalable journaling workflows.",

  "Iteration & Product Refinement — Continuously refined the application through multiple production releases, usability observations, and interaction improvements focused on emotional clarity, journaling consistency, engagement, and overall mobile usability.",
],

solution:
  "Developed a dark-first reflective journaling platform that combined dream logging, media-supported entries, tagging systems, lightweight insight exploration, and synchronized cloud-based journaling experiences. The solution focused on balancing emotional resonance with practical usability, creating a calming mobile environment that encouraged reflection, self-expression, and consistent journaling habits.",

outcome:
  "Successfully published and maintained the application on Google Play through multiple production releases. The project demonstrated end-to-end ownership across behavioral research, emotional UX strategy, interface design, interaction design, Firebase integration, and Android application development while exploring emotionally-driven consumer product experiences during a rapidly evolving post-pandemic digital landscape.",

outcomes: [
  {
    metric: "Production Releases",
    value: "5",
    description: "Iterative versions published and maintained on Google Play"
  },
  {
    metric: "Authentication",
    value: "Google SSO",
    description: "Secure and seamless sign-in experience"
  },
  {
    metric: "Reflective Features",
    value: "Media + Tags",
    description: "Supported structured journaling and dream organization"
  },
  {
    metric: "Design Direction",
    value: "Dark-First",
    description: "Optimized for nighttime journaling and emotional comfort"
  },
],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Google Sign-In API"],
    figmaLink: "https://www.figma.com/proto/hrmbt4piMS1sPlPzE2Dx0o/Clarence-Gio-Bolonia-s-Portfolio?node-id=850-5500&t=jMdIPcROf70WepeI-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=855%3A21509",
  },
  {
    id: "flavour-buddy",
    title: "FlavorBuddy",
    subtitle: "Food Ordering System — Android App",
    type: "Food & Commerce · Android App · Case Study",
    year: "2023",
    status: "Completed",
    tags: ["E-Commerce", "Mobile Apps"],
    color: "#c2170a",
    accentColor: "#fb7185",
    textColor: "#ffffff",
    emoji: "",
    coverGradient: "from-red-600 via-orange-600 to-yellow-500",
    cardImage: "/images/project-flavorbuddy.png",
    heroImage: "/images/red_background.png",
    mockupImage: "/images/flavorbuddy-mockup.png",
    client: "MAD Gaming Development",
    role: "UI/UX Application Developer",
    duration: "5 months - Project Based",
    overview:
  "FlavorBuddy is a localized food ordering platform designed to help small and medium-sized food businesses digitize their operations during and after the pandemic. Unlike large-scale delivery ecosystems focused primarily on major restaurant chains, the platform was designed to support local sellers, independent food vendors, and community-based businesses through a more accessible and streamlined ordering experience across mobile and web platforms.",

problem:
  "During the pandemic, many local food businesses struggled to adapt to digital ordering and delivery systems. Existing platforms like GrabFood and Foodpanda offered polished experiences but were often optimized for larger establishments, creating accessibility and operational challenges for smaller vendors. There was an opportunity to create a more localized and approachable food ordering ecosystem that balanced usability, affordability, operational simplicity, and real-time delivery visibility.",

process: [
  "Market & Behavioral Research — Analyzed user ordering behaviors, delivery frustrations, and food purchasing patterns during the pandemic period. Studied existing platforms such as GrabFood and Foodpanda to identify usability gaps, operational pain points, and opportunities for more localized and community-driven food delivery experiences.",

  "Product Strategy & Multi-Platform Planning — Defined the platform as both a customer-facing mobile ordering application and a lightweight business management system for vendors. Structured the experience to support small food businesses, independent sellers, and localized restaurant operations through simplified onboarding and accessible ordering workflows.",

  "UX Architecture & Ordering Experience — Designed end-to-end ordering flows for Delivery, Pickup, and Dine-In experiences with mode-specific interaction patterns. Focused on reducing ordering friction, improving checkout clarity, and creating transparent delivery tracking experiences optimized for high-demand operational periods.",

  "Restaurant Discovery & Real-Time Interaction Design — Created map-based and list-based restaurant discovery systems integrated with Google Maps APIs, allowing users to locate nearby vendors, monitor delivery distances, and visualize order movement more clearly. Added in-app communication and order update systems to improve transaction transparency and customer confidence.",

  "Visual Design & Consumer Engagement — Developed a warm red-orange-yellow visual identity inspired by appetite psychology, food branding research, and consumer engagement principles. Designed interfaces to feel energetic, modern, approachable, and visually appetizing while maintaining usability across mobile devices.",

  "Development & Iteration — Built and refined the platform using Android Studio, Firebase services, Google Maps integration, and real-time database workflows. Iterated on interactions, animations, cart experiences, and checkout behaviors to improve usability, responsiveness, and overall ordering efficiency.",
],

solution:
  "Developed a multi-platform food ordering ecosystem combining mobile ordering, vendor management, restaurant discovery, real-time delivery visibility, and customer communication into a single streamlined experience. The solution focused on making food delivery more accessible for local businesses while providing users with a cleaner, more transparent, and more intuitive ordering journey.",

outcome:
  "Successfully delivered a fully functional food ordering platform demonstrating end-to-end ownership across market research, UX strategy, interaction design, mobile development, real-time systems integration, and consumer-focused visual design. The project explored how localized digital commerce experiences could better support small businesses and community-based food operations during rapidly changing consumer behavior trends.",

outcomes: [
  {
    metric: "Ordering Modes",
    value: "3",
    description: "Delivery, Pickup, and Dine-In workflows"
  },
  {
    metric: "Platform Coverage",
    value: "Mobile + Web",
    description: "Customer ordering and vendor management experiences"
  },
  {
    metric: "Real-Time Systems",
    value: "Firebase",
    description: "Live chat, order updates, and synchronized ordering flows"
  },
  {
    metric: "Location Services",
    value: "Google Maps",
    description: "Restaurant discovery and delivery radius visualization"
  },
],
    tools: ["Figma", "Java", "Android Studio", "Firebase", "Google Maps API", "Picasso"],
  },
  {
    id: "agap",
    title: "AGAP",
    subtitle: "Active Geographical Assistance Protocol — Emergency Response App",
    type: "Public Safety · Android App · Case Study",
    year: "2021",
    status: "Completed",
    tags: ["Mobile Apps", "Other Works"],
    color: "#2d7a3a",
    accentColor: "#4caf50",
    textColor: "#ffffff",
    emoji: "",
    coverGradient: "from-green-700 via-green-900 to-slate-950",
    cardImage: "/images/agap_profile.png",
    heroImage: "/images/green_background.png",
    mockupImage: "/images/agap_screens.png",
    client: "National Disaster Risk and Reduction Management Council (NDRRMC) - Parañaque City, Philippines",
    role: "Project Manager · Mobile App Developer",
    duration: "2 years (2019–2021 academic years)",

   overview:
  "AGAP (Active Geographical Assistance Protocol) is a mobile-first emergency response platform designed for Parañaque City, Philippines. The system was created to improve emergency accessibility, reduce response friction, and provide citizens with faster and more direct communication channels to Police, Fire, Hospital, and Disaster response departments. The platform combines GPS-assisted emergency reporting, geotagged incident submissions, department-based routing, and real-time communication workflows into a lightweight and scalable Android application.",

    problem:
  "Existing emergency response workflows heavily relied on overloaded hotline systems that often lacked precise caller location data, direct department routing, and visual incident context. Citizens experienced delays in emergency response coordination, while responders had limited situational awareness before arriving on-site. The challenge was to design a more accessible, accurate, and scalable emergency reporting system that could operate efficiently within limited technical and infrastructure constraints.",
    problemBullets: [
      "No direct citizen-to-department communication channel",
      "GPS location accuracy gaps in the existing 911 system",
      "Overloaded call centers with mostly non-emergency traffic",
      "Responders lacked visual context before arriving on scene",
      "No privacy-safe crime reporting mechanism for witnesses",
    ],
    process: [
  "Research & Emergency Workflow Analysis — Conducted quantitative and qualitative research including surveys, interviews, and case-based studies with residents, emergency responders, and IT specialists across Parañaque City departments to identify pain points in existing emergency communication and dispatch workflows.",

  "System Architecture & Role Definition — Designed a multi-role emergency ecosystem composed of Ordinary Users, Responders, and Administrators, each with distinct workflows, permissions, and operational responsibilities. Structured system logic and relationships through DFD (Data Flow Diagram) and ERD (Entity Relationship Diagram) planning.",

  "UX Strategy & Interaction Design — Created end-to-end emergency interaction flows covering incident reporting, geolocation pinning, department selection, emergency calling, activity monitoring, and responder coordination. Developed low-fidelity wireframes and interactive UI prototypes in Adobe XD and Figma focused on speed, clarity, and usability during high-stress situations.",

  "Mobile Development & Real-Time Infrastructure — Developed the Android application using Java and Android Studio integrated with Firebase Realtime Database, Firebase Authentication, Firebase Storage, Google Maps API, and Firebase Cloud Messaging (FCM) to support real-time emergency updates, notifications, and location-based coordination.",

  "Cross-System & Hardware Integration — Explored interoperability with existing IP camera and CCTV infrastructures to support responder visibility and situational assessment before on-site deployment. The platform was intentionally designed as a lightweight and budget-conscious solution capable of operating within existing public infrastructure limitations.",

  "Testing, Validation & Iteration — Conducted multiple rounds of functionality testing, workflow validation, and usability evaluations with residents, emergency personnel, and technical specialists. Refined emergency interaction flows, location accuracy handling, and reporting systems based on testing feedback and operational observations.",
],
   solution:
  "Developed a lightweight emergency response ecosystem enabling citizens to directly communicate with relevant departments through geotagged reports, GPS-assisted emergency pinning, real-time notifications, direct department routing, and incident-based communication flows. The solution focused on improving emergency accessibility, reducing response delays, increasing situational awareness for responders, and creating a more scalable public safety communication system.",
 outcome:
  "Successfully delivered a functional emergency response platform demonstrating end-to-end ownership across research, UX strategy, interaction design, mobile development, system architecture, and real-time infrastructure integration. The project explored how accessible mobile technology, geolocation systems, and lightweight real-time services could improve public emergency coordination within resource-constrained environments.",
    impactCards: [
      "Reduced reliance on overloaded 911 hotlines through direct department routing",
      "Improved location accuracy with GPS pin + photo geotagging combination",
      "Enabled privacy-safe incident reporting for crime witnesses",
    ],
   outcomes: [
  {
    metric: "Emergency Routing",
    value: "Direct Access",
    description: "Department-based emergency routing"
  },
  {
    metric: "Location Accuracy",
    value: "GPS + Geotag",
    description: "Improved responder visibility"
  },
  {
    metric: "System Roles",
    value: "3 Roles",
    description: "Citizen, responder, administrator"
  },
  {
    metric: "Real-Time Sync",
    value: "Firebase + FCM",
    description: "Live alerts and coordination"
  },
],
    tools: ["Adobe XD", "Java", "Android Studio", "Firebase", "Google Maps API", "Retrofit2", "Picasso", "FCM"],
  },
];