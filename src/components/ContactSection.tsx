import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrProject: 'Full-Time Role',
    message: ''
  });

  const emailAddress = 'leobell444@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-2">
                05. Inquiries & Collaboration
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
                style={{ fontFamily: 'var(--font-display, sans-serif)' }}
              >
                Let's Discuss Systems Architecture.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Whether you are hiring for backend engineering roles, scaling an audio AI pipeline, or seeking technical advisory for your infrastructure, feel free to reach out directly.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0d0f14] border border-zinc-800 space-y-3">
              <div className="text-[11px] font-mono text-zinc-500">PRIMARY CONTACT GATEWAY:</div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm sm:text-base font-mono font-semibold text-white hover:text-zinc-300 transition-colors break-all"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-colors shrink-0 min-h-[38px]"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                Responses typically dispatched within 12 hours.
              </div>
            </div>

            {/* External Links */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                Public Profiles:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/lenchobel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#0d0f14] border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between group min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                    <span className="text-xs font-medium text-zinc-200">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                </a>

                <a
                  href="https://linkedin.com/in/lenchobel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#0d0f14] border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between group min-h-[44px]"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                    <span className="text-xs font-medium text-zinc-200">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-5 sm:p-7 rounded-xl bg-[#0d0f14] border border-zinc-800 shadow-xl">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                Direct Engineering Inquiry
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Send a project brief or job role description straight to Leo's inbox.
              </p>

              {formSubmitted ? (
                <div className="p-6 text-center rounded-lg bg-zinc-900 border border-zinc-800 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Inquiry Dispatched</h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you! Your message has been logged. Leo will review the details and respond via <span className="font-mono text-white">{formData.email}</span> promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', roleOrProject: 'Full-Time Role', message: '' });
                    }}
                    className="mt-3 px-4 py-2 text-xs font-medium text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg min-h-[38px]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">
                        YOUR NAME / COMPANY *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex / Enterprise Inc"
                        className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        inputMode="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@enterprise.com"
                        className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">
                      INQUIRY CONTEXT
                    </label>
                    <select
                      value={formData.roleOrProject}
                      onChange={(e) => setFormData({ ...formData, roleOrProject: e.target.value })}
                      className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm sm:text-xs text-white focus:outline-none focus:border-zinc-500 transition-colors font-mono"
                    >
                      <option value="Full-Time Role">Full-Time Backend Engineering Role</option>
                      <option value="Voice AI Pipeline">Voice AI & Streaming Pipeline Architecture</option>
                      <option value="Vector RAG Systems">Vector Retrieval & Database Engineering</option>
                      <option value="Open Source Tooling">Open-Source Collaboration / Feature Request</option>
                      <option value="Advisory / Consultation">Technical Architecture Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1.5">
                      PROJECT BRIEF / MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your requirements, tech stack, timeline, or position details..."
                      className="w-full bg-[#10121a] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors font-mono leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 disabled:opacity-50 rounded-lg min-h-[44px] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
