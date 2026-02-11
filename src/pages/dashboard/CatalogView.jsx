import React, { useState, useEffect } from 'react';
import './DashboardPanels.css';
import DataService from '../../services/dataService';

const tabs = ['Overview', 'Value Chains', 'Passports', 'Country of Origin', 'Duties', 'HS Codes', 'FTA', 'PGA', 'Section 232'];

const CatalogView = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeProductTab, setActiveProductTab] = useState('Overview');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCatalog = async () => {
            setLoading(true);
            try {
                const data = await DataService.getCatalog();
                setProducts(data);
            } catch (error) {
                console.error("Failed to load catalog", error);
            } finally {
                setLoading(false);
            }
        };
        loadCatalog();
    }, []);

    if (loading) {
        return <div className="loading-state">Loading Product Catalog...</div>;
    }

    if (selectedProduct !== null) {
        return (
            <div className="catalog-detail">
                {/* Back button + Product name */}
                <div className="detail-topbar">
                    <button className="back-btn" onClick={() => setSelectedProduct(null)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <span className="detail-product-icon">{selectedProduct.icon}</span>
                    <h2 className="detail-product-name">{selectedProduct.name}</h2>
                </div>

                {/* Tabs */}
                <div className="detail-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`detail-tab ${activeProductTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveProductTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                    <button className="detail-tab add-tab">+</button>
                </div>

                {/* Overview content */}
                {activeProductTab === 'Overview' && (
                    <div className="detail-overview-grid">
                        <div className="detail-info-panel">
                            <h3 className="detail-section-title">General</h3>
                            <div className="detail-fields">
                                <div className="detail-field">
                                    <span className="field-label">Provided Goods Description</span>
                                    <div className="field-value">
                                        {selectedProduct.name}
                                        <div className="field-badges">
                                            {selectedProduct.flagsList && selectedProduct.flagsList.map((f, i) => (
                                                <span key={i} className={`flag-badge flag-${f.type}`}>
                                                    <span className="flag-diamond">◆</span> {f.label}
                                                </span>
                                            ))}
                                            {(!selectedProduct.flagsList || selectedProduct.flagsList.length === 0) && (
                                                <span className="flag-badge flag-success">
                                                    <span className="flag-diamond">◆</span> Compliant
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">HS10</span>
                                    <span className="field-value mono">{selectedProduct.hs}</span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Country</span>
                                    <span className="field-value">{selectedProduct.country}</span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Enhanced Goods Description</span>
                                    <span className="field-value">{selectedProduct.enhancedDesc}</span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Product ID</span>
                                    <span className="field-value mono">{selectedProduct.productId}</span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Documentation</span>
                                    <span className="field-value">
                                        <a href="#" className="doc-link">📎 {selectedProduct.documentation}</a>
                                    </span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Company Name</span>
                                    <span className="field-value">{selectedProduct.company}</span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Revenue</span>
                                    <span className="field-value mono">{selectedProduct.revenue}</span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Duty Rate</span>
                                    <span className="field-value">
                                        <button className="needs-input-btn">+ Needs Input</button>
                                    </span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">Bill of Materials</span>
                                    <span className="field-value">
                                        <button className="connect-plm-btn">Connect to PLM</button>
                                    </span>
                                </div>
                                <div className="detail-field">
                                    <span className="field-label">ALTA ID</span>
                                    <span className="field-value mono">{selectedProduct.altaId}</span>
                                </div>
                            </div>
                        </div>
                        <div className="detail-image-panel">
                            <div className="product-image-placeholder">
                                <span style={{ fontSize: '5rem' }}>{selectedProduct.icon}</span>
                                <p>Product Image</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeProductTab !== 'Overview' && (
                    <div className="tab-placeholder">
                        <div className="placeholder-icon">📋</div>
                        <h3>{activeProductTab}</h3>
                        <p>This tab contains detailed {activeProductTab.toLowerCase()} information for this product.</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="catalog-list">
            <div className="catalog-header-bar">
                <h3>Product Catalog</h3>
                <div className="catalog-actions">
                    <div className="catalog-search-input">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        <input type="text" placeholder="Search catalog..." />
                    </div>
                    <button className="action-btn primary">+ Add Product</button>
                </div>
            </div>

            <div className="catalog-grid">
                {products.map((p, i) => (
                    <div className="catalog-card" key={i} onClick={() => setSelectedProduct(p)}>
                        <div className="catalog-card-header">
                            <span className="catalog-card-icon">{p.icon}</span>
                            <div className="catalog-card-info">
                                <h4>{p.name}</h4>
                                <span className="catalog-card-hs">HS10: {p.hs}</span>
                            </div>
                            {p.flags > 0 && (
                                <span className="catalog-flag-count">{p.flags} flags</span>
                            )}
                        </div>
                        <div className="catalog-card-meta">
                            <div className="meta-row"><span className="meta-label">Company</span><span>{p.company}</span></div>
                            <div className="meta-row"><span className="meta-label">Origin</span><span>{p.country}</span></div>
                        </div>
                        <button className="catalog-view-btn">View Details →</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogView;
