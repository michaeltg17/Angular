import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  const mutantId = process.env.__STRYKER_ACTIVE_MUTANT__;
  await page.addInitScript(id => {
    (window as any).process = { env: { __STRYKER_ACTIVE_MUTANT__: id } };
  }, mutantId);
});

test('check mutant ID in browser', async ({ page }) => {
  // Navigate to your app (the initScript already ran before this)
  await page.goto('/');

  // Evaluate in browser context
  const mutantId = await page.evaluate(() => {
    // access the injected process.env variable
    return (window as any).process?.env?.__STRYKER_ACTIVE_MUTANT__;
  });

  console.log('Mutant ID in browser:', mutantId);

  // Optional: validate it's what Stryker set
  expect(mutantId).toBe(process.env.__STRYKER_ACTIVE_MUTANT__);
});

test('has correct title', async ({ page }) => {
  await page.goto('/');
  console.log('Page title:', await page.title());
  await expect(page).toHaveTitle('Angular App');
  // toolbar should contain the app title
  const toolbar = page.locator('mat-toolbar span').first();
  await expect(toolbar).toHaveText('Angular App');
});
