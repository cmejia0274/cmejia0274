import React from 'react';
import { Link } from 'react-router-dom';

const FrameworkSection: React.FC = () => {
  const layers = [
    {
      num: "1",
      title: "Strategic Direction",
      desc: "One source of truth for where the company is going—and what it will explicitly not do.",
      icon: "🧭"
    },
    {
      num: "2",
      title: "Priorities & Bets",
      desc: "Focus is designed, not negotiated. 3–5 active strategic bets only.",
      icon: "🎯"
    },
    {
      num: "3",
      title: "Execution Rhythm",
      desc: "Meetings, decisions, and actions tied to the same system.",
      icon: "📡"
    },
    {
      num: "4",
      title: "Decisions & Logs",
      desc: "Every decision has a named owner and links to actual changes.",
      icon: "⚖️"
    }
  ];

  return (
    <section id="framework" className="py-32 brand-gradient overflow-hidden text-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7edb44]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8ae4d9]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4 h-1.5 w-12 bg-[#7edb44] rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">
            The Altitude Operating System Framework
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-12">
              Not another project management tool. <br />
              <span className="text-white font-bold">
                A deliberately architected executive operating framework that connects strategy to execution.
              </span>
            </p>

            {/* Altitude Chart Image - Prominent Placement */}
            <div className="relative mb-24 group reveal-scale">
              <div className="absolute -inset-4 bg-[#7edb44]/10 rounded-[3rem] blur-2xl group-hover:bg-[#7edb44]/20 transition-all duration-700"></div>
              <div className="relative bg-white/5 border border-white/10 p-4 md:p-8 rounded-[3rem] backdrop-blur-sm shadow-2xl overflow-hidden">
                <img 
                  src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/altitude-executive-operating-system-chart-tknUzjjOtH4Wxdxe.png" 
                  alt="Altitude Executive Operating System Chart" 
                  className="w-full h-auto rounded-[2rem] shadow-2xl brightness-105"
                />
                <div className="absolute bottom-6 right-6 bg-[#003456]/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest border border-white/10">
                  Altitude Operating System Architecture
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {layers.map((layer, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white/[0.08] border border-white/20 rounded-3xl backdrop-blur-sm flex flex-col h-full hover:bg-white/[0.12] transition-colors duration-300 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <span className="text-3xl mb-4 block">{layer.icon}</span>
              <h3 className="text-lg font-black text-[#7edb44] mb-3 leading-tight uppercase tracking-wide">{layer.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed font-medium flex-grow">
                {layer.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Executive Narrative Card (Full Width) */}
        <div className="w-full mb-20 reveal">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 text-[#003456] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-40"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center gap-1 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl">🧠</span>
                  <h3 className="text-xl md:text-3xl font-black tracking-tighter text-center">Executive Narrative Interface</h3>
                </div>
                <p className="text-[10px] font-black text-[#64748b] uppercase tracking-[0.3em]">Closing the Governance Loop</p>
              </div>
              
              <div className="mb-6">
                <p className="text-lg md:text-xl font-bold italic mb-4 leading-tight text-gray-800">
                  Where strategy meets reality.
                </p>
                <ul className="space-y-1.5 inline-block text-left">
                  {[
                    "Auto-generated synthesis of strategy, priorities, and execution",
                    "A single, grounded narrative for board and leadership alignment",
                    "Eliminates manual reporting and narrative drift"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-600">
                      <span className="text-[#7edb44] font-black text-lg mt-[-2px]">●</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="inline-block px-6 py-2 bg-[#f8f9fa] border border-gray-100 rounded-xl">
                <p className="text-[11px] md:text-xs font-medium text-gray-500">
                  <span className="font-black text-[#003456] mr-2">Replaces:</span> manual synthesis and subjective status updates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center reveal">
          <h4 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
            Delivered as a live operating system.
          </h4>
          <p className="text-lg md:text-xl text-[#8ae4d9] font-bold opacity-90 mb-12">
            Installed directly into how your company already runs.
          </p>
          
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              to="/product" 
              className="inline-flex items-center px-10 py-5 bg-white text-[#003456] font-black text-xl rounded-full hover:scale-105 transition-all shadow-2xl group"
            >
              Explore the Product Detail
              <span className="ml-4 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;