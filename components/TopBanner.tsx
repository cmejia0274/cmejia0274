import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#7edb44] text-[#003456] sticky top-20 z-40 shadow-[0_10px_30px_rgba(126,219,68,0.15)] overflow-hidden">
      {/* Subtle Animated Shimmer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 relative z-10">
        {/* Left/Center Combined Sequence */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
          <div className="flex items-center">
            <p className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.25em] leading-none">
              BRIEF OPERATING SCAN
            </p>
            <span className="mx-3 md:mx-4 opacity-20 text-lg font-light hidden md:inline">|</span>
          </div>
          
          <div className="flex items-center">
            <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-[#003456]/80 leading-none">
              Founding Rate — $247
            </p>
            <span className="mx-3 md:mx-4 opacity-20 text-lg font-light hidden md:inline">|</span>
          </div>

          <div className="flex items-center">
            <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] opacity-60 leading-none">
              OPEN ACCESS APRIL 6, 2026
            </p>
          </div>
        </div>
        
        {/* Right Aligned CTA */}
        <div className="flex items-center">
          <Link 
            to="/activation" 
            className="group flex items-center gap-2 text-[11px] md:text-[12px] font-black uppercase tracking-[0.25em] text-[#003456] transition-all hover:opacity-70"
          >
            <span className="underline underline-offset-[6px] decoration-2 decoration-[#003456]/30 group-hover:decoration-[#003456]">LOCK RATE</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom border highlight */}
      <div className="h-px w-full bg-[#003456]/10"></div>
    </div>
  );
};

export default TopBanner;