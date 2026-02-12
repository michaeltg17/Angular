import { defineConfig, devices } from '@playwright/test';

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
    command: 'ng serve --watch=false',
    port: 4200,
    reuseExistingServer: true
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
    // { name: 'firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } },
    // { name: 'mobile-safari', use: { ...devices['iPhone 14'] } }
  ]
});
