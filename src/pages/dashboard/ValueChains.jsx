import React, { useState, useEffect } from 'react';
import './DashboardPanels.css';
import DataService from '../../services/dataService';
import DataInjection from './DataInjection';

const ValueChains = () => {
    const [aiSuggestions, setAiSuggestions] = useState(true);
    const [showOrgPanel, setShowOrgPanel] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Value Chains');
    const [nodes, setNodes] = useState(null); // Graph data
    const [suggestedOrgs, setSuggestedOrgs] = useState([]); // List data
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('network');

    const detailTabs = ['Overview', 'Value Chains', 'Passport', 'Country of Origin', 'FTA Programs', 'Documents'];

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                // Fetch graph + "AI Suggested" organizations
                const [graphData, orgsData] = await Promise.all([
                    DataService.getValueChain('Smartphone'),
                    DataService.searchSuppliers() // Empty query = get all/random
                ]);

                setNodes(graphData);
                setSuggestedOrgs(orgsData);
            } catch (error) {
                console.error("Failed to load value chain data", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    // Helper to refresh suppliers on "Search" (Simulated)
    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            const results = await DataService.searchSuppliers(e.target.value);
            setSuggestedOrgs(results);
        }
    };

    if (loading || !nodes) {
        return <div className="loading-state">Loading Value Chain Intelligence...</div>;
    }

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
                    <button
                        className={`vc-filter-btn ${viewMode === 'injection' ? 'active-mode' : ''}`}
                        onClick={() => setViewMode(viewMode === 'network' ? 'injection' : 'network')}
                        style={{
                            marginRight: '12px',
                            background: viewMode === 'injection' ? '#3b82f6' : 'rgba(255,255,255,0.05)',
                            color: viewMode === 'injection' ? '#fff' : 'inherit',
                            border: viewMode === 'injection' ? '1px solid #2563eb' : '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        {viewMode === 'network' ? '📤 Data Injection' : '🕸️ Network View'}
                    </button>
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

            {viewMode === 'injection' ? (
                <DataInjection />
            ) : (
                <>
                    {/* Value Chain Graph */}
                    <div className="vc-graph">
                        {/* Root node */}
                        <div className="vc-column vc-col-root">
                            <div className="vc-node root-node">
                                <div className="vc-node-id" style={{ background: nodes.root.color }}>{nodes.root.id}</div>
                                <h4 className="vc-node-name">{nodes.root.name}</h4>
                                <div className="vc-node-type">
                                    <span className="type-icon">🏢</span>
                                    <span>{nodes.root.type}</span>
                                </div>
                                <div className="vc-node-company">{nodes.root.company}</div>
                                <div className="vc-node-location">{nodes.root.location}</div>
                            </div>
                        </div>

                        {/* Connector lines */}
                        <div className="vc-connectors">
                            <div className="connector-line"></div>
                            <div className="connector-line"></div>
                        </div>

                        {/* Tier 1 */}
                        <div className="vc-column">
                            {nodes.tier1 && nodes.tier1.map((node, i) => (
                                <div className="vc-node" key={i}>
                                    <div className="vc-node-id" style={{ background: node.color || '#22c55e' }}>{node.id}</div>
                                    <h4 className="vc-node-name">{node.name}</h4>
                                    <div className="vc-node-type">
                                        <span className="type-icon type-blue">🏭</span>
                                        <span>{node.type}</span>
                                    </div>
                                    <div className="vc-node-company">{node.company}</div>
                                    <div className="vc-node-location">{node.location}</div>
                                    {node.aiSuggested > 0 && (
                                        <button className="ai-suggest-btn" onClick={() => setShowOrgPanel(true)}>
                                            ✦ {node.aiSuggested}+
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Connector lines (logic depends on node count, simplified here) */}
                        <div className="vc-connectors">
                            <div className="connector-line"></div>
                            <div className="connector-line"></div>
                            <div className="connector-line"></div>
                        </div>

                        {/* Tier 2 */}
                        <div className="vc-column">
                            {nodes.tier2 && nodes.tier2.map((node, i) => (
                                <div className="vc-node" key={i}>
                                    <div className="vc-node-id" style={{ background: node.color || '#3b82f6' }}>{node.id}</div>
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
                                    <span>🏢 Organizations <strong>{suggestedOrgs.length}</strong></span>
                                    <span>◆ Risk <strong>{suggestedOrgs.filter(o => o.risk?.isRisky).length}</strong></span>
                                </div>
                            </div>
                            <button className="explore-btn" onClick={() => setShowOrgPanel(!showOrgPanel)}>
                                {showOrgPanel ? 'Close Panel' : '✦ Explore'}
                            </button>
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
                                <input
                                    type="text"
                                    placeholder="Search (try 'Huawei', 'Cobalt')..."
                                    onKeyDown={handleSearch}
                                />
                                <button className="filter-chip">Filters</button>
                            </div>
                            <div className="org-grid">
                                {suggestedOrgs.map((org, i) => (
                                    <div className={`org-card ${org.selected ? 'selected' : ''} ${org.risk?.isRisky ? 'risk' : ''}`} key={i}>
                                        <h4 className="org-name">{org.name}</h4>
                                        <span className="org-country">{org.country}</span>
                                        <div className="org-meta">
                                            {org.transactions && <span className="org-transactions">👁 {org.transactions}</span>}
                                            {org.risk?.isRisky && (
                                                <div className="risk-tag">
                                                    <span className="org-risk-badge">◆ {org.risk.riskType || 'Risk'}</span>
                                                </div>
                                            )}
                                        </div>
                                        {org.risk?.isRisky && <div className="risk-details">{org.risk.details}</div>}
                                    </div>
                                ))}
                            </div>
                            <div className="org-pagination">
                                <span>Showing {suggestedOrgs.length} results</span>
                                <div className="pagination-controls">
                                    <button>⟨⟨</button>
                                    <button>⟨</button>
                                    <span>Page 1</span>
                                    <button>⟩</button>
                                    <button>⟩⟩</button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ValueChains;
