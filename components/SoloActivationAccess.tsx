import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const SoloActivationAccess: React.FC = () => {
  const blindSpotPdf = "https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/the-blind-spot-lbhsXob401YUMWiX.pdf";

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="pt-32 pb-16 border-b border-gray-100 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto px-6 reveal text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#003456] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            SOLO ACTIVATION — SECURED
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#003456] mb-4 tracking-tighter leading-tight">
            You’re In. Welcome.
          </h1>
          <p className="text-xl md:text-3xl font-bold text-gray-500 italic mb-8">
            You didn’t arrive here by accident.
          </p>
          <div className="h-1.5 w-24 bg-[#7edb44] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Narrative Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12 reveal">
          <div className="text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
            <p className="font-bold italic text-gray-500">
              Most leaders stay in motion long enough to avoid seeing how they actually operate when pressure is present. Let's be honest, the system rewards momentum more than reflection. 
              <span className="text-[#003456] block mt-4 not-italic font-black">Even when momentum may be a performance of optics and not reality.</span>
            </p>
            
            <p>
              This diagnostic is for people willing to look clearly before trying to change anything.
            </p>

            <p>
              There’s nothing to prepare and nothing to perform. Over a brief period, you’ll be asked to notice how decisions get made, where attention goes, and what gets quietly deferred when urgency takes over. The work is brief, structured, and intentionally simple. 
              <span className="text-[#7edb44] font-black uppercase tracking-tight block mt-4">The value comes from observation, not effort.</span>
            </p>
          </div>

          {/* Rebranded Diagnostic Card */}
          <div className="p-10 md:p-14 bg-[#003456] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7edb44]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-2xl md:text-3xl font-black mb-10 uppercase tracking-tight">Individual Operating Scan</h2>
            
            <div className="space-y-6 text-base md:text-lg font-medium opacity-90 leading-relaxed mb-12">
              <p className="text-xl font-black text-[#7edb44]">You are entering a structured diagnostic.</p>
              
              <p>
                This is not a company initiative. <br />
                It does not require alignment from anyone else.
              </p>
              
              <p className="italic">
                This is a personal assessment of how you are operating inside your current environment.
              </p>
              
              <p>
                Over the coming days, you will complete seven focused awareness exercises (≈30 minutes each).
              </p>
              
              <p>
                They are designed to surface how pressure is shaping your leadership rhythm — not in theory, but in practice.
              </p>
              
              <p className="font-bold">
                The goal is not insight for insight’s sake. It is to reveal patterns that typically remain hidden because they are compensated for rather than examined.
              </p>
              
              <div className="py-6 border-y border-white/10 space-y-4">
                <p className="font-black uppercase tracking-widest text-[#7edb44] text-xs">Once complete:</p>
                <ul className="space-y-3 font-bold">
                  <li className="flex gap-3 items-center"><span className="text-[#7edb44]">●</span> We review and synthesize structural patterns</li>
                  <li className="flex gap-3 items-center"><span className="text-[#7edb44]">●</span> You receive your Operating Snapshot</li>
                  <li className="flex gap-3 items-center"><span className="text-[#7edb44]">●</span> We meet for a 60-minute executive debrief</li>
                </ul>
              </div>
              
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

          <div className="text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
            <p>
              Between now and then, you don’t need to change your calendar, your workflow, or your behavior. In fact, the more normally you operate, the more useful this will be. Instructions and your starting prompt will be sent prior to the access date.
            </p>

            <div className="p-8 md:p-12 border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 group">
               <div className="flex-grow">
                 <h3 className="text-xl font-black text-[#003456] uppercase tracking-tight mb-2">Pre-Diagnostic Context</h3>
                 <p className="text-base text-gray-500 font-medium italic">
                   If you haven’t already, you may want to read <a href={blindSpotPdf} target="_blank" rel="noopener noreferrer" className="text-[#003456] underline font-bold hover:text-[#7edb44] transition-colors">The Blind Spot</a> before the diagnostic begins.
                 </p>
               </div>
               <a 
                 href={blindSpotPdf} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex-shrink-0 w-full md:w-auto px-8 py-4 bg-gray-50 text-[#003456] font-black rounded-full hover:bg-[#7edb44] hover:text-white transition-all text-center"
               >
                 Open PDF
               </a>
            </div>

            <p className="text-gray-500 italic">
              Not as preparation, and not as homework, but as context. It offers a language for patterns that tend to show up once attention is no longer being spent holding everything together.
            </p>

            <p className="font-black border-l-4 border-[#7edb44] pl-6 py-2">
              There is nothing to fix during this brief period. The work stands on its own. What comes next, if anything, is optional.
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

export default SoloActivationAccess;