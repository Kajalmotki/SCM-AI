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
        title: 'Federated Connection',
        description: 'Connect your ERP and supplier data securely. Using Federated Learning, your proprietary data never leaves your firewall, but contributes to (and benefits from) the global knowledge network.',
        detail: 'Private • Secure • Federated',
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
        title: 'Map Your Value Chain',
        description: 'RevoGlobal automatically resolves entities and maps your multi-tier value chain. See beyond tier 1 suppliers to raw materials, identifying beneficial owners and hidden dependencies.',
        detail: 'N-Tier Visibility • Entity Resolution',
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
        title: 'AI Classification & Tax',
        description: 'Generative AI automatically classifies products with HS codes, calculates tariffs, and generates legal justifications. Minimize duties and ensure 100% trade compliance.',
        detail: 'HS Codes • Tariffs • Legal AI',
    },
    {
        num: '04',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M8 11l2 2 4-4" />
            </svg>
        ),
        title: 'Deep Compliance (UFLPA)',
        description: 'Screen every shipment against forced labor lists (UFLPA) and environmental regulations (CBAM). Trace products back to the mine or farm to prove ethical sourcing.',
        detail: 'Forced Labor • Carbon Border Tax',
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
        title: 'Living Map',
        description: 'Navigate a dynamic, real-time map of the global economy. Monitor port disruptions, geopolitical shifts, and supplier financial health in a single pane of glass.',
        detail: 'Real-Time • Global • Dynamic',
    },
    {
        num: '06',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: 'Resilient Action',
        description: 'Move from insight to action. Collaborate with suppliers, auto-generate compliance documents, and optimize sourcing strategies to build a resilient, ethical supply chain.',
        detail: 'Collaboration • Optimization',
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
                        A mid-size auto parts importer connects their ERP. Within minutes, RevoGlobal maps
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
