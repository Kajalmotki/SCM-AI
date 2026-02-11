import React, { useState } from 'react';
import './DashboardPanels.css';

/* ===== DATA ===== */
const suppliersByCountry = [
    { country: 'China', tier2: 9, tier3: 2 },
    { country: 'Vietnam', tier2: 8, tier3: 2 },
    { country: 'Hong Kong', tier2: 3, tier3: 7 },
    { country: 'Japan', tier2: 2, tier3: 2 },
    { country: 'Taiwan', tier2: 1, tier3: 8 },
    { country: 'Turkey', tier2: 2, tier3: 8 },
    { country: 'Sri Lanka', tier2: 6, tier3: 3 },
];

const suppliersByCategory = [
    { name: 'China Gold Group Co., Ltd', br: 2, cor: 1, exp: 1 },
    { name: 'Changzhou Tianhong Co., Ltd', br: 1, cor: 1, exp: 1 },
    { name: 'Xuzhou Tian Hong Times Co., Ltd.', br: 1, cor: 1, exp: 1 },
    { name: 'Twin Dragon Marketing, Inc.', br: 1, cor: 1, exp: 1 },
    { name: 'Texhong (Hong Kong) Holdings Limited', br: 1, cor: 1, exp: 1 },
    { name: 'Xuzhou Tianhong Yinfeng Co., Ltd', br: 1, cor: 1, exp: 1 },
    { name: 'Shanghai Hongrun Co., Ltd.', br: 1, cor: 1, exp: 1 },
];

const exposureSources = [
    { name: 'MicroLens Fab', status: 'Of Concern', exposures: 4, suppliers: 6, products: 3, type: 'Forced Labor', impact: 'Indirect', proximity: 3 },
    { name: 'Cobalt Refining Co.', status: 'Of Concern', exposures: 4, suppliers: 6, products: 2, type: 'Forced Labor', impact: 'Direct', proximity: 1 },
    { name: 'Graphite Source Int.Co.,', status: 'Of Concern', exposures: 4, suppliers: 6, products: 2, type: 'Forced Labor', impact: 'Indirect', proximity: 3 },
    { name: 'Quartz Metals MiningLtd.', status: 'Of Concern', exposures: 4, suppliers: 6, products: 2, type: 'Forced Labor', impact: 'Indirect', proximity: 6 },
    { name: 'HapticSense Motors', status: 'Of Concern', exposures: 4, suppliers: 6, products: 2, type: 'Forced Labor', impact: 'Indirect', proximity: 3 },
];

const ftaProducts = [
    { name: 'Smartphone', assignee: 'Maria Lopez', initials: 'ML', color: '#8b5cf6', ftaStatus: 'Undetermined', recommendation: 'Qualifies', shared: 'No', tariff: 'Qualifies' },
    { name: 'Mesh Pro', assignee: 'Frank Chen', initials: 'FC', color: '#f59e0b', ftaStatus: 'Undetermined', recommendation: 'Qualifies', shared: 'No', tariff: 'Does not' },
    { name: 'Slim Pad', assignee: '', initials: '', color: '', ftaStatus: '', recommendation: '', shared: 'No', tariff: 'Does not' },
    { name: 'Stylus Pro', assignee: 'Karen Lee', initials: 'KL', color: '#22c55e', ftaStatus: 'Undetermined', recommendation: 'Qualifies', shared: 'No', tariff: 'Does not' },
];

const cooProducts = [
    { product: 'Pulse Watch', assignee: 'Anya Sharma', initials: 'AS', color: '#22c55e', status: 'Complete', currentCOO: '🇹🇼 Taiwan', predictedCOO: '🇹🇼 Taiwan' },
    { product: 'Flow Earbuds', assignee: 'Ben Carter', initials: 'BC', color: '#3b82f6', status: 'Complete', currentCOO: '🇨🇦 Canada', predictedCOO: '🇨🇦 Canada' },
    { product: 'SoundSphere', assignee: 'Chloe Davies', initials: 'CD', color: '#8b5cf6', status: 'Complete', currentCOO: '🇲🇽 Mexico', predictedCOO: '🇲🇽 Mexico' },
    { product: 'Smartphone', assignee: 'Maria Lopez', initials: 'ML', color: '#8b5cf6', status: 'Needs review', currentCOO: '🇻🇳 Vietnam', predictedCOO: '🇺🇸 United States' },
    { product: 'Home Hub', assignee: 'Elena Petrova', initials: 'EP', color: '#22c55e', status: 'Complete', currentCOO: '🇰🇷 South Korea', predictedCOO: '🇰🇷 South Korea' },
    { product: 'Mesh Pro', assignee: 'Frank Chen', initials: 'FC', color: '#f59e0b', status: 'Complete', currentCOO: '🇨🇦 Canada', predictedCOO: '🇨🇦 Canada' },
    { product: 'Security Cam', assignee: 'Grace Kim', initials: 'GK', color: '#ef4444', status: 'Complete', currentCOO: '🇲🇽 Mexico', predictedCOO: '🇲🇽 Mexico' },
    { product: 'Slim Pad', assignee: 'Henry Miller', initials: 'HM', color: '#3b82f6', status: 'Complete', currentCOO: '🇩🇪 Germany', predictedCOO: '🇩🇪 Germany' },
    { product: 'Stylus Pro', assignee: 'Isabella Rossi', initials: 'IR', color: '#8b5cf6', status: 'Complete', currentCOO: '🇹🇭 Thailand', predictedCOO: '🇹🇭 Thailand' },
    { product: 'Power Brick', assignee: 'Jack Williams', initials: 'JW', color: '#f59e0b', status: 'Complete', currentCOO: '🇨🇦 Canada', predictedCOO: '🇨🇦 Canada' },
    { product: 'Mag Battery', assignee: 'Karen Lee', initials: 'KL', color: '#22c55e', status: 'Complete', currentCOO: '🇺🇸 United States', predictedCOO: '🇺🇸 United States' },
    { product: 'Snap Cam', assignee: 'Liam O\'Connell', initials: 'LO', color: '#3b82f6', status: 'Complete', currentCOO: '🇲🇽 Mexico', predictedCOO: '🇲🇽 Mexico' },
];

const dutiesProducts = [
    { name: 'SoundSphere', assignee: 'Chloe Davies', initials: 'CD', color: '#8b5cf6', dutyRate: '35.50%' },
    { name: 'Smartphone', assignee: 'Maria Lopez', initials: 'ML', color: '#8b5cf6', dutyRate: '38.33%' },
];

const section232Products = [
    { name: 'SoundSphere', material: 'Copper', hs: '8518.22', origin: '🇨🇱 Chile', contribution: '60.00%', duty: '25.00%', base: '27.60%', penalty: '27.60%', est: '21.83%' },
    { name: 'Smartphone', material: 'Aluminum', hs: '8517.12', origin: '🇬🇧 United Kingdom', contribution: '80.00%', duty: '65.00%', base: '37.80%', penalty: '102.80%', est: '23.67%' },
    { name: 'Home Hub', material: 'Copper', hs: '8517.62', origin: '🇨🇱 Chile', contribution: '60.00%', duty: '35.00%', base: '46.00%', penalty: '46.00%', est: '78.33%' },
    { name: 'Mesh Pro', material: 'Aluminum', hs: '8517.62', origin: '🇮🇳 India', contribution: '40.00%', duty: '20.00%', base: '74.60%', penalty: '49.60%', est: '28.00%' },
    { name: 'Security Cam', material: 'Steel', hs: '8525.8', origin: '🇯🇵 Japan', contribution: '40.00%', duty: '65.00%', base: '74.60%', penalty: '49.60%', est: '18.50%' },
];

const chatMessages = [
    { sender: 'Importer', initials: 'IA', color: '#3b82f6', text: 'Hi. could you confirm the percentage of steel in the product and the country of melt and pour?' },
    { sender: 'Supplier', initials: 'S', color: '#b45309', text: 'Sure. This product contains 60% steel. Please find the mill certificate attached.', attachment: '📎 Mill Certificate' },
    { sender: 'Importer', initials: 'IA', color: '#3b82f6', text: 'Got it, thanks so much!' },
];

const workspaceTabs = ['Objects', 'Passports', 'Requests', 'Exposures', 'Classification', 'Country of Origin', 'Duties', 'FTA', 'PGA', 'Section 232'];
const exposureSubTabs = ['Exposure Sources', 'Exposed Suppliers T1', 'Exposed Products', 'All Exposed Suppliers'];

/* ===== COMPONENT ===== */
const WorkspacesView = () => {
    const [activeWSTab, setActiveWSTab] = useState('Exposures');
    const [activeExpTab, setActiveExpTab] = useState('Exposure Sources');
    const [selectedRows, setSelectedRows] = useState([0, 1, 2]);
    const [showChatPanel, setShowChatPanel] = useState(false);
    const [showDutyDetail, setShowDutyDetail] = useState(false);

    const toggleRow = (idx) => {
        setSelectedRows(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    /* ===== Render Tab Content ===== */
    const renderTabContent = () => {
        switch (activeWSTab) {
            case 'Exposures':
                return renderExposures();
            case 'FTA':
                return renderFTA();
            case 'Country of Origin':
                return renderCOO();
            case 'Duties':
                return renderDuties();
            case 'Section 232':
                return renderSection232();
            default:
                return (
                    <div className="tab-placeholder">
                        <div className="placeholder-icon">📋</div>
                        <h3>{activeWSTab}</h3>
                        <p>Workspace {activeWSTab.toLowerCase()} view.</p>
                    </div>
                );
        }
    };

    /* ===== FTA Tab ===== */
    const renderFTA = () => (
        <>
            <div className="ws-metrics-top">
                {/* USMCA cards */}
                <div className="ws-stat-col">
                    <div className="ws-stat-card purple-border">
                        <span className="ws-stat-label">Eligible for USMCA</span>
                        <span className="ws-stat-big">114</span>
                        <span className="ws-stat-sparkle">✦</span>
                    </div>
                    <div className="ws-stat-card purple-border">
                        <span className="ws-stat-label">Qualified for USMCA</span>
                        <span className="ws-stat-big">328</span>
                        <span className="ws-stat-sparkle">✦</span>
                    </div>
                </div>

                {/* USMCA Status donut */}
                <div className="ws-chart-card">
                    <h4>USMCA Status</h4>
                    <div className="ws-donut-wrap">
                        <div className="ws-donut" style={{ background: 'conic-gradient(#0ea5e9 0% 62%, #3b82f6 62% 78%, #e2e8f0 78% 100%)' }}>
                            <div className="ws-donut-hole"></div>
                        </div>
                        <div className="ws-donut-legend">
                            <span><span className="ws-dot" style={{ background: '#0ea5e9' }}></span> Qualifies</span>
                            <span><span className="ws-dot" style={{ background: '#3b82f6' }}></span> Needs Review</span>
                            <span><span className="ws-dot" style={{ background: '#e2e8f0' }}></span> Does Not Qualify</span>
                        </div>
                    </div>
                </div>

                {/* Tariff Shift Status donut */}
                <div className="ws-chart-card">
                    <h4>Tariff Shift Status</h4>
                    <div className="ws-donut-wrap">
                        <div className="ws-donut" style={{ background: 'conic-gradient(#b45309 0% 45%, #d97706 45% 70%, #fbbf24 70% 85%, #e2e8f0 85% 100%)' }}>
                            <div className="ws-donut-hole"></div>
                        </div>
                        <div className="ws-donut-legend">
                            <span><span className="ws-dot" style={{ background: '#b45309' }}></span> Qualifies</span>
                            <span><span className="ws-dot" style={{ background: '#d97706' }}></span> Does Not Qualify</span>
                            <span><span className="ws-dot" style={{ background: '#e2e8f0' }}></span> Unknown</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub-tabs */}
            <div className="expo-subtabs">
                {['All', 'Needs Review', 'Qualifies', 'Shared'].map((tab, idx) => (
                    <button key={tab} className={`expo-subtab ${idx === 0 ? 'active' : ''}`}>
                        {tab} {idx === 0 && <span className="subtab-count">6</span>}
                        {idx === 1 && <span className="subtab-count">1</span>}
                    </button>
                ))}
                <div className="expo-subtab-right">
                    <span className="products-count">22 products</span>
                    <button className="filter-chip">⚙ Filters</button>
                    <button className="filter-chip">Columns</button>
                    <button className="filter-chip">✦ Groups</button>
                    <button className="filter-chip">✦ Highlights</button>
                </div>
            </div>

            {/* FTA Product Table */}
            <div className="panel-card expo-table-card">
                <div className="table-scroll">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}></th>
                                <th>Product Name</th>
                                <th>Assignee</th>
                                <th>Current FTA Status</th>
                                <th>RevoGlobal Recommendation</th>
                                <th>Shared with CBP</th>
                                <th>Tariff Shift</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ftaProducts.map((p, i) => (
                                <tr key={i}>
                                    <td><input type="checkbox" className="row-checkbox" defaultChecked={i < 2} /></td>
                                    <td>
                                        <div className="src-name">
                                            <span className="expand-icon">▸</span>
                                            {p.name}
                                        </div>
                                    </td>
                                    <td>
                                        {p.assignee && (
                                            <div className="assignee-cell">
                                                <span className="avatar-sm" style={{ background: p.color }}>{p.initials}</span>
                                                <span>{p.assignee}</span>
                                            </div>
                                        )}
                                    </td>
                                    <td><span className="status-undetermined">{p.ftaStatus}</span></td>
                                    <td><span className="status-qualifies">{p.recommendation}</span></td>
                                    <td>{p.shared}</td>
                                    <td><span className={p.tariff === 'Qualifies' ? 'status-qualifies' : 'status-does-not'}>{p.tariff}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="selection-bar">
                    <span>4 of 11 selected</span>
                    <button className="selection-action">Clear Selection</button>
                    <button className="selection-action">📋 Submit to CBP</button>
                    <button className="selection-action">⋯</button>
                </div>
            </div>
        </>
    );

    /* ===== Country of Origin Tab ===== */
    const renderCOO = () => (
        <>
            <div className="expo-subtabs">
                {['All', 'Suggested', 'Needs Review', 'Needs Info', 'Originating'].map((tab, idx) => (
                    <button key={tab} className={`expo-subtab ${idx === 0 ? 'active' : ''}`}>
                        {tab} {idx === 0 && <span className="subtab-count">1</span>}
                        {idx === 1 && <span className="subtab-count">1</span>}
                        {idx === 2 && <span className="subtab-count">1</span>}
                    </button>
                ))}
                <div className="expo-subtab-right">
                    <span className="products-count">22 products</span>
                    <button className="filter-chip">⚙ Filters</button>
                    <button className="filter-chip">Columns</button>
                    <button className="filter-chip">✦ Groups</button>
                    <button className="filter-chip">✦ Highlights</button>
                </div>
            </div>

            <div className="panel-card">
                <div className="table-scroll">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th style={{ width: '30px' }}></th>
                                <th>Product</th>
                                <th>Assignee</th>
                                <th>Status</th>
                                <th>Current COO</th>
                                <th>Predicted COO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cooProducts.map((p, i) => (
                                <tr key={i}>
                                    <td><span className="expand-icon">+</span></td>
                                    <td className="product-name">{p.product}</td>
                                    <td>
                                        <div className="assignee-cell">
                                            <span className="avatar-sm" style={{ background: p.color }}>{p.initials}</span>
                                            <span>{p.assignee} ▾</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={p.status === 'Complete' ? 'status-complete' : 'status-needs-review'}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td>{p.currentCOO}</td>
                                    <td>{p.predictedCOO}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

    /* ===== Duties Tab ===== */
    const renderDuties = () => (
        <div className={`ws-duties-layout ${showDutyDetail ? 'with-panel' : ''}`}>
            <div className="ws-duties-main">
                <div className="ws-metrics-top">
                    <div className="ws-stat-col">
                        <div className="ws-stat-card">
                            <span className="ws-stat-label">Total Current Ad Valorem</span>
                            <span className="ws-stat-big">658.2%</span>
                        </div>
                        <div className="ws-stat-card purple-border">
                            <span className="ws-stat-label">Total Suggested Ad Valorem</span>
                            <span className="ws-stat-big purple">623.4%</span>
                            <span className="ws-stat-sparkle">✦</span>
                        </div>
                    </div>

                    <div className="ws-chart-card">
                        <h4>Miscalculation Likelihood</h4>
                        <div className="ws-donut-wrap">
                            <div className="ws-donut" style={{ background: 'conic-gradient(#7c3aed 0% 25%, #a78bfa 25% 50%, #c4b5fd 50% 75%, #e2e8f0 75% 100%)' }}>
                                <div className="ws-donut-hole"></div>
                            </div>
                            <div className="ws-donut-legend">
                                <span><span className="ws-dot" style={{ background: '#7c3aed' }}></span> High</span>
                                <span><span className="ws-dot" style={{ background: '#a78bfa' }}></span> Medium</span>
                                <span><span className="ws-dot" style={{ background: '#c4b5fd' }}></span> Low</span>
                                <span><span className="ws-dot" style={{ background: '#e2e8f0' }}></span> Undetermined</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expo-subtabs">
                    {['All', 'High', 'Medium', 'Low', 'Undetermined', 'Agree'].map((tab, idx) => (
                        <button key={tab} className={`expo-subtab ${idx === 0 ? 'active' : ''}`}>
                            {tab} {idx === 0 && <span className="subtab-count">4</span>}
                            {idx >= 1 && idx <= 4 && <span className="subtab-count">1</span>}
                        </button>
                    ))}
                </div>

                <div className="panel-card">
                    <div className="table-scroll">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '40px' }}></th>
                                    <th>Product</th>
                                    <th>Assignee</th>
                                    <th>Duty Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dutiesProducts.map((p, i) => (
                                    <tr key={i} className="clickable-row" onClick={() => setShowDutyDetail(true)}>
                                        <td><input type="checkbox" className="row-checkbox" /></td>
                                        <td>
                                            <div className="src-name">
                                                <span className="expand-icon">▸</span>
                                                {p.name}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="assignee-cell">
                                                <span className="avatar-sm" style={{ background: p.color }}>{p.initials}</span>
                                                <span>{p.assignee} ▾</span>
                                            </div>
                                        </td>
                                        <td><span className="duty-rate-val">{p.dutyRate}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Duty Detail Side Panel */}
            {showDutyDetail && (
                <div className="ws-side-panel">
                    <div className="side-panel-header">
                        <div className="side-panel-title">
                            <span className="side-panel-icon">📱</span>
                            <div>
                                <h4>Smartphone</h4>
                                <span className="side-panel-sub">HS10: 8517.12.0050</span>
                            </div>
                        </div>
                        <button className="side-panel-close" onClick={() => setShowDutyDetail(false)}>✕</button>
                    </div>

                    <div className="suggested-box">
                        <span className="suggested-badge">✦ Suggested</span>
                        <p>Based on current tariffs and duties, RevoGlobal suggests an Ad Valorem Rate of 94.8000% versus the current Ad Valorem Rate of 102.6000%</p>
                        <span className="suggested-date">Calculated 8/13/2025, 4:36:16 PM</span>
                    </div>

                    <div className="side-panel-actions">
                        <button className="action-btn">More Actions ▾</button>
                        <button className="action-btn primary">✦ Accept</button>
                    </div>

                    <div className="side-panel-tabs">
                        {['Overview', 'Default Tariffs', 'Steel Tariffs', 'Tariff Details'].map((tab, i) => (
                            <button key={tab} className={`detail-tab ${i === 1 ? 'active' : ''}`}>
                                {tab} {i === 3 && <span className="subtab-count">1</span>}
                            </button>
                        ))}
                    </div>

                    <div className="side-panel-info">
                        <h5>General Information</h5>
                        <div className="info-row"><span>Country of Origin</span><span>🇺🇸 United States</span></div>
                        <div className="info-row"><span>HS Code</span><span className="mono">8517.12.0050</span></div>
                        <div className="info-row"><span>Ad Valorem Rate</span><span>94.8000%</span></div>
                        <div className="info-row"><span>Per Unit Rate</span><span>$0.00</span></div>
                    </div>
                </div>
            )}
        </div>
    );

    /* ===== Section 232 Tab ===== */
    const renderSection232 = () => (
        <div className={`ws-duties-layout ${showChatPanel ? 'with-panel' : ''}`}>
            <div className="ws-duties-main">
                <div className="ws-metrics-top">
                    <div className="ws-stat-col">
                        <div className="ws-stat-card">
                            <span className="ws-stat-label">Verified</span>
                            <span className="ws-stat-big">67</span>
                        </div>
                        <div className="ws-stat-card">
                            <span className="ws-stat-label">Unverified</span>
                            <span className="ws-stat-big">79</span>
                        </div>
                        <div className="ws-stat-card">
                            <span className="ws-stat-label">Completed</span>
                            <span className="ws-stat-big">128</span>
                        </div>
                    </div>

                    <div className="ws-chart-card purple-border">
                        <div className="ws-chart-header">
                            <h4>RevoGlobal Predicted Material Composition</h4>
                            <span className="ws-stat-sparkle">✦</span>
                        </div>
                        <div className="ws-donut-wrap">
                            <div className="ws-donut" style={{ background: 'conic-gradient(#7c3aed 0% 40%, #a78bfa 40% 65%, #c4b5fd 65% 80%, #e9d5ff 80% 100%)' }}>
                                <div className="ws-donut-hole"></div>
                            </div>
                            <div className="ws-donut-legend">
                                <span><span className="ws-dot" style={{ background: '#7c3aed' }}></span> Steel</span>
                                <span><span className="ws-dot" style={{ background: '#a78bfa' }}></span> Aluminum</span>
                                <span><span className="ws-dot" style={{ background: '#c4b5fd' }}></span> Copper</span>
                            </div>
                        </div>
                    </div>

                    <div className="ws-chart-card">
                        <h4>Task Assignment</h4>
                        <div className="ws-donut-wrap">
                            <div className="ws-donut" style={{ background: 'conic-gradient(#b45309 0% 50%, #d97706 50% 75%, #fbbf24 75% 100%)' }}>
                                <div className="ws-donut-hole"></div>
                            </div>
                            <div className="ws-donut-legend">
                                <span><span className="ws-dot" style={{ background: '#b45309' }}></span> Unassigned</span>
                                <span><span className="ws-dot" style={{ background: '#d97706' }}></span> Mine</span>
                                <span><span className="ws-dot" style={{ background: '#fbbf24' }}></span> Others</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expo-subtabs">
                    {['All', 'Needs Review', 'Qualifies', 'Shared'].map((tab, idx) => (
                        <button key={tab} className={`expo-subtab ${idx === 0 ? 'active' : ''}`}>
                            {tab} {idx === 1 && <span className="subtab-count">1</span>}
                        </button>
                    ))}
                    <div className="expo-subtab-right">
                        <span className="products-count">22 products</span>
                        <button className="filter-chip">⚙ Filters</button>
                        <button className="filter-chip">Columns</button>
                        <button className="filter-chip">✦ Groups</button>
                        <button className="filter-chip">✦ Highlights</button>
                    </div>
                </div>

                <div className="panel-card">
                    <div className="table-scroll">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Material</th>
                                    <th>HS Code</th>
                                    <th>Materials Origin</th>
                                    <th>Contribution %</th>
                                    <th>Duty Sensitivity</th>
                                    <th>Base Rate</th>
                                    <th>Penalty Rate</th>
                                    <th>Est. Min.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section232Products.map((p, i) => (
                                    <tr key={i} className="clickable-row" onClick={() => setShowChatPanel(true)}>
                                        <td>
                                            <div className="src-name">
                                                <span className="expand-icon">▸</span>
                                                {p.name}
                                            </div>
                                        </td>
                                        <td>{p.material}</td>
                                        <td className="mono">{p.hs}</td>
                                        <td>{p.origin}</td>
                                        <td>{p.contribution}</td>
                                        <td>{p.duty}</td>
                                        <td>{p.base}</td>
                                        <td>{p.penalty}</td>
                                        <td>{p.est}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 232 Input Request Chat Panel */}
            {showChatPanel && (
                <div className="ws-side-panel chat-panel">
                    <div className="side-panel-header">
                        <div className="side-panel-title">
                            <span className="side-panel-icon">📋</span>
                            <div>
                                <h4>232 Input Request</h4>
                                <span className="side-panel-sub">Received 11/19/25</span>
                            </div>
                        </div>
                        <button className="side-panel-close" onClick={() => setShowChatPanel(false)}>✕</button>
                    </div>

                    <div className="chat-messages">
                        {chatMessages.map((msg, i) => (
                            <div className="chat-msg" key={i}>
                                <span className="chat-avatar" style={{ background: msg.color }}>{msg.initials}</span>
                                <div className="chat-content">
                                    <strong className="chat-sender">{msg.sender}</strong>
                                    <p className="chat-text">{msg.text}</p>
                                    {msg.attachment && (
                                        <a href="#" className="chat-attachment">{msg.attachment}</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    /* ===== Exposures Tab (existing) ===== */
    const renderExposures = () => (
        <>
            <div className="exposure-metrics-row">
                <div className="expo-card expo-concern">
                    <div className="expo-card-label">Of Concern <span className="expo-flag">🚩</span></div>
                    <div className="expo-big-number concern-num">334</div>
                    <div className="expo-sub">Not of Concern</div>
                    <div className="expo-big-number safe-num">945</div>
                </div>

                <div className="expo-card">
                    <h4 className="expo-card-title">Exposure Impact</h4>
                    <div className="impact-bars">
                        <div className="impact-row">
                            <span className="impact-label">Sources</span>
                            <div className="impact-bar-track"><div className="impact-fill" style={{ width: '35%', background: '#ef4444' }}></div></div>
                            <span className="impact-detail">12 direct, 138 indirect</span>
                        </div>
                        <div className="impact-row">
                            <span className="impact-label">Suppliers</span>
                            <div className="impact-bar-track"><div className="impact-fill" style={{ width: '80%', background: '#f59e0b' }}></div></div>
                            <span className="impact-detail">289 direct, 8,905 indirect</span>
                        </div>
                        <div className="impact-row">
                            <span className="impact-label">Products</span>
                            <div className="impact-bar-track"><div className="impact-fill" style={{ width: '60%', background: '#3b82f6' }}></div></div>
                            <span className="impact-detail">844 direct, 2,412 indirect</span>
                        </div>
                    </div>
                </div>

                <div className="expo-card">
                    <h4 className="expo-card-title">Suppliers by Country, Tier</h4>
                    <table className="tier-table">
                        <thead><tr><th>Row Header</th><th>Tier 2</th><th>Tier 3</th></tr></thead>
                        <tbody>
                            {suppliersByCountry.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.country}</td>
                                    <td><span className={`tier-cell ${row.tier2 >= 6 ? 'hot' : row.tier2 >= 3 ? 'warm' : 'cool'}`}>{row.tier2}</span></td>
                                    <td><span className={`tier-cell ${row.tier3 >= 6 ? 'hot' : row.tier3 >= 3 ? 'warm' : 'cool'}`}>{row.tier3}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="expo-card">
                    <h4 className="expo-card-title">Suppliers by Exposure Category</h4>
                    <table className="category-table">
                        <thead><tr><th></th><th>BR</th><th>COR</th><th>EXP</th></tr></thead>
                        <tbody>
                            {suppliersByCategory.map((row, i) => (
                                <tr key={i}>
                                    <td className="cat-name">{row.name}</td>
                                    <td>{row.br}</td>
                                    <td>{row.cor}</td>
                                    <td>{row.exp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="expo-subtabs">
                {exposureSubTabs.map((tab) => (
                    <button key={tab} className={`expo-subtab ${activeExpTab === tab ? 'active' : ''}`} onClick={() => setActiveExpTab(tab)}>
                        {tab}
                        <span className="subtab-count">1</span>
                    </button>
                ))}
                <div className="expo-subtab-right">
                    <span className="products-count">11 products</span>
                    <button className="filter-chip">Filters</button>
                    <button className="filter-chip">Columns</button>
                    <button className="filter-chip">Highlights</button>
                </div>
            </div>

            <div className="panel-card expo-table-card">
                <div className="table-scroll">
                    <table className="data-table expo-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}></th>
                                <th>Exposure Sources</th>
                                <th>Status</th>
                                <th>Exposures</th>
                                <th>Suppliers</th>
                                <th>Products</th>
                                <th>Type</th>
                                <th>Impact</th>
                                <th>Proximity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exposureSources.map((src, i) => (
                                <tr key={i} className={selectedRows.includes(i) ? 'row-selected' : ''}>
                                    <td><input type="checkbox" checked={selectedRows.includes(i)} onChange={() => toggleRow(i)} className="row-checkbox" /></td>
                                    <td><div className="src-name"><span className="expand-icon">▸</span>{src.name}</div></td>
                                    <td><span className="status-concern">{src.status}</span></td>
                                    <td>{src.exposures}</td>
                                    <td>{src.suppliers}</td>
                                    <td>{src.products}</td>
                                    <td>{src.type}</td>
                                    <td><span className={`impact-tag ${src.impact === 'Direct' ? 'direct' : 'indirect'}`}>{src.impact}</span></td>
                                    <td>
                                        <div className="proximity-dots">
                                            {Array.from({ length: 8 }, (_, di) => (
                                                <span key={di} className={`prox-dot ${di < src.proximity ? 'filled' : ''}`}></span>
                                            ))}
                                            <span className="prox-val">{src.proximity}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {selectedRows.length > 0 && (
                    <div className="selection-bar">
                        <span>{selectedRows.length} of {exposureSources.length} selected</span>
                        <button className="selection-action">Clear Selection</button>
                        <button className="selection-action">📋 Requests ▾</button>
                        <button className="selection-action">📊 Status ▾</button>
                    </div>
                )}
            </div>
        </>
    );

    /* ===== MAIN RENDER ===== */
    return (
        <div className="workspaces-view">
            <div className="ws-header">
                <button className="back-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
                <h2 className="ws-title">Holiday Season Workspace</h2>
            </div>

            <div className="detail-tabs ws-tabs">
                {workspaceTabs.map(tab => (
                    <button
                        key={tab}
                        className={`detail-tab ${activeWSTab === tab ? 'active' : ''}`}
                        onClick={() => { setActiveWSTab(tab); setShowChatPanel(false); setShowDutyDetail(false); }}
                    >
                        {tab}
                    </button>
                ))}
                <button className="detail-tab add-tab">+</button>
            </div>

            {renderTabContent()}
        </div>
    );
};

export default WorkspacesView;
