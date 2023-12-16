module.exports = {
    ci: {
        collect: {
            url: ['https://www.businessinsider.com/'],
            numberOfRuns: 3,
            settings: {
                onlyCategories: ['accessibility'],
                maxWaitForLoad: 45 * 1000,
                emulatedFormFactor: 'desktop',
                throtllingMethod: 'simulate',
                throtlling: {
                    rttMs: 40,
                    troughputKbps: 10 * 1024,
                    cpuSlowdownMultiplier: 1,
                    requestLatencyMs: 0,
                    downloadThroughputKbps: 0,
                    uploadThrouhputKbps: 0
                }
            }
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            assertions: {
                'categories:pwa': 'off',
                'categories:seo': 'off',
                'categories.best-practices': 'off',
                'categories.accessibility': ['error', { minScore: 0.8 }]
            }
        }
    },
};