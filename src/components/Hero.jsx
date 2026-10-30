import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Bot, Sparkles, Terminal, ArrowRight, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Cyber grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/20">
                <Bot className="w-3.5 h-3.5" />
                Master AI Trainer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/30 shadow-sm shadow-violet-500/20">
                <Cpu className="w-3.5 h-3.5" />
                Claude & Hermes Agent Expert
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Deterministic DOE Engine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Bridging Human Potential with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                Autonomous AI Agents
              </span>
            </h1>

            {/* Key Expertise Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-violet-950/40 border border-cyan-500/20 text-slate-200 text-sm sm:text-base leading-relaxed text-left">
              <p className="font-medium text-white mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Specialized AI Agent Architecture:</span>
              </p>
              I am an expert on creating enterprise-grade, deterministic AI agents using{' '}
              <span className="text-cyan-300 font-semibold underline decoration-cyan-500/50 underline-offset-2">Anthropic Claude</span>{' '}
              (Model Context Protocol & structured tool calling) and{' '}
              <span className="text-violet-300 font-semibold underline decoration-violet-500/50 underline-offset-2">Nous Hermes Agent</span>{' '}
              (open-weights reasoning, private tool-calling loops, & local execution swarms).
            </div>

            {/* Paragraph Bio */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Certified in <span className="text-slate-200 font-medium">Prompt Engineering for ChatGPT</span>, <span className="text-slate-200 font-medium">Google AI Essentials</span>, and <span className="text-slate-200 font-medium">Google Prompting Essentials</span>, I combine production-tested prompt architectures with deep Claude and Hermes autonomous agent engineering to upskill engineering and enterprise teams.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#agents"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
              >
                <Bot className="w-4 h-4" />
                <span>Explore Claude & Hermes Agents</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>AI GitHub Projects</span>
              </a>

              <a
                href={personalInfo.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-violet-300 bg-violet-950/40 hover:bg-violet-900/40 border border-violet-500/30 transition-all"
              >
                <Zap className="w-4 h-4 text-violet-400" />
                <span>Book 30-Min Strategy Call</span>
              </a>
            </div>

            {/* Live Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="text-left bg-slate-900/40 p-3 rounded-lg border border-slate-800/50">
                  <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Holographic Photo & Agent HUD Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer glowing aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0d1322] border border-cyan-500/30 overflow-hidden shadow-2xl p-4 sm:p-5">
                
                {/* HUD Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-emerald-400 font-semibold">AGENT SYSTEM: ONLINE</span>
                  </div>
                  <div className="text-slate-400">ID: YAZIN-AZAD-01</div>
                </div>

                {/* Photo with tech gradient backdrop */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-cyan-950/40 via-slate-900 to-[#080c14] border border-slate-800">
                  <img
                    src={personalInfo.photo}
                    alt="Yazin Azad - AI Trainer & Agent Architect"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                    onError={(e) => {
                      // Fallback avatar if local image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center');
                      e.currentTarget.parentElement.innerHTML = '<div class="text-center p-8"><div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-3xl font-bold font-mono text-white mb-4">YA</div><div class="text-lg font-bold text-white">Yazin Azad</div><div class="text-xs text-cyan-400 font-mono mt-1">Master AI Trainer & Agent Expert</div></div>';
                    }}
                  />

                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090d16] via-[#090d16]/80 to-transparent" />

                  {/* Floating Agent Badge Top-Right */}
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md border border-cyan-500/40 rounded-lg px-2.5 py-1 text-[11px] font-mono text-cyan-300 shadow-lg flex items-center gap-1.5">
                    <Bot className="w-3 h-3 text-cyan-400" />
                    <span>Claude 3.7 / MCP</span>
                  </div>

                  {/* Floating Agent Badge Top-Left */}
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md border border-violet-500/40 rounded-lg px-2.5 py-1 text-[11px] font-mono text-violet-300 shadow-lg flex items-center gap-1.5">
                    <Cpu className="w-3 h-3 text-violet-400" />
                    <span>Hermes 3 Agent</span>
                  </div>

                  {/* Card Bottom Identity */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-xs font-mono text-cyan-400 tracking-wider">AI TRAINER & ARCHITECT</div>
                    <div className="text-xl font-bold text-white leading-tight">Yazin Azad</div>
                    <div className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      Certified Gen AI Prompt Engineer
                    </div>
                  </div>
                </div>

                {/* Sub-HUD Metrics */}
                <div className="mt-3.5 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-800">
                    <div className="text-cyan-400 font-semibold">Claude</div>
                    <div className="text-[10px] text-slate-400">MCP Orchestrator</div>
                  </div>
                  <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-800">
                    <div className="text-violet-400 font-semibold">Hermes</div>
                    <div className="text-[10px] text-slate-400">Open-Weights Swarm</div>
                  </div>
                  <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-800">
                    <div className="text-emerald-400 font-semibold">DOE Loop</div>
                    <div className="text-[10px] text-slate-400">Zero Probabilistic Drift</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
