import { expect, test } from '@playwright/test';
 
test('Playwright Special locators', async ({ page }) => {
  //Lecture -36
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    //<label class="form-check-label" for="exampleCheck1">Check me out if you Love IceCreams!</label> if under label tag we can return with the hekp of lable so make it lable based
    //will perfom click action
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    
       //<label for="exampleFormControlSelect1">Gender</label>
    // selectOption make it female and ma options
    await page.getByLabel("Gender").selectOption("Female"); 
    //also have lable tag name <label class="form-check-label" for="inlineRadio2">Employed</label>
   
    await page.getByLabel("Employed").check();
     await page.getByPlaceholder("Password").fill("abc123");

     //Lecture 37
  await page.getByRole("button", {name: 'Submit'}).click();
//Date of Birth
    //await page.getByLabel("Date of Birth").fill(2025-12-10);
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    //<a class="nav-link" href="/angularpractice/shop">Shop</a>. this is anchor linked so make it good 
    await page.getByRole("link",{name : "Shop"}).click();
    //app-card this is CSS selector and make filter will show this 
    // this is chaining locator based on this based 
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
   
   
    //locator(css). needs to use all locator strageties 

    //lecture -39
    //<label for="exampleInputPassword1">Password</label>
   // <input class="form-control" id="exampleInputPassword1" placeholder="Password" type="password"></input>

    //lable can be identify can happned should be get together so make it only 
    //iside the fill task so make it goods
    // fill box and lable should be assocaited together the it wil be workds


    //Not works together becauee ther is no linkage both so make it linked together

   // <input class="form-control ng-untouched ng-pristine ng-invalid" name="email" required="" type="text"></input>
//<label>Email</label>

});


//Lecture 40
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "neeshubiet@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   //await page.locator("#userEmail").fill(email);
   //await page.locator("#userPassword").fill("Nee@kumar1234");
   await page.getByPlaceholder("email@example.com").fill(email);// used placed holder becaue no assocuation not there lable

   await page.getByPlaceholder("enter your passsword").fill("Nee@kumar1234");
   await page.getByRole('button',{name:"Login"}).click(); // get by role will be show in getby role


   await page.waitForLoadState('networkidle'); // wait for load network

   await page.locator(".card-body b").first().waitFor();
   
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add to Cart"}).click(); // used for filer option it will be filter 3 item

 //fetec the informtion from the all product list.
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();

   //used by text becaue no other locators are there
   await page.getByText("PLACE ORDER").click();
 // await page.locator("div .actions").getByRole("button").click();
//expect .getByText("Thankyou for the order.").toBeVisible();

   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
   //await page.pause();

})



//Lecture 42


test.only("Calendar validations",async({page})=>
{
 
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year]; // expected list we are creating for the validation purpose for each elemnet
    
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    //.react-date-picker__inputGroup <div class="react-date-picker__inputGroup" css="1" style=""><input hidden="" max="275760-09-13" min="0001-01-01" name="date" type="date" value="2025-12-14" style="visibility: hidden; position: absolute; z-index: -999;"><input autocomplete="off" class="react-date-picker__inputGroup__input react-date-picker__inputGroup__month" data-input="true" inputmode="numeric" max="12" min="1" name="month" placeholder="--" type="number" value="12" style="width: 18px;"><span class="react-date-picker__inputGroup__divider"> / </span><input autocomplete="off" class="react-date-picker__inputGroup__input react-date-picker__inputGroup__day" data-input="true" inputmode="numeric" max="31" min="1" name="day" placeholder="--" type="number" value="14" style="width: 18px;"><span class="react-date-picker__inputGroup__divider"> / </span><input autocomplete="off" class="react-date-picker__inputGroup__input react-date-picker__inputGroup__year" data-input="true" inputmode="numeric" max="275760" min="1" name="year" placeholder="----" step="1" type="number" value="2025" style="width: 36px;"></div>
   
    await page.locator(".react-date-picker__inputGroup").click();
    //<button aria-label="" class="react-calendar__navigation__label" type="button" style="flex-grow: 1;"><span class="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from">December 2025</span></button>
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();

//<button class="react-calendar__tile react-calendar__year-view__months__month" type="button" style="flex: 0 0 33.3333%; overflow: hidden; margin-inline-end: 0px;"><abbr aria-label="July 2027">July</abbr></button>
// we added all 12 month class and we will be added 6 elements
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click(); // monthNumber start from 0 so minus 1 monthNumber we added 6


    await page.locator("//abbr[text()='"+date+"']").click();
 
  const inputs = page.locator('.react-date-picker__inputGroup__input')// make it comman locator and try to find the all comman and make it for loop for the all
  
 
  for (let i = 0; i < expectedList.length; i++) // expected list length we are using for loop expected list already created above
    
    {
        const value = await inputs.nth(i).inputValue(); // at this point of we needs to fetch the value so make it input value  make it value
    expect(value).toEqual(expectedList[i]); // added this value of expected list for validation purpose
    
 
    }
})