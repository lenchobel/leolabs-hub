/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TechStackMatrix } from './components/TechStackMatrix';
import { TerminalWidget } from './components/TerminalWidget';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleOpenTerminal = () => {
    const elem = document.getElementById('terminal');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0d] text-zinc-100 flex flex-col selection:bg-zinc-800 selection:text-white bg-grid-pattern">
      {/* Top Bar Navigation */}
      <Navbar onOpenTerminal={handleOpenTerminal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenTerminal={handleOpenTerminal} />

        {/* 2. Live Application Showcase (The Grid) */}
        <ProjectShowcase />

        {/* 3. Architecture & Tech Stack Matrix */}
        <TechStackMatrix />

        {/* 4. Interactive Terminal / CLI Widget */}
        <TerminalWidget />

        {/* 5. Philosophy & Background */}
        <AboutSection />

        {/* 6. Contact & Social Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
