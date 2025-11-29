const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

let browser;
let page;

Before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});

After(async () => {
    await browser.close();
});

Given('I am on the login page', async () => {
    await page.goto('https://www.saucedemo.com/');
});

When('I enter valid username {string}', async (username) => {
    await page.fill('#user-name', username);
});

When('I enter valid password {string}', async (password) => {
    await page.fill('#password', password);
});

When('I enter invalid username {string}', async (username) => {
    await page.fill('#user-name', username);
});

When('I enter invalid password {string}', async (password) => {
    await page.fill('#password', password);
});

When('I click the login button', async () => {
    await page.click('#login-button');
});

Then('I should be logged in successfully', async () => {
    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page.url()).toContain('/inventory.html');
});

Then('I should see an error message', async () => {
    const errorMessage = await page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
});