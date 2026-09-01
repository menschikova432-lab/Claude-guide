import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 text-zinc-100 print:hidden transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Blastim Logo in English */}
        <a
          href="https://agency.blastim.ru/educenter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group transition-all"
        >
          <span className="font-extrabold tracking-widest text-xl sm:text-2xl text-white group-hover:text-amber-400 transition-colors uppercase font-mono">
            BLASTIM
          </span>
          <span className="text-xs sm:text-sm font-semibold uppercase px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 group-hover:border-amber-500/40 group-hover:text-amber-300 transition-all">
            Education Center
          </span>
        </a>

      </div>
    </header>
  );
};


