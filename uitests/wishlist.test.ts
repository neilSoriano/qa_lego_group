import { Lego } from "./Lego";
const chromedriver = require("chromedriver");
import {
  WebDriver,
  Builder,
  Capabilities,
  By,
  until,
} from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new Lego(driver);

//Bioler Plate above
//Below we will compile our testing
