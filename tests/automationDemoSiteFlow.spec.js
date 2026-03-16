import { test, expect } from '@playwright/test';

// Single, readable test that covers the recorded alert + iframe flow.
test('Automation Demo Site: alerts and nested iframes', async ({ page }) => {
  // Start from Alerts page so the subsequent links exist.
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  // Handle optional reCAPTCHA if it appears on the page (best-effort, non-fatal).
  const recaptchaCheckbox = page
    .frameLocator('iframe[title="reCAPTCHA"], iframe[name^="a-"]')
    .getByRole('checkbox', { name: /i'm not a robot/i });
  if (await recaptchaCheckbox.isVisible({ timeout: 2000 }).catch(() => false)) {
    await recaptchaCheckbox.click();
    const challengeFrame = page.frameLocator('iframe[title*="challenge"], iframe[name^="c-"]');
    await challengeFrame.locator('[id="0"]').click({ trial: true }).catch(() => {});
    await challengeFrame.locator('[id="8"]').click({ trial: true }).catch(() => {});
    await challengeFrame.getByRole('button', { name: /verify/i }).click({ trial: true }).catch(() => {});
  }

  await page.getByRole('link', { name: 'Automation Demo Site' }).click();
  await page.getByRole('link', { name: 'Alerts' }).click();

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'click the button to display' }).click();
  await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
  await page.getByRole('link', { name: 'Alert with Textbox' }).click();

  await page.getByRole('link', { name: 'Frames' }).click();
  await page.getByRole('link', { name: 'Single Iframe' }).click();

  const singleFrame = page.frameLocator('iframe[name="SingleFrame"]');
  await singleFrame.getByRole('textbox').fill('geeded');
  await singleFrame.getByRole('textbox').press('Enter');

  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await expect(page.getByRole('link', { name: 'Iframe with in an Iframe' })).toBeVisible();

  const nestedSection = page
    .locator('#Multiple')
    .getByText('<p>Your browser does not')
    .contentFrame()
    .locator('section');

  await expect(nestedSection).toMatchAriaSnapshot(`
    - heading "Nested iFrames" [level=5]
    - iframe: <p>Your browser does not support iframes.</p>
    `);

  await expect(page.locator('h1')).toContainText('Automation Demo Site');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('button', { name: 'Sign In', exact: true })).toBeVisible();
});
