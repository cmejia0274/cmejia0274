import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from './CTASection';

const OurProductPage: React.FC = () => {
  const layers = [
    {
      title: "Layer 1: Strategic Direction",
      question: "Where are we going, and what won't we do?",
      desc: "This isn't your mission statement or OKRs. This is your True North — the strategic intent and guardrails that define what you're actually optimizing for, including what you'll deliberately ignore.",
      benefits: [
        "Strategic initiatives mapped to measurable milestones",
        "Clear constraints that prevent scope creep",
        "A shared language for what 'on strategy' actually means"
      ],
      color: "border-[#003456]",
      iconBg: "bg-[#003456]"
    },
    {
      title: "Layer 2: Priorities & Bets",
      question: "What are we betting on right now?",
      desc: "Most companies have 40 priorities. You need 3-5 active strategic bets with clear owners and binary health signals. This layer forces focus design, not wishful thinking.",
      benefits: [
        "Finite set of active initiatives (not a wishlist)",
        "Clear ownership and accountability",
        "High-level health tracking (On Track / At Risk)"
      ],
      color: "border-[#7edb44]",
      iconBg: "bg-[#7edb44]"
    },
    {
      title: "Layer 3: Execution Rhythm & Signals",
      question: "How do we know what's actually happening?",
      desc: "This layer has two lenses: Health (Is the system holding together?) and Visibility (Are we operating as designed?). One is for triage. The other is for evolution.",
      benefits: [
        "Cadence integrity monitoring (meetings, decisions, actions)",
        "Exception-based escalation (early warnings)",
        "Pattern analysis (time allocation, drift detection)"
      ],
      color: "border-[#8ae4d9]",
      iconBg: "bg-[#8ae4d9]"
    },
    {
      title: "Layer 4: Decisions & Consequences",
      question: "Who decides — and what actually changes?",
      desc: "Decisions without follow-through are just expensive conversations. This layer ensures every decision has an owner, linked actions, and completion evidence.",
      benefits: [
        "Decision log with clear ownership",
        "Automatic linkage from decision → action → outcome",
        "Accountability for what actually changed"
      ],
      color: "border-[#003456]",
      iconBg: "bg-[#003456]"
    }
  ];

  return (
    <div className="bg-[#fcfcfc]">
      {/* System Chart Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003456] mb-12 tracking-tight">
              The Executive Operating Architecture
            </h2>
            
            <div className="space-y-10 text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-black text-[#003456] border-l-4 border-[#7edb44] pl-6 md:pl-8 py-2 text-left">
                Altitude is designed as a closed-loop operating system. Each layer reinforces the next, so strategy becomes execution, execution produces signal, and decisions actually change behavior.
              </p>

              {/* Canva Video Embed */}
              <div className="my-12 relative group reveal">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#7edb44]/20 to-[#8ae4d9]/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white border border-gray-100 rounded-[2rem] shadow-2xl overflow-hidden aspect-video">
                  <iframe 
                    loading="lazy" 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.canva.com/design/DAG_Doqct0g/0N29BR0BJujYdMvc-picsA/watch?embed" 
                    allowFullScreen 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Altitude Operating System Video"
                  >
                  </iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs font-black text-[#003456]/40 uppercase tracking-[0.4em]">System Overview • Press Play</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                {/* Card 1: Rigid Foundation */}
                <div className="p-10 bg-[#003456] text-white rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#7edb44]"></span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#7edb44]">Governed Foundation</span>
                    </div>
                    <h3 className="text-2xl font-black mb-6 leading-tight">Rigid at the core to ensure integrity.</h3>
                    <ul className="space-y-4 mb-8">
                      {['Strategic Intent', 'Ownership', 'Cadence', 'Decision Logic'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-200">
                          <span className="text-[#7edb44] text-xl">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-gray-300 font-medium italic border-t border-white/10 pt-6">
                    Eliminates narrative drift by operating from a single source of truth.
                  </p>
                </div>

                {/* Card 2: Adaptive Surface */}
                <div className="p-10 bg-white rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7edb44]/10 rounded-full mb-6">
                      <span className="w-2 h-2 rounded-full bg-[#003456]"></span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#003456]">Adaptive Surface</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#003456] mb-6 leading-tight">Flexible at the edge to drive speed.</h3>
                    <ul className="space-y-4 mb-8">
                      {[
                        'Built-in AI assistance',
                        'Custom workflows and views',
                        'Automation that scales',
                        'Integrates with AI and your existing tools'
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-bold text-[#003456]/80">
                          <span className="text-[#7edb44] text-xl">+</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500 font-medium italic border-t border-gray-100 pt-6">
                    Allows teams to pivot execution locally while automatically updating the executive narrative in real-time.
                  </p>
                </div>
              </div>

              <p className="text-xl md:text-2xl font-black text-[#003456] pt-6 leading-tight">
                The result is an operating system that scales with complexity without losing integrity where flexibility never compromises clarity, and change never erodes accountability.
              </p>
            </div>
          </div>

          <div className="relative group mt-16">
            <div className="absolute -inset-4 bg-[#7edb44]/10 rounded-[3rem] blur-2xl transition-all duration-700 opacity-50 group-hover:opacity-100"></div>
            <div className="relative bg-white border border-gray-100 p-4 md:p-10 rounded-[3rem] shadow-2xl overflow-hidden">
              <img 
                src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/altitude-executive-operating-system-chart-tknUzjjOtH4Wxdxe.png" 
                alt="Altitude Executive Operating System Chart" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Layers */}
      <section id="layers" className="py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {layers.map((layer, i) => (
              <div key={i} className={`bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border-l-[12px] ${layer.color} flex flex-col md:flex-row gap-12 items-start`}>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-8 h-8 rounded-full ${layer.iconBg} flex-shrink-0`}></div>
                    <h3 className="text-3xl font-black text-[#003456]">{layer.title}</h3>
                  </div>
                  <p className="text-xl font-medium italic text-gray-500 mb-6">"{layer.question}"</p>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
                <div className="w-full md:w-60 flex-shrink-0 bg-[#f8f9fa] p-8 rounded-3xl">
                  <p className="font-bold text-[#003456] mb-4 uppercase tracking-widest text-xs">Deliverable:</p>
                  <ul className="space-y-4">
                    {layer.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm font-semibold text-gray-700">
                        <span className="text-[#7edb44] font-black">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="mt-12 bg-[#003456] text-white p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7edb44]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">The Executive Narrative</h3>
              <p className="text-xl md:text-2xl text-[#8ae4d9] font-bold mb-8 italic">Governed sensemaking, not reporting</p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Insightful, scheduled executive synthesis of all four layers into a coherent story of where the company is, where it's going, and what needs to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default OurProductPage;