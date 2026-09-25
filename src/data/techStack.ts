import { TechItem } from '../types';

export const TECH_STACK: TechItem[] = [
  // Languages & Frameworks
  {
    name: 'Python',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'AsyncIO concurrency, uvloop, Pydantic v2, async FastAPI services for streaming workloads.',
    associatedProjects: []
  },
  {
    name: 'FastAPI',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'REST endpoints, full-duplex WebSockets, dependency injection, OpenAPI schemas.',
    associatedProjects: []
  },
  {
    name: 'TypeScript',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Strict typing, generic type-safe APIs, full-stack client-server contracts.',
    associatedProjects: []
  },
  {
    name: 'Node.js',
    category: 'languages',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'Event-driven services, BullMQ job queues, worker threads for background tasks.',
    associatedProjects: []
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
    name: 'Next.js / React',
    category: 'languages',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'App Router, server components, responsive real-time UIs, design systems.',
    associatedProjects: []
  },

  // Databases & AI
  {
    name: 'PostgreSQL',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Window queries, partial/compound indexes, advisory locks, pgBouncer pooling.',
    associatedProjects: []
  },
  {
    name: 'pgvector',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'HNSW indexes, cosine similarity tuning, hybrid lexical-semantic filtering.',
    associatedProjects: []
  },
  {
    name: 'Supabase',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Row Level Security (RLS), edge functions, realtime Postgres subscriptions.',
    associatedProjects: []
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
    highlight: 'Fast token generation for interactive voice dialog and low-latency chat completions.',
    associatedProjects: []
  },
  {
    name: 'Hugging Face & SentenceTransformers',
    category: 'databases_ai',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'Hosted embedding models, semantic similarity, batching for vector pipelines.',
    associatedProjects: []
  },

  // Infrastructure & Deployment
  {
    name: 'Docker',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Multi-stage lean container builds (Alpine / Distroless), docker-compose stacks.',
    associatedProjects: []
  },
  {
    name: 'Vercel',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Edge functions, domain routing, preview environments, zero-config CI/CD.',
    associatedProjects: []
  },
  {
    name: 'Telegram Bot API',
    category: 'infra',
    level: 'Proficient',
    experienceYears: 2,
    highlight: 'Long-polling & webhook integrations, inline keyboards, rate-limit handling.',
    associatedProjects: []
  },
  {
    name: 'Render & Cloud Run',
    category: 'infra',
    level: 'Proficient',
    experienceYears: 1,
    highlight: 'Containerized background services, autoscaling worker pools, private networking.',
    associatedProjects: []
  },
  {
    name: 'Git & CI/CD',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'GitHub Actions matrix testing, automated releases, branch-based previews.',
    associatedProjects: []
  },
  {
    name: 'Linux Systems',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Systemd service management, basic kernel tuning, bash automation, file descriptors.',
    associatedProjects: []
  }
];

export const TECH_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages & Frameworks' },
  { id: 'databases_ai', label: 'Databases & AI' },
  { id: 'infra', label: 'Infrastructure & DevOps' }
] as const;