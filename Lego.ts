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
    // locator for shop button 
    shopTab: By = By.id("blt51f52bea34c3fb01_menubutton");
    // locator for price ranges button
    priceRanges: By = By.id("blte6fb96bc03e90791_submenubutton");
    // locator for $75-100 button 
    between75And100: By = By.xpath("//a[@data-analytics-title='price-band-d']");
    // locator for over $100 button
    over100: By = By.xpath("//a[@data-analytics-title='price-band-e']");
    // locator for all prices on a page
    productPrices: By = By.xpath("//span[@data-test='product-price']");
    // locator for theme filter
    themeFilter: By = By.id("product-facet-theme-accordion-title");
    // locator for harry potter theme filter
    harryPotter: By = By.xpath("//span[contains(text(), 'Harry Potter™ ')]");
    // locator for 13+ filter
    thirteenPlus: By = By.xpath("//span[contains(text(), '13+ ')]");
    // locator for hogwarts express lego
    hogwartsExpress: By = By.xpath("//img[@alt='Hogwarts™ Express']");
    // locator for price of hogwarts express
    hogwartsPrice: By = By.xpath("(//span[@data-test='product-price'])[1]");
    // locator for age group of product
    productAgeGroup: By = By.xpath("//span[@data-test='product-details__ages']");
    // locator for listing summary
    listingSummary: By = By.xpath("//div[@data-test='listing-summary']");



    constructor(driver: WebDriver) {
        this.driver = driver;
    }

//Below is a list of async functions that we will use. More need to be added based on what test we will perform

    /**
     * This navigates to https://www.lego.com/en-us. 
     * First, the continue on lego.com button will be clicked to proceed on the correct site.
     * Second, the nessary cookies button will be clicked to lead us to the landing page.
     * It will locate the Lego logo and assure we are on the right page.
     */
    async navigate() {
        await this.driver.get(this.url);

        await this.driver.wait(until.elementLocated(this.continueOnLego));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.continueOnLego)));
        await this.driver.findElement(this.continueOnLego).click();

        await this.driver.wait(until.elementLocated(this.cookies));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.cookies)));
        await this.driver.findElement(this.cookies).click();

        await this.driver.wait(until.elementLocated(this.legoLogo));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.legoLogo)));
    }

    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }

    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getText();
    }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).click();
    }
    
    /**
     * Returns an array of strings containing text appearing from prices on page
     * prices[] will return a substring of the prices, showing only the numbers.
     * @returns the prices of the legos in an array
     * @example
     * await page.getPrices();
     */
    async getPrices() {
        let prices = [];
        await this.driver.wait(until.elementsLocated(this.productPrices));
        let elements = await this.driver.findElements(this.productPrices);
        for(let i = 0; i < elements.length; i++) {
            prices.push(await (await (await elements[i].getText()).substring(7, 13)));
        }

        console.log(prices);
        return prices;
    }

    /**
     * 
     * @returns Returns the price in string format of the product without the $.
     */
    async getProductPrice() {
        await this.driver.wait(until.elementLocated(this.hogwartsPrice));
        let price = await (await this.driver.findElement(this.hogwartsPrice).getText()).substring(7, 12);
        return price;
    }

    /**
     * 
     * @returns Returns the max age listed on the product.
     */
    async getMaxAge() {
        await this.driver.wait(until.elementLocated(this.productAgeGroup));
        let age = await (await this.driver.findElement(this.productAgeGroup).getText()).substring(2,4);
        return age;
    }
  
    // async getAmountOfLandingResults() {
    //     await this.driver.wait(until.elementLocated(this.listingSummary));
    //     let amount = await (await this.driver.findElement(this.listingSummary).getText()).substring(18, 20);
    //     parseInt(amount);
    //     // console.log(amount);
    //     return amount;
    // }

    // async getAmountOfEndingResults() {
    //     await this.driver.wait(until.elementLocated(this.listingSummary));
    //     let amount = await (await this.driver.findElement(this.listingSummary).getText()).substring(15, 18);
    //     parseInt(amount);
    //     // console.log(amount);
    //     return amount;
    // }

    // async comparePrices() {
    //     let prices = await this.driver.findElement(this.productPrices);
    //     console.log(prices);
    // }
}

// import { By, until, WebDriver } from "selenium-webdriver";
// //Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

// //Here we export our class "Lego" from our test file
// export class Lego {
//     driver: WebDriver;

//     url: string = "https://www.lego.com/en-us";

//     //Below we should change the variables for our xpaths to accommodate Lego.com and our testing


//     // locator for continue button to proceed to correct lego site
//     continueOnLego: By = By.xpath("//button[@data-test='age-gate-grown-up-cta']");

//     // locator for just necessary cookies button
//     cookies: By = By.xpath("//button[@data-test='cookie-necessary-button']");

//     // locator for lego logo home button
//     legoLogo: By = By.xpath("//a[@aria-label='Lego']");

//     // locator for search bar
//     searchIcon: By = By.xpath('//button[@data-test="search-input-button"]');
//     // searchIcon: By = By.xpath('//div[@class="MainBarstyles__SearchContainer-sc-1cg7sjw-14 cyhRbR"]//button)[1]');

//     // locator for search input
//     searchInput: By = By.name('search');

//     // locator for grand piano product
//     grandPiano: By = By.xpath('(//a[@href="/en-us/product/grand-piano-21323"])[1]');

//     // locator for add to bag button found on item searched item display page
//     addToBag: By = By.xpath('//button[@data-test="add-to-bag"]');

//     // locator button to view current items in bag
//     viewMyBag: By = By.xpath('//a[@data-test="view-my-bag"]');

//     // locator for proceed to checkout button
//     checkoutButton: By = By.xpath('//a[@kind="transaction"]');

//     // locator to continue as guest through checkout phase
//     continueAsGuest: By = By.xpath('//button[@data-test="continue-guest"]');

//     // locator for first name input field
//     firstName: By = By.xpath('(//input[@class="Inputstyles__InputField-sc-12nwzc4-1 lkNQKR"])[1]');

//     // locator for last name input field
//     lastName: By = By.xpath('//input[@class="Inputstyles__InputField-sc-12nwzc4-1 lkNQKR"])[2]');

    


//     constructor(driver: WebDriver) {
//         this.driver = driver;
//     }

// //Below is a list of async functions that we will use. More need to be added based on what test we will perform

//     async checkoutProcess() {
//         await this.driver.get(this.url);
//         await this.driver.wait(until.elementLocated(this.continueOnLego));
//         await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.continueOnLego)));
//         await this.driver.findElement(this.continueOnLego).click();

//         await this.driver.wait(until.elementLocated(this.cookies));
//         await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.cookies)));
//         await this.driver.findElement(this.cookies).click();

//         await this.driver.wait(until.elementLocated(this.searchIcon));
//         await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.searchIcon)));
//         await this.driver.findElement(this.searchIcon).click();

//     }

//         //  async typePiano(text: string) {
//         //      await this.driver.findElement(this.searchIcon).sendKeys(`${text}`);

//         //  }

//         async sendKeys(elementBy: By, keys) {
//             await this.driver.wait(until.elementLocated(elementBy));
//             return this.driver.findElement(elementBy).sendKeys(keys);
//         }    
    
//         async continueProcess() {
//             await this.driver.wait(until.elementLocated(this.grandPiano));
//             await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.grandPiano)));
//             await this.driver.findElement(this.grandPiano).click();

//             await this.driver.wait(until.elementLocated(this.addToBag));
//             await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.addToBag)));
//             await this.driver.findElement(this.addToBag).click();

//             await this.driver.wait(until.elementLocated(this.viewMyBag));
//             await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.viewMyBag)));
//             await this.driver.findElement(this.viewMyBag).click();

//             await this.driver.wait(until.elementLocated(this.checkoutButton));
//             await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.checkoutButton)));
//             await this.driver.findElement(this.checkoutButton).click();

//             await this.driver.wait(until.elementLocated(this.continueAsGuest));
//             await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.continueAsGuest)));
//             await this.driver.findElement(this.continueAsGuest).click();

        
//     }



// // async typeFirstName(text: string) {
// //     return this.sendKeys(this.firstName, `${text}`);

// // }
// // async typeLastName(text: string) {
// //     return this.sendKeys(this.lastName, `${text}`);


// // }

//     async click(elementBy: By) {
//         await this.driver.wait(until.elementLocated(elementBy));
//         return this.driver.findElement(elementBy).click();

//     }
// }
