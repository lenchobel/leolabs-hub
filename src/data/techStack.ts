import { TechItem } from '../types';

export const TECH_STACK: TechItem[] = [
  // Languages & Frameworks
  {
    name: 'Python',
    category: 'languages',
    level: 'Expert',
    experienceYears: 6,
    highlight: 'AsyncIO concurrency, uvloop, Pydantic v2, PyTorch pipelines, low-latency audio processing.',
    associatedProjects: []
  },
  {
    name: 'FastAPI',
    category: 'languages',
    level: 'Expert',
    experienceYears: 5,
    highlight: 'High-speed REST and full-duplex WebSockets with dependency injection and OpenAPI schemas.',
    associatedProjects: []
  },
  {
    name: 'TypeScript',
    category: 'languages',
    level: 'Expert',
    experienceYears: 5,
    highlight: 'Strict typing, generic type-safe APIs, full-stack client-server contracts, AST parsers.',
    associatedProjects: []
  },
  {
    name: 'Node.js',
    category: 'languages',
    level: 'Expert',
    experienceYears: 6,
    highlight: 'Event-driven microservices, BullMQ job queues, custom stream transformers, worker threads.',
    associatedProjects: []
  },
  {
    name: 'Go',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 3,
    highlight: 'Goroutine worker pools, channel backpressure, SIMD memory-mapped CLI binaries, zero-alloc networking.',
    associatedProjects: []
  },
  {
    name: 'Next.js / React',
    category: 'languages',
    level: 'Advanced',
    experienceYears: 4,
    highlight: 'Server Components, edge middleware, responsive real-time dashboards, modern design systems.',
    associatedProjects: []
  },

  // Databases & AI
  {
    name: 'PostgreSQL',
    category: 'databases_ai',
    level: 'Expert',
    experienceYears: 6,
    highlight: 'Complex window queries, partition indexing, advisory locks for concurrency, pgBouncer connection pooling.',
    associatedProjects: []
  },
  {
    name: 'pgvector',
    category: 'databases_ai',
    level: 'Expert',
    experienceYears: 2,
    highlight: 'HNSW vector indexes, cosine similarity tuning, hybrid lexical-semantic filtering at scale.',
    associatedProjects: []
  },
  {
    name: 'Supabase',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 3,
    highlight: 'Row Level Security (RLS), edge functions, realtime Postgres subscriptions, automated backup pipelines.',
    associatedProjects: []
  },
  {
    name: 'Redis',
    category: 'databases_ai',
    level: 'Expert',
    experienceYears: 5,
    highlight: 'In-memory caching, distributed locks (Redlock), Redis Streams, Pub/Sub event busses.',
    associatedProjects: []
  },
  {
    name: 'Groq & LPUs',
    category: 'databases_ai',
    level: 'Expert',
    experienceYears: 2,
    highlight: 'Ultra-fast token generation (>300 tok/sec) for real-time interactive voice dialog systems.',
    associatedProjects: []
  },
  {
    name: 'Llama & DeepSeek',
    category: 'databases_ai',
    level: 'Advanced',
    experienceYears: 2,
    highlight: 'Open-weights model deployment, function calling schemas, prompt engineering, speculative decoding.',
    associatedProjects: []
  },

  // Infrastructure & Deployment
  {
    name: 'Docker & OCI',
    category: 'infra',
    level: 'Expert',
    experienceYears: 5,
    highlight: 'Multi-stage lean container builds (Alpine / Distroless), docker-compose orchestrations, health probes.',
    associatedProjects: []
  },
  {
    name: 'Vercel',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 4,
    highlight: 'Edge functions, domain routing, preview environments, zero-config CI/CD deployments.',
    associatedProjects: []
  },
  {
    name: 'Cloudflare Pages & Workers',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 3,
    highlight: 'Global edge network delivery, DNS orchestration, Web Crypto HMAC verification, R2 bucket storage.',
    associatedProjects: []
  },
  {
    name: 'Render & Cloud Run',
    category: 'infra',
    level: 'Advanced',
    experienceYears: 4,
    highlight: 'Containerized background services, autoscaling worker pools, private networking & Redis clusters.',
    associatedProjects: []
  },
  {
    name: 'Git & CI/CD',
    category: 'infra',
    level: 'Expert',
    experienceYears: 6,
    highlight: 'GitHub Actions matrix testing, automated semantic versioning, binary release packaging, code audits.',
    associatedProjects: []
  },
  {
    name: 'Linux Systems',
    category: 'infra',
    level: 'Expert',
    experienceYears: 6,
    highlight: 'Systemd service management, kernel tuning (sysctl, epoll, open files limits), bash automation.',
    associatedProjects: []
  }
];

export const TECH_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages & Frameworks' },
  { id: 'databases_ai', label: 'Databases & AI' },
  { id: 'infra', label: 'Infrastructure & DevOps' }
] as const;
