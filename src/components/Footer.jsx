import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Calendar, Bot, Heart, ArrowUp } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px]">
              <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-xs">YA</span>
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-sm">{personalInfo.name}</div>
              <div className="text-[11px] text-slate-500">AI Trainer & Claude / Hermes Agent Architect</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#agents" className="hover:text-cyan-400 transition-colors">Agents</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#training" className="hover:text-cyan-400 transition-colors">Training</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.calendly}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Calendly"
            >
              <Calendar className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Yazin Azad. All rights reserved. Deterministic AI Systems.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Engineered with Claude & Hermes Agent Mindset</span>
            <span className="text-cyan-400">⚡</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
