import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Bot, Terminal, FolderGit2, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Claude & Hermes Agents", href: "#agents", highlight: true },
    { name: "Projects", href: "#projects" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-cyan-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-violet-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center overflow-hidden">
                <img 
                  src={personalInfo.logo} 
                  alt="Yazin" 
                  className="w-7 h-7 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = '<span class="text-cyan-400 font-bold font-mono text-sm">YA</span>';
                  }}
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                {personalInfo.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 tracking-wider">AI TRAINER & AGENT ARCHITECT</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  link.highlight
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-800"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.calendly}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-lg group bg-gradient-to-br from-cyan-500 to-violet-600 group-hover:from-cyan-400 group-hover:to-violet-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            >
              <span className="relative px-3.5 py-1.5 transition-all ease-in duration-75 bg-[#090d16] rounded-[6px] group-hover:bg-opacity-0 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
                <span>Book AI Session</span>
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-mono text-slate-300 py-2.5 rounded-lg bg-slate-900 border border-slate-800"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repos</span>
            </a>
            <a
              href={personalInfo.calendly}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
