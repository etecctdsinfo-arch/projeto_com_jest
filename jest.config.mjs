// jest.config.mjs
export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // Remova ou deixe vazio o extensionsToTreatAsEsm se só usar .js
  // extensionsToTreatAsEsm: [], 
  
  coverageProvider: 'babel',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**'
  ],
};