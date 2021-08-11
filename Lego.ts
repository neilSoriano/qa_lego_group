import { exception } from "console";
import { By, until, WebDriver } from "selenium-webdriver";
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Lego" from our test file
export class Lego {
    driver: WebDriver;

    url: string = "https://www.lego.com/en-us";

    //Below we should change the variables for our xpaths to accommodate Lego.com and our testing


    // locator for continue button to proceed to correct lego site
    continueOnLego: By = By.xpath("//button[@data-test='age-gate-grown-up-cta']");

    // locator for just necessary cookies button
    cookies: By = By.xpath("//button[@data-test='cookie-necessary-button']");

    // locator for lego logo home button
    legoLogo: By = By.xpath("//a[@aria-label='Lego']");

    // locator for search icon on homepage
    searchIcon: By = By.xpath('//button[@data-test="search-input-button"]');

    // locator for secondary 'search bar' on homepage
    searchInput: By = By.name('search');
    
    // locator for piano picture thumbnail
    grandPiano: By = By.xpath('(//a[@href="/en-us/product/grand-piano-21323"])[1]');

    // locator for add to bag button found on item searched item display page
    addToBag: By = By.xpath('//button[@data-test="add-to-bag"]');
    
    // locator button to view current items in bag
    viewMyBag: By = By.xpath('//a[@data-test="view-my-bag"]');

    // locator for proceed to checkout button
    checkoutButton: By = By.xpath('//a[@href="/en-us/checkout"]');

    // locator to continue as guest through checkout phase
    continueAsGuest: By = By.xpath('//button[@data-test="continue-guest"]');

    // locator for first name input field
    firstName: By = By.xpath('(//input[@class="Inputstyles__InputField-sc-12nwzc4-1 lkNQKR"])[1]');

    // locator for last name input field
    lastName: By = By.xpath('(//input[@class="Inputstyles__InputField-sc-12nwzc4-1 lkNQKR"])[2]');

    // address input field
    addressField: By = By.xpath('(//input[contains(@class,"Inputstyles__InputField-sc-12nwzc4-1 lkNQKR")])[3]');
    
    // pop-up address suggestion after typing in first 4 characters of address
    addressSuggestion: By = By.xpath('//ul[@id="suggestions-box"]/li[1]');

    // checkbox found on shippping info page to "Use this as my billing address"
    checkBox: By = By.xpath('//div[@class="Checkbox__StyledCheckbox-sc-19eplce-2 gCruXf"]');

    // submit adress button located on shipping page
    submitAddress_B: By = By.xpath('//button[@data-test="submit-address"]');

    // standard shipping button option(3-5 Business days)
    standardShipping_B: By = By.xpath('//h3[@class="Text__BaseText-sc-178efqu-0 fIzTCH"]/following-sibling::label[1]');

    // Continue to Contact Information button
    contactContinue_B: By = By.xpath('//button[@data-test="proceed-to-information"]');

    // email input field
    emailField: By = By.xpath('//input[@type="email"]');

    // mobile number input field
    mobileNumber: By = By.xpath('//input[@name="phone"]');

    // Back to My Bag button which will return user to their bag from Checkout phase
    backToBag: By = By.xpath('//a[@href="/en-us/cart"]');





    constructor(driver: WebDriver) {
        this.driver = driver;
    }

//Below is a list of async functions that we will use. More need to be added based on what test we will perform

    async checkoutProcess() {
        await this.driver.get(this.url);
        await this.driver.sleep(10000);
        await this.driver.wait(until.elementLocated(this.continueOnLego));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.continueOnLego)));
        await this.driver.findElement(this.continueOnLego).click();

        await this.driver.sleep(2000);

        await this.driver.wait(until.elementLocated(this.cookies));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.cookies)));
        await this.driver.findElement(this.cookies).click();


        await this.driver.wait(until.elementLocated(this.searchIcon));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.searchIcon)));
        await this.driver.findElement(this.searchIcon).click();

    }

    

    
        async continueProcess() {
        await this.driver.sleep(2000);

        await this.driver.wait(until.elementLocated(this.grandPiano));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.grandPiano)));
        await this.driver.findElement(this.grandPiano).click();

        await this.driver.wait(until.elementLocated(this.addToBag));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.addToBag)));
        await this.driver.findElement(this.addToBag).click();

        await this.driver.wait(until.elementLocated(this.viewMyBag));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.viewMyBag)));
        await this.driver.findElement(this.viewMyBag).click();

        await this.driver.sleep(2000);

        await this.driver.wait(until.elementLocated(this.checkoutButton));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.checkoutButton)));
        await this.driver.findElement(this.checkoutButton).click();

        await this.driver.sleep(3000);

        await this.driver.wait(until.elementLocated(this.continueAsGuest));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.continueAsGuest)));
        await this.driver.findElement(this.continueAsGuest).click();

        
    }




async typeFirstName(text: string) {
    return this.sendKeys(this.firstName, `${text}`);

}
async typeLastName(text: string) {
    return this.sendKeys(this.lastName, `${text}`);

}

async typeaddressField(text: string) {
    return this.sendKeys(this.addressField, `${text}`);

}

async continueProcess2 () {

    await this.driver.wait(until.elementLocated(this.addressSuggestion));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.addressSuggestion)));
    await this.driver.findElement(this.addressSuggestion).click();

    await this.driver.sleep(2000);

    await this.driver.wait(until.elementLocated(this.checkBox));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.checkBox)));
    await this.driver.findElement(this.checkBox).click();

    await this.driver.wait(until.elementLocated(this.submitAddress_B));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.submitAddress_B)));
    await this.driver.findElement(this.submitAddress_B).click();

    await this.driver.wait(until.elementLocated(this.standardShipping_B));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.standardShipping_B)));
    await this.driver.findElement(this.standardShipping_B).click();

    await this.driver.sleep(2000);

    await this.driver.wait(until.elementLocated(this.contactContinue_B));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.contactContinue_B)));
    await this.driver.findElement(this.contactContinue_B).click();

}

async typeemailField(text: string) {
    return this.sendKeys(this.emailField, `${text}`);

}

    async typemobileNumber(text: string) {
        return this.sendKeys(this.mobileNumber, `${text}`);

}

async endCheckout () {

    await this.driver.wait(until.elementLocated(this.backToBag));
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.backToBag)));
    await this.driver.findElement(this.backToBag).click();

    await this.driver.sleep(5000)
}







async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
}    

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).click();

    }
}
