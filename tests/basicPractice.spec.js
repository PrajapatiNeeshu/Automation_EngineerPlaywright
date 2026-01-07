

import { expect, test } from '@playwright/test';




test('loginpage ', async ({ page }) => {
    
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
await expect(page.getByText("Welcome, Please Sign In!")).toBeVisible();
expect(await page.title()).toBe('Demo Web Shop. Login');
    
})


