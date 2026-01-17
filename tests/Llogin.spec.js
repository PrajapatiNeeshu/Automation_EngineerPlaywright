import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login page verification using POM with soft assertions', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.openLoginPage();
  await loginPage.verifyLoginPageSoft();
});
