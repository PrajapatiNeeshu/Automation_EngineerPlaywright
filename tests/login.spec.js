// Playwright spec for Login Page using POM
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test.describe('E-commerce Login Page', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('validUser', 'validPassword');
    // Add assertion for successful login, e.g., check for dashboard
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalidUser', 'invalidPassword');
    await loginPage.assertLoginError();
  });
});
