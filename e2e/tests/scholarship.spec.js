// @ts-check
const { test, expect } = require('@playwright/test');
const { ScholarshipPage } = require('../pages/scholarship/scholarship.page');
const { stat } = require('fs');
const { TIMEOUT } = require('dns');
const fs = require('fs');

test.describe.only('Sdet-Test-Scholarship', () => {
    test.use({ viewport: { width: 1580, height: 700 } });
    test('has title', async ({ page }, testIno) => {

        const scholarshippage = new ScholarshipPage(page, testIno);
        await page.goto('https://apply.mykaleidoscope.com/program/sdet-test-scholarship');
        //await scholarshippage.waitPageLoad();      
        const emailId = await scholarshippage.makeName('@gmail.com');
        await test.step('create your account', async () => {
            await scholarshippage.scholarshipsection.locatorLogInToApplyLink().click({ timeout: scholarshippage.MINUTE });
            await scholarshippage.scholarshipsection.locatorEmailAddressInputBox().fill(emailId);
            await scholarshippage.scholarshipsection.locatorNextLabel().click();
            //await scholarshippage.page.pause();
            await scholarshippage.scholarshipsection.locatorFirstNameInputBox().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorFirstNameInputBox().fill(emailId.split('@')[0]+"a");
            await scholarshippage.scholarshipsection.locatorLastNameInputBox().fill(emailId.split('@')[0]+"b");
            await scholarshippage.scholarshipsection.locatorMobilePhoneInputBox().click();
            await scholarshippage.keyBoardBackSpace();
            await scholarshippage.scholarshipsection.locatorMobilePhoneInputBox().fill('919884970897');
            await scholarshippage.scholarshipsection.locatorCreateAPasswordInputBox().fill(emailId.split('@')[0]+'EA@2013');
            await scholarshippage.scholarshipsection.locatorConfirmCheckBox().click();
            await scholarshippage.scholarshipsection.locatorSubmitLable().click();
            //await scholarshippage.page.pause();
        });
        await test.step('Lets get to know you!', async () => {
            await scholarshippage.scholarshipsection.locatorStreetAddressInputBox().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorStreetAddressInputBox().fill('chennai');
            await scholarshippage.scholarshipsection.locatorStateDropDown().click();
            await scholarshippage.scholarshipsection.locatorStateDropDown().fill('Alaska');
            await scholarshippage.scholarshipsection.locatorStateDropDown().press('Enter');
            await scholarshippage.scholarshipsection.locatorStateDropDown().press('ArrowDown');
            await scholarshippage.scholarshipsection.locatorStateDropDown().press('Enter');
            await scholarshippage.scholarshipsection.locatorEnterCityInputBox().fill('nellore');
            await scholarshippage.scholarshipsection.locatorZipCodeInputBox().fill('524001');
            await scholarshippage.scholarshipsection.locatorCountryDropDown().click();
            await scholarshippage.scholarshipsection.locatorCountryDropDown().fill('Afghanistan');
            await scholarshippage.scholarshipsection.locatorCountryDropDown().press('Enter');
            await scholarshippage.scholarshipsection.locatorCountryDropDown().press('ArrowDown');
            await scholarshippage.scholarshipsection.locatorCountryDropDown().press('Enter');
            await scholarshippage.scholarshipsection.locatorNextPageButton().click();
            await scholarshippage.dataLoadCircle();
        });
        // await scholarshippage.page.pause();
        await test.step('Extracurricular Activities', async () => {
            await scholarshippage.scholarshipsection.locatorAddEntryButton().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorNextPageButton().click();
            const ErrorMsg = await scholarshippage.scholarshipsection.locatorAddEntryErrorMsg().innerText();
            expect(ErrorMsg).toEqual('Please add at least 2 entries');
            await scholarshippage.scholarshipsection.locatorAddEntryButton().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorAddEntryButton().click();
            await scholarshippage.fillAddEntry('aa', '1', 'aaa', 'aaaadddddddddddddd');
            await scholarshippage.scholarshipsection.locatorAddEntryButton().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorAddEntryButton().click();
            await scholarshippage.fillAddEntry('bb', '2', 'bbb', 'bbbbsssssssss');
            await scholarshippage.scholarshipsection.locatorAddEntryButton().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorAddEntryButton().click();
            await scholarshippage.fillAddEntry('cc', '3', 'ccc', 'ccccaaaaaaaaaa');
            await scholarshippage.scholarshipsection.locatorAddEntryButton().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorAddEntryButton().click();
            await scholarshippage.fillAddEntry('dd', '4', 'ddd', 'ddfrdfedredssss');
            await scholarshippage.scholarshipsection.locatorSaveButton().click();
            await scholarshippage.scholarshipsection.locatorWaitSaveBtnEnabled().waitFor({ state: 'hidden' });
            await scholarshippage.scholarshipsection.locatorNextPageSpan().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorNextPageSpan().click();
            //await scholarshippage.page.pause();
            await scholarshippage.dataLoadCircle();
        });
        await test.step('High School Information', async () => {
            await scholarshippage.scholarshipsection.locatorHighSchoolNameInputBox().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorHighSchoolNameInputBox().click();
            await scholarshippage.scholarshipsection.locatorHighSchoolNameInputBox().fill('amm');
            await scholarshippage.scholarshipsection.locatorHighSchoolNameInputBox().press('Space');
            await scholarshippage.scholarshipsection.locatorSchoolStreetAddressInputBox().click();
            await scholarshippage.scholarshipsection.locatorSchoolStreetAddressInputBox().press('Space');
            await scholarshippage.scholarshipsection.locatorSchoolStreetAddressInputBox().fill('chennai');
            await scholarshippage.scholarshipsection.locatorSchoolStreetAddressInputBox().press('Space');
            await scholarshippage.scholarshipsection.locatorSchoolStreetAddressInputBox().press('Tab');
            await scholarshippage.scholarshipsection.locatorSchoolCityInputBox().fill('chennai');
            await scholarshippage.scholarshipsection.locatorSchoolCityInputBox().press('Space');
            await scholarshippage.scholarshipsection.locatorSchoolCityInputBox().press('Tab');
            await scholarshippage.scholarshipsection.locatorHighSchoolStateDropDown().fill('Alaska');            
            await scholarshippage.scholarshipsection.locatorHighSchoolStateDropDown().press('ArrowDown');
            await scholarshippage.scholarshipsection.locatorHighSchoolStateDropDown().press('Enter');
            await scholarshippage.scholarshipsection.locatorHighSchoolStateDropDown().press('Tab');
            await scholarshippage.scholarshipsection.locatorSchoolZipCodeInputBox().dblclick();
            await scholarshippage.scholarshipsection.locatorSchoolZipCodeInputBox().fill('540001');
            await scholarshippage.scholarshipsection.locatorSchoolZipCodeInputBox().press('Tab');
            await scholarshippage.scholarshipsection.locatorGPAInputBox().dblclick();
            await scholarshippage.scholarshipsection.locatorGPAInputBox().fill('2');
            await scholarshippage.scholarshipsection.locatorGPAInputBox().press('Tab');
            await scholarshippage.scholarshipsection.locatorDateInputBox().click();
            await scholarshippage.scholarshipsection.locatorDateInputBox().fill('2022');
            await scholarshippage.scholarshipsection.locatorDateInputBox().press('Tab');
            await scholarshippage.uploadAllFiles();
            await scholarshippage.scholarshipsection.locatorUploadFileIcon().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorSaveButton().click();
            await scholarshippage.scholarshipsection.locatorWaitSaveBtnEnabled().waitFor({ state: 'hidden' });
            await scholarshippage.scholarshipsection.locatorNextPageSpan().waitFor({ state: 'visible', timeout:50000 });
            await scholarshippage.scholarshipsection.locatorNextPageSpan().dblclick();
            await scholarshippage.scholarshipsection.locatorNextPageSpan().click();
        });
        await test.step('Easy Type Information', async () => {
            //easy Type   
            await scholarshippage.scholarshipsection.locatorEasyTypeInputBox('Animals').waitFor({ state: 'visible', timeout:30000 }); 
            await scholarshippage.scholarshipsection.locatorEasyTypeInputBox('Animals').click();
            await scholarshippage.scholarshipsection.locatorEasyTypeInputBox('School').click();
            await scholarshippage.scholarshipsection.locatorAnimalTextArea().click({ timeout: 40000 });
            await scholarshippage.scholarshipsection.locatorAnimalTextArea().press('Space');
            await scholarshippage.scholarshipsection.locatorAnimalTextArea().fill('dog');
            await scholarshippage.scholarshipsection.locatorAnimalTextArea().press('Tab');
            await scholarshippage.scholarshipsection.locatorSchoolTextArea().click();
            await scholarshippage.scholarshipsection.locatorSchoolTextArea().press('Space');
            await scholarshippage.scholarshipsection.locatorSchoolTextArea().fill('dogschool');
            await scholarshippage.scholarshipsection.locatorSchoolTextArea().press('Tab');
            await scholarshippage.scholarshipsection.locatorSaveButton().click();
            await scholarshippage.scholarshipsection.locatorWaitSaveBtnEnabled().waitFor({ state: 'hidden' });
            await scholarshippage.scholarshipsection.locatorNextPageSpan().waitFor({ state: 'visible' });
            await scholarshippage.scholarshipsection.locatorNextPageSpan().dblclick();
            await scholarshippage.scholarshipsection.locatorNextPageSpan().click();
            //Review validation
            //lets get to know you
            await scholarshippage.scholarshipsection.locatorLetsGet().click();
            expect(await scholarshippage.scholarshipsection.locatorFirstNamelabel().innerText()).toEqual(emailId.split('@')[0]+"a");
            expect(await scholarshippage.scholarshipsection.locatorLastNamelabel().innerText()).toEqual(emailId.split('@')[0]+"b");
            expect(await scholarshippage.scholarshipsection.locatorEmailAddresslabel().innerText()).toEqual(emailId);
            expect(await scholarshippage.scholarshipsection.locatorStreetAddresslabel().innerText()).toEqual('chennai');
            expect(await scholarshippage.scholarshipsection.locatorStatelabel().innerText()).toEqual('Alaska');
            expect(await scholarshippage.scholarshipsection.locatorCitylabel().innerText()).toEqual('nellore');
            expect(await scholarshippage.scholarshipsection.locatorZipCodeabel().innerText()).toEqual('524001');
            expect(await scholarshippage.scholarshipsection.locatorCountrylabel().innerText()).toEqual('Afghanistan');            
            await scholarshippage.scholarshipsection.locatorLetsGet().click();

            //High School Information
            await scholarshippage.scholarshipsection.locatorHighSchoolInfo().click();
            expect(await scholarshippage.scholarshipsection.locatorHighSchoolNamelabel().innerText()).toEqual('amm');
            expect(await scholarshippage.scholarshipsection.locatorHighSchoolStreetlabel().innerText()).toEqual('chennai');
            expect(await scholarshippage.scholarshipsection.locatorHighSchoolCitylabel().innerText()).toEqual('chennai');
            expect(await scholarshippage.scholarshipsection.locatorHighSchoolStatelabel().innerText()).toEqual('Alaska');
            expect(await scholarshippage.scholarshipsection.locatorHighSchoolZipCodelabel().innerText()).toEqual('540001');
            expect(await scholarshippage.scholarshipsection.locatorGPAlabel().innerText()).toEqual('2');
            expect(await scholarshippage.scholarshipsection.locatorGraduationlabel().innerText()).toContain('2022');                      
            await scholarshippage.scholarshipsection.locatorHighSchoolInfo().click();

            //easy type
            await scholarshippage.scholarshipsection.locatorReviwFormEasy().click();
            expect(await scholarshippage.scholarshipsection.locatorEasyaboutAnimal().innerText()).toEqual('dog');
            expect(await scholarshippage.scholarshipsection.locatorAboutSchool().innerText()).toEqual('dogschool');
            expect(await scholarshippage.scholarshipsection.locatorEasytypes().innerText()).toEqual('Animals, School');
            await scholarshippage.scholarshipsection.locatorReviwFormEasy().click();


            //
            const currentUrl = await scholarshippage.getCurrentPageURL();
            await scholarshippage.scholarshipsection.locatorReviewSubmitBtn().click({ timeout: 40000 });
            await scholarshippage.scholarshipsection.locatorHomePageTitle().waitFor({ state: 'visible' });            
            await page.goto(currentUrl.split('/page')[0]);
            expect(await scholarshippage.scholarshipsection.locatorReviewEditBtn()).toBeHidden();
        });
    });

   

})