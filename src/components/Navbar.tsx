import React, { useState, useEffect } from 'react';
import { Terminal, Github, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0d]/95 backdrop-blur-md border-b border-zinc-800 shadow-md shadow-black/40'
          : 'bg-[#090a0d]/60 backdrop-blur-sm border-b border-zinc-850/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between gap-6 sm:gap-10">
        {/* Brand wordmark - spacious, clean, uncongested */}
        <a
          href="#"
          className="group flex items-center gap-3.5 py-1.5 text-white hover:text-zinc-200 transition-colors shrink-0"
        >
          <span
            className="font-bold text-xl sm:text-2xl tracking-tight"
            style={{ fontFamily: 'var(--font-display, sans-serif)' }}
          >
            Leo Labs
          </span>
          <span className="text-xs font-mono text-zinc-400 border-l border-zinc-800/80 pl-3.5 hidden sm:inline-block tracking-wide">
            leolabs.com.et
          </span>
        </a>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-zinc-400">
          <a
            href="#applications"
            className="hover:text-white transition-colors"
          >
            Applications
          </a>
          <a
            href="#architecture"
            className="hover:text-white transition-colors"
          >
            Architecture
          </a>
          <a
            href="#terminal"
            onClick={(e) => {
              if (onOpenTerminal) {
                onOpenTerminal();
              }
            }}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            CLI
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/lenchobel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md border border-zinc-800 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Touch-friendly 44px min items) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e14] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-1">
          <a
            href="#applications"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-2.5 px-2 rounded-lg hover:bg-zinc-900 transition-colors"
          >
            Applications
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-2.5 px-2 rounded-lg hover:bg-zinc-900 transition-colors"
          >
            Architecture
          </a>
          <a
            href="#terminal"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenTerminal) onOpenTerminal();
            }}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-2.5 px-2 rounded-lg hover:bg-zinc-900 transition-colors flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-zinc-400" />
            CLI Terminal
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-2.5 px-2 rounded-lg hover:bg-zinc-900 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-2.5 px-2 rounded-lg hover:bg-zinc-900 transition-colors"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-zinc-800 flex items-center gap-3">
            <a
              href="https://github.com/lenchobel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 min-h-[44px] text-xs font-medium text-zinc-300 bg-zinc-900 rounded-lg border border-zinc-800"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center px-3 py-2.5 min-h-[44px] text-xs font-semibold text-zinc-950 bg-white rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
