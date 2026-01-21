import React from 'react';

const EvolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-block mb-4 h-1.5 w-12 bg-[#8ae4d9] rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-black text-[#003456] tracking-tight mb-6">
            Built to Evolve, Not Break
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-4xl mx-auto leading-relaxed">
            Altitude is a living executive operating system designed to strengthen as your business grows, not degrade as complexity increases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Modernity Narrative */}
          <div className="lg:col-span-7 space-y-12 reveal-left">
            <div>
              <h3 className="text-2xl font-black text-[#003456] mb-4 flex items-center gap-3">
                <span className="text-[#7edb44]">/</span> What Makes It Modern
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Altitude flexes with your organization adjusting workflows, fields, and views as priorities shift while keeping execution governed and coherent.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#f8f9fa] rounded-2xl border-l-4 border-[#7edb44]">
                  <p className="font-bold text-[#003456] text-sm mb-2 uppercase tracking-wide">Intentionality</p>
                  <p className="text-sm text-gray-600">Changes are designed and deliberate, never improvised.</p>
                </div>
                <div className="p-6 bg-[#f8f9fa] rounded-2xl border-l-4 border-[#8ae4d9]">
                  <p className="font-bold text-[#003456] text-sm mb-2 uppercase tracking-wide">Connectivity</p>
                  <p className="text-sm text-gray-600">Strategy and execution stay locked together at every scale.</p>
                </div>
                <div className="p-6 bg-[#f8f9fa] rounded-2xl border-l-4 border-[#003456]">
                  <p className="font-bold text-[#003456] text-sm mb-2 uppercase tracking-wide">Integrity</p>
                  <p className="text-sm text-gray-600">Signal strength is preserved even as headcount doubles.</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-[#003456] rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl reveal" style={{ transitionDelay: '300ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7edb44]/10 rounded-full blur-3xl"></div>
              <h4 className="text-xl font-bold text-[#7edb44] mb-4">The Operating Spine</h4>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-0">
                The system integrates cleanly with AI, automation, and your existing stack, becoming the operating spine rather than another disconnected app.
              </p>
            </div>
          </div>

          {/* Right Column: Foundation Block */}
          <div className="lg:col-span-5 reveal-right" style={{ transitionDelay: '200ms' }}>
            <div className="bg-[#f8f9fa] p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative">
              <div className="mb-10">
                <h3 className="text-2xl font-black text-[#003456] mb-4">Built on a Deliberate Foundation</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Altitude is built on Airtable’s enterprise-grade platform—chosen for its flexibility, governance controls, and extensibility.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Scale from early-stage to complex executive orgs",
                  "Maintain a single, immutable source of truth",
                  "Native support for AI agents, automation, and stack integration",
                  "Evolve without rebuilds or platform churn"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded bg-[#8ae4d9]/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-[#003456] rounded-full"></div>
                    </div>
                    <span className="text-[#003456] font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm italic text-gray-400 font-medium">
                  "This is not a tooling shortcut. It’s an architectural advantage."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-24 text-center reveal">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <div className="text-2xl font-black text-[#003456]">The system evolves.</div>
            <div className="hidden md:block w-12 h-px bg-gray-200"></div>
            <div className="text-2xl font-black text-[#7edb44]">The operating logic holds.</div>
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto">
            <p className="text-gray-500 font-medium">
              Most operating systems collapse when organizations change. Altitude is designed to modernize with you, ensuring your accountability model and Rhythm of Business stay intact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; export default EvolutionSection;