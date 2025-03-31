"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPageElements = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
exports.LoginPageElements = {
    emailField: selenium_webdriver_1.By.id('Email'),
    passwordField: selenium_webdriver_1.By.id('Password'),
    loginButton: selenium_webdriver_1.By.xpath("//input[@value='Log in']")
};
