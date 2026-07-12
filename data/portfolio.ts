// data/portfolio.ts — single source of content for the portfolio sections.

export const ACCENTS = {
  blue: "#3647e7",
  orange: "#f05923",
  yellow: "#faa613",
  green: "#04bf0c",
  red: "#a10702",
};

export type Experience = {
  company: string;
  shortDates: string;
  role: string;
  dates: string;
  location: string;
  product: string;
  url: string;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Doctari GmbH",
    shortDates: "2024 — Present",
    role: "Senior Software Engineer",
    dates: "Nov 2024 — Present",
    location: "Berlin, Germany",
    product: "doctari",
    url: "https://www.doctari.de",
    stack: ["NextJS", "AWS", "React", "TypeScript", "webpack", "vite", "design system"],
    bullets: [
      "Refactored the negotiation lifecycle overview in the app for 3 different user access levels.",
      "Drafted C4 diagrams for the architecture of the product service-desk with custom integration of Confluence and JSM.",
    ],
  },
  {
    company: "Burst Fitness",
    shortDates: "2023 — 2025",
    role: "Senior Fullstack Engineer",
    dates: "Sept 2023 — Jan 2025",
    location: "Utah, United States",
    product: "Burst Fitness App",
    url: "#",
    stack: ["React", "TypeScript", "monorepo", "webpack", "MUI", "tailwind", "Stripe"],
    bullets: [
      "Implemented and maintained the whole software from scratch, including stack for 3 different applications across devices.",
      "Designed the rock-solid architecture for the whole app flow and matured it to cover incoming features.",
      "Introduced asset management with S3 to store and ship video to the apps with authenticated presigned URLs.",
      "Maintained Crashlytics stats at 99% for both apps on Android and iOS.",
    ],
  },
  {
    company: "Sharpist GmbH",
    shortDates: "2022 — 2023",
    role: "Senior Front-end Engineer",
    dates: "May 2022 — Aug 2023",
    location: "Berlin, Germany",
    product: "Sharpist",
    url: "https://www.sharpist.com",
    stack: ["React", "TypeScript", "nx monorepo", "webpack", "AntD", "Storybooks"],
    bullets: [
      "Restructured the mono repo setup for 6 projects including product, components, storybooks, and tests alongside.",
      "Took charge of a new project visualizing 10+ business KPIs transparently to customers for better business strategy.",
      "Implemented unit tests for the legacy code to maintain a coverage of 85% and above.",
    ],
  },
  {
    company: "VentureDive",
    shortDates: "2019 — 2021",
    role: "Sr. Software Engineer",
    dates: "Jan 2019 — Dec 2021",
    location: "Lahore, Pakistan",
    product: "Munchies",
    url: "#",
    stack: ["ReactJS", "Redux", "thunk", "Firebase", "Google Maps"],
    bullets: [
      "Enhanced reusability, implementing schema-based data-grids with 34 different renderers for the lists in CRUDs.",
      "Contributed to build-optimization tasks, shrinking initial load time to under 1 second.",
      "Created an auth-based routing scheme for the React app using role-based access to maintain security and fallback.",
      "Led a team of 3, polishing my mentorship skills while maintaining a healthy engineering culture.",
    ],
  },
  {
    company: "Markinson",
    shortDates: "2017 — 2018",
    role: "Software Developer",
    dates: "Mar 2017 — Dec 2018",
    location: "Melbourne, Australia",
    product: "Momentum Pro V4",
    url: "#",
    stack: ["React", "Redux", "Material UI", "Saga Middleware"],
    bullets: [
      "Implemented pluggable and extendible UI components with a specific style guide, narrowing the coding effort by 50%.",
      "Shaved off 50% of development effort on boilerplate, introducing action creators and ducks with react-redux.",
    ],
  },
];

export type SkillGroup = { title: string; color: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Languages", color: ACCENTS.blue, items: ["JavaScript (ES6)", "TypeScript"] },
  {
    title: "Front-end Stack",
    color: ACCENTS.green,
    items: [
      "ReactJS (ES6, JSX, Hooks)",
      "React Native (CLI)",
      "Redux (ducks)",
      "React Query",
      "NextJS / GatsbyJS",
      "Thunk / Saga",
      "Webpack",
      "GraphQL",
      "SASS / SCSS",
      "Tailwind",
    ],
  },
  { title: "Back-end Stack", color: ACCENTS.orange, items: ["Node JS", "ExpressJS", "Socket.io"] },
  { title: "Databases", color: ACCENTS.yellow, items: ["MySQL", "MongoDB"] },
  {
    title: "Integrations",
    color: ACCENTS.red,
    items: ["Apple StoreKit", "Stripe", "Firebase", "Open AI", "Google Maps", "Sentry", "Google Analytics"],
  },
  { title: "Testing", color: ACCENTS.blue, items: ["Jest (Enzyme)", "RTL", "Cypress"] },
  { title: "AWS", color: ACCENTS.green, items: ["Lambda", "Cognito", "S3, CloudFront", "Route53"] },
  { title: "CI / CD", color: ACCENTS.orange, items: ["Git", "MonoRepo", "Docker", "CLI yml", "Vercel"] },
];

export const languagesSpoken = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
  { name: "German", level: "Elementary" },
];

export type Recommendation = {
  quote: string;
  name: string;
  title: string;
  company: string;
  profileUrl?: string;
};

// Fallback used until public/recommendations.json is populated (see LINKEDIN_RECOMMENDATIONS.md).
export const recommendationsFallback: Recommendation[] = [
  {
    quote:
      "Haider pairs real engineering depth with genuine design taste — a rare combination. He raised the quality bar for the entire front-end team and quietly made everyone around him better.",
    name: "[Reviewer name]",
    title: "Engineering Manager",
    company: "Sharpist",
  },
  {
    quote:
      "He took an ambiguous analytics project and turned it into something our customers genuinely rely on. Ships fast, communicates clearly, and never cuts corners on quality.",
    name: "[Reviewer name]",
    title: "Product Lead",
    company: "Sharpist",
  },
  {
    quote:
      "From architecture down to the last pixel, Haider delivers. He mentored our juniors and kept the codebase clean under serious deadline pressure — a true multiplier on any team.",
    name: "[Reviewer name]",
    title: "CTO",
    company: "Burst Fitness",
  },
];

export const about = {
  name: "Haider Ali Anjum",
  location: "Berlin, Germany",
  heading: "Software engineer with an eye for design.",
  lead:
    "I'm a Software Engineer, Front-end Developer and UX enthusiast with a decade of professional experience designing and developing high-end web applications with TypeScript, React, React Native, GraphQL, Redux and Node.",
  body:
    "I've shipped for mobility, education, coaching, warehousing, sales, auditing and healthcare - from a 200+ member engineering team to lone-engineer projects. My eye for UI comes from a lifelong habit of pencil sketching and digital illustration, which I also pursue as a freelance UI/UX designer.",
  education: { degree: "B.Sc. Computer Science", detail: "PUCIT, Lahore · 2013–2017" },
  honors: { title: "Speaker — Microsoft Insider Dev Tour", detail: "2019" },
};
