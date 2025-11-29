const { Given, When, Then, BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser;
let context;
let page;

// Hooks
Before(async function() {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    this.page = page;
});

After(async function() {
    await context?.close();
    await browser?.close();
});

Given('I am on the Flipkart signup page', async function() {
    await this.page.goto('https://www.flipkart.com/');
});

When('I click on the create account button', async function() {
    // Close login popup if present
    try {
        const closeButton = this.page.locator('button._2KpZ6l._2doB4z');
        if (await closeButton.isVisible())
            await closeButton.click();
    } catch (error) {
        console.log('Login popup not present');
    }
    
    await this.page.locator('a._1_3w1N').click();
    await this.page.locator('._2QfC02 ._2MlkI1').click();
});

When('I enter signup details', async function(dataTable) {
    const data = dataTable.rowsHash();
    await this.page.locator('input[name="name"]').fill(data.name);
    await this.page.locator('input[name="email"]').fill(data.email);
    await this.page.locator('input[name="password"]').fill(data.password);
    await this.page.locator('input[name="mobile"]').fill(data.mobile);
});

When('I submit the signup form', async function() {
    await this.page.locator('button[type="submit"]').click();
});

Then('I should see successful registration message', async function() {
    const successMessage = this.page.locator('div[role="alert"]');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('registered successfully');
});

When('I enter signup details with existing email', async function(dataTable) {
    const data = dataTable.rowsHash();
    await this.page.locator('input[name="name"]').fill(data.name);
    await this.page.locator('input[name="email"]').fill(data.email);
    await this.page.locator('input[name="password"]').fill(data.password);
    await this.page.locator('input[name="mobile"]').fill(data.mobile);
});

Then('I should see email already exists message', async function() {
    const errorMessage = this.page.locator('div[class*="error-message"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('already exists');
});