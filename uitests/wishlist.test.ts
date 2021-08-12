import { Lego } from "./Lego";

const chromedriver = require("chromedriver");
import {
  WebDriver,
  Builder,
  Capabilities,
  By,
  until,
} from "selenium-webdriver";
import { wishlist } from "./wishlist";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new Lego(driver);

//Boiler Plate above
//Below we will compile our testing

const searchBar = By.id("Grand Piano");
const addToWishlist = By.id;

//Making a search test for produc piano
//When interacting with lego in chrome, you need to use 'async' keyword

//describe("Search for Piano on lego.com landing page", async () => {
test("Tagging item to my wishlist, from WL adding to My Bag, then back to WL to remove from WL", async () => {
  await page.navigate();
  await page.sendKeys(page.searchInput, "Grand Piano\n");
  await page.click(page.grandPianoImage);
  await page.click(page.addToWishlist);
  await driver.sleep(2000);
  await page.click(page.myWishlist);
  await driver.sleep(2000);
  await page.click(page.addToBagFromWishlist);
  await driver.sleep(2000);
  await page.click(page.myBag);
  await driver.sleep(2000);
  await page.click(page.moveToWishlist);
  await page.click(page.myWishlist);
  await driver.sleep(3000);
  await page.click(page.removeFromWishlist);
  await driver.sleep(3000);
});

afterAll(async () => {
  await driver.quit();
});
