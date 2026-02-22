//JavaScript// tests/comprehensive-playwright-demo.spec.js

import { test, expect, chromium, devices } from '@playwright/test';
import fs from 'fs'; // For file handling in upload/download tests
import path from 'path'; // For constructing file paths
const iphone = devices['iPhone 13'];
const context = await browser.newContext({
  ...iphone,
  recordVideo: {
    dir: 'videos/',
    size: { width: 1280, height: 720 },
    viewport: { width: 1280, height: 720 }
  }
});

// const browser = await chromium.launch();
  // const context = await browser.newContext();
  // const page = await context.newPage();
  //create context in width viewport






const page = await context.newPage();
// Create artifact directories once before all tests
test.beforeAll(async () => {
  ['screenshots', 'videos', 'downloads'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
});


test('1-2: Login and verify dashboard', async ({ }) => {

  
  //

  const context = await chromium.launch({ headless: false });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator("#username").fill("neeshubiet@gmail.com");
  await page.locator("#password").fill("nee@kumar123");
  await page.click('button[type="submit"]');
  const dashboardText = await page.textContent('.subheader');
  console.log('Dashboard text:', dashboardText);
  // Step 3: Verify page title
  await expect(page).toHaveTitle('Dashboard - Example App');
  // Step 4: Verify dashboard heading
  const dashboardHeading = page.locator('h1');
  await expect(dashboardHeading).toBeVisible();
  await expect(dashboardHeading).toHaveText('Dashboard');
  // Step 5: Verify logged-in username
  const userName = page.locator('#userProfileName');
  await expect(userName).toHaveText('Welcome, Test User');
  // Step 6: Verify important dashboard widget
  const totalOrders = page.locator('.total-orders');
  const ordersText = await totalOrders.innerText();
  console.log('Orders Count:', ordersText);
  // Step 7: Verify logout button exists
  await expect(page.locator('#logoutBtn')).toBeVisible();
  await expect(page.locator('.subheader')).toHaveText('Welcome to the Secure Area. When you are done click logout below');
  await page.screenshot({ path: 'screenshots/login_success.png' });
});
test('3-5: Form filling, gender selection, checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#userEmail', 'john.doe@example.com');
  await page.fill('#userNumber', '1234567890');
  await page.fill('#currentAddress', '123 Taj Road, Agra, India');
  // Select Male radio (equivalent to dropdown in many forms)
  await page.click('label[for="gender-radio-1"]');

  //or

// Step 1: Navigate to the page containing dropdown
//await page.goto('https://demoqa.com/select-menu');

// Step 2: Locate the dropdown element using locator
// This dropdown is a standard <select> HTML element
//const genderDropdown = page.locator('#oldSelectMenu');

// Step 3: Validate dropdown is present and visible on UI
await expect(genderDropdown).toBeVisible();

// Step 4: Select option using selectOption()
// Here we are selecting by VALUE attribute
// value="1" represents "Male"
await genderDropdown.selectOption({ value: '1' });

// Step 5: Fetch selected value for verification
const selectedGender = await genderDropdown.inputValue();
//✅ Select by VALUE (Most common)
await page.selectOption('#country', 'IN');
//✅ Select by LABEL (Visible text)
await page.selectOption('#country', { label: 'India' });

//✅ Select by INDEX

await page.selectOption('#country', { index: 2 });//

//✅ Verify Selected Value
const selectedValue = await page.locator('#country').inputValue();
expect(selectedValue).toBe('IN');

// Step 6: Print selected value in console
console.log('Selected Gender Value:', selectedGender);
  // Select Hobbies checkbox (Sports)
  await page.check('label[for="hobbies-checkbox-1"]');

  await page.screenshot({ path: 'screenshots/form_filled.png', fullPage: true });
});

test('6-7: Screenshot and iframe handling', async ({ page }) => {
  // Iframe handling
  await page.goto('https://the-internet.herokuapp.com/iframe');
  const frame = page.frameLocator('#mce_0_ifr');
  await frame.locator('body#tinymce').fill('Hello from Playwright iframe!');
  await frame.locator('body').screenshot({ path: 'screenshots/iframe_content.png' });
});

test('6b: Nested iframe handling test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested-frames');
  const nestedFrame = page.frameLocator('frame[name="frame1"]');
  await nestedFrame.locator('body').screenshot({ path: 'screenshots/nested_frame.png' });
});

test('6c: Multiple iframes handling test', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');
  const frame1 = page.frameLocator('#frame1');
  const frame2 = page.frameLocator('#frame2');
  await frame1.locator('h1').screenshot({ path: 'screenshots/frame1.png' });
  await frame2.locator('h1').screenshot({ path: 'screenshots/frame2.png' });
});

test('6d: Multiple iframes handling test with for loop', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_iframe.asp');
  const frames = page.frames();
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const frameContent = await frame.content();
    fs.writeFileSync(`screenshots/frame_${i}.html`, frameContent);
  }
});
test('8: Mobile emulation with iPhone 13', async ({ browser }) => {
  const iPhone13 = devices['iPhone 13'];
  const context = await browser.newContext({ ...iPhone13 });
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
  await page.screenshot({ path: 'screenshots/mobile_iphone13.png' });
  await context.close();
});

test('9: File upload and download', async ({ page }) => {
  // Upload
  await page.goto('https://the-internet.herokuapp.com/upload');
    // 2. File ka path banao
  const filePath = path.join(__dirname, 'sample-upload.txt');
  // 3. File upload karo
  await page.setInputFiles('#file-upload', filePath);
  // 4. Upload button click
  await page.click('#file-submit');
  // 5. Verify file name
  await expect(page.locator('#uploaded-files'))
    .toHaveText('sample-upload.txt');

  // Download
  // 2. Download start hone ka wait + click
  //write code with promise.all for download
  
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('text=some-file.txt')
  ]);

  // 3. File kaha save hogi
  const filePath1 = path.join(__dirname, 'some-file.txt');
  // 4. File save karo
  await download.saveAs(filePath1);
  console.log('File downloaded at:', filePath1);
});


test('@popwindow 10: New tabs and popup windows', async ({ context, page }) => {
  // New tab


  await page.goto('https://the-internet.herokuapp.com/windows');
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Click Here')
  ]);
  await newTab.waitForLoadState();
  console.log('New tab title:', await newTab.title());
  await newTab.close();
  // New window (popup)
  await page.goto('https://demoqa.com/browser-windows');
  const [newWindow] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#windowButton')
  ]);
  await newWindow.waitForLoadState();
  const windowText = await newWindow.textContent('#sampleHeading');
  console.log('Popup window text:', windowText);
  await newWindow.close();
});
test('Handle new tab', async ({ context, page }) => {
  // Parent page open
  await page.goto('https://the-internet.herokuapp.com/windows');
  // New tab ka wait + click
  const newTab = await context.waitForEvent('page');
  await page.click('text=Click Here');
  // New tab ready hone ka wait
  await newTab.waitForLoadState();
  // New tab ka title
  console.log('New Tab Title:', await newTab.title()); 
  // New tab close
  await newTab.close();
});


test('Handle new window (popup)', async ({ context, page }) => {
  await page.goto('https://demoqa.com/browser-windows');
  // New window wait + click
  const newWindow = await context.waitForEvent('page');
  await page.click('#windowButton');
  await newWindow.waitForLoadState();
  // Popup text verify
  const text = await newWindow.textContent('#sampleHeading');
  console.log('Popup Text:', text);
  // Close popup
  await newWindow.close();
});


//✅ 5️⃣ Multiple Tabs Handle
test('multiple tabs', async ({ page, context }) => {

  await page.goto('https://demoqa.com/browser-windows');

  const [tab1] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#windowButton')
  ]);

  const [tab2] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#windowButton')
  ]);

  await tab1.waitForLoadState();
  await tab2.waitForLoadState();

  console.log(await tab1.title());
  console.log(await tab2.title());

});
//✅ 4️⃣ Handle Popup (page.waitForEvent)
test('handle popup', async ({ page }) => {
  await page.goto('https://demoqa.com/browser-windows');
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#windowButton')
  ]);
  await popup.waitForLoadState();
  console.log(await popup.title());
});

//✅ 3️⃣ Close Child Tab & Back to Parent
test('close child tab', async ({ page, context }) => {

  await page.goto('https://demoqa.com/browser-windows');

  const [child] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#windowButton')
  ]);
  await child.waitForLoadState();
  await child.close();   // ❌ close child

  // ✅ back to parent
  console.log('Parent Title:', await page.title());

});
//✅ 2️⃣ Handle New Tab (context.waitForEvent)
test('handle new tab', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Click Here')
  ]);
  await newTab.waitForLoadState();
  console.log('New Tab Title:', await newTab.title());
  await newTab.close();
});


//✅ 1️⃣ Handle New Tab (Simple)
test('handle new tab', async ({ page, context }) => {
  await page.goto('https://demoqa.com/browser-windows');
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#windowButton')
  ]);
  await newTab.waitForLoadState();
  console.log('New Tab Title:', await newTab.title());
});


test.only('12: Mouse actions - double click, right click, hover', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  // Double click
  await page.dblclick('#doubleClickBtn');
  await expect(page.locator('#doubleClickMessage')).toBeVisible();

  // Right click
  await page.click('#rightClickBtn', { button: 'right' });
  await expect(page.locator('#rightClickMessage')).toBeVisible();

  // make it mouse hover
    await page.goto('https://demoqa.com/menu');
    await page.hover('ul#nav li:nth-child(2) > a');
  await page.screenshot({ path: 'screenshots/hover_effect.png' });
});
//what is the difference between page.click and page.hover_effect
test('13-14: Evaluate JavaScript and handle dialogs/alerts', async ({ page }) => {
  // Evaluate JS
  await page.goto('https://example.com');
  const title = await page.evaluate(() => document.title);
  console.log('Title via evaluate:', title);
  // Handle alerts  
  //make it dialog handling 
  // Handle dialogs 
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept('Playwright Response');
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.click('text=Click for JS Alert');
  await page.click('text=Click for JS Confirm');
  await page.click('text=Click for JS Prompt');
});

test('15: Screenshot for visual testing reference', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.screenshot({ path: 'screenshots/visual_reference.png', fullPage: true });
});

test('16: Basic authentication and storage state', async ({ browser }) => {
   const context = await browser.newContext({
    httpCredentials: { username: 'admin', password: 'admin' }
  });
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  await expect(page.locator('.example p')).toHaveText('Congratulations! You must have the proper credentials.');
  await context.storageState({ path: 'auth.json' });
  console.log('Authentication state saved to auth.json');
  await context.close();
});

test('17: Record video', async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 1280, height: 720 }
    }
  });
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.click('text=More information...');
  await context.close(); // Video is saved automatically
  console.log('Video recorded and saved in videos/ folder');
});
//write code for playwright API testing with GET, POST, PUT, DELETE requests and response validation
test('18: API testing with Playwright', async ({ request }) => {
  // Base URL for API
  const baseURL = 'https://jsonplaceholder.typicode.com';
  // GET request with header , response validation and print response in console
  const getResponse = await request.get(`${baseURL}/posts/1`, {
    headers: {
      'User-Agent': 'Playwright Test'
    }
  });
  expect(getResponse.status()).toBe(200);
  const getData = await getResponse.json();
  console.log('GET Response:', getData);
  // POST request
  const postResponse = await request.post(`${baseURL}/posts`, {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  });
  expect(postResponse.status()).toBe(201);
  const postData = await postResponse.json();
  console.log('POST Response:', postData);
  // PUT request
  const putResponse = await request.put(`${baseURL}/posts/1`, {
    data: {
      id: 1,  
      title: 'updated title',
      body: 'updated body',
      userId: 1
    }
  });
  expect(putResponse.status()).toBe(200);
  const putData = await putResponse.json();
  console.log('PUT Response:', putData);
  // DELETE request
  const deleteResponse = await request.delete(`${baseURL}/posts/1`);
  expect(deleteResponse.status()).toBe(200);
  console.log('DELETE Response Status:', deleteResponse.status());
});
//write API testing in playwright  100 ends  from API testing with Playwright, including GET, POST, PUT, DELETE requests and response validation, using a loop to test multiple endpoints and print results in console
test('19: API testing with multiple endpoints', async ({ request }) => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const endpoints = ['/posts/1', '/posts/2', '/posts/3'];
  for (const endpoint of endpoints) {
    const response = await request.get(`${baseURL}${endpoint}`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(`GET ${endpoint} Response:`, data);
  }
});


//please create 20 ends point I have test one test function for 3 endpoints please create 20 endpoints in loop and test them
test('20: API testing with 20 endpoints', async ({ request }) => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const endpoints = Array.from({ length: 20 }, (_, i) => `/posts/${i + 1}`);
  for (const endpoint of endpoints) {
    const response = await request.get(`${baseURL}${endpoint}`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(`GET ${endpoint} Response:`, data);
  }
});

// please create the authetication and athurization API testing in playwright with 20 endpoints and test them in loop and print the results in console


test('21: Authentication and Authorization API testing', async ({ request }) => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const endpoints = Array.from({ length: 20 }, (_, i) => `/posts/${i + 1}`);
  for (const endpoint of endpoints) {
    const response = await request.get(`${baseURL}${endpoint}`, {
      headers: {
        'Authorization': 'Bearer your_token_here'
      }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(`GET ${endpoint} with Auth Response:`, data);
  }
});

//API mocking and stubbing in playwright with 20 endpoints and test them in loop and print the results in console
test('22: API mocking and stubbing', async ({ page }) => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const endpoints = Array.from({ length: 20 }, (_, i) => `/posts/${i + 1}`);
  
  // Mocking API responses
  for (const endpoint of endpoints) {
    await page.route(`${baseURL}${endpoint}`, route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: `Mocked response for ${endpoint}` })
      });
    });
  }

  // Testing the mocked endpoints
  for (const endpoint of endpoints) {
    const response = await page.request.get(`${baseURL}${endpoint}`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(`Mocked GET ${endpoint} Response:`, data);
  }
});
//write simple mocking  single API Testing in playwright and print the result in console    
test('23: Simple API mocking', async ({ page }) => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const endpoint = '/posts/1';
    await page.route(`${baseURL}${endpoint}`, route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: `Mocked response for ${endpoint}` })
      });
    });
    const response = await page.request.get(`${baseURL}${endpoint}`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(`Mocked GET ${endpoint} Response:`, data);
});


//APIutils.js
export async function makeAuthenticatedRequest(request, method, url, token, data = null) {
  const options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  if (data) options.data = data;
  let response;
  switch (method.toUpperCase()) {
    case 'GET':
      response = await request.get(url, options);
      break;
    case 'POST':
      response = await request.post(url, options);
      break;
    case 'PUT':
      response = await request.put(url, options);
      break;
    case 'DELETE':
      response = await request.delete(url, options);
      break;
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
  return response;
}
//please create dbhelper.js file for database connection and query execution in playwright API testing
import mysql from 'mysql2/promise';
export class DBHelper {
  constructor(config) {
    this.config = config;
    this.connection = null;
  }
  async connect() {
    this.connection = await mysql.createConnection(this.config);
    console.log('Database connected');
  }
  async query(sql, params) {
    if (!this.connection) {
      throw new Error('Database not connected');
    }
    const [rows] = await this.connection.execute(sql, params);
    return rows;
  }
  async close() {
    if (this.connection) {
      await this.connection.end();
      console.log('Database connection closed');
    }
  }
}
//please create playwright.config.js file for setting up the configuration for playwright tests including test directory, timeout, retries, and reporter
import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  retries: 2,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'only-on-failure',
    //added project as well chromium and firefox
  },
});
//create one login.js page class and user test case like this.
//login.js


export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
  }
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async verifyLoginSuccess() {
    const dashboardText = await this.page.textContent('.subheader');
    console.log('Dashboard text:', dashboardText);
    await expect(this.page).toHaveTitle('Dashboard - Example App');
    const dashboardHeading = this.page.locator('h1');
    await expect(dashboardHeading).toBeVisible();
    await expect(dashboardHeading).toHaveText('Dashboard');
    const userName = this.page.locator('#userProfileName');
    await expect(userName).toHaveText('Welcome, Test User');
    const totalOrders = this.page.locator('.total-orders');
    const ordersText = await totalOrders.innerText();
    console.log('Orders Count:', ordersText);
    await expect(this.page.locator('#logoutBtn')).toBeVisible();
    await expect(this.page.locator('.subheader')).toHaveText('Welcome to the Secure Area. When you are done click logout below');
  }
}
//login.spec.js
//import { test } from '@playwright/test';
//import { LoginPage } from './login';
test('Login and verify dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://the-internet.herokuapp.com/login');
  await loginPage.login();
  await loginPage.verifyLoginSuccess();
});
//please BDD format same as above but with feature file and step definition file for login functionality
//login.feature
//Feature: Login functionality
 // Scenario: User should be able to login and see dashboard
   // Given I am on the login page
    //When I enter valid credentials and submit
    //Then I should see the dashboard with welcome message
//login.steps.js
// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { LoginPage } from './login';
let loginPage;
Given('I am on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await this.page.goto('https://the-internet.herokuapp.com/login');
});

When('I enter valid credentials and submit', async function () {
  await loginPage.login();
});

Then('I should see the dashboard with welcome message', async function () {
  await loginPage.verifyLoginSuccess();
});



/*Q1: Your test is failing. Walk me through your debugging approach.
Answer:
Systematic Debugging Approach:
1. Analyze Error Messages: Read the complete error stack trace first
2. Reproduce Locally: Run the exact same test in your local environment
3. Use Trace Viewer: Best tool for post-execution analysis in CI environments
4. Interactive Debug: Use --debug flag for step-by-step execution
5. Visual Evidence: Check screenshots/videos for UI issues
6. Network Analysis: Inspect API calls and response times
7. Environment Comparison: Compare local vs CI differences


*/

//How do you handle CI/CD integration?" 
/*Answer:
1. Version Control: Store tests in Git repository
2. CI Configuration: Use Jenkins/GitHub Actions to run tests on code changes
3. Environment Setup: Configure test environments in CI
4. Parallel Execution: Run tests in parallel for faster feedback
5. Reporting: Generate and publish test reports in CI
6. Notifications: Set up alerts for test failures
7. Maintenance: Regularly update tests and CI configurations

*/
// "What's your strategy for reducing flaky tests?" 
/*Answer:
1. Stable Locators: Use robust selectors that are less likely to change
2. Waits and Timeouts: Implement appropriate waits for elements to be ready
3. Isolate Tests: Ensure tests are independent and do not rely on shared state
4. Mocking/Stubbing: Mock external dependencies to reduce variability
5. Retry Logic: Implement retries for known flaky tests
6. Regular Review: Continuously analyze and fix flaky tests
7. Environment Consistency: Ensure test environments are stable and consistent

*/
//"How would you debug this failing test?"
/*Answer:
1. Analyze Error Messages: Read the complete error stack trace first
2. Reproduce Locally: Run the exact same test in your local environment
3. Use Trace Viewer: Best tool for post-execution analysis in CI environments
4. Interactive Debug: Use --debug flag for step-by-step execution
5. Visual Evidence: Check screenshots/videos for UI issues
6. Network Analysis: Inspect API calls and response times
7. Environment Comparison: Compare local vs CI differences

*/

//Test Hooks (Setup & Cleanup):
/*Answer:
1. beforeAll: Runs once before all tests in a file (e.g., global setup)
2. beforeEach: Runs before each test (e.g., open browser, navigate to page)
3. afterEach: Runs after each test (e.g., close browser, clear cookies)
4. afterAll: Runs once after all tests in a file (e.g., global cleanup)
5. Use hooks to manage test state and ensure clean test environments

*/
// //simple code wriet for hooks in playwright
// import { test } from '@playwright/test';
test.beforeAll(async () => {
  console.log('Global setup before all tests');
});
test.beforeEach(async ({ page }) => {
  console.log('Setup before each test');
  await page.goto('https://example.com');
});
test.afterEach(async () => {
  console.log('Cleanup after each test');
});
test.afterAll(async () => {
  console.log('Global cleanup after all tests');
});


//Annotations (Test Metadata):  
/*Answer:
1. @tag: Used to categorize tests (e.g., @smoke, @regression)
2. @skip: Skip a test (e.g., @skip('Not implemented yet'))
3. @only: Run only this test (e.g., @only)
4. @slow: Mark a test as slow (e.g., @slow)
5. Use annotations to manage test execution and reporting

*/
// import { test } from '@playwright/test';
test('This test will run', async () => {
  console.log('Running this test');
});
test.skip('This test will be skipped', async () => {
  console.log('This will not run');
});
test.only('This is the only test that will run', async () => {
  console.log('Only this test runs');
});
test('This is a slow test', { slow: true }, async () => {
  console.log('This test is marked as slow');
}); 
//test.describe('Group of tests', () => {
  test('Test 1', async () => {
    console.log('Running Test 1');
  });
  test('Test 2', async () => {
    console.log('Running Test 2');
  });
//});
//how we can use test.describe to group tests in playwright
// import { test } from '@playwright/test';
test.describe('User Authentication Tests', () => {
  test('Login Test', async ({ page }) => {
    console.log('Running Login Test');
    await page.goto('https://example.com/login');
    // Add login steps here
  });
  test('Logout Test', async ({ page }) => {
    console.log('Running Logout Test');
    await page.goto('https://example.com/logout');
    // Add logout steps here
  });
});


//Tags (Test Organization & Selection):
/*Answer:
1. @smoke: For critical tests that verify basic functionality
2. @regression: For tests that check for regressions in existing features
3. @sanity: For quick checks to ensure new features work
4. @e2e: For end-to-end tests that cover complete user flows
5. Use tags to organize tests and control which tests run in different scenarios

*/
// import { test } from '@playwright/test';
test('This is a smoke test', { tags: ['smoke'] }, async () => {
  console.log('Running smoke test');
});
test('This is a regression test', { tags: ['regression'] }, async () => {
  console.log('Running regression test');
});
test('This is a sanity test', { tags: ['sanity'] }, async () => {
  console.log('Running sanity test');
});
test('This is an end-to-end test', { tags: ['e2e'] }, async () => {
  console.log('Running end-to-end test');
});
//iframe, shadow dom,web components handling in playwright
// import { test } from '@playwright/test';

test('Handle iframe', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');
  const frame = page.frameLocator('#mce_0_ifr');
  await frame.locator('body#tinymce').fill('Hello from Playwright iframe!');
});
test('Handle shadow DOM', async ({ page }) => {

  //what is shadow DOM 
  //Web component → custom tag
//Shadow DOM → hidden DOM
//iframe → page inside page
//Broken link → error response
//Dead link → no response

  await page.goto('https://shop.polymer-project.org/');
  const shadowHost = page.locator('shop-app');
  const shadowRoot = shadowHost.evaluateHandle(el => el.shadowRoot);
  const searchInput = shadowRoot.asElement().locator('#input');
  await searchInput.fill('Playwright');
});

test('Handle web components', async ({ page }) => {
  await page.goto('https://www.webcomponents.org/element/vaadin/vaadin-button');
  const button = page.locator('vaadin-button');
  await button.click();
});




/*
🌐 1️⃣ What is Web Component?
🧠 Simple meaning
Web component = custom HTML element
Example:
<my-login></my-login>
Iske andar:
HTML
CSS
JS
hidden hota hai (mostly Shadow DOM me)
🤖 Automation issue
Normal locator kaam nahi karta ❌
kyunki element encapsulated hota hai
✅ Playwright me handle
Playwright automatically shadow DOM ko support karta hai 😎
await page.locator('my-login >> text=Submit').click();
🌑 2️⃣ What is Shadow DOM?
🧠 Simple meaning
Shadow DOM =
element ke andar hidden DOM tree
Browser me:
#shadow-root
dikhta hai.
Example
<my-element>
   #shadow-root
      <button>Click</button>
</my-element>

❌ Selenium me problem
special handling needed
✅ Playwright me easy
await page.locator('my-element button').click();
Bas 😎
🖼 3️⃣ What is iframe?
🧠 Meaning
Iframe = page ke andar ek aur page
<iframe src="login.html"></iframe>
❌ Direct locator fail
kyunki wo different DOM hota hai
✅ Playwright me handle
const frame = page.frameLocator('#frameId');
await frame.locator('#username').fill('test');
💀 4️⃣ What is Dead Link?
🧠 Meaning
Link par click kiya →
🚫 koi response hi nahi

Reasons:

server down

DNS fail

timeout

Example
https://abcxyz.com


request fail → dead link

🔗 5️⃣ What is Broken Link?
🧠 Meaning

Link open hota hai
but ❌ error deta hai

404 → Not found
500 → server error

📊 Difference
Dead link	Broken link
No response	Error response
Timeout	4xx / 5xx
🤖 Playwright me broken link ka idea
const res = await request.get(url);

if (res.status() >= 400) {
  console.log('Broken');
}

🎯 Real interview one-line answers
Web component

Custom reusable HTML element with encapsulated DOM.

Shadow DOM

Hidden DOM tree inside an element.

iframe

A webpage embedded inside another webpage.

Broken link

Link returning 4xx/5xx status.

Dead link

Link that does not respond.

⭐ Ultra short memory trick
Web component → custom tag
Shadow DOM → hidden DOM
iframe → page inside page
Broken link → error response
Dead link → no response
*/