import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Product", href: "/product" },
    { name: "Request Orientation", href: "/orientation" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="bg-[#003456] text-white overflow-hidden relative border-t border-white/5">
      {/* Decorative gradient element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-t from-[#7edb44]/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-6 space-y-6">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <Logo variant="footer" className="h-14 w-auto" />
            </Link>
            <p className="text-lg md:text-xl font-bold text-gray-300 leading-relaxed max-w-md">
              The modern architecture for <span className="text-[#7edb44]">executive governance</span> and strategic execution.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/ikigai-edge.com/about/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#7edb44] hover:text-[#003456] transition-all duration-300 group shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8ae4d9]">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-base font-bold text-white hover:text-[#7edb44] transition-colors inline-block w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal / Contact */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8ae4d9]">Direct Support</h4>
            <div className="space-y-5">
              <a 
                href="mailto:consult@ikigai-edge.com" 
                className="group block"
              >
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-[#7edb44] transition-colors">Concierge Desk</p>
                <p className="text-base font-bold group-hover:underline decoration-[#7edb44] underline-offset-4 transition-all">consult@ikigai-edge.com</p>
              </a>
              <div className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.href}
                    className="text-xs font-bold text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-[12px] font-bold text-gray-500 tracking-tight">
              © 2025 Altitude Operating System. All rights reserved.
            </p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/10"></div>
            <p className="text-[12px] font-bold text-gray-400 italic">
              Built for leaders who've outgrown winging it.
            </p>
          </div>
          
          <div className="bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7edb44]/80">
              Architecture by Ikigai Edge LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;