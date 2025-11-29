

//following and following -siblings--
//following-- will come side same parent element with all child element which is connected with same place elements
//
//following and following -siblings--only locate the same parent elements .


//preceding and preceding -siblings

//preceding. --before self  elements will capture all as well child elements
//preceding -siblings-->only before only sibling will get only one self 

//ansector---parent and grand parent - grand parent


import { test, expect,Locator } from '@playwright/test';


test("Axes Path Demo", async({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp")

//locate the elements with self and get the position 

//1.Self axis - select the <td> element that contains "'Germany"
const germanyCell : Locator = page.locator("//td[text()= 'Germany']/self::td");
await expect(germanyCell).toHaveText("Germany");

//2.Parent elements 

const parentRow = page.locator("//td[text()= 'Germany']/parent::trconst")
console.log(parentRow);
await expect(parentRow).toContainText("Maria Anders")

})









