import React from 'react';

const OrientationPage: React.FC = () => {
  const schedulerUrl = "https://scheduler.zoom.us/claudia-mejia-8io5s8/orientation";

  const processSteps = [
    {
      number: "01",
      title: "Select Your Window",
      desc: "Choose a 30-minute slot that fits your executive rhythm. We respect your time and keep the focus sharp."
    },
    {
      number: "02",
      title: "Executive Sync",
      desc: "A high-level conversation about your current operating friction and where the system is breaking down."
    },
    {
      number: "03",
      title: "Strategic Fit",
      desc: "We determine if Altitude is the right architecture to govern your organization's growth and complexity."
    }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* Hero Header */}
      <section className="pt-24 pb-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7edb44]/10 text-[#003456] text-sm font-black uppercase tracking-[0.2em] mb-6">
            Executive Orientation
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#003456] mb-8 tracking-tight leading-tight">
            The First Step Toward <br /><span className="text-[#7edb44]">Operational Integrity</span>
          </h1>
          <div className="h-1 w-20 bg-[#7edb44] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Content & Booking Portal */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context & Process */}
            <div className="lg:col-span-7 space-y-12 reveal-left">
              <div>
                <h2 className="text-3xl font-black text-[#003456] mb-8 tracking-tight">
                  What to Expect
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                  <p>
                    We’ll dive into your most pressing pain points—those things that keep you up at night—and discuss how Altitude provides the relief and results you need.
                  </p>
                  <p>
                    Our goal is a focused, high-level conversation. We’re here to establish if we’re the right fit to help you achieve your business objectives.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-[#7edb44] font-black text-xs uppercase tracking-[0.3em] mb-3 block">{step.number}</span>
                    <h4 className="font-bold text-[#003456] mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-[#003456] rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7edb44]/10 rounded-full blur-3xl"></div>
                <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-0">
                  "Altitude is built for leaders who refuse to let execution rewrite strategy."
                </p>
              </div>
            </div>

            {/* Right Column: The Action Card */}
            <div className="lg:col-span-5 reveal-right">
              <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden sticky top-28">
                {/* Visual indicator of the portal */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-[#7edb44]/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#7edb44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#003456]">Secure Your Time</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">via Zoom Scheduler</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7edb44]"></span>
                      <span>30 Minute Strategic Sync</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8ae4d9]"></span>
                      <span>Direct Executive Access</span>
                    </div>
                  </div>

                  <a 
                    href={schedulerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-8 py-6 bg-[#003456] text-white font-black text-xl rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-center shadow-[0_20px_40px_rgba(0,52,86,0.2)]"
                  >
                    Open Booking Calendar
                  </a>

                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-sm font-black text-[#003456] mb-4 uppercase tracking-widest">Need immediate assistance?</h4>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      For immediate or particular inquiries, reach us directly via our executive concierge.
                    </p>
                    <a 
                      href="mailto:consult@ikigai-edge.com" 
                      className="inline-flex items-center gap-2 text-[#7edb44] font-black hover:text-[#003456] transition-colors"
                    >
                      <span>Email Us Directly</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-24 text-center">
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">
              Altitude Operating System • Strategic Governance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrientationPage;