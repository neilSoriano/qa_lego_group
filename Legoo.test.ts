import { Lego } from "./Lego";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new Lego(driver);


//Bioler Plate above
//Below we will compile our testing

test("Test that a guest account can choose an item and continue through the Checkout process", async () => {
  await page.checkoutProcess();
  await page.sendKeys(page.searchInput,"Grand Piano\n");
  await driver.sleep(3000);
  await page.continueProcess();
  await driver.sleep(3000);
  await page.typeFirstName('Greg');
  await page.typeLastName('Smith');
  await page.typeaddressField('1672');
  await driver.sleep(3000);
  await page.continueProcess2();
  await page.typeemailField('ilovelegos@yahoo.com');
  await page.typemobileNumber('6665554444');
  await driver.sleep(3000);
  await page.endCheckout()
});

afterAll(async () => {
    await driver.quit();
    
    })
