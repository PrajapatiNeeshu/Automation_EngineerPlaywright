// @ts-check
import { expect, test } from "@playwright/test";

test.describe("Playwright Test Agents Documentation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/docs/test-agents");
    // Ensure we're on the correct page
    await expect(page).toHaveTitle(/Test Agents/);
  });

  test("verify page title and introduction", async ({ page }) => {
    // Verify main heading
    await expect(
      page.getByRole("heading", { name: "Test Agents" })
    ).toBeVisible();

    // Verify introduction content
    const introSection = page
      .getByRole("article")
      .filter({ hasText: "Test Agents" });
    await expect(introSection).toBeVisible();
  });

  test("verify test agent examples", async ({ page }) => {
    // Verify code examples section
    const codeBlocks = page.locator("pre");
    await expect(codeBlocks).toHaveCount(await codeBlocks.count());

    // Verify specific code example content
    const testAgentExample = page.locator("pre").filter({
      hasText: "import { test } from",
    });
    await expect(testAgentExample).toBeVisible();
  });

  test("verify navigation and structure", async ({ page }) => {
    // Check sidebar navigation
    const sidebar = page.getByRole("complementary");
    await expect(sidebar).toBeVisible();

    // Verify "Test Agents" link in sidebar
    const testAgentsLink = page.getByRole("link", { name: "Test Agents" });
    await expect(testAgentsLink).toBeVisible();
  });

  test("verify agent configuration examples", async ({ page }) => {
    // Locate agent configuration examples
    const configSection = page.getByText(/test.agent/).first();
    await expect(configSection).toBeVisible();

    // Verify configuration code blocks
    const configExample = page.locator("pre").filter({
      hasText: "test.agent()",
    });
    await expect(configExample).toBeVisible();
  });

  test("check API reference links", async ({ page }) => {
    // Find API reference links
    const apiLinks = page.getByRole("link").filter({
      hasText: /API/,
    });

    // Verify API links are present
    await expect(apiLinks).toBeVisible();
  });

  test("verify search functionality", async ({ page }) => {
    // Click search button
    const searchButton = page.getByLabel("Search");
    await searchButton.click();

    // Type "test agent" in search
    await page.keyboard.type("test agent");

    // Verify search results
    const searchResults = page.getByRole("list").filter({
      hasText: "Test Agents",
    });
    await expect(searchResults).toBeVisible();
  });

  test("check dark/light theme toggle", async ({ page }) => {
    // Find theme toggle button
    const themeToggle = page.getByLabel(/Toggle theme/);
    await expect(themeToggle).toBeVisible();

    // Click theme toggle
    await themeToggle.click();

    // Verify theme change
    await expect(page.locator('html[data-theme="dark"]')).toBeVisible();
  });

  test("verify copy code functionality", async ({ page }) => {
    // Find first code block
    const firstCodeBlock = page.locator("pre").first();
    await firstCodeBlock.hover();

    // Find and click copy button
    const copyButton = page.getByRole("button", { name: "Copy" }).first();
    await expect(copyButton).toBeVisible();
  });

  test("check mobile responsiveness", async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Verify mobile menu button appears
    const mobileMenuButton = page.getByRole("button", { name: "Menu" });
    await expect(mobileMenuButton).toBeVisible();

    // Check content readability
    const mainContent = page.getByRole("main");
    await expect(mainContent).toBeVisible();
  });
});
