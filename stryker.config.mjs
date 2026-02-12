/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'command',
  coverageAnalysis: 'off',
  concurrency: 1,
  mutate: ['src/app/services/title.service.ts'],
  buildCommand
  //mutate: ['src/app/services/title.service.ts', 'src/app/services/pending-changes.service.ts'],
  //mutate: ['src/app/**/*.ts'],
  commandRunner: {
    command: 'node run-playwright.js'
  },
  logLevel: 'trace'
};
export default config;
