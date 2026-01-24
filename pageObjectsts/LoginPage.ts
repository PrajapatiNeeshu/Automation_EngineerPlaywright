import {Page,Locator,expect} from '@playwright/test';


class LoginPage {
    page:Page;
    signInbutton:Locator;
    userName:Locator;
    password:Locator;
   // loginbutton:Locator;
constructor(page:Page) {
    this.page = page;
    this.signInbutton = page.locator("[value='Login']");
    this.userName = page.locator("#userEmail")
    this.password = page.locator("#userPassword")
    //this.loginbutton = page.locator("#login").click();
}

async goTo(){
    await this.page.goto("https://rahulshettyacademy.com/client")
}


   async validLogin(username:string, password:string){
   await this.userName.fill(username);
   await this.password.fill(password);
   await this.signInbutton.click();
}
}
export default LoginPage;

