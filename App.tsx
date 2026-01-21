import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import OpportunityCost from './components/OpportunityCost';
import WhoThisHelps from './components/WhoThisHelps';
import FrameworkSection from './components/FrameworkSection';
import EvolutionSection from './components/EvolutionSection';
import SelfAssessment from './components/SelfAssessment';
import OurProductPage from './components/OurProduct'; 
import OrientationPage from './components/OrientationPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Header from './components/Header';
import ChatBot from './components/ChatBot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => (
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

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Subtle Scroll-Triggered Animations Setup
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once animated, we don't need to observe it anymore for a cleaner performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location]); // Re-run when navigation happens

  return (
    <div className="min-h-screen flex flex-col bg-[#fefefe]">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<OurProductPage />} />
          <Route path="/orientation" element={<OrientationPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;