"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPageElements = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
exports.RegisterPageElements = {
    genderMale: selenium_webdriver_1.By.xpath("//input[@id='gender-male']"),
    genderFemale: selenium_webdriver_1.By.xpath("//input[@id='gender-female']"),
    firstName: selenium_webdriver_1.By.xpath("//input[@name='FirstName']"),
    lastName: selenium_webdriver_1.By.xpath("//input[@name='LastName']"),
    email: selenium_webdriver_1.By.xpath("//input[@name='Email']"),
    password: selenium_webdriver_1.By.xpath("//input[@name='Password']"),
    confirmPassword: selenium_webdriver_1.By.xpath("//input[@name='ConfirmPassword']"),
    registrationButton: selenium_webdriver_1.By.xpath("//input[@id='register-button']"),
    // success and error messages
    successMessage: selenium_webdriver_1.By.xpath("//div[@class='result']"),
    continueButton: selenium_webdriver_1.By.xpath("//input[@value='Continue']"),
    wrongEmailMessage: selenium_webdriver_1.By.xpath("//span[text()='Wrong email']"),
    passwordErrorMessage: selenium_webdriver_1.By.xpath("//span[@for='Password']"),
    confirmPasswordMessage: selenium_webdriver_1.By.xpath("//span[@for='ConfirmPassword']"),
    firstNameErrorMessage: selenium_webdriver_1.By.xpath("//span[@for='FirstName']"),
    lastNameErrorMessage: selenium_webdriver_1.By.xpath("//span[@for='LastName']"),
    emailErrorMessage: selenium_webdriver_1.By.xpath("//span[@for='Email']"),
};
