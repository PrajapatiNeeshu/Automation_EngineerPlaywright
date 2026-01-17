


//lecture -48


import { expect, test ,request} from '@playwright/test';

//please correct this path if needed
const loginPayLoad = { userEmail: "neeshubiet@gmail.com", userPassword: "Nee@kumar1234" }; // provid ethe payload for this API it will make it most paywload

const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"695f261bc941646b7a87206f"}]};
 
 //lecture-50
let response;
let token;
let orderID;
test.beforeAll(async ({ request }) => {
    const loginResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
        data: loginPayLoad
    })
    //200,201
    expect(loginResponse.ok()).toBe(true);// wha wil return will be print as well tobe 200 aas well

    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;// json have 3 key value pair token, message, userID
    console.log(token);
    console.log(loginResponse.body());
    console.log(loginResponse.ok());
   
   //lecture-51
   const orderResponse = await request.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
        data: orderPayLoad,
        headers: {
            "Authorization": token,
            "content-type": "application/json"
        }
    });
    console.log("Order Response Status:", orderResponse.status());
    const orderResponseJson = await orderResponse.json();
    console.log("Order Response Body:", orderResponseJson);
    //await expect(orderResponse.ok()).toBe(true);
    orderID = orderResponseJson.orders[0];
    console.log(orderID);

    //const apiUtils = new APiUtils(apiContext,loginPayLoad);
    //response =  await apiUtils.createOrder(orderPayLoad);
});
 
 
//create order is success

test.skip('@Webst Client App login', async ({ page }) => {
    
    const apiUtils = new APiUtils(page.request,loginPayLoad);// create object of apiutils class
    
    const response =  await apiUtils.createOrder(orderPayLoad);
    const token = response.token;
    console.log("Token from create order method:", token);
    page.addInitScript(value=>
    {
        window.localStorage.setItem('token', value);
    }
    ,response.token);// will be added function and parameter

    //js file- Login js, DashboardPage
    const email = loginPayLoad.userEmail;
    await page.goto("https://rahulshettyacademy.com/client");
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");

    //await page.locator("#userEmail").fill(email);
    //await page.locator("#userPassword").fill("Nee@kumar1234");
   // await page.getByPlaceholder("email@example.com").fill(email);// used placed holder becaue no assocuation not there lable

    //await page.getByPlaceholder("enter your passsword").fill("Nee@kumar1234");
    //await page.getByRole('button', { name: "Login" }).click(); // get by role will be show in getby role


    await page.waitForLoadState('domcontentloaded'); // wait for load network

    await page.locator(".card-body b").first().waitFor();
   
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add to Cart" }).click(); // used for filer option it will be filter 3 item

    //fetec the informtion from the all product list.
    await page.getByRole("listitem").getByRole('button', { name: "Cart" }).click();
 
    //await page.pause();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
    await page.getByRole("button", { name: "Checkout" }).click();
 
    await page.getByPlaceholder("Select Country").pressSequentially("cuba");
 
    await page.getByRole("button", { name: "Cuba" }).nth(1).click();

    //used by text becaue no other locators are there
    await page.getByText("PLACE ORDER").click();
    // await page.locator("div .actions").getByRole("button").click();
    //expect .getByText("Thankyou for the order.").toBeVisible();

    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    //await page.pause();

});





 
//Verify if order created is showing in history page
// Precondition - create order -



//lecture 53
test.only('@API Place the order', async ({page})=>
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
expect(response.orderId.includes(orderIdDetails)).toBe(true);
 
});


