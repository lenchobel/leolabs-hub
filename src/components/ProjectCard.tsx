import React, { useState } from 'react';
import { ExternalLink, Github, Download, Layers, Globe, Trash2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
  onDelete?: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect, onDelete }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative rounded-xl bg-[#0d0f14] border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 flex flex-col justify-between overflow-hidden shadow-sm">
      <div>
        {/* Header / Visual Preview Container */}
        {project.image && !imageError ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur border border-zinc-800 text-[11px] font-mono text-zinc-300">
              {project.subdomain}
            </div>
          </div>
        ) : (
          /* Clean, authentic technical header */
          <div className="p-4 sm:p-5 border-b border-zinc-800/80 bg-[#10121a]/50 flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-xs font-mono text-zinc-300 font-medium">
                  {project.subdomain}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {project.status}
                </span>
                {onDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(project.id)}
                    className="p-1 text-zinc-600 hover:text-rose-400 transition-colors"
                    title="Remove project"
                    aria-label={`Remove ${project.title}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Subtle container ready for preview asset */}
            <div className="py-2.5 px-3 rounded-lg border border-dashed border-zinc-800/80 bg-zinc-950/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="truncate">Visual preview slot · Add image when ready</span>
              <span className="text-[10px] text-zinc-600 shrink-0 ml-2">READY</span>
            </div>
          </div>
        )}

        {/* Content Area (Target of CSS Selector 2 & 3: article > div:nth-of-type(1) > div:nth-of-type(2)) */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Metadata Category */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="text-zinc-200 font-semibold">{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            {project.releaseVersion ? (
              <span className="text-emerald-400 font-mono">{project.releaseVersion}</span>
            ) : (
              <span className="capitalize">{project.status}</span>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-1 leading-snug">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Problem Solved */}
          <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-850 text-xs text-zinc-400">
            <span className="text-zinc-200 font-medium">Problem: </span>
            <span className="line-clamp-2">{project.problemSolved}</span>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-zinc-400">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Metrics & Actions */}
      <div className="p-4 sm:p-5 pt-0 mt-3">
        {/* Metric Row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="py-2.5 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-500">{project.metrics[0].label}:</span>
            <span className="text-white font-semibold tabular-nums">{project.metrics[0].value}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2">
          {/* Launch App */}
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[40px] text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Launch</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Source Code */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 min-h-[40px] min-w-[40px] text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors"
              title="View Source on GitHub"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {/* Download Release if available */}
          {project.hasDownloadRelease && project.releaseUrl && (
            <a
              href={project.releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 min-h-[40px] min-w-[40px] text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors"
              title={`Download Release ${project.releaseVersion || ''}`}
              aria-label={`Download ${project.title} binary`}
            >
              <Download className="w-4 h-4" />
            </a>
          )}

          {/* Inspect Architecture */}
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="inline-flex items-center justify-center gap-1 px-3 py-2.5 min-h-[40px] text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors"
            title="Inspect Architecture"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Details</span>
          </button>
        </div>
      </div>
    </article>
  );
};
