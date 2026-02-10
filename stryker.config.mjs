/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'command',
  coverageAnalysis: 'off',
  concurrency: 1,
  mutate: ['src/app/services/title.service.ts'],
  commandRunner: {
    command: 'npx playwright test'
  }
};
export default config;
