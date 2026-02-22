import { expect, test } from '@playwright/test';


  test('Single file upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles('tests/uploads/Test1.text');
    await page.getByRole('button', { name: 'Upload Single File' }).click();

    const msg = await page.locator('#singleFileStatus').textContent();
    expect(msg).toContain('Test1.text');

    console.log('Single file upload is successful...');
    await page.waitForTimeout(5000);

    
  });

  test.only('Multiple file upload', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/');

     await page.locator('#multipleFilesInput').setInputFiles(['tests/uploads/Test1.text']);

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    const msg = await page.locator('#multipleFilesStatus').textContent();
    expect(msg).toContain('Test1.text');

    console.log(' Multiple files uploaded successfully...');

    await page.waitForTimeout(5000);

  });

