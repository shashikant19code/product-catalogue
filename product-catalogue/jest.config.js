module.exports = {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
        "<rootDir>/setup-jest.ts"
    ],
    "transformIgnorePattern": [
        "node_modules/(?!@ngrx|ngx-socket-io)"
    ],
    "transform": {
        "^.+\\.(ts|js|html)$": "ts-jest"
    },
    "testPathIgnorePattern": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/",
        "<rootDir>/src/test.ts",
    ]
}