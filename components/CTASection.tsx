import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-7xl font-black text-[#003456] mb-8 tracking-tighter">
          Stop Operating on Memory and Constant Meetings
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          Install the system that stops distraction, preserves strategic intent, and lets execution speak for itself. Because decision timing compounds and delay quietly reshapes outcomes.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <Link to="/orientation" className="w-full md:w-auto px-12 py-6 bg-[#003456] text-white font-black text-xl rounded-full hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,52,86,0.2)]">
            Request an Executive Orientation
          </Link>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center">
            30 minutes. Executive-level walkthrough. No deck.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;