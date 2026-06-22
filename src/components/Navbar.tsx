import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'OnlyLabs', href: '/onlylabs' },
    { label: 'Skills', href: '/skills' },
    { label: 'System Design', href: '/system-design' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-[#030303]/80 border-b border-white/5 backdrop-blur-md' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex flex-col group">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-lg text-white tracking-tight leading-none">
                aditya<span className="text-cyan-400">.</span>rathod
              </span>
              
              {/* Live status indicator */}
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono font-medium text-emerald-400 whitespace-nowrap">
                <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                Building. Shipping. Iterating.
              </div>
            </div>
            <span className="text-[9px] text-gray-500 font-mono mt-1.5 hidden sm:inline whitespace-nowrap">
              Backend Engineer • Full-Stack Product Builder
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/adi-rthd"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rathod-439574202/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors"
            >
              Contact <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-45 bg-[#030303]/95 border-b border-white/5 backdrop-blur-lg px-6 py-8 md:hidden flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-gray-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <a
                  href="https://github.com/adi-rthd"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <GithubIcon size={20} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-rathod-439574202/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <LinkedinIcon size={20} /> LinkedIn
                </a>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Contact Aditya
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
