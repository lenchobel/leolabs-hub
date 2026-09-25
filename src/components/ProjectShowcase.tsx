import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectingProject, setInspectingProject] = useState<Project | null>(null);

  // Source of truth: the data file. Visitors can only inspect, not add.
  const projectsList = PROJECTS;

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' ? true : project.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = project.title.toLowerCase().includes(q);
      const inTagline = project.tagline.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inStack = project.techStack.some((tech) => tech.toLowerCase().includes(q));
      const inSubdomain = project.subdomain.toLowerCase().includes(q);

      return inTitle || inTagline || inDesc || inStack || inSubdomain;
    });
  }, [projectsList, selectedCategory, searchQuery]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: projectsList.length,
      ai: projectsList.filter((p) => p.category === 'ai').length,
      web: projectsList.filter((p) => p.category === 'web').length,
      cli: projectsList.filter((p) => p.category === 'cli').length
    };
    return counts;
  }, [projectsList]);

  return (
    <section id="applications" className="py-12 sm:py-16 md:py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-2">
              01. Live Systems & Deployments
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display, sans-serif)' }}
            >
              Application Showcase
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
              Production web applications, low-latency pipelines, and developer tools shipped
              across the web, Telegram, and email.
            </p>
          </div>

          {/* Search */}
          {projectsList.length > 0 && (
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stack or name..."
                className="w-full bg-[#10121a] border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors font-mono min-h-[38px]"
              />
            </div>
          )}
        </div>

        {/* Filter Bar (Only shown if applications exist) */}
        {projectsList.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-1.5 p-1 bg-[#0d0f14] border border-zinc-800 rounded-lg overflow-x-auto max-w-full">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] ?? 0;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 min-h-[36px] ${
                      isActive
                        ? 'bg-zinc-100 text-zinc-950 font-semibold'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        isActive ? 'bg-zinc-300 text-zinc-950' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-zinc-500 font-mono">
              Showing {filteredProjects.length} of {projectsList.length} systems
            </div>
          </div>
        )}

        {/* Responsive Grid or "Coming Soon" Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onInspect={(p) => setInspectingProject(p)}
              />
            ))}
          </div>
        ) : projectsList.length > 0 ? (
          <div className="py-12 sm:py-16 text-center rounded-xl bg-[#0d0f14] border border-zinc-800">
            <Filter className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-white">No applications match your filter</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
              No applications match "{searchQuery}" under {selectedCategory}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* No projects registered yet — minimal placeholder, no admin UI */
          <div className="rounded-xl border border-dashed border-zinc-800 bg-[#0d0f14]/60 p-8 sm:p-12 text-center">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              New systems shipping soon
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
              This section is being updated. Check back shortly.
            </p>
          </div>
        )}
      </div>

      {/* Detail / Spec Modal (read-only) */}
      <ProjectDetailModal
        project={inspectingProject}
        onClose={() => setInspectingProject(null)}
      />
    </section>
  );
};