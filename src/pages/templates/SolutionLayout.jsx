import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { solutionsData } from '../../data/solutionsData';
import './SolutionLayout.css';

const SolutionLayout = () => {
    const { slug } = useParams();
    const data = solutionsData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="solution-page">
            <Header />

            {/* Hero Section */}
            <section className="sol-hero">
                <div className="sol-hero-bg">
                    <img src={data.heroImage} alt={data.title} />
                    <div className="sol-hero-overlay"></div>
                </div>
                <div className="sol-hero-content">
                    <span className="sol-badge">Solution</span>
                    <h1>{data.title}</h1>
                    <p className="sol-subtitle">{data.subtitle}</p>
                    <p className="sol-desc">{data.description}</p>
                    <div className="sol-actions">
                        <Link to="/login" className="btn-primary">Get Started</Link>
                        <a href="#features" className="btn-secondary">Explore Capabilities</a>
                    </div>
                </div>
            </section>

            {/* Stats Section (if available) */}
            {data.stats && (
                <section className="sol-stats">
                    <div className="sol-stats-grid">
                        {data.stats.map((stat, i) => (
                            <div key={i} className="sol-stat-item">
                                <span className="sol-stat-value">{stat.value}</span>
                                <span className="sol-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Features Grid */}
            <section id="features" className="sol-features">
                <div className="sol-container">
                    <h2>Key Capabilities</h2>
                    <div className="sol-feature-grid">
                        {data.features.map((feat, i) => (
                            <div key={i} className="sol-feat-card">
                                <div className="sol-feat-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <h3>{feat.title}</h3>
                                <p>{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default SolutionLayout;
