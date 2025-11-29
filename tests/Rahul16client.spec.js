const { test, expect } = require("@playwright/test");
test("@Web Client App login", async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "eddygpm@gmail.com";
  const productName = "zara coat 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Bpost@9012_");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle"); //asking is when network is loading at this points
  // working all network done so its working and some time wokring so make it alternative ways to make it another ways use waitfor() alternative ways to make it
  await page.locator(".card-body b").first().waitFor(); //.card-body b   .card-body b have parent to child tranvers so it will be print parent to child
  const titles = await page.locator(".card-body b").allTextContents(); // print all test contents at the some dom in html DOM.

  console.log(titles);
});
