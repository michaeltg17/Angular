import { test, expect } from '@playwright/test';

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
