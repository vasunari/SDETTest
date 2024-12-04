const { test, expect } = require('@playwright/test');
const { ScholarshipSection } = require('../scholarship/scholarship.section');
const path = require('path');
const fs = require('fs');

export class BasePage {
    constructor(page, testIno) {
        this.page = page;
        this.SECOND = 3000;
        this.MINUTE = this.SECOND * 60;
        this.scholarshipsection = new ScholarshipSection(page);
    }

    makeName = (name = '') => {

        const randomString = (Math.random() + 1).toString(36).substring(7);
        return `${randomString}+${name}`;
    }
    keyBoardBackSpace = () => {
        this.page.keyboard.press('Backspace');
    }
    waitPageLoad = () => {
        //this.page.waitForLoadState('networkidle');
        this.page.setDefaultTimeout({ timeout: 90000 });

    }

    dataLoadCircle = async () => {
        //this.scholarshipsection.locatorLoadingCircle().waitFor({ state: 'visible', timeout: 180000 });
        this.scholarshipsection.locatorLoadingCircle().waitFor({ state: 'hidden', timeout: 180000 });
    }

    uploadAllFiles = async () => {
        const fileChooserPromise = this.page.waitForEvent('filechooser');        
        await this.scholarshipsection.locatorUploadFile().click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join('D:/AkithTask/e2e/dataFiles/', 'SDET Interview Package (1).zip'));        
    }

    getCurrentPageURL = async () => {
             return this.page.url();   
    }

   

    getTestData = (TCno, filed) => {
        try {
            // Read and parse the JSON file synchronously
            const jsonData = JSON.parse(fs.readFileSync('D://AkithTask//e2e//testData//testdata.json', 'utf8'));
    
            // Check if the TCno exists in the JSON data
            if (jsonData.hasOwnProperty(TCno)) {
                const testData = jsonData[TCno];
    
                // Check if testData is an object, and access the required field from it
                if (typeof testData === 'object' && testData !== null) {
                    // Check if the 'filed' exists as a key in the object and return the value
                    if (testData.hasOwnProperty(filed)) {
                        return `${testData[filed]}`;  // Return the value of the field as a string
                    } else {
                        throw new Error(`Field ${filed} not found in the data for TCno ${TCno}.`);
                    }
                } else {
                    // If testData is not an object, return the concatenated result as string
                    return `${testData}.${filed}`;
                }
            } else {
                throw new Error(`TCno ${TCno} not found in the JSON data.`);
            }
        } catch (error) {
            console.error('Error reading or parsing the JSON file:', error);
            return null; // Return null or an error message as needed
        }
    };

}