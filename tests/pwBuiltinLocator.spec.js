"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

1.page.getByRole() to locate by explicit and implicit accessibility attributes.
2.page.getByText() to locate by text content. NON intertractive elements
3.page.getByLabel() to locate a form control by associated label's text.
4.page.getByPlaceholder() to locate an input by placeholder.
5.page.getByAltText() to locate an element, usually image, by its text alternative.
6.page.getByTitle() to locate an element by its title attribute.
7.page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).



*/
const test_1 = require("@playwright/test");
(0, test_1.test)("playwright locators", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    //page.getByAltText() to locate an element, usually image, by its text alternative.
    //use this locator when your elements supports alt test such as img and area elememnts
    //https://demo.nopcommerce.com/
    yield page.goto("https://demo.nopcommerce.com/");
    const logo = page.getByAltText("nopCommerce demo store");
    //removed the await due to it will not effective the expression 
    //if not doing any action no needed await.
    // if performing any action so will be use await and returing the any promise then will use await
    //just we capturing inly image so we are able to remove the await e
    //locator aslo is fixture as well 
    yield (0, test_1.expect)(logo).toBeVisible();
    //here it required due we are perfoming the action 
    //tobievisible returning the Void 
    //returing some promise
    //2.page.getByText() to locate by text content. you can match by a subdtring , exact string
    //locate by visible text
    //use this locator to find non interactive elemetns like div ,span ,p etc noy possible any action on that elements
    //for interactive elements like button a input etc use role locator
    //<p> welcome </p>
    //<div> hellow</div>
    //text not an attribute
    //sometimes not have any attribute most of the time by get bytext
    //const text:Locator = page.getByText("Welcome to our store").toBeVisible()
     expect(page.getByText("Welcome to our store")).toBeVisible();
    //await expect(page.getByText("welcome to")).toBeVisible(); // Passed substring
    //await expect(page.getByText(/welcome\s+To\s+Our|s+Store/i)).toBeVisible();
    //page.getByText() to locate by text content. "Welcome to our store" provieded wil be substring and it will works
    //get by text accept all substring 
    //1.page.getByRole() to locate by explicit and implicit accessibility attributes.
    //role = something some make sure it will be role will be there inclued buttons 
    /*
    Role locator include buttons, checkbox, headings links list, table, and more than. follow W3c specifivcation for ARIA role
    
    Sign up
     Subscribe
    
    
    <h3>Sign up</h3>
    <label>
      <input type="checkbox" /> Subscribe
    </label>
    <br/>
    <button>Submit</button>
    
    You can locate each element by its implicit role:
    
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
    
    await page.getByRole('checkbox', { name: 'Subscribe' }).check();
    
    await page.getByRole('button', { name: /submit/i }).click();
    
    
    
    implecit tag name and role both are same
    
    explecity based role tag name and role both are different
    ARIA role based on the different both
    
    
    */
    yield page.getByRole("link", { name: 'Register' }).click();
    //await page.getByRole('link', { name: 'Register' }).click();
    //click is action methods so we are making the action we needed await methods
    // there is returing the promisses so making the 
    yield (0, test_1.expect)(page.getByRole('heading', { name: 'Register' })).toBeVisible(); // get by text as well 
    //Throw error since Text matching with 3 elements. we can not perform any action
    //await expected (page.getByText('Registor'))/toBeVisible();// Error:- Strict mode Violation
    //3.page.getByLabel() 
    /*
    
    Locate by label
    Most form controls usually have dedicated labels that could be conveniently used to interact with the form. In this case, you can locate the control by its associated label using page.getByLabel().
    
    For example, consider the following DOM structure.
    
    Password
    <label>Password <input type="password" /></label>
    
    
    You can fill the input after locating it by the label text:
    
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByLabel('Password').fill('secret');
    await page.getByRole('heading', { name: 'Register' }).click();
    await page.getByText('Your Personal Details').click();
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('textbox', { name: 'First name:' }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('neeshu');
    await page.getByRole('textbox', { name: 'Last name:' }).click();
    await page.getByRole('textbox', { name: 'Last name:' }).fill('kumar');
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('neeshu@biet@gmail.comn');
    await page.getByRole('textbox', { name: 'Company name:' }).click();
    await page.getByRole('textbox', { name: 'Company name:' }).fill('insosys');
    await page.getByRole('textbox', { name: 'Password:', exact: true }).click();
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('124');
    await page.getByRole('textbox', { name: 'Confirm password:' }).click();
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('1241');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('234');
    await page.getByRole('button', { name: 'Register' }).click();
    */
    yield page.getByLabel('First name:').fill("john");
    yield page.getByLabel('Last name:').fill("kenedy");
    yield page.getByLabel('Email').fill("edygpm@gmail.com");
    //4.page.getByPlaceholder() attribute of elements
    yield page.getByPlaceholder("Search store").fill("Apple Mac Book");
    //.page.getByTitle()  when to use : when your elemt has a meangfull title attribute in HTMl DOM/*
    /*
    
    Locate by title
    Locate an element with a matching title attribute using page.getByTitle().
    
    For example, consider the following DOM structure.
    
    25 issues
    <span title='Issues count'>25 issues</span>
    
    You can check the issues count after locating it by the title text:
    
    await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
    */
    /*
    Locate by test id************
    Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes, the test will still pass. QA's and developers should define explicit test ids and query them with page.getByTestId(). However testing by test ids is not user facing. If the role or text value is important to you then consider using user facing locators such as role and text locators.
    
    For example, consider the following DOM structure.
    
    <button data-testid="directions">Itinéraire</button>
    
    You can locate the element by its test id:
    
    await page.getByTestId('directions').click();
    
    */
    //await expect (page.getByTestId("profile-email")).toHaveText("jone.do@example.com");
    //await expect (page.getByTestId("profile-name")).toHaveText("jone Doe");
    //needs to get assertion make it 
}));
//Xpath
