import { test } from '@playwright/test';


// Use Playwright Test runner fixtures instead of manually launching browsers.
test('homepage screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Save a full-page screenshot; Playwright Test will manage the browser lifecycle.
  await page.screenshot({ path: 'example.png', fullPage: true });


  
});
