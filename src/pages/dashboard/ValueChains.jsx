import React, { useState } from 'react';
import './DashboardPanels.css';

const valueChainNodes = {
    root: {
        id: '620342',
        name: 'Smartphone',
        type: 'Technology Company',
        company: 'Volta Devices, Inc.',
        location: 'New York, USA',
        color: '#8b5cf6',
    },
    tier1: [
        {
            id: '860622',
            name: 'OLED Displays',
            type: 'Display Production',
            company: 'Lumion Display',
            location: 'United States',
            color: '#22c55e',
        },
        {
            id: '520942',
            name: 'Central Processing Units',
            type: 'SoC Processors',
            company: 'Nexus Silicon',
            location: 'Taiwan',
            color: '#22c55e',
            aiSuggested: 45,
        },
    ],
    tier2: [
        {
            id: '520100',
            name: 'Silicon Wafer Substrates',
            type: 'Raw Materials',
            company: 'Global WaferPro',
            location: 'Japan',
            color: '#3b82f6',
        },
        {
            id: '523305',
            name: 'Linear Actuator Motors',
            type: 'Raw Materials',
            company: 'HapticSense Motors',
            location: 'Vietnam',
            color: '#3b82f6',
        },
        {
            id: '320415',
            name: 'Advanced Chip Assembly',
            type: 'OSAT',
            company: 'SynTest Dynamics',
            location: 'China',
            color: '#f59e0b',
        },
    ],
};

const suggestedOrgs = [
    { name: 'Global WaferPro', country: 'Japan', transactions: '8K', risk: false, selected: true },
    { name: 'SunTest Dynamics', country: 'China', transactions: null, risk: true, selected: true },
    { name: 'Crystal Glassworks', country: 'United States', transactions: '6K', risk: false, selected: false },
    { name: 'UltraCap Components', country: 'South Korea', transactions: '3.1K', risk: false, selected: false },
    { name: 'PowerCell Separators', country: 'Japan', transactions: '2.8K', risk: false, selected: false },
    { name: 'Graphite Source Int.', country: 'China', transactions: '2.3K', risk: false, selected: false },
    { name: 'HapticSense Motors', country: 'Vietnam', transactions: '2.3K', risk: false, selected: false },
    { name: 'Polymer Shell Molding', country: 'Mexico', transactions: '1.8K', risk: false, selected: false },
    { name: 'MicroLens Fab', country: 'China', transactions: '1.4K', risk: false, selected: false },
    { name: 'Cobalt Refining Co.', country: 'DR Congo', transactions: '1.4K', risk: false, selected: false },
    { name: 'SecureComm RF', country: 'United States', transactions: '1.4K', risk: false, selected: false },
    { name: 'Tantalum Ore Miners', country: 'Australia', transactions: '1.4K', risk: false, selected: false },
];

const ValueChains = () => {
    const [aiSuggestions, setAiSuggestions] = useState(true);
    const [showOrgPanel, setShowOrgPanel] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Value Chains');
    const detailTabs = ['Overview', 'Value Chains', 'Passport', 'Country of Origin', 'FTA Programs', 'Documents'];

    return (
        <div className="valuechains-view">
            {/* Top header */}
            <div className="detail-topbar">
                <button className="back-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <span className="detail-product-icon">📱</span>
                <h2 className="detail-product-name">Smartphone</h2>
            </div>

            {/* Tabs */}
            <div className="detail-tabs">
                {detailTabs.map(tab => (
                    <button
                        key={tab}
                        className={`detail-tab ${selectedTab === tab ? 'active' : ''}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab === 'Value Chains' && '🔗 '}{tab}
                    </button>
                ))}
            </div>

            {/* AI Suggestions toggle */}
            <div className="ai-toggle-bar">
                <div className="vc-actions">
                    <button className="vc-filter-btn">🔍 Search</button>
                    <button className="vc-filter-btn">⚡ Filters</button>
                </div>
                <label className="ai-toggle">
                    <span className="ai-toggle-icon">✦</span>
                    <span>Heimdall AI Suggestions</span>
                    <div className={`toggle-switch ${aiSuggestions ? 'on' : ''}`} onClick={() => setAiSuggestions(!aiSuggestions)}>
                        <div className="toggle-knob"></div>
                    </div>
                </label>
            </div>

            {/* Value Chain Graph */}
            <div className="vc-graph">
                {/* Root node */}
                <div className="vc-column vc-col-root">
                    <div className="vc-node root-node">
                        <div className="vc-node-id" style={{ background: valueChainNodes.root.color }}>{valueChainNodes.root.id}</div>
                        <h4 className="vc-node-name">{valueChainNodes.root.name}</h4>
                        <div className="vc-node-type">
                            <span className="type-icon">🏢</span>
                            <span>{valueChainNodes.root.type}</span>
                        </div>
                        <div className="vc-node-company">{valueChainNodes.root.company}</div>
                        <div className="vc-node-location">{valueChainNodes.root.location}</div>
                    </div>
                </div>

                {/* Connector lines */}
                <div className="vc-connectors">
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                </div>

                {/* Tier 1 */}
                <div className="vc-column">
                    {valueChainNodes.tier1.map((node, i) => (
                        <div className="vc-node" key={i}>
                            <div className="vc-node-id" style={{ background: node.color }}>{node.id}</div>
                            <h4 className="vc-node-name">{node.name}</h4>
                            <div className="vc-node-type">
                                <span className="type-icon type-blue">🏭</span>
                                <span>{node.type}</span>
                            </div>
                            <div className="vc-node-company">{node.company}</div>
                            <div className="vc-node-location">{node.location}</div>
                            {node.aiSuggested && (
                                <button className="ai-suggest-btn" onClick={() => setShowOrgPanel(!showOrgPanel)}>
                                    ✦ {node.aiSuggested}+
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Connector lines */}
                <div className="vc-connectors">
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                    <div className="connector-line"></div>
                </div>

                {/* Tier 2 */}
                <div className="vc-column">
                    {valueChainNodes.tier2.map((node, i) => (
                        <div className="vc-node" key={i}>
                            <div className="vc-node-id" style={{ background: node.color }}>{node.id}</div>
                            <h4 className="vc-node-name">{node.name}</h4>
                            <div className="vc-node-type">
                                <span className="type-icon type-orange">🏭</span>
                                <span>{node.type}</span>
                            </div>
                            <div className="vc-node-company">{node.company}</div>
                            <div className="vc-node-location">{node.location}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Suggested Organizations section */}
            {aiSuggestions && (
                <div className="ai-suggested-section">
                    <div className="ai-suggested-header">
                        <h3><span className="sparkle">✦</span> AI Suggested Organizations</h3>
                        <div className="ai-suggested-stats">
                            <span>🏢 Organizations <strong>50</strong></span>
                            <span>◆ Risk <strong>20</strong></span>
                        </div>
                    </div>
                    <button className="explore-btn" onClick={() => setShowOrgPanel(!showOrgPanel)}>✦ Explore</button>
                </div>
            )}

            {/* Organization Directory Panel */}
            {showOrgPanel && (
                <div className="org-directory panel-card">
                    <div className="org-dir-header">
                        <h3><span className="sparkle">✦</span> AI Suggested Organizations Detected</h3>
                        <div className="org-dir-actions">
                            <button className="action-btn">View Transactions</button>
                            <button className="action-btn primary">Add To Catalog 📦</button>
                        </div>
                    </div>
                    <div className="org-search-bar">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <input type="text" placeholder="Search" />
                        <button className="filter-chip">Filters</button>
                    </div>
                    <div className="org-grid">
                        {suggestedOrgs.map((org, i) => (
                            <div className={`org-card ${org.selected ? 'selected' : ''} ${org.risk ? 'risk' : ''}`} key={i}>
                                <h4 className="org-name">{org.name}</h4>
                                <span className="org-country">{org.country}</span>
                                <div className="org-meta">
                                    {org.transactions && <span className="org-transactions">👁 {org.transactions}</span>}
                                    {org.risk && <span className="org-risk-badge">◆ Risk</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="org-pagination">
                        <span>1 to 12 of 50</span>
                        <div className="pagination-controls">
                            <button>⟨⟨</button>
                            <button>⟨</button>
                            <span>Page 1 of 5</span>
                            <button>⟩</button>
                            <button>⟩⟩</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ValueChains;
