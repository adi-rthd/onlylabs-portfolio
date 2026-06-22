import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code2, Copy, Check, Send, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adi-rthd@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 scroll-mt-24">
      <div className="relative p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden text-center space-y-8">
        
        {/* Glow Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="space-y-4 max-w-xl mx-auto">
          <h3 className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Get In Touch
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I am actively looking for SDE-1 Backend engineering roles at product-driven companies, remote-first startups, and global teams. Let's talk about APIs, databases, or scaling problems.
          </p>
        </div>

        {/* Email Copy Card */}
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-black/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono text-gray-500">DIRECT EMAIL</p>
              <p className="text-sm font-semibold text-white font-mono">adi-rthd@gmail.com</p>
            </div>
          </div>

          <button
            onClick={copyEmail}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all cursor-pointer relative"
          >
            <AnimatePresence mode="wait">
              {copiedEmail ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-1.5 text-emerald-600 font-bold"
                >
                  <Check size={14} /> Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy size={13} /> Copy Email
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Social Icons grid */}
        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <a
            href="https://www.linkedin.com/in/aditya-rathod-439574202/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all text-xs font-mono"
          >
            <LinkedinIcon size={16} /> LinkedIn <ArrowRight size={12} className="text-gray-600" />
          </a>

          <a
            href="https://github.com/adi-rthd"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all text-xs font-mono"
          >
            <GithubIcon size={16} /> GitHub <ArrowRight size={12} className="text-gray-600" />
          </a>

          <a
            href="https://leetcode.com/u/adi_rthd/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 text-gray-400 hover:text-[#ffa116] transition-all text-xs font-mono"
          >
            <Code2 size={16} /> LeetCode <ArrowRight size={12} className="text-gray-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
