import { test, expect } from '@playwright/test'
import LoginPage from "../pages/loginPage2.js";

test("Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);//create object of LoginPage class
  await loginPage.open();//call open method
  await loginPage.login("neeshubiet@gmail.com", "Nee@kumar1234");//call login method
  await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");//assertion
});
