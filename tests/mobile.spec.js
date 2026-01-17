const { test, devices, chromium } = require('@playwright/test');

test('Test mobile layout on iPhone 12', async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices['iPhone 12'], // built-in config
  });

  const page = await context.newPage();
  await page.goto('https://www.flipkart.com');
  
  // Check viewport size and responsive layout
  console.log(await page.viewportSize());
  
  await page.screenshot({ path: 'mobile_view.png' });
  await browser.close();
});


