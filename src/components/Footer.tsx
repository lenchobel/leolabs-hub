import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#07080b] py-10 sm:py-12 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Domain */}
          <div className="flex items-center gap-2.5">
            <span
              className="text-base font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display, sans-serif)' }}
            >
              Leo Labs
            </span>
            <span className="font-mono text-zinc-600">·</span>
            <span className="font-mono text-zinc-400">leolabs.com.et</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zinc-400">
            <a href="#applications" className="hover:text-white transition-colors">
              Applications
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#terminal" className="hover:text-white transition-colors">
              CLI
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="https://github.com/lenchobel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <span className="text-zinc-500">© 2026 Leo. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
