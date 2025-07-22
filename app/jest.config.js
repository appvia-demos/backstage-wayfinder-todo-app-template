module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!src/static/**/*.js'
  ],
  coverageReporters: ['text', 'lcov', 'html'],
  coverageDirectory: '../coverage'
};