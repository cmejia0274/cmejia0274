import React from 'react';

const WhoThisHelps: React.FC = () => {
  return (
    <section className="py-32 bg-[#fcfcfc] border-b border-gray-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#003456" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4 h-1.5 w-12 bg-[#7edb44] rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-black text-[#003456] tracking-tight">
            Who Altitude Is Built For and What It Removes
          </h2>
        </div>

        {/* Framing Statement */}
        <div className="max-w-4xl mx-auto text-center mb-24 reveal" style={{ transitionDelay: '200ms' }}>
          <p className="text-2xl md:text-2xl text-[#003456] font-bold leading-tight tracking-tight mb-6">
            Altitude is a shared operating system that creates clarity across the organization without adding another role, layer, or burden to the CEO or Executive team.
          </p>
          <p className="text-xl md:text-1xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
            Altitude doesn’t replace leadership or operations. <br className="hidden md:block" />
            It gives both a system they no longer have to hold together manually.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Column 1: For CEOs & Executive Leadership Teams */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full reveal-left" style={{ transitionDelay: '400ms' }}>
            <div className="mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-[#7edb44]/10 text-[#003456] text-xs font-black uppercase tracking-widest mb-4">
                Executive Leadership
              </span>
              <h3 className="text-3xl font-black text-[#003456]">
                For CEOs & Executive Teams
              </h3>
            </div>
            
            <ul className="space-y-8 flex-grow">
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7edb44] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Decisions move forward without you being the bottleneck.</p>
                    <p className="text-gray-500 leading-relaxed">Ownership is explicit. Follow-through is visible.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7edb44] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Priorities stay stable even when pressure spikes.</p>
                    <p className="text-gray-500 leading-relaxed">Escalations don’t rewrite the plan.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7edb44] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">You stop carrying the entire system in your head.</p>
                    <p className="text-gray-500 leading-relaxed">The operating logic lives outside of you.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7edb44] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">You can stand behind a coherent narrative with the board.</p>
                    <p className="text-gray-500 leading-relaxed">Not a weekly explanation of why reality changed again.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7edb44] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Time returns for actual leadership.</p>
                    <p className="text-gray-500 leading-relaxed">Fewer coordination loops. Fewer “just to align” meetings.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: For Operators */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full reveal-right" style={{ transitionDelay: '400ms' }}>
            <div className="mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-[#8ae4d9]/10 text-[#003456] text-xs font-black uppercase tracking-widest mb-4">
                Operations & Strategy
              </span>
              <h3 className="text-3xl font-black text-[#003456]">
                For Operators
              </h3>
            </div>
            
            <ul className="space-y-8 flex-grow">
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8ae4d9] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Clear authority, not shadow governance.</p>
                    <p className="text-gray-500 leading-relaxed">You’re enforcing the system — not improvising it.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8ae4d9] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Fewer last-minute pivots and rewrites.</p>
                    <p className="text-gray-500 leading-relaxed">Because decisions land with consequences attached.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8ae4d9] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Decisions stick.</p>
                    <p className="text-gray-500 leading-relaxed">You’re not re-litigating the same issues every quarter.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8ae4d9] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Escalation becomes the exception, not the workflow.</p>
                    <p className="text-gray-500 leading-relaxed">The system carries weight, so you don’t have to.</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8ae4d9] flex items-center justify-center mt-1 transition-transform group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-[#003456] font-bold text-lg mb-1">Less emotional labor holding everything together.</p>
                    <p className="text-gray-500 leading-relaxed">The operating model coordinates the work, not your stamina.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisHelps;