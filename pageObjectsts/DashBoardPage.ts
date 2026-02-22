
import {Page,Locator,expect} from '@playwright/test';

class DashBoardPage{

    page:Page;
    products:Locator;
    productstext:Locator;
    cart:Locator;   
constructor(page:Page){
this.page = page;
this.products = page.locator(".card-body");
this.productstext = page.locator(".card-body b")
this.cart= page.locator("[routerlink*='cart']")
}
async searchProductAddToCart(productName:string){
//const titles = await this.productstext.allTextContents();
const titles = await this.productstext.allTextContents();
console.log(titles); 
   //const count = await products.count();
const count = await this.products.count();
   //const count = await products.count();
for (let i = 0; i < count; ++i) {
    if (await this.products.nth(i).locator("b").textContent() === productName) {
         //add to cart
await this.products.nth(i).locator("text= Add To Cart").click();
break;
      }
   }
}
async navigateToCart(){
    await this.cart.click();
}
}
//export default DashBoardPage;
export default DashBoardPage;