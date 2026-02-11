import React from 'react';
import Hero from './Hero';
import PainSection from './PainSection';
import OpportunityCost from './OpportunityCost';
import WhoThisHelps from './WhoThisHelps';
import FrameworkSection from './FrameworkSection';
import EvolutionSection from './EvolutionSection';
import SelfAssessment from './SelfAssessment';
import CTASection from './CTASection';

const OverviewPage: React.FC = () => {
  return (
    <>
      <Hero />
      <PainSection />
      <OpportunityCost />
      <WhoThisHelps />
      <FrameworkSection />
      <EvolutionSection />
      <SelfAssessment />
      <CTASection />
    </>
  );
};

export default OverviewPage;