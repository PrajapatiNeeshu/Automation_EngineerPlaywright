import { test, expect } from '@playwright/test';

test('13-14: Evaluate JavaScript and handle dialogs/alerts', async ({ page }) => {
  // Evaluate JS
  await page.goto('https://example.com');
  const title = await page.evaluate(() => document.title);
  console.log('Title via evaluate:', title);
  
  // Handle dialogs 
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept('Playwright Response');
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.click('text=Click for JS Alert');
  await page.click('text=Click for JS Confirm');
  await page.click('text=Click for JS Prompt');
});
