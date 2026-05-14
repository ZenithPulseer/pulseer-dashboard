import { test, expect } from '@playwright/test';

test('dashboard renders and shows welcome message', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Pulseer Overview');
});

test('can navigate to accounts page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Accounts');
  await expect(page).toHaveURL('/accounts');
  await expect(page.locator('h1')).toContainText('Watched Accounts');
});
