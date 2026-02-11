import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Header />

            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>We are the nervous system of global trade.</h1>
                    <p>RevoGlobal maps the world's supply chain in real-time to make it resilient, ethical, and sustainable.</p>
                </div>
            </section>

            {/* Story Section */}
            <section id="story" className="about-section">
                <div className="about-container grid-2">
                    <div className="about-text">
                        <span className="about-label">Our Story</span>
                        <h2>Born from Chaos. Built for Resilience.</h2>
                        <p>In 2020, the world learned a hard lesson: global supply chains were fragile. One disruption could stop the world. Essential medicines, microchips, and food supplies were stalled.</p>
                        <p>We built RevoGlobal to fix this permanently. By combining public customs records, satellite imagery, and corporate relationship data into a single knowledge graph, we created the first true map of the global economy.</p>
                    </div>
                    <div className="about-img">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Global Network" />
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section id="team" className="about-section dark-bg">
                <div className="about-container">
                    <div className="section-header">
                        <span className="about-label">Leadership</span>
                        <h2>Meet the Team</h2>
                    </div>
                    <div className="team-grid">
                        {[
                            { name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop' },
                            { name: 'Marcus Sterling', role: 'CTO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop' },
                            { name: 'Elena Rodriguez', role: 'Head of AI', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
                            { name: 'David Kim', role: 'VP of Global Trade', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' }
                        ].map((member, i) => (
                            <div key={i} className="team-card">
                                <div className="team-img">
                                    <img src={member.img} alt={member.name} />
                                </div>
                                <h3>{member.name}</h3>
                                <span className="team-role">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offices */}
            <section id="locations" className="about-section">
                <div className="about-container">
                    <div className="section-header">
                        <span className="about-label">Global Presence</span>
                        <h2>Our Offices</h2>
                    </div>
                    <div className="office-grid">
                        {[
                            { city: 'New York', address: '1 World Trade Center, Suite 4500' },
                            { city: 'London', address: '30 St Mary Axe, The Gherkin' },
                            { city: 'Singapore', address: 'Marina Bay Financial Centre' },
                            { city: 'San Francisco', address: 'Salesforce Tower, 415 Mission St' }
                        ].map((office, i) => (
                            <div key={i} className="office-card">
                                <h3>{office.city}</h3>
                                <p>{office.address}</p>
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

export default About;
