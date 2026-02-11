import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Integrations from './components/Integrations';
import AtlasAI from './components/AtlasAI';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Login from './pages/Login';
import News from './pages/News';
import About from './pages/About';
import Careers from './pages/Careers';
import ResourcesLanding from './pages/ResourcesLanding';
import SolutionLayout from './pages/templates/SolutionLayout';
import Dashboard from './pages/Dashboard';

function LandingPage() {
  // Scroll-triggered animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="vigil-app">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Architecture />
        <AtlasAI />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />

      {/* Dynamic Solutions Route */}
      <Route path="/solutions/:slug" element={<SolutionLayout />} />

      {/* About & Careers */}
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />

      {/* Resources Hub */}
      <Route path="/resources" element={<ResourcesLanding />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
