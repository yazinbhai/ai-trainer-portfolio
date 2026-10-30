export const personalInfo = {
  name: "Yazin Azad",
  title: "Master AI Trainer & Autonomous Agent Architect",
  tagline: "Empowering enterprises and developers through practical AI upskilling, while architecting mission-critical autonomous agents using Claude and Hermes Agent.",
  github: "https://github.com/yazinbhai",
  email: "consult@yazintrainer.com",
  calendly: "https://calendly.com/yazintazad/30min",
  phone: "+91 (Contact via Email / Calendly)",
  location: "Kerala, India • Available Globally for Remote & On-Site Engagements",
  photo: "/Yazin_professional.png",
  logo: "/yazin-trainer-logo.png",
  stats: [
    { label: "Autonomous Agent Architectures", value: "Claude & Hermes" },
    { label: "GitHub Repositories", value: "8 Active" },
    { label: "Professionals & Teams Coached", value: "1,200+" },
    { label: "Deterministic Execution", value: "100% Reliable" }
  ]
};

export const agentSpecializations = {
  claude: {
    name: "Anthropic Claude Agent Architecture",
    badge: "Enterprise Agent Frameworks",
    modelFocus: "Claude 3.7 Sonnet / Claude 3.5 Sonnet & Haiku",
    description: "Architecting deterministic multi-step agent systems with Model Context Protocol (MCP), deep tool use, constitutional alignment, and long-context retrieval architectures.",
    capabilities: [
      {
        title: "Model Context Protocol (MCP)",
        desc: "Building custom MCP server integrations linking Claude to local filesystems, shell commands, databases, browser automation, and enterprise APIs."
      },
      {
        title: "Autonomous Tool Use & Routing",
        desc: "Designing precise JSON tool-calling pipelines, structured Pydantic schemas, and fallback-tolerant deterministic execution loops."
      },
      {
        title: "Constitutional & Guardrailed Prompts",
        desc: "Crafting bulletproof system prompts and self-correcting evaluation loops that prevent hallucination and enforce mission-critical business logic."
      },
      {
        title: "Extended Thinking & Complex Workflows",
        desc: "Leveraging Claude's deep reasoning and multi-turn iterative problem solving for software engineering, research synthesis, and business orchestration."
      }
    ],
    codeSnippet: `// Claude MCP + Tool Calling Agent Loop
const response = await anthropic.messages.create({
  model: "claude-3-7-sonnet-20250219",
  max_tokens: 4096,
  system: "You are an autonomous orchestrator. Apply DOE: Directive -> Observation -> Experiment.",
  tools: [mcpFileSystem, mcpTerminalRunner, webSearchTool],
  messages: conversationHistory
});
// Self-annealing deterministic execution`
  },

  hermes: {
    name: "Nous Hermes Agent & Open-Weights Systems",
    badge: "Open-Source Agent Powerhouse",
    modelFocus: "Hermes 3 / Hermes 2 Pro (Llama 3 & Mistral Backbones)",
    description: "Pioneering private, on-premise, and open-weights agentic workflows with Nous Hermes. Mastering function calling, structured XML/JSON mode, and subagent collaboration.",
    capabilities: [
      {
        title: "High-Fidelity Function Calling",
        desc: "Harnessing Hermes' specialized function calling format to invoke system tools, execute local scripts, and query APIs with high reliability."
      },
      {
        title: "Private & Air-Gapped Deployments",
        desc: "Deploying local reasoning agents via Ollama, vLLM, and llama.cpp for data-sensitive enterprises requiring zero external cloud telemetry."
      },
      {
        title: "Subagent Choreography & Delegation",
        desc: "Setting up hierarchical agent swarms where Hermes agents act as specialized researchers, execution runners, and code reviewers."
      },
      {
        title: "Synthetic Data & Behavior Tuning",
        desc: "Fine-tuning prompt structures and system behavioral prompts tailored to specific organizational workflows and strict deterministic logic."
      }
    ],
    codeSnippet: `<|im_start|>system
You are Hermes Agent, a sovereign reasoning intelligence.
You possess tools to inspect codebases, execute shell commands,
and verify state deterministically before returning final answers.
<tools>[{"name": "execute_script", "parameters": {...}}]</tools><|im_end|>
<|im_start|>assistant
<tool_call>{"name": "execute_script", "arguments": {"path": "execution/verify.py"}}</tool_call><|im_end|>`
  }
};

export const githubProjects = [
  {
    id: "phonecontrol",
    title: "PhoneControl",
    subtitle: "WebUSB & ADB Android Device Management",
    category: "Systems & Web",
    description: "Web-based Android device management and real-time screen mirroring tool powered by WebUSB and the ADB protocol directly in browser without server dependencies.",
    tags: ["Vue 3", "WebUSB", "WebADB", "scrcpy", "TypeScript", "Android"],
    repoUrl: "https://github.com/yazinbhai/phonecontrol",
    liveUrl: "https://yazinbhai.github.io/phonecontrol/",
    featured: true,
    highlights: ["Direct browser-to-phone WebUSB bridge", "Low-latency screen mirroring", "Touch & key event routing"]
  },
  {
    id: "social-engineering-art-of-human-hacking",
    title: "Social Engineering: The Art of Human Hacking",
    subtitle: "Interactive Master Edition Simulation Lab",
    category: "Cybersecurity & AI",
    description: "Interactive master portal of Christopher Hadnagy's work — complete 9-chapter reading experience, interactive simulation attack-defense labs, and psychological takeaways.",
    tags: ["JavaScript", "HTML5/CSS3", "Interactive Sims", "Netlify", "Security"],
    repoUrl: "https://github.com/yazinbhai/social-engineering-art-of-human-hacking",
    liveUrl: "http://adorable-druid-894ea4.netlify.app",
    featured: true,
    highlights: ["9 Comprehensive chapter deep dives", "Interactive psychological scenario simulators", "Vulnerability assessment matrix"]
  },
  {
    id: "previewspot",
    title: "PreviewSpot",
    subtitle: "Generative AI Ad Film Production Platform",
    category: "AI & Media",
    description: "High-impact platform creating and delivering broadcast-quality video commercial ad films powered by generative AI visual models, voice synthesis, and automated pacing.",
    tags: ["TypeScript", "React", "Generative AI", "Video AI", "Voice Cloning"],
    repoUrl: "https://github.com/yazinbhai/previewspot",
    liveUrl: "https://previewspotfilms.com",
    featured: true,
    highlights: ["AI script-to-storyboard automation", "Automated voice-over synchronization", "High-conversion ad formats"]
  },
  {
    id: "languagequizcreator",
    title: "Language Quiz Creator",
    subtitle: "AI-Driven Adaptive Language Assessments",
    category: "EdTech & AI",
    description: "Dynamic quiz authoring engine that automatically structures language proficiency exercises, grammar diagnostics, and CEFR-aligned vocabulary challenges.",
    tags: ["JavaScript", "Vercel", "Tailwind CSS", "EdTech", "LMS Integration"],
    repoUrl: "https://github.com/yazinbhai/languagequizcreator",
    liveUrl: "https://languagequizcreator.vercel.app",
    featured: true,
    highlights: ["Instant adaptive question generation", "Grammar & contextual nuance scoring", "Instant learner feedback"]
  },
  {
    id: "yazintrainer",
    title: "Yazin Trainer Platform",
    subtitle: "Executive Communication & Soft Skills Portal",
    category: "EdTech & Soft Skills",
    description: "High-performance web portal for executive coaching, corporate communication strategy, and IELTS Band 7.5+ preparation with built-in client media management.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "SEO / LLMS.txt"],
    repoUrl: "https://github.com/yazinbhai/yazintrainer",
    liveUrl: "https://yazintrainer.com",
    featured: false,
    highlights: ["Structured soft skills curriculum", "Marquee testimonials & media gallery", "Integrated booking & lead gen"]
  },
  {
    id: "prakrithihospital",
    title: "Prakrithi Hospital",
    subtitle: "Modern Healthcare Portal & Patient System",
    category: "Healthcare & Web",
    description: "Clean, accessible web presence and digital patient engagement platform for Prakrithi Hospital, engineered for rapid doctor discovery and appointment booking.",
    tags: ["JavaScript", "Responsive UI", "Healthcare UX", "Vercel"],
    repoUrl: "https://github.com/yazinbhai/prakrithihospital",
    liveUrl: "https://prakrithihospital.com",
    featured: false,
    highlights: ["Doctor roster & department indexing", "Mobile-optimized patient triage", "Zero-latency navigation"]
  },
  {
    id: "njamm-njamm",
    title: "Njamm Njamm",
    subtitle: "Kerala Culinary Delicacies D2C Store",
    category: "E-Commerce",
    description: "Direct-to-consumer e-commerce storefront showcasing premium Kerala banana chips and traditional sharkaravaratty with appetizing visual merchandising.",
    tags: ["HTML5", "CSS3", "JavaScript", "D2C Brand", "Payment UI"],
    repoUrl: "https://github.com/yazinbhai/njamm-njamm",
    liveUrl: "https://njammnjamm.com",
    featured: false,
    highlights: ["Brand story visual identity", "Streamlined mobile checkout experience", "Order tracking layout"]
  },
  {
    id: "social-engineer-toolkit",
    title: "Social-Engineer Toolkit (SET)",
    subtitle: "Advanced Human Security Simulation Suite",
    category: "Cybersecurity & AI",
    description: "Maintained repository and fork of the premier penetration testing framework focused on social engineering tactics, credential defense analysis, and security awareness drills.",
    tags: ["Python", "Penetration Testing", "Security Automation", "Adversary Sim"],
    repoUrl: "https://github.com/yazinbhai/social-engineer-toolkit",
    liveUrl: "https://github.com/yazinbhai/social-engineer-toolkit",
    featured: false,
    highlights: ["Credential harvester analysis", "Vector simulation pipelines", "Defense-in-depth awareness training"]
  }
];

export const trainingModules = [
  {
    title: "AI Agent Engineering with Claude & Hermes",
    level: "Advanced / Engineering Teams",
    icon: "Bot",
    desc: "Hands-on implementation of autonomous agentic loops, custom Model Context Protocol (MCP) servers, tool use with Pydantic validation, and private Hermes Agent deployments.",
    outcomes: ["Deploy working MCP tools", "Architect multi-turn self-annealing agent loops", "Zero-hallucination structured outputs"]
  },
  {
    title: "Enterprise AI Upskilling & Workflow Automation",
    level: "Executive & Cross-Functional Teams",
    icon: "Zap",
    desc: "Empower non-technical and managerial teams to integrate LLMs, custom GPTs, prompt chains, and AI tools into daily workflows to achieve 3x productivity gains.",
    outcomes: ["ROI-driven AI adoption map", "Practical prompt engineering heuristics", "Automated document & data pipelines"]
  },
  {
    title: "Prompt Engineering & Precision AI Orchestration",
    level: "Developers & Enterprise Teams",
    icon: "Users",
    desc: "Grounded in certified Google AI & Vanderbilt methodologies: Master few-shot reasoning, chain-of-thought elicitation, structured JSON schema outputs, and multi-turn conversational steering.",
    outcomes: ["Few-shot & multishot prompting frameworks", "Eliminating conversational drift & hallucination", "Google AI & ChatGPT enterprise best practice compliance"]
  },
  {
    title: "The DOE System: Deterministic AI Execution",
    level: "Architects & Product Leaders",
    icon: "Workflow",
    desc: "Implementing the Directive-Observation-Experiment paradigm: turning probabilistic AI into repeatable, deterministic, mission-critical business software.",
    outcomes: ["Self-annealing error recovery loops", "Eliminating cascading agent failure", "Production monitoring & observability"]
  }
];

export const testimonials = [
  {
    quote: "Yazin’s deep understanding of both human communication psychology and cutting-edge AI agent systems is extraordinary. His workshops transformed how our engineering and leadership teams collaborate with autonomous agents.",
    author: "Rahul V.",
    role: "VP of Sales & Technology, Regional Tech",
    metric: "+35% Closing Rate & 3x Velocity"
  },
  {
    quote: "When we wanted to build custom Claude agent workflows with local tools, Yazin provided the exact architectural clarity and hands-on training we needed. Clear, deterministic, and immediately applicable.",
    author: "Arjun K.",
    role: "Lead Software Architect",
    metric: "100% Production Uptime"
  },
  {
    quote: "Unlike theoretical trainers, Yazin demonstrates real-world agent code, live terminal execution, and practical problem solving. He is our go-to trainer for generative AI and agentic systems.",
    author: "Dr. Meera N.",
    role: "Academic Director & Placement Head",
    metric: "94% Placement Success Rate"
  }
];

export const credentials = [
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University / AI Specialization",
    detail: "Mastery of advanced prompt architecture, few-shot conditioning, chain-of-thought heuristics, and structuring LLM outputs for enterprise tasks."
  },
  {
    title: "Google AI Essentials",
    issuer: "Google Certified",
    detail: "Comprehensive generative AI workflows, core machine learning principles, productivity multipliers, and responsible AI deployment."
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Google Certified",
    detail: "Precision prompt design, context framing, multishot tuning, and system instructions for generative models and conversational agents."
  },
  {
    title: "Claude & Hermes Agent Architect",
    issuer: "Autonomous Systems & MCP",
    detail: "Production Model Context Protocol (MCP) tool integration, Nous Hermes open-weights function calling, and deterministic DOE agent loops."
  }
];

