
import { test, expect } from '@playwright/test';
import { customtest } from '../utils/test-base';

// Import test data
import placeorderTestData from '../utils/placeorderTestData.json';

// Import Page Objects
import POManager from '../pageObjectsts/POManager';

test(`@Webs Client App login test`, async ({page})=>
 {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    const username = 'neeshubiet@gmail.com';
    const productName = 'iphone 13 pro';
    const password = 'Nee@kumar1234';
    const products = page.locator(".card-body");
    
     await loginPage.goTo();
     await loginPage.validLogin(placeorderTestData[0].username, placeorderTestData[0].password);
     await page.waitForLoadState('networkidle');
    
    await dashboardPage.searchProductAddToCart(placeorderTestData[0].productName);
    await dashboardPage.navigateToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(placeorderTestData[0].productName);
    await cartPage.Checkout();

   const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    
 });

for (const dataset of placeorderTestData) {
  customtest(`Client App login ${dataset.productName}`, async ({page, testDataForOrder})=>
 {
   const poManager = new POManager(page);
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(dataset.username, dataset.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddToCart(dataset.productName);
     await dashboardPage.navigateToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(dataset.productName);
    await cartPage.Checkout();
});
}





//const poManager = new POManager(page);
//     //js file- Login js, DashboardPage
//      //const products = page.locator(".card-body");
//      //const loginPage = poManager.getLoginPage();
//      await loginPage.validLogin(data.username,data.password);
//      const dashboardPage = poManager.getDashboardPage();
//      await dashboardPage.searchProductAddCart(data.productName);
//      await dashboardPage.navigateToCart();


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
  customtest(`@Data Client App login ${dataset.productName}`, async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
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