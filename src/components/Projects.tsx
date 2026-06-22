import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Copy, Check, GitBranch, Database, RefreshCw, Cpu, Layers, HardDrive } from 'lucide-react';
import { SiGithub, SiNpm } from '@icons-pack/react-simple-icons';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [copiedPulse, setCopiedPulse] = useState(false);
  const [activeArchNode, setActiveArchNode] = useState<string | null>("client");

  const copyPulseCmd = () => {
    navigator.clipboard.writeText("npm i @onlyrex/pulse");
    setCopiedPulse(true);
    setTimeout(() => setCopiedPulse(false), 2000);
  };

  // OnlySplit Architecture data
  const archNodes = {
    client: {
      title: "Frontend Client (Web & PWA / Android)",
      techs: "React, TypeScript, Zustand, TanStack Query, Capacitor",
      details: "The client runs as a progressive web app (PWA) with Workbox service worker caching for offline access. TanStack Query manages data queries and optimistic cache updates. If connection drops, a local mutation queue holds transaction inputs and automatically drains them upon reconnection. Capacitor packages the app for native Android."
    },
    transport: {
      title: "Real-Time Sync Connection",
      techs: "SignalR client / Server Sockets",
      details: "Establishes a persistent, bi-directional WebSocket channel using SignalR. Broadcasts instantaneous ledger balance refreshes, group transaction activity, and notification deliveries across all active group members, eliminating manual refreshes."
    },
    server: {
      title: "ASP.NET Core Server (.NET 10)",
      techs: "C# Web API, Onion Clean Architecture, FluentValidation",
      details: "Designed using Clean Onion Architecture (separating API, Application, Infrastructure, Domain, and Shared layers). Strictly filters and sanitizes inbound JSON request payloads with FluentValidation rules. Handles secure authentication via JWT access tokens and secure database-backed Refresh Token workflows."
    },
    db: {
      title: "Storage & Cache Tier",
      techs: "PostgreSQL & Redis Cache",
      details: "PostgreSQL acts as the primary database storing core tables (Users, Groups, Expenses, Settlements, Friends). Handled schema design and Entity Framework Core migrations. Integrated a Redis cache layer to store frequently accessed data, optimizing responsiveness and reducing DB load."
    },
    devops: {
      title: "DevOps & VPS Infrastructure",
      techs: "Contabo VPS (Ubuntu), Docker, Nginx, Certbot SSL, Jenkins",
      details: "Self-administered and deployed on a Contabo Ubuntu VPS. Service environments are containerized via Docker and routed through Nginx behind Certbot SSL (configured for automatic certificate renewal). Custom Jenkins automation pipelines pull code, compile Vite assets, and build signed Android APKs."
    }
  };

  return (
    <section id="projects" className="space-y-16 scroll-mt-24">
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
          Featured Work
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Production-Grade Products
        </h2>
      </div>

      {/* Flagship Project: OnlySplit */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-10 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-white/5 pb-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-mono border border-indigo-500/20">
                Flagship Project
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white/5 text-gray-400 text-[10px] font-mono border border-white/10">
                Built by OnlyLabs
              </span>
              <span className="text-xs text-gray-500 font-mono">End-to-End Ownership</span>
            </div>
            
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              OnlySplit
            </h3>
            
            <p className="text-cyan-400 font-medium text-lg leading-relaxed">
              "Expense sharing reimagined for modern groups."
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/adi-rthd" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              title="GitHub Repository"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://onlysplit.com/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/15"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Project details and highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-gray-400 leading-relaxed text-sm">
              OnlySplit is a Splitwise-inspired expense-sharing platform. I independently designed and operated the system from database migrations to production deployment on a VPS behind Nginx. It supports groups, custom splits, real-time sync, and friend management.
            </p>

            <ul className="space-y-3.5 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold select-none mt-0.5">✔</span>
                <span><strong>Real-Time Synchronization:</strong> Driven by C# SignalR Hubs to propagate transactions, chat updates, and balance resets instantly without manual refreshes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold select-none mt-0.5">✔</span>
                <span><strong>Robust Backend Architect:</strong> Built on .NET 10 with Clean Onion Architecture, leveraging JWT access tokens, DB-backed Refresh tokens, and FluentValidation rules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold select-none mt-0.5">✔</span>
                <span><strong>Offline-First PWA:</strong> Leverages Workbox service worker caching for offline static asset hosting, coupled with TanStack Query cache invalidations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold select-none mt-0.5">✔</span>
                <span><strong>Self-Hosted Infrastructure:</strong> Deployed on an Ubuntu VPS (Contabo) using Docker Compose containers, Nginx reverse proxies, and automated Certbot SSL renewals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold select-none mt-0.5">✔</span>
                <span><strong>Jenkins CI/CD Automation:</strong> Custom build pipelines automate Vite frontend static hosting releases and native Capacitor signed Android APK builds.</span>
              </li>
            </ul>

            {/* Technologies Grid */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {["React", ".NET 10", "ASP.NET Core", "EF Core", "PostgreSQL", "Redis", "SignalR", "TanStack Query", "Zustand", "Capacitor", "Docker", "Jenkins", "Nginx"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[11px] font-mono bg-white/5 border border-white/5 text-gray-400 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Architecture Board */}
          <div id="system-design" className="lg:col-span-6 space-y-4">
            <div className="flex justify-between items-center px-4 py-3 bg-white/[0.02] border border-white/5 rounded-t-xl">
              <span className="text-xs font-mono font-medium text-gray-400 flex items-center gap-1.5">
                <GitBranch size={14} className="text-indigo-400" />
                OnlySplit Architecture (Interactive)
              </span>
              <span className="text-[10px] text-gray-500 font-mono">Click to inspect</span>
            </div>
            
            <div className="p-5 bg-black/60 border-x border-b border-white/5 rounded-b-xl space-y-5">
              {/* Architecture Diagram */}
              <div className="flex flex-col gap-2 font-mono text-[10px]">
                
                {/* Client Layer Node */}
                <div 
                  onClick={() => setActiveArchNode("client")}
                  className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all duration-200 ${
                    activeArchNode === "client" 
                      ? "bg-indigo-500/10 border-indigo-500 text-white shadow-md shadow-indigo-500/10" 
                      : "bg-white/[0.01] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold flex items-center justify-center gap-1 text-[11px]">
                    <Layers size={12} /> CLIENT: React & Android (Capacitor)
                  </div>
                  <div className="text-[8px] text-gray-500 mt-0.5">Zustand • TanStack Query • Vite PWA Service Worker</div>
                </div>

                {/* Arrow */}
                <div className="text-center text-gray-600 text-[10px] py-0.5">▼ SignalR WebSocket Connection</div>

                {/* Transport / Hub Node */}
                <div 
                  onClick={() => setActiveArchNode("transport")}
                  className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all duration-200 ${
                    activeArchNode === "transport" 
                      ? "bg-indigo-500/10 border-indigo-500 text-white shadow-md shadow-indigo-500/10" 
                      : "bg-white/[0.01] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold flex items-center justify-center gap-1 text-[11px]">
                    <RefreshCw size={12} /> SYNC: ASP.NET Core SignalR
                  </div>
                  <div className="text-[8px] text-gray-500 mt-0.5">Bi-directional socket hub • Live balance updates</div>
                </div>

                {/* Arrow */}
                <div className="text-center text-gray-600 text-[10px] py-0.5">▼ Onion Layer Services</div>

                {/* API Server Node */}
                <div 
                  onClick={() => setActiveArchNode("server")}
                  className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all duration-200 ${
                    activeArchNode === "server" 
                      ? "bg-indigo-500/10 border-indigo-500 text-white shadow-md shadow-indigo-500/10" 
                      : "bg-white/[0.01] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold flex items-center justify-center gap-1 text-[11px]">
                    <Cpu size={12} /> SERVER: .NET 10 Web API Gateway
                  </div>
                  <div className="text-[8px] text-gray-500 mt-0.5">JWT & Refresh Tokens • FluentValidation • Onion Architecture</div>
                </div>

                {/* Arrow */}
                <div className="text-center text-gray-600 text-[10px] py-0.5">▼ Data & Cache Operations</div>

                {/* Database Node */}
                <div 
                  onClick={() => setActiveArchNode("db")}
                  className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all duration-200 ${
                    activeArchNode === "db" 
                      ? "bg-indigo-500/10 border-indigo-500 text-white shadow-md shadow-indigo-500/10" 
                      : "bg-white/[0.01] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold flex items-center justify-center gap-1 text-[11px]">
                    <Database size={12} /> STORAGE: PostgreSQL & Redis Cache
                  </div>
                  <div className="text-[8px] text-gray-500 mt-0.5">EF Core • Schema migrations • Indexing • Redis read caches</div>
                </div>

                {/* Arrow */}
                <div className="text-center text-gray-600 text-[10px] py-0.5">▼ Infrastructure & Builds</div>

                {/* DevOps Node */}
                <div 
                  onClick={() => setActiveArchNode("devops")}
                  className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all duration-200 ${
                    activeArchNode === "devops" 
                      ? "bg-indigo-500/10 border-indigo-500 text-white shadow-md shadow-indigo-500/10" 
                      : "bg-white/[0.01] border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-bold flex items-center justify-center gap-1 text-[11px]">
                    <HardDrive size={12} /> INFRASTRUCTURE: Contabo VPS & Jenkins
                  </div>
                  <div className="text-[8px] text-gray-500 mt-0.5">Ubuntu Host • Docker containers • Nginx Proxy • Certbot SSL</div>
                </div>
              </div>

              {/* Node Inspector Details */}
              <AnimatePresence mode="wait">
                {activeArchNode && (
                  <motion.div
                    key={activeArchNode}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-2"
                  >
                    <h5 className="text-xs font-mono font-bold text-indigo-400 flex items-center justify-between">
                      <span>{archNodes[activeArchNode as keyof typeof archNodes].title}</span>
                      <span className="text-[9px] text-gray-500 font-mono">active inspector</span>
                    </h5>
                    <p className="text-[10px] text-gray-500 font-mono">
                      Tech stack: {archNodes[activeArchNode as keyof typeof archNodes].techs}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      {archNodes[activeArchNode as keyof typeof archNodes].details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Project: Pulse */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                NPM Package
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white/5 text-gray-400 text-[10px] font-mono border border-white/10">
                Built by OnlyLabs
              </span>
              <span className="text-xs text-gray-500 font-mono">Zero Dependencies</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
              @onlyrex/pulse
            </h3>
            
            <p className="text-emerald-400 font-medium text-base">
              "Lightweight browser network diagnostics."
            </p>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            A developer tool published to NPM that enables developers to measure real-time internet speeds directly from client browsers. Written in native TypeScript using parallel fetch streams and the Streams API, preventing browser main-thread blocking.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span> Zero dependencies (8KB bundle size)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span> TypeScript-first API contracts
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span> Parallel fetch chunk streaming
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span> Active bandwidth calculations
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {["TypeScript", "Streams API", "Fetch API", "NPM Publishing"].map((t) => (
              <span key={t} className="px-2 py-0.5 text-xs font-mono bg-white/5 border border-white/5 text-gray-400 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* NPM Installer Block */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-white/5 space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-white/5 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-1.5">
              <Terminal size={14} className="text-emerald-400" /> Installer
            </span>
            <span>TypeScript native</span>
          </div>

          {/* Copy Box */}
          <div 
            onClick={copyPulseCmd}
            className="flex justify-between items-center p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/20 hover:bg-white/10 transition-all cursor-pointer font-mono text-sm text-white group/cmd"
          >
            <code>npm i @onlyrex/pulse</code>
            <button className="text-gray-500 group-hover/cmd:text-white transition-colors">
              {copiedPulse ? <Check size={16} className="text-emerald-400 animate-scale" /> : <Copy size={16} />}
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500 pt-2 font-mono">
            <a 
              href="https://www.npmjs.com/package/@onlyrex/pulse" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <SiNpm size={14} /> npm package <ExternalLink size={11} />
            </a>
            <span>•</span>
            <a 
              href="https://github.com/adi-rthd" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <GithubIcon size={14} /> github repository <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}