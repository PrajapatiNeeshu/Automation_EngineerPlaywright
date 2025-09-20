// Page Object Model for Product Search Page (E-commerce)
const { expect } = require('@playwright/test');

class SearchPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search-input');
    this.searchButton = page.locator('#search-button');
    this.productResults = page.locator('.product-list .product-item');
  }

  async goto() {
    await this.page.goto('https://your-ecommerce-app.com');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async assertProductResultsVisible() {
    await expect(this.productResults).toBeVisible();
  }
}

module.exports = { SearchPage };