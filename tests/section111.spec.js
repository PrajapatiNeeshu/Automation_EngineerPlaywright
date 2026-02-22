import { test, expect, request } from '@playwright/test';
import { APiUtils } from '../utils/APiUtils.js';
import AxeBuilder from '@axe-core/playwright'; // 1
const loginPayLoad = { userEmail: "neeshubiet@gmail.com", userPassword: "Nee@kumar123" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };
 import fs from 'fs';
import path from 'path';
import { devices } from 'playwright';
const email = "neeshubiet@gmail.com";

let response;
let webContext;
test.beforeAll(async ({ browser }) => {
   ['screenshots', 'videos', 'downloads'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
 const context = await browser.newContext();
 const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("neeshubiet@gmail.com");
   await page.locator("#userPassword").fill("Nee@kumar1234");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await context.storageState({ path: 'state.json' });// store session info in state.json this file
 webContext = await browser.newContext({ storageState: 'state.json' });// can use any where in project storage session from login page.

})
 



test.only('@Webst Client App login', async ({ page: testPage }) => {
   //js file- Login js, DashboardPage
   const page = await webContext.newPage(); // create the new page using  stored session info for webContext then it will be complted use any whwre
   
   //await page.goto("https://rahulshettyacademy.com/client");
   //const email = "neeshubiet@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Nee@kumar1234");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');

   //this is comment due to already login in beforeall and store session in state.json file and use here webcontext
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }

   await page.locator("[routerlink*='cart']").click();
   //await page.pause();

   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();

   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }

   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");


   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

});
 
//create order is success
test('@SP Place the order', async ({ page }) => {
  page.addInitScript(value => {
 
    window.localStorage.setItem('token', value);
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");
 
 
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrders);
      route.fulfill(
        {
          response,
          body, 
 
        });
      //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    });
 
  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
 
  console.log(await page.locator(".mt-4").textContent());
 
 
 
});


test('@QW Security test request intercept', async ({ page }) => {
 
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
 
    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
})


//login UI -> .josn -> token -> storage
//storage -> page context -> browser
//test browser -> .josn , cart-histor, orderdetsils, orderdetails page 
//create order -> grab order id
//new request -> delete orderid (negative scenario)
test('@WE Delete order negative scenario', async ({ page, request }) => {
 
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("neeshubiet@gmail.com");
});


//how to interceptor Network response ca;ls with playwright
//login -> go to orders page -> intercept order api -> mock response -> no orders
//validate on UI - no orders



 //You have No Orders to show at this time.

test.describe.only('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://your-site.com/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});

//test.only what means in playwright
//it will execute only this test case ignore other test cases in the file.
//test.skip what means in playwright
//it will skip this test case and execute other test cases in the file.
//test.describe.only what means in playwright