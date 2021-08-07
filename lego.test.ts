import { Lego } from "./Lego";
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new Lego(driver);

//Boiler Plate above
//Below we will compile our testing
test("Can check if legos are over $100", async () => {
  await page.navigate();
  
});

// afterAll(async () => {
//   await driver.quit();
// });