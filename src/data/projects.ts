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
    title: 'RegulatorDigest2',
    tagline: 'Telegram regulatory intelligence digest, served daily via Groq + pgvector.',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    description:
      'A backend pipeline that ingests regulator updates, summarizes them with Groq-hosted language models, indexes embeddings into pgvector for semantic retrieval, and pushes a daily digest to subscribers over a Telegram bot.',
    problemSolved:
      'Operators were drowning in unstructured regulator PDFs and scattered RSS feeds. RegulatorDigest2 collapses this into a single, personalized Telegram digest with semantic search over historical rulings.',
    techStack: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'pgvector', 'Groq LPU', 'Hugging Face Embeddings', 'Telegram Bot API', 'Docker'],
    subdomain: 'regdigest.et',
    liveDemoUrl: 'https://regdigest.et',
    // TODO: repo is private / not yet on GitHub — leave empty to hide the Source button.
    githubUrl: '',
    hasDownloadRelease: false,
    featured: true,
    status: 'production',
    metrics: [
      { label: 'Pipeline Latency', value: '< 500ms', detail: 'End-to-end vector → LLM → Telegram push' },
      { label: 'Daily Digest', value: 'Automated', detail: 'Scheduled job, idempotent retry' },
      { label: 'Vector Index', value: 'pgvector HNSW', detail: 'Hybrid lexical-semantic retrieval' }
    ],
    architectureDetails: {
      overview:
        'Supabase Postgres hosts both relational data and pgvector embeddings. A FastAPI service coordinates ingestion, summarization via Groq, and delivery to Telegram subscribers.',
      flow: [
        { title: 'Source Ingestion', description: 'Pull regulator feeds and PDFs on a schedule.', tech: 'FastAPI + asyncio' },
        { title: 'Embedding & Index', description: 'SentenceTransformers embed chunks; pgvector HNSW indexes them.', tech: 'Hugging Face + pgvector' },
        { title: 'Summarization', description: 'Relevant chunks summarized via Groq-hosted LLM.', tech: 'Groq LPU' },
        { title: 'Telegram Delivery', description: 'Bot pushes digest to subscribers with retry/backoff.', tech: 'Telegram Bot API' }
      ],
      concurrencyModel: 'asyncio workers + Supabase connection pooling; per-subscriber delivery serialized through a BullMQ-style queue.',
      throughputBenchmark: 'Tested at sub-500ms p95 from query to Telegram send on a single 2-vCPU instance.'
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