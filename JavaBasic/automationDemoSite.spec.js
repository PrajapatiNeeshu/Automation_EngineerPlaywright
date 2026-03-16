import { test, expect } from '@playwright/test';

test.describe('Automation Demo Site - Complete Flow', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    // Navigate to the automation demo site
    await page.goto('https://www.automationbro.com/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('Complete workflow with reCAPTCHA, alerts, and frames', async () => {
    // Step 1: Handle reCAPTCHA
    await page.locator('iframe[name="a-nurcz5a1yy50"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
    await page.waitForTimeout(2000);
    
    // Handle reCAPTCHA challenge frames
    await page.locator('iframe[name="c-nurcz5a1yy50"]').contentFrame().locator('[id="0"]').click();
    await page.waitForTimeout(1000);
    
    await page.locator('iframe[name="c-nurcz5a1yy50"]').contentFrame().locator('[id="8"]').click();
    await page.waitForTimeout(1000);
    
    await page.locator('iframe[name="c-nurcz5a1yy50"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
    await page.waitForTimeout(2000);

    // Step 2: Navigate to Alerts section
    await page.getByRole('link', { name: 'Automation Demo Site' }).click();
    await page.getByRole('link', { name: 'Alerts' }).click();

    // Step 3: Handle alert dialog
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'click the button to display' }).click();

    // Step 4: Navigate through alert pages
    await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
    await page.getByRole('link', { name: 'Alert with Textbox' }).click();

    // Step 5: Handle Frames section
    await page.getByRole('link', { name: 'Frames' }).click();
    await page.getByRole('link', { name: 'Single Iframe' }).click();

    // Step 6: Interact with iframe textbox
    await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
    await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('g');
    
    await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
    await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('geeded');
    await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').press('Enter');

    // Step 7: Handle nested iframes
    await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
    await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
    await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();

    // Step 8: Verify nested iframe is visible
    await expect(page.getByRole('link', { name: 'Iframe with in an Iframe' })).toBeVisible();

    // Step 9: Verify accessibility snapshots for nested frames
    await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().locator('section')).toMatchAriaSnapshot(`- textbox`);
    
    await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().locator('section')).toMatchAriaSnapshot(`
    - heading "Nested iFrames" [level=5]
    - iframe: <p>Your browser does not support iframes.</p>
    `);
    
    await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().locator('section')).toMatchAriaSnapshot(`
    - heading "Nested iFrames" [level=5]
    - iframe: <p>Your browser does not support iframes.</p>
    `);

    // Step 10: Verify page heading
    await expect(page.locator('h1')).toContainText('Automation Demo Site');

    // Step 11: Navigate back to home and verify Sign In button
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page.getByRole('button', { name: 'Sign In', exact: true })).toBeVisible();

    console.log('✅ Test completed successfully!');
  });

  test('Simplified flow - Alerts and Frames only', async () => {
    // Navigate to Alerts
    await page.getByRole('link', { name: 'Alerts' }).click();

    // Handle simple alert
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'click the button to display' }).click();

    // Navigate to Frames
    await page.getByRole('link', { name: 'Frames' }).click();
    await page.getByRole('link', { name: 'Single Iframe' }).click();

    // Fill iframe textbox
    const iframeTextbox = page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox');
    await iframeTextbox.fill('Playwright Test');
    await iframeTextbox.press('Enter');

    console.log('✅ Simplified test completed!');
  });
});
