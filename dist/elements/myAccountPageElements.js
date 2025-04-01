"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAccountPageElements = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
exports.MyAccountPageElements = {
    myAccountHeader: selenium_webdriver_1.By.xpath("//h1[text()='My account - Customer info']"),
    myAccountEmail: selenium_webdriver_1.By.xpath("//input[@id='Email']")
};
