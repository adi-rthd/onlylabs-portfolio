import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Sparkles, Terminal, Check } from 'lucide-react';

export default function OnlyLabs() {
  const values = [
    {
      icon: <Layers className="text-cyan-400" size={18} />,
      title: "Product Ownership",
      desc: "Taking responsibilities for features from initial wireframe to backend routing and database mapping."
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={18} />,
      title: "Production-First",
      desc: "Architecting code to handle connection dropouts, memory leaks, high latency database procedures, and server crashes."
    },
    {
      icon: <Sparkles className="text-indigo-400" size={18} />,
      title: "Experimentation",
      desc: "Building a playground to try new frameworks (like .NET 10, Vite PWA mechanisms) on real production servers."
    }
  ];

  return (
    <section id="onlylabs" className="space-y-12 scroll-mt-24">
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
          Builder Identity
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Why OnlyLabs?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Core Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              <strong>OnlyLabs</strong> is my independent product studio—a personal builder identity and sandbox where I design, build, and operate software applications outside of my day-to-day work.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              It represents my core belief: <strong>the best way to grow as a software engineer is by shipping real code to production and owning the outcome.</strong> By maintaining infrastructure, profiling queries, and resolving socket connectivity errors directly for real users, I build practical systems that survive traffic.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5">
            <h5 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">
              Studio Philosophy
            </h5>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5"><Check size={13} className="text-cyan-400" /> Build useful products.</span>
              <span className="flex items-center gap-1.5"><Check size={13} className="text-cyan-400" /> Ship reliably.</span>
              <span className="flex items-center gap-1.5"><Check size={13} className="text-cyan-400" /> Learn continuously.</span>
            </div>
          </div>
        </motion.div>

        {/* Values and Products list */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="grid grid-cols-1 gap-4">
            {values.map((v, i) => (
              <div 
                key={i}
                className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 flex items-start gap-3 hover:border-white/10 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 mt-0.5">
                  {v.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-white tracking-wide">{v.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-3 font-mono text-xs text-gray-500">
            <div className="flex items-center gap-2 pb-2 border-b border-white/5 text-[10px] text-gray-400">
              <Terminal size={14} className="text-cyan-400" /> ACTIVE PROJECTS
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">onlysplit.com</span>
              <span>.NET 10 & PostgreSQL Sync</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">@onlyrex/pulse</span>
              <span>NPM Speeds Package</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
