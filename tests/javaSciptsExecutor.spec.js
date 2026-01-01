import { test } from '@playwright/test';

test.only('Evaluate JavaScript', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.evaluate(() => document.title);
  console.log(title); // Outputs page title
  await page.evaluate(() => {
    document.querySelector('h1').style.color = 'red';
  });
});
