module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
    // '.+\\.json': '<rootDir>/node_modules/json5-jest',
    // '^.+\\.json5$': 'json5-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'json', 'node', 'jsx', 'tsx', 'vue'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/node_modules/(?!(@jest)/)',
    '<rootDir>/node_modules/(?!(@vue-jest)/.*)',
    '<rootDir>/node_modules/(?!tsconfig/.*)',
    '<rootDir>/node_modules/(?!vue-jest/.*)',
    '<rootDir>/node_modules/(?!@jest/.*)',
  ],
  testURL: 'http://localhost/',
  // collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
}
