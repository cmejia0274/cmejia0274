import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100">
          <header className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl font-black text-[#003456] mb-4 uppercase tracking-tight">Terms of Service</h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Last updated January 21, 2025</p>
          </header>

          <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-8 font-medium">
            <section>
              <h2 className="text-2xl font-black text-[#003456] mb-4 uppercase tracking-tight">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Ikigai Edge LLC</strong> ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), concerning your access to and use of the <a href="https://ikigai-edge.com" className="text-[#003456] font-bold underline">ikigai-edge.com</a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p className="mt-4">
                By accessing the Site, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#003456] mb-4 uppercase tracking-tight">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site and the Altitude Operating System framework are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
              </p>
              <p className="mt-4">
                The Altitude Operating System architecture, logic, and methodology are protected by copyright and trademark laws and various other intellectual property rights. No part of the Site or Content may be copied, reproduced, aggregated, republished, or distributed for any commercial purpose whatsoever without our express prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#003456] mb-4 uppercase tracking-tight">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#003456] mb-4 uppercase tracking-tight">4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activity includes:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Systematically retrieving data or other content from the Site to create or compile a collection, database, or directory without written permission.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site or the Altitude framework.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#003456] mb-4 uppercase tracking-tight">5. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-[#003456] mb-4 uppercase tracking-tight">6. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of <strong>Florida, United States</strong>. Ikigai Edge LLC and yourself irrevocably consent that the courts of Florida shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section className="pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-black text-[#003456] mb-6 uppercase tracking-tight">Contact Us</h2>
              <p className="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
              <div className="p-8 bg-[#f8f9fa] rounded-3xl border border-gray-100">
                <p className="font-black text-[#003456] uppercase tracking-widest mb-2">Ikigai Edge LLC</p>
                <p>1150 Hillsboro Mile #907</p>
                <p>Hillsboro Beach, FL 33062</p>
                <p>United States</p>
                <p className="mt-4 font-bold text-[#003456]">consult@ikigai-edge.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;