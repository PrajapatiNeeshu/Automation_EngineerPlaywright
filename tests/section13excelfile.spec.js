
import ExcelJS from 'exceljs';

// import from exceljs package
//const { test, expect } = require('@playwright/test');
 import { test, expect } from '@playwright/test';

async function writeExcelTest(searchText, replaceText, change, filePath) {
const workbook = new ExcelJS.Workbook(); // create the object for class as above import. workbook is the variable 
//workbook is the collection of worksheets

  await workbook.xlsx.readFile("/Users/apple/Downloads/download.xlsx");
  const worksheet = workbook.getWorksheet('Sheet1');// pull the worksheet sheet1    
  const output = readExcel(worksheet, searchText); // not async
  console.log(`Found ${searchText} at Row: ${output.row}, Column: ${output.column}`);
  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}
 
// This does no async work, so don't mark it async.
function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) { // will itrate the each and each row test serahc make it 
        output = { row: rowNumber, column: colNumber };
      }
    });
  });
  return output;
}
 
//update Mango Price to 350. 
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
 
test('Upload download excel validation', async ({ page }) => {
  const textSearch = 'Mango';
  const updateValue = '350';
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const dl = await download;
  const filePath = '/Users/apple/Downloads/download.xlsx'; // or await dl.path()
 
  // ✅ Ensure the edit finishes before upload
  await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
 
  await page.locator('#fileinput').setInputFiles(filePath);
 
  const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);
});


// first needs to start exceljs pacakage installation in your pacakag.json file it will automatic and kept in the file same as well.

// npm install exceljs