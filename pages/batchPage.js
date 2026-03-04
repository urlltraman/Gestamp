class BatchPage {
    constructor(page) {
        this.page = page;
        this.uploadBTN = page.getByRole('button', { name: 'Upload' });
        this.setfile = page.locator('#file');
        this.uploadSuccessH1 = page.getByRole('heading', { name: 'Upload Success' });
        this.closeBTN = page.getByRole('button', { name: 'Close' });
        this.searchBTN = page.getByText('Search');
        this.submitReviewBTN = page.getByText('Submit For Review');
        this.confirmBTN = page.getByRole('button', { name: 'Confirm' });
        this.submitRDBTN = page.locator('button').filter({ hasText: /^Submit$/ });
        this.payBTN = page.getByRole('button', { name: 'Pay', exact: true });
        this.directdebitBTN = page.getByRole('tab', { name: 'Direct Debit' });
        this.submitpayBTN = page.getByRole('button', { name: 'Submit Payment' });
        this.confirmPayBTN = page.getByText('Confirm');
        this.filterBTN = page.getByRole('button', { name: 'Filter' });
        this.filenameBTN = page.getByRole('menuitem', { name: 'File Name' });
        this.filenameFD = page.getByLabel('File Name');
        









        this.FILE_PATHS = {
            // HB1_99
            HB1_99_001: 'Data Files/Gestamp/OK_HB001_99_IL/GSC_TC5_HB1_99_001_NE_4.xlsx',
            HB1_99_002: 'Data Files/Gestamp/OK_HB001_99_IL/GSC_TC5_HB1_99_002_IL_4.xlsx',
            //HB2_99
            HB2_99_001: 'Data Files/Gestamp/OK_HB002_99_AD/GSC_TC5_HB2_99_001_NE_4.xlsx',
            HB2_99_002: 'Data Files/Gestamp/OK_HB002_99_AD/GSC_TC5_HB2_99_002_AD_4.xlsx',
            //HB5_49499
            HB5_49499_002: 'Data Files/Gestamp/OK_HB005_49499_IL/GSC_TC5_HB5_49499_002_IL_4.xlsx',
            HB5_49499_004: 'Data Files/Gestamp/OK_HB005_49499_IL/GSC_TC5_HB5_49499_004_IL_4.xlsx',
            HB5_49499_005: 'Data Files/Gestamp/OK_HB005_49499_IL/GSC_TC5_HB5_49499_005_IL_4.xlsx',
            //HB6_49499
            HB6_49499_002: 'Data Files/Gestamp/OK_HB006_49499_AD/GSC_TC5_HB6_49499_002_AD_4.xlsx',
            HB6_49499_004: 'Data Files/Gestamp/OK_HB006_49499_AD/GSC_TC5_HB6_49499_004_AD_4.xlsx',
            HB6_49499_005: 'Data Files/Gestamp/OK_HB006_49499_AD/GSC_TC5_HB6_49499_005_AD_4.xlsx',
            //HB11_949
            HB11_949_001: 'Data Files/Gestamp/OK_HB011_949_AD/GSC_TC5_HB11_949_001_NE_4.xlsx',
            HB11_949_003: 'Data Files/Gestamp/OK_HB011_949_AD/GSC_TC5_HB11_949_003_AD_4.xlsx',
             //HB12_949
             HB12_949_001: 'Data Files/Gestamp/OK_HB012_949_IL/GSC_TC5_HB12_949_001_NE_4.xlsx',
             HB12_949_003: 'Data Files/Gestamp/OK_HB012_949_IL/GSC_TC5_HB12_949_003_IL_4.xlsx',
             //Paypal
             Paypal: 'Data Files/Gestamp/Auto_PayPal.json',
             //Classify
             Classify: 'Data Files/Gestamp/Auto_GeStamp_TC_classify.xlsx',

        };
    }

    
    async searchFilename() {
        await this.filterBTN.click();
        await this.filenameBTN.click();

    }


    async uploadFileClassify() {
        await this.uploadFile(this.FILE_PATHS.Classify);
    }



    async uploadFilePaypal() {
        await this.uploadFile(this.FILE_PATHS.Paypal);
    }


    async uploadFileHB12_949_001() {
        await this.uploadFile(this.FILE_PATHS.HB12_949_001);
    }

    async uploadFileHB12_949_003() {
        await this.uploadFile(this.FILE_PATHS.HB12_949_003);
    }



    
    async uploadFileHB11_949_001() {
        await this.uploadFile(this.FILE_PATHS.HB11_949_001);
    }

    async uploadFileHB11_949_003() {
        await this.uploadFile(this.FILE_PATHS.HB11_949_003);
    }





    async uploadFileHB6_49499_002() {
        await this.uploadFile(this.FILE_PATHS.HB6_49499_002);
    }

    async uploadFileHB6_49499_004() {
        await this.uploadFile(this.FILE_PATHS.HB6_49499_004);
    }


    async uploadFileHB6_49499_005() {
        await this.uploadFile(this.FILE_PATHS.HB6_49499_005);
    }




    async uploadFileHB5_49499_002() {
        await this.uploadFile(this.FILE_PATHS.HB5_49499_002);
    }

    async uploadFileHB5_49499_004() {
        await this.uploadFile(this.FILE_PATHS.HB5_49499_004);
    }


    async uploadFileHB5_49499_005() {
        await this.uploadFile(this.FILE_PATHS.HB5_49499_005);
    }
    async Payment() {
        await this.payBTN.click();
        await this.directdebitBTN.click();
        await this.submitpayBTN.click();
        await this.confirmPayBTN.click();
    }



    async submitToReview() {
        await this.submitReviewBTN.click();
        await this.confirmBTN.click();

    }

    async submitToRD() {
        await this.submitRDBTN.click();
        await this.confirmBTN.click();

    }

    async uploadFileHB2_99_001() {
        await this.uploadFile(this.FILE_PATHS.HB2_99_001);
    }


    async uploadFileHB2_99_002() {
        await this.uploadFile(this.FILE_PATHS.HB2_99_002);
    }

    async uploadFileHB1_99_001() {
        await this.uploadFile(this.FILE_PATHS.HB1_99_001);
    }


    async uploadFileHB1_99_002() {
        await this.uploadFile(this.FILE_PATHS.HB1_99_002);
    }


    async uploadFile(filePath) {
        // คลิกปุ่ม Upload เพื่อเปิด file dialog
        await this.uploadBTN.click();

        // รอให้ file input พร้อมใช้งาน
        await this.setfile.waitFor({ state: 'visible', timeout: 5000 });

        // อัปโหลดไฟล์
        await this.setfile.setInputFiles(filePath);

        await this.uploadBTN.click();


        // ตรวจสอบว่า upload สำเร็จ
        await this.verifyUploadSuccess();
    }



    async verifyUploadSuccess() {
        try {
            // รอให้ heading "Upload Success" แสดง
            await this.uploadSuccessH1.waitFor({
                state: 'visible',
                timeout: 10000
            });

            // คลิกปิด (ถ้าต้องการ)
            // await this.closeBTN.click();

            console.log('✅ Upload successful');
            return true;
        } catch (error) {
            console.error('❌ Upload failed:', error);
            throw new Error('Upload success message not visible');
        }
    }


    async uploadAndClose(filePath) {
        await this.uploadFile(filePath);
        await this.closeBTN.click();
    }



    //     async enterUsername(username) {
    //       await this.usernameInput.fill(username); // ✅ ใช้ .fill() บน locator
    //     }

    //     async enterPassword(password) {
    //       await this.passwordInput.fill(password);
    //     }

    //     async clickBatch() {
    //       await this.loginBTN.click(); // ✅ ใช้ .click() บน locator
    //     }

    //     async login(username, password) {
    //       await this.enterUsername(username);
    //       await this.enterPassword(password);
    //       await this.clickBatch();
    //     }

    //   async navigateToBatch() {
    //     await this.page.goto('/login');
    //   }
}

module.exports = { BatchPage };
