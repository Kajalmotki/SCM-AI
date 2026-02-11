import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './News.css';

const News = () => {
    const articles = [
        {
            id: 1,
            category: 'Corporate',
            date: 'October 24, 2025',
            title: 'RevoGlobal Raises $150M Series B to Scale Autonomous Supply Chain Agents',
            excerpt: 'The funding will accelerate the development of our flagship VIGIL platform and expand our global footprint in defense and logistics sectors.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 2,
            category: 'Product',
            date: 'September 12, 2025',
            title: 'Introducing Carbon Intelligence: Real-time Scope 3 Emissions Tracking',
            excerpt: 'New module allows enterprises to track carbon usage at the container level, integrating directly with customs data to ensure ESG compliance.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
        },
        {
            id: 3,
            category: 'Partnership',
            date: 'August 08, 2025',
            title: 'US Customs & Border Protection Partners with RevoGlobal for Uyghur Forced Labor Enforcement',
            excerpt: 'Strategic partnership aims to digitize supply chain mapping for simpler, faster, and more accurate UFLPA entity list screening.',
            image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2000&auto=format&fit=crop'
        },
        {
            id: 4,
            category: 'Research',
            date: 'July 15, 2025',
            title: 'Report: The State of Global Supply Chain Resilience 2025',
            excerpt: 'Our annual report analyzes over 500 million shipments to identify critical vulnerabilities in the pharmaceutical and semiconductor supply chains.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <div className="news-page">
            <Header />

            <main className="news-content">
                <section className="news-hero">
                    <div className="news-hero-content">
                        <span className="news-badge">Newsroom</span>
                        <h1>Building the future of <br /> Intelligent Supply Chains.</h1>
                        <p>Latest updates, press releases, and insights from the RevoGlobal team.</p>
                    </div>
                </section>

                <section className="news-grid-section">
                    <div className="news-grid">
                        {articles.map(article => (
                            <article key={article.id} className="news-card">
                                <div className="news-card-img">
                                    <img src={article.image} alt={article.title} />
                                    <span className="news-cat">{article.category}</span>
                                </div>
                                <div className="news-card-body">
                                    <span className="news-date">{article.date}</span>
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <a href="#" className="news-link">Read Story &rarr;</a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="load-more-wrap">
                        <button className="btn-secondary">Load More Articles</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default News;
