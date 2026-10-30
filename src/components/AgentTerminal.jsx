import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, githubProjects } from '../data/portfolioData';
import { Terminal, Send, Sparkles, CornerDownLeft, RotateCcw } from 'lucide-react';

export default function AgentTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'ANTIGRAVITY AGENT ENGINE v3.8 [YAZIN AZAD ORCHESTRATOR]'
    },
    {
      type: 'system',
      text: 'Type "help" to list commands or click any of the shortcut pills below.'
    },
    {
      type: 'agent',
      text: 'Ready. Listening for human directive...'
    }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    const lower = rawCmd.toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${rawCmd}` }];

    if (lower === 'clear') {
      setHistory([
        {
          type: 'system',
          text: 'Terminal cleared. Type "help" or click a pill.'
        }
      ]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      newHistory.push({
        type: 'response',
        text: `AVAILABLE COMMANDS:
  • status     : View active AI agent engine status & models
  • claude     : Inspect Anthropic Claude & Model Context Protocol (MCP) capabilities
  • hermes     : Inspect Nous Hermes Agent open-weights function calling
  • projects   : List all 8 GitHub repositories
  • training   : View corporate & engineering AI training modules
  • doe        : Explain the Directive -> Observation -> Experiment loop
  • contact    : Get direct contact & discovery call details
  • clear      : Clear console output`
      });
    } else if (lower === 'status') {
      newHistory.push({
        type: 'response',
        text: `[SYSTEM STATUS: ONLINE]
  Orchestrator   : Yazin Azad (Master AI Trainer)
  Claude Agent   : Active (Claude 3.7 Sonnet / MCP Server Enabled)
  Hermes Agent   : Active (Nous Hermes 3 Pro / Function-Calling Swarm)
  Execution Paradigm: 100% Deterministic (AGENTS.md DOE Architecture)
  GitHub Repos   : 8 Production Repositories Indexed`
      });
    } else if (lower === 'claude') {
      newHistory.push({
        type: 'response',
        text: `[ANTHROPIC CLAUDE AGENT ENGINE]
  Architecture : Model Context Protocol (MCP) + Structured Tool Calling
  Model Suite  : Claude 3.7 Sonnet, Claude 3.5 Sonnet, Claude 3.5 Haiku
  Specialty    : Deep reasoning, autonomous refactoring, complex multi-file codebase analysis
  Verification : Constitutional AI system prompts preventing hallucinated parameters`
      });
    } else if (lower === 'hermes') {
      newHistory.push({
        type: 'response',
        text: `[NOUS HERMES AGENT & OPEN-WEIGHTS ENGINE]
  Architecture : Native <tool_call> and <tool_response> XML/JSON schemas
  Model Suite  : Hermes 3 (Llama 3 8B/70B) & Hermes 2 Pro
  Deployment   : 100% Sovereign / Private / Air-Gapped via Ollama, vLLM, llama.cpp
  Specialty    : Zero external telemetry, corporate IP isolation, subagent swarms`
      });
    } else if (lower === 'projects') {
      const projectList = githubProjects
        .map((p, i) => `  [${i + 1}] ${p.title} (${p.category})\n      Repo: ${p.repoUrl}\n      Stack: ${p.tags.join(', ')}`)
        .join('\n\n');
      newHistory.push({
        type: 'response',
        text: `[ALL 8 GITHUB REPOSITORIES]\n\n${projectList}`
      });
    } else if (lower === 'training') {
      newHistory.push({
        type: 'response',
        text: `[AI TRAINING MODULES]
  1. AI Agent Engineering with Claude & Hermes (MCP, Tool Calling, Swarms)
  2. Enterprise AI Upskilling & Automation (Non-tech & leadership teams)
  3. Certified Prompt Engineering (ChatGPT, Google AI & Prompting Essentials)
  4. The DOE Architecture (Eliminating probabilistic error compounding)
  
  Book a session: https://calendly.com/yazintazad/30min`
      });
    } else if (lower === 'doe') {
      newHistory.push({
        type: 'response',
        text: `[THE DOE SYSTEM]
  Layer 1: DIRECTIVE    -> Markdown SOPs defining intent & boundaries
  Layer 2: ORCHESTRATION-> AI Agent routes decisions & handles ambiguity
  Layer 3: EXECUTION    -> Deterministic Python scripts (zero hallucination)
  Feedback: SELF-ANNEAL -> Errors trigger automatic script & SOP refinement.`
      });
    } else if (lower === 'contact') {
      newHistory.push({
        type: 'response',
        text: `[CONTACT YAZIN AZAD]
  Email     : consult@yazintrainer.com / yazinbhai@gmail.com
  Calendly  : https://calendly.com/yazintazad/30min
  GitHub    : https://github.com/yazinbhai
  Location  : Kerala, India (Available Globally Remote & On-Site)`
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${rawCmd}". Type "help" or click one of the pills below.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const commandShortcuts = ['status', 'claude', 'hermes', 'projects', 'training', 'doe', 'contact'];

  return (
    <section id="terminal" className="py-24 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Live Interactive Agent Console</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Query The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Agent Brain</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Experience my agent orchestration mindset directly through this interactive CLI console.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl bg-[#090e1a] border border-cyan-500/30 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 ml-2 text-xs">agent@yazinazad:~$</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] text-cyan-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                CLAUDE-HERMES-V3
              </span>
              <button
                onClick={() => handleCommand('clear')}
                title="Clear screen"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-4 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-3 bg-[#060a12]/95 text-slate-300 leading-relaxed">
            {history.map((line, idx) => (
              <div key={idx}>
                {line.type === 'system' && (
                  <div className="text-slate-500 italic text-[11px] sm:text-xs">
                    {line.text}
                  </div>
                )}
                {line.type === 'user' && (
                  <div className="text-cyan-400 font-semibold flex items-center gap-2">
                    <span>{line.text}</span>
                  </div>
                )}
                {line.type === 'agent' && (
                  <div className="text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 flex-shrink-0" />
                    <span>{line.text}</span>
                  </div>
                )}
                {line.type === 'response' && (
                  <pre className="text-slate-200 whitespace-pre-wrap font-mono text-[11px] sm:text-xs bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                    {line.text}
                  </pre>
                )}
                {line.type === 'error' && (
                  <div className="text-rose-400 bg-rose-950/30 p-2.5 rounded-lg border border-rose-800/40 text-xs">
                    {line.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Suggested Command Pills */}
          <div className="px-4 py-2 bg-[#0a0f1d] border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[11px]">
            <span className="text-slate-500 font-mono flex-shrink-0">Try:</span>
            {commandShortcuts.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-colors flex-shrink-0"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Input Prompt */}
          <div className="flex items-center px-4 py-3 bg-[#0d1424] border-t border-slate-800">
            <span className="text-cyan-400 mr-2 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'claude', 'hermes', 'projects', 'status'..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs sm:text-sm font-mono"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

