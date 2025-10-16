



import { test, expect ,page} from '@playwright/test';


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

test('First playwright test',  async ({browser})=>
{
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

  const context = await broswer.newContext();
  const page = await context.newPage();

  //if you are provinding the page parameter in the function you dont need to create a new page above two line .

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");







  




}
)