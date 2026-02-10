import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = {
        Platform: ['Features', 'Architecture', 'Integrations', 'Security', 'Pricing'],
        Solutions: ['Supply Chain Mapping', 'Risk Intelligence', 'Carbon Tracking', 'Autonomous Routing', 'Trade Compliance'],
        Resources: ['Documentation', 'API Reference', 'Case Studies', 'Blog', 'Webinars'],
        Company: ['About', 'Careers', 'Contact', 'Partners', 'Press'],
    };

    return (
        <footer className="vigil-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                                <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="url(#fLogo)" strokeWidth="1.5" fill="none" />
                                <ellipse cx="16" cy="16" rx="5" ry="7" stroke="url(#fLogo)" strokeWidth="1.5" fill="none" />
                                <circle cx="16" cy="16" r="2.5" fill="url(#fLogo)" />
                                <defs>
                                    <linearGradient id="fLogo" x1="4" y1="4" x2="28" y2="28">
                                        <stop offset="0%" stopColor="#0080ff" />
                                        <stop offset="100%" stopColor="#00d4ff" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="footer-logo-text">VIGIL</span>
                        </div>
                        <p className="footer-tagline">
                            Front-End Clarity.<br />Back-End Omniscience.
                        </p>
                        <div className="footer-socials">
                            {['LinkedIn', 'Twitter', 'GitHub'].map(s => (
                                <a key={s} href="#" className="social-link">{s}</a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        {Object.entries(links).map(([category, items]) => (
                            <div key={category} className="footer-col">
                                <h4 className="footer-col-title">{category}</h4>
                                <ul className="footer-col-list">
                                    {items.map(item => (
                                        <li key={item}><a href="#">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <span className="footer-copyright">
                        © {year} VIGIL Technologies, Inc. All rights reserved.
                    </span>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
