// Page Object Model for Login Page (E-commerce)
const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('.error-message');
  }

  async goto() {
    await this.page.goto('https://your-ecommerce-app.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = { LoginPage };