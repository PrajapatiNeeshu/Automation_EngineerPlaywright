import { test, expect } from '@playwright/test';

interface Post {
    title: string;
    body: string;
    userId: number;
}

test.describe('POST API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    test('Create new post', async ({ request }) => {
        const newPost: Post = {
            title: 'Test Post',
            body: 'This is a test post body',
            userId: 1
        };

        const response = await request.post(`${baseUrl}/posts`, {
            data: newPost
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201);

        const createdPost = await response.json();
        expect(createdPost.title).toBe(newPost.title);
        expect(createdPost.body).toBe(newPost.body);
        expect(createdPost.userId).toBe(newPost.userId);
        expect(createdPost.id).toBeTruthy();
    });

    test('Create post with missing fields', async ({ request }) => {
        const invalidPost = {
            title: 'Test Post'
            // Missing required fields
        };

        const response = await request.post(`${baseUrl}/posts`, {
            data: invalidPost
        });

        expect(response.ok()).toBeTruthy(); // JSONPlaceholder is lenient with validation
        const createdPost = await response.json();
        expect(createdPost.id).toBeTruthy();
    });

    test('Create multiple posts', async ({ request }) => {
        const posts: Post[] = [
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
            const response = await request.post(`${baseUrl}/posts`, {
                data: post
            });
            expect(response.ok()).toBeTruthy();
            
            const createdPost = await response.json();
            expect(createdPost.title).toBe(post.title);
            expect(createdPost.body).toBe(post.body);
        }
    });
});