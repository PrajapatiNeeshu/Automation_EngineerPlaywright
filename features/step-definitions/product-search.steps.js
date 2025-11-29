const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the Flipkart homepage', async function() {
    await this.page.goto('https://www.flipkart.com/');
});

When('I close the login popup if present', async function() {
    try {
        const closeButton = this.page.locator('button._2KpZ6l._2doB4z');
        if (await closeButton.isVisible())
            await closeButton.click();
    } catch (error) {
        console.log('Login popup not present');
    }
});

When('I search for {string}', async function(searchTerm) {
    await this.page.locator('input[name="q"]').fill(searchTerm);
    await this.page.keyboard.press('Enter');
    // Wait for search results to load
    await this.page.waitForSelector('div._1YokD2._3Mn1Gg');
});

Then('I should see iPhone search results', async function() {
    const results = this.page.locator('div._4rR01T');
    await expect(results.first()).toBeVisible();
    const resultsCount = await results.count();
    expect(resultsCount).toBeGreaterThan(0);
});

Then('I should see product filters', async function() {
    const filters = this.page.locator('div._2gmUFU._3V8rao');
    await expect(filters).toBeVisible();
});

Then('product prices should be visible', async function() {
    const prices = this.page.locator('div._30jeq3._1_WHN1');
    await expect(prices.first()).toBeVisible();
});

When('I apply the following filters', async function(dataTable) {
    const filters = dataTable.rowsHash();
    
    // Price filter
    if (filters.price) {
        await this.page.locator(`div[title="${filters.price}"]`).click();
        await this.page.waitForTimeout(1000); // Wait for filter to apply
    }
    
    // RAM filter
    if (filters.ram) {
        await this.page.locator(`div[title="${filters.ram}"]`).click();
        await this.page.waitForTimeout(1000); // Wait for filter to apply
    }
});

Then('I should see filtered results', async function() {
    const results = this.page.locator('div._4rR01T');
    await expect(results.first()).toBeVisible();
});

When('I sort results by {string}', async function(sortOption) {
    await this.page.locator('div._10UF8M').click();
    await this.page.locator(`div[title="${sortOption}"]`).click();
    await this.page.waitForTimeout(1000); // Wait for sorting to apply
});

Then('products should be sorted by price in descending order', async function() {
    const prices = await this.page.locator('div._30jeq3._1_WHN1').allTextContents();
    const numericPrices = prices.map(price => 
        parseInt(price.replace('₹', '').replace(',', ''))
    );
    
    // Verify prices are in descending order
    for (let i = 1; i < numericPrices.length; i++) {
        expect(numericPrices[i-1]).toBeGreaterThanOrEqual(numericPrices[i]);
    }
});