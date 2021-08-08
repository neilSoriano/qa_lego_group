import { Lego } from "./Lego";
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new Lego(driver);

// Boiler Plate above
// Below we will compile our testing

test("Can check if legos are over $100 on the first page", async () => {
  await page.navigate();
  await page.click(page.shopTab);
  await page.click(page.priceRanges);
  await page.click(page.over100);
  let prices = await page.getPrices();
  
  // loops through prices array and checks if each item is >= 100
  for(let i=0; i < prices.length; i++) {
    // console.log(prices[i]);
    // convert string to a float
    var numPrices = parseFloat(prices[i]);
    // console.log(numPrices);
    expect(numPrices).toBeGreaterThanOrEqual(100);
  }
});

afterAll(async () => {
  await driver.quit();
});