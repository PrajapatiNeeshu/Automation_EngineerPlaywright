//JavaScript// tests/comprehensive-playwright-demo.spec.js

import { test, expect, chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { devices } from 'playwright';
// Create artifact directories once before all tests
test.beforeAll(async () => {
  ['screenshots', 'videos', 'downloads'].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
});
test('1-2: Login and verify dashboard', async ({ page }) => {

  // const browser = await chromium.launch();
  // const context = await browser.newContext();
  // const page = await context.newPage();
  //create context in width viewport
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
await page.goto('https://demoqa.com/select-menu');

// Step 2: Locate the dropdown element using locator
// This dropdown is a standard <select> HTML element
const genderDropdown = page.locator('#oldSelectMenu');

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
  const download = await page.waitForEvent('download');
  await page.click('text=some-file.txt');
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