// Playwright spec for Login Page using POM
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

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
