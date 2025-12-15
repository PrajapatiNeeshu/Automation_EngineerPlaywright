const {test,expect} = require('@playwright/test')
//lecture 67


test ("Screenshot & Visual comparision", async ({ page }) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'}); // will take only particler locator only 
    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: 'screenshot.png' });
    //added path screenshot.png in the root folder 
    await expect(page.locator("#displayed-text")).toBeHidden();
});
//screenshot -store -> screenshot folder
//visual comparision -store -> snapshot folder

test.only('visual', async ({ page }) => {
    //make payment -when you 0 balance
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    expect(await page.screenshot()).toMatchSnapshot('screenshots/landing-darwin.png');

    //screenhshot --store --screenshot make comparision --snapshot folder
    //login
    //await page.locator("#username").fill("rahulshettyacademy");
    //await page.locator("#password").fill("learning");
    //await page.locator("#signInBtn").click();
    //await page.waitForLoadState('networkidle');
    //expect (await page.screenshot()).toMatchSnapshot('afterLogin.png');

});
