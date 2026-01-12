import { test, expect, request } from '@playwright/test';
import { APiUtils } from './utils/APiUtils.js';
const loginPayLoad = { userEmail: "neeshubiet@gmail.com", userPassword: "Nee@kumar1234" };
const orderPayLoad = { orders: [{ country: "India", productOrderedId: "6262e95ae26b7e1a10e89bf0" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };

let response;
test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APiUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);
})
//create order is success
test('@SP Place the order', async ({ page }) => {
  page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route => {
        //intercepting response and faking response ->{playwright fakeresponse}->browser->render data on front end
    const response = await page.request.fetch(route.request());
    // it will be fecth original response from backend server

      let body = JSON.stringify(fakePayLoadOrders);
      //it will be convert to string because route.fulfill only accept string format this added fake response
      route.fulfill(
        {
          response,
          //add original response header and status code
          body, 
        });
      //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    });
  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
  console.log(await page.locator(".mt-4").textContent());




});

