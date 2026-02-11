import { generateSuppliers, generateValueChainGraph, generateCatalog } from './mockData';
import { SANCTIONS_LIST } from './sanctionsData';

/**
 * DataService simulates a backend API for Supply Chain Intelligence.
 * In a real app, these would be fetch() calls to a Python/Node backend.
 */
const DataService = {

    /**
     * Get the multi-tier value chain for a specific product context.
     * @param {string} rootId - The ID of the root product/company
     * @returns {Promise<Object>} The graph structure { root, tier1, tier2 }
     */
    getValueChain: async (rootId) => {
        // Simulate network latency
        await new Promise(r => setTimeout(r, 600));
        return generateValueChainGraph(rootId);
    },

    /**
     * Search for organizations in the global "Atlas".
     * @param {string} query - Search term
     * @returns {Promise<Array>} List of supplier objects
     */
    searchSuppliers: async (query = '') => {
        await new Promise(r => setTimeout(r, 400));

        // 1. Check Real Sanctions List First
        let sanctionMatches = [];
        if (query) {
            const lowerQuery = query.toLowerCase();
            sanctionMatches = SANCTIONS_LIST.filter(s =>
                s.name.toLowerCase().includes(lowerQuery) ||
                s.alias.some(a => a.toLowerCase().includes(lowerQuery))
            ).map(s => ({
                id: s.id,
                name: s.name,
                country: 'Restricted Region', // Simplified for demo
                type: 'Sanctioned Entity',
                risk: {
                    level: s.riskLevel,
                    score: s.riskLevel === 'Critical' ? 99 : 85,
                    flag: true,
                    riskType: s.reason
                },
                tier: 'Tier 2'
            }));
        }

        // 2. Get Mock Data
        const allSuppliers = generateSuppliers(60); // Generate fresh pool

        if (!query) return allSuppliers;

        const lowerQuery = query.toLowerCase();
        const filteredMock = allSuppliers.filter(s =>
            s.name.toLowerCase().includes(lowerQuery) ||
            s.country.toLowerCase().includes(lowerQuery)
        );

        return [...sanctionMatches, ...filteredMock];
    },

    /**
     * Simulate uploading a CSV and screening it against the Global Risk Map.
     */
    uploadAndScreen: async (/* file */) => {
        await new Promise(r => setTimeout(r, 2000)); // Simulate processing time

        // Return a mock summary of the "screening results"
        // In a real app, this would parse the CSV and check each row against SANCTIONS_LIST
        return {
            totalRead: 1420,
            riskCounts: {
                critical: 3,
                high: 12,
                medium: 45
            }
        };
    },

    /**
     * Get the Product Catalog for the dashboard.
     */
    getCatalog: async () => {
        await new Promise(r => setTimeout(r, 300));
        return generateCatalog();
    }
};

export default DataService;
