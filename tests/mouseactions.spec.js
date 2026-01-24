import { test, expect } from '@playwright/test';

test('12: Mouse actions - double click, right click, hover', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  // Double click
  await page.dblclick('#doubleClickBtn');
  await expect(page.locator('#doubleClickMessage')).toBeVisible();

  // Right click
  await page.click('#rightClickBtn', { button: 'right' });
  await expect(page.locator('#rightClickMessage')).toBeVisible();

  // make it mouse hover
  await page.goto('https://demoqa.com/menu');
  await page.hover('ul#nav li:nth-child(2) > a');
  await page.screenshot({ path: 'screenshots/hover_effect.png' });
});
