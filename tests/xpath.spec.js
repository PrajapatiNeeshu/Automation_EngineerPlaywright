//prefered the relstive xpth alwasy
//input[@value = 'Search store'][@type = ''text]
//Xpath havemultiple xpath 

//input[@type = 'submit' and @value = 'Search'] 
//And operator must be tru one 
// with the help of and attribute of that

//Or oerator must be true one 

//input[@type = 'submit1' or @value = 'Search']

//contains methods

import {test, expect} from "@playwright/test";

test("Xpath demo in playwright", async ({page}) => {
    // Navigate to the page
    await page.goto("https://demowebshop.tricentis.com/");
    
    // Wait for the page to load
    await page.waitForLoadState('domcontentloaded');

    // 1. Logo using Xpath
    const logo = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
    
    // 2. Find computer related products
    //contains() xpath
    const products = page.locator("//h2[.//a[contains(@href, 'computer')]]");
    const productCount = await products.count();
    console.log("Number of Computer related products ===>", productCount);
    await expect(productCount).toBeGreaterThan(0);
    
    console.log("First computer related product:", await products.first().textContent());
    console.log("Last computer related product:", await products.last().textContent());
    console.log("Nth computer related product:", await products.nth(2).textContent());
    
    const productTitle = await products.allTextContents();
    console.log("All computer related title==>", productTitle);
    for (let pt of productTitle) {
        console.log(pt);
    }
    
    //start-with() method 
    const buildingproduct = page.locator("//h2/a[starts-with(@href , '/build')]");
    const count = await buildingproduct.count();
    console.log(count);
    expect(count).toBeGreaterThan(0);
    
    //text() function of the product 
    const reglink = page.locator("//a[.= 'Register']");
    await expect(reglink).toBeVisible();
    
    //last() function
    const lastitem = page.locator("//div[@class = 'column follow-us']//li[last()]");
    await expect(lastitem).toBeVisible();
    console.log("last item :", await lastitem.textContent());
    
    //position() --will extract the element based on the position
    const position = page.locator("//div[@class = 'column follow-us']//li[position()=3]");
    await expect(position).toBeVisible();
    console.log("position :", await position.textContent());
});
