import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 4000);
            setEmail('');
        }
    };

    return (
        <section className="section cta-section" id="cta">
            <div className="cta-bg-glow cta-glow-1" />
            <div className="cta-bg-glow cta-glow-2" />
            <div className="container">
                <div className="cta-card animate-on-scroll">
                    <div className="cta-grid-lines" />
                    <div className="cta-content">
                        <div className="section-label">
                            <span className="dot"></span>
                            Get Started
                        </div>
                        <h2 className="cta-title">
                            See <span className="gradient-text">RevoGlobal</span> in Action
                        </h2>
                        <p className="cta-description">
                            Schedule a personalized demo and see how RevoGlobal can map your supply chain,
                            identify risks, and start saving you money — in under 30 minutes.
                        </p>

                        <form className="cta-form" onSubmit={handleSubmit}>
                            <div className="cta-input-group">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="cta-input"
                                    required
                                />
                                <button type="submit" className="btn-primary cta-submit">
                                    {submitted ? (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                            Submitted!
                                        </>
                                    ) : (
                                        <>
                                            Request Demo
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="cta-trust">
                            <span className="trust-label">Trusted by supply chain teams at</span>
                            <div className="trust-logos">
                                {['Fortune 500 Manufacturers', 'Global Logistics Providers', 'Automotive OEMs', 'Retail Giants'].map((name, i) => (
                                    <span key={i} className="trust-logo">{name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
