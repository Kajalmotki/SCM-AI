import React from 'react';
import './HowItWorks.css';

const steps = [
    {
        num: '01',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                <path d="M12 11h4l-4 4V11z" />
                <rect x="6" y="13" width="12" height="8" rx="1" />
            </svg>
        ),
        title: 'Connect & Onboard',
        description: 'Upload your supplier list or connect ERP via API. VIGIL ingests your internal data alongside 50+ external sources — satellites, customs, carriers, weather.',
        detail: 'CSV • SAP • Oracle • REST API',
    },
    {
        num: '02',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <circle cx="5" cy="6" r="2" />
                <circle cx="19" cy="6" r="2" />
                <circle cx="5" cy="18" r="2" />
                <circle cx="19" cy="18" r="2" />
                <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
            </svg>
        ),
        title: 'Build Supply Graph',
        description: 'VIGIL spins up your private graph database mapping every tier: raw materials → components → assembly → distribution → last mile.',
        detail: 'Neo4j • Multi-Tier • Real-Time',
    },
    {
        num: '03',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'AI Risk Scan',
        description: 'Machine learning models scan in real time: port congestion, tariff hikes, forced labor flags, weather disruptions, geopolitical risks. Instant scoring.',
        detail: 'ML Models • NLP • Anomaly Detection',
    },
    {
        num: '04',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Autonomous Agents',
        description: 'AI agents proactively suggest reroutes, source alternative suppliers, and even auto-negotiate with brokers — saving time and money automatically.',
        detail: 'Auto-Reroute • Sourcing • Negotiation',
    },
    {
        num: '05',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        title: 'Dashboard Live',
        description: 'Clean, zero-latency command center. Interactive 3D maps, risk heatmaps, carbon footprints, blockchain-verified passports — everything traceable.',
        detail: 'Real-Time • Zero Latency • On-Chain',
    },
    {
        num: '06',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: 'Continuous Intelligence',
        description: 'Get alerts via Slack, email, or app. Monthly savings reports track ROI. Your data stays encrypted — VIGIL never sells it. You own your graph.',
        detail: 'Slack • Email • Encrypted • GDPR',
    },
];

const HowItWorks = () => {
    return (
        <section className="section hiw-section" id="how-it-works">
            <div className="bg-grid" />
            <div className="container">
                <div className="hiw-header animate-on-scroll">
                    <div className="section-label">
                        <span className="dot"></span>
                        Customer Journey
                    </div>
                    <h2 className="section-title">
                        From <span className="gradient-text">Sign-Up</span> to{' '}
                        <span className="gradient-text">Savings</span> — In Minutes
                    </h2>
                    <p className="section-subtitle">
                        A mid-size auto parts importer connects their ERP. Within minutes, VIGIL maps
                        their entire multi-tier supply chain, identifies risks, and starts saving money.
                    </p>
                </div>

                <div className="hiw-timeline">
                    <div className="timeline-line" />
                    {steps.map((step, i) => (
                        <div key={step.num} className={`hiw-step animate-on-scroll delay-${i % 6}`}>
                            <div className="step-connector">
                                <div className="step-num">{step.num}</div>
                                <div className="step-dot" />
                            </div>
                            <div className="step-card glass-card">
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                                <div className="step-detail">{step.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
