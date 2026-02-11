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
          <h1 className="text-4xl md:text-7xl font-black text-[#003456] mb-8 tracking-tighter leading-tight">
            You didn’t arrive <br className="hidden md:block" /> here by accident.
          </h1>
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
              There’s nothing to prepare and nothing to perform. Over the next ten days, you’ll be asked to notice how decisions get made, where attention goes, and what gets quietly deferred when urgency takes over. The work is brief, structured, and intentionally simple. 
              <span className="text-[#7edb44] font-black uppercase tracking-tight block mt-4">The value comes from observation, not effort.</span>
            </p>
          </div>

          <div className="p-10 md:p-14 bg-[#003456] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7edb44]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">Personal Diagnostic</h2>
            <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed mb-8">
              This is a personal diagnostic. It’s not a company initiative and it doesn’t require alignment from anyone else. The goal isn’t insight for insight’s sake — it’s to surface patterns that usually stay hidden because they’re compensated for rather than examined.
            </p>
            <div className="pt-8 border-t border-white/10">
               <p className="text-[#7edb44] font-black text-3xl md:text-4xl tracking-tighter">Starts: April 3rd</p>
               <p className="text-sm font-bold text-white/50 uppercase tracking-widest mt-2">10-Day Operating Diagnostic</p>
            </div>
          </div>

          <div className="text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
            <p>
              Between now and then, you don’t need to change your calendar, your workflow, or your behavior. In fact, the more normally you operate, the more useful this will be. Instructions and your starting prompt will be sent prior to the start date.
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
              There is nothing to fix during these ten days. The work stands on its own. What comes next, if anything, is optional.
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

export default SoloActivationAccess;