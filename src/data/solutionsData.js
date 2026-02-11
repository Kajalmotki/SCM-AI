// Data for all Solution and Industry pages
export const solutionsData = {
    // === INDUSTRIES ===

    // Government
    'government': {
        title: 'VIGIL for Government & Defense',
        subtitle: 'Secure Supply Chain Sovereignty',
        description: 'Empower national security with AI-driven visibility into critical mineral dependencies, dual-use technology flows, and foreign adversary influence in global supply networks.',
        heroImage: 'https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=2070&auto=format&fit=crop',
        features: [
            {
                title: 'Strategic Mineral Mapping',
                desc: 'Trace cobalt, lithium, and rare earth elements from mine to missile. Identify choke points and sole-source vulnerabilities instantly.'
            },
            {
                title: 'UFLPA Enforcement',
                desc: 'Automated entity screening against the UFLPA Entity List. Visualize tier-n relationships to sanctioned entities with 99.9% accuracy.'
            },
            {
                title: 'Defense Industrial Base',
                desc: 'Map the sub-tier suppliers of prime contractors. Ensure resilience in the production of critical weapons systems and infrastructure.'
            }
        ],
        stats: [
            { value: '100%', label: 'Tier-N Visibility' },
            { value: '500M+', label: 'Shipments Tracked' },
            { value: '24/7', label: 'Threat Monitoring' }
        ]
    },

    // Enterprise
    'enterprise': {
        title: 'VIGIL for Enterprise Brands',
        subtitle: 'Resilience at Global Scale',
        description: 'Protect your brand reputation and bottom line. Gain sub-tier visibility to predict disruptions, ensure ESG compliance, and optimize logistics spend.',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        features: [
            {
                title: 'Sub-Tier Visibility',
                desc: 'See beyond your direct suppliers. Map your entire value chain to the raw material level to uncover hidden risks.'
            },
            {
                title: 'Brand Protection',
                desc: 'Prevent forced labor and environmental violations in your upstream supply chain before they become headlines.'
            },
            {
                title: 'Inventory Optimization',
                desc: 'AI agents predict delays and suggest buffer stock adjustments, reducing working capital while maintaining service levels.'
            }
        ],
        stats: [
            { value: '$2B+', label: 'Risk Mitigated' },
            { value: '40%', label: 'Faster Response' },
            { value: 'Zero', label: 'Compliance Fines' }
        ]
    },

    // Logistics
    'logistics': {
        title: 'VIGIL for Logistics Providers',
        subtitle: 'The Future of Freight Forwarding',
        description: 'Differentiate your service with AI-powered visibility. Offer your customers proactive risk management and carbon tracking alongside standard freight movement.',
        heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        features: [
            {
                title: 'Value-Added Services',
                desc: 'Upsell trade compliance and risk monitoring services directly within your customer portal using our white-label API.'
            },
            {
                title: 'Route Optimization',
                desc: 'Dynamic routing based not just on cost and speed, but on geopolitical risk, port congestion, and carbon impact.'
            },
            {
                title: 'Automated Compliance',
                desc: 'Streamline customs clearance with automated HS code classification and document generation.'
            }
        ],
        stats: [
            { value: '15%', label: 'Margin Increase' },
            { value: '3x', label: 'Customer Retention' },
            { value: 'Global', label: 'Network Coverage' }
        ]
    },

    // Finance
    'finance': {
        title: 'VIGIL for Financial Institutions',
        subtitle: 'De-Risk Trade Finance',
        description: 'Lend with confidence. validate the physical reality of trade transactions, monitor borrower supply chain health, and automate ESG reporting for sustainable finance.',
        heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop',
        features: [
            {
                title: 'Fraud Prevention',
                desc: 'Detect double-financing and phantom shipments by verifying trade data against independent satellite and customs records.'
            },
            {
                title: 'ESG Scoring',
                desc: 'Automated ESG scoring of borrowers\' supply chains to meet Green Bond and sustainability-linked loan requirements.'
            },
            {
                title: 'Credit Risk Monitoring',
                desc: 'Early warning system for borrower disruptions. Know when a key supplier strike or factory fire affects repayment ability.'
            }
        ],
        stats: [
            { value: '90%', label: 'Fraud Reduction' },
            { value: 'Automated', label: 'ESG Reporting' },
            { value: 'Real-Time', label: 'Collateral Tracking' }
        ]
    },

    // === CAPABILITIES ===

    // Compliance
    'compliance': {
        title: 'Trade Compliance & Tariffs',
        subtitle: 'Automate Global Trade Governance',
        description: 'Navigate the complex web of global sanctions, tariffs, and export controls with AI. Ensure every shipment is compliant before it leaves the dock.',
        heroImage: 'https://images.unsplash.com/photo-1554224154-260327c00c4b?q=80&w=2069&auto=format&fit=crop',
        features: [
            {
                title: 'HS Code Classification',
                desc: 'AI suggests accurate HS codes based on product descriptions and images, reducing classification errors and duty overpayments.'
            },
            {
                title: 'Denied Party Screening',
                desc: 'Screen every counterparty and their beneficial owners against 500+ global watchlists in real-time.'
            },
            {
                title: 'Duty Optimization',
                desc: 'Identify opportunities for duty drawback and free trade agreement utilization to lower landed costs.'
            }
        ]
    },

    // Resilience
    'resilience': {
        title: 'Supply Chain Resilience',
        subtitle: 'Bounce Back Faster',
        description: 'Build a supply chain that bends but doesn\'t break. Model scenarios, identify single points of failure, and activate backup plans instantly.',
        heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        features: [
            {
                title: 'Digital Twin',
                desc: 'Create a living digital twin of your supply network to run "what-if" simulations for pandemics, strikes, and natural disasters.'
            },
            {
                title: 'Supplier Diversification',
                desc: 'AI recommends qualified alternative suppliers in low-risk regions to reduce dependency on single sources.'
            },
            {
                title: 'Inventory Balancing',
                desc: 'Optimize safety stock placement across your network to ensure fulfillment continuity during disruptions.'
            }
        ]
    },

    // ESG / Forced Labor
    'esg': {
        title: 'Forced Labor Prevention',
        subtitle: 'Ethical Sourcing, Verified',
        description: 'The world\'s most advanced forced labor detection platform. Map your supply chain to the raw material to ensure no connection to Xinjiang or other high-risk regions.',
        heroImage: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop',
        features: [
            {
                title: 'UFLPA Entity Mapping',
                desc: 'Deep tier mapping reveals hidden connections to entities on the UFLPA Entity List and other forced labor watchlists.'
            },
            {
                title: 'Evidence Pack Generation',
                desc: 'Automatically generate the documentation needed to prove the admissibility of detained shipments to CBP.'
            },
            {
                title: 'Continuous Monitoring',
                desc: 'Receive alerts immediately if any supplier in your network is linked to adverse media regarding labor practices.'
            }
        ]
    },

    // Carbon
    'carbon': {
        title: 'Carbon Footprint Tracking',
        subtitle: 'Scope 3 Visibility',
        description: 'Measure, manage, and reduce your logistics emissions. comply with CSRD and SEC climate rules with granular, primary data.',
        heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
        features: [
            {
                title: 'Accurate Measurement',
                desc: 'Move beyond spend-based estimates. Calculate emissions based on actual vessel, route, and weight data (GLEC compliant).'
            },
            {
                title: 'Intermodal Optimization',
                desc: 'Compare the carbon impact of air vs. ocean vs. rail options instantly to make greener logistics decisions.'
            },
            {
                title: 'Supplier Benchmarking',
                desc: 'Rank your logistics providers and suppliers by their carbon intensity to drive decarbonization across the value chain.'
            }
        ]
    }
};
