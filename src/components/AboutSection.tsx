import React from 'react';
import { Terminal, Zap, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
              04. Philosophy & Background
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: 'var(--font-display, sans-serif)' }}
            >
              Building Backend Systems That Never Sleep Under Load.
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                My work centers on the intersection of <strong className="text-white">distributed backend systems</strong>, <strong className="text-white">real-time streaming AI pipelines</strong>, and <strong className="text-white">developer tooling</strong>. Over the past 2+ years, I have shipped production services spanning async FastAPI backends, Telegram delivery bots, and hybrid semantic search on top of PostgreSQL + pgvector.
              </p>
              <p>
                Whether orchestrating WebSocket voice pipelines for low-latency assistants or indexing multidimensional embeddings in pgvector for semantic retrieval, I prioritize deterministic performance, rigorous error handling, and clean system boundaries.
              </p>
              <p>
                At <span className="text-zinc-200 font-mono">leolabs.com.et</span>, every application is designed to solve real operational bottlenecks: eliminating audio jitter, pruning bloated Docker images, and replacing heavyweight daemons with zero-allocation compiled binaries.
              </p>
            </div>

            {/* Quick Specs */}
            <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <span className="text-zinc-500">BASE LOCATION:</span>
                <p className="text-white font-medium mt-0.5">Addis Ababa, Ethiopia (UTC+3)</p>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                <span className="text-zinc-500">WORK PREFERENCE:</span>
                <p className="text-emerald-400 font-medium mt-0.5">Remote Worldwide / Async</p>
              </div>
            </div>
          </div>

          {/* Right Column: Three Engineering Tenets */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Three Engineering Tenets:
            </h3>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0d0f14] border border-zinc-800 space-y-2">
              <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-zinc-300 shrink-0" />
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  01. Latency is an Architectural Feature
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pl-7">
                In real-time voice and search, every millisecond counts. We design with circular jitter buffers, speculative token inference, and memory-mapped file handles rather than piling on layers of unnecessary serialization.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0d0f14] border border-zinc-800 space-y-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  02. Graceful Degradation & Backpressure
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pl-7">
                Distributed systems inevitably experience downstream network timeouts and database saturation. We enforce strict circuit breakers, exponential jitter backoff, and poison-pill isolation.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0d0f14] border border-zinc-800 space-y-2">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-zinc-300 shrink-0" />
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  03. Developer Ergonomics & Portability
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pl-7">
                Production-grade developer tooling should run anywhere without bloated runtimes. We compile standalone CLI binaries and provide interactive OpenAPI gateways with continuous contract validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
