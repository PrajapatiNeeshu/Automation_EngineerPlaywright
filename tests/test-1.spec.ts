import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'First name:' }).fill('Neeshu');
  await page.getByRole('textbox', { name: 'Last name:' }).fill('Kumar');
  await page.getByRole('textbox', { name: 'Email:' }).fill('eddygpm@gmail.com');
  await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('12345');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('12345');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('123456');
  await page.getByRole('textbox', { name: 'Confirm password:' }).click();
  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('123456');
  await page.getByRole('button', { name: 'Register' }).click();




});