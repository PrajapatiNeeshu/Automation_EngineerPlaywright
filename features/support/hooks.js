const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function() {
    // Launch browser
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    
    // Create context and page
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    const page = await context.newPage();
    
    // Add to world object
    this.browser = browser;
    this.context = context;
    this.page = page;
});

After(async function() {
    // Clean up
    await this.context?.close();
    await this.browser?.close();
});