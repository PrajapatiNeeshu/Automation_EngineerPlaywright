import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('User Signup Flow', () => {
  test('complete signup process using natural language instructions', async ({ page, test }) => {
    // Navigate to the signup page
    await page.goto('https://example.com/signup');  // ← Replace with your actual signup URL

    // Step-by-step instructions in plain English
    await ai('Click the "Sign Up" or "Create Account" button if visible on the landing section', { page, test });

    // Fill in personal details
    await ai('Enter full name "John Doe" in the name or full name field', { page, test });
    await ai('Enter email address "john.doe@example.com" in the email field', { page, test });

    // Handle password fields
    await ai('Enter password "SecurePass123!" in the password field', { page, test });
    await ai('Confirm password by entering "SecurePass123!" again in the confirm password field', { page, test });

    // Additional optional fields (adapt as needed for your form)
    await ai('Select "Software Engineer" or similar from the job title or profession dropdown if present', { page, test });
    await ai('Enter phone number "9876543210" in the phone or mobile field if shown', { page, test });

    // Accept terms and conditions
    await ai('Check the "I agree to the terms and conditions" or "Accept privacy policy" checkbox', { page, test });

    // Submit the form
    await ai('Click the "Sign Up", "Create Account", or "Register" button at the bottom of the form', { page, test });

    // Wait for and verify successful registration
    await ai('Wait until the success message, dashboard, or welcome screen appears after submission', { page, test });

    // Optional: Assert outcome (combine AI with traditional Playwright assertions)
    const successMessage = await ai('Extract the main success or welcome message text displayed to the user', { page, test });
    expect(successMessage).toContain('Welcome');  // Adjust based on actual text
    // Or verify redirection
    await expect(page).toHaveURL(/.*dashboard|welcome|account/i);
  });
});