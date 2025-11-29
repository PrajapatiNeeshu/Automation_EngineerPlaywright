import { test } from "@playwright/test";

/*test('first Playwright test ' , async({page})=>{

  }
  )


/*test('Browser Context Test Playwright - invalid login shows error', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/#');

  await page.locator('#username').fill('rahulshetty');
  await page.locator('#password').fill('learning');
  await page.locator('#signInBtn').click();

  const alert = page.locator("[style*='block']");
  console.log('Alert text:', await alert.textContent());
  await expect(alert).toContainText('Incorrect username/password.');
});
*/

test("First playwright test", async ({ browser }) => {
  // Write your test code here
  //javascript is async in nature.
  //step1-open browser
  //step2-enter u/p
  //step3-cleck login button
  //step4

  //javascript code to be executed in sequence
  //async and await

  //async makes a function return a Promise
  //await makes a function wait for a Promise

  //async await is used to handle promises in a more comfortable fashion
  //it makes the code look like synchronous code

  //async await can only be used inside an async function

  //async function myFunction() {
  //return "Hello";.then(alert);

  //needds to await for the promise to be resolved before moving to the next step
  //await makes the code wait until the promise is resolved
  //await can only be used inside an async function
  //}

  //myFunction();

  //needs to write the await code function called async
  //await will mark when async put in function
  //async function myFunction() {
  //return "Hello";.then(alert);
  //}.

  //anamous function

  //Fixture nothbut as like global variabale will be captured by playwright it will be show globally.
  //context
  //chrome- plugins/ cookies/cache
  //browser context is like a new browser profile
  //incognito window
  //each test will run in a new browser context
  //no cookies/cache/shared between tests
  //isolated environment

  //page- tab
  //browser context can have multiple pages/tabs

  //single test will have single page
  //multiple test will have multiple pages

  //browser- chrome/ firefox
  //browser can have multiple browser contexts

  //browser can be chrome/firefox/safari
  //playwright supports multiple browsers

  //browser-> browser context-> page

  //test is a function which takes two arguments
  //1. test name
  //2. anonomous function which contains the test code
  //anonomous function takes one argument which is an object destructuring
  //object destructuring is a way to extract properties from an object and assign them to variables
  //here we are extracting page property from the object and assigning it to a variable named page
  //page variable is used to interact with the web page
  //page is a fixture provided by playwright
  //fixture is a way to set up the test environment
  //fixture can be used to set up the browser, context, page, etc

  //test('test name', async ({page}) => {
  //test code
  //})

  //test is a function which takes two arguments
  //1. test name
  //2. anonomous function which contains the test code
  //anonomous function takes one argument which is an object destructuring
  //object destructuring is a way to extract properties from an object and assign them to variables
  //here we are extracting page property from the object and assigning it to a variable named page
  //page variable is used to interact with the web page
  //page is a fixture provided by playwright
  //fixture is a way to set up the test environment
  //fixture can be used to set up the browser, context, page, etc

  //have to wait for each and every step for step to write to goto

  const context = await browser.newContext();
  const page = await context.newPage();

  //context will executed the new browser as well
  //
  //two type of return type in java all variable

  //if you are provinding the page parameter in the function you dont need to create a new page above two line .

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //please make it login page

  //await page.locator("#username").fill("rahulshettyacademy");
  //await page.locator("#password").fill("learning");
  // await page.locator("#signInBtn").click();
  //css #id .class tagname[attribute='value'] xpath //tagname[@attribute='value']

  //await page.waitForTimeout(5000);//static wait

  //dynamic wait
  //explicit wait
  //implicit wait

  //wait for selector
  //await page.waitForSelector("div[class*='login-container'] h2");

  //const title = await page
  // .locator("div[class*='login-container'] h2")
  // .textContent();
  //console.log(title);

  //css selector for practice

  //if iD present use #
  //if class present use .
  //if class attribute is present
  //CSS >-  tagename.class or .class
  //write Css with traversing from parent to child
  //css>--parenttagname...childname
  //if needs to write to text content
  //css= text='text content'
  //xpath - //tagname[@attribute='value']
  //xpath - //tagname[text()='text content']
  //xpath - //tagname[contains(@attribute,'value part of value')]
  //xpath - //tagname[contains(text(),'part of text content')].

  const username = await page.locator("#username");
  const password = await page.locator("#password");
  const signInBtn = await page.locator("#signInBtn");

  //await username.fill("rahulshettyacademy");
  //await password.fill("learning");
  //await signInBtn.click();
  // await page.locator("#username").fill("rahulshettyacademy");
  // await page.locator("#password").fill("learning");
  //await page.locator("#signInBtn").click();
  //const errorMessage = await page.locator("[style*='block']").textContent();
  // console.log(errorMessage);

  //consol.log(page.consoleMessages());
  //console.log(page.pageErrors());

  //type -fill provide to input the box. //click- button click

  ///await usernname.fill("");
  //by the ifwe fillll incorrect any id then it will be wipe of all the existing username passord

  await username.fill("rahulshettyacademy");
  await password.fill("learning");
  await signInBtn.click();
  const carttitle = await page.locator(".card-body a");
  //lecture :-15 undertstand how wait mechnisim workd list of elements are return
  const allTitles = await carttitle.allTextContents(); // all contains will capture from DOM.
  const text1 = await carttitle.nth(1).textContent(); // index value from nth1
  const text2 = await carttitle.first().textContent(); // first value will be capture
  console.log(text1 + " " + text2);
  console.log(allTitles);
});

test("@Web Client App login", async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "anshika@gmail.com";
  const productName = "zara coat 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
