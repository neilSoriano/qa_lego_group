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

    // locator for search bar
    searchBar: By = By.xpath('//button[@data-test="search-input-button"]');
    // searchBar: By = By.xpath('//div[@class="MainBarstyles__SearchContainer-sc-1cg7sjw-14 cyhRbR"]//button)[1]');

    // locator for picture piano pop up result
    pianoResults: By = By.xpath('//a[@data-test="product-suggestion-link"])[1]');

    // locator for add to bag button found on item searched item display page
    addToBag: By = By.xpath('//button[@data-test="add-to-bag"]');

    // locator button to view current items in bag
    viewMyBag: By = By.xpath('//a[@data-test="view-my-bag"]');

    // locator for proceed to checkout button
    checkoutButton: By = By.xpath('//a[contains(@class,"Linksstyles__AnchorButton-sc-684acv-1 boRUIn")]');

    // locator to continue as guest through checkout phase
    continueAsGuest: By = By.xpath('//button[@data-test="continue-guest"]');

    // locator for first name input field
    firstName: By = By.xpath('(//input[@class="Inputstyles__InputField-sc-12nwzc4-1 lkNQKR"])[1]');

    // locator for last name input field
    lastName: By = By.xpath('//input[@class="Inputstyles__InputField-sc-12nwzc4-1 lkNQKR"])[2]');

    


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


        await this.driver.wait(until.elementLocated(this.searchBar));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.searchBar)));
        await this.driver.findElement(this.searchBar).click();

    }

         async typePiano(text: string) {
             return this.driver.findElement(this.searchBar).sendKeys(`{text}`);

         }

        // // async sendKeys(elementBy: By, keys) {
        // //     await this.driver.wait(until.elementLocated(elementBy));
        // //     return this.driver.findElement(elementBy).sendKeys(keys);
        // }    
    
        async continueProcess() {
        await this.driver.wait(until.elementLocated(this.pianoResults));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.pianoResults)));
        await this.driver.findElement(this.pianoResults).click();

        await this.driver.wait(until.elementLocated(this.addToBag));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.addToBag)));
        await this.driver.findElement(this.addToBag).click();

        await this.driver.wait(until.elementLocated(this.viewMyBag));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.viewMyBag)));
        await this.driver.findElement(this.viewMyBag).click();

        await this.driver.wait(until.elementLocated(this.continueAsGuest));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.continueAsGuest)));
        await this.driver.findElement(this.continueAsGuest).click();

        
    }



// async typeFirstName(text: string) {
//     return this.sendKeys(this.firstName, `${text}`);

// }
// async typeLastName(text: string) {
//     return this.sendKeys(this.lastName, `${text}`);


// }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).click();

    }
}
