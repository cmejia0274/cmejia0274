import React from 'react';

const PainSection: React.FC = () => {
  const pains = [
    {
      title: "Strategy Is No Longer Stable",
      desc: "Priorities don’t shift because strategy changed — they shift because no one can prove what’s working. Your leadership team argues over interpretation instead of aligning with execution."
    },
    {
      title: "Meetings Multiply. Decisions Stall.",
      desc: "Cadence exist, but ad hoc meetings keep creeping onto the calendar — each one pretending to be the moment clarity will appear. When no one is explicitly accountable for a decision, progress doesn’t move forward. It waits for consensus that never arrives."
    },
    {
      title: "Your Best People Are Breaking",
      desc: "Not because they can’t handle the work. Because they’re compensating for the absence of structure. When decisions don’t close and priorities don’t settle, your strongest people absorb the chaos. They become an overworked system, until they leave."
    }
  ];

  return (
    <section id="pain" className="py-24 bg-[#fefefe]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-black text-[#003456] mb-8 text-balance tracking-tight">
            When Leaders Stop Leading and Start Coordinating
          </h2>
          <div className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-0.5">Your instincts got you here. But scaling changes the rules.</p>
            <p className="mb-4">Decisions now require multiple meetings, parallel conversations, and interpretation after the fact.</p>
            <p className="font-bold text-[#003456] text-sm md:text-base mb-1">You’re not slow.</p>
            <p className="font-bold text-[#003456] text-lg md:text-xl">Execution is everywhere. Governance is nowhere.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <div 
              key={i} 
              className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-1 bg-[#8ae4d9] mb-6 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-2xl font-bold text-[#003456] mb-4">{pain.title}</h3>
              <p className="text-gray-600 mb-2 leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;