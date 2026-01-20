---
name: api-testing-patterns
description: Generate API tests using Playwright's APIRequestContext with proper TypeScript types
---

## Our API Testing Rules

1. Always define TypeScript interfaces for request/response
2. Use APIRequestContext from Playwright fixtures
3. Validate response status and schema
4. Include both happy path and error scenarios

## Example
```typescript
import { test, expect } from '@playwright/test';

interface User {
  id: number;
  email: string;
  name: string;
}

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

test.describe('User API', () => {
  test('should create a new user', async ({ request }) => {
    const newUser: CreateUserRequest = {
      email: 'test@example.com',
      name: 'Test User',
      password: 'SecurePass123!'
    };

    const response = await request.post('/api/users', {
      data: newUser
    });

    expect(response.status()).toBe(201);
    
    const user: User = await response.json();
    expect(user.email).toBe(newUser.email);
    expect(user.name).toBe(newUser.name);
    expect(user.id).toBeGreaterThan(0);
  });

  test('should return 400 for invalid email', async ({ request }) => {
    const invalidUser: CreateUserRequest = {
      email: 'not-an-email',
      name: 'Test User',
      password: 'SecurePass123!'
    };

    const response = await request.post('/api/users', {
      data: invalidUser
    });

    expect(response.status()).toBe(400);
    const error = await response.json();
    expect(error.message).toContain('email');
  });
});
```