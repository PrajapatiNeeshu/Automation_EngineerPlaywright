
import {test, expect} from '@playwright/test';
import { customtest } from '../utils/test-base.js';

//Json->string->js object
// dataset will be imported via ESM (placeorderTestData is imported below)

//import {customtest} from './utils/test-base';
//LoginPage
import LoginPage from '../pageObjects/LoginPage.js';
//import { LoginPage } from '../pageObjects/loginPage.js';
import DashBoardPage from '../pageObjects/DashBoardPage.js';
//import DashboardPage from '../pageobjects/DashboardPage.js';
//import CartPage from '../pageobjects/CartPage.js';
//import CheckoutPage from '../pageobjects/CheckoutPage.js';
//import OrderConfirmationPage from '../pageobjects/OrderConfirmationPage.js';
//import {POManager} from '../pageObjects/POManager';
//Json->string->js object
import placeorderTestData from '../utils/placeorderTestData.json' assert { type: 'json' };
//const dataset = JSON.parse(JSON.stringify(placeorderTestData));
import POManager from '../pageObjects/POManager.js';

test(`@Webs Client App login test`, async ({page})=>
 {
    const poManager = new POManager(page);//one single object for POManger for all pages
    const loginPage = poManager.getloginPage();
    const dashboardPage = poManager.getDashboardPage();
    const username = 'neeshubiet@gmail.com';
    const productName = 'iphone 13 pro';
    const password = 'Nee@kumar1234';
    const products = page.locator(".card-body");
    // const loginPage = new LoginPage(page);
    //const loginPage = new LoginPage(page);//create object of LoginPage class
     await loginPage.goTo();//call goTo method
     await loginPage.validLogin(placeorderTestData[0].username, placeorderTestData[0].password);//call validLogin method from pageObjectpage .js file
     await page.waitForLoadState('networkidle');
    //const dashboardPage = new DashBoardPage(page);//inport the DashboardPage class and create its object
    await dashboardPage.searchProductAddToCart(placeorderTestData[0].productName);// call searchProduct method
    await dashboardPage.navigateToCart();//call navigateToCart method
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(placeorderTestData[0].productName);
    await cartPage.Checkout();


    // const OrdersReviewPage = poManager.getOrdersReviewPage();
    // await OrdersReviewPage.fillCountryAndSubmitOrder("ind");
    // const orderId = await OrdersReviewPage.SubmitAndGetOrderId();
    // console.log("Order Id is: "+orderId);

    // const orderConfirmationPage = poManager.getOrderConfirmationPage();
    // const orderId = await orderConfirmationPage.getOrderId();
    // console.log("Order Id is: "+orderId);
    // await orderConfirmationPage.navigateToOrdersPage();
    // const ordersPage = poManager.getOrdersPage();
    // await ordersPage.verifyOrderInOrdersPage(orderId);

   const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    
   //**********************dashboard page
//    await page.locator(".card-body b").first().waitFor();
//     await page.locator(".card-body b").first().waitFor();
//     // await page.locator(".card-body b").first().waitFor();
//    const titles = await page.locator(".card-body b").allTextContents();
//    console.log(titles); 
//    const count = await products.count();
//    for (let i = 0; i < count; ++i) {
//       if (await products.nth(i).locator("b").textContent() === productName) {
//          //add to cart
//          await products.nth(i).locator("text= Add To Cart").click();
//          break;
//       }
//    }

   //await page.locator("[routerlink*='cart']").click(); already created method in dashboard file

   //await page.locator("[routerlink*='cart']").click();


   //**********************checkout page
   //await page.pause();
   
//    await page.waitForLoadState('networkidle');
//    await page.waitForTimeout(1000);
//    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
//    //expect(bool).toBeTruthy();
//    console.log("Zara coat 3 visible:", bool);
//    await page.locator("text=Checkout").click();
//    await page.locator("[placeholder*='Country']").pressSequentially("ind");
//    const dropdown = page.locator(".ta-results");
//    await dropdown.waitFor();
//    const optionsCount = await dropdown.locator("button").count();
//    for (let i = 0; i < optionsCount; ++i) {
//       const text = await dropdown.locator("button").nth(i).textContent();
//       if (text === " India") {
//          await dropdown.locator("button").nth(i).click();
//          break;
//       }
//    }
//    expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
//    await page.locator(".action__submit").click();
//    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
//    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
//    console.log(orderId);

//    await page.locator("button[routerlink*='myorders']").click();
//    await page.locator("tbody").waitFor();
//    const rows = await page.locator("tbody tr");


//    for (let i = 0; i < await rows.count(); ++i) {
//       const rowOrderId = await rows.nth(i).locator("th").textContent();
//       if (orderId.includes(rowOrderId)) {
//          await rows.nth(i).locator("button").first().click();
//          break;
//       }
//    }
//    const orderIdDetails = await page.locator(".col-text").textContent();
//    expect(orderId.includes(orderIdDetails)).toBeTruthy();









//const poManager = new POManager(page);
//     //js file- Login js, DashboardPage
//      //const products = page.locator(".card-body");
//      //const loginPage = poManager.getLoginPage();
//      await loginPage.validLogin(data.username,data.password);
//      const dashboardPage = poManager.getDashboardPage();
//      await dashboardPage.searchProductAddCart(data.productName);
//      await dashboardPage.navigateToCart();

 });

 //import LoginPage from '../pageObjects/LoginPage.js';
//import { LoginPage } from '../pageObjects/loginPage.js';
//import DashBoardPage from '../pageObjects/DashBoardPage.js';
//import DashboardPage from '../pageobjects/DashboardPage.js';
//import CartPage from '../pageobjects/CartPage.js';
//import CheckoutPage from '../pageobjects/CheckoutPage.js';
//import OrderConfirmationPage from '../pageobjects/OrderConfirmationPage.js';
//import {POManager} from '../pageObjects/POManager';
//Json->string->js object
//import placeorderTestData from '../utils/placeorderTestData.json' assert { type: 'json' };
//const dataset = JSON.parse(JSON.stringify(placeorderTestData));
//import POManager from '../pageObjects/POManager.js';

for (const dataset of placeorderTestData) {
  customtest(`Client App login ${dataset.productName}`, async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const products = page.locator(".card-body");
     const loginPage = poManager.getloginPage();
     await loginPage.goTo();
     await loginPage.validLogin(dataset.username,dataset.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddToCart(dataset.productName);
     await dashboardPage.navigateToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(dataset.productName);
    await cartPage.Checkout();
});
}