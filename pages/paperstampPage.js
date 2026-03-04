class PaperStampPage {
    constructor(page) {
        this.page = page;
        // data version
        this.dvLastet = page.getByRole('menuitem', { name: 'Latest' });
        this.dvAll = page.getByRole('menuitem', { name: 'All Version' })
        this.dataversionBTN = page.getByRole('menuitem', { name: 'Data Version' });
        // filter
        this.filterBTN = page.getByRole('button', { name: 'Filter' });
        // row per page
        this.row = page.getByText('Rows per page');
        this.setrow = page.locator('select');
        // search 
        this.searchBTN = page.getByText('Search');
        // link paperstamp 
        this.paperstampdutypage = page.getByRole('link', { name: 'Paper Stamp Duty' });

        // upload datefrom
        this.updfpaper = page.locator('mat-form-field').filter({ hasText: 'Uploaded Date From' }).getByLabel('Open calendar');
        this.updfmonthandyear = page.getByLabel('Choose month and year');
        this.updfyear = page.getByLabel('2023');
        this.updfmonth = page.getByLabel('August 2023');
        this.updfday = page.getByLabel('2 August 2023', { exact: true });


        // upload date to 

        this.updtpaper = page.locator('mat-form-field').filter({ hasText: 'Uploaded Date to' }).getByLabel('Open calendar');
        this.updtmonthandyear = page.getByLabel('Choose month and year');
        this.updtyear = page.getByLabel('2024');
        this.updtmonth = page.getByLabel('December 2024');
        this.updtday = page.getByLabel('11 December 2024', { exact: true });


        // cration date from
        this.ctdfpaper = page.locator('mat-form-field').filter({ hasText: 'Creation Date From' }).getByLabel('Open calendar');
        this.ctdfmonthandyear = page.getByLabel('Choose month and year');
        this.ctdfyear = page.getByLabel('2022');
        this.ctdfmonth = page.getByLabel('August 2022');
        this.ctdfday = page.getByLabel('2 August 2022', { exact: true });


        // creation date to 

        this.ctdtpaper = page.locator('mat-form-field').filter({ hasText: 'Creation Date to' }).getByLabel('Open calendar');
        this.ctdtmonthandyear = page.getByLabel('Choose month and year');
        this.ctdtyear = page.getByLabel('2025');
        this.ctdtmonth = page.getByLabel('December 2025');
        this.ctdtday = page.getByLabel('11 December 2025', { exact: true });
        // date

        this.Today = page.getByRole('menuitem', { name: 'Today' });
        this.ThisWeek = page.getByRole('menuitem', { name: 'This Week' });
        this.ThisMonth = page.getByRole('menuitem', { name: 'This Month' });
        this.Last7D = page.getByRole('menuitem', { name: 'Last 7 Days' });
        this.Last15D = page.getByRole('menuitem', { name: 'Last 15 Days' });
        this.Last1Month = page.getByRole('menuitem', { name: 'Last 1 Month' });
        this.Last2Month = page.getByRole('menuitem', { name: 'Last 2 Months' });
        this.Last3Month = page.getByRole('menuitem', { name: 'Last 3 Months' });
        this.Last6Month = page.getByRole('menuitem', { name: 'Last 6 Months' });

        // uploaddate
        this.menuuploaddateBTN = page.getByRole('menuitem', { name: 'Uploaded Date' });
        this.closeuploaddateform = page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Fromclosed' }).locator('mat-icon');
        this.closeuploaddateto = page.locator('app-input-filter').filter({ hasText: 'Uploaded Date Toclosed' }).locator('mat-icon');
        this.uploaddateBTN = page.getByRole('button', { name: 'Uploaded Date' });

        // creationdate
        this.menucreationdateBTN = page.getByRole('menuitem', { name: 'Creation Date' });
        this.creationDateBTN = page.getByRole('button', { name: 'Creation Date' });

        // Contractno
        this.menucontractnoBTN = page.getByRole('menuitem', { name: 'Contract No' });
        this.contractnoFD = page.getByLabel('Contract No');
        this.contractnoBTN = page.getByRole('button', { name: 'Contract No.' });
        //Uploader
        this.uploaderBTN = page.getByRole('menuitem', { name: 'Uploader' });
        this.uploaderFD = page.getByLabel('Uploader');
        // Asc Des
        this.ascBTN = page.getByRole('menuitem', { name: 'Ascending' });
        this.desBTN = page.getByRole('menuitem', { name: 'Descending' });
        // next prewiev
        this.nextBTN = page.getByLabel('Next');
        this.previousBTN = page.getByLabel('Previous');

        //Upload Template
        this.uploadBTN = page.getByRole('button', { name: 'Upload', exact: true });
        this.setFile = page.locator('#file');
        this.closeBTN = page.getByRole('button', { name: 'Close' });
        this.autopaperBTN = page.locator('tr').filter({ hasText: 'Auto_Paper' }).locator('button');
        this.confirmBTN = page.getByRole('button', { name: 'Confirm' });
        this.autodeleteBTN = page.locator('tr').filter({ hasText: 'Auto_Delete' }).locator('button');
        this.uploadSuccessH1 = page.getByRole('heading', { name: 'Upload Success' })




        this.FILE_PATHS = {
            //Paper Stamp HB5
            PP_HB5_49499_001: 'Data Files/Gestamp/OK_HB005_49499_IL/GSC_TC5_HB5_49499_001_PP_4.xlsx',
            PP_HB5_49499_003: 'Data Files/Gestamp/OK_HB005_49499_IL/GSC_TC5_HB5_49499_003_PP_4.xlsx',
            //Paper Stamp HB6
            PP_HB6_49499_001: 'Data Files/Gestamp/OK_HB006_49499_AD/GSC_TC5_HB6_49499_001_PP_4.xlsx',
            PP_HB6_49499_003: 'Data Files/Gestamp/OK_HB006_49499_AD/GSC_TC5_HB6_49499_003_PP_4.xlsx',
            //Paper Stamp HB11
            PP_HB11_949_002: 'Data Files/Gestamp/OK_HB011_949_AD/GSC_TC5_HB11_949_002_PP_4.xlsx',
            //Paper Stamp HB12
            PP_HB12_949_002: 'Data Files/Gestamp/OK_HB012_949_IL/GSC_TC5_HB12_949_002_PP_4.xlsx',
        };




    }


    async uploadFilePP_HB12_949_002() {
        await this.uploadFile(this.FILE_PATHS.PP_HB12_949_002);
    }


    async uploadFilePP_HB11_949_002() {
        await this.uploadFile(this.FILE_PATHS.PP_HB11_949_002);
    }




    async uploadFilePP_HB6_49499_001() {
        await this.uploadFile(this.FILE_PATHS.PP_HB6_49499_001);
    }


    async uploadFilePP_HB6_49499_003() {
        await this.uploadFile(this.FILE_PATHS.PP_HB6_49499_003);
    }

    async uploadFilePP_HB5_49499_001() {
        await this.uploadFile(this.FILE_PATHS.PP_HB5_49499_001);
    }


    async uploadFilePP_HB5_49499_003() {
        await this.uploadFile(this.FILE_PATHS.PP_HB5_49499_003);
    }



    async uploadFile(filePath) {
        // คลิกปุ่ม Upload เพื่อเปิด file dialog
        await this.uploadBTN.click();
        // รอให้ file input พร้อมใช้งาน
        await this.setFile.waitFor({ state: 'visible', timeout: 5000 });
        // อัปโหลดไฟล์
        await this.setFile.setInputFiles(filePath);
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






    async UploadTemplate1() {
        await this.uploadBTN.click({ state: 'visible', timeout: 1000 });
        await this.setFile.setInputFiles('Data Files/test/PaperStampTemplate.xlsx');
        await this.uploadBTN.click({ state: 'visible', timeout: 1000 });

    }



    async DeleteAutoDelete() {
        await this.autodeleteBTN.click();

    }

    async DeleteAutoPaper() {
        await this.autopaperBTN.click();
        await this.confirmBTN.click();


    }

    async UploadTemplate2() {
        await this.uploadBTN.click({ state: 'visible', timeout: 1000 });
        await this.setFile.setInputFiles('Data Files/test/PaperStampTemplate2.xlsx');
        await this.uploadBTN.click({ state: 'visible', timeout: 1000 });

    }
    async UploadTemplate1() {
        await this.uploadBTN.click({ state: 'visible', timeout: 1000 });
        await this.setFile.setInputFiles('Data Files/test/PaperStampTemplate.xlsx');
        await this.uploadBTN.click({ state: 'visible', timeout: 1000 });

    }


    async ClickPrevious() {
        await this.previousBTN.click({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }
    async ClickNext() {
        await this.nextBTN.click({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }



    async setContractNoDes() {
        await this.contractnoBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucontractnoBTN.hover({ state: 'visible', timeout: 5000 });
        await this.desBTN.click({ state: 'visible', timeout: 1000 });

    }




    async setContractNoAsc() {
        await this.creationDateBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucontractnoBTN.hover({ state: 'visible', timeout: 5000 });
        await this.ascBTN.click({ state: 'visible', timeout: 1000 });

    }



    async setCreationDateDes() {
        await this.creationDateBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.desBTN.click({ state: 'visible', timeout: 1000 });

    }


    async setCreationDateAsc() {
        await this.uploaddateBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.ascBTN.click({ state: 'visible', timeout: 1000 });

    }



    async setUploadDateAsc() {
        await this.uploaddateBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.ascBTN.click({ state: 'visible', timeout: 1000 });

    }


    async setUploadDateDes() {
        await this.uploaddateBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.desBTN.click({ state: 'visible', timeout: 1000 });

    }

    async setUploader1() {

        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.uploaderBTN.click({ state: 'visible', timeout: 5000 });
        await this.uploaderFD.fill('kittisak');

    }

    async setUploader() {

        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.uploaderBTN.click({ state: 'visible', timeout: 5000 });
        await this.uploaderFD.fill('kittisak');

    }


    async setContractNo() {

        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucontractnoBTN.click({ state: 'visible', timeout: 5000 });
        await this.contractnoFD.fill('2269639948');

    }
    async setContractNo1() {

        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucontractnoBTN.click({ state: 'visible', timeout: 5000 });
        await this.contractnoFD.fill('Auto_Test0298');

    }


    async setCreationDateToday() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Today.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateThisWeek() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.ThisWeek.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateThisMonth() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.ThisMonth.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateLast7Day() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last7D.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateLast15Day() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last15D.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateLast1Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last1Month.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateLast2Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last2Month.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateLast3Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last3Month.click({ state: 'visible', timeout: 1000 });

    }

    async setCreationDateLast6Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menucreationdateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last6Month.click({ state: 'visible', timeout: 1000 });

    }

    async closeUploadDate() {

        await this.closeuploaddateform.click({ state: 'visible', timeout: 5000 });
        await this.closeuploaddateto.click({ state: 'visible', timeout: 5000 });

    }


    async setUploadDateToday() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Today.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateThisWeek() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.ThisWeek.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateThisMonth() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.ThisMonth.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateLast7Day() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last7D.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateLast15Day() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last15D.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateLast1Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last1Month.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateLast2Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last2Month.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateLast3Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last3Month.click({ state: 'visible', timeout: 1000 });

    }

    async setUploadDateLast6Month() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.menuuploaddateBTN.hover({ state: 'visible', timeout: 5000 });
        await this.Last6Month.click({ state: 'visible', timeout: 1000 });

    }


    async setUploadDateTo() {

        await this.updtpaper.waitFor({ state: 'visible', timeout: 1000 })
        await this.updtpaper.click({ state: 'visible', timeout: 1000 });
        await this.updtmonthandyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.updtmonthandyear.click({ state: 'visible', timeout: 1000 });
        await this.updtyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.updtyear.click({ state: 'visible', timeout: 1000 });
        await this.updtmonth.waitFor({ state: 'visible', timeout: 1000 })
        await this.updtmonth.click({ state: 'visible', timeout: 1000 });
        await this.updtday.waitFor({ state: 'visible', timeout: 1000 })
        await this.updtday.click({ state: 'visible', timeout: 1000 });
        await this.page.waitForTimeout(500);

    }






    async setDataVersionAll() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.dataversionBTN.hover({ state: 'visible', timeout: 5000 });
        await this.dvAll.click({ state: 'visible', timeout: 1000 });
        await this.page.waitForTimeout(500);



    }

    async setDataVersionLastet() {
        await this.filterBTN.click({ state: 'visible', timeout: 1000 });
        await this.dataversionBTN.hover({ state: 'visible', timeout: 5000 });
        await this.dvLastet.click({ state: 'visible', timeout: 1000 });
        await this.page.waitForTimeout(500);



    }


    async setRow10() {

        await this.setrow.selectOption('10');
        await this.row.waitFor({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }

    async setRow15() {

        await this.setrow.selectOption('15');
        await this.row.waitFor({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }

    async setRow20() {

        await this.setrow.selectOption('20');
        await this.row.waitFor({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }

    async setRow50() {

        await this.setrow.selectOption('50');
        await this.row.waitFor({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }

    async setRow100() {

        await this.setrow.selectOption('100');
        await this.row.waitFor({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }

    async setRow150() {

        await this.setrow.selectOption('150');
        await this.row.waitFor({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }

    async setRow200() {

        await this.setrow.selectOption('200');
        await this.row.waitFor({ state: 'visible', timeout: 1000 });
        await this.row.hover({ state: 'visible', timeout: 5000 });

    }

    async clickSearchBTN() {
        await this.searchBTN.click({ state: 'visible', timeout: 1000 });
        await this.page.waitForTimeout(500);

    }

    async gotoPaperstamp() {
        await this.paperstampdutypage.click();
        await this.page.waitForURL('**/paperstamp'); // ✅ ใช้ await ตรงนี้
    }

    async setUploadDateFrom() {

        await this.updfpaper.waitFor({ state: 'visible', timeout: 1000 })
        await this.updfpaper.click({ state: 'visible', timeout: 1000 });
        await this.updfmonthandyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.updfmonthandyear.click({ state: 'visible', timeout: 1000 });
        await this.updfyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.updfyear.click({ state: 'visible', timeout: 1000 });
        await this.updfmonth.waitFor({ state: 'visible', timeout: 1000 })
        await this.updfmonth.click({ state: 'visible', timeout: 1000 });
        await this.updfday.waitFor({ state: 'visible', timeout: 1000 })
        await this.updfday.click({ state: 'visible', timeout: 1000 });
        await this.page.waitForTimeout(500);

    }



    async setCreationDateFrom() {

        await this.ctdfpaper.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdfpaper.click({ state: 'visible', timeout: 1000 });
        await this.ctdfmonthandyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdfmonthandyear.click({ state: 'visible', timeout: 1000 });
        await this.ctdfyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdfyear.click({ state: 'visible', timeout: 1000 });
        await this.ctdfmonth.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdfmonth.click({ state: 'visible', timeout: 1000 });
        await this.ctdfday.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdfday.click({ state: 'visible', timeout: 1000 });
        await this.page.waitForTimeout(500);

    }

    async setCreationDateTo() {

        await this.ctdtpaper.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdtpaper.click({ state: 'visible', timeout: 1000 });
        await this.ctdtmonthandyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdtmonthandyear.click({ state: 'visible', timeout: 1000 });
        await this.ctdtyear.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdtyear.click({ state: 'visible', timeout: 1000 });
        await this.ctdtmonth.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdtmonth.click({ state: 'visible', timeout: 1000 });
        await this.ctdtday.waitFor({ state: 'visible', timeout: 1000 })
        await this.ctdtday.click({ state: 'visible', timeout: 1000 });
        await this.page.waitForTimeout(500);

    }



}

module.exports = { PaperStampPage };
