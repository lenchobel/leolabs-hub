import React, { useState } from 'react';
import { Database, Server, Code, Cpu, ExternalLink, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { TECH_STACK, TECH_CATEGORIES } from '../data/techStack';
import { PROJECTS } from '../data/projects';
import { TechItem } from '../types';

export const TechStackMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTech, setActiveTech] = useState<TechItem | null>(TECH_STACK[0]);

  const filteredTech = TECH_STACK.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  // Find projects using the active technology
  const associatedProjectsList = activeTech
    ? PROJECTS.filter((p) => activeTech.associatedProjects.includes(p.id))
    : [];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <Code className="w-4 h-4 text-zinc-300" />;
      case 'databases_ai':
        return <Database className="w-4 h-4 text-zinc-300" />;
      case 'infra':
        return <Server className="w-4 h-4 text-zinc-300" />;
      default:
        return <Cpu className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="architecture" className="py-12 sm:py-16 md:py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-2">
            02. Engineering Competencies
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display, sans-serif)' }}
          >
            Architecture & Tech Stack Matrix
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
            A comprehensive overview of foundational technologies, distributed systems primitives, and AI orchestration engines powering Leo's production deployments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 mb-6 sm:mb-8 p-1 bg-[#0d0f14] border border-zinc-800 rounded-lg overflow-x-auto max-w-full">
          {TECH_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap min-h-[36px] ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Layout: 1 col on mobile, 12 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Tech Grid: 7 Cols on desktop */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredTech.map((tech) => {
              const isSelected = activeTech?.name === tech.name;
              return (
                <button
                  key={tech.name}
                  type="button"
                  onClick={() => setActiveTech(tech)}
                  className={`text-left p-4 rounded-xl border transition-colors flex flex-col justify-between group min-h-[110px] ${
                    isSelected
                      ? 'bg-zinc-900/90 border-zinc-500 shadow-sm'
                      : 'bg-[#0d0f14] border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(tech.category)}
                      <span className="font-semibold text-sm text-white">
                        {tech.name}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        tech.level === 'Expert'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {tech.level}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {tech.highlight}
                  </p>

                  <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500 w-full">
                    <span>{tech.experienceYears}+ yrs</span>
                    <span className="text-zinc-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      {tech.associatedProjects.length} systems
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tech Inspector: 5 Cols on desktop, full width on mobile/tablet */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 mt-4 lg:mt-0">
            {activeTech ? (
              <div className="p-5 sm:p-6 rounded-xl bg-[#0d0f14] border border-zinc-800 shadow-lg space-y-5">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1.5">
                    <span className="uppercase text-zinc-400">
                      STACK INSPECTOR
                    </span>
                    <span>{activeTech.experienceYears}+ YEARS EXPERIENCE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeTech.name}
                  </h3>
                  <div className="mt-1 text-xs text-zinc-400 font-mono">
                    Proficiency: <span className="text-emerald-400 font-semibold">{activeTech.level}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-850 space-y-1.5">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">ARCHITECTURAL ROLE</div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {activeTech.highlight}
                  </p>
                </div>

                {/* Deployed Systems */}
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                    Deployed In Leo's Systems:
                  </div>

                  <div className="space-y-2">
                    {associatedProjectsList.length > 0 ? (
                      associatedProjectsList.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between"
                        >
                          <div className="min-w-0 pr-2">
                            <div className="text-xs font-semibold text-white truncate">
                              {proj.title}
                            </div>
                            <div className="text-[11px] font-mono text-zinc-400 truncate">
                              {proj.subdomain}
                            </div>
                          </div>
                          <a
                            href={proj.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors shrink-0"
                            title="Open live subdomain"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs text-zinc-500 italic p-2">
                        Integrated across internal private microservices and scripts.
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>Verified Architecture</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Production Ready
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
