import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
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
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
