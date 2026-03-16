import {test , expect } from '@playwright/test';
test('login page sucessfully login' , async({page})=>{
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("//input[@type = 'text' and @name = 'username']").fill('student');
  await page.locator("//input[@type = 'password' and @name = 'password']").fill('Password123');
  await page.locator("button#submit").click();
  await expect(page.locator('p.has-text-align-center')).toBeVisible();
  await expect(page.locator('p.has-text-align-center')).toHaveText("Congratulations student. You successfully logged in!");
});

//50 
//

// worker = 5;
//shardig = 7;



