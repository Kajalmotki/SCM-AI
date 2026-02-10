import React from 'react';
import './Integrations.css';

const categories = [
    {
        name: 'Satellite & Imagery',
        icon: '🛰️',
        sources: ['Planet Labs', 'Iceye SAR', 'Maxar', 'Sentinel Hub', 'Airbus DS'],
    },
    {
        name: 'Carrier & Logistics',
        icon: '🚢',
        sources: ['Maersk', 'MSC', 'CMA CGM', 'Convoy', 'Flexport', 'FedEx', 'UPS', 'DHL'],
    },
    {
        name: 'ERP & Enterprise',
        icon: '🏢',
        sources: ['SAP S/4HANA', 'Oracle Cloud', 'Microsoft Dynamics', 'NetSuite', 'Infor'],
    },
    {
        name: 'Telematics & IoT',
        icon: '📡',
        sources: ['ELD Feeds', 'GPS Trackers', 'IoT Sensors', 'RFID Tags', 'BLE Beacons'],
    },
    {
        name: 'Trade & Customs',
        icon: '📋',
        sources: ['Customs Manifests', 'HS Code DB', 'Import Genius', 'Panjiva', 'Trade Map'],
    },
    {
        name: 'Weather & Environment',
        icon: '🌊',
        sources: ['NOAA', 'Copernicus', 'Weather API', 'AIS Maritime', 'Air Quality Index'],
    },
    {
        name: 'Financial & Risk',
        icon: '💹',
        sources: ['Bloomberg', 'Reuters', 'Dun & Bradstreet', 'Coface', 'Moody\'s'],
    },
    {
        name: 'Blockchain & Compliance',
        icon: '⛓️',
        sources: ['Ethereum', 'Hyperledger', 'Chainlink Oracles', 'OFAC', 'CTPAT'],
    },
];

const Integrations = () => {
    return (
        <section className="section integ-section" id="integrations">
            <div className="container">
                <div className="integ-header animate-on-scroll">
                    <div className="section-label">
                        <span className="dot"></span>
                        Data Sources
                    </div>
                    <h2 className="section-title">
                        <span className="gradient-text">50+ Integrations</span>, One Platform
                    </h2>
                    <p className="section-subtitle">
                        RevoGlobal ingests data from satellites, carriers, ERPs, customs databases,
                        weather APIs, blockchain oracles, and more — all in real time.
                    </p>
                </div>

                <div className="integ-grid">
                    {categories.map((cat, i) => (
                        <div key={i} className={`integ-card glass-card animate-on-scroll delay-${(i % 5) + 1}`}>
                            <div className="integ-card-header">
                                <span className="integ-emoji">{cat.icon}</span>
                                <h3 className="integ-cat-name">{cat.name}</h3>
                            </div>
                            <div className="integ-sources">
                                {cat.sources.map((src, j) => (
                                    <span key={j} className="integ-source">{src}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Marquee ticker */}
                <div className="integ-marquee animate-on-scroll">
                    <div className="marquee-track">
                        {[...categories, ...categories].flatMap(c => c.sources).map((src, i) => (
                            <span key={i} className="marquee-item">{src}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
