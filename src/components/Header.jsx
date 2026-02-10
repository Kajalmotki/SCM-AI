import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Platform', href: '#platform' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Architecture', href: '#architecture' },
        { label: 'Integrations', href: '#integrations' },
    ];

    return (
        <header className={`vigil-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner container">
                <a href="#" className="header-logo" aria-label="VIGIL Home">
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
                    <span className="logo-text">VIGIL</span>
                </a>

                <nav className={`header-nav ${mobileOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="header-actions">
                    <a href="#cta" className="btn-primary header-cta">
                        Request Demo
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        </svg>
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
    );
};

export default Header;
