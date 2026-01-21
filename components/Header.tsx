import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProduct = location.pathname === '/product';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-2">
        <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
          <Logo className="h-8 md:h-10" />
        </Link>
        <nav className="flex items-center gap-5 md:gap-10">
          <Link 
            to="/" 
            className={`text-base md:text-lg font-extrabold tracking-tight transition-colors ${
              isHome 
                ? 'text-[#7edb44]' 
                : 'text-[#003456] hover:text-[#7edb44]'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/product" 
            className={`text-base md:text-lg font-extrabold tracking-tight transition-colors ${
              isProduct 
                ? 'text-[#7edb44]' 
                : 'text-[#003456] hover:text-[#7edb44]'
            }`}
          >
            Our Product
          </Link>
          <Link 
            to="/orientation" 
            className="hidden lg:block bg-[#003456] text-white px-8 py-3 rounded-full text-sm font-black hover:shadow-xl hover:scale-105 transition-all active:scale-95 uppercase tracking-widest"
          >
            Request Orientation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;