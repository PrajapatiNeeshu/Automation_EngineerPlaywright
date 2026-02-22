
import { test, expect } from '@playwright/test';
test('assert a value', async ({ page }) => {
  const value = 1;
  expect(value).toBe(1);
});