export default {
    projects: ["<rootDir>/jest.unit.config.ts"],
    transform: {
        '^.+\\.ts?$': 'esbuild-jest',
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    verbose: true,
    testMatch: ['**/test/**/*.test.ts'],
    moduleNameMapper: {
      '/opt/nodejs/layer': '<rootDir>/src/layer/nodejs/layer'
    }
    
};
