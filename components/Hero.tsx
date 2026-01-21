import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 brand-gradient text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1" fill="none" strokeDasharray="10 5" />
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight reveal">
          Your Strategy Is Being Rewritten,<br />
          <span className="text-[#7edb44]">One Meeting at a Time.</span>
        </h1>
        
        <div className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed flex flex-col items-center reveal" style={{ transitionDelay: '200ms' }}>
          <p className="mb-2">Not by bad intent. Not by unqualified teams.</p>
          <p className="font-bold text-white">By unstructured cadence, unclear decisions, and narratives that drift faster than outcomes.</p>
        </div>

        <p className="text-md md:text-xl text-white max-w-4xl mx-auto mb-12 italic reveal" style={{ transitionDelay: '400ms' }}>
          Altitude is a modern executive operating system that governs the Rhythm of Business — ensuring strategy, decisions, and execution drive the outcomes your company intends.
        </p>
        
        <div className="flex flex-col items-center gap-6 reveal" style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm md:text-base font-medium">
            <span className="w-2 h-2 rounded-full bg-[#7edb44] mr-3"></span>
            Built for leaders who refuse to let execution rewrite strategy.
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/orientation" className="px-10 py-5 bg-[#7edb44] text-[#003456] font-extrabold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(126,219,68,0.3)]">
              Request an Executive Orientation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;