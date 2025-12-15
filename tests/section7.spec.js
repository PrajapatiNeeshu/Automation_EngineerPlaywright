const { test, expect } = require('@playwright/test'); 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage


//Lecture --27
   const email = "neeshubiet@gmail.com";//declared the email address beofre needs to added every where
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");// all product on the page
   //needs to iterate the product one by one



   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Nee@kumar1234");
   await page.locator("[value='Login']").click();

   await page.waitForLoadState('networkidle');// needs added this network needs to added card body


   await page.locator(".card-body b").first().waitFor();  // first card should be presnet atleast so i added this waitfor
   const titles = await page.locator(".card-body b").allTextContents(); //.card-body for retrun all products

   console.log(titles); 

   //Lecture-28
   const count = await products.count();// how many product presnt on this page needs to matched elements on the page

   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart playwright support chaining locator one by one picup esliye esme "b" liya he .card-body block se sare item return krega one by one and make it 
         
         await products.nth(i).locator("text= Add To Cart").click();
         break; // will breake it will be stop our itration on this loop

         //"text= Add To Cart" based on the text playwright have locator as well

      }
   }

   //await page.pause();
   await page.locator("[routerlink*='cart']").click();// based on the [attribute = 'value]' added --
   //await page.pause();
   //<button _ngcontent-kau-c33="" routerlink="/dashboard/cart" class="btn btn-custom" style="margin-top: -10px;" tabindex="0"><i _ngcontent-kau-c33="" class="fa fa-shopping-cart"></i>&nbsp; Cart <label _ngcontent-kau-c33="" style="background-color: #96161f; border-radius: 2px; color: white; padding-left: 7px; padding-right: 7px;"></label></button>

   await page.locator("div li").first().waitFor();
   //li tag on the cart page to be visible on the cart page

   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();// y hamenesliye kiya he due to zara cot 3 added ro carto pr presnt he to mene tag name se choose kiya he tobevisible 
   //tag name should be h3 and text should be find the locator based on the text tag 

   expect(bool).toBeTruthy();// to be true in should be presnt in boolean


   //Lecture -30
   //<button _ngcontent-kau-c36="" type="button" class="btn btn-primary" css="2">Checkout</button>
   await page.locator("text=Checkout").click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) // added 150 milin sec because needs to wait 150 mil for each letter
  /*


await page.locator("[placeholder*='Country']").pressSequentially("ind");
This step may occasionally fail if the application server is slow due to heavy traffic. In such cases, you can introduce a delay and rewrite the step as:

await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
Here, a delay of 150 milliseconds is introduced between each key press.
That means it enters  i → (delay 150 ms) → enters n → (delay 150 ms) → enters d

By doing this, you give the application enough time to respond with the relevant options.

  */
//<input _ngcontent-kau-c35="" ngxtypeahead="" placeholder="Select Country" class="input txt text-validated" _nghost-kau-c32="">
  //dynamically fill the dropdwon fill the dropdwon value

   const dropdown = page.locator(".ta-results");

   //used class.  <section _ngcontent-kau-c32="" class="ta-results list-group ng-star-inserted"><div _ngcontent-kau-c32="" class="ta-backdrop"></div><button _ngcontent-kau-c32="" type="button" class="ta-item list-group-item ng-star-inserted"><span _ngcontent-kau-c32="" class="ng-star-inserted"><i _ngcontent-kau-c32="" class="fa fa-search"></i> British Indian Ocean Territory</span><!----><!----></button><button _ngcontent-kau-c32="" type="button" class="ta-item list-group-item ng-star-inserted"><span _ngcontent-kau-c32="" class="ng-star-inserted"><i _ngcontent-kau-c32="" class="fa fa-search"></i> India</span><!----><!----></button><button _ngcontent-kau-c32="" type="button" class="ta-item list-group-item ng-star-inserted"><span _ngcontent-kau-c32="" class="ng-star-inserted"><i _ngcontent-kau-c32="" class="fa fa-search"></i> Indonesia</span><!----><!----></button><!----></section>
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {// added space needs to matched with this space on the basis
         await dropdown.locator("button").nth(i).click();
         break;// only matched on the india so needs to matched he value and break the loop

      }
   }
 //Lecture- 32



//Locator
//<div _ngcontent-kau-c35="" class="user__name mt-5"><label _ngcontent-kau-c35="" type="text" style="color: lightgray; font-weight: 600;">neeshubiet@gmail.com</label><input _ngcontent-kau-c35="" type="text" class="input txt text-validated ng-untouched ng-pristine ng-valid"><div _ngcontent-kau-c35="" class="user__address"><br _ngcontent-kau-c35=""><div _ngcontent-kau-c35="" class="form-group"><input _ngcontent-kau-c35="" ngxtypeahead="" placeholder="Select Country" class="input txt text-validated" _nghost-kau-c32=""><!----><!----></div></div><div _ngcontent-kau-c35="" class="actions"><a _ngcontent-kau-c35="" class="btnn action__submit ng-star-inserted">Place Order <i _ngcontent-kau-c35="" class="icon icon-arrow-right-circle"></i></a><!----><!----></div></div>
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email); // will be verify seen the email address on the page


   //Locator of the button <a _ngcontent-kau-c35="" class="btnn action__submit ng-star-inserted">Place Order <i _ngcontent-kau-c35="" class="icon icon-arrow-right-circle"></i></a>

   //used .class method and click on the button
   await page.pause();
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

   // .em-spacer-1 .ng-star-inserted used this class for captute the information
   //<td _ngcontent-kau-c39="" class="em-spacer-1" style="text-align: center; font-size: 14px;"><label _ngcontent-kau-c39="" class="ng-star-inserted"> | 693e58c032ed8658713269b9 | </label><label _ngcontent-kau-c39="" class="ng-star-inserted"> | 693e58c032ed8658713269bc | </label><label _ngcontent-kau-c39="" class="ng-star-inserted"> | 693e58c032ed8658713269bf | </label><!----></td>
   
   //parent to child methods
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();

   //<tbody _ngcontent-kau-c38=""><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e818432ed86587132b2d3</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649434146.jpeg"></td><td _ngcontent-kau-c38="">ZARA COAT 3</td><td _ngcontent-kau-c38="">$ 11500</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e58c032ed8658713269bf</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649434146.jpeg"></td><td _ngcontent-kau-c38="">ZARA COAT 3</td><td _ngcontent-kau-c38="">$ 11500</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e58c032ed8658713269bc</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649561326.jpg"></td><td _ngcontent-kau-c38="">iphone 13 pro</td><td _ngcontent-kau-c38="">$ 55000</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e58c032ed8658713269b9</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649488046.jpg"></td><td _ngcontent-kau-c38="">ADIDAS ORIGINAL</td><td _ngcontent-kau-c38="">$ 11500</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e58a532ed865871326984</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649434146.jpeg"></td><td _ngcontent-kau-c38="">ZARA COAT 3</td><td _ngcontent-kau-c38="">$ 11500</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e586632ed8658713268f1</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649434146.jpeg"></td><td _ngcontent-kau-c38="">ZARA COAT 3</td><td _ngcontent-kau-c38="">$ 11500</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e4f1e32ed865871325769</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649434146.jpeg"></td><td _ngcontent-kau-c38="">ZARA COAT 3</td><td _ngcontent-kau-c38="">$ 11500</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><tr _ngcontent-kau-c38="" class="ng-star-inserted"><th _ngcontent-kau-c38="" scope="row">693e44d432ed865871324729</th><td _ngcontent-kau-c38=""><img _ngcontent-kau-c38="" width="70px" class="img-fluid" src="https://rahulshettyacademy.com/api/ecom/uploads/productImage_1650649434146.jpeg"></td><td _ngcontent-kau-c38="">ZARA COAT 3</td><td _ngcontent-kau-c38="">$ 11500</td><td _ngcontent-kau-c38="">Sun Dec 14</td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-primary" tabindex="0">View</button></td><td _ngcontent-kau-c38=""><button _ngcontent-kau-c38="" class="btn btn-danger">Delete</button></td></tr><!----></tbody>
   
   //tbody tr  tobody to tr paren to child trabvers
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
   console.log(rows);
 

   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {// matched with expcted roworderID and actual orderID
         await rows.nth(i).locator("button").first().click();// used first button because two button publish there at a time
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();// in this section we needs to fetech the order id will matched together
   // put this expected value in. this expected condition so make it more effective
   console.log(orderIdDetails);
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});
 