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
(0, test_1.test)('test', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://demowebshop.tricentis.com/');
    yield page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
    yield page.getByRole('link', { name: 'Register' }).click();
    yield page.getByRole('radio', { name: 'Male', exact: true }).check();
    yield page.getByRole('textbox', { name: 'First name:' }).fill('Neeshu');
    yield page.getByRole('textbox', { name: 'Last name:' }).fill('Kumar');
    yield page.getByRole('textbox', { name: 'Email:' }).fill('eddygpm@gmail.com');
    yield page.getByRole('textbox', { name: 'Password:', exact: true }).click();
    yield page.getByRole('textbox', { name: 'Password:', exact: true }).fill('12345');
    yield page.getByRole('textbox', { name: 'Confirm password:' }).click();
    yield page.getByRole('textbox', { name: 'Confirm password:' }).fill('12345');
    yield page.getByRole('button', { name: 'Register' }).click();
    yield page.getByRole('textbox', { name: 'Password:', exact: true }).fill('123456');
    yield page.getByRole('textbox', { name: 'Confirm password:' }).click();
    yield page.getByRole('textbox', { name: 'Confirm password:' }).fill('123456');
    yield page.getByRole('button', { name: 'Register' }).click();
}));
