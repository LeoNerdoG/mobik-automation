"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageElements = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
exports.HomePageElements = {
    registerButton: selenium_webdriver_1.By.xpath("//a[text()='Register']"),
    logoutButton: selenium_webdriver_1.By.xpath("//a[text()='Log out']"),
    loginButton: selenium_webdriver_1.By.xpath("//a[text()='Log in']"),
    myAccount: selenium_webdriver_1.By.xpath("//a[text()='My account']")
};
