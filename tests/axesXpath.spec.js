"use strict";
//following and following -siblings--
//following-- will come side same parent element with all child element which is connected with same place elements
//
//following and following -siblings--only locate the same parent elements .
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
//preceding and preceding -siblings
//preceding. --before self  elements will capture all as well child elements
//preceding -siblings-->only before only sibling will get only one self 
//ansector---parent and grand parent - grand parent
const test_1 = require("@playwright/test");
(0, test_1.test)("Axes Path Demo", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://www.w3schools.com/html/html_tables.asp");
    //locate the elements with self and get the position 
    //1.Self axis - select the <td> element that contains "'Germany"
    const germanyCell = page.locator("//td[text()= 'Germany']/self::td");
    yield (0, test_1.expect)(germanyCell).toHaveText("Germany");
    //2.Parent elements 
    const parentRow = page.locator("//td[text()= 'Germany']/parent::trconst");
    console.log(parentRow);
    yield (0, test_1.expect)(parentRow).toContainText("Maria Anders");
}));
