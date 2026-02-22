name: playwright-custom-fixtures
description: Use our team's custom fixtures for authentication and test data
---

## Our Custom Fixtures Standards

### Always Use Our Fixtures
- Use `authenticatedPage` fixture for tests requiring login
- Use `testData` fixture for accessing test data
- Use `apiContext` fixture for API calls

### Example
```typescript
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type CustomFixtures = {
  authenticatedPage: Page;
  testData: TestData;
};

export const test = base.extend<CustomFixtures>({
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER!, process.env.TEST_PASSWORD!);
    await use(page);
  },
  
  testData: async ({}, use) => {
    const data = await loadTestData();
    await use(data);
    await cleanupTestData(data);
  }
});

// Usage in tests
test('user can view their profile', async ({ authenticatedPage, testData }) => {
  await authenticatedPage.getByRole('link', { name: 'Profile' }).click();
  await expect(authenticatedPage.getByText(testData.user.name)).toBeVisible();
});
```