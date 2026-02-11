import React, { useState, useEffect, useRef } from 'react';
import './AtlasAI.css';

const AtlasAI = () => {
    const [activeDemo, setActiveDemo] = useState('classification');
    const [chatMessages, setChatMessages] = useState([]);
    const [showHeimdallTyping, setShowHeimdallTyping] = useState(false);
    const chatEndRef = useRef(null);

    const classificationDemo = activeDemo === 'classification';

    /* Animate chat messages one by one */
    useEffect(() => {
        if (activeDemo !== 'chat') return;

        const msgs = [
            { id: 1, type: 'system', text: 'John S. added Emma (Olympus Traders) to the Heimdall session', time: '12:22 PM EST' },
            { id: 2, type: 'user', name: 'John', avatar: 'J', text: '@Emma I\'m not sure if this jacket is denim or corduroy. Can you help out?', time: '12:22 PM EST' },
            { id: 3, type: 'reply', name: 'Emma', avatar: 'E', text: 'Denim', time: '12:27 PM EST' },
            { id: 4, type: 'heimdall', text: '' },
        ];

        const timers = [];
        msgs.forEach((msg, i) => {
            timers.push(setTimeout(() => {
                if (msg.type === 'heimdall') {
                    setShowHeimdallTyping(true);
                } else {
                    setChatMessages(prev => [...prev, msg]);
                }
            }, (i + 1) * 900));
        });

        return () => timers.forEach(clearTimeout);
    }, [activeDemo]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages, showHeimdallTyping]);

    return (
        <section className="atlas-section" id="atlas">
            <div className="atlas-container">
                {/* Left — Text Content */}
                <div className="atlas-text animate-on-scroll">
                    <span className="atlas-label">AI-assisted workflows</span>
                    <h2 className="atlas-heading">
                        Meet <span className="atlas-highlight">Heimdall</span>, your AI assistant for managing global trade
                    </h2>
                    <p className="atlas-desc">
                        Heimdall helps you navigate the complexity of global trade by connecting the dots between trade relationships and providing critical insights. It's always ready to help you with your most important tasks.
                    </p>
                    <ul className="atlas-features">
                        <li>
                            <span className="atlas-bullet">•</span>
                            Structure and connect data across networks.
                        </li>
                        <li>
                            <span className="atlas-bullet">•</span>
                            Automate traceability and request management.
                        </li>
                        <li>
                            <span className="atlas-bullet">•</span>
                            Classify products and calculate duties.
                        </li>
                    </ul>
                </div>

                {/* Right — Interactive Demo */}
                <div className="atlas-demo animate-on-scroll">
                    {/* Toggle Buttons */}
                    <div className="atlas-demo-toggle">
                        <button
                            className={`demo-toggle-btn ${classificationDemo ? 'active' : ''}`}
                            onClick={() => setActiveDemo('classification')}
                        >
                            Classification
                        </button>
                        <button
                            className={`demo-toggle-btn ${!classificationDemo ? 'active' : ''}`}
                            onClick={() => {
                                setActiveDemo('chat');
                                setChatMessages([]);
                                setShowHeimdallTyping(false);
                            }}
                        >
                            Collaboration
                        </button>
                    </div>

                    {/* Classification Demo */}
                    {classificationDemo && (
                        <div className="atlas-classification">
                            {/* Product Header */}
                            <div className="ac-product-header">
                                <div className="ac-product-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#64748b" strokeWidth="1.5">
                                        <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
                                        <path d="M3 7l9 4m0 0l9-4m-9 4v10" />
                                    </svg>
                                </div>
                                <span className="ac-product-name">Sherpa Flight Jacket</span>
                            </div>

                            {/* Tabs */}
                            <div className="ac-tabs">
                                <button className="ac-tab">Details</button>
                                <button className="ac-tab active">Classification</button>
                            </div>

                            {/* Heimdall Section */}
                            <div className="ac-atlas-section">
                                <div className="ac-atlas-header">
                                    <svg className="ac-atlas-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0f172a" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
                                    </svg>
                                    <span className="ac-atlas-title">Heimdall</span>
                                </div>
                                <p className="ac-atlas-desc">
                                    Heimdall can help identify this product and get a more accurate classification
                                </p>
                                <button className="ac-ask-atlas-btn">Ask Heimdall</button>
                            </div>

                            {/* Chapter Section */}
                            <div className="ac-chapter-section">
                                <div className="ac-chapter-header">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#f59e0b" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                    <span>Chapter 62</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Chat Demo */}
                    {!classificationDemo && (
                        <div className="atlas-chat-demo">
                            <div className="acd-messages">
                                {chatMessages.map((msg) => {
                                    if (msg.type === 'system') {
                                        return (
                                            <div className="acd-system" key={msg.id}>
                                                <span>{msg.text}</span>
                                                <span className="acd-time">{msg.time}</span>
                                            </div>
                                        );
                                    }
                                    if (msg.type === 'user') {
                                        return (
                                            <div className="acd-msg user" key={msg.id}>
                                                <div className="acd-bubble user">
                                                    <p>{msg.text}</p>
                                                    <span className="acd-time">{msg.time}</span>
                                                </div>
                                                <div className="acd-avatar user">{msg.avatar}</div>
                                            </div>
                                        );
                                    }
                                    if (msg.type === 'reply') {
                                        return (
                                            <div className="acd-msg reply" key={msg.id}>
                                                <div className="acd-avatar reply">{msg.avatar}</div>
                                                <div className="acd-reply-content">
                                                    <span className="acd-sender">{msg.name}</span>
                                                    <div className="acd-bubble reply">
                                                        <p>{msg.text}</p>
                                                        <span className="acd-time">{msg.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}

                                {showHeimdallTyping && (
                                    <div className="acd-msg heimdall">
                                        <div className="acd-avatar heimdall">
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="1.5">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M2 12h20" />
                                            </svg>
                                        </div>
                                        <div className="acd-reply-content">
                                            <span className="acd-sender">Heimdall</span>
                                            <div className="acd-typing">
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={chatEndRef} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AtlasAI;
