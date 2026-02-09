// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'command',
  coverageAnalysis: 'off',
  buildCommand: 'npx playwright test',
  concurrency: 1,
  mutate: ['src/app/services/title.service.ts']
};
export default config;
