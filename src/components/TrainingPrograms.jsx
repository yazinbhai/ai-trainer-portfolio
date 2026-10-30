import React from 'react';
import { trainingModules, credentials, personalInfo } from '../data/portfolioData';
import { Bot, Zap, Users, Workflow, CheckCircle, GraduationCap, Award, Calendar, ArrowRight } from 'lucide-react';

export default function TrainingPrograms() {
  const iconMap = {
    Bot: <Bot className="w-5 h-5 text-cyan-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Users: <Users className="w-5 h-5 text-violet-400" />,
    Workflow: <Workflow className="w-5 h-5 text-emerald-400" />
  };

  return (
    <section id="training" className="py-24 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Master AI Trainer & Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Impact AI & Leadership <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400">
              Training Programs
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            I don't just teach AI theory. I train software engineers, product teams, and executive leaders to build real-world agent pipelines and communicate with strategic precision.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {trainingModules.map((module, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {iconMap[module.icon]}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    {module.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {module.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {module.desc}
                </p>

                {/* Tangible Outcomes */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Core Learning Outcomes:
                  </div>
                  {module.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={personalInfo.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Inquire for Corporate / Team Workshop</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          ))}
        </div>

        {/* Credentials & Pedagogy Foundation */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-[#0c1424] to-slate-900/90 border border-cyan-500/20 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Award className="w-4 h-4" />
            <span>Verified AI & Prompt Engineering Certifications</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Industry-Recognized AI & Agent Credentials
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((cred, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-xs font-mono text-emerald-400 mb-1">
                  {cred.issuer}
                </div>
                <div className="font-bold text-sm text-white mb-1.5 leading-snug">
                  {cred.title}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

