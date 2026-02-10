import React, { useState } from 'react';
import './DashboardPanels.css';

const materials = [
    { name: 'Steel', pct: 43, color: '#8b5cf6' },
    { name: 'Aluminum', pct: 35, color: '#3b82f6' },
    { name: 'Copper', pct: 22, color: '#f59e0b' },
];

const usmcaData = [
    { label: 'Qualifies', value: 64, color: '#22c55e' },
    { label: 'Needs Review', value: 23, color: '#f59e0b' },
    { label: 'Does Not Qualify', value: 13, color: '#ef4444' },
];

const productCatalog = [
    {
        name: 'Smartphone',
        hs: '8517.12.0050',
        icon: '📱',
        altaId: 'ALTA-H34Q-Z56D',
        company: 'Volta Devices, Inc.',
        materials: [
            { name: 'Steel', pct: 43 },
            { name: 'Aluminum', pct: 35 },
            { name: 'Copper', pct: 22 },
        ],
        verified: 67,
        flags: [
            { type: 'warning', title: 'Likely Misclassified', desc: 'Suggested: 8517.13.0000' },
            { type: 'danger', title: 'UFLPA Exposure', desc: 'Potential forced labor in supply chain' },
        ],
        supplyChain: {
            root: { id: '620342', name: 'Smartphone', type: 'Technology Company', company: 'Volta Devices, Inc.', location: 'New York, USA' },
            tier1: [
                { id: '860622', name: 'OLED Displays', type: 'Display Production', company: 'Lumion Display', location: 'United States' },
                { id: '520942', name: 'Central Processing Units', type: 'SoC Processors', company: 'Nexus Silicon', location: 'Taiwan' },
            ],
            tier2: [
                { id: '520100', name: 'Silicon Wafer Substrates', type: 'Raw Materials', company: 'Global WaferPro', location: 'Japan' },
                { id: '320415', name: 'Advanced Chip Assembly', type: 'OSAT', company: 'SynTest Dynamics', location: 'China' },
            ],
        },
    },
    {
        name: 'Solar Panel X',
        hs: '8541.40.6020',
        icon: '☀️',
        altaId: 'ALTA-K78R-M92B',
        company: 'SunEdge Corp.',
        materials: [
            { name: 'Polysilicon', pct: 55 },
            { name: 'Glass', pct: 30 },
            { name: 'Silver', pct: 15 },
        ],
        verified: 42,
        flags: [
            { type: 'danger', title: 'UFLPA — Xinjiang Origin', desc: 'Polysilicon sourced from restricted region' },
        ],
        supplyChain: null,
    },
    {
        name: 'Pulse Watch',
        hs: '9102.12.8040',
        icon: '⌚',
        altaId: 'ALTA-N22P-Q41W',
        company: 'Chronix Ltd.',
        materials: [
            { name: 'Titanium', pct: 40 },
            { name: 'Glass', pct: 35 },
            { name: 'Lithium', pct: 25 },
        ],
        verified: 89,
        flags: [],
        supplyChain: null,
    },
];

const ProductPassports = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const gradientStr = (mats) => {
        let cumulative = 0;
        const colors = ['#8b5cf6', '#3b82f6', '#f59e0b', '#22c55e', '#ef4444'];
        return mats.map((m, i) => {
            const start = cumulative;
            cumulative += m.pct;
            return `${colors[i % colors.length]} ${start}% ${cumulative}%`;
        }).join(', ');
    };

    /* ===== Passport Detail View ===== */
    if (selectedProduct !== null) {
        const product = productCatalog[selectedProduct];
        const chain = product.supplyChain;

        return (
            <div className="passport-detail-view">
                {/* Left Panel */}
                <div className="passport-left-panel">
                    <div className="passport-detail-header">
                        <button className="back-btn" onClick={() => setSelectedProduct(null)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        </button>
                        <div className="passport-company-name">
                            {product.company}
                            <span className="passport-chevron">▴</span>
                        </div>
                    </div>

                    <div className="passport-id-row">
                        <span className="passport-alta-icon">🏷️</span>
                        <span className="passport-alta-id">{product.altaId}</span>
                        <span className="passport-hs-code">{product.hs}</span>
                        <button className="passport-more">⋯</button>
                    </div>

                    <h2 className="passport-product-title">{product.name}</h2>
                    <p className="passport-subscriber">Passport Subscriber: {product.company}</p>

                    <div className="passport-accordion">
                        <div className="accordion-item">
                            <span className="accordion-arrow">▸</span>
                            <span>Overview</span>
                        </div>
                        <div className="accordion-item">
                            <span className="accordion-arrow">▸</span>
                            <span>Production Roles</span>
                        </div>
                        <div className="accordion-item">
                            <span className="accordion-arrow">▸</span>
                            <span>Country of Origin</span>
                        </div>
                        <div className="accordion-item">
                            <span className="accordion-arrow">▸</span>
                            <span>Free Trade Agreements</span>
                        </div>
                    </div>

                    <button className="prevalidate-btn">Pre-validate</button>
                </div>

                {/* Right Panel — Supply Chain Graph */}
                <div className="passport-right-panel">
                    {chain ? (
                        <div className="passport-chain-graph">
                            {/* Root */}
                            <div className="pc-column">
                                <div className="pc-node">
                                    <div className="pc-node-header">
                                        <span className="pc-icon root-icon">📱</span>
                                        <span className="pc-id">{chain.root.id}</span>
                                    </div>
                                    <h4 className="pc-name">{chain.root.name} <span className="pc-verified">✅</span></h4>
                                    <div className="pc-meta">
                                        <span className="pc-type-badge">{chain.root.type}</span>
                                    </div>
                                    <p className="pc-company">{chain.root.company}</p>
                                    <p className="pc-location">{chain.root.location}</p>
                                </div>
                            </div>

                            <div className="pc-connectors">
                                <div className="pc-line"></div>
                                <div className="pc-line"></div>
                            </div>

                            {/* Tier 1 */}
                            <div className="pc-column">
                                {chain.tier1.map((node, i) => (
                                    <div className="pc-node" key={i}>
                                        <div className="pc-node-header">
                                            <span className="pc-icon">🟢</span>
                                            <span className="pc-id">{node.id}</span>
                                            <span className="pc-edit">✏️</span>
                                        </div>
                                        <h4 className="pc-name">{node.name} <span className="pc-verified">✅</span></h4>
                                        <div className="pc-meta">
                                            <span className="pc-type-badge">{node.type}</span>
                                        </div>
                                        <p className="pc-company">{node.company}</p>
                                        <p className="pc-location">{node.location}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="pc-connectors">
                                <div className="pc-line"></div>
                                <div className="pc-line"></div>
                            </div>

                            {/* Tier 2 */}
                            <div className="pc-column">
                                {chain.tier2.map((node, i) => (
                                    <div className="pc-node" key={i}>
                                        <div className="pc-node-header">
                                            <span className="pc-icon">🟢</span>
                                            <span className="pc-id">{node.id}</span>
                                            <span className="pc-edit">✏️</span>
                                        </div>
                                        <h4 className="pc-name">{node.name} <span className="pc-verified">✅</span></h4>
                                        <div className="pc-meta">
                                            <span className="pc-type-badge">{node.type}</span>
                                        </div>
                                        <p className="pc-company">{node.company}</p>
                                        <p className="pc-location">{node.location}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="tab-placeholder">
                            <div className="placeholder-icon">🔗</div>
                            <h3>Supply Chain</h3>
                            <p>No supply chain data available for this product.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    /* ===== Grid View ===== */
    return (
        <div className="panel-passports">
            <div className="fta-summary">
                <div className="panel-card fta-card">
                    <div className="panel-card-header">
                        <h3>USMCA Qualification Status</h3>
                    </div>
                    <div className="fta-content">
                        <div className="fta-donut-wrap">
                            <div
                                className="fta-donut"
                                style={{
                                    background: `conic-gradient(#22c55e 0% 64%, #f59e0b 64% 87%, #ef4444 87% 100%)`
                                }}
                            >
                                <div className="fta-donut-hole">
                                    <div className="fta-donut-val">64%</div>
                                    <div className="fta-donut-label">Qualifies</div>
                                </div>
                            </div>
                        </div>
                        <div className="fta-legend">
                            {usmcaData.map((d, i) => (
                                <div className="fta-legend-item" key={i}>
                                    <span className="fta-dot" style={{ background: d.color }}></span>
                                    <span className="fta-legend-label">{d.label}</span>
                                    <span className="fta-legend-val">{d.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="panel-card fta-card">
                    <div className="panel-card-header">
                        <h3>Shift Status — Tariff Impact</h3>
                    </div>
                    <div className="shift-bars">
                        <div className="shift-row">
                            <span className="shift-label">Section 301</span>
                            <div className="shift-bar"><div className="shift-fill" style={{ width: '78%', background: '#ef4444' }}></div></div>
                            <span className="shift-val">$4.2M</span>
                        </div>
                        <div className="shift-row">
                            <span className="shift-label">Section 201</span>
                            <div className="shift-bar"><div className="shift-fill" style={{ width: '45%', background: '#f59e0b' }}></div></div>
                            <span className="shift-val">$1.8M</span>
                        </div>
                        <div className="shift-row">
                            <span className="shift-label">AD/CVD</span>
                            <div className="shift-bar"><div className="shift-fill" style={{ width: '32%', background: '#3b82f6' }}></div></div>
                            <span className="shift-val">$890K</span>
                        </div>
                        <div className="shift-row">
                            <span className="shift-label">CBAM</span>
                            <div className="shift-bar"><div className="shift-fill" style={{ width: '15%', background: '#8b5cf6' }}></div></div>
                            <span className="shift-val">$320K</span>
                        </div>
                    </div>
                    <button className="submit-cbp-btn">Submit to CBP →</button>
                </div>
            </div>

            <div className="passport-grid">
                {productCatalog.map((product, pi) => (
                    <div className="panel-card passport-card" key={pi} onClick={() => setSelectedProduct(pi)} style={{ cursor: 'pointer' }}>
                        <div className="passport-header">
                            <div className="passport-product-info">
                                <span className="passport-icon">{product.icon}</span>
                                <div>
                                    <h4 className="passport-name">{product.name}</h4>
                                    <span className="passport-hs">HS10: {product.hs}</span>
                                </div>
                            </div>
                            <div className="ai-badge-sm">✨ AI</div>
                        </div>

                        <div className="passport-chart-area">
                            <div
                                className="mini-donut"
                                style={{ background: `conic-gradient(${gradientStr(product.materials)})` }}
                            >
                                <div className="mini-donut-hole">
                                    <span className="mini-donut-val">{product.verified}%</span>
                                </div>
                            </div>
                            <div className="passport-legend">
                                {product.materials.map((m, mi) => (
                                    <div className="passport-legend-item" key={mi}>
                                        <span className="p-dot" style={{ background: ['#8b5cf6', '#3b82f6', '#f59e0b'][mi % 3] }}></span>
                                        {m.name} ({m.pct}%)
                                    </div>
                                ))}
                            </div>
                        </div>

                        {product.flags.length > 0 && (
                            <div className="passport-flags">
                                {product.flags.map((f, fi) => (
                                    <div className={`passport-flag ${f.type}`} key={fi}>
                                        <span className="pf-icon">{f.type === 'warning' ? '⚠️' : '🛡️'}</span>
                                        <div>
                                            <div className="pf-title">{f.title}</div>
                                            <div className="pf-desc">{f.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {product.flags.length === 0 && (
                            <div className="passport-clear">
                                <span>✅</span> No compliance issues detected
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPassports;
