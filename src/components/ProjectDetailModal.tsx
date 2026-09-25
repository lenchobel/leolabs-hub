import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, Download, Check, Copy, Cpu, Activity, Server, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [copiedClone, setCopiedClone] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'benchmarks' | 'api'>('architecture');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.githubUrl}.git`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0c0e14] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8 text-left">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-800 bg-[#10121a]">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
              {project.title}
            </h2>
            <span className="text-xs font-mono text-zinc-400 hidden md:inline-block truncate">
              {project.subdomain}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors focus:outline-none min-h-[36px] min-w-[36px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Hero Summary */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <span className="text-zinc-200 font-semibold">{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Status: {project.status.toUpperCase()}</span>
              {project.releaseVersion && (
                <>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span className="text-emerald-400 font-mono">{project.releaseVersion}</span>
                </>
              )}
            </div>
            <p className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800"
              >
                <div className="text-xs text-zinc-400">{metric.label}</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                  {metric.value}
                </div>
                {metric.detail && (
                  <div className="text-[11px] text-zinc-500 mt-0.5">{metric.detail}</div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Clone Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 gap-2">
            <span className="truncate pr-2">
              <span className="text-zinc-500 select-none">$ </span>
              {cloneCommand}
            </span>
            <button
              type="button"
              onClick={copyToClipboard}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-xs transition-colors shrink-0 min-h-[32px]"
            >
              {copiedClone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Technical Section Tabs (Touch-friendly on mobile) */}
          <div className="border-b border-zinc-800 flex items-center gap-2 sm:gap-4 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`pb-2.5 text-xs font-semibold tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap min-h-[36px] ${
                activeTab === 'architecture'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              SYSTEM FLOW
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('benchmarks')}
              className={`pb-2.5 text-xs font-semibold tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap min-h-[36px] ${
                activeTab === 'benchmarks'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              BENCHMARKS
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('api')}
              className={`pb-2.5 text-xs font-semibold tracking-wider transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap min-h-[36px] ${
                activeTab === 'api'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              DEPLOYMENT
            </button>
          </div>

          {/* Tab 1: Architecture Pipeline */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span className="font-semibold text-white">Overview: </span>
                {project.architectureDetails.overview}
              </div>

              {/* Flow Steps Diagram */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Data Pipeline & Processing Stages:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.architectureDetails.flow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/40 border border-zinc-800"
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-mono text-zinc-300 font-semibold">
                          Stage {idx + 1}
                        </span>
                        <span className="font-mono text-zinc-500 text-[11px]">
                          {step.tech}
                        </span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-semibold text-white mb-1">
                        {step.title}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Concurrency & Benchmarks */}
          {activeTab === 'benchmarks' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>CONCURRENCY MODEL</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.architectureDetails.concurrencyModel}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>BENCHMARK THROUGHPUT</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
                  {project.architectureDetails.throughputBenchmark}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-850">
                <div className="text-xs font-mono text-zinc-400 mb-1">
                  PROBLEM SOLVED:
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Deployment & Stack */}
          {activeTab === 'api' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                  Technologies Utilized:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1.5">
                <div className="text-xs font-mono text-zinc-400">DNS ROUTING & SUBDOMAIN</div>
                <div className="text-xs sm:text-sm font-mono text-zinc-200 font-medium">
                  https://{project.subdomain}
                </div>
                <p className="text-xs text-zinc-400">
                  Edge deployment with automatic failover and TLS 1.3 termination.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#10121a] border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors min-h-[38px]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            {project.hasDownloadRelease && project.releaseUrl && (
              <a
                href={project.releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors min-h-[38px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download {project.releaseVersion}</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors min-h-[38px]"
            >
              Close
            </button>
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors min-h-[38px]"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
