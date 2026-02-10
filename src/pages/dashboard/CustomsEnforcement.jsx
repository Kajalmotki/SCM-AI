import React, { useState } from 'react';
import './DashboardPanels.css';

const products = [
    { name: 'Pulse Watch', coo: '🇹🇼 Taiwan', duties: '35.50%', fta: 'Eligible', pga: 'Required', sensitivity: '25.00%' },
    { name: 'Flow Earbuds', coo: '🇨🇦 Canada', duties: '38.33%', fta: 'Eligible', pga: 'Required', sensitivity: '65.00%' },
    { name: 'SoundSphere', coo: '🇲🇽 Mexico', duties: '105.50%', fta: 'Undetermined', pga: 'Not Required', sensitivity: '35.00%' },
    { name: 'Smartphone', coo: '🇺🇸 United States', duties: '55.25%', fta: 'Eligible', pga: 'Required', sensitivity: '0.00%' },
    { name: 'Home Hub', coo: '🇰🇷 South Korea', duties: '64.12%', fta: 'Undetermined', pga: 'Not Required', sensitivity: '20.00%' },
];

const heatmapData = {
    headers: ['US', 'DE', 'CL', 'VN', 'KR', 'CN', 'MX'],
    rows: [
        { label: 'Aerospace', values: [2, 6, 3, 9, 1, 6, 3] },
        { label: 'Electronics', values: [8, 3, 7, 2, 2, 9, 1] },
        { label: 'Pharmaceuticals', values: [2, 7, 2, 7, 5, 8, 4] },
        { label: 'Automotive', values: [5, 3, 1, 3, 3, 5, 10] },
        { label: 'Chemicals', values: [7, 3, 1, 7, 10, 2, 4] },
        { label: 'Retail', values: [4, 10, 4, 3, 8, 9, 8] },
        { label: 'Energy', values: [7, 10, 5, 4, 7, 10, 2] },
    ],
};

const getHeatLevel = (val) => {
    if (val >= 8) return 'critical';
    if (val >= 5) return 'high';
    if (val >= 3) return 'medium';
    if (val >= 1) return 'low';
    return 'none';
};

const getFtaBadge = (status) => {
    const map = {
        'Eligible': 'badge-success',
        'Not Eligible': 'badge-danger',
        'Undetermined': 'badge-neutral',
        'Needs Review': 'badge-warning',
    };
    return map[status] || 'badge-neutral';
};

const getPgaBadge = (status) => {
    return status === 'Required' ? 'badge-warning' : 'badge-success';
};

const enforcementTabs = ['Objects', 'Passports', 'Requests', 'All Exposures'];

const CustomsEnforcement = () => {
    const [activeTab, setActiveTab] = useState('All Exposures');

    return (
        <div className="panel-customs">
            {/* Header */}
            <div className="ce-header">
                <div className="ce-header-left">
                    <button className="back-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <h2 className="ce-title">Customs Enforcement</h2>
                </div>
                <div className="ce-cbp-badge">
                    <div className="cbp-seal">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="23" stroke="#1a365d" strokeWidth="2" fill="#1a365d" />
                            <circle cx="24" cy="24" r="18" stroke="#c4a35a" strokeWidth="1.5" fill="none" />
                            <text x="24" y="20" textAnchor="middle" fill="#c4a35a" fontSize="7" fontWeight="bold">U.S.</text>
                            <text x="24" y="28" textAnchor="middle" fill="white" fontSize="5">CBP</text>
                        </svg>
                    </div>
                    <div className="cbp-text">
                        <strong>U.S. Customs and</strong>
                        <span>Border Protection</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="detail-tabs ce-tabs">
                {enforcementTabs.map(tab => (
                    <button
                        key={tab}
                        className={`detail-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                        {tab === 'All Exposures' && <span className="subtab-count">2</span>}
                    </button>
                ))}
            </div>

            {/* Top Metrics Row */}
            <div className="ce-metrics-row">
                {/* Of Concern */}
                <div className="ce-concern-card">
                    <div className="expo-card-label">Of Concern <span>📁</span></div>
                    <div className="ce-big-number concern">58</div>
                    <span className="ws-stat-sparkle">✦</span>
                </div>

                {/* Industries vs Countries Heatmap */}
                <div className="ce-heatmap-card">
                    <h4>Industries vs. Countries</h4>
                    <div className="heatmap-table compact">
                        <div className="hm-row hm-header">
                            <div className="hm-label"></div>
                            {heatmapData.headers.map((h, i) => (
                                <div className="hm-cell hm-head" key={i}>{h}</div>
                            ))}
                        </div>
                        {heatmapData.rows.map((row, ri) => (
                            <div className="hm-row" key={ri}>
                                <div className="hm-label">{row.label}</div>
                                {row.values.map((val, vi) => (
                                    <div className={`hm-cell hm-value ${getHeatLevel(val)}`} key={vi}>
                                        {val}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exposure Impact */}
                <div className="ce-impact-card">
                    <h4>Exposure Impact</h4>
                    <div className="ce-impact-rows">
                        <div className="ce-impact-item">
                            <span className="ce-impact-label">Sources</span>
                            <div className="ce-impact-bars">
                                <div className="ce-bar-track"><div className="ce-bar-fill red" style={{ width: '30%' }}></div><div className="ce-bar-fill orange" style={{ width: '40%' }}></div></div>
                            </div>
                            <span className="ce-impact-text">4 direct, 2 indirect</span>
                        </div>
                        <div className="ce-impact-item">
                            <span className="ce-impact-label">Suppliers</span>
                            <div className="ce-impact-bars">
                                <div className="ce-bar-track"><div className="ce-bar-fill red" style={{ width: '20%' }}></div><div className="ce-bar-fill orange" style={{ width: '50%' }}></div></div>
                            </div>
                            <span className="ce-impact-text">2 direct, 9 indirect</span>
                        </div>
                        <div className="ce-impact-item">
                            <span className="ce-impact-label">Products</span>
                            <div className="ce-impact-bars">
                                <div className="ce-bar-track"><div className="ce-bar-fill red" style={{ width: '25%' }}></div><div className="ce-bar-fill green" style={{ width: '35%' }}></div></div>
                            </div>
                            <span className="ce-impact-text">3 direct, 7 indirect</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Not of Concern */}
            <div className="ce-safe-row">
                <div className="ce-safe-card">
                    <div className="expo-card-label">Not of Concern <span>🟢</span></div>
                    <div className="ce-big-number safe">889</div>
                </div>
            </div>

            {/* Product Compliance Table */}
            <div className="panel-card ce-table-card">
                <div className="table-scroll">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}></th>
                                <th>Product</th>
                                <th>✦ COO</th>
                                <th>✦ Duties</th>
                                <th>✦ FTA</th>
                                <th>✦ PGA</th>
                                <th>✦ Duty Sensitivity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p, i) => (
                                <tr key={i} className={i === 3 ? 'row-highlighted' : ''}>
                                    <td><input type="checkbox" className="row-checkbox" /></td>
                                    <td>
                                        <div className="src-name">
                                            <span className="expand-icon">▸</span>
                                            {p.name}
                                        </div>
                                    </td>
                                    <td>{p.coo}</td>
                                    <td className="mono">{p.duties}</td>
                                    <td><span className={`table-badge ${getFtaBadge(p.fta)}`}>{p.fta}</span></td>
                                    <td><span className={`table-badge ${getPgaBadge(p.pga)}`}>{p.pga}</span></td>
                                    <td className="mono">{p.sensitivity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomsEnforcement;
