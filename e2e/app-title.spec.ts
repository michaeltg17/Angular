import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Angular App');
});
