//create scripts for about us page testing
const { test, expect } = require('@playwright/test');

test.describe('About Us Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/aboutus');
    });

    test('Verify About Us Page Title', async ({ page }) => {
        await expect(page).toHaveTitle(/About Us/);
    });

    test('Check Presence of Team Section', async ({ page }) => {
        const teamSection = page.locator('#team-section');
        await expect(teamSection).toBeVisible();
    });

    test('Validate Contact Information', async ({ page }) => {
        const contactInfo = page.locator('.contact-info');
        await expect(contactInfo).toContainText('Contact Us');
        await expect(contactInfo).toContainText('Email: support@rahulshettyacademy.com');
    });

    test('Navigate to Careers Page', async ({ page }) => {
        await page.click('a[href="/careers"]');
        await expect(page).toHaveURL(/.*careers/);
        await expect(page).toHaveTitle(/Careers/);
    });

}); 