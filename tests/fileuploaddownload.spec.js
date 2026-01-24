import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('9: File upload and download', async ({ page }) => {
  try {
    console.log('Starting file upload and download test...');
    
    // ===== FILE UPLOAD TEST =====
    console.log('Step 1: Navigating to upload page...');
    await page.goto('https://the-internet.herokuapp.com/upload');
    
    // Create file path for upload
    const filePath = path.join(__dirname, 'sample-upload.txt');
    console.log('Upload file path:', filePath);
    
    // Verify file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found at: ${filePath}`);
    }
    console.log('File exists! Proceeding with upload...');
    
    // Set input files
    console.log('Step 2: Setting input files...');
    await page.setInputFiles('#file-upload', filePath);
    
    // Click upload button
    console.log('Step 3: Clicking upload button...');
    await page.click('#file-submit');
    
    // Verify upload success
    console.log('Step 4: Verifying upload success...');
    await page.waitForSelector('#uploaded-files', { timeout: 5000 });
    const uploadedText = await page.textContent('#uploaded-files');
    console.log('Uploaded files text:', uploadedText);
    
    await expect(page.locator('#uploaded-files')).toContainText('sample-upload.txt');
    console.log('✅ File upload successful!');
    
    // ===== FILE DOWNLOAD TEST =====
    console.log('\nStep 5: Navigating to download page...');
    await page.goto('https://the-internet.herokuapp.com/download');
    
    // Get list of files available for download
    console.log('Step 6: Getting available files...');
    const downloadLinks = await page.locator('a').all();
    console.log(`Found ${downloadLinks.length} download links`);
    
    if (downloadLinks.length > 0) {
      // Setup download listener and click first file
      console.log('Step 7: Waiting for download and clicking first file...');
      const download = await Promise.race([
        page.waitForEvent('download'),
        downloadLinks[0].click().then(() => page.waitForEvent('download'))
      ]);
      
      // Save downloaded file
      const downloadPath = path.join(__dirname, 'downloaded-file.txt');
      console.log('Step 8: Saving downloaded file to:', downloadPath);
      await download.saveAs(downloadPath);
      
      // Verify download
      if (fs.existsSync(downloadPath)) {
        const fileStats = fs.statSync(downloadPath);
        console.log(`✅ File downloaded successfully! Size: ${fileStats.size} bytes`);
        console.log('Downloaded file path:', downloadPath);
        
        // Clean up
        fs.unlinkSync(downloadPath);
        console.log('Cleaned up downloaded file');
      } else {
        throw new Error('Download file was not saved');
      }
    } else {
      console.log('⚠️ No download links found on page');
    }
    
    console.log('\n✅ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    // Take screenshot for debugging
    await page.screenshot({ path: 'screenshots/file-upload-download-error.png' });
    throw error;
  }
});
