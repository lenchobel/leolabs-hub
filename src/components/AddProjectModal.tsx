import React, { useState } from 'react';
import { X, Plus, Globe, Github, Terminal, Sparkles, Check } from 'lucide-react';
import { Project } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject
}) => {
  const [title, setTitle] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [category, setCategory] = useState<'ai' | 'web' | 'cli'>('web');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [problemSolved, setProblemSolved] = useState('');
  const [techStackInput, setTechStackInput] = useState('');
  const [liveDemoUrl, setLiveDemoUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [hasDownloadRelease, setHasDownloadRelease] = useState(false);
  const [releaseVersion, setReleaseVersion] = useState('');
  const [releaseUrl, setReleaseUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !subdomain) return;

    const formattedSubdomain = subdomain.replace(/^https?:\/\//, '').trim();
    const stack = techStackInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const categoryLabelMap = {
      ai: 'AI & Automation',
      web: 'Web Apps',
      cli: 'CLI & Tools'
    };

    const newProject: Project = {
      id: title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title,
      tagline: tagline || `${title} production application on ${formattedSubdomain}`,
      category,
      categoryLabel: categoryLabelMap[category],
      description: description || `Production system deployed on https://${formattedSubdomain}`,
      problemSolved: problemSolved || 'Solves production workflow and systems orchestration requirements.',
      techStack: stack.length > 0 ? stack : ['FastAPI', 'Python', 'Docker'],
      subdomain: formattedSubdomain,
      liveDemoUrl: liveDemoUrl || `https://${formattedSubdomain}`,
      githubUrl: githubUrl || `https://github.com/leolabs-et/${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      hasDownloadRelease,
      releaseVersion: hasDownloadRelease ? releaseVersion || 'v1.0.0' : undefined,
      releaseUrl: hasDownloadRelease ? releaseUrl : undefined,
      image: null,
      featured: true,
      status: 'production',
      metrics: [
        { label: 'Status', value: 'Live', detail: 'Deployed on edge' }
      ],
      architectureDetails: {
        overview: `${title} architectural service deployed for high availability and low latency.`,
        flow: [
          {
            title: 'Ingestion & Routing',
            description: `Edge request dispatched to https://${formattedSubdomain}`,
            tech: 'TLS 1.3 / Edge'
          },
          {
            title: 'Core Engine Processing',
            description: 'Application logic executed with isolated state handling.',
            tech: stack[0] || 'Backend'
          }
        ],
        concurrencyModel: 'Async connection pool with autoscaling compute nodes',
        throughputBenchmark: 'Verified in production under standard traffic conditions'
      }
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-[#0c0e14] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8 text-left">
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-[#10121a]">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-white" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Add Real Application
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto font-sans text-xs">
          <div>
            <label className="block text-zinc-400 font-mono text-[11px] mb-1">
              PROJECT TITLE *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. VoxFlow Voice Engine"
              className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-mono"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                SUBDOMAIN (leolabs.com.et) *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value)}
                  placeholder="e.g. appname.leolabs.com.et"
                  className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-mono text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                CATEGORY *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-zinc-500 font-mono text-xs"
              >
                <option value="ai">AI & Automation</option>
                <option value="web">Web Apps</option>
                <option value="cli">CLI & Tools</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 font-mono text-[11px] mb-1">
              TAGLINE / SUMMARY
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. Real-time audio processing & telephony pipeline"
              className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-zinc-400 font-mono text-[11px] mb-1">
              DETAILED DESCRIPTION
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What this application does in detail..."
              className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-zinc-400 font-mono text-[11px] mb-1">
              PROBLEM SOLVED
            </label>
            <input
              type="text"
              value={problemSolved}
              onChange={(e) => setProblemSolved(e.target.value)}
              placeholder="e.g. Reduces audio latency under 200ms with circular buffers"
              className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-zinc-400 font-mono text-[11px] mb-1">
              TECH STACK (comma-separated)
            </label>
            <input
              type="text"
              value={techStackInput}
              onChange={(e) => setTechStackInput(e.target.value)}
              placeholder="e.g. FastAPI, Python, PostgreSQL, Docker, WebSockets"
              className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-mono"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                GITHUB REPO URL
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/leolabs-et/..."
                className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                LIVE DEMO / SUBDOMAIN URL
              </label>
              <input
                type="url"
                value={liveDemoUrl}
                onChange={(e) => setLiveDemoUrl(e.target.value)}
                placeholder="https://..."
                className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 font-mono text-xs"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors min-h-[42px]"
            >
              Save Application to Showcase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
