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
const baseUrl = 'https://jsonplaceholder.typicode.com';
(0, test_1.test)('should get all posts', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const response = yield request.get(`${baseUrl}/posts`);
    (0, test_1.expect)(response.ok()).toBeTruthy();
    (0, test_1.expect)(response.status()).toBe(200);
    const responseBody = yield response.json();
    (0, test_1.expect)(Array.isArray(responseBody)).toBeTruthy();
    (0, test_1.expect)(responseBody.length).toBeGreaterThan(0);
}));
(0, test_1.test)('should get a single post', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const postId = 1;
    const response = yield request.get(`${baseUrl}/posts/${postId}`);
    (0, test_1.expect)(response.ok()).toBeTruthy();
    const post = yield response.json();
    (0, test_1.expect)(post.id).toBe(postId);
    (0, test_1.expect)(post.title).toBeTruthy();
    (0, test_1.expect)(post.body).toBeTruthy();
}));
(0, test_1.test)('should get posts with query parameters', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const response = yield request.get(`${baseUrl}/posts`, {
        params: {
            userId: 1,
            _limit: 5
        }
    });
    (0, test_1.expect)(response.ok()).toBeTruthy();
    const posts = yield response.json();
    (0, test_1.expect)(Array.isArray(posts)).toBeTruthy();
    (0, test_1.expect)(posts.length).toBeLessThanOrEqual(5);
    posts.forEach((post) => (0, test_1.expect)(post.userId).toBe(1));
}));
(0, test_1.test)('GET non-existent post returns 404', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const response = yield request.get(`${baseUrl}/posts/999999`);
    (0, test_1.expect)(response.ok()).toBeFalsy();
    (0, test_1.expect)(response.status()).toBe(404);
}));
