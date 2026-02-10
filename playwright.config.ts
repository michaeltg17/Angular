import { defineConfig, devices } from '@playwright/test';
import process from 'process';

console.log('Playwright process sees mutant:', process.env.__STRYKER_ACTIVE_MUTANT__);

export default defineConfig({
  testDir: 'e2e',
  timeout: 30_000,
  expect: { timeout: 5000 },
  fullyParallel: false,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4200',
    headless: true,
    viewport: { width: 1280, height: 720 }
  },
  webServer: {
    command: 'npm start',
    port: 4200,
    reuseExistingServer: false,
    env: {
      ...(process.env as Record<string, string>)
    }
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
    // { name: 'firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } },
    // { name: 'mobile-safari', use: { ...devices['iPhone 14'] } }
  ]
});
