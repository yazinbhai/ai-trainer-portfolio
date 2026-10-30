import React from 'react';
import { testimonials } from '../data/portfolioData';
import { MessageSquareQuote, Star, CheckCircle, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Proven Track Record & Client Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Enterprise Leaders & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Engineering Teams
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            What founders, architects, and corporate executives say about the workshops and agent consulting.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Metric pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 mb-5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.metric}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white">{item.author}</div>
                  <div className="text-xs text-slate-400">{item.role}</div>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

