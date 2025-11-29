import { test, expect } from '@playwright/test';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

test.describe('DELETE API Tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    test('should delete a post successfully', async ({ request }) => {
        // First create a post that we will delete
        const createResponse = await request.post(`${baseURL}/posts`, {
            data: {
                title: 'Test Post',
                body: 'This is a test post that will be deleted',
                userId: 1
            }
        });
        expect(createResponse.ok()).toBeTruthy();
        const post = await createResponse.json();

        // Now delete the post
        const deleteResponse = await request.delete(`${baseURL}/posts/${post.id}`);
        expect(deleteResponse.ok()).toBeTruthy();
        expect(deleteResponse.status()).toBe(200);

        // Verify the post is deleted by trying to get it
        const getResponse = await request.get(`${baseURL}/posts/${post.id}`);
        expect(getResponse.status()).toBe(404);
    });

    test('should return 404 when deleting non-existent post', async ({ request }) => {
        const response = await request.delete(`${baseURL}/posts/999999`);
        expect(response.status()).toBe(404);
    });

    test('should handle bulk delete operation', async ({ request }) => {
        // Note: JSONPlaceholder doesn't actually support bulk delete
        // This is a demonstration of how you might test it
        const postIds = [1, 2, 3];
        
        for (const id of postIds) {
            const response = await request.delete(`${baseURL}/posts/${id}`);
            expect(response.ok()).toBeTruthy();
        }
    });

    test('should verify deletion is permanent', async ({ request }) => {
        // Delete a post
        const postId = 1;
        const deleteResponse = await request.delete(`${baseURL}/posts/${postId}`);
        expect(deleteResponse.ok()).toBeTruthy();

        // Try different operations on deleted resource
        const getResponse = await request.get(`${baseURL}/posts/${postId}`);
        expect(getResponse.status()).toBe(404);

        const putResponse = await request.put(`${baseURL}/posts/${postId}`, {
            data: {
                title: 'Updated Title',
                body: 'Updated Body',
                userId: 1
            }
        });
        expect(putResponse.status()).toBe(404);
    });
});