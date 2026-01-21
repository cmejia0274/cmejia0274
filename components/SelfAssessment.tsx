import React from 'react';

const SelfAssessment: React.FC = () => {
  const points = [
    {
      title: "You believe clarity should outlast the meeting.",
      desc: "Priorities, decisions, and ownership persist beyond conversations and decks."
    },
    {
      title: "You expect execution to speak for itself.",
      desc: "You’d rather see real signals than spend leadership time explaining progress after the fact."
    },
    {
      title: "You believe accountability should be structural, not personal.",
      desc: "Ownership is designed into the system, not enforced through reminders, escalation, or heroics."
    },
    {
      title: "You expect decisions to land.",
      desc: "When something is decided, it changes behavior, resource allocation, or operating rhythm — it doesn’t evaporate."
    },
    {
      title: "You want one shared executive reality.",
      desc: "You’re done reconciling competing narratives across meetings, spreadsheets, and decks."
    },
    {
      title: "You want to govern the business, not manage coordination.",
      desc: "Your time is better spent setting direction and making trade-offs than stitching together updates."
    }
  ];

  return (
    <section id="readiness" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#8ae4d9]/5 rounded-full blur-[80px] -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7edb44]/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#003456]/5 text-[#003456] text-sm font-black uppercase tracking-[0.2em] mb-6">
            Self-Assessment
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#003456] tracking-tight mb-6">
            Altitude Readiness
          </h2>
          <p className="text-xl text-gray-500 font-bold italic">
            "You’re ready for Altitude if..."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {points.map((point, idx) => {
            return (
              <div 
                key={idx} 
                className="group p-8 md:p-10 bg-white rounded-[2.5rem] border border-gray-100/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col reveal"
                style={{ transitionDelay: `${(idx % 2) * 200}ms` }}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8ae4d9]/40 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#003456] mb-4 leading-tight tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-[#64748b] font-medium">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center reveal">
          <div className="inline-block p-1 bg-[#7edb44] rounded-full">
             <div className="px-10 py-4 bg-white rounded-full">
               <p className="text-[#003456] font-black uppercase tracking-widest text-sm">
                 If this sounds like your team, the system is ready for you.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessment;