import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const JointActivationAccess: React.FC = () => {
  const blindSpotPdf = "https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/the-blind-spot-lbhsXob401YUMWiX.pdf";

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="pt-32 pb-16 border-b border-gray-100 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto px-6 reveal text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7edb44] text-[#003456] text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
            JOINT ACTIVATION — SECURED
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#003456] mb-8 tracking-tighter leading-tight">
            You’re In. <br className="hidden md:block" /> Welcome.
          </h1>
          <div className="h-1.5 w-24 bg-[#7edb44] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12 reveal">
          <div className="text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
            <p className="font-bold italic text-gray-500">
              You’re entering this diagnostic as two leadership roles operating in close proximity, where execution pressure is absorbed, translated, and acted on.
            </p>
            
            <p>
              Most execution strain doesn’t come from lack of trust or effort. It comes from how information moves, how decisions are shaped under pressure, and how responsibility is carried when the operating model isn’t explicit. 
              <span className="text-[#003456] block mt-4 font-black">Over time, these patterns become invisible — not because they’re intentional, but because they’re functional enough to keep things moving.</span>
            </p>

            <p className="text-2xl font-black uppercase tracking-tight border-l-8 border-[#7edb44] pl-8 py-2">
              This diagnostic is designed to make those patterns visible.
            </p>
          </div>

          {/* Rebranded Parallel Operating Scan Card */}
          <div className="p-10 md:p-14 bg-[#003456] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7edb44]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-2xl md:text-3xl font-black mb-10 uppercase tracking-tight text-[#7edb44]">Parallel Operating Scan</h2>
            
            <div className="space-y-6 text-base md:text-lg font-medium opacity-90 leading-relaxed mb-12">
              <p className="text-xl font-black text-[#7edb44]">You are entering a comparative diagnostic.</p>
              
              <p>
                This is not a facilitated alignment session. <br />
                It is not a workshop.
              </p>
              
              <p className="italic">
                Each leader completes the same seven awareness exercises independently (≈30 minutes each).
              </p>
              
              <p className="font-bold">
                No shared answers. <br />
                No coordination required.
              </p>
              
              <p>
                The objective is not agreement. <br />
                It is <span className="text-[#7edb44] font-black uppercase">structural contrast</span>.
              </p>
              
              <div className="py-6 border-y border-white/10 space-y-4">
                <p className="font-black uppercase tracking-widest text-[#7edb44] text-xs">Once complete:</p>
                <ul className="space-y-3 font-bold">
                  <li className="flex gap-3 items-center"><span className="text-[#7edb44]">●</span> We review both submissions side-by-side</li>
                  <li className="flex gap-3 items-center"><span className="text-[#7edb44]">●</span> You receive comparative Operating Snapshots</li>
                  <li className="flex gap-3 items-center"><span className="text-[#7edb44]">●</span> We meet for a 60-minute joint executive debrief</li>
                </ul>
              </div>
              
              <p className="text-sm italic leading-relaxed text-white/70">
                The goal is to surface where interpretations diverge, where urgency is absorbed differently, and where decision flow quietly bends.
              </p>
              
              <div className="pt-2">
                <p className="text-xs font-black text-white/50 uppercase tracking-widest mb-3">From there, we determine the appropriate next move:</p>
                <div className="flex flex-wrap gap-4 text-xl md:text-2xl font-black tracking-tighter">
                  <span className="text-[#7edb44]">Maintain.</span>
                  <span className="text-[#7edb44]">Reset.</span>
                  <span className="text-white">Or Install.</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
               <p className="text-[#7edb44] font-black text-3xl md:text-4xl tracking-tighter">Access opens April 6, 2026</p>
               <p className="text-sm font-bold text-white/50 uppercase tracking-widest mt-2">You may begin anytime thereafter.</p>
            </div>
          </div>

          {/* Symmetrical System Chart Addition */}
          <div className="py-12 reveal">
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.3em] text-center mb-8">Altitude Operating System Architecture</p>
            <div className="relative p-6 md:p-12 bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
               <img 
                 src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/altitude-executive-operating-system-chart-OUlJfLN0EWEDi1HW.png" 
                 alt="Altitude Operating System Architecture" 
                 className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>

          <div className="text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
            <p className="text-gray-500 italic font-medium">
              This isn’t an evaluation of performance. It isn’t a feedback exercise. And it isn’t about improving communication. The work is observational by design. Awareness comes from noticing what’s already happening, not from trying to correct it in real time.
            </p>

            <p>
              Before then, there’s nothing to align, fix, or prepare. Continue operating as you normally do. That’s what allows the diagnostic to surface real patterns rather than idealized ones. Setup instructions and initial prompts will be sent prior to the access date.
            </p>

            <div className="p-8 md:p-12 border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 group">
               <div className="flex-grow">
                 <h3 className="text-xl font-black text-[#003456] uppercase tracking-tight mb-2 text-center md:text-left">Shared Context</h3>
                 <p className="text-base text-gray-500 font-medium italic text-center md:text-left">
                   If you haven’t already, you may want to read <a href={blindSpotPdf} target="_blank" rel="noopener noreferrer" className="text-[#003456] underline font-bold hover:text-[#7edb44] transition-colors">The Blind Spot</a> before the diagnostic begins.
                 </p>
               </div>
               <a 
                 href={blindSpotPdf} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex-shrink-0 w-full md:w-auto px-8 py-4 bg-gray-50 text-[#003456] font-black rounded-full hover:bg-[#7edb44] hover:text-white transition-all text-center shadow-sm"
               >
                 Open PDF
               </a>
            </div>

            <p className="text-gray-500 italic">
              Not as shared reading or to synchronize interpretation, but as a common lens for recognizing the effects of sustained urgency once they start to show themselves.
            </p>

            <p className="font-black border-l-4 border-[#7edb44] pl-6 py-2">
              During this brief period, the work is to observe without prematurely resolving, correcting, or reframing what appears. What comes next, if anything, is optional.
            </p>

            <div className="pt-12 text-center">
              <div className="space-y-4">
                <p className="text-2xl font-black text-[#003456] uppercase tracking-tighter">A detailed access briefing will be sent before April 6.</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  If you do not receive it by April 5, contact <a href="mailto:consult@ikigai-edge.com" className="text-[#003456] underline hover:text-[#7edb44] transition-colors">consult@ikigai-edge.com</a>
                </p>
              </div>
              <div className="mt-12">
                 <Link to="/" className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-[#003456] transition-colors">Return to Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JointActivationAccess;