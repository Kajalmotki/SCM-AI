import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        setTimeout(() => {
            if (email === 'admin@vigil.ai' && password === 'demo123') {
                navigate('/dashboard');
            } else {
                setError('Invalid credentials. Use admin@vigil.ai / demo123');
                setLoading(false);
            }
        }, 800);
    };

    return (
        <div className="login-page">
            {/* Left Panel - Branding */}
            <div className="login-branding">
                <div className="branding-content">
                    <div className="brand-logo">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
                            <path d="M12 28L20 12L28 28H12Z" fill="white" fillOpacity="0.9" />
                            <circle cx="20" cy="22" r="3" fill="rgba(0,0,0,0.3)" />
                            <defs>
                                <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
                                    <stop stopColor="#8b5cf6" />
                                    <stop offset="1" stopColor="#6366f1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="brand-name">RevoGlobal</span>
                    </div>
                    <h1 className="brand-headline">
                        Value Chain<br />
                        <span className="highlight">Command Center</span>
                    </h1>
                    <p className="brand-desc">
                        Monitor your entire supply chain. Track compliance, classify products, and optimize duties — all from one platform.
                    </p>

                    <div className="brand-stats">
                        <div className="stat">
                            <div className="stat-value">500M+</div>
                            <div className="stat-label">Companies Mapped</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">180+</div>
                            <div className="stat-label">Countries</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">99.7%</div>
                            <div className="stat-label">Classification Accuracy</div>
                        </div>
                    </div>
                </div>

                <div className="branding-bg-effects">
                    <div className="bg-circle c1"></div>
                    <div className="bg-circle c2"></div>
                    <div className="bg-grid-overlay"></div>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="login-form-panel">
                <div className="login-form-container">
                    <div className="form-header">
                        <h2>Welcome back</h2>
                        <p>Sign in to your RevoGlobal dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="admin@vigil.ai"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <div className="label-row">
                                <label htmlFor="password">Password</label>
                                <a href="#" className="forgot-link">Forgot password?</a>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="demo123"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div className="form-error">{error}</div>}

                        <button type="submit" className="login-btn" disabled={loading}>
                            {loading ? (
                                <span className="spinner"></span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    <div className="form-divider">
                        <span>or continue with</span>
                    </div>

                    <div className="sso-options">
                        <button className="sso-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                            Google
                        </button>
                        <button className="sso-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6L12.6 0H24v11.4L11.4 24zM2 22h8.6L22 10.6V2H13.4L2 13.4V22z" fill="#00A4EF" /></svg>
                            Microsoft SSO
                        </button>
                    </div>

                    <div className="form-footer">
                        <p>Test credentials: <code>admin@vigil.ai</code> / <code>demo123</code></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
