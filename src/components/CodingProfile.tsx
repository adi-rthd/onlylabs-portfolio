import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Award, ExternalLink, Code2 } from 'lucide-react';

export default function CodingProfile() {
  const stats = {
    solved: "550+",
    maxRating: "1429",
    percentile: "Top 70%",
    easy: 140,
    medium: 360,
    hard: 50,
  };

  const difficultyBreakdown = [
    { label: "Easy", count: stats.easy, total: 200, color: "bg-emerald-500", text: "text-emerald-400" },
    { label: "Medium", count: stats.medium, total: 400, color: "bg-amber-500", text: "text-amber-400" },
    { label: "Hard", count: stats.hard, total: 100, color: "bg-rose-500", text: "text-rose-400" }
  ];

  return (
    <section id="coding-profile" className="space-y-12 scroll-mt-24">
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
          Problem Solving
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Coding Profile
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: LeetCode Dashboard Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-[#ffa116]/10 hover:border-[#ffa116]/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle orange glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffa116]/5 blur-3xl rounded-full pointer-events-none" />

          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#ffa116]/10 border border-[#ffa116]/20 text-[#ffa116]">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">LeetCode Profile</h4>
                  <p className="text-xs text-gray-500 font-mono">ID: adi_rthd</p>
                </div>
              </div>

              <a 
                href="https://leetcode.com/u/adi_rthd/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/20 rounded-lg px-3 py-1.5 bg-white/5 font-mono"
              >
                leetcode.com/u/adi_rthd <ExternalLink size={12} />
              </a>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 py-2 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-500 font-mono flex items-center justify-center sm:justify-start gap-1 uppercase tracking-wider">
                  <Target size={11} className="text-[#ffa116]" /> Solved
                </span>
                <p className="text-3xl font-extrabold text-white tracking-tight">
                  {stats.solved}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-500 font-mono flex items-center justify-center sm:justify-start gap-1 uppercase tracking-wider">
                  <Trophy size={11} className="text-[#ffa116]" /> Max Rating
                </span>
                <p className="text-3xl font-extrabold text-[#ffa116] tracking-tight">
                  {stats.maxRating}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-500 font-mono flex items-center justify-center sm:justify-start gap-1 uppercase tracking-wider">
                  <Award size={11} className="text-[#ffa116]" /> Percentile
                </span>
                <p className="text-3xl font-extrabold text-white tracking-tight">
                  {stats.percentile}
                </p>
              </div>
            </div>

            {/* Progress Bars Breakdown */}
            <div className="space-y-4 pt-2">
              <h5 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                Difficulty Breakdown
              </h5>
              
              <div className="space-y-3">
                {difficultyBreakdown.map((item) => {
                  const percentage = (item.count / (stats.easy + stats.medium + stats.hard)) * 100;
                  return (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 font-medium">{item.label}</span>
                        <span className="font-mono text-gray-500">
                          <strong className={`font-semibold ${item.text}`}>{item.count}</strong> / 550 solved
                        </span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Key Competencies Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h4 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-wider">
              Interview Competency
            </h4>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <h5 className="text-xs font-mono font-bold text-white">Algorithms & Complexity</h5>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Deep understanding of Big O time and space complexity, recursion, and recursion tree profiling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <h5 className="text-xs font-mono font-bold text-white">Data Structures</h5>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Proficient in Maps, Hash Tables, Linked Lists, Trees, Stacks, Queues, and Graphs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
                <h5 className="text-xs font-mono font-bold text-white">Dynamic Programming & Greedy</h5>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Skilled at optimizing recursive sub-problems and greedy interval configurations.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-[11px] text-gray-500 font-mono text-center">
            Updated weekly from official LeetCode data.
          </div>
        </motion.div>

      </div>
    </section>
  );
}