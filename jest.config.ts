export default {
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverage: false,
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
};
