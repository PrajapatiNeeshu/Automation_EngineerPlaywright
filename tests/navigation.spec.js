import { expect, test } from '@playwright/test';
test('Open Amazon page ', async ({ page }) => { 
    await page.goto("https://www.geeksforgeeks.org/javascript/variables-datatypes-javascript/");
    await page.goto('https://playwright.dev/', { waitUntil: 'networkidle', timeout: 30000 });
    await expect(page).toHaveTitle(/Variables and Datatypes in JavaScript/);
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toHaveText('Example Domain');
    


}
)