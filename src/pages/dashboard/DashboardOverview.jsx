import React from 'react';
import './DashboardPanels.css';

const kpis = [
    { label: 'Total Products', value: '2,847', change: '+12%', icon: '📦', color: '#8b5cf6' },
    { label: 'Active Suppliers', value: '1,293', change: '+5%', icon: '🏭', color: '#3b82f6' },
    { label: 'Risk Score', value: '23.4', change: '-8%', icon: '⚠️', color: '#f59e0b', down: true },
    { label: 'Compliance Rate', value: '96.7%', change: '+2.1%', icon: '✅', color: '#22c55e' },
];

const recentActivity = [
    { time: '2 min ago', text: 'UFLPA screening completed for Batch #4821', type: 'success' },
    { time: '15 min ago', text: 'New supplier onboarded: Shenzhen Electronics Co.', type: 'info' },
    { time: '1 hr ago', text: 'HS Code reclassification flagged for SKU-9920', type: 'warning' },
    { time: '3 hr ago', text: 'USMCA qualification updated for 142 products', type: 'success' },
    { time: '5 hr ago', text: 'Tariff rate change detected: Section 301 List 4A', type: 'alert' },
];

const topRisks = [
    { supplier: 'Xinjiang Metals Ltd.', risk: 'UFLPA', score: 92, flag: '🇨🇳' },
    { supplier: 'Myanmar Textiles Co.', risk: 'Sanctions', score: 87, flag: '🇲🇲' },
    { supplier: 'Dongguan Solar Inc.', risk: 'UFLPA', score: 78, flag: '🇨🇳' },
    { supplier: 'Belarus Chemical AG', risk: 'Sanctions', score: 71, flag: '🇧🇾' },
];

const DashboardOverview = () => {
    return (
        <div className="panel-overview">
            {/* KPI Cards */}
            <div className="kpi-grid">
                {kpis.map((kpi, i) => (
                    <div className="kpi-card" key={i}>
                        <div className="kpi-header">
                            <span className="kpi-icon" style={{ background: `${kpi.color}15`, color: kpi.color }}>{kpi.icon}</span>
                            <span className={`kpi-change ${kpi.down ? 'down' : 'up'}`}>{kpi.change}</span>
                        </div>
                        <div className="kpi-value">{kpi.value}</div>
                        <div className="kpi-label">{kpi.label}</div>
                    </div>
                ))}
            </div>

            <div className="overview-grid">
                {/* Recent Activity */}
                <div className="panel-card activity-card">
                    <div className="panel-card-header">
                        <h3>Recent Activity</h3>
                        <button className="view-all-btn">View All</button>
                    </div>
                    <div className="activity-list">
                        {recentActivity.map((item, i) => (
                            <div className="activity-item" key={i}>
                                <div className={`activity-dot ${item.type}`}></div>
                                <div className="activity-body">
                                    <p className="activity-text">{item.text}</p>
                                    <span className="activity-time">{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Risks */}
                <div className="panel-card risks-card">
                    <div className="panel-card-header">
                        <h3>Top Risk Suppliers</h3>
                        <button className="view-all-btn">Investigate</button>
                    </div>
                    <div className="risk-list">
                        {topRisks.map((r, i) => (
                            <div className="risk-item" key={i}>
                                <div className="risk-info">
                                    <span className="risk-flag">{r.flag}</span>
                                    <div>
                                        <div className="risk-name">{r.supplier}</div>
                                        <div className="risk-type">{r.risk}</div>
                                    </div>
                                </div>
                                <div className="risk-score-wrap">
                                    <div className="risk-bar">
                                        <div className="risk-fill" style={{ width: `${r.score}%` }}></div>
                                    </div>
                                    <span className="risk-score-val">{r.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
