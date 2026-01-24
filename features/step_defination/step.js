import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
 let poManager;
Given('login to Ecommerce application with {string} and {string}', {timeout:100*1000}, async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
          const loginPage = this.poManager.getLoginPage();
          await loginPage.goTo();
          await loginPage.validLogin(username, password);
         });
When('add {string} to cart',{timeout:100*1000} ,async function (productName) {
           // Write code here that turns the phrase above into concrete actions
              this.dashboardPage = this.poManager.getDashboardPage();
              await this.dashboardPage.searchProductAddToCart(productName);
              await this.dashboardPage.navigateToCart();
         });
Then('verify {string} is displayed in cart', {timeout:100*1000},async function (productName) {
           // Write code here that turns the phrase above into concrete actions
             this.cartPage = this.poManager.getCartPage();
             await this.cartPage.VerifyProductIsDisplayed(productName);
         });
When('Enter valid details and placing the order', {timeout:100*1000}, async function () {
           // Write code here that turns the phrase above into concrete actions
          await this.cartPage.Checkout();
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(this.orderId);
         });
Then('verify order in present in the Orderhistory page', {timeout:100*1000},async function () {
           // Write code here that turns the phrase above into concrete actions
        await this.dashboardPage.navigateToOrders();
        const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
        await ordersHistoryPage.searchOrderAndSelect(this.orderId);
        expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
         });



Given('a login to Ecommerce2 application with {string} and {string}', async function (userName, password) {
           // Write code here that turns the phrase above into concrete actions
          // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
          const userNameField = this.page .locator('#username');
          const signIn = this.page .locator("#signInBtn");
          // cardTitles =  this.page .locator(".card-body a");
          await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
          console.log(await this.page.title());
          //css 
         await userNameField.fill(userName);
         await this.page .locator("[type='password']").fill(password);
         await signIn.click();   
         });
       
   
       
Then('Verify Error message is displayed', async function () {
           // Write code here that turns the phrase above into concrete actions
          await expect(this.page .locator("[style*='block']")).toContainText('Incorrect');
         });