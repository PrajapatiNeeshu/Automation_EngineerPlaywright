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
test_1.test.describe('POST API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    (0, test_1.test)('Create new post', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        const newPost = {
            title: 'Test Post',
            body: 'This is a test post body',
            userId: 1
        };
        const response = yield request.post(`${baseUrl}/posts`, {
            data: newPost
        });
        (0, test_1.expect)(response.ok()).toBeTruthy();
        (0, test_1.expect)(response.status()).toBe(201);
        const createdPost = yield response.json();
        (0, test_1.expect)(createdPost.title).toBe(newPost.title);
        (0, test_1.expect)(createdPost.body).toBe(newPost.body);
        (0, test_1.expect)(createdPost.userId).toBe(newPost.userId);
        (0, test_1.expect)(createdPost.id).toBeTruthy();
    }));
    (0, test_1.test)('Create post with missing fields', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        const invalidPost = {
            title: 'Test Post'
            // Missing required fields
        };
        const response = yield request.post(`${baseUrl}/posts`, {
            data: invalidPost
        });
        (0, test_1.expect)(response.ok()).toBeTruthy(); // JSONPlaceholder is lenient with validation
        const createdPost = yield response.json();
        (0, test_1.expect)(createdPost.id).toBeTruthy();
    }));
    (0, test_1.test)('Create multiple posts', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        const posts = [
            {
                title: 'Post 1',
                body: 'Body 1',
                userId: 1
            },
            {
                title: 'Post 2',
                body: 'Body 2',
                userId: 1
            }
        ];
        for (const post of posts) {
            const response = yield request.post(`${baseUrl}/posts`, {
                data: post
            });
            (0, test_1.expect)(response.ok()).toBeTruthy();
            const createdPost = yield response.json();
            (0, test_1.expect)(createdPost.title).toBe(post.title);
            (0, test_1.expect)(createdPost.body).toBe(post.body);
        }
    }));
});
