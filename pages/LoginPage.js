import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.loginLink = page.locator('.ico-login');
    this.welcomeText = page.getByText('Welcome, Please Sign In!');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
  }

  async navigate() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async openLoginPage() {
    await this.loginLink.click();
  }

  async verifyLoginPageSoft() {
    await expect.soft(this.welcomeText).toBeVisible();
    await expect.soft(this.emailInput).toBeVisible();
    await expect.soft(this.passwordInput).toBeVisible();
  }
}

export default LoginPage;