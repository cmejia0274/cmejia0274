import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlindSpot = location.pathname === '/blind-spot';
  const isActivation = location.pathname === '/activation';
  const isOverview = location.pathname === '/overview';
  const isArchitecture = location.pathname === '/architecture';
  const isOrientation = location.pathname === '/orientation';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0" onClick={() => setIsOpen(false)}>
          <Logo className="h-6 md:h-10" showText={true} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-black uppercase tracking-widest transition-colors ${
              isHome ? 'text-[#7edb44]' : 'text-[#003456] hover:text-[#7edb44]'
            }`}
          >
            HOME
          </Link>

          <Link 
            to="/blind-spot" 
            className={`text-sm font-black uppercase tracking-widest transition-colors ${
              isBlindSpot ? 'text-[#7edb44]' : 'text-[#003456] hover:text-[#7edb44]'
            }`}
          >
            THE BLIND SPOT
          </Link>

          <Link 
            to="/activation" 
            className={`text-sm font-black uppercase tracking-widest transition-colors ${
              isActivation ? 'text-[#7edb44]' : 'text-[#003456] hover:text-[#7edb44]'
            }`}
          >
            ACTIVATION
          </Link>

          {/* Dropdown for THE SYSTEM */}
          <div className="relative dropdown-container group">
            <button 
              className={`text-sm font-black uppercase tracking-widest transition-colors flex items-center gap-1 ${
                (isOverview || isArchitecture) ? 'text-[#7edb44]' : 'text-[#003456] group-hover:text-[#7edb44]'
              }`}
            >
              THE SYSTEM
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="bg-[#003456] text-white px-8 py-3 rounded-full text-xs font-black hover:shadow-xl hover:scale-105 transition-all active:scale-95 uppercase tracking-widest"
          >
            ORIENTATION
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#003456] hover:bg-gray-50 rounded-lg transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 py-8 px-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <Link to="/" className={`text-lg font-black uppercase tracking-widest ${isHome ? 'text-[#7edb44]' : 'text-[#003456]'}`} onClick={toggleMenu}>
            HOME
          </Link>
          <Link to="/blind-spot" className={`text-lg font-black uppercase tracking-widest ${isBlindSpot ? 'text-[#7edb44]' : 'text-[#003456]'}`} onClick={toggleMenu}>
            THE BLIND SPOT
          </Link>
          <Link to="/activation" className={`text-lg font-black uppercase tracking-widest ${isActivation ? 'text-[#7edb44]' : 'text-[#003456]'}`} onClick={toggleMenu}>
            ACTIVATION
          </Link>
          <div className="h-px bg-gray-100 my-2"></div>
          <Link to="/overview" className={`text-lg font-black uppercase tracking-widest ${isOverview ? 'text-[#7edb44]' : 'text-[#003456]'}`} onClick={toggleMenu}>
            SYSTEM OVERVIEW
          </Link>
          <Link to="/architecture" className={`text-lg font-black uppercase tracking-widest ${isArchitecture ? 'text-[#7edb44]' : 'text-[#003456]'}`} onClick={toggleMenu}>
            ARCHITECTURE
          </Link>
          <div className="pt-4">
            <Link 
              to="/orientation" 
              className="bg-[#003456] text-white py-4 rounded-xl text-center text-sm font-black uppercase tracking-widest block" 
              onClick={toggleMenu}
            >
              ORIENTATION
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;