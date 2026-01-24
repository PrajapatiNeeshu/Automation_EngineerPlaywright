import { Locator, Page } from "playwright"
//import { expect } from "@playwright/test"

let message :string =   "playwright JavaScripts"
console.log(message)
message =  "12345"
console.log(message)  
let age :number = 25
console.log(age)
age = 30
console.log(age)
let isactive :boolean = true
console.log(isactive)
isactive = false
console.log(isactive)  


let numbers :number[] = [10,20,30,40,50]
console.log(numbers)
numbers.push(60)
console.log(numbers)




let data :any = "hello"//accepts all data types any data typecdan be assigned
console.log(data)
data = 100
console.log(data)
data = true
console.log(data)
data = [1,2,3,4,5]
console.log(data)

function add (a:number,b:number):number{

    return a+b
}
add(10,20)
console.log(add(10,20))
//console.log(add("hello","world"))
//console.log(add(10,"20"))//throw the error as well because of type mismatch 

//code quality , readability , maintainability will be there in typescripts beacuse thisbis very import in the type sxripts


// let user: { name: string; age: number; isadmin: boolean } = {
//   name: "John",
//   age: 30,
//   isadmin: true
// }

// user.name = "Doe"
// user.age = 35
// user.isadmin = false

// console.log(user)
//In order to run this file without errors
//additional feature should be added in tsconfig.json file



// class LoginPage {

//     page:Page
//     loginLink:Locator
//     welcomeText:Locator
//     emailInput:Locator
//     passwordInput:Locator

//     //every time when an object is created this constructor will be called and needs to decloare the locator tpe then it will take the type scripts methods so make it like the that

//   constructor(page:Page) {
//     this.page = page;

//     // Locators
//     this.loginLink = page.locator('.ico-login');
//     this.welcomeText = page.getByText('Welcome, Please Sign In!');
//     this.emailInput = page.locator('#Email');
//     this.passwordInput = page.locator('#Password');
// }

//   async navigate() {
//     await this.page.goto('https://demowebshop.tricentis.com/');
//   }

//   async openLoginPage() {
//     await this.loginLink.click();
//   }

//   async verifyLoginPageSoft() {
//     await expect.soft(this.welcomeText).toBeVisible();
//     await expect.soft(this.emailInput).toBeVisible();
//     await expect.soft(this.passwordInput).toBeVisible();
//   }
// }


// export {LoginPage};
//tsconfig.json file changes made below


function add1(a:number,b:number):number{
  return a+b;
}
console.log(add1(10,20));

let user1:{name:string,age:number,isadmin:boolean}={
  name:"John",
  age:30,
  isadmin:true
}
user1.name="Doe"
user1.age=35
user1.isadmin=false
console.log(user1)

class LoginPage {

  page: Page
  loginLink: Locator
  welcomeText: Locator
  emailInput: Locator
  passwordInput: Locator

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.loginLink = page.locator('.ico-login');
    this.welcomeText = page.getByText('Welcome, Please Sign In!');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
  }

  async navigate() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async openLoginPage() {
    await this.loginLink.click();
  }

  async verifyLoginPageSoft() {
    await expect.soft(this.welcomeText).toBeVisible();
    await expect.soft(this.emailInput).toBeVisible();
    await expect.soft(this.passwordInput).toBeVisible();
  }
}

export { LoginPage };// "strict": true,
// "noImplicitAny": true,
// "strictNullChecks": true,
// "strictFunctionTypes": true,
// "strictBindCallApply": true,
// "strictPropertyInitialization": true,
// "noImplicitThis": true,
// "alwaysStrict": true,

import {test, expect} from '@playwright/test';



// copy from cart pageObject Model so it will be easy to use the cart page methods in the test file 
//convert JS to TS based on the above examples
//needs to type as well if its make it good then shold be get proper identation 

class CartPage
{   
  page:Page;
  cartProducts:Locator;
  productsText:Locator;
  cart:Locator;
  orders:Locator;
  checkout:Locator;// needs to be declared in the constructor as well for every locator in ts in ts we needs to dec;ared the project key value as well
  productName:any ; 

constructor(page:Page)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}
async VerifyProductIsDisplayed(productName:string)
{
    await this.cartProducts.waitFor();
    const bool =await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();

}
async Checkout()
{
    await this.checkout.click();
}

getProductLocator(productName: string): Locator {
  return this.page.locator("h3:has-text('" + productName + "')");
}

}
export default CartPage;


function multiply(a:number,b:number):number{
  return a*b;
}
console.log(multiply(5,10));

let user2: {name:string,age:number,isadmin:boolean}={
  name:"Jane",
  age:45,
  isadmin:true
}

console.log(user2.name);