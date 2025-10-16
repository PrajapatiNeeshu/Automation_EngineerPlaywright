import{test,expect,Locator} from "@playwright/test";

/*
test("Dynamic xpth ", async ({page}) => {


await page.goto("https://testautomationpractice.blogspot.com/");
//Loop to click the button 5 times
for (let i=1 ;i <=5;i++){
let button:Locator= page.locator('//button[text() = "STOP" or text() = "START"]')
////button[@name = "start" or @name = "stop"]
//click on the button
await button.click();
await page.waitForTimeout(2000);
}
})

*/
//using playwright specefic methods
//getByRoleMethods
test("Dynamic ", async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/");
//Loop to click the button 5 times
for (let i=1 ;i <=5;i++){
const  button = page.getByRole('button', {name : /START|STOP/});
////button[@name = "start" or @name = "stop"]
//click on the button
await button.click();
await page.waitForTimeout(2000);
}

})