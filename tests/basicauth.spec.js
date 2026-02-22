import { test, expect } from '@playwright/test';

test('16: Basic authentication and storage state', async ({ browser }) => {
   const context = await browser.newContext({
    httpCredentials: { username: 'admin', password: 'admin' }
  });
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  await expect(page.locator('.example p')).toHaveText('Congratulations! You must have the proper credentials.');
  await context.storageState({ path: 'auth.json' });
  console.log('Authentication state saved to auth.json');
  await context.close();
});
