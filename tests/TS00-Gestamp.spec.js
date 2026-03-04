const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginPage');
const { sysAdminUsers } = require('../utils/testData');
const { PayPalUsers } = require('../utils/testData');
const { BatchPage } = require('../pages/batchPage');
const { PaperStampPage } = require('../pages/paperstampPage');




// test.describe('Hybrid 001_99_IL', () => {
//     let batchPage; // ประกาศตัวแปรระดับ describe

//     test.beforeEach(async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const { username, password } = sysAdminUsers[0];

//         // สร้าง instance batchPage
//         batchPage = new BatchPage(page);

//         await loginPage.navigateToLogin();
//         await loginPage.login(username, password);
//     });


//     test('TC01 - Upload HB1_99_001 ', async ({ page }) => {

//         await test.step('Upload File HB001 ', async () => {
//             await batchPage.uploadFileHB1_99_001();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC01-HB1-99/01.Batch 1 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();

//         }


//     });



//     test('TC02 - Pay HB1_99_001 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC01-HB1-99/02.Payment Batch 1.png' });

//     });





//     test('TC03 - Upload HB1_99_002 ', async ({ page }) => {

//         await test.step('Upload File HB002 ', async () => {
//             await batchPage.uploadFileHB1_99_002();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC01-HB1-99/03.Batch 2 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();

//         }


//     });




//     test('TC04 - Pay HB1_99_002 ', async ({ page }) => {

//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB1_99_002_IL_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC01-HB1-99/04.Payment Batch 1.png' });

//     });

// });






// test.describe('Hybrid 002_99_AD', () => {
//     let batchPage; // ประกาศตัวแปรระดับ describe

//     test.beforeEach(async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const { username, password } = sysAdminUsers[0];

//         // สร้าง instance batchPage
//         batchPage = new BatchPage(page);

//         await loginPage.navigateToLogin();
//         await loginPage.login(username, password);
//     });


//     test('TC01 - Upload HB2_99_001 ', async ({ page }) => {

//         await test.step('Upload File HB001 ', async () => {
//             await batchPage.uploadFileHB2_99_001();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC02-HB2-99/01.Batch 1 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();

//         }


//     });



//     test('TC02 - Pay HB2_99_001 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_001_NE_4_5_OS9').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC02-HB2-99/02.Payment Batch 1.png' });

//     });





//     test('TC03 - Upload HB2_99_002 ', async ({ page }) => {

//         await test.step('Upload File HB002 ', async () => {
//             await batchPage.uploadFileHB2_99_002();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB2_99_002_AD_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC02-HB2-99/03.Batch 2 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();

//         }


//     });




//     test('TC04 - Pay HB2_99_002 ', async ({ page }) => {

//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB2_99_002_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC02-HB2-99/04.Payment Batch 1.png' });

//     });

// });







// test.describe('Hybrid 005_49499_IL', () => {
//     let batchPage; // ประกาศตัวแปรระดับ describe
//     let paperstamp;
//     test.beforeEach(async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const { username, password } = sysAdminUsers[0];
//         // สร้าง instance batchPage
//         batchPage = new BatchPage(page);
//         paperstamp = new PaperStampPage(page);
//         await loginPage.navigateToLogin();
//         await loginPage.login(username, password);
//     });







//     test('TC01 - Upload PaperStamp HB5_49499_001 ', async ({ page }) => {

//         await paperstamp.gotoPaperstamp()
//         await test.step('Upload File PP HB005 ', async () => {
//             await paperstamp.uploadFilePP_HB5_49499_001();
//         })
//         await paperstamp.closeBTN.click();
//         await paperstamp.searchBTN.click();
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-001')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-001')).toHaveText('T15-GSD-TC5-HB5-49499-4-001', { timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-002')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-002')).toHaveText('T15-GSD-TC5-HB5-49499-4-002', { timeout: 1000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/01.PaperStamp 1 Details.png' });


//     });










//     test('TC02 - Upload HB5_49499_002 ', async ({ page }) => {

//         await test.step('Upload File HB002 ', async () => {
//             await batchPage.uploadFileHB5_49499_002();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB5_49499_002_IL_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/02.Batch 1 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();

//         }


//     });



//     test('TC02 - Pay HB5_49499_002 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_002_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/03.Payment Batch 1.png' });

//     });









//     test('TC04 - Upload PaperStamp HB5_49499_003 ', async ({ page }) => {

//         await paperstamp.gotoPaperstamp()
//         await test.step('Upload File PP HB005 ', async () => {
//             await paperstamp.uploadFilePP_HB5_49499_003();
//         })
//         await paperstamp.closeBTN.click();
//         await paperstamp.searchBTN.click();
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-001')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-001')).toHaveText('T15-GSD-TC5-HB5-49499-4-001', { timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-002')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB5-49499-4-002')).toHaveText('T15-GSD-TC5-HB5-49499-4-002', { timeout: 1000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/04.PaperStamp 2 Details.png' });


//     });







//     test('TC05 - Upload HB5_49499_004 ', async ({ page }) => {

//         await test.step('Upload File HB004 ', async () => {
//             await batchPage.uploadFileHB5_49499_004();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB5_49499_004_IL_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/05.Batch 2 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();

//         }


//     });



//     test('TC06 - Pay HB5_49499_004 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_004_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/06.Payment Batch 2.png' });

//     });





//     test('TC07 - Upload HB5_49499_005 ', async ({ page }) => {

//         await test.step('Upload File HB005 ', async () => {
//             await batchPage.uploadFileHB5_49499_005();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB5_49499_005_IL_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/07.Batch 3 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();

//         }


//     });



//     test('TC08 - Pay HB5_49499_005 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB5_49499_005_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/08.Payment Batch 3.png' });

//     });


// });





// test.describe('Hybrid 006_49499_AD', () => {
//     let batchPage; // ประกาศตัวแปรระดับ describe
//     let paperstamp;
//     test.beforeEach(async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const { username, password } = sysAdminUsers[0];
//         // สร้าง instance batchPage
//         batchPage = new BatchPage(page);
//         paperstamp = new PaperStampPage(page);
//         await loginPage.navigateToLogin();
//         await loginPage.login(username, password);
//     });







//     test('TC01 - Upload PaperStamp HB6_49499_001 ', async ({ page }) => {

//         await paperstamp.gotoPaperstamp()
//         await test.step('Upload File PP HB005 ', async () => {
//             await paperstamp.uploadFilePP_HB6_49499_001();
//         })
//         await paperstamp.closeBTN.click();
//         await paperstamp.searchBTN.click();
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-001')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-001')).toHaveText('T15-GSD-TC5-HB6-49499-4-001', { timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-002')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-002')).toHaveText('T15-GSD-TC5-HB6-49499-4-002', { timeout: 1000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/01.PaperStamp 1 Details.png' });


//     });










//     test('TC02 - Upload HB6_49499_002 ', async ({ page }) => {

//         await test.step('Upload File HB002 ', async () => {
//             await batchPage.uploadFileHB6_49499_002();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB6_49499_002_AD_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/02.Batch 1 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();

//         }


//     });



//     test('TC02 - Pay HB5_49499_002 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_002_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/03.Payment Batch 1.png' });

//     });









//     test('TC04 - Upload PaperStamp HB5_49499_003 ', async ({ page }) => {

//         await paperstamp.gotoPaperstamp()
//         await test.step('Upload File PP HB005 ', async () => {
//             await paperstamp.uploadFilePP_HB6_49499_003();
//         })
//         await paperstamp.closeBTN.click();
//         await paperstamp.searchBTN.click();
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-001')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-001')).toHaveText('T15-GSD-TC5-HB6-49499-4-001', { timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-002')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB6-49499-4-002')).toHaveText('T15-GSD-TC5-HB6-49499-4-002', { timeout: 1000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/04.PaperStamp 2 Details.png' });


//     });







//     test('TC05 - Upload HB5_49499_004 ', async ({ page }) => {

//         await test.step('Upload File HB004 ', async () => {
//             await batchPage.uploadFileHB6_49499_004();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB6_49499_004_AD_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/05.Batch 2 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();

//         }


//     });



//     test('TC06 - Pay HB5_49499_004 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_004_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/06.Payment Batch 2.png' });

//     });





//     test('TC07 - Upload HB5_49499_005 ', async ({ page }) => {

//         await test.step('Upload File HB005 ', async () => {
//             await batchPage.uploadFileHB6_49499_005();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB6_49499_005_AD_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/07.Batch 3 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();

//         }


//     });



//     test('TC08 - Pay HB5_49499_005 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB6_49499_005_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC03-HB5-49499/08.Payment Batch 3.png' });

//     });


// });





// test.describe('Hybrid 011_949_AD', () => {
//     let batchPage; // ประกาศตัวแปรระดับ describe
//     let paperstamp;
//     test.beforeEach(async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const { username, password } = sysAdminUsers[0];
//         // สร้าง instance batchPage
//         batchPage = new BatchPage(page);
//         paperstamp = new PaperStampPage(page);
//         await loginPage.navigateToLogin();
//         await loginPage.login(username, password);
//     });


//     test('TC01 - Upload HB11_949_001 ', async ({ page }) => {

//         await test.step('Upload File HB001 ', async () => {
//             await batchPage.uploadFileHB11_949_001();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB11_949_001_NE_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC05-HB11-949/01.Batch 1 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();

//         }


//     });



//     test('TC02 - Pay HB11_949_001 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_001_NE_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC05-HB11-949/02.Payment Batch 1.png' });

//     });






//     test('TC01 - Upload PaperStamp HB11_949_002 ', async ({ page }) => {

//         await paperstamp.gotoPaperstamp()
//         await test.step('Upload File PP HB011 ', async () => {
//             await paperstamp.uploadFilePP_HB11_949_002();
//         })
//         await paperstamp.closeBTN.click();
//         await paperstamp.searchBTN.click();
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB11-949-4-001')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB11-949-4-001')).toHaveText('T15-GSD-TC5-HB11-949-4-001', { timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB11-949-4-001')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB11-949-4-001')).toHaveText('T15-GSD-TC5-HB11-949-4-001', { timeout: 1000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC05-HB11-949/03.PaperStamp 1 Details.png' });


//     });


//     test('TC03 - Upload HB11_949_003 ', async ({ page }) => {

//         await test.step('Upload File HB003 ', async () => {
//             await batchPage.uploadFileHB11_949_003();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB11_949_003_AD_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC05-HB11-949/04.Batch 2 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();

//         }


//     });




//     test('TC04 - Pay HB11_949_003 ', async ({ page }) => {

//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB11_949_003_AD_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC05-HB11-949/05.Payment Batch 1.png' });

//     });

// });






// test.describe('Hybrid 012_949_IL', () => {
//     let batchPage; // ประกาศตัวแปรระดับ describe
//     let paperstamp;
//     test.beforeEach(async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const { username, password } = sysAdminUsers[0];
//         // สร้าง instance batchPage
//         batchPage = new BatchPage(page);
//         paperstamp = new PaperStampPage(page);
//         await loginPage.navigateToLogin();
//         await loginPage.login(username, password);
//     });


//     test('TC01 - Upload HB11_949_001 ', async ({ page }) => {

//         await test.step('Upload File HB001 ', async () => {
//             await batchPage.uploadFileHB12_949_001();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB12_949_001_NE_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC06-HB12-949/01.Batch 1 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();

//         }


//     });



//     test('TC02 - Pay HB11_949_001 ', async ({ page }) => {
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_001_NE_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC06-HB12-949/02.Payment Batch 1.png' });

//     });






//     test('TC01 - Upload PaperStamp HB11_949_002 ', async ({ page }) => {

//         await paperstamp.gotoPaperstamp()
//         await test.step('Upload File PP HB011 ', async () => {
//             await paperstamp.uploadFilePP_HB12_949_002();
//         })
//         await paperstamp.closeBTN.click();
//         await paperstamp.searchBTN.click();
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB12-949-4-001')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB12-949-4-001')).toHaveText('T15-GSD-TC5-HB12-949-4-001', { timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB12-949-4-002')).toBeVisible({ timeout: 1000 });
//         // await expect.soft(page.getByText('T15-GSD-TC5-HB12-949-4-002')).toHaveText('T15-GSD-TC5-HB12-949-4-002', { timeout: 1000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC06-HB12-949/03.PaperStamp 1 Details.png' });


//     });


//     test('TC03 - Upload HB11_949_003 ', async ({ page }) => {

//         await test.step('Upload File HB003 ', async () => {
//             await batchPage.uploadFileHB12_949_003();
//         })
//         await batchPage.closeBTN.click();
//         await batchPage.searchBTN.click();
//         await expect.soft(page.getByText('GSC_TC5_HB12_949_003_IL_4').first()).toBeVisible({ timeout: 10000 })
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC06-HB12-949/04.Batch 2 Details.png' });
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.submitToReview();
//         await page.waitForTimeout(5000);
//         await page.locator('a').filter({ hasText: 'Batch' }).click();
//         await page.waitForURL('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.waitForLoadState('load');
//         await batchPage.submitToRD();
//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });

//         }
//         await page.waitForTimeout(5000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.waitForTimeout(1800);
//         if (await page.getByRole('button', { name: 'Retry Submit' }).isVisible()) {
//             await page.getByRole('button', { name: 'Retry Submit' }).click()
//             await page.getByRole('button', { name: 'Confirm' }).click()
//             await page.waitForLoadState('load', { timeout: 3000 });
//             await page.goto('/batch');
//             await page.getByText('Search').click();
//             await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();

//         }


//     });




//     test('TC04 - Pay HB11_949_003 ', async ({ page }) => {

//         await page.waitForTimeout(1000);
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.waitForTimeout(1000);
//         await batchPage.Payment();
//         await page.waitForTimeout(15000);
//         await page.reload();
//         await page.goto('/batch');
//         await page.getByText('Search').click();
//         await page.getByText('GSC_TC5_HB12_949_003_IL_4').first().click();
//         await page.waitForTimeout(3000);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await page.waitForTimeout(1500);
//         if (await page.getByRole('button', { name: 'Pay', exact: true }).isVisible()) {
//             await batchPage.Payment();
//             await page.waitForTimeout(10000);
//         }
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toBeVisible();
//         await expect.soft(page.getByRole('button', { name: 'Paid' })).toHaveText('Paid');
//         await page.waitForLoadState('load', { timeout: 3000 });
//         await page.waitForTimeout(1000);
//         await page.screenshot({ path: 'Output/TS00-Gestamp/TC06-HB12-949/05.Payment Batch 1.png' });

//     });

// });





test.describe('Upload Classify', () => {
    let batchPage; // ประกาศตัวแปรระดับ describe

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const { username, password } = sysAdminUsers[0];

        // สร้าง instance batchPage
        batchPage = new BatchPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login(username, password);
    });


    test('TC01 - Upload Classify ', async ({ page }) => {

        await test.step('Upload File Classify ', async () => {
            await batchPage.uploadFileClassify();
        })
        await batchPage.closeBTN.click();
        await batchPage.searchBTN.click();
        await page.waitForTimeout(10000);


    });



    test('TC02 - TypeCode 3 OS4B ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_3_OS4B_2H');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_3_OS4B_2H').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/01.TypeCode3/01.OS4B/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({timeout:1000});
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/01.TypeCode3/01.OS4B/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_3_OS4B_2H' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_3_OS4B_2H' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC03 - TypeCode 3 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_3_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_3_OS4').first().click();
        await page.waitForTimeout(1000);
    await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/01.TypeCode3/02.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({timeout:1000});
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/01.TypeCode3/02.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_3_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_3_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC04 - TypeCode 3 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_3_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_3_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/01.TypeCode3/03.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/01.TypeCode3/03.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_3_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_3_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC05 - TypeCode 4 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_4_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_4_OS4').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/02.TypeCode4/01.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/02.TypeCode4/01.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_4_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_4_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC06 - TypeCode 4 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_4_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_4_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/02.TypeCode4/02.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/02.TypeCode4/02.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_4_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_4_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC07 - TypeCode 5 OS4B ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_5_OS4B_2H');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_5_OS4B_2H').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/03.TypeCode5/01.OS4B/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/03.TypeCode5/01.OS4B/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_5_OS4B_2H' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_5_OS4B_2H' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC08 - TypeCode 5 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_5_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_5_OS4').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/03.TypeCode5/02.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/03.TypeCode5/02.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_5_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_5_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC09 - TypeCode 5 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_5_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_5_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/03.TypeCode5/03.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/03.TypeCode5/03.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_5_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_5_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC10 - TypeCode 6 OS4B ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_6_OS4B');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_6_OS4B').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/04.TypeCode6/01.OS4B/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/04.TypeCode6/01.OS4B/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_6_OS4B' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_6_OS4B' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC11 - TypeCode 6 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_6_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_6_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/04.TypeCode6/02.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/04.TypeCode6/02.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_6_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_6_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });




    test('TC12 - TypeCode 12 OS4A ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_12_OS4A');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_12_OS4A').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/05.TypeCode12/01.OS4A/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/05.TypeCode12/01.OS4A/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_12_OS4A' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_12_OS4A' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC13 - TypeCode 12 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_12_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_12_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/05.TypeCode12/02.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/05.TypeCode12/02.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_12_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_12_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC14 - TypeCode 13 OS4A ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_13_OS4A');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_13_OS4A').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/06.TypeCode13/01.OS4A/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/06.TypeCode13/01.OS4A/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_13_OS4A' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_13_OS4A' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC15 - TypeCode 13 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_13_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_13_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/06.TypeCode13/02.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/06.TypeCode13/02.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_13_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_13_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC16 - TypeCode 14 OS4B ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_14_OS4B');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_14_OS4B').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/07.TypeCode14/01.OS4B/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/07.TypeCode14/01.OS4B/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_14_OS4B' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_14_OS4B' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC17 - TypeCode 14 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_14_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_14_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/07.TypeCode14/02.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/07.TypeCode14/02.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_14_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_14_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC18 - TypeCode 15 OS4A ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_15_OS4A');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_15_OS4A').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/08.TypeCode15/01.OS4A/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/08.TypeCode15/01.OS4A/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_15_OS4A' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_15_OS4A' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC19 - TypeCode 15 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_15_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_15_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/08.TypeCode15/02.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/08.TypeCode15/02.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_15_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_15_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });




    test('TC20 - TypeCode 16 OS4B ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_16_OS4B_2H');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_16_OS4B_2H').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/09.TypeCode16/01.OS4B/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/09.TypeCode16/01.OS4B/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_16_OS4B_2H' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_16_OS4B_2H' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC21 - TypeCode 16 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_16_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_16_OS4').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/09.TypeCode16/02.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/09.TypeCode16/02.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_16_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_16_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC22 - TypeCode 16 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_16_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_16_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/09.TypeCode16/03.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/09.TypeCode16/03.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_16_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_16_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });




    test('TC23 - TypeCode 17 OS4B ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_17_OS4B_2H');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_17_OS4B_2H').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/10.TypeCode17/01.OS4B/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/10.TypeCode17/01.OS4B/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_17_OS4B_2H' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_17_OS4B_2H' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC24 - TypeCode 17 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_17_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_17_OS4').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/10.TypeCode17/02.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/10.TypeCode17/02.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_17_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_17_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC25 - TypeCode 17 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_17_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_17_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/10.TypeCode17/03.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/10.TypeCode17/03.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_17_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_17_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC26 - TypeCode 91 OS4A ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_91_OS4A_2H');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_91_OS4A_2H').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/11.TypeCode91/01.OS4A/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/11.TypeCode91/01.OS4A/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_91_OS4A_2H' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_91_OS4A_2H' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC27 - TypeCode 91 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_91_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_91_OS4').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/11.TypeCode91/02.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/11.TypeCode91/02.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_91_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_91_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC28 - TypeCode 91 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_91_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_91_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/11.TypeCode91/03.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/11.TypeCode91/03.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_91_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_91_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC29 - TypeCode 92 OS4A ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_92_OS4A_2H');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_92_OS4A_2H').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/12.TypeCode92/01.OS4A/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/12.TypeCode92/01.OS4A/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_92_OS4A_2H' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_92_OS4A_2H' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC30 - TypeCode 92 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_92_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_92_OS4').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/12.TypeCode92/02.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/12.TypeCode92/02.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_92_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_92_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC31 - TypeCode 92 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_92_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_92_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/12.TypeCode92/03.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/12.TypeCode92/03.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_92_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_92_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC32 - TypeCode 111 OS4A ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_111_OS4A_2H');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_111_OS4A_2H').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/13.TypeCode111/01.OS4A/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/13.TypeCode111/01.OS4A/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_111_OS4A_2H' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_111_OS4A_2H' })).toBeHidden();
        await page.waitForTimeout(1000);
    });


    test('TC33 - TypeCode 111 OS4 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_111_OS4');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_111_OS4').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/13.TypeCode111/02.OS4/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/13.TypeCode111/02.OS4/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_111_OS4' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_111_OS4' })).toBeHidden();
        await page.waitForTimeout(1000);
    });



    test('TC34 - TypeCode 111 OS9 ', async ({ page }) => {
        await test.step('Search Filename ', async () => {
            await batchPage.searchFilename();
            await expect.soft(page.locator('div').filter({ hasText: /^File Name$/ }).nth(2)).toBeVisible({ timeout: 1000 })
            await batchPage.filenameFD.fill('Auto_GeStamp_TC_classify_111_OS9');
            await batchPage.searchBTN.click();
        })
        await page.waitForTimeout(1000);
        await page.getByText('Auto_GeStamp_TC_classify_111_OS9').first().click();
        await page.waitForTimeout(1000);
        await page.getByText('Goto page').first().hover()
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/13.TypeCode111/03.OS9/01.Details 1.png' });
        await page.waitForTimeout(1000);
        await page.getByRole('columnheader', { name: 'Form Type', exact: true }).hover({ timeout: 1000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC07-Classify/13.TypeCode111/03.OS9/02.Form Type.png' });
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'Batch' }).click();
        await page.waitForURL('/batch');
        await page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_111_OS9' }).first().getByRole('button').nth(1).click();
        await page.getByRole('button', { name: 'Confirm' }).click();
        await expect.soft(page.getByRole('row', { name: 'Auto_GeStamp_TC_classify_111_OS9' })).toBeHidden();
        await page.waitForTimeout(1000);
    });





});






test.describe('Upload PayPal', () => {
    let batchPage; // ประกาศตัวแปรระดับ describe

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const { username, password } = PayPalUsers[0];

        // สร้าง instance batchPage
        batchPage = new BatchPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login(username, password);
    });


    test('TC01 - Upload HB1_99_001 ', async ({ page }) => {

        await test.step('Upload File Paypal ', async () => {
            await batchPage.uploadFilePaypal();
        })
        await batchPage.closeBTN.click();
        await batchPage.searchBTN.click();
        await page.waitForTimeout(60000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC08-Paypal/01.Upload Success.png' });

    });



    
    test('Wait 2 Minute ', async ({ page }) => {

        
        await page.waitForTimeout(100000);

    });


    
    test('Wait 4 Minute ', async ({ page }) => {

        
        await page.waitForTimeout(100000);

    });


    
    test('Wait 6 Minute ', async ({ page }) => {

        
        await page.waitForTimeout(100000);

    });



    test('Wait 8 Minute ', async ({ page }) => {

        
        await page.waitForTimeout(100000);

    });
    test('Wait 10 Minute ', async ({ page }) => {

        
        await page.waitForTimeout(100000);

    });

    test('Wait 12 Minute ', async ({ page }) => {

        
        await page.waitForTimeout(100000);

    });


    test('TC02 - Submit ', async ({ page }) => {

        await expect.soft(page.getByText('Auto_PayPal_4_OS9').first()).toBeVisible({ timeout: 10000 })
        await page.getByText('Auto_PayPal_4_OS9').first().click();
        await page.waitForTimeout(3000);
        await page.getByRole('link', { name: 'Submit' }).click();
        await expect.soft(page.getByText('Submit Message', { exact: true })).toBeVisible({ timeout: 10000 });
        await expect.soft(page.getByText('Submit Message', { exact: true })).toHaveText('Submit Message',{ timeout: 10000 });
        await expect.soft(page.getByText('I07001 | ได้รับข้อมูลเรียบร้อยแล้ว รอตรวจสอบความถูกต้องของข้อมูล')).toBeVisible({ timeout: 10000 });
        await expect.soft(page.getByText('I07001 | ได้รับข้อมูลเรียบร้อยแล้ว รอตรวจสอบความถูกต้องของข้อมูล')).toHaveText('I07001 | ได้รับข้อมูลเรียบร้อยแล้ว รอตรวจสอบความถูกต้องของข้อมูล',{ timeout: 10000 });
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Output/TS00-Gestamp/TC08-Paypal/02.Submit Details.png' });

        
    });



});

