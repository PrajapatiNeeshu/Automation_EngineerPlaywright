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
const test_1 = require("@playwright/test");
/*
test("Dynamic xpth ", async ({page}) => {


await page.goto("https://testautomationpractice.blogspot.com/");
//Loop to click the button 5 times
for (let i=1 ;i <=5;i++){
let button:Locator= page.locator('//button[text() = "STOP" or text() = "START"]')
////button[@name = "start" or @name = "stop"]
//click on the button
await button.click();
await page.waitForTimeout(2000);
}
})

*/
//using playwright specefic methods
//getByRoleMethods
(0, test_1.test)("Dynamic ", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://testautomationpractice.blogspot.com/");
    //Loop to click the button 5 times
    for (let i = 1; i <= 5; i++) {
        const button = page.getByRole('button', { name: /START|STOP/ });
        ////button[@name = "start" or @name = "stop"]
        //click on the button
        yield button.click();
        yield page.waitForTimeout(2000);
    }
}));
