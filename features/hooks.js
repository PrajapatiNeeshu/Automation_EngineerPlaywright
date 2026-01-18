import { Before, After, BeforeAll, AfterAll, Status, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { chromium } from 'playwright';
import POManager from '../pageObjects/POManager.js';

Before(async function () {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  this.page = page;
  this.browser = browser;
  this.context = context;
  this.poManager = new POManager(this.page);
  console.log("Before Hook Executed");
});
After(async function (scenario) {
  console.log("After Hook Executed");
  // Add small delay to ensure all operations complete
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    if (this.page && !this.page.isClosed()) await this.page.close();
  } catch (e) {
    console.log("Page already closed");
  }
  try {
    if (this.context) await this.context.close();
  } catch (e) {
    console.log("Context already closed");
  }
  try {
    if (this.browser) await this.browser.close();
  } catch (e) {
    console.log("Browser already closed");
  }
});

BeforeStep(async function ({result}) {
  //console.log("Before Step Hook Executed");
});
AfterStep(async function ({result}) {
  //console.log("After Step Hook Executed");

  if(result.status === Status.FAILED){
    const screenshot = await this.page.screenshot({path:`./screenshots/screenshot-${Date.now()}.png`, fullPage:true});
    this.attach(screenshot, 'image/png');
  }
});