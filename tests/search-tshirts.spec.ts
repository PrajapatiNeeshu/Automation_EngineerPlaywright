import { expect, test } from '@playwright/test';

test('Search for T-shirts and verify Faded Short Sleeve T-shirts in results', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://www.automationpractice.pl/index.php');
  
  // Click on the search textbox
  await page.getByRole('textbox', { name: 'Search' }).click();
  
  // Type 'T-shirts' in the search box
  await page.getByRole('textbox', { name: 'Search' }).fill('T-shirts');
  
  // Click the search button
  await page.locator('button[name="submit_search"]').click();
  
  // Verify that 'Faded Short Sleeve T-shirts' is visible in the search results
  await expect(page.locator('#center_column').getByText('Faded Short Sleeve T-shirts')).toBeVisible();
});
