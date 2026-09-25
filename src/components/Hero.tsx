import React from 'react';
import { ArrowDown, Github, Terminal, ArrowUpRight, Cpu, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge - Crisp, Authentic Status Indicator */}
        <div className="flex items-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] sm:text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="truncate">Available for engineering roles & backend architecture</span>
          </div>
        </div>

        {/* Main Grid: Responsive 1 col on mobile, 1 col on tablet, 12 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance"
              style={{ fontFamily: 'var(--font-display, sans-serif)' }}
            >
              Architecting High-Throughput Backends & Voice AI Pipelines.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              I am <strong className="text-zinc-100 font-semibold">Leo</strong>, systems engineer behind <span className="text-zinc-200 font-mono">leolabs.com.et</span>. Specializing in low-latency bidirectional voice streams, hybrid vector retrieval, distributed jobs, and zero-dependency developer tooling.
            </p>

            {/* CTAs - Mobile full-width, tablet/desktop inline */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#applications"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg shadow-sm transition-colors duration-150 text-center"
              >
                <span>Explore Applications</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/leolabs-et"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <button
                type="button"
                onClick={() => {
                  const terminalElem = document.getElementById('terminal');
                  if (terminalElem) {
                    terminalElem.scrollIntoView({ behavior: 'smooth' });
                  }
                  if (onOpenTerminal) onOpenTerminal();
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono text-zinc-400 hover:text-zinc-200 bg-zinc-950 hover:bg-zinc-900 rounded-lg border border-zinc-800 transition-colors"
              >
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span>$ ./launch-cli</span>
              </button>
            </div>

            {/* Micro architectural telemetry */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl">
              <div className="p-3 sm:p-0 rounded-lg bg-zinc-900/40 sm:bg-transparent border border-zinc-800/40 sm:border-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                  &lt; 240ms
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Voice-to-Voice Latency
                </div>
              </div>

              <div className="p-3 sm:p-0 rounded-lg bg-zinc-900/40 sm:bg-transparent border border-zinc-800/40 sm:border-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                  4.8M+
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  pgvector Embeddings
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 sm:p-0 rounded-lg bg-zinc-900/40 sm:bg-transparent border border-zinc-800/40 sm:border-0">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums tracking-tight">
                  99.99%
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Job Delivery Guarantee
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Profile Card (Clean, Authentic, No fake AI face) */}
          <div className="lg:col-span-5 xl:col-span-4 w-full">
            <div className="rounded-xl bg-[#0d0f14] border border-zinc-800 p-5 sm:p-6 shadow-xl">
              {/* Header with Monogram Identity */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-zinc-900 border border-zinc-700/80 flex flex-col items-center justify-center shrink-0 font-mono">
                  <span className="text-base sm:text-lg font-bold text-white tracking-widest">LEO</span>
                  <span className="text-[9px] text-zinc-500">LABS</span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                    Leo
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 truncate">
                    Systems & Backend Architect
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-0.5 font-mono">
                    leolabs.com.et · Remote Worldwide
                  </p>
                </div>
              </div>

              {/* Core engineering focuses */}
              <div className="mt-5 space-y-2.5 text-xs text-zinc-300 border-t border-zinc-800/80 pt-4 font-mono">
                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>Streaming Voice Pipelines (FastAPI, WebSockets)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>Hybrid Semantic Vector Search (pgvector, HNSW)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>Distributed Schedulers & Zero-Alloc Daemons</span>
                </div>
              </div>

              {/* Footer with status */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>GATEWAY: LIVE</span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  SYSTEM VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
