import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.offsetWidth;
                this.y = Math.random() * canvas.offsetHeight;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.offsetWidth || this.y < 0 || this.y > canvas.offsetHeight) {
                    this.reset();
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 128, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 60; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            particles.forEach(p => { p.update(); p.draw(); });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(0, 128, 255, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <section className="hero-section" id="hero">
            <canvas ref={canvasRef} className="hero-particles" />
            <div className="hero-bg-gradient hero-bg-1" />
            <div className="hero-bg-gradient hero-bg-2" />
            <div className="bg-grid" />

            <div className="hero-content container">
                <div className="hero-text">
                    <div className="section-label">
                        <span className="dot"></span>
                        Supply Chain Intelligence
                    </div>
                    <h1 className="hero-title">
                        <span className="gradient-text-white">Front-End Clarity.</span>
                        <br />
                        <span className="gradient-text">Back-End Omniscience.</span>
                    </h1>
                    <p className="hero-description">
                        VIGIL maps your entire supply chain — every tier, every route, every risk —
                        in real time. AI-powered autonomous agents predict disruptions before they happen
                        and reroute shipments automatically.
                    </p>
                    <div className="hero-actions">
                        <a href="#cta" className="btn-primary">
                            Request Demo
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a>
                        <a href="#how-it-works" className="btn-secondary">
                            See How It Works
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">50+</span>
                            <span className="stat-label">Data Sources</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-value">&lt;200ms</span>
                            <span className="stat-label">Latency</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-value">99.9%</span>
                            <span className="stat-label">Uptime SLA</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-dashboard">
                        {/* Simulated Dashboard */}
                        <div className="dash-header">
                            <div className="dash-dots">
                                <span style={{ background: '#ff5f57' }}></span>
                                <span style={{ background: '#ffbd2e' }}></span>
                                <span style={{ background: '#28ca42' }}></span>
                            </div>
                            <span className="dash-title">VIGIL Command Center</span>
                            <div className="dash-status">
                                <span className="status-dot live"></span>
                                LIVE
                            </div>
                        </div>
                        <div className="dash-body">
                            {/* Mini world map */}
                            <div className="dash-map">
                                <svg viewBox="0 0 400 200" className="world-map-svg">
                                    {/* Simplified continents */}
                                    <ellipse cx="200" cy="100" rx="180" ry="85" fill="none" stroke="rgba(0,128,255,0.1)" strokeWidth="0.5" />
                                    {/* Supply chain nodes */}
                                    <circle cx="100" cy="120" r="4" fill="#0080ff" className="node-pulse" />
                                    <circle cx="160" cy="80" r="3" fill="#00d4ff" className="node-pulse" style={{ animationDelay: '0.5s' }} />
                                    <circle cx="250" cy="90" r="5" fill="#0080ff" className="node-pulse" style={{ animationDelay: '1s' }} />
                                    <circle cx="310" cy="110" r="3" fill="#00e68a" className="node-pulse" style={{ animationDelay: '0.3s' }} />
                                    <circle cx="80" cy="85" r="3" fill="#ffb020" className="node-pulse" style={{ animationDelay: '0.7s' }} />
                                    {/* Routes */}
                                    <path d="M100,120 Q130,60 160,80" stroke="rgba(0,128,255,0.3)" strokeWidth="1" fill="none" strokeDasharray="4,4">
                                        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
                                    </path>
                                    <path d="M160,80 Q200,50 250,90" stroke="rgba(0,212,255,0.3)" strokeWidth="1" fill="none" strokeDasharray="4,4">
                                        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2.5s" repeatCount="indefinite" />
                                    </path>
                                    <path d="M250,90 Q280,80 310,110" stroke="rgba(0,230,138,0.3)" strokeWidth="1" fill="none" strokeDasharray="4,4">
                                        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.8s" repeatCount="indefinite" />
                                    </path>
                                </svg>
                                <div className="map-label" style={{ top: '55%', left: '20%' }}>São Paulo</div>
                                <div className="map-label" style={{ top: '30%', left: '38%' }}>Rotterdam</div>
                                <div className="map-label" style={{ top: '35%', left: '60%' }}>Shanghai</div>
                                <div className="map-label" style={{ top: '50%', left: '75%' }}>Tokyo</div>
                            </div>
                            {/* Metrics row */}
                            <div className="dash-metrics">
                                <div className="metric-card">
                                    <div className="metric-icon risk">⚠</div>
                                    <div>
                                        <div className="metric-value">3</div>
                                        <div className="metric-label">Active Risks</div>
                                    </div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-icon ok">✓</div>
                                    <div>
                                        <div className="metric-value">847</div>
                                        <div className="metric-label">Shipments</div>
                                    </div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-icon savings">$</div>
                                    <div>
                                        <div className="metric-value">$47K</div>
                                        <div className="metric-label">Saved Q4</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Scan line effect */}
                        <div className="dash-scanline" />
                    </div>

                    {/* Floating alert cards */}
                    <div className="floating-alert alert-1">
                        <div className="alert-icon risk">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1L13 12H1L7 1Z" /></svg>
                        </div>
                        <div>
                            <div className="alert-title">Port Congestion Detected</div>
                            <div className="alert-sub">Shanghai — ETA +3.2 days</div>
                        </div>
                    </div>

                    <div className="floating-alert alert-2">
                        <div className="alert-icon ok">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M2 7L5.5 10.5L12 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
                        </div>
                        <div>
                            <div className="alert-title">Auto-Reroute Complete</div>
                            <div className="alert-sub">Saved $12.4K via Busan</div>
                        </div>
                    </div>

                    <div className="floating-alert alert-3">
                        <div className="alert-icon carbon">
                            <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M7 4V8L9 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                        </div>
                        <div>
                            <div className="alert-title">Carbon Score Updated</div>
                            <div className="alert-sub">Route CF: 12.3t CO₂ (−18%)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
