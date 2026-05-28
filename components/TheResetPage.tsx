import React from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo';

const TheResetPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="pt-28 md:pt-36 pb-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8ae4d9] text-[#003456] text-xs font-black uppercase tracking-[0.3em] mb-8">
            THE PROCESS - THE RECALIBRATION
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#003456] mb-8 tracking-tighter leading-tight">
            The Reset
          </h1>
          <p className="text-xl md:text-3xl font-bold text-gray-500 italic mb-12 max-w-2xl mx-auto leading-tight">
            Activation reveals the pattern. <br className="hidden md:block" />
            Reset recalibrates how leadership and operations respond to it.
          </p>
          <div className="h-1.5 w-24 bg-[#7edb44] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-3xl mx-auto px-6 text-xl md:text-2xl text-[#003456] font-medium leading-relaxed space-y-8">
          <p className="font-black text-2xl md:text-4xl tracking-tight uppercase border-l-8 border-[#7edb44] pl-8 py-2">
            Reset is a prescribed 30-day recalibration.
          </p>
          <p className="text-gray-700">
            Recommended when Activation shows that execution strain is driven by behavior, tempo, or operating agreements — not by lack of effort, intelligence, or tools.
          </p>
          <p className="text-gray-500 italic font-bold">
            Reset is valuable on its own. It corrects how leadership and operations work together before any further action is taken.
          </p>
        </div>
      </section>

      {/* Why Reset Exists */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#003456] mb-8 uppercase tracking-tight">Why Reset Exists</h2>
          <p className="text-xl text-gray-600 mb-8">Most organizations don’t struggle because they lack structure. They struggle because:</p>
          <ul className="space-y-6 mb-12">
            {[
              "Decisions collapse upward under pressure",
              "Operators carry invisible load to keep things moving",
              "Meetings compensate for missing clarity",
              "Urgency overrides intent"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[#003456] font-bold text-xl">
                <span className="w-3 h-3 rounded-full bg-[#7edb44] flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-2xl font-bold italic text-[#003456] leading-relaxed">
            When these dynamics take hold, moving forward without recalibration doesn’t resolve them — it reinforces them. Reset exists to slow the system down long enough to correct how leadership and operations work together.
          </p>
        </div>
      </section>

      {/* How it Works - The Four Recalibrations */}
      <section className="py-24 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#003456] mb-4 uppercase tracking-tight">How Reset Works</h2>
            <p className="text-xl text-gray-500 font-bold italic">30 days • Private operating console • Structured inputs • System-led guidance</p>
          </div>
          
          <div className="space-y-8">
            {[
              { title: "1. Pattern Interpretation", desc: "Understanding why the operating pattern identified in Activation exists — what it protects, and what it costs." },
              { title: "2. Role & Decision Recalibration", desc: "Clarifying decision ownership, escalation paths, and where executive presence is required — and where it isn’t." },
              { title: "3. Tempo & Cadence Stabilization", desc: "Correcting meeting purpose, decision rhythm, and where urgency has collapsed structure." },
              { title: "4. Compensation Unwind", desc: "Identifying what must stop and what people are carrying that the system should hold." }
            ].map((step, i) => (
              <div key={i} className="p-10 md:p-14 bg-white rounded-[3rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div className="md:w-[45%]">
                  <h3 className="text-2xl md:text-3xl font-black text-[#003456] uppercase tracking-tighter leading-none mb-4 md:mb-0">
                    {step.title}
                  </h3>
                </div>
                <div className="md:w-[55%]">
                  <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed italic">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paired Teams Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#003456] p-16 md:p-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-[#7edb44]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
             <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-[#7edb44]">Reset for Leader + Operator Team</h2>
             <p className="text-2xl md:text-3xl font-medium mb-12 leading-relaxed italic opacity-80">
               Not to “align” in theory, but to recalibrate how the interface actually works.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg font-bold opacity-90 mb-20">
                <ul className="space-y-6">
                  <li>✦ Who owns which decisions</li>
                  <li>✦ How context travels</li>
                </ul>
                <ul className="space-y-6">
                  <li>✦ When escalation is appropriate</li>
                  <li>✦ What “good” looks like under pressure</li>
                </ul>
             </div>
             
             <div className="flex flex-col items-center gap-4">
                <div className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-center">
                  Shock Absorbers
                </div>
                <div className="text-4xl md:text-6xl text-[#7edb44] leading-none animate-bounce">
                  ↓
                </div>
                <div className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-center">
                  Integrators
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Artifacts & Delivery */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-[#003456] mb-8 uppercase tracking-tight">What You Receive</h2>
              <p className="text-xl text-gray-500 font-medium mb-10 italic">Reset produces operating artifacts, not advice. By the end, you will have:</p>
              <div className="grid grid-cols-1 gap-5">
                {[
                  "Explicit operating agreements",
                  "Clear decision ownership",
                  "Stabilized tempo",
                  "Reduced invisible load",
                  "Shared understanding of system under pressure"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 font-bold text-[#003456] text-base md:text-lg shadow-sm">
                    <span className="text-[#7edb44] font-black text-xl">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#003456] mb-8 uppercase tracking-tight">How Insights Are Delivered</h2>
              <div className="space-y-8 text-gray-600 text-lg font-medium italic leading-relaxed">
                <p>Each week, you receive a concise operating memo synthesizing what the system observed, what it means, and what is being recalibrated.</p>
                <p>Preserved in your private Reset Console and delivered via email. At conclusion, all artifacts are compiled into a single operating packet.</p>
                <div className="mt-10 p-10 bg-[#003456]/5 rounded-3xl border border-[#003456]/10 text-sm md:text-base not-italic font-black uppercase tracking-[0.3em] text-[#003456] text-center shadow-inner">
                  Consolidated Operating Packet
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#fcfcfc] border border-gray-100 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-black text-[#003456] mb-10 uppercase tracking-tight text-center">Investment Range</h2>
            <p className="text-xl text-gray-500 font-medium mb-14 text-center italic max-w-2xl mx-auto">Reset is priced as a serious executive recalibration. Activation fee is fully credited forward.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {/* Solo Card */}
              <div className="p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm text-center flex flex-col justify-between relative min-h-[400px]">
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Solo Recalibration</p>
                  <p className="text-5xl font-black text-[#003456]">$1,997</p>
                  <p className="text-sm font-bold text-[#7edb44] uppercase tracking-widest mt-3">Founding Rate</p>
                  <div className="mt-12 py-6 border-y border-gray-50">
                    <p className="text-xs font-black text-gray-300 uppercase tracking-widest">Enrollment by Invitation</p>
                    <Link to="/orientation" className="text-xs font-bold text-[#003456] hover:text-[#7edb44] uppercase tracking-widest mt-2 inline-block underline underline-offset-4 decoration-gray-200">
                      Questions? Request Orientation
                    </Link>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-2xl font-black text-gray-400 line-through decoration-gray-400/50">$2,497</p>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-1">Standard Rate</p>
                </div>
              </div>

              {/* Joint Card */}
              <div className="p-12 bg-[#003456] rounded-[2.5rem] text-white text-center shadow-xl flex flex-col justify-between relative min-h-[400px]">
                <div className="absolute top-0 right-10 -translate-y-1/2 z-10">
                  <span className="bg-[#7edb44] text-[#003456] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl border-4 border-[#003456]">
                    Recommended
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">Joint Recalibration</p>
                  <p className="text-5xl font-black text-white">$2,497</p>
                  <p className="text-sm font-bold text-[#7edb44] uppercase tracking-widest mt-3">Founding Rate</p>
                  <div className="mt-12 py-6 border-y border-white/5">
                    <p className="text-xs font-black text-white/30 uppercase tracking-widest">Enrollment by Invitation</p>
                    <Link to="/orientation" className="text-xs font-bold text-[#7edb44] hover:text-white uppercase tracking-widest mt-2 inline-block underline underline-offset-4 decoration-white/10">
                      Questions? Request Orientation
                    </Link>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/10">
                  <p className="text-2xl font-black text-white/40 line-through decoration-white/20">$2,997</p>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">Standard Rate</p>
                </div>
              </div>
            </div>

            <div className="max-w-xl mx-auto text-center space-y-6">
              <p className="text-base font-bold text-[#003456] uppercase tracking-widest italic leading-relaxed">
                These programs are by invitation only based on Activation results.
              </p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest italic leading-relaxed">
                Activation determines configuration and preconditions. If prescribed, exact investment is confirmed before commitment. For questions, please request an orientation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Access & After Reset */}
      <section className="py-24 bg-[#fcfcfc] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Founding Access */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-[#003456] uppercase tracking-tight">Founding Access (April 3 Window)</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                For leaders who complete Activation enrollment before April 3rd and are prescribed Reset, Reset is offered at founding pricing.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Founding access:</p>
                <ul className="space-y-3 text-[#003456] font-bold">
                  <li className="flex gap-3"><span className="text-[#7edb44]">✓</span> Applies to the first Reset window only</li>
                  <li className="flex gap-3"><span className="text-[#7edb44]">✓</span> Locks the lowest pricing as Reset is formalized</li>
                  <li className="flex gap-3"><span className="text-[#7edb44]">✓</span> Is granted based on timing and readiness, not negotiation</li>
                </ul>
              </div>
              <div className="space-y-4 text-gray-500 font-medium italic text-sm leading-relaxed">
                <p>Founding access does not change:</p>
                <ul className="list-disc pl-5">
                  <li>The structure of Reset</li>
                  <li>The rigor of the work</li>
                  <li>The requirement that Reset be prescribed</li>
                </ul>
                <p>
                  It simply reflects that you are among the first leaders engaging the recalibration as it is being established. 
                  After April 3, Reset moves to standard pricing.
                </p>
              </div>
            </div>

            {/* What Comes After */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-[#003456] uppercase tracking-tight">What Comes After Reset</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                Reset does not assume a next step. At its conclusion, one of the following is recommended:
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <p className="font-black text-[#003456] uppercase tracking-tight mb-2">Proceed forward</p>
                  <p className="text-gray-500 font-medium italic text-sm">With clarity on what kind of recalibration — if any — makes sense</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <p className="font-black text-[#003456] uppercase tracking-tight mb-2">Pause</p>
                  <p className="text-gray-500 font-medium italic text-sm">No further action recommended at this time</p>
                </div>
              </div>
              <p className="text-xl font-black text-[#003456] leading-tight pt-4">
                Reset is complete when the operating pattern is corrected — not when a calendar milestone is reached.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Oversight */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-24">
            <div>
              <h3 className="text-3xl font-black text-[#003456] mb-8 uppercase tracking-tight">Access & Oversight</h3>
              <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed italic mb-8">
                Reset is designed to be self-serving by default, guided by clear framing and system insights.
              </p>
              <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed italic">
                Support is available when recalibration adds leverage — not when dependency would undermine the work.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Requirement</p>
                <p className="text-xl font-black text-[#003456] leading-tight">
                  Reset is complete when the operating pattern is corrected — not when a milestone is reached.
                </p>
              </div>
            </div>
          </div>

          {/* Prescriptive constraint */}
          <div className="p-16 md:p-24 bg-[#003456] rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-64 h-64 bg-[#7edb44]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
             <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">Reset Is Not a Step You Choose</h2>
             <p className="text-gray-300 text-xl md:text-2xl font-medium italic mb-14 max-w-2xl mx-auto leading-relaxed">
               It is prescribed when the system — not the people — is the constraint. If moving forward without recalibration would repeat the same pattern, Reset is required.
             </p>
             <Link to="/activation" className="inline-flex items-center px-16 py-7 bg-[#7edb44] text-[#003456] font-black text-2xl rounded-full hover:scale-105 transition-all shadow-xl">
               Begin Activation
             </Link>
             <p className="mt-12 text-xs font-black text-white/30 uppercase tracking-[0.4em]">
               Activation is the required first step.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheResetPage;