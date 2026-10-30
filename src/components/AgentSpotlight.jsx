import React, { useState } from 'react';
import { agentSpecializations } from '../data/portfolioData';
import { Bot, Cpu, Terminal, CheckCircle2, Play, RefreshCw, Sparkles, Layers, Shield, ArrowRight, Code2, Network } from 'lucide-react';

export default function AgentSpotlight() {
  const [activeTab, setActiveTab] = useState('claude'); // 'claude' | 'hermes'
  const [simulationState, setSimulationState] = useState('idle'); // 'idle' | 'running' | 'completed'
  const [simStep, setSimStep] = useState(0);

  const simulationSteps = [
    {
      agent: "Claude 3.7",
      action: "RECEIVE DIRECTIVE",
      desc: "Parsing human intent: 'Analyze codebase, build automated video editing MCP tool, and test deterministic pipeline.'",
      output: "[Layer 1: Directive] Identified inputs, dependencies, and execution boundary.",
      color: "text-cyan-400"
    },
    {
      agent: "Claude MCP Tool Call",
      action: "TOOL EXECUTION (MCP)",
      desc: "Dispatching filesystem & execution tools via Model Context Protocol.",
      output: "CALL: mcp::execute_script('execution/verify_pipeline.py')",
      color: "text-sky-300"
    },
    {
      agent: "Hermes 3 Agent",
      action: "OBSERVE & REASON",
      desc: "Hermes Agent processes terminal output and inspects exit code for error signals.",
      output: "<tool_response>Exit Code 0: All deterministic unit tests passed.</tool_response>",
      color: "text-violet-400"
    },
    {
      agent: "Self-Annealing Loop",
      action: "EXPERIMENT & STABILIZE",
      desc: "Refining directive and locking deterministic script to ensure zero error compounding.",
      output: "SUCCESS: Deliverable validated. Zero probabilistic drift achieved.",
      color: "text-emerald-400"
    }
  ];

  const runSimulation = () => {
    setSimulationState('running');
    setSimStep(0);

    const stepInterval = setInterval(() => {
      setSimStep((prev) => {
        if (prev < simulationSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setSimulationState('completed');
          return prev;
        }
      });
    }, 1200);
  };

  const resetSimulation = () => {
    setSimulationState('idle');
    setSimStep(0);
  };

  return (
    <section id="agents" className="py-24 bg-[#070b14] relative overflow-hidden border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 text-cyan-300 mb-4 shadow-sm shadow-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Expertise Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Autonomous AI Agents with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
              Claude & Hermes Agent
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            I specialize in building and training production-ready autonomous agent ecosystems. By pairing Anthropic Claude's industry-leading reasoning and Model Context Protocol with Nous Hermes Agent's sovereign, open-weights function calling, I engineer systems that run with 100% deterministic reliability.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              onClick={() => setActiveTab('claude')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'claude'
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Anthropic Claude Agent Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab('hermes')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'hermes'
                  ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Nous Hermes Agent & Open-Weights</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Capabilities Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    {activeTab === 'claude' ? agentSpecializations.claude.badge : agentSpecializations.hermes.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeTab === 'claude' ? agentSpecializations.claude.name : agentSpecializations.hermes.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {activeTab === 'claude' ? agentSpecializations.claude.modelFocus : agentSpecializations.hermes.modelFocus}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                {activeTab === 'claude' ? agentSpecializations.claude.description : agentSpecializations.hermes.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(activeTab === 'claude' ? agentSpecializations.claude.capabilities : agentSpecializations.hermes.capabilities).map((cap, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                      <CheckCircle2 className={`w-4 h-4 ${activeTab === 'claude' ? 'text-cyan-400' : 'text-violet-400'}`} />
                      <span>{cap.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code & Architectural Snippet Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#0b101d] border border-slate-800 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    {activeTab === 'claude' ? 'claude_mcp_orchestrator.ts' : 'hermes_agent_tool_loop.xml'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Production Schema</span>
                </div>
              </div>
              <div className="p-4 bg-[#070b14] overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed">
                <pre>
                  <code>{activeTab === 'claude' ? agentSpecializations.claude.codeSnippet : agentSpecializations.hermes.codeSnippet}</code>
                </pre>
              </div>
              <div className="p-4 bg-slate-900/50 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Deterministic Validation</span>
                <span className="text-emerald-400 font-mono font-medium">Verified in Production</span>
              </div>
            </div>

            {/* Quick architectural advantage box */}
            <div className={`p-4 rounded-xl border ${
              activeTab === 'claude' 
                ? 'bg-cyan-950/20 border-cyan-500/30 text-cyan-200' 
                : 'bg-violet-950/20 border-violet-500/30 text-violet-200'
            }`}>
              <div className="flex items-center gap-2 font-semibold text-xs mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Why This Matters For Your Business</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeTab === 'claude'
                  ? "Claude's superior reasoning handles complex codebase exploration, architectural refactors, and multi-tool orchestration with zero hallucinated API calls."
                  : "Hermes Agent provides 100% private, sovereign deployment. Your proprietary corporate IP, confidential customer data, and code never leave your VPC."}
              </p>
            </div>
          </div>

        </div>

        {/* Live Interactive Agent Workflow Simulation */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c1324] to-[#070a12] border border-cyan-500/20 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>Interactive Agent Simulation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                The DOE Agent Loop (Directive → Observation → Experiment)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Experience how my Claude & Hermes agents orchestrate deterministic execution step-by-step.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {simulationState === 'idle' && (
                <button
                  onClick={runSimulation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Simulate Agent Loop</span>
                </button>
              )}
              {simulationState === 'running' && (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Agent Executing... Step {simStep + 1}/4</span>
                </div>
              )}
              {simulationState === 'completed' && (
                <button
                  onClick={resetSimulation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Run Again</span>
                </button>
              )}
            </div>
          </div>

          {/* Simulation Steps Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {simulationSteps.map((step, idx) => {
              const isPast = simulationState !== 'idle' && idx < simStep;
              const isCurrent = simulationState === 'running' && idx === simStep;
              const isDone = simulationState === 'completed';

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                      : isPast || isDone
                      ? 'bg-slate-900/60 border-slate-700/80'
                      : 'bg-slate-950/40 border-slate-900 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Step {idx + 1}</span>
                    <span className={`font-semibold ${step.color}`}>{step.agent}</span>
                  </div>
                  <div className="font-bold text-sm text-white mb-1">
                    {step.action}
                  </div>
                  <p className="text-xs text-slate-400 leading-snug mb-3 min-h-[38px]">
                    {step.desc}
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/50 border border-slate-800 text-[11px] font-mono text-slate-300 break-words">
                    {step.output}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

