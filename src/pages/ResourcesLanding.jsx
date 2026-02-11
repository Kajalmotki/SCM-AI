import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import './About.css'; // Reuse basic styles

const ResourcesLanding = () => {
    return (
        <div className="about-page">
            <Header />
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>VIGIL Academy & Insights</h1>
                    <p>Expert guides, deep-dive research, and tactical playbooks for modern supply chain leaders.</p>
                </div>
            </section>

            <section className="about-section">
                <div className="about-container">
                    <div className="grid-2">
                        <div className="resource-intro">
                            <span className="about-label">Knowledge Hub</span>
                            <h2>Master the new era of trade.</h2>
                            <p>From navigating the UFLPA to decarbonizing logistics, our resources are designed to help you stay ahead of the curve.</p>
                        </div>
                        <div className="resource-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                            <div style={{ background: '#161b22', padding: 24, borderRadius: 12, border: '1px solid #30363d' }}>
                                <h3 style={{ fontSize: '2rem', color: '#58a6ff' }}>50+</h3>
                                <p style={{ color: '#8b949e' }}>In-depth Guides</p>
                            </div>
                            <div style={{ background: '#161b22', padding: 24, borderRadius: 12, border: '1px solid #30363d' }}>
                                <h3 style={{ fontSize: '2rem', color: '#58a6ff' }}>10k</h3>
                                <p style={{ color: '#8b949e' }}>Academy Students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section dark-bg">
                <div className="about-container">
                    <span className="about-label">Featured Collections</span>
                    <div className="office-grid"> {/* Reusing grid */}
                        {['Supply Chain Resilience', 'ESG Compliance', 'Trade Finance', 'AI in Logistics'].map((topic, i) => (
                            <div key={i} className="office-card" style={{ cursor: 'pointer' }}>
                                <h3>{topic}</h3>
                                <p>View Collection &rarr;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
            <Footer />
        </div>
    );
};

export default ResourcesLanding;
