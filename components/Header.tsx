import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from './Logo';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isOverview = location.pathname === '/overview';
  const isArchitecture = location.pathname === '/architecture';
  const isProcess = location.pathname.includes('/blind-spot') || location.pathname.includes('/activation') || location.pathname.includes('/reset');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-2 md:gap-4">
        <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
          <Logo className="h-6 md:h-10" showText={true} />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <Link 
            to="/" 
            className={`text-[9px] sm:text-[10px] md:text-sm font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
              isHome 
                ? 'text-[#7edb44]' 
                : 'text-[#003456] hover:text-[#7edb44]'
            }`}
          >
            Home
          </Link>

          {/* Dropdown for The Process */}
          <div className="relative dropdown-container group">
            <button 
              className={`text-[9px] sm:text-[10px] md:text-sm font-black uppercase tracking-widest transition-colors whitespace-nowrap flex items-center gap-1 ${
                isProcess 
                  ? 'text-[#7edb44]' 
                  : 'text-[#003456] group-hover:text-[#7edb44]'
              }`}
            >
              The Process
              <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute top-full left-0 pt-4 dropdown-menu opacity-0 translate-y-2 visibility-hidden transition-all duration-300 pointer-events-none">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 w-64 flex flex-col gap-1">
                <Link to="/blind-spot" className="px-4 py-3 rounded-xl hover:bg-[#f8f9fa] text-[11px] font-black uppercase tracking-widest text-[#003456] hover:text-[#7edb44] transition-colors">
                  Recognition
                </Link>
                <Link to="/activation" className="px-4 py-3 rounded-xl hover:bg-[#f8f9fa] text-[11px] font-black uppercase tracking-widest text-[#003456] hover:text-[#7edb44] transition-colors">
                  Readiness
                </Link>
                <Link to="/reset" className="px-4 py-3 rounded-xl hover:bg-[#f8f9fa] text-[11px] font-black uppercase tracking-widest text-[#003456] hover:text-[#7edb44] transition-colors">
                  Recalibration
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown for How Altitude Works */}
          <div className="relative dropdown-container group">
            <button 
              className={`text-[9px] sm:text-[10px] md:text-sm font-black uppercase tracking-widest transition-colors whitespace-nowrap flex items-center gap-1 ${
                (isOverview || isArchitecture)
                  ? 'text-[#7edb44]' 
                  : 'text-[#003456] group-hover:text-[#7edb44]'
              }`}
            >
              How It Works
              <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute top-full left-0 pt-4 dropdown-menu opacity-0 translate-y-2 visibility-hidden transition-all duration-300 pointer-events-none">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 w-64 flex flex-col gap-1">
                <Link to="/overview" className="px-4 py-3 rounded-xl hover:bg-[#f8f9fa] text-[11px] font-black uppercase tracking-widest text-[#003456] hover:text-[#7edb44] transition-colors">
                  Overview
                </Link>
                <Link to="/architecture" className="px-4 py-3 rounded-xl hover:bg-[#f8f9fa] text-[11px] font-black uppercase tracking-widest text-[#003456] hover:text-[#7edb44] transition-colors">
                  The Architecture
                </Link>
              </div>
            </div>
          </div>

          <Link 
            to="/orientation" 
            className="bg-[#003456] text-white px-2 sm:px-4 md:px-8 py-2 md:py-3 rounded-full text-[8px] sm:text-[9px] md:text-xs font-black hover:shadow-xl hover:scale-105 transition-all active:scale-95 uppercase tracking-widest whitespace-nowrap"
          >
            Orientation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;