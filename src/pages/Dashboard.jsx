import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardOverview from './dashboard/DashboardOverview';
import CustomsEnforcement from './dashboard/CustomsEnforcement';
import ProductPassports from './dashboard/ProductPassports';
import CatalogView from './dashboard/CatalogView';
import ValueChains from './dashboard/ValueChains';
import WorkspacesView from './dashboard/WorkspacesView';
import CounterNarcotics from './dashboard/CounterNarcotics';
import './Dashboard.css';

const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'workspaces', label: 'Workspaces', icon: '📁' },
    { id: 'passports', label: 'Passports', icon: '📋' },
    { id: 'requests', label: 'Requests', icon: '📨' },
    { id: 'catalog', label: 'Catalog', icon: '📦' },
    { id: 'dashboards', label: 'Dashboards', icon: '📊' },
    { id: 'explorations', label: 'Explorations', icon: '🔍' },
    { id: 'search', label: 'Search', icon: '🔎' },
];

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const navigate = useNavigate();

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <DashboardOverview />;
            case 'workspaces':
                return <WorkspacesView />;
            case 'passports':
                return <ProductPassports />;
            case 'catalog':
                return <CatalogView />;
            case 'dashboards':
                return <CustomsEnforcement />;
            case 'explorations':
                return <ValueChains />;
            case 'search':
                return <CounterNarcotics />;
            default:
                return (
                    <div className="dash-placeholder">
                        <div className="placeholder-icon">🚧</div>
                        <h3>Coming Soon</h3>
                        <p>This module is under development.</p>
                    </div>
                );
        }
    };

    return (
        <div className={`dashboard-layout ${sidebarCollapsed ? 'collapsed' : ''}`}>
            {/* Sidebar */}
            <aside className="dash-sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="10" fill="url(#lg)" />
                            <path d="M12 28L20 12L28 28H12Z" fill="white" fillOpacity="0.9" />
                            <circle cx="20" cy="22" r="3" fill="rgba(0,0,0,0.3)" />
                            <defs>
                                <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40">
                                    <stop stopColor="#8b5cf6" />
                                    <stop offset="1" stopColor="#6366f1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        {!sidebarCollapsed && <span className="sidebar-brand">RevoGlobal</span>}
                    </div>
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    >
                        {sidebarCollapsed ? '☰' : '✕'}
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`sidebar-link ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                            title={item.label}
                        >
                            <span className="link-icon">{item.icon}</span>
                            {!sidebarCollapsed && <span className="link-label">{item.label}</span>}
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button
                        className="sidebar-link logout-link"
                        onClick={() => navigate('/login')}
                        title="Sign Out"
                    >
                        <span className="link-icon">🚪</span>
                        {!sidebarCollapsed && <span className="link-label">Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="dash-main">
                {/* Top Bar */}
                <header className="dash-topbar">
                    <div className="topbar-left">
                        <h2 className="topbar-title">
                            {navItems.find(n => n.id === activeTab)?.label || 'Dashboard'}
                        </h2>
                    </div>
                    <div className="topbar-right">
                        <div className="topbar-search">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                            <input type="text" placeholder="Search products, suppliers..." />
                        </div>
                        <button className="topbar-icon-btn">
                            <span>🔔</span>
                            <span className="notif-dot"></span>
                        </button>
                        <div className="topbar-avatar">
                            <div className="avatar-circle">A</div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="dash-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
