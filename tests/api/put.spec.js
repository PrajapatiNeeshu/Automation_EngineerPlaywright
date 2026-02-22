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
test_1.test.describe('PUT API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    (0, test_1.test)('Update existing post', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        const postId = 1;
        const updatedPost = {
            title: 'Updated Title',
            body: 'Updated body content',
            userId: 1
        };
        const response = yield request.put(`${baseUrl}/posts/${postId}`, {
            data: updatedPost
        });
        (0, test_1.expect)(response.ok()).toBeTruthy();
        (0, test_1.expect)(response.status()).toBe(200);
        const responseBody = yield response.json();
        (0, test_1.expect)(responseBody.id).toBe(postId);
        (0, test_1.expect)(responseBody.title).toBe(updatedPost.title);
        (0, test_1.expect)(responseBody.body).toBe(updatedPost.body);
    }));
    (0, test_1.test)('Update post with partial data', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        const postId = 1;
        const partialUpdate = {
            title: 'Only Title Updated'
        };
        const response = yield request.put(`${baseUrl}/posts/${postId}`, {
            data: partialUpdate
        });
        (0, test_1.expect)(response.ok()).toBeTruthy();
        const updatedPost = yield response.json();
        (0, test_1.expect)(updatedPost.id).toBe(postId);
        (0, test_1.expect)(updatedPost.title).toBe(partialUpdate.title);
    }));
    (0, test_1.test)('Update non-existent post', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        const nonExistentId = 999999;
        const updateData = {
            title: 'Update Non-existent',
            body: 'This post does not exist',
            userId: 1
        };
        const response = yield request.put(`${baseUrl}/posts/${nonExistentId}`, {
            data: updateData
        });
        // JSONPlaceholder returns 200 even for non-existent resources
        (0, test_1.expect)(response.ok()).toBeTruthy();
        const responseBody = yield response.json();
        (0, test_1.expect)(responseBody.id).toBe(nonExistentId);
    }));
});
