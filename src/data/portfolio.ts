export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface ArchitectureNode {
  label: string;
  detail: string;
}

export interface FeaturedProject {
  number: string;
  title: string;
  summary: string;
  stack: string[];
  githubUrl: string;
  architecture: ArchitectureNode[];
  details: string[];
}

export interface ArchiveProject {
  title: string;
  focus: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Java Micronaut",
      "REST APIs",
      "Microservices",
      "WebSockets",
      "Webhooks",
    ],
  },
  {
    title: "Cloud & Messaging",
    skills: ["AWS S3", "ECS", "Lambda", "SQS", "RabbitMQ", "CloudWatch"],
  },
  {
    title: "Data & Cache",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Auth & Integrations",
    skills: [
      "OAuth",
      "JWT",
      "FusionAuth",
      "Gmail API",
      "Outlook API",
      "Twilio",
      "SendGrid",
    ],
  },
  {
    title: "Frontend & Delivery",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Atomise India",
    role: "Software Engineer",
    location: "Gurugram, India",
    duration: "Aug 2025 — Present",
    highlights: [
      "Webhook + SQS email ingestion processing 500–600 emails/day",
      "OAuth/JWT + OTP authentication improved login success by 20%",
      "CloudWatch observability reduced backend investigation time by ~40%",
    ],
  },
  {
    company: "Optimiser India Pvt Ltd",
    role: "Associate Software Engineer",
    location: "Noida, India",
    duration: "Oct 2022 — Aug 2025",
    highlights: [
      "Node.js microservices and React applications serving 10k+ users",
      "20% faster loads and 30% runtime performance improvement",
      "Optimized REST APIs and MongoDB access with indexing and cursor pagination",
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    title: "Flash-Sale Ticketing System",
    summary: "High-concurrency seat reservation without overselling.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "WebSockets", "Docker"],
    githubUrl: "https://github.com/Ashish5689/flash-ticketing",
    architecture: [
      { label: "Clients", detail: "Live queue position" },
      { label: "Waiting room", detail: "Controlled admission" },
      { label: "Redis holds", detail: "SET NX / Lua" },
      { label: "Booking service", detail: "Idempotent confirm" },
      { label: "PostgreSQL", detail: "Source of truth" },
    ],
    details: [
      "A Redis-backed virtual waiting room admits buyers in controlled batches and streams live position over WebSockets.",
      "Atomic Redis seat holds use SET NX and Lua scripts with expiry windows to prevent double booking under contention.",
      "PostgreSQL remains the source of truth while idempotent payment confirmation guarantees exactly-once booking.",
    ],
  },
  {
    number: "02",
    title: "Multi-Channel Notification Platform",
    summary: "Asynchronous delivery across email and SMS services.",
    stack: ["Java Micronaut", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    githubUrl: "https://github.com/Ashish5689/notification-platform",
    architecture: [
      { label: "API gateway", detail: "Authentication" },
      { label: "RabbitMQ", detail: "Async routing" },
      { label: "Workers", detail: "Email + SMS" },
      { label: "Retry + DLQ", detail: "Backoff recovery" },
      { label: "Analytics", detail: "Metrics + logs" },
    ],
    details: [
      "Independent Auth, Notification, Email, SMS, and Analytics services communicate asynchronously through RabbitMQ.",
      "Idempotent workers, exponential-backoff retries, and a dead-letter queue protect delivery reliability.",
      "Redis-backed rate limiting controls load per channel and recipient, with structured logs and service metrics for observability.",
    ],
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    title: "AI-Powered Todo List",
    focus: "Full stack",
    stack: ["React", "Next.js", "TypeScript", "OpenAI API"],
    githubUrl: "https://github.com/Ashish5689/TodoList",
    liveUrl: "https://ashishtodo--newtodoailist.netlify.app/",
  },
  {
    title: "AiTranscribe",
    focus: "AI product",
    stack: ["React", "TypeScript", "Groq API", "shadcn/ui"],
    githubUrl: "https://github.com/Ashish5689/AiTranscribe",
    liveUrl: "https://aitranscribe.netlify.app/",
  },
  {
    title: "WeatherVue",
    focus: "Data visualization",
    stack: ["React", "TypeScript", "D3.js", "Framer Motion"],
    githubUrl: "https://github.com/Ashish5689/WeatherVue",
    liveUrl: "https://weathercue.netlify.app/",
  },
];

export const socialLinks = {
  github: "https://github.com/Ashish5689",
  linkedin: "https://www.linkedin.com/in/ashish-jha5689/",
  email: "mailto:ashisheduims@gmail.com",
};
