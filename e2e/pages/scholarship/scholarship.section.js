//@ts-check

export class ScholarshipSection {
    constructor(page) {
        this.page = page;
    }

    //locators
    locatorLoadingCircle = () => this.page.locator('//span[contains(@class,"mantine-LoadingOverlay-loader")]');
    locatorLogInToApplyLink = () => this.page.getByRole('link', { name: 'Log In to Apply' });
    locatorEmailAddressText = () => this.page.getByText('Email Address', { exact: true });
    locatorEmailAddressInputBox = () => this.page.getByPlaceholder('Email Address');
    locatorNextLabel = () => this.page.getByLabel('Next');
    locatorFirstNameInputBox = () => this.page.getByLabel('First Name');
    locatorLastNameInputBox = () => this.page.getByLabel('Last Name');
    locatorMobilePhoneInputBox = () => this.page.locator('input[type="tel"]');
    locatorCreateAPasswordInputBox = () => this.page.getByLabel('Create a Password');
    locatorConfirmCheckBox = () => this.page.getByLabel('I confirm that I am at least');
    locatorSubmitLable = () => this.page.getByLabel('Submit');

    locatorStreetAddressInputBox = () => this.page.getByPlaceholder('Enter your street address');
    locatorStateDropDown = () => this.page.getByPlaceholder('Enter your state');
    locatorEnterCityInputBox = () => this.page.getByPlaceholder('Enter your city');
    locatorZipCodeInputBox = () => this.page.getByPlaceholder('Enter your zip code');
    locatorCountryDropDown = () => this.page.getByPlaceholder('Enter your country');
    locatorNextPageButton = () => this.page.getByRole('button', { name: 'Next Page' });
    locatorNextPageSpan = () => this.page.locator('//button[@data-size="lg"]/span/span[text()="Next Page"]');
    locatorHighSchoolStateDropDown = () => this.page.getByPlaceholder('Enter high school state');

    locatorSection = () => this.page.locator('//section');    
    locatorAddEntryButton = () => this.page.locator('//span[contains(text(),"Add Entry")]');
    locatorAddEntryErrorMsg = () => this.page.locator('div[style="position: relative;"] > p');   
    locatorShortInput = () => this.page.locator('//section/div//input[@placeholder="Short Input"]');
    locatorNoOfYearsInputBox = () => this.page.locator('input[placeholder="123"]');    
    locatorLeaderShipList = () => this.page.locator('(//section//textarea)[1]');
    locatorDescriptionInvolList = () => this.page.locator('(//section//textarea)[2]');
    locatorAddButton = () => this.page.getByRole('button', { name: 'Add' });
    locatorAddSpan = () => this.page.locator('//span[text()="Add"]');
    locatorSaveButton = () => this.page.locator('//button[@data-size="lg"]/span/span[text()="Save"]');
    locatorWaitSaveBtnEnabled = () => this.page.locator('button[data-disabled="true"]');
    locatorHomePageTitle = () => this.page.locator('//h1[contains(text(),"Welcome back, ")]');

    //High School Information
    locatorHighSchoolNameInputBox = () => this.page.locator('//input[contains(@placeholder,"Please enter the name of your")]');
    locatorSchoolStreetAddressInputBox = () => this.page.locator('//input[contains(@placeholder,"Enter high school street")]');
    locatorSchoolCityInputBox = () => this.page.locator('//input[contains(@placeholder,"Enter high school city")]');
    locatorSchoolZipCodeInputBox = () => this.page.locator('(//input[@inputmode="numeric"])[1]');
    locatorGPAInputBox = () => this.page.locator('(//input[@inputmode="numeric"])[2]');
    locatorDateInputBox = () => this.page.locator('//input[contains(@placeholder,"Enter a date")]');
    locatorUploadFile = () => this.page.getByRole('button', { name: 'Upload File' });
    locatorUploadFileIcon = () => this.page.locator('svg[class="tabler-icon tabler-icon-x "]');
    //easy type
    locatorEasyTypeInputBox = (name) => this.page.locator(`input[value=${name}]`);
    locatorAnimalTextArea = () => this.page.locator('(//textarea[@placeholder="Long Input"])[1]');
    locatorSchoolTextArea = () => this.page.locator('(//textarea[@placeholder="Long Input"])[2]');

    //review your application
    locatorReviewSubmitBtn = () => this.page.locator('//p[text()="Submit"]');
    locatorReviewEditBtn = () => this.page.locator('(//span[text()="Edit"])[1]');
    locatorReviwFormEasy = () => this.page.getByRole('button', { name: '4.Essay Edit' });
    locatorAboutSchool = () => this.page.locator('//p[text()="Essay about School"]/parent::*[1]/p[2]');
    locatorEasyaboutAnimal = () => this.page.locator('//p[text()="Essay about Animals"]/parent::*[1]/p[2]');
    locatorEasytypes = () => this.page.locator('//p[text()="Please select the essay types you want to write about:"]/parent::*[1]/p[2]');
    //lets get to know you!
    locatorLetsGet = () => this.page.getByRole('button', { name: '1.Lets get to know you! Edit' });
    locatorFirstNamelabel = () => this.page.locator('//p[text()="First Name"]/parent::*[1]/p[2]');
    locatorLastNamelabel = () => this.page.locator('//p[text()="Last Name"]/parent::*[1]/p[2]');
    locatorEmailAddresslabel = () => this.page.locator('//p[text()="Email Address"]/parent::*[1]/p[2]');
    locatorStreetAddresslabel = () => this.page.locator('//p[text()="Street Address"]/parent::*[1]/p[2]');
    locatorStatelabel = () => this.page.locator('//p[text()="State (Full)"]/parent::*[1]/p[2]');
    locatorCitylabel = () => this.page.locator('//p[text()="City"]/parent::*[1]/p[2]');
    locatorZipCodeabel = () => this.page.locator('//p[text()="Zip Code"]/parent::*[1]/p[2]');
    locatorCountrylabel = () => this.page.locator('//p[text()="Country"]/parent::*[1]/p[2]');
    //High school information
    locatorHighSchoolInfo = () => this.page.getByRole('button', { name: '3.High School Information Edit' })
    locatorHighSchoolNamelabel = () => this.page.locator('//p[text()="High School Name"]/parent::*[1]/p[2]');
    locatorHighSchoolStreetlabel = () => this.page.locator('//p[text()="High School Street Address"]/parent::*[1]/p[2]');
    locatorHighSchoolCitylabel = () => this.page.locator('//p[text()="High School City"]/parent::*[1]/p[2]');
    locatorHighSchoolStatelabel = () => this.page.locator('//p[text()="High School State (Full)"]/parent::*[1]/p[2]');
    locatorHighSchoolZipCodelabel = () => this.page.locator('//p[text()="High School Zip Code"]/parent::*[1]/p[2]');
    locatorGraduationlabel = () => this.page.locator('//p[text()="Year of High School Graduation"]/parent::*[1]/p[2]');
    locatorGPAlabel = () => this.page.locator('//p[text()="GPA"]/parent::*[1]/p[2]');

    



}