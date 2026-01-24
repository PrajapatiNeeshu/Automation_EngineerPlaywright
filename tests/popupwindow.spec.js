import { test } from '@playwright/test';

test.only('@popwindow 10: New tabs and popup windows', async ({ context, page }) => {
  // New tab
  await page.goto('https://the-internet.herokuapp.com/windows');
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Click Here')
  ]);
  await newTab.waitForLoadState();
  console.log('New tab title:', await newTab.title());
  await newTab.close();

  // New window (popup)
  await page.goto('https://demoqa.com/browser-windows');
  const [newWindow] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#windowButton')
  ]);
  await newWindow.waitForLoadState();
  const windowText = await newWindow.textContent('#sampleHeading');
  console.log('Popup window text:', windowText);
  await newWindow.close();
});
