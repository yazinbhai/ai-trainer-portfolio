import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Calendar, Send, CheckCircle2, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Claude & Hermes Agent Architecture',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = 'consult@yazintrainer.com';
    const subject = encodeURIComponent(`[Inquiry] ${formData.topic} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Yazin,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nProject Details / Objectives:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connect & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Autonomous Agents or <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  Train Your Team
                </span>
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you're looking to implement Claude & Hermes agents into your software stack or conduct an intensive hands-on AI training workshop for your engineering team, I'd love to connect.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5">
              
              {/* Calendly booking card */}
              <a
                href={personalInfo.calendly}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                      Book 30-Min Strategy Call
                    </div>
                    <div className="text-xs text-slate-400">
                      Direct Calendly Discovery Consultation
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Schedule →
                </span>
              </a>

              {/* Email direct */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Direct Email</div>
                    <div className="text-xs font-mono text-cyan-400">{personalInfo.email}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  Send Mail →
                </span>
              </a>

              {/* GitHub profile */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">GitHub Profile</div>
                    <div className="text-xs font-mono text-slate-400">@yazinbhai (Featured Projects)</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  Inspect →
                </span>
              </a>

            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1220] border border-slate-800 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name || 'there'}! Your email client has been prepared with your inquiry to <span className="text-cyan-400 font-mono">consult@yazintrainer.com</span>.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:consult@yazintrainer.com?subject=${encodeURIComponent(`[Inquiry] ${formData.topic} - ${formData.name}`)}&body=${encodeURIComponent(`Hi Yazin,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nProject Details:\n${formData.message}`)}`}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                    >
                      Open Email Again
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-mono bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquiry Form</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Engagement Area
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Claude & Hermes Agent Architecture">Claude & Hermes Agent Architecture Consulting</option>
                      <option value="Hands-on Corporate AI Training">Hands-on Corporate AI & Agent Training Workshop</option>
                      <option value="Deterministic Software Engineering (DOE)">Deterministic AI Systems & DOE Implementation</option>
                      <option value="Executive Communication Coaching">Executive Communication & Soft Skills Mastery</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details or Objectives
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team size, tech stack, agent goals, or training timeline..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-lg shadow-cyan-500/25"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>Send Message to Yazin (consult@yazintrainer.com)</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
