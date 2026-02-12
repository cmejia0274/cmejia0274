import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from './components/HomePage';
import OverviewPage from './components/OverviewPage';
import TheArchitecturePage from './components/TheArchitecture'; 
import OrientationPage from './components/OrientationPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';
import Header from './components/Header';
import ChatBot from './components/ChatBot';
import TheBlindSpot from './components/TheBlindSpot';
import ActivationPage from './components/ActivationPage';
import TheResetPage from './components/TheResetPage';
import SoloActivationAccess from './components/SoloActivationAccess';
import JointActivationAccess from './components/JointActivationAccess';
import TopBanner from './components/TopBanner';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const location = useLocation();
  const isAccessPage = location.pathname === '/access-solo' || location.pathname === '/access-joint';

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fefefe]">
      <ScrollToTop />
      <Header />
      {!isAccessPage && <TopBanner />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/architecture" element={<TheArchitecturePage />} />
          <Route path="/orientation" element={<OrientationPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/blind-spot" element={<TheBlindSpot />} />
          <Route path="/activation" element={<ActivationPage />} />
          <Route path="/reset" element={<TheResetPage />} />
          <Route path="/access-solo" element={<SoloActivationAccess />} />
          <Route path="/access-joint" element={<JointActivationAccess />} />
        </Routes>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;