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
  workMode: string;
  employmentType: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const experience: Experience[] = [
  {
    company: "Doctari GmbH",
    shortDates: "2024 — Present",
    role: "Senior Software Engineer",
    dates: "Nov 2024 — Present",
    location: "Berlin, Germany",
    workMode: "Hybrid",
    employmentType: "Full-time",
    stack: ["NextJS", "AWS", "React", "TypeScript", "webpack", "vite", "design system"],
    links: [{ label: "Website", href: "https://www.doctari.de" }],
  },
  {
    company: "Burst Fitness",
    shortDates: "2023 — 2025",
    role: "Senior Fullstack Engineer",
    dates: "Sept 2023 — Jan 2025",
    location: "Utah, United States",
    workMode: "Remote",
    employmentType: "Part-time",
    stack: ["React", "TypeScript", "monorepo", "webpack", "MUI", "tailwind", "Stripe"],
    links: [],
  },
  {
    company: "Sharpist GmbH",
    shortDates: "2022 — 2023",
    role: "Senior Front-end Engineer",
    dates: "May 2022 — Aug 2023",
    location: "Berlin, Germany",
    workMode: "Hybrid",
    employmentType: "Full-time",
    stack: ["React", "TypeScript", "nx monorepo", "webpack", "AntD", "Storybooks"],
    links: [{ label: "Website", href: "https://www.sharpist.com" }],
  },
  {
    company: "VentureDive",
    shortDates: "2019 — 2021",
    role: "Sr. Software Engineer",
    dates: "Jan 2019 — Dec 2021",
    location: "Lahore, Pakistan",
    workMode: "On-site",
    employmentType: "Full-time",
    stack: ["ReactJS", "Redux", "thunk", "Firebase", "Google Maps"],
    links: [],
  },
  {
    company: "Markinson",
    shortDates: "2017 — 2018",
    role: "Software Developer",
    dates: "Mar 2017 — Dec 2018",
    location: "Melbourne, Australia",
    workMode: "Remote",
    employmentType: "Full-time",
    stack: ["React", "Redux", "Material UI", "Saga Middleware"],
    links: [],
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
    "I'm a software engineer with a decade of experience helping teams deliver reliable, high-performing products.",
  body:
    "I support teams with practical consultation, performance improvements, and structured delivery across mobility, education, coaching, warehousing, sales, auditing and healthcare.",
  education: { degree: "B.Sc. Computer Science", detail: "PUCIT, Lahore · 2013–2017" },
  honors: { title: "Speaker — Microsoft Insider Dev Tour", detail: "2019" },
};
