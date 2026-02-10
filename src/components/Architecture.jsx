import React from 'react';
import './Architecture.css';

const layers = [
    {
        label: 'Federated Data Network',
        sublabel: 'Private & Secure',
        sources: ['ERP Systems', 'Customs Data', 'Corporate Registries', 'Bill of Ladings', 'Sanctions Lists'],
        color: '#0080ff',
    },
    {
        label: 'Canonical Resolution',
        sublabel: 'Entity Matching',
        sources: ['Entity Deduplication', 'Address Standardization', 'Corporate Hierarchy', 'Beneficial Ownership', 'Product Classification'],
        color: '#00d4ff',
    },
    {
        label: 'Universal Knowledge Graph',
        sublabel: 'Living Map of Trade',
        sources: ['Multi-Tier Connections', 'Shipment Flows', 'Supplier Relationships', 'Risk Propagation', 'Value Chain Mapping'],
        color: '#a855f7',
    },
    {
        label: 'Inference Engine',
        sublabel: 'Predictive AI',
        sources: ['Forced Labor Risk (UFLPA)', 'Carbon Scoring (CBAM)', 'Tariff Engineering', 'Disruption Prediction', 'Network Resilience'],
        color: '#00e68a',
    },
    {
        label: 'Command Center',
        sublabel: 'Actionable Insights',
        sources: ['Compliance Audits', 'Sourcing Alternatives', 'Legal Justifications', 'Scenario Planning', 'Executive Dashboards'],
        color: '#ffb020',
    },
];

const securityFeatures = [
    { icon: '🔐', label: 'Federated Learning' },
    { icon: '🔒', label: 'Differential Privacy' },
    { icon: '🛡️', label: 'GDPR/CCPA Compliant' },
    { icon: '📜', label: 'SOC 2 Type II' },
    { icon: '🏛️', label: 'Data Sovereignty' },
    { icon: '🔑', label: 'Customer-Owned Graphs' },
];

const Architecture = () => {
    return (
        <section className="section arch-section" id="architecture">
            <div className="arch-bg-glow" />
            <div className="container">
                <div className="arch-header animate-on-scroll">
                    <div className="section-label">
                        <span className="dot"></span>
                        System Architecture
                    </div>
                    <h2 className="section-title">
                        <span className="gradient-text">Back-End Omniscience</span>
                    </h2>
                    <p className="section-subtitle">
                        Five layers of processing transform raw data from 50+ sources into actionable
                        intelligence — all in under 200 milliseconds.
                    </p>
                </div>

                {/* Architecture Flow */}
                <div className="arch-flow animate-on-scroll">
                    {layers.map((layer, i) => (
                        <React.Fragment key={i}>
                            <div className="arch-layer">
                                <div className="layer-header" style={{ borderColor: `${layer.color}40` }}>
                                    <div className="layer-indicator" style={{ background: layer.color }} />
                                    <div>
                                        <div className="layer-label">{layer.label}</div>
                                        <div className="layer-sublabel">{layer.sublabel}</div>
                                    </div>
                                </div>
                                <div className="layer-sources">
                                    {layer.sources.map((src, j) => (
                                        <span key={j} className="source-tag" style={{ borderColor: `${layer.color}25`, color: `${layer.color}` }}>
                                            {src}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {i < layers.length - 1 && (
                                <div className="arch-arrow">
                                    <svg width="24" height="40" viewBox="0 0 24 40">
                                        <path d="M12 0V32M12 32L6 26M12 32L18 26" stroke="rgba(0,128,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                        <circle cx="12" cy="36" r="3" fill="rgba(0,128,255,0.2)" stroke="rgba(0,128,255,0.4)" strokeWidth="1" />
                                    </svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Security Bar */}
                <div className="arch-security animate-on-scroll">
                    <div className="security-title">Enterprise Security</div>
                    <div className="security-features">
                        {securityFeatures.map((feat, i) => (
                            <div key={i} className="security-item">
                                <span className="security-icon">{feat.icon}</span>
                                <span className="security-label">{feat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
