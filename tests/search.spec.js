// Playwright spec for Product Search using POM
const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/search.page');

test.describe('E-commerce Product Search', () => {
  test('should search for a product and display results', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.searchProduct('laptop');
    await searchPage.assertProductResultsVisible();
  });
});
