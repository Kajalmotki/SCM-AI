import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const dropdowns = {
        Solutions: {
            columns: [
                {
                    title: 'By Industry',
                    links: [
                        { label: 'Government & Defense', href: '/solutions/government' },
                        { label: 'Enterprise Brands', href: '/solutions/enterprise' },
                        { label: 'Logistics Service Providers', href: '/solutions/logistics' },
                        { label: 'Financial Institutions', href: '/solutions/finance' },
                    ],
                },
                {
                    title: 'By Capability',
                    links: [
                        { label: 'Trade Compliance', href: '/solutions/compliance' },
                        { label: 'Supply Chain Resilience', href: '/solutions/resilience' },
                        { label: 'Forced Labor Prevention', href: '/solutions/esg' },
                        { label: 'Carbon Footprint', href: '/solutions/carbon' },
                    ],
                },
            ],
            visualType: 'grid', // 4-grid
        },
        About: {
            columns: [
                {
                    title: 'Company',
                    links: [
                        { label: 'Our Story', href: '/about#story' },
                        { label: 'Leadership', href: '/about#team' },
                        { label: 'Careers', href: '/careers' },
                        { label: 'Press & News', href: '/news' },
                    ],
                },
                {
                    title: 'Contact',
                    links: [
                        { label: 'Contact Sales', href: '/about' },
                        { label: 'Support', href: '/about' },
                        { label: 'Office Locations', href: '/about#locations' },
                    ],
                },
            ],
            visualType: 'image', // Single large image
        },
        Resources: {
            columns: [
                {
                    title: 'Knowledge Hub',
                    links: [
                        { label: 'News & Press', href: '/news' },
                        { label: 'Guides & Research', href: '/resources' },
                        { label: 'Insights', href: '/resources' },
                        { label: 'Case Studies', href: '/resources' },
                        { label: 'Academy', href: '/resources' },
                    ],
                },
            ],
            visualType: 'grid',
        },
    };

    return (
        <>
            {/* Mega-menu backdrop overlay */}
            {activeDropdown && (
                <div
                    className="mega-backdrop"
                    onMouseEnter={() => setActiveDropdown(null)}
                />
            )}

            <header className={`vigil-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-inner">
                    <a href="#" className="header-logo" aria-label="RevoGlobal Home">
                        <div className="logo-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
                                <ellipse cx="16" cy="16" rx="5" ry="7" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
                                <circle cx="16" cy="16" r="2.5" fill="url(#logoGrad)" />
                                <defs>
                                    <linearGradient id="logoGrad" x1="4" y1="4" x2="28" y2="28">
                                        <stop offset="0%" stopColor="#0080ff" />
                                        <stop offset="100%" stopColor="#00d4ff" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className="logo-text">RevoGlobal</span>
                    </a>

                    <nav className={`header-nav ${mobileOpen ? 'open' : ''}`}>
                        {/* Platform — simple link */}
                        <a
                            href="#platform"
                            className="nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            Platform
                        </a>

                        {/* Dropdown items */}
                        {Object.entries(dropdowns).map(([label, data]) => (
                            <div
                                key={label}
                                className={`nav-dropdown-wrap ${activeDropdown === label ? 'active' : ''}`}
                                onMouseEnter={() => setActiveDropdown(label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="nav-link nav-dropdown-trigger">
                                    {label}
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                        <path d="M2.5 4L5 6.5L7.5 4" />
                                    </svg>
                                </button>

                                {/* Mega Menu Panel */}
                                <div className="mega-menu">
                                    <div className="mega-inner">
                                        <div className="mega-links">
                                            {data.columns.map((col, ci) => (
                                                <div key={ci} className="mega-col">
                                                    <span className="mega-col-title">{col.title}</span>
                                                    {col.links.map((link, li) => (
                                                        <a
                                                            key={li}
                                                            href={link.href}
                                                            className="mega-link"
                                                            onClick={() => {
                                                                setActiveDropdown(null);
                                                                setMobileOpen(false);
                                                            }}
                                                        >
                                                            {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Dynamic Visuals */}
                                        <div className="mega-visual">
                                            {data.visualType === 'grid' ? (
                                                <>
                                                    <div className="mega-grid-img"></div>
                                                    <div className="mega-grid-img"></div>
                                                    <div className="mega-grid-img"></div>
                                                    <div className="mega-grid-img"></div>
                                                </>
                                            ) : (
                                                <div className="mega-single-img">
                                                    <div className="mega-img-overlay">
                                                        <span className="mega-img-tag">News</span>
                                                        <p className="mega-img-text">RevoGlobal raises Series B to expand AI network.</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* LinkedIn icon */}
                                    <div className="mega-social">
                                        <a href="#" aria-label="LinkedIn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <Link to="/login" className="btn-secondary header-cta" style={{ padding: '10px 20px', fontSize: '0.8125rem' }}>
                            Login
                        </Link>
                        <a href="#cta" className="header-cta-primary">
                            See RevoGlobal in Action
                            <span className="cta-arrow">
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M3 8h10M8 3l5 5-5 5" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <button
                        className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
