import React from 'react';
import Logo from './Logo';

const ActivationPage: React.FC = () => {
  const soloStripeLink = "https://buy.stripe.com/fZu3cuawZb5wffq5Y04c800";
  const jointStripeLink = "https://buy.stripe.com/9B6fZg6gJ3D44AM7244c801";

  const outcomes = [
    {
      title: "Operating Pattern Profile",
      desc: "How urgency shapes decisions, tempo, and escalation patterns."
    },
    {
      title: "Compensation Map",
      desc: "Where people or effort are compensating for structural gaps."
    },
    {
      title: "Primary Structural Constraint(s)",
      desc: "The constraint that defines your system’s current ceiling."
    },
    {
      title: "Readiness Signal",
      desc: "Whether your system needs repair or is ready for redesign."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="pt-24 pb-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 reveal text-center">
          <div className="flex justify-center mb-10">
            <Logo className="h-12 md:h-16" showText={false} />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#003456] text-white text-xs font-black uppercase tracking-[0.3em] mb-8">
            THE PROCESS - THE DIAGNOSTIC
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#003456] mb-8 tracking-tighter leading-tight">
            Activation
          </h1>
          <p className="text-xl md:text-3xl font-bold text-gray-500 italic mb-12 max-w-2xl mx-auto leading-tight">
            Most leaders recognize the Blind Spot. <br className="hidden md:block" />
            Few are ready to change how they operate inside it.
          </p>
          <div className="h-1.5 w-24 bg-[#7edb44] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-3xl mx-auto px-6 text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8 reveal">
          <p className="font-black text-2xl md:text-4xl tracking-tight uppercase border-l-8 border-[#7edb44] pl-8 py-2">
            Activation is the mandatory entry point into this work.
          </p>
          <p className="text-gray-700">
            A Brief diagnostic baseline designed to surface how execution actually works — not how it's intended to work, not how it looks on paper, not how it's described in meetings.
          </p>
          <p className="text-gray-500 italic font-bold">
            This is where urgency slows down long enough for clarity to emerge.
          </p>
        </div>
      </section>

      {/* What it Is */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 reveal">
          <h2 className="text-3xl font-black text-[#003456] mb-8 uppercase tracking-tight">What Activation Is</h2>
          <p className="text-xl text-gray-600 mb-8">Activation is a paid readiness and baseline assessment. Its purpose is simple:</p>
          <ul className="space-y-6 mb-12">
            {[
              "Replace assumption with signal",
              "Reveal where execution depends on people compensating for missing structure",
              "Determine the appropriate next step — if any"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[#003456] font-bold text-xl">
                <span className="w-3 h-3 rounded-full bg-[#7edb44] flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-wrap gap-4 text-sm font-black uppercase tracking-widest text-gray-500">
             <span className="px-4 py-2 bg-white rounded-lg border border-gray-200">Not Coaching</span>
             <span className="px-4 py-2 bg-white rounded-lg border border-gray-200">Not Optimization</span>
             <span className="px-4 py-2 bg-white rounded-lg border border-gray-200">Not a Preview</span>
          </div>
          <p className="mt-10 text-2xl font-bold italic text-[#003456]">It is a deliberate pause to see the system clearly.</p>
        </div>
      </section>

      {/* Why Activation Required */}
      <section className="py-24 brand-gradient text-white">
        <div className="max-w-3xl mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tight">Why Activation Is Required</h2>
          <p className="text-2xl font-medium mb-10 leading-snug">Most leaders believe they know where the problem is.</p>
          <p className="text-[#8ae4d9] font-bold italic mb-12 border-l-4 border-[#7edb44] pl-6 text-xl md:text-2xl">
            They are usually wrong — not because they lack intelligence, but because pressure distorts perception.
          </p>
          <div className="space-y-6 mb-12">
            <p className="text-gray-300 font-black uppercase text-sm tracking-widest">Without a baseline:</p>
            {["Teams jump straight to solutions", "Effort increases, but leverage doesn't", "The same problems reappear under new names"].map((item, i) => (
              <p key={i} className="flex gap-4 font-bold text-xl md:text-2xl">
                <span className="text-red-400">❌</span> {item}
              </p>
            ))}
          </div>
          <p className="text-2xl md:text-4xl font-black leading-tight tracking-tighter">
            Activation prevents premature action. <br />
            <span className="text-gray-400">It ensures that any next step is grounded in reality, not urgency.</span>
          </p>
        </div>
      </section>

      {/* How it Works - The Inputs */}
      <section className="py-24 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#003456] mb-4 uppercase tracking-tight">How Activation Works</h2>
            <p className="text-xl text-gray-500 font-bold italic">Total duration: Brief • commitment: (7 lenses) ideally to be completed in &lt; 14 days</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", title: "Reaction Journal", sub: "Urgency and response patterns" },
              { num: "02", title: "Calendar Reality", sub: "Where time actually goes" },
              { num: "03", title: "Foundation Test", sub: "What exists vs what substitutes" },
              { num: "04", title: "Compensation Map", sub: "Where people carry hidden load" },
              { num: "05", title: "Tempo Snapshot", sub: "Pace, deferral, and rebuilds" },
              { num: "06", title: "Optics Snapshot", sub: "Health signals vs reality" },
              { num: "07", title: "Forward Risk", sub: "What breaks if nothing changes" },
              { num: "Snapshot", title: "The Result", sub: "Final integrated analysis", highlight: true }
            ].map((lens, i) => (
              <div key={i} className={`p-8 rounded-2xl border transition-all ${lens.highlight ? 'bg-[#003456] text-white border-[#003456] shadow-xl' : 'bg-white border-gray-100 text-[#003456]'}`}>
                <p className={`text-xs font-black uppercase tracking-widest mb-3 ${lens.highlight ? 'text-[#7edb44]' : 'text-gray-400'}`}>Lens {lens.num}</p>
                <p className="font-black text-base uppercase mb-2 leading-tight">{lens.title}</p>
                <p className={`text-sm leading-relaxed font-medium ${lens.highlight ? 'text-white/70' : 'text-gray-500'}`}>{lens.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-bold italic text-gray-400">
            "Nothing is fixed during Activation. That restraint is intentional."
          </p>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#003456] mb-4 uppercase tracking-tight">What You Receive</h2>
            <p className="text-xl text-gray-600 font-medium italic">Baseline Operating Snapshot (Executive Brief | 2–3 pages)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {outcomes.map((item, i) => (
               <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center flex flex-col items-center h-full hover:shadow-lg transition-shadow">
                 <span className="text-[#7edb44] font-black text-2xl block mb-4">0{i+1}</span>
                 <p className="text-base font-black text-[#003456] uppercase tracking-tight leading-snug mb-4">{item.title}</p>
                 <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Choose Your Path (Moved here) */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto px-6 reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#003456] mb-6 uppercase tracking-tight">Choose Your Path</h2>
            <div className="space-y-4">
              <p className="text-gray-500 font-medium italic text-xl">Activation can be completed solo or jointly.</p>
              <div className="space-y-1">
                <p className="text-[#003456] font-black uppercase tracking-[0.1em] text-sm">FOUNDING RATE CLOSES APRIL 3, 2026</p>
                <p className="text-gray-400 font-bold uppercase tracking-[0.15em] text-[10px]">Access opens April 6. Begin anytime thereafter.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {/* Solo Path */}
            <div className="flex flex-col p-10 md:p-14 bg-white rounded-[3rem] border border-gray-100 shadow-xl">
              <div className="mb-8">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2">Independent Track</span>
                <h3 className="text-3xl font-black text-[#003456] uppercase tracking-tight">Solo Activation</h3>
                <p className="text-base text-gray-600 font-bold mt-4 leading-relaxed">For: Executive Leaders, Chiefs of Staff, or senior operators activating independently</p>
              </div>
              <ul className="space-y-5 mb-10 flex-grow text-base md:text-lg font-medium text-gray-700">
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> One individual completes the Brief diagnostic</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> One Baseline Operating Snapshot is produced</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> Outcomes determined based on individual signal</li>
              </ul>
              <div className="pt-8 border-t border-gray-100">
                <div className="mb-6">
                  <p className="text-5xl font-black text-[#003456]">$247</p>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">Founding Rate | Standard: $497</p>
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
                <span className="text-xs font-black text-white/50 uppercase tracking-widest block mb-2">Partnership Track</span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Joint Activation</h3>
                <p className="text-base text-white/80 font-bold mt-4 leading-relaxed">For: Executive Leaders operating with a Chief of Staff or senior operator</p>
              </div>
              <ul className="space-y-5 mb-10 flex-grow text-base md:text-lg font-medium text-white/90">
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> Each participant completes Activation independently</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> No shared answers. No alignment sessions.</li>
                <li className="flex gap-3"><span className="text-[#7edb44] font-black">✓</span> reveals context splits and silent compensation</li>
                <li className="flex gap-3 font-bold text-[#7edb44] italic">✦ Reveals where decisions stall in the handoff</li>
              </ul>
              <div className="pt-8 border-t border-white/10">
                <div className="mb-6">
                  <p className="text-5xl font-black text-white">$397 <span className="text-base font-normal text-white/40 italic lowercase">total for both</span></p>
                  <p className="text-xs font-black text-white/40 uppercase tracking-widest mt-2">Founding Rate | Standard: $847</p>
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
          
          <p className="text-center text-base font-bold text-gray-500 uppercase tracking-widest italic">
            "Why is Joint Activation only $150 more? Because the diagnostic value compounds when we see both lenses."
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 brand-gradient text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7edb44]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight">Three Possible Outcomes</h2>
          <div className="space-y-6">
            {[
              { label: "READY → Reset, then Install", desc: "For behavioral or tempo constraints. Builds the substrate for adoption." },
              { label: "READY → Direct Altitude Installation", desc: "For structural and cadence constraints. Feasible when adoption is ready." },
              { label: "CONDITIONAL / NOT READY → Pause", desc: "Role clarity or cadence stabilization needed. No pressure to proceed." }
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
        <div className="max-w-4xl mx-auto px-6 reveal">
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
                 <p className="text-sm font-black text-[#003456] uppercase tracking-[0.1em] mb-1">FOUNDING RATE CLOSES APRIL 3, 2026</p>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Access opens April 6. Begin anytime thereafter.</p>
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
            <p className="text-xl text-gray-500 font-bold mb-14 italic max-w-2xl mx-auto">30 minutes per day. 7 lenses. Willingness to observe without fixing.</p>
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