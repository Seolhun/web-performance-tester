module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest',
    '^.+\\.js?(x)$': 'jest',
  },
  testMatch: [
    '<rootDir>/src/**/*.(test|spec).ts?(x)',
    '<rootDir>/src/**/*.(test|spec).js?(x)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/__config__/',
  ],
  cacheDirectory: '<rootDir>/.cache/unit',
};
