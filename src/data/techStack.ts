import { TechItem } from '../types';

export const TECH_STACK: TechItem[] = [
  // Languages & Frameworks
  {
    name: 'Python',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'AsyncIO concurrency, uvloop, Pydantic v2, async FastAPI services for streaming workloads.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'FastAPI',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'REST endpoints, full-duplex WebSockets, dependency injection, OpenAPI schemas.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'TypeScript',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Strict typing, generic type-safe APIs, full-stack client-server contracts.',
    associatedProjects: ['xampiest', 'leolabs-hub', 'regulatordigest2']
  },
  {
    name: 'Node.js',
    category: 'languages',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'Event-driven services, BullMQ job queues, worker threads for background tasks.',
    associatedProjects: ['whywrong']
  },
  {
    name: 'Go',
    category: 'languages',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'Goroutine worker pools, channel-based backpressure, basic CLI tooling.',
    associatedProjects: []
  },
  {
    name: 'React 19',
    category: 'languages',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'Hooks, Suspense, server components, responsive real-time UIs, design systems.',
    associatedProjects: ['leolabs-hub', 'regulatordigest2']
  },
  {
    name: 'Next.js',
    category: 'languages',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'App Router, server components, edge middleware, route handlers.',
    associatedProjects: []
  },
  {
    name: 'Vite',
    category: 'languages',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'Fast HMR, Vite plugins, lean production builds, TS-first config.',
    associatedProjects: ['leolabs-hub', 'xampiest', 'regulatordigest2']
  },

  // Databases & AI
  {
    name: 'PostgreSQL',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Window queries, partial/compound indexes, advisory locks, pgBouncer pooling.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'pgvector',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 2,
    highlight: '768-dim HNSW indexes, cosine similarity tuning, hybrid lexical-semantic filtering.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Supabase',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Row Level Security (RLS), edge functions, realtime Postgres subscriptions.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Redis',
    category: 'databases_ai',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'In-memory caching, distributed locks, Redis Streams, Pub/Sub event buses.',
    associatedProjects: []
  },
  {
    name: 'Groq & LPUs',
    category: 'databases_ai',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'Fast token generation for interactive dialog, primary LLM with fallback chains.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Hugging Face & SentenceTransformers',
    category: 'databases_ai',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'multilingual-e5-base embeddings, semantic similarity, batching for vector pipelines.',
    associatedProjects: ['regulatordigest2']
  },

  // Infrastructure & Deployment
  {
    name: 'Docker',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Multi-stage lean container builds (Alpine / Distroless), docker-compose stacks.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Vercel',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Edge functions, domain routing, preview environments, zero-config CI/CD.',
    associatedProjects: ['leolabs-hub', 'xampiest']
  },
  {
    name: 'Render',
    category: 'infra',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'Multi-worker container services, scheduled jobs, custom domains.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Telegram Bot API',
    category: 'infra',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'Long-polling, Mini Apps, inline keyboards, rate-limit handling, webhook delivery.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Resend & Email APIs',
    category: 'infra',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'Transactional email templates, bounce handling, domain verification.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Sentry & PostHog',
    category: 'infra',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'Error capture with context, performance tracing, lightweight product analytics.',
    associatedProjects: ['regulatordigest2']
  },
  {
    name: 'Git & CI/CD',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'GitHub Actions matrix testing, automated releases, branch-based previews.',
    associatedProjects: ['regulatordigest2', 'leolabs-hub', 'xampiest']
  },
  {
    name: 'Linux Systems',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Systemd service management, basic kernel tuning, bash automation, file descriptors.',
    associatedProjects: ['regulatordigest2']
  }
];

export const TECH_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages & Frameworks' },
  { id: 'databases_ai', label: 'Databases & AI' },
  { id: 'infra', label: 'Infrastructure & DevOps' }
] as const;