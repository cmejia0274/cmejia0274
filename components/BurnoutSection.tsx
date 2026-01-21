
import React from 'react';

const BurnoutSection: React.FC = () => {
  return (
    <section className="py-24 brand-gradient text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-6xl font-black text-center mb-20 leading-tight">
          What Happens When You <br /><span className="text-[#7edb44]">Install Altitude</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md">
            <div className="absolute top-0 left-12 -translate-y-1/2 text-8xl text-[#7edb44] opacity-50 font-serif">“</div>
            <p className="text-2xl md:text-4xl font-bold italic leading-tight mb-8">
              We thought we needed better people. Turns out we just needed a system that didn't burn out the ones we had.
            </p>
            <div className="h-1 w-24 bg-[#7edb44]"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { num: "60%", label: "Reduction in leadership meeting time" },
            { num: "3x", label: "Faster strategic decisions" },
            { num: "0", label: "\"Wait, who owns this?\" moments" }
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="text-7xl font-black text-[#7edb44] mb-4 group-hover:scale-110 transition-transform">
                {stat.num}
              </div>
              <div className="text-xl font-bold text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BurnoutSection;
