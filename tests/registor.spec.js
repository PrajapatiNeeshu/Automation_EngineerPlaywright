import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/login');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).click();
  await page.getByRole('textbox', { name: 'First name:' }).fill('neeshu');
  await page.getByRole('textbox', { name: 'First name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name:' }).fill('kumar');
  await page.getByRole('textbox', { name: 'Last name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email:' }).fill('neeshubiet@gmil.con');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('nee@kumar123');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('nee@kumar123');
  await page.getByRole('button', { name: 'Register' }).click();
});
test.only("login page ", async ({ page }) => {
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("'https://demowebshop.tricentis.com/'");
    const text = page.locator('.ico-login').click();
  

}


)