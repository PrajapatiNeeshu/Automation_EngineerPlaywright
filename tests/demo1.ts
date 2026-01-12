import { Locator, Page } from "playwright"
import { expect } from "@playwright/test"

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


let user: { name: string; age: number; isadmin: boolean } = {
  name: "John",
  age: 30,
  isadmin: true
}

user.name = "Doe"
user.age = 35
user.isadmin = false

console.log(user)
//In order to run this file without errors
//additional feature should be added in tsconfig.json file



class LoginPage {

    page:Page
    loginLink:Locator
    welcomeText:Locator
    emailInput:Locator
    passwordInput:Locator

    //every time when an object is created this constructor will be called and needs to decloare the locator tpe then it will take the type scripts methods so make it like the that

  constructor(page:Page) {
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


export {LoginPage};
//tsconfig.json file changes made below





