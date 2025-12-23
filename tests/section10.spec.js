


//lecture -48


const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('./utils/APiUtils');

//please correct this path if needed
const email = "neeshubiet@gmail.com";
await page.getByPlaceholder("email@example.com").fill(email);// used placed holder becaue no assocuation not there lable
await page.getByPlaceholder("enter your passsword").fill("Nee@kumar1234");


const loginPayLoad = { userEmail: "neeshubiet@gmail.com", userPassword: "Nee@kumar1234" };
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
 
 
let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();

    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/client")

    {
        data: loginPayLoad

    }//200,201
    expect(loginResponse.ok()).toBetruthy();

    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log(token);

    
    //const apiUtils = new APiUtils(apiContext,loginPayLoad);
    //response =  await apiUtils.createOrder(orderPayLoad);
 
});
 
 
//create order is success

test.only('@Webst Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "neeshubiet@gmail.com";
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    //await page.locator("#userEmail").fill(email);
    //await page.locator("#userPassword").fill("Nee@kumar1234");
    await page.getByPlaceholder("email@example.com").fill(email);// used placed holder becaue no assocuation not there lable

    await page.getByPlaceholder("enter your passsword").fill("Nee@kumar1234");
    await page.getByRole('button', { name: "Login" }).click(); // get by role will be show in getby role


    await page.waitForLoadState('networkidle'); // wait for load network

    await page.locator(".card-body b").first().waitFor();
   
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add to Cart" }).click(); // used for filer option it will be filter 3 item

    //fetec the informtion from the all product list.
    await page.getByRole("listitem").getByRole('button', { name: "Cart" }).click();
 
    //await page.pause();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
    await page.getByRole("button", { name: "Checkout" }).click();
 
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
    await page.getByRole("button", { name: "India" }).nth(1).click();

    //used by text becaue no other locators are there
    await page.getByText("PLACE ORDER").click();
    // await page.locator("div .actions").getByRole("button").click();
    //expect .getByText("Thankyou for the order.").toBeVisible();

    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    //await page.pause();

});




test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client");
 await page.locator("button[routerlink*='myorders']").click();
 await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
 
 
for(let i =0; i<await rows.count(); ++i)
{
   const rowOrderId =await rows.nth(i).locator("th").textContent();
   if (response.orderId.includes(rowOrderId))
   {
       await rows.nth(i).locator("button").first().click();
       break;
   }
}
const orderIdDetails =await page.locator(".col-text").textContent();
//await page.pause();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 
//Verify if order created is showing in history page
// Precondition - create order -

