import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 text-center text-xs text-gray-600 space-y-3.5 font-mono">
      <p>© {currentYear} Aditya Rathod. All rights reserved.</p>
      
      <div className="flex flex-col gap-1 text-[10px] text-gray-700">
        <p>Built with React, TypeScript, and curiosity.</p>
        <p className="text-gray-500">
          Crafted under the <a href="https://onlylabs.in" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">OnlyLabs</a> banner.
        </p>
      </div>

      {/* Domains & Brand */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-[9px] text-gray-600">
        <span>Active domains: <a href="https://onlysplit.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">onlysplit.com</a></span>
        <span>•</span>
        <span><a href="https://onlychat.uk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">onlychat.uk</a></span>
        <span>•</span>
        <span><a href="https://onlylabs.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">onlylabs.in</a></span>
      </div>
    </footer>
  );
}