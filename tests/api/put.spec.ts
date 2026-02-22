import { test, expect } from '@playwright/test';

interface Post {
    id?: number;
    title: string;
    body: string;
    userId: number;
}

test.describe('PUT API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    test('Update existing post', async ({ request }) => {
        const postId = 1;
        const updatedPost: Post = {
            title: 'Updated Title',
            body: 'Updated body content',
            userId: 1
        };

        const response = await request.put(`${baseUrl}/posts/${postId}`, {
            data: updatedPost
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.id).toBe(postId);
        expect(responseBody.title).toBe(updatedPost.title);
        expect(responseBody.body).toBe(updatedPost.body);
    });

    test('Update post with partial data', async ({ request }) => {
        const postId = 1;
        const partialUpdate = {
            title: 'Only Title Updated'
        };

        const response = await request.put(`${baseUrl}/posts/${postId}`, {
            data: partialUpdate
        });

        expect(response.ok()).toBeTruthy();
        const updatedPost = await response.json();
        expect(updatedPost.id).toBe(postId);
        expect(updatedPost.title).toBe(partialUpdate.title);
    });

    test('Update non-existent post', async ({ request }) => {
        const nonExistentId = 999999;
        const updateData: Post = {
            title: 'Update Non-existent',
            body: 'This post does not exist',
            userId: 1
        };

        const response = await request.put(`${baseUrl}/posts/${nonExistentId}`, {
            data: updateData
        });

        // JSONPlaceholder returns 200 even for non-existent resources
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody.id).toBe(nonExistentId);
    });
});