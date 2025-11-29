"use strict";
//prefered the relstive xpth alwasy
//input[@value = 'Search store'][@type = ''text]
//Xpath havemultiple xpath 
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
//input[@type = 'submit' and @value = 'Search'] 
//And operator must be tru one 
// with the help of and attribute of that
//Or oerator must be true one 
//input[@type = 'submit1' or @value = 'Search']
//contains methods
const test_1 = require("@playwright/test");
(0, test_1.test)("Xpath demo in playwright", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    // Navigate to the page
    yield page.goto("https://demowebshop.tricentis.com/");
    // Wait for the page to load
    yield page.waitForLoadState('domcontentloaded');
    // 1. Logo using Xpath
    const logo = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    yield (0, test_1.expect)(logo).toBeVisible();
    // 2. Find computer related products
    //contains() xpath
    const products = page.locator("//h2[.//a[contains(@href, 'computer')]]");
    const productCount = yield products.count();
    console.log("Number of Computer related products ===>", productCount);
    yield (0, test_1.expect)(productCount).toBeGreaterThan(0);
    // await products.textContent();
    //console.log(await products.textContent());
    //Throw error since Text matching with 3 elements. we can not perform any actio
    //  Error:- Strict mode Violation perfor the multiple action on multiple locator
    //
    //products.first().textContent();
    console.log("First computer related product:", yield products.first().textContent());
    console.log("Last computer related product:", yield products.last().textContent());
    console.log("Nth computer related product:", yield products.nth(2).textContent());
    //below allTextContents will itrate the all product type of the all comman text
    //group of matching the group of methods
    const productTitle = yield products.allTextContents();
    console.log("All computer related title==>", productTitle);
    for (let pt of productTitle) {
        console.log(pt);
    }
    //start-with() method 
    const buildingproduct = yield page.locator("//h2/a[starts-with(@href , '/build')]");
    //multiple elements with this
    const count = yield buildingproduct.count();
    console.log(count);
    (0, test_1.expect)(count).toBeGreaterThan(0);
    //text() -- funcstion of the product 
    const reglink = page.locator("//a[.= 'Register']");
    yield (0, test_1.expect)(reglink).toBeVisible();
    //last() function
    const lastitem = yield page.locator("//div[@class = 'column follow-us']//li[last()]");
    //expect(lastitem).toBeVisible();
    (0, test_1.expect)(lastitem).toBeVisible();
    console.log("last item :", yield lastitem.textContent());
    //position() --will extract the element based on the position
    const position = yield page.locator("//div[@class = 'column follow-us']//li[position()=3]");
    (0, test_1.expect)(position).toBeVisible();
    console.log("position :", yield position.textContent());
    //dynamic Xpath
    //contains() and "or". and text() = start or text()= start xpth //button[@name = 'start' or @name = 'stop'] starts-with(@name, 'st')
}));
