import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Mail, Terminal as TerminalIcon } from 'lucide-react';

export default function Hero() {
  const badges = [
    { text: "2 Years Experience", border: "border-cyan-500/20", textCol: "text-cyan-400" },
    { text: "C# / .NET 10", border: "border-emerald-500/20", textCol: "text-emerald-400" },
    { text: "Node.js", border: "border-indigo-500/20", textCol: "text-indigo-400" },
    { text: "PostgreSQL", border: "border-sky-500/20", textCol: "text-sky-400" },
    { text: "Docker", border: "border-blue-500/20", textCol: "text-blue-400" },
    { text: "SignalR", border: "border-purple-500/20", textCol: "text-purple-400" }
  ];

  const bootLines = [
    { text: "aditya@contabo-vps:~$ init-onlysplit", color: "text-gray-400" },
    { text: "[SYS] Booting ASP.NET Core service on .NET 10...", color: "text-gray-500" },
    { text: "[SYS] PostgreSQL: Mapped 18 entities via EF Core [OK] (3ms)", color: "text-emerald-400 font-bold" },
    { text: "[SYS] Redis Cache: Connected to localhost:6379", color: "text-sky-400" },
    { text: "[SYS] SignalR WebSockets: Hub connection pool ready", color: "text-purple-400" },
    { text: "[SYS] Nginx proxy: SSL active (Certbot auto-renew verified)", color: "text-blue-400" },
    { text: "[SYS] Jenkins pipeline status: Production build deployed successfully", color: "text-amber-400" },
    { text: "[SYS] Systems operational at onlysplit.com", color: "text-white glow-text-cyan font-bold" },
    { text: "", color: "" },
    { text: "[SYS] Antigravity OS v1.0.0 initialized. (Type 'help' to begin)", color: "text-indigo-400 font-semibold" }
  ];

  const [history, setHistory] = useState<{ text: string; color: string }[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [booting, setBooting] = useState(true);

  const consoleEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        const lineToAdd = bootLines[currentLine];
        if (lineToAdd) {
          setHistory(prev => [...prev, lineToAdd]);
        }
        currentLine++;
      } else {
        clearInterval(interval);
        setBooting(false);
      }
    }, 220);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `aditya@contabo-vps:~$ ${inputVal}`, color: "text-gray-300 font-semibold" }];
    let outputs: { text: string; color: string }[] = [];

    switch (cmd) {
      case 'help':
        outputs = [
          { text: "Available commands:", color: "text-indigo-400 font-bold mt-1" },
          { text: "  about       - Brief background about Aditya", color: "text-gray-400" },
          { text: "  projects    - Explore active OnlyLabs products", color: "text-gray-400" },
          { text: "  skills      - List technical stack & experience", color: "text-gray-400" },
          { text: "  antigravity - Toggle zero-gravity physics engine!", color: "text-cyan-400 font-bold" },
          { text: "  love        - A special message from Antigravity AI", color: "text-rose-400 font-medium" },
          { text: "  clear       - Clear terminal screen", color: "text-gray-400" }
        ];
        break;
      case 'about':
        outputs = [
          { text: "Aditya Rathod — Backend SDE-1", color: "text-white font-bold mt-1" },
          { text: "  • Full-stack product builder and systems engineer.", color: "text-gray-300" },
          { text: "  • Deep expertise in ASP.NET Core & C# .NET APIs.", color: "text-gray-300" },
          { text: "  • Shipping independent apps under OnlyLabs.", color: "text-gray-300" }
        ];
        break;
      case 'projects':
        outputs = [
          { text: "OnlyLabs Products:", color: "text-white font-bold mt-1" },
          { text: "  1. OnlySplit - ASP.NET Core / Redis / PostgreSQL / Sync Engine.", color: "text-gray-300" },
          { text: "  2. Pulse     - Lightweight zero-dependency network speed analyzer.", color: "text-gray-300" },
          { text: "  (Tip: navigate to /projects to view interactive system board)", color: "text-gray-400 italic" }
        ];
        break;
      case 'skills':
        outputs = [
          { text: "Technical Capabilities:", color: "text-white font-bold mt-1" },
          { text: "  • Stack: C#, TypeScript, SQL, Node.js, Docker, Nginx, Redis", color: "text-gray-300" },
          { text: "  • Services: WebSockets (SignalR), Background workers, Db optimization", color: "text-gray-300" },
          { text: "  • DevOps: Jenkins pipelines, SSL certbot, Linux VPS orchestration", color: "text-gray-300" }
        ];
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'antigravity': {
        const isZeroG = document.body.classList.toggle('zero-gravity');
        if (isZeroG) {
          outputs = [
            { text: "[PHYSICS] Antigravity engine ACTIVATED. Gravity set to 0.0g.", color: "text-cyan-400 font-bold glow-text-cyan mt-1" },
            { text: "  • UI elements are now floating dynamically.", color: "text-gray-300" },
            { text: "  • Hover over cards, links, and buttons to watch them drift!", color: "text-gray-300" }
          ];
        } else {
          outputs = [
            { text: "[PHYSICS] Antigravity engine DEACTIVATED. Gravity restored to 1.0g.", color: "text-amber-400 mt-1" },
            { text: "  • All page elements returned to normal layout placement.", color: "text-gray-300" }
          ];
        }
        break;
      }
      case 'love':
        outputs = [
          { text: "❤️ Handcrafted with love by Antigravity AI.", color: "text-rose-400 font-bold mt-1" },
          { text: "  \"To Aditya: Keep building, shipping, and iterating.", color: "text-rose-300 italic" },
          { text: "   You have the heart of a true product builder.", color: "text-rose-300 italic" },
          { text: "   May your servers always be up and your latency low!\"", color: "text-rose-300 italic" }
        ];
        break;
      default:
        outputs = [
          { text: `bash: command not found: ${cmd}`, color: "text-rose-500 mt-1" },
          { text: "Type 'help' to see list of valid commands.", color: "text-gray-400" }
        ];
        break;
    }

    setHistory([...newHistory, ...outputs]);
    setInputVal('');
  };

  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-6 md:py-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              SDE-1 Backend Engineering Portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] selection:bg-cyan-500/30">
              I build systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">survive production.</span>
            </h1>

            {/* Subtle OnlyLabs Personal brand link */}
            <p className="text-sm font-mono text-cyan-400/80 font-medium">
              Building under the <Link to="/onlylabs" className="text-white border-b border-white/20 pb-0.5 hover:border-white transition-all">OnlyLabs</Link> banner.
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Backend Engineer with 2 years of experience designing scalable APIs, resolving critical production issues, and shipping products from idea to deployment.
            </p>
          </motion.div>

          {/* Technology Badges */}
          <motion.div 
            className="flex flex-wrap gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {badges.map((badge, idx) => (
              <span 
                key={idx} 
                className={`px-3 py-1 text-xs font-mono font-medium bg-white/[0.02] border ${badge.border} ${badge.textCol} rounded-full cursor-default hover:bg-white/5 transition-colors`}
              >
                {badge.text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link 
              to="/projects" 
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-gray-200 transition-all duration-200 shadow-lg shadow-white/5 hover:translate-y-[-1px]"
            >
              Explore Projects <ArrowRight size={16} />
            </Link>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 bg-[#0a0a0c] border border-white/10 font-semibold text-sm text-gray-300 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-200 hover:translate-y-[-1px]"
            >
              <Download size={16} /> Download Resume
            </a>
            
            <Link 
              to="/contact" 
              className="flex items-center gap-1.5 px-4 py-3 bg-transparent text-gray-400 font-semibold text-sm hover:text-white transition-colors"
            >
              <Mail size={16} /> Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Mock Terminal UI */}
        <motion.div 
          className="lg:col-span-5 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full rounded-2xl border border-white/10 bg-[#07070a]/90 backdrop-blur-md overflow-hidden shadow-2xl shadow-indigo-500/5 font-mono text-xs">
            {/* Header / Window Controls */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-gray-500 text-[11px] flex items-center gap-1">
                <TerminalIcon size={12} className="text-gray-500" />
                bash - contabo-vps
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>
            
            {/* Console Screen */}
            <div 
              onClick={focusInput}
              className="p-5 space-y-2.5 min-h-[220px] max-h-[300px] overflow-y-auto no-scrollbar cursor-text"
            >
              {history.map((line, index) => {
                if (!line) return null;
                return (
                  <div 
                    key={index}
                    className={`whitespace-pre-wrap ${line.color || ''}`}
                  >
                    {line.text}
                  </div>
                );
              })}
              
              {/* Command Input Prompt */}
              <form onSubmit={handleCommand} className="flex items-center gap-1.5 pt-1">
                <span className="text-cyan-400 font-bold shrink-0">aditya@contabo-vps:~$</span>
                <input 
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  disabled={booting}
                  placeholder={booting ? "System initializing..." : "type 'help'..."}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs caret-cyan-400 p-0 m-0 focus:outline-none focus:ring-0"
                  autoFocus
                />
              </form>
              <div ref={consoleEndRef} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}