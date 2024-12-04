// @ts-check
const { test, expect } = require('@playwright/test');
const { BasePage } = require('../common/base.page')
const { ScholarshipSection } = require('./scholarship.section');

export class ScholarshipPage extends BasePage {
    constructor(page, testIno) {
        super(page, testIno)
        this.scholarshipsection = new ScholarshipSection(page);
    }

    async fillAddEntry(shortname='', val='', leadrtshiprole='', description='') {
        await test.step('Fill Add Entry Deatils', async () => {                                    
            await this.scholarshipsection.locatorShortInput().click({ force: true ,timeout: 90000 });
            await this.scholarshipsection.locatorShortInput().fill(shortname, { force: true });
            await this.scholarshipsection.locatorShortInput().press('Tab');             
            await this.scholarshipsection.locatorNoOfYearsInputBox().dblclick();           
            await this.scholarshipsection.locatorNoOfYearsInputBox().fill(val, { force: true });
            await this.scholarshipsection.locatorNoOfYearsInputBox().press('Tab');                      
            await this.scholarshipsection.locatorLeaderShipList().click({ force: true, timeout: 90000 });
            await this.scholarshipsection.locatorLeaderShipList().fill(leadrtshiprole, { force: true });
            await this.scholarshipsection.locatorLeaderShipList().press('Tab');           
            await this.scholarshipsection.locatorDescriptionInvolList().press('Space');            
            await this.scholarshipsection.locatorDescriptionInvolList().click({ force: true, timeout: 90000 });
            await this.scholarshipsection.locatorDescriptionInvolList().press('Enter');
            await this.scholarshipsection.locatorDescriptionInvolList().fill(description, { force: true });
            await this.scholarshipsection.locatorAddSpan().click();

        })
    }



}