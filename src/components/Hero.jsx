import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            {/* Full-window video background */}
            <div className="hero-video-wrap">
                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster=""
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    See the world's<br />
                    supply chains.
                </h1>
                <p className="hero-description">
                    RevoGlobal is the first and only Value Chain Management System — a dynamic
                    map of the global economy that enables organizations to see, understand,
                    and act across their extended value chains.
                </p>
                <div className="hero-actions">
                    <a href="#cta" className="hero-cta-btn">
                        See RevoGlobal in Action
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
