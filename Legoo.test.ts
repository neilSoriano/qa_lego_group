import { Lego } from "./Lego";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new Lego(driver);


//Bioler Plate above
//Below we will compile our testing

test("Test Checkout Process", async () => {
  await page.checkoutProcess();
  await page.typePiano("Grand Piano");
  // await page.continueProcess();
  // await page.typeFirstName('Greg');
  // await page.typeLastName('Smith');
});

afterAll(async () => {
    await driver.quit();
    
    })
