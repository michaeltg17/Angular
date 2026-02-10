import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend({
  // Override the default 'page' fixture
  page: async ({ page }, use) => {
    const mutantId = process.env.__STRYKER_ACTIVE_MUTANT__;

    // Inject process.env before any page scripts run
    await page.addInitScript(id => {
      (window as any).process = { env: { __STRYKER_ACTIVE_MUTANT__: id } };
    }, mutantId);

    await use(page); // continue with the test
  }
});
