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
test_1.test.describe('DELETE API Tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    (0, test_1.test)('should delete a post successfully', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        // First create a post that we will delete
        const createResponse = yield request.post(`${baseURL}/posts`, {
            data: {
                title: 'Test Post',
                body: 'This is a test post that will be deleted',
                userId: 1
            }
        });
        (0, test_1.expect)(createResponse.ok()).toBeTruthy();
        const post = yield createResponse.json();
        // Now delete the post
        const deleteResponse = yield request.delete(`${baseURL}/posts/${post.id}`);
        (0, test_1.expect)(deleteResponse.ok()).toBeTruthy();
        (0, test_1.expect)(deleteResponse.status()).toBe(200);
        // Verify the post is deleted by trying to get it
        const getResponse = yield request.get(`${baseURL}/posts/${post.id}`);
        (0, test_1.expect)(getResponse.status()).toBe(404);
    }));
    (0, test_1.test)('should return 404 when deleting non-existent post', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        const response = yield request.delete(`${baseURL}/posts/999999`);
        (0, test_1.expect)(response.status()).toBe(404);
    }));
    (0, test_1.test)('should handle bulk delete operation', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        // Note: JSONPlaceholder doesn't actually support bulk delete
        // This is a demonstration of how you might test it
        const postIds = [1, 2, 3];
        for (const id of postIds) {
            const response = yield request.delete(`${baseURL}/posts/${id}`);
            (0, test_1.expect)(response.ok()).toBeTruthy();
        }
    }));
    (0, test_1.test)('should verify deletion is permanent', (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
        // Delete a post
        const postId = 1;
        const deleteResponse = yield request.delete(`${baseURL}/posts/${postId}`);
        (0, test_1.expect)(deleteResponse.ok()).toBeTruthy();
        // Try different operations on deleted resource
        const getResponse = yield request.get(`${baseURL}/posts/${postId}`);
        (0, test_1.expect)(getResponse.status()).toBe(404);
        const putResponse = yield request.put(`${baseURL}/posts/${postId}`, {
            data: {
                title: 'Updated Title',
                body: 'Updated Body',
                userId: 1
            }
        });
        (0, test_1.expect)(putResponse.status()).toBe(404);
    }));
});
