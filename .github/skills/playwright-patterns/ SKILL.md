---
name: playwright-patterns
description: Generate robust Playwright tests with TypeScript following our team's best practices
---

# Playwright + TypeScript Testing Standards

## What You Must Do
- Always use accessible locators (getByRole, getByLabel, getByText)
- Write type-safe page objects with proper interfaces
- Use custom fixtures for common setup
- Add explicit assertions with expect() for every critical action
- Use proper waiting strategies (waitForLoadState, waitFor with conditions)

## What You Must Never Do
- Never use CSS selectors or XPath unless absolutely necessary
- Never use waitForTimeout() - it creates flaky tests
- Never hardcode test data in test files
- Never skip accessibility considerations

## Example: The Right Way

When someone asks you to test login functionality, generate this:

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Flow', () => {
  test('user can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('user@example.com', 'ValidPass123!');
    
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page).toHaveURL(/.*dashboard/);
  });
});
```

And the corresponding Page Object:
```typescript
export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
  }

  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }
}
```

This uses accessible locators, proper page objects, and strong typing.