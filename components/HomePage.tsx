import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#003456]">
      {/* Enhanced Top Banner - Architectural Alert Style */}
      <div className="bg-[#7edb44] text-[#003456] sticky top-20 z-40 shadow-[0_10px_30px_rgba(126,219,68,0.15)] overflow-hidden">
        {/* Subtle Animated Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 relative z-10">
          {/* Left/Center Combined Sequence */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
            <div className="flex items-center">
              <p className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.25em] leading-none">
                10-DAY OPERATING SCAN
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

      {/* Hero Section - Dark, Architectural, Symmetrical */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-[#003456] text-white">
        {/* Symmetrical Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="300" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="10 10" />
            <circle cx="500" cy="500" r="450" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="500" cy="500" r="150" stroke="#7edb44" strokeWidth="1" fill="none" opacity="0.2" />
            <line x1="0" y1="200" x2="1000" y2="800" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <line x1="0" y1="800" x2="1000" y2="200" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <line x1="500" y1="0" x2="500" y2="1000" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <g transform="translate(500, 500)">
              <circle cx="0" cy="0" r="50" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="0" cy="0" r="150" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="5 5" />
              <line x1="-300" y1="0" x2="300" y2="0" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="-300" x2="0" y2="300" stroke="white" strokeWidth="0.5" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="space-y-16">
            <h1 className="text-4xl md:text-7xl font-black leading-[1.05] tracking-tighter reveal">
              Your company is running. <br />
              <span className="text-[#7edb44]">But something isn’t tracking.</span>
            </h1>

            <div className="space-y-6 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="text-xl md:text-2xl font-bold text-gray-400 space-y-2 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 italic">
                <p>Strategy exists.</p>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <p>People are capable.</p>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <p>Effort isn’t the issue.</p>
              </div>

              <div className="pt-10 space-y-10">
                <p className="text-3xl md:text-5 font-black italic tracking-tighter text-white">
                  And yet,
                </p>
                
                <div className="space-y-4 max-w-4xl mx-auto">
                  <p className="text-lg md:text-xl font-bold leading-snug text-gray-300">
                    Decisions take longer than they should.
                  </p>
                  <p className="text-lg md:text-xl font-bold leading-snug text-gray-300">
                    Priorities shift without anyone declaring it.
                  </p>
                  <p className="text-lg md:text-xl font-bold leading-snug text-gray-300">
                    Your strongest operators are spending more energy <br className="hidden lg:block" /> holding the system together than moving it forward.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 pt-8">
                  <Link 
                    to="/blind-spot" 
                    className="group px-10 py-5 bg-[#7edb44] text-[#003456] font-black text-xl rounded-full transition-all shadow-[0_0_50px_rgba(126,219,68,0.2)] hover:scale-105 active:scale-95"
                  >
                    Start Recognizing the Blind Spot →
                  </Link>
                  <p className="text-sm font-medium text-gray-400 opacity-80">
                    A short read that makes the pattern visible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pattern Section */}
      <section className="py-16 md:py-32 bg-[#fcfcfc] border-y border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="-10%" y1="20%" x2="110%" y2="25%" stroke="#003456" strokeWidth="0.5" />
            <line x1="-10%" y1="25%" x2="110%" y2="20%" stroke="#003456" strokeWidth="0.5" />
            <line x1="-10%" y1="70%" x2="110%" y2="75%" stroke="#003456" strokeWidth="0.5" />
            <line x1="-10%" y1="75%" x2="110%" y2="70%" stroke="#003456" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-16">
            <div className="space-y-6 flex flex-col items-center reveal">
              <span className="inline-block px-4 py-1 rounded-full bg-[#003456] text-white text-[10px] font-black uppercase tracking-[0.3em]">
                System Distortion
              </span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-[#003456] leading-tight">
                Pressure doesn’t break <br className="hidden md:block" /> operating systems. It bends them.
              </h2>
              <p className="text-xl md:text-2xl font-bold text-gray-400 italic">
                Slowly enough that no one names it.
              </p>
              <div className="h-1 w-24 bg-[#7edb44]"></div>
            </div>

            <div className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed space-y-12 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-gray-200 text-left">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl font-black uppercase tracking-[0.3em] text-[#7edb44]">WHAT YOU SEE</p>
                  <ul className="space-y-3 text-[#003456] font-bold list-disc pl-5">
                    <li>Meetings become the system.</li>
                    <li>Urgency replaces rhythm.</li>
                    <li>Execution accelerates, but alignment disappears.</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl font-black uppercase tracking-[0.3em] text-[#7edb44]">WHAT’S ACTUALLY HAPPENING</p>
                  <ul className="space-y-3 text-[#003456] font-bold list-disc pl-5">
                    <li>Leaders compensate.</li>
                    <li>Operators absorb.</li>
                    <li>Accountability diffuses.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-10">
                <p className="max-w-3xl mx-auto font-bold">
                  Quarter after quarter, the gap widens. <br className="hidden md:block" />
                  Instead of correcting it, the organization adapts around it.
                </p>

                <p className="text-gray-400 max-w-3xl mx-auto italic text-sm">
                  The cost compounds. <br className="hidden md:block" />
                  By the time it shows in the numbers, it’s been shaping outcomes for months.
                </p>
              </div>

              <div className="pt-12 flex flex-col items-center space-y-8">
                <div className="space-y-2">
                  <p className="text-2xl md:text-4xl font-black text-[#003456] tracking-tighter">
                    This isn’t a leadership problem.
                  </p>
                  <p className="text-4xl md:text-7xl font-black text-[#7edb44] tracking-tighter leading-none">
                    It’s an operating system problem.
                  </p>
                </div>
                
                <div className="space-y-2 pt-12">
                  <div className="font-black uppercase tracking-[0.4em] text-[#003456] flex flex-col items-center gap-2">
                    <p className="text-base md:text-lg text-gray-300">We call it:</p>
                    <p className="text-2xl md:text-4xl">The Blind Spot</p>
                  </div>
                  <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest pt-8 max-w-lg mx-auto">
                    And most teams never realize it’s happening, because it still works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Roadmap Section */}
      <section className="bg-white py-32 md:py-48 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <p className="text-sm md:text-base font-black uppercase tracking-[0.5em] text-gray-400 mb-6">OUR OPERATING APPROACH</p>
            <h2 className="text-3xl md:text-5xl font-black text-[#003456] tracking-tight leading-tight mb-8">
              Operating systems don’t change overnight. <br className="hidden lg:block" />
              They evolve deliberately.
            </h2>
            <div className="space-y-2">
              <p className="text-xl font-bold text-[#003456]">This is the progression.</p>
              <p className="text-sm font-medium text-gray-400 italic">
                Skipping stages creates fragility. Sequencing creates leverage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-gray-100 rounded-[3rem] overflow-hidden shadow-2xl reveal-scale" style={{ transitionDelay: '200ms' }}>
            {/* CARD 01 */}
            <div className="p-12 bg-[#7edb44]/5 border-r border-[#7edb44]/20 flex flex-col gap-10 group transition-all duration-500">
              <span className="text-[#7edb44] font-black text-xl tracking-[0.2em]">01</span>
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-black text-[#003456] uppercase tracking-tighter leading-none">
                  THE BLIND SPOT
                </h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Recognition</p>
                <div className="w-8 h-1 bg-[#7edb44]"></div>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">
                  See how urgency has quietly reshaped your leadership rhythm.
                </p>
              </div>
              <Link 
                to="/blind-spot" 
                className="text-xs font-black text-[#003456] uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                Begin with the Blind Spot <span className="text-[#7edb44]">→</span>
              </Link>
            </div>

            {/* CARD 02 */}
            <div className="p-12 border-r border-gray-100 flex flex-col gap-10 group transition-all duration-500 hover:bg-[#fcfcfc]">
              <span className="text-gray-200 font-black text-xl tracking-[0.2em] group-hover:text-[#7edb44]">02</span>
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-black text-[#003456] uppercase tracking-tighter leading-none">
                  ACTIVATION
                </h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operating Diagnostic</p>
                <div className="w-8 h-1 bg-gray-100 group-hover:bg-[#7edb44] transition-all"></div>
                <p className="text-sm font-bold text-gray-600 leading-tight">
                  Clear visibility into how you’re operating under pressure. <br />
                  10-day structured diagnostic.
                </p>
              </div>
              <Link 
                to="/activation" 
                className="text-xs font-bold text-[#003456] uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                Founding Activation Cohort — Now Open <span className="text-[#7edb44]">→</span>
              </Link>
            </div>

            {/* CARD 03 */}
            <div className="p-12 border-r border-gray-100 flex flex-col gap-10 group transition-all duration-500 hover:bg-[#fcfcfc]">
              <span className="text-gray-200 font-black text-xl tracking-[0.2em] group-hover:text-[#7edb44]">03</span>
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-black text-[#003456] uppercase tracking-tighter leading-none">
                  RESET
                </h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operating Recalibration</p>
                <div className="w-8 h-1 bg-gray-100 group-hover:bg-[#7edb44] transition-all"></div>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">
                  Rebuild the structural foundations your environment has been compensating for. <br />
                  30-day recalibration.
                </p>
              </div>
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">Available following Activation findings.</p>
            </div>

            {/* CARD 04 */}
            <div className="p-12 flex flex-col gap-10 group transition-all duration-500 hover:bg-[#fcfcfc]">
              <span className="text-gray-200 font-black text-xl tracking-[0.2em] group-hover:text-[#7edb44]">04</span>
              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-black text-[#003456] uppercase tracking-tighter leading-none">
                  ALTITUDE
                </h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operating System Installation</p>
                <div className="w-8 h-1 bg-gray-100 group-hover:bg-[#7edb44] transition-all"></div>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">
                  Install durable cadence, decision architecture, and executive rhythm.
                </p>
                {/* Embedded system chart visual for context when Altitude OS is referenced */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <img 
                    src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/altitude-executive-operating-system-chart-OUlJfLN0EWEDi1HW.png" 
                    alt="Altitude OS Architecture" 
                    className="w-full h-auto rounded-xl border border-gray-100 shadow-sm"
                  />
                </div>
              </div>
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">Organizational readiness required.</p>
            </div>
          </div>

          <div className="mt-20 text-center space-y-6 reveal">
            <p className="text-xl md:text-2xl font-black text-[#003456] tracking-tight">
              Most organizations attempt Stage 04 first. <br className="md:hidden" />
              <span className="text-[#7edb44]">That’s why they cycle.</span>
            </p>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.4em]">
              Designed for CEOs, Chiefs of Staff, and executive teams scaling complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Summary */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-[#003456]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Architecture" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-white">
          <div className="space-y-12">
            <p className="text-2xl md:text-5xl font-black tracking-tighter leading-tight reveal">
              Altitude closes the loop most organizations leave open — between how leaders decide, how teams execute, and how outcomes are governed over time.
            </p>
            
            <div className="space-y-4 reveal" style={{ transitionDelay: '200ms' }}>
              <p className="text-xl md:text-2xl font-medium text-gray-400 italic">
                We begin by recognizing patterns — not assumptions.
              </p>
              <div className="h-1 w-24 bg-[#7edb44] mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="space-y-12 pt-8 reveal" style={{ transitionDelay: '400ms' }}>
              <p className="text-xl md:text-3xl font-black text-white tracking-tight leading-none">
                Resonance is the first step. <br />
                <span className="text-[#7edb44]">Validate the signal.</span>
              </p>

              <div className="flex flex-col items-center gap-6">
                <Link 
                  to="/blind-spot" 
                  className="group px-14 py-7 bg-[#7edb44] text-[#003456] font-black text-2xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(126,219,68,0.2)]"
                >
                  Start with the Blind Spot
                </Link>
                
                <Link 
                  to="/orientation" 
                  className="text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Prefer to talk first? Request an Orientation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;