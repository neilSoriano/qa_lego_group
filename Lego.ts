import { By, until, WebDriver } from "selenium-webdriver";
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Lego" from our test file
export class Lego {
    driver: WebDriver;

    url: string = "https://www.lego.com/en-us";

    //Below we should change the variables for our xpaths to accommodate Lego.com and our testing

    headerField: By = By.xpath
    nameField: By = By.xpath
    weightField: By = By.xpath
    InputFields: By = By.xpath
    results: By = By.xpath
    

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

//Below is a list of async functions that we will use. More need to be added based on what test we will perform

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.InputFields));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.InputFields)));
        
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
}