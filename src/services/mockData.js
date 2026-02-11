import { faker } from '@faker-js/faker';

// --- Configuration ---
const SUPPLIER_COUNT = 50; // Generate 50+ suppliers to simulate scale
const RISK_PERCENTAGE = 0.2; // 20% of suppliers have some risk

// --- Strategic "Real" Data (Sanctions / Forced Labor) ---
// These are hardcoded to ensure specific searches (e.g. "Huawei") trigger the right flags.
const SANCTIONED_ENTITIES = [
    {
        name: 'Xinjiang Production and Construction Corps',
        country: 'China',
        riskType: 'Forced Labor (UFLPA)',
        notes: 'Entity identifying as a paramilitary organization.',
        source: 'OpenSanctions'
    },
    {
        name: 'Huawei Technologies Co., Ltd.',
        country: 'China',
        riskType: 'Trade Restriction (Entity List)',
        notes: 'Restricted from US technology exports.',
        source: 'BIS Entity List'
    },
    {
        name: 'Gazprom Neft',
        country: 'Russia',
        riskType: 'Sanctions (OFAC)',
        notes: 'Sectoral Sanctions Identifications List.',
        source: 'OFAC'
    },
    {
        name: 'Cobalt Refining Co.', // Generic name but keeping for existing demo flow
        country: 'DR Congo',
        riskType: 'ESG High Risk',
        notes: 'Potential child labor in upstream supply chain.',
        source: 'Human Rights Watch'
    }
];

// --- Helper Functions ---

const generateRiskProfile = (companyName) => {
    // Check if it's a known sanctioned entity
    const sanctionsMatch = SANCTIONED_ENTITIES.find(e => companyName.includes(e.name));
    if (sanctionsMatch) {
        return {
            isRisky: true,
            riskType: sanctionsMatch.riskType,
            details: sanctionsMatch.notes,
            source: sanctionsMatch.source
        };
    }

    // Otherwise, probabilistic risk generation
    const isRisky = Math.random() < RISK_PERCENTAGE;
    if (!isRisky) return { isRisky: false, riskType: null };

    const riskTypes = ['Financial Instability', 'Regulatory Warning', 'Environmental Violation', 'Labor Dispute'];
    return {
        isRisky: true,
        riskType: faker.helpers.arrayElement(riskTypes),
        details: faker.lorem.sentence(),
        source: 'AI Prediction'
    };
};

// --- Generators ---

export const generateSuppliers = (count = SUPPLIER_COUNT) => {
    const suppliers = [];

    // 1. Add known sanctioned entities first (for demo purposes)
    SANCTIONED_ENTITIES.forEach((entity, idx) => {
        suppliers.push({
            id: `S-${1000 + idx}`,
            name: entity.name,
            country: entity.country,
            type: 'Manufacturer',
            transactions: faker.number.int({ min: 100, max: 5000 }).toLocaleString(),
            risk: { isRisky: true, ...entity },
            selected: false,
            tier: 'Tier 2' // Assume these are deeper in the chain
        });
    });

    // 2. Generate random suppliers to fill the volume
    for (let i = 0; i < count; i++) {
        const companyName = faker.company.name();
        const country = faker.location.country();
        const riskProfile = generateRiskProfile(companyName);

        suppliers.push({
            id: faker.string.alphanumeric(6).toUpperCase(),
            name: companyName,
            country: country,
            type: faker.helpers.arrayElement(['Raw Materials', 'Component Manuf.', 'Assembly', 'Logistics']),
            transactions: faker.number.int({ min: 50, max: 10000 }).toLocaleString(), // e.g. "8,234"
            risk: riskProfile,
            selected: false,
            tier: faker.helpers.arrayElement(['Tier 1', 'Tier 2', 'Tier 3'])
        });
    }

    return suppliers;
};

export const generateValueChainGraph = (rootProduct) => {
    // Generate a consistent graph structure for the "Smartphone" demo
    return {
        root: {
            id: '620342', // Keeping original ID for consistency
            name: rootProduct || 'Smartphone',
            type: 'Brand Owner',
            company: 'Volta Devices, Inc.',
            location: 'New York, USA',
            color: '#8b5cf6',
        },
        tier1: Array.from({ length: 3 }).map(() => ({
            id: faker.string.numeric(6),
            name: faker.commerce.productMaterial() + ' Module',
            type: 'Component Supplier',
            company: faker.company.name(),
            location: faker.location.country(),
            color: '#22c55e',
            aiSuggested: faker.number.int({ min: 10, max: 100 }), // "45+ sub-suppliers"
        })),
        tier2: Array.from({ length: 5 }).map(() => ({
            id: faker.string.numeric(6),
            name: faker.commerce.productMaterial() + ' Raw',
            type: 'Raw Material',
            company: faker.company.name(),
            location: faker.location.country(),
            color: '#3b82f6',
        }))
    };
};

export const generateCatalog = () => {
    // Helper to add details
    const enrich = (item) => ({
        ...item,
        productId: faker.string.alphanumeric(10).toUpperCase(),
        enhancedDesc: faker.commerce.productDescription(),
        revenue: '$' + faker.number.int({ min: 1, max: 20 }) + 'M',
        altaId: 'ALTA-' + faker.string.alphanumeric(4).toUpperCase() + '-' + faker.string.alphanumeric(4).toUpperCase(),
        documentation: `${item.name} MSDS`,
        flagsList: Array.from({ length: item.flags || 0 }).map(() => ({
            type: faker.helpers.arrayElement(['danger', 'warning']),
            label: faker.helpers.arrayElement(['UFLPA Exposure', 'Sanctions Risk', 'Forced Labor', 'Likely Misclassified'])
        }))
    });

    const staticItems = [
        { name: 'Smartphone', hs: '8517.12.0050', icon: '📱', company: 'Volta Devices, Inc.', country: '🇺🇸 USA', flags: 3 },
        { name: 'Solar Panel X', hs: '8541.40.6020', icon: '☀️', company: faker.company.name(), country: '🇨🇳 China', flags: 2 },
        { name: 'Pulse Watch', hs: '9102.12.8040', icon: '⌚', company: faker.company.name(), country: '🇹🇼 Taiwan', flags: 0 },
        { name: 'Flow Earbuds', hs: '8518.30.2000', icon: '🎧', company: 'AudioNova Inc.', country: '🇨🇦 Canada', flags: 1 },
        { name: 'Lunar Tablet', hs: '8471.30.0100', icon: '💻', company: 'LunarTech Ltd.', country: '🇨🇳 China', flags: 2 },
        { name: 'SoundSphere', hs: '8518.22.0000', icon: '🔊', company: 'SphereAudio Co.', country: '🇲🇽 Mexico', flags: 1 },
    ];

    const randomItems = Array.from({ length: 8 }).map(() => ({
        name: faker.commerce.productName(),
        hs: faker.string.numeric(4) + '.' + faker.string.numeric(2) + '.' + faker.string.numeric(4),
        icon: '📦',
        company: faker.company.name(),
        country: faker.location.countryCode('alpha-2') + ' ' + faker.location.country(),
        flags: faker.number.int({ min: 0, max: 4 })
    }));

    return [...staticItems, ...randomItems].map(enrich);
};
