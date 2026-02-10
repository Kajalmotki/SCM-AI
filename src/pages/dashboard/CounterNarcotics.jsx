import React, { useState } from 'react';
import './DashboardPanels.css';

const companiesData = [
    // Row 1 — alert (orange diamond)
    [
        { name: 'Harrell Chemical C...', icon: 'alert' },
        { name: 'Daliner Technology...', icon: 'alert' },
        { name: 'Quarry Computing T...', icon: 'alert' },
        { name: 'Kloss Manufacturing...', icon: 'alert' },
        { name: 'Swartz Global LTD...', icon: 'alert' },
        { name: 'Teeriq Chemicals G...', icon: 'alert' },
        { name: 'Limited Iron Regis...', icon: 'alert' },
    ],
    // Row 2 — building (blue)
    [
        { name: 'T.K.Y. Consumer Pr...', icon: 'building' },
        { name: 'Pier 7 Manufacturing...', icon: 'building' },
        { name: 'America Asset Clean...', icon: 'building' },
        { name: 'Day Cruz Chemical...', icon: 'building' },
        { name: 'Hawking & Bolts LTD', icon: 'building' },
        { name: 'KEY CHEMICAL USA', icon: 'shield' },
        { name: 'Hoskins ZSE Services', icon: 'building' },
    ],
    // Row 3 — mixed
    [
        { name: 'Valley Bay Small Bt...', icon: 'shield' },
        { name: 'Arnavelo LLC', icon: 'building' },
        { name: 'Star Tire Conduc...', icon: 'building' },
        { name: 'Smith & Earns CO LTD', icon: 'building' },
        { name: 'Foley Fabrication GG', icon: 'building' },
        { name: 'Bom Electronics Co...', icon: 'shield' },
        { name: 'NiKi Internet Mall S...', icon: 'building' },
    ],
    // Row 4
    [
        { name: 'Empire Street Elect...', icon: 'shield' },
        { name: 'Harvest Trading...', icon: 'building' },
        { name: 'CHEM-SIL LLC', icon: 'building' },
        { name: 'Bear Operations C...', icon: 'building' },
        { name: 'Robin Chemicals', icon: 'alert' },
        { name: 'GoldSales Holding G...', icon: 'shield' },
        { name: 'Lantern Guard Che...', icon: 'building' },
    ],
    // Row 5
    [
        { name: 'CAMRON Capital TG', icon: 'building' },
        { name: 'Shanghai Companie...', icon: 'building' },
        { name: 'Center Chemical', icon: 'building' },
        { name: 'Cornwalcess LLC', icon: 'alert' },
        { name: 'Price Jewel nd LTD', icon: 'shield' },
        { name: 'NOR Hills Chemical', icon: 'building' },
        { name: 'Salford Finances', icon: 'building' },
    ],
    // Row 6
    [
        { name: 'Pacific Porter Regi...', icon: 'building' },
        { name: 'Newport Roll Mass', icon: 'building' },
        { name: 'SN n King CO LTD', icon: 'alert' },
        { name: 'United Material Co Cl...', icon: 'building' },
        { name: 'Chasing Regional T...', icon: 'building' },
        { name: 'LAMBER LLC', icon: 'building' },
        { name: 'Global Co Chemical...', icon: 'building' },
    ],
];

const exposedCompany = { name: 'OSD McCarthy LTD', icon: 'alert' };

const CounterNarcotics = () => {
    const [expandedSections, setExpandedSections] = useState({
        hsCodes: false,
        companies: false,
        exposures: false,
        countries: true,
    });

    const toggleSection = (key) => {
        setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const getNodeIcon = (type) => {
        switch (type) {
            case 'alert':
                return (
                    <svg className="cn-node-svg alert" viewBox="0 0 24 24" width="28" height="28">
                        <path d="M12 2L22 20H2L12 2Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
                        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">!</text>
                    </svg>
                );
            case 'shield':
                return (
                    <svg className="cn-node-svg shield" viewBox="0 0 24 24" width="28" height="28">
                        <path d="M12 2L4 6V12C4 16.42 7.4 20.56 12 22C16.6 20.56 20 16.42 20 12V6L12 2Z" fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
                        <text x="12" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">✓</text>
                    </svg>
                );
            default:
                return (
                    <svg className="cn-node-svg building" viewBox="0 0 24 24" width="28" height="28">
                        <rect x="4" y="4" width="16" height="16" rx="2" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
                        <rect x="7" y="7" width="4" height="4" rx="0.5" fill="white" fillOpacity="0.6" />
                        <rect x="13" y="7" width="4" height="4" rx="0.5" fill="white" fillOpacity="0.6" />
                        <rect x="7" y="13" width="4" height="4" rx="0.5" fill="white" fillOpacity="0.6" />
                        <rect x="13" y="13" width="4" height="4" rx="0.5" fill="white" fillOpacity="0.6" />
                    </svg>
                );
        }
    };

    return (
        <div className="cn-layout">
            {/* Left Summary Panel */}
            <div className="cn-summary-panel">
                <div className="cn-summary-header">
                    <span className="cn-sparkle">✦</span>
                    <h3>Summary of Exploration</h3>
                    <button className="cn-expand-btn">⛶</button>
                </div>

                <div className="cn-summary-stats">
                    <div className="cn-stat">
                        <div className="cn-stat-value">49</div>
                        <div className="cn-stat-label">Companies</div>
                    </div>
                    <div className="cn-stat">
                        <div className="cn-stat-value">710</div>
                        <div className="cn-stat-label">Transactions</div>
                    </div>
                    <div className="cn-stat">
                        <div className="cn-stat-value red">17</div>
                        <div className="cn-stat-label">Exposed Companies</div>
                    </div>
                </div>

                {/* Accordion Sections */}
                <div className="cn-accordion">
                    <button className="cn-accordion-btn" onClick={() => toggleSection('hsCodes')}>
                        <span className="cn-acc-arrow">{expandedSections.hsCodes ? '▾' : '▸'}</span>
                        Top 5 HS Codes by Transaction Count
                    </button>
                    {expandedSections.hsCodes && (
                        <div className="cn-acc-content">
                            <div className="cn-bar-list">
                                {[
                                    { code: '2933.39', count: 142 },
                                    { code: '2934.20', count: 118 },
                                    { code: '2922.19', count: 96 },
                                    { code: '2903.89', count: 84 },
                                    { code: '2932.99', count: 71 },
                                ].map((item, i) => (
                                    <div className="cn-bar-item" key={i}>
                                        <span className="cn-bar-code">{item.code}</span>
                                        <div className="cn-bar-track">
                                            <div className="cn-bar-fill" style={{ width: `${(item.count / 142) * 100}%` }}></div>
                                        </div>
                                        <span className="cn-bar-count">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <button className="cn-accordion-btn" onClick={() => toggleSection('companies')}>
                        <span className="cn-acc-arrow">{expandedSections.companies ? '▾' : '▸'}</span>
                        Top 10 Companies by Transaction Count
                    </button>
                    {expandedSections.companies && (
                        <div className="cn-acc-content">
                            <div className="cn-bar-list">
                                {[
                                    { name: 'OSD McCarthy LTD', count: 89 },
                                    { name: 'Harrell Chemical', count: 76 },
                                    { name: 'Quarry Computing', count: 64 },
                                    { name: 'Robin Chemicals', count: 58 },
                                    { name: 'CHEM-SIL LLC', count: 52 },
                                ].map((item, i) => (
                                    <div className="cn-bar-item" key={i}>
                                        <span className="cn-bar-code">{item.name}</span>
                                        <div className="cn-bar-track">
                                            <div className="cn-bar-fill" style={{ width: `${(item.count / 89) * 100}%` }}></div>
                                        </div>
                                        <span className="cn-bar-count">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <button className="cn-accordion-btn" onClick={() => toggleSection('exposures')}>
                        <span className="cn-acc-arrow">{expandedSections.exposures ? '▾' : '▸'}</span>
                        Top 5 Exposures by Type
                    </button>
                    {expandedSections.exposures && (
                        <div className="cn-acc-content">
                            <div className="cn-bar-list">
                                {[
                                    { type: 'Precursor Chemical', count: 12 },
                                    { type: 'Suspicious Pattern', count: 8 },
                                    { type: 'Shell Company', count: 5 },
                                    { type: 'High-Risk Route', count: 4 },
                                    { type: 'Sanctioned Entity', count: 3 },
                                ].map((item, i) => (
                                    <div className="cn-bar-item" key={i}>
                                        <span className="cn-bar-code">{item.type}</span>
                                        <div className="cn-bar-track">
                                            <div className="cn-bar-fill red" style={{ width: `${(item.count / 12) * 100}%` }}></div>
                                        </div>
                                        <span className="cn-bar-count">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <button className="cn-accordion-btn" onClick={() => toggleSection('countries')}>
                        <span className="cn-acc-arrow">{expandedSections.countries ? '▾' : '▸'}</span>
                        Top Countries by Transaction Count
                    </button>
                    {expandedSections.countries && (
                        <div className="cn-acc-content">
                            <div className="cn-country-chart">
                                <div className="cn-chart-legend">
                                    <span className="cn-chart-side">Sending</span>
                                    <span className="cn-chart-side">Receiving</span>
                                </div>
                                <div className="cn-sankey">
                                    {[
                                        { name: 'China', left: 35, right: 15, color: '#8b5cf6' },
                                        { name: 'Mexico', left: 25, right: 20, color: '#3b82f6' },
                                        { name: 'United …', left: 15, right: 30, color: '#22c55e' },
                                        { name: 'Brazil', left: 12, right: 18, color: '#f59e0b' },
                                        { name: 'India', left: 8, right: 10, color: '#ef4444' },
                                        { name: 'Others', left: 5, right: 7, color: '#94a3b8' },
                                    ].map((c, i) => (
                                        <div className="cn-sankey-row" key={i}>
                                            <div className="cn-sankey-bar left" style={{ width: `${c.left * 2.5}px`, background: c.color }}></div>
                                            <span className="cn-sankey-label">{c.name}</span>
                                            <div className="cn-sankey-bar right" style={{ width: `${c.right * 2.5}px`, background: c.color, opacity: 0.6 }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Network Graph */}
            <div className="cn-graph-panel">
                {/* Direct Exposure Callout */}
                <div className="cn-exposure-callout">
                    <div className="cn-exposed-node">
                        {getNodeIcon('alert')}
                        <span className="cn-exposed-name">{exposedCompany.name}</span>
                    </div>
                    <div className="cn-callout-badge">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ef4444" strokeWidth="2">
                            <path d="M12 2L22 20H2L12 2Z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <circle cx="12" cy="16" r="0.5" fill="#ef4444" />
                        </svg>
                        <span>Direct Exposure</span>
                    </div>
                </div>

                {/* Network Grid */}
                <div className="cn-network-grid">
                    {companiesData.map((row, ri) => (
                        <div className="cn-network-row" key={ri}>
                            {row.map((company, ci) => (
                                <div className="cn-network-node" key={ci}>
                                    {getNodeIcon(company.icon)}
                                    <span className="cn-node-name">{company.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Connection Lines (decorative) */}
                <svg className="cn-connections" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', opacity: 0.15 }}>
                    <line x1="15%" y1="10%" x2="30%" y2="25%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="30%" y1="25%" x2="50%" y2="15%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="50%" y1="15%" x2="70%" y2="30%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="25%" y1="35%" x2="45%" y2="40%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="45%" y1="40%" x2="65%" y2="35%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="35%" y1="55%" x2="55%" y2="60%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="55%" y1="60%" x2="75%" y2="50%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="20%" y1="70%" x2="40%" y2="75%" stroke="#94a3b8" strokeWidth="1" />
                    <line x1="60%" y1="70%" x2="80%" y2="65%" stroke="#94a3b8" strokeWidth="1" />
                </svg>
            </div>
        </div>
    );
};

export default CounterNarcotics;
