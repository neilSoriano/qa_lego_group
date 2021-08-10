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

    


    constructor(driver: WebDriver) {
        this.driver = driver;
    }

//Below is a list of async functions that we will use. More need to be added based on what test we will perform

    async checkoutProcess() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.continueOnLego));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.continueOnLego)));
        await this.driver.findElement(this.continueOnLego).click();

        await this.driver.wait(until.elementLocated(this.cookies));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.cookies)));
        await this.driver.findElement(this.cookies).click();


        await this.driver.wait(until.elementLocated(this.searchIcon));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.searchIcon)));
        await this.driver.findElement(this.searchIcon).click();

    }

    

        async sendKeys(elementBy: By, keys) {
            await this.driver.wait(until.elementLocated(elementBy));
            return this.driver.findElement(elementBy).sendKeys(keys);
        }    
    
        async continueProcess() {
        await this.driver.wait(until.elementLocated(this.grandPiano));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.grandPiano)));
        await this.driver.findElement(this.grandPiano).click();

        await this.driver.wait(until.elementLocated(this.addToBag));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.addToBag)));
        await this.driver.findElement(this.addToBag).click();

        await this.driver.wait(until.elementLocated(this.viewMyBag));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.viewMyBag)));
        await this.driver.findElement(this.viewMyBag).click();

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

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).click();

    }
}
