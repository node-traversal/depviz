module.exports = {
    "coverageThreshold": {
        "global": {
            "branches": 99,
            "functions": 99,
            "lines": 99,
            "statements": -10
        }
    },
    "roots": [
        "<rootDir>/src"
    ],
    "setupFilesAfterEnv": ["<rootDir>/src/__setup__/setupTests.ts"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.svg': '<rootDir>/src/__mocks__/fileMock.tsx',
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    }
};