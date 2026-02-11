import React, { useState, useCallback } from 'react';
import './Features.css';

// Import local images (SVG placeholders generated)
import imgTracking from '../assets/features/tracking.svg';
import imgAnalytics from '../assets/features/analytics.svg';
import imgRisk from '../assets/features/risk.svg';
import imgCarbon from '../assets/features/carbon.svg';
import imgPassport from '../assets/features/passport.svg';
import imgAgents from '../assets/features/agents.svg';
import imgTariff from '../assets/features/tariff.svg';
import imgSatellite from '../assets/features/satellite.svg';

const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="14" cy="14" r="12" />
                <path d="M14 2C8 2 4 8 4 14" />
                <path d="M14 2C20 2 24 8 24 14" />
                <path d="M2 14h24" />
                <path d="M14 2v24" />
            </svg>
        ),
        title: 'Global Tracking',
        description: 'Track every shipment across every tier — mines, factories, ports, warehouses — on an interactive 3D globe with sub-second updates.',
        image: imgTracking
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 20L10 14L14 18L24 8" />
                <path d="M18 8H24V14" />
                <rect x="2" y="4" width="24" height="20" rx="2" />
            </svg>
        ),
        title: 'Predictive analytics',
        description: 'ML models predict delays, demand shifts, and disruptions days before they happen. Weather, strikes, port congestion — all modeled.',
        image: imgAnalytics
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 4L24 10V18L14 24L4 18V10L14 4Z" />
                <path d="M14 14L24 10" />
                <path d="M14 14V24" />
                <path d="M14 14L4 10" />
            </svg>
        ),
        title: 'Risk Scoring',
        description: 'Every supplier, route, and node gets a dynamic risk score. Geopolitical, financial, compliance, ESG — computed continuously.',
        image: imgRisk
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="14" cy="14" r="10" />
                <path d="M14 8V14L18 16" />
                <path d="M8 4L4 2" />
                <path d="M20 4L24 2" />
            </svg>
        ),
        title: 'Carbon Footprint',
        description: 'Calculate and optimize carbon impact for every route. Heatmaps visualize emissions. ESG reports generated automatically.',
        image: imgCarbon
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="8" height="8" rx="1" />
                <rect x="16" y="4" width="8" height="8" rx="1" />
                <rect x="4" y="16" width="8" height="8" rx="1" />
                <rect x="16" y="16" width="8" height="8" rx="1" />
                <path d="M12 8H16" />
                <path d="M12 20H16" />
                <path d="M8 12V16" />
                <path d="M20 12V16" />
            </svg>
        ),
        title: 'Blockchain Passports',
        description: 'Every product gets a blockchain-verified digital passport. Provenance, certifications, and custody chain — immutably recorded.',
        image: imgPassport
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'Autonomous Agents',
        description: 'AI bots that proactively reroute shipments, source alternatives, negotiate rates, and issue alerts — 24/7, zero human delay.',
        image: imgAgents
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 14C20 17.3 17.3 20 14 20C10.7 20 8 17.3 8 14" />
                <path d="M14 4V8" />
                <circle cx="14" cy="14" r="2" />
                <path d="M14 20V24" />
                <circle cx="14" cy="14" r="11" />
            </svg>
        ),
        title: 'Tariff Simulation',
        description: 'Model tariff scenarios in real time. What-if analysis for trade policy changes, duty calculations, and landed cost optimization.',
        image: imgTariff
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 14L4 4L14 7" />
                <path d="M21 14L24 24L14 21" />
                <circle cx="14" cy="14" r="4" />
                <circle cx="14" cy="14" r="11" />
            </svg>
        ),
        title: 'Satellite Intelligence',
        description: 'Ingest Planet Labs optical and Iceye SAR imagery. Monitor port activity, factory utilization, and inventory levels from orbit.',
        image: imgSatellite
    },
];

// Blue tones for company brand (#0969da based)
const SLICE_COLORS = [
    '#0a4a9b', '#0969da', '#218bff', '#54a3ff',
    '#0a4a9b', '#0969da', '#218bff', '#54a3ff',
];
// Active slice now white
const ACTIVE_COLOR = '#ffffff';

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = useCallback(() => {
        setActiveIndex(prev => (prev + 1) % features.length);
    }, []);

    const goPrev = useCallback(() => {
        setActiveIndex(prev => (prev - 1 + features.length) % features.length);
    }, []);

    const count = features.length;
    const sliceAngle = 360 / count;
    const activeFeat = features[activeIndex];

    // Build SVG pie slices
    const buildSlice = (index) => {
        const startAngle = index * sliceAngle - 90;
        const endAngle = startAngle + sliceAngle;
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        // Increased radius for larger wheel feeling
        const r = 58;
        const cx = 60, cy = 60; // Center offset to 60,60 to allow r=58

        const x1 = cx + r * Math.cos(startRad);
        const y1 = cy + r * Math.sin(startRad);
        const x2 = cx + r * Math.cos(endRad);
        const y2 = cy + r * Math.sin(endRad);
        const largeArc = sliceAngle > 180 ? 1 : 0;

        const d = `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`;

        const isActive = index === activeIndex;
        // Active slice is white, others are blue shades
        const fillColor = isActive ? ACTIVE_COLOR : SLICE_COLORS[index % SLICE_COLORS.length];
        // Content color: Blue if slice is active (white bg), White if slice is blue
        const contentColor = isActive ? '#0969da' : '#ffffff';

        // Calculate positions along the middle angle of the slice
        const midAngle = startAngle + sliceAngle / 2;
        const midRad = (midAngle * Math.PI) / 180;

        // Position for Icon (outer edge)
        const iconR = 48;
        const ix = cx + iconR * Math.cos(midRad);
        const iy = cy + iconR * Math.sin(midRad);

        // Position for Text (middle)
        const textR = 35;
        const tx = cx + textR * Math.cos(midRad);
        const ty = cy + textR * Math.sin(midRad);

        // Calculate rotation for text/icon to be readable
        let rotation = midAngle + 90;
        if (midAngle > 0 && midAngle < 180) {
            rotation += 180;
        }

        return (
            <g key={index} onClick={() => setActiveIndex(index)} style={{ cursor: 'pointer' }}>
                <path
                    d={d}
                    fill={fillColor}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                    className="pie-slice"
                />

                {/* Icon */}
                <g
                    transform={`translate(${ix}, ${iy}) rotate(${rotation})`}
                    style={{ pointerEvents: 'none', color: contentColor }}
                >
                    <g transform="translate(-3, -3) scale(0.25)">
                        {features[index].icon}
                    </g>
                </g>

                {/* Title label - multi-line support */}
                <text
                    x={tx}
                    y={ty}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={contentColor}
                    fontSize="2.8"
                    fontWeight="700"
                    transform={`rotate(${rotation}, ${tx}, ${ty})`}
                    style={{ pointerEvents: 'none', letterSpacing: '0.02em', textTransform: 'uppercase' }}
                >
                    {features[index].title.split(' ').map((word, i, arr) => (
                        <tspan key={i} x={tx} dy={i === 0 ? (arr.length > 1 ? "-1.2" : "0") : "3.5"}>
                            {word}
                        </tspan>
                    ))}
                </text>
            </g>
        );
    };

    return (
        <section className="section features-section" id="platform">
            <h2 className="pie-section-heading">DISCOVER MORE</h2>
            <div className="pie-carousel">
                {/* Left: Pie Wheel */}
                <div className="pie-wheel-container">
                    {/* ViewBox increased to 120x120 for larger radius */}
                    <svg className="pie-wheel-svg" viewBox="0 0 120 120">
                        {/* Outer ring glow/border */}
                        <circle cx="60" cy="60" r="59" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

                        {/* Slices */}
                        {features.map((_, i) => buildSlice(i))}

                        {/* Center circle */}
                        <circle cx="60" cy="60" r="18" fill="#ffffff" filter="url(#shadow)" />
                        <text x="60" y="56.5" textAnchor="middle" dominantBaseline="middle"
                            fill="#0969da" fontSize="3.5" fontWeight="800" letterSpacing="0.05em">
                            DISCOVER
                        </text>
                        <text x="60" y="61.5" textAnchor="middle" dominantBaseline="middle"
                            fill="#0969da" fontSize="3.5" fontWeight="800" letterSpacing="0.05em">
                            MORE
                        </text>

                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.2)" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Arrows below wheel */}
                    <div className="pie-arrows">
                        <button className="pie-arrow" onClick={goPrev} aria-label="Previous">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M15 18L9 12L15 6" />
                            </svg>
                        </button>
                        <button className="pie-arrow" onClick={goNext} aria-label="Next">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M9 6L15 12L9 18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right: Content Panel */}
                <div className="pie-content" key={activeIndex}>
                    <h3 className="pie-content-title">{activeFeat.title}</h3>

                    <div className="pie-content-visual">
                        {/* Display the Image instead of just the Icon */}
                        <img
                            src={activeFeat.image}
                            alt={activeFeat.title}
                            className="pie-visual-img"
                        />
                    </div>

                    <p className="pie-content-desc">{activeFeat.description}</p>

                    <button className="pie-know-more">Know More</button>
                </div>
            </div>
        </section>
    );
};

export default Features;
