import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, Copy, Check, CornerDownLeft } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { TerminalCommandOutput } from '../types';

const INITIAL_OUTPUT: TerminalCommandOutput[] = [
  {
    command: 'motd',
    output: [
      'LEO LABS SHELL (v2.8.4-prod) · leolabs.com.et',
      'System: Linux 6.8.0-sys x86_64 · TLS 1.3 edge-routed',
      'Type "help" or tap quick commands below to explore.'
    ],
    type: 'banner'
  }
];

const AVAILABLE_COMMANDS = [
  'help',
  'about',
  'projects',
  'skills',
  'contact',
  'curl status',
  'cat resume',
  'sudo hire-me',
  'clear',
  'whoami',
  'uptime',
  'date'
];

export const TerminalWidget: React.FC = () => {
  const [history, setHistory] = useState<TerminalCommandOutput[]>(INITIAL_OUTPUT);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal to bottom when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputResult: string | string[] = '';
    let outputType: TerminalCommandOutput['type'] = 'text';

    if (lower === 'help') {
      outputResult = [
        'Available commands:',
        '  help           - Display list of available system commands',
        '  about          - Engineering background & focus areas',
        '  projects       - Overview of live deployed systems (*.leolabs.com.et)',
        '  skills         - Core backend, database & infra proficiencies',
        '  curl status    - Run health probes across live subdomains',
        '  cat resume     - Condensed engineering career history',
        '  contact        - Direct contact info & verified email',
        '  sudo hire-me   - Recruitment pipeline inquiry',
        '  uptime         - Current gateway uptime metrics',
        '  whoami         - Print session identifier',
        '  clear          - Clear screen'
      ];
    } else if (lower === 'about') {
      outputResult = [
        'LEO — Backend Software Engineer',
        '------------------------------------------------------------',
        '• Domain: https://leolabs.com.et',
        '• Focus: Async FastAPI backends, pgvector retrieval, Telegram',
        '         delivery bots, and developer tooling.',
        '• Philosophy: "Systems should be simple, observable, resilient, and fast."',
        '• Status: Available for backend engineering roles & project contracts.'
      ];
    } else if (lower === 'projects') {
      if (PROJECTS.length === 0) {
        outputResult = [
          'NO APPLICATIONS REGISTERED YET.',
          '------------------------------------------------------------',
          'New systems are being added — check back shortly.'
        ];
      } else {
        outputResult = [
          'DEPLOYED PRODUCTION SYSTEMS:',
          '------------------------------------------------------------',
          ...PROJECTS.map(
            (p) =>
              `• ${p.title} -> https://${p.subdomain} [${p.techStack.slice(0, 3).join(', ')}]`
          ),
          '',
          'Use "curl status" to inspect gateway latency.'
        ];
      }
      outputType = 'table';
    } else if (lower === 'skills') {
      outputResult = [
        'CORE TECHNICAL CAPABILITIES:',
        '  Languages:    Python 3.11 (AsyncIO, uvloop), TypeScript, Node.js, Go (basic)',
        '  Frameworks:   FastAPI, React 19, Vite, Pydantic v2, TanStack Query, Zod',
        '  Databases:    PostgreSQL, pgvector (768-dim), Supabase (RLS)',
        '  AI / Search:  Groq (LPUs), Hugging Face (multilingual-e5-base), HNSW',
        '  Delivery:     Telegram Bot API + Mini Apps, Resend (email), Chapa',
        '  DevOps:       Docker + Compose, Render, Vercel, Sentry, GitHub Actions'
      ];
    } else if (lower === 'curl status' || lower.startsWith('curl')) {
      if (PROJECTS.length === 0) {
        outputResult = [
          'GATEWAY HEALTH PROBES (TLS 1.3 · Edge Routing):',
          '  DNS Zone: *.leolabs.com.et [ONLINE]',
          '  Status: 0 active project subdomains registered.',
          '  Ready to route traffic as soon as applications are configured.'
        ];
      } else {
        outputResult = [
          'GATEWAY HEALTH PROBES (TLS 1.3 · Edge Routing):',
          ...PROJECTS.map((p) => `  HTTP/2 200 OK -> https://${p.subdomain} (healthy)`),
          '',
          '✓ Edge gateways operational.'
        ];
      }
      outputType = 'success';
    } else if (lower === 'cat resume') {
      outputResult = [
        'CAREER SUMMARY: Leo (leolabs.com.et)',
        '============================================================',
        'Role: Backend Software Engineer',
        'Location: Remote (Worldwide)',
        '',
        'EXPERIENCE HIGHLIGHTS:',
        '• Built async FastAPI services with WebSocket streaming for low-latency',
        '  conversational AI, integrating Groq LLMs and HF-hosted embeddings.',
        '• Designed PostgreSQL + pgvector retrieval with HNSW indexes, hybrid',
        '  lexical-semantic filtering, and semantic caching to cut token spend.',
        '• Shipped a Telegram delivery bot over Supabase with Row Level Security',
        '  and Postgres realtime subscriptions for end-user feedback loops.',
        '• Built TypeScript + React frontends (Next.js / Vite) for portfolio and',
        '  internal tooling, with CI/CD on Vercel preview deployments.'
      ];
    } else if (lower === 'sudo hire-me' || lower === 'hire-me' || lower === 'hire') {
      outputResult = [
        'RECRUITING & CONTRACTING INQUIRY',
        '------------------------------------------------------------',
        '• Primary Email: leobell444@gmail.com',
        '• GitHub: https://github.com/lenchobel',
        '• Availability: Full-time Backend Engineering Roles & Project Contracts',
        '',
        'Use the Contact section below or email directly!'
      ];
      outputType = 'success';
    } else if (lower === 'contact') {
      outputResult = [
        'DIRECT CONTACT CHANNELS:',
        '  Email:     leobell444@gmail.com',
        '  Domain:    https://leolabs.com.et',
        '  GitHub:    https://github.com/lenchobel'
      ];
    } else if (lower === 'whoami') {
      outputResult = 'visitor@leolabs-client [guest session, permissions: READ_ONLY]';
    } else if (lower === 'uptime') {
      outputResult = 'leolabs-gateway up 180 days, load average: 0.12, 0.15, 0.10';
    } else if (lower === 'date') {
      outputResult = new Date().toUTCString();
    } else {
      outputResult = [
        `command not found: "${cmd}".`,
        'Type "help" to see available commands or tap quick commands below.'
      ];
      outputType = 'error';
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        output: outputResult,
        type: outputType
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (!inputVal.trim()) return;
      const match = AVAILABLE_COMMANDS.find((c) =>
        c.toLowerCase().startsWith(inputVal.toLowerCase().trim())
      );
      if (match) {
        setInputVal(match);
      }
    }
  };

  const copyTerminalHistory = () => {
    const text = history
      .map((item) => {
        const out = Array.isArray(item.output) ? item.output.join('\n') : item.output;
        return `$ ${item.command}\n${out}`;
      })
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-12 sm:py-16 md:py-20 border-b border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-left">
          <div className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-2">
            03. Interactive Shell
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display, sans-serif)' }}
          >
            Developer Terminal Widget
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
            Interact with Leo's systems directly from your browser. Test health checks, read the raw resume, or inspect deployment architecture.
          </p>
        </div>

        {/* Terminal Container */}
        <div
          className={`rounded-xl border border-zinc-800 bg-[#090b10] shadow-xl overflow-hidden transition-all duration-300 font-mono text-xs ${
            isExpanded ? 'min-h-[500px]' : 'min-h-[360px] sm:min-h-[400px]'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#0f1118] border-b border-zinc-800 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
              <span className="ml-2 text-zinc-400 text-[11px] font-mono flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-zinc-300" />
                leo@leolabs.com.et:~
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={copyTerminalHistory}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
                title="Copy terminal session"
                aria-label="Copy terminal text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors hidden sm:block"
                title={isExpanded ? 'Collapse' : 'Expand'}
                aria-label="Toggle terminal size"
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div
            ref={terminalBodyRef}
            onClick={() => inputRef.current?.focus()}
            className="p-3.5 sm:p-5 overflow-y-auto space-y-3 max-h-[380px] sm:max-h-[440px] cursor-text"
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.command !== 'motd' && (
                  <div className="flex flex-wrap items-center gap-1.5 text-zinc-400">
                    <span className="text-zinc-500 font-semibold select-none">leo@leolabs:~$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                )}

                <div
                  className={`leading-relaxed whitespace-pre-wrap font-mono text-[11px] sm:text-xs break-words ${
                    item.type === 'banner'
                      ? 'text-zinc-300 border-l-2 border-zinc-700 pl-2.5 py-1'
                      : item.type === 'success'
                      ? 'text-emerald-400'
                      : item.type === 'error'
                      ? 'text-rose-400'
                      : 'text-zinc-300'
                  }`}
                >
                  {Array.isArray(item.output) ? item.output.join('\n') : item.output}
                </div>
              </div>
            ))}

            {/* Prompt Input Row */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-zinc-500 font-semibold select-none shrink-0 text-xs">
                $
              </span>
              <div className="flex-1 relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-white focus:outline-none font-mono caret-white text-sm sm:text-xs"
                  placeholder="Type command (try 'help' or 'projects')..."
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <button
                type="button"
                onClick={() => executeCommand(inputVal)}
                className="text-zinc-400 hover:text-white p-1 shrink-0"
                aria-label="Send command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Clickable Command Bar (Touch friendly on mobile & tablet) */}
          <div className="px-3 sm:px-4 py-2.5 bg-[#0f1118] border-t border-zinc-800 flex items-center gap-1.5 overflow-x-auto">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider shrink-0 select-none mr-1">
              Run:
            </span>
            {[
              { label: 'help', cmd: 'help' },
              { label: 'projects', cmd: 'projects' },
              { label: 'curl status', cmd: 'curl status' },
              { label: 'skills', cmd: 'skills' },
              { label: 'cat resume', cmd: 'cat resume' },
              { label: 'contact', cmd: 'contact' },
              { label: 'clear', cmd: 'clear' }
            ].map((btn) => (
              <button
                key={btn.cmd}
                type="button"
                onClick={() => executeCommand(btn.cmd)}
                className="px-2.5 py-1 text-[11px] rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors whitespace-nowrap shrink-0 min-h-[28px]"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
