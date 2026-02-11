import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import './About.css'; // Reuse About styles for simplicity

const Careers = () => {
    const jobs = [
        { title: 'Senior AI Engineer', dept: 'Engineering', loc: 'San Francisco, CA' },
        { title: 'Supply Chain Analyst', dept: 'Operations', loc: 'New York, NY' },
        { title: 'Product Manager, Compliance', dept: 'Product', loc: 'Remote' },
        { title: 'Account Executive', dept: 'Sales', loc: 'London, UK' },
    ];

    return (
        <div className="about-page">
            <Header />
            <section className="about-hero" style={{ height: '50vh' }}>
                <div className="about-hero-content">
                    <h1>Join the Mission</h1>
                    <p>Help us build the operating system for global trade.</p>
                </div>
            </section>

            <section className="about-section">
                <div className="about-container">
                    <div className="section-header" style={{ marginBottom: 60 }}>
                        <span className="about-label">Open Roles</span>
                        <h2>Current Openings</h2>
                    </div>

                    <div className="jobs-list" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {jobs.map((job, i) => (
                            <div key={i} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 8
                            }}>
                                <div>
                                    <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: 4 }}>{job.title}</h3>
                                    <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                                        <span style={{ marginRight: 16 }}>{job.dept}</span>
                                        <span>{job.loc}</span>
                                    </div>
                                </div>
                                <button className="btn-secondary">Apply Now</button>
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

export default Careers;
