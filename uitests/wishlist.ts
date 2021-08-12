import { By, until, WebDriver } from "selenium-webdriver";
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Lego" from our test file
export class wishlist {
  driver: WebDriver;
  url: string = "https://www.lego.com/en-us";

  //Below we should change the variables for our xpaths to accommodate Lego.com and our testing

  // locator for continue button to proceed to correct lego site
  continueOnLego: By = By.xpath("//button[@data-test='age-gate-grown-up-cta']");
  // locator for just necessary cookies button
  cookies: By = By.xpath("//button[@data-test='cookie-necessary-button']");
  // locator for search icon magnifying glass on homepage
  searchIcon: By = By.xpath('//button[@data-test="search-input-button"]');
  // locator for secondary 'search bar' on homepage
  searchInput: By = By.name("search");
  // locater for adding Grand Piano text
  grandPiano: By = By.xpath("//img[@alt='Grand Piano'");
  // locator for piano picture thumbnail which takes you to piano page
  grandPianoImage: By = By.xpath(
    '(//a[@href="/en-us/product/grand-piano-21323"])[1]'
  );
  // locator points to heart button icon for wishlist
  addToWishlist: By = By.xpath("(//button[@data-test='add-to-wishlist'])[1]");
  // locator takes user to wishlist page
  myWishlist: By = By.xpath("a[data-test='util-bar-wishlist']");
  // locator lets user add item from wishlist to My Bag (cart)
  addToBag: By = By.xpath("button[data-test='add-to-cart-from-wishlist']");
  // locator takes user to My Bag (cart)
  myBag: By = By.xpath("a[data-test='util-bar-cart']");
  // locator moves item back to wishlist from cart
  moveToWishlist: By = By.xpath("//button[@data-test='move-to-wishlist']");
  // locator deletes item from wishlist
  removeFromWishlist: By = By.xpath(
    "//button[@data-test='remove-from-wishlist']"
  );

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  //Below is a list of async functions that we will use. More need to be added based on what test we will perform

  /**
   * This navigates to https://www.lego.com/en-us.
   * First, the continue on lego.com button will be clicked to proceed on the correct site.
   * Second, the nessary cookies button will be clicked to lead us to the landing page.
   * Third, the search container will be clicked to enter in Grand Piano.
   * Forth, a pop down suggestion will appear with Grand Piano as the first option.
   * Sixth, Grand Piano page will load.
   * Seventh, the heart wishlist icon can now be clicked to apply item to wishlist.
   * Eighth, the Wishlist will now show 1 item added.
   * Ninth, user will now click on the wishlist icon in yellow banner.
   * Tenth, user will be taken to wishlist page which shows the item they tagged.
   *
   */

  async navigate() {
    await this.driver.get(this.url);

    await this.driver.wait(until.elementLocated(this.continueOnLego));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.continueOnLego))
    );
    await this.driver.findElement(this.continueOnLego).click();

    await this.driver.wait(until.elementLocated(this.cookies));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.cookies))
    );
    await this.driver.findElement(this.cookies).click();
  }

  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async;

  async wishlist() {
    await this.driver.wait(until.elementLocated(this.searchIcon));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.searchIcon))
    );
    await this.driver.findElement(this.searchIcon).click();

    await this.driver.wait(until.elementLocated(this.searchInput));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.searchInput))
    );
    await this.driver.findElement(this.searchInput).click();

    await this.driver.wait(until.elementLocated(this.grandPiano));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.grandPiano))
    );
    await this.driver.findElement(this.grandPiano).click();

    await this.driver.wait(until.elementLocated(this.grandPianoImage));
    await this.driver.wait(
      until.elementIsVisible(
        await this.driver.findElement(this.grandPianoImage)
      )
    );
    await this.driver.findElement(this.grandPianoImage).click();

    await this.driver.wait(until.elementLocated(this.addToWishlist));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.addToWishlist))
    );
    await this.driver.findElement(this.addToWishlist).click();

    await this.driver.wait(until.elementLocated(this.myWishlist));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.myWishlist))
    );
    await this.driver.findElement(this.myWishlist).click();

    await this.driver.wait(until.elementLocated(this.myBag));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.myBag))
    );
    await this.driver.findElement(this.myBag).click();

    await this.driver.wait(until.elementLocated(this.moveToWishlist));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.moveToWishlist))
    );
    await this.driver.findElement(this.moveToWishlist).click();

    await this.driver.wait(until.elementLocated(this.moveToWishlist));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.moveToWishlist))
    );
    await this.driver.findElement(this.moveToWishlist).click();
  }

  // async typeGrandPiano(text: string) {
  // return this.driver.findElement(elementBy).sendKeys(keys);
  // }

  /**
   *
   */
}
