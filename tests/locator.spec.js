 const {test, expect } = require('@playwright/test')
 //any one methods we can use import method

 test('Locator',  async ({page})=>
{

await page.goto ("https://demoblaze.com/index.html")

//click on login button-property
await page.locator("id=login2").click()
//await page.locator("#login2").click()
//await page.locator("[id='login2']").click()

await page .click('id=login2')

//fill the form provide the user name 
//M-1
//await page .locator('#loginusername').fill("pavanol")
//M-2
await page.fill('#loginusername', 'pavanol')

//provide the password in login
//M-1
await page.fill('#loginpassword')
//M-2 Xpath I provide the elemets
await page.fill("input[id = 'loginpassword']", 'test@123')

//clcik login button on the page
await page.click("//button[normalize-space()= 'Log in']")

//needs to verify the navigate the correct website
 const logoutLink = await page.locator("//a[normalize-space()= 'Log out']")
 await expect(logoutLink).toBeVisible();

 await page.close();



 //Free and open sourec
// Multi Browser , Multi-Langauge
//easy setup and configuration
//Functional and API Testing 

})