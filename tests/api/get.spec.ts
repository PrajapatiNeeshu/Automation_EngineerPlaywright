import { APIRequestContext, expect, test } from '@playwright/test';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

test('should get all posts', async ({ request }: { request: APIRequestContext }) => {
        const response = await request.get(`${baseUrl}/posts`);
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBeTruthy();
        expect(responseBody.length).toBeGreaterThan(0);
    });

    test('should get a single post', async ({ request }: { request: APIRequestContext }) => {
        const postId = 1;
        const response = await request.get(`${baseUrl}/posts/${postId}`);
        expect(response.ok()).toBeTruthy();
        
        const post = await response.json() as Post;
        expect(post.id).toBe(postId);
        expect(post.title).toBeTruthy();
        expect(post.body).toBeTruthy();
    });

    test('should get posts with query parameters', async ({ request }: { request: APIRequestContext }) => {
        const response = await request.get(`${baseUrl}/posts`, {
            params: {
                userId: 1,
                _limit: 5
            }
        });
        expect(response.ok()).toBeTruthy();
        
        const posts = await response.json() as Post[];
        expect(Array.isArray(posts)).toBeTruthy();
        expect(posts.length).toBeLessThanOrEqual(5);
        posts.forEach((post: Post) => expect(post.userId).toBe(1));
    });

    test('GET non-existent post returns 404', async ({ request }: { request: APIRequestContext }) => {
        const response = await request.get(`${baseUrl}/posts/999999`);
        expect(response.ok()).toBeFalsy();
        expect(response.status()).toBe(404);
    });