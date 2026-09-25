import { Project } from '../types';

/**
 * PRODUCTION PROJECTS CONFIGURATION FOR LEO (leolabs.com.et)
 * -------------------------------------------------------------
 * Real, currently-running or recently-shipped systems.
 * Add more entries below, or use the "+ Add Application"
 * button in the web interface to populate them when ready.
 */
export const PROJECTS: Project[] = [
  {
    id: 'regulatordigest2',
    title: 'RegDigest',
    tagline: 'Regulatory intelligence for Ethiopian businesses — search, monitor, and ask the regulator.',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    description:
      'A full-stack regulatory intelligence platform that scrapes Ethiopian regulations, indexes them with hybrid (vector + full-text + trigram) search, and delivers personalized alerts plus AI-powered Q&A with conversation memory over Web, Telegram Mini App, and email.',
    problemSolved:
      'Operators and legal/compliance teams in Ethiopia were tracking regulator updates across scattered portals, RSS feeds, and PDFs. RegDigest collapses this into a single searchable corpus with scheduled alerts, AI Q&A, and multi-channel delivery.',
    techStack: [
      'Python',
      'FastAPI',
      'Supabase',
      'PostgreSQL',
      'pgvector',
      'Groq LPU',
      'Hugging Face Embeddings',
      'Telegram Bot API',
      'Resend',
      'Chapa',
      'Docker',
      'Render',
      'Vite',
      'React',
      'TypeScript',
      'Sentry'
    ],
    subdomain: 'regdigest.et',
    liveDemoUrl: 'https://regdigest.et',
    githubUrl: 'https://github.com/lenchobel/RegulatorDigest2',
    hasDownloadRelease: false,
    featured: true,
    status: 'production',
    metrics: [
      { label: 'Embeddings', value: '768-dim', detail: 'intfloat/multilingual-e5-base via HF' },
      { label: 'Search', value: 'Hybrid', detail: 'Vector + full-text + trigram fuzzy' },
      { label: 'LLM', value: 'Groq', detail: 'Gemini + OpenRouter fallbacks' },
      { label: 'Alert Loop', value: '5 min', detail: 'Schedule-based scheduler service' }
    ],
    architectureDetails: {
      overview:
        'FastAPI backend (multi-worker) + a singleton scheduler service orchestrated via docker-compose. Supabase Postgres hosts both relational data and pgvector (HNSW) for hybrid search. A React 19 + Vite frontend serves the web app; the same backend powers the Telegram Mini App, email, and an AI Q&A endpoint with conversation memory.',
      flow: [
        { title: 'Ingestion', description: 'Scraper pulls regulator sources; raw text cleaned and chunked.', tech: 'backend/scraper + backend/ingestion' },
        { title: 'Embedding & Index', description: '768-dim SentenceTransformer embeddings stored in pgvector (HNSW) with full-text and trigram indexes.', tech: 'Hugging Face + pgvector + Postgres FTS' },
        { title: 'AI Q&A', description: 'Hybrid retrieval feeds chunks to Groq (primary) with Gemini + OpenRouter fallbacks; answers retain conversation memory.', tech: 'Groq + fallback LLM chain' },
        { title: 'Alerts', description: 'Scheduler evaluates user-defined filters every 5 minutes and queues notifications.', tech: 'backend/scheduler + backend/alerts' },
        { title: 'Delivery', description: 'Pushes results to web app, Telegram Mini App, and email (Resend). Payments via Chapa.', tech: 'Telegram + Resend + Chapa' }
      ],
      concurrencyModel:
        'Multi-worker FastAPI behind Uvicorn for the API; a separate scheduler container runs as a singleton. Docker Compose orchestrates local dev; Render hosts the production deployment.',
      throughputBenchmark:
        'Sub-second p95 hybrid retrieval against the production corpus; alert evaluation loop completes in <60s for the current rule set on a single scheduler instance.'
    }
  },
  {
    id: 'xampiest',
    title: 'Xampiest',
    tagline: 'Lightweight front-end experience deployed on Vercel.',
    category: 'web',
    categoryLabel: 'Web Apps',
    description:
      'A small, focused web app deployed at xampiest.vercel.app. Built with modern JavaScript tooling and shipped directly through Vercel preview deployments.',
    problemSolved:
      'A clean, fast, no-bloat front-end demonstration of rapid Vercel-based iteration for small product ideas.',
    techStack: ['TypeScript', 'React', 'Vite', 'Vercel'],
    subdomain: 'xampiest.vercel.app',
    liveDemoUrl: 'https://xampiest.vercel.app',
    githubUrl: 'https://github.com/lenchobel/Xampiest',
    hasDownloadRelease: false,
    featured: false,
    status: 'stable',
    metrics: [
      { label: 'Hosting', value: 'Vercel Edge', detail: 'Auto preview per push' },
      { label: 'Stack', value: 'TS + React', detail: 'Vite-powered build' }
    ],
    architectureDetails: {
      overview: 'Pure front-end deployed on Vercel. Static build served from the edge with branch previews.',
      flow: [
        { title: 'Source', description: 'TypeScript + React source.', tech: 'TS' },
        { title: 'Build', description: 'Vite production bundle.', tech: 'Vite' },
        { title: 'Deploy', description: 'Pushed to Vercel on every commit.', tech: 'Vercel' }
      ],
      concurrencyModel: 'Static SPA — no server runtime.',
      throughputBenchmark: 'Edge-cached HTML/JS; global TTFB under 100ms.'
    }
  },
  {
    id: 'whywrong',
    title: 'whywrong',
    tagline: 'Quick diagnostic script for puzzling failures.',
    category: 'cli',
    categoryLabel: 'CLI & Tools',
    description:
      'A small JavaScript utility I built while debugging a particularly stubborn failure mode. Lives as a single self-contained script.',
    problemSolved:
      'When something fails and the stack trace lies, you want a fast "why is this wrong" probe — not a 200-line debug session.',
    techStack: ['Node.js', 'JavaScript'],
    subdomain: 'whywrong.vercel.app',
    liveDemoUrl: 'https://github.com/lenchobel/whywrong',
    githubUrl: 'https://github.com/lenchobel/whywrong',
    hasDownloadRelease: false,
    featured: false,
    status: 'beta',
    metrics: [
      { label: 'Runtime', value: 'Node.js', detail: 'No external dependencies' },
      { label: 'Footprint', value: '< 5KB', detail: 'Single-file script' }
    ],
    architectureDetails: {
      overview: 'A self-contained Node.js script that probes the failing condition and prints a structured diagnostic.',
      flow: [
        { title: 'Input', description: 'Accepts a target identifier or path.', tech: 'Node.js' },
        { title: 'Probe', description: 'Runs a series of structured checks.', tech: 'JavaScript' },
        { title: 'Report', description: 'Prints a colorized diagnostic.', tech: 'ANSI' }
      ],
      concurrencyModel: 'Single-threaded CLI execution.',
      throughputBenchmark: 'Completes a typical probe in under 50ms.'
    }
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'web', label: 'Web Apps' },
  { id: 'cli', label: 'CLI & Tools' }
] as const;