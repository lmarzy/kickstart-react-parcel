module.exports = {
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/**/*.(test|spec).(ts|tsx|js)'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
