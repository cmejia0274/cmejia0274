import React from 'react';

const OpportunityCost: React.FC = () => {
  const opportunityCosts = [
    { 
      label: "Strategic Drift", 
      desc: "When priorities shift without a shared execution truth, teams pull in different directions. You fall 3–6 months behind.",
      impact: "Financial Impact: $150k–$300k per year — caused by leadership misalignment and downstream rework"
    },
    { 
      label: "Decision Latency", 
      desc: "When decisions require consensus instead of ownership, speed collapses. You don’t lose ideas. You lose timing.",
      impact: "Financial Impact:$200k–$500k per year from delayed approvals, stalled deals, and opportunities captured by faster competitors." 
    },
    { 
      label: "Team Burnout", 
      desc: "When execution depends on a few people holding everything together, burnout becomes a single point of failure.",
      impact: "Financial Impact: $300k+ per year per senior leader — driven by forced turnover, lost institutional memory, and momentum resets that compound beyond replacement cost."
    },
    { 
      label: "Investor Confidence", 
      desc: "Boards don’t lose confidence because problems exist. They lose confidence when the same problems resurface quarter after quarter with new explanations.",
      impact: "Financial Impact: $100k–$500k per year in valuation pressure, delayed approvals, and increased scrutiny, caused by narrative drift and execution credibility erosion."
    }
  ];

  return (
    <section className="py-24 brand-gradient text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight text-balance reveal">
          What Another Quarter without an Operating System actually Costs You
        </h2>
        
        <div className="mb-12 reveal" style={{ transitionDelay: '200ms' }}>
          <div className="inline-block relative">
            <div className="text-4xl md:text-7xl font-black text-[#7edb44] tracking-tighter">
              $750K–$1.6M
            </div>
            <div className="absolute -bottom-2 right-0 bg-[#8ae4d9] h-2 w-full opacity-50"></div>
          </div>
          <p className="text-sm md:text-base italic text-[#8ae4d9] mt-4 opacity-90 max-w-lg mx-auto leading-relaxed">
            Annualized impact. "Compounds every quarter when execution remains unguided."
          </p>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-16 font-medium max-w-3xl mx-auto leading-relaxed reveal" style={{ transitionDelay: '300ms' }}>
          That's the hidden drag of operating without a system. Not from bad strategy. 
          From execution friction that compounds daily.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {opportunityCosts.map((item, i) => (
            <div 
              key={i} 
              className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-[#7edb44]/50 transition-colors reveal"
              style={{ transitionDelay: `${i * 100 + 400}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#7edb44]/20 flex items-center justify-center text-[#7edb44] font-black group-hover:scale-110 transition-transform">
                →
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#7edb44]">{item.label}</h4>
                <p className="text-gray-300 leading-relaxed mb-3">{item.desc}</p>
                {item.impact && (
                  <p className="text-xs font-medium text-[#8ae4d9] border-t border-white/10 pt-3">
                    {item.impact}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md reveal">
           <p className="text-2xl md:text-3xl font-bold italic text-white leading-relaxed">
             "Every cycle you delay is a cycle your team runs harder but moves slower."
           </p>
        </div>
      </div>
    </section>
  );
};

export default OpportunityCost;