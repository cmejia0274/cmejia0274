import React from 'react';

const SystemOverview: React.FC = () => {
  return (
    <section id="system" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#003456] mb-6">The Altitude Executive Operating System</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Not another dashboard. Not another process layer. A complete operating architecture that connects strategy to reality and closes the loop automatically.
          </p>
        </div>

        {/* Altitude Operating System Chart Visualization */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8ae4d9]/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative bg-white p-6 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl flex flex-col items-center">
            <img 
              src="https://assets.zyrosite.com/Awvrjo5GqDcGBa7y/altitude-executive-operating-system-chart-OUlJfLN0EWEDi1HW.png" 
              alt="Altitude Executive Operating System Chart" 
              className="max-w-full h-auto rounded-2xl shadow-sm"
            />
            
            <div className="mt-12 text-center">
              <div className="inline-block px-8 py-4 bg-[#f8f9fa] rounded-2xl border border-[#003456]/20">
                <span className="text-[#003456] font-bold">The Closing Loop:</span> Data flows up, decisions flow down, clarity flows everywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemOverview;