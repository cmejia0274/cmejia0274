import React, { useState } from 'react';
import { Sparkles, Sparkle, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ActivationPage: React.FC = () => {
  const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);
  const soloStripeLink = "https://buy.stripe.com/fZu3cuawZb5wffq5Y04c800";
  const jointStripeLink = "https://buy.stripe.com/9B6fZg6gJ3D44AM7244c801";

  const outcomes = [
    {
      title: "Executive Operating Diagnostic",
      desc: "A clear view of how you actually operate — across decisions, priorities, and escalation patterns."
    },
    {
      title: "Where the system breaks down",
      desc: "You see where effort misaligns, where clarity is lost, and why the same issues keep returning."
    },
    {
      title: "Executive Operating Map",
      desc: "A focused plan that translates insight into the few changes that actually move the system forward."
    },
    {
      title: "Joint Gap Analysis (if completed with your Operator)",
      desc: "A clear view of where alignment breaks — across expectations, decisions, and execution."
    },
    {
      title: "Calibration Path",
      desc: "Targeted adjustments to stabilize how the leadership system operates day-to-day."
    },
    {
      title: "Readiness Debrief",
      desc: "A 30-minute session to review what’s surfaced and determine the right next step."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="pt-28 md:pt-36 pb-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#003456] text-white text-xs font-black uppercase tracking-[0.3em] mb-8">
            EXECUTIVE OPERATING DIAGNOSTIC
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#003456] mb-8 tracking-tighter leading-tight">
            Activation
          </h1>
          <p className="text-xl md:text-3xl font-bold text-gray-500 italic mb-12 max-w-2xl mx-auto leading-tight">
            Most leaders recognize the Blind Spot. <br className="hidden md:block" />
            Few are willing to change how they operate inside it.
          </p>
          <div className="h-1.5 w-24 bg-[#7edb44] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-3xl mx-auto px-6 text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
          <p className="font-black text-2xl md:text-4xl tracking-tight uppercase border-l-8 border-[#7edb44] pl-8 py-2">
            ACTIVATION IS WHERE YOU EXAMINE HOW YOU ACTUALLY OPERATE.
          </p>
          <p className="text-gray-700">
            Most executives believe they understand the constraint.
          </p>
          <p className="text-gray-700">
            Under pressure, judgment narrows.
          </p>
          <p className="text-gray-700">
            This is where we review how decisions are made, where escalation begins, and where friction hides inside the system.
          </p>
          <p className="text-gray-500 italic font-bold">
            Before you restructure, hire, or push harder without a compass, stop and examine how you are actually operating.
          </p>
        </div>
      </section>

      {/* What it Is */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <p className="text-2xl md:text-4xl font-black text-[#003456] leading-tight tracking-tight">
            Activation is the only operating diagnostic for leaders who don’t leave the next quarter to chance.
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#7edb44] uppercase tracking-widest">
            They design it.
          </p>
          <p className="text-xl md:text-2xl text-gray-600 italic font-medium">
            It is a deliberate pause to see the system clearly.
          </p>
        </div>
      </section>

      {/* Why Activation Required */}
      <section className="py-24 brand-gradient text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tight">Why Activation Is Required</h2>
          
          <div className="space-y-8 mb-16">
            <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight">
              Most leaders move fast on what feels right. <br />
              <span className="text-[#7edb44]">That’s the problem.</span>
            </p>
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Decisions are made with limited visibility — where instinct fills the gaps.
            </p>
            
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Teams move. Work expands. Effort increases.
            </p>
          </div>

          <div className="space-y-6 mb-16">
            <p className="text-gray-300 font-black uppercase text-sm tracking-widest">But:</p>
            {[
              "They move fast — on the wrong problem",
              "Effort increases. Results don’t",
              "The same issues return — just renamed"
            ].map((item, i) => (
              <p key={i} className="flex gap-4 font-bold text-xl md:text-2xl">
                <span className="text-[#7edb44]">✕</span> {item}
              </p>
            ))}
          </div>

          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-bold italic text-[#8ae4d9] border-l-4 border-[#7edb44] pl-6">
              Activation makes the pattern visible — before you repeat it.
            </p>
            
            <p className="text-2xl md:text-4xl font-black leading-tight tracking-tighter text-white">
              Because if you don’t see it, you’ll repeat it next quarter.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works - The Inputs */}
      <section className="py-24 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#003456] mb-4 uppercase tracking-tight">See what Activation reveals</h2>
            <p className="text-xl text-gray-500 font-bold italic mb-12 max-w-2xl mx-auto">
              A short walkthrough of how Activation moves from observation to clarity before any action is taken.<br />
              <span className="text-base">Seven lenses. A focused diagnostic designed for completion within 10 days.</span>
            </p>
            
            {/* Activation Video */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-black group">
                <video 
                  src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/activation-video-v2.0-pGhj8hKiJLB0rGim.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-16">
              <p className="text-lg text-gray-500 font-bold italic mb-8">Prefer to scan instead? See the breakdown below.</p>
              
              {/* Toggle Section */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setIsBreakdownOpen(!isBreakdownOpen)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-black text-[#003456] uppercase tracking-tight">Inside Activation</span>
                  {isBreakdownOpen ? <ChevronUp className="text-[#7edb44]" /> : <ChevronDown className="text-gray-400" />}
                </button>
                
                <AnimatePresence>
                  {isBreakdownOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 space-y-10 text-left border-t border-gray-100">
                        <div className="space-y-2">
                          <p className="text-xl font-black text-[#003456]">You don’t move through steps.</p>
                          <p className="text-lg text-gray-500 font-medium">You move into clarity.</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xl font-black text-[#003456]">You start by seeing how you actually operate</p>
                          <p className="text-lg text-gray-500 font-medium">Not how it’s described — how it shows up in real decisions.</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xl font-black text-[#003456]">Patterns become visible</p>
                          <p className="text-lg text-gray-500 font-medium">Where effort misaligns. Where issues repeat. Where clarity breaks down.</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xl font-black text-[#003456]">The system comes into focus</p>
                          <p className="text-lg text-gray-500 font-medium">Not as separate problems — but as one operating structure.</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xl font-black text-[#003456]">You identify what needs to change — and what doesn’t</p>
                          <p className="text-lg text-gray-500 font-medium">So the next move is intentional, not reactive.</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xl font-black text-[#003456]">You leave with a clear path forward</p>
                          <p className="text-lg text-gray-500 font-medium">Grounded in how the system actually works.</p>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                          <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Nothing is changed during Activation.</p>
                          <p className="text-sm font-bold text-[#7edb44] italic">That’s what makes the next move correct.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-16">
              <h3 className="text-3xl font-black text-[#003456] mb-4 uppercase tracking-tight">Seven Diagnostic Lenses</h3>
              <p className="text-xl text-gray-500 font-bold italic">Each lens reveals a different dimension of how pressure shapes leadership decisions, signals, and execution.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "PROFILE", sub: "Identify your default operating pattern and the autonomy it may be costing." },
              { num: "02", title: "OPERATING PRESSURE", sub: "Trace how urgency enters the business and who absorbs the load." },
              { num: "03", title: "EXECUTION CLARITY", sub: "Check whether priorities turn into clear owners, outcomes, and decisions." },
              { num: "04", title: "MOMENTUM", sub: "Find where recurring work relies on manual follow-up rather than a system." },
              { num: "05", title: "DURABILITY", sub: "Test whether authority and critical knowledge can extend beyond a single person." },
              { num: "06", title: "RESILIENCE", sub: "See whether the strategy holds when stakeholders, opportunities, or urgency push back." },
              { num: "07", title: "OPERATING INDEPENDENCE", sub: "Measure how much the business can run through rules, systems, and owners." },
              { num: "Snapshot", title: "The Result", sub: "A clear view of how you operate and what to change next.", highlight: true }
            ].map((lens, i) => (
              <div key={i} className={`p-8 rounded-2xl border transition-all ${lens.highlight ? 'bg-[#003456] text-white border-[#003456] shadow-xl' : 'bg-white border-gray-100 text-[#003456]'}`}>
                <p className={`text-xs font-black uppercase tracking-widest mb-3 ${lens.highlight ? 'text-[#7edb44]' : 'text-gray-400'}`}>Lens {lens.num}</p>
                <p className="font-black text-base uppercase mb-2 leading-tight">{lens.title}</p>
                <p className={`text-sm leading-relaxed font-medium ${lens.highlight ? 'text-white/70' : 'text-gray-500'}`}>{lens.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-bold italic text-gray-400">
            Activation is not where you act. It’s where you finally see clearly enough to act.
          </p>
        </div>
      </section>


      {/* What You Receive */}
      <section className="py-24 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#003456] mb-4 uppercase tracking-tight">What You Receive</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {outcomes.map((item, i) => (
               <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-left flex flex-col h-full hover:shadow-lg transition-shadow">
                 <p className="text-base font-black text-[#003456] uppercase tracking-tight leading-snug mb-4">
                   <span className="text-[#7edb44] mr-2">0{i+1} —</span>
                   {item.title}
                 </p>
                 <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Make the Decision (Moved here) */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#003456] mb-6 uppercase tracking-tight">Make the Decision</h2>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[#003456] font-black uppercase tracking-[0.1em] text-sm">Founding rates are currently available for a limited time.</p>
                <p className="text-gray-400 font-bold uppercase tracking-[0.15em] text-[10px]">Access is available immediately. Begin anytime.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-[10px] font-black text-[#003456]/40 uppercase tracking-[0.3em]">Activation can be completed individually or with a leadership partner.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {/* Solo Path */}
            <div className="flex flex-col p-10 md:p-14 bg-white rounded-[3rem] border border-gray-100 shadow-xl">
              <div className="mb-8">
                <div className="min-h-[110px] flex flex-col justify-end">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2">Independent Track</span>
                  <h3 className="text-3xl font-black text-[#003456] uppercase tracking-tight">Solo Activation</h3>
                </div>
                <div className="min-h-[80px] flex items-start">
                  <p className="text-base text-gray-600 font-bold mt-4 leading-relaxed">For leaders who want to see how they operate — on their own first.</p>
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-grow text-base md:text-lg font-medium text-gray-700">
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> You complete the diagnostic independently</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> You get a clear view of how you make decisions and where they drift</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> You see the patterns shaping your execution</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> You leave with a focused Executive Operating Map</li>
              </ul>
              <div className="pt-8 border-t border-gray-100">
                <div className="mb-6">
                  <p className="text-5xl font-black text-[#003456] tracking-tighter">$247</p>
                  <p className="text-xs font-black text-[#7edb44] uppercase tracking-[0.2em] mt-2">Founding Rate — $247</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Standard: $497</p>
                </div>
                <a 
                  href={soloStripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-[#003456] text-white font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl active:scale-95 text-center block"
                >
                  Begin Solo Activation
                </a>
              </div>
            </div>

            {/* Joint Path */}
            <div className="flex flex-col p-10 md:p-14 bg-[#003456] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <span className="bg-[#7edb44] text-[#003456] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Recommended</span>
              </div>
              <div className="mb-8">
                <div className="min-h-[110px] flex flex-col justify-end">
                  <span className="text-xs font-black text-white/50 uppercase tracking-widest block mb-2">Partnership Track</span>
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-[#7edb44] w-8 h-8 flex-shrink-0" />
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">Joint Activation</h3>
                  </div>
                </div>
                <div className="min-h-[80px] flex items-start">
                  <p className="text-base text-white/80 font-bold mt-4 leading-relaxed">For leaders who operate together and need to see the same system.</p>
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-grow text-base md:text-lg font-medium text-white/90">
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> Each person completes Activation independently</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> Each receives their own Diagnostic and Executive Operating Map</li>
                
                <li className="pt-4 text-center">
                  <span className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">— Partnership Insights —</span>
                </li>

                <li className="flex gap-3 font-bold text-[#7edb44] italic">
                  <Sparkle className="w-5 h-5 flex-shrink-0" />
                  <span>Where alignment breaks across decisions and expectations</span>
                </li>
                <li className="flex gap-3 font-bold text-[#7edb44] italic">
                  <Star className="w-5 h-5 flex-shrink-0 fill-[#7edb44]" />
                  <span>How to stabilize the Executive–Operator partnership</span>
                </li>
              </ul>
              <div className="pt-8 border-t border-white/10">
                <div className="mb-6">
                  <p className="text-5xl font-black text-white tracking-tighter">$397 <span className="text-base font-normal text-white/40 italic lowercase tracking-normal ml-2">total for both</span></p>
                  <p className="text-xs font-black text-[#7edb44] uppercase tracking-[0.2em] mt-2">Founding Rate — $397</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Standard: $847</p>
                </div>
                <a 
                  href={jointStripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-[#7edb44] text-[#003456] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl active:scale-95 text-center block"
                >
                  Begin Joint Activation
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm md:text-base font-bold text-[#003456] italic">
              If Activation leads to Reset or full Altitude installation, your investment is applied forward.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 brand-gradient text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7edb44]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-center uppercase tracking-tight">THREE POSSIBLE OUTCOMES</h2>
          <p className="text-center text-[#8ae4d9] font-bold mb-16 italic text-xl md:text-2xl max-w-2xl mx-auto leading-tight">
            Activation doesn’t push you forward.<br />
            It reveals the right path — based on how your system actually operates.
          </p>
          
          <div className="space-y-6">
            {[
              { 
                label: "Direct Altitude Installation", 
                desc: "When the system is ready for transformation, you move directly into building structure, cadence, and execution at scale." 
              },
              { 
                label: "Reset (without full installation)", 
                desc: "When the system isn’t ready for full implementation, Reset stabilizes how the business runs — cadence, decision-making, and governance. You can stop there and continue operating within your existing systems." 
              },
              { 
                label: "Pause — with clarity", 
                desc: "When alignment or stability isn’t there yet. You leave with a clear understanding of how you operate and what needs to change before moving forward." 
              }
            ].map((outcome, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-3xl border-2 border-white/10 hover:border-[#7edb44]/50 transition-colors">
                <p className="text-2xl font-black text-[#7edb44] mb-3 uppercase tracking-tight">{outcome.label}</p>
                <p className="text-gray-300 font-medium text-lg leading-relaxed italic">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Timing */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-3xl font-black text-[#003456] mb-8 uppercase tracking-tight">What Activation Is Not</h3>
              <ul className="space-y-5 text-gray-600 font-bold italic text-lg">
                <li>✗ Optimization advice</li>
                <li>✗ Productivity tips</li>
                <li>✗ Tool recommendations</li>
                <li>✗ System design</li>
                <li>✗ Coaching</li>
              </ul>
              <p className="mt-10 text-base font-black text-[#003456] uppercase tracking-widest">Diagnosis comes first.</p>
            </div>
            <div className="bg-[#fcfcfc] p-10 md:p-14 rounded-[2rem] border border-gray-100 shadow-sm">
               <h3 className="text-2xl font-black text-[#003456] mb-6 uppercase tracking-tight">Investment & Timing</h3>
               <div className="mb-8">
                 <p className="text-sm font-black text-[#003456] uppercase tracking-[0.1em] mb-1">Founding rates are currently available for a limited time.</p>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Access is available immediately. Begin anytime.</p>
               </div>
               <div className="space-y-6 mb-8">
                  <div className="flex justify-between border-b border-gray-200 pb-3 text-lg">
                    <span className="font-bold text-gray-700">Solo Activation</span>
                    <span className="font-black text-[#003456]">$247</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3 text-lg">
                    <span className="font-bold text-gray-700">Joint Activation ⭐</span>
                    <span className="font-black text-[#003456]">$397</span>
                  </div>
               </div>
               <p className="mt-8 text-xs font-black text-gray-400 uppercase tracking-[0.2em] leading-relaxed">
                 ✓ 100% credited forward <br />
                 ✓ No obligation to proceed to next stage<br />
                 ✓ Founding rates apply to this window only
               </p>
            </div>
          </div>

          <div className="mb-20">
             <h3 className="text-3xl font-black text-[#003456] mb-12 uppercase tracking-tight text-center">Common Questions</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {[
                  { q: "Can we do Joint if we don't have a CoS?", a: "Yes — if you have a senior operator (VP Ops, COO, Head of Ops) who functions in a similar capacity." },
                  { q: "What if one person doesn't finish?", a: "You get what you paid for. We deliver the snapshot based on available signals from participants who completed inputs." },
                  { q: "Is the credit transferable?", a: "No. The credit is applied to the organization's next engagement (Reset or Altitude), not split between individuals." },
                  { q: "Can I switch from Solo to Joint mid-process?", a: "Yes, within the first 3 days. Pay the difference and we'll onboard the second participant." }
                ].map((faq, i) => (
                  <div key={i} className="space-y-4">
                    <p className="font-black text-[#003456] text-xl md:text-2xl uppercase leading-tight tracking-tight">{faq.q}</p>
                    <p className="text-lg text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Final CTA */}
          <div className="p-14 md:p-24 bg-gray-50 rounded-[4rem] text-center border border-gray-100 shadow-sm">
            <h2 className="text-4xl md:text-6xl font-black text-[#003456] mb-8 uppercase tracking-tighter">Begin Activation</h2>
            <p className="text-xl text-gray-500 font-bold mb-14 italic max-w-2xl mx-auto">Under 15 min per lens. 7 lenses. Willingness to observe without fixing.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
               <a 
                 href={soloStripeLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full md:w-auto px-16 py-7 bg-[#003456] text-white font-black text-2xl rounded-full hover:scale-105 transition-all shadow-xl active:scale-95 text-center block"
               >
                 Solo Activation  $247
               </a>
               <a 
                 href={jointStripeLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full md:w-auto px-16 py-7 bg-[#7edb44] text-[#003456] font-black text-2xl rounded-full hover:scale-105 transition-all shadow-xl active:scale-95 text-center block"
               >
                 Joint Activation  $397
               </a>
            </div>
            <p className="mt-12 text-xs font-black text-gray-400 uppercase tracking-[0.3em]">
              Activation is the only entry point into The Reset or Altitude.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivationPage;