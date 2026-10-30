import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgentSpotlight from './components/AgentSpotlight';
import Projects from './components/Projects';
import TrainingPrograms from './components/TrainingPrograms';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Claude & Hermes Agent Specialization Spotlight */}
        <AgentSpotlight />

        {/* All GitHub Repositories */}
        <Projects />

        {/* Master AI Trainer & Corporate Upskilling Modules */}
        <TrainingPrograms />

        {/* Contact & Consultation Scheduling */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

