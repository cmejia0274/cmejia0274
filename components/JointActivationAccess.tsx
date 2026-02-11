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

          <div className="p-10 md:p-14 bg-[#003456] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7edb44]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight text-[#7edb44]">Paired Protocol</h2>
            <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed mb-8">
              Over the next ten days, you’ll each receive short, structured prompts. Some reflections will remain individual. Others will be shared. The purpose isn’t discussion or agreement; it’s to see how the system between you behaves when urgency is present.
            </p>
            <div className="pt-8 border-t border-white/10">
               <p className="text-[#7edb44] font-black text-3xl md:text-4xl tracking-tighter">Starts: April 3rd</p>
               <p className="text-sm font-bold text-white/50 uppercase tracking-widest mt-2">Joint Operating Diagnostic</p>
            </div>
          </div>

          <div className="text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
            <p className="text-gray-500 italic font-medium">
              This isn’t an evaluation of performance. It isn’t a feedback exercise. And it isn’t about improving communication. The work is observational by design. Awareness comes from noticing what’s already happening, not from trying to correct it in real time.
            </p>

            <p>
              Before then, there’s nothing to align, fix, or prepare. Continue operating as you normally do. That’s what allows the diagnostic to surface real patterns rather than idealized ones. Setup instructions and initial prompts will be sent prior to the start date.
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
              During these ten days, the work is to observe without prematurely resolving, correcting, or reframing what appears. What comes next, if anything, is optional.
            </p>

            <div className="pt-12 text-center">
              <p className="text-2xl font-black text-[#003456] uppercase tracking-tighter">You’ll hear from us soon.</p>
              <div className="mt-8">
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