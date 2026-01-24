import { test } from '@playwright/test';

test('17: Record video', async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 1280, height: 720 }
    }
  });
  const page = await context.newPage();
  await page.goto('https://example.com');
  // Perform some basic interactions
  await page.waitForTimeout(1000);
  const title = await page.title();
  console.log('Page title:', title);
  await context.close(); // Video is saved automatically
  console.log('Video recorded and saved in videos/ folder');
});
