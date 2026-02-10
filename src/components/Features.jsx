import React from 'react';
import './Features.css';

const features = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="14" cy="14" r="12" />
                <path d="M14 2C8 2 4 8 4 14" />
                <path d="M14 2C20 2 24 8 24 14" />
                <path d="M2 14h24" />
                <path d="M14 2v24" />
            </svg>
        ),
        title: 'Real-Time Global Tracking',
        description: 'Track every shipment across every tier — mines, factories, ports, warehouses — on an interactive 3D globe with sub-second updates.',
        color: '#0080ff',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 20L10 14L14 18L24 8" />
                <path d="M18 8H24V14" />
                <rect x="2" y="4" width="24" height="20" rx="2" />
            </svg>
        ),
        title: 'Predictive Analytics',
        description: 'ML models predict delays, demand shifts, and disruptions days before they happen. Weather, strikes, port congestion — all modeled.',
        color: '#00d4ff',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 4L24 10V18L14 24L4 18V10L14 4Z" />
                <path d="M14 14L24 10" />
                <path d="M14 14V24" />
                <path d="M14 14L4 10" />
            </svg>
        ),
        title: 'Risk Scoring Engine',
        description: 'Every supplier, route, and node gets a dynamic risk score. Geopolitical, financial, compliance, ESG — computed continuously.',
        color: '#ff3b5c',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="14" cy="14" r="10" />
                <path d="M14 8V14L18 16" />
                <path d="M8 4L4 2" />
                <path d="M20 4L24 2" />
            </svg>
        ),
        title: 'Carbon Footprint Tracking',
        description: 'Calculate and optimize carbon impact for every route. Heatmaps visualize emissions. ESG reports generated automatically.',
        color: '#00e68a',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="4" width="8" height="8" rx="1" />
                <rect x="16" y="4" width="8" height="8" rx="1" />
                <rect x="4" y="16" width="8" height="8" rx="1" />
                <rect x="16" y="16" width="8" height="8" rx="1" />
                <path d="M12 8H16" />
                <path d="M12 20H16" />
                <path d="M8 12V16" />
                <path d="M20 12V16" />
            </svg>
        ),
        title: 'Blockchain Passports',
        description: 'Every product gets a blockchain-verified digital passport. Provenance, certifications, and custody chain — immutably recorded.',
        color: '#a855f7',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Autonomous Agents',
        description: 'AI bots that proactively reroute shipments, source alternatives, negotiate rates, and issue alerts — 24/7, zero human delay.',
        color: '#ffb020',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 14C20 17.3 17.3 20 14 20C10.7 20 8 17.3 8 14" />
                <path d="M14 4V8" />
                <circle cx="14" cy="14" r="2" />
                <path d="M14 20V24" />
                <circle cx="14" cy="14" r="11" />
            </svg>
        ),
        title: 'Tariff Simulation',
        description: 'Model tariff scenarios in real time. What-if analysis for trade policy changes, duty calculations, and landed cost optimization.',
        color: '#0080ff',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 14L4 4L14 7" />
                <path d="M21 14L24 24L14 21" />
                <circle cx="14" cy="14" r="4" />
                <circle cx="14" cy="14" r="11" />
            </svg>
        ),
        title: 'Satellite Intelligence',
        description: 'Ingest Planet Labs optical and Iceye SAR imagery. Monitor port activity, factory utilization, and inventory levels from orbit.',
        color: '#00d4ff',
    },
];

const Features = () => {
    return (
        <section className="section features-section" id="platform">
            <div className="container">
                <div className="features-header animate-on-scroll">
                    <div className="section-label">
                        <span className="dot"></span>
                        Platform Capabilities
                    </div>
                    <h2 className="section-title">
                        Enterprise-Grade <span className="gradient-text">Intelligence</span>
                    </h2>
                    <p className="section-subtitle">
                        RevoGlobal combines satellite imagery, AI graph databases, blockchain verification,
                        and autonomous agents into one unified platform.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feat, i) => (
                        <div key={i} className={`feature-card glass-card animate-on-scroll delay-${(i % 5) + 1}`}>
                            <div
                                className="feature-icon"
                                style={{
                                    background: `${feat.color}15`,
                                    borderColor: `${feat.color}30`,
                                    color: feat.color,
                                }}
                            >
                                {feat.icon}
                            </div>
                            <h3 className="feature-title">{feat.title}</h3>
                            <p className="feature-desc">{feat.description}</p>
                            <div className="feature-glow" style={{ background: feat.color }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
