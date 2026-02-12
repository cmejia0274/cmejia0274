import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const TheBlindSpot: React.FC = () => {
  const [checks, setChecks] = useState([false, false, false, false]);
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: ''
  });

  const checkCount = checks.filter(c => c).length;

  const questions = [
    "My calendar is 80%+ reactive meetings",
    "Strategic work keeps getting pushed to 'next quarter'",
    "We run on heroics more than systems",
    "I know what needs fixing but can't find the space to address it"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const triggerDownload = () => {
    const pdfUrl = "https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/" +
                   "the-blind-spot-lbhsXob401YUMWiX.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "The_Blind_Spot_Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://airtableproxy-iqpwur2foa-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          role: formData.role || "Not Specified",
          source: "The Blind Spot Guide"
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Airtable Proxy Response Error:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        throw new Error('Submission failed');
      }

      setFormStatus('success');
      triggerDownload();

    } catch (error) {
      console.error('Form error:', error);
      // Ensure the user still gets the file even if logging fails
      setFormStatus('success');
      triggerDownload();
    }
  };

  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="pt-24 pb-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 reveal text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#003456] 
            text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            THE PROCESS - THE RECOGNITION
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-[#003456] 
            mb-8 tracking-tighter leading-tight">
            The Blind Spot
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-500 italic 
            mb-12">
            You're doing exactly what the system rewards. <br 
              className="hidden md:block" />
            And it's quietly breaking what you're trying to build.
          </p>
          <div className="h-1 w-20 bg-[#7edb44] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-3xl mx-auto px-6 text-lg md:text-xl 
          text-[#003456] font-medium leading-relaxed space-y-24">
          
          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase 
              tracking-tight">When Leadership Becomes Survival</h2>
            <p className="mb-6">At some point, it stops being about shaping the 
              future. It becomes about surviving the present.</p>
            <p className="mb-6 text-gray-500 italic border-l-4 
              border-[#8ae4d9] pl-6">
              The calendar fills — not because it's the right design, but 
              because it feels responsible. One more meeting to unblock a 
              decision. One more check-in so nothing slips. One more review 
              because there's no time to fix what's underneath.
            </p>
            <p>From the outside, it looks like commitment. From the inside, 
              it feels like holding everything together with attention and 
              adrenaline.</p>
          </div>

          <div className="p-12 bg-white rounded-[3rem] shadow-xl border 
            border-gray-100 reveal">
            <h2 className="text-2xl font-black mb-6 uppercase 
              tracking-tight">The Green Arrows in the Board Deck</h2>
            <p className="text-gray-500 mb-8">They still appear. But everyone 
              knows how they were earned:</p>
            <ul className="space-y-4 mb-8">
              {["Heroics.", "Manual workarounds.", "Short-term patches."].map(
                (item, i) => (
                <li key={i} className="flex items-center gap-4 text-[#003456] 
                  font-black italic">
                  <span className="w-2 h-2 rounded-full bg-[#7edb44]"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p>Effort poured in to compensate for foundations that can't 
              quite keep up. The pressure to deliver now — this week, this 
              quarter — becomes so absolute that addressing deeper cracks 
              starts to feel indulgent. Like a luxury the moment can't 
              afford.</p>
          </div>

          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase 
              tracking-tight">When the Cost Moves Instead of Disappearing</h2>
            <p className="mb-6">The leaders caught inside this pattern aren't 
              careless. They aren't incompetent. They're capable. 
              Experienced.</p>
            <p className="mb-8">But the cost doesn't disappear. It just moves:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <p className="text-sm font-black text-gray-400 uppercase 
                  tracking-widest mb-2">Shift 01</p>
                <p className="font-bold">Context that should live in systems 
                  starts living in people</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <p className="text-sm font-black text-gray-400 uppercase 
                  tracking-widest mb-2">Shift 02</p>
                <p className="font-bold">Decisions that should travel freely 
                  get trapped in follow-ups</p>
              </div>
            </div>
            <p className="mt-8">Chiefs of Staff, operators, and senior leaders 
              become shock absorbers — buffering the system (or the logic 
              of one) so it can keep moving.</p>
          </div>

          <div className="bg-[#003456] text-white p-12 rounded-[3rem] 
            shadow-2xl relative overflow-hidden reveal">
             <div className="absolute top-0 right-0 w-64 h-64 
              bg-[#7edb44]/10 rounded-full blur-3xl translate-x-1/2 
              -translate-y-1/2"></div>
             <h2 className="text-3xl font-black mb-6 uppercase tracking-tight 
              text-[#7edb44]">This Is the Blind Spot</h2>
             <p className="text-lg md:text-xl font-bold italic 
              leading-relaxed mb-8">Not a lack of skill. Not a motivation 
                problem. A distortion created by constant urgency.</p>
             <ul className="space-y-4 text-gray-300">
               <li>✦ How decisions get made</li>
               <li>✦ What earns attention</li>
               <li>✦ What gets deferred or ignored</li>
             </ul>
             <div className="mt-12 p-8 bg-white/5 border border-white/10 
              rounded-2xl">
                <p className="text-sm mb-4"><span className="text-[#7edb44] 
                  font-black">BIOLOGICAL:</span> Cortisol suppresses the part 
                  of the brain responsible for strategic thinking.</p>
                <p className="text-sm mb-4"><span className="text-[#7edb44] 
                  font-black">CULTURAL:</span> Urgency is rewarded. 
                  Reflection is treated as delay.</p>
                <p className="text-sm"><span className="text-[#7edb44] 
                  font-black">EXPENSIVE:</span> Organizations spend far 
                  more compensating for broken foundations than 
                  addressing them.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Assessment Section with Lead Capture Form */}
      <section className="py-24 brand-gradient text-white">
        <div className="max-w-4xl mx-auto px-6 reveal text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">
            Does this sound familiar?
          </h2>
          <p className="text-lg md:text-xl text-[#8ae4d9] font-bold 
            mb-12 italic opacity-80">Select all that apply to your 
            current leadership environment.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left 
            mb-16">
            {questions.map((q, i) => (
              <button 
                key={i}
                onClick={() => {
                  const newChecks = [...checks];
                  newChecks[i] = !newChecks[i];
                  setChecks(newChecks);
                }}
                className={`p-6 rounded-2xl border-2 transition-all flex 
                  items-start gap-4 ${
                  checks[i] ? 'bg-[#7edb44]/20 border-[#7edb44]' : 
                  'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`w-6 h-6 rounded border-2 flex items-center 
                  justify-center flex-shrink-0 mt-1 ${
                  checks[i] ? 'bg-[#7edb44] border-[#7edb44]' : 
                  'border-white/30'
                }`}>
                  {checks[i] && <svg className="w-4 h-4 text-[#003456]" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                    strokeWidth={4}><path d="M5 13l4 4L19 7" /></svg>}
                </div>
                <span className="font-bold text-sm md:text-base 
                  leading-tight">
                  {q}
                </span>
              </button>
            ))}
          </div>

          {checkCount >= 2 && (
            <div className="p-8 bg-white/10 border border-[#7edb44] 
              rounded-3xl mb-16 animate-in fade-in zoom-in duration-500">
              <p className="text-2xl md:text-3xl font-black text-[#7edb44] 
                mb-2 uppercase tracking-tighter">You're in the blind spot.</p>
              <p className="text-gray-300 font-medium italic">It's nearly 
                invisible because from the inside, it feels like 
                responsibility.</p>
            </div>
          )}

          <div id="guide-card" className="bg-white text-[#003456] p-10 md:p-16 rounded-[3rem] 
            shadow-2xl text-left">
            <div className="max-w-2xl mx-auto">
              {formStatus === 'success' ? (
                <div className="space-y-12">
                  <div className="p-12 bg-gray-50 rounded-[2rem] border-2 
                    border-[#7edb44] text-center animate-in zoom-in 
                    duration-500 shadow-sm">
                    <div className="w-20 h-20 bg-[#7edb44] rounded-full flex 
                      items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor" 
                        strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" 
                          d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-black mb-2 uppercase 
                      tracking-tight">Success!</h4>
                    <p className="text-gray-600 font-bold italic mb-8">
                      Your guide is downloading. If it doesn't start, use 
                      the link below.
                    </p>
                    <a 
                      href="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/the-blind-spot-lbhsXob401YUMWiX.pdf" 
                      className="text-[#003456] font-black underline 
                        hover:text-[#7edb44]"
                      target="_blank"
                    >
                      Direct Download Link
                    </a>
                  </div>

                  {/* Internal Progress Info */}
                  <div className="p-10 md:p-14 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-[#003456] mb-4 uppercase tracking-tighter">
                      What Happens After Recognition?
                    </h3>
                    <p className="text-lg md:text-xl text-gray-500 font-bold italic mb-8">
                      Recognition is clarity. Activation is structure.
                    </p>
                    <div className="w-full h-px bg-gray-100 mb-8"></div>
                    <div className="space-y-4">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-[#003456] text-white text-[10px] font-black uppercase tracking-[0.2em]">
                        Stage 02 — Activation
                      </span>
                      <p className="text-gray-500 font-medium leading-relaxed">
                        A Brief structured visibility into how pressure is shaping your leadership rhythm.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 
                    uppercase tracking-tight text-center">
                    Get The Blind Spot Guide
                  </h3>
                  <p className="text-gray-500 font-medium mb-10 text-center 
                    leading-relaxed italic">
                    A field guide to recognizing the pattern before 
                    trying to fix it. Complete the form below to 
                    receive your digital copy instantly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase 
                          tracking-widest text-gray-400">Full Name</label>
                        <input 
                          required
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full px-6 py-4 bg-gray-50 border 
                            border-gray-100 rounded-2xl focus:outline-none 
                            focus:border-[#003456] font-bold text-[#003456] 
                            transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase 
                          tracking-widest text-gray-400">Email Address</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="yourname@domain.com"
                          className="w-full px-6 py-4 bg-gray-50 border 
                            border-gray-100 rounded-2xl focus:outline-none 
                            focus:border-[#003456] font-bold text-[#003456] 
                            transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase 
                        tracking-widest text-gray-400">Role (Optional)</label>
                      <select 
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-gray-50 border 
                          border-gray-100 rounded-2xl focus:outline-none 
                          focus:border-[#003456] font-bold text-[#003456] 
                          appearance-none transition-colors"
                      >
                        <option value="">Select your role...</option>
                        <option value="Executive Leader">Executive 
                          Leader</option>
                        <option value="Chief of Staff">Chief of 
                          Staff</option>
                        <option value="Operator">Operator</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-red-500 font-bold text-sm 
                        text-center">Something went wrong. Please check 
                        your connection and try again.</p>
                    )}

                    <button 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-6 bg-[#003456] text-white 
                        font-black text-xl rounded-full hover:scale-105 
                        transition-all shadow-xl active:scale-95 
                        disabled:opacity-50 flex items-center 
                        justify-center gap-4"
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-6 h-6 border-4 border-white 
                          border-t-transparent rounded-full animate-spin">
                        </div>
                      ) : (
                        <>
                          Download The Guide
                          <svg className="w-6 h-6" fill="none" 
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" 
                              strokeLinejoin="round" strokeWidth={3} 
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 
                              8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 
                              0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 
                              2 0 01-2 2z" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-gray-400 text-center 
                      uppercase tracking-widest font-bold">
                      By downloading, you agree to our privacy policy and 
                      operational standards.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Natural Progression Link - Moved here to appear after the Download Guide card */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <p className="text-[#9ea7ae] font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-8">
            STAGE 01 COMPLETE?
          </p>
          <Link 
            to="/activation" 
            className="text-2xl md:text-3xl font-black text-[#003456] underline decoration-2 underline-offset-[12px] hover:text-[#7edb44] hover:decoration-[#7edb44] transition-all inline-flex items-center"
          >
            Move to Stage 02: Activation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TheBlindSpot;