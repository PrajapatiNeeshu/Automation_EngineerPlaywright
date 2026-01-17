

//Lecture 45

import {test,expect} from '@playwright/test'

//test.describe.configure({mode:'parallel'});
//test.describe.configure({mode:'serial'});
//test.describe.configure({mode:'parallel'});  //default is parallel what is the use of serial if we have independent test cases we can go for parallel mode if dependent test cases we can go for serial mode
test.describe.configure({mode:'serial'}); // what will be the output if one of the test case is failed in between the serial mode-all the subsequent test cases will be skipped
test("@web Popup validations",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //await page.goto("http://google.com");
     //await page.goBack();
     //await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();

    //<input id="hide-textbox" class="btn-style class2" value="Hide" onclick="hideElement()" type="submit">
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    //await page.locator("#show-textbox").click();
   // await expect(page.locator("#displayed-text")).toBeVisible();
    // await page.pause();
    //Lecture 46
    //popup handling
    page.on('dialog',dialog => dialog.accept()); // popup handling will be done using this method
    await page.locator("#confirmbtn").click();

    //create dismiss method
    //page.on('dialog',dialog => dialog.dismiss());



    //await page.locator("#confirmbtn").click();
    //await page.locator(" ").hover();
await page.locator("#mousehover").hover();

    

    
    //********************************************** */
    //Lecture 47-Frames how to handle frames


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //#courses-iframe.  <iframe id="courses-iframe" src="https://rahulshettyacademy.com/" name="iframe-name" style="width: 100%; height: 600px" scrolling="yes" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0"> </iframe>
    const framesPage = page.frameLocator("#courses-iframe");

    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    //await framesPage.locator("li a[href*='lifetime-access']:visible").click();// visible -> to avoid hidden elements 
    const textCheck =await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);


})

test(" @web Screenshot & Visual comparision",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
});
//screenshot -store -> screenshot -> 
test('@web visual',async({page})=>
{
    //make payment -when you 0 balance
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

})