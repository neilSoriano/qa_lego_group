import { Lego } from "./Lego";
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new Lego(driver);

// Boiler Plate above
// Below we will compile our testing

// ******** Comment out or uncomment a test to run individually ************

// test("Can check if legos are over $100 on the first page", async () => {
//   await page.navigate();
//   await page.click(page.shopTab);
//   await driver.sleep(2000);
//   await page.click(page.priceRanges);
//   await driver.sleep(2000);
//   await page.click(page.over100);
//   await driver.sleep(2000);
//   let prices = await page.getPrices();
  
//   // loops through prices array and checks if each item is >= 100
//   for(let i=0; i < prices.length; i++) {
//     // console.log(prices[i]);
//     // convert string to a float to properly display prices
//     var numPrices = parseFloat(prices[i]);
//     // console.log(numPrices);
//     expect(numPrices).toBeGreaterThan(100);
//   }
//   await driver.sleep(3000);
// });

test("Can check if the filters of a page within the price ranges works", async () => {
  await page.navigate();
  await page.click(page.shopTab);
  await driver.sleep(2000);
  await page.click(page.priceRanges);
  await driver.sleep(2000);
  await page.click(page.between75And100);
  await driver.sleep(2000);
  await page.click(page.themeFilter);
  await driver.sleep(2000);
  await page.click(page.harryPotter);
  await driver.sleep(2000);
  await page.click(page.thirteenPlus);
  await driver.sleep(2000);
  await page.click(page.hogwartsExpress);
  await driver.sleep(2000);

  let price = await parseFloat(await page.getProductPrice());
  console.log(price);
  let age = await parseInt(await page.getMaxAge());
  console.log(age);

  expect(price).toBeGreaterThanOrEqual(75);
  expect(price).toBeLessThanOrEqual(100);
  expect(age).toBeGreaterThanOrEqual(13);
  
});

afterAll(async () => {
  await driver.quit();
});